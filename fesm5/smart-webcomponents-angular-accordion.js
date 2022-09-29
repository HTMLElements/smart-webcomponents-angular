
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.accordion';

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

var AccordionComponent = /** @class */ (function (_super) {
    __extends(AccordionComponent, _super);
    function AccordionComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        /** @description This event is triggered when an item is collapsed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	content, 	index, 	label)
        *   content - The content of the item.
        *   index - The index of the item.
        *   label - The label of the item
        */
        _this.onCollapse = new EventEmitter();
        /** @description This event is triggered when an item is going to be collapsed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	content, 	index, 	label)
        *   content - The content of the item.
        *   index - The index of the item.
        *   label - The label of the item
        */
        _this.onCollapsing = new EventEmitter();
        /** @description This event is triggered when a reordering operation is completed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	position, 	target, 	content, 	index, 	label)
        *   position - The current top and left position of the item that was dragged.
        *   target - The item that was dragged.
        *   content - The content of the item.
        *   index - The index of the item.
        *   label - The label of the item.
        */
        _this.onDragEnd = new EventEmitter();
        /** @description This event is triggered when a reordering operation is started.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	position, 	target, 	content, 	index, 	label)
        *   position - The current top and left position of the item that is about to be dragged.
        *   target - The item that is about to be dragged.
        *   content - The content of the item.
        *   index - The index of the item.
        *   label - The label of the item.
        */
        _this.onDragStart = new EventEmitter();
        /** @description This event is triggered when an item is expanded.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	position, 	target, 	content, 	index, 	label)
        *   position - The current top and left position of the item.
        *   target - The item that was dragged.
        *   content - The content of the item.
        *   index - The index of the item.
        *   label - The label of the item.
        */
        _this.onExpand = new EventEmitter();
        /** @description This event is triggered when an item is going to be expanded.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	content, 	index, 	label)
        *   content - The content of the item.
        *   index - The index of the item.
        *   label - The label of the item
        */
        _this.onExpanding = new EventEmitter();
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    AccordionComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('smart-accordion');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(AccordionComponent.prototype, "animation", {
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
    Object.defineProperty(AccordionComponent.prototype, "dataSource", {
        /** @description Determines the data source that will be loaded to the Accordion. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dataSource : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dataSource = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccordionComponent.prototype, "disabled", {
        /** @description Enables or disables the accordion. Disabled elements can not be interacted with. */
        get: function () {
            return this.nativeElement ? this.nativeElement.disabled : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disabled = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccordionComponent.prototype, "expandedIndexes", {
        /** @description Sets or gets the expanded item indexes. Using this property items can be expanded by passing in their indexes. The number of expanded items is limited by the expandMode. */
        get: function () {
            return this.nativeElement ? this.nativeElement.expandedIndexes : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.expandedIndexes = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccordionComponent.prototype, "expandMode", {
        /** @description Sets or gets the expand mode. Expand mode determines how the items will expand or collapse. */
        get: function () {
            return this.nativeElement ? this.nativeElement.expandMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.expandMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccordionComponent.prototype, "locale", {
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
    Object.defineProperty(AccordionComponent.prototype, "localizeFormatFunction", {
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
    Object.defineProperty(AccordionComponent.prototype, "messages", {
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
    Object.defineProperty(AccordionComponent.prototype, "readonly", {
        /** @description Determines if the element is readonly or not. If the element true, users cannot interact with it. */
        get: function () {
            return this.nativeElement ? this.nativeElement.readonly : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.readonly = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccordionComponent.prototype, "reorder", {
        /** @description Enables or disables accordion reordering. */
        get: function () {
            return this.nativeElement ? this.nativeElement.reorder : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.reorder = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccordionComponent.prototype, "rightToLeft", {
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
    Object.defineProperty(AccordionComponent.prototype, "theme", {
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
    Object.defineProperty(AccordionComponent.prototype, "unfocusable", {
        /** @description Determines whether the element can be focused or not. */
        get: function () {
            return this.nativeElement ? this.nativeElement.unfocusable : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.unfocusable = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /** @description Collapses an item at a specified index.
    * @param {number} position. The index of the collapsed item.
    */
    AccordionComponent.prototype.collapse = function (position) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapse(position);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.collapse(position);
            });
        }
    };
    /** @description Expands an item at a specified index.
    * @param {number} position. The index of the expanded item.
    */
    AccordionComponent.prototype.expand = function (position) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.expand(position);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.expand(position);
            });
        }
    };
    /** @description Inserts a new item at a specified index.
    * @param {number} index. The index where the item must be inserted.
    * @param {any} item. An object containing the values for the properties of the new item to be inserted.
    */
    AccordionComponent.prototype.insert = function (index, item) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.insert(index, item);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.insert(index, item);
            });
        }
    };
    /** @description Removes an item at a specified index.
    * @param {number} position. The index of the item to be removed.
    */
    AccordionComponent.prototype.removeAt = function (position) {
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
    /** @description Updates an item from the element.
    * @param {number} index. The index of the item to be updated.
    * @param {any} settings. An object containing the values for the properties of the item that will be updated.
    */
    AccordionComponent.prototype.update = function (index, settings) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.update(index, settings);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.update(index, settings);
            });
        }
    };
    Object.defineProperty(AccordionComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    AccordionComponent.prototype.ngOnInit = function () {
    };
    AccordionComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        this.listen();
    };
    AccordionComponent.prototype.ngOnDestroy = function () {
        this.unlisten();
    };
    AccordionComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    /** @description Add event listeners. */
    AccordionComponent.prototype.listen = function () {
        var that = this;
        that.eventHandlers['collapseHandler'] = function (event) { that.onCollapse.emit(event); };
        that.nativeElement.addEventListener('collapse', that.eventHandlers['collapseHandler']);
        that.eventHandlers['collapsingHandler'] = function (event) { that.onCollapsing.emit(event); };
        that.nativeElement.addEventListener('collapsing', that.eventHandlers['collapsingHandler']);
        that.eventHandlers['dragEndHandler'] = function (event) { that.onDragEnd.emit(event); };
        that.nativeElement.addEventListener('dragEnd', that.eventHandlers['dragEndHandler']);
        that.eventHandlers['dragStartHandler'] = function (event) { that.onDragStart.emit(event); };
        that.nativeElement.addEventListener('dragStart', that.eventHandlers['dragStartHandler']);
        that.eventHandlers['expandHandler'] = function (event) { that.onExpand.emit(event); };
        that.nativeElement.addEventListener('expand', that.eventHandlers['expandHandler']);
        that.eventHandlers['expandingHandler'] = function (event) { that.onExpanding.emit(event); };
        that.nativeElement.addEventListener('expanding', that.eventHandlers['expandingHandler']);
    };
    /** @description Remove event listeners. */
    AccordionComponent.prototype.unlisten = function () {
        var that = this;
        if (that.eventHandlers['collapseHandler']) {
            that.nativeElement.removeEventListener('collapse', that.eventHandlers['collapseHandler']);
        }
        if (that.eventHandlers['collapsingHandler']) {
            that.nativeElement.removeEventListener('collapsing', that.eventHandlers['collapsingHandler']);
        }
        if (that.eventHandlers['dragEndHandler']) {
            that.nativeElement.removeEventListener('dragEnd', that.eventHandlers['dragEndHandler']);
        }
        if (that.eventHandlers['dragStartHandler']) {
            that.nativeElement.removeEventListener('dragStart', that.eventHandlers['dragStartHandler']);
        }
        if (that.eventHandlers['expandHandler']) {
            that.nativeElement.removeEventListener('expand', that.eventHandlers['expandHandler']);
        }
        if (that.eventHandlers['expandingHandler']) {
            that.nativeElement.removeEventListener('expanding', that.eventHandlers['expandingHandler']);
        }
    };
    AccordionComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], AccordionComponent.prototype, "animation", null);
    __decorate([
        Input()
    ], AccordionComponent.prototype, "dataSource", null);
    __decorate([
        Input()
    ], AccordionComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], AccordionComponent.prototype, "expandedIndexes", null);
    __decorate([
        Input()
    ], AccordionComponent.prototype, "expandMode", null);
    __decorate([
        Input()
    ], AccordionComponent.prototype, "locale", null);
    __decorate([
        Input()
    ], AccordionComponent.prototype, "localizeFormatFunction", null);
    __decorate([
        Input()
    ], AccordionComponent.prototype, "messages", null);
    __decorate([
        Input()
    ], AccordionComponent.prototype, "readonly", null);
    __decorate([
        Input()
    ], AccordionComponent.prototype, "reorder", null);
    __decorate([
        Input()
    ], AccordionComponent.prototype, "rightToLeft", null);
    __decorate([
        Input()
    ], AccordionComponent.prototype, "theme", null);
    __decorate([
        Input()
    ], AccordionComponent.prototype, "unfocusable", null);
    __decorate([
        Output()
    ], AccordionComponent.prototype, "onCollapse", void 0);
    __decorate([
        Output()
    ], AccordionComponent.prototype, "onCollapsing", void 0);
    __decorate([
        Output()
    ], AccordionComponent.prototype, "onDragEnd", void 0);
    __decorate([
        Output()
    ], AccordionComponent.prototype, "onDragStart", void 0);
    __decorate([
        Output()
    ], AccordionComponent.prototype, "onExpand", void 0);
    __decorate([
        Output()
    ], AccordionComponent.prototype, "onExpanding", void 0);
    AccordionComponent = __decorate([
        Directive({
            exportAs: 'smart-accordion', selector: 'smart-accordion, [smart-accordion]'
        })
    ], AccordionComponent);
    return AccordionComponent;
}(BaseElement));

var AccordionItemComponent = /** @class */ (function (_super) {
    __extends(AccordionItemComponent, _super);
    function AccordionItemComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        /** @description This event is triggered when the item is collapsed.
        *  @param event. The custom event. 	*/
        _this.onCollapse = new EventEmitter();
        /** @description This event is triggered when the item is expanded.
        *  @param event. The custom event. 	*/
        _this.onExpand = new EventEmitter();
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    AccordionItemComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('smart-accordion-item');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(AccordionItemComponent.prototype, "arrow", {
        /** @description Sets or gets header's arrow position. If the value is 'none' the arrow is not shown. */
        get: function () {
            return this.nativeElement ? this.nativeElement.arrow : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.arrow = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccordionItemComponent.prototype, "content", {
        /** @description Sets or gets the content if the item. */
        get: function () {
            return this.nativeElement ? this.nativeElement.content : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.content = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccordionItemComponent.prototype, "expanded", {
        /** @description Sets or gets the expanded state. */
        get: function () {
            return this.nativeElement ? this.nativeElement.expanded : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.expanded = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccordionItemComponent.prototype, "focused", {
        /** @description Sets or gets the focus state. */
        get: function () {
            return this.nativeElement ? this.nativeElement.focused : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.focused = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccordionItemComponent.prototype, "label", {
        /** @description Sets or gets the label if the item. */
        get: function () {
            return this.nativeElement ? this.nativeElement.label : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.label = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccordionItemComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    AccordionItemComponent.prototype.ngOnInit = function () {
    };
    AccordionItemComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        this.listen();
    };
    AccordionItemComponent.prototype.ngOnDestroy = function () {
        this.unlisten();
    };
    AccordionItemComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    /** @description Add event listeners. */
    AccordionItemComponent.prototype.listen = function () {
        var that = this;
        that.eventHandlers['collapseHandler'] = function (event) { that.onCollapse.emit(event); };
        that.nativeElement.addEventListener('collapse', that.eventHandlers['collapseHandler']);
        that.eventHandlers['expandHandler'] = function (event) { that.onExpand.emit(event); };
        that.nativeElement.addEventListener('expand', that.eventHandlers['expandHandler']);
    };
    /** @description Remove event listeners. */
    AccordionItemComponent.prototype.unlisten = function () {
        var that = this;
        if (that.eventHandlers['collapseHandler']) {
            that.nativeElement.removeEventListener('collapse', that.eventHandlers['collapseHandler']);
        }
        if (that.eventHandlers['expandHandler']) {
            that.nativeElement.removeEventListener('expand', that.eventHandlers['expandHandler']);
        }
    };
    AccordionItemComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], AccordionItemComponent.prototype, "arrow", null);
    __decorate([
        Input()
    ], AccordionItemComponent.prototype, "content", null);
    __decorate([
        Input()
    ], AccordionItemComponent.prototype, "expanded", null);
    __decorate([
        Input()
    ], AccordionItemComponent.prototype, "focused", null);
    __decorate([
        Input()
    ], AccordionItemComponent.prototype, "label", null);
    __decorate([
        Output()
    ], AccordionItemComponent.prototype, "onCollapse", void 0);
    __decorate([
        Output()
    ], AccordionItemComponent.prototype, "onExpand", void 0);
    AccordionItemComponent = __decorate([
        Directive({
            exportAs: 'smart-accordion-item', selector: 'smart-accordion-item, [smart-accordion-item]'
        })
    ], AccordionItemComponent);
    return AccordionItemComponent;
}(BaseElement));

var AccordionModule = /** @class */ (function () {
    function AccordionModule() {
    }
    AccordionModule = __decorate([
        NgModule({
            declarations: [AccordionComponent, AccordionItemComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            exports: [AccordionComponent, AccordionItemComponent]
        })
    ], AccordionModule);
    return AccordionModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { AccordionComponent, AccordionItemComponent, AccordionModule, Smart, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-accordion.js.map
