
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.form';

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

var FormComponent = /** @class */ (function (_super) {
    __extends(FormComponent, _super);
    function FormComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    FormComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('smart-form');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(FormComponent.prototype, "columns", {
        /** @description Sets or gets the form columns. */
        get: function () {
            return this.nativeElement ? this.nativeElement.columns : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.columns = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormComponent.prototype, "controls", {
        /** @description Sets or gets the form controls. */
        get: function () {
            return this.nativeElement ? this.nativeElement.controls : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.controls = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormComponent.prototype, "onStatusChanges", {
        /** @description Sets or Gets the labels position. */
        get: function () {
            return this.nativeElement ? this.nativeElement.onStatusChanges : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.onStatusChanges = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormComponent.prototype, "onValueChanges", {
        /** @description Makes the form readonly. */
        get: function () {
            return this.nativeElement ? this.nativeElement.onValueChanges : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.onValueChanges = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormComponent.prototype, "labelPosition", {
        /** @description Shows / hides the colon after the labels. */
        get: function () {
            return this.nativeElement ? this.nativeElement.labelPosition : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.labelPosition = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormComponent.prototype, "readonly", {
        /** @description Shows / hides validation summary. */
        get: function () {
            return this.nativeElement ? this.nativeElement.readonly : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.readonly = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormComponent.prototype, "showColonAfterLabel", {
        /** @description Gets the Form's state. Each member in the state has { dirty, untouched, disabled } properties. */
        get: function () {
            return this.nativeElement ? this.nativeElement.showColonAfterLabel : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.showColonAfterLabel = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormComponent.prototype, "showSummary", {
        /** @description Gets or Sets the Form value. */
        get: function () {
            return this.nativeElement ? this.nativeElement.showSummary : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.showSummary = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormComponent.prototype, "state", {
        /** @description Automatically validates the form when it is created. */
        get: function () {
            return this.nativeElement ? this.nativeElement.state : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.state = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormComponent.prototype, "value", {
        /** @description undefined */
        get: function () {
            return this.nativeElement ? this.nativeElement.value : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.value = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormComponent.prototype, "validateOnLoad", {
        /** @description undefined */
        get: function () {
            return this.nativeElement ? this.nativeElement.validateOnLoad : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.validateOnLoad = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /** @description Adds a control to the Form.
    * @param {any} controlOptions. Control options. The control options description is available in the <em>controls</em> property.
    */
    FormComponent.prototype.addControl = function (controlOptions) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.addControl(controlOptions);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.addControl(controlOptions);
            });
        }
    };
    /** @description Gets a control by its name(dataField).
    * @param {string} dataField. dataField of a FormControl or FormGroup
    * @returns {Control}
  */
    FormComponent.prototype.getControl = function (dataField) {
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getControl(dataField);
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
    /** @description Inserts a control to the Form.
    * @param {number} index. Control insert index
    * @param {any} controlOptions. Control options. The control options description is available in the <em>controls</em> property.
    */
    FormComponent.prototype.insertControl = function (index, controlOptions) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertControl(index, controlOptions);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.insertControl(index, controlOptions);
            });
        }
    };
    /** @description Remove a control from the Form.
    * @param {any} controlOptions. Control options. The control options description is available in the <em>controls</em> property.
    */
    FormComponent.prototype.removeControl = function (controlOptions) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeControl(controlOptions);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.removeControl(controlOptions);
            });
        }
    };
    /** @description Submits the form.
    * @param {any} submitOptions?. Sets the submit options object. The object may have the following properties: <em>async</em>, <em>action</em>, <em>target</em>, <em>method</em>. <em>async</em> determines whether the form will be submitted asynchronously. <em>action</em> determines the submit url, <em>method</em> sets whether the submit is through 'GET' or 'POST'. <em>target</em> determines the submit target.
    */
    FormComponent.prototype.submit = function (submitOptions) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.submit(submitOptions);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.submit(submitOptions);
            });
        }
    };
    /** @description Clears the form.
    */
    FormComponent.prototype.reset = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.reset();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.reset();
            });
        }
    };
    /** @description Validates the form.
    */
    FormComponent.prototype.validate = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.validate();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.validate();
            });
        }
    };
    Object.defineProperty(FormComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    FormComponent.prototype.ngOnInit = function () {
    };
    FormComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        this.listen();
    };
    FormComponent.prototype.ngOnDestroy = function () {
        this.unlisten();
    };
    FormComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    /** @description Add event listeners. */
    FormComponent.prototype.listen = function () {
        var that = this;
    };
    /** @description Remove event listeners. */
    FormComponent.prototype.unlisten = function () {
        var that = this;
    };
    FormComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
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
    return FormComponent;
}(BaseElement));

