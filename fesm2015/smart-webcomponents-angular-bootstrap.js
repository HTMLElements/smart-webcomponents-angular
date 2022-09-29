
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.bootstrap';

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

let BootstrapButtonComponent = class BootstrapButtonComponent extends BaseElement {
    constructor(ref) {
        super(ref);
        this.eventHandlers = [];
        /** @description Click event.
        *  @param event. The custom event. 	*/
        this.onClick = new EventEmitter();
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('bootstrap-button');
        for (let propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    }
    /** @description Enables or disables the button.  */
    get disabled() {
        return this.nativeElement ? this.nativeElement.disabled : undefined;
    }
    set disabled(value) {
        this.nativeElement ? this.nativeElement.disabled = value : undefined;
    }
    /** @description Sets the inner HTML of the element. */
    get innerHTML() {
        return this.nativeElement ? this.nativeElement.innerHTML : undefined;
    }
    set innerHTML(value) {
        this.nativeElement ? this.nativeElement.innerHTML = value : undefined;
    }
    /** @description Sets or gets the name attribute for the element. Name is used when submiting HTML forms. */
    get name() {
        return this.nativeElement ? this.nativeElement.name : undefined;
    }
    set name(value) {
        this.nativeElement ? this.nativeElement.name = value : undefined;
    }
    /** @description Outlines the button.  */
    get outlined() {
        return this.nativeElement ? this.nativeElement.outlined : undefined;
    }
    set outlined(value) {
        this.nativeElement ? this.nativeElement.outlined = value : undefined;
    }
    /** @description Sets or gets the style mode of the button. */
    get styleMode() {
        return this.nativeElement ? this.nativeElement.styleMode : undefined;
    }
    set styleMode(value) {
        this.nativeElement ? this.nativeElement.styleMode = value : undefined;
    }
    /** @description Sets or gets the size mode of the element. */
    get sizeMode() {
        return this.nativeElement ? this.nativeElement.sizeMode : undefined;
    }
    set sizeMode(value) {
        this.nativeElement ? this.nativeElement.sizeMode = value : undefined;
    }
    /** @description Sets or gets the type of the button. */
    get type() {
        return this.nativeElement ? this.nativeElement.type : undefined;
    }
    set type(value) {
        this.nativeElement ? this.nativeElement.type = value : undefined;
    }
    /** @description Sets or gets the button's value.  */
    get value() {
        return this.nativeElement ? this.nativeElement.value : undefined;
    }
    set value(value) {
        this.nativeElement ? this.nativeElement.value = value : undefined;
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
        that.eventHandlers['clickHandler'] = (event) => { that.onClick.emit(event); };
        that.nativeElement.addEventListener('click', that.eventHandlers['clickHandler']);
    }
    /** @description Remove event listeners. */
    unlisten() {
        const that = this;
        if (that.eventHandlers['clickHandler']) {
            that.nativeElement.removeEventListener('click', that.eventHandlers['clickHandler']);
        }
    }
};
BootstrapButtonComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], BootstrapButtonComponent.prototype, "disabled", null);
__decorate([
    Input()
], BootstrapButtonComponent.prototype, "innerHTML", null);
__decorate([
    Input()
], BootstrapButtonComponent.prototype, "name", null);
__decorate([
    Input()
], BootstrapButtonComponent.prototype, "outlined", null);
__decorate([
    Input()
], BootstrapButtonComponent.prototype, "styleMode", null);
__decorate([
    Input()
], BootstrapButtonComponent.prototype, "sizeMode", null);
__decorate([
    Input()
], BootstrapButtonComponent.prototype, "type", null);
__decorate([
    Input()
], BootstrapButtonComponent.prototype, "value", null);
__decorate([
    Output()
], BootstrapButtonComponent.prototype, "onClick", void 0);
BootstrapButtonComponent = __decorate([
    Directive({
        exportAs: 'bootstrap-button', selector: 'bootstrap-button, [bootstrap-button]'
    })
], BootstrapButtonComponent);

let BootstrapCheckBoxComponent = class BootstrapCheckBoxComponent extends BaseElement {
    constructor(ref) {
        super(ref);
        this.eventHandlers = [];
        /** @description Change event is triggered when the value of the checkbox is changed.
        *  @param event. The custom event. 	*/
        this.onChange = new EventEmitter();
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('bootstrap-check-box');
        for (let propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    }
    /** @description Gets or sets the checked state of the element.  */
    get checked() {
        return this.nativeElement ? this.nativeElement.checked : undefined;
    }
    set checked(value) {
        this.nativeElement ? this.nativeElement.checked = value : undefined;
    }
    /** @description Enables or disables the element.  */
    get disabled() {
        return this.nativeElement ? this.nativeElement.disabled : undefined;
    }
    set disabled(value) {
        this.nativeElement ? this.nativeElement.disabled = value : undefined;
    }
    /** @description Gets or sets whether the element is in indeterminate state.  */
    get indeterminate() {
        return this.nativeElement ? this.nativeElement.indeterminate : undefined;
    }
    set indeterminate(value) {
        this.nativeElement ? this.nativeElement.indeterminate = value : undefined;
    }
    /** @description Sets the inner HTML of the element. */
    get innerHTML() {
        return this.nativeElement ? this.nativeElement.innerHTML : undefined;
    }
    set innerHTML(value) {
        this.nativeElement ? this.nativeElement.innerHTML = value : undefined;
    }
    /** @description Sets or gets the name attribute for the element. Name is used when submiting HTML forms. */
    get name() {
        return this.nativeElement ? this.nativeElement.name : undefined;
    }
    set name(value) {
        this.nativeElement ? this.nativeElement.name = value : undefined;
    }
    /** @description Gets or sets whether the element is required.  */
    get required() {
        return this.nativeElement ? this.nativeElement.required : undefined;
    }
    set required(value) {
        this.nativeElement ? this.nativeElement.required = value : undefined;
    }
    /** @description Sets or gets the style mode of the element. */
    get styleMode() {
        return this.nativeElement ? this.nativeElement.styleMode : undefined;
    }
    set styleMode(value) {
        this.nativeElement ? this.nativeElement.styleMode = value : undefined;
    }
    /** @description Toggles the checkbox
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
    }
    /** @description Remove event listeners. */
    unlisten() {
        const that = this;
        if (that.eventHandlers['changeHandler']) {
            that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
        }
    }
};
BootstrapCheckBoxComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], BootstrapCheckBoxComponent.prototype, "checked", null);
__decorate([
    Input()
], BootstrapCheckBoxComponent.prototype, "disabled", null);
__decorate([
    Input()
], BootstrapCheckBoxComponent.prototype, "indeterminate", null);
__decorate([
    Input()
], BootstrapCheckBoxComponent.prototype, "innerHTML", null);
__decorate([
    Input()
], BootstrapCheckBoxComponent.prototype, "name", null);
__decorate([
    Input()
], BootstrapCheckBoxComponent.prototype, "required", null);
__decorate([
    Input()
], BootstrapCheckBoxComponent.prototype, "styleMode", null);
__decorate([
    Output()
], BootstrapCheckBoxComponent.prototype, "onChange", void 0);
BootstrapCheckBoxComponent = __decorate([
    Directive({
        exportAs: 'bootstrap-check-box', selector: 'bootstrap-check-box, [bootstrap-check-box]'
    })
], BootstrapCheckBoxComponent);

