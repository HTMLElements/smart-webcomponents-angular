
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.querybuilder';

import { __decorate, __extends, __awaiter, __generator } from 'tslib';
import { EventEmitter, Output, Input, ElementRef, Directive, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

var BaseElement = /** @class */ (function () {
    function BaseElement(ref) {
        this.onCreate = new EventEmitter();
        this.onReady = new EventEmitter();
        this.onAttach = new EventEmitter();
        this.onDetach = new EventEmitter();
        var that = this;
        this.nativeElement = ref.nativeElement;
        that.nativeElement.onAttached = function () {
            that.onAttach.emit(that.nativeElement);
        };
        that.nativeElement.onDetached = function () {
            that.onDetach.emit(that.nativeElement);
        };
    }
    BaseElement.prototype.addEventListener = function (type, listener, options) {
        if (options === void 0) { options = false; }
        this.nativeElement.addEventListener(type, listener, options);
    };
    BaseElement.prototype.removeEventListener = function (type, listener, options) {
        if (options === void 0) { options = false; }
        this.nativeElement.removeEventListener(type, listener, options);
    };
    BaseElement.prototype.dispatchEvent = function (event) {
        return this.nativeElement.dispatchEvent(event);
    };
    BaseElement.prototype.blur = function () {
        this.nativeElement.blur();
    };
    BaseElement.prototype.click = function () {
        this.nativeElement.click();
    };
    BaseElement.prototype.focus = function (options) {
        this.nativeElement.focus(options);
    };
    Object.defineProperty(BaseElement.prototype, "locale", {
        /** @description Sets or gets the language. Used in conjunction with the property messages.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.locale : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.locale = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseElement.prototype, "localizeFormatFunction", {
        /** @description Callback used to customize the format of the messages that are returned from the Localization Module. */
        get: function () {
            return this.nativeElement ? this.nativeElement.localizeFormatFunction : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.localizeFormatFunction = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseElement.prototype, "messages", {
        /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.messages : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.messages = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseElement.prototype, "rightToLeft", {
        /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
        get: function () {
            return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseElement.prototype, "theme", {
        /** @description Determines the theme. Theme defines the look of the element */
        get: function () {
            return this.nativeElement ? this.nativeElement.theme : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.theme = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
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
    return BaseElement;
}());
var Smart = window.Smart;

var QueryBuilderComponent = /** @class */ (function (_super) {
    __extends(QueryBuilderComponent, _super);
    function QueryBuilderComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        /** @description This event is triggered when the query builder's value is changed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	data, 	originalEvent)
        *   item - The item that is being dragged.
        *   data - The data of the item that is being dragged.
        *   originalEvent - The original event.
        */
        _this.onChange = new EventEmitter();
        /** @description This event is triggered when a dragged condition is dropped. This action can be canceled by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	data, 	target, 	targetData, 	targetSide)
        *   item - The item that is being dragged.
        *   data - The data of the item that is being dragged.
        *   target - The target item.
        *   targetData - the data of the target item.
        *   targetSide - The side of the target item where the dragged item will be dropped.
        */
        _this.onDragEnd = new EventEmitter();
        /** @description This event is triggered when a condition is being dragged.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	data, 	originalEvent)
        *   item - The item that is being dragged.
        *   data - The data of the item that is being dragged.
        *   originalEvent - The original event.
        */
        _this.onDragging = new EventEmitter();
        /** @description This event is triggered when a dragging operation is started in smart-query-builder. This action can be canceled by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	data, 	originalEvent)
        *   item - The item is going to be dragged.
        *   data - The data of the item that is going to be dragged.
        *   originalEvent - The original event.
        */
        _this.onDragStart = new EventEmitter();
        /** @description This event is triggered when one of the query builder's building blocks ( oeprator, fieldName, value, close button, etc) is clicked.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	type, 	data)
        *   id - The internal id of the clicked item, e.g. '0.1', '1.1', etc.
        *   type - The type of the clicked item ( condition or a group ).
        *   data - The data of the item.
        */
        _this.onItemClick = new EventEmitter();
        /** @description This event is triggered when a field has been selected.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	value)
        *   label - The label of the selected property.
        *   value - The value of the selected property.
        */
        _this.onPropertySelected = new EventEmitter();
        /** @description This event is triggered when the component validates the input values. This happens when you input a new value and focus another component.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	newValue)
        *   oldValue - Old validation status.
        *   newValue - New validation status.
        */
        _this.onValidationChange = new EventEmitter();
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    QueryBuilderComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('smart-query-builder');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(QueryBuilderComponent.prototype, "allowDrag", {
        /** @description Enables the dragging of conditions inside a group or between groups. */
        get: function () {
            return this.nativeElement ? this.nativeElement.allowDrag : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.allowDrag = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryBuilderComponent.prototype, "animation", {
        /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
        get: function () {
            return this.nativeElement ? this.nativeElement.animation : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.animation = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryBuilderComponent.prototype, "applyMode", {
        /** @description Determines when the value of the element is updated with the new changes. */
        get: function () {
            return this.nativeElement ? this.nativeElement.applyMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.applyMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryBuilderComponent.prototype, "autoApplyValue", {
        /** @description When 'applyMode' is set to 'immediately', the default value is applied to the editor's value and the QueryBuilder's value is updated automatically. */
        get: function () {
            return this.nativeElement ? this.nativeElement.autoApplyValue : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.autoApplyValue = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryBuilderComponent.prototype, "autoPrompt", {
        /** @description Determines whether QueryBuilder will automatically prompt the user to enter a condition value when a new condition is created. When 'applyMode' is set to 'immediately', the operation field is automatically populated if empty when the selected condition operator is changed. The input field prompts the user when the operation or operator of the condition is changed. */
        get: function () {
            return this.nativeElement ? this.nativeElement.autoPrompt : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.autoPrompt = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryBuilderComponent.prototype, "customOperations", {
        /** @description Adds more operations that can be used to the query bilder's conditions structure. Each custom operation can have the following fields: */
        get: function () {
            return this.nativeElement ? this.nativeElement.customOperations : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.customOperations = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryBuilderComponent.prototype, "disabled", {
        /** @description Enables or disables the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.disabled : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disabled = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryBuilderComponent.prototype, "dropDownWidth", {
        /** @description Sets or gets the dropdown width of the property and operator editors. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dropDownWidth : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dropDownWidth = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryBuilderComponent.prototype, "fields", {
        /** @description Array with filter fields and their settings. The available field settings are:label - the field's label, as it will appear in the field selection drop downdataField - the field's data fielddataType - the field's data typefilterOperations - an array of the filter operations applicable to the field; if not set, the default filter operations are appliedlookup - an object with settings for customizing the field's respective value selection input. It has the following settings:autoCompleteDelay - delay between typing in the input and opening the drop down with available optionsdataSource - an array of available options to choose from (appear in a drop down)minLength - minimum number of charactes to type in the input before the options drop down is displayedreadonly - if set to true, the value selection input acts as a drop down list, otherwise it acts as a combo box */
        get: function () {
            return this.nativeElement ? this.nativeElement.fields : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.fields = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryBuilderComponent.prototype, "fieldsMode", {
        /** @description Determines whether new fields can be dynamically added by typing in the field (property) box. */
        get: function () {
            return this.nativeElement ? this.nativeElement.fieldsMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.fieldsMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryBuilderComponent.prototype, "formatStringDate", {
        /** @description Sets or gets the format string of the editor of fields with type 'date'. */
        get: function () {
            return this.nativeElement ? this.nativeElement.formatStringDate : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.formatStringDate = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryBuilderComponent.prototype, "formatStringDateTime", {
        /** @description Sets or gets the format string of the editor of fields with type 'dateTime'. */
        get: function () {
            return this.nativeElement ? this.nativeElement.formatStringDateTime : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.formatStringDateTime = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryBuilderComponent.prototype, "getDynamicField", {
        /** @description A callback function called when a field is added dynamically. Used for configuring settings of the new field. Applicable only when fieldsMode is 'dynamic'. */
        get: function () {
            return this.nativeElement ? this.nativeElement.getDynamicField : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.getDynamicField = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryBuilderComponent.prototype, "icons", {
        /** @description Defines CSS classes to be applied to each of the built-in operations. Icons for these classes are applied in the smart-query-builder style sheet. This property is applicable only if showIcons is set to true. */
        get: function () {
            return this.nativeElement ? this.nativeElement.icons : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.icons = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryBuilderComponent.prototype, "locale", {
        /** @description Sets or gets the language. Used in conjunction with the property messages.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.locale : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.locale = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryBuilderComponent.prototype, "localizeFormatFunction", {
        /** @description Callback used to customize the format of the messages that are returned from the Localization Module. */
        get: function () {
            return this.nativeElement ? this.nativeElement.localizeFormatFunction : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.localizeFormatFunction = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryBuilderComponent.prototype, "messages", {
        /** @description Defines field names of the filtered element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.messages : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.messages = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryBuilderComponent.prototype, "operatorPlaceholder", {
        /** @description Determines the placeholder text used inside the condition's operator box in case an operator is not selected. */
        get: function () {
            return this.nativeElement ? this.nativeElement.operatorPlaceholder : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.operatorPlaceholder = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryBuilderComponent.prototype, "propertyPlaceholder", {
        /** @description Determines the placeholder text used inside the condition's field (property) box in case a field is not selected. */
        get: function () {
            return this.nativeElement ? this.nativeElement.propertyPlaceholder : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.propertyPlaceholder = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryBuilderComponent.prototype, "rightToLeft", {
        /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
        get: function () {
            return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryBuilderComponent.prototype, "showIcons", {
        /** @description Shows/Hides the operator icons shown in the operator selection drop down. */
        get: function () {
            return this.nativeElement ? this.nativeElement.showIcons : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.showIcons = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryBuilderComponent.prototype, "showFieldNameArrow", {
        /** @description Shows/Hides the drop down icon for the operator field name of the conditions. */
        get: function () {
            return this.nativeElement ? this.nativeElement.showFieldNameArrow : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.showFieldNameArrow = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryBuilderComponent.prototype, "theme", {
        /** @description Determines the theme. Theme defines the look of the element */
        get: function () {
            return this.nativeElement ? this.nativeElement.theme : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.theme = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryBuilderComponent.prototype, "unfocusable", {
        /** @description If is set to true, the element cannot be focused. */
        get: function () {
            return this.nativeElement ? this.nativeElement.unfocusable : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.unfocusable = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryBuilderComponent.prototype, "validateOnInput", {
        /** @description Determines whether the value of the condition is validated on key up or not. By default the value is validated when the user blur's the value input. The validationTimeout determines the time interval after the user has ended typing that triggers the value validation. */
        get: function () {
            return this.nativeElement ? this.nativeElement.validateOnInput : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.validateOnInput = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryBuilderComponent.prototype, "validationTimeout", {
        /** @description Determines the timeout (starting after the user has finished typing in the value field) before the validation is applied to the condition value. This property works along validationOnInput. */
        get: function () {
            return this.nativeElement ? this.nativeElement.validationTimeout : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.validationTimeout = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryBuilderComponent.prototype, "value", {
        /** @description The value is represented by multidimensional array. The array contains group operators with conditions. Each group can contain multiple conditions. */
        get: function () {
            return this.nativeElement ? this.nativeElement.value : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.value = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryBuilderComponent.prototype, "valueFormatFunction", {
        /** @description Callback used to format the content of the condition value fields. */
        get: function () {
            return this.nativeElement ? this.nativeElement.valueFormatFunction : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.valueFormatFunction = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryBuilderComponent.prototype, "valuePlaceholder", {
        /** @description Determines the placeholder text used inside the condition's value box in case a value is not set. */
        get: function () {
            return this.nativeElement ? this.nativeElement.valuePlaceholder : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.valuePlaceholder = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /** @description Converts the current value of the element to DynamicLINQ expression.
    * @returns {string}
  */
    QueryBuilderComponent.prototype.getLinq = function () {
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getLinq();
                                    resolve(result);
                                });
                            });
                        };
                        return [4 /*yield*/, getResultOnRender()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    Object.defineProperty(QueryBuilderComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    QueryBuilderComponent.prototype.ngOnInit = function () {
    };
    QueryBuilderComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        this.listen();
    };
    QueryBuilderComponent.prototype.ngOnDestroy = function () {
        this.unlisten();
    };
    QueryBuilderComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    /** @description Add event listeners. */
    QueryBuilderComponent.prototype.listen = function () {
        var that = this;
        that.eventHandlers['changeHandler'] = function (event) { that.onChange.emit(event); };
        that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
        that.eventHandlers['dragEndHandler'] = function (event) { that.onDragEnd.emit(event); };
        that.nativeElement.addEventListener('dragEnd', that.eventHandlers['dragEndHandler']);
        that.eventHandlers['draggingHandler'] = function (event) { that.onDragging.emit(event); };
        that.nativeElement.addEventListener('dragging', that.eventHandlers['draggingHandler']);
        that.eventHandlers['dragStartHandler'] = function (event) { that.onDragStart.emit(event); };
        that.nativeElement.addEventListener('dragStart', that.eventHandlers['dragStartHandler']);
        that.eventHandlers['itemClickHandler'] = function (event) { that.onItemClick.emit(event); };
        that.nativeElement.addEventListener('itemClick', that.eventHandlers['itemClickHandler']);
        that.eventHandlers['propertySelectedHandler'] = function (event) { that.onPropertySelected.emit(event); };
        that.nativeElement.addEventListener('propertySelected', that.eventHandlers['propertySelectedHandler']);
        that.eventHandlers['validationChangeHandler'] = function (event) { that.onValidationChange.emit(event); };
        that.nativeElement.addEventListener('validationChange', that.eventHandlers['validationChangeHandler']);
    };
    /** @description Remove event listeners. */
    QueryBuilderComponent.prototype.unlisten = function () {
        var that = this;
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
        if (that.eventHandlers['validationChangeHandler']) {
            that.nativeElement.removeEventListener('validationChange', that.eventHandlers['validationChangeHandler']);
        }
    };
    QueryBuilderComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], QueryBuilderComponent.prototype, "allowDrag", null);
    __decorate([
        Input()
    ], QueryBuilderComponent.prototype, "animation", null);
    __decorate([
        Input()
    ], QueryBuilderComponent.prototype, "applyMode", null);
    __decorate([
        Input()
    ], QueryBuilderComponent.prototype, "autoApplyValue", null);
    __decorate([
        Input()
    ], QueryBuilderComponent.prototype, "autoPrompt", null);
    __decorate([
        Input()
    ], QueryBuilderComponent.prototype, "customOperations", null);
    __decorate([
        Input()
    ], QueryBuilderComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], QueryBuilderComponent.prototype, "dropDownWidth", null);
    __decorate([
        Input()
    ], QueryBuilderComponent.prototype, "fields", null);
    __decorate([
        Input()
    ], QueryBuilderComponent.prototype, "fieldsMode", null);
    __decorate([
        Input()
    ], QueryBuilderComponent.prototype, "formatStringDate", null);
    __decorate([
        Input()
    ], QueryBuilderComponent.prototype, "formatStringDateTime", null);
    __decorate([
        Input()
    ], QueryBuilderComponent.prototype, "getDynamicField", null);
    __decorate([
        Input()
    ], QueryBuilderComponent.prototype, "icons", null);
    __decorate([
        Input()
    ], QueryBuilderComponent.prototype, "locale", null);
    __decorate([
        Input()
    ], QueryBuilderComponent.prototype, "localizeFormatFunction", null);
    __decorate([
        Input()
    ], QueryBuilderComponent.prototype, "messages", null);
    __decorate([
        Input()
    ], QueryBuilderComponent.prototype, "operatorPlaceholder", null);
    __decorate([
        Input()
    ], QueryBuilderComponent.prototype, "propertyPlaceholder", null);
    __decorate([
        Input()
    ], QueryBuilderComponent.prototype, "rightToLeft", null);
    __decorate([
        Input()
    ], QueryBuilderComponent.prototype, "showIcons", null);
    __decorate([
        Input()
    ], QueryBuilderComponent.prototype, "showFieldNameArrow", null);
    __decorate([
        Input()
    ], QueryBuilderComponent.prototype, "theme", null);
    __decorate([
        Input()
    ], QueryBuilderComponent.prototype, "unfocusable", null);
    __decorate([
        Input()
    ], QueryBuilderComponent.prototype, "validateOnInput", null);
    __decorate([
        Input()
    ], QueryBuilderComponent.prototype, "validationTimeout", null);
    __decorate([
        Input()
    ], QueryBuilderComponent.prototype, "value", null);
    __decorate([
        Input()
    ], QueryBuilderComponent.prototype, "valueFormatFunction", null);
    __decorate([
        Input()
    ], QueryBuilderComponent.prototype, "valuePlaceholder", null);
    __decorate([
        Output()
    ], QueryBuilderComponent.prototype, "onChange", void 0);
    __decorate([
        Output()
    ], QueryBuilderComponent.prototype, "onDragEnd", void 0);
    __decorate([
        Output()
    ], QueryBuilderComponent.prototype, "onDragging", void 0);
    __decorate([
        Output()
    ], QueryBuilderComponent.prototype, "onDragStart", void 0);
    __decorate([
        Output()
    ], QueryBuilderComponent.prototype, "onItemClick", void 0);
    __decorate([
        Output()
    ], QueryBuilderComponent.prototype, "onPropertySelected", void 0);
    __decorate([
        Output()
    ], QueryBuilderComponent.prototype, "onValidationChange", void 0);
    QueryBuilderComponent = __decorate([
        Directive({
            exportAs: 'smart-query-builder', selector: 'smart-query-builder, [smart-query-builder]'
        })
    ], QueryBuilderComponent);
    return QueryBuilderComponent;
}(BaseElement));

var QueryBuilderModule = /** @class */ (function () {
    function QueryBuilderModule() {
    }
    QueryBuilderModule = __decorate([
        NgModule({
            declarations: [QueryBuilderComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            exports: [QueryBuilderComponent]
        })
    ], QueryBuilderModule);
    return QueryBuilderModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { QueryBuilderComponent, QueryBuilderModule, Smart, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-querybuilder.js.map
