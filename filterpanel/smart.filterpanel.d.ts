import { FilterPanel } from './../index';
import { Animation, FilterPanelFilterType, FilterPanelMode } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { Animation, FilterPanelFilterType, FilterPanelMode, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { FilterPanel } from './../index';
export declare class FilterPanelComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<FilterPanel>);
    private eventHandlers;
    nativeElement: FilterPanel;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
    animation: Animation | string;
    /** @description Defines which operation buttons will be shown in the filter panel */
    buttons: string[];
    /** @description Array in mode: 'excel', determines the data to extract unique filter values from. The expected format of the data is an array of objects with key-value pairs (JSON array) */
    data: number[];
    /** @description Describes filtered data field. */
    dataField: string;
    /** @description If set to an array, determines a custom collection of filter values to be displayed. If set to a callback function, the user can add custom filter values dynamically to the default filter values (in this case, the evaluateFilterExpression function must also be implemented) .dataSource  is only available in mode: 'excel'. */
    dataSource: any;
    /** @description Enables or disables filter panel. */
    disabled: boolean;
    /** @description Callback function, used for custom evaluations in filter panel. */
    evaluateFilterExpression: any;
    /** @description Defines which filter type is used. */
    filterType: FilterPanelFilterType | string;
    /** @description Format string used in filterType 'Date'. */
    formatString: string;
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    locale: string;
    /** @description Defines field names of the filtered element. */
    messages: any;
    /** @description Desfines filter panel's  mode */
    mode: FilterPanelMode | string;
    /** @description If the element is readonly, users cannot interact with it. */
    readonly: boolean;
    /** @description Determines the theme. Theme defines the look of the element */
    theme: string;
    /** @description If is set to true, the element cannot be focused. */
    unfocusable: boolean;
    /** @description This event is triggered when the current filtering is discarted.
    *  @param event. The custom event. 	*/
    onCancel: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the current filtering is cleared.
    *  @param event. The custom event. 	*/
    onClear: EventEmitter<CustomEvent>;
    /** @description This event is triggered when filter panel settings are applied.
    *  @param event. The custom event. 	*/
    onFilter: EventEmitter<CustomEvent>;
    /** @description Discards current filtering.
    */
    cancel(): void;
    /** @description Clears current filtering.
    */
    clear(): void;
    /** @description Evaluates a filter.
    * @param {any} value. The evalueated element in filter panel.
    */
    evaluate(value: any): void;
    /** @description Applies current filtering.
    */
    filter(): void;
    /** @description Gets the current filter state.
    * @returns {any}
  */
    getState(): Promise<any>;
    /** @description Loads a previously saved filter state.
    * @param {any} state. An object returned by the method getState.
    */
    loadState(state: any): void;
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
