
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.gridpanel';

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

let SortPanelComponent = class SortPanelComponent extends BaseElement {
    constructor(ref) {
        super(ref);
        this.eventHandlers = [];
        /** @description This event is triggered when the "Apply" button is clicked.
        *  @param event. The custom event. 	*/
        this.onApply = new EventEmitter();
        /** @description This event is triggered when the "Cancel" button is clicked.
        *  @param event. The custom event. 	*/
        this.onCancel = new EventEmitter();
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('smart-sort-panel');
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
    /** @description Sets or gets the the position of the close button of sort panel items. */
    get closeButtonPosition() {
        return this.nativeElement ? this.nativeElement.closeButtonPosition : undefined;
    }
    set closeButtonPosition(value) {
        this.nativeElement ? this.nativeElement.closeButtonPosition = value : undefined;
    }
    /** @description Determines the data source that will be loaded to the sort panel.Each member of the dataSource array is an object with the following fields:dataField - the dataField of the column to be sorted.dataType - the data type of the column to be sorted.label - the column label to be displayed in the column selection input.icon - a specific class to be applied to the respective item in the column selection input.sortDirection - the sort direction to be applied. Possible values: 'ascending' and 'descending'.sortIndex - the sort order of columns. If this value is -1, the column will not be initially sorted. */
    get dataSource() {
        return this.nativeElement ? this.nativeElement.dataSource : undefined;
    }
    set dataSource(value) {
        this.nativeElement ? this.nativeElement.dataSource = value : undefined;
    }
    /** @description Enables or disables the sort panel. */
    get disabled() {
        return this.nativeElement ? this.nativeElement.disabled : undefined;
    }
    set disabled(value) {
        this.nativeElement ? this.nativeElement.disabled = value : undefined;
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
    /** @description If the element is readonly, users cannot interact with it. */
    get readonly() {
        return this.nativeElement ? this.nativeElement.readonly : undefined;
    }
    set readonly(value) {
        this.nativeElement ? this.nativeElement.readonly = value : undefined;
    }
    /** @description If is set to true, the element cannot be focused. */
    get unfocusable() {
        return this.nativeElement ? this.nativeElement.unfocusable : undefined;
    }
    set unfocusable(value) {
        this.nativeElement ? this.nativeElement.unfocusable = value : undefined;
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
        that.eventHandlers['applyHandler'] = (event) => { that.onApply.emit(event); };
        that.nativeElement.addEventListener('apply', that.eventHandlers['applyHandler']);
        that.eventHandlers['cancelHandler'] = (event) => { that.onCancel.emit(event); };
        that.nativeElement.addEventListener('cancel', that.eventHandlers['cancelHandler']);
    }
    /** @description Remove event listeners. */
    unlisten() {
        const that = this;
        if (that.eventHandlers['applyHandler']) {
            that.nativeElement.removeEventListener('apply', that.eventHandlers['applyHandler']);
        }
        if (that.eventHandlers['cancelHandler']) {
            that.nativeElement.removeEventListener('cancel', that.eventHandlers['cancelHandler']);
        }
    }
};
SortPanelComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], SortPanelComponent.prototype, "animation", null);
__decorate([
    Input()
], SortPanelComponent.prototype, "closeButtonPosition", null);
__decorate([
    Input()
], SortPanelComponent.prototype, "dataSource", null);
__decorate([
    Input()
], SortPanelComponent.prototype, "disabled", null);
__decorate([
    Input()
], SortPanelComponent.prototype, "locale", null);
__decorate([
    Input()
], SortPanelComponent.prototype, "localizeFormatFunction", null);
__decorate([
    Input()
], SortPanelComponent.prototype, "messages", null);
__decorate([
    Input()
], SortPanelComponent.prototype, "readonly", null);
__decorate([
    Input()
], SortPanelComponent.prototype, "unfocusable", null);
__decorate([
    Output()
], SortPanelComponent.prototype, "onApply", void 0);
__decorate([
    Output()
], SortPanelComponent.prototype, "onCancel", void 0);
SortPanelComponent = __decorate([
    Directive({
        exportAs: 'smart-sort-panel', selector: 'smart-sort-panel, [smart-sort-panel]'
    })
], SortPanelComponent);

let SortPanelModule = class SortPanelModule {
};
SortPanelModule = __decorate([
    NgModule({
        declarations: [SortPanelComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        exports: [SortPanelComponent]
    })
], SortPanelModule);

/**
 * Generated bundle index. Do not edit.
 */

export { Smart, SortPanelComponent, SortPanelModule, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-sortpanel.js.map
