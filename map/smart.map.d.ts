import { Map } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { BaseElement } from './smart.element';
export { ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { Map } from './../index';
export declare class MapComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<Map>);
    private eventHandlers;
    nativeElement: Map;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description Before you start using the maps component, you need a project with a billing account and the Maps JavaScript API enabled.To learn more, see https://developers.google.com/maps/gmp-get-started.The API key is a unique identifier that authenticates requests associated with your project for usage and billing purposes. You must have at least one API key associated with your project. */
    apiKey: string;
    /** @description The query parameter defines the location the user wants to display on the map.The user can input different values for continents, country, city or address. */
    query: string;
    /** @description The mode property handles which mode for the map to be used. */
    mode: string;
    /** @description The 'map-type' property gives the user a set of options to choose from  in order to display certain type of map such as: place,view, streetview. */
    mapType: string;
    /** @description This property is defined when used with 'stretview' map type and it defines the horizontal orientation of the streetview panorama. */
    heading: number;
    /** @description The  'pitch' property set the value of the vertical orientation('up' and 'down') which by defaault from Google Maps is horizontal. */
    pitch: number;
    /** @description The zoom level of the camera determines the scale of the map. At larger zoom levels more detail can be seen on the screen, while at smaller zoom levels more of the world can be seen on the component.For example the following values show the approximate level of detail you can expect to see at eah zoom level( 1: World, 5: Landmas,10: City,15: Streets,20: Buildings ) */
    zoom: number;
    readonly isRendered: boolean;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
