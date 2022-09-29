import { BootstrapFileInput } from './../index';
import { BootstrapFileInputStyleMode } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { BootstrapFileInputStyleMode, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { BootstrapFileInput } from './../index';
export declare class BootstrapFileInputComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<BootstrapFileInput>);
    private eventHandlers;
    nativeElement: BootstrapFileInput;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description Enables or disables the element.  */
    disabled: boolean;
    /** @description Sets or gets the name attribute for the element. Name is used when submiting HTML forms. */
    name: string;
    /** @description Gets or sets the placeholder of the element.  */
    placeholder: string;
    /** @description Sets or gets the style mode of the element. */
    styleMode: BootstrapFileInputStyleMode | string;
    /** @description Gets or sets the value of the element.  */
    value: string;
    /** @description Change event is triggered when the value of the element is changed.
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
