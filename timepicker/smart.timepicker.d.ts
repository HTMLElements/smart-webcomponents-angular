import { TimePicker } from './../index';
import { Animation, TimePickerFormat, TimePickerSelection, ViewLayout } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { Animation, TimePickerFormat, TimePickerSelection, ViewLayout, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { TimePicker } from './../index';
import { ControlValueAccessor } from '@angular/forms';
export declare class TimePickerComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges, ControlValueAccessor {
    constructor(ref: ElementRef<TimePicker>);
    private eventHandlers;
    nativeElement: TimePicker;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /**
    * @description
    * The registered callback function called when a change event occurs on the form elements.
    */
    _onChange: (value: any) => void;
    /**
    * @description
    * The registered callback function called when a blur event occurs on the form elements.
    */
    _onTouched: () => any;
    /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
    animation: Animation | string;
    /** @description Sets or gets whether after selecting hours, the element will automatically switch to minute selection. */
    autoSwitchToMinutes: boolean;
    /** @description Enables or disables the element. */
    disabled: boolean;
    /** @description Determines whether the footer section of the element is visible or not. */
    footer: boolean;
    /** @description Sets or gets the footer template. The value of this property can be the id of an HTMLTemplateElement or the HTMLTemplateElement itself. If set to null, a default, empty, template is applied. */
    footerTemplate: string | HTMLTemplateElement;
    /** @description Determines the hour selection format. */
    format: TimePickerFormat | string;
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    locale: string;
    /** @description Callback used to customize the format of the messages that are returned from the Localization Module. */
    localizeFormatFunction: any;
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property language.  */
    messages: any;
    /** @description Sets or gets the step when selecting minutes. */
    minuteInterval: number;
    /** @description Sets or gets the name attribute for the element. Name is used when submiting HTML forms. */
    name: string;
    /** @description Disables user interaction with the element. */
    readonly: boolean;
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    rightToLeft: boolean;
    /** @description Determines the view that is currently being shown. By default the hours view is visible. */
    selection: TimePickerSelection | string;
    /** @description Determines the theme. Theme defines the look of the element */
    theme: string;
    /** @description If is set to true, the element cannot be focused. */
    unfocusable: boolean;
    /** @description Sets or gets the value of the element. The value can be a valid Date object or a string representing a valid time. */
    value: any;
    /** @description Determines whether the element is in landscape or portrait mode. */
    view: ViewLayout | string;
    /** @description This event is triggered when the value is changed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
    *   oldValue - The old value before it was changed presented as a Date object.
    *   value - The new value presented as a Date object.
    */
    onChange: EventEmitter<CustomEvent>;
    /** @description Sets the hours.
    * @param {number} hours. The hours to set.
    */
    setHours(hours: number): void;
    /** @description Sets the minutes.
    * @param {number} minutes. The minutes to set.
    */
    setMinutes(minutes: number): void;
    readonly isRendered: boolean;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    _initialChange: boolean;
    ngValue: any;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnChanges(changes: SimpleChanges): void;
    /** @description Add event listeners. */
    private listen;
    /** @description Remove event listeners. */
    private unlisten;
}
