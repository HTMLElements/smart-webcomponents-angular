import * as tslib_1 from "tslib";
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Smart } from './smart.element';
let TableComponent = class TableComponent extends BaseElement {
    constructor(ref) {
        super(ref);
        this.eventHandlers = [];
        /** @description This event is triggered when a cell edit operation has been initiated.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	dataField, 	row, 	value)
        *   id - The id of the row.
        *   dataField - The data field of the cell's column.
        *   row - The data of the cell's row.
        *   value - The data value of the cell.
        */
        this.onCellBeginEdit = new EventEmitter();
        /** @description This event is triggered when a cell has been clicked.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	dataField, 	row, 	value, 	originalEvent)
        *   id - The cell's row id.
        *   dataField - The data field of the cell's column.
        *   row - The data of the cell's row.
        *   value - The data value of the cell.
        *   originalEvent - The 'click' event object.
        */
        this.onCellClick = new EventEmitter();
        /** @description This event is triggered when a cell has been edited.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	dataField, 	row, 	value)
        *   id - The id of the row.
        *   dataField - The data field of the cell's column.
        *   row - The new data of the cell's row.
        *   value - The data value of the cell.
        */
        this.onCellEndEdit = new EventEmitter();
        /** @description This event is triggered when the selection is changed. Within the event handler you can get the selection by using the 'getSelection' method.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	type)
        *   type - The type of action that initiated the selection change. Possible types: 'programmatic', 'interaction', 'remove'.
        */
        this.onChange = new EventEmitter();
        /** @description This event is triggered when a row has been collapsed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	record)
        *   id - The id of the collapsed row.
        *   record - The data of the collapsed row.
        */
        this.onCollapse = new EventEmitter();
        /** @description This event is triggered when a row has been expanded.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	record)
        *   id - The id of the expanded row.
        *   record - The (aggregated) data of the expanded row.
        */
        this.onExpand = new EventEmitter();
        /** @description This event is triggered when a column header cell has been clicked.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	dataField)
        *   dataField - The data field of the cell's column.
        */
        this.onColumnClick = new EventEmitter();
        /** @description This event is triggered when a column menu is closed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	dataField)
        *   dataField - The data field of the column.
        */
        this.onCloseColumnMenu = new EventEmitter();
        /** @description This event is triggered when a column has been resized via dragging or double-click.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	dataField, 	headerCellElement, 	width)
        *   dataField - The data field of the column.
        *   headerCellElement - The column's header cell HTML element.
        *   width - The new width of the column.
        */
        this.onColumnResize = new EventEmitter();
        /** @description This event is triggered when a filtering-related action is made.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	action, 	filters)
        *   action - The filtering action. Possible actions: 'add', 'remove'.
        *   filters - The added filters. Only when action is 'add'.
        */
        this.onFilter = new EventEmitter();
        /** @description This event is triggered when a grouping-related action is made.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	action, 	dataField, 	label, 	path)
        *   action - The grouping action. Possible actions: 'add', 'collapse', 'expand', 'remove'.
        *   dataField - The data field of the column whose grouping is modified.
        *   label - The label of the group (only when collapsing/expanding).
        *   path - The group's path (only when collapsing/expanding). The path includes the path to the expanded/collapsed group starting from the root group. The indexes are joined with '.'. This parameter is available when the 'action' is 'expand' or 'collapse'.
        */
        this.onGroup = new EventEmitter();
        /** @description This event is triggered when a column menu is opened.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	dataField)
        *   dataField - The data field of the column.
        */
        this.onOpenColumnMenu = new EventEmitter();
        /** @description This event is triggered when a paging-related action is made.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	action)
        *   action - The paging action. Possible actions: 'pageIndexChange', 'pageSizeChange'.
        */
        this.onPage = new EventEmitter();
        /** @description This event is triggered when a row edit operation has been initiated (only when editMode is 'row').
        *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	row)
        *   id - The id of the row.
        *   row - The data of the row.
        */
        this.onRowBeginEdit = new EventEmitter();
        /** @description This event is triggered when a row has been edited (only when editMode is 'row').
        *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	row)
        *   id - The id of the row.
        *   row - The new data of the row.
        */
        this.onRowEndEdit = new EventEmitter();
        /** @description This event is triggered when a column header cell has been clicked or sorting is applied programmatically using the Table API.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	columns, 	sortDataFields, 	sortOrders, 	sortDataTypes, 	type)
        *   columns - An array with information about the columns the Table has been sorted by.
        *   sortDataFields - An array with information about the data fields the Table has been sorted by.
        *   sortOrders - An array with information about the columns sort orders the Table has been sorted by.
        *   sortDataTypes - An array with information about the columns data types the Table has been sorted by.
        *   type - The type of action that initiated the data sort. Possible types: 'programmatic', 'interaction'
        */
        this.onSort = new EventEmitter();
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('smart-table');
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
    /** @description Enables or disables auto load state from the browser's localStorage. Information about columns, expanded rows, selected rows, applied fitering, grouping, and sorted columns is loaded, based on the value of the stateSettings property. */
    get autoLoadState() {
        return this.nativeElement ? this.nativeElement.autoLoadState : undefined;
    }
    set autoLoadState(value) {
        this.nativeElement ? this.nativeElement.autoLoadState = value : undefined;
    }
    /** @description Enables or disables auto save state to the browser's localStorage. Information about columns, expanded rows, selected rows, applied fitering, grouping, and   sorted columns is saved, based on the value of the stateSettings property. */
    get autoSaveState() {
        return this.nativeElement ? this.nativeElement.autoSaveState : undefined;
    }
    set autoSaveState(value) {
        this.nativeElement ? this.nativeElement.autoSaveState = value : undefined;
    }
    /** @description Sets or gets a list of column groups that constitute the column header hierarchy. Note: when column header hierarchy is created, column resizing and auto-sizing is not supported. */
    get columnGroups() {
        return this.nativeElement ? this.nativeElement.columnGroups : undefined;
    }
    set columnGroups(value) {
        this.nativeElement ? this.nativeElement.columnGroups = value : undefined;
    }
    /** @description Sets or gets the min width of columns when columnSizeMode is 'auto' or when resizing columns. This property has no effect on columns with programmatically set width. */
    get columnMinWidth() {
        return this.nativeElement ? this.nativeElement.columnMinWidth : undefined;
    }
    set columnMinWidth(value) {
        this.nativeElement ? this.nativeElement.columnMinWidth = value : undefined;
    }
    /** @description Sets or gets whether the reordering of columns is enabled. */
    get columnReorder() {
        return this.nativeElement ? this.nativeElement.columnReorder : undefined;
    }
    set columnReorder(value) {
        this.nativeElement ? this.nativeElement.columnReorder = value : undefined;
    }
    /** @description Sets or gets whether the resizing of columns is enabled. Note: column sizes continue to adhere to the behavior of the standard HTML table element's table-layout: fixed, upon which smart-table is based. */
    get columnResize() {
        return this.nativeElement ? this.nativeElement.columnResize : undefined;
    }
    set columnResize(value) {
        this.nativeElement ? this.nativeElement.columnResize = value : undefined;
    }
    /** @description This property affects the table sizing, when the columnSizeMode is 'default'. When 'columnResizeNormalize' is false, the Table will add an additional TH element, if all table columns have the 'width' property set. This is done in order to maintain your width settings. Otherwise, when the property is set to true, the Table will auto-fill the remaining space similar to the layout of standard HTML Tables. */
    get columnResizeNormalize() {
        return this.nativeElement ? this.nativeElement.columnResizeNormalize : undefined;
    }
    set columnResizeNormalize(value) {
        this.nativeElement ? this.nativeElement.columnResizeNormalize = value : undefined;
    }
    /** @description Sets or gets whether when resizing a column, a feedback showing the new column width in px will be displayed. */
    get columnResizeFeedback() {
        return this.nativeElement ? this.nativeElement.columnResizeFeedback : undefined;
    }
    set columnResizeFeedback(value) {
        this.nativeElement ? this.nativeElement.columnResizeFeedback = value : undefined;
    }
    /** @description Describes the columns properties. */
    get columns() {
        return this.nativeElement ? this.nativeElement.columns : undefined;
    }
    set columns(value) {
        this.nativeElement ? this.nativeElement.columns = value : undefined;
    }
    /** @description Sets or gets details about conditional formatting to be applied to the Table's cells. */
    get conditionalFormatting() {
        return this.nativeElement ? this.nativeElement.conditionalFormatting : undefined;
    }
    set conditionalFormatting(value) {
        this.nativeElement ? this.nativeElement.conditionalFormatting = value : undefined;
    }
    /** @description Sets or gets the column sizing behavior. In 'auto' mode Columns are automatically sized based on their content and the value of the columnMinWidth property, unless there is not enough space in the Table, in which case ellipses are shown. User-set static column width is still respected. In 'default' mode Columns are sized according to the rules of the standard HTML table element's table-layout: fixed. Custom width can also be applied to columns in this case by setting the column width property. */
    get columnSizeMode() {
        return this.nativeElement ? this.nativeElement.columnSizeMode : undefined;
    }
    set columnSizeMode(value) {
        this.nativeElement ? this.nativeElement.columnSizeMode = value : undefined;
    }
    /** @description Sets or gets whether the "Conditional Formatting" button appears in the Table's header (toolbar). Clicking this button opens a dialog with formatting options. */
    get conditionalFormattingButton() {
        return this.nativeElement ? this.nativeElement.conditionalFormattingButton : undefined;
    }
    set conditionalFormattingButton(value) {
        this.nativeElement ? this.nativeElement.conditionalFormattingButton = value : undefined;
    }
    /** @description This property determines the time in milliseconds after which the Table data is updated, when you vertically scroll. */
    get deferredScrollDelay() {
        return this.nativeElement ? this.nativeElement.deferredScrollDelay : undefined;
    }
    set deferredScrollDelay(value) {
        this.nativeElement ? this.nativeElement.deferredScrollDelay = value : undefined;
    }
    /** @description When binding the dataSource property directly to an array (as opposed to an instance of JQX.DataAdapter), sets or gets the name of the data field in the source array to bind row ids to. */
    get dataRowId() {
        return this.nativeElement ? this.nativeElement.dataRowId : undefined;
    }
    set dataRowId(value) {
        this.nativeElement ? this.nativeElement.dataRowId = value : undefined;
    }
    /** @description Determines the data source of the table component. The data source of the Table can be a regular Array or a DataAdapter instance. You can read more about the dataAdapter here - https://www.htmlelements.com/docs/data-adapter/. */
    get dataSource() {
        return this.nativeElement ? this.nativeElement.dataSource : undefined;
    }
    set dataSource(value) {
        this.nativeElement ? this.nativeElement.dataSource = value : undefined;
    }
    /** @description Sets the grid's data source settings when the dataSource property is set to an Array or URL. */
    get dataSourceSettings() {
        return this.nativeElement ? this.nativeElement.dataSourceSettings : undefined;
    }
    set dataSourceSettings(value) {
        this.nativeElement ? this.nativeElement.dataSourceSettings = value : undefined;
    }
    /** @description Disables the interaction with the element. */
    get dataTransform() {
        return this.nativeElement ? this.nativeElement.dataTransform : undefined;
    }
    set dataTransform(value) {
        this.nativeElement ? this.nativeElement.dataTransform = value : undefined;
    }
    /** @description Sets or gets whether the Table can be edited. */
    get disabled() {
        return this.nativeElement ? this.nativeElement.disabled : undefined;
    }
    set disabled(value) {
        this.nativeElement ? this.nativeElement.disabled = value : undefined;
    }
    /** @description Sets or gets the edit mode. */
    get editing() {
        return this.nativeElement ? this.nativeElement.editing : undefined;
    }
    set editing(value) {
        this.nativeElement ? this.nativeElement.editing = value : undefined;
    }
    /** @description Sets or gets whether Row hierarchies are expanded by default, when created. Use this property when you want your groups to be expanded by default, when the Table is grouped or when you use the Table in tree mode. */
    get editMode() {
        return this.nativeElement ? this.nativeElement.editMode : undefined;
    }
    set editMode(value) {
        this.nativeElement ? this.nativeElement.editMode = value : undefined;
    }
    /** @description Sets or gets whether the Table can be filtered. By default, the Table can be filtered by all string and numeric columns through a filter input in the header. */
    get expandHierarchy() {
        return this.nativeElement ? this.nativeElement.expandHierarchy : undefined;
    }
    set expandHierarchy(value) {
        this.nativeElement ? this.nativeElement.expandHierarchy = value : undefined;
    }
    /** @description Sets or gets whether the Table can be filtered via a filter row. */
    get filtering() {
        return this.nativeElement ? this.nativeElement.filtering : undefined;
    }
    set filtering(value) {
        this.nativeElement ? this.nativeElement.filtering = value : undefined;
    }
    /** @description Sets or gets the id of an HTML template element to be applied as a custom filter template. */
    get filterRow() {
        return this.nativeElement ? this.nativeElement.filterRow : undefined;
    }
    set filterRow(value) {
        this.nativeElement ? this.nativeElement.filterRow = value : undefined;
    }
    /** @description Sets or gets the id of an HTML template element to be applied as footer row(s). */
    get filterTemplate() {
        return this.nativeElement ? this.nativeElement.filterTemplate : undefined;
    }
    set filterTemplate(value) {
        this.nativeElement ? this.nativeElement.filterTemplate = value : undefined;
    }
    /** @description Sets or gets whether Excel-like formulas can be passed as cell values. Formulas are always preceded by the = sign and are re-evaluated when cell values are changed. This feature depends on the third-party free plug-in formula-parser (the file formula-parser.min.js has to be referenced). */
    get footerRow() {
        return this.nativeElement ? this.nativeElement.footerRow : undefined;
    }
    set footerRow(value) {
        this.nativeElement ? this.nativeElement.footerRow = value : undefined;
    }
    /** @description Sets or gets whether the Table's footer is sticky/frozen. */
    get formulas() {
        return this.nativeElement ? this.nativeElement.formulas : undefined;
    }
    set formulas(value) {
        this.nativeElement ? this.nativeElement.formulas = value : undefined;
    }
    /** @description Sets or gets whether the Table's column header is sticky/frozen. */
    get freezeFooter() {
        return this.nativeElement ? this.nativeElement.freezeFooter : undefined;
    }
    set freezeFooter(value) {
        this.nativeElement ? this.nativeElement.freezeFooter = value : undefined;
    }
    /** @description Sets or gets whether grouping the Table is enabled. */
    get freezeHeader() {
        return this.nativeElement ? this.nativeElement.freezeHeader : undefined;
    }
    set freezeHeader(value) {
        this.nativeElement ? this.nativeElement.freezeHeader = value : undefined;
    }
    /** @description Allows to customize the header of the element. The property accepts the id of an HTMLElement, HTMLTemplateElement, function or a string that will be parsed as HTML. When set to a function it contains one argument - the header element of the Table. */
    get grouping() {
        return this.nativeElement ? this.nativeElement.grouping : undefined;
    }
    set grouping(value) {
        this.nativeElement ? this.nativeElement.grouping = value : undefined;
    }
    /** @description Sets or gets whether navigation with the keyboard is enabled in the Table. */
    get groupFormatFunction() {
        return this.nativeElement ? this.nativeElement.groupFormatFunction : undefined;
    }
    set groupFormatFunction(value) {
        this.nativeElement ? this.nativeElement.groupFormatFunction = value : undefined;
    }
    /** @description Sets or gets the behavior when loading column settings either via autoLoadState or loadState. Applicable only when stateSettings contains 'columns'. */
    get headerRow() {
        return this.nativeElement ? this.nativeElement.headerRow : undefined;
    }
    set headerRow(value) {
        this.nativeElement ? this.nativeElement.headerRow = value : undefined;
    }
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    get keyboardNavigation() {
        return this.nativeElement ? this.nativeElement.keyboardNavigation : undefined;
    }
    set keyboardNavigation(value) {
        this.nativeElement ? this.nativeElement.keyboardNavigation = value : undefined;
    }
    /** @description Sets or gets an object specifying strings used in the element that can be localized. Used in conjunction with the property locale.  */
    get loadColumnStateBehavior() {
        return this.nativeElement ? this.nativeElement.loadColumnStateBehavior : undefined;
    }
    set loadColumnStateBehavior(value) {
        this.nativeElement ? this.nativeElement.loadColumnStateBehavior = value : undefined;
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
    get onCellRender() {
        return this.nativeElement ? this.nativeElement.onCellRender : undefined;
    }
    set onCellRender(value) {
        this.nativeElement ? this.nativeElement.onCellRender = value : undefined;
    }
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    get onColumnRender() {
        return this.nativeElement ? this.nativeElement.onColumnRender : undefined;
    }
    set onColumnRender(value) {
        this.nativeElement ? this.nativeElement.onColumnRender = value : undefined;
    }
    /** @description Sets or gets a string template to be applied as row detail template. Each cell value in the master row can be placed in the detail row by specifying the cell's data field in double curly brackets (e.g. {{price}}. The details can then be displayed by expanding the row by clicking it. */
    get onInit() {
        return this.nativeElement ? this.nativeElement.onInit : undefined;
    }
    set onInit(value) {
        this.nativeElement ? this.nativeElement.onInit = value : undefined;
    }
    /** @description Sets or gets an array of the Table's selected row's ids. */
    get pageSize() {
        return this.nativeElement ? this.nativeElement.pageSize : undefined;
    }
    set pageSize(value) {
        this.nativeElement ? this.nativeElement.pageSize = value : undefined;
    }
    /** @description Sets or gets whether row selection (via checkboxes) is enabled. */
    get pageIndex() {
        return this.nativeElement ? this.nativeElement.pageIndex : undefined;
    }
    set pageIndex(value) {
        this.nativeElement ? this.nativeElement.pageIndex = value : undefined;
    }
    /** @description Sets or gets the selection mode. Only applicable when selection is enabled. */
    get paging() {
        return this.nativeElement ? this.nativeElement.paging : undefined;
    }
    set paging(value) {
        this.nativeElement ? this.nativeElement.paging = value : undefined;
    }
    /** @description Sets or gets whether row selection (via checkboxes) is hierarchical. When a parent row is selected, all sub rows are selected, too. */
    get rightToLeft() {
        return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
    }
    set rightToLeft(value) {
        this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
    }
    /** @description Determines the sorting mode of the Table. */
    get rowDetailTemplate() {
        return this.nativeElement ? this.nativeElement.rowDetailTemplate : undefined;
    }
    set rowDetailTemplate(value) {
        this.nativeElement ? this.nativeElement.rowDetailTemplate = value : undefined;
    }
    /** @description Sets or gets what settings of the Table's state can be saved (by autoSaveState or saveState) or loaded (by autoLoadState or loadState). */
    get selected() {
        return this.nativeElement ? this.nativeElement.selected : undefined;
    }
    set selected(value) {
        this.nativeElement ? this.nativeElement.selected = value : undefined;
    }
    /** @description Determines the theme. Theme defines the look of the element */
    get selection() {
        return this.nativeElement ? this.nativeElement.selection : undefined;
    }
    set selection(value) {
        this.nativeElement ? this.nativeElement.selection = value : undefined;
    }
    /** @description Sets or gets whether when hovering a cell with truncated content, a tooltip with the full content will be shown. */
    get selectionMode() {
        return this.nativeElement ? this.nativeElement.selectionMode : undefined;
    }
    set selectionMode(value) {
        this.nativeElement ? this.nativeElement.selectionMode = value : undefined;
    }
    /** @description Enables or disables HTML virtualization. This functionality allows for only visible rows to be rendered, resulting in an increased Table performance. */
    get selectionByHierarchy() {
        return this.nativeElement ? this.nativeElement.selectionByHierarchy : undefined;
    }
    set selectionByHierarchy(value) {
        this.nativeElement ? this.nativeElement.selectionByHierarchy = value : undefined;
    }
    /** @description undefined */
    get sort() {
        return this.nativeElement ? this.nativeElement.sort : undefined;
    }
    set sort(value) {
        this.nativeElement ? this.nativeElement.sort = value : undefined;
    }
    /** @description undefined */
    get sortMode() {
        return this.nativeElement ? this.nativeElement.sortMode : undefined;
    }
    set sortMode(value) {
        this.nativeElement ? this.nativeElement.sortMode = value : undefined;
    }
    /** @description undefined */
    get stateSettings() {
        return this.nativeElement ? this.nativeElement.stateSettings : undefined;
    }
    set stateSettings(value) {
        this.nativeElement ? this.nativeElement.stateSettings = value : undefined;
    }
    /** @description undefined */
    get theme() {
        return this.nativeElement ? this.nativeElement.theme : undefined;
    }
    set theme(value) {
        this.nativeElement ? this.nativeElement.theme = value : undefined;
    }
    /** @description undefined */
    get tooltip() {
        return this.nativeElement ? this.nativeElement.tooltip : undefined;
    }
    set tooltip(value) {
        this.nativeElement ? this.nativeElement.tooltip = value : undefined;
    }
    /** @description undefined */
    get virtualization() {
        return this.nativeElement ? this.nativeElement.virtualization : undefined;
    }
    set virtualization(value) {
        this.nativeElement ? this.nativeElement.virtualization = value : undefined;
    }
    /** @description Adds a new row. When you invoke the method, pass a JSON object with the row's data.
    * @param {any} data. JSON object with the new row's data. Sample JSON: {firstName: 'Peter', lastName: 'Fuller'}.
    */
    addRow(data) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addRow(data);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addRow(data);
            });
        }
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
    /** @description Groups by a column.
    * @param {string} dataField. The column's data field.
    */
    addGroup(dataField) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addGroup(dataField);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addGroup(dataField);
            });
        }
    }
    /** @description Begins an edit operation.
    * @param {string | number} row. The id of the row to edit.
    * @param {string} dataField?. The dataField of the cell's column. May be omitted when <strong>editMode</strong> is <em>'row'</em>.
    */
    beginEdit(row, dataField) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.beginEdit(row, dataField);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.beginEdit(row, dataField);
            });
        }
    }
    /** @description Begins an update operation. Suspends all table refreshes and renders.
    */
    beginUpdate() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.beginUpdate();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.beginUpdate();
            });
        }
    }
    /** @description Ends the current edit operation and discards changes.
    */
    cancelEdit() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.cancelEdit();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.cancelEdit();
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
    /** @description Clears grouping.
    */
    clearGrouping() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearGrouping();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clearGrouping();
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
    /** @description Clears the Table sorting.
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
    /** @description Collapses all rows (in tree mode).
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
    /** @description Collapses all groups (in tree mode).
    */
    collapseAllGroups() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapseAllGroups();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.collapseAllGroups();
            });
        }
    }
    /** @description Collapses all row details. Rows that have details defined via the rowDetailTemplate will be collapsed.
    */
    collapseAllRowDetails() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapseAllRowDetails();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.collapseAllRowDetails();
            });
        }
    }
    /** @description Collapses a group.
    * @param {string} index. The group's hierarchical index.
    */
    collapseGroup(index) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapseGroup(index);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.collapseGroup(index);
            });
        }
    }
    /** @description Collapses a row (in tree mode).
    * @param {string | number} rowId. The id of the row to collapse.
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
    /** @description Disables a selection of a row. When the 'selection' property is set to 'true', selection is enabled for all rows by default.
    * @param {string | number | (string | number)[]} rowId. The id of the row (or an array of row ids) to select.
    */
    disableSelect(rowId) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.disableSelect(rowId);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.disableSelect(rowId);
            });
        }
    }
    /** @description Enables a selection of a row, if it was previously disabled through a 'disableSelect' method call. When the 'selection' property is set to 'true', selection is enabled for all rows by default.
    * @param {string | number | (string | number)[]} rowId. The id of the row (or an array of row ids) to select.
    */
    enableSelect(rowId) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.enableSelect(rowId);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.enableSelect(rowId);
            });
        }
    }
    /** @description Ends the current edit operation and saves changes.
    */
    endEdit() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.endEdit();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.endEdit();
            });
        }
    }
    /** @description Ends an update operation. Resumes all table refreshes and renders. Re-renders the Table.
    * @param {boolean} refresh?. Optionally you can pass 'false' in case you need to manually call the 'refresh' method. By default, the table is re-rendered.
    */
    endUpdate(refresh) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.endUpdate(refresh);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.endUpdate(refresh);
            });
        }
    }
    /** @description Expands all rows (in tree mode).
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
    /** @description Expands all groups (in tree mode).
    */
    expandAllGroups() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.expandAllGroups();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.expandAllGroups();
            });
        }
    }
    /** @description Expands all row details. Rows that have details defined via rowDetailTemplate will be expanded.
    */
    expandAllRowDetails() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.expandAllRowDetails();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.expandAllRowDetails();
            });
        }
    }
    /** @description Expands a group.
    * @param {string} index. The group's hierarchical index.
    */
    expandGroup(index) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.expandGroup(index);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.expandGroup(index);
            });
        }
    }
    /** @description Expands a row (in tree mode).
    * @param {string | number} rowId. The id of the row to expand.
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
    /** @description Exports the Table's data.
    * @param {string} dataFormat. The file format to export to. Supported formats: 'csv', 'html', 'json', 'pdf', 'tsv', 'xlsx', 'xml'.
    * @param {string} fileName?. The name of the file to export to
    * @param {boolean} exportFiltered?. If set to true, exports only filtered records
    * @param {Function} callback?. A callback function to pass the exported data to (if fileName is not provided)
    * @returns {any}
  */
    exportData(dataFormat, fileName, exportFiltered, callback) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.exportData(dataFormat, fileName, exportFiltered, callback);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Returns an array of selected row ids.
    * @returns {(string | number)[]}
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
    /** @description Returns the Table's state, containing information about columns, expanded rows, selected rows, applied fitering, grouping, and sorted columns. It can then be stored or passed to the method loadState.
    * @returns {any}
  */
    getState() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getState();
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Returns the value of a cell.
    * @param {string | number} row. The id of the cell's row.
    * @param {string} dataField. The dataField of the cell's column.
    * @returns {any}
  */
    getValue(row, dataField) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getValue(row, dataField);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Gets a column property.
    * @param {string} columnDataField. Column field name.
    * @param {string} propertyName. Column property name.
    * @returns {any}
  */
    getColumnProperty(columnDataField, propertyName) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getColumnProperty(columnDataField, propertyName);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Checks whether a group is expanded and returns true or false. false is returned when the group index is undefined, too.
    * @param {string} index. The group's hierarchical index.
    * @returns {boolean}
  */
    isGroupExpanded(index) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.isGroupExpanded(index);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Loads the Table's state. Information about columns, expanded rows, selected rows, applied fitering, grouping, and sorted columns is loaded, based on the value of the stateSettings property.
    * @param {any} state?. An object returned by one of the methods <strong>getState</strong> or <strong>saveState</strong>. If a state is not passed, the method tries to load the state from the browser's localStorage.
    */
    loadState(state) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.loadState(state);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.loadState(state);
            });
        }
    }
    /** @description Navigates to a page.
    * @param {number} pageIndex. The zero-based page index to navigate to.
    */
    navigateTo(pageIndex) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.navigateTo(pageIndex);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.navigateTo(pageIndex);
            });
        }
    }
    /** @description Refreshes the table.
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
    /** @description Removes grouping by a column.
    * @param {string} dataField. The column's data field.
    */
    removeGroup(dataField) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeGroup(dataField);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeGroup(dataField);
            });
        }
    }
    /** @description Removes a row by its id.
    * @param {string | number} row. The id of the cell's row.
    */
    removeRow(row) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeRow(row);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeRow(row);
            });
        }
    }
    /** @description Saves the Table's state. Information about columns, expanded rows, selected rows, applied fitering, grouping, and sorted columns is saved, based on the value of the stateSettings property.
    * @returns {any}
  */
    saveState() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.saveState();
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Selects one or more rows.
    * @param {string | number | (string | number)[]} rowId. The id of the row (or an array of row ids) to select.
    */
    select(rowId) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.select(rowId);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.select(rowId);
            });
        }
    }
    /** @description Sets the value of a cell.
    * @param {string | number} row. The id of the cell's row.
    * @param {string} dataField. The dataField of the cell's column.
    * @param {any} value. The new value of the cell.
    */
    setValue(row, dataField, value) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.setValue(row, dataField, value);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.setValue(row, dataField, value);
            });
        }
    }
    /** @description Sorts the Table by a column.
    * @param {string} columnDataField. Column field name.
    * @param {string} sortOrder?. Sort order. Possible values: 'asc' (ascending), 'desc' (descending), and null (removes sorting by column). If not provided, toggles the sorting.
    */
    sortBy(columnDataField, sortOrder) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.sortBy(columnDataField, sortOrder);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.sortBy(columnDataField, sortOrder);
            });
        }
    }
    /** @description Sets a column property.
    * @param {string} columnDataField. Column field name.
    * @param {string} propertyName. Column property name.
    * @param {any} propertyValue. Property value.
    */
    setColumnProperty(columnDataField, propertyName, propertyValue) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.setColumnProperty(columnDataField, propertyName, propertyValue);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.setColumnProperty(columnDataField, propertyName, propertyValue);
            });
        }
    }
    /** @description Updates a table row. The method expects two parameters - row id and JSON object with the new row data.
    * @param {string | number} rowId. The id of the row.
    * @param {any} data. JSON object with the new row's data. Example: {firstName: 'Peter', lastName: 'Fuller'}.
    */
    updateRow(rowId, data) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.updateRow(rowId, data);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.updateRow(rowId, data);
            });
        }
    }
    /** @description Unselects one or more rows.
    * @param {string | number | (string | number)[]} rowId. The id of the row (or an array of row ids) to unselect.
    */
    unselect(rowId) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.unselect(rowId);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.unselect(rowId);
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
        that.eventHandlers['cellBeginEditHandler'] = (event) => { that.onCellBeginEdit.emit(event); };
        that.nativeElement.addEventListener('cellBeginEdit', that.eventHandlers['cellBeginEditHandler']);
        that.eventHandlers['cellClickHandler'] = (event) => { that.onCellClick.emit(event); };
        that.nativeElement.addEventListener('cellClick', that.eventHandlers['cellClickHandler']);
        that.eventHandlers['cellEndEditHandler'] = (event) => { that.onCellEndEdit.emit(event); };
        that.nativeElement.addEventListener('cellEndEdit', that.eventHandlers['cellEndEditHandler']);
        that.eventHandlers['changeHandler'] = (event) => { that.onChange.emit(event); };
        that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
        that.eventHandlers['collapseHandler'] = (event) => { that.onCollapse.emit(event); };
        that.nativeElement.addEventListener('collapse', that.eventHandlers['collapseHandler']);
        that.eventHandlers['expandHandler'] = (event) => { that.onExpand.emit(event); };
        that.nativeElement.addEventListener('expand', that.eventHandlers['expandHandler']);
        that.eventHandlers['columnClickHandler'] = (event) => { that.onColumnClick.emit(event); };
        that.nativeElement.addEventListener('columnClick', that.eventHandlers['columnClickHandler']);
        that.eventHandlers['closeColumnMenuHandler'] = (event) => { that.onCloseColumnMenu.emit(event); };
        that.nativeElement.addEventListener('closeColumnMenu', that.eventHandlers['closeColumnMenuHandler']);
        that.eventHandlers['columnResizeHandler'] = (event) => { that.onColumnResize.emit(event); };
        that.nativeElement.addEventListener('columnResize', that.eventHandlers['columnResizeHandler']);
        that.eventHandlers['filterHandler'] = (event) => { that.onFilter.emit(event); };
        that.nativeElement.addEventListener('filter', that.eventHandlers['filterHandler']);
        that.eventHandlers['groupHandler'] = (event) => { that.onGroup.emit(event); };
        that.nativeElement.addEventListener('group', that.eventHandlers['groupHandler']);
        that.eventHandlers['openColumnMenuHandler'] = (event) => { that.onOpenColumnMenu.emit(event); };
        that.nativeElement.addEventListener('openColumnMenu', that.eventHandlers['openColumnMenuHandler']);
        that.eventHandlers['pageHandler'] = (event) => { that.onPage.emit(event); };
        that.nativeElement.addEventListener('page', that.eventHandlers['pageHandler']);
        that.eventHandlers['rowBeginEditHandler'] = (event) => { that.onRowBeginEdit.emit(event); };
        that.nativeElement.addEventListener('rowBeginEdit', that.eventHandlers['rowBeginEditHandler']);
        that.eventHandlers['rowEndEditHandler'] = (event) => { that.onRowEndEdit.emit(event); };
        that.nativeElement.addEventListener('rowEndEdit', that.eventHandlers['rowEndEditHandler']);
        that.eventHandlers['sortHandler'] = (event) => { that.onSort.emit(event); };
        that.nativeElement.addEventListener('sort', that.eventHandlers['sortHandler']);
    }
    /** @description Remove event listeners. */
    unlisten() {
        const that = this;
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
    }
};
TableComponent.ctorParameters = () => [
    { type: ElementRef }
];
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
export { TableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQudGFibGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zbWFydC13ZWJjb21wb25lbnRzLWFuZ3VsYXIvdGFibGUvIiwic291cmNlcyI6WyJzbWFydC50YWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUosT0FBTyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVyRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFReEMsSUFBYSxjQUFjLEdBQTNCLE1BQWEsY0FBZSxTQUFRLFdBQVc7SUFDOUMsWUFBWSxHQUFzQjtRQUNqQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFJSixrQkFBYSxHQUFVLEVBQUUsQ0FBQztRQW1mbEM7Ozs7OztVQU1FO1FBQ1Esb0JBQWUsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUxRTs7Ozs7OztVQU9FO1FBQ1EsZ0JBQVcsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV0RTs7Ozs7O1VBTUU7UUFDUSxrQkFBYSxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXhFOzs7VUFHRTtRQUNRLGFBQVEsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVuRTs7OztVQUlFO1FBQ1EsZUFBVSxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXJFOzs7O1VBSUU7UUFDUSxhQUFRLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFbkU7OztVQUdFO1FBQ1Esa0JBQWEsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV4RTs7O1VBR0U7UUFDUSxzQkFBaUIsR0FBOEIsSUFBSSxZQUFZLEVB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LEVBQUU7bURBR1A7QUFPRDtJQURDLEtBQUssRUFBRTswREFHUDtBQU9EO0lBREMsS0FBSyxFQUFFOzBDQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7OENBR1A7QUFPRDtJQURDLEtBQUssRUFBRTttREFHUDtBQU9EO0lBREMsS0FBSyxFQUFFOzJDQUdQO0FBT0Q7SUFEQyxLQUFLLEVBQUU7NkNBR1A7QUFPRDtJQURDLEtBQUssRUFBRTtvREFHUDtBQVlTO0lBQVQsTUFBTSxFQUFFO3VEQUFpRTtBQVVoRTtJQUFULE1BQU0sRUFBRTttREFBNkQ7QUFTNUQ7SUFBVCxNQUFNLEVBQUU7cURBQStEO0FBTTlEO0lBQVQsTUFBTSxFQUFFO2dEQUEwRDtBQU96RDtJQUFULE1BQU0sRUFBRTtrREFBNEQ7QUFPM0Q7SUFBVCxNQUFNLEVBQUU7Z0RBQTBEO0FBTXpEO0lBQVQsTUFBTSxFQUFFO3FEQUErRDtBQU05RDtJQUFULE1BQU0sRUFBRTt5REFBbUU7QUFRbEU7SUFBVCxNQUFNLEVBQUU7c0RBQWdFO0FBTy9EO0lBQVQsTUFBTSxFQUFFO2dEQUEwRDtBQVN6RDtJQUFULE1BQU0sRUFBRTsrQ0FBeUQ7QUFNeEQ7SUFBVCxNQUFNLEVBQUU7d0RBQWtFO0FBTWpFO0lBQVQsTUFBTSxFQUFFOzhDQUF3RDtBQU92RDtJQUFULE1BQU0sRUFBRTtzREFBZ0U7QUFPL0Q7SUFBVCxNQUFNLEVBQUU7b0RBQThEO0FBVTdEO0lBQVQsTUFBTSxFQUFFOzhDQUF3RDtBQS9tQnJELGNBQWM7SUFKMUIsU0FBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLDRCQUE0QjtLQUN0QyxDQUFDO0dBRVcsY0FBYyxDQW02QzFCO1NBbjZDWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGFibGUgfSBmcm9tICcuLy4uL2luZGV4JztcbmltcG9ydCB7IEFuaW1hdGlvbiwgVGFibGVDb2x1bW5EYXRhVHlwZSwgVGFibGVDb2x1bW5GcmVlemUsIFRhYmxlQ29uZGl0aW9uYWxGb3JtYXR0aW5nQ29uZGl0aW9uLCBUYWJsZUNvbmRpdGlvbmFsRm9ybWF0dGluZ0ZvbnRGYW1pbHksIFRhYmxlQ29uZGl0aW9uYWxGb3JtYXR0aW5nRm9udFNpemUsIFRhYmxlQ29sdW1uU2l6ZU1vZGUsIFRhYmxlRGF0YVNvdXJjZVNldHRpbmdzU2FuaXRpemVIVE1MLCBUYWJsZURhdGFTb3VyY2VTZXR0aW5nc1Nhbml0aXplSFRNTFJlbmRlciwgVGFibGVEYXRhU291cmNlU2V0dGluZ3NEYXRhRmllbGREYXRhVHlwZSwgVGFibGVEYXRhU291cmNlU2V0dGluZ3NEYXRhU291cmNlVHlwZSwgVGFibGVFZGl0TW9kZSwgVGFibGVMb2FkQ29sdW1uU3RhdGVCZWhhdmlvciwgVGFibGVQYWdlU2l6ZSwgVGFibGVTZWxlY3Rpb25Nb2RlLCBUYWJsZVNvcnRNb2RlLCBUYWJsZUNvbHVtbkdyb3VwLCBUYWJsZUNvbHVtbiwgVGFibGVDb25kaXRpb25hbEZvcm1hdHRpbmcsIFRhYmxlRGF0YVNvdXJjZVNldHRpbmdzLCBUYWJsZURhdGFTb3VyY2VTZXR0aW5nc0RhdGFGaWVsZCwgRWxlbWVudFJlbmRlck1vZGV9IGZyb20gJy4vLi4vaW5kZXgnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBEaXJlY3RpdmUsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBTaW1wbGVDaGFuZ2VzLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFzZUVsZW1lbnQsIFNtYXJ0IH0gZnJvbSAnLi9zbWFydC5lbGVtZW50JztcbmV4cG9ydCB7IEFuaW1hdGlvbiwgVGFibGVDb2x1bW5EYXRhVHlwZSwgVGFibGVDb2x1bW5GcmVlemUsIFRhYmxlQ29uZGl0aW9uYWxGb3JtYXR0aW5nQ29uZGl0aW9uLCBUYWJsZUNvbmRpdGlvbmFsRm9ybWF0dGluZ0ZvbnRGYW1pbHksIFRhYmxlQ29uZGl0aW9uYWxGb3JtYXR0aW5nRm9udFNpemUsIFRhYmxlQ29sdW1uU2l6ZU1vZGUsIFRhYmxlRGF0YVNvdXJjZVNldHRpbmdzU2FuaXRpemVIVE1MLCBUYWJsZURhdGFTb3VyY2VTZXR0aW5nc1Nhbml0aXplSFRNTFJlbmRlciwgVGFibGVEYXRhU291cmNlU2V0dGluZ3NEYXRhRmllbGREYXRhVHlwZSwgVGFibGVEYXRhU291cmNlU2V0dGluZ3NEYXRhU291cmNlVHlwZSwgVGFibGVFZGl0TW9kZSwgVGFibGVMb2FkQ29sdW1uU3RhdGVCZWhhdmlvciwgVGFibGVQYWdlU2l6ZSwgVGFibGVTZWxlY3Rpb25Nb2RlLCBUYWJsZVNvcnRNb2RlLCBUYWJsZUNvbHVtbkdyb3VwLCBUYWJsZUNvbHVtbiwgVGFibGVDb25kaXRpb25hbEZvcm1hdHRpbmcsIFRhYmxlRGF0YVNvdXJjZVNldHRpbmdzLCBUYWJsZURhdGFTb3VyY2VTZXR0aW5nc0RhdGFGaWVsZCwgRWxlbWVudFJlbmRlck1vZGV9IGZyb20gJy4vLi4vaW5kZXgnO1xuZXhwb3J0IHsgU21hcnQgfSBmcm9tICcuL3NtYXJ0LmVsZW1lbnQnO1xuZXhwb3J0IHsgVGFibGUgfSBmcm9tICcuLy4uL2luZGV4JztcblxuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdzbWFydC10YWJsZSwgW3NtYXJ0LXRhYmxlXSdcbn0pXG5cbmV4cG9ydCBjbGFzcyBUYWJsZUNvbXBvbmVudCBleHRlbmRzIEJhc2VFbGVtZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG5cdGNvbnN0cnVjdG9yKHJlZjogRWxlbWVudFJlZjxUYWJsZT4pIHtcblx0XHRzdXBlcihyZWYpO1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA9IHJlZi5uYXRpdmVFbGVtZW50IGFzIFRhYmxlO1xuXHR9XG5cblx0cHJpdmF0ZSBldmVudEhhbmRsZXJzOiBhbnlbXSA9IFtdO1xuXG5cdHB1YmxpYyBuYXRpdmVFbGVtZW50OiBUYWJsZTtcblx0LyoqIEBkZXNjcmlwdGlvbiBDcmVhdGVzIHRoZSBjb21wb25lbnQgb24gZGVtYW5kLlxuXHQgKiBAcGFyYW0gcHJvcGVydGllcyBBbiBvcHRpb25hbCBvYmplY3Qgb2YgcHJvcGVydGllcywgd2hpY2ggd2lsbCBiZSBhZGRlZCB0byB0aGUgdGVtcGxhdGUgYmluZGVkIG9uZXMuXG5cdCAqL1xuXHRwdWJsaWMgY3JlYXRlQ29tcG9uZW50KHByb3BlcnRpZXMgPSB7fSk6IGFueSB7XG4gICAgXHR0aGlzLm5hdGl2ZUVsZW1lbnQgPSA8VGFibGU+ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc21hcnQtdGFibGUnKTtcblx0XHRmb3IgKGxldCBwcm9wZXJ0eU5hbWUgaW4gcHJvcGVydGllcykgeyBcbiBcdFx0XHR0aGlzLm5hdGl2ZUVsZW1lbnRbcHJvcGVydHlOYW1lXSA9IHByb3BlcnRpZXNbcHJvcGVydHlOYW1lXTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudDtcblx0fVxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgYW5pbWF0aW9uIG1vZGUuIEFuaW1hdGlvbiBpcyBkaXNhYmxlZCB3aGVuIHRoZSBwcm9wZXJ0eSBpcyBzZXQgdG8gJ25vbmUnICovXG5cdEBJbnB1dCgpXG5cdGdldCBhbmltYXRpb24oKTogQW5pbWF0aW9uIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmFuaW1hdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYW5pbWF0aW9uKHZhbHVlOiBBbmltYXRpb24pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYW5pbWF0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEVuYWJsZXMgb3IgZGlzYWJsZXMgYXV0byBsb2FkIHN0YXRlIGZyb20gdGhlIGJyb3dzZXIncyBsb2NhbFN0b3JhZ2UuIEluZm9ybWF0aW9uIGFib3V0IGNvbHVtbnMsIGV4cGFuZGVkIHJvd3MsIHNlbGVjdGVkIHJvd3MsIGFwcGxpZWQgZml0ZXJpbmcsIGdyb3VwaW5nLCBhbmQgc29ydGVkIGNvbHVtbnMgaXMgbG9hZGVkLCBiYXNlZCBvbiB0aGUgdmFsdWUgb2YgdGhlIHN0YXRlU2V0dGluZ3MgcHJvcGVydHkuICovXG5cdEBJbnB1dCgpXG5cdGdldCBhdXRvTG9hZFN0YXRlKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYXV0b0xvYWRTdGF0ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYXV0b0xvYWRTdGF0ZSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hdXRvTG9hZFN0YXRlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEVuYWJsZXMgb3IgZGlzYWJsZXMgYXV0byBzYXZlIHN0YXRlIHRvIHRoZSBicm93c2VyJ3MgbG9jYWxTdG9yYWdlLiBJbmZvcm1hdGlvbiBhYm91dCBjb2x1bW5zLCBleHBhbmRlZCByb3dzLCBzZWxlY3RlZCByb3dzLCBhcHBsaWVkIGZpdGVyaW5nLCBncm91cGluZywgYW5kICAgc29ydGVkIGNvbHVtbnMgaXMgc2F2ZWQsIGJhc2VkIG9uIHRoZSB2YWx1ZSBvZiB0aGUgc3RhdGVTZXR0aW5ncyBwcm9wZXJ0eS4gKi9cblx0QElucHV0KClcblx0Z2V0IGF1dG9TYXZlU3RhdGUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hdXRvU2F2ZVN0YXRlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBhdXRvU2F2ZVN0YXRlKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9TYXZlU3RhdGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIGEgbGlzdCBvZiBjb2x1bW4gZ3JvdXBzIHRoYXQgY29uc3RpdHV0ZSB0aGUgY29sdW1uIGhlYWRlciBoaWVyYXJjaHkuIE5vdGU6IHdoZW4gY29sdW1uIGhlYWRlciBoaWVyYXJjaHkgaXMgY3JlYXRlZCwgY29sdW1uIHJlc2l6aW5nIGFuZCBhdXRvLXNpemluZyBpcyBub3Qgc3VwcG9ydGVkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgY29sdW1uR3JvdXBzKCk6IFRhYmxlQ29sdW1uR3JvdXBbXSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb2x1bW5Hcm91cHMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGNvbHVtbkdyb3Vwcyh2YWx1ZTogVGFibGVDb2x1bW5Hcm91cFtdKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbHVtbkdyb3VwcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIG1pbiB3aWR0aCBvZiBjb2x1bW5zIHdoZW4gY29sdW1uU2l6ZU1vZGUgaXMgJ2F1dG8nIG9yIHdoZW4gcmVzaXppbmcgY29sdW1ucy4gVGhpcyBwcm9wZXJ0eSBoYXMgbm8gZWZmZWN0IG9uIGNvbHVtbnMgd2l0aCBwcm9ncmFtbWF0aWNhbGx5IHNldCB3aWR0aC4gKi9cblx0QElucHV0KClcblx0Z2V0IGNvbHVtbk1pbldpZHRoKCk6IHN0cmluZyB8IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb2x1bW5NaW5XaWR0aCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgY29sdW1uTWluV2lkdGgodmFsdWU6IHN0cmluZyB8IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb2x1bW5NaW5XaWR0aCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgd2hldGhlciB0aGUgcmVvcmRlcmluZyBvZiBjb2x1bW5zIGlzIGVuYWJsZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBjb2x1bW5SZW9yZGVyKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sdW1uUmVvcmRlciA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgY29sdW1uUmVvcmRlcih2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb2x1bW5SZW9yZGVyID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB3aGV0aGVyIHRoZSByZXNpemluZyBvZiBjb2x1bW5zIGlzIGVuYWJsZWQuIE5vdGU6IGNvbHVtbiBzaXplcyBjb250aW51ZSB0byBhZGhlcmUgdG8gdGhlIGJlaGF2aW9yIG9mIHRoZSBzdGFuZGFyZCBIVE1MIHRhYmxlIGVsZW1lbnQncyB0YWJsZS1sYXlvdXQ6IGZpeGVkLCB1cG9uIHdoaWNoIHNtYXJ0LXRhYmxlIGlzIGJhc2VkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgY29sdW1uUmVzaXplKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sdW1uUmVzaXplIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjb2x1bW5SZXNpemUodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sdW1uUmVzaXplID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgcHJvcGVydHkgYWZmZWN0cyB0aGUgdGFibGUgc2l6aW5nLCB3aGVuIHRoZSBjb2x1bW5TaXplTW9kZSBpcyAnZGVmYXVsdCcuIFdoZW4gJ2NvbHVtblJlc2l6ZU5vcm1hbGl6ZScgaXMgZmFsc2UsIHRoZSBUYWJsZSB3aWxsIGFkZCBhbiBhZGRpdGlvbmFsIFRIIGVsZW1lbnQsIGlmIGFsbCB0YWJsZSBjb2x1bW5zIGhhdmUgdGhlICd3aWR0aCcgcHJvcGVydHkgc2V0LiBUaGlzIGlzIGRvbmUgaW4gb3JkZXIgdG8gbWFpbnRhaW4geW91ciB3aWR0aCBzZXR0aW5ncy4gT3RoZXJ3aXNlLCB3aGVuIHRoZSBwcm9wZXJ0eSBpcyBzZXQgdG8gdHJ1ZSwgdGhlIFRhYmxlIHdpbGwgYXV0by1maWxsIHRoZSByZW1haW5pbmcgc3BhY2Ugc2ltaWxhciB0byB0aGUgbGF5b3V0IG9mIHN0YW5kYXJkIEhUTUwgVGFibGVzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgY29sdW1uUmVzaXplTm9ybWFsaXplKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sdW1uUmVzaXplTm9ybWFsaXplIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjb2x1bW5SZXNpemVOb3JtYWxpemUodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sdW1uUmVzaXplTm9ybWFsaXplID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB3aGV0aGVyIHdoZW4gcmVzaXppbmcgYSBjb2x1bW4sIGEgZmVlZGJhY2sgc2hvd2luZyB0aGUgbmV3IGNvbHVtbiB3aWR0aCBpbiBweCB3aWxsIGJlIGRpc3BsYXllZC4gKi9cblx0QElucHV0KClcblx0Z2V0IGNvbHVtblJlc2l6ZUZlZWRiYWNrKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sdW1uUmVzaXplRmVlZGJhY2sgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGNvbHVtblJlc2l6ZUZlZWRiYWNrKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbHVtblJlc2l6ZUZlZWRiYWNrID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERlc2NyaWJlcyB0aGUgY29sdW1ucyBwcm9wZXJ0aWVzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgY29sdW1ucygpOiBUYWJsZUNvbHVtbltdIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbHVtbnMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGNvbHVtbnModmFsdWU6IFRhYmxlQ29sdW1uW10pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sdW1ucyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgZGV0YWlscyBhYm91dCBjb25kaXRpb25hbCBmb3JtYXR0aW5nIHRvIGJlIGFwcGxpZWQgdG8gdGhlIFRhYmxlJ3MgY2VsbHMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBjb25kaXRpb25hbEZvcm1hdHRpbmcoKTogVGFibGVDb25kaXRpb25hbEZvcm1hdHRpbmdbXSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb25kaXRpb25hbEZvcm1hdHRpbmcgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGNvbmRpdGlvbmFsRm9ybWF0dGluZyh2YWx1ZTogVGFibGVDb25kaXRpb25hbEZvcm1hdHRpbmdbXSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb25kaXRpb25hbEZvcm1hdHRpbmcgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSBjb2x1bW4gc2l6aW5nIGJlaGF2aW9yLiBJbiAnYXV0bycgbW9kZSBDb2x1bW5zIGFyZSBhdXRvbWF0aWNhbGx5IHNpemVkIGJhc2VkIG9uIHRoZWlyIGNvbnRlbnQgYW5kIHRoZSB2YWx1ZSBvZiB0aGUgY29sdW1uTWluV2lkdGggcHJvcGVydHksIHVubGVzcyB0aGVyZSBpcyBub3QgZW5vdWdoIHNwYWNlIGluIHRoZSBUYWJsZSwgaW4gd2hpY2ggY2FzZSBlbGxpcHNlcyBhcmUgc2hvd24uIFVzZXItc2V0IHN0YXRpYyBjb2x1bW4gd2lkdGggaXMgc3RpbGwgcmVzcGVjdGVkLiBJbiAnZGVmYXVsdCcgbW9kZSBDb2x1bW5zIGFyZSBzaXplZCBhY2NvcmRpbmcgdG8gdGhlIHJ1bGVzIG9mIHRoZSBzdGFuZGFyZCBIVE1MIHRhYmxlIGVsZW1lbnQncyB0YWJsZS1sYXlvdXQ6IGZpeGVkLiBDdXN0b20gd2lkdGggY2FuIGFsc28gYmUgYXBwbGllZCB0byBjb2x1bW5zIGluIHRoaXMgY2FzZSBieSBzZXR0aW5nIHRoZSBjb2x1bW4gd2lkdGggcHJvcGVydHkuICovXG5cdEBJbnB1dCgpXG5cdGdldCBjb2x1bW5TaXplTW9kZSgpOiBUYWJsZUNvbHVtblNpemVNb2RlIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmNvbHVtblNpemVNb2RlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBjb2x1bW5TaXplTW9kZSh2YWx1ZTogVGFibGVDb2x1bW5TaXplTW9kZSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb2x1bW5TaXplTW9kZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgd2hldGhlciB0aGUgXCJDb25kaXRpb25hbCBGb3JtYXR0aW5nXCIgYnV0dG9uIGFwcGVhcnMgaW4gdGhlIFRhYmxlJ3MgaGVhZGVyICh0b29sYmFyKS4gQ2xpY2tpbmcgdGhpcyBidXR0b24gb3BlbnMgYSBkaWFsb2cgd2l0aCBmb3JtYXR0aW5nIG9wdGlvbnMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBjb25kaXRpb25hbEZvcm1hdHRpbmdCdXR0b24oKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb25kaXRpb25hbEZvcm1hdHRpbmdCdXR0b24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGNvbmRpdGlvbmFsRm9ybWF0dGluZ0J1dHRvbih2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5jb25kaXRpb25hbEZvcm1hdHRpbmdCdXR0b24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBwcm9wZXJ0eSBkZXRlcm1pbmVzIHRoZSB0aW1lIGluIG1pbGxpc2Vjb25kcyBhZnRlciB3aGljaCB0aGUgVGFibGUgZGF0YSBpcyB1cGRhdGVkLCB3aGVuIHlvdSB2ZXJ0aWNhbGx5IHNjcm9sbC4gKi9cblx0QElucHV0KClcblx0Z2V0IGRlZmVycmVkU2Nyb2xsRGVsYXkoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRlZmVycmVkU2Nyb2xsRGVsYXkgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRlZmVycmVkU2Nyb2xsRGVsYXkodmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kZWZlcnJlZFNjcm9sbERlbGF5ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFdoZW4gYmluZGluZyB0aGUgZGF0YVNvdXJjZSBwcm9wZXJ0eSBkaXJlY3RseSB0byBhbiBhcnJheSAoYXMgb3Bwb3NlZCB0byBhbiBpbnN0YW5jZSBvZiBKUVguRGF0YUFkYXB0ZXIpLCBzZXRzIG9yIGdldHMgdGhlIG5hbWUgb2YgdGhlIGRhdGEgZmllbGQgaW4gdGhlIHNvdXJjZSBhcnJheSB0byBiaW5kIHJvdyBpZHMgdG8uICovXG5cdEBJbnB1dCgpXG5cdGdldCBkYXRhUm93SWQoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRhdGFSb3dJZCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGF0YVJvd0lkKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGF0YVJvd0lkID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIGRhdGEgc291cmNlIG9mIHRoZSB0YWJsZSBjb21wb25lbnQuIFRoZSBkYXRhIHNvdXJjZSBvZiB0aGUgVGFibGUgY2FuIGJlIGEgcmVndWxhciBBcnJheSBvciBhIERhdGFBZGFwdGVyIGluc3RhbmNlLiBZb3UgY2FuIHJlYWQgbW9yZSBhYm91dCB0aGUgZGF0YUFkYXB0ZXIgaGVyZSAtIGh0dHBzOi8vd3d3Lmh0bWxlbGVtZW50cy5jb20vZG9jcy9kYXRhLWFkYXB0ZXIvLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGF0YVNvdXJjZSgpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGF0YVNvdXJjZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGF0YVNvdXJjZSh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRhdGFTb3VyY2UgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyB0aGUgZ3JpZCdzIGRhdGEgc291cmNlIHNldHRpbmdzIHdoZW4gdGhlIGRhdGFTb3VyY2UgcHJvcGVydHkgaXMgc2V0IHRvIGFuIEFycmF5IG9yIFVSTC4gKi9cblx0QElucHV0KClcblx0Z2V0IGRhdGFTb3VyY2VTZXR0aW5ncygpOiBUYWJsZURhdGFTb3VyY2VTZXR0aW5ncyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kYXRhU291cmNlU2V0dGluZ3MgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRhdGFTb3VyY2VTZXR0aW5ncyh2YWx1ZTogVGFibGVEYXRhU291cmNlU2V0dGluZ3MpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGF0YVNvdXJjZVNldHRpbmdzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERpc2FibGVzIHRoZSBpbnRlcmFjdGlvbiB3aXRoIHRoZSBlbGVtZW50LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGF0YVRyYW5zZm9ybSgpOiB7IChyZWNvcmQ6IGFueSk6IHZvaWQgfSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kYXRhVHJhbnNmb3JtIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkYXRhVHJhbnNmb3JtKHZhbHVlOiB7IChyZWNvcmQ6IGFueSk6IHZvaWQgfSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kYXRhVHJhbnNmb3JtID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB3aGV0aGVyIHRoZSBUYWJsZSBjYW4gYmUgZWRpdGVkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlZCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZWQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSBlZGl0IG1vZGUuICovXG5cdEBJbnB1dCgpXG5cdGdldCBlZGl0aW5nKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZWRpdGluZyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZWRpdGluZyh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5lZGl0aW5nID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB3aGV0aGVyIFJvdyBoaWVyYXJjaGllcyBhcmUgZXhwYW5kZWQgYnkgZGVmYXVsdCwgd2hlbiBjcmVhdGVkLiBVc2UgdGhpcyBwcm9wZXJ0eSB3aGVuIHlvdSB3YW50IHlvdXIgZ3JvdXBzIHRvIGJlIGV4cGFuZGVkIGJ5IGRlZmF1bHQsIHdoZW4gdGhlIFRhYmxlIGlzIGdyb3VwZWQgb3Igd2hlbiB5b3UgdXNlIHRoZSBUYWJsZSBpbiB0cmVlIG1vZGUuICovXG5cdEBJbnB1dCgpXG5cdGdldCBlZGl0TW9kZSgpOiBUYWJsZUVkaXRNb2RlIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmVkaXRNb2RlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBlZGl0TW9kZSh2YWx1ZTogVGFibGVFZGl0TW9kZSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5lZGl0TW9kZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgd2hldGhlciB0aGUgVGFibGUgY2FuIGJlIGZpbHRlcmVkLiBCeSBkZWZhdWx0LCB0aGUgVGFibGUgY2FuIGJlIGZpbHRlcmVkIGJ5IGFsbCBzdHJpbmcgYW5kIG51bWVyaWMgY29sdW1ucyB0aHJvdWdoIGEgZmlsdGVyIGlucHV0IGluIHRoZSBoZWFkZXIuICovXG5cdEBJbnB1dCgpXG5cdGdldCBleHBhbmRIaWVyYXJjaHkoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5leHBhbmRIaWVyYXJjaHkgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGV4cGFuZEhpZXJhcmNoeSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5leHBhbmRIaWVyYXJjaHkgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHdoZXRoZXIgdGhlIFRhYmxlIGNhbiBiZSBmaWx0ZXJlZCB2aWEgYSBmaWx0ZXIgcm93LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZmlsdGVyaW5nKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZmlsdGVyaW5nIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBmaWx0ZXJpbmcodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZmlsdGVyaW5nID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgaWQgb2YgYW4gSFRNTCB0ZW1wbGF0ZSBlbGVtZW50IHRvIGJlIGFwcGxpZWQgYXMgYSBjdXN0b20gZmlsdGVyIHRlbXBsYXRlLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZmlsdGVyUm93KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZmlsdGVyUm93IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBmaWx0ZXJSb3codmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZmlsdGVyUm93ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgaWQgb2YgYW4gSFRNTCB0ZW1wbGF0ZSBlbGVtZW50IHRvIGJlIGFwcGxpZWQgYXMgZm9vdGVyIHJvdyhzKS4gKi9cblx0QElucHV0KClcblx0Z2V0IGZpbHRlclRlbXBsYXRlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5maWx0ZXJUZW1wbGF0ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZmlsdGVyVGVtcGxhdGUodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5maWx0ZXJUZW1wbGF0ZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgd2hldGhlciBFeGNlbC1saWtlIGZvcm11bGFzIGNhbiBiZSBwYXNzZWQgYXMgY2VsbCB2YWx1ZXMuIEZvcm11bGFzIGFyZSBhbHdheXMgcHJlY2VkZWQgYnkgdGhlID0gc2lnbiBhbmQgYXJlIHJlLWV2YWx1YXRlZCB3aGVuIGNlbGwgdmFsdWVzIGFyZSBjaGFuZ2VkLiBUaGlzIGZlYXR1cmUgZGVwZW5kcyBvbiB0aGUgdGhpcmQtcGFydHkgZnJlZSBwbHVnLWluIGZvcm11bGEtcGFyc2VyICh0aGUgZmlsZSBmb3JtdWxhLXBhcnNlci5taW4uanMgaGFzIHRvIGJlIHJlZmVyZW5jZWQpLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZm9vdGVyUm93KCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5mb290ZXJSb3cgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGZvb3RlclJvdyh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmZvb3RlclJvdyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgd2hldGhlciB0aGUgVGFibGUncyBmb290ZXIgaXMgc3RpY2t5L2Zyb3plbi4gKi9cblx0QElucHV0KClcblx0Z2V0IGZvcm11bGFzKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZm9ybXVsYXMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGZvcm11bGFzKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmZvcm11bGFzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB3aGV0aGVyIHRoZSBUYWJsZSdzIGNvbHVtbiBoZWFkZXIgaXMgc3RpY2t5L2Zyb3plbi4gKi9cblx0QElucHV0KClcblx0Z2V0IGZyZWV6ZUZvb3RlcigpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmZyZWV6ZUZvb3RlciA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZnJlZXplRm9vdGVyKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmZyZWV6ZUZvb3RlciA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgd2hldGhlciBncm91cGluZyB0aGUgVGFibGUgaXMgZW5hYmxlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IGZyZWV6ZUhlYWRlcigpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmZyZWV6ZUhlYWRlciA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZnJlZXplSGVhZGVyKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmZyZWV6ZUhlYWRlciA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBbGxvd3MgdG8gY3VzdG9taXplIHRoZSBoZWFkZXIgb2YgdGhlIGVsZW1lbnQuIFRoZSBwcm9wZXJ0eSBhY2NlcHRzIHRoZSBpZCBvZiBhbiBIVE1MRWxlbWVudCwgSFRNTFRlbXBsYXRlRWxlbWVudCwgZnVuY3Rpb24gb3IgYSBzdHJpbmcgdGhhdCB3aWxsIGJlIHBhcnNlZCBhcyBIVE1MLiBXaGVuIHNldCB0byBhIGZ1bmN0aW9uIGl0IGNvbnRhaW5zIG9uZSBhcmd1bWVudCAtIHRoZSBoZWFkZXIgZWxlbWVudCBvZiB0aGUgVGFibGUuICovXG5cdEBJbnB1dCgpXG5cdGdldCBncm91cGluZygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lmdyb3VwaW5nIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBncm91cGluZyh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ncm91cGluZyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgd2hldGhlciBuYXZpZ2F0aW9uIHdpdGggdGhlIGtleWJvYXJkIGlzIGVuYWJsZWQgaW4gdGhlIFRhYmxlLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZ3JvdXBGb3JtYXRGdW5jdGlvbigpOiB7IChzZXR0aW5nczogeyB2YWx1ZTogYW55LCByb3c6IHN0cmluZyB8IG51bWJlciwgY29sdW1uOiBzdHJpbmcsIHRlbXBsYXRlPzogYW55IH0pOiB2b2lkIH0ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZ3JvdXBGb3JtYXRGdW5jdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZ3JvdXBGb3JtYXRGdW5jdGlvbih2YWx1ZTogeyAoc2V0dGluZ3M6IHsgdmFsdWU6IGFueSwgcm93OiBzdHJpbmcgfCBudW1iZXIsIGNvbHVtbjogc3RyaW5nLCB0ZW1wbGF0ZT86IGFueSB9KTogdm9pZCB9KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lmdyb3VwRm9ybWF0RnVuY3Rpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSBiZWhhdmlvciB3aGVuIGxvYWRpbmcgY29sdW1uIHNldHRpbmdzIGVpdGhlciB2aWEgYXV0b0xvYWRTdGF0ZSBvciBsb2FkU3RhdGUuIEFwcGxpY2FibGUgb25seSB3aGVuIHN0YXRlU2V0dGluZ3MgY29udGFpbnMgJ2NvbHVtbnMnLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgaGVhZGVyUm93KCk6IHN0cmluZyB8IEhUTUxFbGVtZW50IHwgRnVuY3Rpb24ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGVhZGVyUm93IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBoZWFkZXJSb3codmFsdWU6IHN0cmluZyB8IEhUTUxFbGVtZW50IHwgRnVuY3Rpb24pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGVhZGVyUm93ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgbGFuZ3VhZ2UuIFVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCB0aGUgcHJvcGVydHkgbWVzc2FnZXMuICAqL1xuXHRASW5wdXQoKVxuXHRnZXQga2V5Ym9hcmROYXZpZ2F0aW9uKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQua2V5Ym9hcmROYXZpZ2F0aW9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBrZXlib2FyZE5hdmlnYXRpb24odmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQua2V5Ym9hcmROYXZpZ2F0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyBhbiBvYmplY3Qgc3BlY2lmeWluZyBzdHJpbmdzIHVzZWQgaW4gdGhlIGVsZW1lbnQgdGhhdCBjYW4gYmUgbG9jYWxpemVkLiBVc2VkIGluIGNvbmp1bmN0aW9uIHdpdGggdGhlIHByb3BlcnR5IGxvY2FsZS4gICovXG5cdEBJbnB1dCgpXG5cdGdldCBsb2FkQ29sdW1uU3RhdGVCZWhhdmlvcigpOiBUYWJsZUxvYWRDb2x1bW5TdGF0ZUJlaGF2aW9yIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxvYWRDb2x1bW5TdGF0ZUJlaGF2aW9yIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBsb2FkQ29sdW1uU3RhdGVCZWhhdmlvcih2YWx1ZTogVGFibGVMb2FkQ29sdW1uU3RhdGVCZWhhdmlvcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sb2FkQ29sdW1uU3RhdGVCZWhhdmlvciA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIHBhZ2Ugc2l6ZSAod2hlbiBwYWdpbmcgaXMgZW5hYmxlZCkuICovXG5cdEBJbnB1dCgpXG5cdGdldCBsb2NhbGUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxvY2FsZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbG9jYWxlKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubG9jYWxlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgY3VycmVudCAoemVyby1iYXNlZCkgcGFnZSBpbmRleCAod2hlbiBwYWdpbmcgaXMgZW5hYmxlZCkuICovXG5cdEBJbnB1dCgpXG5cdGdldCBtZXNzYWdlcygpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubWVzc2FnZXMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG1lc3NhZ2VzKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubWVzc2FnZXMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHdoZXRoZXIgcGFnaW5nIGlzIGVuYWJsZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBvbkNlbGxSZW5kZXIoKTogeyAoZGF0YTogYW55LCBkYXRhRmllbGQ6IHN0cmluZywgdmFsdWU6IGFueSwgY2VsbDogSFRNTFRhYmxlQ2VsbEVsZW1lbnQpOiB2b2lkIH0ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25DZWxsUmVuZGVyIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBvbkNlbGxSZW5kZXIodmFsdWU6IHsgKGRhdGE6IGFueSwgZGF0YUZpZWxkOiBzdHJpbmcsIHZhbHVlOiBhbnksIGNlbGw6IEhUTUxUYWJsZUNlbGxFbGVtZW50KTogdm9pZCB9KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uQ2VsbFJlbmRlciA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIHZhbHVlIGluZGljYXRpbmcgd2hldGhlciB0aGUgZWxlbWVudCBpcyBhbGlnbmVkIHRvIHN1cHBvcnQgbG9jYWxlcyB1c2luZyByaWdodC10by1sZWZ0IGZvbnRzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgb25Db2x1bW5SZW5kZXIoKTogeyAoZGF0YUZpZWxkOiBzdHJpbmcsIGhlYWRlckNlbGw6IEhUTUxUYWJsZUNlbGxFbGVtZW50KTogdm9pZCB9IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uQ29sdW1uUmVuZGVyIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBvbkNvbHVtblJlbmRlcih2YWx1ZTogeyAoZGF0YUZpZWxkOiBzdHJpbmcsIGhlYWRlckNlbGw6IEhUTUxUYWJsZUNlbGxFbGVtZW50KTogdm9pZCB9KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9uQ29sdW1uUmVuZGVyID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyBhIHN0cmluZyB0ZW1wbGF0ZSB0byBiZSBhcHBsaWVkIGFzIHJvdyBkZXRhaWwgdGVtcGxhdGUuIEVhY2ggY2VsbCB2YWx1ZSBpbiB0aGUgbWFzdGVyIHJvdyBjYW4gYmUgcGxhY2VkIGluIHRoZSBkZXRhaWwgcm93IGJ5IHNwZWNpZnlpbmcgdGhlIGNlbGwncyBkYXRhIGZpZWxkIGluIGRvdWJsZSBjdXJseSBicmFja2V0cyAoZS5nLiB7e3ByaWNlfX0uIFRoZSBkZXRhaWxzIGNhbiB0aGVuIGJlIGRpc3BsYXllZCBieSBleHBhbmRpbmcgdGhlIHJvdyBieSBjbGlja2luZyBpdC4gKi9cblx0QElucHV0KClcblx0Z2V0IG9uSW5pdCgpOiB7ICgpOiB2b2lkIH0ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQub25Jbml0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBvbkluaXQodmFsdWU6IHsgKCk6IHZvaWQgfSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5vbkluaXQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIGFuIGFycmF5IG9mIHRoZSBUYWJsZSdzIHNlbGVjdGVkIHJvdydzIGlkcy4gKi9cblx0QElucHV0KClcblx0Z2V0IHBhZ2VTaXplKCk6IFRhYmxlUGFnZVNpemUge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucGFnZVNpemUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHBhZ2VTaXplKHZhbHVlOiBUYWJsZVBhZ2VTaXplKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnBhZ2VTaXplID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB3aGV0aGVyIHJvdyBzZWxlY3Rpb24gKHZpYSBjaGVja2JveGVzKSBpcyBlbmFibGVkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcGFnZUluZGV4KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5wYWdlSW5kZXggOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHBhZ2VJbmRleCh2YWx1ZTogbnVtYmVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnBhZ2VJbmRleCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIHNlbGVjdGlvbiBtb2RlLiBPbmx5IGFwcGxpY2FibGUgd2hlbiBzZWxlY3Rpb24gaXMgZW5hYmxlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IHBhZ2luZygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnBhZ2luZyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcGFnaW5nKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnBhZ2luZyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgd2hldGhlciByb3cgc2VsZWN0aW9uICh2aWEgY2hlY2tib3hlcykgaXMgaGllcmFyY2hpY2FsLiBXaGVuIGEgcGFyZW50IHJvdyBpcyBzZWxlY3RlZCwgYWxsIHN1YiByb3dzIGFyZSBzZWxlY3RlZCwgdG9vLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcmlnaHRUb0xlZnQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yaWdodFRvTGVmdCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcmlnaHRUb0xlZnQodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmlnaHRUb0xlZnQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgc29ydGluZyBtb2RlIG9mIHRoZSBUYWJsZS4gKi9cblx0QElucHV0KClcblx0Z2V0IHJvd0RldGFpbFRlbXBsYXRlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yb3dEZXRhaWxUZW1wbGF0ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcm93RGV0YWlsVGVtcGxhdGUodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yb3dEZXRhaWxUZW1wbGF0ZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgd2hhdCBzZXR0aW5ncyBvZiB0aGUgVGFibGUncyBzdGF0ZSBjYW4gYmUgc2F2ZWQgKGJ5IGF1dG9TYXZlU3RhdGUgb3Igc2F2ZVN0YXRlKSBvciBsb2FkZWQgKGJ5IGF1dG9Mb2FkU3RhdGUgb3IgbG9hZFN0YXRlKS4gKi9cblx0QElucHV0KClcblx0Z2V0IHNlbGVjdGVkKCk6IGFueVtdIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdGVkIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzZWxlY3RlZCh2YWx1ZTogYW55W10pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0ZWQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgdGhlbWUuIFRoZW1lIGRlZmluZXMgdGhlIGxvb2sgb2YgdGhlIGVsZW1lbnQgKi9cblx0QElucHV0KClcblx0Z2V0IHNlbGVjdGlvbigpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc2VsZWN0aW9uKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdGlvbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgd2hldGhlciB3aGVuIGhvdmVyaW5nIGEgY2VsbCB3aXRoIHRydW5jYXRlZCBjb250ZW50LCBhIHRvb2x0aXAgd2l0aCB0aGUgZnVsbCBjb250ZW50IHdpbGwgYmUgc2hvd24uICovXG5cdEBJbnB1dCgpXG5cdGdldCBzZWxlY3Rpb25Nb2RlKCk6IFRhYmxlU2VsZWN0aW9uTW9kZSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25Nb2RlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzZWxlY3Rpb25Nb2RlKHZhbHVlOiBUYWJsZVNlbGVjdGlvbk1vZGUpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uTW9kZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFbmFibGVzIG9yIGRpc2FibGVzIEhUTUwgdmlydHVhbGl6YXRpb24uIFRoaXMgZnVuY3Rpb25hbGl0eSBhbGxvd3MgZm9yIG9ubHkgdmlzaWJsZSByb3dzIHRvIGJlIHJlbmRlcmVkLCByZXN1bHRpbmcgaW4gYW4gaW5jcmVhc2VkIFRhYmxlIHBlcmZvcm1hbmNlLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc2VsZWN0aW9uQnlIaWVyYXJjaHkoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25CeUhpZXJhcmNoeSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc2VsZWN0aW9uQnlIaWVyYXJjaHkodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uQnlIaWVyYXJjaHkgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gdW5kZWZpbmVkICovXG5cdEBJbnB1dCgpXG5cdGdldCBzb3J0KCk6IHsgKGRhdGFTb3VyY2U6IGFueSwgc29ydENvbHVtbnM6IHN0cmluZ1tdLCBkaXJlY3Rpb25zOiBzdHJpbmdbXSwgZGVmYXVsdENvbXBhcmVGdW5jdGlvbnM6IHsgKGZpcnN0UmVjb3JkOiBhbnksIHNlY29uZFJlY29yZDogYW55KTogbnVtYmVyIH1bXSk6IHZvaWQgfSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zb3J0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzb3J0KHZhbHVlOiB7IChkYXRhU291cmNlOiBhbnksIHNvcnRDb2x1bW5zOiBzdHJpbmdbXSwgZGlyZWN0aW9uczogc3RyaW5nW10sIGRlZmF1bHRDb21wYXJlRnVuY3Rpb25zOiB7IChmaXJzdFJlY29yZDogYW55LCBzZWNvbmRSZWNvcmQ6IGFueSk6IG51bWJlciB9W10pOiB2b2lkIH0pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc29ydCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiB1bmRlZmluZWQgKi9cblx0QElucHV0KClcblx0Z2V0IHNvcnRNb2RlKCk6IFRhYmxlU29ydE1vZGUge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc29ydE1vZGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHNvcnRNb2RlKHZhbHVlOiBUYWJsZVNvcnRNb2RlKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNvcnRNb2RlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIHVuZGVmaW5lZCAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc3RhdGVTZXR0aW5ncygpOiBzdHJpbmdbXSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zdGF0ZVNldHRpbmdzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzdGF0ZVNldHRpbmdzKHZhbHVlOiBzdHJpbmdbXSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zdGF0ZVNldHRpbmdzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIHVuZGVmaW5lZCAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdGhlbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRoZW1lIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0aGVtZSh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRoZW1lID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIHVuZGVmaW5lZCAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdG9vbHRpcCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRvb2x0aXAgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRvb2x0aXAodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudG9vbHRpcCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiB1bmRlZmluZWQgKi9cblx0QElucHV0KClcblx0Z2V0IHZpcnR1YWxpemF0aW9uKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudmlydHVhbGl6YXRpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHZpcnR1YWxpemF0aW9uKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnZpcnR1YWxpemF0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSBjZWxsIGVkaXQgb3BlcmF0aW9uIGhhcyBiZWVuIGluaXRpYXRlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRpZCwgXHRkYXRhRmllbGQsIFx0cm93LCBcdHZhbHVlKVxuXHQqICAgaWQgLSBUaGUgaWQgb2YgdGhlIHJvdy5cblx0KiAgIGRhdGFGaWVsZCAtIFRoZSBkYXRhIGZpZWxkIG9mIHRoZSBjZWxsJ3MgY29sdW1uLlxuXHQqICAgcm93IC0gVGhlIGRhdGEgb2YgdGhlIGNlbGwncyByb3cuXG5cdCogICB2YWx1ZSAtIFRoZSBkYXRhIHZhbHVlIG9mIHRoZSBjZWxsLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25DZWxsQmVnaW5FZGl0OiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIGNlbGwgaGFzIGJlZW4gY2xpY2tlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRpZCwgXHRkYXRhRmllbGQsIFx0cm93LCBcdHZhbHVlLCBcdG9yaWdpbmFsRXZlbnQpXG5cdCogICBpZCAtIFRoZSBjZWxsJ3Mgcm93IGlkLlxuXHQqICAgZGF0YUZpZWxkIC0gVGhlIGRhdGEgZmllbGQgb2YgdGhlIGNlbGwncyBjb2x1bW4uXG5cdCogICByb3cgLSBUaGUgZGF0YSBvZiB0aGUgY2VsbCdzIHJvdy5cblx0KiAgIHZhbHVlIC0gVGhlIGRhdGEgdmFsdWUgb2YgdGhlIGNlbGwuXG5cdCogICBvcmlnaW5hbEV2ZW50IC0gVGhlICdjbGljaycgZXZlbnQgb2JqZWN0LlxuXHQqL1xuXHRAT3V0cHV0KCkgb25DZWxsQ2xpY2s6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgY2VsbCBoYXMgYmVlbiBlZGl0ZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0aWQsIFx0ZGF0YUZpZWxkLCBcdHJvdywgXHR2YWx1ZSlcblx0KiAgIGlkIC0gVGhlIGlkIG9mIHRoZSByb3cuXG5cdCogICBkYXRhRmllbGQgLSBUaGUgZGF0YSBmaWVsZCBvZiB0aGUgY2VsbCdzIGNvbHVtbi5cblx0KiAgIHJvdyAtIFRoZSBuZXcgZGF0YSBvZiB0aGUgY2VsbCdzIHJvdy5cblx0KiAgIHZhbHVlIC0gVGhlIGRhdGEgdmFsdWUgb2YgdGhlIGNlbGwuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkNlbGxFbmRFZGl0OiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgc2VsZWN0aW9uIGlzIGNoYW5nZWQuIFdpdGhpbiB0aGUgZXZlbnQgaGFuZGxlciB5b3UgY2FuIGdldCB0aGUgc2VsZWN0aW9uIGJ5IHVzaW5nIHRoZSAnZ2V0U2VsZWN0aW9uJyBtZXRob2QuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0dHlwZSlcblx0KiAgIHR5cGUgLSBUaGUgdHlwZSBvZiBhY3Rpb24gdGhhdCBpbml0aWF0ZWQgdGhlIHNlbGVjdGlvbiBjaGFuZ2UuIFBvc3NpYmxlIHR5cGVzOiAncHJvZ3JhbW1hdGljJywgJ2ludGVyYWN0aW9uJywgJ3JlbW92ZScuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkNoYW5nZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSByb3cgaGFzIGJlZW4gY29sbGFwc2VkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGlkLCBcdHJlY29yZClcblx0KiAgIGlkIC0gVGhlIGlkIG9mIHRoZSBjb2xsYXBzZWQgcm93LlxuXHQqICAgcmVjb3JkIC0gVGhlIGRhdGEgb2YgdGhlIGNvbGxhcHNlZCByb3cuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkNvbGxhcHNlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIHJvdyBoYXMgYmVlbiBleHBhbmRlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRpZCwgXHRyZWNvcmQpXG5cdCogICBpZCAtIFRoZSBpZCBvZiB0aGUgZXhwYW5kZWQgcm93LlxuXHQqICAgcmVjb3JkIC0gVGhlIChhZ2dyZWdhdGVkKSBkYXRhIG9mIHRoZSBleHBhbmRlZCByb3cuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkV4cGFuZDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSBjb2x1bW4gaGVhZGVyIGNlbGwgaGFzIGJlZW4gY2xpY2tlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRkYXRhRmllbGQpXG5cdCogICBkYXRhRmllbGQgLSBUaGUgZGF0YSBmaWVsZCBvZiB0aGUgY2VsbCdzIGNvbHVtbi5cblx0Ki9cblx0QE91dHB1dCgpIG9uQ29sdW1uQ2xpY2s6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgY29sdW1uIG1lbnUgaXMgY2xvc2VkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGRhdGFGaWVsZClcblx0KiAgIGRhdGFGaWVsZCAtIFRoZSBkYXRhIGZpZWxkIG9mIHRoZSBjb2x1bW4uXG5cdCovXG5cdEBPdXRwdXQoKSBvbkNsb3NlQ29sdW1uTWVudTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSBjb2x1bW4gaGFzIGJlZW4gcmVzaXplZCB2aWEgZHJhZ2dpbmcgb3IgZG91YmxlLWNsaWNrLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGRhdGFGaWVsZCwgXHRoZWFkZXJDZWxsRWxlbWVudCwgXHR3aWR0aClcblx0KiAgIGRhdGFGaWVsZCAtIFRoZSBkYXRhIGZpZWxkIG9mIHRoZSBjb2x1bW4uXG5cdCogICBoZWFkZXJDZWxsRWxlbWVudCAtIFRoZSBjb2x1bW4ncyBoZWFkZXIgY2VsbCBIVE1MIGVsZW1lbnQuXG5cdCogICB3aWR0aCAtIFRoZSBuZXcgd2lkdGggb2YgdGhlIGNvbHVtbi5cblx0Ki9cblx0QE91dHB1dCgpIG9uQ29sdW1uUmVzaXplOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIGZpbHRlcmluZy1yZWxhdGVkIGFjdGlvbiBpcyBtYWRlLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGFjdGlvbiwgXHRmaWx0ZXJzKVxuXHQqICAgYWN0aW9uIC0gVGhlIGZpbHRlcmluZyBhY3Rpb24uIFBvc3NpYmxlIGFjdGlvbnM6ICdhZGQnLCAncmVtb3ZlJy5cblx0KiAgIGZpbHRlcnMgLSBUaGUgYWRkZWQgZmlsdGVycy4gT25seSB3aGVuIGFjdGlvbiBpcyAnYWRkJy5cblx0Ki9cblx0QE91dHB1dCgpIG9uRmlsdGVyOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIGdyb3VwaW5nLXJlbGF0ZWQgYWN0aW9uIGlzIG1hZGUuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0YWN0aW9uLCBcdGRhdGFGaWVsZCwgXHRsYWJlbCwgXHRwYXRoKVxuXHQqICAgYWN0aW9uIC0gVGhlIGdyb3VwaW5nIGFjdGlvbi4gUG9zc2libGUgYWN0aW9uczogJ2FkZCcsICdjb2xsYXBzZScsICdleHBhbmQnLCAncmVtb3ZlJy5cblx0KiAgIGRhdGFGaWVsZCAtIFRoZSBkYXRhIGZpZWxkIG9mIHRoZSBjb2x1bW4gd2hvc2UgZ3JvdXBpbmcgaXMgbW9kaWZpZWQuXG5cdCogICBsYWJlbCAtIFRoZSBsYWJlbCBvZiB0aGUgZ3JvdXAgKG9ubHkgd2hlbiBjb2xsYXBzaW5nL2V4cGFuZGluZykuXG5cdCogICBwYXRoIC0gVGhlIGdyb3VwJ3MgcGF0aCAob25seSB3aGVuIGNvbGxhcHNpbmcvZXhwYW5kaW5nKS4gVGhlIHBhdGggaW5jbHVkZXMgdGhlIHBhdGggdG8gdGhlIGV4cGFuZGVkL2NvbGxhcHNlZCBncm91cCBzdGFydGluZyBmcm9tIHRoZSByb290IGdyb3VwLiBUaGUgaW5kZXhlcyBhcmUgam9pbmVkIHdpdGggJy4nLiBUaGlzIHBhcmFtZXRlciBpcyBhdmFpbGFibGUgd2hlbiB0aGUgJ2FjdGlvbicgaXMgJ2V4cGFuZCcgb3IgJ2NvbGxhcHNlJy5cblx0Ki9cblx0QE91dHB1dCgpIG9uR3JvdXA6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgY29sdW1uIG1lbnUgaXMgb3BlbmVkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGRhdGFGaWVsZClcblx0KiAgIGRhdGFGaWVsZCAtIFRoZSBkYXRhIGZpZWxkIG9mIHRoZSBjb2x1bW4uXG5cdCovXG5cdEBPdXRwdXQoKSBvbk9wZW5Db2x1bW5NZW51OiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIHBhZ2luZy1yZWxhdGVkIGFjdGlvbiBpcyBtYWRlLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGFjdGlvbilcblx0KiAgIGFjdGlvbiAtIFRoZSBwYWdpbmcgYWN0aW9uLiBQb3NzaWJsZSBhY3Rpb25zOiAncGFnZUluZGV4Q2hhbmdlJywgJ3BhZ2VTaXplQ2hhbmdlJy5cblx0Ki9cblx0QE91dHB1dCgpIG9uUGFnZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSByb3cgZWRpdCBvcGVyYXRpb24gaGFzIGJlZW4gaW5pdGlhdGVkIChvbmx5IHdoZW4gZWRpdE1vZGUgaXMgJ3JvdycpLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGlkLCBcdHJvdylcblx0KiAgIGlkIC0gVGhlIGlkIG9mIHRoZSByb3cuXG5cdCogICByb3cgLSBUaGUgZGF0YSBvZiB0aGUgcm93LlxuXHQqL1xuXHRAT3V0cHV0KCkgb25Sb3dCZWdpbkVkaXQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgcm93IGhhcyBiZWVuIGVkaXRlZCAob25seSB3aGVuIGVkaXRNb2RlIGlzICdyb3cnKS5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRpZCwgXHRyb3cpXG5cdCogICBpZCAtIFRoZSBpZCBvZiB0aGUgcm93LlxuXHQqICAgcm93IC0gVGhlIG5ldyBkYXRhIG9mIHRoZSByb3cuXG5cdCovXG5cdEBPdXRwdXQoKSBvblJvd0VuZEVkaXQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgY29sdW1uIGhlYWRlciBjZWxsIGhhcyBiZWVuIGNsaWNrZWQgb3Igc29ydGluZyBpcyBhcHBsaWVkIHByb2dyYW1tYXRpY2FsbHkgdXNpbmcgdGhlIFRhYmxlIEFQSS5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRjb2x1bW5zLCBcdHNvcnREYXRhRmllbGRzLCBcdHNvcnRPcmRlcnMsIFx0c29ydERhdGFUeXBlcywgXHR0eXBlKVxuXHQqICAgY29sdW1ucyAtIEFuIGFycmF5IHdpdGggaW5mb3JtYXRpb24gYWJvdXQgdGhlIGNvbHVtbnMgdGhlIFRhYmxlIGhhcyBiZWVuIHNvcnRlZCBieS5cblx0KiAgIHNvcnREYXRhRmllbGRzIC0gQW4gYXJyYXkgd2l0aCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZGF0YSBmaWVsZHMgdGhlIFRhYmxlIGhhcyBiZWVuIHNvcnRlZCBieS5cblx0KiAgIHNvcnRPcmRlcnMgLSBBbiBhcnJheSB3aXRoIGluZm9ybWF0aW9uIGFib3V0IHRoZSBjb2x1bW5zIHNvcnQgb3JkZXJzIHRoZSBUYWJsZSBoYXMgYmVlbiBzb3J0ZWQgYnkuXG5cdCogICBzb3J0RGF0YVR5cGVzIC0gQW4gYXJyYXkgd2l0aCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgY29sdW1ucyBkYXRhIHR5cGVzIHRoZSBUYWJsZSBoYXMgYmVlbiBzb3J0ZWQgYnkuXG5cdCogICB0eXBlIC0gVGhlIHR5cGUgb2YgYWN0aW9uIHRoYXQgaW5pdGlhdGVkIHRoZSBkYXRhIHNvcnQuIFBvc3NpYmxlIHR5cGVzOiAncHJvZ3JhbW1hdGljJywgJ2ludGVyYWN0aW9uJ1xuXHQqL1xuXHRAT3V0cHV0KCkgb25Tb3J0OiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gQWRkcyBhIG5ldyByb3cuIFdoZW4geW91IGludm9rZSB0aGUgbWV0aG9kLCBwYXNzIGEgSlNPTiBvYmplY3Qgd2l0aCB0aGUgcm93J3MgZGF0YS4gXG5cdCogQHBhcmFtIHthbnl9IGRhdGEuIEpTT04gb2JqZWN0IHdpdGggdGhlIG5ldyByb3cncyBkYXRhLiBTYW1wbGUgSlNPTjoge2ZpcnN0TmFtZTogJ1BldGVyJywgbGFzdE5hbWU6ICdGdWxsZXInfS5cblx0Ki9cbiAgICBwdWJsaWMgYWRkUm93KGRhdGE6IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5hZGRSb3coZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYWRkUm93KGRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBZGRzIGEgZmlsdGVyIHRvIGEgc3BlY2lmaWMgY29sdW1uLiBcblx0KiBAcGFyYW0ge3N0cmluZ30gZGF0YUZpZWxkLiBUaGUgY29sdW1uJ3MgZGF0YSBmaWVsZC5cblx0KiBAcGFyYW0ge2FueX0gZmlsdGVyLiBGaWx0ZXJHcm91cCBvYmplY3QuXG5cdCovXG4gICAgcHVibGljIGFkZEZpbHRlcihkYXRhRmllbGQ6IHN0cmluZywgZmlsdGVyOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYWRkRmlsdGVyKGRhdGFGaWVsZCwgZmlsdGVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5hZGRGaWx0ZXIoZGF0YUZpZWxkLCBmaWx0ZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBHcm91cHMgYnkgYSBjb2x1bW4uIFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBkYXRhRmllbGQuIFRoZSBjb2x1bW4ncyBkYXRhIGZpZWxkLlxuXHQqL1xuICAgIHB1YmxpYyBhZGRHcm91cChkYXRhRmllbGQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5hZGRHcm91cChkYXRhRmllbGQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmFkZEdyb3VwKGRhdGFGaWVsZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEJlZ2lucyBhbiBlZGl0IG9wZXJhdGlvbi4gXG5cdCogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IHJvdy4gVGhlIGlkIG9mIHRoZSByb3cgdG8gZWRpdC5cblx0KiBAcGFyYW0ge3N0cmluZ30gZGF0YUZpZWxkPy4gVGhlIGRhdGFGaWVsZCBvZiB0aGUgY2VsbCdzIGNvbHVtbi4gTWF5IGJlIG9taXR0ZWQgd2hlbiA8c3Ryb25nPmVkaXRNb2RlPC9zdHJvbmc+IGlzIDxlbT4ncm93JzwvZW0+LlxuXHQqL1xuICAgIHB1YmxpYyBiZWdpbkVkaXQocm93OiBzdHJpbmcgfCBudW1iZXIsIGRhdGFGaWVsZD86IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5iZWdpbkVkaXQocm93LCBkYXRhRmllbGQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmJlZ2luRWRpdChyb3csIGRhdGFGaWVsZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEJlZ2lucyBhbiB1cGRhdGUgb3BlcmF0aW9uLiBTdXNwZW5kcyBhbGwgdGFibGUgcmVmcmVzaGVzIGFuZCByZW5kZXJzLiBcblx0Ki9cbiAgICBwdWJsaWMgYmVnaW5VcGRhdGUoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmJlZ2luVXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYmVnaW5VcGRhdGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRW5kcyB0aGUgY3VycmVudCBlZGl0IG9wZXJhdGlvbiBhbmQgZGlzY2FyZHMgY2hhbmdlcy4gXG5cdCovXG4gICAgcHVibGljIGNhbmNlbEVkaXQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNhbmNlbEVkaXQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jYW5jZWxFZGl0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIENsZWFycyBhcHBsaWVkIGZpbHRlcnMuIFxuXHQqL1xuICAgIHB1YmxpYyBjbGVhckZpbHRlcnMoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNsZWFyRmlsdGVycygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNsZWFyRmlsdGVycygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDbGVhcnMgZ3JvdXBpbmcuIFxuXHQqL1xuICAgIHB1YmxpYyBjbGVhckdyb3VwaW5nKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbGVhckdyb3VwaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xlYXJHcm91cGluZygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDbGVhcnMgc2VsZWN0aW9uLiBcblx0Ki9cbiAgICBwdWJsaWMgY2xlYXJTZWxlY3Rpb24oKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xlYXJTZWxlY3Rpb24oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ2xlYXJzIHRoZSBUYWJsZSBzb3J0aW5nLiBcblx0Ki9cbiAgICBwdWJsaWMgY2xlYXJTb3J0KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbGVhclNvcnQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbGVhclNvcnQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ29sbGFwc2VzIGFsbCByb3dzIChpbiB0cmVlIG1vZGUpLiBcblx0Ki9cbiAgICBwdWJsaWMgY29sbGFwc2VBbGxSb3dzKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jb2xsYXBzZUFsbFJvd3MoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jb2xsYXBzZUFsbFJvd3MoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ29sbGFwc2VzIGFsbCBncm91cHMgKGluIHRyZWUgbW9kZSkuIFxuXHQqL1xuICAgIHB1YmxpYyBjb2xsYXBzZUFsbEdyb3VwcygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sbGFwc2VBbGxHcm91cHMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jb2xsYXBzZUFsbEdyb3VwcygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDb2xsYXBzZXMgYWxsIHJvdyBkZXRhaWxzLiBSb3dzIHRoYXQgaGF2ZSBkZXRhaWxzIGRlZmluZWQgdmlhIHRoZSByb3dEZXRhaWxUZW1wbGF0ZSB3aWxsIGJlIGNvbGxhcHNlZC4gXG5cdCovXG4gICAgcHVibGljIGNvbGxhcHNlQWxsUm93RGV0YWlscygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sbGFwc2VBbGxSb3dEZXRhaWxzKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sbGFwc2VBbGxSb3dEZXRhaWxzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIENvbGxhcHNlcyBhIGdyb3VwLiBcblx0KiBAcGFyYW0ge3N0cmluZ30gaW5kZXguIFRoZSBncm91cCdzIGhpZXJhcmNoaWNhbCBpbmRleC5cblx0Ki9cbiAgICBwdWJsaWMgY29sbGFwc2VHcm91cChpbmRleDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNvbGxhcHNlR3JvdXAoaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNvbGxhcHNlR3JvdXAoaW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDb2xsYXBzZXMgYSByb3cgKGluIHRyZWUgbW9kZSkuIFxuXHQqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyfSByb3dJZC4gVGhlIGlkIG9mIHRoZSByb3cgdG8gY29sbGFwc2UuXG5cdCovXG4gICAgcHVibGljIGNvbGxhcHNlUm93KHJvd0lkOiBzdHJpbmcgfCBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sbGFwc2VSb3cocm93SWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNvbGxhcHNlUm93KHJvd0lkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGlzYWJsZXMgYSBzZWxlY3Rpb24gb2YgYSByb3cuIFdoZW4gdGhlICdzZWxlY3Rpb24nIHByb3BlcnR5IGlzIHNldCB0byAndHJ1ZScsIHNlbGVjdGlvbiBpcyBlbmFibGVkIGZvciBhbGwgcm93cyBieSBkZWZhdWx0LiBcblx0KiBAcGFyYW0ge3N0cmluZyB8IG51bWJlciB8IChzdHJpbmcgfCBudW1iZXIpW119IHJvd0lkLiBUaGUgaWQgb2YgdGhlIHJvdyAob3IgYW4gYXJyYXkgb2Ygcm93IGlkcykgdG8gc2VsZWN0LlxuXHQqL1xuICAgIHB1YmxpYyBkaXNhYmxlU2VsZWN0KHJvd0lkOiBzdHJpbmcgfCBudW1iZXIgfCAoc3RyaW5nIHwgbnVtYmVyKVtdKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVTZWxlY3Qocm93SWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVTZWxlY3Qocm93SWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFbmFibGVzIGEgc2VsZWN0aW9uIG9mIGEgcm93LCBpZiBpdCB3YXMgcHJldmlvdXNseSBkaXNhYmxlZCB0aHJvdWdoIGEgJ2Rpc2FibGVTZWxlY3QnIG1ldGhvZCBjYWxsLiBXaGVuIHRoZSAnc2VsZWN0aW9uJyBwcm9wZXJ0eSBpcyBzZXQgdG8gJ3RydWUnLCBzZWxlY3Rpb24gaXMgZW5hYmxlZCBmb3IgYWxsIHJvd3MgYnkgZGVmYXVsdC4gXG5cdCogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXIgfCAoc3RyaW5nIHwgbnVtYmVyKVtdfSByb3dJZC4gVGhlIGlkIG9mIHRoZSByb3cgKG9yIGFuIGFycmF5IG9mIHJvdyBpZHMpIHRvIHNlbGVjdC5cblx0Ki9cbiAgICBwdWJsaWMgZW5hYmxlU2VsZWN0KHJvd0lkOiBzdHJpbmcgfCBudW1iZXIgfCAoc3RyaW5nIHwgbnVtYmVyKVtdKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmVuYWJsZVNlbGVjdChyb3dJZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZW5hYmxlU2VsZWN0KHJvd0lkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRW5kcyB0aGUgY3VycmVudCBlZGl0IG9wZXJhdGlvbiBhbmQgc2F2ZXMgY2hhbmdlcy4gXG5cdCovXG4gICAgcHVibGljIGVuZEVkaXQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmVuZEVkaXQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5lbmRFZGl0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEVuZHMgYW4gdXBkYXRlIG9wZXJhdGlvbi4gUmVzdW1lcyBhbGwgdGFibGUgcmVmcmVzaGVzIGFuZCByZW5kZXJzLiBSZS1yZW5kZXJzIHRoZSBUYWJsZS4gXG5cdCogQHBhcmFtIHtib29sZWFufSByZWZyZXNoPy4gT3B0aW9uYWxseSB5b3UgY2FuIHBhc3MgJ2ZhbHNlJyBpbiBjYXNlIHlvdSBuZWVkIHRvIG1hbnVhbGx5IGNhbGwgdGhlICdyZWZyZXNoJyBtZXRob2QuIEJ5IGRlZmF1bHQsIHRoZSB0YWJsZSBpcyByZS1yZW5kZXJlZC5cblx0Ki9cbiAgICBwdWJsaWMgZW5kVXBkYXRlKHJlZnJlc2g/OiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmVuZFVwZGF0ZShyZWZyZXNoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5lbmRVcGRhdGUocmVmcmVzaCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEV4cGFuZHMgYWxsIHJvd3MgKGluIHRyZWUgbW9kZSkuIFxuXHQqL1xuICAgIHB1YmxpYyBleHBhbmRBbGxSb3dzKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5leHBhbmRBbGxSb3dzKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZXhwYW5kQWxsUm93cygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFeHBhbmRzIGFsbCBncm91cHMgKGluIHRyZWUgbW9kZSkuIFxuXHQqL1xuICAgIHB1YmxpYyBleHBhbmRBbGxHcm91cHMoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmV4cGFuZEFsbEdyb3VwcygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmV4cGFuZEFsbEdyb3VwcygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFeHBhbmRzIGFsbCByb3cgZGV0YWlscy4gUm93cyB0aGF0IGhhdmUgZGV0YWlscyBkZWZpbmVkIHZpYSByb3dEZXRhaWxUZW1wbGF0ZSB3aWxsIGJlIGV4cGFuZGVkLiBcblx0Ki9cbiAgICBwdWJsaWMgZXhwYW5kQWxsUm93RGV0YWlscygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZXhwYW5kQWxsUm93RGV0YWlscygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmV4cGFuZEFsbFJvd0RldGFpbHMoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRXhwYW5kcyBhIGdyb3VwLiBcblx0KiBAcGFyYW0ge3N0cmluZ30gaW5kZXguIFRoZSBncm91cCdzIGhpZXJhcmNoaWNhbCBpbmRleC5cblx0Ki9cbiAgICBwdWJsaWMgZXhwYW5kR3JvdXAoaW5kZXg6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5leHBhbmRHcm91cChpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZXhwYW5kR3JvdXAoaW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFeHBhbmRzIGEgcm93IChpbiB0cmVlIG1vZGUpLiBcblx0KiBAcGFyYW0ge3N0cmluZyB8IG51bWJlcn0gcm93SWQuIFRoZSBpZCBvZiB0aGUgcm93IHRvIGV4cGFuZC5cblx0Ki9cbiAgICBwdWJsaWMgZXhwYW5kUm93KHJvd0lkOiBzdHJpbmcgfCBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZXhwYW5kUm93KHJvd0lkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5leHBhbmRSb3cocm93SWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFeHBvcnRzIHRoZSBUYWJsZSdzIGRhdGEuIFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBkYXRhRm9ybWF0LiBUaGUgZmlsZSBmb3JtYXQgdG8gZXhwb3J0IHRvLiBTdXBwb3J0ZWQgZm9ybWF0czogJ2NzdicsICdodG1sJywgJ2pzb24nLCAncGRmJywgJ3RzdicsICd4bHN4JywgJ3htbCcuXG5cdCogQHBhcmFtIHtzdHJpbmd9IGZpbGVOYW1lPy4gVGhlIG5hbWUgb2YgdGhlIGZpbGUgdG8gZXhwb3J0IHRvXG5cdCogQHBhcmFtIHtib29sZWFufSBleHBvcnRGaWx0ZXJlZD8uIElmIHNldCB0byB0cnVlLCBleHBvcnRzIG9ubHkgZmlsdGVyZWQgcmVjb3Jkc1xuXHQqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrPy4gQSBjYWxsYmFjayBmdW5jdGlvbiB0byBwYXNzIHRoZSBleHBvcnRlZCBkYXRhIHRvIChpZiBmaWxlTmFtZSBpcyBub3QgcHJvdmlkZWQpXG5cdCogQHJldHVybnMge2FueX1cbiAgKi9cblx0cHVibGljIGFzeW5jIGV4cG9ydERhdGEoZGF0YUZvcm1hdCwgZmlsZU5hbWU/LCBleHBvcnRGaWx0ZXJlZD8sIGNhbGxiYWNrPyk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5leHBvcnREYXRhKGRhdGFGb3JtYXQsIGZpbGVOYW1lLCBleHBvcnRGaWx0ZXJlZCwgY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmV0dXJucyBhbiBhcnJheSBvZiBzZWxlY3RlZCByb3cgaWRzLiBcblx0KiBAcmV0dXJucyB7KHN0cmluZyB8IG51bWJlcilbXX1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldFNlbGVjdGlvbigpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0U2VsZWN0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRoZSBUYWJsZSdzIHN0YXRlLCBjb250YWluaW5nIGluZm9ybWF0aW9uIGFib3V0IGNvbHVtbnMsIGV4cGFuZGVkIHJvd3MsIHNlbGVjdGVkIHJvd3MsIGFwcGxpZWQgZml0ZXJpbmcsIGdyb3VwaW5nLCBhbmQgc29ydGVkIGNvbHVtbnMuIEl0IGNhbiB0aGVuIGJlIHN0b3JlZCBvciBwYXNzZWQgdG8gdGhlIG1ldGhvZCBsb2FkU3RhdGUuIFxuXHQqIEByZXR1cm5zIHthbnl9XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRTdGF0ZSgpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0U3RhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJldHVybnMgdGhlIHZhbHVlIG9mIGEgY2VsbC4gXG5cdCogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IHJvdy4gVGhlIGlkIG9mIHRoZSBjZWxsJ3Mgcm93LlxuXHQqIEBwYXJhbSB7c3RyaW5nfSBkYXRhRmllbGQuIFRoZSBkYXRhRmllbGQgb2YgdGhlIGNlbGwncyBjb2x1bW4uXG5cdCogQHJldHVybnMge2FueX1cbiAgKi9cblx0cHVibGljIGFzeW5jIGdldFZhbHVlKHJvdywgZGF0YUZpZWxkKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldFZhbHVlKHJvdywgZGF0YUZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEdldHMgYSBjb2x1bW4gcHJvcGVydHkuIFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBjb2x1bW5EYXRhRmllbGQuIENvbHVtbiBmaWVsZCBuYW1lLlxuXHQqIEBwYXJhbSB7c3RyaW5nfSBwcm9wZXJ0eU5hbWUuIENvbHVtbiBwcm9wZXJ0eSBuYW1lLlxuXHQqIEByZXR1cm5zIHthbnl9XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRDb2x1bW5Qcm9wZXJ0eShjb2x1bW5EYXRhRmllbGQsIHByb3BlcnR5TmFtZSk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRDb2x1bW5Qcm9wZXJ0eShjb2x1bW5EYXRhRmllbGQsIHByb3BlcnR5TmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFJlc3VsdE9uUmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDaGVja3Mgd2hldGhlciBhIGdyb3VwIGlzIGV4cGFuZGVkIGFuZCByZXR1cm5zIHRydWUgb3IgZmFsc2UuIGZhbHNlIGlzIHJldHVybmVkIHdoZW4gdGhlIGdyb3VwIGluZGV4IGlzIHVuZGVmaW5lZCwgdG9vLiBcblx0KiBAcGFyYW0ge3N0cmluZ30gaW5kZXguIFRoZSBncm91cCdzIGhpZXJhcmNoaWNhbCBpbmRleC5cblx0KiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgKi9cblx0cHVibGljIGFzeW5jIGlzR3JvdXBFeHBhbmRlZChpbmRleCk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5pc0dyb3VwRXhwYW5kZWQoaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gTG9hZHMgdGhlIFRhYmxlJ3Mgc3RhdGUuIEluZm9ybWF0aW9uIGFib3V0IGNvbHVtbnMsIGV4cGFuZGVkIHJvd3MsIHNlbGVjdGVkIHJvd3MsIGFwcGxpZWQgZml0ZXJpbmcsIGdyb3VwaW5nLCBhbmQgc29ydGVkIGNvbHVtbnMgaXMgbG9hZGVkLCBiYXNlZCBvbiB0aGUgdmFsdWUgb2YgdGhlIHN0YXRlU2V0dGluZ3MgcHJvcGVydHkuIFxuXHQqIEBwYXJhbSB7YW55fSBzdGF0ZT8uIEFuIG9iamVjdCByZXR1cm5lZCBieSBvbmUgb2YgdGhlIG1ldGhvZHMgPHN0cm9uZz5nZXRTdGF0ZTwvc3Ryb25nPiBvciA8c3Ryb25nPnNhdmVTdGF0ZTwvc3Ryb25nPi4gSWYgYSBzdGF0ZSBpcyBub3QgcGFzc2VkLCB0aGUgbWV0aG9kIHRyaWVzIHRvIGxvYWQgdGhlIHN0YXRlIGZyb20gdGhlIGJyb3dzZXIncyBsb2NhbFN0b3JhZ2UuXG5cdCovXG4gICAgcHVibGljIGxvYWRTdGF0ZShzdGF0ZT86IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5sb2FkU3RhdGUoc3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmxvYWRTdGF0ZShzdGF0ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIE5hdmlnYXRlcyB0byBhIHBhZ2UuIFxuXHQqIEBwYXJhbSB7bnVtYmVyfSBwYWdlSW5kZXguIFRoZSB6ZXJvLWJhc2VkIHBhZ2UgaW5kZXggdG8gbmF2aWdhdGUgdG8uXG5cdCovXG4gICAgcHVibGljIG5hdmlnYXRlVG8ocGFnZUluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQubmF2aWdhdGVUbyhwYWdlSW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lm5hdmlnYXRlVG8ocGFnZUluZGV4KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVmcmVzaGVzIHRoZSB0YWJsZS4gXG5cdCovXG4gICAgcHVibGljIHJlZnJlc2goKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlZnJlc2goKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZWZyZXNoKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJlbW92ZXMgZmlsdGVycyBhcHBsaWVkIHRvIGEgc3BlY2lmaWMgY29sdW1uLiBcblx0KiBAcGFyYW0ge3N0cmluZ30gZGF0YUZpZWxkLiBUaGUgY29sdW1uJ3MgZGF0YSBmaWVsZC5cblx0Ki9cbiAgICBwdWJsaWMgcmVtb3ZlRmlsdGVyKGRhdGFGaWVsZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlbW92ZUZpbHRlcihkYXRhRmllbGQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlbW92ZUZpbHRlcihkYXRhRmllbGQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZW1vdmVzIGdyb3VwaW5nIGJ5IGEgY29sdW1uLiBcblx0KiBAcGFyYW0ge3N0cmluZ30gZGF0YUZpZWxkLiBUaGUgY29sdW1uJ3MgZGF0YSBmaWVsZC5cblx0Ki9cbiAgICBwdWJsaWMgcmVtb3ZlR3JvdXAoZGF0YUZpZWxkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVtb3ZlR3JvdXAoZGF0YUZpZWxkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVHcm91cChkYXRhRmllbGQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZW1vdmVzIGEgcm93IGJ5IGl0cyBpZC4gXG5cdCogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IHJvdy4gVGhlIGlkIG9mIHRoZSBjZWxsJ3Mgcm93LlxuXHQqL1xuICAgIHB1YmxpYyByZW1vdmVSb3cocm93OiBzdHJpbmcgfCBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVtb3ZlUm93KHJvdyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVtb3ZlUm93KHJvdyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNhdmVzIHRoZSBUYWJsZSdzIHN0YXRlLiBJbmZvcm1hdGlvbiBhYm91dCBjb2x1bW5zLCBleHBhbmRlZCByb3dzLCBzZWxlY3RlZCByb3dzLCBhcHBsaWVkIGZpdGVyaW5nLCBncm91cGluZywgYW5kIHNvcnRlZCBjb2x1bW5zIGlzIHNhdmVkLCBiYXNlZCBvbiB0aGUgdmFsdWUgb2YgdGhlIHN0YXRlU2V0dGluZ3MgcHJvcGVydHkuIFxuXHQqIEByZXR1cm5zIHthbnl9XG4gICovXG5cdHB1YmxpYyBhc3luYyBzYXZlU3RhdGUoKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LnNhdmVTdGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2VsZWN0cyBvbmUgb3IgbW9yZSByb3dzLiBcblx0KiBAcGFyYW0ge3N0cmluZyB8IG51bWJlciB8IChzdHJpbmcgfCBudW1iZXIpW119IHJvd0lkLiBUaGUgaWQgb2YgdGhlIHJvdyAob3IgYW4gYXJyYXkgb2Ygcm93IGlkcykgdG8gc2VsZWN0LlxuXHQqL1xuICAgIHB1YmxpYyBzZWxlY3Qocm93SWQ6IHN0cmluZyB8IG51bWJlciB8IChzdHJpbmcgfCBudW1iZXIpW10pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0KHJvd0lkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zZWxlY3Qocm93SWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSB2YWx1ZSBvZiBhIGNlbGwuIFxuXHQqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyfSByb3cuIFRoZSBpZCBvZiB0aGUgY2VsbCdzIHJvdy5cblx0KiBAcGFyYW0ge3N0cmluZ30gZGF0YUZpZWxkLiBUaGUgZGF0YUZpZWxkIG9mIHRoZSBjZWxsJ3MgY29sdW1uLlxuXHQqIEBwYXJhbSB7YW55fSB2YWx1ZS4gVGhlIG5ldyB2YWx1ZSBvZiB0aGUgY2VsbC5cblx0Ki9cbiAgICBwdWJsaWMgc2V0VmFsdWUocm93OiBzdHJpbmcgfCBudW1iZXIsIGRhdGFGaWVsZDogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNldFZhbHVlKHJvdywgZGF0YUZpZWxkLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2V0VmFsdWUocm93LCBkYXRhRmllbGQsIHZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU29ydHMgdGhlIFRhYmxlIGJ5IGEgY29sdW1uLiBcblx0KiBAcGFyYW0ge3N0cmluZ30gY29sdW1uRGF0YUZpZWxkLiBDb2x1bW4gZmllbGQgbmFtZS5cblx0KiBAcGFyYW0ge3N0cmluZ30gc29ydE9yZGVyPy4gU29ydCBvcmRlci4gUG9zc2libGUgdmFsdWVzOiAnYXNjJyAoYXNjZW5kaW5nKSwgJ2Rlc2MnIChkZXNjZW5kaW5nKSwgYW5kIG51bGwgKHJlbW92ZXMgc29ydGluZyBieSBjb2x1bW4pLiBJZiBub3QgcHJvdmlkZWQsIHRvZ2dsZXMgdGhlIHNvcnRpbmcuXG5cdCovXG4gICAgcHVibGljIHNvcnRCeShjb2x1bW5EYXRhRmllbGQ6IHN0cmluZywgc29ydE9yZGVyPzogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNvcnRCeShjb2x1bW5EYXRhRmllbGQsIHNvcnRPcmRlcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc29ydEJ5KGNvbHVtbkRhdGFGaWVsZCwgc29ydE9yZGVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBhIGNvbHVtbiBwcm9wZXJ0eS4gXG5cdCogQHBhcmFtIHtzdHJpbmd9IGNvbHVtbkRhdGFGaWVsZC4gQ29sdW1uIGZpZWxkIG5hbWUuXG5cdCogQHBhcmFtIHtzdHJpbmd9IHByb3BlcnR5TmFtZS4gQ29sdW1uIHByb3BlcnR5IG5hbWUuXG5cdCogQHBhcmFtIHthbnl9IHByb3BlcnR5VmFsdWUuIFByb3BlcnR5IHZhbHVlLlxuXHQqL1xuICAgIHB1YmxpYyBzZXRDb2x1bW5Qcm9wZXJ0eShjb2x1bW5EYXRhRmllbGQ6IHN0cmluZywgcHJvcGVydHlOYW1lOiBzdHJpbmcsIHByb3BlcnR5VmFsdWU6IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zZXRDb2x1bW5Qcm9wZXJ0eShjb2x1bW5EYXRhRmllbGQsIHByb3BlcnR5TmFtZSwgcHJvcGVydHlWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2V0Q29sdW1uUHJvcGVydHkoY29sdW1uRGF0YUZpZWxkLCBwcm9wZXJ0eU5hbWUsIHByb3BlcnR5VmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBVcGRhdGVzIGEgdGFibGUgcm93LiBUaGUgbWV0aG9kIGV4cGVjdHMgdHdvIHBhcmFtZXRlcnMgLSByb3cgaWQgYW5kIEpTT04gb2JqZWN0IHdpdGggdGhlIG5ldyByb3cgZGF0YS4gXG5cdCogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IHJvd0lkLiBUaGUgaWQgb2YgdGhlIHJvdy5cblx0KiBAcGFyYW0ge2FueX0gZGF0YS4gSlNPTiBvYmplY3Qgd2l0aCB0aGUgbmV3IHJvdydzIGRhdGEuIEV4YW1wbGU6IHtmaXJzdE5hbWU6ICdQZXRlcicsIGxhc3ROYW1lOiAnRnVsbGVyJ30uXG5cdCovXG4gICAgcHVibGljIHVwZGF0ZVJvdyhyb3dJZDogc3RyaW5nIHwgbnVtYmVyLCBkYXRhOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQudXBkYXRlUm93KHJvd0lkLCBkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC51cGRhdGVSb3cocm93SWQsIGRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBVbnNlbGVjdHMgb25lIG9yIG1vcmUgcm93cy4gXG5cdCogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXIgfCAoc3RyaW5nIHwgbnVtYmVyKVtdfSByb3dJZC4gVGhlIGlkIG9mIHRoZSByb3cgKG9yIGFuIGFycmF5IG9mIHJvdyBpZHMpIHRvIHVuc2VsZWN0LlxuXHQqL1xuICAgIHB1YmxpYyB1bnNlbGVjdChyb3dJZDogc3RyaW5nIHwgbnVtYmVyIHwgKHN0cmluZyB8IG51bWJlcilbXSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC51bnNlbGVjdChyb3dJZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQudW5zZWxlY3Qocm93SWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXHRnZXQgaXNSZW5kZXJlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQgOiBmYWxzZTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHR9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICBjb25zdCB0aGF0ID0gdGhpcztcblxuICAgICAgdGhhdC5vbkNyZWF0ZS5lbWl0KHRoYXQubmF0aXZlRWxlbWVudCk7XG5cblx0XHRTbWFydC5SZW5kZXIoKTtcblxuXHRcdHRoaXMubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzbWFydC1hbmd1bGFyJyk7XG5cblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHsgdGhhdC5vblJlYWR5LmVtaXQodGhhdC5uYXRpdmVFbGVtZW50KTsgfSk7XG5cdFx0dGhpcy5saXN0ZW4oKTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMudW5saXN0ZW4oKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblx0XHRpZiAodGhpcy5uYXRpdmVFbGVtZW50ICYmIHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG5cdFx0XHRmb3IgKGNvbnN0IHByb3BOYW1lIGluIGNoYW5nZXMpIHtcblx0XHRcdFx0aWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG5cdFx0XHRcdFx0dGhpcy5uYXRpdmVFbGVtZW50W3Byb3BOYW1lXSA9IGNoYW5nZXNbcHJvcE5hbWVdLmN1cnJlbnRWYWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQWRkIGV2ZW50IGxpc3RlbmVycy4gKi9cblx0cHJpdmF0ZSBsaXN0ZW4oKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY2VsbEJlZ2luRWRpdEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNlbGxCZWdpbkVkaXQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2VsbEJlZ2luRWRpdCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snY2VsbEJlZ2luRWRpdEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2NlbGxDbGlja0hhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNlbGxDbGljay5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjZWxsQ2xpY2snLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NlbGxDbGlja0hhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2NlbGxFbmRFZGl0SGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ2VsbEVuZEVkaXQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2VsbEVuZEVkaXQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NlbGxFbmRFZGl0SGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY2hhbmdlSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ2hhbmdlLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snY2hhbmdlSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY29sbGFwc2VIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Db2xsYXBzZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjb2xsYXBzZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29sbGFwc2VIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydleHBhbmRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25FeHBhbmQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZXhwYW5kJywgdGhhdC5ldmVudEhhbmRsZXJzWydleHBhbmRIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5DbGlja0hhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNvbHVtbkNsaWNrLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbHVtbkNsaWNrJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5DbGlja0hhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2Nsb3NlQ29sdW1uTWVudUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNsb3NlQ29sdW1uTWVudS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbG9zZUNvbHVtbk1lbnUnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2Nsb3NlQ29sdW1uTWVudUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtblJlc2l6ZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNvbHVtblJlc2l6ZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjb2x1bW5SZXNpemUnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtblJlc2l6ZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2ZpbHRlckhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkZpbHRlci5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdmaWx0ZXInLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2ZpbHRlckhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2dyb3VwSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uR3JvdXAuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZ3JvdXAnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2dyb3VwSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snb3BlbkNvbHVtbk1lbnVIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25PcGVuQ29sdW1uTWVudS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdvcGVuQ29sdW1uTWVudScsIHRoYXQuZXZlbnRIYW5kbGVyc1snb3BlbkNvbHVtbk1lbnVIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydwYWdlSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uUGFnZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdwYWdlJywgdGhhdC5ldmVudEhhbmRsZXJzWydwYWdlSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1sncm93QmVnaW5FZGl0SGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uUm93QmVnaW5FZGl0LmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Jvd0JlZ2luRWRpdCcsIHRoYXQuZXZlbnRIYW5kbGVyc1sncm93QmVnaW5FZGl0SGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1sncm93RW5kRWRpdEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblJvd0VuZEVkaXQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncm93RW5kRWRpdCcsIHRoYXQuZXZlbnRIYW5kbGVyc1sncm93RW5kRWRpdEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3NvcnRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Tb3J0LmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3NvcnQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3NvcnRIYW5kbGVyJ10pO1xuXG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJlbW92ZSBldmVudCBsaXN0ZW5lcnMuICovXG5cdHByaXZhdGUgdW5saXN0ZW4oKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2NlbGxCZWdpbkVkaXRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjZWxsQmVnaW5FZGl0JywgdGhhdC5ldmVudEhhbmRsZXJzWydjZWxsQmVnaW5FZGl0SGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjZWxsQ2xpY2tIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjZWxsQ2xpY2snLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NlbGxDbGlja0hhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY2VsbEVuZEVkaXRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjZWxsRW5kRWRpdCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snY2VsbEVuZEVkaXRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5nZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snY2hhbmdlSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjb2xsYXBzZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbGxhcHNlJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb2xsYXBzZUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snZXhwYW5kSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXhwYW5kJywgdGhhdC5ldmVudEhhbmRsZXJzWydleHBhbmRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtbkNsaWNrSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY29sdW1uQ2xpY2snLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbHVtbkNsaWNrSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjbG9zZUNvbHVtbk1lbnVIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbG9zZUNvbHVtbk1lbnUnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2Nsb3NlQ29sdW1uTWVudUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY29sdW1uUmVzaXplSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY29sdW1uUmVzaXplJywgdGhhdC5ldmVudEhhbmRsZXJzWydjb2x1bW5SZXNpemVIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2ZpbHRlckhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50Lm9uZmlsdGVySGFuZGxlciA9IG51bGw7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snZ3JvdXBIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdncm91cCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snZ3JvdXBIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ29wZW5Db2x1bW5NZW51SGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignb3BlbkNvbHVtbk1lbnUnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ29wZW5Db2x1bW5NZW51SGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydwYWdlSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncGFnZScsIHRoYXQuZXZlbnRIYW5kbGVyc1sncGFnZUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1sncm93QmVnaW5FZGl0SGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncm93QmVnaW5FZGl0JywgdGhhdC5ldmVudEhhbmRsZXJzWydyb3dCZWdpbkVkaXRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jvd0VuZEVkaXRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdyb3dFbmRFZGl0JywgdGhhdC5ldmVudEhhbmRsZXJzWydyb3dFbmRFZGl0SGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydzb3J0SGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc29ydCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snc29ydEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdH1cbn1cbiJdfQ==