import { ProgressBar } from './../index';
import { Animation, Orientation } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { Animation, Orientation, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { ProgressBar } from './../index';
export declare class ProgressBarComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<ProgressBar>);
    private eventHandlers;
    nativeElement: ProgressBar;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
    animation: Animation | string;
    /** @description Enables or disables the element.  */
    disabled: boolean;
    /** @description Sets the value of the Progress bar to indeterminate state(null) and starts the animation. */
    indeterminate: boolean;
    /** @description Sets the filling direction of the Progress Bar. */
    inverted: boolean;
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    formatFunction: {
        (value: number): string;
    };
    /** @description Callback, related to localization module.  */
    locale: string;
    /** @description Sets progress bars maximum possible value. */
    localizeFormatFunction: any;
    /** @description Sets an object with string values, related to the different states of passwords strength. */
    max: number;
    /** @description Sets progress bars minimum possible value. */
    messages: any;
    /** @description Sets the orientation of the progress bar */
    min: number;
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    orientation: Orientation | string;
    /** @description Enables/Disabled the label for the Progress Bar. */
    rightToLeft: boolean;
    /** @description Determines the theme. Theme defines the look of the element */
    showProgressValue: boolean;
    /** @description If is set to true, the element cannot be focused. */
    theme: string;
    /** @description Sets or gets the value of the progress bar */
    unfocusable: boolean;
    /** @description undefined */
    value: number;
    /** @description This event is triggered when the value is changed.
    *  @param event. The custom event. 	*/
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
