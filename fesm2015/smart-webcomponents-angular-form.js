
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.form';

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

let FormComponent = class FormComponent extends BaseElement {
    constructor(ref) {
        super(ref);
        this.eventHandlers = [];
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('smart-form');
        for (let propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    }
    /** @description Sets or gets the form columns. */
    get columns() {
        return this.nativeElement ? this.nativeElement.columns : undefined;
    }
    set columns(value) {
        this.nativeElement ? this.nativeElement.columns = value : undefined;
    }
    /** @description Sets or gets the form controls. */
    get controls() {
        return this.nativeElement ? this.nativeElement.controls : undefined;
    }
    set controls(value) {
        this.nativeElement ? this.nativeElement.controls = value : undefined;
    }
    /** @description Sets or Gets the labels position. */
    get onStatusChanges() {
        return this.nativeElement ? this.nativeElement.onStatusChanges : undefined;
    }
    set onStatusChanges(value) {
        this.nativeElement ? this.nativeElement.onStatusChanges = value : undefined;
    }
    /** @description Makes the form readonly. */
    get onValueChanges() {
        return this.nativeElement ? this.nativeElement.onValueChanges : undefined;
    }
    set onValueChanges(value) {
        this.nativeElement ? this.nativeElement.onValueChanges = value : undefined;
    }
    /** @description Shows / hides the colon after the labels. */
    get labelPosition() {
        return this.nativeElement ? this.nativeElement.labelPosition : undefined;
    }
    set labelPosition(value) {
        this.nativeElement ? this.nativeElement.labelPosition = value : undefined;
    }
    /** @description Shows / hides validation summary. */
    get readonly() {
        return this.nativeElement ? this.nativeElement.readonly : undefined;
    }
    set readonly(value) {
        this.nativeElement ? this.nativeElement.readonly = value : undefined;
    }
    /** @description Gets the Form's state. Each member in the state has { dirty, untouched, disabled } properties. */
    get showColonAfterLabel() {
        return this.nativeElement ? this.nativeElement.showColonAfterLabel : undefined;
    }
    set showColonAfterLabel(value) {
        this.nativeElement ? this.nativeElement.showColonAfterLabel = value : undefined;
    }
    /** @description Gets or Sets the Form value. */
    get showSummary() {
        return this.nativeElement ? this.nativeElement.showSummary : undefined;
    }
    set showSummary(value) {
        this.nativeElement ? this.nativeElement.showSummary = value : undefined;
    }
    /** @description Automatically validates the form when it is created. */
    get state() {
        return this.nativeElement ? this.nativeElement.state : undefined;
    }
    set state(value) {
        this.nativeElement ? this.nativeElement.state = value : undefined;
    }
    /** @description undefined */
    get value() {
        return this.nativeElement ? this.nativeElement.value : undefined;
    }
    set value(value) {
        this.nativeElement ? this.nativeElement.value = value : undefined;
    }
    /** @description undefined */
    get validateOnLoad() {
        return this.nativeElement ? this.nativeElement.validateOnLoad : undefined;
    }
    set validateOnLoad(value) {
        this.nativeElement ? this.nativeElement.validateOnLoad = value : undefined;
    }
    /** @description Adds a control to the Form.
    * @param {any} controlOptions. Control options. The control options description is available in the <em>controls</em> property.
    */
    addControl(controlOptions) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addControl(controlOptions);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addControl(controlOptions);
            });
        }
    }
    /** @description Gets a control by its name(dataField).
    * @param {string} dataField. dataField of a FormControl or FormGroup
    * @returns {Control}
  */
    getControl(dataField) {
        return __awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getControl(dataField);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Inserts a control to the Form.
    * @param {number} index. Control insert index
    * @param {any} controlOptions. Control options. The control options description is available in the <em>controls</em> property.
    */
    insertControl(index, controlOptions) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertControl(index, controlOptions);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insertControl(index, controlOptions);
            });
        }
    }
    /** @description Remove a control from the Form.
    * @param {any} controlOptions. Control options. The control options description is available in the <em>controls</em> property.
    */
    removeControl(controlOptions) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeControl(controlOptions);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeControl(controlOptions);
            });
        }
    }
    /** @description Submits the form.
    * @param {any} submitOptions?. Sets the submit options object. The object may have the following properties: <em>async</em>, <em>action</em>, <em>target</em>, <em>method</em>. <em>async</em> determines whether the form will be submitted asynchronously. <em>action</em> determines the submit url, <em>method</em> sets whether the submit is through 'GET' or 'POST'. <em>target</em> determines the submit target.
    */
    submit(submitOptions) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.submit(submitOptions);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.submit(submitOptions);
            });
        }
    }
    /** @description Clears the form.
    */
    reset() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.reset();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.reset();
            });
        }
    }
    /** @description Validates the form.
    */
    validate() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.validate();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.validate();
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
    }
    /** @description Remove event listeners. */
    unlisten() {
        const that = this;
    }
};
FormComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], FormComponent.prototype, "columns", null);
__decorate([
    Input()
], FormComponent.prototype, "controls", null);
__decorate([
    Input()
], FormComponent.prototype, "onStatusChanges", null);
__decorate([
    Input()
], FormComponent.prototype, "onValueChanges", null);
__decorate([
    Input()
], FormComponent.prototype, "labelPosition", null);
__decorate([
    Input()
], FormComponent.prototype, "readonly", null);
__decorate([
    Input()
], FormComponent.prototype, "showColonAfterLabel", null);
__decorate([
    Input()
], FormComponent.prototype, "showSummary", null);
__decorate([
    Input()
], FormComponent.prototype, "state", null);
__decorate([
    Input()
], FormComponent.prototype, "value", null);
__decorate([
    Input()
], FormComponent.prototype, "validateOnLoad", null);
FormComponent = __decorate([
    Directive({
        exportAs: 'smart-form', selector: 'smart-form, [smart-form]'
    })
], FormComponent);

