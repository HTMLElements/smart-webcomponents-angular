import { Path } from './../index';
import { Animation, DropDownPosition, PathFormat } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { Animation, DropDownPosition, PathFormat, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { Path } from './../index';
export declare class PathComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<Path>);
    private eventHandlers;
    nativeElement: Path;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
    animation: Animation | string;
    /** @description Determines the data source for the item that will be displayed inside the drop down. */
    dataSource: any;
    /** @description Enables or disables the element. */
    disabled: boolean;
    /** @description Sets or gets the displayMember. The displayMember specifies the name of an object property to display. The name is contained in the collection specified by the 'dataSource' property. */
    displayMember: string;
    /** @description Sets the parent container of the dropDown (the popup). Used when a CSS property of unknown parent is interfering with the visibility of the dropDown. */
    dropDownAppendTo: any;
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
    /** @description If this property is enabled, when the element's dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document. */
    dropDownOverlay: boolean;
    /** @description Determines the vertical position of the dropDown. 'Auto' means its automatically determined depending on the viewport size. */
    dropDownPosition: DropDownPosition | string;
    /** @description Sets the width of the drop down. Default value of empty string means that CSS variables are used. This property should be used when the browser doesn't support CSS variables. */
    dropDownWidth: string | number;
    /** @description Sets additional helper text below the element.  */
    hint: string;
    /** @description Sets the element as an indicator. */
    indicator: boolean;
    /** @description A getter that returns an array of all Path items. */
    items: any[];
    /** @description Sets label above the element.  */
    label: string;
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    locale: string;
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
    messages: any;
    /** @description The name of the control. */
    name: string;
    /** @description Determines whether the popup is opened or closed */
    opened: boolean;
    /** @description Determines the element's placeholder. */
    placeholder: string;
    /** @description Determines the format of the path. Follows specific operation system criteria by changing the drive,folder separators.  */
    pathFormat: PathFormat | string;
    /** @description Disables user interaction with the element. */
    readonly: boolean;
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    rightToLeft: boolean;
    /** @description Determines the theme. Theme defines the look of the element */
    theme: string;
    /** @description If is set to true, the element cannot be focused. */
    unfocusable: boolean;
    /** @description The value of the Path control. */
    value: string;
    /** @description Determines the value member of an item. Stored as value in the item object. */
    valueMember: string;
    /** @description Determines whether or not the element wraps to a new line if overflows. If set the Path can be wrapped on multiple lines.  */
    wrap: boolean;
    /** @description This event is triggered when user clicks on the browse button.
    *  @param event. The custom event. 	*/
    onBrowseButtonClick: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the value is changed.
    *  @param event. The custom event. 	*/
    onChange: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the drop down is closed.
    *  @param event. The custom event. 	*/
    onClose: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the drop down is closing.
    *  @param event. The custom event. 	*/
    onClosing: EventEmitter<CustomEvent>;
    /** @description This event is triggered when user clicks on the drop down button.
    *  @param event. The custom event. 	*/
    onDropDownButtonClick: EventEmitter<CustomEvent>;
    /** @description This event is triggered when an item from the popup is clicked.
    *  @param event. The custom event. 	*/
    onItemClick: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the drop down is opened.
    *  @param event. The custom event. 	*/
    onOpen: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the drop down is opening.
    *  @param event. The custom event. 	*/
    onOpening: EventEmitter<CustomEvent>;
    /** @description Closes the dropDown.
    */
    close(): void;
    /** @description Opens the dropDown.
    */
    open(): void;
    /** @description Set's the Path element to 'emptyPath' state and changes the value to '////'.
    */
    setToEmptyPath(): void;
    /** @description Set's the Path element to 'notAPath' state and changes the value to '//'.
    */
    setToNotAPath(): void;
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
