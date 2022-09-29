
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.tree';

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

let TreeComponent = class TreeComponent extends BaseElement {
    constructor(ref) {
        super(ref);
        this.eventHandlers = [];
        /** @description This event is triggered when selection in smart-tree is changed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	oldSelectedIndexes, 	selectedIndexes)
        *   item - The item the user has interacted with to change the selection (only when applicable).
        *   oldSelectedIndexes - The selected indexes before the selection is changed.
        *   selectedIndexes - The selected indexes after the selection is changed.
        */
        this.onChange = new EventEmitter();
        /** @description This event is triggered when a smart-tree-items-group is collapsed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	path, 	value, 	children)
        *   item - the collapsed jqx-tree-items-group
        *   label - the label of the collapsed jqx-tree-items-group
        *   path - the path of the collapsed jqx-tree-items-group
        *   value - the value of the collapsed jqx-tree-items-group
        *   children - the children of the collapsed jqx-tree-items-group
        */
        this.onCollapse = new EventEmitter();
        /** @description This event is triggered when a smart-tree-items-group is about to be collapsed. The collapsing operation can be canceled by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	path, 	value, 	children)
        *   item - the jqx-tree-items-group to be collapsed
        *   label - the label of the jqx-tree-items-group to be collapsed
        *   path - the path of the jqx-tree-items-group to be collapsed
        *   value - the value of the jqx-tree-items-group to be collapsed
        *   children - the children of the jqx-tree-items-group to be collapsed
        */
        this.onCollapsing = new EventEmitter();
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
        this.onDragEnd = new EventEmitter();
        /** @description This event is triggered when a smart-tree-item/smart-tree-items-group is being dragged.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	data, 	item, 	items, 	originalEvent)
        *   data - an object with additional drag details
        *   item - the item that is dragged; if multiple items are dragged, this is the item that has been clicked when initiating the drag operation
        *   items - an array with all dragged items
        *   originalEvent - the original, browser, event that initiates the dragging operation
        */
        this.onDragging = new EventEmitter();
        /** @description This event is triggered when a dragging operation is started in smart-tree. The dragging operation can be canceled by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	container, 	data, 	item, 	items, 	originalEvent, 	previousContainer)
        *   container - the tree the dragged item(s) is dragged from
        *   data - an object with additional drag details
        *   item - the item that is dragged; if multiple items are dragged, this is the item that has been clicked when initiating the drag operation
        *   items - an array with all dragged items
        *   originalEvent - the original, browser, event that initiates the drag operation
        *   previousContainer - the tree the dragged item(s) is dragged from
        */
        this.onDragStart = new EventEmitter();
        /** @description This event is triggered when a smart-tree-items-group is expanded.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	path, 	value, 	children)
        *   item - the expanded jqx-tree-items-group
        *   label - the label of the expanded jqx-tree-items-group
        *   path - the path of the expanded jqx-tree-items-group
        *   value - the value of the expanded jqx-tree-items-group
        *   children - the children of the expanded jqx-tree-items-group
        */
        this.onExpand = new EventEmitter();
        /** @description This event is triggered when a smart-tree-items-group is about to be expanded. The expanding operation can be canceled by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	path, 	value, 	children)
        *   item - the jqx-tree-items-group to be expanded
        *   label - the label of the jqx-tree-items-group to be expanded
        *   path - the path of the jqx-tree-items-group to be expanded
        *   value - the value of the jqx-tree-items-group to be expanded
        *   children - the children of the jqx-tree-items-group to be expanded
        */
        this.onExpanding = new EventEmitter();
        /** @description This event is triggered when the Tree has been scrolled to the bottom.
        *  @param event. The custom event. 	*/
        this.onScrollBottomReached = new EventEmitter();
        /** @description This event is triggered when the Tree has been scrolled to the top.
        *  @param event. The custom event. 	*/
        this.onScrollTopReached = new EventEmitter();
        /** @description This event is triggered when the user swipes to the left inside the Tree.
        *  @param event. The custom event. 	*/
        this.onSwipeleft = new EventEmitter();
        /** @description This event is triggered when the user swipes to the right inside the Tree.
        *  @param event. The custom event. 	*/
        this.onSwiperight = new EventEmitter();
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('smart-tree');
        for (let propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    }
    /** @description Allows drag operation in current tree. When enabled, items can be dragged and dropped to a tree with enabled allowDrop. */
    get allowDrag() {
        return this.nativeElement ? this.nativeElement.allowDrag : undefined;
    }
    set allowDrag(value) {
        this.nativeElement ? this.nativeElement.allowDrag = value : undefined;
    }
    /** @description Allows drop operation. Dropped items could originate from the current tree or another tree. */
    get allowDrop() {
        return this.nativeElement ? this.nativeElement.allowDrop : undefined;
    }
    set allowDrop(value) {
        this.nativeElement ? this.nativeElement.allowDrop = value : undefined;
    }
    /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
    get animation() {
        return this.nativeElement ? this.nativeElement.animation : undefined;
    }
    set animation(value) {
        this.nativeElement ? this.nativeElement.animation = value : undefined;
    }
    /** @description Automatically hides the tree's toggle element (arrow) on mouseleave and shows it on mouseenter. */
    get autoHideToggleElement() {
        return this.nativeElement ? this.nativeElement.autoHideToggleElement : undefined;
    }
    set autoHideToggleElement(value) {
        this.nativeElement ? this.nativeElement.autoHideToggleElement = value : undefined;
    }
    /** @description Enables or disables auto load state from the browser's localStorage. Information about filtering, sorting, expanded and selected items is loaded. */
    get autoLoadState() {
        return this.nativeElement ? this.nativeElement.autoLoadState : undefined;
    }
    set autoLoadState(value) {
        this.nativeElement ? this.nativeElement.autoLoadState = value : undefined;
    }
    /** @description Enables or disables auto save state to the browser's localStorage. Information about filtering, sorting, expanded and selected items is saved. */
    get autoSaveState() {
        return this.nativeElement ? this.nativeElement.autoSaveState : undefined;
    }
    set autoSaveState(value) {
        this.nativeElement ? this.nativeElement.autoSaveState = value : undefined;
    }
    /** @description Enables or disables auto sorting. If modifications are made to a sorted tree, but autoSort is false, the tree will not be re-sorted automatically. */
    get autoSort() {
        return this.nativeElement ? this.nativeElement.autoSort : undefined;
    }
    set autoSort(value) {
        this.nativeElement ? this.nativeElement.autoSort = value : undefined;
    }
    /** @description Determines the data source that will be loaded to the Tree. */
    get dataSource() {
        return this.nativeElement ? this.nativeElement.dataSource : undefined;
    }
    set dataSource(value) {
        this.nativeElement ? this.nativeElement.dataSource = value : undefined;
    }
    /** @description Enables or disables jqxTree. */
    get disabled() {
        return this.nativeElement ? this.nativeElement.disabled : undefined;
    }
    set disabled(value) {
        this.nativeElement ? this.nativeElement.disabled = value : undefined;
    }
    /** @description Shows or hides loading indicator. */
    get displayLoadingIndicator() {
        return this.nativeElement ? this.nativeElement.displayLoadingIndicator : undefined;
    }
    set displayLoadingIndicator(value) {
        this.nativeElement ? this.nativeElement.displayLoadingIndicator = value : undefined;
    }
    /** @description Determines the field in the data source that corresponds to an item's label. */
    get displayMember() {
        return this.nativeElement ? this.nativeElement.displayMember : undefined;
    }
    set displayMember(value) {
        this.nativeElement ? this.nativeElement.displayMember = value : undefined;
    }
    /** @description A callback function for customizing the HTML of the drag feedback. It receives one parameter - an array of the currently dragged items. */
    get dragFeedbackFormatFunction() {
        return this.nativeElement ? this.nativeElement.dragFeedbackFormatFunction : undefined;
    }
    set dragFeedbackFormatFunction(value) {
        this.nativeElement ? this.nativeElement.dragFeedbackFormatFunction = value : undefined;
    }
    /** @description Determines the offset of the drag feedback element from the mouse cursor when dragging items. The first member of the array is the horizontal offset and the second one - the vertical offset. */
    get dragOffset() {
        return this.nativeElement ? this.nativeElement.dragOffset : undefined;
    }
    set dragOffset(value) {
        this.nativeElement ? this.nativeElement.dragOffset = value : undefined;
    }
    /** @description Enables or disables item's editting. An edit operation can be initiated by double-clicking a tree item or pressing F2 while an item is selected. */
    get editable() {
        return this.nativeElement ? this.nativeElement.editable : undefined;
    }
    set editable(value) {
        this.nativeElement ? this.nativeElement.editable = value : undefined;
    }
    /** @description Determines the expand behavior of TreeItemsGroups in the Tree. */
    get expandMode() {
        return this.nativeElement ? this.nativeElement.expandMode : undefined;
    }
    set expandMode(value) {
        this.nativeElement ? this.nativeElement.expandMode = value : undefined;
    }
    /** @description Enables or disables filtering. Shows or hides filter input. */
    get filterable() {
        return this.nativeElement ? this.nativeElement.filterable : undefined;
    }
    set filterable(value) {
        this.nativeElement ? this.nativeElement.filterable = value : undefined;
    }
    /** @description Applies a filter only after the 'Enter' key is pressed. */
    get filterOnEnter() {
        return this.nativeElement ? this.nativeElement.filterOnEnter : undefined;
    }
    set filterOnEnter(value) {
        this.nativeElement ? this.nativeElement.filterOnEnter = value : undefined;
    }
    /** @description Sets custom text for placeholder in the filter input. */
    get filterInputPlaceholder() {
        return this.nativeElement ? this.nativeElement.filterInputPlaceholder : undefined;
    }
    set filterInputPlaceholder(value) {
        this.nativeElement ? this.nativeElement.filterInputPlaceholder = value : undefined;
    }
    /** @description Determines the TreeItem property that will be used as a filtering criteria. By default the label property is used. It can be set to 'value' if the user wants to filter by the value property or 'textContent' if the user wants to filter by text inside the TreeItem's content or any other property. */
    get filterMember() {
        return this.nativeElement ? this.nativeElement.filterMember : undefined;
    }
    set filterMember(value) {
        this.nativeElement ? this.nativeElement.filterMember = value : undefined;
    }
    /** @description Sets filter mode. */
    get filterMode() {
        return this.nativeElement ? this.nativeElement.filterMode : undefined;
    }
    set filterMode(value) {
        this.nativeElement ? this.nativeElement.filterMode = value : undefined;
    }
    /** @description Sets or gets whether the tree checkboxes have three states - checked, unchecked and indeterminate. Whorks on selectionMode: 'checkBox' */
    get hasThreeStates() {
        return this.nativeElement ? this.nativeElement.hasThreeStates : undefined;
    }
    set hasThreeStates(value) {
        this.nativeElement ? this.nativeElement.hasThreeStates = value : undefined;
    }
    /** @description Determines the field in the data source that corresponds to an item group's subitems collection. */
    get itemsMember() {
        return this.nativeElement ? this.nativeElement.itemsMember : undefined;
    }
    set itemsMember(value) {
        this.nativeElement ? this.nativeElement.itemsMember = value : undefined;
    }
    /** @description Sets custom text for placeholder in the loading indicator if loadingIndicatorPosition is set to 'top' or 'bottom'. */
    get loadingIndicatorPlaceholder() {
        return this.nativeElement ? this.nativeElement.loadingIndicatorPlaceholder : undefined;
    }
    set loadingIndicatorPlaceholder(value) {
        this.nativeElement ? this.nativeElement.loadingIndicatorPlaceholder = value : undefined;
    }
    /** @description Sets the position of the loading indicator. */
    get loadingIndicatorPosition() {
        return this.nativeElement ? this.nativeElement.loadingIndicatorPosition : undefined;
    }
    set loadingIndicatorPosition(value) {
        this.nativeElement ? this.nativeElement.loadingIndicatorPosition = value : undefined;
    }
    /** @description Sets or gets the locale. Used in conjunction with the property messages. */
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
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale. */
    get messages() {
        return this.nativeElement ? this.nativeElement.messages : undefined;
    }
    set messages(value) {
        this.nativeElement ? this.nativeElement.messages = value : undefined;
    }
    /** @description Specifies what should happen with the scrollbar (or scroll buttons in scrollMode: 'scrollButtons') if content overflows the element's box. */
    get overflow() {
        return this.nativeElement ? this.nativeElement.overflow : undefined;
    }
    set overflow(value) {
        this.nativeElement ? this.nativeElement.overflow = value : undefined;
    }
    /** @description If the element is readonly, users cannot interact with it. */
    get readonly() {
        return this.nativeElement ? this.nativeElement.readonly : undefined;
    }
    set readonly(value) {
        this.nativeElement ? this.nativeElement.readonly = value : undefined;
    }
    /** @description Determines whether the right-to-left support is enabled. */
    get rightToLeft() {
        return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
    }
    set rightToLeft(value) {
        this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
    }
    /** @description Determines whether to use scrollbar or scrollButtons when content overflows an element's box. */
    get scrollMode() {
        return this.nativeElement ? this.nativeElement.scrollMode : undefined;
    }
    set scrollMode(value) {
        this.nativeElement ? this.nativeElement.scrollMode = value : undefined;
    }
    /** @description An array with indexes (paths) of the selected items. */
    get selectedIndexes() {
        return this.nativeElement ? this.nativeElement.selectedIndexes : undefined;
    }
    set selectedIndexes(value) {
        this.nativeElement ? this.nativeElement.selectedIndexes = value : undefined;
    }
    /** @description Determines the way selected items are highlighted. */
    get selectionDisplayMode() {
        return this.nativeElement ? this.nativeElement.selectionDisplayMode : undefined;
    }
    set selectionDisplayMode(value) {
        this.nativeElement ? this.nativeElement.selectionDisplayMode = value : undefined;
    }
    /** @description Determines selection mode. */
    get selectionMode() {
        return this.nativeElement ? this.nativeElement.selectionMode : undefined;
    }
    set selectionMode(value) {
        this.nativeElement ? this.nativeElement.selectionMode = value : undefined;
    }
    /** @description Determines whether smart-tree-items-groups can be selected. */
    get selectionTarget() {
        return this.nativeElement ? this.nativeElement.selectionTarget : undefined;
    }
    set selectionTarget(value) {
        this.nativeElement ? this.nativeElement.selectionTarget = value : undefined;
    }
    /** @description Shows or hides lines, displaying the relation between elements in group. */
    get showLines() {
        return this.nativeElement ? this.nativeElement.showLines : undefined;
    }
    set showLines(value) {
        this.nativeElement ? this.nativeElement.showLines = value : undefined;
    }
    /** @description Shows or hides lines starting from the root node. Enabled when 'showLines' is set to true. */
    get showRootLines() {
        return this.nativeElement ? this.nativeElement.showRootLines : undefined;
    }
    set showRootLines(value) {
        this.nativeElement ? this.nativeElement.showRootLines = value : undefined;
    }
    /** @description Sets user-defined function about custom sorting. */
    get sort() {
        return this.nativeElement ? this.nativeElement.sort : undefined;
    }
    set sort(value) {
        this.nativeElement ? this.nativeElement.sort = value : undefined;
    }
    /** @description Determines sort direction - ascending or descending. */
    get sortDirection() {
        return this.nativeElement ? this.nativeElement.sortDirection : undefined;
    }
    set sortDirection(value) {
        this.nativeElement ? this.nativeElement.sortDirection = value : undefined;
    }
    /** @description Enables or disables sorting. */
    get sorted() {
        return this.nativeElement ? this.nativeElement.sorted : undefined;
    }
    set sorted(value) {
        this.nativeElement ? this.nativeElement.sorted = value : undefined;
    }
    /** @description Sets or gets the element's visual theme. */
    get theme() {
        return this.nativeElement ? this.nativeElement.theme : undefined;
    }
    set theme(value) {
        this.nativeElement ? this.nativeElement.theme = value : undefined;
    }
    /** @description Determines togle element (arrow) position. */
    get toggleElementPosition() {
        return this.nativeElement ? this.nativeElement.toggleElementPosition : undefined;
    }
    set toggleElementPosition(value) {
        this.nativeElement ? this.nativeElement.toggleElementPosition = value : undefined;
    }
    /** @description Determines the way to toggle smart-tree-items-groups. */
    get toggleMode() {
        return this.nativeElement ? this.nativeElement.toggleMode : undefined;
    }
    set toggleMode(value) {
        this.nativeElement ? this.nativeElement.toggleMode = value : undefined;
    }
    /** @description Sets or gets if the element can be focused. */
    get unfocusable() {
        return this.nativeElement ? this.nativeElement.unfocusable : undefined;
    }
    set unfocusable(value) {
        this.nativeElement ? this.nativeElement.unfocusable = value : undefined;
    }
    /** @description Determines the field in the data source that corresponds to an item's value. */
    get valueMember() {
        return this.nativeElement ? this.nativeElement.valueMember : undefined;
    }
    set valueMember(value) {
        this.nativeElement ? this.nativeElement.valueMember = value : undefined;
    }
    /** @description Adds an item after another item as a sibling.
    * @param {HTMLElement} item. A smart-tree-item/smart-tree-items-group to add to the Tree
    * @param {string | HTMLElement} sibling. The smart-tree-item/smart-tree-items-group (or its id or numeric path) to add the item after.
    */
    addAfter(item, sibling) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addAfter(item, sibling);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addAfter(item, sibling);
            });
        }
    }
    /** @description Adds an item before another item as a sibling.
    * @param {HTMLElement} item. A smart-tree-item/smart-tree-items-group to add to the Tree
    * @param {string | HTMLElement} sibling. The smart-tree-item/smart-tree-items-group (or its id or numeric path) to add the item before.
    */
    addBefore(item, sibling) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addBefore(item, sibling);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addBefore(item, sibling);
            });
        }
    }
    /** @description Adds an item as the last child of a parent item.
    * @param {HTMLElement} item. A smart-tree-item/smart-tree-items-group to add to the Tree
    * @param {string | HTMLElement} parent?. The smart-tree-items-group (or its id or numeric path) to add the item to.
    */
    addTo(item, parent) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addTo(item, parent);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addTo(item, parent);
            });
        }
    }
    /** @description Clears selection.
    */
    clearSelection() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearSelection();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clearSelection();
            });
        }
    }
    /** @description Collapses all smart-tree-items-groups.
    * @param {boolean} animation?. If set to false, disables collapse animation even if animation is enabled for the element.
    */
    collapseAll(animation) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapseAll(animation);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.collapseAll(animation);
            });
        }
    }
    /** @description Collapses a smart-tree-items-group.
    * @param {HTMLElement | string} item. smart-tree-items-group (or its id or numeric path).
    * @param {boolean} animation?. If set to false, disables collapse animation even if animation is enabled for the element.
    */
    collapseItem(item, animation) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapseItem(item, animation);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.collapseItem(item, animation);
            });
        }
    }
    /** @description Makes sure an item is visible by scrolling to it.
    * @param {HTMLElement | string} item. The id or numeric path of an item
    */
    ensureVisible(item) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.ensureVisible(item);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.ensureVisible(item);
            });
        }
    }
    /** @description Expands all smart-tree-items-groups.
    * @param {string} animation?. If set to false, disables expand animation even if animation is enabled for the element.
    */
    expandAll(animation) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.expandAll(animation);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.expandAll(animation);
            });
        }
    }
    /** @description Expands single smart-tree-items-group.
    * @param {HTMLElement | string} item. smart-tree-items-group (or its id or numeric path).
    * @param {boolean} animation?. If set to false, disables expand animation even if animation is enabled for the element.
    */
    expandItem(item, animation) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.expandItem(item, animation);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.expandItem(item, animation);
            });
        }
    }
    /** @description Applies filter to the Tree.
    * @param {string} filterQuery. Filter query.
    */
    filter(filterQuery) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.filter(filterQuery);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.filter(filterQuery);
            });
        }
    }
    /** @description Gets an item by its id or numeric path.
    * @param {string} id. The id or numeric path of an item.
    * @returns {HTMLElement}
  */
    getItem(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getItem(id);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Gets the selected values. If value is not defined, returns the selected labels.
    * @returns {string[]}
  */
    getSelectedValues() {
        return __awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getSelectedValues();
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Returns SmartTree's state
    * @returns {any}
  */
    getState() {
        return __awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getState();
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Inserts an item at the given position.
    * @param {any} item. A smart-tree-item/smart-tree-items-group (or an Object to create an item from) to add to the Tree. If an Object is passed, the available fields are <strong>tagName</strong> (<em>'smart-tree-item'</em> - default - or <em>'smart-tree-items-group'</em>), <strong>disabled</strong>, <strong>expanded</strong> (only if <strong>tagName</strong> is <em>'smart-tree-items-group'</em>), <strong>(items)</strong> (only if <strong>tagName</strong> is <em>'smart-tree-items-group'</em>), <strong>(label)</strong>, <strong>separator</strong>, <strong>shortcut</strong> (only if <strong>tagName</strong> is <em>'smart-tree-item'</em>), and <strong>(value)</strong>. (items), (label), and (value) have to correspond to the values of <strong>itemsMember</strong>, <strong>displayMember</strong>, and <strong>valueMember</strong> respectively.
    * @param {string} path?. The path to insert the item at.
    */
    insert(item, path) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insert(item, path);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insert(item, path);
            });
        }
    }
    /** @description Loads the Tree's state.
    * @param {any} state?. An object returned by one of the methods <strong>getState</strong> or <strong>saveState</strong>. If a state is not passed, the method tries to load the state from the browser's localStorage.
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
    /** @description Moves an item down relative to its siblings.
    * @param {HTMLElement | string} item. The smart-tree-item/smart-tree-items-group (or its id or numeric path) to remove.
    */
    moveDown(item) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.moveDown(item);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.moveDown(item);
            });
        }
    }
    /** @description Moves an item up relative to its siblings.
    * @param {HTMLElement | string} item. The smart-tree-item/smart-tree-items-group (or its id or numeric path) to remove.
    */
    moveUp(item) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.moveUp(item);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.moveUp(item);
            });
        }
    }
    /** @description Removes an item.
    * @param {HTMLElement | string} item. The smart-tree-item/smart-tree-items-group (or its id or numeric path) to remove.
    */
    removeItem(item) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeItem(item);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeItem(item);
            });
        }
    }
    /** @description Saves the Tree's state.
    * @returns {any}
  */
    saveState() {
        return __awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.saveState();
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Selects an item by its index or by HTMLElement id.
    * @param {HTMLElement | string} item. The smart-tree-item/smart-tree-items-group (or its id or numeric path) to remove.
    */
    select(item) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.select(item);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.select(item);
            });
        }
    }
    /** @description Selects an item or items by values.
    * @param {string | string[]} items. The smart-tree-item/smart-tree-items-group values or labels, if values are not defined.
    */
    setSelectedValues(items) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.setSelectedValues(items);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.setSelectedValues(items);
            });
        }
    }
    /** @description Unselects an item by its index or by HTMLElement id.
    * @param {HTMLElement | string} item. The smart-tree-item/smart-tree-items-group (or its id or numeric path) to remove.
    */
    unselect(item) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.unselect(item);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.unselect(item);
            });
        }
    }
    /** @description Unselects an item or items by values.
    * @param {string | string[]} items. The smart-tree-item/smart-tree-items-group values or labels, if values are not defined.
    */
    unselectValues(items) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.unselectValues(items);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.unselectValues(items);
            });
        }
    }
    /** @description Updates an item.
    * @param {HTMLElement | string} item. smart-tree-item/smart-tree-items-group (or its id or numeric path).
    * @param {any} newItem. An object with updated properties.
    */
    updateItem(item, newItem) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.updateItem(item, newItem);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.updateItem(item, newItem);
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
        that.eventHandlers['collapseHandler'] = (event) => { that.onCollapse.emit(event); };
        that.nativeElement.addEventListener('collapse', that.eventHandlers['collapseHandler']);
        that.eventHandlers['collapsingHandler'] = (event) => { that.onCollapsing.emit(event); };
        that.nativeElement.addEventListener('collapsing', that.eventHandlers['collapsingHandler']);
        that.eventHandlers['dragEndHandler'] = (event) => { that.onDragEnd.emit(event); };
        that.nativeElement.addEventListener('dragEnd', that.eventHandlers['dragEndHandler']);
        that.eventHandlers['draggingHandler'] = (event) => { that.onDragging.emit(event); };
        that.nativeElement.addEventListener('dragging', that.eventHandlers['draggingHandler']);
        that.eventHandlers['dragStartHandler'] = (event) => { that.onDragStart.emit(event); };
        that.nativeElement.addEventListener('dragStart', that.eventHandlers['dragStartHandler']);
        that.eventHandlers['expandHandler'] = (event) => { that.onExpand.emit(event); };
        that.nativeElement.addEventListener('expand', that.eventHandlers['expandHandler']);
        that.eventHandlers['expandingHandler'] = (event) => { that.onExpanding.emit(event); };
        that.nativeElement.addEventListener('expanding', that.eventHandlers['expandingHandler']);
        that.eventHandlers['scrollBottomReachedHandler'] = (event) => { that.onScrollBottomReached.emit(event); };
        that.nativeElement.addEventListener('scrollBottomReached', that.eventHandlers['scrollBottomReachedHandler']);
        that.eventHandlers['scrollTopReachedHandler'] = (event) => { that.onScrollTopReached.emit(event); };
        that.nativeElement.addEventListener('scrollTopReached', that.eventHandlers['scrollTopReachedHandler']);
        that.eventHandlers['swipeleftHandler'] = (event) => { that.onSwipeleft.emit(event); };
        that.nativeElement.addEventListener('swipeleft', that.eventHandlers['swipeleftHandler']);
        that.eventHandlers['swiperightHandler'] = (event) => { that.onSwiperight.emit(event); };
        that.nativeElement.addEventListener('swiperight', that.eventHandlers['swiperightHandler']);
    }
    /** @description Remove event listeners. */
    unlisten() {
        const that = this;
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
    }
};
TreeComponent.ctorParameters = () => [
    { type: ElementRef }
];
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

