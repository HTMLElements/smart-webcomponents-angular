import { RepeatButton } from './../index';
import { Animation, ClickMode } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { Animation, ClickMode, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { RepeatButton } from './../index';
export declare class RepeatButtonComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<RepeatButton>);
    private eventHandlers;
    nativeElement: RepeatButton;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
    animation: Animation | string;
    /** @description Sets the click mode of the button. */
    clickMode: ClickMode | string;
    /** @description Sets the delay between repeats in miliseconds. */
    delay: number;
    /** @description Enables or disables the ratio button. */
    disabled: boolean;
    /** @description Sets a delay before the first repeat iteration in miliseconds. */
    initialDelay: number;
    /** @description Sets the inner HTML of the element. */
    innerHTML: string;
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    locale: string;
    /** @description Callback, related to localization module.  */
    localizeFormatFunction: any;
    /** @description Sets an object with string values, related to the different states of passwords strength. */
    messages: any;
    /** @description Sets or gets the widget's name. */
    name: string;
    /** @description If the custom element is readonly, it cannot be interacted with. */
    readonly: boolean;
    /** @description Determines the theme. Theme defines the look of the element */
    theme: string;
    /** @description If is set to true, the element cannot be focused. */
    unfocusable: boolean;
    /** @description Sets or gets the widget's value. */
    value: string;
    /** @description This event is triggered when the element is clicked.
    *  @param event. The custom event. 	*/
    onClick: EventEmitter<CustomEvent>;
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
