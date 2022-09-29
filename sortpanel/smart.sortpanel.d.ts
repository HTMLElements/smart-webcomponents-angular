import { SortPanel } from './../index';
import { Animation, SortPanelCloseButtonPosition } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { Animation, SortPanelCloseButtonPosition, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { SortPanel } from './../index';
export declare class SortPanelComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<SortPanel>);
    private eventHandlers;
    nativeElement: SortPanel;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
    animation: Animation | string;
    /** @description Sets or gets the the position of the close button of sort panel items. */
    closeButtonPosition: SortPanelCloseButtonPosition | string;
    /** @description Determines the data source that will be loaded to the sort panel.Each member of the dataSource array is an object with the following fields:dataField - the dataField of the column to be sorted.dataType - the data type of the column to be sorted.label - the column label to be displayed in the column selection input.icon - a specific class to be applied to the respective item in the column selection input.sortDirection - the sort direction to be applied. Possible values: 'ascending' and 'descending'.sortIndex - the sort order of columns. If this value is -1, the column will not be initially sorted. */
    dataSource: {
        label: string;
        dataField: string;
        dataType: string;
        sortDirection: string;
        sortIndex: number;
    }[];
    /** @description Enables or disables the sort panel. */
    disabled: boolean;
    /** @description Sets or gets the language. Used in conjunction with the property messages. */
    locale: string;
    /** @description Callback, related to localization module.  */
    localizeFormatFunction: any;
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
    messages: any;
    /** @description If the element is readonly, users cannot interact with it. */
    readonly: boolean;
    /** @description If is set to true, the element cannot be focused. */
    unfocusable: boolean;
    /** @description This event is triggered when the "Apply" button is clicked.
    *  @param event. The custom event. 	*/
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
