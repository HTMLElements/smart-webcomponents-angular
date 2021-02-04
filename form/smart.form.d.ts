import { Form } from './../index';
import { FormLabelPosition, Control } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { BaseElement } from './smart.element';
export { ControlControlType, ControlLabelPosition, ControlViewMode, FormLabelPosition, Control, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { Form } from './../index';
export declare class FormComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<Form>);
    private eventHandlers;
    nativeElement: Form;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description Sets or gets the form columns. */
    columns: number;
    /** @description Sets or gets the form controls. */
    controls: Control[];
    /** @description Callback function for handling status changes */
    onStatusChanges: any;
    /** @description Callback function for handling value changes */
    onValueChanges: any;
    /** @description Sets or Gets the labels position. */
    labelPosition: FormLabelPosition;
    /** @description Makes the form readonly. */
    readonly: boolean;
    /** @description Shows / hides the colon after the labels. */
    showColonAfterLabel: boolean;
    /** @description Shows / hides validation summary. */
    showSummary: boolean;
    /** @description Gets the Form's state. Each member in the state has { dirty, untouched, disabled } properties. */
    state: any;
    /** @description Gets or Sets the Form value. */
    value: any;
    /** @description Adds a control to the Form.
    * @param {any} controlOptions. Control options. The control options description is available in the <em>controls</em> property.
    */
    addControl(controlOptions: any): void;
    /** @description Gets a control by its name(dataField).
    * @param {string} dataField. dataField of a FormControl or FormGroup
    * @returns {Control}
  */
    getControl(dataField: any): Promise<any>;
    /** @description Inserts a control to the Form.
    * @param {number} index. Control insert index
    * @param {any} controlOptions. Control options. The control options description is available in the <em>controls</em> property.
    */
    insertControl(index: number, controlOptions: any): void;
    /** @description Remove a control from the Form.
    * @param {any} controlOptions. Control options. The control options description is available in the <em>controls</em> property.
    */
    removeControl(controlOptions: any): void;
    /** @description Submits the form.
    * @param {any} submitOptions?. Sets the submit options object. The object may have the following properties: <em>async</em>, <em>action</em>, <em>target</em>, <em>method</em>. <em>async</em> determines whether the form will be submitted asynchronously. <em>action</em> determines the submit url, <em>method</em> sets whether the submit is through 'GET' or 'POST'. <em>target</em> determines the submit target.
    */
    submit(submitOptions?: any): void;
    /** @description Clears the form.
    */
    reset(): void;
    /** @description Validates the form.
    */
    validate(): void;
    readonly isRendered: boolean;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    /** @description Add event listeners. */
    private listen;
    /** @description Remove event listeners. */
    private unlisten;
}
