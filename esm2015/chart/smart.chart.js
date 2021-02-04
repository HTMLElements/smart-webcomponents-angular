import * as tslib_1 from "tslib";
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Smart } from './smart.element';
let ChartComponent = class ChartComponent extends BaseElement {
    constructor(ref) {
        super(ref);
        this.eventHandlers = [];
        /** @description The event is raised when the user clicks on a chart annotation.
        *  @param event. The custom event. 	*/
        this.onAnnotationClick = new EventEmitter();
        /** @description The event is raised when the user moves the cursor above a chart annotation.
        *  @param event. The custom event. 	*/
        this.onAnnotationMouseenter = new EventEmitter();
        /** @description The event is raised when the user moves the cursor out of a chart annotation.
        *  @param event. The custom event. 	*/
        this.onAnnotationMouseleave = new EventEmitter();
        /** @description The event is raised when the user clicks on series element.
        *  @param event. The custom event. 	*/
        this.onClick = new EventEmitter();
        /** @description The event is raised when the user moves the cursor out of a series element.
        *  @param event. The custom event. 	*/
        this.onMouseout = new EventEmitter();
        /** @description The event is raised when the user moves the cursor above a series element.
        *  @param event. The custom event. 	*/
        this.onMouseover = new EventEmitter();
        /** @description The event is raised after the chart's range selector position changes and after the chart ends rendering.
        *  @param event. The custom event. 	*/
        this.onRangeSelectionChanged = new EventEmitter();
        /** @description The event is raised when the chart's range selector position changes and before the chart starts rendering.
        *  @param event. The custom event. 	*/
        this.onRangeSelectionChanging = new EventEmitter();
        /** @description The event is raised when the chart begins rendering.
        *  @param event. The custom event. 	*/
        this.onRefreshBegin = new EventEmitter();
        /** @description The event is raised when the chart finishes rendering.
        *  @param event. The custom event. 	*/
        this.onRefreshEnd = new EventEmitter();
        /** @description The event is raised when a serie is toggled by a user click in the chart's legend or through an API call.
        *  @param event. The custom event. 	*/
        this.onToggle = new EventEmitter();
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('smart-chart');
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
    /** @description Determines the animation duration in milliseconds. The value must be between 0 and 5000. If it is outside of this range jqxChart will reset it to the default value. */
    get animationDuration() {
        return this.nativeElement ? this.nativeElement.animationDuration : undefined;
    }
    set animationDuration(value) {
        this.nativeElement ? this.nativeElement.animationDuration = value : undefined;
    }
    /** @description Sets the chart's background color. For example: '#DDFFE8' */
    get backgroundColor() {
        return this.nativeElement ? this.nativeElement.backgroundColor : undefined;
    }
    set backgroundColor(value) {
        this.nativeElement ? this.nativeElement.backgroundColor = value : undefined;
    }
    /** @description Sets the chart's background image. For example: 'https://www.htmlelements.com/demos/images/carousel-large-1.jpg' */
    get backgroundImage() {
        return this.nativeElement ? this.nativeElement.backgroundImage : undefined;
    }
    set backgroundImage(value) {
        this.nativeElement ? this.nativeElement.backgroundImage = value : undefined;
    }
    /** @description Sets the chart's border color. For example: '#098700' */
    get borderLineColor() {
        return this.nativeElement ? this.nativeElement.borderLineColor : undefined;
    }
    set borderLineColor(value) {
        this.nativeElement ? this.nativeElement.borderLineColor = value : undefined;
    }
    /** @description Sets the chart's border line width. */
    get borderLineWidth() {
        return this.nativeElement ? this.nativeElement.borderLineWidth : undefined;
    }
    set borderLineWidth(value) {
        this.nativeElement ? this.nativeElement.borderLineWidth = value : undefined;
    }
    /** @description Sets the caption (title) of the chart. */
    get caption() {
        return this.nativeElement ? this.nativeElement.caption : undefined;
    }
    set caption(value) {
        this.nativeElement ? this.nativeElement.caption = value : undefined;
    }
    /** @description Determines whether to clip plotted elements that overflow the axis boundaries. */
    get clip() {
        return this.nativeElement ? this.nativeElement.clip : undefined;
    }
    set clip(value) {
        this.nativeElement ? this.nativeElement.clip = value : undefined;
    }
    /** @description Sets the chart's color pallete. jqxChart suppports 32 color schemes from 'scheme01' to 'scheme32'. */
    get colorScheme() {
        return this.nativeElement ? this.nativeElement.colorScheme : undefined;
    }
    set colorScheme(value) {
        this.nativeElement ? this.nativeElement.colorScheme = value : undefined;
    }
    /** @description Enables or disables overlapping of the column series. */
    get columnSeriesOverlap() {
        return this.nativeElement ? this.nativeElement.columnSeriesOverlap : undefined;
    }
    set columnSeriesOverlap(value) {
        this.nativeElement ? this.nativeElement.columnSeriesOverlap = value : undefined;
    }
    /** @description Gets or sets the color of the crosshairs lines. The 'enableCrosshairs' property should be 'true'. */
    get crosshairsColor() {
        return this.nativeElement ? this.nativeElement.crosshairsColor : undefined;
    }
    set crosshairsColor(value) {
        this.nativeElement ? this.nativeElement.crosshairsColor = value : undefined;
    }
    /** @description Gets or sets the dash style of the crosshairs lines. The style is a series of numbers indicating line length followed by space length. The 'enableCrosshairs' property should be 'true'. For example: '3,3' */
    get crosshairsDashStyle() {
        return this.nativeElement ? this.nativeElement.crosshairsDashStyle : undefined;
    }
    set crosshairsDashStyle(value) {
        this.nativeElement ? this.nativeElement.crosshairsDashStyle = value : undefined;
    }
    /** @description Gets or sets the width of the crosshairs lines. The 'enableCrosshairs' property should be 'true' */
    get crosshairsLineWidth() {
        return this.nativeElement ? this.nativeElement.crosshairsLineWidth : undefined;
    }
    set crosshairsLineWidth(value) {
        this.nativeElement ? this.nativeElement.crosshairsLineWidth = value : undefined;
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
    /** @description Determines the drawing function of jqxChart. When the property is set, you can override the jqxChart's drawing. */
    get draw() {
        return this.nativeElement ? this.nativeElement.draw : undefined;
    }
    set draw(value) {
        this.nativeElement ? this.nativeElement.draw = value : undefined;
    }
    /** @description Function for custom drawing before the caption and other chart elements. */
    get drawBefore() {
        return this.nativeElement ? this.nativeElement.drawBefore : undefined;
    }
    set drawBefore(value) {
        this.nativeElement ? this.nativeElement.drawBefore = value : undefined;
    }
    /** @description Determines if the animation of the axes text is enabled. */
    get enableAxisTextAnimation() {
        return this.nativeElement ? this.nativeElement.enableAxisTextAnimation : undefined;
    }
    set enableAxisTextAnimation(value) {
        this.nativeElement ? this.nativeElement.enableAxisTextAnimation = value : undefined;
    }
    /** @description Enables or disables the crosshairs lines. The lines are displayed in line and area series when you move over a data point. */
    get enableCrosshairs() {
        return this.nativeElement ? this.nativeElement.enableCrosshairs : undefined;
    }
    set enableCrosshairs(value) {
        this.nativeElement ? this.nativeElement.enableCrosshairs = value : undefined;
    }
    /** @description Determines whether to display the chart using greyscale colors. */
    get greyScale() {
        return this.nativeElement ? this.nativeElement.greyScale : undefined;
    }
    set greyScale(value) {
        this.nativeElement ? this.nativeElement.greyScale = value : undefined;
    }
    /** @description Sets the legend's layout. */
    get legendLayout() {
        return this.nativeElement ? this.nativeElement.legendLayout : undefined;
    }
    set legendLayout(value) {
        this.nativeElement ? this.nativeElement.legendLayout = value : undefined;
    }
    /** @description Sets or gets the locale. Used in conjunction with the property messages. */
    get locale() {
        return this.nativeElement ? this.nativeElement.locale : undefined;
    }
    set locale(value) {
        this.nativeElement ? this.nativeElement.locale = value : undefined;
    }
    /** @description Localization object containing culture-specific properties required for formatting currencies, numbers and dates. */
    get localization() {
        return this.nativeElement ? this.nativeElement.localization : undefined;
    }
    set localization(value) {
        this.nativeElement ? this.nativeElement.localization = value : undefined;
    }
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale. */
    get messages() {
        return this.nativeElement ? this.nativeElement.messages : undefined;
    }
    set messages(value) {
        this.nativeElement ? this.nativeElement.messages = value : undefined;
    }
    /** @description Sets the left, top, right and bottom padding of the Chart. */
    get padding() {
        return this.nativeElement ? this.nativeElement.padding : undefined;
    }
    set padding(value) {
        this.nativeElement ? this.nativeElement.padding = value : undefined;
    }
    /** @description Determines the rendering engine used to display the chart. When the property is set to an empty string, jqxChart will automatically select an optimal rendering engine depending on the browser capabilities. */
    get renderEngine() {
        return this.nativeElement ? this.nativeElement.renderEngine : undefined;
    }
    set renderEngine(value) {
        this.nativeElement ? this.nativeElement.renderEngine = value : undefined;
    }
    /** @description Sets or gets a value indicating whether the Chart's layout is mirrored. */
    get rightToLeft() {
        return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
    }
    set rightToLeft(value) {
        this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
    }
    /** @description The seriesGroups property is used to describe all series displayed on the chart. jqxChart supports multiple series of different types and series grouping. Each series group may have its own Value Axis (Y-axis) which allows you to have values with different scales displayed on the same chart at the same time. It also allows you to display multiple series types together on the same chart. For example, you can display all series in one group as lines and the series in a second group as columns. seriesGroups is an array of objects where each object represents one group. */
    get seriesGroups() {
        return this.nativeElement ? this.nativeElement.seriesGroups : undefined;
    }
    set seriesGroups(value) {
        this.nativeElement ? this.nativeElement.seriesGroups = value : undefined;
    }
    /** @description Determines whether to display the chart's border line. */
    get showBorderLine() {
        return this.nativeElement ? this.nativeElement.showBorderLine : undefined;
    }
    set showBorderLine(value) {
        this.nativeElement ? this.nativeElement.showBorderLine = value : undefined;
    }
    /** @description Determines whether to show or hide the chart series legend. */
    get showLegend() {
        return this.nativeElement ? this.nativeElement.showLegend : undefined;
    }
    set showLegend(value) {
        this.nativeElement ? this.nativeElement.showLegend = value : undefined;
    }
    /** @description Enables or disables the chart tooltips. */
    get showToolTips() {
        return this.nativeElement ? this.nativeElement.showToolTips : undefined;
    }
    set showToolTips(value) {
        this.nativeElement ? this.nativeElement.showToolTips = value : undefined;
    }
    /** @description Determines whether to show a composite tooltip containing information for all series. */
    get showToolTipsOnAllSeries() {
        return this.nativeElement ? this.nativeElement.showToolTipsOnAllSeries : undefined;
    }
    set showToolTipsOnAllSeries(value) {
        this.nativeElement ? this.nativeElement.showToolTipsOnAllSeries = value : undefined;
    }
    /** @description Determines the set of default background, line, text and band colors that will be used in the Chart. */
    get theme() {
        return this.nativeElement ? this.nativeElement.theme : undefined;
    }
    set theme(value) {
        this.nativeElement ? this.nativeElement.theme = value : undefined;
    }
    /** @description Sets the padding of the chart's title (caption). */
    get titlePadding() {
        return this.nativeElement ? this.nativeElement.titlePadding : undefined;
    }
    set titlePadding(value) {
        this.nativeElement ? this.nativeElement.titlePadding = value : undefined;
    }
    /** @description Tooltip background color. */
    get toolTipBackground() {
        return this.nativeElement ? this.nativeElement.toolTipBackground : undefined;
    }
    set toolTipBackground(value) {
        this.nativeElement ? this.nativeElement.toolTipBackground = value : undefined;
    }
    /** @description Determines the tooltip hide delay in milliseconds. */
    get toolTipFormatFunction() {
        return this.nativeElement ? this.nativeElement.toolTipFormatFunction : undefined;
    }
    set toolTipFormatFunction(value) {
        this.nativeElement ? this.nativeElement.toolTipFormatFunction = value : undefined;
    }
    /** @description Tooltip line color. */
    get toolTipHideDelay() {
        return this.nativeElement ? this.nativeElement.toolTipHideDelay : undefined;
    }
    set toolTipHideDelay(value) {
        this.nativeElement ? this.nativeElement.toolTipHideDelay = value : undefined;
    }
    /** @description Determines the tooltip show delay in milliseconds. Values may range from 0 to 10000 [ms]. */
    get toolTipLineColor() {
        return this.nativeElement ? this.nativeElement.toolTipLineColor : undefined;
    }
    set toolTipLineColor(value) {
        this.nativeElement ? this.nativeElement.toolTipLineColor = value : undefined;
    }
    /** @description An object with settings about the Chart's y-axis (value axis). */
    get toolTipShowDelay() {
        return this.nativeElement ? this.nativeElement.toolTipShowDelay : undefined;
    }
    set toolTipShowDelay(value) {
        this.nativeElement ? this.nativeElement.toolTipShowDelay = value : undefined;
    }
    /** @description Sets the Chart's xAxis. */
    get valueAxis() {
        return this.nativeElement ? this.nativeElement.valueAxis : undefined;
    }
    set valueAxis(value) {
        this.nativeElement ? this.nativeElement.valueAxis = value : undefined;
    }
    /** @description undefined */
    get xAxis() {
        return this.nativeElement ? this.nativeElement.xAxis : undefined;
    }
    set xAxis(value) {
        this.nativeElement ? this.nativeElement.xAxis = value : undefined;
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
    /** @description Gets the rendered coordinates of a data point element.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    * @param {number} itemIndex. Item (data point) index.
    * @returns {{ x: number, y: number, width: number, height: number, center: number, centerOffset: number, innerRadius: number, outerRadius: number, selectedRadiusChange: number, fromAngle: number, toAngle: number, radius: number }}
  */
    getItemCoord(groupIndex, serieIndex, itemIndex) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getItemCoord(groupIndex, serieIndex, itemIndex);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Gets the number of rendered items in a specific serie.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    * @returns {number}
  */
    getItemsCount(groupIndex, serieIndex) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getItemsCount(groupIndex, serieIndex);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Gets the rendered coordinates and values of the valueAxis labels.
    * @param {number} groupIndex. Series group index.
    * @returns {any}
  */
    getValueAxisLabels(groupIndex) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getValueAxisLabels(groupIndex);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Gets the rendered rectangle coordinates of the valueAxis of specific serie group.
    * @param {number} groupIndex. Series group index.
    * @returns {DOMRect}
  */
    getValueAxisRect(groupIndex) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getValueAxisRect(groupIndex);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Gets the valueAxis (vertical axis)'s value.
    * @param {number} offset. Vertical offset.
    * @param {number} groupIndex. Series group index.
    * @returns {any}
  */
    getValueAxisValue(offset, groupIndex) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getValueAxisValue(offset, groupIndex);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Gets the rendered coordinates and values of the xAxis labels.
    * @param {number} groupIndex. Series group index.
    * @returns {any}
  */
    getXAxisLabels(groupIndex) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getXAxisLabels(groupIndex);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Gets the rendered rectangle coordinates of the x-Axis of specific serie group.
    * @param {number} groupIndex. Series group index.
    * @returns {DOMRect}
  */
    getXAxisRect(groupIndex) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getXAxisRect(groupIndex);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Gets the xAxis (horizontal axis)'s value.
    * @param {number} offset. Horizontal offset.
    * @param {number} groupIndex. Series group index.
    * @returns {any}
  */
    getXAxisValue(offset, groupIndex) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getXAxisValue(offset, groupIndex);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Hides a chart serie. The result of calling this function is same as the user unchecking the legend box of a chart serie.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    * @param {number} itemIndex?. Item (data point) index. Applicable to pie and donut series only.
    */
    hideSerie(groupIndex, serieIndex, itemIndex) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.hideSerie(groupIndex, serieIndex, itemIndex);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.hideSerie(groupIndex, serieIndex, itemIndex);
            });
        }
    }
    /** @description Hides the current tooltip if visible.
    * @param {number} hideDelay?. Hide delay.
    */
    hideToolTip(hideDelay) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.hideToolTip(hideDelay);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.hideToolTip(hideDelay);
            });
        }
    }
    /** @description Prints the chart.
    */
    print() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.print();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.print();
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
    */
    saveAsJPEG(fileName) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.saveAsJPEG(fileName);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.saveAsJPEG(fileName);
            });
        }
    }
    /** @description Exports the chart's content as PNG image.
    * @param {string} fileName?. File name.
    */
    saveAsPNG(fileName) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.saveAsPNG(fileName);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.saveAsPNG(fileName);
            });
        }
    }
    /** @description Exports the chart's content as PDF.
    * @param {string} fileName?. File name.
    * @param {string} pageOrientation?. PDF page orientation. <strong>Possible values:</strong> 'portrait' (default), 'landscape'.
    */
    saveAsPDF(fileName, pageOrientation) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.saveAsPDF(fileName, pageOrientation);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.saveAsPDF(fileName, pageOrientation);
            });
        }
    }
    /** @description Shows a hidden chart serie. The result of calling this function is same as the user checking the legend box of a chart serie.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    * @param {number} itemIndex?. Item (data point) index. Applicable to pie and donut series only.
    */
    showSerie(groupIndex, serieIndex, itemIndex) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.showSerie(groupIndex, serieIndex, itemIndex);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.showSerie(groupIndex, serieIndex, itemIndex);
            });
        }
    }
    /** @description Shows a the tooltip for a particular data point.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    * @param {number} itemIndex. Item (data point) index.
    * @param {number} showDelay?. Show delay.
    * @param {number} hideDelay?. Hide delay.
    */
    showToolTip(groupIndex, serieIndex, itemIndex, showDelay, hideDelay) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.showToolTip(groupIndex, serieIndex, itemIndex, showDelay, hideDelay);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.showToolTip(groupIndex, serieIndex, itemIndex, showDelay, hideDelay);
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
        that.eventHandlers['annotationClickHandler'] = (event) => { that.onAnnotationClick.emit(event); };
        that.nativeElement.addEventListener('annotationClick', that.eventHandlers['annotationClickHandler']);
        that.eventHandlers['annotationMouseenterHandler'] = (event) => { that.onAnnotationMouseenter.emit(event); };
        that.nativeElement.addEventListener('annotationMouseenter', that.eventHandlers['annotationMouseenterHandler']);
        that.eventHandlers['annotationMouseleaveHandler'] = (event) => { that.onAnnotationMouseleave.emit(event); };
        that.nativeElement.addEventListener('annotationMouseleave', that.eventHandlers['annotationMouseleaveHandler']);
        that.eventHandlers['clickHandler'] = (event) => { that.onClick.emit(event); };
        that.nativeElement.addEventListener('click', that.eventHandlers['clickHandler']);
        that.eventHandlers['mouseoutHandler'] = (event) => { that.onMouseout.emit(event); };
        that.nativeElement.addEventListener('mouseout', that.eventHandlers['mouseoutHandler']);
        that.eventHandlers['mouseoverHandler'] = (event) => { that.onMouseover.emit(event); };
        that.nativeElement.addEventListener('mouseover', that.eventHandlers['mouseoverHandler']);
        that.eventHandlers['rangeSelectionChangedHandler'] = (event) => { that.onRangeSelectionChanged.emit(event); };
        that.nativeElement.addEventListener('rangeSelectionChanged', that.eventHandlers['rangeSelectionChangedHandler']);
        that.eventHandlers['rangeSelectionChangingHandler'] = (event) => { that.onRangeSelectionChanging.emit(event); };
        that.nativeElement.addEventListener('rangeSelectionChanging', that.eventHandlers['rangeSelectionChangingHandler']);
        that.eventHandlers['refreshBeginHandler'] = (event) => { that.onRefreshBegin.emit(event); };
        that.nativeElement.addEventListener('refreshBegin', that.eventHandlers['refreshBeginHandler']);
        that.eventHandlers['refreshEndHandler'] = (event) => { that.onRefreshEnd.emit(event); };
        that.nativeElement.addEventListener('refreshEnd', that.eventHandlers['refreshEndHandler']);
        that.eventHandlers['toggleHandler'] = (event) => { that.onToggle.emit(event); };
        that.nativeElement.addEventListener('toggle', that.eventHandlers['toggleHandler']);
    }
    /** @description Remove event listeners. */
    unlisten() {
        const that = this;
        if (that.eventHandlers['annotationClickHandler']) {
            that.nativeElement.removeEventListener('annotationClick', that.eventHandlers['annotationClickHandler']);
        }
        if (that.eventHandlers['annotationMouseenterHandler']) {
            that.nativeElement.removeEventListener('annotationMouseenter', that.eventHandlers['annotationMouseenterHandler']);
        }
        if (that.eventHandlers['annotationMouseleaveHandler']) {
            that.nativeElement.removeEventListener('annotationMouseleave', that.eventHandlers['annotationMouseleaveHandler']);
        }
        if (that.eventHandlers['clickHandler']) {
            that.nativeElement.removeEventListener('click', that.eventHandlers['clickHandler']);
        }
        if (that.eventHandlers['mouseoutHandler']) {
            that.nativeElement.removeEventListener('mouseout', that.eventHandlers['mouseoutHandler']);
        }
        if (that.eventHandlers['mouseoverHandler']) {
            that.nativeElement.removeEventListener('mouseover', that.eventHandlers['mouseoverHandler']);
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
        if (that.eventHandlers['toggleHandler']) {
            that.nativeElement.removeEventListener('toggle', that.eventHandlers['toggleHandler']);
        }
    }
};
ChartComponent.ctorParameters = () => [
    { type: ElementRef }
];
tslib_1.__decorate([
    Input()
], ChartComponent.prototype, "animation", null);
tslib_1.__decorate([
    Input()
], ChartComponent.prototype, "animationDuration", null);
tslib_1.__decorate([
    Input()
], ChartComponent.prototype, "backgroundColor", null);
tslib_1.__decorate([
    Input()
], ChartComponent.prototype, "backgroundImage", null);
tslib_1.__decorate([
    Input()
], ChartComponent.prototype, "borderLineColor", null);
tslib_1.__decorate([
    Input()
], ChartComponent.prototype, "borderLineWidth", null);
tslib_1.__decorate([
    Input()
], ChartComponent.prototype, "caption", null);
tslib_1.__decorate([
    Input()
], ChartComponent.prototype, "clip", null);
tslib_1.__decorate([
    Input()
], ChartComponent.prototype, "colorScheme", null);
tslib_1.__decorate([
    Input()
], ChartComponent.prototype, "columnSeriesOverlap", null);
tslib_1.__decorate([
    Input()
], ChartComponent.prototype, "crosshairsColor", null);
tslib_1.__decorate([
    Input()
], ChartComponent.prototype, "crosshairsDashStyle", null);
tslib_1.__decorate([
    Input()
], ChartComponent.prototype, "crosshairsLineWidth", null);
tslib_1.__decorate([
    Input()
], ChartComponent.prototype, "dataSource", null);
tslib_1.__decorate([
    Input()
], ChartComponent.prototype, "description", null);
tslib_1.__decorate([
    Input()
], ChartComponent.prototype, "disabled", null);
tslib_1.__decorate([
    Input()
], ChartComponent.prototype, "draw", null);
tslib_1.__decorate([
    Input()
], ChartComponent.prototype, "drawBefore", null);
tslib_1.__decorate([
    Input()
], ChartComponent.prototype, "enableAxisTextAnimation", null);
tslib_1.__decorate([
    Input()
], ChartComponent.prototype, "enableCrosshairs", null);
tslib_1.__decorate([
    Input()
], ChartComponent.prototype, "greyScale", null);
tslib_1.__decorate([
    Input()
], ChartComponent.prototype, "legendLayout", null);
tslib_1.__decorate([
    Input()
], ChartComponent.prototype, "locale", null);
tslib_1.__decorate([
    Input()
], ChartComponent.prototype, "localization", null);
tslib_1.__decorate([
    Input()
], ChartComponent.prototype, "messages", null);
tslib_1.__decorate([
    Input()
], ChartComponent.prototype, "padding", null);
tslib_1.__decorate([
    Input()
], ChartComponent.prototype, "renderEngine", null);
tslib_1.__decorate([
    Input()
], ChartComponent.prototype, "rightToLeft", null);
tslib_1.__decorate([
    Input()
], ChartComponent.prototype, "seriesGroups", null);
tslib_1.__decorate([
    Input()
], ChartComponent.prototype, "showBorderLine", null);
tslib_1.__decorate([
    Input()
], ChartComponent.prototype, "showLegend", null);
tslib_1.__decorate([
    Input()
], ChartComponent.prototype, "showToolTips", null);
tslib_1.__decorate([
    Input()
], ChartComponent.prototype, "showToolTipsOnAllSeries", null);
tslib_1.__decorate([
    Input()
], ChartComponent.prototype, "theme", null);
tslib_1.__decorate([
    Input()
], ChartComponent.prototype, "titlePadding", null);
tslib_1.__decorate([
    Input()
], ChartComponent.prototype, "toolTipBackground", null);
tslib_1.__decorate([
    Input()
], ChartComponent.prototype, "toolTipFormatFunction", null);
tslib_1.__decorate([
    Input()
], ChartComponent.prototype, "toolTipHideDelay", null);
tslib_1.__decorate([
    Input()
], ChartComponent.prototype, "toolTipLineColor", null);
tslib_1.__decorate([
    Input()
], ChartComponent.prototype, "toolTipShowDelay", null);
tslib_1.__decorate([
    Input()
], ChartComponent.prototype, "valueAxis", null);
tslib_1.__decorate([
    Input()
], ChartComponent.prototype, "xAxis", null);
tslib_1.__decorate([
    Output()
], ChartComponent.prototype, "onAnnotationClick", void 0);
tslib_1.__decorate([
    Output()
], ChartComponent.prototype, "onAnnotationMouseenter", void 0);
tslib_1.__decorate([
    Output()
], ChartComponent.prototype, "onAnnotationMouseleave", void 0);
tslib_1.__decorate([
    Output()
], ChartComponent.prototype, "onClick", void 0);
tslib_1.__decorate([
    Output()
], ChartComponent.prototype, "onMouseout", void 0);
tslib_1.__decorate([
    Output()
], ChartComponent.prototype, "onMouseover", void 0);
tslib_1.__decorate([
    Output()
], ChartComponent.prototype, "onRangeSelectionChanged", void 0);
tslib_1.__decorate([
    Output()
], ChartComponent.prototype, "onRangeSelectionChanging", void 0);
tslib_1.__decorate([
    Output()
], ChartComponent.prototype, "onRefreshBegin", void 0);
tslib_1.__decorate([
    Output()
], ChartComponent.prototype, "onRefreshEnd", void 0);
tslib_1.__decorate([
    Output()
], ChartComponent.prototype, "onToggle", void 0);
ChartComponent = tslib_1.__decorate([
    Directive({
        selector: 'smart-chart, [smart-chart]'
    })
], ChartComponent);
export { ChartComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQuY2hhcnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zbWFydC13ZWJjb21wb25lbnRzLWFuZ3VsYXIvY2hhcnQvIiwic291cmNlcyI6WyJzbWFydC5jaGFydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUosT0FBTyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVyRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFReEMsSUFBYSxjQUFjLEdBQTNCLE1BQWEsY0FBZSxTQUFRLFdBQVc7SUFDOUMsWUFBWSxHQUFzQjtRQUNqQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFJSixrQkFBYSxHQUFVLEVBQUUsQ0FBQztRQXVZbEM7OENBQ3NDO1FBQzVCLHNCQUFpQixHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTVFOzhDQUNzQztRQUM1QiwyQkFBc0IsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVqRjs4Q0FDc0M7UUFDNUIsMkJBQXNCLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFakY7OENBQ3NDO1FBQzVCLFlBQU8sR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVsRTs4Q0FDc0M7UUFDNUIsZUFBVSxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXJFOzhDQUNzQztRQUM1QixnQkFBVyxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXRFOzhDQUNzQztRQUM1Qiw0QkFBdUIsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVsRjs4Q0FDc0M7UUFDNUIsNkJBQXdCLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFbkY7OENBQ3NDO1FBQzVCLG1CQUFjLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFekU7OENBQ3NDO1FBQzVCLGlCQUFZLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFdkU7OENBQ3NDO1FBQzVCLGFBQVEsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQXBibEUsSUFBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUMsYUFBc0IsQ0FBQztJQUNqRCxDQUFDO0lBS0Q7O09BRUc7SUFDSSxlQUFlLENBQUMsVUFBVSxHQUFHLEVBQUU7UUFDbEMsSUFBSSxDQUFDLGFBQWEsR0FBVSxRQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3JFLEtBQUssSUFBSSxZQUFZLElBQUksVUFBVSxFQUFFO1lBQ25DLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEdBQUcsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzdEO1FBQ0QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzNCLENBQUM7SUFDRCw4R0FBOEc7SUFFOUcsSUFBSSxTQUFTO1FBQ1osT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3RFLENBQUM7SUFDRCxJQUFJLFNBQVMsQ0FBQyxLQUFnQjtRQUM3QixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN2RSxDQUFDO0lBRUQsd0xBQXdMO0lBRXhMLElBQUksaUJBQWlCO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQzlFLENBQUM7SUFDRCxJQUFJLGlCQUFpQixDQUFDLEtBQWE7UUFDbEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUMvRSxDQUFDO0lBRUQsNkVBQTZFO0lBRTdFLElBQUksZUFBZTtRQUNsQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDNUUsQ0FBQztJQUNELElBQUksZUFBZSxDQUFDLEtBQW9CO1FBQ3ZDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQzdFLENBQUM7SUFFRCxvSUFBb0k7SUFFcEksSUFBSSxlQUFlO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUM1RSxDQUFDO0lBQ0QsSUFBSSxlQUFlLENBQUMsS0FBYTtRQUNoQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUM3RSxDQUFDO0lBRUQseUVBQXlFO0lBRXpFLElBQUksZUFBZTtRQUNsQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDNUUsQ0FBQztJQUNELElBQUksZUFBZSxDQUFDLEtBQW9CO1FBQ3ZDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQzdFLENBQUM7SUFFRCx1REFBdUQ7SUFFdkQsSUFBSSxlQUFlO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUM1RSxDQUFDO0lBQ0QsSUFBSSxlQUFlLENBQUMsS0FBYTtRQUNoQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUM3RSxDQUFDO0lBRUQsMERBQTBEO0lBRTFELElBQUksT0FBTztRQUNWLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNwRSxDQUFDO0lBQ0QsSUFBSSxPQUFPLENBQUMsS0FBYTtRQUN4QixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNyRSxDQUFDO0lBRUQsa0dBQWtHO0lBRWxHLElBQUksSUFBSTtRQUNQLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNqRSxDQUFDO0lBQ0QsSUFBSSxJQUFJLENBQUMsS0FBYztRQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNsRSxDQUFDO0lBRUQsc0hBQXNIO0lBRXRILElBQUksV0FBVztRQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RSxDQUFDO0lBQ0QsSUFBSSxXQUFXLENBQUMsS0FBdUI7UUFDdEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDekUsQ0FBQztJQUVELHlFQUF5RTtJQUV6RSxJQUFJLG1CQUFtQjtRQUN0QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNoRixDQUFDO0lBQ0QsSUFBSSxtQkFBbUIsQ0FBQyxLQUFjO1FBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDakYsQ0FBQztJQUVELHFIQUFxSDtJQUVySCxJQUFJLGVBQWU7UUFDbEIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQzVFLENBQUM7SUFDRCxJQUFJLGVBQWUsQ0FBQyxLQUFvQjtRQUN2QyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUM3RSxDQUFDO0lBRUQsK05BQStOO0lBRS9OLElBQUksbUJBQW1CO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ2hGLENBQUM7SUFDRCxJQUFJLG1CQUFtQixDQUFDLEtBQWE7UUFDcEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNqRixDQUFDO0lBRUQsb0hBQW9IO0lBRXBILElBQUksbUJBQW1CO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ2hGLENBQUM7SUFDRCxJQUFJLG1CQUFtQixDQUFDLEtBQWE7UUFDcEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNqRixDQUFDO0lBRUQsaURBQWlEO0lBRWpELElBQUksVUFBVTtRQUNiLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN2RSxDQUFDO0lBQ0QsSUFBSSxVQUFVLENBQUMsS0FBWTtRQUMxQixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RSxDQUFDO0lBRUQsMkRBQTJEO0lBRTNELElBQUksV0FBVztRQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RSxDQUFDO0lBQ0QsSUFBSSxXQUFXLENBQUMsS0FBYTtRQUM1QixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN6RSxDQUFDO0lBRUQsa0RBQWtEO0lBRWxELElBQUksUUFBUTtRQUNYLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNyRSxDQUFDO0lBQ0QsSUFBSSxRQUFRLENBQUMsS0FBYztRQUMxQixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN0RSxDQUFDO0lBRUQsbUlBQW1JO0lBRW5JLElBQUksSUFBSTtRQUNQLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNqRSxDQUFDO0lBQ0QsSUFBSSxJQUFJLENBQUMsS0FBVTtRQUNsQixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNsRSxDQUFDO0lBRUQsNEZBQTRGO0lBRTVGLElBQUksVUFBVTtRQUNiLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN2RSxDQUFDO0lBQ0QsSUFBSSxVQUFVLENBQUMsS0FBVTtRQUN4QixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RSxDQUFDO0lBRUQsNEVBQTRFO0lBRTVFLElBQUksdUJBQXVCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3BGLENBQUM7SUFDRCxJQUFJLHVCQUF1QixDQUFDLEtBQWM7UUFDekMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNyRixDQUFDO0lBRUQsOElBQThJO0lBRTlJLElBQUksZ0JBQWdCO1FBQ25CLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQzdFLENBQUM7SUFDRCxJQUFJLGdCQUFnQixDQUFDLEtBQWM7UUFDbEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUM5RSxDQUFDO0lBRUQsbUZBQW1GO0lBRW5GLElBQUksU0FBUztRQUNaLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN0RSxDQUFDO0lBQ0QsSUFBSSxTQUFTLENBQUMsS0FBYztRQUMzQixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN2RSxDQUFDO0lBRUQsNkNBQTZDO0lBRTdDLElBQUksWUFBWTtRQUNmLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN6RSxDQUFDO0lBQ0QsSUFBSSxZQUFZLENBQUMsS0FBVTtRQUMxQixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUMxRSxDQUFDO0lBRUQsNEZBQTRGO0lBRTVGLElBQUksTUFBTTtRQUNULE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNuRSxDQUFDO0lBQ0QsSUFBSSxNQUFNLENBQUMsS0FBYTtRQUN2QixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNwRSxDQUFDO0lBRUQscUlBQXFJO0lBRXJJLElBQUksWUFBWTtRQUNmLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN6RSxDQUFDO0lBQ0QsSUFBSSxZQUFZLENBQUMsS0FBd0I7UUFDeEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDMUUsQ0FBQztJQUVELHFKQUFxSjtJQUVySixJQUFJLFFBQVE7UUFDWCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDckUsQ0FBQztJQUNELElBQUksUUFBUSxDQUFDLEtBQVU7UUFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDdEUsQ0FBQztJQUVELDhFQUE4RTtJQUU5RSxJQUFJLE9BQU87UUFDVixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDcEUsQ0FBQztJQUNELElBQUksT0FBTyxDQUFDLEtBQWM7UUFDekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDckUsQ0FBQztJQUVELGlPQUFpTztJQUVqTyxJQUFJLFlBQVk7UUFDZixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDekUsQ0FBQztJQUNELElBQUksWUFBWSxDQUFDLEtBQXdCO1FBQ3hDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQzFFLENBQUM7SUFFRCwyRkFBMkY7SUFFM0YsSUFBSSxXQUFXO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hFLENBQUM7SUFDRCxJQUFJLFdBQVcsQ0FBQyxLQUFjO1FBQzdCLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3pFLENBQUM7SUFFRCxnbEJBQWdsQjtJQUVobEIsSUFBSSxZQUFZO1FBQ2YsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3pFLENBQUM7SUFDRCxJQUFJLFlBQVksQ0FBQyxLQUF5QjtRQUN6QyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUMxRSxDQUFDO0lBRUQsMEVBQTBFO0lBRTFFLElBQUksY0FBYztRQUNqQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDM0UsQ0FBQztJQUNELElBQUksY0FBYyxDQUFDLEtBQWM7UUFDaEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDNUUsQ0FBQztJQUVELCtFQUErRTtJQUUvRSxJQUFJLFVBQVU7UUFDYixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDdkUsQ0FBQztJQUNELElBQUksVUFBVSxDQUFDLEtBQWM7UUFDNUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEUsQ0FBQztJQUVELDJEQUEyRDtJQUUzRCxJQUFJLFlBQVk7UUFDZixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDekUsQ0FBQztJQUNELElBQUksWUFBWSxDQUFDLEtBQWM7UUFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDMUUsQ0FBQztJQUVELHlHQUF5RztJQUV6RyxJQUFJLHVCQUF1QjtRQUMxQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNwRixDQUFDO0lBQ0QsSUFBSSx1QkFBdUIsQ0FBQyxLQUFjO1FBQ3pDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsdUJBQXVCLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDckYsQ0FBQztJQUVELHdIQUF3SDtJQUV4SCxJQUFJLEtBQUs7UUFDUixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDbEUsQ0FBQztJQUNELElBQUksS0FBSyxDQUFDLEtBQWE7UUFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDbkUsQ0FBQztJQUVELG9FQUFvRTtJQUVwRSxJQUFJLFlBQVk7UUFDZixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDekUsQ0FBQztJQUNELElBQUksWUFBWSxDQUFDLEtBQWM7UUFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDMUUsQ0FBQztJQUVELDZDQUE2QztJQUU3QyxJQUFJLGlCQUFpQjtRQUNwQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUM5RSxDQUFDO0lBQ0QsSUFBSSxpQkFBaUIsQ0FBQyxLQUFvQjtRQUN6QyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQy9FLENBQUM7SUFFRCxzRUFBc0U7SUFFdEUsSUFBSSxxQkFBcUI7UUFDeEIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDbEYsQ0FBQztJQUNELElBQUkscUJBQXFCLENBQUMsS0FBNEQ7UUFDckYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNuRixDQUFDO0lBRUQsdUNBQXVDO0lBRXZDLElBQUksZ0JBQWdCO1FBQ25CLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQzdFLENBQUM7SUFDRCxJQUFJLGdCQUFnQixDQUFDLEtBQWE7UUFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUM5RSxDQUFDO0lBRUQsNkdBQTZHO0lBRTdHLElBQUksZ0JBQWdCO1FBQ25CLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQzdFLENBQUM7SUFDRCxJQUFJLGdCQUFnQixDQUFDLEtBQW9CO1FBQ3hDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDOUUsQ0FBQztJQUVELGtGQUFrRjtJQUVsRixJQUFJLGdCQUFnQjtRQUNuQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUM3RSxDQUFDO0lBQ0QsSUFBSSxnQkFBZ0IsQ0FBQyxLQUFhO1FBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDOUUsQ0FBQztJQUVELDJDQUEyQztJQUUzQyxJQUFJLFNBQVM7UUFDWixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDdEUsQ0FBQztJQUNELElBQUksU0FBUyxDQUFDLEtBQXFCO1FBQ2xDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3ZFLENBQUM7SUFFRCw2QkFBNkI7SUFFN0IsSUFBSSxLQUFLO1FBQ1IsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ2xFLENBQUM7SUFDRCxJQUFJLEtBQUssQ0FBQyxLQUFpQjtRQUMxQixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNuRSxDQUFDO0lBOENEOzs7TUFHRTtJQUNRLGNBQWMsQ0FBQyxVQUFrQixFQUFFLFdBQWtCO1FBQ3hELElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQzlEO2FBRUQ7WUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQztZQUMvRCxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUVKOzs7SUFHRztJQUNVLGNBQWMsQ0FBQyxVQUFVOztZQUNyQyxNQUFNLGlCQUFpQixHQUFHLEdBQUcsRUFBRTtnQkFDckIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtvQkFDekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFO3dCQUNqQyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQzt3QkFDN0QsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO29CQUNuQixDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQztZQUNGLE1BQU0sTUFBTSxHQUFHLE1BQU0saUJBQWlCLEVBQUUsQ0FBQztZQUV6QyxPQUFPLE1BQU0sQ0FBQztRQUNsQixDQUFDO0tBQUE7SUFFSjs7Ozs7SUFLRztJQUNVLFlBQVksQ0FBQyxVQUFVLEVBQUUsVUFBVSxFQUFFLFNBQVM7O1lBQzFELE1BQU0saUJBQWlCLEdBQUcsR0FBRyxFQUFFO2dCQUNyQixPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUN6QixJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUU7d0JBQ2pDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUUsU0FBUyxDQUFDLENBQUM7d0JBQ2xGLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQTtvQkFDbkIsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUM7WUFDRixNQUFNLE1BQU0sR0FBRyxNQUFNLGlCQUFpQixFQUFFLENBQUM7WUFFekMsT0FBTyxNQUFNLENBQUM7UUFDbEIsQ0FBQztLQUFBO0lBRUo7Ozs7SUFJRztJQUNVLGFBQWEsQ0FBQyxVQUFVLEVBQUUsVUFBVTs7WUFDaEQsTUFBTSxpQkFBaUIsR0FBRyxHQUFHLEVBQUU7Z0JBQ3JCLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQ3pCLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRTt3QkFDakMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO3dCQUN4RSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7b0JBQ25CLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDO1lBQ0YsTUFBTSxNQUFNLEdBQUcsTUFBTSxpQkFBaUIsRUFBRSxDQUFDO1lBRXpDLE9BQU8sTUFBTSxDQUFDO1FBQ2xCLENBQUM7S0FBQTtJQUVKOzs7SUFHRztJQUNVLGtCQUFrQixDQUFDLFVBQVU7O1lBQ3pDLE1BQU0saUJBQWlCLEdBQUcsR0FBRyxFQUFFO2dCQUNyQixPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUN6QixJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUU7d0JBQ2pDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUM7d0JBQ2pFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQTtvQkFDbkIsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUM7WUFDRixNQUFNLE1BQU0sR0FBRyxNQUFNLGlCQUFpQixFQUFFLENBQUM7WUFFekMsT0FBTyxNQUFNLENBQUM7UUFDbEIsQ0FBQztLQUFBO0lBRUo7OztJQUdHO0lBQ1UsZ0JBQWdCLENBQUMsVUFBVTs7WUFDdkMsTUFBTSxpQkFBaUIsR0FBRyxHQUFHLEVBQUU7Z0JBQ3JCLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQ3pCLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRTt3QkFDakMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQzt3QkFDL0QsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO29CQUNuQixDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQztZQUNGLE1BQU0sTUFBTSxHQUFHLE1BQU0saUJBQWlCLEVBQUUsQ0FBQztZQUV6QyxPQUFPLE1BQU0sQ0FBQztRQUNsQixDQUFDO0tBQUE7SUFFSjs7OztJQUlHO0lBQ1UsaUJBQWlCLENBQUMsTUFBTSxFQUFFLFVBQVU7O1lBQ2hELE1BQU0saUJBQWlCLEdBQUcsR0FBRyxFQUFFO2dCQUNyQixPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUN6QixJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUU7d0JBQ2pDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO3dCQUN4RSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7b0JBQ25CLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDO1lBQ0YsTUFBTSxNQUFNLEdBQUcsTUFBTSxpQkFBaUIsRUFBRSxDQUFDO1lBRXpDLE9BQU8sTUFBTSxDQUFDO1FBQ2xCLENBQUM7S0FBQTtJQUVKOzs7SUFHRztJQUNVLGNBQWMsQ0FBQyxVQUFVOztZQUNyQyxNQUFNLGlCQUFpQixHQUFHLEdBQUcsRUFBRTtnQkFDckIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtvQkFDekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFO3dCQUNqQyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQzt3QkFDN0QsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO29CQUNuQixDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQztZQUNGLE1BQU0sTUFBTSxHQUFHLE1BQU0saUJBQWlCLEVBQUUsQ0FBQztZQUV6QyxPQUFPLE1BQU0sQ0FBQztRQUNsQixDQUFDO0tBQUE7SUFFSjs7O0lBR0c7SUFDVSxZQUFZLENBQUMsVUFBVTs7WUFDbkMsTUFBTSxpQkFBaUIsR0FBRyxHQUFHLEVBQUU7Z0JBQ3JCLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQ3pCLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRTt3QkFDakMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7d0JBQzNELE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQTtvQkFDbkIsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUM7WUFDRixNQUFNLE1BQU0sR0FBRyxNQUFNLGlCQUFpQixFQUFFLENBQUM7WUFFekMsT0FBTyxNQUFNLENBQUM7UUFDbEIsQ0FBQztLQUFBO0lBRUo7Ozs7SUFJRztJQUNVLGFBQWEsQ0FBQyxNQUFNLEVBQUUsVUFBVTs7WUFDNUMsTUFBTSxpQkFBaUIsR0FBRyxHQUFHLEVBQUU7Z0JBQ3JCLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQ3pCLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRTt3QkFDakMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO3dCQUNwRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7b0JBQ25CLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDO1lBQ0YsTUFBTSxNQUFNLEdBQUcsTUFBTSxpQkFBaUIsRUFBRSxDQUFDO1lBRXpDLE9BQU8sTUFBTSxDQUFDO1FBQ2xCLENBQUM7S0FBQTtJQUVKOzs7O01BSUU7SUFDUSxTQUFTLENBQUMsVUFBa0IsRUFBRSxVQUFrQixFQUFFLFNBQWtCO1FBQ3ZFLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxTQUFTLENBQUMsQ0FBQztTQUNuRTthQUVEO1lBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFO2dCQUNqQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsVUFBVSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ3BFLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRUo7O01BRUU7SUFDUSxXQUFXLENBQUMsU0FBa0I7UUFDakMsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTtZQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM3QzthQUVEO1lBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFO2dCQUNqQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM5QyxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUVKO01BQ0U7SUFDUSxLQUFLO1FBQ1IsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTtZQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQzlCO2FBRUQ7WUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDL0IsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFSjtNQUNFO0lBQ1EsT0FBTztRQUNWLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNoQzthQUVEO1lBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFO2dCQUNqQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pDLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRUo7O01BRUU7SUFDUSxpQkFBaUIsQ0FBQyxVQUFrQjtRQUN2QyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDcEQ7YUFFRDtZQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRTtnQkFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNyRCxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUVKOztNQUVFO0lBQ1EsVUFBVSxDQUFDLFFBQWlCO1FBQy9CLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDM0M7YUFFRDtZQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRTtnQkFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDNUMsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFSjs7TUFFRTtJQUNRLFNBQVMsQ0FBQyxRQUFpQjtRQUM5QixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzFDO2FBRUQ7WUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzNDLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRUo7OztNQUdFO0lBQ1EsU0FBUyxDQUFDLFFBQWlCLEVBQUUsZUFBd0I7UUFDeEQsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTtZQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsZUFBZSxDQUFDLENBQUM7U0FDM0Q7YUFFRDtZQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRTtnQkFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1lBQzVELENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRUo7Ozs7TUFJRTtJQUNRLFNBQVMsQ0FBQyxVQUFrQixFQUFFLFVBQWtCLEVBQUUsU0FBa0I7UUFDdkUsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTtZQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsVUFBVSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQ25FO2FBRUQ7WUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDcEUsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFSjs7Ozs7O01BTUU7SUFDUSxXQUFXLENBQUMsVUFBa0IsRUFBRSxVQUFrQixFQUFFLFNBQWlCLEVBQUUsU0FBa0IsRUFBRSxTQUFrQjtRQUNoSCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztTQUMzRjthQUVEO1lBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFO2dCQUNqQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDNUYsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFSjtNQUNFO0lBQ1EsTUFBTTtRQUNULElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUMvQjthQUVEO1lBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFO2dCQUNqQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2hDLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBR0osSUFBSSxVQUFVO1FBQ2IsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ25FLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQztJQUVFLGVBQWU7UUFDYixNQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFFbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRTNDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUVmLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xGLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDakMsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO1lBQ3hELEtBQUssTUFBTSxRQUFRLElBQUksT0FBTyxFQUFFO2dCQUMvQixJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEVBQUU7b0JBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQztpQkFDOUQ7YUFDRDtTQUNEO0lBQ0YsQ0FBQztJQUVELHdDQUF3QztJQUNoQyxNQUFNO1FBQ1AsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsd0JBQXdCLENBQUMsR0FBRyxDQUFDLEtBQWtCLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDOUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQztRQUVyRyxJQUFJLENBQUMsYUFBYSxDQUFDLDZCQUE2QixDQUFDLEdBQUcsQ0FBQyxLQUFrQixFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3hILElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUM7UUFFL0csSUFBSSxDQUFDLGFBQWEsQ0FBQyw2QkFBNkIsQ0FBQyxHQUFHLENBQUMsS0FBa0IsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUN4SCxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLHNCQUFzQixFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxDQUFDO1FBRS9HLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxLQUFrQixFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUMxRixJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFFakYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsS0FBa0IsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDaEcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7UUFFdkYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsS0FBa0IsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDbEcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7UUFFekYsSUFBSSxDQUFDLGFBQWEsQ0FBQyw4QkFBOEIsQ0FBQyxHQUFHLENBQUMsS0FBa0IsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUMxSCxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLHVCQUF1QixFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsOEJBQThCLENBQUMsQ0FBQyxDQUFDO1FBRWpILElBQUksQ0FBQyxhQUFhLENBQUMsK0JBQStCLENBQUMsR0FBRyxDQUFDLEtBQWtCLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDNUgsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLCtCQUErQixDQUFDLENBQUMsQ0FBQztRQUVuSCxJQUFJLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxLQUFrQixFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUN4RyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztRQUUvRixJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxLQUFrQixFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNwRyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztRQUUzRixJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsS0FBa0IsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDNUYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBRXBGLENBQUM7SUFFRCwyQ0FBMkM7SUFDbkMsUUFBUTtRQUNULE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsd0JBQXdCLENBQUMsRUFBRTtZQUNqRCxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO1NBQ3hHO1FBRUQsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLDZCQUE2QixDQUFDLEVBQUU7WUFDdEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQztTQUNsSDtRQUVELElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyw2QkFBNkIsQ0FBQyxFQUFFO1lBQ3RELElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUM7U0FDbEg7UUFFRCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDdkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1NBQ3BGO1FBRUQsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLEVBQUU7WUFDMUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7U0FDMUY7UUFFRCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsRUFBRTtZQUMzQyxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztTQUM1RjtRQUVELElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyw4QkFBOEIsQ0FBQyxFQUFFO1lBQ3ZELElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLENBQUM7U0FDcEg7UUFFRCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsK0JBQStCLENBQUMsRUFBRTtZQUN4RCxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLHdCQUF3QixFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUFDO1NBQ3RIO1FBRUQsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLEVBQUU7WUFDOUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7U0FDbEc7UUFFRCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsRUFBRTtZQUM1QyxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztTQUM5RjtRQUVELElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsRUFBRTtZQUN4QyxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7U0FDdEY7SUFFRixDQUFDO0NBQ0QsQ0FBQTs7WUFqNUJpQixVQUFVOztBQW9CM0I7SUFEQyxLQUFLLEVBQUU7K0NBR1A7QUFPRDtJQURDLEtBQUssRUFBRTt1REFHUDtBQU9EO0lBREMsS0FBSyxFQUFFO3FEQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7cURBR1A7QUFPRDtJQURDLEtBQUssRUFBRTtxREFHUDtBQU9EO0lBREMsS0FBSyxFQUFFO3FEQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7NkNBR1A7QUFPRDtJQURDLEtBQUssRUFBRTswQ0FHUDtBQU9EO0lBREMsS0FBSyxFQUFFO2lEQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7eURBR1A7QUFPRDtJQURDLEtBQUssRUFBRTtxREFHUDtBQU9EO0lBREMsS0FBSyxFQUFFO3lEQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7eURBR1A7QUFPRDtJQURDLEtBQUssRUFBRTtnREFHUDtBQU9EO0lBREMsS0FBSyxFQUFFO2lEQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7OENBR1A7QUFPRDtJQURDLEtBQUssRUFBRTswQ0FHUDtBQU9EO0lBREMsS0FBSyxFQUFFO2dEQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7NkRBR1A7QUFPRDtJQURDLEtBQUssRUFBRTtzREFHUDtBQU9EO0lBREMsS0FBSyxFQUFFOytDQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7a0RBR1A7QUFPRDtJQURDLEtBQUssRUFBRTs0Q0FHUDtBQU9EO0lBREMsS0FBSyxFQUFFO2tEQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7OENBR1A7QUFPRDtJQURDLEtBQUssRUFBRTs2Q0FHUDtBQU9EO0lBREMsS0FBSyxFQUFFO2tEQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7aURBR1A7QUFPRDtJQURDLEtBQUssRUFBRTtrREFHUDtBQU9EO0lBREMsS0FBSyxFQUFFO29EQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7Z0RBR1A7QUFPRDtJQURDLEtBQUssRUFBRTtrREFHUDtBQU9EO0lBREMsS0FBSyxFQUFFOzZEQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7MkNBR1A7QUFPRDtJQURDLEtBQUssRUFBRTtrREFHUDtBQU9EO0lBREMsS0FBSyxFQUFFO3VEQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7MkRBR1A7QUFPRDtJQURDLEtBQUssRUFBRTtzREFHUDtBQU9EO0lBREMsS0FBSyxFQUFFO3NEQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7c0RBR1A7QUFPRDtJQURDLEtBQUssRUFBRTsrQ0FHUDtBQU9EO0lBREMsS0FBSyxFQUFFOzJDQUdQO0FBT1M7SUFBVCxNQUFNLEVBQUU7eURBQW1FO0FBSWxFO0lBQVQsTUFBTSxFQUFFOzhEQUF3RTtBQUl2RTtJQUFULE1BQU0sRUFBRTs4REFBd0U7QUFJdkU7SUFBVCxNQUFNLEVBQUU7K0NBQXlEO0FBSXhEO0lBQVQsTUFBTSxFQUFFO2tEQUE0RDtBQUkzRDtJQUFULE1BQU0sRUFBRTttREFBNkQ7QUFJNUQ7SUFBVCxNQUFNLEVBQUU7K0RBQXlFO0FBSXhFO0lBQVQsTUFBTSxFQUFFO2dFQUEwRTtBQUl6RTtJQUFULE1BQU0sRUFBRTtzREFBZ0U7QUFJL0Q7SUFBVCxNQUFNLEVBQUU7b0RBQThEO0FBSTdEO0lBQVQsTUFBTSxFQUFFO2dEQUEwRDtBQXZidkQsY0FBYztJQUoxQixTQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsNEJBQTRCO0tBQ3RDLENBQUM7R0FFVyxjQUFjLENBazVCMUI7U0FsNUJZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFydCB9IGZyb20gJy4vLi4vaW5kZXgnO1xuaW1wb3J0IHsgQW5pbWF0aW9uLCBDaGFydENvbG9yU2NoZW1lLCBDaGFydFJlbmRlckVuZ2luZSwgSG9yaXpvbnRhbEFsaWdubWVudCwgQ2hhcnRSb3RhdGlvblBvaW50LCBWZXJ0aWNhbEFsaWdubWVudCwgQ2hhcnRBbm5vdGF0aW9uVHlwZSwgQ2hhcnRVbnNlbGVjdE1vZGUsIE9yaWVudGF0aW9uLCBDaGFydFNlcmllc0dyb3VwU2VyaWVFbXB0eVBvaW50c0Rpc3BsYXksIENoYXJ0U3ltYm9sVHlwZSwgQ2hhcnRUeXBlLCBBeGlzUG9zaXRpb24sIENoYXJ0QmFzZVVuaXQsIENoYXJ0WEF4aXNUeXBlLCBDaGFydExvY2FsaXphdGlvbiwgUGFkZGluZywgQ2hhcnRTZXJpZXNHcm91cCwgQ2hhcnRBbm5vdGF0aW9uLCBPZmZzZXQsIENoYXJ0QW5ub3RhdGlvblRleHQsIENoYXJ0QmFuZCwgQ2hhcnRGb3JtYXRTZXR0aW5ncywgQ2hhcnRTZXJpZXNHcm91cFNlcmllLCBDaGFydExhYmVscywgQ2hhcnRWYWx1ZUF4aXMsIENoYXJ0TGluZXMsIENoYXJ0TGluZSwgQ2hhcnRUaXRsZSwgQ2hhcnRYQXhpcywgQ2hhcnRSYW5nZVNlbGVjdG9yLCBFbGVtZW50UmVuZGVyTW9kZX0gZnJvbSAnLi8uLi9pbmRleCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIERpcmVjdGl2ZSwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIFNpbXBsZUNoYW5nZXMsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXNlRWxlbWVudCwgU21hcnQgfSBmcm9tICcuL3NtYXJ0LmVsZW1lbnQnO1xuZXhwb3J0IHsgQW5pbWF0aW9uLCBDaGFydENvbG9yU2NoZW1lLCBDaGFydFJlbmRlckVuZ2luZSwgSG9yaXpvbnRhbEFsaWdubWVudCwgQ2hhcnRSb3RhdGlvblBvaW50LCBWZXJ0aWNhbEFsaWdubWVudCwgQ2hhcnRBbm5vdGF0aW9uVHlwZSwgQ2hhcnRVbnNlbGVjdE1vZGUsIE9yaWVudGF0aW9uLCBDaGFydFNlcmllc0dyb3VwU2VyaWVFbXB0eVBvaW50c0Rpc3BsYXksIENoYXJ0U3ltYm9sVHlwZSwgQ2hhcnRUeXBlLCBBeGlzUG9zaXRpb24sIENoYXJ0QmFzZVVuaXQsIENoYXJ0WEF4aXNUeXBlLCBDaGFydExvY2FsaXphdGlvbiwgUGFkZGluZywgQ2hhcnRTZXJpZXNHcm91cCwgQ2hhcnRBbm5vdGF0aW9uLCBPZmZzZXQsIENoYXJ0QW5ub3RhdGlvblRleHQsIENoYXJ0QmFuZCwgQ2hhcnRGb3JtYXRTZXR0aW5ncywgQ2hhcnRTZXJpZXNHcm91cFNlcmllLCBDaGFydExhYmVscywgQ2hhcnRWYWx1ZUF4aXMsIENoYXJ0TGluZXMsIENoYXJ0TGluZSwgQ2hhcnRUaXRsZSwgQ2hhcnRYQXhpcywgQ2hhcnRSYW5nZVNlbGVjdG9yLCBFbGVtZW50UmVuZGVyTW9kZX0gZnJvbSAnLi8uLi9pbmRleCc7XG5leHBvcnQgeyBTbWFydCB9IGZyb20gJy4vc21hcnQuZWxlbWVudCc7XG5leHBvcnQgeyBDaGFydCB9IGZyb20gJy4vLi4vaW5kZXgnO1xuXG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ3NtYXJ0LWNoYXJ0LCBbc21hcnQtY2hhcnRdJ1xufSlcblxuZXhwb3J0IGNsYXNzIENoYXJ0Q29tcG9uZW50IGV4dGVuZHMgQmFzZUVsZW1lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcblx0Y29uc3RydWN0b3IocmVmOiBFbGVtZW50UmVmPENoYXJ0Pikge1xuXHRcdHN1cGVyKHJlZik7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID0gcmVmLm5hdGl2ZUVsZW1lbnQgYXMgQ2hhcnQ7XG5cdH1cblxuXHRwcml2YXRlIGV2ZW50SGFuZGxlcnM6IGFueVtdID0gW107XG5cblx0cHVibGljIG5hdGl2ZUVsZW1lbnQ6IENoYXJ0O1xuXHQvKiogQGRlc2NyaXB0aW9uIENyZWF0ZXMgdGhlIGNvbXBvbmVudCBvbiBkZW1hbmQuXG5cdCAqIEBwYXJhbSBwcm9wZXJ0aWVzIEFuIG9wdGlvbmFsIG9iamVjdCBvZiBwcm9wZXJ0aWVzLCB3aGljaCB3aWxsIGJlIGFkZGVkIHRvIHRoZSB0ZW1wbGF0ZSBiaW5kZWQgb25lcy5cblx0ICovXG5cdHB1YmxpYyBjcmVhdGVDb21wb25lbnQocHJvcGVydGllcyA9IHt9KTogYW55IHtcbiAgICBcdHRoaXMubmF0aXZlRWxlbWVudCA9IDxDaGFydD5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzbWFydC1jaGFydCcpO1xuXHRcdGZvciAobGV0IHByb3BlcnR5TmFtZSBpbiBwcm9wZXJ0aWVzKSB7IFxuIFx0XHRcdHRoaXMubmF0aXZlRWxlbWVudFtwcm9wZXJ0eU5hbWVdID0gcHJvcGVydGllc1twcm9wZXJ0eU5hbWVdO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50O1xuXHR9XG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSBhbmltYXRpb24gbW9kZS4gQW5pbWF0aW9uIGlzIGRpc2FibGVkIHdoZW4gdGhlIHByb3BlcnR5IGlzIHNldCB0byAnbm9uZScuICovXG5cdEBJbnB1dCgpXG5cdGdldCBhbmltYXRpb24oKTogQW5pbWF0aW9uIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmFuaW1hdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYW5pbWF0aW9uKHZhbHVlOiBBbmltYXRpb24pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYW5pbWF0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIGFuaW1hdGlvbiBkdXJhdGlvbiBpbiBtaWxsaXNlY29uZHMuIFRoZSB2YWx1ZSBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNTAwMC4gSWYgaXQgaXMgb3V0c2lkZSBvZiB0aGlzIHJhbmdlIGpxeENoYXJ0IHdpbGwgcmVzZXQgaXQgdG8gdGhlIGRlZmF1bHQgdmFsdWUuICovXG5cdEBJbnB1dCgpXG5cdGdldCBhbmltYXRpb25EdXJhdGlvbigpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYW5pbWF0aW9uRHVyYXRpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGFuaW1hdGlvbkR1cmF0aW9uKHZhbHVlOiBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYW5pbWF0aW9uRHVyYXRpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyB0aGUgY2hhcnQncyBiYWNrZ3JvdW5kIGNvbG9yLiBGb3IgZXhhbXBsZTogJyNEREZGRTgnICovXG5cdEBJbnB1dCgpXG5cdGdldCBiYWNrZ3JvdW5kQ29sb3IoKTogc3RyaW5nIHwgbnVsbCB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5iYWNrZ3JvdW5kQ29sb3IgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGJhY2tncm91bmRDb2xvcih2YWx1ZTogc3RyaW5nIHwgbnVsbCkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5iYWNrZ3JvdW5kQ29sb3IgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyB0aGUgY2hhcnQncyBiYWNrZ3JvdW5kIGltYWdlLiBGb3IgZXhhbXBsZTogJ2h0dHBzOi8vd3d3Lmh0bWxlbGVtZW50cy5jb20vZGVtb3MvaW1hZ2VzL2Nhcm91c2VsLWxhcmdlLTEuanBnJyAqL1xuXHRASW5wdXQoKVxuXHRnZXQgYmFja2dyb3VuZEltYWdlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5iYWNrZ3JvdW5kSW1hZ2UgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGJhY2tncm91bmRJbWFnZSh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmJhY2tncm91bmRJbWFnZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBjaGFydCdzIGJvcmRlciBjb2xvci4gRm9yIGV4YW1wbGU6ICcjMDk4NzAwJyAqL1xuXHRASW5wdXQoKVxuXHRnZXQgYm9yZGVyTGluZUNvbG9yKCk6IHN0cmluZyB8IG51bGwge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYm9yZGVyTGluZUNvbG9yIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBib3JkZXJMaW5lQ29sb3IodmFsdWU6IHN0cmluZyB8IG51bGwpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYm9yZGVyTGluZUNvbG9yID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgdGhlIGNoYXJ0J3MgYm9yZGVyIGxpbmUgd2lkdGguICovXG5cdEBJbnB1dCgpXG5cdGdldCBib3JkZXJMaW5lV2lkdGgoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmJvcmRlckxpbmVXaWR0aCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYm9yZGVyTGluZVdpZHRoKHZhbHVlOiBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYm9yZGVyTGluZVdpZHRoID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgdGhlIGNhcHRpb24gKHRpdGxlKSBvZiB0aGUgY2hhcnQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBjYXB0aW9uKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jYXB0aW9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjYXB0aW9uKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY2FwdGlvbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHdoZXRoZXIgdG8gY2xpcCBwbG90dGVkIGVsZW1lbnRzIHRoYXQgb3ZlcmZsb3cgdGhlIGF4aXMgYm91bmRhcmllcy4gKi9cblx0QElucHV0KClcblx0Z2V0IGNsaXAoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jbGlwIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjbGlwKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNsaXAgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyB0aGUgY2hhcnQncyBjb2xvciBwYWxsZXRlLiBqcXhDaGFydCBzdXBwcG9ydHMgMzIgY29sb3Igc2NoZW1lcyBmcm9tICdzY2hlbWUwMScgdG8gJ3NjaGVtZTMyJy4gKi9cblx0QElucHV0KClcblx0Z2V0IGNvbG9yU2NoZW1lKCk6IENoYXJ0Q29sb3JTY2hlbWUge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sb3JTY2hlbWUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGNvbG9yU2NoZW1lKHZhbHVlOiBDaGFydENvbG9yU2NoZW1lKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbG9yU2NoZW1lID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEVuYWJsZXMgb3IgZGlzYWJsZXMgb3ZlcmxhcHBpbmcgb2YgdGhlIGNvbHVtbiBzZXJpZXMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBjb2x1bW5TZXJpZXNPdmVybGFwKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sdW1uU2VyaWVzT3ZlcmxhcCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgY29sdW1uU2VyaWVzT3ZlcmxhcCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb2x1bW5TZXJpZXNPdmVybGFwID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEdldHMgb3Igc2V0cyB0aGUgY29sb3Igb2YgdGhlIGNyb3NzaGFpcnMgbGluZXMuIFRoZSAnZW5hYmxlQ3Jvc3NoYWlycycgcHJvcGVydHkgc2hvdWxkIGJlICd0cnVlJy4gKi9cblx0QElucHV0KClcblx0Z2V0IGNyb3NzaGFpcnNDb2xvcigpOiBzdHJpbmcgfCBudWxsIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNyb3NzaGFpcnNDb2xvciA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgY3Jvc3NoYWlyc0NvbG9yKHZhbHVlOiBzdHJpbmcgfCBudWxsKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNyb3NzaGFpcnNDb2xvciA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBHZXRzIG9yIHNldHMgdGhlIGRhc2ggc3R5bGUgb2YgdGhlIGNyb3NzaGFpcnMgbGluZXMuIFRoZSBzdHlsZSBpcyBhIHNlcmllcyBvZiBudW1iZXJzIGluZGljYXRpbmcgbGluZSBsZW5ndGggZm9sbG93ZWQgYnkgc3BhY2UgbGVuZ3RoLiBUaGUgJ2VuYWJsZUNyb3NzaGFpcnMnIHByb3BlcnR5IHNob3VsZCBiZSAndHJ1ZScuIEZvciBleGFtcGxlOiAnMywzJyAqL1xuXHRASW5wdXQoKVxuXHRnZXQgY3Jvc3NoYWlyc0Rhc2hTdHlsZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY3Jvc3NoYWlyc0Rhc2hTdHlsZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgY3Jvc3NoYWlyc0Rhc2hTdHlsZSh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNyb3NzaGFpcnNEYXNoU3R5bGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gR2V0cyBvciBzZXRzIHRoZSB3aWR0aCBvZiB0aGUgY3Jvc3NoYWlycyBsaW5lcy4gVGhlICdlbmFibGVDcm9zc2hhaXJzJyBwcm9wZXJ0eSBzaG91bGQgYmUgJ3RydWUnICovXG5cdEBJbnB1dCgpXG5cdGdldCBjcm9zc2hhaXJzTGluZVdpZHRoKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jcm9zc2hhaXJzTGluZVdpZHRoIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjcm9zc2hhaXJzTGluZVdpZHRoKHZhbHVlOiBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY3Jvc3NoYWlyc0xpbmVXaWR0aCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBjaGFydCdzIGRhdGEgc291cmNlLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGF0YVNvdXJjZSgpOiBhbnlbXSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kYXRhU291cmNlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkYXRhU291cmNlKHZhbHVlOiBhbnlbXSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kYXRhU291cmNlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgdGhlIGRlc2NyaXB0aW9uIHRleHQgb2YgdGhlIGNoYXJ0LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGVzY3JpcHRpb24oKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRlc2NyaXB0aW9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkZXNjcmlwdGlvbih2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRlc2NyaXB0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEVuYWJsZXMgb3IgZGlzYWJsZXMgdGhlIGNoYXJ0LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlZCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZWQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgZHJhd2luZyBmdW5jdGlvbiBvZiBqcXhDaGFydC4gV2hlbiB0aGUgcHJvcGVydHkgaXMgc2V0LCB5b3UgY2FuIG92ZXJyaWRlIHRoZSBqcXhDaGFydCdzIGRyYXdpbmcuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkcmF3KCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kcmF3IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkcmF3KHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZHJhdyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBGdW5jdGlvbiBmb3IgY3VzdG9tIGRyYXdpbmcgYmVmb3JlIHRoZSBjYXB0aW9uIGFuZCBvdGhlciBjaGFydCBlbGVtZW50cy4gKi9cblx0QElucHV0KClcblx0Z2V0IGRyYXdCZWZvcmUoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRyYXdCZWZvcmUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRyYXdCZWZvcmUodmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kcmF3QmVmb3JlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgaWYgdGhlIGFuaW1hdGlvbiBvZiB0aGUgYXhlcyB0ZXh0IGlzIGVuYWJsZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBlbmFibGVBeGlzVGV4dEFuaW1hdGlvbigpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmVuYWJsZUF4aXNUZXh0QW5pbWF0aW9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBlbmFibGVBeGlzVGV4dEFuaW1hdGlvbih2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5lbmFibGVBeGlzVGV4dEFuaW1hdGlvbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFbmFibGVzIG9yIGRpc2FibGVzIHRoZSBjcm9zc2hhaXJzIGxpbmVzLiBUaGUgbGluZXMgYXJlIGRpc3BsYXllZCBpbiBsaW5lIGFuZCBhcmVhIHNlcmllcyB3aGVuIHlvdSBtb3ZlIG92ZXIgYSBkYXRhIHBvaW50LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZW5hYmxlQ3Jvc3NoYWlycygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmVuYWJsZUNyb3NzaGFpcnMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGVuYWJsZUNyb3NzaGFpcnModmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZW5hYmxlQ3Jvc3NoYWlycyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHdoZXRoZXIgdG8gZGlzcGxheSB0aGUgY2hhcnQgdXNpbmcgZ3JleXNjYWxlIGNvbG9ycy4gKi9cblx0QElucHV0KClcblx0Z2V0IGdyZXlTY2FsZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmdyZXlTY2FsZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZ3JleVNjYWxlKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmdyZXlTY2FsZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBsZWdlbmQncyBsYXlvdXQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBsZWdlbmRMYXlvdXQoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxlZ2VuZExheW91dCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbGVnZW5kTGF5b3V0KHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubGVnZW5kTGF5b3V0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgbG9jYWxlLiBVc2VkIGluIGNvbmp1bmN0aW9uIHdpdGggdGhlIHByb3BlcnR5IG1lc3NhZ2VzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbG9jYWxlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sb2NhbGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGxvY2FsZSh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxvY2FsZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBMb2NhbGl6YXRpb24gb2JqZWN0IGNvbnRhaW5pbmcgY3VsdHVyZS1zcGVjaWZpYyBwcm9wZXJ0aWVzIHJlcXVpcmVkIGZvciBmb3JtYXR0aW5nIGN1cnJlbmNpZXMsIG51bWJlcnMgYW5kIGRhdGVzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbG9jYWxpemF0aW9uKCk6IENoYXJ0TG9jYWxpemF0aW9uIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxvY2FsaXphdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbG9jYWxpemF0aW9uKHZhbHVlOiBDaGFydExvY2FsaXphdGlvbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sb2NhbGl6YXRpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIGFuIG9iamVjdCBzcGVjaWZ5aW5nIHN0cmluZ3MgdXNlZCBpbiB0aGUgd2lkZ2V0IHRoYXQgY2FuIGJlIGxvY2FsaXplZC4gVXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZSBwcm9wZXJ0eSBsb2NhbGUuICovXG5cdEBJbnB1dCgpXG5cdGdldCBtZXNzYWdlcygpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubWVzc2FnZXMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG1lc3NhZ2VzKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubWVzc2FnZXMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyB0aGUgbGVmdCwgdG9wLCByaWdodCBhbmQgYm90dG9tIHBhZGRpbmcgb2YgdGhlIENoYXJ0LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcGFkZGluZygpOiBQYWRkaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnBhZGRpbmcgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHBhZGRpbmcodmFsdWU6IFBhZGRpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucGFkZGluZyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSByZW5kZXJpbmcgZW5naW5lIHVzZWQgdG8gZGlzcGxheSB0aGUgY2hhcnQuIFdoZW4gdGhlIHByb3BlcnR5IGlzIHNldCB0byBhbiBlbXB0eSBzdHJpbmcsIGpxeENoYXJ0IHdpbGwgYXV0b21hdGljYWxseSBzZWxlY3QgYW4gb3B0aW1hbCByZW5kZXJpbmcgZW5naW5lIGRlcGVuZGluZyBvbiB0aGUgYnJvd3NlciBjYXBhYmlsaXRpZXMuICovXG5cdEBJbnB1dCgpXG5cdGdldCByZW5kZXJFbmdpbmUoKTogQ2hhcnRSZW5kZXJFbmdpbmUge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmVuZGVyRW5naW5lIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCByZW5kZXJFbmdpbmUodmFsdWU6IENoYXJ0UmVuZGVyRW5naW5lKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlbmRlckVuZ2luZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgYSB2YWx1ZSBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIENoYXJ0J3MgbGF5b3V0IGlzIG1pcnJvcmVkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcmlnaHRUb0xlZnQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yaWdodFRvTGVmdCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcmlnaHRUb0xlZnQodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmlnaHRUb0xlZnQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhlIHNlcmllc0dyb3VwcyBwcm9wZXJ0eSBpcyB1c2VkIHRvIGRlc2NyaWJlIGFsbCBzZXJpZXMgZGlzcGxheWVkIG9uIHRoZSBjaGFydC4ganF4Q2hhcnQgc3VwcG9ydHMgbXVsdGlwbGUgc2VyaWVzIG9mIGRpZmZlcmVudCB0eXBlcyBhbmQgc2VyaWVzIGdyb3VwaW5nLiBFYWNoIHNlcmllcyBncm91cCBtYXkgaGF2ZSBpdHMgb3duIFZhbHVlIEF4aXMgKFktYXhpcykgd2hpY2ggYWxsb3dzIHlvdSB0byBoYXZlIHZhbHVlcyB3aXRoIGRpZmZlcmVudCBzY2FsZXMgZGlzcGxheWVkIG9uIHRoZSBzYW1lIGNoYXJ0IGF0IHRoZSBzYW1lIHRpbWUuIEl0IGFsc28gYWxsb3dzIHlvdSB0byBkaXNwbGF5IG11bHRpcGxlIHNlcmllcyB0eXBlcyB0b2dldGhlciBvbiB0aGUgc2FtZSBjaGFydC4gRm9yIGV4YW1wbGUsIHlvdSBjYW4gZGlzcGxheSBhbGwgc2VyaWVzIGluIG9uZSBncm91cCBhcyBsaW5lcyBhbmQgdGhlIHNlcmllcyBpbiBhIHNlY29uZCBncm91cCBhcyBjb2x1bW5zLiBzZXJpZXNHcm91cHMgaXMgYW4gYXJyYXkgb2Ygb2JqZWN0cyB3aGVyZSBlYWNoIG9iamVjdCByZXByZXNlbnRzIG9uZSBncm91cC4gKi9cblx0QElucHV0KClcblx0Z2V0IHNlcmllc0dyb3VwcygpOiBDaGFydFNlcmllc0dyb3VwW10ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VyaWVzR3JvdXBzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzZXJpZXNHcm91cHModmFsdWU6IENoYXJ0U2VyaWVzR3JvdXBbXSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zZXJpZXNHcm91cHMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB3aGV0aGVyIHRvIGRpc3BsYXkgdGhlIGNoYXJ0J3MgYm9yZGVyIGxpbmUuICovXG5cdEBJbnB1dCgpXG5cdGdldCBzaG93Qm9yZGVyTGluZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNob3dCb3JkZXJMaW5lIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzaG93Qm9yZGVyTGluZSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zaG93Qm9yZGVyTGluZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHdoZXRoZXIgdG8gc2hvdyBvciBoaWRlIHRoZSBjaGFydCBzZXJpZXMgbGVnZW5kLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc2hvd0xlZ2VuZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNob3dMZWdlbmQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHNob3dMZWdlbmQodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2hvd0xlZ2VuZCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFbmFibGVzIG9yIGRpc2FibGVzIHRoZSBjaGFydCB0b29sdGlwcy4gKi9cblx0QElucHV0KClcblx0Z2V0IHNob3dUb29sVGlwcygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNob3dUb29sVGlwcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc2hvd1Rvb2xUaXBzKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNob3dUb29sVGlwcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHdoZXRoZXIgdG8gc2hvdyBhIGNvbXBvc2l0ZSB0b29sdGlwIGNvbnRhaW5pbmcgaW5mb3JtYXRpb24gZm9yIGFsbCBzZXJpZXMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBzaG93VG9vbFRpcHNPbkFsbFNlcmllcygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNob3dUb29sVGlwc09uQWxsU2VyaWVzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzaG93VG9vbFRpcHNPbkFsbFNlcmllcyh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zaG93VG9vbFRpcHNPbkFsbFNlcmllcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBzZXQgb2YgZGVmYXVsdCBiYWNrZ3JvdW5kLCBsaW5lLCB0ZXh0IGFuZCBiYW5kIGNvbG9ycyB0aGF0IHdpbGwgYmUgdXNlZCBpbiB0aGUgQ2hhcnQuICovXG5cdEBJbnB1dCgpXG5cdGdldCB0aGVtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGhlbWUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRoZW1lKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGhlbWUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyB0aGUgcGFkZGluZyBvZiB0aGUgY2hhcnQncyB0aXRsZSAoY2FwdGlvbikuICovXG5cdEBJbnB1dCgpXG5cdGdldCB0aXRsZVBhZGRpbmcoKTogUGFkZGluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50aXRsZVBhZGRpbmcgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRpdGxlUGFkZGluZyh2YWx1ZTogUGFkZGluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50aXRsZVBhZGRpbmcgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVG9vbHRpcCBiYWNrZ3JvdW5kIGNvbG9yLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdG9vbFRpcEJhY2tncm91bmQoKTogc3RyaW5nIHwgbnVsbCB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50b29sVGlwQmFja2dyb3VuZCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdG9vbFRpcEJhY2tncm91bmQodmFsdWU6IHN0cmluZyB8IG51bGwpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudG9vbFRpcEJhY2tncm91bmQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgdG9vbHRpcCBoaWRlIGRlbGF5IGluIG1pbGxpc2Vjb25kcy4gKi9cblx0QElucHV0KClcblx0Z2V0IHRvb2xUaXBGb3JtYXRGdW5jdGlvbigpOiB7KHZhbHVlPzogYW55LCBpbmRleD86IG51bWJlciwgc2VyaWVzPzogYW55KTogc3RyaW5nfSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50b29sVGlwRm9ybWF0RnVuY3Rpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRvb2xUaXBGb3JtYXRGdW5jdGlvbih2YWx1ZTogeyh2YWx1ZT86IGFueSwgaW5kZXg/OiBudW1iZXIsIHNlcmllcz86IGFueSk6IHN0cmluZ30pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudG9vbFRpcEZvcm1hdEZ1bmN0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFRvb2x0aXAgbGluZSBjb2xvci4gKi9cblx0QElucHV0KClcblx0Z2V0IHRvb2xUaXBIaWRlRGVsYXkoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRvb2xUaXBIaWRlRGVsYXkgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRvb2xUaXBIaWRlRGVsYXkodmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50b29sVGlwSGlkZURlbGF5ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIHRvb2x0aXAgc2hvdyBkZWxheSBpbiBtaWxsaXNlY29uZHMuIFZhbHVlcyBtYXkgcmFuZ2UgZnJvbSAwIHRvIDEwMDAwIFttc10uICovXG5cdEBJbnB1dCgpXG5cdGdldCB0b29sVGlwTGluZUNvbG9yKCk6IHN0cmluZyB8IG51bGwge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudG9vbFRpcExpbmVDb2xvciA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdG9vbFRpcExpbmVDb2xvcih2YWx1ZTogc3RyaW5nIHwgbnVsbCkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50b29sVGlwTGluZUNvbG9yID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEFuIG9iamVjdCB3aXRoIHNldHRpbmdzIGFib3V0IHRoZSBDaGFydCdzIHktYXhpcyAodmFsdWUgYXhpcykuICovXG5cdEBJbnB1dCgpXG5cdGdldCB0b29sVGlwU2hvd0RlbGF5KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50b29sVGlwU2hvd0RlbGF5IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0b29sVGlwU2hvd0RlbGF5KHZhbHVlOiBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudG9vbFRpcFNob3dEZWxheSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBDaGFydCdzIHhBeGlzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdmFsdWVBeGlzKCk6IENoYXJ0VmFsdWVBeGlzIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnZhbHVlQXhpcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdmFsdWVBeGlzKHZhbHVlOiBDaGFydFZhbHVlQXhpcykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC52YWx1ZUF4aXMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gdW5kZWZpbmVkICovXG5cdEBJbnB1dCgpXG5cdGdldCB4QXhpcygpOiBDaGFydFhBeGlzIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnhBeGlzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB4QXhpcyh2YWx1ZTogQ2hhcnRYQXhpcykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC54QXhpcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGUgZXZlbnQgaXMgcmFpc2VkIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIGEgY2hhcnQgYW5ub3RhdGlvbi5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvbkFubm90YXRpb25DbGljazogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoZSBldmVudCBpcyByYWlzZWQgd2hlbiB0aGUgdXNlciBtb3ZlcyB0aGUgY3Vyc29yIGFib3ZlIGEgY2hhcnQgYW5ub3RhdGlvbi5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvbkFubm90YXRpb25Nb3VzZWVudGVyOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhlIGV2ZW50IGlzIHJhaXNlZCB3aGVuIHRoZSB1c2VyIG1vdmVzIHRoZSBjdXJzb3Igb3V0IG9mIGEgY2hhcnQgYW5ub3RhdGlvbi5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvbkFubm90YXRpb25Nb3VzZWxlYXZlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhlIGV2ZW50IGlzIHJhaXNlZCB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiBzZXJpZXMgZWxlbWVudC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvbkNsaWNrOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhlIGV2ZW50IGlzIHJhaXNlZCB3aGVuIHRoZSB1c2VyIG1vdmVzIHRoZSBjdXJzb3Igb3V0IG9mIGEgc2VyaWVzIGVsZW1lbnQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHQqL1xuXHRAT3V0cHV0KCkgb25Nb3VzZW91dDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoZSBldmVudCBpcyByYWlzZWQgd2hlbiB0aGUgdXNlciBtb3ZlcyB0aGUgY3Vyc29yIGFib3ZlIGEgc2VyaWVzIGVsZW1lbnQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHQqL1xuXHRAT3V0cHV0KCkgb25Nb3VzZW92ZXI6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGUgZXZlbnQgaXMgcmFpc2VkIGFmdGVyIHRoZSBjaGFydCdzIHJhbmdlIHNlbGVjdG9yIHBvc2l0aW9uIGNoYW5nZXMgYW5kIGFmdGVyIHRoZSBjaGFydCBlbmRzIHJlbmRlcmluZy5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvblJhbmdlU2VsZWN0aW9uQ2hhbmdlZDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoZSBldmVudCBpcyByYWlzZWQgd2hlbiB0aGUgY2hhcnQncyByYW5nZSBzZWxlY3RvciBwb3NpdGlvbiBjaGFuZ2VzIGFuZCBiZWZvcmUgdGhlIGNoYXJ0IHN0YXJ0cyByZW5kZXJpbmcuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHQqL1xuXHRAT3V0cHV0KCkgb25SYW5nZVNlbGVjdGlvbkNoYW5naW5nOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhlIGV2ZW50IGlzIHJhaXNlZCB3aGVuIHRoZSBjaGFydCBiZWdpbnMgcmVuZGVyaW5nLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Ki9cblx0QE91dHB1dCgpIG9uUmVmcmVzaEJlZ2luOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhlIGV2ZW50IGlzIHJhaXNlZCB3aGVuIHRoZSBjaGFydCBmaW5pc2hlcyByZW5kZXJpbmcuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHQqL1xuXHRAT3V0cHV0KCkgb25SZWZyZXNoRW5kOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhlIGV2ZW50IGlzIHJhaXNlZCB3aGVuIGEgc2VyaWUgaXMgdG9nZ2xlZCBieSBhIHVzZXIgY2xpY2sgaW4gdGhlIGNoYXJ0J3MgbGVnZW5kIG9yIHRocm91Z2ggYW4gQVBJIGNhbGwuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHQqL1xuXHRAT3V0cHV0KCkgb25Ub2dnbGU6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBZGRzIGEgbmV3IGNvbG9yIHNoZW1lLiBJZiBhIHNjaGVtZSB3aXRoIHRoZSBzYW1lIG5hbWUgYWxyZWFkeSBleGlzdHMsIHRoZSBtZXRob2Qgd2lsbCB1cGRhdGUgaXRzIGNvbG9ycy4gXG5cdCogQHBhcmFtIHtzdHJpbmd9IHNjaGVtZU5hbWUuIFRoZSBuYW1lIG9mIHRoZSBjdXN0b20gY29sb3Igc2NoZW1lLlxuXHQqIEBwYXJhbSB7YW55W119IGNvbG9yc0FycmF5LiBBbiBhcnJheSBvZiBjb2xvciB2YWx1ZXMuXG5cdCovXG4gICAgcHVibGljIGFkZENvbG9yU2NoZW1lKHNjaGVtZU5hbWU6IHN0cmluZywgY29sb3JzQXJyYXk6IGFueVtdKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmFkZENvbG9yU2NoZW1lKHNjaGVtZU5hbWUsIGNvbG9yc0FycmF5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5hZGRDb2xvclNjaGVtZShzY2hlbWVOYW1lLCBjb2xvcnNBcnJheSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJldHVybnMgdGhlIGNvbG9ycyBvZiBhIGNvbG9yIHNjaGVtZSBieSBuYW1lLiBJZiB0aGUgc2NoZW1lIGRvZXNuJ3QgZXhpc3QgdGhlIG1ldGhvZCByZXR1cm5zIHVuZGVmaW5lZC4gXG5cdCogQHBhcmFtIHtzdHJpbmd9IHNjaGVtZU5hbWUuIFRoZSBuYW1lIG9mIHRoZSBjb2xvciBzY2hlbWUuXG5cdCogQHJldHVybnMge2FueVtdfVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0Q29sb3JTY2hlbWUoc2NoZW1lTmFtZSk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRDb2xvclNjaGVtZShzY2hlbWVOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEdldHMgdGhlIHJlbmRlcmVkIGNvb3JkaW5hdGVzIG9mIGEgZGF0YSBwb2ludCBlbGVtZW50LiBcblx0KiBAcGFyYW0ge251bWJlcn0gZ3JvdXBJbmRleC4gU2VyaWVzIGdyb3VwIGluZGV4LlxuXHQqIEBwYXJhbSB7bnVtYmVyfSBzZXJpZUluZGV4LiBTZXJpZXMgaW5kZXguXG5cdCogQHBhcmFtIHtudW1iZXJ9IGl0ZW1JbmRleC4gSXRlbSAoZGF0YSBwb2ludCkgaW5kZXguXG5cdCogQHJldHVybnMge3sgeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBjZW50ZXI6IG51bWJlciwgY2VudGVyT2Zmc2V0OiBudW1iZXIsIGlubmVyUmFkaXVzOiBudW1iZXIsIG91dGVyUmFkaXVzOiBudW1iZXIsIHNlbGVjdGVkUmFkaXVzQ2hhbmdlOiBudW1iZXIsIGZyb21BbmdsZTogbnVtYmVyLCB0b0FuZ2xlOiBudW1iZXIsIHJhZGl1czogbnVtYmVyIH19XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRJdGVtQ29vcmQoZ3JvdXBJbmRleCwgc2VyaWVJbmRleCwgaXRlbUluZGV4KTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldEl0ZW1Db29yZChncm91cEluZGV4LCBzZXJpZUluZGV4LCBpdGVtSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gR2V0cyB0aGUgbnVtYmVyIG9mIHJlbmRlcmVkIGl0ZW1zIGluIGEgc3BlY2lmaWMgc2VyaWUuIFxuXHQqIEBwYXJhbSB7bnVtYmVyfSBncm91cEluZGV4LiBTZXJpZXMgZ3JvdXAgaW5kZXguXG5cdCogQHBhcmFtIHtudW1iZXJ9IHNlcmllSW5kZXguIFNlcmllcyBpbmRleC5cblx0KiBAcmV0dXJucyB7bnVtYmVyfVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0SXRlbXNDb3VudChncm91cEluZGV4LCBzZXJpZUluZGV4KTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldEl0ZW1zQ291bnQoZ3JvdXBJbmRleCwgc2VyaWVJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBHZXRzIHRoZSByZW5kZXJlZCBjb29yZGluYXRlcyBhbmQgdmFsdWVzIG9mIHRoZSB2YWx1ZUF4aXMgbGFiZWxzLiBcblx0KiBAcGFyYW0ge251bWJlcn0gZ3JvdXBJbmRleC4gU2VyaWVzIGdyb3VwIGluZGV4LlxuXHQqIEByZXR1cm5zIHthbnl9XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRWYWx1ZUF4aXNMYWJlbHMoZ3JvdXBJbmRleCk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRWYWx1ZUF4aXNMYWJlbHMoZ3JvdXBJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBHZXRzIHRoZSByZW5kZXJlZCByZWN0YW5nbGUgY29vcmRpbmF0ZXMgb2YgdGhlIHZhbHVlQXhpcyBvZiBzcGVjaWZpYyBzZXJpZSBncm91cC4gXG5cdCogQHBhcmFtIHtudW1iZXJ9IGdyb3VwSW5kZXguIFNlcmllcyBncm91cCBpbmRleC5cblx0KiBAcmV0dXJucyB7RE9NUmVjdH1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldFZhbHVlQXhpc1JlY3QoZ3JvdXBJbmRleCk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRWYWx1ZUF4aXNSZWN0KGdyb3VwSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gR2V0cyB0aGUgdmFsdWVBeGlzICh2ZXJ0aWNhbCBheGlzKSdzIHZhbHVlLiBcblx0KiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0LiBWZXJ0aWNhbCBvZmZzZXQuXG5cdCogQHBhcmFtIHtudW1iZXJ9IGdyb3VwSW5kZXguIFNlcmllcyBncm91cCBpbmRleC5cblx0KiBAcmV0dXJucyB7YW55fVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0VmFsdWVBeGlzVmFsdWUob2Zmc2V0LCBncm91cEluZGV4KTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldFZhbHVlQXhpc1ZhbHVlKG9mZnNldCwgZ3JvdXBJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBHZXRzIHRoZSByZW5kZXJlZCBjb29yZGluYXRlcyBhbmQgdmFsdWVzIG9mIHRoZSB4QXhpcyBsYWJlbHMuIFxuXHQqIEBwYXJhbSB7bnVtYmVyfSBncm91cEluZGV4LiBTZXJpZXMgZ3JvdXAgaW5kZXguXG5cdCogQHJldHVybnMge2FueX1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldFhBeGlzTGFiZWxzKGdyb3VwSW5kZXgpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0WEF4aXNMYWJlbHMoZ3JvdXBJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBHZXRzIHRoZSByZW5kZXJlZCByZWN0YW5nbGUgY29vcmRpbmF0ZXMgb2YgdGhlIHgtQXhpcyBvZiBzcGVjaWZpYyBzZXJpZSBncm91cC4gXG5cdCogQHBhcmFtIHtudW1iZXJ9IGdyb3VwSW5kZXguIFNlcmllcyBncm91cCBpbmRleC5cblx0KiBAcmV0dXJucyB7RE9NUmVjdH1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldFhBeGlzUmVjdChncm91cEluZGV4KTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldFhBeGlzUmVjdChncm91cEluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEdldHMgdGhlIHhBeGlzIChob3Jpem9udGFsIGF4aXMpJ3MgdmFsdWUuIFxuXHQqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXQuIEhvcml6b250YWwgb2Zmc2V0LlxuXHQqIEBwYXJhbSB7bnVtYmVyfSBncm91cEluZGV4LiBTZXJpZXMgZ3JvdXAgaW5kZXguXG5cdCogQHJldHVybnMge2FueX1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldFhBeGlzVmFsdWUob2Zmc2V0LCBncm91cEluZGV4KTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldFhBeGlzVmFsdWUob2Zmc2V0LCBncm91cEluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEhpZGVzIGEgY2hhcnQgc2VyaWUuIFRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGlzIGZ1bmN0aW9uIGlzIHNhbWUgYXMgdGhlIHVzZXIgdW5jaGVja2luZyB0aGUgbGVnZW5kIGJveCBvZiBhIGNoYXJ0IHNlcmllLiBcblx0KiBAcGFyYW0ge251bWJlcn0gZ3JvdXBJbmRleC4gU2VyaWVzIGdyb3VwIGluZGV4LlxuXHQqIEBwYXJhbSB7bnVtYmVyfSBzZXJpZUluZGV4LiBTZXJpZXMgaW5kZXguXG5cdCogQHBhcmFtIHtudW1iZXJ9IGl0ZW1JbmRleD8uIEl0ZW0gKGRhdGEgcG9pbnQpIGluZGV4LiBBcHBsaWNhYmxlIHRvIHBpZSBhbmQgZG9udXQgc2VyaWVzIG9ubHkuXG5cdCovXG4gICAgcHVibGljIGhpZGVTZXJpZShncm91cEluZGV4OiBudW1iZXIsIHNlcmllSW5kZXg6IG51bWJlciwgaXRlbUluZGV4PzogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmhpZGVTZXJpZShncm91cEluZGV4LCBzZXJpZUluZGV4LCBpdGVtSW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmhpZGVTZXJpZShncm91cEluZGV4LCBzZXJpZUluZGV4LCBpdGVtSW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBIaWRlcyB0aGUgY3VycmVudCB0b29sdGlwIGlmIHZpc2libGUuIFxuXHQqIEBwYXJhbSB7bnVtYmVyfSBoaWRlRGVsYXk/LiBIaWRlIGRlbGF5LlxuXHQqL1xuICAgIHB1YmxpYyBoaWRlVG9vbFRpcChoaWRlRGVsYXk/OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaGlkZVRvb2xUaXAoaGlkZURlbGF5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5oaWRlVG9vbFRpcChoaWRlRGVsYXkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBQcmludHMgdGhlIGNoYXJ0LiBcblx0Ki9cbiAgICBwdWJsaWMgcHJpbnQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnByaW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucHJpbnQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVmcmVzaGVzIHRoZSBjb250ZW50IG9mIHRoZSBjaGFydCBlbGVtZW50IGFmdGVyIGEgcHJvcGVydHkgb3IgZGF0YSB1cGRhdGUuIFxuXHQqL1xuICAgIHB1YmxpYyByZWZyZXNoKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZWZyZXNoKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVmcmVzaCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZW1vdmVzIGFuIGV4aXN0aW5nIGNvbG9yIHNjaGVtZS4gSWYgdGhlIHNjaGVtZSBkb2VzIG5vdCBleGlzdCwgdGhlIG1ldGhvZCBoYXMgbm8gZWZmZWN0LiBcblx0KiBAcGFyYW0ge3N0cmluZ30gc2NoZW1lTmFtZS4gVGhlIG5hbWUgb2YgdGhlIGN1c3RvbSBjb2xvciBzY2hlbWUuXG5cdCovXG4gICAgcHVibGljIHJlbW92ZUNvbG9yU2NoZW1lKHNjaGVtZU5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVDb2xvclNjaGVtZShzY2hlbWVOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVDb2xvclNjaGVtZShzY2hlbWVOYW1lKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRXhwb3J0cyB0aGUgY2hhcnQncyBjb250ZW50IGFzIEpQRUcgaW1hZ2UuIFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTmFtZT8uIEZpbGUgbmFtZS5cblx0Ki9cbiAgICBwdWJsaWMgc2F2ZUFzSlBFRyhmaWxlTmFtZT86IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zYXZlQXNKUEVHKGZpbGVOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zYXZlQXNKUEVHKGZpbGVOYW1lKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRXhwb3J0cyB0aGUgY2hhcnQncyBjb250ZW50IGFzIFBORyBpbWFnZS4gXG5cdCogQHBhcmFtIHtzdHJpbmd9IGZpbGVOYW1lPy4gRmlsZSBuYW1lLlxuXHQqL1xuICAgIHB1YmxpYyBzYXZlQXNQTkcoZmlsZU5hbWU/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2F2ZUFzUE5HKGZpbGVOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zYXZlQXNQTkcoZmlsZU5hbWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFeHBvcnRzIHRoZSBjaGFydCdzIGNvbnRlbnQgYXMgUERGLiBcblx0KiBAcGFyYW0ge3N0cmluZ30gZmlsZU5hbWU/LiBGaWxlIG5hbWUuXG5cdCogQHBhcmFtIHtzdHJpbmd9IHBhZ2VPcmllbnRhdGlvbj8uIFBERiBwYWdlIG9yaWVudGF0aW9uLiA8c3Ryb25nPlBvc3NpYmxlIHZhbHVlczo8L3N0cm9uZz4gJ3BvcnRyYWl0JyAoZGVmYXVsdCksICdsYW5kc2NhcGUnLlxuXHQqL1xuICAgIHB1YmxpYyBzYXZlQXNQREYoZmlsZU5hbWU/OiBzdHJpbmcsIHBhZ2VPcmllbnRhdGlvbj86IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zYXZlQXNQREYoZmlsZU5hbWUsIHBhZ2VPcmllbnRhdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2F2ZUFzUERGKGZpbGVOYW1lLCBwYWdlT3JpZW50YXRpb24pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTaG93cyBhIGhpZGRlbiBjaGFydCBzZXJpZS4gVGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoaXMgZnVuY3Rpb24gaXMgc2FtZSBhcyB0aGUgdXNlciBjaGVja2luZyB0aGUgbGVnZW5kIGJveCBvZiBhIGNoYXJ0IHNlcmllLiBcblx0KiBAcGFyYW0ge251bWJlcn0gZ3JvdXBJbmRleC4gU2VyaWVzIGdyb3VwIGluZGV4LlxuXHQqIEBwYXJhbSB7bnVtYmVyfSBzZXJpZUluZGV4LiBTZXJpZXMgaW5kZXguXG5cdCogQHBhcmFtIHtudW1iZXJ9IGl0ZW1JbmRleD8uIEl0ZW0gKGRhdGEgcG9pbnQpIGluZGV4LiBBcHBsaWNhYmxlIHRvIHBpZSBhbmQgZG9udXQgc2VyaWVzIG9ubHkuXG5cdCovXG4gICAgcHVibGljIHNob3dTZXJpZShncm91cEluZGV4OiBudW1iZXIsIHNlcmllSW5kZXg6IG51bWJlciwgaXRlbUluZGV4PzogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNob3dTZXJpZShncm91cEluZGV4LCBzZXJpZUluZGV4LCBpdGVtSW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNob3dTZXJpZShncm91cEluZGV4LCBzZXJpZUluZGV4LCBpdGVtSW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTaG93cyBhIHRoZSB0b29sdGlwIGZvciBhIHBhcnRpY3VsYXIgZGF0YSBwb2ludC4gXG5cdCogQHBhcmFtIHtudW1iZXJ9IGdyb3VwSW5kZXguIFNlcmllcyBncm91cCBpbmRleC5cblx0KiBAcGFyYW0ge251bWJlcn0gc2VyaWVJbmRleC4gU2VyaWVzIGluZGV4LlxuXHQqIEBwYXJhbSB7bnVtYmVyfSBpdGVtSW5kZXguIEl0ZW0gKGRhdGEgcG9pbnQpIGluZGV4LlxuXHQqIEBwYXJhbSB7bnVtYmVyfSBzaG93RGVsYXk/LiBTaG93IGRlbGF5LlxuXHQqIEBwYXJhbSB7bnVtYmVyfSBoaWRlRGVsYXk/LiBIaWRlIGRlbGF5LlxuXHQqL1xuICAgIHB1YmxpYyBzaG93VG9vbFRpcChncm91cEluZGV4OiBudW1iZXIsIHNlcmllSW5kZXg6IG51bWJlciwgaXRlbUluZGV4OiBudW1iZXIsIHNob3dEZWxheT86IG51bWJlciwgaGlkZURlbGF5PzogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNob3dUb29sVGlwKGdyb3VwSW5kZXgsIHNlcmllSW5kZXgsIGl0ZW1JbmRleCwgc2hvd0RlbGF5LCBoaWRlRGVsYXkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNob3dUb29sVGlwKGdyb3VwSW5kZXgsIHNlcmllSW5kZXgsIGl0ZW1JbmRleCwgc2hvd0RlbGF5LCBoaWRlRGVsYXkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBVcGRhdGVzIHRoZSB2YWx1ZXMgb2YgdGhlIGNoYXJ0IHNlcmllcyB3aXRob3V0IGZ1bGwgcmVmcmVzaCBvZiB0aGUgZW50aXJlIGNoYXJ0LiBUaGUgbWV0aG9kIHNob3VsZCBiZSB1c2VkIGZvciBhbmltYXRpb24gb2YgZnJlcXVlbnRseSBjaGFuZ2luZyB2YWx1ZXMuIFxuXHQqL1xuICAgIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnVwZGF0ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXHRnZXQgaXNSZW5kZXJlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQgOiBmYWxzZTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHR9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICBjb25zdCB0aGF0ID0gdGhpcztcblxuICAgICAgdGhhdC5vbkNyZWF0ZS5lbWl0KHRoYXQubmF0aXZlRWxlbWVudCk7XG5cblx0XHRTbWFydC5SZW5kZXIoKTtcblxuXHRcdHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4geyB0aGF0Lm9uUmVhZHkuZW1pdCh0aGF0Lm5hdGl2ZUVsZW1lbnQpOyB9KTtcblx0XHR0aGlzLmxpc3RlbigpO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy51bmxpc3RlbigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXHRcdGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQgJiYgdGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcblx0XHRcdGZvciAoY29uc3QgcHJvcE5hbWUgaW4gY2hhbmdlcykge1xuXHRcdFx0XHRpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcblx0XHRcdFx0XHR0aGlzLm5hdGl2ZUVsZW1lbnRbcHJvcE5hbWVdID0gY2hhbmdlc1twcm9wTmFtZV0uY3VycmVudFZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBZGQgZXZlbnQgbGlzdGVuZXJzLiAqL1xuXHRwcml2YXRlIGxpc3RlbigpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydhbm5vdGF0aW9uQ2xpY2tIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Bbm5vdGF0aW9uQ2xpY2suZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYW5ub3RhdGlvbkNsaWNrJywgdGhhdC5ldmVudEhhbmRsZXJzWydhbm5vdGF0aW9uQ2xpY2tIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydhbm5vdGF0aW9uTW91c2VlbnRlckhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkFubm90YXRpb25Nb3VzZWVudGVyLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Fubm90YXRpb25Nb3VzZWVudGVyJywgdGhhdC5ldmVudEhhbmRsZXJzWydhbm5vdGF0aW9uTW91c2VlbnRlckhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2Fubm90YXRpb25Nb3VzZWxlYXZlSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQW5ub3RhdGlvbk1vdXNlbGVhdmUuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYW5ub3RhdGlvbk1vdXNlbGVhdmUnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2Fubm90YXRpb25Nb3VzZWxlYXZlSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY2xpY2tIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25DbGljay5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY2xpY2tIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydtb3VzZW91dEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbk1vdXNlb3V0LmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgdGhhdC5ldmVudEhhbmRsZXJzWydtb3VzZW91dEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ21vdXNlb3ZlckhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbk1vdXNlb3Zlci5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ21vdXNlb3ZlckhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3JhbmdlU2VsZWN0aW9uQ2hhbmdlZEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblJhbmdlU2VsZWN0aW9uQ2hhbmdlZC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdyYW5nZVNlbGVjdGlvbkNoYW5nZWQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3JhbmdlU2VsZWN0aW9uQ2hhbmdlZEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3JhbmdlU2VsZWN0aW9uQ2hhbmdpbmdIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25SYW5nZVNlbGVjdGlvbkNoYW5naW5nLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3JhbmdlU2VsZWN0aW9uQ2hhbmdpbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3JhbmdlU2VsZWN0aW9uQ2hhbmdpbmdIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydyZWZyZXNoQmVnaW5IYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25SZWZyZXNoQmVnaW4uZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncmVmcmVzaEJlZ2luJywgdGhhdC5ldmVudEhhbmRsZXJzWydyZWZyZXNoQmVnaW5IYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydyZWZyZXNoRW5kSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uUmVmcmVzaEVuZC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdyZWZyZXNoRW5kJywgdGhhdC5ldmVudEhhbmRsZXJzWydyZWZyZXNoRW5kSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1sndG9nZ2xlSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uVG9nZ2xlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvZ2dsZScsIHRoYXQuZXZlbnRIYW5kbGVyc1sndG9nZ2xlSGFuZGxlciddKTtcblxuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZW1vdmUgZXZlbnQgbGlzdGVuZXJzLiAqL1xuXHRwcml2YXRlIHVubGlzdGVuKCk6IHZvaWQge1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydhbm5vdGF0aW9uQ2xpY2tIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdhbm5vdGF0aW9uQ2xpY2snLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2Fubm90YXRpb25DbGlja0hhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snYW5ub3RhdGlvbk1vdXNlZW50ZXJIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdhbm5vdGF0aW9uTW91c2VlbnRlcicsIHRoYXQuZXZlbnRIYW5kbGVyc1snYW5ub3RhdGlvbk1vdXNlZW50ZXJIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2Fubm90YXRpb25Nb3VzZWxlYXZlSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignYW5ub3RhdGlvbk1vdXNlbGVhdmUnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2Fubm90YXRpb25Nb3VzZWxlYXZlSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjbGlja0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhhdC5ldmVudEhhbmRsZXJzWydjbGlja0hhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snbW91c2VvdXRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snbW91c2VvdXRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ21vdXNlb3ZlckhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIHRoYXQuZXZlbnRIYW5kbGVyc1snbW91c2VvdmVySGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydyYW5nZVNlbGVjdGlvbkNoYW5nZWRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdyYW5nZVNlbGVjdGlvbkNoYW5nZWQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3JhbmdlU2VsZWN0aW9uQ2hhbmdlZEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1sncmFuZ2VTZWxlY3Rpb25DaGFuZ2luZ0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3JhbmdlU2VsZWN0aW9uQ2hhbmdpbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3JhbmdlU2VsZWN0aW9uQ2hhbmdpbmdIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3JlZnJlc2hCZWdpbkhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3JlZnJlc2hCZWdpbicsIHRoYXQuZXZlbnRIYW5kbGVyc1sncmVmcmVzaEJlZ2luSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydyZWZyZXNoRW5kSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVmcmVzaEVuZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1sncmVmcmVzaEVuZEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1sndG9nZ2xlSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG9nZ2xlJywgdGhhdC5ldmVudEhhbmRsZXJzWyd0b2dnbGVIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHR9XG59XG4iXX0=