let BootstrapCircularComponent = class BootstrapCircularComponent extends BaseElement {
    constructor(ref) {
        super(ref);
        this.eventHandlers = [];
        /** @description Change event is triggered when the value of the element is changed.
        *  @param event. The custom event. 	*/
        this.onChange = new EventEmitter();
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('bootstrap-circular');
        for (let propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    }
    /** @description Enables or disables the element.  */
    get disabled() {
        return this.nativeElement ? this.nativeElement.disabled : undefined;
    }
    set disabled(value) {
        this.nativeElement ? this.nativeElement.disabled = value : undefined;
    }
    /** @description Sets the name of the element.  */
    get name() {
        return this.nativeElement ? this.nativeElement.name : undefined;
    }
    set name(value) {
        this.nativeElement ? this.nativeElement.name = value : undefined;
    }
    /** @description Sets or gets the min value */
    get min() {
        return this.nativeElement ? this.nativeElement.min : undefined;
    }
    set min(value) {
        this.nativeElement ? this.nativeElement.min = value : undefined;
    }
    /** @description Sets or gets the max value */
    get max() {
        return this.nativeElement ? this.nativeElement.max : undefined;
    }
    set max(value) {
        this.nativeElement ? this.nativeElement.max = value : undefined;
    }
    /** @description Sets whether stripes are displayed in the progress.  */
    get striped() {
        return this.nativeElement ? this.nativeElement.striped : undefined;
    }
    set striped(value) {
        this.nativeElement ? this.nativeElement.striped = value : undefined;
    }
    /** @description Sets or gets the style mode of the button. */
    get styleMode() {
        return this.nativeElement ? this.nativeElement.styleMode : undefined;
    }
    set styleMode(value) {
        this.nativeElement ? this.nativeElement.styleMode = value : undefined;
    }
    /** @description Sets or gets the value */
    get value() {
        return this.nativeElement ? this.nativeElement.value : undefined;
    }
    set value(value) {
        this.nativeElement ? this.nativeElement.value = value : undefined;
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
    }
    /** @description Remove event listeners. */
    unlisten() {
        const that = this;
        if (that.eventHandlers['changeHandler']) {
            that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
        }
    }
};
BootstrapCircularComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], BootstrapCircularComponent.prototype, "disabled", null);
__decorate([
    Input()
], BootstrapCircularComponent.prototype, "name", null);
__decorate([
    Input()
], BootstrapCircularComponent.prototype, "min", null);
__decorate([
    Input()
], BootstrapCircularComponent.prototype, "max", null);
__decorate([
    Input()
], BootstrapCircularComponent.prototype, "striped", null);
__decorate([
    Input()
], BootstrapCircularComponent.prototype, "styleMode", null);
__decorate([
    Input()
], BootstrapCircularComponent.prototype, "value", null);
__decorate([
    Output()
], BootstrapCircularComponent.prototype, "onChange", void 0);
BootstrapCircularComponent = __decorate([
    Directive({
        exportAs: 'bootstrap-circular', selector: 'bootstrap-circular, [bootstrap-circular]'
    })
], BootstrapCircularComponent);

let BootstrapDropDownComponent = class BootstrapDropDownComponent extends BaseElement {
    constructor(ref) {
        super(ref);
        this.eventHandlers = [];
        /** @description Show event is triggered when the dropdown is going to show.
        *  @param event. The custom event. 	*/
        this.onShow = new EventEmitter();
        /** @description Shown event is triggered when the dropdown is shown.
        *  @param event. The custom event. 	*/
        this.onShown = new EventEmitter();
        /** @description Hide event is triggered when the dropdown is going to be hidden.
        *  @param event. The custom event. 	*/
        this.onHide = new EventEmitter();
        /** @description Hidden event is triggered when the dropdown is hidden
        *  @param event. The custom event. 	*/
        this.onHidden = new EventEmitter();
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('bootstrap-drop-down');
        for (let propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    }
    /** @description Enables or disables the element.  */
    get disabled() {
        return this.nativeElement ? this.nativeElement.disabled : undefined;
    }
    set disabled(value) {
        this.nativeElement ? this.nativeElement.disabled = value : undefined;
    }
    /** @description Sets or gets the drop down position of the element.  */
    get dropDownPosition() {
        return this.nativeElement ? this.nativeElement.dropDownPosition : undefined;
    }
    set dropDownPosition(value) {
        this.nativeElement ? this.nativeElement.dropDownPosition = value : undefined;
    }
    /** @description Sets or gets the Label of the element. */
    get label() {
        return this.nativeElement ? this.nativeElement.label : undefined;
    }
    set label(value) {
        this.nativeElement ? this.nativeElement.label = value : undefined;
    }
    /** @description Sets or gets the Label type of the element. */
    get labelType() {
        return this.nativeElement ? this.nativeElement.labelType : undefined;
    }
    set labelType(value) {
        this.nativeElement ? this.nativeElement.labelType = value : undefined;
    }
    /** @description Sets or gets the Href of the element. */
    get href() {
        return this.nativeElement ? this.nativeElement.href : undefined;
    }
    set href(value) {
        this.nativeElement ? this.nativeElement.href = value : undefined;
    }
    /** @description Sets or gets the name attribute for the element. Name is used when submiting HTML forms. */
    get name() {
        return this.nativeElement ? this.nativeElement.name : undefined;
    }
    set name(value) {
        this.nativeElement ? this.nativeElement.name = value : undefined;
    }
    /** @description Gets or sets whether the dropdown is opened.  */
    get opened() {
        return this.nativeElement ? this.nativeElement.opened : undefined;
    }
    set opened(value) {
        this.nativeElement ? this.nativeElement.opened = value : undefined;
    }
    /** @description Gets or sets whether the dropdown is outlined.  */
    get outlined() {
        return this.nativeElement ? this.nativeElement.outlined : undefined;
    }
    set outlined(value) {
        this.nativeElement ? this.nativeElement.outlined = value : undefined;
    }
    /** @description Sets or gets the style mode of the element. */
    get styleMode() {
        return this.nativeElement ? this.nativeElement.styleMode : undefined;
    }
    set styleMode(value) {
        this.nativeElement ? this.nativeElement.styleMode = value : undefined;
    }
    /** @description Sets or gets the size mode of the element. */
    get sizeMode() {
        return this.nativeElement ? this.nativeElement.sizeMode : undefined;
    }
    set sizeMode(value) {
        this.nativeElement ? this.nativeElement.sizeMode = value : undefined;
    }
    /** @description Toggles the dropdown visibility
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
    /** @description Shows the dropdown
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
    /** @description Hides the dropdown
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
        that.eventHandlers['showHandler'] = (event) => { that.onShow.emit(event); };
        that.nativeElement.addEventListener('show', that.eventHandlers['showHandler']);
        that.eventHandlers['shownHandler'] = (event) => { that.onShown.emit(event); };
        that.nativeElement.addEventListener('shown', that.eventHandlers['shownHandler']);
        that.eventHandlers['hideHandler'] = (event) => { that.onHide.emit(event); };
        that.nativeElement.addEventListener('hide', that.eventHandlers['hideHandler']);
        that.eventHandlers['hiddenHandler'] = (event) => { that.onHidden.emit(event); };
        that.nativeElement.addEventListener('hidden', that.eventHandlers['hiddenHandler']);
    }
    /** @description Remove event listeners. */
    unlisten() {
        const that = this;
        if (that.eventHandlers['showHandler']) {
            that.nativeElement.removeEventListener('show', that.eventHandlers['showHandler']);
        }
        if (that.eventHandlers['shownHandler']) {
            that.nativeElement.removeEventListener('shown', that.eventHandlers['shownHandler']);
        }
        if (that.eventHandlers['hideHandler']) {
            that.nativeElement.removeEventListener('hide', that.eventHandlers['hideHandler']);
        }
        if (that.eventHandlers['hiddenHandler']) {
            that.nativeElement.removeEventListener('hidden', that.eventHandlers['hiddenHandler']);
        }
    }
};
BootstrapDropDownComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], BootstrapDropDownComponent.prototype, "disabled", null);
__decorate([
    Input()
], BootstrapDropDownComponent.prototype, "dropDownPosition", null);
__decorate([
    Input()
], BootstrapDropDownComponent.prototype, "label", null);
__decorate([
    Input()
], BootstrapDropDownComponent.prototype, "labelType", null);
__decorate([
    Input()
], BootstrapDropDownComponent.prototype, "href", null);
__decorate([
    Input()
], BootstrapDropDownComponent.prototype, "name", null);
__decorate([
    Input()
], BootstrapDropDownComponent.prototype, "opened", null);
__decorate([
    Input()
], BootstrapDropDownComponent.prototype, "outlined", null);
__decorate([
    Input()
], BootstrapDropDownComponent.prototype, "styleMode", null);
__decorate([
    Input()
], BootstrapDropDownComponent.prototype, "sizeMode", null);
__decorate([
    Output()
], BootstrapDropDownComponent.prototype, "onShow", void 0);
__decorate([
    Output()
], BootstrapDropDownComponent.prototype, "onShown", void 0);
__decorate([
    Output()
], BootstrapDropDownComponent.prototype, "onHide", void 0);
__decorate([
    Output()
], BootstrapDropDownComponent.prototype, "onHidden", void 0);
BootstrapDropDownComponent = __decorate([
    Directive({
        exportAs: 'bootstrap-drop-down', selector: 'bootstrap-drop-down, [bootstrap-drop-down]'
    })
], BootstrapDropDownComponent);

