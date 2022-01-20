import * as tslib_1 from "tslib";
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Smart } from './smart.element';
var TableComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TableComponent, _super);
    function TableComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        /** @description This event is triggered when a cell edit operation has been initiated.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	dataField, 	row, 	value)
        *   id - The id of the row.
        *   dataField - The data field of the cell's column.
        *   row - The data of the cell's row.
        *   value - The data value of the cell.
        */
        _this.onCellBeginEdit = new EventEmitter();
        /** @description This event is triggered when a cell has been clicked.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	dataField, 	row, 	value, 	originalEvent)
        *   id - The cell's row id.
        *   dataField - The data field of the cell's column.
        *   row - The data of the cell's row.
        *   value - The data value of the cell.
        *   originalEvent - The 'click' event object.
        */
        _this.onCellClick = new EventEmitter();
        /** @description This event is triggered when a cell has been edited.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	dataField, 	row, 	value)
        *   id - The id of the row.
        *   dataField - The data field of the cell's column.
        *   row - The new data of the cell's row.
        *   value - The data value of the cell.
        */
        _this.onCellEndEdit = new EventEmitter();
        /** @description This event is triggered when the selection is changed. Within the event handler you can get the selection by using the 'getSelection' method.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	type)
        *   type - The type of action that initiated the selection change. Possible types: 'programmatic', 'interaction', 'remove'.
        */
        _this.onChange = new EventEmitter();
        /** @description This event is triggered when a row has been collapsed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	record)
        *   id - The id of the collapsed row.
        *   record - The data of the collapsed row.
        */
        _this.onCollapse = new EventEmitter();
        /** @description This event is triggered when a row has been expanded.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	record)
        *   id - The id of the expanded row.
        *   record - The (aggregated) data of the expanded row.
        */
        _this.onExpand = new EventEmitter();
        /** @description This event is triggered when a column header cell has been clicked.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	dataField)
        *   dataField - The data field of the cell's column.
        */
        _this.onColumnClick = new EventEmitter();
        /** @description This event is triggered when a column menu is closed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	dataField)
        *   dataField - The data field of the column.
        */
        _this.onCloseColumnMenu = new EventEmitter();
        /** @description This event is triggered when a column has been resized via dragging or double-click.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	dataField, 	headerCellElement, 	width)
        *   dataField - The data field of the column.
        *   headerCellElement - The column's header cell HTML element.
        *   width - The new width of the column.
        */
        _this.onColumnResize = new EventEmitter();
        /** @description This event is triggered when a filtering-related action is made.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	action, 	filters)
        *   action - The filtering action. Possible actions: 'add', 'remove'.
        *   filters - The added filters. Only when action is 'add'.
        */
        _this.onFilter = new EventEmitter();
        /** @description This event is triggered when a grouping-related action is made.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	action, 	dataField, 	label, 	path)
        *   action - The grouping action. Possible actions: 'add', 'collapse', 'expand', 'remove'.
        *   dataField - The data field of the column whose grouping is modified.
        *   label - The label of the group (only when collapsing/expanding).
        *   path - The group's path (only when collapsing/expanding). The path includes the path to the expanded/collapsed group starting from the root group. The indexes are joined with '.'. This parameter is available when the 'action' is 'expand' or 'collapse'.
        */
        _this.onGroup = new EventEmitter();
        /** @description This event is triggered when a column menu is opened.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	dataField)
        *   dataField - The data field of the column.
        */
        _this.onOpenColumnMenu = new EventEmitter();
        /** @description This event is triggered when a paging-related action is made.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	action)
        *   action - The paging action. Possible actions: 'pageIndexChange', 'pageSizeChange'.
        */
        _this.onPage = new EventEmitter();
        /** @description This event is triggered when a row edit operation has been initiated (only when editMode is 'row').
        *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	row)
        *   id - The id of the row.
        *   row - The data of the row.
        */
        _this.onRowBeginEdit = new EventEmitter();
        /** @description This event is triggered when a row has been edited (only when editMode is 'row').
        *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	row)
        *   id - The id of the row.
        *   row - The new data of the row.
        */
        _this.onRowEndEdit = new EventEmitter();
        /** @description This event is triggered when a column header cell has been clicked or sorting is applied programmatically using the Table API.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	columns, 	sortDataFields, 	sortOrders, 	sortDataTypes, 	type)
        *   columns - An array with information about the columns the Table has been sorted by.
        *   sortDataFields - An array with information about the data fields the Table has been sorted by.
        *   sortOrders - An array with information about the columns sort orders the Table has been sorted by.
        *   sortDataTypes - An array with information about the columns data types the Table has been sorted by.
        *   type - The type of action that initiated the data sort. Possible types: 'programmatic', 'interaction'
        */
        _this.onSort = new EventEmitter();
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    TableComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('smart-table');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(TableComponent.prototype, "animation", {
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
    Object.defineProperty(TableComponent.prototype, "autoLoadState", {
        /** @description Enables or disables auto load state from the browser's localStorage. Information about columns, expanded rows, selected rows, applied fitering, grouping, and sorted columns is loaded, based on the value of the stateSettings property. */
        get: function () {
            return this.nativeElement ? this.nativeElement.autoLoadState : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.autoLoadState = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "autoSaveState", {
        /** @description Enables or disables auto save state to the browser's localStorage. Information about columns, expanded rows, selected rows, applied fitering, grouping, and   sorted columns is saved, based on the value of the stateSettings property. */
        get: function () {
            return this.nativeElement ? this.nativeElement.autoSaveState : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.autoSaveState = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "columnGroups", {
        /** @description Sets or gets a list of column groups that constitute the column header hierarchy. Note: when column header hierarchy is created, column resizing and auto-sizing is not supported. */
        get: function () {
            return this.nativeElement ? this.nativeElement.columnGroups : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.columnGroups = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "columnMinWidth", {
        /** @description Sets or gets the min width of columns when columnSizeMode is 'auto' or when resizing columns. This property has no effect on columns with programmatically set width. */
        get: function () {
            return this.nativeElement ? this.nativeElement.columnMinWidth : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.columnMinWidth = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "columnReorder", {
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
    Object.defineProperty(TableComponent.prototype, "columnResize", {
        /** @description Sets or gets whether the resizing of columns is enabled. Note: column sizes continue to adhere to the behavior of the standard HTML table element's table-layout: fixed, upon which smart-table is based. */
        get: function () {
            return this.nativeElement ? this.nativeElement.columnResize : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.columnResize = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "columnResizeNormalize", {
        /** @description This property affects the table sizing, when the columnSizeMode is 'default'. When 'columnResizeNormalize' is false, the Table will add an additional TH element, if all table columns have the 'width' property set. This is done in order to maintain your width settings. Otherwise, when the property is set to true, the Table will auto-fill the remaining space similar to the layout of standard HTML Tables. */
        get: function () {
            return this.nativeElement ? this.nativeElement.columnResizeNormalize : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.columnResizeNormalize = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "columnResizeFeedback", {
        /** @description Sets or gets whether when resizing a column, a feedback showing the new column width in px will be displayed. */
        get: function () {
            return this.nativeElement ? this.nativeElement.columnResizeFeedback : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.columnResizeFeedback = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "columns", {
        /** @description Describes the columns properties. */
        get: function () {
            return this.nativeElement ? this.nativeElement.columns : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.columns = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "conditionalFormatting", {
        /** @description Sets or gets details about conditional formatting to be applied to the Table's cells. */
        get: function () {
            return this.nativeElement ? this.nativeElement.conditionalFormatting : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.conditionalFormatting = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "columnSizeMode", {
        /** @description Sets or gets the column sizing behavior. In 'auto' mode Columns are automatically sized based on their content and the value of the columnMinWidth property, unless there is not enough space in the Table, in which case ellipses are shown. User-set static column width is still respected. In 'default' mode Columns are sized according to the rules of the standard HTML table element's table-layout: fixed. Custom width can also be applied to columns in this case by setting the column width property. */
        get: function () {
            return this.nativeElement ? this.nativeElement.columnSizeMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.columnSizeMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "conditionalFormattingButton", {
        /** @description Sets or gets whether the "Conditional Formatting" button appears in the Table's header (toolbar). Clicking this button opens a dialog with formatting options. */
        get: function () {
            return this.nativeElement ? this.nativeElement.conditionalFormattingButton : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.conditionalFormattingButton = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "deferredScrollDelay", {
        /** @description This property determines the time in milliseconds after which the Table data is updated, when you vertically scroll. */
        get: function () {
            return this.nativeElement ? this.nativeElement.deferredScrollDelay : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.deferredScrollDelay = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "dataRowId", {
        /** @description When binding the dataSource property directly to an array (as opposed to an instance of JQX.DataAdapter), sets or gets the name of the data field in the source array to bind row ids to. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dataRowId : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dataRowId = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "dataSource", {
        /** @description Determines the data source of the table component. The data source of the Table can be a regular Array or a DataAdapter instance. You can read more about the dataAdapter here - https://www.htmlelements.com/docs/data-adapter/. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dataSource : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dataSource = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "dataSourceSettings", {
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
    Object.defineProperty(TableComponent.prototype, "dataTransform", {
        /** @description Disables the interaction with the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dataTransform : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dataTransform = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "disabled", {
        /** @description Sets or gets whether the Table can be edited. */
        get: function () {
            return this.nativeElement ? this.nativeElement.disabled : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disabled = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "editing", {
        /** @description Sets or gets the edit mode. */
        get: function () {
            return this.nativeElement ? this.nativeElement.editing : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.editing = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "editMode", {
        /** @description Sets or gets whether Row hierarchies are expanded by default, when created. Use this property when you want your groups to be expanded by default, when the Table is grouped or when you use the Table in tree mode. */
        get: function () {
            return this.nativeElement ? this.nativeElement.editMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.editMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "expandHierarchy", {
        /** @description Sets or gets whether the Table can be filtered. By default, the Table can be filtered by all string and numeric columns through a filter input in the header. */
        get: function () {
            return this.nativeElement ? this.nativeElement.expandHierarchy : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.expandHierarchy = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "filtering", {
        /** @description Sets or gets whether the Table can be filtered via a filter row. */
        get: function () {
            return this.nativeElement ? this.nativeElement.filtering : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.filtering = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "filterRow", {
        /** @description Sets or gets the id of an HTML template element to be applied as a custom filter template. */
        get: function () {
            return this.nativeElement ? this.nativeElement.filterRow : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.filterRow = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "filterTemplate", {
        /** @description Sets or gets the id of an HTML template element to be applied as footer row(s). */
        get: function () {
            return this.nativeElement ? this.nativeElement.filterTemplate : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.filterTemplate = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "footerRow", {
        /** @description Sets or gets whether Excel-like formulas can be passed as cell values. Formulas are always preceded by the = sign and are re-evaluated when cell values are changed. This feature depends on the third-party free plug-in formula-parser (the file formula-parser.min.js has to be referenced). */
        get: function () {
            return this.nativeElement ? this.nativeElement.footerRow : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.footerRow = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "formulas", {
        /** @description Sets or gets whether the Table's footer is sticky/frozen. */
        get: function () {
            return this.nativeElement ? this.nativeElement.formulas : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.formulas = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "freezeFooter", {
        /** @description Sets or gets whether the Table's column header is sticky/frozen. */
        get: function () {
            return this.nativeElement ? this.nativeElement.freezeFooter : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.freezeFooter = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "freezeHeader", {
        /** @description Sets or gets whether grouping the Table is enabled. */
        get: function () {
            return this.nativeElement ? this.nativeElement.freezeHeader : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.freezeHeader = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "grouping", {
        /** @description Allows to customize the header of the element. The property accepts the id of an HTMLElement, HTMLTemplateElement, function or a string that will be parsed as HTML. When set to a function it contains one argument - the header element of the Table. */
        get: function () {
            return this.nativeElement ? this.nativeElement.grouping : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.grouping = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "groupFormatFunction", {
        /** @description Sets or gets whether navigation with the keyboard is enabled in the Table. */
        get: function () {
            return this.nativeElement ? this.nativeElement.groupFormatFunction : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.groupFormatFunction = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "headerRow", {
        /** @description Sets or gets the behavior when loading column settings either via autoLoadState or loadState. Applicable only when stateSettings contains 'columns'. */
        get: function () {
            return this.nativeElement ? this.nativeElement.headerRow : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.headerRow = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "keyboardNavigation", {
        /** @description Sets or gets the language. Used in conjunction with the property messages.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.keyboardNavigation : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.keyboardNavigation = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "loadColumnStateBehavior", {
        /** @description Sets or gets an object specifying strings used in the element that can be localized. Used in conjunction with the property locale.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.loadColumnStateBehavior : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.loadColumnStateBehavior = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "locale", {
        /** @description Sets or gets the page size (when paging is enabled). */
        get: function () {
            return this.nativeElement ? this.nativeElement.locale : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.locale = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "messages", {
        /** @description Sets or gets the current (zero-based) page index (when paging is enabled). */
        get: function () {
            return this.nativeElement ? this.nativeElement.messages : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.messages = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "onCellRender", {
        /** @description Sets or gets whether paging is enabled. */
        get: function () {
            return this.nativeElement ? this.nativeElement.onCellRender : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.onCellRender = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "onColumnRender", {
        /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
        get: function () {
            return this.nativeElement ? this.nativeElement.onColumnRender : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.onColumnRender = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "onInit", {
        /** @description Sets or gets a string template to be applied as row detail template. Each cell value in the master row can be placed in the detail row by specifying the cell's data field in double curly brackets (e.g. {{price}}. The details can then be displayed by expanding the row by clicking it. */
        get: function () {
            return this.nativeElement ? this.nativeElement.onInit : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.onInit = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "pageSize", {
        /** @description Sets or gets an array of the Table's selected row's ids. */
        get: function () {
            return this.nativeElement ? this.nativeElement.pageSize : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.pageSize = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "pageIndex", {
        /** @description Sets or gets whether row selection (via checkboxes) is enabled. */
        get: function () {
            return this.nativeElement ? this.nativeElement.pageIndex : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.pageIndex = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "paging", {
        /** @description Sets or gets the selection mode. Only applicable when selection is enabled. */
        get: function () {
            return this.nativeElement ? this.nativeElement.paging : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.paging = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "rightToLeft", {
        /** @description Sets or gets whether row selection (via checkboxes) is hierarchical. When a parent row is selected, all sub rows are selected, too. */
        get: function () {
            return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "rowDetailTemplate", {
        /** @description Determines the sorting mode of the Table. */
        get: function () {
            return this.nativeElement ? this.nativeElement.rowDetailTemplate : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.rowDetailTemplate = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "selected", {
        /** @description Sets or gets what settings of the Table's state can be saved (by autoSaveState or saveState) or loaded (by autoLoadState or loadState). */
        get: function () {
            return this.nativeElement ? this.nativeElement.selected : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.selected = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "selection", {
        /** @description Determines the theme. Theme defines the look of the element */
        get: function () {
            return this.nativeElement ? this.nativeElement.selection : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.selection = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "selectionMode", {
        /** @description Sets or gets whether when hovering a cell with truncated content, a tooltip with the full content will be shown. */
        get: function () {
            return this.nativeElement ? this.nativeElement.selectionMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.selectionMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "selectionByHierarchy", {
        /** @description Enables or disables HTML virtualization. This functionality allows for only visible rows to be rendered, resulting in an increased Table performance. */
        get: function () {
            return this.nativeElement ? this.nativeElement.selectionByHierarchy : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.selectionByHierarchy = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "sort", {
        /** @description undefined */
        get: function () {
            return this.nativeElement ? this.nativeElement.sort : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.sort = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "sortMode", {
        /** @description undefined */
        get: function () {
            return this.nativeElement ? this.nativeElement.sortMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.sortMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "stateSettings", {
        /** @description undefined */
        get: function () {
            return this.nativeElement ? this.nativeElement.stateSettings : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.stateSettings = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "theme", {
        /** @description undefined */
        get: function () {
            return this.nativeElement ? this.nativeElement.theme : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.theme = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "tooltip", {
        /** @description undefined */
        get: function () {
            return this.nativeElement ? this.nativeElement.tooltip : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.tooltip = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "virtualization", {
        /** @description undefined */
        get: function () {
            return this.nativeElement ? this.nativeElement.virtualization : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.virtualization = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /** @description Adds a new row. When you invoke the method, pass a JSON object with the row's data.
    * @param {any} data. JSON object with the new row's data. Sample JSON: {firstName: 'Peter', lastName: 'Fuller'}.
    */
    TableComponent.prototype.addRow = function (data) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.addRow(data);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.addRow(data);
            });
        }
    };
    /** @description Adds a filter to a specific column.
    * @param {string} dataField. The column's data field.
    * @param {any} filter. FilterGroup object.
    */
    TableComponent.prototype.addFilter = function (dataField, filter) {
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
    /** @description Groups by a column.
    * @param {string} dataField. The column's data field.
    */
    TableComponent.prototype.addGroup = function (dataField) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.addGroup(dataField);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.addGroup(dataField);
            });
        }
    };
    /** @description Begins an edit operation.
    * @param {string | number} row. The id of the row to edit.
    * @param {string} dataField?. The dataField of the cell's column. May be omitted when <strong>editMode</strong> is <em>'row'</em>.
    */
    TableComponent.prototype.beginEdit = function (row, dataField) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.beginEdit(row, dataField);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.beginEdit(row, dataField);
            });
        }
    };
    /** @description Begins an update operation. Suspends all table refreshes and renders.
    */
    TableComponent.prototype.beginUpdate = function () {
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
    /** @description Ends the current edit operation and discards changes.
    */
    TableComponent.prototype.cancelEdit = function () {
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
    /** @description Clears applied filters.
    */
    TableComponent.prototype.clearFilters = function () {
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
    /** @description Clears grouping.
    */
    TableComponent.prototype.clearGrouping = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearGrouping();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.clearGrouping();
            });
        }
    };
    /** @description Clears selection.
    */
    TableComponent.prototype.clearSelection = function () {
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
    /** @description Clears the Table sorting.
    */
    TableComponent.prototype.clearSort = function () {
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
    /** @description Collapses all rows (in tree mode).
    */
    TableComponent.prototype.collapseAllRows = function () {
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
    /** @description Collapses all groups (in tree mode).
    */
    TableComponent.prototype.collapseAllGroups = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapseAllGroups();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.collapseAllGroups();
            });
        }
    };
    /** @description Collapses all row details. Rows that have details defined via the rowDetailTemplate will be collapsed.
    */
    TableComponent.prototype.collapseAllRowDetails = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapseAllRowDetails();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.collapseAllRowDetails();
            });
        }
    };
    /** @description Collapses a group.
    * @param {string} index. The group's hierarchical index.
    */
    TableComponent.prototype.collapseGroup = function (index) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapseGroup(index);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.collapseGroup(index);
            });
        }
    };
    /** @description Collapses a row (in tree mode).
    * @param {string | number} rowId. The id of the row to collapse.
    */
    TableComponent.prototype.collapseRow = function (rowId) {
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
    /** @description Disables a selection of a row. When the 'selection' property is set to 'true', selection is enabled for all rows by default.
    * @param {string | number | (string | number)[]} rowId. The id of the row (or an array of row ids) to select.
    */
    TableComponent.prototype.disableSelect = function (rowId) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.disableSelect(rowId);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.disableSelect(rowId);
            });
        }
    };
    /** @description Enables a selection of a row, if it was previously disabled through a 'disableSelect' method call. When the 'selection' property is set to 'true', selection is enabled for all rows by default.
    * @param {string | number | (string | number)[]} rowId. The id of the row (or an array of row ids) to select.
    */
    TableComponent.prototype.enableSelect = function (rowId) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.enableSelect(rowId);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.enableSelect(rowId);
            });
        }
    };
    /** @description Ends the current edit operation and saves changes.
    */
    TableComponent.prototype.endEdit = function () {
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
    /** @description Ends an update operation. Resumes all table refreshes and renders. Re-renders the Table.
    * @param {boolean} refresh?. Optionally you can pass 'false' in case you need to manually call the 'refresh' method. By default, the table is re-rendered.
    */
    TableComponent.prototype.endUpdate = function (refresh) {
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
    /** @description Expands all rows (in tree mode).
    */
    TableComponent.prototype.expandAllRows = function () {
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
    /** @description Expands all groups (in tree mode).
    */
    TableComponent.prototype.expandAllGroups = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.expandAllGroups();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.expandAllGroups();
            });
        }
    };
    /** @description Expands all row details. Rows that have details defined via rowDetailTemplate will be expanded.
    */
    TableComponent.prototype.expandAllRowDetails = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.expandAllRowDetails();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.expandAllRowDetails();
            });
        }
    };
    /** @description Expands a group.
    * @param {string} index. The group's hierarchical index.
    */
    TableComponent.prototype.expandGroup = function (index) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.expandGroup(index);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.expandGroup(index);
            });
        }
    };
    /** @description Expands a row (in tree mode).
    * @param {string | number} rowId. The id of the row to expand.
    */
    TableComponent.prototype.expandRow = function (rowId) {
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
    /** @description Exports the Table's data.
    * @param {string} dataFormat. The file format to export to. Supported formats: 'csv', 'html', 'json', 'pdf', 'tsv', 'xlsx', 'xml'.
    * @param {string} fileName?. The name of the file to export to
    * @param {boolean} exportFiltered?. If set to true, exports only filtered records
    * @param {Function} callback?. A callback function to pass the exported data to (if fileName is not provided)
    * @returns {any}
  */
    TableComponent.prototype.exportData = function (dataFormat, fileName, exportFiltered, callback) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.exportData(dataFormat, fileName, exportFiltered, callback);
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
    TableComponent.prototype.getSelection = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
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
    /** @description Returns the Table's state, containing information about columns, expanded rows, selected rows, applied fitering, grouping, and sorted columns. It can then be stored or passed to the method loadState.
    * @returns {any}
  */
    TableComponent.prototype.getState = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getState();
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
    /** @description Returns the value of a cell.
    * @param {string | number} row. The id of the cell's row.
    * @param {string} dataField. The dataField of the cell's column.
    * @returns {any}
  */
    TableComponent.prototype.getValue = function (row, dataField) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getValue(row, dataField);
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
    /** @description Gets a column property.
    * @param {string} columnDataField. Column field name.
    * @param {string} propertyName. Column property name.
    * @returns {any}
  */
    TableComponent.prototype.getColumnProperty = function (columnDataField, propertyName) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getColumnProperty(columnDataField, propertyName);
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
    /** @description Checks whether a group is expanded and returns true or false. false is returned when the group index is undefined, too.
    * @param {string} index. The group's hierarchical index.
    * @returns {boolean}
  */
    TableComponent.prototype.isGroupExpanded = function (index) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.isGroupExpanded(index);
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
    /** @description Loads the Table's state. Information about columns, expanded rows, selected rows, applied fitering, grouping, and sorted columns is loaded, based on the value of the stateSettings property.
    * @param {any} state?. An object returned by one of the methods <strong>getState</strong> or <strong>saveState</strong>. If a state is not passed, the method tries to load the state from the browser's localStorage.
    */
    TableComponent.prototype.loadState = function (state) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.loadState(state);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.loadState(state);
            });
        }
    };
    /** @description Navigates to a page.
    * @param {number} pageIndex. The zero-based page index to navigate to.
    */
    TableComponent.prototype.navigateTo = function (pageIndex) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.navigateTo(pageIndex);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.navigateTo(pageIndex);
            });
        }
    };
    /** @description Refreshes the table.
    */
    TableComponent.prototype.refresh = function () {
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
    TableComponent.prototype.removeFilter = function (dataField) {
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
    /** @description Removes grouping by a column.
    * @param {string} dataField. The column's data field.
    */
    TableComponent.prototype.removeGroup = function (dataField) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeGroup(dataField);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.removeGroup(dataField);
            });
        }
    };
    /** @description Removes a row by its id.
    * @param {string | number} row. The id of the cell's row.
    */
    TableComponent.prototype.removeRow = function (row) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeRow(row);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.removeRow(row);
            });
        }
    };
    /** @description Saves the Table's state. Information about columns, expanded rows, selected rows, applied fitering, grouping, and sorted columns is saved, based on the value of the stateSettings property.
    * @returns {any}
  */
    TableComponent.prototype.saveState = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.saveState();
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
    /** @description Selects one or more rows.
    * @param {string | number | (string | number)[]} rowId. The id of the row (or an array of row ids) to select.
    */
    TableComponent.prototype.select = function (rowId) {
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
    /** @description Sets the value of a cell.
    * @param {string | number} row. The id of the cell's row.
    * @param {string} dataField. The dataField of the cell's column.
    * @param {any} value. The new value of the cell.
    */
    TableComponent.prototype.setValue = function (row, dataField, value) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.setValue(row, dataField, value);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.setValue(row, dataField, value);
            });
        }
    };
    /** @description Sorts the Table by a column.
    * @param {string} columnDataField. Column field name.
    * @param {string} sortOrder?. Sort order. Possible values: 'asc' (ascending), 'desc' (descending), and null (removes sorting by column). If not provided, toggles the sorting.
    */
    TableComponent.prototype.sortBy = function (columnDataField, sortOrder) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.sortBy(columnDataField, sortOrder);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.sortBy(columnDataField, sortOrder);
            });
        }
    };
    /** @description Sets a column property.
    * @param {string} columnDataField. Column field name.
    * @param {string} propertyName. Column property name.
    * @param {any} propertyValue. Property value.
    */
    TableComponent.prototype.setColumnProperty = function (columnDataField, propertyName, propertyValue) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.setColumnProperty(columnDataField, propertyName, propertyValue);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.setColumnProperty(columnDataField, propertyName, propertyValue);
            });
        }
    };
    /** @description Updates a table row. The method expects two parameters - row id and JSON object with the new row data.
    * @param {string | number} rowId. The id of the row.
    * @param {any} data. JSON object with the new row's data. Example: {firstName: 'Peter', lastName: 'Fuller'}.
    */
    TableComponent.prototype.updateRow = function (rowId, data) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.updateRow(rowId, data);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.updateRow(rowId, data);
            });
        }
    };
    /** @description Unselects one or more rows.
    * @param {string | number | (string | number)[]} rowId. The id of the row (or an array of row ids) to unselect.
    */
    TableComponent.prototype.unselect = function (rowId) {
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
    Object.defineProperty(TableComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    TableComponent.prototype.ngOnInit = function () {
    };
    TableComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        this.listen();
    };
    TableComponent.prototype.ngOnDestroy = function () {
        this.unlisten();
    };
    TableComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    /** @description Add event listeners. */
    TableComponent.prototype.listen = function () {
        var that = this;
        that.eventHandlers['cellBeginEditHandler'] = function (event) { that.onCellBeginEdit.emit(event); };
        that.nativeElement.addEventListener('cellBeginEdit', that.eventHandlers['cellBeginEditHandler']);
        that.eventHandlers['cellClickHandler'] = function (event) { that.onCellClick.emit(event); };
        that.nativeElement.addEventListener('cellClick', that.eventHandlers['cellClickHandler']);
        that.eventHandlers['cellEndEditHandler'] = function (event) { that.onCellEndEdit.emit(event); };
        that.nativeElement.addEventListener('cellEndEdit', that.eventHandlers['cellEndEditHandler']);
        that.eventHandlers['changeHandler'] = function (event) { that.onChange.emit(event); };
        that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
        that.eventHandlers['collapseHandler'] = function (event) { that.onCollapse.emit(event); };
        that.nativeElement.addEventListener('collapse', that.eventHandlers['collapseHandler']);
        that.eventHandlers['expandHandler'] = function (event) { that.onExpand.emit(event); };
        that.nativeElement.addEventListener('expand', that.eventHandlers['expandHandler']);
        that.eventHandlers['columnClickHandler'] = function (event) { that.onColumnClick.emit(event); };
        that.nativeElement.addEventListener('columnClick', that.eventHandlers['columnClickHandler']);
        that.eventHandlers['closeColumnMenuHandler'] = function (event) { that.onCloseColumnMenu.emit(event); };
        that.nativeElement.addEventListener('closeColumnMenu', that.eventHandlers['closeColumnMenuHandler']);
        that.eventHandlers['columnResizeHandler'] = function (event) { that.onColumnResize.emit(event); };
        that.nativeElement.addEventListener('columnResize', that.eventHandlers['columnResizeHandler']);
        that.eventHandlers['filterHandler'] = function (event) { that.onFilter.emit(event); };
        that.nativeElement.addEventListener('filter', that.eventHandlers['filterHandler']);
        that.eventHandlers['groupHandler'] = function (event) { that.onGroup.emit(event); };
        that.nativeElement.addEventListener('group', that.eventHandlers['groupHandler']);
        that.eventHandlers['openColumnMenuHandler'] = function (event) { that.onOpenColumnMenu.emit(event); };
        that.nativeElement.addEventListener('openColumnMenu', that.eventHandlers['openColumnMenuHandler']);
        that.eventHandlers['pageHandler'] = function (event) { that.onPage.emit(event); };
        that.nativeElement.addEventListener('page', that.eventHandlers['pageHandler']);
        that.eventHandlers['rowBeginEditHandler'] = function (event) { that.onRowBeginEdit.emit(event); };
        that.nativeElement.addEventListener('rowBeginEdit', that.eventHandlers['rowBeginEditHandler']);
        that.eventHandlers['rowEndEditHandler'] = function (event) { that.onRowEndEdit.emit(event); };
        that.nativeElement.addEventListener('rowEndEdit', that.eventHandlers['rowEndEditHandler']);
        that.eventHandlers['sortHandler'] = function (event) { that.onSort.emit(event); };
        that.nativeElement.addEventListener('sort', that.eventHandlers['sortHandler']);
    };
    /** @description Remove event listeners. */
    TableComponent.prototype.unlisten = function () {
        var that = this;
        if (that.eventHandlers['cellBeginEditHandler']) {
            that.nativeElement.removeEventListener('cellBeginEdit', that.eventHandlers['cellBeginEditHandler']);
        }
        if (that.eventHandlers['cellClickHandler']) {
            that.nativeElement.removeEventListener('cellClick', that.eventHandlers['cellClickHandler']);
        }
        if (that.eventHandlers['cellEndEditHandler']) {
            that.nativeElement.removeEventListener('cellEndEdit', that.eventHandlers['cellEndEditHandler']);
        }
        if (that.eventHandlers['changeHandler']) {
            that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
        }
        if (that.eventHandlers['collapseHandler']) {
            that.nativeElement.removeEventListener('collapse', that.eventHandlers['collapseHandler']);
        }
        if (that.eventHandlers['expandHandler']) {
            that.nativeElement.removeEventListener('expand', that.eventHandlers['expandHandler']);
        }
        if (that.eventHandlers['columnClickHandler']) {
            that.nativeElement.removeEventListener('columnClick', that.eventHandlers['columnClickHandler']);
        }
        if (that.eventHandlers['closeColumnMenuHandler']) {
            that.nativeElement.removeEventListener('closeColumnMenu', that.eventHandlers['closeColumnMenuHandler']);
        }
        if (that.eventHandlers['columnResizeHandler']) {
            that.nativeElement.removeEventListener('columnResize', that.eventHandlers['columnResizeHandler']);
        }
        if (that.eventHandlers['filterHandler']) {
            that.nativeElement.onfilterHandler = null;
        }
        if (that.eventHandlers['groupHandler']) {
            that.nativeElement.removeEventListener('group', that.eventHandlers['groupHandler']);
        }
        if (that.eventHandlers['openColumnMenuHandler']) {
            that.nativeElement.removeEventListener('openColumnMenu', that.eventHandlers['openColumnMenuHandler']);
        }
        if (that.eventHandlers['pageHandler']) {
            that.nativeElement.removeEventListener('page', that.eventHandlers['pageHandler']);
        }
        if (that.eventHandlers['rowBeginEditHandler']) {
            that.nativeElement.removeEventListener('rowBeginEdit', that.eventHandlers['rowBeginEditHandler']);
        }
        if (that.eventHandlers['rowEndEditHandler']) {
            that.nativeElement.removeEventListener('rowEndEdit', that.eventHandlers['rowEndEditHandler']);
        }
        if (that.eventHandlers['sortHandler']) {
            that.nativeElement.removeEventListener('sort', that.eventHandlers['sortHandler']);
        }
    };
    TableComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    tslib_1.__decorate([
        Input()
    ], TableComponent.prototype, "animation", null);
    tslib_1.__decorate([
        Input()
    ], TableComponent.prototype, "autoLoadState", null);
    tslib_1.__decorate([
        Input()
    ], TableComponent.prototype, "autoSaveState", null);
    tslib_1.__decorate([
        Input()
    ], TableComponent.prototype, "columnGroups", null);
    tslib_1.__decorate([
        Input()
    ], TableComponent.prototype, "columnMinWidth", null);
    tslib_1.__decorate([
        Input()
    ], TableComponent.prototype, "columnReorder", null);
    tslib_1.__decorate([
        Input()
    ], TableComponent.prototype, "columnResize", null);
    tslib_1.__decorate([
        Input()
    ], TableComponent.prototype, "columnResizeNormalize", null);
    tslib_1.__decorate([
        Input()
    ], TableComponent.prototype, "columnResizeFeedback", null);
    tslib_1.__decorate([
        Input()
    ], TableComponent.prototype, "columns", null);
    tslib_1.__decorate([
        Input()
    ], TableComponent.prototype, "conditionalFormatting", null);
    tslib_1.__decorate([
        Input()
    ], TableComponent.prototype, "columnSizeMode", null);
    tslib_1.__decorate([
        Input()
    ], TableComponent.prototype, "conditionalFormattingButton", null);
    tslib_1.__decorate([
        Input()
    ], TableComponent.prototype, "deferredScrollDelay", null);
    tslib_1.__decorate([
        Input()
    ], TableComponent.prototype, "dataRowId", null);
    tslib_1.__decorate([
        Input()
    ], TableComponent.prototype, "dataSource", null);
    tslib_1.__decorate([
        Input()
    ], TableComponent.prototype, "dataSourceSettings", null);
    tslib_1.__decorate([
        Input()
    ], TableComponent.prototype, "dataTransform", null);
    tslib_1.__decorate([
        Input()
    ], TableComponent.prototype, "disabled", null);
    tslib_1.__decorate([
        Input()
    ], TableComponent.prototype, "editing", null);
    tslib_1.__decorate([
        Input()
    ], TableComponent.prototype, "editMode", null);
    tslib_1.__decorate([
        Input()
    ], TableComponent.prototype, "expandHierarchy", null);
    tslib_1.__decorate([
        Input()
    ], TableComponent.prototype, "filtering", null);
    tslib_1.__decorate([
        Input()
    ], TableComponent.prototype, "filterRow", null);
    tslib_1.__decorate([
        Input()
    ], TableComponent.prototype, "filterTemplate", null);
    tslib_1.__decorate([
        Input()
    ], TableComponent.prototype, "footerRow", null);
    tslib_1.__decorate([
        Input()
    ], TableComponent.prototype, "formulas", null);
    tslib_1.__decorate([
        Input()
    ], TableComponent.prototype, "freezeFooter", null);
    tslib_1.__decorate([
        Input()
    ], TableComponent.prototype, "freezeHeader", null);
    tslib_1.__decorate([
        Input()
    ], TableComponent.prototype, "grouping", null);
    tslib_1.__decorate([
        Input()
    ], TableComponent.prototype, "groupFormatFunction", null);
    tslib_1.__decorate([
        Input()
    ], TableComponent.prototype, "headerRow", null);
    tslib_1.__decorate([
        Input()
    ], TableComponent.prototype, "keyboardNavigation", null);
    tslib_1.__decorate([
        Input()
    ], TableComponent.prototype, "loadColumnStateBehavior", null);
    tslib_1.__decorate([
        Input()
    ], TableComponent.prototype, "locale", null);
    tslib_1.__decorate([
        Input()
    ], TableComponent.prototype, "messages", null);
    tslib_1.__decorate([
        Input()
    ], TableComponent.prototype, "onCellRender", null);
    tslib_1.__decorate([
        Input()
    ], TableComponent.prototype, "onColumnRender", null);
    tslib_1.__decorate([
        Input()
    ], TableComponent.prototype, "onInit", null);
    tslib_1.__decorate([
        Input()
    ], TableComponent.prototype, "pageSize", null);
    tslib_1.__decorate([
        Input()
    ], TableComponent.prototype, "pageIndex", null);
    tslib_1.__decorate([
        Input()
    ], TableComponent.prototype, "paging", null);
    tslib_1.__decorate([
        Input()
    ], TableComponent.prototype, "rightToLeft", null);
    tslib_1.__decorate([
        Input()
    ], TableComponent.prototype, "rowDetailTemplate", null);
    tslib_1.__decorate([
        Input()
    ], TableComponent.prototype, "selected", null);
    tslib_1.__decorate([
        Input()
    ], TableComponent.prototype, "selection", null);
    tslib_1.__decorate([
        Input()
    ], TableComponent.prototype, "selectionMode", null);
    tslib_1.__decorate([
        Input()
    ], TableComponent.prototype, "selectionByHierarchy", null);
    tslib_1.__decorate([
        Input()
    ], TableComponent.prototype, "sort", null);
    tslib_1.__decorate([
        Input()
    ], TableComponent.prototype, "sortMode", null);
    tslib_1.__decorate([
        Input()
    ], TableComponent.prototype, "stateSettings", null);
    tslib_1.__decorate([
        Input()
    ], TableComponent.prototype, "theme", null);
    tslib_1.__decorate([
        Input()
    ], TableComponent.prototype, "tooltip", null);
    tslib_1.__decorate([
        Input()
    ], TableComponent.prototype, "virtualization", null);
    tslib_1.__decorate([
        Output()
    ], TableComponent.prototype, "onCellBeginEdit", void 0);
    tslib_1.__decorate([
        Output()
    ], TableComponent.prototype, "onCellClick", void 0);
    tslib_1.__decorate([
        Output()
    ], TableComponent.prototype, "onCellEndEdit", void 0);
    tslib_1.__decorate([
        Output()
    ], TableComponent.prototype, "onChange", void 0);
    tslib_1.__decorate([
        Output()
    ], TableComponent.prototype, "onCollapse", void 0);
    tslib_1.__decorate([
        Output()
    ], TableComponent.prototype, "onExpand", void 0);
    tslib_1.__decorate([
        Output()
    ], TableComponent.prototype, "onColumnClick", void 0);
    tslib_1.__decorate([
        Output()
    ], TableComponent.prototype, "onCloseColumnMenu", void 0);
    tslib_1.__decorate([
        Output()
    ], TableComponent.prototype, "onColumnResize", void 0);
    tslib_1.__decorate([
        Output()
    ], TableComponent.prototype, "onFilter", void 0);
    tslib_1.__decorate([
        Output()
    ], TableComponent.prototype, "onGroup", void 0);
    tslib_1.__decorate([
        Output()
    ], TableComponent.prototype, "onOpenColumnMenu", void 0);
    tslib_1.__decorate([
        Output()
    ], TableComponent.prototype, "onPage", void 0);
    tslib_1.__decorate([
        Output()
    ], TableComponent.prototype, "onRowBeginEdit", void 0);
    tslib_1.__decorate([
        Output()
    ], TableComponent.prototype, "onRowEndEdit", void 0);
    tslib_1.__decorate([
        Output()
    ], TableComponent.prototype, "onSort", void 0);
    TableComponent = tslib_1.__decorate([
        Directive({
            selector: 'smart-table, [smart-table]'
        })
    ], TableComponent);
    return TableComponent;
}(BaseElement));
export { TableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQudGFibGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zbWFydC13ZWJjb21wb25lbnRzLWFuZ3VsYXIvdGFibGUvIiwic291cmNlcyI6WyJzbWFydC50YWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUosT0FBTyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVyRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFReEM7SUFBb0MsMENBQVc7SUFDOUMsd0JBQVksR0FBc0I7UUFBbEMsWUFDQyxrQkFBTSxHQUFHLENBQUMsU0FFVjtRQUVPLG1CQUFhLEdBQVUsRUFBRSxDQUFDO1FBbWZsQzs7Ozs7O1VBTUU7UUFDUSxxQkFBZSxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTFFOzs7Ozs7O1VBT0U7UUFDUSxpQkFBVyxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXRFOzs7Ozs7VUFNRTtRQUNRLG1CQUFhLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFeEU7OztVQUdFO1FBQ1EsY0FBUSxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRW5FOzs7O1VBSUU7UUFDUSxnQkFBVSxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXJFOzs7O1VBSUU7UUFDUSxjQUFRLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFbkU7OztVQUdFO1FBQ1EsbUJBQWEsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV4RTs7O1VBR0U7UUFDUSx1QkFBaUIsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUU1RTs7Ozs7VUFL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LE1BQU0sRUFBRTt3REFBOEQ7SUFVN0Q7UUFBVCxNQUFNLEVBQUU7a0RBQXdEO0lBL21CckQsY0FBYztRQUoxQixTQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsNEJBQTRCO1NBQ3RDLENBQUM7T0FFVyxjQUFjLENBbTZDMUI7SUFBRCxxQkFBQztDQUFBLEFBbjZDRCxDQUFvQyxXQUFXLEdBbTZDOUM7U0FuNkNZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUYWJsZSB9IGZyb20gJy4vLi4vaW5kZXgnO1xuaW1wb3J0IHsgQW5pbWF0aW9uLCBUYWJsZUNvbHVtbkRhdGFUeXBlLCBUYWJsZUNvbHVtbkZyZWV6ZSwgVGFibGVDb25kaXRpb25hbEZvcm1hdHRpbmdDb25kaXRpb24sIFRhYmxlQ29uZGl0aW9uYWxGb3JtYXR0aW5nRm9udEZhbWlseSwgVGFibGVDb25kaXRpb25hbEZvcm1hdHRpbmdGb250U2l6ZSwgVGFibGVDb2x1bW5TaXplTW9kZSwgVGFibGVEYXRhU291cmNlU2V0dGluZ3NTYW5pdGl6ZUhUTUwsIFRhYmxlRGF0YVNvdXJjZVNldHRpbmdzU2FuaXRpemVIVE1MUmVuZGVyLCBUYWJsZURhdGFTb3VyY2VTZXR0aW5nc0RhdGFGaWVsZERhdGFUeXBlLCBUYWJsZURhdGFTb3VyY2VTZXR0aW5nc0RhdGFTb3VyY2VUeXBlLCBUYWJsZUVkaXRNb2RlLCBUYWJsZUxvYWRDb2x1bW5TdGF0ZUJlaGF2aW9yLCBUYWJsZVBhZ2VTaXplLCBUYWJsZVNlbGVjdGlvbk1vZGUsIFRhYmxlU29ydE1vZGUsIFRhYmxlQ29sdW1uR3JvdXAsIFRhYmxlQ29sdW1uLCBUYWJsZUNvbmRpdGlvbmFsRm9ybWF0dGluZywgVGFibGVEYXRhU291cmNlU2V0dGluZ3MsIFRhYmxlRGF0YVNvdXJjZVNldHRpbmdzRGF0YUZpZWxkLCBFbGVtZW50UmVuZGVyTW9kZX0gZnJvbSAnLi8uLi9pbmRleCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIERpcmVjdGl2ZSwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIFNpbXBsZUNoYW5nZXMsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXNlRWxlbWVudCwgU21hcnQgfSBmcm9tICcuL3NtYXJ0LmVsZW1lbnQnO1xuZXhwb3J0IHsgQW5pbWF0aW9uLCBUYWJsZUNvbHVtbkRhdGFUeXBlLCBUYWJsZUNvbHVtbkZyZWV6ZSwgVGFibGVDb25kaXRpb25hbEZvcm1hdHRpbmdDb25kaXRpb24sIFRhYmxlQ29uZGl0aW9uYWxGb3JtYXR0aW5nRm9udEZhbWlseSwgVGFibGVDb25kaXRpb25hbEZvcm1hdHRpbmdGb250U2l6ZSwgVGFibGVDb2x1bW5TaXplTW9kZSwgVGFibGVEYXRhU291cmNlU2V0dGluZ3NTYW5pdGl6ZUhUTUwsIFRhYmxlRGF0YVNvdXJjZVNldHRpbmdzU2FuaXRpemVIVE1MUmVuZGVyLCBUYWJsZURhdGFTb3VyY2VTZXR0aW5nc0RhdGFGaWVsZERhdGFUeXBlLCBUYWJsZURhdGFTb3VyY2VTZXR0aW5nc0RhdGFTb3VyY2VUeXBlLCBUYWJsZUVkaXRNb2RlLCBUYWJsZUxvYWRDb2x1bW5TdGF0ZUJlaGF2aW9yLCBUYWJsZVBhZ2VTaXplLCBUYWJsZVNlbGVjdGlvbk1vZGUsIFRhYmxlU29ydE1vZGUsIFRhYmxlQ29sdW1uR3JvdXAsIFRhYmxlQ29sdW1uLCBUYWJsZUNvbmRpdGlvbmFsRm9ybWF0dGluZywgVGFibGVEYXRhU291cmNlU2V0dGluZ3MsIFRhYmxlRGF0YVNvdXJjZVNldHRpbmdzRGF0YUZpZWxkLCBFbGVtZW50UmVuZGVyTW9kZX0gZnJvbSAnLi8uLi9pbmRleCc7XG5leHBvcnQgeyBTbWFydCB9IGZyb20gJy4vc21hcnQuZWxlbWVudCc7XG5leHBvcnQgeyBUYWJsZSB9IGZyb20gJy4vLi4vaW5kZXgnO1xuXG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ3NtYXJ0LXRhYmxlLCBbc21hcnQtdGFibGVdJ1xufSlcblxuZXhwb3J0IGNsYXNzIFRhYmxlQ29tcG9uZW50IGV4dGVuZHMgQmFzZUVsZW1lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcblx0Y29uc3RydWN0b3IocmVmOiBFbGVtZW50UmVmPFRhYmxlPikge1xuXHRcdHN1cGVyKHJlZik7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID0gcmVmLm5hdGl2ZUVsZW1lbnQgYXMgVGFibGU7XG5cdH1cblxuXHRwcml2YXRlIGV2ZW50SGFuZGxlcnM6IGFueVtdID0gW107XG5cblx0cHVibGljIG5hdGl2ZUVsZW1lbnQ6IFRhYmxlO1xuXHQvKiogQGRlc2NyaXB0aW9uIENyZWF0ZXMgdGhlIGNvbXBvbmVudCBvbiBkZW1hbmQuXG5cdCAqIEBwYXJhbSBwcm9wZXJ0aWVzIEFuIG9wdGlvbmFsIG9iamVjdCBvZiBwcm9wZXJ0aWVzLCB3aGljaCB3aWxsIGJlIGFkZGVkIHRvIHRoZSB0ZW1wbGF0ZSBiaW5kZWQgb25lcy5cblx0ICovXG5cdHB1YmxpYyBjcmVhdGVDb21wb25lbnQocHJvcGVydGllcyA9IHt9KTogYW55IHtcbiAgICBcdHRoaXMubmF0aXZlRWxlbWVudCA9IDxUYWJsZT5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzbWFydC10YWJsZScpO1xuXHRcdGZvciAobGV0IHByb3BlcnR5TmFtZSBpbiBwcm9wZXJ0aWVzKSB7IFxuIFx0XHRcdHRoaXMubmF0aXZlRWxlbWVudFtwcm9wZXJ0eU5hbWVdID0gcHJvcGVydGllc1twcm9wZXJ0eU5hbWVdO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50O1xuXHR9XG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSBhbmltYXRpb24gbW9kZS4gQW5pbWF0aW9uIGlzIGRpc2FibGVkIHdoZW4gdGhlIHByb3BlcnR5IGlzIHNldCB0byAnbm9uZScgKi9cblx0QElucHV0KClcblx0Z2V0IGFuaW1hdGlvbigpOiBBbmltYXRpb24ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYW5pbWF0aW9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBhbmltYXRpb24odmFsdWU6IEFuaW1hdGlvbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hbmltYXRpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRW5hYmxlcyBvciBkaXNhYmxlcyBhdXRvIGxvYWQgc3RhdGUgZnJvbSB0aGUgYnJvd3NlcidzIGxvY2FsU3RvcmFnZS4gSW5mb3JtYXRpb24gYWJvdXQgY29sdW1ucywgZXhwYW5kZWQgcm93cywgc2VsZWN0ZWQgcm93cywgYXBwbGllZCBmaXRlcmluZywgZ3JvdXBpbmcsIGFuZCBzb3J0ZWQgY29sdW1ucyBpcyBsb2FkZWQsIGJhc2VkIG9uIHRoZSB2YWx1ZSBvZiB0aGUgc3RhdGVTZXR0aW5ncyBwcm9wZXJ0eS4gKi9cblx0QElucHV0KClcblx0Z2V0IGF1dG9Mb2FkU3RhdGUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hdXRvTG9hZFN0YXRlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBhdXRvTG9hZFN0YXRlKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9Mb2FkU3RhdGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRW5hYmxlcyBvciBkaXNhYmxlcyBhdXRvIHNhdmUgc3RhdGUgdG8gdGhlIGJyb3dzZXIncyBsb2NhbFN0b3JhZ2UuIEluZm9ybWF0aW9uIGFib3V0IGNvbHVtbnMsIGV4cGFuZGVkIHJvd3MsIHNlbGVjdGVkIHJvd3MsIGFwcGxpZWQgZml0ZXJpbmcsIGdyb3VwaW5nLCBhbmQgICBzb3J0ZWQgY29sdW1ucyBpcyBzYXZlZCwgYmFzZWQgb24gdGhlIHZhbHVlIG9mIHRoZSBzdGF0ZVNldHRpbmdzIHByb3BlcnR5LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgYXV0b1NhdmVTdGF0ZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9TYXZlU3RhdGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGF1dG9TYXZlU3RhdGUodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYXV0b1NhdmVTdGF0ZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgYSBsaXN0IG9mIGNvbHVtbiBncm91cHMgdGhhdCBjb25zdGl0dXRlIHRoZSBjb2x1bW4gaGVhZGVyIGhpZXJhcmNoeS4gTm90ZTogd2hlbiBjb2x1bW4gaGVhZGVyIGhpZXJhcmNoeSBpcyBjcmVhdGVkLCBjb2x1bW4gcmVzaXppbmcgYW5kIGF1dG8tc2l6aW5nIGlzIG5vdCBzdXBwb3J0ZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBjb2x1bW5Hcm91cHMoKTogVGFibGVDb2x1bW5Hcm91cFtdIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbHVtbkdyb3VwcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgY29sdW1uR3JvdXBzKHZhbHVlOiBUYWJsZUNvbHVtbkdyb3VwW10pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sdW1uR3JvdXBzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgbWluIHdpZHRoIG9mIGNvbHVtbnMgd2hlbiBjb2x1bW5TaXplTW9kZSBpcyAnYXV0bycgb3Igd2hlbiByZXNpemluZyBjb2x1bW5zLiBUaGlzIHByb3BlcnR5IGhhcyBubyBlZmZlY3Qgb24gY29sdW1ucyB3aXRoIHByb2dyYW1tYXRpY2FsbHkgc2V0IHdpZHRoLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgY29sdW1uTWluV2lkdGgoKTogc3RyaW5nIHwgbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbHVtbk1pbldpZHRoIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjb2x1bW5NaW5XaWR0aCh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbHVtbk1pbldpZHRoID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB3aGV0aGVyIHRoZSByZW9yZGVyaW5nIG9mIGNvbHVtbnMgaXMgZW5hYmxlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IGNvbHVtblJlb3JkZXIoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb2x1bW5SZW9yZGVyIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjb2x1bW5SZW9yZGVyKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbHVtblJlb3JkZXIgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHdoZXRoZXIgdGhlIHJlc2l6aW5nIG9mIGNvbHVtbnMgaXMgZW5hYmxlZC4gTm90ZTogY29sdW1uIHNpemVzIGNvbnRpbnVlIHRvIGFkaGVyZSB0byB0aGUgYmVoYXZpb3Igb2YgdGhlIHN0YW5kYXJkIEhUTUwgdGFibGUgZWxlbWVudCdzIHRhYmxlLWxheW91dDogZml4ZWQsIHVwb24gd2hpY2ggc21hcnQtdGFibGUgaXMgYmFzZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBjb2x1bW5SZXNpemUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb2x1bW5SZXNpemUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGNvbHVtblJlc2l6ZSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb2x1bW5SZXNpemUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBwcm9wZXJ0eSBhZmZlY3RzIHRoZSB0YWJsZSBzaXppbmcsIHdoZW4gdGhlIGNvbHVtblNpemVNb2RlIGlzICdkZWZhdWx0Jy4gV2hlbiAnY29sdW1uUmVzaXplTm9ybWFsaXplJyBpcyBmYWxzZSwgdGhlIFRhYmxlIHdpbGwgYWRkIGFuIGFkZGl0aW9uYWwgVEggZWxlbWVudCwgaWYgYWxsIHRhYmxlIGNvbHVtbnMgaGF2ZSB0aGUgJ3dpZHRoJyBwcm9wZXJ0eSBzZXQuIFRoaXMgaXMgZG9uZSBpbiBvcmRlciB0byBtYWludGFpbiB5b3VyIHdpZHRoIHNldHRpbmdzLiBPdGhlcndpc2UsIHdoZW4gdGhlIHByb3BlcnR5IGlzIHNldCB0byB0cnVlLCB0aGUgVGFibGUgd2lsbCBhdXRvLWZpbGwgdGhlIHJlbWFpbmluZyBzcGFjZSBzaW1pbGFyIHRvIHRoZSBsYXlvdXQgb2Ygc3RhbmRhcmQgSFRNTCBUYWJsZXMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBjb2x1bW5SZXNpemVOb3JtYWxpemUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb2x1bW5SZXNpemVOb3JtYWxpemUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGNvbHVtblJlc2l6ZU5vcm1hbGl6ZSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb2x1bW5SZXNpemVOb3JtYWxpemUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHdoZXRoZXIgd2hlbiByZXNpemluZyBhIGNvbHVtbiwgYSBmZWVkYmFjayBzaG93aW5nIHRoZSBuZXcgY29sdW1uIHdpZHRoIGluIHB4IHdpbGwgYmUgZGlzcGxheWVkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgY29sdW1uUmVzaXplRmVlZGJhY2soKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb2x1bW5SZXNpemVGZWVkYmFjayA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgY29sdW1uUmVzaXplRmVlZGJhY2sodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sdW1uUmVzaXplRmVlZGJhY2sgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGVzY3JpYmVzIHRoZSBjb2x1bW5zIHByb3BlcnRpZXMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBjb2x1bW5zKCk6IFRhYmxlQ29sdW1uW10ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sdW1ucyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgY29sdW1ucyh2YWx1ZTogVGFibGVDb2x1bW5bXSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb2x1bW5zID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyBkZXRhaWxzIGFib3V0IGNvbmRpdGlvbmFsIGZvcm1hdHRpbmcgdG8gYmUgYXBwbGllZCB0byB0aGUgVGFibGUncyBjZWxscy4gKi9cblx0QElucHV0KClcblx0Z2V0IGNvbmRpdGlvbmFsRm9ybWF0dGluZygpOiBUYWJsZUNvbmRpdGlvbmFsRm9ybWF0dGluZ1tdIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbmRpdGlvbmFsRm9ybWF0dGluZyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgY29uZGl0aW9uYWxGb3JtYXR0aW5nKHZhbHVlOiBUYWJsZUNvbmRpdGlvbmFsRm9ybWF0dGluZ1tdKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbmRpdGlvbmFsRm9ybWF0dGluZyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIGNvbHVtbiBzaXppbmcgYmVoYXZpb3IuIEluICdhdXRvJyBtb2RlIENvbHVtbnMgYXJlIGF1dG9tYXRpY2FsbHkgc2l6ZWQgYmFzZWQgb24gdGhlaXIgY29udGVudCBhbmQgdGhlIHZhbHVlIG9mIHRoZSBjb2x1bW5NaW5XaWR0aCBwcm9wZXJ0eSwgdW5sZXNzIHRoZXJlIGlzIG5vdCBlbm91Z2ggc3BhY2UgaW4gdGhlIFRhYmxlLCBpbiB3aGljaCBjYXNlIGVsbGlwc2VzIGFyZSBzaG93bi4gVXNlci1zZXQgc3RhdGljIGNvbHVtbiB3aWR0aCBpcyBzdGlsbCByZXNwZWN0ZWQuIEluICdkZWZhdWx0JyBtb2RlIENvbHVtbnMgYXJlIHNpemVkIGFjY29yZGluZyB0byB0aGUgcnVsZXMgb2YgdGhlIHN0YW5kYXJkIEhUTUwgdGFibGUgZWxlbWVudCdzIHRhYmxlLWxheW91dDogZml4ZWQuIEN1c3RvbSB3aWR0aCBjYW4gYWxzbyBiZSBhcHBsaWVkIHRvIGNvbHVtbnMgaW4gdGhpcyBjYXNlIGJ5IHNldHRpbmcgdGhlIGNvbHVtbiB3aWR0aCBwcm9wZXJ0eS4gKi9cblx0QElucHV0KClcblx0Z2V0IGNvbHVtblNpemVNb2RlKCk6IFRhYmxlQ29sdW1uU2l6ZU1vZGUge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sdW1uU2l6ZU1vZGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGNvbHVtblNpemVNb2RlKHZhbHVlOiBUYWJsZUNvbHVtblNpemVNb2RlKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbHVtblNpemVNb2RlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB3aGV0aGVyIHRoZSBcIkNvbmRpdGlvbmFsIEZvcm1hdHRpbmdcIiBidXR0b24gYXBwZWFycyBpbiB0aGUgVGFibGUncyBoZWFkZXIgKHRvb2xiYXIpLiBDbGlja2luZyB0aGlzIGJ1dHRvbiBvcGVucyBhIGRpYWxvZyB3aXRoIGZvcm1hdHRpbmcgb3B0aW9ucy4gKi9cblx0QElucHV0KClcblx0Z2V0IGNvbmRpdGlvbmFsRm9ybWF0dGluZ0J1dHRvbigpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbmRpdGlvbmFsRm9ybWF0dGluZ0J1dHRvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgY29uZGl0aW9uYWxGb3JtYXR0aW5nQnV0dG9uKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbmRpdGlvbmFsRm9ybWF0dGluZ0J1dHRvbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIHByb3BlcnR5IGRldGVybWluZXMgdGhlIHRpbWUgaW4gbWlsbGlzZWNvbmRzIGFmdGVyIHdoaWNoIHRoZSBUYWJsZSBkYXRhIGlzIHVwZGF0ZWQsIHdoZW4geW91IHZlcnRpY2FsbHkgc2Nyb2xsLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGVmZXJyZWRTY3JvbGxEZWxheSgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGVmZXJyZWRTY3JvbGxEZWxheSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGVmZXJyZWRTY3JvbGxEZWxheSh2YWx1ZTogbnVtYmVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRlZmVycmVkU2Nyb2xsRGVsYXkgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gV2hlbiBiaW5kaW5nIHRoZSBkYXRhU291cmNlIHByb3BlcnR5IGRpcmVjdGx5IHRvIGFuIGFycmF5IChhcyBvcHBvc2VkIHRvIGFuIGluc3RhbmNlIG9mIEpRWC5EYXRhQWRhcHRlciksIHNldHMgb3IgZ2V0cyB0aGUgbmFtZSBvZiB0aGUgZGF0YSBmaWVsZCBpbiB0aGUgc291cmNlIGFycmF5IHRvIGJpbmQgcm93IGlkcyB0by4gKi9cblx0QElucHV0KClcblx0Z2V0IGRhdGFSb3dJZCgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGF0YVJvd0lkIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkYXRhUm93SWQodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kYXRhUm93SWQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgZGF0YSBzb3VyY2Ugb2YgdGhlIHRhYmxlIGNvbXBvbmVudC4gVGhlIGRhdGEgc291cmNlIG9mIHRoZSBUYWJsZSBjYW4gYmUgYSByZWd1bGFyIEFycmF5IG9yIGEgRGF0YUFkYXB0ZXIgaW5zdGFuY2UuIFlvdSBjYW4gcmVhZCBtb3JlIGFib3V0IHRoZSBkYXRhQWRhcHRlciBoZXJlIC0gaHR0cHM6Ly93d3cuaHRtbGVsZW1lbnRzLmNvbS9kb2NzL2RhdGEtYWRhcHRlci8uICovXG5cdEBJbnB1dCgpXG5cdGdldCBkYXRhU291cmNlKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kYXRhU291cmNlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkYXRhU291cmNlKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGF0YVNvdXJjZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBncmlkJ3MgZGF0YSBzb3VyY2Ugc2V0dGluZ3Mgd2hlbiB0aGUgZGF0YVNvdXJjZSBwcm9wZXJ0eSBpcyBzZXQgdG8gYW4gQXJyYXkgb3IgVVJMLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGF0YVNvdXJjZVNldHRpbmdzKCk6IFRhYmxlRGF0YVNvdXJjZVNldHRpbmdzIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRhdGFTb3VyY2VTZXR0aW5ncyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGF0YVNvdXJjZVNldHRpbmdzKHZhbHVlOiBUYWJsZURhdGFTb3VyY2VTZXR0aW5ncykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kYXRhU291cmNlU2V0dGluZ3MgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGlzYWJsZXMgdGhlIGludGVyYWN0aW9uIHdpdGggdGhlIGVsZW1lbnQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkYXRhVHJhbnNmb3JtKCk6IHsgKHJlY29yZDogYW55KTogdm9pZCB9IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRhdGFUcmFuc2Zvcm0gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRhdGFUcmFuc2Zvcm0odmFsdWU6IHsgKHJlY29yZDogYW55KTogdm9pZCB9KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRhdGFUcmFuc2Zvcm0gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHdoZXRoZXIgdGhlIFRhYmxlIGNhbiBiZSBlZGl0ZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVkIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlZCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIGVkaXQgbW9kZS4gKi9cblx0QElucHV0KClcblx0Z2V0IGVkaXRpbmcoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5lZGl0aW5nIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBlZGl0aW5nKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmVkaXRpbmcgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHdoZXRoZXIgUm93IGhpZXJhcmNoaWVzIGFyZSBleHBhbmRlZCBieSBkZWZhdWx0LCB3aGVuIGNyZWF0ZWQuIFVzZSB0aGlzIHByb3BlcnR5IHdoZW4geW91IHdhbnQgeW91ciBncm91cHMgdG8gYmUgZXhwYW5kZWQgYnkgZGVmYXVsdCwgd2hlbiB0aGUgVGFibGUgaXMgZ3JvdXBlZCBvciB3aGVuIHlvdSB1c2UgdGhlIFRhYmxlIGluIHRyZWUgbW9kZS4gKi9cblx0QElucHV0KClcblx0Z2V0IGVkaXRNb2RlKCk6IFRhYmxlRWRpdE1vZGUge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZWRpdE1vZGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGVkaXRNb2RlKHZhbHVlOiBUYWJsZUVkaXRNb2RlKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmVkaXRNb2RlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB3aGV0aGVyIHRoZSBUYWJsZSBjYW4gYmUgZmlsdGVyZWQuIEJ5IGRlZmF1bHQsIHRoZSBUYWJsZSBjYW4gYmUgZmlsdGVyZWQgYnkgYWxsIHN0cmluZyBhbmQgbnVtZXJpYyBjb2x1bW5zIHRocm91Z2ggYSBmaWx0ZXIgaW5wdXQgaW4gdGhlIGhlYWRlci4gKi9cblx0QElucHV0KClcblx0Z2V0IGV4cGFuZEhpZXJhcmNoeSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmV4cGFuZEhpZXJhcmNoeSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZXhwYW5kSGllcmFyY2h5KHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmV4cGFuZEhpZXJhcmNoeSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgd2hldGhlciB0aGUgVGFibGUgY2FuIGJlIGZpbHRlcmVkIHZpYSBhIGZpbHRlciByb3cuICovXG5cdEBJbnB1dCgpXG5cdGdldCBmaWx0ZXJpbmcoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5maWx0ZXJpbmcgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGZpbHRlcmluZyh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5maWx0ZXJpbmcgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSBpZCBvZiBhbiBIVE1MIHRlbXBsYXRlIGVsZW1lbnQgdG8gYmUgYXBwbGllZCBhcyBhIGN1c3RvbSBmaWx0ZXIgdGVtcGxhdGUuICovXG5cdEBJbnB1dCgpXG5cdGdldCBmaWx0ZXJSb3coKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5maWx0ZXJSb3cgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGZpbHRlclJvdyh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5maWx0ZXJSb3cgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSBpZCBvZiBhbiBIVE1MIHRlbXBsYXRlIGVsZW1lbnQgdG8gYmUgYXBwbGllZCBhcyBmb290ZXIgcm93KHMpLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZmlsdGVyVGVtcGxhdGUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmZpbHRlclRlbXBsYXRlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBmaWx0ZXJUZW1wbGF0ZSh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmZpbHRlclRlbXBsYXRlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB3aGV0aGVyIEV4Y2VsLWxpa2UgZm9ybXVsYXMgY2FuIGJlIHBhc3NlZCBhcyBjZWxsIHZhbHVlcy4gRm9ybXVsYXMgYXJlIGFsd2F5cyBwcmVjZWRlZCBieSB0aGUgPSBzaWduIGFuZCBhcmUgcmUtZXZhbHVhdGVkIHdoZW4gY2VsbCB2YWx1ZXMgYXJlIGNoYW5nZWQuIFRoaXMgZmVhdHVyZSBkZXBlbmRzIG9uIHRoZSB0aGlyZC1wYXJ0eSBmcmVlIHBsdWctaW4gZm9ybXVsYS1wYXJzZXIgKHRoZSBmaWxlIGZvcm11bGEtcGFyc2VyLm1pbi5qcyBoYXMgdG8gYmUgcmVmZXJlbmNlZCkuICovXG5cdEBJbnB1dCgpXG5cdGdldCBmb290ZXJSb3coKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmZvb3RlclJvdyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZm9vdGVyUm93KHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZm9vdGVyUm93ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB3aGV0aGVyIHRoZSBUYWJsZSdzIGZvb3RlciBpcyBzdGlja3kvZnJvemVuLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZm9ybXVsYXMoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5mb3JtdWxhcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZm9ybXVsYXModmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZm9ybXVsYXMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHdoZXRoZXIgdGhlIFRhYmxlJ3MgY29sdW1uIGhlYWRlciBpcyBzdGlja3kvZnJvemVuLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZnJlZXplRm9vdGVyKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZnJlZXplRm9vdGVyIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBmcmVlemVGb290ZXIodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZnJlZXplRm9vdGVyID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB3aGV0aGVyIGdyb3VwaW5nIHRoZSBUYWJsZSBpcyBlbmFibGVkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZnJlZXplSGVhZGVyKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZnJlZXplSGVhZGVyIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBmcmVlemVIZWFkZXIodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZnJlZXplSGVhZGVyID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEFsbG93cyB0byBjdXN0b21pemUgdGhlIGhlYWRlciBvZiB0aGUgZWxlbWVudC4gVGhlIHByb3BlcnR5IGFjY2VwdHMgdGhlIGlkIG9mIGFuIEhUTUxFbGVtZW50LCBIVE1MVGVtcGxhdGVFbGVtZW50LCBmdW5jdGlvbiBvciBhIHN0cmluZyB0aGF0IHdpbGwgYmUgcGFyc2VkIGFzIEhUTUwuIFdoZW4gc2V0IHRvIGEgZnVuY3Rpb24gaXQgY29udGFpbnMgb25lIGFyZ3VtZW50IC0gdGhlIGhlYWRlciBlbGVtZW50IG9mIHRoZSBUYWJsZS4gKi9cblx0QElucHV0KClcblx0Z2V0IGdyb3VwaW5nKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZ3JvdXBpbmcgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGdyb3VwaW5nKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lmdyb3VwaW5nID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB3aGV0aGVyIG5hdmlnYXRpb24gd2l0aCB0aGUga2V5Ym9hcmQgaXMgZW5hYmxlZCBpbiB0aGUgVGFibGUuICovXG5cdEBJbnB1dCgpXG5cdGdldCBncm91cEZvcm1hdEZ1bmN0aW9uKCk6IHsgKHNldHRpbmdzOiB7IHZhbHVlOiBhbnksIHJvdzogc3RyaW5nIHwgbnVtYmVyLCBjb2x1bW46IHN0cmluZywgdGVtcGxhdGU/OiBhbnkgfSk6IHZvaWQgfSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ncm91cEZvcm1hdEZ1bmN0aW9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBncm91cEZvcm1hdEZ1bmN0aW9uKHZhbHVlOiB7IChzZXR0aW5nczogeyB2YWx1ZTogYW55LCByb3c6IHN0cmluZyB8IG51bWJlciwgY29sdW1uOiBzdHJpbmcsIHRlbXBsYXRlPzogYW55IH0pOiB2b2lkIH0pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZ3JvdXBGb3JtYXRGdW5jdGlvbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIGJlaGF2aW9yIHdoZW4gbG9hZGluZyBjb2x1bW4gc2V0dGluZ3MgZWl0aGVyIHZpYSBhdXRvTG9hZFN0YXRlIG9yIGxvYWRTdGF0ZS4gQXBwbGljYWJsZSBvbmx5IHdoZW4gc3RhdGVTZXR0aW5ncyBjb250YWlucyAnY29sdW1ucycuICovXG5cdEBJbnB1dCgpXG5cdGdldCBoZWFkZXJSb3coKTogc3RyaW5nIHwgSFRNTEVsZW1lbnQgfCBGdW5jdGlvbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oZWFkZXJSb3cgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGhlYWRlclJvdyh2YWx1ZTogc3RyaW5nIHwgSFRNTEVsZW1lbnQgfCBGdW5jdGlvbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oZWFkZXJSb3cgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSBsYW5ndWFnZS4gVXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZSBwcm9wZXJ0eSBtZXNzYWdlcy4gICovXG5cdEBJbnB1dCgpXG5cdGdldCBrZXlib2FyZE5hdmlnYXRpb24oKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5rZXlib2FyZE5hdmlnYXRpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGtleWJvYXJkTmF2aWdhdGlvbih2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5rZXlib2FyZE5hdmlnYXRpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIGFuIG9iamVjdCBzcGVjaWZ5aW5nIHN0cmluZ3MgdXNlZCBpbiB0aGUgZWxlbWVudCB0aGF0IGNhbiBiZSBsb2NhbGl6ZWQuIFVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCB0aGUgcHJvcGVydHkgbG9jYWxlLiAgKi9cblx0QElucHV0KClcblx0Z2V0IGxvYWRDb2x1bW5TdGF0ZUJlaGF2aW9yKCk6IFRhYmxlTG9hZENvbHVtblN0YXRlQmVoYXZpb3Ige1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubG9hZENvbHVtblN0YXRlQmVoYXZpb3IgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGxvYWRDb2x1bW5TdGF0ZUJlaGF2aW9yKHZhbHVlOiBUYWJsZUxvYWRDb2x1bW5TdGF0ZUJlaGF2aW9yKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxvYWRDb2x1bW5TdGF0ZUJlaGF2aW9yID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgcGFnZSBzaXplICh3aGVuIHBhZ2luZyBpcyBlbmFibGVkKS4gKi9cblx0QElucHV0KClcblx0Z2V0IGxvY2FsZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubG9jYWxlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBsb2NhbGUodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sb2NhbGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSBjdXJyZW50ICh6ZXJvLWJhc2VkKSBwYWdlIGluZGV4ICh3aGVuIHBhZ2luZyBpcyBlbmFibGVkKS4gKi9cblx0QElucHV0KClcblx0Z2V0IG1lc3NhZ2VzKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5tZXNzYWdlcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbWVzc2FnZXModmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5tZXNzYWdlcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgd2hldGhlciBwYWdpbmcgaXMgZW5hYmxlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IG9uQ2VsbFJlbmRlcigpOiB7IChkYXRhOiBhbnksIGRhdGFGaWVsZDogc3RyaW5nLCB2YWx1ZTogYW55LCBjZWxsOiBIVE1MVGFibGVDZWxsRWxlbWVudCk6IHZvaWQgfSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vbkNlbGxSZW5kZXIgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG9uQ2VsbFJlbmRlcih2YWx1ZTogeyAoZGF0YTogYW55LCBkYXRhRmllbGQ6IHN0cmluZywgdmFsdWU6IGFueSwgY2VsbDogSFRNTFRhYmxlQ2VsbEVsZW1lbnQpOiB2b2lkIH0pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25DZWxsUmVuZGVyID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgdmFsdWUgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBlbGVtZW50IGlzIGFsaWduZWQgdG8gc3VwcG9ydCBsb2NhbGVzIHVzaW5nIHJpZ2h0LXRvLWxlZnQgZm9udHMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBvbkNvbHVtblJlbmRlcigpOiB7IChkYXRhRmllbGQ6IHN0cmluZywgaGVhZGVyQ2VsbDogSFRNTFRhYmxlQ2VsbEVsZW1lbnQpOiB2b2lkIH0ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25Db2x1bW5SZW5kZXIgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG9uQ29sdW1uUmVuZGVyKHZhbHVlOiB7IChkYXRhRmllbGQ6IHN0cmluZywgaGVhZGVyQ2VsbDogSFRNTFRhYmxlQ2VsbEVsZW1lbnQpOiB2b2lkIH0pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25Db2x1bW5SZW5kZXIgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIGEgc3RyaW5nIHRlbXBsYXRlIHRvIGJlIGFwcGxpZWQgYXMgcm93IGRldGFpbCB0ZW1wbGF0ZS4gRWFjaCBjZWxsIHZhbHVlIGluIHRoZSBtYXN0ZXIgcm93IGNhbiBiZSBwbGFjZWQgaW4gdGhlIGRldGFpbCByb3cgYnkgc3BlY2lmeWluZyB0aGUgY2VsbCdzIGRhdGEgZmllbGQgaW4gZG91YmxlIGN1cmx5IGJyYWNrZXRzIChlLmcuIHt7cHJpY2V9fS4gVGhlIGRldGFpbHMgY2FuIHRoZW4gYmUgZGlzcGxheWVkIGJ5IGV4cGFuZGluZyB0aGUgcm93IGJ5IGNsaWNraW5nIGl0LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgb25Jbml0KCk6IHsgKCk6IHZvaWQgfSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vbkluaXQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG9uSW5pdCh2YWx1ZTogeyAoKTogdm9pZCB9KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uSW5pdCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgYW4gYXJyYXkgb2YgdGhlIFRhYmxlJ3Mgc2VsZWN0ZWQgcm93J3MgaWRzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcGFnZVNpemUoKTogVGFibGVQYWdlU2l6ZSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5wYWdlU2l6ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcGFnZVNpemUodmFsdWU6IFRhYmxlUGFnZVNpemUpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucGFnZVNpemUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHdoZXRoZXIgcm93IHNlbGVjdGlvbiAodmlhIGNoZWNrYm94ZXMpIGlzIGVuYWJsZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBwYWdlSW5kZXgoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnBhZ2VJbmRleCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcGFnZUluZGV4KHZhbHVlOiBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucGFnZUluZGV4ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgc2VsZWN0aW9uIG1vZGUuIE9ubHkgYXBwbGljYWJsZSB3aGVuIHNlbGVjdGlvbiBpcyBlbmFibGVkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcGFnaW5nKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucGFnaW5nIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBwYWdpbmcodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucGFnaW5nID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB3aGV0aGVyIHJvdyBzZWxlY3Rpb24gKHZpYSBjaGVja2JveGVzKSBpcyBoaWVyYXJjaGljYWwuIFdoZW4gYSBwYXJlbnQgcm93IGlzIHNlbGVjdGVkLCBhbGwgc3ViIHJvd3MgYXJlIHNlbGVjdGVkLCB0b28uICovXG5cdEBJbnB1dCgpXG5cdGdldCByaWdodFRvTGVmdCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJpZ2h0VG9MZWZ0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCByaWdodFRvTGVmdCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yaWdodFRvTGVmdCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBzb3J0aW5nIG1vZGUgb2YgdGhlIFRhYmxlLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcm93RGV0YWlsVGVtcGxhdGUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJvd0RldGFpbFRlbXBsYXRlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCByb3dEZXRhaWxUZW1wbGF0ZSh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJvd0RldGFpbFRlbXBsYXRlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB3aGF0IHNldHRpbmdzIG9mIHRoZSBUYWJsZSdzIHN0YXRlIGNhbiBiZSBzYXZlZCAoYnkgYXV0b1NhdmVTdGF0ZSBvciBzYXZlU3RhdGUpIG9yIGxvYWRlZCAoYnkgYXV0b0xvYWRTdGF0ZSBvciBsb2FkU3RhdGUpLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc2VsZWN0ZWQoKTogYW55W10ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0ZWQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHNlbGVjdGVkKHZhbHVlOiBhbnlbXSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zZWxlY3RlZCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSB0aGVtZS4gVGhlbWUgZGVmaW5lcyB0aGUgbG9vayBvZiB0aGUgZWxlbWVudCAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc2VsZWN0aW9uKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzZWxlY3Rpb24odmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB3aGV0aGVyIHdoZW4gaG92ZXJpbmcgYSBjZWxsIHdpdGggdHJ1bmNhdGVkIGNvbnRlbnQsIGEgdG9vbHRpcCB3aXRoIHRoZSBmdWxsIGNvbnRlbnQgd2lsbCBiZSBzaG93bi4gKi9cblx0QElucHV0KClcblx0Z2V0IHNlbGVjdGlvbk1vZGUoKTogVGFibGVTZWxlY3Rpb25Nb2RlIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdGlvbk1vZGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHNlbGVjdGlvbk1vZGUodmFsdWU6IFRhYmxlU2VsZWN0aW9uTW9kZSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25Nb2RlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEVuYWJsZXMgb3IgZGlzYWJsZXMgSFRNTCB2aXJ0dWFsaXphdGlvbi4gVGhpcyBmdW5jdGlvbmFsaXR5IGFsbG93cyBmb3Igb25seSB2aXNpYmxlIHJvd3MgdG8gYmUgcmVuZGVyZWQsIHJlc3VsdGluZyBpbiBhbiBpbmNyZWFzZWQgVGFibGUgcGVyZm9ybWFuY2UuICovXG5cdEBJbnB1dCgpXG5cdGdldCBzZWxlY3Rpb25CeUhpZXJhcmNoeSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdGlvbkJ5SGllcmFyY2h5IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzZWxlY3Rpb25CeUhpZXJhcmNoeSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25CeUhpZXJhcmNoeSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiB1bmRlZmluZWQgKi9cblx0QElucHV0KClcblx0Z2V0IHNvcnQoKTogeyAoZGF0YVNvdXJjZTogYW55LCBzb3J0Q29sdW1uczogc3RyaW5nW10sIGRpcmVjdGlvbnM6IHN0cmluZ1tdLCBkZWZhdWx0Q29tcGFyZUZ1bmN0aW9uczogeyAoZmlyc3RSZWNvcmQ6IGFueSwgc2Vjb25kUmVjb3JkOiBhbnkpOiBudW1iZXIgfVtdKTogdm9pZCB9IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNvcnQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHNvcnQodmFsdWU6IHsgKGRhdGFTb3VyY2U6IGFueSwgc29ydENvbHVtbnM6IHN0cmluZ1tdLCBkaXJlY3Rpb25zOiBzdHJpbmdbXSwgZGVmYXVsdENvbXBhcmVGdW5jdGlvbnM6IHsgKGZpcnN0UmVjb3JkOiBhbnksIHNlY29uZFJlY29yZDogYW55KTogbnVtYmVyIH1bXSk6IHZvaWQgfSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zb3J0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIHVuZGVmaW5lZCAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc29ydE1vZGUoKTogVGFibGVTb3J0TW9kZSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zb3J0TW9kZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc29ydE1vZGUodmFsdWU6IFRhYmxlU29ydE1vZGUpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc29ydE1vZGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gdW5kZWZpbmVkICovXG5cdEBJbnB1dCgpXG5cdGdldCBzdGF0ZVNldHRpbmdzKCk6IHN0cmluZ1tdIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnN0YXRlU2V0dGluZ3MgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHN0YXRlU2V0dGluZ3ModmFsdWU6IHN0cmluZ1tdKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnN0YXRlU2V0dGluZ3MgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gdW5kZWZpbmVkICovXG5cdEBJbnB1dCgpXG5cdGdldCB0aGVtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGhlbWUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRoZW1lKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGhlbWUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gdW5kZWZpbmVkICovXG5cdEBJbnB1dCgpXG5cdGdldCB0b29sdGlwKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudG9vbHRpcCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdG9vbHRpcCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50b29sdGlwID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIHVuZGVmaW5lZCAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdmlydHVhbGl6YXRpb24oKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC52aXJ0dWFsaXphdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdmlydHVhbGl6YXRpb24odmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudmlydHVhbGl6YXRpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIGNlbGwgZWRpdCBvcGVyYXRpb24gaGFzIGJlZW4gaW5pdGlhdGVkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGlkLCBcdGRhdGFGaWVsZCwgXHRyb3csIFx0dmFsdWUpXG5cdCogICBpZCAtIFRoZSBpZCBvZiB0aGUgcm93LlxuXHQqICAgZGF0YUZpZWxkIC0gVGhlIGRhdGEgZmllbGQgb2YgdGhlIGNlbGwncyBjb2x1bW4uXG5cdCogICByb3cgLSBUaGUgZGF0YSBvZiB0aGUgY2VsbCdzIHJvdy5cblx0KiAgIHZhbHVlIC0gVGhlIGRhdGEgdmFsdWUgb2YgdGhlIGNlbGwuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkNlbGxCZWdpbkVkaXQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgY2VsbCBoYXMgYmVlbiBjbGlja2VkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGlkLCBcdGRhdGFGaWVsZCwgXHRyb3csIFx0dmFsdWUsIFx0b3JpZ2luYWxFdmVudClcblx0KiAgIGlkIC0gVGhlIGNlbGwncyByb3cgaWQuXG5cdCogICBkYXRhRmllbGQgLSBUaGUgZGF0YSBmaWVsZCBvZiB0aGUgY2VsbCdzIGNvbHVtbi5cblx0KiAgIHJvdyAtIFRoZSBkYXRhIG9mIHRoZSBjZWxsJ3Mgcm93LlxuXHQqICAgdmFsdWUgLSBUaGUgZGF0YSB2YWx1ZSBvZiB0aGUgY2VsbC5cblx0KiAgIG9yaWdpbmFsRXZlbnQgLSBUaGUgJ2NsaWNrJyBldmVudCBvYmplY3QuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkNlbGxDbGljazogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSBjZWxsIGhhcyBiZWVuIGVkaXRlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRpZCwgXHRkYXRhRmllbGQsIFx0cm93LCBcdHZhbHVlKVxuXHQqICAgaWQgLSBUaGUgaWQgb2YgdGhlIHJvdy5cblx0KiAgIGRhdGFGaWVsZCAtIFRoZSBkYXRhIGZpZWxkIG9mIHRoZSBjZWxsJ3MgY29sdW1uLlxuXHQqICAgcm93IC0gVGhlIG5ldyBkYXRhIG9mIHRoZSBjZWxsJ3Mgcm93LlxuXHQqICAgdmFsdWUgLSBUaGUgZGF0YSB2YWx1ZSBvZiB0aGUgY2VsbC5cblx0Ki9cblx0QE91dHB1dCgpIG9uQ2VsbEVuZEVkaXQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBzZWxlY3Rpb24gaXMgY2hhbmdlZC4gV2l0aGluIHRoZSBldmVudCBoYW5kbGVyIHlvdSBjYW4gZ2V0IHRoZSBzZWxlY3Rpb24gYnkgdXNpbmcgdGhlICdnZXRTZWxlY3Rpb24nIG1ldGhvZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHR0eXBlKVxuXHQqICAgdHlwZSAtIFRoZSB0eXBlIG9mIGFjdGlvbiB0aGF0IGluaXRpYXRlZCB0aGUgc2VsZWN0aW9uIGNoYW5nZS4gUG9zc2libGUgdHlwZXM6ICdwcm9ncmFtbWF0aWMnLCAnaW50ZXJhY3Rpb24nLCAncmVtb3ZlJy5cblx0Ki9cblx0QE91dHB1dCgpIG9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIHJvdyBoYXMgYmVlbiBjb2xsYXBzZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0aWQsIFx0cmVjb3JkKVxuXHQqICAgaWQgLSBUaGUgaWQgb2YgdGhlIGNvbGxhcHNlZCByb3cuXG5cdCogICByZWNvcmQgLSBUaGUgZGF0YSBvZiB0aGUgY29sbGFwc2VkIHJvdy5cblx0Ki9cblx0QE91dHB1dCgpIG9uQ29sbGFwc2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgcm93IGhhcyBiZWVuIGV4cGFuZGVkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGlkLCBcdHJlY29yZClcblx0KiAgIGlkIC0gVGhlIGlkIG9mIHRoZSBleHBhbmRlZCByb3cuXG5cdCogICByZWNvcmQgLSBUaGUgKGFnZ3JlZ2F0ZWQpIGRhdGEgb2YgdGhlIGV4cGFuZGVkIHJvdy5cblx0Ki9cblx0QE91dHB1dCgpIG9uRXhwYW5kOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIGNvbHVtbiBoZWFkZXIgY2VsbCBoYXMgYmVlbiBjbGlja2VkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGRhdGFGaWVsZClcblx0KiAgIGRhdGFGaWVsZCAtIFRoZSBkYXRhIGZpZWxkIG9mIHRoZSBjZWxsJ3MgY29sdW1uLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25Db2x1bW5DbGljazogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSBjb2x1bW4gbWVudSBpcyBjbG9zZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0ZGF0YUZpZWxkKVxuXHQqICAgZGF0YUZpZWxkIC0gVGhlIGRhdGEgZmllbGQgb2YgdGhlIGNvbHVtbi5cblx0Ki9cblx0QE91dHB1dCgpIG9uQ2xvc2VDb2x1bW5NZW51OiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIGNvbHVtbiBoYXMgYmVlbiByZXNpemVkIHZpYSBkcmFnZ2luZyBvciBkb3VibGUtY2xpY2suXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0ZGF0YUZpZWxkLCBcdGhlYWRlckNlbGxFbGVtZW50LCBcdHdpZHRoKVxuXHQqICAgZGF0YUZpZWxkIC0gVGhlIGRhdGEgZmllbGQgb2YgdGhlIGNvbHVtbi5cblx0KiAgIGhlYWRlckNlbGxFbGVtZW50IC0gVGhlIGNvbHVtbidzIGhlYWRlciBjZWxsIEhUTUwgZWxlbWVudC5cblx0KiAgIHdpZHRoIC0gVGhlIG5ldyB3aWR0aCBvZiB0aGUgY29sdW1uLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25Db2x1bW5SZXNpemU6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgZmlsdGVyaW5nLXJlbGF0ZWQgYWN0aW9uIGlzIG1hZGUuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0YWN0aW9uLCBcdGZpbHRlcnMpXG5cdCogICBhY3Rpb24gLSBUaGUgZmlsdGVyaW5nIGFjdGlvbi4gUG9zc2libGUgYWN0aW9uczogJ2FkZCcsICdyZW1vdmUnLlxuXHQqICAgZmlsdGVycyAtIFRoZSBhZGRlZCBmaWx0ZXJzLiBPbmx5IHdoZW4gYWN0aW9uIGlzICdhZGQnLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25GaWx0ZXI6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgZ3JvdXBpbmctcmVsYXRlZCBhY3Rpb24gaXMgbWFkZS5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRhY3Rpb24sIFx0ZGF0YUZpZWxkLCBcdGxhYmVsLCBcdHBhdGgpXG5cdCogICBhY3Rpb24gLSBUaGUgZ3JvdXBpbmcgYWN0aW9uLiBQb3NzaWJsZSBhY3Rpb25zOiAnYWRkJywgJ2NvbGxhcHNlJywgJ2V4cGFuZCcsICdyZW1vdmUnLlxuXHQqICAgZGF0YUZpZWxkIC0gVGhlIGRhdGEgZmllbGQgb2YgdGhlIGNvbHVtbiB3aG9zZSBncm91cGluZyBpcyBtb2RpZmllZC5cblx0KiAgIGxhYmVsIC0gVGhlIGxhYmVsIG9mIHRoZSBncm91cCAob25seSB3aGVuIGNvbGxhcHNpbmcvZXhwYW5kaW5nKS5cblx0KiAgIHBhdGggLSBUaGUgZ3JvdXAncyBwYXRoIChvbmx5IHdoZW4gY29sbGFwc2luZy9leHBhbmRpbmcpLiBUaGUgcGF0aCBpbmNsdWRlcyB0aGUgcGF0aCB0byB0aGUgZXhwYW5kZWQvY29sbGFwc2VkIGdyb3VwIHN0YXJ0aW5nIGZyb20gdGhlIHJvb3QgZ3JvdXAuIFRoZSBpbmRleGVzIGFyZSBqb2luZWQgd2l0aCAnLicuIFRoaXMgcGFyYW1ldGVyIGlzIGF2YWlsYWJsZSB3aGVuIHRoZSAnYWN0aW9uJyBpcyAnZXhwYW5kJyBvciAnY29sbGFwc2UnLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25Hcm91cDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSBjb2x1bW4gbWVudSBpcyBvcGVuZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0ZGF0YUZpZWxkKVxuXHQqICAgZGF0YUZpZWxkIC0gVGhlIGRhdGEgZmllbGQgb2YgdGhlIGNvbHVtbi5cblx0Ki9cblx0QE91dHB1dCgpIG9uT3BlbkNvbHVtbk1lbnU6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgcGFnaW5nLXJlbGF0ZWQgYWN0aW9uIGlzIG1hZGUuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0YWN0aW9uKVxuXHQqICAgYWN0aW9uIC0gVGhlIHBhZ2luZyBhY3Rpb24uIFBvc3NpYmxlIGFjdGlvbnM6ICdwYWdlSW5kZXhDaGFuZ2UnLCAncGFnZVNpemVDaGFuZ2UnLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25QYWdlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIHJvdyBlZGl0IG9wZXJhdGlvbiBoYXMgYmVlbiBpbml0aWF0ZWQgKG9ubHkgd2hlbiBlZGl0TW9kZSBpcyAncm93JykuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0aWQsIFx0cm93KVxuXHQqICAgaWQgLSBUaGUgaWQgb2YgdGhlIHJvdy5cblx0KiAgIHJvdyAtIFRoZSBkYXRhIG9mIHRoZSByb3cuXG5cdCovXG5cdEBPdXRwdXQoKSBvblJvd0JlZ2luRWRpdDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSByb3cgaGFzIGJlZW4gZWRpdGVkIChvbmx5IHdoZW4gZWRpdE1vZGUgaXMgJ3JvdycpLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGlkLCBcdHJvdylcblx0KiAgIGlkIC0gVGhlIGlkIG9mIHRoZSByb3cuXG5cdCogICByb3cgLSBUaGUgbmV3IGRhdGEgb2YgdGhlIHJvdy5cblx0Ki9cblx0QE91dHB1dCgpIG9uUm93RW5kRWRpdDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSBjb2x1bW4gaGVhZGVyIGNlbGwgaGFzIGJlZW4gY2xpY2tlZCBvciBzb3J0aW5nIGlzIGFwcGxpZWQgcHJvZ3JhbW1hdGljYWxseSB1c2luZyB0aGUgVGFibGUgQVBJLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGNvbHVtbnMsIFx0c29ydERhdGFGaWVsZHMsIFx0c29ydE9yZGVycywgXHRzb3J0RGF0YVR5cGVzLCBcdHR5cGUpXG5cdCogICBjb2x1bW5zIC0gQW4gYXJyYXkgd2l0aCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgY29sdW1ucyB0aGUgVGFibGUgaGFzIGJlZW4gc29ydGVkIGJ5LlxuXHQqICAgc29ydERhdGFGaWVsZHMgLSBBbiBhcnJheSB3aXRoIGluZm9ybWF0aW9uIGFib3V0IHRoZSBkYXRhIGZpZWxkcyB0aGUgVGFibGUgaGFzIGJlZW4gc29ydGVkIGJ5LlxuXHQqICAgc29ydE9yZGVycyAtIEFuIGFycmF5IHdpdGggaW5mb3JtYXRpb24gYWJvdXQgdGhlIGNvbHVtbnMgc29ydCBvcmRlcnMgdGhlIFRhYmxlIGhhcyBiZWVuIHNvcnRlZCBieS5cblx0KiAgIHNvcnREYXRhVHlwZXMgLSBBbiBhcnJheSB3aXRoIGluZm9ybWF0aW9uIGFib3V0IHRoZSBjb2x1bW5zIGRhdGEgdHlwZXMgdGhlIFRhYmxlIGhhcyBiZWVuIHNvcnRlZCBieS5cblx0KiAgIHR5cGUgLSBUaGUgdHlwZSBvZiBhY3Rpb24gdGhhdCBpbml0aWF0ZWQgdGhlIGRhdGEgc29ydC4gUG9zc2libGUgdHlwZXM6ICdwcm9ncmFtbWF0aWMnLCAnaW50ZXJhY3Rpb24nXG5cdCovXG5cdEBPdXRwdXQoKSBvblNvcnQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBZGRzIGEgbmV3IHJvdy4gV2hlbiB5b3UgaW52b2tlIHRoZSBtZXRob2QsIHBhc3MgYSBKU09OIG9iamVjdCB3aXRoIHRoZSByb3cncyBkYXRhLiBcblx0KiBAcGFyYW0ge2FueX0gZGF0YS4gSlNPTiBvYmplY3Qgd2l0aCB0aGUgbmV3IHJvdydzIGRhdGEuIFNhbXBsZSBKU09OOiB7Zmlyc3ROYW1lOiAnUGV0ZXInLCBsYXN0TmFtZTogJ0Z1bGxlcid9LlxuXHQqL1xuICAgIHB1YmxpYyBhZGRSb3coZGF0YTogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmFkZFJvdyhkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5hZGRSb3coZGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEFkZHMgYSBmaWx0ZXIgdG8gYSBzcGVjaWZpYyBjb2x1bW4uIFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBkYXRhRmllbGQuIFRoZSBjb2x1bW4ncyBkYXRhIGZpZWxkLlxuXHQqIEBwYXJhbSB7YW55fSBmaWx0ZXIuIEZpbHRlckdyb3VwIG9iamVjdC5cblx0Ki9cbiAgICBwdWJsaWMgYWRkRmlsdGVyKGRhdGFGaWVsZDogc3RyaW5nLCBmaWx0ZXI6IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5hZGRGaWx0ZXIoZGF0YUZpZWxkLCBmaWx0ZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmFkZEZpbHRlcihkYXRhRmllbGQsIGZpbHRlcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEdyb3VwcyBieSBhIGNvbHVtbi4gXG5cdCogQHBhcmFtIHtzdHJpbmd9IGRhdGFGaWVsZC4gVGhlIGNvbHVtbidzIGRhdGEgZmllbGQuXG5cdCovXG4gICAgcHVibGljIGFkZEdyb3VwKGRhdGFGaWVsZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmFkZEdyb3VwKGRhdGFGaWVsZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYWRkR3JvdXAoZGF0YUZpZWxkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQmVnaW5zIGFuIGVkaXQgb3BlcmF0aW9uLiBcblx0KiBAcGFyYW0ge3N0cmluZyB8IG51bWJlcn0gcm93LiBUaGUgaWQgb2YgdGhlIHJvdyB0byBlZGl0LlxuXHQqIEBwYXJhbSB7c3RyaW5nfSBkYXRhRmllbGQ/LiBUaGUgZGF0YUZpZWxkIG9mIHRoZSBjZWxsJ3MgY29sdW1uLiBNYXkgYmUgb21pdHRlZCB3aGVuIDxzdHJvbmc+ZWRpdE1vZGU8L3N0cm9uZz4gaXMgPGVtPidyb3cnPC9lbT4uXG5cdCovXG4gICAgcHVibGljIGJlZ2luRWRpdChyb3c6IHN0cmluZyB8IG51bWJlciwgZGF0YUZpZWxkPzogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmJlZ2luRWRpdChyb3csIGRhdGFGaWVsZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYmVnaW5FZGl0KHJvdywgZGF0YUZpZWxkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQmVnaW5zIGFuIHVwZGF0ZSBvcGVyYXRpb24uIFN1c3BlbmRzIGFsbCB0YWJsZSByZWZyZXNoZXMgYW5kIHJlbmRlcnMuIFxuXHQqL1xuICAgIHB1YmxpYyBiZWdpblVwZGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYmVnaW5VcGRhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5iZWdpblVwZGF0ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFbmRzIHRoZSBjdXJyZW50IGVkaXQgb3BlcmF0aW9uIGFuZCBkaXNjYXJkcyBjaGFuZ2VzLiBcblx0Ki9cbiAgICBwdWJsaWMgY2FuY2VsRWRpdCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2FuY2VsRWRpdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNhbmNlbEVkaXQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ2xlYXJzIGFwcGxpZWQgZmlsdGVycy4gXG5cdCovXG4gICAgcHVibGljIGNsZWFyRmlsdGVycygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xlYXJGaWx0ZXJzKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xlYXJGaWx0ZXJzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIENsZWFycyBncm91cGluZy4gXG5cdCovXG4gICAgcHVibGljIGNsZWFyR3JvdXBpbmcoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNsZWFyR3JvdXBpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbGVhckdyb3VwaW5nKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIENsZWFycyBzZWxlY3Rpb24uIFxuXHQqL1xuICAgIHB1YmxpYyBjbGVhclNlbGVjdGlvbigpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xlYXJTZWxlY3Rpb24oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbGVhclNlbGVjdGlvbigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDbGVhcnMgdGhlIFRhYmxlIHNvcnRpbmcuIFxuXHQqL1xuICAgIHB1YmxpYyBjbGVhclNvcnQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNsZWFyU29ydCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNsZWFyU29ydCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDb2xsYXBzZXMgYWxsIHJvd3MgKGluIHRyZWUgbW9kZSkuIFxuXHQqL1xuICAgIHB1YmxpYyBjb2xsYXBzZUFsbFJvd3MoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNvbGxhcHNlQWxsUm93cygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNvbGxhcHNlQWxsUm93cygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDb2xsYXBzZXMgYWxsIGdyb3VwcyAoaW4gdHJlZSBtb2RlKS4gXG5cdCovXG4gICAgcHVibGljIGNvbGxhcHNlQWxsR3JvdXBzKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jb2xsYXBzZUFsbEdyb3VwcygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNvbGxhcHNlQWxsR3JvdXBzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIENvbGxhcHNlcyBhbGwgcm93IGRldGFpbHMuIFJvd3MgdGhhdCBoYXZlIGRldGFpbHMgZGVmaW5lZCB2aWEgdGhlIHJvd0RldGFpbFRlbXBsYXRlIHdpbGwgYmUgY29sbGFwc2VkLiBcblx0Ki9cbiAgICBwdWJsaWMgY29sbGFwc2VBbGxSb3dEZXRhaWxzKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jb2xsYXBzZUFsbFJvd0RldGFpbHMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jb2xsYXBzZUFsbFJvd0RldGFpbHMoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ29sbGFwc2VzIGEgZ3JvdXAuIFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBpbmRleC4gVGhlIGdyb3VwJ3MgaGllcmFyY2hpY2FsIGluZGV4LlxuXHQqL1xuICAgIHB1YmxpYyBjb2xsYXBzZUdyb3VwKGluZGV4OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sbGFwc2VHcm91cChpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sbGFwc2VHcm91cChpbmRleCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIENvbGxhcHNlcyBhIHJvdyAoaW4gdHJlZSBtb2RlKS4gXG5cdCogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IHJvd0lkLiBUaGUgaWQgb2YgdGhlIHJvdyB0byBjb2xsYXBzZS5cblx0Ki9cbiAgICBwdWJsaWMgY29sbGFwc2VSb3cocm93SWQ6IHN0cmluZyB8IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jb2xsYXBzZVJvdyhyb3dJZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sbGFwc2VSb3cocm93SWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEaXNhYmxlcyBhIHNlbGVjdGlvbiBvZiBhIHJvdy4gV2hlbiB0aGUgJ3NlbGVjdGlvbicgcHJvcGVydHkgaXMgc2V0IHRvICd0cnVlJywgc2VsZWN0aW9uIGlzIGVuYWJsZWQgZm9yIGFsbCByb3dzIGJ5IGRlZmF1bHQuIFxuXHQqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyIHwgKHN0cmluZyB8IG51bWJlcilbXX0gcm93SWQuIFRoZSBpZCBvZiB0aGUgcm93IChvciBhbiBhcnJheSBvZiByb3cgaWRzKSB0byBzZWxlY3QuXG5cdCovXG4gICAgcHVibGljIGRpc2FibGVTZWxlY3Qocm93SWQ6IHN0cmluZyB8IG51bWJlciB8IChzdHJpbmcgfCBudW1iZXIpW10pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZVNlbGVjdChyb3dJZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZVNlbGVjdChyb3dJZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEVuYWJsZXMgYSBzZWxlY3Rpb24gb2YgYSByb3csIGlmIGl0IHdhcyBwcmV2aW91c2x5IGRpc2FibGVkIHRocm91Z2ggYSAnZGlzYWJsZVNlbGVjdCcgbWV0aG9kIGNhbGwuIFdoZW4gdGhlICdzZWxlY3Rpb24nIHByb3BlcnR5IGlzIHNldCB0byAndHJ1ZScsIHNlbGVjdGlvbiBpcyBlbmFibGVkIGZvciBhbGwgcm93cyBieSBkZWZhdWx0LiBcblx0KiBAcGFyYW0ge3N0cmluZyB8IG51bWJlciB8IChzdHJpbmcgfCBudW1iZXIpW119IHJvd0lkLiBUaGUgaWQgb2YgdGhlIHJvdyAob3IgYW4gYXJyYXkgb2Ygcm93IGlkcykgdG8gc2VsZWN0LlxuXHQqL1xuICAgIHB1YmxpYyBlbmFibGVTZWxlY3Qocm93SWQ6IHN0cmluZyB8IG51bWJlciB8IChzdHJpbmcgfCBudW1iZXIpW10pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZW5hYmxlU2VsZWN0KHJvd0lkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5lbmFibGVTZWxlY3Qocm93SWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFbmRzIHRoZSBjdXJyZW50IGVkaXQgb3BlcmF0aW9uIGFuZCBzYXZlcyBjaGFuZ2VzLiBcblx0Ki9cbiAgICBwdWJsaWMgZW5kRWRpdCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZW5kRWRpdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmVuZEVkaXQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRW5kcyBhbiB1cGRhdGUgb3BlcmF0aW9uLiBSZXN1bWVzIGFsbCB0YWJsZSByZWZyZXNoZXMgYW5kIHJlbmRlcnMuIFJlLXJlbmRlcnMgdGhlIFRhYmxlLiBcblx0KiBAcGFyYW0ge2Jvb2xlYW59IHJlZnJlc2g/LiBPcHRpb25hbGx5IHlvdSBjYW4gcGFzcyAnZmFsc2UnIGluIGNhc2UgeW91IG5lZWQgdG8gbWFudWFsbHkgY2FsbCB0aGUgJ3JlZnJlc2gnIG1ldGhvZC4gQnkgZGVmYXVsdCwgdGhlIHRhYmxlIGlzIHJlLXJlbmRlcmVkLlxuXHQqL1xuICAgIHB1YmxpYyBlbmRVcGRhdGUocmVmcmVzaD86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZW5kVXBkYXRlKHJlZnJlc2gpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmVuZFVwZGF0ZShyZWZyZXNoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRXhwYW5kcyBhbGwgcm93cyAoaW4gdHJlZSBtb2RlKS4gXG5cdCovXG4gICAgcHVibGljIGV4cGFuZEFsbFJvd3MoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmV4cGFuZEFsbFJvd3MoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5leHBhbmRBbGxSb3dzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEV4cGFuZHMgYWxsIGdyb3VwcyAoaW4gdHJlZSBtb2RlKS4gXG5cdCovXG4gICAgcHVibGljIGV4cGFuZEFsbEdyb3VwcygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZXhwYW5kQWxsR3JvdXBzKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZXhwYW5kQWxsR3JvdXBzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEV4cGFuZHMgYWxsIHJvdyBkZXRhaWxzLiBSb3dzIHRoYXQgaGF2ZSBkZXRhaWxzIGRlZmluZWQgdmlhIHJvd0RldGFpbFRlbXBsYXRlIHdpbGwgYmUgZXhwYW5kZWQuIFxuXHQqL1xuICAgIHB1YmxpYyBleHBhbmRBbGxSb3dEZXRhaWxzKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5leHBhbmRBbGxSb3dEZXRhaWxzKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZXhwYW5kQWxsUm93RGV0YWlscygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFeHBhbmRzIGEgZ3JvdXAuIFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBpbmRleC4gVGhlIGdyb3VwJ3MgaGllcmFyY2hpY2FsIGluZGV4LlxuXHQqL1xuICAgIHB1YmxpYyBleHBhbmRHcm91cChpbmRleDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmV4cGFuZEdyb3VwKGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5leHBhbmRHcm91cChpbmRleCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEV4cGFuZHMgYSByb3cgKGluIHRyZWUgbW9kZSkuIFxuXHQqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyfSByb3dJZC4gVGhlIGlkIG9mIHRoZSByb3cgdG8gZXhwYW5kLlxuXHQqL1xuICAgIHB1YmxpYyBleHBhbmRSb3cocm93SWQ6IHN0cmluZyB8IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5leHBhbmRSb3cocm93SWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmV4cGFuZFJvdyhyb3dJZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEV4cG9ydHMgdGhlIFRhYmxlJ3MgZGF0YS4gXG5cdCogQHBhcmFtIHtzdHJpbmd9IGRhdGFGb3JtYXQuIFRoZSBmaWxlIGZvcm1hdCB0byBleHBvcnQgdG8uIFN1cHBvcnRlZCBmb3JtYXRzOiAnY3N2JywgJ2h0bWwnLCAnanNvbicsICdwZGYnLCAndHN2JywgJ3hsc3gnLCAneG1sJy5cblx0KiBAcGFyYW0ge3N0cmluZ30gZmlsZU5hbWU/LiBUaGUgbmFtZSBvZiB0aGUgZmlsZSB0byBleHBvcnQgdG9cblx0KiBAcGFyYW0ge2Jvb2xlYW59IGV4cG9ydEZpbHRlcmVkPy4gSWYgc2V0IHRvIHRydWUsIGV4cG9ydHMgb25seSBmaWx0ZXJlZCByZWNvcmRzXG5cdCogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2s/LiBBIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIHBhc3MgdGhlIGV4cG9ydGVkIGRhdGEgdG8gKGlmIGZpbGVOYW1lIGlzIG5vdCBwcm92aWRlZClcblx0KiBAcmV0dXJucyB7YW55fVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZXhwb3J0RGF0YShkYXRhRm9ybWF0LCBmaWxlTmFtZT8sIGV4cG9ydEZpbHRlcmVkPywgY2FsbGJhY2s/KTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmV4cG9ydERhdGEoZGF0YUZvcm1hdCwgZmlsZU5hbWUsIGV4cG9ydEZpbHRlcmVkLCBjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIGFuIGFycmF5IG9mIHNlbGVjdGVkIHJvdyBpZHMuIFxuXHQqIEByZXR1cm5zIHsoc3RyaW5nIHwgbnVtYmVyKVtdfVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0U2VsZWN0aW9uKCk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJldHVybnMgdGhlIFRhYmxlJ3Mgc3RhdGUsIGNvbnRhaW5pbmcgaW5mb3JtYXRpb24gYWJvdXQgY29sdW1ucywgZXhwYW5kZWQgcm93cywgc2VsZWN0ZWQgcm93cywgYXBwbGllZCBmaXRlcmluZywgZ3JvdXBpbmcsIGFuZCBzb3J0ZWQgY29sdW1ucy4gSXQgY2FuIHRoZW4gYmUgc3RvcmVkIG9yIHBhc3NlZCB0byB0aGUgbWV0aG9kIGxvYWRTdGF0ZS4gXG5cdCogQHJldHVybnMge2FueX1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldFN0YXRlKCk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0aGUgdmFsdWUgb2YgYSBjZWxsLiBcblx0KiBAcGFyYW0ge3N0cmluZyB8IG51bWJlcn0gcm93LiBUaGUgaWQgb2YgdGhlIGNlbGwncyByb3cuXG5cdCogQHBhcmFtIHtzdHJpbmd9IGRhdGFGaWVsZC4gVGhlIGRhdGFGaWVsZCBvZiB0aGUgY2VsbCdzIGNvbHVtbi5cblx0KiBAcmV0dXJucyB7YW55fVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0VmFsdWUocm93LCBkYXRhRmllbGQpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0VmFsdWUocm93LCBkYXRhRmllbGQpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gR2V0cyBhIGNvbHVtbiBwcm9wZXJ0eS4gXG5cdCogQHBhcmFtIHtzdHJpbmd9IGNvbHVtbkRhdGFGaWVsZC4gQ29sdW1uIGZpZWxkIG5hbWUuXG5cdCogQHBhcmFtIHtzdHJpbmd9IHByb3BlcnR5TmFtZS4gQ29sdW1uIHByb3BlcnR5IG5hbWUuXG5cdCogQHJldHVybnMge2FueX1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldENvbHVtblByb3BlcnR5KGNvbHVtbkRhdGFGaWVsZCwgcHJvcGVydHlOYW1lKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldENvbHVtblByb3BlcnR5KGNvbHVtbkRhdGFGaWVsZCwgcHJvcGVydHlOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIENoZWNrcyB3aGV0aGVyIGEgZ3JvdXAgaXMgZXhwYW5kZWQgYW5kIHJldHVybnMgdHJ1ZSBvciBmYWxzZS4gZmFsc2UgaXMgcmV0dXJuZWQgd2hlbiB0aGUgZ3JvdXAgaW5kZXggaXMgdW5kZWZpbmVkLCB0b28uIFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBpbmRleC4gVGhlIGdyb3VwJ3MgaGllcmFyY2hpY2FsIGluZGV4LlxuXHQqIEByZXR1cm5zIHtib29sZWFufVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgaXNHcm91cEV4cGFuZGVkKGluZGV4KTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmlzR3JvdXBFeHBhbmRlZChpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBMb2FkcyB0aGUgVGFibGUncyBzdGF0ZS4gSW5mb3JtYXRpb24gYWJvdXQgY29sdW1ucywgZXhwYW5kZWQgcm93cywgc2VsZWN0ZWQgcm93cywgYXBwbGllZCBmaXRlcmluZywgZ3JvdXBpbmcsIGFuZCBzb3J0ZWQgY29sdW1ucyBpcyBsb2FkZWQsIGJhc2VkIG9uIHRoZSB2YWx1ZSBvZiB0aGUgc3RhdGVTZXR0aW5ncyBwcm9wZXJ0eS4gXG5cdCogQHBhcmFtIHthbnl9IHN0YXRlPy4gQW4gb2JqZWN0IHJldHVybmVkIGJ5IG9uZSBvZiB0aGUgbWV0aG9kcyA8c3Ryb25nPmdldFN0YXRlPC9zdHJvbmc+IG9yIDxzdHJvbmc+c2F2ZVN0YXRlPC9zdHJvbmc+LiBJZiBhIHN0YXRlIGlzIG5vdCBwYXNzZWQsIHRoZSBtZXRob2QgdHJpZXMgdG8gbG9hZCB0aGUgc3RhdGUgZnJvbSB0aGUgYnJvd3NlcidzIGxvY2FsU3RvcmFnZS5cblx0Ki9cbiAgICBwdWJsaWMgbG9hZFN0YXRlKHN0YXRlPzogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmxvYWRTdGF0ZShzdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQubG9hZFN0YXRlKHN0YXRlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gTmF2aWdhdGVzIHRvIGEgcGFnZS4gXG5cdCogQHBhcmFtIHtudW1iZXJ9IHBhZ2VJbmRleC4gVGhlIHplcm8tYmFzZWQgcGFnZSBpbmRleCB0byBuYXZpZ2F0ZSB0by5cblx0Ki9cbiAgICBwdWJsaWMgbmF2aWdhdGVUbyhwYWdlSW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5uYXZpZ2F0ZVRvKHBhZ2VJbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQubmF2aWdhdGVUbyhwYWdlSW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZWZyZXNoZXMgdGhlIHRhYmxlLiBcblx0Ki9cbiAgICBwdWJsaWMgcmVmcmVzaCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVmcmVzaCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlZnJlc2goKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVtb3ZlcyBmaWx0ZXJzIGFwcGxpZWQgdG8gYSBzcGVjaWZpYyBjb2x1bW4uIFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBkYXRhRmllbGQuIFRoZSBjb2x1bW4ncyBkYXRhIGZpZWxkLlxuXHQqL1xuICAgIHB1YmxpYyByZW1vdmVGaWx0ZXIoZGF0YUZpZWxkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVtb3ZlRmlsdGVyKGRhdGFGaWVsZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVtb3ZlRmlsdGVyKGRhdGFGaWVsZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJlbW92ZXMgZ3JvdXBpbmcgYnkgYSBjb2x1bW4uIFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBkYXRhRmllbGQuIFRoZSBjb2x1bW4ncyBkYXRhIGZpZWxkLlxuXHQqL1xuICAgIHB1YmxpYyByZW1vdmVHcm91cChkYXRhRmllbGQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVHcm91cChkYXRhRmllbGQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlbW92ZUdyb3VwKGRhdGFGaWVsZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJlbW92ZXMgYSByb3cgYnkgaXRzIGlkLiBcblx0KiBAcGFyYW0ge3N0cmluZyB8IG51bWJlcn0gcm93LiBUaGUgaWQgb2YgdGhlIGNlbGwncyByb3cuXG5cdCovXG4gICAgcHVibGljIHJlbW92ZVJvdyhyb3c6IHN0cmluZyB8IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVSb3cocm93KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVSb3cocm93KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2F2ZXMgdGhlIFRhYmxlJ3Mgc3RhdGUuIEluZm9ybWF0aW9uIGFib3V0IGNvbHVtbnMsIGV4cGFuZGVkIHJvd3MsIHNlbGVjdGVkIHJvd3MsIGFwcGxpZWQgZml0ZXJpbmcsIGdyb3VwaW5nLCBhbmQgc29ydGVkIGNvbHVtbnMgaXMgc2F2ZWQsIGJhc2VkIG9uIHRoZSB2YWx1ZSBvZiB0aGUgc3RhdGVTZXR0aW5ncyBwcm9wZXJ0eS4gXG5cdCogQHJldHVybnMge2FueX1cbiAgKi9cblx0cHVibGljIGFzeW5jIHNhdmVTdGF0ZSgpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuc2F2ZVN0YXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZWxlY3RzIG9uZSBvciBtb3JlIHJvd3MuIFxuXHQqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyIHwgKHN0cmluZyB8IG51bWJlcilbXX0gcm93SWQuIFRoZSBpZCBvZiB0aGUgcm93IChvciBhbiBhcnJheSBvZiByb3cgaWRzKSB0byBzZWxlY3QuXG5cdCovXG4gICAgcHVibGljIHNlbGVjdChyb3dJZDogc3RyaW5nIHwgbnVtYmVyIHwgKHN0cmluZyB8IG51bWJlcilbXSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zZWxlY3Qocm93SWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdChyb3dJZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgdGhlIHZhbHVlIG9mIGEgY2VsbC4gXG5cdCogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IHJvdy4gVGhlIGlkIG9mIHRoZSBjZWxsJ3Mgcm93LlxuXHQqIEBwYXJhbSB7c3RyaW5nfSBkYXRhRmllbGQuIFRoZSBkYXRhRmllbGQgb2YgdGhlIGNlbGwncyBjb2x1bW4uXG5cdCogQHBhcmFtIHthbnl9IHZhbHVlLiBUaGUgbmV3IHZhbHVlIG9mIHRoZSBjZWxsLlxuXHQqL1xuICAgIHB1YmxpYyBzZXRWYWx1ZShyb3c6IHN0cmluZyB8IG51bWJlciwgZGF0YUZpZWxkOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2V0VmFsdWUocm93LCBkYXRhRmllbGQsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zZXRWYWx1ZShyb3csIGRhdGFGaWVsZCwgdmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTb3J0cyB0aGUgVGFibGUgYnkgYSBjb2x1bW4uIFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBjb2x1bW5EYXRhRmllbGQuIENvbHVtbiBmaWVsZCBuYW1lLlxuXHQqIEBwYXJhbSB7c3RyaW5nfSBzb3J0T3JkZXI/LiBTb3J0IG9yZGVyLiBQb3NzaWJsZSB2YWx1ZXM6ICdhc2MnIChhc2NlbmRpbmcpLCAnZGVzYycgKGRlc2NlbmRpbmcpLCBhbmQgbnVsbCAocmVtb3ZlcyBzb3J0aW5nIGJ5IGNvbHVtbikuIElmIG5vdCBwcm92aWRlZCwgdG9nZ2xlcyB0aGUgc29ydGluZy5cblx0Ki9cbiAgICBwdWJsaWMgc29ydEJ5KGNvbHVtbkRhdGFGaWVsZDogc3RyaW5nLCBzb3J0T3JkZXI/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc29ydEJ5KGNvbHVtbkRhdGFGaWVsZCwgc29ydE9yZGVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zb3J0QnkoY29sdW1uRGF0YUZpZWxkLCBzb3J0T3JkZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIGEgY29sdW1uIHByb3BlcnR5LiBcblx0KiBAcGFyYW0ge3N0cmluZ30gY29sdW1uRGF0YUZpZWxkLiBDb2x1bW4gZmllbGQgbmFtZS5cblx0KiBAcGFyYW0ge3N0cmluZ30gcHJvcGVydHlOYW1lLiBDb2x1bW4gcHJvcGVydHkgbmFtZS5cblx0KiBAcGFyYW0ge2FueX0gcHJvcGVydHlWYWx1ZS4gUHJvcGVydHkgdmFsdWUuXG5cdCovXG4gICAgcHVibGljIHNldENvbHVtblByb3BlcnR5KGNvbHVtbkRhdGFGaWVsZDogc3RyaW5nLCBwcm9wZXJ0eU5hbWU6IHN0cmluZywgcHJvcGVydHlWYWx1ZTogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNldENvbHVtblByb3BlcnR5KGNvbHVtbkRhdGFGaWVsZCwgcHJvcGVydHlOYW1lLCBwcm9wZXJ0eVZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zZXRDb2x1bW5Qcm9wZXJ0eShjb2x1bW5EYXRhRmllbGQsIHByb3BlcnR5TmFtZSwgcHJvcGVydHlWYWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFVwZGF0ZXMgYSB0YWJsZSByb3cuIFRoZSBtZXRob2QgZXhwZWN0cyB0d28gcGFyYW1ldGVycyAtIHJvdyBpZCBhbmQgSlNPTiBvYmplY3Qgd2l0aCB0aGUgbmV3IHJvdyBkYXRhLiBcblx0KiBAcGFyYW0ge3N0cmluZyB8IG51bWJlcn0gcm93SWQuIFRoZSBpZCBvZiB0aGUgcm93LlxuXHQqIEBwYXJhbSB7YW55fSBkYXRhLiBKU09OIG9iamVjdCB3aXRoIHRoZSBuZXcgcm93J3MgZGF0YS4gRXhhbXBsZToge2ZpcnN0TmFtZTogJ1BldGVyJywgbGFzdE5hbWU6ICdGdWxsZXInfS5cblx0Ki9cbiAgICBwdWJsaWMgdXBkYXRlUm93KHJvd0lkOiBzdHJpbmcgfCBudW1iZXIsIGRhdGE6IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC51cGRhdGVSb3cocm93SWQsIGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnVwZGF0ZVJvdyhyb3dJZCwgZGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFVuc2VsZWN0cyBvbmUgb3IgbW9yZSByb3dzLiBcblx0KiBAcGFyYW0ge3N0cmluZyB8IG51bWJlciB8IChzdHJpbmcgfCBudW1iZXIpW119IHJvd0lkLiBUaGUgaWQgb2YgdGhlIHJvdyAob3IgYW4gYXJyYXkgb2Ygcm93IGlkcykgdG8gdW5zZWxlY3QuXG5cdCovXG4gICAgcHVibGljIHVuc2VsZWN0KHJvd0lkOiBzdHJpbmcgfCBudW1iZXIgfCAoc3RyaW5nIHwgbnVtYmVyKVtdKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnVuc2VsZWN0KHJvd0lkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC51bnNlbGVjdChyb3dJZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cdGdldCBpc1JlbmRlcmVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCA6IGZhbHNlO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXG4gICAgICB0aGF0Lm9uQ3JlYXRlLmVtaXQodGhhdC5uYXRpdmVFbGVtZW50KTtcblxuXHRcdFNtYXJ0LlJlbmRlcigpO1xuXG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NtYXJ0LWFuZ3VsYXInKTtcblxuXHRcdHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4geyB0aGF0Lm9uUmVhZHkuZW1pdCh0aGF0Lm5hdGl2ZUVsZW1lbnQpOyB9KTtcblx0XHR0aGlzLmxpc3RlbigpO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy51bmxpc3RlbigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXHRcdGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQgJiYgdGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcblx0XHRcdGZvciAoY29uc3QgcHJvcE5hbWUgaW4gY2hhbmdlcykge1xuXHRcdFx0XHRpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcblx0XHRcdFx0XHR0aGlzLm5hdGl2ZUVsZW1lbnRbcHJvcE5hbWVdID0gY2hhbmdlc1twcm9wTmFtZV0uY3VycmVudFZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBZGQgZXZlbnQgbGlzdGVuZXJzLiAqL1xuXHRwcml2YXRlIGxpc3RlbigpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjZWxsQmVnaW5FZGl0SGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ2VsbEJlZ2luRWRpdC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjZWxsQmVnaW5FZGl0JywgdGhhdC5ldmVudEhhbmRsZXJzWydjZWxsQmVnaW5FZGl0SGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY2VsbENsaWNrSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ2VsbENsaWNrLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NlbGxDbGljaycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY2VsbENsaWNrSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY2VsbEVuZEVkaXRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25DZWxsRW5kRWRpdC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjZWxsRW5kRWRpdCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snY2VsbEVuZEVkaXRIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjaGFuZ2VIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25DaGFuZ2UuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhhdC5ldmVudEhhbmRsZXJzWydjaGFuZ2VIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjb2xsYXBzZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNvbGxhcHNlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbGxhcHNlJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb2xsYXBzZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2V4cGFuZEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkV4cGFuZC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdleHBhbmQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2V4cGFuZEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtbkNsaWNrSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ29sdW1uQ2xpY2suZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29sdW1uQ2xpY2snLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtbkNsaWNrSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY2xvc2VDb2x1bW5NZW51SGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ2xvc2VDb2x1bW5NZW51LmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlQ29sdW1uTWVudScsIHRoYXQuZXZlbnRIYW5kbGVyc1snY2xvc2VDb2x1bW5NZW51SGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uUmVzaXplSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ29sdW1uUmVzaXplLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbHVtblJlc2l6ZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uUmVzaXplSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snZmlsdGVySGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uRmlsdGVyLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZpbHRlcicsIHRoYXQuZXZlbnRIYW5kbGVyc1snZmlsdGVySGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snZ3JvdXBIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Hcm91cC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdncm91cCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snZ3JvdXBIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydvcGVuQ29sdW1uTWVudUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbk9wZW5Db2x1bW5NZW51LmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ29wZW5Db2x1bW5NZW51JywgdGhhdC5ldmVudEhhbmRsZXJzWydvcGVuQ29sdW1uTWVudUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3BhZ2VIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25QYWdlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3BhZ2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3BhZ2VIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydyb3dCZWdpbkVkaXRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Sb3dCZWdpbkVkaXQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncm93QmVnaW5FZGl0JywgdGhhdC5ldmVudEhhbmRsZXJzWydyb3dCZWdpbkVkaXRIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydyb3dFbmRFZGl0SGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uUm93RW5kRWRpdC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdyb3dFbmRFZGl0JywgdGhhdC5ldmVudEhhbmRsZXJzWydyb3dFbmRFZGl0SGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snc29ydEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblNvcnQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc29ydCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snc29ydEhhbmRsZXInXSk7XG5cblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVtb3ZlIGV2ZW50IGxpc3RlbmVycy4gKi9cblx0cHJpdmF0ZSB1bmxpc3RlbigpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY2VsbEJlZ2luRWRpdEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NlbGxCZWdpbkVkaXQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NlbGxCZWdpbkVkaXRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2NlbGxDbGlja0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NlbGxDbGljaycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY2VsbENsaWNrSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjZWxsRW5kRWRpdEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NlbGxFbmRFZGl0JywgdGhhdC5ldmVudEhhbmRsZXJzWydjZWxsRW5kRWRpdEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY2hhbmdlSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhhdC5ldmVudEhhbmRsZXJzWydjaGFuZ2VIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbGxhcHNlSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY29sbGFwc2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbGxhcHNlSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydleHBhbmRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdleHBhbmQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2V4cGFuZEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uQ2xpY2tIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb2x1bW5DbGljaycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uQ2xpY2tIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2Nsb3NlQ29sdW1uTWVudUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Nsb3NlQ29sdW1uTWVudScsIHRoYXQuZXZlbnRIYW5kbGVyc1snY2xvc2VDb2x1bW5NZW51SGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5SZXNpemVIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb2x1bW5SZXNpemUnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtblJlc2l6ZUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snZmlsdGVySGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQub25maWx0ZXJIYW5kbGVyID0gbnVsbDtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydncm91cEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2dyb3VwJywgdGhhdC5ldmVudEhhbmRsZXJzWydncm91cEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snb3BlbkNvbHVtbk1lbnVIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdvcGVuQ29sdW1uTWVudScsIHRoYXQuZXZlbnRIYW5kbGVyc1snb3BlbkNvbHVtbk1lbnVIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3BhZ2VIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdwYWdlJywgdGhhdC5ldmVudEhhbmRsZXJzWydwYWdlSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydyb3dCZWdpbkVkaXRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdyb3dCZWdpbkVkaXQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd0JlZ2luRWRpdEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1sncm93RW5kRWRpdEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jvd0VuZEVkaXQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd0VuZEVkaXRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3NvcnRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzb3J0JywgdGhhdC5ldmVudEhhbmRsZXJzWydzb3J0SGFuZGxlciddKTtcblx0XHR9XG5cblx0fVxufVxuIl19