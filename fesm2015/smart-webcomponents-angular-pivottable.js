
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.pivottable';

import { __decorate, __awaiter } from 'tslib';
import { EventEmitter, Output, Input, ElementRef, Directive, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

class BaseElement {
    constructor(ref) {
        this.onCreate = new EventEmitter();
        this.onReady = new EventEmitter();
        this.onAttach = new EventEmitter();
        this.onDetach = new EventEmitter();
        const that = this;
        this.nativeElement = ref.nativeElement;
        that.nativeElement.onAttached = () => {
            that.onAttach.emit(that.nativeElement);
        };
        that.nativeElement.onDetached = () => {
            that.onDetach.emit(that.nativeElement);
        };
    }
    addEventListener(type, listener, options = false) {
        this.nativeElement.addEventListener(type, listener, options);
    }
    removeEventListener(type, listener, options = false) {
        this.nativeElement.removeEventListener(type, listener, options);
    }
    dispatchEvent(event) {
        return this.nativeElement.dispatchEvent(event);
    }
    blur() {
        this.nativeElement.blur();
    }
    click() {
        this.nativeElement.click();
    }
    focus(options) {
        this.nativeElement.focus(options);
    }
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    get locale() {
        return this.nativeElement ? this.nativeElement.locale : undefined;
    }
    set locale(value) {
        this.nativeElement ? this.nativeElement.locale = value : undefined;
    }
    /** @description Callback used to customize the format of the messages that are returned from the Localization Module. */
    get localizeFormatFunction() {
        return this.nativeElement ? this.nativeElement.localizeFormatFunction : undefined;
    }
    set localizeFormatFunction(value) {
        this.nativeElement ? this.nativeElement.localizeFormatFunction = value : undefined;
    }
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
    get messages() {
        return this.nativeElement ? this.nativeElement.messages : undefined;
    }
    set messages(value) {
        this.nativeElement ? this.nativeElement.messages = value : undefined;
    }
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    get rightToLeft() {
        return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
    }
    set rightToLeft(value) {
        this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
    }
    /** @description Determines the theme. Theme defines the look of the element */
    get theme() {
        return this.nativeElement ? this.nativeElement.theme : undefined;
    }
    set theme(value) {
        this.nativeElement ? this.nativeElement.theme = value : undefined;
    }
}
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
const Smart = window.Smart;

let PivotTableComponent = class PivotTableComponent extends BaseElement {
    constructor(ref) {
        super(ref);
        this.eventHandlers = [];
        /** @description This event is triggered when a cell has been clicked.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	dataField, 	row)
        *   dataField - The data field of the cell's dynamic column.
        *   row - The data of the cell's row.
        */
        this.onCellClick = new EventEmitter();
        /** @description This event is triggered when the selection is changed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	type)
        *   type - The type of action that initiated the selection change. Possible types: 'programmatic', 'interaction', 'remove'.
        */
        this.onChange = new EventEmitter();
        /** @description This event is triggered when a summary column header cell has been clicked.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	columnDefinition, 	dataField)
        *   columnDefinition - An object detailing the clicked dynamic column.
        *   dataField - The data field of the cell's original column.
        */
        this.onColumnClick = new EventEmitter();
        /** @description This event is triggered when a row has been collapsed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	record)
        *   record - The (aggregated) data of the collapsed row.
        */
        this.onCollapse = new EventEmitter();
        /** @description This event is triggered when a total column has been collapsed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	columnDefinition)
        *   columnDefinition - The definition of the collapsed total column.
        */
        this.onCollapseTotalColumn = new EventEmitter();
        /** @description This event is triggered when a row has been expanded.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	record)
        *   record - The (aggregated) data of the expanded row.
        */
        this.onExpand = new EventEmitter();
        /** @description This event is triggered when a total column has been expanded.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	columnDefinition)
        *   columnDefinition - The definition of the expanded total column.
        */
        this.onExpandTotalColumn = new EventEmitter();
        /** @description This event is triggered when a filtering-related action is made.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	action, 	filters)
        *   action - The filtering action. Possible actions: 'add', 'remove'.
        *   filters - The added filters. Only when action is 'add'.
        */
        this.onFilter = new EventEmitter();
        /** @description This event is triggered when a column header cell has been clicked.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	columns)
        *   columns - An array with information about the dynamic columns the PivotTable has been sorted by.
        */
        this.onSort = new EventEmitter();
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('smart-pivot-table');
        for (let propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    }
    /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
    get animation() {
        return this.nativeElement ? this.nativeElement.animation : undefined;
    }
    set animation(value) {
        this.nativeElement ? this.nativeElement.animation = value : undefined;
    }
    /** @description Sets or gets whether the reordering of columns is enabled. */
    get columnReorder() {
        return this.nativeElement ? this.nativeElement.columnReorder : undefined;
    }
    set columnReorder(value) {
        this.nativeElement ? this.nativeElement.columnReorder = value : undefined;
    }
    /** @description Describes the columns of the PivotTable's original tabular data. Based on these settings and the data source, the actual columns of the PivotTable are dynamically generated. */
    get columns() {
        return this.nativeElement ? this.nativeElement.columns : undefined;
    }
    set columns(value) {
        this.nativeElement ? this.nativeElement.columns = value : undefined;
    }
    /** @description Sets or gets whether to show total columns for each pivot data point. When enabled, all summary columns must have the same summary function set by which total columns are calculated. */
    get columnTotals() {
        return this.nativeElement ? this.nativeElement.columnTotals : undefined;
    }
    set columnTotals(value) {
        this.nativeElement ? this.nativeElement.columnTotals = value : undefined;
    }
    /** @description Sets or gets the position of total columns (shown when columnTotals is enabled). */
    get columnTotalsPosition() {
        return this.nativeElement ? this.nativeElement.columnTotalsPosition : undefined;
    }
    set columnTotalsPosition(value) {
        this.nativeElement ? this.nativeElement.columnTotalsPosition = value : undefined;
    }
    /** @description Sets or gets details about conditional formatting to be applied to the PivotTable's cells. */
    get conditionalFormatting() {
        return this.nativeElement ? this.nativeElement.conditionalFormatting : undefined;
    }
    set conditionalFormatting(value) {
        this.nativeElement ? this.nativeElement.conditionalFormatting = value : undefined;
    }
    /** @description Determines the original tabular data source of the PivotTable. */
    get dataSource() {
        return this.nativeElement ? this.nativeElement.dataSource : undefined;
    }
    set dataSource(value) {
        this.nativeElement ? this.nativeElement.dataSource = value : undefined;
    }
    /** @description Sets or gets whether the original tabular data sourse of the PivotTable will be pre-sorted based on columns with the rowGroup property (and their order). */
    get defaultSortByRowGroups() {
        return this.nativeElement ? this.nativeElement.defaultSortByRowGroups : undefined;
    }
    set defaultSortByRowGroups(value) {
        this.nativeElement ? this.nativeElement.defaultSortByRowGroups = value : undefined;
    }
    /** @description Sets or gets whether to display the PivotTable's designer alongside the table itself. The designer allows for configuring column settings and applying filtering. */
    get designer() {
        return this.nativeElement ? this.nativeElement.designer : undefined;
    }
    set designer(value) {
        this.nativeElement ? this.nativeElement.designer = value : undefined;
    }
    /** @description Sets or gets the position of the PivotTable's designer (shown when designer is enabled). */
    get designerPosition() {
        return this.nativeElement ? this.nativeElement.designerPosition : undefined;
    }
    set designerPosition(value) {
        this.nativeElement ? this.nativeElement.designerPosition = value : undefined;
    }
    /** @description Disables the interaction with the element. */
    get disabled() {
        return this.nativeElement ? this.nativeElement.disabled : undefined;
    }
    set disabled(value) {
        this.nativeElement ? this.nativeElement.disabled = value : undefined;
    }
    /** @description If enabled, shows the original tabular data that has been aggregated in a PivotTable summary cell when the cell is double-clicked or F2 is pressed. */
    get drillDown() {
        return this.nativeElement ? this.nativeElement.drillDown : undefined;
    }
    set drillDown(value) {
        this.nativeElement ? this.nativeElement.drillDown = value : undefined;
    }
    /** @description If set, shows an export button in the drill down dialog. */
    get drillDownDataExport() {
        return this.nativeElement ? this.nativeElement.drillDownDataExport : undefined;
    }
    set drillDownDataExport(value) {
        this.nativeElement ? this.nativeElement.drillDownDataExport = value : undefined;
    }
    /** @description Sets or gets the drill down table export file name. */
    get drillDownDataExportName() {
        return this.nativeElement ? this.nativeElement.drillDownDataExportName : undefined;
    }
    set drillDownDataExportName(value) {
        this.nativeElement ? this.nativeElement.drillDownDataExportName = value : undefined;
    }
    /** @description Sets or gets whether sorting based on columns in classic row groups layout mode is enabled. */
    get drillDownTableInit() {
        return this.nativeElement ? this.nativeElement.drillDownTableInit : undefined;
    }
    set drillDownTableInit(value) {
        this.nativeElement ? this.nativeElement.drillDownTableInit = value : undefined;
    }
    /** @description Sets or gets whether the PivotTable's column header is sticky/frozen. */
    get drillDownCustomAction() {
        return this.nativeElement ? this.nativeElement.drillDownCustomAction : undefined;
    }
    set drillDownCustomAction(value) {
        this.nativeElement ? this.nativeElement.drillDownCustomAction = value : undefined;
    }
    /** @description Sets or gets whether to show a Grand total row aggregating the data of all rows. */
    get enableSortByRowGroups() {
        return this.nativeElement ? this.nativeElement.enableSortByRowGroups : undefined;
    }
    set enableSortByRowGroups(value) {
        this.nativeElement ? this.nativeElement.enableSortByRowGroups = value : undefined;
    }
    /** @description Sets or gets the way row nesting (based on rowGroup columns) is displayed. */
    get freezeHeader() {
        return this.nativeElement ? this.nativeElement.freezeHeader : undefined;
    }
    set freezeHeader(value) {
        this.nativeElement ? this.nativeElement.freezeHeader = value : undefined;
    }
    /** @description Sets or gets whether to hide the tooltip that displays details when multiple summary cells with non-null values are selected. */
    get getDefaultSummaryFunction() {
        return this.nativeElement ? this.nativeElement.getDefaultSummaryFunction : undefined;
    }
    set getDefaultSummaryFunction(value) {
        this.nativeElement ? this.nativeElement.getDefaultSummaryFunction = value : undefined;
    }
    /** @description Sets or gets whether to hide rows that contain only 0 or null values. Applicable only when there are rowGroup columns. */
    get grandTotal() {
        return this.nativeElement ? this.nativeElement.grandTotal : undefined;
    }
    set grandTotal(value) {
        this.nativeElement ? this.nativeElement.grandTotal = value : undefined;
    }
    /** @description Sets or gets whether navigation with the keyboard is enabled in the PivotTable. */
    get groupLayout() {
        return this.nativeElement ? this.nativeElement.groupLayout : undefined;
    }
    set groupLayout(value) {
        this.nativeElement ? this.nativeElement.groupLayout = value : undefined;
    }
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    get hideCellSelectionTooltip() {
        return this.nativeElement ? this.nativeElement.hideCellSelectionTooltip : undefined;
    }
    set hideCellSelectionTooltip(value) {
        this.nativeElement ? this.nativeElement.hideCellSelectionTooltip = value : undefined;
    }
    /** @description Sets or gets an object specifying strings used in the element that can be localized. Used in conjunction with the property locale.  */
    get hideEmptyRows() {
        return this.nativeElement ? this.nativeElement.hideEmptyRows : undefined;
    }
    set hideEmptyRows(value) {
        this.nativeElement ? this.nativeElement.hideEmptyRows = value : undefined;
    }
    /** @description Sets or gets what value is shown in cells that do not have aggregated data to display. By default (null), such cells are empty. */
    get keyboardNavigation() {
        return this.nativeElement ? this.nativeElement.keyboardNavigation : undefined;
    }
    set keyboardNavigation(value) {
        this.nativeElement ? this.nativeElement.keyboardNavigation = value : undefined;
    }
    /** @description Sets or gets the page size (when paging is enabled). */
    get locale() {
        return this.nativeElement ? this.nativeElement.locale : undefined;
    }
    set locale(value) {
        this.nativeElement ? this.nativeElement.locale = value : undefined;
    }
    /** @description Sets or gets the current (zero-based) page index (when paging is enabled). */
    get messages() {
        return this.nativeElement ? this.nativeElement.messages : undefined;
    }
    set messages(value) {
        this.nativeElement ? this.nativeElement.messages = value : undefined;
    }
    /** @description Sets or gets whether paging is enabled. */
    get nullDefaultValue() {
        return this.nativeElement ? this.nativeElement.nullDefaultValue : undefined;
    }
    set nullDefaultValue(value) {
        this.nativeElement ? this.nativeElement.nullDefaultValue = value : undefined;
    }
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    get onCellRender() {
        return this.nativeElement ? this.nativeElement.onCellRender : undefined;
    }
    set onCellRender(value) {
        this.nativeElement ? this.nativeElement.onCellRender = value : undefined;
    }
    /** @description Sets or gets whether sorting by row (when a row group cell is clicked) is enabled. When columnTotals is also enabled, sorting is applied per "column group"; otherwise - for all columns. */
    get onColumnRender() {
        return this.nativeElement ? this.nativeElement.onColumnRender : undefined;
    }
    set onColumnRender(value) {
        this.nativeElement ? this.nativeElement.onColumnRender = value : undefined;
    }
    /** @description Sets or gets whether row summaries are displayed in the row headers. Example: Peterson(40) vs Peterson, when rowSummary is set to false. */
    get onInit() {
        return this.nativeElement ? this.nativeElement.onInit : undefined;
    }
    set onInit(value) {
        this.nativeElement ? this.nativeElement.onInit = value : undefined;
    }
    /** @description Sets or gets whether to show row total columns for each summary column. */
    get pageSize() {
        return this.nativeElement ? this.nativeElement.pageSize : undefined;
    }
    set pageSize(value) {
        this.nativeElement ? this.nativeElement.pageSize = value : undefined;
    }
    /** @description Sets or gets the position of row total columns (shown when rowTotals is enabled). */
    get pageIndex() {
        return this.nativeElement ? this.nativeElement.pageIndex : undefined;
    }
    set pageIndex(value) {
        this.nativeElement ? this.nativeElement.pageIndex = value : undefined;
    }
    /** @description Sets or gets whether row selection (via checkboxes) is enabled. */
    get paging() {
        return this.nativeElement ? this.nativeElement.paging : undefined;
    }
    set paging(value) {
        this.nativeElement ? this.nativeElement.paging = value : undefined;
    }
    /** @description Sets or gets the selection mode. Only applicable when selection is enabled. */
    get rightToLeft() {
        return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
    }
    set rightToLeft(value) {
        this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
    }
    /** @description Determines the sorting mode of the PivotTable. */
    get rowSort() {
        return this.nativeElement ? this.nativeElement.rowSort : undefined;
    }
    set rowSort(value) {
        this.nativeElement ? this.nativeElement.rowSort = value : undefined;
    }
    /** @description Determines the theme. Theme defines the look of the element */
    get rowSummary() {
        return this.nativeElement ? this.nativeElement.rowSummary : undefined;
    }
    set rowSummary(value) {
        this.nativeElement ? this.nativeElement.rowSummary = value : undefined;
    }
    /** @description Sets or gets whether the PivotTable's toolbar is shown. It contains two breadcrumb components that allow the modification of the row group and pivot columns, as well as the "Conditional Formatting" and "Fields" buttons that open a dialog with additional settings. */
    get rowTotals() {
        return this.nativeElement ? this.nativeElement.rowTotals : undefined;
    }
    set rowTotals(value) {
        this.nativeElement ? this.nativeElement.rowTotals = value : undefined;
    }
    /** @description Sets or gets whether when hovering a cell with truncated content, a tooltip with the full content will be shown. */
    get rowTotalsPosition() {
        return this.nativeElement ? this.nativeElement.rowTotalsPosition : undefined;
    }
    set rowTotalsPosition(value) {
        this.nativeElement ? this.nativeElement.rowTotalsPosition = value : undefined;
    }
    /** @description undefined */
    get selection() {
        return this.nativeElement ? this.nativeElement.selection : undefined;
    }
    set selection(value) {
        this.nativeElement ? this.nativeElement.selection = value : undefined;
    }
    /** @description undefined */
    get selectionMode() {
        return this.nativeElement ? this.nativeElement.selectionMode : undefined;
    }
    set selectionMode(value) {
        this.nativeElement ? this.nativeElement.selectionMode = value : undefined;
    }
    /** @description undefined */
    get sortMode() {
        return this.nativeElement ? this.nativeElement.sortMode : undefined;
    }
    set sortMode(value) {
        this.nativeElement ? this.nativeElement.sortMode = value : undefined;
    }
    /** @description undefined */
    get theme() {
        return this.nativeElement ? this.nativeElement.theme : undefined;
    }
    set theme(value) {
        this.nativeElement ? this.nativeElement.theme = value : undefined;
    }
    /** @description undefined */
    get toolbar() {
        return this.nativeElement ? this.nativeElement.toolbar : undefined;
    }
    set toolbar(value) {
        this.nativeElement ? this.nativeElement.toolbar = value : undefined;
    }
    /** @description undefined */
    get tooltip() {
        return this.nativeElement ? this.nativeElement.tooltip : undefined;
    }
    set tooltip(value) {
        this.nativeElement ? this.nativeElement.tooltip = value : undefined;
    }
    /** @description Adds a filter to a specific column.
    * @param {string} dataField. The column's data field.
    * @param {any} filter. FilterGroup object.
    */
    addFilter(dataField, filter) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addFilter(dataField, filter);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addFilter(dataField, filter);
            });
        }
    }
    /** @description Clears applied filters.
    */
    clearFilters() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearFilters();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clearFilters();
            });
        }
    }
    /** @description Clears selection.
    */
    clearSelection() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearSelection();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clearSelection();
            });
        }
    }
    /** @description Clears the PivotTable sorting.
    */
    clearSort() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearSort();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clearSort();
            });
        }
    }
    /** @description Collapses all rows (when multiple row groups are applied).
    */
    collapseAllRows() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapseAllRows();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.collapseAllRows();
            });
        }
    }
    /** @description Collapses a row (when multiple row groups are applied).
    * @param {string | number} rowId. The id of the row to collapse. Can be retrieved from the <strong>rows</strong> collection.
    */
    collapseRow(rowId) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapseRow(rowId);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.collapseRow(rowId);
            });
        }
    }
    /** @description Expands all rows (when multiple row groups are applied).
    */
    expandAllRows() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.expandAllRows();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.expandAllRows();
            });
        }
    }
    /** @description Expands a row (when multiple row groups are applied).
    * @param {string | number} rowId. The id of the row to expand. Can be retrieved from the <strong>rows</strong> collection.
    */
    expandRow(rowId) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.expandRow(rowId);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.expandRow(rowId);
            });
        }
    }
    /** @description Exports the PivotTable's data.
    * @param {string} dataFormat. The file format to export to. Supported formats: 'csv', 'html', 'json', 'pdf', 'tsv', 'xlsx', 'xml'.
    * @param {string} fileName. The name of the file to export to
    * @param {Function} callback?. A callback function to pass the exported data to (if fileName is not provided)
    * @returns {any}
  */
    exportData(dataFormat, fileName, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.exportData(dataFormat, fileName, callback);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Returns the current dynamic pivot columns.
    * @returns {any}
  */
    getDynamicColumns() {
        return __awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getDynamicColumns();
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Returns an array of selected row ids (when selectionMode is 'many' or 'extended') or an array of selected cell details (when selectionMode is 'cell').
    * @returns {(string | number)[] | { dataField: string, rowId: string | number }[]}
  */
    getSelection() {
        return __awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getSelection();
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Refreshes the PivotTable.
    */
    refresh() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.refresh();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.refresh();
            });
        }
    }
    /** @description Removes filters applied to a specific column.
    * @param {string} dataField. The column's data field.
    */
    removeFilter(dataField) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeFilter(dataField);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeFilter(dataField);
            });
        }
    }
    /** @description Selects one or more rows (when selectionMode is 'many' or 'extended') or a single cell (when selectionMode is 'cell' and the second argument is passed).
    * @param {string | number | (string | number)[]} rowId. The id of the row (or an array of row ids) to select (or of the cell's parent row when <strong>selectionMode</strong> is <em>'cell'</em>). Can be retrieved from the <strong>rows</strong> collection.
    * @param {string} dataField?. The dataField of the dynamic column (can be retrieved by calling <strong>getDynamicColumns</strong>) of the cell to select (only applicable when <strong>selectionMode</strong> is <em>'cell'</em>).
    */
    select(rowId, dataField) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.select(rowId, dataField);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.select(rowId, dataField);
            });
        }
    }
    /** @description Sorts by a summary or group column.
    * @param {any} columnDefinition. The dynamic column's definition. Can be retrieved from the method <strong>getDynamicColumns</strong>.
    * @param {string} sortOrder?. Sort order. Possible values: 'asc' (ascending), 'desc' (descending), and null (removes sorting by column). If not provided, toggles the sorting.
    */
    sortBy(columnDefinition, sortOrder) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.sortBy(columnDefinition, sortOrder);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.sortBy(columnDefinition, sortOrder);
            });
        }
    }
    /** @description Unselects one or more rows (when selectionMode is 'many' or 'extended') or a single cell (when selectionMode is 'cell' and the second argument is passed).
    * @param {string | number | (string | number)[]} rowId. The id of the row (or an array of row ids) to select (or of the cell's parent row when <strong>selectionMode</strong> is <em>'cell'</em>). Can be retrieved from the <strong>rows</strong> collection.
    * @param {string} dataField?. The dataField of the dynamic column (can be retrieved by calling <strong>getDynamicColumns</strong>) of the cell to select (only applicable when <strong>selectionMode</strong> is <em>'cell'</em>).
    */
    unselect(rowId, dataField) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.unselect(rowId, dataField);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.unselect(rowId, dataField);
            });
        }
    }
    get isRendered() {
        return this.nativeElement ? this.nativeElement.isRendered : false;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        const that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(() => { that.onReady.emit(that.nativeElement); });
        this.listen();
    }
    ngOnDestroy() {
        this.unlisten();
    }
    ngOnChanges(changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (const propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    }
    /** @description Add event listeners. */
    listen() {
        const that = this;
        that.eventHandlers['cellClickHandler'] = (event) => { that.onCellClick.emit(event); };
        that.nativeElement.addEventListener('cellClick', that.eventHandlers['cellClickHandler']);
        that.eventHandlers['changeHandler'] = (event) => { that.onChange.emit(event); };
        that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
        that.eventHandlers['columnClickHandler'] = (event) => { that.onColumnClick.emit(event); };
        that.nativeElement.addEventListener('columnClick', that.eventHandlers['columnClickHandler']);
        that.eventHandlers['collapseHandler'] = (event) => { that.onCollapse.emit(event); };
        that.nativeElement.addEventListener('collapse', that.eventHandlers['collapseHandler']);
        that.eventHandlers['collapseTotalColumnHandler'] = (event) => { that.onCollapseTotalColumn.emit(event); };
        that.nativeElement.addEventListener('collapseTotalColumn', that.eventHandlers['collapseTotalColumnHandler']);
        that.eventHandlers['expandHandler'] = (event) => { that.onExpand.emit(event); };
        that.nativeElement.addEventListener('expand', that.eventHandlers['expandHandler']);
        that.eventHandlers['expandTotalColumnHandler'] = (event) => { that.onExpandTotalColumn.emit(event); };
        that.nativeElement.addEventListener('expandTotalColumn', that.eventHandlers['expandTotalColumnHandler']);
        that.eventHandlers['filterHandler'] = (event) => { that.onFilter.emit(event); };
        that.nativeElement.addEventListener('filter', that.eventHandlers['filterHandler']);
        that.eventHandlers['sortHandler'] = (event) => { that.onSort.emit(event); };
        that.nativeElement.addEventListener('sort', that.eventHandlers['sortHandler']);
    }
    /** @description Remove event listeners. */
    unlisten() {
        const that = this;
        if (that.eventHandlers['cellClickHandler']) {
            that.nativeElement.removeEventListener('cellClick', that.eventHandlers['cellClickHandler']);
        }
        if (that.eventHandlers['changeHandler']) {
            that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
        }
        if (that.eventHandlers['columnClickHandler']) {
            that.nativeElement.removeEventListener('columnClick', that.eventHandlers['columnClickHandler']);
        }
        if (that.eventHandlers['collapseHandler']) {
            that.nativeElement.removeEventListener('collapse', that.eventHandlers['collapseHandler']);
        }
        if (that.eventHandlers['collapseTotalColumnHandler']) {
            that.nativeElement.removeEventListener('collapseTotalColumn', that.eventHandlers['collapseTotalColumnHandler']);
        }
        if (that.eventHandlers['expandHandler']) {
            that.nativeElement.removeEventListener('expand', that.eventHandlers['expandHandler']);
        }
        if (that.eventHandlers['expandTotalColumnHandler']) {
            that.nativeElement.removeEventListener('expandTotalColumn', that.eventHandlers['expandTotalColumnHandler']);
        }
        if (that.eventHandlers['filterHandler']) {
            that.nativeElement.onfilterHandler = null;
        }
        if (that.eventHandlers['sortHandler']) {
            that.nativeElement.removeEventListener('sort', that.eventHandlers['sortHandler']);
        }
    }
};
PivotTableComponent.ctorParameters = () => [
    { type: ElementRef }
];
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
], PivotTableComponent.prototype, "defaultSortByRowGroups", null);
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
], PivotTableComponent.prototype, "drillDownDataExport", null);
__decorate([
    Input()
], PivotTableComponent.prototype, "drillDownDataExportName", null);
__decorate([
    Input()
], PivotTableComponent.prototype, "drillDownTableInit", null);
__decorate([
    Input()
], PivotTableComponent.prototype, "drillDownCustomAction", null);
__decorate([
    Input()
], PivotTableComponent.prototype, "enableSortByRowGroups", null);
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
], PivotTableComponent.prototype, "hideCellSelectionTooltip", null);
__decorate([
    Input()
], PivotTableComponent.prototype, "hideEmptyRows", null);
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
], PivotTableComponent.prototype, "nullDefaultValue", null);
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
], PivotTableComponent.prototype, "pageSize", null);
__decorate([
    Input()
], PivotTableComponent.prototype, "pageIndex", null);
__decorate([
    Input()
], PivotTableComponent.prototype, "paging", null);
__decorate([
    Input()
], PivotTableComponent.prototype, "rightToLeft", null);
__decorate([
    Input()
], PivotTableComponent.prototype, "rowSort", null);
__decorate([
    Input()
], PivotTableComponent.prototype, "rowSummary", null);
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
], PivotTableComponent.prototype, "onCollapse", void 0);
__decorate([
    Output()
], PivotTableComponent.prototype, "onCollapseTotalColumn", void 0);
__decorate([
    Output()
], PivotTableComponent.prototype, "onExpand", void 0);
__decorate([
    Output()
], PivotTableComponent.prototype, "onExpandTotalColumn", void 0);
__decorate([
    Output()
], PivotTableComponent.prototype, "onFilter", void 0);
__decorate([
    Output()
], PivotTableComponent.prototype, "onSort", void 0);
PivotTableComponent = __decorate([
    Directive({
        exportAs: 'smart-pivot-table', selector: 'smart-pivot-table, [smart-pivot-table]'
    })
], PivotTableComponent);

let PivotTableModule = class PivotTableModule {
};
PivotTableModule = __decorate([
    NgModule({
        declarations: [PivotTableComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        exports: [PivotTableComponent]
    })
], PivotTableModule);

/**
 * Generated bundle index. Do not edit.
 */

export { PivotTableComponent, PivotTableModule, Smart, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-pivottable.js.map
