import { PasswordInput } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { PasswordInput } from './../index';
export declare class PasswordInputComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<PasswordInput>);
    private eventHandlers;
    nativeElement: PasswordInput;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description Enables or disables the element. */
    disabled: boolean;
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    locale: string;
    /** @description Callback used to customize the format of the messages that are returned from the Localization Module. */
    localizeFormatFunction: any;
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
    messages: any;
    /** @description Determines the minimum number of characters inside the input in order to trigger the autocomplete functionality that will open the drop down and show the matched items. */
    minLength: number;
    /** @description Sets or gets the name attribute for the element. Name is used when submiting data inside an HTML form. */
    name: string;
    /** @description Determines the placeholder of the input. */
    placeholder: string;
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    rightToLeft: boolean;
    /** @description Determines the theme for the element. Themes define the look of the elements. */
    theme: string;
    /** @description If is set to true, the element cannot be focused. */
    unfocusable: boolean;
    /** @description Sets or gets the value of the element. */
    value: string;
    /** @description This event is triggered when the value is changed and the focus moved out of the element.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
    *   oldValue - The previous value.
    *   value - The new value.
    */
    onChange: EventEmitter<CustomEvent>;
    /** @description This event is triggered on each key up event of the PasswordInput, if the value is changed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
    *   oldValue - The previous value before it was changed.
    *   value - The new value.
    */
    onChanging: EventEmitter<CustomEvent>;
    /** @description Selects the text inside the input or if it is readonly then the element is focused.
    */
    select(): void;
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
