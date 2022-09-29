import { Chip } from './../index';
import { Animation } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { Animation, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { Chip } from './../index';
export declare class ChipComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<Chip>);
    private eventHandlers;
    nativeElement: Chip;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
    animation: Animation | string;
    /** @description Sets a custom avatar that is positioned on the left side of the chip. The avatar can be an image(if the value is a url to an image), plain text or HTML. */
    avatar: string | null;
    /** @description Determines whether a close button is displayed on the right side of the element. */
    closeButton: boolean;
    /** @description Enables or disables the element. Disabled elements can not be interacted with. */
    disabled: boolean;
    /** @description Sets a custom template for the chip. The template can be a string that represents the id of an HTMLTemplateElement inside the DOM or it's direct reference. */
    itemTemplate: any;
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    locale: string;
    /** @description Callback used to customize the format of the messages that are returned from the Localization Module. */
    localizeFormatFunction: any;
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
    messages: any;
    /** @description If the element is readonly, users cannot interact with it. */
    readonly: boolean;
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    rightToLeft: boolean;
    /** @description Determines the theme. Theme defines the look of the element */
    theme: string;
    /** @description If is set to true, the element cannot be focused. */
    unfocusable: boolean;
    /** @description Sets the text content of the chip. The text inside the chip represents it's value. Value must be of type string. By default it's an empty string. */
    value: string;
    /** @description This event is triggered when the chip is closed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	value)
    *   value - A string representing the current value of the element.
    */
    onClose: EventEmitter<CustomEvent>;
    /** @description Closes the chip and removes it from the DOM.
    */
    close(): void;
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
