import { BootstrapProgressBar } from './../index';
import { BootstrapProgressBarStyleMode } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { BootstrapProgressBarStyleMode, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { BootstrapProgressBar } from './../index';
export declare class BootstrapProgressBarComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<BootstrapProgressBar>);
    private eventHandlers;
    nativeElement: BootstrapProgressBar;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description Enables or disables the element.  */
    disabled: boolean;
    /** @description Sets the name of the element.  */
    name: string;
    /** @description Sets or gets the min value */
    min: number;
    /** @description Sets or gets the max value */
    max: number;
    /** @description Sets whether stripes are displayed in the progress.  */
    striped: boolean;
    /** @description Sets or gets the style mode of the button. */
    styleMode: BootstrapProgressBarStyleMode | string;
    /** @description Sets or gets the value */
    value: number;
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
