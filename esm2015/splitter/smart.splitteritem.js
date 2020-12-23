import * as tslib_1 from "tslib";
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { BaseElement } from './smart.element';
export { Smart } from './smart.element';
let SplitterItemComponent = class SplitterItemComponent extends BaseElement {
    constructor(ref) {
        super(ref);
        this.eventHandlers = [];
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('smart-splitter-item');
        for (let propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    }
    /** @description Enables or disables the element. */
    get disabled() {
        return this.nativeElement ? this.nativeElement.disabled : undefined;
    }
    set disabled(value) {
        this.nativeElement ? this.nativeElement.disabled = value : undefined;
    }
    /** @description Determines of the item is collapsed or not. */
    get collapsed() {
        return this.nativeElement ? this.nativeElement.collapsed : undefined;
    }
    set collapsed(value) {
        this.nativeElement ? this.nativeElement.collapsed = value : undefined;
    }
    /** @description Determines of the item can be collapsed. If set to false, the item can't be collapsed */
    get collapsible() {
        return this.nativeElement ? this.nativeElement.collapsible : undefined;
    }
    set collapsible(value) {
        this.nativeElement ? this.nativeElement.collapsible = value : undefined;
    }
    /** @description Determines the content of the splitter items */
    get content() {
        return this.nativeElement ? this.nativeElement.content : undefined;
    }
    set content(value) {
        this.nativeElement ? this.nativeElement.content = value : undefined;
    }
    /** @description Determines of the item can be resized or not. */
    get locked() {
        return this.nativeElement ? this.nativeElement.locked : undefined;
    }
    set locked(value) {
        this.nativeElement ? this.nativeElement.locked = value : undefined;
    }
    /** @description Determines the max size of the item. */
    get max() {
        return this.nativeElement ? this.nativeElement.max : undefined;
    }
    set max(value) {
        this.nativeElement ? this.nativeElement.max = value : undefined;
    }
    /** @description Determines the min size of the item */
    get min() {
        return this.nativeElement ? this.nativeElement.min : undefined;
    }
    set min(value) {
        this.nativeElement ? this.nativeElement.min = value : undefined;
    }
    /** @description Determines the size of the item. */
    get size() {
        return this.nativeElement ? this.nativeElement.size : undefined;
    }
    set size(value) {
        this.nativeElement ? this.nativeElement.size = value : undefined;
    }
    /** @description Collapses the item.
    * @param {string} far. If set to true the item will collapse to it's far side ( to the right for vertical splitter and down for horizontal)
    */
    collapse(far) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapse(far);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.collapse(far);
            });
        }
    }
    /** @description Expands the item if it's collapsed.
    */
    expand() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.expand();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.expand();
            });
        }
    }
    /** @description Locks the item so it can no longer change it's size.
    */
    lock() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.lock();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.lock();
            });
        }
    }
    /** @description Unlocks a previously locked item.
    */
    unlock() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.unlock();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.unlock();
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
        this.nativeElement.whenRendered(() => { that.onReady.emit(that.nativeElement); });
    }
    ngOnDestroy() { }
    ngOnChanges(changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (const propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    }
};
SplitterItemComponent.ctorParameters = () => [
    { type: ElementRef }
];
tslib_1.__decorate([
    Input()
], SplitterItemComponent.prototype, "disabled", null);
tslib_1.__decorate([
    Input()
], SplitterItemComponent.prototype, "collapsed", null);
tslib_1.__decorate([
    Input()
], SplitterItemComponent.prototype, "collapsible", null);
tslib_1.__decorate([
    Input()
], SplitterItemComponent.prototype, "content", null);
tslib_1.__decorate([
    Input()
], SplitterItemComponent.prototype, "locked", null);
tslib_1.__decorate([
    Input()
], SplitterItemComponent.prototype, "max", null);
tslib_1.__decorate([
    Input()
], SplitterItemComponent.prototype, "min", null);
tslib_1.__decorate([
    Input()
], SplitterItemComponent.prototype, "size", null);
SplitterItemComponent = tslib_1.__decorate([
    Directive({
        selector: 'smart-splitter-item, [smart-splitter-item]'
    })
], SplitterItemComponent);
export { SplitterItemComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQuc3BsaXR0ZXJpdGVtLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc21hcnQtd2ViY29tcG9uZW50cy1hbmd1bGFyL3NwbGl0dGVyLyIsInNvdXJjZXMiOlsic21hcnQuc3BsaXR0ZXJpdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEksT0FBTyxFQUFFLFdBQVcsRUFBUyxNQUFNLGlCQUFpQixDQUFDO0FBRXJELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQVF4QyxJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFzQixTQUFRLFdBQVc7SUFDckQsWUFBWSxHQUE2QjtRQUN4QyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFJSixrQkFBYSxHQUFVLEVBQUUsQ0FBQztRQUhqQyxJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQyxhQUE2QixDQUFDO0lBQ3hELENBQUM7SUFLRDs7T0FFRztJQUNJLGVBQWUsQ0FBQyxVQUFVLEdBQUcsRUFBRTtRQUNsQyxJQUFJLENBQUMsYUFBYSxHQUFpQixRQUFRLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDcEYsS0FBSyxJQUFJLFlBQVksSUFBSSxVQUFVLEVBQUU7WUFDbkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDN0Q7UUFDRCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDM0IsQ0FBQztJQUNELG9EQUFvRDtJQUVwRCxJQUFJLFFBQVE7UUFDWCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENB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QzlEO2FBQ0Q7U0FDRDtJQUNGLENBQUM7Q0FFRCxDQUFBOztZQS9LaUIsVUFBVTs7QUFvQjNCO0lBREMsS0FBSyxFQUFFO3FEQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7c0RBR1A7QUFPRDtJQURDLEtBQUssRUFBRTt3REFHUDtBQU9EO0lBREMsS0FBSyxFQUFFO29EQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7bURBR1A7QUFPRDtJQURDLEtBQUssRUFBRTtnREFHUDtBQU9EO0lBREMsS0FBSyxFQUFFO2dEQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7aURBR1A7QUF0RlcscUJBQXFCO0lBSmpDLFNBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSw0Q0FBNEM7S0FDdEQsQ0FBQztHQUVXLHFCQUFxQixDQWdMakM7U0FoTFkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3BsaXR0ZXJJdGVtIH0gZnJvbSAnLi8uLi9pbmRleCc7XG5pbXBvcnQgeyBFbGVtZW50UmVuZGVyTW9kZX0gZnJvbSAnLi8uLi9pbmRleCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIERpcmVjdGl2ZSwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VFbGVtZW50LCBTbWFydCB9IGZyb20gJy4vc21hcnQuZWxlbWVudCc7XG5leHBvcnQgeyBFbGVtZW50UmVuZGVyTW9kZX0gZnJvbSAnLi8uLi9pbmRleCc7XG5leHBvcnQgeyBTbWFydCB9IGZyb20gJy4vc21hcnQuZWxlbWVudCc7XG5leHBvcnQgeyBTcGxpdHRlckl0ZW0gfSBmcm9tICcuLy4uL2luZGV4JztcblxuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdzbWFydC1zcGxpdHRlci1pdGVtLCBbc21hcnQtc3BsaXR0ZXItaXRlbV0nXG59KVxuXG5leHBvcnQgY2xhc3MgU3BsaXR0ZXJJdGVtQ29tcG9uZW50IGV4dGVuZHMgQmFzZUVsZW1lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcblx0Y29uc3RydWN0b3IocmVmOiBFbGVtZW50UmVmPFNwbGl0dGVySXRlbT4pIHtcblx0XHRzdXBlcihyZWYpO1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA9IHJlZi5uYXRpdmVFbGVtZW50IGFzIFNwbGl0dGVySXRlbTtcblx0fVxuXG5cdHByaXZhdGUgZXZlbnRIYW5kbGVyczogYW55W10gPSBbXTtcblxuXHRwdWJsaWMgbmF0aXZlRWxlbWVudDogU3BsaXR0ZXJJdGVtO1xuXHQvKiogQGRlc2NyaXB0aW9uIENyZWF0ZXMgdGhlIGNvbXBvbmVudCBvbiBkZW1hbmQuXG5cdCAqIEBwYXJhbSBwcm9wZXJ0aWVzIEFuIG9wdGlvbmFsIG9iamVjdCBvZiBwcm9wZXJ0aWVzLCB3aGljaCB3aWxsIGJlIGFkZGVkIHRvIHRoZSB0ZW1wbGF0ZSBiaW5kZWQgb25lcy5cblx0ICovXG5cdHB1YmxpYyBjcmVhdGVDb21wb25lbnQocHJvcGVydGllcyA9IHt9KTogYW55IHtcbiAgICBcdHRoaXMubmF0aXZlRWxlbWVudCA9IDxTcGxpdHRlckl0ZW0+ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc21hcnQtc3BsaXR0ZXItaXRlbScpO1xuXHRcdGZvciAobGV0IHByb3BlcnR5TmFtZSBpbiBwcm9wZXJ0aWVzKSB7IFxuIFx0XHRcdHRoaXMubmF0aXZlRWxlbWVudFtwcm9wZXJ0eU5hbWVdID0gcHJvcGVydGllc1twcm9wZXJ0eU5hbWVdO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50O1xuXHR9XG5cdC8qKiBAZGVzY3JpcHRpb24gRW5hYmxlcyBvciBkaXNhYmxlcyB0aGUgZWxlbWVudC4gKi9cblx0QElucHV0KClcblx0Z2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZWQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVkID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgb2YgdGhlIGl0ZW0gaXMgY29sbGFwc2VkIG9yIG5vdC4gKi9cblx0QElucHV0KClcblx0Z2V0IGNvbGxhcHNlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbGxhcHNlZCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgY29sbGFwc2VkKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbGxhcHNlZCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIG9mIHRoZSBpdGVtIGNhbiBiZSBjb2xsYXBzZWQuIElmIHNldCB0byBmYWxzZSwgdGhlIGl0ZW0gY2FuJ3QgYmUgY29sbGFwc2VkICovXG5cdEBJbnB1dCgpXG5cdGdldCBjb2xsYXBzaWJsZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbGxhcHNpYmxlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjb2xsYXBzaWJsZSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb2xsYXBzaWJsZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBjb250ZW50IG9mIHRoZSBzcGxpdHRlciBpdGVtcyAqL1xuXHRASW5wdXQoKVxuXHRnZXQgY29udGVudCgpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29udGVudCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgY29udGVudCh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbnRlbnQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyBvZiB0aGUgaXRlbSBjYW4gYmUgcmVzaXplZCBvciBub3QuICovXG5cdEBJbnB1dCgpXG5cdGdldCBsb2NrZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sb2NrZWQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGxvY2tlZCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sb2NrZWQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgbWF4IHNpemUgb2YgdGhlIGl0ZW0uICovXG5cdEBJbnB1dCgpXG5cdGdldCBtYXgoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm1heCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbWF4KHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubWF4ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIG1pbiBzaXplIG9mIHRoZSBpdGVtICovXG5cdEBJbnB1dCgpXG5cdGdldCBtaW4oKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm1pbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbWluKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubWluID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIHNpemUgb2YgdGhlIGl0ZW0uICovXG5cdEBJbnB1dCgpXG5cdGdldCBzaXplKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zaXplIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzaXplKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2l6ZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDb2xsYXBzZXMgdGhlIGl0ZW0uIFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBmYXIuIElmIHNldCB0byB0cnVlIHRoZSBpdGVtIHdpbGwgY29sbGFwc2UgdG8gaXQncyBmYXIgc2lkZSAoIHRvIHRoZSByaWdodCBmb3IgdmVydGljYWwgc3BsaXR0ZXIgYW5kIGRvd24gZm9yIGhvcml6b250YWwpXG5cdCovXG4gICAgcHVibGljIGNvbGxhcHNlKGZhcjogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNvbGxhcHNlKGZhcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sbGFwc2UoZmFyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRXhwYW5kcyB0aGUgaXRlbSBpZiBpdCdzIGNvbGxhcHNlZC4gXG5cdCovXG4gICAgcHVibGljIGV4cGFuZCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZXhwYW5kKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZXhwYW5kKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIExvY2tzIHRoZSBpdGVtIHNvIGl0IGNhbiBubyBsb25nZXIgY2hhbmdlIGl0J3Mgc2l6ZS4gXG5cdCovXG4gICAgcHVibGljIGxvY2soKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmxvY2soKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5sb2NrKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFVubG9ja3MgYSBwcmV2aW91c2x5IGxvY2tlZCBpdGVtLiBcblx0Ki9cbiAgICBwdWJsaWMgdW5sb2NrKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC51bmxvY2soKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC51bmxvY2soKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cblx0Z2V0IGlzUmVuZGVyZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkIDogZmFsc2U7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0fVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cbiAgICAgIHRoYXQub25DcmVhdGUuZW1pdCh0aGF0Lm5hdGl2ZUVsZW1lbnQpO1xuXG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7IHRoYXQub25SZWFkeS5lbWl0KHRoYXQubmF0aXZlRWxlbWVudCk7IH0pO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXHRcdGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQgJiYgdGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcblx0XHRcdGZvciAoY29uc3QgcHJvcE5hbWUgaW4gY2hhbmdlcykge1xuXHRcdFx0XHRpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcblx0XHRcdFx0XHR0aGlzLm5hdGl2ZUVsZW1lbnRbcHJvcE5hbWVdID0gY2hhbmdlc1twcm9wTmFtZV0uY3VycmVudFZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==