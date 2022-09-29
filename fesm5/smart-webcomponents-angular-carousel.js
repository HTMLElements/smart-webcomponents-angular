
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.carousel';

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

var CarouselComponent = /** @class */ (function (_super) {
    __extends(CarouselComponent, _super);
    function CarouselComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        /** @description Triggered when the active ( in view ) slide is changed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	previousIndex)
        *   index - The index of the new active slide.
        *   previousIndex - The index of the previous slide that was active.
        */
        _this.onChange = new EventEmitter();
        /** @description Triggered when the process of slide changing starts.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	previousIndex)
        *   index - The index of the new active slide.
        *   previousIndex - The index of the previous slide that was active.
        */
        _this.onChanging = new EventEmitter();
        /** @description This event is triggered when the user swipes to the left inside the Carousel.
        *  @param event. The custom event. 	*/
        _this.onSwipeleft = new EventEmitter();
        /** @description This event is triggered when the user swipes to the right inside the Carousel.
        *  @param event. The custom event. 	*/
        _this.onSwiperight = new EventEmitter();
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    CarouselComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('smart-carousel');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(CarouselComponent.prototype, "animation", {
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
    Object.defineProperty(CarouselComponent.prototype, "autoPlay", {
        /** @description The items switch automatically if set to true or to a custom number(representing the timeout in milliseconds). This property works if slideShow property is enabled. */
        get: function () {
            return this.nativeElement ? this.nativeElement.autoPlay : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.autoPlay = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "dataSource", {
        /** @description An array of objects. Each object defines an item. The following object properties are available: label - a string representing the label of the item.content - a string representing the content of the itemimage - a string representing a url link to an image.HTMLcontent - a string representing some HTML structure taht will be generated inside the item. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dataSource : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dataSource = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "delay", {
        /** @description Specifies the timeout before a slide changes when a navigation button is pressed. Navigation buttons are repeat buttons that will repeat the oepration after the delay is passed. */
        get: function () {
            return this.nativeElement ? this.nativeElement.delay : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.delay = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "disabled", {
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
    Object.defineProperty(CarouselComponent.prototype, "disableItemClick", {
        /** @description Disabled the possibility to navigated to an item by clicking on item in displayMode 3d. By default users can navigate to items that are not currently active by clicking on them. */
        get: function () {
            return this.nativeElement ? this.nativeElement.disableItemClick : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disableItemClick = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "displayMode", {
        /** @description Determines the display mode. */
        get: function () {
            return this.nativeElement ? this.nativeElement.displayMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.displayMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "hideArrows", {
        /** @description Hides the navigation buttons. */
        get: function () {
            return this.nativeElement ? this.nativeElement.hideArrows : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.hideArrows = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "hideIndicators", {
        /** @description Hides the slide indication panel that shows which item is currently in view (active item). */
        get: function () {
            return this.nativeElement ? this.nativeElement.hideIndicators : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.hideIndicators = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "indicatorTemplate", {
        /** @description Can be used to customize the slide indicator panel of the accordion. The property can be a string that represents the id of an HTMLTemplateElement in the DOM or it's direct reference. */
        get: function () {
            return this.nativeElement ? this.nativeElement.indicatorTemplate : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.indicatorTemplate = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "interval", {
        /** @description Determines the interval (in milliseconds) between a slide transitions when slideShow is enabled. */
        get: function () {
            return this.nativeElement ? this.nativeElement.interval : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.interval = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "itemTemplate", {
        /** @description Used to completely customize the content of an item. The property can be a string that represents the id of an HTMLTemplateElement in the DOM or it's direct reference. The content of the template can contain property bindings that refer to the dataSource. */
        get: function () {
            return this.nativeElement ? this.nativeElement.itemTemplate : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.itemTemplate = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "keyboard", {
        /** @description Activates/deactivates keyboard navigation. By default, items can not be navigated via keyboard */
        get: function () {
            return this.nativeElement ? this.nativeElement.keyboard : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.keyboard = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "locale", {
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
    Object.defineProperty(CarouselComponent.prototype, "localizeFormatFunction", {
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
    Object.defineProperty(CarouselComponent.prototype, "loop", {
        /** @description Determines whether the the items should start over when the first or last item is reached. */
        get: function () {
            return this.nativeElement ? this.nativeElement.loop : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.loop = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "messages", {
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
    Object.defineProperty(CarouselComponent.prototype, "readonly", {
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
    Object.defineProperty(CarouselComponent.prototype, "rightToLeft", {
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
    Object.defineProperty(CarouselComponent.prototype, "slideShow", {
        /** @description When slideShow property is set to true, the carousel changes the active slide automatically with a delay set in interval property. */
        get: function () {
            return this.nativeElement ? this.nativeElement.slideShow : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.slideShow = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "swipe", {
        /** @description Enables or disables switching to the previous/next slide via swiping left/right. By default swiping is disabled. */
        get: function () {
            return this.nativeElement ? this.nativeElement.swipe : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.swipe = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "theme", {
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
    Object.defineProperty(CarouselComponent.prototype, "unfocusable", {
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
    Object.defineProperty(CarouselComponent.prototype, "wheel", {
        /** @description Activates/deactivates slide navigation via mouse wheel. By default it's disabled. */
        get: function () {
            return this.nativeElement ? this.nativeElement.wheel : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.wheel = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /** @description Navigates to the next slide.
    */
    CarouselComponent.prototype.next = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.next();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.next();
            });
        }
    };
    /** @description Pauses the slide show if slideShow is enabled.
    */
    CarouselComponent.prototype.pause = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.pause();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.pause();
            });
        }
    };
    /** @description Starts the slide show if slideShow is enabled.
    */
    CarouselComponent.prototype.play = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.play();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.play();
            });
        }
    };
    /** @description Navigates to the previous slide.
    */
    CarouselComponent.prototype.prev = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.prev();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.prev();
            });
        }
    };
    /** @description Navigates to a specific slide with the given index.
    * @param {number} index. The index of the target slide.
    */
    CarouselComponent.prototype.slideTo = function (index) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.slideTo(index);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.slideTo(index);
            });
        }
    };
    Object.defineProperty(CarouselComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    CarouselComponent.prototype.ngOnInit = function () {
    };
    CarouselComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        this.listen();
    };
    CarouselComponent.prototype.ngOnDestroy = function () {
        this.unlisten();
    };
    CarouselComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    /** @description Add event listeners. */
    CarouselComponent.prototype.listen = function () {
        var that = this;
        that.eventHandlers['changeHandler'] = function (event) { that.onChange.emit(event); };
        that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
        that.eventHandlers['changingHandler'] = function (event) { that.onChanging.emit(event); };
        that.nativeElement.addEventListener('changing', that.eventHandlers['changingHandler']);
        that.eventHandlers['swipeleftHandler'] = function (event) { that.onSwipeleft.emit(event); };
        that.nativeElement.addEventListener('swipeleft', that.eventHandlers['swipeleftHandler']);
        that.eventHandlers['swiperightHandler'] = function (event) { that.onSwiperight.emit(event); };
        that.nativeElement.addEventListener('swiperight', that.eventHandlers['swiperightHandler']);
    };
    /** @description Remove event listeners. */
    CarouselComponent.prototype.unlisten = function () {
        var that = this;
        if (that.eventHandlers['changeHandler']) {
            that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
        }
        if (that.eventHandlers['changingHandler']) {
            that.nativeElement.removeEventListener('changing', that.eventHandlers['changingHandler']);
        }
        if (that.eventHandlers['swipeleftHandler']) {
            that.nativeElement.removeEventListener('swipeleft', that.eventHandlers['swipeleftHandler']);
        }
        if (that.eventHandlers['swiperightHandler']) {
            that.nativeElement.removeEventListener('swiperight', that.eventHandlers['swiperightHandler']);
        }
    };
    CarouselComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], CarouselComponent.prototype, "animation", null);
    __decorate([
        Input()
    ], CarouselComponent.prototype, "autoPlay", null);
    __decorate([
        Input()
    ], CarouselComponent.prototype, "dataSource", null);
    __decorate([
        Input()
    ], CarouselComponent.prototype, "delay", null);
    __decorate([
        Input()
    ], CarouselComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], CarouselComponent.prototype, "disableItemClick", null);
    __decorate([
        Input()
    ], CarouselComponent.prototype, "displayMode", null);
    __decorate([
        Input()
    ], CarouselComponent.prototype, "hideArrows", null);
    __decorate([
        Input()
    ], CarouselComponent.prototype, "hideIndicators", null);
    __decorate([
        Input()
    ], CarouselComponent.prototype, "indicatorTemplate", null);
    __decorate([
        Input()
    ], CarouselComponent.prototype, "interval", null);
    __decorate([
        Input()
    ], CarouselComponent.prototype, "itemTemplate", null);
    __decorate([
        Input()
    ], CarouselComponent.prototype, "keyboard", null);
    __decorate([
        Input()
    ], CarouselComponent.prototype, "locale", null);
    __decorate([
        Input()
    ], CarouselComponent.prototype, "localizeFormatFunction", null);
    __decorate([
        Input()
    ], CarouselComponent.prototype, "loop", null);
    __decorate([
        Input()
    ], CarouselComponent.prototype, "messages", null);
    __decorate([
        Input()
    ], CarouselComponent.prototype, "readonly", null);
    __decorate([
        Input()
    ], CarouselComponent.prototype, "rightToLeft", null);
    __decorate([
        Input()
    ], CarouselComponent.prototype, "slideShow", null);
    __decorate([
        Input()
    ], CarouselComponent.prototype, "swipe", null);
    __decorate([
        Input()
    ], CarouselComponent.prototype, "theme", null);
    __decorate([
        Input()
    ], CarouselComponent.prototype, "unfocusable", null);
    __decorate([
        Input()
    ], CarouselComponent.prototype, "wheel", null);
    __decorate([
        Output()
    ], CarouselComponent.prototype, "onChange", void 0);
    __decorate([
        Output()
    ], CarouselComponent.prototype, "onChanging", void 0);
    __decorate([
        Output()
    ], CarouselComponent.prototype, "onSwipeleft", void 0);
    __decorate([
        Output()
    ], CarouselComponent.prototype, "onSwiperight", void 0);
    CarouselComponent = __decorate([
        Directive({
            exportAs: 'smart-carousel', selector: 'smart-carousel, [smart-carousel]'
        })
    ], CarouselComponent);
    return CarouselComponent;
}(BaseElement));

var CarouselModule = /** @class */ (function () {
    function CarouselModule() {
    }
    CarouselModule = __decorate([
        NgModule({
            declarations: [CarouselComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            exports: [CarouselComponent]
        })
    ], CarouselModule);
    return CarouselModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { CarouselComponent, CarouselModule, Smart, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-carousel.js.map
