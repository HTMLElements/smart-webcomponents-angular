import * as tslib_1 from "tslib";
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Smart } from './smart.element';
let DockingLayoutComponent = class DockingLayoutComponent extends BaseElement {
    constructor(ref) {
        super(ref);
        this.eventHandlers = [];
        /** @description This event is triggered when the tab selection is changed. Note: Change event may be thrown by other JQX Custom Elements nested inside the Tab items.
        *  @param event. The custom event. 	*/
        this.onChange = new EventEmitter();
        /** @description This event is triggered when a Tab item or a whole Tabs Window item ( DockingLayout item ) is closed.
        *  @param event. The custom event. 	*/
        this.onClose = new EventEmitter();
        /** @description This event is triggered when a Tab item/Tabs Window is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	*/
        this.onClosing = new EventEmitter();
        /** @description This event is triggered when an item's position inside the Layout or it's size has been changed. Indicates that a state change has occured.
        *  @param event. The custom event. 	*/
        this.onStateChange = new EventEmitter();
        /** @description This event is triggered when item resizing begins.
        *  @param event. The custom event. 	*/
        this.onResizeStart = new EventEmitter();
        /** @description This event is triggered when item resizing finishes.
        *  @param event. The custom event. 	*/
        this.onResizeEnd = new EventEmitter();
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('smart-docking-layout');
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
    /** @description A getter that returns an array of all DockingLayout items that are auto hidden inside the element. */
    get autoHideItems() {
        return this.nativeElement ? this.nativeElement.autoHideItems : undefined;
    }
    set autoHideItems(value) {
        this.nativeElement ? this.nativeElement.autoHideItems = value : undefined;
    }
    /** @description Enable/Disable the automatic state loading. There must be a previously saved state of the Layout in order to load it. */
    get autoLoadState() {
        return this.nativeElement ? this.nativeElement.autoLoadState : undefined;
    }
    set autoLoadState(value) {
        this.nativeElement ? this.nativeElement.autoLoadState = value : undefined;
    }
    /** @description Enable/Disable the automatic state saving. Note: In order to save the state of the element it must have an id. */
    get autoSaveState() {
        return this.nativeElement ? this.nativeElement.autoSaveState : undefined;
    }
    set autoSaveState(value) {
        this.nativeElement ? this.nativeElement.autoSaveState = value : undefined;
    }
    /** @description Enables or disables the element. */
    get disabled() {
        return this.nativeElement ? this.nativeElement.disabled : undefined;
    }
    set disabled(value) {
        this.nativeElement ? this.nativeElement.disabled = value : undefined;
    }
    /** @description If set to false it will disable the dragging of DockingLayout items. If set items can only be repositioned using the API methods. */
    get draggable() {
        return this.nativeElement ? this.nativeElement.draggable : undefined;
    }
    set draggable(value) {
        this.nativeElement ? this.nativeElement.draggable = value : undefined;
    }
    /** @description If set to false it will disable item floating. This means that if a Window is floated as a result of dragging it will be returned back ot it's original position instead of being floated outside the DockingLayout. Already floated LayoutPanel items will not be affected. */
    get floatable() {
        return this.nativeElement ? this.nativeElement.floatable : undefined;
    }
    set floatable(value) {
        this.nativeElement ? this.nativeElement.floatable = value : undefined;
    }
    /** @description Hides all splitter bars inside the element. */
    get hideSplitterBars() {
        return this.nativeElement ? this.nativeElement.hideSplitterBars : undefined;
    }
    set hideSplitterBars(value) {
        this.nativeElement ? this.nativeElement.hideSplitterBars = value : undefined;
    }
    /** @description A getter that returns an array of all DockingLayout items that are docked inside the element. */
    get items() {
        return this.nativeElement ? this.nativeElement.items : undefined;
    }
    set items(value) {
        this.nativeElement ? this.nativeElement.items = value : undefined;
    }
    /** @description A getter that returns an array of all DockingLayout items that have been closed. */
    get closedItems() {
        return this.nativeElement ? this.nativeElement.closedItems : undefined;
    }
    set closedItems(value) {
        this.nativeElement ? this.nativeElement.closedItems = value : undefined;
    }
    /** @description Determines the structure of the element. This property represents an array of objects that define the hierarchy of the items inside the element and their specific settings. Each object must have a type attribute that defines it's behavior.  Three types of objects are allowed:   LayoutGroup - Represents a group of items (Splitter). Used when the user wants more than one DockingLayout item in a single container.  Properties: orientation - A string value indicating the orientation of the Splitter group. Possible values: 'horizontal', 'vertical'. size - A string | number value indicating the size of the Splitter group. items - An array of LayoutPanel object definitions. resizeMode - A string indicating the resize mode. Possible values: 'none', 'adjacent', 'end', 'proportional'. resizeStep - A nummeric value that determines the step of resizing. liveResize - Determines if splitter resizing happens while dragging or not.   LayoutPanel - Represents a DockingLayout item (TabsWindow). LayoutPanels can have one or many items (TabItem).  Properties:   id - the ID of the LayoutPanel. autoHide - a boolean property that determines if the LayoutPanel is autoHidden. autoHidePosition - determines the autoHide position of the item if 'autoHide' property is set. Possible values: 'top', 'bottom', 'left', 'right'. dropPosition - Determines the possible positions for the item at which a new item can be dropped as a result of dragging. Possible values: 'top', 'bottom', 'left', 'right', 'center', 'header', 'layout-top', 'layout-bottom', 'layout-left', 'layout-right'. Positions with the 'layout' prefix reflect on LayoutPanelItems that are children of the LayoutPanel. label - the Label of the LayoutPanel window. tabPosition - Determines the position of the Tab labels inside the LayoutPanel. layout - determines the DockingLayout owner of the LayoutPanel. Accepts a string indicating the ID of a DockingLayout on the page or a direct reference to it. headerButtons - an Array of strings that define the buttons in the header section of the DockingLayout item. tabCloseButtons - a boolean property that Enables or disables the close buttons inside each Tab item label inside the DockingLayout item. tabOverflow - same as 'overflow' property of jqxTabs. It defines the overflow mode of the labels of the Tab items inside a DockingLayout item.selectionMode - the same as jqxTabs selection modes. Applies to Tab items inside a DockingLayout item. tabResize - the same as 'resize' property of jqxTabs. Allows resizing the Tab labels inside the DockingLayout item. locked - Locks the size of the item and does not allow resizing. max - sets the maximum size of the item. min - sets the minimum size of the item size - sets the size of the item. items - an array of objects. Each object defines the structure of a LayoutPanelItem.   LayoutPanelItem - Represents a LayoutPanel item (TabItem). Properties:  id - the ID of the Tab item. label - a string representing the label of the Tab item. content - represents the content of the Tab item. Can be anything. selected - determines if the item is selected. By default the first added item to the LayoutPanel is automatically selected. draggable - a boolean property that allows to disable the dragging of the Tab item.     */
    get layout() {
        return this.nativeElement ? this.nativeElement.layout : undefined;
    }
    set layout(value) {
        this.nativeElement ? this.nativeElement.layout = value : undefined;
    }
    /** @description When enabled the resizing operation happens live. By default this feature is not enabled and the user sees a hightlighted bar while dragging instead of the actual splitter bar. */
    get liveResize() {
        return this.nativeElement ? this.nativeElement.liveResize : undefined;
    }
    set liveResize(value) {
        this.nativeElement ? this.nativeElement.liveResize = value : undefined;
    }
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    get locale() {
        return this.nativeElement ? this.nativeElement.locale : undefined;
    }
    set locale(value) {
        this.nativeElement ? this.nativeElement.locale = value : undefined;
    }
    /** @description Callback, related to localization module.  */
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
    /** @description If the element is readonly, users cannot interact with it. */
    get readonly() {
        return this.nativeElement ? this.nativeElement.readonly : undefined;
    }
    set readonly(value) {
        this.nativeElement ? this.nativeElement.readonly = value : undefined;
    }
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    get rightToLeft() {
        return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
    }
    set rightToLeft(value) {
        this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
    }
    /** @description Determines the resize step during reisizing */
    get resizeStep() {
        return this.nativeElement ? this.nativeElement.resizeStep : undefined;
    }
    set resizeStep(value) {
        this.nativeElement ? this.nativeElement.resizeStep = value : undefined;
    }
    /** @description Determines the snap mode. Two modes are available:   simple - allows dragging of a single tab item inside or outside the layout. A semi-transparent highlighter is used to indicate the possible locations where the dragged item can be dropped. The user has to drop the dragged item inside one of the possible drop zones indicated by the highlighter. advanced - allows dragging of a whole TabsWindow with items or a single tab item. Uses a Visual Studio style feedback that indicates the possible drop locations. The user has to drop the target over one of the icons inside the feedback.   The feedback/highlighter is displayed when the dragging of an item begins.  */
    get snapMode() {
        return this.nativeElement ? this.nativeElement.snapMode : undefined;
    }
    set snapMode(value) {
        this.nativeElement ? this.nativeElement.snapMode = value : undefined;
    }
    /** @description Determines the theme. Theme defines the look of the element */
    get theme() {
        return this.nativeElement ? this.nativeElement.theme : undefined;
    }
    set theme(value) {
        this.nativeElement ? this.nativeElement.theme = value : undefined;
    }
    /** @description A getter that returns an array of all DockingLayout items that have been undocked. Undocked items are no more part of the Layout's interal structure but can be inserted by dragging them in. */
    get undockedItems() {
        return this.nativeElement ? this.nativeElement.undockedItems : undefined;
    }
    set undockedItems(value) {
        this.nativeElement ? this.nativeElement.undockedItems = value : undefined;
    }
    /** @description If is set to true, the element cannot be focused. */
    get unfocusable() {
        return this.nativeElement ? this.nativeElement.unfocusable : undefined;
    }
    set unfocusable(value) {
        this.nativeElement ? this.nativeElement.unfocusable = value : undefined;
    }
    /** @description Makes a "smart-tabs-window" node, that is a child of the Layout, auto hidden by placing it at the Bottom position inside the element. This means that the item will be positioned near the bottom side of the layout and it's content will be hidden until the user selects one of it's labels.
    * @param {HTMLElement | number | string} node. The "smart-tabs-window" or "smart-tab-item" node to append
    */
    autoHideBottom(node) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.autoHideBottom(node);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.autoHideBottom(node);
            });
        }
    }
    /** @description Makes a "smart-tabs-window" node, that is a child of the Layout, auto hidden by placing it at the Left position inside the layout. This means that the item will be positioned near the left side of the layout and it's content will be hidden until the user selects one of it's labels.
    * @param {HTMLElement | number | string} node. The "smart-tabs-window" or "smart-tab-item" node to append
    */
    autoHideLeft(node) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.autoHideLeft(node);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.autoHideLeft(node);
            });
        }
    }
    /** @description Makes a "smart-tabs-window" node, that is a child of the Layout, auto hidden by placing it at the Right position inside the layout. This means that the item will be positioned near the right side of the layout and it's content will be hidden until the user selects one of it's labels.
    * @param {HTMLElement | number | string} node. The "smart-tabs-window" or "smart-tab-item" node to append
    */
    autoHideRight(node) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.autoHideRight(node);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.autoHideRight(node);
            });
        }
    }
    /** @description Makes a "smart-tabs-window" node, that is a child of the Layout, auto hidden by placing it at the Top position inside the layout. This means that the item will be positioned near the top side of the layout and it's content will be hidden until the user selects one of it's labels.
    * @param {HTMLElement | number | string} node. The "smart-tabs-window" or "smart-tab-item" node to append
    */
    autoHideTop(node) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.autoHideTop(node);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.autoHideTop(node);
            });
        }
    }
    /** @description Clears the localStorage of any previous cached state of the DockingLayout.
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
    /** @description The method will reset an autohidden item to it's normal behavior and re-insert it at a specified position. It can also be used to insert items into the DockingLayout. Note: Items inserted via this method are added as a top level items.
    * @param {string | number | Node} node. An autohidden "smart-tabs-window" item instance or a new "smart-tabs-window" instance.
    * @returns {Node}
  */
    dock(node) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.dock(node);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted before the target item which corresponds to the index passed as the first argument to the method.
    * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
    * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
    */
    insertBeforeItem(index, item) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertBeforeItem(index, item);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insertBeforeItem(index, item);
            });
        }
    }
    /** @description Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted after the target item which corresponds to the index passed as the first argument to the method.
    * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
    * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
    */
    insertAfterItem(index, item) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertAfterItem(index, item);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insertAfterItem(index, item);
            });
        }
    }
    /** @description Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted by splitting  the target item which corresponds to the index passed as the first argument to the method in two and placing the new item as it's left neighbour horizontally.
    * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
    * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
    */
    insertIntoLeft(index, item) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertIntoLeft(index, item);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insertIntoLeft(index, item);
            });
        }
    }
    /** @description Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted by splitting  the target item which corresponds to the index passed as the first argument to the method in two and placing the new item as it's right neighbour horizontally.
    * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
    * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
    */
    insertIntoRight(index, item) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertIntoRight(index, item);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insertIntoRight(index, item);
            });
        }
    }
    /** @description Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted by splitting  the target item which corresponds to the index passed as the first argument to the method in two and placing the new item as it's top neighbour vertically.
    * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
    * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
    */
    insertIntoTop(index, item) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertIntoTop(index, item);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insertIntoTop(index, item);
            });
        }
    }
    /** @description Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted by splitting  the target item which corresponds to the index passed as the first argument to the method in two and placing the new item as it's bottom neighbour vertically.
    * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
    * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
    */
    insertIntoBottom(index, item) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertIntoBottom(index, item);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insertIntoBottom(index, item);
            });
        }
    }
    /** @description Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted as a top level item positioned at the top side inside the Layout.
    * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
    */
    insertLayoutTop(item) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertLayoutTop(item);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insertLayoutTop(item);
            });
        }
    }
    /** @description Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted as a top level item positioned at the bottom side inside the Layout.
    * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
    */
    insertLayoutBottom(item) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertLayoutBottom(item);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insertLayoutBottom(item);
            });
        }
    }
    /** @description Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted as a top level item positioned at the left side inside the Layout.
    * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
    */
    insertLayoutLeft(item) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertLayoutLeft(item);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insertLayoutLeft(item);
            });
        }
    }
    /** @description Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted as a top level item positioned at the right inside the Layout.
    * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
    */
    insertLayoutRight(item) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertLayoutRight(item);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insertLayoutRight(item);
            });
        }
    }
    /** @description Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The target item and it's neighbour items are placed inside a new splitter item that acts as the new neghbour of the newly added item via this method. The new item is inserted above the target ( at position Top).
    * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
    * @param {any} tabsWindow. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
    */
    insertOutsideTargetGroupTop(index, tabsWindow) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertOutsideTargetGroupTop(index, tabsWindow);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insertOutsideTargetGroupTop(index, tabsWindow);
            });
        }
    }
    /** @description Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The target item and it's neighbour items are placed inside a new splitter item that acts as the new neghbour of the newly added item via this method. The new item is inserted bellow the target ( at position Bottom).
    * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
    * @param {any} tabsWindow. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
    */
    insertOutsideTargetGroupBottom(index, tabsWindow) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertOutsideTargetGroupBottom(index, tabsWindow);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insertOutsideTargetGroupBottom(index, tabsWindow);
            });
        }
    }
    /** @description Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The target item and it's neighbour items are placed inside a new splitter item that acts as the new neghbour of the newly added item via this method. The new item is inserted before the target ( at position Left).
    * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
    * @param {any} tabsWindow. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
    */
    insertOutsideTargetGroupLeft(index, tabsWindow) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertOutsideTargetGroupLeft(index, tabsWindow);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insertOutsideTargetGroupLeft(index, tabsWindow);
            });
        }
    }
    /** @description Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The target item and it's neighbour items are placed inside a new splitter item that acts as the new neghbour of the newly added item via this method. The new item is inserted after the target ( at position Right).
    * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
    * @param {any} tabsWindow. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
    */
    insertOutsideTargetGroupRight(index, tabsWindow) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertOutsideTargetGroupRight(index, tabsWindow);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insertOutsideTargetGroupRight(index, tabsWindow);
            });
        }
    }
    /** @description Inserts a new TabsWindow. The window is in floating mode and is undocked.
    * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
    * @param {number | string} left?. The left position of the new window. You can use number, px or %. For example: '10px'.
    * @param {number | string} top?. The top position of the new window. You can use number, px or %. For example: '10px'.
    */
    insertFloatingWindow(item, left, top) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertFloatingWindow(item, left, top);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insertFloatingWindow(item, left, top);
            });
        }
    }
    /** @description The method returns an array of all autohidden items.
    * @param {string} orientation?. Determines which auto hidden items to return ( vertical or horizontal ). If not set the method will return all autohidden items. Possible values: 'vertical', 'horizontal'.
    * @returns {any[]}
  */
    getAutoHideItems(orientation) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getAutoHideItems(orientation);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description The method returns the index of a target item.
    * @param {HTMLElement} node. Returns the index of the target item.
    * @returns {number}
  */
    getIndex(node) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getIndex(node);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Returns an array of objects representing the current structure of the element. Each object represents a Layout item with it's settings and hierarchy.
    * @param {boolean} noInstances?. Determines if the returned array will contain HTML references or not. When saving to localStorage the resulted array should not contain any HTMLElement references.
    * @returns {any[]}
  */
    getState(noInstances) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getState(noInstances);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Returns the Splitter parent of a Layout item
    * @param {HTMLElement} item?. DockingLayout item
    * @returns {HTMLElement}
  */
    getItemGroupElement(item) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getItemGroupElement(item);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Returns a JSON array of objects representing the current structure of the element. Ready to be persisted to LocalStorage.
    * @returns {any[]}
  */
    getJSONStructure() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getJSONStructure();
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Loads a previously saved state of the element. If no state is provided as an argument the method will do a localStorage lookup.
    * @param {any[]} state?. An array of objects that represents a cached state of the DockingLayout. The result of calling the 'saveState' method.
    */
    loadState(state) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.loadState(state);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.loadState(state);
            });
        }
    }
    /** @description Removes a DockingLayout item (TabsWindow) from the element.
    * @param {number | HTMLElement | string} index. The index of the TabsWindow to remove or a reference to it.
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
    /** @description Removes all items from the element.
    */
    removeAll() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeAll();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeAll();
            });
        }
    }
    /** @description Removes a "smart-tabs-window" node that is a DockingLayout item.
    * @param {Node} node. The "smart-tabs-window" node to remove.
    * @returns {Node}
  */
    removeChild(node) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
    /** @description Saves the current state of the DockingLayout to LocalStorage. The state includes the hierarchy and size of the items.
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
    /** @description The method undocks/removes an item from the Layout and places it at the same position but it's no more part of the layout. The item becomes an 'outher' item that can be reinserted at any time.
    * @param {string | number | Node} node. A "smart-tabs-window" instance that is part of the DockingLayout.
    */
    undock(node) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.undock(node);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.undock(node);
            });
        }
    }
    /** @description Updates a TabsWindow and it's contents.
    * @param {number | HTMLElement | string} index. The index of the TabsWindow to update.
    * @param {any} settings. An object that contains the new settings for the TabsWindow item. Settings object is the same as defining a new TabsWindow with the exception of 'items' array where the items are defined. In order to change the label or content of a Tab item the user has to specify the index of the target tab item.
    */
    update(index, settings) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.update(index, settings);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.update(index, settings);
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
        that.eventHandlers['closeHandler'] = (event) => { that.onClose.emit(event); };
        that.nativeElement.addEventListener('close', that.eventHandlers['closeHandler']);
        that.eventHandlers['closingHandler'] = (event) => { that.onClosing.emit(event); };
        that.nativeElement.addEventListener('closing', that.eventHandlers['closingHandler']);
        that.eventHandlers['stateChangeHandler'] = (event) => { that.onStateChange.emit(event); };
        that.nativeElement.addEventListener('stateChange', that.eventHandlers['stateChangeHandler']);
        that.eventHandlers['resizeStartHandler'] = (event) => { that.onResizeStart.emit(event); };
        that.nativeElement.addEventListener('resizeStart', that.eventHandlers['resizeStartHandler']);
        that.eventHandlers['resizeEndHandler'] = (event) => { that.onResizeEnd.emit(event); };
        that.nativeElement.addEventListener('resizeEnd', that.eventHandlers['resizeEndHandler']);
    }
    /** @description Remove event listeners. */
    unlisten() {
        const that = this;
        if (that.eventHandlers['changeHandler']) {
            that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
        }
        if (that.eventHandlers['closeHandler']) {
            that.nativeElement.removeEventListener('close', that.eventHandlers['closeHandler']);
        }
        if (that.eventHandlers['closingHandler']) {
            that.nativeElement.removeEventListener('closing', that.eventHandlers['closingHandler']);
        }
        if (that.eventHandlers['stateChangeHandler']) {
            that.nativeElement.removeEventListener('stateChange', that.eventHandlers['stateChangeHandler']);
        }
        if (that.eventHandlers['resizeStartHandler']) {
            that.nativeElement.removeEventListener('resizeStart', that.eventHandlers['resizeStartHandler']);
        }
        if (that.eventHandlers['resizeEndHandler']) {
            that.nativeElement.removeEventListener('resizeEnd', that.eventHandlers['resizeEndHandler']);
        }
    }
};
DockingLayoutComponent.ctorParameters = () => [
    { type: ElementRef }
];
tslib_1.__decorate([
    Input()
], DockingLayoutComponent.prototype, "animation", null);
tslib_1.__decorate([
    Input()
], DockingLayoutComponent.prototype, "autoHideItems", null);
tslib_1.__decorate([
    Input()
], DockingLayoutComponent.prototype, "autoLoadState", null);
tslib_1.__decorate([
    Input()
], DockingLayoutComponent.prototype, "autoSaveState", null);
tslib_1.__decorate([
    Input()
], DockingLayoutComponent.prototype, "disabled", null);
tslib_1.__decorate([
    Input()
], DockingLayoutComponent.prototype, "draggable", null);
tslib_1.__decorate([
    Input()
], DockingLayoutComponent.prototype, "floatable", null);
tslib_1.__decorate([
    Input()
], DockingLayoutComponent.prototype, "hideSplitterBars", null);
tslib_1.__decorate([
    Input()
], DockingLayoutComponent.prototype, "items", null);
tslib_1.__decorate([
    Input()
], DockingLayoutComponent.prototype, "closedItems", null);
tslib_1.__decorate([
    Input()
], DockingLayoutComponent.prototype, "layout", null);
tslib_1.__decorate([
    Input()
], DockingLayoutComponent.prototype, "liveResize", null);
tslib_1.__decorate([
    Input()
], DockingLayoutComponent.prototype, "locale", null);
tslib_1.__decorate([
    Input()
], DockingLayoutComponent.prototype, "localizeFormatFunction", null);
tslib_1.__decorate([
    Input()
], DockingLayoutComponent.prototype, "messages", null);
tslib_1.__decorate([
    Input()
], DockingLayoutComponent.prototype, "readonly", null);
tslib_1.__decorate([
    Input()
], DockingLayoutComponent.prototype, "rightToLeft", null);
tslib_1.__decorate([
    Input()
], DockingLayoutComponent.prototype, "resizeStep", null);
tslib_1.__decorate([
    Input()
], DockingLayoutComponent.prototype, "snapMode", null);
tslib_1.__decorate([
    Input()
], DockingLayoutComponent.prototype, "theme", null);
tslib_1.__decorate([
    Input()
], DockingLayoutComponent.prototype, "undockedItems", null);
tslib_1.__decorate([
    Input()
], DockingLayoutComponent.prototype, "unfocusable", null);
tslib_1.__decorate([
    Output()
], DockingLayoutComponent.prototype, "onChange", void 0);
tslib_1.__decorate([
    Output()
], DockingLayoutComponent.prototype, "onClose", void 0);
tslib_1.__decorate([
    Output()
], DockingLayoutComponent.prototype, "onClosing", void 0);
tslib_1.__decorate([
    Output()
], DockingLayoutComponent.prototype, "onStateChange", void 0);
tslib_1.__decorate([
    Output()
], DockingLayoutComponent.prototype, "onResizeStart", void 0);
tslib_1.__decorate([
    Output()
], DockingLayoutComponent.prototype, "onResizeEnd", void 0);
DockingLayoutComponent = tslib_1.__decorate([
    Directive({
        exportAs: 'smart-docking-layout', selector: 'smart-docking-layout, [smart-docking-layout]'
    })
], DockingLayoutComponent);
export { DockingLayoutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQuZG9ja2luZ2xheW91dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NtYXJ0LXdlYmNvbXBvbmVudHMtYW5ndWxhci9kb2NraW5nbGF5b3V0LyIsInNvdXJjZXMiOlsic21hcnQuZG9ja2luZ2xheW91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUosT0FBTyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVyRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFReEMsSUFBYSxzQkFBc0IsR0FBbkMsTUFBYSxzQkFBdUIsU0FBUSxXQUFXO0lBQ3RELFlBQVksR0FBOEI7UUFDekMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBSUosa0JBQWEsR0FBVSxFQUFFLENBQUM7UUFtTmxDOzhDQUNzQztRQUM1QixhQUFRLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFbkU7OENBQ3NDO1FBQzVCLFlBQU8sR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVsRTs4Q0FDc0M7UUFDNUIsY0FBUyxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXBFOzhDQUNzQztRQUM1QixrQkFBYSxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXhFOzhDQUNzQztRQUM1QixrQkFBYSxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXhFOzhDQUNzQztRQUM1QixnQkFBVyxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBNU9yRSxJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQyxhQUE4QixDQUFDO0lBQ3pELENBQUM7SUFLRDs7T0FFRztJ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RDtJQUFULE1BQU0sRUFBRTt1REFBeUQ7QUFJeEQ7SUFBVCxNQUFNLEVBQUU7eURBQTJEO0FBSTFEO0lBQVQsTUFBTSxFQUFFOzZEQUErRDtBQUk5RDtJQUFULE1BQU0sRUFBRTs2REFBK0Q7QUFJOUQ7SUFBVCxNQUFNLEVBQUU7MkRBQTZEO0FBL08xRCxzQkFBc0I7SUFKbEMsU0FBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLHNCQUFzQixFQUFFLFFBQVEsRUFBRSw4Q0FBOEM7S0FDMUYsQ0FBQztHQUVXLHNCQUFzQixDQW8xQmxDO1NBcDFCWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb2NraW5nTGF5b3V0IH0gZnJvbSAnLi8uLi9pbmRleCc7XG5pbXBvcnQgeyBBbmltYXRpb24sIERvY2tpbmdMYXlvdXRTbmFwTW9kZSwgRWxlbWVudFJlbmRlck1vZGV9IGZyb20gJy4vLi4vaW5kZXgnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBEaXJlY3RpdmUsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBTaW1wbGVDaGFuZ2VzLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFzZUVsZW1lbnQsIFNtYXJ0IH0gZnJvbSAnLi9zbWFydC5lbGVtZW50JztcbmV4cG9ydCB7IEFuaW1hdGlvbiwgRG9ja2luZ0xheW91dFNuYXBNb2RlLCBFbGVtZW50UmVuZGVyTW9kZX0gZnJvbSAnLi8uLi9pbmRleCc7XG5leHBvcnQgeyBTbWFydCB9IGZyb20gJy4vc21hcnQuZWxlbWVudCc7XG5leHBvcnQgeyBEb2NraW5nTGF5b3V0IH0gZnJvbSAnLi8uLi9pbmRleCc7XG5cblxuQERpcmVjdGl2ZSh7XG5cdGV4cG9ydEFzOiAnc21hcnQtZG9ja2luZy1sYXlvdXQnLFx0c2VsZWN0b3I6ICdzbWFydC1kb2NraW5nLWxheW91dCwgW3NtYXJ0LWRvY2tpbmctbGF5b3V0XSdcbn0pXG5cbmV4cG9ydCBjbGFzcyBEb2NraW5nTGF5b3V0Q29tcG9uZW50IGV4dGVuZHMgQmFzZUVsZW1lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcblx0Y29uc3RydWN0b3IocmVmOiBFbGVtZW50UmVmPERvY2tpbmdMYXlvdXQ+KSB7XG5cdFx0c3VwZXIocmVmKTtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPSByZWYubmF0aXZlRWxlbWVudCBhcyBEb2NraW5nTGF5b3V0O1xuXHR9XG5cblx0cHJpdmF0ZSBldmVudEhhbmRsZXJzOiBhbnlbXSA9IFtdO1xuXG5cdHB1YmxpYyBuYXRpdmVFbGVtZW50OiBEb2NraW5nTGF5b3V0O1xuXHQvKiogQGRlc2NyaXB0aW9uIENyZWF0ZXMgdGhlIGNvbXBvbmVudCBvbiBkZW1hbmQuXG5cdCAqIEBwYXJhbSBwcm9wZXJ0aWVzIEFuIG9wdGlvbmFsIG9iamVjdCBvZiBwcm9wZXJ0aWVzLCB3aGljaCB3aWxsIGJlIGFkZGVkIHRvIHRoZSB0ZW1wbGF0ZSBiaW5kZWQgb25lcy5cblx0ICovXG5cdHB1YmxpYyBjcmVhdGVDb21wb25lbnQocHJvcGVydGllcyA9IHt9KTogYW55IHtcbiAgICBcdHRoaXMubmF0aXZlRWxlbWVudCA9IDxEb2NraW5nTGF5b3V0PmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NtYXJ0LWRvY2tpbmctbGF5b3V0Jyk7XG5cdFx0Zm9yIChsZXQgcHJvcGVydHlOYW1lIGluIHByb3BlcnRpZXMpIHsgXG4gXHRcdFx0dGhpcy5uYXRpdmVFbGVtZW50W3Byb3BlcnR5TmFtZV0gPSBwcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV07XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQ7XG5cdH1cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIGFuaW1hdGlvbiBtb2RlLiBBbmltYXRpb24gaXMgZGlzYWJsZWQgd2hlbiB0aGUgcHJvcGVydHkgaXMgc2V0IHRvICdub25lJyAqL1xuXHRASW5wdXQoKVxuXHRnZXQgYW5pbWF0aW9uKCk6IEFuaW1hdGlvbiB8IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hbmltYXRpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGFuaW1hdGlvbih2YWx1ZTogQW5pbWF0aW9uIHwgc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmFuaW1hdGlvbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBIGdldHRlciB0aGF0IHJldHVybnMgYW4gYXJyYXkgb2YgYWxsIERvY2tpbmdMYXlvdXQgaXRlbXMgdGhhdCBhcmUgYXV0byBoaWRkZW4gaW5zaWRlIHRoZSBlbGVtZW50LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgYXV0b0hpZGVJdGVtcygpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYXV0b0hpZGVJdGVtcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYXV0b0hpZGVJdGVtcyh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9IaWRlSXRlbXMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRW5hYmxlL0Rpc2FibGUgdGhlIGF1dG9tYXRpYyBzdGF0ZSBsb2FkaW5nLiBUaGVyZSBtdXN0IGJlIGEgcHJldmlvdXNseSBzYXZlZCBzdGF0ZSBvZiB0aGUgTGF5b3V0IGluIG9yZGVyIHRvIGxvYWQgaXQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBhdXRvTG9hZFN0YXRlKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYXV0b0xvYWRTdGF0ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYXV0b0xvYWRTdGF0ZSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hdXRvTG9hZFN0YXRlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEVuYWJsZS9EaXNhYmxlIHRoZSBhdXRvbWF0aWMgc3RhdGUgc2F2aW5nLiBOb3RlOiBJbiBvcmRlciB0byBzYXZlIHRoZSBzdGF0ZSBvZiB0aGUgZWxlbWVudCBpdCBtdXN0IGhhdmUgYW4gaWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBhdXRvU2F2ZVN0YXRlKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYXV0b1NhdmVTdGF0ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYXV0b1NhdmVTdGF0ZSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hdXRvU2F2ZVN0YXRlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEVuYWJsZXMgb3IgZGlzYWJsZXMgdGhlIGVsZW1lbnQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVkIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlZCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBJZiBzZXQgdG8gZmFsc2UgaXQgd2lsbCBkaXNhYmxlIHRoZSBkcmFnZ2luZyBvZiBEb2NraW5nTGF5b3V0IGl0ZW1zLiBJZiBzZXQgaXRlbXMgY2FuIG9ubHkgYmUgcmVwb3NpdGlvbmVkIHVzaW5nIHRoZSBBUEkgbWV0aG9kcy4gKi9cblx0QElucHV0KClcblx0Z2V0IGRyYWdnYWJsZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRyYWdnYWJsZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZHJhZ2dhYmxlKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRyYWdnYWJsZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBJZiBzZXQgdG8gZmFsc2UgaXQgd2lsbCBkaXNhYmxlIGl0ZW0gZmxvYXRpbmcuIFRoaXMgbWVhbnMgdGhhdCBpZiBhIFdpbmRvdyBpcyBmbG9hdGVkIGFzIGEgcmVzdWx0IG9mIGRyYWdnaW5nIGl0IHdpbGwgYmUgcmV0dXJuZWQgYmFjayBvdCBpdCdzIG9yaWdpbmFsIHBvc2l0aW9uIGluc3RlYWQgb2YgYmVpbmcgZmxvYXRlZCBvdXRzaWRlIHRoZSBEb2NraW5nTGF5b3V0LiBBbHJlYWR5IGZsb2F0ZWQgTGF5b3V0UGFuZWwgaXRlbXMgd2lsbCBub3QgYmUgYWZmZWN0ZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBmbG9hdGFibGUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5mbG9hdGFibGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGZsb2F0YWJsZSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5mbG9hdGFibGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSGlkZXMgYWxsIHNwbGl0dGVyIGJhcnMgaW5zaWRlIHRoZSBlbGVtZW50LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgaGlkZVNwbGl0dGVyQmFycygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmhpZGVTcGxpdHRlckJhcnMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGhpZGVTcGxpdHRlckJhcnModmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGlkZVNwbGl0dGVyQmFycyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBIGdldHRlciB0aGF0IHJldHVybnMgYW4gYXJyYXkgb2YgYWxsIERvY2tpbmdMYXlvdXQgaXRlbXMgdGhhdCBhcmUgZG9ja2VkIGluc2lkZSB0aGUgZWxlbWVudC4gKi9cblx0QElucHV0KClcblx0Z2V0IGl0ZW1zKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5pdGVtcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgaXRlbXModmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5pdGVtcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBIGdldHRlciB0aGF0IHJldHVybnMgYW4gYXJyYXkgb2YgYWxsIERvY2tpbmdMYXlvdXQgaXRlbXMgdGhhdCBoYXZlIGJlZW4gY2xvc2VkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgY2xvc2VkSXRlbXMoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNsb3NlZEl0ZW1zIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjbG9zZWRJdGVtcyh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNsb3NlZEl0ZW1zID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIHN0cnVjdHVyZSBvZiB0aGUgZWxlbWVudC4gVGhpcyBwcm9wZXJ0eSByZXByZXNlbnRzIGFuIGFycmF5IG9mIG9iamVjdHMgdGhhdCBkZWZpbmUgdGhlIGhpZXJhcmNoeSBvZiB0aGUgaXRlbXMgaW5zaWRlIHRoZSBlbGVtZW50IGFuZCB0aGVpciBzcGVjaWZpYyBzZXR0aW5ncy4gRWFjaCBvYmplY3QgbXVzdCBoYXZlIGEgdHlwZSBhdHRyaWJ1dGUgdGhhdCBkZWZpbmVzIGl0J3MgYmVoYXZpb3IuICBUaHJlZSB0eXBlcyBvZiBvYmplY3RzIGFyZSBhbGxvd2VkOiAgIExheW91dEdyb3VwIC0gUmVwcmVzZW50cyBhIGdyb3VwIG9mIGl0ZW1zIChTcGxpdHRlcikuIFVzZWQgd2hlbiB0aGUgdXNlciB3YW50cyBtb3JlIHRoYW4gb25lIERvY2tpbmdMYXlvdXQgaXRlbSBpbiBhIHNpbmdsZSBjb250YWluZXIuICBQcm9wZXJ0aWVzOiBvcmllbnRhdGlvbiAtIEEgc3RyaW5nIHZhbHVlIGluZGljYXRpbmcgdGhlIG9yaWVudGF0aW9uIG9mIHRoZSBTcGxpdHRlciBncm91cC4gUG9zc2libGUgdmFsdWVzOiAnaG9yaXpvbnRhbCcsICd2ZXJ0aWNhbCcuIHNpemUgLSBBIHN0cmluZyB8IG51bWJlciB2YWx1ZSBpbmRpY2F0aW5nIHRoZSBzaXplIG9mIHRoZSBTcGxpdHRlciBncm91cC4gaXRlbXMgLSBBbiBhcnJheSBvZiBMYXlvdXRQYW5lbCBvYmplY3QgZGVmaW5pdGlvbnMuIHJlc2l6ZU1vZGUgLSBBIHN0cmluZyBpbmRpY2F0aW5nIHRoZSByZXNpemUgbW9kZS4gUG9zc2libGUgdmFsdWVzOiAnbm9uZScsICdhZGphY2VudCcsICdlbmQnLCAncHJvcG9ydGlvbmFsJy4gcmVzaXplU3RlcCAtIEEgbnVtbWVyaWMgdmFsdWUgdGhhdCBkZXRlcm1pbmVzIHRoZSBzdGVwIG9mIHJlc2l6aW5nLiBsaXZlUmVzaXplIC0gRGV0ZXJtaW5lcyBpZiBzcGxpdHRlciByZXNpemluZyBoYXBwZW5zIHdoaWxlIGRyYWdnaW5nIG9yIG5vdC4gICBMYXlvdXRQYW5lbCAtIFJlcHJlc2VudHMgYSBEb2NraW5nTGF5b3V0IGl0ZW0gKFRhYnNXaW5kb3cpLiBMYXlvdXRQYW5lbHMgY2FuIGhhdmUgb25lIG9yIG1hbnkgaXRlbXMgKFRhYkl0ZW0pLiAgUHJvcGVydGllczogICBpZCAtIHRoZSBJRCBvZiB0aGUgTGF5b3V0UGFuZWwuIGF1dG9IaWRlIC0gYSBib29sZWFuIHByb3BlcnR5IHRoYXQgZGV0ZXJtaW5lcyBpZiB0aGUgTGF5b3V0UGFuZWwgaXMgYXV0b0hpZGRlbi4gYXV0b0hpZGVQb3NpdGlvbiAtIGRldGVybWluZXMgdGhlIGF1dG9IaWRlIHBvc2l0aW9uIG9mIHRoZSBpdGVtIGlmICdhdXRvSGlkZScgcHJvcGVydHkgaXMgc2V0LiBQb3NzaWJsZSB2YWx1ZXM6ICd0b3AnLCAnYm90dG9tJywgJ2xlZnQnLCAncmlnaHQnLiBkcm9wUG9zaXRpb24gLSBEZXRlcm1pbmVzIHRoZSBwb3NzaWJsZSBwb3NpdGlvbnMgZm9yIHRoZSBpdGVtIGF0IHdoaWNoIGEgbmV3IGl0ZW0gY2FuIGJlIGRyb3BwZWQgYXMgYSByZXN1bHQgb2YgZHJhZ2dpbmcuIFBvc3NpYmxlIHZhbHVlczogJ3RvcCcsICdib3R0b20nLCAnbGVmdCcsICdyaWdodCcsICdjZW50ZXInLCAnaGVhZGVyJywgJ2xheW91dC10b3AnLCAnbGF5b3V0LWJvdHRvbScsICdsYXlvdXQtbGVmdCcsICdsYXlvdXQtcmlnaHQnLiBQb3NpdGlvbnMgd2l0aCB0aGUgJ2xheW91dCcgcHJlZml4IHJlZmxlY3Qgb24gTGF5b3V0UGFuZWxJdGVtcyB0aGF0IGFyZSBjaGlsZHJlbiBvZiB0aGUgTGF5b3V0UGFuZWwuIGxhYmVsIC0gdGhlIExhYmVsIG9mIHRoZSBMYXlvdXRQYW5lbCB3aW5kb3cuIHRhYlBvc2l0aW9uIC0gRGV0ZXJtaW5lcyB0aGUgcG9zaXRpb24gb2YgdGhlIFRhYiBsYWJlbHMgaW5zaWRlIHRoZSBMYXlvdXRQYW5lbC4gbGF5b3V0IC0gZGV0ZXJtaW5lcyB0aGUgRG9ja2luZ0xheW91dCBvd25lciBvZiB0aGUgTGF5b3V0UGFuZWwuIEFjY2VwdHMgYSBzdHJpbmcgaW5kaWNhdGluZyB0aGUgSUQgb2YgYSBEb2NraW5nTGF5b3V0IG9uIHRoZSBwYWdlIG9yIGEgZGlyZWN0IHJlZmVyZW5jZSB0byBpdC4gaGVhZGVyQnV0dG9ucyAtIGFuIEFycmF5IG9mIHN0cmluZ3MgdGhhdCBkZWZpbmUgdGhlIGJ1dHRvbnMgaW4gdGhlIGhlYWRlciBzZWN0aW9uIG9mIHRoZSBEb2NraW5nTGF5b3V0IGl0ZW0uIHRhYkNsb3NlQnV0dG9ucyAtIGEgYm9vbGVhbiBwcm9wZXJ0eSB0aGF0IEVuYWJsZXMgb3IgZGlzYWJsZXMgdGhlIGNsb3NlIGJ1dHRvbnMgaW5zaWRlIGVhY2ggVGFiIGl0ZW0gbGFiZWwgaW5zaWRlIHRoZSBEb2NraW5nTGF5b3V0IGl0ZW0uIHRhYk92ZXJmbG93IC0gc2FtZSBhcyAnb3ZlcmZsb3cnIHByb3BlcnR5IG9mIGpxeFRhYnMuIEl0IGRlZmluZXMgdGhlIG92ZXJmbG93IG1vZGUgb2YgdGhlIGxhYmVscyBvZiB0aGUgVGFiIGl0ZW1zIGluc2lkZSBhIERvY2tpbmdMYXlvdXQgaXRlbS5zZWxlY3Rpb25Nb2RlIC0gdGhlIHNhbWUgYXMganF4VGFicyBzZWxlY3Rpb24gbW9kZXMuIEFwcGxpZXMgdG8gVGFiIGl0ZW1zIGluc2lkZSBhIERvY2tpbmdMYXlvdXQgaXRlbS4gdGFiUmVzaXplIC0gdGhlIHNhbWUgYXMgJ3Jlc2l6ZScgcHJvcGVydHkgb2YganF4VGFicy4gQWxsb3dzIHJlc2l6aW5nIHRoZSBUYWIgbGFiZWxzIGluc2lkZSB0aGUgRG9ja2luZ0xheW91dCBpdGVtLiBsb2NrZWQgLSBMb2NrcyB0aGUgc2l6ZSBvZiB0aGUgaXRlbSBhbmQgZG9lcyBub3QgYWxsb3cgcmVzaXppbmcuIG1heCAtIHNldHMgdGhlIG1heGltdW0gc2l6ZSBvZiB0aGUgaXRlbS4gbWluIC0gc2V0cyB0aGUgbWluaW11bSBzaXplIG9mIHRoZSBpdGVtIHNpemUgLSBzZXRzIHRoZSBzaXplIG9mIHRoZSBpdGVtLiBpdGVtcyAtIGFuIGFycmF5IG9mIG9iamVjdHMuIEVhY2ggb2JqZWN0IGRlZmluZXMgdGhlIHN0cnVjdHVyZSBvZiBhIExheW91dFBhbmVsSXRlbS4gICBMYXlvdXRQYW5lbEl0ZW0gLSBSZXByZXNlbnRzIGEgTGF5b3V0UGFuZWwgaXRlbSAoVGFiSXRlbSkuIFByb3BlcnRpZXM6ICBpZCAtIHRoZSBJRCBvZiB0aGUgVGFiIGl0ZW0uIGxhYmVsIC0gYSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBsYWJlbCBvZiB0aGUgVGFiIGl0ZW0uIGNvbnRlbnQgLSByZXByZXNlbnRzIHRoZSBjb250ZW50IG9mIHRoZSBUYWIgaXRlbS4gQ2FuIGJlIGFueXRoaW5nLiBzZWxlY3RlZCAtIGRldGVybWluZXMgaWYgdGhlIGl0ZW0gaXMgc2VsZWN0ZWQuIEJ5IGRlZmF1bHQgdGhlIGZpcnN0IGFkZGVkIGl0ZW0gdG8gdGhlIExheW91dFBhbmVsIGlzIGF1dG9tYXRpY2FsbHkgc2VsZWN0ZWQuIGRyYWdnYWJsZSAtIGEgYm9vbGVhbiBwcm9wZXJ0eSB0aGF0IGFsbG93cyB0byBkaXNhYmxlIHRoZSBkcmFnZ2luZyBvZiB0aGUgVGFiIGl0ZW0uICAgICAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbGF5b3V0KCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sYXlvdXQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGxheW91dCh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxheW91dCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBXaGVuIGVuYWJsZWQgdGhlIHJlc2l6aW5nIG9wZXJhdGlvbiBoYXBwZW5zIGxpdmUuIEJ5IGRlZmF1bHQgdGhpcyBmZWF0dXJlIGlzIG5vdCBlbmFibGVkIGFuZCB0aGUgdXNlciBzZWVzIGEgaGlnaHRsaWdodGVkIGJhciB3aGlsZSBkcmFnZ2luZyBpbnN0ZWFkIG9mIHRoZSBhY3R1YWwgc3BsaXR0ZXIgYmFyLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbGl2ZVJlc2l6ZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxpdmVSZXNpemUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGxpdmVSZXNpemUodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubGl2ZVJlc2l6ZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIGxhbmd1YWdlLiBVc2VkIGluIGNvbmp1bmN0aW9uIHdpdGggdGhlIHByb3BlcnR5IG1lc3NhZ2VzLiAgKi9cblx0QElucHV0KClcblx0Z2V0IGxvY2FsZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubG9jYWxlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBsb2NhbGUodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sb2NhbGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ2FsbGJhY2ssIHJlbGF0ZWQgdG8gbG9jYWxpemF0aW9uIG1vZHVsZS4gICovXG5cdEBJbnB1dCgpXG5cdGdldCBsb2NhbGl6ZUZvcm1hdEZ1bmN0aW9uKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sb2NhbGl6ZUZvcm1hdEZ1bmN0aW9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBsb2NhbGl6ZUZvcm1hdEZ1bmN0aW9uKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubG9jYWxpemVGb3JtYXRGdW5jdGlvbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgYW4gb2JqZWN0IHNwZWNpZnlpbmcgc3RyaW5ncyB1c2VkIGluIHRoZSB3aWRnZXQgdGhhdCBjYW4gYmUgbG9jYWxpemVkLiBVc2VkIGluIGNvbmp1bmN0aW9uIHdpdGggdGhlIHByb3BlcnR5IGxvY2FsZS4gICovXG5cdEBJbnB1dCgpXG5cdGdldCBtZXNzYWdlcygpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubWVzc2FnZXMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG1lc3NhZ2VzKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubWVzc2FnZXMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSWYgdGhlIGVsZW1lbnQgaXMgcmVhZG9ubHksIHVzZXJzIGNhbm5vdCBpbnRlcmFjdCB3aXRoIGl0LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcmVhZG9ubHkoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZWFkb25seSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcmVhZG9ubHkodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmVhZG9ubHkgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSB2YWx1ZSBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGVsZW1lbnQgaXMgYWxpZ25lZCB0byBzdXBwb3J0IGxvY2FsZXMgdXNpbmcgcmlnaHQtdG8tbGVmdCBmb250cy4gKi9cblx0QElucHV0KClcblx0Z2V0IHJpZ2h0VG9MZWZ0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmlnaHRUb0xlZnQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHJpZ2h0VG9MZWZ0KHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJpZ2h0VG9MZWZ0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIHJlc2l6ZSBzdGVwIGR1cmluZyByZWlzaXppbmcgKi9cblx0QElucHV0KClcblx0Z2V0IHJlc2l6ZVN0ZXAoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlc2l6ZVN0ZXAgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHJlc2l6ZVN0ZXAodmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZXNpemVTdGVwID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIHNuYXAgbW9kZS4gVHdvIG1vZGVzIGFyZSBhdmFpbGFibGU6ICAgc2ltcGxlIC0gYWxsb3dzIGRyYWdnaW5nIG9mIGEgc2luZ2xlIHRhYiBpdGVtIGluc2lkZSBvciBvdXRzaWRlIHRoZSBsYXlvdXQuIEEgc2VtaS10cmFuc3BhcmVudCBoaWdobGlnaHRlciBpcyB1c2VkIHRvIGluZGljYXRlIHRoZSBwb3NzaWJsZSBsb2NhdGlvbnMgd2hlcmUgdGhlIGRyYWdnZWQgaXRlbSBjYW4gYmUgZHJvcHBlZC4gVGhlIHVzZXIgaGFzIHRvIGRyb3AgdGhlIGRyYWdnZWQgaXRlbSBpbnNpZGUgb25lIG9mIHRoZSBwb3NzaWJsZSBkcm9wIHpvbmVzIGluZGljYXRlZCBieSB0aGUgaGlnaGxpZ2h0ZXIuIGFkdmFuY2VkIC0gYWxsb3dzIGRyYWdnaW5nIG9mIGEgd2hvbGUgVGFic1dpbmRvdyB3aXRoIGl0ZW1zIG9yIGEgc2luZ2xlIHRhYiBpdGVtLiBVc2VzIGEgVmlzdWFsIFN0dWRpbyBzdHlsZSBmZWVkYmFjayB0aGF0IGluZGljYXRlcyB0aGUgcG9zc2libGUgZHJvcCBsb2NhdGlvbnMuIFRoZSB1c2VyIGhhcyB0byBkcm9wIHRoZSB0YXJnZXQgb3ZlciBvbmUgb2YgdGhlIGljb25zIGluc2lkZSB0aGUgZmVlZGJhY2suICAgVGhlIGZlZWRiYWNrL2hpZ2hsaWdodGVyIGlzIGRpc3BsYXllZCB3aGVuIHRoZSBkcmFnZ2luZyBvZiBhbiBpdGVtIGJlZ2lucy4gICovXG5cdEBJbnB1dCgpXG5cdGdldCBzbmFwTW9kZSgpOiBEb2NraW5nTGF5b3V0U25hcE1vZGUgfCBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc25hcE1vZGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHNuYXBNb2RlKHZhbHVlOiBEb2NraW5nTGF5b3V0U25hcE1vZGUgfCBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc25hcE1vZGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgdGhlbWUuIFRoZW1lIGRlZmluZXMgdGhlIGxvb2sgb2YgdGhlIGVsZW1lbnQgKi9cblx0QElucHV0KClcblx0Z2V0IHRoZW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50aGVtZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdGhlbWUodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50aGVtZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBIGdldHRlciB0aGF0IHJldHVybnMgYW4gYXJyYXkgb2YgYWxsIERvY2tpbmdMYXlvdXQgaXRlbXMgdGhhdCBoYXZlIGJlZW4gdW5kb2NrZWQuIFVuZG9ja2VkIGl0ZW1zIGFyZSBubyBtb3JlIHBhcnQgb2YgdGhlIExheW91dCdzIGludGVyYWwgc3RydWN0dXJlIGJ1dCBjYW4gYmUgaW5zZXJ0ZWQgYnkgZHJhZ2dpbmcgdGhlbSBpbi4gKi9cblx0QElucHV0KClcblx0Z2V0IHVuZG9ja2VkSXRlbXMoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnVuZG9ja2VkSXRlbXMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHVuZG9ja2VkSXRlbXModmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC51bmRvY2tlZEl0ZW1zID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIElmIGlzIHNldCB0byB0cnVlLCB0aGUgZWxlbWVudCBjYW5ub3QgYmUgZm9jdXNlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IHVuZm9jdXNhYmxlKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudW5mb2N1c2FibGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHVuZm9jdXNhYmxlKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnVuZm9jdXNhYmxlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHRhYiBzZWxlY3Rpb24gaXMgY2hhbmdlZC4gTm90ZTogQ2hhbmdlIGV2ZW50IG1heSBiZSB0aHJvd24gYnkgb3RoZXIgSlFYIEN1c3RvbSBFbGVtZW50cyBuZXN0ZWQgaW5zaWRlIHRoZSBUYWIgaXRlbXMuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHQqL1xuXHRAT3V0cHV0KCkgb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgVGFiIGl0ZW0gb3IgYSB3aG9sZSBUYWJzIFdpbmRvdyBpdGVtICggRG9ja2luZ0xheW91dCBpdGVtICkgaXMgY2xvc2VkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Ki9cblx0QE91dHB1dCgpIG9uQ2xvc2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgVGFiIGl0ZW0vVGFicyBXaW5kb3cgaXMgYWJvdXQgdG8gYmUgY2xvc2VkLiBUaGUgY2xvc2luZyBvcGVyYXRpb24gY2FuIGJlIGNhbmNlbGVkIGJ5IGNhbGxpbmcgZXZlbnQucHJldmVudERlZmF1bHQoKSBpbiB0aGUgZXZlbnQgaGFuZGxlciBmdW5jdGlvbi5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvbkNsb3Npbmc6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGFuIGl0ZW0ncyBwb3NpdGlvbiBpbnNpZGUgdGhlIExheW91dCBvciBpdCdzIHNpemUgaGFzIGJlZW4gY2hhbmdlZC4gSW5kaWNhdGVzIHRoYXQgYSBzdGF0ZSBjaGFuZ2UgaGFzIG9jY3VyZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHQqL1xuXHRAT3V0cHV0KCkgb25TdGF0ZUNoYW5nZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gaXRlbSByZXNpemluZyBiZWdpbnMuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHQqL1xuXHRAT3V0cHV0KCkgb25SZXNpemVTdGFydDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gaXRlbSByZXNpemluZyBmaW5pc2hlcy5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvblJlc2l6ZUVuZDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIE1ha2VzIGEgXCJzbWFydC10YWJzLXdpbmRvd1wiIG5vZGUsIHRoYXQgaXMgYSBjaGlsZCBvZiB0aGUgTGF5b3V0LCBhdXRvIGhpZGRlbiBieSBwbGFjaW5nIGl0IGF0IHRoZSBCb3R0b20gcG9zaXRpb24gaW5zaWRlIHRoZSBlbGVtZW50LiBUaGlzIG1lYW5zIHRoYXQgdGhlIGl0ZW0gd2lsbCBiZSBwb3NpdGlvbmVkIG5lYXIgdGhlIGJvdHRvbSBzaWRlIG9mIHRoZSBsYXlvdXQgYW5kIGl0J3MgY29udGVudCB3aWxsIGJlIGhpZGRlbiB1bnRpbCB0aGUgdXNlciBzZWxlY3RzIG9uZSBvZiBpdCdzIGxhYmVscy4gXG5cdCogQHBhcmFtIHtIVE1MRWxlbWVudCB8IG51bWJlciB8IHN0cmluZ30gbm9kZS4gVGhlIFwic21hcnQtdGFicy13aW5kb3dcIiBvciBcInNtYXJ0LXRhYi1pdGVtXCIgbm9kZSB0byBhcHBlbmRcblx0Ki9cbiAgICBwdWJsaWMgYXV0b0hpZGVCb3R0b20obm9kZTogSFRNTEVsZW1lbnQgfCBudW1iZXIgfCBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYXV0b0hpZGVCb3R0b20obm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYXV0b0hpZGVCb3R0b20obm9kZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIE1ha2VzIGEgXCJzbWFydC10YWJzLXdpbmRvd1wiIG5vZGUsIHRoYXQgaXMgYSBjaGlsZCBvZiB0aGUgTGF5b3V0LCBhdXRvIGhpZGRlbiBieSBwbGFjaW5nIGl0IGF0IHRoZSBMZWZ0IHBvc2l0aW9uIGluc2lkZSB0aGUgbGF5b3V0LiBUaGlzIG1lYW5zIHRoYXQgdGhlIGl0ZW0gd2lsbCBiZSBwb3NpdGlvbmVkIG5lYXIgdGhlIGxlZnQgc2lkZSBvZiB0aGUgbGF5b3V0IGFuZCBpdCdzIGNvbnRlbnQgd2lsbCBiZSBoaWRkZW4gdW50aWwgdGhlIHVzZXIgc2VsZWN0cyBvbmUgb2YgaXQncyBsYWJlbHMuIFxuXHQqIEBwYXJhbSB7SFRNTEVsZW1lbnQgfCBudW1iZXIgfCBzdHJpbmd9IG5vZGUuIFRoZSBcInNtYXJ0LXRhYnMtd2luZG93XCIgb3IgXCJzbWFydC10YWItaXRlbVwiIG5vZGUgdG8gYXBwZW5kXG5cdCovXG4gICAgcHVibGljIGF1dG9IaWRlTGVmdChub2RlOiBIVE1MRWxlbWVudCB8IG51bWJlciB8IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5hdXRvSGlkZUxlZnQobm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYXV0b0hpZGVMZWZ0KG5vZGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBNYWtlcyBhIFwic21hcnQtdGFicy13aW5kb3dcIiBub2RlLCB0aGF0IGlzIGEgY2hpbGQgb2YgdGhlIExheW91dCwgYXV0byBoaWRkZW4gYnkgcGxhY2luZyBpdCBhdCB0aGUgUmlnaHQgcG9zaXRpb24gaW5zaWRlIHRoZSBsYXlvdXQuIFRoaXMgbWVhbnMgdGhhdCB0aGUgaXRlbSB3aWxsIGJlIHBvc2l0aW9uZWQgbmVhciB0aGUgcmlnaHQgc2lkZSBvZiB0aGUgbGF5b3V0IGFuZCBpdCdzIGNvbnRlbnQgd2lsbCBiZSBoaWRkZW4gdW50aWwgdGhlIHVzZXIgc2VsZWN0cyBvbmUgb2YgaXQncyBsYWJlbHMuIFxuXHQqIEBwYXJhbSB7SFRNTEVsZW1lbnQgfCBudW1iZXIgfCBzdHJpbmd9IG5vZGUuIFRoZSBcInNtYXJ0LXRhYnMtd2luZG93XCIgb3IgXCJzbWFydC10YWItaXRlbVwiIG5vZGUgdG8gYXBwZW5kXG5cdCovXG4gICAgcHVibGljIGF1dG9IaWRlUmlnaHQobm9kZTogSFRNTEVsZW1lbnQgfCBudW1iZXIgfCBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYXV0b0hpZGVSaWdodChub2RlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5hdXRvSGlkZVJpZ2h0KG5vZGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBNYWtlcyBhIFwic21hcnQtdGFicy13aW5kb3dcIiBub2RlLCB0aGF0IGlzIGEgY2hpbGQgb2YgdGhlIExheW91dCwgYXV0byBoaWRkZW4gYnkgcGxhY2luZyBpdCBhdCB0aGUgVG9wIHBvc2l0aW9uIGluc2lkZSB0aGUgbGF5b3V0LiBUaGlzIG1lYW5zIHRoYXQgdGhlIGl0ZW0gd2lsbCBiZSBwb3NpdGlvbmVkIG5lYXIgdGhlIHRvcCBzaWRlIG9mIHRoZSBsYXlvdXQgYW5kIGl0J3MgY29udGVudCB3aWxsIGJlIGhpZGRlbiB1bnRpbCB0aGUgdXNlciBzZWxlY3RzIG9uZSBvZiBpdCdzIGxhYmVscy4gXG5cdCogQHBhcmFtIHtIVE1MRWxlbWVudCB8IG51bWJlciB8IHN0cmluZ30gbm9kZS4gVGhlIFwic21hcnQtdGFicy13aW5kb3dcIiBvciBcInNtYXJ0LXRhYi1pdGVtXCIgbm9kZSB0byBhcHBlbmRcblx0Ki9cbiAgICBwdWJsaWMgYXV0b0hpZGVUb3Aobm9kZTogSFRNTEVsZW1lbnQgfCBudW1iZXIgfCBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYXV0b0hpZGVUb3Aobm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYXV0b0hpZGVUb3Aobm9kZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIENsZWFycyB0aGUgbG9jYWxTdG9yYWdlIG9mIGFueSBwcmV2aW91cyBjYWNoZWQgc3RhdGUgb2YgdGhlIERvY2tpbmdMYXlvdXQuIFxuXHQqL1xuICAgIHB1YmxpYyBjbGVhclN0YXRlKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbGVhclN0YXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xlYXJTdGF0ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGUgbWV0aG9kIHdpbGwgcmVzZXQgYW4gYXV0b2hpZGRlbiBpdGVtIHRvIGl0J3Mgbm9ybWFsIGJlaGF2aW9yIGFuZCByZS1pbnNlcnQgaXQgYXQgYSBzcGVjaWZpZWQgcG9zaXRpb24uIEl0IGNhbiBhbHNvIGJlIHVzZWQgdG8gaW5zZXJ0IGl0ZW1zIGludG8gdGhlIERvY2tpbmdMYXlvdXQuIE5vdGU6IEl0ZW1zIGluc2VydGVkIHZpYSB0aGlzIG1ldGhvZCBhcmUgYWRkZWQgYXMgYSB0b3AgbGV2ZWwgaXRlbXMuIFxuXHQqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyIHwgTm9kZX0gbm9kZS4gQW4gYXV0b2hpZGRlbiBcInNtYXJ0LXRhYnMtd2luZG93XCIgaXRlbSBpbnN0YW5jZSBvciBhIG5ldyBcInNtYXJ0LXRhYnMtd2luZG93XCIgaW5zdGFuY2UuXG5cdCogQHJldHVybnMge05vZGV9XG4gICovXG5cdHB1YmxpYyBhc3luYyBkb2NrKG5vZGUpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZG9jayhub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEluc2VydHMgYSBuZXcgVGFic1dpbmRvdyBpbnRvIHRoZSBEb2NraW5nTGF5b3V0IG9yIGNyZWF0ZXMgYSBUYWJzV2luZG93IGluc3RhbmNlIGZyb20gYW4gb2JqZWN0IHBhc3NlZCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50LiBUaGUgbmV3IGl0ZW0gaXMgaW5zZXJ0ZWQgYmVmb3JlIHRoZSB0YXJnZXQgaXRlbSB3aGljaCBjb3JyZXNwb25kcyB0byB0aGUgaW5kZXggcGFzc2VkIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byB0aGUgbWV0aG9kLiBcblx0KiBAcGFyYW0ge251bWJlciB8IEhUTUxFbGVtZW50IHwgc3RyaW5nfSBpbmRleC4gVGhlIGluZGV4IHRvIGluc2VydCBhIG5ldyBUYWJzV2luZG93IGF0LlxuXHQqIEBwYXJhbSB7YW55fSBpdGVtLiBBbiBpbnN0YW5jZSBvZiBhIFRhYnNXaW5kb3cgb3IgYW4gT2JqZWN0IHdpdGggdGhlIGZpZWxkcyBcImxhYmVsXCIsIFwiaXRlbXNcIiBhbmQgb3RoZXIgYWRkaXRpb25hbC5cblx0Ki9cbiAgICBwdWJsaWMgaW5zZXJ0QmVmb3JlSXRlbShpbmRleDogbnVtYmVyIHwgSFRNTEVsZW1lbnQgfCBzdHJpbmcsIGl0ZW06IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5pbnNlcnRCZWZvcmVJdGVtKGluZGV4LCBpdGVtKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5pbnNlcnRCZWZvcmVJdGVtKGluZGV4LCBpdGVtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSW5zZXJ0cyBhIG5ldyBUYWJzV2luZG93IGludG8gdGhlIERvY2tpbmdMYXlvdXQgb3IgY3JlYXRlcyBhIFRhYnNXaW5kb3cgaW5zdGFuY2UgZnJvbSBhbiBvYmplY3QgcGFzc2VkIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQuIFRoZSBuZXcgaXRlbSBpcyBpbnNlcnRlZCBhZnRlciB0aGUgdGFyZ2V0IGl0ZW0gd2hpY2ggY29ycmVzcG9uZHMgdG8gdGhlIGluZGV4IHBhc3NlZCBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gdGhlIG1ldGhvZC4gXG5cdCogQHBhcmFtIHtudW1iZXIgfCBIVE1MRWxlbWVudCB8IHN0cmluZ30gaW5kZXguIFRoZSBpbmRleCB0byBpbnNlcnQgYSBuZXcgVGFic1dpbmRvdyBhdC5cblx0KiBAcGFyYW0ge2FueX0gaXRlbS4gQW4gaW5zdGFuY2Ugb2YgYSBUYWJzV2luZG93IG9yIGFuIE9iamVjdCB3aXRoIHRoZSBmaWVsZHMgXCJsYWJlbFwiLCBcIml0ZW1zXCIgYW5kIG90aGVyIGFkZGl0aW9uYWwuXG5cdCovXG4gICAgcHVibGljIGluc2VydEFmdGVySXRlbShpbmRleDogbnVtYmVyIHwgSFRNTEVsZW1lbnQgfCBzdHJpbmcsIGl0ZW06IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5pbnNlcnRBZnRlckl0ZW0oaW5kZXgsIGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lmluc2VydEFmdGVySXRlbShpbmRleCwgaXRlbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEluc2VydHMgYSBuZXcgVGFic1dpbmRvdyBpbnRvIHRoZSBEb2NraW5nTGF5b3V0IG9yIGNyZWF0ZXMgYSBUYWJzV2luZG93IGluc3RhbmNlIGZyb20gYW4gb2JqZWN0IHBhc3NlZCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50LiBUaGUgbmV3IGl0ZW0gaXMgaW5zZXJ0ZWQgYnkgc3BsaXR0aW5nICB0aGUgdGFyZ2V0IGl0ZW0gd2hpY2ggY29ycmVzcG9uZHMgdG8gdGhlIGluZGV4IHBhc3NlZCBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gdGhlIG1ldGhvZCBpbiB0d28gYW5kIHBsYWNpbmcgdGhlIG5ldyBpdGVtIGFzIGl0J3MgbGVmdCBuZWlnaGJvdXIgaG9yaXpvbnRhbGx5LiBcblx0KiBAcGFyYW0ge251bWJlciB8IEhUTUxFbGVtZW50IHwgc3RyaW5nfSBpbmRleC4gVGhlIGluZGV4IHRvIGluc2VydCBhIG5ldyBUYWJzV2luZG93IGF0LlxuXHQqIEBwYXJhbSB7YW55fSBpdGVtLiBBbiBpbnN0YW5jZSBvZiBhIFRhYnNXaW5kb3cgb3IgYW4gT2JqZWN0IHdpdGggdGhlIGZpZWxkcyBcImxhYmVsXCIsIFwiaXRlbXNcIiBhbmQgb3RoZXIgYWRkaXRpb25hbC5cblx0Ki9cbiAgICBwdWJsaWMgaW5zZXJ0SW50b0xlZnQoaW5kZXg6IG51bWJlciB8IEhUTUxFbGVtZW50IHwgc3RyaW5nLCBpdGVtOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5zZXJ0SW50b0xlZnQoaW5kZXgsIGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lmluc2VydEludG9MZWZ0KGluZGV4LCBpdGVtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSW5zZXJ0cyBhIG5ldyBUYWJzV2luZG93IGludG8gdGhlIERvY2tpbmdMYXlvdXQgb3IgY3JlYXRlcyBhIFRhYnNXaW5kb3cgaW5zdGFuY2UgZnJvbSBhbiBvYmplY3QgcGFzc2VkIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQuIFRoZSBuZXcgaXRlbSBpcyBpbnNlcnRlZCBieSBzcGxpdHRpbmcgIHRoZSB0YXJnZXQgaXRlbSB3aGljaCBjb3JyZXNwb25kcyB0byB0aGUgaW5kZXggcGFzc2VkIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byB0aGUgbWV0aG9kIGluIHR3byBhbmQgcGxhY2luZyB0aGUgbmV3IGl0ZW0gYXMgaXQncyByaWdodCBuZWlnaGJvdXIgaG9yaXpvbnRhbGx5LiBcblx0KiBAcGFyYW0ge251bWJlciB8IEhUTUxFbGVtZW50IHwgc3RyaW5nfSBpbmRleC4gVGhlIGluZGV4IHRvIGluc2VydCBhIG5ldyBUYWJzV2luZG93IGF0LlxuXHQqIEBwYXJhbSB7YW55fSBpdGVtLiBBbiBpbnN0YW5jZSBvZiBhIFRhYnNXaW5kb3cgb3IgYW4gT2JqZWN0IHdpdGggdGhlIGZpZWxkcyBcImxhYmVsXCIsIFwiaXRlbXNcIiBhbmQgb3RoZXIgYWRkaXRpb25hbC5cblx0Ki9cbiAgICBwdWJsaWMgaW5zZXJ0SW50b1JpZ2h0KGluZGV4OiBudW1iZXIgfCBIVE1MRWxlbWVudCB8IHN0cmluZywgaXRlbTogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lmluc2VydEludG9SaWdodChpbmRleCwgaXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5zZXJ0SW50b1JpZ2h0KGluZGV4LCBpdGVtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSW5zZXJ0cyBhIG5ldyBUYWJzV2luZG93IGludG8gdGhlIERvY2tpbmdMYXlvdXQgb3IgY3JlYXRlcyBhIFRhYnNXaW5kb3cgaW5zdGFuY2UgZnJvbSBhbiBvYmplY3QgcGFzc2VkIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQuIFRoZSBuZXcgaXRlbSBpcyBpbnNlcnRlZCBieSBzcGxpdHRpbmcgIHRoZSB0YXJnZXQgaXRlbSB3aGljaCBjb3JyZXNwb25kcyB0byB0aGUgaW5kZXggcGFzc2VkIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byB0aGUgbWV0aG9kIGluIHR3byBhbmQgcGxhY2luZyB0aGUgbmV3IGl0ZW0gYXMgaXQncyB0b3AgbmVpZ2hib3VyIHZlcnRpY2FsbHkuIFxuXHQqIEBwYXJhbSB7bnVtYmVyIHwgSFRNTEVsZW1lbnQgfCBzdHJpbmd9IGluZGV4LiBUaGUgaW5kZXggdG8gaW5zZXJ0IGEgbmV3IFRhYnNXaW5kb3cgYXQuXG5cdCogQHBhcmFtIHthbnl9IGl0ZW0uIEFuIGluc3RhbmNlIG9mIGEgVGFic1dpbmRvdyBvciBhbiBPYmplY3Qgd2l0aCB0aGUgZmllbGRzIFwibGFiZWxcIiwgXCJpdGVtc1wiIGFuZCBvdGhlciBhZGRpdGlvbmFsLlxuXHQqL1xuICAgIHB1YmxpYyBpbnNlcnRJbnRvVG9wKGluZGV4OiBudW1iZXIgfCBIVE1MRWxlbWVudCB8IHN0cmluZywgaXRlbTogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lmluc2VydEludG9Ub3AoaW5kZXgsIGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lmluc2VydEludG9Ub3AoaW5kZXgsIGl0ZW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBJbnNlcnRzIGEgbmV3IFRhYnNXaW5kb3cgaW50byB0aGUgRG9ja2luZ0xheW91dCBvciBjcmVhdGVzIGEgVGFic1dpbmRvdyBpbnN0YW5jZSBmcm9tIGFuIG9iamVjdCBwYXNzZWQgYXMgdGhlIHNlY29uZCBhcmd1bWVudC4gVGhlIG5ldyBpdGVtIGlzIGluc2VydGVkIGJ5IHNwbGl0dGluZyAgdGhlIHRhcmdldCBpdGVtIHdoaWNoIGNvcnJlc3BvbmRzIHRvIHRoZSBpbmRleCBwYXNzZWQgYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIHRoZSBtZXRob2QgaW4gdHdvIGFuZCBwbGFjaW5nIHRoZSBuZXcgaXRlbSBhcyBpdCdzIGJvdHRvbSBuZWlnaGJvdXIgdmVydGljYWxseS4gXG5cdCogQHBhcmFtIHtudW1iZXIgfCBIVE1MRWxlbWVudCB8IHN0cmluZ30gaW5kZXguIFRoZSBpbmRleCB0byBpbnNlcnQgYSBuZXcgVGFic1dpbmRvdyBhdC5cblx0KiBAcGFyYW0ge2FueX0gaXRlbS4gQW4gaW5zdGFuY2Ugb2YgYSBUYWJzV2luZG93IG9yIGFuIE9iamVjdCB3aXRoIHRoZSBmaWVsZHMgXCJsYWJlbFwiLCBcIml0ZW1zXCIgYW5kIG90aGVyIGFkZGl0aW9uYWwuXG5cdCovXG4gICAgcHVibGljIGluc2VydEludG9Cb3R0b20oaW5kZXg6IG51bWJlciB8IEhUTUxFbGVtZW50IHwgc3RyaW5nLCBpdGVtOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5zZXJ0SW50b0JvdHRvbShpbmRleCwgaXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5zZXJ0SW50b0JvdHRvbShpbmRleCwgaXRlbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEluc2VydHMgYSBuZXcgVGFic1dpbmRvdyBpbnRvIHRoZSBEb2NraW5nTGF5b3V0IG9yIGNyZWF0ZXMgYSBUYWJzV2luZG93IGluc3RhbmNlIGZyb20gYW4gb2JqZWN0IHBhc3NlZCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50LiBUaGUgbmV3IGl0ZW0gaXMgaW5zZXJ0ZWQgYXMgYSB0b3AgbGV2ZWwgaXRlbSBwb3NpdGlvbmVkIGF0IHRoZSB0b3Agc2lkZSBpbnNpZGUgdGhlIExheW91dC4gXG5cdCogQHBhcmFtIHthbnl9IGl0ZW0uIEFuIGluc3RhbmNlIG9mIGEgVGFic1dpbmRvdyBvciBhbiBPYmplY3Qgd2l0aCB0aGUgZmllbGRzIFwibGFiZWxcIiwgXCJpdGVtc1wiIGFuZCBvdGhlciBhZGRpdGlvbmFsLlxuXHQqL1xuICAgIHB1YmxpYyBpbnNlcnRMYXlvdXRUb3AoaXRlbTogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lmluc2VydExheW91dFRvcChpdGVtKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5pbnNlcnRMYXlvdXRUb3AoaXRlbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEluc2VydHMgYSBuZXcgVGFic1dpbmRvdyBpbnRvIHRoZSBEb2NraW5nTGF5b3V0IG9yIGNyZWF0ZXMgYSBUYWJzV2luZG93IGluc3RhbmNlIGZyb20gYW4gb2JqZWN0IHBhc3NlZCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50LiBUaGUgbmV3IGl0ZW0gaXMgaW5zZXJ0ZWQgYXMgYSB0b3AgbGV2ZWwgaXRlbSBwb3NpdGlvbmVkIGF0IHRoZSBib3R0b20gc2lkZSBpbnNpZGUgdGhlIExheW91dC4gXG5cdCogQHBhcmFtIHthbnl9IGl0ZW0uIEFuIGluc3RhbmNlIG9mIGEgVGFic1dpbmRvdyBvciBhbiBPYmplY3Qgd2l0aCB0aGUgZmllbGRzIFwibGFiZWxcIiwgXCJpdGVtc1wiIGFuZCBvdGhlciBhZGRpdGlvbmFsLlxuXHQqL1xuICAgIHB1YmxpYyBpbnNlcnRMYXlvdXRCb3R0b20oaXRlbTogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lmluc2VydExheW91dEJvdHRvbShpdGVtKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5pbnNlcnRMYXlvdXRCb3R0b20oaXRlbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEluc2VydHMgYSBuZXcgVGFic1dpbmRvdyBpbnRvIHRoZSBEb2NraW5nTGF5b3V0IG9yIGNyZWF0ZXMgYSBUYWJzV2luZG93IGluc3RhbmNlIGZyb20gYW4gb2JqZWN0IHBhc3NlZCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50LiBUaGUgbmV3IGl0ZW0gaXMgaW5zZXJ0ZWQgYXMgYSB0b3AgbGV2ZWwgaXRlbSBwb3NpdGlvbmVkIGF0IHRoZSBsZWZ0IHNpZGUgaW5zaWRlIHRoZSBMYXlvdXQuIFxuXHQqIEBwYXJhbSB7YW55fSBpdGVtLiBBbiBpbnN0YW5jZSBvZiBhIFRhYnNXaW5kb3cgb3IgYW4gT2JqZWN0IHdpdGggdGhlIGZpZWxkcyBcImxhYmVsXCIsIFwiaXRlbXNcIiBhbmQgb3RoZXIgYWRkaXRpb25hbC5cblx0Ki9cbiAgICBwdWJsaWMgaW5zZXJ0TGF5b3V0TGVmdChpdGVtOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5zZXJ0TGF5b3V0TGVmdChpdGVtKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5pbnNlcnRMYXlvdXRMZWZ0KGl0ZW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBJbnNlcnRzIGEgbmV3IFRhYnNXaW5kb3cgaW50byB0aGUgRG9ja2luZ0xheW91dCBvciBjcmVhdGVzIGEgVGFic1dpbmRvdyBpbnN0YW5jZSBmcm9tIGFuIG9iamVjdCBwYXNzZWQgYXMgdGhlIHNlY29uZCBhcmd1bWVudC4gVGhlIG5ldyBpdGVtIGlzIGluc2VydGVkIGFzIGEgdG9wIGxldmVsIGl0ZW0gcG9zaXRpb25lZCBhdCB0aGUgcmlnaHQgaW5zaWRlIHRoZSBMYXlvdXQuIFxuXHQqIEBwYXJhbSB7YW55fSBpdGVtLiBBbiBpbnN0YW5jZSBvZiBhIFRhYnNXaW5kb3cgb3IgYW4gT2JqZWN0IHdpdGggdGhlIGZpZWxkcyBcImxhYmVsXCIsIFwiaXRlbXNcIiBhbmQgb3RoZXIgYWRkaXRpb25hbC5cblx0Ki9cbiAgICBwdWJsaWMgaW5zZXJ0TGF5b3V0UmlnaHQoaXRlbTogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lmluc2VydExheW91dFJpZ2h0KGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lmluc2VydExheW91dFJpZ2h0KGl0ZW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBJbnNlcnRzIGEgbmV3IFRhYnNXaW5kb3cgaW50byB0aGUgRG9ja2luZ0xheW91dCBvciBjcmVhdGVzIGEgVGFic1dpbmRvdyBpbnN0YW5jZSBmcm9tIGFuIG9iamVjdCBwYXNzZWQgYXMgdGhlIHNlY29uZCBhcmd1bWVudC4gVGhlIHRhcmdldCBpdGVtIGFuZCBpdCdzIG5laWdoYm91ciBpdGVtcyBhcmUgcGxhY2VkIGluc2lkZSBhIG5ldyBzcGxpdHRlciBpdGVtIHRoYXQgYWN0cyBhcyB0aGUgbmV3IG5lZ2hib3VyIG9mIHRoZSBuZXdseSBhZGRlZCBpdGVtIHZpYSB0aGlzIG1ldGhvZC4gVGhlIG5ldyBpdGVtIGlzIGluc2VydGVkIGFib3ZlIHRoZSB0YXJnZXQgKCBhdCBwb3NpdGlvbiBUb3ApLiBcblx0KiBAcGFyYW0ge251bWJlciB8IEhUTUxFbGVtZW50IHwgc3RyaW5nfSBpbmRleC4gVGhlIGluZGV4IHRvIGluc2VydCBhIG5ldyBUYWJzV2luZG93IGF0LlxuXHQqIEBwYXJhbSB7YW55fSB0YWJzV2luZG93LiBBbiBpbnN0YW5jZSBvZiBhIFRhYnNXaW5kb3cgb3IgYW4gT2JqZWN0IHdpdGggdGhlIGZpZWxkcyBcImxhYmVsXCIsIFwiaXRlbXNcIiBhbmQgb3RoZXIgYWRkaXRpb25hbC5cblx0Ki9cbiAgICBwdWJsaWMgaW5zZXJ0T3V0c2lkZVRhcmdldEdyb3VwVG9wKGluZGV4OiBudW1iZXIgfCBIVE1MRWxlbWVudCB8IHN0cmluZywgdGFic1dpbmRvdzogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lmluc2VydE91dHNpZGVUYXJnZXRHcm91cFRvcChpbmRleCwgdGFic1dpbmRvdyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5zZXJ0T3V0c2lkZVRhcmdldEdyb3VwVG9wKGluZGV4LCB0YWJzV2luZG93KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSW5zZXJ0cyBhIG5ldyBUYWJzV2luZG93IGludG8gdGhlIERvY2tpbmdMYXlvdXQgb3IgY3JlYXRlcyBhIFRhYnNXaW5kb3cgaW5zdGFuY2UgZnJvbSBhbiBvYmplY3QgcGFzc2VkIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQuIFRoZSB0YXJnZXQgaXRlbSBhbmQgaXQncyBuZWlnaGJvdXIgaXRlbXMgYXJlIHBsYWNlZCBpbnNpZGUgYSBuZXcgc3BsaXR0ZXIgaXRlbSB0aGF0IGFjdHMgYXMgdGhlIG5ldyBuZWdoYm91ciBvZiB0aGUgbmV3bHkgYWRkZWQgaXRlbSB2aWEgdGhpcyBtZXRob2QuIFRoZSBuZXcgaXRlbSBpcyBpbnNlcnRlZCBiZWxsb3cgdGhlIHRhcmdldCAoIGF0IHBvc2l0aW9uIEJvdHRvbSkuIFxuXHQqIEBwYXJhbSB7bnVtYmVyIHwgSFRNTEVsZW1lbnQgfCBzdHJpbmd9IGluZGV4LiBUaGUgaW5kZXggdG8gaW5zZXJ0IGEgbmV3IFRhYnNXaW5kb3cgYXQuXG5cdCogQHBhcmFtIHthbnl9IHRhYnNXaW5kb3cuIEFuIGluc3RhbmNlIG9mIGEgVGFic1dpbmRvdyBvciBhbiBPYmplY3Qgd2l0aCB0aGUgZmllbGRzIFwibGFiZWxcIiwgXCJpdGVtc1wiIGFuZCBvdGhlciBhZGRpdGlvbmFsLlxuXHQqL1xuICAgIHB1YmxpYyBpbnNlcnRPdXRzaWRlVGFyZ2V0R3JvdXBCb3R0b20oaW5kZXg6IG51bWJlciB8IEhUTUxFbGVtZW50IHwgc3RyaW5nLCB0YWJzV2luZG93OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5zZXJ0T3V0c2lkZVRhcmdldEdyb3VwQm90dG9tKGluZGV4LCB0YWJzV2luZG93KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5pbnNlcnRPdXRzaWRlVGFyZ2V0R3JvdXBCb3R0b20oaW5kZXgsIHRhYnNXaW5kb3cpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBJbnNlcnRzIGEgbmV3IFRhYnNXaW5kb3cgaW50byB0aGUgRG9ja2luZ0xheW91dCBvciBjcmVhdGVzIGEgVGFic1dpbmRvdyBpbnN0YW5jZSBmcm9tIGFuIG9iamVjdCBwYXNzZWQgYXMgdGhlIHNlY29uZCBhcmd1bWVudC4gVGhlIHRhcmdldCBpdGVtIGFuZCBpdCdzIG5laWdoYm91ciBpdGVtcyBhcmUgcGxhY2VkIGluc2lkZSBhIG5ldyBzcGxpdHRlciBpdGVtIHRoYXQgYWN0cyBhcyB0aGUgbmV3IG5lZ2hib3VyIG9mIHRoZSBuZXdseSBhZGRlZCBpdGVtIHZpYSB0aGlzIG1ldGhvZC4gVGhlIG5ldyBpdGVtIGlzIGluc2VydGVkIGJlZm9yZSB0aGUgdGFyZ2V0ICggYXQgcG9zaXRpb24gTGVmdCkuIFxuXHQqIEBwYXJhbSB7bnVtYmVyIHwgSFRNTEVsZW1lbnQgfCBzdHJpbmd9IGluZGV4LiBUaGUgaW5kZXggdG8gaW5zZXJ0IGEgbmV3IFRhYnNXaW5kb3cgYXQuXG5cdCogQHBhcmFtIHthbnl9IHRhYnNXaW5kb3cuIEFuIGluc3RhbmNlIG9mIGEgVGFic1dpbmRvdyBvciBhbiBPYmplY3Qgd2l0aCB0aGUgZmllbGRzIFwibGFiZWxcIiwgXCJpdGVtc1wiIGFuZCBvdGhlciBhZGRpdGlvbmFsLlxuXHQqL1xuICAgIHB1YmxpYyBpbnNlcnRPdXRzaWRlVGFyZ2V0R3JvdXBMZWZ0KGluZGV4OiBudW1iZXIgfCBIVE1MRWxlbWVudCB8IHN0cmluZywgdGFic1dpbmRvdzogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lmluc2VydE91dHNpZGVUYXJnZXRHcm91cExlZnQoaW5kZXgsIHRhYnNXaW5kb3cpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lmluc2VydE91dHNpZGVUYXJnZXRHcm91cExlZnQoaW5kZXgsIHRhYnNXaW5kb3cpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBJbnNlcnRzIGEgbmV3IFRhYnNXaW5kb3cgaW50byB0aGUgRG9ja2luZ0xheW91dCBvciBjcmVhdGVzIGEgVGFic1dpbmRvdyBpbnN0YW5jZSBmcm9tIGFuIG9iamVjdCBwYXNzZWQgYXMgdGhlIHNlY29uZCBhcmd1bWVudC4gVGhlIHRhcmdldCBpdGVtIGFuZCBpdCdzIG5laWdoYm91ciBpdGVtcyBhcmUgcGxhY2VkIGluc2lkZSBhIG5ldyBzcGxpdHRlciBpdGVtIHRoYXQgYWN0cyBhcyB0aGUgbmV3IG5lZ2hib3VyIG9mIHRoZSBuZXdseSBhZGRlZCBpdGVtIHZpYSB0aGlzIG1ldGhvZC4gVGhlIG5ldyBpdGVtIGlzIGluc2VydGVkIGFmdGVyIHRoZSB0YXJnZXQgKCBhdCBwb3NpdGlvbiBSaWdodCkuIFxuXHQqIEBwYXJhbSB7bnVtYmVyIHwgSFRNTEVsZW1lbnQgfCBzdHJpbmd9IGluZGV4LiBUaGUgaW5kZXggdG8gaW5zZXJ0IGEgbmV3IFRhYnNXaW5kb3cgYXQuXG5cdCogQHBhcmFtIHthbnl9IHRhYnNXaW5kb3cuIEFuIGluc3RhbmNlIG9mIGEgVGFic1dpbmRvdyBvciBhbiBPYmplY3Qgd2l0aCB0aGUgZmllbGRzIFwibGFiZWxcIiwgXCJpdGVtc1wiIGFuZCBvdGhlciBhZGRpdGlvbmFsLlxuXHQqL1xuICAgIHB1YmxpYyBpbnNlcnRPdXRzaWRlVGFyZ2V0R3JvdXBSaWdodChpbmRleDogbnVtYmVyIHwgSFRNTEVsZW1lbnQgfCBzdHJpbmcsIHRhYnNXaW5kb3c6IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5pbnNlcnRPdXRzaWRlVGFyZ2V0R3JvdXBSaWdodChpbmRleCwgdGFic1dpbmRvdyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5zZXJ0T3V0c2lkZVRhcmdldEdyb3VwUmlnaHQoaW5kZXgsIHRhYnNXaW5kb3cpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBJbnNlcnRzIGEgbmV3IFRhYnNXaW5kb3cuIFRoZSB3aW5kb3cgaXMgaW4gZmxvYXRpbmcgbW9kZSBhbmQgaXMgdW5kb2NrZWQuIFxuXHQqIEBwYXJhbSB7YW55fSBpdGVtLiBBbiBpbnN0YW5jZSBvZiBhIFRhYnNXaW5kb3cgb3IgYW4gT2JqZWN0IHdpdGggdGhlIGZpZWxkcyBcImxhYmVsXCIsIFwiaXRlbXNcIiBhbmQgb3RoZXIgYWRkaXRpb25hbC5cblx0KiBAcGFyYW0ge251bWJlciB8IHN0cmluZ30gbGVmdD8uIFRoZSBsZWZ0IHBvc2l0aW9uIG9mIHRoZSBuZXcgd2luZG93LiBZb3UgY2FuIHVzZSBudW1iZXIsIHB4IG9yICUuIEZvciBleGFtcGxlOiAnMTBweCcuXG5cdCogQHBhcmFtIHtudW1iZXIgfCBzdHJpbmd9IHRvcD8uIFRoZSB0b3AgcG9zaXRpb24gb2YgdGhlIG5ldyB3aW5kb3cuIFlvdSBjYW4gdXNlIG51bWJlciwgcHggb3IgJS4gRm9yIGV4YW1wbGU6ICcxMHB4Jy5cblx0Ki9cbiAgICBwdWJsaWMgaW5zZXJ0RmxvYXRpbmdXaW5kb3coaXRlbTogYW55LCBsZWZ0PzogbnVtYmVyIHwgc3RyaW5nLCB0b3A/OiBudW1iZXIgfCBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5zZXJ0RmxvYXRpbmdXaW5kb3coaXRlbSwgbGVmdCwgdG9wKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5pbnNlcnRGbG9hdGluZ1dpbmRvdyhpdGVtLCBsZWZ0LCB0b3ApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGUgbWV0aG9kIHJldHVybnMgYW4gYXJyYXkgb2YgYWxsIGF1dG9oaWRkZW4gaXRlbXMuIFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBvcmllbnRhdGlvbj8uIERldGVybWluZXMgd2hpY2ggYXV0byBoaWRkZW4gaXRlbXMgdG8gcmV0dXJuICggdmVydGljYWwgb3IgaG9yaXpvbnRhbCApLiBJZiBub3Qgc2V0IHRoZSBtZXRob2Qgd2lsbCByZXR1cm4gYWxsIGF1dG9oaWRkZW4gaXRlbXMuIFBvc3NpYmxlIHZhbHVlczogJ3ZlcnRpY2FsJywgJ2hvcml6b250YWwnLlxuXHQqIEByZXR1cm5zIHthbnlbXX1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldEF1dG9IaWRlSXRlbXMob3JpZW50YXRpb24/KTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldEF1dG9IaWRlSXRlbXMob3JpZW50YXRpb24pO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhlIG1ldGhvZCByZXR1cm5zIHRoZSBpbmRleCBvZiBhIHRhcmdldCBpdGVtLiBcblx0KiBAcGFyYW0ge0hUTUxFbGVtZW50fSBub2RlLiBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgdGFyZ2V0IGl0ZW0uXG5cdCogQHJldHVybnMge251bWJlcn1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldEluZGV4KG5vZGUpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0SW5kZXgobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIGFuIGFycmF5IG9mIG9iamVjdHMgcmVwcmVzZW50aW5nIHRoZSBjdXJyZW50IHN0cnVjdHVyZSBvZiB0aGUgZWxlbWVudC4gRWFjaCBvYmplY3QgcmVwcmVzZW50cyBhIExheW91dCBpdGVtIHdpdGggaXQncyBzZXR0aW5ncyBhbmQgaGllcmFyY2h5LiBcblx0KiBAcGFyYW0ge2Jvb2xlYW59IG5vSW5zdGFuY2VzPy4gRGV0ZXJtaW5lcyBpZiB0aGUgcmV0dXJuZWQgYXJyYXkgd2lsbCBjb250YWluIEhUTUwgcmVmZXJlbmNlcyBvciBub3QuIFdoZW4gc2F2aW5nIHRvIGxvY2FsU3RvcmFnZSB0aGUgcmVzdWx0ZWQgYXJyYXkgc2hvdWxkIG5vdCBjb250YWluIGFueSBIVE1MRWxlbWVudCByZWZlcmVuY2VzLlxuXHQqIEByZXR1cm5zIHthbnlbXX1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldFN0YXRlKG5vSW5zdGFuY2VzPyk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRTdGF0ZShub0luc3RhbmNlcyk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRoZSBTcGxpdHRlciBwYXJlbnQgb2YgYSBMYXlvdXQgaXRlbSBcblx0KiBAcGFyYW0ge0hUTUxFbGVtZW50fSBpdGVtPy4gRG9ja2luZ0xheW91dCBpdGVtXG5cdCogQHJldHVybnMge0hUTUxFbGVtZW50fVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0SXRlbUdyb3VwRWxlbWVudChpdGVtPyk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRJdGVtR3JvdXBFbGVtZW50KGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmV0dXJucyBhIEpTT04gYXJyYXkgb2Ygb2JqZWN0cyByZXByZXNlbnRpbmcgdGhlIGN1cnJlbnQgc3RydWN0dXJlIG9mIHRoZSBlbGVtZW50LiBSZWFkeSB0byBiZSBwZXJzaXN0ZWQgdG8gTG9jYWxTdG9yYWdlLiBcblx0KiBAcmV0dXJucyB7YW55W119XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRKU09OU3RydWN0dXJlKCk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRKU09OU3RydWN0dXJlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBMb2FkcyBhIHByZXZpb3VzbHkgc2F2ZWQgc3RhdGUgb2YgdGhlIGVsZW1lbnQuIElmIG5vIHN0YXRlIGlzIHByb3ZpZGVkIGFzIGFuIGFyZ3VtZW50IHRoZSBtZXRob2Qgd2lsbCBkbyBhIGxvY2FsU3RvcmFnZSBsb29rdXAuIFxuXHQqIEBwYXJhbSB7YW55W119IHN0YXRlPy4gQW4gYXJyYXkgb2Ygb2JqZWN0cyB0aGF0IHJlcHJlc2VudHMgYSBjYWNoZWQgc3RhdGUgb2YgdGhlIERvY2tpbmdMYXlvdXQuIFRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgJ3NhdmVTdGF0ZScgbWV0aG9kLlxuXHQqL1xuICAgIHB1YmxpYyBsb2FkU3RhdGUoc3RhdGU/OiBhbnlbXSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5sb2FkU3RhdGUoc3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmxvYWRTdGF0ZShzdGF0ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJlbW92ZXMgYSBEb2NraW5nTGF5b3V0IGl0ZW0gKFRhYnNXaW5kb3cpIGZyb20gdGhlIGVsZW1lbnQuIFxuXHQqIEBwYXJhbSB7bnVtYmVyIHwgSFRNTEVsZW1lbnQgfCBzdHJpbmd9IGluZGV4LiBUaGUgaW5kZXggb2YgdGhlIFRhYnNXaW5kb3cgdG8gcmVtb3ZlIG9yIGEgcmVmZXJlbmNlIHRvIGl0LlxuXHQqL1xuICAgIHB1YmxpYyByZW1vdmVBdChpbmRleDogbnVtYmVyIHwgSFRNTEVsZW1lbnQgfCBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVtb3ZlQXQoaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlbW92ZUF0KGluZGV4KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVtb3ZlcyBhbGwgaXRlbXMgZnJvbSB0aGUgZWxlbWVudC4gXG5cdCovXG4gICAgcHVibGljIHJlbW92ZUFsbCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVtb3ZlQWxsKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVtb3ZlQWxsKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJlbW92ZXMgYSBcInNtYXJ0LXRhYnMtd2luZG93XCIgbm9kZSB0aGF0IGlzIGEgRG9ja2luZ0xheW91dCBpdGVtLiBcblx0KiBAcGFyYW0ge05vZGV9IG5vZGUuIFRoZSBcInNtYXJ0LXRhYnMtd2luZG93XCIgbm9kZSB0byByZW1vdmUuXG5cdCogQHJldHVybnMge05vZGV9XG4gICovXG5cdHB1YmxpYyBhc3luYyByZW1vdmVDaGlsZChub2RlKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2F2ZXMgdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIERvY2tpbmdMYXlvdXQgdG8gTG9jYWxTdG9yYWdlLiBUaGUgc3RhdGUgaW5jbHVkZXMgdGhlIGhpZXJhcmNoeSBhbmQgc2l6ZSBvZiB0aGUgaXRlbXMuIFxuXHQqL1xuICAgIHB1YmxpYyBzYXZlU3RhdGUoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNhdmVTdGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNhdmVTdGF0ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGUgbWV0aG9kIHVuZG9ja3MvcmVtb3ZlcyBhbiBpdGVtIGZyb20gdGhlIExheW91dCBhbmQgcGxhY2VzIGl0IGF0IHRoZSBzYW1lIHBvc2l0aW9uIGJ1dCBpdCdzIG5vIG1vcmUgcGFydCBvZiB0aGUgbGF5b3V0LiBUaGUgaXRlbSBiZWNvbWVzIGFuICdvdXRoZXInIGl0ZW0gdGhhdCBjYW4gYmUgcmVpbnNlcnRlZCBhdCBhbnkgdGltZS4gXG5cdCogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXIgfCBOb2RlfSBub2RlLiBBIFwic21hcnQtdGFicy13aW5kb3dcIiBpbnN0YW5jZSB0aGF0IGlzIHBhcnQgb2YgdGhlIERvY2tpbmdMYXlvdXQuXG5cdCovXG4gICAgcHVibGljIHVuZG9jayhub2RlOiBzdHJpbmcgfCBudW1iZXIgfCBOb2RlKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnVuZG9jayhub2RlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC51bmRvY2sobm9kZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFVwZGF0ZXMgYSBUYWJzV2luZG93IGFuZCBpdCdzIGNvbnRlbnRzLiBcblx0KiBAcGFyYW0ge251bWJlciB8IEhUTUxFbGVtZW50IHwgc3RyaW5nfSBpbmRleC4gVGhlIGluZGV4IG9mIHRoZSBUYWJzV2luZG93IHRvIHVwZGF0ZS5cblx0KiBAcGFyYW0ge2FueX0gc2V0dGluZ3MuIEFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIHRoZSBuZXcgc2V0dGluZ3MgZm9yIHRoZSBUYWJzV2luZG93IGl0ZW0uIFNldHRpbmdzIG9iamVjdCBpcyB0aGUgc2FtZSBhcyBkZWZpbmluZyBhIG5ldyBUYWJzV2luZG93IHdpdGggdGhlIGV4Y2VwdGlvbiBvZiAnaXRlbXMnIGFycmF5IHdoZXJlIHRoZSBpdGVtcyBhcmUgZGVmaW5lZC4gSW4gb3JkZXIgdG8gY2hhbmdlIHRoZSBsYWJlbCBvciBjb250ZW50IG9mIGEgVGFiIGl0ZW0gdGhlIHVzZXIgaGFzIHRvIHNwZWNpZnkgdGhlIGluZGV4IG9mIHRoZSB0YXJnZXQgdGFiIGl0ZW0uXG5cdCovXG4gICAgcHVibGljIHVwZGF0ZShpbmRleDogbnVtYmVyIHwgSFRNTEVsZW1lbnQgfCBzdHJpbmcsIHNldHRpbmdzOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQudXBkYXRlKGluZGV4LCBzZXR0aW5ncyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQudXBkYXRlKGluZGV4LCBzZXR0aW5ncyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cdGdldCBpc1JlbmRlcmVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCA6IGZhbHNlO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXG4gICAgICB0aGF0Lm9uQ3JlYXRlLmVtaXQodGhhdC5uYXRpdmVFbGVtZW50KTtcblxuXHRcdFNtYXJ0LlJlbmRlcigpO1xuXG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NtYXJ0LWFuZ3VsYXInKTtcblxuXHRcdHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4geyB0aGF0Lm9uUmVhZHkuZW1pdCh0aGF0Lm5hdGl2ZUVsZW1lbnQpOyB9KTtcblx0XHR0aGlzLmxpc3RlbigpO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy51bmxpc3RlbigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXHRcdGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQgJiYgdGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcblx0XHRcdGZvciAoY29uc3QgcHJvcE5hbWUgaW4gY2hhbmdlcykge1xuXHRcdFx0XHRpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcblx0XHRcdFx0XHR0aGlzLm5hdGl2ZUVsZW1lbnRbcHJvcE5hbWVdID0gY2hhbmdlc1twcm9wTmFtZV0uY3VycmVudFZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBZGQgZXZlbnQgbGlzdGVuZXJzLiAqL1xuXHRwcml2YXRlIGxpc3RlbigpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjaGFuZ2VIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25DaGFuZ2UuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhhdC5ldmVudEhhbmRsZXJzWydjaGFuZ2VIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjbG9zZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNsb3NlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgdGhhdC5ldmVudEhhbmRsZXJzWydjbG9zZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2Nsb3NpbmdIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25DbG9zaW5nLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NpbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2Nsb3NpbmdIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydzdGF0ZUNoYW5nZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblN0YXRlQ2hhbmdlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N0YXRlQ2hhbmdlJywgdGhhdC5ldmVudEhhbmRsZXJzWydzdGF0ZUNoYW5nZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jlc2l6ZVN0YXJ0SGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uUmVzaXplU3RhcnQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplU3RhcnQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jlc2l6ZVN0YXJ0SGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1sncmVzaXplRW5kSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uUmVzaXplRW5kLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZUVuZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1sncmVzaXplRW5kSGFuZGxlciddKTtcblxuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZW1vdmUgZXZlbnQgbGlzdGVuZXJzLiAqL1xuXHRwcml2YXRlIHVubGlzdGVuKCk6IHZvaWQge1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjaGFuZ2VIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5nZUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY2xvc2VIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbG9zZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snY2xvc2VIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2Nsb3NpbmdIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbG9zaW5nJywgdGhhdC5ldmVudEhhbmRsZXJzWydjbG9zaW5nSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydzdGF0ZUNoYW5nZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3N0YXRlQ2hhbmdlJywgdGhhdC5ldmVudEhhbmRsZXJzWydzdGF0ZUNoYW5nZUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1sncmVzaXplU3RhcnRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemVTdGFydCcsIHRoYXQuZXZlbnRIYW5kbGVyc1sncmVzaXplU3RhcnRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jlc2l6ZUVuZEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZUVuZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1sncmVzaXplRW5kSGFuZGxlciddKTtcblx0XHR9XG5cblx0fVxufVxuIl19