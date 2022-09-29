
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.filterbuilder';

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

var FilterBuilderComponent = /** @class */ (function (_super) {
    __extends(FilterBuilderComponent, _super);
    function FilterBuilderComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        /** @description This event is triggered when the element's value is changed.
        *  @param event. The custom event. 	*/
        _this.onChange = new EventEmitter();
        /** @description This event is triggered when an editor is closed.
        *  @param event. The custom event. 	*/
        _this.onEditorClose = new EventEmitter();
        /** @description This event is triggered when an editor starts to close.
        *  @param event. The custom event. 	*/
        _this.onEditorClosing = new EventEmitter();
        /** @description This event is triggered when an editor is opened.
        *  @param event. The custom event. 	*/
        _this.onEditorOpen = new EventEmitter();
        /** @description This event is triggered when an editor starts to open.
        *  @param event. The custom event. 	*/
        _this.onEditorOpening = new EventEmitter();
        /** @description This event is triggered when some of the filterbuilder's building blocks is clicked.
        *  @param event. The custom event. 	*/
        _this.onItemClick = new EventEmitter();
        /** @description This event is triggered when the built-in menu is opened. If the disableContextMenu property is set to true this event is not fired.
        *  @param event. The custom event. 	*/
        _this.onOpen = new EventEmitter();
        /** @description This event is triggered when the built-in menu starts to open. If the disableContextMenu property is set to true this event is not fired.
        *  @param event. The custom event. 	*/
        _this.onOpening = new EventEmitter();
        /** @description This event is triggered when the built-in menu is closed. If the disableContextMenu property is set to true this event is not fired.
        *  @param event. The custom event. 	*/
        _this.onClose = new EventEmitter();
        /** @description This event is triggered when the built-in menu  starts to close. If the disableContextMenu property is set to true this event is not fired.
        *  @param event. The custom event. 	*/
        _this.onClosing = new EventEmitter();
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    FilterBuilderComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('smart-filter-builder');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(FilterBuilderComponent.prototype, "animation", {
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
    Object.defineProperty(FilterBuilderComponent.prototype, "customOperations", {
        /** @description Adds more operations, that can be used in the filter bilder's conditions structure. */
        get: function () {
            return this.nativeElement ? this.nativeElement.customOperations : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.customOperations = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterBuilderComponent.prototype, "disableContextMenu", {
        /** @description Enables or disables the context menu. */
        get: function () {
            return this.nativeElement ? this.nativeElement.disableContextMenu : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disableContextMenu = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterBuilderComponent.prototype, "disabled", {
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
    Object.defineProperty(FilterBuilderComponent.prototype, "fields", {
        /** @description Array with filtered fields and their settings. */
        get: function () {
            return this.nativeElement ? this.nativeElement.fields : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.fields = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterBuilderComponent.prototype, "formatStringDate", {
        /** @description Sets or gets the format string of the editor of fields with type 'date'. */
        get: function () {
            return this.nativeElement ? this.nativeElement.formatStringDate : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.formatStringDate = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterBuilderComponent.prototype, "formatStringDateTime", {
        /** @description Sets or gets the format string of the editor of fields with type 'datetime'. */
        get: function () {
            return this.nativeElement ? this.nativeElement.formatStringDateTime : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.formatStringDateTime = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterBuilderComponent.prototype, "hint", {
        /** @description Sets hint in form of popup message. */
        get: function () {
            return this.nativeElement ? this.nativeElement.hint : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.hint = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterBuilderComponent.prototype, "icons", {
        /** @description Defines icon's representatino as characters. */
        get: function () {
            return this.nativeElement ? this.nativeElement.icons : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.icons = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterBuilderComponent.prototype, "locale", {
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
    Object.defineProperty(FilterBuilderComponent.prototype, "localizeFormatFunction", {
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
    Object.defineProperty(FilterBuilderComponent.prototype, "maxConditions", {
        /** @description Defines maximum number of allowed conditions in the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.maxConditions : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.maxConditions = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterBuilderComponent.prototype, "maxConditionsPerGroup", {
        /** @description Defines maximum number of allowed conditions in group. */
        get: function () {
            return this.nativeElement ? this.nativeElement.maxConditionsPerGroup : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.maxConditionsPerGroup = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterBuilderComponent.prototype, "maxLevel", {
        /** @description Defines maximum level of grouping in the FilterBuilder. */
        get: function () {
            return this.nativeElement ? this.nativeElement.maxLevel : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.maxLevel = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterBuilderComponent.prototype, "messages", {
        /** @description Defines field names of the filtered element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.messages : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.messages = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterBuilderComponent.prototype, "readonly", {
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
    Object.defineProperty(FilterBuilderComponent.prototype, "restrictedMode", {
        /** @description In restrictedMode set to true, adding of new groups and groups editing by user interaction are denied. */
        get: function () {
            return this.nativeElement ? this.nativeElement.restrictedMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.restrictedMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterBuilderComponent.prototype, "showIcons", {
        /** @description Enables or disables the display of the icons. */
        get: function () {
            return this.nativeElement ? this.nativeElement.showIcons : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.showIcons = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterBuilderComponent.prototype, "theme", {
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
    Object.defineProperty(FilterBuilderComponent.prototype, "unfocusable", {
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
    Object.defineProperty(FilterBuilderComponent.prototype, "value", {
        /** @description The value is represented by multidimensional array. The array contains group operators and conditions. Each group can contain nested structures at multiple levels. */
        get: function () {
            return this.nativeElement ? this.nativeElement.value : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.value = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterBuilderComponent.prototype, "valueFormatFunction", {
        /** @description Callback used to format the content of the value fields. */
        get: function () {
            return this.nativeElement ? this.nativeElement.valueFormatFunction : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.valueFormatFunction = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterBuilderComponent.prototype, "valuePlaceholder", {
        /** @description Sets the placeholder text used in the condition's value box in case the value is not set. */
        get: function () {
            return this.nativeElement ? this.nativeElement.valuePlaceholder : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.valuePlaceholder = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /** @description Adds new condition in particular group.
    * @param {string | HTMLElement} parentGroup. A string, representing the id of the item or an HTML Element referencing this condition.
    * @param {any[]} data. An array, representing condition. Condition's element's role is related to their position in the condition's array. At index 0 - field name, index 1 - condition's opertor, index 2 - condition's value.
    */
    FilterBuilderComponent.prototype.addCondition = function (parentGroup, data) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.addCondition(parentGroup, data);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.addCondition(parentGroup, data);
            });
        }
    };
    /** @description Adds new group in particular parent group.
    * @param {string | HTMLElement} parentGroup. A string, representing the id of the item or an HTML Element referencing this group.
    * @param {string} data. A string, representing the group operator.
    */
    FilterBuilderComponent.prototype.addGroup = function (parentGroup, data) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.addGroup(parentGroup, data);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.addGroup(parentGroup, data);
            });
        }
    };
    /** @description Removes condition.
    * @param {string | HTMLElement} item. A string, representing the id of the item or an HTML Element referencing this condition.
    */
    FilterBuilderComponent.prototype.removeCondition = function (item) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeCondition(item);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.removeCondition(item);
            });
        }
    };
    /** @description Deletes group and all of  it's children
    * @param {string | HTMLElement} item. A string, representing the id of the item or an HTML Element referencing this group.
    */
    FilterBuilderComponent.prototype.removeGroup = function (item) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeGroup(item);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.removeGroup(item);
            });
        }
    };
    /** @description Returns a string representation of the filter builder's value.
    * @param {boolean} useLabels?. Controls the way of string representation. In mode without labels the value object is stringified only.
    * @returns {string}
  */
    FilterBuilderComponent.prototype.toString = function (useLabels) {
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.toString(useLabels);
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
    /** @description Updates condition.
    * @param {string | HTMLElement} item. A string, representing the id of the item or an HTML Element referencing targeted condition.
    * @param {any[]} data. An array, representing condition. Condition's element's role is related to their position in the condition's array. At index 0 - field name, index 1 - condition's opertor, index 2 - condition's value.
    */
    FilterBuilderComponent.prototype.updateCondition = function (item, data) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.updateCondition(item, data);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.updateCondition(item, data);
            });
        }
    };
    /** @description Updates group
    * @param {string | HTMLElement} item. A string, representing the id of the item or an HTML Element referencing this group.
    * @param {string} data. A string, representing the group operator.
    */
    FilterBuilderComponent.prototype.updateGroup = function (item, data) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.updateGroup(item, data);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.updateGroup(item, data);
            });
        }
    };
    Object.defineProperty(FilterBuilderComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    FilterBuilderComponent.prototype.ngOnInit = function () {
    };
    FilterBuilderComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        this.listen();
    };
    FilterBuilderComponent.prototype.ngOnDestroy = function () {
        this.unlisten();
    };
    FilterBuilderComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    /** @description Add event listeners. */
    FilterBuilderComponent.prototype.listen = function () {
        var that = this;
        that.eventHandlers['changeHandler'] = function (event) { that.onChange.emit(event); };
        that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
        that.eventHandlers['editorCloseHandler'] = function (event) { that.onEditorClose.emit(event); };
        that.nativeElement.addEventListener('editorClose', that.eventHandlers['editorCloseHandler']);
        that.eventHandlers['editorClosingHandler'] = function (event) { that.onEditorClosing.emit(event); };
        that.nativeElement.addEventListener('editorClosing', that.eventHandlers['editorClosingHandler']);
        that.eventHandlers['editorOpenHandler'] = function (event) { that.onEditorOpen.emit(event); };
        that.nativeElement.addEventListener('editorOpen', that.eventHandlers['editorOpenHandler']);
        that.eventHandlers['editorOpeningHandler'] = function (event) { that.onEditorOpening.emit(event); };
        that.nativeElement.addEventListener('editorOpening', that.eventHandlers['editorOpeningHandler']);
        that.eventHandlers['itemClickHandler'] = function (event) { that.onItemClick.emit(event); };
        that.nativeElement.addEventListener('itemClick', that.eventHandlers['itemClickHandler']);
        that.eventHandlers['openHandler'] = function (event) { that.onOpen.emit(event); };
        that.nativeElement.addEventListener('open', that.eventHandlers['openHandler']);
        that.eventHandlers['openingHandler'] = function (event) { that.onOpening.emit(event); };
        that.nativeElement.addEventListener('opening', that.eventHandlers['openingHandler']);
        that.eventHandlers['closeHandler'] = function (event) { that.onClose.emit(event); };
        that.nativeElement.addEventListener('close', that.eventHandlers['closeHandler']);
        that.eventHandlers['closingHandler'] = function (event) { that.onClosing.emit(event); };
        that.nativeElement.addEventListener('closing', that.eventHandlers['closingHandler']);
    };
    /** @description Remove event listeners. */
    FilterBuilderComponent.prototype.unlisten = function () {
        var that = this;
        if (that.eventHandlers['changeHandler']) {
            that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
        }
        if (that.eventHandlers['editorCloseHandler']) {
            that.nativeElement.removeEventListener('editorClose', that.eventHandlers['editorCloseHandler']);
        }
        if (that.eventHandlers['editorClosingHandler']) {
            that.nativeElement.removeEventListener('editorClosing', that.eventHandlers['editorClosingHandler']);
        }
        if (that.eventHandlers['editorOpenHandler']) {
            that.nativeElement.removeEventListener('editorOpen', that.eventHandlers['editorOpenHandler']);
        }
        if (that.eventHandlers['editorOpeningHandler']) {
            that.nativeElement.removeEventListener('editorOpening', that.eventHandlers['editorOpeningHandler']);
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
        if (that.eventHandlers['closeHandler']) {
            that.nativeElement.removeEventListener('close', that.eventHandlers['closeHandler']);
        }
        if (that.eventHandlers['closingHandler']) {
            that.nativeElement.removeEventListener('closing', that.eventHandlers['closingHandler']);
        }
    };
    FilterBuilderComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], FilterBuilderComponent.prototype, "animation", null);
    __decorate([
        Input()
    ], FilterBuilderComponent.prototype, "customOperations", null);
    __decorate([
        Input()
    ], FilterBuilderComponent.prototype, "disableContextMenu", null);
    __decorate([
        Input()
    ], FilterBuilderComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], FilterBuilderComponent.prototype, "fields", null);
    __decorate([
        Input()
    ], FilterBuilderComponent.prototype, "formatStringDate", null);
    __decorate([
        Input()
    ], FilterBuilderComponent.prototype, "formatStringDateTime", null);
    __decorate([
        Input()
    ], FilterBuilderComponent.prototype, "hint", null);
    __decorate([
        Input()
    ], FilterBuilderComponent.prototype, "icons", null);
    __decorate([
        Input()
    ], FilterBuilderComponent.prototype, "locale", null);
    __decorate([
        Input()
    ], FilterBuilderComponent.prototype, "localizeFormatFunction", null);
    __decorate([
        Input()
    ], FilterBuilderComponent.prototype, "maxConditions", null);
    __decorate([
        Input()
    ], FilterBuilderComponent.prototype, "maxConditionsPerGroup", null);
    __decorate([
        Input()
    ], FilterBuilderComponent.prototype, "maxLevel", null);
    __decorate([
        Input()
    ], FilterBuilderComponent.prototype, "messages", null);
    __decorate([
        Input()
    ], FilterBuilderComponent.prototype, "readonly", null);
    __decorate([
        Input()
    ], FilterBuilderComponent.prototype, "restrictedMode", null);
    __decorate([
        Input()
    ], FilterBuilderComponent.prototype, "showIcons", null);
    __decorate([
        Input()
    ], FilterBuilderComponent.prototype, "theme", null);
    __decorate([
        Input()
    ], FilterBuilderComponent.prototype, "unfocusable", null);
    __decorate([
        Input()
    ], FilterBuilderComponent.prototype, "value", null);
    __decorate([
        Input()
    ], FilterBuilderComponent.prototype, "valueFormatFunction", null);
    __decorate([
        Input()
    ], FilterBuilderComponent.prototype, "valuePlaceholder", null);
    __decorate([
        Output()
    ], FilterBuilderComponent.prototype, "onChange", void 0);
    __decorate([
        Output()
    ], FilterBuilderComponent.prototype, "onEditorClose", void 0);
    __decorate([
        Output()
    ], FilterBuilderComponent.prototype, "onEditorClosing", void 0);
    __decorate([
        Output()
    ], FilterBuilderComponent.prototype, "onEditorOpen", void 0);
    __decorate([
        Output()
    ], FilterBuilderComponent.prototype, "onEditorOpening", void 0);
    __decorate([
        Output()
    ], FilterBuilderComponent.prototype, "onItemClick", void 0);
    __decorate([
        Output()
    ], FilterBuilderComponent.prototype, "onOpen", void 0);
    __decorate([
        Output()
    ], FilterBuilderComponent.prototype, "onOpening", void 0);
    __decorate([
        Output()
    ], FilterBuilderComponent.prototype, "onClose", void 0);
    __decorate([
        Output()
    ], FilterBuilderComponent.prototype, "onClosing", void 0);
    FilterBuilderComponent = __decorate([
        Directive({
            exportAs: 'smart-filter-builder', selector: 'smart-filter-builder, [smart-filter-builder]'
        })
    ], FilterBuilderComponent);
    return FilterBuilderComponent;
}(BaseElement));

var FilterBuilderModule = /** @class */ (function () {
    function FilterBuilderModule() {
    }
    FilterBuilderModule = __decorate([
        NgModule({
            declarations: [FilterBuilderComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            exports: [FilterBuilderComponent]
        })
    ], FilterBuilderModule);
    return FilterBuilderModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { FilterBuilderComponent, FilterBuilderModule, Smart, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-filterbuilder.js.map
