
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.fileupload';

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('smart-webcomponents-angular/fileupload', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['smart-webcomponents-angular'] = global['smart-webcomponents-angular'] || {}, global['smart-webcomponents-angular'].fileupload = {}), global.ng.core));
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

    var FileUploadComponent = /** @class */ (function (_super) {
        __extends(FileUploadComponent, _super);
        function FileUploadComponent(ref) {
            var _this = _super.call(this, ref) || this;
            _this.eventHandlers = [];
            /** @description This event is triggered when a file has been selected.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	filename, 	type, 	size, 	index)
            *   filename - The name of the selected file.
            *   type - The type of the selected file.
            *   size - The size of the selected file.
            *   index - The index of the selected file.
            */
            _this.onFileSelected = new core.EventEmitter();
            /** @description This event is triggered when a file upload operation is canceled.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	filename, 	type, 	size, 	index)
            *   filename - The name of the canceled file.
            *   type - The type of the canceled file.
            *   size - The size of the canceled file.
            *   index - The index of the canceled file.
            */
            _this.onUploadCanceled = new core.EventEmitter();
            /** @description This event is triggered when a file upload operation is completed.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	filename, 	type, 	size, 	index, 	status, 	serverResponse)
            *   filename - The name of the canceled file.
            *   type - The type of the canceled file.
            *   size - The size of the canceled file.
            *   index - The index of the canceled file.
            *   status - The status of the uploaded file. Whether there was an error or success.
            *   serverResponse - The response of the remote server.
            */
            _this.onUploadCompleted = new core.EventEmitter();
            /** @description This event is triggered when during the file upload process something happens and upload fails.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	filename, 	type, 	size, 	index, 	status)
            *   filename - The name of the canceled file.
            *   type - The type of the canceled file.
            *   size - The size of the canceled file.
            *   index - The index of the canceled file.
            *   status - The status of the uploaded file. Whether there was an error or success.
            */
            _this.onUploadError = new core.EventEmitter();
            /** @description This event is triggered when a file upload operation is paused.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	filename, 	type, 	size, 	index)
            *   filename - The name of the paused file.
            *   type - The type of the paused file.
            *   size - The size of the paused file.
            *   index - The index of the paused file.
            */
            _this.onUploadPaused = new core.EventEmitter();
            /** @description This event is triggered when a file upload operation is started.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	filename, 	type, 	size, 	index)
            *   filename - The name of the file that is being uploaded.
            *   type - The type of the file that is being uploaded.
            *   size - The size of the file that is being uploaded.
            *   index - The index of the file that is being uploaded.
            */
            _this.onUploadStarted = new core.EventEmitter();
            /** @description This event is triggered if the validation of a user defined 'validateFile' callback fails.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	filename, 	type, 	size)
            *   filename - The name of the file which validation has failed.
            *   type - The type of the file which validation has failed.
            *   size - The size of the file which validation has failed.
            */
            _this.onValidationError = new core.EventEmitter();
            _this.nativeElement = ref.nativeElement;
            return _this;
        }
        /** @description Creates the component on demand.
         * @param properties An optional object of properties, which will be added to the template binded ones.
         */
        FileUploadComponent.prototype.createComponent = function (properties) {
            if (properties === void 0) { properties = {}; }
            this.nativeElement = document.createElement('smart-file-upload');
            for (var propertyName in properties) {
                this.nativeElement[propertyName] = properties[propertyName];
            }
            return this.nativeElement;
        };
        Object.defineProperty(FileUploadComponent.prototype, "accept", {
            /** @description Sets or gets the file types that can be submitted to the server via the element. This property corresponds to the 'accept' attribute of the hidden file input which is submitted to the URL specified by the uploadUrl property. */
            get: function () {
                return this.nativeElement ? this.nativeElement.accept : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.accept = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FileUploadComponent.prototype, "animation", {
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
        Object.defineProperty(FileUploadComponent.prototype, "appendTo", {
            /** @description Appends the list with selected files to a new custom container specified by the user. If the value of the property is a string it must represent a valid id of an HTML element inside the DOM that will be used as the new container for the uploaded files list. */
            get: function () {
                return this.nativeElement ? this.nativeElement.appendTo : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.appendTo = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FileUploadComponent.prototype, "autoUpload", {
            /** @description Sets or gets whether files will be automatically uploaded after selection. */
            get: function () {
                return this.nativeElement ? this.nativeElement.autoUpload : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.autoUpload = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FileUploadComponent.prototype, "directory", {
            /** @description Allows to upload a directory. Files in all subfolders will be uploaded also. This option is supported only in Firefox and Chrome. */
            get: function () {
                return this.nativeElement ? this.nativeElement.directory : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.directory = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FileUploadComponent.prototype, "disabled", {
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
        Object.defineProperty(FileUploadComponent.prototype, "dropZone", {
            /** @description Defines a custom container that will be used as the new drop zone for file uploads. The dropped files will be added in the fileUpload's list. If 'dropZone' property set to true, the default drop zone inside the element will be used instead. If set to certain id of an HTML element inside the DOM then it will be used as the drop zone. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dropZone : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dropZone = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FileUploadComponent.prototype, "hideFooter", {
            /** @description Hides the footer element and it's contents (Upload All, Pause All and Close All buttons). */
            get: function () {
                return this.nativeElement ? this.nativeElement.hideFooter : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.hideFooter = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FileUploadComponent.prototype, "itemTemplate", {
            /** @description Applies a custom template to the file items that represent the uploaded files. */
            get: function () {
                return this.nativeElement ? this.nativeElement.itemTemplate : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.itemTemplate = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FileUploadComponent.prototype, "locale", {
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
        Object.defineProperty(FileUploadComponent.prototype, "localizeFormatFunction", {
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
        Object.defineProperty(FileUploadComponent.prototype, "messages", {
            /** @description Sets the various text values used in the widget. Useful for localization. The localization object has the following fields: browse, pauseFile, cancelFile, uploadFile, pauseAll, cancelAll, uploadAll. It's recommended these messages to be set before element's initialization. */
            get: function () {
                return this.nativeElement ? this.nativeElement.messages : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.messages = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FileUploadComponent.prototype, "multiple", {
            /** @description Sets or gets whether multiple item uploads are allowed. */
            get: function () {
                return this.nativeElement ? this.nativeElement.multiple : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.multiple = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FileUploadComponent.prototype, "name", {
            /** @description Sets or gets the name attribute of the hidden file input which is submitted to the URL specified by the uploadUrl property. */
            get: function () {
                return this.nativeElement ? this.nativeElement.name : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.name = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FileUploadComponent.prototype, "readonly", {
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
        Object.defineProperty(FileUploadComponent.prototype, "responseHandler", {
            /** @description Callback that can used to handle various server responses and error codes. */
            get: function () {
                return this.nativeElement ? this.nativeElement.responseHandler : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.responseHandler = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FileUploadComponent.prototype, "rightToLeft", {
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
        Object.defineProperty(FileUploadComponent.prototype, "setHeaders", {
            /** @description Callback function, used to change the headers of the file upload's XHR request. */
            get: function () {
                return this.nativeElement ? this.nativeElement.setHeaders : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.setHeaders = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FileUploadComponent.prototype, "showProgress", {
            /** @description Displays a progress bar at the bottom of each uploaded item to show the progress of the uploading process. */
            get: function () {
                return this.nativeElement ? this.nativeElement.showProgress : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.showProgress = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FileUploadComponent.prototype, "theme", {
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
        Object.defineProperty(FileUploadComponent.prototype, "uploadUrl", {
            /** @description Sets or gets the upload URL. This property corresponds to the upload form's action attribute. For example, the uploadUrl property can point to a PHP file, which handles the upload operation on the server-side. */
            get: function () {
                return this.nativeElement ? this.nativeElement.uploadUrl : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.uploadUrl = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FileUploadComponent.prototype, "unfocusable", {
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
        Object.defineProperty(FileUploadComponent.prototype, "removeUrl", {
            /** @description Sets or gets the remove URL. This property corresponds to the form's action attribute. For example, the removeUrl property can point to a PHP file, which handles the remove operation on the server-side. */
            get: function () {
                return this.nativeElement ? this.nativeElement.removeUrl : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.removeUrl = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FileUploadComponent.prototype, "value", {
            /** @description Gets the file upload value. */
            get: function () {
                return this.nativeElement ? this.nativeElement.value : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.value = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FileUploadComponent.prototype, "validateFile", {
            /** @description Callback used to validate the files immediatelly after their selection. Retuns a boolean value. If the returned value is false, the file is removed from list and a 'validationError is fired. */
            get: function () {
                return this.nativeElement ? this.nativeElement.validateFile : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.validateFile = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        /** @description Opens a popup to browse for a file.
        */
        FileUploadComponent.prototype.browse = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.browse();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.browse();
                });
            }
        };
        /** @description Cancels all selected files. The files are removed from the list and their uploading is prevented.
        */
        FileUploadComponent.prototype.cancelAll = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.cancelAll();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.cancelAll();
                });
            }
        };
        /** @description Cancels a selected file. The file is removed from the file list and it's uploading is prevented.
        * @param {number} index. Index of the file which will be canceled.
        */
        FileUploadComponent.prototype.cancelFile = function (index) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.cancelFile(index);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.cancelFile(index);
                });
            }
        };
        /** @description Pauses the uploading of all files. File upload is prevented but the files remain in the file list.
        */
        FileUploadComponent.prototype.pauseAll = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.pauseAll();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.pauseAll();
                });
            }
        };
        /** @description Pauses upload of a file with particular index. File upload is prevented but file ramains in the file list.
        * @param {number} id. Index of the file which will be paused.
        */
        FileUploadComponent.prototype.pauseFile = function (id) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.pauseFile(id);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.pauseFile(id);
                });
            }
        };
        /** @description Uploads all selected files.
        */
        FileUploadComponent.prototype.uploadAll = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.uploadAll();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.uploadAll();
                });
            }
        };
        /** @description Uploads a selected file.
        * @param {number} id. Index of the file which will be uploaded.
        */
        FileUploadComponent.prototype.uploadFile = function (id) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.uploadFile(id);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.uploadFile(id);
                });
            }
        };
        Object.defineProperty(FileUploadComponent.prototype, "isRendered", {
            get: function () {
                return this.nativeElement ? this.nativeElement.isRendered : false;
            },
            enumerable: true,
            configurable: true
        });
        FileUploadComponent.prototype.ngOnInit = function () {
        };
        FileUploadComponent.prototype.ngAfterViewInit = function () {
            var that = this;
            that.onCreate.emit(that.nativeElement);
            Smart.Render();
            this.nativeElement.classList.add('smart-angular');
            this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
            this.listen();
        };
        FileUploadComponent.prototype.ngOnDestroy = function () {
            this.unlisten();
        };
        FileUploadComponent.prototype.ngOnChanges = function (changes) {
            if (this.nativeElement && this.nativeElement.isRendered) {
                for (var propName in changes) {
                    if (changes.hasOwnProperty(propName)) {
                        this.nativeElement[propName] = changes[propName].currentValue;
                    }
                }
            }
        };
        /** @description Add event listeners. */
        FileUploadComponent.prototype.listen = function () {
            var that = this;
            that.eventHandlers['fileSelectedHandler'] = function (event) { that.onFileSelected.emit(event); };
            that.nativeElement.addEventListener('fileSelected', that.eventHandlers['fileSelectedHandler']);
            that.eventHandlers['uploadCanceledHandler'] = function (event) { that.onUploadCanceled.emit(event); };
            that.nativeElement.addEventListener('uploadCanceled', that.eventHandlers['uploadCanceledHandler']);
            that.eventHandlers['uploadCompletedHandler'] = function (event) { that.onUploadCompleted.emit(event); };
            that.nativeElement.addEventListener('uploadCompleted', that.eventHandlers['uploadCompletedHandler']);
            that.eventHandlers['uploadErrorHandler'] = function (event) { that.onUploadError.emit(event); };
            that.nativeElement.addEventListener('uploadError', that.eventHandlers['uploadErrorHandler']);
            that.eventHandlers['uploadPausedHandler'] = function (event) { that.onUploadPaused.emit(event); };
            that.nativeElement.addEventListener('uploadPaused', that.eventHandlers['uploadPausedHandler']);
            that.eventHandlers['uploadStartedHandler'] = function (event) { that.onUploadStarted.emit(event); };
            that.nativeElement.addEventListener('uploadStarted', that.eventHandlers['uploadStartedHandler']);
            that.eventHandlers['validationErrorHandler'] = function (event) { that.onValidationError.emit(event); };
            that.nativeElement.addEventListener('validationError', that.eventHandlers['validationErrorHandler']);
        };
        /** @description Remove event listeners. */
        FileUploadComponent.prototype.unlisten = function () {
            var that = this;
            if (that.eventHandlers['fileSelectedHandler']) {
                that.nativeElement.removeEventListener('fileSelected', that.eventHandlers['fileSelectedHandler']);
            }
            if (that.eventHandlers['uploadCanceledHandler']) {
                that.nativeElement.removeEventListener('uploadCanceled', that.eventHandlers['uploadCanceledHandler']);
            }
            if (that.eventHandlers['uploadCompletedHandler']) {
                that.nativeElement.removeEventListener('uploadCompleted', that.eventHandlers['uploadCompletedHandler']);
            }
            if (that.eventHandlers['uploadErrorHandler']) {
                that.nativeElement.removeEventListener('uploadError', that.eventHandlers['uploadErrorHandler']);
            }
            if (that.eventHandlers['uploadPausedHandler']) {
                that.nativeElement.removeEventListener('uploadPaused', that.eventHandlers['uploadPausedHandler']);
            }
            if (that.eventHandlers['uploadStartedHandler']) {
                that.nativeElement.removeEventListener('uploadStarted', that.eventHandlers['uploadStartedHandler']);
            }
            if (that.eventHandlers['validationErrorHandler']) {
                that.nativeElement.removeEventListener('validationError', that.eventHandlers['validationErrorHandler']);
            }
        };
        FileUploadComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], FileUploadComponent.prototype, "accept", null);
        __decorate([
            core.Input()
        ], FileUploadComponent.prototype, "animation", null);
        __decorate([
            core.Input()
        ], FileUploadComponent.prototype, "appendTo", null);
        __decorate([
            core.Input()
        ], FileUploadComponent.prototype, "autoUpload", null);
        __decorate([
            core.Input()
        ], FileUploadComponent.prototype, "directory", null);
        __decorate([
            core.Input()
        ], FileUploadComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], FileUploadComponent.prototype, "dropZone", null);
        __decorate([
            core.Input()
        ], FileUploadComponent.prototype, "hideFooter", null);
        __decorate([
            core.Input()
        ], FileUploadComponent.prototype, "itemTemplate", null);
        __decorate([
            core.Input()
        ], FileUploadComponent.prototype, "locale", null);
        __decorate([
            core.Input()
        ], FileUploadComponent.prototype, "localizeFormatFunction", null);
        __decorate([
            core.Input()
        ], FileUploadComponent.prototype, "messages", null);
        __decorate([
            core.Input()
        ], FileUploadComponent.prototype, "multiple", null);
        __decorate([
            core.Input()
        ], FileUploadComponent.prototype, "name", null);
        __decorate([
            core.Input()
        ], FileUploadComponent.prototype, "readonly", null);
        __decorate([
            core.Input()
        ], FileUploadComponent.prototype, "responseHandler", null);
        __decorate([
            core.Input()
        ], FileUploadComponent.prototype, "rightToLeft", null);
        __decorate([
            core.Input()
        ], FileUploadComponent.prototype, "setHeaders", null);
        __decorate([
            core.Input()
        ], FileUploadComponent.prototype, "showProgress", null);
        __decorate([
            core.Input()
        ], FileUploadComponent.prototype, "theme", null);
        __decorate([
            core.Input()
        ], FileUploadComponent.prototype, "uploadUrl", null);
        __decorate([
            core.Input()
        ], FileUploadComponent.prototype, "unfocusable", null);
        __decorate([
            core.Input()
        ], FileUploadComponent.prototype, "removeUrl", null);
        __decorate([
            core.Input()
        ], FileUploadComponent.prototype, "value", null);
        __decorate([
            core.Input()
        ], FileUploadComponent.prototype, "validateFile", null);
        __decorate([
            core.Output()
        ], FileUploadComponent.prototype, "onFileSelected", void 0);
        __decorate([
            core.Output()
        ], FileUploadComponent.prototype, "onUploadCanceled", void 0);
        __decorate([
            core.Output()
        ], FileUploadComponent.prototype, "onUploadCompleted", void 0);
        __decorate([
            core.Output()
        ], FileUploadComponent.prototype, "onUploadError", void 0);
        __decorate([
            core.Output()
        ], FileUploadComponent.prototype, "onUploadPaused", void 0);
        __decorate([
            core.Output()
        ], FileUploadComponent.prototype, "onUploadStarted", void 0);
        __decorate([
            core.Output()
        ], FileUploadComponent.prototype, "onValidationError", void 0);
        FileUploadComponent = __decorate([
            core.Directive({
                exportAs: 'smart-file-upload', selector: 'smart-file-upload, [smart-file-upload]'
            })
        ], FileUploadComponent);
        return FileUploadComponent;
    }(BaseElement));

    var FileUploadModule = /** @class */ (function () {
        function FileUploadModule() {
        }
        FileUploadModule = __decorate([
            core.NgModule({
                declarations: [FileUploadComponent],
                schemas: [core.CUSTOM_ELEMENTS_SCHEMA],
                exports: [FileUploadComponent]
            })
        ], FileUploadModule);
        return FileUploadModule;
    }());

    exports.FileUploadComponent = FileUploadComponent;
    exports.FileUploadModule = FileUploadModule;
    exports.Smart = Smart;
    exports.ɵa = BaseElement;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=smart-webcomponents-angular-fileupload.umd.js.map
