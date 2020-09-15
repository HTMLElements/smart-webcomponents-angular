import { FormControl } from './../index';
import { FormControlControlType, FormControlLabelPosition, FormControlViewMode } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { BaseElement } from './smart.element';
export { FormControlControlType, FormControlLabelPosition, FormControlViewMode, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { FormControl } from './../index';
export declare class FormControlComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<FormControl>);
    private eventHandlers;
    nativeElement: FormControl;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description HTML Content displayed after the Form Control */
    appendHTML: any;
    /** @description JSON object with initialization properties of the UI component. Example: { dataSource: ['item 1', 'item 2', 'item 3'] } will set the dataSource property of the Form control. */
    controlOptions: any;
    /** @description The type of the control. */
    controlType: FormControlControlType;
    /** @description Sets the Form Group columns. */
    columns: number;
    /** @description Sets the Form control column span. */
    columnSpan: number;
    /** @description Sets the Form control data field. The control's inner input's name is set to the dataField value and in the FormGroup it is accessible through the dataField value. */
    dataField: boolean;
    /** @description Sets the Form control disabled mode. */
    disabled: boolean;
    /** @description Gets whether the Form control is 'dirty' i.e its value is changed by the user. */
    dirty: boolean;
    /** @description Gets or Sets the Form control's info icon's tooltip. */
    info: string;
    /** @description Gets whether the Form control is invalid. */
    invalid: boolean;
    /** @description Gets or Sets the Form control's label. */
    label: string;
    /** @description Gets or Sets the Form control's label position. */
    labelPosition: FormControlLabelPosition;
    /** @description Gets or Sets the offset between the label and the control. */
    labelOffset: number;
    /** @description FormGroup only(when controlType is set to 'group'). Gets or Sets whether the navigation buttons are displayed. The property has effect when the viewMode property is set. */
    labelAlign: string;
    /** @description FormGroup only(when controlType is set to 'group'). Gets or Sets the next button label. */
    nextButtonLabel: string;
    /** @description FormGroup only(when controlType is set to 'group'). Gets or Sets the back button label. */
    backButtonLabel: string;
    /** @description HTML Content displayed before the Form Control */
    prependHTML: any;
    /** @description Gets or Sets the Form control readonly mode. */
    readonly: boolean;
    /** @description Gets whether the Form control is not touched by the user. This flag is changed usually on blur, after the user interacted with the Form control */
    untouched: boolean;
    /** @description Gets or Sets whether colon is displayed after the label. */
    showColonAfterLabel: boolean;
    /** @description FormGroup only(when controlType is set to 'group'). Gets or Sets whether the navigation buttons are displayed. The property has effect when the viewMode property is set. */
    showButtons: boolean;
    /** @description Sets or Gets the Form control or Form group value. */
    value: any;
    /** @description Gets whether the Form control is valid. */
    valid: boolean;
    /** @description Validation rules array. Accepts any JQX.Validator rules. */
    validationRules: any[];
    /** @description FormGroup only(when controlType is set to 'group'). Gets or Sets the form'group view mode. */
    viewMode: FormControlViewMode;
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
