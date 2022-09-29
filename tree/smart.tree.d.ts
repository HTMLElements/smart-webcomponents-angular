import { Tree } from './../index';
import { Animation, TreeExpandMode, FilterMode, VerticalAlignment, Overflow, TreeScrollMode, TreeSelectionDisplayMode, TreeSelectionMode, TreeSelectionTarget, TreeSortDirection, Position, TreeToggleMode } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { Animation, TreeExpandMode, FilterMode, VerticalAlignment, Overflow, TreeScrollMode, TreeSelectionDisplayMode, TreeSelectionMode, TreeSelectionTarget, TreeSortDirection, Position, TreeToggleMode, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { Tree } from './../index';
export declare class TreeComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<Tree>);
    private eventHandlers;
    nativeElement: Tree;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description Allows drag operation in current tree. When enabled, items can be dragged and dropped to a tree with enabled allowDrop. */
    allowDrag: boolean;
    /** @description Allows drop operation. Dropped items could originate from the current tree or another tree. */
    allowDrop: boolean;
    /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
    animation: Animation | string;
    /** @description Automatically hides the tree's toggle element (arrow) on mouseleave and shows it on mouseenter. */
    autoHideToggleElement: boolean;
    /** @description Enables or disables auto load state from the browser's localStorage. Information about filtering, sorting, expanded and selected items is loaded. */
    autoLoadState: boolean;
    /** @description Enables or disables auto save state to the browser's localStorage. Information about filtering, sorting, expanded and selected items is saved. */
    autoSaveState: boolean;
    /** @description Enables or disables auto sorting. If modifications are made to a sorted tree, but autoSort is false, the tree will not be re-sorted automatically. */
    autoSort: boolean;
    /** @description Determines the data source that will be loaded to the Tree. */
    dataSource: any;
    /** @description Enables or disables jqxTree. */
    disabled: boolean;
    /** @description Shows or hides loading indicator. */
    displayLoadingIndicator: boolean;
    /** @description Determines the field in the data source that corresponds to an item's label. */
    displayMember: string;
    /** @description A callback function for customizing the HTML of the drag feedback. It receives one parameter - an array of the currently dragged items. */
    dragFeedbackFormatFunction: any;
    /** @description Determines the offset of the drag feedback element from the mouse cursor when dragging items. The first member of the array is the horizontal offset and the second one - the vertical offset. */
    dragOffset: number[];
    /** @description Enables or disables item's editting. An edit operation can be initiated by double-clicking a tree item or pressing F2 while an item is selected. */
    editable: boolean;
    /** @description Determines the expand behavior of TreeItemsGroups in the Tree. */
    expandMode: TreeExpandMode | string;
    /** @description Enables or disables filtering. Shows or hides filter input. */
    filterable: boolean;
    /** @description Applies a filter only after the 'Enter' key is pressed. */
    filterOnEnter: boolean;
    /** @description Sets custom text for placeholder in the filter input. */
    filterInputPlaceholder: string;
    /** @description Determines the TreeItem property that will be used as a filtering criteria. By default the label property is used. It can be set to 'value' if the user wants to filter by the value property or 'textContent' if the user wants to filter by text inside the TreeItem's content or any other property. */
    filterMember: string;
    /** @description Sets filter mode. */
    filterMode: FilterMode | string;
    /** @description Sets or gets whether the tree checkboxes have three states - checked, unchecked and indeterminate. Whorks on selectionMode: 'checkBox' */
    hasThreeStates: boolean;
    /** @description Determines the field in the data source that corresponds to an item group's subitems collection. */
    itemsMember: string;
    /** @description Sets custom text for placeholder in the loading indicator if loadingIndicatorPosition is set to 'top' or 'bottom'. */
    loadingIndicatorPlaceholder: string;
    /** @description Sets the position of the loading indicator. */
    loadingIndicatorPosition: VerticalAlignment | string;
    /** @description Sets or gets the locale. Used in conjunction with the property messages. */
    locale: string;
    /** @description Callback, related to localization module.  */
    localizeFormatFunction: any;
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale. */
    messages: any;
    /** @description Specifies what should happen with the scrollbar (or scroll buttons in scrollMode: 'scrollButtons') if content overflows the element's box. */
    overflow: Overflow | string;
    /** @description If the element is readonly, users cannot interact with it. */
    readonly: boolean;
    /** @description Determines whether the right-to-left support is enabled. */
    rightToLeft: boolean;
    /** @description Determines whether to use scrollbar or scrollButtons when content overflows an element's box. */
    scrollMode: TreeScrollMode | string;
    /** @description An array with indexes (paths) of the selected items. */
    selectedIndexes: string[];
    /** @description Determines the way selected items are highlighted. */
    selectionDisplayMode: TreeSelectionDisplayMode | string;
    /** @description Determines selection mode. */
    selectionMode: TreeSelectionMode | string;
    /** @description Determines whether smart-tree-items-groups can be selected. */
    selectionTarget: TreeSelectionTarget | string;
    /** @description Shows or hides lines, displaying the relation between elements in group. */
    showLines: boolean;
    /** @description Shows or hides lines starting from the root node. Enabled when 'showLines' is set to true. */
    showRootLines: boolean;
    /** @description Sets user-defined function about custom sorting. */
    sort: any;
    /** @description Determines sort direction - ascending or descending. */
    sortDirection: TreeSortDirection | string;
    /** @description Enables or disables sorting. */
    sorted: boolean;
    /** @description Sets or gets the element's visual theme. */
    theme: string;
    /** @description Determines togle element (arrow) position. */
    toggleElementPosition: Position | string;
    /** @description Determines the way to toggle smart-tree-items-groups. */
    toggleMode: TreeToggleMode | string;
    /** @description Sets or gets if the element can be focused. */
    unfocusable: boolean;
    /** @description Determines the field in the data source that corresponds to an item's value. */
    valueMember: string;
    /** @description This event is triggered when selection in smart-tree is changed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	oldSelectedIndexes, 	selectedIndexes)
    *   item - The item the user has interacted with to change the selection (only when applicable).
    *   oldSelectedIndexes - The selected indexes before the selection is changed.
    *   selectedIndexes - The selected indexes after the selection is changed.
    */
    onChange: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a smart-tree-items-group is collapsed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	path, 	value, 	children)
    *   item - the collapsed jqx-tree-items-group
    *   label - the label of the collapsed jqx-tree-items-group
    *   path - the path of the collapsed jqx-tree-items-group
    *   value - the value of the collapsed jqx-tree-items-group
    *   children - the children of the collapsed jqx-tree-items-group
    */
    onCollapse: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a smart-tree-items-group is about to be collapsed. The collapsing operation can be canceled by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	path, 	value, 	children)
    *   item - the jqx-tree-items-group to be collapsed
    *   label - the label of the jqx-tree-items-group to be collapsed
    *   path - the path of the jqx-tree-items-group to be collapsed
    *   value - the value of the jqx-tree-items-group to be collapsed
    *   children - the children of the jqx-tree-items-group to be collapsed
    */
    onCollapsing: EventEmitter<CustomEvent>;
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
    onDragEnd: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a smart-tree-item/smart-tree-items-group is being dragged.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	data, 	item, 	items, 	originalEvent)
    *   data - an object with additional drag details
    *   item - the item that is dragged; if multiple items are dragged, this is the item that has been clicked when initiating the drag operation
    *   items - an array with all dragged items
    *   originalEvent - the original, browser, event that initiates the dragging operation
    */
    onDragging: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a dragging operation is started in smart-tree. The dragging operation can be canceled by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	container, 	data, 	item, 	items, 	originalEvent, 	previousContainer)
    *   container - the tree the dragged item(s) is dragged from
    *   data - an object with additional drag details
    *   item - the item that is dragged; if multiple items are dragged, this is the item that has been clicked when initiating the drag operation
    *   items - an array with all dragged items
    *   originalEvent - the original, browser, event that initiates the drag operation
    *   previousContainer - the tree the dragged item(s) is dragged from
    */
    onDragStart: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a smart-tree-items-group is expanded.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	path, 	value, 	children)
    *   item - the expanded jqx-tree-items-group
    *   label - the label of the expanded jqx-tree-items-group
    *   path - the path of the expanded jqx-tree-items-group
    *   value - the value of the expanded jqx-tree-items-group
    *   children - the children of the expanded jqx-tree-items-group
    */
    onExpand: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a smart-tree-items-group is about to be expanded. The expanding operation can be canceled by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	path, 	value, 	children)
    *   item - the jqx-tree-items-group to be expanded
    *   label - the label of the jqx-tree-items-group to be expanded
    *   path - the path of the jqx-tree-items-group to be expanded
    *   value - the value of the jqx-tree-items-group to be expanded
    *   children - the children of the jqx-tree-items-group to be expanded
    */
    onExpanding: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the Tree has been scrolled to the bottom.
    *  @param event. The custom event. 	*/
    onScrollBottomReached: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the Tree has been scrolled to the top.
    *  @param event. The custom event. 	*/
    onScrollTopReached: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the user swipes to the left inside the Tree.
    *  @param event. The custom event. 	*/
    onSwipeleft: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the user swipes to the right inside the Tree.
    *  @param event. The custom event. 	*/
    onSwiperight: EventEmitter<CustomEvent>;
    /** @description Adds an item after another item as a sibling.
    * @param {HTMLElement} item. A smart-tree-item/smart-tree-items-group to add to the Tree
    * @param {string | HTMLElement} sibling. The smart-tree-item/smart-tree-items-group (or its id or numeric path) to add the item after.
    */
    addAfter(item: HTMLElement, sibling: string | HTMLElement): void;
    /** @description Adds an item before another item as a sibling.
    * @param {HTMLElement} item. A smart-tree-item/smart-tree-items-group to add to the Tree
    * @param {string | HTMLElement} sibling. The smart-tree-item/smart-tree-items-group (or its id or numeric path) to add the item before.
    */
    addBefore(item: HTMLElement, sibling: string | HTMLElement): void;
    /** @description Adds an item as the last child of a parent item.
    * @param {HTMLElement} item. A smart-tree-item/smart-tree-items-group to add to the Tree
    * @param {string | HTMLElement} parent?. The smart-tree-items-group (or its id or numeric path) to add the item to.
    */
    addTo(item: HTMLElement, parent?: string | HTMLElement): void;
    /** @description Clears selection.
    */
    clearSelection(): void;
    /** @description Collapses all smart-tree-items-groups.
    * @param {boolean} animation?. If set to false, disables collapse animation even if animation is enabled for the element.
    */
    collapseAll(animation?: boolean): void;
    /** @description Collapses a smart-tree-items-group.
    * @param {HTMLElement | string} item. smart-tree-items-group (or its id or numeric path).
    * @param {boolean} animation?. If set to false, disables collapse animation even if animation is enabled for the element.
    */
    collapseItem(item: HTMLElement | string, animation?: boolean): void;
    /** @description Makes sure an item is visible by scrolling to it.
    * @param {HTMLElement | string} item. The id or numeric path of an item
    */
    ensureVisible(item: HTMLElement | string): void;
    /** @description Expands all smart-tree-items-groups.
    * @param {string} animation?. If set to false, disables expand animation even if animation is enabled for the element.
    */
    expandAll(animation?: string): void;
    /** @description Expands single smart-tree-items-group.
    * @param {HTMLElement | string} item. smart-tree-items-group (or its id or numeric path).
    * @param {boolean} animation?. If set to false, disables expand animation even if animation is enabled for the element.
    */
    expandItem(item: HTMLElement | string, animation?: boolean): void;
    /** @description Applies filter to the Tree.
    * @param {string} filterQuery. Filter query.
    */
    filter(filterQuery: string): void;
    /** @description Gets an item by its id or numeric path.
    * @param {string} id. The id or numeric path of an item.
    * @returns {HTMLElement}
  */
    getItem(id: any): Promise<any>;
    /** @description Gets the selected values. If value is not defined, returns the selected labels.
    * @returns {string[]}
  */
    getSelectedValues(): Promise<any>;
    /** @description Returns SmartTree's state
    * @returns {any}
  */
    getState(): Promise<any>;
    /** @description Inserts an item at the given position.
    * @param {any} item. A smart-tree-item/smart-tree-items-group (or an Object to create an item from) to add to the Tree. If an Object is passed, the available fields are <strong>tagName</strong> (<em>'smart-tree-item'</em> - default - or <em>'smart-tree-items-group'</em>), <strong>disabled</strong>, <strong>expanded</strong> (only if <strong>tagName</strong> is <em>'smart-tree-items-group'</em>), <strong>(items)</strong> (only if <strong>tagName</strong> is <em>'smart-tree-items-group'</em>), <strong>(label)</strong>, <strong>separator</strong>, <strong>shortcut</strong> (only if <strong>tagName</strong> is <em>'smart-tree-item'</em>), and <strong>(value)</strong>. (items), (label), and (value) have to correspond to the values of <strong>itemsMember</strong>, <strong>displayMember</strong>, and <strong>valueMember</strong> respectively.
    * @param {string} path?. The path to insert the item at.
    */
    insert(item: any, path?: string): void;
    /** @description Loads the Tree's state.
    * @param {any} state?. An object returned by one of the methods <strong>getState</strong> or <strong>saveState</strong>. If a state is not passed, the method tries to load the state from the browser's localStorage.
    */
    loadState(state?: any): void;
    /** @description Moves an item down relative to its siblings.
    * @param {HTMLElement | string} item. The smart-tree-item/smart-tree-items-group (or its id or numeric path) to remove.
    */
    moveDown(item: HTMLElement | string): void;
    /** @description Moves an item up relative to its siblings.
    * @param {HTMLElement | string} item. The smart-tree-item/smart-tree-items-group (or its id or numeric path) to remove.
    */
    moveUp(item: HTMLElement | string): void;
    /** @description Removes an item.
    * @param {HTMLElement | string} item. The smart-tree-item/smart-tree-items-group (or its id or numeric path) to remove.
    */
    removeItem(item: HTMLElement | string): void;
    /** @description Saves the Tree's state.
    * @returns {any}
  */
    saveState(): Promise<any>;
    /** @description Selects an item by its index or by HTMLElement id.
    * @param {HTMLElement | string} item. The smart-tree-item/smart-tree-items-group (or its id or numeric path) to remove.
    */
    select(item: HTMLElement | string): void;
    /** @description Selects an item or items by values.
    * @param {string | string[]} items. The smart-tree-item/smart-tree-items-group values or labels, if values are not defined.
    */
    setSelectedValues(items: string | string[]): void;
    /** @description Unselects an item by its index or by HTMLElement id.
    * @param {HTMLElement | string} item. The smart-tree-item/smart-tree-items-group (or its id or numeric path) to remove.
    */
    unselect(item: HTMLElement | string): void;
    /** @description Unselects an item or items by values.
    * @param {string | string[]} items. The smart-tree-item/smart-tree-items-group values or labels, if values are not defined.
    */
    unselectValues(items: string | string[]): void;
    /** @description Updates an item.
    * @param {HTMLElement | string} item. smart-tree-item/smart-tree-items-group (or its id or numeric path).
    * @param {any} newItem. An object with updated properties.
    */
    updateItem(item: HTMLElement | string, newItem: any): void;
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
