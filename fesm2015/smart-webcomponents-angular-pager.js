
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.pager';

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

let PagerComponent = class PagerComponent extends BaseElement {
    constructor(ref) {
        super(ref);
        this.eventHandlers = [];
        /** @description This event is triggered when user selects a new item.
        *  @param event. The custom event. 	*/
        this.onChange = new EventEmitter();
        /** @description This event is triggered when page size is changed.
        *  @param event. The custom event. 	*/
        this.onPageSizeChanged = new EventEmitter();
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('smart-pager');
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
    /** @description Handles pager's elipsis. Ellipsis buttons are displayed as indicators and additional help to navigate between pages. */
    get autoEllipsis() {
        return this.nativeElement ? this.nativeElement.autoEllipsis : undefined;
    }
    set autoEllipsis(value) {
        this.nativeElement ? this.nativeElement.autoEllipsis = value : undefined;
    }
    /** @description Enables or disables the pager. */
    get disabled() {
        return this.nativeElement ? this.nativeElement.disabled : undefined;
    }
    set disabled(value) {
        this.nativeElement ? this.nativeElement.disabled = value : undefined;
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
    /** @description Handles the position of the navigation buttons. */
    get navigationButtonsPosition() {
        return this.nativeElement ? this.nativeElement.navigationButtonsPosition : undefined;
    }
    set navigationButtonsPosition(value) {
        this.nativeElement ? this.nativeElement.navigationButtonsPosition = value : undefined;
    }
    /** @description Gets/sets current page index. */
    get pageIndex() {
        return this.nativeElement ? this.nativeElement.pageIndex : undefined;
    }
    set pageIndex(value) {
        this.nativeElement ? this.nativeElement.pageIndex = value : undefined;
    }
    /** @description Defines the number of page index selectors. */
    get pageIndexSelectors() {
        return this.nativeElement ? this.nativeElement.pageIndexSelectors : undefined;
    }
    set pageIndexSelectors(value) {
        this.nativeElement ? this.nativeElement.pageIndexSelectors = value : undefined;
    }
    /** @description Gets/sets total number of items displayed on page. */
    get pageSize() {
        return this.nativeElement ? this.nativeElement.pageSize : undefined;
    }
    set pageSize(value) {
        this.nativeElement ? this.nativeElement.pageSize = value : undefined;
    }
    /** @description Defines the data source of the element's page size selector drop down. */
    get pageSizeSelectorDataSource() {
        return this.nativeElement ? this.nativeElement.pageSizeSelectorDataSource : undefined;
    }
    set pageSizeSelectorDataSource(value) {
        this.nativeElement ? this.nativeElement.pageSizeSelectorDataSource = value : undefined;
    }
    /** @description The number of pages in the element. */
    get pagesCount() {
        return this.nativeElement ? this.nativeElement.pagesCount : undefined;
    }
    set pagesCount(value) {
        this.nativeElement ? this.nativeElement.pagesCount = value : undefined;
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
    /** @description Controlls displaying of the 'first' and 'last' navigation buttons. */
    get showFirstLastNavigationButtons() {
        return this.nativeElement ? this.nativeElement.showFirstLastNavigationButtons : undefined;
    }
    set showFirstLastNavigationButtons(value) {
        this.nativeElement ? this.nativeElement.showFirstLastNavigationButtons = value : undefined;
    }
    /** @description Displays text content in navigation buttons instead default icons. */
    get showNavigationButtonLabels() {
        return this.nativeElement ? this.nativeElement.showNavigationButtonLabels : undefined;
    }
    set showNavigationButtonLabels(value) {
        this.nativeElement ? this.nativeElement.showNavigationButtonLabels = value : undefined;
    }
    /** @description Determines whether the navigation input is displayed. */
    get showNavigationInput() {
        return this.nativeElement ? this.nativeElement.showNavigationInput : undefined;
    }
    set showNavigationInput(value) {
        this.nativeElement ? this.nativeElement.showNavigationInput = value : undefined;
    }
    /** @description Determines whether the page index selectors are displayed. */
    get showPageIndexSelectors() {
        return this.nativeElement ? this.nativeElement.showPageIndexSelectors : undefined;
    }
    set showPageIndexSelectors(value) {
        this.nativeElement ? this.nativeElement.showPageIndexSelectors = value : undefined;
    }
    /** @description Determines whether the page size selector is displayed. */
    get showPageSizeSelector() {
        return this.nativeElement ? this.nativeElement.showPageSizeSelector : undefined;
    }
    set showPageSizeSelector(value) {
        this.nativeElement ? this.nativeElement.showPageSizeSelector = value : undefined;
    }
    /** @description Controlls displaying of the 'previous' and 'next' navigation buttons. */
    get showPrevNextNavigationButtons() {
        return this.nativeElement ? this.nativeElement.showPrevNextNavigationButtons : undefined;
    }
    set showPrevNextNavigationButtons(value) {
        this.nativeElement ? this.nativeElement.showPrevNextNavigationButtons = value : undefined;
    }
    /** @description Determines whether the page summary is displayed. */
    get showSummary() {
        return this.nativeElement ? this.nativeElement.showSummary : undefined;
    }
    set showSummary(value) {
        this.nativeElement ? this.nativeElement.showSummary = value : undefined;
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
    /** @description Gets/sets total number of records whose pagination the Pager controls. Useful when the Pager is part of a more complex element or application. */
    get totalRecords() {
        return this.nativeElement ? this.nativeElement.totalRecords : undefined;
    }
    set totalRecords(value) {
        this.nativeElement ? this.nativeElement.totalRecords = value : undefined;
    }
    /** @description Selects first item.
    */
    first() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.first();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.first();
            });
        }
    }
    /** @description Selects last item.
    */
    last() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.last();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.last();
            });
        }
    }
    /** @description Navigates to particular item.
    * @param {any} pageIndex.
    */
    navigateTo(pageIndex) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.navigateTo(pageIndex);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.navigateTo(pageIndex);
            });
        }
    }
    /** @description Selects next pager item.
    */
    next() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.next();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.next();
            });
        }
    }
    /** @description Selects previous pager item.
    */
    prev() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.prev();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.prev();
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
        that.eventHandlers['changeHandler'] = (event) => { that.onChange.emit(event); };
        that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
        that.eventHandlers['pageSizeChangedHandler'] = (event) => { that.onPageSizeChanged.emit(event); };
        that.nativeElement.addEventListener('pageSizeChanged', that.eventHandlers['pageSizeChangedHandler']);
    }
    /** @description Remove event listeners. */
    unlisten() {
        const that = this;
        if (that.eventHandlers['changeHandler']) {
            that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
        }
        if (that.eventHandlers['pageSizeChangedHandler']) {
            that.nativeElement.removeEventListener('pageSizeChanged', that.eventHandlers['pageSizeChangedHandler']);
        }
    }
};
PagerComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], PagerComponent.prototype, "animation", null);
__decorate([
    Input()
], PagerComponent.prototype, "autoEllipsis", null);
__decorate([
    Input()
], PagerComponent.prototype, "disabled", null);
__decorate([
    Input()
], PagerComponent.prototype, "locale", null);
__decorate([
    Input()
], PagerComponent.prototype, "localizeFormatFunction", null);
__decorate([
    Input()
], PagerComponent.prototype, "messages", null);
__decorate([
    Input()
], PagerComponent.prototype, "navigationButtonsPosition", null);
__decorate([
    Input()
], PagerComponent.prototype, "pageIndex", null);
__decorate([
    Input()
], PagerComponent.prototype, "pageIndexSelectors", null);
__decorate([
    Input()
], PagerComponent.prototype, "pageSize", null);
__decorate([
    Input()
], PagerComponent.prototype, "pageSizeSelectorDataSource", null);
__decorate([
    Input()
], PagerComponent.prototype, "pagesCount", null);
__decorate([
    Input()
], PagerComponent.prototype, "readonly", null);
__decorate([
    Input()
], PagerComponent.prototype, "rightToLeft", null);
__decorate([
    Input()
], PagerComponent.prototype, "showFirstLastNavigationButtons", null);
__decorate([
    Input()
], PagerComponent.prototype, "showNavigationButtonLabels", null);
__decorate([
    Input()
], PagerComponent.prototype, "showNavigationInput", null);
__decorate([
    Input()
], PagerComponent.prototype, "showPageIndexSelectors", null);
__decorate([
    Input()
], PagerComponent.prototype, "showPageSizeSelector", null);
__decorate([
    Input()
], PagerComponent.prototype, "showPrevNextNavigationButtons", null);
__decorate([
    Input()
], PagerComponent.prototype, "showSummary", null);
__decorate([
    Input()
], PagerComponent.prototype, "theme", null);
__decorate([
    Input()
], PagerComponent.prototype, "unfocusable", null);
__decorate([
    Input()
], PagerComponent.prototype, "totalRecords", null);
__decorate([
    Output()
], PagerComponent.prototype, "onChange", void 0);
__decorate([
    Output()
], PagerComponent.prototype, "onPageSizeChanged", void 0);
PagerComponent = __decorate([
    Directive({
        exportAs: 'smart-pager', selector: 'smart-pager, [smart-pager]'
    })
], PagerComponent);

let PagerModule = class PagerModule {
};
PagerModule = __decorate([
    NgModule({
        declarations: [PagerComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        exports: [PagerComponent]
    })
], PagerModule);

/**
 * Generated bundle index. Do not edit.
 */

export { PagerComponent, PagerModule, Smart, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-pager.js.map
