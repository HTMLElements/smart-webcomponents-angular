
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.editor';

import * as pkg from './../common/marked.min.js';
window.marked = pkg.default;
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('smart-webcomponents-angular/editor', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['smart-webcomponents-angular'] = global['smart-webcomponents-angular'] || {}, global['smart-webcomponents-angular'].editor = {}), global.ng.core));
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

    var EditorComponent = /** @class */ (function (_super) {
        __extends(EditorComponent, _super);
        function EditorComponent(ref) {
            var _this = _super.call(this, ref) || this;
            _this.eventHandlers = [];
            /** @description This event is triggered on blur if the content is changed.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
            *   oldValue - The old value before the change.
            *   value - The new value after the change.
            */
            _this.onChange = new core.EventEmitter();
            /** @description This event is triggered after user input to indicate that the content is changed via user interaction.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
            *   oldValue - The old value before the input change.
            *   value - The new value after the input change.
            */
            _this.onChanging = new core.EventEmitter();
            /** @description This event is triggered before a Toolbar action is started. The event can be canceled via event.preventDefault().
            *  @param event. The custom event. 	Custom event was created with: event.detail(	name)
            *   name - The name of the action.
            */
            _this.onActionStart = new core.EventEmitter();
            /** @description This event is triggered when a Toolbar action has ended.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	name)
            *   name - The name of the action.
            */
            _this.onActionEnd = new core.EventEmitter();
            /** @description This event is triggered when a Context menu item has been clicked.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	originalEvent, 	value)
            *   originalEvent - The original click event.
            *   value - The value of the item.
            */
            _this.onContextMenuItemClick = new core.EventEmitter();
            /** @description This event is triggered when the Context Menu is opened.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner)
            *   target - The toolbar that is the target of the operation.
            *   owner - The tooltip target (the owner of the tooltip).
            */
            _this.onContextMenuOpen = new core.EventEmitter();
            /** @description This event is triggered when the Context Menu is opening. The opening operation can be canceled via event.preventDefault().
            *  @param event. The custom event. 	Custom event was created with: event.detail(	target)
            *   target - The toolbar that is the target of the operation.
            */
            _this.onContextMenuOpening = new core.EventEmitter();
            /** @description This event is triggered when the Context Menu is closed.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner)
            *   target - The toolbar that is the target of the operation.
            *   owner - The tooltip target (the owner of the tooltip).
            */
            _this.onContextMenuClose = new core.EventEmitter();
            /** @description This event is triggered when the Context Menu is closing. The closing operation can be canceled via event.preventDefault().
            *  @param event. The custom event. 	Custom event was created with: event.detail(	target)
            *   target - The toolbar that is the target of the operation.
            */
            _this.onContextMenuClosing = new core.EventEmitter();
            /** @description This event is triggered when an image/table/video resizing has started.
            *  @param event. The custom event. 	*/
            _this.onResizeStart = new core.EventEmitter();
            /** @description This event is triggered when an image/table/video resizing has ended.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	target)
            *   target - The element that is resized (image/table or video).
            */
            _this.onResizeEnd = new core.EventEmitter();
            /** @description This event is triggered when the inline Toolbar is opened.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner)
            *   target - The toolbar that is the target of the operation.
            *   owner - The tooltip target (the owner of the tooltip).
            */
            _this.onInlineToolbarOpen = new core.EventEmitter();
            /** @description This event is triggered when the inline Toolbar is opening. The opening operation can be canceled by calling event.preventDefault() in the event handler function.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	target)
            *   target - The toolbar that is the target of the operation.
            */
            _this.onInlineToolbarOpening = new core.EventEmitter();
            /** @description This event is triggered when the inline Toolbar is closed.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner)
            *   target - The toolbar that is the target of the operation.
            *   owner - The tooltip target (the owner of the tooltip).
            */
            _this.onInlineToolbarClose = new core.EventEmitter();
            /** @description This event is triggered when the inline Toolbar is closing.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	target)
            *   target - The toolbar that is the target of the operation. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
            */
            _this.onInlineToolbarClosing = new core.EventEmitter();
            /** @description This event is triggered when the Drop Down Toolbar is opened.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner)
            *   target - The toolbar that is the target of the operation.
            *   owner - The tooltip target (the owner of the tooltip).
            */
            _this.onDropDownToolbarOpen = new core.EventEmitter();
            /** @description This event is triggered when the Drop Down Toolbar is opening. The opening operation can be canceled by calling event.preventDefault() in the event handler function.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	target)
            *   target - The toolbar that is the target of the operation.
            */
            _this.onDropDownToolbarOpening = new core.EventEmitter();
            /** @description This event is triggered when the Drop Down Toolbar is closed.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner)
            *   target - The toolbar that is the target of the operation.
            *   owner - The tooltip target (the owner of the tooltip).
            */
            _this.onDropDownToolbarClose = new core.EventEmitter();
            /** @description This event is triggered when the Drop Down Toolbar is closing. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	target)
            *   target - The toolbar that is the target of the operation.
            */
            _this.onDropDownToolbarClosing = new core.EventEmitter();
            /** @description This event is triggered the Dialog Window is opened.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item)
            *   target - The window that is the target of the operation.
            *   item - The toolbar item is the target of the operation.
            */
            _this.onDialogOpen = new core.EventEmitter();
            /** @description This event is triggered before the Dialog Window is opened. The event can be prevented via event.preventDefault().
            *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item)
            *   target - The window that is the target of the operation.
            *   item - The toolbar item that is the target of the operation.
            */
            _this.onDialogOpening = new core.EventEmitter();
            /** @description This event is triggered when the Dialog Window is closed.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item)
            *   target - The window that is the target of the operation.
            *   item - The toolbar item that is the target of the operation.
            */
            _this.onDialogClose = new core.EventEmitter();
            /** @description This event is triggered before the Dialog Window is closing. The event can be prevented via event.preventDefault().
            *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item)
            *   target - The window that is the target of the operation.
            *   item - The toolbar item that is the target of the operation.
            */
            _this.onDialogClosing = new core.EventEmitter();
            /** @description This event is triggered when the uploading of an image/video is successful.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item, 	filename, 	type, 	size, 	index, 	status, 	serverResponse)
            *   target - The file upload element that is the target of the operation.
            *   item - The toolbar item that is the target of the operation.
            *   filename - The name of the uploaded file.
            *   type - The type of the uploaded file.
            *   size - The size of the uploaded file.
            *   index - The index of the uploaded file.
            *   status - The status of the uploaded file. Whether there was an error or success.
            *   serverResponse - The response of the remote server.
            */
            _this.onImageUploadSuccess = new core.EventEmitter();
            /** @description This event is triggered when the uploading of an image/video is unsuccessful.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item, 	filename, 	type, 	size, 	index, 	status, 	serverResponse)
            *   target - The file upload element that is the target of the operation.
            *   item - The toolbar item that is the target of the operation.
            *   filename - The name of the canceled file.
            *   type - The type of the canceled file.
            *   size - The size of the canceled file.
            *   index - The index of the canceled file.
            *   status - The status of the uploaded file. Whether there was an error or success.
            *   serverResponse - The response of the remote server.
            */
            _this.onImageUploadFailed = new core.EventEmitter();
            /** @description This event is triggered when a Toolbar item is clicked.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	originalEvent, 	value)
            *   originalEvent - The original click event.
            *   value - The name of the toolbar item that was clicked.
            */
            _this.onToobarItemClick = new core.EventEmitter();
            /** @description This event is triggered when a message is closed.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	instance)
            *   instance - The toast item that is the target of the operation.
            */
            _this.onMessageClose = new core.EventEmitter();
            /** @description This event is triggered when a message is opened.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	instance)
            *   instance - The toast item that is the target of the operation.
            */
            _this.onMessageOpen = new core.EventEmitter();
            _this.nativeElement = ref.nativeElement;
            return _this;
        }
        /** @description Creates the component on demand.
         * @param properties An optional object of properties, which will be added to the template binded ones.
         */
        EditorComponent.prototype.createComponent = function (properties) {
            if (properties === void 0) { properties = {}; }
            this.nativeElement = document.createElement('smart-editor');
            for (var propertyName in properties) {
                this.nativeElement[propertyName] = properties[propertyName];
            }
            return this.nativeElement;
        };
        Object.defineProperty(EditorComponent.prototype, "animation", {
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
        Object.defineProperty(EditorComponent.prototype, "autoLoad", {
            /** @description Automatically loads the last saved state of the editor (from local storage) on element initialization. An id must be provided in order to load a previously saved state. */
            get: function () {
                return this.nativeElement ? this.nativeElement.autoLoad : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.autoLoad = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EditorComponent.prototype, "autoSave", {
            /** @description Automatically saves the current content of the editor. Saving happens at time intervas determined by the autoSaveInterval property while the element on focus. An id must be provided to the element in order to store the state. */
            get: function () {
                return this.nativeElement ? this.nativeElement.autoSave : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.autoSave = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EditorComponent.prototype, "autoSaveInterval", {
            /** @description The property that determines the interval to automatically save the state of the Editor when the autoSave property is set. */
            get: function () {
                return this.nativeElement ? this.nativeElement.autoSaveInterval : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.autoSaveInterval = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EditorComponent.prototype, "charCountFormatFunction", {
            /** @description A formatting function for the char counter. Takes two arguments: chars - the current number of characters inside the Editor.maxCharCount - the maximum number of characters inside the Editor. */
            get: function () {
                return this.nativeElement ? this.nativeElement.charCountFormatFunction : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.charCountFormatFunction = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EditorComponent.prototype, "contentFiltering", {
            /** @description Determines the content filtering settings. */
            get: function () {
                return this.nativeElement ? this.nativeElement.contentFiltering : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.contentFiltering = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EditorComponent.prototype, "contextMenu", {
            /** @description Determines the context menu for the Editor. The context menu is triggered when the user right clicks on the content area of the Editor. */
            get: function () {
                return this.nativeElement ? this.nativeElement.contextMenu : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.contextMenu = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EditorComponent.prototype, "contextMenuDataSource", {
            /** @description Allows to customize default the context menu of the Editor. The property accepts an array of items which can be strings that represent the value of the item, or objects of the following format: { label: string, value: string }, where the label will be displayed and the value will be action value for the item. The property also accepts a function that must return an array of items with the following format function (target: HTMLElement, type: string, defaultItems: string[]) { return defaultItems } and the following arguments: target - the element that is the target of the context menu.type - the type of context menu ( whether it's a table, image, link or other)defaultItems - an array of strings which represent the default items for the context menu. */
            get: function () {
                return this.nativeElement ? this.nativeElement.contextMenuDataSource : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.contextMenuDataSource = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EditorComponent.prototype, "dataExport", {
            /** @description Sets the Editor's Data Export options. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dataExport : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dataExport = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EditorComponent.prototype, "disabled", {
            /** @description Enables or disables the Editor. */
            get: function () {
                return this.nativeElement ? this.nativeElement.disabled : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.disabled = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EditorComponent.prototype, "disableEditing", {
            /** @description Disables content editing inside Editor. */
            get: function () {
                return this.nativeElement ? this.nativeElement.disableEditing : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.disableEditing = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EditorComponent.prototype, "disableSearchBar", {
            /** @description Disables the Quick Search Bar. */
            get: function () {
                return this.nativeElement ? this.nativeElement.disableSearchBar : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.disableSearchBar = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EditorComponent.prototype, "editMode", {
            /** @description Determines the edit mode for the Editor. By default the editor's content accepts and parses HTML. However if set to 'markdown' the Editor can be used as a full time Markdown Editor by parsing the makrdown to HTML in preview mode. */
            get: function () {
                return this.nativeElement ? this.nativeElement.editMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.editMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EditorComponent.prototype, "enableHtmlEncode", {
            /** @description Determines whether the value returned from getHTML method and Source Code view are encoded or not. */
            get: function () {
                return this.nativeElement ? this.nativeElement.enableHtmlEncode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.enableHtmlEncode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EditorComponent.prototype, "enableTabKey", {
            /** @description Determines whether the Tab key can insert tab chars inside the Editor or change focus (default) */
            get: function () {
                return this.nativeElement ? this.nativeElement.enableTabKey : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.enableTabKey = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EditorComponent.prototype, "findAndReplaceTimeout", {
            /** @description Determines the time interval between results for the find and replace and search bar features. */
            get: function () {
                return this.nativeElement ? this.nativeElement.findAndReplaceTimeout : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.findAndReplaceTimeout = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EditorComponent.prototype, "hideToolbar", {
            /** @description Determines whether the Toolbar is hidden or not. */
            get: function () {
                return this.nativeElement ? this.nativeElement.hideToolbar : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.hideToolbar = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EditorComponent.prototype, "hideInlineToolbar", {
            /** @description Determines whether the Inline Toolbar is hidden or not. */
            get: function () {
                return this.nativeElement ? this.nativeElement.hideInlineToolbar : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.hideInlineToolbar = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EditorComponent.prototype, "imageFormat", {
            /** @description Determines the file format of the image/video that are uploaded from local storage. By default images/videos are stroed as base64. */
            get: function () {
                return this.nativeElement ? this.nativeElement.imageFormat : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.imageFormat = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EditorComponent.prototype, "innerHTML", {
            /** @description Sets the content of the Editor as HTML. Allows to insert text and HTML. */
            get: function () {
                return this.nativeElement ? this.nativeElement.innerHTML : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.innerHTML = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EditorComponent.prototype, "inlineToolbarOffset", {
            /** @description Defines an offset(x,y) for the Inline Toolbar positioning on the page. */
            get: function () {
                return this.nativeElement ? this.nativeElement.inlineToolbarOffset : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.inlineToolbarOffset = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EditorComponent.prototype, "iframeSettings", {
            /** @description Determines the iframe settings of the Editor. When enabled the contents of the Editor are placed inside an iframe, isolated in a separate dom. The element allows to insert external resources into the iframe if needed. */
            get: function () {
                return this.nativeElement ? this.nativeElement.iframeSettings : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.iframeSettings = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EditorComponent.prototype, "locale", {
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
        Object.defineProperty(EditorComponent.prototype, "maxCharCount", {
            /** @description Sets a limit on the number of chars inside the Editor.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.maxCharCount : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.maxCharCount = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EditorComponent.prototype, "messages", {
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
        Object.defineProperty(EditorComponent.prototype, "name", {
            /** @description Sets a to the element which can be used to submit the value of the Editor via a form. */
            get: function () {
                return this.nativeElement ? this.nativeElement.name : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.name = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EditorComponent.prototype, "pasteFormat", {
            /** @description Determines the format of the content that will be pasted inside the Editor. */
            get: function () {
                return this.nativeElement ? this.nativeElement.pasteFormat : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.pasteFormat = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EditorComponent.prototype, "placeholder", {
            /** @description Determines the placeholder that will be shown when there's no content inside the Editor. */
            get: function () {
                return this.nativeElement ? this.nativeElement.placeholder : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.placeholder = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EditorComponent.prototype, "removeStylesOnClearFormat", {
            /** @description Determines whether the clearFormat toolbar action should also remove inline styles from the currently selected node. */
            get: function () {
                return this.nativeElement ? this.nativeElement.removeStylesOnClearFormat : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.removeStylesOnClearFormat = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EditorComponent.prototype, "required", {
            /** @description Determines whether Editor's content is required ot not. If set and the Editor's content is empty, a notification will appear to notify that the Editor cannot be empty. */
            get: function () {
                return this.nativeElement ? this.nativeElement.required : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.required = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EditorComponent.prototype, "rightToLeft", {
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
        Object.defineProperty(EditorComponent.prototype, "sanitized", {
            /** @description Determines whether the value is sanitized from XSS content or not. When enabled scripts and other XSS vulnerabilities are not allowed to exist inside the Editor's as HTML content. */
            get: function () {
                return this.nativeElement ? this.nativeElement.sanitized : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.sanitized = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EditorComponent.prototype, "showCharCount", {
            /** @description Determines whether the char counter is visible or not. When enabled it is displayed in the bottom right corner. If maxCharCount is set and the content characters are equal or more than 70% of the maximum char count the counter is colored in order to warn the user. If the char count is equal or more than 90% the counter is again colored with a different warning color to indicate that the counter is near maximum. When maximum is reached, text input is not allowed. */
            get: function () {
                return this.nativeElement ? this.nativeElement.showCharCount : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.showCharCount = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EditorComponent.prototype, "spellCheck", {
            /** @description Determines whether the editor may be checked for spelling errors. */
            get: function () {
                return this.nativeElement ? this.nativeElement.spellCheck : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.spellCheck = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EditorComponent.prototype, "splitModeRefreshTimeout", {
            /** @description Determines the refresh interval for the Source Code/Preview Panel when Split Mode is enabled.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.splitModeRefreshTimeout : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.splitModeRefreshTimeout = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EditorComponent.prototype, "theme", {
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
        Object.defineProperty(EditorComponent.prototype, "toolbarItems", {
            /** @description Determines the Toolbar items list. Each item can be string pointing to the name of the item or an object that defines a custom item or adds aditional settings to an item. The name of the items are case insensitive. An object definition should contain a name attribute that refers to the name of the item when modifing an existing toolbar item. The name attribute determines the action of the item. If set to 'custom' it is possible to create a custom toolbar item. If name attribute is not set or not valid it is treated as a separator, no a toolbar item. The following items are supported by default by the Editor: SourceCode - shows the HTML/Preview Panel by hiding the input panel. Item type - 'Toggle button'.SplitMode - shows both input and HTML/Preview Panel by splitting the Editor content in two sections. Item type - 'Toggle button'FullScreen - fits the viewport with the Editor by expanding it over the page content. Item type - 'Toggle button'.Alignment - aligns the selected content. Item type - 'Drop down'.FontName - changes the font family of the selected content. Item type - 'drop-down'.FontSize - changes the font size of the selected content. Item type - 'drop-down'.Formats - changes the format of the current selection. Itme type - 'drop-down'.TableRows - allows to insert/remove a row into a selected table element. Item type - 'drop-down'.TableColumns - allows to insert/remove a column into a selected table element. Itme type - 'drop-down'.TableVAlign - sets the vertical alignment of a selected table cell. Item type - 'drop-down'.TableStyle - sets additional styling to a selected table inside the Editor. Item type - 'drop-down'.BackgroundColor - changes the background color of the current selection. Item type - 'color-input'.FontColor - changes the font color of the current selection. Item type = 'color-input'.Bold - sets the currently selected text as bold or not. Item type - 'button'.Italic - sets the currently selected text as italic. Item type - 'button'. Underline - sets the currently selected text as underlined. Itme type - 'button'.Strikethrough - set the currently selected text as strikethrough. Item type - 'button'.Delete - deletes the current selection. Item type - 'button'.Undo - undoes the last operation. Item type - 'button'.Redo - redoes the previous operation. Item type - 'button'.Indent - indents the current selection once. Item type - 'button'.Outdent - outdents the current selection once. Item type - 'button'.OpenLink - triggers a hyperlink. Item type - 'button'.EditLink - creates/edits the selected hyperlink. Item type - 'button'.CreateLink - creates/edits the selected hyperlink. Item type - 'button'.RemoveLink - removes the currently selected hyperlink. Item type - 'button'.Hyperlink - same as createLink, triggers a Dialog Window for link creation. Item type - 'button'.Cut - Cuts the currently selected text. Item type - 'button'.Copy - copies the currently selected text. Item type - 'button'Paste - pastes the currenly copied/cut text from the Clipboard. Item type = 'button' or 'drop-down' when advanced attribute is set to 'true'.Image - triggers a Dialog Window to insert/edit an image. Item type - 'button'.Video - triggers a Dialog Window to insert/edit a video. Item type - 'button'.LowerCase - changes the current selection to lower case. Item type - 'button'.UpperCase - changes the current selection to upper case. Item type - 'button'.Print - opens the browser print preview window. Item type - 'button'.Caption - insert/remove a caption when a table is selected. Item type - 'button'.ClearFormat - removes the formatting of the currntly selected text. Item type - 'button'.Table - triggers a Dialog Window to insert a table. Item type - 'button'.TableHeader - insert/remove a header row to the currently selected table. Item type - 'button'.OrderedList - insert/remove an order list. Item type = 'button'.UnorderedList - insert/remove an unordered list. Item type - 'button'.Subscript - changes the currently selected text to subscript. Item type - 'button'.Superscript - changes the currently selected text to superscript. Item type - 'button'.FindAndReplace - opens a dialog that allows to find and replace text inside the Editor's content section. Item type - 'button'.  The inlineToolbarItems attribute is applicable only to the following items: 'table', 'image', 'hyperlink'. It accepts the same type of value as toolbarItems property but the toolbar items will be placed insinde the Inline Toolbar instead. */
            get: function () {
                return this.nativeElement ? this.nativeElement.toolbarItems : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.toolbarItems = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EditorComponent.prototype, "toolbarMode", {
            /** @description Determines the toolbar mode of the Editor. The main toolbar of the Editor can appear as a Ribbon or as a Menu. */
            get: function () {
                return this.nativeElement ? this.nativeElement.toolbarMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.toolbarMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EditorComponent.prototype, "toolbarRibbonConfig", {
            /** @description Allows to configure the SingleLineRibbon appearance by changing the order and items of the groups. */
            get: function () {
                return this.nativeElement ? this.nativeElement.toolbarRibbonConfig : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.toolbarRibbonConfig = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EditorComponent.prototype, "toolbarViewMode", {
            /** @description Determines the format of the content that will be pasted inside the Editor. */
            get: function () {
                return this.nativeElement ? this.nativeElement.toolbarViewMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.toolbarViewMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EditorComponent.prototype, "toolbarSticky", {
            /** @description Sticks the Toolbar to the top of the window and stays there while scrolling. */
            get: function () {
                return this.nativeElement ? this.nativeElement.toolbarSticky : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.toolbarSticky = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EditorComponent.prototype, "unfocusable", {
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
        Object.defineProperty(EditorComponent.prototype, "value", {
            /** @description Sets or gets the value of the Editor. */
            get: function () {
                return this.nativeElement ? this.nativeElement.value : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.value = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EditorComponent.prototype, "windowCustomizationFunction", {
            /** @description A function that can be used to completly customize the Editor dialog that is used to insert/edit tables/images/videos/hyperlinks. The function accepts two arguments: target - the target dialog that is about to be opened.item - the toolbar item object that trigger the dialog. */
            get: function () {
                return this.nativeElement ? this.nativeElement.windowCustomizationFunction : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.windowCustomizationFunction = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        /** @description Blurs the content of the Editor.
        */
        EditorComponent.prototype.blur = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.blur();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.blur();
                });
            }
        };
        /** @description Clears the content of the Editor.
        */
        EditorComponent.prototype.clearContent = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.clearContent();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.clearContent();
                });
            }
        };
        /** @description Collapse the Toolbar if the toolbarViewMode is set to 'toggle'.
        */
        EditorComponent.prototype.collapseToolbar = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.collapseToolbar();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.collapseToolbar();
                });
            }
        };
        /** @description Disables a Toolbar item.
        * @param {string} itemName. The name of the toolbar item to disable.
        */
        EditorComponent.prototype.disableToolbarItem = function (itemName) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.disableToolbarItem(itemName);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.disableToolbarItem(itemName);
                });
            }
        };
        /** @description Expand the Toolbar if the toolbarViewMode is set to 'toggle'.
        */
        EditorComponent.prototype.expandToolbar = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.expandToolbar();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.expandToolbar();
                });
            }
        };
        /** @description Enables a previously disabled Toolbar item.
        * @param {string} itemName. The name of the toolbar item to enable.
        */
        EditorComponent.prototype.enableToolbarItem = function (itemName) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.enableToolbarItem(itemName);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.enableToolbarItem(itemName);
                });
            }
        };
        /** @description Executes a command via the native execCommand method. The method returns true or false depending on whether the execution was successful or not. The following list of commands can be eexecuted: bold - makes the currently selected content bold. Example: editor.executeCommand('bold');italic - makes the currently selected content italic. Example: editor.executeCommand('italic');undelined - makes the currently selected content underlined. Example: editor.executeCommand('underline');strikeThrough - applies a single line strike through formatting to the currently selected content. Example: editor.executeCommand('strikeThrough');superscript - sets the selected content as superscript. Example: editor.executeCommand('superscript');subscript - sets the selected content as superscript. Example: editor.executeCommand('subscript');uppercase - changes the case of the current selection to upper. Example: editor.executeCommand('uppercase');lowercase - changes the case of the current selection to lower. Example: editor.executeCommand('lowercase');foreColor - changes the font color of the current content selection. Example: editor.executeCommand('foreColor', '#000000');fontName - changes the font name for the selected content. Example: editor.executeCommand('fontName', 'Arial');fontSize - changes the font size of the currently selected content. Example: editor.executeCommand('fontSize', '15px');hiliteColor - changes the background color of current selection. Example: editor.executeCommand('hiliteColor', '#000000');justifyCenter - aligns the content to the center. Example: editor.executeCommand('justifyCenter');justifyFull - aligns the content to be fully justified. Example: editor.executeCommand('justifyFull');justifyLeft - aligns the content to the left. Example: editor.executeCommand('justifyLeft');justifyRight - aligns the content to the right. Example: editor.executeCommand('justifyRight');undo - allows to undo the previous action. Example: editor.executeCommand('undo');redo - allows to redo the previous actions. Example: editor.executeCommand('redo');createLink - creates a hyperlink in the content section of the Editor. Example: editor.executeCommand('createLink', { text: 'Links', url: 'http://', title : 'Link' });indent - indents the content with one level. Example: editor.executeCommand('indent');outdent - outdents the content with one level. Example: editor.executeCommand('outdent');insertHTML - insert an HTML content as string at the current cursor location. Example: editor.executeCommand('insertHTML', 'Text');insertOrderedList - inserts a new numbered list item. Example: editor.executeCommand('insertOrderedList');insertUnorderedList - inserts a new bulleted list item. Example: editor.executeCommand('insertUnorderedList');removeFormat - removes the formatting styles from currently selected text. Example: editor.executeCommand('removeFormat');insertText - inserts a text at the current cursor location. Example: editor.executeCommand('insertText', 'Some text to insert');insertImage - inserts an image at the current cursor location. Example: editor.executeCommand('insertImage', { url: 'https://www.htmlelements.com/demos/images/carousel-medium-2.jpg'});
        * @param {string} commandName. The name of the command to execute.
        * @param {string | number} value?. The value for the command. Some commands require a value to be passed, others do not.
        * @returns {boolean}
      */
        EditorComponent.prototype.executeCommand = function (commandName, value) {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.executeCommand(commandName, value);
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
        /** @description Focuses the content of the Editor.
        */
        EditorComponent.prototype.focus = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.focus();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.focus();
                });
            }
        };
        /** @description Returns the number of characters inside the Editor's content.
        * @returns {number}
      */
        EditorComponent.prototype.getCharCount = function () {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.getCharCount();
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
        /** @description Returns the current selection range. By default the result is an object of type Range, but if the editMode property is set to 'markdown' the returned value is an object indicating the start/end indexes of the current selection.
        * @returns {any}
      */
        EditorComponent.prototype.getSelectionRange = function () {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.getSelectionRange();
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
        /** @description Returns the content of the Editor as HTML. When editMode is set to 'markdown' the markdown is parsed and returned as HTML.
        * @returns {string}
      */
        EditorComponent.prototype.getHTML = function () {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.getHTML();
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
        /** @description Returns the content of the Editor as text.
        * @returns {string}
      */
        EditorComponent.prototype.getText = function () {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.getText();
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
        /** @description Hides a specific message or all messages if no argument is provided.
        * @param {HTMLElement | string | number} item?. Hides a specific message. The argument can be a DOM reference to a specific item, it's index or it's id. If the argument is not provided then all messages will be closed.
        */
        EditorComponent.prototype.hideMessage = function (item) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.hideMessage(item);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.hideMessage(item);
                });
            }
        };
        /** @description Hides the last shown message.
        */
        EditorComponent.prototype.hideLastMessage = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.hideLastMessage();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.hideLastMessage();
                });
            }
        };
        /** @description Shows a custom message inside the Editor.
        * @param {string} message. The text message to be displayed.
        * @param {any} settings?. Additional settings that can be applied to the Toast element that handles the messages. This parameter should contain only valid Toast properties and values.
        * @returns {HTMLElement | undefined}
      */
        EditorComponent.prototype.showMessage = function (message, settings) {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.showMessage(message, settings);
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
        /** @description Selects the text inside Editor's content.
        */
        EditorComponent.prototype.selectAll = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.selectAll();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.selectAll();
                });
            }
        };
        /** @description Selects a range of text inside the Editor. The method will find the nodes containing the text from the start to the end indexes and will select them as ranges. However, currently only FireFox supports multiple range selection. The rest of the browsers will only select the first node. If the editor is in 'html' editMode then the expected text will be selected regardless of the browser because there's only one node inside the editor.
        * @param {number} startIndex. The start index to select from.
        * @param {number} endIndex. The end index to select to.
        */
        EditorComponent.prototype.selectRange = function (startIndex, endIndex) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.selectRange(startIndex, endIndex);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.selectRange(startIndex, endIndex);
                });
            }
        };
        /** @description Clears the local storage from previously stored states of the Editor with the current id.
        */
        EditorComponent.prototype.clearState = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.clearState();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.clearState();
                });
            }
        };
        /** @description Saves the current state of the Editor to local storage. Requires an id to be set to the Editor.
        */
        EditorComponent.prototype.saveState = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.saveState();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.saveState();
                });
            }
        };
        /** @description Loads the last stored state of the Editor from local storage. Requires an id to be set to the Editor.
        */
        EditorComponent.prototype.loadState = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.loadState();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.loadState();
                });
            }
        };
        /** @description Sets Editor into Split Mode. In split mode the HTML/Markdown editor and SourceCode/Preview panels are visible.
        * @param {boolean} value?. Determines whether to enter or leave split mode. By default the argument is not passed and the mode is toggled.
        */
        EditorComponent.prototype.splitMode = function (value) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.splitMode(value);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.splitMode(value);
                });
            }
        };
        /** @description Sets Editor into SourceCode/Preview Mode. In this mode the HTML view panel is displayed.
        * @param {boolean} value?. Determines whether to enter or leave split mode. By default the argument is not passed and the mode is toggled.
        */
        EditorComponent.prototype.previewMode = function (value) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.previewMode(value);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.previewMode(value);
                });
            }
        };
        /** @description Sets Editor into Full Screen Mode. If enabled the Editor is positioned above the page content and fills the screen.
        * @param {boolean} value?. Determines whether to enter or leave split mode. By default the argument is not passed and the mode is toggled.
        */
        EditorComponent.prototype.fullScreenMode = function (value) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.fullScreenMode(value);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.fullScreenMode(value);
                });
            }
        };
        /** @description Exports the content of the Editor in the desired format. The currently supported formats are: HTML, Markdown and PDF.
        * @param {string} dataFormat. The expected file format.
        * @param {any} callback?. A callback that is executed before the data is exported. Allows to modify the output.
        */
        EditorComponent.prototype.exportData = function (dataFormat, callback) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.exportData(dataFormat, callback);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.exportData(dataFormat, callback);
                });
            }
        };
        /** @description Imports the content of a file to the Editor. The currently supported formats are: TXT or HTML.
        * @param {any} source. The url to the file or an object that defines settings for the Ajax request like url, timeput, etc. Object format: { url: string, type: string, data: object, timeout: number }
        * @param {any} settings?. Additional settings for the ajax request. Such as loadError function, contentType, etc. Format: { contentType: string, beforeSend: Function, loadError: Function, beforeLoadComplete: Function  }
        */
        EditorComponent.prototype.importData = function (source, settings) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.importData(source, settings);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.importData(source, settings);
                });
            }
        };
        /** @description Opens the Print Preview Panel of the Browser to print Editor's content.
        */
        EditorComponent.prototype.print = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.print();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.print();
                });
            }
        };
        /** @description Allows to update the settings of a single toolbar item. The method returns true if successful.
        * @param {string | number} name. The name of the toolbar item or it's index inside the <b>toolbarItems</b> array.
        * @param {any} settings. A settings object for the toolbar item. It should have the same definition as when defining a custom toolbar item. You can read more about it in the dedicated topic for the Editor Toolbar on the website.
        * @returns {boolean | undefined}
      */
        EditorComponent.prototype.updateToolbarItem = function (name, settings) {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.updateToolbarItem(name, settings);
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
        Object.defineProperty(EditorComponent.prototype, "isRendered", {
            get: function () {
                return this.nativeElement ? this.nativeElement.isRendered : false;
            },
            enumerable: true,
            configurable: true
        });
        EditorComponent.prototype.ngOnInit = function () {
        };
        EditorComponent.prototype.ngAfterViewInit = function () {
            var that = this;
            that.onCreate.emit(that.nativeElement);
            Smart.Render();
            this.nativeElement.classList.add('smart-angular');
            this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
            this.listen();
        };
        EditorComponent.prototype.ngOnDestroy = function () {
            this.unlisten();
        };
        EditorComponent.prototype.ngOnChanges = function (changes) {
            if (this.nativeElement && this.nativeElement.isRendered) {
                for (var propName in changes) {
                    if (changes.hasOwnProperty(propName)) {
                        this.nativeElement[propName] = changes[propName].currentValue;
                    }
                }
            }
        };
        /** @description Add event listeners. */
        EditorComponent.prototype.listen = function () {
            var that = this;
            that.eventHandlers['changeHandler'] = function (event) { that.onChange.emit(event); };
            that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
            that.eventHandlers['changingHandler'] = function (event) { that.onChanging.emit(event); };
            that.nativeElement.addEventListener('changing', that.eventHandlers['changingHandler']);
            that.eventHandlers['actionStartHandler'] = function (event) { that.onActionStart.emit(event); };
            that.nativeElement.addEventListener('actionStart', that.eventHandlers['actionStartHandler']);
            that.eventHandlers['actionEndHandler'] = function (event) { that.onActionEnd.emit(event); };
            that.nativeElement.addEventListener('actionEnd', that.eventHandlers['actionEndHandler']);
            that.eventHandlers['contextMenuItemClickHandler'] = function (event) { that.onContextMenuItemClick.emit(event); };
            that.nativeElement.addEventListener('contextMenuItemClick', that.eventHandlers['contextMenuItemClickHandler']);
            that.eventHandlers['contextMenuOpenHandler'] = function (event) { that.onContextMenuOpen.emit(event); };
            that.nativeElement.addEventListener('contextMenuOpen', that.eventHandlers['contextMenuOpenHandler']);
            that.eventHandlers['contextMenuOpeningHandler'] = function (event) { that.onContextMenuOpening.emit(event); };
            that.nativeElement.addEventListener('contextMenuOpening', that.eventHandlers['contextMenuOpeningHandler']);
            that.eventHandlers['contextMenuCloseHandler'] = function (event) { that.onContextMenuClose.emit(event); };
            that.nativeElement.addEventListener('contextMenuClose', that.eventHandlers['contextMenuCloseHandler']);
            that.eventHandlers['contextMenuClosingHandler'] = function (event) { that.onContextMenuClosing.emit(event); };
            that.nativeElement.addEventListener('contextMenuClosing', that.eventHandlers['contextMenuClosingHandler']);
            that.eventHandlers['resizeStartHandler'] = function (event) { that.onResizeStart.emit(event); };
            that.nativeElement.addEventListener('resizeStart', that.eventHandlers['resizeStartHandler']);
            that.eventHandlers['resizeEndHandler'] = function (event) { that.onResizeEnd.emit(event); };
            that.nativeElement.addEventListener('resizeEnd', that.eventHandlers['resizeEndHandler']);
            that.eventHandlers['inlineToolbarOpenHandler'] = function (event) { that.onInlineToolbarOpen.emit(event); };
            that.nativeElement.addEventListener('inlineToolbarOpen', that.eventHandlers['inlineToolbarOpenHandler']);
            that.eventHandlers['inlineToolbarOpeningHandler'] = function (event) { that.onInlineToolbarOpening.emit(event); };
            that.nativeElement.addEventListener('inlineToolbarOpening', that.eventHandlers['inlineToolbarOpeningHandler']);
            that.eventHandlers['inlineToolbarCloseHandler'] = function (event) { that.onInlineToolbarClose.emit(event); };
            that.nativeElement.addEventListener('inlineToolbarClose', that.eventHandlers['inlineToolbarCloseHandler']);
            that.eventHandlers['inlineToolbarClosingHandler'] = function (event) { that.onInlineToolbarClosing.emit(event); };
            that.nativeElement.addEventListener('inlineToolbarClosing', that.eventHandlers['inlineToolbarClosingHandler']);
            that.eventHandlers['dropDownToolbarOpenHandler'] = function (event) { that.onDropDownToolbarOpen.emit(event); };
            that.nativeElement.addEventListener('dropDownToolbarOpen', that.eventHandlers['dropDownToolbarOpenHandler']);
            that.eventHandlers['dropDownToolbarOpeningHandler'] = function (event) { that.onDropDownToolbarOpening.emit(event); };
            that.nativeElement.addEventListener('dropDownToolbarOpening', that.eventHandlers['dropDownToolbarOpeningHandler']);
            that.eventHandlers['dropDownToolbarCloseHandler'] = function (event) { that.onDropDownToolbarClose.emit(event); };
            that.nativeElement.addEventListener('dropDownToolbarClose', that.eventHandlers['dropDownToolbarCloseHandler']);
            that.eventHandlers['dropDownToolbarClosingHandler'] = function (event) { that.onDropDownToolbarClosing.emit(event); };
            that.nativeElement.addEventListener('dropDownToolbarClosing', that.eventHandlers['dropDownToolbarClosingHandler']);
            that.eventHandlers['dialogOpenHandler'] = function (event) { that.onDialogOpen.emit(event); };
            that.nativeElement.addEventListener('dialogOpen', that.eventHandlers['dialogOpenHandler']);
            that.eventHandlers['dialogOpeningHandler'] = function (event) { that.onDialogOpening.emit(event); };
            that.nativeElement.addEventListener('dialogOpening', that.eventHandlers['dialogOpeningHandler']);
            that.eventHandlers['dialogCloseHandler'] = function (event) { that.onDialogClose.emit(event); };
            that.nativeElement.addEventListener('dialogClose', that.eventHandlers['dialogCloseHandler']);
            that.eventHandlers['dialogClosingHandler'] = function (event) { that.onDialogClosing.emit(event); };
            that.nativeElement.addEventListener('dialogClosing', that.eventHandlers['dialogClosingHandler']);
            that.eventHandlers['imageUploadSuccessHandler'] = function (event) { that.onImageUploadSuccess.emit(event); };
            that.nativeElement.addEventListener('imageUploadSuccess', that.eventHandlers['imageUploadSuccessHandler']);
            that.eventHandlers['imageUploadFailedHandler'] = function (event) { that.onImageUploadFailed.emit(event); };
            that.nativeElement.addEventListener('imageUploadFailed', that.eventHandlers['imageUploadFailedHandler']);
            that.eventHandlers['toobarItemClickHandler'] = function (event) { that.onToobarItemClick.emit(event); };
            that.nativeElement.addEventListener('toobarItemClick', that.eventHandlers['toobarItemClickHandler']);
            that.eventHandlers['messageCloseHandler'] = function (event) { that.onMessageClose.emit(event); };
            that.nativeElement.addEventListener('messageClose', that.eventHandlers['messageCloseHandler']);
            that.eventHandlers['messageOpenHandler'] = function (event) { that.onMessageOpen.emit(event); };
            that.nativeElement.addEventListener('messageOpen', that.eventHandlers['messageOpenHandler']);
        };
        /** @description Remove event listeners. */
        EditorComponent.prototype.unlisten = function () {
            var that = this;
            if (that.eventHandlers['changeHandler']) {
                that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
            }
            if (that.eventHandlers['changingHandler']) {
                that.nativeElement.removeEventListener('changing', that.eventHandlers['changingHandler']);
            }
            if (that.eventHandlers['actionStartHandler']) {
                that.nativeElement.removeEventListener('actionStart', that.eventHandlers['actionStartHandler']);
            }
            if (that.eventHandlers['actionEndHandler']) {
                that.nativeElement.removeEventListener('actionEnd', that.eventHandlers['actionEndHandler']);
            }
            if (that.eventHandlers['contextMenuItemClickHandler']) {
                that.nativeElement.removeEventListener('contextMenuItemClick', that.eventHandlers['contextMenuItemClickHandler']);
            }
            if (that.eventHandlers['contextMenuOpenHandler']) {
                that.nativeElement.removeEventListener('contextMenuOpen', that.eventHandlers['contextMenuOpenHandler']);
            }
            if (that.eventHandlers['contextMenuOpeningHandler']) {
                that.nativeElement.removeEventListener('contextMenuOpening', that.eventHandlers['contextMenuOpeningHandler']);
            }
            if (that.eventHandlers['contextMenuCloseHandler']) {
                that.nativeElement.removeEventListener('contextMenuClose', that.eventHandlers['contextMenuCloseHandler']);
            }
            if (that.eventHandlers['contextMenuClosingHandler']) {
                that.nativeElement.removeEventListener('contextMenuClosing', that.eventHandlers['contextMenuClosingHandler']);
            }
            if (that.eventHandlers['resizeStartHandler']) {
                that.nativeElement.removeEventListener('resizeStart', that.eventHandlers['resizeStartHandler']);
            }
            if (that.eventHandlers['resizeEndHandler']) {
                that.nativeElement.removeEventListener('resizeEnd', that.eventHandlers['resizeEndHandler']);
            }
            if (that.eventHandlers['inlineToolbarOpenHandler']) {
                that.nativeElement.removeEventListener('inlineToolbarOpen', that.eventHandlers['inlineToolbarOpenHandler']);
            }
            if (that.eventHandlers['inlineToolbarOpeningHandler']) {
                that.nativeElement.removeEventListener('inlineToolbarOpening', that.eventHandlers['inlineToolbarOpeningHandler']);
            }
            if (that.eventHandlers['inlineToolbarCloseHandler']) {
                that.nativeElement.removeEventListener('inlineToolbarClose', that.eventHandlers['inlineToolbarCloseHandler']);
            }
            if (that.eventHandlers['inlineToolbarClosingHandler']) {
                that.nativeElement.removeEventListener('inlineToolbarClosing', that.eventHandlers['inlineToolbarClosingHandler']);
            }
            if (that.eventHandlers['dropDownToolbarOpenHandler']) {
                that.nativeElement.removeEventListener('dropDownToolbarOpen', that.eventHandlers['dropDownToolbarOpenHandler']);
            }
            if (that.eventHandlers['dropDownToolbarOpeningHandler']) {
                that.nativeElement.removeEventListener('dropDownToolbarOpening', that.eventHandlers['dropDownToolbarOpeningHandler']);
            }
            if (that.eventHandlers['dropDownToolbarCloseHandler']) {
                that.nativeElement.removeEventListener('dropDownToolbarClose', that.eventHandlers['dropDownToolbarCloseHandler']);
            }
            if (that.eventHandlers['dropDownToolbarClosingHandler']) {
                that.nativeElement.removeEventListener('dropDownToolbarClosing', that.eventHandlers['dropDownToolbarClosingHandler']);
            }
            if (that.eventHandlers['dialogOpenHandler']) {
                that.nativeElement.removeEventListener('dialogOpen', that.eventHandlers['dialogOpenHandler']);
            }
            if (that.eventHandlers['dialogOpeningHandler']) {
                that.nativeElement.removeEventListener('dialogOpening', that.eventHandlers['dialogOpeningHandler']);
            }
            if (that.eventHandlers['dialogCloseHandler']) {
                that.nativeElement.removeEventListener('dialogClose', that.eventHandlers['dialogCloseHandler']);
            }
            if (that.eventHandlers['dialogClosingHandler']) {
                that.nativeElement.removeEventListener('dialogClosing', that.eventHandlers['dialogClosingHandler']);
            }
            if (that.eventHandlers['imageUploadSuccessHandler']) {
                that.nativeElement.removeEventListener('imageUploadSuccess', that.eventHandlers['imageUploadSuccessHandler']);
            }
            if (that.eventHandlers['imageUploadFailedHandler']) {
                that.nativeElement.removeEventListener('imageUploadFailed', that.eventHandlers['imageUploadFailedHandler']);
            }
            if (that.eventHandlers['toobarItemClickHandler']) {
                that.nativeElement.removeEventListener('toobarItemClick', that.eventHandlers['toobarItemClickHandler']);
            }
            if (that.eventHandlers['messageCloseHandler']) {
                that.nativeElement.removeEventListener('messageClose', that.eventHandlers['messageCloseHandler']);
            }
            if (that.eventHandlers['messageOpenHandler']) {
                that.nativeElement.removeEventListener('messageOpen', that.eventHandlers['messageOpenHandler']);
            }
        };
        EditorComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], EditorComponent.prototype, "animation", null);
        __decorate([
            core.Input()
        ], EditorComponent.prototype, "autoLoad", null);
        __decorate([
            core.Input()
        ], EditorComponent.prototype, "autoSave", null);
        __decorate([
            core.Input()
        ], EditorComponent.prototype, "autoSaveInterval", null);
        __decorate([
            core.Input()
        ], EditorComponent.prototype, "charCountFormatFunction", null);
        __decorate([
            core.Input()
        ], EditorComponent.prototype, "contentFiltering", null);
        __decorate([
            core.Input()
        ], EditorComponent.prototype, "contextMenu", null);
        __decorate([
            core.Input()
        ], EditorComponent.prototype, "contextMenuDataSource", null);
        __decorate([
            core.Input()
        ], EditorComponent.prototype, "dataExport", null);
        __decorate([
            core.Input()
        ], EditorComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], EditorComponent.prototype, "disableEditing", null);
        __decorate([
            core.Input()
        ], EditorComponent.prototype, "disableSearchBar", null);
        __decorate([
            core.Input()
        ], EditorComponent.prototype, "editMode", null);
        __decorate([
            core.Input()
        ], EditorComponent.prototype, "enableHtmlEncode", null);
        __decorate([
            core.Input()
        ], EditorComponent.prototype, "enableTabKey", null);
        __decorate([
            core.Input()
        ], EditorComponent.prototype, "findAndReplaceTimeout", null);
        __decorate([
            core.Input()
        ], EditorComponent.prototype, "hideToolbar", null);
        __decorate([
            core.Input()
        ], EditorComponent.prototype, "hideInlineToolbar", null);
        __decorate([
            core.Input()
        ], EditorComponent.prototype, "imageFormat", null);
        __decorate([
            core.Input()
        ], EditorComponent.prototype, "innerHTML", null);
        __decorate([
            core.Input()
        ], EditorComponent.prototype, "inlineToolbarOffset", null);
        __decorate([
            core.Input()
        ], EditorComponent.prototype, "iframeSettings", null);
        __decorate([
            core.Input()
        ], EditorComponent.prototype, "locale", null);
        __decorate([
            core.Input()
        ], EditorComponent.prototype, "maxCharCount", null);
        __decorate([
            core.Input()
        ], EditorComponent.prototype, "messages", null);
        __decorate([
            core.Input()
        ], EditorComponent.prototype, "name", null);
        __decorate([
            core.Input()
        ], EditorComponent.prototype, "pasteFormat", null);
        __decorate([
            core.Input()
        ], EditorComponent.prototype, "placeholder", null);
        __decorate([
            core.Input()
        ], EditorComponent.prototype, "removeStylesOnClearFormat", null);
        __decorate([
            core.Input()
        ], EditorComponent.prototype, "required", null);
        __decorate([
            core.Input()
        ], EditorComponent.prototype, "rightToLeft", null);
        __decorate([
            core.Input()
        ], EditorComponent.prototype, "sanitized", null);
        __decorate([
            core.Input()
        ], EditorComponent.prototype, "showCharCount", null);
        __decorate([
            core.Input()
        ], EditorComponent.prototype, "spellCheck", null);
        __decorate([
            core.Input()
        ], EditorComponent.prototype, "splitModeRefreshTimeout", null);
        __decorate([
            core.Input()
        ], EditorComponent.prototype, "theme", null);
        __decorate([
            core.Input()
        ], EditorComponent.prototype, "toolbarItems", null);
        __decorate([
            core.Input()
        ], EditorComponent.prototype, "toolbarMode", null);
        __decorate([
            core.Input()
        ], EditorComponent.prototype, "toolbarRibbonConfig", null);
        __decorate([
            core.Input()
        ], EditorComponent.prototype, "toolbarViewMode", null);
        __decorate([
            core.Input()
        ], EditorComponent.prototype, "toolbarSticky", null);
        __decorate([
            core.Input()
        ], EditorComponent.prototype, "unfocusable", null);
        __decorate([
            core.Input()
        ], EditorComponent.prototype, "value", null);
        __decorate([
            core.Input()
        ], EditorComponent.prototype, "windowCustomizationFunction", null);
        __decorate([
            core.Output()
        ], EditorComponent.prototype, "onChange", void 0);
        __decorate([
            core.Output()
        ], EditorComponent.prototype, "onChanging", void 0);
        __decorate([
            core.Output()
        ], EditorComponent.prototype, "onActionStart", void 0);
        __decorate([
            core.Output()
        ], EditorComponent.prototype, "onActionEnd", void 0);
        __decorate([
            core.Output()
        ], EditorComponent.prototype, "onContextMenuItemClick", void 0);
        __decorate([
            core.Output()
        ], EditorComponent.prototype, "onContextMenuOpen", void 0);
        __decorate([
            core.Output()
        ], EditorComponent.prototype, "onContextMenuOpening", void 0);
        __decorate([
            core.Output()
        ], EditorComponent.prototype, "onContextMenuClose", void 0);
        __decorate([
            core.Output()
        ], EditorComponent.prototype, "onContextMenuClosing", void 0);
        __decorate([
            core.Output()
        ], EditorComponent.prototype, "onResizeStart", void 0);
        __decorate([
            core.Output()
        ], EditorComponent.prototype, "onResizeEnd", void 0);
        __decorate([
            core.Output()
        ], EditorComponent.prototype, "onInlineToolbarOpen", void 0);
        __decorate([
            core.Output()
        ], EditorComponent.prototype, "onInlineToolbarOpening", void 0);
        __decorate([
            core.Output()
        ], EditorComponent.prototype, "onInlineToolbarClose", void 0);
        __decorate([
            core.Output()
        ], EditorComponent.prototype, "onInlineToolbarClosing", void 0);
        __decorate([
            core.Output()
        ], EditorComponent.prototype, "onDropDownToolbarOpen", void 0);
        __decorate([
            core.Output()
        ], EditorComponent.prototype, "onDropDownToolbarOpening", void 0);
        __decorate([
            core.Output()
        ], EditorComponent.prototype, "onDropDownToolbarClose", void 0);
        __decorate([
            core.Output()
        ], EditorComponent.prototype, "onDropDownToolbarClosing", void 0);
        __decorate([
            core.Output()
        ], EditorComponent.prototype, "onDialogOpen", void 0);
        __decorate([
            core.Output()
        ], EditorComponent.prototype, "onDialogOpening", void 0);
        __decorate([
            core.Output()
        ], EditorComponent.prototype, "onDialogClose", void 0);
        __decorate([
            core.Output()
        ], EditorComponent.prototype, "onDialogClosing", void 0);
        __decorate([
            core.Output()
        ], EditorComponent.prototype, "onImageUploadSuccess", void 0);
        __decorate([
            core.Output()
        ], EditorComponent.prototype, "onImageUploadFailed", void 0);
        __decorate([
            core.Output()
        ], EditorComponent.prototype, "onToobarItemClick", void 0);
        __decorate([
            core.Output()
        ], EditorComponent.prototype, "onMessageClose", void 0);
        __decorate([
            core.Output()
        ], EditorComponent.prototype, "onMessageOpen", void 0);
        EditorComponent = __decorate([
            core.Directive({
                exportAs: 'smart-editor', selector: 'smart-editor, [smart-editor]'
            })
        ], EditorComponent);
        return EditorComponent;
    }(BaseElement));

    var EditorModule = /** @class */ (function () {
        function EditorModule() {
        }
        EditorModule = __decorate([
            core.NgModule({
                declarations: [EditorComponent],
                schemas: [core.CUSTOM_ELEMENTS_SCHEMA],
                exports: [EditorComponent]
            })
        ], EditorModule);
        return EditorModule;
    }());

    exports.EditorComponent = EditorComponent;
    exports.EditorModule = EditorModule;
    exports.Smart = Smart;
    exports.ɵa = BaseElement;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=smart-webcomponents-angular-editor.umd.js.map
