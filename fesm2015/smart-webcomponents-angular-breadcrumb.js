
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.breadcrumb';

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

let BreadcrumbComponent = class BreadcrumbComponent extends BaseElement {
    constructor(ref) {
        super(ref);
        this.eventHandlers = [];
        /** @description This event is triggered when a Breadcrumb item is closed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	item)
        *   item - The item that has been closed.
        */
        this.onClose = new EventEmitter();
        /** @description This event is triggered when a Breadcrumb item is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	item)
        *   item - The item that is going to be closed.
        */
        this.onClosing = new EventEmitter();
        /** @description This event is triggered when a Breadcrumb item is dropped.
        *  @param event. The custom event. 	*/
        this.onDragEnd = new EventEmitter();
        /** @description This event is triggered when a Breadcrumb item is being dragged.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	originalEvent, 	target)
        *   item - The item that is being dragged.
        *   originalEvent - The original event that initiates the dragging operation.
        *   target - The original target.
        */
        this.onDragging = new EventEmitter();
        /** @description This event is triggered when the "Add new item" (+) button is clicked.
        *  @param event. The custom event. 	*/
        this.onAddNewItem = new EventEmitter();
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('smart-breadcrumb');
        for (let propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    }
    /** @description Enables or disables the "Add new item" (+) button. */
    get addNewItem() {
        return this.nativeElement ? this.nativeElement.addNewItem : undefined;
    }
    set addNewItem(value) {
        this.nativeElement ? this.nativeElement.addNewItem = value : undefined;
    }
    /** @description Enables or disables the dragging of breadcrumb items. */
    get allowDrag() {
        return this.nativeElement ? this.nativeElement.allowDrag : undefined;
    }
    set allowDrag(value) {
        this.nativeElement ? this.nativeElement.allowDrag = value : undefined;
    }
    /** @description Enables or disables the dropping of dragged breadcrumb items. */
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
    /** @description Show/Hide the close button of breadcrumb items. */
    get closeButtons() {
        return this.nativeElement ? this.nativeElement.closeButtons : undefined;
    }
    set closeButtons(value) {
        this.nativeElement ? this.nativeElement.closeButtons = value : undefined;
    }
    /** @description Determines the data source to load breadcrumb items from. The Array should contain objects. Each object defines a single breadcrumb item. */
    get dataSource() {
        return this.nativeElement ? this.nativeElement.dataSource : undefined;
    }
    set dataSource(value) {
        this.nativeElement ? this.nativeElement.dataSource = value : undefined;
    }
    /** @description Enables or disables the Breadcrumb. */
    get disabled() {
        return this.nativeElement ? this.nativeElement.disabled : undefined;
    }
    set disabled(value) {
        this.nativeElement ? this.nativeElement.disabled = value : undefined;
    }
    /** @description Sets or gets the template of breadcrumb items. The value of this property can be the id of an HTMLTemplateElement or the HTMLTemplateElement itself. If set to null, no template is applied. */
    get itemTemplate() {
        return this.nativeElement ? this.nativeElement.itemTemplate : undefined;
    }
    set itemTemplate(value) {
        this.nativeElement ? this.nativeElement.itemTemplate = value : undefined;
    }
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    get locale() {
        return this.nativeElement ? this.nativeElement.locale : undefined;
    }
    set locale(value) {
        this.nativeElement ? this.nativeElement.locale = value : undefined;
    }
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
    get messages() {
        return this.nativeElement ? this.nativeElement.messages : undefined;
    }
    set messages(value) {
        this.nativeElement ? this.nativeElement.messages = value : undefined;
    }
    /** @description Determines the minimum width of the Breadcrumb at which it will switch from normal to minimized mode. If set to null, the Breadcrumb does not minimize automatically. */
    get minimizeWidth() {
        return this.nativeElement ? this.nativeElement.minimizeWidth : undefined;
    }
    set minimizeWidth(value) {
        this.nativeElement ? this.nativeElement.minimizeWidth = value : undefined;
    }
    /** @description If is set to true, the element cannot be focused. */
    get unfocusable() {
        return this.nativeElement ? this.nativeElement.unfocusable : undefined;
    }
    set unfocusable(value) {
        this.nativeElement ? this.nativeElement.unfocusable = value : undefined;
    }
    /** @description Adds an item.
    * @param {any} itemDetails. An Object with the fields "index", "label", and "value".
    */
    addItem(itemDetails) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addItem(itemDetails);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addItem(itemDetails);
            });
        }
    }
    /** @description Restores the Breadcrumb from minimized state back to normal.
    */
    maximize() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.maximize();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.maximize();
            });
        }
    }
    /** @description Minimizes the Breadcrumb.
    */
    minimize() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.minimize();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.minimize();
            });
        }
    }
    /** @description Removes an item.
    * @param {HTMLElement} item. The item to remove.
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
        that.eventHandlers['closeHandler'] = (event) => { that.onClose.emit(event); };
        that.nativeElement.addEventListener('close', that.eventHandlers['closeHandler']);
        that.eventHandlers['closingHandler'] = (event) => { that.onClosing.emit(event); };
        that.nativeElement.addEventListener('closing', that.eventHandlers['closingHandler']);
        that.eventHandlers['dragEndHandler'] = (event) => { that.onDragEnd.emit(event); };
        that.nativeElement.addEventListener('dragEnd', that.eventHandlers['dragEndHandler']);
        that.eventHandlers['draggingHandler'] = (event) => { that.onDragging.emit(event); };
        that.nativeElement.addEventListener('dragging', that.eventHandlers['draggingHandler']);
        that.eventHandlers['addNewItemHandler'] = (event) => { that.onAddNewItem.emit(event); };
        that.nativeElement.addEventListener('addNewItem', that.eventHandlers['addNewItemHandler']);
    }
    /** @description Remove event listeners. */
    unlisten() {
        const that = this;
        if (that.eventHandlers['closeHandler']) {
            that.nativeElement.removeEventListener('close', that.eventHandlers['closeHandler']);
        }
        if (that.eventHandlers['closingHandler']) {
            that.nativeElement.removeEventListener('closing', that.eventHandlers['closingHandler']);
        }
        if (that.eventHandlers['dragEndHandler']) {
            that.nativeElement.removeEventListener('dragEnd', that.eventHandlers['dragEndHandler']);
        }
        if (that.eventHandlers['draggingHandler']) {
            that.nativeElement.removeEventListener('dragging', that.eventHandlers['draggingHandler']);
        }
        if (that.eventHandlers['addNewItemHandler']) {
            that.nativeElement.removeEventListener('addNewItem', that.eventHandlers['addNewItemHandler']);
        }
    }
};
BreadcrumbComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], BreadcrumbComponent.prototype, "addNewItem", null);
__decorate([
    Input()
], BreadcrumbComponent.prototype, "allowDrag", null);
__decorate([
    Input()
], BreadcrumbComponent.prototype, "allowDrop", null);
__decorate([
    Input()
], BreadcrumbComponent.prototype, "animation", null);
__decorate([
    Input()
], BreadcrumbComponent.prototype, "closeButtons", null);
__decorate([
    Input()
], BreadcrumbComponent.prototype, "dataSource", null);
__decorate([
    Input()
], BreadcrumbComponent.prototype, "disabled", null);
__decorate([
    Input()
], BreadcrumbComponent.prototype, "itemTemplate", null);
__decorate([
    Input()
], BreadcrumbComponent.prototype, "locale", null);
__decorate([
    Input()
], BreadcrumbComponent.prototype, "messages", null);
__decorate([
    Input()
], BreadcrumbComponent.prototype, "minimizeWidth", null);
__decorate([
    Input()
], BreadcrumbComponent.prototype, "unfocusable", null);
__decorate([
    Output()
], BreadcrumbComponent.prototype, "onClose", void 0);
__decorate([
    Output()
], BreadcrumbComponent.prototype, "onClosing", void 0);
__decorate([
    Output()
], BreadcrumbComponent.prototype, "onDragEnd", void 0);
__decorate([
    Output()
], BreadcrumbComponent.prototype, "onDragging", void 0);
__decorate([
    Output()
], BreadcrumbComponent.prototype, "onAddNewItem", void 0);
BreadcrumbComponent = __decorate([
    Directive({
        exportAs: 'smart-breadcrumb', selector: 'smart-breadcrumb, [smart-breadcrumb]'
    })
], BreadcrumbComponent);

let BreadcrumbModule = class BreadcrumbModule {
};
BreadcrumbModule = __decorate([
    NgModule({
        declarations: [BreadcrumbComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        exports: [BreadcrumbComponent]
    })
], BreadcrumbModule);

/**
 * Generated bundle index. Do not edit.
 */

export { BreadcrumbComponent, BreadcrumbModule, Smart, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-breadcrumb.js.map
