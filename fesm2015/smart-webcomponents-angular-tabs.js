
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.tabs';

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

let TabsComponent = class TabsComponent extends BaseElement {
    constructor(ref) {
        super(ref);
        this.eventHandlers = [];
        /** @description This event is triggered when the addNewTab is enabled and is clicked.
        *  @param event. The custom event. 	*/
        this.onAddNewTabClick = new EventEmitter();
        /** @description This event is triggered when the tab selection is changed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	oldIndex)
        *   index - The tab's index.
        *   oldIndex - The tab's old index.
        */
        this.onChange = new EventEmitter();
        /** @description This event is triggered when a tab is closed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	index)
        *   index - The tab's index.
        */
        this.onClose = new EventEmitter();
        /** @description This event is triggered when a tab is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	index)
        *   index - The tab's index.
        */
        this.onClosing = new EventEmitter();
        /** @description This event is triggered when a drag operation has ended.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	left, 	top, 	index, 	label)
        *   left - The tab's left position.
        *   top - The tab's top position.
        *   index - The tab's index.
        *   label - The tab's label.
        */
        this.onDragEnd = new EventEmitter();
        /** @description This event is triggered when a drag operation has started.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	left, 	top, 	index, 	label)
        *   left - The tab's left position.
        *   top - The tab's top position.
        *   index - The tab's index.
        *   label - The tab's label.
        */
        this.onDragStart = new EventEmitter();
        /** @description This event is triggered when tabs have been reordered.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	oldIndex)
        *   index - The tab's index.
        *   oldIndex - The tab's old index.
        */
        this.onReorder = new EventEmitter();
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('smart-tabs');
        for (let propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    }
    /** @description Sets or gets whether the "Add new tab" button (+) is displayed. */
    get addNewTab() {
        return this.nativeElement ? this.nativeElement.addNewTab : undefined;
    }
    set addNewTab(value) {
        this.nativeElement ? this.nativeElement.addNewTab = value : undefined;
    }
    /** @description Allows toggle. If set to true, **selectedIndex** can be set to null (no selected tab). */
    get allowToggle() {
        return this.nativeElement ? this.nativeElement.allowToggle : undefined;
    }
    set allowToggle(value) {
        this.nativeElement ? this.nativeElement.allowToggle = value : undefined;
    }
    /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
    get animation() {
        return this.nativeElement ? this.nativeElement.animation : undefined;
    }
    set animation(value) {
        this.nativeElement ? this.nativeElement.animation = value : undefined;
    }
    /** @description Sets or gets the close button mode. */
    get closeButtonMode() {
        return this.nativeElement ? this.nativeElement.closeButtonMode : undefined;
    }
    set closeButtonMode(value) {
        this.nativeElement ? this.nativeElement.closeButtonMode = value : undefined;
    }
    /** @description Sets or gets whether close buttons are displayed. */
    get closeButtons() {
        return this.nativeElement ? this.nativeElement.closeButtons : undefined;
    }
    set closeButtons(value) {
        this.nativeElement ? this.nativeElement.closeButtons = value : undefined;
    }
    /** @description Sets or gets whether the Tabs content section is collapsed. */
    get collapsed() {
        return this.nativeElement ? this.nativeElement.collapsed : undefined;
    }
    set collapsed(value) {
        this.nativeElement ? this.nativeElement.collapsed = value : undefined;
    }
    /** @description Enables or disables the collapsible feature. */
    get collapsible() {
        return this.nativeElement ? this.nativeElement.collapsible : undefined;
    }
    set collapsible(value) {
        this.nativeElement ? this.nativeElement.collapsible = value : undefined;
    }
    /** @description Determines the data source that will be loaded to the Tabs. */
    get dataSource() {
        return this.nativeElement ? this.nativeElement.dataSource : undefined;
    }
    set dataSource(value) {
        this.nativeElement ? this.nativeElement.dataSource = value : undefined;
    }
    /** @description Enables or disables the element. */
    get disabled() {
        return this.nativeElement ? this.nativeElement.disabled : undefined;
    }
    set disabled(value) {
        this.nativeElement ? this.nativeElement.disabled = value : undefined;
    }
    /** @description Enables or disables scrolling using the mouse wheel through overflowing tab labels in the tab strip.  */
    get enableMouseWheelAction() {
        return this.nativeElement ? this.nativeElement.enableMouseWheelAction : undefined;
    }
    set enableMouseWheelAction(value) {
        this.nativeElement ? this.nativeElement.enableMouseWheelAction = value : undefined;
    }
    /** @description Sets or gets the locale. Used in conjunction with the property messages.  */
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
    /** @description Sets or gets the widget's name. */
    get name() {
        return this.nativeElement ? this.nativeElement.name : undefined;
    }
    set name(value) {
        this.nativeElement ? this.nativeElement.name = value : undefined;
    }
    /** @description Sets or gets the Tabs scroll buttons behavior. Applicable only when tabLayout is 'scroll'. */
    get overflow() {
        return this.nativeElement ? this.nativeElement.overflow : undefined;
    }
    set overflow(value) {
        this.nativeElement ? this.nativeElement.overflow = value : undefined;
    }
    /** @description Disables user interaction with the element. */
    get readonly() {
        return this.nativeElement ? this.nativeElement.readonly : undefined;
    }
    set readonly(value) {
        this.nativeElement ? this.nativeElement.readonly = value : undefined;
    }
    /** @description Enables or disables the reorder feature. When this feature is enabled, the end-user can drag a tab and drop it over another tab. As a result the tabs will be reordered. */
    get reorder() {
        return this.nativeElement ? this.nativeElement.reorder : undefined;
    }
    set reorder(value) {
        this.nativeElement ? this.nativeElement.reorder = value : undefined;
    }
    /** @description Sets or gets whether tab labels can be resized by dragging with the mouse. */
    get resize() {
        return this.nativeElement ? this.nativeElement.resize : undefined;
    }
    set resize(value) {
        this.nativeElement ? this.nativeElement.resize = value : undefined;
    }
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    get rightToLeft() {
        return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
    }
    set rightToLeft(value) {
        this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
    }
    /** @description Sets or gets the position of the scroll buttons. */
    get scrollButtonsPosition() {
        return this.nativeElement ? this.nativeElement.scrollButtonsPosition : undefined;
    }
    set scrollButtonsPosition(value) {
        this.nativeElement ? this.nativeElement.scrollButtonsPosition = value : undefined;
    }
    /** @description Sets or gets the behavior when scrolling the tab strip via the scroll buttons. */
    get scrollMode() {
        return this.nativeElement ? this.nativeElement.scrollMode : undefined;
    }
    set scrollMode(value) {
        this.nativeElement ? this.nativeElement.scrollMode = value : undefined;
    }
    /** @description Sets or gets which tab is selected. */
    get selectedIndex() {
        return this.nativeElement ? this.nativeElement.selectedIndex : undefined;
    }
    set selectedIndex(value) {
        this.nativeElement ? this.nativeElement.selectedIndex = value : undefined;
    }
    /** @description Determines the way the user can switch between tabs. */
    get selectionMode() {
        return this.nativeElement ? this.nativeElement.selectionMode : undefined;
    }
    set selectionMode(value) {
        this.nativeElement ? this.nativeElement.selectionMode = value : undefined;
    }
    /** @description Applies one of four behaviors when the element is not wide enough to display all tab labels. */
    get tabLayout() {
        return this.nativeElement ? this.nativeElement.tabLayout : undefined;
    }
    set tabLayout(value) {
        this.nativeElement ? this.nativeElement.tabLayout = value : undefined;
    }
    /** @description Sets or gets where the tab strip is positioned. */
    get tabPosition() {
        return this.nativeElement ? this.nativeElement.tabPosition : undefined;
    }
    set tabPosition(value) {
        this.nativeElement ? this.nativeElement.tabPosition = value : undefined;
    }
    /** @description Sets or gets the orientation of the text in the tabs. */
    get tabTextOrientation() {
        return this.nativeElement ? this.nativeElement.tabTextOrientation : undefined;
    }
    set tabTextOrientation(value) {
        this.nativeElement ? this.nativeElement.tabTextOrientation = value : undefined;
    }
    /** @description Determines the theme. Theme defines the look of the element */
    get theme() {
        return this.nativeElement ? this.nativeElement.theme : undefined;
    }
    set theme(value) {
        this.nativeElement ? this.nativeElement.theme = value : undefined;
    }
    /** @description If is set to true, the element cannot be focused. */
    get unfocusable() {
        return this.nativeElement ? this.nativeElement.unfocusable : undefined;
    }
    set unfocusable(value) {
        this.nativeElement ? this.nativeElement.unfocusable = value : undefined;
    }
    /** @description Collapses the content section.
    */
    collapse() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapse();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.collapse();
            });
        }
    }
    /** @description Returns the label of a Tab at given index.
    * @param {number} index. The index of the tab.
    * @returns {string}
  */
    getTabLabel(index) {
        return __awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getTabLabel(index);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Returns the content of a Tab at given index.
    * @param {number} index. The index of the tab.
    * @returns {HTMLElement}
  */
    getTabContent(index) {
        return __awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getTabContent(index);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Makes sure a tab is visible by scrolling to it.
    * @param {number} index. The index of the tab to scroll to.
    */
    ensureVisible(index) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.ensureVisible(index);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.ensureVisible(index);
            });
        }
    }
    /** @description Expands the content section.
    */
    expand() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.expand();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.expand();
            });
        }
    }
    /** @description Returns an array of the TabItems inside the element.
    * @returns {TabItem[]}
  */
    getTabs() {
        return __awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getTabs();
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Returns the offset of the tab item container (smart-tab-item element) from the edge of the Tabs (smart-tabs element) where the tab strip is positioned.
    * @param {number} index. The index of the tab item.
    * @returns {number}
  */
    getOffsetFromEdgeOfElement(index) {
        return __awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getOffsetFromEdgeOfElement(index);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Inserts a new tab and an associated content section.
    * @param {number} index. The index to insert a new tab at.
    * @param {any} details. An Object with the fields "label", "labelSize", "content" and "group".
    */
    insert(index, details) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insert(index, details);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insert(index, details);
            });
        }
    }
    /** @description Refreshes the Tabs header section. Useful when the header contains elements (such as images) loaded slower than the Tabs itself.
    */
    refreshTabHeader() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.refreshTabHeader();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.refreshTabHeader();
            });
        }
    }
    /** @description Removes a tab and its associated content section.
    * @param {number} index. The index of the tab to remove.
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
    /** @description Selects a tab.
    * @param {number} index. The index of the tab to select.
    */
    select(index) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.select(index);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.select(index);
            });
        }
    }
    /** @description Updates a tab and its associated content section.
    * @param {number} index. The index of the tab to update.
    * @param {string} label. The new label of the tab. The value can be the id of an HTMLTemplateElement
    * @param {string | HTMLElement} content. The new content of the tab.
    */
    update(index, label, content) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.update(index, label, content);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.update(index, label, content);
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
        that.eventHandlers['addNewTabClickHandler'] = (event) => { that.onAddNewTabClick.emit(event); };
        that.nativeElement.addEventListener('addNewTabClick', that.eventHandlers['addNewTabClickHandler']);
        that.eventHandlers['changeHandler'] = (event) => { that.onChange.emit(event); };
        that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
        that.eventHandlers['closeHandler'] = (event) => { that.onClose.emit(event); };
        that.nativeElement.addEventListener('close', that.eventHandlers['closeHandler']);
        that.eventHandlers['closingHandler'] = (event) => { that.onClosing.emit(event); };
        that.nativeElement.addEventListener('closing', that.eventHandlers['closingHandler']);
        that.eventHandlers['dragEndHandler'] = (event) => { that.onDragEnd.emit(event); };
        that.nativeElement.addEventListener('dragEnd', that.eventHandlers['dragEndHandler']);
        that.eventHandlers['dragStartHandler'] = (event) => { that.onDragStart.emit(event); };
        that.nativeElement.addEventListener('dragStart', that.eventHandlers['dragStartHandler']);
        that.eventHandlers['reorderHandler'] = (event) => { that.onReorder.emit(event); };
        that.nativeElement.addEventListener('reorder', that.eventHandlers['reorderHandler']);
    }
    /** @description Remove event listeners. */
    unlisten() {
        const that = this;
        if (that.eventHandlers['addNewTabClickHandler']) {
            that.nativeElement.removeEventListener('addNewTabClick', that.eventHandlers['addNewTabClickHandler']);
        }
        if (that.eventHandlers['changeHandler']) {
            that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
        }
        if (that.eventHandlers['closeHandler']) {
            that.nativeElement.removeEventListener('close', that.eventHandlers['closeHandler']);
        }
        if (that.eventHandlers['closingHandler']) {
            that.nativeElement.removeEventListener('closing', that.eventHandlers['closingHandler']);
        }
        if (that.eventHandlers['dragEndHandler']) {
            that.nativeElement.removeEventListener('dragEnd', that.eventHandlers['dragEndHandler']);
        }
        if (that.eventHandlers['dragStartHandler']) {
            that.nativeElement.removeEventListener('dragStart', that.eventHandlers['dragStartHandler']);
        }
        if (that.eventHandlers['reorderHandler']) {
            that.nativeElement.removeEventListener('reorder', that.eventHandlers['reorderHandler']);
        }
    }
};
TabsComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], TabsComponent.prototype, "addNewTab", null);
__decorate([
    Input()
], TabsComponent.prototype, "allowToggle", null);
__decorate([
    Input()
], TabsComponent.prototype, "animation", null);
__decorate([
    Input()
], TabsComponent.prototype, "closeButtonMode", null);
__decorate([
    Input()
], TabsComponent.prototype, "closeButtons", null);
__decorate([
    Input()
], TabsComponent.prototype, "collapsed", null);
__decorate([
    Input()
], TabsComponent.prototype, "collapsible", null);
__decorate([
    Input()
], TabsComponent.prototype, "dataSource", null);
__decorate([
    Input()
], TabsComponent.prototype, "disabled", null);
__decorate([
    Input()
], TabsComponent.prototype, "enableMouseWheelAction", null);
__decorate([
    Input()
], TabsComponent.prototype, "locale", null);
__decorate([
    Input()
], TabsComponent.prototype, "localizeFormatFunction", null);
__decorate([
    Input()
], TabsComponent.prototype, "messages", null);
__decorate([
    Input()
], TabsComponent.prototype, "name", null);
__decorate([
    Input()
], TabsComponent.prototype, "overflow", null);
__decorate([
    Input()
], TabsComponent.prototype, "readonly", null);
__decorate([
    Input()
], TabsComponent.prototype, "reorder", null);
__decorate([
    Input()
], TabsComponent.prototype, "resize", null);
__decorate([
    Input()
], TabsComponent.prototype, "rightToLeft", null);
__decorate([
    Input()
], TabsComponent.prototype, "scrollButtonsPosition", null);
__decorate([
    Input()
], TabsComponent.prototype, "scrollMode", null);
__decorate([
    Input()
], TabsComponent.prototype, "selectedIndex", null);
__decorate([
    Input()
], TabsComponent.prototype, "selectionMode", null);
__decorate([
    Input()
], TabsComponent.prototype, "tabLayout", null);
__decorate([
    Input()
], TabsComponent.prototype, "tabPosition", null);
__decorate([
    Input()
], TabsComponent.prototype, "tabTextOrientation", null);
__decorate([
    Input()
], TabsComponent.prototype, "theme", null);
__decorate([
    Input()
], TabsComponent.prototype, "unfocusable", null);
__decorate([
    Output()
], TabsComponent.prototype, "onAddNewTabClick", void 0);
__decorate([
    Output()
], TabsComponent.prototype, "onChange", void 0);
__decorate([
    Output()
], TabsComponent.prototype, "onClose", void 0);
__decorate([
    Output()
], TabsComponent.prototype, "onClosing", void 0);
__decorate([
    Output()
], TabsComponent.prototype, "onDragEnd", void 0);
__decorate([
    Output()
], TabsComponent.prototype, "onDragStart", void 0);
__decorate([
    Output()
], TabsComponent.prototype, "onReorder", void 0);
TabsComponent = __decorate([
    Directive({
        exportAs: 'smart-tabs', selector: 'smart-tabs, [smart-tabs]'
    })
], TabsComponent);

