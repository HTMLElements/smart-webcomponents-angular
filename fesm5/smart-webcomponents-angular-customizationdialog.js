
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.customizationdialog';

import { __decorate, __extends } from 'tslib';
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

var CustomizationDialogComponent = /** @class */ (function (_super) {
    __extends(CustomizationDialogComponent, _super);
    function CustomizationDialogComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        /** @description This event is triggered when the dialog is opened.
        *  @param event. The custom event. 	*/
        _this.onOpen = new EventEmitter();
        /** @description This event is triggered when the dialog is closed.
        *  @param event. The custom event. 	*/
        _this.onClose = new EventEmitter();
        /** @description This event is triggered when the data in the value property is changed.
        *  @param event. The custom event. 	*/
        _this.onChange = new EventEmitter();
        /** @description This event is triggered when the dialog is closed via clicking the apply button.
        *  @param event. The custom event. 	*/
        _this.onApply = new EventEmitter();
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    CustomizationDialogComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('smart-customization-dialog');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(CustomizationDialogComponent.prototype, "animation", {
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
    Object.defineProperty(CustomizationDialogComponent.prototype, "dataSource", {
        /** @description Array with filtered fields and their settings. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dataSource : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dataSource = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomizationDialogComponent.prototype, "displayMember", {
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
    Object.defineProperty(CustomizationDialogComponent.prototype, "disabled", {
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
    Object.defineProperty(CustomizationDialogComponent.prototype, "filtering", {
        /** @description Sets whether is enabled/disabled filtering tab. */
        get: function () {
            return this.nativeElement ? this.nativeElement.filtering : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.filtering = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomizationDialogComponent.prototype, "grouping", {
        /** @description Sets whether is enabled/disabled grouping tab. */
        get: function () {
            return this.nativeElement ? this.nativeElement.grouping : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.grouping = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomizationDialogComponent.prototype, "headerButtons", {
        /** @description Set's the buttons that will be visible in the header section. */
        get: function () {
            return this.nativeElement ? this.nativeElement.headerButtons : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.headerButtons = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomizationDialogComponent.prototype, "locale", {
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
    Object.defineProperty(CustomizationDialogComponent.prototype, "localizeFormatFunction", {
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
    Object.defineProperty(CustomizationDialogComponent.prototype, "messages", {
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
    Object.defineProperty(CustomizationDialogComponent.prototype, "reorder", {
        /** @description Sets or gets whether the columns reordering is active. */
        get: function () {
            return this.nativeElement ? this.nativeElement.reorder : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.reorder = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomizationDialogComponent.prototype, "selectedTab", {
        /** @description Sets or gets the tab, wich is selected on initialization. */
        get: function () {
            return this.nativeElement ? this.nativeElement.selectedTab : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.selectedTab = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomizationDialogComponent.prototype, "sorting", {
        /** @description Sets whether is enabled/disabled sorting tab. */
        get: function () {
            return this.nativeElement ? this.nativeElement.sorting : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.sorting = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomizationDialogComponent.prototype, "theme", {
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
    Object.defineProperty(CustomizationDialogComponent.prototype, "unfocusable", {
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
    Object.defineProperty(CustomizationDialogComponent.prototype, "value", {
        /** @description Sets or gets element's value. It's represente by object, contained */
        get: function () {
            return this.nativeElement ? this.nativeElement.value : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.value = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomizationDialogComponent.prototype, "valueMember", {
        /** @description Determines the value member of an item. Stored as value in the item object. */
        get: function () {
            return this.nativeElement ? this.nativeElement.valueMember : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.valueMember = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomizationDialogComponent.prototype, "visibility", {
        /** @description Sets or gets whether the columns of the element could be hidden. */
        get: function () {
            return this.nativeElement ? this.nativeElement.visibility : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.visibility = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /** @description Opens the dialog
    */
    CustomizationDialogComponent.prototype.open = function () {
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
    /** @description Closes the dialog.
    */
    CustomizationDialogComponent.prototype.close = function () {
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
    Object.defineProperty(CustomizationDialogComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    CustomizationDialogComponent.prototype.ngOnInit = function () {
    };
    CustomizationDialogComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        this.listen();
    };
    CustomizationDialogComponent.prototype.ngOnDestroy = function () {
        this.unlisten();
    };
    CustomizationDialogComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    /** @description Add event listeners. */
    CustomizationDialogComponent.prototype.listen = function () {
        var that = this;
        that.eventHandlers['openHandler'] = function (event) { that.onOpen.emit(event); };
        that.nativeElement.addEventListener('open', that.eventHandlers['openHandler']);
        that.eventHandlers['closeHandler'] = function (event) { that.onClose.emit(event); };
        that.nativeElement.addEventListener('close', that.eventHandlers['closeHandler']);
        that.eventHandlers['changeHandler'] = function (event) { that.onChange.emit(event); };
        that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
        that.eventHandlers['applyHandler'] = function (event) { that.onApply.emit(event); };
        that.nativeElement.addEventListener('apply', that.eventHandlers['applyHandler']);
    };
    /** @description Remove event listeners. */
    CustomizationDialogComponent.prototype.unlisten = function () {
        var that = this;
        if (that.eventHandlers['openHandler']) {
            that.nativeElement.removeEventListener('open', that.eventHandlers['openHandler']);
        }
        if (that.eventHandlers['closeHandler']) {
            that.nativeElement.removeEventListener('close', that.eventHandlers['closeHandler']);
        }
        if (that.eventHandlers['changeHandler']) {
            that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
        }
        if (that.eventHandlers['applyHandler']) {
            that.nativeElement.removeEventListener('apply', that.eventHandlers['applyHandler']);
        }
    };
    CustomizationDialogComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], CustomizationDialogComponent.prototype, "animation", null);
    __decorate([
        Input()
    ], CustomizationDialogComponent.prototype, "dataSource", null);
    __decorate([
        Input()
    ], CustomizationDialogComponent.prototype, "displayMember", null);
    __decorate([
        Input()
    ], CustomizationDialogComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], CustomizationDialogComponent.prototype, "filtering", null);
    __decorate([
        Input()
    ], CustomizationDialogComponent.prototype, "grouping", null);
    __decorate([
        Input()
    ], CustomizationDialogComponent.prototype, "headerButtons", null);
    __decorate([
        Input()
    ], CustomizationDialogComponent.prototype, "locale", null);
    __decorate([
        Input()
    ], CustomizationDialogComponent.prototype, "localizeFormatFunction", null);
    __decorate([
        Input()
    ], CustomizationDialogComponent.prototype, "messages", null);
    __decorate([
        Input()
    ], CustomizationDialogComponent.prototype, "reorder", null);
    __decorate([
        Input()
    ], CustomizationDialogComponent.prototype, "selectedTab", null);
    __decorate([
        Input()
    ], CustomizationDialogComponent.prototype, "sorting", null);
    __decorate([
        Input()
    ], CustomizationDialogComponent.prototype, "theme", null);
    __decorate([
        Input()
    ], CustomizationDialogComponent.prototype, "unfocusable", null);
    __decorate([
        Input()
    ], CustomizationDialogComponent.prototype, "value", null);
    __decorate([
        Input()
    ], CustomizationDialogComponent.prototype, "valueMember", null);
    __decorate([
        Input()
    ], CustomizationDialogComponent.prototype, "visibility", null);
    __decorate([
        Output()
    ], CustomizationDialogComponent.prototype, "onOpen", void 0);
    __decorate([
        Output()
    ], CustomizationDialogComponent.prototype, "onClose", void 0);
    __decorate([
        Output()
    ], CustomizationDialogComponent.prototype, "onChange", void 0);
    __decorate([
        Output()
    ], CustomizationDialogComponent.prototype, "onApply", void 0);
    CustomizationDialogComponent = __decorate([
        Directive({
            exportAs: 'smart-customization-dialog', selector: 'smart-customization-dialog, [smart-customization-dialog]'
        })
    ], CustomizationDialogComponent);
    return CustomizationDialogComponent;
}(BaseElement));

var CustomizationDialogModule = /** @class */ (function () {
    function CustomizationDialogModule() {
    }
    CustomizationDialogModule = __decorate([
        NgModule({
            declarations: [CustomizationDialogComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            exports: [CustomizationDialogComponent]
        })
    ], CustomizationDialogModule);
    return CustomizationDialogModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { CustomizationDialogComponent, CustomizationDialogModule, Smart, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-customizationdialog.js.map
