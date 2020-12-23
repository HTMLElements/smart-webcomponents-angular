import * as tslib_1 from "tslib";
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { BaseElement } from './smart.element';
export { Smart } from './smart.element';
var ListItemsGroupComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ListItemsGroupComponent, _super);
    function ListItemsGroupComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    ListItemsGroupComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('smart-list-items-group');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(ListItemsGroupComponent.prototype, "label", {
        /** @description  */
        get: function () {
            return this.nativeElement ? this.nativeElement.label : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.label = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListItemsGroupComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    ListItemsGroupComponent.prototype.ngOnInit = function () {
    };
    ListItemsGroupComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
    };
    ListItemsGroupComponent.prototype.ngOnDestroy = function () { };
    ListItemsGroupComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    ListItemsGroupComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    tslib_1.__decorate([
        Input()
    ], ListItemsGroupComponent.prototype, "label", null);
    ListItemsGroupComponent = tslib_1.__decorate([
        Directive({
            selector: 'smart-list-items-group, [smart-list-items-group]'
        })
    ], ListItemsGroupComponent);
    return ListItemsGroupComponent;
}(BaseElement));
export { ListItemsGroupComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQubGlzdGl0ZW1zZ3JvdXAuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zbWFydC13ZWJjb21wb25lbnRzLWFuZ3VsYXIvbXVsdGlsaW5ldGV4dGJveC8iLCJzb3VyY2VzIjpbInNtYXJ0Lmxpc3RpdGVtc2dyb3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEksT0FBTyxFQUFFLFdBQVcsRUFBUyxNQUFNLGlCQUFpQixDQUFDO0FBRXJELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQVF4QztJQUE2QyxtREFBVztJQUN2RCxpQ0FBWSxHQUErQjtRQUEzQyxZQUNDLGtCQUFNLEdBQUcsQ0FBQyxTQUVWO1FBRU8sbUJBQWEsR0FBVSxFQUFFLENBQUM7UUFIakMsS0FBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUMsYUFBK0IsQ0FBQzs7SUFDMUQsQ0FBQztJQUtEOztPQUVHO0lBQ0ksaURBQWUsR0FBdEIsVUFBdUIsVUFBZTtRQUFmLDJCQUFBLEVBQUEsZUFBZTtRQUNsQyxJQUFJLENBQUMsYUFBYSxHQUFtQixRQUFRLENBQUMsYUFBYSxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDekYsS0FBSyxJQUFJLFlBQVksSUFBSSxVQUFVLEVBQUU7WUFDbkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDN0Q7UUFDRCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDM0IsQ0FBQztJQUdELHNCQUFJLDBDQUFLO1FBRlQsb0JBQW9CO2FBRXBCO1lBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2xFLENBQUM7YUFDRCxVQUFVLEtBQWE7WUFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDbkUsQ0FBQzs7O09BSEE7SUFNRCxzQkFBSSwrQ0FBVTthQUFkO1lBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ25FLENBQUM7OztPQUFBO0lBRUQsMENBQVEsR0FBUjtJQUNBLENBQUM7SUFFRSxpREFBZSxHQUFmO1FBQ0UsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWxCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUUzQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxjQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFFRCw2Q0FBVyxHQUFYLGNBQWdCLENBQUM7SUFFakIsNkNBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQ2pDLElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTtZQUN4RCxLQUFLLElBQU0sUUFBUSxJQUFJLE9BQU8sRUFBRTtnQkFDL0IsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxFQUFFO29CQUNyQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUM7aUJBQzlEO2FBQ0Q7U0FDRDtJQUNGLENBQUM7O2dCQXJEZ0IsVUFBVTs7SUFvQjNCO1FBREMsS0FBSyxFQUFFO3dEQUdQO0lBdkJXLHVCQUF1QjtRQUpuQyxTQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsa0RBQWtEO1NBQzVELENBQUM7T0FFVyx1QkFBdUIsQ0F3RG5DO0lBQUQsOEJBQUM7Q0FBQSxBQXhERCxDQUE2QyxXQUFXLEdBd0R2RDtTQXhEWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXN0SXRlbXNHcm91cCB9IGZyb20gJy4vLi4vaW5kZXgnO1xuaW1wb3J0IHsgRWxlbWVudFJlbmRlck1vZGV9IGZyb20gJy4vLi4vaW5kZXgnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBEaXJlY3RpdmUsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXNlRWxlbWVudCwgU21hcnQgfSBmcm9tICcuL3NtYXJ0LmVsZW1lbnQnO1xuZXhwb3J0IHsgRWxlbWVudFJlbmRlck1vZGV9IGZyb20gJy4vLi4vaW5kZXgnO1xuZXhwb3J0IHsgU21hcnQgfSBmcm9tICcuL3NtYXJ0LmVsZW1lbnQnO1xuZXhwb3J0IHsgTGlzdEl0ZW1zR3JvdXAgfSBmcm9tICcuLy4uL2luZGV4JztcblxuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdzbWFydC1saXN0LWl0ZW1zLWdyb3VwLCBbc21hcnQtbGlzdC1pdGVtcy1ncm91cF0nXG59KVxuXG5leHBvcnQgY2xhc3MgTGlzdEl0ZW1zR3JvdXBDb21wb25lbnQgZXh0ZW5kcyBCYXNlRWxlbWVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuXHRjb25zdHJ1Y3RvcihyZWY6IEVsZW1lbnRSZWY8TGlzdEl0ZW1zR3JvdXA+KSB7XG5cdFx0c3VwZXIocmVmKTtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPSByZWYubmF0aXZlRWxlbWVudCBhcyBMaXN0SXRlbXNHcm91cDtcblx0fVxuXG5cdHByaXZhdGUgZXZlbnRIYW5kbGVyczogYW55W10gPSBbXTtcblxuXHRwdWJsaWMgbmF0aXZlRWxlbWVudDogTGlzdEl0ZW1zR3JvdXA7XG5cdC8qKiBAZGVzY3JpcHRpb24gQ3JlYXRlcyB0aGUgY29tcG9uZW50IG9uIGRlbWFuZC5cblx0ICogQHBhcmFtIHByb3BlcnRpZXMgQW4gb3B0aW9uYWwgb2JqZWN0IG9mIHByb3BlcnRpZXMsIHdoaWNoIHdpbGwgYmUgYWRkZWQgdG8gdGhlIHRlbXBsYXRlIGJpbmRlZCBvbmVzLlxuXHQgKi9cblx0cHVibGljIGNyZWF0ZUNvbXBvbmVudChwcm9wZXJ0aWVzID0ge30pOiBhbnkge1xuICAgIFx0dGhpcy5uYXRpdmVFbGVtZW50ID0gPExpc3RJdGVtc0dyb3VwPmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NtYXJ0LWxpc3QtaXRlbXMtZ3JvdXAnKTtcblx0XHRmb3IgKGxldCBwcm9wZXJ0eU5hbWUgaW4gcHJvcGVydGllcykgeyBcbiBcdFx0XHR0aGlzLm5hdGl2ZUVsZW1lbnRbcHJvcGVydHlOYW1lXSA9IHByb3BlcnRpZXNbcHJvcGVydHlOYW1lXTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudDtcblx0fVxuXHQvKiogQGRlc2NyaXB0aW9uICAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbGFiZWwoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxhYmVsIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBsYWJlbCh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxhYmVsID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXG5cdGdldCBpc1JlbmRlcmVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCA6IGZhbHNlO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXG4gICAgICB0aGF0Lm9uQ3JlYXRlLmVtaXQodGhhdC5uYXRpdmVFbGVtZW50KTtcblxuXHRcdHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4geyB0aGF0Lm9uUmVhZHkuZW1pdCh0aGF0Lm5hdGl2ZUVsZW1lbnQpOyB9KTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1x0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblx0XHRpZiAodGhpcy5uYXRpdmVFbGVtZW50ICYmIHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG5cdFx0XHRmb3IgKGNvbnN0IHByb3BOYW1lIGluIGNoYW5nZXMpIHtcblx0XHRcdFx0aWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG5cdFx0XHRcdFx0dGhpcy5uYXRpdmVFbGVtZW50W3Byb3BOYW1lXSA9IGNoYW5nZXNbcHJvcE5hbWVdLmN1cnJlbnRWYWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG59XG4iXX0=