import { CustomizationDialog } from './../index';
import { Animation } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { Animation, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { CustomizationDialog } from './../index';
export declare class CustomizationDialogComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<CustomizationDialog>);
    private eventHandlers;
    nativeElement: CustomizationDialog;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
    animation: Animation | string;
    /** @description Array with filtered fields and their settings. */
    dataSource: any;
    /** @description Sets or gets the displayMember. The displayMember specifies the name of an object property to display. The name is contained in the collection specified by the 'dataSource' property. */
    displayMember: string;
    /** @description Enables or disables the element. */
    disabled: boolean;
    /** @description Sets whether is enabled/disabled filtering tab. */
    filtering: boolean;
    /** @description Sets whether is enabled/disabled grouping tab. */
    grouping: boolean;
    /** @description Set's the buttons that will be visible in the header section. */
    headerButtons: string[];
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    locale: string;
    /** @description Callback, related to localization module.  */
    localizeFormatFunction: any;
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
    messages: any;
    /** @description Sets or gets whether the columns reordering is active. */
    reorder: boolean;
    /** @description Sets or gets the tab, wich is selected on initialization. */
    selectedTab: number;
    /** @description Sets whether is enabled/disabled sorting tab. */
    sorting: boolean;
    /** @description Determines the theme. Theme defines the look of the element */
    theme: string;
    /** @description If is set to true, the element cannot be focused. */
    unfocusable: boolean;
    /** @description Sets or gets element's value. It's represente by object, contained */
    value: any;
    /** @description Determines the value member of an item. Stored as value in the item object. */
    valueMember: string;
    /** @description Sets or gets whether the columns of the element could be hidden. */
    visibility: boolean;
    /** @description This event is triggered when the dialog is opened.
    *  @param event. The custom event. 	*/
    onOpen: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the dialog is closed.
    *  @param event. The custom event. 	*/
    onClose: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the data in the value property is changed.
    *  @param event. The custom event. 	*/
    onChange: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the dialog is closed via clicking the apply button.
    *  @param event. The custom event. 	*/
    onApply: EventEmitter<CustomEvent>;
    /** @description Opens the dialog
    */
    open(): void;
    /** @description Closes the dialog.
    */
    close(): void;
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
