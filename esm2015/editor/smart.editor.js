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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQuZWRpdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc21hcnQtd2ViY29tcG9uZW50cy1hbmd1bGFyL2VkaXRvci8iLCJzb3VyY2VzIjpbInNtYXJ0LmVkaXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUosT0FBTyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVyRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFReEMsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZ0IsU0FBUSxXQUFXO0lBQy9DLFlBQVksR0FBdUI7UUFDbEMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBSUosa0JBQWEsR0FBVSxFQUFFLENBQUM7UUF5WmxDOzs7O1VBSUU7UUFDUSxhQUFRLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFbkU7Ozs7VUFJRTtRQUNRLGVBQVUsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVyRTs7O1VBR0U7UUFDUSxrQkFBYSxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXhFOzs7VUFHRTtRQUNRLGdCQUFXLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFdEU7Ozs7VUFJRTtRQUNRLDJCQUFzQixHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRWpGOzs7O1VBSUU7UUFDUSxzQkFBaUIsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUU1RTs7O1VBR0U7UUFDUSx5QkFBb0IsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUvRTs7OztVQUlFO1FBQ1EsdUJBQWtCLEdBQThCLElBQUksWUFBWSxF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TSxFQUFFOzBEQUFtRTtBQU1sRTtJQUFULE1BQU0sRUFBRTs2REFBc0U7QUFPckU7SUFBVCxNQUFNLEVBQUU7MkRBQW9FO0FBTW5FO0lBQVQsTUFBTSxFQUFFOzZEQUFzRTtBQUlyRTtJQUFULE1BQU0sRUFBRTtzREFBK0Q7QUFNOUQ7SUFBVCxNQUFNLEVBQUU7b0RBQTZEO0FBTzVEO0lBQVQsTUFBTSxFQUFFOzREQUFxRTtBQU1wRTtJQUFULE1BQU0sRUFBRTsrREFBd0U7QUFPdkU7SUFBVCxNQUFNLEVBQUU7NkRBQXNFO0FBTXJFO0lBQVQsTUFBTSxFQUFFOytEQUF3RTtBQU92RTtJQUFULE1BQU0sRUFBRTs4REFBdUU7QUFNdEU7SUFBVCxNQUFNLEVBQUU7aUVBQTBFO0FBT3pFO0lBQVQsTUFBTSxFQUFFOytEQUF3RTtBQU12RTtJQUFULE1BQU0sRUFBRTtpRUFBMEU7QUFPekU7SUFBVCxNQUFNLEVBQUU7cURBQThEO0FBTzdEO0lBQVQsTUFBTSxFQUFFO3dEQUFpRTtBQU9oRTtJQUFULE1BQU0sRUFBRTtzREFBK0Q7QUFPOUQ7SUFBVCxNQUFNLEVBQUU7d0RBQWlFO0FBYWhFO0lBQVQsTUFBTSxFQUFFOzZEQUFzRTtBQWFyRTtJQUFULE1BQU0sRUFBRTs0REFBcUU7QUFPcEU7SUFBVCxNQUFNLEVBQUU7MERBQW1FO0FBTWxFO0lBQVQsTUFBTSxFQUFFO3VEQUFnRTtBQU0vRDtJQUFULE1BQU0sRUFBRTtzREFBK0Q7QUEvbEI1RCxlQUFlO0lBSjNCLFNBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLDhCQUE4QjtLQUNsRSxDQUFDO0dBRVcsZUFBZSxDQWt2QzNCO1NBbHZDWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWRpdG9yIH0gZnJvbSAnLi8uLi9pbmRleCc7XG5pbXBvcnQgeyBBbmltYXRpb24sIEVkaXRvckNvbnRlbnRGaWx0ZXJpbmdBdHRyaWJ1dGVGaWx0ZXJNb2RlLCBFZGl0b3JDb250ZW50RmlsdGVyaW5nVGFnRmlsdGVyTW9kZSwgRWRpdG9yQ29udGVudEZpbHRlcmluZ1N0eWxlQXR0cmlidXRlRmlsdGVyTW9kZSwgRWRpdG9yQ29udGV4dE1lbnUsIEVkaXRNb2RlLCBFZGl0b3JJbWFnZUZvcm1hdCwgUGFzdGVGb3JtYXQsIFRvb2xiYXJNb2RlLCBUb29sYmFyVmlld01vZGUsIEVkaXRvckNvbnRlbnRGaWx0ZXJpbmcsIEVkaXRvckRhdGFFeHBvcnQsIEVkaXRvcklmcmFtZVNldHRpbmdzLCBUb29sYmFySXRlbSwgVG9vbGJhckl0ZW1FZGl0b3IsIEVsZW1lbnRSZW5kZXJNb2RlfSBmcm9tICcuLy4uL2luZGV4JztcbmltcG9ydCB7IENvbXBvbmVudCwgRGlyZWN0aXZlLCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgU2ltcGxlQ2hhbmdlcywgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VFbGVtZW50LCBTbWFydCB9IGZyb20gJy4vc21hcnQuZWxlbWVudCc7XG5leHBvcnQgeyBBbmltYXRpb24sIEVkaXRvckNvbnRlbnRGaWx0ZXJpbmdBdHRyaWJ1dGVGaWx0ZXJNb2RlLCBFZGl0b3JDb250ZW50RmlsdGVyaW5nVGFnRmlsdGVyTW9kZSwgRWRpdG9yQ29udGVudEZpbHRlcmluZ1N0eWxlQXR0cmlidXRlRmlsdGVyTW9kZSwgRWRpdG9yQ29udGV4dE1lbnUsIEVkaXRNb2RlLCBFZGl0b3JJbWFnZUZvcm1hdCwgUGFzdGVGb3JtYXQsIFRvb2xiYXJNb2RlLCBUb29sYmFyVmlld01vZGUsIEVkaXRvckNvbnRlbnRGaWx0ZXJpbmcsIEVkaXRvckRhdGFFeHBvcnQsIEVkaXRvcklmcmFtZVNldHRpbmdzLCBUb29sYmFySXRlbSwgVG9vbGJhckl0ZW1FZGl0b3IsIEVsZW1lbnRSZW5kZXJNb2RlfSBmcm9tICcuLy4uL2luZGV4JztcbmV4cG9ydCB7IFNtYXJ0IH0gZnJvbSAnLi9zbWFydC5lbGVtZW50JztcbmV4cG9ydCB7IEVkaXRvciB9IGZyb20gJy4vLi4vaW5kZXgnO1xuXG5cbkBEaXJlY3RpdmUoe1xuXHRleHBvcnRBczogJ3NtYXJ0LWVkaXRvcicsXHRzZWxlY3RvcjogJ3NtYXJ0LWVkaXRvciwgW3NtYXJ0LWVkaXRvcl0nXG59KVxuXG5leHBvcnQgY2xhc3MgRWRpdG9yQ29tcG9uZW50IGV4dGVuZHMgQmFzZUVsZW1lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcblx0Y29uc3RydWN0b3IocmVmOiBFbGVtZW50UmVmPEVkaXRvcj4pIHtcblx0XHRzdXBlcihyZWYpO1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA9IHJlZi5uYXRpdmVFbGVtZW50IGFzIEVkaXRvcjtcblx0fVxuXG5cdHByaXZhdGUgZXZlbnRIYW5kbGVyczogYW55W10gPSBbXTtcblxuXHRwdWJsaWMgbmF0aXZlRWxlbWVudDogRWRpdG9yO1xuXHQvKiogQGRlc2NyaXB0aW9uIENyZWF0ZXMgdGhlIGNvbXBvbmVudCBvbiBkZW1hbmQuXG5cdCAqIEBwYXJhbSBwcm9wZXJ0aWVzIEFuIG9wdGlvbmFsIG9iamVjdCBvZiBwcm9wZXJ0aWVzLCB3aGljaCB3aWxsIGJlIGFkZGVkIHRvIHRoZSB0ZW1wbGF0ZSBiaW5kZWQgb25lcy5cblx0ICovXG5cdHB1YmxpYyBjcmVhdGVDb21wb25lbnQocHJvcGVydGllcyA9IHt9KTogYW55IHtcbiAgICBcdHRoaXMubmF0aXZlRWxlbWVudCA9IDxFZGl0b3I+ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc21hcnQtZWRpdG9yJyk7XG5cdFx0Zm9yIChsZXQgcHJvcGVydHlOYW1lIGluIHByb3BlcnRpZXMpIHsgXG4gXHRcdFx0dGhpcy5uYXRpdmVFbGVtZW50W3Byb3BlcnR5TmFtZV0gPSBwcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV07XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQ7XG5cdH1cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIGFuaW1hdGlvbiBtb2RlLiBBbmltYXRpb24gaXMgZGlzYWJsZWQgd2hlbiB0aGUgcHJvcGVydHkgaXMgc2V0IHRvICdub25lJyAqL1xuXHRASW5wdXQoKVxuXHRnZXQgYW5pbWF0aW9uKCk6IEFuaW1hdGlvbiB8IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hbmltYXRpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGFuaW1hdGlvbih2YWx1ZTogQW5pbWF0aW9uIHwgc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmFuaW1hdGlvbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBdXRvbWF0aWNhbGx5IGxvYWRzIHRoZSBsYXN0IHNhdmVkIHN0YXRlIG9mIHRoZSBlZGl0b3IgKGZyb20gbG9jYWwgc3RvcmFnZSkgb24gZWxlbWVudCBpbml0aWFsaXphdGlvbi4gQW4gaWQgbXVzdCBiZSBwcm92aWRlZCBpbiBvcmRlciB0byBsb2FkIGEgcHJldmlvdXNseSBzYXZlZCBzdGF0ZS4gKi9cblx0QElucHV0KClcblx0Z2V0IGF1dG9Mb2FkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYXV0b0xvYWQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGF1dG9Mb2FkKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9Mb2FkID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEF1dG9tYXRpY2FsbHkgc2F2ZXMgdGhlIGN1cnJlbnQgY29udGVudCBvZiB0aGUgZWRpdG9yLiBTYXZpbmcgaGFwcGVucyBhdCB0aW1lIGludGVydmFzIGRldGVybWluZWQgYnkgdGhlIGF1dG9TYXZlSW50ZXJ2YWwgcHJvcGVydHkgd2hpbGUgdGhlIGVsZW1lbnQgb24gZm9jdXMuIEFuIGlkIG11c3QgYmUgcHJvdmlkZWQgdG8gdGhlIGVsZW1lbnQgaW4gb3JkZXIgdG8gc3RvcmUgdGhlIHN0YXRlLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgYXV0b1NhdmUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hdXRvU2F2ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYXV0b1NhdmUodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYXV0b1NhdmUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhlIHByb3BlcnR5IHRoYXQgZGV0ZXJtaW5lcyB0aGUgaW50ZXJ2YWwgdG8gYXV0b21hdGljYWxseSBzYXZlIHRoZSBzdGF0ZSBvZiB0aGUgRWRpdG9yIHdoZW4gdGhlIGF1dG9TYXZlIHByb3BlcnR5IGlzIHNldC4gKi9cblx0QElucHV0KClcblx0Z2V0IGF1dG9TYXZlSW50ZXJ2YWwoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9TYXZlSW50ZXJ2YWwgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGF1dG9TYXZlSW50ZXJ2YWwodmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hdXRvU2F2ZUludGVydmFsID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEEgZm9ybWF0dGluZyBmdW5jdGlvbiBmb3IgdGhlIGNoYXIgY291bnRlci4gVGFrZXMgdHdvIGFyZ3VtZW50czogY2hhcnMgLSB0aGUgY3VycmVudCBudW1iZXIgb2YgY2hhcmFjdGVycyBpbnNpZGUgdGhlIEVkaXRvci5tYXhDaGFyQ291bnQgLSB0aGUgbWF4aW11bSBudW1iZXIgb2YgY2hhcmFjdGVycyBpbnNpZGUgdGhlIEVkaXRvci4gKi9cblx0QElucHV0KClcblx0Z2V0IGNoYXJDb3VudEZvcm1hdEZ1bmN0aW9uKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jaGFyQ291bnRGb3JtYXRGdW5jdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgY2hhckNvdW50Rm9ybWF0RnVuY3Rpb24odmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jaGFyQ291bnRGb3JtYXRGdW5jdGlvbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBjb250ZW50IGZpbHRlcmluZyBzZXR0aW5ncy4gKi9cblx0QElucHV0KClcblx0Z2V0IGNvbnRlbnRGaWx0ZXJpbmcoKTogRWRpdG9yQ29udGVudEZpbHRlcmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb250ZW50RmlsdGVyaW5nIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjb250ZW50RmlsdGVyaW5nKHZhbHVlOiBFZGl0b3JDb250ZW50RmlsdGVyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbnRlbnRGaWx0ZXJpbmcgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgY29udGV4dCBtZW51IGZvciB0aGUgRWRpdG9yLiBUaGUgY29udGV4dCBtZW51IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSB1c2VyIHJpZ2h0IGNsaWNrcyBvbiB0aGUgY29udGVudCBhcmVhIG9mIHRoZSBFZGl0b3IuICovXG5cdEBJbnB1dCgpXG5cdGdldCBjb250ZXh0TWVudSgpOiBFZGl0b3JDb250ZXh0TWVudSB8IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb250ZXh0TWVudSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgY29udGV4dE1lbnUodmFsdWU6IEVkaXRvckNvbnRleHRNZW51IHwgc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbnRleHRNZW51ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEFsbG93cyB0byBjdXN0b21pemUgZGVmYXVsdCB0aGUgY29udGV4dCBtZW51IG9mIHRoZSBFZGl0b3IuIFRoZSBwcm9wZXJ0eSBhY2NlcHRzIGFuIGFycmF5IG9mIGl0ZW1zIHdoaWNoIGNhbiBiZSBzdHJpbmdzIHRoYXQgcmVwcmVzZW50IHRoZSB2YWx1ZSBvZiB0aGUgaXRlbSwgb3Igb2JqZWN0cyBvZiB0aGUgZm9sbG93aW5nIGZvcm1hdDogeyBsYWJlbDogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIH0sIHdoZXJlIHRoZSBsYWJlbCB3aWxsIGJlIGRpc3BsYXllZCBhbmQgdGhlIHZhbHVlIHdpbGwgYmUgYWN0aW9uIHZhbHVlIGZvciB0aGUgaXRlbS4gVGhlIHByb3BlcnR5IGFsc28gYWNjZXB0cyBhIGZ1bmN0aW9uIHRoYXQgbXVzdCByZXR1cm4gYW4gYXJyYXkgb2YgaXRlbXMgd2l0aCB0aGUgZm9sbG93aW5nIGZvcm1hdCBmdW5jdGlvbiAodGFyZ2V0OiBIVE1MRWxlbWVudCwgdHlwZTogc3RyaW5nLCBkZWZhdWx0SXRlbXM6IHN0cmluZ1tdKSB7IHJldHVybiBkZWZhdWx0SXRlbXMgfSBhbmQgdGhlIGZvbGxvd2luZyBhcmd1bWVudHM6IHRhcmdldCAtIHRoZSBlbGVtZW50IHRoYXQgaXMgdGhlIHRhcmdldCBvZiB0aGUgY29udGV4dCBtZW51LnR5cGUgLSB0aGUgdHlwZSBvZiBjb250ZXh0IG1lbnUgKCB3aGV0aGVyIGl0J3MgYSB0YWJsZSwgaW1hZ2UsIGxpbmsgb3Igb3RoZXIpZGVmYXVsdEl0ZW1zIC0gYW4gYXJyYXkgb2Ygc3RyaW5ncyB3aGljaCByZXByZXNlbnQgdGhlIGRlZmF1bHQgaXRlbXMgZm9yIHRoZSBjb250ZXh0IG1lbnUuICovXG5cdEBJbnB1dCgpXG5cdGdldCBjb250ZXh0TWVudURhdGFTb3VyY2UoKTogc3RyaW5nW10gfCB7IGxhYmVsOiBzdHJpbmcsIHZhbHVlOiAnc3RyaW5nJyB9W10gfCBGdW5jdGlvbiB8IG51bGwge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29udGV4dE1lbnVEYXRhU291cmNlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjb250ZXh0TWVudURhdGFTb3VyY2UodmFsdWU6IHN0cmluZ1tdIHwgeyBsYWJlbDogc3RyaW5nLCB2YWx1ZTogJ3N0cmluZycgfVtdIHwgRnVuY3Rpb24gfCBudWxsKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbnRleHRNZW51RGF0YVNvdXJjZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBFZGl0b3IncyBEYXRhIEV4cG9ydCBvcHRpb25zLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGF0YUV4cG9ydCgpOiBFZGl0b3JEYXRhRXhwb3J0IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRhdGFFeHBvcnQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRhdGFFeHBvcnQodmFsdWU6IEVkaXRvckRhdGFFeHBvcnQpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGF0YUV4cG9ydCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFbmFibGVzIG9yIGRpc2FibGVzIHRoZSBFZGl0b3IuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVkIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlZCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEaXNhYmxlcyBjb250ZW50IGVkaXRpbmcgaW5zaWRlIEVkaXRvci4gKi9cblx0QElucHV0KClcblx0Z2V0IGRpc2FibGVFZGl0aW5nKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZUVkaXRpbmcgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRpc2FibGVFZGl0aW5nKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVFZGl0aW5nID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERpc2FibGVzIHRoZSBRdWljayBTZWFyY2ggQmFyLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGlzYWJsZVNlYXJjaEJhcigpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVTZWFyY2hCYXIgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRpc2FibGVTZWFyY2hCYXIodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZVNlYXJjaEJhciA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBlZGl0IG1vZGUgZm9yIHRoZSBFZGl0b3IuIEJ5IGRlZmF1bHQgdGhlIGVkaXRvcidzIGNvbnRlbnQgYWNjZXB0cyBhbmQgcGFyc2VzIEhUTUwuIEhvd2V2ZXIgaWYgc2V0IHRvICdtYXJrZG93bicgdGhlIEVkaXRvciBjYW4gYmUgdXNlZCBhcyBhIGZ1bGwgdGltZSBNYXJrZG93biBFZGl0b3IgYnkgcGFyc2luZyB0aGUgbWFrcmRvd24gdG8gSFRNTCBpbiBwcmV2aWV3IG1vZGUuICovXG5cdEBJbnB1dCgpXG5cdGdldCBlZGl0TW9kZSgpOiBFZGl0TW9kZSB8IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5lZGl0TW9kZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZWRpdE1vZGUodmFsdWU6IEVkaXRNb2RlIHwgc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmVkaXRNb2RlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgd2hldGhlciB0aGUgdmFsdWUgcmV0dXJuZWQgZnJvbSBnZXRIVE1MIG1ldGhvZCBhbmQgU291cmNlIENvZGUgdmlldyBhcmUgZW5jb2RlZCBvciBub3QuICovXG5cdEBJbnB1dCgpXG5cdGdldCBlbmFibGVIdG1sRW5jb2RlKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZW5hYmxlSHRtbEVuY29kZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZW5hYmxlSHRtbEVuY29kZSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5lbmFibGVIdG1sRW5jb2RlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgd2hldGhlciB0aGUgVGFiIGtleSBjYW4gaW5zZXJ0IHRhYiBjaGFycyBpbnNpZGUgdGhlIEVkaXRvciBvciBjaGFuZ2UgZm9jdXMgKGRlZmF1bHQpICovXG5cdEBJbnB1dCgpXG5cdGdldCBlbmFibGVUYWJLZXkoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5lbmFibGVUYWJLZXkgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGVuYWJsZVRhYktleSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5lbmFibGVUYWJLZXkgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgdGltZSBpbnRlcnZhbCBiZXR3ZWVuIHJlc3VsdHMgZm9yIHRoZSBmaW5kIGFuZCByZXBsYWNlIGFuZCBzZWFyY2ggYmFyIGZlYXR1cmVzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZmluZEFuZFJlcGxhY2VUaW1lb3V0KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5maW5kQW5kUmVwbGFjZVRpbWVvdXQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGZpbmRBbmRSZXBsYWNlVGltZW91dCh2YWx1ZTogbnVtYmVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmZpbmRBbmRSZXBsYWNlVGltZW91dCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIFRvb2xiYXIgaXMgaGlkZGVuIG9yIG5vdC4gKi9cblx0QElucHV0KClcblx0Z2V0IGhpZGVUb29sYmFyKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGlkZVRvb2xiYXIgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGhpZGVUb29sYmFyKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmhpZGVUb29sYmFyID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgd2hldGhlciB0aGUgSW5saW5lIFRvb2xiYXIgaXMgaGlkZGVuIG9yIG5vdC4gKi9cblx0QElucHV0KClcblx0Z2V0IGhpZGVJbmxpbmVUb29sYmFyKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGlkZUlubGluZVRvb2xiYXIgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGhpZGVJbmxpbmVUb29sYmFyKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmhpZGVJbmxpbmVUb29sYmFyID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIGZpbGUgZm9ybWF0IG9mIHRoZSBpbWFnZS92aWRlbyB0aGF0IGFyZSB1cGxvYWRlZCBmcm9tIGxvY2FsIHN0b3JhZ2UuIEJ5IGRlZmF1bHQgaW1hZ2VzL3ZpZGVvcyBhcmUgc3Ryb2VkIGFzIGJhc2U2NC4gKi9cblx0QElucHV0KClcblx0Z2V0IGltYWdlRm9ybWF0KCk6IEVkaXRvckltYWdlRm9ybWF0IHwgc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmltYWdlRm9ybWF0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBpbWFnZUZvcm1hdCh2YWx1ZTogRWRpdG9ySW1hZ2VGb3JtYXQgfCBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaW1hZ2VGb3JtYXQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyB0aGUgY29udGVudCBvZiB0aGUgRWRpdG9yIGFzIEhUTUwuIEFsbG93cyB0byBpbnNlcnQgdGV4dCBhbmQgSFRNTC4gKi9cblx0QElucHV0KClcblx0Z2V0IGlubmVySFRNTCgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBpbm5lckhUTUwodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGVmaW5lcyBhbiBvZmZzZXQoeCx5KSBmb3IgdGhlIElubGluZSBUb29sYmFyIHBvc2l0aW9uaW5nIG9uIHRoZSBwYWdlLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgaW5saW5lVG9vbGJhck9mZnNldCgpOiBudW1iZXJbXSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5pbmxpbmVUb29sYmFyT2Zmc2V0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBpbmxpbmVUb29sYmFyT2Zmc2V0KHZhbHVlOiBudW1iZXJbXSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5pbmxpbmVUb29sYmFyT2Zmc2V0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIGlmcmFtZSBzZXR0aW5ncyBvZiB0aGUgRWRpdG9yLiBXaGVuIGVuYWJsZWQgdGhlIGNvbnRlbnRzIG9mIHRoZSBFZGl0b3IgYXJlIHBsYWNlZCBpbnNpZGUgYW4gaWZyYW1lLCBpc29sYXRlZCBpbiBhIHNlcGFyYXRlIGRvbS4gVGhlIGVsZW1lbnQgYWxsb3dzIHRvIGluc2VydCBleHRlcm5hbCByZXNvdXJjZXMgaW50byB0aGUgaWZyYW1lIGlmIG5lZWRlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IGlmcmFtZVNldHRpbmdzKCk6IEVkaXRvcklmcmFtZVNldHRpbmdzIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmlmcmFtZVNldHRpbmdzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBpZnJhbWVTZXR0aW5ncyh2YWx1ZTogRWRpdG9ySWZyYW1lU2V0dGluZ3MpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaWZyYW1lU2V0dGluZ3MgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSBsYW5ndWFnZS4gVXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZSBwcm9wZXJ0eSBtZXNzYWdlcy4gICovXG5cdEBJbnB1dCgpXG5cdGdldCBsb2NhbGUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxvY2FsZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbG9jYWxlKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubG9jYWxlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgYSBsaW1pdCBvbiB0aGUgbnVtYmVyIG9mIGNoYXJzIGluc2lkZSB0aGUgRWRpdG9yLiAgKi9cblx0QElucHV0KClcblx0Z2V0IG1heENoYXJDb3VudCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubWF4Q2hhckNvdW50IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBtYXhDaGFyQ291bnQodmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5tYXhDaGFyQ291bnQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIGFuIG9iamVjdCBzcGVjaWZ5aW5nIHN0cmluZ3MgdXNlZCBpbiB0aGUgd2lkZ2V0IHRoYXQgY2FuIGJlIGxvY2FsaXplZC4gVXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZSBwcm9wZXJ0eSBsYW5ndWFnZS4gICovXG5cdEBJbnB1dCgpXG5cdGdldCBtZXNzYWdlcygpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubWVzc2FnZXMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG1lc3NhZ2VzKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubWVzc2FnZXMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBhIHRvIHRoZSBlbGVtZW50IHdoaWNoIGNhbiBiZSB1c2VkIHRvIHN1Ym1pdCB0aGUgdmFsdWUgb2YgdGhlIEVkaXRvciB2aWEgYSBmb3JtLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbmFtZSgpOiBzdHJpbmcgfCBudWxsIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm5hbWUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG5hbWUodmFsdWU6IHN0cmluZyB8IG51bGwpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubmFtZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBmb3JtYXQgb2YgdGhlIGNvbnRlbnQgdGhhdCB3aWxsIGJlIHBhc3RlZCBpbnNpZGUgdGhlIEVkaXRvci4gKi9cblx0QElucHV0KClcblx0Z2V0IHBhc3RlRm9ybWF0KCk6IFBhc3RlRm9ybWF0IHwgc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnBhc3RlRm9ybWF0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBwYXN0ZUZvcm1hdCh2YWx1ZTogUGFzdGVGb3JtYXQgfCBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucGFzdGVGb3JtYXQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgcGxhY2Vob2xkZXIgdGhhdCB3aWxsIGJlIHNob3duIHdoZW4gdGhlcmUncyBubyBjb250ZW50IGluc2lkZSB0aGUgRWRpdG9yLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcGxhY2Vob2xkZXIoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnBsYWNlaG9sZGVyIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBwbGFjZWhvbGRlcih2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnBsYWNlaG9sZGVyID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgd2hldGhlciB0aGUgY2xlYXJGb3JtYXQgdG9vbGJhciBhY3Rpb24gc2hvdWxkIGFsc28gcmVtb3ZlIGlubGluZSBzdHlsZXMgZnJvbSB0aGUgY3VycmVudGx5IHNlbGVjdGVkIG5vZGUuICovXG5cdEBJbnB1dCgpXG5cdGdldCByZW1vdmVTdHlsZXNPbkNsZWFyRm9ybWF0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmVtb3ZlU3R5bGVzT25DbGVhckZvcm1hdCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcmVtb3ZlU3R5bGVzT25DbGVhckZvcm1hdCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVTdHlsZXNPbkNsZWFyRm9ybWF0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgd2hldGhlciBFZGl0b3IncyBjb250ZW50IGlzIHJlcXVpcmVkIG90IG5vdC4gSWYgc2V0IGFuZCB0aGUgRWRpdG9yJ3MgY29udGVudCBpcyBlbXB0eSwgYSBub3RpZmljYXRpb24gd2lsbCBhcHBlYXIgdG8gbm90aWZ5IHRoYXQgdGhlIEVkaXRvciBjYW5ub3QgYmUgZW1wdHkuICovXG5cdEBJbnB1dCgpXG5cdGdldCByZXF1aXJlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlcXVpcmVkIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCByZXF1aXJlZCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZXF1aXJlZCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIHZhbHVlIGluZGljYXRpbmcgd2hldGhlciB0aGUgZWxlbWVudCBpcyBhbGlnbmVkIHRvIHN1cHBvcnQgbG9jYWxlcyB1c2luZyByaWdodC10by1sZWZ0IGZvbnRzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcmlnaHRUb0xlZnQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yaWdodFRvTGVmdCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcmlnaHRUb0xlZnQodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmlnaHRUb0xlZnQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSB2YWx1ZSBpcyBzYW5pdGl6ZWQgZnJvbSBYU1MgY29udGVudCBvciBub3QuIFdoZW4gZW5hYmxlZCBzY3JpcHRzIGFuZCBvdGhlciBYU1MgdnVsbmVyYWJpbGl0aWVzIGFyZSBub3QgYWxsb3dlZCB0byBleGlzdCBpbnNpZGUgdGhlIEVkaXRvcidzIGFzIEhUTUwgY29udGVudC4gKi9cblx0QElucHV0KClcblx0Z2V0IHNhbml0aXplZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNhbml0aXplZCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc2FuaXRpemVkKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNhbml0aXplZCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGNoYXIgY291bnRlciBpcyB2aXNpYmxlIG9yIG5vdC4gV2hlbiBlbmFibGVkIGl0IGlzIGRpc3BsYXllZCBpbiB0aGUgYm90dG9tIHJpZ2h0IGNvcm5lci4gSWYgbWF4Q2hhckNvdW50IGlzIHNldCBhbmQgdGhlIGNvbnRlbnQgY2hhcmFjdGVycyBhcmUgZXF1YWwgb3IgbW9yZSB0aGFuIDcwJSBvZiB0aGUgbWF4aW11bSBjaGFyIGNvdW50IHRoZSBjb3VudGVyIGlzIGNvbG9yZWQgaW4gb3JkZXIgdG8gd2FybiB0aGUgdXNlci4gSWYgdGhlIGNoYXIgY291bnQgaXMgZXF1YWwgb3IgbW9yZSB0aGFuIDkwJSB0aGUgY291bnRlciBpcyBhZ2FpbiBjb2xvcmVkIHdpdGggYSBkaWZmZXJlbnQgd2FybmluZyBjb2xvciB0byBpbmRpY2F0ZSB0aGF0IHRoZSBjb3VudGVyIGlzIG5lYXIgbWF4aW11bS4gV2hlbiBtYXhpbXVtIGlzIHJlYWNoZWQsIHRleHQgaW5wdXQgaXMgbm90IGFsbG93ZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBzaG93Q2hhckNvdW50KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2hvd0NoYXJDb3VudCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc2hvd0NoYXJDb3VudCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zaG93Q2hhckNvdW50ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgd2hldGhlciB0aGUgZWRpdG9yIG1heSBiZSBjaGVja2VkIGZvciBzcGVsbGluZyBlcnJvcnMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBzcGVsbENoZWNrKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc3BlbGxDaGVjayA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc3BlbGxDaGVjayh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zcGVsbENoZWNrID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIHJlZnJlc2ggaW50ZXJ2YWwgZm9yIHRoZSBTb3VyY2UgQ29kZS9QcmV2aWV3IFBhbmVsIHdoZW4gU3BsaXQgTW9kZSBpcyBlbmFibGVkLiAgKi9cblx0QElucHV0KClcblx0Z2V0IHNwbGl0TW9kZVJlZnJlc2hUaW1lb3V0KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zcGxpdE1vZGVSZWZyZXNoVGltZW91dCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc3BsaXRNb2RlUmVmcmVzaFRpbWVvdXQodmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zcGxpdE1vZGVSZWZyZXNoVGltZW91dCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSB0aGVtZS4gVGhlbWUgZGVmaW5lcyB0aGUgbG9vayBvZiB0aGUgZWxlbWVudCAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdGhlbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRoZW1lIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0aGVtZSh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRoZW1lID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIFRvb2xiYXIgaXRlbXMgbGlzdC4gRWFjaCBpdGVtIGNhbiBiZSBzdHJpbmcgcG9pbnRpbmcgdG8gdGhlIG5hbWUgb2YgdGhlIGl0ZW0gb3IgYW4gb2JqZWN0IHRoYXQgZGVmaW5lcyBhIGN1c3RvbSBpdGVtIG9yIGFkZHMgYWRpdGlvbmFsIHNldHRpbmdzIHRvIGFuIGl0ZW0uIFRoZSBuYW1lIG9mIHRoZSBpdGVtcyBhcmUgY2FzZSBpbnNlbnNpdGl2ZS4gQW4gb2JqZWN0IGRlZmluaXRpb24gc2hvdWxkIGNvbnRhaW4gYSBuYW1lIGF0dHJpYnV0ZSB0aGF0IHJlZmVycyB0byB0aGUgbmFtZSBvZiB0aGUgaXRlbSB3aGVuIG1vZGlmaW5nIGFuIGV4aXN0aW5nIHRvb2xiYXIgaXRlbS4gVGhlIG5hbWUgYXR0cmlidXRlIGRldGVybWluZXMgdGhlIGFjdGlvbiBvZiB0aGUgaXRlbS4gSWYgc2V0IHRvICdjdXN0b20nIGl0IGlzIHBvc3NpYmxlIHRvIGNyZWF0ZSBhIGN1c3RvbSB0b29sYmFyIGl0ZW0uIElmIG5hbWUgYXR0cmlidXRlIGlzIG5vdCBzZXQgb3Igbm90IHZhbGlkIGl0IGlzIHRyZWF0ZWQgYXMgYSBzZXBhcmF0b3IsIG5vIGEgdG9vbGJhciBpdGVtLiBUaGUgZm9sbG93aW5nIGl0ZW1zIGFyZSBzdXBwb3J0ZWQgYnkgZGVmYXVsdCBieSB0aGUgRWRpdG9yOiBTb3VyY2VDb2RlIC0gc2hvd3MgdGhlIEhUTUwvUHJldmlldyBQYW5lbCBieSBoaWRpbmcgdGhlIGlucHV0IHBhbmVsLiBJdGVtIHR5cGUgLSAnVG9nZ2xlIGJ1dHRvbicuU3BsaXRNb2RlIC0gc2hvd3MgYm90aCBpbnB1dCBhbmQgSFRNTC9QcmV2aWV3IFBhbmVsIGJ5IHNwbGl0dGluZyB0aGUgRWRpdG9yIGNvbnRlbnQgaW4gdHdvIHNlY3Rpb25zLiBJdGVtIHR5cGUgLSAnVG9nZ2xlIGJ1dHRvbidGdWxsU2NyZWVuIC0gZml0cyB0aGUgdmlld3BvcnQgd2l0aCB0aGUgRWRpdG9yIGJ5IGV4cGFuZGluZyBpdCBvdmVyIHRoZSBwYWdlIGNvbnRlbnQuIEl0ZW0gdHlwZSAtICdUb2dnbGUgYnV0dG9uJy5BbGlnbm1lbnQgLSBhbGlnbnMgdGhlIHNlbGVjdGVkIGNvbnRlbnQuIEl0ZW0gdHlwZSAtICdEcm9wIGRvd24nLkZvbnROYW1lIC0gY2hhbmdlcyB0aGUgZm9udCBmYW1pbHkgb2YgdGhlIHNlbGVjdGVkIGNvbnRlbnQuIEl0ZW0gdHlwZSAtICdkcm9wLWRvd24nLkZvbnRTaXplIC0gY2hhbmdlcyB0aGUgZm9udCBzaXplIG9mIHRoZSBzZWxlY3RlZCBjb250ZW50LiBJdGVtIHR5cGUgLSAnZHJvcC1kb3duJy5Gb3JtYXRzIC0gY2hhbmdlcyB0aGUgZm9ybWF0IG9mIHRoZSBjdXJyZW50IHNlbGVjdGlvbi4gSXRtZSB0eXBlIC0gJ2Ryb3AtZG93bicuVGFibGVSb3dzIC0gYWxsb3dzIHRvIGluc2VydC9yZW1vdmUgYSByb3cgaW50byBhIHNlbGVjdGVkIHRhYmxlIGVsZW1lbnQuIEl0ZW0gdHlwZSAtICdkcm9wLWRvd24nLlRhYmxlQ29sdW1ucyAtIGFsbG93cyB0byBpbnNlcnQvcmVtb3ZlIGEgY29sdW1uIGludG8gYSBzZWxlY3RlZCB0YWJsZSBlbGVtZW50LiBJdG1lIHR5cGUgLSAnZHJvcC1kb3duJy5UYWJsZVZBbGlnbiAtIHNldHMgdGhlIHZlcnRpY2FsIGFsaWdubWVudCBvZiBhIHNlbGVjdGVkIHRhYmxlIGNlbGwuIEl0ZW0gdHlwZSAtICdkcm9wLWRvd24nLlRhYmxlU3R5bGUgLSBzZXRzIGFkZGl0aW9uYWwgc3R5bGluZyB0byBhIHNlbGVjdGVkIHRhYmxlIGluc2lkZSB0aGUgRWRpdG9yLiBJdGVtIHR5cGUgLSAnZHJvcC1kb3duJy5CYWNrZ3JvdW5kQ29sb3IgLSBjaGFuZ2VzIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSBjdXJyZW50IHNlbGVjdGlvbi4gSXRlbSB0eXBlIC0gJ2NvbG9yLWlucHV0Jy5Gb250Q29sb3IgLSBjaGFuZ2VzIHRoZSBmb250IGNvbG9yIG9mIHRoZSBjdXJyZW50IHNlbGVjdGlvbi4gSXRlbSB0eXBlID0gJ2NvbG9yLWlucHV0Jy5Cb2xkIC0gc2V0cyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHRleHQgYXMgYm9sZCBvciBub3QuIEl0ZW0gdHlwZSAtICdidXR0b24nLkl0YWxpYyAtIHNldHMgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCB0ZXh0IGFzIGl0YWxpYy4gSXRlbSB0eXBlIC0gJ2J1dHRvbicuIFVuZGVybGluZSAtIHNldHMgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCB0ZXh0IGFzIHVuZGVybGluZWQuIEl0bWUgdHlwZSAtICdidXR0b24nLlN0cmlrZXRocm91Z2ggLSBzZXQgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCB0ZXh0IGFzIHN0cmlrZXRocm91Z2guIEl0ZW0gdHlwZSAtICdidXR0b24nLkRlbGV0ZSAtIGRlbGV0ZXMgdGhlIGN1cnJlbnQgc2VsZWN0aW9uLiBJdGVtIHR5cGUgLSAnYnV0dG9uJy5VbmRvIC0gdW5kb2VzIHRoZSBsYXN0IG9wZXJhdGlvbi4gSXRlbSB0eXBlIC0gJ2J1dHRvbicuUmVkbyAtIHJlZG9lcyB0aGUgcHJldmlvdXMgb3BlcmF0aW9uLiBJdGVtIHR5cGUgLSAnYnV0dG9uJy5JbmRlbnQgLSBpbmRlbnRzIHRoZSBjdXJyZW50IHNlbGVjdGlvbiBvbmNlLiBJdGVtIHR5cGUgLSAnYnV0dG9uJy5PdXRkZW50IC0gb3V0ZGVudHMgdGhlIGN1cnJlbnQgc2VsZWN0aW9uIG9uY2UuIEl0ZW0gdHlwZSAtICdidXR0b24nLk9wZW5MaW5rIC0gdHJpZ2dlcnMgYSBoeXBlcmxpbmsuIEl0ZW0gdHlwZSAtICdidXR0b24nLkVkaXRMaW5rIC0gY3JlYXRlcy9lZGl0cyB0aGUgc2VsZWN0ZWQgaHlwZXJsaW5rLiBJdGVtIHR5cGUgLSAnYnV0dG9uJy5DcmVhdGVMaW5rIC0gY3JlYXRlcy9lZGl0cyB0aGUgc2VsZWN0ZWQgaHlwZXJsaW5rLiBJdGVtIHR5cGUgLSAnYnV0dG9uJy5SZW1vdmVMaW5rIC0gcmVtb3ZlcyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGh5cGVybGluay4gSXRlbSB0eXBlIC0gJ2J1dHRvbicuSHlwZXJsaW5rIC0gc2FtZSBhcyBjcmVhdGVMaW5rLCB0cmlnZ2VycyBhIERpYWxvZyBXaW5kb3cgZm9yIGxpbmsgY3JlYXRpb24uIEl0ZW0gdHlwZSAtICdidXR0b24nLkN1dCAtIEN1dHMgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCB0ZXh0LiBJdGVtIHR5cGUgLSAnYnV0dG9uJy5Db3B5IC0gY29waWVzIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgdGV4dC4gSXRlbSB0eXBlIC0gJ2J1dHRvbidQYXN0ZSAtIHBhc3RlcyB0aGUgY3VycmVubHkgY29waWVkL2N1dCB0ZXh0IGZyb20gdGhlIENsaXBib2FyZC4gSXRlbSB0eXBlID0gJ2J1dHRvbicgb3IgJ2Ryb3AtZG93bicgd2hlbiBhZHZhbmNlZCBhdHRyaWJ1dGUgaXMgc2V0IHRvICd0cnVlJy5JbWFnZSAtIHRyaWdnZXJzIGEgRGlhbG9nIFdpbmRvdyB0byBpbnNlcnQvZWRpdCBhbiBpbWFnZS4gSXRlbSB0eXBlIC0gJ2J1dHRvbicuVmlkZW8gLSB0cmlnZ2VycyBhIERpYWxvZyBXaW5kb3cgdG8gaW5zZXJ0L2VkaXQgYSB2aWRlby4gSXRlbSB0eXBlIC0gJ2J1dHRvbicuTG93ZXJDYXNlIC0gY2hhbmdlcyB0aGUgY3VycmVudCBzZWxlY3Rpb24gdG8gbG93ZXIgY2FzZS4gSXRlbSB0eXBlIC0gJ2J1dHRvbicuVXBwZXJDYXNlIC0gY2hhbmdlcyB0aGUgY3VycmVudCBzZWxlY3Rpb24gdG8gdXBwZXIgY2FzZS4gSXRlbSB0eXBlIC0gJ2J1dHRvbicuUHJpbnQgLSBvcGVucyB0aGUgYnJvd3NlciBwcmludCBwcmV2aWV3IHdpbmRvdy4gSXRlbSB0eXBlIC0gJ2J1dHRvbicuQ2FwdGlvbiAtIGluc2VydC9yZW1vdmUgYSBjYXB0aW9uIHdoZW4gYSB0YWJsZSBpcyBzZWxlY3RlZC4gSXRlbSB0eXBlIC0gJ2J1dHRvbicuQ2xlYXJGb3JtYXQgLSByZW1vdmVzIHRoZSBmb3JtYXR0aW5nIG9mIHRoZSBjdXJybnRseSBzZWxlY3RlZCB0ZXh0LiBJdGVtIHR5cGUgLSAnYnV0dG9uJy5UYWJsZSAtIHRyaWdnZXJzIGEgRGlhbG9nIFdpbmRvdyB0byBpbnNlcnQgYSB0YWJsZS4gSXRlbSB0eXBlIC0gJ2J1dHRvbicuVGFibGVIZWFkZXIgLSBpbnNlcnQvcmVtb3ZlIGEgaGVhZGVyIHJvdyB0byB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHRhYmxlLiBJdGVtIHR5cGUgLSAnYnV0dG9uJy5PcmRlcmVkTGlzdCAtIGluc2VydC9yZW1vdmUgYW4gb3JkZXIgbGlzdC4gSXRlbSB0eXBlID0gJ2J1dHRvbicuVW5vcmRlcmVkTGlzdCAtIGluc2VydC9yZW1vdmUgYW4gdW5vcmRlcmVkIGxpc3QuIEl0ZW0gdHlwZSAtICdidXR0b24nLlN1YnNjcmlwdCAtIGNoYW5nZXMgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCB0ZXh0IHRvIHN1YnNjcmlwdC4gSXRlbSB0eXBlIC0gJ2J1dHRvbicuU3VwZXJzY3JpcHQgLSBjaGFuZ2VzIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgdGV4dCB0byBzdXBlcnNjcmlwdC4gSXRlbSB0eXBlIC0gJ2J1dHRvbicuRmluZEFuZFJlcGxhY2UgLSBvcGVucyBhIGRpYWxvZyB0aGF0IGFsbG93cyB0byBmaW5kIGFuZCByZXBsYWNlIHRleHQgaW5zaWRlIHRoZSBFZGl0b3IncyBjb250ZW50IHNlY3Rpb24uIEl0ZW0gdHlwZSAtICdidXR0b24nLiAgVGhlIGlubGluZVRvb2xiYXJJdGVtcyBhdHRyaWJ1dGUgaXMgYXBwbGljYWJsZSBvbmx5IHRvIHRoZSBmb2xsb3dpbmcgaXRlbXM6ICd0YWJsZScsICdpbWFnZScsICdoeXBlcmxpbmsnLiBJdCBhY2NlcHRzIHRoZSBzYW1lIHR5cGUgb2YgdmFsdWUgYXMgdG9vbGJhckl0ZW1zIHByb3BlcnR5IGJ1dCB0aGUgdG9vbGJhciBpdGVtcyB3aWxsIGJlIHBsYWNlZCBpbnNpbmRlIHRoZSBJbmxpbmUgVG9vbGJhciBpbnN0ZWFkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdG9vbGJhckl0ZW1zKCk6IFRvb2xiYXJJdGVtW10ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudG9vbGJhckl0ZW1zIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0b29sYmFySXRlbXModmFsdWU6IFRvb2xiYXJJdGVtW10pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudG9vbGJhckl0ZW1zID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIHRvb2xiYXIgbW9kZSBvZiB0aGUgRWRpdG9yLiBUaGUgbWFpbiB0b29sYmFyIG9mIHRoZSBFZGl0b3IgY2FuIGFwcGVhciBhcyBhIFJpYmJvbiBvciBhcyBhIE1lbnUuICovXG5cdEBJbnB1dCgpXG5cdGdldCB0b29sYmFyTW9kZSgpOiBUb29sYmFyTW9kZSB8IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50b29sYmFyTW9kZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdG9vbGJhck1vZGUodmFsdWU6IFRvb2xiYXJNb2RlIHwgc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRvb2xiYXJNb2RlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEFsbG93cyB0byBjb25maWd1cmUgdGhlIFNpbmdsZUxpbmVSaWJib24gYXBwZWFyYW5jZSBieSBjaGFuZ2luZyB0aGUgb3JkZXIgYW5kIGl0ZW1zIG9mIHRoZSBncm91cHMuICovXG5cdEBJbnB1dCgpXG5cdGdldCB0b29sYmFyUmliYm9uQ29uZmlnKCk6IHsgbmFtZTogc3RyaW5nLCBncm91cHM6IHsgbmFtZTogc3RyaW5nLCBpdGVtczogc3RyaW5nW10gfVtdIH1bXSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50b29sYmFyUmliYm9uQ29uZmlnIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0b29sYmFyUmliYm9uQ29uZmlnKHZhbHVlOiB7IG5hbWU6IHN0cmluZywgZ3JvdXBzOiB7IG5hbWU6IHN0cmluZywgaXRlbXM6IHN0cmluZ1tdIH1bXSB9W10pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudG9vbGJhclJpYmJvbkNvbmZpZyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBmb3JtYXQgb2YgdGhlIGNvbnRlbnQgdGhhdCB3aWxsIGJlIHBhc3RlZCBpbnNpZGUgdGhlIEVkaXRvci4gKi9cblx0QElucHV0KClcblx0Z2V0IHRvb2xiYXJWaWV3TW9kZSgpOiBUb29sYmFyVmlld01vZGUgfCBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudG9vbGJhclZpZXdNb2RlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0b29sYmFyVmlld01vZGUodmFsdWU6IFRvb2xiYXJWaWV3TW9kZSB8IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50b29sYmFyVmlld01vZGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU3RpY2tzIHRoZSBUb29sYmFyIHRvIHRoZSB0b3Agb2YgdGhlIHdpbmRvdyBhbmQgc3RheXMgdGhlcmUgd2hpbGUgc2Nyb2xsaW5nLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdG9vbGJhclN0aWNreSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRvb2xiYXJTdGlja3kgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRvb2xiYXJTdGlja3kodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudG9vbGJhclN0aWNreSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBJZiBpcyBzZXQgdG8gdHJ1ZSwgdGhlIGVsZW1lbnQgY2Fubm90IGJlIGZvY3VzZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCB1bmZvY3VzYWJsZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnVuZm9jdXNhYmxlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB1bmZvY3VzYWJsZSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC51bmZvY3VzYWJsZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIHZhbHVlIG9mIHRoZSBFZGl0b3IuICovXG5cdEBJbnB1dCgpXG5cdGdldCB2YWx1ZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQSBmdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkIHRvIGNvbXBsZXRseSBjdXN0b21pemUgdGhlIEVkaXRvciBkaWFsb2cgdGhhdCBpcyB1c2VkIHRvIGluc2VydC9lZGl0IHRhYmxlcy9pbWFnZXMvdmlkZW9zL2h5cGVybGlua3MuIFRoZSBmdW5jdGlvbiBhY2NlcHRzIHR3byBhcmd1bWVudHM6IHRhcmdldCAtIHRoZSB0YXJnZXQgZGlhbG9nIHRoYXQgaXMgYWJvdXQgdG8gYmUgb3BlbmVkLml0ZW0gLSB0aGUgdG9vbGJhciBpdGVtIG9iamVjdCB0aGF0IHRyaWdnZXIgdGhlIGRpYWxvZy4gKi9cblx0QElucHV0KClcblx0Z2V0IHdpbmRvd0N1c3RvbWl6YXRpb25GdW5jdGlvbigpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQud2luZG93Q3VzdG9taXphdGlvbkZ1bmN0aW9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB3aW5kb3dDdXN0b21pemF0aW9uRnVuY3Rpb24odmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC53aW5kb3dDdXN0b21pemF0aW9uRnVuY3Rpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgb24gYmx1ciBpZiB0aGUgY29udGVudCBpcyBjaGFuZ2VkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdG9sZFZhbHVlLCBcdHZhbHVlKVxuXHQqICAgb2xkVmFsdWUgLSBUaGUgb2xkIHZhbHVlIGJlZm9yZSB0aGUgY2hhbmdlLlxuXHQqICAgdmFsdWUgLSBUaGUgbmV3IHZhbHVlIGFmdGVyIHRoZSBjaGFuZ2UuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkNoYW5nZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIGFmdGVyIHVzZXIgaW5wdXQgdG8gaW5kaWNhdGUgdGhhdCB0aGUgY29udGVudCBpcyBjaGFuZ2VkIHZpYSB1c2VyIGludGVyYWN0aW9uLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdG9sZFZhbHVlLCBcdHZhbHVlKVxuXHQqICAgb2xkVmFsdWUgLSBUaGUgb2xkIHZhbHVlIGJlZm9yZSB0aGUgaW5wdXQgY2hhbmdlLlxuXHQqICAgdmFsdWUgLSBUaGUgbmV3IHZhbHVlIGFmdGVyIHRoZSBpbnB1dCBjaGFuZ2UuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkNoYW5naW5nOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgYmVmb3JlIGEgVG9vbGJhciBhY3Rpb24gaXMgc3RhcnRlZC4gVGhlIGV2ZW50IGNhbiBiZSBjYW5jZWxlZCB2aWEgZXZlbnQucHJldmVudERlZmF1bHQoKS5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRuYW1lKVxuXHQqICAgbmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBhY3Rpb24uXG5cdCovXG5cdEBPdXRwdXQoKSBvbkFjdGlvblN0YXJ0OiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIFRvb2xiYXIgYWN0aW9uIGhhcyBlbmRlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRuYW1lKVxuXHQqICAgbmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBhY3Rpb24uXG5cdCovXG5cdEBPdXRwdXQoKSBvbkFjdGlvbkVuZDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSBDb250ZXh0IG1lbnUgaXRlbSBoYXMgYmVlbiBjbGlja2VkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdG9yaWdpbmFsRXZlbnQsIFx0dmFsdWUpXG5cdCogICBvcmlnaW5hbEV2ZW50IC0gVGhlIG9yaWdpbmFsIGNsaWNrIGV2ZW50LlxuXHQqICAgdmFsdWUgLSBUaGUgdmFsdWUgb2YgdGhlIGl0ZW0uXG5cdCovXG5cdEBPdXRwdXQoKSBvbkNvbnRleHRNZW51SXRlbUNsaWNrOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgQ29udGV4dCBNZW51IGlzIG9wZW5lZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHR0YXJnZXQsIFx0b3duZXIpXG5cdCogICB0YXJnZXQgLSBUaGUgdG9vbGJhciB0aGF0IGlzIHRoZSB0YXJnZXQgb2YgdGhlIG9wZXJhdGlvbi5cblx0KiAgIG93bmVyIC0gVGhlIHRvb2x0aXAgdGFyZ2V0ICh0aGUgb3duZXIgb2YgdGhlIHRvb2x0aXApLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25Db250ZXh0TWVudU9wZW46IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBDb250ZXh0IE1lbnUgaXMgb3BlbmluZy4gVGhlIG9wZW5pbmcgb3BlcmF0aW9uIGNhbiBiZSBjYW5jZWxlZCB2aWEgZXZlbnQucHJldmVudERlZmF1bHQoKS5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHR0YXJnZXQpXG5cdCogICB0YXJnZXQgLSBUaGUgdG9vbGJhciB0aGF0IGlzIHRoZSB0YXJnZXQgb2YgdGhlIG9wZXJhdGlvbi5cblx0Ki9cblx0QE91dHB1dCgpIG9uQ29udGV4dE1lbnVPcGVuaW5nOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgQ29udGV4dCBNZW51IGlzIGNsb3NlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHR0YXJnZXQsIFx0b3duZXIpXG5cdCogICB0YXJnZXQgLSBUaGUgdG9vbGJhciB0aGF0IGlzIHRoZSB0YXJnZXQgb2YgdGhlIG9wZXJhdGlvbi5cblx0KiAgIG93bmVyIC0gVGhlIHRvb2x0aXAgdGFyZ2V0ICh0aGUgb3duZXIgb2YgdGhlIHRvb2x0aXApLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25Db250ZXh0TWVudUNsb3NlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgQ29udGV4dCBNZW51IGlzIGNsb3NpbmcuIFRoZSBjbG9zaW5nIG9wZXJhdGlvbiBjYW4gYmUgY2FuY2VsZWQgdmlhIGV2ZW50LnByZXZlbnREZWZhdWx0KCkuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dGFyZ2V0KVxuXHQqICAgdGFyZ2V0IC0gVGhlIHRvb2xiYXIgdGhhdCBpcyB0aGUgdGFyZ2V0IG9mIHRoZSBvcGVyYXRpb24uXG5cdCovXG5cdEBPdXRwdXQoKSBvbkNvbnRleHRNZW51Q2xvc2luZzogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYW4gaW1hZ2UvdGFibGUvdmlkZW8gcmVzaXppbmcgaGFzIHN0YXJ0ZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHQqL1xuXHRAT3V0cHV0KCkgb25SZXNpemVTdGFydDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYW4gaW1hZ2UvdGFibGUvdmlkZW8gcmVzaXppbmcgaGFzIGVuZGVkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHRhcmdldClcblx0KiAgIHRhcmdldCAtIFRoZSBlbGVtZW50IHRoYXQgaXMgcmVzaXplZCAoaW1hZ2UvdGFibGUgb3IgdmlkZW8pLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25SZXNpemVFbmQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBpbmxpbmUgVG9vbGJhciBpcyBvcGVuZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dGFyZ2V0LCBcdG93bmVyKVxuXHQqICAgdGFyZ2V0IC0gVGhlIHRvb2xiYXIgdGhhdCBpcyB0aGUgdGFyZ2V0IG9mIHRoZSBvcGVyYXRpb24uXG5cdCogICBvd25lciAtIFRoZSB0b29sdGlwIHRhcmdldCAodGhlIG93bmVyIG9mIHRoZSB0b29sdGlwKS5cblx0Ki9cblx0QE91dHB1dCgpIG9uSW5saW5lVG9vbGJhck9wZW46IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBpbmxpbmUgVG9vbGJhciBpcyBvcGVuaW5nLiBUaGUgb3BlbmluZyBvcGVyYXRpb24gY2FuIGJlIGNhbmNlbGVkIGJ5IGNhbGxpbmcgZXZlbnQucHJldmVudERlZmF1bHQoKSBpbiB0aGUgZXZlbnQgaGFuZGxlciBmdW5jdGlvbi5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHR0YXJnZXQpXG5cdCogICB0YXJnZXQgLSBUaGUgdG9vbGJhciB0aGF0IGlzIHRoZSB0YXJnZXQgb2YgdGhlIG9wZXJhdGlvbi5cblx0Ki9cblx0QE91dHB1dCgpIG9uSW5saW5lVG9vbGJhck9wZW5pbmc6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBpbmxpbmUgVG9vbGJhciBpcyBjbG9zZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dGFyZ2V0LCBcdG93bmVyKVxuXHQqICAgdGFyZ2V0IC0gVGhlIHRvb2xiYXIgdGhhdCBpcyB0aGUgdGFyZ2V0IG9mIHRoZSBvcGVyYXRpb24uXG5cdCogICBvd25lciAtIFRoZSB0b29sdGlwIHRhcmdldCAodGhlIG93bmVyIG9mIHRoZSB0b29sdGlwKS5cblx0Ki9cblx0QE91dHB1dCgpIG9uSW5saW5lVG9vbGJhckNsb3NlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgaW5saW5lIFRvb2xiYXIgaXMgY2xvc2luZy5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHR0YXJnZXQpXG5cdCogICB0YXJnZXQgLSBUaGUgdG9vbGJhciB0aGF0IGlzIHRoZSB0YXJnZXQgb2YgdGhlIG9wZXJhdGlvbi4gVGhlIGNsb3Npbmcgb3BlcmF0aW9uIGNhbiBiZSBjYW5jZWxlZCBieSBjYWxsaW5nIGV2ZW50LnByZXZlbnREZWZhdWx0KCkgaW4gdGhlIGV2ZW50IGhhbmRsZXIgZnVuY3Rpb24uXG5cdCovXG5cdEBPdXRwdXQoKSBvbklubGluZVRvb2xiYXJDbG9zaW5nOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgRHJvcCBEb3duIFRvb2xiYXIgaXMgb3BlbmVkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHRhcmdldCwgXHRvd25lcilcblx0KiAgIHRhcmdldCAtIFRoZSB0b29sYmFyIHRoYXQgaXMgdGhlIHRhcmdldCBvZiB0aGUgb3BlcmF0aW9uLlxuXHQqICAgb3duZXIgLSBUaGUgdG9vbHRpcCB0YXJnZXQgKHRoZSBvd25lciBvZiB0aGUgdG9vbHRpcCkuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkRyb3BEb3duVG9vbGJhck9wZW46IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBEcm9wIERvd24gVG9vbGJhciBpcyBvcGVuaW5nLiBUaGUgb3BlbmluZyBvcGVyYXRpb24gY2FuIGJlIGNhbmNlbGVkIGJ5IGNhbGxpbmcgZXZlbnQucHJldmVudERlZmF1bHQoKSBpbiB0aGUgZXZlbnQgaGFuZGxlciBmdW5jdGlvbi5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHR0YXJnZXQpXG5cdCogICB0YXJnZXQgLSBUaGUgdG9vbGJhciB0aGF0IGlzIHRoZSB0YXJnZXQgb2YgdGhlIG9wZXJhdGlvbi5cblx0Ki9cblx0QE91dHB1dCgpIG9uRHJvcERvd25Ub29sYmFyT3BlbmluZzogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIERyb3AgRG93biBUb29sYmFyIGlzIGNsb3NlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHR0YXJnZXQsIFx0b3duZXIpXG5cdCogICB0YXJnZXQgLSBUaGUgdG9vbGJhciB0aGF0IGlzIHRoZSB0YXJnZXQgb2YgdGhlIG9wZXJhdGlvbi5cblx0KiAgIG93bmVyIC0gVGhlIHRvb2x0aXAgdGFyZ2V0ICh0aGUgb3duZXIgb2YgdGhlIHRvb2x0aXApLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25Ecm9wRG93blRvb2xiYXJDbG9zZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIERyb3AgRG93biBUb29sYmFyIGlzIGNsb3NpbmcuIFRoZSBjbG9zaW5nIG9wZXJhdGlvbiBjYW4gYmUgY2FuY2VsZWQgYnkgY2FsbGluZyBldmVudC5wcmV2ZW50RGVmYXVsdCgpIGluIHRoZSBldmVudCBoYW5kbGVyIGZ1bmN0aW9uLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHRhcmdldClcblx0KiAgIHRhcmdldCAtIFRoZSB0b29sYmFyIHRoYXQgaXMgdGhlIHRhcmdldCBvZiB0aGUgb3BlcmF0aW9uLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25Ecm9wRG93blRvb2xiYXJDbG9zaW5nOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgdGhlIERpYWxvZyBXaW5kb3cgaXMgb3BlbmVkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHRhcmdldCwgXHRpdGVtKVxuXHQqICAgdGFyZ2V0IC0gVGhlIHdpbmRvdyB0aGF0IGlzIHRoZSB0YXJnZXQgb2YgdGhlIG9wZXJhdGlvbi5cblx0KiAgIGl0ZW0gLSBUaGUgdG9vbGJhciBpdGVtIGlzIHRoZSB0YXJnZXQgb2YgdGhlIG9wZXJhdGlvbi5cblx0Ki9cblx0QE91dHB1dCgpIG9uRGlhbG9nT3BlbjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIGJlZm9yZSB0aGUgRGlhbG9nIFdpbmRvdyBpcyBvcGVuZWQuIFRoZSBldmVudCBjYW4gYmUgcHJldmVudGVkIHZpYSBldmVudC5wcmV2ZW50RGVmYXVsdCgpLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHRhcmdldCwgXHRpdGVtKVxuXHQqICAgdGFyZ2V0IC0gVGhlIHdpbmRvdyB0aGF0IGlzIHRoZSB0YXJnZXQgb2YgdGhlIG9wZXJhdGlvbi5cblx0KiAgIGl0ZW0gLSBUaGUgdG9vbGJhciBpdGVtIHRoYXQgaXMgdGhlIHRhcmdldCBvZiB0aGUgb3BlcmF0aW9uLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25EaWFsb2dPcGVuaW5nOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgRGlhbG9nIFdpbmRvdyBpcyBjbG9zZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dGFyZ2V0LCBcdGl0ZW0pXG5cdCogICB0YXJnZXQgLSBUaGUgd2luZG93IHRoYXQgaXMgdGhlIHRhcmdldCBvZiB0aGUgb3BlcmF0aW9uLlxuXHQqICAgaXRlbSAtIFRoZSB0b29sYmFyIGl0ZW0gdGhhdCBpcyB0aGUgdGFyZ2V0IG9mIHRoZSBvcGVyYXRpb24uXG5cdCovXG5cdEBPdXRwdXQoKSBvbkRpYWxvZ0Nsb3NlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgYmVmb3JlIHRoZSBEaWFsb2cgV2luZG93IGlzIGNsb3NpbmcuIFRoZSBldmVudCBjYW4gYmUgcHJldmVudGVkIHZpYSBldmVudC5wcmV2ZW50RGVmYXVsdCgpLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHRhcmdldCwgXHRpdGVtKVxuXHQqICAgdGFyZ2V0IC0gVGhlIHdpbmRvdyB0aGF0IGlzIHRoZSB0YXJnZXQgb2YgdGhlIG9wZXJhdGlvbi5cblx0KiAgIGl0ZW0gLSBUaGUgdG9vbGJhciBpdGVtIHRoYXQgaXMgdGhlIHRhcmdldCBvZiB0aGUgb3BlcmF0aW9uLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25EaWFsb2dDbG9zaW5nOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgdXBsb2FkaW5nIG9mIGFuIGltYWdlL3ZpZGVvIGlzIHN1Y2Nlc3NmdWwuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dGFyZ2V0LCBcdGl0ZW0sIFx0ZmlsZW5hbWUsIFx0dHlwZSwgXHRzaXplLCBcdGluZGV4LCBcdHN0YXR1cywgXHRzZXJ2ZXJSZXNwb25zZSlcblx0KiAgIHRhcmdldCAtIFRoZSBmaWxlIHVwbG9hZCBlbGVtZW50IHRoYXQgaXMgdGhlIHRhcmdldCBvZiB0aGUgb3BlcmF0aW9uLlxuXHQqICAgaXRlbSAtIFRoZSB0b29sYmFyIGl0ZW0gdGhhdCBpcyB0aGUgdGFyZ2V0IG9mIHRoZSBvcGVyYXRpb24uXG5cdCogICBmaWxlbmFtZSAtIFRoZSBuYW1lIG9mIHRoZSB1cGxvYWRlZCBmaWxlLlxuXHQqICAgdHlwZSAtIFRoZSB0eXBlIG9mIHRoZSB1cGxvYWRlZCBmaWxlLlxuXHQqICAgc2l6ZSAtIFRoZSBzaXplIG9mIHRoZSB1cGxvYWRlZCBmaWxlLlxuXHQqICAgaW5kZXggLSBUaGUgaW5kZXggb2YgdGhlIHVwbG9hZGVkIGZpbGUuXG5cdCogICBzdGF0dXMgLSBUaGUgc3RhdHVzIG9mIHRoZSB1cGxvYWRlZCBmaWxlLiBXaGV0aGVyIHRoZXJlIHdhcyBhbiBlcnJvciBvciBzdWNjZXNzLlxuXHQqICAgc2VydmVyUmVzcG9uc2UgLSBUaGUgcmVzcG9uc2Ugb2YgdGhlIHJlbW90ZSBzZXJ2ZXIuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkltYWdlVXBsb2FkU3VjY2VzczogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHVwbG9hZGluZyBvZiBhbiBpbWFnZS92aWRlbyBpcyB1bnN1Y2Nlc3NmdWwuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dGFyZ2V0LCBcdGl0ZW0sIFx0ZmlsZW5hbWUsIFx0dHlwZSwgXHRzaXplLCBcdGluZGV4LCBcdHN0YXR1cywgXHRzZXJ2ZXJSZXNwb25zZSlcblx0KiAgIHRhcmdldCAtIFRoZSBmaWxlIHVwbG9hZCBlbGVtZW50IHRoYXQgaXMgdGhlIHRhcmdldCBvZiB0aGUgb3BlcmF0aW9uLlxuXHQqICAgaXRlbSAtIFRoZSB0b29sYmFyIGl0ZW0gdGhhdCBpcyB0aGUgdGFyZ2V0IG9mIHRoZSBvcGVyYXRpb24uXG5cdCogICBmaWxlbmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBjYW5jZWxlZCBmaWxlLlxuXHQqICAgdHlwZSAtIFRoZSB0eXBlIG9mIHRoZSBjYW5jZWxlZCBmaWxlLlxuXHQqICAgc2l6ZSAtIFRoZSBzaXplIG9mIHRoZSBjYW5jZWxlZCBmaWxlLlxuXHQqICAgaW5kZXggLSBUaGUgaW5kZXggb2YgdGhlIGNhbmNlbGVkIGZpbGUuXG5cdCogICBzdGF0dXMgLSBUaGUgc3RhdHVzIG9mIHRoZSB1cGxvYWRlZCBmaWxlLiBXaGV0aGVyIHRoZXJlIHdhcyBhbiBlcnJvciBvciBzdWNjZXNzLlxuXHQqICAgc2VydmVyUmVzcG9uc2UgLSBUaGUgcmVzcG9uc2Ugb2YgdGhlIHJlbW90ZSBzZXJ2ZXIuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkltYWdlVXBsb2FkRmFpbGVkOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIFRvb2xiYXIgaXRlbSBpcyBjbGlja2VkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdG9yaWdpbmFsRXZlbnQsIFx0dmFsdWUpXG5cdCogICBvcmlnaW5hbEV2ZW50IC0gVGhlIG9yaWdpbmFsIGNsaWNrIGV2ZW50LlxuXHQqICAgdmFsdWUgLSBUaGUgbmFtZSBvZiB0aGUgdG9vbGJhciBpdGVtIHRoYXQgd2FzIGNsaWNrZWQuXG5cdCovXG5cdEBPdXRwdXQoKSBvblRvb2Jhckl0ZW1DbGljazogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSBtZXNzYWdlIGlzIGNsb3NlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRpbnN0YW5jZSlcblx0KiAgIGluc3RhbmNlIC0gVGhlIHRvYXN0IGl0ZW0gdGhhdCBpcyB0aGUgdGFyZ2V0IG9mIHRoZSBvcGVyYXRpb24uXG5cdCovXG5cdEBPdXRwdXQoKSBvbk1lc3NhZ2VDbG9zZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSBtZXNzYWdlIGlzIG9wZW5lZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRpbnN0YW5jZSlcblx0KiAgIGluc3RhbmNlIC0gVGhlIHRvYXN0IGl0ZW0gdGhhdCBpcyB0aGUgdGFyZ2V0IG9mIHRoZSBvcGVyYXRpb24uXG5cdCovXG5cdEBPdXRwdXQoKSBvbk1lc3NhZ2VPcGVuOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gQmx1cnMgdGhlIGNvbnRlbnQgb2YgdGhlIEVkaXRvci4gXG5cdCovXG4gICAgcHVibGljIGJsdXIoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmJsdXIoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIENsZWFycyB0aGUgY29udGVudCBvZiB0aGUgRWRpdG9yLiBcblx0Ki9cbiAgICBwdWJsaWMgY2xlYXJDb250ZW50KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbGVhckNvbnRlbnQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbGVhckNvbnRlbnQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ29sbGFwc2UgdGhlIFRvb2xiYXIgaWYgdGhlIHRvb2xiYXJWaWV3TW9kZSBpcyBzZXQgdG8gJ3RvZ2dsZScuIFxuXHQqL1xuICAgIHB1YmxpYyBjb2xsYXBzZVRvb2xiYXIoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNvbGxhcHNlVG9vbGJhcigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNvbGxhcHNlVG9vbGJhcigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEaXNhYmxlcyBhIFRvb2xiYXIgaXRlbS4gXG5cdCogQHBhcmFtIHtzdHJpbmd9IGl0ZW1OYW1lLiBUaGUgbmFtZSBvZiB0aGUgdG9vbGJhciBpdGVtIHRvIGRpc2FibGUuXG5cdCovXG4gICAgcHVibGljIGRpc2FibGVUb29sYmFySXRlbShpdGVtTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVUb29sYmFySXRlbShpdGVtTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZVRvb2xiYXJJdGVtKGl0ZW1OYW1lKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRXhwYW5kIHRoZSBUb29sYmFyIGlmIHRoZSB0b29sYmFyVmlld01vZGUgaXMgc2V0IHRvICd0b2dnbGUnLiBcblx0Ki9cbiAgICBwdWJsaWMgZXhwYW5kVG9vbGJhcigpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZXhwYW5kVG9vbGJhcigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmV4cGFuZFRvb2xiYXIoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRW5hYmxlcyBhIHByZXZpb3VzbHkgZGlzYWJsZWQgVG9vbGJhciBpdGVtLiBcblx0KiBAcGFyYW0ge3N0cmluZ30gaXRlbU5hbWUuIFRoZSBuYW1lIG9mIHRoZSB0b29sYmFyIGl0ZW0gdG8gZW5hYmxlLlxuXHQqL1xuICAgIHB1YmxpYyBlbmFibGVUb29sYmFySXRlbShpdGVtTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmVuYWJsZVRvb2xiYXJJdGVtKGl0ZW1OYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5lbmFibGVUb29sYmFySXRlbShpdGVtTmFtZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEV4ZWN1dGVzIGEgY29tbWFuZCB2aWEgdGhlIG5hdGl2ZSBleGVjQ29tbWFuZCBtZXRob2QuIFRoZSBtZXRob2QgcmV0dXJucyB0cnVlIG9yIGZhbHNlIGRlcGVuZGluZyBvbiB3aGV0aGVyIHRoZSBleGVjdXRpb24gd2FzIHN1Y2Nlc3NmdWwgb3Igbm90LiBUaGUgZm9sbG93aW5nIGxpc3Qgb2YgY29tbWFuZHMgY2FuIGJlIGVleGVjdXRlZDogYm9sZCAtIG1ha2VzIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgY29udGVudCBib2xkLiBFeGFtcGxlOiBlZGl0b3IuZXhlY3V0ZUNvbW1hbmQoJ2JvbGQnKTtpdGFsaWMgLSBtYWtlcyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGNvbnRlbnQgaXRhbGljLiBFeGFtcGxlOiBlZGl0b3IuZXhlY3V0ZUNvbW1hbmQoJ2l0YWxpYycpO3VuZGVsaW5lZCAtIG1ha2VzIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgY29udGVudCB1bmRlcmxpbmVkLiBFeGFtcGxlOiBlZGl0b3IuZXhlY3V0ZUNvbW1hbmQoJ3VuZGVybGluZScpO3N0cmlrZVRocm91Z2ggLSBhcHBsaWVzIGEgc2luZ2xlIGxpbmUgc3RyaWtlIHRocm91Z2ggZm9ybWF0dGluZyB0byB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGNvbnRlbnQuIEV4YW1wbGU6IGVkaXRvci5leGVjdXRlQ29tbWFuZCgnc3RyaWtlVGhyb3VnaCcpO3N1cGVyc2NyaXB0IC0gc2V0cyB0aGUgc2VsZWN0ZWQgY29udGVudCBhcyBzdXBlcnNjcmlwdC4gRXhhbXBsZTogZWRpdG9yLmV4ZWN1dGVDb21tYW5kKCdzdXBlcnNjcmlwdCcpO3N1YnNjcmlwdCAtIHNldHMgdGhlIHNlbGVjdGVkIGNvbnRlbnQgYXMgc3VwZXJzY3JpcHQuIEV4YW1wbGU6IGVkaXRvci5leGVjdXRlQ29tbWFuZCgnc3Vic2NyaXB0Jyk7dXBwZXJjYXNlIC0gY2hhbmdlcyB0aGUgY2FzZSBvZiB0aGUgY3VycmVudCBzZWxlY3Rpb24gdG8gdXBwZXIuIEV4YW1wbGU6IGVkaXRvci5leGVjdXRlQ29tbWFuZCgndXBwZXJjYXNlJyk7bG93ZXJjYXNlIC0gY2hhbmdlcyB0aGUgY2FzZSBvZiB0aGUgY3VycmVudCBzZWxlY3Rpb24gdG8gbG93ZXIuIEV4YW1wbGU6IGVkaXRvci5leGVjdXRlQ29tbWFuZCgnbG93ZXJjYXNlJyk7Zm9yZUNvbG9yIC0gY2hhbmdlcyB0aGUgZm9udCBjb2xvciBvZiB0aGUgY3VycmVudCBjb250ZW50IHNlbGVjdGlvbi4gRXhhbXBsZTogZWRpdG9yLmV4ZWN1dGVDb21tYW5kKCdmb3JlQ29sb3InLCAnIzAwMDAwMCcpO2ZvbnROYW1lIC0gY2hhbmdlcyB0aGUgZm9udCBuYW1lIGZvciB0aGUgc2VsZWN0ZWQgY29udGVudC4gRXhhbXBsZTogZWRpdG9yLmV4ZWN1dGVDb21tYW5kKCdmb250TmFtZScsICdBcmlhbCcpO2ZvbnRTaXplIC0gY2hhbmdlcyB0aGUgZm9udCBzaXplIG9mIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgY29udGVudC4gRXhhbXBsZTogZWRpdG9yLmV4ZWN1dGVDb21tYW5kKCdmb250U2l6ZScsICcxNXB4Jyk7aGlsaXRlQ29sb3IgLSBjaGFuZ2VzIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIGN1cnJlbnQgc2VsZWN0aW9uLiBFeGFtcGxlOiBlZGl0b3IuZXhlY3V0ZUNvbW1hbmQoJ2hpbGl0ZUNvbG9yJywgJyMwMDAwMDAnKTtqdXN0aWZ5Q2VudGVyIC0gYWxpZ25zIHRoZSBjb250ZW50IHRvIHRoZSBjZW50ZXIuIEV4YW1wbGU6IGVkaXRvci5leGVjdXRlQ29tbWFuZCgnanVzdGlmeUNlbnRlcicpO2p1c3RpZnlGdWxsIC0gYWxpZ25zIHRoZSBjb250ZW50IHRvIGJlIGZ1bGx5IGp1c3RpZmllZC4gRXhhbXBsZTogZWRpdG9yLmV4ZWN1dGVDb21tYW5kKCdqdXN0aWZ5RnVsbCcpO2p1c3RpZnlMZWZ0IC0gYWxpZ25zIHRoZSBjb250ZW50IHRvIHRoZSBsZWZ0LiBFeGFtcGxlOiBlZGl0b3IuZXhlY3V0ZUNvbW1hbmQoJ2p1c3RpZnlMZWZ0Jyk7anVzdGlmeVJpZ2h0IC0gYWxpZ25zIHRoZSBjb250ZW50IHRvIHRoZSByaWdodC4gRXhhbXBsZTogZWRpdG9yLmV4ZWN1dGVDb21tYW5kKCdqdXN0aWZ5UmlnaHQnKTt1bmRvIC0gYWxsb3dzIHRvIHVuZG8gdGhlIHByZXZpb3VzIGFjdGlvbi4gRXhhbXBsZTogZWRpdG9yLmV4ZWN1dGVDb21tYW5kKCd1bmRvJyk7cmVkbyAtIGFsbG93cyB0byByZWRvIHRoZSBwcmV2aW91cyBhY3Rpb25zLiBFeGFtcGxlOiBlZGl0b3IuZXhlY3V0ZUNvbW1hbmQoJ3JlZG8nKTtjcmVhdGVMaW5rIC0gY3JlYXRlcyBhIGh5cGVybGluayBpbiB0aGUgY29udGVudCBzZWN0aW9uIG9mIHRoZSBFZGl0b3IuIEV4YW1wbGU6IGVkaXRvci5leGVjdXRlQ29tbWFuZCgnY3JlYXRlTGluaycsIHsgdGV4dDogJ0xpbmtzJywgdXJsOiAnaHR0cDovLycsIHRpdGxlIDogJ0xpbmsnIH0pO2luZGVudCAtIGluZGVudHMgdGhlIGNvbnRlbnQgd2l0aCBvbmUgbGV2ZWwuIEV4YW1wbGU6IGVkaXRvci5leGVjdXRlQ29tbWFuZCgnaW5kZW50Jyk7b3V0ZGVudCAtIG91dGRlbnRzIHRoZSBjb250ZW50IHdpdGggb25lIGxldmVsLiBFeGFtcGxlOiBlZGl0b3IuZXhlY3V0ZUNvbW1hbmQoJ291dGRlbnQnKTtpbnNlcnRIVE1MIC0gaW5zZXJ0IGFuIEhUTUwgY29udGVudCBhcyBzdHJpbmcgYXQgdGhlIGN1cnJlbnQgY3Vyc29yIGxvY2F0aW9uLiBFeGFtcGxlOiBlZGl0b3IuZXhlY3V0ZUNvbW1hbmQoJ2luc2VydEhUTUwnLCAnVGV4dCcpO2luc2VydE9yZGVyZWRMaXN0IC0gaW5zZXJ0cyBhIG5ldyBudW1iZXJlZCBsaXN0IGl0ZW0uIEV4YW1wbGU6IGVkaXRvci5leGVjdXRlQ29tbWFuZCgnaW5zZXJ0T3JkZXJlZExpc3QnKTtpbnNlcnRVbm9yZGVyZWRMaXN0IC0gaW5zZXJ0cyBhIG5ldyBidWxsZXRlZCBsaXN0IGl0ZW0uIEV4YW1wbGU6IGVkaXRvci5leGVjdXRlQ29tbWFuZCgnaW5zZXJ0VW5vcmRlcmVkTGlzdCcpO3JlbW92ZUZvcm1hdCAtIHJlbW92ZXMgdGhlIGZvcm1hdHRpbmcgc3R5bGVzIGZyb20gY3VycmVudGx5IHNlbGVjdGVkIHRleHQuIEV4YW1wbGU6IGVkaXRvci5leGVjdXRlQ29tbWFuZCgncmVtb3ZlRm9ybWF0Jyk7aW5zZXJ0VGV4dCAtIGluc2VydHMgYSB0ZXh0IGF0IHRoZSBjdXJyZW50IGN1cnNvciBsb2NhdGlvbi4gRXhhbXBsZTogZWRpdG9yLmV4ZWN1dGVDb21tYW5kKCdpbnNlcnRUZXh0JywgJ1NvbWUgdGV4dCB0byBpbnNlcnQnKTtpbnNlcnRJbWFnZSAtIGluc2VydHMgYW4gaW1hZ2UgYXQgdGhlIGN1cnJlbnQgY3Vyc29yIGxvY2F0aW9uLiBFeGFtcGxlOiBlZGl0b3IuZXhlY3V0ZUNvbW1hbmQoJ2luc2VydEltYWdlJywgeyB1cmw6ICdodHRwczovL3d3dy5odG1sZWxlbWVudHMuY29tL2RlbW9zL2ltYWdlcy9jYXJvdXNlbC1tZWRpdW0tMi5qcGcnfSk7IFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBjb21tYW5kTmFtZS4gVGhlIG5hbWUgb2YgdGhlIGNvbW1hbmQgdG8gZXhlY3V0ZS5cblx0KiBAcGFyYW0ge3N0cmluZyB8IG51bWJlcn0gdmFsdWU/LiBUaGUgdmFsdWUgZm9yIHRoZSBjb21tYW5kLiBTb21lIGNvbW1hbmRzIHJlcXVpcmUgYSB2YWx1ZSB0byBiZSBwYXNzZWQsIG90aGVycyBkbyBub3QuXG5cdCogQHJldHVybnMge2Jvb2xlYW59XG4gICovXG5cdHB1YmxpYyBhc3luYyBleGVjdXRlQ29tbWFuZChjb21tYW5kTmFtZSwgdmFsdWU/KTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmV4ZWN1dGVDb21tYW5kKGNvbW1hbmROYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBGb2N1c2VzIHRoZSBjb250ZW50IG9mIHRoZSBFZGl0b3IuIFxuXHQqL1xuICAgIHB1YmxpYyBmb2N1cygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgY2hhcmFjdGVycyBpbnNpZGUgdGhlIEVkaXRvcidzIGNvbnRlbnQuIFxuXHQqIEByZXR1cm5zIHtudW1iZXJ9XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRDaGFyQ291bnQoKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldENoYXJDb3VudCgpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0aGUgY3VycmVudCBzZWxlY3Rpb24gcmFuZ2UuIEJ5IGRlZmF1bHQgdGhlIHJlc3VsdCBpcyBhbiBvYmplY3Qgb2YgdHlwZSBSYW5nZSwgYnV0IGlmIHRoZSBlZGl0TW9kZSBwcm9wZXJ0eSBpcyBzZXQgdG8gJ21hcmtkb3duJyB0aGUgcmV0dXJuZWQgdmFsdWUgaXMgYW4gb2JqZWN0IGluZGljYXRpbmcgdGhlIHN0YXJ0L2VuZCBpbmRleGVzIG9mIHRoZSBjdXJyZW50IHNlbGVjdGlvbi4gIFxuXHQqIEByZXR1cm5zIHthbnl9XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRTZWxlY3Rpb25SYW5nZSgpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0U2VsZWN0aW9uUmFuZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJldHVybnMgdGhlIGNvbnRlbnQgb2YgdGhlIEVkaXRvciBhcyBIVE1MLiBXaGVuIGVkaXRNb2RlIGlzIHNldCB0byAnbWFya2Rvd24nIHRoZSBtYXJrZG93biBpcyBwYXJzZWQgYW5kIHJldHVybmVkIGFzIEhUTUwuIFxuXHQqIEByZXR1cm5zIHtzdHJpbmd9XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRIVE1MKCk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRIVE1MKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRoZSBjb250ZW50IG9mIHRoZSBFZGl0b3IgYXMgdGV4dC4gXG5cdCogQHJldHVybnMge3N0cmluZ31cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldFRleHQoKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldFRleHQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEhpZGVzIGEgc3BlY2lmaWMgbWVzc2FnZSBvciBhbGwgbWVzc2FnZXMgaWYgbm8gYXJndW1lbnQgaXMgcHJvdmlkZWQuIFxuXHQqIEBwYXJhbSB7SFRNTEVsZW1lbnQgfCBzdHJpbmcgfCBudW1iZXJ9IGl0ZW0/LiBIaWRlcyBhIHNwZWNpZmljIG1lc3NhZ2UuIFRoZSBhcmd1bWVudCBjYW4gYmUgYSBET00gcmVmZXJlbmNlIHRvIGEgc3BlY2lmaWMgaXRlbSwgaXQncyBpbmRleCBvciBpdCdzIGlkLiBJZiB0aGUgYXJndW1lbnQgaXMgbm90IHByb3ZpZGVkIHRoZW4gYWxsIG1lc3NhZ2VzIHdpbGwgYmUgY2xvc2VkLlxuXHQqL1xuICAgIHB1YmxpYyBoaWRlTWVzc2FnZShpdGVtPzogSFRNTEVsZW1lbnQgfCBzdHJpbmcgfCBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaGlkZU1lc3NhZ2UoaXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaGlkZU1lc3NhZ2UoaXRlbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEhpZGVzIHRoZSBsYXN0IHNob3duIG1lc3NhZ2UuIFxuXHQqL1xuICAgIHB1YmxpYyBoaWRlTGFzdE1lc3NhZ2UoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmhpZGVMYXN0TWVzc2FnZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmhpZGVMYXN0TWVzc2FnZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTaG93cyBhIGN1c3RvbSBtZXNzYWdlIGluc2lkZSB0aGUgRWRpdG9yLiBcblx0KiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZS4gVGhlIHRleHQgbWVzc2FnZSB0byBiZSBkaXNwbGF5ZWQuXG5cdCogQHBhcmFtIHthbnl9IHNldHRpbmdzPy4gQWRkaXRpb25hbCBzZXR0aW5ncyB0aGF0IGNhbiBiZSBhcHBsaWVkIHRvIHRoZSBUb2FzdCBlbGVtZW50IHRoYXQgaGFuZGxlcyB0aGUgbWVzc2FnZXMuIFRoaXMgcGFyYW1ldGVyIHNob3VsZCBjb250YWluIG9ubHkgdmFsaWQgVG9hc3QgcHJvcGVydGllcyBhbmQgdmFsdWVzLlxuXHQqIEByZXR1cm5zIHtIVE1MRWxlbWVudCB8IHVuZGVmaW5lZH1cbiAgKi9cblx0cHVibGljIGFzeW5jIHNob3dNZXNzYWdlKG1lc3NhZ2UsIHNldHRpbmdzPyk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5zaG93TWVzc2FnZShtZXNzYWdlLCBzZXR0aW5ncyk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZWxlY3RzIHRoZSB0ZXh0IGluc2lkZSBFZGl0b3IncyBjb250ZW50LiBcblx0Ki9cbiAgICBwdWJsaWMgc2VsZWN0QWxsKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zZWxlY3RBbGwoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zZWxlY3RBbGwoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2VsZWN0cyBhIHJhbmdlIG9mIHRleHQgaW5zaWRlIHRoZSBFZGl0b3IuIFRoZSBtZXRob2Qgd2lsbCBmaW5kIHRoZSBub2RlcyBjb250YWluaW5nIHRoZSB0ZXh0IGZyb20gdGhlIHN0YXJ0IHRvIHRoZSBlbmQgaW5kZXhlcyBhbmQgd2lsbCBzZWxlY3QgdGhlbSBhcyByYW5nZXMuIEhvd2V2ZXIsIGN1cnJlbnRseSBvbmx5IEZpcmVGb3ggc3VwcG9ydHMgbXVsdGlwbGUgcmFuZ2Ugc2VsZWN0aW9uLiBUaGUgcmVzdCBvZiB0aGUgYnJvd3NlcnMgd2lsbCBvbmx5IHNlbGVjdCB0aGUgZmlyc3Qgbm9kZS4gSWYgdGhlIGVkaXRvciBpcyBpbiAnaHRtbCcgZWRpdE1vZGUgdGhlbiB0aGUgZXhwZWN0ZWQgdGV4dCB3aWxsIGJlIHNlbGVjdGVkIHJlZ2FyZGxlc3Mgb2YgdGhlIGJyb3dzZXIgYmVjYXVzZSB0aGVyZSdzIG9ubHkgb25lIG5vZGUgaW5zaWRlIHRoZSBlZGl0b3IuIFxuXHQqIEBwYXJhbSB7bnVtYmVyfSBzdGFydEluZGV4LiBUaGUgc3RhcnQgaW5kZXggdG8gc2VsZWN0IGZyb20uXG5cdCogQHBhcmFtIHtudW1iZXJ9IGVuZEluZGV4LiBUaGUgZW5kIGluZGV4IHRvIHNlbGVjdCB0by5cblx0Ki9cbiAgICBwdWJsaWMgc2VsZWN0UmFuZ2Uoc3RhcnRJbmRleDogbnVtYmVyLCBlbmRJbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdFJhbmdlKHN0YXJ0SW5kZXgsIGVuZEluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zZWxlY3RSYW5nZShzdGFydEluZGV4LCBlbmRJbmRleCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIENsZWFycyB0aGUgbG9jYWwgc3RvcmFnZSBmcm9tIHByZXZpb3VzbHkgc3RvcmVkIHN0YXRlcyBvZiB0aGUgRWRpdG9yIHdpdGggdGhlIGN1cnJlbnQgaWQuIFxuXHQqL1xuICAgIHB1YmxpYyBjbGVhclN0YXRlKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbGVhclN0YXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xlYXJTdGF0ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTYXZlcyB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgRWRpdG9yIHRvIGxvY2FsIHN0b3JhZ2UuIFJlcXVpcmVzIGFuIGlkIHRvIGJlIHNldCB0byB0aGUgRWRpdG9yLiBcblx0Ki9cbiAgICBwdWJsaWMgc2F2ZVN0YXRlKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zYXZlU3RhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zYXZlU3RhdGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gTG9hZHMgdGhlIGxhc3Qgc3RvcmVkIHN0YXRlIG9mIHRoZSBFZGl0b3IgZnJvbSBsb2NhbCBzdG9yYWdlLiBSZXF1aXJlcyBhbiBpZCB0byBiZSBzZXQgdG8gdGhlIEVkaXRvci4gXG5cdCovXG4gICAgcHVibGljIGxvYWRTdGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQubG9hZFN0YXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQubG9hZFN0YXRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgRWRpdG9yIGludG8gU3BsaXQgTW9kZS4gSW4gc3BsaXQgbW9kZSB0aGUgSFRNTC9NYXJrZG93biBlZGl0b3IgYW5kIFNvdXJjZUNvZGUvUHJldmlldyBwYW5lbHMgYXJlIHZpc2libGUuIFxuXHQqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsdWU/LiBEZXRlcm1pbmVzIHdoZXRoZXIgdG8gZW50ZXIgb3IgbGVhdmUgc3BsaXQgbW9kZS4gQnkgZGVmYXVsdCB0aGUgYXJndW1lbnQgaXMgbm90IHBhc3NlZCBhbmQgdGhlIG1vZGUgaXMgdG9nZ2xlZC5cblx0Ki9cbiAgICBwdWJsaWMgc3BsaXRNb2RlKHZhbHVlPzogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zcGxpdE1vZGUodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNwbGl0TW9kZSh2YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgRWRpdG9yIGludG8gU291cmNlQ29kZS9QcmV2aWV3IE1vZGUuIEluIHRoaXMgbW9kZSB0aGUgSFRNTCB2aWV3IHBhbmVsIGlzIGRpc3BsYXllZC4gXG5cdCogQHBhcmFtIHtib29sZWFufSB2YWx1ZT8uIERldGVybWluZXMgd2hldGhlciB0byBlbnRlciBvciBsZWF2ZSBzcGxpdCBtb2RlLiBCeSBkZWZhdWx0IHRoZSBhcmd1bWVudCBpcyBub3QgcGFzc2VkIGFuZCB0aGUgbW9kZSBpcyB0b2dnbGVkLlxuXHQqL1xuICAgIHB1YmxpYyBwcmV2aWV3TW9kZSh2YWx1ZT86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucHJldmlld01vZGUodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnByZXZpZXdNb2RlKHZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBFZGl0b3IgaW50byBGdWxsIFNjcmVlbiBNb2RlLiBJZiBlbmFibGVkIHRoZSBFZGl0b3IgaXMgcG9zaXRpb25lZCBhYm92ZSB0aGUgcGFnZSBjb250ZW50IGFuZCBmaWxscyB0aGUgc2NyZWVuLiBcblx0KiBAcGFyYW0ge2Jvb2xlYW59IHZhbHVlPy4gRGV0ZXJtaW5lcyB3aGV0aGVyIHRvIGVudGVyIG9yIGxlYXZlIHNwbGl0IG1vZGUuIEJ5IGRlZmF1bHQgdGhlIGFyZ3VtZW50IGlzIG5vdCBwYXNzZWQgYW5kIHRoZSBtb2RlIGlzIHRvZ2dsZWQuXG5cdCovXG4gICAgcHVibGljIGZ1bGxTY3JlZW5Nb2RlKHZhbHVlPzogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5mdWxsU2NyZWVuTW9kZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZnVsbFNjcmVlbk1vZGUodmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFeHBvcnRzIHRoZSBjb250ZW50IG9mIHRoZSBFZGl0b3IgaW4gdGhlIGRlc2lyZWQgZm9ybWF0LiBUaGUgY3VycmVudGx5IHN1cHBvcnRlZCBmb3JtYXRzIGFyZTogSFRNTCwgTWFya2Rvd24gYW5kIFBERi4gXG5cdCogQHBhcmFtIHtzdHJpbmd9IGRhdGFGb3JtYXQuIFRoZSBleHBlY3RlZCBmaWxlIGZvcm1hdC5cblx0KiBAcGFyYW0ge2FueX0gY2FsbGJhY2s/LiBBIGNhbGxiYWNrIHRoYXQgaXMgZXhlY3V0ZWQgYmVmb3JlIHRoZSBkYXRhIGlzIGV4cG9ydGVkLiBBbGxvd3MgdG8gbW9kaWZ5IHRoZSBvdXRwdXQuXG5cdCovXG4gICAgcHVibGljIGV4cG9ydERhdGEoZGF0YUZvcm1hdDogc3RyaW5nLCBjYWxsYmFjaz86IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5leHBvcnREYXRhKGRhdGFGb3JtYXQsIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5leHBvcnREYXRhKGRhdGFGb3JtYXQsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSW1wb3J0cyB0aGUgY29udGVudCBvZiBhIGZpbGUgdG8gdGhlIEVkaXRvci4gVGhlIGN1cnJlbnRseSBzdXBwb3J0ZWQgZm9ybWF0cyBhcmU6IFRYVCBvciBIVE1MLiBcblx0KiBAcGFyYW0ge2FueX0gc291cmNlLiBUaGUgdXJsIHRvIHRoZSBmaWxlIG9yIGFuIG9iamVjdCB0aGF0IGRlZmluZXMgc2V0dGluZ3MgZm9yIHRoZSBBamF4IHJlcXVlc3QgbGlrZSB1cmwsIHRpbWVwdXQsIGV0Yy4gT2JqZWN0IGZvcm1hdDogeyB1cmw6IHN0cmluZywgdHlwZTogc3RyaW5nLCBkYXRhOiBvYmplY3QsIHRpbWVvdXQ6IG51bWJlciB9XG5cdCogQHBhcmFtIHthbnl9IHNldHRpbmdzPy4gQWRkaXRpb25hbCBzZXR0aW5ncyBmb3IgdGhlIGFqYXggcmVxdWVzdC4gU3VjaCBhcyBsb2FkRXJyb3IgZnVuY3Rpb24sIGNvbnRlbnRUeXBlLCBldGMuIEZvcm1hdDogeyBjb250ZW50VHlwZTogc3RyaW5nLCBiZWZvcmVTZW5kOiBGdW5jdGlvbiwgbG9hZEVycm9yOiBGdW5jdGlvbiwgYmVmb3JlTG9hZENvbXBsZXRlOiBGdW5jdGlvbiAgfVxuXHQqL1xuICAgIHB1YmxpYyBpbXBvcnREYXRhKHNvdXJjZTogYW55LCBzZXR0aW5ncz86IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5pbXBvcnREYXRhKHNvdXJjZSwgc2V0dGluZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmltcG9ydERhdGEoc291cmNlLCBzZXR0aW5ncyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIE9wZW5zIHRoZSBQcmludCBQcmV2aWV3IFBhbmVsIG9mIHRoZSBCcm93c2VyIHRvIHByaW50IEVkaXRvcidzIGNvbnRlbnQuIFxuXHQqL1xuICAgIHB1YmxpYyBwcmludCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucHJpbnQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5wcmludCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBbGxvd3MgdG8gdXBkYXRlIHRoZSBzZXR0aW5ncyBvZiBhIHNpbmdsZSB0b29sYmFyIGl0ZW0uIFRoZSBtZXRob2QgcmV0dXJucyB0cnVlIGlmIHN1Y2Nlc3NmdWwuIFxuXHQqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyfSBuYW1lLiBUaGUgbmFtZSBvZiB0aGUgdG9vbGJhciBpdGVtIG9yIGl0J3MgaW5kZXggaW5zaWRlIHRoZSA8Yj50b29sYmFySXRlbXM8L2I+IGFycmF5LlxuXHQqIEBwYXJhbSB7YW55fSBzZXR0aW5ncy4gQSBzZXR0aW5ncyBvYmplY3QgZm9yIHRoZSB0b29sYmFyIGl0ZW0uIEl0IHNob3VsZCBoYXZlIHRoZSBzYW1lIGRlZmluaXRpb24gYXMgd2hlbiBkZWZpbmluZyBhIGN1c3RvbSB0b29sYmFyIGl0ZW0uIFlvdSBjYW4gcmVhZCBtb3JlIGFib3V0IGl0IGluIHRoZSBkZWRpY2F0ZWQgdG9waWMgZm9yIHRoZSBFZGl0b3IgVG9vbGJhciBvbiB0aGUgd2Vic2l0ZS5cblx0KiBAcmV0dXJucyB7Ym9vbGVhbiB8IHVuZGVmaW5lZH1cbiAgKi9cblx0cHVibGljIGFzeW5jIHVwZGF0ZVRvb2xiYXJJdGVtKG5hbWUsIHNldHRpbmdzKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LnVwZGF0ZVRvb2xiYXJJdGVtKG5hbWUsIHNldHRpbmdzKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXG5cdGdldCBpc1JlbmRlcmVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCA6IGZhbHNlO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXG4gICAgICB0aGF0Lm9uQ3JlYXRlLmVtaXQodGhhdC5uYXRpdmVFbGVtZW50KTtcblxuXHRcdFNtYXJ0LlJlbmRlcigpO1xuXG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NtYXJ0LWFuZ3VsYXInKTtcblxuXHRcdHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4geyB0aGF0Lm9uUmVhZHkuZW1pdCh0aGF0Lm5hdGl2ZUVsZW1lbnQpOyB9KTtcblx0XHR0aGlzLmxpc3RlbigpO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy51bmxpc3RlbigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXHRcdGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQgJiYgdGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcblx0XHRcdGZvciAoY29uc3QgcHJvcE5hbWUgaW4gY2hhbmdlcykge1xuXHRcdFx0XHRpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcblx0XHRcdFx0XHR0aGlzLm5hdGl2ZUVsZW1lbnRbcHJvcE5hbWVdID0gY2hhbmdlc1twcm9wTmFtZV0uY3VycmVudFZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBZGQgZXZlbnQgbGlzdGVuZXJzLiAqL1xuXHRwcml2YXRlIGxpc3RlbigpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjaGFuZ2VIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25DaGFuZ2UuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhhdC5ldmVudEhhbmRsZXJzWydjaGFuZ2VIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjaGFuZ2luZ0hhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNoYW5naW5nLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5naW5nJywgdGhhdC5ldmVudEhhbmRsZXJzWydjaGFuZ2luZ0hhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2FjdGlvblN0YXJ0SGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQWN0aW9uU3RhcnQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYWN0aW9uU3RhcnQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2FjdGlvblN0YXJ0SGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snYWN0aW9uRW5kSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQWN0aW9uRW5kLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2FjdGlvbkVuZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snYWN0aW9uRW5kSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY29udGV4dE1lbnVJdGVtQ2xpY2tIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Db250ZXh0TWVudUl0ZW1DbGljay5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0TWVudUl0ZW1DbGljaycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29udGV4dE1lbnVJdGVtQ2xpY2tIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjb250ZXh0TWVudU9wZW5IYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Db250ZXh0TWVudU9wZW4uZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dE1lbnVPcGVuJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb250ZXh0TWVudU9wZW5IYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjb250ZXh0TWVudU9wZW5pbmdIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Db250ZXh0TWVudU9wZW5pbmcuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dE1lbnVPcGVuaW5nJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb250ZXh0TWVudU9wZW5pbmdIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjb250ZXh0TWVudUNsb3NlSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ29udGV4dE1lbnVDbG9zZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0TWVudUNsb3NlJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb250ZXh0TWVudUNsb3NlSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY29udGV4dE1lbnVDbG9zaW5nSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ29udGV4dE1lbnVDbG9zaW5nLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRNZW51Q2xvc2luZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29udGV4dE1lbnVDbG9zaW5nSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1sncmVzaXplU3RhcnRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25SZXNpemVTdGFydC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdyZXNpemVTdGFydCcsIHRoYXQuZXZlbnRIYW5kbGVyc1sncmVzaXplU3RhcnRIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydyZXNpemVFbmRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25SZXNpemVFbmQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplRW5kJywgdGhhdC5ldmVudEhhbmRsZXJzWydyZXNpemVFbmRIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydpbmxpbmVUb29sYmFyT3BlbkhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbklubGluZVRvb2xiYXJPcGVuLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lubGluZVRvb2xiYXJPcGVuJywgdGhhdC5ldmVudEhhbmRsZXJzWydpbmxpbmVUb29sYmFyT3BlbkhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2lubGluZVRvb2xiYXJPcGVuaW5nSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uSW5saW5lVG9vbGJhck9wZW5pbmcuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5saW5lVG9vbGJhck9wZW5pbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2lubGluZVRvb2xiYXJPcGVuaW5nSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snaW5saW5lVG9vbGJhckNsb3NlSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uSW5saW5lVG9vbGJhckNsb3NlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lubGluZVRvb2xiYXJDbG9zZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snaW5saW5lVG9vbGJhckNsb3NlSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snaW5saW5lVG9vbGJhckNsb3NpbmdIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25JbmxpbmVUb29sYmFyQ2xvc2luZy5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpbmxpbmVUb29sYmFyQ2xvc2luZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snaW5saW5lVG9vbGJhckNsb3NpbmdIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydkcm9wRG93blRvb2xiYXJPcGVuSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uRHJvcERvd25Ub29sYmFyT3Blbi5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcm9wRG93blRvb2xiYXJPcGVuJywgdGhhdC5ldmVudEhhbmRsZXJzWydkcm9wRG93blRvb2xiYXJPcGVuSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snZHJvcERvd25Ub29sYmFyT3BlbmluZ0hhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkRyb3BEb3duVG9vbGJhck9wZW5pbmcuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJvcERvd25Ub29sYmFyT3BlbmluZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snZHJvcERvd25Ub29sYmFyT3BlbmluZ0hhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2Ryb3BEb3duVG9vbGJhckNsb3NlSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uRHJvcERvd25Ub29sYmFyQ2xvc2UuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJvcERvd25Ub29sYmFyQ2xvc2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2Ryb3BEb3duVG9vbGJhckNsb3NlSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snZHJvcERvd25Ub29sYmFyQ2xvc2luZ0hhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkRyb3BEb3duVG9vbGJhckNsb3NpbmcuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJvcERvd25Ub29sYmFyQ2xvc2luZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snZHJvcERvd25Ub29sYmFyQ2xvc2luZ0hhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2RpYWxvZ09wZW5IYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25EaWFsb2dPcGVuLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RpYWxvZ09wZW4nLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2RpYWxvZ09wZW5IYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydkaWFsb2dPcGVuaW5nSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uRGlhbG9nT3BlbmluZy5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkaWFsb2dPcGVuaW5nJywgdGhhdC5ldmVudEhhbmRsZXJzWydkaWFsb2dPcGVuaW5nSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snZGlhbG9nQ2xvc2VIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25EaWFsb2dDbG9zZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkaWFsb2dDbG9zZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snZGlhbG9nQ2xvc2VIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydkaWFsb2dDbG9zaW5nSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uRGlhbG9nQ2xvc2luZy5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkaWFsb2dDbG9zaW5nJywgdGhhdC5ldmVudEhhbmRsZXJzWydkaWFsb2dDbG9zaW5nSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snaW1hZ2VVcGxvYWRTdWNjZXNzSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uSW1hZ2VVcGxvYWRTdWNjZXNzLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ltYWdlVXBsb2FkU3VjY2VzcycsIHRoYXQuZXZlbnRIYW5kbGVyc1snaW1hZ2VVcGxvYWRTdWNjZXNzSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snaW1hZ2VVcGxvYWRGYWlsZWRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25JbWFnZVVwbG9hZEZhaWxlZC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpbWFnZVVwbG9hZEZhaWxlZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snaW1hZ2VVcGxvYWRGYWlsZWRIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWyd0b29iYXJJdGVtQ2xpY2tIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Ub29iYXJJdGVtQ2xpY2suZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG9vYmFySXRlbUNsaWNrJywgdGhhdC5ldmVudEhhbmRsZXJzWyd0b29iYXJJdGVtQ2xpY2tIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydtZXNzYWdlQ2xvc2VIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25NZXNzYWdlQ2xvc2UuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZUNsb3NlJywgdGhhdC5ldmVudEhhbmRsZXJzWydtZXNzYWdlQ2xvc2VIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydtZXNzYWdlT3BlbkhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbk1lc3NhZ2VPcGVuLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2VPcGVuJywgdGhhdC5ldmVudEhhbmRsZXJzWydtZXNzYWdlT3BlbkhhbmRsZXInXSk7XG5cblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVtb3ZlIGV2ZW50IGxpc3RlbmVycy4gKi9cblx0cHJpdmF0ZSB1bmxpc3RlbigpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY2hhbmdlSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhhdC5ldmVudEhhbmRsZXJzWydjaGFuZ2VIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5naW5nSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdpbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5naW5nSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydhY3Rpb25TdGFydEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2FjdGlvblN0YXJ0JywgdGhhdC5ldmVudEhhbmRsZXJzWydhY3Rpb25TdGFydEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snYWN0aW9uRW5kSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignYWN0aW9uRW5kJywgdGhhdC5ldmVudEhhbmRsZXJzWydhY3Rpb25FbmRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbnRleHRNZW51SXRlbUNsaWNrSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY29udGV4dE1lbnVJdGVtQ2xpY2snLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbnRleHRNZW51SXRlbUNsaWNrSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjb250ZXh0TWVudU9wZW5IYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb250ZXh0TWVudU9wZW4nLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbnRleHRNZW51T3BlbkhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY29udGV4dE1lbnVPcGVuaW5nSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY29udGV4dE1lbnVPcGVuaW5nJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb250ZXh0TWVudU9wZW5pbmdIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbnRleHRNZW51Q2xvc2VIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb250ZXh0TWVudUNsb3NlJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb250ZXh0TWVudUNsb3NlSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjb250ZXh0TWVudUNsb3NpbmdIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb250ZXh0TWVudUNsb3NpbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbnRleHRNZW51Q2xvc2luZ0hhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1sncmVzaXplU3RhcnRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemVTdGFydCcsIHRoYXQuZXZlbnRIYW5kbGVyc1sncmVzaXplU3RhcnRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jlc2l6ZUVuZEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZUVuZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1sncmVzaXplRW5kSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydpbmxpbmVUb29sYmFyT3BlbkhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2lubGluZVRvb2xiYXJPcGVuJywgdGhhdC5ldmVudEhhbmRsZXJzWydpbmxpbmVUb29sYmFyT3BlbkhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snaW5saW5lVG9vbGJhck9wZW5pbmdIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdpbmxpbmVUb29sYmFyT3BlbmluZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snaW5saW5lVG9vbGJhck9wZW5pbmdIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2lubGluZVRvb2xiYXJDbG9zZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2lubGluZVRvb2xiYXJDbG9zZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snaW5saW5lVG9vbGJhckNsb3NlSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydpbmxpbmVUb29sYmFyQ2xvc2luZ0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2lubGluZVRvb2xiYXJDbG9zaW5nJywgdGhhdC5ldmVudEhhbmRsZXJzWydpbmxpbmVUb29sYmFyQ2xvc2luZ0hhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snZHJvcERvd25Ub29sYmFyT3BlbkhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3BEb3duVG9vbGJhck9wZW4nLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2Ryb3BEb3duVG9vbGJhck9wZW5IYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2Ryb3BEb3duVG9vbGJhck9wZW5pbmdIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wRG93blRvb2xiYXJPcGVuaW5nJywgdGhhdC5ldmVudEhhbmRsZXJzWydkcm9wRG93blRvb2xiYXJPcGVuaW5nSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydkcm9wRG93blRvb2xiYXJDbG9zZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3BEb3duVG9vbGJhckNsb3NlJywgdGhhdC5ldmVudEhhbmRsZXJzWydkcm9wRG93blRvb2xiYXJDbG9zZUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snZHJvcERvd25Ub29sYmFyQ2xvc2luZ0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3BEb3duVG9vbGJhckNsb3NpbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2Ryb3BEb3duVG9vbGJhckNsb3NpbmdIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2RpYWxvZ09wZW5IYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkaWFsb2dPcGVuJywgdGhhdC5ldmVudEhhbmRsZXJzWydkaWFsb2dPcGVuSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydkaWFsb2dPcGVuaW5nSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZGlhbG9nT3BlbmluZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snZGlhbG9nT3BlbmluZ0hhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snZGlhbG9nQ2xvc2VIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkaWFsb2dDbG9zZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snZGlhbG9nQ2xvc2VIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2RpYWxvZ0Nsb3NpbmdIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkaWFsb2dDbG9zaW5nJywgdGhhdC5ldmVudEhhbmRsZXJzWydkaWFsb2dDbG9zaW5nSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydpbWFnZVVwbG9hZFN1Y2Nlc3NIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdpbWFnZVVwbG9hZFN1Y2Nlc3MnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2ltYWdlVXBsb2FkU3VjY2Vzc0hhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snaW1hZ2VVcGxvYWRGYWlsZWRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdpbWFnZVVwbG9hZEZhaWxlZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snaW1hZ2VVcGxvYWRGYWlsZWRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3Rvb2Jhckl0ZW1DbGlja0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Rvb2Jhckl0ZW1DbGljaycsIHRoYXQuZXZlbnRIYW5kbGVyc1sndG9vYmFySXRlbUNsaWNrSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydtZXNzYWdlQ2xvc2VIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlQ2xvc2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ21lc3NhZ2VDbG9zZUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snbWVzc2FnZU9wZW5IYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlT3BlbicsIHRoYXQuZXZlbnRIYW5kbGVyc1snbWVzc2FnZU9wZW5IYW5kbGVyJ10pO1xuXHRcdH1cblxuXHR9XG59XG4iXX0=