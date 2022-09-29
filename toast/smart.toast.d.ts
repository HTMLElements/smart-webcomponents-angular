import { Toast } from './../index';
import { Animation, ToastPosition, ToastType } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { Animation, ToastPosition, ToastType, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { Toast } from './../index';
export declare class ToastComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<Toast>);
    private eventHandlers;
    nativeElement: Toast;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
    animation: Animation | string;
    /** @description Specifies the container where new openned toast items will be displayed. The value can be an HTMLElement or element's id. This property is in relation with modal(lower priority than modal) and position(higher priority than position) properties. */
    appendTo: string;
    /** @description Sets or gets whether the toast will automatically close after duration equal to the autoCloseDelay property. */
    autoClose: boolean;
    /** @description Sets or gets the duration after which the toast automatically closes (works only if the autoClose property is set to true). */
    autoCloseDelay: number;
    /** @description Sets whether the toast will open automatically immediately after widget's initialization. */
    autoOpen: boolean;
    /** @description The user will not be able to interact with toast items when disabled is set to true. */
    disabled: boolean;
    /** @description Sets custom icon className which overrides the default one. Multiple class names can be applied by separating them with a space. Useful when loading from a third-party icon library (such as Bootstrap). */
    iconClass: string;
    /** @description Adds a custom class to Toast items. Multiple class names can be applied by separating them with a space. Useful when styling by using predefined class names from a third-party CSS library (such as Bootstrap). */
    itemClass: string;
    /** @description Sets custom item template. */
    itemTemplate: string;
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    locale: string;
    /** @description Callback, related to localization module.  */
    localizeFormatFunction: any;
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
    messages: any;
    /** @description In modal mode the toast item is positioned in the center of the screen. This property is with higher priority than position and appendTo. If modal is set to true these properties are disregarded. */
    modal: boolean;
    /** @description Sets the part of the browser window where the toast will be positioned. The position property is disregarded if appendTo or modal are set. */
    position: ToastPosition | string;
    /** @description If the element is readonly, users cannot interact with it. */
    readonly: boolean;
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    rightToLeft: boolean;
    /** @description Sets or gets whether to show the toast item's close button. */
    showCloseButton: boolean;
    /** @description Determines the theme. Theme defines the look of the element */
    theme: string;
    /** @description Sets speciffic CSS settings and icon to the toast items. */
    type: ToastType | null | string;
    /** @description If is set to true, the element cannot be focused. */
    unfocusable: boolean;
    /** @description Sets a text value to an toast item. */
    value: any;
    /** @description This event is triggered when the toast item is clicked.
    *  @param event. The custom event. 	*/
    onItemClick: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the toast item is closed.
    *  @param event. The custom event. 	*/
    onClose: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the toast item is opened.
    *  @param event. The custom event. 	*/
    onOpen: EventEmitter<CustomEvent>;
    /** @description This event is triggered on swipebottom over an toast item.
    *  @param event. The custom event. 	*/
    onSwipebottom: EventEmitter<CustomEvent>;
    /** @description This event is triggered on swipeleft over an toast item.
    *  @param event. The custom event. 	*/
    onSwipeleft: EventEmitter<CustomEvent>;
    /** @description This event is triggered on swiperight over an toast item.
    *  @param event. The custom event. 	*/
    onSwiperight: EventEmitter<CustomEvent>;
    /** @description This event is triggered on swipetop over an toast item.
    *  @param event. The custom event. 	*/
    onSwipetop: EventEmitter<CustomEvent>;
    /** @description Closes all opened toast items.
    */
    closeAll(): void;
    /** @description Closes particular toast item.
    * @param {HTMLElement | string} item. The toast item (or its id) to remove.
    */
    closeItem(item: HTMLElement | string): void;
    /** @description Closes the last opened toast item.
    */
    closeLast(): void;
    /** @description Opens a new toast item and returns the opened smart-toast-item instance.
    * @param {HTMLElement | string} value?. The value for the toast item. If not set, the value property will be used.
    * @param {string} iconType?. The icon name for the toast item. If not set, the type property determines the icon type that will be used.
    * @returns {HTMLElement}
  */
    open(value?: any, iconType?: any): Promise<any>;
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
