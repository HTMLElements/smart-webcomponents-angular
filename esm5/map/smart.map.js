import * as tslib_1 from "tslib";
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Smart } from './smart.element';
var MapComponent = /** @class */ (function (_super) {
    tslib_1.__extends(MapComponent, _super);
    function MapComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    MapComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('smart-map');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(MapComponent.prototype, "apiKey", {
        /** @description Before you start using the maps component, you need a project with a billing account and the Maps JavaScript API enabled.To learn more, see https://developers.google.com/maps/gmp-get-started.The API key is a unique identifier that authenticates requests associated with your project for usage and billing purposes. You must have at least one API key associated with your project. */
        get: function () {
            return this.nativeElement ? this.nativeElement.apiKey : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.apiKey = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapComponent.prototype, "query", {
        /** @description The query parameter defines the location the user wants to display on the map.The user can input different values for continents, country, city or address. */
        get: function () {
            return this.nativeElement ? this.nativeElement.query : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.query = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapComponent.prototype, "mode", {
        /** @description The mode property handles which mode for the map to be used. */
        get: function () {
            return this.nativeElement ? this.nativeElement.mode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.mode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapComponent.prototype, "mapType", {
        /** @description The 'map-type' property gives the user a set of options to choose from  in order to display certain type of map such as: place,view, streetview. */
        get: function () {
            return this.nativeElement ? this.nativeElement.mapType : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.mapType = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapComponent.prototype, "heading", {
        /** @description This property is defined when used with 'stretview' map type and it defines the horizontal orientation of the streetview panorama. */
        get: function () {
            return this.nativeElement ? this.nativeElement.heading : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.heading = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapComponent.prototype, "pitch", {
        /** @description The  'pitch' property set the value of the vertical orientation('up' and 'down') which by defaault from Google Maps is horizontal. */
        get: function () {
            return this.nativeElement ? this.nativeElement.pitch : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.pitch = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapComponent.prototype, "zoom", {
        /** @description The zoom level of the camera determines the scale of the map. At larger zoom levels more detail can be seen on the screen, while at smaller zoom levels more of the world can be seen on the component.For example the following values show the approximate level of detail you can expect to see at eah zoom level( 1: World, 5: Landmas,10: City,15: Streets,20: Buildings ) */
        get: function () {
            return this.nativeElement ? this.nativeElement.zoom : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.zoom = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    MapComponent.prototype.ngOnInit = function () {
    };
    MapComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
    };
    MapComponent.prototype.ngOnDestroy = function () { };
    MapComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    MapComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
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
    return MapComponent;
}(BaseElement));
export { MapComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQubWFwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc21hcnQtd2ViY29tcG9uZW50cy1hbmd1bGFyL21hcC8iLCJzb3VyY2VzIjpbInNtYXJ0Lm1hcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BJLE9BQU8sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFckQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBUXhDO0lBQWtDLHdDQUFXO0lBQzVDLHNCQUFZLEdBQW9CO1FBQWhDLFlBQ0Msa0JBQU0sR0FBRyxDQUFDLFNBRVY7UUFFTyxtQkFBYSxHQUFVLEVBQUUsQ0FBQztRQUhqQyxLQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQyxhQUFvQixDQUFDOztJQUMvQyxDQUFDO0lBS0Q7O09BRUc7SUFDSSxzQ0FBZSxHQUF0QixVQUF1QixVQUFlO1FBQWYsMkJBQUEsRUFBQSxlQUFlO1FBQ2xDLElBQUksQ0FBQyxhQUFhLEdBQVEsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNqRSxLQUFLLElBQUksWUFBWSxJQUFJLFVBQVUsRUFBRTtZQUNuQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUM3RDtRQUNELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUMzQixDQUFDO0lBR0Qsc0JBQUksZ0NBQU07UUFGViwrWUFBK1k7YUFFL1k7WUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxTQUFTLENB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S0FBSyxFQUFFOzRDQUdQO0lBN0VXLFlBQVk7UUFKeEIsU0FBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLHdCQUF3QjtTQUNsQyxDQUFDO09BRVcsWUFBWSxDQWtIeEI7SUFBRCxtQkFBQztDQUFBLEFBbEhELENBQWtDLFdBQVcsR0FrSDVDO1NBbEhZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNYXAgfSBmcm9tICcuLy4uL2luZGV4JztcbmltcG9ydCB7IEVsZW1lbnRSZW5kZXJNb2RlfSBmcm9tICcuLy4uL2luZGV4JztcbmltcG9ydCB7IENvbXBvbmVudCwgRGlyZWN0aXZlLCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFzZUVsZW1lbnQsIFNtYXJ0IH0gZnJvbSAnLi9zbWFydC5lbGVtZW50JztcbmV4cG9ydCB7IEVsZW1lbnRSZW5kZXJNb2RlfSBmcm9tICcuLy4uL2luZGV4JztcbmV4cG9ydCB7IFNtYXJ0IH0gZnJvbSAnLi9zbWFydC5lbGVtZW50JztcbmV4cG9ydCB7IE1hcCB9IGZyb20gJy4vLi4vaW5kZXgnO1xuXG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ3NtYXJ0LW1hcCwgW3NtYXJ0LW1hcF0nXG59KVxuXG5leHBvcnQgY2xhc3MgTWFwQ29tcG9uZW50IGV4dGVuZHMgQmFzZUVsZW1lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcblx0Y29uc3RydWN0b3IocmVmOiBFbGVtZW50UmVmPE1hcD4pIHtcblx0XHRzdXBlcihyZWYpO1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA9IHJlZi5uYXRpdmVFbGVtZW50IGFzIE1hcDtcblx0fVxuXG5cdHByaXZhdGUgZXZlbnRIYW5kbGVyczogYW55W10gPSBbXTtcblxuXHRwdWJsaWMgbmF0aXZlRWxlbWVudDogTWFwO1xuXHQvKiogQGRlc2NyaXB0aW9uIENyZWF0ZXMgdGhlIGNvbXBvbmVudCBvbiBkZW1hbmQuXG5cdCAqIEBwYXJhbSBwcm9wZXJ0aWVzIEFuIG9wdGlvbmFsIG9iamVjdCBvZiBwcm9wZXJ0aWVzLCB3aGljaCB3aWxsIGJlIGFkZGVkIHRvIHRoZSB0ZW1wbGF0ZSBiaW5kZWQgb25lcy5cblx0ICovXG5cdHB1YmxpYyBjcmVhdGVDb21wb25lbnQocHJvcGVydGllcyA9IHt9KTogYW55IHtcbiAgICBcdHRoaXMubmF0aXZlRWxlbWVudCA9IDxNYXA+ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc21hcnQtbWFwJyk7XG5cdFx0Zm9yIChsZXQgcHJvcGVydHlOYW1lIGluIHByb3BlcnRpZXMpIHsgXG4gXHRcdFx0dGhpcy5uYXRpdmVFbGVtZW50W3Byb3BlcnR5TmFtZV0gPSBwcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV07XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQ7XG5cdH1cblx0LyoqIEBkZXNjcmlwdGlvbiBCZWZvcmUgeW91IHN0YXJ0IHVzaW5nIHRoZSBtYXBzIGNvbXBvbmVudCwgeW91IG5lZWQgYSBwcm9qZWN0IHdpdGggYSBiaWxsaW5nIGFjY291bnQgYW5kIHRoZSBNYXBzIEphdmFTY3JpcHQgQVBJIGVuYWJsZWQuVG8gbGVhcm4gbW9yZSwgc2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZ21wLWdldC1zdGFydGVkLlRoZSBBUEkga2V5IGlzIGEgdW5pcXVlIGlkZW50aWZpZXIgdGhhdCBhdXRoZW50aWNhdGVzIHJlcXVlc3RzIGFzc29jaWF0ZWQgd2l0aCB5b3VyIHByb2plY3QgZm9yIHVzYWdlIGFuZCBiaWxsaW5nIHB1cnBvc2VzLiBZb3UgbXVzdCBoYXZlIGF0IGxlYXN0IG9uZSBBUEkga2V5IGFzc29jaWF0ZWQgd2l0aCB5b3VyIHByb2plY3QuICovXG5cdEBJbnB1dCgpXG5cdGdldCBhcGlLZXkoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmFwaUtleSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYXBpS2V5KHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYXBpS2V5ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoZSBxdWVyeSBwYXJhbWV0ZXIgZGVmaW5lcyB0aGUgbG9jYXRpb24gdGhlIHVzZXIgd2FudHMgdG8gZGlzcGxheSBvbiB0aGUgbWFwLlRoZSB1c2VyIGNhbiBpbnB1dCBkaWZmZXJlbnQgdmFsdWVzIGZvciBjb250aW5lbnRzLCBjb3VudHJ5LCBjaXR5IG9yIGFkZHJlc3MuICovXG5cdEBJbnB1dCgpXG5cdGdldCBxdWVyeSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucXVlcnkgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHF1ZXJ5KHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucXVlcnkgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhlIG1vZGUgcHJvcGVydHkgaGFuZGxlcyB3aGljaCBtb2RlIGZvciB0aGUgbWFwIHRvIGJlIHVzZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBtb2RlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5tb2RlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBtb2RlKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubW9kZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGUgJ21hcC10eXBlJyBwcm9wZXJ0eSBnaXZlcyB0aGUgdXNlciBhIHNldCBvZiBvcHRpb25zIHRvIGNob29zZSBmcm9tICBpbiBvcmRlciB0byBkaXNwbGF5IGNlcnRhaW4gdHlwZSBvZiBtYXAgc3VjaCBhczogcGxhY2Usdmlldywgc3RyZWV0dmlldy4gKi9cblx0QElucHV0KClcblx0Z2V0IG1hcFR5cGUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm1hcFR5cGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG1hcFR5cGUodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5tYXBUeXBlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgcHJvcGVydHkgaXMgZGVmaW5lZCB3aGVuIHVzZWQgd2l0aCAnc3RyZXR2aWV3JyBtYXAgdHlwZSBhbmQgaXQgZGVmaW5lcyB0aGUgaG9yaXpvbnRhbCBvcmllbnRhdGlvbiBvZiB0aGUgc3RyZWV0dmlldyBwYW5vcmFtYS4gKi9cblx0QElucHV0KClcblx0Z2V0IGhlYWRpbmcoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmhlYWRpbmcgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGhlYWRpbmcodmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oZWFkaW5nID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoZSAgJ3BpdGNoJyBwcm9wZXJ0eSBzZXQgdGhlIHZhbHVlIG9mIHRoZSB2ZXJ0aWNhbCBvcmllbnRhdGlvbigndXAnIGFuZCAnZG93bicpIHdoaWNoIGJ5IGRlZmFhdWx0IGZyb20gR29vZ2xlIE1hcHMgaXMgaG9yaXpvbnRhbC4gKi9cblx0QElucHV0KClcblx0Z2V0IHBpdGNoKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5waXRjaCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcGl0Y2godmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5waXRjaCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGUgem9vbSBsZXZlbCBvZiB0aGUgY2FtZXJhIGRldGVybWluZXMgdGhlIHNjYWxlIG9mIHRoZSBtYXAuIEF0IGxhcmdlciB6b29tIGxldmVscyBtb3JlIGRldGFpbCBjYW4gYmUgc2VlbiBvbiB0aGUgc2NyZWVuLCB3aGlsZSBhdCBzbWFsbGVyIHpvb20gbGV2ZWxzIG1vcmUgb2YgdGhlIHdvcmxkIGNhbiBiZSBzZWVuIG9uIHRoZSBjb21wb25lbnQuRm9yIGV4YW1wbGUgdGhlIGZvbGxvd2luZyB2YWx1ZXMgc2hvdyB0aGUgYXBwcm94aW1hdGUgbGV2ZWwgb2YgZGV0YWlsIHlvdSBjYW4gZXhwZWN0IHRvIHNlZSBhdCBlYWggem9vbSBsZXZlbCggMTogV29ybGQsIDU6IExhbmRtYXMsMTA6IENpdHksMTU6IFN0cmVldHMsMjA6IEJ1aWxkaW5ncyApICovXG5cdEBJbnB1dCgpXG5cdGdldCB6b29tKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC56b29tIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB6b29tKHZhbHVlOiBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuem9vbSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblxuXHRnZXQgaXNSZW5kZXJlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQgOiBmYWxzZTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHR9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICBjb25zdCB0aGF0ID0gdGhpcztcblxuICAgICAgdGhhdC5vbkNyZWF0ZS5lbWl0KHRoYXQubmF0aXZlRWxlbWVudCk7XG5cblx0XHRTbWFydC5SZW5kZXIoKTtcblxuXHRcdHRoaXMubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzbWFydC1hbmd1bGFyJyk7XG5cblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHsgdGhhdC5vblJlYWR5LmVtaXQodGhhdC5uYXRpdmVFbGVtZW50KTsgfSk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdFx0aWYgKHRoaXMubmF0aXZlRWxlbWVudCAmJiB0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuXHRcdFx0Zm9yIChjb25zdCBwcm9wTmFtZSBpbiBjaGFuZ2VzKSB7XG5cdFx0XHRcdGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuXHRcdFx0XHRcdHRoaXMubmF0aXZlRWxlbWVudFtwcm9wTmFtZV0gPSBjaGFuZ2VzW3Byb3BOYW1lXS5jdXJyZW50VmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxufVxuIl19