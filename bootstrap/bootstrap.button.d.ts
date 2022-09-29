import { BootstrapButton } from './../index';
import { BootstrapButtonStyleMode } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { BootstrapButtonStyleMode, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { BootstrapButton } from './../index';
export declare class BootstrapButtonComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<BootstrapButton>);
    private eventHandlers;
    nativeElement: BootstrapButton;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description Enables or disables the button.  */
    disabled: boolean;
    /** @description Sets the inner HTML of the element. */
    innerHTML: string;
    /** @description Sets or gets the name attribute for the element. Name is used when submiting HTML forms. */
    name: string;
    /** @description Outlines the button.  */
    outlined: boolean;
    /** @description Sets or gets the style mode of the button. */
    styleMode: BootstrapButtonStyleMode | string;
    /** @description Sets or gets the size mode of the element. */
    sizeMode: string;
    /** @description Sets or gets the type of the button. */
    type: string;
    /** @description Sets or gets the button's value.  */
    value: string;
    /** @description Click event.
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
