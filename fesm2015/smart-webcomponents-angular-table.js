
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.table';

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
        return __awaiter(this, void 0, void 0, function* () {
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
    /** @description Returns the Table's state, containing information about columns, expanded rows, selected rows, applied fitering, grouping, and sorted columns. It can then be stored or passed to the method loadState.
    * @returns {any}
  */
    getState() {
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
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
__decorate([
    Input()
], TableComponent.prototype, "animation", null);
__decorate([
    Input()
], TableComponent.prototype, "autoLoadState", null);
__decorate([
    Input()
], TableComponent.prototype, "autoSaveState", null);
__decorate([
    Input()
], TableComponent.prototype, "columnGroups", null);
__decorate([
    Input()
], TableComponent.prototype, "columnMinWidth", null);
__decorate([
    Input()
], TableComponent.prototype, "columnReorder", null);
__decorate([
    Input()
], TableComponent.prototype, "columnResize", null);
__decorate([
    Input()
], TableComponent.prototype, "columnResizeNormalize", null);
__decorate([
    Input()
], TableComponent.prototype, "columnResizeFeedback", null);
__decorate([
    Input()
], TableComponent.prototype, "columns", null);
__decorate([
    Input()
], TableComponent.prototype, "conditionalFormatting", null);
__decorate([
    Input()
], TableComponent.prototype, "columnSizeMode", null);
__decorate([
    Input()
], TableComponent.prototype, "conditionalFormattingButton", null);
__decorate([
    Input()
], TableComponent.prototype, "deferredScrollDelay", null);
__decorate([
    Input()
], TableComponent.prototype, "dataRowId", null);
__decorate([
    Input()
], TableComponent.prototype, "dataSource", null);
__decorate([
    Input()
], TableComponent.prototype, "dataSourceSettings", null);
__decorate([
    Input()
], TableComponent.prototype, "dataTransform", null);
__decorate([
    Input()
], TableComponent.prototype, "disabled", null);
__decorate([
    Input()
], TableComponent.prototype, "editing", null);
__decorate([
    Input()
], TableComponent.prototype, "editMode", null);
__decorate([
    Input()
], TableComponent.prototype, "expandHierarchy", null);
__decorate([
    Input()
], TableComponent.prototype, "filtering", null);
__decorate([
    Input()
], TableComponent.prototype, "filterRow", null);
__decorate([
    Input()
], TableComponent.prototype, "filterTemplate", null);
__decorate([
    Input()
], TableComponent.prototype, "footerRow", null);
__decorate([
    Input()
], TableComponent.prototype, "formulas", null);
__decorate([
    Input()
], TableComponent.prototype, "freezeFooter", null);
__decorate([
    Input()
], TableComponent.prototype, "freezeHeader", null);
__decorate([
    Input()
], TableComponent.prototype, "grouping", null);
__decorate([
    Input()
], TableComponent.prototype, "groupFormatFunction", null);
__decorate([
    Input()
], TableComponent.prototype, "headerRow", null);
__decorate([
    Input()
], TableComponent.prototype, "keyboardNavigation", null);
__decorate([
    Input()
], TableComponent.prototype, "loadColumnStateBehavior", null);
__decorate([
    Input()
], TableComponent.prototype, "locale", null);
__decorate([
    Input()
], TableComponent.prototype, "messages", null);
__decorate([
    Input()
], TableComponent.prototype, "onCellRender", null);
__decorate([
    Input()
], TableComponent.prototype, "onColumnRender", null);
__decorate([
    Input()
], TableComponent.prototype, "onInit", null);
__decorate([
    Input()
], TableComponent.prototype, "pageSize", null);
__decorate([
    Input()
], TableComponent.prototype, "pageIndex", null);
__decorate([
    Input()
], TableComponent.prototype, "paging", null);
__decorate([
    Input()
], TableComponent.prototype, "rightToLeft", null);
__decorate([
    Input()
], TableComponent.prototype, "rowDetailTemplate", null);
__decorate([
    Input()
], TableComponent.prototype, "selected", null);
__decorate([
    Input()
], TableComponent.prototype, "selection", null);
__decorate([
    Input()
], TableComponent.prototype, "selectionMode", null);
__decorate([
    Input()
], TableComponent.prototype, "selectionByHierarchy", null);
__decorate([
    Input()
], TableComponent.prototype, "sort", null);
__decorate([
    Input()
], TableComponent.prototype, "sortMode", null);
__decorate([
    Input()
], TableComponent.prototype, "stateSettings", null);
__decorate([
    Input()
], TableComponent.prototype, "theme", null);
__decorate([
    Input()
], TableComponent.prototype, "tooltip", null);
__decorate([
    Input()
], TableComponent.prototype, "virtualization", null);
__decorate([
    Output()
], TableComponent.prototype, "onCellBeginEdit", void 0);
__decorate([
    Output()
], TableComponent.prototype, "onCellClick", void 0);
__decorate([
    Output()
], TableComponent.prototype, "onCellEndEdit", void 0);
__decorate([
    Output()
], TableComponent.prototype, "onChange", void 0);
__decorate([
    Output()
], TableComponent.prototype, "onCollapse", void 0);
__decorate([
    Output()
], TableComponent.prototype, "onExpand", void 0);
__decorate([
    Output()
], TableComponent.prototype, "onColumnClick", void 0);
__decorate([
    Output()
], TableComponent.prototype, "onCloseColumnMenu", void 0);
__decorate([
    Output()
], TableComponent.prototype, "onColumnResize", void 0);
__decorate([
    Output()
], TableComponent.prototype, "onFilter", void 0);
__decorate([
    Output()
], TableComponent.prototype, "onGroup", void 0);
__decorate([
    Output()
], TableComponent.prototype, "onOpenColumnMenu", void 0);
__decorate([
    Output()
], TableComponent.prototype, "onPage", void 0);
__decorate([
    Output()
], TableComponent.prototype, "onRowBeginEdit", void 0);
__decorate([
    Output()
], TableComponent.prototype, "onRowEndEdit", void 0);
__decorate([
    Output()
], TableComponent.prototype, "onSort", void 0);
TableComponent = __decorate([
    Directive({
        selector: 'smart-table, [smart-table]'
    })
], TableComponent);

let TableModule = class TableModule {
};
TableModule = __decorate([
    NgModule({
        declarations: [TableComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        exports: [TableComponent]
    })
], TableModule);

/**
 * Generated bundle index. Do not edit.
 */

export { Smart, TableComponent, TableModule, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-table.js.map
