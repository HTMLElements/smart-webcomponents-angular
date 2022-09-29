import { Tooltip } from './../index';
import { Animation, TooltipArrowDirection, TooltipOpenMode, TooltipPosition } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { Animation, TooltipArrowDirection, TooltipOpenMode, TooltipPosition, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { Tooltip } from './../index';
export declare class TooltipComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<Tooltip>);
    private eventHandlers;
    nativeElement: Tooltip;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
    animation: Animation | string;
    /** @description Determines how to align the tooltip. */
    align: string;
    /** @description Gets or sets whether a tooltip's arrow will be shown. */
    arrow: boolean;
    /** @description Sets the position of the arrow. */
    arrowDirection: TooltipArrowDirection | string;
    /** @description Gets or sets whether a tooltip's arrow will be shown. */
    delay: number;
    /** @description Enables or disables the tooltip. */
    disabled: boolean;
    /** @description Sets an offset by X and Y. */
    offset: number[];
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    locale: string;
    /** @description Callback, related to localization module.  */
    localizeFormatFunction: any;
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property language.  */
    messages: any;
    /** @description Sets or gets the way of triggering the tooltip. */
    openMode: TooltipOpenMode | string;
    /** @description Gets or sets the position of the tooltip. */
    position: TooltipPosition | string;
    /** @description Sets the element which triggers the tooltip. */
    selector: string | HTMLElement;
    /** @description Determines the theme. Theme defines the look of the element */
    theme: string;
    /** @description Sets custom tooltip template. */
    tooltipTemplate: any;
    /** @description If is set to true, the element cannot be focused. */
    unfocusable: boolean;
    /** @description Sets or gets the widget's value. */
    value: string;
    /** @description Sets or gets the visibility of the tooltip. */
    visible: boolean;
    /** @description This event is triggered when the tooltip is opened.
    *  @param event. The custom event. 	*/
    onOpen: EventEmitter<CustomEvent>;
    /** @description This event is triggered before the tooltip is opened. The event can be prevented via event.preventDefault().
    *  @param event. The custom event. 	*/
    onOpening: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the tooltip is closed.
    *  @param event. The custom event. 	*/
    onClose: EventEmitter<CustomEvent>;
    /** @description This event is triggered before the tooltip is closed. The event can be prevented via event.preventDefault().
    *  @param event. The custom event. 	*/
    onClosing: EventEmitter<CustomEvent>;
    /** @description Closes smart-tooltip.
    */
    close(): void;
    /** @description Opens smart-tooltip.
    */
    open(): void;
    /** @description Toggles smart-tooltip.
    */
    toggle(): void;
    /** @description Clears the content of the Tooltip.
    */
    clear(): void;
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