var FormControlComponent = /** @class */ (function (_super) {
    __extends(FormControlComponent, _super);
    function FormControlComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    FormControlComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('smart-form-control');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(FormControlComponent.prototype, "action", {
        /** @description Gets or Sets the FormControl Action. This property is used when the 'controlType' is 'button' or 'submit' */
        get: function () {
            return this.nativeElement ? this.nativeElement.action : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.action = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlComponent.prototype, "align", {
        /** @description Sets or Gets the alignment of the FormControl */
        get: function () {
            return this.nativeElement ? this.nativeElement.align : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.align = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlComponent.prototype, "appendHTML", {
        /** @description HTML Content displayed after the Form Control */
        get: function () {
            return this.nativeElement ? this.nativeElement.appendHTML : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.appendHTML = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlComponent.prototype, "controlOptions", {
        /** @description JSON object with initialization properties of the UI component. Example: { dataSource: ['item 1', 'item 2', 'item 3'] } will set the dataSource property of the Form control. */
        get: function () {
            return this.nativeElement ? this.nativeElement.controlOptions : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.controlOptions = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlComponent.prototype, "controlType", {
        /** @description The type of the control. */
        get: function () {
            return this.nativeElement ? this.nativeElement.controlType : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.controlType = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlComponent.prototype, "columns", {
        /** @description Sets the Form Group columns. */
        get: function () {
            return this.nativeElement ? this.nativeElement.columns : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.columns = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlComponent.prototype, "columnSpan", {
        /** @description Sets the Form control column span. */
        get: function () {
            return this.nativeElement ? this.nativeElement.columnSpan : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.columnSpan = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlComponent.prototype, "dataField", {
        /** @description Sets the Form control data field. The control's inner input's name is set to the dataField value and in the FormGroup it is accessible through the dataField value. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dataField : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dataField = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlComponent.prototype, "disabled", {
        /** @description Sets the Form control disabled mode. */
        get: function () {
            return this.nativeElement ? this.nativeElement.disabled : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disabled = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlComponent.prototype, "dirty", {
        /** @description Gets whether the Form control is 'dirty' i.e its value is changed by the user. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dirty : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dirty = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlComponent.prototype, "info", {
        /** @description Gets or Sets the Form control's info icon's tooltip. */
        get: function () {
            return this.nativeElement ? this.nativeElement.info : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.info = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlComponent.prototype, "invalid", {
        /** @description Gets whether the Form control is invalid. */
        get: function () {
            return this.nativeElement ? this.nativeElement.invalid : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.invalid = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlComponent.prototype, "label", {
        /** @description Gets or Sets the Form control's label. */
        get: function () {
            return this.nativeElement ? this.nativeElement.label : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.label = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlComponent.prototype, "labelPosition", {
        /** @description Gets or Sets the Form control's label position. */
        get: function () {
            return this.nativeElement ? this.nativeElement.labelPosition : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.labelPosition = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlComponent.prototype, "labelOffset", {
        /** @description Gets or Sets the offset between the label and the control. */
        get: function () {
            return this.nativeElement ? this.nativeElement.labelOffset : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.labelOffset = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlComponent.prototype, "labelAlign", {
        /** @description FormGroup only(when controlType is set to 'group'). Gets or Sets whether the navigation buttons are displayed. The property has effect when the viewMode property is set. */
        get: function () {
            return this.nativeElement ? this.nativeElement.labelAlign : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.labelAlign = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlComponent.prototype, "nextButtonLabel", {
        /** @description FormGroup only(when controlType is set to 'group'). Gets or Sets the next button label. */
        get: function () {
            return this.nativeElement ? this.nativeElement.nextButtonLabel : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.nextButtonLabel = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlComponent.prototype, "backButtonLabel", {
        /** @description FormGroup only(when controlType is set to 'group'). Gets or Sets the back button label. */
        get: function () {
            return this.nativeElement ? this.nativeElement.backButtonLabel : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.backButtonLabel = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlComponent.prototype, "placeholder", {
        /** @description Gets or Sets the FormControl placeholder. */
        get: function () {
            return this.nativeElement ? this.nativeElement.placeholder : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.placeholder = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlComponent.prototype, "prependHTML", {
        /** @description HTML Content displayed before the Form Control */
        get: function () {
            return this.nativeElement ? this.nativeElement.prependHTML : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.prependHTML = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlComponent.prototype, "readonly", {
        /** @description Gets or Sets the Form control readonly mode. */
        get: function () {
            return this.nativeElement ? this.nativeElement.readonly : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.readonly = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlComponent.prototype, "required", {
        /** @description Gets or Sets whether this field is required. */
        get: function () {
            return this.nativeElement ? this.nativeElement.required : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.required = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlComponent.prototype, "untouched", {
        /** @description Gets whether the Form control is not touched by the user. This flag is changed usually on blur, after the user interacted with the Form control */
        get: function () {
            return this.nativeElement ? this.nativeElement.untouched : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.untouched = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlComponent.prototype, "showColonAfterLabel", {
        /** @description Gets or Sets whether colon is displayed after the label. */
        get: function () {
            return this.nativeElement ? this.nativeElement.showColonAfterLabel : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.showColonAfterLabel = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlComponent.prototype, "showButtons", {
        /** @description FormGroup only(when controlType is set to 'group'). Gets or Sets whether the navigation buttons are displayed. The property has effect when the viewMode property is set. */
        get: function () {
            return this.nativeElement ? this.nativeElement.showButtons : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.showButtons = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlComponent.prototype, "value", {
        /** @description Sets or Gets the Form control or Form group value. */
        get: function () {
            return this.nativeElement ? this.nativeElement.value : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.value = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlComponent.prototype, "valid", {
        /** @description Gets whether the Form control is valid. */
        get: function () {
            return this.nativeElement ? this.nativeElement.valid : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.valid = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlComponent.prototype, "validationRules", {
        /** @description Sets or gets the column's validation rules. The expected value is an Array of Objects. Each object should have a 'type' property that can be set to 'required', 'min', 'max', 'minLength', 'maxLength', 'email', 'null', 'requiredTrue', 'minData', 'maxDate', 'pattern'. The 'value' property should be set, too. For validation rule types 'required', 'requiredTrue' and 'null' you can skip the 'value' property. Optional property is 'message', which determines the error message. */
        get: function () {
            return this.nativeElement ? this.nativeElement.validationRules : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.validationRules = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlComponent.prototype, "viewMode", {
        /** @description FormGroup only(when controlType is set to 'group'). Gets or Sets the form'group view mode. */
        get: function () {
            return this.nativeElement ? this.nativeElement.viewMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.viewMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    FormControlComponent.prototype.ngOnInit = function () {
    };
    FormControlComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        this.listen();
    };
    FormControlComponent.prototype.ngOnDestroy = function () {
        this.unlisten();
    };
    FormControlComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    /** @description Add event listeners. */
    FormControlComponent.prototype.listen = function () {
        var that = this;
    };
    /** @description Remove event listeners. */
    FormControlComponent.prototype.unlisten = function () {
        var that = this;
    };
    FormControlComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
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
    return FormControlComponent;
}(BaseElement));

var FormGroupComponent = /** @class */ (function (_super) {
    __extends(FormGroupComponent, _super);
    function FormGroupComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    FormGroupComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('smart-form-group');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(FormGroupComponent.prototype, "columns", {
        /** @description Sets or gets the form columns. */
        get: function () {
            return this.nativeElement ? this.nativeElement.columns : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.columns = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormGroupComponent.prototype, "dataField", {
        /** @description Sets the Form control data field. The control's inner input's name is set to the dataField value and in the FormGroup it is accessible through the dataField value. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dataField : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dataField = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormGroupComponent.prototype, "label", {
        /** @description Gets or Sets the Form control's label. */
        get: function () {
            return this.nativeElement ? this.nativeElement.label : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.label = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormGroupComponent.prototype, "controls", {
        /** @description  */
        get: function () {
            return this.nativeElement ? this.nativeElement.controls : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.controls = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormGroupComponent.prototype, "onStatusChanges", {
        /** @description Sets or Gets the labels position. */
        get: function () {
            return this.nativeElement ? this.nativeElement.onStatusChanges : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.onStatusChanges = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormGroupComponent.prototype, "onValueChanges", {
        /** @description Makes the form readonly. */
        get: function () {
            return this.nativeElement ? this.nativeElement.onValueChanges : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.onValueChanges = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormGroupComponent.prototype, "labelPosition", {
        /** @description Shows / hides the colon after the labels. */
        get: function () {
            return this.nativeElement ? this.nativeElement.labelPosition : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.labelPosition = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormGroupComponent.prototype, "readonly", {
        /** @description Shows / hides validation summary. */
        get: function () {
            return this.nativeElement ? this.nativeElement.readonly : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.readonly = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormGroupComponent.prototype, "showColonAfterLabel", {
        /** @description Gets or Sets the Form value. */
        get: function () {
            return this.nativeElement ? this.nativeElement.showColonAfterLabel : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.showColonAfterLabel = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormGroupComponent.prototype, "showSummary", {
        /** @description undefined */
        get: function () {
            return this.nativeElement ? this.nativeElement.showSummary : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.showSummary = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormGroupComponent.prototype, "value", {
        /** @description undefined */
        get: function () {
            return this.nativeElement ? this.nativeElement.value : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.value = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /** @description Adds a control to the Form.
    * @param {any} controlOptions. Control options. The control options description is available in the <em>controls</em> property.
    */
    FormGroupComponent.prototype.addControl = function (controlOptions) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.addControl(controlOptions);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.addControl(controlOptions);
            });
        }
    };
    /** @description Gets a control by its name(dataField).
    * @param {string} dataField. dataField of a FormControl or FormGroup
    * @returns {Control}
  */
    FormGroupComponent.prototype.getControl = function (dataField) {
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getControl(dataField);
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
    /** @description Inserts a control to the Form.
    * @param {number} index. Control insert index
    * @param {any} controlOptions. Control options. The control options description is available in the <em>controls</em> property.
    */
    FormGroupComponent.prototype.insertControl = function (index, controlOptions) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertControl(index, controlOptions);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.insertControl(index, controlOptions);
            });
        }
    };
    /** @description Remove a control from the Form.
    * @param {any} controlOptions. Control options. The control options description is available in the <em>controls</em> property.
    */
    FormGroupComponent.prototype.removeControl = function (controlOptions) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeControl(controlOptions);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.removeControl(controlOptions);
            });
        }
    };
    Object.defineProperty(FormGroupComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    FormGroupComponent.prototype.ngOnInit = function () {
    };
    FormGroupComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        this.listen();
    };
    FormGroupComponent.prototype.ngOnDestroy = function () {
        this.unlisten();
    };
    FormGroupComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    /** @description Add event listeners. */
    FormGroupComponent.prototype.listen = function () {
        var that = this;
    };
    /** @description Remove event listeners. */
    FormGroupComponent.prototype.unlisten = function () {
        var that = this;
    };
    FormGroupComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
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
    return FormGroupComponent;
}(BaseElement));

var FormModule = /** @class */ (function () {
    function FormModule() {
    }
    FormModule = __decorate([
        NgModule({
            declarations: [FormComponent, FormControlComponent, FormGroupComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            exports: [FormComponent, FormControlComponent, FormGroupComponent]
        })
    ], FormModule);
    return FormModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { FormComponent, FormControlComponent, FormGroupComponent, FormModule, Smart, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-form.js.map
