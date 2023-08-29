import { FormGroup } from './../index';
import { FormGroupLabelPosition, Control } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { BaseElement } from './smart.element';
export { ControlControlType, ControlLabelPosition, ControlViewMode, FormGroupLabelPosition, Control, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { FormGroup } from './../index';
export declare class FormGroupComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<FormGroup>);
    private eventHandlers;
    nativeElement: FormGroup;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description Sets or gets the form columns. */
    columns: number;
    /** @description Sets the Form control data field. The control's inner input's name is set to the dataField value and in the FormGroup it is accessible through the dataField value. */
    dataField: string;
    /** @description Gets or Sets the Form control's label. */
    label: string;
    /** @description  */
    controls: Control[];
    /** @description Sets or Gets the labels position. */
    onStatusChanges: {
        (value: string): void;
    };
    /** @description Makes the form readonly. */
    onValueChanges: {
        (value: any): void;
    };
    /** @description Shows / hides the colon after the labels. */
    labelPosition: FormGroupLabelPosition | string;
    /** @description Shows / hides validation summary. */
    readonly: boolean;
    /** @description Gets or Sets the Form value. */
    showColonAfterLabel: boolean;
    /** @description undefined */
    showSummary: boolean;
    /** @description undefined */
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
