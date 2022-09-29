import { ColorPicker } from './../index';
import { Animation, ColorApplyValueMode, ColorDisplayMode, DropDownOpenMode, DropDownButtonPosition, DropDownPosition, ColorPalette, ResizeMode, ColorTooltipDisplayMode, ColorValueFormat, ColorValueDisplayMode } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { Animation, ColorApplyValueMode, ColorDisplayMode, DropDownOpenMode, DropDownButtonPosition, DropDownPosition, ColorPalette, ResizeMode, ColorTooltipDisplayMode, ColorValueFormat, ColorValueDisplayMode, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { ColorPicker } from './../index';
import { ControlValueAccessor } from '@angular/forms';
export declare class ColorPickerComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges, ControlValueAccessor {
    constructor(ref: ElementRef<ColorPicker>);
    private eventHandlers;
    nativeElement: ColorPicker;
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
    /** @description This property allows editting of colors via the input inside the element's action section. Accepts values in all supported types. This property works when 'valueDisplayMode' is set to default or colorCode. */
    editable: boolean;
    /** @description Determines the delay before the opened drop down closes when dropDownOpenMode is set to 'auto'. */
    autoCloseDelay: number;
    /** @description Specifies how the user applies the selected value. In 'instantly' mode the value is applied immediately when color is selected. In 'useButtons' mode are shown 'Ok' and 'Cancel' buttons at the botom of the colorpicker's drop down. Only click on 'OK' button applies the value. */
    applyValueMode: ColorApplyValueMode | string;
    /** @description Defines the number of columns for the colors in displayModes 'grid', 'hexagonal' and 'spectrumGrid'. */
    columnCount: number;
    /** @description Determines the colors that will be displayed and their layout. */
    displayMode: ColorDisplayMode | string;
    /** @description Enables or disables the element. */
    disabled: boolean;
    /** @description By default clicking on color panel's preview container returns the color value to it's previous state. 'disableUndo' prevents this functionality. */
    disableUndo: boolean;
    /** @description Sets the parent container of the dropDown (the popup). The expected value is CSS Selector, ID or 'body'. Used when a CSS property of unknowned parent is interfering with the visibility of the dropDown. Example: 'body'. */
    dropDownAppendTo: string;
    /** @description Determines how the drop down is going to open. */
    dropDownOpenMode: DropDownOpenMode | string;
    /** @description Determines the position of the drop down button. */
    dropDownButtonPosition: DropDownButtonPosition | string;
    /** @description Determines the vertical position of the dropDown. 'Auto' means its automatically determined depending on the viewport size. */
    dropDownPosition: DropDownPosition | string;
    /** @description Sets the height of the drop down. Default value of null means that CSS variables are used. This property should be used when the browser doesn not support CSS variables. */
    dropDownHeight: string;
    /** @description If this property is enabled, when the element's dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document. */
    dropDownOverlay: boolean;
    /** @description Sets the width of the drop down. Default value of null means that CSS variables are used. This property should be used when the browser doesn't support CSS variables. */
    dropDownWidth: string;
    /** @description Allows to edit the alpha(transparency) of the colors via an editor/slider in the following displayModes: 'palette', 'radial', 'hexagonal' */
    editAlphaChannel: boolean;
    /** @description Allows to select a custom color via an editor popup. Custom color selection is available in modes that don't have this option by default, like: 'grid', 'default, 'spectrum grid'. */
    enableCustomColors: boolean;
    /** @description Defines an Array of colors that will be used as the Theme Colors in the corresponding section of displayMode: 'grid' and 'default'. */
    gridThemeColors: string[] | null;
    /** @description Defines an Array of colors that will be used as the Shade Colors in the corresponding section of displayMode: 'grid' and 'default'. */
    gridShadeColors: string[] | null;
    /** @description Defines an Array of colors that will be used as the Standart Colors in the corresponding section of displayMode: 'grid' and 'default'. */
    gridStandardColors: string[] | null;
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
    /** @description Sets additional helper text below the element that is only visible when the element is focused. */
    hint: string;
    /** @description Inverts the colors in 'spectrumGrid', 'hexagonal', 'radial' modes. */
    inverted: boolean;
    /** @description Sets a label above the element. */
    label: string;
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    locale: string;
    /** @description Callback used to customize the format of the messages that are returned from the Localization Module. */
    localizeFormatFunction: any;
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
    messages: any;
    /** @description Sets or gets the name attribute for the element. Name is used when submiting HTML forms. */
    name: string;
    /** @description Determines whether the popup is opened or closed */
    opened: boolean;
    /** @description Determines what colors will be displayed in 'spectrumGrid', 'grid' and 'hexagonal' displayModes. */
    palette: ColorPalette | string;
    /** @description Defines an array of colors that form a custom palette. This palette can be used in displayModes 'grid' and 'spectrum grid' if the palette property is set to custom. The value of the property can be an array of strings or objects that contain valid colors ( HEX, RGBA, etc). */
    paletteColors: {
        name: string;
        value: string;
    }[] | string[] | null;
    /** @description Defines an array of colors that represent a predefined list of custom colors. This palette can be used in displayModes 'grid', 'default' and 'spectrum grid'. Custom colors are displayed at the bottom of the color grid below the button for custom color selection. They are only visible if enableCustomColor property is true. */
    paletteCustomColors: string[] | null;
    /** @description The placeholder is shown when the value is not set yet or is set to null. */
    placeholder: string;
    /** @description Disables user interaction with the element. */
    readonly: boolean;
    /** @description Determines whether the resize indicator in the bottom right corner of the drop down is visible or not. This property is used in conjunction with resizeMode. */
    resizeIndicator: boolean;
    /** @description Determines whether the dropDown can be resized or not. When resizing is enabled, a resize bar appears on the top/bottom side of the drop down. */
    resizeMode: ResizeMode | string;
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    rightToLeft: boolean;
    /** @description Determines the theme. Theme defines the look of the element */
    theme: string;
    /** @description Determines how the tooltip displays the value of the color that is being hovered. */
    tooltipDisplayMode: ColorTooltipDisplayMode | string;
    /** @description If is set to true, the element cannot be focused. */
    unfocusable: boolean;
    /** @description Represents the value of the selected color as the value of the element. */
    value: string;
    /** @description Determines the format of the color. Whether it's in HEX, RGB or RGBA. By default it shows the color depending on the displayMode. */
    valueFormat: ColorValueFormat | string;
    /** @description Determines which elements will be displayed in color picker's action section. */
    valueDisplayMode: ColorValueDisplayMode | string;
    /** @description This event is triggered when user clicks on the action button. 'Ok' button is visible only when applyValueMode is set to useButtons.
    *  @param event. The custom event. 	*/
    onActionButtonClick: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the cancel button is clicked. 'Cancel' button is visible only when applyValueMode is set to useButtons.
    *  @param event. The custom event. 	*/
    onCancelButtonClick: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the color value is changed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
    *   oldValue - The previously selected color.
    *   value - The new selected color.
    */
    onChange: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the drop down is closed.
    *  @param event. The custom event. 	*/
    onClose: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the drop down is about to be closed. This event allows to cancel the closing operation calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	*/
    onClosing: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the custom color selection view is opened/closed. Custom color selection view is available when enableCustomColors property is true.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	value)
    *   value - A boolean that indicates whether the custom color view is shown or not.
    */
    onCustomColorSelection: EventEmitter<CustomEvent>;
    /** @description This event is triggered when user clicks on the drop down button.
    *  @param event. The custom event. 	*/
    onDropDownButtonClick: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the ok button is clicked.
    *  @param event. The custom event. 	*/
    onOkButtonClick: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the drop down is opened.
    *  @param event. The custom event. 	*/
    onOpen: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the drop down is about to be opened. This event allows to cancel the opening operation calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	*/
    onOpening: EventEmitter<CustomEvent>;
    /** @description This event is triggered when user starts resizing the drop down.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	position)
    *   position - An object containing the current left and top positions of the drop down.
    */
    onResizeStart: EventEmitter<CustomEvent>;
    /** @description This event is triggered when the resizing of the drop down is finished.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	position)
    *   position - An object containing the current left and top positions of the drop down.
    */
    onResizeEnd: EventEmitter<CustomEvent>;
    /** @description Opens the drop down of the color picker.
    */
    open(): void;
    /** @description Closes the drop down of the color picker.
    */
    close(): void;
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
