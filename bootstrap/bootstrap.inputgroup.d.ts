import { BootstrapInputGroup } from './../index';
import { BootstrapInputGroupStyleMode } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { BootstrapInputGroupStyleMode, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { BootstrapInputGroup } from './../index';
export declare class BootstrapInputGroupComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<BootstrapInputGroup>);
    private eventHandlers;
    nativeElement: BootstrapInputGroup;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description Sets the content before the input. */
    contentBefore: string;
    /** @description Sets the content after the input. */
    contentAfter: string;
    /** @description Enables or disables the element.  */
    disabled: boolean;
    /** @description Sets or gets the name attribute for the element. Name is used when submiting HTML forms. */
    name: string;
    /** @description Enables or disables the wrapping.  */
    noWrap: boolean;
    /** @description Sets or gets the style mode of the input group. */
    styleMode: BootstrapInputGroupStyleMode | string;
    /** @description Sets or gets the size mode of the element. */
    sizeMode: string;
    /** @description Sets or gets the type of the input. */
    type: string;
    /** @description Sets the placeholder of the input. */
    placeholder: string;
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
