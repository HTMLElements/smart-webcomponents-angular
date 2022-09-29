
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.input';

import { __decorate, __awaiter } from 'tslib';
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
    useExisting: forwardRef(() => InputComponent),
    multi: true
};
let InputComponent = class InputComponent extends BaseElement {
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
        /** @description This event is triggered when the selection is changed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	oldLabel, 	oldValue, 	value)
        *   label - The label of the new selected item.
        *   oldLabel - The label of the item that was previously selected before the event was triggered.
        *   oldValue - The value of the item that was previously selected before the event was triggered.
        *   value - The value of the new selected item.
        */
        this.onChange = new EventEmitter();
        /** @description This event is triggered on each key up event of the Input, if the value is changed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
        *   oldValue - The previous value before it was changed.
        *   value - The new value.
        */
        this.onChanging = new EventEmitter();
        /** @description This event is triggered when the popup is opened.
        *  @param event. The custom event. 	*/
        this.onOpen = new EventEmitter();
        /** @description This event is triggered when the popup is closed.
        *  @param event. The custom event. 	*/
        this.onClose = new EventEmitter();
        /** @description This event is triggered when the user clicks on an item from the popup list.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	value)
        *   item - The item that was clicked.
        *   label - The label of the item that was clicked.
        *   value - The value of the item that was clicked.
        */
        this.onItemClick = new EventEmitter();
        this._initialChange = true;
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('smart-input');
        for (let propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    }
    /** @description Determines the delay before the drop down opens to show the matches from the auto complete operation. The delay is measured in miliseconds. */
    get autoCompleteDelay() {
        return this.nativeElement ? this.nativeElement.autoCompleteDelay : undefined;
    }
    set autoCompleteDelay(value) {
        this.nativeElement ? this.nativeElement.autoCompleteDelay = value : undefined;
    }
    /** @description Determines the data source that will be loaded to the Input. The dataSource can be an array of strings/numbers or objects where the attributes represent the properties of a List Item. For example label, value. It can also be a callback that returns an Array of items as previously described. The data source item object may have the following fields: 'label' - string, 'value' - string or number, 'selected' - boolean, 'prefix' - string, 'suffix' - string, 'title' - string. The 'prefix' and 'suffix' add html before and after the label. */
    get dataSource() {
        return this.nativeElement ? this.nativeElement.dataSource : undefined;
    }
    set dataSource(value) {
        this.nativeElement ? this.nativeElement.dataSource = value : undefined;
    }
    /** @description Enables or disables the element. */
    get disabled() {
        return this.nativeElement ? this.nativeElement.disabled : undefined;
    }
    set disabled(value) {
        this.nativeElement ? this.nativeElement.disabled = value : undefined;
    }
    /** @description Sets additional class names to the Input drop down. */
    get dropDownClassList() {
        return this.nativeElement ? this.nativeElement.dropDownClassList : undefined;
    }
    set dropDownClassList(value) {
        this.nativeElement ? this.nativeElement.dropDownClassList = value : undefined;
    }
    /** @description Determines the position of the drop down button. */
    get dropDownButtonPosition() {
        return this.nativeElement ? this.nativeElement.dropDownButtonPosition : undefined;
    }
    set dropDownButtonPosition(value) {
        this.nativeElement ? this.nativeElement.dropDownButtonPosition = value : undefined;
    }
    /** @description Sets the height of the drop down. By default it's set to an empty string. In this case the height of the drop down is controlled by a CSS variable. */
    get dropDownHeight() {
        return this.nativeElement ? this.nativeElement.dropDownHeight : undefined;
    }
    set dropDownHeight(value) {
        this.nativeElement ? this.nativeElement.dropDownHeight = value : undefined;
    }
    /** @description Sets the width of the drop down. By default it's set to an empty string. In this case the width of the drop down is controlled by a CSS variable. */
    get dropDownWidth() {
        return this.nativeElement ? this.nativeElement.dropDownWidth : undefined;
    }
    set dropDownWidth(value) {
        this.nativeElement ? this.nativeElement.dropDownWidth = value : undefined;
    }
    /** @description Sets the purpose of the input and what, if any, permission the user agent has to provide automated assistance in filling out the element's input when in a form, as well as guidance to the browser as to the type of information expected in the element. This value corresponds to the standard HTML autocomplete attribute and can be set to values such as 'on', 'name', 'organization', 'street-address', etc. */
    get inputPurpose() {
        return this.nativeElement ? this.nativeElement.inputPurpose : undefined;
    }
    set inputPurpose(value) {
        this.nativeElement ? this.nativeElement.inputPurpose = value : undefined;
    }
    /** @description Determines the maximum number of matched items that should be visible inside the drop down as a result of a new autoComplete query. By default the maximum number of 8 items can be displayed inside the drop down. */
    get items() {
        return this.nativeElement ? this.nativeElement.items : undefined;
    }
    set items(value) {
        this.nativeElement ? this.nativeElement.items = value : undefined;
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
    /** @description Determines the minimum number of characters inside the input in order to trigger the autocomplete functionality that will open the drop down and show the matched items. */
    get minLength() {
        return this.nativeElement ? this.nativeElement.minLength : undefined;
    }
    set minLength(value) {
        this.nativeElement ? this.nativeElement.minLength = value : undefined;
    }
    /** @description Sets or gets the name attribute for the element. Name is used when submiting data inside an HTML form. */
    get name() {
        return this.nativeElement ? this.nativeElement.name : undefined;
    }
    set name(value) {
        this.nativeElement ? this.nativeElement.name = value : undefined;
    }
    /** @description Determines whether the drop down is opened or not. */
    get opened() {
        return this.nativeElement ? this.nativeElement.opened : undefined;
    }
    set opened(value) {
        this.nativeElement ? this.nativeElement.opened = value : undefined;
    }
    /** @description Determines the placeholder of the input. */
    get placeholder() {
        return this.nativeElement ? this.nativeElement.placeholder : undefined;
    }
    set placeholder(value) {
        this.nativeElement ? this.nativeElement.placeholder = value : undefined;
    }
    /** @description Sets or gets the query that is used to filter the items. Query is used by the autoComplete operation. Empty string means that all items from the data source will be displayed and no filter query is applied. */
    get query() {
        return this.nativeElement ? this.nativeElement.query : undefined;
    }
    set query(value) {
        this.nativeElement ? this.nativeElement.query = value : undefined;
    }
    /** @description Determines the auto complete query mode. This property also determines the matching algorithm for the autocomplete operation. */
    get queryMode() {
        return this.nativeElement ? this.nativeElement.queryMode : undefined;
    }
    set queryMode(value) {
        this.nativeElement ? this.nativeElement.queryMode = value : undefined;
    }
    /** @description Determines whether ot not the user can enter text inside the input. if dropDownButtonPosition is set to 'left' or 'right' then readonly determines whether the element acts as a ComboBox or a DropDownList if a dataSource is provided. */
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
    /** @description Determines whether the items are sorted alphabetically or not */
    get sorted() {
        return this.nativeElement ? this.nativeElement.sorted : undefined;
    }
    set sorted(value) {
        this.nativeElement ? this.nativeElement.sorted = value : undefined;
    }
    /** @description Determines the sorting algorithm - ascending(asc) or descending(desc) if sort is enabled. */
    get sortDirection() {
        return this.nativeElement ? this.nativeElement.sortDirection : undefined;
    }
    set sortDirection(value) {
        this.nativeElement ? this.nativeElement.sortDirection = value : undefined;
    }
    /** @description Determines the selected index. */
    get selectedIndex() {
        return this.nativeElement ? this.nativeElement.selectedIndex : undefined;
    }
    set selectedIndex(value) {
        this.nativeElement ? this.nativeElement.selectedIndex = value : undefined;
    }
    /** @description Determines the selected value. */
    get selectedValue() {
        return this.nativeElement ? this.nativeElement.selectedValue : undefined;
    }
    set selectedValue(value) {
        this.nativeElement ? this.nativeElement.selectedValue = value : undefined;
    }
    /** @description Determines the theme for the element. Themes define the look of the elements. */
    get theme() {
        return this.nativeElement ? this.nativeElement.theme : undefined;
    }
    set theme(value) {
        this.nativeElement ? this.nativeElement.theme = value : undefined;
    }
    /** @description Determines the input type. Input type determines what input can be entered. */
    get type() {
        return this.nativeElement ? this.nativeElement.type : undefined;
    }
    set type(value) {
        this.nativeElement ? this.nativeElement.type = value : undefined;
    }
    /** @description If is set to true, the element cannot be focused. */
    get unfocusable() {
        return this.nativeElement ? this.nativeElement.unfocusable : undefined;
    }
    set unfocusable(value) {
        this.nativeElement ? this.nativeElement.unfocusable = value : undefined;
    }
    /** @description Sets or gets the value of the element. */
    get value() {
        return this.nativeElement ? this.nativeElement.value : undefined;
    }
    set value(value) {
        this.nativeElement ? this.nativeElement.value = value : undefined;
    }
    /** @description Closes the drop down.
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
    /** @description Ensures that the active ( selected ) item is always visible.
    */
    ensureVisible() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.ensureVisible();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.ensureVisible();
            });
        }
    }
    /** @description Opens the drop down.
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
    /** @description Focuses and selects the text inside the input or if it is readonly then the element is focused.
    */
    select() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.select();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.select();
            });
        }
    }
    /** @description Selects an item by value. For example, if your data source is ['Item 1', 'Item 2', 'Item 3'], you can use 'Item 1' as an argument. If your data source is an object with label and value, pass the value when you call selectItem.
    * @param {string | number} value. The item's value when the item is an object or string when the item is a string item.
    */
    selectItem(value) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.selectItem(value);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.selectItem(value);
            });
        }
    }
    /** @description Gets an item by value. For example, if your data source is ['Item 1', 'Item 2', 'Item 3'], you can use 'Item 1' as an argument. If your data source is an object with label and value, pass the value when you call selectItem.
    * @param {string | number} value. The item's value when the item is an object or string when the item is a string item.
    * @returns {any}
  */
    getItem(value) {
        return __awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getItem(value);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Gets the selected item. For example, if your data source is ['Item 1', 'Item 2', 'Item 3'] and the user selected the second item, the method returns 'Item 2'. If your data source is an object with label and value, the returned value would be the 'value'.
    * @param {string | number} value. The item's value when the item is an object or string when the item is a string item.
    * @returns {any}
  */
    getSelectedItem(value) {
        return __awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getSelectedItem(value);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
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
        that.eventHandlers['changingHandler'] = (event) => { that.onChanging.emit(event); };
        that.nativeElement.addEventListener('changing', that.eventHandlers['changingHandler']);
        that.eventHandlers['openHandler'] = (event) => { that.onOpen.emit(event); };
        that.nativeElement.addEventListener('open', that.eventHandlers['openHandler']);
        that.eventHandlers['closeHandler'] = (event) => { that.onClose.emit(event); };
        that.nativeElement.addEventListener('close', that.eventHandlers['closeHandler']);
        that.eventHandlers['itemClickHandler'] = (event) => { that.onItemClick.emit(event); };
        that.nativeElement.addEventListener('itemClick', that.eventHandlers['itemClickHandler']);
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
        if (that.eventHandlers['changingHandler']) {
            that.nativeElement.removeEventListener('changing', that.eventHandlers['changingHandler']);
        }
        if (that.eventHandlers['openHandler']) {
            that.nativeElement.removeEventListener('open', that.eventHandlers['openHandler']);
        }
        if (that.eventHandlers['closeHandler']) {
            that.nativeElement.removeEventListener('close', that.eventHandlers['closeHandler']);
        }
        if (that.eventHandlers['itemClickHandler']) {
            that.nativeElement.removeEventListener('itemClick', that.eventHandlers['itemClickHandler']);
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
InputComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], InputComponent.prototype, "autoCompleteDelay", null);
__decorate([
    Input()
], InputComponent.prototype, "dataSource", null);
__decorate([
    Input()
], InputComponent.prototype, "disabled", null);
__decorate([
    Input()
], InputComponent.prototype, "dropDownClassList", null);
__decorate([
    Input()
], InputComponent.prototype, "dropDownButtonPosition", null);
__decorate([
    Input()
], InputComponent.prototype, "dropDownHeight", null);
__decorate([
    Input()
], InputComponent.prototype, "dropDownWidth", null);
__decorate([
    Input()
], InputComponent.prototype, "inputPurpose", null);
__decorate([
    Input()
], InputComponent.prototype, "items", null);
__decorate([
    Input()
], InputComponent.prototype, "locale", null);
__decorate([
    Input()
], InputComponent.prototype, "localizeFormatFunction", null);
__decorate([
    Input()
], InputComponent.prototype, "messages", null);
__decorate([
    Input()
], InputComponent.prototype, "minLength", null);
__decorate([
    Input()
], InputComponent.prototype, "name", null);
__decorate([
    Input()
], InputComponent.prototype, "opened", null);
__decorate([
    Input()
], InputComponent.prototype, "placeholder", null);
__decorate([
    Input()
], InputComponent.prototype, "query", null);
__decorate([
    Input()
], InputComponent.prototype, "queryMode", null);
__decorate([
    Input()
], InputComponent.prototype, "readonly", null);
__decorate([
    Input()
], InputComponent.prototype, "rightToLeft", null);
__decorate([
    Input()
], InputComponent.prototype, "sorted", null);
__decorate([
    Input()
], InputComponent.prototype, "sortDirection", null);
__decorate([
    Input()
], InputComponent.prototype, "selectedIndex", null);
__decorate([
    Input()
], InputComponent.prototype, "selectedValue", null);
__decorate([
    Input()
], InputComponent.prototype, "theme", null);
__decorate([
    Input()
], InputComponent.prototype, "type", null);
__decorate([
    Input()
], InputComponent.prototype, "unfocusable", null);
__decorate([
    Input()
], InputComponent.prototype, "value", null);
__decorate([
    Output()
], InputComponent.prototype, "onChange", void 0);
__decorate([
    Output()
], InputComponent.prototype, "onChanging", void 0);
__decorate([
    Output()
], InputComponent.prototype, "onOpen", void 0);
__decorate([
    Output()
], InputComponent.prototype, "onClose", void 0);
__decorate([
    Output()
], InputComponent.prototype, "onItemClick", void 0);
InputComponent = __decorate([
    Directive({
        exportAs: 'smart-input', selector: 'smart-input, [smart-input]',
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
    })
], InputComponent);

let InputModule = class InputModule {
};
InputModule = __decorate([
    NgModule({
        declarations: [InputComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        exports: [InputComponent]
    })
], InputModule);

/**
 * Generated bundle index. Do not edit.
 */

export { InputComponent, InputModule, Smart, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-input.js.map
