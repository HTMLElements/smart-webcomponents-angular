import { Carousel } from './../index';
import { Animation, CarouselDisplayMode } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { Animation, CarouselDisplayMode, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { Carousel } from './../index';
export declare class CarouselComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<Carousel>);
    private eventHandlers;
    nativeElement: Carousel;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
    animation: Animation | string;
    /** @description The items switch automatically if set to true or to a custom number(representing the timeout in milliseconds). This property works if slideShow property is enabled. */
    autoPlay: boolean;
    /** @description An array of objects. Each object defines an item. The following object properties are available: label - a string representing the label of the item.content - a string representing the content of the itemimage - a string representing a url link to an image.HTMLcontent - a string representing some HTML structure taht will be generated inside the item. */
    dataSource: any[];
    /** @description Specifies the timeout before a slide changes when a navigation button is pressed. Navigation buttons are repeat buttons that will repeat the oepration after the delay is passed. */
    delay: number;
    /** @description Enables or disables the element. */
    disabled: boolean;
    /** @description Disabled the possibility to navigated to an item by clicking on item in displayMode 3d. By default users can navigate to items that are not currently active by clicking on them. */
    disableItemClick: boolean;
    /** @description Determines the display mode. */
    displayMode: CarouselDisplayMode | string;
    /** @description Hides the navigation buttons. */
    hideArrows: boolean;
    /** @description Hides the slide indication panel that shows which item is currently in view (active item). */
    hideIndicators: boolean;
    /** @description Can be used to customize the slide indicator panel of the accordion. The property can be a string that represents the id of an HTMLTemplateElement in the DOM or it's direct reference. */
    indicatorTemplate: any;
    /** @description Determines the interval (in milliseconds) between a slide transitions when slideShow is enabled. */
    interval: number;
    /** @description Used to completely customize the content of an item. The property can be a string that represents the id of an HTMLTemplateElement in the DOM or it's direct reference. The content of the template can contain property bindings that refer to the dataSource. */
    itemTemplate: any;
    /** @description Activates/deactivates keyboard navigation. By default, items can not be navigated via keyboard */
    keyboard: boolean;
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    locale: string;
    /** @description Callback used to customize the format of the messages that are returned from the Localization Module. */
    localizeFormatFunction: any;
    /** @description Determines whether the the items should start over when the first or last item is reached. */
    loop: boolean;
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
    messages: any;
    /** @description If the element is readonly, users cannot interact with it. */
    readonly: boolean;
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    rightToLeft: boolean;
    /** @description When slideShow property is set to true, the carousel changes the active slide automatically with a delay set in interval property. */
    slideShow: boolean;
    /** @description Enables or disables switching to the previous/next slide via swiping left/right. By default swiping is disabled. */
    swipe: boolean;
    /** @description Determines the theme. Theme defines the look of the element */
    theme: string;
    /** @description If is set to true, the element cannot be focused. */
    unfocusable: boolean;
    /** @description Activates/deactivates slide navigation via mouse wheel. By default it's disabled. */
    wheel: boolean;
    /** @description Triggered when the active ( in view ) slide is changed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	previousIndex)
    *   index - The index of the new active slide.
    *   previousIndex - The index of the previous slide that was active.
    */
    onChange: EventEmitter<CustomEvent>;
    /** @description Triggered when the process of slide changing starts.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	previousIndex)
    *   index - The index of the new active slide.
    *   previousIndex - The index of the previous slide that was active.
    */
    onChanging: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the user swipes to the left inside the Carousel.
    *  @param event. The custom event. 	*/
    onSwipeleft: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the user swipes to the right inside the Carousel.
    *  @param event. The custom event. 	*/
    onSwiperight: EventEmitter<CustomEvent>;
    /** @description Navigates to the next slide.
    */
    next(): void;
    /** @description Pauses the slide show if slideShow is enabled.
    */
    pause(): void;
    /** @description Starts the slide show if slideShow is enabled.
    */
    play(): void;
    /** @description Navigates to the previous slide.
    */
    prev(): void;
    /** @description Navigates to a specific slide with the given index.
    * @param {number} index. The index of the target slide.
    */
    slideTo(index: number): void;
    readonly isRendered: boolean;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    /** @description Add event listeners. */
    private listen;
    /** @description Remove event listeners. */
    private unlisten;
}
