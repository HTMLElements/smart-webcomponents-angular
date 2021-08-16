import * as tslib_1 from "tslib";
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Smart } from './smart.element';
var EditorComponent = /** @class */ (function (_super) {
    tslib_1.__extends(EditorComponent, _super);
    function EditorComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        /** @description This event is triggered on blur if the content is changed.
        *  @param event. The custom event. 	*/
        _this.onChange = new EventEmitter();
        /** @description This event is triggered before a Toolbar action is started. The event can be canceled via event.preventDefault().
        *  @param event. The custom event. 	*/
        _this.onActionStart = new EventEmitter();
        /** @description This event is triggered when a Toolbar action has ended.
        *  @param event. The custom event. 	*/
        _this.onActionEnd = new EventEmitter();
        /** @description This event is triggered when a Context menu item has been clicked.
        *  @param event. The custom event. 	*/
        _this.onContextMenuItemClick = new EventEmitter();
        /** @description This event is triggered when the Context Menu is opened.
        *  @param event. The custom event. 	*/
        _this.onContextMenuOpen = new EventEmitter();
        /** @description This event is triggered when the Context Menu is opening. The event can be canceled via event.preventDefault().
        *  @param event. The custom event. 	*/
        _this.onContextMenuOpening = new EventEmitter();
        /** @description This event is triggered when the Context Menu is closed.
        *  @param event. The custom event. 	*/
        _this.onContextMenuClose = new EventEmitter();
        /** @description This event is triggered when the Context Menu is closing. The event can be canceled via event.preventDefault().
        *  @param event. The custom event. 	*/
        _this.onContextMenuClosing = new EventEmitter();
        /** @description This event is triggered when an image/table resizing has started.
        *  @param event. The custom event. 	*/
        _this.onResizeStart = new EventEmitter();
        /** @description This event is triggered when an image/table resizing has ended.
        *  @param event. The custom event. 	*/
        _this.onResizeEnd = new EventEmitter();
        /** @description This event is triggered when the inline Toolbar is opened.
        *  @param event. The custom event. 	*/
        _this.onInlineToolbarOpen = new EventEmitter();
        /** @description This event is triggered when the inline Toolbar is closed.
        *  @param event. The custom event. 	*/
        _this.onInlineToolbarClose = new EventEmitter();
        /** @description This event is triggered when the Drop Down Toolbar is opened.
        *  @param event. The custom event. 	*/
        _this.onDropDownToolbarOpen = new EventEmitter();
        /** @description This event is triggered when the Drop Down Toolbar is closed.
        *  @param event. The custom event. 	*/
        _this.onDropDownToolbarClose = new EventEmitter();
        /** @description This event is triggered the Dialog Window is opened.
        *  @param event. The custom event. 	*/
        _this.onDialogOpen = new EventEmitter();
        /** @description This event is triggered before the Dialog Window is opened. The event can be prevented via event.preventDefault().
        *  @param event. The custom event. 	*/
        _this.onDialogOpening = new EventEmitter();
        /** @description This event is triggered when the Dialog Window is closed.
        *  @param event. The custom event. 	*/
        _this.onDialogClose = new EventEmitter();
        /** @description This event is triggered before the Dialog Window is closed. The event can be prevented via event.preventDefault().
        *  @param event. The custom event. 	*/
        _this.onDialogClosing = new EventEmitter();
        /** @description This event is triggered when the uploading of an image is successful.
        *  @param event. The custom event. 	*/
        _this.onImageUploadSuccess = new EventEmitter();
        /** @description This event is triggered when the uploading of an image is unsuccessful.
        *  @param event. The custom event. 	*/
        _this.onImageUploadFailed = new EventEmitter();
        /** @description This event is triggered when a Toolbar item is clicked.
        *  @param event. The custom event. 	*/
        _this.onToobarItemClick = new EventEmitter();
        /** @description This event is triggered when a message is closed.
        *  @param event. The custom event. 	*/
        _this.onMessageClose = new EventEmitter();
        /** @description This event is triggered when a message is opened.
        *  @param event. The custom event. 	*/
        _this.onMessageOpen = new EventEmitter();
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    EditorComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('smart-editor');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(EditorComponent.prototype, "animation", {
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
    Object.defineProperty(EditorComponent.prototype, "autoLoad", {
        /** @description Automatically loads the last saved state of the editor (from local storage) on element initialization. An id must be provided in order to load a previously saved state. */
        get: function () {
            return this.nativeElement ? this.nativeElement.autoLoad : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.autoLoad = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorComponent.prototype, "autoSave", {
        /** @description Automatically saves the current content of the editor. Saving happens at time intervas determined by the autoSaveInterval property while the element on focus. An id must be provided to the element in order to store the state. */
        get: function () {
            return this.nativeElement ? this.nativeElement.autoSave : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.autoSave = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorComponent.prototype, "autoSaveInterval", {
        /** @description The interval that determines the interval to automatically save the state of the Editor when the autoSave property is set. */
        get: function () {
            return this.nativeElement ? this.nativeElement.autoSaveInterval : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.autoSaveInterval = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorComponent.prototype, "charCountFormatFunction", {
        /** @description A formatting function for the char counter. Takes two arguments: chars - the current number of characters inside the Editor.maxCharCount - the maximum number of characters inside the Editor. */
        get: function () {
            return this.nativeElement ? this.nativeElement.charCountFormatFunction : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.charCountFormatFunction = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorComponent.prototype, "contentFiltering", {
        /** @description Determines the content filtering settings. */
        get: function () {
            return this.nativeElement ? this.nativeElement.contentFiltering : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.contentFiltering = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorComponent.prototype, "contextMenu", {
        /** @description Determines the context menu for the Editor. The context menu is triggered when the user right clicks on the content area of the Editor. */
        get: function () {
            return this.nativeElement ? this.nativeElement.contextMenu : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.contextMenu = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorComponent.prototype, "contextMenuDataSource", {
        /** @description Allows to customize default the context menu of the Editor. The property accepts an array of items which can be strings that represent the value of the item, or objects of the following format: { label: string, value: string }, where the label will be displayed and the value will be action value for the item. The property also accepts a function that must return an array of items with the following format function (target: HTMLElement, type: string, defaultItems: string[]) { return defaultItems } and the following arguments: target - the element that is the target of the context menu.type - the type of context menu ( whether it's a table, image, link or other)defaultItems - an array of strings which represent the default items for the context menu. */
        get: function () {
            return this.nativeElement ? this.nativeElement.contextMenuDataSource : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.contextMenuDataSource = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorComponent.prototype, "dataExport", {
        /** @description Sets the Editor's Data Export options. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dataExport : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dataExport = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorComponent.prototype, "disabled", {
        /** @description Enables or disables the Editor. */
        get: function () {
            return this.nativeElement ? this.nativeElement.disabled : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disabled = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorComponent.prototype, "disableEditing", {
        /** @description Disables content editing inside Editor. */
        get: function () {
            return this.nativeElement ? this.nativeElement.disableEditing : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disableEditing = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorComponent.prototype, "disableSearchBar", {
        /** @description Disables the Quick Search Bar. */
        get: function () {
            return this.nativeElement ? this.nativeElement.disableSearchBar : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disableSearchBar = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorComponent.prototype, "editMode", {
        /** @description Determines the edit mode for the Editor. By default the editor's content accepts and parses HTML. However if set to 'markdown' the Editor can be used as a full time Markdown Editor by parsing the makrdown to HTML in preview mode. */
        get: function () {
            return this.nativeElement ? this.nativeElement.editMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.editMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorComponent.prototype, "enableHtmlEncode", {
        /** @description Determines whether the value returned from getHTML method and Source Code view are encoded or not. */
        get: function () {
            return this.nativeElement ? this.nativeElement.enableHtmlEncode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.enableHtmlEncode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorComponent.prototype, "enableTabKey", {
        /** @description Determines whether the Tab key can insert tab chars inside the Editor or change focus (default) */
        get: function () {
            return this.nativeElement ? this.nativeElement.enableTabKey : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.enableTabKey = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorComponent.prototype, "findAndReplaceTimeout", {
        /** @description Determines the time interval between results for the find and replace and search bar features. */
        get: function () {
            return this.nativeElement ? this.nativeElement.findAndReplaceTimeout : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.findAndReplaceTimeout = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorComponent.prototype, "hideToolbar", {
        /** @description Determines whether the Toolbar is hidden or not. */
        get: function () {
            return this.nativeElement ? this.nativeElement.hideToolbar : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.hideToolbar = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorComponent.prototype, "hideInlineToolbar", {
        /** @description Determines whether the Inline Toolbar is hidden or not. */
        get: function () {
            return this.nativeElement ? this.nativeElement.hideInlineToolbar : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.hideInlineToolbar = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorComponent.prototype, "innerHTML", {
        /** @description Sets the content of the Editor as HTML. Allows to insert text and HTML. */
        get: function () {
            return this.nativeElement ? this.nativeElement.innerHTML : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.innerHTML = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorComponent.prototype, "inlineToolbarOffset", {
        /** @description Defines an offset(x,y) for the Inline Toolbar positioning on the page. */
        get: function () {
            return this.nativeElement ? this.nativeElement.inlineToolbarOffset : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.inlineToolbarOffset = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorComponent.prototype, "iframeSettings", {
        /** @description Determines the iframe settings of the Editor. When enabled the contents of the Editor are placed inside an iframe, isolated in a separate dom. The element allows to insert external resources into the iframe if needed. */
        get: function () {
            return this.nativeElement ? this.nativeElement.iframeSettings : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.iframeSettings = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorComponent.prototype, "locale", {
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
    Object.defineProperty(EditorComponent.prototype, "maxCharCount", {
        /** @description Sets a limit on the number of chars inside the Editor.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.maxCharCount : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.maxCharCount = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorComponent.prototype, "messages", {
        /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property language.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.messages : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.messages = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorComponent.prototype, "pasteFormat", {
        /** @description Determines the format of the content that will be pasted inside the Editor. */
        get: function () {
            return this.nativeElement ? this.nativeElement.pasteFormat : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.pasteFormat = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorComponent.prototype, "placeholder", {
        /** @description Determines the placeholder that will be shown when there's no content inside the Editor. */
        get: function () {
            return this.nativeElement ? this.nativeElement.placeholder : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.placeholder = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorComponent.prototype, "required", {
        /** @description Determines whether Editor's content is required ot not. If set and the Editor's content is empty, a notification will appear to notify that the Editor cannot be empty. */
        get: function () {
            return this.nativeElement ? this.nativeElement.required : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.required = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorComponent.prototype, "sanitized", {
        /** @description Determines whether the value is sanitized from XSS content or not. When enabled scripts and other XSS vulnerabilities are not allowed to exist inside the Editor's as HTML content. */
        get: function () {
            return this.nativeElement ? this.nativeElement.sanitized : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.sanitized = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorComponent.prototype, "showCharCount", {
        /** @description Determines whether the char counter is visible or not. When enabled it is displayed in the bottom right corner. If maxCharCount is set and the content characters are equal or more than 70% of the maximum char count the counter is colored in order to warn the user. If the char count is equal or more than 90% the counter is again colored with a different warning color to indicate that the counter is near maximum. When maximum is reached, text input is not allowed. */
        get: function () {
            return this.nativeElement ? this.nativeElement.showCharCount : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.showCharCount = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorComponent.prototype, "splitModeRefreshTimeout", {
        /** @description Determines the refresh interval for the Source Code/Preview Panel when Split Mode is enabled.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.splitModeRefreshTimeout : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.splitModeRefreshTimeout = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorComponent.prototype, "theme", {
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
    Object.defineProperty(EditorComponent.prototype, "toolbarItems", {
        /** @description Determines the Toolbar items list. Each item can be string pointing to the name of the item or an object that defines a custom item or adds aditional settings to an item. The name of the items are case insensitive. An object definition should contain a name attribute that refers to the name of the item when modifing an existing toolbar item. The name attribute determines the action of the item. If set to 'custom' it is possible to create a custom toolbar item. If name attribute is not set or not valid it is treated as a separator, no a toolbar item. The following items are supported by default by the Editor: SourceCode - shows the HTML/Preview Panel by hiding the input panel. Item type - 'Toggle button'.SplitMode - shows both input and HTML/Preview Panel by splitting the Editor content in two sections. Item type - 'Toggle button'FullScreen - fits the viewport with the Editor by expanding it over the page content. Item type - 'Toggle button'.Alignment - aligns the selected content. Item type - 'Drop down'.FontName - changes the font family of the selected content. Item type - 'drop-down'.FontSize - changes the font size of the selected content. Item type - 'drop-down'.Formats - changes the format of the current selection. Itme type - 'drop-down'.TableRows - allows to insert/remove a row into a selected table element. Item type - 'drop-down'.TableColumns - allows to insert/remove a column into a selected table element. Itme type - 'drop-down'.TableVAlign - sets the vertical alignment of a selected table cell. Item type - 'drop-down'.TableStyle - sets additional styling to a selected table inside the Editor. Item type - 'drop-down'.BackgroundColor - changes the background color of the current selection. Item type - 'color-input'.FontColor - changes the font color of the current selection. Item type = 'color-input'.Bold - sets the currently selected text as bold or not. Item type - 'button'.Italic - sets the currently selected text as italic. Item type - 'button'. Underline - sets the currently selected text as underlined. Itme type - 'button'.Strikethrough - set the currently selected text as strikethrough. Item type - 'button'.Delete - deletes the current selection. Item type - 'button'.Undo - undoes the last operation. Item type - 'button'.Redo - redoes the previous operation. Item type - 'button'.Indent - indents the current selection once. Item type - 'button'.Outdent - outdents the current selection once. Item type - 'button'.OpenLink - triggers a hyperlink. Item type - 'button'.EditLink - creates/edits the selected hyperlink. Item type - 'button'.CreateLink - creates/edits the selected hyperlink. Item type - 'button'.RemoveLink - removes the currently selected hyperlink. Item type - 'button'.Hyperlink - same as createLink, triggers a Dialog Window for link creation. Item type - 'button'.Cut - Cuts the currently selected text. Item type - 'button'.Copy - copies the currently selected text. Item type - 'button'Paste - pastes the currenly copied/cut text from the Clipboard. Item type = 'button' or 'drop-down' when advanced attribute is set to 'true'.Image - triggers a Dialog Window to insert/edit an image. Item type - 'button'.LowerCase - changes the current selection to lower case. Item type - 'button'.UpperCase - changes the current selection to upper case. Item type - 'button'.Print - opens the browser print preview window. Item type - 'button'.Caption - insert/remove a caption when a table is selected. Item type - 'button'.ClearFormat - removes the formatting of the currntly selected text. Item type - 'button'.Table - triggers a Dialog Window to insert a table. Item type - 'button'.TableHeader - insert/remove a header row to the currently selected table. Item type - 'button'.OrderedList - insert/remove an order list. Item type = 'button'.UnorderedList - insert/remove an unordered list. Item type - 'button'.Subscript - changes the currently selected text to subscript. Item type - 'button'.Superscript - changes the currently selected text to superscript. Item type - 'button'.FindAndReplace - opens a dialog that allows to find and replace text inside the Editor's content section. Item type - 'button'.  The inlineToolbarItems attribute is applicable only to the following items: 'table', 'image', 'hyperlink'. It accepts the same type of value as toolbarItems property but the toolbar items will be placed insinde the Inline Toolbar instead. */
        get: function () {
            return this.nativeElement ? this.nativeElement.toolbarItems : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.toolbarItems = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorComponent.prototype, "toolbarMode", {
        /** @description Determines the toolbar mode of the Editor. The main toolbar of the Editor can appear as a Ribbon or as a Menu. */
        get: function () {
            return this.nativeElement ? this.nativeElement.toolbarMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.toolbarMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorComponent.prototype, "toolbarRibbonConfig", {
        /** @description Allows to configure the SingleLineRibbon appearance by changing the order and items of the groups. */
        get: function () {
            return this.nativeElement ? this.nativeElement.toolbarRibbonConfig : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.toolbarRibbonConfig = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorComponent.prototype, "toolbarViewMode", {
        /** @description Determines the format of the content that will be pasted inside the Editor. */
        get: function () {
            return this.nativeElement ? this.nativeElement.toolbarViewMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.toolbarViewMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorComponent.prototype, "toolbarSticky", {
        /** @description Sticks the Toolbar to the top of the window and stays there while scrolling. */
        get: function () {
            return this.nativeElement ? this.nativeElement.toolbarSticky : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.toolbarSticky = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorComponent.prototype, "unfocusable", {
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
    Object.defineProperty(EditorComponent.prototype, "value", {
        /** @description Sets or gets the value of the Editor. */
        get: function () {
            return this.nativeElement ? this.nativeElement.value : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.value = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /** @description Blurs the content of the Editor.
    */
    EditorComponent.prototype.blur = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.blur();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.blur();
            });
        }
    };
    /** @description Clears the content of the Editor.
    */
    EditorComponent.prototype.clearContent = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearContent();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.clearContent();
            });
        }
    };
    /** @description Collapse the Toolbar if the toolbarViewMode is set to 'toggle'.
    */
    EditorComponent.prototype.collapseToolbar = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapseToolbar();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.collapseToolbar();
            });
        }
    };
    /** @description Disables a Toolbar item.
    * @param {string} itemName. The name of the toolbar item to disable.
    */
    EditorComponent.prototype.disableToolbarItem = function (itemName) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.disableToolbarItem(itemName);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.disableToolbarItem(itemName);
            });
        }
    };
    /** @description Expand the Toolbar if the toolbarViewMode is set to 'toggle'.
    */
    EditorComponent.prototype.expandToolbar = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.expandToolbar();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.expandToolbar();
            });
        }
    };
    /** @description Enables a previously disabled Toolbar item.
    * @param {string} itemName. The name of the toolbar item to enable.
    */
    EditorComponent.prototype.enableToolbarItem = function (itemName) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.enableToolbarItem(itemName);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.enableToolbarItem(itemName);
            });
        }
    };
    /** @description Executes a command via the native execCommand method. The method returns true or false depending on whether the execution was successful or not. The following list of commands can be eexecuted: bold - makes the currently selected content bold. Example: editor.executeCommand('bold');italic - makes the currently selected content italic. Example: editor.executeCommand('italic');undelined - makes the currently selected content underlined. Example: editor.executeCommand('underline');strikeThrough - applies a single line strike through formatting to the currently selected content. Example: editor.executeCommand('strikeThrough');superscript - sets the selected content as superscript. Example: editor.executeCommand('superscript');subscript - sets the selected content as superscript. Example: editor.executeCommand('subscript');uppercase - changes the case of the current selection to upper. Example: editor.executeCommand('uppercase');lowercase - changes the case of the current selection to lower. Example: editor.executeCommand('lowercase');foreColor - changes the font color of the current content selection. Example: editor.executeCommand('foreColor', '#000000');fontName - changes the font name for the selected content. Example: editor.executeCommand('fontName', 'Arial');fontSize - changes the font size of the currently selected content. Example: editor.executeCommand('fontSize', '15px');hiliteColor - changes the background color of current selection. Example: editor.executeCommand('hiliteColor', '#000000');justifyCenter - aligns the content to the center. Example: editor.executeCommand('justifyCenter');justifyFull - aligns the content to be fully justified. Example: editor.executeCommand('justifyFull');justifyLeft - aligns the content to the left. Example: editor.executeCommand('justifyLeft');justifyRight - aligns the content to the right. Example: editor.executeCommand('justifyRight');undo - allows to undo the previous action. Example: editor.executeCommand('undo');redo - allows to redo the previous actions. Example: editor.executeCommand('redo');createLink - creates a hyperlink in the content section of the Editor. Example: editor.executeCommand('createLink', { text: 'Links', url: 'http://', title : 'Link' });indent - indents the content with one level. Example: editor.executeCommand('indent');outdent - outdents the content with one level. Example: editor.executeCommand('outdent');insertHTML - insert an HTML content as string at the current cursor location. Example: editor.executeCommand('insertHTML', 'Text');insertOrderedList - inserts a new numbered list item. Example: editor.executeCommand('insertOrderedList');insertUnorderedList - inserts a new bulleted list item. Example: editor.executeCommand('insertUnorderedList');removeFormat - removes the formatting styles from currently selected text. Example: editor.executeCommand('removeFormat');insertText - inserts a text at the current cursor location. Example: editor.executeCommand('insertText', 'Some text to insert');insertImage - inserts an image at the current cursor location. Example: editor.executeCommand('insertImage', { url: 'https://www.htmlelements.com/demos/images/carousel-medium-2.jpg'});
    * @param {string} commandName. The name of the command to execute.
    * @param {string | number} value?. The value for the command. Some commands require a value to be passed, others do not.
    * @returns {boolean}
  */
    EditorComponent.prototype.executeCommand = function (commandName, value) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.executeCommand(commandName, value);
                                    resolve(result);
                                });
                            });
                        };
                        return [4 /*yield*/, getResultOnRender()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /** @description Focuses the content of the Editor.
    */
    EditorComponent.prototype.focus = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.focus();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.focus();
            });
        }
    };
    /** @description Returns the number of characters inside the Editor's content.
    * @returns {number}
  */
    EditorComponent.prototype.getCharCount = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getCharCount();
                                    resolve(result);
                                });
                            });
                        };
                        return [4 /*yield*/, getResultOnRender()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /** @description Returns the current selection range. By default the result is an object of type Range, but if the editMode property is set to 'markdown' the returned value is an object indicating the start/end indexes of the current selection.
    * @returns {any}
  */
    EditorComponent.prototype.getSelectionRange = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getSelectionRange();
                                    resolve(result);
                                });
                            });
                        };
                        return [4 /*yield*/, getResultOnRender()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /** @description Returns the content of the Editor as HTML. When editMode is set to 'markdown' the markdown is parsed and returned as HTML.
    * @returns {string}
  */
    EditorComponent.prototype.getHTML = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getHTML();
                                    resolve(result);
                                });
                            });
                        };
                        return [4 /*yield*/, getResultOnRender()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /** @description Returns the content of the Editor as text.
    * @returns {string}
  */
    EditorComponent.prototype.getText = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getText();
                                    resolve(result);
                                });
                            });
                        };
                        return [4 /*yield*/, getResultOnRender()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /** @description Hides a specific message or all messages if no argument is provided.
    * @param {HTMLElement | string | number} item?. Hides a specific message. The argument can be a DOM reference to a specific item, it's index or it's id. If the argument is not provided then all messages will be closed.
    */
    EditorComponent.prototype.hideMessage = function (item) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.hideMessage(item);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.hideMessage(item);
            });
        }
    };
    /** @description Hides the last shown message.
    */
    EditorComponent.prototype.hideLastMessage = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.hideLastMessage();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.hideLastMessage();
            });
        }
    };
    /** @description Shows a custom message inside the Editor.
    * @param {string} message. The text message to be displayed.
    * @param {any} settings?. Additional settings that can be applied to the Toast element that handles the messages. This parameter should contain only valid Toast properties and values.
    * @returns {HTMLElement | undefined}
  */
    EditorComponent.prototype.showMessage = function (message, settings) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.showMessage(message, settings);
                                    resolve(result);
                                });
                            });
                        };
                        return [4 /*yield*/, getResultOnRender()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /** @description Selects the text inside Editor's content.
    */
    EditorComponent.prototype.selectAll = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.selectAll();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.selectAll();
            });
        }
    };
    /** @description Selects a range of text inside the Editor. The method will find the nodes containing the text from the start to the end indexes and will select them as ranges. However, currently only FireFox supports multiple range selection. The rest of the browsers will only select the first node. If the editor is in 'html' editMode then the expected text will be selected regardless of the browser because there's only one node inside the editor.
    * @param {number} startIndex. The start index to select from.
    * @param {number} endIndex. The end index to select to.
    */
    EditorComponent.prototype.selectRange = function (startIndex, endIndex) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.selectRange(startIndex, endIndex);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.selectRange(startIndex, endIndex);
            });
        }
    };
    /** @description Clears the local storage from previously stored states of the Editor with the current id.
    */
    EditorComponent.prototype.clearState = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearState();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.clearState();
            });
        }
    };
    /** @description Saves the current state of the Editor to local storage. Requires an id to be set to the Editor.
    */
    EditorComponent.prototype.saveState = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.saveState();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.saveState();
            });
        }
    };
    /** @description Loads the last stored state of the Editor from local storage. Requires an id to be set to the Editor.
    */
    EditorComponent.prototype.loadState = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.loadState();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.loadState();
            });
        }
    };
    /** @description Sets Editor into Split Mode. In split mode the HTML/Markdown editor and SourceCode/Preview panels are visible.
    * @param {boolean} value?. Determines whether to enter or leave split mode. By default the argument is not passed and the mode is toggled.
    */
    EditorComponent.prototype.splitMode = function (value) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.splitMode(value);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.splitMode(value);
            });
        }
    };
    /** @description Sets Editor into SourceCode/Preview Mode. In this mode the HTML view panel is displayed.
    * @param {boolean} value?. Determines whether to enter or leave split mode. By default the argument is not passed and the mode is toggled.
    */
    EditorComponent.prototype.previewMode = function (value) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.previewMode(value);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.previewMode(value);
            });
        }
    };
    /** @description Sets Editor into Full Screen Mode. If enabled the Editor is positioned above the page content and fills the screen.
    * @param {boolean} value?. Determines whether to enter or leave split mode. By default the argument is not passed and the mode is toggled.
    */
    EditorComponent.prototype.fullScreenMode = function (value) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.fullScreenMode(value);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.fullScreenMode(value);
            });
        }
    };
    /** @description Exports the content of the Editor in the desired format. The currently supported formats are: HTML, Markdown and PDF.
    * @param {string} dataFormat. The expected file format.
    * @param {any} callback?. A callback that is executed before the data is exported. Allows to modify the output.
    */
    EditorComponent.prototype.exportData = function (dataFormat, callback) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.exportData(dataFormat, callback);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.exportData(dataFormat, callback);
            });
        }
    };
    /** @description Imports the content of a file to the Editor. The currently supported formats are: TXT or HTML.
    * @param {any} source. The url to the file or an object that defines settings for the Ajax request like url, timeput, etc. Object format: { url: string, type: string, data: object, timeout: number }
    * @param {any} settings?. Additional settings for the ajax request. Such as loadError function, contentType, etc. Format: { contentType: string, beforeSend: Function, loadError: Function, beforeLoadComplete: Function  }
    */
    EditorComponent.prototype.importData = function (source, settings) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.importData(source, settings);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.importData(source, settings);
            });
        }
    };
    /** @description Opens the Print Preview Panel of the Browser to print Editor's content.
    */
    EditorComponent.prototype.print = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.print();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.print();
            });
        }
    };
    Object.defineProperty(EditorComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    EditorComponent.prototype.ngOnInit = function () {
    };
    EditorComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        this.listen();
    };
    EditorComponent.prototype.ngOnDestroy = function () {
        this.unlisten();
    };
    EditorComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    /** @description Add event listeners. */
    EditorComponent.prototype.listen = function () {
        var that = this;
        that.eventHandlers['changeHandler'] = function (event) { that.onChange.emit(event); };
        that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
        that.eventHandlers['actionStartHandler'] = function (event) { that.onActionStart.emit(event); };
        that.nativeElement.addEventListener('actionStart', that.eventHandlers['actionStartHandler']);
        that.eventHandlers['actionEndHandler'] = function (event) { that.onActionEnd.emit(event); };
        that.nativeElement.addEventListener('actionEnd', that.eventHandlers['actionEndHandler']);
        that.eventHandlers['contextMenuItemClickHandler'] = function (event) { that.onContextMenuItemClick.emit(event); };
        that.nativeElement.addEventListener('contextMenuItemClick', that.eventHandlers['contextMenuItemClickHandler']);
        that.eventHandlers['contextMenuOpenHandler'] = function (event) { that.onContextMenuOpen.emit(event); };
        that.nativeElement.addEventListener('contextMenuOpen', that.eventHandlers['contextMenuOpenHandler']);
        that.eventHandlers['contextMenuOpeningHandler'] = function (event) { that.onContextMenuOpening.emit(event); };
        that.nativeElement.addEventListener('contextMenuOpening', that.eventHandlers['contextMenuOpeningHandler']);
        that.eventHandlers['contextMenuCloseHandler'] = function (event) { that.onContextMenuClose.emit(event); };
        that.nativeElement.addEventListener('contextMenuClose', that.eventHandlers['contextMenuCloseHandler']);
        that.eventHandlers['contextMenuClosingHandler'] = function (event) { that.onContextMenuClosing.emit(event); };
        that.nativeElement.addEventListener('contextMenuClosing', that.eventHandlers['contextMenuClosingHandler']);
        that.eventHandlers['resizeStartHandler'] = function (event) { that.onResizeStart.emit(event); };
        that.nativeElement.addEventListener('resizeStart', that.eventHandlers['resizeStartHandler']);
        that.eventHandlers['resizeEndHandler'] = function (event) { that.onResizeEnd.emit(event); };
        that.nativeElement.addEventListener('resizeEnd', that.eventHandlers['resizeEndHandler']);
        that.eventHandlers['inlineToolbarOpenHandler'] = function (event) { that.onInlineToolbarOpen.emit(event); };
        that.nativeElement.addEventListener('inlineToolbarOpen', that.eventHandlers['inlineToolbarOpenHandler']);
        that.eventHandlers['inlineToolbarCloseHandler'] = function (event) { that.onInlineToolbarClose.emit(event); };
        that.nativeElement.addEventListener('inlineToolbarClose', that.eventHandlers['inlineToolbarCloseHandler']);
        that.eventHandlers['dropDownToolbarOpenHandler'] = function (event) { that.onDropDownToolbarOpen.emit(event); };
        that.nativeElement.addEventListener('dropDownToolbarOpen', that.eventHandlers['dropDownToolbarOpenHandler']);
        that.eventHandlers['dropDownToolbarCloseHandler'] = function (event) { that.onDropDownToolbarClose.emit(event); };
        that.nativeElement.addEventListener('dropDownToolbarClose', that.eventHandlers['dropDownToolbarCloseHandler']);
        that.eventHandlers['dialogOpenHandler'] = function (event) { that.onDialogOpen.emit(event); };
        that.nativeElement.addEventListener('dialogOpen', that.eventHandlers['dialogOpenHandler']);
        that.eventHandlers['dialogOpeningHandler'] = function (event) { that.onDialogOpening.emit(event); };
        that.nativeElement.addEventListener('dialogOpening', that.eventHandlers['dialogOpeningHandler']);
        that.eventHandlers['dialogCloseHandler'] = function (event) { that.onDialogClose.emit(event); };
        that.nativeElement.addEventListener('dialogClose', that.eventHandlers['dialogCloseHandler']);
        that.eventHandlers['dialogClosingHandler'] = function (event) { that.onDialogClosing.emit(event); };
        that.nativeElement.addEventListener('dialogClosing', that.eventHandlers['dialogClosingHandler']);
        that.eventHandlers['imageUploadSuccessHandler'] = function (event) { that.onImageUploadSuccess.emit(event); };
        that.nativeElement.addEventListener('imageUploadSuccess', that.eventHandlers['imageUploadSuccessHandler']);
        that.eventHandlers['imageUploadFailedHandler'] = function (event) { that.onImageUploadFailed.emit(event); };
        that.nativeElement.addEventListener('imageUploadFailed', that.eventHandlers['imageUploadFailedHandler']);
        that.eventHandlers['toobarItemClickHandler'] = function (event) { that.onToobarItemClick.emit(event); };
        that.nativeElement.addEventListener('toobarItemClick', that.eventHandlers['toobarItemClickHandler']);
        that.eventHandlers['messageCloseHandler'] = function (event) { that.onMessageClose.emit(event); };
        that.nativeElement.addEventListener('messageClose', that.eventHandlers['messageCloseHandler']);
        that.eventHandlers['messageOpenHandler'] = function (event) { that.onMessageOpen.emit(event); };
        that.nativeElement.addEventListener('messageOpen', that.eventHandlers['messageOpenHandler']);
    };
    /** @description Remove event listeners. */
    EditorComponent.prototype.unlisten = function () {
        var that = this;
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
    };
    EditorComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
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
    ], EditorComponent.prototype, "pasteFormat", null);
    tslib_1.__decorate([
        Input()
    ], EditorComponent.prototype, "placeholder", null);
    tslib_1.__decorate([
        Input()
    ], EditorComponent.prototype, "required", null);
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
        Output()
    ], EditorComponent.prototype, "onChange", void 0);
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
    ], EditorComponent.prototype, "onInlineToolbarClose", void 0);
    tslib_1.__decorate([
        Output()
    ], EditorComponent.prototype, "onDropDownToolbarOpen", void 0);
    tslib_1.__decorate([
        Output()
    ], EditorComponent.prototype, "onDropDownToolbarClose", void 0);
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
    return EditorComponent;
}(BaseElement));
export { EditorComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQuZWRpdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc21hcnQtd2ViY29tcG9uZW50cy1hbmd1bGFyL2VkaXRvci8iLCJzb3VyY2VzIjpbInNtYXJ0LmVkaXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUosT0FBTyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVyRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFReEM7SUFBcUMsMkNBQVc7SUFDL0MseUJBQVksR0FBdUI7UUFBbkMsWUFDQyxrQkFBTSxHQUFHLENBQUMsU0FFVjtRQUVPLG1CQUFhLEdBQVUsRUFBRSxDQUFDO1FBbVdsQzs4Q0FDc0M7UUFDNUIsY0FBUSxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRW5FOzhDQUNzQztRQUM1QixtQkFBYSxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXhFOzhDQUNzQztRQUM1QixpQkFBVyxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXRFOzhDQUNzQztRQUM1Qiw0QkFBc0IsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVqRjs4Q0FDc0M7UUFDNUIsdUJBQWlCLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFNUU7OENBQ3NDO1FBQzVCLDBCQUFvQixHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRS9FOzhDQUNzQztRQUM1Qix3QkFBa0IsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUU3RTs4Q0FDc0M7UUFDNUIsMEJBQW9CLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFL0U7OENBQ3NDO1FBQzVCLG1CQUFhLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFeEU7OENBQ3NDO1FBQzVCLGlCQUFXLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFdEU7OENBQ3NDO1FBQzVCLHlCQUFtQixHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTlFOzhDQUNzQztRQUM1QiwwQkFBb0IsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUvRTs4Q0FDc0M7UUFDNUIsMkJBQXFCLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFaEY7OENBQ3NDO1FBQzVCLDRCQUFzQixHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRWpGOzhDQUNzQztRQUM1QixrQkFBWSxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXZFOzhDQUNzQztRQUM1QixxQkFBZSxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTFFOzhDQUNzQztRQUM1QixtQkFBYSxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXhFOzhDQUNzQztRQUM1QixxQkFBZSxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTFFOzhDQUNzQztRQUM1QiwwQkFBb0IsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUvRTs4Q0FDc0M7UUFDNUIseUJBQW1CLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFOUU7OENBQ3NDO1FBQzVCLHVCQUFpQixHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTVFOzhDQUNzQztRQUM1QixvQkFBYyxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXpFOzhDQUNzQztRQUM1QixtQkFBYSxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBaGN2RSxLQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQyxhQUF1QixDQUFDOztJQUNsRCxDQUFDO0lBS0Q7O09BRUc7SUFDSSx5Q0FBZSxHQUF0QixVQUF1QixVQUFlO1FBQWYsMkJBQUEsRUFBQSxlQUFlO1FBQ2xDLElBQUksQ0FBQyxhQUFhLEdBQVcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN2RSxLQUFLLElBQUksWUFBWSxJQUFJLFVBQVUsRUFBRTtZQUNuQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUM3RDtRQUNELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUMzQixDQUFDO0lBR0Qsc0JBQUksc0NBQVM7UUFGYiw2R0FBNkc7YUFFN0c7WUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDdEUsQ0FBQzthQUNELFVBQWMsS0FBZ0I7WUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDdkUsQ0FBQzs7O09BSEE7SUFPRCxzQkFBSSxxQ0FBUTtRQUZaLDRMQUE0TDthQUU1TDtZQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNyRSxDQUFDO2FBQ0QsVUFBYSxLQUFjO1lBQzFCLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3RFLENBQUM7OztPQUhBO0lBT0Qsc0JBQUkscUNBQVE7UUFGWixxUEFBcVA7YUFFclA7WUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDckUsQ0FBQzthQUNELFVBQWEsS0FBYztZQUMxQixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUN0RSxDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLDZDQUFnQjtRQUZwQiw4SUFBOEk7YUFFOUk7WUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUM3RSxDQUFDO2FBQ0QsVUFBcUIsS0FBYztZQUNsQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzlFLENBQUM7OztPQUhBO0lBT0Qsc0JBQUksb0RBQXVCO1FBRjNCLGtOQUFrTjthQUVsTjtZQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3BGLENBQUM7YUFDRCxVQUE0QixLQUFVO1lBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsdUJBQXVCLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDckYsQ0FBQzs7O09BSEE7SUFPRCxzQkFBSSw2Q0FBZ0I7UUFGcEIsOERBQThEO2FBRTlEO1lBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDN0UsQ0FBQzthQUNELFVBQXFCLEtBQTZCO1lBQ2pELElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDOUUsQ0FBQzs7O09BSEE7SUFPRCxzQkFBSSx3Q0FBVztRQUZmLDJKQUEySjthQUUzSjtZQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUN4RSxDQUFDO2FBQ0QsVUFBZ0IsS0FBd0I7WUFDdkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDekUsQ0FBQzs7O09BSEE7SUFPRCxzQkFBSSxrREFBcUI7UUFGekIsMHdCQUEwd0I7YUFFMXdCO1lBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDbEYsQ0FBQzthQUNELFVBQTBCLEtBQXdFO1lBQ2pHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMscUJBQXFCLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDbkYsQ0FBQzs7O09BSEE7SUFPRCxzQkFBSSx1Q0FBVTtRQUZkLDBEQUEwRDthQUUxRDtZQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUN2RSxDQUFDO2FBQ0QsVUFBZSxLQUF1QjtZQUNyQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUN4RSxDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLHFDQUFRO1FBRlosbURBQW1EO2FBRW5EO1lBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3JFLENBQUM7YUFDRCxVQUFhLEtBQWM7WUFDMUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDdEUsQ0FBQzs7O09BSEE7SUFPRCxzQkFBSSwyQ0FBYztRQUZsQiwyREFBMkQ7YUFFM0Q7WUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDM0UsQ0FBQzthQUNELFVBQW1CLEtBQWM7WUFDaEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDNUUsQ0FBQzs7O09BSEE7SUFPRCxzQkFBSSw2Q0FBZ0I7UUFGcEIsa0RBQWtEO2FBRWxEO1lBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDN0UsQ0FBQzthQUNELFVBQXFCLEtBQWM7WUFDbEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUM5RSxDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLHFDQUFRO1FBRloseVBBQXlQO2FBRXpQO1lBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3JFLENBQUM7YUFDRCxVQUFhLEtBQWU7WUFDM0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDdEUsQ0FBQzs7O09BSEE7SUFPRCxzQkFBSSw2Q0FBZ0I7UUFGcEIsc0hBQXNIO2FBRXRIO1lBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDN0UsQ0FBQzthQUNELFVBQXFCLEtBQWM7WUFDbEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUM5RSxDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLHlDQUFZO1FBRmhCLG1IQUFtSDthQUVuSDtZQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUN6RSxDQUFDO2FBQ0QsVUFBaUIsS0FBYztZQUM5QixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUMxRSxDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLGtEQUFxQjtRQUZ6QixrSEFBa0g7YUFFbEg7WUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNsRixDQUFDO2FBQ0QsVUFBMEIsS0FBYTtZQUN0QyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLHFCQUFxQixHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ25GLENBQUM7OztPQUhBO0lBT0Qsc0JBQUksd0NBQVc7UUFGZixvRUFBb0U7YUFFcEU7WUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDeEUsQ0FBQzthQUNELFVBQWdCLEtBQWM7WUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDekUsQ0FBQzs7O09BSEE7SUFPRCxzQkFBSSw4Q0FBaUI7UUFGckIsMkVBQTJFO2FBRTNFO1lBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDOUUsQ0FBQzthQUNELFVBQXNCLEtBQWM7WUFDbkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUMvRSxDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLHNDQUFTO1FBRmIsMkZBQTJGO2FBRTNGO1lBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3RFLENBQUM7YUFDRCxVQUFjLEtBQWE7WUFDMUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDdkUsQ0FBQzs7O09BSEE7SUFPRCxzQkFBSSxnREFBbUI7UUFGdkIsMEZBQTBGO2FBRTFGO1lBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDaEYsQ0FBQzthQUNELFVBQXdCLEtBQWU7WUFDdEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNqRixDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLDJDQUFjO1FBRmxCLDZPQUE2TzthQUU3TztZQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUMzRSxDQUFDO2FBQ0QsVUFBbUIsS0FBMkI7WUFDN0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDNUUsQ0FBQzs7O09BSEE7SUFPRCxzQkFBSSxtQ0FBTTtRQUZWLCtGQUErRjthQUUvRjtZQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNuRSxDQUFDO2FBQ0QsVUFBVyxLQUFhO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3BFLENBQUM7OztPQUhBO0lBT0Qsc0JBQUkseUNBQVk7UUFGaEIsMkVBQTJFO2FBRTNFO1lBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3pFLENBQUM7YUFDRCxVQUFpQixLQUFhO1lBQzdCLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzFFLENBQUM7OztPQUhBO0lBT0Qsc0JBQUkscUNBQVE7UUFGWix3SkFBd0o7YUFFeEo7WUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDckUsQ0FBQzthQUNELFVBQWEsS0FBVTtZQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUN0RSxDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLHdDQUFXO1FBRmYsK0ZBQStGO2FBRS9GO1lBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3hFLENBQUM7YUFDRCxVQUFnQixLQUFrQjtZQUNqQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUN6RSxDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLHdDQUFXO1FBRmYsNEdBQTRHO2FBRTVHO1lBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3hFLENBQUM7YUFDRCxVQUFnQixLQUFhO1lBQzVCLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3pFLENBQUM7OztPQUhBO0lBT0Qsc0JBQUkscUNBQVE7UUFGWiwyTEFBMkw7YUFFM0w7WUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDckUsQ0FBQzthQUNELFVBQWEsS0FBYztZQUMxQixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUN0RSxDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLHNDQUFTO1FBRmIsdU1BQXVNO2FBRXZNO1lBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3RFLENBQUM7YUFDRCxVQUFjLEtBQWM7WUFDM0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDdkUsQ0FBQzs7O09BSEE7SUFPRCxzQkFBSSwwQ0FBYTtRQUZqQixzZUFBc2U7YUFFdGU7WUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDMUUsQ0FBQzthQUNELFVBQWtCLEtBQWM7WUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDM0UsQ0FBQzs7O09BSEE7SUFPRCxzQkFBSSxvREFBdUI7UUFGM0Isa0hBQWtIO2FBRWxIO1lBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDcEYsQ0FBQzthQUNELFVBQTRCLEtBQWE7WUFDeEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNyRixDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLGtDQUFLO1FBRlQsK0VBQStFO2FBRS9FO1lBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2xFLENBQUM7YUFDRCxVQUFVLEtBQWE7WUFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDbkUsQ0FBQzs7O09BSEE7SUFPRCxzQkFBSSx5Q0FBWTtRQUZoQix1MUlBQXUxSTthQUV2MUk7WUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDekUsQ0FBQzthQUNELFVBQWlCLEtBQW9CO1lBQ3BDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzFFLENBQUM7OztPQUhBO0lBT0Qsc0JBQUksd0NBQVc7UUFGZixrSUFBa0k7YUFFbEk7WUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDeEUsQ0FBQzthQUNELFVBQWdCLEtBQWtCO1lBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3pFLENBQUM7OztPQUhBO0lBT0Qsc0JBQUksZ0RBQW1CO1FBRnZCLHNIQUFzSDthQUV0SDtZQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2hGLENBQUM7YUFDRCxVQUF3QixLQUFzRTtZQUM3RixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2pGLENBQUM7OztPQUhBO0lBT0Qsc0JBQUksNENBQWU7UUFGbkIsK0ZBQStGO2FBRS9GO1lBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzVFLENBQUM7YUFDRCxVQUFvQixLQUFzQjtZQUN6QyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUM3RSxDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLDBDQUFhO1FBRmpCLGdHQUFnRzthQUVoRztZQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUMxRSxDQUFDO2FBQ0QsVUFBa0IsS0FBYztZQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUMzRSxDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLHdDQUFXO1FBRmYscUVBQXFFO2FBRXJFO1lBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3hFLENBQUM7YUFDRCxVQUFnQixLQUFjO1lBQzdCLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3pFLENBQUM7OztPQUhBO0lBT0Qsc0JBQUksa0NBQUs7UUFGVCx5REFBeUQ7YUFFekQ7WUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDbEUsQ0FBQzthQUNELFVBQVUsS0FBYTtZQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNuRSxDQUFDOzs7T0FIQTtJQWlHRDtNQUNFO0lBQ1EsOEJBQUksR0FBWDtRQUFBLGlCQVVDO1FBVEcsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTtZQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQzdCO2FBRUQ7WUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztnQkFDNUIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM5QixDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUVKO01BQ0U7SUFDUSxzQ0FBWSxHQUFuQjtRQUFBLGlCQVVDO1FBVEcsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTtZQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JDO2FBRUQ7WUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztnQkFDNUIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN0QyxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUVKO01BQ0U7SUFDUSx5Q0FBZSxHQUF0QjtRQUFBLGlCQVVDO1FBVEcsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTtZQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3hDO2FBRUQ7WUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztnQkFDNUIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN6QyxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUVKOztNQUVFO0lBQ1EsNENBQWtCLEdBQXpCLFVBQTBCLFFBQWdCO1FBQTFDLGlCQVVDO1FBVEcsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTtZQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ25EO2FBRUQ7WUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztnQkFDNUIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNwRCxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUVKO01BQ0U7SUFDUSx1Q0FBYSxHQUFwQjtRQUFBLGlCQVVDO1FBVEcsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTtZQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3RDO2FBRUQ7WUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztnQkFDNUIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUN2QyxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUVKOztNQUVFO0lBQ1EsMkNBQWlCLEdBQXhCLFVBQXlCLFFBQWdCO1FBQXpDLGlCQVVDO1FBVEcsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTtZQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2xEO2FBRUQ7WUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztnQkFDNUIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNuRCxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUVKOzs7O0lBSUc7SUFDVSx3Q0FBYyxHQUEzQixVQUE0QixXQUFXLEVBQUUsS0FBTTs7Ozs7Ozt3QkFDeEMsaUJBQWlCLEdBQUc7NEJBQ2hCLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQSxPQUFPO2dDQUN0QixLQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztvQ0FDNUIsSUFBTSxNQUFNLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO29DQUNyRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7Z0NBQ25CLENBQUMsQ0FBQyxDQUFDOzRCQUNQLENBQUMsQ0FBQyxDQUFDO3dCQUNQLENBQUMsQ0FBQzt3QkFDYSxxQkFBTSxpQkFBaUIsRUFBRSxFQUFBOzt3QkFBbEMsTUFBTSxHQUFHLFNBQXlCO3dCQUV4QyxzQkFBTyxNQUFNLEVBQUM7Ozs7S0FDakI7SUFFSjtNQUNFO0lBQ1EsK0JBQUssR0FBWjtRQUFBLGlCQVVDO1FBVEcsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTtZQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQzlCO2FBRUQ7WUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztnQkFDNUIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUMvQixDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUVKOztJQUVHO0lBQ1Usc0NBQVksR0FBekI7Ozs7Ozs7d0JBQ08saUJBQWlCLEdBQUc7NEJBQ2hCLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQSxPQUFPO2dDQUN0QixLQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztvQ0FDNUIsSUFBTSxNQUFNLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztvQ0FDakQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO2dDQUNuQixDQUFDLENBQUMsQ0FBQzs0QkFDUCxDQUFDLENBQUMsQ0FBQzt3QkFDUCxDQUFDLENBQUM7d0JBQ2EscUJBQU0saUJBQWlCLEVBQUUsRUFBQTs7d0JBQWxDLE1BQU0sR0FBRyxTQUF5Qjt3QkFFeEMsc0JBQU8sTUFBTSxFQUFDOzs7O0tBQ2pCO0lBRUo7O0lBRUc7SUFDVSwyQ0FBaUIsR0FBOUI7Ozs7Ozs7d0JBQ08saUJBQWlCLEdBQUc7NEJBQ2hCLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQSxPQUFPO2dDQUN0QixLQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztvQ0FDNUIsSUFBTSxNQUFNLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO29DQUN0RCxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7Z0NBQ25CLENBQUMsQ0FBQyxDQUFDOzRCQUNQLENBQUMsQ0FBQyxDQUFDO3dCQUNQLENBQUMsQ0FBQzt3QkFDYSxxQkFBTSxpQkFBaUIsRUFBRSxFQUFBOzt3QkFBbEMsTUFBTSxHQUFHLFNBQXlCO3dCQUV4QyxzQkFBTyxNQUFNLEVBQUM7Ozs7S0FDakI7SUFFSjs7SUFFRztJQUNVLGlDQUFPLEdBQXBCOzs7Ozs7O3dCQUNPLGlCQUFpQixHQUFHOzRCQUNoQixPQUFPLElBQUksT0FBTyxDQUFDLFVBQUEsT0FBTztnQ0FDdEIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUM7b0NBQzVCLElBQU0sTUFBTSxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUM7b0NBQzVDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQTtnQ0FDbkIsQ0FBQyxDQUFDLENBQUM7NEJBQ1AsQ0FBQyxDQUFDLENBQUM7d0JBQ1AsQ0FBQyxDQUFDO3dCQUNhLHFCQUFNLGlCQUFpQixFQUFFLEVBQUE7O3dCQUFsQyxNQUFNLEdBQUcsU0FBeUI7d0JBRXhDLHNCQUFPLE1BQU0sRUFBQzs7OztLQUNqQjtJQUVKOztJQUVHO0lBQ1UsaUNBQU8sR0FBcEI7Ozs7Ozs7d0JBQ08saUJBQWlCLEdBQUc7NEJBQ2hCLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQSxPQUFPO2dDQUN0QixLQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztvQ0FDNUIsSUFBTSxNQUFNLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQ0FDNUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO2dDQUNuQixDQUFDLENBQUMsQ0FBQzs0QkFDUCxDQUFDLENBQUMsQ0FBQzt3QkFDUCxDQUFDLENBQUM7d0JBQ2EscUJBQU0saUJBQWlCLEVBQUUsRUFBQTs7d0JBQWxDLE1BQU0sR0FBRyxTQUF5Qjt3QkFFeEMsc0JBQU8sTUFBTSxFQUFDOzs7O0tBQ2pCO0lBRUo7O01BRUU7SUFDUSxxQ0FBVyxHQUFsQixVQUFtQixJQUFvQztRQUF2RCxpQkFVQztRQVRHLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDeEM7YUFFRDtZQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDO2dCQUM1QixLQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QyxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUVKO01BQ0U7SUFDUSx5Q0FBZSxHQUF0QjtRQUFBLGlCQVVDO1FBVEcsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTtZQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3hDO2FBRUQ7WUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztnQkFDNUIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN6QyxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUVKOzs7O0lBSUc7SUFDVSxxQ0FBVyxHQUF4QixVQUF5QixPQUFPLEVBQUUsUUFBUzs7Ozs7Ozt3QkFDcEMsaUJBQWlCLEdBQUc7NEJBQ2hCLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQSxPQUFPO2dDQUN0QixLQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztvQ0FDNUIsSUFBTSxNQUFNLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO29DQUNqRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7Z0NBQ25CLENBQUMsQ0FBQyxDQUFDOzRCQUNQLENBQUMsQ0FBQyxDQUFDO3dCQUNQLENBQUMsQ0FBQzt3QkFDYSxxQkFBTSxpQkFBaUIsRUFBRSxFQUFBOzt3QkFBbEMsTUFBTSxHQUFHLFNBQXlCO3dCQUV4QyxzQkFBTyxNQUFNLEVBQUM7Ozs7S0FDakI7SUFFSjtNQUNFO0lBQ1EsbUNBQVMsR0FBaEI7UUFBQSxpQkFVQztRQVRHLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNsQzthQUVEO1lBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUM7Z0JBQzVCLEtBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDbkMsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFSjs7O01BR0U7SUFDUSxxQ0FBVyxHQUFsQixVQUFtQixVQUFrQixFQUFFLFFBQWdCO1FBQXZELGlCQVVDO1FBVEcsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTtZQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDeEQ7YUFFRDtZQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDO2dCQUM1QixLQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDekQsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFSjtNQUNFO0lBQ1Esb0NBQVUsR0FBakI7UUFBQSxpQkFVQztRQVRHLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNuQzthQUVEO1lBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUM7Z0JBQzVCLEtBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDcEMsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFSjtNQUNFO0lBQ1EsbUNBQVMsR0FBaEI7UUFBQSxpQkFVQztRQVRHLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNsQzthQUVEO1lBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUM7Z0JBQzVCLEtBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDbkMsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFSjtNQUNFO0lBQ1EsbUNBQVMsR0FBaEI7UUFBQSxpQkFVQztRQVRHLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNsQzthQUVEO1lBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUM7Z0JBQzVCLEtBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDbkMsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFSjs7TUFFRTtJQUNRLG1DQUFTLEdBQWhCLFVBQWlCLEtBQWU7UUFBaEMsaUJBVUM7UUFURyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3ZDO2FBRUQ7WUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztnQkFDNUIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEMsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFSjs7TUFFRTtJQUNRLHFDQUFXLEdBQWxCLFVBQW1CLEtBQWU7UUFBbEMsaUJBVUM7UUFURyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3pDO2FBRUQ7WUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztnQkFDNUIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUMsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFSjs7TUFFRTtJQUNRLHdDQUFjLEdBQXJCLFVBQXNCLEtBQWU7UUFBckMsaUJBVUM7UUFURyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzVDO2FBRUQ7WUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztnQkFDNUIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0MsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFSjs7O01BR0U7SUFDUSxvQ0FBVSxHQUFqQixVQUFrQixVQUFrQixFQUFFLFFBQWM7UUFBcEQsaUJBVUM7UUFURyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUN2RDthQUVEO1lBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUM7Z0JBQzVCLEtBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUN4RCxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUVKOzs7TUFHRTtJQUNRLG9DQUFVLEdBQWpCLFVBQWtCLE1BQVcsRUFBRSxRQUFjO1FBQTdDLGlCQVVDO1FBVEcsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTtZQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDbkQ7YUFFRDtZQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDO2dCQUM1QixLQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDcEQsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFSjtNQUNFO0lBQ1EsK0JBQUssR0FBWjtRQUFBLGlCQVVDO1FBVEcsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTtZQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQzlCO2FBRUQ7WUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztnQkFDNUIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUMvQixDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUdKLHNCQUFJLHVDQUFVO2FBQWQ7WUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDbkUsQ0FBQzs7O09BQUE7SUFFRCxrQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVFLHlDQUFlLEdBQWY7UUFDRSxJQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFFbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRTNDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUVmLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUVsRCxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxjQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xGLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFRCxxQ0FBVyxHQUFYO1FBQ0MsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCxxQ0FBVyxHQUFYLFVBQVksT0FBc0I7UUFDakMsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO1lBQ3hELEtBQUssSUFBTSxRQUFRLElBQUksT0FBTyxFQUFFO2dCQUMvQixJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEVBQUU7b0JBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQztpQkFDOUQ7YUFDRDtTQUNEO0lBQ0YsQ0FBQztJQUVELHdDQUF3QztJQUNoQyxnQ0FBTSxHQUFkO1FBQ08sSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLEdBQUcsVUFBQyxLQUFrQixJQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQzVGLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztRQUVuRixJQUFJLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsVUFBQyxLQUFrQixJQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3RHLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO1FBRTdGLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsR0FBRyxVQUFDLEtBQWtCLElBQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDbEcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7UUFFekYsSUFBSSxDQUFDLGFBQWEsQ0FBQyw2QkFBNkIsQ0FBQyxHQUFHLFVBQUMsS0FBa0IsSUFBTyxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3hILElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUM7UUFFL0csSUFBSSxDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLFVBQUMsS0FBa0IsSUFBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQzlHLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7UUFFckcsSUFBSSxDQUFDLGFBQWEsQ0FBQywyQkFBMkIsQ0FBQyxHQUFHLFVBQUMsS0FBa0IsSUFBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3BILElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUM7UUFFM0csSUFBSSxDQUFDLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLFVBQUMsS0FBa0IsSUFBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ2hILElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUM7UUFFdkcsSUFBSSxDQUFDLGFBQWEsQ0FBQywyQkFBMkIsQ0FBQyxHQUFHLFVBQUMsS0FBa0IsSUFBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3BILElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUM7UUFFM0csSUFBSSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLFVBQUMsS0FBa0IsSUFBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUN0RyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQztRQUU3RixJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsVUFBQyxLQUFrQixJQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ2xHLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1FBRXpGLElBQUksQ0FBQyxhQUFhLENBQUMsMEJBQTBCLENBQUMsR0FBRyxVQUFDLEtBQWtCLElBQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNsSCxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDO1FBRXpHLElBQUksQ0FBQyxhQUFhLENBQUMsMkJBQTJCLENBQUMsR0FBRyxVQUFDLEtBQWtCLElBQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNwSCxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFDO1FBRTNHLElBQUksQ0FBQyxhQUFhLENBQUMsNEJBQTRCLENBQUMsR0FBRyxVQUFDLEtBQWtCLElBQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUN0SCxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxDQUFDO1FBRTdHLElBQUksQ0FBQyxhQUFhLENBQUMsNkJBQTZCLENBQUMsR0FBRyxVQUFDLEtBQWtCLElBQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUN4SCxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLHNCQUFzQixFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxDQUFDO1FBRS9HLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsR0FBRyxVQUFDLEtBQWtCLElBQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDcEcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7UUFFM0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLFVBQUMsS0FBa0IsSUFBTyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUMxRyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztRQUVqRyxJQUFJLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsVUFBQyxLQUFrQixJQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3RHLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO1FBRTdGLElBQUksQ0FBQyxhQUFhLENBQUMsc0JBQXNCLENBQUMsR0FBRyxVQUFDLEtBQWtCLElBQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDMUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7UUFFakcsSUFBSSxDQUFDLGFBQWEsQ0FBQywyQkFBMkIsQ0FBQyxHQUFHLFVBQUMsS0FBa0IsSUFBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3BILElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUM7UUFFM0csSUFBSSxDQUFDLGFBQWEsQ0FBQywwQkFBMEIsQ0FBQyxHQUFHLFVBQUMsS0FBa0IsSUFBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ2xILElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUM7UUFFekcsSUFBSSxDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLFVBQUMsS0FBa0IsSUFBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQzlHLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7UUFFckcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLFVBQUMsS0FBa0IsSUFBTyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUN4RyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztRQUUvRixJQUFJLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsVUFBQyxLQUFrQixJQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3RHLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO0lBRTlGLENBQUM7SUFFRCwyQ0FBMkM7SUFDbkMsa0NBQVEsR0FBaEI7UUFDTyxJQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxFQUFFO1lBQ3hDLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztTQUN0RjtRQUVELElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFO1lBQzdDLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO1NBQ2hHO1FBRUQsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLEVBQUU7WUFDM0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7U0FDNUY7UUFFRCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsNkJBQTZCLENBQUMsRUFBRTtZQUN0RCxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLHNCQUFzQixFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxDQUFDO1NBQ2xIO1FBRUQsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLHdCQUF3QixDQUFDLEVBQUU7WUFDakQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQztTQUN4RztRQUVELElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQywyQkFBMkIsQ0FBQyxFQUFFO1lBQ3BELElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUM7U0FDOUc7UUFFRCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMseUJBQXlCLENBQUMsRUFBRTtZQUNsRCxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDO1NBQzFHO1FBRUQsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLDJCQUEyQixDQUFDLEVBQUU7WUFDcEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLDJCQUEyQixDQUFDLENBQUMsQ0FBQztTQUM5RztRQUVELElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFO1lBQzdDLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO1NBQ2hHO1FBRUQsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLEVBQUU7WUFDM0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7U0FDNUY7UUFFRCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsMEJBQTBCLENBQUMsRUFBRTtZQUNuRCxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDO1NBQzVHO1FBRUQsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLDJCQUEyQixDQUFDLEVBQUU7WUFDcEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLDJCQUEyQixDQUFDLENBQUMsQ0FBQztTQUM5RztRQUVELElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyw0QkFBNEIsQ0FBQyxFQUFFO1lBQ3JELElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUM7U0FDaEg7UUFFRCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsNkJBQTZCLENBQUMsRUFBRTtZQUN0RCxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLHNCQUFzQixFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxDQUFDO1NBQ2xIO1FBRUQsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLEVBQUU7WUFDNUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7U0FDOUY7UUFFRCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsc0JBQXNCLENBQUMsRUFBRTtZQUMvQyxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztTQUNwRztRQUVELElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFO1lBQzdDLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO1NBQ2hHO1FBRUQsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLHNCQUFzQixDQUFDLEVBQUU7WUFDL0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7U0FDcEc7UUFFRCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsMkJBQTJCLENBQUMsRUFBRTtZQUNwRCxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFDO1NBQzlHO1FBRUQsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLDBCQUEwQixDQUFDLEVBQUU7WUFDbkQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQztTQUM1RztRQUVELElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFO1lBQ2pELElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7U0FDeEc7UUFFRCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsRUFBRTtZQUM5QyxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztTQUNsRztRQUVELElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFO1lBQzdDLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO1NBQ2hHO0lBRUYsQ0FBQzs7Z0JBOWhDZ0IsVUFBVTs7SUFvQjNCO1FBREMsS0FBSyxFQUFFO29EQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7bURBR1A7SUFPRDtRQURDLEtBQUssRUFBRTttREFHUDtJQU9EO1FBREMsS0FBSyxFQUFFOzJEQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7a0VBR1A7SUFPRDtRQURDLEtBQUssRUFBRTsyREFHUDtJQU9EO1FBREMsS0FBSyxFQUFFO3NEQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7Z0VBR1A7SUFPRDtRQURDLEtBQUssRUFBRTtxREFHUDtJQU9EO1FBREMsS0FBSyxFQUFFO21EQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7eURBR1A7SUFPRDtRQURDLEtBQUssRUFBRTsyREFHUDtJQU9EO1FBREMsS0FBSyxFQUFFO21EQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7MkRBR1A7SUFPRDtRQURDLEtBQUssRUFBRTt1REFHUDtJQU9EO1FBREMsS0FBSyxFQUFFO2dFQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7c0RBR1A7SUFPRDtRQURDLEtBQUssRUFBRTs0REFHUDtJQU9EO1FBREMsS0FBSyxFQUFFO29EQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7OERBR1A7SUFPRDtRQURDLEtBQUssRUFBRTt5REFHUDtJQU9EO1FBREMsS0FBSyxFQUFFO2lEQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7dURBR1A7SUFPRDtRQURDLEtBQUssRUFBRTttREFHUDtJQU9EO1FBREMsS0FBSyxFQUFFO3NEQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7c0RBR1A7SUFPRDtRQURDLEtBQUssRUFBRTttREFHUDtJQU9EO1FBREMsS0FBSyxFQUFFO29EQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7d0RBR1A7SUFPRDtRQURDLEtBQUssRUFBRTtrRUFHUDtJQU9EO1FBREMsS0FBSyxFQUFFO2dEQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7dURBR1A7SUFPRDtRQURDLEtBQUssRUFBRTtzREFHUDtJQU9EO1FBREMsS0FBSyxFQUFFOzhEQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7MERBR1A7SUFPRDtRQURDLEtBQUssRUFBRTt3REFHUDtJQU9EO1FBREMsS0FBSyxFQUFFO3NEQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7Z0RBR1A7SUFPUztRQUFULE1BQU0sRUFBRTtxREFBMEQ7SUFJekQ7UUFBVCxNQUFNLEVBQUU7MERBQStEO0lBSTlEO1FBQVQsTUFBTSxFQUFFO3dEQUE2RDtJQUk1RDtRQUFULE1BQU0sRUFBRTttRUFBd0U7SUFJdkU7UUFBVCxNQUFNLEVBQUU7OERBQW1FO0lBSWxFO1FBQVQsTUFBTSxFQUFFO2lFQUFzRTtJQUlyRTtRQUFULE1BQU0sRUFBRTsrREFBb0U7SUFJbkU7UUFBVCxNQUFNLEVBQUU7aUVBQXNFO0lBSXJFO1FBQVQsTUFBTSxFQUFFOzBEQUErRDtJQUk5RDtRQUFULE1BQU0sRUFBRTt3REFBNkQ7SUFJNUQ7UUFBVCxNQUFNLEVBQUU7Z0VBQXFFO0lBSXBFO1FBQVQsTUFBTSxFQUFFO2lFQUFzRTtJQUlyRTtRQUFULE1BQU0sRUFBRTtrRUFBdUU7SUFJdEU7UUFBVCxNQUFNLEVBQUU7bUVBQXdFO0lBSXZFO1FBQVQsTUFBTSxFQUFFO3lEQUE4RDtJQUk3RDtRQUFULE1BQU0sRUFBRTs0REFBaUU7SUFJaEU7UUFBVCxNQUFNLEVBQUU7MERBQStEO0lBSTlEO1FBQVQsTUFBTSxFQUFFOzREQUFpRTtJQUloRTtRQUFULE1BQU0sRUFBRTtpRUFBc0U7SUFJckU7UUFBVCxNQUFNLEVBQUU7Z0VBQXFFO0lBSXBFO1FBQVQsTUFBTSxFQUFFOzhEQUFtRTtJQUlsRTtRQUFULE1BQU0sRUFBRTsyREFBZ0U7SUFJL0Q7UUFBVCxNQUFNLEVBQUU7MERBQStEO0lBbmM1RCxlQUFlO1FBSjNCLFNBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSw4QkFBOEI7U0FDeEMsQ0FBQztPQUVXLGVBQWUsQ0FnaUMzQjtJQUFELHNCQUFDO0NBQUEsQUFoaUNELENBQXFDLFdBQVcsR0FnaUMvQztTQWhpQ1ksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVkaXRvciB9IGZyb20gJy4vLi4vaW5kZXgnO1xuaW1wb3J0IHsgQW5pbWF0aW9uLCBFZGl0b3JDb250ZW50RmlsdGVyaW5nQXR0cmlidXRlRmlsdGVyTW9kZSwgRWRpdG9yQ29udGVudEZpbHRlcmluZ1RhZ0ZpbHRlck1vZGUsIEVkaXRvckNvbnRlbnRGaWx0ZXJpbmdTdHlsZUF0dHJpYnV0ZUZpbHRlck1vZGUsIEVkaXRvckNvbnRleHRNZW51LCBFZGl0TW9kZSwgUGFzdGVGb3JtYXQsIFRvb2xiYXJNb2RlLCBUb29sYmFyVmlld01vZGUsIEVkaXRvckNvbnRlbnRGaWx0ZXJpbmcsIEVkaXRvckRhdGFFeHBvcnQsIEVkaXRvcklmcmFtZVNldHRpbmdzLCBUb29sYmFySXRlbSwgVG9vbGJhckl0ZW1FZGl0b3IsIEVsZW1lbnRSZW5kZXJNb2RlfSBmcm9tICcuLy4uL2luZGV4JztcbmltcG9ydCB7IENvbXBvbmVudCwgRGlyZWN0aXZlLCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgU2ltcGxlQ2hhbmdlcywgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VFbGVtZW50LCBTbWFydCB9IGZyb20gJy4vc21hcnQuZWxlbWVudCc7XG5leHBvcnQgeyBBbmltYXRpb24sIEVkaXRvckNvbnRlbnRGaWx0ZXJpbmdBdHRyaWJ1dGVGaWx0ZXJNb2RlLCBFZGl0b3JDb250ZW50RmlsdGVyaW5nVGFnRmlsdGVyTW9kZSwgRWRpdG9yQ29udGVudEZpbHRlcmluZ1N0eWxlQXR0cmlidXRlRmlsdGVyTW9kZSwgRWRpdG9yQ29udGV4dE1lbnUsIEVkaXRNb2RlLCBQYXN0ZUZvcm1hdCwgVG9vbGJhck1vZGUsIFRvb2xiYXJWaWV3TW9kZSwgRWRpdG9yQ29udGVudEZpbHRlcmluZywgRWRpdG9yRGF0YUV4cG9ydCwgRWRpdG9ySWZyYW1lU2V0dGluZ3MsIFRvb2xiYXJJdGVtLCBUb29sYmFySXRlbUVkaXRvciwgRWxlbWVudFJlbmRlck1vZGV9IGZyb20gJy4vLi4vaW5kZXgnO1xuZXhwb3J0IHsgU21hcnQgfSBmcm9tICcuL3NtYXJ0LmVsZW1lbnQnO1xuZXhwb3J0IHsgRWRpdG9yIH0gZnJvbSAnLi8uLi9pbmRleCc7XG5cblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnc21hcnQtZWRpdG9yLCBbc21hcnQtZWRpdG9yXSdcbn0pXG5cbmV4cG9ydCBjbGFzcyBFZGl0b3JDb21wb25lbnQgZXh0ZW5kcyBCYXNlRWxlbWVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuXHRjb25zdHJ1Y3RvcihyZWY6IEVsZW1lbnRSZWY8RWRpdG9yPikge1xuXHRcdHN1cGVyKHJlZik7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID0gcmVmLm5hdGl2ZUVsZW1lbnQgYXMgRWRpdG9yO1xuXHR9XG5cblx0cHJpdmF0ZSBldmVudEhhbmRsZXJzOiBhbnlbXSA9IFtdO1xuXG5cdHB1YmxpYyBuYXRpdmVFbGVtZW50OiBFZGl0b3I7XG5cdC8qKiBAZGVzY3JpcHRpb24gQ3JlYXRlcyB0aGUgY29tcG9uZW50IG9uIGRlbWFuZC5cblx0ICogQHBhcmFtIHByb3BlcnRpZXMgQW4gb3B0aW9uYWwgb2JqZWN0IG9mIHByb3BlcnRpZXMsIHdoaWNoIHdpbGwgYmUgYWRkZWQgdG8gdGhlIHRlbXBsYXRlIGJpbmRlZCBvbmVzLlxuXHQgKi9cblx0cHVibGljIGNyZWF0ZUNvbXBvbmVudChwcm9wZXJ0aWVzID0ge30pOiBhbnkge1xuICAgIFx0dGhpcy5uYXRpdmVFbGVtZW50ID0gPEVkaXRvcj5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzbWFydC1lZGl0b3InKTtcblx0XHRmb3IgKGxldCBwcm9wZXJ0eU5hbWUgaW4gcHJvcGVydGllcykgeyBcbiBcdFx0XHR0aGlzLm5hdGl2ZUVsZW1lbnRbcHJvcGVydHlOYW1lXSA9IHByb3BlcnRpZXNbcHJvcGVydHlOYW1lXTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudDtcblx0fVxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgYW5pbWF0aW9uIG1vZGUuIEFuaW1hdGlvbiBpcyBkaXNhYmxlZCB3aGVuIHRoZSBwcm9wZXJ0eSBpcyBzZXQgdG8gJ25vbmUnICovXG5cdEBJbnB1dCgpXG5cdGdldCBhbmltYXRpb24oKTogQW5pbWF0aW9uIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmFuaW1hdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYW5pbWF0aW9uKHZhbHVlOiBBbmltYXRpb24pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYW5pbWF0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEF1dG9tYXRpY2FsbHkgbG9hZHMgdGhlIGxhc3Qgc2F2ZWQgc3RhdGUgb2YgdGhlIGVkaXRvciAoZnJvbSBsb2NhbCBzdG9yYWdlKSBvbiBlbGVtZW50IGluaXRpYWxpemF0aW9uLiBBbiBpZCBtdXN0IGJlIHByb3ZpZGVkIGluIG9yZGVyIHRvIGxvYWQgYSBwcmV2aW91c2x5IHNhdmVkIHN0YXRlLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgYXV0b0xvYWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hdXRvTG9hZCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYXV0b0xvYWQodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYXV0b0xvYWQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQXV0b21hdGljYWxseSBzYXZlcyB0aGUgY3VycmVudCBjb250ZW50IG9mIHRoZSBlZGl0b3IuIFNhdmluZyBoYXBwZW5zIGF0IHRpbWUgaW50ZXJ2YXMgZGV0ZXJtaW5lZCBieSB0aGUgYXV0b1NhdmVJbnRlcnZhbCBwcm9wZXJ0eSB3aGlsZSB0aGUgZWxlbWVudCBvbiBmb2N1cy4gQW4gaWQgbXVzdCBiZSBwcm92aWRlZCB0byB0aGUgZWxlbWVudCBpbiBvcmRlciB0byBzdG9yZSB0aGUgc3RhdGUuICovXG5cdEBJbnB1dCgpXG5cdGdldCBhdXRvU2F2ZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9TYXZlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBhdXRvU2F2ZSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hdXRvU2F2ZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGUgaW50ZXJ2YWwgdGhhdCBkZXRlcm1pbmVzIHRoZSBpbnRlcnZhbCB0byBhdXRvbWF0aWNhbGx5IHNhdmUgdGhlIHN0YXRlIG9mIHRoZSBFZGl0b3Igd2hlbiB0aGUgYXV0b1NhdmUgcHJvcGVydHkgaXMgc2V0LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgYXV0b1NhdmVJbnRlcnZhbCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9TYXZlSW50ZXJ2YWwgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGF1dG9TYXZlSW50ZXJ2YWwodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYXV0b1NhdmVJbnRlcnZhbCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBIGZvcm1hdHRpbmcgZnVuY3Rpb24gZm9yIHRoZSBjaGFyIGNvdW50ZXIuIFRha2VzIHR3byBhcmd1bWVudHM6IGNoYXJzIC0gdGhlIGN1cnJlbnQgbnVtYmVyIG9mIGNoYXJhY3RlcnMgaW5zaWRlIHRoZSBFZGl0b3IubWF4Q2hhckNvdW50IC0gdGhlIG1heGltdW0gbnVtYmVyIG9mIGNoYXJhY3RlcnMgaW5zaWRlIHRoZSBFZGl0b3IuICovXG5cdEBJbnB1dCgpXG5cdGdldCBjaGFyQ291bnRGb3JtYXRGdW5jdGlvbigpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY2hhckNvdW50Rm9ybWF0RnVuY3Rpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGNoYXJDb3VudEZvcm1hdEZ1bmN0aW9uKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY2hhckNvdW50Rm9ybWF0RnVuY3Rpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgY29udGVudCBmaWx0ZXJpbmcgc2V0dGluZ3MuICovXG5cdEBJbnB1dCgpXG5cdGdldCBjb250ZW50RmlsdGVyaW5nKCk6IEVkaXRvckNvbnRlbnRGaWx0ZXJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29udGVudEZpbHRlcmluZyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgY29udGVudEZpbHRlcmluZyh2YWx1ZTogRWRpdG9yQ29udGVudEZpbHRlcmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb250ZW50RmlsdGVyaW5nID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIGNvbnRleHQgbWVudSBmb3IgdGhlIEVkaXRvci4gVGhlIGNvbnRleHQgbWVudSBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgdXNlciByaWdodCBjbGlja3Mgb24gdGhlIGNvbnRlbnQgYXJlYSBvZiB0aGUgRWRpdG9yLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgY29udGV4dE1lbnUoKTogRWRpdG9yQ29udGV4dE1lbnUge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29udGV4dE1lbnUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGNvbnRleHRNZW51KHZhbHVlOiBFZGl0b3JDb250ZXh0TWVudSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb250ZXh0TWVudSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBbGxvd3MgdG8gY3VzdG9taXplIGRlZmF1bHQgdGhlIGNvbnRleHQgbWVudSBvZiB0aGUgRWRpdG9yLiBUaGUgcHJvcGVydHkgYWNjZXB0cyBhbiBhcnJheSBvZiBpdGVtcyB3aGljaCBjYW4gYmUgc3RyaW5ncyB0aGF0IHJlcHJlc2VudCB0aGUgdmFsdWUgb2YgdGhlIGl0ZW0sIG9yIG9iamVjdHMgb2YgdGhlIGZvbGxvd2luZyBmb3JtYXQ6IHsgbGFiZWw6IHN0cmluZywgdmFsdWU6IHN0cmluZyB9LCB3aGVyZSB0aGUgbGFiZWwgd2lsbCBiZSBkaXNwbGF5ZWQgYW5kIHRoZSB2YWx1ZSB3aWxsIGJlIGFjdGlvbiB2YWx1ZSBmb3IgdGhlIGl0ZW0uIFRoZSBwcm9wZXJ0eSBhbHNvIGFjY2VwdHMgYSBmdW5jdGlvbiB0aGF0IG11c3QgcmV0dXJuIGFuIGFycmF5IG9mIGl0ZW1zIHdpdGggdGhlIGZvbGxvd2luZyBmb3JtYXQgZnVuY3Rpb24gKHRhcmdldDogSFRNTEVsZW1lbnQsIHR5cGU6IHN0cmluZywgZGVmYXVsdEl0ZW1zOiBzdHJpbmdbXSkgeyByZXR1cm4gZGVmYXVsdEl0ZW1zIH0gYW5kIHRoZSBmb2xsb3dpbmcgYXJndW1lbnRzOiB0YXJnZXQgLSB0aGUgZWxlbWVudCB0aGF0IGlzIHRoZSB0YXJnZXQgb2YgdGhlIGNvbnRleHQgbWVudS50eXBlIC0gdGhlIHR5cGUgb2YgY29udGV4dCBtZW51ICggd2hldGhlciBpdCdzIGEgdGFibGUsIGltYWdlLCBsaW5rIG9yIG90aGVyKWRlZmF1bHRJdGVtcyAtIGFuIGFycmF5IG9mIHN0cmluZ3Mgd2hpY2ggcmVwcmVzZW50IHRoZSBkZWZhdWx0IGl0ZW1zIGZvciB0aGUgY29udGV4dCBtZW51LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgY29udGV4dE1lbnVEYXRhU291cmNlKCk6IHN0cmluZ1tdIHwgeyBsYWJlbDogc3RyaW5nLCB2YWx1ZTogJ3N0cmluZycgfVtdIHwgRnVuY3Rpb24gfCBudWxsIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbnRleHRNZW51RGF0YVNvdXJjZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgY29udGV4dE1lbnVEYXRhU291cmNlKHZhbHVlOiBzdHJpbmdbXSB8IHsgbGFiZWw6IHN0cmluZywgdmFsdWU6ICdzdHJpbmcnIH1bXSB8IEZ1bmN0aW9uIHwgbnVsbCkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb250ZXh0TWVudURhdGFTb3VyY2UgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyB0aGUgRWRpdG9yJ3MgRGF0YSBFeHBvcnQgb3B0aW9ucy4gKi9cblx0QElucHV0KClcblx0Z2V0IGRhdGFFeHBvcnQoKTogRWRpdG9yRGF0YUV4cG9ydCB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kYXRhRXhwb3J0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkYXRhRXhwb3J0KHZhbHVlOiBFZGl0b3JEYXRhRXhwb3J0KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRhdGFFeHBvcnQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRW5hYmxlcyBvciBkaXNhYmxlcyB0aGUgRWRpdG9yLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlZCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZWQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGlzYWJsZXMgY29udGVudCBlZGl0aW5nIGluc2lkZSBFZGl0b3IuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkaXNhYmxlRWRpdGluZygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVFZGl0aW5nIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkaXNhYmxlRWRpdGluZyh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlRWRpdGluZyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEaXNhYmxlcyB0aGUgUXVpY2sgU2VhcmNoIEJhci4gKi9cblx0QElucHV0KClcblx0Z2V0IGRpc2FibGVTZWFyY2hCYXIoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlU2VhcmNoQmFyIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkaXNhYmxlU2VhcmNoQmFyKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVTZWFyY2hCYXIgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgZWRpdCBtb2RlIGZvciB0aGUgRWRpdG9yLiBCeSBkZWZhdWx0IHRoZSBlZGl0b3IncyBjb250ZW50IGFjY2VwdHMgYW5kIHBhcnNlcyBIVE1MLiBIb3dldmVyIGlmIHNldCB0byAnbWFya2Rvd24nIHRoZSBFZGl0b3IgY2FuIGJlIHVzZWQgYXMgYSBmdWxsIHRpbWUgTWFya2Rvd24gRWRpdG9yIGJ5IHBhcnNpbmcgdGhlIG1ha3Jkb3duIHRvIEhUTUwgaW4gcHJldmlldyBtb2RlLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZWRpdE1vZGUoKTogRWRpdE1vZGUge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZWRpdE1vZGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGVkaXRNb2RlKHZhbHVlOiBFZGl0TW9kZSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5lZGl0TW9kZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHZhbHVlIHJldHVybmVkIGZyb20gZ2V0SFRNTCBtZXRob2QgYW5kIFNvdXJjZSBDb2RlIHZpZXcgYXJlIGVuY29kZWQgb3Igbm90LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZW5hYmxlSHRtbEVuY29kZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmVuYWJsZUh0bWxFbmNvZGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGVuYWJsZUh0bWxFbmNvZGUodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZW5hYmxlSHRtbEVuY29kZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIFRhYiBrZXkgY2FuIGluc2VydCB0YWIgY2hhcnMgaW5zaWRlIHRoZSBFZGl0b3Igb3IgY2hhbmdlIGZvY3VzIChkZWZhdWx0KSAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZW5hYmxlVGFiS2V5KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZW5hYmxlVGFiS2V5IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBlbmFibGVUYWJLZXkodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZW5hYmxlVGFiS2V5ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIHRpbWUgaW50ZXJ2YWwgYmV0d2VlbiByZXN1bHRzIGZvciB0aGUgZmluZCBhbmQgcmVwbGFjZSBhbmQgc2VhcmNoIGJhciBmZWF0dXJlcy4gKi9cblx0QElucHV0KClcblx0Z2V0IGZpbmRBbmRSZXBsYWNlVGltZW91dCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZmluZEFuZFJlcGxhY2VUaW1lb3V0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBmaW5kQW5kUmVwbGFjZVRpbWVvdXQodmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5maW5kQW5kUmVwbGFjZVRpbWVvdXQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBUb29sYmFyIGlzIGhpZGRlbiBvciBub3QuICovXG5cdEBJbnB1dCgpXG5cdGdldCBoaWRlVG9vbGJhcigpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmhpZGVUb29sYmFyIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBoaWRlVG9vbGJhcih2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oaWRlVG9vbGJhciA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIElubGluZSBUb29sYmFyIGlzIGhpZGRlbiBvciBub3QuICovXG5cdEBJbnB1dCgpXG5cdGdldCBoaWRlSW5saW5lVG9vbGJhcigpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmhpZGVJbmxpbmVUb29sYmFyIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBoaWRlSW5saW5lVG9vbGJhcih2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oaWRlSW5saW5lVG9vbGJhciA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBjb250ZW50IG9mIHRoZSBFZGl0b3IgYXMgSFRNTC4gQWxsb3dzIHRvIGluc2VydCB0ZXh0IGFuZCBIVE1MLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgaW5uZXJIVE1MKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGlubmVySFRNTCh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmlubmVySFRNTCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZWZpbmVzIGFuIG9mZnNldCh4LHkpIGZvciB0aGUgSW5saW5lIFRvb2xiYXIgcG9zaXRpb25pbmcgb24gdGhlIHBhZ2UuICovXG5cdEBJbnB1dCgpXG5cdGdldCBpbmxpbmVUb29sYmFyT2Zmc2V0KCk6IG51bWJlcltdIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmlubGluZVRvb2xiYXJPZmZzZXQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGlubGluZVRvb2xiYXJPZmZzZXQodmFsdWU6IG51bWJlcltdKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmlubGluZVRvb2xiYXJPZmZzZXQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgaWZyYW1lIHNldHRpbmdzIG9mIHRoZSBFZGl0b3IuIFdoZW4gZW5hYmxlZCB0aGUgY29udGVudHMgb2YgdGhlIEVkaXRvciBhcmUgcGxhY2VkIGluc2lkZSBhbiBpZnJhbWUsIGlzb2xhdGVkIGluIGEgc2VwYXJhdGUgZG9tLiBUaGUgZWxlbWVudCBhbGxvd3MgdG8gaW5zZXJ0IGV4dGVybmFsIHJlc291cmNlcyBpbnRvIHRoZSBpZnJhbWUgaWYgbmVlZGVkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgaWZyYW1lU2V0dGluZ3MoKTogRWRpdG9ySWZyYW1lU2V0dGluZ3Mge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaWZyYW1lU2V0dGluZ3MgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGlmcmFtZVNldHRpbmdzKHZhbHVlOiBFZGl0b3JJZnJhbWVTZXR0aW5ncykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5pZnJhbWVTZXR0aW5ncyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIGxhbmd1YWdlLiBVc2VkIGluIGNvbmp1bmN0aW9uIHdpdGggdGhlIHByb3BlcnR5IG1lc3NhZ2VzLiAgKi9cblx0QElucHV0KClcblx0Z2V0IGxvY2FsZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubG9jYWxlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBsb2NhbGUodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sb2NhbGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBhIGxpbWl0IG9uIHRoZSBudW1iZXIgb2YgY2hhcnMgaW5zaWRlIHRoZSBFZGl0b3IuICAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbWF4Q2hhckNvdW50KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5tYXhDaGFyQ291bnQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG1heENoYXJDb3VudCh2YWx1ZTogbnVtYmVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm1heENoYXJDb3VudCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgYW4gb2JqZWN0IHNwZWNpZnlpbmcgc3RyaW5ncyB1c2VkIGluIHRoZSB3aWRnZXQgdGhhdCBjYW4gYmUgbG9jYWxpemVkLiBVc2VkIGluIGNvbmp1bmN0aW9uIHdpdGggdGhlIHByb3BlcnR5IGxhbmd1YWdlLiAgKi9cblx0QElucHV0KClcblx0Z2V0IG1lc3NhZ2VzKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5tZXNzYWdlcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbWVzc2FnZXModmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5tZXNzYWdlcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBmb3JtYXQgb2YgdGhlIGNvbnRlbnQgdGhhdCB3aWxsIGJlIHBhc3RlZCBpbnNpZGUgdGhlIEVkaXRvci4gKi9cblx0QElucHV0KClcblx0Z2V0IHBhc3RlRm9ybWF0KCk6IFBhc3RlRm9ybWF0IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnBhc3RlRm9ybWF0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBwYXN0ZUZvcm1hdCh2YWx1ZTogUGFzdGVGb3JtYXQpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucGFzdGVGb3JtYXQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgcGxhY2Vob2xkZXIgdGhhdCB3aWxsIGJlIHNob3duIHdoZW4gdGhlcmUncyBubyBjb250ZW50IGluc2lkZSB0aGUgRWRpdG9yLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcGxhY2Vob2xkZXIoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnBsYWNlaG9sZGVyIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBwbGFjZWhvbGRlcih2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnBsYWNlaG9sZGVyID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgd2hldGhlciBFZGl0b3IncyBjb250ZW50IGlzIHJlcXVpcmVkIG90IG5vdC4gSWYgc2V0IGFuZCB0aGUgRWRpdG9yJ3MgY29udGVudCBpcyBlbXB0eSwgYSBub3RpZmljYXRpb24gd2lsbCBhcHBlYXIgdG8gbm90aWZ5IHRoYXQgdGhlIEVkaXRvciBjYW5ub3QgYmUgZW1wdHkuICovXG5cdEBJbnB1dCgpXG5cdGdldCByZXF1aXJlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlcXVpcmVkIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCByZXF1aXJlZCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZXF1aXJlZCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHZhbHVlIGlzIHNhbml0aXplZCBmcm9tIFhTUyBjb250ZW50IG9yIG5vdC4gV2hlbiBlbmFibGVkIHNjcmlwdHMgYW5kIG90aGVyIFhTUyB2dWxuZXJhYmlsaXRpZXMgYXJlIG5vdCBhbGxvd2VkIHRvIGV4aXN0IGluc2lkZSB0aGUgRWRpdG9yJ3MgYXMgSFRNTCBjb250ZW50LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc2FuaXRpemVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2FuaXRpemVkIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzYW5pdGl6ZWQodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2FuaXRpemVkID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgd2hldGhlciB0aGUgY2hhciBjb3VudGVyIGlzIHZpc2libGUgb3Igbm90LiBXaGVuIGVuYWJsZWQgaXQgaXMgZGlzcGxheWVkIGluIHRoZSBib3R0b20gcmlnaHQgY29ybmVyLiBJZiBtYXhDaGFyQ291bnQgaXMgc2V0IGFuZCB0aGUgY29udGVudCBjaGFyYWN0ZXJzIGFyZSBlcXVhbCBvciBtb3JlIHRoYW4gNzAlIG9mIHRoZSBtYXhpbXVtIGNoYXIgY291bnQgdGhlIGNvdW50ZXIgaXMgY29sb3JlZCBpbiBvcmRlciB0byB3YXJuIHRoZSB1c2VyLiBJZiB0aGUgY2hhciBjb3VudCBpcyBlcXVhbCBvciBtb3JlIHRoYW4gOTAlIHRoZSBjb3VudGVyIGlzIGFnYWluIGNvbG9yZWQgd2l0aCBhIGRpZmZlcmVudCB3YXJuaW5nIGNvbG9yIHRvIGluZGljYXRlIHRoYXQgdGhlIGNvdW50ZXIgaXMgbmVhciBtYXhpbXVtLiBXaGVuIG1heGltdW0gaXMgcmVhY2hlZCwgdGV4dCBpbnB1dCBpcyBub3QgYWxsb3dlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IHNob3dDaGFyQ291bnQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zaG93Q2hhckNvdW50IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzaG93Q2hhckNvdW50KHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNob3dDaGFyQ291bnQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgcmVmcmVzaCBpbnRlcnZhbCBmb3IgdGhlIFNvdXJjZSBDb2RlL1ByZXZpZXcgUGFuZWwgd2hlbiBTcGxpdCBNb2RlIGlzIGVuYWJsZWQuICAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc3BsaXRNb2RlUmVmcmVzaFRpbWVvdXQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNwbGl0TW9kZVJlZnJlc2hUaW1lb3V0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzcGxpdE1vZGVSZWZyZXNoVGltZW91dCh2YWx1ZTogbnVtYmVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNwbGl0TW9kZVJlZnJlc2hUaW1lb3V0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIHRoZW1lLiBUaGVtZSBkZWZpbmVzIHRoZSBsb29rIG9mIHRoZSBlbGVtZW50ICovXG5cdEBJbnB1dCgpXG5cdGdldCB0aGVtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGhlbWUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRoZW1lKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGhlbWUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgVG9vbGJhciBpdGVtcyBsaXN0LiBFYWNoIGl0ZW0gY2FuIGJlIHN0cmluZyBwb2ludGluZyB0byB0aGUgbmFtZSBvZiB0aGUgaXRlbSBvciBhbiBvYmplY3QgdGhhdCBkZWZpbmVzIGEgY3VzdG9tIGl0ZW0gb3IgYWRkcyBhZGl0aW9uYWwgc2V0dGluZ3MgdG8gYW4gaXRlbS4gVGhlIG5hbWUgb2YgdGhlIGl0ZW1zIGFyZSBjYXNlIGluc2Vuc2l0aXZlLiBBbiBvYmplY3QgZGVmaW5pdGlvbiBzaG91bGQgY29udGFpbiBhIG5hbWUgYXR0cmlidXRlIHRoYXQgcmVmZXJzIHRvIHRoZSBuYW1lIG9mIHRoZSBpdGVtIHdoZW4gbW9kaWZpbmcgYW4gZXhpc3RpbmcgdG9vbGJhciBpdGVtLiBUaGUgbmFtZSBhdHRyaWJ1dGUgZGV0ZXJtaW5lcyB0aGUgYWN0aW9uIG9mIHRoZSBpdGVtLiBJZiBzZXQgdG8gJ2N1c3RvbScgaXQgaXMgcG9zc2libGUgdG8gY3JlYXRlIGEgY3VzdG9tIHRvb2xiYXIgaXRlbS4gSWYgbmFtZSBhdHRyaWJ1dGUgaXMgbm90IHNldCBvciBub3QgdmFsaWQgaXQgaXMgdHJlYXRlZCBhcyBhIHNlcGFyYXRvciwgbm8gYSB0b29sYmFyIGl0ZW0uIFRoZSBmb2xsb3dpbmcgaXRlbXMgYXJlIHN1cHBvcnRlZCBieSBkZWZhdWx0IGJ5IHRoZSBFZGl0b3I6IFNvdXJjZUNvZGUgLSBzaG93cyB0aGUgSFRNTC9QcmV2aWV3IFBhbmVsIGJ5IGhpZGluZyB0aGUgaW5wdXQgcGFuZWwuIEl0ZW0gdHlwZSAtICdUb2dnbGUgYnV0dG9uJy5TcGxpdE1vZGUgLSBzaG93cyBib3RoIGlucHV0IGFuZCBIVE1ML1ByZXZpZXcgUGFuZWwgYnkgc3BsaXR0aW5nIHRoZSBFZGl0b3IgY29udGVudCBpbiB0d28gc2VjdGlvbnMuIEl0ZW0gdHlwZSAtICdUb2dnbGUgYnV0dG9uJ0Z1bGxTY3JlZW4gLSBmaXRzIHRoZSB2aWV3cG9ydCB3aXRoIHRoZSBFZGl0b3IgYnkgZXhwYW5kaW5nIGl0IG92ZXIgdGhlIHBhZ2UgY29udGVudC4gSXRlbSB0eXBlIC0gJ1RvZ2dsZSBidXR0b24nLkFsaWdubWVudCAtIGFsaWducyB0aGUgc2VsZWN0ZWQgY29udGVudC4gSXRlbSB0eXBlIC0gJ0Ryb3AgZG93bicuRm9udE5hbWUgLSBjaGFuZ2VzIHRoZSBmb250IGZhbWlseSBvZiB0aGUgc2VsZWN0ZWQgY29udGVudC4gSXRlbSB0eXBlIC0gJ2Ryb3AtZG93bicuRm9udFNpemUgLSBjaGFuZ2VzIHRoZSBmb250IHNpemUgb2YgdGhlIHNlbGVjdGVkIGNvbnRlbnQuIEl0ZW0gdHlwZSAtICdkcm9wLWRvd24nLkZvcm1hdHMgLSBjaGFuZ2VzIHRoZSBmb3JtYXQgb2YgdGhlIGN1cnJlbnQgc2VsZWN0aW9uLiBJdG1lIHR5cGUgLSAnZHJvcC1kb3duJy5UYWJsZVJvd3MgLSBhbGxvd3MgdG8gaW5zZXJ0L3JlbW92ZSBhIHJvdyBpbnRvIGEgc2VsZWN0ZWQgdGFibGUgZWxlbWVudC4gSXRlbSB0eXBlIC0gJ2Ryb3AtZG93bicuVGFibGVDb2x1bW5zIC0gYWxsb3dzIHRvIGluc2VydC9yZW1vdmUgYSBjb2x1bW4gaW50byBhIHNlbGVjdGVkIHRhYmxlIGVsZW1lbnQuIEl0bWUgdHlwZSAtICdkcm9wLWRvd24nLlRhYmxlVkFsaWduIC0gc2V0cyB0aGUgdmVydGljYWwgYWxpZ25tZW50IG9mIGEgc2VsZWN0ZWQgdGFibGUgY2VsbC4gSXRlbSB0eXBlIC0gJ2Ryb3AtZG93bicuVGFibGVTdHlsZSAtIHNldHMgYWRkaXRpb25hbCBzdHlsaW5nIHRvIGEgc2VsZWN0ZWQgdGFibGUgaW5zaWRlIHRoZSBFZGl0b3IuIEl0ZW0gdHlwZSAtICdkcm9wLWRvd24nLkJhY2tncm91bmRDb2xvciAtIGNoYW5nZXMgdGhlIGJhY2tncm91bmQgY29sb3Igb2YgdGhlIGN1cnJlbnQgc2VsZWN0aW9uLiBJdGVtIHR5cGUgLSAnY29sb3ItaW5wdXQnLkZvbnRDb2xvciAtIGNoYW5nZXMgdGhlIGZvbnQgY29sb3Igb2YgdGhlIGN1cnJlbnQgc2VsZWN0aW9uLiBJdGVtIHR5cGUgPSAnY29sb3ItaW5wdXQnLkJvbGQgLSBzZXRzIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgdGV4dCBhcyBib2xkIG9yIG5vdC4gSXRlbSB0eXBlIC0gJ2J1dHRvbicuSXRhbGljIC0gc2V0cyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHRleHQgYXMgaXRhbGljLiBJdGVtIHR5cGUgLSAnYnV0dG9uJy4gVW5kZXJsaW5lIC0gc2V0cyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHRleHQgYXMgdW5kZXJsaW5lZC4gSXRtZSB0eXBlIC0gJ2J1dHRvbicuU3RyaWtldGhyb3VnaCAtIHNldCB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHRleHQgYXMgc3RyaWtldGhyb3VnaC4gSXRlbSB0eXBlIC0gJ2J1dHRvbicuRGVsZXRlIC0gZGVsZXRlcyB0aGUgY3VycmVudCBzZWxlY3Rpb24uIEl0ZW0gdHlwZSAtICdidXR0b24nLlVuZG8gLSB1bmRvZXMgdGhlIGxhc3Qgb3BlcmF0aW9uLiBJdGVtIHR5cGUgLSAnYnV0dG9uJy5SZWRvIC0gcmVkb2VzIHRoZSBwcmV2aW91cyBvcGVyYXRpb24uIEl0ZW0gdHlwZSAtICdidXR0b24nLkluZGVudCAtIGluZGVudHMgdGhlIGN1cnJlbnQgc2VsZWN0aW9uIG9uY2UuIEl0ZW0gdHlwZSAtICdidXR0b24nLk91dGRlbnQgLSBvdXRkZW50cyB0aGUgY3VycmVudCBzZWxlY3Rpb24gb25jZS4gSXRlbSB0eXBlIC0gJ2J1dHRvbicuT3BlbkxpbmsgLSB0cmlnZ2VycyBhIGh5cGVybGluay4gSXRlbSB0eXBlIC0gJ2J1dHRvbicuRWRpdExpbmsgLSBjcmVhdGVzL2VkaXRzIHRoZSBzZWxlY3RlZCBoeXBlcmxpbmsuIEl0ZW0gdHlwZSAtICdidXR0b24nLkNyZWF0ZUxpbmsgLSBjcmVhdGVzL2VkaXRzIHRoZSBzZWxlY3RlZCBoeXBlcmxpbmsuIEl0ZW0gdHlwZSAtICdidXR0b24nLlJlbW92ZUxpbmsgLSByZW1vdmVzIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgaHlwZXJsaW5rLiBJdGVtIHR5cGUgLSAnYnV0dG9uJy5IeXBlcmxpbmsgLSBzYW1lIGFzIGNyZWF0ZUxpbmssIHRyaWdnZXJzIGEgRGlhbG9nIFdpbmRvdyBmb3IgbGluayBjcmVhdGlvbi4gSXRlbSB0eXBlIC0gJ2J1dHRvbicuQ3V0IC0gQ3V0cyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHRleHQuIEl0ZW0gdHlwZSAtICdidXR0b24nLkNvcHkgLSBjb3BpZXMgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCB0ZXh0LiBJdGVtIHR5cGUgLSAnYnV0dG9uJ1Bhc3RlIC0gcGFzdGVzIHRoZSBjdXJyZW5seSBjb3BpZWQvY3V0IHRleHQgZnJvbSB0aGUgQ2xpcGJvYXJkLiBJdGVtIHR5cGUgPSAnYnV0dG9uJyBvciAnZHJvcC1kb3duJyB3aGVuIGFkdmFuY2VkIGF0dHJpYnV0ZSBpcyBzZXQgdG8gJ3RydWUnLkltYWdlIC0gdHJpZ2dlcnMgYSBEaWFsb2cgV2luZG93IHRvIGluc2VydC9lZGl0IGFuIGltYWdlLiBJdGVtIHR5cGUgLSAnYnV0dG9uJy5Mb3dlckNhc2UgLSBjaGFuZ2VzIHRoZSBjdXJyZW50IHNlbGVjdGlvbiB0byBsb3dlciBjYXNlLiBJdGVtIHR5cGUgLSAnYnV0dG9uJy5VcHBlckNhc2UgLSBjaGFuZ2VzIHRoZSBjdXJyZW50IHNlbGVjdGlvbiB0byB1cHBlciBjYXNlLiBJdGVtIHR5cGUgLSAnYnV0dG9uJy5QcmludCAtIG9wZW5zIHRoZSBicm93c2VyIHByaW50IHByZXZpZXcgd2luZG93LiBJdGVtIHR5cGUgLSAnYnV0dG9uJy5DYXB0aW9uIC0gaW5zZXJ0L3JlbW92ZSBhIGNhcHRpb24gd2hlbiBhIHRhYmxlIGlzIHNlbGVjdGVkLiBJdGVtIHR5cGUgLSAnYnV0dG9uJy5DbGVhckZvcm1hdCAtIHJlbW92ZXMgdGhlIGZvcm1hdHRpbmcgb2YgdGhlIGN1cnJudGx5IHNlbGVjdGVkIHRleHQuIEl0ZW0gdHlwZSAtICdidXR0b24nLlRhYmxlIC0gdHJpZ2dlcnMgYSBEaWFsb2cgV2luZG93IHRvIGluc2VydCBhIHRhYmxlLiBJdGVtIHR5cGUgLSAnYnV0dG9uJy5UYWJsZUhlYWRlciAtIGluc2VydC9yZW1vdmUgYSBoZWFkZXIgcm93IHRvIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgdGFibGUuIEl0ZW0gdHlwZSAtICdidXR0b24nLk9yZGVyZWRMaXN0IC0gaW5zZXJ0L3JlbW92ZSBhbiBvcmRlciBsaXN0LiBJdGVtIHR5cGUgPSAnYnV0dG9uJy5Vbm9yZGVyZWRMaXN0IC0gaW5zZXJ0L3JlbW92ZSBhbiB1bm9yZGVyZWQgbGlzdC4gSXRlbSB0eXBlIC0gJ2J1dHRvbicuU3Vic2NyaXB0IC0gY2hhbmdlcyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHRleHQgdG8gc3Vic2NyaXB0LiBJdGVtIHR5cGUgLSAnYnV0dG9uJy5TdXBlcnNjcmlwdCAtIGNoYW5nZXMgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCB0ZXh0IHRvIHN1cGVyc2NyaXB0LiBJdGVtIHR5cGUgLSAnYnV0dG9uJy5GaW5kQW5kUmVwbGFjZSAtIG9wZW5zIGEgZGlhbG9nIHRoYXQgYWxsb3dzIHRvIGZpbmQgYW5kIHJlcGxhY2UgdGV4dCBpbnNpZGUgdGhlIEVkaXRvcidzIGNvbnRlbnQgc2VjdGlvbi4gSXRlbSB0eXBlIC0gJ2J1dHRvbicuICBUaGUgaW5saW5lVG9vbGJhckl0ZW1zIGF0dHJpYnV0ZSBpcyBhcHBsaWNhYmxlIG9ubHkgdG8gdGhlIGZvbGxvd2luZyBpdGVtczogJ3RhYmxlJywgJ2ltYWdlJywgJ2h5cGVybGluaycuIEl0IGFjY2VwdHMgdGhlIHNhbWUgdHlwZSBvZiB2YWx1ZSBhcyB0b29sYmFySXRlbXMgcHJvcGVydHkgYnV0IHRoZSB0b29sYmFyIGl0ZW1zIHdpbGwgYmUgcGxhY2VkIGluc2luZGUgdGhlIElubGluZSBUb29sYmFyIGluc3RlYWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCB0b29sYmFySXRlbXMoKTogVG9vbGJhckl0ZW1bXSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50b29sYmFySXRlbXMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRvb2xiYXJJdGVtcyh2YWx1ZTogVG9vbGJhckl0ZW1bXSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50b29sYmFySXRlbXMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgdG9vbGJhciBtb2RlIG9mIHRoZSBFZGl0b3IuIFRoZSBtYWluIHRvb2xiYXIgb2YgdGhlIEVkaXRvciBjYW4gYXBwZWFyIGFzIGEgUmliYm9uIG9yIGFzIGEgTWVudS4gKi9cblx0QElucHV0KClcblx0Z2V0IHRvb2xiYXJNb2RlKCk6IFRvb2xiYXJNb2RlIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRvb2xiYXJNb2RlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0b29sYmFyTW9kZSh2YWx1ZTogVG9vbGJhck1vZGUpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudG9vbGJhck1vZGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQWxsb3dzIHRvIGNvbmZpZ3VyZSB0aGUgU2luZ2xlTGluZVJpYmJvbiBhcHBlYXJhbmNlIGJ5IGNoYW5naW5nIHRoZSBvcmRlciBhbmQgaXRlbXMgb2YgdGhlIGdyb3Vwcy4gKi9cblx0QElucHV0KClcblx0Z2V0IHRvb2xiYXJSaWJib25Db25maWcoKTogeyBuYW1lOiBzdHJpbmcsIGdyb3VwczogeyBuYW1lOiBzdHJpbmcsIGl0ZW1zOiBzdHJpbmdbXSB9W10gfVtdIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRvb2xiYXJSaWJib25Db25maWcgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRvb2xiYXJSaWJib25Db25maWcodmFsdWU6IHsgbmFtZTogc3RyaW5nLCBncm91cHM6IHsgbmFtZTogc3RyaW5nLCBpdGVtczogc3RyaW5nW10gfVtdIH1bXSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50b29sYmFyUmliYm9uQ29uZmlnID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIGZvcm1hdCBvZiB0aGUgY29udGVudCB0aGF0IHdpbGwgYmUgcGFzdGVkIGluc2lkZSB0aGUgRWRpdG9yLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdG9vbGJhclZpZXdNb2RlKCk6IFRvb2xiYXJWaWV3TW9kZSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50b29sYmFyVmlld01vZGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRvb2xiYXJWaWV3TW9kZSh2YWx1ZTogVG9vbGJhclZpZXdNb2RlKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRvb2xiYXJWaWV3TW9kZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTdGlja3MgdGhlIFRvb2xiYXIgdG8gdGhlIHRvcCBvZiB0aGUgd2luZG93IGFuZCBzdGF5cyB0aGVyZSB3aGlsZSBzY3JvbGxpbmcuICovXG5cdEBJbnB1dCgpXG5cdGdldCB0b29sYmFyU3RpY2t5KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudG9vbGJhclN0aWNreSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdG9vbGJhclN0aWNreSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50b29sYmFyU3RpY2t5ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIElmIGlzIHNldCB0byB0cnVlLCB0aGUgZWxlbWVudCBjYW5ub3QgYmUgZm9jdXNlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IHVuZm9jdXNhYmxlKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudW5mb2N1c2FibGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHVuZm9jdXNhYmxlKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnVuZm9jdXNhYmxlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgdmFsdWUgb2YgdGhlIEVkaXRvci4gKi9cblx0QElucHV0KClcblx0Z2V0IHZhbHVlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC52YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdmFsdWUodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC52YWx1ZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCBvbiBibHVyIGlmIHRoZSBjb250ZW50IGlzIGNoYW5nZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHQqL1xuXHRAT3V0cHV0KCkgb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCBiZWZvcmUgYSBUb29sYmFyIGFjdGlvbiBpcyBzdGFydGVkLiBUaGUgZXZlbnQgY2FuIGJlIGNhbmNlbGVkIHZpYSBldmVudC5wcmV2ZW50RGVmYXVsdCgpLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Ki9cblx0QE91dHB1dCgpIG9uQWN0aW9uU3RhcnQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgVG9vbGJhciBhY3Rpb24gaGFzIGVuZGVkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Ki9cblx0QE91dHB1dCgpIG9uQWN0aW9uRW5kOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIENvbnRleHQgbWVudSBpdGVtIGhhcyBiZWVuIGNsaWNrZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHQqL1xuXHRAT3V0cHV0KCkgb25Db250ZXh0TWVudUl0ZW1DbGljazogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIENvbnRleHQgTWVudSBpcyBvcGVuZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHQqL1xuXHRAT3V0cHV0KCkgb25Db250ZXh0TWVudU9wZW46IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBDb250ZXh0IE1lbnUgaXMgb3BlbmluZy4gVGhlIGV2ZW50IGNhbiBiZSBjYW5jZWxlZCB2aWEgZXZlbnQucHJldmVudERlZmF1bHQoKS5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvbkNvbnRleHRNZW51T3BlbmluZzogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIENvbnRleHQgTWVudSBpcyBjbG9zZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHQqL1xuXHRAT3V0cHV0KCkgb25Db250ZXh0TWVudUNsb3NlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgQ29udGV4dCBNZW51IGlzIGNsb3NpbmcuIFRoZSBldmVudCBjYW4gYmUgY2FuY2VsZWQgdmlhIGV2ZW50LnByZXZlbnREZWZhdWx0KCkuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHQqL1xuXHRAT3V0cHV0KCkgb25Db250ZXh0TWVudUNsb3Npbmc6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGFuIGltYWdlL3RhYmxlIHJlc2l6aW5nIGhhcyBzdGFydGVkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Ki9cblx0QE91dHB1dCgpIG9uUmVzaXplU3RhcnQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGFuIGltYWdlL3RhYmxlIHJlc2l6aW5nIGhhcyBlbmRlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvblJlc2l6ZUVuZDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGlubGluZSBUb29sYmFyIGlzIG9wZW5lZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvbklubGluZVRvb2xiYXJPcGVuOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgaW5saW5lIFRvb2xiYXIgaXMgY2xvc2VkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Ki9cblx0QE91dHB1dCgpIG9uSW5saW5lVG9vbGJhckNsb3NlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgRHJvcCBEb3duIFRvb2xiYXIgaXMgb3BlbmVkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Ki9cblx0QE91dHB1dCgpIG9uRHJvcERvd25Ub29sYmFyT3BlbjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIERyb3AgRG93biBUb29sYmFyIGlzIGNsb3NlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvbkRyb3BEb3duVG9vbGJhckNsb3NlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgdGhlIERpYWxvZyBXaW5kb3cgaXMgb3BlbmVkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Ki9cblx0QE91dHB1dCgpIG9uRGlhbG9nT3BlbjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIGJlZm9yZSB0aGUgRGlhbG9nIFdpbmRvdyBpcyBvcGVuZWQuIFRoZSBldmVudCBjYW4gYmUgcHJldmVudGVkIHZpYSBldmVudC5wcmV2ZW50RGVmYXVsdCgpLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Ki9cblx0QE91dHB1dCgpIG9uRGlhbG9nT3BlbmluZzogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIERpYWxvZyBXaW5kb3cgaXMgY2xvc2VkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Ki9cblx0QE91dHB1dCgpIG9uRGlhbG9nQ2xvc2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCBiZWZvcmUgdGhlIERpYWxvZyBXaW5kb3cgaXMgY2xvc2VkLiBUaGUgZXZlbnQgY2FuIGJlIHByZXZlbnRlZCB2aWEgZXZlbnQucHJldmVudERlZmF1bHQoKS5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvbkRpYWxvZ0Nsb3Npbmc6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSB1cGxvYWRpbmcgb2YgYW4gaW1hZ2UgaXMgc3VjY2Vzc2Z1bC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvbkltYWdlVXBsb2FkU3VjY2VzczogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHVwbG9hZGluZyBvZiBhbiBpbWFnZSBpcyB1bnN1Y2Nlc3NmdWwuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHQqL1xuXHRAT3V0cHV0KCkgb25JbWFnZVVwbG9hZEZhaWxlZDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSBUb29sYmFyIGl0ZW0gaXMgY2xpY2tlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvblRvb2Jhckl0ZW1DbGljazogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSBtZXNzYWdlIGlzIGNsb3NlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvbk1lc3NhZ2VDbG9zZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSBtZXNzYWdlIGlzIG9wZW5lZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvbk1lc3NhZ2VPcGVuOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gQmx1cnMgdGhlIGNvbnRlbnQgb2YgdGhlIEVkaXRvci4gXG5cdCovXG4gICAgcHVibGljIGJsdXIoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmJsdXIoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIENsZWFycyB0aGUgY29udGVudCBvZiB0aGUgRWRpdG9yLiBcblx0Ki9cbiAgICBwdWJsaWMgY2xlYXJDb250ZW50KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbGVhckNvbnRlbnQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbGVhckNvbnRlbnQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ29sbGFwc2UgdGhlIFRvb2xiYXIgaWYgdGhlIHRvb2xiYXJWaWV3TW9kZSBpcyBzZXQgdG8gJ3RvZ2dsZScuIFxuXHQqL1xuICAgIHB1YmxpYyBjb2xsYXBzZVRvb2xiYXIoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNvbGxhcHNlVG9vbGJhcigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNvbGxhcHNlVG9vbGJhcigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEaXNhYmxlcyBhIFRvb2xiYXIgaXRlbS4gXG5cdCogQHBhcmFtIHtzdHJpbmd9IGl0ZW1OYW1lLiBUaGUgbmFtZSBvZiB0aGUgdG9vbGJhciBpdGVtIHRvIGRpc2FibGUuXG5cdCovXG4gICAgcHVibGljIGRpc2FibGVUb29sYmFySXRlbShpdGVtTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVUb29sYmFySXRlbShpdGVtTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZVRvb2xiYXJJdGVtKGl0ZW1OYW1lKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRXhwYW5kIHRoZSBUb29sYmFyIGlmIHRoZSB0b29sYmFyVmlld01vZGUgaXMgc2V0IHRvICd0b2dnbGUnLiBcblx0Ki9cbiAgICBwdWJsaWMgZXhwYW5kVG9vbGJhcigpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZXhwYW5kVG9vbGJhcigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmV4cGFuZFRvb2xiYXIoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRW5hYmxlcyBhIHByZXZpb3VzbHkgZGlzYWJsZWQgVG9vbGJhciBpdGVtLiBcblx0KiBAcGFyYW0ge3N0cmluZ30gaXRlbU5hbWUuIFRoZSBuYW1lIG9mIHRoZSB0b29sYmFyIGl0ZW0gdG8gZW5hYmxlLlxuXHQqL1xuICAgIHB1YmxpYyBlbmFibGVUb29sYmFySXRlbShpdGVtTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmVuYWJsZVRvb2xiYXJJdGVtKGl0ZW1OYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5lbmFibGVUb29sYmFySXRlbShpdGVtTmFtZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEV4ZWN1dGVzIGEgY29tbWFuZCB2aWEgdGhlIG5hdGl2ZSBleGVjQ29tbWFuZCBtZXRob2QuIFRoZSBtZXRob2QgcmV0dXJucyB0cnVlIG9yIGZhbHNlIGRlcGVuZGluZyBvbiB3aGV0aGVyIHRoZSBleGVjdXRpb24gd2FzIHN1Y2Nlc3NmdWwgb3Igbm90LiBUaGUgZm9sbG93aW5nIGxpc3Qgb2YgY29tbWFuZHMgY2FuIGJlIGVleGVjdXRlZDogYm9sZCAtIG1ha2VzIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgY29udGVudCBib2xkLiBFeGFtcGxlOiBlZGl0b3IuZXhlY3V0ZUNvbW1hbmQoJ2JvbGQnKTtpdGFsaWMgLSBtYWtlcyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGNvbnRlbnQgaXRhbGljLiBFeGFtcGxlOiBlZGl0b3IuZXhlY3V0ZUNvbW1hbmQoJ2l0YWxpYycpO3VuZGVsaW5lZCAtIG1ha2VzIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgY29udGVudCB1bmRlcmxpbmVkLiBFeGFtcGxlOiBlZGl0b3IuZXhlY3V0ZUNvbW1hbmQoJ3VuZGVybGluZScpO3N0cmlrZVRocm91Z2ggLSBhcHBsaWVzIGEgc2luZ2xlIGxpbmUgc3RyaWtlIHRocm91Z2ggZm9ybWF0dGluZyB0byB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGNvbnRlbnQuIEV4YW1wbGU6IGVkaXRvci5leGVjdXRlQ29tbWFuZCgnc3RyaWtlVGhyb3VnaCcpO3N1cGVyc2NyaXB0IC0gc2V0cyB0aGUgc2VsZWN0ZWQgY29udGVudCBhcyBzdXBlcnNjcmlwdC4gRXhhbXBsZTogZWRpdG9yLmV4ZWN1dGVDb21tYW5kKCdzdXBlcnNjcmlwdCcpO3N1YnNjcmlwdCAtIHNldHMgdGhlIHNlbGVjdGVkIGNvbnRlbnQgYXMgc3VwZXJzY3JpcHQuIEV4YW1wbGU6IGVkaXRvci5leGVjdXRlQ29tbWFuZCgnc3Vic2NyaXB0Jyk7dXBwZXJjYXNlIC0gY2hhbmdlcyB0aGUgY2FzZSBvZiB0aGUgY3VycmVudCBzZWxlY3Rpb24gdG8gdXBwZXIuIEV4YW1wbGU6IGVkaXRvci5leGVjdXRlQ29tbWFuZCgndXBwZXJjYXNlJyk7bG93ZXJjYXNlIC0gY2hhbmdlcyB0aGUgY2FzZSBvZiB0aGUgY3VycmVudCBzZWxlY3Rpb24gdG8gbG93ZXIuIEV4YW1wbGU6IGVkaXRvci5leGVjdXRlQ29tbWFuZCgnbG93ZXJjYXNlJyk7Zm9yZUNvbG9yIC0gY2hhbmdlcyB0aGUgZm9udCBjb2xvciBvZiB0aGUgY3VycmVudCBjb250ZW50IHNlbGVjdGlvbi4gRXhhbXBsZTogZWRpdG9yLmV4ZWN1dGVDb21tYW5kKCdmb3JlQ29sb3InLCAnIzAwMDAwMCcpO2ZvbnROYW1lIC0gY2hhbmdlcyB0aGUgZm9udCBuYW1lIGZvciB0aGUgc2VsZWN0ZWQgY29udGVudC4gRXhhbXBsZTogZWRpdG9yLmV4ZWN1dGVDb21tYW5kKCdmb250TmFtZScsICdBcmlhbCcpO2ZvbnRTaXplIC0gY2hhbmdlcyB0aGUgZm9udCBzaXplIG9mIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgY29udGVudC4gRXhhbXBsZTogZWRpdG9yLmV4ZWN1dGVDb21tYW5kKCdmb250U2l6ZScsICcxNXB4Jyk7aGlsaXRlQ29sb3IgLSBjaGFuZ2VzIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIGN1cnJlbnQgc2VsZWN0aW9uLiBFeGFtcGxlOiBlZGl0b3IuZXhlY3V0ZUNvbW1hbmQoJ2hpbGl0ZUNvbG9yJywgJyMwMDAwMDAnKTtqdXN0aWZ5Q2VudGVyIC0gYWxpZ25zIHRoZSBjb250ZW50IHRvIHRoZSBjZW50ZXIuIEV4YW1wbGU6IGVkaXRvci5leGVjdXRlQ29tbWFuZCgnanVzdGlmeUNlbnRlcicpO2p1c3RpZnlGdWxsIC0gYWxpZ25zIHRoZSBjb250ZW50IHRvIGJlIGZ1bGx5IGp1c3RpZmllZC4gRXhhbXBsZTogZWRpdG9yLmV4ZWN1dGVDb21tYW5kKCdqdXN0aWZ5RnVsbCcpO2p1c3RpZnlMZWZ0IC0gYWxpZ25zIHRoZSBjb250ZW50IHRvIHRoZSBsZWZ0LiBFeGFtcGxlOiBlZGl0b3IuZXhlY3V0ZUNvbW1hbmQoJ2p1c3RpZnlMZWZ0Jyk7anVzdGlmeVJpZ2h0IC0gYWxpZ25zIHRoZSBjb250ZW50IHRvIHRoZSByaWdodC4gRXhhbXBsZTogZWRpdG9yLmV4ZWN1dGVDb21tYW5kKCdqdXN0aWZ5UmlnaHQnKTt1bmRvIC0gYWxsb3dzIHRvIHVuZG8gdGhlIHByZXZpb3VzIGFjdGlvbi4gRXhhbXBsZTogZWRpdG9yLmV4ZWN1dGVDb21tYW5kKCd1bmRvJyk7cmVkbyAtIGFsbG93cyB0byByZWRvIHRoZSBwcmV2aW91cyBhY3Rpb25zLiBFeGFtcGxlOiBlZGl0b3IuZXhlY3V0ZUNvbW1hbmQoJ3JlZG8nKTtjcmVhdGVMaW5rIC0gY3JlYXRlcyBhIGh5cGVybGluayBpbiB0aGUgY29udGVudCBzZWN0aW9uIG9mIHRoZSBFZGl0b3IuIEV4YW1wbGU6IGVkaXRvci5leGVjdXRlQ29tbWFuZCgnY3JlYXRlTGluaycsIHsgdGV4dDogJ0xpbmtzJywgdXJsOiAnaHR0cDovLycsIHRpdGxlIDogJ0xpbmsnIH0pO2luZGVudCAtIGluZGVudHMgdGhlIGNvbnRlbnQgd2l0aCBvbmUgbGV2ZWwuIEV4YW1wbGU6IGVkaXRvci5leGVjdXRlQ29tbWFuZCgnaW5kZW50Jyk7b3V0ZGVudCAtIG91dGRlbnRzIHRoZSBjb250ZW50IHdpdGggb25lIGxldmVsLiBFeGFtcGxlOiBlZGl0b3IuZXhlY3V0ZUNvbW1hbmQoJ291dGRlbnQnKTtpbnNlcnRIVE1MIC0gaW5zZXJ0IGFuIEhUTUwgY29udGVudCBhcyBzdHJpbmcgYXQgdGhlIGN1cnJlbnQgY3Vyc29yIGxvY2F0aW9uLiBFeGFtcGxlOiBlZGl0b3IuZXhlY3V0ZUNvbW1hbmQoJ2luc2VydEhUTUwnLCAnVGV4dCcpO2luc2VydE9yZGVyZWRMaXN0IC0gaW5zZXJ0cyBhIG5ldyBudW1iZXJlZCBsaXN0IGl0ZW0uIEV4YW1wbGU6IGVkaXRvci5leGVjdXRlQ29tbWFuZCgnaW5zZXJ0T3JkZXJlZExpc3QnKTtpbnNlcnRVbm9yZGVyZWRMaXN0IC0gaW5zZXJ0cyBhIG5ldyBidWxsZXRlZCBsaXN0IGl0ZW0uIEV4YW1wbGU6IGVkaXRvci5leGVjdXRlQ29tbWFuZCgnaW5zZXJ0VW5vcmRlcmVkTGlzdCcpO3JlbW92ZUZvcm1hdCAtIHJlbW92ZXMgdGhlIGZvcm1hdHRpbmcgc3R5bGVzIGZyb20gY3VycmVudGx5IHNlbGVjdGVkIHRleHQuIEV4YW1wbGU6IGVkaXRvci5leGVjdXRlQ29tbWFuZCgncmVtb3ZlRm9ybWF0Jyk7aW5zZXJ0VGV4dCAtIGluc2VydHMgYSB0ZXh0IGF0IHRoZSBjdXJyZW50IGN1cnNvciBsb2NhdGlvbi4gRXhhbXBsZTogZWRpdG9yLmV4ZWN1dGVDb21tYW5kKCdpbnNlcnRUZXh0JywgJ1NvbWUgdGV4dCB0byBpbnNlcnQnKTtpbnNlcnRJbWFnZSAtIGluc2VydHMgYW4gaW1hZ2UgYXQgdGhlIGN1cnJlbnQgY3Vyc29yIGxvY2F0aW9uLiBFeGFtcGxlOiBlZGl0b3IuZXhlY3V0ZUNvbW1hbmQoJ2luc2VydEltYWdlJywgeyB1cmw6ICdodHRwczovL3d3dy5odG1sZWxlbWVudHMuY29tL2RlbW9zL2ltYWdlcy9jYXJvdXNlbC1tZWRpdW0tMi5qcGcnfSk7IFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBjb21tYW5kTmFtZS4gVGhlIG5hbWUgb2YgdGhlIGNvbW1hbmQgdG8gZXhlY3V0ZS5cblx0KiBAcGFyYW0ge3N0cmluZyB8IG51bWJlcn0gdmFsdWU/LiBUaGUgdmFsdWUgZm9yIHRoZSBjb21tYW5kLiBTb21lIGNvbW1hbmRzIHJlcXVpcmUgYSB2YWx1ZSB0byBiZSBwYXNzZWQsIG90aGVycyBkbyBub3QuXG5cdCogQHJldHVybnMge2Jvb2xlYW59XG4gICovXG5cdHB1YmxpYyBhc3luYyBleGVjdXRlQ29tbWFuZChjb21tYW5kTmFtZSwgdmFsdWU/KTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmV4ZWN1dGVDb21tYW5kKGNvbW1hbmROYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBGb2N1c2VzIHRoZSBjb250ZW50IG9mIHRoZSBFZGl0b3IuIFxuXHQqL1xuICAgIHB1YmxpYyBmb2N1cygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgY2hhcmFjdGVycyBpbnNpZGUgdGhlIEVkaXRvcidzIGNvbnRlbnQuICBcblx0KiBAcmV0dXJucyB7bnVtYmVyfVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0Q2hhckNvdW50KCk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRDaGFyQ291bnQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJldHVybnMgdGhlIGN1cnJlbnQgc2VsZWN0aW9uIHJhbmdlLiBCeSBkZWZhdWx0IHRoZSByZXN1bHQgaXMgYW4gb2JqZWN0IG9mIHR5cGUgUmFuZ2UsIGJ1dCBpZiB0aGUgZWRpdE1vZGUgcHJvcGVydHkgaXMgc2V0IHRvICdtYXJrZG93bicgdGhlIHJldHVybmVkIHZhbHVlIGlzIGFuIG9iamVjdCBpbmRpY2F0aW5nIHRoZSBzdGFydC9lbmQgaW5kZXhlcyBvZiB0aGUgY3VycmVudCBzZWxlY3Rpb24uICBcblx0KiBAcmV0dXJucyB7YW55fVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0U2VsZWN0aW9uUmFuZ2UoKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldFNlbGVjdGlvblJhbmdlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRoZSBjb250ZW50IG9mIHRoZSBFZGl0b3IgYXMgSFRNTC4gV2hlbiBlZGl0TW9kZSBpcyBzZXQgdG8gJ21hcmtkb3duJyB0aGUgbWFya2Rvd24gaXMgcGFyc2VkIGFuZCByZXR1cm5lZCBhcyBIVE1MLiBcblx0KiBAcmV0dXJucyB7c3RyaW5nfVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0SFRNTCgpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0SFRNTCgpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0aGUgY29udGVudCBvZiB0aGUgRWRpdG9yIGFzIHRleHQuIFxuXHQqIEByZXR1cm5zIHtzdHJpbmd9XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRUZXh0KCk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRUZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBIaWRlcyBhIHNwZWNpZmljIG1lc3NhZ2Ugb3IgYWxsIG1lc3NhZ2VzIGlmIG5vIGFyZ3VtZW50IGlzIHByb3ZpZGVkLiBcblx0KiBAcGFyYW0ge0hUTUxFbGVtZW50IHwgc3RyaW5nIHwgbnVtYmVyfSBpdGVtPy4gSGlkZXMgYSBzcGVjaWZpYyBtZXNzYWdlLiBUaGUgYXJndW1lbnQgY2FuIGJlIGEgRE9NIHJlZmVyZW5jZSB0byBhIHNwZWNpZmljIGl0ZW0sIGl0J3MgaW5kZXggb3IgaXQncyBpZC4gSWYgdGhlIGFyZ3VtZW50IGlzIG5vdCBwcm92aWRlZCB0aGVuIGFsbCBtZXNzYWdlcyB3aWxsIGJlIGNsb3NlZC5cblx0Ki9cbiAgICBwdWJsaWMgaGlkZU1lc3NhZ2UoaXRlbT86IEhUTUxFbGVtZW50IHwgc3RyaW5nIHwgbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmhpZGVNZXNzYWdlKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmhpZGVNZXNzYWdlKGl0ZW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBIaWRlcyB0aGUgbGFzdCBzaG93biBtZXNzYWdlLiBcblx0Ki9cbiAgICBwdWJsaWMgaGlkZUxhc3RNZXNzYWdlKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5oaWRlTGFzdE1lc3NhZ2UoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5oaWRlTGFzdE1lc3NhZ2UoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2hvd3MgYSBjdXN0b20gbWVzc2FnZSBpbnNpZGUgdGhlIEVkaXRvci4gXG5cdCogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UuIFRoZSB0ZXh0IG1lc3NhZ2UgdG8gYmUgZGlzcGxheWVkLlxuXHQqIEBwYXJhbSB7YW55fSBzZXR0aW5ncz8uIEFkZGl0aW9uYWwgc2V0dGluZ3MgdGhhdCBjYW4gYmUgYXBwbGllZCB0byB0aGUgVG9hc3QgZWxlbWVudCB0aGF0IGhhbmRsZXMgdGhlIG1lc3NhZ2VzLiBUaGlzIHBhcmFtZXRlciBzaG91bGQgY29udGFpbiBvbmx5IHZhbGlkIFRvYXN0IHByb3BlcnRpZXMgYW5kIHZhbHVlcy5cblx0KiBAcmV0dXJucyB7SFRNTEVsZW1lbnQgfCB1bmRlZmluZWR9XG4gICovXG5cdHB1YmxpYyBhc3luYyBzaG93TWVzc2FnZShtZXNzYWdlLCBzZXR0aW5ncz8pOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuc2hvd01lc3NhZ2UobWVzc2FnZSwgc2V0dGluZ3MpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2VsZWN0cyB0aGUgdGV4dCBpbnNpZGUgRWRpdG9yJ3MgY29udGVudC4gXG5cdCovXG4gICAgcHVibGljIHNlbGVjdEFsbCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0QWxsKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0QWxsKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNlbGVjdHMgYSByYW5nZSBvZiB0ZXh0IGluc2lkZSB0aGUgRWRpdG9yLiBUaGUgbWV0aG9kIHdpbGwgZmluZCB0aGUgbm9kZXMgY29udGFpbmluZyB0aGUgdGV4dCBmcm9tIHRoZSBzdGFydCB0byB0aGUgZW5kIGluZGV4ZXMgYW5kIHdpbGwgc2VsZWN0IHRoZW0gYXMgcmFuZ2VzLiBIb3dldmVyLCBjdXJyZW50bHkgb25seSBGaXJlRm94IHN1cHBvcnRzIG11bHRpcGxlIHJhbmdlIHNlbGVjdGlvbi4gVGhlIHJlc3Qgb2YgdGhlIGJyb3dzZXJzIHdpbGwgb25seSBzZWxlY3QgdGhlIGZpcnN0IG5vZGUuIElmIHRoZSBlZGl0b3IgaXMgaW4gJ2h0bWwnIGVkaXRNb2RlIHRoZW4gdGhlIGV4cGVjdGVkIHRleHQgd2lsbCBiZSBzZWxlY3RlZCByZWdhcmRsZXNzIG9mIHRoZSBicm93c2VyIGJlY2F1c2UgdGhlcmUncyBvbmx5IG9uZSBub2RlIGluc2lkZSB0aGUgZWRpdG9yLiBcblx0KiBAcGFyYW0ge251bWJlcn0gc3RhcnRJbmRleC4gVGhlIHN0YXJ0IGluZGV4IHRvIHNlbGVjdCBmcm9tLlxuXHQqIEBwYXJhbSB7bnVtYmVyfSBlbmRJbmRleC4gVGhlIGVuZCBpbmRleCB0byBzZWxlY3QgdG8uXG5cdCovXG4gICAgcHVibGljIHNlbGVjdFJhbmdlKHN0YXJ0SW5kZXg6IG51bWJlciwgZW5kSW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zZWxlY3RSYW5nZShzdGFydEluZGV4LCBlbmRJbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0UmFuZ2Uoc3RhcnRJbmRleCwgZW5kSW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDbGVhcnMgdGhlIGxvY2FsIHN0b3JhZ2UgZnJvbSBwcmV2aW91c2x5IHN0b3JlZCBzdGF0ZXMgb2YgdGhlIEVkaXRvciB3aXRoIHRoZSBjdXJyZW50IGlkLiBcblx0Ki9cbiAgICBwdWJsaWMgY2xlYXJTdGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xlYXJTdGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNsZWFyU3RhdGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2F2ZXMgdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIEVkaXRvciB0byBsb2NhbCBzdG9yYWdlLiBSZXF1aXJlcyBhbiBpZCB0byBiZSBzZXQgdG8gdGhlIEVkaXRvci4gXG5cdCovXG4gICAgcHVibGljIHNhdmVTdGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2F2ZVN0YXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2F2ZVN0YXRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIExvYWRzIHRoZSBsYXN0IHN0b3JlZCBzdGF0ZSBvZiB0aGUgRWRpdG9yIGZyb20gbG9jYWwgc3RvcmFnZS4gUmVxdWlyZXMgYW4gaWQgdG8gYmUgc2V0IHRvIHRoZSBFZGl0b3IuIFxuXHQqL1xuICAgIHB1YmxpYyBsb2FkU3RhdGUoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmxvYWRTdGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmxvYWRTdGF0ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIEVkaXRvciBpbnRvIFNwbGl0IE1vZGUuIEluIHNwbGl0IG1vZGUgdGhlIEhUTUwvTWFya2Rvd24gZWRpdG9yIGFuZCBTb3VyY2VDb2RlL1ByZXZpZXcgcGFuZWxzIGFyZSB2aXNpYmxlLiBcblx0KiBAcGFyYW0ge2Jvb2xlYW59IHZhbHVlPy4gRGV0ZXJtaW5lcyB3aGV0aGVyIHRvIGVudGVyIG9yIGxlYXZlIHNwbGl0IG1vZGUuIEJ5IGRlZmF1bHQgdGhlIGFyZ3VtZW50IGlzIG5vdCBwYXNzZWQgYW5kIHRoZSBtb2RlIGlzIHRvZ2dsZWQuXG5cdCovXG4gICAgcHVibGljIHNwbGl0TW9kZSh2YWx1ZT86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc3BsaXRNb2RlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zcGxpdE1vZGUodmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIEVkaXRvciBpbnRvIFNvdXJjZUNvZGUvUHJldmlldyBNb2RlLiBJbiB0aGlzIG1vZGUgdGhlIEhUTUwgdmlldyBwYW5lbCBpcyBkaXNwbGF5ZWQuIFxuXHQqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsdWU/LiBEZXRlcm1pbmVzIHdoZXRoZXIgdG8gZW50ZXIgb3IgbGVhdmUgc3BsaXQgbW9kZS4gQnkgZGVmYXVsdCB0aGUgYXJndW1lbnQgaXMgbm90IHBhc3NlZCBhbmQgdGhlIG1vZGUgaXMgdG9nZ2xlZC5cblx0Ki9cbiAgICBwdWJsaWMgcHJldmlld01vZGUodmFsdWU/OiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnByZXZpZXdNb2RlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5wcmV2aWV3TW9kZSh2YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgRWRpdG9yIGludG8gRnVsbCBTY3JlZW4gTW9kZS4gSWYgZW5hYmxlZCB0aGUgRWRpdG9yIGlzIHBvc2l0aW9uZWQgYWJvdmUgdGhlIHBhZ2UgY29udGVudCBhbmQgZmlsbHMgdGhlIHNjcmVlbi4gXG5cdCogQHBhcmFtIHtib29sZWFufSB2YWx1ZT8uIERldGVybWluZXMgd2hldGhlciB0byBlbnRlciBvciBsZWF2ZSBzcGxpdCBtb2RlLiBCeSBkZWZhdWx0IHRoZSBhcmd1bWVudCBpcyBub3QgcGFzc2VkIGFuZCB0aGUgbW9kZSBpcyB0b2dnbGVkLlxuXHQqL1xuICAgIHB1YmxpYyBmdWxsU2NyZWVuTW9kZSh2YWx1ZT86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZnVsbFNjcmVlbk1vZGUodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmZ1bGxTY3JlZW5Nb2RlKHZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRXhwb3J0cyB0aGUgY29udGVudCBvZiB0aGUgRWRpdG9yIGluIHRoZSBkZXNpcmVkIGZvcm1hdC4gVGhlIGN1cnJlbnRseSBzdXBwb3J0ZWQgZm9ybWF0cyBhcmU6IEhUTUwsIE1hcmtkb3duIGFuZCBQREYuIFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBkYXRhRm9ybWF0LiBUaGUgZXhwZWN0ZWQgZmlsZSBmb3JtYXQuXG5cdCogQHBhcmFtIHthbnl9IGNhbGxiYWNrPy4gQSBjYWxsYmFjayB0aGF0IGlzIGV4ZWN1dGVkIGJlZm9yZSB0aGUgZGF0YSBpcyBleHBvcnRlZC4gQWxsb3dzIHRvIG1vZGlmeSB0aGUgb3V0cHV0LlxuXHQqL1xuICAgIHB1YmxpYyBleHBvcnREYXRhKGRhdGFGb3JtYXQ6IHN0cmluZywgY2FsbGJhY2s/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZXhwb3J0RGF0YShkYXRhRm9ybWF0LCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZXhwb3J0RGF0YShkYXRhRm9ybWF0LCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEltcG9ydHMgdGhlIGNvbnRlbnQgb2YgYSBmaWxlIHRvIHRoZSBFZGl0b3IuIFRoZSBjdXJyZW50bHkgc3VwcG9ydGVkIGZvcm1hdHMgYXJlOiBUWFQgb3IgSFRNTC4gXG5cdCogQHBhcmFtIHthbnl9IHNvdXJjZS4gVGhlIHVybCB0byB0aGUgZmlsZSBvciBhbiBvYmplY3QgdGhhdCBkZWZpbmVzIHNldHRpbmdzIGZvciB0aGUgQWpheCByZXF1ZXN0IGxpa2UgdXJsLCB0aW1lcHV0LCBldGMuIE9iamVjdCBmb3JtYXQ6IHsgdXJsOiBzdHJpbmcsIHR5cGU6IHN0cmluZywgZGF0YTogb2JqZWN0LCB0aW1lb3V0OiBudW1iZXIgfVxuXHQqIEBwYXJhbSB7YW55fSBzZXR0aW5ncz8uIEFkZGl0aW9uYWwgc2V0dGluZ3MgZm9yIHRoZSBhamF4IHJlcXVlc3QuIFN1Y2ggYXMgbG9hZEVycm9yIGZ1bmN0aW9uLCBjb250ZW50VHlwZSwgZXRjLiBGb3JtYXQ6IHsgY29udGVudFR5cGU6IHN0cmluZywgYmVmb3JlU2VuZDogRnVuY3Rpb24sIGxvYWRFcnJvcjogRnVuY3Rpb24sIGJlZm9yZUxvYWRDb21wbGV0ZTogRnVuY3Rpb24gIH1cblx0Ki9cbiAgICBwdWJsaWMgaW1wb3J0RGF0YShzb3VyY2U6IGFueSwgc2V0dGluZ3M/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaW1wb3J0RGF0YShzb3VyY2UsIHNldHRpbmdzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5pbXBvcnREYXRhKHNvdXJjZSwgc2V0dGluZ3MpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBPcGVucyB0aGUgUHJpbnQgUHJldmlldyBQYW5lbCBvZiB0aGUgQnJvd3NlciB0byBwcmludCBFZGl0b3IncyBjb250ZW50LiBcblx0Ki9cbiAgICBwdWJsaWMgcHJpbnQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnByaW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucHJpbnQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cblx0Z2V0IGlzUmVuZGVyZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkIDogZmFsc2U7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0fVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cbiAgICAgIHRoYXQub25DcmVhdGUuZW1pdCh0aGF0Lm5hdGl2ZUVsZW1lbnQpO1xuXG5cdFx0U21hcnQuUmVuZGVyKCk7XG5cblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc21hcnQtYW5ndWxhcicpO1xuXG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7IHRoYXQub25SZWFkeS5lbWl0KHRoYXQubmF0aXZlRWxlbWVudCk7IH0pO1xuXHRcdHRoaXMubGlzdGVuKCk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLnVubGlzdGVuKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdFx0aWYgKHRoaXMubmF0aXZlRWxlbWVudCAmJiB0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuXHRcdFx0Zm9yIChjb25zdCBwcm9wTmFtZSBpbiBjaGFuZ2VzKSB7XG5cdFx0XHRcdGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuXHRcdFx0XHRcdHRoaXMubmF0aXZlRWxlbWVudFtwcm9wTmFtZV0gPSBjaGFuZ2VzW3Byb3BOYW1lXS5jdXJyZW50VmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEFkZCBldmVudCBsaXN0ZW5lcnMuICovXG5cdHByaXZhdGUgbGlzdGVuKCk6IHZvaWQge1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5nZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNoYW5nZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5nZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2FjdGlvblN0YXJ0SGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQWN0aW9uU3RhcnQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYWN0aW9uU3RhcnQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2FjdGlvblN0YXJ0SGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snYWN0aW9uRW5kSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQWN0aW9uRW5kLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2FjdGlvbkVuZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snYWN0aW9uRW5kSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY29udGV4dE1lbnVJdGVtQ2xpY2tIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Db250ZXh0TWVudUl0ZW1DbGljay5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0TWVudUl0ZW1DbGljaycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29udGV4dE1lbnVJdGVtQ2xpY2tIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjb250ZXh0TWVudU9wZW5IYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Db250ZXh0TWVudU9wZW4uZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dE1lbnVPcGVuJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb250ZXh0TWVudU9wZW5IYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjb250ZXh0TWVudU9wZW5pbmdIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Db250ZXh0TWVudU9wZW5pbmcuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dE1lbnVPcGVuaW5nJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb250ZXh0TWVudU9wZW5pbmdIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjb250ZXh0TWVudUNsb3NlSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ29udGV4dE1lbnVDbG9zZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0TWVudUNsb3NlJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb250ZXh0TWVudUNsb3NlSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY29udGV4dE1lbnVDbG9zaW5nSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ29udGV4dE1lbnVDbG9zaW5nLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRNZW51Q2xvc2luZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29udGV4dE1lbnVDbG9zaW5nSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1sncmVzaXplU3RhcnRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25SZXNpemVTdGFydC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdyZXNpemVTdGFydCcsIHRoYXQuZXZlbnRIYW5kbGVyc1sncmVzaXplU3RhcnRIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydyZXNpemVFbmRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25SZXNpemVFbmQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplRW5kJywgdGhhdC5ldmVudEhhbmRsZXJzWydyZXNpemVFbmRIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydpbmxpbmVUb29sYmFyT3BlbkhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbklubGluZVRvb2xiYXJPcGVuLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lubGluZVRvb2xiYXJPcGVuJywgdGhhdC5ldmVudEhhbmRsZXJzWydpbmxpbmVUb29sYmFyT3BlbkhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2lubGluZVRvb2xiYXJDbG9zZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbklubGluZVRvb2xiYXJDbG9zZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpbmxpbmVUb29sYmFyQ2xvc2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2lubGluZVRvb2xiYXJDbG9zZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2Ryb3BEb3duVG9vbGJhck9wZW5IYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Ecm9wRG93blRvb2xiYXJPcGVuLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3BEb3duVG9vbGJhck9wZW4nLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2Ryb3BEb3duVG9vbGJhck9wZW5IYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydkcm9wRG93blRvb2xiYXJDbG9zZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkRyb3BEb3duVG9vbGJhckNsb3NlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3BEb3duVG9vbGJhckNsb3NlJywgdGhhdC5ldmVudEhhbmRsZXJzWydkcm9wRG93blRvb2xiYXJDbG9zZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2RpYWxvZ09wZW5IYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25EaWFsb2dPcGVuLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RpYWxvZ09wZW4nLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2RpYWxvZ09wZW5IYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydkaWFsb2dPcGVuaW5nSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uRGlhbG9nT3BlbmluZy5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkaWFsb2dPcGVuaW5nJywgdGhhdC5ldmVudEhhbmRsZXJzWydkaWFsb2dPcGVuaW5nSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snZGlhbG9nQ2xvc2VIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25EaWFsb2dDbG9zZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkaWFsb2dDbG9zZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snZGlhbG9nQ2xvc2VIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydkaWFsb2dDbG9zaW5nSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uRGlhbG9nQ2xvc2luZy5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkaWFsb2dDbG9zaW5nJywgdGhhdC5ldmVudEhhbmRsZXJzWydkaWFsb2dDbG9zaW5nSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snaW1hZ2VVcGxvYWRTdWNjZXNzSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uSW1hZ2VVcGxvYWRTdWNjZXNzLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ltYWdlVXBsb2FkU3VjY2VzcycsIHRoYXQuZXZlbnRIYW5kbGVyc1snaW1hZ2VVcGxvYWRTdWNjZXNzSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snaW1hZ2VVcGxvYWRGYWlsZWRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25JbWFnZVVwbG9hZEZhaWxlZC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpbWFnZVVwbG9hZEZhaWxlZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snaW1hZ2VVcGxvYWRGYWlsZWRIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWyd0b29iYXJJdGVtQ2xpY2tIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Ub29iYXJJdGVtQ2xpY2suZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG9vYmFySXRlbUNsaWNrJywgdGhhdC5ldmVudEhhbmRsZXJzWyd0b29iYXJJdGVtQ2xpY2tIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydtZXNzYWdlQ2xvc2VIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25NZXNzYWdlQ2xvc2UuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZUNsb3NlJywgdGhhdC5ldmVudEhhbmRsZXJzWydtZXNzYWdlQ2xvc2VIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydtZXNzYWdlT3BlbkhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbk1lc3NhZ2VPcGVuLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2VPcGVuJywgdGhhdC5ldmVudEhhbmRsZXJzWydtZXNzYWdlT3BlbkhhbmRsZXInXSk7XG5cblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVtb3ZlIGV2ZW50IGxpc3RlbmVycy4gKi9cblx0cHJpdmF0ZSB1bmxpc3RlbigpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY2hhbmdlSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhhdC5ldmVudEhhbmRsZXJzWydjaGFuZ2VIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2FjdGlvblN0YXJ0SGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignYWN0aW9uU3RhcnQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2FjdGlvblN0YXJ0SGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydhY3Rpb25FbmRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdhY3Rpb25FbmQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2FjdGlvbkVuZEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY29udGV4dE1lbnVJdGVtQ2xpY2tIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb250ZXh0TWVudUl0ZW1DbGljaycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29udGV4dE1lbnVJdGVtQ2xpY2tIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbnRleHRNZW51T3BlbkhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbnRleHRNZW51T3BlbicsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29udGV4dE1lbnVPcGVuSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjb250ZXh0TWVudU9wZW5pbmdIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb250ZXh0TWVudU9wZW5pbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbnRleHRNZW51T3BlbmluZ0hhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY29udGV4dE1lbnVDbG9zZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbnRleHRNZW51Q2xvc2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbnRleHRNZW51Q2xvc2VIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbnRleHRNZW51Q2xvc2luZ0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbnRleHRNZW51Q2xvc2luZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29udGV4dE1lbnVDbG9zaW5nSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydyZXNpemVTdGFydEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZVN0YXJ0JywgdGhhdC5ldmVudEhhbmRsZXJzWydyZXNpemVTdGFydEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1sncmVzaXplRW5kSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplRW5kJywgdGhhdC5ldmVudEhhbmRsZXJzWydyZXNpemVFbmRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2lubGluZVRvb2xiYXJPcGVuSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignaW5saW5lVG9vbGJhck9wZW4nLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2lubGluZVRvb2xiYXJPcGVuSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydpbmxpbmVUb29sYmFyQ2xvc2VIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdpbmxpbmVUb29sYmFyQ2xvc2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2lubGluZVRvb2xiYXJDbG9zZUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snZHJvcERvd25Ub29sYmFyT3BlbkhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3BEb3duVG9vbGJhck9wZW4nLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2Ryb3BEb3duVG9vbGJhck9wZW5IYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2Ryb3BEb3duVG9vbGJhckNsb3NlSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcERvd25Ub29sYmFyQ2xvc2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2Ryb3BEb3duVG9vbGJhckNsb3NlSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydkaWFsb2dPcGVuSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZGlhbG9nT3BlbicsIHRoYXQuZXZlbnRIYW5kbGVyc1snZGlhbG9nT3BlbkhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snZGlhbG9nT3BlbmluZ0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RpYWxvZ09wZW5pbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2RpYWxvZ09wZW5pbmdIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2RpYWxvZ0Nsb3NlSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZGlhbG9nQ2xvc2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2RpYWxvZ0Nsb3NlSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydkaWFsb2dDbG9zaW5nSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZGlhbG9nQ2xvc2luZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snZGlhbG9nQ2xvc2luZ0hhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snaW1hZ2VVcGxvYWRTdWNjZXNzSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignaW1hZ2VVcGxvYWRTdWNjZXNzJywgdGhhdC5ldmVudEhhbmRsZXJzWydpbWFnZVVwbG9hZFN1Y2Nlc3NIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2ltYWdlVXBsb2FkRmFpbGVkSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignaW1hZ2VVcGxvYWRGYWlsZWQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2ltYWdlVXBsb2FkRmFpbGVkSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWyd0b29iYXJJdGVtQ2xpY2tIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b29iYXJJdGVtQ2xpY2snLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Rvb2Jhckl0ZW1DbGlja0hhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snbWVzc2FnZUNsb3NlSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZUNsb3NlJywgdGhhdC5ldmVudEhhbmRsZXJzWydtZXNzYWdlQ2xvc2VIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ21lc3NhZ2VPcGVuSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZU9wZW4nLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ21lc3NhZ2VPcGVuSGFuZGxlciddKTtcblx0XHR9XG5cblx0fVxufVxuIl19