
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.fileupload';

import { __decorate } from 'tslib';
import { EventEmitter, Output, Input, ElementRef, Directive, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

class BaseElement {
    constructor(ref) {
        this.onCreate = new EventEmitter();
        this.onReady = new EventEmitter();
        this.onAttach = new EventEmitter();
        this.onDetach = new EventEmitter();
        const that = this;
        this.nativeElement = ref.nativeElement;
        that.nativeElement.onAttached = () => {
            that.onAttach.emit(that.nativeElement);
        };
        that.nativeElement.onDetached = () => {
            that.onDetach.emit(that.nativeElement);
        };
    }
    addEventListener(type, listener, options = false) {
        this.nativeElement.addEventListener(type, listener, options);
    }
    removeEventListener(type, listener, options = false) {
        this.nativeElement.removeEventListener(type, listener, options);
    }
    dispatchEvent(event) {
        return this.nativeElement.dispatchEvent(event);
    }
    blur() {
        this.nativeElement.blur();
    }
    click() {
        this.nativeElement.click();
    }
    focus(options) {
        this.nativeElement.focus(options);
    }
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    get locale() {
        return this.nativeElement ? this.nativeElement.locale : undefined;
    }
    set locale(value) {
        this.nativeElement ? this.nativeElement.locale = value : undefined;
    }
    /** @description Callback used to customize the format of the messages that are returned from the Localization Module. */
    get localizeFormatFunction() {
        return this.nativeElement ? this.nativeElement.localizeFormatFunction : undefined;
    }
    set localizeFormatFunction(value) {
        this.nativeElement ? this.nativeElement.localizeFormatFunction = value : undefined;
    }
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
    get messages() {
        return this.nativeElement ? this.nativeElement.messages : undefined;
    }
    set messages(value) {
        this.nativeElement ? this.nativeElement.messages = value : undefined;
    }
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    get rightToLeft() {
        return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
    }
    set rightToLeft(value) {
        this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
    }
    /** @description Determines the theme. Theme defines the look of the element */
    get theme() {
        return this.nativeElement ? this.nativeElement.theme : undefined;
    }
    set theme(value) {
        this.nativeElement ? this.nativeElement.theme = value : undefined;
    }
}
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
const Smart = window.Smart;

let FileUploadComponent = class FileUploadComponent extends BaseElement {
    constructor(ref) {
        super(ref);
        this.eventHandlers = [];
        /** @description This event is triggered when a file has been selected.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	filename, 	type, 	size, 	index)
        *   filename - The name of the selected file.
        *   type - The type of the selected file.
        *   size - The size of the selected file.
        *   index - The index of the selected file.
        */
        this.onFileSelected = new EventEmitter();
        /** @description This event is triggered when a file upload operation is canceled.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	filename, 	type, 	size, 	index)
        *   filename - The name of the canceled file.
        *   type - The type of the canceled file.
        *   size - The size of the canceled file.
        *   index - The index of the canceled file.
        */
        this.onUploadCanceled = new EventEmitter();
        /** @description This event is triggered when a file upload operation is completed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	filename, 	type, 	size, 	index, 	status, 	serverResponse)
        *   filename - The name of the canceled file.
        *   type - The type of the canceled file.
        *   size - The size of the canceled file.
        *   index - The index of the canceled file.
        *   status - The status of the uploaded file. Whether there was an error or success.
        *   serverResponse - The response of the remote server.
        */
        this.onUploadCompleted = new EventEmitter();
        /** @description This event is triggered when during the file upload process something happens and upload fails.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	filename, 	type, 	size, 	index, 	status)
        *   filename - The name of the canceled file.
        *   type - The type of the canceled file.
        *   size - The size of the canceled file.
        *   index - The index of the canceled file.
        *   status - The status of the uploaded file. Whether there was an error or success.
        */
        this.onUploadError = new EventEmitter();
        /** @description This event is triggered when a file upload operation is paused.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	filename, 	type, 	size, 	index)
        *   filename - The name of the paused file.
        *   type - The type of the paused file.
        *   size - The size of the paused file.
        *   index - The index of the paused file.
        */
        this.onUploadPaused = new EventEmitter();
        /** @description This event is triggered when a file upload operation is started.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	filename, 	type, 	size, 	index)
        *   filename - The name of the file that is being uploaded.
        *   type - The type of the file that is being uploaded.
        *   size - The size of the file that is being uploaded.
        *   index - The index of the file that is being uploaded.
        */
        this.onUploadStarted = new EventEmitter();
        /** @description This event is triggered if the validation of a user defined 'validateFile' callback fails.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	filename, 	type, 	size)
        *   filename - The name of the file which validation has failed.
        *   type - The type of the file which validation has failed.
        *   size - The size of the file which validation has failed.
        */
        this.onValidationError = new EventEmitter();
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('smart-file-upload');
        for (let propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    }
    /** @description Sets or gets the file types that can be submitted to the server via the element. This property corresponds to the 'accept' attribute of the hidden file input which is submitted to the URL specified by the uploadUrl property. */
    get accept() {
        return this.nativeElement ? this.nativeElement.accept : undefined;
    }
    set accept(value) {
        this.nativeElement ? this.nativeElement.accept = value : undefined;
    }
    /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
    get animation() {
        return this.nativeElement ? this.nativeElement.animation : undefined;
    }
    set animation(value) {
        this.nativeElement ? this.nativeElement.animation = value : undefined;
    }
    /** @description Appends the list with selected files to a new custom container specified by the user. If the value of the property is a string it must represent a valid id of an HTML element inside the DOM that will be used as the new container for the uploaded files list. */
    get appendTo() {
        return this.nativeElement ? this.nativeElement.appendTo : undefined;
    }
    set appendTo(value) {
        this.nativeElement ? this.nativeElement.appendTo = value : undefined;
    }
    /** @description Sets or gets whether files will be automatically uploaded after selection. */
    get autoUpload() {
        return this.nativeElement ? this.nativeElement.autoUpload : undefined;
    }
    set autoUpload(value) {
        this.nativeElement ? this.nativeElement.autoUpload = value : undefined;
    }
    /** @description Allows to upload a directory. Files in all subfolders will be uploaded also. This option is supported only in Firefox and Chrome. */
    get directory() {
        return this.nativeElement ? this.nativeElement.directory : undefined;
    }
    set directory(value) {
        this.nativeElement ? this.nativeElement.directory = value : undefined;
    }
    /** @description Enables or disables the element. */
    get disabled() {
        return this.nativeElement ? this.nativeElement.disabled : undefined;
    }
    set disabled(value) {
        this.nativeElement ? this.nativeElement.disabled = value : undefined;
    }
    /** @description Defines a custom container that will be used as the new drop zone for file uploads. The dropped files will be added in the fileUpload's list. If 'dropZone' property set to true, the default drop zone inside the element will be used instead. If set to certain id of an HTML element inside the DOM then it will be used as the drop zone. */
    get dropZone() {
        return this.nativeElement ? this.nativeElement.dropZone : undefined;
    }
    set dropZone(value) {
        this.nativeElement ? this.nativeElement.dropZone = value : undefined;
    }
    /** @description Hides the footer element and it's contents (Upload All, Pause All and Close All buttons). */
    get hideFooter() {
        return this.nativeElement ? this.nativeElement.hideFooter : undefined;
    }
    set hideFooter(value) {
        this.nativeElement ? this.nativeElement.hideFooter = value : undefined;
    }
    /** @description Applies a custom template to the file items that represent the uploaded files. */
    get itemTemplate() {
        return this.nativeElement ? this.nativeElement.itemTemplate : undefined;
    }
    set itemTemplate(value) {
        this.nativeElement ? this.nativeElement.itemTemplate = value : undefined;
    }
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    get locale() {
        return this.nativeElement ? this.nativeElement.locale : undefined;
    }
    set locale(value) {
        this.nativeElement ? this.nativeElement.locale = value : undefined;
    }
    /** @description Callback used to customize the format of the messages that are returned from the Localization Module. */
    get localizeFormatFunction() {
        return this.nativeElement ? this.nativeElement.localizeFormatFunction : undefined;
    }
    set localizeFormatFunction(value) {
        this.nativeElement ? this.nativeElement.localizeFormatFunction = value : undefined;
    }
    /** @description Sets the various text values used in the widget. Useful for localization. The localization object has the following fields: browse, pauseFile, cancelFile, uploadFile, pauseAll, cancelAll, uploadAll. It's recommended these messages to be set before element's initialization. */
    get messages() {
        return this.nativeElement ? this.nativeElement.messages : undefined;
    }
    set messages(value) {
        this.nativeElement ? this.nativeElement.messages = value : undefined;
    }
    /** @description Sets or gets whether multiple item uploads are allowed. */
    get multiple() {
        return this.nativeElement ? this.nativeElement.multiple : undefined;
    }
    set multiple(value) {
        this.nativeElement ? this.nativeElement.multiple = value : undefined;
    }
    /** @description Sets or gets the name attribute of the hidden file input which is submitted to the URL specified by the uploadUrl property. */
    get name() {
        return this.nativeElement ? this.nativeElement.name : undefined;
    }
    set name(value) {
        this.nativeElement ? this.nativeElement.name = value : undefined;
    }
    /** @description If the element is readonly, users cannot interact with it. */
    get readonly() {
        return this.nativeElement ? this.nativeElement.readonly : undefined;
    }
    set readonly(value) {
        this.nativeElement ? this.nativeElement.readonly = value : undefined;
    }
    /** @description Callback that can used to handle various server responses and error codes. */
    get responseHandler() {
        return this.nativeElement ? this.nativeElement.responseHandler : undefined;
    }
    set responseHandler(value) {
        this.nativeElement ? this.nativeElement.responseHandler = value : undefined;
    }
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    get rightToLeft() {
        return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
    }
    set rightToLeft(value) {
        this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
    }
    /** @description Callback function, used to change the headers of the file upload's XHR request. */
    get setHeaders() {
        return this.nativeElement ? this.nativeElement.setHeaders : undefined;
    }
    set setHeaders(value) {
        this.nativeElement ? this.nativeElement.setHeaders = value : undefined;
    }
    /** @description Displays a progress bar at the bottom of each uploaded item to show the progress of the uploading process. */
    get showProgress() {
        return this.nativeElement ? this.nativeElement.showProgress : undefined;
    }
    set showProgress(value) {
        this.nativeElement ? this.nativeElement.showProgress = value : undefined;
    }
    /** @description Determines the theme. Theme defines the look of the element */
    get theme() {
        return this.nativeElement ? this.nativeElement.theme : undefined;
    }
    set theme(value) {
        this.nativeElement ? this.nativeElement.theme = value : undefined;
    }
    /** @description Sets or gets the upload URL. This property corresponds to the upload form's action attribute. For example, the uploadUrl property can point to a PHP file, which handles the upload operation on the server-side. */
    get uploadUrl() {
        return this.nativeElement ? this.nativeElement.uploadUrl : undefined;
    }
    set uploadUrl(value) {
        this.nativeElement ? this.nativeElement.uploadUrl = value : undefined;
    }
    /** @description If is set to true, the element cannot be focused. */
    get unfocusable() {
        return this.nativeElement ? this.nativeElement.unfocusable : undefined;
    }
    set unfocusable(value) {
        this.nativeElement ? this.nativeElement.unfocusable = value : undefined;
    }
    /** @description Sets or gets the remove URL. This property corresponds to the form's action attribute. For example, the removeUrl property can point to a PHP file, which handles the remove operation on the server-side. */
    get removeUrl() {
        return this.nativeElement ? this.nativeElement.removeUrl : undefined;
    }
    set removeUrl(value) {
        this.nativeElement ? this.nativeElement.removeUrl = value : undefined;
    }
    /** @description Gets the file upload value. */
    get value() {
        return this.nativeElement ? this.nativeElement.value : undefined;
    }
    set value(value) {
        this.nativeElement ? this.nativeElement.value = value : undefined;
    }
    /** @description Callback used to validate the files immediatelly after their selection. Retuns a boolean value. If the returned value is false, the file is removed from list and a 'validationError is fired. */
    get validateFile() {
        return this.nativeElement ? this.nativeElement.validateFile : undefined;
    }
    set validateFile(value) {
        this.nativeElement ? this.nativeElement.validateFile = value : undefined;
    }
    /** @description Opens a popup to browse for a file.
    */
    browse() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.browse();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.browse();
            });
        }
    }
    /** @description Cancels all selected files. The files are removed from the list and their uploading is prevented.
    */
    cancelAll() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.cancelAll();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.cancelAll();
            });
        }
    }
    /** @description Cancels a selected file. The file is removed from the file list and it's uploading is prevented.
    * @param {number} index. Index of the file which will be canceled.
    */
    cancelFile(index) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.cancelFile(index);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.cancelFile(index);
            });
        }
    }
    /** @description Pauses the uploading of all files. File upload is prevented but the files remain in the file list.
    */
    pauseAll() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.pauseAll();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.pauseAll();
            });
        }
    }
    /** @description Pauses upload of a file with particular index. File upload is prevented but file ramains in the file list.
    * @param {number} id. Index of the file which will be paused.
    */
    pauseFile(id) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.pauseFile(id);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.pauseFile(id);
            });
        }
    }
    /** @description Uploads all selected files.
    */
    uploadAll() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.uploadAll();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.uploadAll();
            });
        }
    }
    /** @description Uploads a selected file.
    * @param {number} id. Index of the file which will be uploaded.
    */
    uploadFile(id) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.uploadFile(id);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.uploadFile(id);
            });
        }
    }
    get isRendered() {
        return this.nativeElement ? this.nativeElement.isRendered : false;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        const that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(() => { that.onReady.emit(that.nativeElement); });
        this.listen();
    }
    ngOnDestroy() {
        this.unlisten();
    }
    ngOnChanges(changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (const propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    }
    /** @description Add event listeners. */
    listen() {
        const that = this;
        that.eventHandlers['fileSelectedHandler'] = (event) => { that.onFileSelected.emit(event); };
        that.nativeElement.addEventListener('fileSelected', that.eventHandlers['fileSelectedHandler']);
        that.eventHandlers['uploadCanceledHandler'] = (event) => { that.onUploadCanceled.emit(event); };
        that.nativeElement.addEventListener('uploadCanceled', that.eventHandlers['uploadCanceledHandler']);
        that.eventHandlers['uploadCompletedHandler'] = (event) => { that.onUploadCompleted.emit(event); };
        that.nativeElement.addEventListener('uploadCompleted', that.eventHandlers['uploadCompletedHandler']);
        that.eventHandlers['uploadErrorHandler'] = (event) => { that.onUploadError.emit(event); };
        that.nativeElement.addEventListener('uploadError', that.eventHandlers['uploadErrorHandler']);
        that.eventHandlers['uploadPausedHandler'] = (event) => { that.onUploadPaused.emit(event); };
        that.nativeElement.addEventListener('uploadPaused', that.eventHandlers['uploadPausedHandler']);
        that.eventHandlers['uploadStartedHandler'] = (event) => { that.onUploadStarted.emit(event); };
        that.nativeElement.addEventListener('uploadStarted', that.eventHandlers['uploadStartedHandler']);
        that.eventHandlers['validationErrorHandler'] = (event) => { that.onValidationError.emit(event); };
        that.nativeElement.addEventListener('validationError', that.eventHandlers['validationErrorHandler']);
    }
    /** @description Remove event listeners. */
    unlisten() {
        const that = this;
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
    }
};
FileUploadComponent.ctorParameters = () => [
    { type: ElementRef }
];
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

let FileUploadModule = class FileUploadModule {
};
FileUploadModule = __decorate([
    NgModule({
        declarations: [FileUploadComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        exports: [FileUploadComponent]
    })
], FileUploadModule);

/**
 * Generated bundle index. Do not edit.
 */

export { FileUploadComponent, FileUploadModule, Smart, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-fileupload.js.map
