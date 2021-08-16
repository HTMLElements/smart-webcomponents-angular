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
        selector: 'smart-docking-layout, [smart-docking-layout]'
    })
], DockingLayoutComponent);
export { DockingLayoutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQuZG9ja2luZ2xheW91dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NtYXJ0LXdlYmNvbXBvbmVudHMtYW5ndWxhci9kb2NraW5nbGF5b3V0LyIsInNvdXJjZXMiOlsic21hcnQuZG9ja2luZ2xheW91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUosT0FBTyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVyRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFReEMsSUFBYSxzQkFBc0IsR0FBbkMsTUFBYSxzQkFBdUIsU0FBUSxXQUFXO0lBQ3RELFlBQVksR0FBOEI7UUFDekMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBSUosa0JBQWEsR0FBVSxFQUFFLENBQUM7UUFtTmxDOzhDQUNzQztRQUM1QixhQUFRLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFbkU7OENBQ3NDO1FBQzVCLFlBQU8sR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVsRTs4Q0FDc0M7UUFDNUIsY0FBUyxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXBFOzhDQUNzQztRQUM1QixrQkFBYSxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXhFOzhDQUNzQztRQUM1QixrQkFBYSxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXhFOzhDQUNzQztRQUM1QixnQkFBVyxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBNU9yRSxJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQyxhQUE4QixDQUFDO0lBQ3pELENBQUM7SUFLRDs7T0FFRztJ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LEVBQUU7MkRBR1A7QUFPRDtJQURDLEtBQUssRUFBRTsyREFHUDtBQU9EO0lBREMsS0FBSyxFQUFFOzJEQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7c0RBR1A7QUFPRDtJQURDLEtBQUssRUFBRTt1REFHUDtBQU9EO0lBREMsS0FBSyxFQUFFO3VEQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7OERBR1A7QUFPRDtJQURDLEtBQUssRUFBRTttREFHUDtBQU9EO0lBREMsS0FBSyxFQUFFO3lEQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7b0RBR1A7QUFPRDtJQURDLEtBQUssRUFBRTt3REFHUDtBQU9EO0lBREMsS0FBSyxFQUFFO29EQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7b0VBR1A7QUFPRDtJQURDLEtBQUssRUFBRTtzREFHUDtBQU9EO0lBREMsS0FBSyxFQUFFO3NEQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7eURBR1A7QUFPRDtJQURDLEtBQUssRUFBRTt3REFHUDtBQU9EO0lBREMsS0FBSyxFQUFFO3NEQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7bURBR1A7QUFPRDtJQURDLEtBQUssRUFBRTsyREFHUDtBQU9EO0lBREMsS0FBSyxFQUFFO3lEQUdQO0FBT1M7SUFBVCxNQUFNLEVBQUU7d0RBQTBEO0FBSXpEO0lBQVQsTUFBTSxFQUFFO3VEQUF5RDtBQUl4RDtJQUFULE1BQU0sRUFBRTt5REFBMkQ7QUFJMUQ7SUFBVCxNQUFNLEVBQUU7NkRBQStEO0FBSTlEO0lBQVQsTUFBTSxFQUFFOzZEQUErRDtBQUk5RDtJQUFULE1BQU0sRUFBRTsyREFBNkQ7QUEvTzFELHNCQUFzQjtJQUpsQyxTQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsOENBQThDO0tBQ3hELENBQUM7R0FFVyxzQkFBc0IsQ0FtMEJsQztTQW4wQlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9ja2luZ0xheW91dCB9IGZyb20gJy4vLi4vaW5kZXgnO1xuaW1wb3J0IHsgQW5pbWF0aW9uLCBEb2NraW5nTGF5b3V0U25hcE1vZGUsIEVsZW1lbnRSZW5kZXJNb2RlfSBmcm9tICcuLy4uL2luZGV4JztcbmltcG9ydCB7IENvbXBvbmVudCwgRGlyZWN0aXZlLCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgU2ltcGxlQ2hhbmdlcywgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VFbGVtZW50LCBTbWFydCB9IGZyb20gJy4vc21hcnQuZWxlbWVudCc7XG5leHBvcnQgeyBBbmltYXRpb24sIERvY2tpbmdMYXlvdXRTbmFwTW9kZSwgRWxlbWVudFJlbmRlck1vZGV9IGZyb20gJy4vLi4vaW5kZXgnO1xuZXhwb3J0IHsgU21hcnQgfSBmcm9tICcuL3NtYXJ0LmVsZW1lbnQnO1xuZXhwb3J0IHsgRG9ja2luZ0xheW91dCB9IGZyb20gJy4vLi4vaW5kZXgnO1xuXG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ3NtYXJ0LWRvY2tpbmctbGF5b3V0LCBbc21hcnQtZG9ja2luZy1sYXlvdXRdJ1xufSlcblxuZXhwb3J0IGNsYXNzIERvY2tpbmdMYXlvdXRDb21wb25lbnQgZXh0ZW5kcyBCYXNlRWxlbWVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuXHRjb25zdHJ1Y3RvcihyZWY6IEVsZW1lbnRSZWY8RG9ja2luZ0xheW91dD4pIHtcblx0XHRzdXBlcihyZWYpO1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA9IHJlZi5uYXRpdmVFbGVtZW50IGFzIERvY2tpbmdMYXlvdXQ7XG5cdH1cblxuXHRwcml2YXRlIGV2ZW50SGFuZGxlcnM6IGFueVtdID0gW107XG5cblx0cHVibGljIG5hdGl2ZUVsZW1lbnQ6IERvY2tpbmdMYXlvdXQ7XG5cdC8qKiBAZGVzY3JpcHRpb24gQ3JlYXRlcyB0aGUgY29tcG9uZW50IG9uIGRlbWFuZC5cblx0ICogQHBhcmFtIHByb3BlcnRpZXMgQW4gb3B0aW9uYWwgb2JqZWN0IG9mIHByb3BlcnRpZXMsIHdoaWNoIHdpbGwgYmUgYWRkZWQgdG8gdGhlIHRlbXBsYXRlIGJpbmRlZCBvbmVzLlxuXHQgKi9cblx0cHVibGljIGNyZWF0ZUNvbXBvbmVudChwcm9wZXJ0aWVzID0ge30pOiBhbnkge1xuICAgIFx0dGhpcy5uYXRpdmVFbGVtZW50ID0gPERvY2tpbmdMYXlvdXQ+ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc21hcnQtZG9ja2luZy1sYXlvdXQnKTtcblx0XHRmb3IgKGxldCBwcm9wZXJ0eU5hbWUgaW4gcHJvcGVydGllcykgeyBcbiBcdFx0XHR0aGlzLm5hdGl2ZUVsZW1lbnRbcHJvcGVydHlOYW1lXSA9IHByb3BlcnRpZXNbcHJvcGVydHlOYW1lXTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudDtcblx0fVxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgYW5pbWF0aW9uIG1vZGUuIEFuaW1hdGlvbiBpcyBkaXNhYmxlZCB3aGVuIHRoZSBwcm9wZXJ0eSBpcyBzZXQgdG8gJ25vbmUnICovXG5cdEBJbnB1dCgpXG5cdGdldCBhbmltYXRpb24oKTogQW5pbWF0aW9uIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmFuaW1hdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYW5pbWF0aW9uKHZhbHVlOiBBbmltYXRpb24pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYW5pbWF0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEEgZ2V0dGVyIHRoYXQgcmV0dXJucyBhbiBhcnJheSBvZiBhbGwgRG9ja2luZ0xheW91dCBpdGVtcyB0aGF0IGFyZSBhdXRvIGhpZGRlbiBpbnNpZGUgdGhlIGVsZW1lbnQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBhdXRvSGlkZUl0ZW1zKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hdXRvSGlkZUl0ZW1zIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBhdXRvSGlkZUl0ZW1zKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYXV0b0hpZGVJdGVtcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFbmFibGUvRGlzYWJsZSB0aGUgYXV0b21hdGljIHN0YXRlIGxvYWRpbmcuIFRoZXJlIG11c3QgYmUgYSBwcmV2aW91c2x5IHNhdmVkIHN0YXRlIG9mIHRoZSBMYXlvdXQgaW4gb3JkZXIgdG8gbG9hZCBpdC4gKi9cblx0QElucHV0KClcblx0Z2V0IGF1dG9Mb2FkU3RhdGUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hdXRvTG9hZFN0YXRlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBhdXRvTG9hZFN0YXRlKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9Mb2FkU3RhdGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRW5hYmxlL0Rpc2FibGUgdGhlIGF1dG9tYXRpYyBzdGF0ZSBzYXZpbmcuIE5vdGU6IEluIG9yZGVyIHRvIHNhdmUgdGhlIHN0YXRlIG9mIHRoZSBlbGVtZW50IGl0IG11c3QgaGF2ZSBhbiBpZC4gKi9cblx0QElucHV0KClcblx0Z2V0IGF1dG9TYXZlU3RhdGUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hdXRvU2F2ZVN0YXRlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBhdXRvU2F2ZVN0YXRlKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9TYXZlU3RhdGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRW5hYmxlcyBvciBkaXNhYmxlcyB0aGUgZWxlbWVudC4gKi9cblx0QElucHV0KClcblx0Z2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZWQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVkID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIElmIHNldCB0byBmYWxzZSBpdCB3aWxsIGRpc2FibGUgdGhlIGRyYWdnaW5nIG9mIERvY2tpbmdMYXlvdXQgaXRlbXMuIElmIHNldCBpdGVtcyBjYW4gb25seSBiZSByZXBvc2l0aW9uZWQgdXNpbmcgdGhlIEFQSSBtZXRob2RzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZHJhZ2dhYmxlKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZHJhZ2dhYmxlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkcmFnZ2FibGUodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZHJhZ2dhYmxlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIElmIHNldCB0byBmYWxzZSBpdCB3aWxsIGRpc2FibGUgaXRlbSBmbG9hdGluZy4gVGhpcyBtZWFucyB0aGF0IGlmIGEgV2luZG93IGlzIGZsb2F0ZWQgYXMgYSByZXN1bHQgb2YgZHJhZ2dpbmcgaXQgd2lsbCBiZSByZXR1cm5lZCBiYWNrIG90IGl0J3Mgb3JpZ2luYWwgcG9zaXRpb24gaW5zdGVhZCBvZiBiZWluZyBmbG9hdGVkIG91dHNpZGUgdGhlIERvY2tpbmdMYXlvdXQuIEFscmVhZHkgZmxvYXRlZCBMYXlvdXRQYW5lbCBpdGVtcyB3aWxsIG5vdCBiZSBhZmZlY3RlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IGZsb2F0YWJsZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmZsb2F0YWJsZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZmxvYXRhYmxlKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmZsb2F0YWJsZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBIaWRlcyBhbGwgc3BsaXR0ZXIgYmFycyBpbnNpZGUgdGhlIGVsZW1lbnQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBoaWRlU3BsaXR0ZXJCYXJzKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGlkZVNwbGl0dGVyQmFycyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgaGlkZVNwbGl0dGVyQmFycyh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oaWRlU3BsaXR0ZXJCYXJzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEEgZ2V0dGVyIHRoYXQgcmV0dXJucyBhbiBhcnJheSBvZiBhbGwgRG9ja2luZ0xheW91dCBpdGVtcyB0aGF0IGFyZSBkb2NrZWQgaW5zaWRlIHRoZSBlbGVtZW50LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgaXRlbXMoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lml0ZW1zIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBpdGVtcyh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lml0ZW1zID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEEgZ2V0dGVyIHRoYXQgcmV0dXJucyBhbiBhcnJheSBvZiBhbGwgRG9ja2luZ0xheW91dCBpdGVtcyB0aGF0IGhhdmUgYmVlbiBjbG9zZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBjbG9zZWRJdGVtcygpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xvc2VkSXRlbXMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGNsb3NlZEl0ZW1zKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xvc2VkSXRlbXMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgc3RydWN0dXJlIG9mIHRoZSBlbGVtZW50LiBUaGlzIHByb3BlcnR5IHJlcHJlc2VudHMgYW4gYXJyYXkgb2Ygb2JqZWN0cyB0aGF0IGRlZmluZSB0aGUgaGllcmFyY2h5IG9mIHRoZSBpdGVtcyBpbnNpZGUgdGhlIGVsZW1lbnQgYW5kIHRoZWlyIHNwZWNpZmljIHNldHRpbmdzLiBFYWNoIG9iamVjdCBtdXN0IGhhdmUgYSB0eXBlIGF0dHJpYnV0ZSB0aGF0IGRlZmluZXMgaXQncyBiZWhhdmlvci4gIFRocmVlIHR5cGVzIG9mIG9iamVjdHMgYXJlIGFsbG93ZWQ6ICAgTGF5b3V0R3JvdXAgLSBSZXByZXNlbnRzIGEgZ3JvdXAgb2YgaXRlbXMgKFNwbGl0dGVyKS4gVXNlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIG1vcmUgdGhhbiBvbmUgRG9ja2luZ0xheW91dCBpdGVtIGluIGEgc2luZ2xlIGNvbnRhaW5lci4gIFByb3BlcnRpZXM6IG9yaWVudGF0aW9uIC0gQSBzdHJpbmcgdmFsdWUgaW5kaWNhdGluZyB0aGUgb3JpZW50YXRpb24gb2YgdGhlIFNwbGl0dGVyIGdyb3VwLiBQb3NzaWJsZSB2YWx1ZXM6ICdob3Jpem9udGFsJywgJ3ZlcnRpY2FsJy4gc2l6ZSAtIEEgc3RyaW5nIHwgbnVtYmVyIHZhbHVlIGluZGljYXRpbmcgdGhlIHNpemUgb2YgdGhlIFNwbGl0dGVyIGdyb3VwLiBpdGVtcyAtIEFuIGFycmF5IG9mIExheW91dFBhbmVsIG9iamVjdCBkZWZpbml0aW9ucy4gcmVzaXplTW9kZSAtIEEgc3RyaW5nIGluZGljYXRpbmcgdGhlIHJlc2l6ZSBtb2RlLiBQb3NzaWJsZSB2YWx1ZXM6ICdub25lJywgJ2FkamFjZW50JywgJ2VuZCcsICdwcm9wb3J0aW9uYWwnLiByZXNpemVTdGVwIC0gQSBudW1tZXJpYyB2YWx1ZSB0aGF0IGRldGVybWluZXMgdGhlIHN0ZXAgb2YgcmVzaXppbmcuIGxpdmVSZXNpemUgLSBEZXRlcm1pbmVzIGlmIHNwbGl0dGVyIHJlc2l6aW5nIGhhcHBlbnMgd2hpbGUgZHJhZ2dpbmcgb3Igbm90LiAgIExheW91dFBhbmVsIC0gUmVwcmVzZW50cyBhIERvY2tpbmdMYXlvdXQgaXRlbSAoVGFic1dpbmRvdykuIExheW91dFBhbmVscyBjYW4gaGF2ZSBvbmUgb3IgbWFueSBpdGVtcyAoVGFiSXRlbSkuICBQcm9wZXJ0aWVzOiAgIGlkIC0gdGhlIElEIG9mIHRoZSBMYXlvdXRQYW5lbC4gYXV0b0hpZGUgLSBhIGJvb2xlYW4gcHJvcGVydHkgdGhhdCBkZXRlcm1pbmVzIGlmIHRoZSBMYXlvdXRQYW5lbCBpcyBhdXRvSGlkZGVuLiBhdXRvSGlkZVBvc2l0aW9uIC0gZGV0ZXJtaW5lcyB0aGUgYXV0b0hpZGUgcG9zaXRpb24gb2YgdGhlIGl0ZW0gaWYgJ2F1dG9IaWRlJyBwcm9wZXJ0eSBpcyBzZXQuIFBvc3NpYmxlIHZhbHVlczogJ3RvcCcsICdib3R0b20nLCAnbGVmdCcsICdyaWdodCcuIGRyb3BQb3NpdGlvbiAtIERldGVybWluZXMgdGhlIHBvc3NpYmxlIHBvc2l0aW9ucyBmb3IgdGhlIGl0ZW0gYXQgd2hpY2ggYSBuZXcgaXRlbSBjYW4gYmUgZHJvcHBlZCBhcyBhIHJlc3VsdCBvZiBkcmFnZ2luZy4gUG9zc2libGUgdmFsdWVzOiAndG9wJywgJ2JvdHRvbScsICdsZWZ0JywgJ3JpZ2h0JywgJ2NlbnRlcicsICdoZWFkZXInLCAnbGF5b3V0LXRvcCcsICdsYXlvdXQtYm90dG9tJywgJ2xheW91dC1sZWZ0JywgJ2xheW91dC1yaWdodCcuIFBvc2l0aW9ucyB3aXRoIHRoZSAnbGF5b3V0JyBwcmVmaXggcmVmbGVjdCBvbiBMYXlvdXRQYW5lbEl0ZW1zIHRoYXQgYXJlIGNoaWxkcmVuIG9mIHRoZSBMYXlvdXRQYW5lbC4gbGFiZWwgLSB0aGUgTGFiZWwgb2YgdGhlIExheW91dFBhbmVsIHdpbmRvdy4gdGFiUG9zaXRpb24gLSBEZXRlcm1pbmVzIHRoZSBwb3NpdGlvbiBvZiB0aGUgVGFiIGxhYmVscyBpbnNpZGUgdGhlIExheW91dFBhbmVsLiBsYXlvdXQgLSBkZXRlcm1pbmVzIHRoZSBEb2NraW5nTGF5b3V0IG93bmVyIG9mIHRoZSBMYXlvdXRQYW5lbC4gQWNjZXB0cyBhIHN0cmluZyBpbmRpY2F0aW5nIHRoZSBJRCBvZiBhIERvY2tpbmdMYXlvdXQgb24gdGhlIHBhZ2Ugb3IgYSBkaXJlY3QgcmVmZXJlbmNlIHRvIGl0LiBoZWFkZXJCdXR0b25zIC0gYW4gQXJyYXkgb2Ygc3RyaW5ncyB0aGF0IGRlZmluZSB0aGUgYnV0dG9ucyBpbiB0aGUgaGVhZGVyIHNlY3Rpb24gb2YgdGhlIERvY2tpbmdMYXlvdXQgaXRlbS4gdGFiQ2xvc2VCdXR0b25zIC0gYSBib29sZWFuIHByb3BlcnR5IHRoYXQgRW5hYmxlcyBvciBkaXNhYmxlcyB0aGUgY2xvc2UgYnV0dG9ucyBpbnNpZGUgZWFjaCBUYWIgaXRlbSBsYWJlbCBpbnNpZGUgdGhlIERvY2tpbmdMYXlvdXQgaXRlbS4gdGFiT3ZlcmZsb3cgLSBzYW1lIGFzICdvdmVyZmxvdycgcHJvcGVydHkgb2YganF4VGFicy4gSXQgZGVmaW5lcyB0aGUgb3ZlcmZsb3cgbW9kZSBvZiB0aGUgbGFiZWxzIG9mIHRoZSBUYWIgaXRlbXMgaW5zaWRlIGEgRG9ja2luZ0xheW91dCBpdGVtLnNlbGVjdGlvbk1vZGUgLSB0aGUgc2FtZSBhcyBqcXhUYWJzIHNlbGVjdGlvbiBtb2Rlcy4gQXBwbGllcyB0byBUYWIgaXRlbXMgaW5zaWRlIGEgRG9ja2luZ0xheW91dCBpdGVtLiB0YWJSZXNpemUgLSB0aGUgc2FtZSBhcyAncmVzaXplJyBwcm9wZXJ0eSBvZiBqcXhUYWJzLiBBbGxvd3MgcmVzaXppbmcgdGhlIFRhYiBsYWJlbHMgaW5zaWRlIHRoZSBEb2NraW5nTGF5b3V0IGl0ZW0uIGxvY2tlZCAtIExvY2tzIHRoZSBzaXplIG9mIHRoZSBpdGVtIGFuZCBkb2VzIG5vdCBhbGxvdyByZXNpemluZy4gbWF4IC0gc2V0cyB0aGUgbWF4aW11bSBzaXplIG9mIHRoZSBpdGVtLiBtaW4gLSBzZXRzIHRoZSBtaW5pbXVtIHNpemUgb2YgdGhlIGl0ZW0gc2l6ZSAtIHNldHMgdGhlIHNpemUgb2YgdGhlIGl0ZW0uIGl0ZW1zIC0gYW4gYXJyYXkgb2Ygb2JqZWN0cy4gRWFjaCBvYmplY3QgZGVmaW5lcyB0aGUgc3RydWN0dXJlIG9mIGEgTGF5b3V0UGFuZWxJdGVtLiAgIExheW91dFBhbmVsSXRlbSAtIFJlcHJlc2VudHMgYSBMYXlvdXRQYW5lbCBpdGVtIChUYWJJdGVtKS4gUHJvcGVydGllczogIGlkIC0gdGhlIElEIG9mIHRoZSBUYWIgaXRlbS4gbGFiZWwgLSBhIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIGxhYmVsIG9mIHRoZSBUYWIgaXRlbS4gY29udGVudCAtIHJlcHJlc2VudHMgdGhlIGNvbnRlbnQgb2YgdGhlIFRhYiBpdGVtLiBDYW4gYmUgYW55dGhpbmcuIHNlbGVjdGVkIC0gZGV0ZXJtaW5lcyBpZiB0aGUgaXRlbSBpcyBzZWxlY3RlZC4gQnkgZGVmYXVsdCB0aGUgZmlyc3QgYWRkZWQgaXRlbSB0byB0aGUgTGF5b3V0UGFuZWwgaXMgYXV0b21hdGljYWxseSBzZWxlY3RlZC4gZHJhZ2dhYmxlIC0gYSBib29sZWFuIHByb3BlcnR5IHRoYXQgYWxsb3dzIHRvIGRpc2FibGUgdGhlIGRyYWdnaW5nIG9mIHRoZSBUYWIgaXRlbS4gICAgICovXG5cdEBJbnB1dCgpXG5cdGdldCBsYXlvdXQoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxheW91dCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbGF5b3V0KHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubGF5b3V0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFdoZW4gZW5hYmxlZCB0aGUgcmVzaXppbmcgb3BlcmF0aW9uIGhhcHBlbnMgbGl2ZS4gQnkgZGVmYXVsdCB0aGlzIGZlYXR1cmUgaXMgbm90IGVuYWJsZWQgYW5kIHRoZSB1c2VyIHNlZXMgYSBoaWdodGxpZ2h0ZWQgYmFyIHdoaWxlIGRyYWdnaW5nIGluc3RlYWQgb2YgdGhlIGFjdHVhbCBzcGxpdHRlciBiYXIuICovXG5cdEBJbnB1dCgpXG5cdGdldCBsaXZlUmVzaXplKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubGl2ZVJlc2l6ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbGl2ZVJlc2l6ZSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5saXZlUmVzaXplID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgbGFuZ3VhZ2UuIFVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCB0aGUgcHJvcGVydHkgbWVzc2FnZXMuICAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbG9jYWxlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sb2NhbGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGxvY2FsZSh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxvY2FsZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDYWxsYmFjaywgcmVsYXRlZCB0byBsb2NhbGl6YXRpb24gbW9kdWxlLiAgKi9cblx0QElucHV0KClcblx0Z2V0IGxvY2FsaXplRm9ybWF0RnVuY3Rpb24oKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxvY2FsaXplRm9ybWF0RnVuY3Rpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGxvY2FsaXplRm9ybWF0RnVuY3Rpb24odmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sb2NhbGl6ZUZvcm1hdEZ1bmN0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyBhbiBvYmplY3Qgc3BlY2lmeWluZyBzdHJpbmdzIHVzZWQgaW4gdGhlIHdpZGdldCB0aGF0IGNhbiBiZSBsb2NhbGl6ZWQuIFVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCB0aGUgcHJvcGVydHkgbG9jYWxlLiAgKi9cblx0QElucHV0KClcblx0Z2V0IG1lc3NhZ2VzKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5tZXNzYWdlcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbWVzc2FnZXModmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5tZXNzYWdlcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBJZiB0aGUgZWxlbWVudCBpcyByZWFkb25seSwgdXNlcnMgY2Fubm90IGludGVyYWN0IHdpdGggaXQuICovXG5cdEBJbnB1dCgpXG5cdGdldCByZWFkb25seSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlYWRvbmx5IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCByZWFkb25seSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZWFkb25seSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIHZhbHVlIGluZGljYXRpbmcgd2hldGhlciB0aGUgZWxlbWVudCBpcyBhbGlnbmVkIHRvIHN1cHBvcnQgbG9jYWxlcyB1c2luZyByaWdodC10by1sZWZ0IGZvbnRzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcmlnaHRUb0xlZnQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yaWdodFRvTGVmdCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcmlnaHRUb0xlZnQodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmlnaHRUb0xlZnQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgcmVzaXplIHN0ZXAgZHVyaW5nIHJlaXNpemluZyAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcmVzaXplU3RlcCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmVzaXplU3RlcCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcmVzaXplU3RlcCh2YWx1ZTogbnVtYmVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlc2l6ZVN0ZXAgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgc25hcCBtb2RlLiBUd28gbW9kZXMgYXJlIGF2YWlsYWJsZTogICBzaW1wbGUgLSBhbGxvd3MgZHJhZ2dpbmcgb2YgYSBzaW5nbGUgdGFiIGl0ZW0gaW5zaWRlIG9yIG91dHNpZGUgdGhlIGxheW91dC4gQSBzZW1pLXRyYW5zcGFyZW50IGhpZ2hsaWdodGVyIGlzIHVzZWQgdG8gaW5kaWNhdGUgdGhlIHBvc3NpYmxlIGxvY2F0aW9ucyB3aGVyZSB0aGUgZHJhZ2dlZCBpdGVtIGNhbiBiZSBkcm9wcGVkLiBUaGUgdXNlciBoYXMgdG8gZHJvcCB0aGUgZHJhZ2dlZCBpdGVtIGluc2lkZSBvbmUgb2YgdGhlIHBvc3NpYmxlIGRyb3Agem9uZXMgaW5kaWNhdGVkIGJ5IHRoZSBoaWdobGlnaHRlci4gYWR2YW5jZWQgLSBhbGxvd3MgZHJhZ2dpbmcgb2YgYSB3aG9sZSBUYWJzV2luZG93IHdpdGggaXRlbXMgb3IgYSBzaW5nbGUgdGFiIGl0ZW0uIFVzZXMgYSBWaXN1YWwgU3R1ZGlvIHN0eWxlIGZlZWRiYWNrIHRoYXQgaW5kaWNhdGVzIHRoZSBwb3NzaWJsZSBkcm9wIGxvY2F0aW9ucy4gVGhlIHVzZXIgaGFzIHRvIGRyb3AgdGhlIHRhcmdldCBvdmVyIG9uZSBvZiB0aGUgaWNvbnMgaW5zaWRlIHRoZSBmZWVkYmFjay4gICBUaGUgZmVlZGJhY2svaGlnaGxpZ2h0ZXIgaXMgZGlzcGxheWVkIHdoZW4gdGhlIGRyYWdnaW5nIG9mIGFuIGl0ZW0gYmVnaW5zLiAgKi9cblx0QElucHV0KClcblx0Z2V0IHNuYXBNb2RlKCk6IERvY2tpbmdMYXlvdXRTbmFwTW9kZSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zbmFwTW9kZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc25hcE1vZGUodmFsdWU6IERvY2tpbmdMYXlvdXRTbmFwTW9kZSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zbmFwTW9kZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSB0aGVtZS4gVGhlbWUgZGVmaW5lcyB0aGUgbG9vayBvZiB0aGUgZWxlbWVudCAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdGhlbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRoZW1lIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0aGVtZSh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRoZW1lID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEEgZ2V0dGVyIHRoYXQgcmV0dXJucyBhbiBhcnJheSBvZiBhbGwgRG9ja2luZ0xheW91dCBpdGVtcyB0aGF0IGhhdmUgYmVlbiB1bmRvY2tlZC4gVW5kb2NrZWQgaXRlbXMgYXJlIG5vIG1vcmUgcGFydCBvZiB0aGUgTGF5b3V0J3MgaW50ZXJhbCBzdHJ1Y3R1cmUgYnV0IGNhbiBiZSBpbnNlcnRlZCBieSBkcmFnZ2luZyB0aGVtIGluLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdW5kb2NrZWRJdGVtcygpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudW5kb2NrZWRJdGVtcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdW5kb2NrZWRJdGVtcyh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnVuZG9ja2VkSXRlbXMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSWYgaXMgc2V0IHRvIHRydWUsIHRoZSBlbGVtZW50IGNhbm5vdCBiZSBmb2N1c2VkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdW5mb2N1c2FibGUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC51bmZvY3VzYWJsZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdW5mb2N1c2FibGUodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudW5mb2N1c2FibGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgdGFiIHNlbGVjdGlvbiBpcyBjaGFuZ2VkLiBOb3RlOiBDaGFuZ2UgZXZlbnQgbWF5IGJlIHRocm93biBieSBvdGhlciBKUVggQ3VzdG9tIEVsZW1lbnRzIG5lc3RlZCBpbnNpZGUgdGhlIFRhYiBpdGVtcy5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvbkNoYW5nZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSBUYWIgaXRlbSBvciBhIHdob2xlIFRhYnMgV2luZG93IGl0ZW0gKCBEb2NraW5nTGF5b3V0IGl0ZW0gKSBpcyBjbG9zZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHQqL1xuXHRAT3V0cHV0KCkgb25DbG9zZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSBUYWIgaXRlbS9UYWJzIFdpbmRvdyBpcyBhYm91dCB0byBiZSBjbG9zZWQuIFRoZSBjbG9zaW5nIG9wZXJhdGlvbiBjYW4gYmUgY2FuY2VsZWQgYnkgY2FsbGluZyBldmVudC5wcmV2ZW50RGVmYXVsdCgpIGluIHRoZSBldmVudCBoYW5kbGVyIGZ1bmN0aW9uLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Ki9cblx0QE91dHB1dCgpIG9uQ2xvc2luZzogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYW4gaXRlbSdzIHBvc2l0aW9uIGluc2lkZSB0aGUgTGF5b3V0IG9yIGl0J3Mgc2l6ZSBoYXMgYmVlbiBjaGFuZ2VkLiBJbmRpY2F0ZXMgdGhhdCBhIHN0YXRlIGNoYW5nZSBoYXMgb2NjdXJlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvblN0YXRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBpdGVtIHJlc2l6aW5nIGJlZ2lucy5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvblJlc2l6ZVN0YXJ0OiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBpdGVtIHJlc2l6aW5nIGZpbmlzaGVzLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Ki9cblx0QE91dHB1dCgpIG9uUmVzaXplRW5kOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gTWFrZXMgYSBcInNtYXJ0LXRhYnMtd2luZG93XCIgbm9kZSwgdGhhdCBpcyBhIGNoaWxkIG9mIHRoZSBMYXlvdXQsIGF1dG8gaGlkZGVuIGJ5IHBsYWNpbmcgaXQgYXQgdGhlIEJvdHRvbSBwb3NpdGlvbiBpbnNpZGUgdGhlIGVsZW1lbnQuIFRoaXMgbWVhbnMgdGhhdCB0aGUgaXRlbSB3aWxsIGJlIHBvc2l0aW9uZWQgbmVhciB0aGUgYm90dG9tIHNpZGUgb2YgdGhlIGxheW91dCBhbmQgaXQncyBjb250ZW50IHdpbGwgYmUgaGlkZGVuIHVudGlsIHRoZSB1c2VyIHNlbGVjdHMgb25lIG9mIGl0J3MgbGFiZWxzLiBcblx0KiBAcGFyYW0ge0hUTUxFbGVtZW50IHwgbnVtYmVyIHwgc3RyaW5nfSBub2RlLiBUaGUgXCJzbWFydC10YWJzLXdpbmRvd1wiIG9yIFwic21hcnQtdGFiLWl0ZW1cIiBub2RlIHRvIGFwcGVuZFxuXHQqL1xuICAgIHB1YmxpYyBhdXRvSGlkZUJvdHRvbShub2RlOiBIVE1MRWxlbWVudCB8IG51bWJlciB8IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5hdXRvSGlkZUJvdHRvbShub2RlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5hdXRvSGlkZUJvdHRvbShub2RlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gTWFrZXMgYSBcInNtYXJ0LXRhYnMtd2luZG93XCIgbm9kZSwgdGhhdCBpcyBhIGNoaWxkIG9mIHRoZSBMYXlvdXQsIGF1dG8gaGlkZGVuIGJ5IHBsYWNpbmcgaXQgYXQgdGhlIExlZnQgcG9zaXRpb24gaW5zaWRlIHRoZSBsYXlvdXQuIFRoaXMgbWVhbnMgdGhhdCB0aGUgaXRlbSB3aWxsIGJlIHBvc2l0aW9uZWQgbmVhciB0aGUgbGVmdCBzaWRlIG9mIHRoZSBsYXlvdXQgYW5kIGl0J3MgY29udGVudCB3aWxsIGJlIGhpZGRlbiB1bnRpbCB0aGUgdXNlciBzZWxlY3RzIG9uZSBvZiBpdCdzIGxhYmVscy4gXG5cdCogQHBhcmFtIHtIVE1MRWxlbWVudCB8IG51bWJlciB8IHN0cmluZ30gbm9kZS4gVGhlIFwic21hcnQtdGFicy13aW5kb3dcIiBvciBcInNtYXJ0LXRhYi1pdGVtXCIgbm9kZSB0byBhcHBlbmRcblx0Ki9cbiAgICBwdWJsaWMgYXV0b0hpZGVMZWZ0KG5vZGU6IEhUTUxFbGVtZW50IHwgbnVtYmVyIHwgc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9IaWRlTGVmdChub2RlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5hdXRvSGlkZUxlZnQobm9kZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIE1ha2VzIGEgXCJzbWFydC10YWJzLXdpbmRvd1wiIG5vZGUsIHRoYXQgaXMgYSBjaGlsZCBvZiB0aGUgTGF5b3V0LCBhdXRvIGhpZGRlbiBieSBwbGFjaW5nIGl0IGF0IHRoZSBSaWdodCBwb3NpdGlvbiBpbnNpZGUgdGhlIGxheW91dC4gVGhpcyBtZWFucyB0aGF0IHRoZSBpdGVtIHdpbGwgYmUgcG9zaXRpb25lZCBuZWFyIHRoZSByaWdodCBzaWRlIG9mIHRoZSBsYXlvdXQgYW5kIGl0J3MgY29udGVudCB3aWxsIGJlIGhpZGRlbiB1bnRpbCB0aGUgdXNlciBzZWxlY3RzIG9uZSBvZiBpdCdzIGxhYmVscy4gXG5cdCogQHBhcmFtIHtIVE1MRWxlbWVudCB8IG51bWJlciB8IHN0cmluZ30gbm9kZS4gVGhlIFwic21hcnQtdGFicy13aW5kb3dcIiBvciBcInNtYXJ0LXRhYi1pdGVtXCIgbm9kZSB0byBhcHBlbmRcblx0Ki9cbiAgICBwdWJsaWMgYXV0b0hpZGVSaWdodChub2RlOiBIVE1MRWxlbWVudCB8IG51bWJlciB8IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5hdXRvSGlkZVJpZ2h0KG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9IaWRlUmlnaHQobm9kZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIE1ha2VzIGEgXCJzbWFydC10YWJzLXdpbmRvd1wiIG5vZGUsIHRoYXQgaXMgYSBjaGlsZCBvZiB0aGUgTGF5b3V0LCBhdXRvIGhpZGRlbiBieSBwbGFjaW5nIGl0IGF0IHRoZSBUb3AgcG9zaXRpb24gaW5zaWRlIHRoZSBsYXlvdXQuIFRoaXMgbWVhbnMgdGhhdCB0aGUgaXRlbSB3aWxsIGJlIHBvc2l0aW9uZWQgbmVhciB0aGUgdG9wIHNpZGUgb2YgdGhlIGxheW91dCBhbmQgaXQncyBjb250ZW50IHdpbGwgYmUgaGlkZGVuIHVudGlsIHRoZSB1c2VyIHNlbGVjdHMgb25lIG9mIGl0J3MgbGFiZWxzLiBcblx0KiBAcGFyYW0ge0hUTUxFbGVtZW50IHwgbnVtYmVyIHwgc3RyaW5nfSBub2RlLiBUaGUgXCJzbWFydC10YWJzLXdpbmRvd1wiIG9yIFwic21hcnQtdGFiLWl0ZW1cIiBub2RlIHRvIGFwcGVuZFxuXHQqL1xuICAgIHB1YmxpYyBhdXRvSGlkZVRvcChub2RlOiBIVE1MRWxlbWVudCB8IG51bWJlciB8IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5hdXRvSGlkZVRvcChub2RlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5hdXRvSGlkZVRvcChub2RlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ2xlYXJzIHRoZSBsb2NhbFN0b3JhZ2Ugb2YgYW55IHByZXZpb3VzIGNhY2hlZCBzdGF0ZSBvZiB0aGUgRG9ja2luZ0xheW91dC4gXG5cdCovXG4gICAgcHVibGljIGNsZWFyU3RhdGUoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNsZWFyU3RhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbGVhclN0YXRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoZSBtZXRob2Qgd2lsbCByZXNldCBhbiBhdXRvaGlkZGVuIGl0ZW0gdG8gaXQncyBub3JtYWwgYmVoYXZpb3IgYW5kIHJlLWluc2VydCBpdCBhdCBhIHNwZWNpZmllZCBwb3NpdGlvbi4gSXQgY2FuIGFsc28gYmUgdXNlZCB0byBpbnNlcnQgaXRlbXMgaW50byB0aGUgRG9ja2luZ0xheW91dC4gTm90ZTogSXRlbXMgaW5zZXJ0ZWQgdmlhIHRoaXMgbWV0aG9kIGFyZSBhZGRlZCBhcyBhIHRvcCBsZXZlbCBpdGVtcy4gXG5cdCogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXIgfCBOb2RlfSBub2RlLiBBbiBhdXRvaGlkZGVuIFwic21hcnQtdGFicy13aW5kb3dcIiBpdGVtIGluc3RhbmNlIG9yIGEgbmV3IFwic21hcnQtdGFicy13aW5kb3dcIiBpbnN0YW5jZS5cblx0KiBAcmV0dXJucyB7Tm9kZX1cbiAgKi9cblx0cHVibGljIGFzeW5jIGRvY2sobm9kZSk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5kb2NrKG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSW5zZXJ0cyBhIG5ldyBUYWJzV2luZG93IGludG8gdGhlIERvY2tpbmdMYXlvdXQgb3IgY3JlYXRlcyBhIFRhYnNXaW5kb3cgaW5zdGFuY2UgZnJvbSBhbiBvYmplY3QgcGFzc2VkIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQuIFRoZSBuZXcgaXRlbSBpcyBpbnNlcnRlZCBiZWZvcmUgdGhlIHRhcmdldCBpdGVtIHdoaWNoIGNvcnJlc3BvbmRzIHRvIHRoZSBpbmRleCBwYXNzZWQgYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIHRoZSBtZXRob2QuIFxuXHQqIEBwYXJhbSB7bnVtYmVyIHwgSFRNTEVsZW1lbnQgfCBzdHJpbmd9IGluZGV4LiBUaGUgaW5kZXggdG8gaW5zZXJ0IGEgbmV3IFRhYnNXaW5kb3cgYXQuXG5cdCogQHBhcmFtIHthbnl9IGl0ZW0uIEFuIGluc3RhbmNlIG9mIGEgVGFic1dpbmRvdyBvciBhbiBPYmplY3Qgd2l0aCB0aGUgZmllbGRzIFwibGFiZWxcIiwgXCJpdGVtc1wiIGFuZCBvdGhlciBhZGRpdGlvbmFsLlxuXHQqL1xuICAgIHB1YmxpYyBpbnNlcnRCZWZvcmVJdGVtKGluZGV4OiBudW1iZXIgfCBIVE1MRWxlbWVudCB8IHN0cmluZywgaXRlbTogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lmluc2VydEJlZm9yZUl0ZW0oaW5kZXgsIGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lmluc2VydEJlZm9yZUl0ZW0oaW5kZXgsIGl0ZW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBJbnNlcnRzIGEgbmV3IFRhYnNXaW5kb3cgaW50byB0aGUgRG9ja2luZ0xheW91dCBvciBjcmVhdGVzIGEgVGFic1dpbmRvdyBpbnN0YW5jZSBmcm9tIGFuIG9iamVjdCBwYXNzZWQgYXMgdGhlIHNlY29uZCBhcmd1bWVudC4gVGhlIG5ldyBpdGVtIGlzIGluc2VydGVkIGFmdGVyIHRoZSB0YXJnZXQgaXRlbSB3aGljaCBjb3JyZXNwb25kcyB0byB0aGUgaW5kZXggcGFzc2VkIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byB0aGUgbWV0aG9kLiBcblx0KiBAcGFyYW0ge251bWJlciB8IEhUTUxFbGVtZW50IHwgc3RyaW5nfSBpbmRleC4gVGhlIGluZGV4IHRvIGluc2VydCBhIG5ldyBUYWJzV2luZG93IGF0LlxuXHQqIEBwYXJhbSB7YW55fSBpdGVtLiBBbiBpbnN0YW5jZSBvZiBhIFRhYnNXaW5kb3cgb3IgYW4gT2JqZWN0IHdpdGggdGhlIGZpZWxkcyBcImxhYmVsXCIsIFwiaXRlbXNcIiBhbmQgb3RoZXIgYWRkaXRpb25hbC5cblx0Ki9cbiAgICBwdWJsaWMgaW5zZXJ0QWZ0ZXJJdGVtKGluZGV4OiBudW1iZXIgfCBIVE1MRWxlbWVudCB8IHN0cmluZywgaXRlbTogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lmluc2VydEFmdGVySXRlbShpbmRleCwgaXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5zZXJ0QWZ0ZXJJdGVtKGluZGV4LCBpdGVtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSW5zZXJ0cyBhIG5ldyBUYWJzV2luZG93IGludG8gdGhlIERvY2tpbmdMYXlvdXQgb3IgY3JlYXRlcyBhIFRhYnNXaW5kb3cgaW5zdGFuY2UgZnJvbSBhbiBvYmplY3QgcGFzc2VkIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQuIFRoZSBuZXcgaXRlbSBpcyBpbnNlcnRlZCBieSBzcGxpdHRpbmcgIHRoZSB0YXJnZXQgaXRlbSB3aGljaCBjb3JyZXNwb25kcyB0byB0aGUgaW5kZXggcGFzc2VkIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byB0aGUgbWV0aG9kIGluIHR3byBhbmQgcGxhY2luZyB0aGUgbmV3IGl0ZW0gYXMgaXQncyBsZWZ0IG5laWdoYm91ciBob3Jpem9udGFsbHkuIFxuXHQqIEBwYXJhbSB7bnVtYmVyIHwgSFRNTEVsZW1lbnQgfCBzdHJpbmd9IGluZGV4LiBUaGUgaW5kZXggdG8gaW5zZXJ0IGEgbmV3IFRhYnNXaW5kb3cgYXQuXG5cdCogQHBhcmFtIHthbnl9IGl0ZW0uIEFuIGluc3RhbmNlIG9mIGEgVGFic1dpbmRvdyBvciBhbiBPYmplY3Qgd2l0aCB0aGUgZmllbGRzIFwibGFiZWxcIiwgXCJpdGVtc1wiIGFuZCBvdGhlciBhZGRpdGlvbmFsLlxuXHQqL1xuICAgIHB1YmxpYyBpbnNlcnRJbnRvTGVmdChpbmRleDogbnVtYmVyIHwgSFRNTEVsZW1lbnQgfCBzdHJpbmcsIGl0ZW06IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5pbnNlcnRJbnRvTGVmdChpbmRleCwgaXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5zZXJ0SW50b0xlZnQoaW5kZXgsIGl0ZW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBJbnNlcnRzIGEgbmV3IFRhYnNXaW5kb3cgaW50byB0aGUgRG9ja2luZ0xheW91dCBvciBjcmVhdGVzIGEgVGFic1dpbmRvdyBpbnN0YW5jZSBmcm9tIGFuIG9iamVjdCBwYXNzZWQgYXMgdGhlIHNlY29uZCBhcmd1bWVudC4gVGhlIG5ldyBpdGVtIGlzIGluc2VydGVkIGJ5IHNwbGl0dGluZyAgdGhlIHRhcmdldCBpdGVtIHdoaWNoIGNvcnJlc3BvbmRzIHRvIHRoZSBpbmRleCBwYXNzZWQgYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIHRoZSBtZXRob2QgaW4gdHdvIGFuZCBwbGFjaW5nIHRoZSBuZXcgaXRlbSBhcyBpdCdzIHJpZ2h0IG5laWdoYm91ciBob3Jpem9udGFsbHkuIFxuXHQqIEBwYXJhbSB7bnVtYmVyIHwgSFRNTEVsZW1lbnQgfCBzdHJpbmd9IGluZGV4LiBUaGUgaW5kZXggdG8gaW5zZXJ0IGEgbmV3IFRhYnNXaW5kb3cgYXQuXG5cdCogQHBhcmFtIHthbnl9IGl0ZW0uIEFuIGluc3RhbmNlIG9mIGEgVGFic1dpbmRvdyBvciBhbiBPYmplY3Qgd2l0aCB0aGUgZmllbGRzIFwibGFiZWxcIiwgXCJpdGVtc1wiIGFuZCBvdGhlciBhZGRpdGlvbmFsLlxuXHQqL1xuICAgIHB1YmxpYyBpbnNlcnRJbnRvUmlnaHQoaW5kZXg6IG51bWJlciB8IEhUTUxFbGVtZW50IHwgc3RyaW5nLCBpdGVtOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5zZXJ0SW50b1JpZ2h0KGluZGV4LCBpdGVtKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5pbnNlcnRJbnRvUmlnaHQoaW5kZXgsIGl0ZW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBJbnNlcnRzIGEgbmV3IFRhYnNXaW5kb3cgaW50byB0aGUgRG9ja2luZ0xheW91dCBvciBjcmVhdGVzIGEgVGFic1dpbmRvdyBpbnN0YW5jZSBmcm9tIGFuIG9iamVjdCBwYXNzZWQgYXMgdGhlIHNlY29uZCBhcmd1bWVudC4gVGhlIG5ldyBpdGVtIGlzIGluc2VydGVkIGJ5IHNwbGl0dGluZyAgdGhlIHRhcmdldCBpdGVtIHdoaWNoIGNvcnJlc3BvbmRzIHRvIHRoZSBpbmRleCBwYXNzZWQgYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIHRoZSBtZXRob2QgaW4gdHdvIGFuZCBwbGFjaW5nIHRoZSBuZXcgaXRlbSBhcyBpdCdzIHRvcCBuZWlnaGJvdXIgdmVydGljYWxseS4gXG5cdCogQHBhcmFtIHtudW1iZXIgfCBIVE1MRWxlbWVudCB8IHN0cmluZ30gaW5kZXguIFRoZSBpbmRleCB0byBpbnNlcnQgYSBuZXcgVGFic1dpbmRvdyBhdC5cblx0KiBAcGFyYW0ge2FueX0gaXRlbS4gQW4gaW5zdGFuY2Ugb2YgYSBUYWJzV2luZG93IG9yIGFuIE9iamVjdCB3aXRoIHRoZSBmaWVsZHMgXCJsYWJlbFwiLCBcIml0ZW1zXCIgYW5kIG90aGVyIGFkZGl0aW9uYWwuXG5cdCovXG4gICAgcHVibGljIGluc2VydEludG9Ub3AoaW5kZXg6IG51bWJlciB8IEhUTUxFbGVtZW50IHwgc3RyaW5nLCBpdGVtOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5zZXJ0SW50b1RvcChpbmRleCwgaXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5zZXJ0SW50b1RvcChpbmRleCwgaXRlbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEluc2VydHMgYSBuZXcgVGFic1dpbmRvdyBpbnRvIHRoZSBEb2NraW5nTGF5b3V0IG9yIGNyZWF0ZXMgYSBUYWJzV2luZG93IGluc3RhbmNlIGZyb20gYW4gb2JqZWN0IHBhc3NlZCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50LiBUaGUgbmV3IGl0ZW0gaXMgaW5zZXJ0ZWQgYnkgc3BsaXR0aW5nICB0aGUgdGFyZ2V0IGl0ZW0gd2hpY2ggY29ycmVzcG9uZHMgdG8gdGhlIGluZGV4IHBhc3NlZCBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gdGhlIG1ldGhvZCBpbiB0d28gYW5kIHBsYWNpbmcgdGhlIG5ldyBpdGVtIGFzIGl0J3MgYm90dG9tIG5laWdoYm91ciB2ZXJ0aWNhbGx5LiBcblx0KiBAcGFyYW0ge251bWJlciB8IEhUTUxFbGVtZW50IHwgc3RyaW5nfSBpbmRleC4gVGhlIGluZGV4IHRvIGluc2VydCBhIG5ldyBUYWJzV2luZG93IGF0LlxuXHQqIEBwYXJhbSB7YW55fSBpdGVtLiBBbiBpbnN0YW5jZSBvZiBhIFRhYnNXaW5kb3cgb3IgYW4gT2JqZWN0IHdpdGggdGhlIGZpZWxkcyBcImxhYmVsXCIsIFwiaXRlbXNcIiBhbmQgb3RoZXIgYWRkaXRpb25hbC5cblx0Ki9cbiAgICBwdWJsaWMgaW5zZXJ0SW50b0JvdHRvbShpbmRleDogbnVtYmVyIHwgSFRNTEVsZW1lbnQgfCBzdHJpbmcsIGl0ZW06IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5pbnNlcnRJbnRvQm90dG9tKGluZGV4LCBpdGVtKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5pbnNlcnRJbnRvQm90dG9tKGluZGV4LCBpdGVtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSW5zZXJ0cyBhIG5ldyBUYWJzV2luZG93IGludG8gdGhlIERvY2tpbmdMYXlvdXQgb3IgY3JlYXRlcyBhIFRhYnNXaW5kb3cgaW5zdGFuY2UgZnJvbSBhbiBvYmplY3QgcGFzc2VkIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQuIFRoZSBuZXcgaXRlbSBpcyBpbnNlcnRlZCBhcyBhIHRvcCBsZXZlbCBpdGVtIHBvc2l0aW9uZWQgYXQgdGhlIHRvcCBzaWRlIGluc2lkZSB0aGUgTGF5b3V0LiBcblx0KiBAcGFyYW0ge2FueX0gaXRlbS4gQW4gaW5zdGFuY2Ugb2YgYSBUYWJzV2luZG93IG9yIGFuIE9iamVjdCB3aXRoIHRoZSBmaWVsZHMgXCJsYWJlbFwiLCBcIml0ZW1zXCIgYW5kIG90aGVyIGFkZGl0aW9uYWwuXG5cdCovXG4gICAgcHVibGljIGluc2VydExheW91dFRvcChpdGVtOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5zZXJ0TGF5b3V0VG9wKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lmluc2VydExheW91dFRvcChpdGVtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSW5zZXJ0cyBhIG5ldyBUYWJzV2luZG93IGludG8gdGhlIERvY2tpbmdMYXlvdXQgb3IgY3JlYXRlcyBhIFRhYnNXaW5kb3cgaW5zdGFuY2UgZnJvbSBhbiBvYmplY3QgcGFzc2VkIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQuIFRoZSBuZXcgaXRlbSBpcyBpbnNlcnRlZCBhcyBhIHRvcCBsZXZlbCBpdGVtIHBvc2l0aW9uZWQgYXQgdGhlIGJvdHRvbSBzaWRlIGluc2lkZSB0aGUgTGF5b3V0LiBcblx0KiBAcGFyYW0ge2FueX0gaXRlbS4gQW4gaW5zdGFuY2Ugb2YgYSBUYWJzV2luZG93IG9yIGFuIE9iamVjdCB3aXRoIHRoZSBmaWVsZHMgXCJsYWJlbFwiLCBcIml0ZW1zXCIgYW5kIG90aGVyIGFkZGl0aW9uYWwuXG5cdCovXG4gICAgcHVibGljIGluc2VydExheW91dEJvdHRvbShpdGVtOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5zZXJ0TGF5b3V0Qm90dG9tKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lmluc2VydExheW91dEJvdHRvbShpdGVtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSW5zZXJ0cyBhIG5ldyBUYWJzV2luZG93IGludG8gdGhlIERvY2tpbmdMYXlvdXQgb3IgY3JlYXRlcyBhIFRhYnNXaW5kb3cgaW5zdGFuY2UgZnJvbSBhbiBvYmplY3QgcGFzc2VkIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQuIFRoZSBuZXcgaXRlbSBpcyBpbnNlcnRlZCBhcyBhIHRvcCBsZXZlbCBpdGVtIHBvc2l0aW9uZWQgYXQgdGhlIGxlZnQgc2lkZSBpbnNpZGUgdGhlIExheW91dC4gXG5cdCogQHBhcmFtIHthbnl9IGl0ZW0uIEFuIGluc3RhbmNlIG9mIGEgVGFic1dpbmRvdyBvciBhbiBPYmplY3Qgd2l0aCB0aGUgZmllbGRzIFwibGFiZWxcIiwgXCJpdGVtc1wiIGFuZCBvdGhlciBhZGRpdGlvbmFsLlxuXHQqL1xuICAgIHB1YmxpYyBpbnNlcnRMYXlvdXRMZWZ0KGl0ZW06IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5pbnNlcnRMYXlvdXRMZWZ0KGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lmluc2VydExheW91dExlZnQoaXRlbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEluc2VydHMgYSBuZXcgVGFic1dpbmRvdyBpbnRvIHRoZSBEb2NraW5nTGF5b3V0IG9yIGNyZWF0ZXMgYSBUYWJzV2luZG93IGluc3RhbmNlIGZyb20gYW4gb2JqZWN0IHBhc3NlZCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50LiBUaGUgbmV3IGl0ZW0gaXMgaW5zZXJ0ZWQgYXMgYSB0b3AgbGV2ZWwgaXRlbSBwb3NpdGlvbmVkIGF0IHRoZSByaWdodCBpbnNpZGUgdGhlIExheW91dC4gXG5cdCogQHBhcmFtIHthbnl9IGl0ZW0uIEFuIGluc3RhbmNlIG9mIGEgVGFic1dpbmRvdyBvciBhbiBPYmplY3Qgd2l0aCB0aGUgZmllbGRzIFwibGFiZWxcIiwgXCJpdGVtc1wiIGFuZCBvdGhlciBhZGRpdGlvbmFsLlxuXHQqL1xuICAgIHB1YmxpYyBpbnNlcnRMYXlvdXRSaWdodChpdGVtOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5zZXJ0TGF5b3V0UmlnaHQoaXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5zZXJ0TGF5b3V0UmlnaHQoaXRlbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEluc2VydHMgYSBuZXcgVGFic1dpbmRvdyBpbnRvIHRoZSBEb2NraW5nTGF5b3V0IG9yIGNyZWF0ZXMgYSBUYWJzV2luZG93IGluc3RhbmNlIGZyb20gYW4gb2JqZWN0IHBhc3NlZCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50LiBUaGUgdGFyZ2V0IGl0ZW0gYW5kIGl0J3MgbmVpZ2hib3VyIGl0ZW1zIGFyZSBwbGFjZWQgaW5zaWRlIGEgbmV3IHNwbGl0dGVyIGl0ZW0gdGhhdCBhY3RzIGFzIHRoZSBuZXcgbmVnaGJvdXIgb2YgdGhlIG5ld2x5IGFkZGVkIGl0ZW0gdmlhIHRoaXMgbWV0aG9kLiBUaGUgbmV3IGl0ZW0gaXMgaW5zZXJ0ZWQgYWJvdmUgdGhlIHRhcmdldCAoIGF0IHBvc2l0aW9uIFRvcCkuIFxuXHQqIEBwYXJhbSB7bnVtYmVyIHwgSFRNTEVsZW1lbnQgfCBzdHJpbmd9IGluZGV4LiBUaGUgaW5kZXggdG8gaW5zZXJ0IGEgbmV3IFRhYnNXaW5kb3cgYXQuXG5cdCogQHBhcmFtIHthbnl9IHRhYnNXaW5kb3cuIEFuIGluc3RhbmNlIG9mIGEgVGFic1dpbmRvdyBvciBhbiBPYmplY3Qgd2l0aCB0aGUgZmllbGRzIFwibGFiZWxcIiwgXCJpdGVtc1wiIGFuZCBvdGhlciBhZGRpdGlvbmFsLlxuXHQqL1xuICAgIHB1YmxpYyBpbnNlcnRPdXRzaWRlVGFyZ2V0R3JvdXBUb3AoaW5kZXg6IG51bWJlciB8IEhUTUxFbGVtZW50IHwgc3RyaW5nLCB0YWJzV2luZG93OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5zZXJ0T3V0c2lkZVRhcmdldEdyb3VwVG9wKGluZGV4LCB0YWJzV2luZG93KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5pbnNlcnRPdXRzaWRlVGFyZ2V0R3JvdXBUb3AoaW5kZXgsIHRhYnNXaW5kb3cpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBJbnNlcnRzIGEgbmV3IFRhYnNXaW5kb3cgaW50byB0aGUgRG9ja2luZ0xheW91dCBvciBjcmVhdGVzIGEgVGFic1dpbmRvdyBpbnN0YW5jZSBmcm9tIGFuIG9iamVjdCBwYXNzZWQgYXMgdGhlIHNlY29uZCBhcmd1bWVudC4gVGhlIHRhcmdldCBpdGVtIGFuZCBpdCdzIG5laWdoYm91ciBpdGVtcyBhcmUgcGxhY2VkIGluc2lkZSBhIG5ldyBzcGxpdHRlciBpdGVtIHRoYXQgYWN0cyBhcyB0aGUgbmV3IG5lZ2hib3VyIG9mIHRoZSBuZXdseSBhZGRlZCBpdGVtIHZpYSB0aGlzIG1ldGhvZC4gVGhlIG5ldyBpdGVtIGlzIGluc2VydGVkIGJlbGxvdyB0aGUgdGFyZ2V0ICggYXQgcG9zaXRpb24gQm90dG9tKS4gXG5cdCogQHBhcmFtIHtudW1iZXIgfCBIVE1MRWxlbWVudCB8IHN0cmluZ30gaW5kZXguIFRoZSBpbmRleCB0byBpbnNlcnQgYSBuZXcgVGFic1dpbmRvdyBhdC5cblx0KiBAcGFyYW0ge2FueX0gdGFic1dpbmRvdy4gQW4gaW5zdGFuY2Ugb2YgYSBUYWJzV2luZG93IG9yIGFuIE9iamVjdCB3aXRoIHRoZSBmaWVsZHMgXCJsYWJlbFwiLCBcIml0ZW1zXCIgYW5kIG90aGVyIGFkZGl0aW9uYWwuXG5cdCovXG4gICAgcHVibGljIGluc2VydE91dHNpZGVUYXJnZXRHcm91cEJvdHRvbShpbmRleDogbnVtYmVyIHwgSFRNTEVsZW1lbnQgfCBzdHJpbmcsIHRhYnNXaW5kb3c6IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5pbnNlcnRPdXRzaWRlVGFyZ2V0R3JvdXBCb3R0b20oaW5kZXgsIHRhYnNXaW5kb3cpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lmluc2VydE91dHNpZGVUYXJnZXRHcm91cEJvdHRvbShpbmRleCwgdGFic1dpbmRvdyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEluc2VydHMgYSBuZXcgVGFic1dpbmRvdyBpbnRvIHRoZSBEb2NraW5nTGF5b3V0IG9yIGNyZWF0ZXMgYSBUYWJzV2luZG93IGluc3RhbmNlIGZyb20gYW4gb2JqZWN0IHBhc3NlZCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50LiBUaGUgdGFyZ2V0IGl0ZW0gYW5kIGl0J3MgbmVpZ2hib3VyIGl0ZW1zIGFyZSBwbGFjZWQgaW5zaWRlIGEgbmV3IHNwbGl0dGVyIGl0ZW0gdGhhdCBhY3RzIGFzIHRoZSBuZXcgbmVnaGJvdXIgb2YgdGhlIG5ld2x5IGFkZGVkIGl0ZW0gdmlhIHRoaXMgbWV0aG9kLiBUaGUgbmV3IGl0ZW0gaXMgaW5zZXJ0ZWQgYmVmb3JlIHRoZSB0YXJnZXQgKCBhdCBwb3NpdGlvbiBMZWZ0KS4gXG5cdCogQHBhcmFtIHtudW1iZXIgfCBIVE1MRWxlbWVudCB8IHN0cmluZ30gaW5kZXguIFRoZSBpbmRleCB0byBpbnNlcnQgYSBuZXcgVGFic1dpbmRvdyBhdC5cblx0KiBAcGFyYW0ge2FueX0gdGFic1dpbmRvdy4gQW4gaW5zdGFuY2Ugb2YgYSBUYWJzV2luZG93IG9yIGFuIE9iamVjdCB3aXRoIHRoZSBmaWVsZHMgXCJsYWJlbFwiLCBcIml0ZW1zXCIgYW5kIG90aGVyIGFkZGl0aW9uYWwuXG5cdCovXG4gICAgcHVibGljIGluc2VydE91dHNpZGVUYXJnZXRHcm91cExlZnQoaW5kZXg6IG51bWJlciB8IEhUTUxFbGVtZW50IHwgc3RyaW5nLCB0YWJzV2luZG93OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5zZXJ0T3V0c2lkZVRhcmdldEdyb3VwTGVmdChpbmRleCwgdGFic1dpbmRvdyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5zZXJ0T3V0c2lkZVRhcmdldEdyb3VwTGVmdChpbmRleCwgdGFic1dpbmRvdyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEluc2VydHMgYSBuZXcgVGFic1dpbmRvdyBpbnRvIHRoZSBEb2NraW5nTGF5b3V0IG9yIGNyZWF0ZXMgYSBUYWJzV2luZG93IGluc3RhbmNlIGZyb20gYW4gb2JqZWN0IHBhc3NlZCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50LiBUaGUgdGFyZ2V0IGl0ZW0gYW5kIGl0J3MgbmVpZ2hib3VyIGl0ZW1zIGFyZSBwbGFjZWQgaW5zaWRlIGEgbmV3IHNwbGl0dGVyIGl0ZW0gdGhhdCBhY3RzIGFzIHRoZSBuZXcgbmVnaGJvdXIgb2YgdGhlIG5ld2x5IGFkZGVkIGl0ZW0gdmlhIHRoaXMgbWV0aG9kLiBUaGUgbmV3IGl0ZW0gaXMgaW5zZXJ0ZWQgYWZ0ZXIgdGhlIHRhcmdldCAoIGF0IHBvc2l0aW9uIFJpZ2h0KS4gXG5cdCogQHBhcmFtIHtudW1iZXIgfCBIVE1MRWxlbWVudCB8IHN0cmluZ30gaW5kZXguIFRoZSBpbmRleCB0byBpbnNlcnQgYSBuZXcgVGFic1dpbmRvdyBhdC5cblx0KiBAcGFyYW0ge2FueX0gdGFic1dpbmRvdy4gQW4gaW5zdGFuY2Ugb2YgYSBUYWJzV2luZG93IG9yIGFuIE9iamVjdCB3aXRoIHRoZSBmaWVsZHMgXCJsYWJlbFwiLCBcIml0ZW1zXCIgYW5kIG90aGVyIGFkZGl0aW9uYWwuXG5cdCovXG4gICAgcHVibGljIGluc2VydE91dHNpZGVUYXJnZXRHcm91cFJpZ2h0KGluZGV4OiBudW1iZXIgfCBIVE1MRWxlbWVudCB8IHN0cmluZywgdGFic1dpbmRvdzogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lmluc2VydE91dHNpZGVUYXJnZXRHcm91cFJpZ2h0KGluZGV4LCB0YWJzV2luZG93KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5pbnNlcnRPdXRzaWRlVGFyZ2V0R3JvdXBSaWdodChpbmRleCwgdGFic1dpbmRvdyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoZSBtZXRob2QgcmV0dXJucyBhbiBhcnJheSBvZiBhbGwgYXV0b2hpZGRlbiBpdGVtcy4gXG5cdCogQHBhcmFtIHtzdHJpbmd9IG9yaWVudGF0aW9uPy4gRGV0ZXJtaW5lcyB3aGljaCBhdXRvIGhpZGRlbiBpdGVtcyB0byByZXR1cm4gKCB2ZXJ0aWNhbCBvciBob3Jpem9udGFsICkuIElmIG5vdCBzZXQgdGhlIG1ldGhvZCB3aWxsIHJldHVybiBhbGwgYXV0b2hpZGRlbiBpdGVtcy4gUG9zc2libGUgdmFsdWVzOiAndmVydGljYWwnLCAnaG9yaXpvbnRhbCcuXG5cdCogQHJldHVybnMge2FueVtdfVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0QXV0b0hpZGVJdGVtcyhvcmllbnRhdGlvbj8pOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0QXV0b0hpZGVJdGVtcyhvcmllbnRhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGUgbWV0aG9kIHJldHVybnMgdGhlIGluZGV4IG9mIGEgdGFyZ2V0IGl0ZW0uIFxuXHQqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IG5vZGUuIFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSB0YXJnZXQgaXRlbS5cblx0KiBAcmV0dXJucyB7bnVtYmVyfVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0SW5kZXgobm9kZSk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRJbmRleChub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJldHVybnMgYW4gYXJyYXkgb2Ygb2JqZWN0cyByZXByZXNlbnRpbmcgdGhlIGN1cnJlbnQgc3RydWN0dXJlIG9mIHRoZSBlbGVtZW50LiBFYWNoIG9iamVjdCByZXByZXNlbnRzIGEgTGF5b3V0IGl0ZW0gd2l0aCBpdCdzIHNldHRpbmdzIGFuZCBoaWVyYXJjaHkuIFxuXHQqIEBwYXJhbSB7Ym9vbGVhbn0gbm9JbnN0YW5jZXM/LiBEZXRlcm1pbmVzIGlmIHRoZSByZXR1cm5lZCBhcnJheSB3aWxsIGNvbnRhaW4gSFRNTCByZWZlcmVuY2VzIG9yIG5vdC4gV2hlbiBzYXZpbmcgdG8gbG9jYWxTdG9yYWdlIHRoZSByZXN1bHRlZCBhcnJheSBzaG91bGQgbm90IGNvbnRhaW4gYW55IEhUTUxFbGVtZW50IHJlZmVyZW5jZXMuXG5cdCogQHJldHVybnMge2FueVtdfVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0U3RhdGUobm9JbnN0YW5jZXM/KTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldFN0YXRlKG5vSW5zdGFuY2VzKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJldHVybnMgdGhlIFNwbGl0dGVyIHBhcmVudCBvZiBhIExheW91dCBpdGVtIFxuXHQqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGl0ZW0/LiBEb2NraW5nTGF5b3V0IGl0ZW1cblx0KiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRJdGVtR3JvdXBFbGVtZW50KGl0ZW0/KTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldEl0ZW1Hcm91cEVsZW1lbnQoaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIGEgSlNPTiBhcnJheSBvZiBvYmplY3RzIHJlcHJlc2VudGluZyB0aGUgY3VycmVudCBzdHJ1Y3R1cmUgb2YgdGhlIGVsZW1lbnQuIFJlYWR5IHRvIGJlIHBlcnNpc3RlZCB0byBMb2NhbFN0b3JhZ2UuIFxuXHQqIEByZXR1cm5zIHthbnlbXX1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldEpTT05TdHJ1Y3R1cmUoKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldEpTT05TdHJ1Y3R1cmUoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIExvYWRzIGEgcHJldmlvdXNseSBzYXZlZCBzdGF0ZSBvZiB0aGUgZWxlbWVudC4gSWYgbm8gc3RhdGUgaXMgcHJvdmlkZWQgYXMgYW4gYXJndW1lbnQgdGhlIG1ldGhvZCB3aWxsIGRvIGEgbG9jYWxTdG9yYWdlIGxvb2t1cC4gXG5cdCogQHBhcmFtIHthbnlbXX0gc3RhdGU/LiBBbiBhcnJheSBvZiBvYmplY3RzIHRoYXQgcmVwcmVzZW50cyBhIGNhY2hlZCBzdGF0ZSBvZiB0aGUgRG9ja2luZ0xheW91dC4gVGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSAnc2F2ZVN0YXRlJyBtZXRob2QuXG5cdCovXG4gICAgcHVibGljIGxvYWRTdGF0ZShzdGF0ZT86IGFueVtdKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmxvYWRTdGF0ZShzdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQubG9hZFN0YXRlKHN0YXRlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVtb3ZlcyBhIERvY2tpbmdMYXlvdXQgaXRlbSAoVGFic1dpbmRvdykgZnJvbSB0aGUgZWxlbWVudC4gXG5cdCogQHBhcmFtIHtudW1iZXIgfCBIVE1MRWxlbWVudCB8IHN0cmluZ30gaW5kZXguIFRoZSBpbmRleCBvZiB0aGUgVGFic1dpbmRvdyB0byByZW1vdmUgb3IgYSByZWZlcmVuY2UgdG8gaXQuXG5cdCovXG4gICAgcHVibGljIHJlbW92ZUF0KGluZGV4OiBudW1iZXIgfCBIVE1MRWxlbWVudCB8IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVBdChpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVtb3ZlQXQoaW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZW1vdmVzIGFsbCBpdGVtcyBmcm9tIHRoZSBlbGVtZW50LiBcblx0Ki9cbiAgICBwdWJsaWMgcmVtb3ZlQWxsKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVBbGwoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVBbGwoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVtb3ZlcyBhIFwic21hcnQtdGFicy13aW5kb3dcIiBub2RlIHRoYXQgaXMgYSBEb2NraW5nTGF5b3V0IGl0ZW0uIFxuXHQqIEBwYXJhbSB7Tm9kZX0gbm9kZS4gVGhlIFwic21hcnQtdGFicy13aW5kb3dcIiBub2RlIHRvIHJlbW92ZS5cblx0KiBAcmV0dXJucyB7Tm9kZX1cbiAgKi9cblx0cHVibGljIGFzeW5jIHJlbW92ZUNoaWxkKG5vZGUpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTYXZlcyB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgRG9ja2luZ0xheW91dCB0byBMb2NhbFN0b3JhZ2UuIFRoZSBzdGF0ZSBpbmNsdWRlcyB0aGUgaGllcmFyY2h5IGFuZCBzaXplIG9mIHRoZSBpdGVtcy4gXG5cdCovXG4gICAgcHVibGljIHNhdmVTdGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2F2ZVN0YXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2F2ZVN0YXRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoZSBtZXRob2QgdW5kb2Nrcy9yZW1vdmVzIGFuIGl0ZW0gZnJvbSB0aGUgTGF5b3V0IGFuZCBwbGFjZXMgaXQgYXQgdGhlIHNhbWUgcG9zaXRpb24gYnV0IGl0J3Mgbm8gbW9yZSBwYXJ0IG9mIHRoZSBsYXlvdXQuIFRoZSBpdGVtIGJlY29tZXMgYW4gJ291dGhlcicgaXRlbSB0aGF0IGNhbiBiZSByZWluc2VydGVkIGF0IGFueSB0aW1lLiBcblx0KiBAcGFyYW0ge3N0cmluZyB8IG51bWJlciB8IE5vZGV9IG5vZGUuIEEgXCJzbWFydC10YWJzLXdpbmRvd1wiIGluc3RhbmNlIHRoYXQgaXMgcGFydCBvZiB0aGUgRG9ja2luZ0xheW91dC5cblx0Ki9cbiAgICBwdWJsaWMgdW5kb2NrKG5vZGU6IHN0cmluZyB8IG51bWJlciB8IE5vZGUpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQudW5kb2NrKG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnVuZG9jayhub2RlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVXBkYXRlcyBhIFRhYnNXaW5kb3cgYW5kIGl0J3MgY29udGVudHMuIFxuXHQqIEBwYXJhbSB7bnVtYmVyIHwgSFRNTEVsZW1lbnQgfCBzdHJpbmd9IGluZGV4LiBUaGUgaW5kZXggb2YgdGhlIFRhYnNXaW5kb3cgdG8gdXBkYXRlLlxuXHQqIEBwYXJhbSB7YW55fSBzZXR0aW5ncy4gQW4gb2JqZWN0IHRoYXQgY29udGFpbnMgdGhlIG5ldyBzZXR0aW5ncyBmb3IgdGhlIFRhYnNXaW5kb3cgaXRlbS4gU2V0dGluZ3Mgb2JqZWN0IGlzIHRoZSBzYW1lIGFzIGRlZmluaW5nIGEgbmV3IFRhYnNXaW5kb3cgd2l0aCB0aGUgZXhjZXB0aW9uIG9mICdpdGVtcycgYXJyYXkgd2hlcmUgdGhlIGl0ZW1zIGFyZSBkZWZpbmVkLiBJbiBvcmRlciB0byBjaGFuZ2UgdGhlIGxhYmVsIG9yIGNvbnRlbnQgb2YgYSBUYWIgaXRlbSB0aGUgdXNlciBoYXMgdG8gc3BlY2lmeSB0aGUgaW5kZXggb2YgdGhlIHRhcmdldCB0YWIgaXRlbS5cblx0Ki9cbiAgICBwdWJsaWMgdXBkYXRlKGluZGV4OiBudW1iZXIgfCBIVE1MRWxlbWVudCB8IHN0cmluZywgc2V0dGluZ3M6IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC51cGRhdGUoaW5kZXgsIHNldHRpbmdzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC51cGRhdGUoaW5kZXgsIHNldHRpbmdzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cblx0Z2V0IGlzUmVuZGVyZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkIDogZmFsc2U7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0fVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cbiAgICAgIHRoYXQub25DcmVhdGUuZW1pdCh0aGF0Lm5hdGl2ZUVsZW1lbnQpO1xuXG5cdFx0U21hcnQuUmVuZGVyKCk7XG5cblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc21hcnQtYW5ndWxhcicpO1xuXG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7IHRoYXQub25SZWFkeS5lbWl0KHRoYXQubmF0aXZlRWxlbWVudCk7IH0pO1xuXHRcdHRoaXMubGlzdGVuKCk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLnVubGlzdGVuKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdFx0aWYgKHRoaXMubmF0aXZlRWxlbWVudCAmJiB0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuXHRcdFx0Zm9yIChjb25zdCBwcm9wTmFtZSBpbiBjaGFuZ2VzKSB7XG5cdFx0XHRcdGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuXHRcdFx0XHRcdHRoaXMubmF0aXZlRWxlbWVudFtwcm9wTmFtZV0gPSBjaGFuZ2VzW3Byb3BOYW1lXS5jdXJyZW50VmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEFkZCBldmVudCBsaXN0ZW5lcnMuICovXG5cdHByaXZhdGUgbGlzdGVuKCk6IHZvaWQge1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5nZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNoYW5nZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5nZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2Nsb3NlSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ2xvc2UuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2Nsb3NlSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY2xvc2luZ0hhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNsb3NpbmcuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2luZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY2xvc2luZ0hhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3N0YXRlQ2hhbmdlSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uU3RhdGVDaGFuZ2UuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3RhdGVDaGFuZ2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3N0YXRlQ2hhbmdlSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1sncmVzaXplU3RhcnRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25SZXNpemVTdGFydC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdyZXNpemVTdGFydCcsIHRoYXQuZXZlbnRIYW5kbGVyc1sncmVzaXplU3RhcnRIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydyZXNpemVFbmRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25SZXNpemVFbmQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplRW5kJywgdGhhdC5ldmVudEhhbmRsZXJzWydyZXNpemVFbmRIYW5kbGVyJ10pO1xuXG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJlbW92ZSBldmVudCBsaXN0ZW5lcnMuICovXG5cdHByaXZhdGUgdW5saXN0ZW4oKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5nZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snY2hhbmdlSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjbG9zZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgdGhhdC5ldmVudEhhbmRsZXJzWydjbG9zZUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY2xvc2luZ0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Nsb3NpbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2Nsb3NpbmdIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3N0YXRlQ2hhbmdlSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc3RhdGVDaGFuZ2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3N0YXRlQ2hhbmdlSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydyZXNpemVTdGFydEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZVN0YXJ0JywgdGhhdC5ldmVudEhhbmRsZXJzWydyZXNpemVTdGFydEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1sncmVzaXplRW5kSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplRW5kJywgdGhhdC5ldmVudEhhbmRsZXJzWydyZXNpemVFbmRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHR9XG59XG4iXX0=