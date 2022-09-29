
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.breadcrumb';

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

var BreadcrumbComponent = /** @class */ (function (_super) {
    __extends(BreadcrumbComponent, _super);
    function BreadcrumbComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        /** @description This event is triggered when a Breadcrumb item is closed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	item)
        *   item - The item that has been closed.
        */
        _this.onClose = new EventEmitter();
        /** @description This event is triggered when a Breadcrumb item is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	item)
        *   item - The item that is going to be closed.
        */
        _this.onClosing = new EventEmitter();
        /** @description This event is triggered when a Breadcrumb item is dropped.
        *  @param event. The custom event. 	*/
        _this.onDragEnd = new EventEmitter();
        /** @description This event is triggered when a Breadcrumb item is being dragged.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	originalEvent, 	target)
        *   item - The item that is being dragged.
        *   originalEvent - The original event that initiates the dragging operation.
        *   target - The original target.
        */
        _this.onDragging = new EventEmitter();
        /** @description This event is triggered when the "Add new item" (+) button is clicked.
        *  @param event. The custom event. 	*/
        _this.onAddNewItem = new EventEmitter();
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    BreadcrumbComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('smart-breadcrumb');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(BreadcrumbComponent.prototype, "addNewItem", {
        /** @description Enables or disables the "Add new item" (+) button. */
        get: function () {
            return this.nativeElement ? this.nativeElement.addNewItem : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.addNewItem = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BreadcrumbComponent.prototype, "allowDrag", {
        /** @description Enables or disables the dragging of breadcrumb items. */
        get: function () {
            return this.nativeElement ? this.nativeElement.allowDrag : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.allowDrag = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BreadcrumbComponent.prototype, "allowDrop", {
        /** @description Enables or disables the dropping of dragged breadcrumb items. */
        get: function () {
            return this.nativeElement ? this.nativeElement.allowDrop : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.allowDrop = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BreadcrumbComponent.prototype, "animation", {
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
    Object.defineProperty(BreadcrumbComponent.prototype, "closeButtons", {
        /** @description Show/Hide the close button of breadcrumb items. */
        get: function () {
            return this.nativeElement ? this.nativeElement.closeButtons : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.closeButtons = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BreadcrumbComponent.prototype, "dataSource", {
        /** @description Determines the data source to load breadcrumb items from. The Array should contain objects. Each object defines a single breadcrumb item. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dataSource : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dataSource = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BreadcrumbComponent.prototype, "disabled", {
        /** @description Enables or disables the Breadcrumb. */
        get: function () {
            return this.nativeElement ? this.nativeElement.disabled : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disabled = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BreadcrumbComponent.prototype, "itemTemplate", {
        /** @description Sets or gets the template of breadcrumb items. The value of this property can be the id of an HTMLTemplateElement or the HTMLTemplateElement itself. If set to null, no template is applied. */
        get: function () {
            return this.nativeElement ? this.nativeElement.itemTemplate : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.itemTemplate = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BreadcrumbComponent.prototype, "locale", {
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
    Object.defineProperty(BreadcrumbComponent.prototype, "messages", {
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
    Object.defineProperty(BreadcrumbComponent.prototype, "minimizeWidth", {
        /** @description Determines the minimum width of the Breadcrumb at which it will switch from normal to minimized mode. If set to null, the Breadcrumb does not minimize automatically. */
        get: function () {
            return this.nativeElement ? this.nativeElement.minimizeWidth : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.minimizeWidth = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BreadcrumbComponent.prototype, "unfocusable", {
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
    /** @description Adds an item.
    * @param {any} itemDetails. An Object with the fields "index", "label", and "value".
    */
    BreadcrumbComponent.prototype.addItem = function (itemDetails) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.addItem(itemDetails);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.addItem(itemDetails);
            });
        }
    };
    /** @description Restores the Breadcrumb from minimized state back to normal.
    */
    BreadcrumbComponent.prototype.maximize = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.maximize();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.maximize();
            });
        }
    };
    /** @description Minimizes the Breadcrumb.
    */
    BreadcrumbComponent.prototype.minimize = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.minimize();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.minimize();
            });
        }
    };
    /** @description Removes an item.
    * @param {HTMLElement} item. The item to remove.
    */
    BreadcrumbComponent.prototype.removeItem = function (item) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeItem(item);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.removeItem(item);
            });
        }
    };
    Object.defineProperty(BreadcrumbComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    BreadcrumbComponent.prototype.ngOnInit = function () {
    };
    BreadcrumbComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        this.listen();
    };
    BreadcrumbComponent.prototype.ngOnDestroy = function () {
        this.unlisten();
    };
    BreadcrumbComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    /** @description Add event listeners. */
    BreadcrumbComponent.prototype.listen = function () {
        var that = this;
        that.eventHandlers['closeHandler'] = function (event) { that.onClose.emit(event); };
        that.nativeElement.addEventListener('close', that.eventHandlers['closeHandler']);
        that.eventHandlers['closingHandler'] = function (event) { that.onClosing.emit(event); };
        that.nativeElement.addEventListener('closing', that.eventHandlers['closingHandler']);
        that.eventHandlers['dragEndHandler'] = function (event) { that.onDragEnd.emit(event); };
        that.nativeElement.addEventListener('dragEnd', that.eventHandlers['dragEndHandler']);
        that.eventHandlers['draggingHandler'] = function (event) { that.onDragging.emit(event); };
        that.nativeElement.addEventListener('dragging', that.eventHandlers['draggingHandler']);
        that.eventHandlers['addNewItemHandler'] = function (event) { that.onAddNewItem.emit(event); };
        that.nativeElement.addEventListener('addNewItem', that.eventHandlers['addNewItemHandler']);
    };
    /** @description Remove event listeners. */
    BreadcrumbComponent.prototype.unlisten = function () {
        var that = this;
        if (that.eventHandlers['closeHandler']) {
            that.nativeElement.removeEventListener('close', that.eventHandlers['closeHandler']);
        }
        if (that.eventHandlers['closingHandler']) {
            that.nativeElement.removeEventListener('closing', that.eventHandlers['closingHandler']);
        }
        if (that.eventHandlers['dragEndHandler']) {
            that.nativeElement.removeEventListener('dragEnd', that.eventHandlers['dragEndHandler']);
        }
        if (that.eventHandlers['draggingHandler']) {
            that.nativeElement.removeEventListener('dragging', that.eventHandlers['draggingHandler']);
        }
        if (that.eventHandlers['addNewItemHandler']) {
            that.nativeElement.removeEventListener('addNewItem', that.eventHandlers['addNewItemHandler']);
        }
    };
    BreadcrumbComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], BreadcrumbComponent.prototype, "addNewItem", null);
    __decorate([
        Input()
    ], BreadcrumbComponent.prototype, "allowDrag", null);
    __decorate([
        Input()
    ], BreadcrumbComponent.prototype, "allowDrop", null);
    __decorate([
        Input()
    ], BreadcrumbComponent.prototype, "animation", null);
    __decorate([
        Input()
    ], BreadcrumbComponent.prototype, "closeButtons", null);
    __decorate([
        Input()
    ], BreadcrumbComponent.prototype, "dataSource", null);
    __decorate([
        Input()
    ], BreadcrumbComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], BreadcrumbComponent.prototype, "itemTemplate", null);
    __decorate([
        Input()
    ], BreadcrumbComponent.prototype, "locale", null);
    __decorate([
        Input()
    ], BreadcrumbComponent.prototype, "messages", null);
    __decorate([
        Input()
    ], BreadcrumbComponent.prototype, "minimizeWidth", null);
    __decorate([
        Input()
    ], BreadcrumbComponent.prototype, "unfocusable", null);
    __decorate([
        Output()
    ], BreadcrumbComponent.prototype, "onClose", void 0);
    __decorate([
        Output()
    ], BreadcrumbComponent.prototype, "onClosing", void 0);
    __decorate([
        Output()
    ], BreadcrumbComponent.prototype, "onDragEnd", void 0);
    __decorate([
        Output()
    ], BreadcrumbComponent.prototype, "onDragging", void 0);
    __decorate([
        Output()
    ], BreadcrumbComponent.prototype, "onAddNewItem", void 0);
    BreadcrumbComponent = __decorate([
        Directive({
            exportAs: 'smart-breadcrumb', selector: 'smart-breadcrumb, [smart-breadcrumb]'
        })
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}(BaseElement));

var BreadcrumbModule = /** @class */ (function () {
    function BreadcrumbModule() {
    }
    BreadcrumbModule = __decorate([
        NgModule({
            declarations: [BreadcrumbComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            exports: [BreadcrumbComponent]
        })
    ], BreadcrumbModule);
    return BreadcrumbModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { BreadcrumbComponent, BreadcrumbModule, Smart, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-breadcrumb.js.map
