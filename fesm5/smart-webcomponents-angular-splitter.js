
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.splitter';

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

var SplitterComponent = /** @class */ (function (_super) {
    __extends(SplitterComponent, _super);
    function SplitterComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        /** @description This event is triggered when splitter item is collapsed.
        *  @param event. The custom event. 	*/
        _this.onCollapse = new EventEmitter();
        /** @description This event is triggered when splitter item is expanded.
        *  @param event. The custom event. 	*/
        _this.onExpand = new EventEmitter();
        /** @description This event is triggered when splitter resizing begins.
        *  @param event. The custom event. 	*/
        _this.onResizeStart = new EventEmitter();
        /** @description This event is triggered when splitter resizing finishes.
        *  @param event. The custom event. 	*/
        _this.onResizeEnd = new EventEmitter();
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    SplitterComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('smart-splitter');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(SplitterComponent.prototype, "animation", {
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
    Object.defineProperty(SplitterComponent.prototype, "autoFitMode", {
        /** @description Determines how the items are arranged inside the Splitter. Possible values:   end - all items will fit the size of the Splitter. When inserting a new item the space required for the item to fit will be deducted from it's neighbour. proportional - all items will fit the size of the Splitter. When inserting a new item the space required for it to fit will be the result from the proportional deduction of the size from the rest of the items inside the element. overflow - the items inside the Splitter will not fit it's size. Instead they overflow by taking the exact amount of space they need and a scrollbar is displayed in order to view the content. */
        get: function () {
            return this.nativeElement ? this.nativeElement.autoFitMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.autoFitMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SplitterComponent.prototype, "disabled", {
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
    Object.defineProperty(SplitterComponent.prototype, "dataSource", {
        /** @description Sets or gets splitter's data source. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dataSource : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dataSource = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SplitterComponent.prototype, "items", {
        /** @description A getter that returns an array of all Splitter items. */
        get: function () {
            return this.nativeElement ? this.nativeElement.items : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.items = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SplitterComponent.prototype, "keepProportionsOnResize", {
        /** @description If set the element keeps the same proportions of the items after the whole element has been resized regardless of the size property unit ( pixels or percentages) of the items. */
        get: function () {
            return this.nativeElement ? this.nativeElement.keepProportionsOnResize : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.keepProportionsOnResize = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SplitterComponent.prototype, "locale", {
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
    Object.defineProperty(SplitterComponent.prototype, "localizeFormatFunction", {
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
    Object.defineProperty(SplitterComponent.prototype, "messages", {
        /** @description Sets an object with string values, related to the different states of passwords strength. */
        get: function () {
            return this.nativeElement ? this.nativeElement.messages : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.messages = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SplitterComponent.prototype, "orientation", {
        /** @description Sets or gets splitter's orientation. */
        get: function () {
            return this.nativeElement ? this.nativeElement.orientation : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.orientation = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SplitterComponent.prototype, "readonly", {
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
    Object.defineProperty(SplitterComponent.prototype, "resizeMode", {
        /** @description Determines the resize mode of the splitter. Possible values are:  - None - resizing is disabled.  - Adjacent - only the two adjacent items between the target splitter bar are being affected. This is the default behavior.  - End - only the first item( left or top according to the orientation) of the target Splitter bar and the last item are affected.  Proportional - all of the items positioned in the direction to which the splitter bar is dragged will be affected. For example, when a splitter bar is dragged to the right all the items positioned on it's the right side will be affected. The items will obtain a proportional size corresponding to their current size. */
        get: function () {
            return this.nativeElement ? this.nativeElement.resizeMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.resizeMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SplitterComponent.prototype, "resizeStep", {
        /** @description Determines the resize step during reisizing */
        get: function () {
            return this.nativeElement ? this.nativeElement.resizeStep : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.resizeStep = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SplitterComponent.prototype, "rightToLeft", {
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
    Object.defineProperty(SplitterComponent.prototype, "liveResize", {
        /** @description When enabled the resizing operation happens live. By default this feature is not enabled and the user sees a hightlighted bar while dragging instead of the actual splitter bar. */
        get: function () {
            return this.nativeElement ? this.nativeElement.liveResize : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.liveResize = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SplitterComponent.prototype, "theme", {
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
    Object.defineProperty(SplitterComponent.prototype, "unfocusable", {
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
    /** @description Appends a new node.
    * @param {Node} node. The node to append
    */
    SplitterComponent.prototype.appendChild = function (node) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.appendChild(node);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.appendChild(node);
            });
        }
    };
    /** @description Collapses splitter item.
    * @param {any} item. number indicating the index of the item or an isntance of JQX.SplitterItem
    * @param {boolean} far?. Indicates whether the item should collapse to it's far or near side
    */
    SplitterComponent.prototype.collapse = function (item, far) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapse(item, far);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.collapse(item, far);
            });
        }
    };
    /** @description Expands the splitter item if possible (if there's enough space available).
    * @param {any} item. number indicating the index of the item or an isntance of JQX.SplitterItem
    */
    SplitterComponent.prototype.expand = function (item) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.expand(item);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.expand(item);
            });
        }
    };
    /** @description Hides a splitter bar
    * @param {number} splitterBar. A JQX.SplitterBar instance.
    * @returns {number}
  */
    SplitterComponent.prototype.hideBar = function (splitterBar) {
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.hideBar(splitterBar);
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
    /** @description Insert a new Splitter item at a given position.
    * @param {number} index. The index at which a new item will be inserted.
    * @param {any} details. An Object or string used as content if the splitter item.
    */
    SplitterComponent.prototype.insert = function (index, details) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.insert(index, details);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.insert(index, details);
            });
        }
    };
    /** @description Inserts the specified "smart-splitter-item" node before the reference "smart-splitter-item" node.
    * @param {Node} newNode. The  "smart-splitter-item" node to insert.
    * @param {Node | null} referenceNode?. The "smart-splitter-item" node before which newNode is inserted.
    * @returns {Node}
  */
    SplitterComponent.prototype.insertBefore = function (newNode, referenceNode) {
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.insertBefore(newNode, referenceNode);
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
    /** @description Locks a splitter item so it's size can't change.
    * @param {number} index. The index of a Splitter Bar or it's instance.
    */
    SplitterComponent.prototype.lockItem = function (index) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.lockItem(index);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.lockItem(index);
            });
        }
    };
    /** @description Locks a splitter bar so it can't be dragged.
    * @param {number} index. The index of a Splitter Bar or it's instance.
    */
    SplitterComponent.prototype.lockBar = function (index) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.lockBar(index);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.lockBar(index);
            });
        }
    };
    /** @description Removes a Splitter item.
    * @param {number} index. An item to be removed.
    */
    SplitterComponent.prototype.removeAt = function (index) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeAt(index);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.removeAt(index);
            });
        }
    };
    /** @description Removes all items from the Splitter
    */
    SplitterComponent.prototype.removeAll = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeAll();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.removeAll();
            });
        }
    };
    /** @description Removes a child "smart-splitter-item" node.
    * @param {Node} node. The "smart-splitter-item" node to remove.
    * @returns {Node}
  */
    SplitterComponent.prototype.removeChild = function (node) {
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
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
    /** @description Refreshes the Splitter
    */
    SplitterComponent.prototype.refresh = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.refresh();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.refresh();
            });
        }
    };
    /** @description Unhides a Splitter Bar
    * @param {number} splitterBar. An instance of a splitter bar.
    */
    SplitterComponent.prototype.showBar = function (splitterBar) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.showBar(splitterBar);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.showBar(splitterBar);
            });
        }
    };
    /** @description Unlocks a previously locked splitter item.
    * @param {number} item. The index of a Splitter Item or it's instance.
    */
    SplitterComponent.prototype.unlockItem = function (item) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.unlockItem(item);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.unlockItem(item);
            });
        }
    };
    /** @description Unlocks a previously locked splitter bar.
    * @param {number} item. The index of a Splitter Bar or it's instance.
    */
    SplitterComponent.prototype.unlockBar = function (item) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.unlockBar(item);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.unlockBar(item);
            });
        }
    };
    /** @description Updates the properties of a Splitter item inside the Splitter.
    * @param {any} item. The index of a JQX.SplitterItem or it's instance.
    * @param {any} settings. An object containing the properties of a JQX.SplitterItem.
    */
    SplitterComponent.prototype.update = function (item, settings) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.update(item, settings);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.update(item, settings);
            });
        }
    };
    Object.defineProperty(SplitterComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    SplitterComponent.prototype.ngOnInit = function () {
    };
    SplitterComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        this.listen();
    };
    SplitterComponent.prototype.ngOnDestroy = function () {
        this.unlisten();
    };
    SplitterComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    /** @description Add event listeners. */
    SplitterComponent.prototype.listen = function () {
        var that = this;
        that.eventHandlers['collapseHandler'] = function (event) { that.onCollapse.emit(event); };
        that.nativeElement.addEventListener('collapse', that.eventHandlers['collapseHandler']);
        that.eventHandlers['expandHandler'] = function (event) { that.onExpand.emit(event); };
        that.nativeElement.addEventListener('expand', that.eventHandlers['expandHandler']);
        that.eventHandlers['resizeStartHandler'] = function (event) { that.onResizeStart.emit(event); };
        that.nativeElement.addEventListener('resizeStart', that.eventHandlers['resizeStartHandler']);
        that.eventHandlers['resizeEndHandler'] = function (event) { that.onResizeEnd.emit(event); };
        that.nativeElement.addEventListener('resizeEnd', that.eventHandlers['resizeEndHandler']);
    };
    /** @description Remove event listeners. */
    SplitterComponent.prototype.unlisten = function () {
        var that = this;
        if (that.eventHandlers['collapseHandler']) {
            that.nativeElement.removeEventListener('collapse', that.eventHandlers['collapseHandler']);
        }
        if (that.eventHandlers['expandHandler']) {
            that.nativeElement.removeEventListener('expand', that.eventHandlers['expandHandler']);
        }
        if (that.eventHandlers['resizeStartHandler']) {
            that.nativeElement.removeEventListener('resizeStart', that.eventHandlers['resizeStartHandler']);
        }
        if (that.eventHandlers['resizeEndHandler']) {
            that.nativeElement.removeEventListener('resizeEnd', that.eventHandlers['resizeEndHandler']);
        }
    };
    SplitterComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], SplitterComponent.prototype, "animation", null);
    __decorate([
        Input()
    ], SplitterComponent.prototype, "autoFitMode", null);
    __decorate([
        Input()
    ], SplitterComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], SplitterComponent.prototype, "dataSource", null);
    __decorate([
        Input()
    ], SplitterComponent.prototype, "items", null);
    __decorate([
        Input()
    ], SplitterComponent.prototype, "keepProportionsOnResize", null);
    __decorate([
        Input()
    ], SplitterComponent.prototype, "locale", null);
    __decorate([
        Input()
    ], SplitterComponent.prototype, "localizeFormatFunction", null);
    __decorate([
        Input()
    ], SplitterComponent.prototype, "messages", null);
    __decorate([
        Input()
    ], SplitterComponent.prototype, "orientation", null);
    __decorate([
        Input()
    ], SplitterComponent.prototype, "readonly", null);
    __decorate([
        Input()
    ], SplitterComponent.prototype, "resizeMode", null);
    __decorate([
        Input()
    ], SplitterComponent.prototype, "resizeStep", null);
    __decorate([
        Input()
    ], SplitterComponent.prototype, "rightToLeft", null);
    __decorate([
        Input()
    ], SplitterComponent.prototype, "liveResize", null);
    __decorate([
        Input()
    ], SplitterComponent.prototype, "theme", null);
    __decorate([
        Input()
    ], SplitterComponent.prototype, "unfocusable", null);
    __decorate([
        Output()
    ], SplitterComponent.prototype, "onCollapse", void 0);
    __decorate([
        Output()
    ], SplitterComponent.prototype, "onExpand", void 0);
    __decorate([
        Output()
    ], SplitterComponent.prototype, "onResizeStart", void 0);
    __decorate([
        Output()
    ], SplitterComponent.prototype, "onResizeEnd", void 0);
    SplitterComponent = __decorate([
        Directive({
            exportAs: 'smart-splitter', selector: 'smart-splitter, [smart-splitter]'
        })
    ], SplitterComponent);
    return SplitterComponent;
}(BaseElement));

