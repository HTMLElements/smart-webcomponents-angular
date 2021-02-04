import * as tslib_1 from "tslib";
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter, QueryList, ContentChildren } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Smart } from './smart.element';
let FormComponent = class FormComponent extends BaseElement {
    constructor(ref) {
        super(ref);
        this.eventHandlers = [];
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('smart-form');
        for (let propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    }
    /** @description Sets or gets the form columns. */
    get columns() {
        return this.nativeElement ? this.nativeElement.columns : undefined;
    }
    set columns(value) {
        this.nativeElement ? this.nativeElement.columns = value : undefined;
    }
    /** @description Sets or gets the form controls. */
    get controls() {
        return this.nativeElement ? this.nativeElement.controls : undefined;
    }
    set controls(value) {
        this.nativeElement ? this.nativeElement.controls = value : undefined;
    }
    /** @description Callback function for handling status changes */
    get onStatusChanges() {
        return this.nativeElement ? this.nativeElement.onStatusChanges : undefined;
    }
    set onStatusChanges(value) {
        this.nativeElement ? this.nativeElement.onStatusChanges = value : undefined;
    }
    /** @description Callback function for handling value changes */
    get onValueChanges() {
        return this.nativeElement ? this.nativeElement.onValueChanges : undefined;
    }
    set onValueChanges(value) {
        this.nativeElement ? this.nativeElement.onValueChanges = value : undefined;
    }
    /** @description Sets or Gets the labels position. */
    get labelPosition() {
        return this.nativeElement ? this.nativeElement.labelPosition : undefined;
    }
    set labelPosition(value) {
        this.nativeElement ? this.nativeElement.labelPosition = value : undefined;
    }
    /** @description Makes the form readonly. */
    get readonly() {
        return this.nativeElement ? this.nativeElement.readonly : undefined;
    }
    set readonly(value) {
        this.nativeElement ? this.nativeElement.readonly = value : undefined;
    }
    /** @description Shows / hides the colon after the labels. */
    get showColonAfterLabel() {
        return this.nativeElement ? this.nativeElement.showColonAfterLabel : undefined;
    }
    set showColonAfterLabel(value) {
        this.nativeElement ? this.nativeElement.showColonAfterLabel = value : undefined;
    }
    /** @description Shows / hides validation summary. */
    get showSummary() {
        return this.nativeElement ? this.nativeElement.showSummary : undefined;
    }
    set showSummary(value) {
        this.nativeElement ? this.nativeElement.showSummary = value : undefined;
    }
    /** @description Gets the Form's state. Each member in the state has { dirty, untouched, disabled } properties. */
    get state() {
        return this.nativeElement ? this.nativeElement.state : undefined;
    }
    set state(value) {
        this.nativeElement ? this.nativeElement.state = value : undefined;
    }
    /** @description Gets or Sets the Form value. */
    get value() {
        return this.nativeElement ? this.nativeElement.value : undefined;
    }
    set value(value) {
        this.nativeElement ? this.nativeElement.value = value : undefined;
    }
    /** @description Adds a control to the Form.
    * @param {any} controlOptions. Control options. The control options description is available in the <em>controls</em> property.
    */
    addControl(controlOptions) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addControl(controlOptions);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addControl(controlOptions);
            });
        }
    }
    /** @description Gets a control by its name(dataField).
    * @param {string} dataField. dataField of a FormControl or FormGroup
    * @returns {Control}
  */
    getControl(dataField) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getControl(dataField);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Inserts a control to the Form.
    * @param {number} index. Control insert index
    * @param {any} controlOptions. Control options. The control options description is available in the <em>controls</em> property.
    */
    insertControl(index, controlOptions) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertControl(index, controlOptions);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insertControl(index, controlOptions);
            });
        }
    }
    /** @description Remove a control from the Form.
    * @param {any} controlOptions. Control options. The control options description is available in the <em>controls</em> property.
    */
    removeControl(controlOptions) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeControl(controlOptions);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeControl(controlOptions);
            });
        }
    }
    /** @description Submits the form.
    * @param {any} submitOptions?. Sets the submit options object. The object may have the following properties: <em>async</em>, <em>action</em>, <em>target</em>, <em>method</em>. <em>async</em> determines whether the form will be submitted asynchronously. <em>action</em> determines the submit url, <em>method</em> sets whether the submit is through 'GET' or 'POST'. <em>target</em> determines the submit target.
    */
    submit(submitOptions) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.submit(submitOptions);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.submit(submitOptions);
            });
        }
    }
    /** @description Clears the form.
    */
    reset() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.reset();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.reset();
            });
        }
    }
    /** @description Validates the form.
    */
    validate() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.validate();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.validate();
            });
        }
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
    }
    /** @description Remove event listeners. */
    unlisten() {
        const that = this;
    }
};
FormComponent.ctorParameters = () => [
    { type: ElementRef }
];
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
FormComponent = tslib_1.__decorate([
    Directive({
        selector: 'smart-form, [smart-form]'
    })
], FormComponent);
export { FormComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQuZm9ybS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NtYXJ0LXdlYmNvbXBvbmVudHMtYW5ndWxhci9mb3JtLyIsInNvdXJjZXMiOlsic21hcnQuZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0TCxPQUFPLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXJELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQVl4QyxJQUFhLGFBQWEsR0FBMUIsTUFBYSxhQUFjLFNBQVEsV0FBVztJQUU3QyxZQUFZLEdBQXFCO1FBQ2hDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUlKLGtCQUFhLEdBQVUsRUFBRSxDQUFDO1FBSGpDLElBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDLGFBQXFCLENBQUM7SUFDaEQsQ0FBQztJQUtEOztPQUVHO0lBQ0ksZUFBZSxDQUFDLFVBQVUsR0FBRyxFQUFFO1FBQ2xDLElBQUksQ0FBQyxhQUFhLEdBQVMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNuRSxLQUFLLElBQUksWUFBWSxJQUFJLFVBQVUsRUFBRTtZQUNuQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUM3RDtRQUNELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUMzQixDQUFDO0lBQ0Qsa0RBQWtEO0lBRWxELElBQUksT0FBTztRQUNWLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFD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QUE7O1lBalFpQixVQUFVOztBQW9CM0I7SUFEQyxLQUFLLEVBQUU7NENBR1A7QUFPRDtJQURDLEtBQUssRUFBRTs2Q0FHUDtBQU9EO0lBREMsS0FBSyxFQUFFO29EQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7bURBR1A7QUFPRDtJQURDLEtBQUssRUFBRTtrREFHUDtBQU9EO0lBREMsS0FBSyxFQUFFOzZDQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7d0RBR1A7QUFPRDtJQURDLEtBQUssRUFBRTtnREFHUDtBQU9EO0lBREMsS0FBSyxFQUFFOzBDQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7MENBR1A7QUF6R1csYUFBYTtJQUp6QixTQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsMEJBQTBCO0tBQ3BDLENBQUM7R0FFVyxhQUFhLENBbVF6QjtTQW5RWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybSB9IGZyb20gJy4vLi4vaW5kZXgnO1xuaW1wb3J0IHsgQ29udHJvbENvbnRyb2xUeXBlLCBDb250cm9sTGFiZWxQb3NpdGlvbiwgQ29udHJvbFZpZXdNb2RlLCBGb3JtTGFiZWxQb3NpdGlvbiwgQ29udHJvbCwgRWxlbWVudFJlbmRlck1vZGV9IGZyb20gJy4vLi4vaW5kZXgnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBEaXJlY3RpdmUsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBTaW1wbGVDaGFuZ2VzLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgUXVlcnlMaXN0LCBDb250ZW50Q2hpbGRyZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VFbGVtZW50LCBTbWFydCB9IGZyb20gJy4vc21hcnQuZWxlbWVudCc7XG5leHBvcnQgeyBDb250cm9sQ29udHJvbFR5cGUsIENvbnRyb2xMYWJlbFBvc2l0aW9uLCBDb250cm9sVmlld01vZGUsIEZvcm1MYWJlbFBvc2l0aW9uLCBDb250cm9sLCBFbGVtZW50UmVuZGVyTW9kZX0gZnJvbSAnLi8uLi9pbmRleCc7XG5leHBvcnQgeyBTbWFydCB9IGZyb20gJy4vc21hcnQuZWxlbWVudCc7XG5leHBvcnQgeyBGb3JtIH0gZnJvbSAnLi8uLi9pbmRleCc7XG5cblxuaW1wb3J0IHsgRm9ybUNvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL3NtYXJ0LmZvcm1jb250cm9sJztcblxuaW1wb3J0IHsgRm9ybUdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9zbWFydC5mb3JtZ3JvdXAnO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdzbWFydC1mb3JtLCBbc21hcnQtZm9ybV0nXG59KVxuXG5leHBvcnQgY2xhc3MgRm9ybUNvbXBvbmVudCBleHRlbmRzIEJhc2VFbGVtZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG5cblx0Y29uc3RydWN0b3IocmVmOiBFbGVtZW50UmVmPEZvcm0+KSB7XG5cdFx0c3VwZXIocmVmKTtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPSByZWYubmF0aXZlRWxlbWVudCBhcyBGb3JtO1xuXHR9XG5cblx0cHJpdmF0ZSBldmVudEhhbmRsZXJzOiBhbnlbXSA9IFtdO1xuXG5cdHB1YmxpYyBuYXRpdmVFbGVtZW50OiBGb3JtO1xuXHQvKiogQGRlc2NyaXB0aW9uIENyZWF0ZXMgdGhlIGNvbXBvbmVudCBvbiBkZW1hbmQuXG5cdCAqIEBwYXJhbSBwcm9wZXJ0aWVzIEFuIG9wdGlvbmFsIG9iamVjdCBvZiBwcm9wZXJ0aWVzLCB3aGljaCB3aWxsIGJlIGFkZGVkIHRvIHRoZSB0ZW1wbGF0ZSBiaW5kZWQgb25lcy5cblx0ICovXG5cdHB1YmxpYyBjcmVhdGVDb21wb25lbnQocHJvcGVydGllcyA9IHt9KTogYW55IHtcbiAgICBcdHRoaXMubmF0aXZlRWxlbWVudCA9IDxGb3JtPmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NtYXJ0LWZvcm0nKTtcblx0XHRmb3IgKGxldCBwcm9wZXJ0eU5hbWUgaW4gcHJvcGVydGllcykgeyBcbiBcdFx0XHR0aGlzLm5hdGl2ZUVsZW1lbnRbcHJvcGVydHlOYW1lXSA9IHByb3BlcnRpZXNbcHJvcGVydHlOYW1lXTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudDtcblx0fVxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgZm9ybSBjb2x1bW5zLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgY29sdW1ucygpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sdW1ucyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgY29sdW1ucyh2YWx1ZTogbnVtYmVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbHVtbnMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSBmb3JtIGNvbnRyb2xzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgY29udHJvbHMoKTogQ29udHJvbFtdIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbnRyb2xzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjb250cm9scyh2YWx1ZTogQ29udHJvbFtdKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbnRyb2xzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIENhbGxiYWNrIGZ1bmN0aW9uIGZvciBoYW5kbGluZyBzdGF0dXMgY2hhbmdlcyAqL1xuXHRASW5wdXQoKVxuXHRnZXQgb25TdGF0dXNDaGFuZ2VzKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vblN0YXR1c0NoYW5nZXMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG9uU3RhdHVzQ2hhbmdlcyh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uU3RhdHVzQ2hhbmdlcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDYWxsYmFjayBmdW5jdGlvbiBmb3IgaGFuZGxpbmcgdmFsdWUgY2hhbmdlcyAqL1xuXHRASW5wdXQoKVxuXHRnZXQgb25WYWx1ZUNoYW5nZXMoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uVmFsdWVDaGFuZ2VzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBvblZhbHVlQ2hhbmdlcyh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uVmFsdWVDaGFuZ2VzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgR2V0cyB0aGUgbGFiZWxzIHBvc2l0aW9uLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbGFiZWxQb3NpdGlvbigpOiBGb3JtTGFiZWxQb3NpdGlvbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sYWJlbFBvc2l0aW9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBsYWJlbFBvc2l0aW9uKHZhbHVlOiBGb3JtTGFiZWxQb3NpdGlvbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sYWJlbFBvc2l0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIE1ha2VzIHRoZSBmb3JtIHJlYWRvbmx5LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcmVhZG9ubHkoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZWFkb25seSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcmVhZG9ubHkodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmVhZG9ubHkgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2hvd3MgLyBoaWRlcyB0aGUgY29sb24gYWZ0ZXIgdGhlIGxhYmVscy4gKi9cblx0QElucHV0KClcblx0Z2V0IHNob3dDb2xvbkFmdGVyTGFiZWwoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zaG93Q29sb25BZnRlckxhYmVsIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzaG93Q29sb25BZnRlckxhYmVsKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNob3dDb2xvbkFmdGVyTGFiZWwgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2hvd3MgLyBoaWRlcyB2YWxpZGF0aW9uIHN1bW1hcnkuICovXG5cdEBJbnB1dCgpXG5cdGdldCBzaG93U3VtbWFyeSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNob3dTdW1tYXJ5IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzaG93U3VtbWFyeSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zaG93U3VtbWFyeSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBHZXRzIHRoZSBGb3JtJ3Mgc3RhdGUuIEVhY2ggbWVtYmVyIGluIHRoZSBzdGF0ZSBoYXMgeyBkaXJ0eSwgdW50b3VjaGVkLCBkaXNhYmxlZCB9IHByb3BlcnRpZXMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBzdGF0ZSgpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc3RhdGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHN0YXRlKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc3RhdGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gR2V0cyBvciBTZXRzIHRoZSBGb3JtIHZhbHVlLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdmFsdWUoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB2YWx1ZSh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnZhbHVlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEFkZHMgYSBjb250cm9sIHRvIHRoZSBGb3JtLiBcblx0KiBAcGFyYW0ge2FueX0gY29udHJvbE9wdGlvbnMuIENvbnRyb2wgb3B0aW9ucy4gVGhlIGNvbnRyb2wgb3B0aW9ucyBkZXNjcmlwdGlvbiBpcyBhdmFpbGFibGUgaW4gdGhlIDxlbT5jb250cm9sczwvZW0+IHByb3BlcnR5LlxuXHQqL1xuICAgIHB1YmxpYyBhZGRDb250cm9sKGNvbnRyb2xPcHRpb25zOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYWRkQ29udHJvbChjb250cm9sT3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYWRkQ29udHJvbChjb250cm9sT3B0aW9ucyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEdldHMgYSBjb250cm9sIGJ5IGl0cyBuYW1lKGRhdGFGaWVsZCkuIFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBkYXRhRmllbGQuIGRhdGFGaWVsZCBvZiBhIEZvcm1Db250cm9sIG9yIEZvcm1Hcm91cFxuXHQqIEByZXR1cm5zIHtDb250cm9sfVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0Q29udHJvbChkYXRhRmllbGQpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0Q29udHJvbChkYXRhRmllbGQpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSW5zZXJ0cyBhIGNvbnRyb2wgdG8gdGhlIEZvcm0uIFxuXHQqIEBwYXJhbSB7bnVtYmVyfSBpbmRleC4gQ29udHJvbCBpbnNlcnQgaW5kZXhcblx0KiBAcGFyYW0ge2FueX0gY29udHJvbE9wdGlvbnMuIENvbnRyb2wgb3B0aW9ucy4gVGhlIGNvbnRyb2wgb3B0aW9ucyBkZXNjcmlwdGlvbiBpcyBhdmFpbGFibGUgaW4gdGhlIDxlbT5jb250cm9sczwvZW0+IHByb3BlcnR5LlxuXHQqL1xuICAgIHB1YmxpYyBpbnNlcnRDb250cm9sKGluZGV4OiBudW1iZXIsIGNvbnRyb2xPcHRpb25zOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5zZXJ0Q29udHJvbChpbmRleCwgY29udHJvbE9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lmluc2VydENvbnRyb2woaW5kZXgsIGNvbnRyb2xPcHRpb25zKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVtb3ZlIGEgY29udHJvbCBmcm9tIHRoZSBGb3JtLiBcblx0KiBAcGFyYW0ge2FueX0gY29udHJvbE9wdGlvbnMuIENvbnRyb2wgb3B0aW9ucy4gVGhlIGNvbnRyb2wgb3B0aW9ucyBkZXNjcmlwdGlvbiBpcyBhdmFpbGFibGUgaW4gdGhlIDxlbT5jb250cm9sczwvZW0+IHByb3BlcnR5LlxuXHQqL1xuICAgIHB1YmxpYyByZW1vdmVDb250cm9sKGNvbnRyb2xPcHRpb25zOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVtb3ZlQ29udHJvbChjb250cm9sT3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVtb3ZlQ29udHJvbChjb250cm9sT3B0aW9ucyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFN1Ym1pdHMgdGhlIGZvcm0uIFxuXHQqIEBwYXJhbSB7YW55fSBzdWJtaXRPcHRpb25zPy4gU2V0cyB0aGUgc3VibWl0IG9wdGlvbnMgb2JqZWN0LiBUaGUgb2JqZWN0IG1heSBoYXZlIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczogPGVtPmFzeW5jPC9lbT4sIDxlbT5hY3Rpb248L2VtPiwgPGVtPnRhcmdldDwvZW0+LCA8ZW0+bWV0aG9kPC9lbT4uIDxlbT5hc3luYzwvZW0+IGRldGVybWluZXMgd2hldGhlciB0aGUgZm9ybSB3aWxsIGJlIHN1Ym1pdHRlZCBhc3luY2hyb25vdXNseS4gPGVtPmFjdGlvbjwvZW0+IGRldGVybWluZXMgdGhlIHN1Ym1pdCB1cmwsIDxlbT5tZXRob2Q8L2VtPiBzZXRzIHdoZXRoZXIgdGhlIHN1Ym1pdCBpcyB0aHJvdWdoICdHRVQnIG9yICdQT1NUJy4gPGVtPnRhcmdldDwvZW0+IGRldGVybWluZXMgdGhlIHN1Ym1pdCB0YXJnZXQuXG5cdCovXG4gICAgcHVibGljIHN1Ym1pdChzdWJtaXRPcHRpb25zPzogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnN1Ym1pdChzdWJtaXRPcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zdWJtaXQoc3VibWl0T3B0aW9ucyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIENsZWFycyB0aGUgZm9ybS4gXG5cdCovXG4gICAgcHVibGljIHJlc2V0KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZXNldCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlc2V0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFZhbGlkYXRlcyB0aGUgZm9ybS4gXG5cdCovXG4gICAgcHVibGljIHZhbGlkYXRlKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC52YWxpZGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnZhbGlkYXRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cdGdldCBpc1JlbmRlcmVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCA6IGZhbHNlO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXG4gICAgICB0aGF0Lm9uQ3JlYXRlLmVtaXQodGhhdC5uYXRpdmVFbGVtZW50KTtcblxuXHRcdFNtYXJ0LlJlbmRlcigpO1xuXG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7IHRoYXQub25SZWFkeS5lbWl0KHRoYXQubmF0aXZlRWxlbWVudCk7IH0pO1xuXHRcdHRoaXMubGlzdGVuKCk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLnVubGlzdGVuKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdFx0aWYgKHRoaXMubmF0aXZlRWxlbWVudCAmJiB0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuXHRcdFx0Zm9yIChjb25zdCBwcm9wTmFtZSBpbiBjaGFuZ2VzKSB7XG5cdFx0XHRcdGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuXHRcdFx0XHRcdHRoaXMubmF0aXZlRWxlbWVudFtwcm9wTmFtZV0gPSBjaGFuZ2VzW3Byb3BOYW1lXS5jdXJyZW50VmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEFkZCBldmVudCBsaXN0ZW5lcnMuICovXG5cdHByaXZhdGUgbGlzdGVuKCk6IHZvaWQge1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVtb3ZlIGV2ZW50IGxpc3RlbmVycy4gKi9cblx0cHJpdmF0ZSB1bmxpc3RlbigpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cdH1cbn1cbiJdfQ==