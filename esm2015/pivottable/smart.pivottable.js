import * as tslib_1 from "tslib";
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Smart } from './smart.element';
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
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    get locale() {
        return this.nativeElement ? this.nativeElement.locale : undefined;
    }
    set locale(value) {
        this.nativeElement ? this.nativeElement.locale = value : undefined;
    }
    /** @description Sets or gets whether sorting by row (when a row group cell is clicked) is enabled. When columnTotals is also enabled, sorting is applied per "column group"; otherwise - for all columns. */
    get messages() {
        return this.nativeElement ? this.nativeElement.messages : undefined;
    }
    set messages(value) {
        this.nativeElement ? this.nativeElement.messages = value : undefined;
    }
    /** @description Sets or gets whether row summaries are displayed in the row headers. Example: Peterson(40) vs Peterson, when rowSummary is set to false. */
    get nullDefaultValue() {
        return this.nativeElement ? this.nativeElement.nullDefaultValue : undefined;
    }
    set nullDefaultValue(value) {
        this.nativeElement ? this.nativeElement.nullDefaultValue = value : undefined;
    }
    /** @description Sets or gets whether to show row total columns for each summary column. */
    get onCellRender() {
        return this.nativeElement ? this.nativeElement.onCellRender : undefined;
    }
    set onCellRender(value) {
        this.nativeElement ? this.nativeElement.onCellRender = value : undefined;
    }
    /** @description Sets or gets the position of row total columns (shown when rowTotals is enabled). */
    get onColumnRender() {
        return this.nativeElement ? this.nativeElement.onColumnRender : undefined;
    }
    set onColumnRender(value) {
        this.nativeElement ? this.nativeElement.onColumnRender = value : undefined;
    }
    /** @description Sets or gets whether row selection (via checkboxes) is enabled. */
    get onInit() {
        return this.nativeElement ? this.nativeElement.onInit : undefined;
    }
    set onInit(value) {
        this.nativeElement ? this.nativeElement.onInit = value : undefined;
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
    * @param {string} fileName?. The name of the file to export to
    * @param {Function} callback?. A callback function to pass the exported data to (if fileName is not provided)
    * @returns {any}
  */
    exportData(dataFormat, fileName, callback) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
tslib_1.__decorate([
    Input()
], PivotTableComponent.prototype, "animation", null);
tslib_1.__decorate([
    Input()
], PivotTableComponent.prototype, "columnReorder", null);
tslib_1.__decorate([
    Input()
], PivotTableComponent.prototype, "columns", null);
tslib_1.__decorate([
    Input()
], PivotTableComponent.prototype, "columnTotals", null);
tslib_1.__decorate([
    Input()
], PivotTableComponent.prototype, "columnTotalsPosition", null);
tslib_1.__decorate([
    Input()
], PivotTableComponent.prototype, "conditionalFormatting", null);
tslib_1.__decorate([
    Input()
], PivotTableComponent.prototype, "dataSource", null);
tslib_1.__decorate([
    Input()
], PivotTableComponent.prototype, "defaultSortByRowGroups", null);
tslib_1.__decorate([
    Input()
], PivotTableComponent.prototype, "designer", null);
tslib_1.__decorate([
    Input()
], PivotTableComponent.prototype, "designerPosition", null);
tslib_1.__decorate([
    Input()
], PivotTableComponent.prototype, "disabled", null);
tslib_1.__decorate([
    Input()
], PivotTableComponent.prototype, "drillDown", null);
tslib_1.__decorate([
    Input()
], PivotTableComponent.prototype, "drillDownDataExport", null);
tslib_1.__decorate([
    Input()
], PivotTableComponent.prototype, "drillDownDataExportName", null);
tslib_1.__decorate([
    Input()
], PivotTableComponent.prototype, "drillDownTableInit", null);
tslib_1.__decorate([
    Input()
], PivotTableComponent.prototype, "drillDownCustomAction", null);
tslib_1.__decorate([
    Input()
], PivotTableComponent.prototype, "enableSortByRowGroups", null);
tslib_1.__decorate([
    Input()
], PivotTableComponent.prototype, "freezeHeader", null);
tslib_1.__decorate([
    Input()
], PivotTableComponent.prototype, "getDefaultSummaryFunction", null);
tslib_1.__decorate([
    Input()
], PivotTableComponent.prototype, "grandTotal", null);
tslib_1.__decorate([
    Input()
], PivotTableComponent.prototype, "groupLayout", null);
tslib_1.__decorate([
    Input()
], PivotTableComponent.prototype, "hideCellSelectionTooltip", null);
tslib_1.__decorate([
    Input()
], PivotTableComponent.prototype, "hideEmptyRows", null);
tslib_1.__decorate([
    Input()
], PivotTableComponent.prototype, "keyboardNavigation", null);
tslib_1.__decorate([
    Input()
], PivotTableComponent.prototype, "locale", null);
tslib_1.__decorate([
    Input()
], PivotTableComponent.prototype, "messages", null);
tslib_1.__decorate([
    Input()
], PivotTableComponent.prototype, "nullDefaultValue", null);
tslib_1.__decorate([
    Input()
], PivotTableComponent.prototype, "onCellRender", null);
tslib_1.__decorate([
    Input()
], PivotTableComponent.prototype, "onColumnRender", null);
tslib_1.__decorate([
    Input()
], PivotTableComponent.prototype, "onInit", null);
tslib_1.__decorate([
    Input()
], PivotTableComponent.prototype, "rightToLeft", null);
tslib_1.__decorate([
    Input()
], PivotTableComponent.prototype, "rowSort", null);
tslib_1.__decorate([
    Input()
], PivotTableComponent.prototype, "rowSummary", null);
tslib_1.__decorate([
    Input()
], PivotTableComponent.prototype, "rowTotals", null);
tslib_1.__decorate([
    Input()
], PivotTableComponent.prototype, "rowTotalsPosition", null);
tslib_1.__decorate([
    Input()
], PivotTableComponent.prototype, "selection", null);
tslib_1.__decorate([
    Input()
], PivotTableComponent.prototype, "selectionMode", null);
tslib_1.__decorate([
    Input()
], PivotTableComponent.prototype, "sortMode", null);
tslib_1.__decorate([
    Input()
], PivotTableComponent.prototype, "theme", null);
tslib_1.__decorate([
    Input()
], PivotTableComponent.prototype, "toolbar", null);
tslib_1.__decorate([
    Input()
], PivotTableComponent.prototype, "tooltip", null);
tslib_1.__decorate([
    Output()
], PivotTableComponent.prototype, "onCellClick", void 0);
tslib_1.__decorate([
    Output()
], PivotTableComponent.prototype, "onChange", void 0);
tslib_1.__decorate([
    Output()
], PivotTableComponent.prototype, "onColumnClick", void 0);
tslib_1.__decorate([
    Output()
], PivotTableComponent.prototype, "onCollapse", void 0);
tslib_1.__decorate([
    Output()
], PivotTableComponent.prototype, "onCollapseTotalColumn", void 0);
tslib_1.__decorate([
    Output()
], PivotTableComponent.prototype, "onExpand", void 0);
tslib_1.__decorate([
    Output()
], PivotTableComponent.prototype, "onExpandTotalColumn", void 0);
tslib_1.__decorate([
    Output()
], PivotTableComponent.prototype, "onFilter", void 0);
tslib_1.__decorate([
    Output()
], PivotTableComponent.prototype, "onSort", void 0);
PivotTableComponent = tslib_1.__decorate([
    Directive({
        selector: 'smart-pivot-table, [smart-pivot-table]'
    })
], PivotTableComponent);
export { PivotTableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQucGl2b3R0YWJsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NtYXJ0LXdlYmNvbXBvbmVudHMtYW5ndWxhci9waXZvdHRhYmxlLyIsInNvdXJjZXMiOlsic21hcnQucGl2b3R0YWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUosT0FBTyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVyRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFReEMsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBb0IsU0FBUSxXQUFXO0lBQ25ELFlBQVksR0FBMkI7UUFDdEMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBSUosa0JBQWEsR0FBVSxFQUFFLENBQUM7UUE4WGxDOzs7O1VBSUU7UUFDUSxnQkFBVyxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXRFOzs7VUFHRTtRQUNRLGFBQVEsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVuRTs7OztVQUlFO1FBQ1Esa0JBQWEsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV4RTs7O1VBR0U7UUFDUSxlQUFVLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFckU7OztVQUdFO1FBQ1EsMEJBQXFCLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFaEY7OztVQUdFO1FBQ1EsYUFBUSxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRW5FOzs7VUFHRTtRQUNRLHdCQUFtQixHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTlFOzs7O1VBSUU7UUFDUSxhQUFRLEdBQThCLElB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REMsS0FBSyxFQUFFO3VEQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7eURBR1A7QUFPRDtJQURDLEtBQUssRUFBRTtpREFHUDtBQU9EO0lBREMsS0FBSyxFQUFFO3NEQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7a0RBR1A7QUFPRDtJQURDLEtBQUssRUFBRTtxREFHUDtBQU9EO0lBREMsS0FBSyxFQUFFO29EQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7NERBR1A7QUFPRDtJQURDLEtBQUssRUFBRTtvREFHUDtBQU9EO0lBREMsS0FBSyxFQUFFO3dEQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7bURBR1A7QUFPRDtJQURDLEtBQUssRUFBRTtnREFHUDtBQU9EO0lBREMsS0FBSyxFQUFFO2tEQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7a0RBR1A7QUFVUztJQUFULE1BQU0sRUFBRTt3REFBNkQ7QUFNNUQ7SUFBVCxNQUFNLEVBQUU7cURBQTBEO0FBT3pEO0lBQVQsTUFBTSxFQUFFOzBEQUErRDtBQU05RDtJQUFULE1BQU0sRUFBRTt1REFBNEQ7QUFNM0Q7SUFBVCxNQUFNLEVBQUU7a0VBQXVFO0FBTXRFO0lBQVQsTUFBTSxFQUFFO3FEQUEwRDtBQU16RDtJQUFULE1BQU0sRUFBRTtnRUFBcUU7QUFPcEU7SUFBVCxNQUFNLEVBQUU7cURBQTBEO0FBTXpEO0lBQVQsTUFBTSxFQUFFO21EQUF3RDtBQTNickQsbUJBQW1CO0lBSi9CLFNBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSx3Q0FBd0M7S0FDbEQsQ0FBQztHQUVXLG1CQUFtQixDQSt4Qi9CO1NBL3hCWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXZvdFRhYmxlIH0gZnJvbSAnLi8uLi9pbmRleCc7XG5pbXBvcnQgeyBBbmltYXRpb24sIFBpdm90VGFibGVDb2x1bW5BbGlnbiwgUGl2b3RUYWJsZUNvbHVtbkRhdGFUeXBlLCBQaXZvdFRhYmxlQ29sdW1uU3VtbWFyeSwgUGl2b3RUYWJsZUNvbHVtblRvdGFsc1Bvc2l0aW9uLCBQaXZvdFRhYmxlQ29uZGl0aW9uYWxGb3JtYXR0aW5nQ29uZGl0aW9uLCBQaXZvdFRhYmxlQ29uZGl0aW9uYWxGb3JtYXR0aW5nRm9udEZhbWlseSwgUGl2b3RUYWJsZUNvbmRpdGlvbmFsRm9ybWF0dGluZ0ZvbnRTaXplLCBQaXZvdFRhYmxlRGVzaWduZXJQb3NpdGlvbiwgUGl2b3RUYWJsZURyaWxsRG93bkRhdGFFeHBvcnQsIFBpdm90VGFibGVHcm91cExheW91dCwgUGl2b3RUYWJsZVJvd1RvdGFsc1Bvc2l0aW9uLCBQaXZvdFRhYmxlU2VsZWN0aW9uTW9kZSwgUGl2b3RUYWJsZVNvcnRNb2RlLCBQaXZvdFRhYmxlQ29sdW1uLCBQaXZvdFRhYmxlQ29uZGl0aW9uYWxGb3JtYXR0aW5nLCBFbGVtZW50UmVuZGVyTW9kZX0gZnJvbSAnLi8uLi9pbmRleCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIERpcmVjdGl2ZSwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIFNpbXBsZUNoYW5nZXMsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXNlRWxlbWVudCwgU21hcnQgfSBmcm9tICcuL3NtYXJ0LmVsZW1lbnQnO1xuZXhwb3J0IHsgQW5pbWF0aW9uLCBQaXZvdFRhYmxlQ29sdW1uQWxpZ24sIFBpdm90VGFibGVDb2x1bW5EYXRhVHlwZSwgUGl2b3RUYWJsZUNvbHVtblN1bW1hcnksIFBpdm90VGFibGVDb2x1bW5Ub3RhbHNQb3NpdGlvbiwgUGl2b3RUYWJsZUNvbmRpdGlvbmFsRm9ybWF0dGluZ0NvbmRpdGlvbiwgUGl2b3RUYWJsZUNvbmRpdGlvbmFsRm9ybWF0dGluZ0ZvbnRGYW1pbHksIFBpdm90VGFibGVDb25kaXRpb25hbEZvcm1hdHRpbmdGb250U2l6ZSwgUGl2b3RUYWJsZURlc2lnbmVyUG9zaXRpb24sIFBpdm90VGFibGVEcmlsbERvd25EYXRhRXhwb3J0LCBQaXZvdFRhYmxlR3JvdXBMYXlvdXQsIFBpdm90VGFibGVSb3dUb3RhbHNQb3NpdGlvbiwgUGl2b3RUYWJsZVNlbGVjdGlvbk1vZGUsIFBpdm90VGFibGVTb3J0TW9kZSwgUGl2b3RUYWJsZUNvbHVtbiwgUGl2b3RUYWJsZUNvbmRpdGlvbmFsRm9ybWF0dGluZywgRWxlbWVudFJlbmRlck1vZGV9IGZyb20gJy4vLi4vaW5kZXgnO1xuZXhwb3J0IHsgU21hcnQgfSBmcm9tICcuL3NtYXJ0LmVsZW1lbnQnO1xuZXhwb3J0IHsgUGl2b3RUYWJsZSB9IGZyb20gJy4vLi4vaW5kZXgnO1xuXG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ3NtYXJ0LXBpdm90LXRhYmxlLCBbc21hcnQtcGl2b3QtdGFibGVdJ1xufSlcblxuZXhwb3J0IGNsYXNzIFBpdm90VGFibGVDb21wb25lbnQgZXh0ZW5kcyBCYXNlRWxlbWVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuXHRjb25zdHJ1Y3RvcihyZWY6IEVsZW1lbnRSZWY8UGl2b3RUYWJsZT4pIHtcblx0XHRzdXBlcihyZWYpO1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA9IHJlZi5uYXRpdmVFbGVtZW50IGFzIFBpdm90VGFibGU7XG5cdH1cblxuXHRwcml2YXRlIGV2ZW50SGFuZGxlcnM6IGFueVtdID0gW107XG5cblx0cHVibGljIG5hdGl2ZUVsZW1lbnQ6IFBpdm90VGFibGU7XG5cdC8qKiBAZGVzY3JpcHRpb24gQ3JlYXRlcyB0aGUgY29tcG9uZW50IG9uIGRlbWFuZC5cblx0ICogQHBhcmFtIHByb3BlcnRpZXMgQW4gb3B0aW9uYWwgb2JqZWN0IG9mIHByb3BlcnRpZXMsIHdoaWNoIHdpbGwgYmUgYWRkZWQgdG8gdGhlIHRlbXBsYXRlIGJpbmRlZCBvbmVzLlxuXHQgKi9cblx0cHVibGljIGNyZWF0ZUNvbXBvbmVudChwcm9wZXJ0aWVzID0ge30pOiBhbnkge1xuICAgIFx0dGhpcy5uYXRpdmVFbGVtZW50ID0gPFBpdm90VGFibGU+ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc21hcnQtcGl2b3QtdGFibGUnKTtcblx0XHRmb3IgKGxldCBwcm9wZXJ0eU5hbWUgaW4gcHJvcGVydGllcykgeyBcbiBcdFx0XHR0aGlzLm5hdGl2ZUVsZW1lbnRbcHJvcGVydHlOYW1lXSA9IHByb3BlcnRpZXNbcHJvcGVydHlOYW1lXTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudDtcblx0fVxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgYW5pbWF0aW9uIG1vZGUuIEFuaW1hdGlvbiBpcyBkaXNhYmxlZCB3aGVuIHRoZSBwcm9wZXJ0eSBpcyBzZXQgdG8gJ25vbmUnICovXG5cdEBJbnB1dCgpXG5cdGdldCBhbmltYXRpb24oKTogQW5pbWF0aW9uIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmFuaW1hdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYW5pbWF0aW9uKHZhbHVlOiBBbmltYXRpb24pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYW5pbWF0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB3aGV0aGVyIHRoZSByZW9yZGVyaW5nIG9mIGNvbHVtbnMgaXMgZW5hYmxlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IGNvbHVtblJlb3JkZXIoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb2x1bW5SZW9yZGVyIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjb2x1bW5SZW9yZGVyKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbHVtblJlb3JkZXIgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGVzY3JpYmVzIHRoZSBjb2x1bW5zIG9mIHRoZSBQaXZvdFRhYmxlJ3Mgb3JpZ2luYWwgdGFidWxhciBkYXRhLiBCYXNlZCBvbiB0aGVzZSBzZXR0aW5ncyBhbmQgdGhlIGRhdGEgc291cmNlLCB0aGUgYWN0dWFsIGNvbHVtbnMgb2YgdGhlIFBpdm90VGFibGUgYXJlIGR5bmFtaWNhbGx5IGdlbmVyYXRlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IGNvbHVtbnMoKTogUGl2b3RUYWJsZUNvbHVtbltdIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbHVtbnMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGNvbHVtbnModmFsdWU6IFBpdm90VGFibGVDb2x1bW5bXSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb2x1bW5zID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB3aGV0aGVyIHRvIHNob3cgdG90YWwgY29sdW1ucyBmb3IgZWFjaCBwaXZvdCBkYXRhIHBvaW50LiBXaGVuIGVuYWJsZWQsIGFsbCBzdW1tYXJ5IGNvbHVtbnMgbXVzdCBoYXZlIHRoZSBzYW1lIHN1bW1hcnkgZnVuY3Rpb24gc2V0IGJ5IHdoaWNoIHRvdGFsIGNvbHVtbnMgYXJlIGNhbGN1bGF0ZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBjb2x1bW5Ub3RhbHMoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb2x1bW5Ub3RhbHMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGNvbHVtblRvdGFscyh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb2x1bW5Ub3RhbHMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSBwb3NpdGlvbiBvZiB0b3RhbCBjb2x1bW5zIChzaG93biB3aGVuIGNvbHVtblRvdGFscyBpcyBlbmFibGVkKS4gKi9cblx0QElucHV0KClcblx0Z2V0IGNvbHVtblRvdGFsc1Bvc2l0aW9uKCk6IFBpdm90VGFibGVDb2x1bW5Ub3RhbHNQb3NpdGlvbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb2x1bW5Ub3RhbHNQb3NpdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgY29sdW1uVG90YWxzUG9zaXRpb24odmFsdWU6IFBpdm90VGFibGVDb2x1bW5Ub3RhbHNQb3NpdGlvbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb2x1bW5Ub3RhbHNQb3NpdGlvbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgZGV0YWlscyBhYm91dCBjb25kaXRpb25hbCBmb3JtYXR0aW5nIHRvIGJlIGFwcGxpZWQgdG8gdGhlIFBpdm90VGFibGUncyBjZWxscy4gKi9cblx0QElucHV0KClcblx0Z2V0IGNvbmRpdGlvbmFsRm9ybWF0dGluZygpOiBQaXZvdFRhYmxlQ29uZGl0aW9uYWxGb3JtYXR0aW5nW10ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29uZGl0aW9uYWxGb3JtYXR0aW5nIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjb25kaXRpb25hbEZvcm1hdHRpbmcodmFsdWU6IFBpdm90VGFibGVDb25kaXRpb25hbEZvcm1hdHRpbmdbXSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb25kaXRpb25hbEZvcm1hdHRpbmcgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgb3JpZ2luYWwgdGFidWxhciBkYXRhIHNvdXJjZSBvZiB0aGUgUGl2b3RUYWJsZS4gKi9cblx0QElucHV0KClcblx0Z2V0IGRhdGFTb3VyY2UoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRhdGFTb3VyY2UgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRhdGFTb3VyY2UodmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kYXRhU291cmNlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB3aGV0aGVyIHRoZSBvcmlnaW5hbCB0YWJ1bGFyIGRhdGEgc291cnNlIG9mIHRoZSBQaXZvdFRhYmxlIHdpbGwgYmUgcHJlLXNvcnRlZCBiYXNlZCBvbiBjb2x1bW5zIHdpdGggdGhlIHJvd0dyb3VwIHByb3BlcnR5IChhbmQgdGhlaXIgb3JkZXIpLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGVmYXVsdFNvcnRCeVJvd0dyb3VwcygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRlZmF1bHRTb3J0QnlSb3dHcm91cHMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRlZmF1bHRTb3J0QnlSb3dHcm91cHModmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGVmYXVsdFNvcnRCeVJvd0dyb3VwcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgd2hldGhlciB0byBkaXNwbGF5IHRoZSBQaXZvdFRhYmxlJ3MgZGVzaWduZXIgYWxvbmdzaWRlIHRoZSB0YWJsZSBpdHNlbGYuIFRoZSBkZXNpZ25lciBhbGxvd3MgZm9yIGNvbmZpZ3VyaW5nIGNvbHVtbiBzZXR0aW5ncyBhbmQgYXBwbHlpbmcgZmlsdGVyaW5nLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGVzaWduZXIoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kZXNpZ25lciA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGVzaWduZXIodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGVzaWduZXIgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSBwb3NpdGlvbiBvZiB0aGUgUGl2b3RUYWJsZSdzIGRlc2lnbmVyIChzaG93biB3aGVuIGRlc2lnbmVyIGlzIGVuYWJsZWQpLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGVzaWduZXJQb3NpdGlvbigpOiBQaXZvdFRhYmxlRGVzaWduZXJQb3NpdGlvbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kZXNpZ25lclBvc2l0aW9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkZXNpZ25lclBvc2l0aW9uKHZhbHVlOiBQaXZvdFRhYmxlRGVzaWduZXJQb3NpdGlvbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kZXNpZ25lclBvc2l0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERpc2FibGVzIHRoZSBpbnRlcmFjdGlvbiB3aXRoIHRoZSBlbGVtZW50LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlZCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZWQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSWYgZW5hYmxlZCwgc2hvd3MgdGhlIG9yaWdpbmFsIHRhYnVsYXIgZGF0YSB0aGF0IGhhcyBiZWVuIGFnZ3JlZ2F0ZWQgaW4gYSBQaXZvdFRhYmxlIHN1bW1hcnkgY2VsbCB3aGVuIHRoZSBjZWxsIGlzIGRvdWJsZS1jbGlja2VkIG9yIEYyIGlzIHByZXNzZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkcmlsbERvd24oKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kcmlsbERvd24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRyaWxsRG93bih2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kcmlsbERvd24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSWYgc2V0LCBzaG93cyBhbiBleHBvcnQgYnV0dG9uIGluIHRoZSBkcmlsbCBkb3duIGRpYWxvZy4gKi9cblx0QElucHV0KClcblx0Z2V0IGRyaWxsRG93bkRhdGFFeHBvcnQoKTogUGl2b3RUYWJsZURyaWxsRG93bkRhdGFFeHBvcnQge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZHJpbGxEb3duRGF0YUV4cG9ydCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZHJpbGxEb3duRGF0YUV4cG9ydCh2YWx1ZTogUGl2b3RUYWJsZURyaWxsRG93bkRhdGFFeHBvcnQpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZHJpbGxEb3duRGF0YUV4cG9ydCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIGRyaWxsIGRvd24gdGFibGUgZXhwb3J0IGZpbGUgbmFtZS4gKi9cblx0QElucHV0KClcblx0Z2V0IGRyaWxsRG93bkRhdGFFeHBvcnROYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kcmlsbERvd25EYXRhRXhwb3J0TmFtZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZHJpbGxEb3duRGF0YUV4cG9ydE5hbWUodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kcmlsbERvd25EYXRhRXhwb3J0TmFtZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgd2hldGhlciBzb3J0aW5nIGJhc2VkIG9uIGNvbHVtbnMgaW4gY2xhc3NpYyByb3cgZ3JvdXBzIGxheW91dCBtb2RlIGlzIGVuYWJsZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkcmlsbERvd25UYWJsZUluaXQoKTogeyAodGFibGU6IEhUTUxFbGVtZW50ICk6IHZvaWQgfSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kcmlsbERvd25UYWJsZUluaXQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRyaWxsRG93blRhYmxlSW5pdCh2YWx1ZTogeyAodGFibGU6IEhUTUxFbGVtZW50ICk6IHZvaWQgfSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kcmlsbERvd25UYWJsZUluaXQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHdoZXRoZXIgdGhlIFBpdm90VGFibGUncyBjb2x1bW4gaGVhZGVyIGlzIHN0aWNreS9mcm96ZW4uICovXG5cdEBJbnB1dCgpXG5cdGdldCBkcmlsbERvd25DdXN0b21BY3Rpb24oKTogeyAob3JpZ2luYWxSZWNvcmRzOiBbXSApOiB2b2lkIH0ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZHJpbGxEb3duQ3VzdG9tQWN0aW9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkcmlsbERvd25DdXN0b21BY3Rpb24odmFsdWU6IHsgKG9yaWdpbmFsUmVjb3JkczogW10gKTogdm9pZCB9KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRyaWxsRG93bkN1c3RvbUFjdGlvbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgd2hldGhlciB0byBzaG93IGEgR3JhbmQgdG90YWwgcm93IGFnZ3JlZ2F0aW5nIHRoZSBkYXRhIG9mIGFsbCByb3dzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZW5hYmxlU29ydEJ5Um93R3JvdXBzKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZW5hYmxlU29ydEJ5Um93R3JvdXBzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBlbmFibGVTb3J0QnlSb3dHcm91cHModmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZW5hYmxlU29ydEJ5Um93R3JvdXBzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgd2F5IHJvdyBuZXN0aW5nIChiYXNlZCBvbiByb3dHcm91cCBjb2x1bW5zKSBpcyBkaXNwbGF5ZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBmcmVlemVIZWFkZXIoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5mcmVlemVIZWFkZXIgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGZyZWV6ZUhlYWRlcih2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5mcmVlemVIZWFkZXIgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHdoZXRoZXIgdG8gaGlkZSB0aGUgdG9vbHRpcCB0aGF0IGRpc3BsYXlzIGRldGFpbHMgd2hlbiBtdWx0aXBsZSBzdW1tYXJ5IGNlbGxzIHdpdGggbm9uLW51bGwgdmFsdWVzIGFyZSBzZWxlY3RlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IGdldERlZmF1bHRTdW1tYXJ5RnVuY3Rpb24oKTogeyAoY29sdW1uOiBQaXZvdFRhYmxlQ29sdW1uKTogc3RyaW5nIH0ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0RGVmYXVsdFN1bW1hcnlGdW5jdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZ2V0RGVmYXVsdFN1bW1hcnlGdW5jdGlvbih2YWx1ZTogeyAoY29sdW1uOiBQaXZvdFRhYmxlQ29sdW1uKTogc3RyaW5nIH0pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0RGVmYXVsdFN1bW1hcnlGdW5jdGlvbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgd2hldGhlciB0byBoaWRlIHJvd3MgdGhhdCBjb250YWluIG9ubHkgMCBvciBudWxsIHZhbHVlcy4gQXBwbGljYWJsZSBvbmx5IHdoZW4gdGhlcmUgYXJlIHJvd0dyb3VwIGNvbHVtbnMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBncmFuZFRvdGFsKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZ3JhbmRUb3RhbCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZ3JhbmRUb3RhbCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ncmFuZFRvdGFsID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB3aGV0aGVyIG5hdmlnYXRpb24gd2l0aCB0aGUga2V5Ym9hcmQgaXMgZW5hYmxlZCBpbiB0aGUgUGl2b3RUYWJsZS4gKi9cblx0QElucHV0KClcblx0Z2V0IGdyb3VwTGF5b3V0KCk6IFBpdm90VGFibGVHcm91cExheW91dCB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ncm91cExheW91dCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZ3JvdXBMYXlvdXQodmFsdWU6IFBpdm90VGFibGVHcm91cExheW91dCkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ncm91cExheW91dCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIGxhbmd1YWdlLiBVc2VkIGluIGNvbmp1bmN0aW9uIHdpdGggdGhlIHByb3BlcnR5IG1lc3NhZ2VzLiAgKi9cblx0QElucHV0KClcblx0Z2V0IGhpZGVDZWxsU2VsZWN0aW9uVG9vbHRpcCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmhpZGVDZWxsU2VsZWN0aW9uVG9vbHRpcCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgaGlkZUNlbGxTZWxlY3Rpb25Ub29sdGlwKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmhpZGVDZWxsU2VsZWN0aW9uVG9vbHRpcCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgYW4gb2JqZWN0IHNwZWNpZnlpbmcgc3RyaW5ncyB1c2VkIGluIHRoZSBlbGVtZW50IHRoYXQgY2FuIGJlIGxvY2FsaXplZC4gVXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZSBwcm9wZXJ0eSBsb2NhbGUuICAqL1xuXHRASW5wdXQoKVxuXHRnZXQgaGlkZUVtcHR5Um93cygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmhpZGVFbXB0eVJvd3MgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGhpZGVFbXB0eVJvd3ModmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGlkZUVtcHR5Um93cyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgd2hhdCB2YWx1ZSBpcyBzaG93biBpbiBjZWxscyB0aGF0IGRvIG5vdCBoYXZlIGFnZ3JlZ2F0ZWQgZGF0YSB0byBkaXNwbGF5LiBCeSBkZWZhdWx0IChudWxsKSwgc3VjaCBjZWxscyBhcmUgZW1wdHkuICovXG5cdEBJbnB1dCgpXG5cdGdldCBrZXlib2FyZE5hdmlnYXRpb24oKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5rZXlib2FyZE5hdmlnYXRpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGtleWJvYXJkTmF2aWdhdGlvbih2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5rZXlib2FyZE5hdmlnYXRpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSB2YWx1ZSBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGVsZW1lbnQgaXMgYWxpZ25lZCB0byBzdXBwb3J0IGxvY2FsZXMgdXNpbmcgcmlnaHQtdG8tbGVmdCBmb250cy4gKi9cblx0QElucHV0KClcblx0Z2V0IGxvY2FsZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubG9jYWxlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBsb2NhbGUodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sb2NhbGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHdoZXRoZXIgc29ydGluZyBieSByb3cgKHdoZW4gYSByb3cgZ3JvdXAgY2VsbCBpcyBjbGlja2VkKSBpcyBlbmFibGVkLiBXaGVuIGNvbHVtblRvdGFscyBpcyBhbHNvIGVuYWJsZWQsIHNvcnRpbmcgaXMgYXBwbGllZCBwZXIgXCJjb2x1bW4gZ3JvdXBcIjsgb3RoZXJ3aXNlIC0gZm9yIGFsbCBjb2x1bW5zLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbWVzc2FnZXMoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm1lc3NhZ2VzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBtZXNzYWdlcyh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm1lc3NhZ2VzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB3aGV0aGVyIHJvdyBzdW1tYXJpZXMgYXJlIGRpc3BsYXllZCBpbiB0aGUgcm93IGhlYWRlcnMuIEV4YW1wbGU6IFBldGVyc29uKDQwKSB2cyBQZXRlcnNvbiwgd2hlbiByb3dTdW1tYXJ5IGlzIHNldCB0byBmYWxzZS4gKi9cblx0QElucHV0KClcblx0Z2V0IG51bGxEZWZhdWx0VmFsdWUoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm51bGxEZWZhdWx0VmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG51bGxEZWZhdWx0VmFsdWUodmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5udWxsRGVmYXVsdFZhbHVlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB3aGV0aGVyIHRvIHNob3cgcm93IHRvdGFsIGNvbHVtbnMgZm9yIGVhY2ggc3VtbWFyeSBjb2x1bW4uICovXG5cdEBJbnB1dCgpXG5cdGdldCBvbkNlbGxSZW5kZXIoKTogeyAoZGF0YTogYW55LCBkeW5hbWljQ29sdW1uOiBhbnksIHZhbHVlOiBhbnksIGNlbGw6IEhUTUxUYWJsZUNlbGxFbGVtZW50KTogdm9pZCB9IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uQ2VsbFJlbmRlciA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgb25DZWxsUmVuZGVyKHZhbHVlOiB7IChkYXRhOiBhbnksIGR5bmFtaWNDb2x1bW46IGFueSwgdmFsdWU6IGFueSwgY2VsbDogSFRNTFRhYmxlQ2VsbEVsZW1lbnQpOiB2b2lkIH0pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25DZWxsUmVuZGVyID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgcG9zaXRpb24gb2Ygcm93IHRvdGFsIGNvbHVtbnMgKHNob3duIHdoZW4gcm93VG90YWxzIGlzIGVuYWJsZWQpLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgb25Db2x1bW5SZW5kZXIoKTogeyAoc2V0dGluZ3M6IHsgdGV4dDogc3RyaW5nLCBjZWxsOiBIVE1MVGFibGVDZWxsRWxlbWVudCwgY29sdW1uOiBQaXZvdFRhYmxlQ29sdW1uLCBmdWxsRGVmaW5pdGlvbjogYW55IH0pOiB2b2lkIH0ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25Db2x1bW5SZW5kZXIgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG9uQ29sdW1uUmVuZGVyKHZhbHVlOiB7IChzZXR0aW5nczogeyB0ZXh0OiBzdHJpbmcsIGNlbGw6IEhUTUxUYWJsZUNlbGxFbGVtZW50LCBjb2x1bW46IFBpdm90VGFibGVDb2x1bW4sIGZ1bGxEZWZpbml0aW9uOiBhbnkgfSk6IHZvaWQgfSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vbkNvbHVtblJlbmRlciA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgd2hldGhlciByb3cgc2VsZWN0aW9uICh2aWEgY2hlY2tib3hlcykgaXMgZW5hYmxlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IG9uSW5pdCgpOiB7ICgpOiB2b2lkIH0ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25Jbml0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBvbkluaXQodmFsdWU6IHsgKCk6IHZvaWQgfSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vbkluaXQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSBzZWxlY3Rpb24gbW9kZS4gT25seSBhcHBsaWNhYmxlIHdoZW4gc2VsZWN0aW9uIGlzIGVuYWJsZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCByaWdodFRvTGVmdCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJpZ2h0VG9MZWZ0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCByaWdodFRvTGVmdCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yaWdodFRvTGVmdCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBzb3J0aW5nIG1vZGUgb2YgdGhlIFBpdm90VGFibGUuICovXG5cdEBJbnB1dCgpXG5cdGdldCByb3dTb3J0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucm93U29ydCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcm93U29ydCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yb3dTb3J0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIHRoZW1lLiBUaGVtZSBkZWZpbmVzIHRoZSBsb29rIG9mIHRoZSBlbGVtZW50ICovXG5cdEBJbnB1dCgpXG5cdGdldCByb3dTdW1tYXJ5KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucm93U3VtbWFyeSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcm93U3VtbWFyeSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yb3dTdW1tYXJ5ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB3aGV0aGVyIHRoZSBQaXZvdFRhYmxlJ3MgdG9vbGJhciBpcyBzaG93bi4gSXQgY29udGFpbnMgdHdvIGJyZWFkY3J1bWIgY29tcG9uZW50cyB0aGF0IGFsbG93IHRoZSBtb2RpZmljYXRpb24gb2YgdGhlIHJvdyBncm91cCBhbmQgcGl2b3QgY29sdW1ucywgYXMgd2VsbCBhcyB0aGUgXCJDb25kaXRpb25hbCBGb3JtYXR0aW5nXCIgYW5kIFwiRmllbGRzXCIgYnV0dG9ucyB0aGF0IG9wZW4gYSBkaWFsb2cgd2l0aCBhZGRpdGlvbmFsIHNldHRpbmdzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcm93VG90YWxzKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucm93VG90YWxzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCByb3dUb3RhbHModmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucm93VG90YWxzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB3aGV0aGVyIHdoZW4gaG92ZXJpbmcgYSBjZWxsIHdpdGggdHJ1bmNhdGVkIGNvbnRlbnQsIGEgdG9vbHRpcCB3aXRoIHRoZSBmdWxsIGNvbnRlbnQgd2lsbCBiZSBzaG93bi4gKi9cblx0QElucHV0KClcblx0Z2V0IHJvd1RvdGFsc1Bvc2l0aW9uKCk6IFBpdm90VGFibGVSb3dUb3RhbHNQb3NpdGlvbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yb3dUb3RhbHNQb3NpdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcm93VG90YWxzUG9zaXRpb24odmFsdWU6IFBpdm90VGFibGVSb3dUb3RhbHNQb3NpdGlvbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yb3dUb3RhbHNQb3NpdGlvbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiB1bmRlZmluZWQgKi9cblx0QElucHV0KClcblx0Z2V0IHNlbGVjdGlvbigpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc2VsZWN0aW9uKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdGlvbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiB1bmRlZmluZWQgKi9cblx0QElucHV0KClcblx0Z2V0IHNlbGVjdGlvbk1vZGUoKTogUGl2b3RUYWJsZVNlbGVjdGlvbk1vZGUge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uTW9kZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc2VsZWN0aW9uTW9kZSh2YWx1ZTogUGl2b3RUYWJsZVNlbGVjdGlvbk1vZGUpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uTW9kZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiB1bmRlZmluZWQgKi9cblx0QElucHV0KClcblx0Z2V0IHNvcnRNb2RlKCk6IFBpdm90VGFibGVTb3J0TW9kZSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zb3J0TW9kZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc29ydE1vZGUodmFsdWU6IFBpdm90VGFibGVTb3J0TW9kZSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zb3J0TW9kZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiB1bmRlZmluZWQgKi9cblx0QElucHV0KClcblx0Z2V0IHRoZW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50aGVtZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdGhlbWUodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50aGVtZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiB1bmRlZmluZWQgKi9cblx0QElucHV0KClcblx0Z2V0IHRvb2xiYXIoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50b29sYmFyIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0b29sYmFyKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRvb2xiYXIgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gdW5kZWZpbmVkICovXG5cdEBJbnB1dCgpXG5cdGdldCB0b29sdGlwKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudG9vbHRpcCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdG9vbHRpcCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50b29sdGlwID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSBjZWxsIGhhcyBiZWVuIGNsaWNrZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0ZGF0YUZpZWxkLCBcdHJvdylcblx0KiAgIGRhdGFGaWVsZCAtIFRoZSBkYXRhIGZpZWxkIG9mIHRoZSBjZWxsJ3MgZHluYW1pYyBjb2x1bW4uXG5cdCogICByb3cgLSBUaGUgZGF0YSBvZiB0aGUgY2VsbCdzIHJvdy5cblx0Ki9cblx0QE91dHB1dCgpIG9uQ2VsbENsaWNrOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgc2VsZWN0aW9uIGlzIGNoYW5nZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dHlwZSlcblx0KiAgIHR5cGUgLSBUaGUgdHlwZSBvZiBhY3Rpb24gdGhhdCBpbml0aWF0ZWQgdGhlIHNlbGVjdGlvbiBjaGFuZ2UuIFBvc3NpYmxlIHR5cGVzOiAncHJvZ3JhbW1hdGljJywgJ2ludGVyYWN0aW9uJywgJ3JlbW92ZScuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkNoYW5nZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSBzdW1tYXJ5IGNvbHVtbiBoZWFkZXIgY2VsbCBoYXMgYmVlbiBjbGlja2VkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGNvbHVtbkRlZmluaXRpb24sIFx0ZGF0YUZpZWxkKVxuXHQqICAgY29sdW1uRGVmaW5pdGlvbiAtIEFuIG9iamVjdCBkZXRhaWxpbmcgdGhlIGNsaWNrZWQgZHluYW1pYyBjb2x1bW4uXG5cdCogICBkYXRhRmllbGQgLSBUaGUgZGF0YSBmaWVsZCBvZiB0aGUgY2VsbCdzIG9yaWdpbmFsIGNvbHVtbi5cblx0Ki9cblx0QE91dHB1dCgpIG9uQ29sdW1uQ2xpY2s6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgcm93IGhhcyBiZWVuIGNvbGxhcHNlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRyZWNvcmQpXG5cdCogICByZWNvcmQgLSBUaGUgKGFnZ3JlZ2F0ZWQpIGRhdGEgb2YgdGhlIGNvbGxhcHNlZCByb3cuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkNvbGxhcHNlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIHRvdGFsIGNvbHVtbiBoYXMgYmVlbiBjb2xsYXBzZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0Y29sdW1uRGVmaW5pdGlvbilcblx0KiAgIGNvbHVtbkRlZmluaXRpb24gLSBUaGUgZGVmaW5pdGlvbiBvZiB0aGUgY29sbGFwc2VkIHRvdGFsIGNvbHVtbi5cblx0Ki9cblx0QE91dHB1dCgpIG9uQ29sbGFwc2VUb3RhbENvbHVtbjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSByb3cgaGFzIGJlZW4gZXhwYW5kZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0cmVjb3JkKVxuXHQqICAgcmVjb3JkIC0gVGhlIChhZ2dyZWdhdGVkKSBkYXRhIG9mIHRoZSBleHBhbmRlZCByb3cuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkV4cGFuZDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSB0b3RhbCBjb2x1bW4gaGFzIGJlZW4gZXhwYW5kZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0Y29sdW1uRGVmaW5pdGlvbilcblx0KiAgIGNvbHVtbkRlZmluaXRpb24gLSBUaGUgZGVmaW5pdGlvbiBvZiB0aGUgZXhwYW5kZWQgdG90YWwgY29sdW1uLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25FeHBhbmRUb3RhbENvbHVtbjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSBmaWx0ZXJpbmctcmVsYXRlZCBhY3Rpb24gaXMgbWFkZS5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRhY3Rpb24sIFx0ZmlsdGVycylcblx0KiAgIGFjdGlvbiAtIFRoZSBmaWx0ZXJpbmcgYWN0aW9uLiBQb3NzaWJsZSBhY3Rpb25zOiAnYWRkJywgJ3JlbW92ZScuXG5cdCogICBmaWx0ZXJzIC0gVGhlIGFkZGVkIGZpbHRlcnMuIE9ubHkgd2hlbiBhY3Rpb24gaXMgJ2FkZCcuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkZpbHRlcjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSBjb2x1bW4gaGVhZGVyIGNlbGwgaGFzIGJlZW4gY2xpY2tlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRjb2x1bW5zKVxuXHQqICAgY29sdW1ucyAtIEFuIGFycmF5IHdpdGggaW5mb3JtYXRpb24gYWJvdXQgdGhlIGR5bmFtaWMgY29sdW1ucyB0aGUgUGl2b3RUYWJsZSBoYXMgYmVlbiBzb3J0ZWQgYnkuXG5cdCovXG5cdEBPdXRwdXQoKSBvblNvcnQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBZGRzIGEgZmlsdGVyIHRvIGEgc3BlY2lmaWMgY29sdW1uLiBcblx0KiBAcGFyYW0ge3N0cmluZ30gZGF0YUZpZWxkLiBUaGUgY29sdW1uJ3MgZGF0YSBmaWVsZC5cblx0KiBAcGFyYW0ge2FueX0gZmlsdGVyLiBGaWx0ZXJHcm91cCBvYmplY3QuXG5cdCovXG4gICAgcHVibGljIGFkZEZpbHRlcihkYXRhRmllbGQ6IHN0cmluZywgZmlsdGVyOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYWRkRmlsdGVyKGRhdGFGaWVsZCwgZmlsdGVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5hZGRGaWx0ZXIoZGF0YUZpZWxkLCBmaWx0ZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDbGVhcnMgYXBwbGllZCBmaWx0ZXJzLiBcblx0Ki9cbiAgICBwdWJsaWMgY2xlYXJGaWx0ZXJzKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbGVhckZpbHRlcnMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbGVhckZpbHRlcnMoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ2xlYXJzIHNlbGVjdGlvbi4gXG5cdCovXG4gICAgcHVibGljIGNsZWFyU2VsZWN0aW9uKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbGVhclNlbGVjdGlvbigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIENsZWFycyB0aGUgUGl2b3RUYWJsZSBzb3J0aW5nLiBcblx0Ki9cbiAgICBwdWJsaWMgY2xlYXJTb3J0KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbGVhclNvcnQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbGVhclNvcnQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ29sbGFwc2VzIGFsbCByb3dzICh3aGVuIG11bHRpcGxlIHJvdyBncm91cHMgYXJlIGFwcGxpZWQpLiBcblx0Ki9cbiAgICBwdWJsaWMgY29sbGFwc2VBbGxSb3dzKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jb2xsYXBzZUFsbFJvd3MoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jb2xsYXBzZUFsbFJvd3MoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ29sbGFwc2VzIGEgcm93ICh3aGVuIG11bHRpcGxlIHJvdyBncm91cHMgYXJlIGFwcGxpZWQpLiBcblx0KiBAcGFyYW0ge3N0cmluZyB8IG51bWJlcn0gcm93SWQuIFRoZSBpZCBvZiB0aGUgcm93IHRvIGNvbGxhcHNlLiBDYW4gYmUgcmV0cmlldmVkIGZyb20gdGhlIDxzdHJvbmc+cm93czwvc3Ryb25nPiBjb2xsZWN0aW9uLlxuXHQqL1xuICAgIHB1YmxpYyBjb2xsYXBzZVJvdyhyb3dJZDogc3RyaW5nIHwgbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNvbGxhcHNlUm93KHJvd0lkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jb2xsYXBzZVJvdyhyb3dJZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEV4cGFuZHMgYWxsIHJvd3MgKHdoZW4gbXVsdGlwbGUgcm93IGdyb3VwcyBhcmUgYXBwbGllZCkuIFxuXHQqL1xuICAgIHB1YmxpYyBleHBhbmRBbGxSb3dzKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5leHBhbmRBbGxSb3dzKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZXhwYW5kQWxsUm93cygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFeHBhbmRzIGEgcm93ICh3aGVuIG11bHRpcGxlIHJvdyBncm91cHMgYXJlIGFwcGxpZWQpLiBcblx0KiBAcGFyYW0ge3N0cmluZyB8IG51bWJlcn0gcm93SWQuIFRoZSBpZCBvZiB0aGUgcm93IHRvIGV4cGFuZC4gQ2FuIGJlIHJldHJpZXZlZCBmcm9tIHRoZSA8c3Ryb25nPnJvd3M8L3N0cm9uZz4gY29sbGVjdGlvbi5cblx0Ki9cbiAgICBwdWJsaWMgZXhwYW5kUm93KHJvd0lkOiBzdHJpbmcgfCBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZXhwYW5kUm93KHJvd0lkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5leHBhbmRSb3cocm93SWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFeHBvcnRzIHRoZSBQaXZvdFRhYmxlJ3MgZGF0YS4gXG5cdCogQHBhcmFtIHtzdHJpbmd9IGRhdGFGb3JtYXQuIFRoZSBmaWxlIGZvcm1hdCB0byBleHBvcnQgdG8uIFN1cHBvcnRlZCBmb3JtYXRzOiAnY3N2JywgJ2h0bWwnLCAnanNvbicsICdwZGYnLCAndHN2JywgJ3hsc3gnLCAneG1sJy5cblx0KiBAcGFyYW0ge3N0cmluZ30gZmlsZU5hbWU/LiBUaGUgbmFtZSBvZiB0aGUgZmlsZSB0byBleHBvcnQgdG9cblx0KiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjaz8uIEEgY2FsbGJhY2sgZnVuY3Rpb24gdG8gcGFzcyB0aGUgZXhwb3J0ZWQgZGF0YSB0byAoaWYgZmlsZU5hbWUgaXMgbm90IHByb3ZpZGVkKVxuXHQqIEByZXR1cm5zIHthbnl9XG4gICovXG5cdHB1YmxpYyBhc3luYyBleHBvcnREYXRhKGRhdGFGb3JtYXQsIGZpbGVOYW1lPywgY2FsbGJhY2s/KTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmV4cG9ydERhdGEoZGF0YUZvcm1hdCwgZmlsZU5hbWUsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJldHVybnMgdGhlIGN1cnJlbnQgZHluYW1pYyBwaXZvdCBjb2x1bW5zLiBcblx0KiBAcmV0dXJucyB7YW55fVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0RHluYW1pY0NvbHVtbnMoKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldER5bmFtaWNDb2x1bW5zKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIGFuIGFycmF5IG9mIHNlbGVjdGVkIHJvdyBpZHMgKHdoZW4gc2VsZWN0aW9uTW9kZSBpcyAnbWFueScgb3IgJ2V4dGVuZGVkJykgb3IgYW4gYXJyYXkgb2Ygc2VsZWN0ZWQgY2VsbCBkZXRhaWxzICh3aGVuIHNlbGVjdGlvbk1vZGUgaXMgJ2NlbGwnKS4gXG5cdCogQHJldHVybnMgeyhzdHJpbmcgfCBudW1iZXIpW10gfCB7IGRhdGFGaWVsZDogc3RyaW5nLCByb3dJZDogc3RyaW5nIHwgbnVtYmVyIH1bXX1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldFNlbGVjdGlvbigpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0U2VsZWN0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZWZyZXNoZXMgdGhlIFBpdm90VGFibGUuIFxuXHQqL1xuICAgIHB1YmxpYyByZWZyZXNoKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZWZyZXNoKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVmcmVzaCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZW1vdmVzIGZpbHRlcnMgYXBwbGllZCB0byBhIHNwZWNpZmljIGNvbHVtbi4gXG5cdCogQHBhcmFtIHtzdHJpbmd9IGRhdGFGaWVsZC4gVGhlIGNvbHVtbidzIGRhdGEgZmllbGQuXG5cdCovXG4gICAgcHVibGljIHJlbW92ZUZpbHRlcihkYXRhRmllbGQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVGaWx0ZXIoZGF0YUZpZWxkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVGaWx0ZXIoZGF0YUZpZWxkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2VsZWN0cyBvbmUgb3IgbW9yZSByb3dzICh3aGVuIHNlbGVjdGlvbk1vZGUgaXMgJ21hbnknIG9yICdleHRlbmRlZCcpIG9yIGEgc2luZ2xlIGNlbGwgKHdoZW4gc2VsZWN0aW9uTW9kZSBpcyAnY2VsbCcgYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgaXMgcGFzc2VkKS4gXG5cdCogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXIgfCAoc3RyaW5nIHwgbnVtYmVyKVtdfSByb3dJZC4gVGhlIGlkIG9mIHRoZSByb3cgKG9yIGFuIGFycmF5IG9mIHJvdyBpZHMpIHRvIHNlbGVjdCAob3Igb2YgdGhlIGNlbGwncyBwYXJlbnQgcm93IHdoZW4gPHN0cm9uZz5zZWxlY3Rpb25Nb2RlPC9zdHJvbmc+IGlzIDxlbT4nY2VsbCc8L2VtPikuIENhbiBiZSByZXRyaWV2ZWQgZnJvbSB0aGUgPHN0cm9uZz5yb3dzPC9zdHJvbmc+IGNvbGxlY3Rpb24uXG5cdCogQHBhcmFtIHtzdHJpbmd9IGRhdGFGaWVsZD8uIFRoZSBkYXRhRmllbGQgb2YgdGhlIGR5bmFtaWMgY29sdW1uIChjYW4gYmUgcmV0cmlldmVkIGJ5IGNhbGxpbmcgPHN0cm9uZz5nZXREeW5hbWljQ29sdW1uczwvc3Ryb25nPikgb2YgdGhlIGNlbGwgdG8gc2VsZWN0IChvbmx5IGFwcGxpY2FibGUgd2hlbiA8c3Ryb25nPnNlbGVjdGlvbk1vZGU8L3N0cm9uZz4gaXMgPGVtPidjZWxsJzwvZW0+KS5cblx0Ki9cbiAgICBwdWJsaWMgc2VsZWN0KHJvd0lkOiBzdHJpbmcgfCBudW1iZXIgfCAoc3RyaW5nIHwgbnVtYmVyKVtdLCBkYXRhRmllbGQ/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0KHJvd0lkLCBkYXRhRmllbGQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdChyb3dJZCwgZGF0YUZpZWxkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU29ydHMgYnkgYSBzdW1tYXJ5IG9yIGdyb3VwIGNvbHVtbi4gXG5cdCogQHBhcmFtIHthbnl9IGNvbHVtbkRlZmluaXRpb24uIFRoZSBkeW5hbWljIGNvbHVtbidzIGRlZmluaXRpb24uIENhbiBiZSByZXRyaWV2ZWQgZnJvbSB0aGUgbWV0aG9kIDxzdHJvbmc+Z2V0RHluYW1pY0NvbHVtbnM8L3N0cm9uZz4uXG5cdCogQHBhcmFtIHtzdHJpbmd9IHNvcnRPcmRlcj8uIFNvcnQgb3JkZXIuIFBvc3NpYmxlIHZhbHVlczogJ2FzYycgKGFzY2VuZGluZyksICdkZXNjJyAoZGVzY2VuZGluZyksIGFuZCBudWxsIChyZW1vdmVzIHNvcnRpbmcgYnkgY29sdW1uKS4gSWYgbm90IHByb3ZpZGVkLCB0b2dnbGVzIHRoZSBzb3J0aW5nLlxuXHQqL1xuICAgIHB1YmxpYyBzb3J0QnkoY29sdW1uRGVmaW5pdGlvbjogYW55LCBzb3J0T3JkZXI/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc29ydEJ5KGNvbHVtbkRlZmluaXRpb24sIHNvcnRPcmRlcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc29ydEJ5KGNvbHVtbkRlZmluaXRpb24sIHNvcnRPcmRlcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFVuc2VsZWN0cyBvbmUgb3IgbW9yZSByb3dzICh3aGVuIHNlbGVjdGlvbk1vZGUgaXMgJ21hbnknIG9yICdleHRlbmRlZCcpIG9yIGEgc2luZ2xlIGNlbGwgKHdoZW4gc2VsZWN0aW9uTW9kZSBpcyAnY2VsbCcgYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgaXMgcGFzc2VkKS4gXG5cdCogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXIgfCAoc3RyaW5nIHwgbnVtYmVyKVtdfSByb3dJZC4gVGhlIGlkIG9mIHRoZSByb3cgKG9yIGFuIGFycmF5IG9mIHJvdyBpZHMpIHRvIHNlbGVjdCAob3Igb2YgdGhlIGNlbGwncyBwYXJlbnQgcm93IHdoZW4gPHN0cm9uZz5zZWxlY3Rpb25Nb2RlPC9zdHJvbmc+IGlzIDxlbT4nY2VsbCc8L2VtPikuIENhbiBiZSByZXRyaWV2ZWQgZnJvbSB0aGUgPHN0cm9uZz5yb3dzPC9zdHJvbmc+IGNvbGxlY3Rpb24uXG5cdCogQHBhcmFtIHtzdHJpbmd9IGRhdGFGaWVsZD8uIFRoZSBkYXRhRmllbGQgb2YgdGhlIGR5bmFtaWMgY29sdW1uIChjYW4gYmUgcmV0cmlldmVkIGJ5IGNhbGxpbmcgPHN0cm9uZz5nZXREeW5hbWljQ29sdW1uczwvc3Ryb25nPikgb2YgdGhlIGNlbGwgdG8gc2VsZWN0IChvbmx5IGFwcGxpY2FibGUgd2hlbiA8c3Ryb25nPnNlbGVjdGlvbk1vZGU8L3N0cm9uZz4gaXMgPGVtPidjZWxsJzwvZW0+KS5cblx0Ki9cbiAgICBwdWJsaWMgdW5zZWxlY3Qocm93SWQ6IHN0cmluZyB8IG51bWJlciB8IChzdHJpbmcgfCBudW1iZXIpW10sIGRhdGFGaWVsZD86IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC51bnNlbGVjdChyb3dJZCwgZGF0YUZpZWxkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC51bnNlbGVjdChyb3dJZCwgZGF0YUZpZWxkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cblx0Z2V0IGlzUmVuZGVyZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkIDogZmFsc2U7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0fVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cbiAgICAgIHRoYXQub25DcmVhdGUuZW1pdCh0aGF0Lm5hdGl2ZUVsZW1lbnQpO1xuXG5cdFx0U21hcnQuUmVuZGVyKCk7XG5cblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc21hcnQtYW5ndWxhcicpO1xuXG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7IHRoYXQub25SZWFkeS5lbWl0KHRoYXQubmF0aXZlRWxlbWVudCk7IH0pO1xuXHRcdHRoaXMubGlzdGVuKCk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLnVubGlzdGVuKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdFx0aWYgKHRoaXMubmF0aXZlRWxlbWVudCAmJiB0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuXHRcdFx0Zm9yIChjb25zdCBwcm9wTmFtZSBpbiBjaGFuZ2VzKSB7XG5cdFx0XHRcdGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuXHRcdFx0XHRcdHRoaXMubmF0aXZlRWxlbWVudFtwcm9wTmFtZV0gPSBjaGFuZ2VzW3Byb3BOYW1lXS5jdXJyZW50VmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEFkZCBldmVudCBsaXN0ZW5lcnMuICovXG5cdHByaXZhdGUgbGlzdGVuKCk6IHZvaWQge1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2NlbGxDbGlja0hhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNlbGxDbGljay5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjZWxsQ2xpY2snLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NlbGxDbGlja0hhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5nZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNoYW5nZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5nZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtbkNsaWNrSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ29sdW1uQ2xpY2suZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29sdW1uQ2xpY2snLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtbkNsaWNrSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY29sbGFwc2VIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Db2xsYXBzZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjb2xsYXBzZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29sbGFwc2VIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjb2xsYXBzZVRvdGFsQ29sdW1uSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ29sbGFwc2VUb3RhbENvbHVtbi5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjb2xsYXBzZVRvdGFsQ29sdW1uJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb2xsYXBzZVRvdGFsQ29sdW1uSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snZXhwYW5kSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uRXhwYW5kLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2V4cGFuZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snZXhwYW5kSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snZXhwYW5kVG90YWxDb2x1bW5IYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25FeHBhbmRUb3RhbENvbHVtbi5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdleHBhbmRUb3RhbENvbHVtbicsIHRoYXQuZXZlbnRIYW5kbGVyc1snZXhwYW5kVG90YWxDb2x1bW5IYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydmaWx0ZXJIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25GaWx0ZXIuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZmlsdGVyJywgdGhhdC5ldmVudEhhbmRsZXJzWydmaWx0ZXJIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydzb3J0SGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uU29ydC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzb3J0JywgdGhhdC5ldmVudEhhbmRsZXJzWydzb3J0SGFuZGxlciddKTtcblxuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZW1vdmUgZXZlbnQgbGlzdGVuZXJzLiAqL1xuXHRwcml2YXRlIHVubGlzdGVuKCk6IHZvaWQge1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjZWxsQ2xpY2tIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjZWxsQ2xpY2snLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NlbGxDbGlja0hhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY2hhbmdlSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhhdC5ldmVudEhhbmRsZXJzWydjaGFuZ2VIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtbkNsaWNrSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY29sdW1uQ2xpY2snLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtbkNsaWNrSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjb2xsYXBzZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbGxhcHNlJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb2xsYXBzZUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY29sbGFwc2VUb3RhbENvbHVtbkhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbGxhcHNlVG90YWxDb2x1bW4nLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbGxhcHNlVG90YWxDb2x1bW5IYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2V4cGFuZEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2V4cGFuZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snZXhwYW5kSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydleHBhbmRUb3RhbENvbHVtbkhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2V4cGFuZFRvdGFsQ29sdW1uJywgdGhhdC5ldmVudEhhbmRsZXJzWydleHBhbmRUb3RhbENvbHVtbkhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snZmlsdGVySGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQub25maWx0ZXJIYW5kbGVyID0gbnVsbDtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydzb3J0SGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc29ydCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snc29ydEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdH1cbn1cbiJdfQ==