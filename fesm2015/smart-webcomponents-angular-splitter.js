
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.splitter';

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

let SplitterComponent = class SplitterComponent extends BaseElement {
    constructor(ref) {
        super(ref);
        this.eventHandlers = [];
        /** @description This event is triggered when splitter item is collapsed.
        *  @param event. The custom event. 	*/
        this.onCollapse = new EventEmitter();
        /** @description This event is triggered when splitter item is expanded.
        *  @param event. The custom event. 	*/
        this.onExpand = new EventEmitter();
        /** @description This event is triggered when splitter resizing begins.
        *  @param event. The custom event. 	*/
        this.onResizeStart = new EventEmitter();
        /** @description This event is triggered when splitter resizing finishes.
        *  @param event. The custom event. 	*/
        this.onResizeEnd = new EventEmitter();
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('smart-splitter');
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
    /** @description Determines how the items are arranged inside the Splitter. Possible values:   end - all items will fit the size of the Splitter. When inserting a new item the space required for the item to fit will be deducted from it's neighbour. proportional - all items will fit the size of the Splitter. When inserting a new item the space required for it to fit will be the result from the proportional deduction of the size from the rest of the items inside the element. overflow - the items inside the Splitter will not fit it's size. Instead they overflow by taking the exact amount of space they need and a scrollbar is displayed in order to view the content. */
    get autoFitMode() {
        return this.nativeElement ? this.nativeElement.autoFitMode : undefined;
    }
    set autoFitMode(value) {
        this.nativeElement ? this.nativeElement.autoFitMode = value : undefined;
    }
    /** @description Enables or disables the element. */
    get disabled() {
        return this.nativeElement ? this.nativeElement.disabled : undefined;
    }
    set disabled(value) {
        this.nativeElement ? this.nativeElement.disabled = value : undefined;
    }
    /** @description Sets or gets splitter's data source. */
    get dataSource() {
        return this.nativeElement ? this.nativeElement.dataSource : undefined;
    }
    set dataSource(value) {
        this.nativeElement ? this.nativeElement.dataSource = value : undefined;
    }
    /** @description A getter that returns an array of all Splitter items. */
    get items() {
        return this.nativeElement ? this.nativeElement.items : undefined;
    }
    set items(value) {
        this.nativeElement ? this.nativeElement.items = value : undefined;
    }
    /** @description If set the element keeps the same proportions of the items after the whole element has been resized regardless of the size property unit ( pixels or percentages) of the items. */
    get keepProportionsOnResize() {
        return this.nativeElement ? this.nativeElement.keepProportionsOnResize : undefined;
    }
    set keepProportionsOnResize(value) {
        this.nativeElement ? this.nativeElement.keepProportionsOnResize = value : undefined;
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
    /** @description Sets or gets splitter's orientation. */
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
    /** @description Determines the resize mode of the splitter. Possible values are:  - None - resizing is disabled.  - Adjacent - only the two adjacent items between the target splitter bar are being affected. This is the default behavior.  - End - only the first item( left or top according to the orientation) of the target Splitter bar and the last item are affected.  Proportional - all of the items positioned in the direction to which the splitter bar is dragged will be affected. For example, when a splitter bar is dragged to the right all the items positioned on it's the right side will be affected. The items will obtain a proportional size corresponding to their current size. */
    get resizeMode() {
        return this.nativeElement ? this.nativeElement.resizeMode : undefined;
    }
    set resizeMode(value) {
        this.nativeElement ? this.nativeElement.resizeMode = value : undefined;
    }
    /** @description Determines the resize step during reisizing */
    get resizeStep() {
        return this.nativeElement ? this.nativeElement.resizeStep : undefined;
    }
    set resizeStep(value) {
        this.nativeElement ? this.nativeElement.resizeStep = value : undefined;
    }
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    get rightToLeft() {
        return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
    }
    set rightToLeft(value) {
        this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
    }
    /** @description When enabled the resizing operation happens live. By default this feature is not enabled and the user sees a hightlighted bar while dragging instead of the actual splitter bar. */
    get liveResize() {
        return this.nativeElement ? this.nativeElement.liveResize : undefined;
    }
    set liveResize(value) {
        this.nativeElement ? this.nativeElement.liveResize = value : undefined;
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
    */
    appendChild(node) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.appendChild(node);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.appendChild(node);
            });
        }
    }
    /** @description Collapses splitter item.
    * @param {any} item. number indicating the index of the item or an isntance of JQX.SplitterItem
    * @param {boolean} far?. Indicates whether the item should collapse to it's far or near side
    */
    collapse(item, far) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapse(item, far);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.collapse(item, far);
            });
        }
    }
    /** @description Expands the splitter item if possible (if there's enough space available).
    * @param {any} item. number indicating the index of the item or an isntance of JQX.SplitterItem
    */
    expand(item) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.expand(item);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.expand(item);
            });
        }
    }
    /** @description Hides a splitter bar
    * @param {number} splitterBar. A JQX.SplitterBar instance.
    * @returns {number}
  */
    hideBar(splitterBar) {
        return __awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.hideBar(splitterBar);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Insert a new Splitter item at a given position.
    * @param {number} index. The index at which a new item will be inserted.
    * @param {any} details. An Object or string used as content if the splitter item.
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
    /** @description Locks a splitter item so it's size can't change.
    * @param {number} index. The index of a Splitter Bar or it's instance.
    */
    lockItem(index) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.lockItem(index);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.lockItem(index);
            });
        }
    }
    /** @description Locks a splitter bar so it can't be dragged.
    * @param {number} index. The index of a Splitter Bar or it's instance.
    */
    lockBar(index) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.lockBar(index);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.lockBar(index);
            });
        }
    }
    /** @description Removes a Splitter item.
    * @param {number} index. An item to be removed.
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
    /** @description Removes all items from the Splitter
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
    /** @description Removes a child "smart-splitter-item" node.
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
    /** @description Refreshes the Splitter
    */
    refresh() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.refresh();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.refresh();
            });
        }
    }
    /** @description Unhides a Splitter Bar
    * @param {number} splitterBar. An instance of a splitter bar.
    */
    showBar(splitterBar) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.showBar(splitterBar);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.showBar(splitterBar);
            });
        }
    }
    /** @description Unlocks a previously locked splitter item.
    * @param {number} item. The index of a Splitter Item or it's instance.
    */
    unlockItem(item) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.unlockItem(item);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.unlockItem(item);
            });
        }
    }
    /** @description Unlocks a previously locked splitter bar.
    * @param {number} item. The index of a Splitter Bar or it's instance.
    */
    unlockBar(item) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.unlockBar(item);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.unlockBar(item);
            });
        }
    }
    /** @description Updates the properties of a Splitter item inside the Splitter.
    * @param {any} item. The index of a JQX.SplitterItem or it's instance.
    * @param {any} settings. An object containing the properties of a JQX.SplitterItem.
    */
    update(item, settings) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.update(item, settings);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.update(item, settings);
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
        that.eventHandlers['collapseHandler'] = (event) => { that.onCollapse.emit(event); };
        that.nativeElement.addEventListener('collapse', that.eventHandlers['collapseHandler']);
        that.eventHandlers['expandHandler'] = (event) => { that.onExpand.emit(event); };
        that.nativeElement.addEventListener('expand', that.eventHandlers['expandHandler']);
        that.eventHandlers['resizeStartHandler'] = (event) => { that.onResizeStart.emit(event); };
        that.nativeElement.addEventListener('resizeStart', that.eventHandlers['resizeStartHandler']);
        that.eventHandlers['resizeEndHandler'] = (event) => { that.onResizeEnd.emit(event); };
        that.nativeElement.addEventListener('resizeEnd', that.eventHandlers['resizeEndHandler']);
    }
    /** @description Remove event listeners. */
    unlisten() {
        const that = this;
        if (that.eventHandlers['collapseHandler']) {
            that.nativeElement.removeEventListener('collapse', that.eventHandlers['collapseHandler']);
        }
        if (that.eventHandlers['expandHandler']) {
            that.nativeElement.removeEventListener('expand', that.eventHandlers['expandHandler']);
        }
        if (that.eventHandlers['resizeStartHandler']) {
            that.nativeElement.removeEventListener('resizeStart', that.eventHandlers['resizeStartHandler']);
        }
        if (that.eventHandlers['resizeEndHandler']) {
            that.nativeElement.removeEventListener('resizeEnd', that.eventHandlers['resizeEndHandler']);
        }
    }
};
SplitterComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], SplitterComponent.prototype, "animation", null);
__decorate([
    Input()
], SplitterComponent.prototype, "autoFitMode", null);
__decorate([
    Input()
], SplitterComponent.prototype, "disabled", null);
__decorate([
    Input()
], SplitterComponent.prototype, "dataSource", null);
__decorate([
    Input()
], SplitterComponent.prototype, "items", null);
__decorate([
    Input()
], SplitterComponent.prototype, "keepProportionsOnResize", null);
__decorate([
    Input()
], SplitterComponent.prototype, "locale", null);
__decorate([
    Input()
], SplitterComponent.prototype, "localizeFormatFunction", null);
__decorate([
    Input()
], SplitterComponent.prototype, "messages", null);
__decorate([
    Input()
], SplitterComponent.prototype, "orientation", null);
__decorate([
    Input()
], SplitterComponent.prototype, "readonly", null);
__decorate([
    Input()
], SplitterComponent.prototype, "resizeMode", null);
__decorate([
    Input()
], SplitterComponent.prototype, "resizeStep", null);
__decorate([
    Input()
], SplitterComponent.prototype, "rightToLeft", null);
__decorate([
    Input()
], SplitterComponent.prototype, "liveResize", null);
__decorate([
    Input()
], SplitterComponent.prototype, "theme", null);
__decorate([
    Input()
], SplitterComponent.prototype, "unfocusable", null);
__decorate([
    Output()
], SplitterComponent.prototype, "onCollapse", void 0);
__decorate([
    Output()
], SplitterComponent.prototype, "onExpand", void 0);
__decorate([
    Output()
], SplitterComponent.prototype, "onResizeStart", void 0);
__decorate([
    Output()
], SplitterComponent.prototype, "onResizeEnd", void 0);
SplitterComponent = __decorate([
    Directive({
        exportAs: 'smart-splitter', selector: 'smart-splitter, [smart-splitter]'
    })
], SplitterComponent);

