import { FileUpload } from './../index';
import { Animation } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { Animation, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { FileUpload } from './../index';
export declare class FileUploadComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<FileUpload>);
    private eventHandlers;
    nativeElement: FileUpload;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description Sets or gets the file types that can be submitted to the server via the element. This property corresponds to the 'accept' attribute of the hidden file input which is submitted to the URL specified by the uploadUrl property. */
    accept: string | null;
    /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
    animation: Animation | string;
    /** @description Appends the list with selected files to a new custom container specified by the user. If the value of the property is a string it must represent a valid id of an HTML element inside the DOM that will be used as the new container for the uploaded files list. */
    appendTo: string;
    /** @description Sets or gets whether files will be automatically uploaded after selection. */
    autoUpload: boolean;
    /** @description Allows to upload a directory. Files in all subfolders will be uploaded also. This option is supported only in Firefox and Chrome. */
    directory: boolean;
    /** @description Enables or disables the element. */
    disabled: boolean;
    /** @description Defines a custom container that will be used as the new drop zone for file uploads. The dropped files will be added in the fileUpload's list. If 'dropZone' property set to true, the default drop zone inside the element will be used instead. If set to certain id of an HTML element inside the DOM then it will be used as the drop zone. */
    dropZone: any;
    /** @description Hides the footer element and it's contents (Upload All, Pause All and Close All buttons). */
    hideFooter: boolean;
    /** @description Applies a custom template to the file items that represent the uploaded files. */
    itemTemplate: any;
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    locale: string;
    /** @description Callback used to customize the format of the messages that are returned from the Localization Module. */
    localizeFormatFunction: any;
    /** @description Sets the various text values used in the widget. Useful for localization. The localization object has the following fields: browse, pauseFile, cancelFile, uploadFile, pauseAll, cancelAll, uploadAll. It's recommended these messages to be set before element's initialization. */
    messages: any;
    /** @description Sets or gets whether multiple item uploads are allowed. */
    multiple: boolean;
    /** @description Sets or gets the name attribute of the hidden file input which is submitted to the URL specified by the uploadUrl property. */
    name: string;
    /** @description If the element is readonly, users cannot interact with it. */
    readonly: boolean;
    /** @description Callback that can used to handle various server responses and error codes. */
    responseHandler: any;
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    rightToLeft: boolean;
    /** @description Callback function, used to change the headers of the file upload's XHR request. */
    setHeaders: any;
    /** @description Displays a progress bar at the bottom of each uploaded item to show the progress of the uploading process. */
    showProgress: boolean;
    /** @description Determines the theme. Theme defines the look of the element */
    theme: string;
    /** @description Sets or gets the upload URL. This property corresponds to the upload form's action attribute. For example, the uploadUrl property can point to a PHP file, which handles the upload operation on the server-side. */
    uploadUrl: string;
    /** @description If is set to true, the element cannot be focused. */
    unfocusable: boolean;
    /** @description Sets or gets the remove URL. This property corresponds to the form's action attribute. For example, the removeUrl property can point to a PHP file, which handles the remove operation on the server-side. */
    removeUrl: string;
    /** @description Gets the file upload value. */
    value: any;
    /** @description Callback used to validate the files immediatelly after their selection. Retuns a boolean value. If the returned value is false, the file is removed from list and a 'validationError is fired. */
    validateFile: any;
    /** @description This event is triggered when a file has been selected.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	filename, 	type, 	size, 	index)
    *   filename - The name of the selected file.
    *   type - The type of the selected file.
    *   size - The size of the selected file.
    *   index - The index of the selected file.
    */
    onFileSelected: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a file upload operation is canceled.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	filename, 	type, 	size, 	index)
    *   filename - The name of the canceled file.
    *   type - The type of the canceled file.
    *   size - The size of the canceled file.
    *   index - The index of the canceled file.
    */
    onUploadCanceled: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a file upload operation is completed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	filename, 	type, 	size, 	index, 	status, 	serverResponse)
    *   filename - The name of the canceled file.
    *   type - The type of the canceled file.
    *   size - The size of the canceled file.
    *   index - The index of the canceled file.
    *   status - The status of the uploaded file. Whether there was an error or success.
    *   serverResponse - The response of the remote server.
    */
    onUploadCompleted: EventEmitter<CustomEvent>;
    /** @description This event is triggered when during the file upload process something happens and upload fails.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	filename, 	type, 	size, 	index, 	status)
    *   filename - The name of the canceled file.
    *   type - The type of the canceled file.
    *   size - The size of the canceled file.
    *   index - The index of the canceled file.
    *   status - The status of the uploaded file. Whether there was an error or success.
    */
    onUploadError: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a file upload operation is paused.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	filename, 	type, 	size, 	index)
    *   filename - The name of the paused file.
    *   type - The type of the paused file.
    *   size - The size of the paused file.
    *   index - The index of the paused file.
    */
    onUploadPaused: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a file upload operation is started.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	filename, 	type, 	size, 	index)
    *   filename - The name of the file that is being uploaded.
    *   type - The type of the file that is being uploaded.
    *   size - The size of the file that is being uploaded.
    *   index - The index of the file that is being uploaded.
    */
    onUploadStarted: EventEmitter<CustomEvent>;
    /** @description This event is triggered if the validation of a user defined 'validateFile' callback fails.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	filename, 	type, 	size)
    *   filename - The name of the file which validation has failed.
    *   type - The type of the file which validation has failed.
    *   size - The size of the file which validation has failed.
    */
    onValidationError: EventEmitter<CustomEvent>;
    /** @description Opens a popup to browse for a file.
    */
    browse(): void;
    /** @description Cancels all selected files. The files are removed from the list and their uploading is prevented.
    */
    cancelAll(): void;
    /** @description Cancels a selected file. The file is removed from the file list and it's uploading is prevented.
    * @param {number} index. Index of the file which will be canceled.
    */
    cancelFile(index: number): void;
    /** @description Pauses the uploading of all files. File upload is prevented but the files remain in the file list.
    */
    pauseAll(): void;
    /** @description Pauses upload of a file with particular index. File upload is prevented but file ramains in the file list.
    * @param {number} id. Index of the file which will be paused.
    */
    pauseFile(id: number): void;
    /** @description Uploads all selected files.
    */
    uploadAll(): void;
    /** @description Uploads a selected file.
    * @param {number} id. Index of the file which will be uploaded.
    */
    uploadFile(id: number): void;
    readonly isRendered: boolean;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    /** @description Add event listeners. */
    private listen;
    /** @description Remove event listeners. */
    private unlisten;
}
