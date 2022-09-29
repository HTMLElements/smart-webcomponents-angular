
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.map';

import { __decorate } from 'tslib';
import { EventEmitter, Output, Input, ElementRef, Directive, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

class BaseElement {
    constructor(ref) {
        this.onCreate = new EventEmitter();
        this.onReady = new EventEmitter();
        this.onAttach = new EventEmitter();
        this.onDetach = new EventEmitter();
        const that = this;
        this.nativeElement = ref.nativeElement;
        that.nativeElement.onAttached = () => {
            that.onAttach.emit(that.nativeElement);
        };
        that.nativeElement.onDetached = () => {
            that.onDetach.emit(that.nativeElement);
        };
    }
    addEventListener(type, listener, options = false) {
        this.nativeElement.addEventListener(type, listener, options);
    }
    removeEventListener(type, listener, options = false) {
        this.nativeElement.removeEventListener(type, listener, options);
    }
    dispatchEvent(event) {
        return this.nativeElement.dispatchEvent(event);
    }
    blur() {
        this.nativeElement.blur();
    }
    click() {
        this.nativeElement.click();
    }
    focus(options) {
        this.nativeElement.focus(options);
    }
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    get locale() {
        return this.nativeElement ? this.nativeElement.locale : undefined;
    }
    set locale(value) {
        this.nativeElement ? this.nativeElement.locale = value : undefined;
    }
    /** @description Callback used to customize the format of the messages that are returned from the Localization Module. */
    get localizeFormatFunction() {
        return this.nativeElement ? this.nativeElement.localizeFormatFunction : undefined;
    }
    set localizeFormatFunction(value) {
        this.nativeElement ? this.nativeElement.localizeFormatFunction = value : undefined;
    }
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
    get messages() {
        return this.nativeElement ? this.nativeElement.messages : undefined;
    }
    set messages(value) {
        this.nativeElement ? this.nativeElement.messages = value : undefined;
    }
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    get rightToLeft() {
        return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
    }
    set rightToLeft(value) {
        this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
    }
    /** @description Determines the theme. Theme defines the look of the element */
    get theme() {
        return this.nativeElement ? this.nativeElement.theme : undefined;
    }
    set theme(value) {
        this.nativeElement ? this.nativeElement.theme = value : undefined;
    }
}
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
const Smart = window.Smart;

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
__decorate([
    Input()
], MapComponent.prototype, "apiKey", null);
__decorate([
    Input()
], MapComponent.prototype, "query", null);
__decorate([
    Input()
], MapComponent.prototype, "mode", null);
__decorate([
    Input()
], MapComponent.prototype, "mapType", null);
__decorate([
    Input()
], MapComponent.prototype, "heading", null);
__decorate([
    Input()
], MapComponent.prototype, "pitch", null);
__decorate([
    Input()
], MapComponent.prototype, "zoom", null);
MapComponent = __decorate([
    Directive({
        exportAs: 'smart-map', selector: 'smart-map, [smart-map]'
    })
], MapComponent);

let MapModule = class MapModule {
};
MapModule = __decorate([
    NgModule({
        declarations: [MapComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        exports: [MapComponent]
    })
], MapModule);

/**
 * Generated bundle index. Do not edit.
 */

export { MapComponent, MapModule, Smart, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-map.js.map