var SplitterItemComponent = /** @class */ (function (_super) {
    __extends(SplitterItemComponent, _super);
    function SplitterItemComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    SplitterItemComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('smart-splitter-item');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(SplitterItemComponent.prototype, "disabled", {
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
    Object.defineProperty(SplitterItemComponent.prototype, "collapsed", {
        /** @description Determines of the item is collapsed or not. */
        get: function () {
            return this.nativeElement ? this.nativeElement.collapsed : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.collapsed = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SplitterItemComponent.prototype, "collapsible", {
        /** @description Determines of the item can be collapsed. If set to false, the item can't be collapsed */
        get: function () {
            return this.nativeElement ? this.nativeElement.collapsible : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.collapsible = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SplitterItemComponent.prototype, "content", {
        /** @description Determines the content of the splitter items */
        get: function () {
            return this.nativeElement ? this.nativeElement.content : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.content = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SplitterItemComponent.prototype, "locked", {
        /** @description Determines of the item can be resized or not. */
        get: function () {
            return this.nativeElement ? this.nativeElement.locked : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.locked = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SplitterItemComponent.prototype, "max", {
        /** @description Determines the max size of the item. */
        get: function () {
            return this.nativeElement ? this.nativeElement.max : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.max = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SplitterItemComponent.prototype, "min", {
        /** @description Determines the min size of the item */
        get: function () {
            return this.nativeElement ? this.nativeElement.min : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.min = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SplitterItemComponent.prototype, "size", {
        /** @description Determines the size of the item. */
        get: function () {
            return this.nativeElement ? this.nativeElement.size : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.size = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /** @description Collapses the item.
    * @param {string} far. If set to true the item will collapse to it's far side ( to the right for vertical splitter and down for horizontal)
    */
    SplitterItemComponent.prototype.collapse = function (far) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapse(far);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.collapse(far);
            });
        }
    };
    /** @description Expands the item if it's collapsed.
    */
    SplitterItemComponent.prototype.expand = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.expand();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.expand();
            });
        }
    };
    /** @description Locks the item so it can no longer change it's size.
    */
    SplitterItemComponent.prototype.lock = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.lock();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.lock();
            });
        }
    };
    /** @description Unlocks a previously locked item.
    */
    SplitterItemComponent.prototype.unlock = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.unlock();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.unlock();
            });
        }
    };
    Object.defineProperty(SplitterItemComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    SplitterItemComponent.prototype.ngOnInit = function () {
    };
    SplitterItemComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
    };
    SplitterItemComponent.prototype.ngOnDestroy = function () { };
    SplitterItemComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    SplitterItemComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], SplitterItemComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], SplitterItemComponent.prototype, "collapsed", null);
    __decorate([
        Input()
    ], SplitterItemComponent.prototype, "collapsible", null);
    __decorate([
        Input()
    ], SplitterItemComponent.prototype, "content", null);
    __decorate([
        Input()
    ], SplitterItemComponent.prototype, "locked", null);
    __decorate([
        Input()
    ], SplitterItemComponent.prototype, "max", null);
    __decorate([
        Input()
    ], SplitterItemComponent.prototype, "min", null);
    __decorate([
        Input()
    ], SplitterItemComponent.prototype, "size", null);
    SplitterItemComponent = __decorate([
        Directive({
            exportAs: 'smart-splitter-item', selector: 'smart-splitter-item, [smart-splitter-item]'
        })
    ], SplitterItemComponent);
    return SplitterItemComponent;
}(BaseElement));

