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
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item, 	filename, 	type, 	size, 	index, 	status)
        *   target - The file upload element that is the target of the operation.
        *   item - The toolbar item that is the target of the operation.
        *   filename - The name of the uploaded file.
        *   type - The type of the uploaded file.
        *   size - The size of the uploaded file.
        *   index - The index of the uploaded file.
        *   status - The status of the uploaded file. Whether there was an error or success.
        */
        this.onImageUploadSuccess = new EventEmitter();
        /** @description This event is triggered when the uploading of an image/video is unsuccessful.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item, 	filename, 	type, 	size, 	index, 	status)
        *   target - The file upload element that is the target of the operation.
        *   item - The toolbar item that is the target of the operation.
        *   filename - The name of the canceled file.
        *   type - The type of the canceled file.
        *   size - The size of the canceled file.
        *   index - The index of the canceled file.
        *   status - The status of the uploaded file. Whether there was an error or success.
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
        selector: 'smart-editor, [smart-editor]'
    })
], EditorComponent);
export { EditorComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQuZWRpdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc21hcnQtd2ViY29tcG9uZW50cy1hbmd1bGFyL2VkaXRvci8iLCJzb3VyY2VzIjpbInNtYXJ0LmVkaXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUosT0FBTyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVyRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFReEMsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZ0IsU0FBUSxXQUFXO0lBQy9DLFlBQVksR0FBdUI7UUFDbEMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBSUosa0JBQWEsR0FBVSxFQUFFLENBQUM7UUFnWmxDOzs7O1VBSUU7UUFDUSxhQUFRLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFbkU7Ozs7VUFJRTtRQUNRLGVBQVUsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVyRTs7O1VBR0U7UUFDUSxrQkFBYSxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXhFOzs7VUFHRTtRQUNRLGdCQUFXLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFdEU7Ozs7VUFJRTtRQUNRLDJCQUFzQixHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRWpGOzs7O1VBSUU7UUFDUSxzQkFBaUIsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUU1RTs7O1VBR0U7UUFDUSx5QkFBb0IsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUvRTs7OztVQUlFO1FBQ1EsdUJBQWtCLEdBQThCLElBQUksWUFBWSxF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QXVFO0FBTXRFO0lBQVQsTUFBTSxFQUFFO2lFQUEwRTtBQU96RTtJQUFULE1BQU0sRUFBRTsrREFBd0U7QUFNdkU7SUFBVCxNQUFNLEVBQUU7aUVBQTBFO0FBT3pFO0lBQVQsTUFBTSxFQUFFO3FEQUE4RDtBQU83RDtJQUFULE1BQU0sRUFBRTt3REFBaUU7QUFPaEU7SUFBVCxNQUFNLEVBQUU7c0RBQStEO0FBTzlEO0lBQVQsTUFBTSxFQUFFO3dEQUFpRTtBQVloRTtJQUFULE1BQU0sRUFBRTs2REFBc0U7QUFZckU7SUFBVCxNQUFNLEVBQUU7NERBQXFFO0FBT3BFO0lBQVQsTUFBTSxFQUFFOzBEQUFtRTtBQU1sRTtJQUFULE1BQU0sRUFBRTt1REFBZ0U7QUFNL0Q7SUFBVCxNQUFNLEVBQUU7c0RBQStEO0FBcGxCNUQsZUFBZTtJQUozQixTQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsOEJBQThCO0tBQ3hDLENBQUM7R0FFVyxlQUFlLENBdXVDM0I7U0F2dUNZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFZGl0b3IgfSBmcm9tICcuLy4uL2luZGV4JztcbmltcG9ydCB7IEFuaW1hdGlvbiwgRWRpdG9yQ29udGVudEZpbHRlcmluZ0F0dHJpYnV0ZUZpbHRlck1vZGUsIEVkaXRvckNvbnRlbnRGaWx0ZXJpbmdUYWdGaWx0ZXJNb2RlLCBFZGl0b3JDb250ZW50RmlsdGVyaW5nU3R5bGVBdHRyaWJ1dGVGaWx0ZXJNb2RlLCBFZGl0b3JDb250ZXh0TWVudSwgRWRpdE1vZGUsIEVkaXRvckltYWdlRm9ybWF0LCBQYXN0ZUZvcm1hdCwgVG9vbGJhck1vZGUsIFRvb2xiYXJWaWV3TW9kZSwgRWRpdG9yQ29udGVudEZpbHRlcmluZywgRWRpdG9yRGF0YUV4cG9ydCwgRWRpdG9ySWZyYW1lU2V0dGluZ3MsIFRvb2xiYXJJdGVtLCBUb29sYmFySXRlbUVkaXRvciwgRWxlbWVudFJlbmRlck1vZGV9IGZyb20gJy4vLi4vaW5kZXgnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBEaXJlY3RpdmUsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBTaW1wbGVDaGFuZ2VzLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFzZUVsZW1lbnQsIFNtYXJ0IH0gZnJvbSAnLi9zbWFydC5lbGVtZW50JztcbmV4cG9ydCB7IEFuaW1hdGlvbiwgRWRpdG9yQ29udGVudEZpbHRlcmluZ0F0dHJpYnV0ZUZpbHRlck1vZGUsIEVkaXRvckNvbnRlbnRGaWx0ZXJpbmdUYWdGaWx0ZXJNb2RlLCBFZGl0b3JDb250ZW50RmlsdGVyaW5nU3R5bGVBdHRyaWJ1dGVGaWx0ZXJNb2RlLCBFZGl0b3JDb250ZXh0TWVudSwgRWRpdE1vZGUsIEVkaXRvckltYWdlRm9ybWF0LCBQYXN0ZUZvcm1hdCwgVG9vbGJhck1vZGUsIFRvb2xiYXJWaWV3TW9kZSwgRWRpdG9yQ29udGVudEZpbHRlcmluZywgRWRpdG9yRGF0YUV4cG9ydCwgRWRpdG9ySWZyYW1lU2V0dGluZ3MsIFRvb2xiYXJJdGVtLCBUb29sYmFySXRlbUVkaXRvciwgRWxlbWVudFJlbmRlck1vZGV9IGZyb20gJy4vLi4vaW5kZXgnO1xuZXhwb3J0IHsgU21hcnQgfSBmcm9tICcuL3NtYXJ0LmVsZW1lbnQnO1xuZXhwb3J0IHsgRWRpdG9yIH0gZnJvbSAnLi8uLi9pbmRleCc7XG5cblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnc21hcnQtZWRpdG9yLCBbc21hcnQtZWRpdG9yXSdcbn0pXG5cbmV4cG9ydCBjbGFzcyBFZGl0b3JDb21wb25lbnQgZXh0ZW5kcyBCYXNlRWxlbWVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuXHRjb25zdHJ1Y3RvcihyZWY6IEVsZW1lbnRSZWY8RWRpdG9yPikge1xuXHRcdHN1cGVyKHJlZik7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID0gcmVmLm5hdGl2ZUVsZW1lbnQgYXMgRWRpdG9yO1xuXHR9XG5cblx0cHJpdmF0ZSBldmVudEhhbmRsZXJzOiBhbnlbXSA9IFtdO1xuXG5cdHB1YmxpYyBuYXRpdmVFbGVtZW50OiBFZGl0b3I7XG5cdC8qKiBAZGVzY3JpcHRpb24gQ3JlYXRlcyB0aGUgY29tcG9uZW50IG9uIGRlbWFuZC5cblx0ICogQHBhcmFtIHByb3BlcnRpZXMgQW4gb3B0aW9uYWwgb2JqZWN0IG9mIHByb3BlcnRpZXMsIHdoaWNoIHdpbGwgYmUgYWRkZWQgdG8gdGhlIHRlbXBsYXRlIGJpbmRlZCBvbmVzLlxuXHQgKi9cblx0cHVibGljIGNyZWF0ZUNvbXBvbmVudChwcm9wZXJ0aWVzID0ge30pOiBhbnkge1xuICAgIFx0dGhpcy5uYXRpdmVFbGVtZW50ID0gPEVkaXRvcj5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzbWFydC1lZGl0b3InKTtcblx0XHRmb3IgKGxldCBwcm9wZXJ0eU5hbWUgaW4gcHJvcGVydGllcykgeyBcbiBcdFx0XHR0aGlzLm5hdGl2ZUVsZW1lbnRbcHJvcGVydHlOYW1lXSA9IHByb3BlcnRpZXNbcHJvcGVydHlOYW1lXTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudDtcblx0fVxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgYW5pbWF0aW9uIG1vZGUuIEFuaW1hdGlvbiBpcyBkaXNhYmxlZCB3aGVuIHRoZSBwcm9wZXJ0eSBpcyBzZXQgdG8gJ25vbmUnICovXG5cdEBJbnB1dCgpXG5cdGdldCBhbmltYXRpb24oKTogQW5pbWF0aW9uIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmFuaW1hdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYW5pbWF0aW9uKHZhbHVlOiBBbmltYXRpb24pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYW5pbWF0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEF1dG9tYXRpY2FsbHkgbG9hZHMgdGhlIGxhc3Qgc2F2ZWQgc3RhdGUgb2YgdGhlIGVkaXRvciAoZnJvbSBsb2NhbCBzdG9yYWdlKSBvbiBlbGVtZW50IGluaXRpYWxpemF0aW9uLiBBbiBpZCBtdXN0IGJlIHByb3ZpZGVkIGluIG9yZGVyIHRvIGxvYWQgYSBwcmV2aW91c2x5IHNhdmVkIHN0YXRlLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgYXV0b0xvYWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hdXRvTG9hZCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYXV0b0xvYWQodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYXV0b0xvYWQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQXV0b21hdGljYWxseSBzYXZlcyB0aGUgY3VycmVudCBjb250ZW50IG9mIHRoZSBlZGl0b3IuIFNhdmluZyBoYXBwZW5zIGF0IHRpbWUgaW50ZXJ2YXMgZGV0ZXJtaW5lZCBieSB0aGUgYXV0b1NhdmVJbnRlcnZhbCBwcm9wZXJ0eSB3aGlsZSB0aGUgZWxlbWVudCBvbiBmb2N1cy4gQW4gaWQgbXVzdCBiZSBwcm92aWRlZCB0byB0aGUgZWxlbWVudCBpbiBvcmRlciB0byBzdG9yZSB0aGUgc3RhdGUuICovXG5cdEBJbnB1dCgpXG5cdGdldCBhdXRvU2F2ZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9TYXZlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBhdXRvU2F2ZSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hdXRvU2F2ZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGUgcHJvcGVydHkgdGhhdCBkZXRlcm1pbmVzIHRoZSBpbnRlcnZhbCB0byBhdXRvbWF0aWNhbGx5IHNhdmUgdGhlIHN0YXRlIG9mIHRoZSBFZGl0b3Igd2hlbiB0aGUgYXV0b1NhdmUgcHJvcGVydHkgaXMgc2V0LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgYXV0b1NhdmVJbnRlcnZhbCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYXV0b1NhdmVJbnRlcnZhbCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYXV0b1NhdmVJbnRlcnZhbCh2YWx1ZTogbnVtYmVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9TYXZlSW50ZXJ2YWwgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQSBmb3JtYXR0aW5nIGZ1bmN0aW9uIGZvciB0aGUgY2hhciBjb3VudGVyLiBUYWtlcyB0d28gYXJndW1lbnRzOiBjaGFycyAtIHRoZSBjdXJyZW50IG51bWJlciBvZiBjaGFyYWN0ZXJzIGluc2lkZSB0aGUgRWRpdG9yLm1heENoYXJDb3VudCAtIHRoZSBtYXhpbXVtIG51bWJlciBvZiBjaGFyYWN0ZXJzIGluc2lkZSB0aGUgRWRpdG9yLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgY2hhckNvdW50Rm9ybWF0RnVuY3Rpb24oKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNoYXJDb3VudEZvcm1hdEZ1bmN0aW9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjaGFyQ291bnRGb3JtYXRGdW5jdGlvbih2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNoYXJDb3VudEZvcm1hdEZ1bmN0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIGNvbnRlbnQgZmlsdGVyaW5nIHNldHRpbmdzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgY29udGVudEZpbHRlcmluZygpOiBFZGl0b3JDb250ZW50RmlsdGVyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbnRlbnRGaWx0ZXJpbmcgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGNvbnRlbnRGaWx0ZXJpbmcodmFsdWU6IEVkaXRvckNvbnRlbnRGaWx0ZXJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29udGVudEZpbHRlcmluZyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBjb250ZXh0IG1lbnUgZm9yIHRoZSBFZGl0b3IuIFRoZSBjb250ZXh0IG1lbnUgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHVzZXIgcmlnaHQgY2xpY2tzIG9uIHRoZSBjb250ZW50IGFyZWEgb2YgdGhlIEVkaXRvci4gKi9cblx0QElucHV0KClcblx0Z2V0IGNvbnRleHRNZW51KCk6IEVkaXRvckNvbnRleHRNZW51IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbnRleHRNZW51IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjb250ZXh0TWVudSh2YWx1ZTogRWRpdG9yQ29udGV4dE1lbnUpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29udGV4dE1lbnUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQWxsb3dzIHRvIGN1c3RvbWl6ZSBkZWZhdWx0IHRoZSBjb250ZXh0IG1lbnUgb2YgdGhlIEVkaXRvci4gVGhlIHByb3BlcnR5IGFjY2VwdHMgYW4gYXJyYXkgb2YgaXRlbXMgd2hpY2ggY2FuIGJlIHN0cmluZ3MgdGhhdCByZXByZXNlbnQgdGhlIHZhbHVlIG9mIHRoZSBpdGVtLCBvciBvYmplY3RzIG9mIHRoZSBmb2xsb3dpbmcgZm9ybWF0OiB7IGxhYmVsOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfSwgd2hlcmUgdGhlIGxhYmVsIHdpbGwgYmUgZGlzcGxheWVkIGFuZCB0aGUgdmFsdWUgd2lsbCBiZSBhY3Rpb24gdmFsdWUgZm9yIHRoZSBpdGVtLiBUaGUgcHJvcGVydHkgYWxzbyBhY2NlcHRzIGEgZnVuY3Rpb24gdGhhdCBtdXN0IHJldHVybiBhbiBhcnJheSBvZiBpdGVtcyB3aXRoIHRoZSBmb2xsb3dpbmcgZm9ybWF0IGZ1bmN0aW9uICh0YXJnZXQ6IEhUTUxFbGVtZW50LCB0eXBlOiBzdHJpbmcsIGRlZmF1bHRJdGVtczogc3RyaW5nW10pIHsgcmV0dXJuIGRlZmF1bHRJdGVtcyB9IGFuZCB0aGUgZm9sbG93aW5nIGFyZ3VtZW50czogdGFyZ2V0IC0gdGhlIGVsZW1lbnQgdGhhdCBpcyB0aGUgdGFyZ2V0IG9mIHRoZSBjb250ZXh0IG1lbnUudHlwZSAtIHRoZSB0eXBlIG9mIGNvbnRleHQgbWVudSAoIHdoZXRoZXIgaXQncyBhIHRhYmxlLCBpbWFnZSwgbGluayBvciBvdGhlcilkZWZhdWx0SXRlbXMgLSBhbiBhcnJheSBvZiBzdHJpbmdzIHdoaWNoIHJlcHJlc2VudCB0aGUgZGVmYXVsdCBpdGVtcyBmb3IgdGhlIGNvbnRleHQgbWVudS4gKi9cblx0QElucHV0KClcblx0Z2V0IGNvbnRleHRNZW51RGF0YVNvdXJjZSgpOiBzdHJpbmdbXSB8IHsgbGFiZWw6IHN0cmluZywgdmFsdWU6ICdzdHJpbmcnIH1bXSB8IEZ1bmN0aW9uIHwgbnVsbCB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb250ZXh0TWVudURhdGFTb3VyY2UgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGNvbnRleHRNZW51RGF0YVNvdXJjZSh2YWx1ZTogc3RyaW5nW10gfCB7IGxhYmVsOiBzdHJpbmcsIHZhbHVlOiAnc3RyaW5nJyB9W10gfCBGdW5jdGlvbiB8IG51bGwpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29udGV4dE1lbnVEYXRhU291cmNlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgdGhlIEVkaXRvcidzIERhdGEgRXhwb3J0IG9wdGlvbnMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkYXRhRXhwb3J0KCk6IEVkaXRvckRhdGFFeHBvcnQge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGF0YUV4cG9ydCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGF0YUV4cG9ydCh2YWx1ZTogRWRpdG9yRGF0YUV4cG9ydCkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kYXRhRXhwb3J0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEVuYWJsZXMgb3IgZGlzYWJsZXMgdGhlIEVkaXRvci4gKi9cblx0QElucHV0KClcblx0Z2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZWQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVkID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERpc2FibGVzIGNvbnRlbnQgZWRpdGluZyBpbnNpZGUgRWRpdG9yLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGlzYWJsZUVkaXRpbmcoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlRWRpdGluZyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGlzYWJsZUVkaXRpbmcodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZUVkaXRpbmcgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGlzYWJsZXMgdGhlIFF1aWNrIFNlYXJjaCBCYXIuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkaXNhYmxlU2VhcmNoQmFyKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZVNlYXJjaEJhciA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGlzYWJsZVNlYXJjaEJhcih2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlU2VhcmNoQmFyID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIGVkaXQgbW9kZSBmb3IgdGhlIEVkaXRvci4gQnkgZGVmYXVsdCB0aGUgZWRpdG9yJ3MgY29udGVudCBhY2NlcHRzIGFuZCBwYXJzZXMgSFRNTC4gSG93ZXZlciBpZiBzZXQgdG8gJ21hcmtkb3duJyB0aGUgRWRpdG9yIGNhbiBiZSB1c2VkIGFzIGEgZnVsbCB0aW1lIE1hcmtkb3duIEVkaXRvciBieSBwYXJzaW5nIHRoZSBtYWtyZG93biB0byBIVE1MIGluIHByZXZpZXcgbW9kZS4gKi9cblx0QElucHV0KClcblx0Z2V0IGVkaXRNb2RlKCk6IEVkaXRNb2RlIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmVkaXRNb2RlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBlZGl0TW9kZSh2YWx1ZTogRWRpdE1vZGUpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZWRpdE1vZGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSB2YWx1ZSByZXR1cm5lZCBmcm9tIGdldEhUTUwgbWV0aG9kIGFuZCBTb3VyY2UgQ29kZSB2aWV3IGFyZSBlbmNvZGVkIG9yIG5vdC4gKi9cblx0QElucHV0KClcblx0Z2V0IGVuYWJsZUh0bWxFbmNvZGUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5lbmFibGVIdG1sRW5jb2RlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBlbmFibGVIdG1sRW5jb2RlKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmVuYWJsZUh0bWxFbmNvZGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBUYWIga2V5IGNhbiBpbnNlcnQgdGFiIGNoYXJzIGluc2lkZSB0aGUgRWRpdG9yIG9yIGNoYW5nZSBmb2N1cyAoZGVmYXVsdCkgKi9cblx0QElucHV0KClcblx0Z2V0IGVuYWJsZVRhYktleSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmVuYWJsZVRhYktleSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZW5hYmxlVGFiS2V5KHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmVuYWJsZVRhYktleSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSB0aW1lIGludGVydmFsIGJldHdlZW4gcmVzdWx0cyBmb3IgdGhlIGZpbmQgYW5kIHJlcGxhY2UgYW5kIHNlYXJjaCBiYXIgZmVhdHVyZXMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBmaW5kQW5kUmVwbGFjZVRpbWVvdXQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmZpbmRBbmRSZXBsYWNlVGltZW91dCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZmluZEFuZFJlcGxhY2VUaW1lb3V0KHZhbHVlOiBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZmluZEFuZFJlcGxhY2VUaW1lb3V0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgd2hldGhlciB0aGUgVG9vbGJhciBpcyBoaWRkZW4gb3Igbm90LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgaGlkZVRvb2xiYXIoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oaWRlVG9vbGJhciA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgaGlkZVRvb2xiYXIodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGlkZVRvb2xiYXIgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBJbmxpbmUgVG9vbGJhciBpcyBoaWRkZW4gb3Igbm90LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgaGlkZUlubGluZVRvb2xiYXIoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oaWRlSW5saW5lVG9vbGJhciA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgaGlkZUlubGluZVRvb2xiYXIodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGlkZUlubGluZVRvb2xiYXIgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgZmlsZSBmb3JtYXQgb2YgdGhlIGltYWdlL3ZpZGVvIHRoYXQgYXJlIHVwbG9hZGVkIGZyb20gbG9jYWwgc3RvcmFnZS4gQnkgZGVmYXVsdCBpbWFnZXMvdmlkZW9zIGFyZSBzdHJvZWQgYXMgYmFzZTY0LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgaW1hZ2VGb3JtYXQoKTogRWRpdG9ySW1hZ2VGb3JtYXQge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaW1hZ2VGb3JtYXQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGltYWdlRm9ybWF0KHZhbHVlOiBFZGl0b3JJbWFnZUZvcm1hdCkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5pbWFnZUZvcm1hdCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBjb250ZW50IG9mIHRoZSBFZGl0b3IgYXMgSFRNTC4gQWxsb3dzIHRvIGluc2VydCB0ZXh0IGFuZCBIVE1MLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgaW5uZXJIVE1MKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGlubmVySFRNTCh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmlubmVySFRNTCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZWZpbmVzIGFuIG9mZnNldCh4LHkpIGZvciB0aGUgSW5saW5lIFRvb2xiYXIgcG9zaXRpb25pbmcgb24gdGhlIHBhZ2UuICovXG5cdEBJbnB1dCgpXG5cdGdldCBpbmxpbmVUb29sYmFyT2Zmc2V0KCk6IG51bWJlcltdIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmlubGluZVRvb2xiYXJPZmZzZXQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGlubGluZVRvb2xiYXJPZmZzZXQodmFsdWU6IG51bWJlcltdKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmlubGluZVRvb2xiYXJPZmZzZXQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgaWZyYW1lIHNldHRpbmdzIG9mIHRoZSBFZGl0b3IuIFdoZW4gZW5hYmxlZCB0aGUgY29udGVudHMgb2YgdGhlIEVkaXRvciBhcmUgcGxhY2VkIGluc2lkZSBhbiBpZnJhbWUsIGlzb2xhdGVkIGluIGEgc2VwYXJhdGUgZG9tLiBUaGUgZWxlbWVudCBhbGxvd3MgdG8gaW5zZXJ0IGV4dGVybmFsIHJlc291cmNlcyBpbnRvIHRoZSBpZnJhbWUgaWYgbmVlZGVkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgaWZyYW1lU2V0dGluZ3MoKTogRWRpdG9ySWZyYW1lU2V0dGluZ3Mge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaWZyYW1lU2V0dGluZ3MgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGlmcmFtZVNldHRpbmdzKHZhbHVlOiBFZGl0b3JJZnJhbWVTZXR0aW5ncykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5pZnJhbWVTZXR0aW5ncyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIGxhbmd1YWdlLiBVc2VkIGluIGNvbmp1bmN0aW9uIHdpdGggdGhlIHByb3BlcnR5IG1lc3NhZ2VzLiAgKi9cblx0QElucHV0KClcblx0Z2V0IGxvY2FsZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubG9jYWxlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBsb2NhbGUodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sb2NhbGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBhIGxpbWl0IG9uIHRoZSBudW1iZXIgb2YgY2hhcnMgaW5zaWRlIHRoZSBFZGl0b3IuICAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbWF4Q2hhckNvdW50KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5tYXhDaGFyQ291bnQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG1heENoYXJDb3VudCh2YWx1ZTogbnVtYmVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm1heENoYXJDb3VudCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgYW4gb2JqZWN0IHNwZWNpZnlpbmcgc3RyaW5ncyB1c2VkIGluIHRoZSB3aWRnZXQgdGhhdCBjYW4gYmUgbG9jYWxpemVkLiBVc2VkIGluIGNvbmp1bmN0aW9uIHdpdGggdGhlIHByb3BlcnR5IGxhbmd1YWdlLiAgKi9cblx0QElucHV0KClcblx0Z2V0IG1lc3NhZ2VzKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5tZXNzYWdlcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbWVzc2FnZXModmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5tZXNzYWdlcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIGEgdG8gdGhlIGVsZW1lbnQgd2hpY2ggY2FuIGJlIHVzZWQgdG8gc3VibWl0IHRoZSB2YWx1ZSBvZiB0aGUgRWRpdG9yIHZpYSBhIGZvcm0uICovXG5cdEBJbnB1dCgpXG5cdGdldCBuYW1lKCk6IHN0cmluZyB8IG51bGwge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubmFtZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbmFtZSh2YWx1ZTogc3RyaW5nIHwgbnVsbCkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5uYW1lID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIGZvcm1hdCBvZiB0aGUgY29udGVudCB0aGF0IHdpbGwgYmUgcGFzdGVkIGluc2lkZSB0aGUgRWRpdG9yLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcGFzdGVGb3JtYXQoKTogUGFzdGVGb3JtYXQge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucGFzdGVGb3JtYXQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHBhc3RlRm9ybWF0KHZhbHVlOiBQYXN0ZUZvcm1hdCkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5wYXN0ZUZvcm1hdCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBwbGFjZWhvbGRlciB0aGF0IHdpbGwgYmUgc2hvd24gd2hlbiB0aGVyZSdzIG5vIGNvbnRlbnQgaW5zaWRlIHRoZSBFZGl0b3IuICovXG5cdEBJbnB1dCgpXG5cdGdldCBwbGFjZWhvbGRlcigpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucGxhY2Vob2xkZXIgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHBsYWNlaG9sZGVyKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucGxhY2Vob2xkZXIgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBjbGVhckZvcm1hdCB0b29sYmFyIGFjdGlvbiBzaG91bGQgYWxzbyByZW1vdmUgaW5saW5lIHN0eWxlcyBmcm9tIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgbm9kZS4gKi9cblx0QElucHV0KClcblx0Z2V0IHJlbW92ZVN0eWxlc09uQ2xlYXJGb3JtYXQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVTdHlsZXNPbkNsZWFyRm9ybWF0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCByZW1vdmVTdHlsZXNPbkNsZWFyRm9ybWF0KHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlbW92ZVN0eWxlc09uQ2xlYXJGb3JtYXQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB3aGV0aGVyIEVkaXRvcidzIGNvbnRlbnQgaXMgcmVxdWlyZWQgb3Qgbm90LiBJZiBzZXQgYW5kIHRoZSBFZGl0b3IncyBjb250ZW50IGlzIGVtcHR5LCBhIG5vdGlmaWNhdGlvbiB3aWxsIGFwcGVhciB0byBub3RpZnkgdGhhdCB0aGUgRWRpdG9yIGNhbm5vdCBiZSBlbXB0eS4gKi9cblx0QElucHV0KClcblx0Z2V0IHJlcXVpcmVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmVxdWlyZWQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHJlcXVpcmVkKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlcXVpcmVkID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgdmFsdWUgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBlbGVtZW50IGlzIGFsaWduZWQgdG8gc3VwcG9ydCBsb2NhbGVzIHVzaW5nIHJpZ2h0LXRvLWxlZnQgZm9udHMuICovXG5cdEBJbnB1dCgpXG5cdGdldCByaWdodFRvTGVmdCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJpZ2h0VG9MZWZ0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCByaWdodFRvTGVmdCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yaWdodFRvTGVmdCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHZhbHVlIGlzIHNhbml0aXplZCBmcm9tIFhTUyBjb250ZW50IG9yIG5vdC4gV2hlbiBlbmFibGVkIHNjcmlwdHMgYW5kIG90aGVyIFhTUyB2dWxuZXJhYmlsaXRpZXMgYXJlIG5vdCBhbGxvd2VkIHRvIGV4aXN0IGluc2lkZSB0aGUgRWRpdG9yJ3MgYXMgSFRNTCBjb250ZW50LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc2FuaXRpemVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2FuaXRpemVkIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzYW5pdGl6ZWQodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2FuaXRpemVkID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgd2hldGhlciB0aGUgY2hhciBjb3VudGVyIGlzIHZpc2libGUgb3Igbm90LiBXaGVuIGVuYWJsZWQgaXQgaXMgZGlzcGxheWVkIGluIHRoZSBib3R0b20gcmlnaHQgY29ybmVyLiBJZiBtYXhDaGFyQ291bnQgaXMgc2V0IGFuZCB0aGUgY29udGVudCBjaGFyYWN0ZXJzIGFyZSBlcXVhbCBvciBtb3JlIHRoYW4gNzAlIG9mIHRoZSBtYXhpbXVtIGNoYXIgY291bnQgdGhlIGNvdW50ZXIgaXMgY29sb3JlZCBpbiBvcmRlciB0byB3YXJuIHRoZSB1c2VyLiBJZiB0aGUgY2hhciBjb3VudCBpcyBlcXVhbCBvciBtb3JlIHRoYW4gOTAlIHRoZSBjb3VudGVyIGlzIGFnYWluIGNvbG9yZWQgd2l0aCBhIGRpZmZlcmVudCB3YXJuaW5nIGNvbG9yIHRvIGluZGljYXRlIHRoYXQgdGhlIGNvdW50ZXIgaXMgbmVhciBtYXhpbXVtLiBXaGVuIG1heGltdW0gaXMgcmVhY2hlZCwgdGV4dCBpbnB1dCBpcyBub3QgYWxsb3dlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IHNob3dDaGFyQ291bnQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zaG93Q2hhckNvdW50IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzaG93Q2hhckNvdW50KHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNob3dDaGFyQ291bnQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgcmVmcmVzaCBpbnRlcnZhbCBmb3IgdGhlIFNvdXJjZSBDb2RlL1ByZXZpZXcgUGFuZWwgd2hlbiBTcGxpdCBNb2RlIGlzIGVuYWJsZWQuICAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc3BsaXRNb2RlUmVmcmVzaFRpbWVvdXQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNwbGl0TW9kZVJlZnJlc2hUaW1lb3V0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzcGxpdE1vZGVSZWZyZXNoVGltZW91dCh2YWx1ZTogbnVtYmVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNwbGl0TW9kZVJlZnJlc2hUaW1lb3V0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIHRoZW1lLiBUaGVtZSBkZWZpbmVzIHRoZSBsb29rIG9mIHRoZSBlbGVtZW50ICovXG5cdEBJbnB1dCgpXG5cdGdldCB0aGVtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGhlbWUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRoZW1lKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGhlbWUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgVG9vbGJhciBpdGVtcyBsaXN0LiBFYWNoIGl0ZW0gY2FuIGJlIHN0cmluZyBwb2ludGluZyB0byB0aGUgbmFtZSBvZiB0aGUgaXRlbSBvciBhbiBvYmplY3QgdGhhdCBkZWZpbmVzIGEgY3VzdG9tIGl0ZW0gb3IgYWRkcyBhZGl0aW9uYWwgc2V0dGluZ3MgdG8gYW4gaXRlbS4gVGhlIG5hbWUgb2YgdGhlIGl0ZW1zIGFyZSBjYXNlIGluc2Vuc2l0aXZlLiBBbiBvYmplY3QgZGVmaW5pdGlvbiBzaG91bGQgY29udGFpbiBhIG5hbWUgYXR0cmlidXRlIHRoYXQgcmVmZXJzIHRvIHRoZSBuYW1lIG9mIHRoZSBpdGVtIHdoZW4gbW9kaWZpbmcgYW4gZXhpc3RpbmcgdG9vbGJhciBpdGVtLiBUaGUgbmFtZSBhdHRyaWJ1dGUgZGV0ZXJtaW5lcyB0aGUgYWN0aW9uIG9mIHRoZSBpdGVtLiBJZiBzZXQgdG8gJ2N1c3RvbScgaXQgaXMgcG9zc2libGUgdG8gY3JlYXRlIGEgY3VzdG9tIHRvb2xiYXIgaXRlbS4gSWYgbmFtZSBhdHRyaWJ1dGUgaXMgbm90IHNldCBvciBub3QgdmFsaWQgaXQgaXMgdHJlYXRlZCBhcyBhIHNlcGFyYXRvciwgbm8gYSB0b29sYmFyIGl0ZW0uIFRoZSBmb2xsb3dpbmcgaXRlbXMgYXJlIHN1cHBvcnRlZCBieSBkZWZhdWx0IGJ5IHRoZSBFZGl0b3I6IFNvdXJjZUNvZGUgLSBzaG93cyB0aGUgSFRNTC9QcmV2aWV3IFBhbmVsIGJ5IGhpZGluZyB0aGUgaW5wdXQgcGFuZWwuIEl0ZW0gdHlwZSAtICdUb2dnbGUgYnV0dG9uJy5TcGxpdE1vZGUgLSBzaG93cyBib3RoIGlucHV0IGFuZCBIVE1ML1ByZXZpZXcgUGFuZWwgYnkgc3BsaXR0aW5nIHRoZSBFZGl0b3IgY29udGVudCBpbiB0d28gc2VjdGlvbnMuIEl0ZW0gdHlwZSAtICdUb2dnbGUgYnV0dG9uJ0Z1bGxTY3JlZW4gLSBmaXRzIHRoZSB2aWV3cG9ydCB3aXRoIHRoZSBFZGl0b3IgYnkgZXhwYW5kaW5nIGl0IG92ZXIgdGhlIHBhZ2UgY29udGVudC4gSXRlbSB0eXBlIC0gJ1RvZ2dsZSBidXR0b24nLkFsaWdubWVudCAtIGFsaWducyB0aGUgc2VsZWN0ZWQgY29udGVudC4gSXRlbSB0eXBlIC0gJ0Ryb3AgZG93bicuRm9udE5hbWUgLSBjaGFuZ2VzIHRoZSBmb250IGZhbWlseSBvZiB0aGUgc2VsZWN0ZWQgY29udGVudC4gSXRlbSB0eXBlIC0gJ2Ryb3AtZG93bicuRm9udFNpemUgLSBjaGFuZ2VzIHRoZSBmb250IHNpemUgb2YgdGhlIHNlbGVjdGVkIGNvbnRlbnQuIEl0ZW0gdHlwZSAtICdkcm9wLWRvd24nLkZvcm1hdHMgLSBjaGFuZ2VzIHRoZSBmb3JtYXQgb2YgdGhlIGN1cnJlbnQgc2VsZWN0aW9uLiBJdG1lIHR5cGUgLSAnZHJvcC1kb3duJy5UYWJsZVJvd3MgLSBhbGxvd3MgdG8gaW5zZXJ0L3JlbW92ZSBhIHJvdyBpbnRvIGEgc2VsZWN0ZWQgdGFibGUgZWxlbWVudC4gSXRlbSB0eXBlIC0gJ2Ryb3AtZG93bicuVGFibGVDb2x1bW5zIC0gYWxsb3dzIHRvIGluc2VydC9yZW1vdmUgYSBjb2x1bW4gaW50byBhIHNlbGVjdGVkIHRhYmxlIGVsZW1lbnQuIEl0bWUgdHlwZSAtICdkcm9wLWRvd24nLlRhYmxlVkFsaWduIC0gc2V0cyB0aGUgdmVydGljYWwgYWxpZ25tZW50IG9mIGEgc2VsZWN0ZWQgdGFibGUgY2VsbC4gSXRlbSB0eXBlIC0gJ2Ryb3AtZG93bicuVGFibGVTdHlsZSAtIHNldHMgYWRkaXRpb25hbCBzdHlsaW5nIHRvIGEgc2VsZWN0ZWQgdGFibGUgaW5zaWRlIHRoZSBFZGl0b3IuIEl0ZW0gdHlwZSAtICdkcm9wLWRvd24nLkJhY2tncm91bmRDb2xvciAtIGNoYW5nZXMgdGhlIGJhY2tncm91bmQgY29sb3Igb2YgdGhlIGN1cnJlbnQgc2VsZWN0aW9uLiBJdGVtIHR5cGUgLSAnY29sb3ItaW5wdXQnLkZvbnRDb2xvciAtIGNoYW5nZXMgdGhlIGZvbnQgY29sb3Igb2YgdGhlIGN1cnJlbnQgc2VsZWN0aW9uLiBJdGVtIHR5cGUgPSAnY29sb3ItaW5wdXQnLkJvbGQgLSBzZXRzIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgdGV4dCBhcyBib2xkIG9yIG5vdC4gSXRlbSB0eXBlIC0gJ2J1dHRvbicuSXRhbGljIC0gc2V0cyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHRleHQgYXMgaXRhbGljLiBJdGVtIHR5cGUgLSAnYnV0dG9uJy4gVW5kZXJsaW5lIC0gc2V0cyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHRleHQgYXMgdW5kZXJsaW5lZC4gSXRtZSB0eXBlIC0gJ2J1dHRvbicuU3RyaWtldGhyb3VnaCAtIHNldCB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHRleHQgYXMgc3RyaWtldGhyb3VnaC4gSXRlbSB0eXBlIC0gJ2J1dHRvbicuRGVsZXRlIC0gZGVsZXRlcyB0aGUgY3VycmVudCBzZWxlY3Rpb24uIEl0ZW0gdHlwZSAtICdidXR0b24nLlVuZG8gLSB1bmRvZXMgdGhlIGxhc3Qgb3BlcmF0aW9uLiBJdGVtIHR5cGUgLSAnYnV0dG9uJy5SZWRvIC0gcmVkb2VzIHRoZSBwcmV2aW91cyBvcGVyYXRpb24uIEl0ZW0gdHlwZSAtICdidXR0b24nLkluZGVudCAtIGluZGVudHMgdGhlIGN1cnJlbnQgc2VsZWN0aW9uIG9uY2UuIEl0ZW0gdHlwZSAtICdidXR0b24nLk91dGRlbnQgLSBvdXRkZW50cyB0aGUgY3VycmVudCBzZWxlY3Rpb24gb25jZS4gSXRlbSB0eXBlIC0gJ2J1dHRvbicuT3BlbkxpbmsgLSB0cmlnZ2VycyBhIGh5cGVybGluay4gSXRlbSB0eXBlIC0gJ2J1dHRvbicuRWRpdExpbmsgLSBjcmVhdGVzL2VkaXRzIHRoZSBzZWxlY3RlZCBoeXBlcmxpbmsuIEl0ZW0gdHlwZSAtICdidXR0b24nLkNyZWF0ZUxpbmsgLSBjcmVhdGVzL2VkaXRzIHRoZSBzZWxlY3RlZCBoeXBlcmxpbmsuIEl0ZW0gdHlwZSAtICdidXR0b24nLlJlbW92ZUxpbmsgLSByZW1vdmVzIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgaHlwZXJsaW5rLiBJdGVtIHR5cGUgLSAnYnV0dG9uJy5IeXBlcmxpbmsgLSBzYW1lIGFzIGNyZWF0ZUxpbmssIHRyaWdnZXJzIGEgRGlhbG9nIFdpbmRvdyBmb3IgbGluayBjcmVhdGlvbi4gSXRlbSB0eXBlIC0gJ2J1dHRvbicuQ3V0IC0gQ3V0cyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHRleHQuIEl0ZW0gdHlwZSAtICdidXR0b24nLkNvcHkgLSBjb3BpZXMgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCB0ZXh0LiBJdGVtIHR5cGUgLSAnYnV0dG9uJ1Bhc3RlIC0gcGFzdGVzIHRoZSBjdXJyZW5seSBjb3BpZWQvY3V0IHRleHQgZnJvbSB0aGUgQ2xpcGJvYXJkLiBJdGVtIHR5cGUgPSAnYnV0dG9uJyBvciAnZHJvcC1kb3duJyB3aGVuIGFkdmFuY2VkIGF0dHJpYnV0ZSBpcyBzZXQgdG8gJ3RydWUnLkltYWdlIC0gdHJpZ2dlcnMgYSBEaWFsb2cgV2luZG93IHRvIGluc2VydC9lZGl0IGFuIGltYWdlLiBJdGVtIHR5cGUgLSAnYnV0dG9uJy5WaWRlbyAtIHRyaWdnZXJzIGEgRGlhbG9nIFdpbmRvdyB0byBpbnNlcnQvZWRpdCBhIHZpZGVvLiBJdGVtIHR5cGUgLSAnYnV0dG9uJy5Mb3dlckNhc2UgLSBjaGFuZ2VzIHRoZSBjdXJyZW50IHNlbGVjdGlvbiB0byBsb3dlciBjYXNlLiBJdGVtIHR5cGUgLSAnYnV0dG9uJy5VcHBlckNhc2UgLSBjaGFuZ2VzIHRoZSBjdXJyZW50IHNlbGVjdGlvbiB0byB1cHBlciBjYXNlLiBJdGVtIHR5cGUgLSAnYnV0dG9uJy5QcmludCAtIG9wZW5zIHRoZSBicm93c2VyIHByaW50IHByZXZpZXcgd2luZG93LiBJdGVtIHR5cGUgLSAnYnV0dG9uJy5DYXB0aW9uIC0gaW5zZXJ0L3JlbW92ZSBhIGNhcHRpb24gd2hlbiBhIHRhYmxlIGlzIHNlbGVjdGVkLiBJdGVtIHR5cGUgLSAnYnV0dG9uJy5DbGVhckZvcm1hdCAtIHJlbW92ZXMgdGhlIGZvcm1hdHRpbmcgb2YgdGhlIGN1cnJudGx5IHNlbGVjdGVkIHRleHQuIEl0ZW0gdHlwZSAtICdidXR0b24nLlRhYmxlIC0gdHJpZ2dlcnMgYSBEaWFsb2cgV2luZG93IHRvIGluc2VydCBhIHRhYmxlLiBJdGVtIHR5cGUgLSAnYnV0dG9uJy5UYWJsZUhlYWRlciAtIGluc2VydC9yZW1vdmUgYSBoZWFkZXIgcm93IHRvIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgdGFibGUuIEl0ZW0gdHlwZSAtICdidXR0b24nLk9yZGVyZWRMaXN0IC0gaW5zZXJ0L3JlbW92ZSBhbiBvcmRlciBsaXN0LiBJdGVtIHR5cGUgPSAnYnV0dG9uJy5Vbm9yZGVyZWRMaXN0IC0gaW5zZXJ0L3JlbW92ZSBhbiB1bm9yZGVyZWQgbGlzdC4gSXRlbSB0eXBlIC0gJ2J1dHRvbicuU3Vic2NyaXB0IC0gY2hhbmdlcyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHRleHQgdG8gc3Vic2NyaXB0LiBJdGVtIHR5cGUgLSAnYnV0dG9uJy5TdXBlcnNjcmlwdCAtIGNoYW5nZXMgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCB0ZXh0IHRvIHN1cGVyc2NyaXB0LiBJdGVtIHR5cGUgLSAnYnV0dG9uJy5GaW5kQW5kUmVwbGFjZSAtIG9wZW5zIGEgZGlhbG9nIHRoYXQgYWxsb3dzIHRvIGZpbmQgYW5kIHJlcGxhY2UgdGV4dCBpbnNpZGUgdGhlIEVkaXRvcidzIGNvbnRlbnQgc2VjdGlvbi4gSXRlbSB0eXBlIC0gJ2J1dHRvbicuICBUaGUgaW5saW5lVG9vbGJhckl0ZW1zIGF0dHJpYnV0ZSBpcyBhcHBsaWNhYmxlIG9ubHkgdG8gdGhlIGZvbGxvd2luZyBpdGVtczogJ3RhYmxlJywgJ2ltYWdlJywgJ2h5cGVybGluaycuIEl0IGFjY2VwdHMgdGhlIHNhbWUgdHlwZSBvZiB2YWx1ZSBhcyB0b29sYmFySXRlbXMgcHJvcGVydHkgYnV0IHRoZSB0b29sYmFyIGl0ZW1zIHdpbGwgYmUgcGxhY2VkIGluc2luZGUgdGhlIElubGluZSBUb29sYmFyIGluc3RlYWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCB0b29sYmFySXRlbXMoKTogVG9vbGJhckl0ZW1bXSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50b29sYmFySXRlbXMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRvb2xiYXJJdGVtcyh2YWx1ZTogVG9vbGJhckl0ZW1bXSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50b29sYmFySXRlbXMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgdG9vbGJhciBtb2RlIG9mIHRoZSBFZGl0b3IuIFRoZSBtYWluIHRvb2xiYXIgb2YgdGhlIEVkaXRvciBjYW4gYXBwZWFyIGFzIGEgUmliYm9uIG9yIGFzIGEgTWVudS4gKi9cblx0QElucHV0KClcblx0Z2V0IHRvb2xiYXJNb2RlKCk6IFRvb2xiYXJNb2RlIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRvb2xiYXJNb2RlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0b29sYmFyTW9kZSh2YWx1ZTogVG9vbGJhck1vZGUpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudG9vbGJhck1vZGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQWxsb3dzIHRvIGNvbmZpZ3VyZSB0aGUgU2luZ2xlTGluZVJpYmJvbiBhcHBlYXJhbmNlIGJ5IGNoYW5naW5nIHRoZSBvcmRlciBhbmQgaXRlbXMgb2YgdGhlIGdyb3Vwcy4gKi9cblx0QElucHV0KClcblx0Z2V0IHRvb2xiYXJSaWJib25Db25maWcoKTogeyBuYW1lOiBzdHJpbmcsIGdyb3VwczogeyBuYW1lOiBzdHJpbmcsIGl0ZW1zOiBzdHJpbmdbXSB9W10gfVtdIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRvb2xiYXJSaWJib25Db25maWcgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRvb2xiYXJSaWJib25Db25maWcodmFsdWU6IHsgbmFtZTogc3RyaW5nLCBncm91cHM6IHsgbmFtZTogc3RyaW5nLCBpdGVtczogc3RyaW5nW10gfVtdIH1bXSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50b29sYmFyUmliYm9uQ29uZmlnID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIGZvcm1hdCBvZiB0aGUgY29udGVudCB0aGF0IHdpbGwgYmUgcGFzdGVkIGluc2lkZSB0aGUgRWRpdG9yLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdG9vbGJhclZpZXdNb2RlKCk6IFRvb2xiYXJWaWV3TW9kZSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50b29sYmFyVmlld01vZGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRvb2xiYXJWaWV3TW9kZSh2YWx1ZTogVG9vbGJhclZpZXdNb2RlKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRvb2xiYXJWaWV3TW9kZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTdGlja3MgdGhlIFRvb2xiYXIgdG8gdGhlIHRvcCBvZiB0aGUgd2luZG93IGFuZCBzdGF5cyB0aGVyZSB3aGlsZSBzY3JvbGxpbmcuICovXG5cdEBJbnB1dCgpXG5cdGdldCB0b29sYmFyU3RpY2t5KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudG9vbGJhclN0aWNreSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdG9vbGJhclN0aWNreSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50b29sYmFyU3RpY2t5ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIElmIGlzIHNldCB0byB0cnVlLCB0aGUgZWxlbWVudCBjYW5ub3QgYmUgZm9jdXNlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IHVuZm9jdXNhYmxlKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudW5mb2N1c2FibGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHVuZm9jdXNhYmxlKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnVuZm9jdXNhYmxlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgdmFsdWUgb2YgdGhlIEVkaXRvci4gKi9cblx0QElucHV0KClcblx0Z2V0IHZhbHVlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC52YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdmFsdWUodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC52YWx1ZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHVzZWQgdG8gY29tcGxldGx5IGN1c3RvbWl6ZSB0aGUgRWRpdG9yIGRpYWxvZyB0aGF0IGlzIHVzZWQgdG8gaW5zZXJ0L2VkaXQgdGFibGVzL2ltYWdlcy92aWRlb3MvaHlwZXJsaW5rcy4gVGhlIGZ1bmN0aW9uIGFjY2VwdHMgdHdvIGFyZ3VtZW50czogdGFyZ2V0IC0gdGhlIHRhcmdldCBkaWFsb2cgdGhhdCBpcyBhYm91dCB0byBiZSBvcGVuZWQuaXRlbSAtIHRoZSB0b29sYmFyIGl0ZW0gb2JqZWN0IHRoYXQgdHJpZ2dlciB0aGUgZGlhbG9nLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgd2luZG93Q3VzdG9taXphdGlvbkZ1bmN0aW9uKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC53aW5kb3dDdXN0b21pemF0aW9uRnVuY3Rpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHdpbmRvd0N1c3RvbWl6YXRpb25GdW5jdGlvbih2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LndpbmRvd0N1c3RvbWl6YXRpb25GdW5jdGlvbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCBvbiBibHVyIGlmIHRoZSBjb250ZW50IGlzIGNoYW5nZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0b2xkVmFsdWUsIFx0dmFsdWUpXG5cdCogICBvbGRWYWx1ZSAtIFRoZSBvbGQgdmFsdWUgYmVmb3JlIHRoZSBjaGFuZ2UuXG5cdCogICB2YWx1ZSAtIFRoZSBuZXcgdmFsdWUgYWZ0ZXIgdGhlIGNoYW5nZS5cblx0Ki9cblx0QE91dHB1dCgpIG9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgYWZ0ZXIgdXNlciBpbnB1dCB0byBpbmRpY2F0ZSB0aGF0IHRoZSBjb250ZW50IGlzIGNoYW5nZWQgdmlhIHVzZXIgaW50ZXJhY3Rpb24uXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0b2xkVmFsdWUsIFx0dmFsdWUpXG5cdCogICBvbGRWYWx1ZSAtIFRoZSBvbGQgdmFsdWUgYmVmb3JlIHRoZSBpbnB1dCBjaGFuZ2UuXG5cdCogICB2YWx1ZSAtIFRoZSBuZXcgdmFsdWUgYWZ0ZXIgdGhlIGlucHV0IGNoYW5nZS5cblx0Ki9cblx0QE91dHB1dCgpIG9uQ2hhbmdpbmc6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCBiZWZvcmUgYSBUb29sYmFyIGFjdGlvbiBpcyBzdGFydGVkLiBUaGUgZXZlbnQgY2FuIGJlIGNhbmNlbGVkIHZpYSBldmVudC5wcmV2ZW50RGVmYXVsdCgpLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdG5hbWUpXG5cdCogICBuYW1lIC0gVGhlIG5hbWUgb2YgdGhlIGFjdGlvbi5cblx0Ki9cblx0QE91dHB1dCgpIG9uQWN0aW9uU3RhcnQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgVG9vbGJhciBhY3Rpb24gaGFzIGVuZGVkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdG5hbWUpXG5cdCogICBuYW1lIC0gVGhlIG5hbWUgb2YgdGhlIGFjdGlvbi5cblx0Ki9cblx0QE91dHB1dCgpIG9uQWN0aW9uRW5kOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIENvbnRleHQgbWVudSBpdGVtIGhhcyBiZWVuIGNsaWNrZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0b3JpZ2luYWxFdmVudCwgXHR2YWx1ZSlcblx0KiAgIG9yaWdpbmFsRXZlbnQgLSBUaGUgb3JpZ2luYWwgY2xpY2sgZXZlbnQuXG5cdCogICB2YWx1ZSAtIFRoZSB2YWx1ZSBvZiB0aGUgaXRlbS5cblx0Ki9cblx0QE91dHB1dCgpIG9uQ29udGV4dE1lbnVJdGVtQ2xpY2s6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBDb250ZXh0IE1lbnUgaXMgb3BlbmVkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHRhcmdldCwgXHRvd25lcilcblx0KiAgIHRhcmdldCAtIFRoZSB0b29sYmFyIHRoYXQgaXMgdGhlIHRhcmdldCBvZiB0aGUgb3BlcmF0aW9uLlxuXHQqICAgb3duZXIgLSBUaGUgdG9vbHRpcCB0YXJnZXQgKHRoZSBvd25lciBvZiB0aGUgdG9vbHRpcCkuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkNvbnRleHRNZW51T3BlbjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIENvbnRleHQgTWVudSBpcyBvcGVuaW5nLiBUaGUgb3BlbmluZyBvcGVyYXRpb24gY2FuIGJlIGNhbmNlbGVkIHZpYSBldmVudC5wcmV2ZW50RGVmYXVsdCgpLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHRhcmdldClcblx0KiAgIHRhcmdldCAtIFRoZSB0b29sYmFyIHRoYXQgaXMgdGhlIHRhcmdldCBvZiB0aGUgb3BlcmF0aW9uLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25Db250ZXh0TWVudU9wZW5pbmc6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBDb250ZXh0IE1lbnUgaXMgY2xvc2VkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHRhcmdldCwgXHRvd25lcilcblx0KiAgIHRhcmdldCAtIFRoZSB0b29sYmFyIHRoYXQgaXMgdGhlIHRhcmdldCBvZiB0aGUgb3BlcmF0aW9uLlxuXHQqICAgb3duZXIgLSBUaGUgdG9vbHRpcCB0YXJnZXQgKHRoZSBvd25lciBvZiB0aGUgdG9vbHRpcCkuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkNvbnRleHRNZW51Q2xvc2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBDb250ZXh0IE1lbnUgaXMgY2xvc2luZy4gVGhlIGNsb3Npbmcgb3BlcmF0aW9uIGNhbiBiZSBjYW5jZWxlZCB2aWEgZXZlbnQucHJldmVudERlZmF1bHQoKS5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHR0YXJnZXQpXG5cdCogICB0YXJnZXQgLSBUaGUgdG9vbGJhciB0aGF0IGlzIHRoZSB0YXJnZXQgb2YgdGhlIG9wZXJhdGlvbi5cblx0Ki9cblx0QE91dHB1dCgpIG9uQ29udGV4dE1lbnVDbG9zaW5nOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhbiBpbWFnZS90YWJsZS92aWRlbyByZXNpemluZyBoYXMgc3RhcnRlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvblJlc2l6ZVN0YXJ0OiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhbiBpbWFnZS90YWJsZS92aWRlbyByZXNpemluZyBoYXMgZW5kZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dGFyZ2V0KVxuXHQqICAgdGFyZ2V0IC0gVGhlIGVsZW1lbnQgdGhhdCBpcyByZXNpemVkIChpbWFnZS90YWJsZSBvciB2aWRlbykuXG5cdCovXG5cdEBPdXRwdXQoKSBvblJlc2l6ZUVuZDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGlubGluZSBUb29sYmFyIGlzIG9wZW5lZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHR0YXJnZXQsIFx0b3duZXIpXG5cdCogICB0YXJnZXQgLSBUaGUgdG9vbGJhciB0aGF0IGlzIHRoZSB0YXJnZXQgb2YgdGhlIG9wZXJhdGlvbi5cblx0KiAgIG93bmVyIC0gVGhlIHRvb2x0aXAgdGFyZ2V0ICh0aGUgb3duZXIgb2YgdGhlIHRvb2x0aXApLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25JbmxpbmVUb29sYmFyT3BlbjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGlubGluZSBUb29sYmFyIGlzIG9wZW5pbmcuIFRoZSBvcGVuaW5nIG9wZXJhdGlvbiBjYW4gYmUgY2FuY2VsZWQgYnkgY2FsbGluZyBldmVudC5wcmV2ZW50RGVmYXVsdCgpIGluIHRoZSBldmVudCBoYW5kbGVyIGZ1bmN0aW9uLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHRhcmdldClcblx0KiAgIHRhcmdldCAtIFRoZSB0b29sYmFyIHRoYXQgaXMgdGhlIHRhcmdldCBvZiB0aGUgb3BlcmF0aW9uLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25JbmxpbmVUb29sYmFyT3BlbmluZzogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGlubGluZSBUb29sYmFyIGlzIGNsb3NlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHR0YXJnZXQsIFx0b3duZXIpXG5cdCogICB0YXJnZXQgLSBUaGUgdG9vbGJhciB0aGF0IGlzIHRoZSB0YXJnZXQgb2YgdGhlIG9wZXJhdGlvbi5cblx0KiAgIG93bmVyIC0gVGhlIHRvb2x0aXAgdGFyZ2V0ICh0aGUgb3duZXIgb2YgdGhlIHRvb2x0aXApLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25JbmxpbmVUb29sYmFyQ2xvc2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBpbmxpbmUgVG9vbGJhciBpcyBjbG9zaW5nLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHRhcmdldClcblx0KiAgIHRhcmdldCAtIFRoZSB0b29sYmFyIHRoYXQgaXMgdGhlIHRhcmdldCBvZiB0aGUgb3BlcmF0aW9uLiBUaGUgY2xvc2luZyBvcGVyYXRpb24gY2FuIGJlIGNhbmNlbGVkIGJ5IGNhbGxpbmcgZXZlbnQucHJldmVudERlZmF1bHQoKSBpbiB0aGUgZXZlbnQgaGFuZGxlciBmdW5jdGlvbi5cblx0Ki9cblx0QE91dHB1dCgpIG9uSW5saW5lVG9vbGJhckNsb3Npbmc6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBEcm9wIERvd24gVG9vbGJhciBpcyBvcGVuZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dGFyZ2V0LCBcdG93bmVyKVxuXHQqICAgdGFyZ2V0IC0gVGhlIHRvb2xiYXIgdGhhdCBpcyB0aGUgdGFyZ2V0IG9mIHRoZSBvcGVyYXRpb24uXG5cdCogICBvd25lciAtIFRoZSB0b29sdGlwIHRhcmdldCAodGhlIG93bmVyIG9mIHRoZSB0b29sdGlwKS5cblx0Ki9cblx0QE91dHB1dCgpIG9uRHJvcERvd25Ub29sYmFyT3BlbjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIERyb3AgRG93biBUb29sYmFyIGlzIG9wZW5pbmcuIFRoZSBvcGVuaW5nIG9wZXJhdGlvbiBjYW4gYmUgY2FuY2VsZWQgYnkgY2FsbGluZyBldmVudC5wcmV2ZW50RGVmYXVsdCgpIGluIHRoZSBldmVudCBoYW5kbGVyIGZ1bmN0aW9uLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHRhcmdldClcblx0KiAgIHRhcmdldCAtIFRoZSB0b29sYmFyIHRoYXQgaXMgdGhlIHRhcmdldCBvZiB0aGUgb3BlcmF0aW9uLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25Ecm9wRG93blRvb2xiYXJPcGVuaW5nOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgRHJvcCBEb3duIFRvb2xiYXIgaXMgY2xvc2VkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHRhcmdldCwgXHRvd25lcilcblx0KiAgIHRhcmdldCAtIFRoZSB0b29sYmFyIHRoYXQgaXMgdGhlIHRhcmdldCBvZiB0aGUgb3BlcmF0aW9uLlxuXHQqICAgb3duZXIgLSBUaGUgdG9vbHRpcCB0YXJnZXQgKHRoZSBvd25lciBvZiB0aGUgdG9vbHRpcCkuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkRyb3BEb3duVG9vbGJhckNsb3NlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgRHJvcCBEb3duIFRvb2xiYXIgaXMgY2xvc2luZy4gVGhlIGNsb3Npbmcgb3BlcmF0aW9uIGNhbiBiZSBjYW5jZWxlZCBieSBjYWxsaW5nIGV2ZW50LnByZXZlbnREZWZhdWx0KCkgaW4gdGhlIGV2ZW50IGhhbmRsZXIgZnVuY3Rpb24uXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dGFyZ2V0KVxuXHQqICAgdGFyZ2V0IC0gVGhlIHRvb2xiYXIgdGhhdCBpcyB0aGUgdGFyZ2V0IG9mIHRoZSBvcGVyYXRpb24uXG5cdCovXG5cdEBPdXRwdXQoKSBvbkRyb3BEb3duVG9vbGJhckNsb3Npbmc6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB0aGUgRGlhbG9nIFdpbmRvdyBpcyBvcGVuZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dGFyZ2V0LCBcdGl0ZW0pXG5cdCogICB0YXJnZXQgLSBUaGUgd2luZG93IHRoYXQgaXMgdGhlIHRhcmdldCBvZiB0aGUgb3BlcmF0aW9uLlxuXHQqICAgaXRlbSAtIFRoZSB0b29sYmFyIGl0ZW0gaXMgdGhlIHRhcmdldCBvZiB0aGUgb3BlcmF0aW9uLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25EaWFsb2dPcGVuOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgYmVmb3JlIHRoZSBEaWFsb2cgV2luZG93IGlzIG9wZW5lZC4gVGhlIGV2ZW50IGNhbiBiZSBwcmV2ZW50ZWQgdmlhIGV2ZW50LnByZXZlbnREZWZhdWx0KCkuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dGFyZ2V0LCBcdGl0ZW0pXG5cdCogICB0YXJnZXQgLSBUaGUgd2luZG93IHRoYXQgaXMgdGhlIHRhcmdldCBvZiB0aGUgb3BlcmF0aW9uLlxuXHQqICAgaXRlbSAtIFRoZSB0b29sYmFyIGl0ZW0gdGhhdCBpcyB0aGUgdGFyZ2V0IG9mIHRoZSBvcGVyYXRpb24uXG5cdCovXG5cdEBPdXRwdXQoKSBvbkRpYWxvZ09wZW5pbmc6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBEaWFsb2cgV2luZG93IGlzIGNsb3NlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHR0YXJnZXQsIFx0aXRlbSlcblx0KiAgIHRhcmdldCAtIFRoZSB3aW5kb3cgdGhhdCBpcyB0aGUgdGFyZ2V0IG9mIHRoZSBvcGVyYXRpb24uXG5cdCogICBpdGVtIC0gVGhlIHRvb2xiYXIgaXRlbSB0aGF0IGlzIHRoZSB0YXJnZXQgb2YgdGhlIG9wZXJhdGlvbi5cblx0Ki9cblx0QE91dHB1dCgpIG9uRGlhbG9nQ2xvc2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCBiZWZvcmUgdGhlIERpYWxvZyBXaW5kb3cgaXMgY2xvc2luZy4gVGhlIGV2ZW50IGNhbiBiZSBwcmV2ZW50ZWQgdmlhIGV2ZW50LnByZXZlbnREZWZhdWx0KCkuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dGFyZ2V0LCBcdGl0ZW0pXG5cdCogICB0YXJnZXQgLSBUaGUgd2luZG93IHRoYXQgaXMgdGhlIHRhcmdldCBvZiB0aGUgb3BlcmF0aW9uLlxuXHQqICAgaXRlbSAtIFRoZSB0b29sYmFyIGl0ZW0gdGhhdCBpcyB0aGUgdGFyZ2V0IG9mIHRoZSBvcGVyYXRpb24uXG5cdCovXG5cdEBPdXRwdXQoKSBvbkRpYWxvZ0Nsb3Npbmc6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSB1cGxvYWRpbmcgb2YgYW4gaW1hZ2UvdmlkZW8gaXMgc3VjY2Vzc2Z1bC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHR0YXJnZXQsIFx0aXRlbSwgXHRmaWxlbmFtZSwgXHR0eXBlLCBcdHNpemUsIFx0aW5kZXgsIFx0c3RhdHVzKVxuXHQqICAgdGFyZ2V0IC0gVGhlIGZpbGUgdXBsb2FkIGVsZW1lbnQgdGhhdCBpcyB0aGUgdGFyZ2V0IG9mIHRoZSBvcGVyYXRpb24uXG5cdCogICBpdGVtIC0gVGhlIHRvb2xiYXIgaXRlbSB0aGF0IGlzIHRoZSB0YXJnZXQgb2YgdGhlIG9wZXJhdGlvbi5cblx0KiAgIGZpbGVuYW1lIC0gVGhlIG5hbWUgb2YgdGhlIHVwbG9hZGVkIGZpbGUuXG5cdCogICB0eXBlIC0gVGhlIHR5cGUgb2YgdGhlIHVwbG9hZGVkIGZpbGUuXG5cdCogICBzaXplIC0gVGhlIHNpemUgb2YgdGhlIHVwbG9hZGVkIGZpbGUuXG5cdCogICBpbmRleCAtIFRoZSBpbmRleCBvZiB0aGUgdXBsb2FkZWQgZmlsZS5cblx0KiAgIHN0YXR1cyAtIFRoZSBzdGF0dXMgb2YgdGhlIHVwbG9hZGVkIGZpbGUuIFdoZXRoZXIgdGhlcmUgd2FzIGFuIGVycm9yIG9yIHN1Y2Nlc3MuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkltYWdlVXBsb2FkU3VjY2VzczogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHVwbG9hZGluZyBvZiBhbiBpbWFnZS92aWRlbyBpcyB1bnN1Y2Nlc3NmdWwuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dGFyZ2V0LCBcdGl0ZW0sIFx0ZmlsZW5hbWUsIFx0dHlwZSwgXHRzaXplLCBcdGluZGV4LCBcdHN0YXR1cylcblx0KiAgIHRhcmdldCAtIFRoZSBmaWxlIHVwbG9hZCBlbGVtZW50IHRoYXQgaXMgdGhlIHRhcmdldCBvZiB0aGUgb3BlcmF0aW9uLlxuXHQqICAgaXRlbSAtIFRoZSB0b29sYmFyIGl0ZW0gdGhhdCBpcyB0aGUgdGFyZ2V0IG9mIHRoZSBvcGVyYXRpb24uXG5cdCogICBmaWxlbmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBjYW5jZWxlZCBmaWxlLlxuXHQqICAgdHlwZSAtIFRoZSB0eXBlIG9mIHRoZSBjYW5jZWxlZCBmaWxlLlxuXHQqICAgc2l6ZSAtIFRoZSBzaXplIG9mIHRoZSBjYW5jZWxlZCBmaWxlLlxuXHQqICAgaW5kZXggLSBUaGUgaW5kZXggb2YgdGhlIGNhbmNlbGVkIGZpbGUuXG5cdCogICBzdGF0dXMgLSBUaGUgc3RhdHVzIG9mIHRoZSB1cGxvYWRlZCBmaWxlLiBXaGV0aGVyIHRoZXJlIHdhcyBhbiBlcnJvciBvciBzdWNjZXNzLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25JbWFnZVVwbG9hZEZhaWxlZDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSBUb29sYmFyIGl0ZW0gaXMgY2xpY2tlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRvcmlnaW5hbEV2ZW50LCBcdHZhbHVlKVxuXHQqICAgb3JpZ2luYWxFdmVudCAtIFRoZSBvcmlnaW5hbCBjbGljayBldmVudC5cblx0KiAgIHZhbHVlIC0gVGhlIG5hbWUgb2YgdGhlIHRvb2xiYXIgaXRlbSB0aGF0IHdhcyBjbGlja2VkLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25Ub29iYXJJdGVtQ2xpY2s6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgbWVzc2FnZSBpcyBjbG9zZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0aW5zdGFuY2UpXG5cdCogICBpbnN0YW5jZSAtIFRoZSB0b2FzdCBpdGVtIHRoYXQgaXMgdGhlIHRhcmdldCBvZiB0aGUgb3BlcmF0aW9uLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25NZXNzYWdlQ2xvc2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgbWVzc2FnZSBpcyBvcGVuZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0aW5zdGFuY2UpXG5cdCogICBpbnN0YW5jZSAtIFRoZSB0b2FzdCBpdGVtIHRoYXQgaXMgdGhlIHRhcmdldCBvZiB0aGUgb3BlcmF0aW9uLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25NZXNzYWdlT3BlbjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIEJsdXJzIHRoZSBjb250ZW50IG9mIHRoZSBFZGl0b3IuIFxuXHQqL1xuICAgIHB1YmxpYyBibHVyKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDbGVhcnMgdGhlIGNvbnRlbnQgb2YgdGhlIEVkaXRvci4gXG5cdCovXG4gICAgcHVibGljIGNsZWFyQ29udGVudCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xlYXJDb250ZW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xlYXJDb250ZW50KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIENvbGxhcHNlIHRoZSBUb29sYmFyIGlmIHRoZSB0b29sYmFyVmlld01vZGUgaXMgc2V0IHRvICd0b2dnbGUnLiBcblx0Ki9cbiAgICBwdWJsaWMgY29sbGFwc2VUb29sYmFyKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jb2xsYXBzZVRvb2xiYXIoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jb2xsYXBzZVRvb2xiYXIoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGlzYWJsZXMgYSBUb29sYmFyIGl0ZW0uIFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBpdGVtTmFtZS4gVGhlIG5hbWUgb2YgdGhlIHRvb2xiYXIgaXRlbSB0byBkaXNhYmxlLlxuXHQqL1xuICAgIHB1YmxpYyBkaXNhYmxlVG9vbGJhckl0ZW0oaXRlbU5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlVG9vbGJhckl0ZW0oaXRlbU5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVUb29sYmFySXRlbShpdGVtTmFtZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEV4cGFuZCB0aGUgVG9vbGJhciBpZiB0aGUgdG9vbGJhclZpZXdNb2RlIGlzIHNldCB0byAndG9nZ2xlJy4gXG5cdCovXG4gICAgcHVibGljIGV4cGFuZFRvb2xiYXIoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmV4cGFuZFRvb2xiYXIoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5leHBhbmRUb29sYmFyKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEVuYWJsZXMgYSBwcmV2aW91c2x5IGRpc2FibGVkIFRvb2xiYXIgaXRlbS4gXG5cdCogQHBhcmFtIHtzdHJpbmd9IGl0ZW1OYW1lLiBUaGUgbmFtZSBvZiB0aGUgdG9vbGJhciBpdGVtIHRvIGVuYWJsZS5cblx0Ki9cbiAgICBwdWJsaWMgZW5hYmxlVG9vbGJhckl0ZW0oaXRlbU5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5lbmFibGVUb29sYmFySXRlbShpdGVtTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZW5hYmxlVG9vbGJhckl0ZW0oaXRlbU5hbWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFeGVjdXRlcyBhIGNvbW1hbmQgdmlhIHRoZSBuYXRpdmUgZXhlY0NvbW1hbmQgbWV0aG9kLiBUaGUgbWV0aG9kIHJldHVybnMgdHJ1ZSBvciBmYWxzZSBkZXBlbmRpbmcgb24gd2hldGhlciB0aGUgZXhlY3V0aW9uIHdhcyBzdWNjZXNzZnVsIG9yIG5vdC4gVGhlIGZvbGxvd2luZyBsaXN0IG9mIGNvbW1hbmRzIGNhbiBiZSBlZXhlY3V0ZWQ6IGJvbGQgLSBtYWtlcyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGNvbnRlbnQgYm9sZC4gRXhhbXBsZTogZWRpdG9yLmV4ZWN1dGVDb21tYW5kKCdib2xkJyk7aXRhbGljIC0gbWFrZXMgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBjb250ZW50IGl0YWxpYy4gRXhhbXBsZTogZWRpdG9yLmV4ZWN1dGVDb21tYW5kKCdpdGFsaWMnKTt1bmRlbGluZWQgLSBtYWtlcyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGNvbnRlbnQgdW5kZXJsaW5lZC4gRXhhbXBsZTogZWRpdG9yLmV4ZWN1dGVDb21tYW5kKCd1bmRlcmxpbmUnKTtzdHJpa2VUaHJvdWdoIC0gYXBwbGllcyBhIHNpbmdsZSBsaW5lIHN0cmlrZSB0aHJvdWdoIGZvcm1hdHRpbmcgdG8gdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBjb250ZW50LiBFeGFtcGxlOiBlZGl0b3IuZXhlY3V0ZUNvbW1hbmQoJ3N0cmlrZVRocm91Z2gnKTtzdXBlcnNjcmlwdCAtIHNldHMgdGhlIHNlbGVjdGVkIGNvbnRlbnQgYXMgc3VwZXJzY3JpcHQuIEV4YW1wbGU6IGVkaXRvci5leGVjdXRlQ29tbWFuZCgnc3VwZXJzY3JpcHQnKTtzdWJzY3JpcHQgLSBzZXRzIHRoZSBzZWxlY3RlZCBjb250ZW50IGFzIHN1cGVyc2NyaXB0LiBFeGFtcGxlOiBlZGl0b3IuZXhlY3V0ZUNvbW1hbmQoJ3N1YnNjcmlwdCcpO3VwcGVyY2FzZSAtIGNoYW5nZXMgdGhlIGNhc2Ugb2YgdGhlIGN1cnJlbnQgc2VsZWN0aW9uIHRvIHVwcGVyLiBFeGFtcGxlOiBlZGl0b3IuZXhlY3V0ZUNvbW1hbmQoJ3VwcGVyY2FzZScpO2xvd2VyY2FzZSAtIGNoYW5nZXMgdGhlIGNhc2Ugb2YgdGhlIGN1cnJlbnQgc2VsZWN0aW9uIHRvIGxvd2VyLiBFeGFtcGxlOiBlZGl0b3IuZXhlY3V0ZUNvbW1hbmQoJ2xvd2VyY2FzZScpO2ZvcmVDb2xvciAtIGNoYW5nZXMgdGhlIGZvbnQgY29sb3Igb2YgdGhlIGN1cnJlbnQgY29udGVudCBzZWxlY3Rpb24uIEV4YW1wbGU6IGVkaXRvci5leGVjdXRlQ29tbWFuZCgnZm9yZUNvbG9yJywgJyMwMDAwMDAnKTtmb250TmFtZSAtIGNoYW5nZXMgdGhlIGZvbnQgbmFtZSBmb3IgdGhlIHNlbGVjdGVkIGNvbnRlbnQuIEV4YW1wbGU6IGVkaXRvci5leGVjdXRlQ29tbWFuZCgnZm9udE5hbWUnLCAnQXJpYWwnKTtmb250U2l6ZSAtIGNoYW5nZXMgdGhlIGZvbnQgc2l6ZSBvZiB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGNvbnRlbnQuIEV4YW1wbGU6IGVkaXRvci5leGVjdXRlQ29tbWFuZCgnZm9udFNpemUnLCAnMTVweCcpO2hpbGl0ZUNvbG9yIC0gY2hhbmdlcyB0aGUgYmFja2dyb3VuZCBjb2xvciBvZiBjdXJyZW50IHNlbGVjdGlvbi4gRXhhbXBsZTogZWRpdG9yLmV4ZWN1dGVDb21tYW5kKCdoaWxpdGVDb2xvcicsICcjMDAwMDAwJyk7anVzdGlmeUNlbnRlciAtIGFsaWducyB0aGUgY29udGVudCB0byB0aGUgY2VudGVyLiBFeGFtcGxlOiBlZGl0b3IuZXhlY3V0ZUNvbW1hbmQoJ2p1c3RpZnlDZW50ZXInKTtqdXN0aWZ5RnVsbCAtIGFsaWducyB0aGUgY29udGVudCB0byBiZSBmdWxseSBqdXN0aWZpZWQuIEV4YW1wbGU6IGVkaXRvci5leGVjdXRlQ29tbWFuZCgnanVzdGlmeUZ1bGwnKTtqdXN0aWZ5TGVmdCAtIGFsaWducyB0aGUgY29udGVudCB0byB0aGUgbGVmdC4gRXhhbXBsZTogZWRpdG9yLmV4ZWN1dGVDb21tYW5kKCdqdXN0aWZ5TGVmdCcpO2p1c3RpZnlSaWdodCAtIGFsaWducyB0aGUgY29udGVudCB0byB0aGUgcmlnaHQuIEV4YW1wbGU6IGVkaXRvci5leGVjdXRlQ29tbWFuZCgnanVzdGlmeVJpZ2h0Jyk7dW5kbyAtIGFsbG93cyB0byB1bmRvIHRoZSBwcmV2aW91cyBhY3Rpb24uIEV4YW1wbGU6IGVkaXRvci5leGVjdXRlQ29tbWFuZCgndW5kbycpO3JlZG8gLSBhbGxvd3MgdG8gcmVkbyB0aGUgcHJldmlvdXMgYWN0aW9ucy4gRXhhbXBsZTogZWRpdG9yLmV4ZWN1dGVDb21tYW5kKCdyZWRvJyk7Y3JlYXRlTGluayAtIGNyZWF0ZXMgYSBoeXBlcmxpbmsgaW4gdGhlIGNvbnRlbnQgc2VjdGlvbiBvZiB0aGUgRWRpdG9yLiBFeGFtcGxlOiBlZGl0b3IuZXhlY3V0ZUNvbW1hbmQoJ2NyZWF0ZUxpbmsnLCB7IHRleHQ6ICdMaW5rcycsIHVybDogJ2h0dHA6Ly8nLCB0aXRsZSA6ICdMaW5rJyB9KTtpbmRlbnQgLSBpbmRlbnRzIHRoZSBjb250ZW50IHdpdGggb25lIGxldmVsLiBFeGFtcGxlOiBlZGl0b3IuZXhlY3V0ZUNvbW1hbmQoJ2luZGVudCcpO291dGRlbnQgLSBvdXRkZW50cyB0aGUgY29udGVudCB3aXRoIG9uZSBsZXZlbC4gRXhhbXBsZTogZWRpdG9yLmV4ZWN1dGVDb21tYW5kKCdvdXRkZW50Jyk7aW5zZXJ0SFRNTCAtIGluc2VydCBhbiBIVE1MIGNvbnRlbnQgYXMgc3RyaW5nIGF0IHRoZSBjdXJyZW50IGN1cnNvciBsb2NhdGlvbi4gRXhhbXBsZTogZWRpdG9yLmV4ZWN1dGVDb21tYW5kKCdpbnNlcnRIVE1MJywgJ1RleHQnKTtpbnNlcnRPcmRlcmVkTGlzdCAtIGluc2VydHMgYSBuZXcgbnVtYmVyZWQgbGlzdCBpdGVtLiBFeGFtcGxlOiBlZGl0b3IuZXhlY3V0ZUNvbW1hbmQoJ2luc2VydE9yZGVyZWRMaXN0Jyk7aW5zZXJ0VW5vcmRlcmVkTGlzdCAtIGluc2VydHMgYSBuZXcgYnVsbGV0ZWQgbGlzdCBpdGVtLiBFeGFtcGxlOiBlZGl0b3IuZXhlY3V0ZUNvbW1hbmQoJ2luc2VydFVub3JkZXJlZExpc3QnKTtyZW1vdmVGb3JtYXQgLSByZW1vdmVzIHRoZSBmb3JtYXR0aW5nIHN0eWxlcyBmcm9tIGN1cnJlbnRseSBzZWxlY3RlZCB0ZXh0LiBFeGFtcGxlOiBlZGl0b3IuZXhlY3V0ZUNvbW1hbmQoJ3JlbW92ZUZvcm1hdCcpO2luc2VydFRleHQgLSBpbnNlcnRzIGEgdGV4dCBhdCB0aGUgY3VycmVudCBjdXJzb3IgbG9jYXRpb24uIEV4YW1wbGU6IGVkaXRvci5leGVjdXRlQ29tbWFuZCgnaW5zZXJ0VGV4dCcsICdTb21lIHRleHQgdG8gaW5zZXJ0Jyk7aW5zZXJ0SW1hZ2UgLSBpbnNlcnRzIGFuIGltYWdlIGF0IHRoZSBjdXJyZW50IGN1cnNvciBsb2NhdGlvbi4gRXhhbXBsZTogZWRpdG9yLmV4ZWN1dGVDb21tYW5kKCdpbnNlcnRJbWFnZScsIHsgdXJsOiAnaHR0cHM6Ly93d3cuaHRtbGVsZW1lbnRzLmNvbS9kZW1vcy9pbWFnZXMvY2Fyb3VzZWwtbWVkaXVtLTIuanBnJ30pOyBcblx0KiBAcGFyYW0ge3N0cmluZ30gY29tbWFuZE5hbWUuIFRoZSBuYW1lIG9mIHRoZSBjb21tYW5kIHRvIGV4ZWN1dGUuXG5cdCogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IHZhbHVlPy4gVGhlIHZhbHVlIGZvciB0aGUgY29tbWFuZC4gU29tZSBjb21tYW5kcyByZXF1aXJlIGEgdmFsdWUgdG8gYmUgcGFzc2VkLCBvdGhlcnMgZG8gbm90LlxuXHQqIEByZXR1cm5zIHtib29sZWFufVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZXhlY3V0ZUNvbW1hbmQoY29tbWFuZE5hbWUsIHZhbHVlPyk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5leGVjdXRlQ29tbWFuZChjb21tYW5kTmFtZSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRm9jdXNlcyB0aGUgY29udGVudCBvZiB0aGUgRWRpdG9yLiBcblx0Ki9cbiAgICBwdWJsaWMgZm9jdXMoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0aGUgbnVtYmVyIG9mIGNoYXJhY3RlcnMgaW5zaWRlIHRoZSBFZGl0b3IncyBjb250ZW50LiBcblx0KiBAcmV0dXJucyB7bnVtYmVyfVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0Q2hhckNvdW50KCk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRDaGFyQ291bnQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJldHVybnMgdGhlIGN1cnJlbnQgc2VsZWN0aW9uIHJhbmdlLiBCeSBkZWZhdWx0IHRoZSByZXN1bHQgaXMgYW4gb2JqZWN0IG9mIHR5cGUgUmFuZ2UsIGJ1dCBpZiB0aGUgZWRpdE1vZGUgcHJvcGVydHkgaXMgc2V0IHRvICdtYXJrZG93bicgdGhlIHJldHVybmVkIHZhbHVlIGlzIGFuIG9iamVjdCBpbmRpY2F0aW5nIHRoZSBzdGFydC9lbmQgaW5kZXhlcyBvZiB0aGUgY3VycmVudCBzZWxlY3Rpb24uICBcblx0KiBAcmV0dXJucyB7YW55fVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0U2VsZWN0aW9uUmFuZ2UoKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldFNlbGVjdGlvblJhbmdlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRoZSBjb250ZW50IG9mIHRoZSBFZGl0b3IgYXMgSFRNTC4gV2hlbiBlZGl0TW9kZSBpcyBzZXQgdG8gJ21hcmtkb3duJyB0aGUgbWFya2Rvd24gaXMgcGFyc2VkIGFuZCByZXR1cm5lZCBhcyBIVE1MLiBcblx0KiBAcmV0dXJucyB7c3RyaW5nfVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0SFRNTCgpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0SFRNTCgpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0aGUgY29udGVudCBvZiB0aGUgRWRpdG9yIGFzIHRleHQuIFxuXHQqIEByZXR1cm5zIHtzdHJpbmd9XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRUZXh0KCk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRUZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBIaWRlcyBhIHNwZWNpZmljIG1lc3NhZ2Ugb3IgYWxsIG1lc3NhZ2VzIGlmIG5vIGFyZ3VtZW50IGlzIHByb3ZpZGVkLiBcblx0KiBAcGFyYW0ge0hUTUxFbGVtZW50IHwgc3RyaW5nIHwgbnVtYmVyfSBpdGVtPy4gSGlkZXMgYSBzcGVjaWZpYyBtZXNzYWdlLiBUaGUgYXJndW1lbnQgY2FuIGJlIGEgRE9NIHJlZmVyZW5jZSB0byBhIHNwZWNpZmljIGl0ZW0sIGl0J3MgaW5kZXggb3IgaXQncyBpZC4gSWYgdGhlIGFyZ3VtZW50IGlzIG5vdCBwcm92aWRlZCB0aGVuIGFsbCBtZXNzYWdlcyB3aWxsIGJlIGNsb3NlZC5cblx0Ki9cbiAgICBwdWJsaWMgaGlkZU1lc3NhZ2UoaXRlbT86IEhUTUxFbGVtZW50IHwgc3RyaW5nIHwgbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmhpZGVNZXNzYWdlKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmhpZGVNZXNzYWdlKGl0ZW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBIaWRlcyB0aGUgbGFzdCBzaG93biBtZXNzYWdlLiBcblx0Ki9cbiAgICBwdWJsaWMgaGlkZUxhc3RNZXNzYWdlKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5oaWRlTGFzdE1lc3NhZ2UoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5oaWRlTGFzdE1lc3NhZ2UoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2hvd3MgYSBjdXN0b20gbWVzc2FnZSBpbnNpZGUgdGhlIEVkaXRvci4gXG5cdCogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UuIFRoZSB0ZXh0IG1lc3NhZ2UgdG8gYmUgZGlzcGxheWVkLlxuXHQqIEBwYXJhbSB7YW55fSBzZXR0aW5ncz8uIEFkZGl0aW9uYWwgc2V0dGluZ3MgdGhhdCBjYW4gYmUgYXBwbGllZCB0byB0aGUgVG9hc3QgZWxlbWVudCB0aGF0IGhhbmRsZXMgdGhlIG1lc3NhZ2VzLiBUaGlzIHBhcmFtZXRlciBzaG91bGQgY29udGFpbiBvbmx5IHZhbGlkIFRvYXN0IHByb3BlcnRpZXMgYW5kIHZhbHVlcy5cblx0KiBAcmV0dXJucyB7SFRNTEVsZW1lbnQgfCB1bmRlZmluZWR9XG4gICovXG5cdHB1YmxpYyBhc3luYyBzaG93TWVzc2FnZShtZXNzYWdlLCBzZXR0aW5ncz8pOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuc2hvd01lc3NhZ2UobWVzc2FnZSwgc2V0dGluZ3MpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2VsZWN0cyB0aGUgdGV4dCBpbnNpZGUgRWRpdG9yJ3MgY29udGVudC4gXG5cdCovXG4gICAgcHVibGljIHNlbGVjdEFsbCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0QWxsKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0QWxsKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNlbGVjdHMgYSByYW5nZSBvZiB0ZXh0IGluc2lkZSB0aGUgRWRpdG9yLiBUaGUgbWV0aG9kIHdpbGwgZmluZCB0aGUgbm9kZXMgY29udGFpbmluZyB0aGUgdGV4dCBmcm9tIHRoZSBzdGFydCB0byB0aGUgZW5kIGluZGV4ZXMgYW5kIHdpbGwgc2VsZWN0IHRoZW0gYXMgcmFuZ2VzLiBIb3dldmVyLCBjdXJyZW50bHkgb25seSBGaXJlRm94IHN1cHBvcnRzIG11bHRpcGxlIHJhbmdlIHNlbGVjdGlvbi4gVGhlIHJlc3Qgb2YgdGhlIGJyb3dzZXJzIHdpbGwgb25seSBzZWxlY3QgdGhlIGZpcnN0IG5vZGUuIElmIHRoZSBlZGl0b3IgaXMgaW4gJ2h0bWwnIGVkaXRNb2RlIHRoZW4gdGhlIGV4cGVjdGVkIHRleHQgd2lsbCBiZSBzZWxlY3RlZCByZWdhcmRsZXNzIG9mIHRoZSBicm93c2VyIGJlY2F1c2UgdGhlcmUncyBvbmx5IG9uZSBub2RlIGluc2lkZSB0aGUgZWRpdG9yLiBcblx0KiBAcGFyYW0ge251bWJlcn0gc3RhcnRJbmRleC4gVGhlIHN0YXJ0IGluZGV4IHRvIHNlbGVjdCBmcm9tLlxuXHQqIEBwYXJhbSB7bnVtYmVyfSBlbmRJbmRleC4gVGhlIGVuZCBpbmRleCB0byBzZWxlY3QgdG8uXG5cdCovXG4gICAgcHVibGljIHNlbGVjdFJhbmdlKHN0YXJ0SW5kZXg6IG51bWJlciwgZW5kSW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zZWxlY3RSYW5nZShzdGFydEluZGV4LCBlbmRJbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0UmFuZ2Uoc3RhcnRJbmRleCwgZW5kSW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDbGVhcnMgdGhlIGxvY2FsIHN0b3JhZ2UgZnJvbSBwcmV2aW91c2x5IHN0b3JlZCBzdGF0ZXMgb2YgdGhlIEVkaXRvciB3aXRoIHRoZSBjdXJyZW50IGlkLiBcblx0Ki9cbiAgICBwdWJsaWMgY2xlYXJTdGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xlYXJTdGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNsZWFyU3RhdGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2F2ZXMgdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIEVkaXRvciB0byBsb2NhbCBzdG9yYWdlLiBSZXF1aXJlcyBhbiBpZCB0byBiZSBzZXQgdG8gdGhlIEVkaXRvci4gXG5cdCovXG4gICAgcHVibGljIHNhdmVTdGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2F2ZVN0YXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2F2ZVN0YXRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIExvYWRzIHRoZSBsYXN0IHN0b3JlZCBzdGF0ZSBvZiB0aGUgRWRpdG9yIGZyb20gbG9jYWwgc3RvcmFnZS4gUmVxdWlyZXMgYW4gaWQgdG8gYmUgc2V0IHRvIHRoZSBFZGl0b3IuIFxuXHQqL1xuICAgIHB1YmxpYyBsb2FkU3RhdGUoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmxvYWRTdGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmxvYWRTdGF0ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIEVkaXRvciBpbnRvIFNwbGl0IE1vZGUuIEluIHNwbGl0IG1vZGUgdGhlIEhUTUwvTWFya2Rvd24gZWRpdG9yIGFuZCBTb3VyY2VDb2RlL1ByZXZpZXcgcGFuZWxzIGFyZSB2aXNpYmxlLiBcblx0KiBAcGFyYW0ge2Jvb2xlYW59IHZhbHVlPy4gRGV0ZXJtaW5lcyB3aGV0aGVyIHRvIGVudGVyIG9yIGxlYXZlIHNwbGl0IG1vZGUuIEJ5IGRlZmF1bHQgdGhlIGFyZ3VtZW50IGlzIG5vdCBwYXNzZWQgYW5kIHRoZSBtb2RlIGlzIHRvZ2dsZWQuXG5cdCovXG4gICAgcHVibGljIHNwbGl0TW9kZSh2YWx1ZT86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc3BsaXRNb2RlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zcGxpdE1vZGUodmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIEVkaXRvciBpbnRvIFNvdXJjZUNvZGUvUHJldmlldyBNb2RlLiBJbiB0aGlzIG1vZGUgdGhlIEhUTUwgdmlldyBwYW5lbCBpcyBkaXNwbGF5ZWQuIFxuXHQqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsdWU/LiBEZXRlcm1pbmVzIHdoZXRoZXIgdG8gZW50ZXIgb3IgbGVhdmUgc3BsaXQgbW9kZS4gQnkgZGVmYXVsdCB0aGUgYXJndW1lbnQgaXMgbm90IHBhc3NlZCBhbmQgdGhlIG1vZGUgaXMgdG9nZ2xlZC5cblx0Ki9cbiAgICBwdWJsaWMgcHJldmlld01vZGUodmFsdWU/OiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnByZXZpZXdNb2RlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5wcmV2aWV3TW9kZSh2YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgRWRpdG9yIGludG8gRnVsbCBTY3JlZW4gTW9kZS4gSWYgZW5hYmxlZCB0aGUgRWRpdG9yIGlzIHBvc2l0aW9uZWQgYWJvdmUgdGhlIHBhZ2UgY29udGVudCBhbmQgZmlsbHMgdGhlIHNjcmVlbi4gXG5cdCogQHBhcmFtIHtib29sZWFufSB2YWx1ZT8uIERldGVybWluZXMgd2hldGhlciB0byBlbnRlciBvciBsZWF2ZSBzcGxpdCBtb2RlLiBCeSBkZWZhdWx0IHRoZSBhcmd1bWVudCBpcyBub3QgcGFzc2VkIGFuZCB0aGUgbW9kZSBpcyB0b2dnbGVkLlxuXHQqL1xuICAgIHB1YmxpYyBmdWxsU2NyZWVuTW9kZSh2YWx1ZT86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZnVsbFNjcmVlbk1vZGUodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmZ1bGxTY3JlZW5Nb2RlKHZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRXhwb3J0cyB0aGUgY29udGVudCBvZiB0aGUgRWRpdG9yIGluIHRoZSBkZXNpcmVkIGZvcm1hdC4gVGhlIGN1cnJlbnRseSBzdXBwb3J0ZWQgZm9ybWF0cyBhcmU6IEhUTUwsIE1hcmtkb3duIGFuZCBQREYuIFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBkYXRhRm9ybWF0LiBUaGUgZXhwZWN0ZWQgZmlsZSBmb3JtYXQuXG5cdCogQHBhcmFtIHthbnl9IGNhbGxiYWNrPy4gQSBjYWxsYmFjayB0aGF0IGlzIGV4ZWN1dGVkIGJlZm9yZSB0aGUgZGF0YSBpcyBleHBvcnRlZC4gQWxsb3dzIHRvIG1vZGlmeSB0aGUgb3V0cHV0LlxuXHQqL1xuICAgIHB1YmxpYyBleHBvcnREYXRhKGRhdGFGb3JtYXQ6IHN0cmluZywgY2FsbGJhY2s/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZXhwb3J0RGF0YShkYXRhRm9ybWF0LCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZXhwb3J0RGF0YShkYXRhRm9ybWF0LCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEltcG9ydHMgdGhlIGNvbnRlbnQgb2YgYSBmaWxlIHRvIHRoZSBFZGl0b3IuIFRoZSBjdXJyZW50bHkgc3VwcG9ydGVkIGZvcm1hdHMgYXJlOiBUWFQgb3IgSFRNTC4gXG5cdCogQHBhcmFtIHthbnl9IHNvdXJjZS4gVGhlIHVybCB0byB0aGUgZmlsZSBvciBhbiBvYmplY3QgdGhhdCBkZWZpbmVzIHNldHRpbmdzIGZvciB0aGUgQWpheCByZXF1ZXN0IGxpa2UgdXJsLCB0aW1lcHV0LCBldGMuIE9iamVjdCBmb3JtYXQ6IHsgdXJsOiBzdHJpbmcsIHR5cGU6IHN0cmluZywgZGF0YTogb2JqZWN0LCB0aW1lb3V0OiBudW1iZXIgfVxuXHQqIEBwYXJhbSB7YW55fSBzZXR0aW5ncz8uIEFkZGl0aW9uYWwgc2V0dGluZ3MgZm9yIHRoZSBhamF4IHJlcXVlc3QuIFN1Y2ggYXMgbG9hZEVycm9yIGZ1bmN0aW9uLCBjb250ZW50VHlwZSwgZXRjLiBGb3JtYXQ6IHsgY29udGVudFR5cGU6IHN0cmluZywgYmVmb3JlU2VuZDogRnVuY3Rpb24sIGxvYWRFcnJvcjogRnVuY3Rpb24sIGJlZm9yZUxvYWRDb21wbGV0ZTogRnVuY3Rpb24gIH1cblx0Ki9cbiAgICBwdWJsaWMgaW1wb3J0RGF0YShzb3VyY2U6IGFueSwgc2V0dGluZ3M/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaW1wb3J0RGF0YShzb3VyY2UsIHNldHRpbmdzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5pbXBvcnREYXRhKHNvdXJjZSwgc2V0dGluZ3MpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBPcGVucyB0aGUgUHJpbnQgUHJldmlldyBQYW5lbCBvZiB0aGUgQnJvd3NlciB0byBwcmludCBFZGl0b3IncyBjb250ZW50LiBcblx0Ki9cbiAgICBwdWJsaWMgcHJpbnQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnByaW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucHJpbnQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQWxsb3dzIHRvIHVwZGF0ZSB0aGUgc2V0dGluZ3Mgb2YgYSBzaW5nbGUgdG9vbGJhciBpdGVtLiBUaGUgbWV0aG9kIHJldHVybnMgdHJ1ZSBpZiBzdWNjZXNzZnVsLiBcblx0KiBAcGFyYW0ge3N0cmluZyB8IG51bWJlcn0gbmFtZS4gVGhlIG5hbWUgb2YgdGhlIHRvb2xiYXIgaXRlbSBvciBpdCdzIGluZGV4IGluc2lkZSB0aGUgPGI+dG9vbGJhckl0ZW1zPC9iPiBhcnJheS5cblx0KiBAcGFyYW0ge2FueX0gc2V0dGluZ3MuIEEgc2V0dGluZ3Mgb2JqZWN0IGZvciB0aGUgdG9vbGJhciBpdGVtLiBJdCBzaG91bGQgaGF2ZSB0aGUgc2FtZSBkZWZpbml0aW9uIGFzIHdoZW4gZGVmaW5pbmcgYSBjdXN0b20gdG9vbGJhciBpdGVtLiBZb3UgY2FuIHJlYWQgbW9yZSBhYm91dCBpdCBpbiB0aGUgZGVkaWNhdGVkIHRvcGljIGZvciB0aGUgRWRpdG9yIFRvb2xiYXIgb24gdGhlIHdlYnNpdGUuXG5cdCogQHJldHVybnMge2Jvb2xlYW4gfCB1bmRlZmluZWR9XG4gICovXG5cdHB1YmxpYyBhc3luYyB1cGRhdGVUb29sYmFySXRlbShuYW1lLCBzZXR0aW5ncyk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC51cGRhdGVUb29sYmFySXRlbShuYW1lLCBzZXR0aW5ncyk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblxuXHRnZXQgaXNSZW5kZXJlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQgOiBmYWxzZTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHR9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICBjb25zdCB0aGF0ID0gdGhpcztcblxuICAgICAgdGhhdC5vbkNyZWF0ZS5lbWl0KHRoYXQubmF0aXZlRWxlbWVudCk7XG5cblx0XHRTbWFydC5SZW5kZXIoKTtcblxuXHRcdHRoaXMubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzbWFydC1hbmd1bGFyJyk7XG5cblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHsgdGhhdC5vblJlYWR5LmVtaXQodGhhdC5uYXRpdmVFbGVtZW50KTsgfSk7XG5cdFx0dGhpcy5saXN0ZW4oKTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMudW5saXN0ZW4oKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblx0XHRpZiAodGhpcy5uYXRpdmVFbGVtZW50ICYmIHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG5cdFx0XHRmb3IgKGNvbnN0IHByb3BOYW1lIGluIGNoYW5nZXMpIHtcblx0XHRcdFx0aWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG5cdFx0XHRcdFx0dGhpcy5uYXRpdmVFbGVtZW50W3Byb3BOYW1lXSA9IGNoYW5nZXNbcHJvcE5hbWVdLmN1cnJlbnRWYWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQWRkIGV2ZW50IGxpc3RlbmVycy4gKi9cblx0cHJpdmF0ZSBsaXN0ZW4oKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY2hhbmdlSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ2hhbmdlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snY2hhbmdlSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY2hhbmdpbmdIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25DaGFuZ2luZy5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2luZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY2hhbmdpbmdIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydhY3Rpb25TdGFydEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkFjdGlvblN0YXJ0LmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2FjdGlvblN0YXJ0JywgdGhhdC5ldmVudEhhbmRsZXJzWydhY3Rpb25TdGFydEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2FjdGlvbkVuZEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkFjdGlvbkVuZC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdhY3Rpb25FbmQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2FjdGlvbkVuZEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbnRleHRNZW51SXRlbUNsaWNrSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ29udGV4dE1lbnVJdGVtQ2xpY2suZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dE1lbnVJdGVtQ2xpY2snLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbnRleHRNZW51SXRlbUNsaWNrSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY29udGV4dE1lbnVPcGVuSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ29udGV4dE1lbnVPcGVuLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRNZW51T3BlbicsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29udGV4dE1lbnVPcGVuSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY29udGV4dE1lbnVPcGVuaW5nSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ29udGV4dE1lbnVPcGVuaW5nLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRNZW51T3BlbmluZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29udGV4dE1lbnVPcGVuaW5nSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY29udGV4dE1lbnVDbG9zZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNvbnRleHRNZW51Q2xvc2UuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dE1lbnVDbG9zZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29udGV4dE1lbnVDbG9zZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbnRleHRNZW51Q2xvc2luZ0hhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNvbnRleHRNZW51Q2xvc2luZy5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0TWVudUNsb3NpbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbnRleHRNZW51Q2xvc2luZ0hhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jlc2l6ZVN0YXJ0SGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uUmVzaXplU3RhcnQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplU3RhcnQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jlc2l6ZVN0YXJ0SGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1sncmVzaXplRW5kSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uUmVzaXplRW5kLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZUVuZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1sncmVzaXplRW5kSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snaW5saW5lVG9vbGJhck9wZW5IYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25JbmxpbmVUb29sYmFyT3Blbi5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpbmxpbmVUb29sYmFyT3BlbicsIHRoYXQuZXZlbnRIYW5kbGVyc1snaW5saW5lVG9vbGJhck9wZW5IYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydpbmxpbmVUb29sYmFyT3BlbmluZ0hhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbklubGluZVRvb2xiYXJPcGVuaW5nLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lubGluZVRvb2xiYXJPcGVuaW5nJywgdGhhdC5ldmVudEhhbmRsZXJzWydpbmxpbmVUb29sYmFyT3BlbmluZ0hhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2lubGluZVRvb2xiYXJDbG9zZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbklubGluZVRvb2xiYXJDbG9zZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpbmxpbmVUb29sYmFyQ2xvc2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2lubGluZVRvb2xiYXJDbG9zZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2lubGluZVRvb2xiYXJDbG9zaW5nSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uSW5saW5lVG9vbGJhckNsb3NpbmcuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5saW5lVG9vbGJhckNsb3NpbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2lubGluZVRvb2xiYXJDbG9zaW5nSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snZHJvcERvd25Ub29sYmFyT3BlbkhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkRyb3BEb3duVG9vbGJhck9wZW4uZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJvcERvd25Ub29sYmFyT3BlbicsIHRoYXQuZXZlbnRIYW5kbGVyc1snZHJvcERvd25Ub29sYmFyT3BlbkhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2Ryb3BEb3duVG9vbGJhck9wZW5pbmdIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Ecm9wRG93blRvb2xiYXJPcGVuaW5nLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3BEb3duVG9vbGJhck9wZW5pbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2Ryb3BEb3duVG9vbGJhck9wZW5pbmdIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydkcm9wRG93blRvb2xiYXJDbG9zZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkRyb3BEb3duVG9vbGJhckNsb3NlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3BEb3duVG9vbGJhckNsb3NlJywgdGhhdC5ldmVudEhhbmRsZXJzWydkcm9wRG93blRvb2xiYXJDbG9zZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2Ryb3BEb3duVG9vbGJhckNsb3NpbmdIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Ecm9wRG93blRvb2xiYXJDbG9zaW5nLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3BEb3duVG9vbGJhckNsb3NpbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2Ryb3BEb3duVG9vbGJhckNsb3NpbmdIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydkaWFsb2dPcGVuSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uRGlhbG9nT3Blbi5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkaWFsb2dPcGVuJywgdGhhdC5ldmVudEhhbmRsZXJzWydkaWFsb2dPcGVuSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snZGlhbG9nT3BlbmluZ0hhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkRpYWxvZ09wZW5pbmcuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZGlhbG9nT3BlbmluZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snZGlhbG9nT3BlbmluZ0hhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2RpYWxvZ0Nsb3NlSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uRGlhbG9nQ2xvc2UuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZGlhbG9nQ2xvc2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2RpYWxvZ0Nsb3NlSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snZGlhbG9nQ2xvc2luZ0hhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkRpYWxvZ0Nsb3NpbmcuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZGlhbG9nQ2xvc2luZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snZGlhbG9nQ2xvc2luZ0hhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2ltYWdlVXBsb2FkU3VjY2Vzc0hhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkltYWdlVXBsb2FkU3VjY2Vzcy5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpbWFnZVVwbG9hZFN1Y2Nlc3MnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2ltYWdlVXBsb2FkU3VjY2Vzc0hhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2ltYWdlVXBsb2FkRmFpbGVkSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uSW1hZ2VVcGxvYWRGYWlsZWQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW1hZ2VVcGxvYWRGYWlsZWQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2ltYWdlVXBsb2FkRmFpbGVkSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1sndG9vYmFySXRlbUNsaWNrSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uVG9vYmFySXRlbUNsaWNrLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Rvb2Jhckl0ZW1DbGljaycsIHRoYXQuZXZlbnRIYW5kbGVyc1sndG9vYmFySXRlbUNsaWNrSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snbWVzc2FnZUNsb3NlSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uTWVzc2FnZUNsb3NlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2VDbG9zZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snbWVzc2FnZUNsb3NlSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snbWVzc2FnZU9wZW5IYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25NZXNzYWdlT3Blbi5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlT3BlbicsIHRoYXQuZXZlbnRIYW5kbGVyc1snbWVzc2FnZU9wZW5IYW5kbGVyJ10pO1xuXG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJlbW92ZSBldmVudCBsaXN0ZW5lcnMuICovXG5cdHByaXZhdGUgdW5saXN0ZW4oKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5nZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snY2hhbmdlSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjaGFuZ2luZ0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5naW5nJywgdGhhdC5ldmVudEhhbmRsZXJzWydjaGFuZ2luZ0hhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snYWN0aW9uU3RhcnRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdhY3Rpb25TdGFydCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snYWN0aW9uU3RhcnRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2FjdGlvbkVuZEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2FjdGlvbkVuZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snYWN0aW9uRW5kSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjb250ZXh0TWVudUl0ZW1DbGlja0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbnRleHRNZW51SXRlbUNsaWNrJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb250ZXh0TWVudUl0ZW1DbGlja0hhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY29udGV4dE1lbnVPcGVuSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY29udGV4dE1lbnVPcGVuJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb250ZXh0TWVudU9wZW5IYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbnRleHRNZW51T3BlbmluZ0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbnRleHRNZW51T3BlbmluZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29udGV4dE1lbnVPcGVuaW5nSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjb250ZXh0TWVudUNsb3NlSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY29udGV4dE1lbnVDbG9zZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29udGV4dE1lbnVDbG9zZUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY29udGV4dE1lbnVDbG9zaW5nSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY29udGV4dE1lbnVDbG9zaW5nJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb250ZXh0TWVudUNsb3NpbmdIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jlc2l6ZVN0YXJ0SGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplU3RhcnQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jlc2l6ZVN0YXJ0SGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydyZXNpemVFbmRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemVFbmQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jlc2l6ZUVuZEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snaW5saW5lVG9vbGJhck9wZW5IYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdpbmxpbmVUb29sYmFyT3BlbicsIHRoYXQuZXZlbnRIYW5kbGVyc1snaW5saW5lVG9vbGJhck9wZW5IYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2lubGluZVRvb2xiYXJPcGVuaW5nSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignaW5saW5lVG9vbGJhck9wZW5pbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2lubGluZVRvb2xiYXJPcGVuaW5nSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydpbmxpbmVUb29sYmFyQ2xvc2VIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdpbmxpbmVUb29sYmFyQ2xvc2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2lubGluZVRvb2xiYXJDbG9zZUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snaW5saW5lVG9vbGJhckNsb3NpbmdIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdpbmxpbmVUb29sYmFyQ2xvc2luZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snaW5saW5lVG9vbGJhckNsb3NpbmdIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2Ryb3BEb3duVG9vbGJhck9wZW5IYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wRG93blRvb2xiYXJPcGVuJywgdGhhdC5ldmVudEhhbmRsZXJzWydkcm9wRG93blRvb2xiYXJPcGVuSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydkcm9wRG93blRvb2xiYXJPcGVuaW5nSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcERvd25Ub29sYmFyT3BlbmluZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snZHJvcERvd25Ub29sYmFyT3BlbmluZ0hhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snZHJvcERvd25Ub29sYmFyQ2xvc2VIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wRG93blRvb2xiYXJDbG9zZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snZHJvcERvd25Ub29sYmFyQ2xvc2VIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2Ryb3BEb3duVG9vbGJhckNsb3NpbmdIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wRG93blRvb2xiYXJDbG9zaW5nJywgdGhhdC5ldmVudEhhbmRsZXJzWydkcm9wRG93blRvb2xiYXJDbG9zaW5nSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydkaWFsb2dPcGVuSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZGlhbG9nT3BlbicsIHRoYXQuZXZlbnRIYW5kbGVyc1snZGlhbG9nT3BlbkhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snZGlhbG9nT3BlbmluZ0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RpYWxvZ09wZW5pbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2RpYWxvZ09wZW5pbmdIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2RpYWxvZ0Nsb3NlSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZGlhbG9nQ2xvc2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2RpYWxvZ0Nsb3NlSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydkaWFsb2dDbG9zaW5nSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZGlhbG9nQ2xvc2luZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snZGlhbG9nQ2xvc2luZ0hhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snaW1hZ2VVcGxvYWRTdWNjZXNzSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignaW1hZ2VVcGxvYWRTdWNjZXNzJywgdGhhdC5ldmVudEhhbmRsZXJzWydpbWFnZVVwbG9hZFN1Y2Nlc3NIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2ltYWdlVXBsb2FkRmFpbGVkSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignaW1hZ2VVcGxvYWRGYWlsZWQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2ltYWdlVXBsb2FkRmFpbGVkSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWyd0b29iYXJJdGVtQ2xpY2tIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b29iYXJJdGVtQ2xpY2snLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Rvb2Jhckl0ZW1DbGlja0hhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snbWVzc2FnZUNsb3NlSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZUNsb3NlJywgdGhhdC5ldmVudEhhbmRsZXJzWydtZXNzYWdlQ2xvc2VIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ21lc3NhZ2VPcGVuSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZU9wZW4nLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ21lc3NhZ2VPcGVuSGFuZGxlciddKTtcblx0XHR9XG5cblx0fVxufVxuIl19