let BootstrapFileInputComponent = class BootstrapFileInputComponent extends BaseElement {
    constructor(ref) {
        super(ref);
        this.eventHandlers = [];
        /** @description Change event is triggered when the value of the element is changed.
        *  @param event. The custom event. 	*/
        this.onChange = new EventEmitter();
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('bootstrap-file-input');
        for (let propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    }
    /** @description Enables or disables the element.  */
    get disabled() {
        return this.nativeElement ? this.nativeElement.disabled : undefined;
    }
    set disabled(value) {
        this.nativeElement ? this.nativeElement.disabled = value : undefined;
    }
    /** @description Sets or gets the name attribute for the element. Name is used when submiting HTML forms. */
    get name() {
        return this.nativeElement ? this.nativeElement.name : undefined;
    }
    set name(value) {
        this.nativeElement ? this.nativeElement.name = value : undefined;
    }
    /** @description Gets or sets the placeholder of the element.  */
    get placeholder() {
        return this.nativeElement ? this.nativeElement.placeholder : undefined;
    }
    set placeholder(value) {
        this.nativeElement ? this.nativeElement.placeholder = value : undefined;
    }
    /** @description Sets or gets the style mode of the element. */
    get styleMode() {
        return this.nativeElement ? this.nativeElement.styleMode : undefined;
    }
    set styleMode(value) {
        this.nativeElement ? this.nativeElement.styleMode = value : undefined;
    }
    /** @description Gets or sets the value of the element.  */
    get value() {
        return this.nativeElement ? this.nativeElement.value : undefined;
    }
    set value(value) {
        this.nativeElement ? this.nativeElement.value = value : undefined;
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
    }
    /** @description Remove event listeners. */
    unlisten() {
        const that = this;
        if (that.eventHandlers['changeHandler']) {
            that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
        }
    }
};
BootstrapFileInputComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], BootstrapFileInputComponent.prototype, "disabled", null);
__decorate([
    Input()
], BootstrapFileInputComponent.prototype, "name", null);
__decorate([
    Input()
], BootstrapFileInputComponent.prototype, "placeholder", null);
__decorate([
    Input()
], BootstrapFileInputComponent.prototype, "styleMode", null);
__decorate([
    Input()
], BootstrapFileInputComponent.prototype, "value", null);
__decorate([
    Output()
], BootstrapFileInputComponent.prototype, "onChange", void 0);
BootstrapFileInputComponent = __decorate([
    Directive({
        exportAs: 'bootstrap-file-input', selector: 'bootstrap-file-input, [bootstrap-file-input]'
    })
], BootstrapFileInputComponent);

let BootstrapInputComponent = class BootstrapInputComponent extends BaseElement {
    constructor(ref) {
        super(ref);
        this.eventHandlers = [];
        /** @description Change event is triggered when the value of the element is changed.
        *  @param event. The custom event. 	*/
        this.onChange = new EventEmitter();
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('bootstrap-input');
        for (let propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    }
    /** @description Enables or disables the element.  */
    get disabled() {
        return this.nativeElement ? this.nativeElement.disabled : undefined;
    }
    set disabled(value) {
        this.nativeElement ? this.nativeElement.disabled = value : undefined;
    }
    /** @description Gets or sets whether the element is filled.  */
    get filled() {
        return this.nativeElement ? this.nativeElement.filled : undefined;
    }
    set filled(value) {
        this.nativeElement ? this.nativeElement.filled = value : undefined;
    }
    /** @description Sets or gets the name attribute for the element. Name is used when submiting HTML forms. */
    get name() {
        return this.nativeElement ? this.nativeElement.name : undefined;
    }
    set name(value) {
        this.nativeElement ? this.nativeElement.name = value : undefined;
    }
    /** @description Gets or sets whether the element is outlined.  */
    get outlined() {
        return this.nativeElement ? this.nativeElement.outlined : undefined;
    }
    set outlined(value) {
        this.nativeElement ? this.nativeElement.outlined = value : undefined;
    }
    /** @description Gets or sets the placeholder of the element.  */
    get placeholder() {
        return this.nativeElement ? this.nativeElement.placeholder : undefined;
    }
    set placeholder(value) {
        this.nativeElement ? this.nativeElement.placeholder = value : undefined;
    }
    /** @description Gets or sets whether the element is required.  */
    get required() {
        return this.nativeElement ? this.nativeElement.required : undefined;
    }
    set required(value) {
        this.nativeElement ? this.nativeElement.required = value : undefined;
    }
    /** @description Sets or gets the style mode of the element. */
    get styleMode() {
        return this.nativeElement ? this.nativeElement.styleMode : undefined;
    }
    set styleMode(value) {
        this.nativeElement ? this.nativeElement.styleMode = value : undefined;
    }
    /** @description Gets or sets the value of the element.  */
    get value() {
        return this.nativeElement ? this.nativeElement.value : undefined;
    }
    set value(value) {
        this.nativeElement ? this.nativeElement.value = value : undefined;
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
    }
    /** @description Remove event listeners. */
    unlisten() {
        const that = this;
        if (that.eventHandlers['changeHandler']) {
            that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
        }
    }
};
BootstrapInputComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], BootstrapInputComponent.prototype, "disabled", null);
__decorate([
    Input()
], BootstrapInputComponent.prototype, "filled", null);
__decorate([
    Input()
], BootstrapInputComponent.prototype, "name", null);
__decorate([
    Input()
], BootstrapInputComponent.prototype, "outlined", null);
__decorate([
    Input()
], BootstrapInputComponent.prototype, "placeholder", null);
__decorate([
    Input()
], BootstrapInputComponent.prototype, "required", null);
__decorate([
    Input()
], BootstrapInputComponent.prototype, "styleMode", null);
__decorate([
    Input()
], BootstrapInputComponent.prototype, "value", null);
__decorate([
    Output()
], BootstrapInputComponent.prototype, "onChange", void 0);
BootstrapInputComponent = __decorate([
    Directive({
        exportAs: 'bootstrap-input', selector: 'bootstrap-input, [bootstrap-input]'
    })
], BootstrapInputComponent);

