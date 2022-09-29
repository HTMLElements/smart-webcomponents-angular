
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.dockinglayout';

import { __decorate, __extends, __awaiter, __generator } from 'tslib';
import { EventEmitter, Output, Input, ElementRef, Directive, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

var BaseElement = /** @class */ (function () {
    function BaseElement(ref) {
        this.onCreate = new EventEmitter();
        this.onReady = new EventEmitter();
        this.onAttach = new EventEmitter();
        this.onDetach = new EventEmitter();
        var that = this;
        this.nativeElement = ref.nativeElement;
        that.nativeElement.onAttached = function () {
            that.onAttach.emit(that.nativeElement);
        };
        that.nativeElement.onDetached = function () {
            that.onDetach.emit(that.nativeElement);
        };
    }
    BaseElement.prototype.addEventListener = function (type, listener, options) {
        if (options === void 0) { options = false; }
        this.nativeElement.addEventListener(type, listener, options);
    };
    BaseElement.prototype.removeEventListener = function (type, listener, options) {
        if (options === void 0) { options = false; }
        this.nativeElement.removeEventListener(type, listener, options);
    };
    BaseElement.prototype.dispatchEvent = function (event) {
        return this.nativeElement.dispatchEvent(event);
    };
    BaseElement.prototype.blur = function () {
        this.nativeElement.blur();
    };
    BaseElement.prototype.click = function () {
        this.nativeElement.click();
    };
    BaseElement.prototype.focus = function (options) {
        this.nativeElement.focus(options);
    };
    Object.defineProperty(BaseElement.prototype, "locale", {
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
    Object.defineProperty(BaseElement.prototype, "localizeFormatFunction", {
        /** @description Callback used to customize the format of the messages that are returned from the Localization Module. */
        get: function () {
            return this.nativeElement ? this.nativeElement.localizeFormatFunction : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.localizeFormatFunction = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseElement.prototype, "messages", {
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
    Object.defineProperty(BaseElement.prototype, "rightToLeft", {
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
    Object.defineProperty(BaseElement.prototype, "theme", {
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
    return BaseElement;
}());
var Smart = window.Smart;

var DockingLayoutComponent = /** @class */ (function (_super) {
    __extends(DockingLayoutComponent, _super);
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
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
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
    /** @description Inserts a new TabsWindow. The window is in floating mode and is undocked.
    * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
    * @param {number | string} left?. The left position of the new window. You can use number, px or %. For example: '10px'.
    * @param {number | string} top?. The top position of the new window. You can use number, px or %. For example: '10px'.
    */
    DockingLayoutComponent.prototype.insertFloatingWindow = function (item, left, top) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertFloatingWindow(item, left, top);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.insertFloatingWindow(item, left, top);
            });
        }
    };
    /** @description The method returns an array of all autohidden items.
    * @param {string} orientation?. Determines which auto hidden items to return ( vertical or horizontal ). If not set the method will return all autohidden items. Possible values: 'vertical', 'horizontal'.
    * @returns {any[]}
  */
    DockingLayoutComponent.prototype.getAutoHideItems = function (orientation) {
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
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
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
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
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
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
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
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
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
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
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
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
        this.nativeElement.classList.add('smart-angular');
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
    __decorate([
        Input()
    ], DockingLayoutComponent.prototype, "animation", null);
    __decorate([
        Input()
    ], DockingLayoutComponent.prototype, "autoHideItems", null);
    __decorate([
        Input()
    ], DockingLayoutComponent.prototype, "autoLoadState", null);
    __decorate([
        Input()
    ], DockingLayoutComponent.prototype, "autoSaveState", null);
    __decorate([
        Input()
    ], DockingLayoutComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], DockingLayoutComponent.prototype, "draggable", null);
    __decorate([
        Input()
    ], DockingLayoutComponent.prototype, "floatable", null);
    __decorate([
        Input()
    ], DockingLayoutComponent.prototype, "hideSplitterBars", null);
    __decorate([
        Input()
    ], DockingLayoutComponent.prototype, "items", null);
    __decorate([
        Input()
    ], DockingLayoutComponent.prototype, "closedItems", null);
    __decorate([
        Input()
    ], DockingLayoutComponent.prototype, "layout", null);
    __decorate([
        Input()
    ], DockingLayoutComponent.prototype, "liveResize", null);
    __decorate([
        Input()
    ], DockingLayoutComponent.prototype, "locale", null);
    __decorate([
        Input()
    ], DockingLayoutComponent.prototype, "localizeFormatFunction", null);
    __decorate([
        Input()
    ], DockingLayoutComponent.prototype, "messages", null);
    __decorate([
        Input()
    ], DockingLayoutComponent.prototype, "readonly", null);
    __decorate([
        Input()
    ], DockingLayoutComponent.prototype, "rightToLeft", null);
    __decorate([
        Input()
    ], DockingLayoutComponent.prototype, "resizeStep", null);
    __decorate([
        Input()
    ], DockingLayoutComponent.prototype, "snapMode", null);
    __decorate([
        Input()
    ], DockingLayoutComponent.prototype, "theme", null);
    __decorate([
        Input()
    ], DockingLayoutComponent.prototype, "undockedItems", null);
    __decorate([
        Input()
    ], DockingLayoutComponent.prototype, "unfocusable", null);
    __decorate([
        Output()
    ], DockingLayoutComponent.prototype, "onChange", void 0);
    __decorate([
        Output()
    ], DockingLayoutComponent.prototype, "onClose", void 0);
    __decorate([
        Output()
    ], DockingLayoutComponent.prototype, "onClosing", void 0);
    __decorate([
        Output()
    ], DockingLayoutComponent.prototype, "onStateChange", void 0);
    __decorate([
        Output()
    ], DockingLayoutComponent.prototype, "onResizeStart", void 0);
    __decorate([
        Output()
    ], DockingLayoutComponent.prototype, "onResizeEnd", void 0);
    DockingLayoutComponent = __decorate([
        Directive({
            exportAs: 'smart-docking-layout', selector: 'smart-docking-layout, [smart-docking-layout]'
        })
    ], DockingLayoutComponent);
    return DockingLayoutComponent;
}(BaseElement));

var DockingLayoutModule = /** @class */ (function () {
    function DockingLayoutModule() {
    }
    DockingLayoutModule = __decorate([
        NgModule({
            declarations: [DockingLayoutComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            exports: [DockingLayoutComponent]
        })
    ], DockingLayoutModule);
    return DockingLayoutModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DockingLayoutComponent, DockingLayoutModule, Smart, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-dockinglayout.js.map
