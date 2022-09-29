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
            exportAs: 'smart-map', selector: 'smart-map, [smart-map]'
        })
    ], MapComponent);
    return MapComponent;
}(BaseElement));
export { MapComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQubWFwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc21hcnQtd2ViY29tcG9uZW50cy1hbmd1bGFyL21hcC8iLCJzb3VyY2VzIjpbInNtYXJ0Lm1hcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BJLE9BQU8sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFckQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBUXhDO0lBQWtDLHdDQUFXO0lBQzVDLHNCQUFZLEdBQW9CO1FBQWhDLFlBQ0Msa0JBQU0sR0FBRyxDQUFDLFNBRVY7UUFFTyxtQkFBYSxHQUFVLEVBQUUsQ0FBQztRQUhqQyxLQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQyxhQUFvQixDQUFDOztJQUMvQyxDQUFDO0lBS0Q7O09BRUc7SUFDSSxzQ0FBZSxHQUF0QixVQUF1QixVQUFlO1FBQWYsMkJBQUEsRUFBQSxlQUFlO1FBQ2xDLElBQUksQ0FBQyxhQUFhLEdBQVEsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNqRSxLQUFLLElBQUksWUFBWSxJQUFJLFVBQVUsRUFBRTtZQUNuQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUM3RDtRQUNELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUMzQixDQUFDO0lBR0Qsc0JBQUksZ0NBQU07UUFGViwrWUFBK1k7YUFFL1k7WUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxTQUFTLENB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S0FBSyxFQUFFOzRDQUdQO0lBN0VXLFlBQVk7UUFKeEIsU0FBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsd0JBQXdCO1NBQ3pELENBQUM7T0FFVyxZQUFZLENBa0h4QjtJQUFELG1CQUFDO0NBQUEsQUFsSEQsQ0FBa0MsV0FBVyxHQWtINUM7U0FsSFksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1hcCB9IGZyb20gJy4vLi4vaW5kZXgnO1xuaW1wb3J0IHsgRWxlbWVudFJlbmRlck1vZGV9IGZyb20gJy4vLi4vaW5kZXgnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBEaXJlY3RpdmUsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXNlRWxlbWVudCwgU21hcnQgfSBmcm9tICcuL3NtYXJ0LmVsZW1lbnQnO1xuZXhwb3J0IHsgRWxlbWVudFJlbmRlck1vZGV9IGZyb20gJy4vLi4vaW5kZXgnO1xuZXhwb3J0IHsgU21hcnQgfSBmcm9tICcuL3NtYXJ0LmVsZW1lbnQnO1xuZXhwb3J0IHsgTWFwIH0gZnJvbSAnLi8uLi9pbmRleCc7XG5cblxuQERpcmVjdGl2ZSh7XG5cdGV4cG9ydEFzOiAnc21hcnQtbWFwJyxcdHNlbGVjdG9yOiAnc21hcnQtbWFwLCBbc21hcnQtbWFwXSdcbn0pXG5cbmV4cG9ydCBjbGFzcyBNYXBDb21wb25lbnQgZXh0ZW5kcyBCYXNlRWxlbWVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuXHRjb25zdHJ1Y3RvcihyZWY6IEVsZW1lbnRSZWY8TWFwPikge1xuXHRcdHN1cGVyKHJlZik7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID0gcmVmLm5hdGl2ZUVsZW1lbnQgYXMgTWFwO1xuXHR9XG5cblx0cHJpdmF0ZSBldmVudEhhbmRsZXJzOiBhbnlbXSA9IFtdO1xuXG5cdHB1YmxpYyBuYXRpdmVFbGVtZW50OiBNYXA7XG5cdC8qKiBAZGVzY3JpcHRpb24gQ3JlYXRlcyB0aGUgY29tcG9uZW50IG9uIGRlbWFuZC5cblx0ICogQHBhcmFtIHByb3BlcnRpZXMgQW4gb3B0aW9uYWwgb2JqZWN0IG9mIHByb3BlcnRpZXMsIHdoaWNoIHdpbGwgYmUgYWRkZWQgdG8gdGhlIHRlbXBsYXRlIGJpbmRlZCBvbmVzLlxuXHQgKi9cblx0cHVibGljIGNyZWF0ZUNvbXBvbmVudChwcm9wZXJ0aWVzID0ge30pOiBhbnkge1xuICAgIFx0dGhpcy5uYXRpdmVFbGVtZW50ID0gPE1hcD5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzbWFydC1tYXAnKTtcblx0XHRmb3IgKGxldCBwcm9wZXJ0eU5hbWUgaW4gcHJvcGVydGllcykgeyBcbiBcdFx0XHR0aGlzLm5hdGl2ZUVsZW1lbnRbcHJvcGVydHlOYW1lXSA9IHByb3BlcnRpZXNbcHJvcGVydHlOYW1lXTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudDtcblx0fVxuXHQvKiogQGRlc2NyaXB0aW9uIEJlZm9yZSB5b3Ugc3RhcnQgdXNpbmcgdGhlIG1hcHMgY29tcG9uZW50LCB5b3UgbmVlZCBhIHByb2plY3Qgd2l0aCBhIGJpbGxpbmcgYWNjb3VudCBhbmQgdGhlIE1hcHMgSmF2YVNjcmlwdCBBUEkgZW5hYmxlZC5UbyBsZWFybiBtb3JlLCBzZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9nbXAtZ2V0LXN0YXJ0ZWQuVGhlIEFQSSBrZXkgaXMgYSB1bmlxdWUgaWRlbnRpZmllciB0aGF0IGF1dGhlbnRpY2F0ZXMgcmVxdWVzdHMgYXNzb2NpYXRlZCB3aXRoIHlvdXIgcHJvamVjdCBmb3IgdXNhZ2UgYW5kIGJpbGxpbmcgcHVycG9zZXMuIFlvdSBtdXN0IGhhdmUgYXQgbGVhc3Qgb25lIEFQSSBrZXkgYXNzb2NpYXRlZCB3aXRoIHlvdXIgcHJvamVjdC4gKi9cblx0QElucHV0KClcblx0Z2V0IGFwaUtleSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYXBpS2V5IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBhcGlLZXkodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hcGlLZXkgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhlIHF1ZXJ5IHBhcmFtZXRlciBkZWZpbmVzIHRoZSBsb2NhdGlvbiB0aGUgdXNlciB3YW50cyB0byBkaXNwbGF5IG9uIHRoZSBtYXAuVGhlIHVzZXIgY2FuIGlucHV0IGRpZmZlcmVudCB2YWx1ZXMgZm9yIGNvbnRpbmVudHMsIGNvdW50cnksIGNpdHkgb3IgYWRkcmVzcy4gKi9cblx0QElucHV0KClcblx0Z2V0IHF1ZXJ5KCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5xdWVyeSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcXVlcnkodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5xdWVyeSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGUgbW9kZSBwcm9wZXJ0eSBoYW5kbGVzIHdoaWNoIG1vZGUgZm9yIHRoZSBtYXAgdG8gYmUgdXNlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IG1vZGUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm1vZGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG1vZGUodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5tb2RlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoZSAnbWFwLXR5cGUnIHByb3BlcnR5IGdpdmVzIHRoZSB1c2VyIGEgc2V0IG9mIG9wdGlvbnMgdG8gY2hvb3NlIGZyb20gIGluIG9yZGVyIHRvIGRpc3BsYXkgY2VydGFpbiB0eXBlIG9mIG1hcCBzdWNoIGFzOiBwbGFjZSx2aWV3LCBzdHJlZXR2aWV3LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbWFwVHlwZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubWFwVHlwZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbWFwVHlwZSh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm1hcFR5cGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBwcm9wZXJ0eSBpcyBkZWZpbmVkIHdoZW4gdXNlZCB3aXRoICdzdHJldHZpZXcnIG1hcCB0eXBlIGFuZCBpdCBkZWZpbmVzIHRoZSBob3Jpem9udGFsIG9yaWVudGF0aW9uIG9mIHRoZSBzdHJlZXR2aWV3IHBhbm9yYW1hLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgaGVhZGluZygpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGVhZGluZyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgaGVhZGluZyh2YWx1ZTogbnVtYmVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmhlYWRpbmcgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhlICAncGl0Y2gnIHByb3BlcnR5IHNldCB0aGUgdmFsdWUgb2YgdGhlIHZlcnRpY2FsIG9yaWVudGF0aW9uKCd1cCcgYW5kICdkb3duJykgd2hpY2ggYnkgZGVmYWF1bHQgZnJvbSBHb29nbGUgTWFwcyBpcyBob3Jpem9udGFsLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcGl0Y2goKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnBpdGNoIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBwaXRjaCh2YWx1ZTogbnVtYmVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnBpdGNoID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoZSB6b29tIGxldmVsIG9mIHRoZSBjYW1lcmEgZGV0ZXJtaW5lcyB0aGUgc2NhbGUgb2YgdGhlIG1hcC4gQXQgbGFyZ2VyIHpvb20gbGV2ZWxzIG1vcmUgZGV0YWlsIGNhbiBiZSBzZWVuIG9uIHRoZSBzY3JlZW4sIHdoaWxlIGF0IHNtYWxsZXIgem9vbSBsZXZlbHMgbW9yZSBvZiB0aGUgd29ybGQgY2FuIGJlIHNlZW4gb24gdGhlIGNvbXBvbmVudC5Gb3IgZXhhbXBsZSB0aGUgZm9sbG93aW5nIHZhbHVlcyBzaG93IHRoZSBhcHByb3hpbWF0ZSBsZXZlbCBvZiBkZXRhaWwgeW91IGNhbiBleHBlY3QgdG8gc2VlIGF0IGVhaCB6b29tIGxldmVsKCAxOiBXb3JsZCwgNTogTGFuZG1hcywxMDogQ2l0eSwxNTogU3RyZWV0cywyMDogQnVpbGRpbmdzICkgKi9cblx0QElucHV0KClcblx0Z2V0IHpvb20oKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lnpvb20gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHpvb20odmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC56b29tID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXG5cdGdldCBpc1JlbmRlcmVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCA6IGZhbHNlO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXG4gICAgICB0aGF0Lm9uQ3JlYXRlLmVtaXQodGhhdC5uYXRpdmVFbGVtZW50KTtcblxuXHRcdFNtYXJ0LlJlbmRlcigpO1xuXG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NtYXJ0LWFuZ3VsYXInKTtcblxuXHRcdHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4geyB0aGF0Lm9uUmVhZHkuZW1pdCh0aGF0Lm5hdGl2ZUVsZW1lbnQpOyB9KTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1x0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblx0XHRpZiAodGhpcy5uYXRpdmVFbGVtZW50ICYmIHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG5cdFx0XHRmb3IgKGNvbnN0IHByb3BOYW1lIGluIGNoYW5nZXMpIHtcblx0XHRcdFx0aWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG5cdFx0XHRcdFx0dGhpcy5uYXRpdmVFbGVtZW50W3Byb3BOYW1lXSA9IGNoYW5nZXNbcHJvcE5hbWVdLmN1cnJlbnRWYWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG59XG4iXX0=