let BootstrapInputGroupComponent = class BootstrapInputGroupComponent extends BaseElement {
    constructor(ref) {
        super(ref);
        this.eventHandlers = [];
        /** @description Click event.
        *  @param event. The custom event. 	*/
        this.onClick = new EventEmitter();
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('bootstrap-input-group');
        for (let propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    }
    /** @description Sets the content before the input. */
    get contentBefore() {
        return this.nativeElement ? this.nativeElement.contentBefore : undefined;
    }
    set contentBefore(value) {
        this.nativeElement ? this.nativeElement.contentBefore = value : undefined;
    }
    /** @description Sets the content after the input. */
    get contentAfter() {
        return this.nativeElement ? this.nativeElement.contentAfter : undefined;
    }
    set contentAfter(value) {
        this.nativeElement ? this.nativeElement.contentAfter = value : undefined;
    }
    /** @description Enables or disables the element.  */
    get disabled() {
        return this.nativeElement ? this.nativeElement.disabled : undefined;
    }
    set disabled(value) {
        this.nativeElement ? this.nativeElement.disabled = value : undefined;
    }
    /** @description Sets or gets the name attribute for the element. Name is used when submiting HTML forms. */
    get name() {
        return this.nativeElement ? this.nativeElement.name : undefined;
    }
    set name(value) {
        this.nativeElement ? this.nativeElement.name = value : undefined;
    }
    /** @description Enables or disables the wrapping.  */
    get noWrap() {
        return this.nativeElement ? this.nativeElement.noWrap : undefined;
    }
    set noWrap(value) {
        this.nativeElement ? this.nativeElement.noWrap = value : undefined;
    }
    /** @description Sets or gets the style mode of the input group. */
    get styleMode() {
        return this.nativeElement ? this.nativeElement.styleMode : undefined;
    }
    set styleMode(value) {
        this.nativeElement ? this.nativeElement.styleMode = value : undefined;
    }
    /** @description Sets or gets the size mode of the element. */
    get sizeMode() {
        return this.nativeElement ? this.nativeElement.sizeMode : undefined;
    }
    set sizeMode(value) {
        this.nativeElement ? this.nativeElement.sizeMode = value : undefined;
    }
    /** @description Sets or gets the type of the input. */
    get type() {
        return this.nativeElement ? this.nativeElement.type : undefined;
    }
    set type(value) {
        this.nativeElement ? this.nativeElement.type = value : undefined;
    }
    /** @description Sets the placeholder of the input. */
    get placeholder() {
        return this.nativeElement ? this.nativeElement.placeholder : undefined;
    }
    set placeholder(value) {
        this.nativeElement ? this.nativeElement.placeholder = value : undefined;
    }
    /** @description Sets or gets the button's value.  */
    get value() {
        return this.nativeElement ? this.nativeElement.value : undefined;
    }
    set value(value) {
        this.nativeElement ? this.nativeElement.value = value : undefined;
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
        that.eventHandlers['clickHandler'] = (event) => { that.onClick.emit(event); };
        that.nativeElement.addEventListener('click', that.eventHandlers['clickHandler']);
    }
    /** @description Remove event listeners. */
    unlisten() {
        const that = this;
        if (that.eventHandlers['clickHandler']) {
            that.nativeElement.removeEventListener('click', that.eventHandlers['clickHandler']);
        }
    }
};
BootstrapInputGroupComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], BootstrapInputGroupComponent.prototype, "contentBefore", null);
__decorate([
    Input()
], BootstrapInputGroupComponent.prototype, "contentAfter", null);
__decorate([
    Input()
], BootstrapInputGroupComponent.prototype, "disabled", null);
__decorate([
    Input()
], BootstrapInputGroupComponent.prototype, "name", null);
__decorate([
    Input()
], BootstrapInputGroupComponent.prototype, "noWrap", null);
__decorate([
    Input()
], BootstrapInputGroupComponent.prototype, "styleMode", null);
__decorate([
    Input()
], BootstrapInputGroupComponent.prototype, "sizeMode", null);
__decorate([
    Input()
], BootstrapInputGroupComponent.prototype, "type", null);
__decorate([
    Input()
], BootstrapInputGroupComponent.prototype, "placeholder", null);
__decorate([
    Input()
], BootstrapInputGroupComponent.prototype, "value", null);
__decorate([
    Output()
], BootstrapInputGroupComponent.prototype, "onClick", void 0);
BootstrapInputGroupComponent = __decorate([
    Directive({
        exportAs: 'bootstrap-input-group', selector: 'bootstrap-input-group, [bootstrap-input-group]'
    })
], BootstrapInputGroupComponent);

let BootstrapModalComponent = class BootstrapModalComponent extends BaseElement {
    constructor(ref) {
        super(ref);
        this.eventHandlers = [];
        /** @description Show event is triggered when the modal is going to show.
        *  @param event. The custom event. 	*/
        this.onShow = new EventEmitter();
        /** @description Hide event is triggered when the modal is going to be hidden.
        *  @param event. The custom event. 	*/
        this.onHide = new EventEmitter();
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('bootstrap-modal');
        for (let propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    }
    /** @description Clicking on the modal “backdrop” will automatically close the modal.  */
    get backdrop() {
        return this.nativeElement ? this.nativeElement.backdrop : undefined;
    }
    set backdrop(value) {
        this.nativeElement ? this.nativeElement.backdrop = value : undefined;
    }
    /** @description Sets or gets whether the modal is centered.  */
    get centered() {
        return this.nativeElement ? this.nativeElement.centered : undefined;
    }
    set centered(value) {
        this.nativeElement ? this.nativeElement.centered = value : undefined;
    }
    /** @description Enables or disables the element.  */
    get disabled() {
        return this.nativeElement ? this.nativeElement.disabled : undefined;
    }
    set disabled(value) {
        this.nativeElement ? this.nativeElement.disabled = value : undefined;
    }
    /** @description Gets or sets whether the modal is opened.  */
    get opened() {
        return this.nativeElement ? this.nativeElement.opened : undefined;
    }
    set opened(value) {
        this.nativeElement ? this.nativeElement.opened = value : undefined;
    }
    /** @description Gets or sets whether the modal is scrollable.  */
    get scrollable() {
        return this.nativeElement ? this.nativeElement.scrollable : undefined;
    }
    set scrollable(value) {
        this.nativeElement ? this.nativeElement.scrollable = value : undefined;
    }
    /** @description Sets or gets the style mode of the element. */
    get styleMode() {
        return this.nativeElement ? this.nativeElement.styleMode : undefined;
    }
    set styleMode(value) {
        this.nativeElement ? this.nativeElement.styleMode = value : undefined;
    }
    /** @description Sets or gets the size mode of the element. */
    get sizeMode() {
        return this.nativeElement ? this.nativeElement.sizeMode : undefined;
    }
    set sizeMode(value) {
        this.nativeElement ? this.nativeElement.sizeMode = value : undefined;
    }
    /** @description Toggles the modal visibility
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
    /** @description Shows the modal
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
    /** @description Hides the modal
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
        that.eventHandlers['showHandler'] = (event) => { that.onShow.emit(event); };
        that.nativeElement.addEventListener('show', that.eventHandlers['showHandler']);
        that.eventHandlers['hideHandler'] = (event) => { that.onHide.emit(event); };
        that.nativeElement.addEventListener('hide', that.eventHandlers['hideHandler']);
    }
    /** @description Remove event listeners. */
    unlisten() {
        const that = this;
        if (that.eventHandlers['showHandler']) {
            that.nativeElement.removeEventListener('show', that.eventHandlers['showHandler']);
        }
        if (that.eventHandlers['hideHandler']) {
            that.nativeElement.removeEventListener('hide', that.eventHandlers['hideHandler']);
        }
    }
};
BootstrapModalComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], BootstrapModalComponent.prototype, "backdrop", null);
__decorate([
    Input()
], BootstrapModalComponent.prototype, "centered", null);
__decorate([
    Input()
], BootstrapModalComponent.prototype, "disabled", null);
__decorate([
    Input()
], BootstrapModalComponent.prototype, "opened", null);
__decorate([
    Input()
], BootstrapModalComponent.prototype, "scrollable", null);
__decorate([
    Input()
], BootstrapModalComponent.prototype, "styleMode", null);
__decorate([
    Input()
], BootstrapModalComponent.prototype, "sizeMode", null);
__decorate([
    Output()
], BootstrapModalComponent.prototype, "onShow", void 0);
__decorate([
    Output()
], BootstrapModalComponent.prototype, "onHide", void 0);
BootstrapModalComponent = __decorate([
    Directive({
        exportAs: 'bootstrap-modal', selector: 'bootstrap-modal, [bootstrap-modal]'
    })
], BootstrapModalComponent);

