import * as tslib_1 from "tslib";
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Smart } from './smart.element';
let QueryBuilderComponent = class QueryBuilderComponent extends BaseElement {
    constructor(ref) {
        super(ref);
        this.eventHandlers = [];
        /** @description This event is triggered when the query builder's value is changed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	data, 	originalEvent)
        *   item - The item that is being dragged.
        *   data - The data of the item that is being dragged.
        *   originalEvent - The original event.
        */
        this.onChange = new EventEmitter();
        /** @description This event is triggered when a dragged condition is dropped. This action can be canceled by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	data, 	target, 	targetData, 	targetSide)
        *   item - The item that is being dragged.
        *   data - The data of the item that is being dragged.
        *   target - The target item.
        *   targetData - the data of the target item.
        *   targetSide - The side of the target item where the dragged item will be dropped.
        */
        this.onDragEnd = new EventEmitter();
        /** @description This event is triggered when a condition is being dragged.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	data, 	originalEvent)
        *   item - The item that is being dragged.
        *   data - The data of the item that is being dragged.
        *   originalEvent - The original event.
        */
        this.onDragging = new EventEmitter();
        /** @description This event is triggered when a dragging operation is started in smart-query-builder. This action can be canceled by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	data, 	originalEvent)
        *   item - The item is going to be dragged.
        *   data - The data of the item that is going to be dragged.
        *   originalEvent - The original event.
        */
        this.onDragStart = new EventEmitter();
        /** @description This event is triggered when one of the query builder's building blocks ( oeprator, fieldName, value, close button, etc) is clicked.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	type, 	data)
        *   id - The internal id of the clicked item, e.g. '0.1', '1.1', etc.
        *   type - The type of the clicked item ( condition or a group ).
        *   data - The data of the item.
        */
        this.onItemClick = new EventEmitter();
        /** @description This event is triggered when a field has been selected.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	value)
        *   label - The label of the selected property.
        *   value - The value of the selected property.
        */
        this.onPropertySelected = new EventEmitter();
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('smart-query-builder');
        for (let propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    }
    /** @description Enables the dragging of conditions inside a group or between groups. */
    get allowDrag() {
        return this.nativeElement ? this.nativeElement.allowDrag : undefined;
    }
    set allowDrag(value) {
        this.nativeElement ? this.nativeElement.allowDrag = value : undefined;
    }
    /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
    get animation() {
        return this.nativeElement ? this.nativeElement.animation : undefined;
    }
    set animation(value) {
        this.nativeElement ? this.nativeElement.animation = value : undefined;
    }
    /** @description Determines when the value of the element is updated with the new changes. */
    get applyMode() {
        return this.nativeElement ? this.nativeElement.applyMode : undefined;
    }
    set applyMode(value) {
        this.nativeElement ? this.nativeElement.applyMode = value : undefined;
    }
    /** @description Determines whether QueryBuilder will automatically prompt the user to enter a condition value when a new condition is created. When 'applyMode' is set to 'immediately', the operation field is automatically populated if empty when the selected condition operator is changed. The input field prompts the user when the operation or operator of the condition is changed. */
    get autoPrompt() {
        return this.nativeElement ? this.nativeElement.autoPrompt : undefined;
    }
    set autoPrompt(value) {
        this.nativeElement ? this.nativeElement.autoPrompt = value : undefined;
    }
    /** @description Adds more operations that can be used to the query bilder's conditions structure. Each custom operation can have the following fields:label - label to be displayed in the operator box. Multiple operations with the same label can exist.name - unique name of the operationeditorTemplate - callback function that creates a custom value editorvalueTemplate - callback function that displays the value after the edior has been closedhandleValue - callback function that handles the value returned by the editor when it is closed. If the dataType is 'object' the expected result from the function should contain a 'label' and 'value' attributes. Where the label will be used for displaying purposes while 'value' will be used as the actual value. hideValue - a boolean condition that specifies whether the operation requires a value or notexpressionTemplate - a string representing a custom Linq expression template. If the value of the element is a string it will be considered as a Linq expression and it will be checked against all expressionTemplates to find a match.expressionReaderCallback - a callback that is used to specify which arguments from the expression are used for the fieldName and value. Used when converting a Linq expression to QueryBuilder value. Takes two arguments: expression - the LinQ expression defined in the expressionTemplate of the customOperator. Type stringbindings - an array of expression parameters based on the expression template of the customOperator. Type Array[string]expressionBuilderCallback - a callback function that is used to specify which arguments from the Linq expression are used for the fieldName and value when building the Linq expression from the current value of the element. Takes three arguments: name - the name of the dataField. Type string.operation - the name of the operation. Type stringvalue - the value of the operation. Type any( depends on the dataField).  */
    get customOperations() {
        return this.nativeElement ? this.nativeElement.customOperations : undefined;
    }
    set customOperations(value) {
        this.nativeElement ? this.nativeElement.customOperations = value : undefined;
    }
    /** @description Enables or disables the element. */
    get disabled() {
        return this.nativeElement ? this.nativeElement.disabled : undefined;
    }
    set disabled(value) {
        this.nativeElement ? this.nativeElement.disabled = value : undefined;
    }
    /** @description Sets or gets the dropdown width of the property and operator editors. */
    get dropDownWidth() {
        return this.nativeElement ? this.nativeElement.dropDownWidth : undefined;
    }
    set dropDownWidth(value) {
        this.nativeElement ? this.nativeElement.dropDownWidth = value : undefined;
    }
    /** @description Array with filter fields and their settings. The available field settings are:label - the field's label, as it will appear in the field selection drop downdataField - the field's data fielddataType - the field's data typefilterOperations - an array of the filter operations applicable to the field; if not set, the default filter operations are appliedlookup - an object with settings for customizing the field's respective value selection input. It has the following settings:autoCompleteDelay - delay between typing in the input and opening the drop down with available optionsdataSource - an array of available options to choose from (appear in a drop down)minLength - minimum number of charactes to type in the input before the options drop down is displayedreadonly - if set to true, the value selection input acts as a drop down list, otherwise it acts as a combo box */
    get fields() {
        return this.nativeElement ? this.nativeElement.fields : undefined;
    }
    set fields(value) {
        this.nativeElement ? this.nativeElement.fields = value : undefined;
    }
    /** @description Determines whether new fields can be dynamically added by typing in the field (property) box. */
    get fieldsMode() {
        return this.nativeElement ? this.nativeElement.fieldsMode : undefined;
    }
    set fieldsMode(value) {
        this.nativeElement ? this.nativeElement.fieldsMode = value : undefined;
    }
    /** @description Sets or gets the format string of the editor of fields with type 'date'. */
    get formatStringDate() {
        return this.nativeElement ? this.nativeElement.formatStringDate : undefined;
    }
    set formatStringDate(value) {
        this.nativeElement ? this.nativeElement.formatStringDate = value : undefined;
    }
    /** @description Sets or gets the format string of the editor of fields with type 'dateTime'. */
    get formatStringDateTime() {
        return this.nativeElement ? this.nativeElement.formatStringDateTime : undefined;
    }
    set formatStringDateTime(value) {
        this.nativeElement ? this.nativeElement.formatStringDateTime = value : undefined;
    }
    /** @description A callback function called when a field is added dynamically. Used for configuring settings of the new field. Applicable only when fieldsMode is 'dynamic'. */
    get getDynamicField() {
        return this.nativeElement ? this.nativeElement.getDynamicField : undefined;
    }
    set getDynamicField(value) {
        this.nativeElement ? this.nativeElement.getDynamicField = value : undefined;
    }
    /** @description Defines CSS classes to be applied to each of the built-in operations. Icons for these classes are applied in the smart-query-builder style sheet. This property is applicable only if showIcons is set to true. */
    get icons() {
        return this.nativeElement ? this.nativeElement.icons : undefined;
    }
    set icons(value) {
        this.nativeElement ? this.nativeElement.icons = value : undefined;
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
    /** @description Defines field names of the filtered element. */
    get messages() {
        return this.nativeElement ? this.nativeElement.messages : undefined;
    }
    set messages(value) {
        this.nativeElement ? this.nativeElement.messages = value : undefined;
    }
    /** @description Determines the placeholder text used inside the condition's operator box in case an operator is not selected. */
    get operatorPlaceholder() {
        return this.nativeElement ? this.nativeElement.operatorPlaceholder : undefined;
    }
    set operatorPlaceholder(value) {
        this.nativeElement ? this.nativeElement.operatorPlaceholder = value : undefined;
    }
    /** @description Determines the placeholder text used inside the condition's field (property) box in case a field is not selected. */
    get propertyPlaceholder() {
        return this.nativeElement ? this.nativeElement.propertyPlaceholder : undefined;
    }
    set propertyPlaceholder(value) {
        this.nativeElement ? this.nativeElement.propertyPlaceholder = value : undefined;
    }
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    get rightToLeft() {
        return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
    }
    set rightToLeft(value) {
        this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
    }
    /** @description Shows/Hides the operator icons shown in the operator selection drop down. */
    get showIcons() {
        return this.nativeElement ? this.nativeElement.showIcons : undefined;
    }
    set showIcons(value) {
        this.nativeElement ? this.nativeElement.showIcons = value : undefined;
    }
    /** @description Shows/Hides the drop down icon for the operator field name of the conditions. */
    get showFieldNameArrow() {
        return this.nativeElement ? this.nativeElement.showFieldNameArrow : undefined;
    }
    set showFieldNameArrow(value) {
        this.nativeElement ? this.nativeElement.showFieldNameArrow = value : undefined;
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
    /** @description Determines whether the value of the condition is validated on key up or not. By default the value is validated when the user blur's the value input. The validationTimeout determines the time interval after the user has ended typing that triggers the value validation. */
    get validateOnInput() {
        return this.nativeElement ? this.nativeElement.validateOnInput : undefined;
    }
    set validateOnInput(value) {
        this.nativeElement ? this.nativeElement.validateOnInput = value : undefined;
    }
    /** @description Determines the timeout (starting after the user has finished typing in the value field) before the validation is applied to the condition value. This property works along validationOnInput. */
    get validationTimeout() {
        return this.nativeElement ? this.nativeElement.validationTimeout : undefined;
    }
    set validationTimeout(value) {
        this.nativeElement ? this.nativeElement.validationTimeout = value : undefined;
    }
    /** @description The value is represented by multidimensional array. The array contains group operators with conditions. Each group can contain multiple conditions. */
    get value() {
        return this.nativeElement ? this.nativeElement.value : undefined;
    }
    set value(value) {
        this.nativeElement ? this.nativeElement.value = value : undefined;
    }
    /** @description Callback used to format the content of the condition value fields. */
    get valueFormatFunction() {
        return this.nativeElement ? this.nativeElement.valueFormatFunction : undefined;
    }
    set valueFormatFunction(value) {
        this.nativeElement ? this.nativeElement.valueFormatFunction = value : undefined;
    }
    /** @description Determines the placeholder text used inside the condition's value box in case a value is not set. */
    get valuePlaceholder() {
        return this.nativeElement ? this.nativeElement.valuePlaceholder : undefined;
    }
    set valuePlaceholder(value) {
        this.nativeElement ? this.nativeElement.valuePlaceholder = value : undefined;
    }
    /** @description Converts the current value of the element to DynamicLINQ expression.
    * @returns {string}
  */
    getLinq() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getLinq();
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
        that.eventHandlers['changeHandler'] = (event) => { that.onChange.emit(event); };
        that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
        that.eventHandlers['dragEndHandler'] = (event) => { that.onDragEnd.emit(event); };
        that.nativeElement.addEventListener('dragEnd', that.eventHandlers['dragEndHandler']);
        that.eventHandlers['draggingHandler'] = (event) => { that.onDragging.emit(event); };
        that.nativeElement.addEventListener('dragging', that.eventHandlers['draggingHandler']);
        that.eventHandlers['dragStartHandler'] = (event) => { that.onDragStart.emit(event); };
        that.nativeElement.addEventListener('dragStart', that.eventHandlers['dragStartHandler']);
        that.eventHandlers['itemClickHandler'] = (event) => { that.onItemClick.emit(event); };
        that.nativeElement.addEventListener('itemClick', that.eventHandlers['itemClickHandler']);
        that.eventHandlers['propertySelectedHandler'] = (event) => { that.onPropertySelected.emit(event); };
        that.nativeElement.addEventListener('propertySelected', that.eventHandlers['propertySelectedHandler']);
    }
    /** @description Remove event listeners. */
    unlisten() {
        const that = this;
        if (that.eventHandlers['changeHandler']) {
            that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
        }
        if (that.eventHandlers['dragEndHandler']) {
            that.nativeElement.removeEventListener('dragEnd', that.eventHandlers['dragEndHandler']);
        }
        if (that.eventHandlers['draggingHandler']) {
            that.nativeElement.removeEventListener('dragging', that.eventHandlers['draggingHandler']);
        }
        if (that.eventHandlers['dragStartHandler']) {
            that.nativeElement.removeEventListener('dragStart', that.eventHandlers['dragStartHandler']);
        }
        if (that.eventHandlers['itemClickHandler']) {
            that.nativeElement.removeEventListener('itemClick', that.eventHandlers['itemClickHandler']);
        }
        if (that.eventHandlers['propertySelectedHandler']) {
            that.nativeElement.removeEventListener('propertySelected', that.eventHandlers['propertySelectedHandler']);
        }
    }
};
QueryBuilderComponent.ctorParameters = () => [
    { type: ElementRef }
];
tslib_1.__decorate([
    Input()
], QueryBuilderComponent.prototype, "allowDrag", null);
tslib_1.__decorate([
    Input()
], QueryBuilderComponent.prototype, "animation", null);
tslib_1.__decorate([
    Input()
], QueryBuilderComponent.prototype, "applyMode", null);
tslib_1.__decorate([
    Input()
], QueryBuilderComponent.prototype, "autoPrompt", null);
tslib_1.__decorate([
    Input()
], QueryBuilderComponent.prototype, "customOperations", null);
tslib_1.__decorate([
    Input()
], QueryBuilderComponent.prototype, "disabled", null);
tslib_1.__decorate([
    Input()
], QueryBuilderComponent.prototype, "dropDownWidth", null);
tslib_1.__decorate([
    Input()
], QueryBuilderComponent.prototype, "fields", null);
tslib_1.__decorate([
    Input()
], QueryBuilderComponent.prototype, "fieldsMode", null);
tslib_1.__decorate([
    Input()
], QueryBuilderComponent.prototype, "formatStringDate", null);
tslib_1.__decorate([
    Input()
], QueryBuilderComponent.prototype, "formatStringDateTime", null);
tslib_1.__decorate([
    Input()
], QueryBuilderComponent.prototype, "getDynamicField", null);
tslib_1.__decorate([
    Input()
], QueryBuilderComponent.prototype, "icons", null);
tslib_1.__decorate([
    Input()
], QueryBuilderComponent.prototype, "locale", null);
tslib_1.__decorate([
    Input()
], QueryBuilderComponent.prototype, "localizeFormatFunction", null);
tslib_1.__decorate([
    Input()
], QueryBuilderComponent.prototype, "messages", null);
tslib_1.__decorate([
    Input()
], QueryBuilderComponent.prototype, "operatorPlaceholder", null);
tslib_1.__decorate([
    Input()
], QueryBuilderComponent.prototype, "propertyPlaceholder", null);
tslib_1.__decorate([
    Input()
], QueryBuilderComponent.prototype, "rightToLeft", null);
tslib_1.__decorate([
    Input()
], QueryBuilderComponent.prototype, "showIcons", null);
tslib_1.__decorate([
    Input()
], QueryBuilderComponent.prototype, "showFieldNameArrow", null);
tslib_1.__decorate([
    Input()
], QueryBuilderComponent.prototype, "theme", null);
tslib_1.__decorate([
    Input()
], QueryBuilderComponent.prototype, "unfocusable", null);
tslib_1.__decorate([
    Input()
], QueryBuilderComponent.prototype, "validateOnInput", null);
tslib_1.__decorate([
    Input()
], QueryBuilderComponent.prototype, "validationTimeout", null);
tslib_1.__decorate([
    Input()
], QueryBuilderComponent.prototype, "value", null);
tslib_1.__decorate([
    Input()
], QueryBuilderComponent.prototype, "valueFormatFunction", null);
tslib_1.__decorate([
    Input()
], QueryBuilderComponent.prototype, "valuePlaceholder", null);
tslib_1.__decorate([
    Output()
], QueryBuilderComponent.prototype, "onChange", void 0);
tslib_1.__decorate([
    Output()
], QueryBuilderComponent.prototype, "onDragEnd", void 0);
tslib_1.__decorate([
    Output()
], QueryBuilderComponent.prototype, "onDragging", void 0);
tslib_1.__decorate([
    Output()
], QueryBuilderComponent.prototype, "onDragStart", void 0);
tslib_1.__decorate([
    Output()
], QueryBuilderComponent.prototype, "onItemClick", void 0);
tslib_1.__decorate([
    Output()
], QueryBuilderComponent.prototype, "onPropertySelected", void 0);
QueryBuilderComponent = tslib_1.__decorate([
    Directive({
        selector: 'smart-query-builder, [smart-query-builder]'
    })
], QueryBuilderComponent);
export { QueryBuilderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQucXVlcnlidWlsZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc21hcnQtd2ViY29tcG9uZW50cy1hbmd1bGFyL3F1ZXJ5YnVpbGRlci8iLCJzb3VyY2VzIjpbInNtYXJ0LnF1ZXJ5YnVpbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUosT0FBTyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVyRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFReEMsSUFBYSxxQkFBcUIsR0FBbEMsTUFBYSxxQkFBc0IsU0FBUSxXQUFXO0lBQ3JELFlBQVksR0FBNkI7UUFDeEMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBSUosa0JBQWEsR0FBVSxFQUFFLENBQUM7UUF5UWxDOzs7OztVQUtFO1FBQ1EsYUFBUSxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRW5FOzs7Ozs7O1VBT0U7UUFDUSxjQUFTLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFcEU7Ozs7O1VBS0U7UUFDUSxlQUFVLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFckU7Ozs7O1VBS0U7UUFDUSxnQkFBVyxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXRFOzs7OztVQUtFO1FBQ1EsZ0JBQVcsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV0RTs7OztVQUlFO1FBQ1EsdUJBQWtCLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUEzVDVFLElBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDLGFBQTZCLENBQUM7SUFDeEQsQ0FBQztJQUtEOztP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QUssRUFBRTsrREFHUDtBQU9EO0lBREMsS0FBSyxFQUFFO2tEQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7d0RBR1A7QUFPRDtJQURDLEtBQUssRUFBRTs0REFHUDtBQU9EO0lBREMsS0FBSyxFQUFFOzhEQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7a0RBR1A7QUFPRDtJQURDLEtBQUssRUFBRTtnRUFHUDtBQU9EO0lBREMsS0FBSyxFQUFFOzZEQUdQO0FBV1M7SUFBVCxNQUFNLEVBQUU7dURBQTBEO0FBVXpEO0lBQVQsTUFBTSxFQUFFO3dEQUEyRDtBQVExRDtJQUFULE1BQU0sRUFBRTt5REFBNEQ7QUFRM0Q7SUFBVCxNQUFNLEVBQUU7MERBQTZEO0FBUTVEO0lBQVQsTUFBTSxFQUFFOzBEQUE2RDtBQU81RDtJQUFULE1BQU0sRUFBRTtpRUFBb0U7QUE5VGpFLHFCQUFxQjtJQUpqQyxTQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsNENBQTRDO0tBQ3RELENBQUM7R0FFVyxxQkFBcUIsQ0F1YWpDO1NBdmFZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFF1ZXJ5QnVpbGRlciB9IGZyb20gJy4vLi4vaW5kZXgnO1xuaW1wb3J0IHsgQW5pbWF0aW9uLCBRdWVyeUJ1aWxkZXJBcHBseU1vZGUsIFF1ZXJ5QnVpbGRlckZpZWxkc01vZGUsIFF1ZXJ5QnVpbGRlckZpZWxkLCBFbGVtZW50UmVuZGVyTW9kZX0gZnJvbSAnLi8uLi9pbmRleCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIERpcmVjdGl2ZSwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIFNpbXBsZUNoYW5nZXMsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXNlRWxlbWVudCwgU21hcnQgfSBmcm9tICcuL3NtYXJ0LmVsZW1lbnQnO1xuZXhwb3J0IHsgQW5pbWF0aW9uLCBRdWVyeUJ1aWxkZXJBcHBseU1vZGUsIFF1ZXJ5QnVpbGRlckZpZWxkc01vZGUsIFF1ZXJ5QnVpbGRlckZpZWxkLCBFbGVtZW50UmVuZGVyTW9kZX0gZnJvbSAnLi8uLi9pbmRleCc7XG5leHBvcnQgeyBTbWFydCB9IGZyb20gJy4vc21hcnQuZWxlbWVudCc7XG5leHBvcnQgeyBRdWVyeUJ1aWxkZXIgfSBmcm9tICcuLy4uL2luZGV4JztcblxuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdzbWFydC1xdWVyeS1idWlsZGVyLCBbc21hcnQtcXVlcnktYnVpbGRlcl0nXG59KVxuXG5leHBvcnQgY2xhc3MgUXVlcnlCdWlsZGVyQ29tcG9uZW50IGV4dGVuZHMgQmFzZUVsZW1lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcblx0Y29uc3RydWN0b3IocmVmOiBFbGVtZW50UmVmPFF1ZXJ5QnVpbGRlcj4pIHtcblx0XHRzdXBlcihyZWYpO1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA9IHJlZi5uYXRpdmVFbGVtZW50IGFzIFF1ZXJ5QnVpbGRlcjtcblx0fVxuXG5cdHByaXZhdGUgZXZlbnRIYW5kbGVyczogYW55W10gPSBbXTtcblxuXHRwdWJsaWMgbmF0aXZlRWxlbWVudDogUXVlcnlCdWlsZGVyO1xuXHQvKiogQGRlc2NyaXB0aW9uIENyZWF0ZXMgdGhlIGNvbXBvbmVudCBvbiBkZW1hbmQuXG5cdCAqIEBwYXJhbSBwcm9wZXJ0aWVzIEFuIG9wdGlvbmFsIG9iamVjdCBvZiBwcm9wZXJ0aWVzLCB3aGljaCB3aWxsIGJlIGFkZGVkIHRvIHRoZSB0ZW1wbGF0ZSBiaW5kZWQgb25lcy5cblx0ICovXG5cdHB1YmxpYyBjcmVhdGVDb21wb25lbnQocHJvcGVydGllcyA9IHt9KTogYW55IHtcbiAgICBcdHRoaXMubmF0aXZlRWxlbWVudCA9IDxRdWVyeUJ1aWxkZXI+ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc21hcnQtcXVlcnktYnVpbGRlcicpO1xuXHRcdGZvciAobGV0IHByb3BlcnR5TmFtZSBpbiBwcm9wZXJ0aWVzKSB7IFxuIFx0XHRcdHRoaXMubmF0aXZlRWxlbWVudFtwcm9wZXJ0eU5hbWVdID0gcHJvcGVydGllc1twcm9wZXJ0eU5hbWVdO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50O1xuXHR9XG5cdC8qKiBAZGVzY3JpcHRpb24gRW5hYmxlcyB0aGUgZHJhZ2dpbmcgb2YgY29uZGl0aW9ucyBpbnNpZGUgYSBncm91cCBvciBiZXR3ZWVuIGdyb3Vwcy4gKi9cblx0QElucHV0KClcblx0Z2V0IGFsbG93RHJhZygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmFsbG93RHJhZyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYWxsb3dEcmFnKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmFsbG93RHJhZyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIGFuaW1hdGlvbiBtb2RlLiBBbmltYXRpb24gaXMgZGlzYWJsZWQgd2hlbiB0aGUgcHJvcGVydHkgaXMgc2V0IHRvICdub25lJyAqL1xuXHRASW5wdXQoKVxuXHRnZXQgYW5pbWF0aW9uKCk6IEFuaW1hdGlvbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hbmltYXRpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGFuaW1hdGlvbih2YWx1ZTogQW5pbWF0aW9uKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmFuaW1hdGlvbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHdoZW4gdGhlIHZhbHVlIG9mIHRoZSBlbGVtZW50IGlzIHVwZGF0ZWQgd2l0aCB0aGUgbmV3IGNoYW5nZXMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBhcHBseU1vZGUoKTogUXVlcnlCdWlsZGVyQXBwbHlNb2RlIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmFwcGx5TW9kZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYXBwbHlNb2RlKHZhbHVlOiBRdWVyeUJ1aWxkZXJBcHBseU1vZGUpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYXBwbHlNb2RlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgd2hldGhlciBRdWVyeUJ1aWxkZXIgd2lsbCBhdXRvbWF0aWNhbGx5IHByb21wdCB0aGUgdXNlciB0byBlbnRlciBhIGNvbmRpdGlvbiB2YWx1ZSB3aGVuIGEgbmV3IGNvbmRpdGlvbiBpcyBjcmVhdGVkLiBXaGVuICdhcHBseU1vZGUnIGlzIHNldCB0byAnaW1tZWRpYXRlbHknLCB0aGUgb3BlcmF0aW9uIGZpZWxkIGlzIGF1dG9tYXRpY2FsbHkgcG9wdWxhdGVkIGlmIGVtcHR5IHdoZW4gdGhlIHNlbGVjdGVkIGNvbmRpdGlvbiBvcGVyYXRvciBpcyBjaGFuZ2VkLiBUaGUgaW5wdXQgZmllbGQgcHJvbXB0cyB0aGUgdXNlciB3aGVuIHRoZSBvcGVyYXRpb24gb3Igb3BlcmF0b3Igb2YgdGhlIGNvbmRpdGlvbiBpcyBjaGFuZ2VkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgYXV0b1Byb21wdCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9Qcm9tcHQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGF1dG9Qcm9tcHQodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYXV0b1Byb21wdCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBZGRzIG1vcmUgb3BlcmF0aW9ucyB0aGF0IGNhbiBiZSB1c2VkIHRvIHRoZSBxdWVyeSBiaWxkZXIncyBjb25kaXRpb25zIHN0cnVjdHVyZS4gRWFjaCBjdXN0b20gb3BlcmF0aW9uIGNhbiBoYXZlIHRoZSBmb2xsb3dpbmcgZmllbGRzOmxhYmVsIC0gbGFiZWwgdG8gYmUgZGlzcGxheWVkIGluIHRoZSBvcGVyYXRvciBib3guIE11bHRpcGxlIG9wZXJhdGlvbnMgd2l0aCB0aGUgc2FtZSBsYWJlbCBjYW4gZXhpc3QubmFtZSAtIHVuaXF1ZSBuYW1lIG9mIHRoZSBvcGVyYXRpb25lZGl0b3JUZW1wbGF0ZSAtIGNhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBhIGN1c3RvbSB2YWx1ZSBlZGl0b3J2YWx1ZVRlbXBsYXRlIC0gY2FsbGJhY2sgZnVuY3Rpb24gdGhhdCBkaXNwbGF5cyB0aGUgdmFsdWUgYWZ0ZXIgdGhlIGVkaW9yIGhhcyBiZWVuIGNsb3NlZGhhbmRsZVZhbHVlIC0gY2FsbGJhY2sgZnVuY3Rpb24gdGhhdCBoYW5kbGVzIHRoZSB2YWx1ZSByZXR1cm5lZCBieSB0aGUgZWRpdG9yIHdoZW4gaXQgaXMgY2xvc2VkLiBJZiB0aGUgZGF0YVR5cGUgaXMgJ29iamVjdCcgdGhlIGV4cGVjdGVkIHJlc3VsdCBmcm9tIHRoZSBmdW5jdGlvbiBzaG91bGQgY29udGFpbiBhICdsYWJlbCcgYW5kICd2YWx1ZScgYXR0cmlidXRlcy4gV2hlcmUgdGhlIGxhYmVsIHdpbGwgYmUgdXNlZCBmb3IgZGlzcGxheWluZyBwdXJwb3NlcyB3aGlsZSAndmFsdWUnIHdpbGwgYmUgdXNlZCBhcyB0aGUgYWN0dWFsIHZhbHVlLiBoaWRlVmFsdWUgLSBhIGJvb2xlYW4gY29uZGl0aW9uIHRoYXQgc3BlY2lmaWVzIHdoZXRoZXIgdGhlIG9wZXJhdGlvbiByZXF1aXJlcyBhIHZhbHVlIG9yIG5vdGV4cHJlc3Npb25UZW1wbGF0ZSAtIGEgc3RyaW5nIHJlcHJlc2VudGluZyBhIGN1c3RvbSBMaW5xIGV4cHJlc3Npb24gdGVtcGxhdGUuIElmIHRoZSB2YWx1ZSBvZiB0aGUgZWxlbWVudCBpcyBhIHN0cmluZyBpdCB3aWxsIGJlIGNvbnNpZGVyZWQgYXMgYSBMaW5xIGV4cHJlc3Npb24gYW5kIGl0IHdpbGwgYmUgY2hlY2tlZCBhZ2FpbnN0IGFsbCBleHByZXNzaW9uVGVtcGxhdGVzIHRvIGZpbmQgYSBtYXRjaC5leHByZXNzaW9uUmVhZGVyQ2FsbGJhY2sgLSBhIGNhbGxiYWNrIHRoYXQgaXMgdXNlZCB0byBzcGVjaWZ5IHdoaWNoIGFyZ3VtZW50cyBmcm9tIHRoZSBleHByZXNzaW9uIGFyZSB1c2VkIGZvciB0aGUgZmllbGROYW1lIGFuZCB2YWx1ZS4gVXNlZCB3aGVuIGNvbnZlcnRpbmcgYSBMaW5xIGV4cHJlc3Npb24gdG8gUXVlcnlCdWlsZGVyIHZhbHVlLiBUYWtlcyB0d28gYXJndW1lbnRzOiBleHByZXNzaW9uIC0gdGhlIExpblEgZXhwcmVzc2lvbiBkZWZpbmVkIGluIHRoZSBleHByZXNzaW9uVGVtcGxhdGUgb2YgdGhlIGN1c3RvbU9wZXJhdG9yLiBUeXBlIHN0cmluZ2JpbmRpbmdzIC0gYW4gYXJyYXkgb2YgZXhwcmVzc2lvbiBwYXJhbWV0ZXJzIGJhc2VkIG9uIHRoZSBleHByZXNzaW9uIHRlbXBsYXRlIG9mIHRoZSBjdXN0b21PcGVyYXRvci4gVHlwZSBBcnJheVtzdHJpbmddZXhwcmVzc2lvbkJ1aWxkZXJDYWxsYmFjayAtIGEgY2FsbGJhY2sgZnVuY3Rpb24gdGhhdCBpcyB1c2VkIHRvIHNwZWNpZnkgd2hpY2ggYXJndW1lbnRzIGZyb20gdGhlIExpbnEgZXhwcmVzc2lvbiBhcmUgdXNlZCBmb3IgdGhlIGZpZWxkTmFtZSBhbmQgdmFsdWUgd2hlbiBidWlsZGluZyB0aGUgTGlucSBleHByZXNzaW9uIGZyb20gdGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhlIGVsZW1lbnQuIFRha2VzIHRocmVlIGFyZ3VtZW50czogbmFtZSAtIHRoZSBuYW1lIG9mIHRoZSBkYXRhRmllbGQuIFR5cGUgc3RyaW5nLm9wZXJhdGlvbiAtIHRoZSBuYW1lIG9mIHRoZSBvcGVyYXRpb24uIFR5cGUgc3RyaW5ndmFsdWUgLSB0aGUgdmFsdWUgb2YgdGhlIG9wZXJhdGlvbi4gVHlwZSBhbnkoIGRlcGVuZHMgb24gdGhlIGRhdGFGaWVsZCkuICAqL1xuXHRASW5wdXQoKVxuXHRnZXQgY3VzdG9tT3BlcmF0aW9ucygpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY3VzdG9tT3BlcmF0aW9ucyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgY3VzdG9tT3BlcmF0aW9ucyh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmN1c3RvbU9wZXJhdGlvbnMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRW5hYmxlcyBvciBkaXNhYmxlcyB0aGUgZWxlbWVudC4gKi9cblx0QElucHV0KClcblx0Z2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZWQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVkID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgZHJvcGRvd24gd2lkdGggb2YgdGhlIHByb3BlcnR5IGFuZCBvcGVyYXRvciBlZGl0b3JzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZHJvcERvd25XaWR0aCgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZHJvcERvd25XaWR0aCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZHJvcERvd25XaWR0aCh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRyb3BEb3duV2lkdGggPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQXJyYXkgd2l0aCBmaWx0ZXIgZmllbGRzIGFuZCB0aGVpciBzZXR0aW5ncy4gVGhlIGF2YWlsYWJsZSBmaWVsZCBzZXR0aW5ncyBhcmU6bGFiZWwgLSB0aGUgZmllbGQncyBsYWJlbCwgYXMgaXQgd2lsbCBhcHBlYXIgaW4gdGhlIGZpZWxkIHNlbGVjdGlvbiBkcm9wIGRvd25kYXRhRmllbGQgLSB0aGUgZmllbGQncyBkYXRhIGZpZWxkZGF0YVR5cGUgLSB0aGUgZmllbGQncyBkYXRhIHR5cGVmaWx0ZXJPcGVyYXRpb25zIC0gYW4gYXJyYXkgb2YgdGhlIGZpbHRlciBvcGVyYXRpb25zIGFwcGxpY2FibGUgdG8gdGhlIGZpZWxkOyBpZiBub3Qgc2V0LCB0aGUgZGVmYXVsdCBmaWx0ZXIgb3BlcmF0aW9ucyBhcmUgYXBwbGllZGxvb2t1cCAtIGFuIG9iamVjdCB3aXRoIHNldHRpbmdzIGZvciBjdXN0b21pemluZyB0aGUgZmllbGQncyByZXNwZWN0aXZlIHZhbHVlIHNlbGVjdGlvbiBpbnB1dC4gSXQgaGFzIHRoZSBmb2xsb3dpbmcgc2V0dGluZ3M6YXV0b0NvbXBsZXRlRGVsYXkgLSBkZWxheSBiZXR3ZWVuIHR5cGluZyBpbiB0aGUgaW5wdXQgYW5kIG9wZW5pbmcgdGhlIGRyb3AgZG93biB3aXRoIGF2YWlsYWJsZSBvcHRpb25zZGF0YVNvdXJjZSAtIGFuIGFycmF5IG9mIGF2YWlsYWJsZSBvcHRpb25zIHRvIGNob29zZSBmcm9tIChhcHBlYXIgaW4gYSBkcm9wIGRvd24pbWluTGVuZ3RoIC0gbWluaW11bSBudW1iZXIgb2YgY2hhcmFjdGVzIHRvIHR5cGUgaW4gdGhlIGlucHV0IGJlZm9yZSB0aGUgb3B0aW9ucyBkcm9wIGRvd24gaXMgZGlzcGxheWVkcmVhZG9ubHkgLSBpZiBzZXQgdG8gdHJ1ZSwgdGhlIHZhbHVlIHNlbGVjdGlvbiBpbnB1dCBhY3RzIGFzIGEgZHJvcCBkb3duIGxpc3QsIG90aGVyd2lzZSBpdCBhY3RzIGFzIGEgY29tYm8gYm94ICovXG5cdEBJbnB1dCgpXG5cdGdldCBmaWVsZHMoKTogUXVlcnlCdWlsZGVyRmllbGRbXSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5maWVsZHMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGZpZWxkcyh2YWx1ZTogUXVlcnlCdWlsZGVyRmllbGRbXSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5maWVsZHMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB3aGV0aGVyIG5ldyBmaWVsZHMgY2FuIGJlIGR5bmFtaWNhbGx5IGFkZGVkIGJ5IHR5cGluZyBpbiB0aGUgZmllbGQgKHByb3BlcnR5KSBib3guICovXG5cdEBJbnB1dCgpXG5cdGdldCBmaWVsZHNNb2RlKCk6IFF1ZXJ5QnVpbGRlckZpZWxkc01vZGUge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZmllbGRzTW9kZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZmllbGRzTW9kZSh2YWx1ZTogUXVlcnlCdWlsZGVyRmllbGRzTW9kZSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5maWVsZHNNb2RlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgZm9ybWF0IHN0cmluZyBvZiB0aGUgZWRpdG9yIG9mIGZpZWxkcyB3aXRoIHR5cGUgJ2RhdGUnLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZm9ybWF0U3RyaW5nRGF0ZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZm9ybWF0U3RyaW5nRGF0ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZm9ybWF0U3RyaW5nRGF0ZSh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmZvcm1hdFN0cmluZ0RhdGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSBmb3JtYXQgc3RyaW5nIG9mIHRoZSBlZGl0b3Igb2YgZmllbGRzIHdpdGggdHlwZSAnZGF0ZVRpbWUnLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZm9ybWF0U3RyaW5nRGF0ZVRpbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmZvcm1hdFN0cmluZ0RhdGVUaW1lIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBmb3JtYXRTdHJpbmdEYXRlVGltZSh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmZvcm1hdFN0cmluZ0RhdGVUaW1lID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEEgY2FsbGJhY2sgZnVuY3Rpb24gY2FsbGVkIHdoZW4gYSBmaWVsZCBpcyBhZGRlZCBkeW5hbWljYWxseS4gVXNlZCBmb3IgY29uZmlndXJpbmcgc2V0dGluZ3Mgb2YgdGhlIG5ldyBmaWVsZC4gQXBwbGljYWJsZSBvbmx5IHdoZW4gZmllbGRzTW9kZSBpcyAnZHluYW1pYycuICovXG5cdEBJbnB1dCgpXG5cdGdldCBnZXREeW5hbWljRmllbGQoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmdldER5bmFtaWNGaWVsZCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZ2V0RHluYW1pY0ZpZWxkKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0RHluYW1pY0ZpZWxkID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERlZmluZXMgQ1NTIGNsYXNzZXMgdG8gYmUgYXBwbGllZCB0byBlYWNoIG9mIHRoZSBidWlsdC1pbiBvcGVyYXRpb25zLiBJY29ucyBmb3IgdGhlc2UgY2xhc3NlcyBhcmUgYXBwbGllZCBpbiB0aGUgc21hcnQtcXVlcnktYnVpbGRlciBzdHlsZSBzaGVldC4gVGhpcyBwcm9wZXJ0eSBpcyBhcHBsaWNhYmxlIG9ubHkgaWYgc2hvd0ljb25zIGlzIHNldCB0byB0cnVlLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgaWNvbnMoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lmljb25zIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBpY29ucyh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lmljb25zID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgbGFuZ3VhZ2UuIFVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCB0aGUgcHJvcGVydHkgbWVzc2FnZXMuICAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbG9jYWxlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sb2NhbGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGxvY2FsZSh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxvY2FsZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDYWxsYmFjayB1c2VkIHRvIGN1c3RvbWl6ZSB0aGUgZm9ybWF0IG9mIHRoZSBtZXNzYWdlcyB0aGF0IGFyZSByZXR1cm5lZCBmcm9tIHRoZSBMb2NhbGl6YXRpb24gTW9kdWxlLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbG9jYWxpemVGb3JtYXRGdW5jdGlvbigpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubG9jYWxpemVGb3JtYXRGdW5jdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbG9jYWxpemVGb3JtYXRGdW5jdGlvbih2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxvY2FsaXplRm9ybWF0RnVuY3Rpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGVmaW5lcyBmaWVsZCBuYW1lcyBvZiB0aGUgZmlsdGVyZWQgZWxlbWVudC4gKi9cblx0QElucHV0KClcblx0Z2V0IG1lc3NhZ2VzKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5tZXNzYWdlcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbWVzc2FnZXModmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5tZXNzYWdlcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBwbGFjZWhvbGRlciB0ZXh0IHVzZWQgaW5zaWRlIHRoZSBjb25kaXRpb24ncyBvcGVyYXRvciBib3ggaW4gY2FzZSBhbiBvcGVyYXRvciBpcyBub3Qgc2VsZWN0ZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBvcGVyYXRvclBsYWNlaG9sZGVyKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vcGVyYXRvclBsYWNlaG9sZGVyIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBvcGVyYXRvclBsYWNlaG9sZGVyKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub3BlcmF0b3JQbGFjZWhvbGRlciA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBwbGFjZWhvbGRlciB0ZXh0IHVzZWQgaW5zaWRlIHRoZSBjb25kaXRpb24ncyBmaWVsZCAocHJvcGVydHkpIGJveCBpbiBjYXNlIGEgZmllbGQgaXMgbm90IHNlbGVjdGVkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcHJvcGVydHlQbGFjZWhvbGRlcigpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucHJvcGVydHlQbGFjZWhvbGRlciA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcHJvcGVydHlQbGFjZWhvbGRlcih2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnByb3BlcnR5UGxhY2Vob2xkZXIgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSB2YWx1ZSBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGVsZW1lbnQgaXMgYWxpZ25lZCB0byBzdXBwb3J0IGxvY2FsZXMgdXNpbmcgcmlnaHQtdG8tbGVmdCBmb250cy4gKi9cblx0QElucHV0KClcblx0Z2V0IHJpZ2h0VG9MZWZ0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmlnaHRUb0xlZnQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHJpZ2h0VG9MZWZ0KHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJpZ2h0VG9MZWZ0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNob3dzL0hpZGVzIHRoZSBvcGVyYXRvciBpY29ucyBzaG93biBpbiB0aGUgb3BlcmF0b3Igc2VsZWN0aW9uIGRyb3AgZG93bi4gKi9cblx0QElucHV0KClcblx0Z2V0IHNob3dJY29ucygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNob3dJY29ucyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc2hvd0ljb25zKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNob3dJY29ucyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTaG93cy9IaWRlcyB0aGUgZHJvcCBkb3duIGljb24gZm9yIHRoZSBvcGVyYXRvciBmaWVsZCBuYW1lIG9mIHRoZSBjb25kaXRpb25zLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc2hvd0ZpZWxkTmFtZUFycm93KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2hvd0ZpZWxkTmFtZUFycm93IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzaG93RmllbGROYW1lQXJyb3codmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2hvd0ZpZWxkTmFtZUFycm93ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIHRoZW1lLiBUaGVtZSBkZWZpbmVzIHRoZSBsb29rIG9mIHRoZSBlbGVtZW50ICovXG5cdEBJbnB1dCgpXG5cdGdldCB0aGVtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGhlbWUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRoZW1lKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGhlbWUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSWYgaXMgc2V0IHRvIHRydWUsIHRoZSBlbGVtZW50IGNhbm5vdCBiZSBmb2N1c2VkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdW5mb2N1c2FibGUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC51bmZvY3VzYWJsZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdW5mb2N1c2FibGUodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudW5mb2N1c2FibGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSB2YWx1ZSBvZiB0aGUgY29uZGl0aW9uIGlzIHZhbGlkYXRlZCBvbiBrZXkgdXAgb3Igbm90LiBCeSBkZWZhdWx0IHRoZSB2YWx1ZSBpcyB2YWxpZGF0ZWQgd2hlbiB0aGUgdXNlciBibHVyJ3MgdGhlIHZhbHVlIGlucHV0LiBUaGUgdmFsaWRhdGlvblRpbWVvdXQgZGV0ZXJtaW5lcyB0aGUgdGltZSBpbnRlcnZhbCBhZnRlciB0aGUgdXNlciBoYXMgZW5kZWQgdHlwaW5nIHRoYXQgdHJpZ2dlcnMgdGhlIHZhbHVlIHZhbGlkYXRpb24uICovXG5cdEBJbnB1dCgpXG5cdGdldCB2YWxpZGF0ZU9uSW5wdXQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC52YWxpZGF0ZU9uSW5wdXQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHZhbGlkYXRlT25JbnB1dCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC52YWxpZGF0ZU9uSW5wdXQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgdGltZW91dCAoc3RhcnRpbmcgYWZ0ZXIgdGhlIHVzZXIgaGFzIGZpbmlzaGVkIHR5cGluZyBpbiB0aGUgdmFsdWUgZmllbGQpIGJlZm9yZSB0aGUgdmFsaWRhdGlvbiBpcyBhcHBsaWVkIHRvIHRoZSBjb25kaXRpb24gdmFsdWUuIFRoaXMgcHJvcGVydHkgd29ya3MgYWxvbmcgdmFsaWRhdGlvbk9uSW5wdXQuICovXG5cdEBJbnB1dCgpXG5cdGdldCB2YWxpZGF0aW9uVGltZW91dCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudmFsaWRhdGlvblRpbWVvdXQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHZhbGlkYXRpb25UaW1lb3V0KHZhbHVlOiBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudmFsaWRhdGlvblRpbWVvdXQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhlIHZhbHVlIGlzIHJlcHJlc2VudGVkIGJ5IG11bHRpZGltZW5zaW9uYWwgYXJyYXkuIFRoZSBhcnJheSBjb250YWlucyBncm91cCBvcGVyYXRvcnMgd2l0aCBjb25kaXRpb25zLiBFYWNoIGdyb3VwIGNhbiBjb250YWluIG11bHRpcGxlIGNvbmRpdGlvbnMuICovXG5cdEBJbnB1dCgpXG5cdGdldCB2YWx1ZSgpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHZhbHVlKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ2FsbGJhY2sgdXNlZCB0byBmb3JtYXQgdGhlIGNvbnRlbnQgb2YgdGhlIGNvbmRpdGlvbiB2YWx1ZSBmaWVsZHMuICovXG5cdEBJbnB1dCgpXG5cdGdldCB2YWx1ZUZvcm1hdEZ1bmN0aW9uKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC52YWx1ZUZvcm1hdEZ1bmN0aW9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB2YWx1ZUZvcm1hdEZ1bmN0aW9uKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudmFsdWVGb3JtYXRGdW5jdGlvbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBwbGFjZWhvbGRlciB0ZXh0IHVzZWQgaW5zaWRlIHRoZSBjb25kaXRpb24ncyB2YWx1ZSBib3ggaW4gY2FzZSBhIHZhbHVlIGlzIG5vdCBzZXQuICovXG5cdEBJbnB1dCgpXG5cdGdldCB2YWx1ZVBsYWNlaG9sZGVyKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC52YWx1ZVBsYWNlaG9sZGVyIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB2YWx1ZVBsYWNlaG9sZGVyKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudmFsdWVQbGFjZWhvbGRlciA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBxdWVyeSBidWlsZGVyJ3MgdmFsdWUgaXMgY2hhbmdlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRpdGVtLCBcdGRhdGEsIFx0b3JpZ2luYWxFdmVudClcblx0KiAgIGl0ZW0gLSBUaGUgaXRlbSB0aGF0IGlzIGJlaW5nIGRyYWdnZWQuXG5cdCogICBkYXRhIC0gVGhlIGRhdGEgb2YgdGhlIGl0ZW0gdGhhdCBpcyBiZWluZyBkcmFnZ2VkLlxuXHQqICAgb3JpZ2luYWxFdmVudCAtIFRoZSBvcmlnaW5hbCBldmVudC5cblx0Ki9cblx0QE91dHB1dCgpIG9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIGRyYWdnZWQgY29uZGl0aW9uIGlzIGRyb3BwZWQuIFRoaXMgYWN0aW9uIGNhbiBiZSBjYW5jZWxlZCBieSBjYWxsaW5nIGV2ZW50LnByZXZlbnREZWZhdWx0KCkgaW4gdGhlIGV2ZW50IGhhbmRsZXIgZnVuY3Rpb24uXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0aXRlbSwgXHRkYXRhLCBcdHRhcmdldCwgXHR0YXJnZXREYXRhLCBcdHRhcmdldFNpZGUpXG5cdCogICBpdGVtIC0gVGhlIGl0ZW0gdGhhdCBpcyBiZWluZyBkcmFnZ2VkLlxuXHQqICAgZGF0YSAtIFRoZSBkYXRhIG9mIHRoZSBpdGVtIHRoYXQgaXMgYmVpbmcgZHJhZ2dlZC5cblx0KiAgIHRhcmdldCAtIFRoZSB0YXJnZXQgaXRlbS5cblx0KiAgIHRhcmdldERhdGEgLSB0aGUgZGF0YSBvZiB0aGUgdGFyZ2V0IGl0ZW0uXG5cdCogICB0YXJnZXRTaWRlIC0gVGhlIHNpZGUgb2YgdGhlIHRhcmdldCBpdGVtIHdoZXJlIHRoZSBkcmFnZ2VkIGl0ZW0gd2lsbCBiZSBkcm9wcGVkLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25EcmFnRW5kOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIGNvbmRpdGlvbiBpcyBiZWluZyBkcmFnZ2VkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGl0ZW0sIFx0ZGF0YSwgXHRvcmlnaW5hbEV2ZW50KVxuXHQqICAgaXRlbSAtIFRoZSBpdGVtIHRoYXQgaXMgYmVpbmcgZHJhZ2dlZC5cblx0KiAgIGRhdGEgLSBUaGUgZGF0YSBvZiB0aGUgaXRlbSB0aGF0IGlzIGJlaW5nIGRyYWdnZWQuXG5cdCogICBvcmlnaW5hbEV2ZW50IC0gVGhlIG9yaWdpbmFsIGV2ZW50LlxuXHQqL1xuXHRAT3V0cHV0KCkgb25EcmFnZ2luZzogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSBkcmFnZ2luZyBvcGVyYXRpb24gaXMgc3RhcnRlZCBpbiBzbWFydC1xdWVyeS1idWlsZGVyLiBUaGlzIGFjdGlvbiBjYW4gYmUgY2FuY2VsZWQgYnkgY2FsbGluZyBldmVudC5wcmV2ZW50RGVmYXVsdCgpIGluIHRoZSBldmVudCBoYW5kbGVyIGZ1bmN0aW9uLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGl0ZW0sIFx0ZGF0YSwgXHRvcmlnaW5hbEV2ZW50KVxuXHQqICAgaXRlbSAtIFRoZSBpdGVtIGlzIGdvaW5nIHRvIGJlIGRyYWdnZWQuXG5cdCogICBkYXRhIC0gVGhlIGRhdGEgb2YgdGhlIGl0ZW0gdGhhdCBpcyBnb2luZyB0byBiZSBkcmFnZ2VkLlxuXHQqICAgb3JpZ2luYWxFdmVudCAtIFRoZSBvcmlnaW5hbCBldmVudC5cblx0Ki9cblx0QE91dHB1dCgpIG9uRHJhZ1N0YXJ0OiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBvbmUgb2YgdGhlIHF1ZXJ5IGJ1aWxkZXIncyBidWlsZGluZyBibG9ja3MgKCBvZXByYXRvciwgZmllbGROYW1lLCB2YWx1ZSwgY2xvc2UgYnV0dG9uLCBldGMpIGlzIGNsaWNrZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0aWQsIFx0dHlwZSwgXHRkYXRhKVxuXHQqICAgaWQgLSBUaGUgaW50ZXJuYWwgaWQgb2YgdGhlIGNsaWNrZWQgaXRlbSwgZS5nLiAnMC4xJywgJzEuMScsIGV0Yy5cblx0KiAgIHR5cGUgLSBUaGUgdHlwZSBvZiB0aGUgY2xpY2tlZCBpdGVtICggY29uZGl0aW9uIG9yIGEgZ3JvdXAgKS5cblx0KiAgIGRhdGEgLSBUaGUgZGF0YSBvZiB0aGUgaXRlbS5cblx0Ki9cblx0QE91dHB1dCgpIG9uSXRlbUNsaWNrOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIGZpZWxkIGhhcyBiZWVuIHNlbGVjdGVkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGxhYmVsLCBcdHZhbHVlKVxuXHQqICAgbGFiZWwgLSBUaGUgbGFiZWwgb2YgdGhlIHNlbGVjdGVkIHByb3BlcnR5LlxuXHQqICAgdmFsdWUgLSBUaGUgdmFsdWUgb2YgdGhlIHNlbGVjdGVkIHByb3BlcnR5LlxuXHQqL1xuXHRAT3V0cHV0KCkgb25Qcm9wZXJ0eVNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ29udmVydHMgdGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhlIGVsZW1lbnQgdG8gRHluYW1pY0xJTlEgZXhwcmVzc2lvbi4gXG5cdCogQHJldHVybnMge3N0cmluZ31cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldExpbnEoKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldExpbnEoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXG5cdGdldCBpc1JlbmRlcmVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCA6IGZhbHNlO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXG4gICAgICB0aGF0Lm9uQ3JlYXRlLmVtaXQodGhhdC5uYXRpdmVFbGVtZW50KTtcblxuXHRcdFNtYXJ0LlJlbmRlcigpO1xuXG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NtYXJ0LWFuZ3VsYXInKTtcblxuXHRcdHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4geyB0aGF0Lm9uUmVhZHkuZW1pdCh0aGF0Lm5hdGl2ZUVsZW1lbnQpOyB9KTtcblx0XHR0aGlzLmxpc3RlbigpO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy51bmxpc3RlbigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXHRcdGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQgJiYgdGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcblx0XHRcdGZvciAoY29uc3QgcHJvcE5hbWUgaW4gY2hhbmdlcykge1xuXHRcdFx0XHRpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcblx0XHRcdFx0XHR0aGlzLm5hdGl2ZUVsZW1lbnRbcHJvcE5hbWVdID0gY2hhbmdlc1twcm9wTmFtZV0uY3VycmVudFZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBZGQgZXZlbnQgbGlzdGVuZXJzLiAqL1xuXHRwcml2YXRlIGxpc3RlbigpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjaGFuZ2VIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25DaGFuZ2UuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhhdC5ldmVudEhhbmRsZXJzWydjaGFuZ2VIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydkcmFnRW5kSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uRHJhZ0VuZC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnRW5kJywgdGhhdC5ldmVudEhhbmRsZXJzWydkcmFnRW5kSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snZHJhZ2dpbmdIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25EcmFnZ2luZy5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZ2luZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snZHJhZ2dpbmdIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydkcmFnU3RhcnRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25EcmFnU3RhcnQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ1N0YXJ0JywgdGhhdC5ldmVudEhhbmRsZXJzWydkcmFnU3RhcnRIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydpdGVtQ2xpY2tIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25JdGVtQ2xpY2suZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaXRlbUNsaWNrJywgdGhhdC5ldmVudEhhbmRsZXJzWydpdGVtQ2xpY2tIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydwcm9wZXJ0eVNlbGVjdGVkSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uUHJvcGVydHlTZWxlY3RlZC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdwcm9wZXJ0eVNlbGVjdGVkJywgdGhhdC5ldmVudEhhbmRsZXJzWydwcm9wZXJ0eVNlbGVjdGVkSGFuZGxlciddKTtcblxuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZW1vdmUgZXZlbnQgbGlzdGVuZXJzLiAqL1xuXHRwcml2YXRlIHVubGlzdGVuKCk6IHZvaWQge1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjaGFuZ2VIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5nZUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snZHJhZ0VuZEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdFbmQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2RyYWdFbmRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2RyYWdnaW5nSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ2dpbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2RyYWdnaW5nSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydkcmFnU3RhcnRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnU3RhcnQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2RyYWdTdGFydEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snaXRlbUNsaWNrSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignaXRlbUNsaWNrJywgdGhhdC5ldmVudEhhbmRsZXJzWydpdGVtQ2xpY2tIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3Byb3BlcnR5U2VsZWN0ZWRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdwcm9wZXJ0eVNlbGVjdGVkJywgdGhhdC5ldmVudEhhbmRsZXJzWydwcm9wZXJ0eVNlbGVjdGVkSGFuZGxlciddKTtcblx0XHR9XG5cblx0fVxufVxuIl19