var SplitterBarComponent = /** @class */ (function (_super) {
    __extends(SplitterBarComponent, _super);
    function SplitterBarComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    SplitterBarComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('smart-splitter-bar');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    /** @description Hides the splitter bar.
    */
    SplitterBarComponent.prototype.hide = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.hide();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.hide();
            });
        }
    };
    /** @description Unhides a splitter bar.
    */
    SplitterBarComponent.prototype.show = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.show();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.show();
            });
        }
    };
    /** @description Locks the splitter bar.
    */
    SplitterBarComponent.prototype.lock = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.lock();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.lock();
            });
        }
    };
    /** @description Unlocks the splitter bar.
    */
    SplitterBarComponent.prototype.unlock = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.unlock();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.unlock();
            });
        }
    };
    Object.defineProperty(SplitterBarComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    SplitterBarComponent.prototype.ngOnInit = function () {
    };
    SplitterBarComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
    };
    SplitterBarComponent.prototype.ngOnDestroy = function () { };
    SplitterBarComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    SplitterBarComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    SplitterBarComponent = __decorate([
        Directive({
            exportAs: 'smart-splitter-bar', selector: 'smart-splitter-bar, [smart-splitter-bar]'
        })
    ], SplitterBarComponent);
    return SplitterBarComponent;
}(BaseElement));

var SplitterModule = /** @class */ (function () {
    function SplitterModule() {
    }
    SplitterModule = __decorate([
        NgModule({
            declarations: [SplitterComponent, SplitterItemComponent, SplitterBarComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            exports: [SplitterComponent, SplitterItemComponent, SplitterBarComponent]
        })
    ], SplitterModule);
    return SplitterModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { Smart, SplitterBarComponent, SplitterComponent, SplitterItemComponent, SplitterModule, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-splitter.js.map