let FormControlComponent = class FormControlComponent extends BaseElement {
    constructor(ref) {
        super(ref);
        this.eventHandlers = [];
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('smart-form-control');
        for (let propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    }
    /** @description Gets or Sets the FormControl Action. This property is used when the 'controlType' is 'button' or 'submit' */
    get action() {
        return this.nativeElement ? this.nativeElement.action : undefined;
    }
    set action(value) {
        this.nativeElement ? this.nativeElement.action = value : undefined;
    }
    /** @description Sets or Gets the alignment of the FormControl */
    get align() {
        return this.nativeElement ? this.nativeElement.align : undefined;
    }
    set align(value) {
        this.nativeElement ? this.nativeElement.align = value : undefined;
    }
    /** @description HTML Content displayed after the Form Control */
    get appendHTML() {
        return this.nativeElement ? this.nativeElement.appendHTML : undefined;
    }
    set appendHTML(value) {
        this.nativeElement ? this.nativeElement.appendHTML = value : undefined;
    }
    /** @description JSON object with initialization properties of the UI component. Example: { dataSource: ['item 1', 'item 2', 'item 3'] } will set the dataSource property of the Form control. */
    get controlOptions() {
        return this.nativeElement ? this.nativeElement.controlOptions : undefined;
    }
    set controlOptions(value) {
        this.nativeElement ? this.nativeElement.controlOptions = value : undefined;
    }
    /** @description The type of the control. */
    get controlType() {
        return this.nativeElement ? this.nativeElement.controlType : undefined;
    }
    set controlType(value) {
        this.nativeElement ? this.nativeElement.controlType = value : undefined;
    }
    /** @description Sets the Form Group columns. */
    get columns() {
        return this.nativeElement ? this.nativeElement.columns : undefined;
    }
    set columns(value) {
        this.nativeElement ? this.nativeElement.columns = value : undefined;
    }
    /** @description Sets the Form control column span. */
    get columnSpan() {
        return this.nativeElement ? this.nativeElement.columnSpan : undefined;
    }
    set columnSpan(value) {
        this.nativeElement ? this.nativeElement.columnSpan = value : undefined;
    }
    /** @description Sets the Form control data field. The control's inner input's name is set to the dataField value and in the FormGroup it is accessible through the dataField value. */
    get dataField() {
        return this.nativeElement ? this.nativeElement.dataField : undefined;
    }
    set dataField(value) {
        this.nativeElement ? this.nativeElement.dataField = value : undefined;
    }
    /** @description Sets the Form control disabled mode. */
    get disabled() {
        return this.nativeElement ? this.nativeElement.disabled : undefined;
    }
    set disabled(value) {
        this.nativeElement ? this.nativeElement.disabled = value : undefined;
    }
    /** @description Gets whether the Form control is 'dirty' i.e its value is changed by the user. */
    get dirty() {
        return this.nativeElement ? this.nativeElement.dirty : undefined;
    }
    set dirty(value) {
        this.nativeElement ? this.nativeElement.dirty = value : undefined;
    }
    /** @description Gets or Sets the Form control's info icon's tooltip. */
    get info() {
        return this.nativeElement ? this.nativeElement.info : undefined;
    }
    set info(value) {
        this.nativeElement ? this.nativeElement.info = value : undefined;
    }
    /** @description Gets whether the Form control is invalid. */
    get invalid() {
        return this.nativeElement ? this.nativeElement.invalid : undefined;
    }
    set invalid(value) {
        this.nativeElement ? this.nativeElement.invalid = value : undefined;
    }
    /** @description Gets or Sets the Form control's label. */
    get label() {
        return this.nativeElement ? this.nativeElement.label : undefined;
    }
    set label(value) {
        this.nativeElement ? this.nativeElement.label = value : undefined;
    }
    /** @description Gets or Sets the Form control's label position. */
    get labelPosition() {
        return this.nativeElement ? this.nativeElement.labelPosition : undefined;
    }
    set labelPosition(value) {
        this.nativeElement ? this.nativeElement.labelPosition = value : undefined;
    }
    /** @description Gets or Sets the offset between the label and the control. */
    get labelOffset() {
        return this.nativeElement ? this.nativeElement.labelOffset : undefined;
    }
    set labelOffset(value) {
        this.nativeElement ? this.nativeElement.labelOffset = value : undefined;
    }
    /** @description FormGroup only(when controlType is set to 'group'). Gets or Sets whether the navigation buttons are displayed. The property has effect when the viewMode property is set. */
    get labelAlign() {
        return this.nativeElement ? this.nativeElement.labelAlign : undefined;
    }
    set labelAlign(value) {
        this.nativeElement ? this.nativeElement.labelAlign = value : undefined;
    }
    /** @description FormGroup only(when controlType is set to 'group'). Gets or Sets the next button label. */
    get nextButtonLabel() {
        return this.nativeElement ? this.nativeElement.nextButtonLabel : undefined;
    }
    set nextButtonLabel(value) {
        this.nativeElement ? this.nativeElement.nextButtonLabel = value : undefined;
    }
    /** @description FormGroup only(when controlType is set to 'group'). Gets or Sets the back button label. */
    get backButtonLabel() {
        return this.nativeElement ? this.nativeElement.backButtonLabel : undefined;
    }
    set backButtonLabel(value) {
        this.nativeElement ? this.nativeElement.backButtonLabel = value : undefined;
    }
    /** @description Gets or Sets the FormControl placeholder. */
    get placeholder() {
        return this.nativeElement ? this.nativeElement.placeholder : undefined;
    }
    set placeholder(value) {
        this.nativeElement ? this.nativeElement.placeholder = value : undefined;
    }
    /** @description HTML Content displayed before the Form Control */
    get prependHTML() {
        return this.nativeElement ? this.nativeElement.prependHTML : undefined;
    }
    set prependHTML(value) {
        this.nativeElement ? this.nativeElement.prependHTML = value : undefined;
    }
    /** @description Gets or Sets the Form control readonly mode. */
    get readonly() {
        return this.nativeElement ? this.nativeElement.readonly : undefined;
    }
    set readonly(value) {
        this.nativeElement ? this.nativeElement.readonly = value : undefined;
    }
    /** @description Gets or Sets whether this field is required. */
    get required() {
        return this.nativeElement ? this.nativeElement.required : undefined;
    }
    set required(value) {
        this.nativeElement ? this.nativeElement.required = value : undefined;
    }
    /** @description Gets whether the Form control is not touched by the user. This flag is changed usually on blur, after the user interacted with the Form control */
    get untouched() {
        return this.nativeElement ? this.nativeElement.untouched : undefined;
    }
    set untouched(value) {
        this.nativeElement ? this.nativeElement.untouched = value : undefined;
    }
    /** @description Gets or Sets whether colon is displayed after the label. */
    get showColonAfterLabel() {
        return this.nativeElement ? this.nativeElement.showColonAfterLabel : undefined;
    }
    set showColonAfterLabel(value) {
        this.nativeElement ? this.nativeElement.showColonAfterLabel = value : undefined;
    }
    /** @description FormGroup only(when controlType is set to 'group'). Gets or Sets whether the navigation buttons are displayed. The property has effect when the viewMode property is set. */
    get showButtons() {
        return this.nativeElement ? this.nativeElement.showButtons : undefined;
    }
    set showButtons(value) {
        this.nativeElement ? this.nativeElement.showButtons = value : undefined;
    }
    /** @description Sets or Gets the Form control or Form group value. */
    get value() {
        return this.nativeElement ? this.nativeElement.value : undefined;
    }
    set value(value) {
        this.nativeElement ? this.nativeElement.value = value : undefined;
    }
    /** @description Gets whether the Form control is valid. */
    get valid() {
        return this.nativeElement ? this.nativeElement.valid : undefined;
    }
    set valid(value) {
        this.nativeElement ? this.nativeElement.valid = value : undefined;
    }
    /** @description Sets or gets the column's validation rules. The expected value is an Array of Objects. Each object should have a 'type' property that can be set to 'required', 'min', 'max', 'minLength', 'maxLength', 'email', 'null', 'requiredTrue', 'minData', 'maxDate', 'pattern'. The 'value' property should be set, too. For validation rule types 'required', 'requiredTrue' and 'null' you can skip the 'value' property. Optional property is 'message', which determines the error message. */
    get validationRules() {
        return this.nativeElement ? this.nativeElement.validationRules : undefined;
    }
    set validationRules(value) {
        this.nativeElement ? this.nativeElement.validationRules = value : undefined;
    }
    /** @description FormGroup only(when controlType is set to 'group'). Gets or Sets the form'group view mode. */
    get viewMode() {
        return this.nativeElement ? this.nativeElement.viewMode : undefined;
    }
    set viewMode(value) {
        this.nativeElement ? this.nativeElement.viewMode = value : undefined;
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
    }
    /** @description Remove event listeners. */
    unlisten() {
        const that = this;
    }
};
FormControlComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], FormControlComponent.prototype, "action", null);
__decorate([
    Input()
], FormControlComponent.prototype, "align", null);
__decorate([
    Input()
], FormControlComponent.prototype, "appendHTML", null);
__decorate([
    Input()
], FormControlComponent.prototype, "controlOptions", null);
__decorate([
    Input()
], FormControlComponent.prototype, "controlType", null);
__decorate([
    Input()
], FormControlComponent.prototype, "columns", null);
__decorate([
    Input()
], FormControlComponent.prototype, "columnSpan", null);
__decorate([
    Input()
], FormControlComponent.prototype, "dataField", null);
__decorate([
    Input()
], FormControlComponent.prototype, "disabled", null);
__decorate([
    Input()
], FormControlComponent.prototype, "dirty", null);
__decorate([
    Input()
], FormControlComponent.prototype, "info", null);
__decorate([
    Input()
], FormControlComponent.prototype, "invalid", null);
__decorate([
    Input()
], FormControlComponent.prototype, "label", null);
__decorate([
    Input()
], FormControlComponent.prototype, "labelPosition", null);
__decorate([
    Input()
], FormControlComponent.prototype, "labelOffset", null);
__decorate([
    Input()
], FormControlComponent.prototype, "labelAlign", null);
__decorate([
    Input()
], FormControlComponent.prototype, "nextButtonLabel", null);
__decorate([
    Input()
], FormControlComponent.prototype, "backButtonLabel", null);
__decorate([
    Input()
], FormControlComponent.prototype, "placeholder", null);
__decorate([
    Input()
], FormControlComponent.prototype, "prependHTML", null);
__decorate([
    Input()
], FormControlComponent.prototype, "readonly", null);
__decorate([
    Input()
], FormControlComponent.prototype, "required", null);
__decorate([
    Input()
], FormControlComponent.prototype, "untouched", null);
__decorate([
    Input()
], FormControlComponent.prototype, "showColonAfterLabel", null);
__decorate([
    Input()
], FormControlComponent.prototype, "showButtons", null);
__decorate([
    Input()
], FormControlComponent.prototype, "value", null);
__decorate([
    Input()
], FormControlComponent.prototype, "valid", null);
__decorate([
    Input()
], FormControlComponent.prototype, "validationRules", null);
__decorate([
    Input()
], FormControlComponent.prototype, "viewMode", null);
FormControlComponent = __decorate([
    Directive({
        exportAs: 'smart-form-control', selector: 'smart-form-control, [smart-form-control]'
    })
], FormControlComponent);

