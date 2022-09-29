import { BootstrapSwitchButton } from './../index';
import { BootstrapSwitchButtonStyleMode } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { BootstrapSwitchButtonStyleMode, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { BootstrapSwitchButton } from './../index';
export declare class BootstrapSwitchButtonComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<BootstrapSwitchButton>);
    private eventHandlers;
    nativeElement: BootstrapSwitchButton;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description Gets or sets the checked state of the element.  */
    checked: boolean;
    /** @description Enables or disables the element.  */
    disabled: boolean;
    /** @description Gets or sets whether the element is in indeterminate state.  */
    indeterminate: boolean;
    /** @description Sets the inner HTML of the element. */
    innerHTML: string;
    /** @description Sets or gets the name attribute for the element. Name is used when submiting HTML forms. */
    name: string;
    /** @description Gets or sets whether the element is required.  */
    required: boolean;
    /** @description Sets or gets the style mode of the element. */
    styleMode: BootstrapSwitchButtonStyleMode | string;
    /** @description Change event is triggered when the value of the element is changed.
    *  @param event. The custom event. 	*/
    onChange: EventEmitter<CustomEvent>;
    /** @description Toggles the element
    */
    toggle(): void;
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
