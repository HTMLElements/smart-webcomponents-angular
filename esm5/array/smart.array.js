import * as tslib_1 from "tslib";
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Smart } from './smart.element';
var ArrayComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ArrayComponent, _super);
    function ArrayComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        /** @description This event is triggered when a visible row or column has been added or removed.
        *  @param event. The custom event. 	*/
        _this.onArraySizeChange = new EventEmitter();
        /** @description This event is triggered when the value of the Array is changed.
        *  @param event. The custom event. 	*/
        _this.onChange = new EventEmitter();
        /** @description This event is triggered when a dimension has been added or removed.
        *  @param event. The custom event. 	*/
        _this.onDimensionChange = new EventEmitter();
        /** @description This event is triggered when an Array element has been clicked.
        *  @param event. The custom event. 	*/
        _this.onElementClick = new EventEmitter();
        /** @description This event is triggered when the Array is scrolled with one of the scrollbars.
        *  @param event. The custom event. 	*/
        _this.onScroll = new EventEmitter();
        /** @description This event is triggered when the column width or the row height has been changed.
        *  @param event. The custom event. 	*/
        _this.onSizeChange = new EventEmitter();
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    ArrayComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('smart-array');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(ArrayComponent.prototype, "animation", {
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
    Object.defineProperty(ArrayComponent.prototype, "arrayIndexingMode", {
        /** @description Sets or gets the indexing mode of the Array. */
        get: function () {
            return this.nativeElement ? this.nativeElement.arrayIndexingMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.arrayIndexingMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArrayComponent.prototype, "changeProperty", {
        /** @description A callback function that is called when the width, height or disabled properties of an inner element need to be updated. Applicable only when type is 'custom'. */
        get: function () {
            return this.nativeElement ? this.nativeElement.changeProperty : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.changeProperty = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArrayComponent.prototype, "columns", {
        /** @description Sets or gets the number of visible columns in the Array. */
        get: function () {
            return this.nativeElement ? this.nativeElement.columns : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.columns = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArrayComponent.prototype, "customWidgetDefaultValue", {
        /** @description Sets or gets the default value of inner elements when type is 'custom'. */
        get: function () {
            return this.nativeElement ? this.nativeElement.customWidgetDefaultValue : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.customWidgetDefaultValue = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArrayComponent.prototype, "dimensions", {
        /** @description Sets or gets the dimensions of the Array. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dimensions : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dimensions = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArrayComponent.prototype, "disabled", {
        /** @description Sets or gets disabled state of the Array. */
        get: function () {
            return this.nativeElement ? this.nativeElement.disabled : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disabled = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArrayComponent.prototype, "elementHeight", {
        /** @description Sets or gets the height of Array elements (row height). */
        get: function () {
            return this.nativeElement ? this.nativeElement.elementHeight : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.elementHeight = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArrayComponent.prototype, "elementTemplate", {
        /** @description A callback function that can be used for applying settings to element widgets. When type is 'custom', widgets have to be initialized in this callback function. */
        get: function () {
            return this.nativeElement ? this.nativeElement.elementTemplate : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.elementTemplate = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArrayComponent.prototype, "elementWidth", {
        /** @description Sets or gets the width of Array elements (column width). */
        get: function () {
            return this.nativeElement ? this.nativeElement.elementWidth : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.elementWidth = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArrayComponent.prototype, "getElementValue", {
        /** @description A callback function that can be used for getting the value of element widgets. */
        get: function () {
            return this.nativeElement ? this.nativeElement.getElementValue : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.getElementValue = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArrayComponent.prototype, "indexerHeight", {
        /** @description Sets or gets the height of indexers. */
        get: function () {
            return this.nativeElement ? this.nativeElement.indexerHeight : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.indexerHeight = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArrayComponent.prototype, "indexerWidth", {
        /** @description Sets or gets the width of indexers. */
        get: function () {
            return this.nativeElement ? this.nativeElement.indexerWidth : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.indexerWidth = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArrayComponent.prototype, "locale", {
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
    Object.defineProperty(ArrayComponent.prototype, "localizeFormatFunction", {
        /** @description Callback, related to localization module.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.localizeFormatFunction : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.localizeFormatFunction = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArrayComponent.prototype, "messages", {
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
    Object.defineProperty(ArrayComponent.prototype, "readonly", {
        /** @description If the element is readonly, users cannot interact with it. */
        get: function () {
            return this.nativeElement ? this.nativeElement.readonly : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.readonly = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArrayComponent.prototype, "rows", {
        /** @description Sets or gets the number of visible rows in the Array. */
        get: function () {
            return this.nativeElement ? this.nativeElement.rows : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.rows = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArrayComponent.prototype, "setElementValue", {
        /** @description A callback function that can be used for setting the value of element widgets. */
        get: function () {
            return this.nativeElement ? this.nativeElement.setElementValue : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.setElementValue = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArrayComponent.prototype, "showHorizontalScrollbar", {
        /** @description Sets or gets whether to display the horizontal scrollbar. */
        get: function () {
            return this.nativeElement ? this.nativeElement.showHorizontalScrollbar : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.showHorizontalScrollbar = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArrayComponent.prototype, "showIndexDisplay", {
        /** @description Sets or gets whether to display the array indexers. */
        get: function () {
            return this.nativeElement ? this.nativeElement.showIndexDisplay : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.showIndexDisplay = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArrayComponent.prototype, "showSelection", {
        /** @description Sets or gets whether to highlight selected elements. */
        get: function () {
            return this.nativeElement ? this.nativeElement.showSelection : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.showSelection = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArrayComponent.prototype, "showVerticalScrollbar", {
        /** @description Sets or gets whether to display the vertical scrollbar. */
        get: function () {
            return this.nativeElement ? this.nativeElement.showVerticalScrollbar : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.showVerticalScrollbar = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArrayComponent.prototype, "theme", {
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
    Object.defineProperty(ArrayComponent.prototype, "type", {
        /** @description Sets or gets the data type and element widgets to be used in the Array. */
        get: function () {
            return this.nativeElement ? this.nativeElement.type : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.type = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArrayComponent.prototype, "unfocusable", {
        /** @description If is set to true, the element cannot be focused. */
        get: function () {
            return this.nativeElement ? this.nativeElement.unfocusable : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.unfocusable = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArrayComponent.prototype, "value", {
        /** @description Sets or gets the value of the Array. */
        get: function () {
            return this.nativeElement ? this.nativeElement.value : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.value = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /** @description Adds a dimension to the array. Note: when adding multiple dimensions simultaneously, it is recommended to do so by dynamically setting the dimensions property.
    */
    ArrayComponent.prototype.addDimension = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.addDimension();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.addDimension();
            });
        }
    };
    /** @description Clears the selection.
    */
    ArrayComponent.prototype.clearSelection = function () {
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
    /** @description Copies the value of an Array element to the clipboard.
    * @param {number} Rowvisibleindex. The visible index of the row (y coordinate) of the element.
    * @param {number} Columnvisibleindex. The visible index of the column (x coordinate) of the element.
    */
    ArrayComponent.prototype.copyElementValueToClipboard = function (Rowvisibleindex, Columnvisibleindex) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.copyElementValueToClipboard(Rowvisibleindex, Columnvisibleindex);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.copyElementValueToClipboard(Rowvisibleindex, Columnvisibleindex);
            });
        }
    };
    /** @description Deletes a column in the value array.
    * @param {number} Columnindex. Index of the column to be deleted.
    */
    ArrayComponent.prototype.deleteColumn = function (Columnindex) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.deleteColumn(Columnindex);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.deleteColumn(Columnindex);
            });
        }
    };
    /** @description Deletes a row in the value array.
    * @param {number} Rowindex. Index of the row to be deleted.
    */
    ArrayComponent.prototype.deleteRow = function (Rowindex) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.deleteRow(Rowindex);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.deleteRow(Rowindex);
            });
        }
    };
    /** @description Empties the value array.
    */
    ArrayComponent.prototype.emptyArray = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.emptyArray();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.emptyArray();
            });
        }
    };
    /** @description Designates the end of a selection started with the method startSelection.
    * @param {number} Rowboundindex. The bound index of the row (y coordinate) to end the selection to.
    * @param {number} Columnboundindex. The bound index of the column (x coordinate) to end the selection to.
    */
    ArrayComponent.prototype.endSelection = function (Rowboundindex, Columnboundindex) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.endSelection(Rowboundindex, Columnboundindex);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.endSelection(Rowboundindex, Columnboundindex);
            });
        }
    };
    /** @description Returns the HTML element at the specified visible row and column coordinates of the Array.
    * @param {number} RowVisibleIndex. The visible index of the row (y coordinate) of the element.
    * @param {number} ColumnVisibleIndex. The visible index of the column (x coordinate) of the element.
    * @returns {HTMLElement}
  */
    ArrayComponent.prototype.getElement = function (RowVisibleIndex, ColumnVisibleIndex) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getElement(RowVisibleIndex, ColumnVisibleIndex);
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
    /** @description Returns an object with the values of the Array element width and height.
    * @returns {any}
  */
    ArrayComponent.prototype.getElementSize = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getElementSize();
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
    /** @description Gets an array with the values of all indexers.
    * @returns {any[]}
  */
    ArrayComponent.prototype.getIndexerValue = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getIndexerValue();
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
    /** @description Returns an HTML element from the Array at the specified page coordinates and other information about this element.
    * @param {number} Pagexcoordinate.
    * @param {number} Pageycoordinate.
    * @returns {any}
  */
    ArrayComponent.prototype.hitTest = function (Pagexcoordinate, Pageycoordinate) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.hitTest(Pagexcoordinate, Pageycoordinate);
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
    /** @description Inserts a column in the value array before the specified column. The new column is filled with default values.
    * @param {number} Columnindex. Index of the column to add a new column before.
    */
    ArrayComponent.prototype.insertColumnBefore = function (Columnindex) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertColumnBefore(Columnindex);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.insertColumnBefore(Columnindex);
            });
        }
    };
    /** @description Inserts a row in the value array before the specified row. The new row is filled with default values.
    * @param {number} Rowindex. Index of the row to add a new row before.
    */
    ArrayComponent.prototype.insertRowBefore = function (Rowindex) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertRowBefore(Rowindex);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.insertRowBefore(Rowindex);
            });
        }
    };
    /** @description Sets all value array members to the default value.
    */
    ArrayComponent.prototype.reinitializeArray = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.reinitializeArray();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.reinitializeArray();
            });
        }
    };
    /** @description Removes a dimension from the array. Note: when removing multiple dimensions simultaneously, it is recommended to do so by dynamically setting the dimensions property.
    */
    ArrayComponent.prototype.removeDimension = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeDimension();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.removeDimension();
            });
        }
    };
    /** @description Sets the array's type to 'none'.
    */
    ArrayComponent.prototype.reset = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.reset();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.reset();
            });
        }
    };
    /** @description Resizes Array elements (changes both the column width and the row height).
    * @param {number} Elementwidth. The new element (column) width.
    * @param {number} Elementheight. The new element (row) height.
    */
    ArrayComponent.prototype.resizeElement = function (Elementwidth, Elementheight) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.resizeElement(Elementwidth, Elementheight);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.resizeElement(Elementwidth, Elementheight);
            });
        }
    };
    /** @description Selects all members of the array.
    */
    ArrayComponent.prototype.selectAll = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.selectAll();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.selectAll();
            });
        }
    };
    /** @description Selects an element with the passed row and column bound indexes.
    * @param {number} Rowboundindex.
    * @param {number} Columnboundindex.
    */
    ArrayComponent.prototype.selectElement = function (Rowboundindex, Columnboundindex) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.selectElement(Rowboundindex, Columnboundindex);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.selectElement(Rowboundindex, Columnboundindex);
            });
        }
    };
    /** @description Sets the column (element) width.
    * @param {number} Columnwidth. The new column width.
    */
    ArrayComponent.prototype.setColumnWidth = function (Columnwidth) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.setColumnWidth(Columnwidth);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.setColumnWidth(Columnwidth);
            });
        }
    };
    /** @description Sets the default value of array members.
    * @param {any} Defaultvalue. The new default value. Its data type should correspond to the <strong>type</strong> of the Array.
    */
    ArrayComponent.prototype.setDefaultValue = function (Defaultvalue) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.setDefaultValue(Defaultvalue);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.setDefaultValue(Defaultvalue);
            });
        }
    };
    /** @description Sets the value of one or more Array indexers.
    * @param {any[]} Settings. An array of objects with the fields index and value.
    */
    ArrayComponent.prototype.setIndexerValue = function (Settings) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.setIndexerValue(Settings);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.setIndexerValue(Settings);
            });
        }
    };
    /** @description Sets the row (element) height.
    * @param {number} Rowheight. The new row height.
    */
    ArrayComponent.prototype.setRowHeight = function (Rowheight) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.setRowHeight(Rowheight);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.setRowHeight(Rowheight);
            });
        }
    };
    /** @description Makes the last array member visible.
    */
    ArrayComponent.prototype.showLastElement = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.showLastElement();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.showLastElement();
            });
        }
    };
    /** @description Designates the start of a selection. To end a selection, call endSelection.
    * @param {number} Rowboundindex. The bound index of the row (y coordinate) to start the selection from.
    * @param {number} Columnboundindex. The bound index of the column (x coordinate) to start the selection from.
    */
    ArrayComponent.prototype.startSelection = function (Rowboundindex, Columnboundindex) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.startSelection(Rowboundindex, Columnboundindex);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.startSelection(Rowboundindex, Columnboundindex);
            });
        }
    };
    /** @description Increases or decreases the visual gap between Array elements.
    */
    ArrayComponent.prototype.toggleElementGap = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.toggleElementGap();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.toggleElementGap();
            });
        }
    };
    /** @description Transposes the array. Applicable only when dimensions is 2 (2D array).
    */
    ArrayComponent.prototype.transposeArray = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.transposeArray();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.transposeArray();
            });
        }
    };
    /** @description Sets or gets the value of the whole array or sets the value of a member of the array.
    * @param {any} Newvalue?. If the method is used for setting the value of the whole array, the expected value is an array. If it is used for setting the value of an array member, the value can be of any applicable type.
    * @param {number | number[]} Elementindexes?. If this parameter is passed, only the value of the array member with the provided dimension indexes is set. Dimension indexes that are not passed are considered to be 0.
    * @returns {any[]}
  */
    ArrayComponent.prototype.val = function (Newvalue, Elementindexes) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.val(Newvalue, Elementindexes);
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
    Object.defineProperty(ArrayComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    ArrayComponent.prototype.ngOnInit = function () {
    };
    ArrayComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        this.listen();
    };
    ArrayComponent.prototype.ngOnDestroy = function () {
        this.unlisten();
    };
    ArrayComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    /** @description Add event listeners. */
    ArrayComponent.prototype.listen = function () {
        var that = this;
        that.eventHandlers['arraySizeChangeHandler'] = function (event) { that.onArraySizeChange.emit(event); };
        that.nativeElement.addEventListener('arraySizeChange', that.eventHandlers['arraySizeChangeHandler']);
        that.eventHandlers['changeHandler'] = function (event) { that.onChange.emit(event); };
        that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
        that.eventHandlers['dimensionChangeHandler'] = function (event) { that.onDimensionChange.emit(event); };
        that.nativeElement.addEventListener('dimensionChange', that.eventHandlers['dimensionChangeHandler']);
        that.eventHandlers['elementClickHandler'] = function (event) { that.onElementClick.emit(event); };
        that.nativeElement.addEventListener('elementClick', that.eventHandlers['elementClickHandler']);
        that.eventHandlers['scrollHandler'] = function (event) { that.onScroll.emit(event); };
        that.nativeElement.addEventListener('scroll', that.eventHandlers['scrollHandler']);
        that.eventHandlers['sizeChangeHandler'] = function (event) { that.onSizeChange.emit(event); };
        that.nativeElement.addEventListener('sizeChange', that.eventHandlers['sizeChangeHandler']);
    };
    /** @description Remove event listeners. */
    ArrayComponent.prototype.unlisten = function () {
        var that = this;
        if (that.eventHandlers['arraySizeChangeHandler']) {
            that.nativeElement.removeEventListener('arraySizeChange', that.eventHandlers['arraySizeChangeHandler']);
        }
        if (that.eventHandlers['changeHandler']) {
            that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
        }
        if (that.eventHandlers['dimensionChangeHandler']) {
            that.nativeElement.removeEventListener('dimensionChange', that.eventHandlers['dimensionChangeHandler']);
        }
        if (that.eventHandlers['elementClickHandler']) {
            that.nativeElement.removeEventListener('elementClick', that.eventHandlers['elementClickHandler']);
        }
        if (that.eventHandlers['scrollHandler']) {
            that.nativeElement.removeEventListener('scroll', that.eventHandlers['scrollHandler']);
        }
        if (that.eventHandlers['sizeChangeHandler']) {
            that.nativeElement.removeEventListener('sizeChange', that.eventHandlers['sizeChangeHandler']);
        }
    };
    ArrayComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    tslib_1.__decorate([
        Input()
    ], ArrayComponent.prototype, "animation", null);
    tslib_1.__decorate([
        Input()
    ], ArrayComponent.prototype, "arrayIndexingMode", null);
    tslib_1.__decorate([
        Input()
    ], ArrayComponent.prototype, "changeProperty", null);
    tslib_1.__decorate([
        Input()
    ], ArrayComponent.prototype, "columns", null);
    tslib_1.__decorate([
        Input()
    ], ArrayComponent.prototype, "customWidgetDefaultValue", null);
    tslib_1.__decorate([
        Input()
    ], ArrayComponent.prototype, "dimensions", null);
    tslib_1.__decorate([
        Input()
    ], ArrayComponent.prototype, "disabled", null);
    tslib_1.__decorate([
        Input()
    ], ArrayComponent.prototype, "elementHeight", null);
    tslib_1.__decorate([
        Input()
    ], ArrayComponent.prototype, "elementTemplate", null);
    tslib_1.__decorate([
        Input()
    ], ArrayComponent.prototype, "elementWidth", null);
    tslib_1.__decorate([
        Input()
    ], ArrayComponent.prototype, "getElementValue", null);
    tslib_1.__decorate([
        Input()
    ], ArrayComponent.prototype, "indexerHeight", null);
    tslib_1.__decorate([
        Input()
    ], ArrayComponent.prototype, "indexerWidth", null);
    tslib_1.__decorate([
        Input()
    ], ArrayComponent.prototype, "locale", null);
    tslib_1.__decorate([
        Input()
    ], ArrayComponent.prototype, "localizeFormatFunction", null);
    tslib_1.__decorate([
        Input()
    ], ArrayComponent.prototype, "messages", null);
    tslib_1.__decorate([
        Input()
    ], ArrayComponent.prototype, "readonly", null);
    tslib_1.__decorate([
        Input()
    ], ArrayComponent.prototype, "rows", null);
    tslib_1.__decorate([
        Input()
    ], ArrayComponent.prototype, "setElementValue", null);
    tslib_1.__decorate([
        Input()
    ], ArrayComponent.prototype, "showHorizontalScrollbar", null);
    tslib_1.__decorate([
        Input()
    ], ArrayComponent.prototype, "showIndexDisplay", null);
    tslib_1.__decorate([
        Input()
    ], ArrayComponent.prototype, "showSelection", null);
    tslib_1.__decorate([
        Input()
    ], ArrayComponent.prototype, "showVerticalScrollbar", null);
    tslib_1.__decorate([
        Input()
    ], ArrayComponent.prototype, "theme", null);
    tslib_1.__decorate([
        Input()
    ], ArrayComponent.prototype, "type", null);
    tslib_1.__decorate([
        Input()
    ], ArrayComponent.prototype, "unfocusable", null);
    tslib_1.__decorate([
        Input()
    ], ArrayComponent.prototype, "value", null);
    tslib_1.__decorate([
        Output()
    ], ArrayComponent.prototype, "onArraySizeChange", void 0);
    tslib_1.__decorate([
        Output()
    ], ArrayComponent.prototype, "onChange", void 0);
    tslib_1.__decorate([
        Output()
    ], ArrayComponent.prototype, "onDimensionChange", void 0);
    tslib_1.__decorate([
        Output()
    ], ArrayComponent.prototype, "onElementClick", void 0);
    tslib_1.__decorate([
        Output()
    ], ArrayComponent.prototype, "onScroll", void 0);
    tslib_1.__decorate([
        Output()
    ], ArrayComponent.prototype, "onSizeChange", void 0);
    ArrayComponent = tslib_1.__decorate([
        Directive({
            selector: 'smart-array, [smart-array]'
        })
    ], ArrayComponent);
    return ArrayComponent;
}(BaseElement));
export { ArrayComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQuYXJyYXkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zbWFydC13ZWJjb21wb25lbnRzLWFuZ3VsYXIvYXJyYXkvIiwic291cmNlcyI6WyJzbWFydC5hcnJheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUosT0FBTyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVyRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFReEM7SUFBb0MsMENBQVc7SUFDOUMsd0JBQVksR0FBc0I7UUFBbEMsWUFDQyxrQkFBTSxHQUFHLENBQUMsU0FFVjtRQUVPLG1CQUFhLEdBQVUsRUFBRSxDQUFDO1FBZ1FsQzs4Q0FDc0M7UUFDNUIsdUJBQWlCLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFNUU7OENBQ3NDO1FBQzVCLGNBQVEsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVuRTs4Q0FDc0M7UUFDNUIsdUJBQWlCLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFNUU7OENBQ3NDO1FBQzVCLG9CQUFjLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFekU7OENBQ3NDO1FBQzVCLGNBQVEsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVuRTs4Q0FDc0M7UUFDNUIsa0JBQVksR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQXpSdEUsS0FBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUMsYUFBc0IsQ0FBQzs7SUFDakQsQ0FBQztJQUtEOztPQUVHO0lBQ0ksd0NBQWUsR0FBdEIsVUFBdUIsVUFBZTtRQUFmLDJCQUFBLEVBQUEsZUFBZTtRQUNsQyxJQUFJLENBQUMsYUFBYSxHQUFVLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDckUsS0FBSyxJQUFJLFlBQVksSUFBSSxVQUFVLEVBQUU7WUFDbkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDN0Q7UUFDRCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDM0IsQ0FBQztJQUdELHNCQUFJLHFDQUFTO1FBRmIsNkdBQTZHO2FBRTdHO1lBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3RFLENBQUM7YUFDRCxVQUFjLEtBQWdCO1lBQzdCLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3ZFLENBQUM7OztPQUhBO0lBT0Qsc0JBQUksNkNBQWlCO1FBRnJCLGdFQUFnRTthQUVoRTtZQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzlFLENBQUM7YUFDRCxVQUFzQixLQUE2QjtZQUNsRCxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQy9FLENBQUM7OztPQUhBO0lBT0Qsc0JBQUksMENBQWM7UUFGbEIsbUxBQW1MO2FBRW5MO1lBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzNFLENBQUM7YUFDRCxVQUFtQixLQUFVO1lBQzVCLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzVFLENBQUM7OztPQUhBO0lBT0Qsc0JBQUksbUNBQU87UUFGWCw0RUFBNEU7YUFFNUU7WUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDcEUsQ0FBQzthQUNELFVBQVksS0FBYTtZQUN4QixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNyRSxDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLG9EQUF3QjtRQUY1QiwyRkFBMkY7YUFFM0Y7WUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNyRixDQUFDO2FBQ0QsVUFBNkIsS0FBVTtZQUN0QyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLHdCQUF3QixHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3RGLENBQUM7OztPQUhBO0lBT0Qsc0JBQUksc0NBQVU7UUFGZCw2REFBNkQ7YUFFN0Q7WUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDdkUsQ0FBQzthQUNELFVBQWUsS0FBYTtZQUMzQixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUN4RSxDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLG9DQUFRO1FBRlosNkRBQTZEO2FBRTdEO1lBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3JFLENBQUM7YUFDRCxVQUFhLEtBQWM7WUFDMUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDdEUsQ0FBQzs7O09BSEE7SUFPRCxzQkFBSSx5Q0FBYTtRQUZqQiwyRUFBMkU7YUFFM0U7WUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDMUUsQ0FBQzthQUNELFVBQWtCLEtBQWE7WUFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDM0UsQ0FBQzs7O09BSEE7SUFPRCxzQkFBSSwyQ0FBZTtRQUZuQixtTEFBbUw7YUFFbkw7WUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDNUUsQ0FBQzthQUNELFVBQW9CLEtBQVU7WUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDN0UsQ0FBQzs7O09BSEE7SUFPRCxzQkFBSSx3Q0FBWTtRQUZoQiw0RUFBNEU7YUFFNUU7WUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDekUsQ0FBQzthQUNELFVBQWlCLEtBQWE7WUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDMUUsQ0FBQzs7O09BSEE7SUFPRCxzQkFBSSwyQ0FBZTtRQUZuQixrR0FBa0c7YUFFbEc7WUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDNUUsQ0FBQzthQUNELFVBQW9CLEtBQVU7WUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDN0UsQ0FBQzs7O09BSEE7SUFPRCxzQkFBSSx5Q0FBYTtRQUZqQix3REFBd0Q7YUFFeEQ7WUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDMUUsQ0FBQzthQUNELFVBQWtCLEtBQWE7WUFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDM0UsQ0FBQzs7O09BSEE7SUFPRCxzQkFBSSx3Q0FBWTtRQUZoQix1REFBdUQ7YUFFdkQ7WUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDekUsQ0FBQzthQUNELFVBQWlCLEtBQWE7WUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDMUUsQ0FBQzs7O09BSEE7SUFPRCxzQkFBSSxrQ0FBTTtRQUZWLCtGQUErRjthQUUvRjtZQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNuRSxDQUFDO2FBQ0QsVUFBVyxLQUFhO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3BFLENBQUM7OztPQUhBO0lBT0Qsc0JBQUksa0RBQXNCO1FBRjFCLDhEQUE4RDthQUU5RDtZQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ25GLENBQUM7YUFDRCxVQUEyQixLQUFVO1lBQ3BDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsc0JBQXNCLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDcEYsQ0FBQzs7O09BSEE7SUFPRCxzQkFBSSxvQ0FBUTtRQUZaLHNKQUFzSjthQUV0SjtZQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNyRSxDQUFDO2FBQ0QsVUFBYSxLQUFVO1lBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3RFLENBQUM7OztPQUhBO0lBT0Qsc0JBQUksb0NBQVE7UUFGWiw4RUFBOEU7YUFFOUU7WUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDckUsQ0FBQzthQUNELFVBQWEsS0FBYztZQUMxQixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUN0RSxDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLGdDQUFJO1FBRlIseUVBQXlFO2FBRXpFO1lBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2pFLENBQUM7YUFDRCxVQUFTLEtBQWE7WUFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDbEUsQ0FBQzs7O09BSEE7SUFPRCxzQkFBSSwyQ0FBZTtRQUZuQixrR0FBa0c7YUFFbEc7WUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDNUUsQ0FBQzthQUNELFVBQW9CLEtBQVU7WUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDN0UsQ0FBQzs7O09BSEE7SUFPRCxzQkFBSSxtREFBdUI7UUFGM0IsNkVBQTZFO2FBRTdFO1lBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDcEYsQ0FBQzthQUNELFVBQTRCLEtBQWM7WUFDekMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNyRixDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLDRDQUFnQjtRQUZwQix1RUFBdUU7YUFFdkU7WUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUM3RSxDQUFDO2FBQ0QsVUFBcUIsS0FBYztZQUNsQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzlFLENBQUM7OztPQUhBO0lBT0Qsc0JBQUkseUNBQWE7UUFGakIsd0VBQXdFO2FBRXhFO1lBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzFFLENBQUM7YUFDRCxVQUFrQixLQUFjO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzNFLENBQUM7OztPQUhBO0lBT0Qsc0JBQUksaURBQXFCO1FBRnpCLDJFQUEyRTthQUUzRTtZQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2xGLENBQUM7YUFDRCxVQUEwQixLQUFjO1lBQ3ZDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMscUJBQXFCLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDbkYsQ0FBQzs7O09BSEE7SUFPRCxzQkFBSSxpQ0FBSztRQUZULCtFQUErRTthQUUvRTtZQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNsRSxDQUFDO2FBQ0QsVUFBVSxLQUFhO1lBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ25FLENBQUM7OztPQUhBO0lBT0Qsc0JBQUksZ0NBQUk7UUFGUiwyRkFBMkY7YUFFM0Y7WUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDakUsQ0FBQzthQUNELFVBQVMsS0FBZ0I7WUFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDbEUsQ0FBQzs7O09BSEE7SUFPRCxzQkFBSSx1Q0FBVztRQUZmLHFFQUFxRTthQUVyRTtZQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUN4RSxDQUFDO2FBQ0QsVUFBZ0IsS0FBYztZQUM3QixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUN6RSxDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLGlDQUFLO1FBRlQsd0RBQXdEO2FBRXhEO1lBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2xFLENBQUM7YUFDRCxVQUFVLEtBQVU7WUFDbkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDbkUsQ0FBQzs7O09BSEE7SUE2QkQ7TUFDRTtJQUNRLHFDQUFZLEdBQW5CO1FBQUEsaUJBVUM7UUFURyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckM7YUFFRDtZQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDO2dCQUM1QixLQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3RDLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRUo7TUFDRTtJQUNRLHVDQUFjLEdBQXJCO1FBQUEsaUJBVUM7UUFURyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDdkM7YUFFRDtZQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDO2dCQUM1QixLQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3hDLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRUo7OztNQUdFO0lBQ1Esb0RBQTJCLEdBQWxDLFVBQW1DLGVBQXVCLEVBQUUsa0JBQTBCO1FBQXRGLGlCQVVDO1FBVEcsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTtZQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLDJCQUEyQixDQUFDLGVBQWUsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1NBQ3ZGO2FBRUQ7WUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztnQkFDNUIsS0FBSSxDQUFDLGFBQWEsQ0FBQywyQkFBMkIsQ0FBQyxlQUFlLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztZQUN4RixDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUVKOztNQUVFO0lBQ1EscUNBQVksR0FBbkIsVUFBb0IsV0FBbUI7UUFBdkMsaUJBVUM7UUFURyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ2hEO2FBRUQ7WUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztnQkFDNUIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDakQsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFSjs7TUFFRTtJQUNRLGtDQUFTLEdBQWhCLFVBQWlCLFFBQWdCO1FBQWpDLGlCQVVDO1FBVEcsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTtZQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMxQzthQUVEO1lBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUM7Z0JBQzVCLEtBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzNDLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRUo7TUFDRTtJQUNRLG1DQUFVLEdBQWpCO1FBQUEsaUJBVUM7UUFURyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkM7YUFFRDtZQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDO2dCQUM1QixLQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3BDLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRUo7OztNQUdFO0lBQ1EscUNBQVksR0FBbkIsVUFBb0IsYUFBcUIsRUFBRSxnQkFBd0I7UUFBbkUsaUJBVUM7UUFURyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1NBQ3BFO2FBRUQ7WUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztnQkFDNUIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLGdCQUFnQixDQUFDLENBQUM7WUFDckUsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFSjs7OztJQUlHO0lBQ1UsbUNBQVUsR0FBdkIsVUFBd0IsZUFBZSxFQUFFLGtCQUFrQjs7Ozs7Ozt3QkFDcEQsaUJBQWlCLEdBQUc7NEJBQ2hCLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQSxPQUFPO2dDQUN0QixLQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztvQ0FDNUIsSUFBTSxNQUFNLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsZUFBZSxFQUFFLGtCQUFrQixDQUFDLENBQUM7b0NBQ2xGLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQTtnQ0FDbkIsQ0FBQyxDQUFDLENBQUM7NEJBQ1AsQ0FBQyxDQUFDLENBQUM7d0JBQ1AsQ0FBQyxDQUFDO3dCQUNhLHFCQUFNLGlCQUFpQixFQUFFLEVBQUE7O3dCQUFsQyxNQUFNLEdBQUcsU0FBeUI7d0JBRXhDLHNCQUFPLE1BQU0sRUFBQzs7OztLQUNqQjtJQUVKOztJQUVHO0lBQ1UsdUNBQWMsR0FBM0I7Ozs7Ozs7d0JBQ08saUJBQWlCLEdBQUc7NEJBQ2hCLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQSxPQUFPO2dDQUN0QixLQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztvQ0FDNUIsSUFBTSxNQUFNLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQ0FDbkQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO2dDQUNuQixDQUFDLENBQUMsQ0FBQzs0QkFDUCxDQUFDLENBQUMsQ0FBQzt3QkFDUCxDQUFDLENBQUM7d0JBQ2EscUJBQU0saUJBQWlCLEVBQUUsRUFBQTs7d0JBQWxDLE1BQU0sR0FBRyxTQUF5Qjt3QkFFeEMsc0JBQU8sTUFBTSxFQUFDOzs7O0tBQ2pCO0lBRUo7O0lBRUc7SUFDVSx3Q0FBZSxHQUE1Qjs7Ozs7Ozt3QkFDTyxpQkFBaUIsR0FBRzs0QkFDaEIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFBLE9BQU87Z0NBQ3RCLEtBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDO29DQUM1QixJQUFNLE1BQU0sR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsRUFBRSxDQUFDO29DQUNwRCxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7Z0NBQ25CLENBQUMsQ0FBQyxDQUFDOzRCQUNQLENBQUMsQ0FBQyxDQUFDO3dCQUNQLENBQUMsQ0FBQzt3QkFDYSxxQkFBTSxpQkFBaUIsRUFBRSxFQUFBOzt3QkFBbEMsTUFBTSxHQUFHLFNBQXlCO3dCQUV4QyxzQkFBTyxNQUFNLEVBQUM7Ozs7S0FDakI7SUFFSjs7OztJQUlHO0lBQ1UsZ0NBQU8sR0FBcEIsVUFBcUIsZUFBZSxFQUFFLGVBQWU7Ozs7Ozs7d0JBQzlDLGlCQUFpQixHQUFHOzRCQUNoQixPQUFPLElBQUksT0FBTyxDQUFDLFVBQUEsT0FBTztnQ0FDdEIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUM7b0NBQzVCLElBQU0sTUFBTSxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxlQUFlLENBQUMsQ0FBQztvQ0FDNUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO2dDQUNuQixDQUFDLENBQUMsQ0FBQzs0QkFDUCxDQUFDLENBQUMsQ0FBQzt3QkFDUCxDQUFDLENBQUM7d0JBQ2EscUJBQU0saUJBQWlCLEVBQUUsRUFBQTs7d0JBQWxDLE1BQU0sR0FBRyxTQUF5Qjt3QkFFeEMsc0JBQU8sTUFBTSxFQUFDOzs7O0tBQ2pCO0lBRUo7O01BRUU7SUFDUSwyQ0FBa0IsR0FBekIsVUFBMEIsV0FBbUI7UUFBN0MsaUJBVUM7UUFURyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDdEQ7YUFFRDtZQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDO2dCQUM1QixLQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3ZELENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRUo7O01BRUU7SUFDUSx3Q0FBZSxHQUF0QixVQUF1QixRQUFnQjtRQUF2QyxpQkFVQztRQVRHLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDaEQ7YUFFRDtZQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDO2dCQUM1QixLQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNqRCxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUVKO01BQ0U7SUFDUSwwQ0FBaUIsR0FBeEI7UUFBQSxpQkFVQztRQVRHLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBQzFDO2FBRUQ7WUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztnQkFDNUIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQzNDLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRUo7TUFDRTtJQUNRLHdDQUFlLEdBQXRCO1FBQUEsaUJBVUM7UUFURyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDeEM7YUFFRDtZQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDO2dCQUM1QixLQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3pDLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRUo7TUFDRTtJQUNRLDhCQUFLLEdBQVo7UUFBQSxpQkFVQztRQVRHLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUM5QjthQUVEO1lBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUM7Z0JBQzVCLEtBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDL0IsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFSjs7O01BR0U7SUFDUSxzQ0FBYSxHQUFwQixVQUFxQixZQUFvQixFQUFFLGFBQXFCO1FBQWhFLGlCQVVDO1FBVEcsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTtZQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsYUFBYSxDQUFDLENBQUM7U0FDakU7YUFFRDtZQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDO2dCQUM1QixLQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsYUFBYSxDQUFDLENBQUM7WUFDbEUsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFSjtNQUNFO0lBQ1Esa0NBQVMsR0FBaEI7UUFBQSxpQkFVQztRQVRHLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNsQzthQUVEO1lBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUM7Z0JBQzVCLEtBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDbkMsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFSjs7O01BR0U7SUFDUSxzQ0FBYSxHQUFwQixVQUFxQixhQUFxQixFQUFFLGdCQUF3QjtRQUFwRSxpQkFVQztRQVRHLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLGdCQUFnQixDQUFDLENBQUM7U0FDckU7YUFFRDtZQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDO2dCQUM1QixLQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztZQUN0RSxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUVKOztNQUVFO0lBQ1EsdUNBQWMsR0FBckIsVUFBc0IsV0FBbUI7UUFBekMsaUJBVUM7UUFURyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ2xEO2FBRUQ7WUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztnQkFDNUIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDbkQsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFSjs7TUFFRTtJQUNRLHdDQUFlLEdBQXRCLFVBQXVCLFlBQWlCO1FBQXhDLGlCQVVDO1FBVEcsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTtZQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNwRDthQUVEO1lBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUM7Z0JBQzVCLEtBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3JELENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRUo7O01BRUU7SUFDUSx3Q0FBZSxHQUF0QixVQUF1QixRQUFlO1FBQXRDLGlCQVVDO1FBVEcsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTtZQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNoRDthQUVEO1lBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUM7Z0JBQzVCLEtBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2pELENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRUo7O01BRUU7SUFDUSxxQ0FBWSxHQUFuQixVQUFvQixTQUFpQjtRQUFyQyxpQkFVQztRQVRHLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDOUM7YUFFRDtZQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDO2dCQUM1QixLQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMvQyxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUVKO01BQ0U7SUFDUSx3Q0FBZSxHQUF0QjtRQUFBLGlCQVVDO1FBVEcsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTtZQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3hDO2FBRUQ7WUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztnQkFDNUIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN6QyxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUVKOzs7TUFHRTtJQUNRLHVDQUFjLEdBQXJCLFVBQXNCLGFBQXFCLEVBQUUsZ0JBQXdCO1FBQXJFLGlCQVVDO1FBVEcsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTtZQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztTQUN0RTthQUVEO1lBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUM7Z0JBQzVCLEtBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ3ZFLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRUo7TUFDRTtJQUNRLHlDQUFnQixHQUF2QjtRQUFBLGlCQVVDO1FBVEcsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTtZQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDekM7YUFFRDtZQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDO2dCQUM1QixLQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDMUMsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFSjtNQUNFO0lBQ1EsdUNBQWMsR0FBckI7UUFBQSxpQkFVQztRQVRHLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN2QzthQUVEO1lBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUM7Z0JBQzVCLEtBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDeEMsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFSjs7OztJQUlHO0lBQ1UsNEJBQUcsR0FBaEIsVUFBaUIsUUFBUyxFQUFFLGNBQWU7Ozs7Ozs7d0JBQ3BDLGlCQUFpQixHQUFHOzRCQUNoQixPQUFPLElBQUksT0FBTyxDQUFDLFVBQUEsT0FBTztnQ0FDdEIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUM7b0NBQzVCLElBQU0sTUFBTSxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxjQUFjLENBQUMsQ0FBQztvQ0FDaEUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO2dDQUNuQixDQUFDLENBQUMsQ0FBQzs0QkFDUCxDQUFDLENBQUMsQ0FBQzt3QkFDUCxDQUFDLENBQUM7d0JBQ2EscUJBQU0saUJBQWlCLEVBQUUsRUFBQTs7d0JBQWxDLE1BQU0sR0FBRyxTQUF5Qjt3QkFFeEMsc0JBQU8sTUFBTSxFQUFDOzs7O0tBQ2pCO0lBR0osc0JBQUksc0NBQVU7YUFBZDtZQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNuRSxDQUFDOzs7T0FBQTtJQUVELGlDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUUsd0NBQWUsR0FBZjtRQUNFLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUVsQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFM0MsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRWYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBRWxELElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLGNBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEYsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELG9DQUFXLEdBQVg7UUFDQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELG9DQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUNqQyxJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7WUFDeEQsS0FBSyxJQUFNLFFBQVEsSUFBSSxPQUFPLEVBQUU7Z0JBQy9CLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsRUFBRTtvQkFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDO2lCQUM5RDthQUNEO1NBQ0Q7SUFDRixDQUFDO0lBRUQsd0NBQXdDO0lBQ2hDLCtCQUFNLEdBQWQ7UUFDTyxJQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLFVBQUMsS0FBa0IsSUFBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQzlHLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7UUFFckcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsR0FBRyxVQUFDLEtBQWtCLElBQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDNUYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1FBRW5GLElBQUksQ0FBQyxhQUFhLENBQUMsd0JBQXdCLENBQUMsR0FBRyxVQUFDLEtBQWtCLElBQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUM5RyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO1FBRXJHLElBQUksQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsR0FBRyxVQUFDLEtBQWtCLElBQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDeEcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7UUFFL0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsR0FBRyxVQUFDLEtBQWtCLElBQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDNUYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1FBRW5GLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsR0FBRyxVQUFDLEtBQWtCLElBQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDcEcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7SUFFNUYsQ0FBQztJQUVELDJDQUEyQztJQUNuQyxpQ0FBUSxHQUFoQjtRQUNPLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsd0JBQXdCLENBQUMsRUFBRTtZQUNqRCxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO1NBQ3hHO1FBRUQsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxFQUFFO1lBQ3hDLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztTQUN0RjtRQUVELElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFO1lBQ2pELElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7U0FDeEc7UUFFRCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsRUFBRTtZQUM5QyxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztTQUNsRztRQUVELElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsRUFBRTtZQUN4QyxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7U0FDdEY7UUFFRCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsRUFBRTtZQUM1QyxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztTQUM5RjtJQUVGLENBQUM7O2dCQWp5QmdCLFVBQVU7O0lBb0IzQjtRQURDLEtBQUssRUFBRTttREFHUDtJQU9EO1FBREMsS0FBSyxFQUFFOzJEQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7d0RBR1A7SUFPRDtRQURDLEtBQUssRUFBRTtpREFHUDtJQU9EO1FBREMsS0FBSyxFQUFFO2tFQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7b0RBR1A7SUFPRDtRQURDLEtBQUssRUFBRTtrREFHUDtJQU9EO1FBREMsS0FBSyxFQUFFO3VEQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7eURBR1A7SUFPRDtRQURDLEtBQUssRUFBRTtzREFHUDtJQU9EO1FBREMsS0FBSyxFQUFFO3lEQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7dURBR1A7SUFPRDtRQURDLEtBQUssRUFBRTtzREFHUDtJQU9EO1FBREMsS0FBSyxFQUFFO2dEQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7Z0VBR1A7SUFPRDtRQURDLEtBQUssRUFBRTtrREFHUDtJQU9EO1FBREMsS0FBSyxFQUFFO2tEQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7OENBR1A7SUFPRDtRQURDLEtBQUssRUFBRTt5REFHUDtJQU9EO1FBREMsS0FBSyxFQUFFO2lFQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7MERBR1A7SUFPRDtRQURDLEtBQUssRUFBRTt1REFHUDtJQU9EO1FBREMsS0FBSyxFQUFFOytEQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7K0NBR1A7SUFPRDtRQURDLEtBQUssRUFBRTs4Q0FHUDtJQU9EO1FBREMsS0FBSyxFQUFFO3FEQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7K0NBR1A7SUFPUztRQUFULE1BQU0sRUFBRTs2REFBbUU7SUFJbEU7UUFBVCxNQUFNLEVBQUU7b0RBQTBEO0lBSXpEO1FBQVQsTUFBTSxFQUFFOzZEQUFtRTtJQUlsRTtRQUFULE1BQU0sRUFBRTswREFBZ0U7SUFJL0Q7UUFBVCxNQUFNLEVBQUU7b0RBQTBEO0lBSXpEO1FBQVQsTUFBTSxFQUFFO3dEQUE4RDtJQTVSM0QsY0FBYztRQUoxQixTQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsNEJBQTRCO1NBQ3RDLENBQUM7T0FFVyxjQUFjLENBbXlCMUI7SUFBRCxxQkFBQztDQUFBLEFBbnlCRCxDQUFvQyxXQUFXLEdBbXlCOUM7U0FueUJZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcnJheSB9IGZyb20gJy4vLi4vaW5kZXgnO1xuaW1wb3J0IHsgQW5pbWF0aW9uLCBBcnJheUFycmF5SW5kZXhpbmdNb2RlLCBBcnJheVR5cGUsIEVsZW1lbnRSZW5kZXJNb2RlfSBmcm9tICcuLy4uL2luZGV4JztcbmltcG9ydCB7IENvbXBvbmVudCwgRGlyZWN0aXZlLCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgU2ltcGxlQ2hhbmdlcywgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VFbGVtZW50LCBTbWFydCB9IGZyb20gJy4vc21hcnQuZWxlbWVudCc7XG5leHBvcnQgeyBBbmltYXRpb24sIEFycmF5QXJyYXlJbmRleGluZ01vZGUsIEFycmF5VHlwZSwgRWxlbWVudFJlbmRlck1vZGV9IGZyb20gJy4vLi4vaW5kZXgnO1xuZXhwb3J0IHsgU21hcnQgfSBmcm9tICcuL3NtYXJ0LmVsZW1lbnQnO1xuZXhwb3J0IHsgQXJyYXkgfSBmcm9tICcuLy4uL2luZGV4JztcblxuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdzbWFydC1hcnJheSwgW3NtYXJ0LWFycmF5XSdcbn0pXG5cbmV4cG9ydCBjbGFzcyBBcnJheUNvbXBvbmVudCBleHRlbmRzIEJhc2VFbGVtZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG5cdGNvbnN0cnVjdG9yKHJlZjogRWxlbWVudFJlZjxBcnJheT4pIHtcblx0XHRzdXBlcihyZWYpO1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA9IHJlZi5uYXRpdmVFbGVtZW50IGFzIEFycmF5O1xuXHR9XG5cblx0cHJpdmF0ZSBldmVudEhhbmRsZXJzOiBhbnlbXSA9IFtdO1xuXG5cdHB1YmxpYyBuYXRpdmVFbGVtZW50OiBBcnJheTtcblx0LyoqIEBkZXNjcmlwdGlvbiBDcmVhdGVzIHRoZSBjb21wb25lbnQgb24gZGVtYW5kLlxuXHQgKiBAcGFyYW0gcHJvcGVydGllcyBBbiBvcHRpb25hbCBvYmplY3Qgb2YgcHJvcGVydGllcywgd2hpY2ggd2lsbCBiZSBhZGRlZCB0byB0aGUgdGVtcGxhdGUgYmluZGVkIG9uZXMuXG5cdCAqL1xuXHRwdWJsaWMgY3JlYXRlQ29tcG9uZW50KHByb3BlcnRpZXMgPSB7fSk6IGFueSB7XG4gICAgXHR0aGlzLm5hdGl2ZUVsZW1lbnQgPSA8QXJyYXk+ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc21hcnQtYXJyYXknKTtcblx0XHRmb3IgKGxldCBwcm9wZXJ0eU5hbWUgaW4gcHJvcGVydGllcykgeyBcbiBcdFx0XHR0aGlzLm5hdGl2ZUVsZW1lbnRbcHJvcGVydHlOYW1lXSA9IHByb3BlcnRpZXNbcHJvcGVydHlOYW1lXTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudDtcblx0fVxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgYW5pbWF0aW9uIG1vZGUuIEFuaW1hdGlvbiBpcyBkaXNhYmxlZCB3aGVuIHRoZSBwcm9wZXJ0eSBpcyBzZXQgdG8gJ25vbmUnICovXG5cdEBJbnB1dCgpXG5cdGdldCBhbmltYXRpb24oKTogQW5pbWF0aW9uIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmFuaW1hdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYW5pbWF0aW9uKHZhbHVlOiBBbmltYXRpb24pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYW5pbWF0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgaW5kZXhpbmcgbW9kZSBvZiB0aGUgQXJyYXkuICovXG5cdEBJbnB1dCgpXG5cdGdldCBhcnJheUluZGV4aW5nTW9kZSgpOiBBcnJheUFycmF5SW5kZXhpbmdNb2RlIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmFycmF5SW5kZXhpbmdNb2RlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBhcnJheUluZGV4aW5nTW9kZSh2YWx1ZTogQXJyYXlBcnJheUluZGV4aW5nTW9kZSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hcnJheUluZGV4aW5nTW9kZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBIGNhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIHdpZHRoLCBoZWlnaHQgb3IgZGlzYWJsZWQgcHJvcGVydGllcyBvZiBhbiBpbm5lciBlbGVtZW50IG5lZWQgdG8gYmUgdXBkYXRlZC4gQXBwbGljYWJsZSBvbmx5IHdoZW4gdHlwZSBpcyAnY3VzdG9tJy4gKi9cblx0QElucHV0KClcblx0Z2V0IGNoYW5nZVByb3BlcnR5KCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jaGFuZ2VQcm9wZXJ0eSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgY2hhbmdlUHJvcGVydHkodmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jaGFuZ2VQcm9wZXJ0eSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIG51bWJlciBvZiB2aXNpYmxlIGNvbHVtbnMgaW4gdGhlIEFycmF5LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgY29sdW1ucygpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sdW1ucyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgY29sdW1ucyh2YWx1ZTogbnVtYmVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbHVtbnMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSBkZWZhdWx0IHZhbHVlIG9mIGlubmVyIGVsZW1lbnRzIHdoZW4gdHlwZSBpcyAnY3VzdG9tJy4gKi9cblx0QElucHV0KClcblx0Z2V0IGN1c3RvbVdpZGdldERlZmF1bHRWYWx1ZSgpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY3VzdG9tV2lkZ2V0RGVmYXVsdFZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjdXN0b21XaWRnZXREZWZhdWx0VmFsdWUodmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jdXN0b21XaWRnZXREZWZhdWx0VmFsdWUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSBkaW1lbnNpb25zIG9mIHRoZSBBcnJheS4gKi9cblx0QElucHV0KClcblx0Z2V0IGRpbWVuc2lvbnMoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpbWVuc2lvbnMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRpbWVuc2lvbnModmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaW1lbnNpb25zID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyBkaXNhYmxlZCBzdGF0ZSBvZiB0aGUgQXJyYXkuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVkIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlZCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIGhlaWdodCBvZiBBcnJheSBlbGVtZW50cyAocm93IGhlaWdodCkuICovXG5cdEBJbnB1dCgpXG5cdGdldCBlbGVtZW50SGVpZ2h0KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5lbGVtZW50SGVpZ2h0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBlbGVtZW50SGVpZ2h0KHZhbHVlOiBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZWxlbWVudEhlaWdodCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBIGNhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHVzZWQgZm9yIGFwcGx5aW5nIHNldHRpbmdzIHRvIGVsZW1lbnQgd2lkZ2V0cy4gV2hlbiB0eXBlIGlzICdjdXN0b20nLCB3aWRnZXRzIGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgaW4gdGhpcyBjYWxsYmFjayBmdW5jdGlvbi4gKi9cblx0QElucHV0KClcblx0Z2V0IGVsZW1lbnRUZW1wbGF0ZSgpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZWxlbWVudFRlbXBsYXRlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBlbGVtZW50VGVtcGxhdGUodmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5lbGVtZW50VGVtcGxhdGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSB3aWR0aCBvZiBBcnJheSBlbGVtZW50cyAoY29sdW1uIHdpZHRoKS4gKi9cblx0QElucHV0KClcblx0Z2V0IGVsZW1lbnRXaWR0aCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZWxlbWVudFdpZHRoIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBlbGVtZW50V2lkdGgodmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5lbGVtZW50V2lkdGggPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQSBjYWxsYmFjayBmdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkIGZvciBnZXR0aW5nIHRoZSB2YWx1ZSBvZiBlbGVtZW50IHdpZGdldHMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBnZXRFbGVtZW50VmFsdWUoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmdldEVsZW1lbnRWYWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZ2V0RWxlbWVudFZhbHVlKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0RWxlbWVudFZhbHVlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgaGVpZ2h0IG9mIGluZGV4ZXJzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgaW5kZXhlckhlaWdodCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5kZXhlckhlaWdodCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgaW5kZXhlckhlaWdodCh2YWx1ZTogbnVtYmVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmluZGV4ZXJIZWlnaHQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSB3aWR0aCBvZiBpbmRleGVycy4gKi9cblx0QElucHV0KClcblx0Z2V0IGluZGV4ZXJXaWR0aCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5kZXhlcldpZHRoIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBpbmRleGVyV2lkdGgodmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5pbmRleGVyV2lkdGggPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSBsYW5ndWFnZS4gVXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZSBwcm9wZXJ0eSBtZXNzYWdlcy4gICovXG5cdEBJbnB1dCgpXG5cdGdldCBsb2NhbGUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxvY2FsZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbG9jYWxlKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubG9jYWxlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIENhbGxiYWNrLCByZWxhdGVkIHRvIGxvY2FsaXphdGlvbiBtb2R1bGUuICAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbG9jYWxpemVGb3JtYXRGdW5jdGlvbigpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubG9jYWxpemVGb3JtYXRGdW5jdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbG9jYWxpemVGb3JtYXRGdW5jdGlvbih2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxvY2FsaXplRm9ybWF0RnVuY3Rpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIGFuIG9iamVjdCBzcGVjaWZ5aW5nIHN0cmluZ3MgdXNlZCBpbiB0aGUgd2lkZ2V0IHRoYXQgY2FuIGJlIGxvY2FsaXplZC4gVXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZSBwcm9wZXJ0eSBsb2NhbGUuICAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbWVzc2FnZXMoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm1lc3NhZ2VzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBtZXNzYWdlcyh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm1lc3NhZ2VzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIElmIHRoZSBlbGVtZW50IGlzIHJlYWRvbmx5LCB1c2VycyBjYW5ub3QgaW50ZXJhY3Qgd2l0aCBpdC4gKi9cblx0QElucHV0KClcblx0Z2V0IHJlYWRvbmx5KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmVhZG9ubHkgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHJlYWRvbmx5KHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlYWRvbmx5ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgbnVtYmVyIG9mIHZpc2libGUgcm93cyBpbiB0aGUgQXJyYXkuICovXG5cdEBJbnB1dCgpXG5cdGdldCByb3dzKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yb3dzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCByb3dzKHZhbHVlOiBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucm93cyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBIGNhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHVzZWQgZm9yIHNldHRpbmcgdGhlIHZhbHVlIG9mIGVsZW1lbnQgd2lkZ2V0cy4gKi9cblx0QElucHV0KClcblx0Z2V0IHNldEVsZW1lbnRWYWx1ZSgpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2V0RWxlbWVudFZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzZXRFbGVtZW50VmFsdWUodmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zZXRFbGVtZW50VmFsdWUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHdoZXRoZXIgdG8gZGlzcGxheSB0aGUgaG9yaXpvbnRhbCBzY3JvbGxiYXIuICovXG5cdEBJbnB1dCgpXG5cdGdldCBzaG93SG9yaXpvbnRhbFNjcm9sbGJhcigpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNob3dIb3Jpem9udGFsU2Nyb2xsYmFyIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzaG93SG9yaXpvbnRhbFNjcm9sbGJhcih2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zaG93SG9yaXpvbnRhbFNjcm9sbGJhciA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgd2hldGhlciB0byBkaXNwbGF5IHRoZSBhcnJheSBpbmRleGVycy4gKi9cblx0QElucHV0KClcblx0Z2V0IHNob3dJbmRleERpc3BsYXkoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zaG93SW5kZXhEaXNwbGF5IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzaG93SW5kZXhEaXNwbGF5KHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNob3dJbmRleERpc3BsYXkgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHdoZXRoZXIgdG8gaGlnaGxpZ2h0IHNlbGVjdGVkIGVsZW1lbnRzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc2hvd1NlbGVjdGlvbigpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNob3dTZWxlY3Rpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHNob3dTZWxlY3Rpb24odmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2hvd1NlbGVjdGlvbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgd2hldGhlciB0byBkaXNwbGF5IHRoZSB2ZXJ0aWNhbCBzY3JvbGxiYXIuICovXG5cdEBJbnB1dCgpXG5cdGdldCBzaG93VmVydGljYWxTY3JvbGxiYXIoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zaG93VmVydGljYWxTY3JvbGxiYXIgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHNob3dWZXJ0aWNhbFNjcm9sbGJhcih2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zaG93VmVydGljYWxTY3JvbGxiYXIgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgdGhlbWUuIFRoZW1lIGRlZmluZXMgdGhlIGxvb2sgb2YgdGhlIGVsZW1lbnQgKi9cblx0QElucHV0KClcblx0Z2V0IHRoZW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50aGVtZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdGhlbWUodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50aGVtZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIGRhdGEgdHlwZSBhbmQgZWxlbWVudCB3aWRnZXRzIHRvIGJlIHVzZWQgaW4gdGhlIEFycmF5LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdHlwZSgpOiBBcnJheVR5cGUge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudHlwZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdHlwZSh2YWx1ZTogQXJyYXlUeXBlKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnR5cGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSWYgaXMgc2V0IHRvIHRydWUsIHRoZSBlbGVtZW50IGNhbm5vdCBiZSBmb2N1c2VkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdW5mb2N1c2FibGUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC51bmZvY3VzYWJsZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdW5mb2N1c2FibGUodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudW5mb2N1c2FibGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSB2YWx1ZSBvZiB0aGUgQXJyYXkuICovXG5cdEBJbnB1dCgpXG5cdGdldCB2YWx1ZSgpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHZhbHVlKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIHZpc2libGUgcm93IG9yIGNvbHVtbiBoYXMgYmVlbiBhZGRlZCBvciByZW1vdmVkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Ki9cblx0QE91dHB1dCgpIG9uQXJyYXlTaXplQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgdmFsdWUgb2YgdGhlIEFycmF5IGlzIGNoYW5nZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHQqL1xuXHRAT3V0cHV0KCkgb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgZGltZW5zaW9uIGhhcyBiZWVuIGFkZGVkIG9yIHJlbW92ZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHQqL1xuXHRAT3V0cHV0KCkgb25EaW1lbnNpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGFuIEFycmF5IGVsZW1lbnQgaGFzIGJlZW4gY2xpY2tlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvbkVsZW1lbnRDbGljazogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIEFycmF5IGlzIHNjcm9sbGVkIHdpdGggb25lIG9mIHRoZSBzY3JvbGxiYXJzLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Ki9cblx0QE91dHB1dCgpIG9uU2Nyb2xsOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgY29sdW1uIHdpZHRoIG9yIHRoZSByb3cgaGVpZ2h0IGhhcyBiZWVuIGNoYW5nZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHQqL1xuXHRAT3V0cHV0KCkgb25TaXplQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gQWRkcyBhIGRpbWVuc2lvbiB0byB0aGUgYXJyYXkuIE5vdGU6IHdoZW4gYWRkaW5nIG11bHRpcGxlIGRpbWVuc2lvbnMgc2ltdWx0YW5lb3VzbHksIGl0IGlzIHJlY29tbWVuZGVkIHRvIGRvIHNvIGJ5IGR5bmFtaWNhbGx5IHNldHRpbmcgdGhlIGRpbWVuc2lvbnMgcHJvcGVydHkuIFxuXHQqL1xuICAgIHB1YmxpYyBhZGREaW1lbnNpb24oKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmFkZERpbWVuc2lvbigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmFkZERpbWVuc2lvbigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDbGVhcnMgdGhlIHNlbGVjdGlvbi4gXG5cdCovXG4gICAgcHVibGljIGNsZWFyU2VsZWN0aW9uKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbGVhclNlbGVjdGlvbigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIENvcGllcyB0aGUgdmFsdWUgb2YgYW4gQXJyYXkgZWxlbWVudCB0byB0aGUgY2xpcGJvYXJkLiBcblx0KiBAcGFyYW0ge251bWJlcn0gUm93dmlzaWJsZWluZGV4LiBUaGUgdmlzaWJsZSBpbmRleCBvZiB0aGUgcm93ICh5IGNvb3JkaW5hdGUpIG9mIHRoZSBlbGVtZW50LlxuXHQqIEBwYXJhbSB7bnVtYmVyfSBDb2x1bW52aXNpYmxlaW5kZXguIFRoZSB2aXNpYmxlIGluZGV4IG9mIHRoZSBjb2x1bW4gKHggY29vcmRpbmF0ZSkgb2YgdGhlIGVsZW1lbnQuXG5cdCovXG4gICAgcHVibGljIGNvcHlFbGVtZW50VmFsdWVUb0NsaXBib2FyZChSb3d2aXNpYmxlaW5kZXg6IG51bWJlciwgQ29sdW1udmlzaWJsZWluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY29weUVsZW1lbnRWYWx1ZVRvQ2xpcGJvYXJkKFJvd3Zpc2libGVpbmRleCwgQ29sdW1udmlzaWJsZWluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jb3B5RWxlbWVudFZhbHVlVG9DbGlwYm9hcmQoUm93dmlzaWJsZWluZGV4LCBDb2x1bW52aXNpYmxlaW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZWxldGVzIGEgY29sdW1uIGluIHRoZSB2YWx1ZSBhcnJheS4gXG5cdCogQHBhcmFtIHtudW1iZXJ9IENvbHVtbmluZGV4LiBJbmRleCBvZiB0aGUgY29sdW1uIHRvIGJlIGRlbGV0ZWQuXG5cdCovXG4gICAgcHVibGljIGRlbGV0ZUNvbHVtbihDb2x1bW5pbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmRlbGV0ZUNvbHVtbihDb2x1bW5pbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZGVsZXRlQ29sdW1uKENvbHVtbmluZGV4KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGVsZXRlcyBhIHJvdyBpbiB0aGUgdmFsdWUgYXJyYXkuIFxuXHQqIEBwYXJhbSB7bnVtYmVyfSBSb3dpbmRleC4gSW5kZXggb2YgdGhlIHJvdyB0byBiZSBkZWxldGVkLlxuXHQqL1xuICAgIHB1YmxpYyBkZWxldGVSb3coUm93aW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5kZWxldGVSb3coUm93aW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmRlbGV0ZVJvdyhSb3dpbmRleCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEVtcHRpZXMgdGhlIHZhbHVlIGFycmF5LiBcblx0Ki9cbiAgICBwdWJsaWMgZW1wdHlBcnJheSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZW1wdHlBcnJheSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmVtcHR5QXJyYXkoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGVzaWduYXRlcyB0aGUgZW5kIG9mIGEgc2VsZWN0aW9uIHN0YXJ0ZWQgd2l0aCB0aGUgbWV0aG9kIHN0YXJ0U2VsZWN0aW9uLiBcblx0KiBAcGFyYW0ge251bWJlcn0gUm93Ym91bmRpbmRleC4gVGhlIGJvdW5kIGluZGV4IG9mIHRoZSByb3cgKHkgY29vcmRpbmF0ZSkgdG8gZW5kIHRoZSBzZWxlY3Rpb24gdG8uXG5cdCogQHBhcmFtIHtudW1iZXJ9IENvbHVtbmJvdW5kaW5kZXguIFRoZSBib3VuZCBpbmRleCBvZiB0aGUgY29sdW1uICh4IGNvb3JkaW5hdGUpIHRvIGVuZCB0aGUgc2VsZWN0aW9uIHRvLlxuXHQqL1xuICAgIHB1YmxpYyBlbmRTZWxlY3Rpb24oUm93Ym91bmRpbmRleDogbnVtYmVyLCBDb2x1bW5ib3VuZGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZW5kU2VsZWN0aW9uKFJvd2JvdW5kaW5kZXgsIENvbHVtbmJvdW5kaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmVuZFNlbGVjdGlvbihSb3dib3VuZGluZGV4LCBDb2x1bW5ib3VuZGluZGV4KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0aGUgSFRNTCBlbGVtZW50IGF0IHRoZSBzcGVjaWZpZWQgdmlzaWJsZSByb3cgYW5kIGNvbHVtbiBjb29yZGluYXRlcyBvZiB0aGUgQXJyYXkuIFxuXHQqIEBwYXJhbSB7bnVtYmVyfSBSb3dWaXNpYmxlSW5kZXguIFRoZSB2aXNpYmxlIGluZGV4IG9mIHRoZSByb3cgKHkgY29vcmRpbmF0ZSkgb2YgdGhlIGVsZW1lbnQuXG5cdCogQHBhcmFtIHtudW1iZXJ9IENvbHVtblZpc2libGVJbmRleC4gVGhlIHZpc2libGUgaW5kZXggb2YgdGhlIGNvbHVtbiAoeCBjb29yZGluYXRlKSBvZiB0aGUgZWxlbWVudC5cblx0KiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRFbGVtZW50KFJvd1Zpc2libGVJbmRleCwgQ29sdW1uVmlzaWJsZUluZGV4KTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldEVsZW1lbnQoUm93VmlzaWJsZUluZGV4LCBDb2x1bW5WaXNpYmxlSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmV0dXJucyBhbiBvYmplY3Qgd2l0aCB0aGUgdmFsdWVzIG9mIHRoZSBBcnJheSBlbGVtZW50IHdpZHRoIGFuZCBoZWlnaHQuIFxuXHQqIEByZXR1cm5zIHthbnl9XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRFbGVtZW50U2l6ZSgpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0RWxlbWVudFNpemUoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEdldHMgYW4gYXJyYXkgd2l0aCB0aGUgdmFsdWVzIG9mIGFsbCBpbmRleGVycy4gXG5cdCogQHJldHVybnMge2FueVtdfVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0SW5kZXhlclZhbHVlKCk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRJbmRleGVyVmFsdWUoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJldHVybnMgYW4gSFRNTCBlbGVtZW50IGZyb20gdGhlIEFycmF5IGF0IHRoZSBzcGVjaWZpZWQgcGFnZSBjb29yZGluYXRlcyBhbmQgb3RoZXIgaW5mb3JtYXRpb24gYWJvdXQgdGhpcyBlbGVtZW50LiBcblx0KiBAcGFyYW0ge251bWJlcn0gUGFnZXhjb29yZGluYXRlLiBcblx0KiBAcGFyYW0ge251bWJlcn0gUGFnZXljb29yZGluYXRlLiBcblx0KiBAcmV0dXJucyB7YW55fVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgaGl0VGVzdChQYWdleGNvb3JkaW5hdGUsIFBhZ2V5Y29vcmRpbmF0ZSk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5oaXRUZXN0KFBhZ2V4Y29vcmRpbmF0ZSwgUGFnZXljb29yZGluYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEluc2VydHMgYSBjb2x1bW4gaW4gdGhlIHZhbHVlIGFycmF5IGJlZm9yZSB0aGUgc3BlY2lmaWVkIGNvbHVtbi4gVGhlIG5ldyBjb2x1bW4gaXMgZmlsbGVkIHdpdGggZGVmYXVsdCB2YWx1ZXMuIFxuXHQqIEBwYXJhbSB7bnVtYmVyfSBDb2x1bW5pbmRleC4gSW5kZXggb2YgdGhlIGNvbHVtbiB0byBhZGQgYSBuZXcgY29sdW1uIGJlZm9yZS5cblx0Ki9cbiAgICBwdWJsaWMgaW5zZXJ0Q29sdW1uQmVmb3JlKENvbHVtbmluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5zZXJ0Q29sdW1uQmVmb3JlKENvbHVtbmluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5pbnNlcnRDb2x1bW5CZWZvcmUoQ29sdW1uaW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBJbnNlcnRzIGEgcm93IGluIHRoZSB2YWx1ZSBhcnJheSBiZWZvcmUgdGhlIHNwZWNpZmllZCByb3cuIFRoZSBuZXcgcm93IGlzIGZpbGxlZCB3aXRoIGRlZmF1bHQgdmFsdWVzLiBcblx0KiBAcGFyYW0ge251bWJlcn0gUm93aW5kZXguIEluZGV4IG9mIHRoZSByb3cgdG8gYWRkIGEgbmV3IHJvdyBiZWZvcmUuXG5cdCovXG4gICAgcHVibGljIGluc2VydFJvd0JlZm9yZShSb3dpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lmluc2VydFJvd0JlZm9yZShSb3dpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5zZXJ0Um93QmVmb3JlKFJvd2luZGV4KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBhbGwgdmFsdWUgYXJyYXkgbWVtYmVycyB0byB0aGUgZGVmYXVsdCB2YWx1ZS4gXG5cdCovXG4gICAgcHVibGljIHJlaW5pdGlhbGl6ZUFycmF5KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZWluaXRpYWxpemVBcnJheSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlaW5pdGlhbGl6ZUFycmF5KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJlbW92ZXMgYSBkaW1lbnNpb24gZnJvbSB0aGUgYXJyYXkuIE5vdGU6IHdoZW4gcmVtb3ZpbmcgbXVsdGlwbGUgZGltZW5zaW9ucyBzaW11bHRhbmVvdXNseSwgaXQgaXMgcmVjb21tZW5kZWQgdG8gZG8gc28gYnkgZHluYW1pY2FsbHkgc2V0dGluZyB0aGUgZGltZW5zaW9ucyBwcm9wZXJ0eS4gXG5cdCovXG4gICAgcHVibGljIHJlbW92ZURpbWVuc2lvbigpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVtb3ZlRGltZW5zaW9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVtb3ZlRGltZW5zaW9uKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgdGhlIGFycmF5J3MgdHlwZSB0byAnbm9uZScuIFxuXHQqL1xuICAgIHB1YmxpYyByZXNldCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVzZXQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZXNldCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZXNpemVzIEFycmF5IGVsZW1lbnRzIChjaGFuZ2VzIGJvdGggdGhlIGNvbHVtbiB3aWR0aCBhbmQgdGhlIHJvdyBoZWlnaHQpLiBcblx0KiBAcGFyYW0ge251bWJlcn0gRWxlbWVudHdpZHRoLiBUaGUgbmV3IGVsZW1lbnQgKGNvbHVtbikgd2lkdGguXG5cdCogQHBhcmFtIHtudW1iZXJ9IEVsZW1lbnRoZWlnaHQuIFRoZSBuZXcgZWxlbWVudCAocm93KSBoZWlnaHQuXG5cdCovXG4gICAgcHVibGljIHJlc2l6ZUVsZW1lbnQoRWxlbWVudHdpZHRoOiBudW1iZXIsIEVsZW1lbnRoZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZXNpemVFbGVtZW50KEVsZW1lbnR3aWR0aCwgRWxlbWVudGhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVzaXplRWxlbWVudChFbGVtZW50d2lkdGgsIEVsZW1lbnRoZWlnaHQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZWxlY3RzIGFsbCBtZW1iZXJzIG9mIHRoZSBhcnJheS4gXG5cdCovXG4gICAgcHVibGljIHNlbGVjdEFsbCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0QWxsKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0QWxsKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNlbGVjdHMgYW4gZWxlbWVudCB3aXRoIHRoZSBwYXNzZWQgcm93IGFuZCBjb2x1bW4gYm91bmQgaW5kZXhlcy4gXG5cdCogQHBhcmFtIHtudW1iZXJ9IFJvd2JvdW5kaW5kZXguIFxuXHQqIEBwYXJhbSB7bnVtYmVyfSBDb2x1bW5ib3VuZGluZGV4LiBcblx0Ki9cbiAgICBwdWJsaWMgc2VsZWN0RWxlbWVudChSb3dib3VuZGluZGV4OiBudW1iZXIsIENvbHVtbmJvdW5kaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zZWxlY3RFbGVtZW50KFJvd2JvdW5kaW5kZXgsIENvbHVtbmJvdW5kaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdEVsZW1lbnQoUm93Ym91bmRpbmRleCwgQ29sdW1uYm91bmRpbmRleCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgdGhlIGNvbHVtbiAoZWxlbWVudCkgd2lkdGguIFxuXHQqIEBwYXJhbSB7bnVtYmVyfSBDb2x1bW53aWR0aC4gVGhlIG5ldyBjb2x1bW4gd2lkdGguXG5cdCovXG4gICAgcHVibGljIHNldENvbHVtbldpZHRoKENvbHVtbndpZHRoOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2V0Q29sdW1uV2lkdGgoQ29sdW1ud2lkdGgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNldENvbHVtbldpZHRoKENvbHVtbndpZHRoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyB0aGUgZGVmYXVsdCB2YWx1ZSBvZiBhcnJheSBtZW1iZXJzLiBcblx0KiBAcGFyYW0ge2FueX0gRGVmYXVsdHZhbHVlLiBUaGUgbmV3IGRlZmF1bHQgdmFsdWUuIEl0cyBkYXRhIHR5cGUgc2hvdWxkIGNvcnJlc3BvbmQgdG8gdGhlIDxzdHJvbmc+dHlwZTwvc3Ryb25nPiBvZiB0aGUgQXJyYXkuXG5cdCovXG4gICAgcHVibGljIHNldERlZmF1bHRWYWx1ZShEZWZhdWx0dmFsdWU6IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zZXREZWZhdWx0VmFsdWUoRGVmYXVsdHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zZXREZWZhdWx0VmFsdWUoRGVmYXVsdHZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyB0aGUgdmFsdWUgb2Ygb25lIG9yIG1vcmUgQXJyYXkgaW5kZXhlcnMuIFxuXHQqIEBwYXJhbSB7YW55W119IFNldHRpbmdzLiBBbiBhcnJheSBvZiBvYmplY3RzIHdpdGggdGhlIGZpZWxkcyBpbmRleCBhbmQgdmFsdWUuXG5cdCovXG4gICAgcHVibGljIHNldEluZGV4ZXJWYWx1ZShTZXR0aW5nczogYW55W10pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2V0SW5kZXhlclZhbHVlKFNldHRpbmdzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zZXRJbmRleGVyVmFsdWUoU2V0dGluZ3MpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSByb3cgKGVsZW1lbnQpIGhlaWdodC4gXG5cdCogQHBhcmFtIHtudW1iZXJ9IFJvd2hlaWdodC4gVGhlIG5ldyByb3cgaGVpZ2h0LlxuXHQqL1xuICAgIHB1YmxpYyBzZXRSb3dIZWlnaHQoUm93aGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2V0Um93SGVpZ2h0KFJvd2hlaWdodCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2V0Um93SGVpZ2h0KFJvd2hlaWdodCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIE1ha2VzIHRoZSBsYXN0IGFycmF5IG1lbWJlciB2aXNpYmxlLiBcblx0Ki9cbiAgICBwdWJsaWMgc2hvd0xhc3RFbGVtZW50KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zaG93TGFzdEVsZW1lbnQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zaG93TGFzdEVsZW1lbnQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGVzaWduYXRlcyB0aGUgc3RhcnQgb2YgYSBzZWxlY3Rpb24uIFRvIGVuZCBhIHNlbGVjdGlvbiwgY2FsbCBlbmRTZWxlY3Rpb24uIFxuXHQqIEBwYXJhbSB7bnVtYmVyfSBSb3dib3VuZGluZGV4LiBUaGUgYm91bmQgaW5kZXggb2YgdGhlIHJvdyAoeSBjb29yZGluYXRlKSB0byBzdGFydCB0aGUgc2VsZWN0aW9uIGZyb20uXG5cdCogQHBhcmFtIHtudW1iZXJ9IENvbHVtbmJvdW5kaW5kZXguIFRoZSBib3VuZCBpbmRleCBvZiB0aGUgY29sdW1uICh4IGNvb3JkaW5hdGUpIHRvIHN0YXJ0IHRoZSBzZWxlY3Rpb24gZnJvbS5cblx0Ki9cbiAgICBwdWJsaWMgc3RhcnRTZWxlY3Rpb24oUm93Ym91bmRpbmRleDogbnVtYmVyLCBDb2x1bW5ib3VuZGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc3RhcnRTZWxlY3Rpb24oUm93Ym91bmRpbmRleCwgQ29sdW1uYm91bmRpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc3RhcnRTZWxlY3Rpb24oUm93Ym91bmRpbmRleCwgQ29sdW1uYm91bmRpbmRleCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEluY3JlYXNlcyBvciBkZWNyZWFzZXMgdGhlIHZpc3VhbCBnYXAgYmV0d2VlbiBBcnJheSBlbGVtZW50cy4gXG5cdCovXG4gICAgcHVibGljIHRvZ2dsZUVsZW1lbnRHYXAoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnRvZ2dsZUVsZW1lbnRHYXAoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC50b2dnbGVFbGVtZW50R2FwKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFRyYW5zcG9zZXMgdGhlIGFycmF5LiBBcHBsaWNhYmxlIG9ubHkgd2hlbiBkaW1lbnNpb25zIGlzIDIgKDJEIGFycmF5KS4gXG5cdCovXG4gICAgcHVibGljIHRyYW5zcG9zZUFycmF5KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC50cmFuc3Bvc2VBcnJheSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnRyYW5zcG9zZUFycmF5KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgdmFsdWUgb2YgdGhlIHdob2xlIGFycmF5IG9yIHNldHMgdGhlIHZhbHVlIG9mIGEgbWVtYmVyIG9mIHRoZSBhcnJheS4gXG5cdCogQHBhcmFtIHthbnl9IE5ld3ZhbHVlPy4gSWYgdGhlIG1ldGhvZCBpcyB1c2VkIGZvciBzZXR0aW5nIHRoZSB2YWx1ZSBvZiB0aGUgd2hvbGUgYXJyYXksIHRoZSBleHBlY3RlZCB2YWx1ZSBpcyBhbiBhcnJheS4gSWYgaXQgaXMgdXNlZCBmb3Igc2V0dGluZyB0aGUgdmFsdWUgb2YgYW4gYXJyYXkgbWVtYmVyLCB0aGUgdmFsdWUgY2FuIGJlIG9mIGFueSBhcHBsaWNhYmxlIHR5cGUuXG5cdCogQHBhcmFtIHtudW1iZXIgfCBudW1iZXJbXX0gRWxlbWVudGluZGV4ZXM/LiBJZiB0aGlzIHBhcmFtZXRlciBpcyBwYXNzZWQsIG9ubHkgdGhlIHZhbHVlIG9mIHRoZSBhcnJheSBtZW1iZXIgd2l0aCB0aGUgcHJvdmlkZWQgZGltZW5zaW9uIGluZGV4ZXMgaXMgc2V0LiBEaW1lbnNpb24gaW5kZXhlcyB0aGF0IGFyZSBub3QgcGFzc2VkIGFyZSBjb25zaWRlcmVkIHRvIGJlIDAuXG5cdCogQHJldHVybnMge2FueVtdfVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgdmFsKE5ld3ZhbHVlPywgRWxlbWVudGluZGV4ZXM/KTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LnZhbChOZXd2YWx1ZSwgRWxlbWVudGluZGV4ZXMpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cblx0Z2V0IGlzUmVuZGVyZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkIDogZmFsc2U7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0fVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cbiAgICAgIHRoYXQub25DcmVhdGUuZW1pdCh0aGF0Lm5hdGl2ZUVsZW1lbnQpO1xuXG5cdFx0U21hcnQuUmVuZGVyKCk7XG5cblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc21hcnQtYW5ndWxhcicpO1xuXG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7IHRoYXQub25SZWFkeS5lbWl0KHRoYXQubmF0aXZlRWxlbWVudCk7IH0pO1xuXHRcdHRoaXMubGlzdGVuKCk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLnVubGlzdGVuKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdFx0aWYgKHRoaXMubmF0aXZlRWxlbWVudCAmJiB0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuXHRcdFx0Zm9yIChjb25zdCBwcm9wTmFtZSBpbiBjaGFuZ2VzKSB7XG5cdFx0XHRcdGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuXHRcdFx0XHRcdHRoaXMubmF0aXZlRWxlbWVudFtwcm9wTmFtZV0gPSBjaGFuZ2VzW3Byb3BOYW1lXS5jdXJyZW50VmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEFkZCBldmVudCBsaXN0ZW5lcnMuICovXG5cdHByaXZhdGUgbGlzdGVuKCk6IHZvaWQge1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2FycmF5U2l6ZUNoYW5nZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkFycmF5U2l6ZUNoYW5nZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdhcnJheVNpemVDaGFuZ2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2FycmF5U2l6ZUNoYW5nZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5nZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNoYW5nZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5nZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2RpbWVuc2lvbkNoYW5nZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkRpbWVuc2lvbkNoYW5nZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkaW1lbnNpb25DaGFuZ2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2RpbWVuc2lvbkNoYW5nZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2VsZW1lbnRDbGlja0hhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkVsZW1lbnRDbGljay5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdlbGVtZW50Q2xpY2snLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2VsZW1lbnRDbGlja0hhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3Njcm9sbEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblNjcm9sbC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Njcm9sbEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3NpemVDaGFuZ2VIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25TaXplQ2hhbmdlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3NpemVDaGFuZ2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3NpemVDaGFuZ2VIYW5kbGVyJ10pO1xuXG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJlbW92ZSBldmVudCBsaXN0ZW5lcnMuICovXG5cdHByaXZhdGUgdW5saXN0ZW4oKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2FycmF5U2l6ZUNoYW5nZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2FycmF5U2l6ZUNoYW5nZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snYXJyYXlTaXplQ2hhbmdlSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjaGFuZ2VIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5nZUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snZGltZW5zaW9uQ2hhbmdlSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZGltZW5zaW9uQ2hhbmdlJywgdGhhdC5ldmVudEhhbmRsZXJzWydkaW1lbnNpb25DaGFuZ2VIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2VsZW1lbnRDbGlja0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2VsZW1lbnRDbGljaycsIHRoYXQuZXZlbnRIYW5kbGVyc1snZWxlbWVudENsaWNrSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydzY3JvbGxIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Njcm9sbEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snc2l6ZUNoYW5nZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3NpemVDaGFuZ2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3NpemVDaGFuZ2VIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHR9XG59XG4iXX0=