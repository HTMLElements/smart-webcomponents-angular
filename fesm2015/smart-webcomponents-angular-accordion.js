
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.accordion';

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

let AccordionComponent = class AccordionComponent extends BaseElement {
    constructor(ref) {
        super(ref);
        this.eventHandlers = [];
        /** @description This event is triggered when an item is collapsed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	content, 	index, 	label)
        *   content - The content of the item.
        *   index - The index of the item.
        *   label - The label of the item
        */
        this.onCollapse = new EventEmitter();
        /** @description This event is triggered when an item is going to be collapsed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	content, 	index, 	label)
        *   content - The content of the item.
        *   index - The index of the item.
        *   label - The label of the item
        */
        this.onCollapsing = new EventEmitter();
        /** @description This event is triggered when a reordering operation is completed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	position, 	target, 	content, 	index, 	label)
        *   position - The current top and left position of the item that was dragged.
        *   target - The item that was dragged.
        *   content - The content of the item.
        *   index - The index of the item.
        *   label - The label of the item.
        */
        this.onDragEnd = new EventEmitter();
        /** @description This event is triggered when a reordering operation is started.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	position, 	target, 	content, 	index, 	label)
        *   position - The current top and left position of the item that is about to be dragged.
        *   target - The item that is about to be dragged.
        *   content - The content of the item.
        *   index - The index of the item.
        *   label - The label of the item.
        */
        this.onDragStart = new EventEmitter();
        /** @description This event is triggered when an item is expanded.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	position, 	target, 	content, 	index, 	label)
        *   position - The current top and left position of the item.
        *   target - The item that was dragged.
        *   content - The content of the item.
        *   index - The index of the item.
        *   label - The label of the item.
        */
        this.onExpand = new EventEmitter();
        /** @description This event is triggered when an item is going to be expanded.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	content, 	index, 	label)
        *   content - The content of the item.
        *   index - The index of the item.
        *   label - The label of the item
        */
        this.onExpanding = new EventEmitter();
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('smart-accordion');
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
    /** @description Determines the data source that will be loaded to the Accordion. */
    get dataSource() {
        return this.nativeElement ? this.nativeElement.dataSource : undefined;
    }
    set dataSource(value) {
        this.nativeElement ? this.nativeElement.dataSource = value : undefined;
    }
    /** @description Enables or disables the accordion. Disabled elements can not be interacted with. */
    get disabled() {
        return this.nativeElement ? this.nativeElement.disabled : undefined;
    }
    set disabled(value) {
        this.nativeElement ? this.nativeElement.disabled = value : undefined;
    }
    /** @description Sets or gets the expanded item indexes. Using this property items can be expanded by passing in their indexes. The number of expanded items is limited by the expandMode. */
    get expandedIndexes() {
        return this.nativeElement ? this.nativeElement.expandedIndexes : undefined;
    }
    set expandedIndexes(value) {
        this.nativeElement ? this.nativeElement.expandedIndexes = value : undefined;
    }
    /** @description Sets or gets the expand mode. Expand mode determines how the items will expand or collapse. */
    get expandMode() {
        return this.nativeElement ? this.nativeElement.expandMode : undefined;
    }
    set expandMode(value) {
        this.nativeElement ? this.nativeElement.expandMode = value : undefined;
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
    /** @description Determines if the element is readonly or not. If the element true, users cannot interact with it. */
    get readonly() {
        return this.nativeElement ? this.nativeElement.readonly : undefined;
    }
    set readonly(value) {
        this.nativeElement ? this.nativeElement.readonly = value : undefined;
    }
    /** @description Enables or disables accordion reordering. */
    get reorder() {
        return this.nativeElement ? this.nativeElement.reorder : undefined;
    }
    set reorder(value) {
        this.nativeElement ? this.nativeElement.reorder = value : undefined;
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
    /** @description Determines whether the element can be focused or not. */
    get unfocusable() {
        return this.nativeElement ? this.nativeElement.unfocusable : undefined;
    }
    set unfocusable(value) {
        this.nativeElement ? this.nativeElement.unfocusable = value : undefined;
    }
    /** @description Collapses an item at a specified index.
    * @param {number} position. The index of the collapsed item.
    */
    collapse(position) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapse(position);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.collapse(position);
            });
        }
    }
    /** @description Expands an item at a specified index.
    * @param {number} position. The index of the expanded item.
    */
    expand(position) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.expand(position);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.expand(position);
            });
        }
    }
    /** @description Inserts a new item at a specified index.
    * @param {number} index. The index where the item must be inserted.
    * @param {any} item. An object containing the values for the properties of the new item to be inserted.
    */
    insert(index, item) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insert(index, item);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insert(index, item);
            });
        }
    }
    /** @description Removes an item at a specified index.
    * @param {number} position. The index of the item to be removed.
    */
    removeAt(position) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeAt(position);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeAt(position);
            });
        }
    }
    /** @description Updates an item from the element.
    * @param {number} index. The index of the item to be updated.
    * @param {any} settings. An object containing the values for the properties of the item that will be updated.
    */
    update(index, settings) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.update(index, settings);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.update(index, settings);
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
        that.eventHandlers['collapsingHandler'] = (event) => { that.onCollapsing.emit(event); };
        that.nativeElement.addEventListener('collapsing', that.eventHandlers['collapsingHandler']);
        that.eventHandlers['dragEndHandler'] = (event) => { that.onDragEnd.emit(event); };
        that.nativeElement.addEventListener('dragEnd', that.eventHandlers['dragEndHandler']);
        that.eventHandlers['dragStartHandler'] = (event) => { that.onDragStart.emit(event); };
        that.nativeElement.addEventListener('dragStart', that.eventHandlers['dragStartHandler']);
        that.eventHandlers['expandHandler'] = (event) => { that.onExpand.emit(event); };
        that.nativeElement.addEventListener('expand', that.eventHandlers['expandHandler']);
        that.eventHandlers['expandingHandler'] = (event) => { that.onExpanding.emit(event); };
        that.nativeElement.addEventListener('expanding', that.eventHandlers['expandingHandler']);
    }
    /** @description Remove event listeners. */
    unlisten() {
        const that = this;
        if (that.eventHandlers['collapseHandler']) {
            that.nativeElement.removeEventListener('collapse', that.eventHandlers['collapseHandler']);
        }
        if (that.eventHandlers['collapsingHandler']) {
            that.nativeElement.removeEventListener('collapsing', that.eventHandlers['collapsingHandler']);
        }
        if (that.eventHandlers['dragEndHandler']) {
            that.nativeElement.removeEventListener('dragEnd', that.eventHandlers['dragEndHandler']);
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
    }
};
AccordionComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], AccordionComponent.prototype, "animation", null);
__decorate([
    Input()
], AccordionComponent.prototype, "dataSource", null);
__decorate([
    Input()
], AccordionComponent.prototype, "disabled", null);
__decorate([
    Input()
], AccordionComponent.prototype, "expandedIndexes", null);
__decorate([
    Input()
], AccordionComponent.prototype, "expandMode", null);
__decorate([
    Input()
], AccordionComponent.prototype, "locale", null);
__decorate([
    Input()
], AccordionComponent.prototype, "localizeFormatFunction", null);
__decorate([
    Input()
], AccordionComponent.prototype, "messages", null);
__decorate([
    Input()
], AccordionComponent.prototype, "readonly", null);
__decorate([
    Input()
], AccordionComponent.prototype, "reorder", null);
__decorate([
    Input()
], AccordionComponent.prototype, "rightToLeft", null);
__decorate([
    Input()
], AccordionComponent.prototype, "theme", null);
__decorate([
    Input()
], AccordionComponent.prototype, "unfocusable", null);
__decorate([
    Output()
], AccordionComponent.prototype, "onCollapse", void 0);
__decorate([
    Output()
], AccordionComponent.prototype, "onCollapsing", void 0);
__decorate([
    Output()
], AccordionComponent.prototype, "onDragEnd", void 0);
__decorate([
    Output()
], AccordionComponent.prototype, "onDragStart", void 0);
__decorate([
    Output()
], AccordionComponent.prototype, "onExpand", void 0);
__decorate([
    Output()
], AccordionComponent.prototype, "onExpanding", void 0);
AccordionComponent = __decorate([
    Directive({
        exportAs: 'smart-accordion', selector: 'smart-accordion, [smart-accordion]'
    })
], AccordionComponent);

