
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.sortable';

import { __decorate } from 'tslib';
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

let SortableComponent = class SortableComponent extends BaseElement {
    constructor(ref) {
        super(ref);
        this.eventHandlers = [];
        /** @description This event is triggered when sortable items have been reordered.
        *  @param event. The custom event. 	*/
        this.onDragEnd = new EventEmitter();
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('smart-sortable');
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
    /** @description Enables or disables sorting. */
    get disabled() {
        return this.nativeElement ? this.nativeElement.disabled : undefined;
    }
    set disabled(value) {
        this.nativeElement ? this.nativeElement.disabled = value : undefined;
    }
    /** @description Sets or gets the way a sortable item can be dragged - by dragging the item itself ('item') or by dragging a handle that appears next to the item ('handle'). */
    get dragMode() {
        return this.nativeElement ? this.nativeElement.dragMode : undefined;
    }
    set dragMode(value) {
        this.nativeElement ? this.nativeElement.dragMode = value : undefined;
    }
    /** @description Sets or gets the the position of the drag handle relative to its respective sortable item. Applicable only when dragMode is 'handle'. */
    get handlePosition() {
        return this.nativeElement ? this.nativeElement.handlePosition : undefined;
    }
    set handlePosition(value) {
        this.nativeElement ? this.nativeElement.handlePosition = value : undefined;
    }
    /** @description Sets or gets whether a sortable item's drag handle is always visible or is shown when the item is hovered. Applicable only when dragMode is 'handle'. */
    get handleVisibility() {
        return this.nativeElement ? this.nativeElement.handleVisibility : undefined;
    }
    set handleVisibility(value) {
        this.nativeElement ? this.nativeElement.handleVisibility = value : undefined;
    }
    /** @description Sets or gets a selector to determine the sortable items by. By default, sortable items are all children of the smart-sortable custom element. */
    get items() {
        return this.nativeElement ? this.nativeElement.items : undefined;
    }
    set items(value) {
        this.nativeElement ? this.nativeElement.items = value : undefined;
    }
    /** @description Sets or gets the language. Used in conjunction with the property messages. */
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
    /** @description Sets or gets the direction sortable items are stacked and can be dragged. */
    get mode() {
        return this.nativeElement ? this.nativeElement.mode : undefined;
    }
    set mode(value) {
        this.nativeElement ? this.nativeElement.mode = value : undefined;
    }
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    get rightToLeft() {
        return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
    }
    set rightToLeft(value) {
        this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
    }
    /** @description Moves a sortable item from one index to another.
    * @param {number} fromIndex?. The original index of the item.
    * @param {number} toIndex?. The index to move the item to.
    */
    move(fromIndex, toIndex) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.move(fromIndex, toIndex);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.move(fromIndex, toIndex);
            });
        }
    }
    /** @description Re-evaluates the items that can be sorted. Useful after items have been added to or removed from the custom element.
    */
    updateItems() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.updateItems();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.updateItems();
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
        that.eventHandlers['dragEndHandler'] = (event) => { that.onDragEnd.emit(event); };
        that.nativeElement.addEventListener('dragEnd', that.eventHandlers['dragEndHandler']);
    }
    /** @description Remove event listeners. */
    unlisten() {
        const that = this;
        if (that.eventHandlers['dragEndHandler']) {
            that.nativeElement.removeEventListener('dragEnd', that.eventHandlers['dragEndHandler']);
        }
    }
};
SortableComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], SortableComponent.prototype, "animation", null);
__decorate([
    Input()
], SortableComponent.prototype, "disabled", null);
__decorate([
    Input()
], SortableComponent.prototype, "dragMode", null);
__decorate([
    Input()
], SortableComponent.prototype, "handlePosition", null);
__decorate([
    Input()
], SortableComponent.prototype, "handleVisibility", null);
__decorate([
    Input()
], SortableComponent.prototype, "items", null);
__decorate([
    Input()
], SortableComponent.prototype, "locale", null);
__decorate([
    Input()
], SortableComponent.prototype, "localizeFormatFunction", null);
__decorate([
    Input()
], SortableComponent.prototype, "messages", null);
__decorate([
    Input()
], SortableComponent.prototype, "mode", null);
__decorate([
    Input()
], SortableComponent.prototype, "rightToLeft", null);
__decorate([
    Output()
], SortableComponent.prototype, "onDragEnd", void 0);
SortableComponent = __decorate([
    Directive({
        exportAs: 'smart-sortable', selector: 'smart-sortable, [smart-sortable]'
    })
], SortableComponent);

let SortableModule = class SortableModule {
};
SortableModule = __decorate([
    NgModule({
        declarations: [SortableComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        exports: [SortableComponent]
    })
], SortableModule);

/**
 * Generated bundle index. Do not edit.
 */

export { Smart, SortableComponent, SortableModule, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-sortable.js.map
