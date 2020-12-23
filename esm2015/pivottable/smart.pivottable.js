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
    /** @description Sets or gets whether the PivotTable's column header is sticky/frozen. */
    get freezeHeader() {
        return this.nativeElement ? this.nativeElement.freezeHeader : undefined;
    }
    set freezeHeader(value) {
        this.nativeElement ? this.nativeElement.freezeHeader = value : undefined;
    }
    /** @description A callback function that returns the default summary function of a summary column when it is dynamically assigned as such (e.g. by drag-drop in the designer). */
    get getDefaultSummaryFunction() {
        return this.nativeElement ? this.nativeElement.getDefaultSummaryFunction : undefined;
    }
    set getDefaultSummaryFunction(value) {
        this.nativeElement ? this.nativeElement.getDefaultSummaryFunction = value : undefined;
    }
    /** @description Sets or gets whether to show a Grand total row aggregating the data of all rows. */
    get grandTotal() {
        return this.nativeElement ? this.nativeElement.grandTotal : undefined;
    }
    set grandTotal(value) {
        this.nativeElement ? this.nativeElement.grandTotal = value : undefined;
    }
    /** @description Sets or gets the way row nesting (based on rowGroup columns) is displayed. */
    get groupLayout() {
        return this.nativeElement ? this.nativeElement.groupLayout : undefined;
    }
    set groupLayout(value) {
        this.nativeElement ? this.nativeElement.groupLayout = value : undefined;
    }
    /** @description Sets or gets whether to hide the tooltip that displays details when multiple summary cells with non-null values are selected. */
    get hideCellSelectionTooltip() {
        return this.nativeElement ? this.nativeElement.hideCellSelectionTooltip : undefined;
    }
    set hideCellSelectionTooltip(value) {
        this.nativeElement ? this.nativeElement.hideCellSelectionTooltip = value : undefined;
    }
    /** @description Sets or gets whether to hide rows that contain only 0 or null values. Applicable only when there are rowGroup columns. */
    get hideEmptyRows() {
        return this.nativeElement ? this.nativeElement.hideEmptyRows : undefined;
    }
    set hideEmptyRows(value) {
        this.nativeElement ? this.nativeElement.hideEmptyRows = value : undefined;
    }
    /** @description Sets or gets whether navigation with the keyboard is enabled in the PivotTable. */
    get keyboardNavigation() {
        return this.nativeElement ? this.nativeElement.keyboardNavigation : undefined;
    }
    set keyboardNavigation(value) {
        this.nativeElement ? this.nativeElement.keyboardNavigation = value : undefined;
    }
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    get locale() {
        return this.nativeElement ? this.nativeElement.locale : undefined;
    }
    set locale(value) {
        this.nativeElement ? this.nativeElement.locale = value : undefined;
    }
    /** @description Sets or gets an object specifying strings used in the element that can be localized. Used in conjunction with the property locale.  */
    get messages() {
        return this.nativeElement ? this.nativeElement.messages : undefined;
    }
    set messages(value) {
        this.nativeElement ? this.nativeElement.messages = value : undefined;
    }
    /** @description Sets or gets what value is shown in cells that do not have aggregated data to display. By default (null), such cells are empty. */
    get nullDefaultValue() {
        return this.nativeElement ? this.nativeElement.nullDefaultValue : undefined;
    }
    set nullDefaultValue(value) {
        this.nativeElement ? this.nativeElement.nullDefaultValue = value : undefined;
    }
    /** @description A callback function executed each time a PivotTable cell is rendered. */
    get onCellRender() {
        return this.nativeElement ? this.nativeElement.onCellRender : undefined;
    }
    set onCellRender(value) {
        this.nativeElement ? this.nativeElement.onCellRender = value : undefined;
    }
    /** @description A callback function executed each time a PivotTable column header cell is rendered. */
    get onColumnRender() {
        return this.nativeElement ? this.nativeElement.onColumnRender : undefined;
    }
    set onColumnRender(value) {
        this.nativeElement ? this.nativeElement.onColumnRender = value : undefined;
    }
    /** @description A callback function executed when the PivotTable is being initialized. */
    get onInit() {
        return this.nativeElement ? this.nativeElement.onInit : undefined;
    }
    set onInit(value) {
        this.nativeElement ? this.nativeElement.onInit = value : undefined;
    }
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    get rightToLeft() {
        return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
    }
    set rightToLeft(value) {
        this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
    }
    /** @description Sets or gets whether sorting by row (when a row group cell is clicked) is enabled. When columnTotals is also enabled, sorting is applied per "column group"; otherwise - for all columns. */
    get rowSort() {
        return this.nativeElement ? this.nativeElement.rowSort : undefined;
    }
    set rowSort(value) {
        this.nativeElement ? this.nativeElement.rowSort = value : undefined;
    }
    /** @description Sets or gets whether to show row total columns for each summary column. */
    get rowTotals() {
        return this.nativeElement ? this.nativeElement.rowTotals : undefined;
    }
    set rowTotals(value) {
        this.nativeElement ? this.nativeElement.rowTotals = value : undefined;
    }
    /** @description Sets or gets the position of row total columns (shown when rowTotals is enabled). */
    get rowTotalsPosition() {
        return this.nativeElement ? this.nativeElement.rowTotalsPosition : undefined;
    }
    set rowTotalsPosition(value) {
        this.nativeElement ? this.nativeElement.rowTotalsPosition = value : undefined;
    }
    /** @description Sets or gets whether row selection (via checkboxes) is enabled. */
    get selection() {
        return this.nativeElement ? this.nativeElement.selection : undefined;
    }
    set selection(value) {
        this.nativeElement ? this.nativeElement.selection = value : undefined;
    }
    /** @description Sets or gets the selection mode. Only applicable when selection is enabled. */
    get selectionMode() {
        return this.nativeElement ? this.nativeElement.selectionMode : undefined;
    }
    set selectionMode(value) {
        this.nativeElement ? this.nativeElement.selectionMode = value : undefined;
    }
    /** @description Determines the sorting mode of the PivotTable. */
    get sortMode() {
        return this.nativeElement ? this.nativeElement.sortMode : undefined;
    }
    set sortMode(value) {
        this.nativeElement ? this.nativeElement.sortMode = value : undefined;
    }
    /** @description Determines the theme. Theme defines the look of the element */
    get theme() {
        return this.nativeElement ? this.nativeElement.theme : undefined;
    }
    set theme(value) {
        this.nativeElement ? this.nativeElement.theme = value : undefined;
    }
    /** @description Sets or gets whether the PivotTable's toolbar is shown. It contains two breadcrumb components that allow the modification of the row group and pivot columns, as well as the "Conditional Formatting" and "Fields" buttons that open a dialog with additional settings. */
    get toolbar() {
        return this.nativeElement ? this.nativeElement.toolbar : undefined;
    }
    set toolbar(value) {
        this.nativeElement ? this.nativeElement.toolbar = value : undefined;
    }
    /** @description Sets or gets whether when hovering a cell with truncated content, a tooltip with the full content will be shown. */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQucGl2b3R0YWJsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NtYXJ0LXdlYmNvbXBvbmVudHMtYW5ndWxhci9waXZvdHRhYmxlLyIsInNvdXJjZXMiOlsic21hcnQucGl2b3R0YWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUosT0FBTyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVyRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFReEMsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBb0IsU0FBUSxXQUFXO0lBQ25ELFlBQVksR0FBMkI7UUFDdEMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBSUosa0JBQWEsR0FBVSxFQUFFLENBQUM7UUF3VWxDOzs7O1VBSUU7UUFDUSxnQkFBVyxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXRFOzs7VUFHRTtRQUNRLGFBQVEsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVuRTs7OztVQUlFO1FBQ1Esa0JBQWEsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV4RTs7O1VBR0U7UUFDUSxlQUFVLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFckU7OztVQUdFO1FBQ1EsMEJBQXFCLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFaEY7OztVQUdFO1FBQ1EsYUFBUSxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRW5FOzs7VUFHRTtRQUNRLHdCQUFtQixHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTlFOzs7O1VBSUU7UUFDUSxhQUFRLEdBQThCLElB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LEVBQUU7dURBR1A7QUFPRDtJQURDLEtBQUssRUFBRTt5REFHUDtBQU9EO0lBREMsS0FBSyxFQUFFO2lEQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7c0RBR1A7QUFPRDtJQURDLEtBQUssRUFBRTtrREFHUDtBQU9EO0lBREMsS0FBSyxFQUFFO29EQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7NERBR1A7QUFPRDtJQURDLEtBQUssRUFBRTtvREFHUDtBQU9EO0lBREMsS0FBSyxFQUFFO3dEQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7bURBR1A7QUFPRDtJQURDLEtBQUssRUFBRTtnREFHUDtBQU9EO0lBREMsS0FBSyxFQUFFO2tEQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7a0RBR1A7QUFVUztJQUFULE1BQU0sRUFBRTt3REFBNkQ7QUFNNUQ7SUFBVCxNQUFNLEVBQUU7cURBQTBEO0FBT3pEO0lBQVQsTUFBTSxFQUFFOzBEQUErRDtBQU05RDtJQUFULE1BQU0sRUFBRTt1REFBNEQ7QUFNM0Q7SUFBVCxNQUFNLEVBQUU7a0VBQXVFO0FBTXRFO0lBQVQsTUFBTSxFQUFFO3FEQUEwRDtBQU16RDtJQUFULE1BQU0sRUFBRTtnRUFBcUU7QUFPcEU7SUFBVCxNQUFNLEVBQUU7cURBQTBEO0FBTXpEO0lBQVQsTUFBTSxFQUFFO21EQUF3RDtBQXJZckQsbUJBQW1CO0lBSi9CLFNBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSx3Q0FBd0M7S0FDbEQsQ0FBQztHQUVXLG1CQUFtQixDQXV1Qi9CO1NBdnVCWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXZvdFRhYmxlIH0gZnJvbSAnLi8uLi9pbmRleCc7XG5pbXBvcnQgeyBBbmltYXRpb24sIFBpdm90VGFibGVDb2x1bW5BbGlnbiwgUGl2b3RUYWJsZUNvbHVtbkRhdGFUeXBlLCBQaXZvdFRhYmxlQ29sdW1uU3VtbWFyeSwgUGl2b3RUYWJsZUNvbHVtblRvdGFsc1Bvc2l0aW9uLCBQaXZvdFRhYmxlQ29uZGl0aW9uYWxGb3JtYXR0aW5nQ29uZGl0aW9uLCBQaXZvdFRhYmxlQ29uZGl0aW9uYWxGb3JtYXR0aW5nRm9udEZhbWlseSwgUGl2b3RUYWJsZUNvbmRpdGlvbmFsRm9ybWF0dGluZ0ZvbnRTaXplLCBQaXZvdFRhYmxlRGVzaWduZXJQb3NpdGlvbiwgUGl2b3RUYWJsZUdyb3VwTGF5b3V0LCBQaXZvdFRhYmxlUm93VG90YWxzUG9zaXRpb24sIFBpdm90VGFibGVTZWxlY3Rpb25Nb2RlLCBQaXZvdFRhYmxlU29ydE1vZGUsIFBpdm90VGFibGVDb2x1bW4sIFBpdm90VGFibGVDb25kaXRpb25hbEZvcm1hdHRpbmcsIEVsZW1lbnRSZW5kZXJNb2RlfSBmcm9tICcuLy4uL2luZGV4JztcbmltcG9ydCB7IENvbXBvbmVudCwgRGlyZWN0aXZlLCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgU2ltcGxlQ2hhbmdlcywgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VFbGVtZW50LCBTbWFydCB9IGZyb20gJy4vc21hcnQuZWxlbWVudCc7XG5leHBvcnQgeyBBbmltYXRpb24sIFBpdm90VGFibGVDb2x1bW5BbGlnbiwgUGl2b3RUYWJsZUNvbHVtbkRhdGFUeXBlLCBQaXZvdFRhYmxlQ29sdW1uU3VtbWFyeSwgUGl2b3RUYWJsZUNvbHVtblRvdGFsc1Bvc2l0aW9uLCBQaXZvdFRhYmxlQ29uZGl0aW9uYWxGb3JtYXR0aW5nQ29uZGl0aW9uLCBQaXZvdFRhYmxlQ29uZGl0aW9uYWxGb3JtYXR0aW5nRm9udEZhbWlseSwgUGl2b3RUYWJsZUNvbmRpdGlvbmFsRm9ybWF0dGluZ0ZvbnRTaXplLCBQaXZvdFRhYmxlRGVzaWduZXJQb3NpdGlvbiwgUGl2b3RUYWJsZUdyb3VwTGF5b3V0LCBQaXZvdFRhYmxlUm93VG90YWxzUG9zaXRpb24sIFBpdm90VGFibGVTZWxlY3Rpb25Nb2RlLCBQaXZvdFRhYmxlU29ydE1vZGUsIFBpdm90VGFibGVDb2x1bW4sIFBpdm90VGFibGVDb25kaXRpb25hbEZvcm1hdHRpbmcsIEVsZW1lbnRSZW5kZXJNb2RlfSBmcm9tICcuLy4uL2luZGV4JztcbmV4cG9ydCB7IFNtYXJ0IH0gZnJvbSAnLi9zbWFydC5lbGVtZW50JztcbmV4cG9ydCB7IFBpdm90VGFibGUgfSBmcm9tICcuLy4uL2luZGV4JztcblxuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdzbWFydC1waXZvdC10YWJsZSwgW3NtYXJ0LXBpdm90LXRhYmxlXSdcbn0pXG5cbmV4cG9ydCBjbGFzcyBQaXZvdFRhYmxlQ29tcG9uZW50IGV4dGVuZHMgQmFzZUVsZW1lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcblx0Y29uc3RydWN0b3IocmVmOiBFbGVtZW50UmVmPFBpdm90VGFibGU+KSB7XG5cdFx0c3VwZXIocmVmKTtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPSByZWYubmF0aXZlRWxlbWVudCBhcyBQaXZvdFRhYmxlO1xuXHR9XG5cblx0cHJpdmF0ZSBldmVudEhhbmRsZXJzOiBhbnlbXSA9IFtdO1xuXG5cdHB1YmxpYyBuYXRpdmVFbGVtZW50OiBQaXZvdFRhYmxlO1xuXHQvKiogQGRlc2NyaXB0aW9uIENyZWF0ZXMgdGhlIGNvbXBvbmVudCBvbiBkZW1hbmQuXG5cdCAqIEBwYXJhbSBwcm9wZXJ0aWVzIEFuIG9wdGlvbmFsIG9iamVjdCBvZiBwcm9wZXJ0aWVzLCB3aGljaCB3aWxsIGJlIGFkZGVkIHRvIHRoZSB0ZW1wbGF0ZSBiaW5kZWQgb25lcy5cblx0ICovXG5cdHB1YmxpYyBjcmVhdGVDb21wb25lbnQocHJvcGVydGllcyA9IHt9KTogYW55IHtcbiAgICBcdHRoaXMubmF0aXZlRWxlbWVudCA9IDxQaXZvdFRhYmxlPmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NtYXJ0LXBpdm90LXRhYmxlJyk7XG5cdFx0Zm9yIChsZXQgcHJvcGVydHlOYW1lIGluIHByb3BlcnRpZXMpIHsgXG4gXHRcdFx0dGhpcy5uYXRpdmVFbGVtZW50W3Byb3BlcnR5TmFtZV0gPSBwcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV07XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQ7XG5cdH1cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIGFuaW1hdGlvbiBtb2RlLiBBbmltYXRpb24gaXMgZGlzYWJsZWQgd2hlbiB0aGUgcHJvcGVydHkgaXMgc2V0IHRvICdub25lJyAqL1xuXHRASW5wdXQoKVxuXHRnZXQgYW5pbWF0aW9uKCk6IEFuaW1hdGlvbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hbmltYXRpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGFuaW1hdGlvbih2YWx1ZTogQW5pbWF0aW9uKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmFuaW1hdGlvbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgd2hldGhlciB0aGUgcmVvcmRlcmluZyBvZiBjb2x1bW5zIGlzIGVuYWJsZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBjb2x1bW5SZW9yZGVyKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sdW1uUmVvcmRlciA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgY29sdW1uUmVvcmRlcih2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb2x1bW5SZW9yZGVyID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERlc2NyaWJlcyB0aGUgY29sdW1ucyBvZiB0aGUgUGl2b3RUYWJsZSdzIG9yaWdpbmFsIHRhYnVsYXIgZGF0YS4gQmFzZWQgb24gdGhlc2Ugc2V0dGluZ3MgYW5kIHRoZSBkYXRhIHNvdXJjZSwgdGhlIGFjdHVhbCBjb2x1bW5zIG9mIHRoZSBQaXZvdFRhYmxlIGFyZSBkeW5hbWljYWxseSBnZW5lcmF0ZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBjb2x1bW5zKCk6IFBpdm90VGFibGVDb2x1bW5bXSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb2x1bW5zIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjb2x1bW5zKHZhbHVlOiBQaXZvdFRhYmxlQ29sdW1uW10pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sdW1ucyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgd2hldGhlciB0byBzaG93IHRvdGFsIGNvbHVtbnMgZm9yIGVhY2ggcGl2b3QgZGF0YSBwb2ludC4gV2hlbiBlbmFibGVkLCBhbGwgc3VtbWFyeSBjb2x1bW5zIG11c3QgaGF2ZSB0aGUgc2FtZSBzdW1tYXJ5IGZ1bmN0aW9uIHNldCBieSB3aGljaCB0b3RhbCBjb2x1bW5zIGFyZSBjYWxjdWxhdGVkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgY29sdW1uVG90YWxzKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sdW1uVG90YWxzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjb2x1bW5Ub3RhbHModmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sdW1uVG90YWxzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgcG9zaXRpb24gb2YgdG90YWwgY29sdW1ucyAoc2hvd24gd2hlbiBjb2x1bW5Ub3RhbHMgaXMgZW5hYmxlZCkuICovXG5cdEBJbnB1dCgpXG5cdGdldCBjb2x1bW5Ub3RhbHNQb3NpdGlvbigpOiBQaXZvdFRhYmxlQ29sdW1uVG90YWxzUG9zaXRpb24ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sdW1uVG90YWxzUG9zaXRpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGNvbHVtblRvdGFsc1Bvc2l0aW9uKHZhbHVlOiBQaXZvdFRhYmxlQ29sdW1uVG90YWxzUG9zaXRpb24pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sdW1uVG90YWxzUG9zaXRpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIGRldGFpbHMgYWJvdXQgY29uZGl0aW9uYWwgZm9ybWF0dGluZyB0byBiZSBhcHBsaWVkIHRvIHRoZSBQaXZvdFRhYmxlJ3MgY2VsbHMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBjb25kaXRpb25hbEZvcm1hdHRpbmcoKTogUGl2b3RUYWJsZUNvbmRpdGlvbmFsRm9ybWF0dGluZ1tdIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbmRpdGlvbmFsRm9ybWF0dGluZyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgY29uZGl0aW9uYWxGb3JtYXR0aW5nKHZhbHVlOiBQaXZvdFRhYmxlQ29uZGl0aW9uYWxGb3JtYXR0aW5nW10pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29uZGl0aW9uYWxGb3JtYXR0aW5nID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIG9yaWdpbmFsIHRhYnVsYXIgZGF0YSBzb3VyY2Ugb2YgdGhlIFBpdm90VGFibGUuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkYXRhU291cmNlKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kYXRhU291cmNlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkYXRhU291cmNlKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGF0YVNvdXJjZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgd2hldGhlciB0aGUgb3JpZ2luYWwgdGFidWxhciBkYXRhIHNvdXJzZSBvZiB0aGUgUGl2b3RUYWJsZSB3aWxsIGJlIHByZS1zb3J0ZWQgYmFzZWQgb24gY29sdW1ucyB3aXRoIHRoZSByb3dHcm91cCBwcm9wZXJ0eSAoYW5kIHRoZWlyIG9yZGVyKS4gKi9cblx0QElucHV0KClcblx0Z2V0IGRlZmF1bHRTb3J0QnlSb3dHcm91cHMoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kZWZhdWx0U29ydEJ5Um93R3JvdXBzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkZWZhdWx0U29ydEJ5Um93R3JvdXBzKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRlZmF1bHRTb3J0QnlSb3dHcm91cHMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHdoZXRoZXIgdG8gZGlzcGxheSB0aGUgUGl2b3RUYWJsZSdzIGRlc2lnbmVyIGFsb25nc2lkZSB0aGUgdGFibGUgaXRzZWxmLiBUaGUgZGVzaWduZXIgYWxsb3dzIGZvciBjb25maWd1cmluZyBjb2x1bW4gc2V0dGluZ3MgYW5kIGFwcGx5aW5nIGZpbHRlcmluZy4gKi9cblx0QElucHV0KClcblx0Z2V0IGRlc2lnbmVyKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGVzaWduZXIgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRlc2lnbmVyKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRlc2lnbmVyID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgcG9zaXRpb24gb2YgdGhlIFBpdm90VGFibGUncyBkZXNpZ25lciAoc2hvd24gd2hlbiBkZXNpZ25lciBpcyBlbmFibGVkKS4gKi9cblx0QElucHV0KClcblx0Z2V0IGRlc2lnbmVyUG9zaXRpb24oKTogUGl2b3RUYWJsZURlc2lnbmVyUG9zaXRpb24ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGVzaWduZXJQb3NpdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGVzaWduZXJQb3NpdGlvbih2YWx1ZTogUGl2b3RUYWJsZURlc2lnbmVyUG9zaXRpb24pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGVzaWduZXJQb3NpdGlvbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEaXNhYmxlcyB0aGUgaW50ZXJhY3Rpb24gd2l0aCB0aGUgZWxlbWVudC4gKi9cblx0QElucHV0KClcblx0Z2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZWQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVkID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIElmIGVuYWJsZWQsIHNob3dzIHRoZSBvcmlnaW5hbCB0YWJ1bGFyIGRhdGEgdGhhdCBoYXMgYmVlbiBhZ2dyZWdhdGVkIGluIGEgUGl2b3RUYWJsZSBzdW1tYXJ5IGNlbGwgd2hlbiB0aGUgY2VsbCBpcyBkb3VibGUtY2xpY2tlZCBvciBGMiBpcyBwcmVzc2VkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZHJpbGxEb3duKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZHJpbGxEb3duIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkcmlsbERvd24odmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZHJpbGxEb3duID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB3aGV0aGVyIHRoZSBQaXZvdFRhYmxlJ3MgY29sdW1uIGhlYWRlciBpcyBzdGlja3kvZnJvemVuLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZnJlZXplSGVhZGVyKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZnJlZXplSGVhZGVyIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBmcmVlemVIZWFkZXIodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZnJlZXplSGVhZGVyID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEEgY2FsbGJhY2sgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBkZWZhdWx0IHN1bW1hcnkgZnVuY3Rpb24gb2YgYSBzdW1tYXJ5IGNvbHVtbiB3aGVuIGl0IGlzIGR5bmFtaWNhbGx5IGFzc2lnbmVkIGFzIHN1Y2ggKGUuZy4gYnkgZHJhZy1kcm9wIGluIHRoZSBkZXNpZ25lcikuICovXG5cdEBJbnB1dCgpXG5cdGdldCBnZXREZWZhdWx0U3VtbWFyeUZ1bmN0aW9uKCk6IHsgKGNvbHVtbjogUGl2b3RUYWJsZUNvbHVtbik6IHN0cmluZyB9IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmdldERlZmF1bHRTdW1tYXJ5RnVuY3Rpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGdldERlZmF1bHRTdW1tYXJ5RnVuY3Rpb24odmFsdWU6IHsgKGNvbHVtbjogUGl2b3RUYWJsZUNvbHVtbik6IHN0cmluZyB9KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmdldERlZmF1bHRTdW1tYXJ5RnVuY3Rpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHdoZXRoZXIgdG8gc2hvdyBhIEdyYW5kIHRvdGFsIHJvdyBhZ2dyZWdhdGluZyB0aGUgZGF0YSBvZiBhbGwgcm93cy4gKi9cblx0QElucHV0KClcblx0Z2V0IGdyYW5kVG90YWwoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ncmFuZFRvdGFsIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBncmFuZFRvdGFsKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmdyYW5kVG90YWwgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSB3YXkgcm93IG5lc3RpbmcgKGJhc2VkIG9uIHJvd0dyb3VwIGNvbHVtbnMpIGlzIGRpc3BsYXllZC4gKi9cblx0QElucHV0KClcblx0Z2V0IGdyb3VwTGF5b3V0KCk6IFBpdm90VGFibGVHcm91cExheW91dCB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ncm91cExheW91dCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZ3JvdXBMYXlvdXQodmFsdWU6IFBpdm90VGFibGVHcm91cExheW91dCkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ncm91cExheW91dCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgd2hldGhlciB0byBoaWRlIHRoZSB0b29sdGlwIHRoYXQgZGlzcGxheXMgZGV0YWlscyB3aGVuIG11bHRpcGxlIHN1bW1hcnkgY2VsbHMgd2l0aCBub24tbnVsbCB2YWx1ZXMgYXJlIHNlbGVjdGVkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgaGlkZUNlbGxTZWxlY3Rpb25Ub29sdGlwKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGlkZUNlbGxTZWxlY3Rpb25Ub29sdGlwIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBoaWRlQ2VsbFNlbGVjdGlvblRvb2x0aXAodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGlkZUNlbGxTZWxlY3Rpb25Ub29sdGlwID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB3aGV0aGVyIHRvIGhpZGUgcm93cyB0aGF0IGNvbnRhaW4gb25seSAwIG9yIG51bGwgdmFsdWVzLiBBcHBsaWNhYmxlIG9ubHkgd2hlbiB0aGVyZSBhcmUgcm93R3JvdXAgY29sdW1ucy4gKi9cblx0QElucHV0KClcblx0Z2V0IGhpZGVFbXB0eVJvd3MoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oaWRlRW1wdHlSb3dzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBoaWRlRW1wdHlSb3dzKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmhpZGVFbXB0eVJvd3MgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHdoZXRoZXIgbmF2aWdhdGlvbiB3aXRoIHRoZSBrZXlib2FyZCBpcyBlbmFibGVkIGluIHRoZSBQaXZvdFRhYmxlLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQga2V5Ym9hcmROYXZpZ2F0aW9uKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQua2V5Ym9hcmROYXZpZ2F0aW9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBrZXlib2FyZE5hdmlnYXRpb24odmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQua2V5Ym9hcmROYXZpZ2F0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgbGFuZ3VhZ2UuIFVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCB0aGUgcHJvcGVydHkgbWVzc2FnZXMuICAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbG9jYWxlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sb2NhbGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGxvY2FsZSh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxvY2FsZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgYW4gb2JqZWN0IHNwZWNpZnlpbmcgc3RyaW5ncyB1c2VkIGluIHRoZSBlbGVtZW50IHRoYXQgY2FuIGJlIGxvY2FsaXplZC4gVXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZSBwcm9wZXJ0eSBsb2NhbGUuICAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbWVzc2FnZXMoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm1lc3NhZ2VzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBtZXNzYWdlcyh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm1lc3NhZ2VzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB3aGF0IHZhbHVlIGlzIHNob3duIGluIGNlbGxzIHRoYXQgZG8gbm90IGhhdmUgYWdncmVnYXRlZCBkYXRhIHRvIGRpc3BsYXkuIEJ5IGRlZmF1bHQgKG51bGwpLCBzdWNoIGNlbGxzIGFyZSBlbXB0eS4gKi9cblx0QElucHV0KClcblx0Z2V0IG51bGxEZWZhdWx0VmFsdWUoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm51bGxEZWZhdWx0VmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG51bGxEZWZhdWx0VmFsdWUodmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5udWxsRGVmYXVsdFZhbHVlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEEgY2FsbGJhY2sgZnVuY3Rpb24gZXhlY3V0ZWQgZWFjaCB0aW1lIGEgUGl2b3RUYWJsZSBjZWxsIGlzIHJlbmRlcmVkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgb25DZWxsUmVuZGVyKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vbkNlbGxSZW5kZXIgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG9uQ2VsbFJlbmRlcih2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uQ2VsbFJlbmRlciA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBIGNhbGxiYWNrIGZ1bmN0aW9uIGV4ZWN1dGVkIGVhY2ggdGltZSBhIFBpdm90VGFibGUgY29sdW1uIGhlYWRlciBjZWxsIGlzIHJlbmRlcmVkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgb25Db2x1bW5SZW5kZXIoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uQ29sdW1uUmVuZGVyIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBvbkNvbHVtblJlbmRlcih2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uQ29sdW1uUmVuZGVyID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEEgY2FsbGJhY2sgZnVuY3Rpb24gZXhlY3V0ZWQgd2hlbiB0aGUgUGl2b3RUYWJsZSBpcyBiZWluZyBpbml0aWFsaXplZC4gKi9cblx0QElucHV0KClcblx0Z2V0IG9uSW5pdCgpOiB7ICgpOiB2b2lkIH0ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25Jbml0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBvbkluaXQodmFsdWU6IHsgKCk6IHZvaWQgfSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vbkluaXQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSB2YWx1ZSBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGVsZW1lbnQgaXMgYWxpZ25lZCB0byBzdXBwb3J0IGxvY2FsZXMgdXNpbmcgcmlnaHQtdG8tbGVmdCBmb250cy4gKi9cblx0QElucHV0KClcblx0Z2V0IHJpZ2h0VG9MZWZ0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmlnaHRUb0xlZnQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHJpZ2h0VG9MZWZ0KHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJpZ2h0VG9MZWZ0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB3aGV0aGVyIHNvcnRpbmcgYnkgcm93ICh3aGVuIGEgcm93IGdyb3VwIGNlbGwgaXMgY2xpY2tlZCkgaXMgZW5hYmxlZC4gV2hlbiBjb2x1bW5Ub3RhbHMgaXMgYWxzbyBlbmFibGVkLCBzb3J0aW5nIGlzIGFwcGxpZWQgcGVyIFwiY29sdW1uIGdyb3VwXCI7IG90aGVyd2lzZSAtIGZvciBhbGwgY29sdW1ucy4gKi9cblx0QElucHV0KClcblx0Z2V0IHJvd1NvcnQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yb3dTb3J0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCByb3dTb3J0KHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJvd1NvcnQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHdoZXRoZXIgdG8gc2hvdyByb3cgdG90YWwgY29sdW1ucyBmb3IgZWFjaCBzdW1tYXJ5IGNvbHVtbi4gKi9cblx0QElucHV0KClcblx0Z2V0IHJvd1RvdGFscygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJvd1RvdGFscyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcm93VG90YWxzKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJvd1RvdGFscyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIHBvc2l0aW9uIG9mIHJvdyB0b3RhbCBjb2x1bW5zIChzaG93biB3aGVuIHJvd1RvdGFscyBpcyBlbmFibGVkKS4gKi9cblx0QElucHV0KClcblx0Z2V0IHJvd1RvdGFsc1Bvc2l0aW9uKCk6IFBpdm90VGFibGVSb3dUb3RhbHNQb3NpdGlvbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yb3dUb3RhbHNQb3NpdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcm93VG90YWxzUG9zaXRpb24odmFsdWU6IFBpdm90VGFibGVSb3dUb3RhbHNQb3NpdGlvbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yb3dUb3RhbHNQb3NpdGlvbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgd2hldGhlciByb3cgc2VsZWN0aW9uICh2aWEgY2hlY2tib3hlcykgaXMgZW5hYmxlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IHNlbGVjdGlvbigpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc2VsZWN0aW9uKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdGlvbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIHNlbGVjdGlvbiBtb2RlLiBPbmx5IGFwcGxpY2FibGUgd2hlbiBzZWxlY3Rpb24gaXMgZW5hYmxlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IHNlbGVjdGlvbk1vZGUoKTogUGl2b3RUYWJsZVNlbGVjdGlvbk1vZGUge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uTW9kZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc2VsZWN0aW9uTW9kZSh2YWx1ZTogUGl2b3RUYWJsZVNlbGVjdGlvbk1vZGUpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uTW9kZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBzb3J0aW5nIG1vZGUgb2YgdGhlIFBpdm90VGFibGUuICovXG5cdEBJbnB1dCgpXG5cdGdldCBzb3J0TW9kZSgpOiBQaXZvdFRhYmxlU29ydE1vZGUge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc29ydE1vZGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHNvcnRNb2RlKHZhbHVlOiBQaXZvdFRhYmxlU29ydE1vZGUpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc29ydE1vZGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgdGhlbWUuIFRoZW1lIGRlZmluZXMgdGhlIGxvb2sgb2YgdGhlIGVsZW1lbnQgKi9cblx0QElucHV0KClcblx0Z2V0IHRoZW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50aGVtZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdGhlbWUodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50aGVtZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgd2hldGhlciB0aGUgUGl2b3RUYWJsZSdzIHRvb2xiYXIgaXMgc2hvd24uIEl0IGNvbnRhaW5zIHR3byBicmVhZGNydW1iIGNvbXBvbmVudHMgdGhhdCBhbGxvdyB0aGUgbW9kaWZpY2F0aW9uIG9mIHRoZSByb3cgZ3JvdXAgYW5kIHBpdm90IGNvbHVtbnMsIGFzIHdlbGwgYXMgdGhlIFwiQ29uZGl0aW9uYWwgRm9ybWF0dGluZ1wiIGFuZCBcIkZpZWxkc1wiIGJ1dHRvbnMgdGhhdCBvcGVuIGEgZGlhbG9nIHdpdGggYWRkaXRpb25hbCBzZXR0aW5ncy4gKi9cblx0QElucHV0KClcblx0Z2V0IHRvb2xiYXIoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50b29sYmFyIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0b29sYmFyKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRvb2xiYXIgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHdoZXRoZXIgd2hlbiBob3ZlcmluZyBhIGNlbGwgd2l0aCB0cnVuY2F0ZWQgY29udGVudCwgYSB0b29sdGlwIHdpdGggdGhlIGZ1bGwgY29udGVudCB3aWxsIGJlIHNob3duLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdG9vbHRpcCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRvb2x0aXAgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRvb2x0aXAodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudG9vbHRpcCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgY2VsbCBoYXMgYmVlbiBjbGlja2VkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGRhdGFGaWVsZCwgXHRyb3cpXG5cdCogICBkYXRhRmllbGQgLSBUaGUgZGF0YSBmaWVsZCBvZiB0aGUgY2VsbCdzIGR5bmFtaWMgY29sdW1uLlxuXHQqICAgcm93IC0gVGhlIGRhdGEgb2YgdGhlIGNlbGwncyByb3cuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkNlbGxDbGljazogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHNlbGVjdGlvbiBpcyBjaGFuZ2VkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHR5cGUpXG5cdCogICB0eXBlIC0gVGhlIHR5cGUgb2YgYWN0aW9uIHRoYXQgaW5pdGlhdGVkIHRoZSBzZWxlY3Rpb24gY2hhbmdlLiBQb3NzaWJsZSB0eXBlczogJ3Byb2dyYW1tYXRpYycsICdpbnRlcmFjdGlvbicsICdyZW1vdmUnLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgc3VtbWFyeSBjb2x1bW4gaGVhZGVyIGNlbGwgaGFzIGJlZW4gY2xpY2tlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRjb2x1bW5EZWZpbml0aW9uLCBcdGRhdGFGaWVsZClcblx0KiAgIGNvbHVtbkRlZmluaXRpb24gLSBBbiBvYmplY3QgZGV0YWlsaW5nIHRoZSBjbGlja2VkIGR5bmFtaWMgY29sdW1uLlxuXHQqICAgZGF0YUZpZWxkIC0gVGhlIGRhdGEgZmllbGQgb2YgdGhlIGNlbGwncyBvcmlnaW5hbCBjb2x1bW4uXG5cdCovXG5cdEBPdXRwdXQoKSBvbkNvbHVtbkNsaWNrOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIHJvdyBoYXMgYmVlbiBjb2xsYXBzZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0cmVjb3JkKVxuXHQqICAgcmVjb3JkIC0gVGhlIChhZ2dyZWdhdGVkKSBkYXRhIG9mIHRoZSBjb2xsYXBzZWQgcm93LlxuXHQqL1xuXHRAT3V0cHV0KCkgb25Db2xsYXBzZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSB0b3RhbCBjb2x1bW4gaGFzIGJlZW4gY29sbGFwc2VkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGNvbHVtbkRlZmluaXRpb24pXG5cdCogICBjb2x1bW5EZWZpbml0aW9uIC0gVGhlIGRlZmluaXRpb24gb2YgdGhlIGNvbGxhcHNlZCB0b3RhbCBjb2x1bW4uXG5cdCovXG5cdEBPdXRwdXQoKSBvbkNvbGxhcHNlVG90YWxDb2x1bW46IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgcm93IGhhcyBiZWVuIGV4cGFuZGVkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHJlY29yZClcblx0KiAgIHJlY29yZCAtIFRoZSAoYWdncmVnYXRlZCkgZGF0YSBvZiB0aGUgZXhwYW5kZWQgcm93LlxuXHQqL1xuXHRAT3V0cHV0KCkgb25FeHBhbmQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgdG90YWwgY29sdW1uIGhhcyBiZWVuIGV4cGFuZGVkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGNvbHVtbkRlZmluaXRpb24pXG5cdCogICBjb2x1bW5EZWZpbml0aW9uIC0gVGhlIGRlZmluaXRpb24gb2YgdGhlIGV4cGFuZGVkIHRvdGFsIGNvbHVtbi5cblx0Ki9cblx0QE91dHB1dCgpIG9uRXhwYW5kVG90YWxDb2x1bW46IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgZmlsdGVyaW5nLXJlbGF0ZWQgYWN0aW9uIGlzIG1hZGUuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0YWN0aW9uLCBcdGZpbHRlcnMpXG5cdCogICBhY3Rpb24gLSBUaGUgZmlsdGVyaW5nIGFjdGlvbi4gUG9zc2libGUgYWN0aW9uczogJ2FkZCcsICdyZW1vdmUnLlxuXHQqICAgZmlsdGVycyAtIFRoZSBhZGRlZCBmaWx0ZXJzLiBPbmx5IHdoZW4gYWN0aW9uIGlzICdhZGQnLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25GaWx0ZXI6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgY29sdW1uIGhlYWRlciBjZWxsIGhhcyBiZWVuIGNsaWNrZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0Y29sdW1ucylcblx0KiAgIGNvbHVtbnMgLSBBbiBhcnJheSB3aXRoIGluZm9ybWF0aW9uIGFib3V0IHRoZSBkeW5hbWljIGNvbHVtbnMgdGhlIFBpdm90VGFibGUgaGFzIGJlZW4gc29ydGVkIGJ5LlxuXHQqL1xuXHRAT3V0cHV0KCkgb25Tb3J0OiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gQWRkcyBhIGZpbHRlciB0byBhIHNwZWNpZmljIGNvbHVtbi4gXG5cdCogQHBhcmFtIHtzdHJpbmd9IGRhdGFGaWVsZC4gVGhlIGNvbHVtbidzIGRhdGEgZmllbGQuXG5cdCogQHBhcmFtIHthbnl9IGZpbHRlci4gRmlsdGVyR3JvdXAgb2JqZWN0LlxuXHQqL1xuICAgIHB1YmxpYyBhZGRGaWx0ZXIoZGF0YUZpZWxkOiBzdHJpbmcsIGZpbHRlcjogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmFkZEZpbHRlcihkYXRhRmllbGQsIGZpbHRlcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYWRkRmlsdGVyKGRhdGFGaWVsZCwgZmlsdGVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ2xlYXJzIGFwcGxpZWQgZmlsdGVycy4gXG5cdCovXG4gICAgcHVibGljIGNsZWFyRmlsdGVycygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xlYXJGaWx0ZXJzKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xlYXJGaWx0ZXJzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIENsZWFycyBzZWxlY3Rpb24uIFxuXHQqL1xuICAgIHB1YmxpYyBjbGVhclNlbGVjdGlvbigpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xlYXJTZWxlY3Rpb24oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbGVhclNlbGVjdGlvbigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDbGVhcnMgdGhlIFBpdm90VGFibGUgc29ydGluZy4gXG5cdCovXG4gICAgcHVibGljIGNsZWFyU29ydCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xlYXJTb3J0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xlYXJTb3J0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIENvbGxhcHNlcyBhbGwgcm93cyAod2hlbiBtdWx0aXBsZSByb3cgZ3JvdXBzIGFyZSBhcHBsaWVkKS4gXG5cdCovXG4gICAgcHVibGljIGNvbGxhcHNlQWxsUm93cygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sbGFwc2VBbGxSb3dzKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sbGFwc2VBbGxSb3dzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIENvbGxhcHNlcyBhIHJvdyAod2hlbiBtdWx0aXBsZSByb3cgZ3JvdXBzIGFyZSBhcHBsaWVkKS4gXG5cdCogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IHJvd0lkLiBUaGUgaWQgb2YgdGhlIHJvdyB0byBjb2xsYXBzZS4gQ2FuIGJlIHJldHJpZXZlZCBmcm9tIHRoZSA8c3Ryb25nPnJvd3M8L3N0cm9uZz4gY29sbGVjdGlvbi5cblx0Ki9cbiAgICBwdWJsaWMgY29sbGFwc2VSb3cocm93SWQ6IHN0cmluZyB8IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jb2xsYXBzZVJvdyhyb3dJZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sbGFwc2VSb3cocm93SWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFeHBhbmRzIGFsbCByb3dzICh3aGVuIG11bHRpcGxlIHJvdyBncm91cHMgYXJlIGFwcGxpZWQpLiBcblx0Ki9cbiAgICBwdWJsaWMgZXhwYW5kQWxsUm93cygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZXhwYW5kQWxsUm93cygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmV4cGFuZEFsbFJvd3MoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRXhwYW5kcyBhIHJvdyAod2hlbiBtdWx0aXBsZSByb3cgZ3JvdXBzIGFyZSBhcHBsaWVkKS4gXG5cdCogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IHJvd0lkLiBUaGUgaWQgb2YgdGhlIHJvdyB0byBleHBhbmQuIENhbiBiZSByZXRyaWV2ZWQgZnJvbSB0aGUgPHN0cm9uZz5yb3dzPC9zdHJvbmc+IGNvbGxlY3Rpb24uXG5cdCovXG4gICAgcHVibGljIGV4cGFuZFJvdyhyb3dJZDogc3RyaW5nIHwgbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmV4cGFuZFJvdyhyb3dJZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZXhwYW5kUm93KHJvd0lkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRXhwb3J0cyB0aGUgUGl2b3RUYWJsZSdzIGRhdGEuIFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBkYXRhRm9ybWF0LiBUaGUgZmlsZSBmb3JtYXQgdG8gZXhwb3J0IHRvLiBTdXBwb3J0ZWQgZm9ybWF0czogJ2NzdicsICdodG1sJywgJ2pzb24nLCAncGRmJywgJ3RzdicsICd4bHN4JywgJ3htbCcuXG5cdCogQHBhcmFtIHtzdHJpbmd9IGZpbGVOYW1lPy4gVGhlIG5hbWUgb2YgdGhlIGZpbGUgdG8gZXhwb3J0IHRvXG5cdCogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2s/LiBBIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIHBhc3MgdGhlIGV4cG9ydGVkIGRhdGEgdG8gKGlmIGZpbGVOYW1lIGlzIG5vdCBwcm92aWRlZClcblx0KiBAcmV0dXJucyB7YW55fVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZXhwb3J0RGF0YShkYXRhRm9ybWF0LCBmaWxlTmFtZT8sIGNhbGxiYWNrPyk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5leHBvcnREYXRhKGRhdGFGb3JtYXQsIGZpbGVOYW1lLCBjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRoZSBjdXJyZW50IGR5bmFtaWMgcGl2b3QgY29sdW1ucy4gXG5cdCogQHJldHVybnMge2FueX1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldER5bmFtaWNDb2x1bW5zKCk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXREeW5hbWljQ29sdW1ucygpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmV0dXJucyBhbiBhcnJheSBvZiBzZWxlY3RlZCByb3cgaWRzICh3aGVuIHNlbGVjdGlvbk1vZGUgaXMgJ21hbnknIG9yICdleHRlbmRlZCcpIG9yIGFuIGFycmF5IG9mIHNlbGVjdGVkIGNlbGwgZGV0YWlscyAod2hlbiBzZWxlY3Rpb25Nb2RlIGlzICdjZWxsJykuIFxuXHQqIEByZXR1cm5zIHsoc3RyaW5nIHwgbnVtYmVyKVtdIHwgeyBkYXRhRmllbGQ6IHN0cmluZywgcm93SWQ6IHN0cmluZyB8IG51bWJlciB9W119XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRTZWxlY3Rpb24oKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldFNlbGVjdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVmcmVzaGVzIHRoZSBQaXZvdFRhYmxlLiBcblx0Ki9cbiAgICBwdWJsaWMgcmVmcmVzaCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVmcmVzaCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlZnJlc2goKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVtb3ZlcyBmaWx0ZXJzIGFwcGxpZWQgdG8gYSBzcGVjaWZpYyBjb2x1bW4uIFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBkYXRhRmllbGQuIFRoZSBjb2x1bW4ncyBkYXRhIGZpZWxkLlxuXHQqL1xuICAgIHB1YmxpYyByZW1vdmVGaWx0ZXIoZGF0YUZpZWxkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVtb3ZlRmlsdGVyKGRhdGFGaWVsZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVtb3ZlRmlsdGVyKGRhdGFGaWVsZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNlbGVjdHMgb25lIG9yIG1vcmUgcm93cyAod2hlbiBzZWxlY3Rpb25Nb2RlIGlzICdtYW55JyBvciAnZXh0ZW5kZWQnKSBvciBhIHNpbmdsZSBjZWxsICh3aGVuIHNlbGVjdGlvbk1vZGUgaXMgJ2NlbGwnIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IGlzIHBhc3NlZCkuIFxuXHQqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyIHwgKHN0cmluZyB8IG51bWJlcilbXX0gcm93SWQuIFRoZSBpZCBvZiB0aGUgcm93IChvciBhbiBhcnJheSBvZiByb3cgaWRzKSB0byBzZWxlY3QgKG9yIG9mIHRoZSBjZWxsJ3MgcGFyZW50IHJvdyB3aGVuIDxzdHJvbmc+c2VsZWN0aW9uTW9kZTwvc3Ryb25nPiBpcyA8ZW0+J2NlbGwnPC9lbT4pLiBDYW4gYmUgcmV0cmlldmVkIGZyb20gdGhlIDxzdHJvbmc+cm93czwvc3Ryb25nPiBjb2xsZWN0aW9uLlxuXHQqIEBwYXJhbSB7c3RyaW5nfSBkYXRhRmllbGQ/LiBUaGUgZGF0YUZpZWxkIG9mIHRoZSBkeW5hbWljIGNvbHVtbiAoY2FuIGJlIHJldHJpZXZlZCBieSBjYWxsaW5nIDxzdHJvbmc+Z2V0RHluYW1pY0NvbHVtbnM8L3N0cm9uZz4pIG9mIHRoZSBjZWxsIHRvIHNlbGVjdCAob25seSBhcHBsaWNhYmxlIHdoZW4gPHN0cm9uZz5zZWxlY3Rpb25Nb2RlPC9zdHJvbmc+IGlzIDxlbT4nY2VsbCc8L2VtPikuXG5cdCovXG4gICAgcHVibGljIHNlbGVjdChyb3dJZDogc3RyaW5nIHwgbnVtYmVyIHwgKHN0cmluZyB8IG51bWJlcilbXSwgZGF0YUZpZWxkPzogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdChyb3dJZCwgZGF0YUZpZWxkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zZWxlY3Qocm93SWQsIGRhdGFGaWVsZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNvcnRzIGJ5IGEgc3VtbWFyeSBvciBncm91cCBjb2x1bW4uIFxuXHQqIEBwYXJhbSB7YW55fSBjb2x1bW5EZWZpbml0aW9uLiBUaGUgZHluYW1pYyBjb2x1bW4ncyBkZWZpbml0aW9uLiBDYW4gYmUgcmV0cmlldmVkIGZyb20gdGhlIG1ldGhvZCA8c3Ryb25nPmdldER5bmFtaWNDb2x1bW5zPC9zdHJvbmc+LlxuXHQqIEBwYXJhbSB7c3RyaW5nfSBzb3J0T3JkZXI/LiBTb3J0IG9yZGVyLiBQb3NzaWJsZSB2YWx1ZXM6ICdhc2MnIChhc2NlbmRpbmcpLCAnZGVzYycgKGRlc2NlbmRpbmcpLCBhbmQgbnVsbCAocmVtb3ZlcyBzb3J0aW5nIGJ5IGNvbHVtbikuIElmIG5vdCBwcm92aWRlZCwgdG9nZ2xlcyB0aGUgc29ydGluZy5cblx0Ki9cbiAgICBwdWJsaWMgc29ydEJ5KGNvbHVtbkRlZmluaXRpb246IGFueSwgc29ydE9yZGVyPzogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNvcnRCeShjb2x1bW5EZWZpbml0aW9uLCBzb3J0T3JkZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNvcnRCeShjb2x1bW5EZWZpbml0aW9uLCBzb3J0T3JkZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBVbnNlbGVjdHMgb25lIG9yIG1vcmUgcm93cyAod2hlbiBzZWxlY3Rpb25Nb2RlIGlzICdtYW55JyBvciAnZXh0ZW5kZWQnKSBvciBhIHNpbmdsZSBjZWxsICh3aGVuIHNlbGVjdGlvbk1vZGUgaXMgJ2NlbGwnIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IGlzIHBhc3NlZCkuIFxuXHQqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyIHwgKHN0cmluZyB8IG51bWJlcilbXX0gcm93SWQuIFRoZSBpZCBvZiB0aGUgcm93IChvciBhbiBhcnJheSBvZiByb3cgaWRzKSB0byBzZWxlY3QgKG9yIG9mIHRoZSBjZWxsJ3MgcGFyZW50IHJvdyB3aGVuIDxzdHJvbmc+c2VsZWN0aW9uTW9kZTwvc3Ryb25nPiBpcyA8ZW0+J2NlbGwnPC9lbT4pLiBDYW4gYmUgcmV0cmlldmVkIGZyb20gdGhlIDxzdHJvbmc+cm93czwvc3Ryb25nPiBjb2xsZWN0aW9uLlxuXHQqIEBwYXJhbSB7c3RyaW5nfSBkYXRhRmllbGQ/LiBUaGUgZGF0YUZpZWxkIG9mIHRoZSBkeW5hbWljIGNvbHVtbiAoY2FuIGJlIHJldHJpZXZlZCBieSBjYWxsaW5nIDxzdHJvbmc+Z2V0RHluYW1pY0NvbHVtbnM8L3N0cm9uZz4pIG9mIHRoZSBjZWxsIHRvIHNlbGVjdCAob25seSBhcHBsaWNhYmxlIHdoZW4gPHN0cm9uZz5zZWxlY3Rpb25Nb2RlPC9zdHJvbmc+IGlzIDxlbT4nY2VsbCc8L2VtPikuXG5cdCovXG4gICAgcHVibGljIHVuc2VsZWN0KHJvd0lkOiBzdHJpbmcgfCBudW1iZXIgfCAoc3RyaW5nIHwgbnVtYmVyKVtdLCBkYXRhRmllbGQ/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQudW5zZWxlY3Qocm93SWQsIGRhdGFGaWVsZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQudW5zZWxlY3Qocm93SWQsIGRhdGFGaWVsZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cdGdldCBpc1JlbmRlcmVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCA6IGZhbHNlO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXG4gICAgICB0aGF0Lm9uQ3JlYXRlLmVtaXQodGhhdC5uYXRpdmVFbGVtZW50KTtcblxuXHRcdFNtYXJ0LlJlbmRlcigpO1xuXG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7IHRoYXQub25SZWFkeS5lbWl0KHRoYXQubmF0aXZlRWxlbWVudCk7IH0pO1xuXHRcdHRoaXMubGlzdGVuKCk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLnVubGlzdGVuKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdFx0aWYgKHRoaXMubmF0aXZlRWxlbWVudCAmJiB0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuXHRcdFx0Zm9yIChjb25zdCBwcm9wTmFtZSBpbiBjaGFuZ2VzKSB7XG5cdFx0XHRcdGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuXHRcdFx0XHRcdHRoaXMubmF0aXZlRWxlbWVudFtwcm9wTmFtZV0gPSBjaGFuZ2VzW3Byb3BOYW1lXS5jdXJyZW50VmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEFkZCBldmVudCBsaXN0ZW5lcnMuICovXG5cdHByaXZhdGUgbGlzdGVuKCk6IHZvaWQge1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2NlbGxDbGlja0hhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNlbGxDbGljay5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjZWxsQ2xpY2snLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NlbGxDbGlja0hhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5nZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNoYW5nZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5nZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtbkNsaWNrSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ29sdW1uQ2xpY2suZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29sdW1uQ2xpY2snLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtbkNsaWNrSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY29sbGFwc2VIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Db2xsYXBzZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjb2xsYXBzZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29sbGFwc2VIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjb2xsYXBzZVRvdGFsQ29sdW1uSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ29sbGFwc2VUb3RhbENvbHVtbi5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjb2xsYXBzZVRvdGFsQ29sdW1uJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb2xsYXBzZVRvdGFsQ29sdW1uSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snZXhwYW5kSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uRXhwYW5kLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2V4cGFuZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snZXhwYW5kSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snZXhwYW5kVG90YWxDb2x1bW5IYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25FeHBhbmRUb3RhbENvbHVtbi5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdleHBhbmRUb3RhbENvbHVtbicsIHRoYXQuZXZlbnRIYW5kbGVyc1snZXhwYW5kVG90YWxDb2x1bW5IYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydmaWx0ZXJIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25GaWx0ZXIuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZmlsdGVyJywgdGhhdC5ldmVudEhhbmRsZXJzWydmaWx0ZXJIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydzb3J0SGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uU29ydC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzb3J0JywgdGhhdC5ldmVudEhhbmRsZXJzWydzb3J0SGFuZGxlciddKTtcblxuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZW1vdmUgZXZlbnQgbGlzdGVuZXJzLiAqL1xuXHRwcml2YXRlIHVubGlzdGVuKCk6IHZvaWQge1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjZWxsQ2xpY2tIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjZWxsQ2xpY2snLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NlbGxDbGlja0hhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY2hhbmdlSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhhdC5ldmVudEhhbmRsZXJzWydjaGFuZ2VIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtbkNsaWNrSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY29sdW1uQ2xpY2snLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtbkNsaWNrSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjb2xsYXBzZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbGxhcHNlJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb2xsYXBzZUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY29sbGFwc2VUb3RhbENvbHVtbkhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbGxhcHNlVG90YWxDb2x1bW4nLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbGxhcHNlVG90YWxDb2x1bW5IYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2V4cGFuZEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2V4cGFuZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snZXhwYW5kSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydleHBhbmRUb3RhbENvbHVtbkhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2V4cGFuZFRvdGFsQ29sdW1uJywgdGhhdC5ldmVudEhhbmRsZXJzWydleHBhbmRUb3RhbENvbHVtbkhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snZmlsdGVySGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQub25maWx0ZXJIYW5kbGVyID0gbnVsbDtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydzb3J0SGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc29ydCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snc29ydEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdH1cbn1cbiJdfQ==