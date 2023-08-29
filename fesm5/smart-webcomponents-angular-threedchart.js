
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.3dchart';

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

var ThreeDChartComponent = /** @class */ (function (_super) {
    __extends(ThreeDChartComponent, _super);
    function ThreeDChartComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        /** @description The event is raised when the user clicks on a chart element.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	itemIndex, 	serieIndex, 	groupIndex)
        *   itemIndex - The item index of the item.
        *   serieIndex - The serie index of the item.
        *   groupIndex - The group index of the item.
        */
        _this.onItemClick = new EventEmitter();
        /** @description The event is raised when a chart element is shown.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	itemIndex, 	serieIndex, 	groupIndex)
        *   itemIndex - The item index of the item.
        *   serieIndex - The serie index of the item.
        *   groupIndex - The group index of the item.
        */
        _this.onShow = new EventEmitter();
        /** @description The event is raised when a chart element is hidden.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	itemIndex, 	serieIndex, 	groupIndex)
        *   itemIndex - The item index of the item.
        *   serieIndex - The serie index of the item.
        *   groupIndex - The group index of the item.
        */
        _this.onHide = new EventEmitter();
        /** @description The event is raised when a chart element is selected.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	itemIndex, 	serieIndex, 	groupIndex)
        *   itemIndex - The item index of the item.
        *   serieIndex - The serie index of the item.
        *   groupIndex - The group index of the item.
        */
        _this.onSelect = new EventEmitter();
        /** @description The event is raised when a chart element is unselected.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	itemIndex, 	serieIndex, 	groupIndex)
        *   itemIndex - The item index of the item.
        *   serieIndex - The serie index of the item.
        *   groupIndex - The group index of the item.
        */
        _this.onUnselect = new EventEmitter();
        /** @description The event is raised after the chart's range selector position changes and after the chart ends rendering.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	minValue, 	maxValue)
        *   minValue - The start value of the range selector.
        *   maxValue - The end value of the range selector.
        */
        _this.onRangeSelectionChanged = new EventEmitter();
        /** @description The event is raised when the chart's range selector position changes and before the chart starts rendering. The event can be default prevented to cancel the range selection change.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	minValue, 	maxValue, 	oldMinValue, 	oldMaxValue)
        *   minValue - The start value of the range selector.
        *   maxValue - The end value of the range selector.
        *   oldMinValue - The previous start value of the range selector.
        *   oldMaxValue - The previous end value of the range selector.
        */
        _this.onRangeSelectionChanging = new EventEmitter();
        /** @description The event is raised when the chart begins rendering.
        *  @param event. The custom event. 	*/
        _this.onRefreshBegin = new EventEmitter();
        /** @description The event is raised when the chart finishes rendering.
        *  @param event. The custom event. 	*/
        _this.onRefreshEnd = new EventEmitter();
        /** @description The event is raised when the chart begins resizing.
        *  @param event. The custom event. 	*/
        _this.onResizeBegin = new EventEmitter();
        /** @description The event is raised when the chart finishes resizing.
        *  @param event. The custom event. 	*/
        _this.onResizeEnd = new EventEmitter();
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    ThreeDChartComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('smart-3d-chart');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(ThreeDChartComponent.prototype, "animation", {
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
    Object.defineProperty(ThreeDChartComponent.prototype, "animationSpeed", {
        /** @description Determines the rate of the animation. The default animation rate is 1 */
        get: function () {
            return this.nativeElement ? this.nativeElement.animationSpeed : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.animationSpeed = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThreeDChartComponent.prototype, "autoRotate", {
        /** @description Sets whether the chart will rotate automatically. */
        get: function () {
            return this.nativeElement ? this.nativeElement.autoRotate : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.autoRotate = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThreeDChartComponent.prototype, "autoRotateSpeed", {
        /** @description Sets the speed of the automatic rotation. */
        get: function () {
            return this.nativeElement ? this.nativeElement.autoRotateSpeed : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.autoRotateSpeed = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThreeDChartComponent.prototype, "backgroundColor", {
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
    Object.defineProperty(ThreeDChartComponent.prototype, "backgroundGradient", {
        /** @description Sets the chart's background to a static linear gradient. The property must be set to an Array of Strings in the format: 'offset, color' */
        get: function () {
            return this.nativeElement ? this.nativeElement.backgroundGradient : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.backgroundGradient = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThreeDChartComponent.prototype, "backgroundImage", {
        /** @description Sets the chart's background to a static image. For example: 'https://www.htmlelements.com/demos/images/stars.jpg' */
        get: function () {
            return this.nativeElement ? this.nativeElement.backgroundImage : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.backgroundImage = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThreeDChartComponent.prototype, "backgroundTexture", {
        /** @description Sets the chart's background to a dynamic background image which rotates with the camera. The property must be set an Array of 6 images. All images must have aspect ratio 1:1 */
        get: function () {
            return this.nativeElement ? this.nativeElement.backgroundTexture : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.backgroundTexture = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThreeDChartComponent.prototype, "cameraPosition", {
        /** @description Sets the camera's position. The property must be set to an {x, y, z} object. */
        get: function () {
            return this.nativeElement ? this.nativeElement.cameraPosition : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.cameraPosition = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThreeDChartComponent.prototype, "cameraZoom", {
        /** @description Sets the intial camera zoom. The default value is 1 */
        get: function () {
            return this.nativeElement ? this.nativeElement.cameraZoom : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.cameraZoom = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThreeDChartComponent.prototype, "caption", {
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
    Object.defineProperty(ThreeDChartComponent.prototype, "colorScheme", {
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
    Object.defineProperty(ThreeDChartComponent.prototype, "controlsSettings", {
        /** @description Sets the chart's controls settings. */
        get: function () {
            return this.nativeElement ? this.nativeElement.controlsSettings : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.controlsSettings = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThreeDChartComponent.prototype, "customModels", {
        /** @description Allows substituting default items with custom 3D Objects. The property must be set to an Array of Objects in the format: { groupIndex, serieIndex, itemIndex, modelUrl } */
        get: function () {
            return this.nativeElement ? this.nativeElement.customModels : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.customModels = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThreeDChartComponent.prototype, "dataSource", {
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
    Object.defineProperty(ThreeDChartComponent.prototype, "description", {
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
    Object.defineProperty(ThreeDChartComponent.prototype, "disabled", {
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
    Object.defineProperty(ThreeDChartComponent.prototype, "enableControlsToolbar", {
        /** @description Sets whether the chart's toolbar is enabled. */
        get: function () {
            return this.nativeElement ? this.nativeElement.enableControlsToolbar : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.enableControlsToolbar = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThreeDChartComponent.prototype, "controlsToolbarItems", {
        /** @description  */
        get: function () {
            return this.nativeElement ? this.nativeElement.controlsToolbarItems : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.controlsToolbarItems = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThreeDChartComponent.prototype, "gridOptions", {
        /** @description Sets the chart's grid options. */
        get: function () {
            return this.nativeElement ? this.nativeElement.gridOptions : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.gridOptions = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThreeDChartComponent.prototype, "legendIndex", {
        /** @description Sets whether the legend will be created based on the chart's series or serie groups. "auto" - the legend index will change depending on the Chart type */
        get: function () {
            return this.nativeElement ? this.nativeElement.legendIndex : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.legendIndex = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThreeDChartComponent.prototype, "legendLayout", {
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
    Object.defineProperty(ThreeDChartComponent.prototype, "lightColor", {
        /** @description Sets the light color of the 3D Scene. */
        get: function () {
            return this.nativeElement ? this.nativeElement.lightColor : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.lightColor = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThreeDChartComponent.prototype, "locale", {
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
    Object.defineProperty(ThreeDChartComponent.prototype, "messages", {
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
    Object.defineProperty(ThreeDChartComponent.prototype, "rightToLeft", {
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
    Object.defineProperty(ThreeDChartComponent.prototype, "selectionMode", {
        /** @description Determines the selection mode. */
        get: function () {
            return this.nativeElement ? this.nativeElement.selectionMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.selectionMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThreeDChartComponent.prototype, "seriesGroups", {
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
    Object.defineProperty(ThreeDChartComponent.prototype, "showConnectionLines", {
        /** @description Determines whether to show grid connecting lines when a chart item is hovered over. */
        get: function () {
            return this.nativeElement ? this.nativeElement.showConnectionLines : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.showConnectionLines = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThreeDChartComponent.prototype, "showLegend", {
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
    Object.defineProperty(ThreeDChartComponent.prototype, "showLegendTable", {
        /** @description Determines whether to show or hide the chart series legend table. */
        get: function () {
            return this.nativeElement ? this.nativeElement.showLegendTable : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.showLegendTable = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThreeDChartComponent.prototype, "showToolTips", {
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
    Object.defineProperty(ThreeDChartComponent.prototype, "titlePadding", {
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
    Object.defineProperty(ThreeDChartComponent.prototype, "toolTipFormatFunction", {
        /** @description Tooltip data formatting settings for the values in the serie. */
        get: function () {
            return this.nativeElement ? this.nativeElement.toolTipFormatFunction : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.toolTipFormatFunction = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThreeDChartComponent.prototype, "toolTipFormatSettings", {
        /** @description Tooltip line color. By default it is set to the hovered item's color */
        get: function () {
            return this.nativeElement ? this.nativeElement.toolTipFormatSettings : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.toolTipFormatSettings = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThreeDChartComponent.prototype, "toolTipLineColor", {
        /** @description An object with settings about the Chart's y-axis (value axis). */
        get: function () {
            return this.nativeElement ? this.nativeElement.toolTipLineColor : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.toolTipLineColor = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThreeDChartComponent.prototype, "valueAxis", {
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
    Object.defineProperty(ThreeDChartComponent.prototype, "xAxis", {
        /** @description Sets the Chart's zAxis. */
        get: function () {
            return this.nativeElement ? this.nativeElement.xAxis : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.xAxis = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThreeDChartComponent.prototype, "zAxis", {
        /** @description undefined */
        get: function () {
            return this.nativeElement ? this.nativeElement.zAxis : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.zAxis = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /** @description Adds a new color sheme. If a scheme with the same name already exists, the method will update its colors.
    * @param {string} schemeName. The name of the custom color scheme.
    * @param {any[]} colorsArray. An array of color values.
    */
    ThreeDChartComponent.prototype.addColorScheme = function (schemeName, colorsArray) {
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
    /** @description Begins an update of the chart. The chart will not be rendered until the endUpdate method is called.
    */
    ThreeDChartComponent.prototype.beginUpdate = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.beginUpdate();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.beginUpdate();
            });
        }
    };
    /** @description Ends an update of the chart. The chart will be rendered after the endUpdate method is called.
    * @param {boolean} refresh?. If set to true, the chart will complete a full refresh.
    */
    ThreeDChartComponent.prototype.endUpdate = function (refresh) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.endUpdate(refresh);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.endUpdate(refresh);
            });
        }
    };
    /** @description Returns the colors of a color scheme by name. If the scheme doesn't exist the method returns undefined.
    * @param {string} schemeName. The name of the color scheme.
    * @returns {any[]}
  */
    ThreeDChartComponent.prototype.getColorScheme = function (schemeName) {
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
    /** @description Gets the item with the specified indexes.
    * @param {number | null} groupIndex?. Series group index.
    * @param {number | null} serieIndex?. Series index.
    * @param {number | null} itemIndex?. Item (data point) index.
    * @returns {any}
  */
    ThreeDChartComponent.prototype.getItemByIndexes = function (groupIndex, serieIndex, itemIndex) {
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getItemByIndexes(groupIndex, serieIndex, itemIndex);
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
    /** @description Gets an arrat of the items with the specified indexes. Leaving an index null will return all items that match the other indexes.
    * @param {number | null} groupIndex?. Series group index.
    * @param {number | null} serieIndex?. Series index.
    * @param {number | null} itemIndex?. Item (data point) index.
    * @returns {any}
  */
    ThreeDChartComponent.prototype.getItemsByIndexes = function (groupIndex, serieIndex, itemIndex) {
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getItemsByIndexes(groupIndex, serieIndex, itemIndex);
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
    /** @description Gets the indexes of the hidden series.
    * @returns {{ groupIndex: number, serieIndex: number, itemIndex: number }[]}
  */
    ThreeDChartComponent.prototype.getHidden = function () {
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getHidden();
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
    /** @description Gets the selected items.
    * @returns {any[]}
  */
    ThreeDChartComponent.prototype.getSelection = function () {
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getSelection();
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
    /** @description Gets the rendered values of the valueAxis labels.
    * @returns {any}
  */
    ThreeDChartComponent.prototype.getValueAxisLabels = function () {
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getValueAxisLabels();
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
    /** @description Gets the rendered values of the xAxis labels.
    * @returns {any}
  */
    ThreeDChartComponent.prototype.getXAxisLabels = function () {
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getXAxisLabels();
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
    /** @description Gets the rendered values of the zAxis labels.
    * @returns {any}
  */
    ThreeDChartComponent.prototype.getZAxisLabels = function () {
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getZAxisLabels();
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
    /** @description Hides all items of a chart group.
    * @param {number} groupIndex. Series group index.
    */
    ThreeDChartComponent.prototype.hideGroup = function (groupIndex) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.hideGroup(groupIndex);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.hideGroup(groupIndex);
            });
        }
    };
    /** @description Hides a chart item.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    * @param {number} itemIndex?. Item (data point) index.
    */
    ThreeDChartComponent.prototype.hideItem = function (groupIndex, serieIndex, itemIndex) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.hideItem(groupIndex, serieIndex, itemIndex);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.hideItem(groupIndex, serieIndex, itemIndex);
            });
        }
    };
    /** @description Hides all items of a chart serie.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    */
    ThreeDChartComponent.prototype.hideSerie = function (groupIndex, serieIndex) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.hideSerie(groupIndex, serieIndex);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.hideSerie(groupIndex, serieIndex);
            });
        }
    };
    /** @description Refreshes the content of the chart element after a property or data update.
    */
    ThreeDChartComponent.prototype.refresh = function () {
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
    ThreeDChartComponent.prototype.removeColorScheme = function (schemeName) {
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
    * @param {boolean} includeLegend?. Sets whether the legend will be part of the saved file.
    * @param {boolean} includeCaption?. Sets whether the caption will be part of the saved file.
    */
    ThreeDChartComponent.prototype.saveAsJPEG = function (fileName, includeLegend, includeCaption) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.saveAsJPEG(fileName, includeLegend, includeCaption);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.saveAsJPEG(fileName, includeLegend, includeCaption);
            });
        }
    };
    /** @description Exports the chart's content as PNG image.
    * @param {string} fileName?. File name.
    * @param {boolean} includeLegend?. Sets whether the legend will be part of the saved file.
    * @param {boolean} includeCaption?. Sets whether the caption will be part of the saved file.
    */
    ThreeDChartComponent.prototype.saveAsPNG = function (fileName, includeLegend, includeCaption) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.saveAsPNG(fileName, includeLegend, includeCaption);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.saveAsPNG(fileName, includeLegend, includeCaption);
            });
        }
    };
    /** @description Exports the chart's content as PDF file.
    * @param {string} fileName?. File name.
    * @param {boolean} includeLegend?. Sets whether the legend will be part of the saved file.
    * @param {boolean} includeCaption?. Sets whether the caption will be part of the saved file.
    */
    ThreeDChartComponent.prototype.saveAsPDF = function (fileName, includeLegend, includeCaption) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.saveAsPDF(fileName, includeLegend, includeCaption);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.saveAsPDF(fileName, includeLegend, includeCaption);
            });
        }
    };
    /** @description Selects a chart item. If selectionMode is 'one', the previous item will be unselected.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    * @param {number} itemIndex?. Item (data point) index.
    */
    ThreeDChartComponent.prototype.selectItem = function (groupIndex, serieIndex, itemIndex) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.selectItem(groupIndex, serieIndex, itemIndex);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.selectItem(groupIndex, serieIndex, itemIndex);
            });
        }
    };
    /** @description Shows all items of a chart group.
    * @param {number} groupIndex. Series group index.
    */
    ThreeDChartComponent.prototype.showGroup = function (groupIndex) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.showGroup(groupIndex);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.showGroup(groupIndex);
            });
        }
    };
    /** @description Shows a chart item.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    * @param {number} itemIndex?. Item (data point) index.
    */
    ThreeDChartComponent.prototype.showItem = function (groupIndex, serieIndex, itemIndex) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.showItem(groupIndex, serieIndex, itemIndex);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.showItem(groupIndex, serieIndex, itemIndex);
            });
        }
    };
    /** @description Shows all items of a chart serie.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    */
    ThreeDChartComponent.prototype.showSerie = function (groupIndex, serieIndex) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.showSerie(groupIndex, serieIndex);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.showSerie(groupIndex, serieIndex);
            });
        }
    };
    /** @description Sets the camera position to its position during the initialization.
    */
    ThreeDChartComponent.prototype.setDefaultPosition = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.setDefaultPosition();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.setDefaultPosition();
            });
        }
    };
    /** @description Sets the camera mode. Different camera modes change the control actions of the mouse. Available modes are 'zoom', 'pan' and 'default'.
    * @param {string} mode. Camera mode.
    */
    ThreeDChartComponent.prototype.setCameraMode = function (mode) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.setCameraMode(mode);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.setCameraMode(mode);
            });
        }
    };
    /** @description Sets the camera position.
    * @param {number} x. X coordinate.
    * @param {number} y. Y coordinate.
    * @param {number} z. Z coordinate.
    * @param {boolean} animation?. Animation Enabled
    */
    ThreeDChartComponent.prototype.setCameraPosition = function (x, y, z, animation) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.setCameraPosition(x, y, z, animation);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.setCameraPosition(x, y, z, animation);
            });
        }
    };
    /** @description Sets the camera zoom.
    * @param {number} level. Zoom level.
    * @param {boolean} animation?. Animation Enabled
    */
    ThreeDChartComponent.prototype.setCameraZoom = function (level, animation) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.setCameraZoom(level, animation);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.setCameraZoom(level, animation);
            });
        }
    };
    /** @description Unelects a chart item.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    * @param {number} itemIndex?. Item (data point) index.
    */
    ThreeDChartComponent.prototype.unselectItem = function (groupIndex, serieIndex, itemIndex) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.unselectItem(groupIndex, serieIndex, itemIndex);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.unselectItem(groupIndex, serieIndex, itemIndex);
            });
        }
    };
    /** @description Updates the values of the chart series without full refresh of the entire chart. The method should be used for animation of frequently changing values.
    */
    ThreeDChartComponent.prototype.update = function () {
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
    Object.defineProperty(ThreeDChartComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    ThreeDChartComponent.prototype.ngOnInit = function () {
    };
    ThreeDChartComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        this.listen();
    };
    ThreeDChartComponent.prototype.ngOnDestroy = function () {
        this.unlisten();
    };
    ThreeDChartComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    /** @description Add event listeners. */
    ThreeDChartComponent.prototype.listen = function () {
        var that = this;
        that.eventHandlers['itemClickHandler'] = function (event) { that.onItemClick.emit(event); };
        that.nativeElement.addEventListener('itemClick', that.eventHandlers['itemClickHandler']);
        that.eventHandlers['showHandler'] = function (event) { that.onShow.emit(event); };
        that.nativeElement.addEventListener('show', that.eventHandlers['showHandler']);
        that.eventHandlers['hideHandler'] = function (event) { that.onHide.emit(event); };
        that.nativeElement.addEventListener('hide', that.eventHandlers['hideHandler']);
        that.eventHandlers['selectHandler'] = function (event) { that.onSelect.emit(event); };
        that.nativeElement.addEventListener('select', that.eventHandlers['selectHandler']);
        that.eventHandlers['unselectHandler'] = function (event) { that.onUnselect.emit(event); };
        that.nativeElement.addEventListener('unselect', that.eventHandlers['unselectHandler']);
        that.eventHandlers['rangeSelectionChangedHandler'] = function (event) { that.onRangeSelectionChanged.emit(event); };
        that.nativeElement.addEventListener('rangeSelectionChanged', that.eventHandlers['rangeSelectionChangedHandler']);
        that.eventHandlers['rangeSelectionChangingHandler'] = function (event) { that.onRangeSelectionChanging.emit(event); };
        that.nativeElement.addEventListener('rangeSelectionChanging', that.eventHandlers['rangeSelectionChangingHandler']);
        that.eventHandlers['refreshBeginHandler'] = function (event) { that.onRefreshBegin.emit(event); };
        that.nativeElement.addEventListener('refreshBegin', that.eventHandlers['refreshBeginHandler']);
        that.eventHandlers['refreshEndHandler'] = function (event) { that.onRefreshEnd.emit(event); };
        that.nativeElement.addEventListener('refreshEnd', that.eventHandlers['refreshEndHandler']);
        that.eventHandlers['resizeBeginHandler'] = function (event) { that.onResizeBegin.emit(event); };
        that.nativeElement.addEventListener('resizeBegin', that.eventHandlers['resizeBeginHandler']);
        that.eventHandlers['resizeEndHandler'] = function (event) { that.onResizeEnd.emit(event); };
        that.nativeElement.addEventListener('resizeEnd', that.eventHandlers['resizeEndHandler']);
    };
    /** @description Remove event listeners. */
    ThreeDChartComponent.prototype.unlisten = function () {
        var that = this;
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
    };
    ThreeDChartComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
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
    return ThreeDChartComponent;
}(BaseElement));

var ThreeDChartModule = /** @class */ (function () {
    function ThreeDChartModule() {
    }
    ThreeDChartModule = __decorate([
        NgModule({
            declarations: [ThreeDChartComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            exports: [ThreeDChartComponent]
        })
    ], ThreeDChartModule);
    return ThreeDChartModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { Smart, ThreeDChartComponent, ThreeDChartModule, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-threedchart.js.map
