import { MultiColumnFilterPanel } from './../index';
import { Animation, MultiColumnFilterPanelCloseButtonPosition, MultiColumnFilterPanelOperator } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { Animation, MultiColumnFilterPanelCloseButtonPosition, MultiColumnFilterPanelOperator, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { MultiColumnFilterPanel } from './../index';
export declare class MultiColumnFilterPanelComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<MultiColumnFilterPanel>);
    private eventHandlers;
    nativeElement: MultiColumnFilterPanel;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
    animation: Animation | string;
    /** @description Sets or gets the position of the close button of multi column filter panel items. */
    closeButtonPosition: MultiColumnFilterPanelCloseButtonPosition | string;
    /** @description Determines the data source that will be loaded to the multi column filter panel.Each member of the dataSource array is an object with the following fields:dataField - the dataField of the column to be grouped.dataType - the data type of the column to be grouped.groupIndex - the group order of columns. If this value is -1, the grouping will not be applied by this column initially.label - the column label to be displayed in the column selection input.icon - a specific class to be applied to the respective item in the column selection input.sortDirection - the sort direction to be applied when grouping. Possible values: 'ascending' and 'descending'. */
    dataSource: {
        label: string;
        dataField: string;
        dataType: string;
        sortDirection: string;
        groupIndex: number;
    }[];
    /** @description Enables or disables the multi column filter panel. */
    disabled: boolean;
    /** @description A callback function that can be used to modify the settings of value editors. */
    editorCallback: any;
    /** @description Sets or gets the placeholder for the filter value editors. */
    editorPlaceholder: string;
    /** @description Sets or gets the language. Used in conjunction with the property messages. */
    locale: string;
    /** @description Callback used to customize the format of the messages that are returned from the Localization Module. */
    localizeFormatFunction: any;
    /** @description Sets or gets the maximum number of columns to group by. If set to null, there is no limit. */
    maxLevel: number;
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
    messages: any;
    /** @description Determines the logical operator between the items. */
    operator: MultiColumnFilterPanelOperator | string;
    /** @description If the element is readonly, users cannot interact with it. */
    readonly: boolean;
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    rightToLeft: boolean;
    /** @description If is set to true, the element cannot be focused. */
    unfocusable: boolean;
    /** @description Sets of gets the initial value of the element. */
    value: any;
    /** @description This event is triggered when the "Apply" button is clicked.
    *  @param event. The custom event. 	*/
    onApply: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the "Cancel" button is clicked.
    *  @param event. The custom event. 	*/
    onCancel: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the "Collapse all" button is clicked.
    *  @param event. The custom event. 	*/
    onCollapseAll: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the "Expand all" button is clicked.
    *  @param event. The custom event. 	*/
    onExpandAll: EventEmitter<CustomEvent>;
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
