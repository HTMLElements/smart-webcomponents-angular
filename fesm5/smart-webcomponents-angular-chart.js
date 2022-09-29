
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.chart';

import { __decorate, __extends, __awaiter, __generator } from 'tslib';
import { EventEmitter, Output, Input, ElementRef, Directive, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

var BaseElement = /** @class */ (function () {
    function BaseElement(ref) {
        this.onCreate = new EventEmitter();
        this.onReady = new EventEmitter();
        this.onAttach = new EventEmitter();
        this.onDetach = new EventEmitter();
        var that = this;
        this.nativeElement = ref.nativeElement;
        that.nativeElement.onAttached = function () {
            that.onAttach.emit(that.nativeElement);
        };
        that.nativeElement.onDetached = function () {
            that.onDetach.emit(that.nativeElement);
        };
    }
    BaseElement.prototype.addEventListener = function (type, listener, options) {
        if (options === void 0) { options = false; }
        this.nativeElement.addEventListener(type, listener, options);
    };
    BaseElement.prototype.removeEventListener = function (type, listener, options) {
        if (options === void 0) { options = false; }
        this.nativeElement.removeEventListener(type, listener, options);
    };
    BaseElement.prototype.dispatchEvent = function (event) {
        return this.nativeElement.dispatchEvent(event);
    };
    BaseElement.prototype.blur = function () {
        this.nativeElement.blur();
    };
    BaseElement.prototype.click = function () {
        this.nativeElement.click();
    };
    BaseElement.prototype.focus = function (options) {
        this.nativeElement.focus(options);
    };
    Object.defineProperty(BaseElement.prototype, "locale", {
        /** @description Sets or gets the language. Used in conjunction with the property messages.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.locale : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.locale = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseElement.prototype, "localizeFormatFunction", {
        /** @description Callback used to customize the format of the messages that are returned from the Localization Module. */
        get: function () {
            return this.nativeElement ? this.nativeElement.localizeFormatFunction : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.localizeFormatFunction = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseElement.prototype, "messages", {
        /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.messages : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.messages = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseElement.prototype, "rightToLeft", {
        /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
        get: function () {
            return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseElement.prototype, "theme", {
        /** @description Determines the theme. Theme defines the look of the element */
        get: function () {
            return this.nativeElement ? this.nativeElement.theme : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.theme = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
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
    return BaseElement;
}());
var Smart = window.Smart;

var ChartComponent = /** @class */ (function (_super) {
    __extends(ChartComponent, _super);
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
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
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
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
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
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
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
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
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
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
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
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
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
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
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
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
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
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
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
    return ChartComponent;
}(BaseElement));

var ChartModule = /** @class */ (function () {
    function ChartModule() {
    }
    ChartModule = __decorate([
        NgModule({
            declarations: [ChartComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            exports: [ChartComponent]
        })
    ], ChartModule);
    return ChartModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { ChartComponent, ChartModule, Smart, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-chart.js.map
