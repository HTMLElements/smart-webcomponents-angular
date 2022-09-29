import { Chart } from './../index';
import { Animation, ChartColorScheme, ChartRenderEngine, ChartLocalization, Padding, ChartSeriesGroup, ChartValueAxis, ChartXAxis } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { Animation, ChartColorScheme, ChartRenderEngine, HorizontalAlignment, ChartRotationPoint, VerticalAlignment, ChartAnnotationType, ChartUnselectMode, Orientation, ChartSeriesGroupSerieEmptyPointsDisplay, ChartSymbolType, ChartType, AxisPosition, ChartBaseUnit, ChartXAxisType, ChartLocalization, Padding, ChartSeriesGroup, ChartAnnotation, Offset, ChartAnnotationText, ChartBand, ChartFormatSettings, ChartSeriesGroupSerie, ChartLabels, ChartValueAxis, ChartLines, ChartLine, ChartTitle, ChartXAxis, ChartRangeSelector, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { Chart } from './../index';
export declare class ChartComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<Chart>);
    private eventHandlers;
    nativeElement: Chart;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none'. */
    animation: Animation | string;
    /** @description Determines the animation duration in milliseconds. The value must be between 0 and 5000. If it is outside of this range jqxChart will reset it to the default value. */
    animationDuration: number;
    /** @description Sets the chart's background color. For example: '#DDFFE8' */
    backgroundColor: string | null;
    /** @description Sets the chart's background image. For example: 'https://www.htmlelements.com/demos/images/carousel-large-1.jpg' */
    backgroundImage: string;
    /** @description Sets the chart's border color. For example: '#098700' */
    borderLineColor: string | null;
    /** @description Sets the chart's border line width. */
    borderLineWidth: number;
    /** @description Sets the caption (title) of the chart. */
    caption: string;
    /** @description Determines whether to clip plotted elements that overflow the axis boundaries. */
    clip: boolean;
    /** @description Sets the chart's color pallete. jqxChart suppports 32 color schemes from 'scheme01' to 'scheme32'. */
    colorScheme: ChartColorScheme | string;
    /** @description Enables or disables overlapping of the column series. */
    columnSeriesOverlap: boolean;
    /** @description Gets or sets the color of the crosshairs lines. The 'enableCrosshairs' property should be 'true'. */
    crosshairsColor: string | null;
    /** @description Gets or sets the dash style of the crosshairs lines. The style is a series of numbers indicating line length followed by space length. The 'enableCrosshairs' property should be 'true'. For example: '3,3' */
    crosshairsDashStyle: string;
    /** @description Gets or sets the width of the crosshairs lines. The 'enableCrosshairs' property should be 'true' */
    crosshairsLineWidth: number;
    /** @description Sets the chart's data source. */
    dataSource: any[];
    /** @description Sets the description text of the chart. */
    description: string;
    /** @description Enables or disables the chart. */
    disabled: boolean;
    /** @description Determines the drawing function of jqxChart. When the property is set, you can override the jqxChart's drawing. */
    draw: any;
    /** @description Function for custom drawing before the caption and other chart elements. */
    drawBefore: any;
    /** @description Determines if the animation of the axes text is enabled. */
    enableAxisTextAnimation: boolean;
    /** @description Enables or disables the crosshairs lines. The lines are displayed in line and area series when you move over a data point. */
    enableCrosshairs: boolean;
    /** @description Determines whether to display the chart using greyscale colors. */
    greyScale: boolean;
    /** @description Sets the legend's layout. */
    legendLayout: any;
    /** @description Sets or gets the locale. Used in conjunction with the property messages. */
    locale: string;
    /** @description Localization object containing culture-specific properties required for formatting currencies, numbers and dates. */
    localization: ChartLocalization;
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale. */
    messages: any;
    /** @description Sets the left, top, right and bottom padding of the Chart. */
    padding: Padding;
    /** @description Determines the rendering engine used to display the chart. When the property is set to an empty string, jqxChart will automatically select an optimal rendering engine depending on the browser capabilities. */
    renderEngine: ChartRenderEngine | string;
    /** @description Sets or gets a value indicating whether the Chart's layout is mirrored. */
    rightToLeft: boolean;
    /** @description The seriesGroups property is used to describe all series displayed on the chart. jqxChart supports multiple series of different types and series grouping. Each series group may have its own Value Axis (Y-axis) which allows you to have values with different scales displayed on the same chart at the same time. It also allows you to display multiple series types together on the same chart. For example, you can display all series in one group as lines and the series in a second group as columns. seriesGroups is an array of objects where each object represents one group. */
    seriesGroups: ChartSeriesGroup[];
    /** @description Determines whether to display the chart's border line. */
    showBorderLine: boolean;
    /** @description Determines whether to show or hide the chart series legend. */
    showLegend: boolean;
    /** @description Enables or disables the chart tooltips. */
    showToolTips: boolean;
    /** @description Determines whether to show a composite tooltip containing information for all series. */
    showToolTipsOnAllSeries: boolean;
    /** @description Determines the set of default background, line, text and band colors that will be used in the Chart. */
    theme: string;
    /** @description Sets the padding of the chart's title (caption). */
    titlePadding: Padding;
    /** @description Tooltip background color. */
    toolTipBackground: string | null;
    /** @description Determines the tooltip hide delay in milliseconds. */
    toolTipFormatFunction: {
        (value?: any, index?: number, series?: any): string;
    };
    /** @description Tooltip line color. */
    toolTipHideDelay: number;
    /** @description Determines the tooltip show delay in milliseconds. Values may range from 0 to 10000 [ms]. */
    toolTipLineColor: string | null;
    /** @description An object with settings about the Chart's y-axis (value axis). */
    toolTipShowDelay: number;
    /** @description Sets the Chart's xAxis. */
    valueAxis: ChartValueAxis;
    /** @description undefined */
    xAxis: ChartXAxis;
    /** @description The event is raised when the user clicks on a chart annotation.
    *  @param event. The custom event. 	*/
    onAnnotationClick: EventEmitter<CustomEvent>;
    /** @description The event is raised when the user moves the cursor above a chart annotation.
    *  @param event. The custom event. 	*/
    onAnnotationMouseenter: EventEmitter<CustomEvent>;
    /** @description The event is raised when the user moves the cursor out of a chart annotation.
    *  @param event. The custom event. 	*/
    onAnnotationMouseleave: EventEmitter<CustomEvent>;
    /** @description The event is raised when the user clicks on series element.
    *  @param event. The custom event. 	*/
    onClick: EventEmitter<CustomEvent>;
    /** @description The event is raised when the user moves the cursor out of a series element.
    *  @param event. The custom event. 	*/
    onMouseout: EventEmitter<CustomEvent>;
    /** @description The event is raised when the user moves the cursor above a series element.
    *  @param event. The custom event. 	*/
    onMouseover: EventEmitter<CustomEvent>;
    /** @description The event is raised after the chart's range selector position changes and after the chart ends rendering.
    *  @param event. The custom event. 	*/
    onRangeSelectionChanged: EventEmitter<CustomEvent>;
    /** @description The event is raised when the chart's range selector position changes and before the chart starts rendering.
    *  @param event. The custom event. 	*/
    onRangeSelectionChanging: EventEmitter<CustomEvent>;
    /** @description The event is raised when the chart begins rendering.
    *  @param event. The custom event. 	*/
    onRefreshBegin: EventEmitter<CustomEvent>;
    /** @description The event is raised when the chart finishes rendering.
    *  @param event. The custom event. 	*/
    onRefreshEnd: EventEmitter<CustomEvent>;
    /** @description The event is raised when a serie is toggled by a user click in the chart's legend or through an API call.
    *  @param event. The custom event. 	*/
    onToggle: EventEmitter<CustomEvent>;
    /** @description Adds a new color sheme. If a scheme with the same name already exists, the method will update its colors.
    * @param {string} schemeName. The name of the custom color scheme.
    * @param {any[]} colorsArray. An array of color values.
    */
    addColorScheme(schemeName: string, colorsArray: any[]): void;
    /** @description Returns the colors of a color scheme by name. If the scheme doesn't exist the method returns undefined.
    * @param {string} schemeName. The name of the color scheme.
    * @returns {any[]}
  */
    getColorScheme(schemeName: any): Promise<any>;
    /** @description Gets the rendered coordinates of a data point element.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    * @param {number} itemIndex. Item (data point) index.
    * @returns {{ x: number, y: number, width: number, height: number, center: number, centerOffset: number, innerRadius: number, outerRadius: number, selectedRadiusChange: number, fromAngle: number, toAngle: number, radius: number }}
  */
    getItemCoord(groupIndex: any, serieIndex: any, itemIndex: any): Promise<any>;
    /** @description Gets the number of rendered items in a specific serie.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    * @returns {number}
  */
    getItemsCount(groupIndex: any, serieIndex: any): Promise<any>;
    /** @description Gets the rendered coordinates and values of the valueAxis labels.
    * @param {number} groupIndex. Series group index.
    * @returns {any}
  */
    getValueAxisLabels(groupIndex: any): Promise<any>;
    /** @description Gets the rendered rectangle coordinates of the valueAxis of specific serie group.
    * @param {number} groupIndex. Series group index.
    * @returns {DOMRect}
  */
    getValueAxisRect(groupIndex: any): Promise<any>;
    /** @description Gets the valueAxis (vertical axis)'s value.
    * @param {number} offset. Vertical offset.
    * @param {number} groupIndex. Series group index.
    * @returns {any}
  */
    getValueAxisValue(offset: any, groupIndex: any): Promise<any>;
    /** @description Gets the rendered coordinates and values of the xAxis labels.
    * @param {number} groupIndex. Series group index.
    * @returns {any}
  */
    getXAxisLabels(groupIndex: any): Promise<any>;
    /** @description Gets the rendered rectangle coordinates of the x-Axis of specific serie group.
    * @param {number} groupIndex. Series group index.
    * @returns {DOMRect}
  */
    getXAxisRect(groupIndex: any): Promise<any>;
    /** @description Gets the xAxis (horizontal axis)'s value.
    * @param {number} offset. Horizontal offset.
    * @param {number} groupIndex. Series group index.
    * @returns {any}
  */
    getXAxisValue(offset: any, groupIndex: any): Promise<any>;
    /** @description Hides a chart serie. The result of calling this function is same as the user unchecking the legend box of a chart serie.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    * @param {number} itemIndex?. Item (data point) index. Applicable to pie and donut series only.
    */
    hideSerie(groupIndex: number, serieIndex: number, itemIndex?: number): void;
    /** @description Hides the current tooltip if visible.
    * @param {number} hideDelay?. Hide delay.
    */
    hideToolTip(hideDelay?: number): void;
    /** @description Prints the chart.
    */
    print(): void;
    /** @description Refreshes the content of the chart element after a property or data update.
    */
    refresh(): void;
    /** @description Removes an existing color scheme. If the scheme does not exist, the method has no effect.
    * @param {string} schemeName. The name of the custom color scheme.
    */
    removeColorScheme(schemeName: string): void;
    /** @description Exports the chart's content as JPEG image.
    * @param {string} fileName?. File name.
    */
    saveAsJPEG(fileName?: string): void;
    /** @description Exports the chart's content as PNG image.
    * @param {string} fileName?. File name.
    */
    saveAsPNG(fileName?: string): void;
    /** @description Exports the chart's content as PDF.
    * @param {string} fileName?. File name.
    * @param {string} pageOrientation?. PDF page orientation. <strong>Possible values:</strong> 'portrait' (default), 'landscape'.
    */
    saveAsPDF(fileName?: string, pageOrientation?: string): void;
    /** @description Shows a hidden chart serie. The result of calling this function is same as the user checking the legend box of a chart serie.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    * @param {number} itemIndex?. Item (data point) index. Applicable to pie and donut series only.
    */
    showSerie(groupIndex: number, serieIndex: number, itemIndex?: number): void;
    /** @description Shows a the tooltip for a particular data point.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    * @param {number} itemIndex. Item (data point) index.
    * @param {number} showDelay?. Show delay.
    * @param {number} hideDelay?. Hide delay.
    */
    showToolTip(groupIndex: number, serieIndex: number, itemIndex: number, showDelay?: number, hideDelay?: number): void;
    /** @description Updates the values of the chart series without full refresh of the entire chart. The method should be used for animation of frequently changing values.
    */
    update(): void;
    readonly isRendered: boolean;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    /** @description Add event listeners. */
    private listen;
    /** @description Remove event listeners. */
    private unlisten;
}
