import { SwitchButton } from './../index';
import { Animation, ClickMode, Orientation, SwitchButtonSwitchMode } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { Animation, ClickMode, Orientation, SwitchButtonSwitchMode, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { SwitchButton } from './../index';
import { ControlValueAccessor } from '@angular/forms';
export declare class SwitchButtonComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges, ControlValueAccessor {
    constructor(ref: ElementRef<SwitchButton>);
    private eventHandlers;
    nativeElement: SwitchButton;
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
    /** @description Sets the click mode of the switch button. This property is active only when switchMode is 'click'. press - the state of the switch is changed on mousedownrelease - the state of the switch is changed on mouseuppressAndRelease - the state of the switch is changed on mousedown and reverted to the original on mouseup. */
    clickMode: ClickMode | string;
    /** @description Sets or gets the check state. */
    checked: boolean;
    /** @description Enables or disables the ratio button. */
    disabled: boolean;
    /** @description Sets the text representation of checked=false state. */
    falseContent: string;
    /** @description Sets custom template about false state. */
    falseTemplate: any;
    /** @description Sets or gets indeterminate state of the switch. */
    indeterminate: boolean;
    /** @description Sets the direction of switchin. If is true - positions of the switch states are changed. */
    inverted: boolean;
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    locale: string;
    /** @description Callback, related to localization module.  */
    localizeFormatFunction: any;
    /** @description Sets an object with string values, related to the different states of passwords strength. */
    messages: any;
    /** @description Sets or gets the widget's name. */
    name: string;
    /** @description Sets the orientation of the switch */
    orientation: Orientation | string;
    /** @description If the custom element is readonly, it cannot be interacted with. */
    readonly: boolean;
    /** @description Sets the text representation of checked=true state. */
    trueContent: string;
    /** @description Sets custom template about true state. */
    trueTemplate: string;
    /** @description Sets the switchMode of the element. default - dragging the thumb or clicking inside the track can change the state of the element. click - clicking inside the track changes the state of the element. drag - dragging the thumb changes the state of the element.none - the state of the element can only be changed via the API */
    switchMode: SwitchButtonSwitchMode | string;
    /** @description Determines the theme. Theme defines the look of the element */
    theme: string;
    /** @description If is set to true, the element cannot be focused. */
    unfocusable: boolean;
    /** @description Sets or gets the widget's value. */
    value: string;
    /** @description This event is triggered when the widget is checked/unchecked.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	oldValue, 	changeType)
    *   value - A boolean value indicating the new state of the button ( checked or not ).
    *   oldValue - A boolean value indicating the previous state of the button ( checked or not ).
    *   changeType - A string flag indicating whether the change event was triggered via API or an event.
    */
    onChange: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the widget is checked.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	changeType)
    *   changeType - A string flag indicating whether the change event was triggered via API or an event.
    */
    onCheckValue: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the widget is unchecked.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	changeType)
    *   changeType - A string flag indicating whether the change event was triggered via API or an event.
    */
    onUncheckValue: EventEmitter<CustomEvent>;
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
