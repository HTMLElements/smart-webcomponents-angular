import { BootstrapModal } from './../index';
import { BootstrapModalBackdrop, BootstrapModalStyleMode } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { BootstrapModalBackdrop, BootstrapModalStyleMode, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { BootstrapModal } from './../index';
export declare class BootstrapModalComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<BootstrapModal>);
    private eventHandlers;
    nativeElement: BootstrapModal;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description Clicking on the modal “backdrop” will automatically close the modal.  */
    backdrop: BootstrapModalBackdrop | string;
    /** @description Sets or gets whether the modal is centered.  */
    centered: boolean;
    /** @description Enables or disables the element.  */
    disabled: boolean;
    /** @description Gets or sets whether the modal is opened.  */
    opened: boolean;
    /** @description Gets or sets whether the modal is scrollable.  */
    scrollable: boolean;
    /** @description Sets or gets the style mode of the element. */
    styleMode: BootstrapModalStyleMode | string;
    /** @description Sets or gets the size mode of the element. */
    sizeMode: string;
    /** @description Show event is triggered when the modal is going to show.
    *  @param event. The custom event. 	*/
    onShow: EventEmitter<CustomEvent>;
    /** @description Hide event is triggered when the modal is going to be hidden.
    *  @param event. The custom event. 	*/
    onHide: EventEmitter<CustomEvent>;
    /** @description Toggles the modal visibility
    */
    toggle(): void;
    /** @description Shows the modal
    */
    show(): void;
    /** @description Hides the modal
    */
    hide(): void;
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
