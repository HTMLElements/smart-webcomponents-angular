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

let LayoutComponent = class LayoutComponent extends BaseElement {
    constructor(ref) {
        super(ref);
        this.eventHandlers = [];
        /** @description This event is triggered when resizing begins.
        *  @param event. The custom event. 	*/
        this.onResizeStart = new EventEmitter();
        /** @description This event is triggered when resizing finishes.
        *  @param event. The custom event. 	*/
        this.onResizeEnd = new EventEmitter();
        /** @description This event is triggered when a change regarding the Layout's state has occured, such as inserting a new item, removing an item, etc.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	type)
        *   item - The Splitter item that was the target of a change.
        *   type - A description of the operation that has cause the change.
        */
        this.onStateChange = new EventEmitter();
        /** @description This event is triggered when the selection is changed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	oldSelectedIndex, 	selectedIndex)
        *   oldSelectedIndex - The Splitter item that was previously selected.
        *   selectedIndex - The Splitter item that is currently selected.
        */
        this.onChange = new EventEmitter();
        /** @description This event is triggered when a the context menu is about to be closed. The operation can be canceled by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	*/
        this.onClosing = new EventEmitter();
        /** @description This event is triggered when a the context menu is closed.
        *  @param event. The custom event. 	*/
        this.onClose = new EventEmitter();
        /** @description This event is triggered when a the context menu is about to be opened. The operation can be canceled by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	*/
        this.onOpening = new EventEmitter();
        /** @description This event is triggered when a the context menu is opened.
        *  @param event. The custom event. 	*/
        this.onOpen = new EventEmitter();
        /** @description This event is triggered when an option from the context menu has been clicked.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item, 	label, 	value)
        *   target - The Splitter item that was the target of the context menu opening.
        *   item - The Context menu item that was clicked.
        *   label - The label of the context menu that was clicked.
        *   value - The value of the context menu that was clicked.
        */
        this.onMenuItemClick = new EventEmitter();
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('smart-layout');
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
    /** @description Determines the options that will be available for selection inside the context menu. */
    get contextMenuDataSource() {
        return this.nativeElement ? this.nativeElement.contextMenuDataSource : undefined;
    }
    set contextMenuDataSource(value) {
        this.nativeElement ? this.nativeElement.contextMenuDataSource = value : undefined;
    }
    /** @description Enables or disables the element. */
    get disabled() {
        return this.nativeElement ? this.nativeElement.disabled : undefined;
    }
    set disabled(value) {
        this.nativeElement ? this.nativeElement.disabled = value : undefined;
    }
    /** @description Sets or gets Layout's data source. */
    get dataSource() {
        return this.nativeElement ? this.nativeElement.dataSource : undefined;
    }
    set dataSource(value) {
        this.nativeElement ? this.nativeElement.dataSource = value : undefined;
    }
    /** @description Optional. A label for all Splitter items inside the Layout. Usefull when exporting the dataSource and reusing it in other elements, for example, tree, etc. */
    get itemLabel() {
        return this.nativeElement ? this.nativeElement.itemLabel : undefined;
    }
    set itemLabel(value) {
        this.nativeElement ? this.nativeElement.itemLabel = value : undefined;
    }
    /** @description Optional. A label for all Splitters inside the Layout. Usefull when exporting the dataSource and reusing it in other elements, for example, tree, etc. */
    get itemGroupLabel() {
        return this.nativeElement ? this.nativeElement.itemGroupLabel : undefined;
    }
    set itemGroupLabel(value) {
        this.nativeElement ? this.nativeElement.itemGroupLabel = value : undefined;
    }
    /** @description A getter that returns an array of all Splitter items inside the Layout. */
    get items() {
        return this.nativeElement ? this.nativeElement.items : undefined;
    }
    set items(value) {
        this.nativeElement ? this.nativeElement.items = value : undefined;
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
    /** @description Sets an object with string values, related to the different states of passwords strength. */
    get messages() {
        return this.nativeElement ? this.nativeElement.messages : undefined;
    }
    set messages(value) {
        this.nativeElement ? this.nativeElement.messages = value : undefined;
    }
    /** @description Sets or gets Layout's main orientation. The orientation is applied to all Splitters inside the Layout unless they have their orientation explicitly set in the dataSource. */
    get orientation() {
        return this.nativeElement ? this.nativeElement.orientation : undefined;
    }
    set orientation(value) {
        this.nativeElement ? this.nativeElement.orientation = value : undefined;
    }
    /** @description If the element is readonly, users cannot interact with it. */
    get readonly() {
        return this.nativeElement ? this.nativeElement.readonly : undefined;
    }
    set readonly(value) {
        this.nativeElement ? this.nativeElement.readonly = value : undefined;
    }
    /** @description Determines the resize step during reisizing */
    get resizeStep() {
        return this.nativeElement ? this.nativeElement.resizeStep : undefined;
    }
    set resizeStep(value) {
        this.nativeElement ? this.nativeElement.resizeStep = value : undefined;
    }
    /** @description When enabled the resizing operation happens live. By default this feature is not enabled and the user sees a hightlighted bar while dragging instead of the actual splitter bar. */
    get liveResize() {
        return this.nativeElement ? this.nativeElement.liveResize : undefined;
    }
    set liveResize(value) {
        this.nativeElement ? this.nativeElement.liveResize = value : undefined;
    }
    /** @description Determines the placeholder text of the empty items. */
    get placeholder() {
        return this.nativeElement ? this.nativeElement.placeholder : undefined;
    }
    set placeholder(value) {
        this.nativeElement ? this.nativeElement.placeholder = value : undefined;
    }
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    get rightToLeft() {
        return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
    }
    set rightToLeft(value) {
        this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
    }
    /** @description Determines the selected item. When an item is selected the buttons for creating nested items are displayed inside it. */
    get selectedIndex() {
        return this.nativeElement ? this.nativeElement.selectedIndex : undefined;
    }
    set selectedIndex(value) {
        this.nativeElement ? this.nativeElement.selectedIndex = value : undefined;
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
    /** @description Appends a new node.
    * @param {Node} node. The node to append
    * @returns {Node}
  */
    appendChild(node) {
        return __awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.appendChild(node);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Inserts the specified "smart-splitter-item" node before the reference "smart-splitter-item" node.
    * @param {Node} newNode. The  "smart-splitter-item" node to insert.
    * @param {Node | null} referenceNode?. The "smart-splitter-item" node before which newNode is inserted.
    * @returns {Node}
  */
    insertBefore(newNode, referenceNode) {
        return __awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.insertBefore(newNode, referenceNode);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Removes a child "smart-splitter-item" node from the Layout.
    * @param {Node} node. The "smart-splitter-item" node to remove.
    * @returns {Node}
  */
    removeChild(node) {
        return __awaiter(this, void 0, void 0, function* () {
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
    /** @description Returns a Splitter Item according to the index that is passed as an argument.
    * @param {any} index. The index of an item.
    */
    getItem(index) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.getItem(index);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.getItem(index);
            });
        }
    }
    /** @description Returns the index of a Splitter Item that is passed as an argument.
    * @param {any} item. The index of the Splitter item that is passed as an argument.
    */
    getItemIndex(item) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.getItemIndex(item);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.getItemIndex(item);
            });
        }
    }
    /** @description Insert a new Splitter item at a given position.
    * @param {any} item. A Splitter Item or an object defining a Splitter item to be inserted.
    * @param {number | string} index. The index at which a new item will be inserted.
    * @param {string} position?. The postition at which the new item will be inseted - top, bottom, left, right.
    */
    insert(item, index, position) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insert(item, index, position);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insert(item, index, position);
            });
        }
    }
    /** @description Removes a Splitter item from the Layout.
    * @param {any} index. The index of an item to be removed or an instance of JQX.SplitterItem.
    */
    removeItem(index) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeItem(index);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeItem(index);
            });
        }
    }
    /** @description Removes all items from the Layout
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
    /** @description Selects a Splitter item from the Layout.
    * @param {any} index. The index of an item to be removed or an instance of JQX.SplitterItem.
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
    /** @description Unselects the selected item inside the element.
    */
    unselect() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.unselect();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.unselect();
            });
        }
    }
    /** @description Updates a Splitter item that is inside the Layout.
    * @param {any} index. The index of an item to be removed or an instance of JQX.SplitterItem.
    * @param {any} settings. An object containing properties with new values for the Splitter item that should be updated.
    */
    updateItem(index, settings) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.updateItem(index, settings);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.updateItem(index, settings);
            });
        }
    }
    /** @description Clears the localStorage of any previous cached states of the element according to it's id.
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
    /** @description Saves the current state of the element to LocalStorage. Requires an id to be set to the element.
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
    /** @description Loads a previously saved state of the element. If no state is provided as an argument the method will do a localStorage lookup according to the id of the element.
    * @param {any[]} state?. An array of objects that represents a cached state of the element. The result of calling the 'saveState' method.
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
        that.eventHandlers['resizeStartHandler'] = (event) => { that.onResizeStart.emit(event); };
        that.nativeElement.addEventListener('resizeStart', that.eventHandlers['resizeStartHandler']);
        that.eventHandlers['resizeEndHandler'] = (event) => { that.onResizeEnd.emit(event); };
        that.nativeElement.addEventListener('resizeEnd', that.eventHandlers['resizeEndHandler']);
        that.eventHandlers['stateChangeHandler'] = (event) => { that.onStateChange.emit(event); };
        that.nativeElement.addEventListener('stateChange', that.eventHandlers['stateChangeHandler']);
        that.eventHandlers['changeHandler'] = (event) => { that.onChange.emit(event); };
        that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
        that.eventHandlers['closingHandler'] = (event) => { that.onClosing.emit(event); };
        that.nativeElement.addEventListener('closing', that.eventHandlers['closingHandler']);
        that.eventHandlers['closeHandler'] = (event) => { that.onClose.emit(event); };
        that.nativeElement.addEventListener('close', that.eventHandlers['closeHandler']);
        that.eventHandlers['openingHandler'] = (event) => { that.onOpening.emit(event); };
        that.nativeElement.addEventListener('opening', that.eventHandlers['openingHandler']);
        that.eventHandlers['openHandler'] = (event) => { that.onOpen.emit(event); };
        that.nativeElement.addEventListener('open', that.eventHandlers['openHandler']);
        that.eventHandlers['menuItemClickHandler'] = (event) => { that.onMenuItemClick.emit(event); };
        that.nativeElement.addEventListener('menuItemClick', that.eventHandlers['menuItemClickHandler']);
    }
    /** @description Remove event listeners. */
    unlisten() {
        const that = this;
        if (that.eventHandlers['resizeStartHandler']) {
            that.nativeElement.removeEventListener('resizeStart', that.eventHandlers['resizeStartHandler']);
        }
        if (that.eventHandlers['resizeEndHandler']) {
            that.nativeElement.removeEventListener('resizeEnd', that.eventHandlers['resizeEndHandler']);
        }
        if (that.eventHandlers['stateChangeHandler']) {
            that.nativeElement.removeEventListener('stateChange', that.eventHandlers['stateChangeHandler']);
        }
        if (that.eventHandlers['changeHandler']) {
            that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
        }
        if (that.eventHandlers['closingHandler']) {
            that.nativeElement.removeEventListener('closing', that.eventHandlers['closingHandler']);
        }
        if (that.eventHandlers['closeHandler']) {
            that.nativeElement.removeEventListener('close', that.eventHandlers['closeHandler']);
        }
        if (that.eventHandlers['openingHandler']) {
            that.nativeElement.removeEventListener('opening', that.eventHandlers['openingHandler']);
        }
        if (that.eventHandlers['openHandler']) {
            that.nativeElement.removeEventListener('open', that.eventHandlers['openHandler']);
        }
        if (that.eventHandlers['menuItemClickHandler']) {
            that.nativeElement.removeEventListener('menuItemClick', that.eventHandlers['menuItemClickHandler']);
        }
    }
};
LayoutComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], LayoutComponent.prototype, "animation", null);
__decorate([
    Input()
], LayoutComponent.prototype, "contextMenuDataSource", null);
__decorate([
    Input()
], LayoutComponent.prototype, "disabled", null);
__decorate([
    Input()
], LayoutComponent.prototype, "dataSource", null);
__decorate([
    Input()
], LayoutComponent.prototype, "itemLabel", null);
__decorate([
    Input()
], LayoutComponent.prototype, "itemGroupLabel", null);
__decorate([
    Input()
], LayoutComponent.prototype, "items", null);
__decorate([
    Input()
], LayoutComponent.prototype, "locale", null);
__decorate([
    Input()
], LayoutComponent.prototype, "localizeFormatFunction", null);
__decorate([
    Input()
], LayoutComponent.prototype, "messages", null);
__decorate([
    Input()
], LayoutComponent.prototype, "orientation", null);
__decorate([
    Input()
], LayoutComponent.prototype, "readonly", null);
__decorate([
    Input()
], LayoutComponent.prototype, "resizeStep", null);
__decorate([
    Input()
], LayoutComponent.prototype, "liveResize", null);
__decorate([
    Input()
], LayoutComponent.prototype, "placeholder", null);
__decorate([
    Input()
], LayoutComponent.prototype, "rightToLeft", null);
__decorate([
    Input()
], LayoutComponent.prototype, "selectedIndex", null);
__decorate([
    Input()
], LayoutComponent.prototype, "theme", null);
__decorate([
    Input()
], LayoutComponent.prototype, "unfocusable", null);
__decorate([
    Output()
], LayoutComponent.prototype, "onResizeStart", void 0);
__decorate([
    Output()
], LayoutComponent.prototype, "onResizeEnd", void 0);
__decorate([
    Output()
], LayoutComponent.prototype, "onStateChange", void 0);
__decorate([
    Output()
], LayoutComponent.prototype, "onChange", void 0);
__decorate([
    Output()
], LayoutComponent.prototype, "onClosing", void 0);
__decorate([
    Output()
], LayoutComponent.prototype, "onClose", void 0);
__decorate([
    Output()
], LayoutComponent.prototype, "onOpening", void 0);
__decorate([
    Output()
], LayoutComponent.prototype, "onOpen", void 0);
__decorate([
    Output()
], LayoutComponent.prototype, "onMenuItemClick", void 0);
LayoutComponent = __decorate([
    Directive({
        selector: 'smart-layout, [smart-layout]'
    })
], LayoutComponent);

let LayoutModule = class LayoutModule {
};
LayoutModule = __decorate([
    NgModule({
        declarations: [LayoutComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        exports: [LayoutComponent]
    })
], LayoutModule);

/**
 * Generated bundle index. Do not edit.
 */

export { LayoutComponent, LayoutModule, Smart, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-layout.js.map
