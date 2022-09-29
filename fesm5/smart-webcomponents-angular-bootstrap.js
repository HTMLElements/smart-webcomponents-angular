
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.bootstrap';

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

var BootstrapButtonComponent = /** @class */ (function (_super) {
    __extends(BootstrapButtonComponent, _super);
    function BootstrapButtonComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        /** @description Click event.
        *  @param event. The custom event. 	*/
        _this.onClick = new EventEmitter();
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    BootstrapButtonComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('bootstrap-button');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(BootstrapButtonComponent.prototype, "disabled", {
        /** @description Enables or disables the button.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.disabled : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disabled = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapButtonComponent.prototype, "innerHTML", {
        /** @description Sets the inner HTML of the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.innerHTML : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.innerHTML = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapButtonComponent.prototype, "name", {
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
    Object.defineProperty(BootstrapButtonComponent.prototype, "outlined", {
        /** @description Outlines the button.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.outlined : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.outlined = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapButtonComponent.prototype, "styleMode", {
        /** @description Sets or gets the style mode of the button. */
        get: function () {
            return this.nativeElement ? this.nativeElement.styleMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.styleMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapButtonComponent.prototype, "sizeMode", {
        /** @description Sets or gets the size mode of the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.sizeMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.sizeMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapButtonComponent.prototype, "type", {
        /** @description Sets or gets the type of the button. */
        get: function () {
            return this.nativeElement ? this.nativeElement.type : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.type = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapButtonComponent.prototype, "value", {
        /** @description Sets or gets the button's value.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.value : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.value = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapButtonComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    BootstrapButtonComponent.prototype.ngOnInit = function () {
    };
    BootstrapButtonComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        this.listen();
    };
    BootstrapButtonComponent.prototype.ngOnDestroy = function () {
        this.unlisten();
    };
    BootstrapButtonComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    /** @description Add event listeners. */
    BootstrapButtonComponent.prototype.listen = function () {
        var that = this;
        that.eventHandlers['clickHandler'] = function (event) { that.onClick.emit(event); };
        that.nativeElement.addEventListener('click', that.eventHandlers['clickHandler']);
    };
    /** @description Remove event listeners. */
    BootstrapButtonComponent.prototype.unlisten = function () {
        var that = this;
        if (that.eventHandlers['clickHandler']) {
            that.nativeElement.removeEventListener('click', that.eventHandlers['clickHandler']);
        }
    };
    BootstrapButtonComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], BootstrapButtonComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], BootstrapButtonComponent.prototype, "innerHTML", null);
    __decorate([
        Input()
    ], BootstrapButtonComponent.prototype, "name", null);
    __decorate([
        Input()
    ], BootstrapButtonComponent.prototype, "outlined", null);
    __decorate([
        Input()
    ], BootstrapButtonComponent.prototype, "styleMode", null);
    __decorate([
        Input()
    ], BootstrapButtonComponent.prototype, "sizeMode", null);
    __decorate([
        Input()
    ], BootstrapButtonComponent.prototype, "type", null);
    __decorate([
        Input()
    ], BootstrapButtonComponent.prototype, "value", null);
    __decorate([
        Output()
    ], BootstrapButtonComponent.prototype, "onClick", void 0);
    BootstrapButtonComponent = __decorate([
        Directive({
            exportAs: 'bootstrap-button', selector: 'bootstrap-button, [bootstrap-button]'
        })
    ], BootstrapButtonComponent);
    return BootstrapButtonComponent;
}(BaseElement));

var BootstrapCheckBoxComponent = /** @class */ (function (_super) {
    __extends(BootstrapCheckBoxComponent, _super);
    function BootstrapCheckBoxComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        /** @description Change event is triggered when the value of the checkbox is changed.
        *  @param event. The custom event. 	*/
        _this.onChange = new EventEmitter();
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    BootstrapCheckBoxComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('bootstrap-check-box');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(BootstrapCheckBoxComponent.prototype, "checked", {
        /** @description Gets or sets the checked state of the element.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.checked : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.checked = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapCheckBoxComponent.prototype, "disabled", {
        /** @description Enables or disables the element.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.disabled : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disabled = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapCheckBoxComponent.prototype, "indeterminate", {
        /** @description Gets or sets whether the element is in indeterminate state.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.indeterminate : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.indeterminate = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapCheckBoxComponent.prototype, "innerHTML", {
        /** @description Sets the inner HTML of the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.innerHTML : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.innerHTML = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapCheckBoxComponent.prototype, "name", {
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
    Object.defineProperty(BootstrapCheckBoxComponent.prototype, "required", {
        /** @description Gets or sets whether the element is required.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.required : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.required = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapCheckBoxComponent.prototype, "styleMode", {
        /** @description Sets or gets the style mode of the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.styleMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.styleMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /** @description Toggles the checkbox
    */
    BootstrapCheckBoxComponent.prototype.toggle = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.toggle();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.toggle();
            });
        }
    };
    Object.defineProperty(BootstrapCheckBoxComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    BootstrapCheckBoxComponent.prototype.ngOnInit = function () {
    };
    BootstrapCheckBoxComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        this.listen();
    };
    BootstrapCheckBoxComponent.prototype.ngOnDestroy = function () {
        this.unlisten();
    };
    BootstrapCheckBoxComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    /** @description Add event listeners. */
    BootstrapCheckBoxComponent.prototype.listen = function () {
        var that = this;
        that.eventHandlers['changeHandler'] = function (event) { that.onChange.emit(event); };
        that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
    };
    /** @description Remove event listeners. */
    BootstrapCheckBoxComponent.prototype.unlisten = function () {
        var that = this;
        if (that.eventHandlers['changeHandler']) {
            that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
        }
    };
    BootstrapCheckBoxComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], BootstrapCheckBoxComponent.prototype, "checked", null);
    __decorate([
        Input()
    ], BootstrapCheckBoxComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], BootstrapCheckBoxComponent.prototype, "indeterminate", null);
    __decorate([
        Input()
    ], BootstrapCheckBoxComponent.prototype, "innerHTML", null);
    __decorate([
        Input()
    ], BootstrapCheckBoxComponent.prototype, "name", null);
    __decorate([
        Input()
    ], BootstrapCheckBoxComponent.prototype, "required", null);
    __decorate([
        Input()
    ], BootstrapCheckBoxComponent.prototype, "styleMode", null);
    __decorate([
        Output()
    ], BootstrapCheckBoxComponent.prototype, "onChange", void 0);
    BootstrapCheckBoxComponent = __decorate([
        Directive({
            exportAs: 'bootstrap-check-box', selector: 'bootstrap-check-box, [bootstrap-check-box]'
        })
    ], BootstrapCheckBoxComponent);
    return BootstrapCheckBoxComponent;
}(BaseElement));

