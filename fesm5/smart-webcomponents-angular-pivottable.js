
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.pivottable';

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

var PivotTableComponent = /** @class */ (function (_super) {
    __extends(PivotTableComponent, _super);
    function PivotTableComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        /** @description This event is triggered when a cell has been clicked.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	dataField, 	row)
        *   dataField - The data field of the cell's dynamic column.
        *   row - The data of the cell's row.
        */
        _this.onCellClick = new EventEmitter();
        /** @description This event is triggered when the selection is changed.
        *  @param event. The custom event. 	*/
        _this.onChange = new EventEmitter();
        /** @description This event is triggered when a summary column header cell has been clicked.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	columnDefinition, 	dataField)
        *   columnDefinition - An object detailing the clicked dynamic column.
        *   dataField - The data field of the cell's original column.
        */
        _this.onColumnClick = new EventEmitter();
        /** @description This event is triggered when a filtering-related action is made.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	action, 	filters)
        *   action - The filtering action. Possible actions: 'add', 'remove'.
        *   filters - The added filters. Only when action is 'add'.
        */
        _this.onFilter = new EventEmitter();
        /** @description This event is triggered when a column header cell has been clicked.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	columns)
        *   columns - An array with information about the dynamic columns the PivotTable has been sorted by.
        */
        _this.onSort = new EventEmitter();
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    PivotTableComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('smart-pivot-table');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(PivotTableComponent.prototype, "animation", {
        /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
        get: function () {
            return this.nativeElement ? this.nativeElement.animation : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.animation = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PivotTableComponent.prototype, "columnReorder", {
        /** @description Sets or gets whether the reordering of columns is enabled. */
        get: function () {
            return this.nativeElement ? this.nativeElement.columnReorder : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.columnReorder = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PivotTableComponent.prototype, "columns", {
        /** @description Describes the columns of the PivotTable's original tabular data. Based on these settings and the data source, the actual columns of the PivotTable are dynamically generated. */
        get: function () {
            return this.nativeElement ? this.nativeElement.columns : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.columns = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PivotTableComponent.prototype, "columnTotals", {
        /** @description Sets or gets whether to show total columns for each pivot data point. When enabled, all summary columns must have the same summary function set by which total columns are calculated. */
        get: function () {
            return this.nativeElement ? this.nativeElement.columnTotals : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.columnTotals = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PivotTableComponent.prototype, "columnTotalsPosition", {
        /** @description Sets or gets the position of total columns (shown when columnTotals is enabled). */
        get: function () {
            return this.nativeElement ? this.nativeElement.columnTotalsPosition : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.columnTotalsPosition = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PivotTableComponent.prototype, "conditionalFormatting", {
        /** @description Sets or gets details about conditional formatting to be applied to the PivotTable's cells. */
        get: function () {
            return this.nativeElement ? this.nativeElement.conditionalFormatting : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.conditionalFormatting = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PivotTableComponent.prototype, "dataSource", {
        /** @description Determines the original tabular data source of the PivotTable. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dataSource : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dataSource = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PivotTableComponent.prototype, "designer", {
        /** @description Sets or gets whether to display the PivotTable's designer alongside the table itself. The designer allows for configuring column settings and applying filtering. */
        get: function () {
            return this.nativeElement ? this.nativeElement.designer : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.designer = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PivotTableComponent.prototype, "designerPosition", {
        /** @description Sets or gets the position of the PivotTable's designer (shown when designer is enabled). */
        get: function () {
            return this.nativeElement ? this.nativeElement.designerPosition : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.designerPosition = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PivotTableComponent.prototype, "disabled", {
        /** @description Disables the interaction with the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.disabled : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disabled = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PivotTableComponent.prototype, "drillDown", {
        /** @description If enabled, shows the original tabular data that has been aggregated in a PivotTable summary cell when the cell is double-clicked or F2 is pressed. */
        get: function () {
            return this.nativeElement ? this.nativeElement.drillDown : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.drillDown = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PivotTableComponent.prototype, "freezeHeader", {
        /** @description Sets or gets whether the PivotTable's column header is sticky/frozen. */
        get: function () {
            return this.nativeElement ? this.nativeElement.freezeHeader : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.freezeHeader = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PivotTableComponent.prototype, "getDefaultSummaryFunction", {
        /** @description A callback function that returns the default summary function of a summary column when it is dynamically assigned as such (e.g. by drag-drop in the designer). */
        get: function () {
            return this.nativeElement ? this.nativeElement.getDefaultSummaryFunction : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.getDefaultSummaryFunction = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PivotTableComponent.prototype, "grandTotal", {
        /** @description Sets or gets whether to show a Grand total row aggregating the data of all rows. */
        get: function () {
            return this.nativeElement ? this.nativeElement.grandTotal : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.grandTotal = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PivotTableComponent.prototype, "groupLayout", {
        /** @description Sets or gets the way row nesting (based on rowGroup columns) is displayed. */
        get: function () {
            return this.nativeElement ? this.nativeElement.groupLayout : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.groupLayout = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PivotTableComponent.prototype, "keyboardNavigation", {
        /** @description Sets or gets whether navigation with the keyboard is enabled in the PivotTable. */
        get: function () {
            return this.nativeElement ? this.nativeElement.keyboardNavigation : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.keyboardNavigation = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PivotTableComponent.prototype, "locale", {
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
    Object.defineProperty(PivotTableComponent.prototype, "messages", {
        /** @description Sets or gets an object specifying strings used in the element that can be localized. Used in conjunction with the property locale.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.messages : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.messages = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PivotTableComponent.prototype, "onCellRender", {
        /** @description A callback function executed each time a PivotTable cell is rendered. */
        get: function () {
            return this.nativeElement ? this.nativeElement.onCellRender : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.onCellRender = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PivotTableComponent.prototype, "onColumnRender", {
        /** @description A callback function executed each time a PivotTable column header cell is rendered. */
        get: function () {
            return this.nativeElement ? this.nativeElement.onColumnRender : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.onColumnRender = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PivotTableComponent.prototype, "onInit", {
        /** @description A callback function executed when the PivotTable is being initialized. */
        get: function () {
            return this.nativeElement ? this.nativeElement.onInit : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.onInit = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PivotTableComponent.prototype, "rightToLeft", {
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
    Object.defineProperty(PivotTableComponent.prototype, "rowTotals", {
        /** @description Sets or gets whether to show row total columns for each summary column. */
        get: function () {
            return this.nativeElement ? this.nativeElement.rowTotals : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.rowTotals = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PivotTableComponent.prototype, "rowTotalsPosition", {
        /** @description Sets or gets the position of row total columns (shown when rowTotals is enabled). */
        get: function () {
            return this.nativeElement ? this.nativeElement.rowTotalsPosition : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.rowTotalsPosition = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PivotTableComponent.prototype, "selection", {
        /** @description Sets or gets whether row selection (via checkboxes) is enabled. */
        get: function () {
            return this.nativeElement ? this.nativeElement.selection : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.selection = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PivotTableComponent.prototype, "selectionMode", {
        /** @description Sets or gets the selection mode. Only applicable when selection is enabled. */
        get: function () {
            return this.nativeElement ? this.nativeElement.selectionMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.selectionMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PivotTableComponent.prototype, "sortMode", {
        /** @description Determines the sorting mode of the PivotTable. */
        get: function () {
            return this.nativeElement ? this.nativeElement.sortMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.sortMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PivotTableComponent.prototype, "theme", {
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
    Object.defineProperty(PivotTableComponent.prototype, "toolbar", {
        /** @description Sets or gets whether the PivotTable's toolbar is shown. It contains two breadcrumb components that allow the modification of the row group and pivot columns, as well as the "Conditional Formatting" and "Fields" buttons that open a dialog with additional settings. */
        get: function () {
            return this.nativeElement ? this.nativeElement.toolbar : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.toolbar = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PivotTableComponent.prototype, "tooltip", {
        /** @description Sets or gets whether when hovering a cell with truncated content, a tooltip with the full content will be shown. */
        get: function () {
            return this.nativeElement ? this.nativeElement.tooltip : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.tooltip = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /** @description Adds a filter to a specific column.
    * @param {string} dataField. The column's data field.
    * @param {any} filter. FilterGroup object.
    */
    PivotTableComponent.prototype.addFilter = function (dataField, filter) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.addFilter(dataField, filter);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.addFilter(dataField, filter);
            });
        }
    };
    /** @description Clears applied filters.
    */
    PivotTableComponent.prototype.clearFilters = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearFilters();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.clearFilters();
            });
        }
    };
    /** @description Clears selection.
    */
    PivotTableComponent.prototype.clearSelection = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearSelection();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.clearSelection();
            });
        }
    };
    /** @description Clears the PivotTable sorting.
    */
    PivotTableComponent.prototype.clearSort = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearSort();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.clearSort();
            });
        }
    };
    /** @description Collapses all rows (when multiple row groups are applied).
    */
    PivotTableComponent.prototype.collapseAllRows = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapseAllRows();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.collapseAllRows();
            });
        }
    };
    /** @description Collapses a row (when multiple row groups are applied).
    * @param {string | number} rowId. The id of the row to collapse. Can be retrieved from the <strong>rows</strong> collection.
    */
    PivotTableComponent.prototype.collapseRow = function (rowId) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapseRow(rowId);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.collapseRow(rowId);
            });
        }
    };
    /** @description Expands all rows (when multiple row groups are applied).
    */
    PivotTableComponent.prototype.expandAllRows = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.expandAllRows();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.expandAllRows();
            });
        }
    };
    /** @description Expands a row (when multiple row groups are applied).
    * @param {string | number} rowId. The id of the row to expand. Can be retrieved from the <strong>rows</strong> collection.
    */
    PivotTableComponent.prototype.expandRow = function (rowId) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.expandRow(rowId);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.expandRow(rowId);
            });
        }
    };
    /** @description Exports the PivotTable's data.
    * @param {string} dataFormat. The file format to export to. Supported formats: 'csv', 'html', 'json', 'pdf', 'tsv', 'xlsx', 'xml'.
    * @param {string} fileName?. The name of the file to export to
    * @param {Function} callback?. A callback function to pass the exported data to (if fileName is not provided)
    * @returns {any}
  */
    PivotTableComponent.prototype.exportData = function (dataFormat, fileName, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.exportData(dataFormat, fileName, callback);
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
    /** @description Returns the current dynamic pivot columns.
    * @returns {any}
  */
    PivotTableComponent.prototype.getDynamicColumns = function () {
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getDynamicColumns();
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
    /** @description Returns an array of selected row ids.
    * @returns {(string | number)[]}
  */
    PivotTableComponent.prototype.getSelection = function () {
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
    /** @description Refreshes the PivotTable.
    */
    PivotTableComponent.prototype.refresh = function () {
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
    /** @description Removes filters applied to a specific column.
    * @param {string} dataField. The column's data field.
    */
    PivotTableComponent.prototype.removeFilter = function (dataField) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeFilter(dataField);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.removeFilter(dataField);
            });
        }
    };
    /** @description Selects a row.
    * @param {string | number} rowId. The id of the row to select. Can be retrieved from the <strong>rows</strong> collection.
    */
    PivotTableComponent.prototype.select = function (rowId) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.select(rowId);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.select(rowId);
            });
        }
    };
    /** @description Sorts by a summary or group column.
    * @param {any} columnDefinition. The dynamic column's definition. Can be retrieved from the method <strong>getDynamicColumns</strong>.
    * @param {string} sortOrder?. Sort order. Possible values: 'asc' (ascending), 'desc' (descending), and null (removes sorting by column). If not provided, toggles the sorting.
    */
    PivotTableComponent.prototype.sortBy = function (columnDefinition, sortOrder) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.sortBy(columnDefinition, sortOrder);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.sortBy(columnDefinition, sortOrder);
            });
        }
    };
    /** @description Unselects a row.
    * @param {string | number} rowId. The id of the row to unselect. Can be retrieved from the <strong>rows</strong> collection.
    */
    PivotTableComponent.prototype.unselect = function (rowId) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.unselect(rowId);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.unselect(rowId);
            });
        }
    };
    Object.defineProperty(PivotTableComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    PivotTableComponent.prototype.ngOnInit = function () {
    };
    PivotTableComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        this.listen();
    };
    PivotTableComponent.prototype.ngOnDestroy = function () {
        this.unlisten();
    };
    PivotTableComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    /** @description Add event listeners. */
    PivotTableComponent.prototype.listen = function () {
        var that = this;
        that.eventHandlers['cellClickHandler'] = function (event) { that.onCellClick.emit(event); };
        that.nativeElement.addEventListener('cellClick', that.eventHandlers['cellClickHandler']);
        that.eventHandlers['changeHandler'] = function (event) { that.onChange.emit(event); };
        that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
        that.eventHandlers['columnClickHandler'] = function (event) { that.onColumnClick.emit(event); };
        that.nativeElement.addEventListener('columnClick', that.eventHandlers['columnClickHandler']);
        that.eventHandlers['filterHandler'] = function (event) { that.onFilter.emit(event); };
        that.nativeElement.addEventListener('filter', that.eventHandlers['filterHandler']);
        that.eventHandlers['sortHandler'] = function (event) { that.onSort.emit(event); };
        that.nativeElement.addEventListener('sort', that.eventHandlers['sortHandler']);
    };
    /** @description Remove event listeners. */
    PivotTableComponent.prototype.unlisten = function () {
        var that = this;
        if (that.eventHandlers['cellClickHandler']) {
            that.nativeElement.removeEventListener('cellClick', that.eventHandlers['cellClickHandler']);
        }
        if (that.eventHandlers['changeHandler']) {
            that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
        }
        if (that.eventHandlers['columnClickHandler']) {
            that.nativeElement.removeEventListener('columnClick', that.eventHandlers['columnClickHandler']);
        }
        if (that.eventHandlers['filterHandler']) {
            that.nativeElement.onfilterHandler = null;
        }
        if (that.eventHandlers['sortHandler']) {
            that.nativeElement.removeEventListener('sort', that.eventHandlers['sortHandler']);
        }
    };
    PivotTableComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], PivotTableComponent.prototype, "animation", null);
    __decorate([
        Input()
    ], PivotTableComponent.prototype, "columnReorder", null);
    __decorate([
        Input()
    ], PivotTableComponent.prototype, "columns", null);
    __decorate([
        Input()
    ], PivotTableComponent.prototype, "columnTotals", null);
    __decorate([
        Input()
    ], PivotTableComponent.prototype, "columnTotalsPosition", null);
    __decorate([
        Input()
    ], PivotTableComponent.prototype, "conditionalFormatting", null);
    __decorate([
        Input()
    ], PivotTableComponent.prototype, "dataSource", null);
    __decorate([
        Input()
    ], PivotTableComponent.prototype, "designer", null);
    __decorate([
        Input()
    ], PivotTableComponent.prototype, "designerPosition", null);
    __decorate([
        Input()
    ], PivotTableComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], PivotTableComponent.prototype, "drillDown", null);
    __decorate([
        Input()
    ], PivotTableComponent.prototype, "freezeHeader", null);
    __decorate([
        Input()
    ], PivotTableComponent.prototype, "getDefaultSummaryFunction", null);
    __decorate([
        Input()
    ], PivotTableComponent.prototype, "grandTotal", null);
    __decorate([
        Input()
    ], PivotTableComponent.prototype, "groupLayout", null);
    __decorate([
        Input()
    ], PivotTableComponent.prototype, "keyboardNavigation", null);
    __decorate([
        Input()
    ], PivotTableComponent.prototype, "locale", null);
    __decorate([
        Input()
    ], PivotTableComponent.prototype, "messages", null);
    __decorate([
        Input()
    ], PivotTableComponent.prototype, "onCellRender", null);
    __decorate([
        Input()
    ], PivotTableComponent.prototype, "onColumnRender", null);
    __decorate([
        Input()
    ], PivotTableComponent.prototype, "onInit", null);
    __decorate([
        Input()
    ], PivotTableComponent.prototype, "rightToLeft", null);
    __decorate([
        Input()
    ], PivotTableComponent.prototype, "rowTotals", null);
    __decorate([
        Input()
    ], PivotTableComponent.prototype, "rowTotalsPosition", null);
    __decorate([
        Input()
    ], PivotTableComponent.prototype, "selection", null);
    __decorate([
        Input()
    ], PivotTableComponent.prototype, "selectionMode", null);
    __decorate([
        Input()
    ], PivotTableComponent.prototype, "sortMode", null);
    __decorate([
        Input()
    ], PivotTableComponent.prototype, "theme", null);
    __decorate([
        Input()
    ], PivotTableComponent.prototype, "toolbar", null);
    __decorate([
        Input()
    ], PivotTableComponent.prototype, "tooltip", null);
    __decorate([
        Output()
    ], PivotTableComponent.prototype, "onCellClick", void 0);
    __decorate([
        Output()
    ], PivotTableComponent.prototype, "onChange", void 0);
    __decorate([
        Output()
    ], PivotTableComponent.prototype, "onColumnClick", void 0);
    __decorate([
        Output()
    ], PivotTableComponent.prototype, "onFilter", void 0);
    __decorate([
        Output()
    ], PivotTableComponent.prototype, "onSort", void 0);
    PivotTableComponent = __decorate([
        Directive({
            selector: 'smart-pivot-table, [smart-pivot-table]'
        })
    ], PivotTableComponent);
    return PivotTableComponent;
}(BaseElement));

var PivotTableModule = /** @class */ (function () {
    function PivotTableModule() {
    }
    PivotTableModule = __decorate([
        NgModule({
            declarations: [PivotTableComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            exports: [PivotTableComponent]
        })
    ], PivotTableModule);
    return PivotTableModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { PivotTableComponent, PivotTableModule, Smart, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-pivottable.js.map
