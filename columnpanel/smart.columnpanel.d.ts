import { ColumnPanel } from './../index';
import { Animation, ColumnPanelDataSource } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { Animation, ColumnPanelDataSource, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { ColumnPanel } from './../index';
export declare class ColumnPanelComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<ColumnPanel>);
    private eventHandlers;
    nativeElement: ColumnPanel;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
    animation: Animation | string;
    /** @description Determines the data source that will be loaded to the column panel. */
    dataSource: ColumnPanelDataSource[];
    /** @description Enables or disables the column panel. */
    disabled: boolean;
    /** @description Sets or gets the language. Used in conjunction with the property messages. */
    locale: string;
    /** @description Callback used to customize the format of the messages that are returned from the Localization Module. */
    localizeFormatFunction: any;
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
    messages: any;
    /** @description If the element is readonly, users cannot interact with it. */
    readonly: boolean;
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    rightToLeft: boolean;
    /** @description If is set to true, the element cannot be focused. */
    unfocusable: boolean;
    /** @description This event is triggered when the "Apply" button is clicked.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	positionChanged)
    *   value - The current configuration of columns (data source).
    *   positionChanged - A boolean detail that shows whether the columns have been reordered.
    */
    onApply: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the "Cancel" button is clicked.
    *  @param event. The custom event. 	*/
    onCancel: EventEmitter<CustomEvent>;
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