let BootstrapProgressBarComponent = class BootstrapProgressBarComponent extends BaseElement {
    constructor(ref) {
        super(ref);
        this.eventHandlers = [];
        /** @description Change event is triggered when the value of the element is changed.
        *  @param event. The custom event. 	*/
        this.onChange = new EventEmitter();
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('bootstrap-progress-bar');
        for (let propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    }
    /** @description Enables or disables the element.  */
    get disabled() {
        return this.nativeElement ? this.nativeElement.disabled : undefined;
    }
    set disabled(value) {
        this.nativeElement ? this.nativeElement.disabled = value : undefined;
    }
    /** @description Sets the name of the element.  */
    get name() {
        return this.nativeElement ? this.nativeElement.name : undefined;
    }
    set name(value) {
        this.nativeElement ? this.nativeElement.name = value : undefined;
    }
    /** @description Sets or gets the min value */
    get min() {
        return this.nativeElement ? this.nativeElement.min : undefined;
    }
    set min(value) {
        this.nativeElement ? this.nativeElement.min = value : undefined;
    }
    /** @description Sets or gets the max value */
    get max() {
        return this.nativeElement ? this.nativeElement.max : undefined;
    }
    set max(value) {
        this.nativeElement ? this.nativeElement.max = value : undefined;
    }
    /** @description Sets whether stripes are displayed in the progress.  */
    get striped() {
        return this.nativeElement ? this.nativeElement.striped : undefined;
    }
    set striped(value) {
        this.nativeElement ? this.nativeElement.striped = value : undefined;
    }
    /** @description Sets or gets the style mode of the button. */
    get styleMode() {
        return this.nativeElement ? this.nativeElement.styleMode : undefined;
    }
    set styleMode(value) {
        this.nativeElement ? this.nativeElement.styleMode = value : undefined;
    }
    /** @description Sets or gets the value */
    get value() {
        return this.nativeElement ? this.nativeElement.value : undefined;
    }
    set value(value) {
        this.nativeElement ? this.nativeElement.value = value : undefined;
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
    }
    /** @description Remove event listeners. */
    unlisten() {
        const that = this;
        if (that.eventHandlers['changeHandler']) {
            that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
        }
    }
};
BootstrapProgressBarComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], BootstrapProgressBarComponent.prototype, "disabled", null);
__decorate([
    Input()
], BootstrapProgressBarComponent.prototype, "name", null);
__decorate([
    Input()
], BootstrapProgressBarComponent.prototype, "min", null);
__decorate([
    Input()
], BootstrapProgressBarComponent.prototype, "max", null);
__decorate([
    Input()
], BootstrapProgressBarComponent.prototype, "striped", null);
__decorate([
    Input()
], BootstrapProgressBarComponent.prototype, "styleMode", null);
__decorate([
    Input()
], BootstrapProgressBarComponent.prototype, "value", null);
__decorate([
    Output()
], BootstrapProgressBarComponent.prototype, "onChange", void 0);
BootstrapProgressBarComponent = __decorate([
    Directive({
        exportAs: 'bootstrap-progress-bar', selector: 'bootstrap-progress-bar, [bootstrap-progress-bar]'
    })
], BootstrapProgressBarComponent);

let BootstrapRadioButtonComponent = class BootstrapRadioButtonComponent extends BaseElement {
    constructor(ref) {
        super(ref);
        this.eventHandlers = [];
        /** @description Change event is triggered when the value of the element is changed.
        *  @param event. The custom event. 	*/
        this.onChange = new EventEmitter();
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('bootstrap-radio-button');
        for (let propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    }
    /** @description Gets or sets the checked state of the element.  */
    get checked() {
        return this.nativeElement ? this.nativeElement.checked : undefined;
    }
    set checked(value) {
        this.nativeElement ? this.nativeElement.checked = value : undefined;
    }
    /** @description Enables or disables the element.  */
    get disabled() {
        return this.nativeElement ? this.nativeElement.disabled : undefined;
    }
    set disabled(value) {
        this.nativeElement ? this.nativeElement.disabled = value : undefined;
    }
    /** @description Gets or sets whether the element is in indeterminate state.  */
    get indeterminate() {
        return this.nativeElement ? this.nativeElement.indeterminate : undefined;
    }
    set indeterminate(value) {
        this.nativeElement ? this.nativeElement.indeterminate = value : undefined;
    }
    /** @description Sets the inner HTML of the element. */
    get innerHTML() {
        return this.nativeElement ? this.nativeElement.innerHTML : undefined;
    }
    set innerHTML(value) {
        this.nativeElement ? this.nativeElement.innerHTML = value : undefined;
    }
    /** @description Sets or gets the name attribute for the element. Name is used when submiting HTML forms. */
    get name() {
        return this.nativeElement ? this.nativeElement.name : undefined;
    }
    set name(value) {
        this.nativeElement ? this.nativeElement.name = value : undefined;
    }
    /** @description Sets or gets the style mode of the element. */
    get styleMode() {
        return this.nativeElement ? this.nativeElement.styleMode : undefined;
    }
    set styleMode(value) {
        this.nativeElement ? this.nativeElement.styleMode = value : undefined;
    }
    /** @description Toggles the element
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
    }
    /** @description Remove event listeners. */
    unlisten() {
        const that = this;
        if (that.eventHandlers['changeHandler']) {
            that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
        }
    }
};
BootstrapRadioButtonComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], BootstrapRadioButtonComponent.prototype, "checked", null);
__decorate([
    Input()
], BootstrapRadioButtonComponent.prototype, "disabled", null);
__decorate([
    Input()
], BootstrapRadioButtonComponent.prototype, "indeterminate", null);
__decorate([
    Input()
], BootstrapRadioButtonComponent.prototype, "innerHTML", null);
__decorate([
    Input()
], BootstrapRadioButtonComponent.prototype, "name", null);
__decorate([
    Input()
], BootstrapRadioButtonComponent.prototype, "styleMode", null);
__decorate([
    Output()
], BootstrapRadioButtonComponent.prototype, "onChange", void 0);
BootstrapRadioButtonComponent = __decorate([
    Directive({
        exportAs: 'bootstrap-radio-button', selector: 'bootstrap-radio-button, [bootstrap-radio-button]'
    })
], BootstrapRadioButtonComponent);

let BootstrapRangeComponent = class BootstrapRangeComponent extends BaseElement {
    constructor(ref) {
        super(ref);
        this.eventHandlers = [];
        /** @description Change event is triggered when the value of the element is changed.
        *  @param event. The custom event. 	*/
        this.onChange = new EventEmitter();
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('bootstrap-range');
        for (let propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    }
    /** @description Enables or disables the element.  */
    get disabled() {
        return this.nativeElement ? this.nativeElement.disabled : undefined;
    }
    set disabled(value) {
        this.nativeElement ? this.nativeElement.disabled = value : undefined;
    }
    /** @description Sets the name of the element.  */
    get name() {
        return this.nativeElement ? this.nativeElement.name : undefined;
    }
    set name(value) {
        this.nativeElement ? this.nativeElement.name = value : undefined;
    }
    /** @description Sets or gets the min value */
    get min() {
        return this.nativeElement ? this.nativeElement.min : undefined;
    }
    set min(value) {
        this.nativeElement ? this.nativeElement.min = value : undefined;
    }
    /** @description Sets or gets the max value */
    get max() {
        return this.nativeElement ? this.nativeElement.max : undefined;
    }
    set max(value) {
        this.nativeElement ? this.nativeElement.max = value : undefined;
    }
    /** @description Sets or gets the value */
    get value() {
        return this.nativeElement ? this.nativeElement.value : undefined;
    }
    set value(value) {
        this.nativeElement ? this.nativeElement.value = value : undefined;
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
    }
    /** @description Remove event listeners. */
    unlisten() {
        const that = this;
        if (that.eventHandlers['changeHandler']) {
            that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
        }
    }
};
BootstrapRangeComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], BootstrapRangeComponent.prototype, "disabled", null);
__decorate([
    Input()
], BootstrapRangeComponent.prototype, "name", null);
__decorate([
    Input()
], BootstrapRangeComponent.prototype, "min", null);
__decorate([
    Input()
], BootstrapRangeComponent.prototype, "max", null);
__decorate([
    Input()
], BootstrapRangeComponent.prototype, "value", null);
__decorate([
    Output()
], BootstrapRangeComponent.prototype, "onChange", void 0);
BootstrapRangeComponent = __decorate([
    Directive({
        exportAs: 'bootstrap-range', selector: 'bootstrap-range, [bootstrap-range]'
    })
], BootstrapRangeComponent);

