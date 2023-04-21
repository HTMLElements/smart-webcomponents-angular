
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.3dchart';

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

let ThreeDChartComponent = class ThreeDChartComponent extends BaseElement {
    constructor(ref) {
        super(ref);
        this.eventHandlers = [];
        /** @description The event is raised when the user clicks on a chart element.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	itemIndex, 	serieIndex, 	groupIndex)
        *   itemIndex - The item index of the item.
        *   serieIndex - The serie index of the item.
        *   groupIndex - The group index of the item.
        */
        this.onItemClick = new EventEmitter();
        /** @description The event is raised when a chart element is shown.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	itemIndex, 	serieIndex, 	groupIndex)
        *   itemIndex - The item index of the item.
        *   serieIndex - The serie index of the item.
        *   groupIndex - The group index of the item.
        */
        this.onShow = new EventEmitter();
        /** @description The event is raised when a chart element is hidden.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	itemIndex, 	serieIndex, 	groupIndex)
        *   itemIndex - The item index of the item.
        *   serieIndex - The serie index of the item.
        *   groupIndex - The group index of the item.
        */
        this.onHide = new EventEmitter();
        /** @description The event is raised when a chart element is selected.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	itemIndex, 	serieIndex, 	groupIndex)
        *   itemIndex - The item index of the item.
        *   serieIndex - The serie index of the item.
        *   groupIndex - The group index of the item.
        */
        this.onSelect = new EventEmitter();
        /** @description The event is raised when a chart element is unselected.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	itemIndex, 	serieIndex, 	groupIndex)
        *   itemIndex - The item index of the item.
        *   serieIndex - The serie index of the item.
        *   groupIndex - The group index of the item.
        */
        this.onUnselect = new EventEmitter();
        /** @description The event is raised after the chart's range selector position changes and after the chart ends rendering.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	minValue, 	maxValue)
        *   minValue - The start value of the range selector.
        *   maxValue - The end value of the range selector.
        */
        this.onRangeSelectionChanged = new EventEmitter();
        /** @description The event is raised when the chart's range selector position changes and before the chart starts rendering. The event can be default prevented to cancel the range selection change.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	minValue, 	maxValue, 	oldMinValue, 	oldMaxValue)
        *   minValue - The start value of the range selector.
        *   maxValue - The end value of the range selector.
        *   oldMinValue - The previous start value of the range selector.
        *   oldMaxValue - The previous end value of the range selector.
        */
        this.onRangeSelectionChanging = new EventEmitter();
        /** @description The event is raised when the chart begins rendering.
        *  @param event. The custom event. 	*/
        this.onRefreshBegin = new EventEmitter();
        /** @description The event is raised when the chart finishes rendering.
        *  @param event. The custom event. 	*/
        this.onRefreshEnd = new EventEmitter();
        /** @description The event is raised when the chart begins resizing.
        *  @param event. The custom event. 	*/
        this.onResizeBegin = new EventEmitter();
        /** @description The event is raised when the chart finishes resizing.
        *  @param event. The custom event. 	*/
        this.onResizeEnd = new EventEmitter();
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('smart-3d-chart');
        for (let propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    }
    /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none'. */
    get animation() {
        return this.nativeElement ? this.nativeElement.animation : undefined;
    }
    set animation(value) {
        this.nativeElement ? this.nativeElement.animation = value : undefined;
    }
    /** @description Determines the rate of the animation. The default animation rate is 1 */
    get animationSpeed() {
        return this.nativeElement ? this.nativeElement.animationSpeed : undefined;
    }
    set animationSpeed(value) {
        this.nativeElement ? this.nativeElement.animationSpeed = value : undefined;
    }
    /** @description Sets whether the chart will rotate automatically. */
    get autoRotate() {
        return this.nativeElement ? this.nativeElement.autoRotate : undefined;
    }
    set autoRotate(value) {
        this.nativeElement ? this.nativeElement.autoRotate = value : undefined;
    }
    /** @description Sets the speed of the automatic rotation. */
    get autoRotateSpeed() {
        return this.nativeElement ? this.nativeElement.autoRotateSpeed : undefined;
    }
    set autoRotateSpeed(value) {
        this.nativeElement ? this.nativeElement.autoRotateSpeed = value : undefined;
    }
    /** @description Sets the chart's background color. For example: '#DDFFE8' */
    get backgroundColor() {
        return this.nativeElement ? this.nativeElement.backgroundColor : undefined;
    }
    set backgroundColor(value) {
        this.nativeElement ? this.nativeElement.backgroundColor = value : undefined;
    }
    /** @description Sets the chart's background to a static linear gradient. The property must be set to an Array of Strings in the format: 'offset, color' */
    get backgroundGradient() {
        return this.nativeElement ? this.nativeElement.backgroundGradient : undefined;
    }
    set backgroundGradient(value) {
        this.nativeElement ? this.nativeElement.backgroundGradient = value : undefined;
    }
    /** @description Sets the chart's background to a static image. For example: 'https://www.htmlelements.com/demos/images/stars.jpg' */
    get backgroundImage() {
        return this.nativeElement ? this.nativeElement.backgroundImage : undefined;
    }
    set backgroundImage(value) {
        this.nativeElement ? this.nativeElement.backgroundImage = value : undefined;
    }
    /** @description Sets the chart's background to a dynamic background image which rotates with the camera. The property must be set an Array of 6 images. All images must have aspect ratio 1:1 */
    get backgroundTexture() {
        return this.nativeElement ? this.nativeElement.backgroundTexture : undefined;
    }
    set backgroundTexture(value) {
        this.nativeElement ? this.nativeElement.backgroundTexture = value : undefined;
    }
    /** @description Sets the camera's position. The property must be set to an {x, y, z} object. */
    get cameraPosition() {
        return this.nativeElement ? this.nativeElement.cameraPosition : undefined;
    }
    set cameraPosition(value) {
        this.nativeElement ? this.nativeElement.cameraPosition = value : undefined;
    }
    /** @description Sets the intial camera zoom. The default value is 1 */
    get cameraZoom() {
        return this.nativeElement ? this.nativeElement.cameraZoom : undefined;
    }
    set cameraZoom(value) {
        this.nativeElement ? this.nativeElement.cameraZoom = value : undefined;
    }
    /** @description Sets the caption (title) of the chart. */
    get caption() {
        return this.nativeElement ? this.nativeElement.caption : undefined;
    }
    set caption(value) {
        this.nativeElement ? this.nativeElement.caption = value : undefined;
    }
    /** @description Sets the chart's color pallete. jqxChart suppports 32 color schemes from 'scheme01' to 'scheme32'. */
    get colorScheme() {
        return this.nativeElement ? this.nativeElement.colorScheme : undefined;
    }
    set colorScheme(value) {
        this.nativeElement ? this.nativeElement.colorScheme = value : undefined;
    }
    /** @description Sets the chart's controls settings. */
    get controlsSettings() {
        return this.nativeElement ? this.nativeElement.controlsSettings : undefined;
    }
    set controlsSettings(value) {
        this.nativeElement ? this.nativeElement.controlsSettings = value : undefined;
    }
    /** @description Allows substituting default items with custom 3D Objects. The property must be set to an Array of Objects in the format: { groupIndex, serieIndex, itemIndex, modelUrl } */
    get customModels() {
        return this.nativeElement ? this.nativeElement.customModels : undefined;
    }
    set customModels(value) {
        this.nativeElement ? this.nativeElement.customModels = value : undefined;
    }
    /** @description Sets the chart's data source. */
    get dataSource() {
        return this.nativeElement ? this.nativeElement.dataSource : undefined;
    }
    set dataSource(value) {
        this.nativeElement ? this.nativeElement.dataSource = value : undefined;
    }
    /** @description Sets the description text of the chart. */
    get description() {
        return this.nativeElement ? this.nativeElement.description : undefined;
    }
    set description(value) {
        this.nativeElement ? this.nativeElement.description = value : undefined;
    }
    /** @description Enables or disables the chart. */
    get disabled() {
        return this.nativeElement ? this.nativeElement.disabled : undefined;
    }
    set disabled(value) {
        this.nativeElement ? this.nativeElement.disabled = value : undefined;
    }
    /** @description Sets whether the chart's toolbar is enabled. */
    get enableControlsToolbar() {
        return this.nativeElement ? this.nativeElement.enableControlsToolbar : undefined;
    }
    set enableControlsToolbar(value) {
        this.nativeElement ? this.nativeElement.enableControlsToolbar = value : undefined;
    }
    /** @description  */
    get controlsToolbarItems() {
        return this.nativeElement ? this.nativeElement.controlsToolbarItems : undefined;
    }
    set controlsToolbarItems(value) {
        this.nativeElement ? this.nativeElement.controlsToolbarItems = value : undefined;
    }
    /** @description Sets the chart's grid options. */
    get gridOptions() {
        return this.nativeElement ? this.nativeElement.gridOptions : undefined;
    }
    set gridOptions(value) {
        this.nativeElement ? this.nativeElement.gridOptions = value : undefined;
    }
    /** @description Sets whether the legend will be created based on the chart's series or serie groups. "auto" - the legend index will change depending on the Chart type */
    get legendIndex() {
        return this.nativeElement ? this.nativeElement.legendIndex : undefined;
    }
    set legendIndex(value) {
        this.nativeElement ? this.nativeElement.legendIndex = value : undefined;
    }
    /** @description Sets the legend's layout. */
    get legendLayout() {
        return this.nativeElement ? this.nativeElement.legendLayout : undefined;
    }
    set legendLayout(value) {
        this.nativeElement ? this.nativeElement.legendLayout = value : undefined;
    }
    /** @description Sets the light color of the 3D Scene. */
    get lightColor() {
        return this.nativeElement ? this.nativeElement.lightColor : undefined;
    }
    set lightColor(value) {
        this.nativeElement ? this.nativeElement.lightColor = value : undefined;
    }
    /** @description Sets or gets the locale. Used in conjunction with the property messages. */
    get locale() {
        return this.nativeElement ? this.nativeElement.locale : undefined;
    }
    set locale(value) {
        this.nativeElement ? this.nativeElement.locale = value : undefined;
    }
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale. */
    get messages() {
        return this.nativeElement ? this.nativeElement.messages : undefined;
    }
    set messages(value) {
        this.nativeElement ? this.nativeElement.messages = value : undefined;
    }
    /** @description Sets or gets a value indicating whether the Chart's layout is mirrored. */
    get rightToLeft() {
        return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
    }
    set rightToLeft(value) {
        this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
    }
    /** @description Determines the selection mode. */
    get selectionMode() {
        return this.nativeElement ? this.nativeElement.selectionMode : undefined;
    }
    set selectionMode(value) {
        this.nativeElement ? this.nativeElement.selectionMode = value : undefined;
    }
    /** @description The seriesGroups property is used to describe all series displayed on the chart. jqxChart supports multiple series of different types and series grouping. Each series group may have its own Value Axis (Y-axis) which allows you to have values with different scales displayed on the same chart at the same time. It also allows you to display multiple series types together on the same chart. For example, you can display all series in one group as lines and the series in a second group as columns. seriesGroups is an array of objects where each object represents one group. */
    get seriesGroups() {
        return this.nativeElement ? this.nativeElement.seriesGroups : undefined;
    }
    set seriesGroups(value) {
        this.nativeElement ? this.nativeElement.seriesGroups = value : undefined;
    }
    /** @description Determines whether to show grid connecting lines when a chart item is hovered over. */
    get showConnectionLines() {
        return this.nativeElement ? this.nativeElement.showConnectionLines : undefined;
    }
    set showConnectionLines(value) {
        this.nativeElement ? this.nativeElement.showConnectionLines = value : undefined;
    }
    /** @description Determines whether to show or hide the chart series legend. */
    get showLegend() {
        return this.nativeElement ? this.nativeElement.showLegend : undefined;
    }
    set showLegend(value) {
        this.nativeElement ? this.nativeElement.showLegend = value : undefined;
    }
    /** @description Determines whether to show or hide the chart series legend table. */
    get showLegendTable() {
        return this.nativeElement ? this.nativeElement.showLegendTable : undefined;
    }
    set showLegendTable(value) {
        this.nativeElement ? this.nativeElement.showLegendTable = value : undefined;
    }
    /** @description Enables or disables the chart tooltips. */
    get showToolTips() {
        return this.nativeElement ? this.nativeElement.showToolTips : undefined;
    }
    set showToolTips(value) {
        this.nativeElement ? this.nativeElement.showToolTips = value : undefined;
    }
    /** @description Sets the padding of the chart's title (caption). */
    get titlePadding() {
        return this.nativeElement ? this.nativeElement.titlePadding : undefined;
    }
    set titlePadding(value) {
        this.nativeElement ? this.nativeElement.titlePadding = value : undefined;
    }
    /** @description Tooltip data formatting settings for the values in the serie. */
    get toolTipFormatFunction() {
        return this.nativeElement ? this.nativeElement.toolTipFormatFunction : undefined;
    }
    set toolTipFormatFunction(value) {
        this.nativeElement ? this.nativeElement.toolTipFormatFunction = value : undefined;
    }
    /** @description Tooltip line color. By default it is set to the hovered item's color */
    get toolTipFormatSettings() {
        return this.nativeElement ? this.nativeElement.toolTipFormatSettings : undefined;
    }
    set toolTipFormatSettings(value) {
        this.nativeElement ? this.nativeElement.toolTipFormatSettings = value : undefined;
    }
    /** @description An object with settings about the Chart's y-axis (value axis). */
    get toolTipLineColor() {
        return this.nativeElement ? this.nativeElement.toolTipLineColor : undefined;
    }
    set toolTipLineColor(value) {
        this.nativeElement ? this.nativeElement.toolTipLineColor = value : undefined;
    }
    /** @description Sets the Chart's xAxis. */
    get valueAxis() {
        return this.nativeElement ? this.nativeElement.valueAxis : undefined;
    }
    set valueAxis(value) {
        this.nativeElement ? this.nativeElement.valueAxis = value : undefined;
    }
    /** @description Sets the Chart's zAxis. */
    get xAxis() {
        return this.nativeElement ? this.nativeElement.xAxis : undefined;
    }
    set xAxis(value) {
        this.nativeElement ? this.nativeElement.xAxis = value : undefined;
    }
    /** @description undefined */
    get zAxis() {
        return this.nativeElement ? this.nativeElement.zAxis : undefined;
    }
    set zAxis(value) {
        this.nativeElement ? this.nativeElement.zAxis = value : undefined;
    }
    /** @description Adds a new color sheme. If a scheme with the same name already exists, the method will update its colors.
    * @param {string} schemeName. The name of the custom color scheme.
    * @param {any[]} colorsArray. An array of color values.
    */
    addColorScheme(schemeName, colorsArray) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addColorScheme(schemeName, colorsArray);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addColorScheme(schemeName, colorsArray);
            });
        }
    }
    /** @description Begins an update of the chart. The chart will not be rendered until the endUpdate method is called.
    */
    beginUpdate() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.beginUpdate();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.beginUpdate();
            });
        }
    }
    /** @description Ends an update of the chart. The chart will be rendered after the endUpdate method is called.
    * @param {boolean} refresh?. If set to true, the chart will complete a full refresh.
    */
    endUpdate(refresh) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.endUpdate(refresh);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.endUpdate(refresh);
            });
        }
    }
    /** @description Returns the colors of a color scheme by name. If the scheme doesn't exist the method returns undefined.
    * @param {string} schemeName. The name of the color scheme.
    * @returns {any[]}
  */
    getColorScheme(schemeName) {
        return __awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getColorScheme(schemeName);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Gets the item with the specified indexes.
    * @param {number | null} groupIndex?. Series group index.
    * @param {number | null} serieIndex?. Series index.
    * @param {number | null} itemIndex?. Item (data point) index.
    * @returns {any}
  */
    getItemByIndexes(groupIndex, serieIndex, itemIndex) {
        return __awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getItemByIndexes(groupIndex, serieIndex, itemIndex);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Gets an arrat of the items with the specified indexes. Leaving an index null will return all items that match the other indexes.
    * @param {number | null} groupIndex?. Series group index.
    * @param {number | null} serieIndex?. Series index.
    * @param {number | null} itemIndex?. Item (data point) index.
    * @returns {any}
  */
    getItemsByIndexes(groupIndex, serieIndex, itemIndex) {
        return __awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getItemsByIndexes(groupIndex, serieIndex, itemIndex);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Gets the indexes of the hidden series.
    * @returns {{ groupIndex: number, serieIndex: number, itemIndex: number }[]}
  */
    getHidden() {
        return __awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getHidden();
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Gets the selected items.
    * @returns {any[]}
  */
    getSelection() {
        return __awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getSelection();
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Gets the rendered values of the valueAxis labels.
    * @returns {any}
  */
    getValueAxisLabels() {
        return __awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getValueAxisLabels();
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Gets the rendered values of the xAxis labels.
    * @returns {any}
  */
    getXAxisLabels() {
        return __awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getXAxisLabels();
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Gets the rendered values of the zAxis labels.
    * @returns {any}
  */
    getZAxisLabels() {
        return __awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getZAxisLabels();
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Hides all items of a chart group.
    * @param {number} groupIndex. Series group index.
    */
    hideGroup(groupIndex) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.hideGroup(groupIndex);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.hideGroup(groupIndex);
            });
        }
    }
    /** @description Hides a chart item.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    * @param {number} itemIndex?. Item (data point) index.
    */
    hideItem(groupIndex, serieIndex, itemIndex) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.hideItem(groupIndex, serieIndex, itemIndex);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.hideItem(groupIndex, serieIndex, itemIndex);
            });
        }
    }
    /** @description Hides all items of a chart serie.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    */
    hideSerie(groupIndex, serieIndex) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.hideSerie(groupIndex, serieIndex);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.hideSerie(groupIndex, serieIndex);
            });
        }
    }
    /** @description Refreshes the content of the chart element after a property or data update.
    */
    refresh() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.refresh();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.refresh();
            });
        }
    }
    /** @description Removes an existing color scheme. If the scheme does not exist, the method has no effect.
    * @param {string} schemeName. The name of the custom color scheme.
    */
    removeColorScheme(schemeName) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeColorScheme(schemeName);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeColorScheme(schemeName);
            });
        }
    }
    /** @description Exports the chart's content as JPEG image.
    * @param {string} fileName?. File name.
    * @param {boolean} includeLegend?. Sets whether the legend will be part of the saved file.
    * @param {boolean} includeCaption?. Sets whether the caption will be part of the saved file.
    */
    saveAsJPEG(fileName, includeLegend, includeCaption) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.saveAsJPEG(fileName, includeLegend, includeCaption);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.saveAsJPEG(fileName, includeLegend, includeCaption);
            });
        }
    }
    /** @description Exports the chart's content as PNG image.
    * @param {string} fileName?. File name.
    * @param {boolean} includeLegend?. Sets whether the legend will be part of the saved file.
    * @param {boolean} includeCaption?. Sets whether the caption will be part of the saved file.
    */
    saveAsPNG(fileName, includeLegend, includeCaption) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.saveAsPNG(fileName, includeLegend, includeCaption);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.saveAsPNG(fileName, includeLegend, includeCaption);
            });
        }
    }
    /** @description Exports the chart's content as PDF file.
    * @param {string} fileName?. File name.
    * @param {boolean} includeLegend?. Sets whether the legend will be part of the saved file.
    * @param {boolean} includeCaption?. Sets whether the caption will be part of the saved file.
    */
    saveAsPDF(fileName, includeLegend, includeCaption) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.saveAsPDF(fileName, includeLegend, includeCaption);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.saveAsPDF(fileName, includeLegend, includeCaption);
            });
        }
    }
    /** @description Selects a chart item. If selectionMode is 'one', the previous item will be unselected.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    * @param {number} itemIndex?. Item (data point) index.
    */
    selectItem(groupIndex, serieIndex, itemIndex) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.selectItem(groupIndex, serieIndex, itemIndex);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.selectItem(groupIndex, serieIndex, itemIndex);
            });
        }
    }
    /** @description Shows all items of a chart group.
    * @param {number} groupIndex. Series group index.
    */
    showGroup(groupIndex) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.showGroup(groupIndex);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.showGroup(groupIndex);
            });
        }
    }
    /** @description Shows a chart item.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    * @param {number} itemIndex?. Item (data point) index.
    */
    showItem(groupIndex, serieIndex, itemIndex) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.showItem(groupIndex, serieIndex, itemIndex);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.showItem(groupIndex, serieIndex, itemIndex);
            });
        }
    }
    /** @description Shows all items of a chart serie.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    */
    showSerie(groupIndex, serieIndex) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.showSerie(groupIndex, serieIndex);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.showSerie(groupIndex, serieIndex);
            });
        }
    }
    /** @description Sets the camera position to its position during the initialization.
    */
    setDefaultPosition() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.setDefaultPosition();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.setDefaultPosition();
            });
        }
    }
    /** @description Sets the camera mode. Different camera modes change the control actions of the mouse. Available modes are 'zoom', 'pan' and 'default'.
    * @param {string} mode. Camera mode.
    */
    setCameraMode(mode) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.setCameraMode(mode);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.setCameraMode(mode);
            });
        }
    }
    /** @description Sets the camera position.
    * @param {number} x. X coordinate.
    * @param {number} y. Y coordinate.
    * @param {number} z. Z coordinate.
    * @param {boolean} animation?. Animation Enabled
    */
    setCameraPosition(x, y, z, animation) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.setCameraPosition(x, y, z, animation);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.setCameraPosition(x, y, z, animation);
            });
        }
    }
    /** @description Sets the camera zoom.
    * @param {number} level. Zoom level.
    * @param {boolean} animation?. Animation Enabled
    */
    setCameraZoom(level, animation) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.setCameraZoom(level, animation);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.setCameraZoom(level, animation);
            });
        }
    }
    /** @description Unelects a chart item.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    * @param {number} itemIndex?. Item (data point) index.
    */
    unselectItem(groupIndex, serieIndex, itemIndex) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.unselectItem(groupIndex, serieIndex, itemIndex);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.unselectItem(groupIndex, serieIndex, itemIndex);
            });
        }
    }
    /** @description Updates the values of the chart series without full refresh of the entire chart. The method should be used for animation of frequently changing values.
    */
    update() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.update();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.update();
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
        that.eventHandlers['itemClickHandler'] = (event) => { that.onItemClick.emit(event); };
        that.nativeElement.addEventListener('itemClick', that.eventHandlers['itemClickHandler']);
        that.eventHandlers['showHandler'] = (event) => { that.onShow.emit(event); };
        that.nativeElement.addEventListener('show', that.eventHandlers['showHandler']);
        that.eventHandlers['hideHandler'] = (event) => { that.onHide.emit(event); };
        that.nativeElement.addEventListener('hide', that.eventHandlers['hideHandler']);
        that.eventHandlers['selectHandler'] = (event) => { that.onSelect.emit(event); };
        that.nativeElement.addEventListener('select', that.eventHandlers['selectHandler']);
        that.eventHandlers['unselectHandler'] = (event) => { that.onUnselect.emit(event); };
        that.nativeElement.addEventListener('unselect', that.eventHandlers['unselectHandler']);
        that.eventHandlers['rangeSelectionChangedHandler'] = (event) => { that.onRangeSelectionChanged.emit(event); };
        that.nativeElement.addEventListener('rangeSelectionChanged', that.eventHandlers['rangeSelectionChangedHandler']);
        that.eventHandlers['rangeSelectionChangingHandler'] = (event) => { that.onRangeSelectionChanging.emit(event); };
        that.nativeElement.addEventListener('rangeSelectionChanging', that.eventHandlers['rangeSelectionChangingHandler']);
        that.eventHandlers['refreshBeginHandler'] = (event) => { that.onRefreshBegin.emit(event); };
        that.nativeElement.addEventListener('refreshBegin', that.eventHandlers['refreshBeginHandler']);
        that.eventHandlers['refreshEndHandler'] = (event) => { that.onRefreshEnd.emit(event); };
        that.nativeElement.addEventListener('refreshEnd', that.eventHandlers['refreshEndHandler']);
        that.eventHandlers['resizeBeginHandler'] = (event) => { that.onResizeBegin.emit(event); };
        that.nativeElement.addEventListener('resizeBegin', that.eventHandlers['resizeBeginHandler']);
        that.eventHandlers['resizeEndHandler'] = (event) => { that.onResizeEnd.emit(event); };
        that.nativeElement.addEventListener('resizeEnd', that.eventHandlers['resizeEndHandler']);
    }
    /** @description Remove event listeners. */
    unlisten() {
        const that = this;
        if (that.eventHandlers['itemClickHandler']) {
            that.nativeElement.removeEventListener('itemClick', that.eventHandlers['itemClickHandler']);
        }
        if (that.eventHandlers['showHandler']) {
            that.nativeElement.removeEventListener('show', that.eventHandlers['showHandler']);
        }
        if (that.eventHandlers['hideHandler']) {
            that.nativeElement.removeEventListener('hide', that.eventHandlers['hideHandler']);
        }
        if (that.eventHandlers['selectHandler']) {
            that.nativeElement.removeEventListener('select', that.eventHandlers['selectHandler']);
        }
        if (that.eventHandlers['unselectHandler']) {
            that.nativeElement.removeEventListener('unselect', that.eventHandlers['unselectHandler']);
        }
        if (that.eventHandlers['rangeSelectionChangedHandler']) {
            that.nativeElement.removeEventListener('rangeSelectionChanged', that.eventHandlers['rangeSelectionChangedHandler']);
        }
        if (that.eventHandlers['rangeSelectionChangingHandler']) {
            that.nativeElement.removeEventListener('rangeSelectionChanging', that.eventHandlers['rangeSelectionChangingHandler']);
        }
        if (that.eventHandlers['refreshBeginHandler']) {
            that.nativeElement.removeEventListener('refreshBegin', that.eventHandlers['refreshBeginHandler']);
        }
        if (that.eventHandlers['refreshEndHandler']) {
            that.nativeElement.removeEventListener('refreshEnd', that.eventHandlers['refreshEndHandler']);
        }
        if (that.eventHandlers['resizeBeginHandler']) {
            that.nativeElement.removeEventListener('resizeBegin', that.eventHandlers['resizeBeginHandler']);
        }
        if (that.eventHandlers['resizeEndHandler']) {
            that.nativeElement.removeEventListener('resizeEnd', that.eventHandlers['resizeEndHandler']);
        }
    }
};
ThreeDChartComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], ThreeDChartComponent.prototype, "animation", null);
__decorate([
    Input()
], ThreeDChartComponent.prototype, "animationSpeed", null);
__decorate([
    Input()
], ThreeDChartComponent.prototype, "autoRotate", null);
__decorate([
    Input()
], ThreeDChartComponent.prototype, "autoRotateSpeed", null);
__decorate([
    Input()
], ThreeDChartComponent.prototype, "backgroundColor", null);
__decorate([
    Input()
], ThreeDChartComponent.prototype, "backgroundGradient", null);
__decorate([
    Input()
], ThreeDChartComponent.prototype, "backgroundImage", null);
__decorate([
    Input()
], ThreeDChartComponent.prototype, "backgroundTexture", null);
__decorate([
    Input()
], ThreeDChartComponent.prototype, "cameraPosition", null);
__decorate([
    Input()
], ThreeDChartComponent.prototype, "cameraZoom", null);
__decorate([
    Input()
], ThreeDChartComponent.prototype, "caption", null);
__decorate([
    Input()
], ThreeDChartComponent.prototype, "colorScheme", null);
__decorate([
    Input()
], ThreeDChartComponent.prototype, "controlsSettings", null);
__decorate([
    Input()
], ThreeDChartComponent.prototype, "customModels", null);
__decorate([
    Input()
], ThreeDChartComponent.prototype, "dataSource", null);
__decorate([
    Input()
], ThreeDChartComponent.prototype, "description", null);
__decorate([
    Input()
], ThreeDChartComponent.prototype, "disabled", null);
__decorate([
    Input()
], ThreeDChartComponent.prototype, "enableControlsToolbar", null);
__decorate([
    Input()
], ThreeDChartComponent.prototype, "controlsToolbarItems", null);
__decorate([
    Input()
], ThreeDChartComponent.prototype, "gridOptions", null);
__decorate([
    Input()
], ThreeDChartComponent.prototype, "legendIndex", null);
__decorate([
    Input()
], ThreeDChartComponent.prototype, "legendLayout", null);
__decorate([
    Input()
], ThreeDChartComponent.prototype, "lightColor", null);
__decorate([
    Input()
], ThreeDChartComponent.prototype, "locale", null);
__decorate([
    Input()
], ThreeDChartComponent.prototype, "messages", null);
__decorate([
    Input()
], ThreeDChartComponent.prototype, "rightToLeft", null);
__decorate([
    Input()
], ThreeDChartComponent.prototype, "selectionMode", null);
__decorate([
    Input()
], ThreeDChartComponent.prototype, "seriesGroups", null);
__decorate([
    Input()
], ThreeDChartComponent.prototype, "showConnectionLines", null);
__decorate([
    Input()
], ThreeDChartComponent.prototype, "showLegend", null);
__decorate([
    Input()
], ThreeDChartComponent.prototype, "showLegendTable", null);
__decorate([
    Input()
], ThreeDChartComponent.prototype, "showToolTips", null);
__decorate([
    Input()
], ThreeDChartComponent.prototype, "titlePadding", null);
__decorate([
    Input()
], ThreeDChartComponent.prototype, "toolTipFormatFunction", null);
__decorate([
    Input()
], ThreeDChartComponent.prototype, "toolTipFormatSettings", null);
__decorate([
    Input()
], ThreeDChartComponent.prototype, "toolTipLineColor", null);
__decorate([
    Input()
], ThreeDChartComponent.prototype, "valueAxis", null);
__decorate([
    Input()
], ThreeDChartComponent.prototype, "xAxis", null);
__decorate([
    Input()
], ThreeDChartComponent.prototype, "zAxis", null);
__decorate([
    Output()
], ThreeDChartComponent.prototype, "onItemClick", void 0);
__decorate([
    Output()
], ThreeDChartComponent.prototype, "onShow", void 0);
__decorate([
    Output()
], ThreeDChartComponent.prototype, "onHide", void 0);
__decorate([
    Output()
], ThreeDChartComponent.prototype, "onSelect", void 0);
__decorate([
    Output()
], ThreeDChartComponent.prototype, "onUnselect", void 0);
__decorate([
    Output()
], ThreeDChartComponent.prototype, "onRangeSelectionChanged", void 0);
__decorate([
    Output()
], ThreeDChartComponent.prototype, "onRangeSelectionChanging", void 0);
__decorate([
    Output()
], ThreeDChartComponent.prototype, "onRefreshBegin", void 0);
__decorate([
    Output()
], ThreeDChartComponent.prototype, "onRefreshEnd", void 0);
__decorate([
    Output()
], ThreeDChartComponent.prototype, "onResizeBegin", void 0);
__decorate([
    Output()
], ThreeDChartComponent.prototype, "onResizeEnd", void 0);
ThreeDChartComponent = __decorate([
    Directive({
        exportAs: 'smart-3d-chart', selector: 'smart-3d-chart, [smart-3d-chart]'
    })
], ThreeDChartComponent);

let ThreeDChartModule = class ThreeDChartModule {
};
ThreeDChartModule = __decorate([
    NgModule({
        declarations: [ThreeDChartComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        exports: [ThreeDChartComponent]
    })
], ThreeDChartModule);

/**
 * Generated bundle index. Do not edit.
 */

export { Smart, ThreeDChartComponent, ThreeDChartModule, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-threedchart.js.map
