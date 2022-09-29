import { ToggleButton } from './../index';
import { Animation, ClickMode } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { Animation, ClickMode, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { ToggleButton } from './../index';
export declare class ToggleButtonComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<ToggleButton>);
    private eventHandlers;
    nativeElement: ToggleButton;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
    animation: Animation | string;
    /** @description Sets the state of the element. */
    checked: boolean;
    /** @description Sets the click mode of the button. */
    clickMode: ClickMode | string;
    /** @description Enables or disables the ratio button. */
    disabled: boolean;
    /** @description Sets the inner HTML of the element. */
    innerHTML: string;
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    locale: string;
    /** @description Callback, related to localization module.  */
    localizeFormatFunction: any;
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
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
    /** @description This event is triggered when the widget is checked/unchecked.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	oldValue, 	changeType)
    *   value - A boolean value indicating the new state of the button ( checked or not ).
    *   oldValue - A boolean value indicating the previous state of the button ( checked or not ).
    *   changeType - A string flag indicating whether the change event was triggered via API or an event.
    */
    onChange: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the widget is checked.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	changeType)
    *   changeType - A string flag indicating whether the change event was triggered via API or an event.
    */
    onCheckValue: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the widget is unchecked.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	changeType)
    *   changeType - A string flag indicating whether the change event was triggered via API or an event.
    */
    onUncheckValue: EventEmitter<CustomEvent>;
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
