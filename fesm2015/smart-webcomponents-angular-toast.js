
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.toast';

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

let ToastComponent = class ToastComponent extends BaseElement {
    constructor(ref) {
        super(ref);
        this.eventHandlers = [];
        /** @description This event is triggered when the toast item is clicked.
        *  @param event. The custom event. 	*/
        this.onItemClick = new EventEmitter();
        /** @description This event is triggered when the toast item is closed.
        *  @param event. The custom event. 	*/
        this.onClose = new EventEmitter();
        /** @description This event is triggered when the toast item is opened.
        *  @param event. The custom event. 	*/
        this.onOpen = new EventEmitter();
        /** @description This event is triggered on swipebottom over an toast item.
        *  @param event. The custom event. 	*/
        this.onSwipebottom = new EventEmitter();
        /** @description This event is triggered on swipeleft over an toast item.
        *  @param event. The custom event. 	*/
        this.onSwipeleft = new EventEmitter();
        /** @description This event is triggered on swiperight over an toast item.
        *  @param event. The custom event. 	*/
        this.onSwiperight = new EventEmitter();
        /** @description This event is triggered on swipetop over an toast item.
        *  @param event. The custom event. 	*/
        this.onSwipetop = new EventEmitter();
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('smart-toast');
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
    /** @description Specifies the container where new openned toast items will be displayed. The value can be an HTMLElement or element's id. This property is in relation with modal(lower priority than modal) and position(higher priority than position) properties. */
    get appendTo() {
        return this.nativeElement ? this.nativeElement.appendTo : undefined;
    }
    set appendTo(value) {
        this.nativeElement ? this.nativeElement.appendTo = value : undefined;
    }
    /** @description Sets or gets whether the toast will automatically close after duration equal to the autoCloseDelay property. */
    get autoClose() {
        return this.nativeElement ? this.nativeElement.autoClose : undefined;
    }
    set autoClose(value) {
        this.nativeElement ? this.nativeElement.autoClose = value : undefined;
    }
    /** @description Sets or gets the duration after which the toast automatically closes (works only if the autoClose property is set to true). */
    get autoCloseDelay() {
        return this.nativeElement ? this.nativeElement.autoCloseDelay : undefined;
    }
    set autoCloseDelay(value) {
        this.nativeElement ? this.nativeElement.autoCloseDelay = value : undefined;
    }
    /** @description Sets whether the toast will open automatically immediately after widget's initialization. */
    get autoOpen() {
        return this.nativeElement ? this.nativeElement.autoOpen : undefined;
    }
    set autoOpen(value) {
        this.nativeElement ? this.nativeElement.autoOpen = value : undefined;
    }
    /** @description The user will not be able to interact with toast items when disabled is set to true. */
    get disabled() {
        return this.nativeElement ? this.nativeElement.disabled : undefined;
    }
    set disabled(value) {
        this.nativeElement ? this.nativeElement.disabled = value : undefined;
    }
    /** @description Sets custom icon className which overrides the default one. Multiple class names can be applied by separating them with a space. Useful when loading from a third-party icon library (such as Bootstrap). */
    get iconClass() {
        return this.nativeElement ? this.nativeElement.iconClass : undefined;
    }
    set iconClass(value) {
        this.nativeElement ? this.nativeElement.iconClass = value : undefined;
    }
    /** @description Adds a custom class to Toast items. Multiple class names can be applied by separating them with a space. Useful when styling by using predefined class names from a third-party CSS library (such as Bootstrap). */
    get itemClass() {
        return this.nativeElement ? this.nativeElement.itemClass : undefined;
    }
    set itemClass(value) {
        this.nativeElement ? this.nativeElement.itemClass = value : undefined;
    }
    /** @description Sets custom item template. */
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
    /** @description In modal mode the toast item is positioned in the center of the screen. This property is with higher priority than position and appendTo. If modal is set to true these properties are disregarded. */
    get modal() {
        return this.nativeElement ? this.nativeElement.modal : undefined;
    }
    set modal(value) {
        this.nativeElement ? this.nativeElement.modal = value : undefined;
    }
    /** @description Sets the part of the browser window where the toast will be positioned. The position property is disregarded if appendTo or modal are set. */
    get position() {
        return this.nativeElement ? this.nativeElement.position : undefined;
    }
    set position(value) {
        this.nativeElement ? this.nativeElement.position = value : undefined;
    }
    /** @description If the element is readonly, users cannot interact with it. */
    get readonly() {
        return this.nativeElement ? this.nativeElement.readonly : undefined;
    }
    set readonly(value) {
        this.nativeElement ? this.nativeElement.readonly = value : undefined;
    }
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    get rightToLeft() {
        return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
    }
    set rightToLeft(value) {
        this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
    }
    /** @description Sets or gets whether to show the toast item's close button. */
    get showCloseButton() {
        return this.nativeElement ? this.nativeElement.showCloseButton : undefined;
    }
    set showCloseButton(value) {
        this.nativeElement ? this.nativeElement.showCloseButton = value : undefined;
    }
    /** @description Determines the theme. Theme defines the look of the element */
    get theme() {
        return this.nativeElement ? this.nativeElement.theme : undefined;
    }
    set theme(value) {
        this.nativeElement ? this.nativeElement.theme = value : undefined;
    }
    /** @description Sets speciffic CSS settings and icon to the toast items. */
    get type() {
        return this.nativeElement ? this.nativeElement.type : undefined;
    }
    set type(value) {
        this.nativeElement ? this.nativeElement.type = value : undefined;
    }
    /** @description If is set to true, the element cannot be focused. */
    get unfocusable() {
        return this.nativeElement ? this.nativeElement.unfocusable : undefined;
    }
    set unfocusable(value) {
        this.nativeElement ? this.nativeElement.unfocusable = value : undefined;
    }
    /** @description Sets a text value to an toast item. */
    get value() {
        return this.nativeElement ? this.nativeElement.value : undefined;
    }
    set value(value) {
        this.nativeElement ? this.nativeElement.value = value : undefined;
    }
    /** @description Closes all opened toast items.
    */
    closeAll() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.closeAll();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.closeAll();
            });
        }
    }
    /** @description Closes particular toast item.
    * @param {HTMLElement | string} item. The toast item (or its id) to remove.
    */
    closeItem(item) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.closeItem(item);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.closeItem(item);
            });
        }
    }
    /** @description Closes the last opened toast item.
    */
    closeLast() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.closeLast();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.closeLast();
            });
        }
    }
    /** @description Opens a new toast item and returns the opened smart-toast-item instance.
    * @param {HTMLElement | string} value?. The value for the toast item. If not set, the value property will be used.
    * @param {string} iconType?. The icon name for the toast item. If not set, the type property determines the icon type that will be used.
    * @returns {HTMLElement}
  */
    open(value, iconType) {
        return __awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.open(value, iconType);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
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
        that.eventHandlers['itemClickHandler'] = (event) => { that.onItemClick.emit(event); };
        that.nativeElement.addEventListener('itemClick', that.eventHandlers['itemClickHandler']);
        that.eventHandlers['closeHandler'] = (event) => { that.onClose.emit(event); };
        that.nativeElement.addEventListener('close', that.eventHandlers['closeHandler']);
        that.eventHandlers['openHandler'] = (event) => { that.onOpen.emit(event); };
        that.nativeElement.addEventListener('open', that.eventHandlers['openHandler']);
        that.eventHandlers['swipebottomHandler'] = (event) => { that.onSwipebottom.emit(event); };
        that.nativeElement.addEventListener('swipebottom', that.eventHandlers['swipebottomHandler']);
        that.eventHandlers['swipeleftHandler'] = (event) => { that.onSwipeleft.emit(event); };
        that.nativeElement.addEventListener('swipeleft', that.eventHandlers['swipeleftHandler']);
        that.eventHandlers['swiperightHandler'] = (event) => { that.onSwiperight.emit(event); };
        that.nativeElement.addEventListener('swiperight', that.eventHandlers['swiperightHandler']);
        that.eventHandlers['swipetopHandler'] = (event) => { that.onSwipetop.emit(event); };
        that.nativeElement.addEventListener('swipetop', that.eventHandlers['swipetopHandler']);
    }
    /** @description Remove event listeners. */
    unlisten() {
        const that = this;
        if (that.eventHandlers['itemClickHandler']) {
            that.nativeElement.removeEventListener('itemClick', that.eventHandlers['itemClickHandler']);
        }
        if (that.eventHandlers['closeHandler']) {
            that.nativeElement.removeEventListener('close', that.eventHandlers['closeHandler']);
        }
        if (that.eventHandlers['openHandler']) {
            that.nativeElement.removeEventListener('open', that.eventHandlers['openHandler']);
        }
        if (that.eventHandlers['swipebottomHandler']) {
            that.nativeElement.removeEventListener('swipebottom', that.eventHandlers['swipebottomHandler']);
        }
        if (that.eventHandlers['swipeleftHandler']) {
            that.nativeElement.removeEventListener('swipeleft', that.eventHandlers['swipeleftHandler']);
        }
        if (that.eventHandlers['swiperightHandler']) {
            that.nativeElement.removeEventListener('swiperight', that.eventHandlers['swiperightHandler']);
        }
        if (that.eventHandlers['swipetopHandler']) {
            that.nativeElement.removeEventListener('swipetop', that.eventHandlers['swipetopHandler']);
        }
    }
};
ToastComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], ToastComponent.prototype, "animation", null);
__decorate([
    Input()
], ToastComponent.prototype, "appendTo", null);
__decorate([
    Input()
], ToastComponent.prototype, "autoClose", null);
__decorate([
    Input()
], ToastComponent.prototype, "autoCloseDelay", null);
__decorate([
    Input()
], ToastComponent.prototype, "autoOpen", null);
__decorate([
    Input()
], ToastComponent.prototype, "disabled", null);
__decorate([
    Input()
], ToastComponent.prototype, "iconClass", null);
__decorate([
    Input()
], ToastComponent.prototype, "itemClass", null);
__decorate([
    Input()
], ToastComponent.prototype, "itemTemplate", null);
__decorate([
    Input()
], ToastComponent.prototype, "locale", null);
__decorate([
    Input()
], ToastComponent.prototype, "localizeFormatFunction", null);
__decorate([
    Input()
], ToastComponent.prototype, "messages", null);
__decorate([
    Input()
], ToastComponent.prototype, "modal", null);
__decorate([
    Input()
], ToastComponent.prototype, "position", null);
__decorate([
    Input()
], ToastComponent.prototype, "readonly", null);
__decorate([
    Input()
], ToastComponent.prototype, "rightToLeft", null);
__decorate([
    Input()
], ToastComponent.prototype, "showCloseButton", null);
__decorate([
    Input()
], ToastComponent.prototype, "theme", null);
__decorate([
    Input()
], ToastComponent.prototype, "type", null);
__decorate([
    Input()
], ToastComponent.prototype, "unfocusable", null);
__decorate([
    Input()
], ToastComponent.prototype, "value", null);
__decorate([
    Output()
], ToastComponent.prototype, "onItemClick", void 0);
__decorate([
    Output()
], ToastComponent.prototype, "onClose", void 0);
__decorate([
    Output()
], ToastComponent.prototype, "onOpen", void 0);
__decorate([
    Output()
], ToastComponent.prototype, "onSwipebottom", void 0);
__decorate([
    Output()
], ToastComponent.prototype, "onSwipeleft", void 0);
__decorate([
    Output()
], ToastComponent.prototype, "onSwiperight", void 0);
__decorate([
    Output()
], ToastComponent.prototype, "onSwipetop", void 0);
ToastComponent = __decorate([
    Directive({
        exportAs: 'smart-toast', selector: 'smart-toast, [smart-toast]'
    })
], ToastComponent);

let ToastModule = class ToastModule {
};
ToastModule = __decorate([
    NgModule({
        declarations: [ToastComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        exports: [ToastComponent]
    })
], ToastModule);

/**
 * Generated bundle index. Do not edit.
 */

export { Smart, ToastComponent, ToastModule, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-toast.js.map
