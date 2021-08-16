import * as tslib_1 from "tslib";
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter, QueryList, ContentChildren } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Smart } from './smart.element';
var AccordionComponent = /** @class */ (function (_super) {
    tslib_1.__extends(AccordionComponent, _super);
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
    tslib_1.__decorate([
        Input()
    ], AccordionComponent.prototype, "animation", null);
    tslib_1.__decorate([
        Input()
    ], AccordionComponent.prototype, "dataSource", null);
    tslib_1.__decorate([
        Input()
    ], AccordionComponent.prototype, "disabled", null);
    tslib_1.__decorate([
        Input()
    ], AccordionComponent.prototype, "expandedIndexes", null);
    tslib_1.__decorate([
        Input()
    ], AccordionComponent.prototype, "expandMode", null);
    tslib_1.__decorate([
        Input()
    ], AccordionComponent.prototype, "locale", null);
    tslib_1.__decorate([
        Input()
    ], AccordionComponent.prototype, "localizeFormatFunction", null);
    tslib_1.__decorate([
        Input()
    ], AccordionComponent.prototype, "messages", null);
    tslib_1.__decorate([
        Input()
    ], AccordionComponent.prototype, "readonly", null);
    tslib_1.__decorate([
        Input()
    ], AccordionComponent.prototype, "reorder", null);
    tslib_1.__decorate([
        Input()
    ], AccordionComponent.prototype, "rightToLeft", null);
    tslib_1.__decorate([
        Input()
    ], AccordionComponent.prototype, "theme", null);
    tslib_1.__decorate([
        Input()
    ], AccordionComponent.prototype, "unfocusable", null);
    tslib_1.__decorate([
        Output()
    ], AccordionComponent.prototype, "onCollapse", void 0);
    tslib_1.__decorate([
        Output()
    ], AccordionComponent.prototype, "onCollapsing", void 0);
    tslib_1.__decorate([
        Output()
    ], AccordionComponent.prototype, "onDragEnd", void 0);
    tslib_1.__decorate([
        Output()
    ], AccordionComponent.prototype, "onDragStart", void 0);
    tslib_1.__decorate([
        Output()
    ], AccordionComponent.prototype, "onExpand", void 0);
    tslib_1.__decorate([
        Output()
    ], AccordionComponent.prototype, "onExpanding", void 0);
    AccordionComponent = tslib_1.__decorate([
        Directive({
            selector: 'smart-accordion, [smart-accordion]'
        })
    ], AccordionComponent);
    return AccordionComponent;
}(BaseElement));
export { AccordionComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQuYWNjb3JkaW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc21hcnQtd2ViY29tcG9uZW50cy1hbmd1bGFyL2FjY29yZGlvbi8iLCJzb3VyY2VzIjpbInNtYXJ0LmFjY29yZGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0TCxPQUFPLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXJELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQVV4QztJQUF3Qyw4Q0FBVztJQUVsRCw0QkFBWSxHQUEwQjtRQUF0QyxZQUNDLGtCQUFNLEdBQUcsQ0FBQyxTQUVWO1FBRU8sbUJBQWEsR0FBVSxFQUFFLENBQUM7UUFrSWxDOzs7OztVQUtFO1FBQ1EsZ0JBQVUsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVyRTs7Ozs7VUFLRTtRQUNRLGtCQUFZLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFdkU7Ozs7Ozs7VUFPRTtRQUNRLGVBQVMsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVwRTs7Ozs7OztVQU9FO1FBQ1EsaUJBQVcsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV0RTs7Ozs7OztVQU9FO1FBQ1EsY0FBUSxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRW5FOzs7OztVQUtFO1FBQ1EsaUJBQVcsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQXpMckUsS0FBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUMsYUFBMEIsQ0FBQzs7SUFDckQsQ0FBQztJQUtEOztPQUVHO0lBQ0ks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SSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFO1lBQzNDLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1NBQzVGO0lBRUYsQ0FBQzs7Z0JBL1ZnQixVQUFVOztJQW9CM0I7UUFEQyxLQUFLLEVBQUU7dURBR1A7SUFPRDtRQURDLEtBQUssRUFBRTt3REFHUDtJQU9EO1FBREMsS0FBSyxFQUFFO3NEQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7NkRBR1A7SUFPRDtRQURDLEtBQUssRUFBRTt3REFHUDtJQU9EO1FBREMsS0FBSyxFQUFFO29EQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7b0VBR1A7SUFPRDtRQURDLEtBQUssRUFBRTtzREFHUDtJQU9EO1FBREMsS0FBSyxFQUFFO3NEQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7cURBR1A7SUFPRDtRQURDLEtBQUssRUFBRTt5REFHUDtJQU9EO1FBREMsS0FBSyxFQUFFO21EQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7eURBR1A7SUFXUztRQUFULE1BQU0sRUFBRTswREFBNEQ7SUFRM0Q7UUFBVCxNQUFNLEVBQUU7NERBQThEO0lBVTdEO1FBQVQsTUFBTSxFQUFFO3lEQUEyRDtJQVUxRDtRQUFULE1BQU0sRUFBRTsyREFBNkQ7SUFVNUQ7UUFBVCxNQUFNLEVBQUU7d0RBQTBEO0lBUXpEO1FBQVQsTUFBTSxFQUFFOzJEQUE2RDtJQTdMMUQsa0JBQWtCO1FBSjlCLFNBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxvQ0FBb0M7U0FDOUMsQ0FBQztPQUVXLGtCQUFrQixDQWtXOUI7SUFBRCx5QkFBQztDQUFBLEFBbFdELENBQXdDLFdBQVcsR0FrV2xEO1NBbFdZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjY29yZGlvbiB9IGZyb20gJy4vLi4vaW5kZXgnO1xuaW1wb3J0IHsgQW5pbWF0aW9uLCBBY2NvcmRpb25FeHBhbmRNb2RlLCBFbGVtZW50UmVuZGVyTW9kZX0gZnJvbSAnLi8uLi9pbmRleCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIERpcmVjdGl2ZSwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIFNpbXBsZUNoYW5nZXMsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBRdWVyeUxpc3QsIENvbnRlbnRDaGlsZHJlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFzZUVsZW1lbnQsIFNtYXJ0IH0gZnJvbSAnLi9zbWFydC5lbGVtZW50JztcbmV4cG9ydCB7IEFuaW1hdGlvbiwgQWNjb3JkaW9uRXhwYW5kTW9kZSwgRWxlbWVudFJlbmRlck1vZGV9IGZyb20gJy4vLi4vaW5kZXgnO1xuZXhwb3J0IHsgU21hcnQgfSBmcm9tICcuL3NtYXJ0LmVsZW1lbnQnO1xuZXhwb3J0IHsgQWNjb3JkaW9uIH0gZnJvbSAnLi8uLi9pbmRleCc7XG5cblxuaW1wb3J0IHsgQWNjb3JkaW9uSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vc21hcnQuYWNjb3JkaW9uaXRlbSc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ3NtYXJ0LWFjY29yZGlvbiwgW3NtYXJ0LWFjY29yZGlvbl0nXG59KVxuXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uQ29tcG9uZW50IGV4dGVuZHMgQmFzZUVsZW1lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcblxuXHRjb25zdHJ1Y3RvcihyZWY6IEVsZW1lbnRSZWY8QWNjb3JkaW9uPikge1xuXHRcdHN1cGVyKHJlZik7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID0gcmVmLm5hdGl2ZUVsZW1lbnQgYXMgQWNjb3JkaW9uO1xuXHR9XG5cblx0cHJpdmF0ZSBldmVudEhhbmRsZXJzOiBhbnlbXSA9IFtdO1xuXG5cdHB1YmxpYyBuYXRpdmVFbGVtZW50OiBBY2NvcmRpb247XG5cdC8qKiBAZGVzY3JpcHRpb24gQ3JlYXRlcyB0aGUgY29tcG9uZW50IG9uIGRlbWFuZC5cblx0ICogQHBhcmFtIHByb3BlcnRpZXMgQW4gb3B0aW9uYWwgb2JqZWN0IG9mIHByb3BlcnRpZXMsIHdoaWNoIHdpbGwgYmUgYWRkZWQgdG8gdGhlIHRlbXBsYXRlIGJpbmRlZCBvbmVzLlxuXHQgKi9cblx0cHVibGljIGNyZWF0ZUNvbXBvbmVudChwcm9wZXJ0aWVzID0ge30pOiBhbnkge1xuICAgIFx0dGhpcy5uYXRpdmVFbGVtZW50ID0gPEFjY29yZGlvbj5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzbWFydC1hY2NvcmRpb24nKTtcblx0XHRmb3IgKGxldCBwcm9wZXJ0eU5hbWUgaW4gcHJvcGVydGllcykgeyBcbiBcdFx0XHR0aGlzLm5hdGl2ZUVsZW1lbnRbcHJvcGVydHlOYW1lXSA9IHByb3BlcnRpZXNbcHJvcGVydHlOYW1lXTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudDtcblx0fVxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgYW5pbWF0aW9uIG1vZGUuIEFuaW1hdGlvbiBpcyBkaXNhYmxlZCB3aGVuIHRoZSBwcm9wZXJ0eSBpcyBzZXQgdG8gJ25vbmUnICovXG5cdEBJbnB1dCgpXG5cdGdldCBhbmltYXRpb24oKTogQW5pbWF0aW9uIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmFuaW1hdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYW5pbWF0aW9uKHZhbHVlOiBBbmltYXRpb24pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYW5pbWF0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIGRhdGEgc291cmNlIHRoYXQgd2lsbCBiZSBsb2FkZWQgdG8gdGhlIEFjY29yZGlvbi4gKi9cblx0QElucHV0KClcblx0Z2V0IGRhdGFTb3VyY2UoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRhdGFTb3VyY2UgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGRhdGFTb3VyY2UodmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kYXRhU291cmNlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEVuYWJsZXMgb3IgZGlzYWJsZXMgdGhlIGFjY29yZGlvbi4gRGlzYWJsZWQgZWxlbWVudHMgY2FuIG5vdCBiZSBpbnRlcmFjdGVkIHdpdGguICovXG5cdEBJbnB1dCgpXG5cdGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVkIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlZCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIGV4cGFuZGVkIGl0ZW0gaW5kZXhlcy4gVXNpbmcgdGhpcyBwcm9wZXJ0eSBpdGVtcyBjYW4gYmUgZXhwYW5kZWQgYnkgcGFzc2luZyBpbiB0aGVpciBpbmRleGVzLiBUaGUgbnVtYmVyIG9mIGV4cGFuZGVkIGl0ZW1zIGlzIGxpbWl0ZWQgYnkgdGhlIGV4cGFuZE1vZGUuICovXG5cdEBJbnB1dCgpXG5cdGdldCBleHBhbmRlZEluZGV4ZXMoKTogbnVtYmVyW10ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZXhwYW5kZWRJbmRleGVzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBleHBhbmRlZEluZGV4ZXModmFsdWU6IG51bWJlcltdKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmV4cGFuZGVkSW5kZXhlcyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIGV4cGFuZCBtb2RlLiBFeHBhbmQgbW9kZSBkZXRlcm1pbmVzIGhvdyB0aGUgaXRlbXMgd2lsbCBleHBhbmQgb3IgY29sbGFwc2UuICovXG5cdEBJbnB1dCgpXG5cdGdldCBleHBhbmRNb2RlKCk6IEFjY29yZGlvbkV4cGFuZE1vZGUge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZXhwYW5kTW9kZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZXhwYW5kTW9kZSh2YWx1ZTogQWNjb3JkaW9uRXhwYW5kTW9kZSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5leHBhbmRNb2RlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgbGFuZ3VhZ2UuIFVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCB0aGUgcHJvcGVydHkgbWVzc2FnZXMuICAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbG9jYWxlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sb2NhbGUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGxvY2FsZSh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxvY2FsZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDYWxsYmFjayB1c2VkIHRvIGN1c3RvbWl6ZSB0aGUgZm9ybWF0IG9mIHRoZSBtZXNzYWdlcyB0aGF0IGFyZSByZXR1cm5lZCBmcm9tIHRoZSBMb2NhbGl6YXRpb24gTW9kdWxlLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbG9jYWxpemVGb3JtYXRGdW5jdGlvbigpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubG9jYWxpemVGb3JtYXRGdW5jdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbG9jYWxpemVGb3JtYXRGdW5jdGlvbih2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxvY2FsaXplRm9ybWF0RnVuY3Rpb24gPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIGFuIG9iamVjdCBzcGVjaWZ5aW5nIHN0cmluZ3MgdXNlZCBpbiB0aGUgd2lkZ2V0IHRoYXQgY2FuIGJlIGxvY2FsaXplZC4gVXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZSBwcm9wZXJ0eSBsb2NhbGUuICAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbWVzc2FnZXMoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm1lc3NhZ2VzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBtZXNzYWdlcyh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm1lc3NhZ2VzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgaWYgdGhlIGVsZW1lbnQgaXMgcmVhZG9ubHkgb3Igbm90LiBJZiB0aGUgZWxlbWVudCB0cnVlLCB1c2VycyBjYW5ub3QgaW50ZXJhY3Qgd2l0aCBpdC4gKi9cblx0QElucHV0KClcblx0Z2V0IHJlYWRvbmx5KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmVhZG9ubHkgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHJlYWRvbmx5KHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlYWRvbmx5ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEVuYWJsZXMgb3IgZGlzYWJsZXMgYWNjb3JkaW9uIHJlb3JkZXJpbmcuICovXG5cdEBJbnB1dCgpXG5cdGdldCByZW9yZGVyKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmVvcmRlciA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcmVvcmRlcih2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZW9yZGVyID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgdmFsdWUgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBlbGVtZW50IGlzIGFsaWduZWQgdG8gc3VwcG9ydCBsb2NhbGVzIHVzaW5nIHJpZ2h0LXRvLWxlZnQgZm9udHMuICovXG5cdEBJbnB1dCgpXG5cdGdldCByaWdodFRvTGVmdCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJpZ2h0VG9MZWZ0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCByaWdodFRvTGVmdCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yaWdodFRvTGVmdCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSB0aGVtZS4gVGhlbWUgZGVmaW5lcyB0aGUgbG9vayBvZiB0aGUgZWxlbWVudCAqL1xuXHRASW5wdXQoKVxuXHRnZXQgdGhlbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRoZW1lIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB0aGVtZSh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnRoZW1lID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIERldGVybWluZXMgd2hldGhlciB0aGUgZWxlbWVudCBjYW4gYmUgZm9jdXNlZCBvciBub3QuICovXG5cdEBJbnB1dCgpXG5cdGdldCB1bmZvY3VzYWJsZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnVuZm9jdXNhYmxlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB1bmZvY3VzYWJsZSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC51bmZvY3VzYWJsZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGFuIGl0ZW0gaXMgY29sbGFwc2VkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGNvbnRlbnQsIFx0aW5kZXgsIFx0bGFiZWwpXG5cdCogICBjb250ZW50IC0gVGhlIGNvbnRlbnQgb2YgdGhlIGl0ZW0uXG5cdCogICBpbmRleCAtIFRoZSBpbmRleCBvZiB0aGUgaXRlbS5cblx0KiAgIGxhYmVsIC0gVGhlIGxhYmVsIG9mIHRoZSBpdGVtXG5cdCovXG5cdEBPdXRwdXQoKSBvbkNvbGxhcHNlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhbiBpdGVtIGlzIGdvaW5nIHRvIGJlIGNvbGxhcHNlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRjb250ZW50LCBcdGluZGV4LCBcdGxhYmVsKVxuXHQqICAgY29udGVudCAtIFRoZSBjb250ZW50IG9mIHRoZSBpdGVtLlxuXHQqICAgaW5kZXggLSBUaGUgaW5kZXggb2YgdGhlIGl0ZW0uXG5cdCogICBsYWJlbCAtIFRoZSBsYWJlbCBvZiB0aGUgaXRlbVxuXHQqL1xuXHRAT3V0cHV0KCkgb25Db2xsYXBzaW5nOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhIHJlb3JkZXJpbmcgb3BlcmF0aW9uIGlzIGNvbXBsZXRlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRwb3NpdGlvbiwgXHR0YXJnZXQsIFx0Y29udGVudCwgXHRpbmRleCwgXHRsYWJlbClcblx0KiAgIHBvc2l0aW9uIC0gVGhlIGN1cnJlbnQgdG9wIGFuZCBsZWZ0IHBvc2l0aW9uIG9mIHRoZSBpdGVtIHRoYXQgd2FzIGRyYWdnZWQuXG5cdCogICB0YXJnZXQgLSBUaGUgaXRlbSB0aGF0IHdhcyBkcmFnZ2VkLlxuXHQqICAgY29udGVudCAtIFRoZSBjb250ZW50IG9mIHRoZSBpdGVtLlxuXHQqICAgaW5kZXggLSBUaGUgaW5kZXggb2YgdGhlIGl0ZW0uXG5cdCogICBsYWJlbCAtIFRoZSBsYWJlbCBvZiB0aGUgaXRlbS5cblx0Ki9cblx0QE91dHB1dCgpIG9uRHJhZ0VuZDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gYSByZW9yZGVyaW5nIG9wZXJhdGlvbiBpcyBzdGFydGVkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHBvc2l0aW9uLCBcdHRhcmdldCwgXHRjb250ZW50LCBcdGluZGV4LCBcdGxhYmVsKVxuXHQqICAgcG9zaXRpb24gLSBUaGUgY3VycmVudCB0b3AgYW5kIGxlZnQgcG9zaXRpb24gb2YgdGhlIGl0ZW0gdGhhdCBpcyBhYm91dCB0byBiZSBkcmFnZ2VkLlxuXHQqICAgdGFyZ2V0IC0gVGhlIGl0ZW0gdGhhdCBpcyBhYm91dCB0byBiZSBkcmFnZ2VkLlxuXHQqICAgY29udGVudCAtIFRoZSBjb250ZW50IG9mIHRoZSBpdGVtLlxuXHQqICAgaW5kZXggLSBUaGUgaW5kZXggb2YgdGhlIGl0ZW0uXG5cdCogICBsYWJlbCAtIFRoZSBsYWJlbCBvZiB0aGUgaXRlbS5cblx0Ki9cblx0QE91dHB1dCgpIG9uRHJhZ1N0YXJ0OiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhbiBpdGVtIGlzIGV4cGFuZGVkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdHBvc2l0aW9uLCBcdHRhcmdldCwgXHRjb250ZW50LCBcdGluZGV4LCBcdGxhYmVsKVxuXHQqICAgcG9zaXRpb24gLSBUaGUgY3VycmVudCB0b3AgYW5kIGxlZnQgcG9zaXRpb24gb2YgdGhlIGl0ZW0uXG5cdCogICB0YXJnZXQgLSBUaGUgaXRlbSB0aGF0IHdhcyBkcmFnZ2VkLlxuXHQqICAgY29udGVudCAtIFRoZSBjb250ZW50IG9mIHRoZSBpdGVtLlxuXHQqICAgaW5kZXggLSBUaGUgaW5kZXggb2YgdGhlIGl0ZW0uXG5cdCogICBsYWJlbCAtIFRoZSBsYWJlbCBvZiB0aGUgaXRlbS5cblx0Ki9cblx0QE91dHB1dCgpIG9uRXhwYW5kOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiBhbiBpdGVtIGlzIGdvaW5nIHRvIGJlIGV4cGFuZGVkLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Q3VzdG9tIGV2ZW50IHdhcyBjcmVhdGVkIHdpdGg6IGV2ZW50LmRldGFpbChcdGNvbnRlbnQsIFx0aW5kZXgsIFx0bGFiZWwpXG5cdCogICBjb250ZW50IC0gVGhlIGNvbnRlbnQgb2YgdGhlIGl0ZW0uXG5cdCogICBpbmRleCAtIFRoZSBpbmRleCBvZiB0aGUgaXRlbS5cblx0KiAgIGxhYmVsIC0gVGhlIGxhYmVsIG9mIHRoZSBpdGVtXG5cdCovXG5cdEBPdXRwdXQoKSBvbkV4cGFuZGluZzogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIENvbGxhcHNlcyBhbiBpdGVtIGF0IGEgc3BlY2lmaWVkIGluZGV4LiBcblx0KiBAcGFyYW0ge251bWJlcn0gcG9zaXRpb24uIFRoZSBpbmRleCBvZiB0aGUgY29sbGFwc2VkIGl0ZW0uXG5cdCovXG4gICAgcHVibGljIGNvbGxhcHNlKHBvc2l0aW9uOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY29sbGFwc2UocG9zaXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNvbGxhcHNlKHBvc2l0aW9uKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRXhwYW5kcyBhbiBpdGVtIGF0IGEgc3BlY2lmaWVkIGluZGV4LiBcblx0KiBAcGFyYW0ge251bWJlcn0gcG9zaXRpb24uIFRoZSBpbmRleCBvZiB0aGUgZXhwYW5kZWQgaXRlbS5cblx0Ki9cbiAgICBwdWJsaWMgZXhwYW5kKHBvc2l0aW9uOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZXhwYW5kKHBvc2l0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5leHBhbmQocG9zaXRpb24pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBJbnNlcnRzIGEgbmV3IGl0ZW0gYXQgYSBzcGVjaWZpZWQgaW5kZXguIFxuXHQqIEBwYXJhbSB7bnVtYmVyfSBpbmRleC4gVGhlIGluZGV4IHdoZXJlIHRoZSBpdGVtIG11c3QgYmUgaW5zZXJ0ZWQuXG5cdCogQHBhcmFtIHthbnl9IGl0ZW0uIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSB2YWx1ZXMgZm9yIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBuZXcgaXRlbSB0byBiZSBpbnNlcnRlZC5cblx0Ki9cbiAgICBwdWJsaWMgaW5zZXJ0KGluZGV4OiBudW1iZXIsIGl0ZW06IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5pbnNlcnQoaW5kZXgsIGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lmluc2VydChpbmRleCwgaXRlbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJlbW92ZXMgYW4gaXRlbSBhdCBhIHNwZWNpZmllZCBpbmRleC4gXG5cdCogQHBhcmFtIHtudW1iZXJ9IHBvc2l0aW9uLiBUaGUgaW5kZXggb2YgdGhlIGl0ZW0gdG8gYmUgcmVtb3ZlZC5cblx0Ki9cbiAgICBwdWJsaWMgcmVtb3ZlQXQocG9zaXRpb246IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVBdChwb3NpdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVtb3ZlQXQocG9zaXRpb24pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBVcGRhdGVzIGFuIGl0ZW0gZnJvbSB0aGUgZWxlbWVudC4gXG5cdCogQHBhcmFtIHtudW1iZXJ9IGluZGV4LiBUaGUgaW5kZXggb2YgdGhlIGl0ZW0gdG8gYmUgdXBkYXRlZC5cblx0KiBAcGFyYW0ge2FueX0gc2V0dGluZ3MuIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSB2YWx1ZXMgZm9yIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBpdGVtIHRoYXQgd2lsbCBiZSB1cGRhdGVkLlxuXHQqL1xuICAgIHB1YmxpYyB1cGRhdGUoaW5kZXg6IG51bWJlciwgc2V0dGluZ3M6IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC51cGRhdGUoaW5kZXgsIHNldHRpbmdzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC51cGRhdGUoaW5kZXgsIHNldHRpbmdzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cblx0Z2V0IGlzUmVuZGVyZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkIDogZmFsc2U7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0fVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cbiAgICAgIHRoYXQub25DcmVhdGUuZW1pdCh0aGF0Lm5hdGl2ZUVsZW1lbnQpO1xuXG5cdFx0U21hcnQuUmVuZGVyKCk7XG5cblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc21hcnQtYW5ndWxhcicpO1xuXG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7IHRoYXQub25SZWFkeS5lbWl0KHRoYXQubmF0aXZlRWxlbWVudCk7IH0pO1xuXHRcdHRoaXMubGlzdGVuKCk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLnVubGlzdGVuKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdFx0aWYgKHRoaXMubmF0aXZlRWxlbWVudCAmJiB0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuXHRcdFx0Zm9yIChjb25zdCBwcm9wTmFtZSBpbiBjaGFuZ2VzKSB7XG5cdFx0XHRcdGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuXHRcdFx0XHRcdHRoaXMubmF0aXZlRWxlbWVudFtwcm9wTmFtZV0gPSBjaGFuZ2VzW3Byb3BOYW1lXS5jdXJyZW50VmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEFkZCBldmVudCBsaXN0ZW5lcnMuICovXG5cdHByaXZhdGUgbGlzdGVuKCk6IHZvaWQge1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbGxhcHNlSGFuZGxlciddID0gKGV2ZW50OiBDdXN0b21FdmVudCkgPT4geyB0aGF0Lm9uQ29sbGFwc2UuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29sbGFwc2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbGxhcHNlSGFuZGxlciddKTtcblxuXHRcdHRoYXQuZXZlbnRIYW5kbGVyc1snY29sbGFwc2luZ0hhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNvbGxhcHNpbmcuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29sbGFwc2luZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29sbGFwc2luZ0hhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2RyYWdFbmRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25EcmFnRW5kLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdFbmQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2RyYWdFbmRIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydkcmFnU3RhcnRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25EcmFnU3RhcnQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ1N0YXJ0JywgdGhhdC5ldmVudEhhbmRsZXJzWydkcmFnU3RhcnRIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydleHBhbmRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25FeHBhbmQuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZXhwYW5kJywgdGhhdC5ldmVudEhhbmRsZXJzWydleHBhbmRIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydleHBhbmRpbmdIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25FeHBhbmRpbmcuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZXhwYW5kaW5nJywgdGhhdC5ldmVudEhhbmRsZXJzWydleHBhbmRpbmdIYW5kbGVyJ10pO1xuXG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJlbW92ZSBldmVudCBsaXN0ZW5lcnMuICovXG5cdHByaXZhdGUgdW5saXN0ZW4oKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbGxhcHNlSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY29sbGFwc2UnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2NvbGxhcHNlSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjb2xsYXBzaW5nSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY29sbGFwc2luZycsIHRoYXQuZXZlbnRIYW5kbGVyc1snY29sbGFwc2luZ0hhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snZHJhZ0VuZEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdFbmQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2RyYWdFbmRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2RyYWdTdGFydEhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdTdGFydCcsIHRoYXQuZXZlbnRIYW5kbGVyc1snZHJhZ1N0YXJ0SGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydleHBhbmRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdleHBhbmQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2V4cGFuZEhhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snZXhwYW5kaW5nSGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXhwYW5kaW5nJywgdGhhdC5ldmVudEhhbmRsZXJzWydleHBhbmRpbmdIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHR9XG59XG4iXX0=