let BootstrapSplitButtonComponent = class BootstrapSplitButtonComponent extends BaseElement {
    constructor(ref) {
        super(ref);
        this.eventHandlers = [];
        /** @description Show event is triggered when the dropdown is going to show.
        *  @param event. The custom event. 	*/
        this.onShow = new EventEmitter();
        /** @description Shown event is triggered when the dropdown is shown.
        *  @param event. The custom event. 	*/
        this.onShown = new EventEmitter();
        /** @description Hide event is triggered when the dropdown is going to be hidden.
        *  @param event. The custom event. 	*/
        this.onHide = new EventEmitter();
        /** @description Hidden event is triggered when the dropdown is hidden
        *  @param event. The custom event. 	*/
        this.onHidden = new EventEmitter();
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('bootstrap-split-button');
        for (let propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    }
    /** @description Enables or disables the element.  */
    get disabled() {
        return this.nativeElement ? this.nativeElement.disabled : undefined;
    }
    set disabled(value) {
        this.nativeElement ? this.nativeElement.disabled = value : undefined;
    }
    /** @description Sets or gets the drop down position of the element.  */
    get dropDownPosition() {
        return this.nativeElement ? this.nativeElement.dropDownPosition : undefined;
    }
    set dropDownPosition(value) {
        this.nativeElement ? this.nativeElement.dropDownPosition = value : undefined;
    }
    /** @description Sets or gets the Label of the element. */
    get label() {
        return this.nativeElement ? this.nativeElement.label : undefined;
    }
    set label(value) {
        this.nativeElement ? this.nativeElement.label = value : undefined;
    }
    /** @description Sets or gets the Label type of the element. */
    get labelType() {
        return this.nativeElement ? this.nativeElement.labelType : undefined;
    }
    set labelType(value) {
        this.nativeElement ? this.nativeElement.labelType = value : undefined;
    }
    /** @description Sets or gets the Href of the element. */
    get href() {
        return this.nativeElement ? this.nativeElement.href : undefined;
    }
    set href(value) {
        this.nativeElement ? this.nativeElement.href = value : undefined;
    }
    /** @description Sets or gets the name attribute for the element. Name is used when submiting HTML forms. */
    get name() {
        return this.nativeElement ? this.nativeElement.name : undefined;
    }
    set name(value) {
        this.nativeElement ? this.nativeElement.name = value : undefined;
    }
    /** @description Gets or sets whether the dropdown is opened.  */
    get opened() {
        return this.nativeElement ? this.nativeElement.opened : undefined;
    }
    set opened(value) {
        this.nativeElement ? this.nativeElement.opened = value : undefined;
    }
    /** @description Gets or sets whether the dropdown is outlined.  */
    get outlined() {
        return this.nativeElement ? this.nativeElement.outlined : undefined;
    }
    set outlined(value) {
        this.nativeElement ? this.nativeElement.outlined = value : undefined;
    }
    /** @description Sets or gets the style mode of the element. */
    get styleMode() {
        return this.nativeElement ? this.nativeElement.styleMode : undefined;
    }
    set styleMode(value) {
        this.nativeElement ? this.nativeElement.styleMode = value : undefined;
    }
    /** @description Sets or gets the size mode of the element. */
    get sizeMode() {
        return this.nativeElement ? this.nativeElement.sizeMode : undefined;
    }
    set sizeMode(value) {
        this.nativeElement ? this.nativeElement.sizeMode = value : undefined;
    }
    /** @description Toggles the dropdown visibility
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
    /** @description Shows the dropdown
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
    /** @description Hides the dropdown
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
        that.eventHandlers['showHandler'] = (event) => { that.onShow.emit(event); };
        that.nativeElement.addEventListener('show', that.eventHandlers['showHandler']);
        that.eventHandlers['shownHandler'] = (event) => { that.onShown.emit(event); };
        that.nativeElement.addEventListener('shown', that.eventHandlers['shownHandler']);
        that.eventHandlers['hideHandler'] = (event) => { that.onHide.emit(event); };
        that.nativeElement.addEventListener('hide', that.eventHandlers['hideHandler']);
        that.eventHandlers['hiddenHandler'] = (event) => { that.onHidden.emit(event); };
        that.nativeElement.addEventListener('hidden', that.eventHandlers['hiddenHandler']);
    }
    /** @description Remove event listeners. */
    unlisten() {
        const that = this;
        if (that.eventHandlers['showHandler']) {
            that.nativeElement.removeEventListener('show', that.eventHandlers['showHandler']);
        }
        if (that.eventHandlers['shownHandler']) {
            that.nativeElement.removeEventListener('shown', that.eventHandlers['shownHandler']);
        }
        if (that.eventHandlers['hideHandler']) {
            that.nativeElement.removeEventListener('hide', that.eventHandlers['hideHandler']);
        }
        if (that.eventHandlers['hiddenHandler']) {
            that.nativeElement.removeEventListener('hidden', that.eventHandlers['hiddenHandler']);
        }
    }
};
BootstrapSplitButtonComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], BootstrapSplitButtonComponent.prototype, "disabled", null);
__decorate([
    Input()
], BootstrapSplitButtonComponent.prototype, "dropDownPosition", null);
__decorate([
    Input()
], BootstrapSplitButtonComponent.prototype, "label", null);
__decorate([
    Input()
], BootstrapSplitButtonComponent.prototype, "labelType", null);
__decorate([
    Input()
], BootstrapSplitButtonComponent.prototype, "href", null);
__decorate([
    Input()
], BootstrapSplitButtonComponent.prototype, "name", null);
__decorate([
    Input()
], BootstrapSplitButtonComponent.prototype, "opened", null);
__decorate([
    Input()
], BootstrapSplitButtonComponent.prototype, "outlined", null);
__decorate([
    Input()
], BootstrapSplitButtonComponent.prototype, "styleMode", null);
__decorate([
    Input()
], BootstrapSplitButtonComponent.prototype, "sizeMode", null);
__decorate([
    Output()
], BootstrapSplitButtonComponent.prototype, "onShow", void 0);
__decorate([
    Output()
], BootstrapSplitButtonComponent.prototype, "onShown", void 0);
__decorate([
    Output()
], BootstrapSplitButtonComponent.prototype, "onHide", void 0);
__decorate([
    Output()
], BootstrapSplitButtonComponent.prototype, "onHidden", void 0);
BootstrapSplitButtonComponent = __decorate([
    Directive({
        exportAs: 'bootstrap-split-button', selector: 'bootstrap-split-button, [bootstrap-split-button]'
    })
], BootstrapSplitButtonComponent);

