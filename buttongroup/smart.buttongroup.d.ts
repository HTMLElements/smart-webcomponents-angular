import { ButtonGroup } from './../index';
import { Animation, ButtonGroupSelectionMode } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { Animation, ButtonGroupSelectionMode, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { ButtonGroup } from './../index';
export declare class ButtonGroupComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<ButtonGroup>);
    private eventHandlers;
    nativeElement: ButtonGroup;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
    animation: Animation | string;
    /** @description Determines the buttons configuration. The dataSource can be an array of strings/numbers or objects where the attributes represent the properties of a List Item. For example label, value. It can also be a callback that returns an Array of items as previously described. */
    dataSource: any;
    /** @description Determines the selection mode for the element. */
    selectionMode: ButtonGroupSelectionMode | string;
    /** @description Enables or disables the element.  */
    disabled: boolean;
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    locale: string;
    /** @description Callback used to customize the format of the messages that are returned from the Localization Module. */
    localizeFormatFunction: any;
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
    messages: any;
    /** @description Sets or gets the name attribute for the element. Name is used when submiting HTML forms. */
    name: string;
    /** @description If the custom element is readonly, it cannot be interacted with. */
    readonly: boolean;
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    rightToLeft: boolean;
    /** @description Determines the theme. Theme defines the look of the element */
    theme: string;
    /** @description Sets or gets the button group's selected values. Represents an array of strings. */
    selectedValues: string[];
    /** @description Sets or gets the button group's selected indexes. Represents an array of numbers */
    selectedIndexes: number[];
    /** @description If is set to true, the element cannot be focused. */
    unfocusable: boolean;
    /** @description Change event is triggered when the selectedValues/selectedIndexes are changed.
    *  @param event. The custom event. 	*/
    onChange: EventEmitter<CustomEvent>;
    /** @description Selects/Unselects an item inside the element.
    * @param {number | string} value. The index or the value of the item to be selected/unselected.
    */
    select(value: number | string): void;
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
