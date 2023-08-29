
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.fileupload';

import { __decorate, __extends } from 'tslib';
import { EventEmitter, Output, Input, ElementRef, Directive, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

var BaseElement = /** @class */ (function () {
    function BaseElement(ref) {
        this.onCreate = new EventEmitter();
        this.onReady = new EventEmitter();
        this.onAttach = new EventEmitter();
        this.onDetach = new EventEmitter();
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
        Output()
    ], BaseElement.prototype, "onCreate", void 0);
    __decorate([
        Output()
    ], BaseElement.prototype, "onReady", void 0);
    __decorate([
        Output()
    ], BaseElement.prototype, "onAttach", void 0);
    __decorate([
        Output()
    ], BaseElement.prototype, "onDetach", void 0);
    __decorate([
        Input()
    ], BaseElement.prototype, "locale", null);
    __decorate([
        Input()
    ], BaseElement.prototype, "localizeFormatFunction", null);
    __decorate([
        Input()
    ], BaseElement.prototype, "messages", null);
    __decorate([
        Input()
    ], BaseElement.prototype, "rightToLeft", null);
    __decorate([
        Input()
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
        _this.onFileSelected = new EventEmitter();
        /** @description This event is triggered when a file upload operation is canceled.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	filename, 	type, 	size, 	index)
        *   filename - The name of the canceled file.
        *   type - The type of the canceled file.
        *   size - The size of the canceled file.
        *   index - The index of the canceled file.
        */
        _this.onUploadCanceled = new EventEmitter();
        /** @description This event is triggered when a file upload operation is completed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	filename, 	type, 	size, 	index, 	status, 	serverResponse)
        *   filename - The name of the canceled file.
        *   type - The type of the canceled file.
        *   size - The size of the canceled file.
        *   index - The index of the canceled file.
        *   status - The status of the uploaded file. Whether there was an error or success.
        *   serverResponse - The response of the remote server.
        */
        _this.onUploadCompleted = new EventEmitter();
        /** @description This event is triggered when during the file upload process something happens and upload fails.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	filename, 	type, 	size, 	index, 	status)
        *   filename - The name of the canceled file.
        *   type - The type of the canceled file.
        *   size - The size of the canceled file.
        *   index - The index of the canceled file.
        *   status - The status of the uploaded file. Whether there was an error or success.
        */
        _this.onUploadError = new EventEmitter();
        /** @description This event is triggered when a file upload operation is paused.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	filename, 	type, 	size, 	index)
        *   filename - The name of the paused file.
        *   type - The type of the paused file.
        *   size - The size of the paused file.
        *   index - The index of the paused file.
        */
        _this.onUploadPaused = new EventEmitter();
        /** @description This event is triggered when a file upload operation is started.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	filename, 	type, 	size, 	index)
        *   filename - The name of the file that is being uploaded.
        *   type - The type of the file that is being uploaded.
        *   size - The size of the file that is being uploaded.
        *   index - The index of the file that is being uploaded.
        */
        _this.onUploadStarted = new EventEmitter();
        /** @description This event is triggered if the validation of a user defined 'validateFile' callback fails.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	filename, 	type, 	size)
        *   filename - The name of the file which validation has failed.
        *   type - The type of the file which validation has failed.
        *   size - The size of the file which validation has failed.
        */
        _this.onValidationError = new EventEmitter();
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
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], FileUploadComponent.prototype, "accept", null);
    __decorate([
        Input()
    ], FileUploadComponent.prototype, "animation", null);
    __decorate([
        Input()
    ], FileUploadComponent.prototype, "appendTo", null);
    __decorate([
        Input()
    ], FileUploadComponent.prototype, "autoUpload", null);
    __decorate([
        Input()
    ], FileUploadComponent.prototype, "directory", null);
    __decorate([
        Input()
    ], FileUploadComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], FileUploadComponent.prototype, "dropZone", null);
    __decorate([
        Input()
    ], FileUploadComponent.prototype, "hideFooter", null);
    __decorate([
        Input()
    ], FileUploadComponent.prototype, "itemTemplate", null);
    __decorate([
        Input()
    ], FileUploadComponent.prototype, "locale", null);
    __decorate([
        Input()
    ], FileUploadComponent.prototype, "localizeFormatFunction", null);
    __decorate([
        Input()
    ], FileUploadComponent.prototype, "messages", null);
    __decorate([
        Input()
    ], FileUploadComponent.prototype, "multiple", null);
    __decorate([
        Input()
    ], FileUploadComponent.prototype, "name", null);
    __decorate([
        Input()
    ], FileUploadComponent.prototype, "readonly", null);
    __decorate([
        Input()
    ], FileUploadComponent.prototype, "responseHandler", null);
    __decorate([
        Input()
    ], FileUploadComponent.prototype, "rightToLeft", null);
    __decorate([
        Input()
    ], FileUploadComponent.prototype, "setHeaders", null);
    __decorate([
        Input()
    ], FileUploadComponent.prototype, "showProgress", null);
    __decorate([
        Input()
    ], FileUploadComponent.prototype, "theme", null);
    __decorate([
        Input()
    ], FileUploadComponent.prototype, "uploadUrl", null);
    __decorate([
        Input()
    ], FileUploadComponent.prototype, "unfocusable", null);
    __decorate([
        Input()
    ], FileUploadComponent.prototype, "removeUrl", null);
    __decorate([
        Input()
    ], FileUploadComponent.prototype, "value", null);
    __decorate([
        Input()
    ], FileUploadComponent.prototype, "validateFile", null);
    __decorate([
        Output()
    ], FileUploadComponent.prototype, "onFileSelected", void 0);
    __decorate([
        Output()
    ], FileUploadComponent.prototype, "onUploadCanceled", void 0);
    __decorate([
        Output()
    ], FileUploadComponent.prototype, "onUploadCompleted", void 0);
    __decorate([
        Output()
    ], FileUploadComponent.prototype, "onUploadError", void 0);
    __decorate([
        Output()
    ], FileUploadComponent.prototype, "onUploadPaused", void 0);
    __decorate([
        Output()
    ], FileUploadComponent.prototype, "onUploadStarted", void 0);
    __decorate([
        Output()
    ], FileUploadComponent.prototype, "onValidationError", void 0);
    FileUploadComponent = __decorate([
        Directive({
            exportAs: 'smart-file-upload', selector: 'smart-file-upload, [smart-file-upload]'
        })
    ], FileUploadComponent);
    return FileUploadComponent;
}(BaseElement));

var FileUploadModule = /** @class */ (function () {
    function FileUploadModule() {
    }
    FileUploadModule = __decorate([
        NgModule({
            declarations: [FileUploadComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            exports: [FileUploadComponent]
        })
    ], FileUploadModule);
    return FileUploadModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { FileUploadComponent, FileUploadModule, Smart, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-fileupload.js.map
