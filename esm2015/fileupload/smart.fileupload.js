import * as tslib_1 from "tslib";
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Smart } from './smart.element';
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
        *  @param event. The custom event. 	Custom event was created with: event.detail(	filename, 	type, 	size, 	index, 	status)
        *   filename - The name of the canceled file.
        *   type - The type of the canceled file.
        *   size - The size of the canceled file.
        *   index - The index of the canceled file.
        *   status - The status of the uploaded file. Whether there was an error or success.
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
        selector: 'smart-file-upload, [smart-file-upload]'
    })
], FileUploadComponent);
export { FileUploadComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQuZmlsZXVwbG9hZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NtYXJ0LXdlYmNvbXBvbmVudHMtYW5ndWxhci9maWxldXBsb2FkLyIsInNvdXJjZXMiOlsic21hcnQuZmlsZXVwbG9hZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUosT0FBTyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVyRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFReEMsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBb0IsU0FBUSxXQUFXO0lBQ25ELFlBQVksR0FBMkI7UUFDdEMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBSUosa0JBQWEsR0FBVSxFQUFFLENBQUM7UUE0TmxDOzs7Ozs7VUFNRTtRQUNRLG1CQUFjLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFekU7Ozs7OztVQU1FO1FBQ1EscUJBQWdCLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFM0U7Ozs7Ozs7VUFPRTtRQUNRLHNCQUFpQixHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTVFOzs7Ozs7O1VBT0U7UUFDUSxrQkFBYSxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXhFOzs7Ozs7VUFNRTtRQUNRLG1CQUFjLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFekU7Ozs7OztVQU1FO1FBQ1Esb0JBQWUsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUxRTs7Ozs7VUFLRTtRQUNRLHNCQUFpQixHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBN1IzRSxJ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R1A7QUFPRDtJQURDLEtBQUssRUFBRTtxREFHUDtBQU9EO0lBREMsS0FBSyxFQUFFO3VEQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7aURBR1A7QUFPRDtJQURDLEtBQUssRUFBRTtpRUFHUDtBQU9EO0lBREMsS0FBSyxFQUFFO21EQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7bURBR1A7QUFPRDtJQURDLEtBQUssRUFBRTsrQ0FHUDtBQU9EO0lBREMsS0FBSyxFQUFFO21EQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7MERBR1A7QUFPRDtJQURDLEtBQUssRUFBRTtzREFHUDtBQU9EO0lBREMsS0FBSyxFQUFFO3FEQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7dURBR1A7QUFPRDtJQURDLEtBQUssRUFBRTtnREFHUDtBQU9EO0lBREMsS0FBSyxFQUFFO29EQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7c0RBR1A7QUFPRDtJQURDLEtBQUssRUFBRTt1REFHUDtBQVlTO0lBQVQsTUFBTSxFQUFFOzJEQUFnRTtBQVMvRDtJQUFULE1BQU0sRUFBRTs2REFBa0U7QUFVakU7SUFBVCxNQUFNLEVBQUU7OERBQW1FO0FBVWxFO0lBQVQsTUFBTSxFQUFFOzBEQUErRDtBQVM5RDtJQUFULE1BQU0sRUFBRTsyREFBZ0U7QUFTL0Q7SUFBVCxNQUFNLEVBQUU7NERBQWlFO0FBUWhFO0lBQVQsTUFBTSxFQUFFOzhEQUFtRTtBQWhTaEUsbUJBQW1CO0lBSi9CLFNBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSx3Q0FBd0M7S0FDbEQsQ0FBQztHQUVXLG1CQUFtQixDQWtlL0I7U0FsZVksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmlsZVVwbG9hZCB9IGZyb20gJy4vLi4vaW5kZXgnO1xuaW1wb3J0IHsgQW5pbWF0aW9uLCBFbGVtZW50UmVuZGVyTW9kZX0gZnJvbSAnLi8uLi9pbmRleCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIERpcmVjdGl2ZSwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIFNpbXBsZUNoYW5nZXMsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXNlRWxlbWVudCwgU21hcnQgfSBmcm9tICcuL3NtYXJ0LmVsZW1lbnQnO1xuZXhwb3J0IHsgQW5pbWF0aW9uLCBFbGVtZW50UmVuZGVyTW9kZX0gZnJvbSAnLi8uLi9pbmRleCc7XG5leHBvcnQgeyBTbWFydCB9IGZyb20gJy4vc21hcnQuZWxlbWVudCc7XG5leHBvcnQgeyBGaWxlVXBsb2FkIH0gZnJvbSAnLi8uLi9pbmRleCc7XG5cblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnc21hcnQtZmlsZS11cGxvYWQsIFtzbWFydC1maWxlLXVwbG9hZF0nXG59KVxuXG5leHBvcnQgY2xhc3MgRmlsZVVwbG9hZENvbXBvbmVudCBleHRlbmRzIEJhc2VFbGVtZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG5cdGNvbnN0cnVjdG9yKHJlZjogRWxlbWVudFJlZjxGaWxlVXBsb2FkPikge1xuXHRcdHN1cGVyKHJlZik7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID0gcmVmLm5hdGl2ZUVsZW1lbnQgYXMgRmlsZVVwbG9hZDtcblx0fVxuXG5cdHByaXZhdGUgZXZlbnRIYW5kbGVyczogYW55W10gPSBbXTtcblxuXHRwdWJsaWMgbmF0aXZlRWxlbWVudDogRmlsZVVwbG9hZDtcblx0LyoqIEBkZXNjcmlwdGlvbiBDcmVhdGVzIHRoZSBjb21wb25lbnQgb24gZGVtYW5kLlxuXHQgKiBAcGFyYW0gcHJvcGVydGllcyBBbiBvcHRpb25hbCBvYmplY3Qgb2YgcHJvcGVydGllcywgd2hpY2ggd2lsbCBiZSBhZGRlZCB0byB0aGUgdGVtcGxhdGUgYmluZGVkIG9uZXMuXG5cdCAqL1xuXHRwdWJsaWMgY3JlYXRlQ29tcG9uZW50KHByb3BlcnRpZXMgPSB7fSk6IGFueSB7XG4gICAgXHR0aGlzLm5hdGl2ZUVsZW1lbnQgPSA8RmlsZVVwbG9hZD5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzbWFydC1maWxlLXVwbG9hZCcpO1xuXHRcdGZvciAobGV0IHByb3BlcnR5TmFtZSBpbiBwcm9wZXJ0aWVzKSB7IFxuIFx0XHRcdHRoaXMubmF0aXZlRWxlbWVudFtwcm9wZXJ0eU5hbWVdID0gcHJvcGVydGllc1twcm9wZXJ0eU5hbWVdO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50O1xuXHR9XG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSBmaWxlIHR5cGVzIHRoYXQgY2FuIGJlIHN1Ym1pdHRlZCB0byB0aGUgc2VydmVyIHZpYSB0aGUgZWxlbWVudC4gVGhpcyBwcm9wZXJ0eSBjb3JyZXNwb25kcyB0byB0aGUgJ2FjY2VwdCcgYXR0cmlidXRlIG9mIHRoZSBoaWRkZW4gZmlsZSBpbnB1dCB3aGljaCBpcyBzdWJtaXR0ZWQgdG8gdGhlIFVSTCBzcGVjaWZpZWQgYnkgdGhlIHVwbG9hZFVybCBwcm9wZXJ0eS4gKi9cblx0QElucHV0KClcblx0Z2V0IGFjY2VwdCgpOiBzdHJpbmcgfCBudWxsIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmFjY2VwdCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYWNjZXB0KHZhbHVlOiBzdHJpbmcgfCBudWxsKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmFjY2VwdCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIGFuaW1hdGlvbiBtb2RlLiBBbmltYXRpb24gaXMgZGlzYWJsZWQgd2hlbiB0aGUgcHJvcGVydHkgaXMgc2V0IHRvICdub25lJyAqL1xuXHRASW5wdXQoKVxuXHRnZXQgYW5pbWF0aW9uKCk6IEFuaW1hdGlvbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hbmltYXRpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGFuaW1hdGlvbih2YWx1ZTogQW5pbWF0aW9uKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmFuaW1hdGlvbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBcHBlbmRzIHRoZSBsaXN0IHdpdGggc2VsZWN0ZWQgZmlsZXMgdG8gYSBuZXcgY3VzdG9tIGNvbnRhaW5lciBzcGVjaWZpZWQgYnkgdGhlIHVzZXIuIElmIHRoZSB2YWx1ZSBvZiB0aGUgcHJvcGVydHkgaXMgYSBzdHJpbmcgaXQgbXVzdCByZXByZXNlbnQgYSB2YWxpZCBpZCBvZiBhbiBIVE1MIGVsZW1lbnQgaW5zaWRlIHRoZSBET00gdGhhdCB3aWxsIGJlIHVzZWQgYXMgdGhlIG5ldyBjb250YWluZXIgZm9yIHRoZSB1cGxvYWRlZCBmaWxlcyBsaXN0LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgYXBwZW5kVG8oKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmFwcGVuZFRvIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBhcHBlbmRUbyh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmFwcGVuZFRvID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB3aGV0aGVyIGZpbGVzIHdpbGwgYmUgYXV0b21hdGljYWxseSB1cGxvYWRlZCBhZnRlciBzZWxlY3Rpb24uICovXG5cdEBJbnB1dCgpXG5cdGdldCBhdXRvVXBsb2FkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYXV0b1VwbG9hZCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYXV0b1VwbG9hZCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hdXRvVXBsb2FkID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEFsbG93cyB0byB1cGxvYWQgYSBkaXJlY3RvcnkuIEZpbGVzIGluIGFsbCBzdWJmb2xkZXJzIHdpbGwgYmUgdXBsb2FkZWQgYWxzby4gVGhpcyBvcHRpb24gaXMgc3VwcG9ydGVkIG9ubHkgaW4gRmlyZWZveCBhbmQgQ2hyb21lLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGlyZWN0b3J5KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlyZWN0b3J5IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkaXJlY3RvcnkodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlyZWN0b3J5ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEVuYWJsZXMgb3IgZGlzYWJsZXMgdGhlIGVsZW1lbnQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVkIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlZCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZWZpbmVzIGEgY3VzdG9tIGNvbnRhaW5lciB0aGF0IHdpbGwgYmUgdXNlZCBhcyB0aGUgbmV3IGRyb3Agem9uZSBmb3IgZmlsZSB1cGxvYWRzLiBUaGUgZHJvcHBlZCBmaWxlcyB3aWxsIGJlIGFkZGVkIGluIHRoZSBmaWxlVXBsb2FkJ3MgbGlzdC4gSWYgJ2Ryb3Bab25lJyBwcm9wZXJ0eSBzZXQgdG8gdHJ1ZSwgdGhlIGRlZmF1bHQgZHJvcCB6b25lIGluc2lkZSB0aGUgZWxlbWVudCB3aWxsIGJlIHVzZWQgaW5zdGVhZC4gSWYgc2V0IHRvIGNlcnRhaW4gaWQgb2YgYW4gSFRNTCBlbGVtZW50IGluc2lkZSB0aGUgRE9NIHRoZW4gaXQgd2lsbCBiZSB1c2VkIGFzIHRoZSBkcm9wIHpvbmUuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkcm9wWm9uZSgpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZHJvcFpvbmUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRyb3Bab25lKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZHJvcFpvbmUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSGlkZXMgdGhlIGZvb3RlciBlbGVtZW50IGFuZCBpdCdzIGNvbnRlbnRzIChVcGxvYWQgQWxsLCBQYXVzZSBBbGwgYW5kIENsb3NlIEFsbCBidXR0b25zKS4gKi9cblx0QElucHV0KClcblx0Z2V0IGhpZGVGb290ZXIoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oaWRlRm9vdGVyIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBoaWRlRm9vdGVyKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmhpZGVGb290ZXIgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQXBwbGllcyBhIGN1c3RvbSB0ZW1wbGF0ZSB0byB0aGUgZmlsZSBpdGVtcyB0aGF0IHJlcHJlc2VudCB0aGUgdXBsb2FkZWQgZmlsZXMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBpdGVtVGVtcGxhdGUoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lml0ZW1UZW1wbGF0ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgaXRlbVRlbXBsYXRlKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaXRlbVRlbXBsYXRlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgbGFuZ3VhZ2UuIFVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCB0aGUgcHJvcGVydHkgbWVzc2FnZXMuICAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbG9jYWxlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sb2NhbGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGxvY2FsZSh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxvY2FsZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDYWxsYmFjayB1c2VkIHRvIGN1c3RvbWl6ZSB0aGUgZm9ybWF0IG9mIHRoZSBtZXNzYWdlcyB0aGF0IGFyZSByZXR1cm5lZCBmcm9tIHRoZSBMb2NhbGl6YXRpb24gTW9kdWxlLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbG9jYWxpemVGb3JtYXRGdW5jdGlvbigpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubG9jYWxpemVGb3JtYXRGdW5jdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbG9jYWxpemVGb3JtYXRGdW5jdGlvbih2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxvY2FsaXplRm9ybWF0RnVuY3Rpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyB0aGUgdmFyaW91cyB0ZXh0IHZhbHVlcyB1c2VkIGluIHRoZSB3aWRnZXQuIFVzZWZ1bCBmb3IgbG9jYWxpemF0aW9uLiBUaGUgbG9jYWxpemF0aW9uIG9iamVjdCBoYXMgdGhlIGZvbGxvd2luZyBmaWVsZHM6IGJyb3dzZSwgcGF1c2VGaWxlLCBjYW5jZWxGaWxlLCB1cGxvYWRGaWxlLCBwYXVzZUFsbCwgY2FuY2VsQWxsLCB1cGxvYWRBbGwuIEl0J3MgcmVjb21tZW5kZWQgdGhlc2UgbWVzc2FnZXMgdG8gYmUgc2V0IGJlZm9yZSBlbGVtZW50J3MgaW5pdGlhbGl6YXRpb24uICovXG5cdEBJbnB1dCgpXG5cdGdldCBtZXNzYWdlcygpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubWVzc2FnZXMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG1lc3NhZ2VzKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubWVzc2FnZXMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHdoZXRoZXIgbXVsdGlwbGUgaXRlbSB1cGxvYWRzIGFyZSBhbGxvd2VkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbXVsdGlwbGUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5tdWx0aXBsZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbXVsdGlwbGUodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubXVsdGlwbGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSBuYW1lIGF0dHJpYnV0ZSBvZiB0aGUgaGlkZGVuIGZpbGUgaW5wdXQgd2hpY2ggaXMgc3VibWl0dGVkIHRvIHRoZSBVUkwgc3BlY2lmaWVkIGJ5IHRoZSB1cGxvYWRVcmwgcHJvcGVydHkuICovXG5cdEBJbnB1dCgpXG5cdGdldCBuYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5uYW1lIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubmFtZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBJZiB0aGUgZWxlbWVudCBpcyByZWFkb25seSwgdXNlcnMgY2Fubm90IGludGVyYWN0IHdpdGggaXQuICovXG5cdEBJbnB1dCgpXG5cdGdldCByZWFkb25seSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlYWRvbmx5IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCByZWFkb25seSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZWFkb25seSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDYWxsYmFjayB0aGF0IGNhbiB1c2VkIHRvIGhhbmRsZSB2YXJpb3VzIHNlcnZlciByZXNwb25zZXMgYW5kIGVycm9yIGNvZGVzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcmVzcG9uc2VIYW5kbGVyKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZXNwb25zZUhhbmRsZXIgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHJlc3BvbnNlSGFuZGxlcih2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlc3BvbnNlSGFuZGxlciA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIHZhbHVlIGluZGljYXRpbmcgd2hldGhlciB0aGUgZWxlbWVudCBpcyBhbGlnbmVkIHRvIHN1cHBvcnQgbG9jYWxlcyB1c2luZyByaWdodC10by1sZWZ0IGZvbnRzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcmlnaHRUb0xlZnQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yaWdodFRvTGVmdCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcmlnaHRUb0xlZnQodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmlnaHRUb0xlZnQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ2FsbGJhY2sgZnVuY3Rpb24sIHVzZWQgdG8gY2hhbmdlIHRoZSBoZWFkZXJzIG9mIHRoZSBmaWxlIHVwbG9hZCdzIFhIUiByZXF1ZXN0LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc2V0SGVhZGVycygpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2V0SGVhZGVycyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc2V0SGVhZGVycyh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNldEhlYWRlcnMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGlzcGxheXMgYSBwcm9ncmVzcyBiYXIgYXQgdGhlIGJvdHRvbSBvZiBlYWNoIHVwbG9hZGVkIGl0ZW0gdG8gc2hvdyB0aGUgcHJvZ3Jlc3Mgb2YgdGhlIHVwbG9hZGluZyBwcm9jZXNzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc2hvd1Byb2dyZXNzKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2hvd1Byb2dyZXNzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzaG93UHJvZ3Jlc3ModmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2hvd1Byb2dyZXNzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIHRoZW1lLiBUaGVtZSBkZWZpbmVzIHRoZSBsb29rIG9mIHRoZSBlbGVtZW50ICovXG5cdEBJbnB1dCgpXG5cdGdldCB0aGVtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGhlbWUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRoZW1lKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGhlbWUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSB1cGxvYWQgVVJMLiBUaGlzIHByb3BlcnR5IGNvcnJlc3BvbmRzIHRvIHRoZSB1cGxvYWQgZm9ybSdzIGFjdGlvbiBhdHRyaWJ1dGUuIEZvciBleGFtcGxlLCB0aGUgdXBsb2FkVXJsIHByb3BlcnR5IGNhbiBwb2ludCB0byBhIFBIUCBmaWxlLCB3aGljaCBoYW5kbGVzIHRoZSB1cGxvYWQgb3BlcmF0aW9uIG9uIHRoZSBzZXJ2ZXItc2lkZS4gKi9cblx0QElucHV0KClcblx0Z2V0IHVwbG9hZFVybCgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudXBsb2FkVXJsIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB1cGxvYWRVcmwodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC51cGxvYWRVcmwgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSWYgaXMgc2V0IHRvIHRydWUsIHRoZSBlbGVtZW50IGNhbm5vdCBiZSBmb2N1c2VkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdW5mb2N1c2FibGUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC51bmZvY3VzYWJsZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdW5mb2N1c2FibGUodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudW5mb2N1c2FibGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ2FsbGJhY2sgdXNlZCB0byB2YWxpZGF0ZSB0aGUgZmlsZXMgaW1tZWRpYXRlbGx5IGFmdGVyIHRoZWlyIHNlbGVjdGlvbi4gUmV0dW5zIGEgYm9vbGVhbiB2YWx1ZS4gSWYgdGhlIHJldHVybmVkIHZhbHVlIGlzIGZhbHNlLCB0aGUgZmlsZSBpcyByZW1vdmVkIGZyb20gbGlzdCBhbmQgYSAndmFsaWRhdGlvbkVycm9yIGlzIGZpcmVkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdmFsaWRhdGVGaWxlKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC52YWxpZGF0ZUZpbGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHZhbGlkYXRlRmlsZSh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnZhbGlkYXRlRmlsZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgZmlsZSBoYXMgYmVlbiBzZWxlY3RlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRmaWxlbmFtZSwgXHR0eXBlLCBcdHNpemUsIFx0aW5kZXgpXG5cdCogICBmaWxlbmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBzZWxlY3RlZCBmaWxlLlxuXHQqICAgdHlwZSAtIFRoZSB0eXBlIG9mIHRoZSBzZWxlY3RlZCBmaWxlLlxuXHQqICAgc2l6ZSAtIFRoZSBzaXplIG9mIHRoZSBzZWxlY3RlZCBmaWxlLlxuXHQqICAgaW5kZXggLSBUaGUgaW5kZXggb2YgdGhlIHNlbGVjdGVkIGZpbGUuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkZpbGVTZWxlY3RlZDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSBmaWxlIHVwbG9hZCBvcGVyYXRpb24gaXMgY2FuY2VsZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0ZmlsZW5hbWUsIFx0dHlwZSwgXHRzaXplLCBcdGluZGV4KVxuXHQqICAgZmlsZW5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgY2FuY2VsZWQgZmlsZS5cblx0KiAgIHR5cGUgLSBUaGUgdHlwZSBvZiB0aGUgY2FuY2VsZWQgZmlsZS5cblx0KiAgIHNpemUgLSBUaGUgc2l6ZSBvZiB0aGUgY2FuY2VsZWQgZmlsZS5cblx0KiAgIGluZGV4IC0gVGhlIGluZGV4IG9mIHRoZSBjYW5jZWxlZCBmaWxlLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25VcGxvYWRDYW5jZWxlZDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSBmaWxlIHVwbG9hZCBvcGVyYXRpb24gaXMgY29tcGxldGVkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGZpbGVuYW1lLCBcdHR5cGUsIFx0c2l6ZSwgXHRpbmRleCwgXHRzdGF0dXMpXG5cdCogICBmaWxlbmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBjYW5jZWxlZCBmaWxlLlxuXHQqICAgdHlwZSAtIFRoZSB0eXBlIG9mIHRoZSBjYW5jZWxlZCBmaWxlLlxuXHQqICAgc2l6ZSAtIFRoZSBzaXplIG9mIHRoZSBjYW5jZWxlZCBmaWxlLlxuXHQqICAgaW5kZXggLSBUaGUgaW5kZXggb2YgdGhlIGNhbmNlbGVkIGZpbGUuXG5cdCogICBzdGF0dXMgLSBUaGUgc3RhdHVzIG9mIHRoZSB1cGxvYWRlZCBmaWxlLiBXaGV0aGVyIHRoZXJlIHdhcyBhbiBlcnJvciBvciBzdWNjZXNzLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25VcGxvYWRDb21wbGV0ZWQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGR1cmluZyB0aGUgZmlsZSB1cGxvYWQgcHJvY2VzcyBzb21ldGhpbmcgaGFwcGVucyBhbmQgdXBsb2FkIGZhaWxzLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGZpbGVuYW1lLCBcdHR5cGUsIFx0c2l6ZSwgXHRpbmRleCwgXHRzdGF0dXMpXG5cdCogICBmaWxlbmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBjYW5jZWxlZCBmaWxlLlxuXHQqICAgdHlwZSAtIFRoZSB0eXBlIG9mIHRoZSBjYW5jZWxlZCBmaWxlLlxuXHQqICAgc2l6ZSAtIFRoZSBzaXplIG9mIHRoZSBjYW5jZWxlZCBmaWxlLlxuXHQqICAgaW5kZXggLSBUaGUgaW5kZXggb2YgdGhlIGNhbmNlbGVkIGZpbGUuXG5cdCogICBzdGF0dXMgLSBUaGUgc3RhdHVzIG9mIHRoZSB1cGxvYWRlZCBmaWxlLiBXaGV0aGVyIHRoZXJlIHdhcyBhbiBlcnJvciBvciBzdWNjZXNzLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25VcGxvYWRFcnJvcjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSBmaWxlIHVwbG9hZCBvcGVyYXRpb24gaXMgcGF1c2VkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGZpbGVuYW1lLCBcdHR5cGUsIFx0c2l6ZSwgXHRpbmRleClcblx0KiAgIGZpbGVuYW1lIC0gVGhlIG5hbWUgb2YgdGhlIHBhdXNlZCBmaWxlLlxuXHQqICAgdHlwZSAtIFRoZSB0eXBlIG9mIHRoZSBwYXVzZWQgZmlsZS5cblx0KiAgIHNpemUgLSBUaGUgc2l6ZSBvZiB0aGUgcGF1c2VkIGZpbGUuXG5cdCogICBpbmRleCAtIFRoZSBpbmRleCBvZiB0aGUgcGF1c2VkIGZpbGUuXG5cdCovXG5cdEBPdXRwdXQoKSBvblVwbG9hZFBhdXNlZDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSBmaWxlIHVwbG9hZCBvcGVyYXRpb24gaXMgc3RhcnRlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRmaWxlbmFtZSwgXHR0eXBlLCBcdHNpemUsIFx0aW5kZXgpXG5cdCogICBmaWxlbmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBmaWxlIHRoYXQgaXMgYmVpbmcgdXBsb2FkZWQuXG5cdCogICB0eXBlIC0gVGhlIHR5cGUgb2YgdGhlIGZpbGUgdGhhdCBpcyBiZWluZyB1cGxvYWRlZC5cblx0KiAgIHNpemUgLSBUaGUgc2l6ZSBvZiB0aGUgZmlsZSB0aGF0IGlzIGJlaW5nIHVwbG9hZGVkLlxuXHQqICAgaW5kZXggLSBUaGUgaW5kZXggb2YgdGhlIGZpbGUgdGhhdCBpcyBiZWluZyB1cGxvYWRlZC5cblx0Ki9cblx0QE91dHB1dCgpIG9uVXBsb2FkU3RhcnRlZDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIGlmIHRoZSB2YWxpZGF0aW9uIG9mIGEgdXNlciBkZWZpbmVkICd2YWxpZGF0ZUZpbGUnIGNhbGxiYWNrIGZhaWxzLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGZpbGVuYW1lLCBcdHR5cGUsIFx0c2l6ZSlcblx0KiAgIGZpbGVuYW1lIC0gVGhlIG5hbWUgb2YgdGhlIGZpbGUgd2hpY2ggdmFsaWRhdGlvbiBoYXMgZmFpbGVkLlxuXHQqICAgdHlwZSAtIFRoZSB0eXBlIG9mIHRoZSBmaWxlIHdoaWNoIHZhbGlkYXRpb24gaGFzIGZhaWxlZC5cblx0KiAgIHNpemUgLSBUaGUgc2l6ZSBvZiB0aGUgZmlsZSB3aGljaCB2YWxpZGF0aW9uIGhhcyBmYWlsZWQuXG5cdCovXG5cdEBPdXRwdXQoKSBvblZhbGlkYXRpb25FcnJvcjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIE9wZW5zIGEgcG9wdXAgdG8gYnJvd3NlIGZvciBhIGZpbGUuIFxuXHQqL1xuICAgIHB1YmxpYyBicm93c2UoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmJyb3dzZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmJyb3dzZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDYW5jZWxzIGFsbCBzZWxlY3RlZCBmaWxlcy4gVGhlIGZpbGVzIGFyZSByZW1vdmVkIGZyb20gdGhlIGxpc3QgYW5kIHRoZWlyIHVwbG9hZGluZyBpcyBwcmV2ZW50ZWQuIFxuXHQqL1xuICAgIHB1YmxpYyBjYW5jZWxBbGwoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNhbmNlbEFsbCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNhbmNlbEFsbCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDYW5jZWxzIGEgc2VsZWN0ZWQgZmlsZS4gVGhlIGZpbGUgaXMgcmVtb3ZlZCBmcm9tIHRoZSBmaWxlIGxpc3QgYW5kIGl0J3MgdXBsb2FkaW5nIGlzIHByZXZlbnRlZC4gXG5cdCogQHBhcmFtIHtudW1iZXJ9IGluZGV4LiBJbmRleCBvZiB0aGUgZmlsZSB3aGljaCB3aWxsIGJlIGNhbmNlbGVkLlxuXHQqL1xuICAgIHB1YmxpYyBjYW5jZWxGaWxlKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2FuY2VsRmlsZShpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2FuY2VsRmlsZShpbmRleCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFBhdXNlcyB0aGUgdXBsb2FkaW5nIG9mIGFsbCBmaWxlcy4gRmlsZSB1cGxvYWQgaXMgcHJldmVudGVkIGJ1dCB0aGUgZmlsZXMgcmVtYWluIGluIHRoZSBmaWxlIGxpc3QuIFxuXHQqL1xuICAgIHB1YmxpYyBwYXVzZUFsbCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucGF1c2VBbGwoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5wYXVzZUFsbCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBQYXVzZXMgdXBsb2FkIG9mIGEgZmlsZSB3aXRoIHBhcnRpY3VsYXIgaW5kZXguIEZpbGUgdXBsb2FkIGlzIHByZXZlbnRlZCBidXQgZmlsZSByYW1haW5zIGluIHRoZSBmaWxlIGxpc3QuIFxuXHQqIEBwYXJhbSB7bnVtYmVyfSBpZC4gSW5kZXggb2YgdGhlIGZpbGUgd2hpY2ggd2lsbCBiZSBwYXVzZWQuXG5cdCovXG4gICAgcHVibGljIHBhdXNlRmlsZShpZDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnBhdXNlRmlsZShpZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucGF1c2VGaWxlKGlkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVXBsb2FkcyBhbGwgc2VsZWN0ZWQgZmlsZXMuIFxuXHQqL1xuICAgIHB1YmxpYyB1cGxvYWRBbGwoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnVwbG9hZEFsbCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnVwbG9hZEFsbCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBVcGxvYWRzIGEgc2VsZWN0ZWQgZmlsZS4gXG5cdCogQHBhcmFtIHtudW1iZXJ9IGlkLiBJbmRleCBvZiB0aGUgZmlsZSB3aGljaCB3aWxsIGJlIHVwbG9hZGVkLlxuXHQqL1xuICAgIHB1YmxpYyB1cGxvYWRGaWxlKGlkOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQudXBsb2FkRmlsZShpZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQudXBsb2FkRmlsZShpZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cdGdldCBpc1JlbmRlcmVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCA6IGZhbHNlO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXG4gICAgICB0aGF0Lm9uQ3JlYXRlLmVtaXQodGhhdC5uYXRpdmVFbGVtZW50KTtcblxuXHRcdFNtYXJ0LlJlbmRlcigpO1xuXG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7IHRoYXQub25SZWFkeS5lbWl0KHRoYXQubmF0aXZlRWxlbWVudCk7IH0pO1xuXHRcdHRoaXMubGlzdGVuKCk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLnVubGlzdGVuKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdFx0aWYgKHRoaXMubmF0aXZlRWxlbWVudCAmJiB0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuXHRcdFx0Zm9yIChjb25zdCBwcm9wTmFtZSBpbiBjaGFuZ2VzKSB7XG5cdFx0XHRcdGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuXHRcdFx0XHRcdHRoaXMubmF0aXZlRWxlbWVudFtwcm9wTmFtZV0gPSBjaGFuZ2VzW3Byb3BOYW1lXS5jdXJyZW50VmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEFkZCBldmVudCBsaXN0ZW5lcnMuICovXG5cdHByaXZhdGUgbGlzdGVuKCk6IHZvaWQge1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2ZpbGVTZWxlY3RlZEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkZpbGVTZWxlY3RlZC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdmaWxlU2VsZWN0ZWQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2ZpbGVTZWxlY3RlZEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3VwbG9hZENhbmNlbGVkSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uVXBsb2FkQ2FuY2VsZWQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndXBsb2FkQ2FuY2VsZWQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3VwbG9hZENhbmNlbGVkSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1sndXBsb2FkQ29tcGxldGVkSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uVXBsb2FkQ29tcGxldGVkLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3VwbG9hZENvbXBsZXRlZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1sndXBsb2FkQ29tcGxldGVkSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1sndXBsb2FkRXJyb3JIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25VcGxvYWRFcnJvci5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd1cGxvYWRFcnJvcicsIHRoYXQuZXZlbnRIYW5kbGVyc1sndXBsb2FkRXJyb3JIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWyd1cGxvYWRQYXVzZWRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25VcGxvYWRQYXVzZWQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndXBsb2FkUGF1c2VkJywgdGhhdC5ldmVudEhhbmRsZXJzWyd1cGxvYWRQYXVzZWRIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWyd1cGxvYWRTdGFydGVkSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uVXBsb2FkU3RhcnRlZC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd1cGxvYWRTdGFydGVkJywgdGhhdC5ldmVudEhhbmRsZXJzWyd1cGxvYWRTdGFydGVkSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1sndmFsaWRhdGlvbkVycm9ySGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uVmFsaWRhdGlvbkVycm9yLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3ZhbGlkYXRpb25FcnJvcicsIHRoYXQuZXZlbnRIYW5kbGVyc1sndmFsaWRhdGlvbkVycm9ySGFuZGxlciddKTtcblxuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZW1vdmUgZXZlbnQgbGlzdGVuZXJzLiAqL1xuXHRwcml2YXRlIHVubGlzdGVuKCk6IHZvaWQge1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydmaWxlU2VsZWN0ZWRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdmaWxlU2VsZWN0ZWQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2ZpbGVTZWxlY3RlZEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1sndXBsb2FkQ2FuY2VsZWRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd1cGxvYWRDYW5jZWxlZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1sndXBsb2FkQ2FuY2VsZWRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3VwbG9hZENvbXBsZXRlZEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3VwbG9hZENvbXBsZXRlZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1sndXBsb2FkQ29tcGxldGVkSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWyd1cGxvYWRFcnJvckhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3VwbG9hZEVycm9yJywgdGhhdC5ldmVudEhhbmRsZXJzWyd1cGxvYWRFcnJvckhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1sndXBsb2FkUGF1c2VkSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndXBsb2FkUGF1c2VkJywgdGhhdC5ldmVudEhhbmRsZXJzWyd1cGxvYWRQYXVzZWRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3VwbG9hZFN0YXJ0ZWRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd1cGxvYWRTdGFydGVkJywgdGhhdC5ldmVudEhhbmRsZXJzWyd1cGxvYWRTdGFydGVkSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWyd2YWxpZGF0aW9uRXJyb3JIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd2YWxpZGF0aW9uRXJyb3InLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3ZhbGlkYXRpb25FcnJvckhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdH1cbn1cbiJdfQ==