import { DropDownButton } from './../index';
import { Animation, DropDownButtonPosition, DropDownOpenMode, DropDownPosition, HorizontalScrollBarVisibility, ResizeMode, VerticalScrollBarVisibility } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { Animation, DropDownButtonPosition, DropDownOpenMode, DropDownPosition, HorizontalScrollBarVisibility, ResizeMode, VerticalScrollBarVisibility, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { DropDownButton } from './../index';
export declare class DropDownButtonComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<DropDownButton>);
    private eventHandlers;
    nativeElement: DropDownButton;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
    animation: Animation | string;
    /** @description Determines the delay before the opened drop down closes when dropDownOpenMode is set to 'auto'. */
    autoCloseDelay: number;
    /** @description Enables or disables the element. */
    disabled: boolean;
    /** @description Sets the parent container of the dropDown (the popup). Used when a CSS property of unknowned parent is interfering with the visibility of the dropDown. */
    dropDownAppendTo: string;
    /** @description Determines the position of the drop down button. */
    dropDownButtonPosition: DropDownButtonPosition | string;
    /** @description Sets the height of the drop down. Default value of empty string means that CSS variables are used. This property should be used when the browser doesn't support CSS variables. */
    dropDownHeight: string | number;
    /** @description Sets the max height of the drop down. Default value of empty string means that CSS variables are used. This property should be used when the browser doesn't support CSS variables. */
    dropDownMaxHeight: string | number;
    /** @description Sets the max width of the drop down. Default value of empty string means that CSS variables are used. This property should be used when the browser doesn't support CSS variables. */
    dropDownMaxWidth: string | number;
    /** @description Sets the min height of the drop down. Default value of empty string means that CSS variables are used. This property should be used when the browser doesn't support CSS variables. */
    dropDownMinHeight: string | number;
    /** @description Sets the min width of the drop down. Default value of empty string means that CSS variables are used. This property should be used when the browser doesn't support CSS variables. */
    dropDownMinWidth: string | number;
    /** @description Determines how the drop down is going to open. */
    dropDownOpenMode: DropDownOpenMode | string;
    /** @description If this property is enabled, when the element's dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document. */
    dropDownOverlay: boolean;
    /** @description Sets a placeholder text to appear when there is no content inside the dropdown. */
    dropDownPlaceholder: string;
    /** @description Determines the vertical position of the dropDown. 'Auto' means its automatically determined depending on the viewport size. */
    dropDownPosition: DropDownPosition | string;
    /** @description Sets the width of the drop down. Default value of empty string means that CSS variables are used. This property should be used when the browser doesn't support CSS variables. */
    dropDownWidth: string | number;
    /** @description Sets additional helper text below the element. The hint is visible only when the element is focused. */
    hint: string;
    /** @description Determines the visibility of the horizontal Scroll bar inside the drop down. */
    horizontalScrollBarVisibility: HorizontalScrollBarVisibility | string;
    /** @description Sets a label above the element. The label is always visible. */
    label: string;
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    locale: string;
    /** @description Callback used to customize the format of the messages that are returned from the Localization Module. */
    localizeFormatFunction: any;
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
    messages: any;
    /** @description Determines whether the popup is opened or closed */
    opened: boolean;
    /** @description Determines the element's placeholder, displayed in the element's action button container. */
    placeholder: string;
    /** @description Determines the element's placeholder template, displayed in the element's action button container. You can pass 'string', 'function' or HTMLTemplateElement as a value. */
    placeholderTemplate: any;
    /** @description Disables user interaction with the element. */
    readonly: boolean;
    /** @description Determines whether the resize indicator in the bottom right corner is visible or not. */
    resizeIndicator: boolean;
    /** @description Determines whether the dropDown can be resized or not. When resizing is enabled, a resize bar appears on the top/bottom side of the drop down. */
    resizeMode: ResizeMode | string;
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    rightToLeft: boolean;
    /** @description Determines the theme. Theme defines the look of the element */
    theme: string;
    /** @description If is set to true, the element cannot be focused. */
    unfocusable: boolean;
    /** @description Determines the visibility of the vertical scroll bar. */
    verticalScrollBarVisibility: VerticalScrollBarVisibility | string;
    /** @description This event is triggered when user clicks on the action button. The action button is visible when the placeholder is set.
    *  @param event. The custom event. 	*/
    onActionButtonClick: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the drop down is closed.
    *  @param event. The custom event. 	*/
    onClose: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the drop down list is about to be closed. This event allows to cancel the closing operation calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	*/
    onClosing: EventEmitter<CustomEvent>;
    /** @description This event is triggered when user clicks on the drop down button.
    *  @param event. The custom event. 	*/
    onDropDownButtonClick: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the drop down is opened.
    *  @param event. The custom event. 	*/
    onOpen: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the drop down is about to be opened. This event allows to cancel the opening operation calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	*/
    onOpening: EventEmitter<CustomEvent>;
    /** @description This event is triggered when user starts resizing the drop down.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	position)
    *   position - An object containing the current left and top positions of the drop down.
    */
    onResizeStart: EventEmitter<CustomEvent>;
    /** @description This event is triggered when user finishes resizing the drop down.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	position)
    *   position - An object containing the current left and top positions of the drop down.
    */
    onResizeEnd: EventEmitter<CustomEvent>;
    /** @description Appends a new HTML node to the drop down.
    * @param {Node} node. The node to be appended
    * @returns {Node}
  */
    appendChild(node: any): Promise<any>;
    /** @description Closes the dropDown.
    */
    close(): void;
    /** @description Opens the dropDown.
    */
    open(): void;
    /** @description Removes everything from the drop down.
    */
    removeAll(): void;
    /** @description Removes a child node from the drop down.
    * @param {Node} node. The node to remove.
    * @returns {Node}
  */
    removeChild(node: any): Promise<any>;
    /** @description Scrolls the drop down to a specific position.
    * @param {number} top. Y axis coordinate
    * @param {number} left. X axis coordinate
    */
    scrollTo(top: number, left: number): void;
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
