import * as tslib_1 from "tslib";
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, forwardRef, ChangeDetectionStrategy, Output, EventEmitter, QueryList, ContentChildren } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Smart } from './smart.element';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ComboBoxComponent),
    multi: true
};
let ComboBoxComponent = class ComboBoxComponent extends BaseElement {
    constructor(ref) {
        super(ref);
        this.eventHandlers = [];
        /**
        * @description
        * The registered callback function called when a change event occurs on the form elements.
        */
        this._onChange = () => { };
        /**
        * @description
        * The registered callback function called when a blur event occurs on the form elements.
        */
        this._onTouched = () => { };
        /** @description This event is triggered when the selection is changed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	addedItems, 	disabled, 	index, 	label, 	removedItems, 	selected, 	value)
        *   addedItems - An array of List items that have been selected.
        *   disabled - A flag indicating whether or not the item that caused the change event is disabled.
        *   index - The index of the List item that triggered the event.
        *   label - The label of the List item that triggered the event.
        *   removedItems - An array of List items that have been unselected before the event was fired.
        *   selected - The selected state of the List item that triggered the event. If an item was selected the value will be true and vice versa.
        *   value - The value of the List item that triggered the event.
        */
        this.onChange = new EventEmitter();
        /** @description This event is triggered when the drop down list is closed.
        *  @param event. The custom event. 	*/
        this.onClose = new EventEmitter();
        /** @description This event is triggered when the drop down list is about to be closed. This event allows to cancel the closing operation calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	*/
        this.onClosing = new EventEmitter();
        /** @description This event is triggered when an item is clicked.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	disabled, 	index, 	label, 	selected, 	value)
        *   disabled - Indicates whether the List item that was clicked is disabled or not.
        *   index - Indicates the index of the List item that was clicked.
        *   label - The label of the List item that was clicked.
        *   selected - Indicates whether the List item that was clicked is selected or not.
        *   value - The value of the List item that was clicked.
        */
        this.onItemClick = new EventEmitter();
        /** @description This event is triggered when the drop down list is opened.
        *  @param event. The custom event. 	*/
        this.onOpen = new EventEmitter();
        /** @description This event is triggered when the drop down list is about to be opened. This event allows to cancel the opening operation calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	*/
        this.onOpening = new EventEmitter();
        /** @description This event is triggered when user starts resizing the drop down.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	position)
        *   position - An object containing the current left and top positions of the drop down.
        */
        this.onResizeStart = new EventEmitter();
        /** @description This event is triggered when the resizing of the drop down is finished.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	position)
        *   position - An object containing the current left and top positions of the drop down.
        */
        this.onResizeEnd = new EventEmitter();
        /** @description This event is triggered when user scrolls to the end of the dropDown list.
        *  @param event. The custom event. 	*/
        this.onScrollBottomReached = new EventEmitter();
        /** @description This event is triggered when user scrolls to the start of the dropDown list.
        *  @param event. The custom event. 	*/
        this.onScrollTopReached = new EventEmitter();
        /** @description This event is triggered when a token item(pill) has been clicked. This event allows to cancel the opening operation calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	*/
        this.onTokenClick = new EventEmitter();
        this._initialChange = true;
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('smart-combo-box');
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
    /** @description Used only when dropDownOpenMode is set to 'auto'. Determines the delay before the opened drop down closes if the pointer is not over the element. */
    get autoCloseDelay() {
        return this.nativeElement ? this.nativeElement.autoCloseDelay : undefined;
    }
    set autoCloseDelay(value) {
        this.nativeElement ? this.nativeElement.autoCloseDelay = value : undefined;
    }
    /** @description Determines the autocomplete mode. Auto complete modes filter the items from the dataSource and show only those that match the input. */
    get autoComplete() {
        return this.nativeElement ? this.nativeElement.autoComplete : undefined;
    }
    set autoComplete(value) {
        this.nativeElement ? this.nativeElement.autoComplete = value : undefined;
    }
    /** @description Determines the delay before the drop down opens to show the matches from the auto complete operation. The delay is measured in miliseconds. */
    get autoCompleteDelay() {
        return this.nativeElement ? this.nativeElement.autoCompleteDelay : undefined;
    }
    set autoCompleteDelay(value) {
        this.nativeElement ? this.nativeElement.autoCompleteDelay = value : undefined;
    }
    /** @description Allows the user to define a custom key name ( or multiple key names) to open that popup with. */
    get autoOpenShortcutKey() {
        return this.nativeElement ? this.nativeElement.autoOpenShortcutKey : undefined;
    }
    set autoOpenShortcutKey(value) {
        this.nativeElement ? this.nativeElement.autoOpenShortcutKey = value : undefined;
    }
    /** @description Determines the data source that will be loaded to the ComboBox. The dataSource can be an array of strings/numbers or objects where the attributes represent the properties of a List Item. For example label, value, group. It can also be a callback that returns an Array of items as previously described. */
    get dataSource() {
        return this.nativeElement ? this.nativeElement.dataSource : undefined;
    }
    set dataSource(value) {
        this.nativeElement ? this.nativeElement.dataSource = value : undefined;
    }
    /** @description Enables or disables the combo box. */
    get disabled() {
        return this.nativeElement ? this.nativeElement.disabled : undefined;
    }
    set disabled(value) {
        this.nativeElement ? this.nativeElement.disabled = value : undefined;
    }
    /** @description Determines whether an indicator will appear during filtering and remote item loading. */
    get displayLoadingIndicator() {
        return this.nativeElement ? this.nativeElement.displayLoadingIndicator : undefined;
    }
    set displayLoadingIndicator(value) {
        this.nativeElement ? this.nativeElement.displayLoadingIndicator = value : undefined;
    }
    /** @description Sets or gets the displayMember. The displayMember specifies the name of a property to display. The name is contained in the collection specified by the 'dataSource' property. */
    get displayMember() {
        return this.nativeElement ? this.nativeElement.displayMember : undefined;
    }
    set displayMember(value) {
        this.nativeElement ? this.nativeElement.displayMember = value : undefined;
    }
    /** @description Determines the drop down parent. The expected value is CSS Selector, ID or 'body'. The drop down can be removed from the body of the element and continue to work in another container. This is usefull when one of the parents of the element doesn't allow overflowing, by settings this property to 'body' the drop down will be appended to the DOM and the popup will open/close as usual. dropDownAppendTo can be a string representing the id of an HTML element on the page or a direct reference to that element. Reseting it back to null will take the drop down back to it's original place. */
    get dropDownAppendTo() {
        return this.nativeElement ? this.nativeElement.dropDownAppendTo : undefined;
    }
    set dropDownAppendTo(value) {
        this.nativeElement ? this.nativeElement.dropDownAppendTo = value : undefined;
    }
    /** @description Determines the position of the drop down button. */
    get dropDownButtonPosition() {
        return this.nativeElement ? this.nativeElement.dropDownButtonPosition : undefined;
    }
    set dropDownButtonPosition(value) {
        this.nativeElement ? this.nativeElement.dropDownButtonPosition = value : undefined;
    }
    /** @description Sets the height of the drop down. By default it's set to an empty string. In this case the height of the drop down is controlled by a CSS variable. */
    get dropDownHeight() {
        return this.nativeElement ? this.nativeElement.dropDownHeight : undefined;
    }
    set dropDownHeight(value) {
        this.nativeElement ? this.nativeElement.dropDownHeight = value : undefined;
    }
    /** @description Sets the maximum Height of the drop down. By default it's set to an empty string. In this case the maxHeight of the drop down is controlled by a CSS variable. */
    get dropDownMaxHeight() {
        return this.nativeElement ? this.nativeElement.dropDownMaxHeight : undefined;
    }
    set dropDownMaxHeight(value) {
        this.nativeElement ? this.nativeElement.dropDownMaxHeight = value : undefined;
    }
    /** @description Sets the maximum Width of the drop down. By default it's set to an empty string. In this case the maxWidth of the drop down is controlled by a CSS variable. */
    get dropDownMaxWidth() {
        return this.nativeElement ? this.nativeElement.dropDownMaxWidth : undefined;
    }
    set dropDownMaxWidth(value) {
        this.nativeElement ? this.nativeElement.dropDownMaxWidth = value : undefined;
    }
    /** @description Sets the minimum Height of the drop down. By default it's set to an empty string. In this case the minHeight of the drop down is controlled by a CSS variable. */
    get dropDownMinHeight() {
        return this.nativeElement ? this.nativeElement.dropDownMinHeight : undefined;
    }
    set dropDownMinHeight(value) {
        this.nativeElement ? this.nativeElement.dropDownMinHeight = value : undefined;
    }
    /** @description Sets the minimum Width of the drop down. By default it's set to an empty string. In this case the minWidth of the drop down is controlled by a CSS variable. */
    get dropDownMinWidth() {
        return this.nativeElement ? this.nativeElement.dropDownMinWidth : undefined;
    }
    set dropDownMinWidth(value) {
        this.nativeElement ? this.nativeElement.dropDownMinWidth = value : undefined;
    }
    /** @description Determines how the drop down is going to open. */
    get dropDownOpenMode() {
        return this.nativeElement ? this.nativeElement.dropDownOpenMode : undefined;
    }
    set dropDownOpenMode(value) {
        this.nativeElement ? this.nativeElement.dropDownOpenMode = value : undefined;
    }
    /** @description If this property is enabled, when the element's dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document. The purpose of the overlay is to make sure that clicking anywhere outside the popup will will target the overlay and not the DOM. */
    get dropDownOverlay() {
        return this.nativeElement ? this.nativeElement.dropDownOverlay : undefined;
    }
    set dropDownOverlay(value) {
        this.nativeElement ? this.nativeElement.dropDownOverlay = value : undefined;
    }
    /** @description Determines the placeholder for the drop down, displayed when there are no items in it. */
    get dropDownPlaceholder() {
        return this.nativeElement ? this.nativeElement.dropDownPlaceholder : undefined;
    }
    set dropDownPlaceholder(value) {
        this.nativeElement ? this.nativeElement.dropDownPlaceholder = value : undefined;
    }
    /** @description Determines the position of the drop down when opened. */
    get dropDownPosition() {
        return this.nativeElement ? this.nativeElement.dropDownPosition : undefined;
    }
    set dropDownPosition(value) {
        this.nativeElement ? this.nativeElement.dropDownPosition = value : undefined;
    }
    /** @description Sets the width of the drop down. By default it's set to an empty string. In this case the width of the drop down is controlled by a CSS variable. */
    get dropDownWidth() {
        return this.nativeElement ? this.nativeElement.dropDownWidth : undefined;
    }
    set dropDownWidth(value) {
        this.nativeElement ? this.nativeElement.dropDownWidth = value : undefined;
    }
    /** @description Determines the behavior of the element when Escape key is pressed. */
    get escKeyMode() {
        return this.nativeElement ? this.nativeElement.escKeyMode : undefined;
    }
    set escKeyMode(value) {
        this.nativeElement ? this.nativeElement.escKeyMode = value : undefined;
    }
    /** @description Determines whether filtering is enabled. */
    get filterable() {
        return this.nativeElement ? this.nativeElement.filterable : undefined;
    }
    set filterable(value) {
        this.nativeElement ? this.nativeElement.filterable = value : undefined;
    }
    /** @description Determines the placeholder for the drop down list filter input field. */
    get filterInputPlaceholder() {
        return this.nativeElement ? this.nativeElement.filterInputPlaceholder : undefined;
    }
    set filterInputPlaceholder(value) {
        this.nativeElement ? this.nativeElement.filterInputPlaceholder = value : undefined;
    }
    /** @description Determines the filtering mode of the Combo box. */
    get filterMode() {
        return this.nativeElement ? this.nativeElement.filterMode : undefined;
    }
    set filterMode(value) {
        this.nativeElement ? this.nativeElement.filterMode = value : undefined;
    }
    /** @description If enabled, the items will be grouped by their first letter. Can't be applied if the dataSource already contains groups. */
    get grouped() {
        return this.nativeElement ? this.nativeElement.grouped : undefined;
    }
    set grouped(value) {
        this.nativeElement ? this.nativeElement.grouped = value : undefined;
    }
    /** @description Determines which attribute from the dataSource object will be used as the group member for the items. If not set, by default 'group' property is used from the source object. groupMember is especially usefull when loading the data from a JSON file as a dataSource for the ListBox and there's a specific property that should be used to group the items. */
    get groupMember() {
        return this.nativeElement ? this.nativeElement.groupMember : undefined;
    }
    set groupMember(value) {
        this.nativeElement ? this.nativeElement.groupMember = value : undefined;
    }
    /** @description Sets additional helper text below the element. The hint is visible only when the element is focused. */
    get hint() {
        return this.nativeElement ? this.nativeElement.hint : undefined;
    }
    set hint(value) {
        this.nativeElement ? this.nativeElement.hint = value : undefined;
    }
    /** @description Determines the visibility of the horizontal Scroll bar inside the drop down. */
    get horizontalScrollBarVisibility() {
        return this.nativeElement ? this.nativeElement.horizontalScrollBarVisibility : undefined;
    }
    set horizontalScrollBarVisibility(value) {
        this.nativeElement ? this.nativeElement.horizontalScrollBarVisibility = value : undefined;
    }
    /** @description Represents the property name of a List item. Determines the value of the input when a ListItem is selected. Usefull in cases where the user wants to display for example the value of an item instead of it's label. By default the label is displayed in the input. */
    get inputMember() {
        return this.nativeElement ? this.nativeElement.inputMember : undefined;
    }
    set inputMember(value) {
        this.nativeElement ? this.nativeElement.inputMember = value : undefined;
    }
    /** @description Sets the purpose of the input and what, if any, permission the user agent has to provide automated assistance in filling out the element's input when in a form, as well as guidance to the browser as to the type of information expected in the element. This value corresponds to the standard HTML autocomplete attribute and can be set to values such as 'on', 'name', 'organization', 'street-address', etc. */
    get inputPurpose() {
        return this.nativeElement ? this.nativeElement.inputPurpose : undefined;
    }
    set inputPurpose(value) {
        this.nativeElement ? this.nativeElement.inputPurpose = value : undefined;
    }
    /** @description IncrementalSearchDelay property specifies the time-interval in milliseconds until the previous search query is cleared. The timer starts when the user stops typing. A new query can be started only when the delay has passed. */
    get incrementalSearchDelay() {
        return this.nativeElement ? this.nativeElement.incrementalSearchDelay : undefined;
    }
    set incrementalSearchDelay(value) {
        this.nativeElement ? this.nativeElement.incrementalSearchDelay = value : undefined;
    }
    /** @description Sets ot gets the mode of the incremental search mode. Incremental search is enabled by default. Typing while the drop down is focused starts the incremental search. */
    get incrementalSearchMode() {
        return this.nativeElement ? this.nativeElement.incrementalSearchMode : undefined;
    }
    set incrementalSearchMode(value) {
        this.nativeElement ? this.nativeElement.incrementalSearchMode = value : undefined;
    }
    /** @description Sets the height for all list items. Used only when virtualization is enabled. */
    get itemHeight() {
        return this.nativeElement ? this.nativeElement.itemHeight : undefined;
    }
    set itemHeight(value) {
        this.nativeElement ? this.nativeElement.itemHeight = value : undefined;
    }
    /** @description Determines the item width measuring algorithm. */
    get itemMeasureMode() {
        return this.nativeElement ? this.nativeElement.itemMeasureMode : undefined;
    }
    set itemMeasureMode(value) {
        this.nativeElement ? this.nativeElement.itemMeasureMode = value : undefined;
    }
    /** @description A getter that returns an array of all List items inside the drop down. */
    get items() {
        return this.nativeElement ? this.nativeElement.items : undefined;
    }
    set items(value) {
        this.nativeElement ? this.nativeElement.items = value : undefined;
    }
    /** @description The itemTemplate property is a string that represents the id of an HTMLTemplateElement in the DOM.  It's used to set a customize the content of the list items. */
    get itemTemplate() {
        return this.nativeElement ? this.nativeElement.itemTemplate : undefined;
    }
    set itemTemplate(value) {
        this.nativeElement ? this.nativeElement.itemTemplate = value : undefined;
    }
    /** @description Sets a little text label above the element. */
    get label() {
        return this.nativeElement ? this.nativeElement.label : undefined;
    }
    set label(value) {
        this.nativeElement ? this.nativeElement.label = value : undefined;
    }
    /** @description Determines the text that will be displayed next to the loading indicator when the loader is visible and it's position is top or bottom. */
    get loadingIndicatorPlaceholder() {
        return this.nativeElement ? this.nativeElement.loadingIndicatorPlaceholder : undefined;
    }
    set loadingIndicatorPlaceholder(value) {
        this.nativeElement ? this.nativeElement.loadingIndicatorPlaceholder = value : undefined;
    }
    /** @description Determines the position of the loading indicator. */
    get loadingIndicatorPosition() {
        return this.nativeElement ? this.nativeElement.loadingIndicatorPosition : undefined;
    }
    set loadingIndicatorPosition(value) {
        this.nativeElement ? this.nativeElement.loadingIndicatorPosition = value : undefined;
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
    /** @description Determines the minimum number of characters inside the input in order to trigger the autocomplete functionality */
    get minLength() {
        return this.nativeElement ? this.nativeElement.minLength : undefined;
    }
    set minLength(value) {
        this.nativeElement ? this.nativeElement.minLength = value : undefined;
    }
    /** @description Sets or gets the name attribute for the element. Name is used when submiting HTML forms. */
    get name() {
        return this.nativeElement ? this.nativeElement.name : undefined;
    }
    set name(value) {
        this.nativeElement ? this.nativeElement.name = value : undefined;
    }
    /** @description Determines whether the popup is opened or closed */
    get opened() {
        return this.nativeElement ? this.nativeElement.opened : undefined;
    }
    set opened(value) {
        this.nativeElement ? this.nativeElement.opened = value : undefined;
    }
    /** @description Determines the input's placeholder. */
    get placeholder() {
        return this.nativeElement ? this.nativeElement.placeholder : undefined;
    }
    set placeholder(value) {
        this.nativeElement ? this.nativeElement.placeholder = value : undefined;
    }
    /** @description Disables user interaction with the element. */
    get readonly() {
        return this.nativeElement ? this.nativeElement.readonly : undefined;
    }
    set readonly(value) {
        this.nativeElement ? this.nativeElement.readonly = value : undefined;
    }
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    get rightToLeft() {
        return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
    }
    set rightToLeft(value) {
        this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
    }
    /** @description Determines whether the resize indicator in the bottom right corner of the drop down is visible or not. This property is used in conjunction with resizeMode. */
    get resizeIndicator() {
        return this.nativeElement ? this.nativeElement.resizeIndicator : undefined;
    }
    set resizeIndicator(value) {
        this.nativeElement ? this.nativeElement.resizeIndicator = value : undefined;
    }
    /** @description Determines whether the dropDown can be resized or not. When resizing is enabled, a resize bar appears on the top/bottom side of the drop down. */
    get resizeMode() {
        return this.nativeElement ? this.nativeElement.resizeMode : undefined;
    }
    set resizeMode(value) {
        this.nativeElement ? this.nativeElement.resizeMode = value : undefined;
    }
    /** @description Determines what will be displayed in the input. */
    get selectionDisplayMode() {
        return this.nativeElement ? this.nativeElement.selectionDisplayMode : undefined;
    }
    set selectionDisplayMode(value) {
        this.nativeElement ? this.nativeElement.selectionDisplayMode = value : undefined;
    }
    /** @description Sets or gets the selected indexes. Selected indexes represents an array of the indexes of the items that should be selected. */
    get selectedIndexes() {
        return this.nativeElement ? this.nativeElement.selectedIndexes : undefined;
    }
    set selectedIndexes(value) {
        this.nativeElement ? this.nativeElement.selectedIndexes = value : undefined;
    }
    /** @description Sets or gets elected indexes. Selected values represents the values of the items that should be selected. */
    get selectedValues() {
        return this.nativeElement ? this.nativeElement.selectedValues : undefined;
    }
    set selectedValues(value) {
        this.nativeElement ? this.nativeElement.selectedValues = value : undefined;
    }
    /** @description Determines how many items can be selected. */
    get selectionMode() {
        return this.nativeElement ? this.nativeElement.selectionMode : undefined;
    }
    set selectionMode(value) {
        this.nativeElement ? this.nativeElement.selectionMode = value : undefined;
    }
    /** @description Determines whether the items are sorted alphabetically or not */
    get sorted() {
        return this.nativeElement ? this.nativeElement.sorted : undefined;
    }
    set sorted(value) {
        this.nativeElement ? this.nativeElement.sorted = value : undefined;
    }
    /** @description Determines sorting direction - ascending(asc) or descending(desc) */
    get sortDirection() {
        return this.nativeElement ? this.nativeElement.sortDirection : undefined;
    }
    set sortDirection(value) {
        this.nativeElement ? this.nativeElement.sortDirection = value : undefined;
    }
    /** @description Determines the theme for the element. Themes define the look of the elements. */
    get theme() {
        return this.nativeElement ? this.nativeElement.theme : undefined;
    }
    set theme(value) {
        this.nativeElement ? this.nativeElement.theme = value : undefined;
    }
    /** @description Sets a custom content for the tokens when selectionDisplayMode is set to 'tokens'. Tokens are used only for multiple selection. */
    get tokenTemplate() {
        return this.nativeElement ? this.nativeElement.tokenTemplate : undefined;
    }
    set tokenTemplate(value) {
        this.nativeElement ? this.nativeElement.tokenTemplate = value : undefined;
    }
    /** @description If is set to true, the element cannot be focused. */
    get unfocusable() {
        return this.nativeElement ? this.nativeElement.unfocusable : undefined;
    }
    set unfocusable(value) {
        this.nativeElement ? this.nativeElement.unfocusable = value : undefined;
    }
    /** @description Sets or gets the value. */
    get value() {
        return this.nativeElement ? this.nativeElement.value : undefined;
    }
    set value(value) {
        this.nativeElement ? this.nativeElement.value = value : undefined;
    }
    /** @description Determines the value member of an item. Stored as value in the item object. Similar to groupMember, valueMember is especially usefull when using data from a JSON file as a dataSource for the ListBox and there's a specific property that should be used for the value the items. */
    get valueMember() {
        return this.nativeElement ? this.nativeElement.valueMember : undefined;
    }
    set valueMember(value) {
        this.nativeElement ? this.nativeElement.valueMember = value : undefined;
    }
    /** @description Determines the visibility of the vertical scroll bar. */
    get verticalScrollBarVisibility() {
        return this.nativeElement ? this.nativeElement.verticalScrollBarVisibility : undefined;
    }
    set verticalScrollBarVisibility(value) {
        this.nativeElement ? this.nativeElement.verticalScrollBarVisibility = value : undefined;
    }
    /** @description Determines weather or not Virtualization is used for the Combo box. Virtualization allows a huge amount of items to be loaded to the List box while preserving the performance. For example a milion items can be loaded to the list box. */
    get virtualized() {
        return this.nativeElement ? this.nativeElement.virtualized : undefined;
    }
    set virtualized(value) {
        this.nativeElement ? this.nativeElement.virtualized = value : undefined;
    }
    /** @description Appends a ListItem to the end of the list of items inside element.
    * @param {Node} node. A ListItem element that should be added to the rest of the items as the last item.
    * @returns {Node}
  */
    appendChild(node) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.appendChild(node);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Removes all items from the drop down list.
    */
    clearItems() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearItems();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clearItems();
            });
        }
    }
    /** @description Unselects all items.
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
    /** @description Closes the dropDown list.
    */
    close() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.close();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.close();
            });
        }
    }
    /** @description Ensures the desired item is visible by scrolling to it.
    * @param {HTMLElement | string} item. A list item or value of the desired item to be visible.
    */
    ensureVisible(item) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.ensureVisible(item);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.ensureVisible(item);
            });
        }
    }
    /** @description Returns an item instance from the dropDown list.
    * @param {string} value. The value of an item from the drop down list.
    * @returns {HTMLElement}
  */
    getItem(value) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getItem(value);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Inserts a new item at a specified position.
    * @param {number} position. The position where the item must be inserted.
    * @param {any} item. Describes the properties of the item that will be inserted.
    */
    insert(position, item) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insert(position, item);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insert(position, item);
            });
        }
    }
    /** @description Inserts a new ListItem before another in the list.
    * @param {Node} node. A ListItem element that should be added before the referenceItem in the list.
    * @param {Node | null} referenceNode. A ListItem element that acts as the reference item before which a new item is about to be inserted. The referenceNode must be in the same list as the node.
    * @returns {Node}
  */
    insertBefore(node, referenceNode) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.insertBefore(node, referenceNode);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Opens the dropDown list.
    */
    open() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.open();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.open();
            });
        }
    }
    /** @description Removes an item at a specified position.
    * @param {number} position. The position of the removed item.
    */
    removeAt(position) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeAt(position);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeAt(position);
            });
        }
    }
    /** @description Removes a ListItem from the list of items inside element.
    * @param {Node} node. A ListItem element that is part of the list of items inside the element.
    * @returns {Node}
  */
    removeChild(node) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.removeChild(node);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** @description Selects an item from the dropDown list.
    * @param {string | HTMLElement} item. A string, representing the value of the item or an HTML Element referencing an item from the list
    */
    select(item) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.select(item);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.select(item);
            });
        }
    }
    /** @description Unselects an item from the dropDown list.
    * @param {string | HTMLElement} item. A string, representing the value of the item or an HTML Element referencing an item from the list
    */
    unselect(item) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.unselect(item);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.unselect(item);
            });
        }
    }
    /** @description Updates an item from the dropDown list.
    * @param {number} position. The position where the item must be updated.
    * @param {any} value. The value of the updated item.
    */
    update(position, value) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.update(position, value);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.update(position, value);
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
    get ngValue() {
        if (!this.nativeElement) {
            return null;
        }
        if (this.selectedValues && this.selectedValues.length > 0) {
            const value = this.selectedValues.length === 1 ? this.nativeElement.selectedValues[0] : this.nativeElement.selectedValues;
            return value;
        }
        const input = this.nativeElement.querySelector('input');
        return input ? input.value : null;
    }
    set ngValue(value) {
        if (this.nativeElement) {
            this.writeValue(value);
        }
    }
    writeValue(value) {
        const that = this;
        const normalizedValue = value == null ? '' : value;
        that.nativeElement.whenRendered(() => {
            that.nativeElement.$.listBox.isInitialized = that._initialChange ? false : true;
            that.clearSelection();
            if (Array.isArray(normalizedValue)) {
                value.forEach((currentValue) => this.select(currentValue));
            }
            else {
                that.select(normalizedValue);
            }
            that.nativeElement.$.listBox.isInitialized = true;
            that.nativeElement._applySelection();
            if (that._initialChange === false) {
                if (that.selectedValues && that.selectedValues.length > 1) {
                    that._onChange(that.selectedValues);
                }
                else {
                    const input = that.nativeElement.querySelector('input');
                    that._onChange((that.selectedValues && that.selectedValues.length > 0) ? that.selectedValues[0] : (input ? input.value : null));
                }
            }
        });
    }
    registerOnChange(fn) {
        this._onChange = fn;
    }
    registerOnTouched(fn) {
        this._onTouched = fn;
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
        that.eventHandlers['changeHandler'] = (event) => { that.onChange.emit(event); };
        that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
        that.eventHandlers['closeHandler'] = (event) => { that.onClose.emit(event); };
        that.nativeElement.addEventListener('close', that.eventHandlers['closeHandler']);
        that.eventHandlers['closingHandler'] = (event) => { that.onClosing.emit(event); };
        that.nativeElement.addEventListener('closing', that.eventHandlers['closingHandler']);
        that.eventHandlers['itemClickHandler'] = (event) => { that.onItemClick.emit(event); };
        that.nativeElement.addEventListener('itemClick', that.eventHandlers['itemClickHandler']);
        that.eventHandlers['openHandler'] = (event) => { that.onOpen.emit(event); };
        that.nativeElement.addEventListener('open', that.eventHandlers['openHandler']);
        that.eventHandlers['openingHandler'] = (event) => { that.onOpening.emit(event); };
        that.nativeElement.addEventListener('opening', that.eventHandlers['openingHandler']);
        that.eventHandlers['resizeStartHandler'] = (event) => { that.onResizeStart.emit(event); };
        that.nativeElement.addEventListener('resizeStart', that.eventHandlers['resizeStartHandler']);
        that.eventHandlers['resizeEndHandler'] = (event) => { that.onResizeEnd.emit(event); };
        that.nativeElement.addEventListener('resizeEnd', that.eventHandlers['resizeEndHandler']);
        that.eventHandlers['scrollBottomReachedHandler'] = (event) => { that.onScrollBottomReached.emit(event); };
        that.nativeElement.addEventListener('scrollBottomReached', that.eventHandlers['scrollBottomReachedHandler']);
        that.eventHandlers['scrollTopReachedHandler'] = (event) => { that.onScrollTopReached.emit(event); };
        that.nativeElement.addEventListener('scrollTopReached', that.eventHandlers['scrollTopReachedHandler']);
        that.eventHandlers['tokenClickHandler'] = (event) => { that.onTokenClick.emit(event); };
        that.nativeElement.addEventListener('tokenClick', that.eventHandlers['tokenClickHandler']);
        that.eventHandlers['changeModelHandler'] = (event) => {
            that._initialChange = false;
            that._onChange(that.nativeElement.selectedValues.length > 0 ? (that.nativeElement.selectedValues.length > 1 ? that.nativeElement.selectedValues : that.nativeElement.selectedValues[0]) : that.nativeElement.querySelector('input').value);
        };
        that.eventHandlers['blurModelHandler'] = (event) => {
            that._onTouched();
        };
        that.nativeElement.whenRendered(() => {
            if (that.nativeElement.querySelector('input')) {
                that.eventHandlers['keyupModelHandler'] = (event) => {
                    setTimeout(() => { that.eventHandlers['changeModelHandler'](event); }, 50);
                };
                that.nativeElement.querySelector('input').addEventListener('keyup', that.eventHandlers['keyupModelHandler']);
            }
        });
        that.nativeElement.addEventListener('change', that.eventHandlers['changeModelHandler']);
        that.nativeElement.addEventListener('blur', that.eventHandlers['blurModelHandler']);
    }
    /** @description Remove event listeners. */
    unlisten() {
        const that = this;
        if (that.eventHandlers['changeHandler']) {
            that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
        }
        if (that.eventHandlers['closeHandler']) {
            that.nativeElement.removeEventListener('close', that.eventHandlers['closeHandler']);
        }
        if (that.eventHandlers['closingHandler']) {
            that.nativeElement.removeEventListener('closing', that.eventHandlers['closingHandler']);
        }
        if (that.eventHandlers['itemClickHandler']) {
            that.nativeElement.removeEventListener('itemClick', that.eventHandlers['itemClickHandler']);
        }
        if (that.eventHandlers['openHandler']) {
            that.nativeElement.removeEventListener('open', that.eventHandlers['openHandler']);
        }
        if (that.eventHandlers['openingHandler']) {
            that.nativeElement.removeEventListener('opening', that.eventHandlers['openingHandler']);
        }
        if (that.eventHandlers['resizeStartHandler']) {
            that.nativeElement.removeEventListener('resizeStart', that.eventHandlers['resizeStartHandler']);
        }
        if (that.eventHandlers['resizeEndHandler']) {
            that.nativeElement.removeEventListener('resizeEnd', that.eventHandlers['resizeEndHandler']);
        }
        if (that.eventHandlers['scrollBottomReachedHandler']) {
            that.nativeElement.removeEventListener('scrollBottomReached', that.eventHandlers['scrollBottomReachedHandler']);
        }
        if (that.eventHandlers['scrollTopReachedHandler']) {
            that.nativeElement.removeEventListener('scrollTopReached', that.eventHandlers['scrollTopReachedHandler']);
        }
        if (that.eventHandlers['tokenClickHandler']) {
            that.nativeElement.removeEventListener('tokenClick', that.eventHandlers['tokenClickHandler']);
        }
        if (that.eventHandlers['changeModelHandler']) {
            that.nativeElement.removeEventListener('change', that.eventHandlers['changeModelHandler']);
            if (that.nativeElement.querySelector('input')) {
                that.nativeElement.querySelector('input').removeEventListener('keyup', that.eventHandlers['keyupModelHandler']);
            }
        }
        if (that.eventHandlers['blurModelHandler']) {
            that.nativeElement.removeEventListener('blur', that.eventHandlers['blurModelHandler']);
        }
    }
};
ComboBoxComponent.ctorParameters = () => [
    { type: ElementRef }
];
tslib_1.__decorate([
    Input()
], ComboBoxComponent.prototype, "animation", null);
tslib_1.__decorate([
    Input()
], ComboBoxComponent.prototype, "autoCloseDelay", null);
tslib_1.__decorate([
    Input()
], ComboBoxComponent.prototype, "autoComplete", null);
tslib_1.__decorate([
    Input()
], ComboBoxComponent.prototype, "autoCompleteDelay", null);
tslib_1.__decorate([
    Input()
], ComboBoxComponent.prototype, "autoOpenShortcutKey", null);
tslib_1.__decorate([
    Input()
], ComboBoxComponent.prototype, "dataSource", null);
tslib_1.__decorate([
    Input()
], ComboBoxComponent.prototype, "disabled", null);
tslib_1.__decorate([
    Input()
], ComboBoxComponent.prototype, "displayLoadingIndicator", null);
tslib_1.__decorate([
    Input()
], ComboBoxComponent.prototype, "displayMember", null);
tslib_1.__decorate([
    Input()
], ComboBoxComponent.prototype, "dropDownAppendTo", null);
tslib_1.__decorate([
    Input()
], ComboBoxComponent.prototype, "dropDownButtonPosition", null);
tslib_1.__decorate([
    Input()
], ComboBoxComponent.prototype, "dropDownHeight", null);
tslib_1.__decorate([
    Input()
], ComboBoxComponent.prototype, "dropDownMaxHeight", null);
tslib_1.__decorate([
    Input()
], ComboBoxComponent.prototype, "dropDownMaxWidth", null);
tslib_1.__decorate([
    Input()
], ComboBoxComponent.prototype, "dropDownMinHeight", null);
tslib_1.__decorate([
    Input()
], ComboBoxComponent.prototype, "dropDownMinWidth", null);
tslib_1.__decorate([
    Input()
], ComboBoxComponent.prototype, "dropDownOpenMode", null);
tslib_1.__decorate([
    Input()
], ComboBoxComponent.prototype, "dropDownOverlay", null);
tslib_1.__decorate([
    Input()
], ComboBoxComponent.prototype, "dropDownPlaceholder", null);
tslib_1.__decorate([
    Input()
], ComboBoxComponent.prototype, "dropDownPosition", null);
tslib_1.__decorate([
    Input()
], ComboBoxComponent.prototype, "dropDownWidth", null);
tslib_1.__decorate([
    Input()
], ComboBoxComponent.prototype, "escKeyMode", null);
tslib_1.__decorate([
    Input()
], ComboBoxComponent.prototype, "filterable", null);
tslib_1.__decorate([
    Input()
], ComboBoxComponent.prototype, "filterInputPlaceholder", null);
tslib_1.__decorate([
    Input()
], ComboBoxComponent.prototype, "filterMode", null);
tslib_1.__decorate([
    Input()
], ComboBoxComponent.prototype, "grouped", null);
tslib_1.__decorate([
    Input()
], ComboBoxComponent.prototype, "groupMember", null);
tslib_1.__decorate([
    Input()
], ComboBoxComponent.prototype, "hint", null);
tslib_1.__decorate([
    Input()
], ComboBoxComponent.prototype, "horizontalScrollBarVisibility", null);
tslib_1.__decorate([
    Input()
], ComboBoxComponent.prototype, "inputMember", null);
tslib_1.__decorate([
    Input()
], ComboBoxComponent.prototype, "inputPurpose", null);
tslib_1.__decorate([
    Input()
], ComboBoxComponent.prototype, "incrementalSearchDelay", null);
tslib_1.__decorate([
    Input()
], ComboBoxComponent.prototype, "incrementalSearchMode", null);
tslib_1.__decorate([
    Input()
], ComboBoxComponent.prototype, "itemHeight", null);
tslib_1.__decorate([
    Input()
], ComboBoxComponent.prototype, "itemMeasureMode", null);
tslib_1.__decorate([
    Input()
], ComboBoxComponent.prototype, "items", null);
tslib_1.__decorate([
    Input()
], ComboBoxComponent.prototype, "itemTemplate", null);
tslib_1.__decorate([
    Input()
], ComboBoxComponent.prototype, "label", null);
tslib_1.__decorate([
    Input()
], ComboBoxComponent.prototype, "loadingIndicatorPlaceholder", null);
tslib_1.__decorate([
    Input()
], ComboBoxComponent.prototype, "loadingIndicatorPosition", null);
tslib_1.__decorate([
    Input()
], ComboBoxComponent.prototype, "locale", null);
tslib_1.__decorate([
    Input()
], ComboBoxComponent.prototype, "localizeFormatFunction", null);
tslib_1.__decorate([
    Input()
], ComboBoxComponent.prototype, "messages", null);
tslib_1.__decorate([
    Input()
], ComboBoxComponent.prototype, "minLength", null);
tslib_1.__decorate([
    Input()
], ComboBoxComponent.prototype, "name", null);
tslib_1.__decorate([
    Input()
], ComboBoxComponent.prototype, "opened", null);
tslib_1.__decorate([
    Input()
], ComboBoxComponent.prototype, "placeholder", null);
tslib_1.__decorate([
    Input()
], ComboBoxComponent.prototype, "readonly", null);
tslib_1.__decorate([
    Input()
], ComboBoxComponent.prototype, "rightToLeft", null);
tslib_1.__decorate([
    Input()
], ComboBoxComponent.prototype, "resizeIndicator", null);
tslib_1.__decorate([
    Input()
], ComboBoxComponent.prototype, "resizeMode", null);
tslib_1.__decorate([
    Input()
], ComboBoxComponent.prototype, "selectionDisplayMode", null);
tslib_1.__decorate([
    Input()
], ComboBoxComponent.prototype, "selectedIndexes", null);
tslib_1.__decorate([
    Input()
], ComboBoxComponent.prototype, "selectedValues", null);
tslib_1.__decorate([
    Input()
], ComboBoxComponent.prototype, "selectionMode", null);
tslib_1.__decorate([
    Input()
], ComboBoxComponent.prototype, "sorted", null);
tslib_1.__decorate([
    Input()
], ComboBoxComponent.prototype, "sortDirection", null);
tslib_1.__decorate([
    Input()
], ComboBoxComponent.prototype, "theme", null);
tslib_1.__decorate([
    Input()
], ComboBoxComponent.prototype, "tokenTemplate", null);
tslib_1.__decorate([
    Input()
], ComboBoxComponent.prototype, "unfocusable", null);
tslib_1.__decorate([
    Input()
], ComboBoxComponent.prototype, "value", null);
tslib_1.__decorate([
    Input()
], ComboBoxComponent.prototype, "valueMember", null);
tslib_1.__decorate([
    Input()
], ComboBoxComponent.prototype, "verticalScrollBarVisibility", null);
tslib_1.__decorate([
    Input()
], ComboBoxComponent.prototype, "virtualized", null);
tslib_1.__decorate([
    Output()
], ComboBoxComponent.prototype, "onChange", void 0);
tslib_1.__decorate([
    Output()
], ComboBoxComponent.prototype, "onClose", void 0);
tslib_1.__decorate([
    Output()
], ComboBoxComponent.prototype, "onClosing", void 0);
tslib_1.__decorate([
    Output()
], ComboBoxComponent.prototype, "onItemClick", void 0);
tslib_1.__decorate([
    Output()
], ComboBoxComponent.prototype, "onOpen", void 0);
tslib_1.__decorate([
    Output()
], ComboBoxComponent.prototype, "onOpening", void 0);
tslib_1.__decorate([
    Output()
], ComboBoxComponent.prototype, "onResizeStart", void 0);
tslib_1.__decorate([
    Output()
], ComboBoxComponent.prototype, "onResizeEnd", void 0);
tslib_1.__decorate([
    Output()
], ComboBoxComponent.prototype, "onScrollBottomReached", void 0);
tslib_1.__decorate([
    Output()
], ComboBoxComponent.prototype, "onScrollTopReached", void 0);
tslib_1.__decorate([
    Output()
], ComboBoxComponent.prototype, "onTokenClick", void 0);
ComboBoxComponent = tslib_1.__decorate([
    Directive({
        selector: 'smart-combo-box, [smart-combo-box]',
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
    })
], ComboBoxComponent);
export { ComboBoxComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQuY29tYm9ib3guanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zbWFydC13ZWJjb21wb25lbnRzLWFuZ3VsYXIvY29tYm9ib3gvIiwic291cmNlcyI6WyJzbWFydC5jb21ib2JveC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM04sT0FBTyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVyRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFeEMsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBUXpFLE1BQU0sbUNBQW1DLEdBQVE7SUFDN0MsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGlCQUFpQixDQUFDO0lBQ2hELEtBQUssRUFBRSxJQUFJO0NBQ2QsQ0FBQTtBQVFELElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWtCLFNBQVEsV0FBVztJQUVqRCxZQUFZLEdBQXlCO1FBQ3BDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUlKLGtCQUFhLEdBQVUsRUFBRSxDQUFDO1FBYTNCOzs7VUFHRTtRQUNILGNBQVMsR0FBeUIsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO1FBQzFDOzs7VUFHRTtRQUNILGVBQVUsR0FBYyxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUM7UUFta0J2Qzs7Ozs7Ozs7O1VBU0U7UUFDUSxhQUFRLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFbkU7OENB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RUFBRSxvQ0FBb0M7UUFDOUMsU0FBUyxFQUFFLENBQUMsbUNBQW1DLENBQUM7S0FFaEQsQ0FBQztHQUVXLGlCQUFpQixDQXlrQzdCO1NBemtDWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21ib0JveCB9IGZyb20gJy4vLi4vaW5kZXgnO1xuaW1wb3J0IHsgQW5pbWF0aW9uLCBBdXRvQ29tcGxldGUsIERyb3BEb3duQnV0dG9uUG9zaXRpb24sIERyb3BEb3duT3Blbk1vZGUsIERyb3BEb3duUG9zaXRpb24sIENvbWJvQm94RXNjS2V5TW9kZSwgRmlsdGVyTW9kZSwgSG9yaXpvbnRhbFNjcm9sbEJhclZpc2liaWxpdHksIFNlYXJjaE1vZGUsIExpc3RJdGVtTWVhc3VyZU1vZGUsIFZlcnRpY2FsQWxpZ25tZW50LCBSZXNpemVNb2RlLCBTZWxlY3Rpb25EaXNwbGF5TW9kZSwgTGlzdFNlbGVjdGlvbk1vZGUsIFZlcnRpY2FsU2Nyb2xsQmFyVmlzaWJpbGl0eSwgRWxlbWVudFJlbmRlck1vZGV9IGZyb20gJy4vLi4vaW5kZXgnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBEaXJlY3RpdmUsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBTaW1wbGVDaGFuZ2VzLCBmb3J3YXJkUmVmLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFF1ZXJ5TGlzdCwgQ29udGVudENoaWxkcmVuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXNlRWxlbWVudCwgU21hcnQgfSBmcm9tICcuL3NtYXJ0LmVsZW1lbnQnO1xuZXhwb3J0IHsgQW5pbWF0aW9uLCBBdXRvQ29tcGxldGUsIERyb3BEb3duQnV0dG9uUG9zaXRpb24sIERyb3BEb3duT3Blbk1vZGUsIERyb3BEb3duUG9zaXRpb24sIENvbWJvQm94RXNjS2V5TW9kZSwgRmlsdGVyTW9kZSwgSG9yaXpvbnRhbFNjcm9sbEJhclZpc2liaWxpdHksIFNlYXJjaE1vZGUsIExpc3RJdGVtTWVhc3VyZU1vZGUsIFZlcnRpY2FsQWxpZ25tZW50LCBSZXNpemVNb2RlLCBTZWxlY3Rpb25EaXNwbGF5TW9kZSwgTGlzdFNlbGVjdGlvbk1vZGUsIFZlcnRpY2FsU2Nyb2xsQmFyVmlzaWJpbGl0eSwgRWxlbWVudFJlbmRlck1vZGV9IGZyb20gJy4vLi4vaW5kZXgnO1xuZXhwb3J0IHsgU21hcnQgfSBmcm9tICcuL3NtYXJ0LmVsZW1lbnQnO1xuZXhwb3J0IHsgQ29tYm9Cb3ggfSBmcm9tICcuLy4uL2luZGV4JztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuXG5cbmltcG9ydCB7IExpc3RJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9zbWFydC5saXN0aXRlbSc7XG5cbmltcG9ydCB7IExpc3RJdGVtc0dyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9zbWFydC5saXN0aXRlbXNncm91cCc7XG5cbmNvbnN0IENVU1RPTV9JTlBVVF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ29tYm9Cb3hDb21wb25lbnQpLFxuICAgIG11bHRpOiB0cnVlXG59XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ3NtYXJ0LWNvbWJvLWJveCwgW3NtYXJ0LWNvbWJvLWJveF0nLFxuXHRwcm92aWRlcnM6IFtDVVNUT01fSU5QVVRfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl1cblxufSlcblxuZXhwb3J0IGNsYXNzIENvbWJvQm94Q29tcG9uZW50IGV4dGVuZHMgQmFzZUVsZW1lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cblx0Y29uc3RydWN0b3IocmVmOiBFbGVtZW50UmVmPENvbWJvQm94Pikge1xuXHRcdHN1cGVyKHJlZik7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID0gcmVmLm5hdGl2ZUVsZW1lbnQgYXMgQ29tYm9Cb3g7XG5cdH1cblxuXHRwcml2YXRlIGV2ZW50SGFuZGxlcnM6IGFueVtdID0gW107XG5cblx0cHVibGljIG5hdGl2ZUVsZW1lbnQ6IENvbWJvQm94O1xuXHQvKiogQGRlc2NyaXB0aW9uIENyZWF0ZXMgdGhlIGNvbXBvbmVudCBvbiBkZW1hbmQuXG5cdCAqIEBwYXJhbSBwcm9wZXJ0aWVzIEFuIG9wdGlvbmFsIG9iamVjdCBvZiBwcm9wZXJ0aWVzLCB3aGljaCB3aWxsIGJlIGFkZGVkIHRvIHRoZSB0ZW1wbGF0ZSBiaW5kZWQgb25lcy5cblx0ICovXG5cdHB1YmxpYyBjcmVhdGVDb21wb25lbnQocHJvcGVydGllcyA9IHt9KTogYW55IHtcbiAgICBcdHRoaXMubmF0aXZlRWxlbWVudCA9IDxDb21ib0JveD5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzbWFydC1jb21iby1ib3gnKTtcblx0XHRmb3IgKGxldCBwcm9wZXJ0eU5hbWUgaW4gcHJvcGVydGllcykgeyBcbiBcdFx0XHR0aGlzLm5hdGl2ZUVsZW1lbnRbcHJvcGVydHlOYW1lXSA9IHByb3BlcnRpZXNbcHJvcGVydHlOYW1lXTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudDtcblx0fVxuICAgICAgICAvKipcbiAgICAgICAgKiBAZGVzY3JpcHRpb25cbiAgICAgICAgKiBUaGUgcmVnaXN0ZXJlZCBjYWxsYmFjayBmdW5jdGlvbiBjYWxsZWQgd2hlbiBhIGNoYW5nZSBldmVudCBvY2N1cnMgb24gdGhlIGZvcm0gZWxlbWVudHMuXG4gICAgICAgICovXG4gICAgICAgX29uQ2hhbmdlOiAodmFsdWU6IGFueSkgPT4gdm9pZCA9ICgpID0+IHt9O1xuICAgICAgICAvKipcbiAgICAgICAgKiBAZGVzY3JpcHRpb25cbiAgICAgICAgKiBUaGUgcmVnaXN0ZXJlZCBjYWxsYmFjayBmdW5jdGlvbiBjYWxsZWQgd2hlbiBhIGJsdXIgZXZlbnQgb2NjdXJzIG9uIHRoZSBmb3JtIGVsZW1lbnRzLlxuICAgICAgICAqL1xuICAgICAgIF9vblRvdWNoZWQ6ICgpID0+IGFueSA9ICgpID0+IHt9O1xuXG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIGFuaW1hdGlvbiBtb2RlLiBBbmltYXRpb24gaXMgZGlzYWJsZWQgd2hlbiB0aGUgcHJvcGVydHkgaXMgc2V0IHRvICdub25lJyAqL1xuXHRASW5wdXQoKVxuXHRnZXQgYW5pbWF0aW9uKCk6IEFuaW1hdGlvbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hbmltYXRpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGFuaW1hdGlvbih2YWx1ZTogQW5pbWF0aW9uKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmFuaW1hdGlvbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBVc2VkIG9ubHkgd2hlbiBkcm9wRG93bk9wZW5Nb2RlIGlzIHNldCB0byAnYXV0bycuIERldGVybWluZXMgdGhlIGRlbGF5IGJlZm9yZSB0aGUgb3BlbmVkIGRyb3AgZG93biBjbG9zZXMgaWYgdGhlIHBvaW50ZXIgaXMgbm90IG92ZXIgdGhlIGVsZW1lbnQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBhdXRvQ2xvc2VEZWxheSgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYXV0b0Nsb3NlRGVsYXkgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGF1dG9DbG9zZURlbGF5KHZhbHVlOiBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYXV0b0Nsb3NlRGVsYXkgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgYXV0b2NvbXBsZXRlIG1vZGUuIEF1dG8gY29tcGxldGUgbW9kZXMgZmlsdGVyIHRoZSBpdGVtcyBmcm9tIHRoZSBkYXRhU291cmNlIGFuZCBzaG93IG9ubHkgdGhvc2UgdGhhdCBtYXRjaCB0aGUgaW5wdXQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBhdXRvQ29tcGxldGUoKTogQXV0b0NvbXBsZXRlIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmF1dG9Db21wbGV0ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYXV0b0NvbXBsZXRlKHZhbHVlOiBBdXRvQ29tcGxldGUpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYXV0b0NvbXBsZXRlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIGRlbGF5IGJlZm9yZSB0aGUgZHJvcCBkb3duIG9wZW5zIHRvIHNob3cgdGhlIG1hdGNoZXMgZnJvbSB0aGUgYXV0byBjb21wbGV0ZSBvcGVyYXRpb24uIFRoZSBkZWxheSBpcyBtZWFzdXJlZCBpbiBtaWxpc2Vjb25kcy4gKi9cblx0QElucHV0KClcblx0Z2V0IGF1dG9Db21wbGV0ZURlbGF5KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hdXRvQ29tcGxldGVEZWxheSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYXV0b0NvbXBsZXRlRGVsYXkodmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hdXRvQ29tcGxldGVEZWxheSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBbGxvd3MgdGhlIHVzZXIgdG8gZGVmaW5lIGEgY3VzdG9tIGtleSBuYW1lICggb3IgbXVsdGlwbGUga2V5IG5hbWVzKSB0byBvcGVuIHRoYXQgcG9wdXAgd2l0aC4gKi9cblx0QElucHV0KClcblx0Z2V0IGF1dG9PcGVuU2hvcnRjdXRLZXkoKTogc3RyaW5nW10ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYXV0b09wZW5TaG9ydGN1dEtleSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYXV0b09wZW5TaG9ydGN1dEtleSh2YWx1ZTogc3RyaW5nW10pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYXV0b09wZW5TaG9ydGN1dEtleSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBkYXRhIHNvdXJjZSB0aGF0IHdpbGwgYmUgbG9hZGVkIHRvIHRoZSBDb21ib0JveC4gVGhlIGRhdGFTb3VyY2UgY2FuIGJlIGFuIGFycmF5IG9mIHN0cmluZ3MvbnVtYmVycyBvciBvYmplY3RzIHdoZXJlIHRoZSBhdHRyaWJ1dGVzIHJlcHJlc2VudCB0aGUgcHJvcGVydGllcyBvZiBhIExpc3QgSXRlbS4gRm9yIGV4YW1wbGUgbGFiZWwsIHZhbHVlLCBncm91cC4gSXQgY2FuIGFsc28gYmUgYSBjYWxsYmFjayB0aGF0IHJldHVybnMgYW4gQXJyYXkgb2YgaXRlbXMgYXMgcHJldmlvdXNseSBkZXNjcmliZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkYXRhU291cmNlKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kYXRhU291cmNlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkYXRhU291cmNlKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGF0YVNvdXJjZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFbmFibGVzIG9yIGRpc2FibGVzIHRoZSBjb21ibyBib3guICovXG5cdEBJbnB1dCgpXG5cdGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVkIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlZCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHdoZXRoZXIgYW4gaW5kaWNhdG9yIHdpbGwgYXBwZWFyIGR1cmluZyBmaWx0ZXJpbmcgYW5kIHJlbW90ZSBpdGVtIGxvYWRpbmcuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkaXNwbGF5TG9hZGluZ0luZGljYXRvcigpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc3BsYXlMb2FkaW5nSW5kaWNhdG9yIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkaXNwbGF5TG9hZGluZ0luZGljYXRvcih2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNwbGF5TG9hZGluZ0luZGljYXRvciA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIGRpc3BsYXlNZW1iZXIuIFRoZSBkaXNwbGF5TWVtYmVyIHNwZWNpZmllcyB0aGUgbmFtZSBvZiBhIHByb3BlcnR5IHRvIGRpc3BsYXkuIFRoZSBuYW1lIGlzIGNvbnRhaW5lZCBpbiB0aGUgY29sbGVjdGlvbiBzcGVjaWZpZWQgYnkgdGhlICdkYXRhU291cmNlJyBwcm9wZXJ0eS4gKi9cblx0QElucHV0KClcblx0Z2V0IGRpc3BsYXlNZW1iZXIoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc3BsYXlNZW1iZXIgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRpc3BsYXlNZW1iZXIodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNwbGF5TWVtYmVyID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIGRyb3AgZG93biBwYXJlbnQuIFRoZSBleHBlY3RlZCB2YWx1ZSBpcyBDU1MgU2VsZWN0b3IsIElEIG9yICdib2R5Jy4gVGhlIGRyb3AgZG93biBjYW4gYmUgcmVtb3ZlZCBmcm9tIHRoZSBib2R5IG9mIHRoZSBlbGVtZW50IGFuZCBjb250aW51ZSB0byB3b3JrIGluIGFub3RoZXIgY29udGFpbmVyLiBUaGlzIGlzIHVzZWZ1bGwgd2hlbiBvbmUgb2YgdGhlIHBhcmVudHMgb2YgdGhlIGVsZW1lbnQgZG9lc24ndCBhbGxvdyBvdmVyZmxvd2luZywgYnkgc2V0dGluZ3MgdGhpcyBwcm9wZXJ0eSB0byAnYm9keScgdGhlIGRyb3AgZG93biB3aWxsIGJlIGFwcGVuZGVkIHRvIHRoZSBET00gYW5kIHRoZSBwb3B1cCB3aWxsIG9wZW4vY2xvc2UgYXMgdXN1YWwuIGRyb3BEb3duQXBwZW5kVG8gY2FuIGJlIGEgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgaWQgb2YgYW4gSFRNTCBlbGVtZW50IG9uIHRoZSBwYWdlIG9yIGEgZGlyZWN0IHJlZmVyZW5jZSB0byB0aGF0IGVsZW1lbnQuIFJlc2V0aW5nIGl0IGJhY2sgdG8gbnVsbCB3aWxsIHRha2UgdGhlIGRyb3AgZG93biBiYWNrIHRvIGl0J3Mgb3JpZ2luYWwgcGxhY2UuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkcm9wRG93bkFwcGVuZFRvKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kcm9wRG93bkFwcGVuZFRvIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkcm9wRG93bkFwcGVuZFRvKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZHJvcERvd25BcHBlbmRUbyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBwb3NpdGlvbiBvZiB0aGUgZHJvcCBkb3duIGJ1dHRvbi4gKi9cblx0QElucHV0KClcblx0Z2V0IGRyb3BEb3duQnV0dG9uUG9zaXRpb24oKTogRHJvcERvd25CdXR0b25Qb3NpdGlvbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kcm9wRG93bkJ1dHRvblBvc2l0aW9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkcm9wRG93bkJ1dHRvblBvc2l0aW9uKHZhbHVlOiBEcm9wRG93bkJ1dHRvblBvc2l0aW9uKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRyb3BEb3duQnV0dG9uUG9zaXRpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyB0aGUgaGVpZ2h0IG9mIHRoZSBkcm9wIGRvd24uIEJ5IGRlZmF1bHQgaXQncyBzZXQgdG8gYW4gZW1wdHkgc3RyaW5nLiBJbiB0aGlzIGNhc2UgdGhlIGhlaWdodCBvZiB0aGUgZHJvcCBkb3duIGlzIGNvbnRyb2xsZWQgYnkgYSBDU1MgdmFyaWFibGUuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkcm9wRG93bkhlaWdodCgpOiBzdHJpbmcgfCBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZHJvcERvd25IZWlnaHQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRyb3BEb3duSGVpZ2h0KHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZHJvcERvd25IZWlnaHQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyB0aGUgbWF4aW11bSBIZWlnaHQgb2YgdGhlIGRyb3AgZG93bi4gQnkgZGVmYXVsdCBpdCdzIHNldCB0byBhbiBlbXB0eSBzdHJpbmcuIEluIHRoaXMgY2FzZSB0aGUgbWF4SGVpZ2h0IG9mIHRoZSBkcm9wIGRvd24gaXMgY29udHJvbGxlZCBieSBhIENTUyB2YXJpYWJsZS4gKi9cblx0QElucHV0KClcblx0Z2V0IGRyb3BEb3duTWF4SGVpZ2h0KCk6IHN0cmluZyB8IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kcm9wRG93bk1heEhlaWdodCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZHJvcERvd25NYXhIZWlnaHQodmFsdWU6IHN0cmluZyB8IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kcm9wRG93bk1heEhlaWdodCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBtYXhpbXVtIFdpZHRoIG9mIHRoZSBkcm9wIGRvd24uIEJ5IGRlZmF1bHQgaXQncyBzZXQgdG8gYW4gZW1wdHkgc3RyaW5nLiBJbiB0aGlzIGNhc2UgdGhlIG1heFdpZHRoIG9mIHRoZSBkcm9wIGRvd24gaXMgY29udHJvbGxlZCBieSBhIENTUyB2YXJpYWJsZS4gKi9cblx0QElucHV0KClcblx0Z2V0IGRyb3BEb3duTWF4V2lkdGgoKTogc3RyaW5nIHwgbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRyb3BEb3duTWF4V2lkdGggOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRyb3BEb3duTWF4V2lkdGgodmFsdWU6IHN0cmluZyB8IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kcm9wRG93bk1heFdpZHRoID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgdGhlIG1pbmltdW0gSGVpZ2h0IG9mIHRoZSBkcm9wIGRvd24uIEJ5IGRlZmF1bHQgaXQncyBzZXQgdG8gYW4gZW1wdHkgc3RyaW5nLiBJbiB0aGlzIGNhc2UgdGhlIG1pbkhlaWdodCBvZiB0aGUgZHJvcCBkb3duIGlzIGNvbnRyb2xsZWQgYnkgYSBDU1MgdmFyaWFibGUuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkcm9wRG93bk1pbkhlaWdodCgpOiBzdHJpbmcgfCBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZHJvcERvd25NaW5IZWlnaHQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRyb3BEb3duTWluSGVpZ2h0KHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZHJvcERvd25NaW5IZWlnaHQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyB0aGUgbWluaW11bSBXaWR0aCBvZiB0aGUgZHJvcCBkb3duLiBCeSBkZWZhdWx0IGl0J3Mgc2V0IHRvIGFuIGVtcHR5IHN0cmluZy4gSW4gdGhpcyBjYXNlIHRoZSBtaW5XaWR0aCBvZiB0aGUgZHJvcCBkb3duIGlzIGNvbnRyb2xsZWQgYnkgYSBDU1MgdmFyaWFibGUuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkcm9wRG93bk1pbldpZHRoKCk6IHN0cmluZyB8IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kcm9wRG93bk1pbldpZHRoIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkcm9wRG93bk1pbldpZHRoKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZHJvcERvd25NaW5XaWR0aCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIGhvdyB0aGUgZHJvcCBkb3duIGlzIGdvaW5nIHRvIG9wZW4uICovXG5cdEBJbnB1dCgpXG5cdGdldCBkcm9wRG93bk9wZW5Nb2RlKCk6IERyb3BEb3duT3Blbk1vZGUge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZHJvcERvd25PcGVuTW9kZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZHJvcERvd25PcGVuTW9kZSh2YWx1ZTogRHJvcERvd25PcGVuTW9kZSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kcm9wRG93bk9wZW5Nb2RlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIElmIHRoaXMgcHJvcGVydHkgaXMgZW5hYmxlZCwgd2hlbiB0aGUgZWxlbWVudCdzIGRyb3Bkb3duIGlzIG9wZW5lZCwgYSB0cmFuc3BhcmVudCBvdmVybGF5IGlzIHBvc2l0aW9uZWQgYmV0d2VlbiB0aGUgZHJvcGRvd24gYW5kIHRoZSByZXN0IG9mIHRoZSBkb2N1bWVudC4gVGhlIHB1cnBvc2Ugb2YgdGhlIG92ZXJsYXkgaXMgdG8gbWFrZSBzdXJlIHRoYXQgY2xpY2tpbmcgYW55d2hlcmUgb3V0c2lkZSB0aGUgcG9wdXAgd2lsbCB3aWxsIHRhcmdldCB0aGUgb3ZlcmxheSBhbmQgbm90IHRoZSBET00uICovXG5cdEBJbnB1dCgpXG5cdGdldCBkcm9wRG93bk92ZXJsYXkoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kcm9wRG93bk92ZXJsYXkgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRyb3BEb3duT3ZlcmxheSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kcm9wRG93bk92ZXJsYXkgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgcGxhY2Vob2xkZXIgZm9yIHRoZSBkcm9wIGRvd24sIGRpc3BsYXllZCB3aGVuIHRoZXJlIGFyZSBubyBpdGVtcyBpbiBpdC4gKi9cblx0QElucHV0KClcblx0Z2V0IGRyb3BEb3duUGxhY2Vob2xkZXIoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRyb3BEb3duUGxhY2Vob2xkZXIgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRyb3BEb3duUGxhY2Vob2xkZXIodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kcm9wRG93blBsYWNlaG9sZGVyID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIHBvc2l0aW9uIG9mIHRoZSBkcm9wIGRvd24gd2hlbiBvcGVuZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkcm9wRG93blBvc2l0aW9uKCk6IERyb3BEb3duUG9zaXRpb24ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZHJvcERvd25Qb3NpdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZHJvcERvd25Qb3NpdGlvbih2YWx1ZTogRHJvcERvd25Qb3NpdGlvbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kcm9wRG93blBvc2l0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgdGhlIHdpZHRoIG9mIHRoZSBkcm9wIGRvd24uIEJ5IGRlZmF1bHQgaXQncyBzZXQgdG8gYW4gZW1wdHkgc3RyaW5nLiBJbiB0aGlzIGNhc2UgdGhlIHdpZHRoIG9mIHRoZSBkcm9wIGRvd24gaXMgY29udHJvbGxlZCBieSBhIENTUyB2YXJpYWJsZS4gKi9cblx0QElucHV0KClcblx0Z2V0IGRyb3BEb3duV2lkdGgoKTogc3RyaW5nIHwgbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRyb3BEb3duV2lkdGggOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRyb3BEb3duV2lkdGgodmFsdWU6IHN0cmluZyB8IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kcm9wRG93bldpZHRoID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIGJlaGF2aW9yIG9mIHRoZSBlbGVtZW50IHdoZW4gRXNjYXBlIGtleSBpcyBwcmVzc2VkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZXNjS2V5TW9kZSgpOiBDb21ib0JveEVzY0tleU1vZGUge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZXNjS2V5TW9kZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZXNjS2V5TW9kZSh2YWx1ZTogQ29tYm9Cb3hFc2NLZXlNb2RlKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmVzY0tleU1vZGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB3aGV0aGVyIGZpbHRlcmluZyBpcyBlbmFibGVkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZmlsdGVyYWJsZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmZpbHRlcmFibGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGZpbHRlcmFibGUodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZmlsdGVyYWJsZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBwbGFjZWhvbGRlciBmb3IgdGhlIGRyb3AgZG93biBsaXN0IGZpbHRlciBpbnB1dCBmaWVsZC4gKi9cblx0QElucHV0KClcblx0Z2V0IGZpbHRlcklucHV0UGxhY2Vob2xkZXIoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmZpbHRlcklucHV0UGxhY2Vob2xkZXIgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGZpbHRlcklucHV0UGxhY2Vob2xkZXIodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5maWx0ZXJJbnB1dFBsYWNlaG9sZGVyID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIGZpbHRlcmluZyBtb2RlIG9mIHRoZSBDb21ibyBib3guICovXG5cdEBJbnB1dCgpXG5cdGdldCBmaWx0ZXJNb2RlKCk6IEZpbHRlck1vZGUge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZmlsdGVyTW9kZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZmlsdGVyTW9kZSh2YWx1ZTogRmlsdGVyTW9kZSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5maWx0ZXJNb2RlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIElmIGVuYWJsZWQsIHRoZSBpdGVtcyB3aWxsIGJlIGdyb3VwZWQgYnkgdGhlaXIgZmlyc3QgbGV0dGVyLiBDYW4ndCBiZSBhcHBsaWVkIGlmIHRoZSBkYXRhU291cmNlIGFscmVhZHkgY29udGFpbnMgZ3JvdXBzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZ3JvdXBlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lmdyb3VwZWQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGdyb3VwZWQodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZ3JvdXBlZCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHdoaWNoIGF0dHJpYnV0ZSBmcm9tIHRoZSBkYXRhU291cmNlIG9iamVjdCB3aWxsIGJlIHVzZWQgYXMgdGhlIGdyb3VwIG1lbWJlciBmb3IgdGhlIGl0ZW1zLiBJZiBub3Qgc2V0LCBieSBkZWZhdWx0ICdncm91cCcgcHJvcGVydHkgaXMgdXNlZCBmcm9tIHRoZSBzb3VyY2Ugb2JqZWN0LiBncm91cE1lbWJlciBpcyBlc3BlY2lhbGx5IHVzZWZ1bGwgd2hlbiBsb2FkaW5nIHRoZSBkYXRhIGZyb20gYSBKU09OIGZpbGUgYXMgYSBkYXRhU291cmNlIGZvciB0aGUgTGlzdEJveCBhbmQgdGhlcmUncyBhIHNwZWNpZmljIHByb3BlcnR5IHRoYXQgc2hvdWxkIGJlIHVzZWQgdG8gZ3JvdXAgdGhlIGl0ZW1zLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZ3JvdXBNZW1iZXIoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lmdyb3VwTWVtYmVyIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBncm91cE1lbWJlcih2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lmdyb3VwTWVtYmVyID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgYWRkaXRpb25hbCBoZWxwZXIgdGV4dCBiZWxvdyB0aGUgZWxlbWVudC4gVGhlIGhpbnQgaXMgdmlzaWJsZSBvbmx5IHdoZW4gdGhlIGVsZW1lbnQgaXMgZm9jdXNlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IGhpbnQoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmhpbnQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGhpbnQodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oaW50ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIHZpc2liaWxpdHkgb2YgdGhlIGhvcml6b250YWwgU2Nyb2xsIGJhciBpbnNpZGUgdGhlIGRyb3AgZG93bi4gKi9cblx0QElucHV0KClcblx0Z2V0IGhvcml6b250YWxTY3JvbGxCYXJWaXNpYmlsaXR5KCk6IEhvcml6b250YWxTY3JvbGxCYXJWaXNpYmlsaXR5IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lmhvcml6b250YWxTY3JvbGxCYXJWaXNpYmlsaXR5IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBob3Jpem9udGFsU2Nyb2xsQmFyVmlzaWJpbGl0eSh2YWx1ZTogSG9yaXpvbnRhbFNjcm9sbEJhclZpc2liaWxpdHkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaG9yaXpvbnRhbFNjcm9sbEJhclZpc2liaWxpdHkgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVwcmVzZW50cyB0aGUgcHJvcGVydHkgbmFtZSBvZiBhIExpc3QgaXRlbS4gRGV0ZXJtaW5lcyB0aGUgdmFsdWUgb2YgdGhlIGlucHV0IHdoZW4gYSBMaXN0SXRlbSBpcyBzZWxlY3RlZC4gVXNlZnVsbCBpbiBjYXNlcyB3aGVyZSB0aGUgdXNlciB3YW50cyB0byBkaXNwbGF5IGZvciBleGFtcGxlIHRoZSB2YWx1ZSBvZiBhbiBpdGVtIGluc3RlYWQgb2YgaXQncyBsYWJlbC4gQnkgZGVmYXVsdCB0aGUgbGFiZWwgaXMgZGlzcGxheWVkIGluIHRoZSBpbnB1dC4gKi9cblx0QElucHV0KClcblx0Z2V0IGlucHV0TWVtYmVyKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5pbnB1dE1lbWJlciA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgaW5wdXRNZW1iZXIodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5pbnB1dE1lbWJlciA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBwdXJwb3NlIG9mIHRoZSBpbnB1dCBhbmQgd2hhdCwgaWYgYW55LCBwZXJtaXNzaW9uIHRoZSB1c2VyIGFnZW50IGhhcyB0byBwcm92aWRlIGF1dG9tYXRlZCBhc3Npc3RhbmNlIGluIGZpbGxpbmcgb3V0IHRoZSBlbGVtZW50J3MgaW5wdXQgd2hlbiBpbiBhIGZvcm0sIGFzIHdlbGwgYXMgZ3VpZGFuY2UgdG8gdGhlIGJyb3dzZXIgYXMgdG8gdGhlIHR5cGUgb2YgaW5mb3JtYXRpb24gZXhwZWN0ZWQgaW4gdGhlIGVsZW1lbnQuIFRoaXMgdmFsdWUgY29ycmVzcG9uZHMgdG8gdGhlIHN0YW5kYXJkIEhUTUwgYXV0b2NvbXBsZXRlIGF0dHJpYnV0ZSBhbmQgY2FuIGJlIHNldCB0byB2YWx1ZXMgc3VjaCBhcyAnb24nLCAnbmFtZScsICdvcmdhbml6YXRpb24nLCAnc3RyZWV0LWFkZHJlc3MnLCBldGMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBpbnB1dFB1cnBvc2UoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmlucHV0UHVycG9zZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgaW5wdXRQdXJwb3NlKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5wdXRQdXJwb3NlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEluY3JlbWVudGFsU2VhcmNoRGVsYXkgcHJvcGVydHkgc3BlY2lmaWVzIHRoZSB0aW1lLWludGVydmFsIGluIG1pbGxpc2Vjb25kcyB1bnRpbCB0aGUgcHJldmlvdXMgc2VhcmNoIHF1ZXJ5IGlzIGNsZWFyZWQuIFRoZSB0aW1lciBzdGFydHMgd2hlbiB0aGUgdXNlciBzdG9wcyB0eXBpbmcuIEEgbmV3IHF1ZXJ5IGNhbiBiZSBzdGFydGVkIG9ubHkgd2hlbiB0aGUgZGVsYXkgaGFzIHBhc3NlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IGluY3JlbWVudGFsU2VhcmNoRGVsYXkoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmluY3JlbWVudGFsU2VhcmNoRGVsYXkgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGluY3JlbWVudGFsU2VhcmNoRGVsYXkodmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5pbmNyZW1lbnRhbFNlYXJjaERlbGF5ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3QgZ2V0cyB0aGUgbW9kZSBvZiB0aGUgaW5jcmVtZW50YWwgc2VhcmNoIG1vZGUuIEluY3JlbWVudGFsIHNlYXJjaCBpcyBlbmFibGVkIGJ5IGRlZmF1bHQuIFR5cGluZyB3aGlsZSB0aGUgZHJvcCBkb3duIGlzIGZvY3VzZWQgc3RhcnRzIHRoZSBpbmNyZW1lbnRhbCBzZWFyY2guICovXG5cdEBJbnB1dCgpXG5cdGdldCBpbmNyZW1lbnRhbFNlYXJjaE1vZGUoKTogU2VhcmNoTW9kZSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5pbmNyZW1lbnRhbFNlYXJjaE1vZGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGluY3JlbWVudGFsU2VhcmNoTW9kZSh2YWx1ZTogU2VhcmNoTW9kZSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5pbmNyZW1lbnRhbFNlYXJjaE1vZGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyB0aGUgaGVpZ2h0IGZvciBhbGwgbGlzdCBpdGVtcy4gVXNlZCBvbmx5IHdoZW4gdmlydHVhbGl6YXRpb24gaXMgZW5hYmxlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IGl0ZW1IZWlnaHQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lml0ZW1IZWlnaHQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGl0ZW1IZWlnaHQodmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5pdGVtSGVpZ2h0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIGl0ZW0gd2lkdGggbWVhc3VyaW5nIGFsZ29yaXRobS4gKi9cblx0QElucHV0KClcblx0Z2V0IGl0ZW1NZWFzdXJlTW9kZSgpOiBMaXN0SXRlbU1lYXN1cmVNb2RlIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lml0ZW1NZWFzdXJlTW9kZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgaXRlbU1lYXN1cmVNb2RlKHZhbHVlOiBMaXN0SXRlbU1lYXN1cmVNb2RlKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lml0ZW1NZWFzdXJlTW9kZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBIGdldHRlciB0aGF0IHJldHVybnMgYW4gYXJyYXkgb2YgYWxsIExpc3QgaXRlbXMgaW5zaWRlIHRoZSBkcm9wIGRvd24uICovXG5cdEBJbnB1dCgpXG5cdGdldCBpdGVtcygpOiB7bGFiZWw6IHN0cmluZywgdmFsdWU6IHN0cmluZ31bXSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5pdGVtcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgaXRlbXModmFsdWU6IHtsYWJlbDogc3RyaW5nLCB2YWx1ZTogc3RyaW5nfVtdKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lml0ZW1zID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoZSBpdGVtVGVtcGxhdGUgcHJvcGVydHkgaXMgYSBzdHJpbmcgdGhhdCByZXByZXNlbnRzIHRoZSBpZCBvZiBhbiBIVE1MVGVtcGxhdGVFbGVtZW50IGluIHRoZSBET00uICBJdCdzIHVzZWQgdG8gc2V0IGEgY3VzdG9taXplIHRoZSBjb250ZW50IG9mIHRoZSBsaXN0IGl0ZW1zLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgaXRlbVRlbXBsYXRlKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5pdGVtVGVtcGxhdGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGl0ZW1UZW1wbGF0ZSh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lml0ZW1UZW1wbGF0ZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIGEgbGl0dGxlIHRleHQgbGFiZWwgYWJvdmUgdGhlIGVsZW1lbnQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBsYWJlbCgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubGFiZWwgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGxhYmVsKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubGFiZWwgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgdGV4dCB0aGF0IHdpbGwgYmUgZGlzcGxheWVkIG5leHQgdG8gdGhlIGxvYWRpbmcgaW5kaWNhdG9yIHdoZW4gdGhlIGxvYWRlciBpcyB2aXNpYmxlIGFuZCBpdCdzIHBvc2l0aW9uIGlzIHRvcCBvciBib3R0b20uICovXG5cdEBJbnB1dCgpXG5cdGdldCBsb2FkaW5nSW5kaWNhdG9yUGxhY2Vob2xkZXIoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxvYWRpbmdJbmRpY2F0b3JQbGFjZWhvbGRlciA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbG9hZGluZ0luZGljYXRvclBsYWNlaG9sZGVyKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubG9hZGluZ0luZGljYXRvclBsYWNlaG9sZGVyID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIHBvc2l0aW9uIG9mIHRoZSBsb2FkaW5nIGluZGljYXRvci4gKi9cblx0QElucHV0KClcblx0Z2V0IGxvYWRpbmdJbmRpY2F0b3JQb3NpdGlvbigpOiBWZXJ0aWNhbEFsaWdubWVudCB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sb2FkaW5nSW5kaWNhdG9yUG9zaXRpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGxvYWRpbmdJbmRpY2F0b3JQb3NpdGlvbih2YWx1ZTogVmVydGljYWxBbGlnbm1lbnQpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubG9hZGluZ0luZGljYXRvclBvc2l0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgbGFuZ3VhZ2UuIFVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCB0aGUgcHJvcGVydHkgbWVzc2FnZXMuICAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbG9jYWxlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sb2NhbGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGxvY2FsZSh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxvY2FsZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDYWxsYmFjayB1c2VkIHRvIGN1c3RvbWl6ZSB0aGUgZm9ybWF0IG9mIHRoZSBtZXNzYWdlcyB0aGF0IGFyZSByZXR1cm5lZCBmcm9tIHRoZSBMb2NhbGl6YXRpb24gTW9kdWxlLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbG9jYWxpemVGb3JtYXRGdW5jdGlvbigpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubG9jYWxpemVGb3JtYXRGdW5jdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbG9jYWxpemVGb3JtYXRGdW5jdGlvbih2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxvY2FsaXplRm9ybWF0RnVuY3Rpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIGFuIG9iamVjdCBzcGVjaWZ5aW5nIHN0cmluZ3MgdXNlZCBpbiB0aGUgd2lkZ2V0IHRoYXQgY2FuIGJlIGxvY2FsaXplZC4gVXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZSBwcm9wZXJ0eSBsb2NhbGUuICAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbWVzc2FnZXMoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm1lc3NhZ2VzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBtZXNzYWdlcyh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm1lc3NhZ2VzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIG1pbmltdW0gbnVtYmVyIG9mIGNoYXJhY3RlcnMgaW5zaWRlIHRoZSBpbnB1dCBpbiBvcmRlciB0byB0cmlnZ2VyIHRoZSBhdXRvY29tcGxldGUgZnVuY3Rpb25hbGl0eSAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbWluTGVuZ3RoKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5taW5MZW5ndGggOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG1pbkxlbmd0aCh2YWx1ZTogbnVtYmVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm1pbkxlbmd0aCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIG5hbWUgYXR0cmlidXRlIGZvciB0aGUgZWxlbWVudC4gTmFtZSBpcyB1c2VkIHdoZW4gc3VibWl0aW5nIEhUTUwgZm9ybXMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBuYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5uYW1lIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubmFtZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHBvcHVwIGlzIG9wZW5lZCBvciBjbG9zZWQgKi9cblx0QElucHV0KClcblx0Z2V0IG9wZW5lZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9wZW5lZCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgb3BlbmVkKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9wZW5lZCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBpbnB1dCdzIHBsYWNlaG9sZGVyLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcGxhY2Vob2xkZXIoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnBsYWNlaG9sZGVyIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBwbGFjZWhvbGRlcih2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnBsYWNlaG9sZGVyID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERpc2FibGVzIHVzZXIgaW50ZXJhY3Rpb24gd2l0aCB0aGUgZWxlbWVudC4gKi9cblx0QElucHV0KClcblx0Z2V0IHJlYWRvbmx5KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmVhZG9ubHkgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHJlYWRvbmx5KHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlYWRvbmx5ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgdmFsdWUgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBlbGVtZW50IGlzIGFsaWduZWQgdG8gc3VwcG9ydCBsb2NhbGVzIHVzaW5nIHJpZ2h0LXRvLWxlZnQgZm9udHMuICovXG5cdEBJbnB1dCgpXG5cdGdldCByaWdodFRvTGVmdCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJpZ2h0VG9MZWZ0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCByaWdodFRvTGVmdCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yaWdodFRvTGVmdCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHJlc2l6ZSBpbmRpY2F0b3IgaW4gdGhlIGJvdHRvbSByaWdodCBjb3JuZXIgb2YgdGhlIGRyb3AgZG93biBpcyB2aXNpYmxlIG9yIG5vdC4gVGhpcyBwcm9wZXJ0eSBpcyB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggcmVzaXplTW9kZS4gKi9cblx0QElucHV0KClcblx0Z2V0IHJlc2l6ZUluZGljYXRvcigpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlc2l6ZUluZGljYXRvciA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcmVzaXplSW5kaWNhdG9yKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlc2l6ZUluZGljYXRvciA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGRyb3BEb3duIGNhbiBiZSByZXNpemVkIG9yIG5vdC4gV2hlbiByZXNpemluZyBpcyBlbmFibGVkLCBhIHJlc2l6ZSBiYXIgYXBwZWFycyBvbiB0aGUgdG9wL2JvdHRvbSBzaWRlIG9mIHRoZSBkcm9wIGRvd24uICovXG5cdEBJbnB1dCgpXG5cdGdldCByZXNpemVNb2RlKCk6IFJlc2l6ZU1vZGUge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmVzaXplTW9kZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcmVzaXplTW9kZSh2YWx1ZTogUmVzaXplTW9kZSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZXNpemVNb2RlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgd2hhdCB3aWxsIGJlIGRpc3BsYXllZCBpbiB0aGUgaW5wdXQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBzZWxlY3Rpb25EaXNwbGF5TW9kZSgpOiBTZWxlY3Rpb25EaXNwbGF5TW9kZSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25EaXNwbGF5TW9kZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc2VsZWN0aW9uRGlzcGxheU1vZGUodmFsdWU6IFNlbGVjdGlvbkRpc3BsYXlNb2RlKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdGlvbkRpc3BsYXlNb2RlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgc2VsZWN0ZWQgaW5kZXhlcy4gU2VsZWN0ZWQgaW5kZXhlcyByZXByZXNlbnRzIGFuIGFycmF5IG9mIHRoZSBpbmRleGVzIG9mIHRoZSBpdGVtcyB0aGF0IHNob3VsZCBiZSBzZWxlY3RlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IHNlbGVjdGVkSW5kZXhlcygpOiBudW1iZXJbXSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zZWxlY3RlZEluZGV4ZXMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHNlbGVjdGVkSW5kZXhlcyh2YWx1ZTogbnVtYmVyW10pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0ZWRJbmRleGVzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyBlbGVjdGVkIGluZGV4ZXMuIFNlbGVjdGVkIHZhbHVlcyByZXByZXNlbnRzIHRoZSB2YWx1ZXMgb2YgdGhlIGl0ZW1zIHRoYXQgc2hvdWxkIGJlIHNlbGVjdGVkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc2VsZWN0ZWRWYWx1ZXMoKTogc3RyaW5nW10ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0ZWRWYWx1ZXMgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHNlbGVjdGVkVmFsdWVzKHZhbHVlOiBzdHJpbmdbXSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zZWxlY3RlZFZhbHVlcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIGhvdyBtYW55IGl0ZW1zIGNhbiBiZSBzZWxlY3RlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IHNlbGVjdGlvbk1vZGUoKTogTGlzdFNlbGVjdGlvbk1vZGUge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uTW9kZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc2VsZWN0aW9uTW9kZSh2YWx1ZTogTGlzdFNlbGVjdGlvbk1vZGUpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uTW9kZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGl0ZW1zIGFyZSBzb3J0ZWQgYWxwaGFiZXRpY2FsbHkgb3Igbm90ICovXG5cdEBJbnB1dCgpXG5cdGdldCBzb3J0ZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zb3J0ZWQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHNvcnRlZCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zb3J0ZWQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyBzb3J0aW5nIGRpcmVjdGlvbiAtIGFzY2VuZGluZyhhc2MpIG9yIGRlc2NlbmRpbmcoZGVzYykgKi9cblx0QElucHV0KClcblx0Z2V0IHNvcnREaXJlY3Rpb24oKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNvcnREaXJlY3Rpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHNvcnREaXJlY3Rpb24odmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zb3J0RGlyZWN0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIHRoZW1lIGZvciB0aGUgZWxlbWVudC4gVGhlbWVzIGRlZmluZSB0aGUgbG9vayBvZiB0aGUgZWxlbWVudHMuICovXG5cdEBJbnB1dCgpXG5cdGdldCB0aGVtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGhlbWUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHRoZW1lKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudGhlbWUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBhIGN1c3RvbSBjb250ZW50IGZvciB0aGUgdG9rZW5zIHdoZW4gc2VsZWN0aW9uRGlzcGxheU1vZGUgaXMgc2V0IHRvICd0b2tlbnMnLiBUb2tlbnMgYXJlIHVzZWQgb25seSBmb3IgbXVsdGlwbGUgc2VsZWN0aW9uLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdG9rZW5UZW1wbGF0ZSgpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudG9rZW5UZW1wbGF0ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdG9rZW5UZW1wbGF0ZSh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRva2VuVGVtcGxhdGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSWYgaXMgc2V0IHRvIHRydWUsIHRoZSBlbGVtZW50IGNhbm5vdCBiZSBmb2N1c2VkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdW5mb2N1c2FibGUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC51bmZvY3VzYWJsZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdW5mb2N1c2FibGUodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudW5mb2N1c2FibGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSB2YWx1ZS4gKi9cblx0QElucHV0KClcblx0Z2V0IHZhbHVlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC52YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdmFsdWUodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC52YWx1ZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSB2YWx1ZSBtZW1iZXIgb2YgYW4gaXRlbS4gU3RvcmVkIGFzIHZhbHVlIGluIHRoZSBpdGVtIG9iamVjdC4gU2ltaWxhciB0byBncm91cE1lbWJlciwgdmFsdWVNZW1iZXIgaXMgZXNwZWNpYWxseSB1c2VmdWxsIHdoZW4gdXNpbmcgZGF0YSBmcm9tIGEgSlNPTiBmaWxlIGFzIGEgZGF0YVNvdXJjZSBmb3IgdGhlIExpc3RCb3ggYW5kIHRoZXJlJ3MgYSBzcGVjaWZpYyBwcm9wZXJ0eSB0aGF0IHNob3VsZCBiZSB1c2VkIGZvciB0aGUgdmFsdWUgdGhlIGl0ZW1zLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdmFsdWVNZW1iZXIoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnZhbHVlTWVtYmVyIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB2YWx1ZU1lbWJlcih2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnZhbHVlTWVtYmVyID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIHZpc2liaWxpdHkgb2YgdGhlIHZlcnRpY2FsIHNjcm9sbCBiYXIuICovXG5cdEBJbnB1dCgpXG5cdGdldCB2ZXJ0aWNhbFNjcm9sbEJhclZpc2liaWxpdHkoKTogVmVydGljYWxTY3JvbGxCYXJWaXNpYmlsaXR5IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnZlcnRpY2FsU2Nyb2xsQmFyVmlzaWJpbGl0eSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdmVydGljYWxTY3JvbGxCYXJWaXNpYmlsaXR5KHZhbHVlOiBWZXJ0aWNhbFNjcm9sbEJhclZpc2liaWxpdHkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudmVydGljYWxTY3JvbGxCYXJWaXNpYmlsaXR5ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgd2VhdGhlciBvciBub3QgVmlydHVhbGl6YXRpb24gaXMgdXNlZCBmb3IgdGhlIENvbWJvIGJveC4gVmlydHVhbGl6YXRpb24gYWxsb3dzIGEgaHVnZSBhbW91bnQgb2YgaXRlbXMgdG8gYmUgbG9hZGVkIHRvIHRoZSBMaXN0IGJveCB3aGlsZSBwcmVzZXJ2aW5nIHRoZSBwZXJmb3JtYW5jZS4gRm9yIGV4YW1wbGUgYSBtaWxpb24gaXRlbXMgY2FuIGJlIGxvYWRlZCB0byB0aGUgbGlzdCBib3guICovXG5cdEBJbnB1dCgpXG5cdGdldCB2aXJ0dWFsaXplZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnZpcnR1YWxpemVkIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB2aXJ0dWFsaXplZCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC52aXJ0dWFsaXplZCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBzZWxlY3Rpb24gaXMgY2hhbmdlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRhZGRlZEl0ZW1zLCBcdGRpc2FibGVkLCBcdGluZGV4LCBcdGxhYmVsLCBcdHJlbW92ZWRJdGVtcywgXHRzZWxlY3RlZCwgXHR2YWx1ZSlcblx0KiAgIGFkZGVkSXRlbXMgLSBBbiBhcnJheSBvZiBMaXN0IGl0ZW1zIHRoYXQgaGF2ZSBiZWVuIHNlbGVjdGVkLlxuXHQqICAgZGlzYWJsZWQgLSBBIGZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIG9yIG5vdCB0aGUgaXRlbSB0aGF0IGNhdXNlZCB0aGUgY2hhbmdlIGV2ZW50IGlzIGRpc2FibGVkLlxuXHQqICAgaW5kZXggLSBUaGUgaW5kZXggb2YgdGhlIExpc3QgaXRlbSB0aGF0IHRyaWdnZXJlZCB0aGUgZXZlbnQuXG5cdCogICBsYWJlbCAtIFRoZSBsYWJlbCBvZiB0aGUgTGlzdCBpdGVtIHRoYXQgdHJpZ2dlcmVkIHRoZSBldmVudC5cblx0KiAgIHJlbW92ZWRJdGVtcyAtIEFuIGFycmF5IG9mIExpc3QgaXRlbXMgdGhhdCBoYXZlIGJlZW4gdW5zZWxlY3RlZCBiZWZvcmUgdGhlIGV2ZW50IHdhcyBmaXJlZC5cblx0KiAgIHNlbGVjdGVkIC0gVGhlIHNlbGVjdGVkIHN0YXRlIG9mIHRoZSBMaXN0IGl0ZW0gdGhhdCB0cmlnZ2VyZWQgdGhlIGV2ZW50LiBJZiBhbiBpdGVtIHdhcyBzZWxlY3RlZCB0aGUgdmFsdWUgd2lsbCBiZSB0cnVlIGFuZCB2aWNlIHZlcnNhLlxuXHQqICAgdmFsdWUgLSBUaGUgdmFsdWUgb2YgdGhlIExpc3QgaXRlbSB0aGF0IHRyaWdnZXJlZCB0aGUgZXZlbnQuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkNoYW5nZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGRyb3AgZG93biBsaXN0IGlzIGNsb3NlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvbkNsb3NlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgZHJvcCBkb3duIGxpc3QgaXMgYWJvdXQgdG8gYmUgY2xvc2VkLiBUaGlzIGV2ZW50IGFsbG93cyB0byBjYW5jZWwgdGhlIGNsb3Npbmcgb3BlcmF0aW9uIGNhbGxpbmcgZXZlbnQucHJldmVudERlZmF1bHQoKSBpbiB0aGUgZXZlbnQgaGFuZGxlciBmdW5jdGlvbi5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvbkNsb3Npbmc6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGFuIGl0ZW0gaXMgY2xpY2tlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRkaXNhYmxlZCwgXHRpbmRleCwgXHRsYWJlbCwgXHRzZWxlY3RlZCwgXHR2YWx1ZSlcblx0KiAgIGRpc2FibGVkIC0gSW5kaWNhdGVzIHdoZXRoZXIgdGhlIExpc3QgaXRlbSB0aGF0IHdhcyBjbGlja2VkIGlzIGRpc2FibGVkIG9yIG5vdC5cblx0KiAgIGluZGV4IC0gSW5kaWNhdGVzIHRoZSBpbmRleCBvZiB0aGUgTGlzdCBpdGVtIHRoYXQgd2FzIGNsaWNrZWQuXG5cdCogICBsYWJlbCAtIFRoZSBsYWJlbCBvZiB0aGUgTGlzdCBpdGVtIHRoYXQgd2FzIGNsaWNrZWQuXG5cdCogICBzZWxlY3RlZCAtIEluZGljYXRlcyB3aGV0aGVyIHRoZSBMaXN0IGl0ZW0gdGhhdCB3YXMgY2xpY2tlZCBpcyBzZWxlY3RlZCBvciBub3QuXG5cdCogICB2YWx1ZSAtIFRoZSB2YWx1ZSBvZiB0aGUgTGlzdCBpdGVtIHRoYXQgd2FzIGNsaWNrZWQuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkl0ZW1DbGljazogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGRyb3AgZG93biBsaXN0IGlzIG9wZW5lZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvbk9wZW46IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBkcm9wIGRvd24gbGlzdCBpcyBhYm91dCB0byBiZSBvcGVuZWQuIFRoaXMgZXZlbnQgYWxsb3dzIHRvIGNhbmNlbCB0aGUgb3BlbmluZyBvcGVyYXRpb24gY2FsbGluZyBldmVudC5wcmV2ZW50RGVmYXVsdCgpIGluIHRoZSBldmVudCBoYW5kbGVyIGZ1bmN0aW9uLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Ki9cblx0QE91dHB1dCgpIG9uT3BlbmluZzogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdXNlciBzdGFydHMgcmVzaXppbmcgdGhlIGRyb3AgZG93bi5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRwb3NpdGlvbilcblx0KiAgIHBvc2l0aW9uIC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGN1cnJlbnQgbGVmdCBhbmQgdG9wIHBvc2l0aW9ucyBvZiB0aGUgZHJvcCBkb3duLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25SZXNpemVTdGFydDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHJlc2l6aW5nIG9mIHRoZSBkcm9wIGRvd24gaXMgZmluaXNoZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0cG9zaXRpb24pXG5cdCogICBwb3NpdGlvbiAtIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBjdXJyZW50IGxlZnQgYW5kIHRvcCBwb3NpdGlvbnMgb2YgdGhlIGRyb3AgZG93bi5cblx0Ki9cblx0QE91dHB1dCgpIG9uUmVzaXplRW5kOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB1c2VyIHNjcm9sbHMgdG8gdGhlIGVuZCBvZiB0aGUgZHJvcERvd24gbGlzdC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvblNjcm9sbEJvdHRvbVJlYWNoZWQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHVzZXIgc2Nyb2xscyB0byB0aGUgc3RhcnQgb2YgdGhlIGRyb3BEb3duIGxpc3QuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHQqL1xuXHRAT3V0cHV0KCkgb25TY3JvbGxUb3BSZWFjaGVkOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIHRva2VuIGl0ZW0ocGlsbCkgaGFzIGJlZW4gY2xpY2tlZC4gVGhpcyBldmVudCBhbGxvd3MgdG8gY2FuY2VsIHRoZSBvcGVuaW5nIG9wZXJhdGlvbiBjYWxsaW5nIGV2ZW50LnByZXZlbnREZWZhdWx0KCkgaW4gdGhlIGV2ZW50IGhhbmRsZXIgZnVuY3Rpb24uXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHQqL1xuXHRAT3V0cHV0KCkgb25Ub2tlbkNsaWNrOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gQXBwZW5kcyBhIExpc3RJdGVtIHRvIHRoZSBlbmQgb2YgdGhlIGxpc3Qgb2YgaXRlbXMgaW5zaWRlIGVsZW1lbnQuIFxuXHQqIEBwYXJhbSB7Tm9kZX0gbm9kZS4gQSBMaXN0SXRlbSBlbGVtZW50IHRoYXQgc2hvdWxkIGJlIGFkZGVkIHRvIHRoZSByZXN0IG9mIHRoZSBpdGVtcyBhcyB0aGUgbGFzdCBpdGVtLlxuXHQqIEByZXR1cm5zIHtOb2RlfVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgYXBwZW5kQ2hpbGQobm9kZSk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJlbW92ZXMgYWxsIGl0ZW1zIGZyb20gdGhlIGRyb3AgZG93biBsaXN0LiBcblx0Ki9cbiAgICBwdWJsaWMgY2xlYXJJdGVtcygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xlYXJJdGVtcygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNsZWFySXRlbXMoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVW5zZWxlY3RzIGFsbCBpdGVtcy4gXG5cdCovXG4gICAgcHVibGljIGNsZWFyU2VsZWN0aW9uKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbGVhclNlbGVjdGlvbigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIENsb3NlcyB0aGUgZHJvcERvd24gbGlzdC4gXG5cdCovXG4gICAgcHVibGljIGNsb3NlKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNsb3NlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEVuc3VyZXMgdGhlIGRlc2lyZWQgaXRlbSBpcyB2aXNpYmxlIGJ5IHNjcm9sbGluZyB0byBpdC4gXG5cdCogQHBhcmFtIHtIVE1MRWxlbWVudCB8IHN0cmluZ30gaXRlbS4gQSBsaXN0IGl0ZW0gb3IgdmFsdWUgb2YgdGhlIGRlc2lyZWQgaXRlbSB0byBiZSB2aXNpYmxlLlxuXHQqL1xuICAgIHB1YmxpYyBlbnN1cmVWaXNpYmxlKGl0ZW06IEhUTUxFbGVtZW50IHwgc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmVuc3VyZVZpc2libGUoaXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZW5zdXJlVmlzaWJsZShpdGVtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmV0dXJucyBhbiBpdGVtIGluc3RhbmNlIGZyb20gdGhlIGRyb3BEb3duIGxpc3QuIFxuXHQqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZS4gVGhlIHZhbHVlIG9mIGFuIGl0ZW0gZnJvbSB0aGUgZHJvcCBkb3duIGxpc3QuXG5cdCogQHJldHVybnMge0hUTUxFbGVtZW50fVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0SXRlbSh2YWx1ZSk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRJdGVtKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEluc2VydHMgYSBuZXcgaXRlbSBhdCBhIHNwZWNpZmllZCBwb3NpdGlvbi4gXG5cdCogQHBhcmFtIHtudW1iZXJ9IHBvc2l0aW9uLiBUaGUgcG9zaXRpb24gd2hlcmUgdGhlIGl0ZW0gbXVzdCBiZSBpbnNlcnRlZC5cblx0KiBAcGFyYW0ge2FueX0gaXRlbS4gRGVzY3JpYmVzIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBpdGVtIHRoYXQgd2lsbCBiZSBpbnNlcnRlZC5cblx0Ki9cbiAgICBwdWJsaWMgaW5zZXJ0KHBvc2l0aW9uOiBudW1iZXIsIGl0ZW06IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5pbnNlcnQocG9zaXRpb24sIGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lmluc2VydChwb3NpdGlvbiwgaXRlbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEluc2VydHMgYSBuZXcgTGlzdEl0ZW0gYmVmb3JlIGFub3RoZXIgaW4gdGhlIGxpc3QuIFxuXHQqIEBwYXJhbSB7Tm9kZX0gbm9kZS4gQSBMaXN0SXRlbSBlbGVtZW50IHRoYXQgc2hvdWxkIGJlIGFkZGVkIGJlZm9yZSB0aGUgcmVmZXJlbmNlSXRlbSBpbiB0aGUgbGlzdC5cblx0KiBAcGFyYW0ge05vZGUgfCBudWxsfSByZWZlcmVuY2VOb2RlLiBBIExpc3RJdGVtIGVsZW1lbnQgdGhhdCBhY3RzIGFzIHRoZSByZWZlcmVuY2UgaXRlbSBiZWZvcmUgd2hpY2ggYSBuZXcgaXRlbSBpcyBhYm91dCB0byBiZSBpbnNlcnRlZC4gVGhlIHJlZmVyZW5jZU5vZGUgbXVzdCBiZSBpbiB0aGUgc2FtZSBsaXN0IGFzIHRoZSBub2RlLlxuXHQqIEByZXR1cm5zIHtOb2RlfVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgaW5zZXJ0QmVmb3JlKG5vZGUsIHJlZmVyZW5jZU5vZGUpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKG5vZGUsIHJlZmVyZW5jZU5vZGUpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gT3BlbnMgdGhlIGRyb3BEb3duIGxpc3QuIFxuXHQqL1xuICAgIHB1YmxpYyBvcGVuKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5vcGVuKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQub3BlbigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZW1vdmVzIGFuIGl0ZW0gYXQgYSBzcGVjaWZpZWQgcG9zaXRpb24uIFxuXHQqIEBwYXJhbSB7bnVtYmVyfSBwb3NpdGlvbi4gVGhlIHBvc2l0aW9uIG9mIHRoZSByZW1vdmVkIGl0ZW0uXG5cdCovXG4gICAgcHVibGljIHJlbW92ZUF0KHBvc2l0aW9uOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVtb3ZlQXQocG9zaXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlbW92ZUF0KHBvc2l0aW9uKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVtb3ZlcyBhIExpc3RJdGVtIGZyb20gdGhlIGxpc3Qgb2YgaXRlbXMgaW5zaWRlIGVsZW1lbnQuIFxuXHQqIEBwYXJhbSB7Tm9kZX0gbm9kZS4gQSBMaXN0SXRlbSBlbGVtZW50IHRoYXQgaXMgcGFydCBvZiB0aGUgbGlzdCBvZiBpdGVtcyBpbnNpZGUgdGhlIGVsZW1lbnQuXG5cdCogQHJldHVybnMge05vZGV9XG4gICovXG5cdHB1YmxpYyBhc3luYyByZW1vdmVDaGlsZChub2RlKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2VsZWN0cyBhbiBpdGVtIGZyb20gdGhlIGRyb3BEb3duIGxpc3QuICBcblx0KiBAcGFyYW0ge3N0cmluZyB8IEhUTUxFbGVtZW50fSBpdGVtLiBBIHN0cmluZywgcmVwcmVzZW50aW5nIHRoZSB2YWx1ZSBvZiB0aGUgaXRlbSBvciBhbiBIVE1MIEVsZW1lbnQgcmVmZXJlbmNpbmcgYW4gaXRlbSBmcm9tIHRoZSBsaXN0XG5cdCovXG4gICAgcHVibGljIHNlbGVjdChpdGVtOiBzdHJpbmcgfCBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zZWxlY3QoaXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0KGl0ZW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBVbnNlbGVjdHMgYW4gaXRlbSBmcm9tIHRoZSBkcm9wRG93biBsaXN0LiAgXG5cdCogQHBhcmFtIHtzdHJpbmcgfCBIVE1MRWxlbWVudH0gaXRlbS4gQSBzdHJpbmcsIHJlcHJlc2VudGluZyB0aGUgdmFsdWUgb2YgdGhlIGl0ZW0gb3IgYW4gSFRNTCBFbGVtZW50IHJlZmVyZW5jaW5nIGFuIGl0ZW0gZnJvbSB0aGUgbGlzdFxuXHQqL1xuICAgIHB1YmxpYyB1bnNlbGVjdChpdGVtOiBzdHJpbmcgfCBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC51bnNlbGVjdChpdGVtKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC51bnNlbGVjdChpdGVtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVXBkYXRlcyBhbiBpdGVtIGZyb20gdGhlIGRyb3BEb3duIGxpc3QuIFxuXHQqIEBwYXJhbSB7bnVtYmVyfSBwb3NpdGlvbi4gVGhlIHBvc2l0aW9uIHdoZXJlIHRoZSBpdGVtIG11c3QgYmUgdXBkYXRlZC5cblx0KiBAcGFyYW0ge2FueX0gdmFsdWUuIFRoZSB2YWx1ZSBvZiB0aGUgdXBkYXRlZCBpdGVtLlxuXHQqL1xuICAgIHB1YmxpYyB1cGRhdGUocG9zaXRpb246IG51bWJlciwgdmFsdWU6IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC51cGRhdGUocG9zaXRpb24sIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC51cGRhdGUocG9zaXRpb24sIHZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cblx0Z2V0IGlzUmVuZGVyZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkIDogZmFsc2U7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0fVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cbiAgICAgIHRoYXQub25DcmVhdGUuZW1pdCh0aGF0Lm5hdGl2ZUVsZW1lbnQpO1xuXG5cdFx0U21hcnQuUmVuZGVyKCk7XG5cblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc21hcnQtYW5ndWxhcicpO1xuXG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7IHRoYXQub25SZWFkeS5lbWl0KHRoYXQubmF0aXZlRWxlbWVudCk7IH0pO1xuXHRcdHRoaXMubGlzdGVuKCk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLnVubGlzdGVuKCk7XG5cdH1cblxuXHRfaW5pdGlhbENoYW5nZSA9IHRydWU7IFxuXG5cdGdldCBuZ1ZhbHVlKCk6IGFueSB7XG5cdFx0aWYgKCF0aGlzLm5hdGl2ZUVsZW1lbnQpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnNlbGVjdGVkVmFsdWVzICYmIHRoaXMuc2VsZWN0ZWRWYWx1ZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0Y29uc3QgdmFsdWUgPSB0aGlzLnNlbGVjdGVkVmFsdWVzLmxlbmd0aCA9PT0gMSA/IHRoaXMubmF0aXZlRWxlbWVudC5zZWxlY3RlZFZhbHVlc1swXSA6IHRoaXMubmF0aXZlRWxlbWVudC5zZWxlY3RlZFZhbHVlcztcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG4gICAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgICAgIHJldHVybiBpbnB1dCA/IGlucHV0LnZhbHVlIDogbnVsbDtcblx0fVxuXG5cdHNldCBuZ1ZhbHVlKHZhbHVlOiBhbnkpIHtcblx0XHRpZiAodGhpcy5uYXRpdmVFbGVtZW50KSB7XG5cdFx0ICAgIHRoaXMud3JpdGVWYWx1ZSh2YWx1ZSk7XG5cdFx0fVxuXHR9XG5cblx0d3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICAgICBjb25zdCBub3JtYWxpemVkVmFsdWUgPSB2YWx1ZSA9PSBudWxsID8gJycgOiB2YWx1ZTtcblxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgdGhhdC5uYXRpdmVFbGVtZW50LiQubGlzdEJveC5pc0luaXRpYWxpemVkID0gdGhhdC5faW5pdGlhbENoYW5nZSA/IGZhbHNlIDogdHJ1ZTtcblx0XHRcdHRoYXQuY2xlYXJTZWxlY3Rpb24oKTtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG5vcm1hbGl6ZWRWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5mb3JFYWNoKChjdXJyZW50VmFsdWU6IGFueSkgPT4gdGhpcy5zZWxlY3QoY3VycmVudFZhbHVlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGF0LnNlbGVjdChub3JtYWxpemVkVmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoYXQubmF0aXZlRWxlbWVudC4kLmxpc3RCb3guaXNJbml0aWFsaXplZCA9IHRydWU7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuX2FwcGx5U2VsZWN0aW9uKCk7XG5cdFx0XHRpZiAodGhhdC5faW5pdGlhbENoYW5nZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhhdC5zZWxlY3RlZFZhbHVlcyAmJiB0aGF0LnNlbGVjdGVkVmFsdWVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5fb25DaGFuZ2UodGhhdC5zZWxlY3RlZFZhbHVlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dCA9IHRoYXQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICB0aGF0Ll9vbkNoYW5nZSgodGhhdC5zZWxlY3RlZFZhbHVlcyAmJiB0aGF0LnNlbGVjdGVkVmFsdWVzLmxlbmd0aCA+IDApID8gdGhhdC5zZWxlY3RlZFZhbHVlc1swXSA6IChpbnB1dCA/IGlucHV0LnZhbHVlIDogbnVsbCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblx0XHR9KTtcblx0fVxuXG5cdHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuXHRcdHRoaXMuX29uQ2hhbmdlID0gZm47XG5cdH1cblxuXHRyZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG5cdFx0dGhpcy5fb25Ub3VjaGVkID0gZm47XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdFx0aWYgKHRoaXMubmF0aXZlRWxlbWVudCAmJiB0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuXHRcdFx0Zm9yIChjb25zdCBwcm9wTmFtZSBpbiBjaGFuZ2VzKSB7XG5cdFx0XHRcdGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuXHRcdFx0XHRcdHRoaXMubmF0aXZlRWxlbWVudFtwcm9wTmFtZV0gPSBjaGFuZ2VzW3Byb3BOYW1lXS5jdXJyZW50VmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEFkZCBldmVudCBsaXN0ZW5lcnMuICovXG5cdHByaXZhdGUgbGlzdGVuKCk6IHZvaWQge1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5nZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNoYW5nZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5nZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2Nsb3NlSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ2xvc2UuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2Nsb3NlSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY2xvc2luZ0hhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNsb3NpbmcuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2luZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY2xvc2luZ0hhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2l0ZW1DbGlja0hhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkl0ZW1DbGljay5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpdGVtQ2xpY2snLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2l0ZW1DbGlja0hhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ29wZW5IYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25PcGVuLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ29wZW4nLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ29wZW5IYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydvcGVuaW5nSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uT3BlbmluZy5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdvcGVuaW5nJywgdGhhdC5ldmVudEhhbmRsZXJzWydvcGVuaW5nSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1sncmVzaXplU3RhcnRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25SZXNpemVTdGFydC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdyZXNpemVTdGFydCcsIHRoYXQuZXZlbnRIYW5kbGVyc1sncmVzaXplU3RhcnRIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydyZXNpemVFbmRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25SZXNpemVFbmQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplRW5kJywgdGhhdC5ldmVudEhhbmRsZXJzWydyZXNpemVFbmRIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydzY3JvbGxCb3R0b21SZWFjaGVkSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uU2Nyb2xsQm90dG9tUmVhY2hlZC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGxCb3R0b21SZWFjaGVkJywgdGhhdC5ldmVudEhhbmRsZXJzWydzY3JvbGxCb3R0b21SZWFjaGVkSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snc2Nyb2xsVG9wUmVhY2hlZEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblNjcm9sbFRvcFJlYWNoZWQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsVG9wUmVhY2hlZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snc2Nyb2xsVG9wUmVhY2hlZEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3Rva2VuQ2xpY2tIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Ub2tlbkNsaWNrLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Rva2VuQ2xpY2snLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Rva2VuQ2xpY2tIYW5kbGVyJ10pO1xuXG5cbiAgICAgICAgdGhhdC5ldmVudEhhbmRsZXJzWydjaGFuZ2VNb2RlbEhhbmRsZXInXSA9IChldmVudDogRXZlbnQpID0+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoYXQuX2luaXRpYWxDaGFuZ2UgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoYXQuX29uQ2hhbmdlKHRoYXQubmF0aXZlRWxlbWVudC5zZWxlY3RlZFZhbHVlcy5sZW5ndGggPiAwID8gKHRoYXQubmF0aXZlRWxlbWVudC5zZWxlY3RlZFZhbHVlcy5sZW5ndGggPiAxID8gdGhhdC5uYXRpdmVFbGVtZW50LnNlbGVjdGVkVmFsdWVzIDogdGhhdC5uYXRpdmVFbGVtZW50LnNlbGVjdGVkVmFsdWVzWzBdKSA6IHRoYXQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGF0LmV2ZW50SGFuZGxlcnNbJ2JsdXJNb2RlbEhhbmRsZXInXSA9IChldmVudDogRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoYXQuX29uVG91Y2hlZCgpO1xuICAgICAgICB9O1xuICAgICAgICB0aGF0Lm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGF0Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKSkge1xuICAgICAgICAgICAgICAgIHRoYXQuZXZlbnRIYW5kbGVyc1sna2V5dXBNb2RlbEhhbmRsZXInXSA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhhdC5ldmVudEhhbmRsZXJzWydjaGFuZ2VNb2RlbEhhbmRsZXInXShldmVudCk7IH0sIDUwKTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgdGhhdC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2tleXVwTW9kZWxIYW5kbGVyJ10pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhhdC5ldmVudEhhbmRsZXJzWydjaGFuZ2VNb2RlbEhhbmRsZXInXSk7XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2JsdXJNb2RlbEhhbmRsZXInXSk7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJlbW92ZSBldmVudCBsaXN0ZW5lcnMuICovXG5cdHByaXZhdGUgdW5saXN0ZW4oKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5nZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snY2hhbmdlSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjbG9zZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgdGhhdC5ldmVudEhhbmRsZXJzWydjbG9zZUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY2xvc2luZ0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Nsb3NpbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2Nsb3NpbmdIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2l0ZW1DbGlja0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2l0ZW1DbGljaycsIHRoYXQuZXZlbnRIYW5kbGVyc1snaXRlbUNsaWNrSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydvcGVuSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignb3BlbicsIHRoYXQuZXZlbnRIYW5kbGVyc1snb3BlbkhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snb3BlbmluZ0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ29wZW5pbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ29wZW5pbmdIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jlc2l6ZVN0YXJ0SGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplU3RhcnQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jlc2l6ZVN0YXJ0SGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydyZXNpemVFbmRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemVFbmQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jlc2l6ZUVuZEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snc2Nyb2xsQm90dG9tUmVhY2hlZEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbEJvdHRvbVJlYWNoZWQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Njcm9sbEJvdHRvbVJlYWNoZWRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3Njcm9sbFRvcFJlYWNoZWRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGxUb3BSZWFjaGVkJywgdGhhdC5ldmVudEhhbmRsZXJzWydzY3JvbGxUb3BSZWFjaGVkSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWyd0b2tlbkNsaWNrSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG9rZW5DbGljaycsIHRoYXQuZXZlbnRIYW5kbGVyc1sndG9rZW5DbGlja0hhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY2hhbmdlTW9kZWxIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5nZU1vZGVsSGFuZGxlciddKTtcbiAgICAgICAgICAgIGlmICh0aGF0Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKSkge1xuICAgICAgICAgICAgICAgICAgdGhhdC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2tleXVwTW9kZWxIYW5kbGVyJ10pO1xuICAgICAgICAgICAgfVxuXHRcdH1cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydibHVyTW9kZWxIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdibHVyJywgdGhhdC5ldmVudEhhbmRsZXJzWydibHVyTW9kZWxIYW5kbGVyJ10pO1xuXHRcdH1cblx0fVxufVxuIl19