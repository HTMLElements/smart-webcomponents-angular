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
            exportAs: 'smart-chart', selector: 'smart-chart, [smart-chart]'
        })
    ], ChartComponent);
    return ChartComponent;
}(BaseElement));
export { ChartComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQuY2hhcnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zbWFydC13ZWJjb21wb25lbnRzLWFuZ3VsYXIvY2hhcnQvIiwic291cmNlcyI6WyJzbWFydC5jaGFydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUosT0FBTyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVyRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFReEM7SUFBb0MsMENBQVc7SUFDOUMsd0JBQVksR0FBc0I7UUFBbEMsWUFDQyxrQkFBTSxHQUFHLENBQUMsU0FFVjtRQUVPLG1CQUFhLEdBQVUsRUFBRSxDQUFDO1FBdVlsQzs4Q0FDc0M7UUFDNUIsdUJBQWlCLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFNUU7OENBQ3NDO1FBQzVCLDRCQUFzQixHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRWpGOzhDQUNzQztRQUM1Qiw0QkFBc0IsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVqRjs4Q0FDc0M7UUFDNUIsYUFBTyxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRWxFOzhDQUNzQztRQUM1QixnQkFBVSxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXJFOzhDQUNzQztRQUM1QixpQkFBVyxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXRFOzhDQUNzQztRQUM1Qiw2QkFBdUIsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVsRjs4Q0FDc0M7UUFDNUIsOEJBQXdCLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFbkY7OENBQ3ND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YyxDQW81QjFCO0lBQUQscUJBQUM7Q0FBQSxBQXA1QkQsQ0FBb0MsV0FBVyxHQW81QjlDO1NBcDVCWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhcnQgfSBmcm9tICcuLy4uL2luZGV4JztcbmltcG9ydCB7IEFuaW1hdGlvbiwgQ2hhcnRDb2xvclNjaGVtZSwgQ2hhcnRSZW5kZXJFbmdpbmUsIEhvcml6b250YWxBbGlnbm1lbnQsIENoYXJ0Um90YXRpb25Qb2ludCwgVmVydGljYWxBbGlnbm1lbnQsIENoYXJ0QW5ub3RhdGlvblR5cGUsIENoYXJ0VW5zZWxlY3RNb2RlLCBPcmllbnRhdGlvbiwgQ2hhcnRTZXJpZXNHcm91cFNlcmllRW1wdHlQb2ludHNEaXNwbGF5LCBDaGFydFN5bWJvbFR5cGUsIENoYXJ0VHlwZSwgQXhpc1Bvc2l0aW9uLCBDaGFydEJhc2VVbml0LCBDaGFydFhBeGlzVHlwZSwgQ2hhcnRMb2NhbGl6YXRpb24sIFBhZGRpbmcsIENoYXJ0U2VyaWVzR3JvdXAsIENoYXJ0QW5ub3RhdGlvbiwgT2Zmc2V0LCBDaGFydEFubm90YXRpb25UZXh0LCBDaGFydEJhbmQsIENoYXJ0Rm9ybWF0U2V0dGluZ3MsIENoYXJ0U2VyaWVzR3JvdXBTZXJpZSwgQ2hhcnRMYWJlbHMsIENoYXJ0VmFsdWVBeGlzLCBDaGFydExpbmVzLCBDaGFydExpbmUsIENoYXJ0VGl0bGUsIENoYXJ0WEF4aXMsIENoYXJ0UmFuZ2VTZWxlY3RvciwgRWxlbWVudFJlbmRlck1vZGV9IGZyb20gJy4vLi4vaW5kZXgnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBEaXJlY3RpdmUsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBTaW1wbGVDaGFuZ2VzLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFzZUVsZW1lbnQsIFNtYXJ0IH0gZnJvbSAnLi9zbWFydC5lbGVtZW50JztcbmV4cG9ydCB7IEFuaW1hdGlvbiwgQ2hhcnRDb2xvclNjaGVtZSwgQ2hhcnRSZW5kZXJFbmdpbmUsIEhvcml6b250YWxBbGlnbm1lbnQsIENoYXJ0Um90YXRpb25Qb2ludCwgVmVydGljYWxBbGlnbm1lbnQsIENoYXJ0QW5ub3RhdGlvblR5cGUsIENoYXJ0VW5zZWxlY3RNb2RlLCBPcmllbnRhdGlvbiwgQ2hhcnRTZXJpZXNHcm91cFNlcmllRW1wdHlQb2ludHNEaXNwbGF5LCBDaGFydFN5bWJvbFR5cGUsIENoYXJ0VHlwZSwgQXhpc1Bvc2l0aW9uLCBDaGFydEJhc2VVbml0LCBDaGFydFhBeGlzVHlwZSwgQ2hhcnRMb2NhbGl6YXRpb24sIFBhZGRpbmcsIENoYXJ0U2VyaWVzR3JvdXAsIENoYXJ0QW5ub3RhdGlvbiwgT2Zmc2V0LCBDaGFydEFubm90YXRpb25UZXh0LCBDaGFydEJhbmQsIENoYXJ0Rm9ybWF0U2V0dGluZ3MsIENoYXJ0U2VyaWVzR3JvdXBTZXJpZSwgQ2hhcnRMYWJlbHMsIENoYXJ0VmFsdWVBeGlzLCBDaGFydExpbmVzLCBDaGFydExpbmUsIENoYXJ0VGl0bGUsIENoYXJ0WEF4aXMsIENoYXJ0UmFuZ2VTZWxlY3RvciwgRWxlbWVudFJlbmRlck1vZGV9IGZyb20gJy4vLi4vaW5kZXgnO1xuZXhwb3J0IHsgU21hcnQgfSBmcm9tICcuL3NtYXJ0LmVsZW1lbnQnO1xuZXhwb3J0IHsgQ2hhcnQgfSBmcm9tICcuLy4uL2luZGV4JztcblxuXG5ARGlyZWN0aXZlKHtcblx0ZXhwb3J0QXM6ICdzbWFydC1jaGFydCcsXHRzZWxlY3RvcjogJ3NtYXJ0LWNoYXJ0LCBbc21hcnQtY2hhcnRdJ1xufSlcblxuZXhwb3J0IGNsYXNzIENoYXJ0Q29tcG9uZW50IGV4dGVuZHMgQmFzZUVsZW1lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcblx0Y29uc3RydWN0b3IocmVmOiBFbGVtZW50UmVmPENoYXJ0Pikge1xuXHRcdHN1cGVyKHJlZik7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID0gcmVmLm5hdGl2ZUVsZW1lbnQgYXMgQ2hhcnQ7XG5cdH1cblxuXHRwcml2YXRlIGV2ZW50SGFuZGxlcnM6IGFueVtdID0gW107XG5cblx0cHVibGljIG5hdGl2ZUVsZW1lbnQ6IENoYXJ0O1xuXHQvKiogQGRlc2NyaXB0aW9uIENyZWF0ZXMgdGhlIGNvbXBvbmVudCBvbiBkZW1hbmQuXG5cdCAqIEBwYXJhbSBwcm9wZXJ0aWVzIEFuIG9wdGlvbmFsIG9iamVjdCBvZiBwcm9wZXJ0aWVzLCB3aGljaCB3aWxsIGJlIGFkZGVkIHRvIHRoZSB0ZW1wbGF0ZSBiaW5kZWQgb25lcy5cblx0ICovXG5cdHB1YmxpYyBjcmVhdGVDb21wb25lbnQocHJvcGVydGllcyA9IHt9KTogYW55IHtcbiAgICBcdHRoaXMubmF0aXZlRWxlbWVudCA9IDxDaGFydD5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzbWFydC1jaGFydCcpO1xuXHRcdGZvciAobGV0IHByb3BlcnR5TmFtZSBpbiBwcm9wZXJ0aWVzKSB7IFxuIFx0XHRcdHRoaXMubmF0aXZlRWxlbWVudFtwcm9wZXJ0eU5hbWVdID0gcHJvcGVydGllc1twcm9wZXJ0eU5hbWVdO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50O1xuXHR9XG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSBhbmltYXRpb24gbW9kZS4gQW5pbWF0aW9uIGlzIGRpc2FibGVkIHdoZW4gdGhlIHByb3BlcnR5IGlzIHNldCB0byAnbm9uZScuICovXG5cdEBJbnB1dCgpXG5cdGdldCBhbmltYXRpb24oKTogQW5pbWF0aW9uIHwgc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmFuaW1hdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYW5pbWF0aW9uKHZhbHVlOiBBbmltYXRpb24gfCBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYW5pbWF0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIGFuaW1hdGlvbiBkdXJhdGlvbiBpbiBtaWxsaXNlY29uZHMuIFRoZSB2YWx1ZSBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNTAwMC4gSWYgaXQgaXMgb3V0c2lkZSBvZiB0aGlzIHJhbmdlIGpxeENoYXJ0IHdpbGwgcmVzZXQgaXQgdG8gdGhlIGRlZmF1bHQgdmFsdWUuICovXG5cdEBJbnB1dCgpXG5cdGdldCBhbmltYXRpb25EdXJhdGlvbigpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYW5pbWF0aW9uRHVyYXRpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGFuaW1hdGlvbkR1cmF0aW9uKHZhbHVlOiBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYW5pbWF0aW9uRHVyYXRpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyB0aGUgY2hhcnQncyBiYWNrZ3JvdW5kIGNvbG9yLiBGb3IgZXhhbXBsZTogJyNEREZGRTgnICovXG5cdEBJbnB1dCgpXG5cdGdldCBiYWNrZ3JvdW5kQ29sb3IoKTogc3RyaW5nIHwgbnVsbCB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5iYWNrZ3JvdW5kQ29sb3IgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGJhY2tncm91bmRDb2xvcih2YWx1ZTogc3RyaW5nIHwgbnVsbCkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5iYWNrZ3JvdW5kQ29sb3IgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyB0aGUgY2hhcnQncyBiYWNrZ3JvdW5kIGltYWdlLiBGb3IgZXhhbXBsZTogJ2h0dHBzOi8vd3d3Lmh0bWxlbGVtZW50cy5jb20vZGVtb3MvaW1hZ2VzL2Nhcm91c2VsLWxhcmdlLTEuanBnJyAqL1xuXHRASW5wdXQoKVxuXHRnZXQgYmFja2dyb3VuZEltYWdlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5iYWNrZ3JvdW5kSW1hZ2UgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGJhY2tncm91bmRJbWFnZSh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmJhY2tncm91bmRJbWFnZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBjaGFydCdzIGJvcmRlciBjb2xvci4gRm9yIGV4YW1wbGU6ICcjMDk4NzAwJyAqL1xuXHRASW5wdXQoKVxuXHRnZXQgYm9yZGVyTGluZUNvbG9yKCk6IHN0cmluZyB8IG51bGwge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYm9yZGVyTGluZUNvbG9yIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBib3JkZXJMaW5lQ29sb3IodmFsdWU6IHN0cmluZyB8IG51bGwpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYm9yZGVyTGluZUNvbG9yID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgdGhlIGNoYXJ0J3MgYm9yZGVyIGxpbmUgd2lkdGguICovXG5cdEBJbnB1dCgpXG5cdGdldCBib3JkZXJMaW5lV2lkdGgoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmJvcmRlckxpbmVXaWR0aCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYm9yZGVyTGluZVdpZHRoKHZhbHVlOiBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYm9yZGVyTGluZVdpZHRoID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgdGhlIGNhcHRpb24gKHRpdGxlKSBvZiB0aGUgY2hhcnQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBjYXB0aW9uKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jYXB0aW9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjYXB0aW9uKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY2FwdGlvbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHdoZXRoZXIgdG8gY2xpcCBwbG90dGVkIGVsZW1lbnRzIHRoYXQgb3ZlcmZsb3cgdGhlIGF4aXMgYm91bmRhcmllcy4gKi9cblx0QElucHV0KClcblx0Z2V0IGNsaXAoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jbGlwIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjbGlwKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNsaXAgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyB0aGUgY2hhcnQncyBjb2xvciBwYWxsZXRlLiBqcXhDaGFydCBzdXBwcG9ydHMgMzIgY29sb3Igc2NoZW1lcyBmcm9tICdzY2hlbWUwMScgdG8gJ3NjaGVtZTMyJy4gKi9cblx0QElucHV0KClcblx0Z2V0IGNvbG9yU2NoZW1lKCk6IENoYXJ0Q29sb3JTY2hlbWUgfCBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sb3JTY2hlbWUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGNvbG9yU2NoZW1lKHZhbHVlOiBDaGFydENvbG9yU2NoZW1lIHwgc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbG9yU2NoZW1lID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEVuYWJsZXMgb3IgZGlzYWJsZXMgb3ZlcmxhcHBpbmcgb2YgdGhlIGNvbHVtbiBzZXJpZXMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBjb2x1bW5TZXJpZXNPdmVybGFwKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sdW1uU2VyaWVzT3ZlcmxhcCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgY29sdW1uU2VyaWVzT3ZlcmxhcCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb2x1bW5TZXJpZXNPdmVybGFwID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEdldHMgb3Igc2V0cyB0aGUgY29sb3Igb2YgdGhlIGNyb3NzaGFpcnMgbGluZXMuIFRoZSAnZW5hYmxlQ3Jvc3NoYWlycycgcHJvcGVydHkgc2hvdWxkIGJlICd0cnVlJy4gKi9cblx0QElucHV0KClcblx0Z2V0IGNyb3NzaGFpcnNDb2xvcigpOiBzdHJpbmcgfCBudWxsIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNyb3NzaGFpcnNDb2xvciA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgY3Jvc3NoYWlyc0NvbG9yKHZhbHVlOiBzdHJpbmcgfCBudWxsKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNyb3NzaGFpcnNDb2xvciA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBHZXRzIG9yIHNldHMgdGhlIGRhc2ggc3R5bGUgb2YgdGhlIGNyb3NzaGFpcnMgbGluZXMuIFRoZSBzdHlsZSBpcyBhIHNlcmllcyBvZiBudW1iZXJzIGluZGljYXRpbmcgbGluZSBsZW5ndGggZm9sbG93ZWQgYnkgc3BhY2UgbGVuZ3RoLiBUaGUgJ2VuYWJsZUNyb3NzaGFpcnMnIHByb3BlcnR5IHNob3VsZCBiZSAndHJ1ZScuIEZvciBleGFtcGxlOiAnMywzJyAqL1xuXHRASW5wdXQoKVxuXHRnZXQgY3Jvc3NoYWlyc0Rhc2hTdHlsZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY3Jvc3NoYWlyc0Rhc2hTdHlsZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgY3Jvc3NoYWlyc0Rhc2hTdHlsZSh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNyb3NzaGFpcnNEYXNoU3R5bGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gR2V0cyBvciBzZXRzIHRoZSB3aWR0aCBvZiB0aGUgY3Jvc3NoYWlycyBsaW5lcy4gVGhlICdlbmFibGVDcm9zc2hhaXJzJyBwcm9wZXJ0eSBzaG91bGQgYmUgJ3RydWUnICovXG5cdEBJbnB1dCgpXG5cdGdldCBjcm9zc2hhaXJzTGluZVdpZHRoKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jcm9zc2hhaXJzTGluZVdpZHRoIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjcm9zc2hhaXJzTGluZVdpZHRoKHZhbHVlOiBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY3Jvc3NoYWlyc0xpbmVXaWR0aCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBjaGFydCdzIGRhdGEgc291cmNlLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGF0YVNvdXJjZSgpOiBhbnlbXSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kYXRhU291cmNlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkYXRhU291cmNlKHZhbHVlOiBhbnlbXSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kYXRhU291cmNlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgdGhlIGRlc2NyaXB0aW9uIHRleHQgb2YgdGhlIGNoYXJ0LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGVzY3JpcHRpb24oKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRlc2NyaXB0aW9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkZXNjcmlwdGlvbih2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRlc2NyaXB0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEVuYWJsZXMgb3IgZGlzYWJsZXMgdGhlIGNoYXJ0LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlZCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZWQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgZHJhd2luZyBmdW5jdGlvbiBvZiBqcXhDaGFydC4gV2hlbiB0aGUgcHJvcGVydHkgaXMgc2V0LCB5b3UgY2FuIG92ZXJyaWRlIHRoZSBqcXhDaGFydCdzIGRyYXdpbmcuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkcmF3KCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kcmF3IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkcmF3KHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZHJhdyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBGdW5jdGlvbiBmb3IgY3VzdG9tIGRyYXdpbmcgYmVmb3JlIHRoZSBjYXB0aW9uIGFuZCBvdGhlciBjaGFydCBlbGVtZW50cy4gKi9cblx0QElucHV0KClcblx0Z2V0IGRyYXdCZWZvcmUoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRyYXdCZWZvcmUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRyYXdCZWZvcmUodmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kcmF3QmVmb3JlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgaWYgdGhlIGFuaW1hdGlvbiBvZiB0aGUgYXhlcyB0ZXh0IGlzIGVuYWJsZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBlbmFibGVBeGlzVGV4dEFuaW1hdGlvbigpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmVuYWJsZUF4aXNUZXh0QW5pbWF0aW9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBlbmFibGVBeGlzVGV4dEFuaW1hdGlvbih2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5lbmFibGVBeGlzVGV4dEFuaW1hdGlvbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFbmFibGVzIG9yIGRpc2FibGVzIHRoZSBjcm9zc2hhaXJzIGxpbmVzLiBUaGUgbGluZXMgYXJlIGRpc3BsYXllZCBpbiBsaW5lIGFuZCBhcmVhIHNlcmllcyB3aGVuIHlvdSBtb3ZlIG92ZXIgYSBkYXRhIHBvaW50LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZW5hYmxlQ3Jvc3NoYWlycygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmVuYWJsZUNyb3NzaGFpcnMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGVuYWJsZUNyb3NzaGFpcnModmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZW5hYmxlQ3Jvc3NoYWlycyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHdoZXRoZXIgdG8gZGlzcGxheSB0aGUgY2hhcnQgdXNpbmcgZ3JleXNjYWxlIGNvbG9ycy4gKi9cblx0QElucHV0KClcblx0Z2V0IGdyZXlTY2FsZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmdyZXlTY2FsZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZ3JleVNjYWxlKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmdyZXlTY2FsZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBsZWdlbmQncyBsYXlvdXQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBsZWdlbmRMYXlvdXQoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxlZ2VuZExheW91dCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbGVnZW5kTGF5b3V0KHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubGVnZW5kTGF5b3V0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgbG9jYWxlLiBVc2VkIGluIGNvbmp1bmN0aW9uIHdpdGggdGhlIHByb3BlcnR5IG1lc3NhZ2VzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbG9jYWxlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sb2NhbGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGxvY2FsZSh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxvY2FsZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBMb2NhbGl6YXRpb24gb2JqZWN0IGNvbnRhaW5pbmcgY3VsdHVyZS1zcGVjaWZpYyBwcm9wZXJ0aWVzIHJlcXVpcmVkIGZvciBmb3JtYXR0aW5nIGN1cnJlbmNpZXMsIG51bWJlcnMgYW5kIGRhdGVzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbG9jYWxpemF0aW9uKCk6IENoYXJ0TG9jYWxpemF0aW9uIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxvY2FsaXphdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbG9jYWxpemF0aW9uKHZhbHVlOiBDaGFydExvY2FsaXphdGlvbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sb2NhbGl6YXRpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIGFuIG9iamVjdCBzcGVjaWZ5aW5nIHN0cmluZ3MgdXNlZCBpbiB0aGUgd2lkZ2V0IHRoYXQgY2FuIGJlIGxvY2FsaXplZC4gVXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZSBwcm9wZXJ0eSBsb2NhbGUuICovXG5cdEBJbnB1dCgpXG5cdGdldCBtZXNzYWdlcygpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubWVzc2FnZXMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG1lc3NhZ2VzKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubWVzc2FnZXMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyB0aGUgbGVmdCwgdG9wLCByaWdodCBhbmQgYm90dG9tIHBhZGRpbmcgb2YgdGhlIENoYXJ0LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcGFkZGluZygpOiBQYWRkaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnBhZGRpbmcgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHBhZGRpbmcodmFsdWU6IFBhZGRpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucGFkZGluZyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSByZW5kZXJpbmcgZW5naW5lIHVzZWQgdG8gZGlzcGxheSB0aGUgY2hhcnQuIFdoZW4gdGhlIHByb3BlcnR5IGlzIHNldCB0byBhbiBlbXB0eSBzdHJpbmcsIGpxeENoYXJ0IHdpbGwgYXV0b21hdGljYWxseSBzZWxlY3QgYW4gb3B0aW1hbCByZW5kZXJpbmcgZW5naW5lIGRlcGVuZGluZyBvbiB0aGUgYnJvd3NlciBjYXBhYmlsaXRpZXMuICovXG5cdEBJbnB1dCgpXG5cdGdldCByZW5kZXJFbmdpbmUoKTogQ2hhcnRSZW5kZXJFbmdpbmUgfCBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmVuZGVyRW5naW5lIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCByZW5kZXJFbmdpbmUodmFsdWU6IENoYXJ0UmVuZGVyRW5naW5lIHwgc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlbmRlckVuZ2luZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgYSB2YWx1ZSBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIENoYXJ0J3MgbGF5b3V0IGlzIG1pcnJvcmVkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcmlnaHRUb0xlZnQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yaWdodFRvTGVmdCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcmlnaHRUb0xlZnQodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmlnaHRUb0xlZnQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhlIHNlcmllc0dyb3VwcyBwcm9wZXJ0eSBpcyB1c2VkIHRvIGRlc2NyaWJlIGFsbCBzZXJpZXMgZGlzcGxheWVkIG9uIHRoZSBjaGFydC4ganF4Q2hhcnQgc3VwcG9ydHMgbXVsdGlwbGUgc2VyaWVzIG9mIGRpZmZlcmVudCB0eXBlcyBhbmQgc2VyaWVzIGdyb3VwaW5nLiBFYWNoIHNlcmllcyBncm91cCBtYXkgaGF2ZSBpdHMgb3duIFZhbHVlIEF4aXMgKFktYXhpcykgd2hpY2ggYWxsb3dzIHlvdSB0byBoYXZlIHZhbHVlcyB3aXRoIGRpZmZlcmVudCBzY2FsZXMgZGlzcGxheWVkIG9uIHRoZSBzYW1lIGNoYXJ0IGF0IHRoZSBzYW1lIHRpbWUuIEl0IGFsc28gYWxsb3dzIHlvdSB0byBkaXNwbGF5IG11bHRpcGxlIHNlcmllcyB0eXBlcyB0b2dldGhlciBvbiB0aGUgc2FtZSBjaGFydC4gRm9yIGV4YW1wbGUsIHlvdSBjYW4gZGlzcGxheSBhbGwgc2VyaWVzIGluIG9uZSBncm91cCBhcyBsaW5lcyBhbmQgdGhlIHNlcmllcyBpbiBhIHNlY29uZCBncm91cCBhcyBjb2x1bW5zLiBzZXJpZXNHcm91cHMgaXMgYW4gYXJyYXkgb2Ygb2JqZWN0cyB3aGVyZSBlYWNoIG9iamVjdCByZXByZXNlbnRzIG9uZSBncm91cC4gKi9cblx0QElucHV0KClcblx0Z2V0IHNlcmllc0dyb3VwcygpOiBDaGFydFNlcmllc0dyb3VwW10ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VyaWVzR3JvdXBzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzZXJpZXNHcm91cHModmFsdWU6IENoYXJ0U2VyaWVzR3JvdXBbXSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zZXJpZXNHcm91cHMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB3aGV0aGVyIHRvIGRpc3BsYXkgdGhlIGNoYXJ0J3MgYm9yZGVyIGxpbmUuICovXG5cdEBJbnB1dCgpXG5cdGdldCBzaG93Qm9yZGVyTGluZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNob3dCb3JkZXJMaW5lIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzaG93Qm9yZGVyTGluZSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zaG93Qm9yZGVyTGluZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHdoZXRoZXIgdG8gc2hvdyBvciBoaWRlIHRoZSBjaGFydCBzZXJpZXMgbGVnZW5kLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc2hvd0xlZ2VuZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNob3dMZWdlbmQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHNob3dMZWdlbmQodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2hvd0xlZ2VuZCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFbmFibGVzIG9yIGRpc2FibGVzIHRoZSBjaGFydCB0b29sdGlwcy4gKi9cblx0QElucHV0KClcblx0Z2V0IHNob3dUb29sVGlwcygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNob3dUb29sVGlwcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc2hvd1Rvb2xUaXBzKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNob3dUb29sVGlwcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHdoZXRoZXIgdG8gc2hvdyBhIGNvbXBvc2l0ZSB0b29sdGlwIGNvbnRhaW5pbmcgaW5mb3JtYXRpb24gZm9yIGFsbCBzZXJpZXMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBzaG93VG9vbFRpcHNPbkFsbFNlcmllcygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNob3dUb29sVGlwc09uQWxsU2VyaWVzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzaG93VG9vbFRpcHNPbkFsbFNlcmllcyh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zaG93VG9vbFRpcHNPbkFsbFNlcmllcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBzZXQgb2YgZGVmYXVsdCBiYWNrZ3JvdW5kLCBsaW5lLCB0ZXh0IGFuZCBiYW5kIGNvbG9ycyB0aGF0IHdpbGwgYmUgdXNlZCBpbiB0aGUgQ2hhcnQuICovXG5cdEBJbnB1dCgpXG5cdGdldCB0aGVtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGhlbWUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRoZW1lKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGhlbWUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyB0aGUgcGFkZGluZyBvZiB0aGUgY2hhcnQncyB0aXRsZSAoY2FwdGlvbikuICovXG5cdEBJbnB1dCgpXG5cdGdldCB0aXRsZVBhZGRpbmcoKTogUGFkZGluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50aXRsZVBhZGRpbmcgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRpdGxlUGFkZGluZyh2YWx1ZTogUGFkZGluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50aXRsZVBhZGRpbmcgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVG9vbHRpcCBiYWNrZ3JvdW5kIGNvbG9yLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdG9vbFRpcEJhY2tncm91bmQoKTogc3RyaW5nIHwgbnVsbCB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50b29sVGlwQmFja2dyb3VuZCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdG9vbFRpcEJhY2tncm91bmQodmFsdWU6IHN0cmluZyB8IG51bGwpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudG9vbFRpcEJhY2tncm91bmQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgdG9vbHRpcCBoaWRlIGRlbGF5IGluIG1pbGxpc2Vjb25kcy4gKi9cblx0QElucHV0KClcblx0Z2V0IHRvb2xUaXBGb3JtYXRGdW5jdGlvbigpOiB7KHZhbHVlPzogYW55LCBpbmRleD86IG51bWJlciwgc2VyaWVzPzogYW55KTogc3RyaW5nfSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50b29sVGlwRm9ybWF0RnVuY3Rpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRvb2xUaXBGb3JtYXRGdW5jdGlvbih2YWx1ZTogeyh2YWx1ZT86IGFueSwgaW5kZXg/OiBudW1iZXIsIHNlcmllcz86IGFueSk6IHN0cmluZ30pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudG9vbFRpcEZvcm1hdEZ1bmN0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFRvb2x0aXAgbGluZSBjb2xvci4gKi9cblx0QElucHV0KClcblx0Z2V0IHRvb2xUaXBIaWRlRGVsYXkoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRvb2xUaXBIaWRlRGVsYXkgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRvb2xUaXBIaWRlRGVsYXkodmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50b29sVGlwSGlkZURlbGF5ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIHRvb2x0aXAgc2hvdyBkZWxheSBpbiBtaWxsaXNlY29uZHMuIFZhbHVlcyBtYXkgcmFuZ2UgZnJvbSAwIHRvIDEwMDAwIFttc10uICovXG5cdEBJbnB1dCgpXG5cdGdldCB0b29sVGlwTGluZUNvbG9yKCk6IHN0cmluZyB8IG51bGwge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudG9vbFRpcExpbmVDb2xvciA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdG9vbFRpcExpbmVDb2xvcih2YWx1ZTogc3RyaW5nIHwgbnVsbCkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50b29sVGlwTGluZUNvbG9yID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEFuIG9iamVjdCB3aXRoIHNldHRpbmdzIGFib3V0IHRoZSBDaGFydCdzIHktYXhpcyAodmFsdWUgYXhpcykuICovXG5cdEBJbnB1dCgpXG5cdGdldCB0b29sVGlwU2hvd0RlbGF5KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50b29sVGlwU2hvd0RlbGF5IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0b29sVGlwU2hvd0RlbGF5KHZhbHVlOiBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudG9vbFRpcFNob3dEZWxheSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBDaGFydCdzIHhBeGlzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdmFsdWVBeGlzKCk6IENoYXJ0VmFsdWVBeGlzIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnZhbHVlQXhpcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdmFsdWVBeGlzKHZhbHVlOiBDaGFydFZhbHVlQXhpcykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC52YWx1ZUF4aXMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gdW5kZWZpbmVkICovXG5cdEBJbnB1dCgpXG5cdGdldCB4QXhpcygpOiBDaGFydFhBeGlzIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnhBeGlzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB4QXhpcyh2YWx1ZTogQ2hhcnRYQXhpcykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC54QXhpcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGUgZXZlbnQgaXMgcmFpc2VkIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIGEgY2hhcnQgYW5ub3RhdGlvbi5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvbkFubm90YXRpb25DbGljazogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoZSBldmVudCBpcyByYWlzZWQgd2hlbiB0aGUgdXNlciBtb3ZlcyB0aGUgY3Vyc29yIGFib3ZlIGEgY2hhcnQgYW5ub3RhdGlvbi5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvbkFubm90YXRpb25Nb3VzZWVudGVyOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhlIGV2ZW50IGlzIHJhaXNlZCB3aGVuIHRoZSB1c2VyIG1vdmVzIHRoZSBjdXJzb3Igb3V0IG9mIGEgY2hhcnQgYW5ub3RhdGlvbi5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvbkFubm90YXRpb25Nb3VzZWxlYXZlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhlIGV2ZW50IGlzIHJhaXNlZCB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiBzZXJpZXMgZWxlbWVudC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvbkNsaWNrOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhlIGV2ZW50IGlzIHJhaXNlZCB3aGVuIHRoZSB1c2VyIG1vdmVzIHRoZSBjdXJzb3Igb3V0IG9mIGEgc2VyaWVzIGVsZW1lbnQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHQqL1xuXHRAT3V0cHV0KCkgb25Nb3VzZW91dDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoZSBldmVudCBpcyByYWlzZWQgd2hlbiB0aGUgdXNlciBtb3ZlcyB0aGUgY3Vyc29yIGFib3ZlIGEgc2VyaWVzIGVsZW1lbnQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHQqL1xuXHRAT3V0cHV0KCkgb25Nb3VzZW92ZXI6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGUgZXZlbnQgaXMgcmFpc2VkIGFmdGVyIHRoZSBjaGFydCdzIHJhbmdlIHNlbGVjdG9yIHBvc2l0aW9uIGNoYW5nZXMgYW5kIGFmdGVyIHRoZSBjaGFydCBlbmRzIHJlbmRlcmluZy5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvblJhbmdlU2VsZWN0aW9uQ2hhbmdlZDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoZSBldmVudCBpcyByYWlzZWQgd2hlbiB0aGUgY2hhcnQncyByYW5nZSBzZWxlY3RvciBwb3NpdGlvbiBjaGFuZ2VzIGFuZCBiZWZvcmUgdGhlIGNoYXJ0IHN0YXJ0cyByZW5kZXJpbmcuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHQqL1xuXHRAT3V0cHV0KCkgb25SYW5nZVNlbGVjdGlvbkNoYW5naW5nOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhlIGV2ZW50IGlzIHJhaXNlZCB3aGVuIHRoZSBjaGFydCBiZWdpbnMgcmVuZGVyaW5nLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Ki9cblx0QE91dHB1dCgpIG9uUmVmcmVzaEJlZ2luOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhlIGV2ZW50IGlzIHJhaXNlZCB3aGVuIHRoZSBjaGFydCBmaW5pc2hlcyByZW5kZXJpbmcuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHQqL1xuXHRAT3V0cHV0KCkgb25SZWZyZXNoRW5kOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhlIGV2ZW50IGlzIHJhaXNlZCB3aGVuIGEgc2VyaWUgaXMgdG9nZ2xlZCBieSBhIHVzZXIgY2xpY2sgaW4gdGhlIGNoYXJ0J3MgbGVnZW5kIG9yIHRocm91Z2ggYW4gQVBJIGNhbGwuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHQqL1xuXHRAT3V0cHV0KCkgb25Ub2dnbGU6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBZGRzIGEgbmV3IGNvbG9yIHNoZW1lLiBJZiBhIHNjaGVtZSB3aXRoIHRoZSBzYW1lIG5hbWUgYWxyZWFkeSBleGlzdHMsIHRoZSBtZXRob2Qgd2lsbCB1cGRhdGUgaXRzIGNvbG9ycy4gXG5cdCogQHBhcmFtIHtzdHJpbmd9IHNjaGVtZU5hbWUuIFRoZSBuYW1lIG9mIHRoZSBjdXN0b20gY29sb3Igc2NoZW1lLlxuXHQqIEBwYXJhbSB7YW55W119IGNvbG9yc0FycmF5LiBBbiBhcnJheSBvZiBjb2xvciB2YWx1ZXMuXG5cdCovXG4gICAgcHVibGljIGFkZENvbG9yU2NoZW1lKHNjaGVtZU5hbWU6IHN0cmluZywgY29sb3JzQXJyYXk6IGFueVtdKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmFkZENvbG9yU2NoZW1lKHNjaGVtZU5hbWUsIGNvbG9yc0FycmF5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5hZGRDb2xvclNjaGVtZShzY2hlbWVOYW1lLCBjb2xvcnNBcnJheSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJldHVybnMgdGhlIGNvbG9ycyBvZiBhIGNvbG9yIHNjaGVtZSBieSBuYW1lLiBJZiB0aGUgc2NoZW1lIGRvZXNuJ3QgZXhpc3QgdGhlIG1ldGhvZCByZXR1cm5zIHVuZGVmaW5lZC4gXG5cdCogQHBhcmFtIHtzdHJpbmd9IHNjaGVtZU5hbWUuIFRoZSBuYW1lIG9mIHRoZSBjb2xvciBzY2hlbWUuXG5cdCogQHJldHVybnMge2FueVtdfVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0Q29sb3JTY2hlbWUoc2NoZW1lTmFtZSk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRDb2xvclNjaGVtZShzY2hlbWVOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEdldHMgdGhlIHJlbmRlcmVkIGNvb3JkaW5hdGVzIG9mIGEgZGF0YSBwb2ludCBlbGVtZW50LiBcblx0KiBAcGFyYW0ge251bWJlcn0gZ3JvdXBJbmRleC4gU2VyaWVzIGdyb3VwIGluZGV4LlxuXHQqIEBwYXJhbSB7bnVtYmVyfSBzZXJpZUluZGV4LiBTZXJpZXMgaW5kZXguXG5cdCogQHBhcmFtIHtudW1iZXJ9IGl0ZW1JbmRleC4gSXRlbSAoZGF0YSBwb2ludCkgaW5kZXguXG5cdCogQHJldHVybnMge3sgeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBjZW50ZXI6IG51bWJlciwgY2VudGVyT2Zmc2V0OiBudW1iZXIsIGlubmVyUmFkaXVzOiBudW1iZXIsIG91dGVyUmFkaXVzOiBudW1iZXIsIHNlbGVjdGVkUmFkaXVzQ2hhbmdlOiBudW1iZXIsIGZyb21BbmdsZTogbnVtYmVyLCB0b0FuZ2xlOiBudW1iZXIsIHJhZGl1czogbnVtYmVyIH19XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRJdGVtQ29vcmQoZ3JvdXBJbmRleCwgc2VyaWVJbmRleCwgaXRlbUluZGV4KTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldEl0ZW1Db29yZChncm91cEluZGV4LCBzZXJpZUluZGV4LCBpdGVtSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gR2V0cyB0aGUgbnVtYmVyIG9mIHJlbmRlcmVkIGl0ZW1zIGluIGEgc3BlY2lmaWMgc2VyaWUuIFxuXHQqIEBwYXJhbSB7bnVtYmVyfSBncm91cEluZGV4LiBTZXJpZXMgZ3JvdXAgaW5kZXguXG5cdCogQHBhcmFtIHtudW1iZXJ9IHNlcmllSW5kZXguIFNlcmllcyBpbmRleC5cblx0KiBAcmV0dXJucyB7bnVtYmVyfVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0SXRlbXNDb3VudChncm91cEluZGV4LCBzZXJpZUluZGV4KTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldEl0ZW1zQ291bnQoZ3JvdXBJbmRleCwgc2VyaWVJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBHZXRzIHRoZSByZW5kZXJlZCBjb29yZGluYXRlcyBhbmQgdmFsdWVzIG9mIHRoZSB2YWx1ZUF4aXMgbGFiZWxzLiBcblx0KiBAcGFyYW0ge251bWJlcn0gZ3JvdXBJbmRleC4gU2VyaWVzIGdyb3VwIGluZGV4LlxuXHQqIEByZXR1cm5zIHthbnl9XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRWYWx1ZUF4aXNMYWJlbHMoZ3JvdXBJbmRleCk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRWYWx1ZUF4aXNMYWJlbHMoZ3JvdXBJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBHZXRzIHRoZSByZW5kZXJlZCByZWN0YW5nbGUgY29vcmRpbmF0ZXMgb2YgdGhlIHZhbHVlQXhpcyBvZiBzcGVjaWZpYyBzZXJpZSBncm91cC4gXG5cdCogQHBhcmFtIHtudW1iZXJ9IGdyb3VwSW5kZXguIFNlcmllcyBncm91cCBpbmRleC5cblx0KiBAcmV0dXJucyB7RE9NUmVjdH1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldFZhbHVlQXhpc1JlY3QoZ3JvdXBJbmRleCk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRWYWx1ZUF4aXNSZWN0KGdyb3VwSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gR2V0cyB0aGUgdmFsdWVBeGlzICh2ZXJ0aWNhbCBheGlzKSdzIHZhbHVlLiBcblx0KiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0LiBWZXJ0aWNhbCBvZmZzZXQuXG5cdCogQHBhcmFtIHtudW1iZXJ9IGdyb3VwSW5kZXguIFNlcmllcyBncm91cCBpbmRleC5cblx0KiBAcmV0dXJucyB7YW55fVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0VmFsdWVBeGlzVmFsdWUob2Zmc2V0LCBncm91cEluZGV4KTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldFZhbHVlQXhpc1ZhbHVlKG9mZnNldCwgZ3JvdXBJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBHZXRzIHRoZSByZW5kZXJlZCBjb29yZGluYXRlcyBhbmQgdmFsdWVzIG9mIHRoZSB4QXhpcyBsYWJlbHMuIFxuXHQqIEBwYXJhbSB7bnVtYmVyfSBncm91cEluZGV4LiBTZXJpZXMgZ3JvdXAgaW5kZXguXG5cdCogQHJldHVybnMge2FueX1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldFhBeGlzTGFiZWxzKGdyb3VwSW5kZXgpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0WEF4aXNMYWJlbHMoZ3JvdXBJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBHZXRzIHRoZSByZW5kZXJlZCByZWN0YW5nbGUgY29vcmRpbmF0ZXMgb2YgdGhlIHgtQXhpcyBvZiBzcGVjaWZpYyBzZXJpZSBncm91cC4gXG5cdCogQHBhcmFtIHtudW1iZXJ9IGdyb3VwSW5kZXguIFNlcmllcyBncm91cCBpbmRleC5cblx0KiBAcmV0dXJucyB7RE9NUmVjdH1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldFhBeGlzUmVjdChncm91cEluZGV4KTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldFhBeGlzUmVjdChncm91cEluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEdldHMgdGhlIHhBeGlzIChob3Jpem9udGFsIGF4aXMpJ3MgdmFsdWUuIFxuXHQqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXQuIEhvcml6b250YWwgb2Zmc2V0LlxuXHQqIEBwYXJhbSB7bnVtYmVyfSBncm91cEluZGV4LiBTZXJpZXMgZ3JvdXAgaW5kZXguXG5cdCogQHJldHVybnMge2FueX1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldFhBeGlzVmFsdWUob2Zmc2V0LCBncm91cEluZGV4KTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldFhBeGlzVmFsdWUob2Zmc2V0LCBncm91cEluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEhpZGVzIGEgY2hhcnQgc2VyaWUuIFRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGlzIGZ1bmN0aW9uIGlzIHNhbWUgYXMgdGhlIHVzZXIgdW5jaGVja2luZyB0aGUgbGVnZW5kIGJveCBvZiBhIGNoYXJ0IHNlcmllLiBcblx0KiBAcGFyYW0ge251bWJlcn0gZ3JvdXBJbmRleC4gU2VyaWVzIGdyb3VwIGluZGV4LlxuXHQqIEBwYXJhbSB7bnVtYmVyfSBzZXJpZUluZGV4LiBTZXJpZXMgaW5kZXguXG5cdCogQHBhcmFtIHtudW1iZXJ9IGl0ZW1JbmRleD8uIEl0ZW0gKGRhdGEgcG9pbnQpIGluZGV4LiBBcHBsaWNhYmxlIHRvIHBpZSBhbmQgZG9udXQgc2VyaWVzIG9ubHkuXG5cdCovXG4gICAgcHVibGljIGhpZGVTZXJpZShncm91cEluZGV4OiBudW1iZXIsIHNlcmllSW5kZXg6IG51bWJlciwgaXRlbUluZGV4PzogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmhpZGVTZXJpZShncm91cEluZGV4LCBzZXJpZUluZGV4LCBpdGVtSW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmhpZGVTZXJpZShncm91cEluZGV4LCBzZXJpZUluZGV4LCBpdGVtSW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBIaWRlcyB0aGUgY3VycmVudCB0b29sdGlwIGlmIHZpc2libGUuIFxuXHQqIEBwYXJhbSB7bnVtYmVyfSBoaWRlRGVsYXk/LiBIaWRlIGRlbGF5LlxuXHQqL1xuICAgIHB1YmxpYyBoaWRlVG9vbFRpcChoaWRlRGVsYXk/OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaGlkZVRvb2xUaXAoaGlkZURlbGF5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5oaWRlVG9vbFRpcChoaWRlRGVsYXkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBQcmludHMgdGhlIGNoYXJ0LiBcblx0Ki9cbiAgICBwdWJsaWMgcHJpbnQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnByaW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucHJpbnQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVmcmVzaGVzIHRoZSBjb250ZW50IG9mIHRoZSBjaGFydCBlbGVtZW50IGFmdGVyIGEgcHJvcGVydHkgb3IgZGF0YSB1cGRhdGUuIFxuXHQqL1xuICAgIHB1YmxpYyByZWZyZXNoKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZWZyZXNoKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVmcmVzaCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZW1vdmVzIGFuIGV4aXN0aW5nIGNvbG9yIHNjaGVtZS4gSWYgdGhlIHNjaGVtZSBkb2VzIG5vdCBleGlzdCwgdGhlIG1ldGhvZCBoYXMgbm8gZWZmZWN0LiBcblx0KiBAcGFyYW0ge3N0cmluZ30gc2NoZW1lTmFtZS4gVGhlIG5hbWUgb2YgdGhlIGN1c3RvbSBjb2xvciBzY2hlbWUuXG5cdCovXG4gICAgcHVibGljIHJlbW92ZUNvbG9yU2NoZW1lKHNjaGVtZU5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVDb2xvclNjaGVtZShzY2hlbWVOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVDb2xvclNjaGVtZShzY2hlbWVOYW1lKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRXhwb3J0cyB0aGUgY2hhcnQncyBjb250ZW50IGFzIEpQRUcgaW1hZ2UuIFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTmFtZT8uIEZpbGUgbmFtZS5cblx0Ki9cbiAgICBwdWJsaWMgc2F2ZUFzSlBFRyhmaWxlTmFtZT86IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zYXZlQXNKUEVHKGZpbGVOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zYXZlQXNKUEVHKGZpbGVOYW1lKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRXhwb3J0cyB0aGUgY2hhcnQncyBjb250ZW50IGFzIFBORyBpbWFnZS4gXG5cdCogQHBhcmFtIHtzdHJpbmd9IGZpbGVOYW1lPy4gRmlsZSBuYW1lLlxuXHQqL1xuICAgIHB1YmxpYyBzYXZlQXNQTkcoZmlsZU5hbWU/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2F2ZUFzUE5HKGZpbGVOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zYXZlQXNQTkcoZmlsZU5hbWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFeHBvcnRzIHRoZSBjaGFydCdzIGNvbnRlbnQgYXMgUERGLiBcblx0KiBAcGFyYW0ge3N0cmluZ30gZmlsZU5hbWU/LiBGaWxlIG5hbWUuXG5cdCogQHBhcmFtIHtzdHJpbmd9IHBhZ2VPcmllbnRhdGlvbj8uIFBERiBwYWdlIG9yaWVudGF0aW9uLiA8c3Ryb25nPlBvc3NpYmxlIHZhbHVlczo8L3N0cm9uZz4gJ3BvcnRyYWl0JyAoZGVmYXVsdCksICdsYW5kc2NhcGUnLlxuXHQqL1xuICAgIHB1YmxpYyBzYXZlQXNQREYoZmlsZU5hbWU/OiBzdHJpbmcsIHBhZ2VPcmllbnRhdGlvbj86IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zYXZlQXNQREYoZmlsZU5hbWUsIHBhZ2VPcmllbnRhdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2F2ZUFzUERGKGZpbGVOYW1lLCBwYWdlT3JpZW50YXRpb24pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTaG93cyBhIGhpZGRlbiBjaGFydCBzZXJpZS4gVGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoaXMgZnVuY3Rpb24gaXMgc2FtZSBhcyB0aGUgdXNlciBjaGVja2luZyB0aGUgbGVnZW5kIGJveCBvZiBhIGNoYXJ0IHNlcmllLiBcblx0KiBAcGFyYW0ge251bWJlcn0gZ3JvdXBJbmRleC4gU2VyaWVzIGdyb3VwIGluZGV4LlxuXHQqIEBwYXJhbSB7bnVtYmVyfSBzZXJpZUluZGV4LiBTZXJpZXMgaW5kZXguXG5cdCogQHBhcmFtIHtudW1iZXJ9IGl0ZW1JbmRleD8uIEl0ZW0gKGRhdGEgcG9pbnQpIGluZGV4LiBBcHBsaWNhYmxlIHRvIHBpZSBhbmQgZG9udXQgc2VyaWVzIG9ubHkuXG5cdCovXG4gICAgcHVibGljIHNob3dTZXJpZShncm91cEluZGV4OiBudW1iZXIsIHNlcmllSW5kZXg6IG51bWJlciwgaXRlbUluZGV4PzogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNob3dTZXJpZShncm91cEluZGV4LCBzZXJpZUluZGV4LCBpdGVtSW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNob3dTZXJpZShncm91cEluZGV4LCBzZXJpZUluZGV4LCBpdGVtSW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTaG93cyBhIHRoZSB0b29sdGlwIGZvciBhIHBhcnRpY3VsYXIgZGF0YSBwb2ludC4gXG5cdCogQHBhcmFtIHtudW1iZXJ9IGdyb3VwSW5kZXguIFNlcmllcyBncm91cCBpbmRleC5cblx0KiBAcGFyYW0ge251bWJlcn0gc2VyaWVJbmRleC4gU2VyaWVzIGluZGV4LlxuXHQqIEBwYXJhbSB7bnVtYmVyfSBpdGVtSW5kZXguIEl0ZW0gKGRhdGEgcG9pbnQpIGluZGV4LlxuXHQqIEBwYXJhbSB7bnVtYmVyfSBzaG93RGVsYXk/LiBTaG93IGRlbGF5LlxuXHQqIEBwYXJhbSB7bnVtYmVyfSBoaWRlRGVsYXk/LiBIaWRlIGRlbGF5LlxuXHQqL1xuICAgIHB1YmxpYyBzaG93VG9vbFRpcChncm91cEluZGV4OiBudW1iZXIsIHNlcmllSW5kZXg6IG51bWJlciwgaXRlbUluZGV4OiBudW1iZXIsIHNob3dEZWxheT86IG51bWJlciwgaGlkZURlbGF5PzogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNob3dUb29sVGlwKGdyb3VwSW5kZXgsIHNlcmllSW5kZXgsIGl0ZW1JbmRleCwgc2hvd0RlbGF5LCBoaWRlRGVsYXkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNob3dUb29sVGlwKGdyb3VwSW5kZXgsIHNlcmllSW5kZXgsIGl0ZW1JbmRleCwgc2hvd0RlbGF5LCBoaWRlRGVsYXkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBVcGRhdGVzIHRoZSB2YWx1ZXMgb2YgdGhlIGNoYXJ0IHNlcmllcyB3aXRob3V0IGZ1bGwgcmVmcmVzaCBvZiB0aGUgZW50aXJlIGNoYXJ0LiBUaGUgbWV0aG9kIHNob3VsZCBiZSB1c2VkIGZvciBhbmltYXRpb24gb2YgZnJlcXVlbnRseSBjaGFuZ2luZyB2YWx1ZXMuIFxuXHQqL1xuICAgIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnVwZGF0ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXHRnZXQgaXNSZW5kZXJlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQgOiBmYWxzZTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHR9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICBjb25zdCB0aGF0ID0gdGhpcztcblxuICAgICAgdGhhdC5vbkNyZWF0ZS5lbWl0KHRoYXQubmF0aXZlRWxlbWVudCk7XG5cblx0XHRTbWFydC5SZW5kZXIoKTtcblxuXHRcdHRoaXMubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzbWFydC1hbmd1bGFyJyk7XG5cblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHsgdGhhdC5vblJlYWR5LmVtaXQodGhhdC5uYXRpdmVFbGVtZW50KTsgfSk7XG5cdFx0dGhpcy5saXN0ZW4oKTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMudW5saXN0ZW4oKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblx0XHRpZiAodGhpcy5uYXRpdmVFbGVtZW50ICYmIHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG5cdFx0XHRmb3IgKGNvbnN0IHByb3BOYW1lIGluIGNoYW5nZXMpIHtcblx0XHRcdFx0aWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG5cdFx0XHRcdFx0dGhpcy5uYXRpdmVFbGVtZW50W3Byb3BOYW1lXSA9IGNoYW5nZXNbcHJvcE5hbWVdLmN1cnJlbnRWYWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQWRkIGV2ZW50IGxpc3RlbmVycy4gKi9cblx0cHJpdmF0ZSBsaXN0ZW4oKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snYW5ub3RhdGlvbkNsaWNrSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQW5ub3RhdGlvbkNsaWNrLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Fubm90YXRpb25DbGljaycsIHRoYXQuZXZlbnRIYW5kbGVyc1snYW5ub3RhdGlvbkNsaWNrSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snYW5ub3RhdGlvbk1vdXNlZW50ZXJIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Bbm5vdGF0aW9uTW91c2VlbnRlci5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdhbm5vdGF0aW9uTW91c2VlbnRlcicsIHRoYXQuZXZlbnRIYW5kbGVyc1snYW5ub3RhdGlvbk1vdXNlZW50ZXJIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydhbm5vdGF0aW9uTW91c2VsZWF2ZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkFubm90YXRpb25Nb3VzZWxlYXZlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Fubm90YXRpb25Nb3VzZWxlYXZlJywgdGhhdC5ldmVudEhhbmRsZXJzWydhbm5vdGF0aW9uTW91c2VsZWF2ZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2NsaWNrSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ2xpY2suZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NsaWNrSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snbW91c2VvdXRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Nb3VzZW91dC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snbW91c2VvdXRIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydtb3VzZW92ZXJIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Nb3VzZW92ZXIuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgdGhhdC5ldmVudEhhbmRsZXJzWydtb3VzZW92ZXJIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydyYW5nZVNlbGVjdGlvbkNoYW5nZWRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25SYW5nZVNlbGVjdGlvbkNoYW5nZWQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncmFuZ2VTZWxlY3Rpb25DaGFuZ2VkJywgdGhhdC5ldmVudEhhbmRsZXJzWydyYW5nZVNlbGVjdGlvbkNoYW5nZWRIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydyYW5nZVNlbGVjdGlvbkNoYW5naW5nSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uUmFuZ2VTZWxlY3Rpb25DaGFuZ2luZy5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdyYW5nZVNlbGVjdGlvbkNoYW5naW5nJywgdGhhdC5ldmVudEhhbmRsZXJzWydyYW5nZVNlbGVjdGlvbkNoYW5naW5nSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1sncmVmcmVzaEJlZ2luSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uUmVmcmVzaEJlZ2luLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3JlZnJlc2hCZWdpbicsIHRoYXQuZXZlbnRIYW5kbGVyc1sncmVmcmVzaEJlZ2luSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1sncmVmcmVzaEVuZEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblJlZnJlc2hFbmQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncmVmcmVzaEVuZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1sncmVmcmVzaEVuZEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3RvZ2dsZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblRvZ2dsZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b2dnbGUnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3RvZ2dsZUhhbmRsZXInXSk7XG5cblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVtb3ZlIGV2ZW50IGxpc3RlbmVycy4gKi9cblx0cHJpdmF0ZSB1bmxpc3RlbigpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snYW5ub3RhdGlvbkNsaWNrSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignYW5ub3RhdGlvbkNsaWNrJywgdGhhdC5ldmVudEhhbmRsZXJzWydhbm5vdGF0aW9uQ2xpY2tIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2Fubm90YXRpb25Nb3VzZWVudGVySGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignYW5ub3RhdGlvbk1vdXNlZW50ZXInLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2Fubm90YXRpb25Nb3VzZWVudGVySGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydhbm5vdGF0aW9uTW91c2VsZWF2ZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Fubm90YXRpb25Nb3VzZWxlYXZlJywgdGhhdC5ldmVudEhhbmRsZXJzWydhbm5vdGF0aW9uTW91c2VsZWF2ZUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY2xpY2tIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY2xpY2tIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ21vdXNlb3V0SGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ21vdXNlb3V0SGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydtb3VzZW92ZXJIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ21vdXNlb3ZlckhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1sncmFuZ2VTZWxlY3Rpb25DaGFuZ2VkSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmFuZ2VTZWxlY3Rpb25DaGFuZ2VkJywgdGhhdC5ldmVudEhhbmRsZXJzWydyYW5nZVNlbGVjdGlvbkNoYW5nZWRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3JhbmdlU2VsZWN0aW9uQ2hhbmdpbmdIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdyYW5nZVNlbGVjdGlvbkNoYW5naW5nJywgdGhhdC5ldmVudEhhbmRsZXJzWydyYW5nZVNlbGVjdGlvbkNoYW5naW5nSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydyZWZyZXNoQmVnaW5IYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdyZWZyZXNoQmVnaW4nLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3JlZnJlc2hCZWdpbkhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1sncmVmcmVzaEVuZEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3JlZnJlc2hFbmQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3JlZnJlc2hFbmRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3RvZ2dsZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvZ2dsZScsIHRoYXQuZXZlbnRIYW5kbGVyc1sndG9nZ2xlSGFuZGxlciddKTtcblx0XHR9XG5cblx0fVxufVxuIl19