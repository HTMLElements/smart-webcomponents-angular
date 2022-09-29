
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.colorpicker';

import { __decorate } from 'tslib';
import { EventEmitter, Output, Input, forwardRef, ElementRef, Directive, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

class BaseElement {
    constructor(ref) {
        this.onCreate = new EventEmitter();
        this.onReady = new EventEmitter();
        this.onAttach = new EventEmitter();
        this.onDetach = new EventEmitter();
        const that = this;
        this.nativeElement = ref.nativeElement;
        that.nativeElement.onAttached = () => {
            that.onAttach.emit(that.nativeElement);
        };
        that.nativeElement.onDetached = () => {
            that.onDetach.emit(that.nativeElement);
        };
    }
    addEventListener(type, listener, options = false) {
        this.nativeElement.addEventListener(type, listener, options);
    }
    removeEventListener(type, listener, options = false) {
        this.nativeElement.removeEventListener(type, listener, options);
    }
    dispatchEvent(event) {
        return this.nativeElement.dispatchEvent(event);
    }
    blur() {
        this.nativeElement.blur();
    }
    click() {
        this.nativeElement.click();
    }
    focus(options) {
        this.nativeElement.focus(options);
    }
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    get locale() {
        return this.nativeElement ? this.nativeElement.locale : undefined;
    }
    set locale(value) {
        this.nativeElement ? this.nativeElement.locale = value : undefined;
    }
    /** @description Callback used to customize the format of the messages that are returned from the Localization Module. */
    get localizeFormatFunction() {
        return this.nativeElement ? this.nativeElement.localizeFormatFunction : undefined;
    }
    set localizeFormatFunction(value) {
        this.nativeElement ? this.nativeElement.localizeFormatFunction = value : undefined;
    }
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
    get messages() {
        return this.nativeElement ? this.nativeElement.messages : undefined;
    }
    set messages(value) {
        this.nativeElement ? this.nativeElement.messages = value : undefined;
    }
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    get rightToLeft() {
        return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
    }
    set rightToLeft(value) {
        this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
    }
    /** @description Determines the theme. Theme defines the look of the element */
    get theme() {
        return this.nativeElement ? this.nativeElement.theme : undefined;
    }
    set theme(value) {
        this.nativeElement ? this.nativeElement.theme = value : undefined;
    }
}
__decorate([
    Output()
], BaseElement.prototype, "onCreate", void 0);
__decorate([
    Output()
], BaseElement.prototype, "onReady", void 0);
__decorate([
    Output()
], BaseElement.prototype, "onAttach", void 0);
__decorate([
    Output()
], BaseElement.prototype, "onDetach", void 0);
__decorate([
    Input()
], BaseElement.prototype, "locale", null);
__decorate([
    Input()
], BaseElement.prototype, "localizeFormatFunction", null);
__decorate([
    Input()
], BaseElement.prototype, "messages", null);
__decorate([
    Input()
], BaseElement.prototype, "rightToLeft", null);
__decorate([
    Input()
], BaseElement.prototype, "theme", null);
const Smart = window.Smart;

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ColorPickerComponent),
    multi: true
};
let ColorPickerComponent = class ColorPickerComponent extends BaseElement {
    constructor(ref) {
        super(ref);
        this.eventHandlers = [];
        /**
        * @description
        * The registered callback function called when a change event occurs on the form elements.
        */
        this._onChange = () => { };
        /**
        * @description
        * The registered callback function called when a blur event occurs on the form elements.
        */
        this._onTouched = () => { };
        /** @description This event is triggered when user clicks on the action button. 'Ok' button is visible only when applyValueMode is set to useButtons.
        *  @param event. The custom event. 	*/
        this.onActionButtonClick = new EventEmitter();
        /** @description This event is triggered when the cancel button is clicked. 'Cancel' button is visible only when applyValueMode is set to useButtons.
        *  @param event. The custom event. 	*/
        this.onCancelButtonClick = new EventEmitter();
        /** @description This event is triggered when the color value is changed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
        *   oldValue - The previously selected color.
        *   value - The new selected color.
        */
        this.onChange = new EventEmitter();
        /** @description This event is triggered when the drop down is closed.
        *  @param event. The custom event. 	*/
        this.onClose = new EventEmitter();
        /** @description This event is triggered when the drop down is about to be closed. This event allows to cancel the closing operation calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	*/
        this.onClosing = new EventEmitter();
        /** @description This event is triggered when the custom color selection view is opened/closed. Custom color selection view is available when enableCustomColors property is true.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	value)
        *   value - A boolean that indicates whether the custom color view is shown or not.
        */
        this.onCustomColorSelection = new EventEmitter();
        /** @description This event is triggered when user clicks on the drop down button.
        *  @param event. The custom event. 	*/
        this.onDropDownButtonClick = new EventEmitter();
        /** @description This event is triggered when the ok button is clicked.
        *  @param event. The custom event. 	*/
        this.onOkButtonClick = new EventEmitter();
        /** @description This event is triggered when the drop down is opened.
        *  @param event. The custom event. 	*/
        this.onOpen = new EventEmitter();
        /** @description This event is triggered when the drop down is about to be opened. This event allows to cancel the opening operation calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	*/
        this.onOpening = new EventEmitter();
        /** @description This event is triggered when user starts resizing the drop down.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	position)
        *   position - An object containing the current left and top positions of the drop down.
        */
        this.onResizeStart = new EventEmitter();
        /** @description This event is triggered when the resizing of the drop down is finished.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	position)
        *   position - An object containing the current left and top positions of the drop down.
        */
        this.onResizeEnd = new EventEmitter();
        this._initialChange = true;
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('smart-color-picker');
        for (let propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    }
    /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
    get animation() {
        return this.nativeElement ? this.nativeElement.animation : undefined;
    }
    set animation(value) {
        this.nativeElement ? this.nativeElement.animation = value : undefined;
    }
    /** @description This property allows editting of colors via the input inside the element's action section. Accepts values in all supported types. This property works when 'valueDisplayMode' is set to default or colorCode. */
    get editable() {
        return this.nativeElement ? this.nativeElement.editable : undefined;
    }
    set editable(value) {
        this.nativeElement ? this.nativeElement.editable = value : undefined;
    }
    /** @description Determines the delay before the opened drop down closes when dropDownOpenMode is set to 'auto'. */
    get autoCloseDelay() {
        return this.nativeElement ? this.nativeElement.autoCloseDelay : undefined;
    }
    set autoCloseDelay(value) {
        this.nativeElement ? this.nativeElement.autoCloseDelay = value : undefined;
    }
    /** @description Specifies how the user applies the selected value. In 'instantly' mode the value is applied immediately when color is selected. In 'useButtons' mode are shown 'Ok' and 'Cancel' buttons at the botom of the colorpicker's drop down. Only click on 'OK' button applies the value. */
    get applyValueMode() {
        return this.nativeElement ? this.nativeElement.applyValueMode : undefined;
    }
    set applyValueMode(value) {
        this.nativeElement ? this.nativeElement.applyValueMode = value : undefined;
    }
    /** @description Defines the number of columns for the colors in displayModes 'grid', 'hexagonal' and 'spectrumGrid'. */
    get columnCount() {
        return this.nativeElement ? this.nativeElement.columnCount : undefined;
    }
    set columnCount(value) {
        this.nativeElement ? this.nativeElement.columnCount = value : undefined;
    }
    /** @description Determines the colors that will be displayed and their layout. */
    get displayMode() {
        return this.nativeElement ? this.nativeElement.displayMode : undefined;
    }
    set displayMode(value) {
        this.nativeElement ? this.nativeElement.displayMode = value : undefined;
    }
    /** @description Enables or disables the element. */
    get disabled() {
        return this.nativeElement ? this.nativeElement.disabled : undefined;
    }
    set disabled(value) {
        this.nativeElement ? this.nativeElement.disabled = value : undefined;
    }
    /** @description By default clicking on color panel's preview container returns the color value to it's previous state. 'disableUndo' prevents this functionality. */
    get disableUndo() {
        return this.nativeElement ? this.nativeElement.disableUndo : undefined;
    }
    set disableUndo(value) {
        this.nativeElement ? this.nativeElement.disableUndo = value : undefined;
    }
    /** @description Sets the parent container of the dropDown (the popup). The expected value is CSS Selector, ID or 'body'. Used when a CSS property of unknowned parent is interfering with the visibility of the dropDown. Example: 'body'. */
    get dropDownAppendTo() {
        return this.nativeElement ? this.nativeElement.dropDownAppendTo : undefined;
    }
    set dropDownAppendTo(value) {
        this.nativeElement ? this.nativeElement.dropDownAppendTo = value : undefined;
    }
    /** @description Determines how the drop down is going to open. */
    get dropDownOpenMode() {
        return this.nativeElement ? this.nativeElement.dropDownOpenMode : undefined;
    }
    set dropDownOpenMode(value) {
        this.nativeElement ? this.nativeElement.dropDownOpenMode = value : undefined;
    }
    /** @description Determines the position of the drop down button. */
    get dropDownButtonPosition() {
        return this.nativeElement ? this.nativeElement.dropDownButtonPosition : undefined;
    }
    set dropDownButtonPosition(value) {
        this.nativeElement ? this.nativeElement.dropDownButtonPosition = value : undefined;
    }
    /** @description Determines the vertical position of the dropDown. 'Auto' means its automatically determined depending on the viewport size. */
    get dropDownPosition() {
        return this.nativeElement ? this.nativeElement.dropDownPosition : undefined;
    }
    set dropDownPosition(value) {
        this.nativeElement ? this.nativeElement.dropDownPosition = value : undefined;
    }
    /** @description Sets the height of the drop down. Default value of null means that CSS variables are used. This property should be used when the browser doesn not support CSS variables. */
    get dropDownHeight() {
        return this.nativeElement ? this.nativeElement.dropDownHeight : undefined;
    }
    set dropDownHeight(value) {
        this.nativeElement ? this.nativeElement.dropDownHeight = value : undefined;
    }
    /** @description If this property is enabled, when the element's dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document. */
    get dropDownOverlay() {
        return this.nativeElement ? this.nativeElement.dropDownOverlay : undefined;
    }
    set dropDownOverlay(value) {
        this.nativeElement ? this.nativeElement.dropDownOverlay = value : undefined;
    }
    /** @description Sets the width of the drop down. Default value of null means that CSS variables are used. This property should be used when the browser doesn't support CSS variables. */
    get dropDownWidth() {
        return this.nativeElement ? this.nativeElement.dropDownWidth : undefined;
    }
    set dropDownWidth(value) {
        this.nativeElement ? this.nativeElement.dropDownWidth = value : undefined;
    }
    /** @description Allows to edit the alpha(transparency) of the colors via an editor/slider in the following displayModes: 'palette', 'radial', 'hexagonal' */
    get editAlphaChannel() {
        return this.nativeElement ? this.nativeElement.editAlphaChannel : undefined;
    }
    set editAlphaChannel(value) {
        this.nativeElement ? this.nativeElement.editAlphaChannel = value : undefined;
    }
    /** @description Allows to select a custom color via an editor popup. Custom color selection is available in modes that don't have this option by default, like: 'grid', 'default, 'spectrum grid'. */
    get enableCustomColors() {
        return this.nativeElement ? this.nativeElement.enableCustomColors : undefined;
    }
    set enableCustomColors(value) {
        this.nativeElement ? this.nativeElement.enableCustomColors = value : undefined;
    }
    /** @description Defines an Array of colors that will be used as the Theme Colors in the corresponding section of displayMode: 'grid' and 'default'. */
    get gridThemeColors() {
        return this.nativeElement ? this.nativeElement.gridThemeColors : undefined;
    }
    set gridThemeColors(value) {
        this.nativeElement ? this.nativeElement.gridThemeColors = value : undefined;
    }
    /** @description Defines an Array of colors that will be used as the Shade Colors in the corresponding section of displayMode: 'grid' and 'default'. */
    get gridShadeColors() {
        return this.nativeElement ? this.nativeElement.gridShadeColors : undefined;
    }
    set gridShadeColors(value) {
        this.nativeElement ? this.nativeElement.gridShadeColors = value : undefined;
    }
    /** @description Defines an Array of colors that will be used as the Standart Colors in the corresponding section of displayMode: 'grid' and 'default'. */
    get gridStandardColors() {
        return this.nativeElement ? this.nativeElement.gridStandardColors : undefined;
    }
    set gridStandardColors(value) {
        this.nativeElement ? this.nativeElement.gridStandardColors = value : undefined;
    }
    /** @description Hides the alpha editor. Alpha editor is an input containing the value of the current color opacity. The input is available in the following modes: 'radial', 'palette', 'hexagonal'. The input is only visible if there's enough space. This editor is visible by default. */
    get hideAlphaEditor() {
        return this.nativeElement ? this.nativeElement.hideAlphaEditor : undefined;
    }
    set hideAlphaEditor(value) {
        this.nativeElement ? this.nativeElement.hideAlphaEditor = value : undefined;
    }
    /** @description Determines which color editors will be hidden first when there's not enough space for all of them to be visible. By default the editors are only visible in 'palette', 'radial' and 'hexagonal' display modes. This property allows to prioritize the visibility of the editors. */
    get hideContentToFit() {
        return this.nativeElement ? this.nativeElement.hideContentToFit : undefined;
    }
    set hideContentToFit(value) {
        this.nativeElement ? this.nativeElement.hideContentToFit = value : undefined;
    }
    /** @description HEX editor is an input containing the hexadecimal representation of a color. This editor is visible by default. Setting 'hideRGBeditor' to true hides it. */
    get hideHEXEditor() {
        return this.nativeElement ? this.nativeElement.hideHEXEditor : undefined;
    }
    set hideHEXEditor(value) {
        this.nativeElement ? this.nativeElement.hideHEXEditor = value : undefined;
    }
    /** @description Hides the preview container. Preview container is used to show the currently selected value in 'palette', 'radial' and 'hexagonal' display modes. */
    get hidePreviewContainer() {
        return this.nativeElement ? this.nativeElement.hidePreviewContainer : undefined;
    }
    set hidePreviewContainer(value) {
        this.nativeElement ? this.nativeElement.hidePreviewContainer = value : undefined;
    }
    /** @description Hides the RGB editor. This editor is a group of three separate inputs for the Red, Green and Blue values of the color. */
    get hideRGBEditor() {
        return this.nativeElement ? this.nativeElement.hideRGBEditor : undefined;
    }
    set hideRGBEditor(value) {
        this.nativeElement ? this.nativeElement.hideRGBEditor = value : undefined;
    }
    /** @description Sets additional helper text below the element that is only visible when the element is focused. */
    get hint() {
        return this.nativeElement ? this.nativeElement.hint : undefined;
    }
    set hint(value) {
        this.nativeElement ? this.nativeElement.hint = value : undefined;
    }
    /** @description Inverts the colors in 'spectrumGrid', 'hexagonal', 'radial' modes. */
    get inverted() {
        return this.nativeElement ? this.nativeElement.inverted : undefined;
    }
    set inverted(value) {
        this.nativeElement ? this.nativeElement.inverted = value : undefined;
    }
    /** @description Sets a label above the element. */
    get label() {
        return this.nativeElement ? this.nativeElement.label : undefined;
    }
    set label(value) {
        this.nativeElement ? this.nativeElement.label = value : undefined;
    }
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    get locale() {
        return this.nativeElement ? this.nativeElement.locale : undefined;
    }
    set locale(value) {
        this.nativeElement ? this.nativeElement.locale = value : undefined;
    }
    /** @description Callback used to customize the format of the messages that are returned from the Localization Module. */
    get localizeFormatFunction() {
        return this.nativeElement ? this.nativeElement.localizeFormatFunction : undefined;
    }
    set localizeFormatFunction(value) {
        this.nativeElement ? this.nativeElement.localizeFormatFunction = value : undefined;
    }
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
    get messages() {
        return this.nativeElement ? this.nativeElement.messages : undefined;
    }
    set messages(value) {
        this.nativeElement ? this.nativeElement.messages = value : undefined;
    }
    /** @description Sets or gets the name attribute for the element. Name is used when submiting HTML forms. */
    get name() {
        return this.nativeElement ? this.nativeElement.name : undefined;
    }
    set name(value) {
        this.nativeElement ? this.nativeElement.name = value : undefined;
    }
    /** @description Determines whether the popup is opened or closed */
    get opened() {
        return this.nativeElement ? this.nativeElement.opened : undefined;
    }
    set opened(value) {
        this.nativeElement ? this.nativeElement.opened = value : undefined;
    }
    /** @description Determines what colors will be displayed in 'spectrumGrid', 'grid' and 'hexagonal' displayModes. */
    get palette() {
        return this.nativeElement ? this.nativeElement.palette : undefined;
    }
    set palette(value) {
        this.nativeElement ? this.nativeElement.palette = value : undefined;
    }
    /** @description Defines an array of colors that form a custom palette. This palette can be used in displayModes 'grid' and 'spectrum grid' if the palette property is set to custom. The value of the property can be an array of strings or objects that contain valid colors ( HEX, RGBA, etc). */
    get paletteColors() {
        return this.nativeElement ? this.nativeElement.paletteColors : undefined;
    }
    set paletteColors(value) {
        this.nativeElement ? this.nativeElement.paletteColors = value : undefined;
    }
    /** @description Defines an array of colors that represent a predefined list of custom colors. This palette can be used in displayModes 'grid', 'default' and 'spectrum grid'. Custom colors are displayed at the bottom of the color grid below the button for custom color selection. They are only visible if enableCustomColor property is true. */
    get paletteCustomColors() {
        return this.nativeElement ? this.nativeElement.paletteCustomColors : undefined;
    }
    set paletteCustomColors(value) {
        this.nativeElement ? this.nativeElement.paletteCustomColors = value : undefined;
    }
    /** @description The placeholder is shown when the value is not set yet or is set to null. */
    get placeholder() {
        return this.nativeElement ? this.nativeElement.placeholder : undefined;
    }
    set placeholder(value) {
        this.nativeElement ? this.nativeElement.placeholder = value : undefined;
    }
    /** @description Disables user interaction with the element. */
    get readonly() {
        return this.nativeElement ? this.nativeElement.readonly : undefined;
    }
    set readonly(value) {
        this.nativeElement ? this.nativeElement.readonly = value : undefined;
    }
    /** @description Determines whether the resize indicator in the bottom right corner of the drop down is visible or not. This property is used in conjunction with resizeMode. */
    get resizeIndicator() {
        return this.nativeElement ? this.nativeElement.resizeIndicator : undefined;
    }
    set resizeIndicator(value) {
        this.nativeElement ? this.nativeElement.resizeIndicator = value : undefined;
    }
    /** @description Determines whether the dropDown can be resized or not. When resizing is enabled, a resize bar appears on the top/bottom side of the drop down. */
    get resizeMode() {
        return this.nativeElement ? this.nativeElement.resizeMode : undefined;
    }
    set resizeMode(value) {
        this.nativeElement ? this.nativeElement.resizeMode = value : undefined;
    }
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    get rightToLeft() {
        return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
    }
    set rightToLeft(value) {
        this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
    }
    /** @description Determines the theme. Theme defines the look of the element */
    get theme() {
        return this.nativeElement ? this.nativeElement.theme : undefined;
    }
    set theme(value) {
        this.nativeElement ? this.nativeElement.theme = value : undefined;
    }
    /** @description Determines how the tooltip displays the value of the color that is being hovered. */
    get tooltipDisplayMode() {
        return this.nativeElement ? this.nativeElement.tooltipDisplayMode : undefined;
    }
    set tooltipDisplayMode(value) {
        this.nativeElement ? this.nativeElement.tooltipDisplayMode = value : undefined;
    }
    /** @description If is set to true, the element cannot be focused. */
    get unfocusable() {
        return this.nativeElement ? this.nativeElement.unfocusable : undefined;
    }
    set unfocusable(value) {
        this.nativeElement ? this.nativeElement.unfocusable = value : undefined;
    }
    /** @description Represents the value of the selected color as the value of the element. */
    get value() {
        return this.nativeElement ? this.nativeElement.value : undefined;
    }
    set value(value) {
        this.nativeElement ? this.nativeElement.value = value : undefined;
    }
    /** @description Determines the format of the color. Whether it's in HEX, RGB or RGBA. By default it shows the color depending on the displayMode. */
    get valueFormat() {
        return this.nativeElement ? this.nativeElement.valueFormat : undefined;
    }
    set valueFormat(value) {
        this.nativeElement ? this.nativeElement.valueFormat = value : undefined;
    }
    /** @description Determines which elements will be displayed in color picker's action section. */
    get valueDisplayMode() {
        return this.nativeElement ? this.nativeElement.valueDisplayMode : undefined;
    }
    set valueDisplayMode(value) {
        this.nativeElement ? this.nativeElement.valueDisplayMode = value : undefined;
    }
    /** @description Opens the drop down of the color picker.
    */
    open() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.open();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.open();
            });
        }
    }
    /** @description Closes the drop down of the color picker.
    */
    close() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.close();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.close();
            });
        }
    }
    get isRendered() {
        return this.nativeElement ? this.nativeElement.isRendered : false;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        const that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(() => { that.onReady.emit(that.nativeElement); });
        this.listen();
    }
    ngOnDestroy() {
        this.unlisten();
    }
    get ngValue() {
        if (!this.nativeElement) {
            return null;
        }
        const value = this.nativeElement.value;
        return value;
    }
    set ngValue(value) {
        if (this.nativeElement) {
            this.writeValue(value);
        }
    }
    writeValue(value) {
        const that = this;
        const normalizedValue = value == null ? '' : value;
        that.nativeElement.whenRendered(() => {
            that.value = normalizedValue;
            if (that._initialChange === false) {
                that._onChange(that.value);
            }
        });
    }
    registerOnChange(fn) {
        this._onChange = fn;
    }
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    ngOnChanges(changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (const propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    }
    /** @description Add event listeners. */
    listen() {
        const that = this;
        that.eventHandlers['actionButtonClickHandler'] = (event) => { that.onActionButtonClick.emit(event); };
        that.nativeElement.addEventListener('actionButtonClick', that.eventHandlers['actionButtonClickHandler']);
        that.eventHandlers['cancelButtonClickHandler'] = (event) => { that.onCancelButtonClick.emit(event); };
        that.nativeElement.addEventListener('cancelButtonClick', that.eventHandlers['cancelButtonClickHandler']);
        that.eventHandlers['changeHandler'] = (event) => { that.onChange.emit(event); };
        that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
        that.eventHandlers['closeHandler'] = (event) => { that.onClose.emit(event); };
        that.nativeElement.addEventListener('close', that.eventHandlers['closeHandler']);
        that.eventHandlers['closingHandler'] = (event) => { that.onClosing.emit(event); };
        that.nativeElement.addEventListener('closing', that.eventHandlers['closingHandler']);
        that.eventHandlers['customColorSelectionHandler'] = (event) => { that.onCustomColorSelection.emit(event); };
        that.nativeElement.addEventListener('customColorSelection', that.eventHandlers['customColorSelectionHandler']);
        that.eventHandlers['dropDownButtonClickHandler'] = (event) => { that.onDropDownButtonClick.emit(event); };
        that.nativeElement.addEventListener('dropDownButtonClick', that.eventHandlers['dropDownButtonClickHandler']);
        that.eventHandlers['okButtonClickHandler'] = (event) => { that.onOkButtonClick.emit(event); };
        that.nativeElement.addEventListener('okButtonClick', that.eventHandlers['okButtonClickHandler']);
        that.eventHandlers['openHandler'] = (event) => { that.onOpen.emit(event); };
        that.nativeElement.addEventListener('open', that.eventHandlers['openHandler']);
        that.eventHandlers['openingHandler'] = (event) => { that.onOpening.emit(event); };
        that.nativeElement.addEventListener('opening', that.eventHandlers['openingHandler']);
        that.eventHandlers['resizeStartHandler'] = (event) => { that.onResizeStart.emit(event); };
        that.nativeElement.addEventListener('resizeStart', that.eventHandlers['resizeStartHandler']);
        that.eventHandlers['resizeEndHandler'] = (event) => { that.onResizeEnd.emit(event); };
        that.nativeElement.addEventListener('resizeEnd', that.eventHandlers['resizeEndHandler']);
        that.eventHandlers['changeModelHandler'] = (event) => {
            that._initialChange = false;
            that._onChange(that.nativeElement.value);
        };
        that.eventHandlers['blurModelHandler'] = (event) => {
            that._onTouched();
        };
        that.nativeElement.whenRendered(() => {
            if (that.nativeElement.querySelector('input')) {
                that.eventHandlers['keyupModelHandler'] = (event) => {
                    setTimeout(() => { that.eventHandlers['changeModelHandler'](event); }, 50);
                };
                that.nativeElement.querySelector('input').addEventListener('keyup', that.eventHandlers['keyupModelHandler']);
            }
        });
        that.nativeElement.addEventListener('change', that.eventHandlers['changeModelHandler']);
        that.nativeElement.addEventListener('blur', that.eventHandlers['blurModelHandler']);
    }
    /** @description Remove event listeners. */
    unlisten() {
        const that = this;
        if (that.eventHandlers['actionButtonClickHandler']) {
            that.nativeElement.removeEventListener('actionButtonClick', that.eventHandlers['actionButtonClickHandler']);
        }
        if (that.eventHandlers['cancelButtonClickHandler']) {
            that.nativeElement.removeEventListener('cancelButtonClick', that.eventHandlers['cancelButtonClickHandler']);
        }
        if (that.eventHandlers['changeHandler']) {
            that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
        }
        if (that.eventHandlers['closeHandler']) {
            that.nativeElement.removeEventListener('close', that.eventHandlers['closeHandler']);
        }
        if (that.eventHandlers['closingHandler']) {
            that.nativeElement.removeEventListener('closing', that.eventHandlers['closingHandler']);
        }
        if (that.eventHandlers['customColorSelectionHandler']) {
            that.nativeElement.removeEventListener('customColorSelection', that.eventHandlers['customColorSelectionHandler']);
        }
        if (that.eventHandlers['dropDownButtonClickHandler']) {
            that.nativeElement.removeEventListener('dropDownButtonClick', that.eventHandlers['dropDownButtonClickHandler']);
        }
        if (that.eventHandlers['okButtonClickHandler']) {
            that.nativeElement.removeEventListener('okButtonClick', that.eventHandlers['okButtonClickHandler']);
        }
        if (that.eventHandlers['openHandler']) {
            that.nativeElement.removeEventListener('open', that.eventHandlers['openHandler']);
        }
        if (that.eventHandlers['openingHandler']) {
            that.nativeElement.removeEventListener('opening', that.eventHandlers['openingHandler']);
        }
        if (that.eventHandlers['resizeStartHandler']) {
            that.nativeElement.removeEventListener('resizeStart', that.eventHandlers['resizeStartHandler']);
        }
        if (that.eventHandlers['resizeEndHandler']) {
            that.nativeElement.removeEventListener('resizeEnd', that.eventHandlers['resizeEndHandler']);
        }
        if (that.eventHandlers['changeModelHandler']) {
            that.nativeElement.removeEventListener('change', that.eventHandlers['changeModelHandler']);
            if (that.nativeElement.querySelector('input')) {
                that.nativeElement.querySelector('input').removeEventListener('keyup', that.eventHandlers['keyupModelHandler']);
            }
        }
        if (that.eventHandlers['blurModelHandler']) {
            that.nativeElement.removeEventListener('blur', that.eventHandlers['blurModelHandler']);
        }
    }
};
ColorPickerComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], ColorPickerComponent.prototype, "animation", null);
__decorate([
    Input()
], ColorPickerComponent.prototype, "editable", null);
__decorate([
    Input()
], ColorPickerComponent.prototype, "autoCloseDelay", null);
__decorate([
    Input()
], ColorPickerComponent.prototype, "applyValueMode", null);
__decorate([
    Input()
], ColorPickerComponent.prototype, "columnCount", null);
__decorate([
    Input()
], ColorPickerComponent.prototype, "displayMode", null);
__decorate([
    Input()
], ColorPickerComponent.prototype, "disabled", null);
__decorate([
    Input()
], ColorPickerComponent.prototype, "disableUndo", null);
__decorate([
    Input()
], ColorPickerComponent.prototype, "dropDownAppendTo", null);
__decorate([
    Input()
], ColorPickerComponent.prototype, "dropDownOpenMode", null);
__decorate([
    Input()
], ColorPickerComponent.prototype, "dropDownButtonPosition", null);
__decorate([
    Input()
], ColorPickerComponent.prototype, "dropDownPosition", null);
__decorate([
    Input()
], ColorPickerComponent.prototype, "dropDownHeight", null);
__decorate([
    Input()
], ColorPickerComponent.prototype, "dropDownOverlay", null);
__decorate([
    Input()
], ColorPickerComponent.prototype, "dropDownWidth", null);
__decorate([
    Input()
], ColorPickerComponent.prototype, "editAlphaChannel", null);
__decorate([
    Input()
], ColorPickerComponent.prototype, "enableCustomColors", null);
__decorate([
    Input()
], ColorPickerComponent.prototype, "gridThemeColors", null);
__decorate([
    Input()
], ColorPickerComponent.prototype, "gridShadeColors", null);
__decorate([
    Input()
], ColorPickerComponent.prototype, "gridStandardColors", null);
__decorate([
    Input()
], ColorPickerComponent.prototype, "hideAlphaEditor", null);
__decorate([
    Input()
], ColorPickerComponent.prototype, "hideContentToFit", null);
__decorate([
    Input()
], ColorPickerComponent.prototype, "hideHEXEditor", null);
__decorate([
    Input()
], ColorPickerComponent.prototype, "hidePreviewContainer", null);
__decorate([
    Input()
], ColorPickerComponent.prototype, "hideRGBEditor", null);
__decorate([
    Input()
], ColorPickerComponent.prototype, "hint", null);
__decorate([
    Input()
], ColorPickerComponent.prototype, "inverted", null);
__decorate([
    Input()
], ColorPickerComponent.prototype, "label", null);
__decorate([
    Input()
], ColorPickerComponent.prototype, "locale", null);
__decorate([
    Input()
], ColorPickerComponent.prototype, "localizeFormatFunction", null);
__decorate([
    Input()
], ColorPickerComponent.prototype, "messages", null);
__decorate([
    Input()
], ColorPickerComponent.prototype, "name", null);
__decorate([
    Input()
], ColorPickerComponent.prototype, "opened", null);
__decorate([
    Input()
], ColorPickerComponent.prototype, "palette", null);
__decorate([
    Input()
], ColorPickerComponent.prototype, "paletteColors", null);
__decorate([
    Input()
], ColorPickerComponent.prototype, "paletteCustomColors", null);
__decorate([
    Input()
], ColorPickerComponent.prototype, "placeholder", null);
__decorate([
    Input()
], ColorPickerComponent.prototype, "readonly", null);
__decorate([
    Input()
], ColorPickerComponent.prototype, "resizeIndicator", null);
__decorate([
    Input()
], ColorPickerComponent.prototype, "resizeMode", null);
__decorate([
    Input()
], ColorPickerComponent.prototype, "rightToLeft", null);
__decorate([
    Input()
], ColorPickerComponent.prototype, "theme", null);
__decorate([
    Input()
], ColorPickerComponent.prototype, "tooltipDisplayMode", null);
__decorate([
    Input()
], ColorPickerComponent.prototype, "unfocusable", null);
__decorate([
    Input()
], ColorPickerComponent.prototype, "value", null);
__decorate([
    Input()
], ColorPickerComponent.prototype, "valueFormat", null);
__decorate([
    Input()
], ColorPickerComponent.prototype, "valueDisplayMode", null);
__decorate([
    Output()
], ColorPickerComponent.prototype, "onActionButtonClick", void 0);
__decorate([
    Output()
], ColorPickerComponent.prototype, "onCancelButtonClick", void 0);
__decorate([
    Output()
], ColorPickerComponent.prototype, "onChange", void 0);
__decorate([
    Output()
], ColorPickerComponent.prototype, "onClose", void 0);
__decorate([
    Output()
], ColorPickerComponent.prototype, "onClosing", void 0);
__decorate([
    Output()
], ColorPickerComponent.prototype, "onCustomColorSelection", void 0);
__decorate([
    Output()
], ColorPickerComponent.prototype, "onDropDownButtonClick", void 0);
__decorate([
    Output()
], ColorPickerComponent.prototype, "onOkButtonClick", void 0);
__decorate([
    Output()
], ColorPickerComponent.prototype, "onOpen", void 0);
__decorate([
    Output()
], ColorPickerComponent.prototype, "onOpening", void 0);
__decorate([
    Output()
], ColorPickerComponent.prototype, "onResizeStart", void 0);
__decorate([
    Output()
], ColorPickerComponent.prototype, "onResizeEnd", void 0);
ColorPickerComponent = __decorate([
    Directive({
        exportAs: 'smart-color-picker', selector: 'smart-color-picker, [smart-color-picker]',
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
    })
], ColorPickerComponent);

let ColorPickerModule = class ColorPickerModule {
};
ColorPickerModule = __decorate([
    NgModule({
        declarations: [ColorPickerComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        exports: [ColorPickerComponent]
    })
], ColorPickerModule);

/**
 * Generated bundle index. Do not edit.
 */

export { ColorPickerComponent, ColorPickerModule, Smart, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-colorpicker.js.map
