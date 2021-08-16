import * as tslib_1 from "tslib";
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Smart } from './smart.element';
var ChartComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ChartComponent, _super);
    function ChartComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        /** @description The event is raised when the user clicks on a chart annotation.
        *  @param event. The custom event. 	*/
        _this.onAnnotationClick = new EventEmitter();
        /** @description The event is raised when the user moves the cursor above a chart annotation.
        *  @param event. The custom event. 	*/
        _this.onAnnotationMouseenter = new EventEmitter();
        /** @description The event is raised when the user moves the cursor out of a chart annotation.
        *  @param event. The custom event. 	*/
        _this.onAnnotationMouseleave = new EventEmitter();
        /** @description The event is raised when the user clicks on series element.
        *  @param event. The custom event. 	*/
        _this.onClick = new EventEmitter();
        /** @description The event is raised when the user moves the cursor out of a series element.
        *  @param event. The custom event. 	*/
        _this.onMouseout = new EventEmitter();
        /** @description The event is raised when the user moves the cursor above a series element.
        *  @param event. The custom event. 	*/
        _this.onMouseover = new EventEmitter();
        /** @description The event is raised after the chart's range selector position changes and after the chart ends rendering.
        *  @param event. The custom event. 	*/
        _this.onRangeSelectionChanged = new EventEmitter();
        /** @description The event is raised when the chart's range selector position changes and before the chart starts rendering.
        *  @param event. The custom event. 	*/
        _this.onRangeSelectionChanging = new EventEmitter();
        /** @description The event is raised when the chart begins rendering.
        *  @param event. The custom event. 	*/
        _this.onRefreshBegin = new EventEmitter();
        /** @description The event is raised when the chart finishes rendering.
        *  @param event. The custom event. 	*/
        _this.onRefreshEnd = new EventEmitter();
        /** @description The event is raised when a serie is toggled by a user click in the chart's legend or through an API call.
        *  @param event. The custom event. 	*/
        _this.onToggle = new EventEmitter();
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    ChartComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('smart-chart');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(ChartComponent.prototype, "animation", {
        /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none'. */
        get: function () {
            return this.nativeElement ? this.nativeElement.animation : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.animation = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartComponent.prototype, "animationDuration", {
        /** @description Determines the animation duration in milliseconds. The value must be between 0 and 5000. If it is outside of this range jqxChart will reset it to the default value. */
        get: function () {
            return this.nativeElement ? this.nativeElement.animationDuration : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.animationDuration = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartComponent.prototype, "backgroundColor", {
        /** @description Sets the chart's background color. For example: '#DDFFE8' */
        get: function () {
            return this.nativeElement ? this.nativeElement.backgroundColor : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.backgroundColor = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartComponent.prototype, "backgroundImage", {
        /** @description Sets the chart's background image. For example: 'https://www.htmlelements.com/demos/images/carousel-large-1.jpg' */
        get: function () {
            return this.nativeElement ? this.nativeElement.backgroundImage : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.backgroundImage = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartComponent.prototype, "borderLineColor", {
        /** @description Sets the chart's border color. For example: '#098700' */
        get: function () {
            return this.nativeElement ? this.nativeElement.borderLineColor : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.borderLineColor = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartComponent.prototype, "borderLineWidth", {
        /** @description Sets the chart's border line width. */
        get: function () {
            return this.nativeElement ? this.nativeElement.borderLineWidth : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.borderLineWidth = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartComponent.prototype, "caption", {
        /** @description Sets the caption (title) of the chart. */
        get: function () {
            return this.nativeElement ? this.nativeElement.caption : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.caption = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartComponent.prototype, "clip", {
        /** @description Determines whether to clip plotted elements that overflow the axis boundaries. */
        get: function () {
            return this.nativeElement ? this.nativeElement.clip : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.clip = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartComponent.prototype, "colorScheme", {
        /** @description Sets the chart's color pallete. jqxChart suppports 32 color schemes from 'scheme01' to 'scheme32'. */
        get: function () {
            return this.nativeElement ? this.nativeElement.colorScheme : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.colorScheme = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartComponent.prototype, "columnSeriesOverlap", {
        /** @description Enables or disables overlapping of the column series. */
        get: function () {
            return this.nativeElement ? this.nativeElement.columnSeriesOverlap : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.columnSeriesOverlap = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartComponent.prototype, "crosshairsColor", {
        /** @description Gets or sets the color of the crosshairs lines. The 'enableCrosshairs' property should be 'true'. */
        get: function () {
            return this.nativeElement ? this.nativeElement.crosshairsColor : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.crosshairsColor = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartComponent.prototype, "crosshairsDashStyle", {
        /** @description Gets or sets the dash style of the crosshairs lines. The style is a series of numbers indicating line length followed by space length. The 'enableCrosshairs' property should be 'true'. For example: '3,3' */
        get: function () {
            return this.nativeElement ? this.nativeElement.crosshairsDashStyle : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.crosshairsDashStyle = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartComponent.prototype, "crosshairsLineWidth", {
        /** @description Gets or sets the width of the crosshairs lines. The 'enableCrosshairs' property should be 'true' */
        get: function () {
            return this.nativeElement ? this.nativeElement.crosshairsLineWidth : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.crosshairsLineWidth = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartComponent.prototype, "dataSource", {
        /** @description Sets the chart's data source. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dataSource : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dataSource = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartComponent.prototype, "description", {
        /** @description Sets the description text of the chart. */
        get: function () {
            return this.nativeElement ? this.nativeElement.description : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.description = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartComponent.prototype, "disabled", {
        /** @description Enables or disables the chart. */
        get: function () {
            return this.nativeElement ? this.nativeElement.disabled : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disabled = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartComponent.prototype, "draw", {
        /** @description Determines the drawing function of jqxChart. When the property is set, you can override the jqxChart's drawing. */
        get: function () {
            return this.nativeElement ? this.nativeElement.draw : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.draw = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartComponent.prototype, "drawBefore", {
        /** @description Function for custom drawing before the caption and other chart elements. */
        get: function () {
            return this.nativeElement ? this.nativeElement.drawBefore : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.drawBefore = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartComponent.prototype, "enableAxisTextAnimation", {
        /** @description Determines if the animation of the axes text is enabled. */
        get: function () {
            return this.nativeElement ? this.nativeElement.enableAxisTextAnimation : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.enableAxisTextAnimation = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartComponent.prototype, "enableCrosshairs", {
        /** @description Enables or disables the crosshairs lines. The lines are displayed in line and area series when you move over a data point. */
        get: function () {
            return this.nativeElement ? this.nativeElement.enableCrosshairs : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.enableCrosshairs = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartComponent.prototype, "greyScale", {
        /** @description Determines whether to display the chart using greyscale colors. */
        get: function () {
            return this.nativeElement ? this.nativeElement.greyScale : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.greyScale = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartComponent.prototype, "legendLayout", {
        /** @description Sets the legend's layout. */
        get: function () {
            return this.nativeElement ? this.nativeElement.legendLayout : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.legendLayout = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartComponent.prototype, "locale", {
        /** @description Sets or gets the locale. Used in conjunction with the property messages. */
        get: function () {
            return this.nativeElement ? this.nativeElement.locale : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.locale = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartComponent.prototype, "localization", {
        /** @description Localization object containing culture-specific properties required for formatting currencies, numbers and dates. */
        get: function () {
            return this.nativeElement ? this.nativeElement.localization : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.localization = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartComponent.prototype, "messages", {
        /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale. */
        get: function () {
            return this.nativeElement ? this.nativeElement.messages : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.messages = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartComponent.prototype, "padding", {
        /** @description Sets the left, top, right and bottom padding of the Chart. */
        get: function () {
            return this.nativeElement ? this.nativeElement.padding : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.padding = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartComponent.prototype, "renderEngine", {
        /** @description Determines the rendering engine used to display the chart. When the property is set to an empty string, jqxChart will automatically select an optimal rendering engine depending on the browser capabilities. */
        get: function () {
            return this.nativeElement ? this.nativeElement.renderEngine : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.renderEngine = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartComponent.prototype, "rightToLeft", {
        /** @description Sets or gets a value indicating whether the Chart's layout is mirrored. */
        get: function () {
            return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartComponent.prototype, "seriesGroups", {
        /** @description The seriesGroups property is used to describe all series displayed on the chart. jqxChart supports multiple series of different types and series grouping. Each series group may have its own Value Axis (Y-axis) which allows you to have values with different scales displayed on the same chart at the same time. It also allows you to display multiple series types together on the same chart. For example, you can display all series in one group as lines and the series in a second group as columns. seriesGroups is an array of objects where each object represents one group. */
        get: function () {
            return this.nativeElement ? this.nativeElement.seriesGroups : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.seriesGroups = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartComponent.prototype, "showBorderLine", {
        /** @description Determines whether to display the chart's border line. */
        get: function () {
            return this.nativeElement ? this.nativeElement.showBorderLine : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.showBorderLine = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartComponent.prototype, "showLegend", {
        /** @description Determines whether to show or hide the chart series legend. */
        get: function () {
            return this.nativeElement ? this.nativeElement.showLegend : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.showLegend = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartComponent.prototype, "showToolTips", {
        /** @description Enables or disables the chart tooltips. */
        get: function () {
            return this.nativeElement ? this.nativeElement.showToolTips : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.showToolTips = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartComponent.prototype, "showToolTipsOnAllSeries", {
        /** @description Determines whether to show a composite tooltip containing information for all series. */
        get: function () {
            return this.nativeElement ? this.nativeElement.showToolTipsOnAllSeries : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.showToolTipsOnAllSeries = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartComponent.prototype, "theme", {
        /** @description Determines the set of default background, line, text and band colors that will be used in the Chart. */
        get: function () {
            return this.nativeElement ? this.nativeElement.theme : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.theme = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartComponent.prototype, "titlePadding", {
        /** @description Sets the padding of the chart's title (caption). */
        get: function () {
            return this.nativeElement ? this.nativeElement.titlePadding : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.titlePadding = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartComponent.prototype, "toolTipBackground", {
        /** @description Tooltip background color. */
        get: function () {
            return this.nativeElement ? this.nativeElement.toolTipBackground : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.toolTipBackground = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartComponent.prototype, "toolTipFormatFunction", {
        /** @description Determines the tooltip hide delay in milliseconds. */
        get: function () {
            return this.nativeElement ? this.nativeElement.toolTipFormatFunction : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.toolTipFormatFunction = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartComponent.prototype, "toolTipHideDelay", {
        /** @description Tooltip line color. */
        get: function () {
            return this.nativeElement ? this.nativeElement.toolTipHideDelay : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.toolTipHideDelay = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartComponent.prototype, "toolTipLineColor", {
        /** @description Determines the tooltip show delay in milliseconds. Values may range from 0 to 10000 [ms]. */
        get: function () {
            return this.nativeElement ? this.nativeElement.toolTipLineColor : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.toolTipLineColor = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartComponent.prototype, "toolTipShowDelay", {
        /** @description An object with settings about the Chart's y-axis (value axis). */
        get: function () {
            return this.nativeElement ? this.nativeElement.toolTipShowDelay : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.toolTipShowDelay = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartComponent.prototype, "valueAxis", {
        /** @description Sets the Chart's xAxis. */
        get: function () {
            return this.nativeElement ? this.nativeElement.valueAxis : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.valueAxis = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartComponent.prototype, "xAxis", {
        /** @description undefined */
        get: function () {
            return this.nativeElement ? this.nativeElement.xAxis : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.xAxis = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /** @description Adds a new color sheme. If a scheme with the same name already exists, the method will update its colors.
    * @param {string} schemeName. The name of the custom color scheme.
    * @param {any[]} colorsArray. An array of color values.
    */
    ChartComponent.prototype.addColorScheme = function (schemeName, colorsArray) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.addColorScheme(schemeName, colorsArray);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.addColorScheme(schemeName, colorsArray);
            });
        }
    };
    /** @description Returns the colors of a color scheme by name. If the scheme doesn't exist the method returns undefined.
    * @param {string} schemeName. The name of the color scheme.
    * @returns {any[]}
  */
    ChartComponent.prototype.getColorScheme = function (schemeName) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getColorScheme(schemeName);
                                    resolve(result);
                                });
                            });
                        };
                        return [4 /*yield*/, getResultOnRender()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /** @description Gets the rendered coordinates of a data point element.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    * @param {number} itemIndex. Item (data point) index.
    * @returns {{ x: number, y: number, width: number, height: number, center: number, centerOffset: number, innerRadius: number, outerRadius: number, selectedRadiusChange: number, fromAngle: number, toAngle: number, radius: number }}
  */
    ChartComponent.prototype.getItemCoord = function (groupIndex, serieIndex, itemIndex) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getItemCoord(groupIndex, serieIndex, itemIndex);
                                    resolve(result);
                                });
                            });
                        };
                        return [4 /*yield*/, getResultOnRender()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /** @description Gets the number of rendered items in a specific serie.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    * @returns {number}
  */
    ChartComponent.prototype.getItemsCount = function (groupIndex, serieIndex) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getItemsCount(groupIndex, serieIndex);
                                    resolve(result);
                                });
                            });
                        };
                        return [4 /*yield*/, getResultOnRender()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /** @description Gets the rendered coordinates and values of the valueAxis labels.
    * @param {number} groupIndex. Series group index.
    * @returns {any}
  */
    ChartComponent.prototype.getValueAxisLabels = function (groupIndex) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getValueAxisLabels(groupIndex);
                                    resolve(result);
                                });
                            });
                        };
                        return [4 /*yield*/, getResultOnRender()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /** @description Gets the rendered rectangle coordinates of the valueAxis of specific serie group.
    * @param {number} groupIndex. Series group index.
    * @returns {DOMRect}
  */
    ChartComponent.prototype.getValueAxisRect = function (groupIndex) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getValueAxisRect(groupIndex);
                                    resolve(result);
                                });
                            });
                        };
                        return [4 /*yield*/, getResultOnRender()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /** @description Gets the valueAxis (vertical axis)'s value.
    * @param {number} offset. Vertical offset.
    * @param {number} groupIndex. Series group index.
    * @returns {any}
  */
    ChartComponent.prototype.getValueAxisValue = function (offset, groupIndex) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getValueAxisValue(offset, groupIndex);
                                    resolve(result);
                                });
                            });
                        };
                        return [4 /*yield*/, getResultOnRender()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /** @description Gets the rendered coordinates and values of the xAxis labels.
    * @param {number} groupIndex. Series group index.
    * @returns {any}
  */
    ChartComponent.prototype.getXAxisLabels = function (groupIndex) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getXAxisLabels(groupIndex);
                                    resolve(result);
                                });
                            });
                        };
                        return [4 /*yield*/, getResultOnRender()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /** @description Gets the rendered rectangle coordinates of the x-Axis of specific serie group.
    * @param {number} groupIndex. Series group index.
    * @returns {DOMRect}
  */
    ChartComponent.prototype.getXAxisRect = function (groupIndex) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getXAxisRect(groupIndex);
                                    resolve(result);
                                });
                            });
                        };
                        return [4 /*yield*/, getResultOnRender()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /** @description Gets the xAxis (horizontal axis)'s value.
    * @param {number} offset. Horizontal offset.
    * @param {number} groupIndex. Series group index.
    * @returns {any}
  */
    ChartComponent.prototype.getXAxisValue = function (offset, groupIndex) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getXAxisValue(offset, groupIndex);
                                    resolve(result);
                                });
                            });
                        };
                        return [4 /*yield*/, getResultOnRender()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /** @description Hides a chart serie. The result of calling this function is same as the user unchecking the legend box of a chart serie.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    * @param {number} itemIndex?. Item (data point) index. Applicable to pie and donut series only.
    */
    ChartComponent.prototype.hideSerie = function (groupIndex, serieIndex, itemIndex) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.hideSerie(groupIndex, serieIndex, itemIndex);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.hideSerie(groupIndex, serieIndex, itemIndex);
            });
        }
    };
    /** @description Hides the current tooltip if visible.
    * @param {number} hideDelay?. Hide delay.
    */
    ChartComponent.prototype.hideToolTip = function (hideDelay) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.hideToolTip(hideDelay);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.hideToolTip(hideDelay);
            });
        }
    };
    /** @description Prints the chart.
    */
    ChartComponent.prototype.print = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.print();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.print();
            });
        }
    };
    /** @description Refreshes the content of the chart element after a property or data update.
    */
    ChartComponent.prototype.refresh = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.refresh();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.refresh();
            });
        }
    };
    /** @description Removes an existing color scheme. If the scheme does not exist, the method has no effect.
    * @param {string} schemeName. The name of the custom color scheme.
    */
    ChartComponent.prototype.removeColorScheme = function (schemeName) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeColorScheme(schemeName);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.removeColorScheme(schemeName);
            });
        }
    };
    /** @description Exports the chart's content as JPEG image.
    * @param {string} fileName?. File name.
    */
    ChartComponent.prototype.saveAsJPEG = function (fileName) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.saveAsJPEG(fileName);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.saveAsJPEG(fileName);
            });
        }
    };
    /** @description Exports the chart's content as PNG image.
    * @param {string} fileName?. File name.
    */
    ChartComponent.prototype.saveAsPNG = function (fileName) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.saveAsPNG(fileName);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.saveAsPNG(fileName);
            });
        }
    };
    /** @description Exports the chart's content as PDF.
    * @param {string} fileName?. File name.
    * @param {string} pageOrientation?. PDF page orientation. <strong>Possible values:</strong> 'portrait' (default), 'landscape'.
    */
    ChartComponent.prototype.saveAsPDF = function (fileName, pageOrientation) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.saveAsPDF(fileName, pageOrientation);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.saveAsPDF(fileName, pageOrientation);
            });
        }
    };
    /** @description Shows a hidden chart serie. The result of calling this function is same as the user checking the legend box of a chart serie.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    * @param {number} itemIndex?. Item (data point) index. Applicable to pie and donut series only.
    */
    ChartComponent.prototype.showSerie = function (groupIndex, serieIndex, itemIndex) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.showSerie(groupIndex, serieIndex, itemIndex);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.showSerie(groupIndex, serieIndex, itemIndex);
            });
        }
    };
    /** @description Shows a the tooltip for a particular data point.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    * @param {number} itemIndex. Item (data point) index.
    * @param {number} showDelay?. Show delay.
    * @param {number} hideDelay?. Hide delay.
    */
    ChartComponent.prototype.showToolTip = function (groupIndex, serieIndex, itemIndex, showDelay, hideDelay) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.showToolTip(groupIndex, serieIndex, itemIndex, showDelay, hideDelay);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.showToolTip(groupIndex, serieIndex, itemIndex, showDelay, hideDelay);
            });
        }
    };
    /** @description Updates the values of the chart series without full refresh of the entire chart. The method should be used for animation of frequently changing values.
    */
    ChartComponent.prototype.update = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.update();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.update();
            });
        }
    };
    Object.defineProperty(ChartComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    ChartComponent.prototype.ngOnInit = function () {
    };
    ChartComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        this.listen();
    };
    ChartComponent.prototype.ngOnDestroy = function () {
        this.unlisten();
    };
    ChartComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    /** @description Add event listeners. */
    ChartComponent.prototype.listen = function () {
        var that = this;
        that.eventHandlers['annotationClickHandler'] = function (event) { that.onAnnotationClick.emit(event); };
        that.nativeElement.addEventListener('annotationClick', that.eventHandlers['annotationClickHandler']);
        that.eventHandlers['annotationMouseenterHandler'] = function (event) { that.onAnnotationMouseenter.emit(event); };
        that.nativeElement.addEventListener('annotationMouseenter', that.eventHandlers['annotationMouseenterHandler']);
        that.eventHandlers['annotationMouseleaveHandler'] = function (event) { that.onAnnotationMouseleave.emit(event); };
        that.nativeElement.addEventListener('annotationMouseleave', that.eventHandlers['annotationMouseleaveHandler']);
        that.eventHandlers['clickHandler'] = function (event) { that.onClick.emit(event); };
        that.nativeElement.addEventListener('click', that.eventHandlers['clickHandler']);
        that.eventHandlers['mouseoutHandler'] = function (event) { that.onMouseout.emit(event); };
        that.nativeElement.addEventListener('mouseout', that.eventHandlers['mouseoutHandler']);
        that.eventHandlers['mouseoverHandler'] = function (event) { that.onMouseover.emit(event); };
        that.nativeElement.addEventListener('mouseover', that.eventHandlers['mouseoverHandler']);
        that.eventHandlers['rangeSelectionChangedHandler'] = function (event) { that.onRangeSelectionChanged.emit(event); };
        that.nativeElement.addEventListener('rangeSelectionChanged', that.eventHandlers['rangeSelectionChangedHandler']);
        that.eventHandlers['rangeSelectionChangingHandler'] = function (event) { that.onRangeSelectionChanging.emit(event); };
        that.nativeElement.addEventListener('rangeSelectionChanging', that.eventHandlers['rangeSelectionChangingHandler']);
        that.eventHandlers['refreshBeginHandler'] = function (event) { that.onRefreshBegin.emit(event); };
        that.nativeElement.addEventListener('refreshBegin', that.eventHandlers['refreshBeginHandler']);
        that.eventHandlers['refreshEndHandler'] = function (event) { that.onRefreshEnd.emit(event); };
        that.nativeElement.addEventListener('refreshEnd', that.eventHandlers['refreshEndHandler']);
        that.eventHandlers['toggleHandler'] = function (event) { that.onToggle.emit(event); };
        that.nativeElement.addEventListener('toggle', that.eventHandlers['toggleHandler']);
    };
    /** @description Remove event listeners. */
    ChartComponent.prototype.unlisten = function () {
        var that = this;
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
    };
    ChartComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
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
    return ChartComponent;
}(BaseElement));
export { ChartComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQuY2hhcnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zbWFydC13ZWJjb21wb25lbnRzLWFuZ3VsYXIvY2hhcnQvIiwic291cmNlcyI6WyJzbWFydC5jaGFydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUosT0FBTyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVyRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFReEM7SUFBb0MsMENBQVc7SUFDOUMsd0JBQVksR0FBc0I7UUFBbEMsWUFDQyxrQkFBTSxHQUFHLENBQUMsU0FFVjtRQUVPLG1CQUFhLEdBQVUsRUFBRSxDQUFDO1FBdVlsQzs4Q0FDc0M7UUFDNUIsdUJBQWlCLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFNUU7OENBQ3NDO1FBQzVCLDRCQUFzQixHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRWpGOzhDQUNzQztRQUM1Qiw0QkFBc0IsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVqRjs4Q0FDc0M7UUFDNUIsYUFBTyxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRWxFOzhDQUNzQztRQUM1QixnQkFBVSxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXJFOzhDQUNzQztRQUM1QixpQkFBVyxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXRFOzhDQUNzQztRQUM1Qiw2QkFBdUIsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVsRjs4Q0FDc0M7UUFDNUIsOEJBQXdCLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFbkY7OENBQ3ND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O0NBQUEsQUFwNUJELENBQW9DLFdBQVcsR0FvNUI5QztTQXA1QlksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYXJ0IH0gZnJvbSAnLi8uLi9pbmRleCc7XG5pbXBvcnQgeyBBbmltYXRpb24sIENoYXJ0Q29sb3JTY2hlbWUsIENoYXJ0UmVuZGVyRW5naW5lLCBIb3Jpem9udGFsQWxpZ25tZW50LCBDaGFydFJvdGF0aW9uUG9pbnQsIFZlcnRpY2FsQWxpZ25tZW50LCBDaGFydEFubm90YXRpb25UeXBlLCBDaGFydFVuc2VsZWN0TW9kZSwgT3JpZW50YXRpb24sIENoYXJ0U2VyaWVzR3JvdXBTZXJpZUVtcHR5UG9pbnRzRGlzcGxheSwgQ2hhcnRTeW1ib2xUeXBlLCBDaGFydFR5cGUsIEF4aXNQb3NpdGlvbiwgQ2hhcnRCYXNlVW5pdCwgQ2hhcnRYQXhpc1R5cGUsIENoYXJ0TG9jYWxpemF0aW9uLCBQYWRkaW5nLCBDaGFydFNlcmllc0dyb3VwLCBDaGFydEFubm90YXRpb24sIE9mZnNldCwgQ2hhcnRBbm5vdGF0aW9uVGV4dCwgQ2hhcnRCYW5kLCBDaGFydEZvcm1hdFNldHRpbmdzLCBDaGFydFNlcmllc0dyb3VwU2VyaWUsIENoYXJ0TGFiZWxzLCBDaGFydFZhbHVlQXhpcywgQ2hhcnRMaW5lcywgQ2hhcnRMaW5lLCBDaGFydFRpdGxlLCBDaGFydFhBeGlzLCBDaGFydFJhbmdlU2VsZWN0b3IsIEVsZW1lbnRSZW5kZXJNb2RlfSBmcm9tICcuLy4uL2luZGV4JztcbmltcG9ydCB7IENvbXBvbmVudCwgRGlyZWN0aXZlLCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgU2ltcGxlQ2hhbmdlcywgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VFbGVtZW50LCBTbWFydCB9IGZyb20gJy4vc21hcnQuZWxlbWVudCc7XG5leHBvcnQgeyBBbmltYXRpb24sIENoYXJ0Q29sb3JTY2hlbWUsIENoYXJ0UmVuZGVyRW5naW5lLCBIb3Jpem9udGFsQWxpZ25tZW50LCBDaGFydFJvdGF0aW9uUG9pbnQsIFZlcnRpY2FsQWxpZ25tZW50LCBDaGFydEFubm90YXRpb25UeXBlLCBDaGFydFVuc2VsZWN0TW9kZSwgT3JpZW50YXRpb24sIENoYXJ0U2VyaWVzR3JvdXBTZXJpZUVtcHR5UG9pbnRzRGlzcGxheSwgQ2hhcnRTeW1ib2xUeXBlLCBDaGFydFR5cGUsIEF4aXNQb3NpdGlvbiwgQ2hhcnRCYXNlVW5pdCwgQ2hhcnRYQXhpc1R5cGUsIENoYXJ0TG9jYWxpemF0aW9uLCBQYWRkaW5nLCBDaGFydFNlcmllc0dyb3VwLCBDaGFydEFubm90YXRpb24sIE9mZnNldCwgQ2hhcnRBbm5vdGF0aW9uVGV4dCwgQ2hhcnRCYW5kLCBDaGFydEZvcm1hdFNldHRpbmdzLCBDaGFydFNlcmllc0dyb3VwU2VyaWUsIENoYXJ0TGFiZWxzLCBDaGFydFZhbHVlQXhpcywgQ2hhcnRMaW5lcywgQ2hhcnRMaW5lLCBDaGFydFRpdGxlLCBDaGFydFhBeGlzLCBDaGFydFJhbmdlU2VsZWN0b3IsIEVsZW1lbnRSZW5kZXJNb2RlfSBmcm9tICcuLy4uL2luZGV4JztcbmV4cG9ydCB7IFNtYXJ0IH0gZnJvbSAnLi9zbWFydC5lbGVtZW50JztcbmV4cG9ydCB7IENoYXJ0IH0gZnJvbSAnLi8uLi9pbmRleCc7XG5cblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnc21hcnQtY2hhcnQsIFtzbWFydC1jaGFydF0nXG59KVxuXG5leHBvcnQgY2xhc3MgQ2hhcnRDb21wb25lbnQgZXh0ZW5kcyBCYXNlRWxlbWVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuXHRjb25zdHJ1Y3RvcihyZWY6IEVsZW1lbnRSZWY8Q2hhcnQ+KSB7XG5cdFx0c3VwZXIocmVmKTtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPSByZWYubmF0aXZlRWxlbWVudCBhcyBDaGFydDtcblx0fVxuXG5cdHByaXZhdGUgZXZlbnRIYW5kbGVyczogYW55W10gPSBbXTtcblxuXHRwdWJsaWMgbmF0aXZlRWxlbWVudDogQ2hhcnQ7XG5cdC8qKiBAZGVzY3JpcHRpb24gQ3JlYXRlcyB0aGUgY29tcG9uZW50IG9uIGRlbWFuZC5cblx0ICogQHBhcmFtIHByb3BlcnRpZXMgQW4gb3B0aW9uYWwgb2JqZWN0IG9mIHByb3BlcnRpZXMsIHdoaWNoIHdpbGwgYmUgYWRkZWQgdG8gdGhlIHRlbXBsYXRlIGJpbmRlZCBvbmVzLlxuXHQgKi9cblx0cHVibGljIGNyZWF0ZUNvbXBvbmVudChwcm9wZXJ0aWVzID0ge30pOiBhbnkge1xuICAgIFx0dGhpcy5uYXRpdmVFbGVtZW50ID0gPENoYXJ0PmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NtYXJ0LWNoYXJ0Jyk7XG5cdFx0Zm9yIChsZXQgcHJvcGVydHlOYW1lIGluIHByb3BlcnRpZXMpIHsgXG4gXHRcdFx0dGhpcy5uYXRpdmVFbGVtZW50W3Byb3BlcnR5TmFtZV0gPSBwcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV07XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQ7XG5cdH1cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIGFuaW1hdGlvbiBtb2RlLiBBbmltYXRpb24gaXMgZGlzYWJsZWQgd2hlbiB0aGUgcHJvcGVydHkgaXMgc2V0IHRvICdub25lJy4gKi9cblx0QElucHV0KClcblx0Z2V0IGFuaW1hdGlvbigpOiBBbmltYXRpb24ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYW5pbWF0aW9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBhbmltYXRpb24odmFsdWU6IEFuaW1hdGlvbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hbmltYXRpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgYW5pbWF0aW9uIGR1cmF0aW9uIGluIG1pbGxpc2Vjb25kcy4gVGhlIHZhbHVlIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA1MDAwLiBJZiBpdCBpcyBvdXRzaWRlIG9mIHRoaXMgcmFuZ2UganF4Q2hhcnQgd2lsbCByZXNldCBpdCB0byB0aGUgZGVmYXVsdCB2YWx1ZS4gKi9cblx0QElucHV0KClcblx0Z2V0IGFuaW1hdGlvbkR1cmF0aW9uKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hbmltYXRpb25EdXJhdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYW5pbWF0aW9uRHVyYXRpb24odmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hbmltYXRpb25EdXJhdGlvbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBjaGFydCdzIGJhY2tncm91bmQgY29sb3IuIEZvciBleGFtcGxlOiAnI0RERkZFOCcgKi9cblx0QElucHV0KClcblx0Z2V0IGJhY2tncm91bmRDb2xvcigpOiBzdHJpbmcgfCBudWxsIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmJhY2tncm91bmRDb2xvciA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYmFja2dyb3VuZENvbG9yKHZhbHVlOiBzdHJpbmcgfCBudWxsKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmJhY2tncm91bmRDb2xvciA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBjaGFydCdzIGJhY2tncm91bmQgaW1hZ2UuIEZvciBleGFtcGxlOiAnaHR0cHM6Ly93d3cuaHRtbGVsZW1lbnRzLmNvbS9kZW1vcy9pbWFnZXMvY2Fyb3VzZWwtbGFyZ2UtMS5qcGcnICovXG5cdEBJbnB1dCgpXG5cdGdldCBiYWNrZ3JvdW5kSW1hZ2UoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmJhY2tncm91bmRJbWFnZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYmFja2dyb3VuZEltYWdlKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYmFja2dyb3VuZEltYWdlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgdGhlIGNoYXJ0J3MgYm9yZGVyIGNvbG9yLiBGb3IgZXhhbXBsZTogJyMwOTg3MDAnICovXG5cdEBJbnB1dCgpXG5cdGdldCBib3JkZXJMaW5lQ29sb3IoKTogc3RyaW5nIHwgbnVsbCB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ib3JkZXJMaW5lQ29sb3IgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGJvcmRlckxpbmVDb2xvcih2YWx1ZTogc3RyaW5nIHwgbnVsbCkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ib3JkZXJMaW5lQ29sb3IgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyB0aGUgY2hhcnQncyBib3JkZXIgbGluZSB3aWR0aC4gKi9cblx0QElucHV0KClcblx0Z2V0IGJvcmRlckxpbmVXaWR0aCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYm9yZGVyTGluZVdpZHRoIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBib3JkZXJMaW5lV2lkdGgodmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ib3JkZXJMaW5lV2lkdGggPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyB0aGUgY2FwdGlvbiAodGl0bGUpIG9mIHRoZSBjaGFydC4gKi9cblx0QElucHV0KClcblx0Z2V0IGNhcHRpb24oKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNhcHRpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGNhcHRpb24odmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jYXB0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgd2hldGhlciB0byBjbGlwIHBsb3R0ZWQgZWxlbWVudHMgdGhhdCBvdmVyZmxvdyB0aGUgYXhpcyBib3VuZGFyaWVzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgY2xpcCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNsaXAgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGNsaXAodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xpcCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBjaGFydCdzIGNvbG9yIHBhbGxldGUuIGpxeENoYXJ0IHN1cHBwb3J0cyAzMiBjb2xvciBzY2hlbWVzIGZyb20gJ3NjaGVtZTAxJyB0byAnc2NoZW1lMzInLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgY29sb3JTY2hlbWUoKTogQ2hhcnRDb2xvclNjaGVtZSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb2xvclNjaGVtZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgY29sb3JTY2hlbWUodmFsdWU6IENoYXJ0Q29sb3JTY2hlbWUpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sb3JTY2hlbWUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRW5hYmxlcyBvciBkaXNhYmxlcyBvdmVybGFwcGluZyBvZiB0aGUgY29sdW1uIHNlcmllcy4gKi9cblx0QElucHV0KClcblx0Z2V0IGNvbHVtblNlcmllc092ZXJsYXAoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb2x1bW5TZXJpZXNPdmVybGFwIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjb2x1bW5TZXJpZXNPdmVybGFwKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbHVtblNlcmllc092ZXJsYXAgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gR2V0cyBvciBzZXRzIHRoZSBjb2xvciBvZiB0aGUgY3Jvc3NoYWlycyBsaW5lcy4gVGhlICdlbmFibGVDcm9zc2hhaXJzJyBwcm9wZXJ0eSBzaG91bGQgYmUgJ3RydWUnLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgY3Jvc3NoYWlyc0NvbG9yKCk6IHN0cmluZyB8IG51bGwge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY3Jvc3NoYWlyc0NvbG9yIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjcm9zc2hhaXJzQ29sb3IodmFsdWU6IHN0cmluZyB8IG51bGwpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY3Jvc3NoYWlyc0NvbG9yID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEdldHMgb3Igc2V0cyB0aGUgZGFzaCBzdHlsZSBvZiB0aGUgY3Jvc3NoYWlycyBsaW5lcy4gVGhlIHN0eWxlIGlzIGEgc2VyaWVzIG9mIG51bWJlcnMgaW5kaWNhdGluZyBsaW5lIGxlbmd0aCBmb2xsb3dlZCBieSBzcGFjZSBsZW5ndGguIFRoZSAnZW5hYmxlQ3Jvc3NoYWlycycgcHJvcGVydHkgc2hvdWxkIGJlICd0cnVlJy4gRm9yIGV4YW1wbGU6ICczLDMnICovXG5cdEBJbnB1dCgpXG5cdGdldCBjcm9zc2hhaXJzRGFzaFN0eWxlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jcm9zc2hhaXJzRGFzaFN0eWxlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjcm9zc2hhaXJzRGFzaFN0eWxlKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY3Jvc3NoYWlyc0Rhc2hTdHlsZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBHZXRzIG9yIHNldHMgdGhlIHdpZHRoIG9mIHRoZSBjcm9zc2hhaXJzIGxpbmVzLiBUaGUgJ2VuYWJsZUNyb3NzaGFpcnMnIHByb3BlcnR5IHNob3VsZCBiZSAndHJ1ZScgKi9cblx0QElucHV0KClcblx0Z2V0IGNyb3NzaGFpcnNMaW5lV2lkdGgoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNyb3NzaGFpcnNMaW5lV2lkdGggOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGNyb3NzaGFpcnNMaW5lV2lkdGgodmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jcm9zc2hhaXJzTGluZVdpZHRoID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgdGhlIGNoYXJ0J3MgZGF0YSBzb3VyY2UuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkYXRhU291cmNlKCk6IGFueVtdIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRhdGFTb3VyY2UgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRhdGFTb3VyY2UodmFsdWU6IGFueVtdKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRhdGFTb3VyY2UgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyB0aGUgZGVzY3JpcHRpb24gdGV4dCBvZiB0aGUgY2hhcnQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkZXNjcmlwdGlvbigpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGVzY3JpcHRpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRlc2NyaXB0aW9uKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGVzY3JpcHRpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRW5hYmxlcyBvciBkaXNhYmxlcyB0aGUgY2hhcnQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVkIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlZCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBkcmF3aW5nIGZ1bmN0aW9uIG9mIGpxeENoYXJ0LiBXaGVuIHRoZSBwcm9wZXJ0eSBpcyBzZXQsIHlvdSBjYW4gb3ZlcnJpZGUgdGhlIGpxeENoYXJ0J3MgZHJhd2luZy4gKi9cblx0QElucHV0KClcblx0Z2V0IGRyYXcoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRyYXcgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRyYXcodmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kcmF3ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEZ1bmN0aW9uIGZvciBjdXN0b20gZHJhd2luZyBiZWZvcmUgdGhlIGNhcHRpb24gYW5kIG90aGVyIGNoYXJ0IGVsZW1lbnRzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZHJhd0JlZm9yZSgpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZHJhd0JlZm9yZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZHJhd0JlZm9yZSh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRyYXdCZWZvcmUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyBpZiB0aGUgYW5pbWF0aW9uIG9mIHRoZSBheGVzIHRleHQgaXMgZW5hYmxlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IGVuYWJsZUF4aXNUZXh0QW5pbWF0aW9uKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZW5hYmxlQXhpc1RleHRBbmltYXRpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGVuYWJsZUF4aXNUZXh0QW5pbWF0aW9uKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmVuYWJsZUF4aXNUZXh0QW5pbWF0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEVuYWJsZXMgb3IgZGlzYWJsZXMgdGhlIGNyb3NzaGFpcnMgbGluZXMuIFRoZSBsaW5lcyBhcmUgZGlzcGxheWVkIGluIGxpbmUgYW5kIGFyZWEgc2VyaWVzIHdoZW4geW91IG1vdmUgb3ZlciBhIGRhdGEgcG9pbnQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBlbmFibGVDcm9zc2hhaXJzKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZW5hYmxlQ3Jvc3NoYWlycyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZW5hYmxlQ3Jvc3NoYWlycyh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5lbmFibGVDcm9zc2hhaXJzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgd2hldGhlciB0byBkaXNwbGF5IHRoZSBjaGFydCB1c2luZyBncmV5c2NhbGUgY29sb3JzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZ3JleVNjYWxlKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZ3JleVNjYWxlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBncmV5U2NhbGUodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZ3JleVNjYWxlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgdGhlIGxlZ2VuZCdzIGxheW91dC4gKi9cblx0QElucHV0KClcblx0Z2V0IGxlZ2VuZExheW91dCgpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubGVnZW5kTGF5b3V0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBsZWdlbmRMYXlvdXQodmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sZWdlbmRMYXlvdXQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSBsb2NhbGUuIFVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCB0aGUgcHJvcGVydHkgbWVzc2FnZXMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBsb2NhbGUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxvY2FsZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbG9jYWxlKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubG9jYWxlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIExvY2FsaXphdGlvbiBvYmplY3QgY29udGFpbmluZyBjdWx0dXJlLXNwZWNpZmljIHByb3BlcnRpZXMgcmVxdWlyZWQgZm9yIGZvcm1hdHRpbmcgY3VycmVuY2llcywgbnVtYmVycyBhbmQgZGF0ZXMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBsb2NhbGl6YXRpb24oKTogQ2hhcnRMb2NhbGl6YXRpb24ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubG9jYWxpemF0aW9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBsb2NhbGl6YXRpb24odmFsdWU6IENoYXJ0TG9jYWxpemF0aW9uKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxvY2FsaXphdGlvbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgYW4gb2JqZWN0IHNwZWNpZnlpbmcgc3RyaW5ncyB1c2VkIGluIHRoZSB3aWRnZXQgdGhhdCBjYW4gYmUgbG9jYWxpemVkLiBVc2VkIGluIGNvbmp1bmN0aW9uIHdpdGggdGhlIHByb3BlcnR5IGxvY2FsZS4gKi9cblx0QElucHV0KClcblx0Z2V0IG1lc3NhZ2VzKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5tZXNzYWdlcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbWVzc2FnZXModmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5tZXNzYWdlcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBsZWZ0LCB0b3AsIHJpZ2h0IGFuZCBib3R0b20gcGFkZGluZyBvZiB0aGUgQ2hhcnQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBwYWRkaW5nKCk6IFBhZGRpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucGFkZGluZyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcGFkZGluZyh2YWx1ZTogUGFkZGluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5wYWRkaW5nID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIHJlbmRlcmluZyBlbmdpbmUgdXNlZCB0byBkaXNwbGF5IHRoZSBjaGFydC4gV2hlbiB0aGUgcHJvcGVydHkgaXMgc2V0IHRvIGFuIGVtcHR5IHN0cmluZywganF4Q2hhcnQgd2lsbCBhdXRvbWF0aWNhbGx5IHNlbGVjdCBhbiBvcHRpbWFsIHJlbmRlcmluZyBlbmdpbmUgZGVwZW5kaW5nIG9uIHRoZSBicm93c2VyIGNhcGFiaWxpdGllcy4gKi9cblx0QElucHV0KClcblx0Z2V0IHJlbmRlckVuZ2luZSgpOiBDaGFydFJlbmRlckVuZ2luZSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZW5kZXJFbmdpbmUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHJlbmRlckVuZ2luZSh2YWx1ZTogQ2hhcnRSZW5kZXJFbmdpbmUpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmVuZGVyRW5naW5lID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyBhIHZhbHVlIGluZGljYXRpbmcgd2hldGhlciB0aGUgQ2hhcnQncyBsYXlvdXQgaXMgbWlycm9yZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCByaWdodFRvTGVmdCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJpZ2h0VG9MZWZ0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCByaWdodFRvTGVmdCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yaWdodFRvTGVmdCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGUgc2VyaWVzR3JvdXBzIHByb3BlcnR5IGlzIHVzZWQgdG8gZGVzY3JpYmUgYWxsIHNlcmllcyBkaXNwbGF5ZWQgb24gdGhlIGNoYXJ0LiBqcXhDaGFydCBzdXBwb3J0cyBtdWx0aXBsZSBzZXJpZXMgb2YgZGlmZmVyZW50IHR5cGVzIGFuZCBzZXJpZXMgZ3JvdXBpbmcuIEVhY2ggc2VyaWVzIGdyb3VwIG1heSBoYXZlIGl0cyBvd24gVmFsdWUgQXhpcyAoWS1heGlzKSB3aGljaCBhbGxvd3MgeW91IHRvIGhhdmUgdmFsdWVzIHdpdGggZGlmZmVyZW50IHNjYWxlcyBkaXNwbGF5ZWQgb24gdGhlIHNhbWUgY2hhcnQgYXQgdGhlIHNhbWUgdGltZS4gSXQgYWxzbyBhbGxvd3MgeW91IHRvIGRpc3BsYXkgbXVsdGlwbGUgc2VyaWVzIHR5cGVzIHRvZ2V0aGVyIG9uIHRoZSBzYW1lIGNoYXJ0LiBGb3IgZXhhbXBsZSwgeW91IGNhbiBkaXNwbGF5IGFsbCBzZXJpZXMgaW4gb25lIGdyb3VwIGFzIGxpbmVzIGFuZCB0aGUgc2VyaWVzIGluIGEgc2Vjb25kIGdyb3VwIGFzIGNvbHVtbnMuIHNlcmllc0dyb3VwcyBpcyBhbiBhcnJheSBvZiBvYmplY3RzIHdoZXJlIGVhY2ggb2JqZWN0IHJlcHJlc2VudHMgb25lIGdyb3VwLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc2VyaWVzR3JvdXBzKCk6IENoYXJ0U2VyaWVzR3JvdXBbXSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zZXJpZXNHcm91cHMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHNlcmllc0dyb3Vwcyh2YWx1ZTogQ2hhcnRTZXJpZXNHcm91cFtdKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNlcmllc0dyb3VwcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHdoZXRoZXIgdG8gZGlzcGxheSB0aGUgY2hhcnQncyBib3JkZXIgbGluZS4gKi9cblx0QElucHV0KClcblx0Z2V0IHNob3dCb3JkZXJMaW5lKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2hvd0JvcmRlckxpbmUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHNob3dCb3JkZXJMaW5lKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNob3dCb3JkZXJMaW5lID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgd2hldGhlciB0byBzaG93IG9yIGhpZGUgdGhlIGNoYXJ0IHNlcmllcyBsZWdlbmQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBzaG93TGVnZW5kKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2hvd0xlZ2VuZCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc2hvd0xlZ2VuZCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zaG93TGVnZW5kID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEVuYWJsZXMgb3IgZGlzYWJsZXMgdGhlIGNoYXJ0IHRvb2x0aXBzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc2hvd1Rvb2xUaXBzKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2hvd1Rvb2xUaXBzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzaG93VG9vbFRpcHModmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2hvd1Rvb2xUaXBzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgd2hldGhlciB0byBzaG93IGEgY29tcG9zaXRlIHRvb2x0aXAgY29udGFpbmluZyBpbmZvcm1hdGlvbiBmb3IgYWxsIHNlcmllcy4gKi9cblx0QElucHV0KClcblx0Z2V0IHNob3dUb29sVGlwc09uQWxsU2VyaWVzKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2hvd1Rvb2xUaXBzT25BbGxTZXJpZXMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHNob3dUb29sVGlwc09uQWxsU2VyaWVzKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNob3dUb29sVGlwc09uQWxsU2VyaWVzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIHNldCBvZiBkZWZhdWx0IGJhY2tncm91bmQsIGxpbmUsIHRleHQgYW5kIGJhbmQgY29sb3JzIHRoYXQgd2lsbCBiZSB1c2VkIGluIHRoZSBDaGFydC4gKi9cblx0QElucHV0KClcblx0Z2V0IHRoZW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50aGVtZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdGhlbWUodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50aGVtZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBwYWRkaW5nIG9mIHRoZSBjaGFydCdzIHRpdGxlIChjYXB0aW9uKS4gKi9cblx0QElucHV0KClcblx0Z2V0IHRpdGxlUGFkZGluZygpOiBQYWRkaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRpdGxlUGFkZGluZyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdGl0bGVQYWRkaW5nKHZhbHVlOiBQYWRkaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRpdGxlUGFkZGluZyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUb29sdGlwIGJhY2tncm91bmQgY29sb3IuICovXG5cdEBJbnB1dCgpXG5cdGdldCB0b29sVGlwQmFja2dyb3VuZCgpOiBzdHJpbmcgfCBudWxsIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRvb2xUaXBCYWNrZ3JvdW5kIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0b29sVGlwQmFja2dyb3VuZCh2YWx1ZTogc3RyaW5nIHwgbnVsbCkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50b29sVGlwQmFja2dyb3VuZCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSB0b29sdGlwIGhpZGUgZGVsYXkgaW4gbWlsbGlzZWNvbmRzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdG9vbFRpcEZvcm1hdEZ1bmN0aW9uKCk6IHsodmFsdWU/OiBhbnksIGluZGV4PzogbnVtYmVyLCBzZXJpZXM/OiBhbnkpOiBzdHJpbmd9IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRvb2xUaXBGb3JtYXRGdW5jdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdG9vbFRpcEZvcm1hdEZ1bmN0aW9uKHZhbHVlOiB7KHZhbHVlPzogYW55LCBpbmRleD86IG51bWJlciwgc2VyaWVzPzogYW55KTogc3RyaW5nfSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50b29sVGlwRm9ybWF0RnVuY3Rpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVG9vbHRpcCBsaW5lIGNvbG9yLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdG9vbFRpcEhpZGVEZWxheSgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudG9vbFRpcEhpZGVEZWxheSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdG9vbFRpcEhpZGVEZWxheSh2YWx1ZTogbnVtYmVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRvb2xUaXBIaWRlRGVsYXkgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgdG9vbHRpcCBzaG93IGRlbGF5IGluIG1pbGxpc2Vjb25kcy4gVmFsdWVzIG1heSByYW5nZSBmcm9tIDAgdG8gMTAwMDAgW21zXS4gKi9cblx0QElucHV0KClcblx0Z2V0IHRvb2xUaXBMaW5lQ29sb3IoKTogc3RyaW5nIHwgbnVsbCB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50b29sVGlwTGluZUNvbG9yIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0b29sVGlwTGluZUNvbG9yKHZhbHVlOiBzdHJpbmcgfCBudWxsKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRvb2xUaXBMaW5lQ29sb3IgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQW4gb2JqZWN0IHdpdGggc2V0dGluZ3MgYWJvdXQgdGhlIENoYXJ0J3MgeS1heGlzICh2YWx1ZSBheGlzKS4gKi9cblx0QElucHV0KClcblx0Z2V0IHRvb2xUaXBTaG93RGVsYXkoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRvb2xUaXBTaG93RGVsYXkgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRvb2xUaXBTaG93RGVsYXkodmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50b29sVGlwU2hvd0RlbGF5ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgdGhlIENoYXJ0J3MgeEF4aXMuICovXG5cdEBJbnB1dCgpXG5cdGdldCB2YWx1ZUF4aXMoKTogQ2hhcnRWYWx1ZUF4aXMge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudmFsdWVBeGlzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB2YWx1ZUF4aXModmFsdWU6IENoYXJ0VmFsdWVBeGlzKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnZhbHVlQXhpcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiB1bmRlZmluZWQgKi9cblx0QElucHV0KClcblx0Z2V0IHhBeGlzKCk6IENoYXJ0WEF4aXMge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQueEF4aXMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHhBeGlzKHZhbHVlOiBDaGFydFhBeGlzKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnhBeGlzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoZSBldmVudCBpcyByYWlzZWQgd2hlbiB0aGUgdXNlciBjbGlja3Mgb24gYSBjaGFydCBhbm5vdGF0aW9uLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Ki9cblx0QE91dHB1dCgpIG9uQW5ub3RhdGlvbkNsaWNrOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhlIGV2ZW50IGlzIHJhaXNlZCB3aGVuIHRoZSB1c2VyIG1vdmVzIHRoZSBjdXJzb3IgYWJvdmUgYSBjaGFydCBhbm5vdGF0aW9uLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Ki9cblx0QE91dHB1dCgpIG9uQW5ub3RhdGlvbk1vdXNlZW50ZXI6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGUgZXZlbnQgaXMgcmFpc2VkIHdoZW4gdGhlIHVzZXIgbW92ZXMgdGhlIGN1cnNvciBvdXQgb2YgYSBjaGFydCBhbm5vdGF0aW9uLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Ki9cblx0QE91dHB1dCgpIG9uQW5ub3RhdGlvbk1vdXNlbGVhdmU6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGUgZXZlbnQgaXMgcmFpc2VkIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHNlcmllcyBlbGVtZW50LlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Ki9cblx0QE91dHB1dCgpIG9uQ2xpY2s6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGUgZXZlbnQgaXMgcmFpc2VkIHdoZW4gdGhlIHVzZXIgbW92ZXMgdGhlIGN1cnNvciBvdXQgb2YgYSBzZXJpZXMgZWxlbWVudC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvbk1vdXNlb3V0OiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhlIGV2ZW50IGlzIHJhaXNlZCB3aGVuIHRoZSB1c2VyIG1vdmVzIHRoZSBjdXJzb3IgYWJvdmUgYSBzZXJpZXMgZWxlbWVudC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvbk1vdXNlb3ZlcjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoZSBldmVudCBpcyByYWlzZWQgYWZ0ZXIgdGhlIGNoYXJ0J3MgcmFuZ2Ugc2VsZWN0b3IgcG9zaXRpb24gY2hhbmdlcyBhbmQgYWZ0ZXIgdGhlIGNoYXJ0IGVuZHMgcmVuZGVyaW5nLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Ki9cblx0QE91dHB1dCgpIG9uUmFuZ2VTZWxlY3Rpb25DaGFuZ2VkOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhlIGV2ZW50IGlzIHJhaXNlZCB3aGVuIHRoZSBjaGFydCdzIHJhbmdlIHNlbGVjdG9yIHBvc2l0aW9uIGNoYW5nZXMgYW5kIGJlZm9yZSB0aGUgY2hhcnQgc3RhcnRzIHJlbmRlcmluZy5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvblJhbmdlU2VsZWN0aW9uQ2hhbmdpbmc6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGUgZXZlbnQgaXMgcmFpc2VkIHdoZW4gdGhlIGNoYXJ0IGJlZ2lucyByZW5kZXJpbmcuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHQqL1xuXHRAT3V0cHV0KCkgb25SZWZyZXNoQmVnaW46IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGUgZXZlbnQgaXMgcmFpc2VkIHdoZW4gdGhlIGNoYXJ0IGZpbmlzaGVzIHJlbmRlcmluZy5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvblJlZnJlc2hFbmQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGUgZXZlbnQgaXMgcmFpc2VkIHdoZW4gYSBzZXJpZSBpcyB0b2dnbGVkIGJ5IGEgdXNlciBjbGljayBpbiB0aGUgY2hhcnQncyBsZWdlbmQgb3IgdGhyb3VnaCBhbiBBUEkgY2FsbC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvblRvZ2dsZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIEFkZHMgYSBuZXcgY29sb3Igc2hlbWUuIElmIGEgc2NoZW1lIHdpdGggdGhlIHNhbWUgbmFtZSBhbHJlYWR5IGV4aXN0cywgdGhlIG1ldGhvZCB3aWxsIHVwZGF0ZSBpdHMgY29sb3JzLiBcblx0KiBAcGFyYW0ge3N0cmluZ30gc2NoZW1lTmFtZS4gVGhlIG5hbWUgb2YgdGhlIGN1c3RvbSBjb2xvciBzY2hlbWUuXG5cdCogQHBhcmFtIHthbnlbXX0gY29sb3JzQXJyYXkuIEFuIGFycmF5IG9mIGNvbG9yIHZhbHVlcy5cblx0Ki9cbiAgICBwdWJsaWMgYWRkQ29sb3JTY2hlbWUoc2NoZW1lTmFtZTogc3RyaW5nLCBjb2xvcnNBcnJheTogYW55W10pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYWRkQ29sb3JTY2hlbWUoc2NoZW1lTmFtZSwgY29sb3JzQXJyYXkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmFkZENvbG9yU2NoZW1lKHNjaGVtZU5hbWUsIGNvbG9yc0FycmF5KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0aGUgY29sb3JzIG9mIGEgY29sb3Igc2NoZW1lIGJ5IG5hbWUuIElmIHRoZSBzY2hlbWUgZG9lc24ndCBleGlzdCB0aGUgbWV0aG9kIHJldHVybnMgdW5kZWZpbmVkLiBcblx0KiBAcGFyYW0ge3N0cmluZ30gc2NoZW1lTmFtZS4gVGhlIG5hbWUgb2YgdGhlIGNvbG9yIHNjaGVtZS5cblx0KiBAcmV0dXJucyB7YW55W119XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRDb2xvclNjaGVtZShzY2hlbWVOYW1lKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldENvbG9yU2NoZW1lKHNjaGVtZU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gR2V0cyB0aGUgcmVuZGVyZWQgY29vcmRpbmF0ZXMgb2YgYSBkYXRhIHBvaW50IGVsZW1lbnQuIFxuXHQqIEBwYXJhbSB7bnVtYmVyfSBncm91cEluZGV4LiBTZXJpZXMgZ3JvdXAgaW5kZXguXG5cdCogQHBhcmFtIHtudW1iZXJ9IHNlcmllSW5kZXguIFNlcmllcyBpbmRleC5cblx0KiBAcGFyYW0ge251bWJlcn0gaXRlbUluZGV4LiBJdGVtIChkYXRhIHBvaW50KSBpbmRleC5cblx0KiBAcmV0dXJucyB7eyB4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGNlbnRlcjogbnVtYmVyLCBjZW50ZXJPZmZzZXQ6IG51bWJlciwgaW5uZXJSYWRpdXM6IG51bWJlciwgb3V0ZXJSYWRpdXM6IG51bWJlciwgc2VsZWN0ZWRSYWRpdXNDaGFuZ2U6IG51bWJlciwgZnJvbUFuZ2xlOiBudW1iZXIsIHRvQW5nbGU6IG51bWJlciwgcmFkaXVzOiBudW1iZXIgfX1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldEl0ZW1Db29yZChncm91cEluZGV4LCBzZXJpZUluZGV4LCBpdGVtSW5kZXgpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0SXRlbUNvb3JkKGdyb3VwSW5kZXgsIHNlcmllSW5kZXgsIGl0ZW1JbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBHZXRzIHRoZSBudW1iZXIgb2YgcmVuZGVyZWQgaXRlbXMgaW4gYSBzcGVjaWZpYyBzZXJpZS4gXG5cdCogQHBhcmFtIHtudW1iZXJ9IGdyb3VwSW5kZXguIFNlcmllcyBncm91cCBpbmRleC5cblx0KiBAcGFyYW0ge251bWJlcn0gc2VyaWVJbmRleC4gU2VyaWVzIGluZGV4LlxuXHQqIEByZXR1cm5zIHtudW1iZXJ9XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRJdGVtc0NvdW50KGdyb3VwSW5kZXgsIHNlcmllSW5kZXgpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0SXRlbXNDb3VudChncm91cEluZGV4LCBzZXJpZUluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEdldHMgdGhlIHJlbmRlcmVkIGNvb3JkaW5hdGVzIGFuZCB2YWx1ZXMgb2YgdGhlIHZhbHVlQXhpcyBsYWJlbHMuIFxuXHQqIEBwYXJhbSB7bnVtYmVyfSBncm91cEluZGV4LiBTZXJpZXMgZ3JvdXAgaW5kZXguXG5cdCogQHJldHVybnMge2FueX1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldFZhbHVlQXhpc0xhYmVscyhncm91cEluZGV4KTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldFZhbHVlQXhpc0xhYmVscyhncm91cEluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEdldHMgdGhlIHJlbmRlcmVkIHJlY3RhbmdsZSBjb29yZGluYXRlcyBvZiB0aGUgdmFsdWVBeGlzIG9mIHNwZWNpZmljIHNlcmllIGdyb3VwLiBcblx0KiBAcGFyYW0ge251bWJlcn0gZ3JvdXBJbmRleC4gU2VyaWVzIGdyb3VwIGluZGV4LlxuXHQqIEByZXR1cm5zIHtET01SZWN0fVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0VmFsdWVBeGlzUmVjdChncm91cEluZGV4KTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldFZhbHVlQXhpc1JlY3QoZ3JvdXBJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBHZXRzIHRoZSB2YWx1ZUF4aXMgKHZlcnRpY2FsIGF4aXMpJ3MgdmFsdWUuIFxuXHQqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXQuIFZlcnRpY2FsIG9mZnNldC5cblx0KiBAcGFyYW0ge251bWJlcn0gZ3JvdXBJbmRleC4gU2VyaWVzIGdyb3VwIGluZGV4LlxuXHQqIEByZXR1cm5zIHthbnl9XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRWYWx1ZUF4aXNWYWx1ZShvZmZzZXQsIGdyb3VwSW5kZXgpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0VmFsdWVBeGlzVmFsdWUob2Zmc2V0LCBncm91cEluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEdldHMgdGhlIHJlbmRlcmVkIGNvb3JkaW5hdGVzIGFuZCB2YWx1ZXMgb2YgdGhlIHhBeGlzIGxhYmVscy4gXG5cdCogQHBhcmFtIHtudW1iZXJ9IGdyb3VwSW5kZXguIFNlcmllcyBncm91cCBpbmRleC5cblx0KiBAcmV0dXJucyB7YW55fVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0WEF4aXNMYWJlbHMoZ3JvdXBJbmRleCk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRYQXhpc0xhYmVscyhncm91cEluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEdldHMgdGhlIHJlbmRlcmVkIHJlY3RhbmdsZSBjb29yZGluYXRlcyBvZiB0aGUgeC1BeGlzIG9mIHNwZWNpZmljIHNlcmllIGdyb3VwLiBcblx0KiBAcGFyYW0ge251bWJlcn0gZ3JvdXBJbmRleC4gU2VyaWVzIGdyb3VwIGluZGV4LlxuXHQqIEByZXR1cm5zIHtET01SZWN0fVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0WEF4aXNSZWN0KGdyb3VwSW5kZXgpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0WEF4aXNSZWN0KGdyb3VwSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gR2V0cyB0aGUgeEF4aXMgKGhvcml6b250YWwgYXhpcykncyB2YWx1ZS4gXG5cdCogQHBhcmFtIHtudW1iZXJ9IG9mZnNldC4gSG9yaXpvbnRhbCBvZmZzZXQuXG5cdCogQHBhcmFtIHtudW1iZXJ9IGdyb3VwSW5kZXguIFNlcmllcyBncm91cCBpbmRleC5cblx0KiBAcmV0dXJucyB7YW55fVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0WEF4aXNWYWx1ZShvZmZzZXQsIGdyb3VwSW5kZXgpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0WEF4aXNWYWx1ZShvZmZzZXQsIGdyb3VwSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSGlkZXMgYSBjaGFydCBzZXJpZS4gVGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoaXMgZnVuY3Rpb24gaXMgc2FtZSBhcyB0aGUgdXNlciB1bmNoZWNraW5nIHRoZSBsZWdlbmQgYm94IG9mIGEgY2hhcnQgc2VyaWUuIFxuXHQqIEBwYXJhbSB7bnVtYmVyfSBncm91cEluZGV4LiBTZXJpZXMgZ3JvdXAgaW5kZXguXG5cdCogQHBhcmFtIHtudW1iZXJ9IHNlcmllSW5kZXguIFNlcmllcyBpbmRleC5cblx0KiBAcGFyYW0ge251bWJlcn0gaXRlbUluZGV4Py4gSXRlbSAoZGF0YSBwb2ludCkgaW5kZXguIEFwcGxpY2FibGUgdG8gcGllIGFuZCBkb251dCBzZXJpZXMgb25seS5cblx0Ki9cbiAgICBwdWJsaWMgaGlkZVNlcmllKGdyb3VwSW5kZXg6IG51bWJlciwgc2VyaWVJbmRleDogbnVtYmVyLCBpdGVtSW5kZXg/OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaGlkZVNlcmllKGdyb3VwSW5kZXgsIHNlcmllSW5kZXgsIGl0ZW1JbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaGlkZVNlcmllKGdyb3VwSW5kZXgsIHNlcmllSW5kZXgsIGl0ZW1JbmRleCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEhpZGVzIHRoZSBjdXJyZW50IHRvb2x0aXAgaWYgdmlzaWJsZS4gXG5cdCogQHBhcmFtIHtudW1iZXJ9IGhpZGVEZWxheT8uIEhpZGUgZGVsYXkuXG5cdCovXG4gICAgcHVibGljIGhpZGVUb29sVGlwKGhpZGVEZWxheT86IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5oaWRlVG9vbFRpcChoaWRlRGVsYXkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmhpZGVUb29sVGlwKGhpZGVEZWxheSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFByaW50cyB0aGUgY2hhcnQuIFxuXHQqL1xuICAgIHB1YmxpYyBwcmludCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucHJpbnQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5wcmludCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZWZyZXNoZXMgdGhlIGNvbnRlbnQgb2YgdGhlIGNoYXJ0IGVsZW1lbnQgYWZ0ZXIgYSBwcm9wZXJ0eSBvciBkYXRhIHVwZGF0ZS4gXG5cdCovXG4gICAgcHVibGljIHJlZnJlc2goKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlZnJlc2goKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZWZyZXNoKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJlbW92ZXMgYW4gZXhpc3RpbmcgY29sb3Igc2NoZW1lLiBJZiB0aGUgc2NoZW1lIGRvZXMgbm90IGV4aXN0LCB0aGUgbWV0aG9kIGhhcyBubyBlZmZlY3QuIFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBzY2hlbWVOYW1lLiBUaGUgbmFtZSBvZiB0aGUgY3VzdG9tIGNvbG9yIHNjaGVtZS5cblx0Ki9cbiAgICBwdWJsaWMgcmVtb3ZlQ29sb3JTY2hlbWUoc2NoZW1lTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlbW92ZUNvbG9yU2NoZW1lKHNjaGVtZU5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlbW92ZUNvbG9yU2NoZW1lKHNjaGVtZU5hbWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFeHBvcnRzIHRoZSBjaGFydCdzIGNvbnRlbnQgYXMgSlBFRyBpbWFnZS4gXG5cdCogQHBhcmFtIHtzdHJpbmd9IGZpbGVOYW1lPy4gRmlsZSBuYW1lLlxuXHQqL1xuICAgIHB1YmxpYyBzYXZlQXNKUEVHKGZpbGVOYW1lPzogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNhdmVBc0pQRUcoZmlsZU5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNhdmVBc0pQRUcoZmlsZU5hbWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFeHBvcnRzIHRoZSBjaGFydCdzIGNvbnRlbnQgYXMgUE5HIGltYWdlLiBcblx0KiBAcGFyYW0ge3N0cmluZ30gZmlsZU5hbWU/LiBGaWxlIG5hbWUuXG5cdCovXG4gICAgcHVibGljIHNhdmVBc1BORyhmaWxlTmFtZT86IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zYXZlQXNQTkcoZmlsZU5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNhdmVBc1BORyhmaWxlTmFtZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEV4cG9ydHMgdGhlIGNoYXJ0J3MgY29udGVudCBhcyBQREYuIFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTmFtZT8uIEZpbGUgbmFtZS5cblx0KiBAcGFyYW0ge3N0cmluZ30gcGFnZU9yaWVudGF0aW9uPy4gUERGIHBhZ2Ugb3JpZW50YXRpb24uIDxzdHJvbmc+UG9zc2libGUgdmFsdWVzOjwvc3Ryb25nPiAncG9ydHJhaXQnIChkZWZhdWx0KSwgJ2xhbmRzY2FwZScuXG5cdCovXG4gICAgcHVibGljIHNhdmVBc1BERihmaWxlTmFtZT86IHN0cmluZywgcGFnZU9yaWVudGF0aW9uPzogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNhdmVBc1BERihmaWxlTmFtZSwgcGFnZU9yaWVudGF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zYXZlQXNQREYoZmlsZU5hbWUsIHBhZ2VPcmllbnRhdGlvbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNob3dzIGEgaGlkZGVuIGNoYXJ0IHNlcmllLiBUaGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhpcyBmdW5jdGlvbiBpcyBzYW1lIGFzIHRoZSB1c2VyIGNoZWNraW5nIHRoZSBsZWdlbmQgYm94IG9mIGEgY2hhcnQgc2VyaWUuIFxuXHQqIEBwYXJhbSB7bnVtYmVyfSBncm91cEluZGV4LiBTZXJpZXMgZ3JvdXAgaW5kZXguXG5cdCogQHBhcmFtIHtudW1iZXJ9IHNlcmllSW5kZXguIFNlcmllcyBpbmRleC5cblx0KiBAcGFyYW0ge251bWJlcn0gaXRlbUluZGV4Py4gSXRlbSAoZGF0YSBwb2ludCkgaW5kZXguIEFwcGxpY2FibGUgdG8gcGllIGFuZCBkb251dCBzZXJpZXMgb25seS5cblx0Ki9cbiAgICBwdWJsaWMgc2hvd1NlcmllKGdyb3VwSW5kZXg6IG51bWJlciwgc2VyaWVJbmRleDogbnVtYmVyLCBpdGVtSW5kZXg/OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2hvd1NlcmllKGdyb3VwSW5kZXgsIHNlcmllSW5kZXgsIGl0ZW1JbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2hvd1NlcmllKGdyb3VwSW5kZXgsIHNlcmllSW5kZXgsIGl0ZW1JbmRleCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNob3dzIGEgdGhlIHRvb2x0aXAgZm9yIGEgcGFydGljdWxhciBkYXRhIHBvaW50LiBcblx0KiBAcGFyYW0ge251bWJlcn0gZ3JvdXBJbmRleC4gU2VyaWVzIGdyb3VwIGluZGV4LlxuXHQqIEBwYXJhbSB7bnVtYmVyfSBzZXJpZUluZGV4LiBTZXJpZXMgaW5kZXguXG5cdCogQHBhcmFtIHtudW1iZXJ9IGl0ZW1JbmRleC4gSXRlbSAoZGF0YSBwb2ludCkgaW5kZXguXG5cdCogQHBhcmFtIHtudW1iZXJ9IHNob3dEZWxheT8uIFNob3cgZGVsYXkuXG5cdCogQHBhcmFtIHtudW1iZXJ9IGhpZGVEZWxheT8uIEhpZGUgZGVsYXkuXG5cdCovXG4gICAgcHVibGljIHNob3dUb29sVGlwKGdyb3VwSW5kZXg6IG51bWJlciwgc2VyaWVJbmRleDogbnVtYmVyLCBpdGVtSW5kZXg6IG51bWJlciwgc2hvd0RlbGF5PzogbnVtYmVyLCBoaWRlRGVsYXk/OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2hvd1Rvb2xUaXAoZ3JvdXBJbmRleCwgc2VyaWVJbmRleCwgaXRlbUluZGV4LCBzaG93RGVsYXksIGhpZGVEZWxheSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2hvd1Rvb2xUaXAoZ3JvdXBJbmRleCwgc2VyaWVJbmRleCwgaXRlbUluZGV4LCBzaG93RGVsYXksIGhpZGVEZWxheSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFVwZGF0ZXMgdGhlIHZhbHVlcyBvZiB0aGUgY2hhcnQgc2VyaWVzIHdpdGhvdXQgZnVsbCByZWZyZXNoIG9mIHRoZSBlbnRpcmUgY2hhcnQuIFRoZSBtZXRob2Qgc2hvdWxkIGJlIHVzZWQgZm9yIGFuaW1hdGlvbiBvZiBmcmVxdWVudGx5IGNoYW5naW5nIHZhbHVlcy4gXG5cdCovXG4gICAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQudXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQudXBkYXRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cdGdldCBpc1JlbmRlcmVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCA6IGZhbHNlO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXG4gICAgICB0aGF0Lm9uQ3JlYXRlLmVtaXQodGhhdC5uYXRpdmVFbGVtZW50KTtcblxuXHRcdFNtYXJ0LlJlbmRlcigpO1xuXG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NtYXJ0LWFuZ3VsYXInKTtcblxuXHRcdHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4geyB0aGF0Lm9uUmVhZHkuZW1pdCh0aGF0Lm5hdGl2ZUVsZW1lbnQpOyB9KTtcblx0XHR0aGlzLmxpc3RlbigpO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy51bmxpc3RlbigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXHRcdGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQgJiYgdGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcblx0XHRcdGZvciAoY29uc3QgcHJvcE5hbWUgaW4gY2hhbmdlcykge1xuXHRcdFx0XHRpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcblx0XHRcdFx0XHR0aGlzLm5hdGl2ZUVsZW1lbnRbcHJvcE5hbWVdID0gY2hhbmdlc1twcm9wTmFtZV0uY3VycmVudFZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBZGQgZXZlbnQgbGlzdGVuZXJzLiAqL1xuXHRwcml2YXRlIGxpc3RlbigpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydhbm5vdGF0aW9uQ2xpY2tIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Bbm5vdGF0aW9uQ2xpY2suZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYW5ub3RhdGlvbkNsaWNrJywgdGhhdC5ldmVudEhhbmRsZXJzWydhbm5vdGF0aW9uQ2xpY2tIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydhbm5vdGF0aW9uTW91c2VlbnRlckhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkFubm90YXRpb25Nb3VzZWVudGVyLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Fubm90YXRpb25Nb3VzZWVudGVyJywgdGhhdC5ldmVudEhhbmRsZXJzWydhbm5vdGF0aW9uTW91c2VlbnRlckhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2Fubm90YXRpb25Nb3VzZWxlYXZlSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQW5ub3RhdGlvbk1vdXNlbGVhdmUuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYW5ub3RhdGlvbk1vdXNlbGVhdmUnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2Fubm90YXRpb25Nb3VzZWxlYXZlSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY2xpY2tIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25DbGljay5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY2xpY2tIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydtb3VzZW91dEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbk1vdXNlb3V0LmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgdGhhdC5ldmVudEhhbmRsZXJzWydtb3VzZW91dEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ21vdXNlb3ZlckhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbk1vdXNlb3Zlci5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ21vdXNlb3ZlckhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3JhbmdlU2VsZWN0aW9uQ2hhbmdlZEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblJhbmdlU2VsZWN0aW9uQ2hhbmdlZC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdyYW5nZVNlbGVjdGlvbkNoYW5nZWQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3JhbmdlU2VsZWN0aW9uQ2hhbmdlZEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3JhbmdlU2VsZWN0aW9uQ2hhbmdpbmdIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25SYW5nZVNlbGVjdGlvbkNoYW5naW5nLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3JhbmdlU2VsZWN0aW9uQ2hhbmdpbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3JhbmdlU2VsZWN0aW9uQ2hhbmdpbmdIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydyZWZyZXNoQmVnaW5IYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25SZWZyZXNoQmVnaW4uZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncmVmcmVzaEJlZ2luJywgdGhhdC5ldmVudEhhbmRsZXJzWydyZWZyZXNoQmVnaW5IYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydyZWZyZXNoRW5kSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uUmVmcmVzaEVuZC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdyZWZyZXNoRW5kJywgdGhhdC5ldmVudEhhbmRsZXJzWydyZWZyZXNoRW5kSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1sndG9nZ2xlSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uVG9nZ2xlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvZ2dsZScsIHRoYXQuZXZlbnRIYW5kbGVyc1sndG9nZ2xlSGFuZGxlciddKTtcblxuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZW1vdmUgZXZlbnQgbGlzdGVuZXJzLiAqL1xuXHRwcml2YXRlIHVubGlzdGVuKCk6IHZvaWQge1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydhbm5vdGF0aW9uQ2xpY2tIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdhbm5vdGF0aW9uQ2xpY2snLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2Fubm90YXRpb25DbGlja0hhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snYW5ub3RhdGlvbk1vdXNlZW50ZXJIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdhbm5vdGF0aW9uTW91c2VlbnRlcicsIHRoYXQuZXZlbnRIYW5kbGVyc1snYW5ub3RhdGlvbk1vdXNlZW50ZXJIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2Fubm90YXRpb25Nb3VzZWxlYXZlSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignYW5ub3RhdGlvbk1vdXNlbGVhdmUnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2Fubm90YXRpb25Nb3VzZWxlYXZlSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjbGlja0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhhdC5ldmVudEhhbmRsZXJzWydjbGlja0hhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snbW91c2VvdXRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snbW91c2VvdXRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ21vdXNlb3ZlckhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIHRoYXQuZXZlbnRIYW5kbGVyc1snbW91c2VvdmVySGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydyYW5nZVNlbGVjdGlvbkNoYW5nZWRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdyYW5nZVNlbGVjdGlvbkNoYW5nZWQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3JhbmdlU2VsZWN0aW9uQ2hhbmdlZEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1sncmFuZ2VTZWxlY3Rpb25DaGFuZ2luZ0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3JhbmdlU2VsZWN0aW9uQ2hhbmdpbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3JhbmdlU2VsZWN0aW9uQ2hhbmdpbmdIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3JlZnJlc2hCZWdpbkhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3JlZnJlc2hCZWdpbicsIHRoYXQuZXZlbnRIYW5kbGVyc1sncmVmcmVzaEJlZ2luSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydyZWZyZXNoRW5kSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVmcmVzaEVuZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1sncmVmcmVzaEVuZEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1sndG9nZ2xlSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG9nZ2xlJywgdGhhdC5ldmVudEhhbmRsZXJzWyd0b2dnbGVIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHR9XG59XG4iXX0=