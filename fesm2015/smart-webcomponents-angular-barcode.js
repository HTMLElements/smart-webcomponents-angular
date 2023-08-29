
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.barcode';

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

let BarcodeComponent = class BarcodeComponent extends BaseElement {
    constructor(ref) {
        super(ref);
        this.eventHandlers = [];
        /** @description This event is triggered when the value of the barcode is invalid.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	invalidCharacters, 	lengthValidity, 	patternValidity, 	value)
        *   invalidCharacters - An array indicating the invalid characters.
        *   lengthValidity - A boolean indicating the length validity.
        *   patternValidity - A boolean indicating the pattern validity.
        *   value - the invalid value of the barcode.
        */
        this.onInvalid = new EventEmitter();
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('smart-barcode');
        for (let propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    }
    /** @description Sets the background color of the barcode element. */
    get backgroundColor() {
        return this.nativeElement ? this.nativeElement.backgroundColor : undefined;
    }
    set backgroundColor(value) {
        this.nativeElement ? this.nativeElement.backgroundColor = value : undefined;
    }
    /** @description Sets whether the barcode label is visible. */
    get displayLabel() {
        return this.nativeElement ? this.nativeElement.displayLabel : undefined;
    }
    set displayLabel(value) {
        this.nativeElement ? this.nativeElement.displayLabel = value : undefined;
    }
    /** @description Sets the color of the barcode label. */
    get labelColor() {
        return this.nativeElement ? this.nativeElement.labelColor : undefined;
    }
    set labelColor(value) {
        this.nativeElement ? this.nativeElement.labelColor = value : undefined;
    }
    /** @description Sets the font family of the barcode label. */
    get labelFont() {
        return this.nativeElement ? this.nativeElement.labelFont : undefined;
    }
    set labelFont(value) {
        this.nativeElement ? this.nativeElement.labelFont = value : undefined;
    }
    /** @description Sets the font size of the barcode label. */
    get labelFontSize() {
        return this.nativeElement ? this.nativeElement.labelFontSize : undefined;
    }
    set labelFontSize(value) {
        this.nativeElement ? this.nativeElement.labelFontSize = value : undefined;
    }
    /** @description Sets the bottom margin of the barcode label. */
    get labelMarginBottom() {
        return this.nativeElement ? this.nativeElement.labelMarginBottom : undefined;
    }
    set labelMarginBottom(value) {
        this.nativeElement ? this.nativeElement.labelMarginBottom = value : undefined;
    }
    /** @description Sets the top margin of the barcode label. */
    get labelMarginTop() {
        return this.nativeElement ? this.nativeElement.labelMarginTop : undefined;
    }
    set labelMarginTop(value) {
        this.nativeElement ? this.nativeElement.labelMarginTop = value : undefined;
    }
    /** @description Sets the position of the barcode label. */
    get labelPosition() {
        return this.nativeElement ? this.nativeElement.labelPosition : undefined;
    }
    set labelPosition(value) {
        this.nativeElement ? this.nativeElement.labelPosition = value : undefined;
    }
    /** @description Sets the color of the barcode lines. */
    get lineColor() {
        return this.nativeElement ? this.nativeElement.lineColor : undefined;
    }
    set lineColor(value) {
        this.nativeElement ? this.nativeElement.lineColor = value : undefined;
    }
    /** @description Sets the height of the barcode line. */
    get lineHeight() {
        return this.nativeElement ? this.nativeElement.lineHeight : undefined;
    }
    set lineHeight(value) {
        this.nativeElement ? this.nativeElement.lineHeight = value : undefined;
    }
    /** @description Sets the width of the barcode line. */
    get lineWidth() {
        return this.nativeElement ? this.nativeElement.lineWidth : undefined;
    }
    set lineWidth(value) {
        this.nativeElement ? this.nativeElement.lineWidth = value : undefined;
    }
    /** @description Sets the rendering mode of the barcode. */
    get renderAs() {
        return this.nativeElement ? this.nativeElement.renderAs : undefined;
    }
    set renderAs(value) {
        this.nativeElement ? this.nativeElement.renderAs = value : undefined;
    }
    /** @description Sets the barcode type */
    get type() {
        return this.nativeElement ? this.nativeElement.type : undefined;
    }
    set type(value) {
        this.nativeElement ? this.nativeElement.type = value : undefined;
    }
    /** @description Sets or gets the value of the barcode. */
    get value() {
        return this.nativeElement ? this.nativeElement.value : undefined;
    }
    set value(value) {
        this.nativeElement ? this.nativeElement.value = value : undefined;
    }
    /** @description Sets or gets the width of the barcode. If the width is set to 0, the width of the barcode is calculated automatically. */
    get width() {
        return this.nativeElement ? this.nativeElement.width : undefined;
    }
    set width(value) {
        this.nativeElement ? this.nativeElement.width = value : undefined;
    }
    /** @description Sets or gets the height of the barcode. If the height is set to 0, the height of the barcode is calculated automatically. */
    get height() {
        return this.nativeElement ? this.nativeElement.height : undefined;
    }
    set height(value) {
        this.nativeElement ? this.nativeElement.height = value : undefined;
    }
    /** @description Exports the barcode.
    * @param {string} format. The format of the exported file - svg, png, jpg
    * @param {string} fileName?. The name of the exported file
    */
    export(format, fileName) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.export(format, fileName);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.export(format, fileName);
            });
        }
    }
    /** @description Gets the base64 string of the barcode
    * @param {string} format. The dataURL format of the string - svg, png, jpg
    * @returns {string}
  */
    getDataURL(format) {
        return __awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getDataURL(format);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Gets the base64 string of the barcode
    * @param {string} format. The dataURL format of the string - svg, png, jpg
    * @returns {any}
  */
    getDataURLAsync(format) {
        return __awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getDataURLAsync(format);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Gets the validity of the barcode
    * @returns {boolean}
  */
    isValid() {
        return __awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.isValid();
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
        that.eventHandlers['invalidHandler'] = (event) => { that.onInvalid.emit(event); };
        that.nativeElement.addEventListener('invalid', that.eventHandlers['invalidHandler']);
    }
    /** @description Remove event listeners. */
    unlisten() {
        const that = this;
        if (that.eventHandlers['invalidHandler']) {
            that.nativeElement.removeEventListener('invalid', that.eventHandlers['invalidHandler']);
        }
    }
};
BarcodeComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], BarcodeComponent.prototype, "backgroundColor", null);
__decorate([
    Input()
], BarcodeComponent.prototype, "displayLabel", null);
__decorate([
    Input()
], BarcodeComponent.prototype, "labelColor", null);
__decorate([
    Input()
], BarcodeComponent.prototype, "labelFont", null);
__decorate([
    Input()
], BarcodeComponent.prototype, "labelFontSize", null);
__decorate([
    Input()
], BarcodeComponent.prototype, "labelMarginBottom", null);
__decorate([
    Input()
], BarcodeComponent.prototype, "labelMarginTop", null);
__decorate([
    Input()
], BarcodeComponent.prototype, "labelPosition", null);
__decorate([
    Input()
], BarcodeComponent.prototype, "lineColor", null);
__decorate([
    Input()
], BarcodeComponent.prototype, "lineHeight", null);
__decorate([
    Input()
], BarcodeComponent.prototype, "lineWidth", null);
__decorate([
    Input()
], BarcodeComponent.prototype, "renderAs", null);
__decorate([
    Input()
], BarcodeComponent.prototype, "type", null);
__decorate([
    Input()
], BarcodeComponent.prototype, "value", null);
__decorate([
    Input()
], BarcodeComponent.prototype, "width", null);
__decorate([
    Input()
], BarcodeComponent.prototype, "height", null);
__decorate([
    Output()
], BarcodeComponent.prototype, "onInvalid", void 0);
BarcodeComponent = __decorate([
    Directive({
        exportAs: 'smart-barcode', selector: 'smart-barcode, [smart-barcode]'
    })
], BarcodeComponent);

let BarcodeModule = class BarcodeModule {
};
BarcodeModule = __decorate([
    NgModule({
        declarations: [BarcodeComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        exports: [BarcodeComponent]
    })
], BarcodeModule);

/**
 * Generated bundle index. Do not edit.
 */

export { BarcodeComponent, BarcodeModule, Smart, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-barcode.js.map
