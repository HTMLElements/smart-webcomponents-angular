import { Window } from './../index';
import { Animation, WindowAutoCapitalize, WindowDisplayMode, WindowDropPosition, WindowFooterPosition, TabPosition, WindowResizeMode, TabSelectionMode, WindowTabCloseButtonMode, Overflow, LayoutPosition, Orientation, WindowWrap } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { Animation, WindowAutoCapitalize, WindowDisplayMode, WindowDropPosition, WindowFooterPosition, TabPosition, WindowResizeMode, TabSelectionMode, WindowTabCloseButtonMode, Overflow, LayoutPosition, Orientation, WindowWrap, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { Window } from './../index';
export declare class WindowComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<Window>);
    private eventHandlers;
    nativeElement: Window;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description Determines if 'Add New' Tab inside the Tabs element is visible. Applicable only to TabsWindow */
    addNewTab: boolean;
    /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
    animation: Animation | string;
    /** @description Determines whether and how the value should be automatically capitalized as it is entered/edited by the user. Applicable only to MultilinePromptWindow. */
    autoCapitalize: WindowAutoCapitalize | string;
    /** @description Determines whether element will auto expand when the input overflows vertically. Applicable only to MultilinePromptWindow. */
    autoExpand: boolean;
    /** @description Determines the label for the 'cancel' button inside the Prompt Window. */
    cancelLabel: string;
    /** @description Determines the label for the 'Complete' button insinde the Progress Window. */
    completeLabel: string;
    /** @description Determines the label for the 'Confirm' button insinde the Prompt Window. */
    confirmLabel: string;
    /** @description Determines if the window is collapsed or not. When collapsed the only the header of the window is visible. */
    collapsed: boolean;
    /** @description When a modal window is opened, thid property determines if clicking on the mask closes the window or not. */
    closeOnMaskClick: boolean;
    /** @description Determines the data source that will be loaded to the TabsWindow. Applicable only to TabsWindow. */
    dataSource: {
        label: string;
        content: string;
    }[];
    /** @description Enables or disables the window. */
    disabled: boolean;
    /** @description Enables or disables the window snapping feature. */
    disableSnap: boolean;
    /** @description By default the window is closing after the 'Escape' key is pressed. Set this property to true, if you want to disable that. */
    disableEscape: boolean;
    /** @description By default the window is handling keyboard keys like 'Arrows', 'Escape', etc. Set this property to true, if you want to disable that. */
    disableKeyboard: boolean;
    /** @description Determines how the characters are displayed inside the input. Applicable to Prompt Window. */
    displayMode: WindowDisplayMode | string;
    /** @description Applicable to TabsWindow when docked inside a DockingLayout Custom Element.  Determines where the window(it's tab items as well) can be dropped inside the DockingLayout.  The property is an array that accepts multiple positions. Note: Positions with prefix 'layout-' are applied to the Tab item children of the TabsWidnow owner that is being dragged. The rest of the positions indicate the allowed drop position inside the hovered target(TabsWindow). Used only by jqxDockingLayout custom elements. Determines the possible drop position inside the DockingLayout. The following values are allowed. */
    dropPosition: WindowDropPosition | string;
    /** @description A callback function defining the new format for the label of the Progress Bar. Applicable only to ProgressWindow. */
    formatFunction: any;
    /** @description Determines the position of the footer of the window element. */
    footerPosition: WindowFooterPosition | string;
    /** @description Determines the template for the Dialog section of the window. By default footerTemplate is null. */
    footerTemplate: any;
    /** @description Set's the buttons that will be visible in the header section. */
    headerButtons: string[];
    /** @description Determines the template for the Dialog section of the window. By default headerTemplate is null. */
    headerTemplate: any;
    /** @description Determines the position of the header of the window element. */
    headerPosition: TabPosition | string;
    /** @description Sets additional helper text below the text box. The hint is visible only when the text box is focued. Applicable to Prompt Window. */
    hint: any;
    /** @description Sets the value of the Progress bar to indeterminate state(null) and starts the animation. Applicable only to ProgressWindow. */
    indeterminate: boolean;
    /** @description Sets the filling direction of the Progress Bar. Applicable only to ProgressWindow. */
    inverted: boolean;
    /** @description The label of the window that appears in the header area. */
    label: string;
    /** @description When enabled the resizing operation happens live. By default it's not enabled and during resizing a highlighter around the edges of the window appears to outline  the current size of the element. */
    liveResize: boolean;
    /** @description Applicable only to TabsWindow when used with a DockingLayout custom element.Used only by jqxDockingLayout. Determines the owner jqxDockingLayout  that the window belongs to. When the tabsWindow has been removed from a DockingLayout element, the property is used to indicate that it belongs to that particular Dockinglayout. Accepts a string, representing the ID of a jqxDockingLayout on the page, or an instance of jqxDokcingLayout. */
    layout: any;
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    locale: string;
    /** @description Applicable only to TabsWindow when docked inside a DockingLayout Custom Element.Determines of the item can be resized or not. */
    locked: boolean;
    /** @description Callback, related to localization module.  */
    localizeFormatFunction: any;
    /** @description Determines if the window is maximized or not. When maximized the window covers the whole viewport. */
    maximized: boolean;
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
    messages: any;
    /** @description Determines if the window is modal or not. If true the user can only interact with the window and nothing else on the page. */
    modal: boolean;
    /** @description Applicable to TabsWindow when docked inside a DockingLayout Custom Element. Determines the max size of the item. Applicable to Progress Window by allowing the user to specify the maximum of the ProgressBar. */
    max: string | number | null;
    /** @description Applicable to TabsWindow when docked inside DockingLayout Custom Element. Determines the min size of the item. Applicable to Progress Window by allowing the user to specify the minimu of the ProgressBar. */
    min: string | number | null;
    /** @description Determines if the window is minimized or not. When minimized the window is docked at the bottom left corner of the viewport. */
    minimized: boolean;
    /** @description Sets or gets the maximum number of characters that the user can enter. Applicable to Prompt/MultilinePrompt Window. */
    maxLength: number;
    /** @description Sets or gets the minimum number of characters that the user have to enter to trigger the auto complete functionality. Applicable to Prompt/MultilinePrompt Window. */
    minLength: number;
    /** @description Determines if the window is visible or not. */
    opened: boolean;
    /** @description Determines if the window is pinned or not. Pinned window is a window that can't be dragged but can be resized. */
    pinned: boolean;
    /** @description Determines the input's placeholder. Applicable to Prompt Window. */
    placeholder: string;
    /** @description Determines the label for the Input insinde the PromptWindow. */
    promptLabel: string;
    /** @description If the element is readonly, users cannot interact with it. */
    readonly: boolean;
    /** @description When applied a resize indicator is displayed in the bottom right corner of the window and resizing operation can be initiated only from its position. */
    resizeIndicator: boolean;
    /** @description Determines the resizing mode of the window.  Several modes are available:   none - resizing is disabled.  vertical - vertical resizing is allowed.  horizontal - horizontal resizing is allowed. both - horizontal and vertical resizing is allowed. top - the window can only be resized from the top side. bottom - the window is resizable only from the bottom side. left - the window can be resized only from the left side. right - the window can be resized only from the right side.  */
    resizeMode: WindowResizeMode | string;
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    rightToLeft: boolean;
    /** @description Specifies that the user must fill the input before submitting a form with the text box.Applicable to Prompt Window. */
    required: boolean;
    /** @description Specifies the message that will appear if required is set and no value is provided in the input. Applicable to Prompt Window. */
    requiredMessage: string;
    /** @description Determines whether the content of the input will be selected on focus or not. Applicable to Prompt Window. */
    selectAllOnFocus: boolean;
    /** @description Sets or gets which tab is selected. Applicable only to TabsWindow. */
    selectedIndex: number | null;
    /** @description Determines the way the user can switch between tabs. Applicable only to TabsWindow. */
    selectionMode: TabSelectionMode | string;
    /** @description Indicates the index of the last character in the current selection. Applicable only to MultilinePromptWindow. */
    selectionEnd: number;
    /** @description Indicates the index to the first character in the current selection. Applicable only to MultilinePromptWindow. */
    selectionStart: number;
    /** @description Enables/Disabled the label for the Progress Bar. Applicable only to Progress Window. */
    showProgressValue: boolean;
    /** @description A getter that returns the siblings (that share the same parent) of a LayoutPanel item that is docked inside a DockingLayout. The siblings are also DockingLayout items ( LayoutPanels).Applicable only to TabsWindow when docked inside a DockingLayout. */
    siblings: any;
    /** @description Applicable to TabsWindow when nested inside a DockingLayout Custom Element. Determines the size of the item. */
    size: string;
    /** @description Specifies whether the element is to have its spelling and grammar checked or not. Applicable only to MultilinePromptWindow. */
    spellCheck: boolean;
    /** @description Sets or gets whether close buttons are displayed inside the Tab Strip of the TabsWindow. Applicable only to TabsWindow. */
    tabCloseButtons: boolean;
    /** @description Determines if the close button is visible on select or always. Applicable only to TabsWindow. */
    tabCloseButtonMode: WindowTabCloseButtonMode | string;
    /** @description Sets or gets the Tabs scroll buttons behavior. Applicable only when tabLayout is 'scroll'. Applicable only to TabsWindow. */
    tabOverflow: Overflow | string;
    /** @description Detetmines Tab Strip is positioned of the TabsWindow. Applicable only to TabsWindow. */
    tabPosition: TabPosition | string;
    /** @description Sets or gets the position of the scroll buttons inside the Tab header of the TabsWindow. Applicable only to TabsWindow. */
    tabScrollButtonsPosition: LayoutPosition | string;
    /** @description Sets or gets the orientation of the text in the tabs labels of the TabsWindow. Applicable only to TabsWindow. */
    tabTextOrientation: Orientation | string;
    /** @description Determines the theme. Theme defines the look of the element */
    theme: string;
    /** @description If is set to true, the element cannot be focused. */
    unfocusable: boolean;
    /** @description Determines the value of the TextBox/ProgressBar inside the Dialog/Prompt/Progress Window */
    value: string | number;
    /** @description Determines the actual parent of the element. The window can size and move only in the area of that element. */
    windowParent: any;
    /** @description Indicates how the input wraps text. Applicable only to MultilinePromptWindow. */
    wrap: WindowWrap | string;
    /** @description This event is triggered just before the window starts opening.
    *  @param event. The custom event. 	*/
    onOpening: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the window is opened( visible ).
    *  @param event. The custom event. 	*/
    onOpen: EventEmitter<CustomEvent>;
    /** @description This event is triggered just before the window starts closing.
    *  @param event. The custom event. 	*/
    onClosing: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the window is closed( hidden )
    *  @param event. The custom event. 	*/
    onClose: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the window is collapsed.
    *  @param event. The custom event. 	*/
    onCollapse: EventEmitter<CustomEvent>;
    /** @description This event is triggered when window's dragging is ended.
    *  @param event. The custom event. 	*/
    onDragEnd: EventEmitter<CustomEvent>;
    /** @description This event is triggered when window's dragging is started.
    *  @param event. The custom event. 	*/
    onDragStart: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the window is expanded.
    *  @param event. The custom event. 	*/
    onExpand: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the window is maximized.
    *  @param event. The custom event. 	*/
    onMaximize: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the window is minimized.
    *  @param event. The custom event. 	*/
    onMinimize: EventEmitter<CustomEvent>;
    /** @description This event is triggered when window's resizing is ended.
    *  @param event. The custom event. 	*/
    onResizeEnd: EventEmitter<CustomEvent>;
    /** @description This event is triggered when window's resizing is started.
    *  @param event. The custom event. 	*/
    onResizeStart: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the window is restored to it's previous state before maximization.
    *  @param event. The custom event. 	*/
    onRestore: EventEmitter<CustomEvent>;
    /** @description Appends a tabitem to the end of the list of tab items inside element.
    * @param {Node} node. A TabItem element that should be added to the rest of the items as the last item.
    * @returns {Node}
  */
    appendChild(node: any): Promise<any>;
    /** @description Sets the window to the top level so the user can interact with it.
    */
    bringToFront(): void;
    /** @description Clears the content of the Window.
    */
    clear(): void;
    /** @description Closes the window.
    */
    close(): void;
    /** @description Collapses the window.
    * @returns {HTMLElement}
  */
    collapse(): Promise<any>;
    /** @description Makes sure a tab item is visible by scrolling to it. Applicable only to TabsWindow.
    * @param {number} index. The index of the tab to scroll to.
    */
    ensureVisible(index: number): void;
    /** @description Expands the window after being collapsed.
    * @returns {any[]}
  */
    expand(): Promise<any>;
    /** @description Inserts a new tab and an associated content section. Applicable only to TabsWindow.
    * @param {number} index. The index to insert a new tab at.
    * @param {any} details. An Object with the fields "label", "labelSize", "content" and "group".
    */
    insert(index: number, details: any): void;
    /** @description Inserts the specified "smart-tab-item" node before the reference "smart-tab-item" node. Applicable only to TabsWindow.
    * @param {Node} newNode. The "smart-tab-item" node to insert.
    * @param {Node | null} referenceNode?. The "smart-tab-item" node before which newNode is inserted.
    * @returns {Node}
  */
    insertBefore(newNode: any, referenceNode?: any): Promise<any>;
    /** @description Moves the window to a new position
    * @param {string | number} left. Left position. For example: '100px'.
    * @param {string | number} top. Top position. For example: '100px'.
    */
    move(left: string | number, top: string | number): void;
    /** @description Maximizes the window to fill the area.
    */
    maximize(): void;
    /** @description Minimizes the window.
    */
    minimize(): void;
    /** @description Opens the window
    */
    open(): void;
    /** @description Pins the window. Disables window dragging.
    */
    pin(): void;
    /** @description Removes a tab and its associated content section. Applicable only to TabsWindow.
    * @param {number} index. The index of the tab to remove.
    */
    removeAt(index: number): void;
    /** @description Removes a child "smart-tab-item" node. Applicable only to TabsWindow.
    * @param {Node} node. The "smart-tab-item" node to remove.
    * @returns {Node}
  */
    removeChild(node: any): Promise<any>;
    /** @description Restores the window to it's previous size before maximization/minimization.
    */
    restore(): void;
    /** @description Selects a tab.  Applicalbe only to TabsWindow elements.
    * @param {number} index. The index of the tab to select.
    */
    select(index: number): void;
    /** @description Unpins the window. Enables window dragging.
    */
    unpin(): void;
    /** @description Updates the header label.
    * @param {string} label. The new label of the Header.
    */
    updateLabel(label: string): void;
    /** @description Updates the content.
    * @param {string | HTMLElement} content. The new content of the window.
    */
    updateContent(content: string | HTMLElement): void;
    /** @description Updates a TAB in TAB Window and its associated content section.  Applies only to TabsWindow elements.
    * @param {number} index. The index of the tab to update.
    * @param {string} label. The new label of the tab. The value can be the id of an HTMLTemplateElement
    * @param {string | HTMLElement} content. The new content of the tab.
    */
    update(index: number, label: string, content: string | HTMLElement): void;
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
