
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.tree';

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

var TreeComponent = /** @class */ (function (_super) {
    __extends(TreeComponent, _super);
    function TreeComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        /** @description This event is triggered when selection in smart-tree is changed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	oldSelectedIndexes, 	selectedIndexes)
        *   item - The item the user has interacted with to change the selection (only when applicable).
        *   oldSelectedIndexes - The selected indexes before the selection is changed.
        *   selectedIndexes - The selected indexes after the selection is changed.
        */
        _this.onChange = new EventEmitter();
        /** @description This event is triggered when a smart-tree-items-group is collapsed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	path, 	value, 	children)
        *   item - the collapsed jqx-tree-items-group
        *   label - the label of the collapsed jqx-tree-items-group
        *   path - the path of the collapsed jqx-tree-items-group
        *   value - the value of the collapsed jqx-tree-items-group
        *   children - the children of the collapsed jqx-tree-items-group
        */
        _this.onCollapse = new EventEmitter();
        /** @description This event is triggered when a smart-tree-items-group is about to be collapsed. The collapsing operation can be canceled by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	path, 	value, 	children)
        *   item - the jqx-tree-items-group to be collapsed
        *   label - the label of the jqx-tree-items-group to be collapsed
        *   path - the path of the jqx-tree-items-group to be collapsed
        *   value - the value of the jqx-tree-items-group to be collapsed
        *   children - the children of the jqx-tree-items-group to be collapsed
        */
        _this.onCollapsing = new EventEmitter();
        /** @description This event is triggered when a smart-tree-item/smart-tree-items-group is dropped somewhere in the DOM. The dragging operation can be canceled by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	container, 	data, 	item, 	items, 	originalEvent, 	previousContainer, 	target)
        *   container - the tree the dragged item(s) is dropped to
        *   data - an object with additional drag details
        *   item - the item that is dragged; if multiple items are dragged, this is the item that has been clicked when initiating the drag operation
        *   items - an array with all dragged items
        *   originalEvent - the original, browser, event that initiates the drop operation
        *   previousContainer - the tree the dragged item(s) is dragged from
        *   target - the element the dragged items are dropped to
        */
        _this.onDragEnd = new EventEmitter();
        /** @description This event is triggered when a smart-tree-item/smart-tree-items-group is being dragged.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	data, 	item, 	items, 	originalEvent)
        *   data - an object with additional drag details
        *   item - the item that is dragged; if multiple items are dragged, this is the item that has been clicked when initiating the drag operation
        *   items - an array with all dragged items
        *   originalEvent - the original, browser, event that initiates the dragging operation
        */
        _this.onDragging = new EventEmitter();
        /** @description This event is triggered when a dragging operation is started in smart-tree. The dragging operation can be canceled by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	container, 	data, 	item, 	items, 	originalEvent, 	previousContainer)
        *   container - the tree the dragged item(s) is dragged from
        *   data - an object with additional drag details
        *   item - the item that is dragged; if multiple items are dragged, this is the item that has been clicked when initiating the drag operation
        *   items - an array with all dragged items
        *   originalEvent - the original, browser, event that initiates the drag operation
        *   previousContainer - the tree the dragged item(s) is dragged from
        */
        _this.onDragStart = new EventEmitter();
        /** @description This event is triggered when a smart-tree-items-group is expanded.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	path, 	value, 	children)
        *   item - the expanded jqx-tree-items-group
        *   label - the label of the expanded jqx-tree-items-group
        *   path - the path of the expanded jqx-tree-items-group
        *   value - the value of the expanded jqx-tree-items-group
        *   children - the children of the expanded jqx-tree-items-group
        */
        _this.onExpand = new EventEmitter();
        /** @description This event is triggered when a smart-tree-items-group is about to be expanded. The expanding operation can be canceled by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	path, 	value, 	children)
        *   item - the jqx-tree-items-group to be expanded
        *   label - the label of the jqx-tree-items-group to be expanded
        *   path - the path of the jqx-tree-items-group to be expanded
        *   value - the value of the jqx-tree-items-group to be expanded
        *   children - the children of the jqx-tree-items-group to be expanded
        */
        _this.onExpanding = new EventEmitter();
        /** @description This event is triggered when the Tree has been scrolled to the bottom.
        *  @param event. The custom event. 	*/
        _this.onScrollBottomReached = new EventEmitter();
        /** @description This event is triggered when the Tree has been scrolled to the top.
        *  @param event. The custom event. 	*/
        _this.onScrollTopReached = new EventEmitter();
        /** @description This event is triggered when the user swipes to the left inside the Tree.
        *  @param event. The custom event. 	*/
        _this.onSwipeleft = new EventEmitter();
        /** @description This event is triggered when the user swipes to the right inside the Tree.
        *  @param event. The custom event. 	*/
        _this.onSwiperight = new EventEmitter();
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    TreeComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('smart-tree');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(TreeComponent.prototype, "allowDrag", {
        /** @description Allows drag operation in current tree. When enabled, items can be dragged and dropped to a tree with enabled allowDrop. */
        get: function () {
            return this.nativeElement ? this.nativeElement.allowDrag : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.allowDrag = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeComponent.prototype, "allowDrop", {
        /** @description Allows drop operation. Dropped items could originate from the current tree or another tree. */
        get: function () {
            return this.nativeElement ? this.nativeElement.allowDrop : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.allowDrop = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeComponent.prototype, "animation", {
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
    Object.defineProperty(TreeComponent.prototype, "autoHideToggleElement", {
        /** @description Automatically hides the tree's toggle element (arrow) on mouseleave and shows it on mouseenter. */
        get: function () {
            return this.nativeElement ? this.nativeElement.autoHideToggleElement : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.autoHideToggleElement = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeComponent.prototype, "autoLoadState", {
        /** @description Enables or disables auto load state from the browser's localStorage. Information about filtering, sorting, expanded and selected items is loaded. */
        get: function () {
            return this.nativeElement ? this.nativeElement.autoLoadState : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.autoLoadState = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeComponent.prototype, "autoSaveState", {
        /** @description Enables or disables auto save state to the browser's localStorage. Information about filtering, sorting, expanded and selected items is saved. */
        get: function () {
            return this.nativeElement ? this.nativeElement.autoSaveState : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.autoSaveState = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeComponent.prototype, "autoSort", {
        /** @description Enables or disables auto sorting. If modifications are made to a sorted tree, but autoSort is false, the tree will not be re-sorted automatically. */
        get: function () {
            return this.nativeElement ? this.nativeElement.autoSort : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.autoSort = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeComponent.prototype, "dataSource", {
        /** @description Determines the data source that will be loaded to the Tree. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dataSource : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dataSource = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeComponent.prototype, "disabled", {
        /** @description Enables or disables jqxTree. */
        get: function () {
            return this.nativeElement ? this.nativeElement.disabled : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disabled = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeComponent.prototype, "displayLoadingIndicator", {
        /** @description Shows or hides loading indicator. */
        get: function () {
            return this.nativeElement ? this.nativeElement.displayLoadingIndicator : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.displayLoadingIndicator = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeComponent.prototype, "displayMember", {
        /** @description Determines the field in the data source that corresponds to an item's label. */
        get: function () {
            return this.nativeElement ? this.nativeElement.displayMember : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.displayMember = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeComponent.prototype, "dragFeedbackFormatFunction", {
        /** @description A callback function for customizing the HTML of the drag feedback. It receives one parameter - an array of the currently dragged items. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dragFeedbackFormatFunction : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dragFeedbackFormatFunction = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeComponent.prototype, "dragOffset", {
        /** @description Determines the offset of the drag feedback element from the mouse cursor when dragging items. The first member of the array is the horizontal offset and the second one - the vertical offset. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dragOffset : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dragOffset = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeComponent.prototype, "editable", {
        /** @description Enables or disables item's editting. An edit operation can be initiated by double-clicking a tree item or pressing F2 while an item is selected. */
        get: function () {
            return this.nativeElement ? this.nativeElement.editable : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.editable = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeComponent.prototype, "expandMode", {
        /** @description Determines the expand behavior of TreeItemsGroups in the Tree. */
        get: function () {
            return this.nativeElement ? this.nativeElement.expandMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.expandMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeComponent.prototype, "filterable", {
        /** @description Enables or disables filtering. Shows or hides filter input. */
        get: function () {
            return this.nativeElement ? this.nativeElement.filterable : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.filterable = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeComponent.prototype, "filterOnEnter", {
        /** @description Applies a filter only after the 'Enter' key is pressed. */
        get: function () {
            return this.nativeElement ? this.nativeElement.filterOnEnter : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.filterOnEnter = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeComponent.prototype, "filterInputPlaceholder", {
        /** @description Sets custom text for placeholder in the filter input. */
        get: function () {
            return this.nativeElement ? this.nativeElement.filterInputPlaceholder : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.filterInputPlaceholder = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeComponent.prototype, "filterMember", {
        /** @description Determines the TreeItem property that will be used as a filtering criteria. By default the label property is used. It can be set to 'value' if the user wants to filter by the value property or 'textContent' if the user wants to filter by text inside the TreeItem's content or any other property. */
        get: function () {
            return this.nativeElement ? this.nativeElement.filterMember : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.filterMember = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeComponent.prototype, "filterMode", {
        /** @description Sets filter mode. */
        get: function () {
            return this.nativeElement ? this.nativeElement.filterMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.filterMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeComponent.prototype, "hasThreeStates", {
        /** @description Sets or gets whether the tree checkboxes have three states - checked, unchecked and indeterminate. Whorks on selectionMode: 'checkBox' */
        get: function () {
            return this.nativeElement ? this.nativeElement.hasThreeStates : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.hasThreeStates = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeComponent.prototype, "itemsMember", {
        /** @description Determines the field in the data source that corresponds to an item group's subitems collection. */
        get: function () {
            return this.nativeElement ? this.nativeElement.itemsMember : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.itemsMember = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeComponent.prototype, "loadingIndicatorPlaceholder", {
        /** @description Sets custom text for placeholder in the loading indicator if loadingIndicatorPosition is set to 'top' or 'bottom'. */
        get: function () {
            return this.nativeElement ? this.nativeElement.loadingIndicatorPlaceholder : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.loadingIndicatorPlaceholder = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeComponent.prototype, "loadingIndicatorPosition", {
        /** @description Sets the position of the loading indicator. */
        get: function () {
            return this.nativeElement ? this.nativeElement.loadingIndicatorPosition : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.loadingIndicatorPosition = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeComponent.prototype, "locale", {
        /** @description Sets or gets the locale. Used in conjunction with the property messages. */
        get: function () {
            return this.nativeElement ? this.nativeElement.locale : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.locale = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeComponent.prototype, "localizeFormatFunction", {
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
    Object.defineProperty(TreeComponent.prototype, "messages", {
        /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale. */
        get: function () {
            return this.nativeElement ? this.nativeElement.messages : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.messages = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeComponent.prototype, "overflow", {
        /** @description Specifies what should happen with the scrollbar (or scroll buttons in scrollMode: 'scrollButtons') if content overflows the element's box. */
        get: function () {
            return this.nativeElement ? this.nativeElement.overflow : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.overflow = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeComponent.prototype, "readonly", {
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
    Object.defineProperty(TreeComponent.prototype, "rightToLeft", {
        /** @description Determines whether the right-to-left support is enabled. */
        get: function () {
            return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeComponent.prototype, "scrollMode", {
        /** @description Determines whether to use scrollbar or scrollButtons when content overflows an element's box. */
        get: function () {
            return this.nativeElement ? this.nativeElement.scrollMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.scrollMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeComponent.prototype, "selectedIndexes", {
        /** @description An array with indexes (paths) of the selected items. */
        get: function () {
            return this.nativeElement ? this.nativeElement.selectedIndexes : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.selectedIndexes = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeComponent.prototype, "selectionDisplayMode", {
        /** @description Determines the way selected items are highlighted. */
        get: function () {
            return this.nativeElement ? this.nativeElement.selectionDisplayMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.selectionDisplayMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeComponent.prototype, "selectionMode", {
        /** @description Determines selection mode. */
        get: function () {
            return this.nativeElement ? this.nativeElement.selectionMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.selectionMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeComponent.prototype, "selectionTarget", {
        /** @description Determines whether smart-tree-items-groups can be selected. */
        get: function () {
            return this.nativeElement ? this.nativeElement.selectionTarget : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.selectionTarget = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeComponent.prototype, "showLines", {
        /** @description Shows or hides lines, displaying the relation between elements in group. */
        get: function () {
            return this.nativeElement ? this.nativeElement.showLines : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.showLines = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeComponent.prototype, "showRootLines", {
        /** @description Shows or hides lines starting from the root node. Enabled when 'showLines' is set to true. */
        get: function () {
            return this.nativeElement ? this.nativeElement.showRootLines : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.showRootLines = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeComponent.prototype, "sort", {
        /** @description Sets user-defined function about custom sorting. */
        get: function () {
            return this.nativeElement ? this.nativeElement.sort : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.sort = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeComponent.prototype, "sortDirection", {
        /** @description Determines sort direction - ascending or descending. */
        get: function () {
            return this.nativeElement ? this.nativeElement.sortDirection : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.sortDirection = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeComponent.prototype, "sorted", {
        /** @description Enables or disables sorting. */
        get: function () {
            return this.nativeElement ? this.nativeElement.sorted : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.sorted = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeComponent.prototype, "theme", {
        /** @description Sets or gets the element's visual theme. */
        get: function () {
            return this.nativeElement ? this.nativeElement.theme : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.theme = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeComponent.prototype, "toggleElementPosition", {
        /** @description Determines togle element (arrow) position. */
        get: function () {
            return this.nativeElement ? this.nativeElement.toggleElementPosition : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.toggleElementPosition = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeComponent.prototype, "toggleMode", {
        /** @description Determines the way to toggle smart-tree-items-groups. */
        get: function () {
            return this.nativeElement ? this.nativeElement.toggleMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.toggleMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeComponent.prototype, "unfocusable", {
        /** @description Sets or gets if the element can be focused. */
        get: function () {
            return this.nativeElement ? this.nativeElement.unfocusable : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.unfocusable = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeComponent.prototype, "valueMember", {
        /** @description Determines the field in the data source that corresponds to an item's value. */
        get: function () {
            return this.nativeElement ? this.nativeElement.valueMember : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.valueMember = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /** @description Adds an item after another item as a sibling.
    * @param {HTMLElement} item. A smart-tree-item/smart-tree-items-group to add to the Tree
    * @param {string | HTMLElement} sibling. The smart-tree-item/smart-tree-items-group (or its id or numeric path) to add the item after.
    */
    TreeComponent.prototype.addAfter = function (item, sibling) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.addAfter(item, sibling);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.addAfter(item, sibling);
            });
        }
    };
    /** @description Adds an item before another item as a sibling.
    * @param {HTMLElement} item. A smart-tree-item/smart-tree-items-group to add to the Tree
    * @param {string | HTMLElement} sibling. The smart-tree-item/smart-tree-items-group (or its id or numeric path) to add the item before.
    */
    TreeComponent.prototype.addBefore = function (item, sibling) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.addBefore(item, sibling);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.addBefore(item, sibling);
            });
        }
    };
    /** @description Adds an item as the last child of a parent item.
    * @param {HTMLElement} item. A smart-tree-item/smart-tree-items-group to add to the Tree
    * @param {string | HTMLElement} parent?. The smart-tree-items-group (or its id or numeric path) to add the item to.
    */
    TreeComponent.prototype.addTo = function (item, parent) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.addTo(item, parent);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.addTo(item, parent);
            });
        }
    };
    /** @description Clears selection.
    */
    TreeComponent.prototype.clearSelection = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearSelection();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.clearSelection();
            });
        }
    };
    /** @description Collapses all smart-tree-items-groups.
    * @param {boolean} animation?. If set to false, disables collapse animation even if animation is enabled for the element.
    */
    TreeComponent.prototype.collapseAll = function (animation) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapseAll(animation);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.collapseAll(animation);
            });
        }
    };
    /** @description Collapses a smart-tree-items-group.
    * @param {HTMLElement | string} item. smart-tree-items-group (or its id or numeric path).
    * @param {boolean} animation?. If set to false, disables collapse animation even if animation is enabled for the element.
    */
    TreeComponent.prototype.collapseItem = function (item, animation) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapseItem(item, animation);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.collapseItem(item, animation);
            });
        }
    };
    /** @description Makes sure an item is visible by scrolling to it.
    * @param {HTMLElement | string} item. The id or numeric path of an item
    */
    TreeComponent.prototype.ensureVisible = function (item) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.ensureVisible(item);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.ensureVisible(item);
            });
        }
    };
    /** @description Expands all smart-tree-items-groups.
    * @param {string} animation?. If set to false, disables expand animation even if animation is enabled for the element.
    */
    TreeComponent.prototype.expandAll = function (animation) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.expandAll(animation);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.expandAll(animation);
            });
        }
    };
    /** @description Expands single smart-tree-items-group.
    * @param {HTMLElement | string} item. smart-tree-items-group (or its id or numeric path).
    * @param {boolean} animation?. If set to false, disables expand animation even if animation is enabled for the element.
    */
    TreeComponent.prototype.expandItem = function (item, animation) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.expandItem(item, animation);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.expandItem(item, animation);
            });
        }
    };
    /** @description Applies filter to the Tree.
    * @param {string} filterQuery. Filter query.
    */
    TreeComponent.prototype.filter = function (filterQuery) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.filter(filterQuery);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.filter(filterQuery);
            });
        }
    };
    /** @description Gets an item by its id or numeric path.
    * @param {string} id. The id or numeric path of an item.
    * @returns {HTMLElement}
  */
    TreeComponent.prototype.getItem = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getItem(id);
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
    /** @description Gets the selected values. If value is not defined, returns the selected labels.
    * @returns {string[]}
  */
    TreeComponent.prototype.getSelectedValues = function () {
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getSelectedValues();
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
    /** @description Returns SmartTree's state
    * @returns {any}
  */
    TreeComponent.prototype.getState = function () {
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getState();
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
    /** @description Inserts an item at the given position.
    * @param {any} item. A smart-tree-item/smart-tree-items-group (or an Object to create an item from) to add to the Tree. If an Object is passed, the available fields are <strong>tagName</strong> (<em>'smart-tree-item'</em> - default - or <em>'smart-tree-items-group'</em>), <strong>disabled</strong>, <strong>expanded</strong> (only if <strong>tagName</strong> is <em>'smart-tree-items-group'</em>), <strong>(items)</strong> (only if <strong>tagName</strong> is <em>'smart-tree-items-group'</em>), <strong>(label)</strong>, <strong>separator</strong>, <strong>shortcut</strong> (only if <strong>tagName</strong> is <em>'smart-tree-item'</em>), and <strong>(value)</strong>. (items), (label), and (value) have to correspond to the values of <strong>itemsMember</strong>, <strong>displayMember</strong>, and <strong>valueMember</strong> respectively.
    * @param {string} path?. The path to insert the item at.
    */
    TreeComponent.prototype.insert = function (item, path) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.insert(item, path);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.insert(item, path);
            });
        }
    };
    /** @description Loads the Tree's state.
    * @param {any} state?. An object returned by one of the methods <strong>getState</strong> or <strong>saveState</strong>. If a state is not passed, the method tries to load the state from the browser's localStorage.
    */
    TreeComponent.prototype.loadState = function (state) {
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
    /** @description Moves an item down relative to its siblings.
    * @param {HTMLElement | string} item. The smart-tree-item/smart-tree-items-group (or its id or numeric path) to remove.
    */
    TreeComponent.prototype.moveDown = function (item) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.moveDown(item);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.moveDown(item);
            });
        }
    };
    /** @description Moves an item up relative to its siblings.
    * @param {HTMLElement | string} item. The smart-tree-item/smart-tree-items-group (or its id or numeric path) to remove.
    */
    TreeComponent.prototype.moveUp = function (item) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.moveUp(item);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.moveUp(item);
            });
        }
    };
    /** @description Removes an item.
    * @param {HTMLElement | string} item. The smart-tree-item/smart-tree-items-group (or its id or numeric path) to remove.
    */
    TreeComponent.prototype.removeItem = function (item) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeItem(item);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.removeItem(item);
            });
        }
    };
    /** @description Saves the Tree's state.
    * @returns {any}
  */
    TreeComponent.prototype.saveState = function () {
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.saveState();
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
    /** @description Selects an item by its index or by HTMLElement id.
    * @param {HTMLElement | string} item. The smart-tree-item/smart-tree-items-group (or its id or numeric path) to remove.
    */
    TreeComponent.prototype.select = function (item) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.select(item);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.select(item);
            });
        }
    };
    /** @description Selects an item or items by values.
    * @param {string | string[]} items. The smart-tree-item/smart-tree-items-group values or labels, if values are not defined.
    */
    TreeComponent.prototype.setSelectedValues = function (items) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.setSelectedValues(items);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.setSelectedValues(items);
            });
        }
    };
    /** @description Unselects an item by its index or by HTMLElement id.
    * @param {HTMLElement | string} item. The smart-tree-item/smart-tree-items-group (or its id or numeric path) to remove.
    */
    TreeComponent.prototype.unselect = function (item) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.unselect(item);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.unselect(item);
            });
        }
    };
    /** @description Unselects an item or items by values.
    * @param {string | string[]} items. The smart-tree-item/smart-tree-items-group values or labels, if values are not defined.
    */
    TreeComponent.prototype.unselectValues = function (items) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.unselectValues(items);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.unselectValues(items);
            });
        }
    };
    /** @description Updates an item.
    * @param {HTMLElement | string} item. smart-tree-item/smart-tree-items-group (or its id or numeric path).
    * @param {any} newItem. An object with updated properties.
    */
    TreeComponent.prototype.updateItem = function (item, newItem) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.updateItem(item, newItem);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.updateItem(item, newItem);
            });
        }
    };
    Object.defineProperty(TreeComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    TreeComponent.prototype.ngOnInit = function () {
    };
    TreeComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        this.listen();
    };
    TreeComponent.prototype.ngOnDestroy = function () {
        this.unlisten();
    };
    TreeComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    /** @description Add event listeners. */
    TreeComponent.prototype.listen = function () {
        var that = this;
        that.eventHandlers['changeHandler'] = function (event) { that.onChange.emit(event); };
        that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
        that.eventHandlers['collapseHandler'] = function (event) { that.onCollapse.emit(event); };
        that.nativeElement.addEventListener('collapse', that.eventHandlers['collapseHandler']);
        that.eventHandlers['collapsingHandler'] = function (event) { that.onCollapsing.emit(event); };
        that.nativeElement.addEventListener('collapsing', that.eventHandlers['collapsingHandler']);
        that.eventHandlers['dragEndHandler'] = function (event) { that.onDragEnd.emit(event); };
        that.nativeElement.addEventListener('dragEnd', that.eventHandlers['dragEndHandler']);
        that.eventHandlers['draggingHandler'] = function (event) { that.onDragging.emit(event); };
        that.nativeElement.addEventListener('dragging', that.eventHandlers['draggingHandler']);
        that.eventHandlers['dragStartHandler'] = function (event) { that.onDragStart.emit(event); };
        that.nativeElement.addEventListener('dragStart', that.eventHandlers['dragStartHandler']);
        that.eventHandlers['expandHandler'] = function (event) { that.onExpand.emit(event); };
        that.nativeElement.addEventListener('expand', that.eventHandlers['expandHandler']);
        that.eventHandlers['expandingHandler'] = function (event) { that.onExpanding.emit(event); };
        that.nativeElement.addEventListener('expanding', that.eventHandlers['expandingHandler']);
        that.eventHandlers['scrollBottomReachedHandler'] = function (event) { that.onScrollBottomReached.emit(event); };
        that.nativeElement.addEventListener('scrollBottomReached', that.eventHandlers['scrollBottomReachedHandler']);
        that.eventHandlers['scrollTopReachedHandler'] = function (event) { that.onScrollTopReached.emit(event); };
        that.nativeElement.addEventListener('scrollTopReached', that.eventHandlers['scrollTopReachedHandler']);
        that.eventHandlers['swipeleftHandler'] = function (event) { that.onSwipeleft.emit(event); };
        that.nativeElement.addEventListener('swipeleft', that.eventHandlers['swipeleftHandler']);
        that.eventHandlers['swiperightHandler'] = function (event) { that.onSwiperight.emit(event); };
        that.nativeElement.addEventListener('swiperight', that.eventHandlers['swiperightHandler']);
    };
    /** @description Remove event listeners. */
    TreeComponent.prototype.unlisten = function () {
        var that = this;
        if (that.eventHandlers['changeHandler']) {
            that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
        }
        if (that.eventHandlers['collapseHandler']) {
            that.nativeElement.removeEventListener('collapse', that.eventHandlers['collapseHandler']);
        }
        if (that.eventHandlers['collapsingHandler']) {
            that.nativeElement.removeEventListener('collapsing', that.eventHandlers['collapsingHandler']);
        }
        if (that.eventHandlers['dragEndHandler']) {
            that.nativeElement.removeEventListener('dragEnd', that.eventHandlers['dragEndHandler']);
        }
        if (that.eventHandlers['draggingHandler']) {
            that.nativeElement.removeEventListener('dragging', that.eventHandlers['draggingHandler']);
        }
        if (that.eventHandlers['dragStartHandler']) {
            that.nativeElement.removeEventListener('dragStart', that.eventHandlers['dragStartHandler']);
        }
        if (that.eventHandlers['expandHandler']) {
            that.nativeElement.removeEventListener('expand', that.eventHandlers['expandHandler']);
        }
        if (that.eventHandlers['expandingHandler']) {
            that.nativeElement.removeEventListener('expanding', that.eventHandlers['expandingHandler']);
        }
        if (that.eventHandlers['scrollBottomReachedHandler']) {
            that.nativeElement.removeEventListener('scrollBottomReached', that.eventHandlers['scrollBottomReachedHandler']);
        }
        if (that.eventHandlers['scrollTopReachedHandler']) {
            that.nativeElement.removeEventListener('scrollTopReached', that.eventHandlers['scrollTopReachedHandler']);
        }
        if (that.eventHandlers['swipeleftHandler']) {
            that.nativeElement.removeEventListener('swipeleft', that.eventHandlers['swipeleftHandler']);
        }
        if (that.eventHandlers['swiperightHandler']) {
            that.nativeElement.removeEventListener('swiperight', that.eventHandlers['swiperightHandler']);
        }
    };
    TreeComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], TreeComponent.prototype, "allowDrag", null);
    __decorate([
        Input()
    ], TreeComponent.prototype, "allowDrop", null);
    __decorate([
        Input()
    ], TreeComponent.prototype, "animation", null);
    __decorate([
        Input()
    ], TreeComponent.prototype, "autoHideToggleElement", null);
    __decorate([
        Input()
    ], TreeComponent.prototype, "autoLoadState", null);
    __decorate([
        Input()
    ], TreeComponent.prototype, "autoSaveState", null);
    __decorate([
        Input()
    ], TreeComponent.prototype, "autoSort", null);
    __decorate([
        Input()
    ], TreeComponent.prototype, "dataSource", null);
    __decorate([
        Input()
    ], TreeComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], TreeComponent.prototype, "displayLoadingIndicator", null);
    __decorate([
        Input()
    ], TreeComponent.prototype, "displayMember", null);
    __decorate([
        Input()
    ], TreeComponent.prototype, "dragFeedbackFormatFunction", null);
    __decorate([
        Input()
    ], TreeComponent.prototype, "dragOffset", null);
    __decorate([
        Input()
    ], TreeComponent.prototype, "editable", null);
    __decorate([
        Input()
    ], TreeComponent.prototype, "expandMode", null);
    __decorate([
        Input()
    ], TreeComponent.prototype, "filterable", null);
    __decorate([
        Input()
    ], TreeComponent.prototype, "filterOnEnter", null);
    __decorate([
        Input()
    ], TreeComponent.prototype, "filterInputPlaceholder", null);
    __decorate([
        Input()
    ], TreeComponent.prototype, "filterMember", null);
    __decorate([
        Input()
    ], TreeComponent.prototype, "filterMode", null);
    __decorate([
        Input()
    ], TreeComponent.prototype, "hasThreeStates", null);
    __decorate([
        Input()
    ], TreeComponent.prototype, "itemsMember", null);
    __decorate([
        Input()
    ], TreeComponent.prototype, "loadingIndicatorPlaceholder", null);
    __decorate([
        Input()
    ], TreeComponent.prototype, "loadingIndicatorPosition", null);
    __decorate([
        Input()
    ], TreeComponent.prototype, "locale", null);
    __decorate([
        Input()
    ], TreeComponent.prototype, "localizeFormatFunction", null);
    __decorate([
        Input()
    ], TreeComponent.prototype, "messages", null);
    __decorate([
        Input()
    ], TreeComponent.prototype, "overflow", null);
    __decorate([
        Input()
    ], TreeComponent.prototype, "readonly", null);
    __decorate([
        Input()
    ], TreeComponent.prototype, "rightToLeft", null);
    __decorate([
        Input()
    ], TreeComponent.prototype, "scrollMode", null);
    __decorate([
        Input()
    ], TreeComponent.prototype, "selectedIndexes", null);
    __decorate([
        Input()
    ], TreeComponent.prototype, "selectionDisplayMode", null);
    __decorate([
        Input()
    ], TreeComponent.prototype, "selectionMode", null);
    __decorate([
        Input()
    ], TreeComponent.prototype, "selectionTarget", null);
    __decorate([
        Input()
    ], TreeComponent.prototype, "showLines", null);
    __decorate([
        Input()
    ], TreeComponent.prototype, "showRootLines", null);
    __decorate([
        Input()
    ], TreeComponent.prototype, "sort", null);
    __decorate([
        Input()
    ], TreeComponent.prototype, "sortDirection", null);
    __decorate([
        Input()
    ], TreeComponent.prototype, "sorted", null);
    __decorate([
        Input()
    ], TreeComponent.prototype, "theme", null);
    __decorate([
        Input()
    ], TreeComponent.prototype, "toggleElementPosition", null);
    __decorate([
        Input()
    ], TreeComponent.prototype, "toggleMode", null);
    __decorate([
        Input()
    ], TreeComponent.prototype, "unfocusable", null);
    __decorate([
        Input()
    ], TreeComponent.prototype, "valueMember", null);
    __decorate([
        Output()
    ], TreeComponent.prototype, "onChange", void 0);
    __decorate([
        Output()
    ], TreeComponent.prototype, "onCollapse", void 0);
    __decorate([
        Output()
    ], TreeComponent.prototype, "onCollapsing", void 0);
    __decorate([
        Output()
    ], TreeComponent.prototype, "onDragEnd", void 0);
    __decorate([
        Output()
    ], TreeComponent.prototype, "onDragging", void 0);
    __decorate([
        Output()
    ], TreeComponent.prototype, "onDragStart", void 0);
    __decorate([
        Output()
    ], TreeComponent.prototype, "onExpand", void 0);
    __decorate([
        Output()
    ], TreeComponent.prototype, "onExpanding", void 0);
    __decorate([
        Output()
    ], TreeComponent.prototype, "onScrollBottomReached", void 0);
    __decorate([
        Output()
    ], TreeComponent.prototype, "onScrollTopReached", void 0);
    __decorate([
        Output()
    ], TreeComponent.prototype, "onSwipeleft", void 0);
    __decorate([
        Output()
    ], TreeComponent.prototype, "onSwiperight", void 0);
    TreeComponent = __decorate([
        Directive({
            exportAs: 'smart-tree', selector: 'smart-tree, [smart-tree]'
        })
    ], TreeComponent);
    return TreeComponent;
}(BaseElement));

var TreeItemComponent = /** @class */ (function (_super) {
    __extends(TreeItemComponent, _super);
    function TreeItemComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    TreeItemComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('smart-tree-item');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(TreeItemComponent.prototype, "disabled", {
        /** @description Enables or disables element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.disabled : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disabled = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeItemComponent.prototype, "label", {
        /** @description  */
        get: function () {
            return this.nativeElement ? this.nativeElement.label : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.label = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeItemComponent.prototype, "level", {
        /** @description  */
        get: function () {
            return this.nativeElement ? this.nativeElement.level : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.level = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeItemComponent.prototype, "selected", {
        /** @description  */
        get: function () {
            return this.nativeElement ? this.nativeElement.selected : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.selected = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeItemComponent.prototype, "separator", {
        /** @description  */
        get: function () {
            return this.nativeElement ? this.nativeElement.separator : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.separator = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeItemComponent.prototype, "shortcut", {
        /** @description  */
        get: function () {
            return this.nativeElement ? this.nativeElement.shortcut : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.shortcut = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeItemComponent.prototype, "value", {
        /** @description  */
        get: function () {
            return this.nativeElement ? this.nativeElement.value : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.value = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeItemComponent.prototype, "readonly", {
        /** @description Disables user interaction with the item. */
        get: function () {
            return this.nativeElement ? this.nativeElement.readonly : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.readonly = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeItemComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    TreeItemComponent.prototype.ngOnInit = function () {
    };
    TreeItemComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
    };
    TreeItemComponent.prototype.ngOnDestroy = function () { };
    TreeItemComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    TreeItemComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], TreeItemComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], TreeItemComponent.prototype, "label", null);
    __decorate([
        Input()
    ], TreeItemComponent.prototype, "level", null);
    __decorate([
        Input()
    ], TreeItemComponent.prototype, "selected", null);
    __decorate([
        Input()
    ], TreeItemComponent.prototype, "separator", null);
    __decorate([
        Input()
    ], TreeItemComponent.prototype, "shortcut", null);
    __decorate([
        Input()
    ], TreeItemComponent.prototype, "value", null);
    __decorate([
        Input()
    ], TreeItemComponent.prototype, "readonly", null);
    TreeItemComponent = __decorate([
        Directive({
            exportAs: 'smart-tree-item', selector: 'smart-tree-item, [smart-tree-item]'
        })
    ], TreeItemComponent);
    return TreeItemComponent;
}(BaseElement));

var TreeItemsGroupComponent = /** @class */ (function (_super) {
    __extends(TreeItemsGroupComponent, _super);
    function TreeItemsGroupComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    TreeItemsGroupComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('smart-tree-items-group');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(TreeItemsGroupComponent.prototype, "disabled", {
        /** @description Enables or disables element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.disabled : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disabled = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeItemsGroupComponent.prototype, "expanded", {
        /** @description  */
        get: function () {
            return this.nativeElement ? this.nativeElement.expanded : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.expanded = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeItemsGroupComponent.prototype, "label", {
        /** @description  */
        get: function () {
            return this.nativeElement ? this.nativeElement.label : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.label = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeItemsGroupComponent.prototype, "level", {
        /** @description  */
        get: function () {
            return this.nativeElement ? this.nativeElement.level : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.level = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeItemsGroupComponent.prototype, "selected", {
        /** @description  */
        get: function () {
            return this.nativeElement ? this.nativeElement.selected : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.selected = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeItemsGroupComponent.prototype, "separator", {
        /** @description  */
        get: function () {
            return this.nativeElement ? this.nativeElement.separator : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.separator = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeItemsGroupComponent.prototype, "value", {
        /** @description  */
        get: function () {
            return this.nativeElement ? this.nativeElement.value : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.value = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeItemsGroupComponent.prototype, "readonly", {
        /** @description Disables user interaction with the item. */
        get: function () {
            return this.nativeElement ? this.nativeElement.readonly : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.readonly = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeItemsGroupComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    TreeItemsGroupComponent.prototype.ngOnInit = function () {
    };
    TreeItemsGroupComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
    };
    TreeItemsGroupComponent.prototype.ngOnDestroy = function () { };
    TreeItemsGroupComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    TreeItemsGroupComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], TreeItemsGroupComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], TreeItemsGroupComponent.prototype, "expanded", null);
    __decorate([
        Input()
    ], TreeItemsGroupComponent.prototype, "label", null);
    __decorate([
        Input()
    ], TreeItemsGroupComponent.prototype, "level", null);
    __decorate([
        Input()
    ], TreeItemsGroupComponent.prototype, "selected", null);
    __decorate([
        Input()
    ], TreeItemsGroupComponent.prototype, "separator", null);
    __decorate([
        Input()
    ], TreeItemsGroupComponent.prototype, "value", null);
    __decorate([
        Input()
    ], TreeItemsGroupComponent.prototype, "readonly", null);
    TreeItemsGroupComponent = __decorate([
        Directive({
            exportAs: 'smart-tree-items-group', selector: 'smart-tree-items-group, [smart-tree-items-group]'
        })
    ], TreeItemsGroupComponent);
    return TreeItemsGroupComponent;
}(BaseElement));

var TreeModule = /** @class */ (function () {
    function TreeModule() {
    }
    TreeModule = __decorate([
        NgModule({
            declarations: [TreeComponent, TreeItemComponent, TreeItemsGroupComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            exports: [TreeComponent, TreeItemComponent, TreeItemsGroupComponent]
        })
    ], TreeModule);
    return TreeModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { Smart, TreeComponent, TreeItemComponent, TreeItemsGroupComponent, TreeModule, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-tree.js.map
