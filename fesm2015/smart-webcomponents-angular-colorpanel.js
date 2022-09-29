
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.colorpanel';

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
    useExisting: forwardRef(() => ColorPanelComponent),
    multi: true
};
let ColorPanelComponent = class ColorPanelComponent extends BaseElement {
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
        /** @description This event is triggered when the color is changed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
        *   oldValue - The previously selected color.
        *   value - The new selected color.
        */
        this.onChange = new EventEmitter();
        /** @description This event is triggered when the cancel button is clicked. 'Cancel' button is visible only when applyValueMode is set to useButtons.
        *  @param event. The custom event. 	*/
        this.onCancelButtonClick = new EventEmitter();
        /** @description This event is triggered when the custom color selection view is opened/closed. Custom color selection view is available when enableCustomColors property is true.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	value)
        *   value - A boolean that indicates whether the custom color view is shown or not.
        */
        this.onCustomColorSelection = new EventEmitter();
        /** @description This event is triggered when the ok button is clicked. 'Ok' button is visible only when applyValueMode is set to useButtons.
        *  @param event. The custom event. 	*/
        this.onOkButtonClick = new EventEmitter();
        this._initialChange = true;
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('smart-color-panel');
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
    /** @description Specifies how the value is applied. */
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
    /** @description Enables or disables the element. Disabled elements can not be interacted with. */
    get disabled() {
        return this.nativeElement ? this.nativeElement.disabled : undefined;
    }
    set disabled(value) {
        this.nativeElement ? this.nativeElement.disabled = value : undefined;
    }
    /** @description Determines the colors that will be displayed and their layout. */
    get displayMode() {
        return this.nativeElement ? this.nativeElement.displayMode : undefined;
    }
    set displayMode(value) {
        this.nativeElement ? this.nativeElement.displayMode = value : undefined;
    }
    /** @description By default clicking on color panel's preview container returns the color value to it's previous state. 'disableUndo' prevents this functionality. */
    get disableUndo() {
        return this.nativeElement ? this.nativeElement.disableUndo : undefined;
    }
    set disableUndo(value) {
        this.nativeElement ? this.nativeElement.disableUndo = value : undefined;
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
    /** @description Defines an Array of colors that will be used as the Theme Colors in the corresponding section in displayMode: 'default'. */
    get gridThemeColors() {
        return this.nativeElement ? this.nativeElement.gridThemeColors : undefined;
    }
    set gridThemeColors(value) {
        this.nativeElement ? this.nativeElement.gridThemeColors = value : undefined;
    }
    /** @description Defines an Array of colors that will be used as the Shade Colors in the corresponding section of displayMode: 'default'. */
    get gridShadeColors() {
        return this.nativeElement ? this.nativeElement.gridShadeColors : undefined;
    }
    set gridShadeColors(value) {
        this.nativeElement ? this.nativeElement.gridShadeColors = value : undefined;
    }
    /** @description Defines an Array of colors that will be used as the Standart Colors in the corresponding section of displayMode: 'default'. */
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
    /** @description Inverts the colors in 'spectrumGrid', 'hexagonal', 'radial' modes. */
    get inverted() {
        return this.nativeElement ? this.nativeElement.inverted : undefined;
    }
    set inverted(value) {
        this.nativeElement ? this.nativeElement.inverted = value : undefined;
    }
    /** @description Sets or gets the language. Used in conjunction with the property messages. */
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
    /** @description Defines an array of colors that represent a predefined list of custom colors. This palette can be used in displayModes 'grid', 'default' and 'spectrum grid'. Custom colors are displayed at the bottom of the color grid below the button for custom color selection. They are only visible if enableCustomColors property is true. */
    get paletteCustomColors() {
        return this.nativeElement ? this.nativeElement.paletteCustomColors : undefined;
    }
    set paletteCustomColors(value) {
        this.nativeElement ? this.nativeElement.paletteCustomColors = value : undefined;
    }
    /** @description If the element is readonly, users cannot interact with it. */
    get readonly() {
        return this.nativeElement ? this.nativeElement.readonly : undefined;
    }
    set readonly(value) {
        this.nativeElement ? this.nativeElement.readonly = value : undefined;
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
    /** @description Represents the value of the selected color. */
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
    /** @description Determines the value member for the color when the paletteColors consists of objects. Usefull in cases where the colors are loaded as objects in an array and the attribute that holds the color key is not named 'value'. */
    get valueMember() {
        return this.nativeElement ? this.nativeElement.valueMember : undefined;
    }
    set valueMember(value) {
        this.nativeElement ? this.nativeElement.valueMember = value : undefined;
    }
    /** @description If is set to true, the element cannot be focused. */
    get unfocusable() {
        return this.nativeElement ? this.nativeElement.unfocusable : undefined;
    }
    set unfocusable(value) {
        this.nativeElement ? this.nativeElement.unfocusable = value : undefined;
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
        that.eventHandlers['changeHandler'] = (event) => { that.onChange.emit(event); };
        that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
        that.eventHandlers['cancelButtonClickHandler'] = (event) => { that.onCancelButtonClick.emit(event); };
        that.nativeElement.addEventListener('cancelButtonClick', that.eventHandlers['cancelButtonClickHandler']);
        that.eventHandlers['customColorSelectionHandler'] = (event) => { that.onCustomColorSelection.emit(event); };
        that.nativeElement.addEventListener('customColorSelection', that.eventHandlers['customColorSelectionHandler']);
        that.eventHandlers['okButtonClickHandler'] = (event) => { that.onOkButtonClick.emit(event); };
        that.nativeElement.addEventListener('okButtonClick', that.eventHandlers['okButtonClickHandler']);
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
        if (that.eventHandlers['changeHandler']) {
            that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
        }
        if (that.eventHandlers['cancelButtonClickHandler']) {
            that.nativeElement.removeEventListener('cancelButtonClick', that.eventHandlers['cancelButtonClickHandler']);
        }
        if (that.eventHandlers['customColorSelectionHandler']) {
            that.nativeElement.removeEventListener('customColorSelection', that.eventHandlers['customColorSelectionHandler']);
        }
        if (that.eventHandlers['okButtonClickHandler']) {
            that.nativeElement.removeEventListener('okButtonClick', that.eventHandlers['okButtonClickHandler']);
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
ColorPanelComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], ColorPanelComponent.prototype, "animation", null);
__decorate([
    Input()
], ColorPanelComponent.prototype, "applyValueMode", null);
__decorate([
    Input()
], ColorPanelComponent.prototype, "columnCount", null);
__decorate([
    Input()
], ColorPanelComponent.prototype, "disabled", null);
__decorate([
    Input()
], ColorPanelComponent.prototype, "displayMode", null);
__decorate([
    Input()
], ColorPanelComponent.prototype, "disableUndo", null);
__decorate([
    Input()
], ColorPanelComponent.prototype, "editAlphaChannel", null);
__decorate([
    Input()
], ColorPanelComponent.prototype, "enableCustomColors", null);
__decorate([
    Input()
], ColorPanelComponent.prototype, "gridThemeColors", null);
__decorate([
    Input()
], ColorPanelComponent.prototype, "gridShadeColors", null);
__decorate([
    Input()
], ColorPanelComponent.prototype, "gridStandardColors", null);
__decorate([
    Input()
], ColorPanelComponent.prototype, "hideAlphaEditor", null);
__decorate([
    Input()
], ColorPanelComponent.prototype, "hideContentToFit", null);
__decorate([
    Input()
], ColorPanelComponent.prototype, "hideHEXEditor", null);
__decorate([
    Input()
], ColorPanelComponent.prototype, "hidePreviewContainer", null);
__decorate([
    Input()
], ColorPanelComponent.prototype, "hideRGBEditor", null);
__decorate([
    Input()
], ColorPanelComponent.prototype, "inverted", null);
__decorate([
    Input()
], ColorPanelComponent.prototype, "locale", null);
__decorate([
    Input()
], ColorPanelComponent.prototype, "localizeFormatFunction", null);
__decorate([
    Input()
], ColorPanelComponent.prototype, "messages", null);
__decorate([
    Input()
], ColorPanelComponent.prototype, "name", null);
__decorate([
    Input()
], ColorPanelComponent.prototype, "palette", null);
__decorate([
    Input()
], ColorPanelComponent.prototype, "paletteColors", null);
__decorate([
    Input()
], ColorPanelComponent.prototype, "paletteCustomColors", null);
__decorate([
    Input()
], ColorPanelComponent.prototype, "readonly", null);
__decorate([
    Input()
], ColorPanelComponent.prototype, "rightToLeft", null);
__decorate([
    Input()
], ColorPanelComponent.prototype, "theme", null);
__decorate([
    Input()
], ColorPanelComponent.prototype, "tooltipDisplayMode", null);
__decorate([
    Input()
], ColorPanelComponent.prototype, "value", null);
__decorate([
    Input()
], ColorPanelComponent.prototype, "valueFormat", null);
__decorate([
    Input()
], ColorPanelComponent.prototype, "valueMember", null);
__decorate([
    Input()
], ColorPanelComponent.prototype, "unfocusable", null);
__decorate([
    Output()
], ColorPanelComponent.prototype, "onChange", void 0);
__decorate([
    Output()
], ColorPanelComponent.prototype, "onCancelButtonClick", void 0);
__decorate([
    Output()
], ColorPanelComponent.prototype, "onCustomColorSelection", void 0);
__decorate([
    Output()
], ColorPanelComponent.prototype, "onOkButtonClick", void 0);
ColorPanelComponent = __decorate([
    Directive({
        exportAs: 'smart-color-panel', selector: 'smart-color-panel, [smart-color-panel]',
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
    })
], ColorPanelComponent);

let ColorPanelModule = class ColorPanelModule {
};
ColorPanelModule = __decorate([
    NgModule({
        declarations: [ColorPanelComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        exports: [ColorPanelComponent]
    })
], ColorPanelModule);

/**
 * Generated bundle index. Do not edit.
 */

export { ColorPanelComponent, ColorPanelModule, Smart, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-colorpanel.js.map