var BootstrapCircularComponent = /** @class */ (function (_super) {
    __extends(BootstrapCircularComponent, _super);
    function BootstrapCircularComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        /** @description Change event is triggered when the value of the element is changed.
        *  @param event. The custom event. 	*/
        _this.onChange = new EventEmitter();
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    BootstrapCircularComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('bootstrap-circular');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(BootstrapCircularComponent.prototype, "disabled", {
        /** @description Enables or disables the element.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.disabled : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disabled = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapCircularComponent.prototype, "name", {
        /** @description Sets the name of the element.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.name : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.name = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapCircularComponent.prototype, "min", {
        /** @description Sets or gets the min value */
        get: function () {
            return this.nativeElement ? this.nativeElement.min : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.min = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapCircularComponent.prototype, "max", {
        /** @description Sets or gets the max value */
        get: function () {
            return this.nativeElement ? this.nativeElement.max : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.max = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapCircularComponent.prototype, "striped", {
        /** @description Sets whether stripes are displayed in the progress.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.striped : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.striped = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapCircularComponent.prototype, "styleMode", {
        /** @description Sets or gets the style mode of the button. */
        get: function () {
            return this.nativeElement ? this.nativeElement.styleMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.styleMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapCircularComponent.prototype, "value", {
        /** @description Sets or gets the value */
        get: function () {
            return this.nativeElement ? this.nativeElement.value : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.value = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapCircularComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    BootstrapCircularComponent.prototype.ngOnInit = function () {
    };
    BootstrapCircularComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        this.listen();
    };
    BootstrapCircularComponent.prototype.ngOnDestroy = function () {
        this.unlisten();
    };
    BootstrapCircularComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    /** @description Add event listeners. */
    BootstrapCircularComponent.prototype.listen = function () {
        var that = this;
        that.eventHandlers['changeHandler'] = function (event) { that.onChange.emit(event); };
        that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
    };
    /** @description Remove event listeners. */
    BootstrapCircularComponent.prototype.unlisten = function () {
        var that = this;
        if (that.eventHandlers['changeHandler']) {
            that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
        }
    };
    BootstrapCircularComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], BootstrapCircularComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], BootstrapCircularComponent.prototype, "name", null);
    __decorate([
        Input()
    ], BootstrapCircularComponent.prototype, "min", null);
    __decorate([
        Input()
    ], BootstrapCircularComponent.prototype, "max", null);
    __decorate([
        Input()
    ], BootstrapCircularComponent.prototype, "striped", null);
    __decorate([
        Input()
    ], BootstrapCircularComponent.prototype, "styleMode", null);
    __decorate([
        Input()
    ], BootstrapCircularComponent.prototype, "value", null);
    __decorate([
        Output()
    ], BootstrapCircularComponent.prototype, "onChange", void 0);
    BootstrapCircularComponent = __decorate([
        Directive({
            exportAs: 'bootstrap-circular', selector: 'bootstrap-circular, [bootstrap-circular]'
        })
    ], BootstrapCircularComponent);
    return BootstrapCircularComponent;
}(BaseElement));

var BootstrapDropDownComponent = /** @class */ (function (_super) {
    __extends(BootstrapDropDownComponent, _super);
    function BootstrapDropDownComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        /** @description Show event is triggered when the dropdown is going to show.
        *  @param event. The custom event. 	*/
        _this.onShow = new EventEmitter();
        /** @description Shown event is triggered when the dropdown is shown.
        *  @param event. The custom event. 	*/
        _this.onShown = new EventEmitter();
        /** @description Hide event is triggered when the dropdown is going to be hidden.
        *  @param event. The custom event. 	*/
        _this.onHide = new EventEmitter();
        /** @description Hidden event is triggered when the dropdown is hidden
        *  @param event. The custom event. 	*/
        _this.onHidden = new EventEmitter();
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    BootstrapDropDownComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('bootstrap-drop-down');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(BootstrapDropDownComponent.prototype, "disabled", {
        /** @description Enables or disables the element.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.disabled : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disabled = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapDropDownComponent.prototype, "dropDownPosition", {
        /** @description Sets or gets the drop down position of the element.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.dropDownPosition : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dropDownPosition = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapDropDownComponent.prototype, "label", {
        /** @description Sets or gets the Label of the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.label : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.label = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapDropDownComponent.prototype, "labelType", {
        /** @description Sets or gets the Label type of the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.labelType : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.labelType = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapDropDownComponent.prototype, "href", {
        /** @description Sets or gets the Href of the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.href : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.href = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapDropDownComponent.prototype, "name", {
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
    Object.defineProperty(BootstrapDropDownComponent.prototype, "opened", {
        /** @description Gets or sets whether the dropdown is opened.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.opened : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.opened = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapDropDownComponent.prototype, "outlined", {
        /** @description Gets or sets whether the dropdown is outlined.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.outlined : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.outlined = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapDropDownComponent.prototype, "styleMode", {
        /** @description Sets or gets the style mode of the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.styleMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.styleMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapDropDownComponent.prototype, "sizeMode", {
        /** @description Sets or gets the size mode of the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.sizeMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.sizeMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /** @description Toggles the dropdown visibility
    */
    BootstrapDropDownComponent.prototype.toggle = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.toggle();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.toggle();
            });
        }
    };
    /** @description Shows the dropdown
    */
    BootstrapDropDownComponent.prototype.show = function () {
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
    /** @description Hides the dropdown
    */
    BootstrapDropDownComponent.prototype.hide = function () {
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
    Object.defineProperty(BootstrapDropDownComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    BootstrapDropDownComponent.prototype.ngOnInit = function () {
    };
    BootstrapDropDownComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        this.listen();
    };
    BootstrapDropDownComponent.prototype.ngOnDestroy = function () {
        this.unlisten();
    };
    BootstrapDropDownComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    /** @description Add event listeners. */
    BootstrapDropDownComponent.prototype.listen = function () {
        var that = this;
        that.eventHandlers['showHandler'] = function (event) { that.onShow.emit(event); };
        that.nativeElement.addEventListener('show', that.eventHandlers['showHandler']);
        that.eventHandlers['shownHandler'] = function (event) { that.onShown.emit(event); };
        that.nativeElement.addEventListener('shown', that.eventHandlers['shownHandler']);
        that.eventHandlers['hideHandler'] = function (event) { that.onHide.emit(event); };
        that.nativeElement.addEventListener('hide', that.eventHandlers['hideHandler']);
        that.eventHandlers['hiddenHandler'] = function (event) { that.onHidden.emit(event); };
        that.nativeElement.addEventListener('hidden', that.eventHandlers['hiddenHandler']);
    };
    /** @description Remove event listeners. */
    BootstrapDropDownComponent.prototype.unlisten = function () {
        var that = this;
        if (that.eventHandlers['showHandler']) {
            that.nativeElement.removeEventListener('show', that.eventHandlers['showHandler']);
        }
        if (that.eventHandlers['shownHandler']) {
            that.nativeElement.removeEventListener('shown', that.eventHandlers['shownHandler']);
        }
        if (that.eventHandlers['hideHandler']) {
            that.nativeElement.removeEventListener('hide', that.eventHandlers['hideHandler']);
        }
        if (that.eventHandlers['hiddenHandler']) {
            that.nativeElement.removeEventListener('hidden', that.eventHandlers['hiddenHandler']);
        }
    };
    BootstrapDropDownComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], BootstrapDropDownComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], BootstrapDropDownComponent.prototype, "dropDownPosition", null);
    __decorate([
        Input()
    ], BootstrapDropDownComponent.prototype, "label", null);
    __decorate([
        Input()
    ], BootstrapDropDownComponent.prototype, "labelType", null);
    __decorate([
        Input()
    ], BootstrapDropDownComponent.prototype, "href", null);
    __decorate([
        Input()
    ], BootstrapDropDownComponent.prototype, "name", null);
    __decorate([
        Input()
    ], BootstrapDropDownComponent.prototype, "opened", null);
    __decorate([
        Input()
    ], BootstrapDropDownComponent.prototype, "outlined", null);
    __decorate([
        Input()
    ], BootstrapDropDownComponent.prototype, "styleMode", null);
    __decorate([
        Input()
    ], BootstrapDropDownComponent.prototype, "sizeMode", null);
    __decorate([
        Output()
    ], BootstrapDropDownComponent.prototype, "onShow", void 0);
    __decorate([
        Output()
    ], BootstrapDropDownComponent.prototype, "onShown", void 0);
    __decorate([
        Output()
    ], BootstrapDropDownComponent.prototype, "onHide", void 0);
    __decorate([
        Output()
    ], BootstrapDropDownComponent.prototype, "onHidden", void 0);
    BootstrapDropDownComponent = __decorate([
        Directive({
            exportAs: 'bootstrap-drop-down', selector: 'bootstrap-drop-down, [bootstrap-drop-down]'
        })
    ], BootstrapDropDownComponent);
    return BootstrapDropDownComponent;
}(BaseElement));

var BootstrapFileInputComponent = /** @class */ (function (_super) {
    __extends(BootstrapFileInputComponent, _super);
    function BootstrapFileInputComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        /** @description Change event is triggered when the value of the element is changed.
        *  @param event. The custom event. 	*/
        _this.onChange = new EventEmitter();
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    BootstrapFileInputComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('bootstrap-file-input');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(BootstrapFileInputComponent.prototype, "disabled", {
        /** @description Enables or disables the element.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.disabled : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disabled = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapFileInputComponent.prototype, "name", {
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
    Object.defineProperty(BootstrapFileInputComponent.prototype, "placeholder", {
        /** @description Gets or sets the placeholder of the element.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.placeholder : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.placeholder = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapFileInputComponent.prototype, "styleMode", {
        /** @description Sets or gets the style mode of the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.styleMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.styleMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapFileInputComponent.prototype, "value", {
        /** @description Gets or sets the value of the element.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.value : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.value = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapFileInputComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    BootstrapFileInputComponent.prototype.ngOnInit = function () {
    };
    BootstrapFileInputComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        this.listen();
    };
    BootstrapFileInputComponent.prototype.ngOnDestroy = function () {
        this.unlisten();
    };
    BootstrapFileInputComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    /** @description Add event listeners. */
    BootstrapFileInputComponent.prototype.listen = function () {
        var that = this;
        that.eventHandlers['changeHandler'] = function (event) { that.onChange.emit(event); };
        that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
    };
    /** @description Remove event listeners. */
    BootstrapFileInputComponent.prototype.unlisten = function () {
        var that = this;
        if (that.eventHandlers['changeHandler']) {
            that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
        }
    };
    BootstrapFileInputComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], BootstrapFileInputComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], BootstrapFileInputComponent.prototype, "name", null);
    __decorate([
        Input()
    ], BootstrapFileInputComponent.prototype, "placeholder", null);
    __decorate([
        Input()
    ], BootstrapFileInputComponent.prototype, "styleMode", null);
    __decorate([
        Input()
    ], BootstrapFileInputComponent.prototype, "value", null);
    __decorate([
        Output()
    ], BootstrapFileInputComponent.prototype, "onChange", void 0);
    BootstrapFileInputComponent = __decorate([
        Directive({
            exportAs: 'bootstrap-file-input', selector: 'bootstrap-file-input, [bootstrap-file-input]'
        })
    ], BootstrapFileInputComponent);
    return BootstrapFileInputComponent;
}(BaseElement));

var BootstrapInputComponent = /** @class */ (function (_super) {
    __extends(BootstrapInputComponent, _super);
    function BootstrapInputComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        /** @description Change event is triggered when the value of the element is changed.
        *  @param event. The custom event. 	*/
        _this.onChange = new EventEmitter();
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    BootstrapInputComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('bootstrap-input');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(BootstrapInputComponent.prototype, "disabled", {
        /** @description Enables or disables the element.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.disabled : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disabled = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapInputComponent.prototype, "filled", {
        /** @description Gets or sets whether the element is filled.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.filled : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.filled = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapInputComponent.prototype, "name", {
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
    Object.defineProperty(BootstrapInputComponent.prototype, "outlined", {
        /** @description Gets or sets whether the element is outlined.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.outlined : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.outlined = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapInputComponent.prototype, "placeholder", {
        /** @description Gets or sets the placeholder of the element.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.placeholder : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.placeholder = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapInputComponent.prototype, "required", {
        /** @description Gets or sets whether the element is required.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.required : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.required = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapInputComponent.prototype, "styleMode", {
        /** @description Sets or gets the style mode of the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.styleMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.styleMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapInputComponent.prototype, "value", {
        /** @description Gets or sets the value of the element.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.value : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.value = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapInputComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    BootstrapInputComponent.prototype.ngOnInit = function () {
    };
    BootstrapInputComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        this.listen();
    };
    BootstrapInputComponent.prototype.ngOnDestroy = function () {
        this.unlisten();
    };
    BootstrapInputComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    /** @description Add event listeners. */
    BootstrapInputComponent.prototype.listen = function () {
        var that = this;
        that.eventHandlers['changeHandler'] = function (event) { that.onChange.emit(event); };
        that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
    };
    /** @description Remove event listeners. */
    BootstrapInputComponent.prototype.unlisten = function () {
        var that = this;
        if (that.eventHandlers['changeHandler']) {
            that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
        }
    };
    BootstrapInputComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], BootstrapInputComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], BootstrapInputComponent.prototype, "filled", null);
    __decorate([
        Input()
    ], BootstrapInputComponent.prototype, "name", null);
    __decorate([
        Input()
    ], BootstrapInputComponent.prototype, "outlined", null);
    __decorate([
        Input()
    ], BootstrapInputComponent.prototype, "placeholder", null);
    __decorate([
        Input()
    ], BootstrapInputComponent.prototype, "required", null);
    __decorate([
        Input()
    ], BootstrapInputComponent.prototype, "styleMode", null);
    __decorate([
        Input()
    ], BootstrapInputComponent.prototype, "value", null);
    __decorate([
        Output()
    ], BootstrapInputComponent.prototype, "onChange", void 0);
    BootstrapInputComponent = __decorate([
        Directive({
            exportAs: 'bootstrap-input', selector: 'bootstrap-input, [bootstrap-input]'
        })
    ], BootstrapInputComponent);
    return BootstrapInputComponent;
}(BaseElement));

