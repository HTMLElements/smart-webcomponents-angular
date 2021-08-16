import * as tslib_1 from "tslib";
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Smart } from './smart.element';
let MapComponent = class MapComponent extends BaseElement {
    constructor(ref) {
        super(ref);
        this.eventHandlers = [];
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('smart-map');
        for (let propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    }
    /** @description Before you start using the maps component, you need a project with a billing account and the Maps JavaScript API enabled.To learn more, see https://developers.google.com/maps/gmp-get-started.The API key is a unique identifier that authenticates requests associated with your project for usage and billing purposes. You must have at least one API key associated with your project. */
    get apiKey() {
        return this.nativeElement ? this.nativeElement.apiKey : undefined;
    }
    set apiKey(value) {
        this.nativeElement ? this.nativeElement.apiKey = value : undefined;
    }
    /** @description The query parameter defines the location the user wants to display on the map.The user can input different values for continents, country, city or address. */
    get query() {
        return this.nativeElement ? this.nativeElement.query : undefined;
    }
    set query(value) {
        this.nativeElement ? this.nativeElement.query = value : undefined;
    }
    /** @description The mode property handles which mode for the map to be used. */
    get mode() {
        return this.nativeElement ? this.nativeElement.mode : undefined;
    }
    set mode(value) {
        this.nativeElement ? this.nativeElement.mode = value : undefined;
    }
    /** @description The 'map-type' property gives the user a set of options to choose from  in order to display certain type of map such as: place,view, streetview. */
    get mapType() {
        return this.nativeElement ? this.nativeElement.mapType : undefined;
    }
    set mapType(value) {
        this.nativeElement ? this.nativeElement.mapType = value : undefined;
    }
    /** @description This property is defined when used with 'stretview' map type and it defines the horizontal orientation of the streetview panorama. */
    get heading() {
        return this.nativeElement ? this.nativeElement.heading : undefined;
    }
    set heading(value) {
        this.nativeElement ? this.nativeElement.heading = value : undefined;
    }
    /** @description The  'pitch' property set the value of the vertical orientation('up' and 'down') which by defaault from Google Maps is horizontal. */
    get pitch() {
        return this.nativeElement ? this.nativeElement.pitch : undefined;
    }
    set pitch(value) {
        this.nativeElement ? this.nativeElement.pitch = value : undefined;
    }
    /** @description The zoom level of the camera determines the scale of the map. At larger zoom levels more detail can be seen on the screen, while at smaller zoom levels more of the world can be seen on the component.For example the following values show the approximate level of detail you can expect to see at eah zoom level( 1: World, 5: Landmas,10: City,15: Streets,20: Buildings ) */
    get zoom() {
        return this.nativeElement ? this.nativeElement.zoom : undefined;
    }
    set zoom(value) {
        this.nativeElement ? this.nativeElement.zoom = value : undefined;
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
MapComponent.ctorParameters = () => [
    { type: ElementRef }
];
tslib_1.__decorate([
    Input()
], MapComponent.prototype, "apiKey", null);
tslib_1.__decorate([
    Input()
], MapComponent.prototype, "query", null);
tslib_1.__decorate([
    Input()
], MapComponent.prototype, "mode", null);
tslib_1.__decorate([
    Input()
], MapComponent.prototype, "mapType", null);
tslib_1.__decorate([
    Input()
], MapComponent.prototype, "heading", null);
tslib_1.__decorate([
    Input()
], MapComponent.prototype, "pitch", null);
tslib_1.__decorate([
    Input()
], MapComponent.prototype, "zoom", null);
MapComponent = tslib_1.__decorate([
    Directive({
        selector: 'smart-map, [smart-map]'
    })
], MapComponent);
export { MapComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQubWFwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc21hcnQtd2ViY29tcG9uZW50cy1hbmd1bGFyL21hcC8iLCJzb3VyY2VzIjpbInNtYXJ0Lm1hcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BJLE9BQU8sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFckQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBUXhDLElBQWEsWUFBWSxHQUF6QixNQUFhLFlBQWEsU0FBUSxXQUFXO0lBQzVDLFlBQVksR0FBb0I7UUFDL0IsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBSUosa0JBQWEsR0FBVSxFQUFFLENBQUM7UUFIakMsSUFBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUMsYUFBb0IsQ0FBQztJQUMvQyxDQUFDO0lBS0Q7O09BRUc7SUFDSSxlQUFlLENBQUMsVUFBVSxHQUFHLEVBQUU7UUFDbEMsSUFBSSxDQUFDLGFBQWEsR0FBUSxRQUFRLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pFLEtBQUssSUFBSSxZQUFZLElBQUksVUFBVSxFQUFFO1lBQ25DLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEdBQUcsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzdEO1FBQ0QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzNCLENBQUM7SUFDRCwrWUFBK1k7SUFFL1ksSUFBSSxNQUFNO1FBQ1QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lB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VixRQUFRLEVBQUUsd0JBQXdCO0tBQ2xDLENBQUM7R0FFVyxZQUFZLENBa0h4QjtTQWxIWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWFwIH0gZnJvbSAnLi8uLi9pbmRleCc7XG5pbXBvcnQgeyBFbGVtZW50UmVuZGVyTW9kZX0gZnJvbSAnLi8uLi9pbmRleCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIERpcmVjdGl2ZSwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VFbGVtZW50LCBTbWFydCB9IGZyb20gJy4vc21hcnQuZWxlbWVudCc7XG5leHBvcnQgeyBFbGVtZW50UmVuZGVyTW9kZX0gZnJvbSAnLi8uLi9pbmRleCc7XG5leHBvcnQgeyBTbWFydCB9IGZyb20gJy4vc21hcnQuZWxlbWVudCc7XG5leHBvcnQgeyBNYXAgfSBmcm9tICcuLy4uL2luZGV4JztcblxuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdzbWFydC1tYXAsIFtzbWFydC1tYXBdJ1xufSlcblxuZXhwb3J0IGNsYXNzIE1hcENvbXBvbmVudCBleHRlbmRzIEJhc2VFbGVtZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG5cdGNvbnN0cnVjdG9yKHJlZjogRWxlbWVudFJlZjxNYXA+KSB7XG5cdFx0c3VwZXIocmVmKTtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPSByZWYubmF0aXZlRWxlbWVudCBhcyBNYXA7XG5cdH1cblxuXHRwcml2YXRlIGV2ZW50SGFuZGxlcnM6IGFueVtdID0gW107XG5cblx0cHVibGljIG5hdGl2ZUVsZW1lbnQ6IE1hcDtcblx0LyoqIEBkZXNjcmlwdGlvbiBDcmVhdGVzIHRoZSBjb21wb25lbnQgb24gZGVtYW5kLlxuXHQgKiBAcGFyYW0gcHJvcGVydGllcyBBbiBvcHRpb25hbCBvYmplY3Qgb2YgcHJvcGVydGllcywgd2hpY2ggd2lsbCBiZSBhZGRlZCB0byB0aGUgdGVtcGxhdGUgYmluZGVkIG9uZXMuXG5cdCAqL1xuXHRwdWJsaWMgY3JlYXRlQ29tcG9uZW50KHByb3BlcnRpZXMgPSB7fSk6IGFueSB7XG4gICAgXHR0aGlzLm5hdGl2ZUVsZW1lbnQgPSA8TWFwPmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NtYXJ0LW1hcCcpO1xuXHRcdGZvciAobGV0IHByb3BlcnR5TmFtZSBpbiBwcm9wZXJ0aWVzKSB7IFxuIFx0XHRcdHRoaXMubmF0aXZlRWxlbWVudFtwcm9wZXJ0eU5hbWVdID0gcHJvcGVydGllc1twcm9wZXJ0eU5hbWVdO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50O1xuXHR9XG5cdC8qKiBAZGVzY3JpcHRpb24gQmVmb3JlIHlvdSBzdGFydCB1c2luZyB0aGUgbWFwcyBjb21wb25lbnQsIHlvdSBuZWVkIGEgcHJvamVjdCB3aXRoIGEgYmlsbGluZyBhY2NvdW50IGFuZCB0aGUgTWFwcyBKYXZhU2NyaXB0IEFQSSBlbmFibGVkLlRvIGxlYXJuIG1vcmUsIHNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2dtcC1nZXQtc3RhcnRlZC5UaGUgQVBJIGtleSBpcyBhIHVuaXF1ZSBpZGVudGlmaWVyIHRoYXQgYXV0aGVudGljYXRlcyByZXF1ZXN0cyBhc3NvY2lhdGVkIHdpdGggeW91ciBwcm9qZWN0IGZvciB1c2FnZSBhbmQgYmlsbGluZyBwdXJwb3Nlcy4gWW91IG11c3QgaGF2ZSBhdCBsZWFzdCBvbmUgQVBJIGtleSBhc3NvY2lhdGVkIHdpdGggeW91ciBwcm9qZWN0LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgYXBpS2V5KCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hcGlLZXkgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGFwaUtleSh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmFwaUtleSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGUgcXVlcnkgcGFyYW1ldGVyIGRlZmluZXMgdGhlIGxvY2F0aW9uIHRoZSB1c2VyIHdhbnRzIHRvIGRpc3BsYXkgb24gdGhlIG1hcC5UaGUgdXNlciBjYW4gaW5wdXQgZGlmZmVyZW50IHZhbHVlcyBmb3IgY29udGluZW50cywgY291bnRyeSwgY2l0eSBvciBhZGRyZXNzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcXVlcnkoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnF1ZXJ5IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBxdWVyeSh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnF1ZXJ5ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoZSBtb2RlIHByb3BlcnR5IGhhbmRsZXMgd2hpY2ggbW9kZSBmb3IgdGhlIG1hcCB0byBiZSB1c2VkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbW9kZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubW9kZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbW9kZSh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm1vZGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhlICdtYXAtdHlwZScgcHJvcGVydHkgZ2l2ZXMgdGhlIHVzZXIgYSBzZXQgb2Ygb3B0aW9ucyB0byBjaG9vc2UgZnJvbSAgaW4gb3JkZXIgdG8gZGlzcGxheSBjZXJ0YWluIHR5cGUgb2YgbWFwIHN1Y2ggYXM6IHBsYWNlLHZpZXcsIHN0cmVldHZpZXcuICovXG5cdEBJbnB1dCgpXG5cdGdldCBtYXBUeXBlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5tYXBUeXBlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBtYXBUeXBlKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubWFwVHlwZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIHByb3BlcnR5IGlzIGRlZmluZWQgd2hlbiB1c2VkIHdpdGggJ3N0cmV0dmlldycgbWFwIHR5cGUgYW5kIGl0IGRlZmluZXMgdGhlIGhvcml6b250YWwgb3JpZW50YXRpb24gb2YgdGhlIHN0cmVldHZpZXcgcGFub3JhbWEuICovXG5cdEBJbnB1dCgpXG5cdGdldCBoZWFkaW5nKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oZWFkaW5nIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBoZWFkaW5nKHZhbHVlOiBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGVhZGluZyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGUgICdwaXRjaCcgcHJvcGVydHkgc2V0IHRoZSB2YWx1ZSBvZiB0aGUgdmVydGljYWwgb3JpZW50YXRpb24oJ3VwJyBhbmQgJ2Rvd24nKSB3aGljaCBieSBkZWZhYXVsdCBmcm9tIEdvb2dsZSBNYXBzIGlzIGhvcml6b250YWwuICovXG5cdEBJbnB1dCgpXG5cdGdldCBwaXRjaCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucGl0Y2ggOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHBpdGNoKHZhbHVlOiBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucGl0Y2ggPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhlIHpvb20gbGV2ZWwgb2YgdGhlIGNhbWVyYSBkZXRlcm1pbmVzIHRoZSBzY2FsZSBvZiB0aGUgbWFwLiBBdCBsYXJnZXIgem9vbSBsZXZlbHMgbW9yZSBkZXRhaWwgY2FuIGJlIHNlZW4gb24gdGhlIHNjcmVlbiwgd2hpbGUgYXQgc21hbGxlciB6b29tIGxldmVscyBtb3JlIG9mIHRoZSB3b3JsZCBjYW4gYmUgc2VlbiBvbiB0aGUgY29tcG9uZW50LkZvciBleGFtcGxlIHRoZSBmb2xsb3dpbmcgdmFsdWVzIHNob3cgdGhlIGFwcHJveGltYXRlIGxldmVsIG9mIGRldGFpbCB5b3UgY2FuIGV4cGVjdCB0byBzZWUgYXQgZWFoIHpvb20gbGV2ZWwoIDE6IFdvcmxkLCA1OiBMYW5kbWFzLDEwOiBDaXR5LDE1OiBTdHJlZXRzLDIwOiBCdWlsZGluZ3MgKSAqL1xuXHRASW5wdXQoKVxuXHRnZXQgem9vbSgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuem9vbSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgem9vbSh2YWx1ZTogbnVtYmVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lnpvb20gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cblx0Z2V0IGlzUmVuZGVyZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkIDogZmFsc2U7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0fVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cbiAgICAgIHRoYXQub25DcmVhdGUuZW1pdCh0aGF0Lm5hdGl2ZUVsZW1lbnQpO1xuXG5cdFx0U21hcnQuUmVuZGVyKCk7XG5cblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc21hcnQtYW5ndWxhcicpO1xuXG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7IHRoYXQub25SZWFkeS5lbWl0KHRoYXQubmF0aXZlRWxlbWVudCk7IH0pO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXHRcdGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQgJiYgdGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcblx0XHRcdGZvciAoY29uc3QgcHJvcE5hbWUgaW4gY2hhbmdlcykge1xuXHRcdFx0XHRpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcblx0XHRcdFx0XHR0aGlzLm5hdGl2ZUVsZW1lbnRbcHJvcE5hbWVdID0gY2hhbmdlc1twcm9wTmFtZV0uY3VycmVudFZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==