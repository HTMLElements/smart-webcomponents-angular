import { ColorPanel } from './../index';
import { Animation, ColorApplyValueMode, ColorDisplayMode, ColorPalette, ColorTooltipDisplayMode, ColorValueFormat } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { Animation, ColorApplyValueMode, ColorDisplayMode, ColorPalette, ColorTooltipDisplayMode, ColorValueFormat, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { ColorPanel } from './../index';
import { ControlValueAccessor } from '@angular/forms';
export declare class ColorPanelComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges, ControlValueAccessor {
    constructor(ref: ElementRef<ColorPanel>);
    private eventHandlers;
    nativeElement: ColorPanel;
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
    /** @description Specifies how the value is applied. */
    applyValueMode: ColorApplyValueMode | string;
    /** @description Defines the number of columns for the colors in displayModes 'grid', 'hexagonal' and 'spectrumGrid'. */
    columnCount: number;
    /** @description Enables or disables the element. Disabled elements can not be interacted with. */
    disabled: boolean;
    /** @description Determines the colors that will be displayed and their layout. */
    displayMode: ColorDisplayMode | string;
    /** @description By default clicking on color panel's preview container returns the color value to it's previous state. 'disableUndo' prevents this functionality. */
    disableUndo: boolean;
    /** @description Allows to edit the alpha(transparency) of the colors via an editor/slider in the following displayModes: 'palette', 'radial', 'hexagonal' */
    editAlphaChannel: boolean;
    /** @description Allows to select a custom color via an editor popup. Custom color selection is available in modes that don't have this option by default, like: 'grid', 'default, 'spectrum grid'. */
    enableCustomColors: boolean;
    /** @description Defines an Array of colors that will be used as the Theme Colors in the corresponding section in displayMode: 'default'. */
    gridThemeColors: string[] | null;
    /** @description Defines an Array of colors that will be used as the Shade Colors in the corresponding section of displayMode: 'default'. */
    gridShadeColors: string[] | null;
    /** @description Defines an Array of colors that will be used as the Standart Colors in the corresponding section of displayMode: 'default'. */
    gridStandardColors: [] | null;
    /** @description Hides the alpha editor. Alpha editor is an input containing the value of the current color opacity. The input is available in the following modes: 'radial', 'palette', 'hexagonal'. The input is only visible if there's enough space. This editor is visible by default. */
    hideAlphaEditor: boolean;
    /** @description Determines which color editors will be hidden first when there's not enough space for all of them to be visible. By default the editors are only visible in 'palette', 'radial' and 'hexagonal' display modes. This property allows to prioritize the visibility of the editors. */
    hideContentToFit: string[];
    /** @description HEX editor is an input containing the hexadecimal representation of a color. This editor is visible by default. Setting 'hideRGBeditor' to true hides it. */
    hideHEXEditor: boolean;
    /** @description Hides the preview container. Preview container is used to show the currently selected value in 'palette', 'radial' and 'hexagonal' display modes. */
    hidePreviewContainer: boolean;
    /** @description Hides the RGB editor. This editor is a group of three separate inputs for the Red, Green and Blue values of the color. */
    hideRGBEditor: boolean;
    /** @description Inverts the colors in 'spectrumGrid', 'hexagonal', 'radial' modes. */
    inverted: boolean;
    /** @description Sets or gets the language. Used in conjunction with the property messages. */
    locale: string;
    /** @description Callback used to customize the format of the messages that are returned from the Localization Module. */
    localizeFormatFunction: any;
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
    messages: any;
    /** @description Sets or gets the name attribute for the element. Name is used when submiting HTML forms. */
    name: string;
    /** @description Determines what colors will be displayed in 'spectrumGrid', 'grid' and 'hexagonal' displayModes. */
    palette: ColorPalette | string;
    /** @description Defines an array of colors that form a custom palette. This palette can be used in displayModes 'grid' and 'spectrum grid' if the palette property is set to custom. The value of the property can be an array of strings or objects that contain valid colors ( HEX, RGBA, etc). */
    paletteColors: any;
    /** @description Defines an array of colors that represent a predefined list of custom colors. This palette can be used in displayModes 'grid', 'default' and 'spectrum grid'. Custom colors are displayed at the bottom of the color grid below the button for custom color selection. They are only visible if enableCustomColors property is true. */
    paletteCustomColors: string[] | null;
    /** @description If the element is readonly, users cannot interact with it. */
    readonly: boolean;
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    rightToLeft: boolean;
    /** @description Determines the theme. Theme defines the look of the element */
    theme: string;
    /** @description Determines how the tooltip displays the value of the color that is being hovered. */
    tooltipDisplayMode: ColorTooltipDisplayMode | string;
    /** @description Represents the value of the selected color. */
    value: string;
    /** @description Determines the format of the color. Whether it's in HEX, RGB or RGBA. By default it shows the color depending on the displayMode. */
    valueFormat: ColorValueFormat | string;
    /** @description Determines the value member for the color when the paletteColors consists of objects. Usefull in cases where the colors are loaded as objects in an array and the attribute that holds the color key is not named 'value'. */
    valueMember: string;
    /** @description If is set to true, the element cannot be focused. */
    unfocusable: boolean;
    /** @description This event is triggered when the color is changed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
    *   oldValue - The previously selected color.
    *   value - The new selected color.
    */
    onChange: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the cancel button is clicked. 'Cancel' button is visible only when applyValueMode is set to useButtons.
    *  @param event. The custom event. 	*/
    onCancelButtonClick: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the custom color selection view is opened/closed. Custom color selection view is available when enableCustomColors property is true.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	value)
    *   value - A boolean that indicates whether the custom color view is shown or not.
    */
    onCustomColorSelection: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the ok button is clicked. 'Ok' button is visible only when applyValueMode is set to useButtons.
    *  @param event. The custom event. 	*/
    onOkButtonClick: EventEmitter<CustomEvent>;
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
