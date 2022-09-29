import { Button } from './../index';
import { Animation, ClickMode } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { Animation, ClickMode, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { Button } from './../index';
export declare class ButtonComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<Button>);
    private eventHandlers;
    nativeElement: Button;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
    animation: Animation | string;
    /** @description Determines the click mode for the element. */
    clickMode: ClickMode | string;
    /** @description Sets the content of the element. */
    content: any;
    /** @description Enables or disables the button.  */
    disabled: boolean;
    /** @description Sets the inner HTML of the element. */
    innerHTML: string;
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    locale: string;
    /** @description Callback used to customize the format of the messages that are returned from the Localization Module. */
    localizeFormatFunction: any;
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
    messages: any;
    /** @description Sets or gets the name attribute for the element. Name is used when submiting HTML forms. */
    name: string;
    /** @description If the custom element is readonly, it cannot be interacted with. */
    readonly: boolean;
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    rightToLeft: boolean;
    /** @description Determines the theme. Theme defines the look of the element */
    theme: string;
    /** @description Sets or gets the type of the button. */
    type: string;
    /** @description Sets or gets the button's value.  */
    value: string;
    /** @description If is set to true, the element cannot be focused. */
    unfocusable: boolean;
    /** @description Click event is triggered regarding to the chosen clickMode.
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
