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
        selector: 'smart-docking-layout, [smart-docking-layout]'
    })
], DockingLayoutComponent);
export { DockingLayoutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQuZG9ja2luZ2xheW91dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NtYXJ0LXdlYmNvbXBvbmVudHMtYW5ndWxhci9kb2NraW5nbGF5b3V0LyIsInNvdXJjZXMiOlsic21hcnQuZG9ja2luZ2xheW91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUosT0FBTyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVyRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFReEMsSUFBYSxzQkFBc0IsR0FBbkMsTUFBYSxzQkFBdUIsU0FBUSxXQUFXO0lBQ3RELFlBQVksR0FBOEI7UUFDekMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBSUosa0JBQWEsR0FBVSxFQUFFLENBQUM7UUFtTmxDOzhDQUNzQztRQUM1QixhQUFRLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFbkU7OENBQ3NDO1FBQzVCLFlBQU8sR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVsRTs4Q0FDc0M7UUFDNUIsY0FBUyxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXBFOzhDQUNzQztRQUM1QixrQkFBYSxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXhFOzhDQUNzQztRQUM1QixrQkFBYSxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXhFOzhDQUNzQztRQUM1QixnQkFBVyxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBNU9yRSxJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQyxhQUE4QixDQUFDO0lBQ3pELENBQUM7SUFLRDs7T0FFRztJ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R1A7QUFPRDtJQURDLEtBQUssRUFBRTtzREFHUDtBQU9EO0lBREMsS0FBSyxFQUFFO3VEQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7dURBR1A7QUFPRDtJQURDLEtBQUssRUFBRTs4REFHUDtBQU9EO0lBREMsS0FBSyxFQUFFO21EQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7eURBR1A7QUFPRDtJQURDLEtBQUssRUFBRTtvREFHUDtBQU9EO0lBREMsS0FBSyxFQUFFO3dEQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7b0RBR1A7QUFPRDtJQURDLEtBQUssRUFBRTtvRUFHUDtBQU9EO0lBREMsS0FBSyxFQUFFO3NEQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7c0RBR1A7QUFPRDtJQURDLEtBQUssRUFBRTt5REFHUDtBQU9EO0lBREMsS0FBSyxFQUFFO3dEQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7c0RBR1A7QUFPRDtJQURDLEtBQUssRUFBRTttREFHUDtBQU9EO0lBREMsS0FBSyxFQUFFOzJEQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7eURBR1A7QUFPUztJQUFULE1BQU0sRUFBRTt3REFBMEQ7QUFJekQ7SUFBVCxNQUFNLEVBQUU7dURBQXlEO0FBSXhEO0lBQVQsTUFBTSxFQUFFO3lEQUEyRDtBQUkxRDtJQUFULE1BQU0sRUFBRTs2REFBK0Q7QUFJOUQ7SUFBVCxNQUFNLEVBQUU7NkRBQStEO0FBSTlEO0lBQVQsTUFBTSxFQUFFOzJEQUE2RDtBQS9PMUQsc0JBQXNCO0lBSmxDLFNBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSw4Q0FBOEM7S0FDeEQsQ0FBQztHQUVXLHNCQUFzQixDQWkwQmxDO1NBajBCWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb2NraW5nTGF5b3V0IH0gZnJvbSAnLi8uLi9pbmRleCc7XG5pbXBvcnQgeyBBbmltYXRpb24sIERvY2tpbmdMYXlvdXRTbmFwTW9kZSwgRWxlbWVudFJlbmRlck1vZGV9IGZyb20gJy4vLi4vaW5kZXgnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBEaXJlY3RpdmUsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBTaW1wbGVDaGFuZ2VzLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFzZUVsZW1lbnQsIFNtYXJ0IH0gZnJvbSAnLi9zbWFydC5lbGVtZW50JztcbmV4cG9ydCB7IEFuaW1hdGlvbiwgRG9ja2luZ0xheW91dFNuYXBNb2RlLCBFbGVtZW50UmVuZGVyTW9kZX0gZnJvbSAnLi8uLi9pbmRleCc7XG5leHBvcnQgeyBTbWFydCB9IGZyb20gJy4vc21hcnQuZWxlbWVudCc7XG5leHBvcnQgeyBEb2NraW5nTGF5b3V0IH0gZnJvbSAnLi8uLi9pbmRleCc7XG5cblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnc21hcnQtZG9ja2luZy1sYXlvdXQsIFtzbWFydC1kb2NraW5nLWxheW91dF0nXG59KVxuXG5leHBvcnQgY2xhc3MgRG9ja2luZ0xheW91dENvbXBvbmVudCBleHRlbmRzIEJhc2VFbGVtZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG5cdGNvbnN0cnVjdG9yKHJlZjogRWxlbWVudFJlZjxEb2NraW5nTGF5b3V0Pikge1xuXHRcdHN1cGVyKHJlZik7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID0gcmVmLm5hdGl2ZUVsZW1lbnQgYXMgRG9ja2luZ0xheW91dDtcblx0fVxuXG5cdHByaXZhdGUgZXZlbnRIYW5kbGVyczogYW55W10gPSBbXTtcblxuXHRwdWJsaWMgbmF0aXZlRWxlbWVudDogRG9ja2luZ0xheW91dDtcblx0LyoqIEBkZXNjcmlwdGlvbiBDcmVhdGVzIHRoZSBjb21wb25lbnQgb24gZGVtYW5kLlxuXHQgKiBAcGFyYW0gcHJvcGVydGllcyBBbiBvcHRpb25hbCBvYmplY3Qgb2YgcHJvcGVydGllcywgd2hpY2ggd2lsbCBiZSBhZGRlZCB0byB0aGUgdGVtcGxhdGUgYmluZGVkIG9uZXMuXG5cdCAqL1xuXHRwdWJsaWMgY3JlYXRlQ29tcG9uZW50KHByb3BlcnRpZXMgPSB7fSk6IGFueSB7XG4gICAgXHR0aGlzLm5hdGl2ZUVsZW1lbnQgPSA8RG9ja2luZ0xheW91dD5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzbWFydC1kb2NraW5nLWxheW91dCcpO1xuXHRcdGZvciAobGV0IHByb3BlcnR5TmFtZSBpbiBwcm9wZXJ0aWVzKSB7IFxuIFx0XHRcdHRoaXMubmF0aXZlRWxlbWVudFtwcm9wZXJ0eU5hbWVdID0gcHJvcGVydGllc1twcm9wZXJ0eU5hbWVdO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50O1xuXHR9XG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSBhbmltYXRpb24gbW9kZS4gQW5pbWF0aW9uIGlzIGRpc2FibGVkIHdoZW4gdGhlIHByb3BlcnR5IGlzIHNldCB0byAnbm9uZScgKi9cblx0QElucHV0KClcblx0Z2V0IGFuaW1hdGlvbigpOiBBbmltYXRpb24ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYW5pbWF0aW9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBhbmltYXRpb24odmFsdWU6IEFuaW1hdGlvbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hbmltYXRpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQSBnZXR0ZXIgdGhhdCByZXR1cm5zIGFuIGFycmF5IG9mIGFsbCBEb2NraW5nTGF5b3V0IGl0ZW1zIHRoYXQgYXJlIGF1dG8gaGlkZGVuIGluc2lkZSB0aGUgZWxlbWVudC4gKi9cblx0QElucHV0KClcblx0Z2V0IGF1dG9IaWRlSXRlbXMoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9IaWRlSXRlbXMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGF1dG9IaWRlSXRlbXModmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hdXRvSGlkZUl0ZW1zID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEVuYWJsZS9EaXNhYmxlIHRoZSBhdXRvbWF0aWMgc3RhdGUgbG9hZGluZy4gVGhlcmUgbXVzdCBiZSBhIHByZXZpb3VzbHkgc2F2ZWQgc3RhdGUgb2YgdGhlIExheW91dCBpbiBvcmRlciB0byBsb2FkIGl0LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgYXV0b0xvYWRTdGF0ZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9Mb2FkU3RhdGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGF1dG9Mb2FkU3RhdGUodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYXV0b0xvYWRTdGF0ZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFbmFibGUvRGlzYWJsZSB0aGUgYXV0b21hdGljIHN0YXRlIHNhdmluZy4gTm90ZTogSW4gb3JkZXIgdG8gc2F2ZSB0aGUgc3RhdGUgb2YgdGhlIGVsZW1lbnQgaXQgbXVzdCBoYXZlIGFuIGlkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgYXV0b1NhdmVTdGF0ZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9TYXZlU3RhdGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGF1dG9TYXZlU3RhdGUodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYXV0b1NhdmVTdGF0ZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFbmFibGVzIG9yIGRpc2FibGVzIHRoZSBlbGVtZW50LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlZCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZWQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSWYgc2V0IHRvIGZhbHNlIGl0IHdpbGwgZGlzYWJsZSB0aGUgZHJhZ2dpbmcgb2YgRG9ja2luZ0xheW91dCBpdGVtcy4gSWYgc2V0IGl0ZW1zIGNhbiBvbmx5IGJlIHJlcG9zaXRpb25lZCB1c2luZyB0aGUgQVBJIG1ldGhvZHMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkcmFnZ2FibGUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kcmFnZ2FibGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRyYWdnYWJsZSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kcmFnZ2FibGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSWYgc2V0IHRvIGZhbHNlIGl0IHdpbGwgZGlzYWJsZSBpdGVtIGZsb2F0aW5nLiBUaGlzIG1lYW5zIHRoYXQgaWYgYSBXaW5kb3cgaXMgZmxvYXRlZCBhcyBhIHJlc3VsdCBvZiBkcmFnZ2luZyBpdCB3aWxsIGJlIHJldHVybmVkIGJhY2sgb3QgaXQncyBvcmlnaW5hbCBwb3NpdGlvbiBpbnN0ZWFkIG9mIGJlaW5nIGZsb2F0ZWQgb3V0c2lkZSB0aGUgRG9ja2luZ0xheW91dC4gQWxyZWFkeSBmbG9hdGVkIExheW91dFBhbmVsIGl0ZW1zIHdpbGwgbm90IGJlIGFmZmVjdGVkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZmxvYXRhYmxlKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZmxvYXRhYmxlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBmbG9hdGFibGUodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZmxvYXRhYmxlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEhpZGVzIGFsbCBzcGxpdHRlciBiYXJzIGluc2lkZSB0aGUgZWxlbWVudC4gKi9cblx0QElucHV0KClcblx0Z2V0IGhpZGVTcGxpdHRlckJhcnMoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oaWRlU3BsaXR0ZXJCYXJzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBoaWRlU3BsaXR0ZXJCYXJzKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmhpZGVTcGxpdHRlckJhcnMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQSBnZXR0ZXIgdGhhdCByZXR1cm5zIGFuIGFycmF5IG9mIGFsbCBEb2NraW5nTGF5b3V0IGl0ZW1zIHRoYXQgYXJlIGRvY2tlZCBpbnNpZGUgdGhlIGVsZW1lbnQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBpdGVtcygpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaXRlbXMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGl0ZW1zKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaXRlbXMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQSBnZXR0ZXIgdGhhdCByZXR1cm5zIGFuIGFycmF5IG9mIGFsbCBEb2NraW5nTGF5b3V0IGl0ZW1zIHRoYXQgaGF2ZSBiZWVuIGNsb3NlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IGNsb3NlZEl0ZW1zKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jbG9zZWRJdGVtcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgY2xvc2VkSXRlbXModmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jbG9zZWRJdGVtcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBzdHJ1Y3R1cmUgb2YgdGhlIGVsZW1lbnQuIFRoaXMgcHJvcGVydHkgcmVwcmVzZW50cyBhbiBhcnJheSBvZiBvYmplY3RzIHRoYXQgZGVmaW5lIHRoZSBoaWVyYXJjaHkgb2YgdGhlIGl0ZW1zIGluc2lkZSB0aGUgZWxlbWVudCBhbmQgdGhlaXIgc3BlY2lmaWMgc2V0dGluZ3MuIEVhY2ggb2JqZWN0IG11c3QgaGF2ZSBhIHR5cGUgYXR0cmlidXRlIHRoYXQgZGVmaW5lcyBpdCdzIGJlaGF2aW9yLiAgVGhyZWUgdHlwZXMgb2Ygb2JqZWN0cyBhcmUgYWxsb3dlZDogICBMYXlvdXRHcm91cCAtIFJlcHJlc2VudHMgYSBncm91cCBvZiBpdGVtcyAoU3BsaXR0ZXIpLiBVc2VkIHdoZW4gdGhlIHVzZXIgd2FudHMgbW9yZSB0aGFuIG9uZSBEb2NraW5nTGF5b3V0IGl0ZW0gaW4gYSBzaW5nbGUgY29udGFpbmVyLiAgUHJvcGVydGllczogb3JpZW50YXRpb24gLSBBIHN0cmluZyB2YWx1ZSBpbmRpY2F0aW5nIHRoZSBvcmllbnRhdGlvbiBvZiB0aGUgU3BsaXR0ZXIgZ3JvdXAuIFBvc3NpYmxlIHZhbHVlczogJ2hvcml6b250YWwnLCAndmVydGljYWwnLiBzaXplIC0gQSBzdHJpbmcgfCBudW1iZXIgdmFsdWUgaW5kaWNhdGluZyB0aGUgc2l6ZSBvZiB0aGUgU3BsaXR0ZXIgZ3JvdXAuIGl0ZW1zIC0gQW4gYXJyYXkgb2YgTGF5b3V0UGFuZWwgb2JqZWN0IGRlZmluaXRpb25zLiByZXNpemVNb2RlIC0gQSBzdHJpbmcgaW5kaWNhdGluZyB0aGUgcmVzaXplIG1vZGUuIFBvc3NpYmxlIHZhbHVlczogJ25vbmUnLCAnYWRqYWNlbnQnLCAnZW5kJywgJ3Byb3BvcnRpb25hbCcuIHJlc2l6ZVN0ZXAgLSBBIG51bW1lcmljIHZhbHVlIHRoYXQgZGV0ZXJtaW5lcyB0aGUgc3RlcCBvZiByZXNpemluZy4gbGl2ZVJlc2l6ZSAtIERldGVybWluZXMgaWYgc3BsaXR0ZXIgcmVzaXppbmcgaGFwcGVucyB3aGlsZSBkcmFnZ2luZyBvciBub3QuICAgTGF5b3V0UGFuZWwgLSBSZXByZXNlbnRzIGEgRG9ja2luZ0xheW91dCBpdGVtIChUYWJzV2luZG93KS4gTGF5b3V0UGFuZWxzIGNhbiBoYXZlIG9uZSBvciBtYW55IGl0ZW1zIChUYWJJdGVtKS4gIFByb3BlcnRpZXM6ICAgaWQgLSB0aGUgSUQgb2YgdGhlIExheW91dFBhbmVsLiBhdXRvSGlkZSAtIGEgYm9vbGVhbiBwcm9wZXJ0eSB0aGF0IGRldGVybWluZXMgaWYgdGhlIExheW91dFBhbmVsIGlzIGF1dG9IaWRkZW4uIGF1dG9IaWRlUG9zaXRpb24gLSBkZXRlcm1pbmVzIHRoZSBhdXRvSGlkZSBwb3NpdGlvbiBvZiB0aGUgaXRlbSBpZiAnYXV0b0hpZGUnIHByb3BlcnR5IGlzIHNldC4gUG9zc2libGUgdmFsdWVzOiAndG9wJywgJ2JvdHRvbScsICdsZWZ0JywgJ3JpZ2h0Jy4gZHJvcFBvc2l0aW9uIC0gRGV0ZXJtaW5lcyB0aGUgcG9zc2libGUgcG9zaXRpb25zIGZvciB0aGUgaXRlbSBhdCB3aGljaCBhIG5ldyBpdGVtIGNhbiBiZSBkcm9wcGVkIGFzIGEgcmVzdWx0IG9mIGRyYWdnaW5nLiBQb3NzaWJsZSB2YWx1ZXM6ICd0b3AnLCAnYm90dG9tJywgJ2xlZnQnLCAncmlnaHQnLCAnY2VudGVyJywgJ2hlYWRlcicsICdsYXlvdXQtdG9wJywgJ2xheW91dC1ib3R0b20nLCAnbGF5b3V0LWxlZnQnLCAnbGF5b3V0LXJpZ2h0Jy4gUG9zaXRpb25zIHdpdGggdGhlICdsYXlvdXQnIHByZWZpeCByZWZsZWN0IG9uIExheW91dFBhbmVsSXRlbXMgdGhhdCBhcmUgY2hpbGRyZW4gb2YgdGhlIExheW91dFBhbmVsLiBsYWJlbCAtIHRoZSBMYWJlbCBvZiB0aGUgTGF5b3V0UGFuZWwgd2luZG93LiB0YWJQb3NpdGlvbiAtIERldGVybWluZXMgdGhlIHBvc2l0aW9uIG9mIHRoZSBUYWIgbGFiZWxzIGluc2lkZSB0aGUgTGF5b3V0UGFuZWwuIGxheW91dCAtIGRldGVybWluZXMgdGhlIERvY2tpbmdMYXlvdXQgb3duZXIgb2YgdGhlIExheW91dFBhbmVsLiBBY2NlcHRzIGEgc3RyaW5nIGluZGljYXRpbmcgdGhlIElEIG9mIGEgRG9ja2luZ0xheW91dCBvbiB0aGUgcGFnZSBvciBhIGRpcmVjdCByZWZlcmVuY2UgdG8gaXQuIGhlYWRlckJ1dHRvbnMgLSBhbiBBcnJheSBvZiBzdHJpbmdzIHRoYXQgZGVmaW5lIHRoZSBidXR0b25zIGluIHRoZSBoZWFkZXIgc2VjdGlvbiBvZiB0aGUgRG9ja2luZ0xheW91dCBpdGVtLiB0YWJDbG9zZUJ1dHRvbnMgLSBhIGJvb2xlYW4gcHJvcGVydHkgdGhhdCBFbmFibGVzIG9yIGRpc2FibGVzIHRoZSBjbG9zZSBidXR0b25zIGluc2lkZSBlYWNoIFRhYiBpdGVtIGxhYmVsIGluc2lkZSB0aGUgRG9ja2luZ0xheW91dCBpdGVtLiB0YWJPdmVyZmxvdyAtIHNhbWUgYXMgJ292ZXJmbG93JyBwcm9wZXJ0eSBvZiBqcXhUYWJzLiBJdCBkZWZpbmVzIHRoZSBvdmVyZmxvdyBtb2RlIG9mIHRoZSBsYWJlbHMgb2YgdGhlIFRhYiBpdGVtcyBpbnNpZGUgYSBEb2NraW5nTGF5b3V0IGl0ZW0uc2VsZWN0aW9uTW9kZSAtIHRoZSBzYW1lIGFzIGpxeFRhYnMgc2VsZWN0aW9uIG1vZGVzLiBBcHBsaWVzIHRvIFRhYiBpdGVtcyBpbnNpZGUgYSBEb2NraW5nTGF5b3V0IGl0ZW0uIHRhYlJlc2l6ZSAtIHRoZSBzYW1lIGFzICdyZXNpemUnIHByb3BlcnR5IG9mIGpxeFRhYnMuIEFsbG93cyByZXNpemluZyB0aGUgVGFiIGxhYmVscyBpbnNpZGUgdGhlIERvY2tpbmdMYXlvdXQgaXRlbS4gbG9ja2VkIC0gTG9ja3MgdGhlIHNpemUgb2YgdGhlIGl0ZW0gYW5kIGRvZXMgbm90IGFsbG93IHJlc2l6aW5nLiBtYXggLSBzZXRzIHRoZSBtYXhpbXVtIHNpemUgb2YgdGhlIGl0ZW0uIG1pbiAtIHNldHMgdGhlIG1pbmltdW0gc2l6ZSBvZiB0aGUgaXRlbSBzaXplIC0gc2V0cyB0aGUgc2l6ZSBvZiB0aGUgaXRlbS4gaXRlbXMgLSBhbiBhcnJheSBvZiBvYmplY3RzLiBFYWNoIG9iamVjdCBkZWZpbmVzIHRoZSBzdHJ1Y3R1cmUgb2YgYSBMYXlvdXRQYW5lbEl0ZW0uICAgTGF5b3V0UGFuZWxJdGVtIC0gUmVwcmVzZW50cyBhIExheW91dFBhbmVsIGl0ZW0gKFRhYkl0ZW0pLiBQcm9wZXJ0aWVzOiAgaWQgLSB0aGUgSUQgb2YgdGhlIFRhYiBpdGVtLiBsYWJlbCAtIGEgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgbGFiZWwgb2YgdGhlIFRhYiBpdGVtLiBjb250ZW50IC0gcmVwcmVzZW50cyB0aGUgY29udGVudCBvZiB0aGUgVGFiIGl0ZW0uIENhbiBiZSBhbnl0aGluZy4gc2VsZWN0ZWQgLSBkZXRlcm1pbmVzIGlmIHRoZSBpdGVtIGlzIHNlbGVjdGVkLiBCeSBkZWZhdWx0IHRoZSBmaXJzdCBhZGRlZCBpdGVtIHRvIHRoZSBMYXlvdXRQYW5lbCBpcyBhdXRvbWF0aWNhbGx5IHNlbGVjdGVkLiBkcmFnZ2FibGUgLSBhIGJvb2xlYW4gcHJvcGVydHkgdGhhdCBhbGxvd3MgdG8gZGlzYWJsZSB0aGUgZHJhZ2dpbmcgb2YgdGhlIFRhYiBpdGVtLiAgICAgKi9cblx0QElucHV0KClcblx0Z2V0IGxheW91dCgpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubGF5b3V0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBsYXlvdXQodmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sYXlvdXQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gV2hlbiBlbmFibGVkIHRoZSByZXNpemluZyBvcGVyYXRpb24gaGFwcGVucyBsaXZlLiBCeSBkZWZhdWx0IHRoaXMgZmVhdHVyZSBpcyBub3QgZW5hYmxlZCBhbmQgdGhlIHVzZXIgc2VlcyBhIGhpZ2h0bGlnaHRlZCBiYXIgd2hpbGUgZHJhZ2dpbmcgaW5zdGVhZCBvZiB0aGUgYWN0dWFsIHNwbGl0dGVyIGJhci4gKi9cblx0QElucHV0KClcblx0Z2V0IGxpdmVSZXNpemUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5saXZlUmVzaXplIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBsaXZlUmVzaXplKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxpdmVSZXNpemUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSBsYW5ndWFnZS4gVXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZSBwcm9wZXJ0eSBtZXNzYWdlcy4gICovXG5cdEBJbnB1dCgpXG5cdGdldCBsb2NhbGUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxvY2FsZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbG9jYWxlKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubG9jYWxlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIENhbGxiYWNrLCByZWxhdGVkIHRvIGxvY2FsaXphdGlvbiBtb2R1bGUuICAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbG9jYWxpemVGb3JtYXRGdW5jdGlvbigpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubG9jYWxpemVGb3JtYXRGdW5jdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbG9jYWxpemVGb3JtYXRGdW5jdGlvbih2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxvY2FsaXplRm9ybWF0RnVuY3Rpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIGFuIG9iamVjdCBzcGVjaWZ5aW5nIHN0cmluZ3MgdXNlZCBpbiB0aGUgd2lkZ2V0IHRoYXQgY2FuIGJlIGxvY2FsaXplZC4gVXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZSBwcm9wZXJ0eSBsb2NhbGUuICAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbWVzc2FnZXMoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm1lc3NhZ2VzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBtZXNzYWdlcyh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm1lc3NhZ2VzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIElmIHRoZSBlbGVtZW50IGlzIHJlYWRvbmx5LCB1c2VycyBjYW5ub3QgaW50ZXJhY3Qgd2l0aCBpdC4gKi9cblx0QElucHV0KClcblx0Z2V0IHJlYWRvbmx5KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmVhZG9ubHkgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHJlYWRvbmx5KHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlYWRvbmx5ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgdmFsdWUgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBlbGVtZW50IGlzIGFsaWduZWQgdG8gc3VwcG9ydCBsb2NhbGVzIHVzaW5nIHJpZ2h0LXRvLWxlZnQgZm9udHMuICovXG5cdEBJbnB1dCgpXG5cdGdldCByaWdodFRvTGVmdCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJpZ2h0VG9MZWZ0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCByaWdodFRvTGVmdCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yaWdodFRvTGVmdCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSByZXNpemUgc3RlcCBkdXJpbmcgcmVpc2l6aW5nICovXG5cdEBJbnB1dCgpXG5cdGdldCByZXNpemVTdGVwKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZXNpemVTdGVwIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCByZXNpemVTdGVwKHZhbHVlOiBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmVzaXplU3RlcCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBzbmFwIG1vZGUuIFR3byBtb2RlcyBhcmUgYXZhaWxhYmxlOiAgIHNpbXBsZSAtIGFsbG93cyBkcmFnZ2luZyBvZiBhIHNpbmdsZSB0YWIgaXRlbSBpbnNpZGUgb3Igb3V0c2lkZSB0aGUgbGF5b3V0LiBBIHNlbWktdHJhbnNwYXJlbnQgaGlnaGxpZ2h0ZXIgaXMgdXNlZCB0byBpbmRpY2F0ZSB0aGUgcG9zc2libGUgbG9jYXRpb25zIHdoZXJlIHRoZSBkcmFnZ2VkIGl0ZW0gY2FuIGJlIGRyb3BwZWQuIFRoZSB1c2VyIGhhcyB0byBkcm9wIHRoZSBkcmFnZ2VkIGl0ZW0gaW5zaWRlIG9uZSBvZiB0aGUgcG9zc2libGUgZHJvcCB6b25lcyBpbmRpY2F0ZWQgYnkgdGhlIGhpZ2hsaWdodGVyLiBhZHZhbmNlZCAtIGFsbG93cyBkcmFnZ2luZyBvZiBhIHdob2xlIFRhYnNXaW5kb3cgd2l0aCBpdGVtcyBvciBhIHNpbmdsZSB0YWIgaXRlbS4gVXNlcyBhIFZpc3VhbCBTdHVkaW8gc3R5bGUgZmVlZGJhY2sgdGhhdCBpbmRpY2F0ZXMgdGhlIHBvc3NpYmxlIGRyb3AgbG9jYXRpb25zLiBUaGUgdXNlciBoYXMgdG8gZHJvcCB0aGUgdGFyZ2V0IG92ZXIgb25lIG9mIHRoZSBpY29ucyBpbnNpZGUgdGhlIGZlZWRiYWNrLiAgIFRoZSBmZWVkYmFjay9oaWdobGlnaHRlciBpcyBkaXNwbGF5ZWQgd2hlbiB0aGUgZHJhZ2dpbmcgb2YgYW4gaXRlbSBiZWdpbnMuICAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc25hcE1vZGUoKTogRG9ja2luZ0xheW91dFNuYXBNb2RlIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNuYXBNb2RlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzbmFwTW9kZSh2YWx1ZTogRG9ja2luZ0xheW91dFNuYXBNb2RlKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNuYXBNb2RlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIHRoZW1lLiBUaGVtZSBkZWZpbmVzIHRoZSBsb29rIG9mIHRoZSBlbGVtZW50ICovXG5cdEBJbnB1dCgpXG5cdGdldCB0aGVtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGhlbWUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRoZW1lKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGhlbWUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQSBnZXR0ZXIgdGhhdCByZXR1cm5zIGFuIGFycmF5IG9mIGFsbCBEb2NraW5nTGF5b3V0IGl0ZW1zIHRoYXQgaGF2ZSBiZWVuIHVuZG9ja2VkLiBVbmRvY2tlZCBpdGVtcyBhcmUgbm8gbW9yZSBwYXJ0IG9mIHRoZSBMYXlvdXQncyBpbnRlcmFsIHN0cnVjdHVyZSBidXQgY2FuIGJlIGluc2VydGVkIGJ5IGRyYWdnaW5nIHRoZW0gaW4uICovXG5cdEBJbnB1dCgpXG5cdGdldCB1bmRvY2tlZEl0ZW1zKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC51bmRvY2tlZEl0ZW1zIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB1bmRvY2tlZEl0ZW1zKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudW5kb2NrZWRJdGVtcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBJZiBpcyBzZXQgdG8gdHJ1ZSwgdGhlIGVsZW1lbnQgY2Fubm90IGJlIGZvY3VzZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCB1bmZvY3VzYWJsZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnVuZm9jdXNhYmxlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB1bmZvY3VzYWJsZSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC51bmZvY3VzYWJsZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSB0YWIgc2VsZWN0aW9uIGlzIGNoYW5nZWQuIE5vdGU6IENoYW5nZSBldmVudCBtYXkgYmUgdGhyb3duIGJ5IG90aGVyIEpRWCBDdXN0b20gRWxlbWVudHMgbmVzdGVkIGluc2lkZSB0aGUgVGFiIGl0ZW1zLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Ki9cblx0QE91dHB1dCgpIG9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIFRhYiBpdGVtIG9yIGEgd2hvbGUgVGFicyBXaW5kb3cgaXRlbSAoIERvY2tpbmdMYXlvdXQgaXRlbSApIGlzIGNsb3NlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvbkNsb3NlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIFRhYiBpdGVtL1RhYnMgV2luZG93IGlzIGFib3V0IHRvIGJlIGNsb3NlZC4gVGhlIGNsb3Npbmcgb3BlcmF0aW9uIGNhbiBiZSBjYW5jZWxlZCBieSBjYWxsaW5nIGV2ZW50LnByZXZlbnREZWZhdWx0KCkgaW4gdGhlIGV2ZW50IGhhbmRsZXIgZnVuY3Rpb24uXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHQqL1xuXHRAT3V0cHV0KCkgb25DbG9zaW5nOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhbiBpdGVtJ3MgcG9zaXRpb24gaW5zaWRlIHRoZSBMYXlvdXQgb3IgaXQncyBzaXplIGhhcyBiZWVuIGNoYW5nZWQuIEluZGljYXRlcyB0aGF0IGEgc3RhdGUgY2hhbmdlIGhhcyBvY2N1cmVkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Ki9cblx0QE91dHB1dCgpIG9uU3RhdGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGl0ZW0gcmVzaXppbmcgYmVnaW5zLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Ki9cblx0QE91dHB1dCgpIG9uUmVzaXplU3RhcnQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGl0ZW0gcmVzaXppbmcgZmluaXNoZXMuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHQqL1xuXHRAT3V0cHV0KCkgb25SZXNpemVFbmQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBNYWtlcyBhIFwic21hcnQtdGFicy13aW5kb3dcIiBub2RlLCB0aGF0IGlzIGEgY2hpbGQgb2YgdGhlIExheW91dCwgYXV0byBoaWRkZW4gYnkgcGxhY2luZyBpdCBhdCB0aGUgQm90dG9tIHBvc2l0aW9uIGluc2lkZSB0aGUgZWxlbWVudC4gVGhpcyBtZWFucyB0aGF0IHRoZSBpdGVtIHdpbGwgYmUgcG9zaXRpb25lZCBuZWFyIHRoZSBib3R0b20gc2lkZSBvZiB0aGUgbGF5b3V0IGFuZCBpdCdzIGNvbnRlbnQgd2lsbCBiZSBoaWRkZW4gdW50aWwgdGhlIHVzZXIgc2VsZWN0cyBvbmUgb2YgaXQncyBsYWJlbHMuIFxuXHQqIEBwYXJhbSB7SFRNTEVsZW1lbnQgfCBudW1iZXIgfCBzdHJpbmd9IG5vZGUuIFRoZSBcInNtYXJ0LXRhYnMtd2luZG93XCIgb3IgXCJzbWFydC10YWItaXRlbVwiIG5vZGUgdG8gYXBwZW5kXG5cdCovXG4gICAgcHVibGljIGF1dG9IaWRlQm90dG9tKG5vZGU6IEhUTUxFbGVtZW50IHwgbnVtYmVyIHwgc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9IaWRlQm90dG9tKG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9IaWRlQm90dG9tKG5vZGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBNYWtlcyBhIFwic21hcnQtdGFicy13aW5kb3dcIiBub2RlLCB0aGF0IGlzIGEgY2hpbGQgb2YgdGhlIExheW91dCwgYXV0byBoaWRkZW4gYnkgcGxhY2luZyBpdCBhdCB0aGUgTGVmdCBwb3NpdGlvbiBpbnNpZGUgdGhlIGxheW91dC4gVGhpcyBtZWFucyB0aGF0IHRoZSBpdGVtIHdpbGwgYmUgcG9zaXRpb25lZCBuZWFyIHRoZSBsZWZ0IHNpZGUgb2YgdGhlIGxheW91dCBhbmQgaXQncyBjb250ZW50IHdpbGwgYmUgaGlkZGVuIHVudGlsIHRoZSB1c2VyIHNlbGVjdHMgb25lIG9mIGl0J3MgbGFiZWxzLiBcblx0KiBAcGFyYW0ge0hUTUxFbGVtZW50IHwgbnVtYmVyIHwgc3RyaW5nfSBub2RlLiBUaGUgXCJzbWFydC10YWJzLXdpbmRvd1wiIG9yIFwic21hcnQtdGFiLWl0ZW1cIiBub2RlIHRvIGFwcGVuZFxuXHQqL1xuICAgIHB1YmxpYyBhdXRvSGlkZUxlZnQobm9kZTogSFRNTEVsZW1lbnQgfCBudW1iZXIgfCBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYXV0b0hpZGVMZWZ0KG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9IaWRlTGVmdChub2RlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gTWFrZXMgYSBcInNtYXJ0LXRhYnMtd2luZG93XCIgbm9kZSwgdGhhdCBpcyBhIGNoaWxkIG9mIHRoZSBMYXlvdXQsIGF1dG8gaGlkZGVuIGJ5IHBsYWNpbmcgaXQgYXQgdGhlIFJpZ2h0IHBvc2l0aW9uIGluc2lkZSB0aGUgbGF5b3V0LiBUaGlzIG1lYW5zIHRoYXQgdGhlIGl0ZW0gd2lsbCBiZSBwb3NpdGlvbmVkIG5lYXIgdGhlIHJpZ2h0IHNpZGUgb2YgdGhlIGxheW91dCBhbmQgaXQncyBjb250ZW50IHdpbGwgYmUgaGlkZGVuIHVudGlsIHRoZSB1c2VyIHNlbGVjdHMgb25lIG9mIGl0J3MgbGFiZWxzLiBcblx0KiBAcGFyYW0ge0hUTUxFbGVtZW50IHwgbnVtYmVyIHwgc3RyaW5nfSBub2RlLiBUaGUgXCJzbWFydC10YWJzLXdpbmRvd1wiIG9yIFwic21hcnQtdGFiLWl0ZW1cIiBub2RlIHRvIGFwcGVuZFxuXHQqL1xuICAgIHB1YmxpYyBhdXRvSGlkZVJpZ2h0KG5vZGU6IEhUTUxFbGVtZW50IHwgbnVtYmVyIHwgc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9IaWRlUmlnaHQobm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYXV0b0hpZGVSaWdodChub2RlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gTWFrZXMgYSBcInNtYXJ0LXRhYnMtd2luZG93XCIgbm9kZSwgdGhhdCBpcyBhIGNoaWxkIG9mIHRoZSBMYXlvdXQsIGF1dG8gaGlkZGVuIGJ5IHBsYWNpbmcgaXQgYXQgdGhlIFRvcCBwb3NpdGlvbiBpbnNpZGUgdGhlIGxheW91dC4gVGhpcyBtZWFucyB0aGF0IHRoZSBpdGVtIHdpbGwgYmUgcG9zaXRpb25lZCBuZWFyIHRoZSB0b3Agc2lkZSBvZiB0aGUgbGF5b3V0IGFuZCBpdCdzIGNvbnRlbnQgd2lsbCBiZSBoaWRkZW4gdW50aWwgdGhlIHVzZXIgc2VsZWN0cyBvbmUgb2YgaXQncyBsYWJlbHMuIFxuXHQqIEBwYXJhbSB7SFRNTEVsZW1lbnQgfCBudW1iZXIgfCBzdHJpbmd9IG5vZGUuIFRoZSBcInNtYXJ0LXRhYnMtd2luZG93XCIgb3IgXCJzbWFydC10YWItaXRlbVwiIG5vZGUgdG8gYXBwZW5kXG5cdCovXG4gICAgcHVibGljIGF1dG9IaWRlVG9wKG5vZGU6IEhUTUxFbGVtZW50IHwgbnVtYmVyIHwgc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9IaWRlVG9wKG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9IaWRlVG9wKG5vZGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDbGVhcnMgdGhlIGxvY2FsU3RvcmFnZSBvZiBhbnkgcHJldmlvdXMgY2FjaGVkIHN0YXRlIG9mIHRoZSBEb2NraW5nTGF5b3V0LiBcblx0Ki9cbiAgICBwdWJsaWMgY2xlYXJTdGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xlYXJTdGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNsZWFyU3RhdGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhlIG1ldGhvZCB3aWxsIHJlc2V0IGFuIGF1dG9oaWRkZW4gaXRlbSB0byBpdCdzIG5vcm1hbCBiZWhhdmlvciBhbmQgcmUtaW5zZXJ0IGl0IGF0IGEgc3BlY2lmaWVkIHBvc2l0aW9uLiBJdCBjYW4gYWxzbyBiZSB1c2VkIHRvIGluc2VydCBpdGVtcyBpbnRvIHRoZSBEb2NraW5nTGF5b3V0LiBOb3RlOiBJdGVtcyBpbnNlcnRlZCB2aWEgdGhpcyBtZXRob2QgYXJlIGFkZGVkIGFzIGEgdG9wIGxldmVsIGl0ZW1zLiBcblx0KiBAcGFyYW0ge3N0cmluZyB8IG51bWJlciB8IE5vZGV9IG5vZGUuIEFuIGF1dG9oaWRkZW4gXCJzbWFydC10YWJzLXdpbmRvd1wiIGl0ZW0gaW5zdGFuY2Ugb3IgYSBuZXcgXCJzbWFydC10YWJzLXdpbmRvd1wiIGluc3RhbmNlLlxuXHQqIEByZXR1cm5zIHtOb2RlfVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZG9jayhub2RlKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmRvY2sobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBJbnNlcnRzIGEgbmV3IFRhYnNXaW5kb3cgaW50byB0aGUgRG9ja2luZ0xheW91dCBvciBjcmVhdGVzIGEgVGFic1dpbmRvdyBpbnN0YW5jZSBmcm9tIGFuIG9iamVjdCBwYXNzZWQgYXMgdGhlIHNlY29uZCBhcmd1bWVudC4gVGhlIG5ldyBpdGVtIGlzIGluc2VydGVkIGJlZm9yZSB0aGUgdGFyZ2V0IGl0ZW0gd2hpY2ggY29ycmVzcG9uZHMgdG8gdGhlIGluZGV4IHBhc3NlZCBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gdGhlIG1ldGhvZC4gXG5cdCogQHBhcmFtIHtudW1iZXIgfCBIVE1MRWxlbWVudCB8IHN0cmluZ30gaW5kZXguIFRoZSBpbmRleCB0byBpbnNlcnQgYSBuZXcgVGFic1dpbmRvdyBhdC5cblx0KiBAcGFyYW0ge2FueX0gaXRlbS4gQW4gaW5zdGFuY2Ugb2YgYSBUYWJzV2luZG93IG9yIGFuIE9iamVjdCB3aXRoIHRoZSBmaWVsZHMgXCJsYWJlbFwiLCBcIml0ZW1zXCIgYW5kIG90aGVyIGFkZGl0aW9uYWwuXG5cdCovXG4gICAgcHVibGljIGluc2VydEJlZm9yZUl0ZW0oaW5kZXg6IG51bWJlciB8IEhUTUxFbGVtZW50IHwgc3RyaW5nLCBpdGVtOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5zZXJ0QmVmb3JlSXRlbShpbmRleCwgaXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5zZXJ0QmVmb3JlSXRlbShpbmRleCwgaXRlbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEluc2VydHMgYSBuZXcgVGFic1dpbmRvdyBpbnRvIHRoZSBEb2NraW5nTGF5b3V0IG9yIGNyZWF0ZXMgYSBUYWJzV2luZG93IGluc3RhbmNlIGZyb20gYW4gb2JqZWN0IHBhc3NlZCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50LiBUaGUgbmV3IGl0ZW0gaXMgaW5zZXJ0ZWQgYWZ0ZXIgdGhlIHRhcmdldCBpdGVtIHdoaWNoIGNvcnJlc3BvbmRzIHRvIHRoZSBpbmRleCBwYXNzZWQgYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIHRoZSBtZXRob2QuIFxuXHQqIEBwYXJhbSB7bnVtYmVyIHwgSFRNTEVsZW1lbnQgfCBzdHJpbmd9IGluZGV4LiBUaGUgaW5kZXggdG8gaW5zZXJ0IGEgbmV3IFRhYnNXaW5kb3cgYXQuXG5cdCogQHBhcmFtIHthbnl9IGl0ZW0uIEFuIGluc3RhbmNlIG9mIGEgVGFic1dpbmRvdyBvciBhbiBPYmplY3Qgd2l0aCB0aGUgZmllbGRzIFwibGFiZWxcIiwgXCJpdGVtc1wiIGFuZCBvdGhlciBhZGRpdGlvbmFsLlxuXHQqL1xuICAgIHB1YmxpYyBpbnNlcnRBZnRlckl0ZW0oaW5kZXg6IG51bWJlciB8IEhUTUxFbGVtZW50IHwgc3RyaW5nLCBpdGVtOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5zZXJ0QWZ0ZXJJdGVtKGluZGV4LCBpdGVtKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5pbnNlcnRBZnRlckl0ZW0oaW5kZXgsIGl0ZW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBJbnNlcnRzIGEgbmV3IFRhYnNXaW5kb3cgaW50byB0aGUgRG9ja2luZ0xheW91dCBvciBjcmVhdGVzIGEgVGFic1dpbmRvdyBpbnN0YW5jZSBmcm9tIGFuIG9iamVjdCBwYXNzZWQgYXMgdGhlIHNlY29uZCBhcmd1bWVudC4gVGhlIG5ldyBpdGVtIGlzIGluc2VydGVkIGJ5IHNwbGl0dGluZyAgdGhlIHRhcmdldCBpdGVtIHdoaWNoIGNvcnJlc3BvbmRzIHRvIHRoZSBpbmRleCBwYXNzZWQgYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIHRoZSBtZXRob2QgaW4gdHdvIGFuZCBwbGFjaW5nIHRoZSBuZXcgaXRlbSBhcyBpdCdzIGxlZnQgbmVpZ2hib3VyIGhvcml6b250YWxseS4gXG5cdCogQHBhcmFtIHtudW1iZXIgfCBIVE1MRWxlbWVudCB8IHN0cmluZ30gaW5kZXguIFRoZSBpbmRleCB0byBpbnNlcnQgYSBuZXcgVGFic1dpbmRvdyBhdC5cblx0KiBAcGFyYW0ge2FueX0gaXRlbS4gQW4gaW5zdGFuY2Ugb2YgYSBUYWJzV2luZG93IG9yIGFuIE9iamVjdCB3aXRoIHRoZSBmaWVsZHMgXCJsYWJlbFwiLCBcIml0ZW1zXCIgYW5kIG90aGVyIGFkZGl0aW9uYWwuXG5cdCovXG4gICAgcHVibGljIGluc2VydEludG9MZWZ0KGluZGV4OiBudW1iZXIgfCBIVE1MRWxlbWVudCB8IHN0cmluZywgaXRlbTogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lmluc2VydEludG9MZWZ0KGluZGV4LCBpdGVtKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5pbnNlcnRJbnRvTGVmdChpbmRleCwgaXRlbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEluc2VydHMgYSBuZXcgVGFic1dpbmRvdyBpbnRvIHRoZSBEb2NraW5nTGF5b3V0IG9yIGNyZWF0ZXMgYSBUYWJzV2luZG93IGluc3RhbmNlIGZyb20gYW4gb2JqZWN0IHBhc3NlZCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50LiBUaGUgbmV3IGl0ZW0gaXMgaW5zZXJ0ZWQgYnkgc3BsaXR0aW5nICB0aGUgdGFyZ2V0IGl0ZW0gd2hpY2ggY29ycmVzcG9uZHMgdG8gdGhlIGluZGV4IHBhc3NlZCBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gdGhlIG1ldGhvZCBpbiB0d28gYW5kIHBsYWNpbmcgdGhlIG5ldyBpdGVtIGFzIGl0J3MgcmlnaHQgbmVpZ2hib3VyIGhvcml6b250YWxseS4gXG5cdCogQHBhcmFtIHtudW1iZXIgfCBIVE1MRWxlbWVudCB8IHN0cmluZ30gaW5kZXguIFRoZSBpbmRleCB0byBpbnNlcnQgYSBuZXcgVGFic1dpbmRvdyBhdC5cblx0KiBAcGFyYW0ge2FueX0gaXRlbS4gQW4gaW5zdGFuY2Ugb2YgYSBUYWJzV2luZG93IG9yIGFuIE9iamVjdCB3aXRoIHRoZSBmaWVsZHMgXCJsYWJlbFwiLCBcIml0ZW1zXCIgYW5kIG90aGVyIGFkZGl0aW9uYWwuXG5cdCovXG4gICAgcHVibGljIGluc2VydEludG9SaWdodChpbmRleDogbnVtYmVyIHwgSFRNTEVsZW1lbnQgfCBzdHJpbmcsIGl0ZW06IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5pbnNlcnRJbnRvUmlnaHQoaW5kZXgsIGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lmluc2VydEludG9SaWdodChpbmRleCwgaXRlbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEluc2VydHMgYSBuZXcgVGFic1dpbmRvdyBpbnRvIHRoZSBEb2NraW5nTGF5b3V0IG9yIGNyZWF0ZXMgYSBUYWJzV2luZG93IGluc3RhbmNlIGZyb20gYW4gb2JqZWN0IHBhc3NlZCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50LiBUaGUgbmV3IGl0ZW0gaXMgaW5zZXJ0ZWQgYnkgc3BsaXR0aW5nICB0aGUgdGFyZ2V0IGl0ZW0gd2hpY2ggY29ycmVzcG9uZHMgdG8gdGhlIGluZGV4IHBhc3NlZCBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gdGhlIG1ldGhvZCBpbiB0d28gYW5kIHBsYWNpbmcgdGhlIG5ldyBpdGVtIGFzIGl0J3MgdG9wIG5laWdoYm91ciB2ZXJ0aWNhbGx5LiBcblx0KiBAcGFyYW0ge251bWJlciB8IEhUTUxFbGVtZW50IHwgc3RyaW5nfSBpbmRleC4gVGhlIGluZGV4IHRvIGluc2VydCBhIG5ldyBUYWJzV2luZG93IGF0LlxuXHQqIEBwYXJhbSB7YW55fSBpdGVtLiBBbiBpbnN0YW5jZSBvZiBhIFRhYnNXaW5kb3cgb3IgYW4gT2JqZWN0IHdpdGggdGhlIGZpZWxkcyBcImxhYmVsXCIsIFwiaXRlbXNcIiBhbmQgb3RoZXIgYWRkaXRpb25hbC5cblx0Ki9cbiAgICBwdWJsaWMgaW5zZXJ0SW50b1RvcChpbmRleDogbnVtYmVyIHwgSFRNTEVsZW1lbnQgfCBzdHJpbmcsIGl0ZW06IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5pbnNlcnRJbnRvVG9wKGluZGV4LCBpdGVtKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5pbnNlcnRJbnRvVG9wKGluZGV4LCBpdGVtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSW5zZXJ0cyBhIG5ldyBUYWJzV2luZG93IGludG8gdGhlIERvY2tpbmdMYXlvdXQgb3IgY3JlYXRlcyBhIFRhYnNXaW5kb3cgaW5zdGFuY2UgZnJvbSBhbiBvYmplY3QgcGFzc2VkIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQuIFRoZSBuZXcgaXRlbSBpcyBpbnNlcnRlZCBieSBzcGxpdHRpbmcgIHRoZSB0YXJnZXQgaXRlbSB3aGljaCBjb3JyZXNwb25kcyB0byB0aGUgaW5kZXggcGFzc2VkIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byB0aGUgbWV0aG9kIGluIHR3byBhbmQgcGxhY2luZyB0aGUgbmV3IGl0ZW0gYXMgaXQncyBib3R0b20gbmVpZ2hib3VyIHZlcnRpY2FsbHkuIFxuXHQqIEBwYXJhbSB7bnVtYmVyIHwgSFRNTEVsZW1lbnQgfCBzdHJpbmd9IGluZGV4LiBUaGUgaW5kZXggdG8gaW5zZXJ0IGEgbmV3IFRhYnNXaW5kb3cgYXQuXG5cdCogQHBhcmFtIHthbnl9IGl0ZW0uIEFuIGluc3RhbmNlIG9mIGEgVGFic1dpbmRvdyBvciBhbiBPYmplY3Qgd2l0aCB0aGUgZmllbGRzIFwibGFiZWxcIiwgXCJpdGVtc1wiIGFuZCBvdGhlciBhZGRpdGlvbmFsLlxuXHQqL1xuICAgIHB1YmxpYyBpbnNlcnRJbnRvQm90dG9tKGluZGV4OiBudW1iZXIgfCBIVE1MRWxlbWVudCB8IHN0cmluZywgaXRlbTogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lmluc2VydEludG9Cb3R0b20oaW5kZXgsIGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lmluc2VydEludG9Cb3R0b20oaW5kZXgsIGl0ZW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBJbnNlcnRzIGEgbmV3IFRhYnNXaW5kb3cgaW50byB0aGUgRG9ja2luZ0xheW91dCBvciBjcmVhdGVzIGEgVGFic1dpbmRvdyBpbnN0YW5jZSBmcm9tIGFuIG9iamVjdCBwYXNzZWQgYXMgdGhlIHNlY29uZCBhcmd1bWVudC4gVGhlIG5ldyBpdGVtIGlzIGluc2VydGVkIGFzIGEgdG9wIGxldmVsIGl0ZW0gcG9zaXRpb25lZCBhdCB0aGUgdG9wIHNpZGUgaW5zaWRlIHRoZSBMYXlvdXQuIFxuXHQqIEBwYXJhbSB7YW55fSBpdGVtLiBBbiBpbnN0YW5jZSBvZiBhIFRhYnNXaW5kb3cgb3IgYW4gT2JqZWN0IHdpdGggdGhlIGZpZWxkcyBcImxhYmVsXCIsIFwiaXRlbXNcIiBhbmQgb3RoZXIgYWRkaXRpb25hbC5cblx0Ki9cbiAgICBwdWJsaWMgaW5zZXJ0TGF5b3V0VG9wKGl0ZW06IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5pbnNlcnRMYXlvdXRUb3AoaXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5zZXJ0TGF5b3V0VG9wKGl0ZW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBJbnNlcnRzIGEgbmV3IFRhYnNXaW5kb3cgaW50byB0aGUgRG9ja2luZ0xheW91dCBvciBjcmVhdGVzIGEgVGFic1dpbmRvdyBpbnN0YW5jZSBmcm9tIGFuIG9iamVjdCBwYXNzZWQgYXMgdGhlIHNlY29uZCBhcmd1bWVudC4gVGhlIG5ldyBpdGVtIGlzIGluc2VydGVkIGFzIGEgdG9wIGxldmVsIGl0ZW0gcG9zaXRpb25lZCBhdCB0aGUgYm90dG9tIHNpZGUgaW5zaWRlIHRoZSBMYXlvdXQuIFxuXHQqIEBwYXJhbSB7YW55fSBpdGVtLiBBbiBpbnN0YW5jZSBvZiBhIFRhYnNXaW5kb3cgb3IgYW4gT2JqZWN0IHdpdGggdGhlIGZpZWxkcyBcImxhYmVsXCIsIFwiaXRlbXNcIiBhbmQgb3RoZXIgYWRkaXRpb25hbC5cblx0Ki9cbiAgICBwdWJsaWMgaW5zZXJ0TGF5b3V0Qm90dG9tKGl0ZW06IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5pbnNlcnRMYXlvdXRCb3R0b20oaXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5zZXJ0TGF5b3V0Qm90dG9tKGl0ZW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBJbnNlcnRzIGEgbmV3IFRhYnNXaW5kb3cgaW50byB0aGUgRG9ja2luZ0xheW91dCBvciBjcmVhdGVzIGEgVGFic1dpbmRvdyBpbnN0YW5jZSBmcm9tIGFuIG9iamVjdCBwYXNzZWQgYXMgdGhlIHNlY29uZCBhcmd1bWVudC4gVGhlIG5ldyBpdGVtIGlzIGluc2VydGVkIGFzIGEgdG9wIGxldmVsIGl0ZW0gcG9zaXRpb25lZCBhdCB0aGUgbGVmdCBzaWRlIGluc2lkZSB0aGUgTGF5b3V0LiBcblx0KiBAcGFyYW0ge2FueX0gaXRlbS4gQW4gaW5zdGFuY2Ugb2YgYSBUYWJzV2luZG93IG9yIGFuIE9iamVjdCB3aXRoIHRoZSBmaWVsZHMgXCJsYWJlbFwiLCBcIml0ZW1zXCIgYW5kIG90aGVyIGFkZGl0aW9uYWwuXG5cdCovXG4gICAgcHVibGljIGluc2VydExheW91dExlZnQoaXRlbTogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lmluc2VydExheW91dExlZnQoaXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5zZXJ0TGF5b3V0TGVmdChpdGVtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSW5zZXJ0cyBhIG5ldyBUYWJzV2luZG93IGludG8gdGhlIERvY2tpbmdMYXlvdXQgb3IgY3JlYXRlcyBhIFRhYnNXaW5kb3cgaW5zdGFuY2UgZnJvbSBhbiBvYmplY3QgcGFzc2VkIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQuIFRoZSBuZXcgaXRlbSBpcyBpbnNlcnRlZCBhcyBhIHRvcCBsZXZlbCBpdGVtIHBvc2l0aW9uZWQgYXQgdGhlIHJpZ2h0IGluc2lkZSB0aGUgTGF5b3V0LiBcblx0KiBAcGFyYW0ge2FueX0gaXRlbS4gQW4gaW5zdGFuY2Ugb2YgYSBUYWJzV2luZG93IG9yIGFuIE9iamVjdCB3aXRoIHRoZSBmaWVsZHMgXCJsYWJlbFwiLCBcIml0ZW1zXCIgYW5kIG90aGVyIGFkZGl0aW9uYWwuXG5cdCovXG4gICAgcHVibGljIGluc2VydExheW91dFJpZ2h0KGl0ZW06IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5pbnNlcnRMYXlvdXRSaWdodChpdGVtKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5pbnNlcnRMYXlvdXRSaWdodChpdGVtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSW5zZXJ0cyBhIG5ldyBUYWJzV2luZG93IGludG8gdGhlIERvY2tpbmdMYXlvdXQgb3IgY3JlYXRlcyBhIFRhYnNXaW5kb3cgaW5zdGFuY2UgZnJvbSBhbiBvYmplY3QgcGFzc2VkIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQuIFRoZSB0YXJnZXQgaXRlbSBhbmQgaXQncyBuZWlnaGJvdXIgaXRlbXMgYXJlIHBsYWNlZCBpbnNpZGUgYSBuZXcgc3BsaXR0ZXIgaXRlbSB0aGF0IGFjdHMgYXMgdGhlIG5ldyBuZWdoYm91ciBvZiB0aGUgbmV3bHkgYWRkZWQgaXRlbSB2aWEgdGhpcyBtZXRob2QuIFRoZSBuZXcgaXRlbSBpcyBpbnNlcnRlZCBhYm92ZSB0aGUgdGFyZ2V0ICggYXQgcG9zaXRpb24gVG9wKS4gXG5cdCogQHBhcmFtIHtudW1iZXIgfCBIVE1MRWxlbWVudCB8IHN0cmluZ30gaW5kZXguIFRoZSBpbmRleCB0byBpbnNlcnQgYSBuZXcgVGFic1dpbmRvdyBhdC5cblx0KiBAcGFyYW0ge2FueX0gdGFic1dpbmRvdy4gQW4gaW5zdGFuY2Ugb2YgYSBUYWJzV2luZG93IG9yIGFuIE9iamVjdCB3aXRoIHRoZSBmaWVsZHMgXCJsYWJlbFwiLCBcIml0ZW1zXCIgYW5kIG90aGVyIGFkZGl0aW9uYWwuXG5cdCovXG4gICAgcHVibGljIGluc2VydE91dHNpZGVUYXJnZXRHcm91cFRvcChpbmRleDogbnVtYmVyIHwgSFRNTEVsZW1lbnQgfCBzdHJpbmcsIHRhYnNXaW5kb3c6IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5pbnNlcnRPdXRzaWRlVGFyZ2V0R3JvdXBUb3AoaW5kZXgsIHRhYnNXaW5kb3cpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lmluc2VydE91dHNpZGVUYXJnZXRHcm91cFRvcChpbmRleCwgdGFic1dpbmRvdyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEluc2VydHMgYSBuZXcgVGFic1dpbmRvdyBpbnRvIHRoZSBEb2NraW5nTGF5b3V0IG9yIGNyZWF0ZXMgYSBUYWJzV2luZG93IGluc3RhbmNlIGZyb20gYW4gb2JqZWN0IHBhc3NlZCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50LiBUaGUgdGFyZ2V0IGl0ZW0gYW5kIGl0J3MgbmVpZ2hib3VyIGl0ZW1zIGFyZSBwbGFjZWQgaW5zaWRlIGEgbmV3IHNwbGl0dGVyIGl0ZW0gdGhhdCBhY3RzIGFzIHRoZSBuZXcgbmVnaGJvdXIgb2YgdGhlIG5ld2x5IGFkZGVkIGl0ZW0gdmlhIHRoaXMgbWV0aG9kLiBUaGUgbmV3IGl0ZW0gaXMgaW5zZXJ0ZWQgYmVsbG93IHRoZSB0YXJnZXQgKCBhdCBwb3NpdGlvbiBCb3R0b20pLiBcblx0KiBAcGFyYW0ge251bWJlciB8IEhUTUxFbGVtZW50IHwgc3RyaW5nfSBpbmRleC4gVGhlIGluZGV4IHRvIGluc2VydCBhIG5ldyBUYWJzV2luZG93IGF0LlxuXHQqIEBwYXJhbSB7YW55fSB0YWJzV2luZG93LiBBbiBpbnN0YW5jZSBvZiBhIFRhYnNXaW5kb3cgb3IgYW4gT2JqZWN0IHdpdGggdGhlIGZpZWxkcyBcImxhYmVsXCIsIFwiaXRlbXNcIiBhbmQgb3RoZXIgYWRkaXRpb25hbC5cblx0Ki9cbiAgICBwdWJsaWMgaW5zZXJ0T3V0c2lkZVRhcmdldEdyb3VwQm90dG9tKGluZGV4OiBudW1iZXIgfCBIVE1MRWxlbWVudCB8IHN0cmluZywgdGFic1dpbmRvdzogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lmluc2VydE91dHNpZGVUYXJnZXRHcm91cEJvdHRvbShpbmRleCwgdGFic1dpbmRvdyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5zZXJ0T3V0c2lkZVRhcmdldEdyb3VwQm90dG9tKGluZGV4LCB0YWJzV2luZG93KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSW5zZXJ0cyBhIG5ldyBUYWJzV2luZG93IGludG8gdGhlIERvY2tpbmdMYXlvdXQgb3IgY3JlYXRlcyBhIFRhYnNXaW5kb3cgaW5zdGFuY2UgZnJvbSBhbiBvYmplY3QgcGFzc2VkIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQuIFRoZSB0YXJnZXQgaXRlbSBhbmQgaXQncyBuZWlnaGJvdXIgaXRlbXMgYXJlIHBsYWNlZCBpbnNpZGUgYSBuZXcgc3BsaXR0ZXIgaXRlbSB0aGF0IGFjdHMgYXMgdGhlIG5ldyBuZWdoYm91ciBvZiB0aGUgbmV3bHkgYWRkZWQgaXRlbSB2aWEgdGhpcyBtZXRob2QuIFRoZSBuZXcgaXRlbSBpcyBpbnNlcnRlZCBiZWZvcmUgdGhlIHRhcmdldCAoIGF0IHBvc2l0aW9uIExlZnQpLiBcblx0KiBAcGFyYW0ge251bWJlciB8IEhUTUxFbGVtZW50IHwgc3RyaW5nfSBpbmRleC4gVGhlIGluZGV4IHRvIGluc2VydCBhIG5ldyBUYWJzV2luZG93IGF0LlxuXHQqIEBwYXJhbSB7YW55fSB0YWJzV2luZG93LiBBbiBpbnN0YW5jZSBvZiBhIFRhYnNXaW5kb3cgb3IgYW4gT2JqZWN0IHdpdGggdGhlIGZpZWxkcyBcImxhYmVsXCIsIFwiaXRlbXNcIiBhbmQgb3RoZXIgYWRkaXRpb25hbC5cblx0Ki9cbiAgICBwdWJsaWMgaW5zZXJ0T3V0c2lkZVRhcmdldEdyb3VwTGVmdChpbmRleDogbnVtYmVyIHwgSFRNTEVsZW1lbnQgfCBzdHJpbmcsIHRhYnNXaW5kb3c6IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5pbnNlcnRPdXRzaWRlVGFyZ2V0R3JvdXBMZWZ0KGluZGV4LCB0YWJzV2luZG93KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5pbnNlcnRPdXRzaWRlVGFyZ2V0R3JvdXBMZWZ0KGluZGV4LCB0YWJzV2luZG93KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSW5zZXJ0cyBhIG5ldyBUYWJzV2luZG93IGludG8gdGhlIERvY2tpbmdMYXlvdXQgb3IgY3JlYXRlcyBhIFRhYnNXaW5kb3cgaW5zdGFuY2UgZnJvbSBhbiBvYmplY3QgcGFzc2VkIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQuIFRoZSB0YXJnZXQgaXRlbSBhbmQgaXQncyBuZWlnaGJvdXIgaXRlbXMgYXJlIHBsYWNlZCBpbnNpZGUgYSBuZXcgc3BsaXR0ZXIgaXRlbSB0aGF0IGFjdHMgYXMgdGhlIG5ldyBuZWdoYm91ciBvZiB0aGUgbmV3bHkgYWRkZWQgaXRlbSB2aWEgdGhpcyBtZXRob2QuIFRoZSBuZXcgaXRlbSBpcyBpbnNlcnRlZCBhZnRlciB0aGUgdGFyZ2V0ICggYXQgcG9zaXRpb24gUmlnaHQpLiBcblx0KiBAcGFyYW0ge251bWJlciB8IEhUTUxFbGVtZW50IHwgc3RyaW5nfSBpbmRleC4gVGhlIGluZGV4IHRvIGluc2VydCBhIG5ldyBUYWJzV2luZG93IGF0LlxuXHQqIEBwYXJhbSB7YW55fSB0YWJzV2luZG93LiBBbiBpbnN0YW5jZSBvZiBhIFRhYnNXaW5kb3cgb3IgYW4gT2JqZWN0IHdpdGggdGhlIGZpZWxkcyBcImxhYmVsXCIsIFwiaXRlbXNcIiBhbmQgb3RoZXIgYWRkaXRpb25hbC5cblx0Ki9cbiAgICBwdWJsaWMgaW5zZXJ0T3V0c2lkZVRhcmdldEdyb3VwUmlnaHQoaW5kZXg6IG51bWJlciB8IEhUTUxFbGVtZW50IHwgc3RyaW5nLCB0YWJzV2luZG93OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5zZXJ0T3V0c2lkZVRhcmdldEdyb3VwUmlnaHQoaW5kZXgsIHRhYnNXaW5kb3cpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lmluc2VydE91dHNpZGVUYXJnZXRHcm91cFJpZ2h0KGluZGV4LCB0YWJzV2luZG93KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhlIG1ldGhvZCByZXR1cm5zIGFuIGFycmF5IG9mIGFsbCBhdXRvaGlkZGVuIGl0ZW1zLiBcblx0KiBAcGFyYW0ge3N0cmluZ30gb3JpZW50YXRpb24/LiBEZXRlcm1pbmVzIHdoaWNoIGF1dG8gaGlkZGVuIGl0ZW1zIHRvIHJldHVybiAoIHZlcnRpY2FsIG9yIGhvcml6b250YWwgKS4gSWYgbm90IHNldCB0aGUgbWV0aG9kIHdpbGwgcmV0dXJuIGFsbCBhdXRvaGlkZGVuIGl0ZW1zLiBQb3NzaWJsZSB2YWx1ZXM6ICd2ZXJ0aWNhbCcsICdob3Jpem9udGFsJy5cblx0KiBAcmV0dXJucyB7YW55W119XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRBdXRvSGlkZUl0ZW1zKG9yaWVudGF0aW9uPyk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRBdXRvSGlkZUl0ZW1zKG9yaWVudGF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoZSBtZXRob2QgcmV0dXJucyB0aGUgaW5kZXggb2YgYSB0YXJnZXQgaXRlbS4gXG5cdCogQHBhcmFtIHtIVE1MRWxlbWVudH0gbm9kZS4gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIHRhcmdldCBpdGVtLlxuXHQqIEByZXR1cm5zIHtudW1iZXJ9XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRJbmRleChub2RlKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldEluZGV4KG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmV0dXJucyBhbiBhcnJheSBvZiBvYmplY3RzIHJlcHJlc2VudGluZyB0aGUgY3VycmVudCBzdHJ1Y3R1cmUgb2YgdGhlIGVsZW1lbnQuIEVhY2ggb2JqZWN0IHJlcHJlc2VudHMgYSBMYXlvdXQgaXRlbSB3aXRoIGl0J3Mgc2V0dGluZ3MgYW5kIGhpZXJhcmNoeS4gXG5cdCogQHBhcmFtIHtib29sZWFufSBub0luc3RhbmNlcz8uIERldGVybWluZXMgaWYgdGhlIHJldHVybmVkIGFycmF5IHdpbGwgY29udGFpbiBIVE1MIHJlZmVyZW5jZXMgb3Igbm90LiBXaGVuIHNhdmluZyB0byBsb2NhbFN0b3JhZ2UgdGhlIHJlc3VsdGVkIGFycmF5IHNob3VsZCBub3QgY29udGFpbiBhbnkgSFRNTEVsZW1lbnQgcmVmZXJlbmNlcy5cblx0KiBAcmV0dXJucyB7YW55W119XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRTdGF0ZShub0luc3RhbmNlcz8pOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0U3RhdGUobm9JbnN0YW5jZXMpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0aGUgU3BsaXR0ZXIgcGFyZW50IG9mIGEgTGF5b3V0IGl0ZW0gXG5cdCogQHBhcmFtIHtIVE1MRWxlbWVudH0gaXRlbT8uIERvY2tpbmdMYXlvdXQgaXRlbVxuXHQqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldEl0ZW1Hcm91cEVsZW1lbnQoaXRlbT8pOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0SXRlbUdyb3VwRWxlbWVudChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJldHVybnMgYSBKU09OIGFycmF5IG9mIG9iamVjdHMgcmVwcmVzZW50aW5nIHRoZSBjdXJyZW50IHN0cnVjdHVyZSBvZiB0aGUgZWxlbWVudC4gUmVhZHkgdG8gYmUgcGVyc2lzdGVkIHRvIExvY2FsU3RvcmFnZS4gXG5cdCogQHJldHVybnMge2FueVtdfVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0SlNPTlN0cnVjdHVyZSgpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0SlNPTlN0cnVjdHVyZSgpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gTG9hZHMgYSBwcmV2aW91c2x5IHNhdmVkIHN0YXRlIG9mIHRoZSBlbGVtZW50LiBJZiBubyBzdGF0ZSBpcyBwcm92aWRlZCBhcyBhbiBhcmd1bWVudCB0aGUgbWV0aG9kIHdpbGwgZG8gYSBsb2NhbFN0b3JhZ2UgbG9va3VwLiBcblx0KiBAcGFyYW0ge2FueVtdfSBzdGF0ZT8uIEFuIGFycmF5IG9mIG9iamVjdHMgdGhhdCByZXByZXNlbnRzIGEgY2FjaGVkIHN0YXRlIG9mIHRoZSBEb2NraW5nTGF5b3V0LiBUaGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlICdzYXZlU3RhdGUnIG1ldGhvZC5cblx0Ki9cbiAgICBwdWJsaWMgbG9hZFN0YXRlKHN0YXRlPzogYW55W10pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQubG9hZFN0YXRlKHN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5sb2FkU3RhdGUoc3RhdGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZW1vdmVzIGEgRG9ja2luZ0xheW91dCBpdGVtIChUYWJzV2luZG93KSBmcm9tIHRoZSBlbGVtZW50LiBcblx0KiBAcGFyYW0ge251bWJlciB8IEhUTUxFbGVtZW50IHwgc3RyaW5nfSBpbmRleC4gVGhlIGluZGV4IG9mIHRoZSBUYWJzV2luZG93IHRvIHJlbW92ZSBvciBhIHJlZmVyZW5jZSB0byBpdC5cblx0Ki9cbiAgICBwdWJsaWMgcmVtb3ZlQXQoaW5kZXg6IG51bWJlciB8IEhUTUxFbGVtZW50IHwgc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlbW92ZUF0KGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVBdChpbmRleCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJlbW92ZXMgYWxsIGl0ZW1zIGZyb20gdGhlIGVsZW1lbnQuIFxuXHQqL1xuICAgIHB1YmxpYyByZW1vdmVBbGwoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlbW92ZUFsbCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlbW92ZUFsbCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZW1vdmVzIGEgXCJzbWFydC10YWJzLXdpbmRvd1wiIG5vZGUgdGhhdCBpcyBhIERvY2tpbmdMYXlvdXQgaXRlbS4gXG5cdCogQHBhcmFtIHtOb2RlfSBub2RlLiBUaGUgXCJzbWFydC10YWJzLXdpbmRvd1wiIG5vZGUgdG8gcmVtb3ZlLlxuXHQqIEByZXR1cm5zIHtOb2RlfVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgcmVtb3ZlQ2hpbGQobm9kZSk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVDaGlsZChub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNhdmVzIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBEb2NraW5nTGF5b3V0IHRvIExvY2FsU3RvcmFnZS4gVGhlIHN0YXRlIGluY2x1ZGVzIHRoZSBoaWVyYXJjaHkgYW5kIHNpemUgb2YgdGhlIGl0ZW1zLiBcblx0Ki9cbiAgICBwdWJsaWMgc2F2ZVN0YXRlKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zYXZlU3RhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zYXZlU3RhdGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhlIG1ldGhvZCB1bmRvY2tzL3JlbW92ZXMgYW4gaXRlbSBmcm9tIHRoZSBMYXlvdXQgYW5kIHBsYWNlcyBpdCBhdCB0aGUgc2FtZSBwb3NpdGlvbiBidXQgaXQncyBubyBtb3JlIHBhcnQgb2YgdGhlIGxheW91dC4gVGhlIGl0ZW0gYmVjb21lcyBhbiAnb3V0aGVyJyBpdGVtIHRoYXQgY2FuIGJlIHJlaW5zZXJ0ZWQgYXQgYW55IHRpbWUuIFxuXHQqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyIHwgTm9kZX0gbm9kZS4gQSBcInNtYXJ0LXRhYnMtd2luZG93XCIgaW5zdGFuY2UgdGhhdCBpcyBwYXJ0IG9mIHRoZSBEb2NraW5nTGF5b3V0LlxuXHQqL1xuICAgIHB1YmxpYyB1bmRvY2sobm9kZTogc3RyaW5nIHwgbnVtYmVyIHwgTm9kZSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC51bmRvY2sobm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQudW5kb2NrKG5vZGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBVcGRhdGVzIGEgVGFic1dpbmRvdyBhbmQgaXQncyBjb250ZW50cy4gXG5cdCogQHBhcmFtIHtudW1iZXIgfCBIVE1MRWxlbWVudCB8IHN0cmluZ30gaW5kZXguIFRoZSBpbmRleCBvZiB0aGUgVGFic1dpbmRvdyB0byB1cGRhdGUuXG5cdCogQHBhcmFtIHthbnl9IHNldHRpbmdzLiBBbiBvYmplY3QgdGhhdCBjb250YWlucyB0aGUgbmV3IHNldHRpbmdzIGZvciB0aGUgVGFic1dpbmRvdyBpdGVtLiBTZXR0aW5ncyBvYmplY3QgaXMgdGhlIHNhbWUgYXMgZGVmaW5pbmcgYSBuZXcgVGFic1dpbmRvdyB3aXRoIHRoZSBleGNlcHRpb24gb2YgJ2l0ZW1zJyBhcnJheSB3aGVyZSB0aGUgaXRlbXMgYXJlIGRlZmluZWQuIEluIG9yZGVyIHRvIGNoYW5nZSB0aGUgbGFiZWwgb3IgY29udGVudCBvZiBhIFRhYiBpdGVtIHRoZSB1c2VyIGhhcyB0byBzcGVjaWZ5IHRoZSBpbmRleCBvZiB0aGUgdGFyZ2V0IHRhYiBpdGVtLlxuXHQqL1xuICAgIHB1YmxpYyB1cGRhdGUoaW5kZXg6IG51bWJlciB8IEhUTUxFbGVtZW50IHwgc3RyaW5nLCBzZXR0aW5nczogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnVwZGF0ZShpbmRleCwgc2V0dGluZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnVwZGF0ZShpbmRleCwgc2V0dGluZ3MpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXHRnZXQgaXNSZW5kZXJlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQgOiBmYWxzZTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHR9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICBjb25zdCB0aGF0ID0gdGhpcztcblxuICAgICAgdGhhdC5vbkNyZWF0ZS5lbWl0KHRoYXQubmF0aXZlRWxlbWVudCk7XG5cblx0XHRTbWFydC5SZW5kZXIoKTtcblxuXHRcdHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4geyB0aGF0Lm9uUmVhZHkuZW1pdCh0aGF0Lm5hdGl2ZUVsZW1lbnQpOyB9KTtcblx0XHR0aGlzLmxpc3RlbigpO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy51bmxpc3RlbigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXHRcdGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQgJiYgdGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcblx0XHRcdGZvciAoY29uc3QgcHJvcE5hbWUgaW4gY2hhbmdlcykge1xuXHRcdFx0XHRpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcblx0XHRcdFx0XHR0aGlzLm5hdGl2ZUVsZW1lbnRbcHJvcE5hbWVdID0gY2hhbmdlc1twcm9wTmFtZV0uY3VycmVudFZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBZGQgZXZlbnQgbGlzdGVuZXJzLiAqL1xuXHRwcml2YXRlIGxpc3RlbigpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjaGFuZ2VIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25DaGFuZ2UuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhhdC5ldmVudEhhbmRsZXJzWydjaGFuZ2VIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjbG9zZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNsb3NlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgdGhhdC5ldmVudEhhbmRsZXJzWydjbG9zZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2Nsb3NpbmdIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25DbG9zaW5nLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NpbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2Nsb3NpbmdIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydzdGF0ZUNoYW5nZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblN0YXRlQ2hhbmdlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N0YXRlQ2hhbmdlJywgdGhhdC5ldmVudEhhbmRsZXJzWydzdGF0ZUNoYW5nZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jlc2l6ZVN0YXJ0SGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uUmVzaXplU3RhcnQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplU3RhcnQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jlc2l6ZVN0YXJ0SGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1sncmVzaXplRW5kSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uUmVzaXplRW5kLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZUVuZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1sncmVzaXplRW5kSGFuZGxlciddKTtcblxuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZW1vdmUgZXZlbnQgbGlzdGVuZXJzLiAqL1xuXHRwcml2YXRlIHVubGlzdGVuKCk6IHZvaWQge1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjaGFuZ2VIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5nZUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY2xvc2VIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbG9zZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snY2xvc2VIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2Nsb3NpbmdIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbG9zaW5nJywgdGhhdC5ldmVudEhhbmRsZXJzWydjbG9zaW5nSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydzdGF0ZUNoYW5nZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3N0YXRlQ2hhbmdlJywgdGhhdC5ldmVudEhhbmRsZXJzWydzdGF0ZUNoYW5nZUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1sncmVzaXplU3RhcnRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemVTdGFydCcsIHRoYXQuZXZlbnRIYW5kbGVyc1sncmVzaXplU3RhcnRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jlc2l6ZUVuZEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZUVuZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1sncmVzaXplRW5kSGFuZGxlciddKTtcblx0XHR9XG5cblx0fVxufVxuIl19