let TreeItemComponent = class TreeItemComponent extends BaseElement {
    constructor(ref) {
        super(ref);
        this.eventHandlers = [];
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('smart-tree-item');
        for (let propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    }
    /** @description Enables or disables element. */
    get disabled() {
        return this.nativeElement ? this.nativeElement.disabled : undefined;
    }
    set disabled(value) {
        this.nativeElement ? this.nativeElement.disabled = value : undefined;
    }
    /** @description  */
    get label() {
        return this.nativeElement ? this.nativeElement.label : undefined;
    }
    set label(value) {
        this.nativeElement ? this.nativeElement.label = value : undefined;
    }
    /** @description  */
    get level() {
        return this.nativeElement ? this.nativeElement.level : undefined;
    }
    set level(value) {
        this.nativeElement ? this.nativeElement.level = value : undefined;
    }
    /** @description  */
    get selected() {
        return this.nativeElement ? this.nativeElement.selected : undefined;
    }
    set selected(value) {
        this.nativeElement ? this.nativeElement.selected = value : undefined;
    }
    /** @description  */
    get separator() {
        return this.nativeElement ? this.nativeElement.separator : undefined;
    }
    set separator(value) {
        this.nativeElement ? this.nativeElement.separator = value : undefined;
    }
    /** @description  */
    get shortcut() {
        return this.nativeElement ? this.nativeElement.shortcut : undefined;
    }
    set shortcut(value) {
        this.nativeElement ? this.nativeElement.shortcut = value : undefined;
    }
    /** @description  */
    get value() {
        return this.nativeElement ? this.nativeElement.value : undefined;
    }
    set value(value) {
        this.nativeElement ? this.nativeElement.value = value : undefined;
    }
    /** @description Disables user interaction with the item. */
    get readonly() {
        return this.nativeElement ? this.nativeElement.readonly : undefined;
    }
    set readonly(value) {
        this.nativeElement ? this.nativeElement.readonly = value : undefined;
    }
    get isRendered() {
        return this.nativeElement ? this.nativeElement.isRendered : false;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        const that = this;
        that.onCreate.emit(that.nativeElement);
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(() => { that.onReady.emit(that.nativeElement); });
    }
    ngOnDestroy() { }
    ngOnChanges(changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (const propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    }
};
TreeItemComponent.ctorParameters = () => [
    { type: ElementRef }
];
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

let TreeItemsGroupComponent = class TreeItemsGroupComponent extends BaseElement {
    constructor(ref) {
        super(ref);
        this.eventHandlers = [];
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('smart-tree-items-group');
        for (let propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    }
    /** @description Enables or disables element. */
    get disabled() {
        return this.nativeElement ? this.nativeElement.disabled : undefined;
    }
    set disabled(value) {
        this.nativeElement ? this.nativeElement.disabled = value : undefined;
    }
    /** @description  */
    get expanded() {
        return this.nativeElement ? this.nativeElement.expanded : undefined;
    }
    set expanded(value) {
        this.nativeElement ? this.nativeElement.expanded = value : undefined;
    }
    /** @description  */
    get label() {
        return this.nativeElement ? this.nativeElement.label : undefined;
    }
    set label(value) {
        this.nativeElement ? this.nativeElement.label = value : undefined;
    }
    /** @description  */
    get level() {
        return this.nativeElement ? this.nativeElement.level : undefined;
    }
    set level(value) {
        this.nativeElement ? this.nativeElement.level = value : undefined;
    }
    /** @description  */
    get selected() {
        return this.nativeElement ? this.nativeElement.selected : undefined;
    }
    set selected(value) {
        this.nativeElement ? this.nativeElement.selected = value : undefined;
    }
    /** @description  */
    get separator() {
        return this.nativeElement ? this.nativeElement.separator : undefined;
    }
    set separator(value) {
        this.nativeElement ? this.nativeElement.separator = value : undefined;
    }
    /** @description  */
    get value() {
        return this.nativeElement ? this.nativeElement.value : undefined;
    }
    set value(value) {
        this.nativeElement ? this.nativeElement.value = value : undefined;
    }
    /** @description Disables user interaction with the item. */
    get readonly() {
        return this.nativeElement ? this.nativeElement.readonly : undefined;
    }
    set readonly(value) {
        this.nativeElement ? this.nativeElement.readonly = value : undefined;
    }
    get isRendered() {
        return this.nativeElement ? this.nativeElement.isRendered : false;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        const that = this;
        that.onCreate.emit(that.nativeElement);
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(() => { that.onReady.emit(that.nativeElement); });
    }
    ngOnDestroy() { }
    ngOnChanges(changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (const propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    }
};
TreeItemsGroupComponent.ctorParameters = () => [
    { type: ElementRef }
];
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

let TreeModule = class TreeModule {
};
TreeModule = __decorate([
    NgModule({
        declarations: [TreeComponent, TreeItemComponent, TreeItemsGroupComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        exports: [TreeComponent, TreeItemComponent, TreeItemsGroupComponent]
    })
], TreeModule);

/**
 * Generated bundle index. Do not edit.
 */

export { Smart, TreeComponent, TreeItemComponent, TreeItemsGroupComponent, TreeModule, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-tree.js.map
