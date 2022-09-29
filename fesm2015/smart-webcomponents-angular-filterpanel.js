
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.filterpanel';

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

let FilterPanelComponent = class FilterPanelComponent extends BaseElement {
    constructor(ref) {
        super(ref);
        this.eventHandlers = [];
        /** @description This event is triggered when the current filtering is discarted.
        *  @param event. The custom event. 	*/
        this.onCancel = new EventEmitter();
        /** @description This event is triggered when the current filtering is cleared.
        *  @param event. The custom event. 	*/
        this.onClear = new EventEmitter();
        /** @description This event is triggered when filter panel settings are applied.
        *  @param event. The custom event. 	*/
        this.onFilter = new EventEmitter();
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('smart-filter-panel');
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
    /** @description Defines which operation buttons will be shown in the filter panel */
    get buttons() {
        return this.nativeElement ? this.nativeElement.buttons : undefined;
    }
    set buttons(value) {
        this.nativeElement ? this.nativeElement.buttons = value : undefined;
    }
    /** @description Array in mode: 'excel', determines the data to extract unique filter values from. The expected format of the data is an array of objects with key-value pairs (JSON array) */
    get data() {
        return this.nativeElement ? this.nativeElement.data : undefined;
    }
    set data(value) {
        this.nativeElement ? this.nativeElement.data = value : undefined;
    }
    /** @description Describes filtered data field. */
    get dataField() {
        return this.nativeElement ? this.nativeElement.dataField : undefined;
    }
    set dataField(value) {
        this.nativeElement ? this.nativeElement.dataField = value : undefined;
    }
    /** @description If set to an array, determines a custom collection of filter values to be displayed. If set to a callback function, the user can add custom filter values dynamically to the default filter values (in this case, the evaluateFilterExpression function must also be implemented) .dataSource  is only available in mode: 'excel'. */
    get dataSource() {
        return this.nativeElement ? this.nativeElement.dataSource : undefined;
    }
    set dataSource(value) {
        this.nativeElement ? this.nativeElement.dataSource = value : undefined;
    }
    /** @description Enables or disables filter panel. */
    get disabled() {
        return this.nativeElement ? this.nativeElement.disabled : undefined;
    }
    set disabled(value) {
        this.nativeElement ? this.nativeElement.disabled = value : undefined;
    }
    /** @description Callback function, used for custom evaluations in filter panel. */
    get evaluateFilterExpression() {
        return this.nativeElement ? this.nativeElement.evaluateFilterExpression : undefined;
    }
    set evaluateFilterExpression(value) {
        this.nativeElement ? this.nativeElement.evaluateFilterExpression = value : undefined;
    }
    /** @description Defines which filter type is used. */
    get filterType() {
        return this.nativeElement ? this.nativeElement.filterType : undefined;
    }
    set filterType(value) {
        this.nativeElement ? this.nativeElement.filterType = value : undefined;
    }
    /** @description Format string used in filterType 'Date'. */
    get formatString() {
        return this.nativeElement ? this.nativeElement.formatString : undefined;
    }
    set formatString(value) {
        this.nativeElement ? this.nativeElement.formatString = value : undefined;
    }
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    get locale() {
        return this.nativeElement ? this.nativeElement.locale : undefined;
    }
    set locale(value) {
        this.nativeElement ? this.nativeElement.locale = value : undefined;
    }
    /** @description Defines field names of the filtered element. */
    get messages() {
        return this.nativeElement ? this.nativeElement.messages : undefined;
    }
    set messages(value) {
        this.nativeElement ? this.nativeElement.messages = value : undefined;
    }
    /** @description Desfines filter panel's  mode */
    get mode() {
        return this.nativeElement ? this.nativeElement.mode : undefined;
    }
    set mode(value) {
        this.nativeElement ? this.nativeElement.mode = value : undefined;
    }
    /** @description If the element is readonly, users cannot interact with it. */
    get readonly() {
        return this.nativeElement ? this.nativeElement.readonly : undefined;
    }
    set readonly(value) {
        this.nativeElement ? this.nativeElement.readonly = value : undefined;
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
    /** @description Discards current filtering.
    */
    cancel() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.cancel();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.cancel();
            });
        }
    }
    /** @description Clears current filtering.
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
    /** @description Evaluates a filter.
    * @param {any} value. The evalueated element in filter panel.
    */
    evaluate(value) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.evaluate(value);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.evaluate(value);
            });
        }
    }
    /** @description Applies current filtering.
    */
    filter() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.filter();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.filter();
            });
        }
    }
    /** @description Gets the current filter state.
    * @returns {any}
  */
    getState() {
        return __awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getState();
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Loads a previously saved filter state.
    * @param {any} state. An object returned by the method getState.
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
        that.eventHandlers['cancelHandler'] = (event) => { that.onCancel.emit(event); };
        that.nativeElement.addEventListener('cancel', that.eventHandlers['cancelHandler']);
        that.eventHandlers['clearHandler'] = (event) => { that.onClear.emit(event); };
        that.nativeElement.addEventListener('clear', that.eventHandlers['clearHandler']);
        that.eventHandlers['filterHandler'] = (event) => { that.onFilter.emit(event); };
        that.nativeElement.addEventListener('filter', that.eventHandlers['filterHandler']);
    }
    /** @description Remove event listeners. */
    unlisten() {
        const that = this;
        if (that.eventHandlers['cancelHandler']) {
            that.nativeElement.removeEventListener('cancel', that.eventHandlers['cancelHandler']);
        }
        if (that.eventHandlers['clearHandler']) {
            that.nativeElement.removeEventListener('clear', that.eventHandlers['clearHandler']);
        }
        if (that.eventHandlers['filterHandler']) {
            that.nativeElement.onfilterHandler = null;
        }
    }
};
FilterPanelComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], FilterPanelComponent.prototype, "animation", null);
__decorate([
    Input()
], FilterPanelComponent.prototype, "buttons", null);
__decorate([
    Input()
], FilterPanelComponent.prototype, "data", null);
__decorate([
    Input()
], FilterPanelComponent.prototype, "dataField", null);
__decorate([
    Input()
], FilterPanelComponent.prototype, "dataSource", null);
__decorate([
    Input()
], FilterPanelComponent.prototype, "disabled", null);
__decorate([
    Input()
], FilterPanelComponent.prototype, "evaluateFilterExpression", null);
__decorate([
    Input()
], FilterPanelComponent.prototype, "filterType", null);
__decorate([
    Input()
], FilterPanelComponent.prototype, "formatString", null);
__decorate([
    Input()
], FilterPanelComponent.prototype, "locale", null);
__decorate([
    Input()
], FilterPanelComponent.prototype, "messages", null);
__decorate([
    Input()
], FilterPanelComponent.prototype, "mode", null);
__decorate([
    Input()
], FilterPanelComponent.prototype, "readonly", null);
__decorate([
    Input()
], FilterPanelComponent.prototype, "theme", null);
__decorate([
    Input()
], FilterPanelComponent.prototype, "unfocusable", null);
__decorate([
    Output()
], FilterPanelComponent.prototype, "onCancel", void 0);
__decorate([
    Output()
], FilterPanelComponent.prototype, "onClear", void 0);
__decorate([
    Output()
], FilterPanelComponent.prototype, "onFilter", void 0);
FilterPanelComponent = __decorate([
    Directive({
        exportAs: 'smart-filter-panel', selector: 'smart-filter-panel, [smart-filter-panel]'
    })
], FilterPanelComponent);

let FilterPanelModule = class FilterPanelModule {
};
FilterPanelModule = __decorate([
    NgModule({
        declarations: [FilterPanelComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        exports: [FilterPanelComponent]
    })
], FilterPanelModule);

/**
 * Generated bundle index. Do not edit.
 */

export { FilterPanelComponent, FilterPanelModule, Smart, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-filterpanel.js.map
