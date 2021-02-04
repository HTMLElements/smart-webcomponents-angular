import * as tslib_1 from "tslib";
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Smart } from './smart.element';
var DockingLayoutComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DockingLayoutComponent, _super);
    function DockingLayoutComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        /** @description This event is triggered when the tab selection is changed. Note: Change event may be thrown by other JQX Custom Elements nested inside the Tab items.
        *  @param event. The custom event. 	*/
        _this.onChange = new EventEmitter();
        /** @description This event is triggered when a Tab item or a whole Tabs Window item ( DockingLayout item ) is closed.
        *  @param event. The custom event. 	*/
        _this.onClose = new EventEmitter();
        /** @description This event is triggered when a Tab item/Tabs Window is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	*/
        _this.onClosing = new EventEmitter();
        /** @description This event is triggered when an item's position inside the Layout or it's size has been changed. Indicates that a state change has occured.
        *  @param event. The custom event. 	*/
        _this.onStateChange = new EventEmitter();
        /** @description This event is triggered when item resizing begins.
        *  @param event. The custom event. 	*/
        _this.onResizeStart = new EventEmitter();
        /** @description This event is triggered when item resizing finishes.
        *  @param event. The custom event. 	*/
        _this.onResizeEnd = new EventEmitter();
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    DockingLayoutComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('smart-docking-layout');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(DockingLayoutComponent.prototype, "animation", {
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
    Object.defineProperty(DockingLayoutComponent.prototype, "autoHideItems", {
        /** @description A getter that returns an array of all DockingLayout items that are auto hidden inside the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.autoHideItems : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.autoHideItems = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DockingLayoutComponent.prototype, "autoLoadState", {
        /** @description Enable/Disable the automatic state loading. There must be a previously saved state of the Layout in order to load it. */
        get: function () {
            return this.nativeElement ? this.nativeElement.autoLoadState : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.autoLoadState = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DockingLayoutComponent.prototype, "autoSaveState", {
        /** @description Enable/Disable the automatic state saving. Note: In order to save the state of the element it must have an id. */
        get: function () {
            return this.nativeElement ? this.nativeElement.autoSaveState : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.autoSaveState = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DockingLayoutComponent.prototype, "disabled", {
        /** @description Enables or disables the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.disabled : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disabled = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DockingLayoutComponent.prototype, "draggable", {
        /** @description If set to false it will disable the dragging of DockingLayout items. If set items can only be repositioned using the API methods. */
        get: function () {
            return this.nativeElement ? this.nativeElement.draggable : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.draggable = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DockingLayoutComponent.prototype, "floatable", {
        /** @description If set to false it will disable item floating. This means that if a Window is floated as a result of dragging it will be returned back ot it's original position instead of being floated outside the DockingLayout. Already floated LayoutPanel items will not be affected. */
        get: function () {
            return this.nativeElement ? this.nativeElement.floatable : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.floatable = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DockingLayoutComponent.prototype, "hideSplitterBars", {
        /** @description Hides all splitter bars inside the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.hideSplitterBars : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.hideSplitterBars = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DockingLayoutComponent.prototype, "items", {
        /** @description A getter that returns an array of all DockingLayout items that are docked inside the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.items : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.items = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DockingLayoutComponent.prototype, "closedItems", {
        /** @description A getter that returns an array of all DockingLayout items that have been closed. */
        get: function () {
            return this.nativeElement ? this.nativeElement.closedItems : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.closedItems = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DockingLayoutComponent.prototype, "layout", {
        /** @description Determines the structure of the element. This property represents an array of objects that define the hierarchy of the items inside the element and their specific settings. Each object must have a type attribute that defines it's behavior.  Three types of objects are allowed:   LayoutGroup - Represents a group of items (Splitter). Used when the user wants more than one DockingLayout item in a single container.  Properties: orientation - A string value indicating the orientation of the Splitter group. Possible values: 'horizontal', 'vertical'. size - A string | number value indicating the size of the Splitter group. items - An array of LayoutPanel object definitions. resizeMode - A string indicating the resize mode. Possible values: 'none', 'adjacent', 'end', 'proportional'. resizeStep - A nummeric value that determines the step of resizing. liveResize - Determines if splitter resizing happens while dragging or not.   LayoutPanel - Represents a DockingLayout item (TabsWindow). LayoutPanels can have one or many items (TabItem).  Properties:   id - the ID of the LayoutPanel. autoHide - a boolean property that determines if the LayoutPanel is autoHidden. autoHidePosition - determines the autoHide position of the item if 'autoHide' property is set. Possible values: 'top', 'bottom', 'left', 'right'. dropPosition - Determines the possible positions for the item at which a new item can be dropped as a result of dragging. Possible values: 'top', 'bottom', 'left', 'right', 'center', 'header', 'layout-top', 'layout-bottom', 'layout-left', 'layout-right'. Positions with the 'layout' prefix reflect on LayoutPanelItems that are children of the LayoutPanel. label - the Label of the LayoutPanel window. tabPosition - Determines the position of the Tab labels inside the LayoutPanel. layout - determines the DockingLayout owner of the LayoutPanel. Accepts a string indicating the ID of a DockingLayout on the page or a direct reference to it. headerButtons - an Array of strings that define the buttons in the header section of the DockingLayout item. tabCloseButtons - a boolean property that Enables or disables the close buttons inside each Tab item label inside the DockingLayout item. tabOverflow - same as 'overflow' property of jqxTabs. It defines the overflow mode of the labels of the Tab items inside a DockingLayout item.selectionMode - the same as jqxTabs selection modes. Applies to Tab items inside a DockingLayout item. tabResize - the same as 'resize' property of jqxTabs. Allows resizing the Tab labels inside the DockingLayout item. locked - Locks the size of the item and does not allow resizing. max - sets the maximum size of the item. min - sets the minimum size of the item size - sets the size of the item. items - an array of objects. Each object defines the structure of a LayoutPanelItem.   LayoutPanelItem - Represents a LayoutPanel item (TabItem). Properties:  id - the ID of the Tab item. label - a string representing the label of the Tab item. content - represents the content of the Tab item. Can be anything. selected - determines if the item is selected. By default the first added item to the LayoutPanel is automatically selected. draggable - a boolean property that allows to disable the dragging of the Tab item.     */
        get: function () {
            return this.nativeElement ? this.nativeElement.layout : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.layout = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DockingLayoutComponent.prototype, "liveResize", {
        /** @description When enabled the resizing operation happens live. By default this feature is not enabled and the user sees a hightlighted bar while dragging instead of the actual splitter bar. */
        get: function () {
            return this.nativeElement ? this.nativeElement.liveResize : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.liveResize = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DockingLayoutComponent.prototype, "locale", {
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
    Object.defineProperty(DockingLayoutComponent.prototype, "localizeFormatFunction", {
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
    Object.defineProperty(DockingLayoutComponent.prototype, "messages", {
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
    Object.defineProperty(DockingLayoutComponent.prototype, "readonly", {
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
    Object.defineProperty(DockingLayoutComponent.prototype, "rightToLeft", {
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
    Object.defineProperty(DockingLayoutComponent.prototype, "resizeStep", {
        /** @description Determines the resize step during reisizing */
        get: function () {
            return this.nativeElement ? this.nativeElement.resizeStep : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.resizeStep = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DockingLayoutComponent.prototype, "snapMode", {
        /** @description Determines the snap mode. Two modes are available:   simple - allows dragging of a single tab item inside or outside the layout. A semi-transparent highlighter is used to indicate the possible locations where the dragged item can be dropped. The user has to drop the dragged item inside one of the possible drop zones indicated by the highlighter. advanced - allows dragging of a whole TabsWindow with items or a single tab item. Uses a Visual Studio style feedback that indicates the possible drop locations. The user has to drop the target over one of the icons inside the feedback.   The feedback/highlighter is displayed when the dragging of an item begins.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.snapMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.snapMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DockingLayoutComponent.prototype, "theme", {
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
    Object.defineProperty(DockingLayoutComponent.prototype, "undockedItems", {
        /** @description A getter that returns an array of all DockingLayout items that have been undocked. Undocked items are no more part of the Layout's interal structure but can be inserted by dragging them in. */
        get: function () {
            return this.nativeElement ? this.nativeElement.undockedItems : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.undockedItems = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DockingLayoutComponent.prototype, "unfocusable", {
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
    /** @description Makes a "smart-tabs-window" node, that is a child of the Layout, auto hidden by placing it at the Bottom position inside the element. This means that the item will be positioned near the bottom side of the layout and it's content will be hidden until the user selects one of it's labels.
    * @param {HTMLElement | number | string} node. The "smart-tabs-window" or "smart-tab-item" node to append
    */
    DockingLayoutComponent.prototype.autoHideBottom = function (node) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.autoHideBottom(node);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.autoHideBottom(node);
            });
        }
    };
    /** @description Makes a "smart-tabs-window" node, that is a child of the Layout, auto hidden by placing it at the Left position inside the layout. This means that the item will be positioned near the left side of the layout and it's content will be hidden until the user selects one of it's labels.
    * @param {HTMLElement | number | string} node. The "smart-tabs-window" or "smart-tab-item" node to append
    */
    DockingLayoutComponent.prototype.autoHideLeft = function (node) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.autoHideLeft(node);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.autoHideLeft(node);
            });
        }
    };
    /** @description Makes a "smart-tabs-window" node, that is a child of the Layout, auto hidden by placing it at the Right position inside the layout. This means that the item will be positioned near the right side of the layout and it's content will be hidden until the user selects one of it's labels.
    * @param {HTMLElement | number | string} node. The "smart-tabs-window" or "smart-tab-item" node to append
    */
    DockingLayoutComponent.prototype.autoHideRight = function (node) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.autoHideRight(node);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.autoHideRight(node);
            });
        }
    };
    /** @description Makes a "smart-tabs-window" node, that is a child of the Layout, auto hidden by placing it at the Top position inside the layout. This means that the item will be positioned near the top side of the layout and it's content will be hidden until the user selects one of it's labels.
    * @param {HTMLElement | number | string} node. The "smart-tabs-window" or "smart-tab-item" node to append
    */
    DockingLayoutComponent.prototype.autoHideTop = function (node) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.autoHideTop(node);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.autoHideTop(node);
            });
        }
    };
    /** @description Clears the localStorage of any previous cached state of the DockingLayout.
    */
    DockingLayoutComponent.prototype.clearState = function () {
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
    /** @description The method will reset an autohidden item to it's normal behavior and re-insert it at a specified position. It can also be used to insert items into the DockingLayout. Note: Items inserted via this method are added as a top level items.
    * @param {string | number | Node} node. An autohidden "smart-tabs-window" item instance or a new "smart-tabs-window" instance.
    * @returns {Node}
  */
    DockingLayoutComponent.prototype.dock = function (node) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.dock(node);
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
    /** @description Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted before the target item which corresponds to the index passed as the first argument to the method.
    * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
    * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
    */
    DockingLayoutComponent.prototype.insertBeforeItem = function (index, item) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertBeforeItem(index, item);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.insertBeforeItem(index, item);
            });
        }
    };
    /** @description Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted after the target item which corresponds to the index passed as the first argument to the method.
    * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
    * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
    */
    DockingLayoutComponent.prototype.insertAfterItem = function (index, item) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertAfterItem(index, item);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.insertAfterItem(index, item);
            });
        }
    };
    /** @description Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted by splitting  the target item which corresponds to the index passed as the first argument to the method in two and placing the new item as it's left neighbour horizontally.
    * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
    * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
    */
    DockingLayoutComponent.prototype.insertIntoLeft = function (index, item) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertIntoLeft(index, item);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.insertIntoLeft(index, item);
            });
        }
    };
    /** @description Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted by splitting  the target item which corresponds to the index passed as the first argument to the method in two and placing the new item as it's right neighbour horizontally.
    * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
    * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
    */
    DockingLayoutComponent.prototype.insertIntoRight = function (index, item) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertIntoRight(index, item);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.insertIntoRight(index, item);
            });
        }
    };
    /** @description Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted by splitting  the target item which corresponds to the index passed as the first argument to the method in two and placing the new item as it's top neighbour vertically.
    * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
    * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
    */
    DockingLayoutComponent.prototype.insertIntoTop = function (index, item) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertIntoTop(index, item);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.insertIntoTop(index, item);
            });
        }
    };
    /** @description Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted by splitting  the target item which corresponds to the index passed as the first argument to the method in two and placing the new item as it's bottom neighbour vertically.
    * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
    * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
    */
    DockingLayoutComponent.prototype.insertIntoBottom = function (index, item) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertIntoBottom(index, item);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.insertIntoBottom(index, item);
            });
        }
    };
    /** @description Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted as a top level item positioned at the top side inside the Layout.
    * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
    */
    DockingLayoutComponent.prototype.insertLayoutTop = function (item) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertLayoutTop(item);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.insertLayoutTop(item);
            });
        }
    };
    /** @description Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted as a top level item positioned at the bottom side inside the Layout.
    * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
    */
    DockingLayoutComponent.prototype.insertLayoutBottom = function (item) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertLayoutBottom(item);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.insertLayoutBottom(item);
            });
        }
    };
    /** @description Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted as a top level item positioned at the left side inside the Layout.
    * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
    */
    DockingLayoutComponent.prototype.insertLayoutLeft = function (item) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertLayoutLeft(item);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.insertLayoutLeft(item);
            });
        }
    };
    /** @description Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted as a top level item positioned at the right inside the Layout.
    * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
    */
    DockingLayoutComponent.prototype.insertLayoutRight = function (item) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertLayoutRight(item);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.insertLayoutRight(item);
            });
        }
    };
    /** @description Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The target item and it's neighbour items are placed inside a new splitter item that acts as the new neghbour of the newly added item via this method. The new item is inserted above the target ( at position Top).
    * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
    * @param {any} tabsWindow. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
    */
    DockingLayoutComponent.prototype.insertOutsideTargetGroupTop = function (index, tabsWindow) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertOutsideTargetGroupTop(index, tabsWindow);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.insertOutsideTargetGroupTop(index, tabsWindow);
            });
        }
    };
    /** @description Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The target item and it's neighbour items are placed inside a new splitter item that acts as the new neghbour of the newly added item via this method. The new item is inserted bellow the target ( at position Bottom).
    * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
    * @param {any} tabsWindow. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
    */
    DockingLayoutComponent.prototype.insertOutsideTargetGroupBottom = function (index, tabsWindow) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertOutsideTargetGroupBottom(index, tabsWindow);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.insertOutsideTargetGroupBottom(index, tabsWindow);
            });
        }
    };
    /** @description Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The target item and it's neighbour items are placed inside a new splitter item that acts as the new neghbour of the newly added item via this method. The new item is inserted before the target ( at position Left).
    * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
    * @param {any} tabsWindow. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
    */
    DockingLayoutComponent.prototype.insertOutsideTargetGroupLeft = function (index, tabsWindow) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertOutsideTargetGroupLeft(index, tabsWindow);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.insertOutsideTargetGroupLeft(index, tabsWindow);
            });
        }
    };
    /** @description Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The target item and it's neighbour items are placed inside a new splitter item that acts as the new neghbour of the newly added item via this method. The new item is inserted after the target ( at position Right).
    * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
    * @param {any} tabsWindow. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
    */
    DockingLayoutComponent.prototype.insertOutsideTargetGroupRight = function (index, tabsWindow) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertOutsideTargetGroupRight(index, tabsWindow);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.insertOutsideTargetGroupRight(index, tabsWindow);
            });
        }
    };
    /** @description The method returns an array of all autohidden items.
    * @param {string} orientation?. Determines which auto hidden items to return ( vertical or horizontal ). If not set the method will return all autohidden items. Possible values: 'vertical', 'horizontal'.
    * @returns {any[]}
  */
    DockingLayoutComponent.prototype.getAutoHideItems = function (orientation) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getAutoHideItems(orientation);
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
    /** @description The method returns the index of a target item.
    * @param {HTMLElement} node. Returns the index of the target item.
    * @returns {number}
  */
    DockingLayoutComponent.prototype.getIndex = function (node) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getIndex(node);
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
    /** @description Returns an array of objects representing the current structure of the element. Each object represents a Layout item with it's settings and hierarchy.
    * @param {boolean} noInstances?. Determines if the returned array will contain HTML references or not. When saving to localStorage the resulted array should not contain any HTMLElement references.
    * @returns {any[]}
  */
    DockingLayoutComponent.prototype.getState = function (noInstances) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getState(noInstances);
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
    /** @description Returns the Splitter parent of a Layout item
    * @param {HTMLElement} item?. DockingLayout item
    * @returns {HTMLElement}
  */
    DockingLayoutComponent.prototype.getItemGroupElement = function (item) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getItemGroupElement(item);
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
    /** @description Returns a JSON array of objects representing the current structure of the element. Ready to be persisted to LocalStorage.
    * @returns {any[]}
  */
    DockingLayoutComponent.prototype.getJSONStructure = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getJSONStructure();
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
    /** @description Loads a previously saved state of the element. If no state is provided as an argument the method will do a localStorage lookup.
    * @param {any[]} state?. An array of objects that represents a cached state of the DockingLayout. The result of calling the 'saveState' method.
    */
    DockingLayoutComponent.prototype.loadState = function (state) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.loadState(state);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.loadState(state);
            });
        }
    };
    /** @description Removes a DockingLayout item (TabsWindow) from the element.
    * @param {number | HTMLElement | string} index. The index of the TabsWindow to remove or a reference to it.
    */
    DockingLayoutComponent.prototype.removeAt = function (index) {
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
    /** @description Removes all items from the element.
    */
    DockingLayoutComponent.prototype.removeAll = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeAll();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.removeAll();
            });
        }
    };
    /** @description Removes a "smart-tabs-window" node that is a DockingLayout item.
    * @param {Node} node. The "smart-tabs-window" node to remove.
    * @returns {Node}
  */
    DockingLayoutComponent.prototype.removeChild = function (node) {
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
    /** @description Saves the current state of the DockingLayout to LocalStorage. The state includes the hierarchy and size of the items.
    */
    DockingLayoutComponent.prototype.saveState = function () {
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
    /** @description The method undocks/removes an item from the Layout and places it at the same position but it's no more part of the layout. The item becomes an 'outher' item that can be reinserted at any time.
    * @param {string | number | Node} node. A "smart-tabs-window" instance that is part of the DockingLayout.
    */
    DockingLayoutComponent.prototype.undock = function (node) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.undock(node);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.undock(node);
            });
        }
    };
    /** @description Updates a TabsWindow and it's contents.
    * @param {number | HTMLElement | string} index. The index of the TabsWindow to update.
    * @param {any} settings. An object that contains the new settings for the TabsWindow item. Settings object is the same as defining a new TabsWindow with the exception of 'items' array where the items are defined. In order to change the label or content of a Tab item the user has to specify the index of the target tab item.
    */
    DockingLayoutComponent.prototype.update = function (index, settings) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.update(index, settings);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.update(index, settings);
            });
        }
    };
    Object.defineProperty(DockingLayoutComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    DockingLayoutComponent.prototype.ngOnInit = function () {
    };
    DockingLayoutComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        this.listen();
    };
    DockingLayoutComponent.prototype.ngOnDestroy = function () {
        this.unlisten();
    };
    DockingLayoutComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    /** @description Add event listeners. */
    DockingLayoutComponent.prototype.listen = function () {
        var that = this;
        that.eventHandlers['changeHandler'] = function (event) { that.onChange.emit(event); };
        that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
        that.eventHandlers['closeHandler'] = function (event) { that.onClose.emit(event); };
        that.nativeElement.addEventListener('close', that.eventHandlers['closeHandler']);
        that.eventHandlers['closingHandler'] = function (event) { that.onClosing.emit(event); };
        that.nativeElement.addEventListener('closing', that.eventHandlers['closingHandler']);
        that.eventHandlers['stateChangeHandler'] = function (event) { that.onStateChange.emit(event); };
        that.nativeElement.addEventListener('stateChange', that.eventHandlers['stateChangeHandler']);
        that.eventHandlers['resizeStartHandler'] = function (event) { that.onResizeStart.emit(event); };
        that.nativeElement.addEventListener('resizeStart', that.eventHandlers['resizeStartHandler']);
        that.eventHandlers['resizeEndHandler'] = function (event) { that.onResizeEnd.emit(event); };
        that.nativeElement.addEventListener('resizeEnd', that.eventHandlers['resizeEndHandler']);
    };
    /** @description Remove event listeners. */
    DockingLayoutComponent.prototype.unlisten = function () {
        var that = this;
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
    };
    DockingLayoutComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
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
    return DockingLayoutComponent;
}(BaseElement));
export { DockingLayoutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQuZG9ja2luZ2xheW91dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NtYXJ0LXdlYmNvbXBvbmVudHMtYW5ndWxhci9kb2NraW5nbGF5b3V0LyIsInNvdXJjZXMiOlsic21hcnQuZG9ja2luZ2xheW91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUosT0FBTyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVyRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFReEM7SUFBNEMsa0RBQVc7SUFDdEQsZ0NBQVksR0FBOEI7UUFBMUMsWUFDQyxrQkFBTSxHQUFHLENBQUMsU0FFVjtRQUVPLG1CQUFhLEdBQVUsRUFBRSxDQUFDO1FBbU5sQzs4Q0FDc0M7UUFDNUIsY0FBUSxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRW5FOzhDQUNzQztRQUM1QixhQUFPLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFbEU7OENBQ3NDO1FBQzVCLGVBQVMsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVwRTs4Q0FDc0M7UUFDNUIsbUJBQWEsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV4RTs4Q0FDc0M7UUFDNUIsbUJBQWEsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV4RTs4Q0FDc0M7UUFDNUIsaUJBQVcsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQTVPckUsS0FBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUMsYUFBOEIsQ0FBQzs7SUFDekQsQ0FBQztJQUtEOztPQUVHO0lBQ0ksZ0RBQWUsR0FBdEIsVUFBdUIsVUFB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VyxzQkFBc0IsQ0FpMEJsQztJQUFELDZCQUFDO0NBQUEsQUFqMEJELENBQTRDLFdBQVcsR0FpMEJ0RDtTQWowQlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9ja2luZ0xheW91dCB9IGZyb20gJy4vLi4vaW5kZXgnO1xuaW1wb3J0IHsgQW5pbWF0aW9uLCBEb2NraW5nTGF5b3V0U25hcE1vZGUsIEVsZW1lbnRSZW5kZXJNb2RlfSBmcm9tICcuLy4uL2luZGV4JztcbmltcG9ydCB7IENvbXBvbmVudCwgRGlyZWN0aXZlLCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgU2ltcGxlQ2hhbmdlcywgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VFbGVtZW50LCBTbWFydCB9IGZyb20gJy4vc21hcnQuZWxlbWVudCc7XG5leHBvcnQgeyBBbmltYXRpb24sIERvY2tpbmdMYXlvdXRTbmFwTW9kZSwgRWxlbWVudFJlbmRlck1vZGV9IGZyb20gJy4vLi4vaW5kZXgnO1xuZXhwb3J0IHsgU21hcnQgfSBmcm9tICcuL3NtYXJ0LmVsZW1lbnQnO1xuZXhwb3J0IHsgRG9ja2luZ0xheW91dCB9IGZyb20gJy4vLi4vaW5kZXgnO1xuXG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ3NtYXJ0LWRvY2tpbmctbGF5b3V0LCBbc21hcnQtZG9ja2luZy1sYXlvdXRdJ1xufSlcblxuZXhwb3J0IGNsYXNzIERvY2tpbmdMYXlvdXRDb21wb25lbnQgZXh0ZW5kcyBCYXNlRWxlbWVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuXHRjb25zdHJ1Y3RvcihyZWY6IEVsZW1lbnRSZWY8RG9ja2luZ0xheW91dD4pIHtcblx0XHRzdXBlcihyZWYpO1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA9IHJlZi5uYXRpdmVFbGVtZW50IGFzIERvY2tpbmdMYXlvdXQ7XG5cdH1cblxuXHRwcml2YXRlIGV2ZW50SGFuZGxlcnM6IGFueVtdID0gW107XG5cblx0cHVibGljIG5hdGl2ZUVsZW1lbnQ6IERvY2tpbmdMYXlvdXQ7XG5cdC8qKiBAZGVzY3JpcHRpb24gQ3JlYXRlcyB0aGUgY29tcG9uZW50IG9uIGRlbWFuZC5cblx0ICogQHBhcmFtIHByb3BlcnRpZXMgQW4gb3B0aW9uYWwgb2JqZWN0IG9mIHByb3BlcnRpZXMsIHdoaWNoIHdpbGwgYmUgYWRkZWQgdG8gdGhlIHRlbXBsYXRlIGJpbmRlZCBvbmVzLlxuXHQgKi9cblx0cHVibGljIGNyZWF0ZUNvbXBvbmVudChwcm9wZXJ0aWVzID0ge30pOiBhbnkge1xuICAgIFx0dGhpcy5uYXRpdmVFbGVtZW50ID0gPERvY2tpbmdMYXlvdXQ+ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc21hcnQtZG9ja2luZy1sYXlvdXQnKTtcblx0XHRmb3IgKGxldCBwcm9wZXJ0eU5hbWUgaW4gcHJvcGVydGllcykgeyBcbiBcdFx0XHR0aGlzLm5hdGl2ZUVsZW1lbnRbcHJvcGVydHlOYW1lXSA9IHByb3BlcnRpZXNbcHJvcGVydHlOYW1lXTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudDtcblx0fVxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgYW5pbWF0aW9uIG1vZGUuIEFuaW1hdGlvbiBpcyBkaXNhYmxlZCB3aGVuIHRoZSBwcm9wZXJ0eSBpcyBzZXQgdG8gJ25vbmUnICovXG5cdEBJbnB1dCgpXG5cdGdldCBhbmltYXRpb24oKTogQW5pbWF0aW9uIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmFuaW1hdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYW5pbWF0aW9uKHZhbHVlOiBBbmltYXRpb24pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYW5pbWF0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEEgZ2V0dGVyIHRoYXQgcmV0dXJucyBhbiBhcnJheSBvZiBhbGwgRG9ja2luZ0xheW91dCBpdGVtcyB0aGF0IGFyZSBhdXRvIGhpZGRlbiBpbnNpZGUgdGhlIGVsZW1lbnQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBhdXRvSGlkZUl0ZW1zKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hdXRvSGlkZUl0ZW1zIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBhdXRvSGlkZUl0ZW1zKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYXV0b0hpZGVJdGVtcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFbmFibGUvRGlzYWJsZSB0aGUgYXV0b21hdGljIHN0YXRlIGxvYWRpbmcuIFRoZXJlIG11c3QgYmUgYSBwcmV2aW91c2x5IHNhdmVkIHN0YXRlIG9mIHRoZSBMYXlvdXQgaW4gb3JkZXIgdG8gbG9hZCBpdC4gKi9cblx0QElucHV0KClcblx0Z2V0IGF1dG9Mb2FkU3RhdGUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hdXRvTG9hZFN0YXRlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBhdXRvTG9hZFN0YXRlKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9Mb2FkU3RhdGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRW5hYmxlL0Rpc2FibGUgdGhlIGF1dG9tYXRpYyBzdGF0ZSBzYXZpbmcuIE5vdGU6IEluIG9yZGVyIHRvIHNhdmUgdGhlIHN0YXRlIG9mIHRoZSBlbGVtZW50IGl0IG11c3QgaGF2ZSBhbiBpZC4gKi9cblx0QElucHV0KClcblx0Z2V0IGF1dG9TYXZlU3RhdGUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hdXRvU2F2ZVN0YXRlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBhdXRvU2F2ZVN0YXRlKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9TYXZlU3RhdGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRW5hYmxlcyBvciBkaXNhYmxlcyB0aGUgZWxlbWVudC4gKi9cblx0QElucHV0KClcblx0Z2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZWQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVkID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIElmIHNldCB0byBmYWxzZSBpdCB3aWxsIGRpc2FibGUgdGhlIGRyYWdnaW5nIG9mIERvY2tpbmdMYXlvdXQgaXRlbXMuIElmIHNldCBpdGVtcyBjYW4gb25seSBiZSByZXBvc2l0aW9uZWQgdXNpbmcgdGhlIEFQSSBtZXRob2RzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZHJhZ2dhYmxlKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZHJhZ2dhYmxlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkcmFnZ2FibGUodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZHJhZ2dhYmxlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIElmIHNldCB0byBmYWxzZSBpdCB3aWxsIGRpc2FibGUgaXRlbSBmbG9hdGluZy4gVGhpcyBtZWFucyB0aGF0IGlmIGEgV2luZG93IGlzIGZsb2F0ZWQgYXMgYSByZXN1bHQgb2YgZHJhZ2dpbmcgaXQgd2lsbCBiZSByZXR1cm5lZCBiYWNrIG90IGl0J3Mgb3JpZ2luYWwgcG9zaXRpb24gaW5zdGVhZCBvZiBiZWluZyBmbG9hdGVkIG91dHNpZGUgdGhlIERvY2tpbmdMYXlvdXQuIEFscmVhZHkgZmxvYXRlZCBMYXlvdXRQYW5lbCBpdGVtcyB3aWxsIG5vdCBiZSBhZmZlY3RlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IGZsb2F0YWJsZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmZsb2F0YWJsZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZmxvYXRhYmxlKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmZsb2F0YWJsZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBIaWRlcyBhbGwgc3BsaXR0ZXIgYmFycyBpbnNpZGUgdGhlIGVsZW1lbnQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBoaWRlU3BsaXR0ZXJCYXJzKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGlkZVNwbGl0dGVyQmFycyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgaGlkZVNwbGl0dGVyQmFycyh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oaWRlU3BsaXR0ZXJCYXJzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEEgZ2V0dGVyIHRoYXQgcmV0dXJucyBhbiBhcnJheSBvZiBhbGwgRG9ja2luZ0xheW91dCBpdGVtcyB0aGF0IGFyZSBkb2NrZWQgaW5zaWRlIHRoZSBlbGVtZW50LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgaXRlbXMoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lml0ZW1zIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBpdGVtcyh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lml0ZW1zID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEEgZ2V0dGVyIHRoYXQgcmV0dXJucyBhbiBhcnJheSBvZiBhbGwgRG9ja2luZ0xheW91dCBpdGVtcyB0aGF0IGhhdmUgYmVlbiBjbG9zZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBjbG9zZWRJdGVtcygpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xvc2VkSXRlbXMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGNsb3NlZEl0ZW1zKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xvc2VkSXRlbXMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgc3RydWN0dXJlIG9mIHRoZSBlbGVtZW50LiBUaGlzIHByb3BlcnR5IHJlcHJlc2VudHMgYW4gYXJyYXkgb2Ygb2JqZWN0cyB0aGF0IGRlZmluZSB0aGUgaGllcmFyY2h5IG9mIHRoZSBpdGVtcyBpbnNpZGUgdGhlIGVsZW1lbnQgYW5kIHRoZWlyIHNwZWNpZmljIHNldHRpbmdzLiBFYWNoIG9iamVjdCBtdXN0IGhhdmUgYSB0eXBlIGF0dHJpYnV0ZSB0aGF0IGRlZmluZXMgaXQncyBiZWhhdmlvci4gIFRocmVlIHR5cGVzIG9mIG9iamVjdHMgYXJlIGFsbG93ZWQ6ICAgTGF5b3V0R3JvdXAgLSBSZXByZXNlbnRzIGEgZ3JvdXAgb2YgaXRlbXMgKFNwbGl0dGVyKS4gVXNlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIG1vcmUgdGhhbiBvbmUgRG9ja2luZ0xheW91dCBpdGVtIGluIGEgc2luZ2xlIGNvbnRhaW5lci4gIFByb3BlcnRpZXM6IG9yaWVudGF0aW9uIC0gQSBzdHJpbmcgdmFsdWUgaW5kaWNhdGluZyB0aGUgb3JpZW50YXRpb24gb2YgdGhlIFNwbGl0dGVyIGdyb3VwLiBQb3NzaWJsZSB2YWx1ZXM6ICdob3Jpem9udGFsJywgJ3ZlcnRpY2FsJy4gc2l6ZSAtIEEgc3RyaW5nIHwgbnVtYmVyIHZhbHVlIGluZGljYXRpbmcgdGhlIHNpemUgb2YgdGhlIFNwbGl0dGVyIGdyb3VwLiBpdGVtcyAtIEFuIGFycmF5IG9mIExheW91dFBhbmVsIG9iamVjdCBkZWZpbml0aW9ucy4gcmVzaXplTW9kZSAtIEEgc3RyaW5nIGluZGljYXRpbmcgdGhlIHJlc2l6ZSBtb2RlLiBQb3NzaWJsZSB2YWx1ZXM6ICdub25lJywgJ2FkamFjZW50JywgJ2VuZCcsICdwcm9wb3J0aW9uYWwnLiByZXNpemVTdGVwIC0gQSBudW1tZXJpYyB2YWx1ZSB0aGF0IGRldGVybWluZXMgdGhlIHN0ZXAgb2YgcmVzaXppbmcuIGxpdmVSZXNpemUgLSBEZXRlcm1pbmVzIGlmIHNwbGl0dGVyIHJlc2l6aW5nIGhhcHBlbnMgd2hpbGUgZHJhZ2dpbmcgb3Igbm90LiAgIExheW91dFBhbmVsIC0gUmVwcmVzZW50cyBhIERvY2tpbmdMYXlvdXQgaXRlbSAoVGFic1dpbmRvdykuIExheW91dFBhbmVscyBjYW4gaGF2ZSBvbmUgb3IgbWFueSBpdGVtcyAoVGFiSXRlbSkuICBQcm9wZXJ0aWVzOiAgIGlkIC0gdGhlIElEIG9mIHRoZSBMYXlvdXRQYW5lbC4gYXV0b0hpZGUgLSBhIGJvb2xlYW4gcHJvcGVydHkgdGhhdCBkZXRlcm1pbmVzIGlmIHRoZSBMYXlvdXRQYW5lbCBpcyBhdXRvSGlkZGVuLiBhdXRvSGlkZVBvc2l0aW9uIC0gZGV0ZXJtaW5lcyB0aGUgYXV0b0hpZGUgcG9zaXRpb24gb2YgdGhlIGl0ZW0gaWYgJ2F1dG9IaWRlJyBwcm9wZXJ0eSBpcyBzZXQuIFBvc3NpYmxlIHZhbHVlczogJ3RvcCcsICdib3R0b20nLCAnbGVmdCcsICdyaWdodCcuIGRyb3BQb3NpdGlvbiAtIERldGVybWluZXMgdGhlIHBvc3NpYmxlIHBvc2l0aW9ucyBmb3IgdGhlIGl0ZW0gYXQgd2hpY2ggYSBuZXcgaXRlbSBjYW4gYmUgZHJvcHBlZCBhcyBhIHJlc3VsdCBvZiBkcmFnZ2luZy4gUG9zc2libGUgdmFsdWVzOiAndG9wJywgJ2JvdHRvbScsICdsZWZ0JywgJ3JpZ2h0JywgJ2NlbnRlcicsICdoZWFkZXInLCAnbGF5b3V0LXRvcCcsICdsYXlvdXQtYm90dG9tJywgJ2xheW91dC1sZWZ0JywgJ2xheW91dC1yaWdodCcuIFBvc2l0aW9ucyB3aXRoIHRoZSAnbGF5b3V0JyBwcmVmaXggcmVmbGVjdCBvbiBMYXlvdXRQYW5lbEl0ZW1zIHRoYXQgYXJlIGNoaWxkcmVuIG9mIHRoZSBMYXlvdXRQYW5lbC4gbGFiZWwgLSB0aGUgTGFiZWwgb2YgdGhlIExheW91dFBhbmVsIHdpbmRvdy4gdGFiUG9zaXRpb24gLSBEZXRlcm1pbmVzIHRoZSBwb3NpdGlvbiBvZiB0aGUgVGFiIGxhYmVscyBpbnNpZGUgdGhlIExheW91dFBhbmVsLiBsYXlvdXQgLSBkZXRlcm1pbmVzIHRoZSBEb2NraW5nTGF5b3V0IG93bmVyIG9mIHRoZSBMYXlvdXRQYW5lbC4gQWNjZXB0cyBhIHN0cmluZyBpbmRpY2F0aW5nIHRoZSBJRCBvZiBhIERvY2tpbmdMYXlvdXQgb24gdGhlIHBhZ2Ugb3IgYSBkaXJlY3QgcmVmZXJlbmNlIHRvIGl0LiBoZWFkZXJCdXR0b25zIC0gYW4gQXJyYXkgb2Ygc3RyaW5ncyB0aGF0IGRlZmluZSB0aGUgYnV0dG9ucyBpbiB0aGUgaGVhZGVyIHNlY3Rpb24gb2YgdGhlIERvY2tpbmdMYXlvdXQgaXRlbS4gdGFiQ2xvc2VCdXR0b25zIC0gYSBib29sZWFuIHByb3BlcnR5IHRoYXQgRW5hYmxlcyBvciBkaXNhYmxlcyB0aGUgY2xvc2UgYnV0dG9ucyBpbnNpZGUgZWFjaCBUYWIgaXRlbSBsYWJlbCBpbnNpZGUgdGhlIERvY2tpbmdMYXlvdXQgaXRlbS4gdGFiT3ZlcmZsb3cgLSBzYW1lIGFzICdvdmVyZmxvdycgcHJvcGVydHkgb2YganF4VGFicy4gSXQgZGVmaW5lcyB0aGUgb3ZlcmZsb3cgbW9kZSBvZiB0aGUgbGFiZWxzIG9mIHRoZSBUYWIgaXRlbXMgaW5zaWRlIGEgRG9ja2luZ0xheW91dCBpdGVtLnNlbGVjdGlvbk1vZGUgLSB0aGUgc2FtZSBhcyBqcXhUYWJzIHNlbGVjdGlvbiBtb2Rlcy4gQXBwbGllcyB0byBUYWIgaXRlbXMgaW5zaWRlIGEgRG9ja2luZ0xheW91dCBpdGVtLiB0YWJSZXNpemUgLSB0aGUgc2FtZSBhcyAncmVzaXplJyBwcm9wZXJ0eSBvZiBqcXhUYWJzLiBBbGxvd3MgcmVzaXppbmcgdGhlIFRhYiBsYWJlbHMgaW5zaWRlIHRoZSBEb2NraW5nTGF5b3V0IGl0ZW0uIGxvY2tlZCAtIExvY2tzIHRoZSBzaXplIG9mIHRoZSBpdGVtIGFuZCBkb2VzIG5vdCBhbGxvdyByZXNpemluZy4gbWF4IC0gc2V0cyB0aGUgbWF4aW11bSBzaXplIG9mIHRoZSBpdGVtLiBtaW4gLSBzZXRzIHRoZSBtaW5pbXVtIHNpemUgb2YgdGhlIGl0ZW0gc2l6ZSAtIHNldHMgdGhlIHNpemUgb2YgdGhlIGl0ZW0uIGl0ZW1zIC0gYW4gYXJyYXkgb2Ygb2JqZWN0cy4gRWFjaCBvYmplY3QgZGVmaW5lcyB0aGUgc3RydWN0dXJlIG9mIGEgTGF5b3V0UGFuZWxJdGVtLiAgIExheW91dFBhbmVsSXRlbSAtIFJlcHJlc2VudHMgYSBMYXlvdXRQYW5lbCBpdGVtIChUYWJJdGVtKS4gUHJvcGVydGllczogIGlkIC0gdGhlIElEIG9mIHRoZSBUYWIgaXRlbS4gbGFiZWwgLSBhIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIGxhYmVsIG9mIHRoZSBUYWIgaXRlbS4gY29udGVudCAtIHJlcHJlc2VudHMgdGhlIGNvbnRlbnQgb2YgdGhlIFRhYiBpdGVtLiBDYW4gYmUgYW55dGhpbmcuIHNlbGVjdGVkIC0gZGV0ZXJtaW5lcyBpZiB0aGUgaXRlbSBpcyBzZWxlY3RlZC4gQnkgZGVmYXVsdCB0aGUgZmlyc3QgYWRkZWQgaXRlbSB0byB0aGUgTGF5b3V0UGFuZWwgaXMgYXV0b21hdGljYWxseSBzZWxlY3RlZC4gZHJhZ2dhYmxlIC0gYSBib29sZWFuIHByb3BlcnR5IHRoYXQgYWxsb3dzIHRvIGRpc2FibGUgdGhlIGRyYWdnaW5nIG9mIHRoZSBUYWIgaXRlbS4gICAgICovXG5cdEBJbnB1dCgpXG5cdGdldCBsYXlvdXQoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxheW91dCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbGF5b3V0KHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubGF5b3V0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFdoZW4gZW5hYmxlZCB0aGUgcmVzaXppbmcgb3BlcmF0aW9uIGhhcHBlbnMgbGl2ZS4gQnkgZGVmYXVsdCB0aGlzIGZlYXR1cmUgaXMgbm90IGVuYWJsZWQgYW5kIHRoZSB1c2VyIHNlZXMgYSBoaWdodGxpZ2h0ZWQgYmFyIHdoaWxlIGRyYWdnaW5nIGluc3RlYWQgb2YgdGhlIGFjdHVhbCBzcGxpdHRlciBiYXIuICovXG5cdEBJbnB1dCgpXG5cdGdldCBsaXZlUmVzaXplKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubGl2ZVJlc2l6ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbGl2ZVJlc2l6ZSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5saXZlUmVzaXplID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgbGFuZ3VhZ2UuIFVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCB0aGUgcHJvcGVydHkgbWVzc2FnZXMuICAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbG9jYWxlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sb2NhbGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGxvY2FsZSh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxvY2FsZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDYWxsYmFjaywgcmVsYXRlZCB0byBsb2NhbGl6YXRpb24gbW9kdWxlLiAgKi9cblx0QElucHV0KClcblx0Z2V0IGxvY2FsaXplRm9ybWF0RnVuY3Rpb24oKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxvY2FsaXplRm9ybWF0RnVuY3Rpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGxvY2FsaXplRm9ybWF0RnVuY3Rpb24odmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sb2NhbGl6ZUZvcm1hdEZ1bmN0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyBhbiBvYmplY3Qgc3BlY2lmeWluZyBzdHJpbmdzIHVzZWQgaW4gdGhlIHdpZGdldCB0aGF0IGNhbiBiZSBsb2NhbGl6ZWQuIFVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCB0aGUgcHJvcGVydHkgbG9jYWxlLiAgKi9cblx0QElucHV0KClcblx0Z2V0IG1lc3NhZ2VzKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5tZXNzYWdlcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbWVzc2FnZXModmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5tZXNzYWdlcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBJZiB0aGUgZWxlbWVudCBpcyByZWFkb25seSwgdXNlcnMgY2Fubm90IGludGVyYWN0IHdpdGggaXQuICovXG5cdEBJbnB1dCgpXG5cdGdldCByZWFkb25seSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlYWRvbmx5IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCByZWFkb25seSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZWFkb25seSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIHZhbHVlIGluZGljYXRpbmcgd2hldGhlciB0aGUgZWxlbWVudCBpcyBhbGlnbmVkIHRvIHN1cHBvcnQgbG9jYWxlcyB1c2luZyByaWdodC10by1sZWZ0IGZvbnRzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcmlnaHRUb0xlZnQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yaWdodFRvTGVmdCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcmlnaHRUb0xlZnQodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmlnaHRUb0xlZnQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgcmVzaXplIHN0ZXAgZHVyaW5nIHJlaXNpemluZyAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcmVzaXplU3RlcCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmVzaXplU3RlcCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcmVzaXplU3RlcCh2YWx1ZTogbnVtYmVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlc2l6ZVN0ZXAgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgc25hcCBtb2RlLiBUd28gbW9kZXMgYXJlIGF2YWlsYWJsZTogICBzaW1wbGUgLSBhbGxvd3MgZHJhZ2dpbmcgb2YgYSBzaW5nbGUgdGFiIGl0ZW0gaW5zaWRlIG9yIG91dHNpZGUgdGhlIGxheW91dC4gQSBzZW1pLXRyYW5zcGFyZW50IGhpZ2hsaWdodGVyIGlzIHVzZWQgdG8gaW5kaWNhdGUgdGhlIHBvc3NpYmxlIGxvY2F0aW9ucyB3aGVyZSB0aGUgZHJhZ2dlZCBpdGVtIGNhbiBiZSBkcm9wcGVkLiBUaGUgdXNlciBoYXMgdG8gZHJvcCB0aGUgZHJhZ2dlZCBpdGVtIGluc2lkZSBvbmUgb2YgdGhlIHBvc3NpYmxlIGRyb3Agem9uZXMgaW5kaWNhdGVkIGJ5IHRoZSBoaWdobGlnaHRlci4gYWR2YW5jZWQgLSBhbGxvd3MgZHJhZ2dpbmcgb2YgYSB3aG9sZSBUYWJzV2luZG93IHdpdGggaXRlbXMgb3IgYSBzaW5nbGUgdGFiIGl0ZW0uIFVzZXMgYSBWaXN1YWwgU3R1ZGlvIHN0eWxlIGZlZWRiYWNrIHRoYXQgaW5kaWNhdGVzIHRoZSBwb3NzaWJsZSBkcm9wIGxvY2F0aW9ucy4gVGhlIHVzZXIgaGFzIHRvIGRyb3AgdGhlIHRhcmdldCBvdmVyIG9uZSBvZiB0aGUgaWNvbnMgaW5zaWRlIHRoZSBmZWVkYmFjay4gICBUaGUgZmVlZGJhY2svaGlnaGxpZ2h0ZXIgaXMgZGlzcGxheWVkIHdoZW4gdGhlIGRyYWdnaW5nIG9mIGFuIGl0ZW0gYmVnaW5zLiAgKi9cblx0QElucHV0KClcblx0Z2V0IHNuYXBNb2RlKCk6IERvY2tpbmdMYXlvdXRTbmFwTW9kZSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zbmFwTW9kZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc25hcE1vZGUodmFsdWU6IERvY2tpbmdMYXlvdXRTbmFwTW9kZSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zbmFwTW9kZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSB0aGVtZS4gVGhlbWUgZGVmaW5lcyB0aGUgbG9vayBvZiB0aGUgZWxlbWVudCAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdGhlbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRoZW1lIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0aGVtZSh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRoZW1lID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEEgZ2V0dGVyIHRoYXQgcmV0dXJucyBhbiBhcnJheSBvZiBhbGwgRG9ja2luZ0xheW91dCBpdGVtcyB0aGF0IGhhdmUgYmVlbiB1bmRvY2tlZC4gVW5kb2NrZWQgaXRlbXMgYXJlIG5vIG1vcmUgcGFydCBvZiB0aGUgTGF5b3V0J3MgaW50ZXJhbCBzdHJ1Y3R1cmUgYnV0IGNhbiBiZSBpbnNlcnRlZCBieSBkcmFnZ2luZyB0aGVtIGluLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdW5kb2NrZWRJdGVtcygpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudW5kb2NrZWRJdGVtcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdW5kb2NrZWRJdGVtcyh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnVuZG9ja2VkSXRlbXMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSWYgaXMgc2V0IHRvIHRydWUsIHRoZSBlbGVtZW50IGNhbm5vdCBiZSBmb2N1c2VkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdW5mb2N1c2FibGUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC51bmZvY3VzYWJsZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdW5mb2N1c2FibGUodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudW5mb2N1c2FibGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgdGFiIHNlbGVjdGlvbiBpcyBjaGFuZ2VkLiBOb3RlOiBDaGFuZ2UgZXZlbnQgbWF5IGJlIHRocm93biBieSBvdGhlciBKUVggQ3VzdG9tIEVsZW1lbnRzIG5lc3RlZCBpbnNpZGUgdGhlIFRhYiBpdGVtcy5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvbkNoYW5nZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSBUYWIgaXRlbSBvciBhIHdob2xlIFRhYnMgV2luZG93IGl0ZW0gKCBEb2NraW5nTGF5b3V0IGl0ZW0gKSBpcyBjbG9zZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHQqL1xuXHRAT3V0cHV0KCkgb25DbG9zZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSBUYWIgaXRlbS9UYWJzIFdpbmRvdyBpcyBhYm91dCB0byBiZSBjbG9zZWQuIFRoZSBjbG9zaW5nIG9wZXJhdGlvbiBjYW4gYmUgY2FuY2VsZWQgYnkgY2FsbGluZyBldmVudC5wcmV2ZW50RGVmYXVsdCgpIGluIHRoZSBldmVudCBoYW5kbGVyIGZ1bmN0aW9uLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Ki9cblx0QE91dHB1dCgpIG9uQ2xvc2luZzogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYW4gaXRlbSdzIHBvc2l0aW9uIGluc2lkZSB0aGUgTGF5b3V0IG9yIGl0J3Mgc2l6ZSBoYXMgYmVlbiBjaGFuZ2VkLiBJbmRpY2F0ZXMgdGhhdCBhIHN0YXRlIGNoYW5nZSBoYXMgb2NjdXJlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvblN0YXRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBpdGVtIHJlc2l6aW5nIGJlZ2lucy5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvblJlc2l6ZVN0YXJ0OiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBpdGVtIHJlc2l6aW5nIGZpbmlzaGVzLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Ki9cblx0QE91dHB1dCgpIG9uUmVzaXplRW5kOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gTWFrZXMgYSBcInNtYXJ0LXRhYnMtd2luZG93XCIgbm9kZSwgdGhhdCBpcyBhIGNoaWxkIG9mIHRoZSBMYXlvdXQsIGF1dG8gaGlkZGVuIGJ5IHBsYWNpbmcgaXQgYXQgdGhlIEJvdHRvbSBwb3NpdGlvbiBpbnNpZGUgdGhlIGVsZW1lbnQuIFRoaXMgbWVhbnMgdGhhdCB0aGUgaXRlbSB3aWxsIGJlIHBvc2l0aW9uZWQgbmVhciB0aGUgYm90dG9tIHNpZGUgb2YgdGhlIGxheW91dCBhbmQgaXQncyBjb250ZW50IHdpbGwgYmUgaGlkZGVuIHVudGlsIHRoZSB1c2VyIHNlbGVjdHMgb25lIG9mIGl0J3MgbGFiZWxzLiBcblx0KiBAcGFyYW0ge0hUTUxFbGVtZW50IHwgbnVtYmVyIHwgc3RyaW5nfSBub2RlLiBUaGUgXCJzbWFydC10YWJzLXdpbmRvd1wiIG9yIFwic21hcnQtdGFiLWl0ZW1cIiBub2RlIHRvIGFwcGVuZFxuXHQqL1xuICAgIHB1YmxpYyBhdXRvSGlkZUJvdHRvbShub2RlOiBIVE1MRWxlbWVudCB8IG51bWJlciB8IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5hdXRvSGlkZUJvdHRvbShub2RlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5hdXRvSGlkZUJvdHRvbShub2RlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gTWFrZXMgYSBcInNtYXJ0LXRhYnMtd2luZG93XCIgbm9kZSwgdGhhdCBpcyBhIGNoaWxkIG9mIHRoZSBMYXlvdXQsIGF1dG8gaGlkZGVuIGJ5IHBsYWNpbmcgaXQgYXQgdGhlIExlZnQgcG9zaXRpb24gaW5zaWRlIHRoZSBsYXlvdXQuIFRoaXMgbWVhbnMgdGhhdCB0aGUgaXRlbSB3aWxsIGJlIHBvc2l0aW9uZWQgbmVhciB0aGUgbGVmdCBzaWRlIG9mIHRoZSBsYXlvdXQgYW5kIGl0J3MgY29udGVudCB3aWxsIGJlIGhpZGRlbiB1bnRpbCB0aGUgdXNlciBzZWxlY3RzIG9uZSBvZiBpdCdzIGxhYmVscy4gXG5cdCogQHBhcmFtIHtIVE1MRWxlbWVudCB8IG51bWJlciB8IHN0cmluZ30gbm9kZS4gVGhlIFwic21hcnQtdGFicy13aW5kb3dcIiBvciBcInNtYXJ0LXRhYi1pdGVtXCIgbm9kZSB0byBhcHBlbmRcblx0Ki9cbiAgICBwdWJsaWMgYXV0b0hpZGVMZWZ0KG5vZGU6IEhUTUxFbGVtZW50IHwgbnVtYmVyIHwgc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9IaWRlTGVmdChub2RlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5hdXRvSGlkZUxlZnQobm9kZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIE1ha2VzIGEgXCJzbWFydC10YWJzLXdpbmRvd1wiIG5vZGUsIHRoYXQgaXMgYSBjaGlsZCBvZiB0aGUgTGF5b3V0LCBhdXRvIGhpZGRlbiBieSBwbGFjaW5nIGl0IGF0IHRoZSBSaWdodCBwb3NpdGlvbiBpbnNpZGUgdGhlIGxheW91dC4gVGhpcyBtZWFucyB0aGF0IHRoZSBpdGVtIHdpbGwgYmUgcG9zaXRpb25lZCBuZWFyIHRoZSByaWdodCBzaWRlIG9mIHRoZSBsYXlvdXQgYW5kIGl0J3MgY29udGVudCB3aWxsIGJlIGhpZGRlbiB1bnRpbCB0aGUgdXNlciBzZWxlY3RzIG9uZSBvZiBpdCdzIGxhYmVscy4gXG5cdCogQHBhcmFtIHtIVE1MRWxlbWVudCB8IG51bWJlciB8IHN0cmluZ30gbm9kZS4gVGhlIFwic21hcnQtdGFicy13aW5kb3dcIiBvciBcInNtYXJ0LXRhYi1pdGVtXCIgbm9kZSB0byBhcHBlbmRcblx0Ki9cbiAgICBwdWJsaWMgYXV0b0hpZGVSaWdodChub2RlOiBIVE1MRWxlbWVudCB8IG51bWJlciB8IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5hdXRvSGlkZVJpZ2h0KG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9IaWRlUmlnaHQobm9kZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIE1ha2VzIGEgXCJzbWFydC10YWJzLXdpbmRvd1wiIG5vZGUsIHRoYXQgaXMgYSBjaGlsZCBvZiB0aGUgTGF5b3V0LCBhdXRvIGhpZGRlbiBieSBwbGFjaW5nIGl0IGF0IHRoZSBUb3AgcG9zaXRpb24gaW5zaWRlIHRoZSBsYXlvdXQuIFRoaXMgbWVhbnMgdGhhdCB0aGUgaXRlbSB3aWxsIGJlIHBvc2l0aW9uZWQgbmVhciB0aGUgdG9wIHNpZGUgb2YgdGhlIGxheW91dCBhbmQgaXQncyBjb250ZW50IHdpbGwgYmUgaGlkZGVuIHVudGlsIHRoZSB1c2VyIHNlbGVjdHMgb25lIG9mIGl0J3MgbGFiZWxzLiBcblx0KiBAcGFyYW0ge0hUTUxFbGVtZW50IHwgbnVtYmVyIHwgc3RyaW5nfSBub2RlLiBUaGUgXCJzbWFydC10YWJzLXdpbmRvd1wiIG9yIFwic21hcnQtdGFiLWl0ZW1cIiBub2RlIHRvIGFwcGVuZFxuXHQqL1xuICAgIHB1YmxpYyBhdXRvSGlkZVRvcChub2RlOiBIVE1MRWxlbWVudCB8IG51bWJlciB8IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5hdXRvSGlkZVRvcChub2RlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5hdXRvSGlkZVRvcChub2RlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ2xlYXJzIHRoZSBsb2NhbFN0b3JhZ2Ugb2YgYW55IHByZXZpb3VzIGNhY2hlZCBzdGF0ZSBvZiB0aGUgRG9ja2luZ0xheW91dC4gXG5cdCovXG4gICAgcHVibGljIGNsZWFyU3RhdGUoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNsZWFyU3RhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbGVhclN0YXRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoZSBtZXRob2Qgd2lsbCByZXNldCBhbiBhdXRvaGlkZGVuIGl0ZW0gdG8gaXQncyBub3JtYWwgYmVoYXZpb3IgYW5kIHJlLWluc2VydCBpdCBhdCBhIHNwZWNpZmllZCBwb3NpdGlvbi4gSXQgY2FuIGFsc28gYmUgdXNlZCB0byBpbnNlcnQgaXRlbXMgaW50byB0aGUgRG9ja2luZ0xheW91dC4gTm90ZTogSXRlbXMgaW5zZXJ0ZWQgdmlhIHRoaXMgbWV0aG9kIGFyZSBhZGRlZCBhcyBhIHRvcCBsZXZlbCBpdGVtcy4gXG5cdCogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXIgfCBOb2RlfSBub2RlLiBBbiBhdXRvaGlkZGVuIFwic21hcnQtdGFicy13aW5kb3dcIiBpdGVtIGluc3RhbmNlIG9yIGEgbmV3IFwic21hcnQtdGFicy13aW5kb3dcIiBpbnN0YW5jZS5cblx0KiBAcmV0dXJucyB7Tm9kZX1cbiAgKi9cblx0cHVibGljIGFzeW5jIGRvY2sobm9kZSk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5kb2NrKG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSW5zZXJ0cyBhIG5ldyBUYWJzV2luZG93IGludG8gdGhlIERvY2tpbmdMYXlvdXQgb3IgY3JlYXRlcyBhIFRhYnNXaW5kb3cgaW5zdGFuY2UgZnJvbSBhbiBvYmplY3QgcGFzc2VkIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQuIFRoZSBuZXcgaXRlbSBpcyBpbnNlcnRlZCBiZWZvcmUgdGhlIHRhcmdldCBpdGVtIHdoaWNoIGNvcnJlc3BvbmRzIHRvIHRoZSBpbmRleCBwYXNzZWQgYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIHRoZSBtZXRob2QuIFxuXHQqIEBwYXJhbSB7bnVtYmVyIHwgSFRNTEVsZW1lbnQgfCBzdHJpbmd9IGluZGV4LiBUaGUgaW5kZXggdG8gaW5zZXJ0IGEgbmV3IFRhYnNXaW5kb3cgYXQuXG5cdCogQHBhcmFtIHthbnl9IGl0ZW0uIEFuIGluc3RhbmNlIG9mIGEgVGFic1dpbmRvdyBvciBhbiBPYmplY3Qgd2l0aCB0aGUgZmllbGRzIFwibGFiZWxcIiwgXCJpdGVtc1wiIGFuZCBvdGhlciBhZGRpdGlvbmFsLlxuXHQqL1xuICAgIHB1YmxpYyBpbnNlcnRCZWZvcmVJdGVtKGluZGV4OiBudW1iZXIgfCBIVE1MRWxlbWVudCB8IHN0cmluZywgaXRlbTogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lmluc2VydEJlZm9yZUl0ZW0oaW5kZXgsIGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lmluc2VydEJlZm9yZUl0ZW0oaW5kZXgsIGl0ZW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBJbnNlcnRzIGEgbmV3IFRhYnNXaW5kb3cgaW50byB0aGUgRG9ja2luZ0xheW91dCBvciBjcmVhdGVzIGEgVGFic1dpbmRvdyBpbnN0YW5jZSBmcm9tIGFuIG9iamVjdCBwYXNzZWQgYXMgdGhlIHNlY29uZCBhcmd1bWVudC4gVGhlIG5ldyBpdGVtIGlzIGluc2VydGVkIGFmdGVyIHRoZSB0YXJnZXQgaXRlbSB3aGljaCBjb3JyZXNwb25kcyB0byB0aGUgaW5kZXggcGFzc2VkIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byB0aGUgbWV0aG9kLiBcblx0KiBAcGFyYW0ge251bWJlciB8IEhUTUxFbGVtZW50IHwgc3RyaW5nfSBpbmRleC4gVGhlIGluZGV4IHRvIGluc2VydCBhIG5ldyBUYWJzV2luZG93IGF0LlxuXHQqIEBwYXJhbSB7YW55fSBpdGVtLiBBbiBpbnN0YW5jZSBvZiBhIFRhYnNXaW5kb3cgb3IgYW4gT2JqZWN0IHdpdGggdGhlIGZpZWxkcyBcImxhYmVsXCIsIFwiaXRlbXNcIiBhbmQgb3RoZXIgYWRkaXRpb25hbC5cblx0Ki9cbiAgICBwdWJsaWMgaW5zZXJ0QWZ0ZXJJdGVtKGluZGV4OiBudW1iZXIgfCBIVE1MRWxlbWVudCB8IHN0cmluZywgaXRlbTogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lmluc2VydEFmdGVySXRlbShpbmRleCwgaXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5zZXJ0QWZ0ZXJJdGVtKGluZGV4LCBpdGVtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSW5zZXJ0cyBhIG5ldyBUYWJzV2luZG93IGludG8gdGhlIERvY2tpbmdMYXlvdXQgb3IgY3JlYXRlcyBhIFRhYnNXaW5kb3cgaW5zdGFuY2UgZnJvbSBhbiBvYmplY3QgcGFzc2VkIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQuIFRoZSBuZXcgaXRlbSBpcyBpbnNlcnRlZCBieSBzcGxpdHRpbmcgIHRoZSB0YXJnZXQgaXRlbSB3aGljaCBjb3JyZXNwb25kcyB0byB0aGUgaW5kZXggcGFzc2VkIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byB0aGUgbWV0aG9kIGluIHR3byBhbmQgcGxhY2luZyB0aGUgbmV3IGl0ZW0gYXMgaXQncyBsZWZ0IG5laWdoYm91ciBob3Jpem9udGFsbHkuIFxuXHQqIEBwYXJhbSB7bnVtYmVyIHwgSFRNTEVsZW1lbnQgfCBzdHJpbmd9IGluZGV4LiBUaGUgaW5kZXggdG8gaW5zZXJ0IGEgbmV3IFRhYnNXaW5kb3cgYXQuXG5cdCogQHBhcmFtIHthbnl9IGl0ZW0uIEFuIGluc3RhbmNlIG9mIGEgVGFic1dpbmRvdyBvciBhbiBPYmplY3Qgd2l0aCB0aGUgZmllbGRzIFwibGFiZWxcIiwgXCJpdGVtc1wiIGFuZCBvdGhlciBhZGRpdGlvbmFsLlxuXHQqL1xuICAgIHB1YmxpYyBpbnNlcnRJbnRvTGVmdChpbmRleDogbnVtYmVyIHwgSFRNTEVsZW1lbnQgfCBzdHJpbmcsIGl0ZW06IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5pbnNlcnRJbnRvTGVmdChpbmRleCwgaXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5zZXJ0SW50b0xlZnQoaW5kZXgsIGl0ZW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBJbnNlcnRzIGEgbmV3IFRhYnNXaW5kb3cgaW50byB0aGUgRG9ja2luZ0xheW91dCBvciBjcmVhdGVzIGEgVGFic1dpbmRvdyBpbnN0YW5jZSBmcm9tIGFuIG9iamVjdCBwYXNzZWQgYXMgdGhlIHNlY29uZCBhcmd1bWVudC4gVGhlIG5ldyBpdGVtIGlzIGluc2VydGVkIGJ5IHNwbGl0dGluZyAgdGhlIHRhcmdldCBpdGVtIHdoaWNoIGNvcnJlc3BvbmRzIHRvIHRoZSBpbmRleCBwYXNzZWQgYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIHRoZSBtZXRob2QgaW4gdHdvIGFuZCBwbGFjaW5nIHRoZSBuZXcgaXRlbSBhcyBpdCdzIHJpZ2h0IG5laWdoYm91ciBob3Jpem9udGFsbHkuIFxuXHQqIEBwYXJhbSB7bnVtYmVyIHwgSFRNTEVsZW1lbnQgfCBzdHJpbmd9IGluZGV4LiBUaGUgaW5kZXggdG8gaW5zZXJ0IGEgbmV3IFRhYnNXaW5kb3cgYXQuXG5cdCogQHBhcmFtIHthbnl9IGl0ZW0uIEFuIGluc3RhbmNlIG9mIGEgVGFic1dpbmRvdyBvciBhbiBPYmplY3Qgd2l0aCB0aGUgZmllbGRzIFwibGFiZWxcIiwgXCJpdGVtc1wiIGFuZCBvdGhlciBhZGRpdGlvbmFsLlxuXHQqL1xuICAgIHB1YmxpYyBpbnNlcnRJbnRvUmlnaHQoaW5kZXg6IG51bWJlciB8IEhUTUxFbGVtZW50IHwgc3RyaW5nLCBpdGVtOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5zZXJ0SW50b1JpZ2h0KGluZGV4LCBpdGVtKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5pbnNlcnRJbnRvUmlnaHQoaW5kZXgsIGl0ZW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBJbnNlcnRzIGEgbmV3IFRhYnNXaW5kb3cgaW50byB0aGUgRG9ja2luZ0xheW91dCBvciBjcmVhdGVzIGEgVGFic1dpbmRvdyBpbnN0YW5jZSBmcm9tIGFuIG9iamVjdCBwYXNzZWQgYXMgdGhlIHNlY29uZCBhcmd1bWVudC4gVGhlIG5ldyBpdGVtIGlzIGluc2VydGVkIGJ5IHNwbGl0dGluZyAgdGhlIHRhcmdldCBpdGVtIHdoaWNoIGNvcnJlc3BvbmRzIHRvIHRoZSBpbmRleCBwYXNzZWQgYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIHRoZSBtZXRob2QgaW4gdHdvIGFuZCBwbGFjaW5nIHRoZSBuZXcgaXRlbSBhcyBpdCdzIHRvcCBuZWlnaGJvdXIgdmVydGljYWxseS4gXG5cdCogQHBhcmFtIHtudW1iZXIgfCBIVE1MRWxlbWVudCB8IHN0cmluZ30gaW5kZXguIFRoZSBpbmRleCB0byBpbnNlcnQgYSBuZXcgVGFic1dpbmRvdyBhdC5cblx0KiBAcGFyYW0ge2FueX0gaXRlbS4gQW4gaW5zdGFuY2Ugb2YgYSBUYWJzV2luZG93IG9yIGFuIE9iamVjdCB3aXRoIHRoZSBmaWVsZHMgXCJsYWJlbFwiLCBcIml0ZW1zXCIgYW5kIG90aGVyIGFkZGl0aW9uYWwuXG5cdCovXG4gICAgcHVibGljIGluc2VydEludG9Ub3AoaW5kZXg6IG51bWJlciB8IEhUTUxFbGVtZW50IHwgc3RyaW5nLCBpdGVtOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5zZXJ0SW50b1RvcChpbmRleCwgaXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5zZXJ0SW50b1RvcChpbmRleCwgaXRlbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEluc2VydHMgYSBuZXcgVGFic1dpbmRvdyBpbnRvIHRoZSBEb2NraW5nTGF5b3V0IG9yIGNyZWF0ZXMgYSBUYWJzV2luZG93IGluc3RhbmNlIGZyb20gYW4gb2JqZWN0IHBhc3NlZCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50LiBUaGUgbmV3IGl0ZW0gaXMgaW5zZXJ0ZWQgYnkgc3BsaXR0aW5nICB0aGUgdGFyZ2V0IGl0ZW0gd2hpY2ggY29ycmVzcG9uZHMgdG8gdGhlIGluZGV4IHBhc3NlZCBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gdGhlIG1ldGhvZCBpbiB0d28gYW5kIHBsYWNpbmcgdGhlIG5ldyBpdGVtIGFzIGl0J3MgYm90dG9tIG5laWdoYm91ciB2ZXJ0aWNhbGx5LiBcblx0KiBAcGFyYW0ge251bWJlciB8IEhUTUxFbGVtZW50IHwgc3RyaW5nfSBpbmRleC4gVGhlIGluZGV4IHRvIGluc2VydCBhIG5ldyBUYWJzV2luZG93IGF0LlxuXHQqIEBwYXJhbSB7YW55fSBpdGVtLiBBbiBpbnN0YW5jZSBvZiBhIFRhYnNXaW5kb3cgb3IgYW4gT2JqZWN0IHdpdGggdGhlIGZpZWxkcyBcImxhYmVsXCIsIFwiaXRlbXNcIiBhbmQgb3RoZXIgYWRkaXRpb25hbC5cblx0Ki9cbiAgICBwdWJsaWMgaW5zZXJ0SW50b0JvdHRvbShpbmRleDogbnVtYmVyIHwgSFRNTEVsZW1lbnQgfCBzdHJpbmcsIGl0ZW06IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5pbnNlcnRJbnRvQm90dG9tKGluZGV4LCBpdGVtKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5pbnNlcnRJbnRvQm90dG9tKGluZGV4LCBpdGVtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSW5zZXJ0cyBhIG5ldyBUYWJzV2luZG93IGludG8gdGhlIERvY2tpbmdMYXlvdXQgb3IgY3JlYXRlcyBhIFRhYnNXaW5kb3cgaW5zdGFuY2UgZnJvbSBhbiBvYmplY3QgcGFzc2VkIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQuIFRoZSBuZXcgaXRlbSBpcyBpbnNlcnRlZCBhcyBhIHRvcCBsZXZlbCBpdGVtIHBvc2l0aW9uZWQgYXQgdGhlIHRvcCBzaWRlIGluc2lkZSB0aGUgTGF5b3V0LiBcblx0KiBAcGFyYW0ge2FueX0gaXRlbS4gQW4gaW5zdGFuY2Ugb2YgYSBUYWJzV2luZG93IG9yIGFuIE9iamVjdCB3aXRoIHRoZSBmaWVsZHMgXCJsYWJlbFwiLCBcIml0ZW1zXCIgYW5kIG90aGVyIGFkZGl0aW9uYWwuXG5cdCovXG4gICAgcHVibGljIGluc2VydExheW91dFRvcChpdGVtOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5zZXJ0TGF5b3V0VG9wKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lmluc2VydExheW91dFRvcChpdGVtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSW5zZXJ0cyBhIG5ldyBUYWJzV2luZG93IGludG8gdGhlIERvY2tpbmdMYXlvdXQgb3IgY3JlYXRlcyBhIFRhYnNXaW5kb3cgaW5zdGFuY2UgZnJvbSBhbiBvYmplY3QgcGFzc2VkIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQuIFRoZSBuZXcgaXRlbSBpcyBpbnNlcnRlZCBhcyBhIHRvcCBsZXZlbCBpdGVtIHBvc2l0aW9uZWQgYXQgdGhlIGJvdHRvbSBzaWRlIGluc2lkZSB0aGUgTGF5b3V0LiBcblx0KiBAcGFyYW0ge2FueX0gaXRlbS4gQW4gaW5zdGFuY2Ugb2YgYSBUYWJzV2luZG93IG9yIGFuIE9iamVjdCB3aXRoIHRoZSBmaWVsZHMgXCJsYWJlbFwiLCBcIml0ZW1zXCIgYW5kIG90aGVyIGFkZGl0aW9uYWwuXG5cdCovXG4gICAgcHVibGljIGluc2VydExheW91dEJvdHRvbShpdGVtOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5zZXJ0TGF5b3V0Qm90dG9tKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lmluc2VydExheW91dEJvdHRvbShpdGVtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSW5zZXJ0cyBhIG5ldyBUYWJzV2luZG93IGludG8gdGhlIERvY2tpbmdMYXlvdXQgb3IgY3JlYXRlcyBhIFRhYnNXaW5kb3cgaW5zdGFuY2UgZnJvbSBhbiBvYmplY3QgcGFzc2VkIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQuIFRoZSBuZXcgaXRlbSBpcyBpbnNlcnRlZCBhcyBhIHRvcCBsZXZlbCBpdGVtIHBvc2l0aW9uZWQgYXQgdGhlIGxlZnQgc2lkZSBpbnNpZGUgdGhlIExheW91dC4gXG5cdCogQHBhcmFtIHthbnl9IGl0ZW0uIEFuIGluc3RhbmNlIG9mIGEgVGFic1dpbmRvdyBvciBhbiBPYmplY3Qgd2l0aCB0aGUgZmllbGRzIFwibGFiZWxcIiwgXCJpdGVtc1wiIGFuZCBvdGhlciBhZGRpdGlvbmFsLlxuXHQqL1xuICAgIHB1YmxpYyBpbnNlcnRMYXlvdXRMZWZ0KGl0ZW06IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5pbnNlcnRMYXlvdXRMZWZ0KGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lmluc2VydExheW91dExlZnQoaXRlbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEluc2VydHMgYSBuZXcgVGFic1dpbmRvdyBpbnRvIHRoZSBEb2NraW5nTGF5b3V0IG9yIGNyZWF0ZXMgYSBUYWJzV2luZG93IGluc3RhbmNlIGZyb20gYW4gb2JqZWN0IHBhc3NlZCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50LiBUaGUgbmV3IGl0ZW0gaXMgaW5zZXJ0ZWQgYXMgYSB0b3AgbGV2ZWwgaXRlbSBwb3NpdGlvbmVkIGF0IHRoZSByaWdodCBpbnNpZGUgdGhlIExheW91dC4gXG5cdCogQHBhcmFtIHthbnl9IGl0ZW0uIEFuIGluc3RhbmNlIG9mIGEgVGFic1dpbmRvdyBvciBhbiBPYmplY3Qgd2l0aCB0aGUgZmllbGRzIFwibGFiZWxcIiwgXCJpdGVtc1wiIGFuZCBvdGhlciBhZGRpdGlvbmFsLlxuXHQqL1xuICAgIHB1YmxpYyBpbnNlcnRMYXlvdXRSaWdodChpdGVtOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5zZXJ0TGF5b3V0UmlnaHQoaXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5zZXJ0TGF5b3V0UmlnaHQoaXRlbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEluc2VydHMgYSBuZXcgVGFic1dpbmRvdyBpbnRvIHRoZSBEb2NraW5nTGF5b3V0IG9yIGNyZWF0ZXMgYSBUYWJzV2luZG93IGluc3RhbmNlIGZyb20gYW4gb2JqZWN0IHBhc3NlZCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50LiBUaGUgdGFyZ2V0IGl0ZW0gYW5kIGl0J3MgbmVpZ2hib3VyIGl0ZW1zIGFyZSBwbGFjZWQgaW5zaWRlIGEgbmV3IHNwbGl0dGVyIGl0ZW0gdGhhdCBhY3RzIGFzIHRoZSBuZXcgbmVnaGJvdXIgb2YgdGhlIG5ld2x5IGFkZGVkIGl0ZW0gdmlhIHRoaXMgbWV0aG9kLiBUaGUgbmV3IGl0ZW0gaXMgaW5zZXJ0ZWQgYWJvdmUgdGhlIHRhcmdldCAoIGF0IHBvc2l0aW9uIFRvcCkuIFxuXHQqIEBwYXJhbSB7bnVtYmVyIHwgSFRNTEVsZW1lbnQgfCBzdHJpbmd9IGluZGV4LiBUaGUgaW5kZXggdG8gaW5zZXJ0IGEgbmV3IFRhYnNXaW5kb3cgYXQuXG5cdCogQHBhcmFtIHthbnl9IHRhYnNXaW5kb3cuIEFuIGluc3RhbmNlIG9mIGEgVGFic1dpbmRvdyBvciBhbiBPYmplY3Qgd2l0aCB0aGUgZmllbGRzIFwibGFiZWxcIiwgXCJpdGVtc1wiIGFuZCBvdGhlciBhZGRpdGlvbmFsLlxuXHQqL1xuICAgIHB1YmxpYyBpbnNlcnRPdXRzaWRlVGFyZ2V0R3JvdXBUb3AoaW5kZXg6IG51bWJlciB8IEhUTUxFbGVtZW50IHwgc3RyaW5nLCB0YWJzV2luZG93OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5zZXJ0T3V0c2lkZVRhcmdldEdyb3VwVG9wKGluZGV4LCB0YWJzV2luZG93KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5pbnNlcnRPdXRzaWRlVGFyZ2V0R3JvdXBUb3AoaW5kZXgsIHRhYnNXaW5kb3cpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBJbnNlcnRzIGEgbmV3IFRhYnNXaW5kb3cgaW50byB0aGUgRG9ja2luZ0xheW91dCBvciBjcmVhdGVzIGEgVGFic1dpbmRvdyBpbnN0YW5jZSBmcm9tIGFuIG9iamVjdCBwYXNzZWQgYXMgdGhlIHNlY29uZCBhcmd1bWVudC4gVGhlIHRhcmdldCBpdGVtIGFuZCBpdCdzIG5laWdoYm91ciBpdGVtcyBhcmUgcGxhY2VkIGluc2lkZSBhIG5ldyBzcGxpdHRlciBpdGVtIHRoYXQgYWN0cyBhcyB0aGUgbmV3IG5lZ2hib3VyIG9mIHRoZSBuZXdseSBhZGRlZCBpdGVtIHZpYSB0aGlzIG1ldGhvZC4gVGhlIG5ldyBpdGVtIGlzIGluc2VydGVkIGJlbGxvdyB0aGUgdGFyZ2V0ICggYXQgcG9zaXRpb24gQm90dG9tKS4gXG5cdCogQHBhcmFtIHtudW1iZXIgfCBIVE1MRWxlbWVudCB8IHN0cmluZ30gaW5kZXguIFRoZSBpbmRleCB0byBpbnNlcnQgYSBuZXcgVGFic1dpbmRvdyBhdC5cblx0KiBAcGFyYW0ge2FueX0gdGFic1dpbmRvdy4gQW4gaW5zdGFuY2Ugb2YgYSBUYWJzV2luZG93IG9yIGFuIE9iamVjdCB3aXRoIHRoZSBmaWVsZHMgXCJsYWJlbFwiLCBcIml0ZW1zXCIgYW5kIG90aGVyIGFkZGl0aW9uYWwuXG5cdCovXG4gICAgcHVibGljIGluc2VydE91dHNpZGVUYXJnZXRHcm91cEJvdHRvbShpbmRleDogbnVtYmVyIHwgSFRNTEVsZW1lbnQgfCBzdHJpbmcsIHRhYnNXaW5kb3c6IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5pbnNlcnRPdXRzaWRlVGFyZ2V0R3JvdXBCb3R0b20oaW5kZXgsIHRhYnNXaW5kb3cpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lmluc2VydE91dHNpZGVUYXJnZXRHcm91cEJvdHRvbShpbmRleCwgdGFic1dpbmRvdyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEluc2VydHMgYSBuZXcgVGFic1dpbmRvdyBpbnRvIHRoZSBEb2NraW5nTGF5b3V0IG9yIGNyZWF0ZXMgYSBUYWJzV2luZG93IGluc3RhbmNlIGZyb20gYW4gb2JqZWN0IHBhc3NlZCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50LiBUaGUgdGFyZ2V0IGl0ZW0gYW5kIGl0J3MgbmVpZ2hib3VyIGl0ZW1zIGFyZSBwbGFjZWQgaW5zaWRlIGEgbmV3IHNwbGl0dGVyIGl0ZW0gdGhhdCBhY3RzIGFzIHRoZSBuZXcgbmVnaGJvdXIgb2YgdGhlIG5ld2x5IGFkZGVkIGl0ZW0gdmlhIHRoaXMgbWV0aG9kLiBUaGUgbmV3IGl0ZW0gaXMgaW5zZXJ0ZWQgYmVmb3JlIHRoZSB0YXJnZXQgKCBhdCBwb3NpdGlvbiBMZWZ0KS4gXG5cdCogQHBhcmFtIHtudW1iZXIgfCBIVE1MRWxlbWVudCB8IHN0cmluZ30gaW5kZXguIFRoZSBpbmRleCB0byBpbnNlcnQgYSBuZXcgVGFic1dpbmRvdyBhdC5cblx0KiBAcGFyYW0ge2FueX0gdGFic1dpbmRvdy4gQW4gaW5zdGFuY2Ugb2YgYSBUYWJzV2luZG93IG9yIGFuIE9iamVjdCB3aXRoIHRoZSBmaWVsZHMgXCJsYWJlbFwiLCBcIml0ZW1zXCIgYW5kIG90aGVyIGFkZGl0aW9uYWwuXG5cdCovXG4gICAgcHVibGljIGluc2VydE91dHNpZGVUYXJnZXRHcm91cExlZnQoaW5kZXg6IG51bWJlciB8IEhUTUxFbGVtZW50IHwgc3RyaW5nLCB0YWJzV2luZG93OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5zZXJ0T3V0c2lkZVRhcmdldEdyb3VwTGVmdChpbmRleCwgdGFic1dpbmRvdyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5zZXJ0T3V0c2lkZVRhcmdldEdyb3VwTGVmdChpbmRleCwgdGFic1dpbmRvdyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEluc2VydHMgYSBuZXcgVGFic1dpbmRvdyBpbnRvIHRoZSBEb2NraW5nTGF5b3V0IG9yIGNyZWF0ZXMgYSBUYWJzV2luZG93IGluc3RhbmNlIGZyb20gYW4gb2JqZWN0IHBhc3NlZCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50LiBUaGUgdGFyZ2V0IGl0ZW0gYW5kIGl0J3MgbmVpZ2hib3VyIGl0ZW1zIGFyZSBwbGFjZWQgaW5zaWRlIGEgbmV3IHNwbGl0dGVyIGl0ZW0gdGhhdCBhY3RzIGFzIHRoZSBuZXcgbmVnaGJvdXIgb2YgdGhlIG5ld2x5IGFkZGVkIGl0ZW0gdmlhIHRoaXMgbWV0aG9kLiBUaGUgbmV3IGl0ZW0gaXMgaW5zZXJ0ZWQgYWZ0ZXIgdGhlIHRhcmdldCAoIGF0IHBvc2l0aW9uIFJpZ2h0KS4gXG5cdCogQHBhcmFtIHtudW1iZXIgfCBIVE1MRWxlbWVudCB8IHN0cmluZ30gaW5kZXguIFRoZSBpbmRleCB0byBpbnNlcnQgYSBuZXcgVGFic1dpbmRvdyBhdC5cblx0KiBAcGFyYW0ge2FueX0gdGFic1dpbmRvdy4gQW4gaW5zdGFuY2Ugb2YgYSBUYWJzV2luZG93IG9yIGFuIE9iamVjdCB3aXRoIHRoZSBmaWVsZHMgXCJsYWJlbFwiLCBcIml0ZW1zXCIgYW5kIG90aGVyIGFkZGl0aW9uYWwuXG5cdCovXG4gICAgcHVibGljIGluc2VydE91dHNpZGVUYXJnZXRHcm91cFJpZ2h0KGluZGV4OiBudW1iZXIgfCBIVE1MRWxlbWVudCB8IHN0cmluZywgdGFic1dpbmRvdzogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lmluc2VydE91dHNpZGVUYXJnZXRHcm91cFJpZ2h0KGluZGV4LCB0YWJzV2luZG93KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5pbnNlcnRPdXRzaWRlVGFyZ2V0R3JvdXBSaWdodChpbmRleCwgdGFic1dpbmRvdyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoZSBtZXRob2QgcmV0dXJucyBhbiBhcnJheSBvZiBhbGwgYXV0b2hpZGRlbiBpdGVtcy4gXG5cdCogQHBhcmFtIHtzdHJpbmd9IG9yaWVudGF0aW9uPy4gRGV0ZXJtaW5lcyB3aGljaCBhdXRvIGhpZGRlbiBpdGVtcyB0byByZXR1cm4gKCB2ZXJ0aWNhbCBvciBob3Jpem9udGFsICkuIElmIG5vdCBzZXQgdGhlIG1ldGhvZCB3aWxsIHJldHVybiBhbGwgYXV0b2hpZGRlbiBpdGVtcy4gUG9zc2libGUgdmFsdWVzOiAndmVydGljYWwnLCAnaG9yaXpvbnRhbCcuXG5cdCogQHJldHVybnMge2FueVtdfVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0QXV0b0hpZGVJdGVtcyhvcmllbnRhdGlvbj8pOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0QXV0b0hpZGVJdGVtcyhvcmllbnRhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGUgbWV0aG9kIHJldHVybnMgdGhlIGluZGV4IG9mIGEgdGFyZ2V0IGl0ZW0uIFxuXHQqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IG5vZGUuIFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSB0YXJnZXQgaXRlbS5cblx0KiBAcmV0dXJucyB7bnVtYmVyfVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0SW5kZXgobm9kZSk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRJbmRleChub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJldHVybnMgYW4gYXJyYXkgb2Ygb2JqZWN0cyByZXByZXNlbnRpbmcgdGhlIGN1cnJlbnQgc3RydWN0dXJlIG9mIHRoZSBlbGVtZW50LiBFYWNoIG9iamVjdCByZXByZXNlbnRzIGEgTGF5b3V0IGl0ZW0gd2l0aCBpdCdzIHNldHRpbmdzIGFuZCBoaWVyYXJjaHkuIFxuXHQqIEBwYXJhbSB7Ym9vbGVhbn0gbm9JbnN0YW5jZXM/LiBEZXRlcm1pbmVzIGlmIHRoZSByZXR1cm5lZCBhcnJheSB3aWxsIGNvbnRhaW4gSFRNTCByZWZlcmVuY2VzIG9yIG5vdC4gV2hlbiBzYXZpbmcgdG8gbG9jYWxTdG9yYWdlIHRoZSByZXN1bHRlZCBhcnJheSBzaG91bGQgbm90IGNvbnRhaW4gYW55IEhUTUxFbGVtZW50IHJlZmVyZW5jZXMuXG5cdCogQHJldHVybnMge2FueVtdfVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0U3RhdGUobm9JbnN0YW5jZXM/KTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldFN0YXRlKG5vSW5zdGFuY2VzKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJldHVybnMgdGhlIFNwbGl0dGVyIHBhcmVudCBvZiBhIExheW91dCBpdGVtIFxuXHQqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGl0ZW0/LiBEb2NraW5nTGF5b3V0IGl0ZW1cblx0KiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRJdGVtR3JvdXBFbGVtZW50KGl0ZW0/KTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldEl0ZW1Hcm91cEVsZW1lbnQoaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIGEgSlNPTiBhcnJheSBvZiBvYmplY3RzIHJlcHJlc2VudGluZyB0aGUgY3VycmVudCBzdHJ1Y3R1cmUgb2YgdGhlIGVsZW1lbnQuIFJlYWR5IHRvIGJlIHBlcnNpc3RlZCB0byBMb2NhbFN0b3JhZ2UuIFxuXHQqIEByZXR1cm5zIHthbnlbXX1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldEpTT05TdHJ1Y3R1cmUoKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldEpTT05TdHJ1Y3R1cmUoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIExvYWRzIGEgcHJldmlvdXNseSBzYXZlZCBzdGF0ZSBvZiB0aGUgZWxlbWVudC4gSWYgbm8gc3RhdGUgaXMgcHJvdmlkZWQgYXMgYW4gYXJndW1lbnQgdGhlIG1ldGhvZCB3aWxsIGRvIGEgbG9jYWxTdG9yYWdlIGxvb2t1cC4gXG5cdCogQHBhcmFtIHthbnlbXX0gc3RhdGU/LiBBbiBhcnJheSBvZiBvYmplY3RzIHRoYXQgcmVwcmVzZW50cyBhIGNhY2hlZCBzdGF0ZSBvZiB0aGUgRG9ja2luZ0xheW91dC4gVGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSAnc2F2ZVN0YXRlJyBtZXRob2QuXG5cdCovXG4gICAgcHVibGljIGxvYWRTdGF0ZShzdGF0ZT86IGFueVtdKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmxvYWRTdGF0ZShzdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQubG9hZFN0YXRlKHN0YXRlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVtb3ZlcyBhIERvY2tpbmdMYXlvdXQgaXRlbSAoVGFic1dpbmRvdykgZnJvbSB0aGUgZWxlbWVudC4gXG5cdCogQHBhcmFtIHtudW1iZXIgfCBIVE1MRWxlbWVudCB8IHN0cmluZ30gaW5kZXguIFRoZSBpbmRleCBvZiB0aGUgVGFic1dpbmRvdyB0byByZW1vdmUgb3IgYSByZWZlcmVuY2UgdG8gaXQuXG5cdCovXG4gICAgcHVibGljIHJlbW92ZUF0KGluZGV4OiBudW1iZXIgfCBIVE1MRWxlbWVudCB8IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVBdChpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVtb3ZlQXQoaW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZW1vdmVzIGFsbCBpdGVtcyBmcm9tIHRoZSBlbGVtZW50LiBcblx0Ki9cbiAgICBwdWJsaWMgcmVtb3ZlQWxsKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVBbGwoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVBbGwoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVtb3ZlcyBhIFwic21hcnQtdGFicy13aW5kb3dcIiBub2RlIHRoYXQgaXMgYSBEb2NraW5nTGF5b3V0IGl0ZW0uIFxuXHQqIEBwYXJhbSB7Tm9kZX0gbm9kZS4gVGhlIFwic21hcnQtdGFicy13aW5kb3dcIiBub2RlIHRvIHJlbW92ZS5cblx0KiBAcmV0dXJucyB7Tm9kZX1cbiAgKi9cblx0cHVibGljIGFzeW5jIHJlbW92ZUNoaWxkKG5vZGUpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTYXZlcyB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgRG9ja2luZ0xheW91dCB0byBMb2NhbFN0b3JhZ2UuIFRoZSBzdGF0ZSBpbmNsdWRlcyB0aGUgaGllcmFyY2h5IGFuZCBzaXplIG9mIHRoZSBpdGVtcy4gXG5cdCovXG4gICAgcHVibGljIHNhdmVTdGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2F2ZVN0YXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2F2ZVN0YXRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoZSBtZXRob2QgdW5kb2Nrcy9yZW1vdmVzIGFuIGl0ZW0gZnJvbSB0aGUgTGF5b3V0IGFuZCBwbGFjZXMgaXQgYXQgdGhlIHNhbWUgcG9zaXRpb24gYnV0IGl0J3Mgbm8gbW9yZSBwYXJ0IG9mIHRoZSBsYXlvdXQuIFRoZSBpdGVtIGJlY29tZXMgYW4gJ291dGhlcicgaXRlbSB0aGF0IGNhbiBiZSByZWluc2VydGVkIGF0IGFueSB0aW1lLiBcblx0KiBAcGFyYW0ge3N0cmluZyB8IG51bWJlciB8IE5vZGV9IG5vZGUuIEEgXCJzbWFydC10YWJzLXdpbmRvd1wiIGluc3RhbmNlIHRoYXQgaXMgcGFydCBvZiB0aGUgRG9ja2luZ0xheW91dC5cblx0Ki9cbiAgICBwdWJsaWMgdW5kb2NrKG5vZGU6IHN0cmluZyB8IG51bWJlciB8IE5vZGUpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQudW5kb2NrKG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnVuZG9jayhub2RlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVXBkYXRlcyBhIFRhYnNXaW5kb3cgYW5kIGl0J3MgY29udGVudHMuIFxuXHQqIEBwYXJhbSB7bnVtYmVyIHwgSFRNTEVsZW1lbnQgfCBzdHJpbmd9IGluZGV4LiBUaGUgaW5kZXggb2YgdGhlIFRhYnNXaW5kb3cgdG8gdXBkYXRlLlxuXHQqIEBwYXJhbSB7YW55fSBzZXR0aW5ncy4gQW4gb2JqZWN0IHRoYXQgY29udGFpbnMgdGhlIG5ldyBzZXR0aW5ncyBmb3IgdGhlIFRhYnNXaW5kb3cgaXRlbS4gU2V0dGluZ3Mgb2JqZWN0IGlzIHRoZSBzYW1lIGFzIGRlZmluaW5nIGEgbmV3IFRhYnNXaW5kb3cgd2l0aCB0aGUgZXhjZXB0aW9uIG9mICdpdGVtcycgYXJyYXkgd2hlcmUgdGhlIGl0ZW1zIGFyZSBkZWZpbmVkLiBJbiBvcmRlciB0byBjaGFuZ2UgdGhlIGxhYmVsIG9yIGNvbnRlbnQgb2YgYSBUYWIgaXRlbSB0aGUgdXNlciBoYXMgdG8gc3BlY2lmeSB0aGUgaW5kZXggb2YgdGhlIHRhcmdldCB0YWIgaXRlbS5cblx0Ki9cbiAgICBwdWJsaWMgdXBkYXRlKGluZGV4OiBudW1iZXIgfCBIVE1MRWxlbWVudCB8IHN0cmluZywgc2V0dGluZ3M6IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC51cGRhdGUoaW5kZXgsIHNldHRpbmdzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC51cGRhdGUoaW5kZXgsIHNldHRpbmdzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cblx0Z2V0IGlzUmVuZGVyZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkIDogZmFsc2U7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0fVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cbiAgICAgIHRoYXQub25DcmVhdGUuZW1pdCh0aGF0Lm5hdGl2ZUVsZW1lbnQpO1xuXG5cdFx0U21hcnQuUmVuZGVyKCk7XG5cblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHsgdGhhdC5vblJlYWR5LmVtaXQodGhhdC5uYXRpdmVFbGVtZW50KTsgfSk7XG5cdFx0dGhpcy5saXN0ZW4oKTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMudW5saXN0ZW4oKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblx0XHRpZiAodGhpcy5uYXRpdmVFbGVtZW50ICYmIHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG5cdFx0XHRmb3IgKGNvbnN0IHByb3BOYW1lIGluIGNoYW5nZXMpIHtcblx0XHRcdFx0aWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG5cdFx0XHRcdFx0dGhpcy5uYXRpdmVFbGVtZW50W3Byb3BOYW1lXSA9IGNoYW5nZXNbcHJvcE5hbWVdLmN1cnJlbnRWYWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQWRkIGV2ZW50IGxpc3RlbmVycy4gKi9cblx0cHJpdmF0ZSBsaXN0ZW4oKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY2hhbmdlSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ2hhbmdlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snY2hhbmdlSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY2xvc2VIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25DbG9zZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snY2xvc2VIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjbG9zaW5nSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ2xvc2luZy5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbG9zaW5nJywgdGhhdC5ldmVudEhhbmRsZXJzWydjbG9zaW5nSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snc3RhdGVDaGFuZ2VIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25TdGF0ZUNoYW5nZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzdGF0ZUNoYW5nZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snc3RhdGVDaGFuZ2VIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydyZXNpemVTdGFydEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblJlc2l6ZVN0YXJ0LmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZVN0YXJ0JywgdGhhdC5ldmVudEhhbmRsZXJzWydyZXNpemVTdGFydEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jlc2l6ZUVuZEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblJlc2l6ZUVuZC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdyZXNpemVFbmQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jlc2l6ZUVuZEhhbmRsZXInXSk7XG5cblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVtb3ZlIGV2ZW50IGxpc3RlbmVycy4gKi9cblx0cHJpdmF0ZSB1bmxpc3RlbigpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY2hhbmdlSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhhdC5ldmVudEhhbmRsZXJzWydjaGFuZ2VIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2Nsb3NlSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xvc2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2Nsb3NlSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjbG9zaW5nSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xvc2luZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY2xvc2luZ0hhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snc3RhdGVDaGFuZ2VIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzdGF0ZUNoYW5nZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snc3RhdGVDaGFuZ2VIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jlc2l6ZVN0YXJ0SGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplU3RhcnQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jlc2l6ZVN0YXJ0SGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydyZXNpemVFbmRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemVFbmQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jlc2l6ZUVuZEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdH1cbn1cbiJdfQ==