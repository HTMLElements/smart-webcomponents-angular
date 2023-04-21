
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.window';

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

let WindowComponent = class WindowComponent extends BaseElement {
    constructor(ref) {
        super(ref);
        this.eventHandlers = [];
        /** @description This event is triggered just before the window starts opening.
        *  @param event. The custom event. 	*/
        this.onOpening = new EventEmitter();
        /** @description This event is triggered when the window is opened( visible ).
        *  @param event. The custom event. 	*/
        this.onOpen = new EventEmitter();
        /** @description This event is triggered just before the window starts closing.
        *  @param event. The custom event. 	*/
        this.onClosing = new EventEmitter();
        /** @description This event is triggered when the window is closed( hidden )
        *  @param event. The custom event. 	*/
        this.onClose = new EventEmitter();
        /** @description This event is triggered when the window is collapsed.
        *  @param event. The custom event. 	*/
        this.onCollapse = new EventEmitter();
        /** @description This event is triggered when window's dragging is ended.
        *  @param event. The custom event. 	*/
        this.onDragEnd = new EventEmitter();
        /** @description This event is triggered when window's dragging is started.
        *  @param event. The custom event. 	*/
        this.onDragStart = new EventEmitter();
        /** @description This event is triggered when the window is expanded.
        *  @param event. The custom event. 	*/
        this.onExpand = new EventEmitter();
        /** @description This event is triggered when the window is maximized.
        *  @param event. The custom event. 	*/
        this.onMaximize = new EventEmitter();
        /** @description This event is triggered when the window is minimized.
        *  @param event. The custom event. 	*/
        this.onMinimize = new EventEmitter();
        /** @description This event is triggered when window's resizing is ended.
        *  @param event. The custom event. 	*/
        this.onResizeEnd = new EventEmitter();
        /** @description This event is triggered when window's resizing is started.
        *  @param event. The custom event. 	*/
        this.onResizeStart = new EventEmitter();
        /** @description This event is triggered when the window is restored to it's previous state before maximization.
        *  @param event. The custom event. 	*/
        this.onRestore = new EventEmitter();
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('smart-window');
        for (let propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    }
    /** @description Determines if 'Add New' Tab inside the Tabs element is visible. Applicable only to TabsWindow */
    get addNewTab() {
        return this.nativeElement ? this.nativeElement.addNewTab : undefined;
    }
    set addNewTab(value) {
        this.nativeElement ? this.nativeElement.addNewTab = value : undefined;
    }
    /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
    get animation() {
        return this.nativeElement ? this.nativeElement.animation : undefined;
    }
    set animation(value) {
        this.nativeElement ? this.nativeElement.animation = value : undefined;
    }
    /** @description Determines whether and how the value should be automatically capitalized as it is entered/edited by the user. Applicable only to MultilinePromptWindow. */
    get autoCapitalize() {
        return this.nativeElement ? this.nativeElement.autoCapitalize : undefined;
    }
    set autoCapitalize(value) {
        this.nativeElement ? this.nativeElement.autoCapitalize = value : undefined;
    }
    /** @description Determines whether element will auto expand when the input overflows vertically. Applicable only to MultilinePromptWindow. */
    get autoExpand() {
        return this.nativeElement ? this.nativeElement.autoExpand : undefined;
    }
    set autoExpand(value) {
        this.nativeElement ? this.nativeElement.autoExpand = value : undefined;
    }
    /** @description Determines the label for the 'cancel' button inside the Prompt Window. */
    get cancelLabel() {
        return this.nativeElement ? this.nativeElement.cancelLabel : undefined;
    }
    set cancelLabel(value) {
        this.nativeElement ? this.nativeElement.cancelLabel = value : undefined;
    }
    /** @description Determines the label for the 'Complete' button insinde the Progress Window. */
    get completeLabel() {
        return this.nativeElement ? this.nativeElement.completeLabel : undefined;
    }
    set completeLabel(value) {
        this.nativeElement ? this.nativeElement.completeLabel = value : undefined;
    }
    /** @description Determines the label for the 'Confirm' button insinde the Prompt Window. */
    get confirmLabel() {
        return this.nativeElement ? this.nativeElement.confirmLabel : undefined;
    }
    set confirmLabel(value) {
        this.nativeElement ? this.nativeElement.confirmLabel = value : undefined;
    }
    /** @description Determines if the window is collapsed or not. When collapsed the only the header of the window is visible. */
    get collapsed() {
        return this.nativeElement ? this.nativeElement.collapsed : undefined;
    }
    set collapsed(value) {
        this.nativeElement ? this.nativeElement.collapsed = value : undefined;
    }
    /** @description When a modal window is opened, thid property determines if clicking on the mask closes the window or not. */
    get closeOnMaskClick() {
        return this.nativeElement ? this.nativeElement.closeOnMaskClick : undefined;
    }
    set closeOnMaskClick(value) {
        this.nativeElement ? this.nativeElement.closeOnMaskClick = value : undefined;
    }
    /** @description Determines the data source that will be loaded to the TabsWindow. Applicable only to TabsWindow. */
    get dataSource() {
        return this.nativeElement ? this.nativeElement.dataSource : undefined;
    }
    set dataSource(value) {
        this.nativeElement ? this.nativeElement.dataSource = value : undefined;
    }
    /** @description Enables or disables the window. */
    get disabled() {
        return this.nativeElement ? this.nativeElement.disabled : undefined;
    }
    set disabled(value) {
        this.nativeElement ? this.nativeElement.disabled = value : undefined;
    }
    /** @description Enables or disables the window snapping feature. */
    get disableSnap() {
        return this.nativeElement ? this.nativeElement.disableSnap : undefined;
    }
    set disableSnap(value) {
        this.nativeElement ? this.nativeElement.disableSnap = value : undefined;
    }
    /** @description By default the window is closing after the 'Escape' key is pressed. Set this property to true, if you want to disable that. */
    get disableEscape() {
        return this.nativeElement ? this.nativeElement.disableEscape : undefined;
    }
    set disableEscape(value) {
        this.nativeElement ? this.nativeElement.disableEscape = value : undefined;
    }
    /** @description By default the window is handling keyboard keys like 'Arrows', 'Escape', etc. Set this property to true, if you want to disable that. */
    get disableKeyboard() {
        return this.nativeElement ? this.nativeElement.disableKeyboard : undefined;
    }
    set disableKeyboard(value) {
        this.nativeElement ? this.nativeElement.disableKeyboard = value : undefined;
    }
    /** @description Determines how the characters are displayed inside the input. Applicable to Prompt Window. */
    get displayMode() {
        return this.nativeElement ? this.nativeElement.displayMode : undefined;
    }
    set displayMode(value) {
        this.nativeElement ? this.nativeElement.displayMode = value : undefined;
    }
    /** @description Applicable to TabsWindow when docked inside a DockingLayout Custom Element.  Determines where the window(it's tab items as well) can be dropped inside the DockingLayout.  The property is an array that accepts multiple positions. Note: Positions with prefix 'layout-' are applied to the Tab item children of the TabsWidnow owner that is being dragged. The rest of the positions indicate the allowed drop position inside the hovered target(TabsWindow). Used only by jqxDockingLayout custom elements. Determines the possible drop position inside the DockingLayout. The following values are allowed. */
    get dropPosition() {
        return this.nativeElement ? this.nativeElement.dropPosition : undefined;
    }
    set dropPosition(value) {
        this.nativeElement ? this.nativeElement.dropPosition = value : undefined;
    }
    /** @description A callback function defining the new format for the label of the Progress Bar. Applicable only to ProgressWindow. */
    get formatFunction() {
        return this.nativeElement ? this.nativeElement.formatFunction : undefined;
    }
    set formatFunction(value) {
        this.nativeElement ? this.nativeElement.formatFunction = value : undefined;
    }
    /** @description Determines the position of the footer of the window element. */
    get footerPosition() {
        return this.nativeElement ? this.nativeElement.footerPosition : undefined;
    }
    set footerPosition(value) {
        this.nativeElement ? this.nativeElement.footerPosition = value : undefined;
    }
    /** @description Determines the template for the Dialog section of the window. By default footerTemplate is null. */
    get footerTemplate() {
        return this.nativeElement ? this.nativeElement.footerTemplate : undefined;
    }
    set footerTemplate(value) {
        this.nativeElement ? this.nativeElement.footerTemplate = value : undefined;
    }
    /** @description Set's the buttons that will be visible in the header section. */
    get headerButtons() {
        return this.nativeElement ? this.nativeElement.headerButtons : undefined;
    }
    set headerButtons(value) {
        this.nativeElement ? this.nativeElement.headerButtons = value : undefined;
    }
    /** @description Determines the template for the Dialog section of the window. By default headerTemplate is null. */
    get headerTemplate() {
        return this.nativeElement ? this.nativeElement.headerTemplate : undefined;
    }
    set headerTemplate(value) {
        this.nativeElement ? this.nativeElement.headerTemplate = value : undefined;
    }
    /** @description Determines the position of the header of the window element. */
    get headerPosition() {
        return this.nativeElement ? this.nativeElement.headerPosition : undefined;
    }
    set headerPosition(value) {
        this.nativeElement ? this.nativeElement.headerPosition = value : undefined;
    }
    /** @description Sets additional helper text below the text box. The hint is visible only when the text box is focued. Applicable to Prompt Window. */
    get hint() {
        return this.nativeElement ? this.nativeElement.hint : undefined;
    }
    set hint(value) {
        this.nativeElement ? this.nativeElement.hint = value : undefined;
    }
    /** @description Sets the value of the Progress bar to indeterminate state(null) and starts the animation. Applicable only to ProgressWindow. */
    get indeterminate() {
        return this.nativeElement ? this.nativeElement.indeterminate : undefined;
    }
    set indeterminate(value) {
        this.nativeElement ? this.nativeElement.indeterminate = value : undefined;
    }
    /** @description Sets the filling direction of the Progress Bar. Applicable only to ProgressWindow. */
    get inverted() {
        return this.nativeElement ? this.nativeElement.inverted : undefined;
    }
    set inverted(value) {
        this.nativeElement ? this.nativeElement.inverted = value : undefined;
    }
    /** @description The label of the window that appears in the header area. */
    get label() {
        return this.nativeElement ? this.nativeElement.label : undefined;
    }
    set label(value) {
        this.nativeElement ? this.nativeElement.label = value : undefined;
    }
    /** @description When enabled the resizing operation happens live. By default it's not enabled and during resizing a highlighter around the edges of the window appears to outline  the current size of the element. */
    get liveResize() {
        return this.nativeElement ? this.nativeElement.liveResize : undefined;
    }
    set liveResize(value) {
        this.nativeElement ? this.nativeElement.liveResize = value : undefined;
    }
    /** @description Applicable only to TabsWindow when used with a DockingLayout custom element.Used only by jqxDockingLayout. Determines the owner jqxDockingLayout  that the window belongs to. When the tabsWindow has been removed from a DockingLayout element, the property is used to indicate that it belongs to that particular Dockinglayout. Accepts a string, representing the ID of a jqxDockingLayout on the page, or an instance of jqxDokcingLayout. */
    get layout() {
        return this.nativeElement ? this.nativeElement.layout : undefined;
    }
    set layout(value) {
        this.nativeElement ? this.nativeElement.layout = value : undefined;
    }
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    get locale() {
        return this.nativeElement ? this.nativeElement.locale : undefined;
    }
    set locale(value) {
        this.nativeElement ? this.nativeElement.locale = value : undefined;
    }
    /** @description Applicable only to TabsWindow when docked inside a DockingLayout Custom Element.Determines of the item can be resized or not. */
    get locked() {
        return this.nativeElement ? this.nativeElement.locked : undefined;
    }
    set locked(value) {
        this.nativeElement ? this.nativeElement.locked = value : undefined;
    }
    /** @description Callback, related to localization module.  */
    get localizeFormatFunction() {
        return this.nativeElement ? this.nativeElement.localizeFormatFunction : undefined;
    }
    set localizeFormatFunction(value) {
        this.nativeElement ? this.nativeElement.localizeFormatFunction = value : undefined;
    }
    /** @description Determines if the window is maximized or not. When maximized the window covers the whole viewport. */
    get maximized() {
        return this.nativeElement ? this.nativeElement.maximized : undefined;
    }
    set maximized(value) {
        this.nativeElement ? this.nativeElement.maximized = value : undefined;
    }
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
    get messages() {
        return this.nativeElement ? this.nativeElement.messages : undefined;
    }
    set messages(value) {
        this.nativeElement ? this.nativeElement.messages = value : undefined;
    }
    /** @description Determines if the window is modal or not. If true the user can only interact with the window and nothing else on the page. */
    get modal() {
        return this.nativeElement ? this.nativeElement.modal : undefined;
    }
    set modal(value) {
        this.nativeElement ? this.nativeElement.modal = value : undefined;
    }
    /** @description Applicable to TabsWindow when docked inside a DockingLayout Custom Element. Determines the max size of the item. Applicable to Progress Window by allowing the user to specify the maximum of the ProgressBar. */
    get max() {
        return this.nativeElement ? this.nativeElement.max : undefined;
    }
    set max(value) {
        this.nativeElement ? this.nativeElement.max = value : undefined;
    }
    /** @description Applicable to TabsWindow when docked inside DockingLayout Custom Element. Determines the min size of the item. Applicable to Progress Window by allowing the user to specify the minimu of the ProgressBar. */
    get min() {
        return this.nativeElement ? this.nativeElement.min : undefined;
    }
    set min(value) {
        this.nativeElement ? this.nativeElement.min = value : undefined;
    }
    /** @description Determines if the window is minimized or not. When minimized the window is docked at the bottom left corner of the viewport. */
    get minimized() {
        return this.nativeElement ? this.nativeElement.minimized : undefined;
    }
    set minimized(value) {
        this.nativeElement ? this.nativeElement.minimized = value : undefined;
    }
    /** @description Sets or gets the maximum number of characters that the user can enter. Applicable to Prompt/MultilinePrompt Window. */
    get maxLength() {
        return this.nativeElement ? this.nativeElement.maxLength : undefined;
    }
    set maxLength(value) {
        this.nativeElement ? this.nativeElement.maxLength = value : undefined;
    }
    /** @description Sets or gets the minimum number of characters that the user have to enter to trigger the auto complete functionality. Applicable to Prompt/MultilinePrompt Window. */
    get minLength() {
        return this.nativeElement ? this.nativeElement.minLength : undefined;
    }
    set minLength(value) {
        this.nativeElement ? this.nativeElement.minLength = value : undefined;
    }
    /** @description Determines if the window is visible or not. */
    get opened() {
        return this.nativeElement ? this.nativeElement.opened : undefined;
    }
    set opened(value) {
        this.nativeElement ? this.nativeElement.opened = value : undefined;
    }
    /** @description Determines if the window is pinned or not. Pinned window is a window that can't be dragged but can be resized. */
    get pinned() {
        return this.nativeElement ? this.nativeElement.pinned : undefined;
    }
    set pinned(value) {
        this.nativeElement ? this.nativeElement.pinned = value : undefined;
    }
    /** @description Determines the input's placeholder. Applicable to Prompt Window. */
    get placeholder() {
        return this.nativeElement ? this.nativeElement.placeholder : undefined;
    }
    set placeholder(value) {
        this.nativeElement ? this.nativeElement.placeholder = value : undefined;
    }
    /** @description Determines the label for the Input insinde the PromptWindow. */
    get promptLabel() {
        return this.nativeElement ? this.nativeElement.promptLabel : undefined;
    }
    set promptLabel(value) {
        this.nativeElement ? this.nativeElement.promptLabel = value : undefined;
    }
    /** @description If the element is readonly, users cannot interact with it. */
    get readonly() {
        return this.nativeElement ? this.nativeElement.readonly : undefined;
    }
    set readonly(value) {
        this.nativeElement ? this.nativeElement.readonly = value : undefined;
    }
    /** @description When applied a resize indicator is displayed in the bottom right corner of the window and resizing operation can be initiated only from its position. */
    get resizeIndicator() {
        return this.nativeElement ? this.nativeElement.resizeIndicator : undefined;
    }
    set resizeIndicator(value) {
        this.nativeElement ? this.nativeElement.resizeIndicator = value : undefined;
    }
    /** @description Determines the resizing mode of the window.  Several modes are available:   none - resizing is disabled.  vertical - vertical resizing is allowed.  horizontal - horizontal resizing is allowed. both - horizontal and vertical resizing is allowed. top - the window can only be resized from the top side. bottom - the window is resizable only from the bottom side. left - the window can be resized only from the left side. right - the window can be resized only from the right side.  */
    get resizeMode() {
        return this.nativeElement ? this.nativeElement.resizeMode : undefined;
    }
    set resizeMode(value) {
        this.nativeElement ? this.nativeElement.resizeMode = value : undefined;
    }
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    get rightToLeft() {
        return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
    }
    set rightToLeft(value) {
        this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
    }
    /** @description Specifies that the user must fill the input before submitting a form with the text box.Applicable to Prompt Window. */
    get required() {
        return this.nativeElement ? this.nativeElement.required : undefined;
    }
    set required(value) {
        this.nativeElement ? this.nativeElement.required = value : undefined;
    }
    /** @description Specifies the message that will appear if required is set and no value is provided in the input. Applicable to Prompt Window. */
    get requiredMessage() {
        return this.nativeElement ? this.nativeElement.requiredMessage : undefined;
    }
    set requiredMessage(value) {
        this.nativeElement ? this.nativeElement.requiredMessage = value : undefined;
    }
    /** @description Determines whether the content of the input will be selected on focus or not. Applicable to Prompt Window. */
    get selectAllOnFocus() {
        return this.nativeElement ? this.nativeElement.selectAllOnFocus : undefined;
    }
    set selectAllOnFocus(value) {
        this.nativeElement ? this.nativeElement.selectAllOnFocus = value : undefined;
    }
    /** @description Sets or gets which tab is selected. Applicable only to TabsWindow. */
    get selectedIndex() {
        return this.nativeElement ? this.nativeElement.selectedIndex : undefined;
    }
    set selectedIndex(value) {
        this.nativeElement ? this.nativeElement.selectedIndex = value : undefined;
    }
    /** @description Determines the way the user can switch between tabs. Applicable only to TabsWindow. */
    get selectionMode() {
        return this.nativeElement ? this.nativeElement.selectionMode : undefined;
    }
    set selectionMode(value) {
        this.nativeElement ? this.nativeElement.selectionMode = value : undefined;
    }
    /** @description Indicates the index of the last character in the current selection. Applicable only to MultilinePromptWindow. */
    get selectionEnd() {
        return this.nativeElement ? this.nativeElement.selectionEnd : undefined;
    }
    set selectionEnd(value) {
        this.nativeElement ? this.nativeElement.selectionEnd = value : undefined;
    }
    /** @description Indicates the index to the first character in the current selection. Applicable only to MultilinePromptWindow. */
    get selectionStart() {
        return this.nativeElement ? this.nativeElement.selectionStart : undefined;
    }
    set selectionStart(value) {
        this.nativeElement ? this.nativeElement.selectionStart = value : undefined;
    }
    /** @description Enables/Disabled the label for the Progress Bar. Applicable only to Progress Window. */
    get showProgressValue() {
        return this.nativeElement ? this.nativeElement.showProgressValue : undefined;
    }
    set showProgressValue(value) {
        this.nativeElement ? this.nativeElement.showProgressValue = value : undefined;
    }
    /** @description A getter that returns the siblings (that share the same parent) of a LayoutPanel item that is docked inside a DockingLayout. The siblings are also DockingLayout items ( LayoutPanels).Applicable only to TabsWindow when docked inside a DockingLayout. */
    get siblings() {
        return this.nativeElement ? this.nativeElement.siblings : undefined;
    }
    set siblings(value) {
        this.nativeElement ? this.nativeElement.siblings = value : undefined;
    }
    /** @description Applicable to TabsWindow when nested inside a DockingLayout Custom Element. Determines the size of the item. */
    get size() {
        return this.nativeElement ? this.nativeElement.size : undefined;
    }
    set size(value) {
        this.nativeElement ? this.nativeElement.size = value : undefined;
    }
    /** @description Specifies whether the element is to have its spelling and grammar checked or not. Applicable only to MultilinePromptWindow. */
    get spellCheck() {
        return this.nativeElement ? this.nativeElement.spellCheck : undefined;
    }
    set spellCheck(value) {
        this.nativeElement ? this.nativeElement.spellCheck = value : undefined;
    }
    /** @description Sets or gets whether close buttons are displayed inside the Tab Strip of the TabsWindow. Applicable only to TabsWindow. */
    get tabCloseButtons() {
        return this.nativeElement ? this.nativeElement.tabCloseButtons : undefined;
    }
    set tabCloseButtons(value) {
        this.nativeElement ? this.nativeElement.tabCloseButtons = value : undefined;
    }
    /** @description Determines if the close button is visible on select or always. Applicable only to TabsWindow. */
    get tabCloseButtonMode() {
        return this.nativeElement ? this.nativeElement.tabCloseButtonMode : undefined;
    }
    set tabCloseButtonMode(value) {
        this.nativeElement ? this.nativeElement.tabCloseButtonMode = value : undefined;
    }
    /** @description Sets or gets the Tabs scroll buttons behavior. Applicable only when tabLayout is 'scroll'. Applicable only to TabsWindow. */
    get tabOverflow() {
        return this.nativeElement ? this.nativeElement.tabOverflow : undefined;
    }
    set tabOverflow(value) {
        this.nativeElement ? this.nativeElement.tabOverflow = value : undefined;
    }
    /** @description Detetmines Tab Strip is positioned of the TabsWindow. Applicable only to TabsWindow. */
    get tabPosition() {
        return this.nativeElement ? this.nativeElement.tabPosition : undefined;
    }
    set tabPosition(value) {
        this.nativeElement ? this.nativeElement.tabPosition = value : undefined;
    }
    /** @description Sets or gets the position of the scroll buttons inside the Tab header of the TabsWindow. Applicable only to TabsWindow. */
    get tabScrollButtonsPosition() {
        return this.nativeElement ? this.nativeElement.tabScrollButtonsPosition : undefined;
    }
    set tabScrollButtonsPosition(value) {
        this.nativeElement ? this.nativeElement.tabScrollButtonsPosition = value : undefined;
    }
    /** @description Sets or gets the orientation of the text in the tabs labels of the TabsWindow. Applicable only to TabsWindow. */
    get tabTextOrientation() {
        return this.nativeElement ? this.nativeElement.tabTextOrientation : undefined;
    }
    set tabTextOrientation(value) {
        this.nativeElement ? this.nativeElement.tabTextOrientation = value : undefined;
    }
    /** @description Determines the theme. Theme defines the look of the element */
    get theme() {
        return this.nativeElement ? this.nativeElement.theme : undefined;
    }
    set theme(value) {
        this.nativeElement ? this.nativeElement.theme = value : undefined;
    }
    /** @description If is set to true, the element cannot be focused. */
    get unfocusable() {
        return this.nativeElement ? this.nativeElement.unfocusable : undefined;
    }
    set unfocusable(value) {
        this.nativeElement ? this.nativeElement.unfocusable = value : undefined;
    }
    /** @description Determines the value of the TextBox/ProgressBar inside the Dialog/Prompt/Progress Window */
    get value() {
        return this.nativeElement ? this.nativeElement.value : undefined;
    }
    set value(value) {
        this.nativeElement ? this.nativeElement.value = value : undefined;
    }
    /** @description Determines the actual parent of the element. The window can size and move only in the area of that element. */
    get windowParent() {
        return this.nativeElement ? this.nativeElement.windowParent : undefined;
    }
    set windowParent(value) {
        this.nativeElement ? this.nativeElement.windowParent = value : undefined;
    }
    /** @description Indicates how the input wraps text. Applicable only to MultilinePromptWindow. */
    get wrap() {
        return this.nativeElement ? this.nativeElement.wrap : undefined;
    }
    set wrap(value) {
        this.nativeElement ? this.nativeElement.wrap = value : undefined;
    }
    /** @description Appends a tabitem to the end of the list of tab items inside element.
    * @param {Node} node. A TabItem element that should be added to the rest of the items as the last item.
    * @returns {Node}
  */
    appendChild(node) {
        return __awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.appendChild(node);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Sets the window to the top level so the user can interact with it.
    */
    bringToFront() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.bringToFront();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.bringToFront();
            });
        }
    }
    /** @description Clears the content of the Window.
    */
    clear() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.clear();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clear();
            });
        }
    }
    /** @description Closes the window.
    */
    close() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.close();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.close();
            });
        }
    }
    /** @description Collapses the window.
    * @returns {HTMLElement}
  */
    collapse() {
        return __awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.collapse();
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Makes sure a tab item is visible by scrolling to it. Applicable only to TabsWindow.
    * @param {number} index. The index of the tab to scroll to.
    */
    ensureVisible(index) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.ensureVisible(index);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.ensureVisible(index);
            });
        }
    }
    /** @description Expands the window after being collapsed.
    * @returns {any[]}
  */
    expand() {
        return __awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.expand();
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Inserts a new tab and an associated content section. Applicable only to TabsWindow.
    * @param {number} index. The index to insert a new tab at.
    * @param {any} details. An Object with the fields "label", "labelSize", "content" and "group".
    */
    insert(index, details) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insert(index, details);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insert(index, details);
            });
        }
    }
    /** @description Inserts the specified "smart-tab-item" node before the reference "smart-tab-item" node. Applicable only to TabsWindow.
    * @param {Node} newNode. The "smart-tab-item" node to insert.
    * @param {Node | null} referenceNode?. The "smart-tab-item" node before which newNode is inserted.
    * @returns {Node}
  */
    insertBefore(newNode, referenceNode) {
        return __awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.insertBefore(newNode, referenceNode);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Moves the window to a new position
    * @param {string | number} left. Left position. For example: '100px'.
    * @param {string | number} top. Top position. For example: '100px'.
    */
    move(left, top) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.move(left, top);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.move(left, top);
            });
        }
    }
    /** @description Maximizes the window to fill the area.
    */
    maximize() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.maximize();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.maximize();
            });
        }
    }
    /** @description Minimizes the window.
    */
    minimize() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.minimize();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.minimize();
            });
        }
    }
    /** @description Opens the window
    */
    open() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.open();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.open();
            });
        }
    }
    /** @description Pins the window. Disables window dragging.
    */
    pin() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.pin();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.pin();
            });
        }
    }
    /** @description Removes a tab and its associated content section. Applicable only to TabsWindow.
    * @param {number} index. The index of the tab to remove.
    */
    removeAt(index) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeAt(index);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeAt(index);
            });
        }
    }
    /** @description Removes a child "smart-tab-item" node. Applicable only to TabsWindow.
    * @param {Node} node. The "smart-tab-item" node to remove.
    * @returns {Node}
  */
    removeChild(node) {
        return __awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.removeChild(node);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Restores the window to it's previous size before maximization/minimization.
    */
    restore() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.restore();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.restore();
            });
        }
    }
    /** @description Selects a tab.  Applicalbe only to TabsWindow elements.
    * @param {number} index. The index of the tab to select.
    */
    select(index) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.select(index);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.select(index);
            });
        }
    }
    /** @description Unpins the window. Enables window dragging.
    */
    unpin() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.unpin();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.unpin();
            });
        }
    }
    /** @description Updates the header label.
    * @param {string} label. The new label of the Header.
    */
    updateLabel(label) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.updateLabel(label);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.updateLabel(label);
            });
        }
    }
    /** @description Updates the content.
    * @param {string | HTMLElement} content. The new content of the window.
    */
    updateContent(content) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.updateContent(content);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.updateContent(content);
            });
        }
    }
    /** @description Updates a TAB in TAB Window and its associated content section.  Applies only to TabsWindow elements.
    * @param {number} index. The index of the tab to update.
    * @param {string} label. The new label of the tab. The value can be the id of an HTMLTemplateElement
    * @param {string | HTMLElement} content. The new content of the tab.
    */
    update(index, label, content) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.update(index, label, content);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.update(index, label, content);
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
        that.eventHandlers['openingHandler'] = (event) => { that.onOpening.emit(event); };
        that.nativeElement.addEventListener('opening', that.eventHandlers['openingHandler']);
        that.eventHandlers['openHandler'] = (event) => { that.onOpen.emit(event); };
        that.nativeElement.addEventListener('open', that.eventHandlers['openHandler']);
        that.eventHandlers['closingHandler'] = (event) => { that.onClosing.emit(event); };
        that.nativeElement.addEventListener('closing', that.eventHandlers['closingHandler']);
        that.eventHandlers['closeHandler'] = (event) => { that.onClose.emit(event); };
        that.nativeElement.addEventListener('close', that.eventHandlers['closeHandler']);
        that.eventHandlers['collapseHandler'] = (event) => { that.onCollapse.emit(event); };
        that.nativeElement.addEventListener('collapse', that.eventHandlers['collapseHandler']);
        that.eventHandlers['dragEndHandler'] = (event) => { that.onDragEnd.emit(event); };
        that.nativeElement.addEventListener('dragEnd', that.eventHandlers['dragEndHandler']);
        that.eventHandlers['dragStartHandler'] = (event) => { that.onDragStart.emit(event); };
        that.nativeElement.addEventListener('dragStart', that.eventHandlers['dragStartHandler']);
        that.eventHandlers['expandHandler'] = (event) => { that.onExpand.emit(event); };
        that.nativeElement.addEventListener('expand', that.eventHandlers['expandHandler']);
        that.eventHandlers['maximizeHandler'] = (event) => { that.onMaximize.emit(event); };
        that.nativeElement.addEventListener('maximize', that.eventHandlers['maximizeHandler']);
        that.eventHandlers['minimizeHandler'] = (event) => { that.onMinimize.emit(event); };
        that.nativeElement.addEventListener('minimize', that.eventHandlers['minimizeHandler']);
        that.eventHandlers['resizeEndHandler'] = (event) => { that.onResizeEnd.emit(event); };
        that.nativeElement.addEventListener('resizeEnd', that.eventHandlers['resizeEndHandler']);
        that.eventHandlers['resizeStartHandler'] = (event) => { that.onResizeStart.emit(event); };
        that.nativeElement.addEventListener('resizeStart', that.eventHandlers['resizeStartHandler']);
        that.eventHandlers['restoreHandler'] = (event) => { that.onRestore.emit(event); };
        that.nativeElement.addEventListener('restore', that.eventHandlers['restoreHandler']);
    }
    /** @description Remove event listeners. */
    unlisten() {
        const that = this;
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
    }
};
WindowComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], WindowComponent.prototype, "addNewTab", null);
__decorate([
    Input()
], WindowComponent.prototype, "animation", null);
__decorate([
    Input()
], WindowComponent.prototype, "autoCapitalize", null);
__decorate([
    Input()
], WindowComponent.prototype, "autoExpand", null);
__decorate([
    Input()
], WindowComponent.prototype, "cancelLabel", null);
__decorate([
    Input()
], WindowComponent.prototype, "completeLabel", null);
__decorate([
    Input()
], WindowComponent.prototype, "confirmLabel", null);
__decorate([
    Input()
], WindowComponent.prototype, "collapsed", null);
__decorate([
    Input()
], WindowComponent.prototype, "closeOnMaskClick", null);
__decorate([
    Input()
], WindowComponent.prototype, "dataSource", null);
__decorate([
    Input()
], WindowComponent.prototype, "disabled", null);
__decorate([
    Input()
], WindowComponent.prototype, "disableSnap", null);
__decorate([
    Input()
], WindowComponent.prototype, "disableEscape", null);
__decorate([
    Input()
], WindowComponent.prototype, "disableKeyboard", null);
__decorate([
    Input()
], WindowComponent.prototype, "displayMode", null);
__decorate([
    Input()
], WindowComponent.prototype, "dropPosition", null);
__decorate([
    Input()
], WindowComponent.prototype, "formatFunction", null);
__decorate([
    Input()
], WindowComponent.prototype, "footerPosition", null);
__decorate([
    Input()
], WindowComponent.prototype, "footerTemplate", null);
__decorate([
    Input()
], WindowComponent.prototype, "headerButtons", null);
__decorate([
    Input()
], WindowComponent.prototype, "headerTemplate", null);
__decorate([
    Input()
], WindowComponent.prototype, "headerPosition", null);
__decorate([
    Input()
], WindowComponent.prototype, "hint", null);
__decorate([
    Input()
], WindowComponent.prototype, "indeterminate", null);
__decorate([
    Input()
], WindowComponent.prototype, "inverted", null);
__decorate([
    Input()
], WindowComponent.prototype, "label", null);
__decorate([
    Input()
], WindowComponent.prototype, "liveResize", null);
__decorate([
    Input()
], WindowComponent.prototype, "layout", null);
__decorate([
    Input()
], WindowComponent.prototype, "locale", null);
__decorate([
    Input()
], WindowComponent.prototype, "locked", null);
__decorate([
    Input()
], WindowComponent.prototype, "localizeFormatFunction", null);
__decorate([
    Input()
], WindowComponent.prototype, "maximized", null);
__decorate([
    Input()
], WindowComponent.prototype, "messages", null);
__decorate([
    Input()
], WindowComponent.prototype, "modal", null);
__decorate([
    Input()
], WindowComponent.prototype, "max", null);
__decorate([
    Input()
], WindowComponent.prototype, "min", null);
__decorate([
    Input()
], WindowComponent.prototype, "minimized", null);
__decorate([
    Input()
], WindowComponent.prototype, "maxLength", null);
__decorate([
    Input()
], WindowComponent.prototype, "minLength", null);
__decorate([
    Input()
], WindowComponent.prototype, "opened", null);
__decorate([
    Input()
], WindowComponent.prototype, "pinned", null);
__decorate([
    Input()
], WindowComponent.prototype, "placeholder", null);
__decorate([
    Input()
], WindowComponent.prototype, "promptLabel", null);
__decorate([
    Input()
], WindowComponent.prototype, "readonly", null);
__decorate([
    Input()
], WindowComponent.prototype, "resizeIndicator", null);
__decorate([
    Input()
], WindowComponent.prototype, "resizeMode", null);
__decorate([
    Input()
], WindowComponent.prototype, "rightToLeft", null);
__decorate([
    Input()
], WindowComponent.prototype, "required", null);
__decorate([
    Input()
], WindowComponent.prototype, "requiredMessage", null);
__decorate([
    Input()
], WindowComponent.prototype, "selectAllOnFocus", null);
__decorate([
    Input()
], WindowComponent.prototype, "selectedIndex", null);
__decorate([
    Input()
], WindowComponent.prototype, "selectionMode", null);
__decorate([
    Input()
], WindowComponent.prototype, "selectionEnd", null);
__decorate([
    Input()
], WindowComponent.prototype, "selectionStart", null);
__decorate([
    Input()
], WindowComponent.prototype, "showProgressValue", null);
__decorate([
    Input()
], WindowComponent.prototype, "siblings", null);
__decorate([
    Input()
], WindowComponent.prototype, "size", null);
__decorate([
    Input()
], WindowComponent.prototype, "spellCheck", null);
__decorate([
    Input()
], WindowComponent.prototype, "tabCloseButtons", null);
__decorate([
    Input()
], WindowComponent.prototype, "tabCloseButtonMode", null);
__decorate([
    Input()
], WindowComponent.prototype, "tabOverflow", null);
__decorate([
    Input()
], WindowComponent.prototype, "tabPosition", null);
__decorate([
    Input()
], WindowComponent.prototype, "tabScrollButtonsPosition", null);
__decorate([
    Input()
], WindowComponent.prototype, "tabTextOrientation", null);
__decorate([
    Input()
], WindowComponent.prototype, "theme", null);
__decorate([
    Input()
], WindowComponent.prototype, "unfocusable", null);
__decorate([
    Input()
], WindowComponent.prototype, "value", null);
__decorate([
    Input()
], WindowComponent.prototype, "windowParent", null);
__decorate([
    Input()
], WindowComponent.prototype, "wrap", null);
__decorate([
    Output()
], WindowComponent.prototype, "onOpening", void 0);
__decorate([
    Output()
], WindowComponent.prototype, "onOpen", void 0);
__decorate([
    Output()
], WindowComponent.prototype, "onClosing", void 0);
__decorate([
    Output()
], WindowComponent.prototype, "onClose", void 0);
__decorate([
    Output()
], WindowComponent.prototype, "onCollapse", void 0);
__decorate([
    Output()
], WindowComponent.prototype, "onDragEnd", void 0);
__decorate([
    Output()
], WindowComponent.prototype, "onDragStart", void 0);
__decorate([
    Output()
], WindowComponent.prototype, "onExpand", void 0);
__decorate([
    Output()
], WindowComponent.prototype, "onMaximize", void 0);
__decorate([
    Output()
], WindowComponent.prototype, "onMinimize", void 0);
__decorate([
    Output()
], WindowComponent.prototype, "onResizeEnd", void 0);
__decorate([
    Output()
], WindowComponent.prototype, "onResizeStart", void 0);
__decorate([
    Output()
], WindowComponent.prototype, "onRestore", void 0);
WindowComponent = __decorate([
    Directive({
        exportAs: 'smart-window', selector: 'smart-window, [smart-window], smart-tabs-window, smart-prompt-window, smart-multiline-prompt-window, smart-dialog-window,  smart-alert-window, smart-progress-window, smart-wait-window'
    })
], WindowComponent);

let WindowModule = class WindowModule {
};
WindowModule = __decorate([
    NgModule({
        declarations: [WindowComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        exports: [WindowComponent]
    })
], WindowModule);

/**
 * Generated bundle index. Do not edit.
 */

export { Smart, WindowComponent, WindowModule, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-window.js.map
