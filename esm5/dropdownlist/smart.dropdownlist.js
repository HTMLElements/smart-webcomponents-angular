import * as tslib_1 from "tslib";
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, forwardRef, ChangeDetectionStrategy, Output, EventEmitter, QueryList, ContentChildren } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Smart } from './smart.element';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return DropDownListComponent; }),
    multi: true
};
var DropDownListComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DropDownListComponent, _super);
    function DropDownListComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        /**
        * @description
        * The registered callback function called when a change event occurs on the form elements.
        */
        _this._onChange = function () { };
        /**
        * @description
        * The registered callback function called when a blur event occurs on the form elements.
        */
        _this._onTouched = function () { };
        /** @description This event is triggered when user clicks on the action button. The action button is only visible when dropDownOpenMode is set to 'dropDownbutton'.
        *  @param event. The custom event. 	*/
        _this.onActionButtonClick = new EventEmitter();
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
        _this.onChange = new EventEmitter();
        /** @description This event is triggered when the drop down list is closed.
        *  @param event. The custom event. 	*/
        _this.onClose = new EventEmitter();
        /** @description This event is triggered when the drop down list is about to be closed. This event allows to cancel the closing operation calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	*/
        _this.onClosing = new EventEmitter();
        /** @description This event is triggered when user clicks on the drop down button.
        *  @param event. The custom event. 	*/
        _this.onDropDownButtonClick = new EventEmitter();
        /** @description This event is triggered when an item is clicked.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	disabled, 	index, 	label, 	selected, 	value)
        *   disabled - Indicates whether the List item that was clicked is disabled or not.
        *   index - Indicates the index of the List item that was clicked.
        *   label - The label of the List item that was clicked.
        *   selected - Indicates whether the List item that was clicked is selected or not.
        *   value - The value of the List item that was clicked.
        */
        _this.onItemClick = new EventEmitter();
        /** @description This event is triggered when the drop down list is opened.
        *  @param event. The custom event. 	*/
        _this.onOpen = new EventEmitter();
        /** @description This event is triggered when the drop down list is about to be opened. This event allows to cancel the opening operation calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	*/
        _this.onOpening = new EventEmitter();
        /** @description This event is triggered when user starts resizing the drop down.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	position)
        *   position - An object containing the current left and top positions of the drop down.
        */
        _this.onResizeStart = new EventEmitter();
        /** @description This event is triggered when the resizing of the drop down is finished.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	position)
        *   position - An object containing the current left and top positions of the drop down.
        */
        _this.onResizeEnd = new EventEmitter();
        /** @description This event is triggered when the user scrolls to the end of the dropDown list.
        *  @param event. The custom event. 	*/
        _this.onScrollBottomReached = new EventEmitter();
        /** @description This event is triggered when the user scrolls to the start of the dropDown list.
        *  @param event. The custom event. 	*/
        _this.onScrollTopReached = new EventEmitter();
        _this._initialChange = true;
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    DropDownListComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('smart-drop-down-list');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(DropDownListComponent.prototype, "animation", {
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
    Object.defineProperty(DropDownListComponent.prototype, "autoCloseDelay", {
        /** @description Used only when dropDownOpenMode is set to 'auto'. Determines the delay before the opened drop down closes if the pointer is not over the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.autoCloseDelay : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.autoCloseDelay = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "dataSource", {
        /** @description Determines the data source that will be loaded to the DropDownList. The dataSource can be an array of strings/numbers or objects where the attributes represent the properties of a List Item. For example label, value, group. It can also be a callback that returns an Array of items as previously described. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dataSource : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dataSource = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "disabled", {
        /** @description Enables or disables the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.disabled : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disabled = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "displayLoadingIndicator", {
        /** @description Determines whether an indicator will appear during filtering and remote item loading. */
        get: function () {
            return this.nativeElement ? this.nativeElement.displayLoadingIndicator : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.displayLoadingIndicator = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "displayMember", {
        /** @description Sets or gets the displayMember. The displayMember specifies the name of an object property to display. The name is contained in the collection specified by the 'dataSource' property. */
        get: function () {
            return this.nativeElement ? this.nativeElement.displayMember : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.displayMember = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "dropDownAppendTo", {
        /** @description Determines the drop down parent. The expected value is CSS Selector, ID or 'body'. The drop down can be removed from the body of the element and continue to work in another container. This is usefull when one of the parents of the element doesn't allow overflowing, by settings this property to 'body' the drop down will be appended to the DOM and the popup will open/close as usual. dropDownAppendTo can be a string representing the id of an HTML element on the page or a direct reference to that element. Reseting it back to null will take the drop down back to it's original place. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dropDownAppendTo : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dropDownAppendTo = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "dropDownButtonPosition", {
        /** @description Determines the position of the drop down button. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dropDownButtonPosition : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dropDownButtonPosition = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "dropDownHeight", {
        /** @description Sets the height of the drop down. By default it's set to an empty string. In this case the height of the drop down is controlled by a CSS variable. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dropDownHeight : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dropDownHeight = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "dropDownMaxHeight", {
        /** @description Sets the maximum Height of the drop down. By default it's set to an empty string. In this case the maxHeight of the drop down is controlled by a CSS variable. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dropDownMaxHeight : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dropDownMaxHeight = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "dropDownMaxWidth", {
        /** @description Sets the maximum Width of the drop down. By default it's set to an empty string. In this case the maxWidth of the drop down is controlled by a CSS variable. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dropDownMaxWidth : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dropDownMaxWidth = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "dropDownMinHeight", {
        /** @description Sets the minimum Height of the drop down. By default it's set to an empty string. In this case the minHeight of the drop down is controlled by a CSS variable. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dropDownMinHeight : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dropDownMinHeight = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "dropDownMinWidth", {
        /** @description Sets the minimum Width of the drop down. By default it's set to an empty string. In this case the minWidth of the drop down is controlled by a CSS variable. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dropDownMinWidth : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dropDownMinWidth = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "dropDownOpenMode", {
        /** @description Determines how the drop down is going to open. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dropDownOpenMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dropDownOpenMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "dropDownOverlay", {
        /** @description If this property is enabled, when the element's dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document. The purpose of the overlay is to make sure that clicking anywhere outside the popup will will target the overlay and not the DOM. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dropDownOverlay : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dropDownOverlay = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "dropDownPlaceholder", {
        /** @description Determines the placeholder for the drop down list when it's empty. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dropDownPlaceholder : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dropDownPlaceholder = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "dropDownPosition", {
        /** @description Determines the position of the drop down when opened. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dropDownPosition : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dropDownPosition = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "dropDownWidth", {
        /** @description Sets the width of the drop down. By default it's set to an empty string. In this case the width of the drop down is controlled by a CSS variable. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dropDownWidth : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dropDownWidth = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "filterable", {
        /** @description Determines whether filtering is enabled. */
        get: function () {
            return this.nativeElement ? this.nativeElement.filterable : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.filterable = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "filterInputPlaceholder", {
        /** @description Determines the placeholder for the filter input inside the drop down that is only visible when filterable is enabled. */
        get: function () {
            return this.nativeElement ? this.nativeElement.filterInputPlaceholder : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.filterInputPlaceholder = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "filterMode", {
        /** @description Determines the filtering mode of the drop down list. */
        get: function () {
            return this.nativeElement ? this.nativeElement.filterMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.filterMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "grouped", {
        /** @description If enabled, the items will be grouped by their first letter. Can't be applied if the dataSource already contains groups. */
        get: function () {
            return this.nativeElement ? this.nativeElement.grouped : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.grouped = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "groupMember", {
        /** @description Determines which attribute from the dataSource object will be used as the group member for the items. If not set, by default 'group' property is used from the source object. groupMember is especially usefull when loading the data from a JSON file as a dataSource for the ListBox and there's a specific property that should be used to group the items. */
        get: function () {
            return this.nativeElement ? this.nativeElement.groupMember : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.groupMember = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "hint", {
        /** @description Sets additional helper text below the element. The hint is visible only when the element is focused. */
        get: function () {
            return this.nativeElement ? this.nativeElement.hint : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.hint = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "horizontalScrollBarVisibility", {
        /** @description Determines the visibility of the horizontal Scroll bar inside the drop down. */
        get: function () {
            return this.nativeElement ? this.nativeElement.horizontalScrollBarVisibility : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.horizontalScrollBarVisibility = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "inputMember", {
        /** @description Represents the property name of a List item. Determines the value of the input when a ListItem is selected. Usefull in cases where the user wants to display for example the value of an item instead of it's label. By default the label is displayed in the input. */
        get: function () {
            return this.nativeElement ? this.nativeElement.inputMember : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.inputMember = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "incrementalSearchDelay", {
        /** @description IncrementalSearchDelay property specifies the time-interval in milliseconds until the previous search query is cleared. The timer starts when the user stops typing. A new query can be started only when the delay has passed. */
        get: function () {
            return this.nativeElement ? this.nativeElement.incrementalSearchDelay : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.incrementalSearchDelay = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "incrementalSearchMode", {
        /** @description Sets ot gets the mode of the incremental search mode. Incremental search is enabled by default. Typing while the drop down is focused starts the incremental search. */
        get: function () {
            return this.nativeElement ? this.nativeElement.incrementalSearchMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.incrementalSearchMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "itemHeight", {
        /** @description Sets the height for all list items. Used only when virtualization is enabled. */
        get: function () {
            return this.nativeElement ? this.nativeElement.itemHeight : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.itemHeight = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "itemMeasureMode", {
        /** @description Determines the item width measuring algorithm. */
        get: function () {
            return this.nativeElement ? this.nativeElement.itemMeasureMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.itemMeasureMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "items", {
        /** @description A getter that returns an array of all List items inside the drop down. */
        get: function () {
            return this.nativeElement ? this.nativeElement.items : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.items = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "itemTemplate", {
        /** @description The itemTemplate property is a string that represents the id of an HTMLTemplateElement in the DOM or it's direct reference. It's used to set a customize the content of the list items. */
        get: function () {
            return this.nativeElement ? this.nativeElement.itemTemplate : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.itemTemplate = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "label", {
        /** @description Sets a little text label above the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.label : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.label = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "loadingIndicatorPlaceholder", {
        /** @description Determines the text that will be displayed next to the loading indicator when the loader is visible and it's position is top or bottom. */
        get: function () {
            return this.nativeElement ? this.nativeElement.loadingIndicatorPlaceholder : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.loadingIndicatorPlaceholder = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "loadingIndicatorPosition", {
        /** @description Determines the position of the loading indicator. */
        get: function () {
            return this.nativeElement ? this.nativeElement.loadingIndicatorPosition : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.loadingIndicatorPosition = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "locale", {
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
    Object.defineProperty(DropDownListComponent.prototype, "localizeFormatFunction", {
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
    Object.defineProperty(DropDownListComponent.prototype, "messages", {
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
    Object.defineProperty(DropDownListComponent.prototype, "name", {
        /** @description Sets or gets the name attribute for the element. Name is used when submiting HTML forms. */
        get: function () {
            return this.nativeElement ? this.nativeElement.name : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.name = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "opened", {
        /** @description Determines whether the popup is opened or not. */
        get: function () {
            return this.nativeElement ? this.nativeElement.opened : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.opened = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "placeholder", {
        /** @description Determines the element's placeholder, displayed in the element's selection field. */
        get: function () {
            return this.nativeElement ? this.nativeElement.placeholder : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.placeholder = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "readonly", {
        /** @description Disables user interaction with the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.readonly : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.readonly = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "rightToLeft", {
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
    Object.defineProperty(DropDownListComponent.prototype, "resizeIndicator", {
        /** @description Determines whether the resize indicator in the bottom right corner of the drop down is visible or not. This property is used in conjunction with resizeMode. */
        get: function () {
            return this.nativeElement ? this.nativeElement.resizeIndicator : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.resizeIndicator = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "resizeMode", {
        /** @description Determines whether the dropDown can be resized or not. When resizing is enabled, a resize bar appears on the top/bottom side of the drop down. */
        get: function () {
            return this.nativeElement ? this.nativeElement.resizeMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.resizeMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "selectionDisplayMode", {
        /** @description Determines what will be displayed in the dropDown selection field. */
        get: function () {
            return this.nativeElement ? this.nativeElement.selectionDisplayMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.selectionDisplayMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "selectedIndexes", {
        /** @description Sets or gets the selected indexes. Selected indexes represents an array of the indexes of the items that should be selected. */
        get: function () {
            return this.nativeElement ? this.nativeElement.selectedIndexes : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.selectedIndexes = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "selectedValues", {
        /** @description Sets or gets elected indexes. Selected values represents the values of the items that should be selected. */
        get: function () {
            return this.nativeElement ? this.nativeElement.selectedValues : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.selectedValues = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "selectionMode", {
        /** @description Determines how many items can be selected. */
        get: function () {
            return this.nativeElement ? this.nativeElement.selectionMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.selectionMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "sorted", {
        /** @description Determines whether the items are sorted alphabetically or not */
        get: function () {
            return this.nativeElement ? this.nativeElement.sorted : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.sorted = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "sortDirection", {
        /** @description Determines sorting direction - ascending(asc) or descending(desc) */
        get: function () {
            return this.nativeElement ? this.nativeElement.sortDirection : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.sortDirection = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "theme", {
        /** @description Determines the theme for the element. Themes define the look of the elements. */
        get: function () {
            return this.nativeElement ? this.nativeElement.theme : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.theme = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "tokenTemplate", {
        /** @description Sets a custom template for the content of the tokens when selectionDisplayMode is set to 'tokens'. */
        get: function () {
            return this.nativeElement ? this.nativeElement.tokenTemplate : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.tokenTemplate = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "unfocusable", {
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
    Object.defineProperty(DropDownListComponent.prototype, "value", {
        /** @description Sets or gets the value. Returns the selection. Return type: {label: string, value: any}[]. */
        get: function () {
            return this.nativeElement ? this.nativeElement.value : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.value = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "valueMember", {
        /** @description Determines the value member of an item. Stored as value in the item object. Similar to groupMember, valueMember is especially usefull when using data from a JSON file as a dataSource for the ListBox and there's a specific property that should be used for the value the items. */
        get: function () {
            return this.nativeElement ? this.nativeElement.valueMember : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.valueMember = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "verticalScrollBarVisibility", {
        /** @description Determines the visibility of the vertical scroll bar. */
        get: function () {
            return this.nativeElement ? this.nativeElement.verticalScrollBarVisibility : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.verticalScrollBarVisibility = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "virtualized", {
        /** @description Determines weather or not Virtualization is used. Virtualization allows a huge amount of items to be loaded to the drop down while preserving the performance. For example a milion items can be loaded. */
        get: function () {
            return this.nativeElement ? this.nativeElement.virtualized : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.virtualized = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /** @description Appends a ListItem to the end of the list of items inside element.
    * @param {Node} node. A ListItem element that should be added to the rest of the items as the last item.
    * @returns {Node}
  */
    DropDownListComponent.prototype.appendChild = function (node) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.appendChild(node);
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
    /** @description Removes all items from the drop down list.
    */
    DropDownListComponent.prototype.clearItems = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearItems();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.clearItems();
            });
        }
    };
    /** @description Unselects all items.
    */
    DropDownListComponent.prototype.clearSelection = function () {
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
    /** @description Closes the dropDown list.
    */
    DropDownListComponent.prototype.close = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.close();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.close();
            });
        }
    };
    /** @description Ensures the desired item is visible by scrolling to it.
    * @param {HTMLElement | string} item. A list item or value of the desired item to be visible.
    */
    DropDownListComponent.prototype.ensureVisible = function (item) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.ensureVisible(item);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.ensureVisible(item);
            });
        }
    };
    /** @description Returns an item instance from the dropDown list.
    * @param {string} value. The value of an item from the drop down list.
    * @returns {HTMLElement}
  */
    DropDownListComponent.prototype.getItem = function (value) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getItem(value);
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
    /** @description Inserts a new item at a specified position.
    * @param {number} position. The position where the item must be inserted.
    * @param {any} value. The value of the new item.
    */
    DropDownListComponent.prototype.insert = function (position, value) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.insert(position, value);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.insert(position, value);
            });
        }
    };
    /** @description Inserts a new ListItem before another in the list.
    * @param {Node} node. A ListItem element that should be added before the referenceItem in the list.
    * @param {Node | null} referenceNode. A ListItem element that acts as the reference item before which a new item is about to be inserted. The referenceNode must be in the same list as the node.
    * @returns {Node}
  */
    DropDownListComponent.prototype.insertBefore = function (node, referenceNode) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.insertBefore(node, referenceNode);
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
    /** @description Opens the dropDown list.
    */
    DropDownListComponent.prototype.open = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.open();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.open();
            });
        }
    };
    /** @description Removes an item at a specified position.
    * @param {number} position. The position of the removed item.
    */
    DropDownListComponent.prototype.removeAt = function (position) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeAt(position);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.removeAt(position);
            });
        }
    };
    /** @description Removes a ListItem from the list of items inside element.
    * @param {Node} node. A ListItem element that is part of the list of items inside the element.
    * @returns {Node}
  */
    DropDownListComponent.prototype.removeChild = function (node) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.removeChild(node);
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
    /** @description Selects an item from the dropDown list.
    * @param {string | HTMLElement} item. A string, representing the value of the item or an HTML Element referencing an item from the list
    */
    DropDownListComponent.prototype.select = function (item) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.select(item);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.select(item);
            });
        }
    };
    /** @description Unselects an item from the dropDown list.
    * @param {string | HTMLElement} item. A string, representing the value of the item or an HTML Element referencing an item from the list
    */
    DropDownListComponent.prototype.unselect = function (item) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.unselect(item);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.unselect(item);
            });
        }
    };
    /** @description Updates an item from the dropDown list.
    * @param {number} position. The position where the item must be updated.
    * @param {any} value. The value of the updated item.
    */
    DropDownListComponent.prototype.update = function (position, value) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.update(position, value);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.update(position, value);
            });
        }
    };
    Object.defineProperty(DropDownListComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    DropDownListComponent.prototype.ngOnInit = function () {
    };
    DropDownListComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        this.listen();
    };
    DropDownListComponent.prototype.ngOnDestroy = function () {
        this.unlisten();
    };
    Object.defineProperty(DropDownListComponent.prototype, "ngValue", {
        get: function () {
            if (!this.nativeElement) {
                return null;
            }
            if (this.selectedValues && this.selectedValues.length > 0) {
                var value_1 = this.selectedValues.length === 1 ? this.nativeElement.selectedValues[0] : this.nativeElement.selectedValues;
                return value_1;
            }
            return null;
            var value = this.nativeElement.value;
            return value;
        },
        set: function (value) {
            if (this.nativeElement) {
                this.writeValue(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    DropDownListComponent.prototype.writeValue = function (value) {
        var _this = this;
        var that = this;
        var normalizedValue = value == null ? '' : value;
        that.nativeElement.whenRendered(function () {
            that.nativeElement.$.listBox.isInitialized = that._initialChange ? false : true;
            that.clearSelection();
            if (Array.isArray(normalizedValue)) {
                value.forEach(function (currentValue) { return _this.select(currentValue); });
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
                    that._onChange((that.selectedValues && that.selectedValues.length > 0) ? that.selectedValues[0] : null);
                }
            }
        });
    };
    DropDownListComponent.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
    };
    DropDownListComponent.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    DropDownListComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    /** @description Add event listeners. */
    DropDownListComponent.prototype.listen = function () {
        var that = this;
        that.eventHandlers['actionButtonClickHandler'] = function (event) { that.onActionButtonClick.emit(event); };
        that.nativeElement.addEventListener('actionButtonClick', that.eventHandlers['actionButtonClickHandler']);
        that.eventHandlers['changeHandler'] = function (event) { that.onChange.emit(event); };
        that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
        that.eventHandlers['closeHandler'] = function (event) { that.onClose.emit(event); };
        that.nativeElement.addEventListener('close', that.eventHandlers['closeHandler']);
        that.eventHandlers['closingHandler'] = function (event) { that.onClosing.emit(event); };
        that.nativeElement.addEventListener('closing', that.eventHandlers['closingHandler']);
        that.eventHandlers['dropDownButtonClickHandler'] = function (event) { that.onDropDownButtonClick.emit(event); };
        that.nativeElement.addEventListener('dropDownButtonClick', that.eventHandlers['dropDownButtonClickHandler']);
        that.eventHandlers['itemClickHandler'] = function (event) { that.onItemClick.emit(event); };
        that.nativeElement.addEventListener('itemClick', that.eventHandlers['itemClickHandler']);
        that.eventHandlers['openHandler'] = function (event) { that.onOpen.emit(event); };
        that.nativeElement.addEventListener('open', that.eventHandlers['openHandler']);
        that.eventHandlers['openingHandler'] = function (event) { that.onOpening.emit(event); };
        that.nativeElement.addEventListener('opening', that.eventHandlers['openingHandler']);
        that.eventHandlers['resizeStartHandler'] = function (event) { that.onResizeStart.emit(event); };
        that.nativeElement.addEventListener('resizeStart', that.eventHandlers['resizeStartHandler']);
        that.eventHandlers['resizeEndHandler'] = function (event) { that.onResizeEnd.emit(event); };
        that.nativeElement.addEventListener('resizeEnd', that.eventHandlers['resizeEndHandler']);
        that.eventHandlers['scrollBottomReachedHandler'] = function (event) { that.onScrollBottomReached.emit(event); };
        that.nativeElement.addEventListener('scrollBottomReached', that.eventHandlers['scrollBottomReachedHandler']);
        that.eventHandlers['scrollTopReachedHandler'] = function (event) { that.onScrollTopReached.emit(event); };
        that.nativeElement.addEventListener('scrollTopReached', that.eventHandlers['scrollTopReachedHandler']);
        that.eventHandlers['changeModelHandler'] = function (event) {
            that._initialChange = false;
            that._onChange(that.nativeElement.selectedValues.length > 0 ? (that.nativeElement.selectedValues.length > 1 ? that.nativeElement.selectedValues : that.nativeElement.selectedValues[0]) : null);
        };
        that.eventHandlers['blurModelHandler'] = function (event) {
            that._onTouched();
        };
        that.nativeElement.whenRendered(function () {
            if (that.nativeElement.querySelector('input')) {
                that.eventHandlers['keyupModelHandler'] = function (event) {
                    setTimeout(function () { that.eventHandlers['changeModelHandler'](event); }, 50);
                };
                that.nativeElement.querySelector('input').addEventListener('keyup', that.eventHandlers['keyupModelHandler']);
            }
        });
        that.nativeElement.addEventListener('change', that.eventHandlers['changeModelHandler']);
        that.nativeElement.addEventListener('blur', that.eventHandlers['blurModelHandler']);
    };
    /** @description Remove event listeners. */
    DropDownListComponent.prototype.unlisten = function () {
        var that = this;
        if (that.eventHandlers['actionButtonClickHandler']) {
            that.nativeElement.removeEventListener('actionButtonClick', that.eventHandlers['actionButtonClickHandler']);
        }
        if (that.eventHandlers['changeHandler']) {
            that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
        }
        if (that.eventHandlers['closeHandler']) {
            that.nativeElement.removeEventListener('close', that.eventHandlers['closeHandler']);
        }
        if (that.eventHandlers['closingHandler']) {
            that.nativeElement.removeEventListener('closing', that.eventHandlers['closingHandler']);
        }
        if (that.eventHandlers['dropDownButtonClickHandler']) {
            that.nativeElement.removeEventListener('dropDownButtonClick', that.eventHandlers['dropDownButtonClickHandler']);
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
        if (that.eventHandlers['changeModelHandler']) {
            that.nativeElement.removeEventListener('change', that.eventHandlers['changeModelHandler']);
            if (that.nativeElement.querySelector('input')) {
                that.nativeElement.querySelector('input').removeEventListener('keyup', that.eventHandlers['keyupModelHandler']);
            }
        }
        if (that.eventHandlers['blurModelHandler']) {
            that.nativeElement.removeEventListener('blur', that.eventHandlers['blurModelHandler']);
        }
    };
    DropDownListComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    tslib_1.__decorate([
        Input()
    ], DropDownListComponent.prototype, "animation", null);
    tslib_1.__decorate([
        Input()
    ], DropDownListComponent.prototype, "autoCloseDelay", null);
    tslib_1.__decorate([
        Input()
    ], DropDownListComponent.prototype, "dataSource", null);
    tslib_1.__decorate([
        Input()
    ], DropDownListComponent.prototype, "disabled", null);
    tslib_1.__decorate([
        Input()
    ], DropDownListComponent.prototype, "displayLoadingIndicator", null);
    tslib_1.__decorate([
        Input()
    ], DropDownListComponent.prototype, "displayMember", null);
    tslib_1.__decorate([
        Input()
    ], DropDownListComponent.prototype, "dropDownAppendTo", null);
    tslib_1.__decorate([
        Input()
    ], DropDownListComponent.prototype, "dropDownButtonPosition", null);
    tslib_1.__decorate([
        Input()
    ], DropDownListComponent.prototype, "dropDownHeight", null);
    tslib_1.__decorate([
        Input()
    ], DropDownListComponent.prototype, "dropDownMaxHeight", null);
    tslib_1.__decorate([
        Input()
    ], DropDownListComponent.prototype, "dropDownMaxWidth", null);
    tslib_1.__decorate([
        Input()
    ], DropDownListComponent.prototype, "dropDownMinHeight", null);
    tslib_1.__decorate([
        Input()
    ], DropDownListComponent.prototype, "dropDownMinWidth", null);
    tslib_1.__decorate([
        Input()
    ], DropDownListComponent.prototype, "dropDownOpenMode", null);
    tslib_1.__decorate([
        Input()
    ], DropDownListComponent.prototype, "dropDownOverlay", null);
    tslib_1.__decorate([
        Input()
    ], DropDownListComponent.prototype, "dropDownPlaceholder", null);
    tslib_1.__decorate([
        Input()
    ], DropDownListComponent.prototype, "dropDownPosition", null);
    tslib_1.__decorate([
        Input()
    ], DropDownListComponent.prototype, "dropDownWidth", null);
    tslib_1.__decorate([
        Input()
    ], DropDownListComponent.prototype, "filterable", null);
    tslib_1.__decorate([
        Input()
    ], DropDownListComponent.prototype, "filterInputPlaceholder", null);
    tslib_1.__decorate([
        Input()
    ], DropDownListComponent.prototype, "filterMode", null);
    tslib_1.__decorate([
        Input()
    ], DropDownListComponent.prototype, "grouped", null);
    tslib_1.__decorate([
        Input()
    ], DropDownListComponent.prototype, "groupMember", null);
    tslib_1.__decorate([
        Input()
    ], DropDownListComponent.prototype, "hint", null);
    tslib_1.__decorate([
        Input()
    ], DropDownListComponent.prototype, "horizontalScrollBarVisibility", null);
    tslib_1.__decorate([
        Input()
    ], DropDownListComponent.prototype, "inputMember", null);
    tslib_1.__decorate([
        Input()
    ], DropDownListComponent.prototype, "incrementalSearchDelay", null);
    tslib_1.__decorate([
        Input()
    ], DropDownListComponent.prototype, "incrementalSearchMode", null);
    tslib_1.__decorate([
        Input()
    ], DropDownListComponent.prototype, "itemHeight", null);
    tslib_1.__decorate([
        Input()
    ], DropDownListComponent.prototype, "itemMeasureMode", null);
    tslib_1.__decorate([
        Input()
    ], DropDownListComponent.prototype, "items", null);
    tslib_1.__decorate([
        Input()
    ], DropDownListComponent.prototype, "itemTemplate", null);
    tslib_1.__decorate([
        Input()
    ], DropDownListComponent.prototype, "label", null);
    tslib_1.__decorate([
        Input()
    ], DropDownListComponent.prototype, "loadingIndicatorPlaceholder", null);
    tslib_1.__decorate([
        Input()
    ], DropDownListComponent.prototype, "loadingIndicatorPosition", null);
    tslib_1.__decorate([
        Input()
    ], DropDownListComponent.prototype, "locale", null);
    tslib_1.__decorate([
        Input()
    ], DropDownListComponent.prototype, "localizeFormatFunction", null);
    tslib_1.__decorate([
        Input()
    ], DropDownListComponent.prototype, "messages", null);
    tslib_1.__decorate([
        Input()
    ], DropDownListComponent.prototype, "name", null);
    tslib_1.__decorate([
        Input()
    ], DropDownListComponent.prototype, "opened", null);
    tslib_1.__decorate([
        Input()
    ], DropDownListComponent.prototype, "placeholder", null);
    tslib_1.__decorate([
        Input()
    ], DropDownListComponent.prototype, "readonly", null);
    tslib_1.__decorate([
        Input()
    ], DropDownListComponent.prototype, "rightToLeft", null);
    tslib_1.__decorate([
        Input()
    ], DropDownListComponent.prototype, "resizeIndicator", null);
    tslib_1.__decorate([
        Input()
    ], DropDownListComponent.prototype, "resizeMode", null);
    tslib_1.__decorate([
        Input()
    ], DropDownListComponent.prototype, "selectionDisplayMode", null);
    tslib_1.__decorate([
        Input()
    ], DropDownListComponent.prototype, "selectedIndexes", null);
    tslib_1.__decorate([
        Input()
    ], DropDownListComponent.prototype, "selectedValues", null);
    tslib_1.__decorate([
        Input()
    ], DropDownListComponent.prototype, "selectionMode", null);
    tslib_1.__decorate([
        Input()
    ], DropDownListComponent.prototype, "sorted", null);
    tslib_1.__decorate([
        Input()
    ], DropDownListComponent.prototype, "sortDirection", null);
    tslib_1.__decorate([
        Input()
    ], DropDownListComponent.prototype, "theme", null);
    tslib_1.__decorate([
        Input()
    ], DropDownListComponent.prototype, "tokenTemplate", null);
    tslib_1.__decorate([
        Input()
    ], DropDownListComponent.prototype, "unfocusable", null);
    tslib_1.__decorate([
        Input()
    ], DropDownListComponent.prototype, "value", null);
    tslib_1.__decorate([
        Input()
    ], DropDownListComponent.prototype, "valueMember", null);
    tslib_1.__decorate([
        Input()
    ], DropDownListComponent.prototype, "verticalScrollBarVisibility", null);
    tslib_1.__decorate([
        Input()
    ], DropDownListComponent.prototype, "virtualized", null);
    tslib_1.__decorate([
        Output()
    ], DropDownListComponent.prototype, "onActionButtonClick", void 0);
    tslib_1.__decorate([
        Output()
    ], DropDownListComponent.prototype, "onChange", void 0);
    tslib_1.__decorate([
        Output()
    ], DropDownListComponent.prototype, "onClose", void 0);
    tslib_1.__decorate([
        Output()
    ], DropDownListComponent.prototype, "onClosing", void 0);
    tslib_1.__decorate([
        Output()
    ], DropDownListComponent.prototype, "onDropDownButtonClick", void 0);
    tslib_1.__decorate([
        Output()
    ], DropDownListComponent.prototype, "onItemClick", void 0);
    tslib_1.__decorate([
        Output()
    ], DropDownListComponent.prototype, "onOpen", void 0);
    tslib_1.__decorate([
        Output()
    ], DropDownListComponent.prototype, "onOpening", void 0);
    tslib_1.__decorate([
        Output()
    ], DropDownListComponent.prototype, "onResizeStart", void 0);
    tslib_1.__decorate([
        Output()
    ], DropDownListComponent.prototype, "onResizeEnd", void 0);
    tslib_1.__decorate([
        Output()
    ], DropDownListComponent.prototype, "onScrollBottomReached", void 0);
    tslib_1.__decorate([
        Output()
    ], DropDownListComponent.prototype, "onScrollTopReached", void 0);
    DropDownListComponent = tslib_1.__decorate([
        Directive({
            selector: 'smart-drop-down-list, [smart-drop-down-list]',
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
        })
    ], DropDownListComponent);
    return DropDownListComponent;
}(BaseElement));
export { DropDownListComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQuZHJvcGRvd25saXN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc21hcnQtd2ViY29tcG9uZW50cy1hbmd1bGFyL2Ryb3Bkb3dubGlzdC8iLCJzb3VyY2VzIjpbInNtYXJ0LmRyb3Bkb3dubGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM04sT0FBTyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVyRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFeEMsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBUXpFLElBQU0sbUNBQW1DLEdBQVE7SUFDN0MsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxxQkFBcUIsRUFBckIsQ0FBcUIsQ0FBQztJQUNwRCxLQUFLLEVBQUUsSUFBSTtDQUNkLENBQUE7QUFRRDtJQUEyQyxpREFBVztJQUVyRCwrQkFBWSxHQUE2QjtRQUF6QyxZQUNDLGtCQUFNLEdBQUcsQ0FBQyxTQUVWO1FBRU8sbUJBQWEsR0FBVSxFQUFFLENBQUM7UUFhM0I7OztVQUdFO1FBQ0gsZUFBUyxHQUF5QixjQUFPLENBQUMsQ0FBQztRQUMxQzs7O1VBR0U7UUFDSCxnQkFBVSxHQUFjLGNBQU8sQ0FBQyxDQUFDO1FBNmdCdkM7OENBQ3NDO1FBQzVCLHlCQUFtQixHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTlFOzs7Ozs7Ozs7VUFTRTtRQUNRLGNBQVEsR0FBOEIsSUFB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SUFPRDtRQURDLEtBQUssRUFBRTtxREFHUDtJQU9EO1FBREMsS0FBSyxFQUFFOzhFQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7NERBR1A7SUFPRDtRQURDLEtBQUssRUFBRTt1RUFHUDtJQU9EO1FBREMsS0FBSyxFQUFFO3NFQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7MkRBR1A7SUFPRDtRQURDLEtBQUssRUFBRTtnRUFHUDtJQU9EO1FBREMsS0FBSyxFQUFFO3NEQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7NkRBR1A7SUFPRDtRQURDLEtBQUssRUFBRTtzREFHUDtJQU9EO1FBREMsS0FBSyxFQUFFOzRFQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7eUVBR1A7SUFPRDtRQURDLEtBQUssRUFBRTt1REFHUDtJQU9EO1FBREMsS0FBSyxFQUFFO3VFQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7eURBR1A7SUFPRDtRQURDLEtBQUssRUFBRTtxREFHUDtJQU9EO1FBREMsS0FBSyxFQUFFO3VEQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7NERBR1A7SUFPRDtRQURDLEtBQUssRUFBRTt5REFHUDtJQU9EO1FBREMsS0FBSyxFQUFFOzREQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7Z0VBR1A7SUFPRDtRQURDLEtBQUssRUFBRTsyREFHUDtJQU9EO1FBREMsS0FBSyxFQUFFO3FFQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7Z0VBR1A7SUFPRDtRQURDLEtBQUssRUFBRTsrREFHUDtJQU9EO1FBREMsS0FBSyxFQUFFOzhEQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7dURBR1A7SUFPRDtRQURDLEtBQUssRUFBRTs4REFHUDtJQU9EO1FBREMsS0FBSyxFQUFFO3NEQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7OERBR1A7SUFPRDtRQURDLEtBQUssRUFBRTs0REFHUDtJQU9EO1FBREMsS0FBSyxFQUFFO3NEQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7NERBR1A7SUFPRDtRQURDLEtBQUssRUFBRTs0RUFHUDtJQU9EO1FBREMsS0FBSyxFQUFFOzREQUdQO0lBT1M7UUFBVCxNQUFNLEVBQUU7c0VBQXFFO0lBWXBFO1FBQVQsTUFBTSxFQUFFOzJEQUEwRDtJQUl6RDtRQUFULE1BQU0sRUFBRTswREFBeUQ7SUFJeEQ7UUFBVCxNQUFNLEVBQUU7NERBQTJEO0lBSTFEO1FBQVQsTUFBTSxFQUFFO3dFQUF1RTtJQVV0RTtRQUFULE1BQU0sRUFBRTs4REFBNkQ7SUFJNUQ7UUFBVCxNQUFNLEVBQUU7eURBQXdEO0lBSXZEO1FBQVQsTUFBTSxFQUFFOzREQUEyRDtJQU0xRDtRQUFULE1BQU0sRUFBRTtnRUFBK0Q7SUFNOUQ7UUFBVCxNQUFNLEVBQUU7OERBQTZEO0lBSTVEO1FBQVQsTUFBTSxFQUFFO3dFQUF1RTtJQUl0RTtRQUFULE1BQU0sRUFBRTtxRUFBb0U7SUExbUJqRSxxQkFBcUI7UUFOakMsU0FBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLDhDQUE4QztZQUN4RCxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQztTQUVoRCxDQUFDO09BRVcscUJBQXFCLENBNGhDakM7SUFBRCw0QkFBQztDQUFBLEFBNWhDRCxDQUEyQyxXQUFXLEdBNGhDckQ7U0E1aENZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERyb3BEb3duTGlzdCB9IGZyb20gJy4vLi4vaW5kZXgnO1xuaW1wb3J0IHsgQW5pbWF0aW9uLCBEcm9wRG93bkJ1dHRvblBvc2l0aW9uLCBEcm9wRG93bk9wZW5Nb2RlLCBEcm9wRG93blBvc2l0aW9uLCBGaWx0ZXJNb2RlLCBIb3Jpem9udGFsU2Nyb2xsQmFyVmlzaWJpbGl0eSwgU2VhcmNoTW9kZSwgTGlzdEl0ZW1NZWFzdXJlTW9kZSwgVmVydGljYWxBbGlnbm1lbnQsIFJlc2l6ZU1vZGUsIFNlbGVjdGlvbkRpc3BsYXlNb2RlLCBMaXN0U2VsZWN0aW9uTW9kZSwgVmVydGljYWxTY3JvbGxCYXJWaXNpYmlsaXR5LCBFbGVtZW50UmVuZGVyTW9kZX0gZnJvbSAnLi8uLi9pbmRleCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIERpcmVjdGl2ZSwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIFNpbXBsZUNoYW5nZXMsIGZvcndhcmRSZWYsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgUXVlcnlMaXN0LCBDb250ZW50Q2hpbGRyZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VFbGVtZW50LCBTbWFydCB9IGZyb20gJy4vc21hcnQuZWxlbWVudCc7XG5leHBvcnQgeyBBbmltYXRpb24sIERyb3BEb3duQnV0dG9uUG9zaXRpb24sIERyb3BEb3duT3Blbk1vZGUsIERyb3BEb3duUG9zaXRpb24sIEZpbHRlck1vZGUsIEhvcml6b250YWxTY3JvbGxCYXJWaXNpYmlsaXR5LCBTZWFyY2hNb2RlLCBMaXN0SXRlbU1lYXN1cmVNb2RlLCBWZXJ0aWNhbEFsaWdubWVudCwgUmVzaXplTW9kZSwgU2VsZWN0aW9uRGlzcGxheU1vZGUsIExpc3RTZWxlY3Rpb25Nb2RlLCBWZXJ0aWNhbFNjcm9sbEJhclZpc2liaWxpdHksIEVsZW1lbnRSZW5kZXJNb2RlfSBmcm9tICcuLy4uL2luZGV4JztcbmV4cG9ydCB7IFNtYXJ0IH0gZnJvbSAnLi9zbWFydC5lbGVtZW50JztcbmV4cG9ydCB7IERyb3BEb3duTGlzdCB9IGZyb20gJy4vLi4vaW5kZXgnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5cblxuaW1wb3J0IHsgTGlzdEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL3NtYXJ0Lmxpc3RpdGVtJztcblxuaW1wb3J0IHsgTGlzdEl0ZW1zR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL3NtYXJ0Lmxpc3RpdGVtc2dyb3VwJztcblxuY29uc3QgQ1VTVE9NX0lOUFVUX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBEcm9wRG93bkxpc3RDb21wb25lbnQpLFxuICAgIG11bHRpOiB0cnVlXG59XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ3NtYXJ0LWRyb3AtZG93bi1saXN0LCBbc21hcnQtZHJvcC1kb3duLWxpc3RdJyxcblx0cHJvdmlkZXJzOiBbQ1VTVE9NX0lOUFVUX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdXG5cbn0pXG5cbmV4cG9ydCBjbGFzcyBEcm9wRG93bkxpc3RDb21wb25lbnQgZXh0ZW5kcyBCYXNlRWxlbWVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblxuXHRjb25zdHJ1Y3RvcihyZWY6IEVsZW1lbnRSZWY8RHJvcERvd25MaXN0Pikge1xuXHRcdHN1cGVyKHJlZik7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID0gcmVmLm5hdGl2ZUVsZW1lbnQgYXMgRHJvcERvd25MaXN0O1xuXHR9XG5cblx0cHJpdmF0ZSBldmVudEhhbmRsZXJzOiBhbnlbXSA9IFtdO1xuXG5cdHB1YmxpYyBuYXRpdmVFbGVtZW50OiBEcm9wRG93bkxpc3Q7XG5cdC8qKiBAZGVzY3JpcHRpb24gQ3JlYXRlcyB0aGUgY29tcG9uZW50IG9uIGRlbWFuZC5cblx0ICogQHBhcmFtIHByb3BlcnRpZXMgQW4gb3B0aW9uYWwgb2JqZWN0IG9mIHByb3BlcnRpZXMsIHdoaWNoIHdpbGwgYmUgYWRkZWQgdG8gdGhlIHRlbXBsYXRlIGJpbmRlZCBvbmVzLlxuXHQgKi9cblx0cHVibGljIGNyZWF0ZUNvbXBvbmVudChwcm9wZXJ0aWVzID0ge30pOiBhbnkge1xuICAgIFx0dGhpcy5uYXRpdmVFbGVtZW50ID0gPERyb3BEb3duTGlzdD5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzbWFydC1kcm9wLWRvd24tbGlzdCcpO1xuXHRcdGZvciAobGV0IHByb3BlcnR5TmFtZSBpbiBwcm9wZXJ0aWVzKSB7IFxuIFx0XHRcdHRoaXMubmF0aXZlRWxlbWVudFtwcm9wZXJ0eU5hbWVdID0gcHJvcGVydGllc1twcm9wZXJ0eU5hbWVdO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50O1xuXHR9XG4gICAgICAgIC8qKlxuICAgICAgICAqIEBkZXNjcmlwdGlvblxuICAgICAgICAqIFRoZSByZWdpc3RlcmVkIGNhbGxiYWNrIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIGEgY2hhbmdlIGV2ZW50IG9jY3VycyBvbiB0aGUgZm9ybSBlbGVtZW50cy5cbiAgICAgICAgKi9cbiAgICAgICBfb25DaGFuZ2U6ICh2YWx1ZTogYW55KSA9PiB2b2lkID0gKCkgPT4ge307XG4gICAgICAgIC8qKlxuICAgICAgICAqIEBkZXNjcmlwdGlvblxuICAgICAgICAqIFRoZSByZWdpc3RlcmVkIGNhbGxiYWNrIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIGEgYmx1ciBldmVudCBvY2N1cnMgb24gdGhlIGZvcm0gZWxlbWVudHMuXG4gICAgICAgICovXG4gICAgICAgX29uVG91Y2hlZDogKCkgPT4gYW55ID0gKCkgPT4ge307XG5cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgYW5pbWF0aW9uIG1vZGUuIEFuaW1hdGlvbiBpcyBkaXNhYmxlZCB3aGVuIHRoZSBwcm9wZXJ0eSBpcyBzZXQgdG8gJ25vbmUnICovXG5cdEBJbnB1dCgpXG5cdGdldCBhbmltYXRpb24oKTogQW5pbWF0aW9uIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmFuaW1hdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYW5pbWF0aW9uKHZhbHVlOiBBbmltYXRpb24pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYW5pbWF0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFVzZWQgb25seSB3aGVuIGRyb3BEb3duT3Blbk1vZGUgaXMgc2V0IHRvICdhdXRvJy4gRGV0ZXJtaW5lcyB0aGUgZGVsYXkgYmVmb3JlIHRoZSBvcGVuZWQgZHJvcCBkb3duIGNsb3NlcyBpZiB0aGUgcG9pbnRlciBpcyBub3Qgb3ZlciB0aGUgZWxlbWVudC4gKi9cblx0QElucHV0KClcblx0Z2V0IGF1dG9DbG9zZURlbGF5KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hdXRvQ2xvc2VEZWxheSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYXV0b0Nsb3NlRGVsYXkodmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hdXRvQ2xvc2VEZWxheSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBkYXRhIHNvdXJjZSB0aGF0IHdpbGwgYmUgbG9hZGVkIHRvIHRoZSBEcm9wRG93bkxpc3QuIFRoZSBkYXRhU291cmNlIGNhbiBiZSBhbiBhcnJheSBvZiBzdHJpbmdzL251bWJlcnMgb3Igb2JqZWN0cyB3aGVyZSB0aGUgYXR0cmlidXRlcyByZXByZXNlbnQgdGhlIHByb3BlcnRpZXMgb2YgYSBMaXN0IEl0ZW0uIEZvciBleGFtcGxlIGxhYmVsLCB2YWx1ZSwgZ3JvdXAuIEl0IGNhbiBhbHNvIGJlIGEgY2FsbGJhY2sgdGhhdCByZXR1cm5zIGFuIEFycmF5IG9mIGl0ZW1zIGFzIHByZXZpb3VzbHkgZGVzY3JpYmVkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGF0YVNvdXJjZSgpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGF0YVNvdXJjZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGF0YVNvdXJjZSh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRhdGFTb3VyY2UgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRW5hYmxlcyBvciBkaXNhYmxlcyB0aGUgZWxlbWVudC4gKi9cblx0QElucHV0KClcblx0Z2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZWQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVkID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgd2hldGhlciBhbiBpbmRpY2F0b3Igd2lsbCBhcHBlYXIgZHVyaW5nIGZpbHRlcmluZyBhbmQgcmVtb3RlIGl0ZW0gbG9hZGluZy4gKi9cblx0QElucHV0KClcblx0Z2V0IGRpc3BsYXlMb2FkaW5nSW5kaWNhdG9yKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzcGxheUxvYWRpbmdJbmRpY2F0b3IgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRpc3BsYXlMb2FkaW5nSW5kaWNhdG9yKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc3BsYXlMb2FkaW5nSW5kaWNhdG9yID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgZGlzcGxheU1lbWJlci4gVGhlIGRpc3BsYXlNZW1iZXIgc3BlY2lmaWVzIHRoZSBuYW1lIG9mIGFuIG9iamVjdCBwcm9wZXJ0eSB0byBkaXNwbGF5LiBUaGUgbmFtZSBpcyBjb250YWluZWQgaW4gdGhlIGNvbGxlY3Rpb24gc3BlY2lmaWVkIGJ5IHRoZSAnZGF0YVNvdXJjZScgcHJvcGVydHkuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkaXNwbGF5TWVtYmVyKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNwbGF5TWVtYmVyIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkaXNwbGF5TWVtYmVyKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzcGxheU1lbWJlciA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBkcm9wIGRvd24gcGFyZW50LiBUaGUgZXhwZWN0ZWQgdmFsdWUgaXMgQ1NTIFNlbGVjdG9yLCBJRCBvciAnYm9keScuIFRoZSBkcm9wIGRvd24gY2FuIGJlIHJlbW92ZWQgZnJvbSB0aGUgYm9keSBvZiB0aGUgZWxlbWVudCBhbmQgY29udGludWUgdG8gd29yayBpbiBhbm90aGVyIGNvbnRhaW5lci4gVGhpcyBpcyB1c2VmdWxsIHdoZW4gb25lIG9mIHRoZSBwYXJlbnRzIG9mIHRoZSBlbGVtZW50IGRvZXNuJ3QgYWxsb3cgb3ZlcmZsb3dpbmcsIGJ5IHNldHRpbmdzIHRoaXMgcHJvcGVydHkgdG8gJ2JvZHknIHRoZSBkcm9wIGRvd24gd2lsbCBiZSBhcHBlbmRlZCB0byB0aGUgRE9NIGFuZCB0aGUgcG9wdXAgd2lsbCBvcGVuL2Nsb3NlIGFzIHVzdWFsLiBkcm9wRG93bkFwcGVuZFRvIGNhbiBiZSBhIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIGlkIG9mIGFuIEhUTUwgZWxlbWVudCBvbiB0aGUgcGFnZSBvciBhIGRpcmVjdCByZWZlcmVuY2UgdG8gdGhhdCBlbGVtZW50LiBSZXNldGluZyBpdCBiYWNrIHRvIG51bGwgd2lsbCB0YWtlIHRoZSBkcm9wIGRvd24gYmFjayB0byBpdCdzIG9yaWdpbmFsIHBsYWNlLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZHJvcERvd25BcHBlbmRUbygpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZHJvcERvd25BcHBlbmRUbyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZHJvcERvd25BcHBlbmRUbyh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRyb3BEb3duQXBwZW5kVG8gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgcG9zaXRpb24gb2YgdGhlIGRyb3AgZG93biBidXR0b24uICovXG5cdEBJbnB1dCgpXG5cdGdldCBkcm9wRG93bkJ1dHRvblBvc2l0aW9uKCk6IERyb3BEb3duQnV0dG9uUG9zaXRpb24ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZHJvcERvd25CdXR0b25Qb3NpdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZHJvcERvd25CdXR0b25Qb3NpdGlvbih2YWx1ZTogRHJvcERvd25CdXR0b25Qb3NpdGlvbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kcm9wRG93bkJ1dHRvblBvc2l0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgdGhlIGhlaWdodCBvZiB0aGUgZHJvcCBkb3duLiBCeSBkZWZhdWx0IGl0J3Mgc2V0IHRvIGFuIGVtcHR5IHN0cmluZy4gSW4gdGhpcyBjYXNlIHRoZSBoZWlnaHQgb2YgdGhlIGRyb3AgZG93biBpcyBjb250cm9sbGVkIGJ5IGEgQ1NTIHZhcmlhYmxlLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZHJvcERvd25IZWlnaHQoKTogc3RyaW5nIHwgbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRyb3BEb3duSGVpZ2h0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkcm9wRG93bkhlaWdodCh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRyb3BEb3duSGVpZ2h0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgdGhlIG1heGltdW0gSGVpZ2h0IG9mIHRoZSBkcm9wIGRvd24uIEJ5IGRlZmF1bHQgaXQncyBzZXQgdG8gYW4gZW1wdHkgc3RyaW5nLiBJbiB0aGlzIGNhc2UgdGhlIG1heEhlaWdodCBvZiB0aGUgZHJvcCBkb3duIGlzIGNvbnRyb2xsZWQgYnkgYSBDU1MgdmFyaWFibGUuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkcm9wRG93bk1heEhlaWdodCgpOiBzdHJpbmcgfCBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZHJvcERvd25NYXhIZWlnaHQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRyb3BEb3duTWF4SGVpZ2h0KHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZHJvcERvd25NYXhIZWlnaHQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyB0aGUgbWF4aW11bSBXaWR0aCBvZiB0aGUgZHJvcCBkb3duLiBCeSBkZWZhdWx0IGl0J3Mgc2V0IHRvIGFuIGVtcHR5IHN0cmluZy4gSW4gdGhpcyBjYXNlIHRoZSBtYXhXaWR0aCBvZiB0aGUgZHJvcCBkb3duIGlzIGNvbnRyb2xsZWQgYnkgYSBDU1MgdmFyaWFibGUuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkcm9wRG93bk1heFdpZHRoKCk6IHN0cmluZyB8IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kcm9wRG93bk1heFdpZHRoIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkcm9wRG93bk1heFdpZHRoKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZHJvcERvd25NYXhXaWR0aCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBtaW5pbXVtIEhlaWdodCBvZiB0aGUgZHJvcCBkb3duLiBCeSBkZWZhdWx0IGl0J3Mgc2V0IHRvIGFuIGVtcHR5IHN0cmluZy4gSW4gdGhpcyBjYXNlIHRoZSBtaW5IZWlnaHQgb2YgdGhlIGRyb3AgZG93biBpcyBjb250cm9sbGVkIGJ5IGEgQ1NTIHZhcmlhYmxlLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZHJvcERvd25NaW5IZWlnaHQoKTogc3RyaW5nIHwgbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRyb3BEb3duTWluSGVpZ2h0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkcm9wRG93bk1pbkhlaWdodCh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRyb3BEb3duTWluSGVpZ2h0ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgdGhlIG1pbmltdW0gV2lkdGggb2YgdGhlIGRyb3AgZG93bi4gQnkgZGVmYXVsdCBpdCdzIHNldCB0byBhbiBlbXB0eSBzdHJpbmcuIEluIHRoaXMgY2FzZSB0aGUgbWluV2lkdGggb2YgdGhlIGRyb3AgZG93biBpcyBjb250cm9sbGVkIGJ5IGEgQ1NTIHZhcmlhYmxlLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZHJvcERvd25NaW5XaWR0aCgpOiBzdHJpbmcgfCBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZHJvcERvd25NaW5XaWR0aCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZHJvcERvd25NaW5XaWR0aCh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRyb3BEb3duTWluV2lkdGggPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyBob3cgdGhlIGRyb3AgZG93biBpcyBnb2luZyB0byBvcGVuLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZHJvcERvd25PcGVuTW9kZSgpOiBEcm9wRG93bk9wZW5Nb2RlIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRyb3BEb3duT3Blbk1vZGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRyb3BEb3duT3Blbk1vZGUodmFsdWU6IERyb3BEb3duT3Blbk1vZGUpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZHJvcERvd25PcGVuTW9kZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBJZiB0aGlzIHByb3BlcnR5IGlzIGVuYWJsZWQsIHdoZW4gdGhlIGVsZW1lbnQncyBkcm9wZG93biBpcyBvcGVuZWQsIGEgdHJhbnNwYXJlbnQgb3ZlcmxheSBpcyBwb3NpdGlvbmVkIGJldHdlZW4gdGhlIGRyb3Bkb3duIGFuZCB0aGUgcmVzdCBvZiB0aGUgZG9jdW1lbnQuIFRoZSBwdXJwb3NlIG9mIHRoZSBvdmVybGF5IGlzIHRvIG1ha2Ugc3VyZSB0aGF0IGNsaWNraW5nIGFueXdoZXJlIG91dHNpZGUgdGhlIHBvcHVwIHdpbGwgd2lsbCB0YXJnZXQgdGhlIG92ZXJsYXkgYW5kIG5vdCB0aGUgRE9NLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZHJvcERvd25PdmVybGF5KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZHJvcERvd25PdmVybGF5IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkcm9wRG93bk92ZXJsYXkodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZHJvcERvd25PdmVybGF5ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIHBsYWNlaG9sZGVyIGZvciB0aGUgZHJvcCBkb3duIGxpc3Qgd2hlbiBpdCdzIGVtcHR5LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZHJvcERvd25QbGFjZWhvbGRlcigpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZHJvcERvd25QbGFjZWhvbGRlciA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZHJvcERvd25QbGFjZWhvbGRlcih2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRyb3BEb3duUGxhY2Vob2xkZXIgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgcG9zaXRpb24gb2YgdGhlIGRyb3AgZG93biB3aGVuIG9wZW5lZC4gKi9cblx0QElucHV0KClcblx0Z2V0IGRyb3BEb3duUG9zaXRpb24oKTogRHJvcERvd25Qb3NpdGlvbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kcm9wRG93blBvc2l0aW9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkcm9wRG93blBvc2l0aW9uKHZhbHVlOiBEcm9wRG93blBvc2l0aW9uKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRyb3BEb3duUG9zaXRpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyB0aGUgd2lkdGggb2YgdGhlIGRyb3AgZG93bi4gQnkgZGVmYXVsdCBpdCdzIHNldCB0byBhbiBlbXB0eSBzdHJpbmcuIEluIHRoaXMgY2FzZSB0aGUgd2lkdGggb2YgdGhlIGRyb3AgZG93biBpcyBjb250cm9sbGVkIGJ5IGEgQ1NTIHZhcmlhYmxlLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZHJvcERvd25XaWR0aCgpOiBzdHJpbmcgfCBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZHJvcERvd25XaWR0aCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZHJvcERvd25XaWR0aCh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRyb3BEb3duV2lkdGggPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB3aGV0aGVyIGZpbHRlcmluZyBpcyBlbmFibGVkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZmlsdGVyYWJsZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmZpbHRlcmFibGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGZpbHRlcmFibGUodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZmlsdGVyYWJsZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBwbGFjZWhvbGRlciBmb3IgdGhlIGZpbHRlciBpbnB1dCBpbnNpZGUgdGhlIGRyb3AgZG93biB0aGF0IGlzIG9ubHkgdmlzaWJsZSB3aGVuIGZpbHRlcmFibGUgaXMgZW5hYmxlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IGZpbHRlcklucHV0UGxhY2Vob2xkZXIoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmZpbHRlcklucHV0UGxhY2Vob2xkZXIgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGZpbHRlcklucHV0UGxhY2Vob2xkZXIodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5maWx0ZXJJbnB1dFBsYWNlaG9sZGVyID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIGZpbHRlcmluZyBtb2RlIG9mIHRoZSBkcm9wIGRvd24gbGlzdC4gKi9cblx0QElucHV0KClcblx0Z2V0IGZpbHRlck1vZGUoKTogRmlsdGVyTW9kZSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5maWx0ZXJNb2RlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBmaWx0ZXJNb2RlKHZhbHVlOiBGaWx0ZXJNb2RlKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmZpbHRlck1vZGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSWYgZW5hYmxlZCwgdGhlIGl0ZW1zIHdpbGwgYmUgZ3JvdXBlZCBieSB0aGVpciBmaXJzdCBsZXR0ZXIuIENhbid0IGJlIGFwcGxpZWQgaWYgdGhlIGRhdGFTb3VyY2UgYWxyZWFkeSBjb250YWlucyBncm91cHMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBncm91cGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZ3JvdXBlZCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZ3JvdXBlZCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ncm91cGVkID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgd2hpY2ggYXR0cmlidXRlIGZyb20gdGhlIGRhdGFTb3VyY2Ugb2JqZWN0IHdpbGwgYmUgdXNlZCBhcyB0aGUgZ3JvdXAgbWVtYmVyIGZvciB0aGUgaXRlbXMuIElmIG5vdCBzZXQsIGJ5IGRlZmF1bHQgJ2dyb3VwJyBwcm9wZXJ0eSBpcyB1c2VkIGZyb20gdGhlIHNvdXJjZSBvYmplY3QuIGdyb3VwTWVtYmVyIGlzIGVzcGVjaWFsbHkgdXNlZnVsbCB3aGVuIGxvYWRpbmcgdGhlIGRhdGEgZnJvbSBhIEpTT04gZmlsZSBhcyBhIGRhdGFTb3VyY2UgZm9yIHRoZSBMaXN0Qm94IGFuZCB0aGVyZSdzIGEgc3BlY2lmaWMgcHJvcGVydHkgdGhhdCBzaG91bGQgYmUgdXNlZCB0byBncm91cCB0aGUgaXRlbXMuICovXG5cdEBJbnB1dCgpXG5cdGdldCBncm91cE1lbWJlcigpOiBzdHJpbmcgfCBudWxsIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lmdyb3VwTWVtYmVyIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBncm91cE1lbWJlcih2YWx1ZTogc3RyaW5nIHwgbnVsbCkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ncm91cE1lbWJlciA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIGFkZGl0aW9uYWwgaGVscGVyIHRleHQgYmVsb3cgdGhlIGVsZW1lbnQuIFRoZSBoaW50IGlzIHZpc2libGUgb25seSB3aGVuIHRoZSBlbGVtZW50IGlzIGZvY3VzZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBoaW50KCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oaW50IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBoaW50KHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGludCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBob3Jpem9udGFsIFNjcm9sbCBiYXIgaW5zaWRlIHRoZSBkcm9wIGRvd24uICovXG5cdEBJbnB1dCgpXG5cdGdldCBob3Jpem9udGFsU2Nyb2xsQmFyVmlzaWJpbGl0eSgpOiBIb3Jpem9udGFsU2Nyb2xsQmFyVmlzaWJpbGl0eSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5ob3Jpem9udGFsU2Nyb2xsQmFyVmlzaWJpbGl0eSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgaG9yaXpvbnRhbFNjcm9sbEJhclZpc2liaWxpdHkodmFsdWU6IEhvcml6b250YWxTY3JvbGxCYXJWaXNpYmlsaXR5KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lmhvcml6b250YWxTY3JvbGxCYXJWaXNpYmlsaXR5ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJlcHJlc2VudHMgdGhlIHByb3BlcnR5IG5hbWUgb2YgYSBMaXN0IGl0ZW0uIERldGVybWluZXMgdGhlIHZhbHVlIG9mIHRoZSBpbnB1dCB3aGVuIGEgTGlzdEl0ZW0gaXMgc2VsZWN0ZWQuIFVzZWZ1bGwgaW4gY2FzZXMgd2hlcmUgdGhlIHVzZXIgd2FudHMgdG8gZGlzcGxheSBmb3IgZXhhbXBsZSB0aGUgdmFsdWUgb2YgYW4gaXRlbSBpbnN0ZWFkIG9mIGl0J3MgbGFiZWwuIEJ5IGRlZmF1bHQgdGhlIGxhYmVsIGlzIGRpc3BsYXllZCBpbiB0aGUgaW5wdXQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBpbnB1dE1lbWJlcigpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5wdXRNZW1iZXIgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGlucHV0TWVtYmVyKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5wdXRNZW1iZXIgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSW5jcmVtZW50YWxTZWFyY2hEZWxheSBwcm9wZXJ0eSBzcGVjaWZpZXMgdGhlIHRpbWUtaW50ZXJ2YWwgaW4gbWlsbGlzZWNvbmRzIHVudGlsIHRoZSBwcmV2aW91cyBzZWFyY2ggcXVlcnkgaXMgY2xlYXJlZC4gVGhlIHRpbWVyIHN0YXJ0cyB3aGVuIHRoZSB1c2VyIHN0b3BzIHR5cGluZy4gQSBuZXcgcXVlcnkgY2FuIGJlIHN0YXJ0ZWQgb25seSB3aGVuIHRoZSBkZWxheSBoYXMgcGFzc2VkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgaW5jcmVtZW50YWxTZWFyY2hEZWxheSgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5jcmVtZW50YWxTZWFyY2hEZWxheSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgaW5jcmVtZW50YWxTZWFyY2hEZWxheSh2YWx1ZTogbnVtYmVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmluY3JlbWVudGFsU2VhcmNoRGVsYXkgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvdCBnZXRzIHRoZSBtb2RlIG9mIHRoZSBpbmNyZW1lbnRhbCBzZWFyY2ggbW9kZS4gSW5jcmVtZW50YWwgc2VhcmNoIGlzIGVuYWJsZWQgYnkgZGVmYXVsdC4gVHlwaW5nIHdoaWxlIHRoZSBkcm9wIGRvd24gaXMgZm9jdXNlZCBzdGFydHMgdGhlIGluY3JlbWVudGFsIHNlYXJjaC4gKi9cblx0QElucHV0KClcblx0Z2V0IGluY3JlbWVudGFsU2VhcmNoTW9kZSgpOiBTZWFyY2hNb2RlIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmluY3JlbWVudGFsU2VhcmNoTW9kZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgaW5jcmVtZW50YWxTZWFyY2hNb2RlKHZhbHVlOiBTZWFyY2hNb2RlKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmluY3JlbWVudGFsU2VhcmNoTW9kZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBoZWlnaHQgZm9yIGFsbCBsaXN0IGl0ZW1zLiBVc2VkIG9ubHkgd2hlbiB2aXJ0dWFsaXphdGlvbiBpcyBlbmFibGVkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgaXRlbUhlaWdodCgpOiBudW1iZXIgfCBudWxsIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lml0ZW1IZWlnaHQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGl0ZW1IZWlnaHQodmFsdWU6IG51bWJlciB8IG51bGwpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaXRlbUhlaWdodCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBpdGVtIHdpZHRoIG1lYXN1cmluZyBhbGdvcml0aG0uICovXG5cdEBJbnB1dCgpXG5cdGdldCBpdGVtTWVhc3VyZU1vZGUoKTogTGlzdEl0ZW1NZWFzdXJlTW9kZSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5pdGVtTWVhc3VyZU1vZGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGl0ZW1NZWFzdXJlTW9kZSh2YWx1ZTogTGlzdEl0ZW1NZWFzdXJlTW9kZSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5pdGVtTWVhc3VyZU1vZGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQSBnZXR0ZXIgdGhhdCByZXR1cm5zIGFuIGFycmF5IG9mIGFsbCBMaXN0IGl0ZW1zIGluc2lkZSB0aGUgZHJvcCBkb3duLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgaXRlbXMoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lml0ZW1zIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBpdGVtcyh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lml0ZW1zID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoZSBpdGVtVGVtcGxhdGUgcHJvcGVydHkgaXMgYSBzdHJpbmcgdGhhdCByZXByZXNlbnRzIHRoZSBpZCBvZiBhbiBIVE1MVGVtcGxhdGVFbGVtZW50IGluIHRoZSBET00gb3IgaXQncyBkaXJlY3QgcmVmZXJlbmNlLiBJdCdzIHVzZWQgdG8gc2V0IGEgY3VzdG9taXplIHRoZSBjb250ZW50IG9mIHRoZSBsaXN0IGl0ZW1zLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgaXRlbVRlbXBsYXRlKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5pdGVtVGVtcGxhdGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGl0ZW1UZW1wbGF0ZSh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lml0ZW1UZW1wbGF0ZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIGEgbGl0dGxlIHRleHQgbGFiZWwgYWJvdmUgdGhlIGVsZW1lbnQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBsYWJlbCgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubGFiZWwgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGxhYmVsKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubGFiZWwgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgdGV4dCB0aGF0IHdpbGwgYmUgZGlzcGxheWVkIG5leHQgdG8gdGhlIGxvYWRpbmcgaW5kaWNhdG9yIHdoZW4gdGhlIGxvYWRlciBpcyB2aXNpYmxlIGFuZCBpdCdzIHBvc2l0aW9uIGlzIHRvcCBvciBib3R0b20uICovXG5cdEBJbnB1dCgpXG5cdGdldCBsb2FkaW5nSW5kaWNhdG9yUGxhY2Vob2xkZXIoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxvYWRpbmdJbmRpY2F0b3JQbGFjZWhvbGRlciA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbG9hZGluZ0luZGljYXRvclBsYWNlaG9sZGVyKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubG9hZGluZ0luZGljYXRvclBsYWNlaG9sZGVyID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIHBvc2l0aW9uIG9mIHRoZSBsb2FkaW5nIGluZGljYXRvci4gKi9cblx0QElucHV0KClcblx0Z2V0IGxvYWRpbmdJbmRpY2F0b3JQb3NpdGlvbigpOiBWZXJ0aWNhbEFsaWdubWVudCB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sb2FkaW5nSW5kaWNhdG9yUG9zaXRpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGxvYWRpbmdJbmRpY2F0b3JQb3NpdGlvbih2YWx1ZTogVmVydGljYWxBbGlnbm1lbnQpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubG9hZGluZ0luZGljYXRvclBvc2l0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgbGFuZ3VhZ2UuIFVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCB0aGUgcHJvcGVydHkgbWVzc2FnZXMuICAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbG9jYWxlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sb2NhbGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGxvY2FsZSh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxvY2FsZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDYWxsYmFjayB1c2VkIHRvIGN1c3RvbWl6ZSB0aGUgZm9ybWF0IG9mIHRoZSBtZXNzYWdlcyB0aGF0IGFyZSByZXR1cm5lZCBmcm9tIHRoZSBMb2NhbGl6YXRpb24gTW9kdWxlLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbG9jYWxpemVGb3JtYXRGdW5jdGlvbigpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubG9jYWxpemVGb3JtYXRGdW5jdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbG9jYWxpemVGb3JtYXRGdW5jdGlvbih2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxvY2FsaXplRm9ybWF0RnVuY3Rpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIGFuIG9iamVjdCBzcGVjaWZ5aW5nIHN0cmluZ3MgdXNlZCBpbiB0aGUgd2lkZ2V0IHRoYXQgY2FuIGJlIGxvY2FsaXplZC4gVXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZSBwcm9wZXJ0eSBsb2NhbGUuICAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbWVzc2FnZXMoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm1lc3NhZ2VzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBtZXNzYWdlcyh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm1lc3NhZ2VzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgbmFtZSBhdHRyaWJ1dGUgZm9yIHRoZSBlbGVtZW50LiBOYW1lIGlzIHVzZWQgd2hlbiBzdWJtaXRpbmcgSFRNTCBmb3Jtcy4gKi9cblx0QElucHV0KClcblx0Z2V0IG5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm5hbWUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5uYW1lID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgd2hldGhlciB0aGUgcG9wdXAgaXMgb3BlbmVkIG9yIG5vdC4gKi9cblx0QElucHV0KClcblx0Z2V0IG9wZW5lZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9wZW5lZCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgb3BlbmVkKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm9wZW5lZCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBlbGVtZW50J3MgcGxhY2Vob2xkZXIsIGRpc3BsYXllZCBpbiB0aGUgZWxlbWVudCdzIHNlbGVjdGlvbiBmaWVsZC4gKi9cblx0QElucHV0KClcblx0Z2V0IHBsYWNlaG9sZGVyKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5wbGFjZWhvbGRlciA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcGxhY2Vob2xkZXIodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5wbGFjZWhvbGRlciA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEaXNhYmxlcyB1c2VyIGludGVyYWN0aW9uIHdpdGggdGhlIGVsZW1lbnQuICovXG5cdEBJbnB1dCgpXG5cdGdldCByZWFkb25seSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlYWRvbmx5IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCByZWFkb25seSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZWFkb25seSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIHZhbHVlIGluZGljYXRpbmcgd2hldGhlciB0aGUgZWxlbWVudCBpcyBhbGlnbmVkIHRvIHN1cHBvcnQgbG9jYWxlcyB1c2luZyByaWdodC10by1sZWZ0IGZvbnRzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcmlnaHRUb0xlZnQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yaWdodFRvTGVmdCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcmlnaHRUb0xlZnQodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmlnaHRUb0xlZnQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSByZXNpemUgaW5kaWNhdG9yIGluIHRoZSBib3R0b20gcmlnaHQgY29ybmVyIG9mIHRoZSBkcm9wIGRvd24gaXMgdmlzaWJsZSBvciBub3QuIFRoaXMgcHJvcGVydHkgaXMgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIHJlc2l6ZU1vZGUuICovXG5cdEBJbnB1dCgpXG5cdGdldCByZXNpemVJbmRpY2F0b3IoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZXNpemVJbmRpY2F0b3IgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHJlc2l6ZUluZGljYXRvcih2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZXNpemVJbmRpY2F0b3IgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBkcm9wRG93biBjYW4gYmUgcmVzaXplZCBvciBub3QuIFdoZW4gcmVzaXppbmcgaXMgZW5hYmxlZCwgYSByZXNpemUgYmFyIGFwcGVhcnMgb24gdGhlIHRvcC9ib3R0b20gc2lkZSBvZiB0aGUgZHJvcCBkb3duLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgcmVzaXplTW9kZSgpOiBSZXNpemVNb2RlIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlc2l6ZU1vZGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHJlc2l6ZU1vZGUodmFsdWU6IFJlc2l6ZU1vZGUpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmVzaXplTW9kZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHdoYXQgd2lsbCBiZSBkaXNwbGF5ZWQgaW4gdGhlIGRyb3BEb3duIHNlbGVjdGlvbiBmaWVsZC4gKi9cblx0QElucHV0KClcblx0Z2V0IHNlbGVjdGlvbkRpc3BsYXlNb2RlKCk6IFNlbGVjdGlvbkRpc3BsYXlNb2RlIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdGlvbkRpc3BsYXlNb2RlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzZWxlY3Rpb25EaXNwbGF5TW9kZSh2YWx1ZTogU2VsZWN0aW9uRGlzcGxheU1vZGUpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uRGlzcGxheU1vZGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSBzZWxlY3RlZCBpbmRleGVzLiBTZWxlY3RlZCBpbmRleGVzIHJlcHJlc2VudHMgYW4gYXJyYXkgb2YgdGhlIGluZGV4ZXMgb2YgdGhlIGl0ZW1zIHRoYXQgc2hvdWxkIGJlIHNlbGVjdGVkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc2VsZWN0ZWRJbmRleGVzKCk6IG51bWJlcltdIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdGVkSW5kZXhlcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc2VsZWN0ZWRJbmRleGVzKHZhbHVlOiBudW1iZXJbXSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zZWxlY3RlZEluZGV4ZXMgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIGVsZWN0ZWQgaW5kZXhlcy4gU2VsZWN0ZWQgdmFsdWVzIHJlcHJlc2VudHMgdGhlIHZhbHVlcyBvZiB0aGUgaXRlbXMgdGhhdCBzaG91bGQgYmUgc2VsZWN0ZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBzZWxlY3RlZFZhbHVlcygpOiBzdHJpbmdbXSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zZWxlY3RlZFZhbHVlcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc2VsZWN0ZWRWYWx1ZXModmFsdWU6IHN0cmluZ1tdKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdGVkVmFsdWVzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgaG93IG1hbnkgaXRlbXMgY2FuIGJlIHNlbGVjdGVkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc2VsZWN0aW9uTW9kZSgpOiBMaXN0U2VsZWN0aW9uTW9kZSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25Nb2RlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBzZWxlY3Rpb25Nb2RlKHZhbHVlOiBMaXN0U2VsZWN0aW9uTW9kZSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25Nb2RlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgd2hldGhlciB0aGUgaXRlbXMgYXJlIHNvcnRlZCBhbHBoYWJldGljYWxseSBvciBub3QgKi9cblx0QElucHV0KClcblx0Z2V0IHNvcnRlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNvcnRlZCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc29ydGVkKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNvcnRlZCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHNvcnRpbmcgZGlyZWN0aW9uIC0gYXNjZW5kaW5nKGFzYykgb3IgZGVzY2VuZGluZyhkZXNjKSAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc29ydERpcmVjdGlvbigpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc29ydERpcmVjdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc29ydERpcmVjdGlvbih2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnNvcnREaXJlY3Rpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgdGhlbWUgZm9yIHRoZSBlbGVtZW50LiBUaGVtZXMgZGVmaW5lIHRoZSBsb29rIG9mIHRoZSBlbGVtZW50cy4gKi9cblx0QElucHV0KClcblx0Z2V0IHRoZW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50aGVtZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdGhlbWUodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50aGVtZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIGEgY3VzdG9tIHRlbXBsYXRlIGZvciB0aGUgY29udGVudCBvZiB0aGUgdG9rZW5zIHdoZW4gc2VsZWN0aW9uRGlzcGxheU1vZGUgaXMgc2V0IHRvICd0b2tlbnMnLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdG9rZW5UZW1wbGF0ZSgpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudG9rZW5UZW1wbGF0ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdG9rZW5UZW1wbGF0ZSh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRva2VuVGVtcGxhdGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSWYgaXMgc2V0IHRvIHRydWUsIHRoZSBlbGVtZW50IGNhbm5vdCBiZSBmb2N1c2VkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdW5mb2N1c2FibGUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC51bmZvY3VzYWJsZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdW5mb2N1c2FibGUodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudW5mb2N1c2FibGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSB2YWx1ZS4gUmV0dXJucyB0aGUgc2VsZWN0aW9uLiBSZXR1cm4gdHlwZToge2xhYmVsOiBzdHJpbmcsIHZhbHVlOiBhbnl9W10uICovXG5cdEBJbnB1dCgpXG5cdGdldCB2YWx1ZSgpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHZhbHVlKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgdmFsdWUgbWVtYmVyIG9mIGFuIGl0ZW0uIFN0b3JlZCBhcyB2YWx1ZSBpbiB0aGUgaXRlbSBvYmplY3QuIFNpbWlsYXIgdG8gZ3JvdXBNZW1iZXIsIHZhbHVlTWVtYmVyIGlzIGVzcGVjaWFsbHkgdXNlZnVsbCB3aGVuIHVzaW5nIGRhdGEgZnJvbSBhIEpTT04gZmlsZSBhcyBhIGRhdGFTb3VyY2UgZm9yIHRoZSBMaXN0Qm94IGFuZCB0aGVyZSdzIGEgc3BlY2lmaWMgcHJvcGVydHkgdGhhdCBzaG91bGQgYmUgdXNlZCBmb3IgdGhlIHZhbHVlIHRoZSBpdGVtcy4gKi9cblx0QElucHV0KClcblx0Z2V0IHZhbHVlTWVtYmVyKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC52YWx1ZU1lbWJlciA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdmFsdWVNZW1iZXIodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC52YWx1ZU1lbWJlciA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSB2ZXJ0aWNhbCBzY3JvbGwgYmFyLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdmVydGljYWxTY3JvbGxCYXJWaXNpYmlsaXR5KCk6IFZlcnRpY2FsU2Nyb2xsQmFyVmlzaWJpbGl0eSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC52ZXJ0aWNhbFNjcm9sbEJhclZpc2liaWxpdHkgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHZlcnRpY2FsU2Nyb2xsQmFyVmlzaWJpbGl0eSh2YWx1ZTogVmVydGljYWxTY3JvbGxCYXJWaXNpYmlsaXR5KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnZlcnRpY2FsU2Nyb2xsQmFyVmlzaWJpbGl0eSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHdlYXRoZXIgb3Igbm90IFZpcnR1YWxpemF0aW9uIGlzIHVzZWQuIFZpcnR1YWxpemF0aW9uIGFsbG93cyBhIGh1Z2UgYW1vdW50IG9mIGl0ZW1zIHRvIGJlIGxvYWRlZCB0byB0aGUgZHJvcCBkb3duIHdoaWxlIHByZXNlcnZpbmcgdGhlIHBlcmZvcm1hbmNlLiBGb3IgZXhhbXBsZSBhIG1pbGlvbiBpdGVtcyBjYW4gYmUgbG9hZGVkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdmlydHVhbGl6ZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC52aXJ0dWFsaXplZCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdmlydHVhbGl6ZWQodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudmlydHVhbGl6ZWQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB1c2VyIGNsaWNrcyBvbiB0aGUgYWN0aW9uIGJ1dHRvbi4gVGhlIGFjdGlvbiBidXR0b24gaXMgb25seSB2aXNpYmxlIHdoZW4gZHJvcERvd25PcGVuTW9kZSBpcyBzZXQgdG8gJ2Ryb3BEb3duYnV0dG9uJy5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvbkFjdGlvbkJ1dHRvbkNsaWNrOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgc2VsZWN0aW9uIGlzIGNoYW5nZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0YWRkZWRJdGVtcywgXHRkaXNhYmxlZCwgXHRpbmRleCwgXHRsYWJlbCwgXHRyZW1vdmVkSXRlbXMsIFx0c2VsZWN0ZWQsIFx0dmFsdWUpXG5cdCogICBhZGRlZEl0ZW1zIC0gQW4gYXJyYXkgb2YgTGlzdCBpdGVtcyB0aGF0IGhhdmUgYmVlbiBzZWxlY3RlZC5cblx0KiAgIGRpc2FibGVkIC0gQSBmbGFnIGluZGljYXRpbmcgd2hldGhlciBvciBub3QgdGhlIGl0ZW0gdGhhdCBjYXVzZWQgdGhlIGNoYW5nZSBldmVudCBpcyBkaXNhYmxlZC5cblx0KiAgIGluZGV4IC0gVGhlIGluZGV4IG9mIHRoZSBMaXN0IGl0ZW0gdGhhdCB0cmlnZ2VyZWQgdGhlIGV2ZW50LlxuXHQqICAgbGFiZWwgLSBUaGUgbGFiZWwgb2YgdGhlIExpc3QgaXRlbSB0aGF0IHRyaWdnZXJlZCB0aGUgZXZlbnQuXG5cdCogICByZW1vdmVkSXRlbXMgLSBBbiBhcnJheSBvZiBMaXN0IGl0ZW1zIHRoYXQgaGF2ZSBiZWVuIHVuc2VsZWN0ZWQgYmVmb3JlIHRoZSBldmVudCB3YXMgZmlyZWQuXG5cdCogICBzZWxlY3RlZCAtIFRoZSBzZWxlY3RlZCBzdGF0ZSBvZiB0aGUgTGlzdCBpdGVtIHRoYXQgdHJpZ2dlcmVkIHRoZSBldmVudC4gSWYgYW4gaXRlbSB3YXMgc2VsZWN0ZWQgdGhlIHZhbHVlIHdpbGwgYmUgdHJ1ZSBhbmQgdmljZSB2ZXJzYS5cblx0KiAgIHZhbHVlIC0gVGhlIHZhbHVlIG9mIHRoZSBMaXN0IGl0ZW0gdGhhdCB0cmlnZ2VyZWQgdGhlIGV2ZW50LlxuXHQqL1xuXHRAT3V0cHV0KCkgb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBkcm9wIGRvd24gbGlzdCBpcyBjbG9zZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHQqL1xuXHRAT3V0cHV0KCkgb25DbG9zZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGRyb3AgZG93biBsaXN0IGlzIGFib3V0IHRvIGJlIGNsb3NlZC4gVGhpcyBldmVudCBhbGxvd3MgdG8gY2FuY2VsIHRoZSBjbG9zaW5nIG9wZXJhdGlvbiBjYWxsaW5nIGV2ZW50LnByZXZlbnREZWZhdWx0KCkgaW4gdGhlIGV2ZW50IGhhbmRsZXIgZnVuY3Rpb24uXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHQqL1xuXHRAT3V0cHV0KCkgb25DbG9zaW5nOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB1c2VyIGNsaWNrcyBvbiB0aGUgZHJvcCBkb3duIGJ1dHRvbi5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvbkRyb3BEb3duQnV0dG9uQ2xpY2s6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGFuIGl0ZW0gaXMgY2xpY2tlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRkaXNhYmxlZCwgXHRpbmRleCwgXHRsYWJlbCwgXHRzZWxlY3RlZCwgXHR2YWx1ZSlcblx0KiAgIGRpc2FibGVkIC0gSW5kaWNhdGVzIHdoZXRoZXIgdGhlIExpc3QgaXRlbSB0aGF0IHdhcyBjbGlja2VkIGlzIGRpc2FibGVkIG9yIG5vdC5cblx0KiAgIGluZGV4IC0gSW5kaWNhdGVzIHRoZSBpbmRleCBvZiB0aGUgTGlzdCBpdGVtIHRoYXQgd2FzIGNsaWNrZWQuXG5cdCogICBsYWJlbCAtIFRoZSBsYWJlbCBvZiB0aGUgTGlzdCBpdGVtIHRoYXQgd2FzIGNsaWNrZWQuXG5cdCogICBzZWxlY3RlZCAtIEluZGljYXRlcyB3aGV0aGVyIHRoZSBMaXN0IGl0ZW0gdGhhdCB3YXMgY2xpY2tlZCBpcyBzZWxlY3RlZCBvciBub3QuXG5cdCogICB2YWx1ZSAtIFRoZSB2YWx1ZSBvZiB0aGUgTGlzdCBpdGVtIHRoYXQgd2FzIGNsaWNrZWQuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkl0ZW1DbGljazogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGRyb3AgZG93biBsaXN0IGlzIG9wZW5lZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvbk9wZW46IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBkcm9wIGRvd24gbGlzdCBpcyBhYm91dCB0byBiZSBvcGVuZWQuIFRoaXMgZXZlbnQgYWxsb3dzIHRvIGNhbmNlbCB0aGUgb3BlbmluZyBvcGVyYXRpb24gY2FsbGluZyBldmVudC5wcmV2ZW50RGVmYXVsdCgpIGluIHRoZSBldmVudCBoYW5kbGVyIGZ1bmN0aW9uLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Ki9cblx0QE91dHB1dCgpIG9uT3BlbmluZzogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdXNlciBzdGFydHMgcmVzaXppbmcgdGhlIGRyb3AgZG93bi5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRwb3NpdGlvbilcblx0KiAgIHBvc2l0aW9uIC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGN1cnJlbnQgbGVmdCBhbmQgdG9wIHBvc2l0aW9ucyBvZiB0aGUgZHJvcCBkb3duLlxuXHQqL1xuXHRAT3V0cHV0KCkgb25SZXNpemVTdGFydDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHJlc2l6aW5nIG9mIHRoZSBkcm9wIGRvd24gaXMgZmluaXNoZWQuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0cG9zaXRpb24pXG5cdCogICBwb3NpdGlvbiAtIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBjdXJyZW50IGxlZnQgYW5kIHRvcCBwb3NpdGlvbnMgb2YgdGhlIGRyb3AgZG93bi5cblx0Ki9cblx0QE91dHB1dCgpIG9uUmVzaXplRW5kOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgdXNlciBzY3JvbGxzIHRvIHRoZSBlbmQgb2YgdGhlIGRyb3BEb3duIGxpc3QuXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHQqL1xuXHRAT3V0cHV0KCkgb25TY3JvbGxCb3R0b21SZWFjaGVkOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgdXNlciBzY3JvbGxzIHRvIHRoZSBzdGFydCBvZiB0aGUgZHJvcERvd24gbGlzdC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvblNjcm9sbFRvcFJlYWNoZWQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBcHBlbmRzIGEgTGlzdEl0ZW0gdG8gdGhlIGVuZCBvZiB0aGUgbGlzdCBvZiBpdGVtcyBpbnNpZGUgZWxlbWVudC4gXG5cdCogQHBhcmFtIHtOb2RlfSBub2RlLiBBIExpc3RJdGVtIGVsZW1lbnQgdGhhdCBzaG91bGQgYmUgYWRkZWQgdG8gdGhlIHJlc3Qgb2YgdGhlIGl0ZW1zIGFzIHRoZSBsYXN0IGl0ZW0uXG5cdCogQHJldHVybnMge05vZGV9XG4gICovXG5cdHB1YmxpYyBhc3luYyBhcHBlbmRDaGlsZChub2RlKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVtb3ZlcyBhbGwgaXRlbXMgZnJvbSB0aGUgZHJvcCBkb3duIGxpc3QuIFxuXHQqL1xuICAgIHB1YmxpYyBjbGVhckl0ZW1zKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jbGVhckl0ZW1zKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xlYXJJdGVtcygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBVbnNlbGVjdHMgYWxsIGl0ZW1zLiBcblx0Ki9cbiAgICBwdWJsaWMgY2xlYXJTZWxlY3Rpb24oKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xlYXJTZWxlY3Rpb24oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQ2xvc2VzIHRoZSBkcm9wRG93biBsaXN0LiBcblx0Ki9cbiAgICBwdWJsaWMgY2xvc2UoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xvc2UoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRW5zdXJlcyB0aGUgZGVzaXJlZCBpdGVtIGlzIHZpc2libGUgYnkgc2Nyb2xsaW5nIHRvIGl0LiBcblx0KiBAcGFyYW0ge0hUTUxFbGVtZW50IHwgc3RyaW5nfSBpdGVtLiBBIGxpc3QgaXRlbSBvciB2YWx1ZSBvZiB0aGUgZGVzaXJlZCBpdGVtIHRvIGJlIHZpc2libGUuXG5cdCovXG4gICAgcHVibGljIGVuc3VyZVZpc2libGUoaXRlbTogSFRNTEVsZW1lbnQgfCBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZW5zdXJlVmlzaWJsZShpdGVtKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5lbnN1cmVWaXNpYmxlKGl0ZW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIGFuIGl0ZW0gaW5zdGFuY2UgZnJvbSB0aGUgZHJvcERvd24gbGlzdC4gXG5cdCogQHBhcmFtIHtzdHJpbmd9IHZhbHVlLiBUaGUgdmFsdWUgb2YgYW4gaXRlbSBmcm9tIHRoZSBkcm9wIGRvd24gbGlzdC5cblx0KiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG4gICovXG5cdHB1YmxpYyBhc3luYyBnZXRJdGVtKHZhbHVlKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldEl0ZW0odmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSW5zZXJ0cyBhIG5ldyBpdGVtIGF0IGEgc3BlY2lmaWVkIHBvc2l0aW9uLiBcblx0KiBAcGFyYW0ge251bWJlcn0gcG9zaXRpb24uIFRoZSBwb3NpdGlvbiB3aGVyZSB0aGUgaXRlbSBtdXN0IGJlIGluc2VydGVkLlxuXHQqIEBwYXJhbSB7YW55fSB2YWx1ZS4gVGhlIHZhbHVlIG9mIHRoZSBuZXcgaXRlbS5cblx0Ki9cbiAgICBwdWJsaWMgaW5zZXJ0KHBvc2l0aW9uOiBudW1iZXIsIHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5zZXJ0KHBvc2l0aW9uLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5zZXJ0KHBvc2l0aW9uLCB2YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEluc2VydHMgYSBuZXcgTGlzdEl0ZW0gYmVmb3JlIGFub3RoZXIgaW4gdGhlIGxpc3QuIFxuXHQqIEBwYXJhbSB7Tm9kZX0gbm9kZS4gQSBMaXN0SXRlbSBlbGVtZW50IHRoYXQgc2hvdWxkIGJlIGFkZGVkIGJlZm9yZSB0aGUgcmVmZXJlbmNlSXRlbSBpbiB0aGUgbGlzdC5cblx0KiBAcGFyYW0ge05vZGUgfCBudWxsfSByZWZlcmVuY2VOb2RlLiBBIExpc3RJdGVtIGVsZW1lbnQgdGhhdCBhY3RzIGFzIHRoZSByZWZlcmVuY2UgaXRlbSBiZWZvcmUgd2hpY2ggYSBuZXcgaXRlbSBpcyBhYm91dCB0byBiZSBpbnNlcnRlZC4gVGhlIHJlZmVyZW5jZU5vZGUgbXVzdCBiZSBpbiB0aGUgc2FtZSBsaXN0IGFzIHRoZSBub2RlLlxuXHQqIEByZXR1cm5zIHtOb2RlfVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgaW5zZXJ0QmVmb3JlKG5vZGUsIHJlZmVyZW5jZU5vZGUpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKG5vZGUsIHJlZmVyZW5jZU5vZGUpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gT3BlbnMgdGhlIGRyb3BEb3duIGxpc3QuIFxuXHQqL1xuICAgIHB1YmxpYyBvcGVuKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5vcGVuKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQub3BlbigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBSZW1vdmVzIGFuIGl0ZW0gYXQgYSBzcGVjaWZpZWQgcG9zaXRpb24uIFxuXHQqIEBwYXJhbSB7bnVtYmVyfSBwb3NpdGlvbi4gVGhlIHBvc2l0aW9uIG9mIHRoZSByZW1vdmVkIGl0ZW0uXG5cdCovXG4gICAgcHVibGljIHJlbW92ZUF0KHBvc2l0aW9uOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVtb3ZlQXQocG9zaXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlbW92ZUF0KHBvc2l0aW9uKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVtb3ZlcyBhIExpc3RJdGVtIGZyb20gdGhlIGxpc3Qgb2YgaXRlbXMgaW5zaWRlIGVsZW1lbnQuIFxuXHQqIEBwYXJhbSB7Tm9kZX0gbm9kZS4gQSBMaXN0SXRlbSBlbGVtZW50IHRoYXQgaXMgcGFydCBvZiB0aGUgbGlzdCBvZiBpdGVtcyBpbnNpZGUgdGhlIGVsZW1lbnQuXG5cdCogQHJldHVybnMge05vZGV9XG4gICovXG5cdHB1YmxpYyBhc3luYyByZW1vdmVDaGlsZChub2RlKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBnZXRSZXN1bHRPblJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uYXRpdmVFbGVtZW50LnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2VsZWN0cyBhbiBpdGVtIGZyb20gdGhlIGRyb3BEb3duIGxpc3QuICBcblx0KiBAcGFyYW0ge3N0cmluZyB8IEhUTUxFbGVtZW50fSBpdGVtLiBBIHN0cmluZywgcmVwcmVzZW50aW5nIHRoZSB2YWx1ZSBvZiB0aGUgaXRlbSBvciBhbiBIVE1MIEVsZW1lbnQgcmVmZXJlbmNpbmcgYW4gaXRlbSBmcm9tIHRoZSBsaXN0XG5cdCovXG4gICAgcHVibGljIHNlbGVjdChpdGVtOiBzdHJpbmcgfCBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zZWxlY3QoaXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0KGl0ZW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBVbnNlbGVjdHMgYW4gaXRlbSBmcm9tIHRoZSBkcm9wRG93biBsaXN0LiAgXG5cdCogQHBhcmFtIHtzdHJpbmcgfCBIVE1MRWxlbWVudH0gaXRlbS4gQSBzdHJpbmcsIHJlcHJlc2VudGluZyB0aGUgdmFsdWUgb2YgdGhlIGl0ZW0gb3IgYW4gSFRNTCBFbGVtZW50IHJlZmVyZW5jaW5nIGFuIGl0ZW0gZnJvbSB0aGUgbGlzdFxuXHQqL1xuICAgIHB1YmxpYyB1bnNlbGVjdChpdGVtOiBzdHJpbmcgfCBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC51bnNlbGVjdChpdGVtKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC51bnNlbGVjdChpdGVtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVXBkYXRlcyBhbiBpdGVtIGZyb20gdGhlIGRyb3BEb3duIGxpc3QuIFxuXHQqIEBwYXJhbSB7bnVtYmVyfSBwb3NpdGlvbi4gVGhlIHBvc2l0aW9uIHdoZXJlIHRoZSBpdGVtIG11c3QgYmUgdXBkYXRlZC5cblx0KiBAcGFyYW0ge2FueX0gdmFsdWUuIFRoZSB2YWx1ZSBvZiB0aGUgdXBkYXRlZCBpdGVtLlxuXHQqL1xuICAgIHB1YmxpYyB1cGRhdGUocG9zaXRpb246IG51bWJlciwgdmFsdWU6IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC51cGRhdGUocG9zaXRpb24sIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC51cGRhdGUocG9zaXRpb24sIHZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cblx0Z2V0IGlzUmVuZGVyZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkIDogZmFsc2U7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0fVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cbiAgICAgIHRoYXQub25DcmVhdGUuZW1pdCh0aGF0Lm5hdGl2ZUVsZW1lbnQpO1xuXG5cdFx0U21hcnQuUmVuZGVyKCk7XG5cblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHsgdGhhdC5vblJlYWR5LmVtaXQodGhhdC5uYXRpdmVFbGVtZW50KTsgfSk7XG5cdFx0dGhpcy5saXN0ZW4oKTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMudW5saXN0ZW4oKTtcblx0fVxuXG5cdF9pbml0aWFsQ2hhbmdlID0gdHJ1ZTsgXG5cblx0Z2V0IG5nVmFsdWUoKTogYW55IHtcblx0XHRpZiAoIXRoaXMubmF0aXZlRWxlbWVudCkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuc2VsZWN0ZWRWYWx1ZXMgJiYgdGhpcy5zZWxlY3RlZFZhbHVlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRjb25zdCB2YWx1ZSA9IHRoaXMuc2VsZWN0ZWRWYWx1ZXMubGVuZ3RoID09PSAxID8gdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdGVkVmFsdWVzWzBdIDogdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdGVkVmFsdWVzO1xuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG5cdFx0Y29uc3QgdmFsdWUgPSB0aGlzLm5hdGl2ZUVsZW1lbnQudmFsdWU7XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cblx0c2V0IG5nVmFsdWUodmFsdWU6IGFueSkge1xuXHRcdGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQpIHtcblx0XHQgICAgdGhpcy53cml0ZVZhbHVlKHZhbHVlKTtcblx0XHR9XG5cdH1cblxuXHR3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRWYWx1ZSA9IHZhbHVlID09IG51bGwgPyAnJyA6IHZhbHVlO1xuXG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICB0aGF0Lm5hdGl2ZUVsZW1lbnQuJC5saXN0Qm94LmlzSW5pdGlhbGl6ZWQgPSB0aGF0Ll9pbml0aWFsQ2hhbmdlID8gZmFsc2UgOiB0cnVlO1xuXHRcdFx0dGhhdC5jbGVhclNlbGVjdGlvbigpO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobm9ybWFsaXplZFZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlLmZvckVhY2goKGN1cnJlbnRWYWx1ZTogYW55KSA9PiB0aGlzLnNlbGVjdChjdXJyZW50VmFsdWUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuc2VsZWN0KG5vcm1hbGl6ZWRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhhdC5uYXRpdmVFbGVtZW50LiQubGlzdEJveC5pc0luaXRpYWxpemVkID0gdHJ1ZTtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5fYXBwbHlTZWxlY3Rpb24oKTtcblx0XHRcdGlmICh0aGF0Ll9pbml0aWFsQ2hhbmdlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgaWYgKHRoYXQuc2VsZWN0ZWRWYWx1ZXMgJiYgdGhhdC5zZWxlY3RlZFZhbHVlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuX29uQ2hhbmdlKHRoYXQuc2VsZWN0ZWRWYWx1ZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5fb25DaGFuZ2UoKHRoYXQuc2VsZWN0ZWRWYWx1ZXMgJiYgdGhhdC5zZWxlY3RlZFZhbHVlcy5sZW5ndGggPiAwKSA/IHRoYXQuc2VsZWN0ZWRWYWx1ZXNbMF0gOiBudWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cdFx0fSk7XG5cdH1cblxuXHRyZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLl9vbkNoYW5nZSA9IGZuO1xuXHR9XG5cblx0cmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuXHRcdHRoaXMuX29uVG91Y2hlZCA9IGZuO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXHRcdGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQgJiYgdGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcblx0XHRcdGZvciAoY29uc3QgcHJvcE5hbWUgaW4gY2hhbmdlcykge1xuXHRcdFx0XHRpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcblx0XHRcdFx0XHR0aGlzLm5hdGl2ZUVsZW1lbnRbcHJvcE5hbWVdID0gY2hhbmdlc1twcm9wTmFtZV0uY3VycmVudFZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBZGQgZXZlbnQgbGlzdGVuZXJzLiAqL1xuXHRwcml2YXRlIGxpc3RlbigpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydhY3Rpb25CdXR0b25DbGlja0hhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkFjdGlvbkJ1dHRvbkNsaWNrLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2FjdGlvbkJ1dHRvbkNsaWNrJywgdGhhdC5ldmVudEhhbmRsZXJzWydhY3Rpb25CdXR0b25DbGlja0hhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5nZUhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNoYW5nZS5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5nZUhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2Nsb3NlSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ2xvc2UuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2Nsb3NlSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY2xvc2luZ0hhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNsb3NpbmcuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2luZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY2xvc2luZ0hhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2Ryb3BEb3duQnV0dG9uQ2xpY2tIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Ecm9wRG93bkJ1dHRvbkNsaWNrLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3BEb3duQnV0dG9uQ2xpY2snLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2Ryb3BEb3duQnV0dG9uQ2xpY2tIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydpdGVtQ2xpY2tIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25JdGVtQ2xpY2suZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaXRlbUNsaWNrJywgdGhhdC5ldmVudEhhbmRsZXJzWydpdGVtQ2xpY2tIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydvcGVuSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uT3Blbi5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdvcGVuJywgdGhhdC5ldmVudEhhbmRsZXJzWydvcGVuSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snb3BlbmluZ0hhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbk9wZW5pbmcuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignb3BlbmluZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snb3BlbmluZ0hhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jlc2l6ZVN0YXJ0SGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uUmVzaXplU3RhcnQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplU3RhcnQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Jlc2l6ZVN0YXJ0SGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1sncmVzaXplRW5kSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uUmVzaXplRW5kLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZUVuZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1sncmVzaXplRW5kSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snc2Nyb2xsQm90dG9tUmVhY2hlZEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblNjcm9sbEJvdHRvbVJlYWNoZWQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsQm90dG9tUmVhY2hlZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snc2Nyb2xsQm90dG9tUmVhY2hlZEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3Njcm9sbFRvcFJlYWNoZWRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25TY3JvbGxUb3BSZWFjaGVkLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbFRvcFJlYWNoZWQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3Njcm9sbFRvcFJlYWNoZWRIYW5kbGVyJ10pO1xuXG5cbiAgICAgICAgdGhhdC5ldmVudEhhbmRsZXJzWydjaGFuZ2VNb2RlbEhhbmRsZXInXSA9IChldmVudDogRXZlbnQpID0+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoYXQuX2luaXRpYWxDaGFuZ2UgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoYXQuX29uQ2hhbmdlKHRoYXQubmF0aXZlRWxlbWVudC5zZWxlY3RlZFZhbHVlcy5sZW5ndGggPiAwID8gKHRoYXQubmF0aXZlRWxlbWVudC5zZWxlY3RlZFZhbHVlcy5sZW5ndGggPiAxID8gdGhhdC5uYXRpdmVFbGVtZW50LnNlbGVjdGVkVmFsdWVzIDogdGhhdC5uYXRpdmVFbGVtZW50LnNlbGVjdGVkVmFsdWVzWzBdKSA6IG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIHRoYXQuZXZlbnRIYW5kbGVyc1snYmx1ck1vZGVsSGFuZGxlciddID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgdGhhdC5fb25Ub3VjaGVkKCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoYXQubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoYXQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpKSB7XG4gICAgICAgICAgICAgICAgdGhhdC5ldmVudEhhbmRsZXJzWydrZXl1cE1vZGVsSGFuZGxlciddID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5nZU1vZGVsSGFuZGxlciddKGV2ZW50KTsgfSwgNTApO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICB0aGF0Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoYXQuZXZlbnRIYW5kbGVyc1sna2V5dXBNb2RlbEhhbmRsZXInXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5nZU1vZGVsSGFuZGxlciddKTtcblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoYXQuZXZlbnRIYW5kbGVyc1snYmx1ck1vZGVsSGFuZGxlciddKTtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gUmVtb3ZlIGV2ZW50IGxpc3RlbmVycy4gKi9cblx0cHJpdmF0ZSB1bmxpc3RlbigpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snYWN0aW9uQnV0dG9uQ2xpY2tIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdhY3Rpb25CdXR0b25DbGljaycsIHRoYXQuZXZlbnRIYW5kbGVyc1snYWN0aW9uQnV0dG9uQ2xpY2tIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5nZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snY2hhbmdlSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjbG9zZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgdGhhdC5ldmVudEhhbmRsZXJzWydjbG9zZUhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY2xvc2luZ0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Nsb3NpbmcnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2Nsb3NpbmdIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2Ryb3BEb3duQnV0dG9uQ2xpY2tIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wRG93bkJ1dHRvbkNsaWNrJywgdGhhdC5ldmVudEhhbmRsZXJzWydkcm9wRG93bkJ1dHRvbkNsaWNrSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydpdGVtQ2xpY2tIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdpdGVtQ2xpY2snLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2l0ZW1DbGlja0hhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snb3BlbkhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ29wZW4nLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ29wZW5IYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ29wZW5pbmdIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdvcGVuaW5nJywgdGhhdC5ldmVudEhhbmRsZXJzWydvcGVuaW5nSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydyZXNpemVTdGFydEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZVN0YXJ0JywgdGhhdC5ldmVudEhhbmRsZXJzWydyZXNpemVTdGFydEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1sncmVzaXplRW5kSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplRW5kJywgdGhhdC5ldmVudEhhbmRsZXJzWydyZXNpemVFbmRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3Njcm9sbEJvdHRvbVJlYWNoZWRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGxCb3R0b21SZWFjaGVkJywgdGhhdC5ldmVudEhhbmRsZXJzWydzY3JvbGxCb3R0b21SZWFjaGVkSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydzY3JvbGxUb3BSZWFjaGVkSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsVG9wUmVhY2hlZCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snc2Nyb2xsVG9wUmVhY2hlZEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snY2hhbmdlTW9kZWxIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5nZU1vZGVsSGFuZGxlciddKTtcbiAgICAgICAgICAgIGlmICh0aGF0Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKSkge1xuICAgICAgICAgICAgICAgICAgdGhhdC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2tleXVwTW9kZWxIYW5kbGVyJ10pO1xuICAgICAgICAgICAgfVxuXHRcdH1cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydibHVyTW9kZWxIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdibHVyJywgdGhhdC5ldmVudEhhbmRsZXJzWydibHVyTW9kZWxIYW5kbGVyJ10pO1xuXHRcdH1cblx0fVxufVxuIl19