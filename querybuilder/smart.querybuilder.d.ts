import { QueryBuilder } from './../index';
import { Animation, QueryBuilderApplyMode, QueryBuilderFieldsMode, QueryBuilderCustomOperation, QueryBuilderField } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { Animation, QueryBuilderApplyMode, QueryBuilderFieldsMode, QueryBuilderCustomOperation, QueryBuilderField, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { QueryBuilder } from './../index';
export declare class QueryBuilderComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<QueryBuilder>);
    private eventHandlers;
    nativeElement: QueryBuilder;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description Enables the dragging of conditions inside a group or between groups. */
    allowDrag: boolean;
    /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
    animation: Animation | string;
    /** @description Determines when the value of the element is updated with the new changes. */
    applyMode: QueryBuilderApplyMode | string;
    /** @description When 'applyMode' is set to 'immediately', the default value is applied to the editor's value and the QueryBuilder's value is updated automatically. */
    autoApplyValue: boolean;
    /** @description Determines whether QueryBuilder will automatically prompt the user to enter a condition value when a new condition is created. When 'applyMode' is set to 'immediately', the operation field is automatically populated if empty when the selected condition operator is changed. The input field prompts the user when the operation or operator of the condition is changed. */
    autoPrompt: boolean;
    /** @description Adds more operations that can be used to the query bilder's conditions structure. Each custom operation can have the following fields: */
    customOperations: QueryBuilderCustomOperation[];
    /** @description Enables or disables the element. */
    disabled: boolean;
    /** @description Sets or gets the dropdown width of the property and operator editors. */
    dropDownWidth: string;
    /** @description Array with filter fields and their settings. The available field settings are:label - the field's label, as it will appear in the field selection drop downdataField - the field's data fielddataType - the field's data typefilterOperations - an array of the filter operations applicable to the field; if not set, the default filter operations are appliedlookup - an object with settings for customizing the field's respective value selection input. It has the following settings:autoCompleteDelay - delay between typing in the input and opening the drop down with available optionsdataSource - an array of available options to choose from (appear in a drop down)minLength - minimum number of charactes to type in the input before the options drop down is displayedreadonly - if set to true, the value selection input acts as a drop down list, otherwise it acts as a combo box */
    fields: QueryBuilderField[];
    /** @description Determines whether new fields can be dynamically added by typing in the field (property) box. */
    fieldsMode: QueryBuilderFieldsMode | string;
    /** @description Sets or gets the format string of the editor of fields with type 'date'. */
    formatStringDate: string;
    /** @description Sets or gets the format string of the editor of fields with type 'dateTime'. */
    formatStringDateTime: string;
    /** @description A callback function called when a field is added dynamically. Used for configuring settings of the new field. Applicable only when fieldsMode is 'dynamic'. */
    getDynamicField: any;
    /** @description Defines CSS classes to be applied to each of the built-in operations. Icons for these classes are applied in the smart-query-builder style sheet. This property is applicable only if showIcons is set to true. */
    icons: any;
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    locale: string;
    /** @description Callback used to customize the format of the messages that are returned from the Localization Module. */
    localizeFormatFunction: any;
    /** @description Defines field names of the filtered element. */
    messages: any;
    /** @description Determines the placeholder text used inside the condition's operator box in case an operator is not selected. */
    operatorPlaceholder: string;
    /** @description Determines the placeholder text used inside the condition's field (property) box in case a field is not selected. */
    propertyPlaceholder: string;
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    rightToLeft: boolean;
    /** @description Shows/Hides the operator icons shown in the operator selection drop down. */
    showIcons: boolean;
    /** @description Shows/Hides the drop down icon for the operator field name of the conditions. */
    showFieldNameArrow: boolean;
    /** @description Determines the theme. Theme defines the look of the element */
    theme: string;
    /** @description If is set to true, the element cannot be focused. */
    unfocusable: boolean;
    /** @description Determines whether the value of the condition is validated on key up or not. By default the value is validated when the user blur's the value input. The validationTimeout determines the time interval after the user has ended typing that triggers the value validation. */
    validateOnInput: boolean;
    /** @description Determines the timeout (starting after the user has finished typing in the value field) before the validation is applied to the condition value. This property works along validationOnInput. */
    validationTimeout: number;
    /** @description The value is represented by multidimensional array. The array contains group operators with conditions. Each group can contain multiple conditions. */
    value: any;
    /** @description Callback used to format the content of the condition value fields. */
    valueFormatFunction: any;
    /** @description Determines the placeholder text used inside the condition's value box in case a value is not set. */
    valuePlaceholder: string;
    /** @description This event is triggered when the query builder's value is changed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	data, 	originalEvent)
    *   item - The item that is being dragged.
    *   data - The data of the item that is being dragged.
    *   originalEvent - The original event.
    */
    onChange: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a dragged condition is dropped. This action can be canceled by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	data, 	target, 	targetData, 	targetSide)
    *   item - The item that is being dragged.
    *   data - The data of the item that is being dragged.
    *   target - The target item.
    *   targetData - the data of the target item.
    *   targetSide - The side of the target item where the dragged item will be dropped.
    */
    onDragEnd: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a condition is being dragged.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	data, 	originalEvent)
    *   item - The item that is being dragged.
    *   data - The data of the item that is being dragged.
    *   originalEvent - The original event.
    */
    onDragging: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a dragging operation is started in smart-query-builder. This action can be canceled by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	data, 	originalEvent)
    *   item - The item is going to be dragged.
    *   data - The data of the item that is going to be dragged.
    *   originalEvent - The original event.
    */
    onDragStart: EventEmitter<CustomEvent>;
    /** @description This event is triggered when one of the query builder's building blocks ( oeprator, fieldName, value, close button, etc) is clicked.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	type, 	data)
    *   id - The internal id of the clicked item, e.g. '0.1', '1.1', etc.
    *   type - The type of the clicked item ( condition or a group ).
    *   data - The data of the item.
    */
    onItemClick: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a field has been selected.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	value)
    *   label - The label of the selected property.
    *   value - The value of the selected property.
    */
    onPropertySelected: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the component validates the input values. This happens when you input a new value and focus another component.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	newValue)
    *   oldValue - Old validation status.
    *   newValue - New validation status.
    */
    onValidationChange: EventEmitter<CustomEvent>;
    /** @description Converts the current value of the element to DynamicLINQ expression.
    * @returns {string}
  */
    getLinq(): Promise<any>;
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
