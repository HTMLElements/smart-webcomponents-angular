import { Breadcrumb } from './../index';
import { Animation } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { Animation, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { Breadcrumb } from './../index';
export declare class BreadcrumbComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<Breadcrumb>);
    private eventHandlers;
    nativeElement: Breadcrumb;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description Enables or disables the "Add new item" (+) button. */
    addNewItem: boolean;
    /** @description Enables or disables the dragging of breadcrumb items. */
    allowDrag: boolean;
    /** @description Enables or disables the dropping of dragged breadcrumb items. */
    allowDrop: boolean;
    /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
    animation: Animation | string;
    /** @description Show/Hide the close button of breadcrumb items. */
    closeButtons: boolean;
    /** @description Determines the data source to load breadcrumb items from. The Array should contain objects. Each object defines a single breadcrumb item. */
    dataSource: {
        label: string;
        value: string;
    }[];
    /** @description Enables or disables the Breadcrumb. */
    disabled: boolean;
    /** @description Sets or gets the template of breadcrumb items. The value of this property can be the id of an HTMLTemplateElement or the HTMLTemplateElement itself. If set to null, no template is applied. */
    itemTemplate: any;
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    locale: string;
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
    messages: any;
    /** @description Determines the minimum width of the Breadcrumb at which it will switch from normal to minimized mode. If set to null, the Breadcrumb does not minimize automatically. */
    minimizeWidth: number;
    /** @description If is set to true, the element cannot be focused. */
    unfocusable: boolean;
    /** @description This event is triggered when a Breadcrumb item is closed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item)
    *   item - The item that has been closed.
    */
    onClose: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a Breadcrumb item is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item)
    *   item - The item that is going to be closed.
    */
    onClosing: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a Breadcrumb item is dropped.
    *  @param event. The custom event. 	*/
    onDragEnd: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a Breadcrumb item is being dragged.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	originalEvent, 	target)
    *   item - The item that is being dragged.
    *   originalEvent - The original event that initiates the dragging operation.
    *   target - The original target.
    */
    onDragging: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the "Add new item" (+) button is clicked.
    *  @param event. The custom event. 	*/
    onAddNewItem: EventEmitter<CustomEvent>;
    /** @description Adds an item.
    * @param {any} itemDetails. An Object with the fields "index", "label", and "value".
    */
    addItem(itemDetails: any): void;
    /** @description Restores the Breadcrumb from minimized state back to normal.
    */
    maximize(): void;
    /** @description Minimizes the Breadcrumb.
    */
    minimize(): void;
    /** @description Removes an item.
    * @param {HTMLElement} item. The item to remove.
    */
    removeItem(item: HTMLElement): void;
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
