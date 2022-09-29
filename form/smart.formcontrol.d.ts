import { FormControl } from './../index';
import { FormControlAction, FormControlAlign, FormControlControlType, FormControlLabelPosition, FormControlViewMode } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { BaseElement } from './smart.element';
export { FormControlAction, FormControlAlign, FormControlControlType, FormControlLabelPosition, FormControlViewMode, ElementRenderMode } from './../index';
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
    /** @description Gets or Sets the FormControl Action. This property is used when the 'controlType' is 'button' or 'submit' */
    action: FormControlAction | string;
    /** @description Sets or Gets the alignment of the FormControl */
    align: FormControlAlign | string;
    /** @description HTML Content displayed after the Form Control */
    appendHTML: any;
    /** @description JSON object with initialization properties of the UI component. Example: { dataSource: ['item 1', 'item 2', 'item 3'] } will set the dataSource property of the Form control. */
    controlOptions: any;
    /** @description The type of the control. */
    controlType: FormControlControlType | string;
    /** @description Sets the Form Group columns. */
    columns: number;
    /** @description Sets the Form control column span. */
    columnSpan: number;
    /** @description Sets the Form control data field. The control's inner input's name is set to the dataField value and in the FormGroup it is accessible through the dataField value. */
    dataField: string;
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
    labelPosition: FormControlLabelPosition | string;
    /** @description Gets or Sets the offset between the label and the control. */
    labelOffset: number;
    /** @description FormGroup only(when controlType is set to 'group'). Gets or Sets whether the navigation buttons are displayed. The property has effect when the viewMode property is set. */
    labelAlign: FormControlAlign | string;
    /** @description FormGroup only(when controlType is set to 'group'). Gets or Sets the next button label. */
    nextButtonLabel: string;
    /** @description FormGroup only(when controlType is set to 'group'). Gets or Sets the back button label. */
    backButtonLabel: string;
    /** @description Gets or Sets the FormControl placeholder. */
    placeholder: string;
    /** @description HTML Content displayed before the Form Control */
    prependHTML: any;
    /** @description Gets or Sets the Form control readonly mode. */
    readonly: boolean;
    /** @description Gets or Sets whether this field is required. */
    required: boolean;
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
    /** @description Sets or gets the column's validation rules. The expected value is an Array of Objects. Each object should have a 'type' property that can be set to 'required', 'min', 'max', 'minLength', 'maxLength', 'email', 'null', 'requiredTrue', 'minData', 'maxDate', 'pattern'. The 'value' property should be set, too. For validation rule types 'required', 'requiredTrue' and 'null' you can skip the 'value' property. Optional property is 'message', which determines the error message. */
    validationRules: [] | null;
    /** @description FormGroup only(when controlType is set to 'group'). Gets or Sets the form'group view mode. */
    viewMode: FormControlViewMode | string;
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
