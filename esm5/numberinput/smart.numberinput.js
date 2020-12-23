import * as tslib_1 from "tslib";
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Smart } from './smart.element';
var NumberInputComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NumberInputComponent, _super);
    function NumberInputComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        /** @description This event is triggered when the selection is changed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	oldLabel, 	oldValue, 	value)
        *   label - The label of the new selected item.
        *   oldLabel - The label of the item that was previously selected before the event was triggered.
        *   oldValue - The value of the item that was previously selected before the event was triggered.
        *   value - The value of the new selected item.
        */
        _this.onChange = new EventEmitter();
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    NumberInputComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('smart-number-input');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(NumberInputComponent.prototype, "animation", {
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
    Object.defineProperty(NumberInputComponent.prototype, "disabled", {
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
    Object.defineProperty(NumberInputComponent.prototype, "inputPurpose", {
        /** @description Sets the purpose of the input and what, if any, permission the user agent has to provide automated assistance in filling out the element's input when in a form, as well as guidance to the browser as to the type of information expected in the element. This value corresponds to the standard HTML autocomplete attribute and can be set to values such as 'on', 'name', 'organization', 'street-address', etc. */
        get: function () {
            return this.nativeElement ? this.nativeElement.inputPurpose : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.inputPurpose = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumberInputComponent.prototype, "locale", {
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
    Object.defineProperty(NumberInputComponent.prototype, "localizeFormatFunction", {
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
    Object.defineProperty(NumberInputComponent.prototype, "max", {
        /** @description Determines the max number that can be displayed inside the input. */
        get: function () {
            return this.nativeElement ? this.nativeElement.max : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.max = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumberInputComponent.prototype, "messages", {
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
    Object.defineProperty(NumberInputComponent.prototype, "min", {
        /** @description Determines the min number that can be displayed inside the input. */
        get: function () {
            return this.nativeElement ? this.nativeElement.min : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.min = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumberInputComponent.prototype, "name", {
        /** @description Sets or gets the name attribute for the element. Name is used when submiting data inside an HTML form. */
        get: function () {
            return this.nativeElement ? this.nativeElement.name : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.name = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumberInputComponent.prototype, "numberFormat", {
        /** @description Sets or gets the value format of the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.numberFormat : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.numberFormat = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumberInputComponent.prototype, "placeholder", {
        /** @description Determines the placeholder of the input. */
        get: function () {
            return this.nativeElement ? this.nativeElement.placeholder : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.placeholder = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumberInputComponent.prototype, "readonly", {
        /** @description Determines whether ot not the user can enter text inside the input. */
        get: function () {
            return this.nativeElement ? this.nativeElement.readonly : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.readonly = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumberInputComponent.prototype, "rightToLeft", {
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
    Object.defineProperty(NumberInputComponent.prototype, "step", {
        /** @description Sets or gets the incremental/decremental step for the value of the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.step : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.step = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumberInputComponent.prototype, "theme", {
        /** @description Determines the theme for the element. Themes define the look of the elements. */
        get: function () {
            return this.nativeElement ? this.nativeElement.theme : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.theme = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumberInputComponent.prototype, "unfocusable", {
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
    Object.defineProperty(NumberInputComponent.prototype, "value", {
        /** @description Sets or gets the value of the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.value : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.value = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /** @description Returns the value in the desired format.
    * @param {string | number} value. The value to be formatted by the method.
    * @param {any} format?. The object that contains the formatting properties. The argument should contain Intl.NumberFormat valid properties. For example, { style: 'currency', currency: 'EUR' }
    */
    NumberInputComponent.prototype.getFormattedValue = function (value, format) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.getFormattedValue(value, format);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.getFormattedValue(value, format);
            });
        }
    };
    /** @description Returns the number of the input.
    */
    NumberInputComponent.prototype.getValue = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.getValue();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.getValue();
            });
        }
    };
    /** @description Selects the text inside the input or if it is readonly then the element is focused.
    */
    NumberInputComponent.prototype.select = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.select();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.select();
            });
        }
    };
    /** @description Sets the value of the input.
    * @param {string | number} value. The value to be set.
    */
    NumberInputComponent.prototype.setValue = function (value) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.setValue(value);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.setValue(value);
            });
        }
    };
    Object.defineProperty(NumberInputComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    NumberInputComponent.prototype.ngOnInit = function () {
    };
    NumberInputComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        this.listen();
    };
    NumberInputComponent.prototype.ngOnDestroy = function () {
        this.unlisten();
    };
    NumberInputComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    /** @description Add event listeners. */
    NumberInputComponent.prototype.listen = function () {
        var that = this;
        that.eventHandlers['changeHandler'] = function (event) { that.onChange.emit(event); };
        that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
    };
    /** @description Remove event listeners. */
    NumberInputComponent.prototype.unlisten = function () {
        var that = this;
        if (that.eventHandlers['changeHandler']) {
            that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
        }
    };
    NumberInputComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    tslib_1.__decorate([
        Input()
    ], NumberInputComponent.prototype, "animation", null);
    tslib_1.__decorate([
        Input()
    ], NumberInputComponent.prototype, "disabled", null);
    tslib_1.__decorate([
        Input()
    ], NumberInputComponent.prototype, "inputPurpose", null);
    tslib_1.__decorate([
        Input()
    ], NumberInputComponent.prototype, "locale", null);
    tslib_1.__decorate([
        Input()
    ], NumberInputComponent.prototype, "localizeFormatFunction", null);
    tslib_1.__decorate([
        Input()
    ], NumberInputComponent.prototype, "max", null);
    tslib_1.__decorate([
        Input()
    ], NumberInputComponent.prototype, "messages", null);
    tslib_1.__decorate([
        Input()
    ], NumberInputComponent.prototype, "min", null);
    tslib_1.__decorate([
        Input()
    ], NumberInputComponent.prototype, "name", null);
    tslib_1.__decorate([
        Input()
    ], NumberInputComponent.prototype, "numberFormat", null);
    tslib_1.__decorate([
        Input()
    ], NumberInputComponent.prototype, "placeholder", null);
    tslib_1.__decorate([
        Input()
    ], NumberInputComponent.prototype, "readonly", null);
    tslib_1.__decorate([
        Input()
    ], NumberInputComponent.prototype, "rightToLeft", null);
    tslib_1.__decorate([
        Input()
    ], NumberInputComponent.prototype, "step", null);
    tslib_1.__decorate([
        Input()
    ], NumberInputComponent.prototype, "theme", null);
    tslib_1.__decorate([
        Input()
    ], NumberInputComponent.prototype, "unfocusable", null);
    tslib_1.__decorate([
        Input()
    ], NumberInputComponent.prototype, "value", null);
    tslib_1.__decorate([
        Output()
    ], NumberInputComponent.prototype, "onChange", void 0);
    NumberInputComponent = tslib_1.__decorate([
        Directive({
            selector: 'smart-number-input, [smart-number-input]'
        })
    ], NumberInputComponent);
    return NumberInputComponent;
}(BaseElement));
export { NumberInputComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQubnVtYmVyaW5wdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zbWFydC13ZWJjb21wb25lbnRzLWFuZ3VsYXIvbnVtYmVyaW5wdXQvIiwic291cmNlcyI6WyJzbWFydC5udW1iZXJpbnB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUosT0FBTyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVyRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFReEM7SUFBMEMsZ0RBQVc7SUFDcEQsOEJBQVksR0FBNEI7UUFBeEMsWUFDQyxrQkFBTSxHQUFHLENBQUMsU0FFVjtRQUVPLG1CQUFhLEdBQVUsRUFBRSxDQUFDO1FBc0tsQzs7Ozs7O1VBTUU7UUFDUSxjQUFRLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFoTGxFLEtBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDLGFBQTRCLENBQUM7O0lBQ3ZELENBQUM7SUFLRDs7T0FFRztJQUNJLDhDQUFlLEdBQXRCLFVBQXVCLFVBQWU7UUFBZiwyQkFBQSxFQUFBLGVBQWU7UUFDbEMsSUFBSSxDQUFDLGFBQWEsR0FBZ0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ2xGLEtBQUssSUFBSSxZQUFZLElBQUksVUFBVSxFQUFFO1lBQ25DLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEdBQUcsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzdEO1FBQ0QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzNCLENBQUM7SUFHRCxzQkFBSSwyQ0FBUztRQUZi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QURDLEtBQUssRUFBRTtvREFHUDtJQU9EO1FBREMsS0FBSyxFQUFFO3FEQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7MkRBR1A7SUFPRDtRQURDLEtBQUssRUFBRTtxREFHUDtJQVlTO1FBQVQsTUFBTSxFQUFFOzBEQUEwRDtJQW5MdkQsb0JBQW9CO1FBSmhDLFNBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSwwQ0FBMEM7U0FDcEQsQ0FBQztPQUVXLG9CQUFvQixDQWlTaEM7SUFBRCwyQkFBQztDQUFBLEFBalNELENBQTBDLFdBQVcsR0FpU3BEO1NBalNZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE51bWJlcklucHV0IH0gZnJvbSAnLi8uLi9pbmRleCc7XG5pbXBvcnQgeyBBbmltYXRpb24sIEVsZW1lbnRSZW5kZXJNb2RlfSBmcm9tICcuLy4uL2luZGV4JztcbmltcG9ydCB7IENvbXBvbmVudCwgRGlyZWN0aXZlLCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgU2ltcGxlQ2hhbmdlcywgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VFbGVtZW50LCBTbWFydCB9IGZyb20gJy4vc21hcnQuZWxlbWVudCc7XG5leHBvcnQgeyBBbmltYXRpb24sIEVsZW1lbnRSZW5kZXJNb2RlfSBmcm9tICcuLy4uL2luZGV4JztcbmV4cG9ydCB7IFNtYXJ0IH0gZnJvbSAnLi9zbWFydC5lbGVtZW50JztcbmV4cG9ydCB7IE51bWJlcklucHV0IH0gZnJvbSAnLi8uLi9pbmRleCc7XG5cblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnc21hcnQtbnVtYmVyLWlucHV0LCBbc21hcnQtbnVtYmVyLWlucHV0XSdcbn0pXG5cbmV4cG9ydCBjbGFzcyBOdW1iZXJJbnB1dENvbXBvbmVudCBleHRlbmRzIEJhc2VFbGVtZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG5cdGNvbnN0cnVjdG9yKHJlZjogRWxlbWVudFJlZjxOdW1iZXJJbnB1dD4pIHtcblx0XHRzdXBlcihyZWYpO1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA9IHJlZi5uYXRpdmVFbGVtZW50IGFzIE51bWJlcklucHV0O1xuXHR9XG5cblx0cHJpdmF0ZSBldmVudEhhbmRsZXJzOiBhbnlbXSA9IFtdO1xuXG5cdHB1YmxpYyBuYXRpdmVFbGVtZW50OiBOdW1iZXJJbnB1dDtcblx0LyoqIEBkZXNjcmlwdGlvbiBDcmVhdGVzIHRoZSBjb21wb25lbnQgb24gZGVtYW5kLlxuXHQgKiBAcGFyYW0gcHJvcGVydGllcyBBbiBvcHRpb25hbCBvYmplY3Qgb2YgcHJvcGVydGllcywgd2hpY2ggd2lsbCBiZSBhZGRlZCB0byB0aGUgdGVtcGxhdGUgYmluZGVkIG9uZXMuXG5cdCAqL1xuXHRwdWJsaWMgY3JlYXRlQ29tcG9uZW50KHByb3BlcnRpZXMgPSB7fSk6IGFueSB7XG4gICAgXHR0aGlzLm5hdGl2ZUVsZW1lbnQgPSA8TnVtYmVySW5wdXQ+ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc21hcnQtbnVtYmVyLWlucHV0Jyk7XG5cdFx0Zm9yIChsZXQgcHJvcGVydHlOYW1lIGluIHByb3BlcnRpZXMpIHsgXG4gXHRcdFx0dGhpcy5uYXRpdmVFbGVtZW50W3Byb3BlcnR5TmFtZV0gPSBwcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV07XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQ7XG5cdH1cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIGFuaW1hdGlvbiBtb2RlLiBBbmltYXRpb24gaXMgZGlzYWJsZWQgd2hlbiB0aGUgcHJvcGVydHkgaXMgc2V0IHRvICdub25lJyAqL1xuXHRASW5wdXQoKVxuXHRnZXQgYW5pbWF0aW9uKCk6IEFuaW1hdGlvbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hbmltYXRpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGFuaW1hdGlvbih2YWx1ZTogQW5pbWF0aW9uKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmFuaW1hdGlvbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFbmFibGVzIG9yIGRpc2FibGVzIHRoZSBlbGVtZW50LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlZCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZWQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyB0aGUgcHVycG9zZSBvZiB0aGUgaW5wdXQgYW5kIHdoYXQsIGlmIGFueSwgcGVybWlzc2lvbiB0aGUgdXNlciBhZ2VudCBoYXMgdG8gcHJvdmlkZSBhdXRvbWF0ZWQgYXNzaXN0YW5jZSBpbiBmaWxsaW5nIG91dCB0aGUgZWxlbWVudCdzIGlucHV0IHdoZW4gaW4gYSBmb3JtLCBhcyB3ZWxsIGFzIGd1aWRhbmNlIHRvIHRoZSBicm93c2VyIGFzIHRvIHRoZSB0eXBlIG9mIGluZm9ybWF0aW9uIGV4cGVjdGVkIGluIHRoZSBlbGVtZW50LiBUaGlzIHZhbHVlIGNvcnJlc3BvbmRzIHRvIHRoZSBzdGFuZGFyZCBIVE1MIGF1dG9jb21wbGV0ZSBhdHRyaWJ1dGUgYW5kIGNhbiBiZSBzZXQgdG8gdmFsdWVzIHN1Y2ggYXMgJ29uJywgJ25hbWUnLCAnb3JnYW5pemF0aW9uJywgJ3N0cmVldC1hZGRyZXNzJywgZXRjLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgaW5wdXRQdXJwb3NlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5pbnB1dFB1cnBvc2UgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGlucHV0UHVycG9zZSh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmlucHV0UHVycG9zZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIGxhbmd1YWdlLiBVc2VkIGluIGNvbmp1bmN0aW9uIHdpdGggdGhlIHByb3BlcnR5IG1lc3NhZ2VzLiAgKi9cblx0QElucHV0KClcblx0Z2V0IGxvY2FsZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubG9jYWxlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBsb2NhbGUodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sb2NhbGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ2FsbGJhY2sgdXNlZCB0byBjdXN0b21pemUgdGhlIGZvcm1hdCBvZiB0aGUgbWVzc2FnZXMgdGhhdCBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgTG9jYWxpemF0aW9uIE1vZHVsZS4gKi9cblx0QElucHV0KClcblx0Z2V0IGxvY2FsaXplRm9ybWF0RnVuY3Rpb24oKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxvY2FsaXplRm9ybWF0RnVuY3Rpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGxvY2FsaXplRm9ybWF0RnVuY3Rpb24odmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sb2NhbGl6ZUZvcm1hdEZ1bmN0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIG1heCBudW1iZXIgdGhhdCBjYW4gYmUgZGlzcGxheWVkIGluc2lkZSB0aGUgaW5wdXQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBtYXgoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm1heCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbWF4KHZhbHVlOiBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubWF4ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyBhbiBvYmplY3Qgc3BlY2lmeWluZyBzdHJpbmdzIHVzZWQgaW4gdGhlIHdpZGdldCB0aGF0IGNhbiBiZSBsb2NhbGl6ZWQuIFVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCB0aGUgcHJvcGVydHkgbG9jYWxlLiAgKi9cblx0QElucHV0KClcblx0Z2V0IG1lc3NhZ2VzKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5tZXNzYWdlcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbWVzc2FnZXModmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5tZXNzYWdlcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBtaW4gbnVtYmVyIHRoYXQgY2FuIGJlIGRpc3BsYXllZCBpbnNpZGUgdGhlIGlucHV0LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbWluKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5taW4gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG1pbih2YWx1ZTogbnVtYmVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm1pbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIG5hbWUgYXR0cmlidXRlIGZvciB0aGUgZWxlbWVudC4gTmFtZSBpcyB1c2VkIHdoZW4gc3VibWl0aW5nIGRhdGEgaW5zaWRlIGFuIEhUTUwgZm9ybS4gKi9cblx0QElucHV0KClcblx0Z2V0IG5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm5hbWUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5uYW1lID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgdmFsdWUgZm9ybWF0IG9mIHRoZSBlbGVtZW50LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbnVtYmVyRm9ybWF0KCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5udW1iZXJGb3JtYXQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG51bWJlckZvcm1hdCh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm51bWJlckZvcm1hdCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBwbGFjZWhvbGRlciBvZiB0aGUgaW5wdXQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBwbGFjZWhvbGRlcigpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucGxhY2Vob2xkZXIgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHBsYWNlaG9sZGVyKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucGxhY2Vob2xkZXIgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB3aGV0aGVyIG90IG5vdCB0aGUgdXNlciBjYW4gZW50ZXIgdGV4dCBpbnNpZGUgdGhlIGlucHV0LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcmVhZG9ubHkoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZWFkb25seSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcmVhZG9ubHkodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmVhZG9ubHkgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSB2YWx1ZSBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGVsZW1lbnQgaXMgYWxpZ25lZCB0byBzdXBwb3J0IGxvY2FsZXMgdXNpbmcgcmlnaHQtdG8tbGVmdCBmb250cy4gKi9cblx0QElucHV0KClcblx0Z2V0IHJpZ2h0VG9MZWZ0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmlnaHRUb0xlZnQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHJpZ2h0VG9MZWZ0KHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJpZ2h0VG9MZWZ0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgaW5jcmVtZW50YWwvZGVjcmVtZW50YWwgc3RlcCBmb3IgdGhlIHZhbHVlIG9mIHRoZSBlbGVtZW50LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc3RlcCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc3RlcCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc3RlcCh2YWx1ZTogbnVtYmVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnN0ZXAgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgdGhlbWUgZm9yIHRoZSBlbGVtZW50LiBUaGVtZXMgZGVmaW5lIHRoZSBsb29rIG9mIHRoZSBlbGVtZW50cy4gKi9cblx0QElucHV0KClcblx0Z2V0IHRoZW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50aGVtZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdGhlbWUodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50aGVtZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBJZiBpcyBzZXQgdG8gdHJ1ZSwgdGhlIGVsZW1lbnQgY2Fubm90IGJlIGZvY3VzZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCB1bmZvY3VzYWJsZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnVuZm9jdXNhYmxlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB1bmZvY3VzYWJsZSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC51bmZvY3VzYWJsZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIHZhbHVlIG9mIHRoZSBlbGVtZW50LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdmFsdWUoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB2YWx1ZSh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnZhbHVlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHNlbGVjdGlvbiBpcyBjaGFuZ2VkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGxhYmVsLCBcdG9sZExhYmVsLCBcdG9sZFZhbHVlLCBcdHZhbHVlKVxuXHQqICAgbGFiZWwgLSBUaGUgbGFiZWwgb2YgdGhlIG5ldyBzZWxlY3RlZCBpdGVtLlxuXHQqICAgb2xkTGFiZWwgLSBUaGUgbGFiZWwgb2YgdGhlIGl0ZW0gdGhhdCB3YXMgcHJldmlvdXNseSBzZWxlY3RlZCBiZWZvcmUgdGhlIGV2ZW50IHdhcyB0cmlnZ2VyZWQuXG5cdCogICBvbGRWYWx1ZSAtIFRoZSB2YWx1ZSBvZiB0aGUgaXRlbSB0aGF0IHdhcyBwcmV2aW91c2x5IHNlbGVjdGVkIGJlZm9yZSB0aGUgZXZlbnQgd2FzIHRyaWdnZXJlZC5cblx0KiAgIHZhbHVlIC0gVGhlIHZhbHVlIG9mIHRoZSBuZXcgc2VsZWN0ZWQgaXRlbS5cblx0Ki9cblx0QE91dHB1dCgpIG9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0aGUgdmFsdWUgaW4gdGhlIGRlc2lyZWQgZm9ybWF0LiBcblx0KiBAcGFyYW0ge3N0cmluZyB8IG51bWJlcn0gdmFsdWUuIFRoZSB2YWx1ZSB0byBiZSBmb3JtYXR0ZWQgYnkgdGhlIG1ldGhvZC4gXG5cdCogQHBhcmFtIHthbnl9IGZvcm1hdD8uIFRoZSBvYmplY3QgdGhhdCBjb250YWlucyB0aGUgZm9ybWF0dGluZyBwcm9wZXJ0aWVzLiBUaGUgYXJndW1lbnQgc2hvdWxkIGNvbnRhaW4gSW50bC5OdW1iZXJGb3JtYXQgdmFsaWQgcHJvcGVydGllcy4gRm9yIGV4YW1wbGUsIHsgc3R5bGU6ICdjdXJyZW5jeScsIGN1cnJlbmN5OiAnRVVSJyB9XG5cdCovXG4gICAgcHVibGljIGdldEZvcm1hdHRlZFZhbHVlKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIsIGZvcm1hdD86IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5nZXRGb3JtYXR0ZWRWYWx1ZSh2YWx1ZSwgZm9ybWF0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5nZXRGb3JtYXR0ZWRWYWx1ZSh2YWx1ZSwgZm9ybWF0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0aGUgbnVtYmVyIG9mIHRoZSBpbnB1dC4gXG5cdCovXG4gICAgcHVibGljIGdldFZhbHVlKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5nZXRWYWx1ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmdldFZhbHVlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNlbGVjdHMgdGhlIHRleHQgaW5zaWRlIHRoZSBpbnB1dCBvciBpZiBpdCBpcyByZWFkb25seSB0aGVuIHRoZSBlbGVtZW50IGlzIGZvY3VzZWQuIFxuXHQqL1xuICAgIHB1YmxpYyBzZWxlY3QoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSB2YWx1ZSBvZiB0aGUgaW5wdXQuIFxuXHQqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyfSB2YWx1ZS4gVGhlIHZhbHVlIHRvIGJlIHNldC4gXG5cdCovXG4gICAgcHVibGljIHNldFZhbHVlKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2V0VmFsdWUodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNldFZhbHVlKHZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cblx0Z2V0IGlzUmVuZGVyZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkIDogZmFsc2U7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0fVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cbiAgICAgIHRoYXQub25DcmVhdGUuZW1pdCh0aGF0Lm5hdGl2ZUVsZW1lbnQpO1xuXG5cdFx0U21hcnQuUmVuZGVyKCk7XG5cblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHsgdGhhdC5vblJlYWR5LmVtaXQodGhhdC5uYXRpdmVFbGVtZW50KTsgfSk7XG5cdFx0dGhpcy5saXN0ZW4oKTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMudW5saXN0ZW4oKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblx0XHRpZiAodGhpcy5uYXRpdmVFbGVtZW50ICYmIHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG5cdFx0XHRmb3IgKGNvbnN0IHByb3BOYW1lIGluIGNoYW5nZXMpIHtcblx0XHRcdFx0aWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG5cdFx0XHRcdFx0dGhpcy5uYXRpdmVFbGVtZW50W3Byb3BOYW1lXSA9IGNoYW5nZXNbcHJvcE5hbWVdLmN1cnJlbnRWYWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQWRkIGV2ZW50IGxpc3RlbmVycy4gKi9cblx0cHJpdmF0ZSBsaXN0ZW4oKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY2hhbmdlSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ2hhbmdlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snY2hhbmdlSGFuZGxlciddKTtcblxuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZW1vdmUgZXZlbnQgbGlzdGVuZXJzLiAqL1xuXHRwcml2YXRlIHVubGlzdGVuKCk6IHZvaWQge1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjaGFuZ2VIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5nZUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdH1cbn1cbiJdfQ==