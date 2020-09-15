import * as tslib_1 from "tslib";
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter, QueryList, ContentChildren } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Smart } from './smart.element';
var TreeComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TreeComponent, _super);
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
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
    /** @description Returns SmartTree's state
    * @returns {any}
  */
    TreeComponent.prototype.getState = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
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
    /** @description Selects an item.
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
    /** @description Unselects an item.
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
    tslib_1.__decorate([
        Input()
    ], TreeComponent.prototype, "allowDrag", null);
    tslib_1.__decorate([
        Input()
    ], TreeComponent.prototype, "allowDrop", null);
    tslib_1.__decorate([
        Input()
    ], TreeComponent.prototype, "animation", null);
    tslib_1.__decorate([
        Input()
    ], TreeComponent.prototype, "autoHideToggleElement", null);
    tslib_1.__decorate([
        Input()
    ], TreeComponent.prototype, "autoLoadState", null);
    tslib_1.__decorate([
        Input()
    ], TreeComponent.prototype, "autoSaveState", null);
    tslib_1.__decorate([
        Input()
    ], TreeComponent.prototype, "autoSort", null);
    tslib_1.__decorate([
        Input()
    ], TreeComponent.prototype, "dataSource", null);
    tslib_1.__decorate([
        Input()
    ], TreeComponent.prototype, "disabled", null);
    tslib_1.__decorate([
        Input()
    ], TreeComponent.prototype, "displayLoadingIndicator", null);
    tslib_1.__decorate([
        Input()
    ], TreeComponent.prototype, "displayMember", null);
    tslib_1.__decorate([
        Input()
    ], TreeComponent.prototype, "dragFeedbackFormatFunction", null);
    tslib_1.__decorate([
        Input()
    ], TreeComponent.prototype, "dragOffset", null);
    tslib_1.__decorate([
        Input()
    ], TreeComponent.prototype, "editable", null);
    tslib_1.__decorate([
        Input()
    ], TreeComponent.prototype, "expandMode", null);
    tslib_1.__decorate([
        Input()
    ], TreeComponent.prototype, "filterable", null);
    tslib_1.__decorate([
        Input()
    ], TreeComponent.prototype, "filterInputPlaceholder", null);
    tslib_1.__decorate([
        Input()
    ], TreeComponent.prototype, "filterMode", null);
    tslib_1.__decorate([
        Input()
    ], TreeComponent.prototype, "hasThreeStates", null);
    tslib_1.__decorate([
        Input()
    ], TreeComponent.prototype, "itemsMember", null);
    tslib_1.__decorate([
        Input()
    ], TreeComponent.prototype, "loadingIndicatorPlaceholder", null);
    tslib_1.__decorate([
        Input()
    ], TreeComponent.prototype, "loadingIndicatorPosition", null);
    tslib_1.__decorate([
        Input()
    ], TreeComponent.prototype, "locale", null);
    tslib_1.__decorate([
        Input()
    ], TreeComponent.prototype, "localizeFormatFunction", null);
    tslib_1.__decorate([
        Input()
    ], TreeComponent.prototype, "messages", null);
    tslib_1.__decorate([
        Input()
    ], TreeComponent.prototype, "overflow", null);
    tslib_1.__decorate([
        Input()
    ], TreeComponent.prototype, "readonly", null);
    tslib_1.__decorate([
        Input()
    ], TreeComponent.prototype, "rightToLeft", null);
    tslib_1.__decorate([
        Input()
    ], TreeComponent.prototype, "scrollMode", null);
    tslib_1.__decorate([
        Input()
    ], TreeComponent.prototype, "selectedIndexes", null);
    tslib_1.__decorate([
        Input()
    ], TreeComponent.prototype, "selectionDisplayMode", null);
    tslib_1.__decorate([
        Input()
    ], TreeComponent.prototype, "selectionMode", null);
    tslib_1.__decorate([
        Input()
    ], TreeComponent.prototype, "selectionTarget", null);
    tslib_1.__decorate([
        Input()
    ], TreeComponent.prototype, "showLines", null);
    tslib_1.__decorate([
        Input()
    ], TreeComponent.prototype, "showRootLines", null);
    tslib_1.__decorate([
        Input()
    ], TreeComponent.prototype, "sort", null);
    tslib_1.__decorate([
        Input()
    ], TreeComponent.prototype, "sortDirection", null);
    tslib_1.__decorate([
        Input()
    ], TreeComponent.prototype, "sorted", null);
    tslib_1.__decorate([
        Input()
    ], TreeComponent.prototype, "theme", null);
    tslib_1.__decorate([
        Input()
    ], TreeComponent.prototype, "toggleElementPosition", null);
    tslib_1.__decorate([
        Input()
    ], TreeComponent.prototype, "toggleMode", null);
    tslib_1.__decorate([
        Input()
    ], TreeComponent.prototype, "unfocusable", null);
    tslib_1.__decorate([
        Input()
    ], TreeComponent.prototype, "valueMember", null);
    tslib_1.__decorate([
        Output()
    ], TreeComponent.prototype, "onChange", void 0);
    tslib_1.__decorate([
        Output()
    ], TreeComponent.prototype, "onCollapse", void 0);
    tslib_1.__decorate([
        Output()
    ], TreeComponent.prototype, "onCollapsing", void 0);
    tslib_1.__decorate([
        Output()
    ], TreeComponent.prototype, "onDragEnd", void 0);
    tslib_1.__decorate([
        Output()
    ], TreeComponent.prototype, "onDragging", void 0);
    tslib_1.__decorate([
        Output()
    ], TreeComponent.prototype, "onDragStart", void 0);
    tslib_1.__decorate([
        Output()
    ], TreeComponent.prototype, "onExpand", void 0);
    tslib_1.__decorate([
        Output()
    ], TreeComponent.prototype, "onExpanding", void 0);
    tslib_1.__decorate([
        Output()
    ], TreeComponent.prototype, "onScrollBottomReached", void 0);
    tslib_1.__decorate([
        Output()
    ], TreeComponent.prototype, "onScrollTopReached", void 0);
    tslib_1.__decorate([
        Output()
    ], TreeComponent.prototype, "onSwipeleft", void 0);
    tslib_1.__decorate([
        Output()
    ], TreeComponent.prototype, "onSwiperight", void 0);
    TreeComponent = tslib_1.__decorate([
        Directive({
            selector: 'smart-tree, [smart-tree]'
        })
    ], TreeComponent);
    return TreeComponent;
}(BaseElement));
export { TreeComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQudHJlZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NtYXJ0LXdlYmNvbXBvbmVudHMtYW5ndWxhci90cmVlLyIsInNvdXJjZXMiOlsic21hcnQudHJlZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0TCxPQUFPLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXJELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQVl4QztJQUFtQyx5Q0FBVztJQUU3Qyx1QkFBWSxHQUFxQjtRQUFqQyxZQUNDLGtCQUFNLEdBQUcsQ0FBQyxTQUVWO1FBRU8sbUJBQWEsR0FBVSxFQUFFLENBQUM7UUFnWmxDOzs7OztVQUtFO1FBQ1EsY0FBUSxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRW5FOzs7Ozs7O1VBT0U7UUFDUSxnQkFBVSxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXJFOzs7Ozs7O1VBT0U7UUFDUSxrQkFBWSxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXZFOzs7Ozs7Ozs7VUFTRTtRQUNRLGVBQVMsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVwRTs7Ozs7O1VBTUU7UUFDUSxnQkFBVSxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXJFOzs7Ozs7OztVQVFFO1FBQ1EsaUJBQVcsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV0RTs7Ozs7OztVQU9FO1FBQ1EsY0FBUSxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRW5FOzs7Ozs7O1VBT0U7UUFDUSxpQkFBVyxHQUE4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O0lBT0Q7UUFEQyxLQUFLLEVBQUU7d0RBR1A7SUFPRDtRQURDLEtBQUssRUFBRTtrREFHUDtJQU9EO1FBREMsS0FBSyxFQUFFO3NEQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7NkNBR1A7SUFPRDtRQURDLEtBQUssRUFBRTtzREFHUDtJQU9EO1FBREMsS0FBSyxFQUFFOytDQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7OENBR1A7SUFPRDtRQURDLEtBQUssRUFBRTs4REFHUDtJQU9EO1FBREMsS0FBSyxFQUFFO21EQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7b0RBR1A7SUFPRDtRQURDLEtBQUssRUFBRTtvREFHUDtJQVdTO1FBQVQsTUFBTSxFQUFFO21EQUEwRDtJQVV6RDtRQUFULE1BQU0sRUFBRTtxREFBNEQ7SUFVM0Q7UUFBVCxNQUFNLEVBQUU7dURBQThEO0lBWTdEO1FBQVQsTUFBTSxFQUFFO29EQUEyRDtJQVMxRDtRQUFULE1BQU0sRUFBRTtxREFBNEQ7SUFXM0Q7UUFBVCxNQUFNLEVBQUU7c0RBQTZEO0lBVTVEO1FBQVQsTUFBTSxFQUFFO21EQUEwRDtJQVV6RDtRQUFULE1BQU0sRUFBRTtzREFBNkQ7SUFJNUQ7UUFBVCxNQUFNLEVBQUU7Z0VBQXVFO0lBSXRFO1FBQVQsTUFBTSxFQUFFOzZEQUFvRTtJQUluRTtRQUFULE1BQU0sRUFBRTtzREFBNkQ7SUFJNUQ7UUFBVCxNQUFNLEVBQUU7dURBQThEO0lBcmYzRCxhQUFhO1FBSnpCLFNBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSwwQkFBMEI7U0FDcEMsQ0FBQztPQUVXLGFBQWEsQ0E2N0J6QjtJQUFELG9CQUFDO0NBQUEsQUE3N0JELENBQW1DLFdBQVcsR0E2N0I3QztTQTc3QlksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRyZWUgfSBmcm9tICcuLy4uL2luZGV4JztcbmltcG9ydCB7IEFuaW1hdGlvbiwgVHJlZUV4cGFuZE1vZGUsIEZpbHRlck1vZGUsIFZlcnRpY2FsQWxpZ25tZW50LCBPdmVyZmxvdywgVHJlZVNjcm9sbE1vZGUsIFRyZWVTZWxlY3Rpb25EaXNwbGF5TW9kZSwgVHJlZVNlbGVjdGlvbk1vZGUsIFRyZWVTZWxlY3Rpb25UYXJnZXQsIFRyZWVTb3J0RGlyZWN0aW9uLCBQb3NpdGlvbiwgVHJlZVRvZ2dsZU1vZGUsIEVsZW1lbnRSZW5kZXJNb2RlfSBmcm9tICcuLy4uL2luZGV4JztcbmltcG9ydCB7IENvbXBvbmVudCwgRGlyZWN0aXZlLCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgU2ltcGxlQ2hhbmdlcywgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFF1ZXJ5TGlzdCwgQ29udGVudENoaWxkcmVuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXNlRWxlbWVudCwgU21hcnQgfSBmcm9tICcuL3NtYXJ0LmVsZW1lbnQnO1xuZXhwb3J0IHsgQW5pbWF0aW9uLCBUcmVlRXhwYW5kTW9kZSwgRmlsdGVyTW9kZSwgVmVydGljYWxBbGlnbm1lbnQsIE92ZXJmbG93LCBUcmVlU2Nyb2xsTW9kZSwgVHJlZVNlbGVjdGlvbkRpc3BsYXlNb2RlLCBUcmVlU2VsZWN0aW9uTW9kZSwgVHJlZVNlbGVjdGlvblRhcmdldCwgVHJlZVNvcnREaXJlY3Rpb24sIFBvc2l0aW9uLCBUcmVlVG9nZ2xlTW9kZSwgRWxlbWVudFJlbmRlck1vZGV9IGZyb20gJy4vLi4vaW5kZXgnO1xuZXhwb3J0IHsgU21hcnQgfSBmcm9tICcuL3NtYXJ0LmVsZW1lbnQnO1xuZXhwb3J0IHsgVHJlZSB9IGZyb20gJy4vLi4vaW5kZXgnO1xuXG5cbmltcG9ydCB7IFRyZWVJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9zbWFydC50cmVlaXRlbSc7XG5cbmltcG9ydCB7IFRyZWVJdGVtc0dyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9zbWFydC50cmVlaXRlbXNncm91cCc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ3NtYXJ0LXRyZWUsIFtzbWFydC10cmVlXSdcbn0pXG5cbmV4cG9ydCBjbGFzcyBUcmVlQ29tcG9uZW50IGV4dGVuZHMgQmFzZUVsZW1lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcblxuXHRjb25zdHJ1Y3RvcihyZWY6IEVsZW1lbnRSZWY8VHJlZT4pIHtcblx0XHRzdXBlcihyZWYpO1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA9IHJlZi5uYXRpdmVFbGVtZW50IGFzIFRyZWU7XG5cdH1cblxuXHRwcml2YXRlIGV2ZW50SGFuZGxlcnM6IGFueVtdID0gW107XG5cblx0cHVibGljIG5hdGl2ZUVsZW1lbnQ6IFRyZWU7XG5cdC8qKiBAZGVzY3JpcHRpb24gQ3JlYXRlcyB0aGUgY29tcG9uZW50IG9uIGRlbWFuZC5cblx0ICogQHBhcmFtIHByb3BlcnRpZXMgQW4gb3B0aW9uYWwgb2JqZWN0IG9mIHByb3BlcnRpZXMsIHdoaWNoIHdpbGwgYmUgYWRkZWQgdG8gdGhlIHRlbXBsYXRlIGJpbmRlZCBvbmVzLlxuXHQgKi9cblx0cHVibGljIGNyZWF0ZUNvbXBvbmVudChwcm9wZXJ0aWVzID0ge30pOiBhbnkge1xuICAgIFx0dGhpcy5uYXRpdmVFbGVtZW50ID0gPFRyZWU+ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc21hcnQtdHJlZScpO1xuXHRcdGZvciAobGV0IHByb3BlcnR5TmFtZSBpbiBwcm9wZXJ0aWVzKSB7IFxuIFx0XHRcdHRoaXMubmF0aXZlRWxlbWVudFtwcm9wZXJ0eU5hbWVdID0gcHJvcGVydGllc1twcm9wZXJ0eU5hbWVdO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50O1xuXHR9XG5cdC8qKiBAZGVzY3JpcHRpb24gQWxsb3dzIGRyYWcgb3BlcmF0aW9uIGluIGN1cnJlbnQgdHJlZS4gV2hlbiBlbmFibGVkLCBpdGVtcyBjYW4gYmUgZHJhZ2dlZCBhbmQgZHJvcHBlZCB0byBhIHRyZWUgd2l0aCBlbmFibGVkIGFsbG93RHJvcC4gKi9cblx0QElucHV0KClcblx0Z2V0IGFsbG93RHJhZygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmFsbG93RHJhZyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYWxsb3dEcmFnKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmFsbG93RHJhZyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBbGxvd3MgZHJvcCBvcGVyYXRpb24uIERyb3BwZWQgaXRlbXMgY291bGQgb3JpZ2luYXRlIGZyb20gdGhlIGN1cnJlbnQgdHJlZSBvciBhbm90aGVyIHRyZWUuICovXG5cdEBJbnB1dCgpXG5cdGdldCBhbGxvd0Ryb3AoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hbGxvd0Ryb3AgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGFsbG93RHJvcCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hbGxvd0Ryb3AgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSBhbmltYXRpb24gbW9kZS4gQW5pbWF0aW9uIGlzIGRpc2FibGVkIHdoZW4gdGhlIHByb3BlcnR5IGlzIHNldCB0byAnbm9uZScgKi9cblx0QElucHV0KClcblx0Z2V0IGFuaW1hdGlvbigpOiBBbmltYXRpb24ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYW5pbWF0aW9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBhbmltYXRpb24odmFsdWU6IEFuaW1hdGlvbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hbmltYXRpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQXV0b21hdGljYWxseSBoaWRlcyB0aGUgdHJlZSdzIHRvZ2dsZSBlbGVtZW50IChhcnJvdykgb24gbW91c2VsZWF2ZSBhbmQgc2hvd3MgaXQgb24gbW91c2VlbnRlci4gKi9cblx0QElucHV0KClcblx0Z2V0IGF1dG9IaWRlVG9nZ2xlRWxlbWVudCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9IaWRlVG9nZ2xlRWxlbWVudCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYXV0b0hpZGVUb2dnbGVFbGVtZW50KHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9IaWRlVG9nZ2xlRWxlbWVudCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFbmFibGVzIG9yIGRpc2FibGVzIGF1dG8gbG9hZCBzdGF0ZSBmcm9tIHRoZSBicm93c2VyJ3MgbG9jYWxTdG9yYWdlLiBJbmZvcm1hdGlvbiBhYm91dCBmaWx0ZXJpbmcsIHNvcnRpbmcsIGV4cGFuZGVkIGFuZCBzZWxlY3RlZCBpdGVtcyBpcyBsb2FkZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBhdXRvTG9hZFN0YXRlKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYXV0b0xvYWRTdGF0ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYXV0b0xvYWRTdGF0ZSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hdXRvTG9hZFN0YXRlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEVuYWJsZXMgb3IgZGlzYWJsZXMgYXV0byBzYXZlIHN0YXRlIHRvIHRoZSBicm93c2VyJ3MgbG9jYWxTdG9yYWdlLiBJbmZvcm1hdGlvbiBhYm91dCBmaWx0ZXJpbmcsIHNvcnRpbmcsIGV4cGFuZGVkIGFuZCBzZWxlY3RlZCBpdGVtcyBpcyBzYXZlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IGF1dG9TYXZlU3RhdGUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hdXRvU2F2ZVN0YXRlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBhdXRvU2F2ZVN0YXRlKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9TYXZlU3RhdGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRW5hYmxlcyBvciBkaXNhYmxlcyBhdXRvIHNvcnRpbmcuIElmIG1vZGlmaWNhdGlvbnMgYXJlIG1hZGUgdG8gYSBzb3J0ZWQgdHJlZSwgYnV0IGF1dG9Tb3J0IGlzIGZhbHNlLCB0aGUgdHJlZSB3aWxsIG5vdCBiZSByZS1zb3J0ZWQgYXV0b21hdGljYWxseS4gKi9cblx0QElucHV0KClcblx0Z2V0IGF1dG9Tb3J0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYXV0b1NvcnQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGF1dG9Tb3J0KHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9Tb3J0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIGRhdGEgc291cmNlIHRoYXQgd2lsbCBiZSBsb2FkZWQgdG8gdGhlIFRyZWUuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkYXRhU291cmNlKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kYXRhU291cmNlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkYXRhU291cmNlKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGF0YVNvdXJjZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFbmFibGVzIG9yIGRpc2FibGVzIGpxeFRyZWUuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVkIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlZCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTaG93cyBvciBoaWRlcyBsb2FkaW5nIGluZGljYXRvci4gKi9cblx0QElucHV0KClcblx0Z2V0IGRpc3BsYXlMb2FkaW5nSW5kaWNhdG9yKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzcGxheUxvYWRpbmdJbmRpY2F0b3IgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRpc3BsYXlMb2FkaW5nSW5kaWNhdG9yKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc3BsYXlMb2FkaW5nSW5kaWNhdG9yID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIGZpZWxkIGluIHRoZSBkYXRhIHNvdXJjZSB0aGF0IGNvcnJlc3BvbmRzIHRvIGFuIGl0ZW0ncyBsYWJlbC4gKi9cblx0QElucHV0KClcblx0Z2V0IGRpc3BsYXlNZW1iZXIoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc3BsYXlNZW1iZXIgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRpc3BsYXlNZW1iZXIodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNwbGF5TWVtYmVyID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEEgY2FsbGJhY2sgZnVuY3Rpb24gZm9yIGN1c3RvbWl6aW5nIHRoZSBIVE1MIG9mIHRoZSBkcmFnIGZlZWRiYWNrLiBJdCByZWNlaXZlcyBvbmUgcGFyYW1ldGVyIC0gYW4gYXJyYXkgb2YgdGhlIGN1cnJlbnRseSBkcmFnZ2VkIGl0ZW1zLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZHJhZ0ZlZWRiYWNrRm9ybWF0RnVuY3Rpb24oKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRyYWdGZWVkYmFja0Zvcm1hdEZ1bmN0aW9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkcmFnRmVlZGJhY2tGb3JtYXRGdW5jdGlvbih2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRyYWdGZWVkYmFja0Zvcm1hdEZ1bmN0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIG9mZnNldCBvZiB0aGUgZHJhZyBmZWVkYmFjayBlbGVtZW50IGZyb20gdGhlIG1vdXNlIGN1cnNvciB3aGVuIGRyYWdnaW5nIGl0ZW1zLiBUaGUgZmlyc3QgbWVtYmVyIG9mIHRoZSBhcnJheSBpcyB0aGUgaG9yaXpvbnRhbCBvZmZzZXQgYW5kIHRoZSBzZWNvbmQgb25lIC0gdGhlIHZlcnRpY2FsIG9mZnNldC4gKi9cblx0QElucHV0KClcblx0Z2V0IGRyYWdPZmZzZXQoKTogbnVtYmVyW10ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZHJhZ09mZnNldCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZHJhZ09mZnNldCh2YWx1ZTogbnVtYmVyW10pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZHJhZ09mZnNldCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFbmFibGVzIG9yIGRpc2FibGVzIGl0ZW0ncyBlZGl0dGluZy4gQW4gZWRpdCBvcGVyYXRpb24gY2FuIGJlIGluaXRpYXRlZCBieSBkb3VibGUtY2xpY2tpbmcgYSB0cmVlIGl0ZW0gb3IgcHJlc3NpbmcgRjIgd2hpbGUgYW4gaXRlbSBpcyBzZWxlY3RlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IGVkaXRhYmxlKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZWRpdGFibGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGVkaXRhYmxlKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmVkaXRhYmxlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIGV4cGFuZCBiZWhhdmlvciBvZiBUcmVlSXRlbXNHcm91cHMgaW4gdGhlIFRyZWUuICovXG5cdEBJbnB1dCgpXG5cdGdldCBleHBhbmRNb2RlKCk6IFRyZWVFeHBhbmRNb2RlIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmV4cGFuZE1vZGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGV4cGFuZE1vZGUodmFsdWU6IFRyZWVFeHBhbmRNb2RlKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmV4cGFuZE1vZGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRW5hYmxlcyBvciBkaXNhYmxlcyBmaWx0ZXJpbmcuIFNob3dzIG9yIGhpZGVzIGZpbHRlciBpbnB1dC4gKi9cblx0QElucHV0KClcblx0Z2V0IGZpbHRlcmFibGUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5maWx0ZXJhYmxlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBmaWx0ZXJhYmxlKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmZpbHRlcmFibGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBjdXN0b20gdGV4dCBmb3IgcGxhY2Vob2xkZXIgaW4gdGhlIGZpbHRlciBpbnB1dC4gKi9cblx0QElucHV0KClcblx0Z2V0IGZpbHRlcklucHV0UGxhY2Vob2xkZXIoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmZpbHRlcklucHV0UGxhY2Vob2xkZXIgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGZpbHRlcklucHV0UGxhY2Vob2xkZXIodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5maWx0ZXJJbnB1dFBsYWNlaG9sZGVyID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgZmlsdGVyIG1vZGUuICovXG5cdEBJbnB1dCgpXG5cdGdldCBmaWx0ZXJNb2RlKCk6IEZpbHRlck1vZGUge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZmlsdGVyTW9kZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZmlsdGVyTW9kZSh2YWx1ZTogRmlsdGVyTW9kZSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5maWx0ZXJNb2RlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB3aGV0aGVyIHRoZSB0cmVlIGNoZWNrYm94ZXMgaGF2ZSB0aHJlZSBzdGF0ZXMgLSBjaGVja2VkLCB1bmNoZWNrZWQgYW5kIGluZGV0ZXJtaW5hdGUuIFdob3JrcyBvbiBzZWxlY3Rpb25Nb2RlOiAnY2hlY2tCb3gnICovXG5cdEBJbnB1dCgpXG5cdGdldCBoYXNUaHJlZVN0YXRlcygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lmhhc1RocmVlU3RhdGVzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBoYXNUaHJlZVN0YXRlcyh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oYXNUaHJlZVN0YXRlcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBmaWVsZCBpbiB0aGUgZGF0YSBzb3VyY2UgdGhhdCBjb3JyZXNwb25kcyB0byBhbiBpdGVtIGdyb3VwJ3Mgc3ViaXRlbXMgY29sbGVjdGlvbi4gKi9cblx0QElucHV0KClcblx0Z2V0IGl0ZW1zTWVtYmVyKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5pdGVtc01lbWJlciA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgaXRlbXNNZW1iZXIodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5pdGVtc01lbWJlciA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIGN1c3RvbSB0ZXh0IGZvciBwbGFjZWhvbGRlciBpbiB0aGUgbG9hZGluZyBpbmRpY2F0b3IgaWYgbG9hZGluZ0luZGljYXRvclBvc2l0aW9uIGlzIHNldCB0byAndG9wJyBvciAnYm90dG9tJy4gKi9cblx0QElucHV0KClcblx0Z2V0IGxvYWRpbmdJbmRpY2F0b3JQbGFjZWhvbGRlcigpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubG9hZGluZ0luZGljYXRvclBsYWNlaG9sZGVyIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBsb2FkaW5nSW5kaWNhdG9yUGxhY2Vob2xkZXIodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sb2FkaW5nSW5kaWNhdG9yUGxhY2Vob2xkZXIgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyB0aGUgcG9zaXRpb24gb2YgdGhlIGxvYWRpbmcgaW5kaWNhdG9yLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbG9hZGluZ0luZGljYXRvclBvc2l0aW9uKCk6IFZlcnRpY2FsQWxpZ25tZW50IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxvYWRpbmdJbmRpY2F0b3JQb3NpdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbG9hZGluZ0luZGljYXRvclBvc2l0aW9uKHZhbHVlOiBWZXJ0aWNhbEFsaWdubWVudCkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sb2FkaW5nSW5kaWNhdG9yUG9zaXRpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSBsb2NhbGUuIFVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCB0aGUgcHJvcGVydHkgbWVzc2FnZXMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBsb2NhbGUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxvY2FsZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbG9jYWxlKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubG9jYWxlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIENhbGxiYWNrLCByZWxhdGVkIHRvIGxvY2FsaXphdGlvbiBtb2R1bGUuICAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbG9jYWxpemVGb3JtYXRGdW5jdGlvbigpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubG9jYWxpemVGb3JtYXRGdW5jdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbG9jYWxpemVGb3JtYXRGdW5jdGlvbih2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxvY2FsaXplRm9ybWF0RnVuY3Rpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIGFuIG9iamVjdCBzcGVjaWZ5aW5nIHN0cmluZ3MgdXNlZCBpbiB0aGUgd2lkZ2V0IHRoYXQgY2FuIGJlIGxvY2FsaXplZC4gVXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZSBwcm9wZXJ0eSBsb2NhbGUuICovXG5cdEBJbnB1dCgpXG5cdGdldCBtZXNzYWdlcygpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubWVzc2FnZXMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG1lc3NhZ2VzKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubWVzc2FnZXMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU3BlY2lmaWVzIHdoYXQgc2hvdWxkIGhhcHBlbiB3aXRoIHRoZSBzY3JvbGxiYXIgKG9yIHNjcm9sbCBidXR0b25zIGluIHNjcm9sbE1vZGU6ICdzY3JvbGxCdXR0b25zJykgaWYgY29udGVudCBvdmVyZmxvd3MgdGhlIGVsZW1lbnQncyBib3guICovXG5cdEBJbnB1dCgpXG5cdGdldCBvdmVyZmxvdygpOiBPdmVyZmxvdyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vdmVyZmxvdyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgb3ZlcmZsb3codmFsdWU6IE92ZXJmbG93KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm92ZXJmbG93ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIElmIHRoZSBlbGVtZW50IGlzIHJlYWRvbmx5LCB1c2VycyBjYW5ub3QgaW50ZXJhY3Qgd2l0aCBpdC4gKi9cblx0QElucHV0KClcblx0Z2V0IHJlYWRvbmx5KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmVhZG9ubHkgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHJlYWRvbmx5KHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlYWRvbmx5ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgd2hldGhlciB0aGUgcmlnaHQtdG8tbGVmdCBzdXBwb3J0IGlzIGVuYWJsZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCByaWdodFRvTGVmdCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJpZ2h0VG9MZWZ0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCByaWdodFRvTGVmdCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yaWdodFRvTGVmdCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHdoZXRoZXIgdG8gdXNlIHNjcm9sbGJhciBvciBzY3JvbGxCdXR0b25zIHdoZW4gY29udGVudCBvdmVyZmxvd3MgYW4gZWxlbWVudCdzIGJveC4gKi9cblx0QElucHV0KClcblx0Z2V0IHNjcm9sbE1vZGUoKTogVHJlZVNjcm9sbE1vZGUge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsTW9kZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc2Nyb2xsTW9kZSh2YWx1ZTogVHJlZVNjcm9sbE1vZGUpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsTW9kZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBbiBhcnJheSB3aXRoIGluZGV4ZXMgKHBhdGhzKSBvZiB0aGUgc2VsZWN0ZWQgaXRlbXMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBzZWxlY3RlZEluZGV4ZXMoKTogc3RyaW5nW10ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0ZWRJbmRleGVzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzZWxlY3RlZEluZGV4ZXModmFsdWU6IHN0cmluZ1tdKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdGVkSW5kZXhlcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSB3YXkgc2VsZWN0ZWQgaXRlbXMgYXJlIGhpZ2hsaWdodGVkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc2VsZWN0aW9uRGlzcGxheU1vZGUoKTogVHJlZVNlbGVjdGlvbkRpc3BsYXlNb2RlIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdGlvbkRpc3BsYXlNb2RlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzZWxlY3Rpb25EaXNwbGF5TW9kZSh2YWx1ZTogVHJlZVNlbGVjdGlvbkRpc3BsYXlNb2RlKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdGlvbkRpc3BsYXlNb2RlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgc2VsZWN0aW9uIG1vZGUuICovXG5cdEBJbnB1dCgpXG5cdGdldCBzZWxlY3Rpb25Nb2RlKCk6IFRyZWVTZWxlY3Rpb25Nb2RlIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdGlvbk1vZGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHNlbGVjdGlvbk1vZGUodmFsdWU6IFRyZWVTZWxlY3Rpb25Nb2RlKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdGlvbk1vZGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB3aGV0aGVyIHNtYXJ0LXRyZWUtaXRlbXMtZ3JvdXBzIGNhbiBiZSBzZWxlY3RlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IHNlbGVjdGlvblRhcmdldCgpOiBUcmVlU2VsZWN0aW9uVGFyZ2V0IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdGlvblRhcmdldCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc2VsZWN0aW9uVGFyZ2V0KHZhbHVlOiBUcmVlU2VsZWN0aW9uVGFyZ2V0KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdGlvblRhcmdldCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTaG93cyBvciBoaWRlcyBsaW5lcywgZGlzcGxheWluZyB0aGUgcmVsYXRpb24gYmV0d2VlbiBlbGVtZW50cyBpbiBncm91cC4gKi9cblx0QElucHV0KClcblx0Z2V0IHNob3dMaW5lcygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNob3dMaW5lcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc2hvd0xpbmVzKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNob3dMaW5lcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTaG93cyBvciBoaWRlcyBsaW5lcyBzdGFydGluZyBmcm9tIHRoZSByb290IG5vZGUuIEVuYWJsZWQgd2hlbiAnc2hvd0xpbmVzJyBpcyBzZXQgdG8gdHJ1ZS4gKi9cblx0QElucHV0KClcblx0Z2V0IHNob3dSb290TGluZXMoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zaG93Um9vdExpbmVzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzaG93Um9vdExpbmVzKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNob3dSb290TGluZXMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyB1c2VyLWRlZmluZWQgZnVuY3Rpb24gYWJvdXQgY3VzdG9tIHNvcnRpbmcuICovXG5cdEBJbnB1dCgpXG5cdGdldCBzb3J0KCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zb3J0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzb3J0KHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc29ydCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHNvcnQgZGlyZWN0aW9uIC0gYXNjZW5kaW5nIG9yIGRlc2NlbmRpbmcuICovXG5cdEBJbnB1dCgpXG5cdGdldCBzb3J0RGlyZWN0aW9uKCk6IFRyZWVTb3J0RGlyZWN0aW9uIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNvcnREaXJlY3Rpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHNvcnREaXJlY3Rpb24odmFsdWU6IFRyZWVTb3J0RGlyZWN0aW9uKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNvcnREaXJlY3Rpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRW5hYmxlcyBvciBkaXNhYmxlcyBzb3J0aW5nLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc29ydGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc29ydGVkIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzb3J0ZWQodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc29ydGVkID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgZWxlbWVudCdzIHZpc3VhbCB0aGVtZS4gKi9cblx0QElucHV0KClcblx0Z2V0IHRoZW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50aGVtZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdGhlbWUodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50aGVtZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRvZ2xlIGVsZW1lbnQgKGFycm93KSBwb3NpdGlvbi4gKi9cblx0QElucHV0KClcblx0Z2V0IHRvZ2dsZUVsZW1lbnRQb3NpdGlvbigpOiBQb3NpdGlvbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50b2dnbGVFbGVtZW50UG9zaXRpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRvZ2dsZUVsZW1lbnRQb3NpdGlvbih2YWx1ZTogUG9zaXRpb24pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudG9nZ2xlRWxlbWVudFBvc2l0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIHdheSB0byB0b2dnbGUgc21hcnQtdHJlZS1pdGVtcy1ncm91cHMuICovXG5cdEBJbnB1dCgpXG5cdGdldCB0b2dnbGVNb2RlKCk6IFRyZWVUb2dnbGVNb2RlIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRvZ2dsZU1vZGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRvZ2dsZU1vZGUodmFsdWU6IFRyZWVUb2dnbGVNb2RlKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRvZ2dsZU1vZGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIGlmIHRoZSBlbGVtZW50IGNhbiBiZSBmb2N1c2VkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdW5mb2N1c2FibGUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC51bmZvY3VzYWJsZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdW5mb2N1c2FibGUodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudW5mb2N1c2FibGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgZmllbGQgaW4gdGhlIGRhdGEgc291cmNlIHRoYXQgY29ycmVzcG9uZHMgdG8gYW4gaXRlbSdzIHZhbHVlLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdmFsdWVNZW1iZXIoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnZhbHVlTWVtYmVyIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB2YWx1ZU1lbWJlcih2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnZhbHVlTWVtYmVyID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gc2VsZWN0aW9uIGluIHNtYXJ0LXRyZWUgaXMgY2hhbmdlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRpdGVtLCBcdG9sZFNlbGVjdGVkSW5kZXhlcywgXHRzZWxlY3RlZEluZGV4ZXMpXG5cdCogICBpdGVtIC0gVGhlIGl0ZW0gdGhlIHVzZXIgaGFzIGludGVyYWN0ZWQgd2l0aCB0byBjaGFuZ2UgdGhlIHNlbGVjdGlvbiAob25seSB3aGVuIGFwcGxpY2FibGUpLlxuXHQqICAgb2xkU2VsZWN0ZWRJbmRleGVzIC0gVGhlIHNlbGVjdGVkIGluZGV4ZXMgYmVmb3JlIHRoZSBzZWxlY3Rpb24gaXMgY2hhbmdlZC5cblx0KiAgIHNlbGVjdGVkSW5kZXhlcyAtIFRoZSBzZWxlY3RlZCBpbmRleGVzIGFmdGVyIHRoZSBzZWxlY3Rpb24gaXMgY2hhbmdlZC5cblx0Ki9cblx0QE91dHB1dCgpIG9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIHNtYXJ0LXRyZWUtaXRlbXMtZ3JvdXAgaXMgY29sbGFwc2VkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGl0ZW0sIFx0bGFiZWwsIFx0cGF0aCwgXHR2YWx1ZSwgXHRjaGlsZHJlbilcblx0KiAgIGl0ZW0gLSB0aGUgY29sbGFwc2VkIGpxeC10cmVlLWl0ZW1zLWdyb3VwXG5cdCogICBsYWJlbCAtIHRoZSBsYWJlbCBvZiB0aGUgY29sbGFwc2VkIGpxeC10cmVlLWl0ZW1zLWdyb3VwXG5cdCogICBwYXRoIC0gdGhlIHBhdGggb2YgdGhlIGNvbGxhcHNlZCBqcXgtdHJlZS1pdGVtcy1ncm91cFxuXHQqICAgdmFsdWUgLSB0aGUgdmFsdWUgb2YgdGhlIGNvbGxhcHNlZCBqcXgtdHJlZS1pdGVtcy1ncm91cFxuXHQqICAgY2hpbGRyZW4gLSB0aGUgY2hpbGRyZW4gb2YgdGhlIGNvbGxhcHNlZCBqcXgtdHJlZS1pdGVtcy1ncm91cFxuXHQqL1xuXHRAT3V0cHV0KCkgb25Db2xsYXBzZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSBzbWFydC10cmVlLWl0ZW1zLWdyb3VwIGlzIGFib3V0IHRvIGJlIGNvbGxhcHNlZC4gVGhlIGNvbGxhcHNpbmcgb3BlcmF0aW9uIGNhbiBiZSBjYW5jZWxlZCBieSBjYWxsaW5nIGV2ZW50LnByZXZlbnREZWZhdWx0KCkgaW4gdGhlIGV2ZW50IGhhbmRsZXIgZnVuY3Rpb24uXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0aXRlbSwgXHRsYWJlbCwgXHRwYXRoLCBcdHZhbHVlLCBcdGNoaWxkcmVuKVxuXHQqICAgaXRlbSAtIHRoZSBqcXgtdHJlZS1pdGVtcy1ncm91cCB0byBiZSBjb2xsYXBzZWRcblx0KiAgIGxhYmVsIC0gdGhlIGxhYmVsIG9mIHRoZSBqcXgtdHJlZS1pdGVtcy1ncm91cCB0byBiZSBjb2xsYXBzZWRcblx0KiAgIHBhdGggLSB0aGUgcGF0aCBvZiB0aGUganF4LXRyZWUtaXRlbXMtZ3JvdXAgdG8gYmUgY29sbGFwc2VkXG5cdCogICB2YWx1ZSAtIHRoZSB2YWx1ZSBvZiB0aGUganF4LXRyZWUtaXRlbXMtZ3JvdXAgdG8gYmUgY29sbGFwc2VkXG5cdCogICBjaGlsZHJlbiAtIHRoZSBjaGlsZHJlbiBvZiB0aGUganF4LXRyZWUtaXRlbXMtZ3JvdXAgdG8gYmUgY29sbGFwc2VkXG5cdCovXG5cdEBPdXRwdXQoKSBvbkNvbGxhcHNpbmc6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgc21hcnQtdHJlZS1pdGVtL3NtYXJ0LXRyZWUtaXRlbXMtZ3JvdXAgaXMgZHJvcHBlZCBzb21ld2hlcmUgaW4gdGhlIERPTS4gVGhlIGRyYWdnaW5nIG9wZXJhdGlvbiBjYW4gYmUgY2FuY2VsZWQgYnkgY2FsbGluZyBldmVudC5wcmV2ZW50RGVmYXVsdCgpIGluIHRoZSBldmVudCBoYW5kbGVyIGZ1bmN0aW9uLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGNvbnRhaW5lciwgXHRkYXRhLCBcdGl0ZW0sIFx0aXRlbXMsIFx0b3JpZ2luYWxFdmVudCwgXHRwcmV2aW91c0NvbnRhaW5lciwgXHR0YXJnZXQpXG5cdCogICBjb250YWluZXIgLSB0aGUgdHJlZSB0aGUgZHJhZ2dlZCBpdGVtKHMpIGlzIGRyb3BwZWQgdG9cblx0KiAgIGRhdGEgLSBhbiBvYmplY3Qgd2l0aCBhZGRpdGlvbmFsIGRyYWcgZGV0YWlsc1xuXHQqICAgaXRlbSAtIHRoZSBpdGVtIHRoYXQgaXMgZHJhZ2dlZDsgaWYgbXVsdGlwbGUgaXRlbXMgYXJlIGRyYWdnZWQsIHRoaXMgaXMgdGhlIGl0ZW0gdGhhdCBoYXMgYmVlbiBjbGlja2VkIHdoZW4gaW5pdGlhdGluZyB0aGUgZHJhZyBvcGVyYXRpb25cblx0KiAgIGl0ZW1zIC0gYW4gYXJyYXkgd2l0aCBhbGwgZHJhZ2dlZCBpdGVtc1xuXHQqICAgb3JpZ2luYWxFdmVudCAtIHRoZSBvcmlnaW5hbCwgYnJvd3NlciwgZXZlbnQgdGhhdCBpbml0aWF0ZXMgdGhlIGRyb3Agb3BlcmF0aW9uXG5cdCogICBwcmV2aW91c0NvbnRhaW5lciAtIHRoZSB0cmVlIHRoZSBkcmFnZ2VkIGl0ZW0ocykgaXMgZHJhZ2dlZCBmcm9tXG5cdCogICB0YXJnZXQgLSB0aGUgZWxlbWVudCB0aGUgZHJhZ2dlZCBpdGVtcyBhcmUgZHJvcHBlZCB0b1xuXHQqL1xuXHRAT3V0cHV0KCkgb25EcmFnRW5kOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIHNtYXJ0LXRyZWUtaXRlbS9zbWFydC10cmVlLWl0ZW1zLWdyb3VwIGlzIGJlaW5nIGRyYWdnZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0ZGF0YSwgXHRpdGVtLCBcdGl0ZW1zLCBcdG9yaWdpbmFsRXZlbnQpXG5cdCogICBkYXRhIC0gYW4gb2JqZWN0IHdpdGggYWRkaXRpb25hbCBkcmFnIGRldGFpbHNcblx0KiAgIGl0ZW0gLSB0aGUgaXRlbSB0aGF0IGlzIGRyYWdnZWQ7IGlmIG11bHRpcGxlIGl0ZW1zIGFyZSBkcmFnZ2VkLCB0aGlzIGlzIHRoZSBpdGVtIHRoYXQgaGFzIGJlZW4gY2xpY2tlZCB3aGVuIGluaXRpYXRpbmcgdGhlIGRyYWcgb3BlcmF0aW9uXG5cdCogICBpdGVtcyAtIGFuIGFycmF5IHdpdGggYWxsIGRyYWdnZWQgaXRlbXNcblx0KiAgIG9yaWdpbmFsRXZlbnQgLSB0aGUgb3JpZ2luYWwsIGJyb3dzZXIsIGV2ZW50IHRoYXQgaW5pdGlhdGVzIHRoZSBkcmFnZ2luZyBvcGVyYXRpb25cblx0Ki9cblx0QE91dHB1dCgpIG9uRHJhZ2dpbmc6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgZHJhZ2dpbmcgb3BlcmF0aW9uIGlzIHN0YXJ0ZWQgaW4gc21hcnQtdHJlZS4gVGhlIGRyYWdnaW5nIG9wZXJhdGlvbiBjYW4gYmUgY2FuY2VsZWQgYnkgY2FsbGluZyBldmVudC5wcmV2ZW50RGVmYXVsdCgpIGluIHRoZSBldmVudCBoYW5kbGVyIGZ1bmN0aW9uLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGNvbnRhaW5lciwgXHRkYXRhLCBcdGl0ZW0sIFx0aXRlbXMsIFx0b3JpZ2luYWxFdmVudCwgXHRwcmV2aW91c0NvbnRhaW5lcilcblx0KiAgIGNvbnRhaW5lciAtIHRoZSB0cmVlIHRoZSBkcmFnZ2VkIGl0ZW0ocykgaXMgZHJhZ2dlZCBmcm9tXG5cdCogICBkYXRhIC0gYW4gb2JqZWN0IHdpdGggYWRkaXRpb25hbCBkcmFnIGRldGFpbHNcblx0KiAgIGl0ZW0gLSB0aGUgaXRlbSB0aGF0IGlzIGRyYWdnZWQ7IGlmIG11bHRpcGxlIGl0ZW1zIGFyZSBkcmFnZ2VkLCB0aGlzIGlzIHRoZSBpdGVtIHRoYXQgaGFzIGJlZW4gY2xpY2tlZCB3aGVuIGluaXRpYXRpbmcgdGhlIGRyYWcgb3BlcmF0aW9uXG5cdCogICBpdGVtcyAtIGFuIGFycmF5IHdpdGggYWxsIGRyYWdnZWQgaXRlbXNcblx0KiAgIG9yaWdpbmFsRXZlbnQgLSB0aGUgb3JpZ2luYWwsIGJyb3dzZXIsIGV2ZW50IHRoYXQgaW5pdGlhdGVzIHRoZSBkcmFnIG9wZXJhdGlvblxuXHQqICAgcHJldmlvdXNDb250YWluZXIgLSB0aGUgdHJlZSB0aGUgZHJhZ2dlZCBpdGVtKHMpIGlzIGRyYWdnZWQgZnJvbVxuXHQqL1xuXHRAT3V0cHV0KCkgb25EcmFnU3RhcnQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgc21hcnQtdHJlZS1pdGVtcy1ncm91cCBpcyBleHBhbmRlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRpdGVtLCBcdGxhYmVsLCBcdHBhdGgsIFx0dmFsdWUsIFx0Y2hpbGRyZW4pXG5cdCogICBpdGVtIC0gdGhlIGV4cGFuZGVkIGpxeC10cmVlLWl0ZW1zLWdyb3VwXG5cdCogICBsYWJlbCAtIHRoZSBsYWJlbCBvZiB0aGUgZXhwYW5kZWQganF4LXRyZWUtaXRlbXMtZ3JvdXBcblx0KiAgIHBhdGggLSB0aGUgcGF0aCBvZiB0aGUgZXhwYW5kZWQganF4LXRyZWUtaXRlbXMtZ3JvdXBcblx0KiAgIHZhbHVlIC0gdGhlIHZhbHVlIG9mIHRoZSBleHBhbmRlZCBqcXgtdHJlZS1pdGVtcy1ncm91cFxuXHQqICAgY2hpbGRyZW4gLSB0aGUgY2hpbGRyZW4gb2YgdGhlIGV4cGFuZGVkIGpxeC10cmVlLWl0ZW1zLWdyb3VwXG5cdCovXG5cdEBPdXRwdXQoKSBvbkV4cGFuZDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSBzbWFydC10cmVlLWl0ZW1zLWdyb3VwIGlzIGFib3V0IHRvIGJlIGV4cGFuZGVkLiBUaGUgZXhwYW5kaW5nIG9wZXJhdGlvbiBjYW4gYmUgY2FuY2VsZWQgYnkgY2FsbGluZyBldmVudC5wcmV2ZW50RGVmYXVsdCgpIGluIHRoZSBldmVudCBoYW5kbGVyIGZ1bmN0aW9uLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGl0ZW0sIFx0bGFiZWwsIFx0cGF0aCwgXHR2YWx1ZSwgXHRjaGlsZHJlbilcblx0KiAgIGl0ZW0gLSB0aGUganF4LXRyZWUtaXRlbXMtZ3JvdXAgdG8gYmUgZXhwYW5kZWRcblx0KiAgIGxhYmVsIC0gdGhlIGxhYmVsIG9mIHRoZSBqcXgtdHJlZS1pdGVtcy1ncm91cCB0byBiZSBleHBhbmRlZFxuXHQqICAgcGF0aCAtIHRoZSBwYXRoIG9mIHRoZSBqcXgtdHJlZS1pdGVtcy1ncm91cCB0byBiZSBleHBhbmRlZFxuXHQqICAgdmFsdWUgLSB0aGUgdmFsdWUgb2YgdGhlIGpxeC10cmVlLWl0ZW1zLWdyb3VwIHRvIGJlIGV4cGFuZGVkXG5cdCogICBjaGlsZHJlbiAtIHRoZSBjaGlsZHJlbiBvZiB0aGUganF4LXRyZWUtaXRlbXMtZ3JvdXAgdG8gYmUgZXhwYW5kZWRcblx0Ki9cblx0QE91dHB1dCgpIG9uRXhwYW5kaW5nOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgVHJlZSBoYXMgYmVlbiBzY3JvbGxlZCB0byB0aGUgYm90dG9tLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Ki9cblx0QE91dHB1dCgpIG9uU2Nyb2xsQm90dG9tUmVhY2hlZDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIFRyZWUgaGFzIGJlZW4gc2Nyb2xsZWQgdG8gdGhlIHRvcC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvblNjcm9sbFRvcFJlYWNoZWQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSB1c2VyIHN3aXBlcyB0byB0aGUgbGVmdCBpbnNpZGUgdGhlIFRyZWUuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHQqL1xuXHRAT3V0cHV0KCkgb25Td2lwZWxlZnQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSB1c2VyIHN3aXBlcyB0byB0aGUgcmlnaHQgaW5zaWRlIHRoZSBUcmVlLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Ki9cblx0QE91dHB1dCgpIG9uU3dpcGVyaWdodDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIEFkZHMgYW4gaXRlbSBhZnRlciBhbm90aGVyIGl0ZW0gYXMgYSBzaWJsaW5nLiBcblx0KiBAcGFyYW0ge0hUTUxFbGVtZW50fSBpdGVtLiBBIHNtYXJ0LXRyZWUtaXRlbS9zbWFydC10cmVlLWl0ZW1zLWdyb3VwIHRvIGFkZCB0byB0aGUgVHJlZVxuXHQqIEBwYXJhbSB7c3RyaW5nIHwgSFRNTEVsZW1lbnR9IHNpYmxpbmcuIFRoZSBzbWFydC10cmVlLWl0ZW0vc21hcnQtdHJlZS1pdGVtcy1ncm91cCAob3IgaXRzIGlkIG9yIG51bWVyaWMgcGF0aCkgdG8gYWRkIHRoZSBpdGVtIGFmdGVyLlxuXHQqL1xuICAgIHB1YmxpYyBhZGRBZnRlcihpdGVtOiBIVE1MRWxlbWVudCwgc2libGluZzogc3RyaW5nIHwgSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYWRkQWZ0ZXIoaXRlbSwgc2libGluZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYWRkQWZ0ZXIoaXRlbSwgc2libGluZyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEFkZHMgYW4gaXRlbSBiZWZvcmUgYW5vdGhlciBpdGVtIGFzIGEgc2libGluZy4gXG5cdCogQHBhcmFtIHtIVE1MRWxlbWVudH0gaXRlbS4gQSBzbWFydC10cmVlLWl0ZW0vc21hcnQtdHJlZS1pdGVtcy1ncm91cCB0byBhZGQgdG8gdGhlIFRyZWVcblx0KiBAcGFyYW0ge3N0cmluZyB8IEhUTUxFbGVtZW50fSBzaWJsaW5nLiBUaGUgc21hcnQtdHJlZS1pdGVtL3NtYXJ0LXRyZWUtaXRlbXMtZ3JvdXAgKG9yIGl0cyBpZCBvciBudW1lcmljIHBhdGgpIHRvIGFkZCB0aGUgaXRlbSBiZWZvcmUuXG5cdCovXG4gICAgcHVibGljIGFkZEJlZm9yZShpdGVtOiBIVE1MRWxlbWVudCwgc2libGluZzogc3RyaW5nIHwgSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYWRkQmVmb3JlKGl0ZW0sIHNpYmxpbmcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmFkZEJlZm9yZShpdGVtLCBzaWJsaW5nKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQWRkcyBhbiBpdGVtIGFzIHRoZSBsYXN0IGNoaWxkIG9mIGEgcGFyZW50IGl0ZW0uIFxuXHQqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGl0ZW0uIEEgc21hcnQtdHJlZS1pdGVtL3NtYXJ0LXRyZWUtaXRlbXMtZ3JvdXAgdG8gYWRkIHRvIHRoZSBUcmVlXG5cdCogQHBhcmFtIHtzdHJpbmcgfCBIVE1MRWxlbWVudH0gcGFyZW50Py4gVGhlIHNtYXJ0LXRyZWUtaXRlbXMtZ3JvdXAgKG9yIGl0cyBpZCBvciBudW1lcmljIHBhdGgpIHRvIGFkZCB0aGUgaXRlbSB0by5cblx0Ki9cbiAgICBwdWJsaWMgYWRkVG8oaXRlbTogSFRNTEVsZW1lbnQsIHBhcmVudD86IHN0cmluZyB8IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmFkZFRvKGl0ZW0sIHBhcmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYWRkVG8oaXRlbSwgcGFyZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ2xlYXJzIHNlbGVjdGlvbi4gXG5cdCovXG4gICAgcHVibGljIGNsZWFyU2VsZWN0aW9uKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbGVhclNlbGVjdGlvbigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIENvbGxhcHNlcyBhbGwgc21hcnQtdHJlZS1pdGVtcy1ncm91cHMuIFxuXHQqIEBwYXJhbSB7Ym9vbGVhbn0gYW5pbWF0aW9uPy4gSWYgc2V0IHRvIGZhbHNlLCBkaXNhYmxlcyBjb2xsYXBzZSBhbmltYXRpb24gZXZlbiBpZiBhbmltYXRpb24gaXMgZW5hYmxlZCBmb3IgdGhlIGVsZW1lbnQuXG5cdCovXG4gICAgcHVibGljIGNvbGxhcHNlQWxsKGFuaW1hdGlvbj86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sbGFwc2VBbGwoYW5pbWF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jb2xsYXBzZUFsbChhbmltYXRpb24pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDb2xsYXBzZXMgYSBzbWFydC10cmVlLWl0ZW1zLWdyb3VwLiBcblx0KiBAcGFyYW0ge0hUTUxFbGVtZW50IHwgc3RyaW5nfSBpdGVtLiBzbWFydC10cmVlLWl0ZW1zLWdyb3VwIChvciBpdHMgaWQgb3IgbnVtZXJpYyBwYXRoKS5cblx0KiBAcGFyYW0ge2Jvb2xlYW59IGFuaW1hdGlvbj8uIElmIHNldCB0byBmYWxzZSwgZGlzYWJsZXMgY29sbGFwc2UgYW5pbWF0aW9uIGV2ZW4gaWYgYW5pbWF0aW9uIGlzIGVuYWJsZWQgZm9yIHRoZSBlbGVtZW50LlxuXHQqL1xuICAgIHB1YmxpYyBjb2xsYXBzZUl0ZW0oaXRlbTogSFRNTEVsZW1lbnQgfCBzdHJpbmcsIGFuaW1hdGlvbj86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sbGFwc2VJdGVtKGl0ZW0sIGFuaW1hdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sbGFwc2VJdGVtKGl0ZW0sIGFuaW1hdGlvbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIE1ha2VzIHN1cmUgYW4gaXRlbSBpcyB2aXNpYmxlIGJ5IHNjcm9sbGluZyB0byBpdC4gXG5cdCogQHBhcmFtIHtIVE1MRWxlbWVudCB8IHN0cmluZ30gaXRlbS4gVGhlIGlkIG9yIG51bWVyaWMgcGF0aCBvZiBhbiBpdGVtXG5cdCovXG4gICAgcHVibGljIGVuc3VyZVZpc2libGUoaXRlbTogSFRNTEVsZW1lbnQgfCBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZW5zdXJlVmlzaWJsZShpdGVtKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5lbnN1cmVWaXNpYmxlKGl0ZW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFeHBhbmRzIGFsbCBzbWFydC10cmVlLWl0ZW1zLWdyb3Vwcy4gXG5cdCogQHBhcmFtIHtzdHJpbmd9IGFuaW1hdGlvbj8uIElmIHNldCB0byBmYWxzZSwgZGlzYWJsZXMgZXhwYW5kIGFuaW1hdGlvbiBldmVuIGlmIGFuaW1hdGlvbiBpcyBlbmFibGVkIGZvciB0aGUgZWxlbWVudC5cblx0Ki9cbiAgICBwdWJsaWMgZXhwYW5kQWxsKGFuaW1hdGlvbj86IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5leHBhbmRBbGwoYW5pbWF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5leHBhbmRBbGwoYW5pbWF0aW9uKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRXhwYW5kcyBzaW5nbGUgc21hcnQtdHJlZS1pdGVtcy1ncm91cC4gXG5cdCogQHBhcmFtIHtIVE1MRWxlbWVudCB8IHN0cmluZ30gaXRlbS4gc21hcnQtdHJlZS1pdGVtcy1ncm91cCAob3IgaXRzIGlkIG9yIG51bWVyaWMgcGF0aCkuXG5cdCogQHBhcmFtIHtib29sZWFufSBhbmltYXRpb24/LiBJZiBzZXQgdG8gZmFsc2UsIGRpc2FibGVzIGV4cGFuZCBhbmltYXRpb24gZXZlbiBpZiBhbmltYXRpb24gaXMgZW5hYmxlZCBmb3IgdGhlIGVsZW1lbnQuXG5cdCovXG4gICAgcHVibGljIGV4cGFuZEl0ZW0oaXRlbTogSFRNTEVsZW1lbnQgfCBzdHJpbmcsIGFuaW1hdGlvbj86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZXhwYW5kSXRlbShpdGVtLCBhbmltYXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmV4cGFuZEl0ZW0oaXRlbSwgYW5pbWF0aW9uKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQXBwbGllcyBmaWx0ZXIgdG8gdGhlIFRyZWUuIFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBmaWx0ZXJRdWVyeS4gRmlsdGVyIHF1ZXJ5LlxuXHQqL1xuICAgIHB1YmxpYyBmaWx0ZXIoZmlsdGVyUXVlcnk6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5maWx0ZXIoZmlsdGVyUXVlcnkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmZpbHRlcihmaWx0ZXJRdWVyeSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEdldHMgYW4gaXRlbSBieSBpdHMgaWQgb3IgbnVtZXJpYyBwYXRoLiBcblx0KiBAcGFyYW0ge3N0cmluZ30gaWQuIFRoZSBpZCBvciBudW1lcmljIHBhdGggb2YgYW4gaXRlbS5cblx0KiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRJdGVtKGlkKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldEl0ZW0oaWQpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmV0dXJucyBTbWFydFRyZWUncyBzdGF0ZSBcblx0KiBAcmV0dXJucyB7YW55fVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0U3RhdGUoKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldFN0YXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBJbnNlcnRzIGFuIGl0ZW0gYXQgdGhlIGdpdmVuIHBvc2l0aW9uLiBcblx0KiBAcGFyYW0ge2FueX0gaXRlbS4gQSBzbWFydC10cmVlLWl0ZW0vc21hcnQtdHJlZS1pdGVtcy1ncm91cCAob3IgYW4gT2JqZWN0IHRvIGNyZWF0ZSBhbiBpdGVtIGZyb20pIHRvIGFkZCB0byB0aGUgVHJlZS4gSWYgYW4gT2JqZWN0IGlzIHBhc3NlZCwgdGhlIGF2YWlsYWJsZSBmaWVsZHMgYXJlIDxzdHJvbmc+dGFnTmFtZTwvc3Ryb25nPiAoPGVtPidzbWFydC10cmVlLWl0ZW0nPC9lbT4gLSBkZWZhdWx0IC0gb3IgPGVtPidzbWFydC10cmVlLWl0ZW1zLWdyb3VwJzwvZW0+KSwgPHN0cm9uZz5kaXNhYmxlZDwvc3Ryb25nPiwgPHN0cm9uZz5leHBhbmRlZDwvc3Ryb25nPiAob25seSBpZiA8c3Ryb25nPnRhZ05hbWU8L3N0cm9uZz4gaXMgPGVtPidzbWFydC10cmVlLWl0ZW1zLWdyb3VwJzwvZW0+KSwgPHN0cm9uZz4oaXRlbXMpPC9zdHJvbmc+IChvbmx5IGlmIDxzdHJvbmc+dGFnTmFtZTwvc3Ryb25nPiBpcyA8ZW0+J3NtYXJ0LXRyZWUtaXRlbXMtZ3JvdXAnPC9lbT4pLCA8c3Ryb25nPihsYWJlbCk8L3N0cm9uZz4sIDxzdHJvbmc+c2VwYXJhdG9yPC9zdHJvbmc+LCA8c3Ryb25nPnNob3J0Y3V0PC9zdHJvbmc+IChvbmx5IGlmIDxzdHJvbmc+dGFnTmFtZTwvc3Ryb25nPiBpcyA8ZW0+J3NtYXJ0LXRyZWUtaXRlbSc8L2VtPiksIGFuZCA8c3Ryb25nPih2YWx1ZSk8L3N0cm9uZz4uIChpdGVtcyksIChsYWJlbCksIGFuZCAodmFsdWUpIGhhdmUgdG8gY29ycmVzcG9uZCB0byB0aGUgdmFsdWVzIG9mIDxzdHJvbmc+aXRlbXNNZW1iZXI8L3N0cm9uZz4sIDxzdHJvbmc+ZGlzcGxheU1lbWJlcjwvc3Ryb25nPiwgYW5kIDxzdHJvbmc+dmFsdWVNZW1iZXI8L3N0cm9uZz4gcmVzcGVjdGl2ZWx5LlxuXHQqIEBwYXJhbSB7c3RyaW5nfSBwYXRoPy4gVGhlIHBhdGggdG8gaW5zZXJ0IHRoZSBpdGVtIGF0LlxuXHQqL1xuICAgIHB1YmxpYyBpbnNlcnQoaXRlbTogYW55LCBwYXRoPzogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lmluc2VydChpdGVtLCBwYXRoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5pbnNlcnQoaXRlbSwgcGF0aCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIExvYWRzIHRoZSBUcmVlJ3Mgc3RhdGUuIFxuXHQqIEBwYXJhbSB7YW55fSBzdGF0ZT8uIEFuIG9iamVjdCByZXR1cm5lZCBieSBvbmUgb2YgdGhlIG1ldGhvZHMgPHN0cm9uZz5nZXRTdGF0ZTwvc3Ryb25nPiBvciA8c3Ryb25nPnNhdmVTdGF0ZTwvc3Ryb25nPi4gSWYgYSBzdGF0ZSBpcyBub3QgcGFzc2VkLCB0aGUgbWV0aG9kIHRyaWVzIHRvIGxvYWQgdGhlIHN0YXRlIGZyb20gdGhlIGJyb3dzZXIncyBsb2NhbFN0b3JhZ2UuXG5cdCovXG4gICAgcHVibGljIGxvYWRTdGF0ZShzdGF0ZT86IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5sb2FkU3RhdGUoc3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmxvYWRTdGF0ZShzdGF0ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIE1vdmVzIGFuIGl0ZW0gZG93biByZWxhdGl2ZSB0byBpdHMgc2libGluZ3MuIFxuXHQqIEBwYXJhbSB7SFRNTEVsZW1lbnQgfCBzdHJpbmd9IGl0ZW0uIFRoZSBzbWFydC10cmVlLWl0ZW0vc21hcnQtdHJlZS1pdGVtcy1ncm91cCAob3IgaXRzIGlkIG9yIG51bWVyaWMgcGF0aCkgdG8gcmVtb3ZlLlxuXHQqL1xuICAgIHB1YmxpYyBtb3ZlRG93bihpdGVtOiBIVE1MRWxlbWVudCB8IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5tb3ZlRG93bihpdGVtKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5tb3ZlRG93bihpdGVtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gTW92ZXMgYW4gaXRlbSB1cCByZWxhdGl2ZSB0byBpdHMgc2libGluZ3MuIFxuXHQqIEBwYXJhbSB7SFRNTEVsZW1lbnQgfCBzdHJpbmd9IGl0ZW0uIFRoZSBzbWFydC10cmVlLWl0ZW0vc21hcnQtdHJlZS1pdGVtcy1ncm91cCAob3IgaXRzIGlkIG9yIG51bWVyaWMgcGF0aCkgdG8gcmVtb3ZlLlxuXHQqL1xuICAgIHB1YmxpYyBtb3ZlVXAoaXRlbTogSFRNTEVsZW1lbnQgfCBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQubW92ZVVwKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lm1vdmVVcChpdGVtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVtb3ZlcyBhbiBpdGVtLiBcblx0KiBAcGFyYW0ge0hUTUxFbGVtZW50IHwgc3RyaW5nfSBpdGVtLiBUaGUgc21hcnQtdHJlZS1pdGVtL3NtYXJ0LXRyZWUtaXRlbXMtZ3JvdXAgKG9yIGl0cyBpZCBvciBudW1lcmljIHBhdGgpIHRvIHJlbW92ZS5cblx0Ki9cbiAgICBwdWJsaWMgcmVtb3ZlSXRlbShpdGVtOiBIVE1MRWxlbWVudCB8IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVJdGVtKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlbW92ZUl0ZW0oaXRlbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNhdmVzIHRoZSBUcmVlJ3Mgc3RhdGUuIFxuXHQqIEByZXR1cm5zIHthbnl9XG4gICovXG5cdHB1YmxpYyBhc3luYyBzYXZlU3RhdGUoKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LnNhdmVTdGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2VsZWN0cyBhbiBpdGVtLiBcblx0KiBAcGFyYW0ge0hUTUxFbGVtZW50IHwgc3RyaW5nfSBpdGVtLiBUaGUgc21hcnQtdHJlZS1pdGVtL3NtYXJ0LXRyZWUtaXRlbXMtZ3JvdXAgKG9yIGl0cyBpZCBvciBudW1lcmljIHBhdGgpIHRvIHJlbW92ZS5cblx0Ki9cbiAgICBwdWJsaWMgc2VsZWN0KGl0ZW06IEhUTUxFbGVtZW50IHwgc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdChpdGVtKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zZWxlY3QoaXRlbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFVuc2VsZWN0cyBhbiBpdGVtLiBcblx0KiBAcGFyYW0ge0hUTUxFbGVtZW50IHwgc3RyaW5nfSBpdGVtLiBUaGUgc21hcnQtdHJlZS1pdGVtL3NtYXJ0LXRyZWUtaXRlbXMtZ3JvdXAgKG9yIGl0cyBpZCBvciBudW1lcmljIHBhdGgpIHRvIHJlbW92ZS5cblx0Ki9cbiAgICBwdWJsaWMgdW5zZWxlY3QoaXRlbTogSFRNTEVsZW1lbnQgfCBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQudW5zZWxlY3QoaXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQudW5zZWxlY3QoaXRlbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFVwZGF0ZXMgYW4gaXRlbS4gXG5cdCogQHBhcmFtIHtIVE1MRWxlbWVudCB8IHN0cmluZ30gaXRlbS4gc21hcnQtdHJlZS1pdGVtL3NtYXJ0LXRyZWUtaXRlbXMtZ3JvdXAgKG9yIGl0cyBpZCBvciBudW1lcmljIHBhdGgpLlxuXHQqIEBwYXJhbSB7YW55fSBuZXdJdGVtLiBBbiBvYmplY3Qgd2l0aCB1cGRhdGVkIHByb3BlcnRpZXMuXG5cdCovXG4gICAgcHVibGljIHVwZGF0ZUl0ZW0oaXRlbTogSFRNTEVsZW1lbnQgfCBzdHJpbmcsIG5ld0l0ZW06IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC51cGRhdGVJdGVtKGl0ZW0sIG5ld0l0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnVwZGF0ZUl0ZW0oaXRlbSwgbmV3SXRlbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cdGdldCBpc1JlbmRlcmVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCA6IGZhbHNlO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXG4gICAgICB0aGF0Lm9uQ3JlYXRlLmVtaXQodGhhdC5uYXRpdmVFbGVtZW50KTtcblxuXHRcdFNtYXJ0LlJlbmRlcigpO1xuXG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7IHRoYXQub25SZWFkeS5lbWl0KHRoYXQubmF0aXZlRWxlbWVudCk7IH0pO1xuXHRcdHRoaXMubGlzdGVuKCk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLnVubGlzdGVuKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdFx0aWYgKHRoaXMubmF0aXZlRWxlbWVudCAmJiB0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuXHRcdFx0Zm9yIChjb25zdCBwcm9wTmFtZSBpbiBjaGFuZ2VzKSB7XG5cdFx0XHRcdGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuXHRcdFx0XHRcdHRoaXMubmF0aXZlRWxlbWVudFtwcm9wTmFtZV0gPSBjaGFuZ2VzW3Byb3BOYW1lXS5jdXJyZW50VmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEFkZCBldmVudCBsaXN0ZW5lcnMuICovXG5cdHByaXZhdGUgbGlzdGVuKCk6IHZvaWQge1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5nZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNoYW5nZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5nZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbGxhcHNlSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ29sbGFwc2UuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29sbGFwc2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbGxhcHNlSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY29sbGFwc2luZ0hhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNvbGxhcHNpbmcuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29sbGFwc2luZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29sbGFwc2luZ0hhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2RyYWdFbmRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25EcmFnRW5kLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdFbmQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2RyYWdFbmRIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydkcmFnZ2luZ0hhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkRyYWdnaW5nLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdnaW5nJywgdGhhdC5ldmVudEhhbmRsZXJzWydkcmFnZ2luZ0hhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2RyYWdTdGFydEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkRyYWdTdGFydC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnU3RhcnQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2RyYWdTdGFydEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2V4cGFuZEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkV4cGFuZC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdleHBhbmQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2V4cGFuZEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2V4cGFuZGluZ0hhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkV4cGFuZGluZy5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdleHBhbmRpbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2V4cGFuZGluZ0hhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3Njcm9sbEJvdHRvbVJlYWNoZWRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25TY3JvbGxCb3R0b21SZWFjaGVkLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbEJvdHRvbVJlYWNoZWQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Njcm9sbEJvdHRvbVJlYWNoZWRIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydzY3JvbGxUb3BSZWFjaGVkSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uU2Nyb2xsVG9wUmVhY2hlZC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGxUb3BSZWFjaGVkJywgdGhhdC5ldmVudEhhbmRsZXJzWydzY3JvbGxUb3BSZWFjaGVkSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snc3dpcGVsZWZ0SGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uU3dpcGVsZWZ0LmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N3aXBlbGVmdCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snc3dpcGVsZWZ0SGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snc3dpcGVyaWdodEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblN3aXBlcmlnaHQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3dpcGVyaWdodCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snc3dpcGVyaWdodEhhbmRsZXInXSk7XG5cblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVtb3ZlIGV2ZW50IGxpc3RlbmVycy4gKi9cblx0cHJpdmF0ZSB1bmxpc3RlbigpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY2hhbmdlSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhhdC5ldmVudEhhbmRsZXJzWydjaGFuZ2VIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbGxhcHNlSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY29sbGFwc2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbGxhcHNlSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjb2xsYXBzaW5nSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY29sbGFwc2luZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29sbGFwc2luZ0hhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snZHJhZ0VuZEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdFbmQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2RyYWdFbmRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2RyYWdnaW5nSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ2dpbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2RyYWdnaW5nSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydkcmFnU3RhcnRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnU3RhcnQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2RyYWdTdGFydEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snZXhwYW5kSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXhwYW5kJywgdGhhdC5ldmVudEhhbmRsZXJzWydleHBhbmRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2V4cGFuZGluZ0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2V4cGFuZGluZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snZXhwYW5kaW5nSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydzY3JvbGxCb3R0b21SZWFjaGVkSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsQm90dG9tUmVhY2hlZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snc2Nyb2xsQm90dG9tUmVhY2hlZEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snc2Nyb2xsVG9wUmVhY2hlZEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbFRvcFJlYWNoZWQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Njcm9sbFRvcFJlYWNoZWRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3N3aXBlbGVmdEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3N3aXBlbGVmdCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snc3dpcGVsZWZ0SGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydzd2lwZXJpZ2h0SGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc3dpcGVyaWdodCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snc3dpcGVyaWdodEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdH1cbn1cbiJdfQ==