let BootstrapSwitchButtonComponent = class BootstrapSwitchButtonComponent extends BaseElement {
    constructor(ref) {
        super(ref);
        this.eventHandlers = [];
        /** @description Change event is triggered when the value of the element is changed.
        *  @param event. The custom event. 	*/
        this.onChange = new EventEmitter();
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('bootstrap-switch-button');
        for (let propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    }
    /** @description Gets or sets the checked state of the element.  */
    get checked() {
        return this.nativeElement ? this.nativeElement.checked : undefined;
    }
    set checked(value) {
        this.nativeElement ? this.nativeElement.checked = value : undefined;
    }
    /** @description Enables or disables the element.  */
    get disabled() {
        return this.nativeElement ? this.nativeElement.disabled : undefined;
    }
    set disabled(value) {
        this.nativeElement ? this.nativeElement.disabled = value : undefined;
    }
    /** @description Gets or sets whether the element is in indeterminate state.  */
    get indeterminate() {
        return this.nativeElement ? this.nativeElement.indeterminate : undefined;
    }
    set indeterminate(value) {
        this.nativeElement ? this.nativeElement.indeterminate = value : undefined;
    }
    /** @description Sets the inner HTML of the element. */
    get innerHTML() {
        return this.nativeElement ? this.nativeElement.innerHTML : undefined;
    }
    set innerHTML(value) {
        this.nativeElement ? this.nativeElement.innerHTML = value : undefined;
    }
    /** @description Sets or gets the name attribute for the element. Name is used when submiting HTML forms. */
    get name() {
        return this.nativeElement ? this.nativeElement.name : undefined;
    }
    set name(value) {
        this.nativeElement ? this.nativeElement.name = value : undefined;
    }
    /** @description Gets or sets whether the element is required.  */
    get required() {
        return this.nativeElement ? this.nativeElement.required : undefined;
    }
    set required(value) {
        this.nativeElement ? this.nativeElement.required = value : undefined;
    }
    /** @description Sets or gets the style mode of the element. */
    get styleMode() {
        return this.nativeElement ? this.nativeElement.styleMode : undefined;
    }
    set styleMode(value) {
        this.nativeElement ? this.nativeElement.styleMode = value : undefined;
    }
    /** @description Toggles the element
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
    }
    /** @description Remove event listeners. */
    unlisten() {
        const that = this;
        if (that.eventHandlers['changeHandler']) {
            that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
        }
    }
};
BootstrapSwitchButtonComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], BootstrapSwitchButtonComponent.prototype, "checked", null);
__decorate([
    Input()
], BootstrapSwitchButtonComponent.prototype, "disabled", null);
__decorate([
    Input()
], BootstrapSwitchButtonComponent.prototype, "indeterminate", null);
__decorate([
    Input()
], BootstrapSwitchButtonComponent.prototype, "innerHTML", null);
__decorate([
    Input()
], BootstrapSwitchButtonComponent.prototype, "name", null);
__decorate([
    Input()
], BootstrapSwitchButtonComponent.prototype, "required", null);
__decorate([
    Input()
], BootstrapSwitchButtonComponent.prototype, "styleMode", null);
__decorate([
    Output()
], BootstrapSwitchButtonComponent.prototype, "onChange", void 0);
BootstrapSwitchButtonComponent = __decorate([
    Directive({
        exportAs: 'bootstrap-switch-button', selector: 'bootstrap-switch-button, [bootstrap-switch-button]'
    })
], BootstrapSwitchButtonComponent);

let BootstrapTabsComponent = class BootstrapTabsComponent extends BaseElement {
    constructor(ref) {
        super(ref);
        this.eventHandlers = [];
        /** @description Show event.
        *  @param event. The custom event. 	*/
        this.onShow = new EventEmitter();
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('bootstrap-tabs');
        for (let propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    }
    /** @description Sets the tabs alignment */
    get alignment() {
        return this.nativeElement ? this.nativeElement.alignment : undefined;
    }
    set alignment(value) {
        this.nativeElement ? this.nativeElement.alignment = value : undefined;
    }
    /** @description Enables or disables the tabs.  */
    get disabled() {
        return this.nativeElement ? this.nativeElement.disabled : undefined;
    }
    set disabled(value) {
        this.nativeElement ? this.nativeElement.disabled = value : undefined;
    }
    /** @description Sets the tabs fill */
    get fill() {
        return this.nativeElement ? this.nativeElement.fill : undefined;
    }
    set fill(value) {
        this.nativeElement ? this.nativeElement.fill = value : undefined;
    }
    /** @description Sets the tabs justified */
    get justified() {
        return this.nativeElement ? this.nativeElement.justified : undefined;
    }
    set justified(value) {
        this.nativeElement ? this.nativeElement.justified = value : undefined;
    }
    /** @description Sets or gets the tab type. */
    get listType() {
        return this.nativeElement ? this.nativeElement.listType : undefined;
    }
    set listType(value) {
        this.nativeElement ? this.nativeElement.listType = value : undefined;
    }
    /** @description Sets or gets the style mode of the tabs. */
    get styleMode() {
        return this.nativeElement ? this.nativeElement.styleMode : undefined;
    }
    set styleMode(value) {
        this.nativeElement ? this.nativeElement.styleMode = value : undefined;
    }
    /** @description Sets or gets the size mode of the element. */
    get sizeMode() {
        return this.nativeElement ? this.nativeElement.sizeMode : undefined;
    }
    set sizeMode(value) {
        this.nativeElement ? this.nativeElement.sizeMode = value : undefined;
    }
    /** @description Sets or gets the tab type . */
    get tabType() {
        return this.nativeElement ? this.nativeElement.tabType : undefined;
    }
    set tabType(value) {
        this.nativeElement ? this.nativeElement.tabType = value : undefined;
    }
    /** @description Shows an item
    * @param {HTMLElement} item. The tab item to be shown.
    */
    show(item) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.show(item);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.show(item);
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
        that.eventHandlers['showHandler'] = (event) => { that.onShow.emit(event); };
        that.nativeElement.addEventListener('show', that.eventHandlers['showHandler']);
    }
    /** @description Remove event listeners. */
    unlisten() {
        const that = this;
        if (that.eventHandlers['showHandler']) {
            that.nativeElement.removeEventListener('show', that.eventHandlers['showHandler']);
        }
    }
};
BootstrapTabsComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], BootstrapTabsComponent.prototype, "alignment", null);
__decorate([
    Input()
], BootstrapTabsComponent.prototype, "disabled", null);
__decorate([
    Input()
], BootstrapTabsComponent.prototype, "fill", null);
__decorate([
    Input()
], BootstrapTabsComponent.prototype, "justified", null);
__decorate([
    Input()
], BootstrapTabsComponent.prototype, "listType", null);
__decorate([
    Input()
], BootstrapTabsComponent.prototype, "styleMode", null);
__decorate([
    Input()
], BootstrapTabsComponent.prototype, "sizeMode", null);
__decorate([
    Input()
], BootstrapTabsComponent.prototype, "tabType", null);
__decorate([
    Output()
], BootstrapTabsComponent.prototype, "onShow", void 0);
BootstrapTabsComponent = __decorate([
    Directive({
        exportAs: 'bootstrap-tabs', selector: 'bootstrap-tabs, [bootstrap-tabs]'
    })
], BootstrapTabsComponent);

