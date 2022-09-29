
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.button';

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

var DropDownButtonComponent = /** @class */ (function (_super) {
    __extends(DropDownButtonComponent, _super);
    function DropDownButtonComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        /** @description This event is triggered when user clicks on the action button. The action button is visible when the placeholder is set.
        *  @param event. The custom event. 	*/
        _this.onActionButtonClick = new EventEmitter();
        /** @description This event is triggered when the drop down is closed.
        *  @param event. The custom event. 	*/
        _this.onClose = new EventEmitter();
        /** @description This event is triggered when the drop down list is about to be closed. This event allows to cancel the closing operation calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	*/
        _this.onClosing = new EventEmitter();
        /** @description This event is triggered when user clicks on the drop down button.
        *  @param event. The custom event. 	*/
        _this.onDropDownButtonClick = new EventEmitter();
        /** @description This event is triggered when the drop down is opened.
        *  @param event. The custom event. 	*/
        _this.onOpen = new EventEmitter();
        /** @description This event is triggered when the drop down is about to be opened. This event allows to cancel the opening operation calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	*/
        _this.onOpening = new EventEmitter();
        /** @description This event is triggered when user starts resizing the drop down.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	position)
        *   position - An object containing the current left and top positions of the drop down.
        */
        _this.onResizeStart = new EventEmitter();
        /** @description This event is triggered when user finishes resizing the drop down.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	position)
        *   position - An object containing the current left and top positions of the drop down.
        */
        _this.onResizeEnd = new EventEmitter();
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    DropDownButtonComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('smart-drop-down-button');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(DropDownButtonComponent.prototype, "animation", {
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
    Object.defineProperty(DropDownButtonComponent.prototype, "autoCloseDelay", {
        /** @description Determines the delay before the opened drop down closes when dropDownOpenMode is set to 'auto'. */
        get: function () {
            return this.nativeElement ? this.nativeElement.autoCloseDelay : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.autoCloseDelay = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownButtonComponent.prototype, "disabled", {
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
    Object.defineProperty(DropDownButtonComponent.prototype, "dropDownAppendTo", {
        /** @description Sets the parent container of the dropDown (the popup). Used when a CSS property of unknowned parent is interfering with the visibility of the dropDown. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dropDownAppendTo : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dropDownAppendTo = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownButtonComponent.prototype, "dropDownButtonPosition", {
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
    Object.defineProperty(DropDownButtonComponent.prototype, "dropDownHeight", {
        /** @description Sets the height of the drop down. Default value of empty string means that CSS variables are used. This property should be used when the browser doesn't support CSS variables. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dropDownHeight : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dropDownHeight = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownButtonComponent.prototype, "dropDownMaxHeight", {
        /** @description Sets the max height of the drop down. Default value of empty string means that CSS variables are used. This property should be used when the browser doesn't support CSS variables. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dropDownMaxHeight : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dropDownMaxHeight = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownButtonComponent.prototype, "dropDownMaxWidth", {
        /** @description Sets the max width of the drop down. Default value of empty string means that CSS variables are used. This property should be used when the browser doesn't support CSS variables. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dropDownMaxWidth : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dropDownMaxWidth = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownButtonComponent.prototype, "dropDownMinHeight", {
        /** @description Sets the min height of the drop down. Default value of empty string means that CSS variables are used. This property should be used when the browser doesn't support CSS variables. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dropDownMinHeight : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dropDownMinHeight = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownButtonComponent.prototype, "dropDownMinWidth", {
        /** @description Sets the min width of the drop down. Default value of empty string means that CSS variables are used. This property should be used when the browser doesn't support CSS variables. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dropDownMinWidth : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dropDownMinWidth = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownButtonComponent.prototype, "dropDownOpenMode", {
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
    Object.defineProperty(DropDownButtonComponent.prototype, "dropDownOverlay", {
        /** @description If this property is enabled, when the element's dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dropDownOverlay : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dropDownOverlay = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownButtonComponent.prototype, "dropDownPlaceholder", {
        /** @description Sets a placeholder text to appear when there is no content inside the dropdown. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dropDownPlaceholder : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dropDownPlaceholder = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownButtonComponent.prototype, "dropDownPosition", {
        /** @description Determines the vertical position of the dropDown. 'Auto' means its automatically determined depending on the viewport size. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dropDownPosition : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dropDownPosition = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownButtonComponent.prototype, "dropDownWidth", {
        /** @description Sets the width of the drop down. Default value of empty string means that CSS variables are used. This property should be used when the browser doesn't support CSS variables. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dropDownWidth : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dropDownWidth = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownButtonComponent.prototype, "hint", {
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
    Object.defineProperty(DropDownButtonComponent.prototype, "horizontalScrollBarVisibility", {
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
    Object.defineProperty(DropDownButtonComponent.prototype, "label", {
        /** @description Sets a label above the element. The label is always visible. */
        get: function () {
            return this.nativeElement ? this.nativeElement.label : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.label = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownButtonComponent.prototype, "locale", {
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
    Object.defineProperty(DropDownButtonComponent.prototype, "localizeFormatFunction", {
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
    Object.defineProperty(DropDownButtonComponent.prototype, "messages", {
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
    Object.defineProperty(DropDownButtonComponent.prototype, "opened", {
        /** @description Determines whether the popup is opened or closed */
        get: function () {
            return this.nativeElement ? this.nativeElement.opened : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.opened = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownButtonComponent.prototype, "placeholder", {
        /** @description Determines the element's placeholder, displayed in the element's action button container. */
        get: function () {
            return this.nativeElement ? this.nativeElement.placeholder : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.placeholder = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownButtonComponent.prototype, "placeholderTemplate", {
        /** @description Determines the element's placeholder template, displayed in the element's action button container. You can pass 'string', 'function' or HTMLTemplateElement as a value. */
        get: function () {
            return this.nativeElement ? this.nativeElement.placeholderTemplate : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.placeholderTemplate = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownButtonComponent.prototype, "readonly", {
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
    Object.defineProperty(DropDownButtonComponent.prototype, "resizeIndicator", {
        /** @description Determines whether the resize indicator in the bottom right corner is visible or not. */
        get: function () {
            return this.nativeElement ? this.nativeElement.resizeIndicator : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.resizeIndicator = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownButtonComponent.prototype, "resizeMode", {
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
    Object.defineProperty(DropDownButtonComponent.prototype, "rightToLeft", {
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
    Object.defineProperty(DropDownButtonComponent.prototype, "theme", {
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
    Object.defineProperty(DropDownButtonComponent.prototype, "unfocusable", {
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
    Object.defineProperty(DropDownButtonComponent.prototype, "verticalScrollBarVisibility", {
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
    /** @description Appends a new HTML node to the drop down.
    * @param {Node} node. The node to be appended
    * @returns {Node}
  */
    DropDownButtonComponent.prototype.appendChild = function (node) {
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
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
    /** @description Closes the dropDown.
    */
    DropDownButtonComponent.prototype.close = function () {
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
    /** @description Opens the dropDown.
    */
    DropDownButtonComponent.prototype.open = function () {
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
    /** @description Removes everything from the drop down.
    */
    DropDownButtonComponent.prototype.removeAll = function () {
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
    /** @description Removes a child node from the drop down.
    * @param {Node} node. The node to remove.
    * @returns {Node}
  */
    DropDownButtonComponent.prototype.removeChild = function (node) {
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
    /** @description Scrolls the drop down to a specific position.
    * @param {number} top. Y axis coordinate
    * @param {number} left. X axis coordinate
    */
    DropDownButtonComponent.prototype.scrollTo = function (top, left) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.scrollTo(top, left);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.scrollTo(top, left);
            });
        }
    };
    Object.defineProperty(DropDownButtonComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    DropDownButtonComponent.prototype.ngOnInit = function () {
    };
    DropDownButtonComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        this.listen();
    };
    DropDownButtonComponent.prototype.ngOnDestroy = function () {
        this.unlisten();
    };
    DropDownButtonComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    /** @description Add event listeners. */
    DropDownButtonComponent.prototype.listen = function () {
        var that = this;
        that.eventHandlers['actionButtonClickHandler'] = function (event) { that.onActionButtonClick.emit(event); };
        that.nativeElement.addEventListener('actionButtonClick', that.eventHandlers['actionButtonClickHandler']);
        that.eventHandlers['closeHandler'] = function (event) { that.onClose.emit(event); };
        that.nativeElement.addEventListener('close', that.eventHandlers['closeHandler']);
        that.eventHandlers['closingHandler'] = function (event) { that.onClosing.emit(event); };
        that.nativeElement.addEventListener('closing', that.eventHandlers['closingHandler']);
        that.eventHandlers['dropDownButtonClickHandler'] = function (event) { that.onDropDownButtonClick.emit(event); };
        that.nativeElement.addEventListener('dropDownButtonClick', that.eventHandlers['dropDownButtonClickHandler']);
        that.eventHandlers['openHandler'] = function (event) { that.onOpen.emit(event); };
        that.nativeElement.addEventListener('open', that.eventHandlers['openHandler']);
        that.eventHandlers['openingHandler'] = function (event) { that.onOpening.emit(event); };
        that.nativeElement.addEventListener('opening', that.eventHandlers['openingHandler']);
        that.eventHandlers['resizeStartHandler'] = function (event) { that.onResizeStart.emit(event); };
        that.nativeElement.addEventListener('resizeStart', that.eventHandlers['resizeStartHandler']);
        that.eventHandlers['resizeEndHandler'] = function (event) { that.onResizeEnd.emit(event); };
        that.nativeElement.addEventListener('resizeEnd', that.eventHandlers['resizeEndHandler']);
    };
    /** @description Remove event listeners. */
    DropDownButtonComponent.prototype.unlisten = function () {
        var that = this;
        if (that.eventHandlers['actionButtonClickHandler']) {
            that.nativeElement.removeEventListener('actionButtonClick', that.eventHandlers['actionButtonClickHandler']);
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
    };
    DropDownButtonComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], DropDownButtonComponent.prototype, "animation", null);
    __decorate([
        Input()
    ], DropDownButtonComponent.prototype, "autoCloseDelay", null);
    __decorate([
        Input()
    ], DropDownButtonComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], DropDownButtonComponent.prototype, "dropDownAppendTo", null);
    __decorate([
        Input()
    ], DropDownButtonComponent.prototype, "dropDownButtonPosition", null);
    __decorate([
        Input()
    ], DropDownButtonComponent.prototype, "dropDownHeight", null);
    __decorate([
        Input()
    ], DropDownButtonComponent.prototype, "dropDownMaxHeight", null);
    __decorate([
        Input()
    ], DropDownButtonComponent.prototype, "dropDownMaxWidth", null);
    __decorate([
        Input()
    ], DropDownButtonComponent.prototype, "dropDownMinHeight", null);
    __decorate([
        Input()
    ], DropDownButtonComponent.prototype, "dropDownMinWidth", null);
    __decorate([
        Input()
    ], DropDownButtonComponent.prototype, "dropDownOpenMode", null);
    __decorate([
        Input()
    ], DropDownButtonComponent.prototype, "dropDownOverlay", null);
    __decorate([
        Input()
    ], DropDownButtonComponent.prototype, "dropDownPlaceholder", null);
    __decorate([
        Input()
    ], DropDownButtonComponent.prototype, "dropDownPosition", null);
    __decorate([
        Input()
    ], DropDownButtonComponent.prototype, "dropDownWidth", null);
    __decorate([
        Input()
    ], DropDownButtonComponent.prototype, "hint", null);
    __decorate([
        Input()
    ], DropDownButtonComponent.prototype, "horizontalScrollBarVisibility", null);
    __decorate([
        Input()
    ], DropDownButtonComponent.prototype, "label", null);
    __decorate([
        Input()
    ], DropDownButtonComponent.prototype, "locale", null);
    __decorate([
        Input()
    ], DropDownButtonComponent.prototype, "localizeFormatFunction", null);
    __decorate([
        Input()
    ], DropDownButtonComponent.prototype, "messages", null);
    __decorate([
        Input()
    ], DropDownButtonComponent.prototype, "opened", null);
    __decorate([
        Input()
    ], DropDownButtonComponent.prototype, "placeholder", null);
    __decorate([
        Input()
    ], DropDownButtonComponent.prototype, "placeholderTemplate", null);
    __decorate([
        Input()
    ], DropDownButtonComponent.prototype, "readonly", null);
    __decorate([
        Input()
    ], DropDownButtonComponent.prototype, "resizeIndicator", null);
    __decorate([
        Input()
    ], DropDownButtonComponent.prototype, "resizeMode", null);
    __decorate([
        Input()
    ], DropDownButtonComponent.prototype, "rightToLeft", null);
    __decorate([
        Input()
    ], DropDownButtonComponent.prototype, "theme", null);
    __decorate([
        Input()
    ], DropDownButtonComponent.prototype, "unfocusable", null);
    __decorate([
        Input()
    ], DropDownButtonComponent.prototype, "verticalScrollBarVisibility", null);
    __decorate([
        Output()
    ], DropDownButtonComponent.prototype, "onActionButtonClick", void 0);
    __decorate([
        Output()
    ], DropDownButtonComponent.prototype, "onClose", void 0);
    __decorate([
        Output()
    ], DropDownButtonComponent.prototype, "onClosing", void 0);
    __decorate([
        Output()
    ], DropDownButtonComponent.prototype, "onDropDownButtonClick", void 0);
    __decorate([
        Output()
    ], DropDownButtonComponent.prototype, "onOpen", void 0);
    __decorate([
        Output()
    ], DropDownButtonComponent.prototype, "onOpening", void 0);
    __decorate([
        Output()
    ], DropDownButtonComponent.prototype, "onResizeStart", void 0);
    __decorate([
        Output()
    ], DropDownButtonComponent.prototype, "onResizeEnd", void 0);
    DropDownButtonComponent = __decorate([
        Directive({
            exportAs: 'smart-drop-down-button', selector: 'smart-drop-down-button, [smart-drop-down-button]'
        })
    ], DropDownButtonComponent);
    return DropDownButtonComponent;
}(BaseElement));

var DropDownButtonModule = /** @class */ (function () {
    function DropDownButtonModule() {
    }
    DropDownButtonModule = __decorate([
        NgModule({
            declarations: [DropDownButtonComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            exports: [DropDownButtonComponent]
        })
    ], DropDownButtonModule);
    return DropDownButtonModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DropDownButtonComponent, DropDownButtonModule, Smart, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-dropdownbutton.js.map
