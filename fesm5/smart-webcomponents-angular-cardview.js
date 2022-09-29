
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.cardview';

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

var CardViewComponent = /** @class */ (function (_super) {
    __extends(CardViewComponent, _super);
    function CardViewComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        /** @description This event is triggered when a filter has been applied.
        *  @param event. The custom event. 	*/
        _this.onFilter = new EventEmitter();
        /** @description This event is triggered when sorting has been applied.
        *  @param event. The custom event. 	*/
        _this.onSort = new EventEmitter();
        /** @description This event is triggered when the window is opened.
        *  @param event. The custom event. 	*/
        _this.onOpen = new EventEmitter();
        /** @description This event is triggered when the window is about to be opened. The opening operation can be canceled by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	*/
        _this.onOpening = new EventEmitter();
        /** @description This event is triggered when the window is closed.
        *  @param event. The custom event. 	*/
        _this.onClose = new EventEmitter();
        /** @description This event is triggered when the window is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	*/
        _this.onClosing = new EventEmitter();
        /** @description This event is triggered when the user starts dragging the card.
        *  @param event. The custom event. 	*/
        _this.onDragStart = new EventEmitter();
        /** @description This event is triggered when the user is dragging the card.
        *  @param event. The custom event. 	*/
        _this.onDragging = new EventEmitter();
        /** @description This event is triggered when the user dragged the card.
        *  @param event. The custom event. 	*/
        _this.onDragEnd = new EventEmitter();
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    CardViewComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('smart-card-view');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(CardViewComponent.prototype, "addNewButton", {
        /** @description Toggles the button for adding new cards. */
        get: function () {
            return this.nativeElement ? this.nativeElement.addNewButton : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.addNewButton = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardViewComponent.prototype, "allowDrag", {
        /** @description Allows reordering by dragging cards. */
        get: function () {
            return this.nativeElement ? this.nativeElement.allowDrag : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.allowDrag = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardViewComponent.prototype, "animation", {
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
    Object.defineProperty(CardViewComponent.prototype, "cardHeight", {
        /** @description Describes the height for each card. */
        get: function () {
            return this.nativeElement ? this.nativeElement.cardHeight : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.cardHeight = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardViewComponent.prototype, "cellOrientation", {
        /** @description Describes the orientation of the card cells. */
        get: function () {
            return this.nativeElement ? this.nativeElement.cellOrientation : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.cellOrientation = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardViewComponent.prototype, "collapsible", {
        /** @description Allows collapsing the card content. */
        get: function () {
            return this.nativeElement ? this.nativeElement.collapsible : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.collapsible = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardViewComponent.prototype, "columns", {
        /** @description Describes the columns properties:label - Sets the column namedataField - Sets the dataField nameicon - Sets the icon for the columnformatSettings - Sets the settings about the format for the current columnformatFunction - Function for customizing the value */
        get: function () {
            return this.nativeElement ? this.nativeElement.columns : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.columns = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardViewComponent.prototype, "coverField", {
        /** @description Describes which data field to be set as cover. */
        get: function () {
            return this.nativeElement ? this.nativeElement.coverField : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.coverField = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardViewComponent.prototype, "coverMode", {
        /** @description Describes the cover image fit property. */
        get: function () {
            return this.nativeElement ? this.nativeElement.coverMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.coverMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardViewComponent.prototype, "dataSource", {
        /** @description Determines the data source for the item that will be displayed inside the card. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dataSource : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dataSource = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardViewComponent.prototype, "dataSourceSettings", {
        /** @description Sets the grid's data source settings when the dataSource property is set to an Array or URL. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dataSourceSettings : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dataSourceSettings = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardViewComponent.prototype, "editable", {
        /** @description Allows the edit option for the cards. */
        get: function () {
            return this.nativeElement ? this.nativeElement.editable : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.editable = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardViewComponent.prototype, "headerPosition", {
        /** @description Sets or gets the header position. The header contains the Customize, Filter, Sort, and Search buttons. */
        get: function () {
            return this.nativeElement ? this.nativeElement.headerPosition : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.headerPosition = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardViewComponent.prototype, "locale", {
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
    Object.defineProperty(CardViewComponent.prototype, "messages", {
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
    Object.defineProperty(CardViewComponent.prototype, "rightToLeft", {
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
    Object.defineProperty(CardViewComponent.prototype, "theme", {
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
    Object.defineProperty(CardViewComponent.prototype, "scrolling", {
        /** @description Describes the scrolling behavior of the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.scrolling : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.scrolling = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardViewComponent.prototype, "titleField", {
        /** @description Describes which data field to be set as title. */
        get: function () {
            return this.nativeElement ? this.nativeElement.titleField : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.titleField = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /** @description Adds filtering
    * @param {string[]} filters. Filter information
    * @param {string} operator?. Logical operator between the filters of different fields
    */
    CardViewComponent.prototype.addFilter = function (filters, operator) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.addFilter(filters, operator);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.addFilter(filters, operator);
            });
        }
    };
    /** @description Adds a new record
    * @param {number | string} recordId?. The id of the record to add
    * @param {any} data?. The data of the record to add
    * @param {string} position?. The position to add the record to. Possible values: 'first' and 'last'.
    */
    CardViewComponent.prototype.addRecord = function (recordId, data, position) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.addRecord(recordId, data, position);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.addRecord(recordId, data, position);
            });
        }
    };
    /** @description Adds sorting
    * @param {[] | string} dataFields. The data field(s) to sort by
    * @param {[] | string} orderBy. The sort direction(s) to sort the data field(s) by
    */
    CardViewComponent.prototype.addSort = function (dataFields, orderBy) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.addSort(dataFields, orderBy);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.addSort(dataFields, orderBy);
            });
        }
    };
    /** @description Begins an edit operation
    * @param {number | string} recordId. The id of the record to edit
    */
    CardViewComponent.prototype.beginEdit = function (recordId) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.beginEdit(recordId);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.beginEdit(recordId);
            });
        }
    };
    /** @description Ends the current edit operation and discards changes
    */
    CardViewComponent.prototype.cancelEdit = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.cancelEdit();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.cancelEdit();
            });
        }
    };
    /** @description Closes any open header panel (drop down)
    */
    CardViewComponent.prototype.closePanel = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.closePanel();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.closePanel();
            });
        }
    };
    /** @description Ends the current edit operation and saves changes
    */
    CardViewComponent.prototype.endEdit = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.endEdit();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.endEdit();
            });
        }
    };
    /** @description Makes sure a record is visible by scrolling to it. If succcessful, the method returns the HTML element of the record's card.
    * @param {number | string} recordId. The id of the record to scroll to
    * @returns {HTMLElement}
  */
    CardViewComponent.prototype.ensureVisible = function (recordId) {
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.ensureVisible(recordId);
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
    /** @description Opens the "Customize cards" header panel (drop down)
    */
    CardViewComponent.prototype.openCustomizePanel = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.openCustomizePanel();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.openCustomizePanel();
            });
        }
    };
    /** @description Opens the "Filter" header panel (drop down)
    */
    CardViewComponent.prototype.openFilterPanel = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.openFilterPanel();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.openFilterPanel();
            });
        }
    };
    /** @description Opens the "Sort" header panel (drop down)
    */
    CardViewComponent.prototype.openSortPanel = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.openSortPanel();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.openSortPanel();
            });
        }
    };
    /** @description Removes filtering
    */
    CardViewComponent.prototype.removeFilter = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeFilter();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.removeFilter();
            });
        }
    };
    /** @description Removes a record
    * @param {number | string} recordId. The id of the record to remove
    */
    CardViewComponent.prototype.removeRecord = function (recordId) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeRecord(recordId);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.removeRecord(recordId);
            });
        }
    };
    /** @description Removes sorting
    */
    CardViewComponent.prototype.removeSort = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeSort();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.removeSort();
            });
        }
    };
    /** @description Shows a column
    * @param {string} dataField. The data field of the column
    */
    CardViewComponent.prototype.showColumn = function (dataField) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.showColumn(dataField);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.showColumn(dataField);
            });
        }
    };
    Object.defineProperty(CardViewComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    CardViewComponent.prototype.ngOnInit = function () {
    };
    CardViewComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        this.listen();
    };
    CardViewComponent.prototype.ngOnDestroy = function () {
        this.unlisten();
    };
    CardViewComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    /** @description Add event listeners. */
    CardViewComponent.prototype.listen = function () {
        var that = this;
        that.eventHandlers['filterHandler'] = function (event) { that.onFilter.emit(event); };
        that.nativeElement.addEventListener('filter', that.eventHandlers['filterHandler']);
        that.eventHandlers['sortHandler'] = function (event) { that.onSort.emit(event); };
        that.nativeElement.addEventListener('sort', that.eventHandlers['sortHandler']);
        that.eventHandlers['openHandler'] = function (event) { that.onOpen.emit(event); };
        that.nativeElement.addEventListener('open', that.eventHandlers['openHandler']);
        that.eventHandlers['openingHandler'] = function (event) { that.onOpening.emit(event); };
        that.nativeElement.addEventListener('opening', that.eventHandlers['openingHandler']);
        that.eventHandlers['closeHandler'] = function (event) { that.onClose.emit(event); };
        that.nativeElement.addEventListener('close', that.eventHandlers['closeHandler']);
        that.eventHandlers['closingHandler'] = function (event) { that.onClosing.emit(event); };
        that.nativeElement.addEventListener('closing', that.eventHandlers['closingHandler']);
        that.eventHandlers['dragStartHandler'] = function (event) { that.onDragStart.emit(event); };
        that.nativeElement.addEventListener('dragStart', that.eventHandlers['dragStartHandler']);
        that.eventHandlers['draggingHandler'] = function (event) { that.onDragging.emit(event); };
        that.nativeElement.addEventListener('dragging', that.eventHandlers['draggingHandler']);
        that.eventHandlers['dragEndHandler'] = function (event) { that.onDragEnd.emit(event); };
        that.nativeElement.addEventListener('dragEnd', that.eventHandlers['dragEndHandler']);
    };
    /** @description Remove event listeners. */
    CardViewComponent.prototype.unlisten = function () {
        var that = this;
        if (that.eventHandlers['filterHandler']) {
            that.nativeElement.onfilterHandler = null;
        }
        if (that.eventHandlers['sortHandler']) {
            that.nativeElement.removeEventListener('sort', that.eventHandlers['sortHandler']);
        }
        if (that.eventHandlers['openHandler']) {
            that.nativeElement.removeEventListener('open', that.eventHandlers['openHandler']);
        }
        if (that.eventHandlers['openingHandler']) {
            that.nativeElement.removeEventListener('opening', that.eventHandlers['openingHandler']);
        }
        if (that.eventHandlers['closeHandler']) {
            that.nativeElement.removeEventListener('close', that.eventHandlers['closeHandler']);
        }
        if (that.eventHandlers['closingHandler']) {
            that.nativeElement.removeEventListener('closing', that.eventHandlers['closingHandler']);
        }
        if (that.eventHandlers['dragStartHandler']) {
            that.nativeElement.removeEventListener('dragStart', that.eventHandlers['dragStartHandler']);
        }
        if (that.eventHandlers['draggingHandler']) {
            that.nativeElement.removeEventListener('dragging', that.eventHandlers['draggingHandler']);
        }
        if (that.eventHandlers['dragEndHandler']) {
            that.nativeElement.removeEventListener('dragEnd', that.eventHandlers['dragEndHandler']);
        }
    };
    CardViewComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], CardViewComponent.prototype, "addNewButton", null);
    __decorate([
        Input()
    ], CardViewComponent.prototype, "allowDrag", null);
    __decorate([
        Input()
    ], CardViewComponent.prototype, "animation", null);
    __decorate([
        Input()
    ], CardViewComponent.prototype, "cardHeight", null);
    __decorate([
        Input()
    ], CardViewComponent.prototype, "cellOrientation", null);
    __decorate([
        Input()
    ], CardViewComponent.prototype, "collapsible", null);
    __decorate([
        Input()
    ], CardViewComponent.prototype, "columns", null);
    __decorate([
        Input()
    ], CardViewComponent.prototype, "coverField", null);
    __decorate([
        Input()
    ], CardViewComponent.prototype, "coverMode", null);
    __decorate([
        Input()
    ], CardViewComponent.prototype, "dataSource", null);
    __decorate([
        Input()
    ], CardViewComponent.prototype, "dataSourceSettings", null);
    __decorate([
        Input()
    ], CardViewComponent.prototype, "editable", null);
    __decorate([
        Input()
    ], CardViewComponent.prototype, "headerPosition", null);
    __decorate([
        Input()
    ], CardViewComponent.prototype, "locale", null);
    __decorate([
        Input()
    ], CardViewComponent.prototype, "messages", null);
    __decorate([
        Input()
    ], CardViewComponent.prototype, "rightToLeft", null);
    __decorate([
        Input()
    ], CardViewComponent.prototype, "theme", null);
    __decorate([
        Input()
    ], CardViewComponent.prototype, "scrolling", null);
    __decorate([
        Input()
    ], CardViewComponent.prototype, "titleField", null);
    __decorate([
        Output()
    ], CardViewComponent.prototype, "onFilter", void 0);
    __decorate([
        Output()
    ], CardViewComponent.prototype, "onSort", void 0);
    __decorate([
        Output()
    ], CardViewComponent.prototype, "onOpen", void 0);
    __decorate([
        Output()
    ], CardViewComponent.prototype, "onOpening", void 0);
    __decorate([
        Output()
    ], CardViewComponent.prototype, "onClose", void 0);
    __decorate([
        Output()
    ], CardViewComponent.prototype, "onClosing", void 0);
    __decorate([
        Output()
    ], CardViewComponent.prototype, "onDragStart", void 0);
    __decorate([
        Output()
    ], CardViewComponent.prototype, "onDragging", void 0);
    __decorate([
        Output()
    ], CardViewComponent.prototype, "onDragEnd", void 0);
    CardViewComponent = __decorate([
        Directive({
            exportAs: 'smart-card-view', selector: 'smart-card-view, [smart-card-view]'
        })
    ], CardViewComponent);
    return CardViewComponent;
}(BaseElement));

var CardViewModule = /** @class */ (function () {
    function CardViewModule() {
    }
    CardViewModule = __decorate([
        NgModule({
            declarations: [CardViewComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            exports: [CardViewComponent]
        })
    ], CardViewModule);
    return CardViewModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { CardViewComponent, CardViewModule, Smart, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-cardview.js.map
