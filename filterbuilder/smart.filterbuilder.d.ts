import { FilterBuilder } from './../index';
import { Animation, FilterBuilderIcons } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { Animation, FilterBuilderIcons, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { FilterBuilder } from './../index';
export declare class FilterBuilderComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<FilterBuilder>);
    private eventHandlers;
    nativeElement: FilterBuilder;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
    animation: Animation | string;
    /** @description Adds more operations, that can be used in the filter bilder's conditions structure. */
    customOperations: {
        name: string;
        caption: string;
        icon: string;
    }[];
    /** @description Enables or disables the context menu. */
    disableContextMenu: boolean;
    /** @description Enables or disables the element. */
    disabled: boolean;
    /** @description Array with filtered fields and their settings. */
    fields: any;
    /** @description Sets or gets the format string of the editor of fields with type 'date'. */
    formatStringDate: string;
    /** @description Sets or gets the format string of the editor of fields with type 'datetime'. */
    formatStringDateTime: string;
    /** @description Sets hint in form of popup message. */
    hint: string;
    /** @description Defines icon's representatino as characters. */
    icons: FilterBuilderIcons;
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    locale: string;
    /** @description Callback, related to localization module.  */
    localizeFormatFunction: any;
    /** @description Defines maximum number of allowed conditions in the element. */
    maxConditions: number | null;
    /** @description Defines maximum number of allowed conditions in group. */
    maxConditionsPerGroup: number | null;
    /** @description Defines maximum level of grouping in the FilterBuilder. */
    maxLevel: number | null;
    /** @description Defines field names of the filtered element. */
    messages: any;
    /** @description If the element is readonly, users cannot interact with it. */
    readonly: boolean;
    /** @description In restrictedMode set to true, adding of new groups and groups editing by user interaction are denied. */
    restrictedMode: boolean;
    /** @description Enables or disables the display of the icons. */
    showIcons: boolean;
    /** @description Determines the theme. Theme defines the look of the element */
    theme: string;
    /** @description If is set to true, the element cannot be focused. */
    unfocusable: boolean;
    /** @description The value is represented by multidimensional array. The array contains group operators and conditions. Each group can contain nested structures at multiple levels. */
    value: string[];
    /** @description Callback used to format the content of the value fields. */
    valueFormatFunction: any;
    /** @description Sets the placeholder text used in the condition's value box in case the value is not set. */
    valuePlaceholder: string;
    /** @description This event is triggered when the element's value is changed.
    *  @param event. The custom event. 	*/
    onChange: EventEmitter<CustomEvent>;
    /** @description This event is triggered when an editor is closed.
    *  @param event. The custom event. 	*/
    onEditorClose: EventEmitter<CustomEvent>;
    /** @description This event is triggered when an editor starts to close.
    *  @param event. The custom event. 	*/
    onEditorClosing: EventEmitter<CustomEvent>;
    /** @description This event is triggered when an editor is opened.
    *  @param event. The custom event. 	*/
    onEditorOpen: EventEmitter<CustomEvent>;
    /** @description This event is triggered when an editor starts to open.
    *  @param event. The custom event. 	*/
    onEditorOpening: EventEmitter<CustomEvent>;
    /** @description This event is triggered when some of the filterbuilder's building blocks is clicked.
    *  @param event. The custom event. 	*/
    onItemClick: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the built-in menu is opened. If the disableContextMenu property is set to true this event is not fired.
    *  @param event. The custom event. 	*/
    onOpen: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the built-in menu starts to open. If the disableContextMenu property is set to true this event is not fired.
    *  @param event. The custom event. 	*/
    onOpening: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the built-in menu is closed. If the disableContextMenu property is set to true this event is not fired.
    *  @param event. The custom event. 	*/
    onClose: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the built-in menu  starts to close. If the disableContextMenu property is set to true this event is not fired.
    *  @param event. The custom event. 	*/
    onClosing: EventEmitter<CustomEvent>;
    /** @description Adds new condition in particular group.
    * @param {string | HTMLElement} parentGroup. A string, representing the id of the item or an HTML Element referencing this condition.
    * @param {any[]} data. An array, representing condition. Condition's element's role is related to their position in the condition's array. At index 0 - field name, index 1 - condition's opertor, index 2 - condition's value.
    */
    addCondition(parentGroup: string | HTMLElement, data: any[]): void;
    /** @description Adds new group in particular parent group.
    * @param {string | HTMLElement} parentGroup. A string, representing the id of the item or an HTML Element referencing this group.
    * @param {string} data. A string, representing the group operator.
    */
    addGroup(parentGroup: string | HTMLElement, data: string): void;
    /** @description Removes condition.
    * @param {string | HTMLElement} item. A string, representing the id of the item or an HTML Element referencing this condition.
    */
    removeCondition(item: string | HTMLElement): void;
    /** @description Deletes group and all of  it's children
    * @param {string | HTMLElement} item. A string, representing the id of the item or an HTML Element referencing this group.
    */
    removeGroup(item: string | HTMLElement): void;
    /** @description Returns a string representation of the filter builder's value.
    * @param {boolean} useLabels?. Controls the way of string representation. In mode without labels the value object is stringified only.
    * @returns {string}
  */
    toString(useLabels?: any): Promise<any>;
    /** @description Updates condition.
    * @param {string | HTMLElement} item. A string, representing the id of the item or an HTML Element referencing targeted condition.
    * @param {any[]} data. An array, representing condition. Condition's element's role is related to their position in the condition's array. At index 0 - field name, index 1 - condition's opertor, index 2 - condition's value.
    */
    updateCondition(item: string | HTMLElement, data: any[]): void;
    /** @description Updates group
    * @param {string | HTMLElement} item. A string, representing the id of the item or an HTML Element referencing this group.
    * @param {string} data. A string, representing the group operator.
    */
    updateGroup(item: string | HTMLElement, data: string): void;
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