let TabItemComponent = class TabItemComponent extends BaseElement {
    constructor(ref) {
        super(ref);
        this.eventHandlers = [];
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('smart-tab-item');
        for (let propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    }
    /** @description Tab item close button state */
    get closeButtonHidden() {
        return this.nativeElement ? this.nativeElement.closeButtonHidden : undefined;
    }
    set closeButtonHidden(value) {
        this.nativeElement ? this.nativeElement.closeButtonHidden = value : undefined;
    }
    /** @description Disables the Tab item */
    get disabled() {
        return this.nativeElement ? this.nativeElement.disabled : undefined;
    }
    set disabled(value) {
        this.nativeElement ? this.nativeElement.disabled = value : undefined;
    }
    /** @description Tab item index */
    get index() {
        return this.nativeElement ? this.nativeElement.index : undefined;
    }
    set index(value) {
        this.nativeElement ? this.nativeElement.index = value : undefined;
    }
    /** @description Tab item selected state */
    get selected() {
        return this.nativeElement ? this.nativeElement.selected : undefined;
    }
    set selected(value) {
        this.nativeElement ? this.nativeElement.selected = value : undefined;
    }
    /** @description Tab item label */
    get label() {
        return this.nativeElement ? this.nativeElement.label : undefined;
    }
    set label(value) {
        this.nativeElement ? this.nativeElement.label = value : undefined;
    }
    /** @description Tab item content */
    get content() {
        return this.nativeElement ? this.nativeElement.content : undefined;
    }
    set content(value) {
        this.nativeElement ? this.nativeElement.content = value : undefined;
    }
    /** @description Tab item label size */
    get labelSize() {
        return this.nativeElement ? this.nativeElement.labelSize : undefined;
    }
    set labelSize(value) {
        this.nativeElement ? this.nativeElement.labelSize = value : undefined;
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
TabItemComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], TabItemComponent.prototype, "closeButtonHidden", null);
__decorate([
    Input()
], TabItemComponent.prototype, "disabled", null);
__decorate([
    Input()
], TabItemComponent.prototype, "index", null);
__decorate([
    Input()
], TabItemComponent.prototype, "selected", null);
__decorate([
    Input()
], TabItemComponent.prototype, "label", null);
__decorate([
    Input()
], TabItemComponent.prototype, "content", null);
__decorate([
    Input()
], TabItemComponent.prototype, "labelSize", null);
TabItemComponent = __decorate([
    Directive({
        exportAs: 'smart-tab-item', selector: 'smart-tab-item, [smart-tab-item]'
    })
], TabItemComponent);

let TabItemsGroupComponent = class TabItemsGroupComponent extends BaseElement {
    constructor(ref) {
        super(ref);
        this.eventHandlers = [];
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('smart-tab-items-group');
        for (let propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    }
    /** @description  */
    get label() {
        return this.nativeElement ? this.nativeElement.label : undefined;
    }
    set label(value) {
        this.nativeElement ? this.nativeElement.label = value : undefined;
    }
    /** @description  */
    get labelSize() {
        return this.nativeElement ? this.nativeElement.labelSize : undefined;
    }
    set labelSize(value) {
        this.nativeElement ? this.nativeElement.labelSize = value : undefined;
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
TabItemsGroupComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], TabItemsGroupComponent.prototype, "label", null);
__decorate([
    Input()
], TabItemsGroupComponent.prototype, "labelSize", null);
TabItemsGroupComponent = __decorate([
    Directive({
        exportAs: 'smart-tab-items-group', selector: 'smart-tab-items-group, [smart-tab-items-group]'
    })
], TabItemsGroupComponent);

let TabsModule = class TabsModule {
};
TabsModule = __decorate([
    NgModule({
        declarations: [TabsComponent, TabItemComponent, TabItemsGroupComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        exports: [TabsComponent, TabItemComponent, TabItemsGroupComponent]
    })
], TabsModule);

/**
 * Generated bundle index. Do not edit.
 */

export { Smart, TabItemComponent, TabItemsGroupComponent, TabsComponent, TabsModule, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-tabs.js.map
