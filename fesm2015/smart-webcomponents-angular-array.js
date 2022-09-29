
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.array';

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

let ArrayComponent = class ArrayComponent extends BaseElement {
    constructor(ref) {
        super(ref);
        this.eventHandlers = [];
        /** @description This event is triggered when a visible row or column has been added or removed.
        *  @param event. The custom event. 	*/
        this.onArraySizeChange = new EventEmitter();
        /** @description This event is triggered when the value of the Array is changed.
        *  @param event. The custom event. 	*/
        this.onChange = new EventEmitter();
        /** @description This event is triggered when a dimension has been added or removed.
        *  @param event. The custom event. 	*/
        this.onDimensionChange = new EventEmitter();
        /** @description This event is triggered when an Array element has been clicked.
        *  @param event. The custom event. 	*/
        this.onElementClick = new EventEmitter();
        /** @description This event is triggered when the Array is scrolled with one of the scrollbars.
        *  @param event. The custom event. 	*/
        this.onScroll = new EventEmitter();
        /** @description This event is triggered when the column width or the row height has been changed.
        *  @param event. The custom event. 	*/
        this.onSizeChange = new EventEmitter();
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('smart-array');
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
    /** @description Sets or gets the indexing mode of the Array. */
    get arrayIndexingMode() {
        return this.nativeElement ? this.nativeElement.arrayIndexingMode : undefined;
    }
    set arrayIndexingMode(value) {
        this.nativeElement ? this.nativeElement.arrayIndexingMode = value : undefined;
    }
    /** @description A callback function that is called when the width, height or disabled properties of an inner element need to be updated. Applicable only when type is 'custom'. */
    get changeProperty() {
        return this.nativeElement ? this.nativeElement.changeProperty : undefined;
    }
    set changeProperty(value) {
        this.nativeElement ? this.nativeElement.changeProperty = value : undefined;
    }
    /** @description Sets or gets the number of visible columns in the Array. */
    get columns() {
        return this.nativeElement ? this.nativeElement.columns : undefined;
    }
    set columns(value) {
        this.nativeElement ? this.nativeElement.columns = value : undefined;
    }
    /** @description Sets or gets the default value of inner elements when type is 'custom'. */
    get customWidgetDefaultValue() {
        return this.nativeElement ? this.nativeElement.customWidgetDefaultValue : undefined;
    }
    set customWidgetDefaultValue(value) {
        this.nativeElement ? this.nativeElement.customWidgetDefaultValue = value : undefined;
    }
    /** @description Sets or gets the dimensions of the Array. */
    get dimensions() {
        return this.nativeElement ? this.nativeElement.dimensions : undefined;
    }
    set dimensions(value) {
        this.nativeElement ? this.nativeElement.dimensions = value : undefined;
    }
    /** @description Sets or gets disabled state of the Array. */
    get disabled() {
        return this.nativeElement ? this.nativeElement.disabled : undefined;
    }
    set disabled(value) {
        this.nativeElement ? this.nativeElement.disabled = value : undefined;
    }
    /** @description Sets or gets the height of Array elements (row height). */
    get elementHeight() {
        return this.nativeElement ? this.nativeElement.elementHeight : undefined;
    }
    set elementHeight(value) {
        this.nativeElement ? this.nativeElement.elementHeight = value : undefined;
    }
    /** @description A callback function that can be used for applying settings to element widgets. When type is 'custom', widgets have to be initialized in this callback function. */
    get elementTemplate() {
        return this.nativeElement ? this.nativeElement.elementTemplate : undefined;
    }
    set elementTemplate(value) {
        this.nativeElement ? this.nativeElement.elementTemplate = value : undefined;
    }
    /** @description Sets or gets the width of Array elements (column width). */
    get elementWidth() {
        return this.nativeElement ? this.nativeElement.elementWidth : undefined;
    }
    set elementWidth(value) {
        this.nativeElement ? this.nativeElement.elementWidth = value : undefined;
    }
    /** @description A callback function that can be used for getting the value of element widgets. */
    get getElementValue() {
        return this.nativeElement ? this.nativeElement.getElementValue : undefined;
    }
    set getElementValue(value) {
        this.nativeElement ? this.nativeElement.getElementValue = value : undefined;
    }
    /** @description Sets or gets the height of indexers. */
    get indexerHeight() {
        return this.nativeElement ? this.nativeElement.indexerHeight : undefined;
    }
    set indexerHeight(value) {
        this.nativeElement ? this.nativeElement.indexerHeight = value : undefined;
    }
    /** @description Sets or gets the width of indexers. */
    get indexerWidth() {
        return this.nativeElement ? this.nativeElement.indexerWidth : undefined;
    }
    set indexerWidth(value) {
        this.nativeElement ? this.nativeElement.indexerWidth = value : undefined;
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
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
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
    /** @description Sets or gets the number of visible rows in the Array. */
    get rows() {
        return this.nativeElement ? this.nativeElement.rows : undefined;
    }
    set rows(value) {
        this.nativeElement ? this.nativeElement.rows = value : undefined;
    }
    /** @description A callback function that can be used for setting the value of element widgets. */
    get setElementValue() {
        return this.nativeElement ? this.nativeElement.setElementValue : undefined;
    }
    set setElementValue(value) {
        this.nativeElement ? this.nativeElement.setElementValue = value : undefined;
    }
    /** @description Sets or gets whether to display the horizontal scrollbar. */
    get showHorizontalScrollbar() {
        return this.nativeElement ? this.nativeElement.showHorizontalScrollbar : undefined;
    }
    set showHorizontalScrollbar(value) {
        this.nativeElement ? this.nativeElement.showHorizontalScrollbar = value : undefined;
    }
    /** @description Sets or gets whether to display the array indexers. */
    get showIndexDisplay() {
        return this.nativeElement ? this.nativeElement.showIndexDisplay : undefined;
    }
    set showIndexDisplay(value) {
        this.nativeElement ? this.nativeElement.showIndexDisplay = value : undefined;
    }
    /** @description Sets or gets whether to highlight selected elements. */
    get showSelection() {
        return this.nativeElement ? this.nativeElement.showSelection : undefined;
    }
    set showSelection(value) {
        this.nativeElement ? this.nativeElement.showSelection = value : undefined;
    }
    /** @description Sets or gets whether to display the vertical scrollbar. */
    get showVerticalScrollbar() {
        return this.nativeElement ? this.nativeElement.showVerticalScrollbar : undefined;
    }
    set showVerticalScrollbar(value) {
        this.nativeElement ? this.nativeElement.showVerticalScrollbar = value : undefined;
    }
    /** @description Determines the theme. Theme defines the look of the element */
    get theme() {
        return this.nativeElement ? this.nativeElement.theme : undefined;
    }
    set theme(value) {
        this.nativeElement ? this.nativeElement.theme = value : undefined;
    }
    /** @description Sets or gets the data type and element widgets to be used in the Array. */
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
    /** @description Sets or gets the value of the Array. */
    get value() {
        return this.nativeElement ? this.nativeElement.value : undefined;
    }
    set value(value) {
        this.nativeElement ? this.nativeElement.value = value : undefined;
    }
    /** @description Adds a dimension to the array. Note: when adding multiple dimensions simultaneously, it is recommended to do so by dynamically setting the dimensions property.
    */
    addDimension() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addDimension();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addDimension();
            });
        }
    }
    /** @description Clears the selection.
    */
    clearSelection() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearSelection();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clearSelection();
            });
        }
    }
    /** @description Copies the value of an Array element to the clipboard.
    * @param {number} Rowvisibleindex. The visible index of the row (y coordinate) of the element.
    * @param {number} Columnvisibleindex. The visible index of the column (x coordinate) of the element.
    */
    copyElementValueToClipboard(Rowvisibleindex, Columnvisibleindex) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.copyElementValueToClipboard(Rowvisibleindex, Columnvisibleindex);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.copyElementValueToClipboard(Rowvisibleindex, Columnvisibleindex);
            });
        }
    }
    /** @description Deletes a column in the value array.
    * @param {number} Columnindex. Index of the column to be deleted.
    */
    deleteColumn(Columnindex) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.deleteColumn(Columnindex);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.deleteColumn(Columnindex);
            });
        }
    }
    /** @description Deletes a row in the value array.
    * @param {number} Rowindex. Index of the row to be deleted.
    */
    deleteRow(Rowindex) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.deleteRow(Rowindex);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.deleteRow(Rowindex);
            });
        }
    }
    /** @description Empties the value array.
    */
    emptyArray() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.emptyArray();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.emptyArray();
            });
        }
    }
    /** @description Designates the end of a selection started with the method startSelection.
    * @param {number} Rowboundindex. The bound index of the row (y coordinate) to end the selection to.
    * @param {number} Columnboundindex. The bound index of the column (x coordinate) to end the selection to.
    */
    endSelection(Rowboundindex, Columnboundindex) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.endSelection(Rowboundindex, Columnboundindex);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.endSelection(Rowboundindex, Columnboundindex);
            });
        }
    }
    /** @description Returns the HTML element at the specified visible row and column coordinates of the Array.
    * @param {number} RowVisibleIndex. The visible index of the row (y coordinate) of the element.
    * @param {number} ColumnVisibleIndex. The visible index of the column (x coordinate) of the element.
    * @returns {HTMLElement}
  */
    getElement(RowVisibleIndex, ColumnVisibleIndex) {
        return __awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getElement(RowVisibleIndex, ColumnVisibleIndex);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Returns an object with the values of the Array element width and height.
    * @returns {any}
  */
    getElementSize() {
        return __awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getElementSize();
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Gets an array with the values of all indexers.
    * @returns {any[]}
  */
    getIndexerValue() {
        return __awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getIndexerValue();
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Returns an HTML element from the Array at the specified page coordinates and other information about this element.
    * @param {number} Pagexcoordinate.
    * @param {number} Pageycoordinate.
    * @returns {any}
  */
    hitTest(Pagexcoordinate, Pageycoordinate) {
        return __awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.hitTest(Pagexcoordinate, Pageycoordinate);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Inserts a column in the value array before the specified column. The new column is filled with default values.
    * @param {number} Columnindex. Index of the column to add a new column before.
    */
    insertColumnBefore(Columnindex) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertColumnBefore(Columnindex);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insertColumnBefore(Columnindex);
            });
        }
    }
    /** @description Inserts a row in the value array before the specified row. The new row is filled with default values.
    * @param {number} Rowindex. Index of the row to add a new row before.
    */
    insertRowBefore(Rowindex) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertRowBefore(Rowindex);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insertRowBefore(Rowindex);
            });
        }
    }
    /** @description Sets all value array members to the default value.
    */
    reinitializeArray() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.reinitializeArray();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.reinitializeArray();
            });
        }
    }
    /** @description Removes a dimension from the array. Note: when removing multiple dimensions simultaneously, it is recommended to do so by dynamically setting the dimensions property.
    */
    removeDimension() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeDimension();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeDimension();
            });
        }
    }
    /** @description Sets the array's type to 'none'.
    */
    reset() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.reset();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.reset();
            });
        }
    }
    /** @description Resizes Array elements (changes both the column width and the row height).
    * @param {number} Elementwidth. The new element (column) width.
    * @param {number} Elementheight. The new element (row) height.
    */
    resizeElement(Elementwidth, Elementheight) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.resizeElement(Elementwidth, Elementheight);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.resizeElement(Elementwidth, Elementheight);
            });
        }
    }
    /** @description Selects all members of the array.
    */
    selectAll() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.selectAll();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.selectAll();
            });
        }
    }
    /** @description Selects an element with the passed row and column bound indexes.
    * @param {number} Rowboundindex.
    * @param {number} Columnboundindex.
    */
    selectElement(Rowboundindex, Columnboundindex) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.selectElement(Rowboundindex, Columnboundindex);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.selectElement(Rowboundindex, Columnboundindex);
            });
        }
    }
    /** @description Sets the column (element) width.
    * @param {number} Columnwidth. The new column width.
    */
    setColumnWidth(Columnwidth) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.setColumnWidth(Columnwidth);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.setColumnWidth(Columnwidth);
            });
        }
    }
    /** @description Sets the default value of array members.
    * @param {any} Defaultvalue. The new default value. Its data type should correspond to the <strong>type</strong> of the Array.
    */
    setDefaultValue(Defaultvalue) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.setDefaultValue(Defaultvalue);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.setDefaultValue(Defaultvalue);
            });
        }
    }
    /** @description Sets the value of one or more Array indexers.
    * @param {any[]} Settings. An array of objects with the fields index and value.
    */
    setIndexerValue(Settings) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.setIndexerValue(Settings);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.setIndexerValue(Settings);
            });
        }
    }
    /** @description Sets the row (element) height.
    * @param {number} Rowheight. The new row height.
    */
    setRowHeight(Rowheight) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.setRowHeight(Rowheight);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.setRowHeight(Rowheight);
            });
        }
    }
    /** @description Makes the last array member visible.
    */
    showLastElement() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.showLastElement();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.showLastElement();
            });
        }
    }
    /** @description Designates the start of a selection. To end a selection, call endSelection.
    * @param {number} Rowboundindex. The bound index of the row (y coordinate) to start the selection from.
    * @param {number} Columnboundindex. The bound index of the column (x coordinate) to start the selection from.
    */
    startSelection(Rowboundindex, Columnboundindex) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.startSelection(Rowboundindex, Columnboundindex);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.startSelection(Rowboundindex, Columnboundindex);
            });
        }
    }
    /** @description Increases or decreases the visual gap between Array elements.
    */
    toggleElementGap() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.toggleElementGap();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.toggleElementGap();
            });
        }
    }
    /** @description Transposes the array. Applicable only when dimensions is 2 (2D array).
    */
    transposeArray() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.transposeArray();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.transposeArray();
            });
        }
    }
    /** @description Sets or gets the value of the whole array or sets the value of a member of the array.
    * @param {any} Newvalue?. If the method is used for setting the value of the whole array, the expected value is an array. If it is used for setting the value of an array member, the value can be of any applicable type.
    * @param {number | number[]} Elementindexes?. If this parameter is passed, only the value of the array member with the provided dimension indexes is set. Dimension indexes that are not passed are considered to be 0.
    * @returns {any[]}
  */
    val(Newvalue, Elementindexes) {
        return __awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.val(Newvalue, Elementindexes);
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
        that.eventHandlers['arraySizeChangeHandler'] = (event) => { that.onArraySizeChange.emit(event); };
        that.nativeElement.addEventListener('arraySizeChange', that.eventHandlers['arraySizeChangeHandler']);
        that.eventHandlers['changeHandler'] = (event) => { that.onChange.emit(event); };
        that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
        that.eventHandlers['dimensionChangeHandler'] = (event) => { that.onDimensionChange.emit(event); };
        that.nativeElement.addEventListener('dimensionChange', that.eventHandlers['dimensionChangeHandler']);
        that.eventHandlers['elementClickHandler'] = (event) => { that.onElementClick.emit(event); };
        that.nativeElement.addEventListener('elementClick', that.eventHandlers['elementClickHandler']);
        that.eventHandlers['scrollHandler'] = (event) => { that.onScroll.emit(event); };
        that.nativeElement.addEventListener('scroll', that.eventHandlers['scrollHandler']);
        that.eventHandlers['sizeChangeHandler'] = (event) => { that.onSizeChange.emit(event); };
        that.nativeElement.addEventListener('sizeChange', that.eventHandlers['sizeChangeHandler']);
    }
    /** @description Remove event listeners. */
    unlisten() {
        const that = this;
        if (that.eventHandlers['arraySizeChangeHandler']) {
            that.nativeElement.removeEventListener('arraySizeChange', that.eventHandlers['arraySizeChangeHandler']);
        }
        if (that.eventHandlers['changeHandler']) {
            that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
        }
        if (that.eventHandlers['dimensionChangeHandler']) {
            that.nativeElement.removeEventListener('dimensionChange', that.eventHandlers['dimensionChangeHandler']);
        }
        if (that.eventHandlers['elementClickHandler']) {
            that.nativeElement.removeEventListener('elementClick', that.eventHandlers['elementClickHandler']);
        }
        if (that.eventHandlers['scrollHandler']) {
            that.nativeElement.removeEventListener('scroll', that.eventHandlers['scrollHandler']);
        }
        if (that.eventHandlers['sizeChangeHandler']) {
            that.nativeElement.removeEventListener('sizeChange', that.eventHandlers['sizeChangeHandler']);
        }
    }
};
ArrayComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], ArrayComponent.prototype, "animation", null);
__decorate([
    Input()
], ArrayComponent.prototype, "arrayIndexingMode", null);
__decorate([
    Input()
], ArrayComponent.prototype, "changeProperty", null);
__decorate([
    Input()
], ArrayComponent.prototype, "columns", null);
__decorate([
    Input()
], ArrayComponent.prototype, "customWidgetDefaultValue", null);
__decorate([
    Input()
], ArrayComponent.prototype, "dimensions", null);
__decorate([
    Input()
], ArrayComponent.prototype, "disabled", null);
__decorate([
    Input()
], ArrayComponent.prototype, "elementHeight", null);
__decorate([
    Input()
], ArrayComponent.prototype, "elementTemplate", null);
__decorate([
    Input()
], ArrayComponent.prototype, "elementWidth", null);
__decorate([
    Input()
], ArrayComponent.prototype, "getElementValue", null);
__decorate([
    Input()
], ArrayComponent.prototype, "indexerHeight", null);
__decorate([
    Input()
], ArrayComponent.prototype, "indexerWidth", null);
__decorate([
    Input()
], ArrayComponent.prototype, "locale", null);
__decorate([
    Input()
], ArrayComponent.prototype, "localizeFormatFunction", null);
__decorate([
    Input()
], ArrayComponent.prototype, "messages", null);
__decorate([
    Input()
], ArrayComponent.prototype, "readonly", null);
__decorate([
    Input()
], ArrayComponent.prototype, "rows", null);
__decorate([
    Input()
], ArrayComponent.prototype, "setElementValue", null);
__decorate([
    Input()
], ArrayComponent.prototype, "showHorizontalScrollbar", null);
__decorate([
    Input()
], ArrayComponent.prototype, "showIndexDisplay", null);
__decorate([
    Input()
], ArrayComponent.prototype, "showSelection", null);
__decorate([
    Input()
], ArrayComponent.prototype, "showVerticalScrollbar", null);
__decorate([
    Input()
], ArrayComponent.prototype, "theme", null);
__decorate([
    Input()
], ArrayComponent.prototype, "type", null);
__decorate([
    Input()
], ArrayComponent.prototype, "unfocusable", null);
__decorate([
    Input()
], ArrayComponent.prototype, "value", null);
__decorate([
    Output()
], ArrayComponent.prototype, "onArraySizeChange", void 0);
__decorate([
    Output()
], ArrayComponent.prototype, "onChange", void 0);
__decorate([
    Output()
], ArrayComponent.prototype, "onDimensionChange", void 0);
__decorate([
    Output()
], ArrayComponent.prototype, "onElementClick", void 0);
__decorate([
    Output()
], ArrayComponent.prototype, "onScroll", void 0);
__decorate([
    Output()
], ArrayComponent.prototype, "onSizeChange", void 0);
ArrayComponent = __decorate([
    Directive({
        exportAs: 'smart-array', selector: 'smart-array, [smart-array]'
    })
], ArrayComponent);

let ArrayModule = class ArrayModule {
};
ArrayModule = __decorate([
    NgModule({
        declarations: [ArrayComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        exports: [ArrayComponent]
    })
], ArrayModule);

/**
 * Generated bundle index. Do not edit.
 */

export { ArrayComponent, ArrayModule, Smart, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-array.js.map
