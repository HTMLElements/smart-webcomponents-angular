import { BootstrapSplitButton } from './../index';
import { BootstrapSplitButtonDropDownPosition, BootstrapSplitButtonLabelType, BootstrapSplitButtonStyleMode } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { BootstrapSplitButtonDropDownPosition, BootstrapSplitButtonLabelType, BootstrapSplitButtonStyleMode, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { BootstrapSplitButton } from './../index';
export declare class BootstrapSplitButtonComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<BootstrapSplitButton>);
    private eventHandlers;
    nativeElement: BootstrapSplitButton;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description Enables or disables the element.  */
    disabled: boolean;
    /** @description Sets or gets the drop down position of the element.  */
    dropDownPosition: BootstrapSplitButtonDropDownPosition | string;
    /** @description Sets or gets the Label of the element. */
    label: string;
    /** @description Sets or gets the Label type of the element. */
    labelType: BootstrapSplitButtonLabelType | string;
    /** @description Sets or gets the Href of the element. */
    href: string;
    /** @description Sets or gets the name attribute for the element. Name is used when submiting HTML forms. */
    name: string;
    /** @description Gets or sets whether the dropdown is opened.  */
    opened: boolean;
    /** @description Gets or sets whether the dropdown is outlined.  */
    outlined: boolean;
    /** @description Sets or gets the style mode of the element. */
    styleMode: BootstrapSplitButtonStyleMode | string;
    /** @description Sets or gets the size mode of the element. */
    sizeMode: string;
    /** @description Show event is triggered when the dropdown is going to show.
    *  @param event. The custom event. 	*/
    onShow: EventEmitter<CustomEvent>;
    /** @description Shown event is triggered when the dropdown is shown.
    *  @param event. The custom event. 	*/
    onShown: EventEmitter<CustomEvent>;
    /** @description Hide event is triggered when the dropdown is going to be hidden.
    *  @param event. The custom event. 	*/
    onHide: EventEmitter<CustomEvent>;
    /** @description Hidden event is triggered when the dropdown is hidden
    *  @param event. The custom event. 	*/
    onHidden: EventEmitter<CustomEvent>;
    /** @description Toggles the dropdown visibility
    */
    toggle(): void;
    /** @description Shows the dropdown
    */
    show(): void;
    /** @description Hides the dropdown
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