var BootstrapInputGroupComponent = /** @class */ (function (_super) {
    __extends(BootstrapInputGroupComponent, _super);
    function BootstrapInputGroupComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        /** @description Click event.
        *  @param event. The custom event. 	*/
        _this.onClick = new EventEmitter();
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    BootstrapInputGroupComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('bootstrap-input-group');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(BootstrapInputGroupComponent.prototype, "contentBefore", {
        /** @description Sets the content before the input. */
        get: function () {
            return this.nativeElement ? this.nativeElement.contentBefore : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.contentBefore = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapInputGroupComponent.prototype, "contentAfter", {
        /** @description Sets the content after the input. */
        get: function () {
            return this.nativeElement ? this.nativeElement.contentAfter : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.contentAfter = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapInputGroupComponent.prototype, "disabled", {
        /** @description Enables or disables the element.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.disabled : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disabled = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapInputGroupComponent.prototype, "name", {
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
    Object.defineProperty(BootstrapInputGroupComponent.prototype, "noWrap", {
        /** @description Enables or disables the wrapping.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.noWrap : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.noWrap = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapInputGroupComponent.prototype, "styleMode", {
        /** @description Sets or gets the style mode of the input group. */
        get: function () {
            return this.nativeElement ? this.nativeElement.styleMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.styleMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapInputGroupComponent.prototype, "sizeMode", {
        /** @description Sets or gets the size mode of the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.sizeMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.sizeMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapInputGroupComponent.prototype, "type", {
        /** @description Sets or gets the type of the input. */
        get: function () {
            return this.nativeElement ? this.nativeElement.type : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.type = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapInputGroupComponent.prototype, "placeholder", {
        /** @description Sets the placeholder of the input. */
        get: function () {
            return this.nativeElement ? this.nativeElement.placeholder : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.placeholder = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapInputGroupComponent.prototype, "value", {
        /** @description Sets or gets the button's value.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.value : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.value = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapInputGroupComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    BootstrapInputGroupComponent.prototype.ngOnInit = function () {
    };
    BootstrapInputGroupComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        this.listen();
    };
    BootstrapInputGroupComponent.prototype.ngOnDestroy = function () {
        this.unlisten();
    };
    BootstrapInputGroupComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    /** @description Add event listeners. */
    BootstrapInputGroupComponent.prototype.listen = function () {
        var that = this;
        that.eventHandlers['clickHandler'] = function (event) { that.onClick.emit(event); };
        that.nativeElement.addEventListener('click', that.eventHandlers['clickHandler']);
    };
    /** @description Remove event listeners. */
    BootstrapInputGroupComponent.prototype.unlisten = function () {
        var that = this;
        if (that.eventHandlers['clickHandler']) {
            that.nativeElement.removeEventListener('click', that.eventHandlers['clickHandler']);
        }
    };
    BootstrapInputGroupComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], BootstrapInputGroupComponent.prototype, "contentBefore", null);
    __decorate([
        Input()
    ], BootstrapInputGroupComponent.prototype, "contentAfter", null);
    __decorate([
        Input()
    ], BootstrapInputGroupComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], BootstrapInputGroupComponent.prototype, "name", null);
    __decorate([
        Input()
    ], BootstrapInputGroupComponent.prototype, "noWrap", null);
    __decorate([
        Input()
    ], BootstrapInputGroupComponent.prototype, "styleMode", null);
    __decorate([
        Input()
    ], BootstrapInputGroupComponent.prototype, "sizeMode", null);
    __decorate([
        Input()
    ], BootstrapInputGroupComponent.prototype, "type", null);
    __decorate([
        Input()
    ], BootstrapInputGroupComponent.prototype, "placeholder", null);
    __decorate([
        Input()
    ], BootstrapInputGroupComponent.prototype, "value", null);
    __decorate([
        Output()
    ], BootstrapInputGroupComponent.prototype, "onClick", void 0);
    BootstrapInputGroupComponent = __decorate([
        Directive({
            exportAs: 'bootstrap-input-group', selector: 'bootstrap-input-group, [bootstrap-input-group]'
        })
    ], BootstrapInputGroupComponent);
    return BootstrapInputGroupComponent;
}(BaseElement));

var BootstrapModalComponent = /** @class */ (function (_super) {
    __extends(BootstrapModalComponent, _super);
    function BootstrapModalComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        /** @description Show event is triggered when the modal is going to show.
        *  @param event. The custom event. 	*/
        _this.onShow = new EventEmitter();
        /** @description Hide event is triggered when the modal is going to be hidden.
        *  @param event. The custom event. 	*/
        _this.onHide = new EventEmitter();
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    BootstrapModalComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('bootstrap-modal');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(BootstrapModalComponent.prototype, "backdrop", {
        /** @description Clicking on the modal “backdrop” will automatically close the modal.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.backdrop : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.backdrop = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapModalComponent.prototype, "centered", {
        /** @description Sets or gets whether the modal is centered.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.centered : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.centered = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapModalComponent.prototype, "disabled", {
        /** @description Enables or disables the element.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.disabled : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disabled = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapModalComponent.prototype, "opened", {
        /** @description Gets or sets whether the modal is opened.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.opened : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.opened = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapModalComponent.prototype, "scrollable", {
        /** @description Gets or sets whether the modal is scrollable.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.scrollable : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.scrollable = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapModalComponent.prototype, "styleMode", {
        /** @description Sets or gets the style mode of the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.styleMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.styleMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapModalComponent.prototype, "sizeMode", {
        /** @description Sets or gets the size mode of the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.sizeMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.sizeMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /** @description Toggles the modal visibility
    */
    BootstrapModalComponent.prototype.toggle = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.toggle();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.toggle();
            });
        }
    };
    /** @description Shows the modal
    */
    BootstrapModalComponent.prototype.show = function () {
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
    /** @description Hides the modal
    */
    BootstrapModalComponent.prototype.hide = function () {
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
    Object.defineProperty(BootstrapModalComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    BootstrapModalComponent.prototype.ngOnInit = function () {
    };
    BootstrapModalComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        this.listen();
    };
    BootstrapModalComponent.prototype.ngOnDestroy = function () {
        this.unlisten();
    };
    BootstrapModalComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    /** @description Add event listeners. */
    BootstrapModalComponent.prototype.listen = function () {
        var that = this;
        that.eventHandlers['showHandler'] = function (event) { that.onShow.emit(event); };
        that.nativeElement.addEventListener('show', that.eventHandlers['showHandler']);
        that.eventHandlers['hideHandler'] = function (event) { that.onHide.emit(event); };
        that.nativeElement.addEventListener('hide', that.eventHandlers['hideHandler']);
    };
    /** @description Remove event listeners. */
    BootstrapModalComponent.prototype.unlisten = function () {
        var that = this;
        if (that.eventHandlers['showHandler']) {
            that.nativeElement.removeEventListener('show', that.eventHandlers['showHandler']);
        }
        if (that.eventHandlers['hideHandler']) {
            that.nativeElement.removeEventListener('hide', that.eventHandlers['hideHandler']);
        }
    };
    BootstrapModalComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], BootstrapModalComponent.prototype, "backdrop", null);
    __decorate([
        Input()
    ], BootstrapModalComponent.prototype, "centered", null);
    __decorate([
        Input()
    ], BootstrapModalComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], BootstrapModalComponent.prototype, "opened", null);
    __decorate([
        Input()
    ], BootstrapModalComponent.prototype, "scrollable", null);
    __decorate([
        Input()
    ], BootstrapModalComponent.prototype, "styleMode", null);
    __decorate([
        Input()
    ], BootstrapModalComponent.prototype, "sizeMode", null);
    __decorate([
        Output()
    ], BootstrapModalComponent.prototype, "onShow", void 0);
    __decorate([
        Output()
    ], BootstrapModalComponent.prototype, "onHide", void 0);
    BootstrapModalComponent = __decorate([
        Directive({
            exportAs: 'bootstrap-modal', selector: 'bootstrap-modal, [bootstrap-modal]'
        })
    ], BootstrapModalComponent);
    return BootstrapModalComponent;
}(BaseElement));

var BootstrapProgressBarComponent = /** @class */ (function (_super) {
    __extends(BootstrapProgressBarComponent, _super);
    function BootstrapProgressBarComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        /** @description Change event is triggered when the value of the element is changed.
        *  @param event. The custom event. 	*/
        _this.onChange = new EventEmitter();
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    BootstrapProgressBarComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('bootstrap-progress-bar');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(BootstrapProgressBarComponent.prototype, "disabled", {
        /** @description Enables or disables the element.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.disabled : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disabled = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapProgressBarComponent.prototype, "name", {
        /** @description Sets the name of the element.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.name : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.name = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapProgressBarComponent.prototype, "min", {
        /** @description Sets or gets the min value */
        get: function () {
            return this.nativeElement ? this.nativeElement.min : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.min = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapProgressBarComponent.prototype, "max", {
        /** @description Sets or gets the max value */
        get: function () {
            return this.nativeElement ? this.nativeElement.max : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.max = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapProgressBarComponent.prototype, "striped", {
        /** @description Sets whether stripes are displayed in the progress.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.striped : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.striped = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapProgressBarComponent.prototype, "styleMode", {
        /** @description Sets or gets the style mode of the button. */
        get: function () {
            return this.nativeElement ? this.nativeElement.styleMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.styleMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapProgressBarComponent.prototype, "value", {
        /** @description Sets or gets the value */
        get: function () {
            return this.nativeElement ? this.nativeElement.value : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.value = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapProgressBarComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    BootstrapProgressBarComponent.prototype.ngOnInit = function () {
    };
    BootstrapProgressBarComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        this.listen();
    };
    BootstrapProgressBarComponent.prototype.ngOnDestroy = function () {
        this.unlisten();
    };
    BootstrapProgressBarComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    /** @description Add event listeners. */
    BootstrapProgressBarComponent.prototype.listen = function () {
        var that = this;
        that.eventHandlers['changeHandler'] = function (event) { that.onChange.emit(event); };
        that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
    };
    /** @description Remove event listeners. */
    BootstrapProgressBarComponent.prototype.unlisten = function () {
        var that = this;
        if (that.eventHandlers['changeHandler']) {
            that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
        }
    };
    BootstrapProgressBarComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], BootstrapProgressBarComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], BootstrapProgressBarComponent.prototype, "name", null);
    __decorate([
        Input()
    ], BootstrapProgressBarComponent.prototype, "min", null);
    __decorate([
        Input()
    ], BootstrapProgressBarComponent.prototype, "max", null);
    __decorate([
        Input()
    ], BootstrapProgressBarComponent.prototype, "striped", null);
    __decorate([
        Input()
    ], BootstrapProgressBarComponent.prototype, "styleMode", null);
    __decorate([
        Input()
    ], BootstrapProgressBarComponent.prototype, "value", null);
    __decorate([
        Output()
    ], BootstrapProgressBarComponent.prototype, "onChange", void 0);
    BootstrapProgressBarComponent = __decorate([
        Directive({
            exportAs: 'bootstrap-progress-bar', selector: 'bootstrap-progress-bar, [bootstrap-progress-bar]'
        })
    ], BootstrapProgressBarComponent);
    return BootstrapProgressBarComponent;
}(BaseElement));

var BootstrapRadioButtonComponent = /** @class */ (function (_super) {
    __extends(BootstrapRadioButtonComponent, _super);
    function BootstrapRadioButtonComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        /** @description Change event is triggered when the value of the element is changed.
        *  @param event. The custom event. 	*/
        _this.onChange = new EventEmitter();
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    BootstrapRadioButtonComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('bootstrap-radio-button');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(BootstrapRadioButtonComponent.prototype, "checked", {
        /** @description Gets or sets the checked state of the element.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.checked : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.checked = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapRadioButtonComponent.prototype, "disabled", {
        /** @description Enables or disables the element.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.disabled : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disabled = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapRadioButtonComponent.prototype, "indeterminate", {
        /** @description Gets or sets whether the element is in indeterminate state.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.indeterminate : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.indeterminate = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapRadioButtonComponent.prototype, "innerHTML", {
        /** @description Sets the inner HTML of the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.innerHTML : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.innerHTML = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapRadioButtonComponent.prototype, "name", {
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
    Object.defineProperty(BootstrapRadioButtonComponent.prototype, "styleMode", {
        /** @description Sets or gets the style mode of the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.styleMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.styleMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /** @description Toggles the element
    */
    BootstrapRadioButtonComponent.prototype.toggle = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.toggle();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.toggle();
            });
        }
    };
    Object.defineProperty(BootstrapRadioButtonComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    BootstrapRadioButtonComponent.prototype.ngOnInit = function () {
    };
    BootstrapRadioButtonComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        this.listen();
    };
    BootstrapRadioButtonComponent.prototype.ngOnDestroy = function () {
        this.unlisten();
    };
    BootstrapRadioButtonComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    /** @description Add event listeners. */
    BootstrapRadioButtonComponent.prototype.listen = function () {
        var that = this;
        that.eventHandlers['changeHandler'] = function (event) { that.onChange.emit(event); };
        that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
    };
    /** @description Remove event listeners. */
    BootstrapRadioButtonComponent.prototype.unlisten = function () {
        var that = this;
        if (that.eventHandlers['changeHandler']) {
            that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
        }
    };
    BootstrapRadioButtonComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], BootstrapRadioButtonComponent.prototype, "checked", null);
    __decorate([
        Input()
    ], BootstrapRadioButtonComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], BootstrapRadioButtonComponent.prototype, "indeterminate", null);
    __decorate([
        Input()
    ], BootstrapRadioButtonComponent.prototype, "innerHTML", null);
    __decorate([
        Input()
    ], BootstrapRadioButtonComponent.prototype, "name", null);
    __decorate([
        Input()
    ], BootstrapRadioButtonComponent.prototype, "styleMode", null);
    __decorate([
        Output()
    ], BootstrapRadioButtonComponent.prototype, "onChange", void 0);
    BootstrapRadioButtonComponent = __decorate([
        Directive({
            exportAs: 'bootstrap-radio-button', selector: 'bootstrap-radio-button, [bootstrap-radio-button]'
        })
    ], BootstrapRadioButtonComponent);
    return BootstrapRadioButtonComponent;
}(BaseElement));

var BootstrapRangeComponent = /** @class */ (function (_super) {
    __extends(BootstrapRangeComponent, _super);
    function BootstrapRangeComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        /** @description Change event is triggered when the value of the element is changed.
        *  @param event. The custom event. 	*/
        _this.onChange = new EventEmitter();
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    BootstrapRangeComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('bootstrap-range');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(BootstrapRangeComponent.prototype, "disabled", {
        /** @description Enables or disables the element.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.disabled : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disabled = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapRangeComponent.prototype, "name", {
        /** @description Sets the name of the element.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.name : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.name = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapRangeComponent.prototype, "min", {
        /** @description Sets or gets the min value */
        get: function () {
            return this.nativeElement ? this.nativeElement.min : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.min = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapRangeComponent.prototype, "max", {
        /** @description Sets or gets the max value */
        get: function () {
            return this.nativeElement ? this.nativeElement.max : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.max = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapRangeComponent.prototype, "value", {
        /** @description Sets or gets the value */
        get: function () {
            return this.nativeElement ? this.nativeElement.value : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.value = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapRangeComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    BootstrapRangeComponent.prototype.ngOnInit = function () {
    };
    BootstrapRangeComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        this.listen();
    };
    BootstrapRangeComponent.prototype.ngOnDestroy = function () {
        this.unlisten();
    };
    BootstrapRangeComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    /** @description Add event listeners. */
    BootstrapRangeComponent.prototype.listen = function () {
        var that = this;
        that.eventHandlers['changeHandler'] = function (event) { that.onChange.emit(event); };
        that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
    };
    /** @description Remove event listeners. */
    BootstrapRangeComponent.prototype.unlisten = function () {
        var that = this;
        if (that.eventHandlers['changeHandler']) {
            that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
        }
    };
    BootstrapRangeComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], BootstrapRangeComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], BootstrapRangeComponent.prototype, "name", null);
    __decorate([
        Input()
    ], BootstrapRangeComponent.prototype, "min", null);
    __decorate([
        Input()
    ], BootstrapRangeComponent.prototype, "max", null);
    __decorate([
        Input()
    ], BootstrapRangeComponent.prototype, "value", null);
    __decorate([
        Output()
    ], BootstrapRangeComponent.prototype, "onChange", void 0);
    BootstrapRangeComponent = __decorate([
        Directive({
            exportAs: 'bootstrap-range', selector: 'bootstrap-range, [bootstrap-range]'
        })
    ], BootstrapRangeComponent);
    return BootstrapRangeComponent;
}(BaseElement));

var BootstrapSplitButtonComponent = /** @class */ (function (_super) {
    __extends(BootstrapSplitButtonComponent, _super);
    function BootstrapSplitButtonComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        /** @description Show event is triggered when the dropdown is going to show.
        *  @param event. The custom event. 	*/
        _this.onShow = new EventEmitter();
        /** @description Shown event is triggered when the dropdown is shown.
        *  @param event. The custom event. 	*/
        _this.onShown = new EventEmitter();
        /** @description Hide event is triggered when the dropdown is going to be hidden.
        *  @param event. The custom event. 	*/
        _this.onHide = new EventEmitter();
        /** @description Hidden event is triggered when the dropdown is hidden
        *  @param event. The custom event. 	*/
        _this.onHidden = new EventEmitter();
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    BootstrapSplitButtonComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('bootstrap-split-button');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(BootstrapSplitButtonComponent.prototype, "disabled", {
        /** @description Enables or disables the element.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.disabled : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disabled = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapSplitButtonComponent.prototype, "dropDownPosition", {
        /** @description Sets or gets the drop down position of the element.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.dropDownPosition : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dropDownPosition = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapSplitButtonComponent.prototype, "label", {
        /** @description Sets or gets the Label of the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.label : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.label = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapSplitButtonComponent.prototype, "labelType", {
        /** @description Sets or gets the Label type of the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.labelType : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.labelType = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapSplitButtonComponent.prototype, "href", {
        /** @description Sets or gets the Href of the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.href : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.href = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapSplitButtonComponent.prototype, "name", {
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
    Object.defineProperty(BootstrapSplitButtonComponent.prototype, "opened", {
        /** @description Gets or sets whether the dropdown is opened.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.opened : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.opened = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapSplitButtonComponent.prototype, "outlined", {
        /** @description Gets or sets whether the dropdown is outlined.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.outlined : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.outlined = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapSplitButtonComponent.prototype, "styleMode", {
        /** @description Sets or gets the style mode of the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.styleMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.styleMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapSplitButtonComponent.prototype, "sizeMode", {
        /** @description Sets or gets the size mode of the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.sizeMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.sizeMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /** @description Toggles the dropdown visibility
    */
    BootstrapSplitButtonComponent.prototype.toggle = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.toggle();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.toggle();
            });
        }
    };
    /** @description Shows the dropdown
    */
    BootstrapSplitButtonComponent.prototype.show = function () {
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
    /** @description Hides the dropdown
    */
    BootstrapSplitButtonComponent.prototype.hide = function () {
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
    Object.defineProperty(BootstrapSplitButtonComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    BootstrapSplitButtonComponent.prototype.ngOnInit = function () {
    };
    BootstrapSplitButtonComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        this.listen();
    };
    BootstrapSplitButtonComponent.prototype.ngOnDestroy = function () {
        this.unlisten();
    };
    BootstrapSplitButtonComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    /** @description Add event listeners. */
    BootstrapSplitButtonComponent.prototype.listen = function () {
        var that = this;
        that.eventHandlers['showHandler'] = function (event) { that.onShow.emit(event); };
        that.nativeElement.addEventListener('show', that.eventHandlers['showHandler']);
        that.eventHandlers['shownHandler'] = function (event) { that.onShown.emit(event); };
        that.nativeElement.addEventListener('shown', that.eventHandlers['shownHandler']);
        that.eventHandlers['hideHandler'] = function (event) { that.onHide.emit(event); };
        that.nativeElement.addEventListener('hide', that.eventHandlers['hideHandler']);
        that.eventHandlers['hiddenHandler'] = function (event) { that.onHidden.emit(event); };
        that.nativeElement.addEventListener('hidden', that.eventHandlers['hiddenHandler']);
    };
    /** @description Remove event listeners. */
    BootstrapSplitButtonComponent.prototype.unlisten = function () {
        var that = this;
        if (that.eventHandlers['showHandler']) {
            that.nativeElement.removeEventListener('show', that.eventHandlers['showHandler']);
        }
        if (that.eventHandlers['shownHandler']) {
            that.nativeElement.removeEventListener('shown', that.eventHandlers['shownHandler']);
        }
        if (that.eventHandlers['hideHandler']) {
            that.nativeElement.removeEventListener('hide', that.eventHandlers['hideHandler']);
        }
        if (that.eventHandlers['hiddenHandler']) {
            that.nativeElement.removeEventListener('hidden', that.eventHandlers['hiddenHandler']);
        }
    };
    BootstrapSplitButtonComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], BootstrapSplitButtonComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], BootstrapSplitButtonComponent.prototype, "dropDownPosition", null);
    __decorate([
        Input()
    ], BootstrapSplitButtonComponent.prototype, "label", null);
    __decorate([
        Input()
    ], BootstrapSplitButtonComponent.prototype, "labelType", null);
    __decorate([
        Input()
    ], BootstrapSplitButtonComponent.prototype, "href", null);
    __decorate([
        Input()
    ], BootstrapSplitButtonComponent.prototype, "name", null);
    __decorate([
        Input()
    ], BootstrapSplitButtonComponent.prototype, "opened", null);
    __decorate([
        Input()
    ], BootstrapSplitButtonComponent.prototype, "outlined", null);
    __decorate([
        Input()
    ], BootstrapSplitButtonComponent.prototype, "styleMode", null);
    __decorate([
        Input()
    ], BootstrapSplitButtonComponent.prototype, "sizeMode", null);
    __decorate([
        Output()
    ], BootstrapSplitButtonComponent.prototype, "onShow", void 0);
    __decorate([
        Output()
    ], BootstrapSplitButtonComponent.prototype, "onShown", void 0);
    __decorate([
        Output()
    ], BootstrapSplitButtonComponent.prototype, "onHide", void 0);
    __decorate([
        Output()
    ], BootstrapSplitButtonComponent.prototype, "onHidden", void 0);
    BootstrapSplitButtonComponent = __decorate([
        Directive({
            exportAs: 'bootstrap-split-button', selector: 'bootstrap-split-button, [bootstrap-split-button]'
        })
    ], BootstrapSplitButtonComponent);
    return BootstrapSplitButtonComponent;
}(BaseElement));

var BootstrapSwitchButtonComponent = /** @class */ (function (_super) {
    __extends(BootstrapSwitchButtonComponent, _super);
    function BootstrapSwitchButtonComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        /** @description Change event is triggered when the value of the element is changed.
        *  @param event. The custom event. 	*/
        _this.onChange = new EventEmitter();
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    BootstrapSwitchButtonComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('bootstrap-switch-button');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(BootstrapSwitchButtonComponent.prototype, "checked", {
        /** @description Gets or sets the checked state of the element.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.checked : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.checked = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapSwitchButtonComponent.prototype, "disabled", {
        /** @description Enables or disables the element.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.disabled : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disabled = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapSwitchButtonComponent.prototype, "indeterminate", {
        /** @description Gets or sets whether the element is in indeterminate state.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.indeterminate : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.indeterminate = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapSwitchButtonComponent.prototype, "innerHTML", {
        /** @description Sets the inner HTML of the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.innerHTML : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.innerHTML = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapSwitchButtonComponent.prototype, "name", {
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
    Object.defineProperty(BootstrapSwitchButtonComponent.prototype, "required", {
        /** @description Gets or sets whether the element is required.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.required : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.required = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapSwitchButtonComponent.prototype, "styleMode", {
        /** @description Sets or gets the style mode of the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.styleMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.styleMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /** @description Toggles the element
    */
    BootstrapSwitchButtonComponent.prototype.toggle = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.toggle();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.toggle();
            });
        }
    };
    Object.defineProperty(BootstrapSwitchButtonComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    BootstrapSwitchButtonComponent.prototype.ngOnInit = function () {
    };
    BootstrapSwitchButtonComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        this.listen();
    };
    BootstrapSwitchButtonComponent.prototype.ngOnDestroy = function () {
        this.unlisten();
    };
    BootstrapSwitchButtonComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    /** @description Add event listeners. */
    BootstrapSwitchButtonComponent.prototype.listen = function () {
        var that = this;
        that.eventHandlers['changeHandler'] = function (event) { that.onChange.emit(event); };
        that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
    };
    /** @description Remove event listeners. */
    BootstrapSwitchButtonComponent.prototype.unlisten = function () {
        var that = this;
        if (that.eventHandlers['changeHandler']) {
            that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
        }
    };
    BootstrapSwitchButtonComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], BootstrapSwitchButtonComponent.prototype, "checked", null);
    __decorate([
        Input()
    ], BootstrapSwitchButtonComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], BootstrapSwitchButtonComponent.prototype, "indeterminate", null);
    __decorate([
        Input()
    ], BootstrapSwitchButtonComponent.prototype, "innerHTML", null);
    __decorate([
        Input()
    ], BootstrapSwitchButtonComponent.prototype, "name", null);
    __decorate([
        Input()
    ], BootstrapSwitchButtonComponent.prototype, "required", null);
    __decorate([
        Input()
    ], BootstrapSwitchButtonComponent.prototype, "styleMode", null);
    __decorate([
        Output()
    ], BootstrapSwitchButtonComponent.prototype, "onChange", void 0);
    BootstrapSwitchButtonComponent = __decorate([
        Directive({
            exportAs: 'bootstrap-switch-button', selector: 'bootstrap-switch-button, [bootstrap-switch-button]'
        })
    ], BootstrapSwitchButtonComponent);
    return BootstrapSwitchButtonComponent;
}(BaseElement));

var BootstrapTabsComponent = /** @class */ (function (_super) {
    __extends(BootstrapTabsComponent, _super);
    function BootstrapTabsComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        /** @description Show event.
        *  @param event. The custom event. 	*/
        _this.onShow = new EventEmitter();
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    BootstrapTabsComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('bootstrap-tabs');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(BootstrapTabsComponent.prototype, "alignment", {
        /** @description Sets the tabs alignment */
        get: function () {
            return this.nativeElement ? this.nativeElement.alignment : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.alignment = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapTabsComponent.prototype, "disabled", {
        /** @description Enables or disables the tabs.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.disabled : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disabled = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapTabsComponent.prototype, "fill", {
        /** @description Sets the tabs fill */
        get: function () {
            return this.nativeElement ? this.nativeElement.fill : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.fill = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapTabsComponent.prototype, "justified", {
        /** @description Sets the tabs justified */
        get: function () {
            return this.nativeElement ? this.nativeElement.justified : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.justified = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapTabsComponent.prototype, "listType", {
        /** @description Sets or gets the tab type. */
        get: function () {
            return this.nativeElement ? this.nativeElement.listType : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.listType = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapTabsComponent.prototype, "styleMode", {
        /** @description Sets or gets the style mode of the tabs. */
        get: function () {
            return this.nativeElement ? this.nativeElement.styleMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.styleMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapTabsComponent.prototype, "sizeMode", {
        /** @description Sets or gets the size mode of the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.sizeMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.sizeMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapTabsComponent.prototype, "tabType", {
        /** @description Sets or gets the tab type . */
        get: function () {
            return this.nativeElement ? this.nativeElement.tabType : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.tabType = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /** @description Shows an item
    * @param {HTMLElement} item. The tab item to be shown.
    */
    BootstrapTabsComponent.prototype.show = function (item) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.show(item);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.show(item);
            });
        }
    };
    Object.defineProperty(BootstrapTabsComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    BootstrapTabsComponent.prototype.ngOnInit = function () {
    };
    BootstrapTabsComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        this.listen();
    };
    BootstrapTabsComponent.prototype.ngOnDestroy = function () {
        this.unlisten();
    };
    BootstrapTabsComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    /** @description Add event listeners. */
    BootstrapTabsComponent.prototype.listen = function () {
        var that = this;
        that.eventHandlers['showHandler'] = function (event) { that.onShow.emit(event); };
        that.nativeElement.addEventListener('show', that.eventHandlers['showHandler']);
    };
    /** @description Remove event listeners. */
    BootstrapTabsComponent.prototype.unlisten = function () {
        var that = this;
        if (that.eventHandlers['showHandler']) {
            that.nativeElement.removeEventListener('show', that.eventHandlers['showHandler']);
        }
    };
    BootstrapTabsComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], BootstrapTabsComponent.prototype, "alignment", null);
    __decorate([
        Input()
    ], BootstrapTabsComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], BootstrapTabsComponent.prototype, "fill", null);
    __decorate([
        Input()
    ], BootstrapTabsComponent.prototype, "justified", null);
    __decorate([
        Input()
    ], BootstrapTabsComponent.prototype, "listType", null);
    __decorate([
        Input()
    ], BootstrapTabsComponent.prototype, "styleMode", null);
    __decorate([
        Input()
    ], BootstrapTabsComponent.prototype, "sizeMode", null);
    __decorate([
        Input()
    ], BootstrapTabsComponent.prototype, "tabType", null);
    __decorate([
        Output()
    ], BootstrapTabsComponent.prototype, "onShow", void 0);
    BootstrapTabsComponent = __decorate([
        Directive({
            exportAs: 'bootstrap-tabs', selector: 'bootstrap-tabs, [bootstrap-tabs]'
        })
    ], BootstrapTabsComponent);
    return BootstrapTabsComponent;
}(BaseElement));

var BootstrapTextareaComponent = /** @class */ (function (_super) {
    __extends(BootstrapTextareaComponent, _super);
    function BootstrapTextareaComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        /** @description Change event is triggered when the value of the element is changed.
        *  @param event. The custom event. 	*/
        _this.onChange = new EventEmitter();
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    BootstrapTextareaComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('bootstrap-textarea');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(BootstrapTextareaComponent.prototype, "disabled", {
        /** @description Enables or disables the element.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.disabled : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disabled = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapTextareaComponent.prototype, "filled", {
        /** @description Gets or sets whether the element is filled.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.filled : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.filled = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapTextareaComponent.prototype, "name", {
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
    Object.defineProperty(BootstrapTextareaComponent.prototype, "outlined", {
        /** @description Gets or sets whether the element is outlined.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.outlined : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.outlined = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapTextareaComponent.prototype, "placeholder", {
        /** @description Gets or sets the placeholder of the element.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.placeholder : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.placeholder = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapTextareaComponent.prototype, "required", {
        /** @description Gets or sets whether the element is required.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.required : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.required = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapTextareaComponent.prototype, "styleMode", {
        /** @description Sets or gets the style mode of the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.styleMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.styleMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapTextareaComponent.prototype, "value", {
        /** @description Gets or sets the value of the element.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.value : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.value = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapTextareaComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    BootstrapTextareaComponent.prototype.ngOnInit = function () {
    };
    BootstrapTextareaComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        this.listen();
    };
    BootstrapTextareaComponent.prototype.ngOnDestroy = function () {
        this.unlisten();
    };
    BootstrapTextareaComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    /** @description Add event listeners. */
    BootstrapTextareaComponent.prototype.listen = function () {
        var that = this;
        that.eventHandlers['changeHandler'] = function (event) { that.onChange.emit(event); };
        that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
    };
    /** @description Remove event listeners. */
    BootstrapTextareaComponent.prototype.unlisten = function () {
        var that = this;
        if (that.eventHandlers['changeHandler']) {
            that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
        }
    };
    BootstrapTextareaComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], BootstrapTextareaComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], BootstrapTextareaComponent.prototype, "filled", null);
    __decorate([
        Input()
    ], BootstrapTextareaComponent.prototype, "name", null);
    __decorate([
        Input()
    ], BootstrapTextareaComponent.prototype, "outlined", null);
    __decorate([
        Input()
    ], BootstrapTextareaComponent.prototype, "placeholder", null);
    __decorate([
        Input()
    ], BootstrapTextareaComponent.prototype, "required", null);
    __decorate([
        Input()
    ], BootstrapTextareaComponent.prototype, "styleMode", null);
    __decorate([
        Input()
    ], BootstrapTextareaComponent.prototype, "value", null);
    __decorate([
        Output()
    ], BootstrapTextareaComponent.prototype, "onChange", void 0);
    BootstrapTextareaComponent = __decorate([
        Directive({
            exportAs: 'bootstrap-textarea', selector: 'bootstrap-textarea, [bootstrap-textarea]'
        })
    ], BootstrapTextareaComponent);
    return BootstrapTextareaComponent;
}(BaseElement));

var BootstrapToggleButtonComponent = /** @class */ (function (_super) {
    __extends(BootstrapToggleButtonComponent, _super);
    function BootstrapToggleButtonComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        /** @description Change event is triggered when the value of the element is changed.
        *  @param event. The custom event. 	*/
        _this.onChange = new EventEmitter();
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    BootstrapToggleButtonComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('bootstrap-toggle-button');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(BootstrapToggleButtonComponent.prototype, "checked", {
        /** @description Gets or sets the checked state of the element.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.checked : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.checked = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapToggleButtonComponent.prototype, "disabled", {
        /** @description Enables or disables the element.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.disabled : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disabled = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapToggleButtonComponent.prototype, "indeterminate", {
        /** @description Gets or sets whether the element is in indeterminate state.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.indeterminate : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.indeterminate = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapToggleButtonComponent.prototype, "innerHTML", {
        /** @description Sets the inner HTML of the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.innerHTML : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.innerHTML = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapToggleButtonComponent.prototype, "name", {
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
    Object.defineProperty(BootstrapToggleButtonComponent.prototype, "styleMode", {
        /** @description Sets or gets the style mode of the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.styleMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.styleMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /** @description Toggles the element
    */
    BootstrapToggleButtonComponent.prototype.toggle = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.toggle();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.toggle();
            });
        }
    };
    Object.defineProperty(BootstrapToggleButtonComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    BootstrapToggleButtonComponent.prototype.ngOnInit = function () {
    };
    BootstrapToggleButtonComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        this.listen();
    };
    BootstrapToggleButtonComponent.prototype.ngOnDestroy = function () {
        this.unlisten();
    };
    BootstrapToggleButtonComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    /** @description Add event listeners. */
    BootstrapToggleButtonComponent.prototype.listen = function () {
        var that = this;
        that.eventHandlers['changeHandler'] = function (event) { that.onChange.emit(event); };
        that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
    };
    /** @description Remove event listeners. */
    BootstrapToggleButtonComponent.prototype.unlisten = function () {
        var that = this;
        if (that.eventHandlers['changeHandler']) {
            that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
        }
    };
    BootstrapToggleButtonComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], BootstrapToggleButtonComponent.prototype, "checked", null);
    __decorate([
        Input()
    ], BootstrapToggleButtonComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], BootstrapToggleButtonComponent.prototype, "indeterminate", null);
    __decorate([
        Input()
    ], BootstrapToggleButtonComponent.prototype, "innerHTML", null);
    __decorate([
        Input()
    ], BootstrapToggleButtonComponent.prototype, "name", null);
    __decorate([
        Input()
    ], BootstrapToggleButtonComponent.prototype, "styleMode", null);
    __decorate([
        Output()
    ], BootstrapToggleButtonComponent.prototype, "onChange", void 0);
    BootstrapToggleButtonComponent = __decorate([
        Directive({
            exportAs: 'bootstrap-toggle-button', selector: 'bootstrap-toggle-button, [bootstrap-toggle-button]'
        })
    ], BootstrapToggleButtonComponent);
    return BootstrapToggleButtonComponent;
}(BaseElement));

var BootstrapModule = /** @class */ (function () {
    function BootstrapModule() {
    }
    BootstrapModule = __decorate([
        NgModule({
            declarations: [BootstrapButtonComponent, BootstrapCheckBoxComponent, BootstrapCircularComponent, BootstrapDropDownComponent, BootstrapFileInputComponent, BootstrapInputComponent, BootstrapInputGroupComponent, BootstrapModalComponent, BootstrapProgressBarComponent, BootstrapRadioButtonComponent, BootstrapRangeComponent, BootstrapSplitButtonComponent, BootstrapSwitchButtonComponent, BootstrapTabsComponent, BootstrapTextareaComponent, BootstrapToggleButtonComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            exports: [BootstrapButtonComponent, BootstrapCheckBoxComponent, BootstrapCircularComponent, BootstrapDropDownComponent, BootstrapFileInputComponent, BootstrapInputComponent, BootstrapInputGroupComponent, BootstrapModalComponent, BootstrapProgressBarComponent, BootstrapRadioButtonComponent, BootstrapRangeComponent, BootstrapSplitButtonComponent, BootstrapSwitchButtonComponent, BootstrapTabsComponent, BootstrapTextareaComponent, BootstrapToggleButtonComponent]
        })
    ], BootstrapModule);
    return BootstrapModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { BootstrapButtonComponent, BootstrapCheckBoxComponent, BootstrapCircularComponent, BootstrapDropDownComponent, BootstrapFileInputComponent, BootstrapInputComponent, BootstrapInputGroupComponent, BootstrapModalComponent, BootstrapModule, BootstrapProgressBarComponent, BootstrapRadioButtonComponent, BootstrapRangeComponent, BootstrapSplitButtonComponent, BootstrapSwitchButtonComponent, BootstrapTabsComponent, BootstrapTextareaComponent, BootstrapToggleButtonComponent, Smart, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-bootstrap.js.map