let SplitterItemComponent = class SplitterItemComponent extends BaseElement {
    constructor(ref) {
        super(ref);
        this.eventHandlers = [];
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('smart-splitter-item');
        for (let propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    }
    /** @description Enables or disables the element. */
    get disabled() {
        return this.nativeElement ? this.nativeElement.disabled : undefined;
    }
    set disabled(value) {
        this.nativeElement ? this.nativeElement.disabled = value : undefined;
    }
    /** @description Determines of the item is collapsed or not. */
    get collapsed() {
        return this.nativeElement ? this.nativeElement.collapsed : undefined;
    }
    set collapsed(value) {
        this.nativeElement ? this.nativeElement.collapsed = value : undefined;
    }
    /** @description Determines of the item can be collapsed. If set to false, the item can't be collapsed */
    get collapsible() {
        return this.nativeElement ? this.nativeElement.collapsible : undefined;
    }
    set collapsible(value) {
        this.nativeElement ? this.nativeElement.collapsible = value : undefined;
    }
    /** @description Determines the content of the splitter items */
    get content() {
        return this.nativeElement ? this.nativeElement.content : undefined;
    }
    set content(value) {
        this.nativeElement ? this.nativeElement.content = value : undefined;
    }
    /** @description Determines of the item can be resized or not. */
    get locked() {
        return this.nativeElement ? this.nativeElement.locked : undefined;
    }
    set locked(value) {
        this.nativeElement ? this.nativeElement.locked = value : undefined;
    }
    /** @description Determines the max size of the item. */
    get max() {
        return this.nativeElement ? this.nativeElement.max : undefined;
    }
    set max(value) {
        this.nativeElement ? this.nativeElement.max = value : undefined;
    }
    /** @description Determines the min size of the item */
    get min() {
        return this.nativeElement ? this.nativeElement.min : undefined;
    }
    set min(value) {
        this.nativeElement ? this.nativeElement.min = value : undefined;
    }
    /** @description Determines the size of the item. */
    get size() {
        return this.nativeElement ? this.nativeElement.size : undefined;
    }
    set size(value) {
        this.nativeElement ? this.nativeElement.size = value : undefined;
    }
    /** @description Collapses the item.
    * @param {string} far. If set to true the item will collapse to it's far side ( to the right for vertical splitter and down for horizontal)
    */
    collapse(far) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapse(far);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.collapse(far);
            });
        }
    }
    /** @description Expands the item if it's collapsed.
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
    /** @description Locks the item so it can no longer change it's size.
    */
    lock() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.lock();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.lock();
            });
        }
    }
    /** @description Unlocks a previously locked item.
    */
    unlock() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.unlock();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.unlock();
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
SplitterItemComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], SplitterItemComponent.prototype, "disabled", null);
__decorate([
    Input()
], SplitterItemComponent.prototype, "collapsed", null);
__decorate([
    Input()
], SplitterItemComponent.prototype, "collapsible", null);
__decorate([
    Input()
], SplitterItemComponent.prototype, "content", null);
__decorate([
    Input()
], SplitterItemComponent.prototype, "locked", null);
__decorate([
    Input()
], SplitterItemComponent.prototype, "max", null);
__decorate([
    Input()
], SplitterItemComponent.prototype, "min", null);
__decorate([
    Input()
], SplitterItemComponent.prototype, "size", null);
SplitterItemComponent = __decorate([
    Directive({
        exportAs: 'smart-splitter-item', selector: 'smart-splitter-item, [smart-splitter-item]'
    })
], SplitterItemComponent);