let FormGroupComponent = class FormGroupComponent extends BaseElement {
    constructor(ref) {
        super(ref);
        this.eventHandlers = [];
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('smart-form-group');
        for (let propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    }
    /** @description Sets or gets the form columns. */
    get columns() {
        return this.nativeElement ? this.nativeElement.columns : undefined;
    }
    set columns(value) {
        this.nativeElement ? this.nativeElement.columns = value : undefined;
    }
    /** @description Sets the Form control data field. The control's inner input's name is set to the dataField value and in the FormGroup it is accessible through the dataField value. */
    get dataField() {
        return this.nativeElement ? this.nativeElement.dataField : undefined;
    }
    set dataField(value) {
        this.nativeElement ? this.nativeElement.dataField = value : undefined;
    }
    /** @description Gets or Sets the Form control's label. */
    get label() {
        return this.nativeElement ? this.nativeElement.label : undefined;
    }
    set label(value) {
        this.nativeElement ? this.nativeElement.label = value : undefined;
    }
    /** @description  */
    get controls() {
        return this.nativeElement ? this.nativeElement.controls : undefined;
    }
    set controls(value) {
        this.nativeElement ? this.nativeElement.controls = value : undefined;
    }
    /** @description Sets or Gets the labels position. */
    get onStatusChanges() {
        return this.nativeElement ? this.nativeElement.onStatusChanges : undefined;
    }
    set onStatusChanges(value) {
        this.nativeElement ? this.nativeElement.onStatusChanges = value : undefined;
    }
    /** @description Makes the form readonly. */
    get onValueChanges() {
        return this.nativeElement ? this.nativeElement.onValueChanges : undefined;
    }
    set onValueChanges(value) {
        this.nativeElement ? this.nativeElement.onValueChanges = value : undefined;
    }
    /** @description Shows / hides the colon after the labels. */
    get labelPosition() {
        return this.nativeElement ? this.nativeElement.labelPosition : undefined;
    }
    set labelPosition(value) {
        this.nativeElement ? this.nativeElement.labelPosition = value : undefined;
    }
    /** @description Shows / hides validation summary. */
    get readonly() {
        return this.nativeElement ? this.nativeElement.readonly : undefined;
    }
    set readonly(value) {
        this.nativeElement ? this.nativeElement.readonly = value : undefined;
    }
    /** @description Gets or Sets the Form value. */
    get showColonAfterLabel() {
        return this.nativeElement ? this.nativeElement.showColonAfterLabel : undefined;
    }
    set showColonAfterLabel(value) {
        this.nativeElement ? this.nativeElement.showColonAfterLabel = value : undefined;
    }
    /** @description undefined */
    get showSummary() {
        return this.nativeElement ? this.nativeElement.showSummary : undefined;
    }
    set showSummary(value) {
        this.nativeElement ? this.nativeElement.showSummary = value : undefined;
    }
    /** @description undefined */
    get value() {
        return this.nativeElement ? this.nativeElement.value : undefined;
    }
    set value(value) {
        this.nativeElement ? this.nativeElement.value = value : undefined;
    }
    /** @description Adds a control to the Form.
    * @param {any} controlOptions. Control options. The control options description is available in the <em>controls</em> property.
    */
    addControl(controlOptions) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addControl(controlOptions);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addControl(controlOptions);
            });
        }
    }
    /** @description Gets a control by its name(dataField).
    * @param {string} dataField. dataField of a FormControl or FormGroup
    * @returns {Control}
  */
    getControl(dataField) {
        return __awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getControl(dataField);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Inserts a control to the Form.
    * @param {number} index. Control insert index
    * @param {any} controlOptions. Control options. The control options description is available in the <em>controls</em> property.
    */
    insertControl(index, controlOptions) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertControl(index, controlOptions);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insertControl(index, controlOptions);
            });
        }
    }
    /** @description Remove a control from the Form.
    * @param {any} controlOptions. Control options. The control options description is available in the <em>controls</em> property.
    */
    removeControl(controlOptions) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeControl(controlOptions);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeControl(controlOptions);
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
    }
    /** @description Remove event listeners. */
    unlisten() {
        const that = this;
    }
};
FormGroupComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], FormGroupComponent.prototype, "columns", null);
__decorate([
    Input()
], FormGroupComponent.prototype, "dataField", null);
__decorate([
    Input()
], FormGroupComponent.prototype, "label", null);
__decorate([
    Input()
], FormGroupComponent.prototype, "controls", null);
__decorate([
    Input()
], FormGroupComponent.prototype, "onStatusChanges", null);
__decorate([
    Input()
], FormGroupComponent.prototype, "onValueChanges", null);
__decorate([
    Input()
], FormGroupComponent.prototype, "labelPosition", null);
__decorate([
    Input()
], FormGroupComponent.prototype, "readonly", null);
__decorate([
    Input()
], FormGroupComponent.prototype, "showColonAfterLabel", null);
__decorate([
    Input()
], FormGroupComponent.prototype, "showSummary", null);
__decorate([
    Input()
], FormGroupComponent.prototype, "value", null);
FormGroupComponent = __decorate([
    Directive({
        exportAs: 'smart-form-group', selector: 'smart-form-group, [smart-form-group]'
    })
], FormGroupComponent);

let FormModule = class FormModule {
};
FormModule = __decorate([
    NgModule({
        declarations: [FormComponent, FormControlComponent, FormGroupComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        exports: [FormComponent, FormControlComponent, FormGroupComponent]
    })
], FormModule);

/**
 * Generated bundle index. Do not edit.
 */

export { FormComponent, FormControlComponent, FormGroupComponent, FormModule, Smart, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-form.js.map
