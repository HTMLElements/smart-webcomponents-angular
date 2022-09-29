import { ScrollBar } from './../index';
import { Animation, DragMechanicalAction, Orientation } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { Animation, DragMechanicalAction, Orientation, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { ScrollBar } from './../index';
export declare class ScrollBarComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<ScrollBar>);
    private eventHandlers;
    nativeElement: ScrollBar;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
    animation: Animation | string;
    /** @description Enables or disables the element. */
    disabled: boolean;
    /** @description Sets or gets the scrollbar's largestep. The value is increased/decreased with this largestep when the user presses the left mouse button in the area between a scrollbar button and thumb. */
    largeStep: number;
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    locale: string;
    /** @description Callback, related to localization module.  */
    localizeFormatFunction: any;
    /** @description Sets or gets the scrollbar's maximum value. */
    max: number;
    /** @description Sets or gets the type of used mechanical action. The mechanical action defines in which moment the value of the element will be updated. */
    mechanicalAction: DragMechanicalAction | string;
    /** @description Sets an object with string values, related to the different states of passwords strength. */
    messages: any;
    /** @description Sets or gets the scrollbar's minimum value. */
    min: number;
    /** @description Sets or gets the scrollbar's orientation */
    orientation: Orientation | string;
    /** @description If the element is readonly, users cannot interact with it. */
    readonly: boolean;
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    rightToLeft: boolean;
    /** @description Sets or gets scrollbar buttons visibility. */
    showButtons: boolean;
    /** @description Sets or gets the scrollbar's step. The value is increased/decreased with this step when the user presses a scrollbar button. */
    step: number;
    /** @description Determines the theme. Theme defines the look of the element */
    theme: string;
    /** @description If is set to true, the element cannot be focused. */
    unfocusable: boolean;
    /** @description Sets or gets the widget's value. */
    value: number;
    /** @description This event is triggered when the value is changed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	oldValue, 	min, 	max)
    *   value - A numeric value indicating the scroll position.
    *   oldValue - A numeric value indicating the previous scroll position.
    *   min - A numeric value indicating the min scroll position.
    *   max - A numeric value indicating the max scroll position.
    */
    onChange: EventEmitter<CustomEvent>;
    /** @description Redraws the element.
    */
    refresh(): void;
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