let SplitterBarComponent = class SplitterBarComponent extends BaseElement {
    constructor(ref) {
        super(ref);
        this.eventHandlers = [];
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('smart-splitter-bar');
        for (let propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    }
    /** @description Hides the splitter bar.
    */
    hide() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.hide();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.hide();
            });
        }
    }
    /** @description Unhides a splitter bar.
    */
    show() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.show();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.show();
            });
        }
    }
    /** @description Locks the splitter bar.
    */
    lock() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.lock();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.lock();
            });
        }
    }
    /** @description Unlocks the splitter bar.
    */
    unlock() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.unlock();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.unlock();
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
SplitterBarComponent.ctorParameters = () => [
    { type: ElementRef }
];
SplitterBarComponent = __decorate([
    Directive({
        exportAs: 'smart-splitter-bar', selector: 'smart-splitter-bar, [smart-splitter-bar]'
    })
], SplitterBarComponent);

let SplitterModule = class SplitterModule {
};
SplitterModule = __decorate([
    NgModule({
        declarations: [SplitterComponent, SplitterItemComponent, SplitterBarComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        exports: [SplitterComponent, SplitterItemComponent, SplitterBarComponent]
    })
], SplitterModule);

/**
 * Generated bundle index. Do not edit.
 */

export { Smart, SplitterBarComponent, SplitterComponent, SplitterItemComponent, SplitterModule, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-splitter.js.map
