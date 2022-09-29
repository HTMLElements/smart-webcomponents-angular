import { Gauge } from './../index';
import { GaugeAnalogDisplayType, Animation, GaugeDigitalDisplayPosition, LabelsVisibility, DragMechanicalAction, ScaleMode, GaugeNeedlePosition, GaugeScalePosition, ScaleType, GaugeSizeMode, TicksPosition, TicksVisibility, Validation, WordLength } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { GaugeAnalogDisplayType, Animation, GaugeDigitalDisplayPosition, LabelsVisibility, DragMechanicalAction, ScaleMode, GaugeNeedlePosition, GaugeScalePosition, ScaleType, GaugeSizeMode, TicksPosition, TicksVisibility, Validation, WordLength, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { Gauge } from './../index';
import { ControlValueAccessor } from '@angular/forms';
export declare class GaugeComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges, ControlValueAccessor {
    constructor(ref: ElementRef<Gauge>);
    private eventHandlers;
    nativeElement: Gauge;
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
    /** @description Determines the type of gauge's indicator. */
    analogDisplayType: GaugeAnalogDisplayType | string;
    /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
    animation: Animation | string;
    /** @description Sets or gets gauge's animation duration. Applicable only when animation is not 'none'. */
    animationDuration: number;
    /** @description With the coerce property true, the value is set to the nearest value allowed by the interval property.  */
    coerce: boolean;
    /** @description Sets or gets whether custom ticks at (possibly) uneven interval will be plotted. The ticks to be plotted are defined with the property customTicks. */
    customInterval: boolean;
    /** @description If customInterval is enabled, sets a list of ticks to be plotted. If coerce is set to true, the value will snap to these ticks. */
    customTicks: number[];
    /** @description Determines the date pattern of the labels when mode is 'date'. */
    dateLabelFormatString: string;
    /** @description Sets or gets the char to use as the decimal separator in numeric values.  */
    decimalSeparator: string;
    /** @description Enables or disables the digital display of the element. */
    digitalDisplay: boolean;
    /** @description Sets the position of the digital display inside the element. */
    digitalDisplayPosition: GaugeDigitalDisplayPosition | string;
    /** @description Enables or disables the element. */
    disabled: boolean;
    /** @description Callback function which allows rendering of a custom needle. Applicable only to analogDisplayType needle. */
    drawNeedle: any;
    /** @description Sets or gets Gauge's end angle. This property specifies the end of the gauge's scale and is measured in degrees. */
    endAngle: number;
    /** @description When cooerce property is true, all values coerce to the interval's value. */
    interval: number;
    /** @description Sets the direction of the gauge. If true - the positions of the gauge's start and end are switched. */
    inverted: boolean;
    /** @description A callback function that can be used to format the values displayed inside the gauge labels. */
    labelFormatFunction: any;
    /** @description Determines the visibility of the labels inside the element. */
    labelsVisibility: LabelsVisibility | string;
    /** @description Sets or gets the locale. Used in conjunction with the property messages.  */
    locale: string;
    /** @description Callback used to customize the format of the messages that are returned from the Localization Module. */
    localizeFormatFunction: any;
    /** @description Enables or disables the usage of logarithmic scale in the element. */
    logarithmicScale: boolean;
    /** @description Determines the maximum value for the scale of the element. */
    max: number;
    /** @description Determines when the value of the element is updated. */
    mechanicalAction: DragMechanicalAction | string;
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
    messages: any;
    /** @description Determines the minimum value for the scale of the element.  */
    min: number;
    /** @description Determines whether the element works with numbers or dates. */
    mode: ScaleMode | string;
    /** @description Sets or gets the element's name, which is used as a reference when the data is submitted. */
    name: string;
    /** @description Determines the position of the needle when analogDisplayType is 'needle'.  */
    needlePosition: GaugeNeedlePosition | string;
    /** @description Determines the number of digits after the decimal point. Applicable only when scaleType is 'floatingPoint'. */
    precisionDigits: number;
    /** @description This property represents an array of objects. Each object is a different range. The range is a colored area with specific size. */
    ranges: {
        startValue: number;
        endValue: number;
        className: string;
    }[];
    /** @description When the element is read only the users cannot interact with it. */
    readonly: boolean;
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. If enabled, the scale is inverted and the labels and digital display are oriented from right to left. */
    rightToLeft: boolean;
    /** @description Determines the position of the scale in the element.  */
    scalePosition: GaugeScalePosition | string;
    /** @description Determines the type of the gauge's value and scale.  */
    scaleType: ScaleType | string;
    /** @description Enables or disables scientific notation. */
    scientificNotation: boolean;
    /** @description This property indicates whether the gauge ranges are visible or not. */
    showRanges: boolean;
    /** @description Enables or disables displaying of units. */
    showUnit: boolean;
    /** @description Determining how many significant digits are in a number. Applicable only when scaleType is 'integer'. */
    significantDigits: number | null;
    /** @description Determines how the Gauge will size. */
    sizeMode: GaugeSizeMode | string;
    /** @description Sets or gets gauge's start angle. This property specifies the beggining of the gauge's scale and is measured in degrees. */
    startAngle: number;
    /** @description Sets or gets the element's visual theme. */
    theme: string;
    /** @description Determines the position of the ticks in the Gauge. */
    ticksPosition: TicksPosition | string;
    /** @description Determines the visibility of the ticks. */
    ticksVisibility: TicksVisibility | string;
    /** @description Sets or gets if the element can be focused. */
    unfocusable: boolean;
    /** @description Sets or gets the name of unit used for the values on the scale of the element. */
    unit: string;
    /** @description Sets the value's validation by min/max. */
    validation: Validation | string;
    /** @description Sets or gets the value of the element. The value can be a date only when scaleType is 'date'. */
    value: string | number | Date;
    /** @description Sets or gets the word length. Applicable only when scaleType is 'integer'. */
    wordLength: WordLength | string;
    /** @description This event is triggered when the value of the element is changed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
    *   oldValue - The previous value of the element.
    *   value - The new value of the element.
    */
    onChange: EventEmitter<CustomEvent>;
    /** @description Focuses the element.
    */
    focus(): void;
    /** @description Gets the optimal size of the element (the current width and the height based on the plotted internal elements).
    * @returns {any}
  */
    getOptimalSize(): Promise<any>;
    /** @description Get/set the value of the gauge.
    * @param {string | number | Date} value?. The value to be set. If no parameter is passed, returns the current value of the gauge. The value can be a date only when <b>scaleType</b> is 'date'.
    * @returns {string}
  */
    val(value?: any): Promise<any>;
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
