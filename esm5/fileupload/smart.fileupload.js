import * as tslib_1 from "tslib";
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Smart } from './smart.element';
var FileUploadComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FileUploadComponent, _super);
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
    tslib_1.__decorate([
        Input()
    ], FileUploadComponent.prototype, "accept", null);
    tslib_1.__decorate([
        Input()
    ], FileUploadComponent.prototype, "animation", null);
    tslib_1.__decorate([
        Input()
    ], FileUploadComponent.prototype, "appendTo", null);
    tslib_1.__decorate([
        Input()
    ], FileUploadComponent.prototype, "autoUpload", null);
    tslib_1.__decorate([
        Input()
    ], FileUploadComponent.prototype, "directory", null);
    tslib_1.__decorate([
        Input()
    ], FileUploadComponent.prototype, "disabled", null);
    tslib_1.__decorate([
        Input()
    ], FileUploadComponent.prototype, "dropZone", null);
    tslib_1.__decorate([
        Input()
    ], FileUploadComponent.prototype, "hideFooter", null);
    tslib_1.__decorate([
        Input()
    ], FileUploadComponent.prototype, "itemTemplate", null);
    tslib_1.__decorate([
        Input()
    ], FileUploadComponent.prototype, "locale", null);
    tslib_1.__decorate([
        Input()
    ], FileUploadComponent.prototype, "localizeFormatFunction", null);
    tslib_1.__decorate([
        Input()
    ], FileUploadComponent.prototype, "messages", null);
    tslib_1.__decorate([
        Input()
    ], FileUploadComponent.prototype, "multiple", null);
    tslib_1.__decorate([
        Input()
    ], FileUploadComponent.prototype, "name", null);
    tslib_1.__decorate([
        Input()
    ], FileUploadComponent.prototype, "readonly", null);
    tslib_1.__decorate([
        Input()
    ], FileUploadComponent.prototype, "responseHandler", null);
    tslib_1.__decorate([
        Input()
    ], FileUploadComponent.prototype, "rightToLeft", null);
    tslib_1.__decorate([
        Input()
    ], FileUploadComponent.prototype, "setHeaders", null);
    tslib_1.__decorate([
        Input()
    ], FileUploadComponent.prototype, "showProgress", null);
    tslib_1.__decorate([
        Input()
    ], FileUploadComponent.prototype, "theme", null);
    tslib_1.__decorate([
        Input()
    ], FileUploadComponent.prototype, "uploadUrl", null);
    tslib_1.__decorate([
        Input()
    ], FileUploadComponent.prototype, "unfocusable", null);
    tslib_1.__decorate([
        Input()
    ], FileUploadComponent.prototype, "value", null);
    tslib_1.__decorate([
        Input()
    ], FileUploadComponent.prototype, "validateFile", null);
    tslib_1.__decorate([
        Output()
    ], FileUploadComponent.prototype, "onFileSelected", void 0);
    tslib_1.__decorate([
        Output()
    ], FileUploadComponent.prototype, "onUploadCanceled", void 0);
    tslib_1.__decorate([
        Output()
    ], FileUploadComponent.prototype, "onUploadCompleted", void 0);
    tslib_1.__decorate([
        Output()
    ], FileUploadComponent.prototype, "onUploadError", void 0);
    tslib_1.__decorate([
        Output()
    ], FileUploadComponent.prototype, "onUploadPaused", void 0);
    tslib_1.__decorate([
        Output()
    ], FileUploadComponent.prototype, "onUploadStarted", void 0);
    tslib_1.__decorate([
        Output()
    ], FileUploadComponent.prototype, "onValidationError", void 0);
    FileUploadComponent = tslib_1.__decorate([
        Directive({
            exportAs: 'smart-file-upload', selector: 'smart-file-upload, [smart-file-upload]'
        })
    ], FileUploadComponent);
    return FileUploadComponent;
}(BaseElement));
export { FileUploadComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQuZmlsZXVwbG9hZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NtYXJ0LXdlYmNvbXBvbmVudHMtYW5ndWxhci9maWxldXBsb2FkLyIsInNvdXJjZXMiOlsic21hcnQuZmlsZXVwbG9hZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUosT0FBTyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVyRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFReEM7SUFBeUMsK0NBQVc7SUFDbkQsNkJBQVksR0FBMkI7UUFBdkMsWUFDQyxrQkFBTSxHQUFHLENBQUMsU0FFVjtRQUVPLG1CQUFhLEdBQVUsRUFBRSxDQUFDO1FBcU9sQzs7Ozs7O1VBTUU7UUFDUSxvQkFBYyxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXpFOzs7Ozs7VUFNRTtRQUNRLHNCQUFnQixHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTNFOzs7Ozs7OztVQVFFO1FBQ1EsdUJBQWlCLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFNUU7Ozs7Ozs7VUFPRTtRQUNRLG1CQUFhLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFeEU7Ozs7OztVQU1FO1FBQ1Esb0JBQWMsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV6RTs7Ozs7O1VBTUU7UUFDUSxxQkFBZSxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTFFOzs7OztVQUtFO1FBQ1EsdUJBQWlCLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUF2UzNFLEtBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxD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QUFFOytEQUFnRTtJQVMvRDtRQUFULE1BQU0sRUFBRTtpRUFBa0U7SUFXakU7UUFBVCxNQUFNLEVBQUU7a0VBQW1FO0lBVWxFO1FBQVQsTUFBTSxFQUFFOzhEQUErRDtJQVM5RDtRQUFULE1BQU0sRUFBRTsrREFBZ0U7SUFTL0Q7UUFBVCxNQUFNLEVBQUU7Z0VBQWlFO0lBUWhFO1FBQVQsTUFBTSxFQUFFO2tFQUFtRTtJQTFTaEUsbUJBQW1CO1FBSi9CLFNBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxtQkFBbUIsRUFBRSxRQUFRLEVBQUUsd0NBQXdDO1NBQ2pGLENBQUM7T0FFVyxtQkFBbUIsQ0E4ZS9CO0lBQUQsMEJBQUM7Q0FBQSxBQTllRCxDQUF5QyxXQUFXLEdBOGVuRDtTQTllWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGaWxlVXBsb2FkIH0gZnJvbSAnLi8uLi9pbmRleCc7XG5pbXBvcnQgeyBBbmltYXRpb24sIEVsZW1lbnRSZW5kZXJNb2RlfSBmcm9tICcuLy4uL2luZGV4JztcbmltcG9ydCB7IENvbXBvbmVudCwgRGlyZWN0aXZlLCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgU2ltcGxlQ2hhbmdlcywgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VFbGVtZW50LCBTbWFydCB9IGZyb20gJy4vc21hcnQuZWxlbWVudCc7XG5leHBvcnQgeyBBbmltYXRpb24sIEVsZW1lbnRSZW5kZXJNb2RlfSBmcm9tICcuLy4uL2luZGV4JztcbmV4cG9ydCB7IFNtYXJ0IH0gZnJvbSAnLi9zbWFydC5lbGVtZW50JztcbmV4cG9ydCB7IEZpbGVVcGxvYWQgfSBmcm9tICcuLy4uL2luZGV4JztcblxuXG5ARGlyZWN0aXZlKHtcblx0ZXhwb3J0QXM6ICdzbWFydC1maWxlLXVwbG9hZCcsXHRzZWxlY3RvcjogJ3NtYXJ0LWZpbGUtdXBsb2FkLCBbc21hcnQtZmlsZS11cGxvYWRdJ1xufSlcblxuZXhwb3J0IGNsYXNzIEZpbGVVcGxvYWRDb21wb25lbnQgZXh0ZW5kcyBCYXNlRWxlbWVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuXHRjb25zdHJ1Y3RvcihyZWY6IEVsZW1lbnRSZWY8RmlsZVVwbG9hZD4pIHtcblx0XHRzdXBlcihyZWYpO1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA9IHJlZi5uYXRpdmVFbGVtZW50IGFzIEZpbGVVcGxvYWQ7XG5cdH1cblxuXHRwcml2YXRlIGV2ZW50SGFuZGxlcnM6IGFueVtdID0gW107XG5cblx0cHVibGljIG5hdGl2ZUVsZW1lbnQ6IEZpbGVVcGxvYWQ7XG5cdC8qKiBAZGVzY3JpcHRpb24gQ3JlYXRlcyB0aGUgY29tcG9uZW50IG9uIGRlbWFuZC5cblx0ICogQHBhcmFtIHByb3BlcnRpZXMgQW4gb3B0aW9uYWwgb2JqZWN0IG9mIHByb3BlcnRpZXMsIHdoaWNoIHdpbGwgYmUgYWRkZWQgdG8gdGhlIHRlbXBsYXRlIGJpbmRlZCBvbmVzLlxuXHQgKi9cblx0cHVibGljIGNyZWF0ZUNvbXBvbmVudChwcm9wZXJ0aWVzID0ge30pOiBhbnkge1xuICAgIFx0dGhpcy5uYXRpdmVFbGVtZW50ID0gPEZpbGVVcGxvYWQ+ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc21hcnQtZmlsZS11cGxvYWQnKTtcblx0XHRmb3IgKGxldCBwcm9wZXJ0eU5hbWUgaW4gcHJvcGVydGllcykgeyBcbiBcdFx0XHR0aGlzLm5hdGl2ZUVsZW1lbnRbcHJvcGVydHlOYW1lXSA9IHByb3BlcnRpZXNbcHJvcGVydHlOYW1lXTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudDtcblx0fVxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgZmlsZSB0eXBlcyB0aGF0IGNhbiBiZSBzdWJtaXR0ZWQgdG8gdGhlIHNlcnZlciB2aWEgdGhlIGVsZW1lbnQuIFRoaXMgcHJvcGVydHkgY29ycmVzcG9uZHMgdG8gdGhlICdhY2NlcHQnIGF0dHJpYnV0ZSBvZiB0aGUgaGlkZGVuIGZpbGUgaW5wdXQgd2hpY2ggaXMgc3VibWl0dGVkIHRvIHRoZSBVUkwgc3BlY2lmaWVkIGJ5IHRoZSB1cGxvYWRVcmwgcHJvcGVydHkuICovXG5cdEBJbnB1dCgpXG5cdGdldCBhY2NlcHQoKTogc3RyaW5nIHwgbnVsbCB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hY2NlcHQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGFjY2VwdCh2YWx1ZTogc3RyaW5nIHwgbnVsbCkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hY2NlcHQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSBhbmltYXRpb24gbW9kZS4gQW5pbWF0aW9uIGlzIGRpc2FibGVkIHdoZW4gdGhlIHByb3BlcnR5IGlzIHNldCB0byAnbm9uZScgKi9cblx0QElucHV0KClcblx0Z2V0IGFuaW1hdGlvbigpOiBBbmltYXRpb24gfCBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYW5pbWF0aW9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBhbmltYXRpb24odmFsdWU6IEFuaW1hdGlvbiB8IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hbmltYXRpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQXBwZW5kcyB0aGUgbGlzdCB3aXRoIHNlbGVjdGVkIGZpbGVzIHRvIGEgbmV3IGN1c3RvbSBjb250YWluZXIgc3BlY2lmaWVkIGJ5IHRoZSB1c2VyLiBJZiB0aGUgdmFsdWUgb2YgdGhlIHByb3BlcnR5IGlzIGEgc3RyaW5nIGl0IG11c3QgcmVwcmVzZW50IGEgdmFsaWQgaWQgb2YgYW4gSFRNTCBlbGVtZW50IGluc2lkZSB0aGUgRE9NIHRoYXQgd2lsbCBiZSB1c2VkIGFzIHRoZSBuZXcgY29udGFpbmVyIGZvciB0aGUgdXBsb2FkZWQgZmlsZXMgbGlzdC4gKi9cblx0QElucHV0KClcblx0Z2V0IGFwcGVuZFRvKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hcHBlbmRUbyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYXBwZW5kVG8odmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hcHBlbmRUbyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgd2hldGhlciBmaWxlcyB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgdXBsb2FkZWQgYWZ0ZXIgc2VsZWN0aW9uLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgYXV0b1VwbG9hZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9VcGxvYWQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGF1dG9VcGxvYWQodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYXV0b1VwbG9hZCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBbGxvd3MgdG8gdXBsb2FkIGEgZGlyZWN0b3J5LiBGaWxlcyBpbiBhbGwgc3ViZm9sZGVycyB3aWxsIGJlIHVwbG9hZGVkIGFsc28uIFRoaXMgb3B0aW9uIGlzIHN1cHBvcnRlZCBvbmx5IGluIEZpcmVmb3ggYW5kIENocm9tZS4gKi9cblx0QElucHV0KClcblx0Z2V0IGRpcmVjdG9yeSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpcmVjdG9yeSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGlyZWN0b3J5KHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpcmVjdG9yeSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFbmFibGVzIG9yIGRpc2FibGVzIHRoZSBlbGVtZW50LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlZCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZWQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGVmaW5lcyBhIGN1c3RvbSBjb250YWluZXIgdGhhdCB3aWxsIGJlIHVzZWQgYXMgdGhlIG5ldyBkcm9wIHpvbmUgZm9yIGZpbGUgdXBsb2Fkcy4gVGhlIGRyb3BwZWQgZmlsZXMgd2lsbCBiZSBhZGRlZCBpbiB0aGUgZmlsZVVwbG9hZCdzIGxpc3QuIElmICdkcm9wWm9uZScgcHJvcGVydHkgc2V0IHRvIHRydWUsIHRoZSBkZWZhdWx0IGRyb3Agem9uZSBpbnNpZGUgdGhlIGVsZW1lbnQgd2lsbCBiZSB1c2VkIGluc3RlYWQuIElmIHNldCB0byBjZXJ0YWluIGlkIG9mIGFuIEhUTUwgZWxlbWVudCBpbnNpZGUgdGhlIERPTSB0aGVuIGl0IHdpbGwgYmUgdXNlZCBhcyB0aGUgZHJvcCB6b25lLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZHJvcFpvbmUoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRyb3Bab25lIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkcm9wWm9uZSh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRyb3Bab25lID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEhpZGVzIHRoZSBmb290ZXIgZWxlbWVudCBhbmQgaXQncyBjb250ZW50cyAoVXBsb2FkIEFsbCwgUGF1c2UgQWxsIGFuZCBDbG9zZSBBbGwgYnV0dG9ucykuICovXG5cdEBJbnB1dCgpXG5cdGdldCBoaWRlRm9vdGVyKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGlkZUZvb3RlciA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgaGlkZUZvb3Rlcih2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oaWRlRm9vdGVyID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEFwcGxpZXMgYSBjdXN0b20gdGVtcGxhdGUgdG8gdGhlIGZpbGUgaXRlbXMgdGhhdCByZXByZXNlbnQgdGhlIHVwbG9hZGVkIGZpbGVzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgaXRlbVRlbXBsYXRlKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5pdGVtVGVtcGxhdGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGl0ZW1UZW1wbGF0ZSh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lml0ZW1UZW1wbGF0ZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIGxhbmd1YWdlLiBVc2VkIGluIGNvbmp1bmN0aW9uIHdpdGggdGhlIHByb3BlcnR5IG1lc3NhZ2VzLiAgKi9cblx0QElucHV0KClcblx0Z2V0IGxvY2FsZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubG9jYWxlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBsb2NhbGUodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sb2NhbGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ2FsbGJhY2sgdXNlZCB0byBjdXN0b21pemUgdGhlIGZvcm1hdCBvZiB0aGUgbWVzc2FnZXMgdGhhdCBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgTG9jYWxpemF0aW9uIE1vZHVsZS4gKi9cblx0QElucHV0KClcblx0Z2V0IGxvY2FsaXplRm9ybWF0RnVuY3Rpb24oKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxvY2FsaXplRm9ybWF0RnVuY3Rpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGxvY2FsaXplRm9ybWF0RnVuY3Rpb24odmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sb2NhbGl6ZUZvcm1hdEZ1bmN0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgdGhlIHZhcmlvdXMgdGV4dCB2YWx1ZXMgdXNlZCBpbiB0aGUgd2lkZ2V0LiBVc2VmdWwgZm9yIGxvY2FsaXphdGlvbi4gVGhlIGxvY2FsaXphdGlvbiBvYmplY3QgaGFzIHRoZSBmb2xsb3dpbmcgZmllbGRzOiBicm93c2UsIHBhdXNlRmlsZSwgY2FuY2VsRmlsZSwgdXBsb2FkRmlsZSwgcGF1c2VBbGwsIGNhbmNlbEFsbCwgdXBsb2FkQWxsLiBJdCdzIHJlY29tbWVuZGVkIHRoZXNlIG1lc3NhZ2VzIHRvIGJlIHNldCBiZWZvcmUgZWxlbWVudCdzIGluaXRpYWxpemF0aW9uLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbWVzc2FnZXMoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm1lc3NhZ2VzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBtZXNzYWdlcyh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm1lc3NhZ2VzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB3aGV0aGVyIG11bHRpcGxlIGl0ZW0gdXBsb2FkcyBhcmUgYWxsb3dlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IG11bHRpcGxlKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubXVsdGlwbGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG11bHRpcGxlKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm11bHRpcGxlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgbmFtZSBhdHRyaWJ1dGUgb2YgdGhlIGhpZGRlbiBmaWxlIGlucHV0IHdoaWNoIGlzIHN1Ym1pdHRlZCB0byB0aGUgVVJMIHNwZWNpZmllZCBieSB0aGUgdXBsb2FkVXJsIHByb3BlcnR5LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubmFtZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm5hbWUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSWYgdGhlIGVsZW1lbnQgaXMgcmVhZG9ubHksIHVzZXJzIGNhbm5vdCBpbnRlcmFjdCB3aXRoIGl0LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcmVhZG9ubHkoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZWFkb25seSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcmVhZG9ubHkodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmVhZG9ubHkgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ2FsbGJhY2sgdGhhdCBjYW4gdXNlZCB0byBoYW5kbGUgdmFyaW91cyBzZXJ2ZXIgcmVzcG9uc2VzIGFuZCBlcnJvciBjb2Rlcy4gKi9cblx0QElucHV0KClcblx0Z2V0IHJlc3BvbnNlSGFuZGxlcigpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmVzcG9uc2VIYW5kbGVyIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCByZXNwb25zZUhhbmRsZXIodmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZXNwb25zZUhhbmRsZXIgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSB2YWx1ZSBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGVsZW1lbnQgaXMgYWxpZ25lZCB0byBzdXBwb3J0IGxvY2FsZXMgdXNpbmcgcmlnaHQtdG8tbGVmdCBmb250cy4gKi9cblx0QElucHV0KClcblx0Z2V0IHJpZ2h0VG9MZWZ0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmlnaHRUb0xlZnQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHJpZ2h0VG9MZWZ0KHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJpZ2h0VG9MZWZ0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIENhbGxiYWNrIGZ1bmN0aW9uLCB1c2VkIHRvIGNoYW5nZSB0aGUgaGVhZGVycyBvZiB0aGUgZmlsZSB1cGxvYWQncyBYSFIgcmVxdWVzdC4gKi9cblx0QElucHV0KClcblx0Z2V0IHNldEhlYWRlcnMoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNldEhlYWRlcnMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHNldEhlYWRlcnModmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zZXRIZWFkZXJzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERpc3BsYXlzIGEgcHJvZ3Jlc3MgYmFyIGF0IHRoZSBib3R0b20gb2YgZWFjaCB1cGxvYWRlZCBpdGVtIHRvIHNob3cgdGhlIHByb2dyZXNzIG9mIHRoZSB1cGxvYWRpbmcgcHJvY2Vzcy4gKi9cblx0QElucHV0KClcblx0Z2V0IHNob3dQcm9ncmVzcygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNob3dQcm9ncmVzcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc2hvd1Byb2dyZXNzKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNob3dQcm9ncmVzcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSB0aGVtZS4gVGhlbWUgZGVmaW5lcyB0aGUgbG9vayBvZiB0aGUgZWxlbWVudCAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdGhlbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRoZW1lIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0aGVtZSh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRoZW1lID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgdXBsb2FkIFVSTC4gVGhpcyBwcm9wZXJ0eSBjb3JyZXNwb25kcyB0byB0aGUgdXBsb2FkIGZvcm0ncyBhY3Rpb24gYXR0cmlidXRlLiBGb3IgZXhhbXBsZSwgdGhlIHVwbG9hZFVybCBwcm9wZXJ0eSBjYW4gcG9pbnQgdG8gYSBQSFAgZmlsZSwgd2hpY2ggaGFuZGxlcyB0aGUgdXBsb2FkIG9wZXJhdGlvbiBvbiB0aGUgc2VydmVyLXNpZGUuICovXG5cdEBJbnB1dCgpXG5cdGdldCB1cGxvYWRVcmwoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnVwbG9hZFVybCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdXBsb2FkVXJsKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudXBsb2FkVXJsID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIElmIGlzIHNldCB0byB0cnVlLCB0aGUgZWxlbWVudCBjYW5ub3QgYmUgZm9jdXNlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IHVuZm9jdXNhYmxlKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudW5mb2N1c2FibGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHVuZm9jdXNhYmxlKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnVuZm9jdXNhYmxlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEdldHMgdGhlIGZpbGUgdXBsb2FkIHZhbHVlLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdmFsdWUoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB2YWx1ZSh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnZhbHVlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIENhbGxiYWNrIHVzZWQgdG8gdmFsaWRhdGUgdGhlIGZpbGVzIGltbWVkaWF0ZWxseSBhZnRlciB0aGVpciBzZWxlY3Rpb24uIFJldHVucyBhIGJvb2xlYW4gdmFsdWUuIElmIHRoZSByZXR1cm5lZCB2YWx1ZSBpcyBmYWxzZSwgdGhlIGZpbGUgaXMgcmVtb3ZlZCBmcm9tIGxpc3QgYW5kIGEgJ3ZhbGlkYXRpb25FcnJvciBpcyBmaXJlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IHZhbGlkYXRlRmlsZSgpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudmFsaWRhdGVGaWxlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB2YWxpZGF0ZUZpbGUodmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC52YWxpZGF0ZUZpbGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIGZpbGUgaGFzIGJlZW4gc2VsZWN0ZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0ZmlsZW5hbWUsIFx0dHlwZSwgXHRzaXplLCBcdGluZGV4KVxuXHQqICAgZmlsZW5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgc2VsZWN0ZWQgZmlsZS5cblx0KiAgIHR5cGUgLSBUaGUgdHlwZSBvZiB0aGUgc2VsZWN0ZWQgZmlsZS5cblx0KiAgIHNpemUgLSBUaGUgc2l6ZSBvZiB0aGUgc2VsZWN0ZWQgZmlsZS5cblx0KiAgIGluZGV4IC0gVGhlIGluZGV4IG9mIHRoZSBzZWxlY3RlZCBmaWxlLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25GaWxlU2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgZmlsZSB1cGxvYWQgb3BlcmF0aW9uIGlzIGNhbmNlbGVkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGZpbGVuYW1lLCBcdHR5cGUsIFx0c2l6ZSwgXHRpbmRleClcblx0KiAgIGZpbGVuYW1lIC0gVGhlIG5hbWUgb2YgdGhlIGNhbmNlbGVkIGZpbGUuXG5cdCogICB0eXBlIC0gVGhlIHR5cGUgb2YgdGhlIGNhbmNlbGVkIGZpbGUuXG5cdCogICBzaXplIC0gVGhlIHNpemUgb2YgdGhlIGNhbmNlbGVkIGZpbGUuXG5cdCogICBpbmRleCAtIFRoZSBpbmRleCBvZiB0aGUgY2FuY2VsZWQgZmlsZS5cblx0Ki9cblx0QE91dHB1dCgpIG9uVXBsb2FkQ2FuY2VsZWQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgZmlsZSB1cGxvYWQgb3BlcmF0aW9uIGlzIGNvbXBsZXRlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRmaWxlbmFtZSwgXHR0eXBlLCBcdHNpemUsIFx0aW5kZXgsIFx0c3RhdHVzLCBcdHNlcnZlclJlc3BvbnNlKVxuXHQqICAgZmlsZW5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgY2FuY2VsZWQgZmlsZS5cblx0KiAgIHR5cGUgLSBUaGUgdHlwZSBvZiB0aGUgY2FuY2VsZWQgZmlsZS5cblx0KiAgIHNpemUgLSBUaGUgc2l6ZSBvZiB0aGUgY2FuY2VsZWQgZmlsZS5cblx0KiAgIGluZGV4IC0gVGhlIGluZGV4IG9mIHRoZSBjYW5jZWxlZCBmaWxlLlxuXHQqICAgc3RhdHVzIC0gVGhlIHN0YXR1cyBvZiB0aGUgdXBsb2FkZWQgZmlsZS4gV2hldGhlciB0aGVyZSB3YXMgYW4gZXJyb3Igb3Igc3VjY2Vzcy5cblx0KiAgIHNlcnZlclJlc3BvbnNlIC0gVGhlIHJlc3BvbnNlIG9mIHRoZSByZW1vdGUgc2VydmVyLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25VcGxvYWRDb21wbGV0ZWQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGR1cmluZyB0aGUgZmlsZSB1cGxvYWQgcHJvY2VzcyBzb21ldGhpbmcgaGFwcGVucyBhbmQgdXBsb2FkIGZhaWxzLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGZpbGVuYW1lLCBcdHR5cGUsIFx0c2l6ZSwgXHRpbmRleCwgXHRzdGF0dXMpXG5cdCogICBmaWxlbmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBjYW5jZWxlZCBmaWxlLlxuXHQqICAgdHlwZSAtIFRoZSB0eXBlIG9mIHRoZSBjYW5jZWxlZCBmaWxlLlxuXHQqICAgc2l6ZSAtIFRoZSBzaXplIG9mIHRoZSBjYW5jZWxlZCBmaWxlLlxuXHQqICAgaW5kZXggLSBUaGUgaW5kZXggb2YgdGhlIGNhbmNlbGVkIGZpbGUuXG5cdCogICBzdGF0dXMgLSBUaGUgc3RhdHVzIG9mIHRoZSB1cGxvYWRlZCBmaWxlLiBXaGV0aGVyIHRoZXJlIHdhcyBhbiBlcnJvciBvciBzdWNjZXNzLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25VcGxvYWRFcnJvcjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSBmaWxlIHVwbG9hZCBvcGVyYXRpb24gaXMgcGF1c2VkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGZpbGVuYW1lLCBcdHR5cGUsIFx0c2l6ZSwgXHRpbmRleClcblx0KiAgIGZpbGVuYW1lIC0gVGhlIG5hbWUgb2YgdGhlIHBhdXNlZCBmaWxlLlxuXHQqICAgdHlwZSAtIFRoZSB0eXBlIG9mIHRoZSBwYXVzZWQgZmlsZS5cblx0KiAgIHNpemUgLSBUaGUgc2l6ZSBvZiB0aGUgcGF1c2VkIGZpbGUuXG5cdCogICBpbmRleCAtIFRoZSBpbmRleCBvZiB0aGUgcGF1c2VkIGZpbGUuXG5cdCovXG5cdEBPdXRwdXQoKSBvblVwbG9hZFBhdXNlZDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSBmaWxlIHVwbG9hZCBvcGVyYXRpb24gaXMgc3RhcnRlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRmaWxlbmFtZSwgXHR0eXBlLCBcdHNpemUsIFx0aW5kZXgpXG5cdCogICBmaWxlbmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBmaWxlIHRoYXQgaXMgYmVpbmcgdXBsb2FkZWQuXG5cdCogICB0eXBlIC0gVGhlIHR5cGUgb2YgdGhlIGZpbGUgdGhhdCBpcyBiZWluZyB1cGxvYWRlZC5cblx0KiAgIHNpemUgLSBUaGUgc2l6ZSBvZiB0aGUgZmlsZSB0aGF0IGlzIGJlaW5nIHVwbG9hZGVkLlxuXHQqICAgaW5kZXggLSBUaGUgaW5kZXggb2YgdGhlIGZpbGUgdGhhdCBpcyBiZWluZyB1cGxvYWRlZC5cblx0Ki9cblx0QE91dHB1dCgpIG9uVXBsb2FkU3RhcnRlZDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIGlmIHRoZSB2YWxpZGF0aW9uIG9mIGEgdXNlciBkZWZpbmVkICd2YWxpZGF0ZUZpbGUnIGNhbGxiYWNrIGZhaWxzLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGZpbGVuYW1lLCBcdHR5cGUsIFx0c2l6ZSlcblx0KiAgIGZpbGVuYW1lIC0gVGhlIG5hbWUgb2YgdGhlIGZpbGUgd2hpY2ggdmFsaWRhdGlvbiBoYXMgZmFpbGVkLlxuXHQqICAgdHlwZSAtIFRoZSB0eXBlIG9mIHRoZSBmaWxlIHdoaWNoIHZhbGlkYXRpb24gaGFzIGZhaWxlZC5cblx0KiAgIHNpemUgLSBUaGUgc2l6ZSBvZiB0aGUgZmlsZSB3aGljaCB2YWxpZGF0aW9uIGhhcyBmYWlsZWQuXG5cdCovXG5cdEBPdXRwdXQoKSBvblZhbGlkYXRpb25FcnJvcjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIE9wZW5zIGEgcG9wdXAgdG8gYnJvd3NlIGZvciBhIGZpbGUuIFxuXHQqL1xuICAgIHB1YmxpYyBicm93c2UoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmJyb3dzZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmJyb3dzZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDYW5jZWxzIGFsbCBzZWxlY3RlZCBmaWxlcy4gVGhlIGZpbGVzIGFyZSByZW1vdmVkIGZyb20gdGhlIGxpc3QgYW5kIHRoZWlyIHVwbG9hZGluZyBpcyBwcmV2ZW50ZWQuIFxuXHQqL1xuICAgIHB1YmxpYyBjYW5jZWxBbGwoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNhbmNlbEFsbCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNhbmNlbEFsbCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDYW5jZWxzIGEgc2VsZWN0ZWQgZmlsZS4gVGhlIGZpbGUgaXMgcmVtb3ZlZCBmcm9tIHRoZSBmaWxlIGxpc3QgYW5kIGl0J3MgdXBsb2FkaW5nIGlzIHByZXZlbnRlZC4gXG5cdCogQHBhcmFtIHtudW1iZXJ9IGluZGV4LiBJbmRleCBvZiB0aGUgZmlsZSB3aGljaCB3aWxsIGJlIGNhbmNlbGVkLlxuXHQqL1xuICAgIHB1YmxpYyBjYW5jZWxGaWxlKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2FuY2VsRmlsZShpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2FuY2VsRmlsZShpbmRleCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFBhdXNlcyB0aGUgdXBsb2FkaW5nIG9mIGFsbCBmaWxlcy4gRmlsZSB1cGxvYWQgaXMgcHJldmVudGVkIGJ1dCB0aGUgZmlsZXMgcmVtYWluIGluIHRoZSBmaWxlIGxpc3QuIFxuXHQqL1xuICAgIHB1YmxpYyBwYXVzZUFsbCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucGF1c2VBbGwoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5wYXVzZUFsbCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBQYXVzZXMgdXBsb2FkIG9mIGEgZmlsZSB3aXRoIHBhcnRpY3VsYXIgaW5kZXguIEZpbGUgdXBsb2FkIGlzIHByZXZlbnRlZCBidXQgZmlsZSByYW1haW5zIGluIHRoZSBmaWxlIGxpc3QuIFxuXHQqIEBwYXJhbSB7bnVtYmVyfSBpZC4gSW5kZXggb2YgdGhlIGZpbGUgd2hpY2ggd2lsbCBiZSBwYXVzZWQuXG5cdCovXG4gICAgcHVibGljIHBhdXNlRmlsZShpZDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnBhdXNlRmlsZShpZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucGF1c2VGaWxlKGlkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVXBsb2FkcyBhbGwgc2VsZWN0ZWQgZmlsZXMuIFxuXHQqL1xuICAgIHB1YmxpYyB1cGxvYWRBbGwoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnVwbG9hZEFsbCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnVwbG9hZEFsbCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBVcGxvYWRzIGEgc2VsZWN0ZWQgZmlsZS4gXG5cdCogQHBhcmFtIHtudW1iZXJ9IGlkLiBJbmRleCBvZiB0aGUgZmlsZSB3aGljaCB3aWxsIGJlIHVwbG9hZGVkLlxuXHQqL1xuICAgIHB1YmxpYyB1cGxvYWRGaWxlKGlkOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQudXBsb2FkRmlsZShpZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQudXBsb2FkRmlsZShpZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cdGdldCBpc1JlbmRlcmVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCA6IGZhbHNlO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXG4gICAgICB0aGF0Lm9uQ3JlYXRlLmVtaXQodGhhdC5uYXRpdmVFbGVtZW50KTtcblxuXHRcdFNtYXJ0LlJlbmRlcigpO1xuXG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NtYXJ0LWFuZ3VsYXInKTtcblxuXHRcdHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4geyB0aGF0Lm9uUmVhZHkuZW1pdCh0aGF0Lm5hdGl2ZUVsZW1lbnQpOyB9KTtcblx0XHR0aGlzLmxpc3RlbigpO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy51bmxpc3RlbigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXHRcdGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQgJiYgdGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcblx0XHRcdGZvciAoY29uc3QgcHJvcE5hbWUgaW4gY2hhbmdlcykge1xuXHRcdFx0XHRpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcblx0XHRcdFx0XHR0aGlzLm5hdGl2ZUVsZW1lbnRbcHJvcE5hbWVdID0gY2hhbmdlc1twcm9wTmFtZV0uY3VycmVudFZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBZGQgZXZlbnQgbGlzdGVuZXJzLiAqL1xuXHRwcml2YXRlIGxpc3RlbigpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydmaWxlU2VsZWN0ZWRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25GaWxlU2VsZWN0ZWQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZmlsZVNlbGVjdGVkJywgdGhhdC5ldmVudEhhbmRsZXJzWydmaWxlU2VsZWN0ZWRIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWyd1cGxvYWRDYW5jZWxlZEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblVwbG9hZENhbmNlbGVkLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3VwbG9hZENhbmNlbGVkJywgdGhhdC5ldmVudEhhbmRsZXJzWyd1cGxvYWRDYW5jZWxlZEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3VwbG9hZENvbXBsZXRlZEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblVwbG9hZENvbXBsZXRlZC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd1cGxvYWRDb21wbGV0ZWQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3VwbG9hZENvbXBsZXRlZEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3VwbG9hZEVycm9ySGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uVXBsb2FkRXJyb3IuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndXBsb2FkRXJyb3InLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3VwbG9hZEVycm9ySGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1sndXBsb2FkUGF1c2VkSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uVXBsb2FkUGF1c2VkLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3VwbG9hZFBhdXNlZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1sndXBsb2FkUGF1c2VkSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1sndXBsb2FkU3RhcnRlZEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblVwbG9hZFN0YXJ0ZWQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndXBsb2FkU3RhcnRlZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1sndXBsb2FkU3RhcnRlZEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3ZhbGlkYXRpb25FcnJvckhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblZhbGlkYXRpb25FcnJvci5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd2YWxpZGF0aW9uRXJyb3InLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3ZhbGlkYXRpb25FcnJvckhhbmRsZXInXSk7XG5cblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVtb3ZlIGV2ZW50IGxpc3RlbmVycy4gKi9cblx0cHJpdmF0ZSB1bmxpc3RlbigpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snZmlsZVNlbGVjdGVkSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZmlsZVNlbGVjdGVkJywgdGhhdC5ldmVudEhhbmRsZXJzWydmaWxlU2VsZWN0ZWRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3VwbG9hZENhbmNlbGVkSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndXBsb2FkQ2FuY2VsZWQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3VwbG9hZENhbmNlbGVkSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWyd1cGxvYWRDb21wbGV0ZWRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd1cGxvYWRDb21wbGV0ZWQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3VwbG9hZENvbXBsZXRlZEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1sndXBsb2FkRXJyb3JIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd1cGxvYWRFcnJvcicsIHRoYXQuZXZlbnRIYW5kbGVyc1sndXBsb2FkRXJyb3JIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3VwbG9hZFBhdXNlZEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3VwbG9hZFBhdXNlZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1sndXBsb2FkUGF1c2VkSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWyd1cGxvYWRTdGFydGVkSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndXBsb2FkU3RhcnRlZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1sndXBsb2FkU3RhcnRlZEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1sndmFsaWRhdGlvbkVycm9ySGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndmFsaWRhdGlvbkVycm9yJywgdGhhdC5ldmVudEhhbmRsZXJzWyd2YWxpZGF0aW9uRXJyb3JIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHR9XG59XG4iXX0=