let AccordionItemComponent = class AccordionItemComponent extends BaseElement {
    constructor(ref) {
        super(ref);
        this.eventHandlers = [];
        /** @description This event is triggered when the item is collapsed.
        *  @param event. The custom event. 	*/
        this.onCollapse = new EventEmitter();
        /** @description This event is triggered when the item is expanded.
        *  @param event. The custom event. 	*/
        this.onExpand = new EventEmitter();
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('smart-accordion-item');
        for (let propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    }
    /** @description Sets or gets header's arrow position. If the value is 'none' the arrow is not shown. */
    get arrow() {
        return this.nativeElement ? this.nativeElement.arrow : undefined;
    }
    set arrow(value) {
        this.nativeElement ? this.nativeElement.arrow = value : undefined;
    }
    /** @description Sets or gets the content if the item. */
    get content() {
        return this.nativeElement ? this.nativeElement.content : undefined;
    }
    set content(value) {
        this.nativeElement ? this.nativeElement.content = value : undefined;
    }
    /** @description Sets or gets the expanded state. */
    get expanded() {
        return this.nativeElement ? this.nativeElement.expanded : undefined;
    }
    set expanded(value) {
        this.nativeElement ? this.nativeElement.expanded = value : undefined;
    }
    /** @description Sets or gets the focus state. */
    get focused() {
        return this.nativeElement ? this.nativeElement.focused : undefined;
    }
    set focused(value) {
        this.nativeElement ? this.nativeElement.focused = value : undefined;
    }
    /** @description Sets or gets the label if the item. */
    get label() {
        return this.nativeElement ? this.nativeElement.label : undefined;
    }
    set label(value) {
        this.nativeElement ? this.nativeElement.label = value : undefined;
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
    }
};
AccordionItemComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], AccordionItemComponent.prototype, "arrow", null);
__decorate([
    Input()
], AccordionItemComponent.prototype, "content", null);
__decorate([
    Input()
], AccordionItemComponent.prototype, "expanded", null);
__decorate([
    Input()
], AccordionItemComponent.prototype, "focused", null);
__decorate([
    Input()
], AccordionItemComponent.prototype, "label", null);
__decorate([
    Output()
], AccordionItemComponent.prototype, "onCollapse", void 0);
__decorate([
    Output()
], AccordionItemComponent.prototype, "onExpand", void 0);
AccordionItemComponent = __decorate([
    Directive({
        exportAs: 'smart-accordion-item', selector: 'smart-accordion-item, [smart-accordion-item]'
    })
], AccordionItemComponent);

let AccordionModule = class AccordionModule {
};
AccordionModule = __decorate([
    NgModule({
        declarations: [AccordionComponent, AccordionItemComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        exports: [AccordionComponent, AccordionItemComponent]
    })
], AccordionModule);

/**
 * Generated bundle index. Do not edit.
 */

export { AccordionComponent, AccordionItemComponent, AccordionModule, Smart, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-accordion.js.map
