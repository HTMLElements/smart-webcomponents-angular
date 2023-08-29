import * as tslib_1 from "tslib";
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Smart } from './smart.element';
let EditorComponent = class EditorComponent extends BaseElement {
    constructor(ref) {
        super(ref);
        this.eventHandlers = [];
        /** @description This event is triggered on blur if the content is changed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
        *   oldValue - The old value before the change.
        *   value - The new value after the change.
        */
        this.onChange = new EventEmitter();
        /** @description This event is triggered after user input to indicate that the content is changed via user interaction.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
        *   oldValue - The old value before the input change.
        *   value - The new value after the input change.
        */
        this.onChanging = new EventEmitter();
        /** @description This event is triggered before a Toolbar action is started. The event can be canceled via event.preventDefault().
        *  @param event. The custom event. 	Custom event was created with: event.detail(	name)
        *   name - The name of the action.
        */
        this.onActionStart = new EventEmitter();
        /** @description This event is triggered when a Toolbar action has ended.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	name)
        *   name - The name of the action.
        */
        this.onActionEnd = new EventEmitter();
        /** @description This event is triggered when a Context menu item has been clicked.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	originalEvent, 	value)
        *   originalEvent - The original click event.
        *   value - The value of the item.
        */
        this.onContextMenuItemClick = new EventEmitter();
        /** @description This event is triggered when the Context Menu is opened.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner)
        *   target - The toolbar that is the target of the operation.
        *   owner - The tooltip target (the owner of the tooltip).
        */
        this.onContextMenuOpen = new EventEmitter();
        /** @description This event is triggered when the Context Menu is opening. The opening operation can be canceled via event.preventDefault().
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target)
        *   target - The toolbar that is the target of the operation.
        */
        this.onContextMenuOpening = new EventEmitter();
        /** @description This event is triggered when the Context Menu is closed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner)
        *   target - The toolbar that is the target of the operation.
        *   owner - The tooltip target (the owner of the tooltip).
        */
        this.onContextMenuClose = new EventEmitter();
        /** @description This event is triggered when the Context Menu is closing. The closing operation can be canceled via event.preventDefault().
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target)
        *   target - The toolbar that is the target of the operation.
        */
        this.onContextMenuClosing = new EventEmitter();
        /** @description This event is triggered when an image/table/video resizing has started.
        *  @param event. The custom event. 	*/
        this.onResizeStart = new EventEmitter();
        /** @description This event is triggered when an image/table/video resizing has ended.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target)
        *   target - The element that is resized (image/table or video).
        */
        this.onResizeEnd = new EventEmitter();
        /** @description This event is triggered when the inline Toolbar is opened.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner)
        *   target - The toolbar that is the target of the operation.
        *   owner - The tooltip target (the owner of the tooltip).
        */
        this.onInlineToolbarOpen = new EventEmitter();
        /** @description This event is triggered when the inline Toolbar is opening. The opening operation can be canceled by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target)
        *   target - The toolbar that is the target of the operation.
        */
        this.onInlineToolbarOpening = new EventEmitter();
        /** @description This event is triggered when the inline Toolbar is closed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner)
        *   target - The toolbar that is the target of the operation.
        *   owner - The tooltip target (the owner of the tooltip).
        */
        this.onInlineToolbarClose = new EventEmitter();
        /** @description This event is triggered when the inline Toolbar is closing.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target)
        *   target - The toolbar that is the target of the operation. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
        */
        this.onInlineToolbarClosing = new EventEmitter();
        /** @description This event is triggered when the Drop Down Toolbar is opened.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner)
        *   target - The toolbar that is the target of the operation.
        *   owner - The tooltip target (the owner of the tooltip).
        */
        this.onDropDownToolbarOpen = new EventEmitter();
        /** @description This event is triggered when the Drop Down Toolbar is opening. The opening operation can be canceled by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target)
        *   target - The toolbar that is the target of the operation.
        */
        this.onDropDownToolbarOpening = new EventEmitter();
        /** @description This event is triggered when the Drop Down Toolbar is closed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner)
        *   target - The toolbar that is the target of the operation.
        *   owner - The tooltip target (the owner of the tooltip).
        */
        this.onDropDownToolbarClose = new EventEmitter();
        /** @description This event is triggered when the Drop Down Toolbar is closing. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target)
        *   target - The toolbar that is the target of the operation.
        */
        this.onDropDownToolbarClosing = new EventEmitter();
        /** @description This event is triggered the Dialog Window is opened.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item)
        *   target - The window that is the target of the operation.
        *   item - The toolbar item is the target of the operation.
        */
        this.onDialogOpen = new EventEmitter();
        /** @description This event is triggered before the Dialog Window is opened. The event can be prevented via event.preventDefault().
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item)
        *   target - The window that is the target of the operation.
        *   item - The toolbar item that is the target of the operation.
        */
        this.onDialogOpening = new EventEmitter();
        /** @description This event is triggered when the Dialog Window is closed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item)
        *   target - The window that is the target of the operation.
        *   item - The toolbar item that is the target of the operation.
        */
        this.onDialogClose = new EventEmitter();
        /** @description This event is triggered before the Dialog Window is closing. The event can be prevented via event.preventDefault().
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item)
        *   target - The window that is the target of the operation.
        *   item - The toolbar item that is the target of the operation.
        */
        this.onDialogClosing = new EventEmitter();
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
        this.onImageUploadSuccess = new EventEmitter();
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
        this.onImageUploadFailed = new EventEmitter();
        /** @description This event is triggered when a Toolbar item is clicked.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	originalEvent, 	value)
        *   originalEvent - The original click event.
        *   value - The name of the toolbar item that was clicked.
        */
        this.onToobarItemClick = new EventEmitter();
        /** @description This event is triggered when a message is closed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	instance)
        *   instance - The toast item that is the target of the operation.
        */
        this.onMessageClose = new EventEmitter();
        /** @description This event is triggered when a message is opened.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	instance)
        *   instance - The toast item that is the target of the operation.
        */
        this.onMessageOpen = new EventEmitter();
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('smart-editor');
        for (let propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    }
    /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
    get animation() {
        return this.nativeElement ? this.nativeElement.animation : undefined;
    }
    set animation(value) {
        this.nativeElement ? this.nativeElement.animation = value : undefined;
    }
    /** @description Automatically loads the last saved state of the editor (from local storage) on element initialization. An id must be provided in order to load a previously saved state. */
    get autoLoad() {
        return this.nativeElement ? this.nativeElement.autoLoad : undefined;
    }
    set autoLoad(value) {
        this.nativeElement ? this.nativeElement.autoLoad = value : undefined;
    }
    /** @description Automatically saves the current content of the editor. Saving happens at time intervas determined by the autoSaveInterval property while the element on focus. An id must be provided to the element in order to store the state. */
    get autoSave() {
        return this.nativeElement ? this.nativeElement.autoSave : undefined;
    }
    set autoSave(value) {
        this.nativeElement ? this.nativeElement.autoSave = value : undefined;
    }
    /** @description The property that determines the interval to automatically save the state of the Editor when the autoSave property is set. */
    get autoSaveInterval() {
        return this.nativeElement ? this.nativeElement.autoSaveInterval : undefined;
    }
    set autoSaveInterval(value) {
        this.nativeElement ? this.nativeElement.autoSaveInterval = value : undefined;
    }
    /** @description A formatting function for the char counter. Takes two arguments: chars - the current number of characters inside the Editor.maxCharCount - the maximum number of characters inside the Editor. */
    get charCountFormatFunction() {
        return this.nativeElement ? this.nativeElement.charCountFormatFunction : undefined;
    }
    set charCountFormatFunction(value) {
        this.nativeElement ? this.nativeElement.charCountFormatFunction = value : undefined;
    }
    /** @description Sets or gets whether files will be automatically uploaded after selection. */
    get autoUpload() {
        return this.nativeElement ? this.nativeElement.autoUpload : undefined;
    }
    set autoUpload(value) {
        this.nativeElement ? this.nativeElement.autoUpload = value : undefined;
    }
    /** @description Determines the content filtering settings. */
    get contentFiltering() {
        return this.nativeElement ? this.nativeElement.contentFiltering : undefined;
    }
    set contentFiltering(value) {
        this.nativeElement ? this.nativeElement.contentFiltering = value : undefined;
    }
    /** @description Determines the context menu for the Editor. The context menu is triggered when the user right clicks on the content area of the Editor. */
    get contextMenu() {
        return this.nativeElement ? this.nativeElement.contextMenu : undefined;
    }
    set contextMenu(value) {
        this.nativeElement ? this.nativeElement.contextMenu = value : undefined;
    }
    /** @description Allows to customize default the context menu of the Editor. The property accepts an array of items which can be strings that represent the value of the item, or objects of the following format: { label: string, value: string }, where the label will be displayed and the value will be action value for the item. The property also accepts a function that must return an array of items with the following format function (target: HTMLElement, type: string, defaultItems: string[]) { return defaultItems } and the following arguments: target - the element that is the target of the context menu.type - the type of context menu ( whether it's a table, image, link or other)defaultItems - an array of strings which represent the default items for the context menu. */
    get contextMenuDataSource() {
        return this.nativeElement ? this.nativeElement.contextMenuDataSource : undefined;
    }
    set contextMenuDataSource(value) {
        this.nativeElement ? this.nativeElement.contextMenuDataSource = value : undefined;
    }
    /** @description Sets the Editor's Data Export options. */
    get dataExport() {
        return this.nativeElement ? this.nativeElement.dataExport : undefined;
    }
    set dataExport(value) {
        this.nativeElement ? this.nativeElement.dataExport = value : undefined;
    }
    /** @description Enables or disables the Editor. */
    get disabled() {
        return this.nativeElement ? this.nativeElement.disabled : undefined;
    }
    set disabled(value) {
        this.nativeElement ? this.nativeElement.disabled = value : undefined;
    }
    /** @description Disables content editing inside Editor. */
    get disableEditing() {
        return this.nativeElement ? this.nativeElement.disableEditing : undefined;
    }
    set disableEditing(value) {
        this.nativeElement ? this.nativeElement.disableEditing = value : undefined;
    }
    /** @description Disables the Quick Search Bar. */
    get disableSearchBar() {
        return this.nativeElement ? this.nativeElement.disableSearchBar : undefined;
    }
    set disableSearchBar(value) {
        this.nativeElement ? this.nativeElement.disableSearchBar = value : undefined;
    }
    /** @description Determines the edit mode for the Editor. By default the editor's content accepts and parses HTML. However if set to 'markdown' the Editor can be used as a full time Markdown Editor by parsing the makrdown to HTML in preview mode. */
    get editMode() {
        return this.nativeElement ? this.nativeElement.editMode : undefined;
    }
    set editMode(value) {
        this.nativeElement ? this.nativeElement.editMode = value : undefined;
    }
    /** @description Determines whether the value returned from getHTML method and Source Code view are encoded or not. */
    get enableHtmlEncode() {
        return this.nativeElement ? this.nativeElement.enableHtmlEncode : undefined;
    }
    set enableHtmlEncode(value) {
        this.nativeElement ? this.nativeElement.enableHtmlEncode = value : undefined;
    }
    /** @description Determines whether the Tab key can insert tab chars inside the Editor or change focus (default) */
    get enableTabKey() {
        return this.nativeElement ? this.nativeElement.enableTabKey : undefined;
    }
    set enableTabKey(value) {
        this.nativeElement ? this.nativeElement.enableTabKey = value : undefined;
    }
    /** @description Determines the time interval between results for the find and replace and search bar features. */
    get findAndReplaceTimeout() {
        return this.nativeElement ? this.nativeElement.findAndReplaceTimeout : undefined;
    }
    set findAndReplaceTimeout(value) {
        this.nativeElement ? this.nativeElement.findAndReplaceTimeout = value : undefined;
    }
    /** @description Determines whether the Toolbar is hidden or not. */
    get hideToolbar() {
        return this.nativeElement ? this.nativeElement.hideToolbar : undefined;
    }
    set hideToolbar(value) {
        this.nativeElement ? this.nativeElement.hideToolbar = value : undefined;
    }
    /** @description Determines whether the Inline Toolbar is hidden or not. */
    get hideInlineToolbar() {
        return this.nativeElement ? this.nativeElement.hideInlineToolbar : undefined;
    }
    set hideInlineToolbar(value) {
        this.nativeElement ? this.nativeElement.hideInlineToolbar = value : undefined;
    }
    /** @description Determines the file format of the image/video that are uploaded from local storage. By default images/videos are stroed as base64. */
    get imageFormat() {
        return this.nativeElement ? this.nativeElement.imageFormat : undefined;
    }
    set imageFormat(value) {
        this.nativeElement ? this.nativeElement.imageFormat = value : undefined;
    }
    /** @description Sets the content of the Editor as HTML. Allows to insert text and HTML. */
    get innerHTML() {
        return this.nativeElement ? this.nativeElement.innerHTML : undefined;
    }
    set innerHTML(value) {
        this.nativeElement ? this.nativeElement.innerHTML = value : undefined;
    }
    /** @description Defines an offset(x,y) for the Inline Toolbar positioning on the page. */
    get inlineToolbarOffset() {
        return this.nativeElement ? this.nativeElement.inlineToolbarOffset : undefined;
    }
    set inlineToolbarOffset(value) {
        this.nativeElement ? this.nativeElement.inlineToolbarOffset = value : undefined;
    }
    /** @description Determines the iframe settings of the Editor. When enabled the contents of the Editor are placed inside an iframe, isolated in a separate dom. The element allows to insert external resources into the iframe if needed. */
    get iframeSettings() {
        return this.nativeElement ? this.nativeElement.iframeSettings : undefined;
    }
    set iframeSettings(value) {
        this.nativeElement ? this.nativeElement.iframeSettings = value : undefined;
    }
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    get locale() {
        return this.nativeElement ? this.nativeElement.locale : undefined;
    }
    set locale(value) {
        this.nativeElement ? this.nativeElement.locale = value : undefined;
    }
    /** @description Sets a limit on the number of chars inside the Editor.  */
    get maxCharCount() {
        return this.nativeElement ? this.nativeElement.maxCharCount : undefined;
    }
    set maxCharCount(value) {
        this.nativeElement ? this.nativeElement.maxCharCount = value : undefined;
    }
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property language.  */
    get messages() {
        return this.nativeElement ? this.nativeElement.messages : undefined;
    }
    set messages(value) {
        this.nativeElement ? this.nativeElement.messages = value : undefined;
    }
    /** @description Sets a to the element which can be used to submit the value of the Editor via a form. */
    get name() {
        return this.nativeElement ? this.nativeElement.name : undefined;
    }
    set name(value) {
        this.nativeElement ? this.nativeElement.name = value : undefined;
    }
    /** @description Determines the format of the content that will be pasted inside the Editor. */
    get pasteFormat() {
        return this.nativeElement ? this.nativeElement.pasteFormat : undefined;
    }
    set pasteFormat(value) {
        this.nativeElement ? this.nativeElement.pasteFormat = value : undefined;
    }
    /** @description Determines the placeholder that will be shown when there's no content inside the Editor. */
    get placeholder() {
        return this.nativeElement ? this.nativeElement.placeholder : undefined;
    }
    set placeholder(value) {
        this.nativeElement ? this.nativeElement.placeholder = value : undefined;
    }
    /** @description Determines whether the clearFormat toolbar action should also remove inline styles from the currently selected node. */
    get removeStylesOnClearFormat() {
        return this.nativeElement ? this.nativeElement.removeStylesOnClearFormat : undefined;
    }
    set removeStylesOnClearFormat(value) {
        this.nativeElement ? this.nativeElement.removeStylesOnClearFormat = value : undefined;
    }
    /** @description Determines whether Editor's content is required ot not. If set and the Editor's content is empty, a notification will appear to notify that the Editor cannot be empty. */
    get required() {
        return this.nativeElement ? this.nativeElement.required : undefined;
    }
    set required(value) {
        this.nativeElement ? this.nativeElement.required = value : undefined;
    }
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    get rightToLeft() {
        return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
    }
    set rightToLeft(value) {
        this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
    }
    /** @description Determines whether the value is sanitized from XSS content or not. When enabled scripts and other XSS vulnerabilities are not allowed to exist inside the Editor's as HTML content. */
    get sanitized() {
        return this.nativeElement ? this.nativeElement.sanitized : undefined;
    }
    set sanitized(value) {
        this.nativeElement ? this.nativeElement.sanitized = value : undefined;
    }
    /** @description Determines whether the char counter is visible or not. When enabled it is displayed in the bottom right corner. If maxCharCount is set and the content characters are equal or more than 70% of the maximum char count the counter is colored in order to warn the user. If the char count is equal or more than 90% the counter is again colored with a different warning color to indicate that the counter is near maximum. When maximum is reached, text input is not allowed. */
    get showCharCount() {
        return this.nativeElement ? this.nativeElement.showCharCount : undefined;
    }
    set showCharCount(value) {
        this.nativeElement ? this.nativeElement.showCharCount = value : undefined;
    }
    /** @description Determines whether the editor may be checked for spelling errors. */
    get spellCheck() {
        return this.nativeElement ? this.nativeElement.spellCheck : undefined;
    }
    set spellCheck(value) {
        this.nativeElement ? this.nativeElement.spellCheck = value : undefined;
    }
    /** @description Determines the refresh interval for the Source Code/Preview Panel when Split Mode is enabled.  */
    get splitModeRefreshTimeout() {
        return this.nativeElement ? this.nativeElement.splitModeRefreshTimeout : undefined;
    }
    set splitModeRefreshTimeout(value) {
        this.nativeElement ? this.nativeElement.splitModeRefreshTimeout = value : undefined;
    }
    /** @description Sets or gets the upload URL. This property corresponds to the upload form's action attribute. For example, the uploadUrl property can point to a PHP file, which handles the upload operation on the server-side. */
    get uploadUrl() {
        return this.nativeElement ? this.nativeElement.uploadUrl : undefined;
    }
    set uploadUrl(value) {
        this.nativeElement ? this.nativeElement.uploadUrl = value : undefined;
    }
    /** @description Sets or gets the remove URL. This property corresponds to the form's action attribute. For example, the removeUrl property can point to a PHP file, which handles the remove operation on the server-side. */
    get removeUrl() {
        return this.nativeElement ? this.nativeElement.removeUrl : undefined;
    }
    set removeUrl(value) {
        this.nativeElement ? this.nativeElement.removeUrl = value : undefined;
    }
    /** @description Determines the theme. Theme defines the look of the element */
    get theme() {
        return this.nativeElement ? this.nativeElement.theme : undefined;
    }
    set theme(value) {
        this.nativeElement ? this.nativeElement.theme = value : undefined;
    }
    /** @description Determines the Toolbar items list. Each item can be string pointing to the name of the item or an object that defines a custom item or adds aditional settings to an item. The name of the items are case insensitive. An object definition should contain a name attribute that refers to the name of the item when modifing an existing toolbar item. The name attribute determines the action of the item. If set to 'custom' it is possible to create a custom toolbar item. If name attribute is not set or not valid it is treated as a separator, no a toolbar item. The following items are supported by default by the Editor: SourceCode - shows the HTML/Preview Panel by hiding the input panel. Item type - 'Toggle button'.SplitMode - shows both input and HTML/Preview Panel by splitting the Editor content in two sections. Item type - 'Toggle button'FullScreen - fits the viewport with the Editor by expanding it over the page content. Item type - 'Toggle button'.Alignment - aligns the selected content. Item type - 'Drop down'.FontName - changes the font family of the selected content. Item type - 'drop-down'.FontSize - changes the font size of the selected content. Item type - 'drop-down'.Formats - changes the format of the current selection. Itme type - 'drop-down'.TableRows - allows to insert/remove a row into a selected table element. Item type - 'drop-down'.TableColumns - allows to insert/remove a column into a selected table element. Itme type - 'drop-down'.TableVAlign - sets the vertical alignment of a selected table cell. Item type - 'drop-down'.TableStyle - sets additional styling to a selected table inside the Editor. Item type - 'drop-down'.BackgroundColor - changes the background color of the current selection. Item type - 'color-input'.FontColor - changes the font color of the current selection. Item type = 'color-input'.Bold - sets the currently selected text as bold or not. Item type - 'button'.Italic - sets the currently selected text as italic. Item type - 'button'. Underline - sets the currently selected text as underlined. Itme type - 'button'.Strikethrough - set the currently selected text as strikethrough. Item type - 'button'.Delete - deletes the current selection. Item type - 'button'.Undo - undoes the last operation. Item type - 'button'.Redo - redoes the previous operation. Item type - 'button'.Indent - indents the current selection once. Item type - 'button'.Outdent - outdents the current selection once. Item type - 'button'.OpenLink - triggers a hyperlink. Item type - 'button'.EditLink - creates/edits the selected hyperlink. Item type - 'button'.CreateLink - creates/edits the selected hyperlink. Item type - 'button'.RemoveLink - removes the currently selected hyperlink. Item type - 'button'.Hyperlink - same as createLink, triggers a Dialog Window for link creation. Item type - 'button'.Cut - Cuts the currently selected text. Item type - 'button'.Copy - copies the currently selected text. Item type - 'button'Paste - pastes the currenly copied/cut text from the Clipboard. Item type = 'button' or 'drop-down' when advanced attribute is set to 'true'.Image - triggers a Dialog Window to insert/edit an image. Item type - 'button'.Video - triggers a Dialog Window to insert/edit a video. Item type - 'button'.LowerCase - changes the current selection to lower case. Item type - 'button'.UpperCase - changes the current selection to upper case. Item type - 'button'.Print - opens the browser print preview window. Item type - 'button'.Caption - insert/remove a caption when a table is selected. Item type - 'button'.ClearFormat - removes the formatting of the currntly selected text. Item type - 'button'.Table - triggers a Dialog Window to insert a table. Item type - 'button'.TableHeader - insert/remove a header row to the currently selected table. Item type - 'button'.OrderedList - insert/remove an order list. Item type = 'button'.UnorderedList - insert/remove an unordered list. Item type - 'button'.Subscript - changes the currently selected text to subscript. Item type - 'button'.Superscript - changes the currently selected text to superscript. Item type - 'button'.FindAndReplace - opens a dialog that allows to find and replace text inside the Editor's content section. Item type - 'button'.  The inlineToolbarItems attribute is applicable only to the following items: 'table', 'image', 'hyperlink'. It accepts the same type of value as toolbarItems property but the toolbar items will be placed insinde the Inline Toolbar instead. */
    get toolbarItems() {
        return this.nativeElement ? this.nativeElement.toolbarItems : undefined;
    }
    set toolbarItems(value) {
        this.nativeElement ? this.nativeElement.toolbarItems = value : undefined;
    }
    /** @description Determines the toolbar mode of the Editor. The main toolbar of the Editor can appear as a Ribbon or as a Menu. */
    get toolbarMode() {
        return this.nativeElement ? this.nativeElement.toolbarMode : undefined;
    }
    set toolbarMode(value) {
        this.nativeElement ? this.nativeElement.toolbarMode = value : undefined;
    }
    /** @description Allows to configure the SingleLineRibbon appearance by changing the order and items of the groups. */
    get toolbarRibbonConfig() {
        return this.nativeElement ? this.nativeElement.toolbarRibbonConfig : undefined;
    }
    set toolbarRibbonConfig(value) {
        this.nativeElement ? this.nativeElement.toolbarRibbonConfig = value : undefined;
    }
    /** @description Determines the format of the content that will be pasted inside the Editor. */
    get toolbarViewMode() {
        return this.nativeElement ? this.nativeElement.toolbarViewMode : undefined;
    }
    set toolbarViewMode(value) {
        this.nativeElement ? this.nativeElement.toolbarViewMode = value : undefined;
    }
    /** @description Sticks the Toolbar to the top of the window and stays there while scrolling. */
    get toolbarSticky() {
        return this.nativeElement ? this.nativeElement.toolbarSticky : undefined;
    }
    set toolbarSticky(value) {
        this.nativeElement ? this.nativeElement.toolbarSticky = value : undefined;
    }
    /** @description If is set to true, the element cannot be focused. */
    get unfocusable() {
        return this.nativeElement ? this.nativeElement.unfocusable : undefined;
    }
    set unfocusable(value) {
        this.nativeElement ? this.nativeElement.unfocusable = value : undefined;
    }
    /** @description Sets or gets the value of the Editor. */
    get value() {
        return this.nativeElement ? this.nativeElement.value : undefined;
    }
    set value(value) {
        this.nativeElement ? this.nativeElement.value = value : undefined;
    }
    /** @description A function that can be used to completly customize the Editor dialog that is used to insert/edit tables/images/videos/hyperlinks. The function accepts two arguments: target - the target dialog that is about to be opened.item - the toolbar item object that trigger the dialog. */
    get windowCustomizationFunction() {
        return this.nativeElement ? this.nativeElement.windowCustomizationFunction : undefined;
    }
    set windowCustomizationFunction(value) {
        this.nativeElement ? this.nativeElement.windowCustomizationFunction = value : undefined;
    }
    /** @description Blurs the content of the Editor.
    */
    blur() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.blur();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.blur();
            });
        }
    }
    /** @description Clears the content of the Editor.
    */
    clearContent() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearContent();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clearContent();
            });
        }
    }
    /** @description Collapse the Toolbar if the toolbarViewMode is set to 'toggle'.
    */
    collapseToolbar() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapseToolbar();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.collapseToolbar();
            });
        }
    }
    /** @description Disables a Toolbar item.
    * @param {string} itemName. The name of the toolbar item to disable.
    */
    disableToolbarItem(itemName) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.disableToolbarItem(itemName);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.disableToolbarItem(itemName);
            });
        }
    }
    /** @description Expand the Toolbar if the toolbarViewMode is set to 'toggle'.
    */
    expandToolbar() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.expandToolbar();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.expandToolbar();
            });
        }
    }
    /** @description Enables a previously disabled Toolbar item.
    * @param {string} itemName. The name of the toolbar item to enable.
    */
    enableToolbarItem(itemName) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.enableToolbarItem(itemName);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.enableToolbarItem(itemName);
            });
        }
    }
    /** @description Executes a command via the native execCommand method. The method returns true or false depending on whether the execution was successful or not. The following list of commands can be eexecuted: bold - makes the currently selected content bold. Example: editor.executeCommand('bold');italic - makes the currently selected content italic. Example: editor.executeCommand('italic');undelined - makes the currently selected content underlined. Example: editor.executeCommand('underline');strikeThrough - applies a single line strike through formatting to the currently selected content. Example: editor.executeCommand('strikeThrough');superscript - sets the selected content as superscript. Example: editor.executeCommand('superscript');subscript - sets the selected content as superscript. Example: editor.executeCommand('subscript');uppercase - changes the case of the current selection to upper. Example: editor.executeCommand('uppercase');lowercase - changes the case of the current selection to lower. Example: editor.executeCommand('lowercase');foreColor - changes the font color of the current content selection. Example: editor.executeCommand('foreColor', '#000000');fontName - changes the font name for the selected content. Example: editor.executeCommand('fontName', 'Arial');fontSize - changes the font size of the currently selected content. Example: editor.executeCommand('fontSize', '15px');hiliteColor - changes the background color of current selection. Example: editor.executeCommand('hiliteColor', '#000000');justifyCenter - aligns the content to the center. Example: editor.executeCommand('justifyCenter');justifyFull - aligns the content to be fully justified. Example: editor.executeCommand('justifyFull');justifyLeft - aligns the content to the left. Example: editor.executeCommand('justifyLeft');justifyRight - aligns the content to the right. Example: editor.executeCommand('justifyRight');undo - allows to undo the previous action. Example: editor.executeCommand('undo');redo - allows to redo the previous actions. Example: editor.executeCommand('redo');createLink - creates a hyperlink in the content section of the Editor. Example: editor.executeCommand('createLink', { text: 'Links', url: 'http://', title : 'Link' });indent - indents the content with one level. Example: editor.executeCommand('indent');outdent - outdents the content with one level. Example: editor.executeCommand('outdent');insertHTML - insert an HTML content as string at the current cursor location. Example: editor.executeCommand('insertHTML', 'Text');insertOrderedList - inserts a new numbered list item. Example: editor.executeCommand('insertOrderedList');insertUnorderedList - inserts a new bulleted list item. Example: editor.executeCommand('insertUnorderedList');removeFormat - removes the formatting styles from currently selected text. Example: editor.executeCommand('removeFormat');insertText - inserts a text at the current cursor location. Example: editor.executeCommand('insertText', 'Some text to insert');insertImage - inserts an image at the current cursor location. Example: editor.executeCommand('insertImage', { url: 'https://www.htmlelements.com/demos/images/carousel-medium-2.jpg'});
    * @param {string} commandName. The name of the command to execute.
    * @param {string | number} value?. The value for the command. Some commands require a value to be passed, others do not.
    * @returns {boolean}
  */
    executeCommand(commandName, value) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.executeCommand(commandName, value);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Focuses the content of the Editor.
    */
    focus() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.focus();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.focus();
            });
        }
    }
    /** @description Returns the number of characters inside the Editor's content.
    * @returns {number}
  */
    getCharCount() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getCharCount();
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Returns the current selection range. By default the result is an object of type Range, but if the editMode property is set to 'markdown' the returned value is an object indicating the start/end indexes of the current selection.
    * @returns {any}
  */
    getSelectionRange() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getSelectionRange();
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Returns the content of the Editor as HTML. When editMode is set to 'markdown' the markdown is parsed and returned as HTML.
    * @returns {string}
  */
    getHTML() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getHTML();
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Returns the content of the Editor as text.
    * @returns {string}
  */
    getText() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getText();
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Hides a specific message or all messages if no argument is provided.
    * @param {HTMLElement | string | number} item?. Hides a specific message. The argument can be a DOM reference to a specific item, it's index or it's id. If the argument is not provided then all messages will be closed.
    */
    hideMessage(item) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.hideMessage(item);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.hideMessage(item);
            });
        }
    }
    /** @description Hides the last shown message.
    */
    hideLastMessage() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.hideLastMessage();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.hideLastMessage();
            });
        }
    }
    /** @description Shows a custom message inside the Editor.
    * @param {string} message. The text message to be displayed.
    * @param {any} settings?. Additional settings that can be applied to the Toast element that handles the messages. This parameter should contain only valid Toast properties and values.
    * @returns {HTMLElement | undefined}
  */
    showMessage(message, settings) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.showMessage(message, settings);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Selects the text inside Editor's content.
    */
    selectAll() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.selectAll();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.selectAll();
            });
        }
    }
    /** @description Selects a range of text inside the Editor. The method will find the nodes containing the text from the start to the end indexes and will select them as ranges. However, currently only FireFox supports multiple range selection. The rest of the browsers will only select the first node. If the editor is in 'html' editMode then the expected text will be selected regardless of the browser because there's only one node inside the editor.
    * @param {number} startIndex. The start index to select from.
    * @param {number} endIndex. The end index to select to.
    */
    selectRange(startIndex, endIndex) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.selectRange(startIndex, endIndex);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.selectRange(startIndex, endIndex);
            });
        }
    }
    /** @description Clears the local storage from previously stored states of the Editor with the current id.
    */
    clearState() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearState();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clearState();
            });
        }
    }
    /** @description Saves the current state of the Editor to local storage. Requires an id to be set to the Editor.
    */
    saveState() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.saveState();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.saveState();
            });
        }
    }
    /** @description Loads the last stored state of the Editor from local storage. Requires an id to be set to the Editor.
    */
    loadState() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.loadState();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.loadState();
            });
        }
    }
    /** @description Sets Editor into Split Mode. In split mode the HTML/Markdown editor and SourceCode/Preview panels are visible.
    * @param {boolean} value?. Determines whether to enter or leave split mode. By default the argument is not passed and the mode is toggled.
    */
    splitMode(value) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.splitMode(value);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.splitMode(value);
            });
        }
    }
    /** @description Sets Editor into SourceCode/Preview Mode. In this mode the HTML view panel is displayed.
    * @param {boolean} value?. Determines whether to enter or leave split mode. By default the argument is not passed and the mode is toggled.
    */
    previewMode(value) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.previewMode(value);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.previewMode(value);
            });
        }
    }
    /** @description Sets Editor into Full Screen Mode. If enabled the Editor is positioned above the page content and fills the screen.
    * @param {boolean} value?. Determines whether to enter or leave split mode. By default the argument is not passed and the mode is toggled.
    */
    fullScreenMode(value) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.fullScreenMode(value);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.fullScreenMode(value);
            });
        }
    }
    /** @description Exports the content of the Editor in the desired format. The currently supported formats are: HTML, Markdown and PDF.
    * @param {string} dataFormat. The expected file format.
    * @param {any} callback?. A callback that is executed before the data is exported. Allows to modify the output.
    */
    exportData(dataFormat, callback) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.exportData(dataFormat, callback);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.exportData(dataFormat, callback);
            });
        }
    }
    /** @description Imports the content of a file to the Editor. The currently supported formats are: TXT or HTML.
    * @param {any} source. The url to the file or an object that defines settings for the Ajax request like url, timeput, etc. Object format: { url: string, type: string, data: object, timeout: number }
    * @param {any} settings?. Additional settings for the ajax request. Such as loadError function, contentType, etc. Format: { contentType: string, beforeSend: Function, loadError: Function, beforeLoadComplete: Function  }
    */
    importData(source, settings) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.importData(source, settings);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.importData(source, settings);
            });
        }
    }
    /** @description Opens the Print Preview Panel of the Browser to print Editor's content.
    */
    print() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.print();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.print();
            });
        }
    }
    /** @description Allows to update the settings of a single toolbar item. The method returns true if successful.
    * @param {string | number} name. The name of the toolbar item or it's index inside the <b>toolbarItems</b> array.
    * @param {any} settings. A settings object for the toolbar item. It should have the same definition as when defining a custom toolbar item. You can read more about it in the dedicated topic for the Editor Toolbar on the website.
    * @returns {boolean | undefined}
  */
    updateToolbarItem(name, settings) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.updateToolbarItem(name, settings);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
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
        that.eventHandlers['changeHandler'] = (event) => { that.onChange.emit(event); };
        that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
        that.eventHandlers['changingHandler'] = (event) => { that.onChanging.emit(event); };
        that.nativeElement.addEventListener('changing', that.eventHandlers['changingHandler']);
        that.eventHandlers['actionStartHandler'] = (event) => { that.onActionStart.emit(event); };
        that.nativeElement.addEventListener('actionStart', that.eventHandlers['actionStartHandler']);
        that.eventHandlers['actionEndHandler'] = (event) => { that.onActionEnd.emit(event); };
        that.nativeElement.addEventListener('actionEnd', that.eventHandlers['actionEndHandler']);
        that.eventHandlers['contextMenuItemClickHandler'] = (event) => { that.onContextMenuItemClick.emit(event); };
        that.nativeElement.addEventListener('contextMenuItemClick', that.eventHandlers['contextMenuItemClickHandler']);
        that.eventHandlers['contextMenuOpenHandler'] = (event) => { that.onContextMenuOpen.emit(event); };
        that.nativeElement.addEventListener('contextMenuOpen', that.eventHandlers['contextMenuOpenHandler']);
        that.eventHandlers['contextMenuOpeningHandler'] = (event) => { that.onContextMenuOpening.emit(event); };
        that.nativeElement.addEventListener('contextMenuOpening', that.eventHandlers['contextMenuOpeningHandler']);
        that.eventHandlers['contextMenuCloseHandler'] = (event) => { that.onContextMenuClose.emit(event); };
        that.nativeElement.addEventListener('contextMenuClose', that.eventHandlers['contextMenuCloseHandler']);
        that.eventHandlers['contextMenuClosingHandler'] = (event) => { that.onContextMenuClosing.emit(event); };
        that.nativeElement.addEventListener('contextMenuClosing', that.eventHandlers['contextMenuClosingHandler']);
        that.eventHandlers['resizeStartHandler'] = (event) => { that.onResizeStart.emit(event); };
        that.nativeElement.addEventListener('resizeStart', that.eventHandlers['resizeStartHandler']);
        that.eventHandlers['resizeEndHandler'] = (event) => { that.onResizeEnd.emit(event); };
        that.nativeElement.addEventListener('resizeEnd', that.eventHandlers['resizeEndHandler']);
        that.eventHandlers['inlineToolbarOpenHandler'] = (event) => { that.onInlineToolbarOpen.emit(event); };
        that.nativeElement.addEventListener('inlineToolbarOpen', that.eventHandlers['inlineToolbarOpenHandler']);
        that.eventHandlers['inlineToolbarOpeningHandler'] = (event) => { that.onInlineToolbarOpening.emit(event); };
        that.nativeElement.addEventListener('inlineToolbarOpening', that.eventHandlers['inlineToolbarOpeningHandler']);
        that.eventHandlers['inlineToolbarCloseHandler'] = (event) => { that.onInlineToolbarClose.emit(event); };
        that.nativeElement.addEventListener('inlineToolbarClose', that.eventHandlers['inlineToolbarCloseHandler']);
        that.eventHandlers['inlineToolbarClosingHandler'] = (event) => { that.onInlineToolbarClosing.emit(event); };
        that.nativeElement.addEventListener('inlineToolbarClosing', that.eventHandlers['inlineToolbarClosingHandler']);
        that.eventHandlers['dropDownToolbarOpenHandler'] = (event) => { that.onDropDownToolbarOpen.emit(event); };
        that.nativeElement.addEventListener('dropDownToolbarOpen', that.eventHandlers['dropDownToolbarOpenHandler']);
        that.eventHandlers['dropDownToolbarOpeningHandler'] = (event) => { that.onDropDownToolbarOpening.emit(event); };
        that.nativeElement.addEventListener('dropDownToolbarOpening', that.eventHandlers['dropDownToolbarOpeningHandler']);
        that.eventHandlers['dropDownToolbarCloseHandler'] = (event) => { that.onDropDownToolbarClose.emit(event); };
        that.nativeElement.addEventListener('dropDownToolbarClose', that.eventHandlers['dropDownToolbarCloseHandler']);
        that.eventHandlers['dropDownToolbarClosingHandler'] = (event) => { that.onDropDownToolbarClosing.emit(event); };
        that.nativeElement.addEventListener('dropDownToolbarClosing', that.eventHandlers['dropDownToolbarClosingHandler']);
        that.eventHandlers['dialogOpenHandler'] = (event) => { that.onDialogOpen.emit(event); };
        that.nativeElement.addEventListener('dialogOpen', that.eventHandlers['dialogOpenHandler']);
        that.eventHandlers['dialogOpeningHandler'] = (event) => { that.onDialogOpening.emit(event); };
        that.nativeElement.addEventListener('dialogOpening', that.eventHandlers['dialogOpeningHandler']);
        that.eventHandlers['dialogCloseHandler'] = (event) => { that.onDialogClose.emit(event); };
        that.nativeElement.addEventListener('dialogClose', that.eventHandlers['dialogCloseHandler']);
        that.eventHandlers['dialogClosingHandler'] = (event) => { that.onDialogClosing.emit(event); };
        that.nativeElement.addEventListener('dialogClosing', that.eventHandlers['dialogClosingHandler']);
        that.eventHandlers['imageUploadSuccessHandler'] = (event) => { that.onImageUploadSuccess.emit(event); };
        that.nativeElement.addEventListener('imageUploadSuccess', that.eventHandlers['imageUploadSuccessHandler']);
        that.eventHandlers['imageUploadFailedHandler'] = (event) => { that.onImageUploadFailed.emit(event); };
        that.nativeElement.addEventListener('imageUploadFailed', that.eventHandlers['imageUploadFailedHandler']);
        that.eventHandlers['toobarItemClickHandler'] = (event) => { that.onToobarItemClick.emit(event); };
        that.nativeElement.addEventListener('toobarItemClick', that.eventHandlers['toobarItemClickHandler']);
        that.eventHandlers['messageCloseHandler'] = (event) => { that.onMessageClose.emit(event); };
        that.nativeElement.addEventListener('messageClose', that.eventHandlers['messageCloseHandler']);
        that.eventHandlers['messageOpenHandler'] = (event) => { that.onMessageOpen.emit(event); };
        that.nativeElement.addEventListener('messageOpen', that.eventHandlers['messageOpenHandler']);
    }
    /** @description Remove event listeners. */
    unlisten() {
        const that = this;
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
    }
};
EditorComponent.ctorParameters = () => [
    { type: ElementRef }
];
tslib_1.__decorate([
    Input()
], EditorComponent.prototype, "animation", null);
tslib_1.__decorate([
    Input()
], EditorComponent.prototype, "autoLoad", null);
tslib_1.__decorate([
    Input()
], EditorComponent.prototype, "autoSave", null);
tslib_1.__decorate([
    Input()
], EditorComponent.prototype, "autoSaveInterval", null);
tslib_1.__decorate([
    Input()
], EditorComponent.prototype, "charCountFormatFunction", null);
tslib_1.__decorate([
    Input()
], EditorComponent.prototype, "autoUpload", null);
tslib_1.__decorate([
    Input()
], EditorComponent.prototype, "contentFiltering", null);
tslib_1.__decorate([
    Input()
], EditorComponent.prototype, "contextMenu", null);
tslib_1.__decorate([
    Input()
], EditorComponent.prototype, "contextMenuDataSource", null);
tslib_1.__decorate([
    Input()
], EditorComponent.prototype, "dataExport", null);
tslib_1.__decorate([
    Input()
], EditorComponent.prototype, "disabled", null);
tslib_1.__decorate([
    Input()
], EditorComponent.prototype, "disableEditing", null);
tslib_1.__decorate([
    Input()
], EditorComponent.prototype, "disableSearchBar", null);
tslib_1.__decorate([
    Input()
], EditorComponent.prototype, "editMode", null);
tslib_1.__decorate([
    Input()
], EditorComponent.prototype, "enableHtmlEncode", null);
tslib_1.__decorate([
    Input()
], EditorComponent.prototype, "enableTabKey", null);
tslib_1.__decorate([
    Input()
], EditorComponent.prototype, "findAndReplaceTimeout", null);
tslib_1.__decorate([
    Input()
], EditorComponent.prototype, "hideToolbar", null);
tslib_1.__decorate([
    Input()
], EditorComponent.prototype, "hideInlineToolbar", null);
tslib_1.__decorate([
    Input()
], EditorComponent.prototype, "imageFormat", null);
tslib_1.__decorate([
    Input()
], EditorComponent.prototype, "innerHTML", null);
tslib_1.__decorate([
    Input()
], EditorComponent.prototype, "inlineToolbarOffset", null);
tslib_1.__decorate([
    Input()
], EditorComponent.prototype, "iframeSettings", null);
tslib_1.__decorate([
    Input()
], EditorComponent.prototype, "locale", null);
tslib_1.__decorate([
    Input()
], EditorComponent.prototype, "maxCharCount", null);
tslib_1.__decorate([
    Input()
], EditorComponent.prototype, "messages", null);
tslib_1.__decorate([
    Input()
], EditorComponent.prototype, "name", null);
tslib_1.__decorate([
    Input()
], EditorComponent.prototype, "pasteFormat", null);
tslib_1.__decorate([
    Input()
], EditorComponent.prototype, "placeholder", null);
tslib_1.__decorate([
    Input()
], EditorComponent.prototype, "removeStylesOnClearFormat", null);
tslib_1.__decorate([
    Input()
], EditorComponent.prototype, "required", null);
tslib_1.__decorate([
    Input()
], EditorComponent.prototype, "rightToLeft", null);
tslib_1.__decorate([
    Input()
], EditorComponent.prototype, "sanitized", null);
tslib_1.__decorate([
    Input()
], EditorComponent.prototype, "showCharCount", null);
tslib_1.__decorate([
    Input()
], EditorComponent.prototype, "spellCheck", null);
tslib_1.__decorate([
    Input()
], EditorComponent.prototype, "splitModeRefreshTimeout", null);
tslib_1.__decorate([
    Input()
], EditorComponent.prototype, "uploadUrl", null);
tslib_1.__decorate([
    Input()
], EditorComponent.prototype, "removeUrl", null);
tslib_1.__decorate([
    Input()
], EditorComponent.prototype, "theme", null);
tslib_1.__decorate([
    Input()
], EditorComponent.prototype, "toolbarItems", null);
tslib_1.__decorate([
    Input()
], EditorComponent.prototype, "toolbarMode", null);
tslib_1.__decorate([
    Input()
], EditorComponent.prototype, "toolbarRibbonConfig", null);
tslib_1.__decorate([
    Input()
], EditorComponent.prototype, "toolbarViewMode", null);
tslib_1.__decorate([
    Input()
], EditorComponent.prototype, "toolbarSticky", null);
tslib_1.__decorate([
    Input()
], EditorComponent.prototype, "unfocusable", null);
tslib_1.__decorate([
    Input()
], EditorComponent.prototype, "value", null);
tslib_1.__decorate([
    Input()
], EditorComponent.prototype, "windowCustomizationFunction", null);
tslib_1.__decorate([
    Output()
], EditorComponent.prototype, "onChange", void 0);
tslib_1.__decorate([
    Output()
], EditorComponent.prototype, "onChanging", void 0);
tslib_1.__decorate([
    Output()
], EditorComponent.prototype, "onActionStart", void 0);
tslib_1.__decorate([
    Output()
], EditorComponent.prototype, "onActionEnd", void 0);
tslib_1.__decorate([
    Output()
], EditorComponent.prototype, "onContextMenuItemClick", void 0);
tslib_1.__decorate([
    Output()
], EditorComponent.prototype, "onContextMenuOpen", void 0);
tslib_1.__decorate([
    Output()
], EditorComponent.prototype, "onContextMenuOpening", void 0);
tslib_1.__decorate([
    Output()
], EditorComponent.prototype, "onContextMenuClose", void 0);
tslib_1.__decorate([
    Output()
], EditorComponent.prototype, "onContextMenuClosing", void 0);
tslib_1.__decorate([
    Output()
], EditorComponent.prototype, "onResizeStart", void 0);
tslib_1.__decorate([
    Output()
], EditorComponent.prototype, "onResizeEnd", void 0);
tslib_1.__decorate([
    Output()
], EditorComponent.prototype, "onInlineToolbarOpen", void 0);
tslib_1.__decorate([
    Output()
], EditorComponent.prototype, "onInlineToolbarOpening", void 0);
tslib_1.__decorate([
    Output()
], EditorComponent.prototype, "onInlineToolbarClose", void 0);
tslib_1.__decorate([
    Output()
], EditorComponent.prototype, "onInlineToolbarClosing", void 0);
tslib_1.__decorate([
    Output()
], EditorComponent.prototype, "onDropDownToolbarOpen", void 0);
tslib_1.__decorate([
    Output()
], EditorComponent.prototype, "onDropDownToolbarOpening", void 0);
tslib_1.__decorate([
    Output()
], EditorComponent.prototype, "onDropDownToolbarClose", void 0);
tslib_1.__decorate([
    Output()
], EditorComponent.prototype, "onDropDownToolbarClosing", void 0);
tslib_1.__decorate([
    Output()
], EditorComponent.prototype, "onDialogOpen", void 0);
tslib_1.__decorate([
    Output()
], EditorComponent.prototype, "onDialogOpening", void 0);
tslib_1.__decorate([
    Output()
], EditorComponent.prototype, "onDialogClose", void 0);
tslib_1.__decorate([
    Output()
], EditorComponent.prototype, "onDialogClosing", void 0);
tslib_1.__decorate([
    Output()
], EditorComponent.prototype, "onImageUploadSuccess", void 0);
tslib_1.__decorate([
    Output()
], EditorComponent.prototype, "onImageUploadFailed", void 0);
tslib_1.__decorate([
    Output()
], EditorComponent.prototype, "onToobarItemClick", void 0);
tslib_1.__decorate([
    Output()
], EditorComponent.prototype, "onMessageClose", void 0);
tslib_1.__decorate([
    Output()
], EditorComponent.prototype, "onMessageOpen", void 0);
EditorComponent = tslib_1.__decorate([
    Directive({
        exportAs: 'smart-editor', selector: 'smart-editor, [smart-editor]'
    })
], EditorComponent);
export { EditorComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQuZWRpdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc21hcnQtd2ViY29tcG9uZW50cy1hbmd1bGFyL2VkaXRvci8iLCJzb3VyY2VzIjpbInNtYXJ0LmVkaXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUosT0FBTyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVyRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFReEMsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZ0IsU0FBUSxXQUFXO0lBQy9DLFlBQVksR0FBdUI7UUFDbEMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBSUosa0JBQWEsR0FBVSxFQUFFLENBQUM7UUFvYmxDOzs7O1VBSUU7UUFDUSxhQUFRLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFbkU7Ozs7VUFJRTtRQUNRLGVBQVUsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVyRTs7O1VBR0U7UUFDUSxrQkFBYSxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXhFOzs7VUFHRTtRQUNRLGdCQUFXLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFdEU7Ozs7VUFJRTtRQUNRLDJCQUFzQixHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRWpGOzs7O1VBSUU7UUFDUSxzQkFBaUIsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUU1RTs7O1VBR0U7UUFDUSx5QkFBb0IsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUvRTs7OztVQUlFO1FBQ1EsdUJBQWtCLEdBQThCLElBQUksWUFBWSxF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c0U7QUFPckU7SUFBVCxNQUFNLEVBQUU7MkRBQW9FO0FBTW5FO0lBQVQsTUFBTSxFQUFFOzZEQUFzRTtBQUlyRTtJQUFULE1BQU0sRUFBRTtzREFBK0Q7QUFNOUQ7SUFBVCxNQUFNLEVBQUU7b0RBQTZEO0FBTzVEO0lBQVQsTUFBTSxFQUFFOzREQUFxRTtBQU1wRTtJQUFULE1BQU0sRUFBRTsrREFBd0U7QUFPdkU7SUFBVCxNQUFNLEVBQUU7NkRBQXNFO0FBTXJFO0lBQVQsTUFBTSxFQUFFOytEQUF3RTtBQU92RTtJQUFULE1BQU0sRUFBRTs4REFBdUU7QUFNdEU7SUFBVCxNQUFNLEVBQUU7aUVBQTBFO0FBT3pFO0lBQVQsTUFBTSxFQUFFOytEQUF3RTtBQU12RTtJQUFULE1BQU0sRUFBRTtpRUFBMEU7QUFPekU7SUFBVCxNQUFNLEVBQUU7cURBQThEO0FBTzdEO0lBQVQsTUFBTSxFQUFFO3dEQUFpRTtBQU9oRTtJQUFULE1BQU0sRUFBRTtzREFBK0Q7QUFPOUQ7SUFBVCxNQUFNLEVBQUU7d0RBQWlFO0FBYWhFO0lBQVQsTUFBTSxFQUFFOzZEQUFzRTtBQWFyRTtJQUFULE1BQU0sRUFBRTs0REFBcUU7QUFPcEU7SUFBVCxNQUFNLEVBQUU7MERBQW1FO0FBTWxFO0lBQVQsTUFBTSxFQUFFO3VEQUFnRTtBQU0vRDtJQUFULE1BQU0sRUFBRTtzREFBK0Q7QUExbkI1RCxlQUFlO0lBSjNCLFNBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLDhCQUE4QjtLQUNsRSxDQUFDO0dBRVcsZUFBZSxDQTZ3QzNCO1NBN3dDWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWRpdG9yIH0gZnJvbSAnLi8uLi9pbmRleCc7XG5pbXBvcnQgeyBBbmltYXRpb24sIEVkaXRvckNvbnRlbnRGaWx0ZXJpbmdBdHRyaWJ1dGVGaWx0ZXJNb2RlLCBFZGl0b3JDb250ZW50RmlsdGVyaW5nVGFnRmlsdGVyTW9kZSwgRWRpdG9yQ29udGVudEZpbHRlcmluZ1N0eWxlQXR0cmlidXRlRmlsdGVyTW9kZSwgRWRpdG9yQ29udGV4dE1lbnUsIEVkaXRNb2RlLCBFZGl0b3JJbWFnZUZvcm1hdCwgUGFzdGVGb3JtYXQsIFRvb2xiYXJNb2RlLCBUb29sYmFyVmlld01vZGUsIEVkaXRvckNvbnRlbnRGaWx0ZXJpbmcsIEVkaXRvckRhdGFFeHBvcnQsIEVkaXRvcklmcmFtZVNldHRpbmdzLCBUb29sYmFySXRlbSwgVG9vbGJhckl0ZW1FZGl0b3IsIEVsZW1lbnRSZW5kZXJNb2RlfSBmcm9tICcuLy4uL2luZGV4JztcbmltcG9ydCB7IENvbXBvbmVudCwgRGlyZWN0aXZlLCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgU2ltcGxlQ2hhbmdlcywgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VFbGVtZW50LCBTbWFydCB9IGZyb20gJy4vc21hcnQuZWxlbWVudCc7XG5leHBvcnQgeyBBbmltYXRpb24sIEVkaXRvckNvbnRlbnRGaWx0ZXJpbmdBdHRyaWJ1dGVGaWx0ZXJNb2RlLCBFZGl0b3JDb250ZW50RmlsdGVyaW5nVGFnRmlsdGVyTW9kZSwgRWRpdG9yQ29udGVudEZpbHRlcmluZ1N0eWxlQXR0cmlidXRlRmlsdGVyTW9kZSwgRWRpdG9yQ29udGV4dE1lbnUsIEVkaXRNb2RlLCBFZGl0b3JJbWFnZUZvcm1hdCwgUGFzdGVGb3JtYXQsIFRvb2xiYXJNb2RlLCBUb29sYmFyVmlld01vZGUsIEVkaXRvckNvbnRlbnRGaWx0ZXJpbmcsIEVkaXRvckRhdGFFeHBvcnQsIEVkaXRvcklmcmFtZVNldHRpbmdzLCBUb29sYmFySXRlbSwgVG9vbGJhckl0ZW1FZGl0b3IsIEVsZW1lbnRSZW5kZXJNb2RlfSBmcm9tICcuLy4uL2luZGV4JztcbmV4cG9ydCB7IFNtYXJ0IH0gZnJvbSAnLi9zbWFydC5lbGVtZW50JztcbmV4cG9ydCB7IEVkaXRvciB9IGZyb20gJy4vLi4vaW5kZXgnO1xuXG5cbkBEaXJlY3RpdmUoe1xuXHRleHBvcnRBczogJ3NtYXJ0LWVkaXRvcicsXHRzZWxlY3RvcjogJ3NtYXJ0LWVkaXRvciwgW3NtYXJ0LWVkaXRvcl0nXG59KVxuXG5leHBvcnQgY2xhc3MgRWRpdG9yQ29tcG9uZW50IGV4dGVuZHMgQmFzZUVsZW1lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcblx0Y29uc3RydWN0b3IocmVmOiBFbGVtZW50UmVmPEVkaXRvcj4pIHtcblx0XHRzdXBlcihyZWYpO1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA9IHJlZi5uYXRpdmVFbGVtZW50IGFzIEVkaXRvcjtcblx0fVxuXG5cdHByaXZhdGUgZXZlbnRIYW5kbGVyczogYW55W10gPSBbXTtcblxuXHRwdWJsaWMgbmF0aXZlRWxlbWVudDogRWRpdG9yO1xuXHQvKiogQGRlc2NyaXB0aW9uIENyZWF0ZXMgdGhlIGNvbXBvbmVudCBvbiBkZW1hbmQuXG5cdCAqIEBwYXJhbSBwcm9wZXJ0aWVzIEFuIG9wdGlvbmFsIG9iamVjdCBvZiBwcm9wZXJ0aWVzLCB3aGljaCB3aWxsIGJlIGFkZGVkIHRvIHRoZSB0ZW1wbGF0ZSBiaW5kZWQgb25lcy5cblx0ICovXG5cdHB1YmxpYyBjcmVhdGVDb21wb25lbnQocHJvcGVydGllcyA9IHt9KTogYW55IHtcbiAgICBcdHRoaXMubmF0aXZlRWxlbWVudCA9IDxFZGl0b3I+ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc21hcnQtZWRpdG9yJyk7XG5cdFx0Zm9yIChsZXQgcHJvcGVydHlOYW1lIGluIHByb3BlcnRpZXMpIHsgXG4gXHRcdFx0dGhpcy5uYXRpdmVFbGVtZW50W3Byb3BlcnR5TmFtZV0gPSBwcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV07XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQ7XG5cdH1cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIGFuaW1hdGlvbiBtb2RlLiBBbmltYXRpb24gaXMgZGlzYWJsZWQgd2hlbiB0aGUgcHJvcGVydHkgaXMgc2V0IHRvICdub25lJyAqL1xuXHRASW5wdXQoKVxuXHRnZXQgYW5pbWF0aW9uKCk6IEFuaW1hdGlvbiB8IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hbmltYXRpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGFuaW1hdGlvbih2YWx1ZTogQW5pbWF0aW9uIHwgc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmFuaW1hdGlvbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBdXRvbWF0aWNhbGx5IGxvYWRzIHRoZSBsYXN0IHNhdmVkIHN0YXRlIG9mIHRoZSBlZGl0b3IgKGZyb20gbG9jYWwgc3RvcmFnZSkgb24gZWxlbWVudCBpbml0aWFsaXphdGlvbi4gQW4gaWQgbXVzdCBiZSBwcm92aWRlZCBpbiBvcmRlciB0byBsb2FkIGEgcHJldmlvdXNseSBzYXZlZCBzdGF0ZS4gKi9cblx0QElucHV0KClcblx0Z2V0IGF1dG9Mb2FkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYXV0b0xvYWQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGF1dG9Mb2FkKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9Mb2FkID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEF1dG9tYXRpY2FsbHkgc2F2ZXMgdGhlIGN1cnJlbnQgY29udGVudCBvZiB0aGUgZWRpdG9yLiBTYXZpbmcgaGFwcGVucyBhdCB0aW1lIGludGVydmFzIGRldGVybWluZWQgYnkgdGhlIGF1dG9TYXZlSW50ZXJ2YWwgcHJvcGVydHkgd2hpbGUgdGhlIGVsZW1lbnQgb24gZm9jdXMuIEFuIGlkIG11c3QgYmUgcHJvdmlkZWQgdG8gdGhlIGVsZW1lbnQgaW4gb3JkZXIgdG8gc3RvcmUgdGhlIHN0YXRlLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgYXV0b1NhdmUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hdXRvU2F2ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYXV0b1NhdmUodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYXV0b1NhdmUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhlIHByb3BlcnR5IHRoYXQgZGV0ZXJtaW5lcyB0aGUgaW50ZXJ2YWwgdG8gYXV0b21hdGljYWxseSBzYXZlIHRoZSBzdGF0ZSBvZiB0aGUgRWRpdG9yIHdoZW4gdGhlIGF1dG9TYXZlIHByb3BlcnR5IGlzIHNldC4gKi9cblx0QElucHV0KClcblx0Z2V0IGF1dG9TYXZlSW50ZXJ2YWwoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9TYXZlSW50ZXJ2YWwgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGF1dG9TYXZlSW50ZXJ2YWwodmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hdXRvU2F2ZUludGVydmFsID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEEgZm9ybWF0dGluZyBmdW5jdGlvbiBmb3IgdGhlIGNoYXIgY291bnRlci4gVGFrZXMgdHdvIGFyZ3VtZW50czogY2hhcnMgLSB0aGUgY3VycmVudCBudW1iZXIgb2YgY2hhcmFjdGVycyBpbnNpZGUgdGhlIEVkaXRvci5tYXhDaGFyQ291bnQgLSB0aGUgbWF4aW11bSBudW1iZXIgb2YgY2hhcmFjdGVycyBpbnNpZGUgdGhlIEVkaXRvci4gKi9cblx0QElucHV0KClcblx0Z2V0IGNoYXJDb3VudEZvcm1hdEZ1bmN0aW9uKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jaGFyQ291bnRGb3JtYXRGdW5jdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgY2hhckNvdW50Rm9ybWF0RnVuY3Rpb24odmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jaGFyQ291bnRGb3JtYXRGdW5jdGlvbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgd2hldGhlciBmaWxlcyB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgdXBsb2FkZWQgYWZ0ZXIgc2VsZWN0aW9uLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgYXV0b1VwbG9hZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9VcGxvYWQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGF1dG9VcGxvYWQodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYXV0b1VwbG9hZCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBjb250ZW50IGZpbHRlcmluZyBzZXR0aW5ncy4gKi9cblx0QElucHV0KClcblx0Z2V0IGNvbnRlbnRGaWx0ZXJpbmcoKTogRWRpdG9yQ29udGVudEZpbHRlcmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb250ZW50RmlsdGVyaW5nIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjb250ZW50RmlsdGVyaW5nKHZhbHVlOiBFZGl0b3JDb250ZW50RmlsdGVyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbnRlbnRGaWx0ZXJpbmcgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgY29udGV4dCBtZW51IGZvciB0aGUgRWRpdG9yLiBUaGUgY29udGV4dCBtZW51IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSB1c2VyIHJpZ2h0IGNsaWNrcyBvbiB0aGUgY29udGVudCBhcmVhIG9mIHRoZSBFZGl0b3IuICovXG5cdEBJbnB1dCgpXG5cdGdldCBjb250ZXh0TWVudSgpOiBFZGl0b3JDb250ZXh0TWVudSB8IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb250ZXh0TWVudSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgY29udGV4dE1lbnUodmFsdWU6IEVkaXRvckNvbnRleHRNZW51IHwgc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbnRleHRNZW51ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEFsbG93cyB0byBjdXN0b21pemUgZGVmYXVsdCB0aGUgY29udGV4dCBtZW51IG9mIHRoZSBFZGl0b3IuIFRoZSBwcm9wZXJ0eSBhY2NlcHRzIGFuIGFycmF5IG9mIGl0ZW1zIHdoaWNoIGNhbiBiZSBzdHJpbmdzIHRoYXQgcmVwcmVzZW50IHRoZSB2YWx1ZSBvZiB0aGUgaXRlbSwgb3Igb2JqZWN0cyBvZiB0aGUgZm9sbG93aW5nIGZvcm1hdDogeyBsYWJlbDogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIH0sIHdoZXJlIHRoZSBsYWJlbCB3aWxsIGJlIGRpc3BsYXllZCBhbmQgdGhlIHZhbHVlIHdpbGwgYmUgYWN0aW9uIHZhbHVlIGZvciB0aGUgaXRlbS4gVGhlIHByb3BlcnR5IGFsc28gYWNjZXB0cyBhIGZ1bmN0aW9uIHRoYXQgbXVzdCByZXR1cm4gYW4gYXJyYXkgb2YgaXRlbXMgd2l0aCB0aGUgZm9sbG93aW5nIGZvcm1hdCBmdW5jdGlvbiAodGFyZ2V0OiBIVE1MRWxlbWVudCwgdHlwZTogc3RyaW5nLCBkZWZhdWx0SXRlbXM6IHN0cmluZ1tdKSB7IHJldHVybiBkZWZhdWx0SXRlbXMgfSBhbmQgdGhlIGZvbGxvd2luZyBhcmd1bWVudHM6IHRhcmdldCAtIHRoZSBlbGVtZW50IHRoYXQgaXMgdGhlIHRhcmdldCBvZiB0aGUgY29udGV4dCBtZW51LnR5cGUgLSB0aGUgdHlwZSBvZiBjb250ZXh0IG1lbnUgKCB3aGV0aGVyIGl0J3MgYSB0YWJsZSwgaW1hZ2UsIGxpbmsgb3Igb3RoZXIpZGVmYXVsdEl0ZW1zIC0gYW4gYXJyYXkgb2Ygc3RyaW5ncyB3aGljaCByZXByZXNlbnQgdGhlIGRlZmF1bHQgaXRlbXMgZm9yIHRoZSBjb250ZXh0IG1lbnUuICovXG5cdEBJbnB1dCgpXG5cdGdldCBjb250ZXh0TWVudURhdGFTb3VyY2UoKTogc3RyaW5nW10gfCB7IGxhYmVsOiBzdHJpbmcsIHZhbHVlOiAnc3RyaW5nJyB9W10gfCBGdW5jdGlvbiB8IG51bGwge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29udGV4dE1lbnVEYXRhU291cmNlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjb250ZXh0TWVudURhdGFTb3VyY2UodmFsdWU6IHN0cmluZ1tdIHwgeyBsYWJlbDogc3RyaW5nLCB2YWx1ZTogJ3N0cmluZycgfVtdIHwgRnVuY3Rpb24gfCBudWxsKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbnRleHRNZW51RGF0YVNvdXJjZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBFZGl0b3IncyBEYXRhIEV4cG9ydCBvcHRpb25zLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGF0YUV4cG9ydCgpOiBFZGl0b3JEYXRhRXhwb3J0IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRhdGFFeHBvcnQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRhdGFFeHBvcnQodmFsdWU6IEVkaXRvckRhdGFFeHBvcnQpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGF0YUV4cG9ydCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFbmFibGVzIG9yIGRpc2FibGVzIHRoZSBFZGl0b3IuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVkIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlZCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEaXNhYmxlcyBjb250ZW50IGVkaXRpbmcgaW5zaWRlIEVkaXRvci4gKi9cblx0QElucHV0KClcblx0Z2V0IGRpc2FibGVFZGl0aW5nKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZUVkaXRpbmcgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRpc2FibGVFZGl0aW5nKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVFZGl0aW5nID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERpc2FibGVzIHRoZSBRdWljayBTZWFyY2ggQmFyLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGlzYWJsZVNlYXJjaEJhcigpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVTZWFyY2hCYXIgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRpc2FibGVTZWFyY2hCYXIodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZVNlYXJjaEJhciA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBlZGl0IG1vZGUgZm9yIHRoZSBFZGl0b3IuIEJ5IGRlZmF1bHQgdGhlIGVkaXRvcidzIGNvbnRlbnQgYWNjZXB0cyBhbmQgcGFyc2VzIEhUTUwuIEhvd2V2ZXIgaWYgc2V0IHRvICdtYXJrZG93bicgdGhlIEVkaXRvciBjYW4gYmUgdXNlZCBhcyBhIGZ1bGwgdGltZSBNYXJrZG93biBFZGl0b3IgYnkgcGFyc2luZyB0aGUgbWFrcmRvd24gdG8gSFRNTCBpbiBwcmV2aWV3IG1vZGUuICovXG5cdEBJbnB1dCgpXG5cdGdldCBlZGl0TW9kZSgpOiBFZGl0TW9kZSB8IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5lZGl0TW9kZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZWRpdE1vZGUodmFsdWU6IEVkaXRNb2RlIHwgc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmVkaXRNb2RlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgd2hldGhlciB0aGUgdmFsdWUgcmV0dXJuZWQgZnJvbSBnZXRIVE1MIG1ldGhvZCBhbmQgU291cmNlIENvZGUgdmlldyBhcmUgZW5jb2RlZCBvciBub3QuICovXG5cdEBJbnB1dCgpXG5cdGdldCBlbmFibGVIdG1sRW5jb2RlKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZW5hYmxlSHRtbEVuY29kZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZW5hYmxlSHRtbEVuY29kZSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5lbmFibGVIdG1sRW5jb2RlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgd2hldGhlciB0aGUgVGFiIGtleSBjYW4gaW5zZXJ0IHRhYiBjaGFycyBpbnNpZGUgdGhlIEVkaXRvciBvciBjaGFuZ2UgZm9jdXMgKGRlZmF1bHQpICovXG5cdEBJbnB1dCgpXG5cdGdldCBlbmFibGVUYWJLZXkoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5lbmFibGVUYWJLZXkgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGVuYWJsZVRhYktleSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5lbmFibGVUYWJLZXkgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgdGltZSBpbnRlcnZhbCBiZXR3ZWVuIHJlc3VsdHMgZm9yIHRoZSBmaW5kIGFuZCByZXBsYWNlIGFuZCBzZWFyY2ggYmFyIGZlYXR1cmVzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZmluZEFuZFJlcGxhY2VUaW1lb3V0KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5maW5kQW5kUmVwbGFjZVRpbWVvdXQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGZpbmRBbmRSZXBsYWNlVGltZW91dCh2YWx1ZTogbnVtYmVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmZpbmRBbmRSZXBsYWNlVGltZW91dCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIFRvb2xiYXIgaXMgaGlkZGVuIG9yIG5vdC4gKi9cblx0QElucHV0KClcblx0Z2V0IGhpZGVUb29sYmFyKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGlkZVRvb2xiYXIgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGhpZGVUb29sYmFyKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmhpZGVUb29sYmFyID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgd2hldGhlciB0aGUgSW5saW5lIFRvb2xiYXIgaXMgaGlkZGVuIG9yIG5vdC4gKi9cblx0QElucHV0KClcblx0Z2V0IGhpZGVJbmxpbmVUb29sYmFyKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGlkZUlubGluZVRvb2xiYXIgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGhpZGVJbmxpbmVUb29sYmFyKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmhpZGVJbmxpbmVUb29sYmFyID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIGZpbGUgZm9ybWF0IG9mIHRoZSBpbWFnZS92aWRlbyB0aGF0IGFyZSB1cGxvYWRlZCBmcm9tIGxvY2FsIHN0b3JhZ2UuIEJ5IGRlZmF1bHQgaW1hZ2VzL3ZpZGVvcyBhcmUgc3Ryb2VkIGFzIGJhc2U2NC4gKi9cblx0QElucHV0KClcblx0Z2V0IGltYWdlRm9ybWF0KCk6IEVkaXRvckltYWdlRm9ybWF0IHwgc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmltYWdlRm9ybWF0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBpbWFnZUZvcm1hdCh2YWx1ZTogRWRpdG9ySW1hZ2VGb3JtYXQgfCBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaW1hZ2VGb3JtYXQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyB0aGUgY29udGVudCBvZiB0aGUgRWRpdG9yIGFzIEhUTUwuIEFsbG93cyB0byBpbnNlcnQgdGV4dCBhbmQgSFRNTC4gKi9cblx0QElucHV0KClcblx0Z2V0IGlubmVySFRNTCgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBpbm5lckhUTUwodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGVmaW5lcyBhbiBvZmZzZXQoeCx5KSBmb3IgdGhlIElubGluZSBUb29sYmFyIHBvc2l0aW9uaW5nIG9uIHRoZSBwYWdlLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgaW5saW5lVG9vbGJhck9mZnNldCgpOiBudW1iZXJbXSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5pbmxpbmVUb29sYmFyT2Zmc2V0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBpbmxpbmVUb29sYmFyT2Zmc2V0KHZhbHVlOiBudW1iZXJbXSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5pbmxpbmVUb29sYmFyT2Zmc2V0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIGlmcmFtZSBzZXR0aW5ncyBvZiB0aGUgRWRpdG9yLiBXaGVuIGVuYWJsZWQgdGhlIGNvbnRlbnRzIG9mIHRoZSBFZGl0b3IgYXJlIHBsYWNlZCBpbnNpZGUgYW4gaWZyYW1lLCBpc29sYXRlZCBpbiBhIHNlcGFyYXRlIGRvbS4gVGhlIGVsZW1lbnQgYWxsb3dzIHRvIGluc2VydCBleHRlcm5hbCByZXNvdXJjZXMgaW50byB0aGUgaWZyYW1lIGlmIG5lZWRlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IGlmcmFtZVNldHRpbmdzKCk6IEVkaXRvcklmcmFtZVNldHRpbmdzIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmlmcmFtZVNldHRpbmdzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBpZnJhbWVTZXR0aW5ncyh2YWx1ZTogRWRpdG9ySWZyYW1lU2V0dGluZ3MpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaWZyYW1lU2V0dGluZ3MgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSBsYW5ndWFnZS4gVXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZSBwcm9wZXJ0eSBtZXNzYWdlcy4gICovXG5cdEBJbnB1dCgpXG5cdGdldCBsb2NhbGUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxvY2FsZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbG9jYWxlKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubG9jYWxlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgYSBsaW1pdCBvbiB0aGUgbnVtYmVyIG9mIGNoYXJzIGluc2lkZSB0aGUgRWRpdG9yLiAgKi9cblx0QElucHV0KClcblx0Z2V0IG1heENoYXJDb3VudCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubWF4Q2hhckNvdW50IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBtYXhDaGFyQ291bnQodmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5tYXhDaGFyQ291bnQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIGFuIG9iamVjdCBzcGVjaWZ5aW5nIHN0cmluZ3MgdXNlZCBpbiB0aGUgd2lkZ2V0IHRoYXQgY2FuIGJlIGxvY2FsaXplZC4gVXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZSBwcm9wZXJ0eSBsYW5ndWFnZS4gICovXG5cdEBJbnB1dCgpXG5cdGdldCBtZXNzYWdlcygpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubWVzc2FnZXMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG1lc3NhZ2VzKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubWVzc2FnZXMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBhIHRvIHRoZSBlbGVtZW50IHdoaWNoIGNhbiBiZSB1c2VkIHRvIHN1Ym1pdCB0aGUgdmFsdWUgb2YgdGhlIEVkaXRvciB2aWEgYSBmb3JtLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbmFtZSgpOiBzdHJpbmcgfCBudWxsIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm5hbWUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG5hbWUodmFsdWU6IHN0cmluZyB8IG51bGwpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubmFtZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBmb3JtYXQgb2YgdGhlIGNvbnRlbnQgdGhhdCB3aWxsIGJlIHBhc3RlZCBpbnNpZGUgdGhlIEVkaXRvci4gKi9cblx0QElucHV0KClcblx0Z2V0IHBhc3RlRm9ybWF0KCk6IFBhc3RlRm9ybWF0IHwgc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnBhc3RlRm9ybWF0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBwYXN0ZUZvcm1hdCh2YWx1ZTogUGFzdGVGb3JtYXQgfCBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucGFzdGVGb3JtYXQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgcGxhY2Vob2xkZXIgdGhhdCB3aWxsIGJlIHNob3duIHdoZW4gdGhlcmUncyBubyBjb250ZW50IGluc2lkZSB0aGUgRWRpdG9yLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcGxhY2Vob2xkZXIoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnBsYWNlaG9sZGVyIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBwbGFjZWhvbGRlcih2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnBsYWNlaG9sZGVyID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgd2hldGhlciB0aGUgY2xlYXJGb3JtYXQgdG9vbGJhciBhY3Rpb24gc2hvdWxkIGFsc28gcmVtb3ZlIGlubGluZSBzdHlsZXMgZnJvbSB0aGUgY3VycmVudGx5IHNlbGVjdGVkIG5vZGUuICovXG5cdEBJbnB1dCgpXG5cdGdldCByZW1vdmVTdHlsZXNPbkNsZWFyRm9ybWF0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmVtb3ZlU3R5bGVzT25DbGVhckZvcm1hdCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcmVtb3ZlU3R5bGVzT25DbGVhckZvcm1hdCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVTdHlsZXNPbkNsZWFyRm9ybWF0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgd2hldGhlciBFZGl0b3IncyBjb250ZW50IGlzIHJlcXVpcmVkIG90IG5vdC4gSWYgc2V0IGFuZCB0aGUgRWRpdG9yJ3MgY29udGVudCBpcyBlbXB0eSwgYSBub3RpZmljYXRpb24gd2lsbCBhcHBlYXIgdG8gbm90aWZ5IHRoYXQgdGhlIEVkaXRvciBjYW5ub3QgYmUgZW1wdHkuICovXG5cdEBJbnB1dCgpXG5cdGdldCByZXF1aXJlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlcXVpcmVkIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCByZXF1aXJlZCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZXF1aXJlZCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIHZhbHVlIGluZGljYXRpbmcgd2hldGhlciB0aGUgZWxlbWVudCBpcyBhbGlnbmVkIHRvIHN1cHBvcnQgbG9jYWxlcyB1c2luZyByaWdodC10by1sZWZ0IGZvbnRzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcmlnaHRUb0xlZnQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yaWdodFRvTGVmdCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcmlnaHRUb0xlZnQodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmlnaHRUb0xlZnQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSB2YWx1ZSBpcyBzYW5pdGl6ZWQgZnJvbSBYU1MgY29udGVudCBvciBub3QuIFdoZW4gZW5hYmxlZCBzY3JpcHRzIGFuZCBvdGhlciBYU1MgdnVsbmVyYWJpbGl0aWVzIGFyZSBub3QgYWxsb3dlZCB0byBleGlzdCBpbnNpZGUgdGhlIEVkaXRvcidzIGFzIEhUTUwgY29udGVudC4gKi9cblx0QElucHV0KClcblx0Z2V0IHNhbml0aXplZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNhbml0aXplZCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc2FuaXRpemVkKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNhbml0aXplZCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGNoYXIgY291bnRlciBpcyB2aXNpYmxlIG9yIG5vdC4gV2hlbiBlbmFibGVkIGl0IGlzIGRpc3BsYXllZCBpbiB0aGUgYm90dG9tIHJpZ2h0IGNvcm5lci4gSWYgbWF4Q2hhckNvdW50IGlzIHNldCBhbmQgdGhlIGNvbnRlbnQgY2hhcmFjdGVycyBhcmUgZXF1YWwgb3IgbW9yZSB0aGFuIDcwJSBvZiB0aGUgbWF4aW11bSBjaGFyIGNvdW50IHRoZSBjb3VudGVyIGlzIGNvbG9yZWQgaW4gb3JkZXIgdG8gd2FybiB0aGUgdXNlci4gSWYgdGhlIGNoYXIgY291bnQgaXMgZXF1YWwgb3IgbW9yZSB0aGFuIDkwJSB0aGUgY291bnRlciBpcyBhZ2FpbiBjb2xvcmVkIHdpdGggYSBkaWZmZXJlbnQgd2FybmluZyBjb2xvciB0byBpbmRpY2F0ZSB0aGF0IHRoZSBjb3VudGVyIGlzIG5lYXIgbWF4aW11bS4gV2hlbiBtYXhpbXVtIGlzIHJlYWNoZWQsIHRleHQgaW5wdXQgaXMgbm90IGFsbG93ZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBzaG93Q2hhckNvdW50KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2hvd0NoYXJDb3VudCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc2hvd0NoYXJDb3VudCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zaG93Q2hhckNvdW50ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgd2hldGhlciB0aGUgZWRpdG9yIG1heSBiZSBjaGVja2VkIGZvciBzcGVsbGluZyBlcnJvcnMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBzcGVsbENoZWNrKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc3BlbGxDaGVjayA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc3BlbGxDaGVjayh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zcGVsbENoZWNrID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIHJlZnJlc2ggaW50ZXJ2YWwgZm9yIHRoZSBTb3VyY2UgQ29kZS9QcmV2aWV3IFBhbmVsIHdoZW4gU3BsaXQgTW9kZSBpcyBlbmFibGVkLiAgKi9cblx0QElucHV0KClcblx0Z2V0IHNwbGl0TW9kZVJlZnJlc2hUaW1lb3V0KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zcGxpdE1vZGVSZWZyZXNoVGltZW91dCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc3BsaXRNb2RlUmVmcmVzaFRpbWVvdXQodmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zcGxpdE1vZGVSZWZyZXNoVGltZW91dCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIHVwbG9hZCBVUkwuIFRoaXMgcHJvcGVydHkgY29ycmVzcG9uZHMgdG8gdGhlIHVwbG9hZCBmb3JtJ3MgYWN0aW9uIGF0dHJpYnV0ZS4gRm9yIGV4YW1wbGUsIHRoZSB1cGxvYWRVcmwgcHJvcGVydHkgY2FuIHBvaW50IHRvIGEgUEhQIGZpbGUsIHdoaWNoIGhhbmRsZXMgdGhlIHVwbG9hZCBvcGVyYXRpb24gb24gdGhlIHNlcnZlci1zaWRlLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdXBsb2FkVXJsKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC51cGxvYWRVcmwgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHVwbG9hZFVybCh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnVwbG9hZFVybCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIHJlbW92ZSBVUkwuIFRoaXMgcHJvcGVydHkgY29ycmVzcG9uZHMgdG8gdGhlIGZvcm0ncyBhY3Rpb24gYXR0cmlidXRlLiBGb3IgZXhhbXBsZSwgdGhlIHJlbW92ZVVybCBwcm9wZXJ0eSBjYW4gcG9pbnQgdG8gYSBQSFAgZmlsZSwgd2hpY2ggaGFuZGxlcyB0aGUgcmVtb3ZlIG9wZXJhdGlvbiBvbiB0aGUgc2VydmVyLXNpZGUuICovXG5cdEBJbnB1dCgpXG5cdGdldCByZW1vdmVVcmwoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlbW92ZVVybCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcmVtb3ZlVXJsKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmVtb3ZlVXJsID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIHRoZW1lLiBUaGVtZSBkZWZpbmVzIHRoZSBsb29rIG9mIHRoZSBlbGVtZW50ICovXG5cdEBJbnB1dCgpXG5cdGdldCB0aGVtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGhlbWUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRoZW1lKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGhlbWUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgVG9vbGJhciBpdGVtcyBsaXN0LiBFYWNoIGl0ZW0gY2FuIGJlIHN0cmluZyBwb2ludGluZyB0byB0aGUgbmFtZSBvZiB0aGUgaXRlbSBvciBhbiBvYmplY3QgdGhhdCBkZWZpbmVzIGEgY3VzdG9tIGl0ZW0gb3IgYWRkcyBhZGl0aW9uYWwgc2V0dGluZ3MgdG8gYW4gaXRlbS4gVGhlIG5hbWUgb2YgdGhlIGl0ZW1zIGFyZSBjYXNlIGluc2Vuc2l0aXZlLiBBbiBvYmplY3QgZGVmaW5pdGlvbiBzaG91bGQgY29udGFpbiBhIG5hbWUgYXR0cmlidXRlIHRoYXQgcmVmZXJzIHRvIHRoZSBuYW1lIG9mIHRoZSBpdGVtIHdoZW4gbW9kaWZpbmcgYW4gZXhpc3RpbmcgdG9vbGJhciBpdGVtLiBUaGUgbmFtZSBhdHRyaWJ1dGUgZGV0ZXJtaW5lcyB0aGUgYWN0aW9uIG9mIHRoZSBpdGVtLiBJZiBzZXQgdG8gJ2N1c3RvbScgaXQgaXMgcG9zc2libGUgdG8gY3JlYXRlIGEgY3VzdG9tIHRvb2xiYXIgaXRlbS4gSWYgbmFtZSBhdHRyaWJ1dGUgaXMgbm90IHNldCBvciBub3QgdmFsaWQgaXQgaXMgdHJlYXRlZCBhcyBhIHNlcGFyYXRvciwgbm8gYSB0b29sYmFyIGl0ZW0uIFRoZSBmb2xsb3dpbmcgaXRlbXMgYXJlIHN1cHBvcnRlZCBieSBkZWZhdWx0IGJ5IHRoZSBFZGl0b3I6IFNvdXJjZUNvZGUgLSBzaG93cyB0aGUgSFRNTC9QcmV2aWV3IFBhbmVsIGJ5IGhpZGluZyB0aGUgaW5wdXQgcGFuZWwuIEl0ZW0gdHlwZSAtICdUb2dnbGUgYnV0dG9uJy5TcGxpdE1vZGUgLSBzaG93cyBib3RoIGlucHV0IGFuZCBIVE1ML1ByZXZpZXcgUGFuZWwgYnkgc3BsaXR0aW5nIHRoZSBFZGl0b3IgY29udGVudCBpbiB0d28gc2VjdGlvbnMuIEl0ZW0gdHlwZSAtICdUb2dnbGUgYnV0dG9uJ0Z1bGxTY3JlZW4gLSBmaXRzIHRoZSB2aWV3cG9ydCB3aXRoIHRoZSBFZGl0b3IgYnkgZXhwYW5kaW5nIGl0IG92ZXIgdGhlIHBhZ2UgY29udGVudC4gSXRlbSB0eXBlIC0gJ1RvZ2dsZSBidXR0b24nLkFsaWdubWVudCAtIGFsaWducyB0aGUgc2VsZWN0ZWQgY29udGVudC4gSXRlbSB0eXBlIC0gJ0Ryb3AgZG93bicuRm9udE5hbWUgLSBjaGFuZ2VzIHRoZSBmb250IGZhbWlseSBvZiB0aGUgc2VsZWN0ZWQgY29udGVudC4gSXRlbSB0eXBlIC0gJ2Ryb3AtZG93bicuRm9udFNpemUgLSBjaGFuZ2VzIHRoZSBmb250IHNpemUgb2YgdGhlIHNlbGVjdGVkIGNvbnRlbnQuIEl0ZW0gdHlwZSAtICdkcm9wLWRvd24nLkZvcm1hdHMgLSBjaGFuZ2VzIHRoZSBmb3JtYXQgb2YgdGhlIGN1cnJlbnQgc2VsZWN0aW9uLiBJdG1lIHR5cGUgLSAnZHJvcC1kb3duJy5UYWJsZVJvd3MgLSBhbGxvd3MgdG8gaW5zZXJ0L3JlbW92ZSBhIHJvdyBpbnRvIGEgc2VsZWN0ZWQgdGFibGUgZWxlbWVudC4gSXRlbSB0eXBlIC0gJ2Ryb3AtZG93bicuVGFibGVDb2x1bW5zIC0gYWxsb3dzIHRvIGluc2VydC9yZW1vdmUgYSBjb2x1bW4gaW50byBhIHNlbGVjdGVkIHRhYmxlIGVsZW1lbnQuIEl0bWUgdHlwZSAtICdkcm9wLWRvd24nLlRhYmxlVkFsaWduIC0gc2V0cyB0aGUgdmVydGljYWwgYWxpZ25tZW50IG9mIGEgc2VsZWN0ZWQgdGFibGUgY2VsbC4gSXRlbSB0eXBlIC0gJ2Ryb3AtZG93bicuVGFibGVTdHlsZSAtIHNldHMgYWRkaXRpb25hbCBzdHlsaW5nIHRvIGEgc2VsZWN0ZWQgdGFibGUgaW5zaWRlIHRoZSBFZGl0b3IuIEl0ZW0gdHlwZSAtICdkcm9wLWRvd24nLkJhY2tncm91bmRDb2xvciAtIGNoYW5nZXMgdGhlIGJhY2tncm91bmQgY29sb3Igb2YgdGhlIGN1cnJlbnQgc2VsZWN0aW9uLiBJdGVtIHR5cGUgLSAnY29sb3ItaW5wdXQnLkZvbnRDb2xvciAtIGNoYW5nZXMgdGhlIGZvbnQgY29sb3Igb2YgdGhlIGN1cnJlbnQgc2VsZWN0aW9uLiBJdGVtIHR5cGUgPSAnY29sb3ItaW5wdXQnLkJvbGQgLSBzZXRzIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgdGV4dCBhcyBib2xkIG9yIG5vdC4gSXRlbSB0eXBlIC0gJ2J1dHRvbicuSXRhbGljIC0gc2V0cyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHRleHQgYXMgaXRhbGljLiBJdGVtIHR5cGUgLSAnYnV0dG9uJy4gVW5kZXJsaW5lIC0gc2V0cyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHRleHQgYXMgdW5kZXJsaW5lZC4gSXRtZSB0eXBlIC0gJ2J1dHRvbicuU3RyaWtldGhyb3VnaCAtIHNldCB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHRleHQgYXMgc3RyaWtldGhyb3VnaC4gSXRlbSB0eXBlIC0gJ2J1dHRvbicuRGVsZXRlIC0gZGVsZXRlcyB0aGUgY3VycmVudCBzZWxlY3Rpb24uIEl0ZW0gdHlwZSAtICdidXR0b24nLlVuZG8gLSB1bmRvZXMgdGhlIGxhc3Qgb3BlcmF0aW9uLiBJdGVtIHR5cGUgLSAnYnV0dG9uJy5SZWRvIC0gcmVkb2VzIHRoZSBwcmV2aW91cyBvcGVyYXRpb24uIEl0ZW0gdHlwZSAtICdidXR0b24nLkluZGVudCAtIGluZGVudHMgdGhlIGN1cnJlbnQgc2VsZWN0aW9uIG9uY2UuIEl0ZW0gdHlwZSAtICdidXR0b24nLk91dGRlbnQgLSBvdXRkZW50cyB0aGUgY3VycmVudCBzZWxlY3Rpb24gb25jZS4gSXRlbSB0eXBlIC0gJ2J1dHRvbicuT3BlbkxpbmsgLSB0cmlnZ2VycyBhIGh5cGVybGluay4gSXRlbSB0eXBlIC0gJ2J1dHRvbicuRWRpdExpbmsgLSBjcmVhdGVzL2VkaXRzIHRoZSBzZWxlY3RlZCBoeXBlcmxpbmsuIEl0ZW0gdHlwZSAtICdidXR0b24nLkNyZWF0ZUxpbmsgLSBjcmVhdGVzL2VkaXRzIHRoZSBzZWxlY3RlZCBoeXBlcmxpbmsuIEl0ZW0gdHlwZSAtICdidXR0b24nLlJlbW92ZUxpbmsgLSByZW1vdmVzIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgaHlwZXJsaW5rLiBJdGVtIHR5cGUgLSAnYnV0dG9uJy5IeXBlcmxpbmsgLSBzYW1lIGFzIGNyZWF0ZUxpbmssIHRyaWdnZXJzIGEgRGlhbG9nIFdpbmRvdyBmb3IgbGluayBjcmVhdGlvbi4gSXRlbSB0eXBlIC0gJ2J1dHRvbicuQ3V0IC0gQ3V0cyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHRleHQuIEl0ZW0gdHlwZSAtICdidXR0b24nLkNvcHkgLSBjb3BpZXMgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCB0ZXh0LiBJdGVtIHR5cGUgLSAnYnV0dG9uJ1Bhc3RlIC0gcGFzdGVzIHRoZSBjdXJyZW5seSBjb3BpZWQvY3V0IHRleHQgZnJvbSB0aGUgQ2xpcGJvYXJkLiBJdGVtIHR5cGUgPSAnYnV0dG9uJyBvciAnZHJvcC1kb3duJyB3aGVuIGFkdmFuY2VkIGF0dHJpYnV0ZSBpcyBzZXQgdG8gJ3RydWUnLkltYWdlIC0gdHJpZ2dlcnMgYSBEaWFsb2cgV2luZG93IHRvIGluc2VydC9lZGl0IGFuIGltYWdlLiBJdGVtIHR5cGUgLSAnYnV0dG9uJy5WaWRlbyAtIHRyaWdnZXJzIGEgRGlhbG9nIFdpbmRvdyB0byBpbnNlcnQvZWRpdCBhIHZpZGVvLiBJdGVtIHR5cGUgLSAnYnV0dG9uJy5Mb3dlckNhc2UgLSBjaGFuZ2VzIHRoZSBjdXJyZW50IHNlbGVjdGlvbiB0byBsb3dlciBjYXNlLiBJdGVtIHR5cGUgLSAnYnV0dG9uJy5VcHBlckNhc2UgLSBjaGFuZ2VzIHRoZSBjdXJyZW50IHNlbGVjdGlvbiB0byB1cHBlciBjYXNlLiBJdGVtIHR5cGUgLSAnYnV0dG9uJy5QcmludCAtIG9wZW5zIHRoZSBicm93c2VyIHByaW50IHByZXZpZXcgd2luZG93LiBJdGVtIHR5cGUgLSAnYnV0dG9uJy5DYXB0aW9uIC0gaW5zZXJ0L3JlbW92ZSBhIGNhcHRpb24gd2hlbiBhIHRhYmxlIGlzIHNlbGVjdGVkLiBJdGVtIHR5cGUgLSAnYnV0dG9uJy5DbGVhckZvcm1hdCAtIHJlbW92ZXMgdGhlIGZvcm1hdHRpbmcgb2YgdGhlIGN1cnJudGx5IHNlbGVjdGVkIHRleHQuIEl0ZW0gdHlwZSAtICdidXR0b24nLlRhYmxlIC0gdHJpZ2dlcnMgYSBEaWFsb2cgV2luZG93IHRvIGluc2VydCBhIHRhYmxlLiBJdGVtIHR5cGUgLSAnYnV0dG9uJy5UYWJsZUhlYWRlciAtIGluc2VydC9yZW1vdmUgYSBoZWFkZXIgcm93IHRvIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgdGFibGUuIEl0ZW0gdHlwZSAtICdidXR0b24nLk9yZGVyZWRMaXN0IC0gaW5zZXJ0L3JlbW92ZSBhbiBvcmRlciBsaXN0LiBJdGVtIHR5cGUgPSAnYnV0dG9uJy5Vbm9yZGVyZWRMaXN0IC0gaW5zZXJ0L3JlbW92ZSBhbiB1bm9yZGVyZWQgbGlzdC4gSXRlbSB0eXBlIC0gJ2J1dHRvbicuU3Vic2NyaXB0IC0gY2hhbmdlcyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHRleHQgdG8gc3Vic2NyaXB0LiBJdGVtIHR5cGUgLSAnYnV0dG9uJy5TdXBlcnNjcmlwdCAtIGNoYW5nZXMgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCB0ZXh0IHRvIHN1cGVyc2NyaXB0LiBJdGVtIHR5cGUgLSAnYnV0dG9uJy5GaW5kQW5kUmVwbGFjZSAtIG9wZW5zIGEgZGlhbG9nIHRoYXQgYWxsb3dzIHRvIGZpbmQgYW5kIHJlcGxhY2UgdGV4dCBpbnNpZGUgdGhlIEVkaXRvcidzIGNvbnRlbnQgc2VjdGlvbi4gSXRlbSB0eXBlIC0gJ2J1dHRvbicuICBUaGUgaW5saW5lVG9vbGJhckl0ZW1zIGF0dHJpYnV0ZSBpcyBhcHBsaWNhYmxlIG9ubHkgdG8gdGhlIGZvbGxvd2luZyBpdGVtczogJ3RhYmxlJywgJ2ltYWdlJywgJ2h5cGVybGluaycuIEl0IGFjY2VwdHMgdGhlIHNhbWUgdHlwZSBvZiB2YWx1ZSBhcyB0b29sYmFySXRlbXMgcHJvcGVydHkgYnV0IHRoZSB0b29sYmFyIGl0ZW1zIHdpbGwgYmUgcGxhY2VkIGluc2luZGUgdGhlIElubGluZSBUb29sYmFyIGluc3RlYWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCB0b29sYmFySXRlbXMoKTogVG9vbGJhckl0ZW1bXSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50b29sYmFySXRlbXMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRvb2xiYXJJdGVtcyh2YWx1ZTogVG9vbGJhckl0ZW1bXSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50b29sYmFySXRlbXMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgdG9vbGJhciBtb2RlIG9mIHRoZSBFZGl0b3IuIFRoZSBtYWluIHRvb2xiYXIgb2YgdGhlIEVkaXRvciBjYW4gYXBwZWFyIGFzIGEgUmliYm9uIG9yIGFzIGEgTWVudS4gKi9cblx0QElucHV0KClcblx0Z2V0IHRvb2xiYXJNb2RlKCk6IFRvb2xiYXJNb2RlIHwgc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRvb2xiYXJNb2RlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0b29sYmFyTW9kZSh2YWx1ZTogVG9vbGJhck1vZGUgfCBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudG9vbGJhck1vZGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQWxsb3dzIHRvIGNvbmZpZ3VyZSB0aGUgU2luZ2xlTGluZVJpYmJvbiBhcHBlYXJhbmNlIGJ5IGNoYW5naW5nIHRoZSBvcmRlciBhbmQgaXRlbXMgb2YgdGhlIGdyb3Vwcy4gKi9cblx0QElucHV0KClcblx0Z2V0IHRvb2xiYXJSaWJib25Db25maWcoKTogeyBuYW1lOiBzdHJpbmcsIGdyb3VwczogeyBuYW1lOiBzdHJpbmcsIGl0ZW1zOiBzdHJpbmdbXSB9W10gfVtdIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRvb2xiYXJSaWJib25Db25maWcgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRvb2xiYXJSaWJib25Db25maWcodmFsdWU6IHsgbmFtZTogc3RyaW5nLCBncm91cHM6IHsgbmFtZTogc3RyaW5nLCBpdGVtczogc3RyaW5nW10gfVtdIH1bXSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50b29sYmFyUmliYm9uQ29uZmlnID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIGZvcm1hdCBvZiB0aGUgY29udGVudCB0aGF0IHdpbGwgYmUgcGFzdGVkIGluc2lkZSB0aGUgRWRpdG9yLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdG9vbGJhclZpZXdNb2RlKCk6IFRvb2xiYXJWaWV3TW9kZSB8IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50b29sYmFyVmlld01vZGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRvb2xiYXJWaWV3TW9kZSh2YWx1ZTogVG9vbGJhclZpZXdNb2RlIHwgc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRvb2xiYXJWaWV3TW9kZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTdGlja3MgdGhlIFRvb2xiYXIgdG8gdGhlIHRvcCBvZiB0aGUgd2luZG93IGFuZCBzdGF5cyB0aGVyZSB3aGlsZSBzY3JvbGxpbmcuICovXG5cdEBJbnB1dCgpXG5cdGdldCB0b29sYmFyU3RpY2t5KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudG9vbGJhclN0aWNreSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdG9vbGJhclN0aWNreSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50b29sYmFyU3RpY2t5ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIElmIGlzIHNldCB0byB0cnVlLCB0aGUgZWxlbWVudCBjYW5ub3QgYmUgZm9jdXNlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IHVuZm9jdXNhYmxlKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudW5mb2N1c2FibGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHVuZm9jdXNhYmxlKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnVuZm9jdXNhYmxlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgdmFsdWUgb2YgdGhlIEVkaXRvci4gKi9cblx0QElucHV0KClcblx0Z2V0IHZhbHVlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC52YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdmFsdWUodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC52YWx1ZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHVzZWQgdG8gY29tcGxldGx5IGN1c3RvbWl6ZSB0aGUgRWRpdG9yIGRpYWxvZyB0aGF0IGlzIHVzZWQgdG8gaW5zZXJ0L2VkaXQgdGFibGVzL2ltYWdlcy92aWRlb3MvaHlwZXJsaW5rcy4gVGhlIGZ1bmN0aW9uIGFjY2VwdHMgdHdvIGFyZ3VtZW50czogdGFyZ2V0IC0gdGhlIHRhcmdldCBkaWFsb2cgdGhhdCBpcyBhYm91dCB0byBiZSBvcGVuZWQuaXRlbSAtIHRoZSB0b29sYmFyIGl0ZW0gb2JqZWN0IHRoYXQgdHJpZ2dlciB0aGUgZGlhbG9nLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgd2luZG93Q3VzdG9taXphdGlvbkZ1bmN0aW9uKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC53aW5kb3dDdXN0b21pemF0aW9uRnVuY3Rpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHdpbmRvd0N1c3RvbWl6YXRpb25GdW5jdGlvbih2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LndpbmRvd0N1c3RvbWl6YXRpb25GdW5jdGlvbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCBvbiBibHVyIGlmIHRoZSBjb250ZW50IGlzIGNoYW5nZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0b2xkVmFsdWUsIFx0dmFsdWUpXG5cdCogICBvbGRWYWx1ZSAtIFRoZSBvbGQgdmFsdWUgYmVmb3JlIHRoZSBjaGFuZ2UuXG5cdCogICB2YWx1ZSAtIFRoZSBuZXcgdmFsdWUgYWZ0ZXIgdGhlIGNoYW5nZS5cblx0Ki9cblx0QE91dHB1dCgpIG9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgYWZ0ZXIgdXNlciBpbnB1dCB0byBpbmRpY2F0ZSB0aGF0IHRoZSBjb250ZW50IGlzIGNoYW5nZWQgdmlhIHVzZXIgaW50ZXJhY3Rpb24uXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0b2xkVmFsdWUsIFx0dmFsdWUpXG5cdCogICBvbGRWYWx1ZSAtIFRoZSBvbGQgdmFsdWUgYmVmb3JlIHRoZSBpbnB1dCBjaGFuZ2UuXG5cdCogICB2YWx1ZSAtIFRoZSBuZXcgdmFsdWUgYWZ0ZXIgdGhlIGlucHV0IGNoYW5nZS5cblx0Ki9cblx0QE91dHB1dCgpIG9uQ2hhbmdpbmc6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCBiZWZvcmUgYSBUb29sYmFyIGFjdGlvbiBpcyBzdGFydGVkLiBUaGUgZXZlbnQgY2FuIGJlIGNhbmNlbGVkIHZpYSBldmVudC5wcmV2ZW50RGVmYXVsdCgpLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdG5hbWUpXG5cdCogICBuYW1lIC0gVGhlIG5hbWUgb2YgdGhlIGFjdGlvbi5cblx0Ki9cblx0QE91dHB1dCgpIG9uQWN0aW9uU3RhcnQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgVG9vbGJhciBhY3Rpb24gaGFzIGVuZGVkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdG5hbWUpXG5cdCogICBuYW1lIC0gVGhlIG5hbWUgb2YgdGhlIGFjdGlvbi5cblx0Ki9cblx0QE91dHB1dCgpIG9uQWN0aW9uRW5kOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIENvbnRleHQgbWVudSBpdGVtIGhhcyBiZWVuIGNsaWNrZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0b3JpZ2luYWxFdmVudCwgXHR2YWx1ZSlcblx0KiAgIG9yaWdpbmFsRXZlbnQgLSBUaGUgb3JpZ2luYWwgY2xpY2sgZXZlbnQuXG5cdCogICB2YWx1ZSAtIFRoZSB2YWx1ZSBvZiB0aGUgaXRlbS5cblx0Ki9cblx0QE91dHB1dCgpIG9uQ29udGV4dE1lbnVJdGVtQ2xpY2s6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBDb250ZXh0IE1lbnUgaXMgb3BlbmVkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHRhcmdldCwgXHRvd25lcilcblx0KiAgIHRhcmdldCAtIFRoZSB0b29sYmFyIHRoYXQgaXMgdGhlIHRhcmdldCBvZiB0aGUgb3BlcmF0aW9uLlxuXHQqICAgb3duZXIgLSBUaGUgdG9vbHRpcCB0YXJnZXQgKHRoZSBvd25lciBvZiB0aGUgdG9vbHRpcCkuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkNvbnRleHRNZW51T3BlbjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIENvbnRleHQgTWVudSBpcyBvcGVuaW5nLiBUaGUgb3BlbmluZyBvcGVyYXRpb24gY2FuIGJlIGNhbmNlbGVkIHZpYSBldmVudC5wcmV2ZW50RGVmYXVsdCgpLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHRhcmdldClcblx0KiAgIHRhcmdldCAtIFRoZSB0b29sYmFyIHRoYXQgaXMgdGhlIHRhcmdldCBvZiB0aGUgb3BlcmF0aW9uLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25Db250ZXh0TWVudU9wZW5pbmc6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBDb250ZXh0IE1lbnUgaXMgY2xvc2VkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHRhcmdldCwgXHRvd25lcilcblx0KiAgIHRhcmdldCAtIFRoZSB0b29sYmFyIHRoYXQgaXMgdGhlIHRhcmdldCBvZiB0aGUgb3BlcmF0aW9uLlxuXHQqICAgb3duZXIgLSBUaGUgdG9vbHRpcCB0YXJnZXQgKHRoZSBvd25lciBvZiB0aGUgdG9vbHRpcCkuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkNvbnRleHRNZW51Q2xvc2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBDb250ZXh0IE1lbnUgaXMgY2xvc2luZy4gVGhlIGNsb3Npbmcgb3BlcmF0aW9uIGNhbiBiZSBjYW5jZWxlZCB2aWEgZXZlbnQucHJldmVudERlZmF1bHQoKS5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHR0YXJnZXQpXG5cdCogICB0YXJnZXQgLSBUaGUgdG9vbGJhciB0aGF0IGlzIHRoZSB0YXJnZXQgb2YgdGhlIG9wZXJhdGlvbi5cblx0Ki9cblx0QE91dHB1dCgpIG9uQ29udGV4dE1lbnVDbG9zaW5nOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhbiBpbWFnZS90YWJsZS92aWRlbyByZXNpemluZyBoYXMgc3RhcnRlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvblJlc2l6ZVN0YXJ0OiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhbiBpbWFnZS90YWJsZS92aWRlbyByZXNpemluZyBoYXMgZW5kZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dGFyZ2V0KVxuXHQqICAgdGFyZ2V0IC0gVGhlIGVsZW1lbnQgdGhhdCBpcyByZXNpemVkIChpbWFnZS90YWJsZSBvciB2aWRlbykuXG5cdCovXG5cdEBPdXRwdXQoKSBvblJlc2l6ZUVuZDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGlubGluZSBUb29sYmFyIGlzIG9wZW5lZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHR0YXJnZXQsIFx0b3duZXIpXG5cdCogICB0YXJnZXQgLSBUaGUgdG9vbGJhciB0aGF0IGlzIHRoZSB0YXJnZXQgb2YgdGhlIG9wZXJhdGlvbi5cblx0KiAgIG93bmVyIC0gVGhlIHRvb2x0aXAgdGFyZ2V0ICh0aGUgb3duZXIgb2YgdGhlIHRvb2x0aXApLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25JbmxpbmVUb29sYmFyT3BlbjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGlubGluZSBUb29sYmFyIGlzIG9wZW5pbmcuIFRoZSBvcGVuaW5nIG9wZXJhdGlvbiBjYW4gYmUgY2FuY2VsZWQgYnkgY2FsbGluZyBldmVudC5wcmV2ZW50RGVmYXVsdCgpIGluIHRoZSBldmVudCBoYW5kbGVyIGZ1bmN0aW9uLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHRhcmdldClcblx0KiAgIHRhcmdldCAtIFRoZSB0b29sYmFyIHRoYXQgaXMgdGhlIHRhcmdldCBvZiB0aGUgb3BlcmF0aW9uLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25JbmxpbmVUb29sYmFyT3BlbmluZzogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGlubGluZSBUb29sYmFyIGlzIGNsb3NlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHR0YXJnZXQsIFx0b3duZXIpXG5cdCogICB0YXJnZXQgLSBUaGUgdG9vbGJhciB0aGF0IGlzIHRoZSB0YXJnZXQgb2YgdGhlIG9wZXJhdGlvbi5cblx0KiAgIG93bmVyIC0gVGhlIHRvb2x0aXAgdGFyZ2V0ICh0aGUgb3duZXIgb2YgdGhlIHRvb2x0aXApLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25JbmxpbmVUb29sYmFyQ2xvc2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBpbmxpbmUgVG9vbGJhciBpcyBjbG9zaW5nLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHRhcmdldClcblx0KiAgIHRhcmdldCAtIFRoZSB0b29sYmFyIHRoYXQgaXMgdGhlIHRhcmdldCBvZiB0aGUgb3BlcmF0aW9uLiBUaGUgY2xvc2luZyBvcGVyYXRpb24gY2FuIGJlIGNhbmNlbGVkIGJ5IGNhbGxpbmcgZXZlbnQucHJldmVudERlZmF1bHQoKSBpbiB0aGUgZXZlbnQgaGFuZGxlciBmdW5jdGlvbi5cblx0Ki9cblx0QE91dHB1dCgpIG9uSW5saW5lVG9vbGJhckNsb3Npbmc6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBEcm9wIERvd24gVG9vbGJhciBpcyBvcGVuZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dGFyZ2V0LCBcdG93bmVyKVxuXHQqICAgdGFyZ2V0IC0gVGhlIHRvb2xiYXIgdGhhdCBpcyB0aGUgdGFyZ2V0IG9mIHRoZSBvcGVyYXRpb24uXG5cdCogICBvd25lciAtIFRoZSB0b29sdGlwIHRhcmdldCAodGhlIG93bmVyIG9mIHRoZSB0b29sdGlwKS5cblx0Ki9cblx0QE91dHB1dCgpIG9uRHJvcERvd25Ub29sYmFyT3BlbjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIERyb3AgRG93biBUb29sYmFyIGlzIG9wZW5pbmcuIFRoZSBvcGVuaW5nIG9wZXJhdGlvbiBjYW4gYmUgY2FuY2VsZWQgYnkgY2FsbGluZyBldmVudC5wcmV2ZW50RGVmYXVsdCgpIGluIHRoZSBldmVudCBoYW5kbGVyIGZ1bmN0aW9uLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHRhcmdldClcblx0KiAgIHRhcmdldCAtIFRoZSB0b29sYmFyIHRoYXQgaXMgdGhlIHRhcmdldCBvZiB0aGUgb3BlcmF0aW9uLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25Ecm9wRG93blRvb2xiYXJPcGVuaW5nOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgRHJvcCBEb3duIFRvb2xiYXIgaXMgY2xvc2VkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHRhcmdldCwgXHRvd25lcilcblx0KiAgIHRhcmdldCAtIFRoZSB0b29sYmFyIHRoYXQgaXMgdGhlIHRhcmdldCBvZiB0aGUgb3BlcmF0aW9uLlxuXHQqICAgb3duZXIgLSBUaGUgdG9vbHRpcCB0YXJnZXQgKHRoZSBvd25lciBvZiB0aGUgdG9vbHRpcCkuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkRyb3BEb3duVG9vbGJhckNsb3NlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgRHJvcCBEb3duIFRvb2xiYXIgaXMgY2xvc2luZy4gVGhlIGNsb3Npbmcgb3BlcmF0aW9uIGNhbiBiZSBjYW5jZWxlZCBieSBjYWxsaW5nIGV2ZW50LnByZXZlbnREZWZhdWx0KCkgaW4gdGhlIGV2ZW50IGhhbmRsZXIgZnVuY3Rpb24uXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dGFyZ2V0KVxuXHQqICAgdGFyZ2V0IC0gVGhlIHRvb2xiYXIgdGhhdCBpcyB0aGUgdGFyZ2V0IG9mIHRoZSBvcGVyYXRpb24uXG5cdCovXG5cdEBPdXRwdXQoKSBvbkRyb3BEb3duVG9vbGJhckNsb3Npbmc6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB0aGUgRGlhbG9nIFdpbmRvdyBpcyBvcGVuZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dGFyZ2V0LCBcdGl0ZW0pXG5cdCogICB0YXJnZXQgLSBUaGUgd2luZG93IHRoYXQgaXMgdGhlIHRhcmdldCBvZiB0aGUgb3BlcmF0aW9uLlxuXHQqICAgaXRlbSAtIFRoZSB0b29sYmFyIGl0ZW0gaXMgdGhlIHRhcmdldCBvZiB0aGUgb3BlcmF0aW9uLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25EaWFsb2dPcGVuOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgYmVmb3JlIHRoZSBEaWFsb2cgV2luZG93IGlzIG9wZW5lZC4gVGhlIGV2ZW50IGNhbiBiZSBwcmV2ZW50ZWQgdmlhIGV2ZW50LnByZXZlbnREZWZhdWx0KCkuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dGFyZ2V0LCBcdGl0ZW0pXG5cdCogICB0YXJnZXQgLSBUaGUgd2luZG93IHRoYXQgaXMgdGhlIHRhcmdldCBvZiB0aGUgb3BlcmF0aW9uLlxuXHQqICAgaXRlbSAtIFRoZSB0b29sYmFyIGl0ZW0gdGhhdCBpcyB0aGUgdGFyZ2V0IG9mIHRoZSBvcGVyYXRpb24uXG5cdCovXG5cdEBPdXRwdXQoKSBvbkRpYWxvZ09wZW5pbmc6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBEaWFsb2cgV2luZG93IGlzIGNsb3NlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHR0YXJnZXQsIFx0aXRlbSlcblx0KiAgIHRhcmdldCAtIFRoZSB3aW5kb3cgdGhhdCBpcyB0aGUgdGFyZ2V0IG9mIHRoZSBvcGVyYXRpb24uXG5cdCogICBpdGVtIC0gVGhlIHRvb2xiYXIgaXRlbSB0aGF0IGlzIHRoZSB0YXJnZXQgb2YgdGhlIG9wZXJhdGlvbi5cblx0Ki9cblx0QE91dHB1dCgpIG9uRGlhbG9nQ2xvc2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCBiZWZvcmUgdGhlIERpYWxvZyBXaW5kb3cgaXMgY2xvc2luZy4gVGhlIGV2ZW50IGNhbiBiZSBwcmV2ZW50ZWQgdmlhIGV2ZW50LnByZXZlbnREZWZhdWx0KCkuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dGFyZ2V0LCBcdGl0ZW0pXG5cdCogICB0YXJnZXQgLSBUaGUgd2luZG93IHRoYXQgaXMgdGhlIHRhcmdldCBvZiB0aGUgb3BlcmF0aW9uLlxuXHQqICAgaXRlbSAtIFRoZSB0b29sYmFyIGl0ZW0gdGhhdCBpcyB0aGUgdGFyZ2V0IG9mIHRoZSBvcGVyYXRpb24uXG5cdCovXG5cdEBPdXRwdXQoKSBvbkRpYWxvZ0Nsb3Npbmc6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSB1cGxvYWRpbmcgb2YgYW4gaW1hZ2UvdmlkZW8gaXMgc3VjY2Vzc2Z1bC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHR0YXJnZXQsIFx0aXRlbSwgXHRmaWxlbmFtZSwgXHR0eXBlLCBcdHNpemUsIFx0aW5kZXgsIFx0c3RhdHVzLCBcdHNlcnZlclJlc3BvbnNlKVxuXHQqICAgdGFyZ2V0IC0gVGhlIGZpbGUgdXBsb2FkIGVsZW1lbnQgdGhhdCBpcyB0aGUgdGFyZ2V0IG9mIHRoZSBvcGVyYXRpb24uXG5cdCogICBpdGVtIC0gVGhlIHRvb2xiYXIgaXRlbSB0aGF0IGlzIHRoZSB0YXJnZXQgb2YgdGhlIG9wZXJhdGlvbi5cblx0KiAgIGZpbGVuYW1lIC0gVGhlIG5hbWUgb2YgdGhlIHVwbG9hZGVkIGZpbGUuXG5cdCogICB0eXBlIC0gVGhlIHR5cGUgb2YgdGhlIHVwbG9hZGVkIGZpbGUuXG5cdCogICBzaXplIC0gVGhlIHNpemUgb2YgdGhlIHVwbG9hZGVkIGZpbGUuXG5cdCogICBpbmRleCAtIFRoZSBpbmRleCBvZiB0aGUgdXBsb2FkZWQgZmlsZS5cblx0KiAgIHN0YXR1cyAtIFRoZSBzdGF0dXMgb2YgdGhlIHVwbG9hZGVkIGZpbGUuIFdoZXRoZXIgdGhlcmUgd2FzIGFuIGVycm9yIG9yIHN1Y2Nlc3MuXG5cdCogICBzZXJ2ZXJSZXNwb25zZSAtIFRoZSByZXNwb25zZSBvZiB0aGUgcmVtb3RlIHNlcnZlci5cblx0Ki9cblx0QE91dHB1dCgpIG9uSW1hZ2VVcGxvYWRTdWNjZXNzOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgdXBsb2FkaW5nIG9mIGFuIGltYWdlL3ZpZGVvIGlzIHVuc3VjY2Vzc2Z1bC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHR0YXJnZXQsIFx0aXRlbSwgXHRmaWxlbmFtZSwgXHR0eXBlLCBcdHNpemUsIFx0aW5kZXgsIFx0c3RhdHVzLCBcdHNlcnZlclJlc3BvbnNlKVxuXHQqICAgdGFyZ2V0IC0gVGhlIGZpbGUgdXBsb2FkIGVsZW1lbnQgdGhhdCBpcyB0aGUgdGFyZ2V0IG9mIHRoZSBvcGVyYXRpb24uXG5cdCogICBpdGVtIC0gVGhlIHRvb2xiYXIgaXRlbSB0aGF0IGlzIHRoZSB0YXJnZXQgb2YgdGhlIG9wZXJhdGlvbi5cblx0KiAgIGZpbGVuYW1lIC0gVGhlIG5hbWUgb2YgdGhlIGNhbmNlbGVkIGZpbGUuXG5cdCogICB0eXBlIC0gVGhlIHR5cGUgb2YgdGhlIGNhbmNlbGVkIGZpbGUuXG5cdCogICBzaXplIC0gVGhlIHNpemUgb2YgdGhlIGNhbmNlbGVkIGZpbGUuXG5cdCogICBpbmRleCAtIFRoZSBpbmRleCBvZiB0aGUgY2FuY2VsZWQgZmlsZS5cblx0KiAgIHN0YXR1cyAtIFRoZSBzdGF0dXMgb2YgdGhlIHVwbG9hZGVkIGZpbGUuIFdoZXRoZXIgdGhlcmUgd2FzIGFuIGVycm9yIG9yIHN1Y2Nlc3MuXG5cdCogICBzZXJ2ZXJSZXNwb25zZSAtIFRoZSByZXNwb25zZSBvZiB0aGUgcmVtb3RlIHNlcnZlci5cblx0Ki9cblx0QE91dHB1dCgpIG9uSW1hZ2VVcGxvYWRGYWlsZWQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgVG9vbGJhciBpdGVtIGlzIGNsaWNrZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0b3JpZ2luYWxFdmVudCwgXHR2YWx1ZSlcblx0KiAgIG9yaWdpbmFsRXZlbnQgLSBUaGUgb3JpZ2luYWwgY2xpY2sgZXZlbnQuXG5cdCogICB2YWx1ZSAtIFRoZSBuYW1lIG9mIHRoZSB0b29sYmFyIGl0ZW0gdGhhdCB3YXMgY2xpY2tlZC5cblx0Ki9cblx0QE91dHB1dCgpIG9uVG9vYmFySXRlbUNsaWNrOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIG1lc3NhZ2UgaXMgY2xvc2VkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGluc3RhbmNlKVxuXHQqICAgaW5zdGFuY2UgLSBUaGUgdG9hc3QgaXRlbSB0aGF0IGlzIHRoZSB0YXJnZXQgb2YgdGhlIG9wZXJhdGlvbi5cblx0Ki9cblx0QE91dHB1dCgpIG9uTWVzc2FnZUNsb3NlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIG1lc3NhZ2UgaXMgb3BlbmVkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGluc3RhbmNlKVxuXHQqICAgaW5zdGFuY2UgLSBUaGUgdG9hc3QgaXRlbSB0aGF0IGlzIHRoZSB0YXJnZXQgb2YgdGhlIG9wZXJhdGlvbi5cblx0Ki9cblx0QE91dHB1dCgpIG9uTWVzc2FnZU9wZW46IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBCbHVycyB0aGUgY29udGVudCBvZiB0aGUgRWRpdG9yLiBcblx0Ki9cbiAgICBwdWJsaWMgYmx1cigpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmJsdXIoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ2xlYXJzIHRoZSBjb250ZW50IG9mIHRoZSBFZGl0b3IuIFxuXHQqL1xuICAgIHB1YmxpYyBjbGVhckNvbnRlbnQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNsZWFyQ29udGVudCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNsZWFyQ29udGVudCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDb2xsYXBzZSB0aGUgVG9vbGJhciBpZiB0aGUgdG9vbGJhclZpZXdNb2RlIGlzIHNldCB0byAndG9nZ2xlJy4gXG5cdCovXG4gICAgcHVibGljIGNvbGxhcHNlVG9vbGJhcigpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sbGFwc2VUb29sYmFyKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sbGFwc2VUb29sYmFyKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERpc2FibGVzIGEgVG9vbGJhciBpdGVtLiBcblx0KiBAcGFyYW0ge3N0cmluZ30gaXRlbU5hbWUuIFRoZSBuYW1lIG9mIHRoZSB0b29sYmFyIGl0ZW0gdG8gZGlzYWJsZS5cblx0Ki9cbiAgICBwdWJsaWMgZGlzYWJsZVRvb2xiYXJJdGVtKGl0ZW1OYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZVRvb2xiYXJJdGVtKGl0ZW1OYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlVG9vbGJhckl0ZW0oaXRlbU5hbWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFeHBhbmQgdGhlIFRvb2xiYXIgaWYgdGhlIHRvb2xiYXJWaWV3TW9kZSBpcyBzZXQgdG8gJ3RvZ2dsZScuIFxuXHQqL1xuICAgIHB1YmxpYyBleHBhbmRUb29sYmFyKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5leHBhbmRUb29sYmFyKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZXhwYW5kVG9vbGJhcigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFbmFibGVzIGEgcHJldmlvdXNseSBkaXNhYmxlZCBUb29sYmFyIGl0ZW0uIFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBpdGVtTmFtZS4gVGhlIG5hbWUgb2YgdGhlIHRvb2xiYXIgaXRlbSB0byBlbmFibGUuXG5cdCovXG4gICAgcHVibGljIGVuYWJsZVRvb2xiYXJJdGVtKGl0ZW1OYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZW5hYmxlVG9vbGJhckl0ZW0oaXRlbU5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmVuYWJsZVRvb2xiYXJJdGVtKGl0ZW1OYW1lKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRXhlY3V0ZXMgYSBjb21tYW5kIHZpYSB0aGUgbmF0aXZlIGV4ZWNDb21tYW5kIG1ldGhvZC4gVGhlIG1ldGhvZCByZXR1cm5zIHRydWUgb3IgZmFsc2UgZGVwZW5kaW5nIG9uIHdoZXRoZXIgdGhlIGV4ZWN1dGlvbiB3YXMgc3VjY2Vzc2Z1bCBvciBub3QuIFRoZSBmb2xsb3dpbmcgbGlzdCBvZiBjb21tYW5kcyBjYW4gYmUgZWV4ZWN1dGVkOiBib2xkIC0gbWFrZXMgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBjb250ZW50IGJvbGQuIEV4YW1wbGU6IGVkaXRvci5leGVjdXRlQ29tbWFuZCgnYm9sZCcpO2l0YWxpYyAtIG1ha2VzIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgY29udGVudCBpdGFsaWMuIEV4YW1wbGU6IGVkaXRvci5leGVjdXRlQ29tbWFuZCgnaXRhbGljJyk7dW5kZWxpbmVkIC0gbWFrZXMgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBjb250ZW50IHVuZGVybGluZWQuIEV4YW1wbGU6IGVkaXRvci5leGVjdXRlQ29tbWFuZCgndW5kZXJsaW5lJyk7c3RyaWtlVGhyb3VnaCAtIGFwcGxpZXMgYSBzaW5nbGUgbGluZSBzdHJpa2UgdGhyb3VnaCBmb3JtYXR0aW5nIHRvIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgY29udGVudC4gRXhhbXBsZTogZWRpdG9yLmV4ZWN1dGVDb21tYW5kKCdzdHJpa2VUaHJvdWdoJyk7c3VwZXJzY3JpcHQgLSBzZXRzIHRoZSBzZWxlY3RlZCBjb250ZW50IGFzIHN1cGVyc2NyaXB0LiBFeGFtcGxlOiBlZGl0b3IuZXhlY3V0ZUNvbW1hbmQoJ3N1cGVyc2NyaXB0Jyk7c3Vic2NyaXB0IC0gc2V0cyB0aGUgc2VsZWN0ZWQgY29udGVudCBhcyBzdXBlcnNjcmlwdC4gRXhhbXBsZTogZWRpdG9yLmV4ZWN1dGVDb21tYW5kKCdzdWJzY3JpcHQnKTt1cHBlcmNhc2UgLSBjaGFuZ2VzIHRoZSBjYXNlIG9mIHRoZSBjdXJyZW50IHNlbGVjdGlvbiB0byB1cHBlci4gRXhhbXBsZTogZWRpdG9yLmV4ZWN1dGVDb21tYW5kKCd1cHBlcmNhc2UnKTtsb3dlcmNhc2UgLSBjaGFuZ2VzIHRoZSBjYXNlIG9mIHRoZSBjdXJyZW50IHNlbGVjdGlvbiB0byBsb3dlci4gRXhhbXBsZTogZWRpdG9yLmV4ZWN1dGVDb21tYW5kKCdsb3dlcmNhc2UnKTtmb3JlQ29sb3IgLSBjaGFuZ2VzIHRoZSBmb250IGNvbG9yIG9mIHRoZSBjdXJyZW50IGNvbnRlbnQgc2VsZWN0aW9uLiBFeGFtcGxlOiBlZGl0b3IuZXhlY3V0ZUNvbW1hbmQoJ2ZvcmVDb2xvcicsICcjMDAwMDAwJyk7Zm9udE5hbWUgLSBjaGFuZ2VzIHRoZSBmb250IG5hbWUgZm9yIHRoZSBzZWxlY3RlZCBjb250ZW50LiBFeGFtcGxlOiBlZGl0b3IuZXhlY3V0ZUNvbW1hbmQoJ2ZvbnROYW1lJywgJ0FyaWFsJyk7Zm9udFNpemUgLSBjaGFuZ2VzIHRoZSBmb250IHNpemUgb2YgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBjb250ZW50LiBFeGFtcGxlOiBlZGl0b3IuZXhlY3V0ZUNvbW1hbmQoJ2ZvbnRTaXplJywgJzE1cHgnKTtoaWxpdGVDb2xvciAtIGNoYW5nZXMgdGhlIGJhY2tncm91bmQgY29sb3Igb2YgY3VycmVudCBzZWxlY3Rpb24uIEV4YW1wbGU6IGVkaXRvci5leGVjdXRlQ29tbWFuZCgnaGlsaXRlQ29sb3InLCAnIzAwMDAwMCcpO2p1c3RpZnlDZW50ZXIgLSBhbGlnbnMgdGhlIGNvbnRlbnQgdG8gdGhlIGNlbnRlci4gRXhhbXBsZTogZWRpdG9yLmV4ZWN1dGVDb21tYW5kKCdqdXN0aWZ5Q2VudGVyJyk7anVzdGlmeUZ1bGwgLSBhbGlnbnMgdGhlIGNvbnRlbnQgdG8gYmUgZnVsbHkganVzdGlmaWVkLiBFeGFtcGxlOiBlZGl0b3IuZXhlY3V0ZUNvbW1hbmQoJ2p1c3RpZnlGdWxsJyk7anVzdGlmeUxlZnQgLSBhbGlnbnMgdGhlIGNvbnRlbnQgdG8gdGhlIGxlZnQuIEV4YW1wbGU6IGVkaXRvci5leGVjdXRlQ29tbWFuZCgnanVzdGlmeUxlZnQnKTtqdXN0aWZ5UmlnaHQgLSBhbGlnbnMgdGhlIGNvbnRlbnQgdG8gdGhlIHJpZ2h0LiBFeGFtcGxlOiBlZGl0b3IuZXhlY3V0ZUNvbW1hbmQoJ2p1c3RpZnlSaWdodCcpO3VuZG8gLSBhbGxvd3MgdG8gdW5kbyB0aGUgcHJldmlvdXMgYWN0aW9uLiBFeGFtcGxlOiBlZGl0b3IuZXhlY3V0ZUNvbW1hbmQoJ3VuZG8nKTtyZWRvIC0gYWxsb3dzIHRvIHJlZG8gdGhlIHByZXZpb3VzIGFjdGlvbnMuIEV4YW1wbGU6IGVkaXRvci5leGVjdXRlQ29tbWFuZCgncmVkbycpO2NyZWF0ZUxpbmsgLSBjcmVhdGVzIGEgaHlwZXJsaW5rIGluIHRoZSBjb250ZW50IHNlY3Rpb24gb2YgdGhlIEVkaXRvci4gRXhhbXBsZTogZWRpdG9yLmV4ZWN1dGVDb21tYW5kKCdjcmVhdGVMaW5rJywgeyB0ZXh0OiAnTGlua3MnLCB1cmw6ICdodHRwOi8vJywgdGl0bGUgOiAnTGluaycgfSk7aW5kZW50IC0gaW5kZW50cyB0aGUgY29udGVudCB3aXRoIG9uZSBsZXZlbC4gRXhhbXBsZTogZWRpdG9yLmV4ZWN1dGVDb21tYW5kKCdpbmRlbnQnKTtvdXRkZW50IC0gb3V0ZGVudHMgdGhlIGNvbnRlbnQgd2l0aCBvbmUgbGV2ZWwuIEV4YW1wbGU6IGVkaXRvci5leGVjdXRlQ29tbWFuZCgnb3V0ZGVudCcpO2luc2VydEhUTUwgLSBpbnNlcnQgYW4gSFRNTCBjb250ZW50IGFzIHN0cmluZyBhdCB0aGUgY3VycmVudCBjdXJzb3IgbG9jYXRpb24uIEV4YW1wbGU6IGVkaXRvci5leGVjdXRlQ29tbWFuZCgnaW5zZXJ0SFRNTCcsICdUZXh0Jyk7aW5zZXJ0T3JkZXJlZExpc3QgLSBpbnNlcnRzIGEgbmV3IG51bWJlcmVkIGxpc3QgaXRlbS4gRXhhbXBsZTogZWRpdG9yLmV4ZWN1dGVDb21tYW5kKCdpbnNlcnRPcmRlcmVkTGlzdCcpO2luc2VydFVub3JkZXJlZExpc3QgLSBpbnNlcnRzIGEgbmV3IGJ1bGxldGVkIGxpc3QgaXRlbS4gRXhhbXBsZTogZWRpdG9yLmV4ZWN1dGVDb21tYW5kKCdpbnNlcnRVbm9yZGVyZWRMaXN0Jyk7cmVtb3ZlRm9ybWF0IC0gcmVtb3ZlcyB0aGUgZm9ybWF0dGluZyBzdHlsZXMgZnJvbSBjdXJyZW50bHkgc2VsZWN0ZWQgdGV4dC4gRXhhbXBsZTogZWRpdG9yLmV4ZWN1dGVDb21tYW5kKCdyZW1vdmVGb3JtYXQnKTtpbnNlcnRUZXh0IC0gaW5zZXJ0cyBhIHRleHQgYXQgdGhlIGN1cnJlbnQgY3Vyc29yIGxvY2F0aW9uLiBFeGFtcGxlOiBlZGl0b3IuZXhlY3V0ZUNvbW1hbmQoJ2luc2VydFRleHQnLCAnU29tZSB0ZXh0IHRvIGluc2VydCcpO2luc2VydEltYWdlIC0gaW5zZXJ0cyBhbiBpbWFnZSBhdCB0aGUgY3VycmVudCBjdXJzb3IgbG9jYXRpb24uIEV4YW1wbGU6IGVkaXRvci5leGVjdXRlQ29tbWFuZCgnaW5zZXJ0SW1hZ2UnLCB7IHVybDogJ2h0dHBzOi8vd3d3Lmh0bWxlbGVtZW50cy5jb20vZGVtb3MvaW1hZ2VzL2Nhcm91c2VsLW1lZGl1bS0yLmpwZyd9KTsgXG5cdCogQHBhcmFtIHtzdHJpbmd9IGNvbW1hbmROYW1lLiBUaGUgbmFtZSBvZiB0aGUgY29tbWFuZCB0byBleGVjdXRlLlxuXHQqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyfSB2YWx1ZT8uIFRoZSB2YWx1ZSBmb3IgdGhlIGNvbW1hbmQuIFNvbWUgY29tbWFuZHMgcmVxdWlyZSBhIHZhbHVlIHRvIGJlIHBhc3NlZCwgb3RoZXJzIGRvIG5vdC5cblx0KiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgKi9cblx0cHVibGljIGFzeW5jIGV4ZWN1dGVDb21tYW5kKGNvbW1hbmROYW1lLCB2YWx1ZT8pOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZXhlY3V0ZUNvbW1hbmQoY29tbWFuZE5hbWUsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEZvY3VzZXMgdGhlIGNvbnRlbnQgb2YgdGhlIEVkaXRvci4gXG5cdCovXG4gICAgcHVibGljIGZvY3VzKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJldHVybnMgdGhlIG51bWJlciBvZiBjaGFyYWN0ZXJzIGluc2lkZSB0aGUgRWRpdG9yJ3MgY29udGVudC4gXG5cdCogQHJldHVybnMge251bWJlcn1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldENoYXJDb3VudCgpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0Q2hhckNvdW50KCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRoZSBjdXJyZW50IHNlbGVjdGlvbiByYW5nZS4gQnkgZGVmYXVsdCB0aGUgcmVzdWx0IGlzIGFuIG9iamVjdCBvZiB0eXBlIFJhbmdlLCBidXQgaWYgdGhlIGVkaXRNb2RlIHByb3BlcnR5IGlzIHNldCB0byAnbWFya2Rvd24nIHRoZSByZXR1cm5lZCB2YWx1ZSBpcyBhbiBvYmplY3QgaW5kaWNhdGluZyB0aGUgc3RhcnQvZW5kIGluZGV4ZXMgb2YgdGhlIGN1cnJlbnQgc2VsZWN0aW9uLiAgXG5cdCogQHJldHVybnMge2FueX1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldFNlbGVjdGlvblJhbmdlKCk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRTZWxlY3Rpb25SYW5nZSgpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0aGUgY29udGVudCBvZiB0aGUgRWRpdG9yIGFzIEhUTUwuIFdoZW4gZWRpdE1vZGUgaXMgc2V0IHRvICdtYXJrZG93bicgdGhlIG1hcmtkb3duIGlzIHBhcnNlZCBhbmQgcmV0dXJuZWQgYXMgSFRNTC4gXG5cdCogQHJldHVybnMge3N0cmluZ31cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldEhUTUwoKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldEhUTUwoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJldHVybnMgdGhlIGNvbnRlbnQgb2YgdGhlIEVkaXRvciBhcyB0ZXh0LiBcblx0KiBAcmV0dXJucyB7c3RyaW5nfVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0VGV4dCgpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0VGV4dCgpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSGlkZXMgYSBzcGVjaWZpYyBtZXNzYWdlIG9yIGFsbCBtZXNzYWdlcyBpZiBubyBhcmd1bWVudCBpcyBwcm92aWRlZC4gXG5cdCogQHBhcmFtIHtIVE1MRWxlbWVudCB8IHN0cmluZyB8IG51bWJlcn0gaXRlbT8uIEhpZGVzIGEgc3BlY2lmaWMgbWVzc2FnZS4gVGhlIGFyZ3VtZW50IGNhbiBiZSBhIERPTSByZWZlcmVuY2UgdG8gYSBzcGVjaWZpYyBpdGVtLCBpdCdzIGluZGV4IG9yIGl0J3MgaWQuIElmIHRoZSBhcmd1bWVudCBpcyBub3QgcHJvdmlkZWQgdGhlbiBhbGwgbWVzc2FnZXMgd2lsbCBiZSBjbG9zZWQuXG5cdCovXG4gICAgcHVibGljIGhpZGVNZXNzYWdlKGl0ZW0/OiBIVE1MRWxlbWVudCB8IHN0cmluZyB8IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5oaWRlTWVzc2FnZShpdGVtKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5oaWRlTWVzc2FnZShpdGVtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSGlkZXMgdGhlIGxhc3Qgc2hvd24gbWVzc2FnZS4gXG5cdCovXG4gICAgcHVibGljIGhpZGVMYXN0TWVzc2FnZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaGlkZUxhc3RNZXNzYWdlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaGlkZUxhc3RNZXNzYWdlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNob3dzIGEgY3VzdG9tIG1lc3NhZ2UgaW5zaWRlIHRoZSBFZGl0b3IuIFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlLiBUaGUgdGV4dCBtZXNzYWdlIHRvIGJlIGRpc3BsYXllZC5cblx0KiBAcGFyYW0ge2FueX0gc2V0dGluZ3M/LiBBZGRpdGlvbmFsIHNldHRpbmdzIHRoYXQgY2FuIGJlIGFwcGxpZWQgdG8gdGhlIFRvYXN0IGVsZW1lbnQgdGhhdCBoYW5kbGVzIHRoZSBtZXNzYWdlcy4gVGhpcyBwYXJhbWV0ZXIgc2hvdWxkIGNvbnRhaW4gb25seSB2YWxpZCBUb2FzdCBwcm9wZXJ0aWVzIGFuZCB2YWx1ZXMuXG5cdCogQHJldHVybnMge0hUTUxFbGVtZW50IHwgdW5kZWZpbmVkfVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgc2hvd01lc3NhZ2UobWVzc2FnZSwgc2V0dGluZ3M/KTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LnNob3dNZXNzYWdlKG1lc3NhZ2UsIHNldHRpbmdzKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNlbGVjdHMgdGhlIHRleHQgaW5zaWRlIEVkaXRvcidzIGNvbnRlbnQuIFxuXHQqL1xuICAgIHB1YmxpYyBzZWxlY3RBbGwoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdEFsbCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdEFsbCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZWxlY3RzIGEgcmFuZ2Ugb2YgdGV4dCBpbnNpZGUgdGhlIEVkaXRvci4gVGhlIG1ldGhvZCB3aWxsIGZpbmQgdGhlIG5vZGVzIGNvbnRhaW5pbmcgdGhlIHRleHQgZnJvbSB0aGUgc3RhcnQgdG8gdGhlIGVuZCBpbmRleGVzIGFuZCB3aWxsIHNlbGVjdCB0aGVtIGFzIHJhbmdlcy4gSG93ZXZlciwgY3VycmVudGx5IG9ubHkgRmlyZUZveCBzdXBwb3J0cyBtdWx0aXBsZSByYW5nZSBzZWxlY3Rpb24uIFRoZSByZXN0IG9mIHRoZSBicm93c2VycyB3aWxsIG9ubHkgc2VsZWN0IHRoZSBmaXJzdCBub2RlLiBJZiB0aGUgZWRpdG9yIGlzIGluICdodG1sJyBlZGl0TW9kZSB0aGVuIHRoZSBleHBlY3RlZCB0ZXh0IHdpbGwgYmUgc2VsZWN0ZWQgcmVnYXJkbGVzcyBvZiB0aGUgYnJvd3NlciBiZWNhdXNlIHRoZXJlJ3Mgb25seSBvbmUgbm9kZSBpbnNpZGUgdGhlIGVkaXRvci4gXG5cdCogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0SW5kZXguIFRoZSBzdGFydCBpbmRleCB0byBzZWxlY3QgZnJvbS5cblx0KiBAcGFyYW0ge251bWJlcn0gZW5kSW5kZXguIFRoZSBlbmQgaW5kZXggdG8gc2VsZWN0IHRvLlxuXHQqL1xuICAgIHB1YmxpYyBzZWxlY3RSYW5nZShzdGFydEluZGV4OiBudW1iZXIsIGVuZEluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0UmFuZ2Uoc3RhcnRJbmRleCwgZW5kSW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdFJhbmdlKHN0YXJ0SW5kZXgsIGVuZEluZGV4KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ2xlYXJzIHRoZSBsb2NhbCBzdG9yYWdlIGZyb20gcHJldmlvdXNseSBzdG9yZWQgc3RhdGVzIG9mIHRoZSBFZGl0b3Igd2l0aCB0aGUgY3VycmVudCBpZC4gXG5cdCovXG4gICAgcHVibGljIGNsZWFyU3RhdGUoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNsZWFyU3RhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbGVhclN0YXRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNhdmVzIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBFZGl0b3IgdG8gbG9jYWwgc3RvcmFnZS4gUmVxdWlyZXMgYW4gaWQgdG8gYmUgc2V0IHRvIHRoZSBFZGl0b3IuIFxuXHQqL1xuICAgIHB1YmxpYyBzYXZlU3RhdGUoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNhdmVTdGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNhdmVTdGF0ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBMb2FkcyB0aGUgbGFzdCBzdG9yZWQgc3RhdGUgb2YgdGhlIEVkaXRvciBmcm9tIGxvY2FsIHN0b3JhZ2UuIFJlcXVpcmVzIGFuIGlkIHRvIGJlIHNldCB0byB0aGUgRWRpdG9yLiBcblx0Ki9cbiAgICBwdWJsaWMgbG9hZFN0YXRlKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5sb2FkU3RhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5sb2FkU3RhdGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBFZGl0b3IgaW50byBTcGxpdCBNb2RlLiBJbiBzcGxpdCBtb2RlIHRoZSBIVE1ML01hcmtkb3duIGVkaXRvciBhbmQgU291cmNlQ29kZS9QcmV2aWV3IHBhbmVscyBhcmUgdmlzaWJsZS4gXG5cdCogQHBhcmFtIHtib29sZWFufSB2YWx1ZT8uIERldGVybWluZXMgd2hldGhlciB0byBlbnRlciBvciBsZWF2ZSBzcGxpdCBtb2RlLiBCeSBkZWZhdWx0IHRoZSBhcmd1bWVudCBpcyBub3QgcGFzc2VkIGFuZCB0aGUgbW9kZSBpcyB0b2dnbGVkLlxuXHQqL1xuICAgIHB1YmxpYyBzcGxpdE1vZGUodmFsdWU/OiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNwbGl0TW9kZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc3BsaXRNb2RlKHZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBFZGl0b3IgaW50byBTb3VyY2VDb2RlL1ByZXZpZXcgTW9kZS4gSW4gdGhpcyBtb2RlIHRoZSBIVE1MIHZpZXcgcGFuZWwgaXMgZGlzcGxheWVkLiBcblx0KiBAcGFyYW0ge2Jvb2xlYW59IHZhbHVlPy4gRGV0ZXJtaW5lcyB3aGV0aGVyIHRvIGVudGVyIG9yIGxlYXZlIHNwbGl0IG1vZGUuIEJ5IGRlZmF1bHQgdGhlIGFyZ3VtZW50IGlzIG5vdCBwYXNzZWQgYW5kIHRoZSBtb2RlIGlzIHRvZ2dsZWQuXG5cdCovXG4gICAgcHVibGljIHByZXZpZXdNb2RlKHZhbHVlPzogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5wcmV2aWV3TW9kZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucHJldmlld01vZGUodmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIEVkaXRvciBpbnRvIEZ1bGwgU2NyZWVuIE1vZGUuIElmIGVuYWJsZWQgdGhlIEVkaXRvciBpcyBwb3NpdGlvbmVkIGFib3ZlIHRoZSBwYWdlIGNvbnRlbnQgYW5kIGZpbGxzIHRoZSBzY3JlZW4uIFxuXHQqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsdWU/LiBEZXRlcm1pbmVzIHdoZXRoZXIgdG8gZW50ZXIgb3IgbGVhdmUgc3BsaXQgbW9kZS4gQnkgZGVmYXVsdCB0aGUgYXJndW1lbnQgaXMgbm90IHBhc3NlZCBhbmQgdGhlIG1vZGUgaXMgdG9nZ2xlZC5cblx0Ki9cbiAgICBwdWJsaWMgZnVsbFNjcmVlbk1vZGUodmFsdWU/OiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmZ1bGxTY3JlZW5Nb2RlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5mdWxsU2NyZWVuTW9kZSh2YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEV4cG9ydHMgdGhlIGNvbnRlbnQgb2YgdGhlIEVkaXRvciBpbiB0aGUgZGVzaXJlZCBmb3JtYXQuIFRoZSBjdXJyZW50bHkgc3VwcG9ydGVkIGZvcm1hdHMgYXJlOiBIVE1MLCBNYXJrZG93biBhbmQgUERGLiBcblx0KiBAcGFyYW0ge3N0cmluZ30gZGF0YUZvcm1hdC4gVGhlIGV4cGVjdGVkIGZpbGUgZm9ybWF0LlxuXHQqIEBwYXJhbSB7YW55fSBjYWxsYmFjaz8uIEEgY2FsbGJhY2sgdGhhdCBpcyBleGVjdXRlZCBiZWZvcmUgdGhlIGRhdGEgaXMgZXhwb3J0ZWQuIEFsbG93cyB0byBtb2RpZnkgdGhlIG91dHB1dC5cblx0Ki9cbiAgICBwdWJsaWMgZXhwb3J0RGF0YShkYXRhRm9ybWF0OiBzdHJpbmcsIGNhbGxiYWNrPzogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmV4cG9ydERhdGEoZGF0YUZvcm1hdCwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmV4cG9ydERhdGEoZGF0YUZvcm1hdCwgY2FsbGJhY2spO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBJbXBvcnRzIHRoZSBjb250ZW50IG9mIGEgZmlsZSB0byB0aGUgRWRpdG9yLiBUaGUgY3VycmVudGx5IHN1cHBvcnRlZCBmb3JtYXRzIGFyZTogVFhUIG9yIEhUTUwuIFxuXHQqIEBwYXJhbSB7YW55fSBzb3VyY2UuIFRoZSB1cmwgdG8gdGhlIGZpbGUgb3IgYW4gb2JqZWN0IHRoYXQgZGVmaW5lcyBzZXR0aW5ncyBmb3IgdGhlIEFqYXggcmVxdWVzdCBsaWtlIHVybCwgdGltZXB1dCwgZXRjLiBPYmplY3QgZm9ybWF0OiB7IHVybDogc3RyaW5nLCB0eXBlOiBzdHJpbmcsIGRhdGE6IG9iamVjdCwgdGltZW91dDogbnVtYmVyIH1cblx0KiBAcGFyYW0ge2FueX0gc2V0dGluZ3M/LiBBZGRpdGlvbmFsIHNldHRpbmdzIGZvciB0aGUgYWpheCByZXF1ZXN0LiBTdWNoIGFzIGxvYWRFcnJvciBmdW5jdGlvbiwgY29udGVudFR5cGUsIGV0Yy4gRm9ybWF0OiB7IGNvbnRlbnRUeXBlOiBzdHJpbmcsIGJlZm9yZVNlbmQ6IEZ1bmN0aW9uLCBsb2FkRXJyb3I6IEZ1bmN0aW9uLCBiZWZvcmVMb2FkQ29tcGxldGU6IEZ1bmN0aW9uICB9XG5cdCovXG4gICAgcHVibGljIGltcG9ydERhdGEoc291cmNlOiBhbnksIHNldHRpbmdzPzogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmltcG9ydERhdGEoc291cmNlLCBzZXR0aW5ncyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaW1wb3J0RGF0YShzb3VyY2UsIHNldHRpbmdzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gT3BlbnMgdGhlIFByaW50IFByZXZpZXcgUGFuZWwgb2YgdGhlIEJyb3dzZXIgdG8gcHJpbnQgRWRpdG9yJ3MgY29udGVudC4gXG5cdCovXG4gICAgcHVibGljIHByaW50KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5wcmludCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnByaW50KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEFsbG93cyB0byB1cGRhdGUgdGhlIHNldHRpbmdzIG9mIGEgc2luZ2xlIHRvb2xiYXIgaXRlbS4gVGhlIG1ldGhvZCByZXR1cm5zIHRydWUgaWYgc3VjY2Vzc2Z1bC4gXG5cdCogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IG5hbWUuIFRoZSBuYW1lIG9mIHRoZSB0b29sYmFyIGl0ZW0gb3IgaXQncyBpbmRleCBpbnNpZGUgdGhlIDxiPnRvb2xiYXJJdGVtczwvYj4gYXJyYXkuXG5cdCogQHBhcmFtIHthbnl9IHNldHRpbmdzLiBBIHNldHRpbmdzIG9iamVjdCBmb3IgdGhlIHRvb2xiYXIgaXRlbS4gSXQgc2hvdWxkIGhhdmUgdGhlIHNhbWUgZGVmaW5pdGlvbiBhcyB3aGVuIGRlZmluaW5nIGEgY3VzdG9tIHRvb2xiYXIgaXRlbS4gWW91IGNhbiByZWFkIG1vcmUgYWJvdXQgaXQgaW4gdGhlIGRlZGljYXRlZCB0b3BpYyBmb3IgdGhlIEVkaXRvciBUb29sYmFyIG9uIHRoZSB3ZWJzaXRlLlxuXHQqIEByZXR1cm5zIHtib29sZWFuIHwgdW5kZWZpbmVkfVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgdXBkYXRlVG9vbGJhckl0ZW0obmFtZSwgc2V0dGluZ3MpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQudXBkYXRlVG9vbGJhckl0ZW0obmFtZSwgc2V0dGluZ3MpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cblx0Z2V0IGlzUmVuZGVyZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkIDogZmFsc2U7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0fVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cbiAgICAgIHRoYXQub25DcmVhdGUuZW1pdCh0aGF0Lm5hdGl2ZUVsZW1lbnQpO1xuXG5cdFx0U21hcnQuUmVuZGVyKCk7XG5cblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc21hcnQtYW5ndWxhcicpO1xuXG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7IHRoYXQub25SZWFkeS5lbWl0KHRoYXQubmF0aXZlRWxlbWVudCk7IH0pO1xuXHRcdHRoaXMubGlzdGVuKCk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLnVubGlzdGVuKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdFx0aWYgKHRoaXMubmF0aXZlRWxlbWVudCAmJiB0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuXHRcdFx0Zm9yIChjb25zdCBwcm9wTmFtZSBpbiBjaGFuZ2VzKSB7XG5cdFx0XHRcdGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuXHRcdFx0XHRcdHRoaXMubmF0aXZlRWxlbWVudFtwcm9wTmFtZV0gPSBjaGFuZ2VzW3Byb3BOYW1lXS5jdXJyZW50VmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEFkZCBldmVudCBsaXN0ZW5lcnMuICovXG5cdHByaXZhdGUgbGlzdGVuKCk6IHZvaWQge1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5nZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNoYW5nZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5nZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5naW5nSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ2hhbmdpbmcuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdpbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5naW5nSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snYWN0aW9uU3RhcnRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25BY3Rpb25TdGFydC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdhY3Rpb25TdGFydCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snYWN0aW9uU3RhcnRIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydhY3Rpb25FbmRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25BY3Rpb25FbmQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYWN0aW9uRW5kJywgdGhhdC5ldmVudEhhbmRsZXJzWydhY3Rpb25FbmRIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjb250ZXh0TWVudUl0ZW1DbGlja0hhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNvbnRleHRNZW51SXRlbUNsaWNrLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRNZW51SXRlbUNsaWNrJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb250ZXh0TWVudUl0ZW1DbGlja0hhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbnRleHRNZW51T3BlbkhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNvbnRleHRNZW51T3Blbi5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0TWVudU9wZW4nLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbnRleHRNZW51T3BlbkhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbnRleHRNZW51T3BlbmluZ0hhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNvbnRleHRNZW51T3BlbmluZy5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0TWVudU9wZW5pbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbnRleHRNZW51T3BlbmluZ0hhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbnRleHRNZW51Q2xvc2VIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Db250ZXh0TWVudUNsb3NlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRNZW51Q2xvc2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbnRleHRNZW51Q2xvc2VIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjb250ZXh0TWVudUNsb3NpbmdIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Db250ZXh0TWVudUNsb3NpbmcuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dE1lbnVDbG9zaW5nJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb250ZXh0TWVudUNsb3NpbmdIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydyZXNpemVTdGFydEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblJlc2l6ZVN0YXJ0LmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZVN0YXJ0JywgdGhhdC5ldmVudEhhbmRsZXJzWydyZXNpemVTdGFydEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jlc2l6ZUVuZEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblJlc2l6ZUVuZC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdyZXNpemVFbmQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jlc2l6ZUVuZEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2lubGluZVRvb2xiYXJPcGVuSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uSW5saW5lVG9vbGJhck9wZW4uZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5saW5lVG9vbGJhck9wZW4nLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2lubGluZVRvb2xiYXJPcGVuSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snaW5saW5lVG9vbGJhck9wZW5pbmdIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25JbmxpbmVUb29sYmFyT3BlbmluZy5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpbmxpbmVUb29sYmFyT3BlbmluZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snaW5saW5lVG9vbGJhck9wZW5pbmdIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydpbmxpbmVUb29sYmFyQ2xvc2VIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25JbmxpbmVUb29sYmFyQ2xvc2UuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5saW5lVG9vbGJhckNsb3NlJywgdGhhdC5ldmVudEhhbmRsZXJzWydpbmxpbmVUb29sYmFyQ2xvc2VIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydpbmxpbmVUb29sYmFyQ2xvc2luZ0hhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbklubGluZVRvb2xiYXJDbG9zaW5nLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lubGluZVRvb2xiYXJDbG9zaW5nJywgdGhhdC5ldmVudEhhbmRsZXJzWydpbmxpbmVUb29sYmFyQ2xvc2luZ0hhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2Ryb3BEb3duVG9vbGJhck9wZW5IYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Ecm9wRG93blRvb2xiYXJPcGVuLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3BEb3duVG9vbGJhck9wZW4nLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2Ryb3BEb3duVG9vbGJhck9wZW5IYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydkcm9wRG93blRvb2xiYXJPcGVuaW5nSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uRHJvcERvd25Ub29sYmFyT3BlbmluZy5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcm9wRG93blRvb2xiYXJPcGVuaW5nJywgdGhhdC5ldmVudEhhbmRsZXJzWydkcm9wRG93blRvb2xiYXJPcGVuaW5nSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snZHJvcERvd25Ub29sYmFyQ2xvc2VIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Ecm9wRG93blRvb2xiYXJDbG9zZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcm9wRG93blRvb2xiYXJDbG9zZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snZHJvcERvd25Ub29sYmFyQ2xvc2VIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydkcm9wRG93blRvb2xiYXJDbG9zaW5nSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uRHJvcERvd25Ub29sYmFyQ2xvc2luZy5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcm9wRG93blRvb2xiYXJDbG9zaW5nJywgdGhhdC5ldmVudEhhbmRsZXJzWydkcm9wRG93blRvb2xiYXJDbG9zaW5nSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snZGlhbG9nT3BlbkhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkRpYWxvZ09wZW4uZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZGlhbG9nT3BlbicsIHRoYXQuZXZlbnRIYW5kbGVyc1snZGlhbG9nT3BlbkhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2RpYWxvZ09wZW5pbmdIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25EaWFsb2dPcGVuaW5nLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RpYWxvZ09wZW5pbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2RpYWxvZ09wZW5pbmdIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydkaWFsb2dDbG9zZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkRpYWxvZ0Nsb3NlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RpYWxvZ0Nsb3NlJywgdGhhdC5ldmVudEhhbmRsZXJzWydkaWFsb2dDbG9zZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2RpYWxvZ0Nsb3NpbmdIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25EaWFsb2dDbG9zaW5nLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RpYWxvZ0Nsb3NpbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2RpYWxvZ0Nsb3NpbmdIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydpbWFnZVVwbG9hZFN1Y2Nlc3NIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25JbWFnZVVwbG9hZFN1Y2Nlc3MuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW1hZ2VVcGxvYWRTdWNjZXNzJywgdGhhdC5ldmVudEhhbmRsZXJzWydpbWFnZVVwbG9hZFN1Y2Nlc3NIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydpbWFnZVVwbG9hZEZhaWxlZEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkltYWdlVXBsb2FkRmFpbGVkLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ltYWdlVXBsb2FkRmFpbGVkJywgdGhhdC5ldmVudEhhbmRsZXJzWydpbWFnZVVwbG9hZEZhaWxlZEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3Rvb2Jhckl0ZW1DbGlja0hhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblRvb2Jhckl0ZW1DbGljay5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b29iYXJJdGVtQ2xpY2snLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Rvb2Jhckl0ZW1DbGlja0hhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ21lc3NhZ2VDbG9zZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbk1lc3NhZ2VDbG9zZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlQ2xvc2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ21lc3NhZ2VDbG9zZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ21lc3NhZ2VPcGVuSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uTWVzc2FnZU9wZW4uZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZU9wZW4nLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ21lc3NhZ2VPcGVuSGFuZGxlciddKTtcblxuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZW1vdmUgZXZlbnQgbGlzdGVuZXJzLiAqL1xuXHRwcml2YXRlIHVubGlzdGVuKCk6IHZvaWQge1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjaGFuZ2VIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5nZUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY2hhbmdpbmdIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2luZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY2hhbmdpbmdIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2FjdGlvblN0YXJ0SGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignYWN0aW9uU3RhcnQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2FjdGlvblN0YXJ0SGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydhY3Rpb25FbmRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdhY3Rpb25FbmQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2FjdGlvbkVuZEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY29udGV4dE1lbnVJdGVtQ2xpY2tIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb250ZXh0TWVudUl0ZW1DbGljaycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29udGV4dE1lbnVJdGVtQ2xpY2tIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbnRleHRNZW51T3BlbkhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbnRleHRNZW51T3BlbicsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29udGV4dE1lbnVPcGVuSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjb250ZXh0TWVudU9wZW5pbmdIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb250ZXh0TWVudU9wZW5pbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbnRleHRNZW51T3BlbmluZ0hhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY29udGV4dE1lbnVDbG9zZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbnRleHRNZW51Q2xvc2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbnRleHRNZW51Q2xvc2VIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbnRleHRNZW51Q2xvc2luZ0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbnRleHRNZW51Q2xvc2luZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29udGV4dE1lbnVDbG9zaW5nSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydyZXNpemVTdGFydEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZVN0YXJ0JywgdGhhdC5ldmVudEhhbmRsZXJzWydyZXNpemVTdGFydEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1sncmVzaXplRW5kSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplRW5kJywgdGhhdC5ldmVudEhhbmRsZXJzWydyZXNpemVFbmRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2lubGluZVRvb2xiYXJPcGVuSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignaW5saW5lVG9vbGJhck9wZW4nLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2lubGluZVRvb2xiYXJPcGVuSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydpbmxpbmVUb29sYmFyT3BlbmluZ0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2lubGluZVRvb2xiYXJPcGVuaW5nJywgdGhhdC5ldmVudEhhbmRsZXJzWydpbmxpbmVUb29sYmFyT3BlbmluZ0hhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snaW5saW5lVG9vbGJhckNsb3NlSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignaW5saW5lVG9vbGJhckNsb3NlJywgdGhhdC5ldmVudEhhbmRsZXJzWydpbmxpbmVUb29sYmFyQ2xvc2VIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2lubGluZVRvb2xiYXJDbG9zaW5nSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignaW5saW5lVG9vbGJhckNsb3NpbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2lubGluZVRvb2xiYXJDbG9zaW5nSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydkcm9wRG93blRvb2xiYXJPcGVuSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcERvd25Ub29sYmFyT3BlbicsIHRoYXQuZXZlbnRIYW5kbGVyc1snZHJvcERvd25Ub29sYmFyT3BlbkhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snZHJvcERvd25Ub29sYmFyT3BlbmluZ0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3BEb3duVG9vbGJhck9wZW5pbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2Ryb3BEb3duVG9vbGJhck9wZW5pbmdIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2Ryb3BEb3duVG9vbGJhckNsb3NlSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcERvd25Ub29sYmFyQ2xvc2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2Ryb3BEb3duVG9vbGJhckNsb3NlSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydkcm9wRG93blRvb2xiYXJDbG9zaW5nSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcERvd25Ub29sYmFyQ2xvc2luZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snZHJvcERvd25Ub29sYmFyQ2xvc2luZ0hhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snZGlhbG9nT3BlbkhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RpYWxvZ09wZW4nLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2RpYWxvZ09wZW5IYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2RpYWxvZ09wZW5pbmdIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkaWFsb2dPcGVuaW5nJywgdGhhdC5ldmVudEhhbmRsZXJzWydkaWFsb2dPcGVuaW5nSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydkaWFsb2dDbG9zZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RpYWxvZ0Nsb3NlJywgdGhhdC5ldmVudEhhbmRsZXJzWydkaWFsb2dDbG9zZUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snZGlhbG9nQ2xvc2luZ0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RpYWxvZ0Nsb3NpbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2RpYWxvZ0Nsb3NpbmdIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2ltYWdlVXBsb2FkU3VjY2Vzc0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ltYWdlVXBsb2FkU3VjY2VzcycsIHRoYXQuZXZlbnRIYW5kbGVyc1snaW1hZ2VVcGxvYWRTdWNjZXNzSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydpbWFnZVVwbG9hZEZhaWxlZEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ltYWdlVXBsb2FkRmFpbGVkJywgdGhhdC5ldmVudEhhbmRsZXJzWydpbWFnZVVwbG9hZEZhaWxlZEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1sndG9vYmFySXRlbUNsaWNrSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG9vYmFySXRlbUNsaWNrJywgdGhhdC5ldmVudEhhbmRsZXJzWyd0b29iYXJJdGVtQ2xpY2tIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ21lc3NhZ2VDbG9zZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2VDbG9zZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snbWVzc2FnZUNsb3NlSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydtZXNzYWdlT3BlbkhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2VPcGVuJywgdGhhdC5ldmVudEhhbmRsZXJzWydtZXNzYWdlT3BlbkhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdH1cbn1cbiJdfQ==