
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.chart';

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
    /** @description Gets the rendered coordinates of a data point element.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    * @param {number} itemIndex. Item (data point) index.
    * @returns {{ x: number, y: number, width: number, height: number, center: number, centerOffset: number, innerRadius: number, outerRadius: number, selectedRadiusChange: number, fromAngle: number, toAngle: number, radius: number }}
  */
    getItemCoord(groupIndex, serieIndex, itemIndex) {
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
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
__decorate([
    Input()
], ChartComponent.prototype, "animation", null);
__decorate([
    Input()
], ChartComponent.prototype, "animationDuration", null);
__decorate([
    Input()
], ChartComponent.prototype, "backgroundColor", null);
__decorate([
    Input()
], ChartComponent.prototype, "backgroundImage", null);
__decorate([
    Input()
], ChartComponent.prototype, "borderLineColor", null);
__decorate([
    Input()
], ChartComponent.prototype, "borderLineWidth", null);
__decorate([
    Input()
], ChartComponent.prototype, "caption", null);
__decorate([
    Input()
], ChartComponent.prototype, "clip", null);
__decorate([
    Input()
], ChartComponent.prototype, "colorScheme", null);
__decorate([
    Input()
], ChartComponent.prototype, "columnSeriesOverlap", null);
__decorate([
    Input()
], ChartComponent.prototype, "crosshairsColor", null);
__decorate([
    Input()
], ChartComponent.prototype, "crosshairsDashStyle", null);
__decorate([
    Input()
], ChartComponent.prototype, "crosshairsLineWidth", null);
__decorate([
    Input()
], ChartComponent.prototype, "dataSource", null);
__decorate([
    Input()
], ChartComponent.prototype, "description", null);
__decorate([
    Input()
], ChartComponent.prototype, "disabled", null);
__decorate([
    Input()
], ChartComponent.prototype, "draw", null);
__decorate([
    Input()
], ChartComponent.prototype, "drawBefore", null);
__decorate([
    Input()
], ChartComponent.prototype, "enableAxisTextAnimation", null);
__decorate([
    Input()
], ChartComponent.prototype, "enableCrosshairs", null);
__decorate([
    Input()
], ChartComponent.prototype, "greyScale", null);
__decorate([
    Input()
], ChartComponent.prototype, "legendLayout", null);
__decorate([
    Input()
], ChartComponent.prototype, "locale", null);
__decorate([
    Input()
], ChartComponent.prototype, "localization", null);
__decorate([
    Input()
], ChartComponent.prototype, "messages", null);
__decorate([
    Input()
], ChartComponent.prototype, "padding", null);
__decorate([
    Input()
], ChartComponent.prototype, "renderEngine", null);
__decorate([
    Input()
], ChartComponent.prototype, "rightToLeft", null);
__decorate([
    Input()
], ChartComponent.prototype, "seriesGroups", null);
__decorate([
    Input()
], ChartComponent.prototype, "showBorderLine", null);
__decorate([
    Input()
], ChartComponent.prototype, "showLegend", null);
__decorate([
    Input()
], ChartComponent.prototype, "showToolTips", null);
__decorate([
    Input()
], ChartComponent.prototype, "showToolTipsOnAllSeries", null);
__decorate([
    Input()
], ChartComponent.prototype, "theme", null);
__decorate([
    Input()
], ChartComponent.prototype, "titlePadding", null);
__decorate([
    Input()
], ChartComponent.prototype, "toolTipBackground", null);
__decorate([
    Input()
], ChartComponent.prototype, "toolTipFormatFunction", null);
__decorate([
    Input()
], ChartComponent.prototype, "toolTipHideDelay", null);
__decorate([
    Input()
], ChartComponent.prototype, "toolTipLineColor", null);
__decorate([
    Input()
], ChartComponent.prototype, "toolTipShowDelay", null);
__decorate([
    Input()
], ChartComponent.prototype, "valueAxis", null);
__decorate([
    Input()
], ChartComponent.prototype, "xAxis", null);
__decorate([
    Output()
], ChartComponent.prototype, "onAnnotationClick", void 0);
__decorate([
    Output()
], ChartComponent.prototype, "onAnnotationMouseenter", void 0);
__decorate([
    Output()
], ChartComponent.prototype, "onAnnotationMouseleave", void 0);
__decorate([
    Output()
], ChartComponent.prototype, "onClick", void 0);
__decorate([
    Output()
], ChartComponent.prototype, "onMouseout", void 0);
__decorate([
    Output()
], ChartComponent.prototype, "onMouseover", void 0);
__decorate([
    Output()
], ChartComponent.prototype, "onRangeSelectionChanged", void 0);
__decorate([
    Output()
], ChartComponent.prototype, "onRangeSelectionChanging", void 0);
__decorate([
    Output()
], ChartComponent.prototype, "onRefreshBegin", void 0);
__decorate([
    Output()
], ChartComponent.prototype, "onRefreshEnd", void 0);
__decorate([
    Output()
], ChartComponent.prototype, "onToggle", void 0);
ChartComponent = __decorate([
    Directive({
        exportAs: 'smart-chart', selector: 'smart-chart, [smart-chart]'
    })
], ChartComponent);

let ChartModule = class ChartModule {
};
ChartModule = __decorate([
    NgModule({
        declarations: [ChartComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        exports: [ChartComponent]
    })
], ChartModule);

/**
 * Generated bundle index. Do not edit.
 */

export { ChartComponent, ChartModule, Smart, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-chart.js.map
