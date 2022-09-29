import { Tabs } from './../index';
import { Animation, TabsCloseButtonMode, Overflow, LayoutPosition, TabsScrollMode, TabSelectionMode, TabsTabLayout, TabPosition, Orientation } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { Animation, TabsCloseButtonMode, Overflow, LayoutPosition, TabsScrollMode, TabSelectionMode, TabsTabLayout, TabPosition, Orientation, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { Tabs } from './../index';
export declare class TabsComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<Tabs>);
    private eventHandlers;
    nativeElement: Tabs;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description Sets or gets whether the "Add new tab" button (+) is displayed. */
    addNewTab: boolean;
    /** @description Allows toggle. If set to true, **selectedIndex** can be set to null (no selected tab). */
    allowToggle: boolean;
    /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
    animation: Animation | string;
    /** @description Sets or gets the close button mode. */
    closeButtonMode: TabsCloseButtonMode | string;
    /** @description Sets or gets whether close buttons are displayed. */
    closeButtons: boolean;
    /** @description Sets or gets whether the Tabs content section is collapsed. */
    collapsed: boolean;
    /** @description Enables or disables the collapsible feature. */
    collapsible: boolean;
    /** @description Determines the data source that will be loaded to the Tabs. */
    dataSource: any;
    /** @description Enables or disables the element. */
    disabled: boolean;
    /** @description Enables or disables scrolling using the mouse wheel through overflowing tab labels in the tab strip.  */
    enableMouseWheelAction: boolean;
    /** @description Sets or gets the locale. Used in conjunction with the property messages.  */
    locale: string;
    /** @description Callback, related to localization module.  */
    localizeFormatFunction: any;
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
    messages: any;
    /** @description Sets or gets the widget's name. */
    name: string;
    /** @description Sets or gets the Tabs scroll buttons behavior. Applicable only when tabLayout is 'scroll'. */
    overflow: Overflow | string;
    /** @description Disables user interaction with the element. */
    readonly: boolean;
    /** @description Enables or disables the reorder feature. When this feature is enabled, the end-user can drag a tab and drop it over another tab. As a result the tabs will be reordered. */
    reorder: boolean;
    /** @description Sets or gets whether tab labels can be resized by dragging with the mouse. */
    resize: boolean;
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    rightToLeft: boolean;
    /** @description Sets or gets the position of the scroll buttons. */
    scrollButtonsPosition: LayoutPosition | string;
    /** @description Sets or gets the behavior when scrolling the tab strip via the scroll buttons. */
    scrollMode: TabsScrollMode | string;
    /** @description Sets or gets which tab is selected. */
    selectedIndex: number | null;
    /** @description Determines the way the user can switch between tabs. */
    selectionMode: TabSelectionMode | string;
    /** @description Applies one of four behaviors when the element is not wide enough to display all tab labels. */
    tabLayout: TabsTabLayout | string;
    /** @description Sets or gets where the tab strip is positioned. */
    tabPosition: TabPosition | string;
    /** @description Sets or gets the orientation of the text in the tabs. */
    tabTextOrientation: Orientation | string;
    /** @description Determines the theme. Theme defines the look of the element */
    theme: string;
    /** @description If is set to true, the element cannot be focused. */
    unfocusable: boolean;
    /** @description This event is triggered when the addNewTab is enabled and is clicked.
    *  @param event. The custom event. 	*/
    onAddNewTabClick: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the tab selection is changed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	oldIndex)
    *   index - The tab's index.
    *   oldIndex - The tab's old index.
    */
    onChange: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a tab is closed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	index)
    *   index - The tab's index.
    */
    onClose: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a tab is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	index)
    *   index - The tab's index.
    */
    onClosing: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a drag operation has ended.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	left, 	top, 	index, 	label)
    *   left - The tab's left position.
    *   top - The tab's top position.
    *   index - The tab's index.
    *   label - The tab's label.
    */
    onDragEnd: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a drag operation has started.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	left, 	top, 	index, 	label)
    *   left - The tab's left position.
    *   top - The tab's top position.
    *   index - The tab's index.
    *   label - The tab's label.
    */
    onDragStart: EventEmitter<CustomEvent>;
    /** @description This event is triggered when tabs have been reordered.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	oldIndex)
    *   index - The tab's index.
    *   oldIndex - The tab's old index.
    */
    onReorder: EventEmitter<CustomEvent>;
    /** @description Collapses the content section.
    */
    collapse(): void;
    /** @description Returns the label of a Tab at given index.
    * @param {number} index. The index of the tab.
    * @returns {string}
  */
    getTabLabel(index: any): Promise<any>;
    /** @description Returns the content of a Tab at given index.
    * @param {number} index. The index of the tab.
    * @returns {HTMLElement}
  */
    getTabContent(index: any): Promise<any>;
    /** @description Makes sure a tab is visible by scrolling to it.
    * @param {number} index. The index of the tab to scroll to.
    */
    ensureVisible(index: number): void;
    /** @description Expands the content section.
    */
    expand(): void;
    /** @description Returns an array of the TabItems inside the element.
    * @returns {TabItem[]}
  */
    getTabs(): Promise<any>;
    /** @description Returns the offset of the tab item container (smart-tab-item element) from the edge of the Tabs (smart-tabs element) where the tab strip is positioned.
    * @param {number} index. The index of the tab item.
    * @returns {number}
  */
    getOffsetFromEdgeOfElement(index: any): Promise<any>;
    /** @description Inserts a new tab and an associated content section.
    * @param {number} index. The index to insert a new tab at.
    * @param {any} details. An Object with the fields "label", "labelSize", "content" and "group".
    */
    insert(index: number, details: any): void;
    /** @description Refreshes the Tabs header section. Useful when the header contains elements (such as images) loaded slower than the Tabs itself.
    */
    refreshTabHeader(): void;
    /** @description Removes a tab and its associated content section.
    * @param {number} index. The index of the tab to remove.
    */
    removeAt(index: number): void;
    /** @description Selects a tab.
    * @param {number} index. The index of the tab to select.
    */
    select(index: number): void;
    /** @description Updates a tab and its associated content section.
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
