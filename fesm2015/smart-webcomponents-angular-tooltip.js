
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.tooltip';

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

let TooltipComponent = class TooltipComponent extends BaseElement {
    constructor(ref) {
        super(ref);
        this.eventHandlers = [];
        /** @description This event is triggered when the tooltip is opened.
        *  @param event. The custom event. 	*/
        this.onOpen = new EventEmitter();
        /** @description This event is triggered before the tooltip is opened. The event can be prevented via event.preventDefault().
        *  @param event. The custom event. 	*/
        this.onOpening = new EventEmitter();
        /** @description This event is triggered when the tooltip is closed.
        *  @param event. The custom event. 	*/
        this.onClose = new EventEmitter();
        /** @description This event is triggered before the tooltip is closed. The event can be prevented via event.preventDefault().
        *  @param event. The custom event. 	*/
        this.onClosing = new EventEmitter();
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('smart-tooltip');
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
    /** @description Determines how to align the tooltip. */
    get align() {
        return this.nativeElement ? this.nativeElement.align : undefined;
    }
    set align(value) {
        this.nativeElement ? this.nativeElement.align = value : undefined;
    }
    /** @description Gets or sets whether a tooltip's arrow will be shown. */
    get arrow() {
        return this.nativeElement ? this.nativeElement.arrow : undefined;
    }
    set arrow(value) {
        this.nativeElement ? this.nativeElement.arrow = value : undefined;
    }
    /** @description Sets the position of the arrow. */
    get arrowDirection() {
        return this.nativeElement ? this.nativeElement.arrowDirection : undefined;
    }
    set arrowDirection(value) {
        this.nativeElement ? this.nativeElement.arrowDirection = value : undefined;
    }
    /** @description Gets or sets whether a tooltip's arrow will be shown. */
    get delay() {
        return this.nativeElement ? this.nativeElement.delay : undefined;
    }
    set delay(value) {
        this.nativeElement ? this.nativeElement.delay = value : undefined;
    }
    /** @description Enables or disables the tooltip. */
    get disabled() {
        return this.nativeElement ? this.nativeElement.disabled : undefined;
    }
    set disabled(value) {
        this.nativeElement ? this.nativeElement.disabled = value : undefined;
    }
    /** @description Sets an offset by X and Y. */
    get offset() {
        return this.nativeElement ? this.nativeElement.offset : undefined;
    }
    set offset(value) {
        this.nativeElement ? this.nativeElement.offset = value : undefined;
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
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property language.  */
    get messages() {
        return this.nativeElement ? this.nativeElement.messages : undefined;
    }
    set messages(value) {
        this.nativeElement ? this.nativeElement.messages = value : undefined;
    }
    /** @description Sets or gets the way of triggering the tooltip. */
    get openMode() {
        return this.nativeElement ? this.nativeElement.openMode : undefined;
    }
    set openMode(value) {
        this.nativeElement ? this.nativeElement.openMode = value : undefined;
    }
    /** @description Gets or sets the position of the tooltip. */
    get position() {
        return this.nativeElement ? this.nativeElement.position : undefined;
    }
    set position(value) {
        this.nativeElement ? this.nativeElement.position = value : undefined;
    }
    /** @description Sets the element which triggers the tooltip. */
    get selector() {
        return this.nativeElement ? this.nativeElement.selector : undefined;
    }
    set selector(value) {
        this.nativeElement ? this.nativeElement.selector = value : undefined;
    }
    /** @description Determines the theme. Theme defines the look of the element */
    get theme() {
        return this.nativeElement ? this.nativeElement.theme : undefined;
    }
    set theme(value) {
        this.nativeElement ? this.nativeElement.theme = value : undefined;
    }
    /** @description Sets custom tooltip template. */
    get tooltipTemplate() {
        return this.nativeElement ? this.nativeElement.tooltipTemplate : undefined;
    }
    set tooltipTemplate(value) {
        this.nativeElement ? this.nativeElement.tooltipTemplate = value : undefined;
    }
    /** @description If is set to true, the element cannot be focused. */
    get unfocusable() {
        return this.nativeElement ? this.nativeElement.unfocusable : undefined;
    }
    set unfocusable(value) {
        this.nativeElement ? this.nativeElement.unfocusable = value : undefined;
    }
    /** @description Sets or gets the widget's value. */
    get value() {
        return this.nativeElement ? this.nativeElement.value : undefined;
    }
    set value(value) {
        this.nativeElement ? this.nativeElement.value = value : undefined;
    }
    /** @description Sets or gets the visibility of the tooltip. */
    get visible() {
        return this.nativeElement ? this.nativeElement.visible : undefined;
    }
    set visible(value) {
        this.nativeElement ? this.nativeElement.visible = value : undefined;
    }
    /** @description Closes smart-tooltip.
    */
    close() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.close();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.close();
            });
        }
    }
    /** @description Opens smart-tooltip.
    */
    open() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.open();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.open();
            });
        }
    }
    /** @description Toggles smart-tooltip.
    */
    toggle() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.toggle();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.toggle();
            });
        }
    }
    /** @description Clears the content of the Tooltip.
    */
    clear() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.clear();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clear();
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
        that.eventHandlers['openHandler'] = (event) => { that.onOpen.emit(event); };
        that.nativeElement.addEventListener('open', that.eventHandlers['openHandler']);
        that.eventHandlers['openingHandler'] = (event) => { that.onOpening.emit(event); };
        that.nativeElement.addEventListener('opening', that.eventHandlers['openingHandler']);
        that.eventHandlers['closeHandler'] = (event) => { that.onClose.emit(event); };
        that.nativeElement.addEventListener('close', that.eventHandlers['closeHandler']);
        that.eventHandlers['closingHandler'] = (event) => { that.onClosing.emit(event); };
        that.nativeElement.addEventListener('closing', that.eventHandlers['closingHandler']);
    }
    /** @description Remove event listeners. */
    unlisten() {
        const that = this;
        if (that.eventHandlers['openHandler']) {
            that.nativeElement.removeEventListener('open', that.eventHandlers['openHandler']);
        }
        if (that.eventHandlers['openingHandler']) {
            that.nativeElement.removeEventListener('opening', that.eventHandlers['openingHandler']);
        }
        if (that.eventHandlers['closeHandler']) {
            that.nativeElement.removeEventListener('close', that.eventHandlers['closeHandler']);
        }
        if (that.eventHandlers['closingHandler']) {
            that.nativeElement.removeEventListener('closing', that.eventHandlers['closingHandler']);
        }
    }
};
TooltipComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], TooltipComponent.prototype, "animation", null);
__decorate([
    Input()
], TooltipComponent.prototype, "align", null);
__decorate([
    Input()
], TooltipComponent.prototype, "arrow", null);
__decorate([
    Input()
], TooltipComponent.prototype, "arrowDirection", null);
__decorate([
    Input()
], TooltipComponent.prototype, "delay", null);
__decorate([
    Input()
], TooltipComponent.prototype, "disabled", null);
__decorate([
    Input()
], TooltipComponent.prototype, "offset", null);
__decorate([
    Input()
], TooltipComponent.prototype, "locale", null);
__decorate([
    Input()
], TooltipComponent.prototype, "localizeFormatFunction", null);
__decorate([
    Input()
], TooltipComponent.prototype, "messages", null);
__decorate([
    Input()
], TooltipComponent.prototype, "openMode", null);
__decorate([
    Input()
], TooltipComponent.prototype, "position", null);
__decorate([
    Input()
], TooltipComponent.prototype, "selector", null);
__decorate([
    Input()
], TooltipComponent.prototype, "theme", null);
__decorate([
    Input()
], TooltipComponent.prototype, "tooltipTemplate", null);
__decorate([
    Input()
], TooltipComponent.prototype, "unfocusable", null);
__decorate([
    Input()
], TooltipComponent.prototype, "value", null);
__decorate([
    Input()
], TooltipComponent.prototype, "visible", null);
__decorate([
    Output()
], TooltipComponent.prototype, "onOpen", void 0);
__decorate([
    Output()
], TooltipComponent.prototype, "onOpening", void 0);
__decorate([
    Output()
], TooltipComponent.prototype, "onClose", void 0);
__decorate([
    Output()
], TooltipComponent.prototype, "onClosing", void 0);
TooltipComponent = __decorate([
    Directive({
        exportAs: 'smart-tooltip', selector: 'smart-tooltip, [smart-tooltip]'
    })
], TooltipComponent);

let TooltipModule = class TooltipModule {
};
TooltipModule = __decorate([
    NgModule({
        declarations: [TooltipComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        exports: [TooltipComponent]
    })
], TooltipModule);

/**
 * Generated bundle index. Do not edit.
 */

export { Smart, TooltipComponent, TooltipModule, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-tooltip.js.map
