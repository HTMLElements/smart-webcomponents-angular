import { SplitterBar } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { BaseElement } from './smart.element';
export { ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { SplitterBar } from './../index';
export declare class SplitterBarComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<SplitterBar>);
    private eventHandlers;
    nativeElement: SplitterBar;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description Hides the splitter bar.
    */
    hide(): void;
    /** @description Unhides a splitter bar.
    */
    show(): void;
    /** @description Locks the splitter bar.
    */
    lock(): void;
    /** @description Unlocks the splitter bar.
    */
    unlock(): void;
    readonly isRendered: boolean;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
