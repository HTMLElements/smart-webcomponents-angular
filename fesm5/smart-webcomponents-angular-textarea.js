
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.textarea';

import { __decorate, __extends } from 'tslib';
import { EventEmitter, Output, Input, forwardRef, ElementRef, Directive, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

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

var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return TextAreaComponent; }),
    multi: true
};
var TextAreaComponent = /** @class */ (function (_super) {
    __extends(TextAreaComponent, _super);
    function TextAreaComponent(ref) {
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
        /** @description This event is triggered when the selection is changed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	oldLabel, 	oldValue, 	value)
        *   label - The label of the new selected item.
        *   oldLabel - The label of the item that was previously selected before the event was triggered.
        *   oldValue - The value of the item that was previously selected before the event was triggered.
        *   value - The value of the new selected item.
        */
        _this.onChange = new EventEmitter();
        /** @description This event is triggered on each key up event of the TextArea, if the value is changed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
        *   oldValue - The previous value before it was changed.
        *   value - The new value.
        */
        _this.onChanging = new EventEmitter();
        _this._initialChange = true;
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    TextAreaComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('smart-text-area');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(TextAreaComponent.prototype, "animation", {
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
    Object.defineProperty(TextAreaComponent.prototype, "autoCompleteDelay", {
        /** @description Determines the delay before the drop down opens to show the matches from the auto complete operation. The delay is measured in miliseconds. */
        get: function () {
            return this.nativeElement ? this.nativeElement.autoCompleteDelay : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.autoCompleteDelay = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextAreaComponent.prototype, "dataSource", {
        /** @description Determines the data source that will be loaded to the Input. The dataSource can be an array of strings/numbers or objects where the attributes represent the properties of a List Item. For example label, value. It can also be a callback that returns an Array of items as previously described. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dataSource : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dataSource = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextAreaComponent.prototype, "disabled", {
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
    Object.defineProperty(TextAreaComponent.prototype, "dropDownButtonPosition", {
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
    Object.defineProperty(TextAreaComponent.prototype, "dropDownHeight", {
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
    Object.defineProperty(TextAreaComponent.prototype, "dropDownWidth", {
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
    Object.defineProperty(TextAreaComponent.prototype, "inputPurpose", {
        /** @description Sets the purpose of the input and what, if any, permission the user agent has to provide automated assistance in filling out the element's input when in a form, as well as guidance to the browser as to the type of information expected in the element. This value corresponds to the standard HTML autocomplete attribute and can be set to values such as 'on', 'name', 'organization', 'street-address', etc. */
        get: function () {
            return this.nativeElement ? this.nativeElement.inputPurpose : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.inputPurpose = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextAreaComponent.prototype, "items", {
        /** @description Determines the maximum number of matched items that should be visible inside the drop down as a result of a new autoComplete query. By default the maximum number of 8 items can be displayed inside the drop down. */
        get: function () {
            return this.nativeElement ? this.nativeElement.items : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.items = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextAreaComponent.prototype, "locale", {
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
    Object.defineProperty(TextAreaComponent.prototype, "localizeFormatFunction", {
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
    Object.defineProperty(TextAreaComponent.prototype, "messages", {
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
    Object.defineProperty(TextAreaComponent.prototype, "minLength", {
        /** @description Determines the minimum number of characters inside the input in order to trigger the autocomplete functionality that will open the drop down and show the matched items. */
        get: function () {
            return this.nativeElement ? this.nativeElement.minLength : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.minLength = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextAreaComponent.prototype, "name", {
        /** @description Sets or gets the name attribute for the element. Name is used when submiting data inside an HTML form. */
        get: function () {
            return this.nativeElement ? this.nativeElement.name : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.name = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextAreaComponent.prototype, "opened", {
        /** @description Determines whether the drop down is opened or not. */
        get: function () {
            return this.nativeElement ? this.nativeElement.opened : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.opened = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextAreaComponent.prototype, "placeholder", {
        /** @description Determines the placeholder of the input. */
        get: function () {
            return this.nativeElement ? this.nativeElement.placeholder : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.placeholder = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextAreaComponent.prototype, "query", {
        /** @description Sets or gets the query that is used to filter the items. Query is used by the autoComplete operation. Empty string means that all items from the data source will be displayed and no filter query is applied. */
        get: function () {
            return this.nativeElement ? this.nativeElement.query : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.query = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextAreaComponent.prototype, "queryMode", {
        /** @description Determines the auto complete query mode. This property also determines the matching algorithm for the autocomplete operation. */
        get: function () {
            return this.nativeElement ? this.nativeElement.queryMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.queryMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextAreaComponent.prototype, "readonly", {
        /** @description Determines whether ot not the user can enter text inside the input. if dropDownButtonPosition is set to 'left' or 'right' then readonly determines whether the element acts as a ComboBox or a DropDownList if a dataSource is provided. */
        get: function () {
            return this.nativeElement ? this.nativeElement.readonly : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.readonly = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextAreaComponent.prototype, "rightToLeft", {
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
    Object.defineProperty(TextAreaComponent.prototype, "sorted", {
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
    Object.defineProperty(TextAreaComponent.prototype, "sortDirection", {
        /** @description Determines the sorting algorithm - ascending(asc) or descending(desc) if sort is enabled. */
        get: function () {
            return this.nativeElement ? this.nativeElement.sortDirection : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.sortDirection = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextAreaComponent.prototype, "theme", {
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
    Object.defineProperty(TextAreaComponent.prototype, "type", {
        /** @description Determines the input type. Input type determines what input can be entered. */
        get: function () {
            return this.nativeElement ? this.nativeElement.type : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.type = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextAreaComponent.prototype, "unfocusable", {
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
    Object.defineProperty(TextAreaComponent.prototype, "value", {
        /** @description Sets or gets the value of the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.value : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.value = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /** @description Closes the drop down.
    */
    TextAreaComponent.prototype.close = function () {
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
    /** @description Ensures that the active ( selected ) item is always visible.
    */
    TextAreaComponent.prototype.ensureVisible = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.ensureVisible();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.ensureVisible();
            });
        }
    };
    /** @description Opens the drop down.
    */
    TextAreaComponent.prototype.open = function () {
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
    /** @description Selects the text inside the input or if it is readonly then the element is focused.
    */
    TextAreaComponent.prototype.select = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.select();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.select();
            });
        }
    };
    Object.defineProperty(TextAreaComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    TextAreaComponent.prototype.ngOnInit = function () {
    };
    TextAreaComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        this.listen();
    };
    TextAreaComponent.prototype.ngOnDestroy = function () {
        this.unlisten();
    };
    Object.defineProperty(TextAreaComponent.prototype, "ngValue", {
        get: function () {
            if (!this.nativeElement) {
                return null;
            }
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
    TextAreaComponent.prototype.writeValue = function (value) {
        var that = this;
        var normalizedValue = value == null ? '' : value;
        that.nativeElement.whenRendered(function () {
            that.value = normalizedValue;
            if (that._initialChange === false) {
                that._onChange(that.value);
            }
        });
    };
    TextAreaComponent.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
    };
    TextAreaComponent.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    TextAreaComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    /** @description Add event listeners. */
    TextAreaComponent.prototype.listen = function () {
        var that = this;
        that.eventHandlers['changeHandler'] = function (event) { that.onChange.emit(event); };
        that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
        that.eventHandlers['changingHandler'] = function (event) { that.onChanging.emit(event); };
        that.nativeElement.addEventListener('changing', that.eventHandlers['changingHandler']);
        that.eventHandlers['changeModelHandler'] = function (event) {
            that._initialChange = false;
            that._onChange(that.nativeElement.value);
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
    TextAreaComponent.prototype.unlisten = function () {
        var that = this;
        if (that.eventHandlers['changeHandler']) {
            that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
        }
        if (that.eventHandlers['changingHandler']) {
            that.nativeElement.removeEventListener('changing', that.eventHandlers['changingHandler']);
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
    TextAreaComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], TextAreaComponent.prototype, "animation", null);
    __decorate([
        Input()
    ], TextAreaComponent.prototype, "autoCompleteDelay", null);
    __decorate([
        Input()
    ], TextAreaComponent.prototype, "dataSource", null);
    __decorate([
        Input()
    ], TextAreaComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], TextAreaComponent.prototype, "dropDownButtonPosition", null);
    __decorate([
        Input()
    ], TextAreaComponent.prototype, "dropDownHeight", null);
    __decorate([
        Input()
    ], TextAreaComponent.prototype, "dropDownWidth", null);
    __decorate([
        Input()
    ], TextAreaComponent.prototype, "inputPurpose", null);
    __decorate([
        Input()
    ], TextAreaComponent.prototype, "items", null);
    __decorate([
        Input()
    ], TextAreaComponent.prototype, "locale", null);
    __decorate([
        Input()
    ], TextAreaComponent.prototype, "localizeFormatFunction", null);
    __decorate([
        Input()
    ], TextAreaComponent.prototype, "messages", null);
    __decorate([
        Input()
    ], TextAreaComponent.prototype, "minLength", null);
    __decorate([
        Input()
    ], TextAreaComponent.prototype, "name", null);
    __decorate([
        Input()
    ], TextAreaComponent.prototype, "opened", null);
    __decorate([
        Input()
    ], TextAreaComponent.prototype, "placeholder", null);
    __decorate([
        Input()
    ], TextAreaComponent.prototype, "query", null);
    __decorate([
        Input()
    ], TextAreaComponent.prototype, "queryMode", null);
    __decorate([
        Input()
    ], TextAreaComponent.prototype, "readonly", null);
    __decorate([
        Input()
    ], TextAreaComponent.prototype, "rightToLeft", null);
    __decorate([
        Input()
    ], TextAreaComponent.prototype, "sorted", null);
    __decorate([
        Input()
    ], TextAreaComponent.prototype, "sortDirection", null);
    __decorate([
        Input()
    ], TextAreaComponent.prototype, "theme", null);
    __decorate([
        Input()
    ], TextAreaComponent.prototype, "type", null);
    __decorate([
        Input()
    ], TextAreaComponent.prototype, "unfocusable", null);
    __decorate([
        Input()
    ], TextAreaComponent.prototype, "value", null);
    __decorate([
        Output()
    ], TextAreaComponent.prototype, "onChange", void 0);
    __decorate([
        Output()
    ], TextAreaComponent.prototype, "onChanging", void 0);
    TextAreaComponent = __decorate([
        Directive({
            exportAs: 'smart-text-area', selector: 'smart-text-area, [smart-text-area]',
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
        })
    ], TextAreaComponent);
    return TextAreaComponent;
}(BaseElement));

var TextAreaModule = /** @class */ (function () {
    function TextAreaModule() {
    }
    TextAreaModule = __decorate([
        NgModule({
            declarations: [TextAreaComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            exports: [TextAreaComponent]
        })
    ], TextAreaModule);
    return TextAreaModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { Smart, TextAreaComponent, TextAreaModule, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-textarea.js.map
