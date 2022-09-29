
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.filterbuilder';

import { __decorate, __awaiter } from 'tslib';
import { EventEmitter, Output, Input, ElementRef, Directive, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

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

let FilterBuilderComponent = class FilterBuilderComponent extends BaseElement {
    constructor(ref) {
        super(ref);
        this.eventHandlers = [];
        /** @description This event is triggered when the element's value is changed.
        *  @param event. The custom event. 	*/
        this.onChange = new EventEmitter();
        /** @description This event is triggered when an editor is closed.
        *  @param event. The custom event. 	*/
        this.onEditorClose = new EventEmitter();
        /** @description This event is triggered when an editor starts to close.
        *  @param event. The custom event. 	*/
        this.onEditorClosing = new EventEmitter();
        /** @description This event is triggered when an editor is opened.
        *  @param event. The custom event. 	*/
        this.onEditorOpen = new EventEmitter();
        /** @description This event is triggered when an editor starts to open.
        *  @param event. The custom event. 	*/
        this.onEditorOpening = new EventEmitter();
        /** @description This event is triggered when some of the filterbuilder's building blocks is clicked.
        *  @param event. The custom event. 	*/
        this.onItemClick = new EventEmitter();
        /** @description This event is triggered when the built-in menu is opened. If the disableContextMenu property is set to true this event is not fired.
        *  @param event. The custom event. 	*/
        this.onOpen = new EventEmitter();
        /** @description This event is triggered when the built-in menu starts to open. If the disableContextMenu property is set to true this event is not fired.
        *  @param event. The custom event. 	*/
        this.onOpening = new EventEmitter();
        /** @description This event is triggered when the built-in menu is closed. If the disableContextMenu property is set to true this event is not fired.
        *  @param event. The custom event. 	*/
        this.onClose = new EventEmitter();
        /** @description This event is triggered when the built-in menu  starts to close. If the disableContextMenu property is set to true this event is not fired.
        *  @param event. The custom event. 	*/
        this.onClosing = new EventEmitter();
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('smart-filter-builder');
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
    /** @description Adds more operations, that can be used in the filter bilder's conditions structure. */
    get customOperations() {
        return this.nativeElement ? this.nativeElement.customOperations : undefined;
    }
    set customOperations(value) {
        this.nativeElement ? this.nativeElement.customOperations = value : undefined;
    }
    /** @description Enables or disables the context menu. */
    get disableContextMenu() {
        return this.nativeElement ? this.nativeElement.disableContextMenu : undefined;
    }
    set disableContextMenu(value) {
        this.nativeElement ? this.nativeElement.disableContextMenu = value : undefined;
    }
    /** @description Enables or disables the element. */
    get disabled() {
        return this.nativeElement ? this.nativeElement.disabled : undefined;
    }
    set disabled(value) {
        this.nativeElement ? this.nativeElement.disabled = value : undefined;
    }
    /** @description Array with filtered fields and their settings. */
    get fields() {
        return this.nativeElement ? this.nativeElement.fields : undefined;
    }
    set fields(value) {
        this.nativeElement ? this.nativeElement.fields = value : undefined;
    }
    /** @description Sets or gets the format string of the editor of fields with type 'date'. */
    get formatStringDate() {
        return this.nativeElement ? this.nativeElement.formatStringDate : undefined;
    }
    set formatStringDate(value) {
        this.nativeElement ? this.nativeElement.formatStringDate = value : undefined;
    }
    /** @description Sets or gets the format string of the editor of fields with type 'datetime'. */
    get formatStringDateTime() {
        return this.nativeElement ? this.nativeElement.formatStringDateTime : undefined;
    }
    set formatStringDateTime(value) {
        this.nativeElement ? this.nativeElement.formatStringDateTime = value : undefined;
    }
    /** @description Sets hint in form of popup message. */
    get hint() {
        return this.nativeElement ? this.nativeElement.hint : undefined;
    }
    set hint(value) {
        this.nativeElement ? this.nativeElement.hint = value : undefined;
    }
    /** @description Defines icon's representatino as characters. */
    get icons() {
        return this.nativeElement ? this.nativeElement.icons : undefined;
    }
    set icons(value) {
        this.nativeElement ? this.nativeElement.icons = value : undefined;
    }
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    get locale() {
        return this.nativeElement ? this.nativeElement.locale : undefined;
    }
    set locale(value) {
        this.nativeElement ? this.nativeElement.locale = value : undefined;
    }
    /** @description Callback, related to localization module.  */
    get localizeFormatFunction() {
        return this.nativeElement ? this.nativeElement.localizeFormatFunction : undefined;
    }
    set localizeFormatFunction(value) {
        this.nativeElement ? this.nativeElement.localizeFormatFunction = value : undefined;
    }
    /** @description Defines maximum number of allowed conditions in the element. */
    get maxConditions() {
        return this.nativeElement ? this.nativeElement.maxConditions : undefined;
    }
    set maxConditions(value) {
        this.nativeElement ? this.nativeElement.maxConditions = value : undefined;
    }
    /** @description Defines maximum number of allowed conditions in group. */
    get maxConditionsPerGroup() {
        return this.nativeElement ? this.nativeElement.maxConditionsPerGroup : undefined;
    }
    set maxConditionsPerGroup(value) {
        this.nativeElement ? this.nativeElement.maxConditionsPerGroup = value : undefined;
    }
    /** @description Defines maximum level of grouping in the FilterBuilder. */
    get maxLevel() {
        return this.nativeElement ? this.nativeElement.maxLevel : undefined;
    }
    set maxLevel(value) {
        this.nativeElement ? this.nativeElement.maxLevel = value : undefined;
    }
    /** @description Defines field names of the filtered element. */
    get messages() {
        return this.nativeElement ? this.nativeElement.messages : undefined;
    }
    set messages(value) {
        this.nativeElement ? this.nativeElement.messages = value : undefined;
    }
    /** @description If the element is readonly, users cannot interact with it. */
    get readonly() {
        return this.nativeElement ? this.nativeElement.readonly : undefined;
    }
    set readonly(value) {
        this.nativeElement ? this.nativeElement.readonly = value : undefined;
    }
    /** @description In restrictedMode set to true, adding of new groups and groups editing by user interaction are denied. */
    get restrictedMode() {
        return this.nativeElement ? this.nativeElement.restrictedMode : undefined;
    }
    set restrictedMode(value) {
        this.nativeElement ? this.nativeElement.restrictedMode = value : undefined;
    }
    /** @description Enables or disables the display of the icons. */
    get showIcons() {
        return this.nativeElement ? this.nativeElement.showIcons : undefined;
    }
    set showIcons(value) {
        this.nativeElement ? this.nativeElement.showIcons = value : undefined;
    }
    /** @description Determines the theme. Theme defines the look of the element */
    get theme() {
        return this.nativeElement ? this.nativeElement.theme : undefined;
    }
    set theme(value) {
        this.nativeElement ? this.nativeElement.theme = value : undefined;
    }
    /** @description If is set to true, the element cannot be focused. */
    get unfocusable() {
        return this.nativeElement ? this.nativeElement.unfocusable : undefined;
    }
    set unfocusable(value) {
        this.nativeElement ? this.nativeElement.unfocusable = value : undefined;
    }
    /** @description The value is represented by multidimensional array. The array contains group operators and conditions. Each group can contain nested structures at multiple levels. */
    get value() {
        return this.nativeElement ? this.nativeElement.value : undefined;
    }
    set value(value) {
        this.nativeElement ? this.nativeElement.value = value : undefined;
    }
    /** @description Callback used to format the content of the value fields. */
    get valueFormatFunction() {
        return this.nativeElement ? this.nativeElement.valueFormatFunction : undefined;
    }
    set valueFormatFunction(value) {
        this.nativeElement ? this.nativeElement.valueFormatFunction = value : undefined;
    }
    /** @description Sets the placeholder text used in the condition's value box in case the value is not set. */
    get valuePlaceholder() {
        return this.nativeElement ? this.nativeElement.valuePlaceholder : undefined;
    }
    set valuePlaceholder(value) {
        this.nativeElement ? this.nativeElement.valuePlaceholder = value : undefined;
    }
    /** @description Adds new condition in particular group.
    * @param {string | HTMLElement} parentGroup. A string, representing the id of the item or an HTML Element referencing this condition.
    * @param {any[]} data. An array, representing condition. Condition's element's role is related to their position in the condition's array. At index 0 - field name, index 1 - condition's opertor, index 2 - condition's value.
    */
    addCondition(parentGroup, data) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addCondition(parentGroup, data);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addCondition(parentGroup, data);
            });
        }
    }
    /** @description Adds new group in particular parent group.
    * @param {string | HTMLElement} parentGroup. A string, representing the id of the item or an HTML Element referencing this group.
    * @param {string} data. A string, representing the group operator.
    */
    addGroup(parentGroup, data) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addGroup(parentGroup, data);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addGroup(parentGroup, data);
            });
        }
    }
    /** @description Removes condition.
    * @param {string | HTMLElement} item. A string, representing the id of the item or an HTML Element referencing this condition.
    */
    removeCondition(item) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeCondition(item);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeCondition(item);
            });
        }
    }
    /** @description Deletes group and all of  it's children
    * @param {string | HTMLElement} item. A string, representing the id of the item or an HTML Element referencing this group.
    */
    removeGroup(item) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeGroup(item);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeGroup(item);
            });
        }
    }
    /** @description Returns a string representation of the filter builder's value.
    * @param {boolean} useLabels?. Controls the way of string representation. In mode without labels the value object is stringified only.
    * @returns {string}
  */
    toString(useLabels) {
        return __awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.toString(useLabels);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Updates condition.
    * @param {string | HTMLElement} item. A string, representing the id of the item or an HTML Element referencing targeted condition.
    * @param {any[]} data. An array, representing condition. Condition's element's role is related to their position in the condition's array. At index 0 - field name, index 1 - condition's opertor, index 2 - condition's value.
    */
    updateCondition(item, data) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.updateCondition(item, data);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.updateCondition(item, data);
            });
        }
    }
    /** @description Updates group
    * @param {string | HTMLElement} item. A string, representing the id of the item or an HTML Element referencing this group.
    * @param {string} data. A string, representing the group operator.
    */
    updateGroup(item, data) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.updateGroup(item, data);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.updateGroup(item, data);
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
        that.eventHandlers['editorCloseHandler'] = (event) => { that.onEditorClose.emit(event); };
        that.nativeElement.addEventListener('editorClose', that.eventHandlers['editorCloseHandler']);
        that.eventHandlers['editorClosingHandler'] = (event) => { that.onEditorClosing.emit(event); };
        that.nativeElement.addEventListener('editorClosing', that.eventHandlers['editorClosingHandler']);
        that.eventHandlers['editorOpenHandler'] = (event) => { that.onEditorOpen.emit(event); };
        that.nativeElement.addEventListener('editorOpen', that.eventHandlers['editorOpenHandler']);
        that.eventHandlers['editorOpeningHandler'] = (event) => { that.onEditorOpening.emit(event); };
        that.nativeElement.addEventListener('editorOpening', that.eventHandlers['editorOpeningHandler']);
        that.eventHandlers['itemClickHandler'] = (event) => { that.onItemClick.emit(event); };
        that.nativeElement.addEventListener('itemClick', that.eventHandlers['itemClickHandler']);
        that.eventHandlers['openHandler'] = (event) => { that.onOpen.emit(event); };
        that.nativeElement.addEventListener('open', that.eventHandlers['openHandler']);
        that.eventHandlers['openingHandler'] = (event) => { that.onOpening.emit(event); };
        that.nativeElement.addEventListener('opening', that.eventHandlers['openingHandler']);
        that.eventHandlers['closeHandler'] = (event) => { that.onClose.emit(event); };
        that.nativeElement.addEventListener('close', that.eventHandlers['closeHandler']);
        that.eventHandlers['closingHandler'] = (event) => { that.onClosing.emit(event); };
        that.nativeElement.addEventListener('closing', that.eventHandlers['closingHandler']);
    }
    /** @description Remove event listeners. */
    unlisten() {
        const that = this;
        if (that.eventHandlers['changeHandler']) {
            that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
        }
        if (that.eventHandlers['editorCloseHandler']) {
            that.nativeElement.removeEventListener('editorClose', that.eventHandlers['editorCloseHandler']);
        }
        if (that.eventHandlers['editorClosingHandler']) {
            that.nativeElement.removeEventListener('editorClosing', that.eventHandlers['editorClosingHandler']);
        }
        if (that.eventHandlers['editorOpenHandler']) {
            that.nativeElement.removeEventListener('editorOpen', that.eventHandlers['editorOpenHandler']);
        }
        if (that.eventHandlers['editorOpeningHandler']) {
            that.nativeElement.removeEventListener('editorOpening', that.eventHandlers['editorOpeningHandler']);
        }
        if (that.eventHandlers['itemClickHandler']) {
            that.nativeElement.removeEventListener('itemClick', that.eventHandlers['itemClickHandler']);
        }
        if (that.eventHandlers['openHandler']) {
            that.nativeElement.removeEventListener('open', that.eventHandlers['openHandler']);
        }
        if (that.eventHandlers['openingHandler']) {
            that.nativeElement.removeEventListener('opening', that.eventHandlers['openingHandler']);
        }
        if (that.eventHandlers['closeHandler']) {
            that.nativeElement.removeEventListener('close', that.eventHandlers['closeHandler']);
        }
        if (that.eventHandlers['closingHandler']) {
            that.nativeElement.removeEventListener('closing', that.eventHandlers['closingHandler']);
        }
    }
};
FilterBuilderComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], FilterBuilderComponent.prototype, "animation", null);
__decorate([
    Input()
], FilterBuilderComponent.prototype, "customOperations", null);
__decorate([
    Input()
], FilterBuilderComponent.prototype, "disableContextMenu", null);
__decorate([
    Input()
], FilterBuilderComponent.prototype, "disabled", null);
__decorate([
    Input()
], FilterBuilderComponent.prototype, "fields", null);
__decorate([
    Input()
], FilterBuilderComponent.prototype, "formatStringDate", null);
__decorate([
    Input()
], FilterBuilderComponent.prototype, "formatStringDateTime", null);
__decorate([
    Input()
], FilterBuilderComponent.prototype, "hint", null);
__decorate([
    Input()
], FilterBuilderComponent.prototype, "icons", null);
__decorate([
    Input()
], FilterBuilderComponent.prototype, "locale", null);
__decorate([
    Input()
], FilterBuilderComponent.prototype, "localizeFormatFunction", null);
__decorate([
    Input()
], FilterBuilderComponent.prototype, "maxConditions", null);
__decorate([
    Input()
], FilterBuilderComponent.prototype, "maxConditionsPerGroup", null);
__decorate([
    Input()
], FilterBuilderComponent.prototype, "maxLevel", null);
__decorate([
    Input()
], FilterBuilderComponent.prototype, "messages", null);
__decorate([
    Input()
], FilterBuilderComponent.prototype, "readonly", null);
__decorate([
    Input()
], FilterBuilderComponent.prototype, "restrictedMode", null);
__decorate([
    Input()
], FilterBuilderComponent.prototype, "showIcons", null);
__decorate([
    Input()
], FilterBuilderComponent.prototype, "theme", null);
__decorate([
    Input()
], FilterBuilderComponent.prototype, "unfocusable", null);
__decorate([
    Input()
], FilterBuilderComponent.prototype, "value", null);
__decorate([
    Input()
], FilterBuilderComponent.prototype, "valueFormatFunction", null);
__decorate([
    Input()
], FilterBuilderComponent.prototype, "valuePlaceholder", null);
__decorate([
    Output()
], FilterBuilderComponent.prototype, "onChange", void 0);
__decorate([
    Output()
], FilterBuilderComponent.prototype, "onEditorClose", void 0);
__decorate([
    Output()
], FilterBuilderComponent.prototype, "onEditorClosing", void 0);
__decorate([
    Output()
], FilterBuilderComponent.prototype, "onEditorOpen", void 0);
__decorate([
    Output()
], FilterBuilderComponent.prototype, "onEditorOpening", void 0);
__decorate([
    Output()
], FilterBuilderComponent.prototype, "onItemClick", void 0);
__decorate([
    Output()
], FilterBuilderComponent.prototype, "onOpen", void 0);
__decorate([
    Output()
], FilterBuilderComponent.prototype, "onOpening", void 0);
__decorate([
    Output()
], FilterBuilderComponent.prototype, "onClose", void 0);
__decorate([
    Output()
], FilterBuilderComponent.prototype, "onClosing", void 0);
FilterBuilderComponent = __decorate([
    Directive({
        exportAs: 'smart-filter-builder', selector: 'smart-filter-builder, [smart-filter-builder]'
    })
], FilterBuilderComponent);

let FilterBuilderModule = class FilterBuilderModule {
};
FilterBuilderModule = __decorate([
    NgModule({
        declarations: [FilterBuilderComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        exports: [FilterBuilderComponent]
    })
], FilterBuilderModule);

/**
 * Generated bundle index. Do not edit.
 */

export { FilterBuilderComponent, FilterBuilderModule, Smart, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-filterbuilder.js.map
