import { ThreeDChart } from './../index';
import { Animation, ThreeDChartColorScheme, ThreeDChartLegendIndex, ThreeDChartSelectionMode, ThreeDChartCameraPosition, ThreeDChartSeriesGroup, ThreeDChartFormatSettings, ThreeDChartPadding, ThreeDChartValueAxis, ThreeDChartXAxis, ThreeDChartZAxis } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { Animation, ThreeDChartColorScheme, ThreeDChartLegendIndex, ThreeDChartSelectionMode, ThreeDChartSymbolType, ThreeDChartType, ThreeDChartRangeSelectorSerieType, ThreeDChartXAxisType, ThreeDChartCameraPosition, ThreeDChartSeriesGroup, ThreeDChartBand, ThreeDChartFormatSettings, ThreeDChartSeriesGroupSerie, ThreeDChartLabels, ThreeDChartOffset, ThreeDChartPadding, ThreeDChartValueAxis, ThreeDChartLines, ThreeDChartXAxis, ThreeDChartRangeSelector, ThreeDChartZAxis, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { ThreeDChart } from './../index';
export declare class ThreeDChartComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<ThreeDChart>);
    private eventHandlers;
    nativeElement: ThreeDChart;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none'. */
    animation: Animation | string;
    /** @description Determines the rate of the animation. The default animation rate is 1 */
    animationSpeed: number;
    /** @description Sets whether the chart will rotate automatically. */
    autoRotate: boolean;
    /** @description Sets the speed of the automatic rotation. */
    autoRotateSpeed: number;
    /** @description Sets the chart's background color. For example: '#DDFFE8' */
    backgroundColor: string | null;
    /** @description Sets the chart's background to a static linear gradient. The property must be set to an Array of Strings in the format: 'offset, color' */
    backgroundGradient: any[];
    /** @description Sets the chart's background to a static image. For example: 'https://www.htmlelements.com/demos/images/stars.jpg' */
    backgroundImage: string;
    /** @description Sets the chart's background to a dynamic background image which rotates with the camera. The property must be set an Array of 6 images. All images must have aspect ratio 1:1 */
    backgroundTexture: any[];
    /** @description Sets the camera's position. The property must be set to an {x, y, z} object. */
    cameraPosition: ThreeDChartCameraPosition;
    /** @description Sets the intial camera zoom. The default value is 1 */
    cameraZoom: number;
    /** @description Sets the caption (title) of the chart. */
    caption: string;
    /** @description Sets the chart's color pallete. jqxChart suppports 32 color schemes from 'scheme01' to 'scheme32'. */
    colorScheme: ThreeDChartColorScheme | string;
    /** @description Sets the chart's controls settings. */
    controlsSettings: any;
    /** @description Allows substituting default items with custom 3D Objects. The property must be set to an Array of Objects in the format: { groupIndex, serieIndex, itemIndex, modelUrl } */
    customModels: any[];
    /** @description Sets the chart's data source. */
    dataSource: any[];
    /** @description Sets the description text of the chart. */
    description: string;
    /** @description Enables or disables the chart. */
    disabled: boolean;
    /** @description Sets whether the chart's toolbar is enabled. */
    enableControlsToolbar: boolean;
    /** @description  */
    controlsToolbarItems: any;
    /** @description Sets the chart's grid options. */
    gridOptions: any;
    /** @description Sets whether the legend will be created based on the chart's series or serie groups. "auto" - the legend index will change depending on the Chart type */
    legendIndex: ThreeDChartLegendIndex | string;
    /** @description Sets the legend's layout. */
    legendLayout: any;
    /** @description Sets the light color of the 3D Scene. */
    lightColor: string;
    /** @description Sets or gets the locale. Used in conjunction with the property messages. */
    locale: string;
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale. */
    messages: any;
    /** @description Sets or gets a value indicating whether the Chart's layout is mirrored. */
    rightToLeft: boolean;
    /** @description Determines the selection mode. */
    selectionMode: ThreeDChartSelectionMode | string;
    /** @description The seriesGroups property is used to describe all series displayed on the chart. jqxChart supports multiple series of different types and series grouping. Each series group may have its own Value Axis (Y-axis) which allows you to have values with different scales displayed on the same chart at the same time. It also allows you to display multiple series types together on the same chart. For example, you can display all series in one group as lines and the series in a second group as columns. seriesGroups is an array of objects where each object represents one group. */
    seriesGroups: ThreeDChartSeriesGroup[];
    /** @description Determines whether to show grid connecting lines when a chart item is hovered over. */
    showConnectionLines: boolean;
    /** @description Determines whether to show or hide the chart series legend. */
    showLegend: boolean;
    /** @description Determines whether to show or hide the chart series legend table. */
    showLegendTable: boolean;
    /** @description Enables or disables the chart tooltips. */
    showToolTips: boolean;
    /** @description Sets the padding of the chart's title (caption). */
    titlePadding: ThreeDChartPadding;
    /** @description Tooltip data formatting settings for the values in the serie. */
    toolTipFormatFunction: {
        (value?: any, index?: number, series?: any): string;
    };
    /** @description Tooltip line color. By default it is set to the hovered item's color */
    toolTipFormatSettings: ThreeDChartFormatSettings;
    /** @description An object with settings about the Chart's y-axis (value axis). */
    toolTipLineColor: string | null;
    /** @description Sets the Chart's xAxis. */
    valueAxis: ThreeDChartValueAxis;
    /** @description Sets the Chart's zAxis. */
    xAxis: ThreeDChartXAxis;
    /** @description undefined */
    zAxis: ThreeDChartZAxis;
    /** @description The event is raised when the user clicks on a chart element.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	itemIndex, 	serieIndex, 	groupIndex)
    *   itemIndex - The item index of the item.
    *   serieIndex - The serie index of the item.
    *   groupIndex - The group index of the item.
    */
    onItemClick: EventEmitter<CustomEvent>;
    /** @description The event is raised when a chart element is shown.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	itemIndex, 	serieIndex, 	groupIndex)
    *   itemIndex - The item index of the item.
    *   serieIndex - The serie index of the item.
    *   groupIndex - The group index of the item.
    */
    onShow: EventEmitter<CustomEvent>;
    /** @description The event is raised when a chart element is hidden.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	itemIndex, 	serieIndex, 	groupIndex)
    *   itemIndex - The item index of the item.
    *   serieIndex - The serie index of the item.
    *   groupIndex - The group index of the item.
    */
    onHide: EventEmitter<CustomEvent>;
    /** @description The event is raised when a chart element is selected.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	itemIndex, 	serieIndex, 	groupIndex)
    *   itemIndex - The item index of the item.
    *   serieIndex - The serie index of the item.
    *   groupIndex - The group index of the item.
    */
    onSelect: EventEmitter<CustomEvent>;
    /** @description The event is raised when a chart element is unselected.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	itemIndex, 	serieIndex, 	groupIndex)
    *   itemIndex - The item index of the item.
    *   serieIndex - The serie index of the item.
    *   groupIndex - The group index of the item.
    */
    onUnselect: EventEmitter<CustomEvent>;
    /** @description The event is raised after the chart's range selector position changes and after the chart ends rendering.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	minValue, 	maxValue)
    *   minValue - The start value of the range selector.
    *   maxValue - The end value of the range selector.
    */
    onRangeSelectionChanged: EventEmitter<CustomEvent>;
    /** @description The event is raised when the chart's range selector position changes and before the chart starts rendering. The event can be default prevented to cancel the range selection change.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	minValue, 	maxValue, 	oldMinValue, 	oldMaxValue)
    *   minValue - The start value of the range selector.
    *   maxValue - The end value of the range selector.
    *   oldMinValue - The previous start value of the range selector.
    *   oldMaxValue - The previous end value of the range selector.
    */
    onRangeSelectionChanging: EventEmitter<CustomEvent>;
    /** @description The event is raised when the chart begins rendering.
    *  @param event. The custom event. 	*/
    onRefreshBegin: EventEmitter<CustomEvent>;
    /** @description The event is raised when the chart finishes rendering.
    *  @param event. The custom event. 	*/
    onRefreshEnd: EventEmitter<CustomEvent>;
    /** @description The event is raised when the chart begins resizing.
    *  @param event. The custom event. 	*/
    onResizeBegin: EventEmitter<CustomEvent>;
    /** @description The event is raised when the chart finishes resizing.
    *  @param event. The custom event. 	*/
    onResizeEnd: EventEmitter<CustomEvent>;
    /** @description Adds a new color sheme. If a scheme with the same name already exists, the method will update its colors.
    * @param {string} schemeName. The name of the custom color scheme.
    * @param {any[]} colorsArray. An array of color values.
    */
    addColorScheme(schemeName: string, colorsArray: any[]): void;
    /** @description Begins an update of the chart. The chart will not be rendered until the endUpdate method is called.
    */
    beginUpdate(): void;
    /** @description Ends an update of the chart. The chart will be rendered after the endUpdate method is called.
    * @param {boolean} refresh?. If set to true, the chart will complete a full refresh.
    */
    endUpdate(refresh?: boolean): void;
    /** @description Returns the colors of a color scheme by name. If the scheme doesn't exist the method returns undefined.
    * @param {string} schemeName. The name of the color scheme.
    * @returns {any[]}
  */
    getColorScheme(schemeName: any): Promise<any>;
    /** @description Gets the item with the specified indexes.
    * @param {number | null} groupIndex?. Series group index.
    * @param {number | null} serieIndex?. Series index.
    * @param {number | null} itemIndex?. Item (data point) index.
    * @returns {any}
  */
    getItemByIndexes(groupIndex?: any, serieIndex?: any, itemIndex?: any): Promise<any>;
    /** @description Gets an arrat of the items with the specified indexes. Leaving an index null will return all items that match the other indexes.
    * @param {number | null} groupIndex?. Series group index.
    * @param {number | null} serieIndex?. Series index.
    * @param {number | null} itemIndex?. Item (data point) index.
    * @returns {any}
  */
    getItemsByIndexes(groupIndex?: any, serieIndex?: any, itemIndex?: any): Promise<any>;
    /** @description Gets the indexes of the hidden series.
    * @returns {{ groupIndex: number, serieIndex: number, itemIndex: number }[]}
  */
    getHidden(): Promise<any>;
    /** @description Gets the selected items.
    * @returns {any[]}
  */
    getSelection(): Promise<any>;
    /** @description Gets the rendered values of the valueAxis labels.
    * @returns {any}
  */
    getValueAxisLabels(): Promise<any>;
    /** @description Gets the rendered values of the xAxis labels.
    * @returns {any}
  */
    getXAxisLabels(): Promise<any>;
    /** @description Gets the rendered values of the zAxis labels.
    * @returns {any}
  */
    getZAxisLabels(): Promise<any>;
    /** @description Hides all items of a chart group.
    * @param {number} groupIndex. Series group index.
    */
    hideGroup(groupIndex: number): void;
    /** @description Hides a chart item.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    * @param {number} itemIndex?. Item (data point) index.
    */
    hideItem(groupIndex: number, serieIndex: number, itemIndex?: number): void;
    /** @description Hides all items of a chart serie.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    */
    hideSerie(groupIndex: number, serieIndex: number): void;
    /** @description Refreshes the content of the chart element after a property or data update.
    */
    refresh(): void;
    /** @description Removes an existing color scheme. If the scheme does not exist, the method has no effect.
    * @param {string} schemeName. The name of the custom color scheme.
    */
    removeColorScheme(schemeName: string): void;
    /** @description Exports the chart's content as JPEG image.
    * @param {string} fileName?. File name.
    * @param {boolean} includeLegend?. Sets whether the legend will be part of the saved file.
    * @param {boolean} includeCaption?. Sets whether the caption will be part of the saved file.
    */
    saveAsJPEG(fileName?: string, includeLegend?: boolean, includeCaption?: boolean): void;
    /** @description Exports the chart's content as PNG image.
    * @param {string} fileName?. File name.
    * @param {boolean} includeLegend?. Sets whether the legend will be part of the saved file.
    * @param {boolean} includeCaption?. Sets whether the caption will be part of the saved file.
    */
    saveAsPNG(fileName?: string, includeLegend?: boolean, includeCaption?: boolean): void;
    /** @description Exports the chart's content as PDF file.
    * @param {string} fileName?. File name.
    * @param {boolean} includeLegend?. Sets whether the legend will be part of the saved file.
    * @param {boolean} includeCaption?. Sets whether the caption will be part of the saved file.
    */
    saveAsPDF(fileName?: string, includeLegend?: boolean, includeCaption?: boolean): void;
    /** @description Selects a chart item. If selectionMode is 'one', the previous item will be unselected.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    * @param {number} itemIndex?. Item (data point) index.
    */
    selectItem(groupIndex: number, serieIndex: number, itemIndex?: number): void;
    /** @description Shows all items of a chart group.
    * @param {number} groupIndex. Series group index.
    */
    showGroup(groupIndex: number): void;
    /** @description Shows a chart item.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    * @param {number} itemIndex?. Item (data point) index.
    */
    showItem(groupIndex: number, serieIndex: number, itemIndex?: number): void;
    /** @description Shows all items of a chart serie.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    */
    showSerie(groupIndex: number, serieIndex: number): void;
    /** @description Sets the camera position to its position during the initialization.
    */
    setDefaultPosition(): void;
    /** @description Sets the camera mode. Different camera modes change the control actions of the mouse. Available modes are 'zoom', 'pan' and 'default'.
    * @param {string} mode. Camera mode.
    */
    setCameraMode(mode: string): void;
    /** @description Sets the camera position.
    * @param {number} x. X coordinate.
    * @param {number} y. Y coordinate.
    * @param {number} z. Z coordinate.
    * @param {boolean} animation?. Animation Enabled
    */
    setCameraPosition(x: number, y: number, z: number, animation?: boolean): void;
    /** @description Sets the camera zoom.
    * @param {number} level. Zoom level.
    * @param {boolean} animation?. Animation Enabled
    */
    setCameraZoom(level: number, animation?: boolean): void;
    /** @description Unelects a chart item.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    * @param {number} itemIndex?. Item (data point) index.
    */
    unselectItem(groupIndex: number, serieIndex: number, itemIndex?: number): void;
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
