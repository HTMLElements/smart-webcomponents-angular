import { QueryBuilder } from './../index';
import { Animation, QueryBuilderApplyMode, QueryBuilderFieldsMode } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { Animation, QueryBuilderApplyMode, QueryBuilderFieldsMode, ElementRenderMode } from './../index';
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
    animation: Animation;
    /** @description Determines when the value of the element is updated with the new changes. */
    applyMode: QueryBuilderApplyMode;
    /** @description Adds more operations that can be used to the query bilder's conditions structure. Each custom operation can have the following fields:label - label to be displayed in the operator box. Multiple operations with the same label can exist.name - unique name of the operationeditorTemplate - callback function that creates a custom value editorvalueTemplate - callback function that displays the value after the edior has been closedhandleValue - callback function that handles the value returned by the editor when it is closedhideValue - a boolean condition that specifies whether the operation requires a value or notexpressionTemplate - a string representing a custom Linq expression template. If the value of the element is a string it will be considered as a Linq expression and it will be checked against all expressionTemplates to find a match.expressionReaderCallback - a callback that is used to specify which arguments from the expression are used for the fieldName and value. Used when converting a Linq expression to QueryBuilder value. Takes two arguments: expression - the LinQ expression defined in the expressionTemplate of the customOperator. Type stringbindings - an array of expression parameters based on the expression template of the customOperator. Type Array[string]expressionBuilderCallback - a callback function that is used to specify which arguments from the Linq expression are used for the fieldName and value when building the Linq expression from the current value of the element. Takes three arguments: name - the name of the dataField. Type string.operation - the name of the operation. Type stringvalue - the value of the operation. Type any( depends on the dataField).  */
    customOperations: any;
    /** @description Enables or disables the element. */
    disabled: boolean;
    /** @description Sets or gets the dropdown width of the property and operator editors. */
    dropDownWidth: string;
    /** @description Array with filter fields and their settings. The available field settings are:label - the field's label, as it will appear in the field selection drop downdataField - the field's data fielddataType - the field's data typefilterOperations - an array of the filter operations applicable to the field; if not set, the default filter operations are appliedlookup - an object with settings for customizing the field's respective value selection input. It has the following settings:autoCompleteDelay - delay between typing in the input and opening the drop down with available optionsdataSource - an array of available options to choose from (appear in a drop down)minLength - minimum number of charactes to type in the input before the options drop down is displayedreadonly - if set to true, the value selection input acts as a drop down list, otherwise it acts as a combo box */
    fields: any;
    /** @description Determines whether new fields can be dynamically added by typing in the field (property) box. */
    fieldsMode: QueryBuilderFieldsMode;
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
    /** @description Determines the theme. Theme defines the look of the element */
    theme: string;
    /** @description If is set to true, the element cannot be focused. */
    unfocusable: boolean;
    /** @description The value is represented by multidimensional array. The array contains group operators with conditions. Each group can contain multiple conditions. */
    value: any;
    /** @description Callback used to format the content of the value fields. */
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
