import { Slider } from './../index';
import { Animation, LabelsVisibility, DragMechanicalAction, ScaleMode, Orientation, ScalePosition, ScaleType, Position, TicksPosition, TicksVisibility, Validation, WordLength } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { Animation, LabelsVisibility, DragMechanicalAction, ScaleMode, Orientation, ScalePosition, ScaleType, Position, TicksPosition, TicksVisibility, Validation, WordLength, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { Slider } from './../index';
import { ControlValueAccessor } from '@angular/forms';
export declare class SliderComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges, ControlValueAccessor {
    constructor(ref: ElementRef<Slider>);
    private eventHandlers;
    nativeElement: Slider;
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
    /** @description With the coerce property true and clicking the track, the thumb and value are moved and set to the nearest value allowed by the interval property.  */
    coerce: boolean;
    /** @description Sets or gets whether custom ticks at (possibly) uneven interval will be plotted. The ticks to be plotted are defined with the property customTicks. */
    customInterval: boolean;
    /** @description If customInterval is enabled, sets a list of ticks to be plotted. If coerce is set to true, the value will snap to these ticks. */
    customTicks: number[];
    /** @description Sets or gets the pattern which labels are displayed in when mode is 'date'. */
    dateLabelFormatString: string;
    /** @description Sets or gets the char to use as the decimal separator in numeric values.  */
    decimalSeparator: string;
    /** @description Enables or disables the widget.  */
    disabled: boolean;
    /** @description Enables or disables incrementing/decrementing the value using the mouse wheel in jqxSlider.  */
    enableMouseWheelAction: boolean;
    /** @description Determines what values the thumb snaps to.  */
    interval: string | number;
    /** @description Sets the direction of the slider. If is true - positions of the slider's begin and end are changed.  */
    inverted: boolean;
    /** @description A callback function that can be used to format the values displayed on the slider labels and tooltip. */
    labelFormatFunction: any;
    /** @description Sets or gets the widget's label visibility.  */
    labelsVisibility: LabelsVisibility | string;
    /** @description Sets or gets the locale. Used in conjunction with the property messages.  */
    locale: string;
    /** @description Callback, related to localization module.  */
    localizeFormatFunction: any;
    /** @description Enables or disables the usage of logarithmic scale in the widget.  */
    logarithmicScale: boolean;
    /** @description Sets or gets the maximum value of the widget.  */
    max: string | number;
    /** @description Sets or gets the type of used mechanical action.  */
    mechanicalAction: DragMechanicalAction | string;
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
    messages: any;
    /** @description Sets or gets the minimum value of the widget.  */
    min: string | number;
    /** @description Sets or gets whether the widget works with numbers or dates. */
    mode: ScaleMode | string;
    /** @description Sets or gets the element's name, which is used as a reference when the data is submitted. */
    name: string;
    /** @description Sets the orientation of the widget.  */
    orientation: Orientation | string;
    /** @description Determines the number of digits after the decimal point. Applicable only when scaleType is 'integer'.  */
    precisionDigits: number;
    /** @description Enables or disables the slider to be in range mode. If is  set to true, the range is represented between two thumbs.  */
    rangeSlider: boolean;
    /** @description When the slider is read only the users cannot drag or click in the fill of the slider. */
    readonly: boolean;
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    rightToLeft: boolean;
    /** @description Sets the position of the widget's scales.  */
    scalePosition: ScalePosition | string;
    /** @description Sets the type of the slider's scale.  */
    scaleType: ScaleType | string;
    /** @description Enables or disables scientific notation. */
    scientificNotation: boolean;
    /** @description Enables or disables displaying of the buttons.  */
    showButtons: boolean;
    /** @description Enables or disables displaying of the thumb label. */
    showThumbLabel: boolean;
    /** @description Enables or disables displaying of the tooltip.  */
    showTooltip: boolean;
    /** @description Enables or disables displaying of the units.  */
    showUnit: boolean;
    /** @description Determining how many significant digits are in a number. Applicable only when scaleType is 'integer'.  */
    significantDigits: number;
    /** @description Sets or gets the element's visual theme.  */
    theme: string;
    /** @description Sets or gets the position of the thumb label. */
    thumbLabelPosition: Position | string;
    /** @description Sets or gets the position of the ticks in jqxSlider widget. */
    ticksPosition: TicksPosition | string;
    /** @description Sets or gets the visibility of the ticks. */
    ticksVisibility: TicksVisibility | string;
    /** @description Sets or gets the position of the tooltip in jqxSlider widget.  */
    tooltipPosition: Position | string;
    /** @description Sets or gets if the element can be focused. */
    unfocusable: boolean;
    /** @description Sets or gets the name of unit used in jqxSlider widget.  */
    unit: string;
    /** @description Sets the value's validation by min/max. If 'strict' is applied, the value is always validated by min and max. If 'interaction' is applied, programmatic value changes are not coerced to min/max and if min/max are changed, resulting in the current value being out of range, the value is not coerced, and no change event is fired. */
    validation: Validation | string;
    /** @description Sets or gets the value of the jqxSlider widget. The property is used when the rangeSlider property is set to false. */
    value: any;
    /** @description Sets or gets the value of the jqxSlider widget. The property is used when the rangeSlider property is set to true. */
    values: number[];
    /** @description Sets or gets the word length. Applicable only when scaleType is 'integer'.  */
    wordLength: WordLength | string;
    /** @description This event is triggered when the value of the slider is changed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	oldValue)
    *   value - A numeric value indicating the scroll position.
    *   oldValue - A numeric value indicating the previous scroll position.
    */
    onChange: EventEmitter<CustomEvent>;
    /** @description Focuses the slider.
    */
    focus(): void;
    /** @description Gets the optimal size of the widget.
    * @returns {any}
  */
    getOptimalSize(): Promise<any>;
    /** @description Get/set the value of the slider.
    * @param {string | number | number[] | string[]} value?. The value to be set. If no parameter is passed, returns the displayed value of the slider.
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
