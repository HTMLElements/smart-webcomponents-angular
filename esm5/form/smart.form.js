import * as tslib_1 from "tslib";
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter, QueryList, ContentChildren } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Smart } from './smart.element';
var FormComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FormComponent, _super);
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
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
    tslib_1.__decorate([
        Input()
    ], FormComponent.prototype, "columns", null);
    tslib_1.__decorate([
        Input()
    ], FormComponent.prototype, "controls", null);
    tslib_1.__decorate([
        Input()
    ], FormComponent.prototype, "onStatusChanges", null);
    tslib_1.__decorate([
        Input()
    ], FormComponent.prototype, "onValueChanges", null);
    tslib_1.__decorate([
        Input()
    ], FormComponent.prototype, "labelPosition", null);
    tslib_1.__decorate([
        Input()
    ], FormComponent.prototype, "readonly", null);
    tslib_1.__decorate([
        Input()
    ], FormComponent.prototype, "showColonAfterLabel", null);
    tslib_1.__decorate([
        Input()
    ], FormComponent.prototype, "showSummary", null);
    tslib_1.__decorate([
        Input()
    ], FormComponent.prototype, "state", null);
    tslib_1.__decorate([
        Input()
    ], FormComponent.prototype, "value", null);
    tslib_1.__decorate([
        Input()
    ], FormComponent.prototype, "validateOnLoad", null);
    FormComponent = tslib_1.__decorate([
        Directive({
            exportAs: 'smart-form', selector: 'smart-form, [smart-form]'
        })
    ], FormComponent);
    return FormComponent;
}(BaseElement));
export { FormComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQuZm9ybS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NtYXJ0LXdlYmNvbXBvbmVudHMtYW5ndWxhci9mb3JtLyIsInNvdXJjZXMiOlsic21hcnQuZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0TCxPQUFPLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXJELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQVl4QztJQUFtQyx5Q0FBVztJQUU3Qyx1QkFBWSxHQUFxQjtRQUFqQyxZQUNDLGtCQUFNLEdBQUcsQ0FBQyxTQUVWO1FBRU8sbUJBQWEsR0FBVSxFQUFFLENBQUM7UUFIakMsS0FBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUMsYUFBcUIsQ0FBQzs7SUFDaEQsQ0FBQztJQUtEOztPQUVHO0lBQ0ksdUNBQWUsR0FBdEIsVUFBdUIsVUFBZTtRQUFmLDJCQUFBLEVBQUEsZUFBZTtRQUNsQyxJQUFJLENBQUMsYUFBYSxHQUFTLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbkUsS0FBSyxJQUFJLFlBQVksSUFBSSxVQUFVLEVBQUU7WUFDbkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDN0Q7UUFDRCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDM0IsQ0FBQztJQUdELHNCQUFJLGtDQUFPO1FBRlgsa0RBQWtEO2FBRWxEO1lBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJ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Y2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtIH0gZnJvbSAnLi8uLi9pbmRleCc7XG5pbXBvcnQgeyBDb250cm9sQ29udHJvbFR5cGUsIENvbnRyb2xMYWJlbFBvc2l0aW9uLCBDb250cm9sVmlld01vZGUsIEZvcm1MYWJlbFBvc2l0aW9uLCBDb250cm9sLCBFbGVtZW50UmVuZGVyTW9kZX0gZnJvbSAnLi8uLi9pbmRleCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIERpcmVjdGl2ZSwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIFNpbXBsZUNoYW5nZXMsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBRdWVyeUxpc3QsIENvbnRlbnRDaGlsZHJlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFzZUVsZW1lbnQsIFNtYXJ0IH0gZnJvbSAnLi9zbWFydC5lbGVtZW50JztcbmV4cG9ydCB7IENvbnRyb2xDb250cm9sVHlwZSwgQ29udHJvbExhYmVsUG9zaXRpb24sIENvbnRyb2xWaWV3TW9kZSwgRm9ybUxhYmVsUG9zaXRpb24sIENvbnRyb2wsIEVsZW1lbnRSZW5kZXJNb2RlfSBmcm9tICcuLy4uL2luZGV4JztcbmV4cG9ydCB7IFNtYXJ0IH0gZnJvbSAnLi9zbWFydC5lbGVtZW50JztcbmV4cG9ydCB7IEZvcm0gfSBmcm9tICcuLy4uL2luZGV4JztcblxuXG5pbXBvcnQgeyBGb3JtQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vc21hcnQuZm9ybWNvbnRyb2wnO1xuXG5pbXBvcnQgeyBGb3JtR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL3NtYXJ0LmZvcm1ncm91cCc7XG5cbkBEaXJlY3RpdmUoe1xuXHRleHBvcnRBczogJ3NtYXJ0LWZvcm0nLFx0c2VsZWN0b3I6ICdzbWFydC1mb3JtLCBbc21hcnQtZm9ybV0nXG59KVxuXG5leHBvcnQgY2xhc3MgRm9ybUNvbXBvbmVudCBleHRlbmRzIEJhc2VFbGVtZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG5cblx0Y29uc3RydWN0b3IocmVmOiBFbGVtZW50UmVmPEZvcm0+KSB7XG5cdFx0c3VwZXIocmVmKTtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPSByZWYubmF0aXZlRWxlbWVudCBhcyBGb3JtO1xuXHR9XG5cblx0cHJpdmF0ZSBldmVudEhhbmRsZXJzOiBhbnlbXSA9IFtdO1xuXG5cdHB1YmxpYyBuYXRpdmVFbGVtZW50OiBGb3JtO1xuXHQvKiogQGRlc2NyaXB0aW9uIENyZWF0ZXMgdGhlIGNvbXBvbmVudCBvbiBkZW1hbmQuXG5cdCAqIEBwYXJhbSBwcm9wZXJ0aWVzIEFuIG9wdGlvbmFsIG9iamVjdCBvZiBwcm9wZXJ0aWVzLCB3aGljaCB3aWxsIGJlIGFkZGVkIHRvIHRoZSB0ZW1wbGF0ZSBiaW5kZWQgb25lcy5cblx0ICovXG5cdHB1YmxpYyBjcmVhdGVDb21wb25lbnQocHJvcGVydGllcyA9IHt9KTogYW55IHtcbiAgICBcdHRoaXMubmF0aXZlRWxlbWVudCA9IDxGb3JtPmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NtYXJ0LWZvcm0nKTtcblx0XHRmb3IgKGxldCBwcm9wZXJ0eU5hbWUgaW4gcHJvcGVydGllcykgeyBcbiBcdFx0XHR0aGlzLm5hdGl2ZUVsZW1lbnRbcHJvcGVydHlOYW1lXSA9IHByb3BlcnRpZXNbcHJvcGVydHlOYW1lXTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudDtcblx0fVxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgZm9ybSBjb2x1bW5zLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgY29sdW1ucygpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sdW1ucyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgY29sdW1ucyh2YWx1ZTogbnVtYmVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbHVtbnMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSBmb3JtIGNvbnRyb2xzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgY29udHJvbHMoKTogQ29udHJvbFtdIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbnRyb2xzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjb250cm9scyh2YWx1ZTogQ29udHJvbFtdKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbnRyb2xzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgR2V0cyB0aGUgbGFiZWxzIHBvc2l0aW9uLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgb25TdGF0dXNDaGFuZ2VzKCk6IHsodmFsdWU6IHN0cmluZyk6IHZvaWR9IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uU3RhdHVzQ2hhbmdlcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgb25TdGF0dXNDaGFuZ2VzKHZhbHVlOiB7KHZhbHVlOiBzdHJpbmcpOiB2b2lkfSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vblN0YXR1c0NoYW5nZXMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gTWFrZXMgdGhlIGZvcm0gcmVhZG9ubHkuICovXG5cdEBJbnB1dCgpXG5cdGdldCBvblZhbHVlQ2hhbmdlcygpOiB7KHZhbHVlOiBhbnkpOiB2b2lkfSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vblZhbHVlQ2hhbmdlcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgb25WYWx1ZUNoYW5nZXModmFsdWU6IHsodmFsdWU6IGFueSk6IHZvaWR9KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uVmFsdWVDaGFuZ2VzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNob3dzIC8gaGlkZXMgdGhlIGNvbG9uIGFmdGVyIHRoZSBsYWJlbHMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBsYWJlbFBvc2l0aW9uKCk6IEZvcm1MYWJlbFBvc2l0aW9uIHwgc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxhYmVsUG9zaXRpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGxhYmVsUG9zaXRpb24odmFsdWU6IEZvcm1MYWJlbFBvc2l0aW9uIHwgc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxhYmVsUG9zaXRpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2hvd3MgLyBoaWRlcyB2YWxpZGF0aW9uIHN1bW1hcnkuICovXG5cdEBJbnB1dCgpXG5cdGdldCByZWFkb25seSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlYWRvbmx5IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCByZWFkb25seSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZWFkb25seSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBHZXRzIHRoZSBGb3JtJ3Mgc3RhdGUuIEVhY2ggbWVtYmVyIGluIHRoZSBzdGF0ZSBoYXMgeyBkaXJ0eSwgdW50b3VjaGVkLCBkaXNhYmxlZCB9IHByb3BlcnRpZXMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBzaG93Q29sb25BZnRlckxhYmVsKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2hvd0NvbG9uQWZ0ZXJMYWJlbCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc2hvd0NvbG9uQWZ0ZXJMYWJlbCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zaG93Q29sb25BZnRlckxhYmVsID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEdldHMgb3IgU2V0cyB0aGUgRm9ybSB2YWx1ZS4gKi9cblx0QElucHV0KClcblx0Z2V0IHNob3dTdW1tYXJ5KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2hvd1N1bW1hcnkgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHNob3dTdW1tYXJ5KHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNob3dTdW1tYXJ5ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEF1dG9tYXRpY2FsbHkgdmFsaWRhdGVzIHRoZSBmb3JtIHdoZW4gaXQgaXMgY3JlYXRlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IHN0YXRlKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zdGF0ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc3RhdGUodmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zdGF0ZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiB1bmRlZmluZWQgKi9cblx0QElucHV0KClcblx0Z2V0IHZhbHVlKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC52YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdmFsdWUodmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC52YWx1ZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiB1bmRlZmluZWQgKi9cblx0QElucHV0KClcblx0Z2V0IHZhbGlkYXRlT25Mb2FkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudmFsaWRhdGVPbkxvYWQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHZhbGlkYXRlT25Mb2FkKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnZhbGlkYXRlT25Mb2FkID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEFkZHMgYSBjb250cm9sIHRvIHRoZSBGb3JtLiBcblx0KiBAcGFyYW0ge2FueX0gY29udHJvbE9wdGlvbnMuIENvbnRyb2wgb3B0aW9ucy4gVGhlIGNvbnRyb2wgb3B0aW9ucyBkZXNjcmlwdGlvbiBpcyBhdmFpbGFibGUgaW4gdGhlIDxlbT5jb250cm9sczwvZW0+IHByb3BlcnR5LlxuXHQqL1xuICAgIHB1YmxpYyBhZGRDb250cm9sKGNvbnRyb2xPcHRpb25zOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYWRkQ29udHJvbChjb250cm9sT3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYWRkQ29udHJvbChjb250cm9sT3B0aW9ucyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEdldHMgYSBjb250cm9sIGJ5IGl0cyBuYW1lKGRhdGFGaWVsZCkuIFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBkYXRhRmllbGQuIGRhdGFGaWVsZCBvZiBhIEZvcm1Db250cm9sIG9yIEZvcm1Hcm91cFxuXHQqIEByZXR1cm5zIHtDb250cm9sfVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0Q29udHJvbChkYXRhRmllbGQpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0Q29udHJvbChkYXRhRmllbGQpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSW5zZXJ0cyBhIGNvbnRyb2wgdG8gdGhlIEZvcm0uIFxuXHQqIEBwYXJhbSB7bnVtYmVyfSBpbmRleC4gQ29udHJvbCBpbnNlcnQgaW5kZXhcblx0KiBAcGFyYW0ge2FueX0gY29udHJvbE9wdGlvbnMuIENvbnRyb2wgb3B0aW9ucy4gVGhlIGNvbnRyb2wgb3B0aW9ucyBkZXNjcmlwdGlvbiBpcyBhdmFpbGFibGUgaW4gdGhlIDxlbT5jb250cm9sczwvZW0+IHByb3BlcnR5LlxuXHQqL1xuICAgIHB1YmxpYyBpbnNlcnRDb250cm9sKGluZGV4OiBudW1iZXIsIGNvbnRyb2xPcHRpb25zOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5zZXJ0Q29udHJvbChpbmRleCwgY29udHJvbE9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lmluc2VydENvbnRyb2woaW5kZXgsIGNvbnRyb2xPcHRpb25zKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVtb3ZlIGEgY29udHJvbCBmcm9tIHRoZSBGb3JtLiBcblx0KiBAcGFyYW0ge2FueX0gY29udHJvbE9wdGlvbnMuIENvbnRyb2wgb3B0aW9ucy4gVGhlIGNvbnRyb2wgb3B0aW9ucyBkZXNjcmlwdGlvbiBpcyBhdmFpbGFibGUgaW4gdGhlIDxlbT5jb250cm9sczwvZW0+IHByb3BlcnR5LlxuXHQqL1xuICAgIHB1YmxpYyByZW1vdmVDb250cm9sKGNvbnRyb2xPcHRpb25zOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVtb3ZlQ29udHJvbChjb250cm9sT3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVtb3ZlQ29udHJvbChjb250cm9sT3B0aW9ucyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFN1Ym1pdHMgdGhlIGZvcm0uIFxuXHQqIEBwYXJhbSB7YW55fSBzdWJtaXRPcHRpb25zPy4gU2V0cyB0aGUgc3VibWl0IG9wdGlvbnMgb2JqZWN0LiBUaGUgb2JqZWN0IG1heSBoYXZlIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczogPGVtPmFzeW5jPC9lbT4sIDxlbT5hY3Rpb248L2VtPiwgPGVtPnRhcmdldDwvZW0+LCA8ZW0+bWV0aG9kPC9lbT4uIDxlbT5hc3luYzwvZW0+IGRldGVybWluZXMgd2hldGhlciB0aGUgZm9ybSB3aWxsIGJlIHN1Ym1pdHRlZCBhc3luY2hyb25vdXNseS4gPGVtPmFjdGlvbjwvZW0+IGRldGVybWluZXMgdGhlIHN1Ym1pdCB1cmwsIDxlbT5tZXRob2Q8L2VtPiBzZXRzIHdoZXRoZXIgdGhlIHN1Ym1pdCBpcyB0aHJvdWdoICdHRVQnIG9yICdQT1NUJy4gPGVtPnRhcmdldDwvZW0+IGRldGVybWluZXMgdGhlIHN1Ym1pdCB0YXJnZXQuXG5cdCovXG4gICAgcHVibGljIHN1Ym1pdChzdWJtaXRPcHRpb25zPzogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnN1Ym1pdChzdWJtaXRPcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zdWJtaXQoc3VibWl0T3B0aW9ucyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIENsZWFycyB0aGUgZm9ybS4gXG5cdCovXG4gICAgcHVibGljIHJlc2V0KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZXNldCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlc2V0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFZhbGlkYXRlcyB0aGUgZm9ybS4gXG5cdCovXG4gICAgcHVibGljIHZhbGlkYXRlKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC52YWxpZGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnZhbGlkYXRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cdGdldCBpc1JlbmRlcmVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCA6IGZhbHNlO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXG4gICAgICB0aGF0Lm9uQ3JlYXRlLmVtaXQodGhhdC5uYXRpdmVFbGVtZW50KTtcblxuXHRcdFNtYXJ0LlJlbmRlcigpO1xuXG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NtYXJ0LWFuZ3VsYXInKTtcblxuXHRcdHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4geyB0aGF0Lm9uUmVhZHkuZW1pdCh0aGF0Lm5hdGl2ZUVsZW1lbnQpOyB9KTtcblx0XHR0aGlzLmxpc3RlbigpO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy51bmxpc3RlbigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXHRcdGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQgJiYgdGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcblx0XHRcdGZvciAoY29uc3QgcHJvcE5hbWUgaW4gY2hhbmdlcykge1xuXHRcdFx0XHRpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcblx0XHRcdFx0XHR0aGlzLm5hdGl2ZUVsZW1lbnRbcHJvcE5hbWVdID0gY2hhbmdlc1twcm9wTmFtZV0uY3VycmVudFZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBZGQgZXZlbnQgbGlzdGVuZXJzLiAqL1xuXHRwcml2YXRlIGxpc3RlbigpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJlbW92ZSBldmVudCBsaXN0ZW5lcnMuICovXG5cdHByaXZhdGUgdW5saXN0ZW4oKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXHR9XG59XG4iXX0=