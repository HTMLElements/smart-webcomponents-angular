
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.editor';

import * as pkg from './../common/marked.min.js';
window.marked = pkg.default;
import { __decorate, __awaiter } from 'tslib';
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

let EditorComponent = class EditorComponent extends BaseElement {
    constructor(ref) {
        super(ref);
        this.eventHandlers = [];
        /** @description This event is triggered on blur if the content is changed.
        *  @param event. The custom event. 	*/
        this.onChange = new EventEmitter();
        /** @description This event is triggered before a Toolbar action is started. The event can be canceled via event.preventDefault().
        *  @param event. The custom event. 	*/
        this.onActionStart = new EventEmitter();
        /** @description This event is triggered when a Toolbar action has ended.
        *  @param event. The custom event. 	*/
        this.onActionEnd = new EventEmitter();
        /** @description This event is triggered when a Context menu item has been clicked.
        *  @param event. The custom event. 	*/
        this.onContextMenuItemClick = new EventEmitter();
        /** @description This event is triggered when the Context Menu is opened.
        *  @param event. The custom event. 	*/
        this.onContextMenuOpen = new EventEmitter();
        /** @description This event is triggered when the Context Menu is opening. The event can be canceled via event.preventDefault().
        *  @param event. The custom event. 	*/
        this.onContextMenuOpening = new EventEmitter();
        /** @description This event is triggered when the Context Menu is closed.
        *  @param event. The custom event. 	*/
        this.onContextMenuClose = new EventEmitter();
        /** @description This event is triggered when the Context Menu is closing. The event can be canceled via event.preventDefault().
        *  @param event. The custom event. 	*/
        this.onContextMenuClosing = new EventEmitter();
        /** @description This event is triggered when an image/table resizing has started.
        *  @param event. The custom event. 	*/
        this.onResizeStart = new EventEmitter();
        /** @description This event is triggered when an image/table resizing has ended.
        *  @param event. The custom event. 	*/
        this.onResizeEnd = new EventEmitter();
        /** @description This event is triggered when the inline Toolbar is opened.
        *  @param event. The custom event. 	*/
        this.onInlineToolbarOpen = new EventEmitter();
        /** @description This event is triggered when the inline Toolbar is closed.
        *  @param event. The custom event. 	*/
        this.onInlineToolbarClose = new EventEmitter();
        /** @description This event is triggered when the Drop Down Toolbar is opened.
        *  @param event. The custom event. 	*/
        this.onDropDownToolbarOpen = new EventEmitter();
        /** @description This event is triggered when the Drop Down Toolbar is closed.
        *  @param event. The custom event. 	*/
        this.onDropDownToolbarClose = new EventEmitter();
        /** @description This event is triggered the Dialog Window is opened.
        *  @param event. The custom event. 	*/
        this.onDialogOpen = new EventEmitter();
        /** @description This event is triggered before the Dialog Window is opened. The event can be prevented via event.preventDefault().
        *  @param event. The custom event. 	*/
        this.onDialogOpening = new EventEmitter();
        /** @description This event is triggered when the Dialog Window is closed.
        *  @param event. The custom event. 	*/
        this.onDialogClose = new EventEmitter();
        /** @description This event is triggered before the Dialog Window is closed. The event can be prevented via event.preventDefault().
        *  @param event. The custom event. 	*/
        this.onDialogClosing = new EventEmitter();
        /** @description This event is triggered when the uploading of an image is successful.
        *  @param event. The custom event. 	*/
        this.onImageUploadSuccess = new EventEmitter();
        /** @description This event is triggered when the uploading of an image is unsuccessful.
        *  @param event. The custom event. 	*/
        this.onImageUploadFailed = new EventEmitter();
        /** @description This event is triggered when a Toolbar item is clicked.
        *  @param event. The custom event. 	*/
        this.onToobarItemClick = new EventEmitter();
        /** @description This event is triggered when a message is closed.
        *  @param event. The custom event. 	*/
        this.onMessageClose = new EventEmitter();
        /** @description This event is triggered when a message is opened.
        *  @param event. The custom event. 	*/
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
    /** @description The interval that determines the interval to automatically save the state of the Editor when the autoSave property is set. */
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
    /** @description Determines whether Editor's content is required ot not. If set and the Editor's content is empty, a notification will appear to notify that the Editor cannot be empty. */
    get required() {
        return this.nativeElement ? this.nativeElement.required : undefined;
    }
    set required(value) {
        this.nativeElement ? this.nativeElement.required = value : undefined;
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
    /** @description Determines the Toolbar items list. Each item can be string pointing to the name of the item or an object that defines a custom item or adds aditional settings to an item. The name of the items are case insensitive. An object definition should contain a name attribute that refers to the name of the item when modifing an existing toolbar item. The name attribute determines the action of the item. If set to 'custom' it is possible to create a custom toolbar item. If name attribute is not set or not valid it is treated as a separator, no a toolbar item. The following items are supported by default by the Editor: SourceCode - shows the HTML/Preview Panel by hiding the input panel. Item type - 'Toggle button'.SplitMode - shows both input and HTML/Preview Panel by splitting the Editor content in two sections. Item type - 'Toggle button'FullScreen - fits the viewport with the Editor by expanding it over the page content. Item type - 'Toggle button'.Alignment - aligns the selected content. Item type - 'Drop down'.FontName - changes the font family of the selected content. Item type - 'drop-down'.FontSize - changes the font size of the selected content. Item type - 'drop-down'.Formats - changes the format of the current selection. Itme type - 'drop-down'.TableRows - allows to insert/remove a row into a selected table element. Item type - 'drop-down'.TableColumns - allows to insert/remove a column into a selected table element. Itme type - 'drop-down'.TableVAlign - sets the vertical alignment of a selected table cell. Item type - 'drop-down'.TableStyle - sets additional styling to a selected table inside the Editor. Item type - 'drop-down'.BackgroundColor - changes the background color of the current selection. Item type - 'color-input'.FontColor - changes the font color of the current selection. Item type = 'color-input'.Bold - sets the currently selected text as bold or not. Item type - 'button'.Italic - sets the currently selected text as italic. Item type - 'button'. Underline - sets the currently selected text as underlined. Itme type - 'button'.Strikethrough - set the currently selected text as strikethrough. Item type - 'button'.Delete - deletes the current selection. Item type - 'button'.Undo - undoes the last operation. Item type - 'button'.Redo - redoes the previous operation. Item type - 'button'.Indent - indents the current selection once. Item type - 'button'.Outdent - outdents the current selection once. Item type - 'button'.OpenLink - triggers a hyperlink. Item type - 'button'.EditLink - creates/edits the selected hyperlink. Item type - 'button'.CreateLink - creates/edits the selected hyperlink. Item type - 'button'.RemoveLink - removes the currently selected hyperlink. Item type - 'button'.Hyperlink - same as createLink, triggers a Dialog Window for link creation. Item type - 'button'.Cut - Cuts the currently selected text. Item type - 'button'.Copy - copies the currently selected text. Item type - 'button'Paste - pastes the currenly copied/cut text from the Clipboard. Item type = 'button' or 'drop-down' when advanced attribute is set to 'true'.Image - triggers a Dialog Window to insert/edit an image. Item type - 'button'.LowerCase - changes the current selection to lower case. Item type - 'button'.UpperCase - changes the current selection to upper case. Item type - 'button'.Print - opens the browser print preview window. Item type - 'button'.Caption - insert/remove a caption when a table is selected. Item type - 'button'.ClearFormat - removes the formatting of the currntly selected text. Item type - 'button'.Table - triggers a Dialog Window to insert a table. Item type - 'button'.TableHeader - insert/remove a header row to the currently selected table. Item type - 'button'.OrderedList - insert/remove an order list. Item type = 'button'.UnorderedList - insert/remove an unordered list. Item type - 'button'.Subscript - changes the currently selected text to subscript. Item type - 'button'.Superscript - changes the currently selected text to superscript. Item type - 'button'.FindAndReplace - opens a dialog that allows to find and replace text inside the Editor's content section. Item type - 'button'.  The inlineToolbarItems attribute is applicable only to the following items: 'table', 'image', 'hyperlink'. It accepts the same type of value as toolbarItems property but the toolbar items will be placed insinde the Inline Toolbar instead. */
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
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
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
        that.eventHandlers['inlineToolbarCloseHandler'] = (event) => { that.onInlineToolbarClose.emit(event); };
        that.nativeElement.addEventListener('inlineToolbarClose', that.eventHandlers['inlineToolbarCloseHandler']);
        that.eventHandlers['dropDownToolbarOpenHandler'] = (event) => { that.onDropDownToolbarOpen.emit(event); };
        that.nativeElement.addEventListener('dropDownToolbarOpen', that.eventHandlers['dropDownToolbarOpenHandler']);
        that.eventHandlers['dropDownToolbarCloseHandler'] = (event) => { that.onDropDownToolbarClose.emit(event); };
        that.nativeElement.addEventListener('dropDownToolbarClose', that.eventHandlers['dropDownToolbarCloseHandler']);
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
        if (that.eventHandlers['inlineToolbarCloseHandler']) {
            that.nativeElement.removeEventListener('inlineToolbarClose', that.eventHandlers['inlineToolbarCloseHandler']);
        }
        if (that.eventHandlers['dropDownToolbarOpenHandler']) {
            that.nativeElement.removeEventListener('dropDownToolbarOpen', that.eventHandlers['dropDownToolbarOpenHandler']);
        }
        if (that.eventHandlers['dropDownToolbarCloseHandler']) {
            that.nativeElement.removeEventListener('dropDownToolbarClose', that.eventHandlers['dropDownToolbarCloseHandler']);
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
__decorate([
    Input()
], EditorComponent.prototype, "animation", null);
__decorate([
    Input()
], EditorComponent.prototype, "autoLoad", null);
__decorate([
    Input()
], EditorComponent.prototype, "autoSave", null);
__decorate([
    Input()
], EditorComponent.prototype, "autoSaveInterval", null);
__decorate([
    Input()
], EditorComponent.prototype, "charCountFormatFunction", null);
__decorate([
    Input()
], EditorComponent.prototype, "contentFiltering", null);
__decorate([
    Input()
], EditorComponent.prototype, "contextMenu", null);
__decorate([
    Input()
], EditorComponent.prototype, "contextMenuDataSource", null);
__decorate([
    Input()
], EditorComponent.prototype, "dataExport", null);
__decorate([
    Input()
], EditorComponent.prototype, "disabled", null);
__decorate([
    Input()
], EditorComponent.prototype, "disableEditing", null);
__decorate([
    Input()
], EditorComponent.prototype, "disableSearchBar", null);
__decorate([
    Input()
], EditorComponent.prototype, "editMode", null);
__decorate([
    Input()
], EditorComponent.prototype, "enableHtmlEncode", null);
__decorate([
    Input()
], EditorComponent.prototype, "enableTabKey", null);
__decorate([
    Input()
], EditorComponent.prototype, "findAndReplaceTimeout", null);
__decorate([
    Input()
], EditorComponent.prototype, "hideToolbar", null);
__decorate([
    Input()
], EditorComponent.prototype, "hideInlineToolbar", null);
__decorate([
    Input()
], EditorComponent.prototype, "innerHTML", null);
__decorate([
    Input()
], EditorComponent.prototype, "inlineToolbarOffset", null);
__decorate([
    Input()
], EditorComponent.prototype, "iframeSettings", null);
__decorate([
    Input()
], EditorComponent.prototype, "locale", null);
__decorate([
    Input()
], EditorComponent.prototype, "maxCharCount", null);
__decorate([
    Input()
], EditorComponent.prototype, "messages", null);
__decorate([
    Input()
], EditorComponent.prototype, "pasteFormat", null);
__decorate([
    Input()
], EditorComponent.prototype, "placeholder", null);
__decorate([
    Input()
], EditorComponent.prototype, "required", null);
__decorate([
    Input()
], EditorComponent.prototype, "sanitized", null);
__decorate([
    Input()
], EditorComponent.prototype, "showCharCount", null);
__decorate([
    Input()
], EditorComponent.prototype, "splitModeRefreshTimeout", null);
__decorate([
    Input()
], EditorComponent.prototype, "theme", null);
__decorate([
    Input()
], EditorComponent.prototype, "toolbarItems", null);
__decorate([
    Input()
], EditorComponent.prototype, "toolbarMode", null);
__decorate([
    Input()
], EditorComponent.prototype, "toolbarRibbonConfig", null);
__decorate([
    Input()
], EditorComponent.prototype, "toolbarViewMode", null);
__decorate([
    Input()
], EditorComponent.prototype, "toolbarSticky", null);
__decorate([
    Input()
], EditorComponent.prototype, "unfocusable", null);
__decorate([
    Input()
], EditorComponent.prototype, "value", null);
__decorate([
    Output()
], EditorComponent.prototype, "onChange", void 0);
__decorate([
    Output()
], EditorComponent.prototype, "onActionStart", void 0);
__decorate([
    Output()
], EditorComponent.prototype, "onActionEnd", void 0);
__decorate([
    Output()
], EditorComponent.prototype, "onContextMenuItemClick", void 0);
__decorate([
    Output()
], EditorComponent.prototype, "onContextMenuOpen", void 0);
__decorate([
    Output()
], EditorComponent.prototype, "onContextMenuOpening", void 0);
__decorate([
    Output()
], EditorComponent.prototype, "onContextMenuClose", void 0);
__decorate([
    Output()
], EditorComponent.prototype, "onContextMenuClosing", void 0);
__decorate([
    Output()
], EditorComponent.prototype, "onResizeStart", void 0);
__decorate([
    Output()
], EditorComponent.prototype, "onResizeEnd", void 0);
__decorate([
    Output()
], EditorComponent.prototype, "onInlineToolbarOpen", void 0);
__decorate([
    Output()
], EditorComponent.prototype, "onInlineToolbarClose", void 0);
__decorate([
    Output()
], EditorComponent.prototype, "onDropDownToolbarOpen", void 0);
__decorate([
    Output()
], EditorComponent.prototype, "onDropDownToolbarClose", void 0);
__decorate([
    Output()
], EditorComponent.prototype, "onDialogOpen", void 0);
__decorate([
    Output()
], EditorComponent.prototype, "onDialogOpening", void 0);
__decorate([
    Output()
], EditorComponent.prototype, "onDialogClose", void 0);
__decorate([
    Output()
], EditorComponent.prototype, "onDialogClosing", void 0);
__decorate([
    Output()
], EditorComponent.prototype, "onImageUploadSuccess", void 0);
__decorate([
    Output()
], EditorComponent.prototype, "onImageUploadFailed", void 0);
__decorate([
    Output()
], EditorComponent.prototype, "onToobarItemClick", void 0);
__decorate([
    Output()
], EditorComponent.prototype, "onMessageClose", void 0);
__decorate([
    Output()
], EditorComponent.prototype, "onMessageOpen", void 0);
EditorComponent = __decorate([
    Directive({
        selector: 'smart-editor, [smart-editor]'
    })
], EditorComponent);

let EditorModule = class EditorModule {
};
EditorModule = __decorate([
    NgModule({
        declarations: [EditorComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        exports: [EditorComponent]
    })
], EditorModule);

/**
 * Generated bundle index. Do not edit.
 */

export { EditorComponent, EditorModule, Smart, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-editor.js.map