let BootstrapTextareaComponent = class BootstrapTextareaComponent extends BaseElement {
    constructor(ref) {
        super(ref);
        this.eventHandlers = [];
        /** @description Change event is triggered when the value of the element is changed.
        *  @param event. The custom event. 	*/
        this.onChange = new EventEmitter();
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('bootstrap-textarea');
        for (let propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    }
    /** @description Enables or disables the element.  */
    get disabled() {
        return this.nativeElement ? this.nativeElement.disabled : undefined;
    }
    set disabled(value) {
        this.nativeElement ? this.nativeElement.disabled = value : undefined;
    }
    /** @description Gets or sets whether the element is filled.  */
    get filled() {
        return this.nativeElement ? this.nativeElement.filled : undefined;
    }
    set filled(value) {
        this.nativeElement ? this.nativeElement.filled = value : undefined;
    }
    /** @description Sets or gets the name attribute for the element. Name is used when submiting HTML forms. */
    get name() {
        return this.nativeElement ? this.nativeElement.name : undefined;
    }
    set name(value) {
        this.nativeElement ? this.nativeElement.name = value : undefined;
    }
    /** @description Gets or sets whether the element is outlined.  */
    get outlined() {
        return this.nativeElement ? this.nativeElement.outlined : undefined;
    }
    set outlined(value) {
        this.nativeElement ? this.nativeElement.outlined = value : undefined;
    }
    /** @description Gets or sets the placeholder of the element.  */
    get placeholder() {
        return this.nativeElement ? this.nativeElement.placeholder : undefined;
    }
    set placeholder(value) {
        this.nativeElement ? this.nativeElement.placeholder = value : undefined;
    }
    /** @description Gets or sets whether the element is required.  */
    get required() {
        return this.nativeElement ? this.nativeElement.required : undefined;
    }
    set required(value) {
        this.nativeElement ? this.nativeElement.required = value : undefined;
    }
    /** @description Sets or gets the style mode of the element. */
    get styleMode() {
        return this.nativeElement ? this.nativeElement.styleMode : undefined;
    }
    set styleMode(value) {
        this.nativeElement ? this.nativeElement.styleMode = value : undefined;
    }
    /** @description Gets or sets the value of the element.  */
    get value() {
        return this.nativeElement ? this.nativeElement.value : undefined;
    }
    set value(value) {
        this.nativeElement ? this.nativeElement.value = value : undefined;
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
    }
    /** @description Remove event listeners. */
    unlisten() {
        const that = this;
        if (that.eventHandlers['changeHandler']) {
            that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
        }
    }
};
BootstrapTextareaComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], BootstrapTextareaComponent.prototype, "disabled", null);
__decorate([
    Input()
], BootstrapTextareaComponent.prototype, "filled", null);
__decorate([
    Input()
], BootstrapTextareaComponent.prototype, "name", null);
__decorate([
    Input()
], BootstrapTextareaComponent.prototype, "outlined", null);
__decorate([
    Input()
], BootstrapTextareaComponent.prototype, "placeholder", null);
__decorate([
    Input()
], BootstrapTextareaComponent.prototype, "required", null);
__decorate([
    Input()
], BootstrapTextareaComponent.prototype, "styleMode", null);
__decorate([
    Input()
], BootstrapTextareaComponent.prototype, "value", null);
__decorate([
    Output()
], BootstrapTextareaComponent.prototype, "onChange", void 0);
BootstrapTextareaComponent = __decorate([
    Directive({
        exportAs: 'bootstrap-textarea', selector: 'bootstrap-textarea, [bootstrap-textarea]'
    })
], BootstrapTextareaComponent);

let BootstrapToggleButtonComponent = class BootstrapToggleButtonComponent extends BaseElement {
    constructor(ref) {
        super(ref);
        this.eventHandlers = [];
        /** @description Change event is triggered when the value of the element is changed.
        *  @param event. The custom event. 	*/
        this.onChange = new EventEmitter();
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('bootstrap-toggle-button');
        for (let propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    }
    /** @description Gets or sets the checked state of the element.  */
    get checked() {
        return this.nativeElement ? this.nativeElement.checked : undefined;
    }
    set checked(value) {
        this.nativeElement ? this.nativeElement.checked = value : undefined;
    }
    /** @description Enables or disables the element.  */
    get disabled() {
        return this.nativeElement ? this.nativeElement.disabled : undefined;
    }
    set disabled(value) {
        this.nativeElement ? this.nativeElement.disabled = value : undefined;
    }
    /** @description Gets or sets whether the element is in indeterminate state.  */
    get indeterminate() {
        return this.nativeElement ? this.nativeElement.indeterminate : undefined;
    }
    set indeterminate(value) {
        this.nativeElement ? this.nativeElement.indeterminate = value : undefined;
    }
    /** @description Sets the inner HTML of the element. */
    get innerHTML() {
        return this.nativeElement ? this.nativeElement.innerHTML : undefined;
    }
    set innerHTML(value) {
        this.nativeElement ? this.nativeElement.innerHTML = value : undefined;
    }
    /** @description Sets or gets the name attribute for the element. Name is used when submiting HTML forms. */
    get name() {
        return this.nativeElement ? this.nativeElement.name : undefined;
    }
    set name(value) {
        this.nativeElement ? this.nativeElement.name = value : undefined;
    }
    /** @description Sets or gets the style mode of the element. */
    get styleMode() {
        return this.nativeElement ? this.nativeElement.styleMode : undefined;
    }
    set styleMode(value) {
        this.nativeElement ? this.nativeElement.styleMode = value : undefined;
    }
    /** @description Toggles the element
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
    }
    /** @description Remove event listeners. */
    unlisten() {
        const that = this;
        if (that.eventHandlers['changeHandler']) {
            that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
        }
    }
};
BootstrapToggleButtonComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], BootstrapToggleButtonComponent.prototype, "checked", null);
__decorate([
    Input()
], BootstrapToggleButtonComponent.prototype, "disabled", null);
__decorate([
    Input()
], BootstrapToggleButtonComponent.prototype, "indeterminate", null);
__decorate([
    Input()
], BootstrapToggleButtonComponent.prototype, "innerHTML", null);
__decorate([
    Input()
], BootstrapToggleButtonComponent.prototype, "name", null);
__decorate([
    Input()
], BootstrapToggleButtonComponent.prototype, "styleMode", null);
__decorate([
    Output()
], BootstrapToggleButtonComponent.prototype, "onChange", void 0);
BootstrapToggleButtonComponent = __decorate([
    Directive({
        exportAs: 'bootstrap-toggle-button', selector: 'bootstrap-toggle-button, [bootstrap-toggle-button]'
    })
], BootstrapToggleButtonComponent);

let BootstrapModule = class BootstrapModule {
};
BootstrapModule = __decorate([
    NgModule({
        declarations: [BootstrapButtonComponent, BootstrapCheckBoxComponent, BootstrapCircularComponent, BootstrapDropDownComponent, BootstrapFileInputComponent, BootstrapInputComponent, BootstrapInputGroupComponent, BootstrapModalComponent, BootstrapProgressBarComponent, BootstrapRadioButtonComponent, BootstrapRangeComponent, BootstrapSplitButtonComponent, BootstrapSwitchButtonComponent, BootstrapTabsComponent, BootstrapTextareaComponent, BootstrapToggleButtonComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        exports: [BootstrapButtonComponent, BootstrapCheckBoxComponent, BootstrapCircularComponent, BootstrapDropDownComponent, BootstrapFileInputComponent, BootstrapInputComponent, BootstrapInputGroupComponent, BootstrapModalComponent, BootstrapProgressBarComponent, BootstrapRadioButtonComponent, BootstrapRangeComponent, BootstrapSplitButtonComponent, BootstrapSwitchButtonComponent, BootstrapTabsComponent, BootstrapTextareaComponent, BootstrapToggleButtonComponent]
    })
], BootstrapModule);

/**
 * Generated bundle index. Do not edit.
 */

export { BootstrapButtonComponent, BootstrapCheckBoxComponent, BootstrapCircularComponent, BootstrapDropDownComponent, BootstrapFileInputComponent, BootstrapInputComponent, BootstrapInputGroupComponent, BootstrapModalComponent, BootstrapModule, BootstrapProgressBarComponent, BootstrapRadioButtonComponent, BootstrapRangeComponent, BootstrapSplitButtonComponent, BootstrapSwitchButtonComponent, BootstrapTabsComponent, BootstrapTextareaComponent, BootstrapToggleButtonComponent, Smart, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-bootstrap.js.map
