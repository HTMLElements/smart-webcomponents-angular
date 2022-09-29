import { Led } from './../index';
import { Animation, ClickMode, LedShape } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { Animation, ClickMode, LedShape, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { Led } from './../index';
export declare class LedComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<Led>);
    private eventHandlers;
    nativeElement: Led;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
    animation: Animation | string;
    /** @description Sets or gets the check state. */
    checked: boolean;
    /** @description Determines when the element fires a click event. */
    clickMode: ClickMode | string;
    /** @description Enables or disables the LED. */
    disabled: boolean;
    /** @description Sets the content for the 'false' state. */
    falseContent: string;
    /** @description Sets custom template for LED's false state. */
    falseTemplate: any;
    /** @description Sets the LED to indeterminate state. */
    indeterminate: boolean;
    /** @description Sets the content for the 'null' state. */
    indeterminateContent: string;
    /** @description Sets a custom template for LED's indeterminate state. */
    indeterminateTemplate: any;
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    locale: string;
    /** @description Callback used to customize the format of the messages that are returned from the Localization Module. */
    localizeFormatFunction: any;
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
    messages: any;
    /** @description Sets or gets the name attribute for the element. Name is used when submiting HTML forms. */
    name: string;
    /** @description If the widgets is readonly, the users cannot iteract with the element. */
    readonly: boolean;
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    rightToLeft: boolean;
    /** @description Sets the shape of LED. */
    shape: LedShape | string;
    /** @description Determines the theme. Theme defines the look of the element */
    theme: string;
    /** @description Sets the content for the 'true' state. */
    trueContent: string;
    /** @description Sets custom template for LED's true state. */
    trueTemplate: any;
    /** @description If is set to true, the element cannot be focused. */
    unfocusable: boolean;
    /** @description Sets or gets the element's value. */
    value: string;
    /** @description This event is triggered when the widget is checked/unchecked.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
    *   oldValue - The previous value of the element before it was changed.
    *   value - The new value of the element.
    */
    onChange: EventEmitter<CustomEvent>;
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
