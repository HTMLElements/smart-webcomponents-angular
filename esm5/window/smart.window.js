import * as tslib_1 from "tslib";
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Smart } from './smart.element';
var WindowComponent = /** @class */ (function (_super) {
    tslib_1.__extends(WindowComponent, _super);
    function WindowComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        /** @description This event is triggered just before the window starts opening.
        *  @param event. The custom event. 	*/
        _this.onOpening = new EventEmitter();
        /** @description This event is triggered when the window is opened( visible ).
        *  @param event. The custom event. 	*/
        _this.onOpen = new EventEmitter();
        /** @description This event is triggered just before the window starts closing.
        *  @param event. The custom event. 	*/
        _this.onClosing = new EventEmitter();
        /** @description This event is triggered when the window is closed( hidden )
        *  @param event. The custom event. 	*/
        _this.onClose = new EventEmitter();
        /** @description This event is triggered when the window is collapsed.
        *  @param event. The custom event. 	*/
        _this.onCollapse = new EventEmitter();
        /** @description This event is triggered when window's dragging is ended.
        *  @param event. The custom event. 	*/
        _this.onDragEnd = new EventEmitter();
        /** @description This event is triggered when window's dragging is started.
        *  @param event. The custom event. 	*/
        _this.onDragStart = new EventEmitter();
        /** @description This event is triggered when the window is expanded.
        *  @param event. The custom event. 	*/
        _this.onExpand = new EventEmitter();
        /** @description This event is triggered when the window is maximized.
        *  @param event. The custom event. 	*/
        _this.onMaximize = new EventEmitter();
        /** @description This event is triggered when the window is minimized.
        *  @param event. The custom event. 	*/
        _this.onMinimize = new EventEmitter();
        /** @description This event is triggered when window's resizing is ended.
        *  @param event. The custom event. 	*/
        _this.onResizeEnd = new EventEmitter();
        /** @description This event is triggered when window's resizing is started.
        *  @param event. The custom event. 	*/
        _this.onResizeStart = new EventEmitter();
        /** @description This event is triggered when the window is restored to it's previous state before maximization.
        *  @param event. The custom event. 	*/
        _this.onRestore = new EventEmitter();
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    WindowComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('smart-window');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(WindowComponent.prototype, "addNewTab", {
        /** @description Determines if 'Add New' Tab inside the Tabs element is visible. Applicable only to TabsWindow */
        get: function () {
            return this.nativeElement ? this.nativeElement.addNewTab : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.addNewTab = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowComponent.prototype, "animation", {
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
    Object.defineProperty(WindowComponent.prototype, "autoCapitalize", {
        /** @description Determines whether and how the value should be automatically capitalized as it is entered/edited by the user. Applicable only to MultilinePromptWindow. */
        get: function () {
            return this.nativeElement ? this.nativeElement.autoCapitalize : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.autoCapitalize = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowComponent.prototype, "autoExpand", {
        /** @description Determines whether element will auto expand when the input overflows vertically. Applicable only to MultilinePromptWindow. */
        get: function () {
            return this.nativeElement ? this.nativeElement.autoExpand : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.autoExpand = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowComponent.prototype, "cancelLabel", {
        /** @description Determines the label for the 'cancel' button inside the Prompt Window. */
        get: function () {
            return this.nativeElement ? this.nativeElement.cancelLabel : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.cancelLabel = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowComponent.prototype, "completeLabel", {
        /** @description Determines the label for the 'Complete' button insinde the Progress Window. */
        get: function () {
            return this.nativeElement ? this.nativeElement.completeLabel : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.completeLabel = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowComponent.prototype, "confirmLabel", {
        /** @description Determines the label for the 'Confirm' button insinde the Prompt Window. */
        get: function () {
            return this.nativeElement ? this.nativeElement.confirmLabel : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.confirmLabel = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowComponent.prototype, "collapsed", {
        /** @description Determines if the window is collapsed or not. When collapsed the only the header of the window is visible. */
        get: function () {
            return this.nativeElement ? this.nativeElement.collapsed : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.collapsed = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowComponent.prototype, "closeOnMaskClick", {
        /** @description When a modal window is opened, thid property determines if clicking on the mask closes the window or not. */
        get: function () {
            return this.nativeElement ? this.nativeElement.closeOnMaskClick : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.closeOnMaskClick = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowComponent.prototype, "dataSource", {
        /** @description Determines the data source that will be loaded to the TabsWindow. Applicable only to TabsWindow. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dataSource : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dataSource = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowComponent.prototype, "disabled", {
        /** @description Enables or disables the window. */
        get: function () {
            return this.nativeElement ? this.nativeElement.disabled : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disabled = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowComponent.prototype, "disableSnap", {
        /** @description Enables or disables the window snapping feature. */
        get: function () {
            return this.nativeElement ? this.nativeElement.disableSnap : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disableSnap = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowComponent.prototype, "disableEscape", {
        /** @description By default the window is closing after the 'Escape' key is pressed. Set this property to true, if you want to disable that. */
        get: function () {
            return this.nativeElement ? this.nativeElement.disableEscape : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disableEscape = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowComponent.prototype, "disableKeyboard", {
        /** @description By default the window is handling keyboard keys like 'Arrows', 'Escape', etc. Set this property to true, if you want to disable that. */
        get: function () {
            return this.nativeElement ? this.nativeElement.disableKeyboard : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disableKeyboard = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowComponent.prototype, "displayMode", {
        /** @description Determines how the characters are displayed inside the input. Applicable to Prompt Window. */
        get: function () {
            return this.nativeElement ? this.nativeElement.displayMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.displayMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowComponent.prototype, "dropPosition", {
        /** @description Applicable to TabsWindow when docked inside a DockingLayout Custom Element.  Determines where the window(it's tab items as well) can be dropped inside the DockingLayout.  The property is an array that accepts multiple positions. Note: Positions with prefix 'layout-' are applied to the Tab item children of the TabsWidnow owner that is being dragged. The rest of the positions indicate the allowed drop position inside the hovered target(TabsWindow). Used only by jqxDockingLayout custom elements. Determines the possible drop position inside the DockingLayout. The following values are allowed. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dropPosition : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dropPosition = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowComponent.prototype, "formatFunction", {
        /** @description A callback function defining the new format for the label of the Progress Bar. Applicable only to ProgressWindow. */
        get: function () {
            return this.nativeElement ? this.nativeElement.formatFunction : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.formatFunction = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowComponent.prototype, "footerPosition", {
        /** @description Determines the position of the footer of the window element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.footerPosition : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.footerPosition = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowComponent.prototype, "footerTemplate", {
        /** @description Determines the template for the Dialog section of the window. By default footerTemplate is null. */
        get: function () {
            return this.nativeElement ? this.nativeElement.footerTemplate : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.footerTemplate = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowComponent.prototype, "headerButtons", {
        /** @description Set's the buttons that will be visible in the header section. */
        get: function () {
            return this.nativeElement ? this.nativeElement.headerButtons : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.headerButtons = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowComponent.prototype, "headerTemplate", {
        /** @description Determines the template for the Dialog section of the window. By default headerTemplate is null. */
        get: function () {
            return this.nativeElement ? this.nativeElement.headerTemplate : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.headerTemplate = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowComponent.prototype, "headerPosition", {
        /** @description Determines the position of the header of the window element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.headerPosition : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.headerPosition = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowComponent.prototype, "hint", {
        /** @description Sets additional helper text below the text box. The hint is visible only when the text box is focued. Applicable to Prompt Window. */
        get: function () {
            return this.nativeElement ? this.nativeElement.hint : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.hint = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowComponent.prototype, "indeterminate", {
        /** @description Sets the value of the Progress bar to indeterminate state(null) and starts the animation. Applicable only to ProgressWindow. */
        get: function () {
            return this.nativeElement ? this.nativeElement.indeterminate : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.indeterminate = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowComponent.prototype, "inverted", {
        /** @description Sets the filling direction of the Progress Bar. Applicable only to ProgressWindow. */
        get: function () {
            return this.nativeElement ? this.nativeElement.inverted : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.inverted = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowComponent.prototype, "label", {
        /** @description The label of the window that appears in the header area. */
        get: function () {
            return this.nativeElement ? this.nativeElement.label : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.label = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowComponent.prototype, "liveResize", {
        /** @description When enabled the resizing operation happens live. By default it's not enabled and during resizing a highlighter around the edges of the window appears to outline  the current size of the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.liveResize : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.liveResize = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowComponent.prototype, "layout", {
        /** @description Applicable only to TabsWindow when used with a DockingLayout custom element.Used only by jqxDockingLayout. Determines the owner jqxDockingLayout  that the window belongs to. When the tabsWindow has been removed from a DockingLayout element, the property is used to indicate that it belongs to that particular Dockinglayout. Accepts a string, representing the ID of a jqxDockingLayout on the page, or an instance of jqxDokcingLayout. */
        get: function () {
            return this.nativeElement ? this.nativeElement.layout : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.layout = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowComponent.prototype, "locale", {
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
    Object.defineProperty(WindowComponent.prototype, "locked", {
        /** @description Applicable only to TabsWindow when docked inside a DockingLayout Custom Element.Determines of the item can be resized or not. */
        get: function () {
            return this.nativeElement ? this.nativeElement.locked : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.locked = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowComponent.prototype, "localizeFormatFunction", {
        /** @description Callback, related to localization module.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.localizeFormatFunction : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.localizeFormatFunction = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowComponent.prototype, "maximized", {
        /** @description Determines if the window is maximized or not. When maximized the window covers the whole viewport. */
        get: function () {
            return this.nativeElement ? this.nativeElement.maximized : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.maximized = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowComponent.prototype, "messages", {
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
    Object.defineProperty(WindowComponent.prototype, "modal", {
        /** @description Determines if the window is modal or not. If true the user can only interact with the window and nothing else on the page. */
        get: function () {
            return this.nativeElement ? this.nativeElement.modal : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.modal = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowComponent.prototype, "max", {
        /** @description Applicable to TabsWindow when docked inside a DockingLayout Custom Element. Determines the max size of the item. Applicable to Progress Window by allowing the user to specify the maximum of the ProgressBar. */
        get: function () {
            return this.nativeElement ? this.nativeElement.max : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.max = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowComponent.prototype, "min", {
        /** @description Applicable to TabsWindow when docked inside DockingLayout Custom Element. Determines the min size of the item. Applicable to Progress Window by allowing the user to specify the minimu of the ProgressBar. */
        get: function () {
            return this.nativeElement ? this.nativeElement.min : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.min = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowComponent.prototype, "minimized", {
        /** @description Determines if the window is minimized or not. When minimized the window is docked at the bottom left corner of the viewport. */
        get: function () {
            return this.nativeElement ? this.nativeElement.minimized : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.minimized = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowComponent.prototype, "maxLength", {
        /** @description Sets or gets the maximum number of characters that the user can enter. Applicable to Prompt/MultilinePrompt Window. */
        get: function () {
            return this.nativeElement ? this.nativeElement.maxLength : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.maxLength = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowComponent.prototype, "minLength", {
        /** @description Sets or gets the minimum number of characters that the user have to enter to trigger the auto complete functionality. Applicable to Prompt/MultilinePrompt Window. */
        get: function () {
            return this.nativeElement ? this.nativeElement.minLength : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.minLength = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowComponent.prototype, "opened", {
        /** @description Determines if the window is visible or not. */
        get: function () {
            return this.nativeElement ? this.nativeElement.opened : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.opened = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowComponent.prototype, "pinned", {
        /** @description Determines if the window is pinned or not. Pinned window is a window that can't be dragged but can be resized. */
        get: function () {
            return this.nativeElement ? this.nativeElement.pinned : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.pinned = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowComponent.prototype, "placeholder", {
        /** @description Determines the input's placeholder. Applicable to Prompt Window. */
        get: function () {
            return this.nativeElement ? this.nativeElement.placeholder : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.placeholder = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowComponent.prototype, "promptLabel", {
        /** @description Determines the label for the Input insinde the PromptWindow. */
        get: function () {
            return this.nativeElement ? this.nativeElement.promptLabel : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.promptLabel = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowComponent.prototype, "readonly", {
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
    Object.defineProperty(WindowComponent.prototype, "resizeIndicator", {
        /** @description When applied a resize indicator is displayed in the bottom right corner of the window and resizing operation can be initiated only from its position. */
        get: function () {
            return this.nativeElement ? this.nativeElement.resizeIndicator : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.resizeIndicator = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowComponent.prototype, "resizeMode", {
        /** @description Determines the resizing mode of the window.  Several modes are available:   none - resizing is disabled.  vertical - vertical resizing is allowed.  horizontal - horizontal resizing is allowed. both - horizontal and vertical resizing is allowed. top - the window can only be resized from the top side. bottom - the window is resizable only from the bottom side. left - the window can be resized only from the left side. right - the window can be resized only from the right side.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.resizeMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.resizeMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowComponent.prototype, "rightToLeft", {
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
    Object.defineProperty(WindowComponent.prototype, "required", {
        /** @description Specifies that the user must fill the input before submitting a form with the text box.Applicable to Prompt Window. */
        get: function () {
            return this.nativeElement ? this.nativeElement.required : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.required = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowComponent.prototype, "requiredMessage", {
        /** @description Specifies the message that will appear if required is set and no value is provided in the input. Applicable to Prompt Window. */
        get: function () {
            return this.nativeElement ? this.nativeElement.requiredMessage : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.requiredMessage = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowComponent.prototype, "selectAllOnFocus", {
        /** @description Determines whether the content of the input will be selected on focus or not. Applicable to Prompt Window. */
        get: function () {
            return this.nativeElement ? this.nativeElement.selectAllOnFocus : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.selectAllOnFocus = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowComponent.prototype, "selectedIndex", {
        /** @description Sets or gets which tab is selected. Applicable only to TabsWindow. */
        get: function () {
            return this.nativeElement ? this.nativeElement.selectedIndex : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.selectedIndex = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowComponent.prototype, "selectionMode", {
        /** @description Determines the way the user can switch between tabs. Applicable only to TabsWindow. */
        get: function () {
            return this.nativeElement ? this.nativeElement.selectionMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.selectionMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowComponent.prototype, "selectionEnd", {
        /** @description Indicates the index of the last character in the current selection. Applicable only to MultilinePromptWindow. */
        get: function () {
            return this.nativeElement ? this.nativeElement.selectionEnd : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.selectionEnd = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowComponent.prototype, "selectionStart", {
        /** @description Indicates the index to the first character in the current selection. Applicable only to MultilinePromptWindow. */
        get: function () {
            return this.nativeElement ? this.nativeElement.selectionStart : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.selectionStart = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowComponent.prototype, "showProgressValue", {
        /** @description Enables/Disabled the label for the Progress Bar. Applicable only to Progress Window. */
        get: function () {
            return this.nativeElement ? this.nativeElement.showProgressValue : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.showProgressValue = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowComponent.prototype, "siblings", {
        /** @description A getter that returns the siblings (that share the same parent) of a LayoutPanel item that is docked inside a DockingLayout. The siblings are also DockingLayout items ( LayoutPanels).Applicable only to TabsWindow when docked inside a DockingLayout. */
        get: function () {
            return this.nativeElement ? this.nativeElement.siblings : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.siblings = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowComponent.prototype, "size", {
        /** @description Applicable to TabsWindow when nested inside a DockingLayout Custom Element. Determines the size of the item. */
        get: function () {
            return this.nativeElement ? this.nativeElement.size : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.size = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowComponent.prototype, "spellCheck", {
        /** @description Specifies whether the element is to have its spelling and grammar checked or not. Applicable only to MultilinePromptWindow. */
        get: function () {
            return this.nativeElement ? this.nativeElement.spellCheck : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.spellCheck = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowComponent.prototype, "tabCloseButtons", {
        /** @description Sets or gets whether close buttons are displayed inside the Tab Strip of the TabsWindow. Applicable only to TabsWindow. */
        get: function () {
            return this.nativeElement ? this.nativeElement.tabCloseButtons : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.tabCloseButtons = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowComponent.prototype, "tabCloseButtonMode", {
        /** @description Determines if the close button is visible on select or always. Applicable only to TabsWindow. */
        get: function () {
            return this.nativeElement ? this.nativeElement.tabCloseButtonMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.tabCloseButtonMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowComponent.prototype, "tabOverflow", {
        /** @description Sets or gets the Tabs scroll buttons behavior. Applicable only when tabLayout is 'scroll'. Applicable only to TabsWindow. */
        get: function () {
            return this.nativeElement ? this.nativeElement.tabOverflow : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.tabOverflow = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowComponent.prototype, "tabPosition", {
        /** @description Detetmines Tab Strip is positioned of the TabsWindow. Applicable only to TabsWindow. */
        get: function () {
            return this.nativeElement ? this.nativeElement.tabPosition : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.tabPosition = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowComponent.prototype, "tabScrollButtonsPosition", {
        /** @description Sets or gets the position of the scroll buttons inside the Tab header of the TabsWindow. Applicable only to TabsWindow. */
        get: function () {
            return this.nativeElement ? this.nativeElement.tabScrollButtonsPosition : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.tabScrollButtonsPosition = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowComponent.prototype, "tabTextOrientation", {
        /** @description Sets or gets the orientation of the text in the tabs labels of the TabsWindow. Applicable only to TabsWindow. */
        get: function () {
            return this.nativeElement ? this.nativeElement.tabTextOrientation : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.tabTextOrientation = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowComponent.prototype, "theme", {
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
    Object.defineProperty(WindowComponent.prototype, "unfocusable", {
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
    Object.defineProperty(WindowComponent.prototype, "value", {
        /** @description Determines the value of the TextBox/ProgressBar inside the Dialog/Prompt/Progress Window */
        get: function () {
            return this.nativeElement ? this.nativeElement.value : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.value = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowComponent.prototype, "windowParent", {
        /** @description Determines the actual parent of the element. The window can size and move only in the area of that element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.windowParent : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.windowParent = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowComponent.prototype, "wrap", {
        /** @description Indicates how the input wraps text. Applicable only to MultilinePromptWindow. */
        get: function () {
            return this.nativeElement ? this.nativeElement.wrap : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.wrap = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /** @description Appends a tabitem to the end of the list of tab items inside element.
    * @param {Node} node. A TabItem element that should be added to the rest of the items as the last item.
    * @returns {Node}
  */
    WindowComponent.prototype.appendChild = function (node) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.appendChild(node);
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
    /** @description Sets the window to the top level so the user can interact with it.
    */
    WindowComponent.prototype.bringToFront = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.bringToFront();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.bringToFront();
            });
        }
    };
    /** @description Clears the content of the Window.
    */
    WindowComponent.prototype.clear = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.clear();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.clear();
            });
        }
    };
    /** @description Closes the window.
    */
    WindowComponent.prototype.close = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.close();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.close();
            });
        }
    };
    /** @description Collapses the window.
    * @returns {HTMLElement}
  */
    WindowComponent.prototype.collapse = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.collapse();
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
    /** @description Makes sure a tab item is visible by scrolling to it. Applicable only to TabsWindow.
    * @param {number} index. The index of the tab to scroll to.
    */
    WindowComponent.prototype.ensureVisible = function (index) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.ensureVisible(index);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.ensureVisible(index);
            });
        }
    };
    /** @description Expands the window after being collapsed.
    * @returns {any[]}
  */
    WindowComponent.prototype.expand = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.expand();
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
    /** @description Inserts a new tab and an associated content section. Applicable only to TabsWindow.
    * @param {number} index. The index to insert a new tab at.
    * @param {any} details. An Object with the fields "label", "labelSize", "content" and "group".
    */
    WindowComponent.prototype.insert = function (index, details) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.insert(index, details);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.insert(index, details);
            });
        }
    };
    /** @description Inserts the specified "smart-tab-item" node before the reference "smart-tab-item" node. Applicable only to TabsWindow.
    * @param {Node} newNode. The "smart-tab-item" node to insert.
    * @param {Node | null} referenceNode?. The "smart-tab-item" node before which newNode is inserted.
    * @returns {Node}
  */
    WindowComponent.prototype.insertBefore = function (newNode, referenceNode) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.insertBefore(newNode, referenceNode);
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
    /** @description Moves the window to a new position
    * @param {string | number} left. Left position. For example: '100px'.
    * @param {string | number} top. Top position. For example: '100px'.
    */
    WindowComponent.prototype.move = function (left, top) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.move(left, top);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.move(left, top);
            });
        }
    };
    /** @description Maximizes the window to fill the area.
    */
    WindowComponent.prototype.maximize = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.maximize();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.maximize();
            });
        }
    };
    /** @description Minimizes the window.
    */
    WindowComponent.prototype.minimize = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.minimize();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.minimize();
            });
        }
    };
    /** @description Opens the window
    */
    WindowComponent.prototype.open = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.open();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.open();
            });
        }
    };
    /** @description Pins the window. Disables window dragging.
    */
    WindowComponent.prototype.pin = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.pin();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.pin();
            });
        }
    };
    /** @description Removes a tab and its associated content section. Applicable only to TabsWindow.
    * @param {number} index. The index of the tab to remove.
    */
    WindowComponent.prototype.removeAt = function (index) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeAt(index);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.removeAt(index);
            });
        }
    };
    /** @description Removes a child "smart-tab-item" node. Applicable only to TabsWindow.
    * @param {Node} node. The "smart-tab-item" node to remove.
    * @returns {Node}
  */
    WindowComponent.prototype.removeChild = function (node) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.removeChild(node);
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
    /** @description Restores the window to it's previous size before maximization/minimization.
    */
    WindowComponent.prototype.restore = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.restore();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.restore();
            });
        }
    };
    /** @description Selects a tab.  Applicalbe only to TabsWindow elements.
    * @param {number} index. The index of the tab to select.
    */
    WindowComponent.prototype.select = function (index) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.select(index);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.select(index);
            });
        }
    };
    /** @description Unpins the window. Enables window dragging.
    */
    WindowComponent.prototype.unpin = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.unpin();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.unpin();
            });
        }
    };
    /** @description Updates the header label.
    * @param {string} label. The new label of the Header.
    */
    WindowComponent.prototype.updateLabel = function (label) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.updateLabel(label);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.updateLabel(label);
            });
        }
    };
    /** @description Updates the content.
    * @param {string | HTMLElement} content. The new content of the window.
    */
    WindowComponent.prototype.updateContent = function (content) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.updateContent(content);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.updateContent(content);
            });
        }
    };
    /** @description Updates a TAB in TAB Window and its associated content section.  Applies only to TabsWindow elements.
    * @param {number} index. The index of the tab to update.
    * @param {string} label. The new label of the tab. The value can be the id of an HTMLTemplateElement
    * @param {string | HTMLElement} content. The new content of the tab.
    */
    WindowComponent.prototype.update = function (index, label, content) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.update(index, label, content);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.update(index, label, content);
            });
        }
    };
    Object.defineProperty(WindowComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    WindowComponent.prototype.ngOnInit = function () {
    };
    WindowComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        this.listen();
    };
    WindowComponent.prototype.ngOnDestroy = function () {
        this.unlisten();
    };
    WindowComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    /** @description Add event listeners. */
    WindowComponent.prototype.listen = function () {
        var that = this;
        that.eventHandlers['openingHandler'] = function (event) { that.onOpening.emit(event); };
        that.nativeElement.addEventListener('opening', that.eventHandlers['openingHandler']);
        that.eventHandlers['openHandler'] = function (event) { that.onOpen.emit(event); };
        that.nativeElement.addEventListener('open', that.eventHandlers['openHandler']);
        that.eventHandlers['closingHandler'] = function (event) { that.onClosing.emit(event); };
        that.nativeElement.addEventListener('closing', that.eventHandlers['closingHandler']);
        that.eventHandlers['closeHandler'] = function (event) { that.onClose.emit(event); };
        that.nativeElement.addEventListener('close', that.eventHandlers['closeHandler']);
        that.eventHandlers['collapseHandler'] = function (event) { that.onCollapse.emit(event); };
        that.nativeElement.addEventListener('collapse', that.eventHandlers['collapseHandler']);
        that.eventHandlers['dragEndHandler'] = function (event) { that.onDragEnd.emit(event); };
        that.nativeElement.addEventListener('dragEnd', that.eventHandlers['dragEndHandler']);
        that.eventHandlers['dragStartHandler'] = function (event) { that.onDragStart.emit(event); };
        that.nativeElement.addEventListener('dragStart', that.eventHandlers['dragStartHandler']);
        that.eventHandlers['expandHandler'] = function (event) { that.onExpand.emit(event); };
        that.nativeElement.addEventListener('expand', that.eventHandlers['expandHandler']);
        that.eventHandlers['maximizeHandler'] = function (event) { that.onMaximize.emit(event); };
        that.nativeElement.addEventListener('maximize', that.eventHandlers['maximizeHandler']);
        that.eventHandlers['minimizeHandler'] = function (event) { that.onMinimize.emit(event); };
        that.nativeElement.addEventListener('minimize', that.eventHandlers['minimizeHandler']);
        that.eventHandlers['resizeEndHandler'] = function (event) { that.onResizeEnd.emit(event); };
        that.nativeElement.addEventListener('resizeEnd', that.eventHandlers['resizeEndHandler']);
        that.eventHandlers['resizeStartHandler'] = function (event) { that.onResizeStart.emit(event); };
        that.nativeElement.addEventListener('resizeStart', that.eventHandlers['resizeStartHandler']);
        that.eventHandlers['restoreHandler'] = function (event) { that.onRestore.emit(event); };
        that.nativeElement.addEventListener('restore', that.eventHandlers['restoreHandler']);
    };
    /** @description Remove event listeners. */
    WindowComponent.prototype.unlisten = function () {
        var that = this;
        if (that.eventHandlers['openingHandler']) {
            that.nativeElement.removeEventListener('opening', that.eventHandlers['openingHandler']);
        }
        if (that.eventHandlers['openHandler']) {
            that.nativeElement.removeEventListener('open', that.eventHandlers['openHandler']);
        }
        if (that.eventHandlers['closingHandler']) {
            that.nativeElement.removeEventListener('closing', that.eventHandlers['closingHandler']);
        }
        if (that.eventHandlers['closeHandler']) {
            that.nativeElement.removeEventListener('close', that.eventHandlers['closeHandler']);
        }
        if (that.eventHandlers['collapseHandler']) {
            that.nativeElement.removeEventListener('collapse', that.eventHandlers['collapseHandler']);
        }
        if (that.eventHandlers['dragEndHandler']) {
            that.nativeElement.removeEventListener('dragEnd', that.eventHandlers['dragEndHandler']);
        }
        if (that.eventHandlers['dragStartHandler']) {
            that.nativeElement.removeEventListener('dragStart', that.eventHandlers['dragStartHandler']);
        }
        if (that.eventHandlers['expandHandler']) {
            that.nativeElement.removeEventListener('expand', that.eventHandlers['expandHandler']);
        }
        if (that.eventHandlers['maximizeHandler']) {
            that.nativeElement.removeEventListener('maximize', that.eventHandlers['maximizeHandler']);
        }
        if (that.eventHandlers['minimizeHandler']) {
            that.nativeElement.removeEventListener('minimize', that.eventHandlers['minimizeHandler']);
        }
        if (that.eventHandlers['resizeEndHandler']) {
            that.nativeElement.removeEventListener('resizeEnd', that.eventHandlers['resizeEndHandler']);
        }
        if (that.eventHandlers['resizeStartHandler']) {
            that.nativeElement.removeEventListener('resizeStart', that.eventHandlers['resizeStartHandler']);
        }
        if (that.eventHandlers['restoreHandler']) {
            that.nativeElement.removeEventListener('restore', that.eventHandlers['restoreHandler']);
        }
    };
    WindowComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "addNewTab", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "animation", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "autoCapitalize", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "autoExpand", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "cancelLabel", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "completeLabel", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "confirmLabel", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "collapsed", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "closeOnMaskClick", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "dataSource", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "disabled", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "disableSnap", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "disableEscape", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "disableKeyboard", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "displayMode", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "dropPosition", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "formatFunction", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "footerPosition", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "footerTemplate", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "headerButtons", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "headerTemplate", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "headerPosition", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "hint", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "indeterminate", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "inverted", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "label", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "liveResize", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "layout", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "locale", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "locked", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "localizeFormatFunction", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "maximized", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "messages", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "modal", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "max", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "min", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "minimized", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "maxLength", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "minLength", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "opened", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "pinned", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "placeholder", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "promptLabel", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "readonly", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "resizeIndicator", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "resizeMode", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "rightToLeft", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "required", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "requiredMessage", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "selectAllOnFocus", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "selectedIndex", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "selectionMode", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "selectionEnd", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "selectionStart", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "showProgressValue", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "siblings", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "size", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "spellCheck", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "tabCloseButtons", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "tabCloseButtonMode", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "tabOverflow", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "tabPosition", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "tabScrollButtonsPosition", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "tabTextOrientation", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "theme", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "unfocusable", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "value", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "windowParent", null);
    tslib_1.__decorate([
        Input()
    ], WindowComponent.prototype, "wrap", null);
    tslib_1.__decorate([
        Output()
    ], WindowComponent.prototype, "onOpening", void 0);
    tslib_1.__decorate([
        Output()
    ], WindowComponent.prototype, "onOpen", void 0);
    tslib_1.__decorate([
        Output()
    ], WindowComponent.prototype, "onClosing", void 0);
    tslib_1.__decorate([
        Output()
    ], WindowComponent.prototype, "onClose", void 0);
    tslib_1.__decorate([
        Output()
    ], WindowComponent.prototype, "onCollapse", void 0);
    tslib_1.__decorate([
        Output()
    ], WindowComponent.prototype, "onDragEnd", void 0);
    tslib_1.__decorate([
        Output()
    ], WindowComponent.prototype, "onDragStart", void 0);
    tslib_1.__decorate([
        Output()
    ], WindowComponent.prototype, "onExpand", void 0);
    tslib_1.__decorate([
        Output()
    ], WindowComponent.prototype, "onMaximize", void 0);
    tslib_1.__decorate([
        Output()
    ], WindowComponent.prototype, "onMinimize", void 0);
    tslib_1.__decorate([
        Output()
    ], WindowComponent.prototype, "onResizeEnd", void 0);
    tslib_1.__decorate([
        Output()
    ], WindowComponent.prototype, "onResizeStart", void 0);
    tslib_1.__decorate([
        Output()
    ], WindowComponent.prototype, "onRestore", void 0);
    WindowComponent = tslib_1.__decorate([
        Directive({
            exportAs: 'smart-window', selector: 'smart-window, [smart-window], smart-tabs-window, smart-prompt-window, smart-multilineprompt-window, smart-dialog-window,  smart-alert-window, smart-progress-window, smart-wait-window'
        })
    ], WindowComponent);
    return WindowComponent;
}(BaseElement));
export { WindowComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQud2luZG93LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc21hcnQtd2ViY29tcG9uZW50cy1hbmd1bGFyL3dpbmRvdy8iLCJzb3VyY2VzIjpbInNtYXJ0LndpbmRvdy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUosT0FBTyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVyRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFReEM7SUFBcUMsMkNBQVc7SUFDL0MseUJBQVksR0FBdUI7UUFBbkMsWUFDQyxrQkFBTSxHQUFHLENBQUMsU0FFVjtRQUVPLG1CQUFhLEdBQVUsRUFBRSxDQUFDO1FBMG5CbEM7OENBQ3NDO1FBQzVCLGVBQVMsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVwRTs4Q0FDc0M7UUFDNUIsWUFBTSxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRWpFOzhDQUNzQztRQUM1QixlQUFTLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFcEU7OENBQ3NDO1FBQzVCLGFBQU8sR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVsRTs4Q0FDc0M7UUFDNUIsZ0JBQVUsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVyRTs4Q0FDc0M7UUFDNUIsZUFBUyxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXBFOzhDQUNzQztRQUM1QixpQkFBVyxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXRFOzhDQUNzQztRQUM1QixjQUFRLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFbkU7OENBQ3NDO1FBQzVC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aW1hdGlvbiwgV2luZG93QXV0b0NhcGl0YWxpemUsIFdpbmRvd0Rpc3BsYXlNb2RlLCBXaW5kb3dEcm9wUG9zaXRpb24sIFdpbmRvd0Zvb3RlclBvc2l0aW9uLCBUYWJQb3NpdGlvbiwgV2luZG93UmVzaXplTW9kZSwgVGFiU2VsZWN0aW9uTW9kZSwgV2luZG93VGFiQ2xvc2VCdXR0b25Nb2RlLCBPdmVyZmxvdywgTGF5b3V0UG9zaXRpb24sIE9yaWVudGF0aW9uLCBXaW5kb3dXcmFwLCBFbGVtZW50UmVuZGVyTW9kZX0gZnJvbSAnLi8uLi9pbmRleCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIERpcmVjdGl2ZSwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIFNpbXBsZUNoYW5nZXMsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXNlRWxlbWVudCwgU21hcnQgfSBmcm9tICcuL3NtYXJ0LmVsZW1lbnQnO1xuZXhwb3J0IHsgQW5pbWF0aW9uLCBXaW5kb3dBdXRvQ2FwaXRhbGl6ZSwgV2luZG93RGlzcGxheU1vZGUsIFdpbmRvd0Ryb3BQb3NpdGlvbiwgV2luZG93Rm9vdGVyUG9zaXRpb24sIFRhYlBvc2l0aW9uLCBXaW5kb3dSZXNpemVNb2RlLCBUYWJTZWxlY3Rpb25Nb2RlLCBXaW5kb3dUYWJDbG9zZUJ1dHRvbk1vZGUsIE92ZXJmbG93LCBMYXlvdXRQb3NpdGlvbiwgT3JpZW50YXRpb24sIFdpbmRvd1dyYXAsIEVsZW1lbnRSZW5kZXJNb2RlfSBmcm9tICcuLy4uL2luZGV4JztcbmV4cG9ydCB7IFNtYXJ0IH0gZnJvbSAnLi9zbWFydC5lbGVtZW50JztcbmV4cG9ydCB7IFdpbmRvdyB9IGZyb20gJy4vLi4vaW5kZXgnO1xuXG5cbkBEaXJlY3RpdmUoe1xuXHRleHBvcnRBczogJ3NtYXJ0LXdpbmRvdycsXHRzZWxlY3RvcjogJ3NtYXJ0LXdpbmRvdywgW3NtYXJ0LXdpbmRvd10sIHNtYXJ0LXRhYnMtd2luZG93LCBzbWFydC1wcm9tcHQtd2luZG93LCBzbWFydC1tdWx0aWxpbmVwcm9tcHQtd2luZG93LCBzbWFydC1kaWFsb2ctd2luZG93LCAgc21hcnQtYWxlcnQtd2luZG93LCBzbWFydC1wcm9ncmVzcy13aW5kb3csIHNtYXJ0LXdhaXQtd2luZG93J1xufSlcblxuZXhwb3J0IGNsYXNzIFdpbmRvd0NvbXBvbmVudCBleHRlbmRzIEJhc2VFbGVtZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG5cdGNvbnN0cnVjdG9yKHJlZjogRWxlbWVudFJlZjxXaW5kb3c+KSB7XG5cdFx0c3VwZXIocmVmKTtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPSByZWYubmF0aXZlRWxlbWVudCBhcyBXaW5kb3c7XG5cdH1cblxuXHRwcml2YXRlIGV2ZW50SGFuZGxlcnM6IGFueVtdID0gW107XG5cblx0cHVibGljIG5hdGl2ZUVsZW1lbnQ6IFdpbmRvdztcblx0LyoqIEBkZXNjcmlwdGlvbiBDcmVhdGVzIHRoZSBjb21wb25lbnQgb24gZGVtYW5kLlxuXHQgKiBAcGFyYW0gcHJvcGVydGllcyBBbiBvcHRpb25hbCBvYmplY3Qgb2YgcHJvcGVydGllcywgd2hpY2ggd2lsbCBiZSBhZGRlZCB0byB0aGUgdGVtcGxhdGUgYmluZGVkIG9uZXMuXG5cdCAqL1xuXHRwdWJsaWMgY3JlYXRlQ29tcG9uZW50KHByb3BlcnRpZXMgPSB7fSk6IGFueSB7XG4gICAgXHR0aGlzLm5hdGl2ZUVsZW1lbnQgPSA8V2luZG93PmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NtYXJ0LXdpbmRvdycpO1xuXHRcdGZvciAobGV0IHByb3BlcnR5TmFtZSBpbiBwcm9wZXJ0aWVzKSB7IFxuIFx0XHRcdHRoaXMubmF0aXZlRWxlbWVudFtwcm9wZXJ0eU5hbWVdID0gcHJvcGVydGllc1twcm9wZXJ0eU5hbWVdO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50O1xuXHR9XG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyBpZiAnQWRkIE5ldycgVGFiIGluc2lkZSB0aGUgVGFicyBlbGVtZW50IGlzIHZpc2libGUuIEFwcGxpY2FibGUgb25seSB0byBUYWJzV2luZG93ICovXG5cdEBJbnB1dCgpXG5cdGdldCBhZGROZXdUYWIoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hZGROZXdUYWIgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGFkZE5ld1RhYih2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hZGROZXdUYWIgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSBhbmltYXRpb24gbW9kZS4gQW5pbWF0aW9uIGlzIGRpc2FibGVkIHdoZW4gdGhlIHByb3BlcnR5IGlzIHNldCB0byAnbm9uZScgKi9cblx0QElucHV0KClcblx0Z2V0IGFuaW1hdGlvbigpOiBBbmltYXRpb24gfCBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYW5pbWF0aW9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBhbmltYXRpb24odmFsdWU6IEFuaW1hdGlvbiB8IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hbmltYXRpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB3aGV0aGVyIGFuZCBob3cgdGhlIHZhbHVlIHNob3VsZCBiZSBhdXRvbWF0aWNhbGx5IGNhcGl0YWxpemVkIGFzIGl0IGlzIGVudGVyZWQvZWRpdGVkIGJ5IHRoZSB1c2VyLiBBcHBsaWNhYmxlIG9ubHkgdG8gTXVsdGlsaW5lUHJvbXB0V2luZG93LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgYXV0b0NhcGl0YWxpemUoKTogV2luZG93QXV0b0NhcGl0YWxpemUgfCBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYXV0b0NhcGl0YWxpemUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGF1dG9DYXBpdGFsaXplKHZhbHVlOiBXaW5kb3dBdXRvQ2FwaXRhbGl6ZSB8IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hdXRvQ2FwaXRhbGl6ZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHdoZXRoZXIgZWxlbWVudCB3aWxsIGF1dG8gZXhwYW5kIHdoZW4gdGhlIGlucHV0IG92ZXJmbG93cyB2ZXJ0aWNhbGx5LiBBcHBsaWNhYmxlIG9ubHkgdG8gTXVsdGlsaW5lUHJvbXB0V2luZG93LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgYXV0b0V4cGFuZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9FeHBhbmQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGF1dG9FeHBhbmQodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYXV0b0V4cGFuZCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBsYWJlbCBmb3IgdGhlICdjYW5jZWwnIGJ1dHRvbiBpbnNpZGUgdGhlIFByb21wdCBXaW5kb3cuICovXG5cdEBJbnB1dCgpXG5cdGdldCBjYW5jZWxMYWJlbCgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY2FuY2VsTGFiZWwgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGNhbmNlbExhYmVsKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY2FuY2VsTGFiZWwgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgbGFiZWwgZm9yIHRoZSAnQ29tcGxldGUnIGJ1dHRvbiBpbnNpbmRlIHRoZSBQcm9ncmVzcyBXaW5kb3cuICovXG5cdEBJbnB1dCgpXG5cdGdldCBjb21wbGV0ZUxhYmVsKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb21wbGV0ZUxhYmVsIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjb21wbGV0ZUxhYmVsKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29tcGxldGVMYWJlbCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBsYWJlbCBmb3IgdGhlICdDb25maXJtJyBidXR0b24gaW5zaW5kZSB0aGUgUHJvbXB0IFdpbmRvdy4gKi9cblx0QElucHV0KClcblx0Z2V0IGNvbmZpcm1MYWJlbCgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29uZmlybUxhYmVsIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjb25maXJtTGFiZWwodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb25maXJtTGFiZWwgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyBpZiB0aGUgd2luZG93IGlzIGNvbGxhcHNlZCBvciBub3QuIFdoZW4gY29sbGFwc2VkIHRoZSBvbmx5IHRoZSBoZWFkZXIgb2YgdGhlIHdpbmRvdyBpcyB2aXNpYmxlLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgY29sbGFwc2VkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sbGFwc2VkIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjb2xsYXBzZWQodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sbGFwc2VkID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFdoZW4gYSBtb2RhbCB3aW5kb3cgaXMgb3BlbmVkLCB0aGlkIHByb3BlcnR5IGRldGVybWluZXMgaWYgY2xpY2tpbmcgb24gdGhlIG1hc2sgY2xvc2VzIHRoZSB3aW5kb3cgb3Igbm90LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgY2xvc2VPbk1hc2tDbGljaygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNsb3NlT25NYXNrQ2xpY2sgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGNsb3NlT25NYXNrQ2xpY2sodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xvc2VPbk1hc2tDbGljayA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBkYXRhIHNvdXJjZSB0aGF0IHdpbGwgYmUgbG9hZGVkIHRvIHRoZSBUYWJzV2luZG93LiBBcHBsaWNhYmxlIG9ubHkgdG8gVGFic1dpbmRvdy4gKi9cblx0QElucHV0KClcblx0Z2V0IGRhdGFTb3VyY2UoKToge2xhYmVsOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZ31bXSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kYXRhU291cmNlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkYXRhU291cmNlKHZhbHVlOiB7bGFiZWw6IHN0cmluZywgY29udGVudDogc3RyaW5nfVtdKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRhdGFTb3VyY2UgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRW5hYmxlcyBvciBkaXNhYmxlcyB0aGUgd2luZG93LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlZCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZWQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRW5hYmxlcyBvciBkaXNhYmxlcyB0aGUgd2luZG93IHNuYXBwaW5nIGZlYXR1cmUuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkaXNhYmxlU25hcCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVTbmFwIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkaXNhYmxlU25hcCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlU25hcCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBCeSBkZWZhdWx0IHRoZSB3aW5kb3cgaXMgY2xvc2luZyBhZnRlciB0aGUgJ0VzY2FwZScga2V5IGlzIHByZXNzZWQuIFNldCB0aGlzIHByb3BlcnR5IHRvIHRydWUsIGlmIHlvdSB3YW50IHRvIGRpc2FibGUgdGhhdC4gKi9cblx0QElucHV0KClcblx0Z2V0IGRpc2FibGVFc2NhcGUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlRXNjYXBlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkaXNhYmxlRXNjYXBlKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVFc2NhcGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQnkgZGVmYXVsdCB0aGUgd2luZG93IGlzIGhhbmRsaW5nIGtleWJvYXJkIGtleXMgbGlrZSAnQXJyb3dzJywgJ0VzY2FwZScsIGV0Yy4gU2V0IHRoaXMgcHJvcGVydHkgdG8gdHJ1ZSwgaWYgeW91IHdhbnQgdG8gZGlzYWJsZSB0aGF0LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGlzYWJsZUtleWJvYXJkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZUtleWJvYXJkIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkaXNhYmxlS2V5Ym9hcmQodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZUtleWJvYXJkID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgaG93IHRoZSBjaGFyYWN0ZXJzIGFyZSBkaXNwbGF5ZWQgaW5zaWRlIHRoZSBpbnB1dC4gQXBwbGljYWJsZSB0byBQcm9tcHQgV2luZG93LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGlzcGxheU1vZGUoKTogV2luZG93RGlzcGxheU1vZGUgfCBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzcGxheU1vZGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRpc3BsYXlNb2RlKHZhbHVlOiBXaW5kb3dEaXNwbGF5TW9kZSB8IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNwbGF5TW9kZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBcHBsaWNhYmxlIHRvIFRhYnNXaW5kb3cgd2hlbiBkb2NrZWQgaW5zaWRlIGEgRG9ja2luZ0xheW91dCBDdXN0b20gRWxlbWVudC4gIERldGVybWluZXMgd2hlcmUgdGhlIHdpbmRvdyhpdCdzIHRhYiBpdGVtcyBhcyB3ZWxsKSBjYW4gYmUgZHJvcHBlZCBpbnNpZGUgdGhlIERvY2tpbmdMYXlvdXQuICBUaGUgcHJvcGVydHkgaXMgYW4gYXJyYXkgdGhhdCBhY2NlcHRzIG11bHRpcGxlIHBvc2l0aW9ucy4gTm90ZTogUG9zaXRpb25zIHdpdGggcHJlZml4ICdsYXlvdXQtJyBhcmUgYXBwbGllZCB0byB0aGUgVGFiIGl0ZW0gY2hpbGRyZW4gb2YgdGhlIFRhYnNXaWRub3cgb3duZXIgdGhhdCBpcyBiZWluZyBkcmFnZ2VkLiBUaGUgcmVzdCBvZiB0aGUgcG9zaXRpb25zIGluZGljYXRlIHRoZSBhbGxvd2VkIGRyb3AgcG9zaXRpb24gaW5zaWRlIHRoZSBob3ZlcmVkIHRhcmdldChUYWJzV2luZG93KS4gVXNlZCBvbmx5IGJ5IGpxeERvY2tpbmdMYXlvdXQgY3VzdG9tIGVsZW1lbnRzLiBEZXRlcm1pbmVzIHRoZSBwb3NzaWJsZSBkcm9wIHBvc2l0aW9uIGluc2lkZSB0aGUgRG9ja2luZ0xheW91dC4gVGhlIGZvbGxvd2luZyB2YWx1ZXMgYXJlIGFsbG93ZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkcm9wUG9zaXRpb24oKTogV2luZG93RHJvcFBvc2l0aW9uIHwgc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRyb3BQb3NpdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZHJvcFBvc2l0aW9uKHZhbHVlOiBXaW5kb3dEcm9wUG9zaXRpb24gfCBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZHJvcFBvc2l0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEEgY2FsbGJhY2sgZnVuY3Rpb24gZGVmaW5pbmcgdGhlIG5ldyBmb3JtYXQgZm9yIHRoZSBsYWJlbCBvZiB0aGUgUHJvZ3Jlc3MgQmFyLiBBcHBsaWNhYmxlIG9ubHkgdG8gUHJvZ3Jlc3NXaW5kb3cuICovXG5cdEBJbnB1dCgpXG5cdGdldCBmb3JtYXRGdW5jdGlvbigpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZm9ybWF0RnVuY3Rpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGZvcm1hdEZ1bmN0aW9uKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZm9ybWF0RnVuY3Rpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgcG9zaXRpb24gb2YgdGhlIGZvb3RlciBvZiB0aGUgd2luZG93IGVsZW1lbnQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBmb290ZXJQb3NpdGlvbigpOiBXaW5kb3dGb290ZXJQb3NpdGlvbiB8IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5mb290ZXJQb3NpdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZm9vdGVyUG9zaXRpb24odmFsdWU6IFdpbmRvd0Zvb3RlclBvc2l0aW9uIHwgc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmZvb3RlclBvc2l0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIHRlbXBsYXRlIGZvciB0aGUgRGlhbG9nIHNlY3Rpb24gb2YgdGhlIHdpbmRvdy4gQnkgZGVmYXVsdCBmb290ZXJUZW1wbGF0ZSBpcyBudWxsLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZm9vdGVyVGVtcGxhdGUoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmZvb3RlclRlbXBsYXRlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBmb290ZXJUZW1wbGF0ZSh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmZvb3RlclRlbXBsYXRlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldCdzIHRoZSBidXR0b25zIHRoYXQgd2lsbCBiZSB2aXNpYmxlIGluIHRoZSBoZWFkZXIgc2VjdGlvbi4gKi9cblx0QElucHV0KClcblx0Z2V0IGhlYWRlckJ1dHRvbnMoKTogc3RyaW5nW10ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGVhZGVyQnV0dG9ucyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgaGVhZGVyQnV0dG9ucyh2YWx1ZTogc3RyaW5nW10pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGVhZGVyQnV0dG9ucyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSB0ZW1wbGF0ZSBmb3IgdGhlIERpYWxvZyBzZWN0aW9uIG9mIHRoZSB3aW5kb3cuIEJ5IGRlZmF1bHQgaGVhZGVyVGVtcGxhdGUgaXMgbnVsbC4gKi9cblx0QElucHV0KClcblx0Z2V0IGhlYWRlclRlbXBsYXRlKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oZWFkZXJUZW1wbGF0ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgaGVhZGVyVGVtcGxhdGUodmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oZWFkZXJUZW1wbGF0ZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBwb3NpdGlvbiBvZiB0aGUgaGVhZGVyIG9mIHRoZSB3aW5kb3cgZWxlbWVudC4gKi9cblx0QElucHV0KClcblx0Z2V0IGhlYWRlclBvc2l0aW9uKCk6IFRhYlBvc2l0aW9uIHwgc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmhlYWRlclBvc2l0aW9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBoZWFkZXJQb3NpdGlvbih2YWx1ZTogVGFiUG9zaXRpb24gfCBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGVhZGVyUG9zaXRpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBhZGRpdGlvbmFsIGhlbHBlciB0ZXh0IGJlbG93IHRoZSB0ZXh0IGJveC4gVGhlIGhpbnQgaXMgdmlzaWJsZSBvbmx5IHdoZW4gdGhlIHRleHQgYm94IGlzIGZvY3VlZC4gQXBwbGljYWJsZSB0byBQcm9tcHQgV2luZG93LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgaGludCgpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGludCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgaGludCh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmhpbnQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyB0aGUgdmFsdWUgb2YgdGhlIFByb2dyZXNzIGJhciB0byBpbmRldGVybWluYXRlIHN0YXRlKG51bGwpIGFuZCBzdGFydHMgdGhlIGFuaW1hdGlvbi4gQXBwbGljYWJsZSBvbmx5IHRvIFByb2dyZXNzV2luZG93LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgaW5kZXRlcm1pbmF0ZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmluZGV0ZXJtaW5hdGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGluZGV0ZXJtaW5hdGUodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5kZXRlcm1pbmF0ZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBmaWxsaW5nIGRpcmVjdGlvbiBvZiB0aGUgUHJvZ3Jlc3MgQmFyLiBBcHBsaWNhYmxlIG9ubHkgdG8gUHJvZ3Jlc3NXaW5kb3cuICovXG5cdEBJbnB1dCgpXG5cdGdldCBpbnZlcnRlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmludmVydGVkIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBpbnZlcnRlZCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5pbnZlcnRlZCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGUgbGFiZWwgb2YgdGhlIHdpbmRvdyB0aGF0IGFwcGVhcnMgaW4gdGhlIGhlYWRlciBhcmVhLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbGFiZWwoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxhYmVsIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBsYWJlbCh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxhYmVsID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFdoZW4gZW5hYmxlZCB0aGUgcmVzaXppbmcgb3BlcmF0aW9uIGhhcHBlbnMgbGl2ZS4gQnkgZGVmYXVsdCBpdCdzIG5vdCBlbmFibGVkIGFuZCBkdXJpbmcgcmVzaXppbmcgYSBoaWdobGlnaHRlciBhcm91bmQgdGhlIGVkZ2VzIG9mIHRoZSB3aW5kb3cgYXBwZWFycyB0byBvdXRsaW5lICB0aGUgY3VycmVudCBzaXplIG9mIHRoZSBlbGVtZW50LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbGl2ZVJlc2l6ZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxpdmVSZXNpemUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGxpdmVSZXNpemUodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubGl2ZVJlc2l6ZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBcHBsaWNhYmxlIG9ubHkgdG8gVGFic1dpbmRvdyB3aGVuIHVzZWQgd2l0aCBhIERvY2tpbmdMYXlvdXQgY3VzdG9tIGVsZW1lbnQuVXNlZCBvbmx5IGJ5IGpxeERvY2tpbmdMYXlvdXQuIERldGVybWluZXMgdGhlIG93bmVyIGpxeERvY2tpbmdMYXlvdXQgIHRoYXQgdGhlIHdpbmRvdyBiZWxvbmdzIHRvLiBXaGVuIHRoZSB0YWJzV2luZG93IGhhcyBiZWVuIHJlbW92ZWQgZnJvbSBhIERvY2tpbmdMYXlvdXQgZWxlbWVudCwgdGhlIHByb3BlcnR5IGlzIHVzZWQgdG8gaW5kaWNhdGUgdGhhdCBpdCBiZWxvbmdzIHRvIHRoYXQgcGFydGljdWxhciBEb2NraW5nbGF5b3V0LiBBY2NlcHRzIGEgc3RyaW5nLCByZXByZXNlbnRpbmcgdGhlIElEIG9mIGEganF4RG9ja2luZ0xheW91dCBvbiB0aGUgcGFnZSwgb3IgYW4gaW5zdGFuY2Ugb2YganF4RG9rY2luZ0xheW91dC4gKi9cblx0QElucHV0KClcblx0Z2V0IGxheW91dCgpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubGF5b3V0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBsYXlvdXQodmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sYXlvdXQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSBsYW5ndWFnZS4gVXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZSBwcm9wZXJ0eSBtZXNzYWdlcy4gICovXG5cdEBJbnB1dCgpXG5cdGdldCBsb2NhbGUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxvY2FsZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbG9jYWxlKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubG9jYWxlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEFwcGxpY2FibGUgb25seSB0byBUYWJzV2luZG93IHdoZW4gZG9ja2VkIGluc2lkZSBhIERvY2tpbmdMYXlvdXQgQ3VzdG9tIEVsZW1lbnQuRGV0ZXJtaW5lcyBvZiB0aGUgaXRlbSBjYW4gYmUgcmVzaXplZCBvciBub3QuICovXG5cdEBJbnB1dCgpXG5cdGdldCBsb2NrZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sb2NrZWQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGxvY2tlZCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sb2NrZWQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ2FsbGJhY2ssIHJlbGF0ZWQgdG8gbG9jYWxpemF0aW9uIG1vZHVsZS4gICovXG5cdEBJbnB1dCgpXG5cdGdldCBsb2NhbGl6ZUZvcm1hdEZ1bmN0aW9uKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sb2NhbGl6ZUZvcm1hdEZ1bmN0aW9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBsb2NhbGl6ZUZvcm1hdEZ1bmN0aW9uKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubG9jYWxpemVGb3JtYXRGdW5jdGlvbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIGlmIHRoZSB3aW5kb3cgaXMgbWF4aW1pemVkIG9yIG5vdC4gV2hlbiBtYXhpbWl6ZWQgdGhlIHdpbmRvdyBjb3ZlcnMgdGhlIHdob2xlIHZpZXdwb3J0LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbWF4aW1pemVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubWF4aW1pemVkIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBtYXhpbWl6ZWQodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubWF4aW1pemVkID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyBhbiBvYmplY3Qgc3BlY2lmeWluZyBzdHJpbmdzIHVzZWQgaW4gdGhlIHdpZGdldCB0aGF0IGNhbiBiZSBsb2NhbGl6ZWQuIFVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCB0aGUgcHJvcGVydHkgbG9jYWxlLiAgKi9cblx0QElucHV0KClcblx0Z2V0IG1lc3NhZ2VzKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5tZXNzYWdlcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbWVzc2FnZXModmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5tZXNzYWdlcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIGlmIHRoZSB3aW5kb3cgaXMgbW9kYWwgb3Igbm90LiBJZiB0cnVlIHRoZSB1c2VyIGNhbiBvbmx5IGludGVyYWN0IHdpdGggdGhlIHdpbmRvdyBhbmQgbm90aGluZyBlbHNlIG9uIHRoZSBwYWdlLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbW9kYWwoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5tb2RhbCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbW9kYWwodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubW9kYWwgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQXBwbGljYWJsZSB0byBUYWJzV2luZG93IHdoZW4gZG9ja2VkIGluc2lkZSBhIERvY2tpbmdMYXlvdXQgQ3VzdG9tIEVsZW1lbnQuIERldGVybWluZXMgdGhlIG1heCBzaXplIG9mIHRoZSBpdGVtLiBBcHBsaWNhYmxlIHRvIFByb2dyZXNzIFdpbmRvdyBieSBhbGxvd2luZyB0aGUgdXNlciB0byBzcGVjaWZ5IHRoZSBtYXhpbXVtIG9mIHRoZSBQcm9ncmVzc0Jhci4gKi9cblx0QElucHV0KClcblx0Z2V0IG1heCgpOiBzdHJpbmcgfCBudW1iZXIgfCBudWxsIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm1heCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbWF4KHZhbHVlOiBzdHJpbmcgfCBudW1iZXIgfCBudWxsKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm1heCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBcHBsaWNhYmxlIHRvIFRhYnNXaW5kb3cgd2hlbiBkb2NrZWQgaW5zaWRlIERvY2tpbmdMYXlvdXQgQ3VzdG9tIEVsZW1lbnQuIERldGVybWluZXMgdGhlIG1pbiBzaXplIG9mIHRoZSBpdGVtLiBBcHBsaWNhYmxlIHRvIFByb2dyZXNzIFdpbmRvdyBieSBhbGxvd2luZyB0aGUgdXNlciB0byBzcGVjaWZ5IHRoZSBtaW5pbXUgb2YgdGhlIFByb2dyZXNzQmFyLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbWluKCk6IHN0cmluZyB8IG51bWJlciB8IG51bGwge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubWluIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBtaW4odmFsdWU6IHN0cmluZyB8IG51bWJlciB8IG51bGwpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubWluID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgaWYgdGhlIHdpbmRvdyBpcyBtaW5pbWl6ZWQgb3Igbm90LiBXaGVuIG1pbmltaXplZCB0aGUgd2luZG93IGlzIGRvY2tlZCBhdCB0aGUgYm90dG9tIGxlZnQgY29ybmVyIG9mIHRoZSB2aWV3cG9ydC4gKi9cblx0QElucHV0KClcblx0Z2V0IG1pbmltaXplZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm1pbmltaXplZCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbWluaW1pemVkKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm1pbmltaXplZCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIG1heGltdW0gbnVtYmVyIG9mIGNoYXJhY3RlcnMgdGhhdCB0aGUgdXNlciBjYW4gZW50ZXIuIEFwcGxpY2FibGUgdG8gUHJvbXB0L011bHRpbGluZVByb21wdCBXaW5kb3cuICovXG5cdEBJbnB1dCgpXG5cdGdldCBtYXhMZW5ndGgoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm1heExlbmd0aCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbWF4TGVuZ3RoKHZhbHVlOiBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubWF4TGVuZ3RoID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgbWluaW11bSBudW1iZXIgb2YgY2hhcmFjdGVycyB0aGF0IHRoZSB1c2VyIGhhdmUgdG8gZW50ZXIgdG8gdHJpZ2dlciB0aGUgYXV0byBjb21wbGV0ZSBmdW5jdGlvbmFsaXR5LiBBcHBsaWNhYmxlIHRvIFByb21wdC9NdWx0aWxpbmVQcm9tcHQgV2luZG93LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbWluTGVuZ3RoKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5taW5MZW5ndGggOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG1pbkxlbmd0aCh2YWx1ZTogbnVtYmVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm1pbkxlbmd0aCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIGlmIHRoZSB3aW5kb3cgaXMgdmlzaWJsZSBvciBub3QuICovXG5cdEBJbnB1dCgpXG5cdGdldCBvcGVuZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vcGVuZWQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG9wZW5lZCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vcGVuZWQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyBpZiB0aGUgd2luZG93IGlzIHBpbm5lZCBvciBub3QuIFBpbm5lZCB3aW5kb3cgaXMgYSB3aW5kb3cgdGhhdCBjYW4ndCBiZSBkcmFnZ2VkIGJ1dCBjYW4gYmUgcmVzaXplZC4gKi9cblx0QElucHV0KClcblx0Z2V0IHBpbm5lZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnBpbm5lZCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcGlubmVkKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnBpbm5lZCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBpbnB1dCdzIHBsYWNlaG9sZGVyLiBBcHBsaWNhYmxlIHRvIFByb21wdCBXaW5kb3cuICovXG5cdEBJbnB1dCgpXG5cdGdldCBwbGFjZWhvbGRlcigpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucGxhY2Vob2xkZXIgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHBsYWNlaG9sZGVyKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucGxhY2Vob2xkZXIgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgbGFiZWwgZm9yIHRoZSBJbnB1dCBpbnNpbmRlIHRoZSBQcm9tcHRXaW5kb3cuICovXG5cdEBJbnB1dCgpXG5cdGdldCBwcm9tcHRMYWJlbCgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucHJvbXB0TGFiZWwgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHByb21wdExhYmVsKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucHJvbXB0TGFiZWwgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSWYgdGhlIGVsZW1lbnQgaXMgcmVhZG9ubHksIHVzZXJzIGNhbm5vdCBpbnRlcmFjdCB3aXRoIGl0LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcmVhZG9ubHkoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZWFkb25seSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcmVhZG9ubHkodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmVhZG9ubHkgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gV2hlbiBhcHBsaWVkIGEgcmVzaXplIGluZGljYXRvciBpcyBkaXNwbGF5ZWQgaW4gdGhlIGJvdHRvbSByaWdodCBjb3JuZXIgb2YgdGhlIHdpbmRvdyBhbmQgcmVzaXppbmcgb3BlcmF0aW9uIGNhbiBiZSBpbml0aWF0ZWQgb25seSBmcm9tIGl0cyBwb3NpdGlvbi4gKi9cblx0QElucHV0KClcblx0Z2V0IHJlc2l6ZUluZGljYXRvcigpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlc2l6ZUluZGljYXRvciA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcmVzaXplSW5kaWNhdG9yKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlc2l6ZUluZGljYXRvciA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSByZXNpemluZyBtb2RlIG9mIHRoZSB3aW5kb3cuICBTZXZlcmFsIG1vZGVzIGFyZSBhdmFpbGFibGU6ICAgbm9uZSAtIHJlc2l6aW5nIGlzIGRpc2FibGVkLiAgdmVydGljYWwgLSB2ZXJ0aWNhbCByZXNpemluZyBpcyBhbGxvd2VkLiAgaG9yaXpvbnRhbCAtIGhvcml6b250YWwgcmVzaXppbmcgaXMgYWxsb3dlZC4gYm90aCAtIGhvcml6b250YWwgYW5kIHZlcnRpY2FsIHJlc2l6aW5nIGlzIGFsbG93ZWQuIHRvcCAtIHRoZSB3aW5kb3cgY2FuIG9ubHkgYmUgcmVzaXplZCBmcm9tIHRoZSB0b3Agc2lkZS4gYm90dG9tIC0gdGhlIHdpbmRvdyBpcyByZXNpemFibGUgb25seSBmcm9tIHRoZSBib3R0b20gc2lkZS4gbGVmdCAtIHRoZSB3aW5kb3cgY2FuIGJlIHJlc2l6ZWQgb25seSBmcm9tIHRoZSBsZWZ0IHNpZGUuIHJpZ2h0IC0gdGhlIHdpbmRvdyBjYW4gYmUgcmVzaXplZCBvbmx5IGZyb20gdGhlIHJpZ2h0IHNpZGUuICAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcmVzaXplTW9kZSgpOiBXaW5kb3dSZXNpemVNb2RlIHwgc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlc2l6ZU1vZGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHJlc2l6ZU1vZGUodmFsdWU6IFdpbmRvd1Jlc2l6ZU1vZGUgfCBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmVzaXplTW9kZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIHZhbHVlIGluZGljYXRpbmcgd2hldGhlciB0aGUgZWxlbWVudCBpcyBhbGlnbmVkIHRvIHN1cHBvcnQgbG9jYWxlcyB1c2luZyByaWdodC10by1sZWZ0IGZvbnRzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcmlnaHRUb0xlZnQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yaWdodFRvTGVmdCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcmlnaHRUb0xlZnQodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmlnaHRUb0xlZnQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU3BlY2lmaWVzIHRoYXQgdGhlIHVzZXIgbXVzdCBmaWxsIHRoZSBpbnB1dCBiZWZvcmUgc3VibWl0dGluZyBhIGZvcm0gd2l0aCB0aGUgdGV4dCBib3guQXBwbGljYWJsZSB0byBQcm9tcHQgV2luZG93LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcmVxdWlyZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZXF1aXJlZCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcmVxdWlyZWQodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmVxdWlyZWQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU3BlY2lmaWVzIHRoZSBtZXNzYWdlIHRoYXQgd2lsbCBhcHBlYXIgaWYgcmVxdWlyZWQgaXMgc2V0IGFuZCBubyB2YWx1ZSBpcyBwcm92aWRlZCBpbiB0aGUgaW5wdXQuIEFwcGxpY2FibGUgdG8gUHJvbXB0IFdpbmRvdy4gKi9cblx0QElucHV0KClcblx0Z2V0IHJlcXVpcmVkTWVzc2FnZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmVxdWlyZWRNZXNzYWdlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCByZXF1aXJlZE1lc3NhZ2UodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZXF1aXJlZE1lc3NhZ2UgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBjb250ZW50IG9mIHRoZSBpbnB1dCB3aWxsIGJlIHNlbGVjdGVkIG9uIGZvY3VzIG9yIG5vdC4gQXBwbGljYWJsZSB0byBQcm9tcHQgV2luZG93LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc2VsZWN0QWxsT25Gb2N1cygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdEFsbE9uRm9jdXMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHNlbGVjdEFsbE9uRm9jdXModmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0QWxsT25Gb2N1cyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgd2hpY2ggdGFiIGlzIHNlbGVjdGVkLiBBcHBsaWNhYmxlIG9ubHkgdG8gVGFic1dpbmRvdy4gKi9cblx0QElucHV0KClcblx0Z2V0IHNlbGVjdGVkSW5kZXgoKTogbnVtYmVyIHwgbnVsbCB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zZWxlY3RlZEluZGV4IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzZWxlY3RlZEluZGV4KHZhbHVlOiBudW1iZXIgfCBudWxsKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdGVkSW5kZXggPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgd2F5IHRoZSB1c2VyIGNhbiBzd2l0Y2ggYmV0d2VlbiB0YWJzLiBBcHBsaWNhYmxlIG9ubHkgdG8gVGFic1dpbmRvdy4gKi9cblx0QElucHV0KClcblx0Z2V0IHNlbGVjdGlvbk1vZGUoKTogVGFiU2VsZWN0aW9uTW9kZSB8IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25Nb2RlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzZWxlY3Rpb25Nb2RlKHZhbHVlOiBUYWJTZWxlY3Rpb25Nb2RlIHwgc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdGlvbk1vZGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSW5kaWNhdGVzIHRoZSBpbmRleCBvZiB0aGUgbGFzdCBjaGFyYWN0ZXIgaW4gdGhlIGN1cnJlbnQgc2VsZWN0aW9uLiBBcHBsaWNhYmxlIG9ubHkgdG8gTXVsdGlsaW5lUHJvbXB0V2luZG93LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc2VsZWN0aW9uRW5kKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25FbmQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHNlbGVjdGlvbkVuZCh2YWx1ZTogbnVtYmVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdGlvbkVuZCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBJbmRpY2F0ZXMgdGhlIGluZGV4IHRvIHRoZSBmaXJzdCBjaGFyYWN0ZXIgaW4gdGhlIGN1cnJlbnQgc2VsZWN0aW9uLiBBcHBsaWNhYmxlIG9ubHkgdG8gTXVsdGlsaW5lUHJvbXB0V2luZG93LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc2VsZWN0aW9uU3RhcnQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdGlvblN0YXJ0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzZWxlY3Rpb25TdGFydCh2YWx1ZTogbnVtYmVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdGlvblN0YXJ0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEVuYWJsZXMvRGlzYWJsZWQgdGhlIGxhYmVsIGZvciB0aGUgUHJvZ3Jlc3MgQmFyLiBBcHBsaWNhYmxlIG9ubHkgdG8gUHJvZ3Jlc3MgV2luZG93LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc2hvd1Byb2dyZXNzVmFsdWUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zaG93UHJvZ3Jlc3NWYWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc2hvd1Byb2dyZXNzVmFsdWUodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2hvd1Byb2dyZXNzVmFsdWUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQSBnZXR0ZXIgdGhhdCByZXR1cm5zIHRoZSBzaWJsaW5ncyAodGhhdCBzaGFyZSB0aGUgc2FtZSBwYXJlbnQpIG9mIGEgTGF5b3V0UGFuZWwgaXRlbSB0aGF0IGlzIGRvY2tlZCBpbnNpZGUgYSBEb2NraW5nTGF5b3V0LiBUaGUgc2libGluZ3MgYXJlIGFsc28gRG9ja2luZ0xheW91dCBpdGVtcyAoIExheW91dFBhbmVscykuQXBwbGljYWJsZSBvbmx5IHRvIFRhYnNXaW5kb3cgd2hlbiBkb2NrZWQgaW5zaWRlIGEgRG9ja2luZ0xheW91dC4gKi9cblx0QElucHV0KClcblx0Z2V0IHNpYmxpbmdzKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zaWJsaW5ncyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc2libGluZ3ModmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zaWJsaW5ncyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBcHBsaWNhYmxlIHRvIFRhYnNXaW5kb3cgd2hlbiBuZXN0ZWQgaW5zaWRlIGEgRG9ja2luZ0xheW91dCBDdXN0b20gRWxlbWVudC4gRGV0ZXJtaW5lcyB0aGUgc2l6ZSBvZiB0aGUgaXRlbS4gKi9cblx0QElucHV0KClcblx0Z2V0IHNpemUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNpemUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHNpemUodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zaXplID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNwZWNpZmllcyB3aGV0aGVyIHRoZSBlbGVtZW50IGlzIHRvIGhhdmUgaXRzIHNwZWxsaW5nIGFuZCBncmFtbWFyIGNoZWNrZWQgb3Igbm90LiBBcHBsaWNhYmxlIG9ubHkgdG8gTXVsdGlsaW5lUHJvbXB0V2luZG93LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc3BlbGxDaGVjaygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNwZWxsQ2hlY2sgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHNwZWxsQ2hlY2sodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc3BlbGxDaGVjayA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgd2hldGhlciBjbG9zZSBidXR0b25zIGFyZSBkaXNwbGF5ZWQgaW5zaWRlIHRoZSBUYWIgU3RyaXAgb2YgdGhlIFRhYnNXaW5kb3cuIEFwcGxpY2FibGUgb25seSB0byBUYWJzV2luZG93LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdGFiQ2xvc2VCdXR0b25zKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGFiQ2xvc2VCdXR0b25zIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0YWJDbG9zZUJ1dHRvbnModmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGFiQ2xvc2VCdXR0b25zID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgaWYgdGhlIGNsb3NlIGJ1dHRvbiBpcyB2aXNpYmxlIG9uIHNlbGVjdCBvciBhbHdheXMuIEFwcGxpY2FibGUgb25seSB0byBUYWJzV2luZG93LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdGFiQ2xvc2VCdXR0b25Nb2RlKCk6IFdpbmRvd1RhYkNsb3NlQnV0dG9uTW9kZSB8IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50YWJDbG9zZUJ1dHRvbk1vZGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRhYkNsb3NlQnV0dG9uTW9kZSh2YWx1ZTogV2luZG93VGFiQ2xvc2VCdXR0b25Nb2RlIHwgc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRhYkNsb3NlQnV0dG9uTW9kZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIFRhYnMgc2Nyb2xsIGJ1dHRvbnMgYmVoYXZpb3IuIEFwcGxpY2FibGUgb25seSB3aGVuIHRhYkxheW91dCBpcyAnc2Nyb2xsJy4gQXBwbGljYWJsZSBvbmx5IHRvIFRhYnNXaW5kb3cuICovXG5cdEBJbnB1dCgpXG5cdGdldCB0YWJPdmVyZmxvdygpOiBPdmVyZmxvdyB8IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50YWJPdmVyZmxvdyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdGFiT3ZlcmZsb3codmFsdWU6IE92ZXJmbG93IHwgc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRhYk92ZXJmbG93ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGV0bWluZXMgVGFiIFN0cmlwIGlzIHBvc2l0aW9uZWQgb2YgdGhlIFRhYnNXaW5kb3cuIEFwcGxpY2FibGUgb25seSB0byBUYWJzV2luZG93LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdGFiUG9zaXRpb24oKTogVGFiUG9zaXRpb24gfCBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGFiUG9zaXRpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRhYlBvc2l0aW9uKHZhbHVlOiBUYWJQb3NpdGlvbiB8IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50YWJQb3NpdGlvbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIHBvc2l0aW9uIG9mIHRoZSBzY3JvbGwgYnV0dG9ucyBpbnNpZGUgdGhlIFRhYiBoZWFkZXIgb2YgdGhlIFRhYnNXaW5kb3cuIEFwcGxpY2FibGUgb25seSB0byBUYWJzV2luZG93LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdGFiU2Nyb2xsQnV0dG9uc1Bvc2l0aW9uKCk6IExheW91dFBvc2l0aW9uIHwgc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRhYlNjcm9sbEJ1dHRvbnNQb3NpdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdGFiU2Nyb2xsQnV0dG9uc1Bvc2l0aW9uKHZhbHVlOiBMYXlvdXRQb3NpdGlvbiB8IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50YWJTY3JvbGxCdXR0b25zUG9zaXRpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSBvcmllbnRhdGlvbiBvZiB0aGUgdGV4dCBpbiB0aGUgdGFicyBsYWJlbHMgb2YgdGhlIFRhYnNXaW5kb3cuIEFwcGxpY2FibGUgb25seSB0byBUYWJzV2luZG93LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdGFiVGV4dE9yaWVudGF0aW9uKCk6IE9yaWVudGF0aW9uIHwgc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRhYlRleHRPcmllbnRhdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdGFiVGV4dE9yaWVudGF0aW9uKHZhbHVlOiBPcmllbnRhdGlvbiB8IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50YWJUZXh0T3JpZW50YXRpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgdGhlbWUuIFRoZW1lIGRlZmluZXMgdGhlIGxvb2sgb2YgdGhlIGVsZW1lbnQgKi9cblx0QElucHV0KClcblx0Z2V0IHRoZW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50aGVtZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdGhlbWUodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50aGVtZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBJZiBpcyBzZXQgdG8gdHJ1ZSwgdGhlIGVsZW1lbnQgY2Fubm90IGJlIGZvY3VzZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCB1bmZvY3VzYWJsZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnVuZm9jdXNhYmxlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB1bmZvY3VzYWJsZSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC51bmZvY3VzYWJsZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSB2YWx1ZSBvZiB0aGUgVGV4dEJveC9Qcm9ncmVzc0JhciBpbnNpZGUgdGhlIERpYWxvZy9Qcm9tcHQvUHJvZ3Jlc3MgV2luZG93ICovXG5cdEBJbnB1dCgpXG5cdGdldCB2YWx1ZSgpOiBzdHJpbmcgfCBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHZhbHVlKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgYWN0dWFsIHBhcmVudCBvZiB0aGUgZWxlbWVudC4gVGhlIHdpbmRvdyBjYW4gc2l6ZSBhbmQgbW92ZSBvbmx5IGluIHRoZSBhcmVhIG9mIHRoYXQgZWxlbWVudC4gKi9cblx0QElucHV0KClcblx0Z2V0IHdpbmRvd1BhcmVudCgpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQud2luZG93UGFyZW50IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB3aW5kb3dQYXJlbnQodmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC53aW5kb3dQYXJlbnQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSW5kaWNhdGVzIGhvdyB0aGUgaW5wdXQgd3JhcHMgdGV4dC4gQXBwbGljYWJsZSBvbmx5IHRvIE11bHRpbGluZVByb21wdFdpbmRvdy4gKi9cblx0QElucHV0KClcblx0Z2V0IHdyYXAoKTogV2luZG93V3JhcCB8IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC53cmFwIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB3cmFwKHZhbHVlOiBXaW5kb3dXcmFwIHwgc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LndyYXAgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQganVzdCBiZWZvcmUgdGhlIHdpbmRvdyBzdGFydHMgb3BlbmluZy5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvbk9wZW5pbmc6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSB3aW5kb3cgaXMgb3BlbmVkKCB2aXNpYmxlICkuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHQqL1xuXHRAT3V0cHV0KCkgb25PcGVuOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQganVzdCBiZWZvcmUgdGhlIHdpbmRvdyBzdGFydHMgY2xvc2luZy5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvbkNsb3Npbmc6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSB3aW5kb3cgaXMgY2xvc2VkKCBoaWRkZW4gKVxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Ki9cblx0QE91dHB1dCgpIG9uQ2xvc2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSB3aW5kb3cgaXMgY29sbGFwc2VkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Ki9cblx0QE91dHB1dCgpIG9uQ29sbGFwc2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHdpbmRvdydzIGRyYWdnaW5nIGlzIGVuZGVkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Ki9cblx0QE91dHB1dCgpIG9uRHJhZ0VuZDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gd2luZG93J3MgZHJhZ2dpbmcgaXMgc3RhcnRlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvbkRyYWdTdGFydDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHdpbmRvdyBpcyBleHBhbmRlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvbkV4cGFuZDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHdpbmRvdyBpcyBtYXhpbWl6ZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHQqL1xuXHRAT3V0cHV0KCkgb25NYXhpbWl6ZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHdpbmRvdyBpcyBtaW5pbWl6ZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHQqL1xuXHRAT3V0cHV0KCkgb25NaW5pbWl6ZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gd2luZG93J3MgcmVzaXppbmcgaXMgZW5kZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHQqL1xuXHRAT3V0cHV0KCkgb25SZXNpemVFbmQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHdpbmRvdydzIHJlc2l6aW5nIGlzIHN0YXJ0ZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHQqL1xuXHRAT3V0cHV0KCkgb25SZXNpemVTdGFydDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHdpbmRvdyBpcyByZXN0b3JlZCB0byBpdCdzIHByZXZpb3VzIHN0YXRlIGJlZm9yZSBtYXhpbWl6YXRpb24uXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHQqL1xuXHRAT3V0cHV0KCkgb25SZXN0b3JlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gQXBwZW5kcyBhIHRhYml0ZW0gdG8gdGhlIGVuZCBvZiB0aGUgbGlzdCBvZiB0YWIgaXRlbXMgaW5zaWRlIGVsZW1lbnQuIFxuXHQqIEBwYXJhbSB7Tm9kZX0gbm9kZS4gQSBUYWJJdGVtIGVsZW1lbnQgdGhhdCBzaG91bGQgYmUgYWRkZWQgdG8gdGhlIHJlc3Qgb2YgdGhlIGl0ZW1zIGFzIHRoZSBsYXN0IGl0ZW0uXG5cdCogQHJldHVybnMge05vZGV9XG4gICovXG5cdHB1YmxpYyBhc3luYyBhcHBlbmRDaGlsZChub2RlKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyB0aGUgd2luZG93IHRvIHRoZSB0b3AgbGV2ZWwgc28gdGhlIHVzZXIgY2FuIGludGVyYWN0IHdpdGggaXQuIFxuXHQqL1xuICAgIHB1YmxpYyBicmluZ1RvRnJvbnQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmJyaW5nVG9Gcm9udCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmJyaW5nVG9Gcm9udCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDbGVhcnMgdGhlIGNvbnRlbnQgb2YgdGhlIFdpbmRvdy4gXG5cdCovXG4gICAgcHVibGljIGNsZWFyKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbGVhcigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNsZWFyKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIENsb3NlcyB0aGUgd2luZG93LiBcblx0Ki9cbiAgICBwdWJsaWMgY2xvc2UoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xvc2UoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ29sbGFwc2VzIHRoZSB3aW5kb3cuIFxuXHQqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cbiAgKi9cblx0cHVibGljIGFzeW5jIGNvbGxhcHNlKCk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5jb2xsYXBzZSgpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gTWFrZXMgc3VyZSBhIHRhYiBpdGVtIGlzIHZpc2libGUgYnkgc2Nyb2xsaW5nIHRvIGl0LiBBcHBsaWNhYmxlIG9ubHkgdG8gVGFic1dpbmRvdy4gXG5cdCogQHBhcmFtIHtudW1iZXJ9IGluZGV4LiBUaGUgaW5kZXggb2YgdGhlIHRhYiB0byBzY3JvbGwgdG8uXG5cdCovXG4gICAgcHVibGljIGVuc3VyZVZpc2libGUoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5lbnN1cmVWaXNpYmxlKGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5lbnN1cmVWaXNpYmxlKGluZGV4KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRXhwYW5kcyB0aGUgd2luZG93IGFmdGVyIGJlaW5nIGNvbGxhcHNlZC4gXG5cdCogQHJldHVybnMge2FueVtdfVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZXhwYW5kKCk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5leHBhbmQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEluc2VydHMgYSBuZXcgdGFiIGFuZCBhbiBhc3NvY2lhdGVkIGNvbnRlbnQgc2VjdGlvbi4gQXBwbGljYWJsZSBvbmx5IHRvIFRhYnNXaW5kb3cuIFxuXHQqIEBwYXJhbSB7bnVtYmVyfSBpbmRleC4gVGhlIGluZGV4IHRvIGluc2VydCBhIG5ldyB0YWIgYXQuXG5cdCogQHBhcmFtIHthbnl9IGRldGFpbHMuIEFuIE9iamVjdCB3aXRoIHRoZSBmaWVsZHMgXCJsYWJlbFwiLCBcImxhYmVsU2l6ZVwiLCBcImNvbnRlbnRcIiBhbmQgXCJncm91cFwiLlxuXHQqL1xuICAgIHB1YmxpYyBpbnNlcnQoaW5kZXg6IG51bWJlciwgZGV0YWlsczogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lmluc2VydChpbmRleCwgZGV0YWlscyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5zZXJ0KGluZGV4LCBkZXRhaWxzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSW5zZXJ0cyB0aGUgc3BlY2lmaWVkIFwic21hcnQtdGFiLWl0ZW1cIiBub2RlIGJlZm9yZSB0aGUgcmVmZXJlbmNlIFwic21hcnQtdGFiLWl0ZW1cIiBub2RlLiBBcHBsaWNhYmxlIG9ubHkgdG8gVGFic1dpbmRvdy4gXG5cdCogQHBhcmFtIHtOb2RlfSBuZXdOb2RlLiBUaGUgXCJzbWFydC10YWItaXRlbVwiIG5vZGUgdG8gaW5zZXJ0LlxuXHQqIEBwYXJhbSB7Tm9kZSB8IG51bGx9IHJlZmVyZW5jZU5vZGU/LiBUaGUgXCJzbWFydC10YWItaXRlbVwiIG5vZGUgYmVmb3JlIHdoaWNoIG5ld05vZGUgaXMgaW5zZXJ0ZWQuXG5cdCogQHJldHVybnMge05vZGV9XG4gICovXG5cdHB1YmxpYyBhc3luYyBpbnNlcnRCZWZvcmUobmV3Tm9kZSwgcmVmZXJlbmNlTm9kZT8pOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKG5ld05vZGUsIHJlZmVyZW5jZU5vZGUpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gTW92ZXMgdGhlIHdpbmRvdyB0byBhIG5ldyBwb3NpdGlvbiBcblx0KiBAcGFyYW0ge3N0cmluZyB8IG51bWJlcn0gbGVmdC4gTGVmdCBwb3NpdGlvbi4gRm9yIGV4YW1wbGU6ICcxMDBweCcuIFxuXHQqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyfSB0b3AuIFRvcCBwb3NpdGlvbi4gRm9yIGV4YW1wbGU6ICcxMDBweCcuIFxuXHQqL1xuICAgIHB1YmxpYyBtb3ZlKGxlZnQ6IHN0cmluZyB8IG51bWJlciwgdG9wOiBzdHJpbmcgfCBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQubW92ZShsZWZ0LCB0b3ApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lm1vdmUobGVmdCwgdG9wKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gTWF4aW1pemVzIHRoZSB3aW5kb3cgdG8gZmlsbCB0aGUgYXJlYS4gXG5cdCovXG4gICAgcHVibGljIG1heGltaXplKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5tYXhpbWl6ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lm1heGltaXplKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIE1pbmltaXplcyB0aGUgd2luZG93LiBcblx0Ki9cbiAgICBwdWJsaWMgbWluaW1pemUoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lm1pbmltaXplKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQubWluaW1pemUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gT3BlbnMgdGhlIHdpbmRvdyBcblx0Ki9cbiAgICBwdWJsaWMgb3BlbigpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQub3BlbigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lm9wZW4oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUGlucyB0aGUgd2luZG93LiBEaXNhYmxlcyB3aW5kb3cgZHJhZ2dpbmcuIFxuXHQqL1xuICAgIHB1YmxpYyBwaW4oKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnBpbigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnBpbigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZW1vdmVzIGEgdGFiIGFuZCBpdHMgYXNzb2NpYXRlZCBjb250ZW50IHNlY3Rpb24uIEFwcGxpY2FibGUgb25seSB0byBUYWJzV2luZG93LiBcblx0KiBAcGFyYW0ge251bWJlcn0gaW5kZXguIFRoZSBpbmRleCBvZiB0aGUgdGFiIHRvIHJlbW92ZS5cblx0Ki9cbiAgICBwdWJsaWMgcmVtb3ZlQXQoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVBdChpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVtb3ZlQXQoaW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZW1vdmVzIGEgY2hpbGQgXCJzbWFydC10YWItaXRlbVwiIG5vZGUuIEFwcGxpY2FibGUgb25seSB0byBUYWJzV2luZG93LiBcblx0KiBAcGFyYW0ge05vZGV9IG5vZGUuIFRoZSBcInNtYXJ0LXRhYi1pdGVtXCIgbm9kZSB0byByZW1vdmUuXG5cdCogQHJldHVybnMge05vZGV9XG4gICovXG5cdHB1YmxpYyBhc3luYyByZW1vdmVDaGlsZChub2RlKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVzdG9yZXMgdGhlIHdpbmRvdyB0byBpdCdzIHByZXZpb3VzIHNpemUgYmVmb3JlIG1heGltaXphdGlvbi9taW5pbWl6YXRpb24uIFxuXHQqL1xuICAgIHB1YmxpYyByZXN0b3JlKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZXN0b3JlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVzdG9yZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZWxlY3RzIGEgdGFiLiAgQXBwbGljYWxiZSBvbmx5IHRvIFRhYnNXaW5kb3cgZWxlbWVudHMuIFxuXHQqIEBwYXJhbSB7bnVtYmVyfSBpbmRleC4gVGhlIGluZGV4IG9mIHRoZSB0YWIgdG8gc2VsZWN0LlxuXHQqL1xuICAgIHB1YmxpYyBzZWxlY3QoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zZWxlY3QoaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdChpbmRleCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFVucGlucyB0aGUgd2luZG93LiBFbmFibGVzIHdpbmRvdyBkcmFnZ2luZy4gXG5cdCovXG4gICAgcHVibGljIHVucGluKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC51bnBpbigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnVucGluKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFVwZGF0ZXMgdGhlIGhlYWRlciBsYWJlbC4gXG5cdCogQHBhcmFtIHtzdHJpbmd9IGxhYmVsLiBUaGUgbmV3IGxhYmVsIG9mIHRoZSBIZWFkZXIuXG5cdCovXG4gICAgcHVibGljIHVwZGF0ZUxhYmVsKGxhYmVsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQudXBkYXRlTGFiZWwobGFiZWwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnVwZGF0ZUxhYmVsKGxhYmVsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVXBkYXRlcyB0aGUgY29udGVudC4gXG5cdCogQHBhcmFtIHtzdHJpbmcgfCBIVE1MRWxlbWVudH0gY29udGVudC4gVGhlIG5ldyBjb250ZW50IG9mIHRoZSB3aW5kb3cuXG5cdCovXG4gICAgcHVibGljIHVwZGF0ZUNvbnRlbnQoY29udGVudDogc3RyaW5nIHwgSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQudXBkYXRlQ29udGVudChjb250ZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC51cGRhdGVDb250ZW50KGNvbnRlbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBVcGRhdGVzIGEgVEFCIGluIFRBQiBXaW5kb3cgYW5kIGl0cyBhc3NvY2lhdGVkIGNvbnRlbnQgc2VjdGlvbi4gIEFwcGxpZXMgb25seSB0byBUYWJzV2luZG93IGVsZW1lbnRzLiBcblx0KiBAcGFyYW0ge251bWJlcn0gaW5kZXguIFRoZSBpbmRleCBvZiB0aGUgdGFiIHRvIHVwZGF0ZS5cblx0KiBAcGFyYW0ge3N0cmluZ30gbGFiZWwuIFRoZSBuZXcgbGFiZWwgb2YgdGhlIHRhYi4gVGhlIHZhbHVlIGNhbiBiZSB0aGUgaWQgb2YgYW4gSFRNTFRlbXBsYXRlRWxlbWVudFxuXHQqIEBwYXJhbSB7c3RyaW5nIHwgSFRNTEVsZW1lbnR9IGNvbnRlbnQuIFRoZSBuZXcgY29udGVudCBvZiB0aGUgdGFiLlxuXHQqL1xuICAgIHB1YmxpYyB1cGRhdGUoaW5kZXg6IG51bWJlciwgbGFiZWw6IHN0cmluZywgY29udGVudDogc3RyaW5nIHwgSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQudXBkYXRlKGluZGV4LCBsYWJlbCwgY29udGVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQudXBkYXRlKGluZGV4LCBsYWJlbCwgY29udGVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cdGdldCBpc1JlbmRlcmVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCA6IGZhbHNlO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXG4gICAgICB0aGF0Lm9uQ3JlYXRlLmVtaXQodGhhdC5uYXRpdmVFbGVtZW50KTtcblxuXHRcdFNtYXJ0LlJlbmRlcigpO1xuXG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NtYXJ0LWFuZ3VsYXInKTtcblxuXHRcdHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4geyB0aGF0Lm9uUmVhZHkuZW1pdCh0aGF0Lm5hdGl2ZUVsZW1lbnQpOyB9KTtcblx0XHR0aGlzLmxpc3RlbigpO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy51bmxpc3RlbigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXHRcdGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQgJiYgdGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcblx0XHRcdGZvciAoY29uc3QgcHJvcE5hbWUgaW4gY2hhbmdlcykge1xuXHRcdFx0XHRpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcblx0XHRcdFx0XHR0aGlzLm5hdGl2ZUVsZW1lbnRbcHJvcE5hbWVdID0gY2hhbmdlc1twcm9wTmFtZV0uY3VycmVudFZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBZGQgZXZlbnQgbGlzdGVuZXJzLiAqL1xuXHRwcml2YXRlIGxpc3RlbigpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydvcGVuaW5nSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uT3BlbmluZy5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdvcGVuaW5nJywgdGhhdC5ldmVudEhhbmRsZXJzWydvcGVuaW5nSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snb3BlbkhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbk9wZW4uZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignb3BlbicsIHRoYXQuZXZlbnRIYW5kbGVyc1snb3BlbkhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2Nsb3NpbmdIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25DbG9zaW5nLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NpbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2Nsb3NpbmdIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjbG9zZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNsb3NlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgdGhhdC5ldmVudEhhbmRsZXJzWydjbG9zZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbGxhcHNlSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ29sbGFwc2UuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29sbGFwc2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbGxhcHNlSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snZHJhZ0VuZEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkRyYWdFbmQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ0VuZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snZHJhZ0VuZEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2RyYWdTdGFydEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkRyYWdTdGFydC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnU3RhcnQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2RyYWdTdGFydEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2V4cGFuZEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkV4cGFuZC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdleHBhbmQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2V4cGFuZEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ21heGltaXplSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uTWF4aW1pemUuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbWF4aW1pemUnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ21heGltaXplSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snbWluaW1pemVIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25NaW5pbWl6ZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtaW5pbWl6ZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snbWluaW1pemVIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydyZXNpemVFbmRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25SZXNpemVFbmQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplRW5kJywgdGhhdC5ldmVudEhhbmRsZXJzWydyZXNpemVFbmRIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydyZXNpemVTdGFydEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblJlc2l6ZVN0YXJ0LmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZVN0YXJ0JywgdGhhdC5ldmVudEhhbmRsZXJzWydyZXNpemVTdGFydEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jlc3RvcmVIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25SZXN0b3JlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc3RvcmUnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jlc3RvcmVIYW5kbGVyJ10pO1xuXG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJlbW92ZSBldmVudCBsaXN0ZW5lcnMuICovXG5cdHByaXZhdGUgdW5saXN0ZW4oKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ29wZW5pbmdIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdvcGVuaW5nJywgdGhhdC5ldmVudEhhbmRsZXJzWydvcGVuaW5nSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydvcGVuSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignb3BlbicsIHRoYXQuZXZlbnRIYW5kbGVyc1snb3BlbkhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY2xvc2luZ0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Nsb3NpbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2Nsb3NpbmdIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2Nsb3NlSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xvc2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2Nsb3NlSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjb2xsYXBzZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbGxhcHNlJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb2xsYXBzZUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snZHJhZ0VuZEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdFbmQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2RyYWdFbmRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2RyYWdTdGFydEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdTdGFydCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snZHJhZ1N0YXJ0SGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydleHBhbmRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdleHBhbmQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2V4cGFuZEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snbWF4aW1pemVIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtYXhpbWl6ZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snbWF4aW1pemVIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ21pbmltaXplSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWluaW1pemUnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ21pbmltaXplSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydyZXNpemVFbmRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemVFbmQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jlc2l6ZUVuZEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1sncmVzaXplU3RhcnRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemVTdGFydCcsIHRoYXQuZXZlbnRIYW5kbGVyc1sncmVzaXplU3RhcnRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jlc3RvcmVIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXN0b3JlJywgdGhhdC5ldmVudEhhbmRsZXJzWydyZXN0b3JlSGFuZGxlciddKTtcblx0XHR9XG5cblx0fVxufVxuIl19