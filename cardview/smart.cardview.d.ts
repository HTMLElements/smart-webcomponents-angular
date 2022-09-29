import { CardView } from './../index';
import { Animation, Orientation, CardViewCoverMode, CardViewHeaderPosition, Scrolling, CardViewColumn, DataSourceSettings } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { Animation, Orientation, CardViewColumnDataType, CardViewCoverMode, DataSourceSettingsSanitizeHTML, DataSourceSettingsDataFieldDataType, DataSourceSettingsDataSourceType, CardViewHeaderPosition, Scrolling, CardViewColumn, DataSourceSettings, DataSourceSettingsDataField, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { CardView } from './../index';
export { DataAdapter } from './../index';
export declare class CardViewComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<CardView>);
    private eventHandlers;
    nativeElement: CardView;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description Toggles the button for adding new cards. */
    addNewButton: boolean;
    /** @description Allows reordering by dragging cards. */
    allowDrag: boolean;
    /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
    animation: Animation | string;
    /** @description Describes the height for each card. */
    cardHeight: number | null;
    /** @description Describes the orientation of the card cells. */
    cellOrientation: Orientation | string;
    /** @description Allows collapsing the card content. */
    collapsible: boolean;
    /** @description Describes the columns properties:label - Sets the column namedataField - Sets the dataField nameicon - Sets the icon for the columnformatSettings - Sets the settings about the format for the current columnformatFunction - Function for customizing the value */
    columns: CardViewColumn[];
    /** @description Describes which data field to be set as cover. */
    coverField: string;
    /** @description Describes the cover image fit property. */
    coverMode: CardViewCoverMode | string;
    /** @description Determines the data source for the item that will be displayed inside the card. */
    dataSource: any;
    /** @description Sets the grid's data source settings when the dataSource property is set to an Array or URL. */
    dataSourceSettings: DataSourceSettings;
    /** @description Allows the edit option for the cards. */
    editable: boolean;
    /** @description Sets or gets the header position. The header contains the Customize, Filter, Sort, and Search buttons. */
    headerPosition: CardViewHeaderPosition | string;
    /** @description Sets or gets the locale. Used in conjunction with the property messages. */
    locale: string;
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
    messages: any;
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    rightToLeft: boolean;
    /** @description Determines the theme. Theme defines the look of the element */
    theme: string;
    /** @description Describes the scrolling behavior of the element. */
    scrolling: Scrolling | string;
    /** @description Describes which data field to be set as title. */
    titleField: string;
    /** @description This event is triggered when a filter has been applied.
    *  @param event. The custom event. 	*/
    onFilter: EventEmitter<CustomEvent>;
    /** @description This event is triggered when sorting has been applied.
    *  @param event. The custom event. 	*/
    onSort: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the window is opened.
    *  @param event. The custom event. 	*/
    onOpen: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the window is about to be opened. The opening operation can be canceled by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	*/
    onOpening: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the window is closed.
    *  @param event. The custom event. 	*/
    onClose: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the window is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	*/
    onClosing: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the user starts dragging the card.
    *  @param event. The custom event. 	*/
    onDragStart: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the user is dragging the card.
    *  @param event. The custom event. 	*/
    onDragging: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the user dragged the card.
    *  @param event. The custom event. 	*/
    onDragEnd: EventEmitter<CustomEvent>;
    /** @description Adds filtering
    * @param {string[]} filters. Filter information
    * @param {string} operator?. Logical operator between the filters of different fields
    */
    addFilter(filters: string[], operator?: string): void;
    /** @description Adds a new record
    * @param {number | string} recordId?. The id of the record to add
    * @param {any} data?. The data of the record to add
    * @param {string} position?. The position to add the record to. Possible values: 'first' and 'last'.
    */
    addRecord(recordId?: number | string, data?: any, position?: string): void;
    /** @description Adds sorting
    * @param {[] | string} dataFields. The data field(s) to sort by
    * @param {[] | string} orderBy. The sort direction(s) to sort the data field(s) by
    */
    addSort(dataFields: [] | string, orderBy: [] | string): void;
    /** @description Begins an edit operation
    * @param {number | string} recordId. The id of the record to edit
    */
    beginEdit(recordId: number | string): void;
    /** @description Ends the current edit operation and discards changes
    */
    cancelEdit(): void;
    /** @description Closes any open header panel (drop down)
    */
    closePanel(): void;
    /** @description Ends the current edit operation and saves changes
    */
    endEdit(): void;
    /** @description Makes sure a record is visible by scrolling to it. If succcessful, the method returns the HTML element of the record's card.
    * @param {number | string} recordId. The id of the record to scroll to
    * @returns {HTMLElement}
  */
    ensureVisible(recordId: any): Promise<any>;
    /** @description Opens the "Customize cards" header panel (drop down)
    */
    openCustomizePanel(): void;
    /** @description Opens the "Filter" header panel (drop down)
    */
    openFilterPanel(): void;
    /** @description Opens the "Sort" header panel (drop down)
    */
    openSortPanel(): void;
    /** @description Removes filtering
    */
    removeFilter(): void;
    /** @description Removes a record
    * @param {number | string} recordId. The id of the record to remove
    */
    removeRecord(recordId: number | string): void;
    /** @description Removes sorting
    */
    removeSort(): void;
    /** @description Shows a column
    * @param {string} dataField. The data field of the column
    */
    showColumn(dataField: string): void;
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
