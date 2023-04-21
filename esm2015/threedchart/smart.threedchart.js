import * as tslib_1 from "tslib";
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Smart } from './smart.element';
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
tslib_1.__decorate([
    Input()
], ThreeDChartComponent.prototype, "animation", null);
tslib_1.__decorate([
    Input()
], ThreeDChartComponent.prototype, "animationSpeed", null);
tslib_1.__decorate([
    Input()
], ThreeDChartComponent.prototype, "autoRotate", null);
tslib_1.__decorate([
    Input()
], ThreeDChartComponent.prototype, "autoRotateSpeed", null);
tslib_1.__decorate([
    Input()
], ThreeDChartComponent.prototype, "backgroundColor", null);
tslib_1.__decorate([
    Input()
], ThreeDChartComponent.prototype, "backgroundGradient", null);
tslib_1.__decorate([
    Input()
], ThreeDChartComponent.prototype, "backgroundImage", null);
tslib_1.__decorate([
    Input()
], ThreeDChartComponent.prototype, "backgroundTexture", null);
tslib_1.__decorate([
    Input()
], ThreeDChartComponent.prototype, "cameraPosition", null);
tslib_1.__decorate([
    Input()
], ThreeDChartComponent.prototype, "cameraZoom", null);
tslib_1.__decorate([
    Input()
], ThreeDChartComponent.prototype, "caption", null);
tslib_1.__decorate([
    Input()
], ThreeDChartComponent.prototype, "colorScheme", null);
tslib_1.__decorate([
    Input()
], ThreeDChartComponent.prototype, "controlsSettings", null);
tslib_1.__decorate([
    Input()
], ThreeDChartComponent.prototype, "customModels", null);
tslib_1.__decorate([
    Input()
], ThreeDChartComponent.prototype, "dataSource", null);
tslib_1.__decorate([
    Input()
], ThreeDChartComponent.prototype, "description", null);
tslib_1.__decorate([
    Input()
], ThreeDChartComponent.prototype, "disabled", null);
tslib_1.__decorate([
    Input()
], ThreeDChartComponent.prototype, "enableControlsToolbar", null);
tslib_1.__decorate([
    Input()
], ThreeDChartComponent.prototype, "controlsToolbarItems", null);
tslib_1.__decorate([
    Input()
], ThreeDChartComponent.prototype, "gridOptions", null);
tslib_1.__decorate([
    Input()
], ThreeDChartComponent.prototype, "legendIndex", null);
tslib_1.__decorate([
    Input()
], ThreeDChartComponent.prototype, "legendLayout", null);
tslib_1.__decorate([
    Input()
], ThreeDChartComponent.prototype, "lightColor", null);
tslib_1.__decorate([
    Input()
], ThreeDChartComponent.prototype, "locale", null);
tslib_1.__decorate([
    Input()
], ThreeDChartComponent.prototype, "messages", null);
tslib_1.__decorate([
    Input()
], ThreeDChartComponent.prototype, "rightToLeft", null);
tslib_1.__decorate([
    Input()
], ThreeDChartComponent.prototype, "selectionMode", null);
tslib_1.__decorate([
    Input()
], ThreeDChartComponent.prototype, "seriesGroups", null);
tslib_1.__decorate([
    Input()
], ThreeDChartComponent.prototype, "showConnectionLines", null);
tslib_1.__decorate([
    Input()
], ThreeDChartComponent.prototype, "showLegend", null);
tslib_1.__decorate([
    Input()
], ThreeDChartComponent.prototype, "showLegendTable", null);
tslib_1.__decorate([
    Input()
], ThreeDChartComponent.prototype, "showToolTips", null);
tslib_1.__decorate([
    Input()
], ThreeDChartComponent.prototype, "titlePadding", null);
tslib_1.__decorate([
    Input()
], ThreeDChartComponent.prototype, "toolTipFormatFunction", null);
tslib_1.__decorate([
    Input()
], ThreeDChartComponent.prototype, "toolTipFormatSettings", null);
tslib_1.__decorate([
    Input()
], ThreeDChartComponent.prototype, "toolTipLineColor", null);
tslib_1.__decorate([
    Input()
], ThreeDChartComponent.prototype, "valueAxis", null);
tslib_1.__decorate([
    Input()
], ThreeDChartComponent.prototype, "xAxis", null);
tslib_1.__decorate([
    Input()
], ThreeDChartComponent.prototype, "zAxis", null);
tslib_1.__decorate([
    Output()
], ThreeDChartComponent.prototype, "onItemClick", void 0);
tslib_1.__decorate([
    Output()
], ThreeDChartComponent.prototype, "onShow", void 0);
tslib_1.__decorate([
    Output()
], ThreeDChartComponent.prototype, "onHide", void 0);
tslib_1.__decorate([
    Output()
], ThreeDChartComponent.prototype, "onSelect", void 0);
tslib_1.__decorate([
    Output()
], ThreeDChartComponent.prototype, "onUnselect", void 0);
tslib_1.__decorate([
    Output()
], ThreeDChartComponent.prototype, "onRangeSelectionChanged", void 0);
tslib_1.__decorate([
    Output()
], ThreeDChartComponent.prototype, "onRangeSelectionChanging", void 0);
tslib_1.__decorate([
    Output()
], ThreeDChartComponent.prototype, "onRefreshBegin", void 0);
tslib_1.__decorate([
    Output()
], ThreeDChartComponent.prototype, "onRefreshEnd", void 0);
tslib_1.__decorate([
    Output()
], ThreeDChartComponent.prototype, "onResizeBegin", void 0);
tslib_1.__decorate([
    Output()
], ThreeDChartComponent.prototype, "onResizeEnd", void 0);
ThreeDChartComponent = tslib_1.__decorate([
    Directive({
        exportAs: 'smart-3d-chart', selector: 'smart-3d-chart, [smart-3d-chart]'
    })
], ThreeDChartComponent);
export { ThreeDChartComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQudGhyZWVkY2hhcnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zbWFydC13ZWJjb21wb25lbnRzLWFuZ3VsYXIvdGhyZWVkY2hhcnQvIiwic291cmNlcyI6WyJzbWFydC50aHJlZWRjaGFydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUosT0FBTyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVyRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFReEMsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBcUIsU0FBUSxXQUFXO0lBQ3BELFlBQVksR0FBNEI7UUFDdkMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBSUosa0JBQWEsR0FBVSxFQUFFLENBQUM7UUE0V2xDOzs7OztVQUtFO1FBQ1EsZ0JBQVcsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV0RTs7Ozs7VUFLRTtRQUNRLFdBQU0sR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVqRTs7Ozs7VUFLRTtRQUNRLFdBQU0sR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVqRTs7Ozs7VUFLRTtRQUNRLGFBQVEsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVuRTs7Ozs7VUFLRTtRQUNRLGVBQVUsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVyRTs7OztVQUlFO1FBQ1EsNEJBQXVCLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFbEY7Ozs7OztVQU1FO1FBQ1EsNkJBQXdCLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFbkY7OENBQ3NDO1FBQzVC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SUFBVCxNQUFNLEVBQUU7b0RBQXdEO0FBUXZEO0lBQVQsTUFBTSxFQUFFO3NEQUEwRDtBQVF6RDtJQUFULE1BQU0sRUFBRTt3REFBNEQ7QUFPM0Q7SUFBVCxNQUFNLEVBQUU7cUVBQXlFO0FBU3hFO0lBQVQsTUFBTSxFQUFFO3NFQUEwRTtBQUl6RTtJQUFULE1BQU0sRUFBRTs0REFBZ0U7QUFJL0Q7SUFBVCxNQUFNLEVBQUU7MERBQThEO0FBSTdEO0lBQVQsTUFBTSxFQUFFOzJEQUErRDtBQUk5RDtJQUFULE1BQU0sRUFBRTt5REFBNkQ7QUF4YjFELG9CQUFvQjtJQUpoQyxTQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLGtDQUFrQztLQUN4RSxDQUFDO0dBRVcsb0JBQW9CLENBOGdDaEM7U0E5Z0NZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRocmVlRENoYXJ0IH0gZnJvbSAnLi8uLi9pbmRleCc7XG5pbXBvcnQgeyBBbmltYXRpb24sIFRocmVlRENoYXJ0Q29sb3JTY2hlbWUsIFRocmVlRENoYXJ0TGVnZW5kSW5kZXgsIFRocmVlRENoYXJ0U2VsZWN0aW9uTW9kZSwgVGhyZWVEQ2hhcnRTeW1ib2xUeXBlLCBUaHJlZURDaGFydFR5cGUsIFRocmVlRENoYXJ0UmFuZ2VTZWxlY3RvclNlcmllVHlwZSwgVGhyZWVEQ2hhcnRYQXhpc1R5cGUsIFRocmVlRENoYXJ0Q2FtZXJhUG9zaXRpb24sIFRocmVlRENoYXJ0U2VyaWVzR3JvdXAsIFRocmVlRENoYXJ0QmFuZCwgVGhyZWVEQ2hhcnRGb3JtYXRTZXR0aW5ncywgVGhyZWVEQ2hhcnRTZXJpZXNHcm91cFNlcmllLCBUaHJlZURDaGFydExhYmVscywgVGhyZWVEQ2hhcnRPZmZzZXQsIFRocmVlRENoYXJ0UGFkZGluZywgVGhyZWVEQ2hhcnRWYWx1ZUF4aXMsIFRocmVlRENoYXJ0TGluZXMsIFRocmVlRENoYXJ0WEF4aXMsIFRocmVlRENoYXJ0UmFuZ2VTZWxlY3RvciwgVGhyZWVEQ2hhcnRaQXhpcywgRWxlbWVudFJlbmRlck1vZGV9IGZyb20gJy4vLi4vaW5kZXgnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBEaXJlY3RpdmUsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBTaW1wbGVDaGFuZ2VzLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFzZUVsZW1lbnQsIFNtYXJ0IH0gZnJvbSAnLi9zbWFydC5lbGVtZW50JztcbmV4cG9ydCB7IEFuaW1hdGlvbiwgVGhyZWVEQ2hhcnRDb2xvclNjaGVtZSwgVGhyZWVEQ2hhcnRMZWdlbmRJbmRleCwgVGhyZWVEQ2hhcnRTZWxlY3Rpb25Nb2RlLCBUaHJlZURDaGFydFN5bWJvbFR5cGUsIFRocmVlRENoYXJ0VHlwZSwgVGhyZWVEQ2hhcnRSYW5nZVNlbGVjdG9yU2VyaWVUeXBlLCBUaHJlZURDaGFydFhBeGlzVHlwZSwgVGhyZWVEQ2hhcnRDYW1lcmFQb3NpdGlvbiwgVGhyZWVEQ2hhcnRTZXJpZXNHcm91cCwgVGhyZWVEQ2hhcnRCYW5kLCBUaHJlZURDaGFydEZvcm1hdFNldHRpbmdzLCBUaHJlZURDaGFydFNlcmllc0dyb3VwU2VyaWUsIFRocmVlRENoYXJ0TGFiZWxzLCBUaHJlZURDaGFydE9mZnNldCwgVGhyZWVEQ2hhcnRQYWRkaW5nLCBUaHJlZURDaGFydFZhbHVlQXhpcywgVGhyZWVEQ2hhcnRMaW5lcywgVGhyZWVEQ2hhcnRYQXhpcywgVGhyZWVEQ2hhcnRSYW5nZVNlbGVjdG9yLCBUaHJlZURDaGFydFpBeGlzLCBFbGVtZW50UmVuZGVyTW9kZX0gZnJvbSAnLi8uLi9pbmRleCc7XG5leHBvcnQgeyBTbWFydCB9IGZyb20gJy4vc21hcnQuZWxlbWVudCc7XG5leHBvcnQgeyBUaHJlZURDaGFydCB9IGZyb20gJy4vLi4vaW5kZXgnO1xuXG5cbkBEaXJlY3RpdmUoe1xuXHRleHBvcnRBczogJ3NtYXJ0LTNkLWNoYXJ0JyxcdHNlbGVjdG9yOiAnc21hcnQtM2QtY2hhcnQsIFtzbWFydC0zZC1jaGFydF0nXG59KVxuXG5leHBvcnQgY2xhc3MgVGhyZWVEQ2hhcnRDb21wb25lbnQgZXh0ZW5kcyBCYXNlRWxlbWVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuXHRjb25zdHJ1Y3RvcihyZWY6IEVsZW1lbnRSZWY8VGhyZWVEQ2hhcnQ+KSB7XG5cdFx0c3VwZXIocmVmKTtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPSByZWYubmF0aXZlRWxlbWVudCBhcyBUaHJlZURDaGFydDtcblx0fVxuXG5cdHByaXZhdGUgZXZlbnRIYW5kbGVyczogYW55W10gPSBbXTtcblxuXHRwdWJsaWMgbmF0aXZlRWxlbWVudDogVGhyZWVEQ2hhcnQ7XG5cdC8qKiBAZGVzY3JpcHRpb24gQ3JlYXRlcyB0aGUgY29tcG9uZW50IG9uIGRlbWFuZC5cblx0ICogQHBhcmFtIHByb3BlcnRpZXMgQW4gb3B0aW9uYWwgb2JqZWN0IG9mIHByb3BlcnRpZXMsIHdoaWNoIHdpbGwgYmUgYWRkZWQgdG8gdGhlIHRlbXBsYXRlIGJpbmRlZCBvbmVzLlxuXHQgKi9cblx0cHVibGljIGNyZWF0ZUNvbXBvbmVudChwcm9wZXJ0aWVzID0ge30pOiBhbnkge1xuICAgIFx0dGhpcy5uYXRpdmVFbGVtZW50ID0gPFRocmVlRENoYXJ0PmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NtYXJ0LTNkLWNoYXJ0Jyk7XG5cdFx0Zm9yIChsZXQgcHJvcGVydHlOYW1lIGluIHByb3BlcnRpZXMpIHsgXG4gXHRcdFx0dGhpcy5uYXRpdmVFbGVtZW50W3Byb3BlcnR5TmFtZV0gPSBwcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV07XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQ7XG5cdH1cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIGFuaW1hdGlvbiBtb2RlLiBBbmltYXRpb24gaXMgZGlzYWJsZWQgd2hlbiB0aGUgcHJvcGVydHkgaXMgc2V0IHRvICdub25lJy4gKi9cblx0QElucHV0KClcblx0Z2V0IGFuaW1hdGlvbigpOiBBbmltYXRpb24gfCBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYW5pbWF0aW9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBhbmltYXRpb24odmFsdWU6IEFuaW1hdGlvbiB8IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hbmltYXRpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgcmF0ZSBvZiB0aGUgYW5pbWF0aW9uLiBUaGUgZGVmYXVsdCBhbmltYXRpb24gcmF0ZSBpcyAxICovXG5cdEBJbnB1dCgpXG5cdGdldCBhbmltYXRpb25TcGVlZCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYW5pbWF0aW9uU3BlZWQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGFuaW1hdGlvblNwZWVkKHZhbHVlOiBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYW5pbWF0aW9uU3BlZWQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyB3aGV0aGVyIHRoZSBjaGFydCB3aWxsIHJvdGF0ZSBhdXRvbWF0aWNhbGx5LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgYXV0b1JvdGF0ZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9Sb3RhdGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGF1dG9Sb3RhdGUodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYXV0b1JvdGF0ZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBzcGVlZCBvZiB0aGUgYXV0b21hdGljIHJvdGF0aW9uLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgYXV0b1JvdGF0ZVNwZWVkKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hdXRvUm90YXRlU3BlZWQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGF1dG9Sb3RhdGVTcGVlZCh2YWx1ZTogbnVtYmVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9Sb3RhdGVTcGVlZCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBjaGFydCdzIGJhY2tncm91bmQgY29sb3IuIEZvciBleGFtcGxlOiAnI0RERkZFOCcgKi9cblx0QElucHV0KClcblx0Z2V0IGJhY2tncm91bmRDb2xvcigpOiBzdHJpbmcgfCBudWxsIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmJhY2tncm91bmRDb2xvciA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYmFja2dyb3VuZENvbG9yKHZhbHVlOiBzdHJpbmcgfCBudWxsKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmJhY2tncm91bmRDb2xvciA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBjaGFydCdzIGJhY2tncm91bmQgdG8gYSBzdGF0aWMgbGluZWFyIGdyYWRpZW50LiBUaGUgcHJvcGVydHkgbXVzdCBiZSBzZXQgdG8gYW4gQXJyYXkgb2YgU3RyaW5ncyBpbiB0aGUgZm9ybWF0OiAnb2Zmc2V0LCBjb2xvcicgKi9cblx0QElucHV0KClcblx0Z2V0IGJhY2tncm91bmRHcmFkaWVudCgpOiBhbnlbXSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5iYWNrZ3JvdW5kR3JhZGllbnQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGJhY2tncm91bmRHcmFkaWVudCh2YWx1ZTogYW55W10pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYmFja2dyb3VuZEdyYWRpZW50ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgdGhlIGNoYXJ0J3MgYmFja2dyb3VuZCB0byBhIHN0YXRpYyBpbWFnZS4gRm9yIGV4YW1wbGU6ICdodHRwczovL3d3dy5odG1sZWxlbWVudHMuY29tL2RlbW9zL2ltYWdlcy9zdGFycy5qcGcnICovXG5cdEBJbnB1dCgpXG5cdGdldCBiYWNrZ3JvdW5kSW1hZ2UoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmJhY2tncm91bmRJbWFnZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYmFja2dyb3VuZEltYWdlKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYmFja2dyb3VuZEltYWdlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgdGhlIGNoYXJ0J3MgYmFja2dyb3VuZCB0byBhIGR5bmFtaWMgYmFja2dyb3VuZCBpbWFnZSB3aGljaCByb3RhdGVzIHdpdGggdGhlIGNhbWVyYS4gVGhlIHByb3BlcnR5IG11c3QgYmUgc2V0IGFuIEFycmF5IG9mIDYgaW1hZ2VzLiBBbGwgaW1hZ2VzIG11c3QgaGF2ZSBhc3BlY3QgcmF0aW8gMToxICovXG5cdEBJbnB1dCgpXG5cdGdldCBiYWNrZ3JvdW5kVGV4dHVyZSgpOiBhbnlbXSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5iYWNrZ3JvdW5kVGV4dHVyZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYmFja2dyb3VuZFRleHR1cmUodmFsdWU6IGFueVtdKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmJhY2tncm91bmRUZXh0dXJlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgdGhlIGNhbWVyYSdzIHBvc2l0aW9uLiBUaGUgcHJvcGVydHkgbXVzdCBiZSBzZXQgdG8gYW4ge3gsIHksIHp9IG9iamVjdC4gKi9cblx0QElucHV0KClcblx0Z2V0IGNhbWVyYVBvc2l0aW9uKCk6IFRocmVlRENoYXJ0Q2FtZXJhUG9zaXRpb24ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY2FtZXJhUG9zaXRpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGNhbWVyYVBvc2l0aW9uKHZhbHVlOiBUaHJlZURDaGFydENhbWVyYVBvc2l0aW9uKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNhbWVyYVBvc2l0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgdGhlIGludGlhbCBjYW1lcmEgem9vbS4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgMSAqL1xuXHRASW5wdXQoKVxuXHRnZXQgY2FtZXJhWm9vbSgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY2FtZXJhWm9vbSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgY2FtZXJhWm9vbSh2YWx1ZTogbnVtYmVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNhbWVyYVpvb20gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyB0aGUgY2FwdGlvbiAodGl0bGUpIG9mIHRoZSBjaGFydC4gKi9cblx0QElucHV0KClcblx0Z2V0IGNhcHRpb24oKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNhcHRpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGNhcHRpb24odmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jYXB0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgdGhlIGNoYXJ0J3MgY29sb3IgcGFsbGV0ZS4ganF4Q2hhcnQgc3VwcHBvcnRzIDMyIGNvbG9yIHNjaGVtZXMgZnJvbSAnc2NoZW1lMDEnIHRvICdzY2hlbWUzMicuICovXG5cdEBJbnB1dCgpXG5cdGdldCBjb2xvclNjaGVtZSgpOiBUaHJlZURDaGFydENvbG9yU2NoZW1lIHwgc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbG9yU2NoZW1lIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjb2xvclNjaGVtZSh2YWx1ZTogVGhyZWVEQ2hhcnRDb2xvclNjaGVtZSB8IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb2xvclNjaGVtZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBjaGFydCdzIGNvbnRyb2xzIHNldHRpbmdzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgY29udHJvbHNTZXR0aW5ncygpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29udHJvbHNTZXR0aW5ncyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgY29udHJvbHNTZXR0aW5ncyh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbnRyb2xzU2V0dGluZ3MgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQWxsb3dzIHN1YnN0aXR1dGluZyBkZWZhdWx0IGl0ZW1zIHdpdGggY3VzdG9tIDNEIE9iamVjdHMuIFRoZSBwcm9wZXJ0eSBtdXN0IGJlIHNldCB0byBhbiBBcnJheSBvZiBPYmplY3RzIGluIHRoZSBmb3JtYXQ6IHsgZ3JvdXBJbmRleCwgc2VyaWVJbmRleCwgaXRlbUluZGV4LCBtb2RlbFVybCB9ICovXG5cdEBJbnB1dCgpXG5cdGdldCBjdXN0b21Nb2RlbHMoKTogYW55W10ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY3VzdG9tTW9kZWxzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjdXN0b21Nb2RlbHModmFsdWU6IGFueVtdKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmN1c3RvbU1vZGVscyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBjaGFydCdzIGRhdGEgc291cmNlLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGF0YVNvdXJjZSgpOiBhbnlbXSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kYXRhU291cmNlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkYXRhU291cmNlKHZhbHVlOiBhbnlbXSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kYXRhU291cmNlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgdGhlIGRlc2NyaXB0aW9uIHRleHQgb2YgdGhlIGNoYXJ0LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGVzY3JpcHRpb24oKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRlc2NyaXB0aW9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkZXNjcmlwdGlvbih2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRlc2NyaXB0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEVuYWJsZXMgb3IgZGlzYWJsZXMgdGhlIGNoYXJ0LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlZCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZWQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyB3aGV0aGVyIHRoZSBjaGFydCdzIHRvb2xiYXIgaXMgZW5hYmxlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IGVuYWJsZUNvbnRyb2xzVG9vbGJhcigpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmVuYWJsZUNvbnRyb2xzVG9vbGJhciA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZW5hYmxlQ29udHJvbHNUb29sYmFyKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmVuYWJsZUNvbnRyb2xzVG9vbGJhciA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiAgKi9cblx0QElucHV0KClcblx0Z2V0IGNvbnRyb2xzVG9vbGJhckl0ZW1zKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb250cm9sc1Rvb2xiYXJJdGVtcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgY29udHJvbHNUb29sYmFySXRlbXModmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb250cm9sc1Rvb2xiYXJJdGVtcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBjaGFydCdzIGdyaWQgb3B0aW9ucy4gKi9cblx0QElucHV0KClcblx0Z2V0IGdyaWRPcHRpb25zKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ncmlkT3B0aW9ucyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZ3JpZE9wdGlvbnModmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ncmlkT3B0aW9ucyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHdoZXRoZXIgdGhlIGxlZ2VuZCB3aWxsIGJlIGNyZWF0ZWQgYmFzZWQgb24gdGhlIGNoYXJ0J3Mgc2VyaWVzIG9yIHNlcmllIGdyb3Vwcy4gXCJhdXRvXCIgLSB0aGUgbGVnZW5kIGluZGV4IHdpbGwgY2hhbmdlIGRlcGVuZGluZyBvbiB0aGUgQ2hhcnQgdHlwZSAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbGVnZW5kSW5kZXgoKTogVGhyZWVEQ2hhcnRMZWdlbmRJbmRleCB8IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sZWdlbmRJbmRleCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbGVnZW5kSW5kZXgodmFsdWU6IFRocmVlRENoYXJ0TGVnZW5kSW5kZXggfCBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubGVnZW5kSW5kZXggPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyB0aGUgbGVnZW5kJ3MgbGF5b3V0LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbGVnZW5kTGF5b3V0KCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sZWdlbmRMYXlvdXQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGxlZ2VuZExheW91dCh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxlZ2VuZExheW91dCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBsaWdodCBjb2xvciBvZiB0aGUgM0QgU2NlbmUuICovXG5cdEBJbnB1dCgpXG5cdGdldCBsaWdodENvbG9yKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5saWdodENvbG9yIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBsaWdodENvbG9yKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubGlnaHRDb2xvciA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIGxvY2FsZS4gVXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZSBwcm9wZXJ0eSBtZXNzYWdlcy4gKi9cblx0QElucHV0KClcblx0Z2V0IGxvY2FsZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubG9jYWxlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBsb2NhbGUodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sb2NhbGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIGFuIG9iamVjdCBzcGVjaWZ5aW5nIHN0cmluZ3MgdXNlZCBpbiB0aGUgd2lkZ2V0IHRoYXQgY2FuIGJlIGxvY2FsaXplZC4gVXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZSBwcm9wZXJ0eSBsb2NhbGUuICovXG5cdEBJbnB1dCgpXG5cdGdldCBtZXNzYWdlcygpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubWVzc2FnZXMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG1lc3NhZ2VzKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubWVzc2FnZXMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIGEgdmFsdWUgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBDaGFydCdzIGxheW91dCBpcyBtaXJyb3JlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IHJpZ2h0VG9MZWZ0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmlnaHRUb0xlZnQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHJpZ2h0VG9MZWZ0KHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJpZ2h0VG9MZWZ0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIHNlbGVjdGlvbiBtb2RlLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc2VsZWN0aW9uTW9kZSgpOiBUaHJlZURDaGFydFNlbGVjdGlvbk1vZGUgfCBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uTW9kZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc2VsZWN0aW9uTW9kZSh2YWx1ZTogVGhyZWVEQ2hhcnRTZWxlY3Rpb25Nb2RlIHwgc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdGlvbk1vZGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhlIHNlcmllc0dyb3VwcyBwcm9wZXJ0eSBpcyB1c2VkIHRvIGRlc2NyaWJlIGFsbCBzZXJpZXMgZGlzcGxheWVkIG9uIHRoZSBjaGFydC4ganF4Q2hhcnQgc3VwcG9ydHMgbXVsdGlwbGUgc2VyaWVzIG9mIGRpZmZlcmVudCB0eXBlcyBhbmQgc2VyaWVzIGdyb3VwaW5nLiBFYWNoIHNlcmllcyBncm91cCBtYXkgaGF2ZSBpdHMgb3duIFZhbHVlIEF4aXMgKFktYXhpcykgd2hpY2ggYWxsb3dzIHlvdSB0byBoYXZlIHZhbHVlcyB3aXRoIGRpZmZlcmVudCBzY2FsZXMgZGlzcGxheWVkIG9uIHRoZSBzYW1lIGNoYXJ0IGF0IHRoZSBzYW1lIHRpbWUuIEl0IGFsc28gYWxsb3dzIHlvdSB0byBkaXNwbGF5IG11bHRpcGxlIHNlcmllcyB0eXBlcyB0b2dldGhlciBvbiB0aGUgc2FtZSBjaGFydC4gRm9yIGV4YW1wbGUsIHlvdSBjYW4gZGlzcGxheSBhbGwgc2VyaWVzIGluIG9uZSBncm91cCBhcyBsaW5lcyBhbmQgdGhlIHNlcmllcyBpbiBhIHNlY29uZCBncm91cCBhcyBjb2x1bW5zLiBzZXJpZXNHcm91cHMgaXMgYW4gYXJyYXkgb2Ygb2JqZWN0cyB3aGVyZSBlYWNoIG9iamVjdCByZXByZXNlbnRzIG9uZSBncm91cC4gKi9cblx0QElucHV0KClcblx0Z2V0IHNlcmllc0dyb3VwcygpOiBUaHJlZURDaGFydFNlcmllc0dyb3VwW10ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VyaWVzR3JvdXBzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzZXJpZXNHcm91cHModmFsdWU6IFRocmVlRENoYXJ0U2VyaWVzR3JvdXBbXSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zZXJpZXNHcm91cHMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB3aGV0aGVyIHRvIHNob3cgZ3JpZCBjb25uZWN0aW5nIGxpbmVzIHdoZW4gYSBjaGFydCBpdGVtIGlzIGhvdmVyZWQgb3Zlci4gKi9cblx0QElucHV0KClcblx0Z2V0IHNob3dDb25uZWN0aW9uTGluZXMoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zaG93Q29ubmVjdGlvbkxpbmVzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzaG93Q29ubmVjdGlvbkxpbmVzKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNob3dDb25uZWN0aW9uTGluZXMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB3aGV0aGVyIHRvIHNob3cgb3IgaGlkZSB0aGUgY2hhcnQgc2VyaWVzIGxlZ2VuZC4gKi9cblx0QElucHV0KClcblx0Z2V0IHNob3dMZWdlbmQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zaG93TGVnZW5kIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzaG93TGVnZW5kKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNob3dMZWdlbmQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB3aGV0aGVyIHRvIHNob3cgb3IgaGlkZSB0aGUgY2hhcnQgc2VyaWVzIGxlZ2VuZCB0YWJsZS4gKi9cblx0QElucHV0KClcblx0Z2V0IHNob3dMZWdlbmRUYWJsZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNob3dMZWdlbmRUYWJsZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc2hvd0xlZ2VuZFRhYmxlKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNob3dMZWdlbmRUYWJsZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFbmFibGVzIG9yIGRpc2FibGVzIHRoZSBjaGFydCB0b29sdGlwcy4gKi9cblx0QElucHV0KClcblx0Z2V0IHNob3dUb29sVGlwcygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNob3dUb29sVGlwcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc2hvd1Rvb2xUaXBzKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNob3dUb29sVGlwcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBwYWRkaW5nIG9mIHRoZSBjaGFydCdzIHRpdGxlIChjYXB0aW9uKS4gKi9cblx0QElucHV0KClcblx0Z2V0IHRpdGxlUGFkZGluZygpOiBUaHJlZURDaGFydFBhZGRpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGl0bGVQYWRkaW5nIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0aXRsZVBhZGRpbmcodmFsdWU6IFRocmVlRENoYXJ0UGFkZGluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50aXRsZVBhZGRpbmcgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVG9vbHRpcCBkYXRhIGZvcm1hdHRpbmcgc2V0dGluZ3MgZm9yIHRoZSB2YWx1ZXMgaW4gdGhlIHNlcmllLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdG9vbFRpcEZvcm1hdEZ1bmN0aW9uKCk6IHsodmFsdWU/OiBhbnksIGluZGV4PzogbnVtYmVyLCBzZXJpZXM/OiBhbnkpOiBzdHJpbmd9IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRvb2xUaXBGb3JtYXRGdW5jdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdG9vbFRpcEZvcm1hdEZ1bmN0aW9uKHZhbHVlOiB7KHZhbHVlPzogYW55LCBpbmRleD86IG51bWJlciwgc2VyaWVzPzogYW55KTogc3RyaW5nfSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50b29sVGlwRm9ybWF0RnVuY3Rpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVG9vbHRpcCBsaW5lIGNvbG9yLiBCeSBkZWZhdWx0IGl0IGlzIHNldCB0byB0aGUgaG92ZXJlZCBpdGVtJ3MgY29sb3IgKi9cblx0QElucHV0KClcblx0Z2V0IHRvb2xUaXBGb3JtYXRTZXR0aW5ncygpOiBUaHJlZURDaGFydEZvcm1hdFNldHRpbmdzIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRvb2xUaXBGb3JtYXRTZXR0aW5ncyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdG9vbFRpcEZvcm1hdFNldHRpbmdzKHZhbHVlOiBUaHJlZURDaGFydEZvcm1hdFNldHRpbmdzKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRvb2xUaXBGb3JtYXRTZXR0aW5ncyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBbiBvYmplY3Qgd2l0aCBzZXR0aW5ncyBhYm91dCB0aGUgQ2hhcnQncyB5LWF4aXMgKHZhbHVlIGF4aXMpLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdG9vbFRpcExpbmVDb2xvcigpOiBzdHJpbmcgfCBudWxsIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRvb2xUaXBMaW5lQ29sb3IgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRvb2xUaXBMaW5lQ29sb3IodmFsdWU6IHN0cmluZyB8IG51bGwpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudG9vbFRpcExpbmVDb2xvciA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBDaGFydCdzIHhBeGlzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdmFsdWVBeGlzKCk6IFRocmVlRENoYXJ0VmFsdWVBeGlzIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnZhbHVlQXhpcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdmFsdWVBeGlzKHZhbHVlOiBUaHJlZURDaGFydFZhbHVlQXhpcykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC52YWx1ZUF4aXMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyB0aGUgQ2hhcnQncyB6QXhpcy4gKi9cblx0QElucHV0KClcblx0Z2V0IHhBeGlzKCk6IFRocmVlRENoYXJ0WEF4aXMge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQueEF4aXMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHhBeGlzKHZhbHVlOiBUaHJlZURDaGFydFhBeGlzKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnhBeGlzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIHVuZGVmaW5lZCAqL1xuXHRASW5wdXQoKVxuXHRnZXQgekF4aXMoKTogVGhyZWVEQ2hhcnRaQXhpcyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC56QXhpcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgekF4aXModmFsdWU6IFRocmVlRENoYXJ0WkF4aXMpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuekF4aXMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhlIGV2ZW50IGlzIHJhaXNlZCB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiBhIGNoYXJ0IGVsZW1lbnQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0aXRlbUluZGV4LCBcdHNlcmllSW5kZXgsIFx0Z3JvdXBJbmRleClcblx0KiAgIGl0ZW1JbmRleCAtIFRoZSBpdGVtIGluZGV4IG9mIHRoZSBpdGVtLlxuXHQqICAgc2VyaWVJbmRleCAtIFRoZSBzZXJpZSBpbmRleCBvZiB0aGUgaXRlbS5cblx0KiAgIGdyb3VwSW5kZXggLSBUaGUgZ3JvdXAgaW5kZXggb2YgdGhlIGl0ZW0uXG5cdCovXG5cdEBPdXRwdXQoKSBvbkl0ZW1DbGljazogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoZSBldmVudCBpcyByYWlzZWQgd2hlbiBhIGNoYXJ0IGVsZW1lbnQgaXMgc2hvd24uXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0aXRlbUluZGV4LCBcdHNlcmllSW5kZXgsIFx0Z3JvdXBJbmRleClcblx0KiAgIGl0ZW1JbmRleCAtIFRoZSBpdGVtIGluZGV4IG9mIHRoZSBpdGVtLlxuXHQqICAgc2VyaWVJbmRleCAtIFRoZSBzZXJpZSBpbmRleCBvZiB0aGUgaXRlbS5cblx0KiAgIGdyb3VwSW5kZXggLSBUaGUgZ3JvdXAgaW5kZXggb2YgdGhlIGl0ZW0uXG5cdCovXG5cdEBPdXRwdXQoKSBvblNob3c6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGUgZXZlbnQgaXMgcmFpc2VkIHdoZW4gYSBjaGFydCBlbGVtZW50IGlzIGhpZGRlbi5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRpdGVtSW5kZXgsIFx0c2VyaWVJbmRleCwgXHRncm91cEluZGV4KVxuXHQqICAgaXRlbUluZGV4IC0gVGhlIGl0ZW0gaW5kZXggb2YgdGhlIGl0ZW0uXG5cdCogICBzZXJpZUluZGV4IC0gVGhlIHNlcmllIGluZGV4IG9mIHRoZSBpdGVtLlxuXHQqICAgZ3JvdXBJbmRleCAtIFRoZSBncm91cCBpbmRleCBvZiB0aGUgaXRlbS5cblx0Ki9cblx0QE91dHB1dCgpIG9uSGlkZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoZSBldmVudCBpcyByYWlzZWQgd2hlbiBhIGNoYXJ0IGVsZW1lbnQgaXMgc2VsZWN0ZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0aXRlbUluZGV4LCBcdHNlcmllSW5kZXgsIFx0Z3JvdXBJbmRleClcblx0KiAgIGl0ZW1JbmRleCAtIFRoZSBpdGVtIGluZGV4IG9mIHRoZSBpdGVtLlxuXHQqICAgc2VyaWVJbmRleCAtIFRoZSBzZXJpZSBpbmRleCBvZiB0aGUgaXRlbS5cblx0KiAgIGdyb3VwSW5kZXggLSBUaGUgZ3JvdXAgaW5kZXggb2YgdGhlIGl0ZW0uXG5cdCovXG5cdEBPdXRwdXQoKSBvblNlbGVjdDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoZSBldmVudCBpcyByYWlzZWQgd2hlbiBhIGNoYXJ0IGVsZW1lbnQgaXMgdW5zZWxlY3RlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRpdGVtSW5kZXgsIFx0c2VyaWVJbmRleCwgXHRncm91cEluZGV4KVxuXHQqICAgaXRlbUluZGV4IC0gVGhlIGl0ZW0gaW5kZXggb2YgdGhlIGl0ZW0uXG5cdCogICBzZXJpZUluZGV4IC0gVGhlIHNlcmllIGluZGV4IG9mIHRoZSBpdGVtLlxuXHQqICAgZ3JvdXBJbmRleCAtIFRoZSBncm91cCBpbmRleCBvZiB0aGUgaXRlbS5cblx0Ki9cblx0QE91dHB1dCgpIG9uVW5zZWxlY3Q6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGUgZXZlbnQgaXMgcmFpc2VkIGFmdGVyIHRoZSBjaGFydCdzIHJhbmdlIHNlbGVjdG9yIHBvc2l0aW9uIGNoYW5nZXMgYW5kIGFmdGVyIHRoZSBjaGFydCBlbmRzIHJlbmRlcmluZy5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRtaW5WYWx1ZSwgXHRtYXhWYWx1ZSlcblx0KiAgIG1pblZhbHVlIC0gVGhlIHN0YXJ0IHZhbHVlIG9mIHRoZSByYW5nZSBzZWxlY3Rvci5cblx0KiAgIG1heFZhbHVlIC0gVGhlIGVuZCB2YWx1ZSBvZiB0aGUgcmFuZ2Ugc2VsZWN0b3IuXG5cdCovXG5cdEBPdXRwdXQoKSBvblJhbmdlU2VsZWN0aW9uQ2hhbmdlZDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoZSBldmVudCBpcyByYWlzZWQgd2hlbiB0aGUgY2hhcnQncyByYW5nZSBzZWxlY3RvciBwb3NpdGlvbiBjaGFuZ2VzIGFuZCBiZWZvcmUgdGhlIGNoYXJ0IHN0YXJ0cyByZW5kZXJpbmcuIFRoZSBldmVudCBjYW4gYmUgZGVmYXVsdCBwcmV2ZW50ZWQgdG8gY2FuY2VsIHRoZSByYW5nZSBzZWxlY3Rpb24gY2hhbmdlLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdG1pblZhbHVlLCBcdG1heFZhbHVlLCBcdG9sZE1pblZhbHVlLCBcdG9sZE1heFZhbHVlKVxuXHQqICAgbWluVmFsdWUgLSBUaGUgc3RhcnQgdmFsdWUgb2YgdGhlIHJhbmdlIHNlbGVjdG9yLlxuXHQqICAgbWF4VmFsdWUgLSBUaGUgZW5kIHZhbHVlIG9mIHRoZSByYW5nZSBzZWxlY3Rvci5cblx0KiAgIG9sZE1pblZhbHVlIC0gVGhlIHByZXZpb3VzIHN0YXJ0IHZhbHVlIG9mIHRoZSByYW5nZSBzZWxlY3Rvci5cblx0KiAgIG9sZE1heFZhbHVlIC0gVGhlIHByZXZpb3VzIGVuZCB2YWx1ZSBvZiB0aGUgcmFuZ2Ugc2VsZWN0b3IuXG5cdCovXG5cdEBPdXRwdXQoKSBvblJhbmdlU2VsZWN0aW9uQ2hhbmdpbmc6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGUgZXZlbnQgaXMgcmFpc2VkIHdoZW4gdGhlIGNoYXJ0IGJlZ2lucyByZW5kZXJpbmcuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHQqL1xuXHRAT3V0cHV0KCkgb25SZWZyZXNoQmVnaW46IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGUgZXZlbnQgaXMgcmFpc2VkIHdoZW4gdGhlIGNoYXJ0IGZpbmlzaGVzIHJlbmRlcmluZy5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvblJlZnJlc2hFbmQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGUgZXZlbnQgaXMgcmFpc2VkIHdoZW4gdGhlIGNoYXJ0IGJlZ2lucyByZXNpemluZy5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvblJlc2l6ZUJlZ2luOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhlIGV2ZW50IGlzIHJhaXNlZCB3aGVuIHRoZSBjaGFydCBmaW5pc2hlcyByZXNpemluZy5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvblJlc2l6ZUVuZDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIEFkZHMgYSBuZXcgY29sb3Igc2hlbWUuIElmIGEgc2NoZW1lIHdpdGggdGhlIHNhbWUgbmFtZSBhbHJlYWR5IGV4aXN0cywgdGhlIG1ldGhvZCB3aWxsIHVwZGF0ZSBpdHMgY29sb3JzLiBcblx0KiBAcGFyYW0ge3N0cmluZ30gc2NoZW1lTmFtZS4gVGhlIG5hbWUgb2YgdGhlIGN1c3RvbSBjb2xvciBzY2hlbWUuXG5cdCogQHBhcmFtIHthbnlbXX0gY29sb3JzQXJyYXkuIEFuIGFycmF5IG9mIGNvbG9yIHZhbHVlcy5cblx0Ki9cbiAgICBwdWJsaWMgYWRkQ29sb3JTY2hlbWUoc2NoZW1lTmFtZTogc3RyaW5nLCBjb2xvcnNBcnJheTogYW55W10pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYWRkQ29sb3JTY2hlbWUoc2NoZW1lTmFtZSwgY29sb3JzQXJyYXkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmFkZENvbG9yU2NoZW1lKHNjaGVtZU5hbWUsIGNvbG9yc0FycmF5KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQmVnaW5zIGFuIHVwZGF0ZSBvZiB0aGUgY2hhcnQuIFRoZSBjaGFydCB3aWxsIG5vdCBiZSByZW5kZXJlZCB1bnRpbCB0aGUgZW5kVXBkYXRlIG1ldGhvZCBpcyBjYWxsZWQuIFxuXHQqL1xuICAgIHB1YmxpYyBiZWdpblVwZGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYmVnaW5VcGRhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5iZWdpblVwZGF0ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFbmRzIGFuIHVwZGF0ZSBvZiB0aGUgY2hhcnQuIFRoZSBjaGFydCB3aWxsIGJlIHJlbmRlcmVkIGFmdGVyIHRoZSBlbmRVcGRhdGUgbWV0aG9kIGlzIGNhbGxlZC4gXG5cdCogQHBhcmFtIHtib29sZWFufSByZWZyZXNoPy4gSWYgc2V0IHRvIHRydWUsIHRoZSBjaGFydCB3aWxsIGNvbXBsZXRlIGEgZnVsbCByZWZyZXNoLlxuXHQqL1xuICAgIHB1YmxpYyBlbmRVcGRhdGUocmVmcmVzaD86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZW5kVXBkYXRlKHJlZnJlc2gpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmVuZFVwZGF0ZShyZWZyZXNoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0aGUgY29sb3JzIG9mIGEgY29sb3Igc2NoZW1lIGJ5IG5hbWUuIElmIHRoZSBzY2hlbWUgZG9lc24ndCBleGlzdCB0aGUgbWV0aG9kIHJldHVybnMgdW5kZWZpbmVkLiBcblx0KiBAcGFyYW0ge3N0cmluZ30gc2NoZW1lTmFtZS4gVGhlIG5hbWUgb2YgdGhlIGNvbG9yIHNjaGVtZS5cblx0KiBAcmV0dXJucyB7YW55W119XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRDb2xvclNjaGVtZShzY2hlbWVOYW1lKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldENvbG9yU2NoZW1lKHNjaGVtZU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gR2V0cyB0aGUgaXRlbSB3aXRoIHRoZSBzcGVjaWZpZWQgaW5kZXhlcy4gXG5cdCogQHBhcmFtIHtudW1iZXIgfCBudWxsfSBncm91cEluZGV4Py4gU2VyaWVzIGdyb3VwIGluZGV4LlxuXHQqIEBwYXJhbSB7bnVtYmVyIHwgbnVsbH0gc2VyaWVJbmRleD8uIFNlcmllcyBpbmRleC5cblx0KiBAcGFyYW0ge251bWJlciB8IG51bGx9IGl0ZW1JbmRleD8uIEl0ZW0gKGRhdGEgcG9pbnQpIGluZGV4LlxuXHQqIEByZXR1cm5zIHthbnl9XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRJdGVtQnlJbmRleGVzKGdyb3VwSW5kZXg/LCBzZXJpZUluZGV4PywgaXRlbUluZGV4Pyk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRJdGVtQnlJbmRleGVzKGdyb3VwSW5kZXgsIHNlcmllSW5kZXgsIGl0ZW1JbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBHZXRzIGFuIGFycmF0IG9mIHRoZSBpdGVtcyB3aXRoIHRoZSBzcGVjaWZpZWQgaW5kZXhlcy4gTGVhdmluZyBhbiBpbmRleCBudWxsIHdpbGwgcmV0dXJuIGFsbCBpdGVtcyB0aGF0IG1hdGNoIHRoZSBvdGhlciBpbmRleGVzLiBcblx0KiBAcGFyYW0ge251bWJlciB8IG51bGx9IGdyb3VwSW5kZXg/LiBTZXJpZXMgZ3JvdXAgaW5kZXguXG5cdCogQHBhcmFtIHtudW1iZXIgfCBudWxsfSBzZXJpZUluZGV4Py4gU2VyaWVzIGluZGV4LlxuXHQqIEBwYXJhbSB7bnVtYmVyIHwgbnVsbH0gaXRlbUluZGV4Py4gSXRlbSAoZGF0YSBwb2ludCkgaW5kZXguXG5cdCogQHJldHVybnMge2FueX1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldEl0ZW1zQnlJbmRleGVzKGdyb3VwSW5kZXg/LCBzZXJpZUluZGV4PywgaXRlbUluZGV4Pyk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRJdGVtc0J5SW5kZXhlcyhncm91cEluZGV4LCBzZXJpZUluZGV4LCBpdGVtSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gR2V0cyB0aGUgaW5kZXhlcyBvZiB0aGUgaGlkZGVuIHNlcmllcy4gXG5cdCogQHJldHVybnMge3sgZ3JvdXBJbmRleDogbnVtYmVyLCBzZXJpZUluZGV4OiBudW1iZXIsIGl0ZW1JbmRleDogbnVtYmVyIH1bXX1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldEhpZGRlbigpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0SGlkZGVuKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBHZXRzIHRoZSBzZWxlY3RlZCBpdGVtcy4gXG5cdCogQHJldHVybnMge2FueVtdfVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0U2VsZWN0aW9uKCk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEdldHMgdGhlIHJlbmRlcmVkIHZhbHVlcyBvZiB0aGUgdmFsdWVBeGlzIGxhYmVscy4gXG5cdCogQHJldHVybnMge2FueX1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldFZhbHVlQXhpc0xhYmVscygpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0VmFsdWVBeGlzTGFiZWxzKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBHZXRzIHRoZSByZW5kZXJlZCB2YWx1ZXMgb2YgdGhlIHhBeGlzIGxhYmVscy4gXG5cdCogQHJldHVybnMge2FueX1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldFhBeGlzTGFiZWxzKCk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRYQXhpc0xhYmVscygpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gR2V0cyB0aGUgcmVuZGVyZWQgdmFsdWVzIG9mIHRoZSB6QXhpcyBsYWJlbHMuIFxuXHQqIEByZXR1cm5zIHthbnl9XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRaQXhpc0xhYmVscygpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0WkF4aXNMYWJlbHMoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEhpZGVzIGFsbCBpdGVtcyBvZiBhIGNoYXJ0IGdyb3VwLiBcblx0KiBAcGFyYW0ge251bWJlcn0gZ3JvdXBJbmRleC4gU2VyaWVzIGdyb3VwIGluZGV4LlxuXHQqL1xuICAgIHB1YmxpYyBoaWRlR3JvdXAoZ3JvdXBJbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmhpZGVHcm91cChncm91cEluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5oaWRlR3JvdXAoZ3JvdXBJbmRleCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEhpZGVzIGEgY2hhcnQgaXRlbS4gXG5cdCogQHBhcmFtIHtudW1iZXJ9IGdyb3VwSW5kZXguIFNlcmllcyBncm91cCBpbmRleC5cblx0KiBAcGFyYW0ge251bWJlcn0gc2VyaWVJbmRleC4gU2VyaWVzIGluZGV4LlxuXHQqIEBwYXJhbSB7bnVtYmVyfSBpdGVtSW5kZXg/LiBJdGVtIChkYXRhIHBvaW50KSBpbmRleC5cblx0Ki9cbiAgICBwdWJsaWMgaGlkZUl0ZW0oZ3JvdXBJbmRleDogbnVtYmVyLCBzZXJpZUluZGV4OiBudW1iZXIsIGl0ZW1JbmRleD86IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5oaWRlSXRlbShncm91cEluZGV4LCBzZXJpZUluZGV4LCBpdGVtSW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmhpZGVJdGVtKGdyb3VwSW5kZXgsIHNlcmllSW5kZXgsIGl0ZW1JbmRleCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEhpZGVzIGFsbCBpdGVtcyBvZiBhIGNoYXJ0IHNlcmllLiBcblx0KiBAcGFyYW0ge251bWJlcn0gZ3JvdXBJbmRleC4gU2VyaWVzIGdyb3VwIGluZGV4LlxuXHQqIEBwYXJhbSB7bnVtYmVyfSBzZXJpZUluZGV4LiBTZXJpZXMgaW5kZXguXG5cdCovXG4gICAgcHVibGljIGhpZGVTZXJpZShncm91cEluZGV4OiBudW1iZXIsIHNlcmllSW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5oaWRlU2VyaWUoZ3JvdXBJbmRleCwgc2VyaWVJbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaGlkZVNlcmllKGdyb3VwSW5kZXgsIHNlcmllSW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZWZyZXNoZXMgdGhlIGNvbnRlbnQgb2YgdGhlIGNoYXJ0IGVsZW1lbnQgYWZ0ZXIgYSBwcm9wZXJ0eSBvciBkYXRhIHVwZGF0ZS4gXG5cdCovXG4gICAgcHVibGljIHJlZnJlc2goKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlZnJlc2goKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZWZyZXNoKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJlbW92ZXMgYW4gZXhpc3RpbmcgY29sb3Igc2NoZW1lLiBJZiB0aGUgc2NoZW1lIGRvZXMgbm90IGV4aXN0LCB0aGUgbWV0aG9kIGhhcyBubyBlZmZlY3QuIFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBzY2hlbWVOYW1lLiBUaGUgbmFtZSBvZiB0aGUgY3VzdG9tIGNvbG9yIHNjaGVtZS5cblx0Ki9cbiAgICBwdWJsaWMgcmVtb3ZlQ29sb3JTY2hlbWUoc2NoZW1lTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlbW92ZUNvbG9yU2NoZW1lKHNjaGVtZU5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlbW92ZUNvbG9yU2NoZW1lKHNjaGVtZU5hbWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFeHBvcnRzIHRoZSBjaGFydCdzIGNvbnRlbnQgYXMgSlBFRyBpbWFnZS4gXG5cdCogQHBhcmFtIHtzdHJpbmd9IGZpbGVOYW1lPy4gRmlsZSBuYW1lLlxuXHQqIEBwYXJhbSB7Ym9vbGVhbn0gaW5jbHVkZUxlZ2VuZD8uIFNldHMgd2hldGhlciB0aGUgbGVnZW5kIHdpbGwgYmUgcGFydCBvZiB0aGUgc2F2ZWQgZmlsZS5cblx0KiBAcGFyYW0ge2Jvb2xlYW59IGluY2x1ZGVDYXB0aW9uPy4gU2V0cyB3aGV0aGVyIHRoZSBjYXB0aW9uIHdpbGwgYmUgcGFydCBvZiB0aGUgc2F2ZWQgZmlsZS5cblx0Ki9cbiAgICBwdWJsaWMgc2F2ZUFzSlBFRyhmaWxlTmFtZT86IHN0cmluZywgaW5jbHVkZUxlZ2VuZD86IGJvb2xlYW4sIGluY2x1ZGVDYXB0aW9uPzogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zYXZlQXNKUEVHKGZpbGVOYW1lLCBpbmNsdWRlTGVnZW5kLCBpbmNsdWRlQ2FwdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2F2ZUFzSlBFRyhmaWxlTmFtZSwgaW5jbHVkZUxlZ2VuZCwgaW5jbHVkZUNhcHRpb24pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFeHBvcnRzIHRoZSBjaGFydCdzIGNvbnRlbnQgYXMgUE5HIGltYWdlLiBcblx0KiBAcGFyYW0ge3N0cmluZ30gZmlsZU5hbWU/LiBGaWxlIG5hbWUuXG5cdCogQHBhcmFtIHtib29sZWFufSBpbmNsdWRlTGVnZW5kPy4gU2V0cyB3aGV0aGVyIHRoZSBsZWdlbmQgd2lsbCBiZSBwYXJ0IG9mIHRoZSBzYXZlZCBmaWxlLlxuXHQqIEBwYXJhbSB7Ym9vbGVhbn0gaW5jbHVkZUNhcHRpb24/LiBTZXRzIHdoZXRoZXIgdGhlIGNhcHRpb24gd2lsbCBiZSBwYXJ0IG9mIHRoZSBzYXZlZCBmaWxlLlxuXHQqL1xuICAgIHB1YmxpYyBzYXZlQXNQTkcoZmlsZU5hbWU/OiBzdHJpbmcsIGluY2x1ZGVMZWdlbmQ/OiBib29sZWFuLCBpbmNsdWRlQ2FwdGlvbj86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2F2ZUFzUE5HKGZpbGVOYW1lLCBpbmNsdWRlTGVnZW5kLCBpbmNsdWRlQ2FwdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2F2ZUFzUE5HKGZpbGVOYW1lLCBpbmNsdWRlTGVnZW5kLCBpbmNsdWRlQ2FwdGlvbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEV4cG9ydHMgdGhlIGNoYXJ0J3MgY29udGVudCBhcyBQREYgZmlsZS4gXG5cdCogQHBhcmFtIHtzdHJpbmd9IGZpbGVOYW1lPy4gRmlsZSBuYW1lLlxuXHQqIEBwYXJhbSB7Ym9vbGVhbn0gaW5jbHVkZUxlZ2VuZD8uIFNldHMgd2hldGhlciB0aGUgbGVnZW5kIHdpbGwgYmUgcGFydCBvZiB0aGUgc2F2ZWQgZmlsZS5cblx0KiBAcGFyYW0ge2Jvb2xlYW59IGluY2x1ZGVDYXB0aW9uPy4gU2V0cyB3aGV0aGVyIHRoZSBjYXB0aW9uIHdpbGwgYmUgcGFydCBvZiB0aGUgc2F2ZWQgZmlsZS5cblx0Ki9cbiAgICBwdWJsaWMgc2F2ZUFzUERGKGZpbGVOYW1lPzogc3RyaW5nLCBpbmNsdWRlTGVnZW5kPzogYm9vbGVhbiwgaW5jbHVkZUNhcHRpb24/OiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNhdmVBc1BERihmaWxlTmFtZSwgaW5jbHVkZUxlZ2VuZCwgaW5jbHVkZUNhcHRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNhdmVBc1BERihmaWxlTmFtZSwgaW5jbHVkZUxlZ2VuZCwgaW5jbHVkZUNhcHRpb24pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZWxlY3RzIGEgY2hhcnQgaXRlbS4gSWYgc2VsZWN0aW9uTW9kZSBpcyAnb25lJywgdGhlIHByZXZpb3VzIGl0ZW0gd2lsbCBiZSB1bnNlbGVjdGVkLiBcblx0KiBAcGFyYW0ge251bWJlcn0gZ3JvdXBJbmRleC4gU2VyaWVzIGdyb3VwIGluZGV4LlxuXHQqIEBwYXJhbSB7bnVtYmVyfSBzZXJpZUluZGV4LiBTZXJpZXMgaW5kZXguXG5cdCogQHBhcmFtIHtudW1iZXJ9IGl0ZW1JbmRleD8uIEl0ZW0gKGRhdGEgcG9pbnQpIGluZGV4LlxuXHQqL1xuICAgIHB1YmxpYyBzZWxlY3RJdGVtKGdyb3VwSW5kZXg6IG51bWJlciwgc2VyaWVJbmRleDogbnVtYmVyLCBpdGVtSW5kZXg/OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0SXRlbShncm91cEluZGV4LCBzZXJpZUluZGV4LCBpdGVtSW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdEl0ZW0oZ3JvdXBJbmRleCwgc2VyaWVJbmRleCwgaXRlbUluZGV4KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2hvd3MgYWxsIGl0ZW1zIG9mIGEgY2hhcnQgZ3JvdXAuIFxuXHQqIEBwYXJhbSB7bnVtYmVyfSBncm91cEluZGV4LiBTZXJpZXMgZ3JvdXAgaW5kZXguXG5cdCovXG4gICAgcHVibGljIHNob3dHcm91cChncm91cEluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2hvd0dyb3VwKGdyb3VwSW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNob3dHcm91cChncm91cEluZGV4KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2hvd3MgYSBjaGFydCBpdGVtLiBcblx0KiBAcGFyYW0ge251bWJlcn0gZ3JvdXBJbmRleC4gU2VyaWVzIGdyb3VwIGluZGV4LlxuXHQqIEBwYXJhbSB7bnVtYmVyfSBzZXJpZUluZGV4LiBTZXJpZXMgaW5kZXguXG5cdCogQHBhcmFtIHtudW1iZXJ9IGl0ZW1JbmRleD8uIEl0ZW0gKGRhdGEgcG9pbnQpIGluZGV4LlxuXHQqL1xuICAgIHB1YmxpYyBzaG93SXRlbShncm91cEluZGV4OiBudW1iZXIsIHNlcmllSW5kZXg6IG51bWJlciwgaXRlbUluZGV4PzogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNob3dJdGVtKGdyb3VwSW5kZXgsIHNlcmllSW5kZXgsIGl0ZW1JbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2hvd0l0ZW0oZ3JvdXBJbmRleCwgc2VyaWVJbmRleCwgaXRlbUluZGV4KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2hvd3MgYWxsIGl0ZW1zIG9mIGEgY2hhcnQgc2VyaWUuIFxuXHQqIEBwYXJhbSB7bnVtYmVyfSBncm91cEluZGV4LiBTZXJpZXMgZ3JvdXAgaW5kZXguXG5cdCogQHBhcmFtIHtudW1iZXJ9IHNlcmllSW5kZXguIFNlcmllcyBpbmRleC5cblx0Ki9cbiAgICBwdWJsaWMgc2hvd1NlcmllKGdyb3VwSW5kZXg6IG51bWJlciwgc2VyaWVJbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNob3dTZXJpZShncm91cEluZGV4LCBzZXJpZUluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zaG93U2VyaWUoZ3JvdXBJbmRleCwgc2VyaWVJbmRleCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgdGhlIGNhbWVyYSBwb3NpdGlvbiB0byBpdHMgcG9zaXRpb24gZHVyaW5nIHRoZSBpbml0aWFsaXphdGlvbi4gXG5cdCovXG4gICAgcHVibGljIHNldERlZmF1bHRQb3NpdGlvbigpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2V0RGVmYXVsdFBvc2l0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2V0RGVmYXVsdFBvc2l0aW9uKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgdGhlIGNhbWVyYSBtb2RlLiBEaWZmZXJlbnQgY2FtZXJhIG1vZGVzIGNoYW5nZSB0aGUgY29udHJvbCBhY3Rpb25zIG9mIHRoZSBtb3VzZS4gQXZhaWxhYmxlIG1vZGVzIGFyZSAnem9vbScsICdwYW4nIGFuZCAnZGVmYXVsdCcuIFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBtb2RlLiBDYW1lcmEgbW9kZS5cblx0Ki9cbiAgICBwdWJsaWMgc2V0Q2FtZXJhTW9kZShtb2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2V0Q2FtZXJhTW9kZShtb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zZXRDYW1lcmFNb2RlKG1vZGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBjYW1lcmEgcG9zaXRpb24uIFxuXHQqIEBwYXJhbSB7bnVtYmVyfSB4LiBYIGNvb3JkaW5hdGUuXG5cdCogQHBhcmFtIHtudW1iZXJ9IHkuIFkgY29vcmRpbmF0ZS5cblx0KiBAcGFyYW0ge251bWJlcn0gei4gWiBjb29yZGluYXRlLlxuXHQqIEBwYXJhbSB7Ym9vbGVhbn0gYW5pbWF0aW9uPy4gQW5pbWF0aW9uIEVuYWJsZWRcblx0Ki9cbiAgICBwdWJsaWMgc2V0Q2FtZXJhUG9zaXRpb24oeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlciwgYW5pbWF0aW9uPzogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zZXRDYW1lcmFQb3NpdGlvbih4LCB5LCB6LCBhbmltYXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNldENhbWVyYVBvc2l0aW9uKHgsIHksIHosIGFuaW1hdGlvbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgdGhlIGNhbWVyYSB6b29tLiBcblx0KiBAcGFyYW0ge251bWJlcn0gbGV2ZWwuIFpvb20gbGV2ZWwuXG5cdCogQHBhcmFtIHtib29sZWFufSBhbmltYXRpb24/LiBBbmltYXRpb24gRW5hYmxlZFxuXHQqL1xuICAgIHB1YmxpYyBzZXRDYW1lcmFab29tKGxldmVsOiBudW1iZXIsIGFuaW1hdGlvbj86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2V0Q2FtZXJhWm9vbShsZXZlbCwgYW5pbWF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zZXRDYW1lcmFab29tKGxldmVsLCBhbmltYXRpb24pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBVbmVsZWN0cyBhIGNoYXJ0IGl0ZW0uIFxuXHQqIEBwYXJhbSB7bnVtYmVyfSBncm91cEluZGV4LiBTZXJpZXMgZ3JvdXAgaW5kZXguXG5cdCogQHBhcmFtIHtudW1iZXJ9IHNlcmllSW5kZXguIFNlcmllcyBpbmRleC5cblx0KiBAcGFyYW0ge251bWJlcn0gaXRlbUluZGV4Py4gSXRlbSAoZGF0YSBwb2ludCkgaW5kZXguXG5cdCovXG4gICAgcHVibGljIHVuc2VsZWN0SXRlbShncm91cEluZGV4OiBudW1iZXIsIHNlcmllSW5kZXg6IG51bWJlciwgaXRlbUluZGV4PzogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnVuc2VsZWN0SXRlbShncm91cEluZGV4LCBzZXJpZUluZGV4LCBpdGVtSW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnVuc2VsZWN0SXRlbShncm91cEluZGV4LCBzZXJpZUluZGV4LCBpdGVtSW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBVcGRhdGVzIHRoZSB2YWx1ZXMgb2YgdGhlIGNoYXJ0IHNlcmllcyB3aXRob3V0IGZ1bGwgcmVmcmVzaCBvZiB0aGUgZW50aXJlIGNoYXJ0LiBUaGUgbWV0aG9kIHNob3VsZCBiZSB1c2VkIGZvciBhbmltYXRpb24gb2YgZnJlcXVlbnRseSBjaGFuZ2luZyB2YWx1ZXMuIFxuXHQqL1xuICAgIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnVwZGF0ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXHRnZXQgaXNSZW5kZXJlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQgOiBmYWxzZTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHR9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICBjb25zdCB0aGF0ID0gdGhpcztcblxuICAgICAgdGhhdC5vbkNyZWF0ZS5lbWl0KHRoYXQubmF0aXZlRWxlbWVudCk7XG5cblx0XHRTbWFydC5SZW5kZXIoKTtcblxuXHRcdHRoaXMubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzbWFydC1hbmd1bGFyJyk7XG5cblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHsgdGhhdC5vblJlYWR5LmVtaXQodGhhdC5uYXRpdmVFbGVtZW50KTsgfSk7XG5cdFx0dGhpcy5saXN0ZW4oKTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMudW5saXN0ZW4oKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblx0XHRpZiAodGhpcy5uYXRpdmVFbGVtZW50ICYmIHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG5cdFx0XHRmb3IgKGNvbnN0IHByb3BOYW1lIGluIGNoYW5nZXMpIHtcblx0XHRcdFx0aWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG5cdFx0XHRcdFx0dGhpcy5uYXRpdmVFbGVtZW50W3Byb3BOYW1lXSA9IGNoYW5nZXNbcHJvcE5hbWVdLmN1cnJlbnRWYWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQWRkIGV2ZW50IGxpc3RlbmVycy4gKi9cblx0cHJpdmF0ZSBsaXN0ZW4oKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snaXRlbUNsaWNrSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uSXRlbUNsaWNrLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2l0ZW1DbGljaycsIHRoYXQuZXZlbnRIYW5kbGVyc1snaXRlbUNsaWNrSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snc2hvd0hhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblNob3cuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2hvdycsIHRoYXQuZXZlbnRIYW5kbGVyc1snc2hvd0hhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2hpZGVIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25IaWRlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2hpZGUnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2hpZGVIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydzZWxlY3RIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25TZWxlY3QuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2VsZWN0JywgdGhhdC5ldmVudEhhbmRsZXJzWydzZWxlY3RIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWyd1bnNlbGVjdEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblVuc2VsZWN0LmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Vuc2VsZWN0JywgdGhhdC5ldmVudEhhbmRsZXJzWyd1bnNlbGVjdEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3JhbmdlU2VsZWN0aW9uQ2hhbmdlZEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblJhbmdlU2VsZWN0aW9uQ2hhbmdlZC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdyYW5nZVNlbGVjdGlvbkNoYW5nZWQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3JhbmdlU2VsZWN0aW9uQ2hhbmdlZEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3JhbmdlU2VsZWN0aW9uQ2hhbmdpbmdIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25SYW5nZVNlbGVjdGlvbkNoYW5naW5nLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3JhbmdlU2VsZWN0aW9uQ2hhbmdpbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3JhbmdlU2VsZWN0aW9uQ2hhbmdpbmdIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydyZWZyZXNoQmVnaW5IYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25SZWZyZXNoQmVnaW4uZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncmVmcmVzaEJlZ2luJywgdGhhdC5ldmVudEhhbmRsZXJzWydyZWZyZXNoQmVnaW5IYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydyZWZyZXNoRW5kSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uUmVmcmVzaEVuZC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdyZWZyZXNoRW5kJywgdGhhdC5ldmVudEhhbmRsZXJzWydyZWZyZXNoRW5kSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1sncmVzaXplQmVnaW5IYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25SZXNpemVCZWdpbi5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdyZXNpemVCZWdpbicsIHRoYXQuZXZlbnRIYW5kbGVyc1sncmVzaXplQmVnaW5IYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydyZXNpemVFbmRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25SZXNpemVFbmQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplRW5kJywgdGhhdC5ldmVudEhhbmRsZXJzWydyZXNpemVFbmRIYW5kbGVyJ10pO1xuXG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJlbW92ZSBldmVudCBsaXN0ZW5lcnMuICovXG5cdHByaXZhdGUgdW5saXN0ZW4oKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2l0ZW1DbGlja0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2l0ZW1DbGljaycsIHRoYXQuZXZlbnRIYW5kbGVyc1snaXRlbUNsaWNrSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydzaG93SGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2hvdycsIHRoYXQuZXZlbnRIYW5kbGVyc1snc2hvd0hhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snaGlkZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2hpZGUnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2hpZGVIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3NlbGVjdEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3NlbGVjdCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snc2VsZWN0SGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWyd1bnNlbGVjdEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Vuc2VsZWN0JywgdGhhdC5ldmVudEhhbmRsZXJzWyd1bnNlbGVjdEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1sncmFuZ2VTZWxlY3Rpb25DaGFuZ2VkSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmFuZ2VTZWxlY3Rpb25DaGFuZ2VkJywgdGhhdC5ldmVudEhhbmRsZXJzWydyYW5nZVNlbGVjdGlvbkNoYW5nZWRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3JhbmdlU2VsZWN0aW9uQ2hhbmdpbmdIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdyYW5nZVNlbGVjdGlvbkNoYW5naW5nJywgdGhhdC5ldmVudEhhbmRsZXJzWydyYW5nZVNlbGVjdGlvbkNoYW5naW5nSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydyZWZyZXNoQmVnaW5IYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdyZWZyZXNoQmVnaW4nLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3JlZnJlc2hCZWdpbkhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1sncmVmcmVzaEVuZEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3JlZnJlc2hFbmQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3JlZnJlc2hFbmRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jlc2l6ZUJlZ2luSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplQmVnaW4nLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jlc2l6ZUJlZ2luSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydyZXNpemVFbmRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemVFbmQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jlc2l6ZUVuZEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdH1cbn1cbiJdfQ==