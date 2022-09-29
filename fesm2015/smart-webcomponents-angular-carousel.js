
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.carousel';

import { __decorate } from 'tslib';
import { EventEmitter, Output, Input, ElementRef, Directive, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

class BaseElement {
    constructor(ref) {
        this.onCreate = new EventEmitter();
        this.onReady = new EventEmitter();
        this.onAttach = new EventEmitter();
        this.onDetach = new EventEmitter();
        const that = this;
        this.nativeElement = ref.nativeElement;
        that.nativeElement.onAttached = () => {
            that.onAttach.emit(that.nativeElement);
        };
        that.nativeElement.onDetached = () => {
            that.onDetach.emit(that.nativeElement);
        };
    }
    addEventListener(type, listener, options = false) {
        this.nativeElement.addEventListener(type, listener, options);
    }
    removeEventListener(type, listener, options = false) {
        this.nativeElement.removeEventListener(type, listener, options);
    }
    dispatchEvent(event) {
        return this.nativeElement.dispatchEvent(event);
    }
    blur() {
        this.nativeElement.blur();
    }
    click() {
        this.nativeElement.click();
    }
    focus(options) {
        this.nativeElement.focus(options);
    }
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    get locale() {
        return this.nativeElement ? this.nativeElement.locale : undefined;
    }
    set locale(value) {
        this.nativeElement ? this.nativeElement.locale = value : undefined;
    }
    /** @description Callback used to customize the format of the messages that are returned from the Localization Module. */
    get localizeFormatFunction() {
        return this.nativeElement ? this.nativeElement.localizeFormatFunction : undefined;
    }
    set localizeFormatFunction(value) {
        this.nativeElement ? this.nativeElement.localizeFormatFunction = value : undefined;
    }
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
    get messages() {
        return this.nativeElement ? this.nativeElement.messages : undefined;
    }
    set messages(value) {
        this.nativeElement ? this.nativeElement.messages = value : undefined;
    }
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    get rightToLeft() {
        return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
    }
    set rightToLeft(value) {
        this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
    }
    /** @description Determines the theme. Theme defines the look of the element */
    get theme() {
        return this.nativeElement ? this.nativeElement.theme : undefined;
    }
    set theme(value) {
        this.nativeElement ? this.nativeElement.theme = value : undefined;
    }
}
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
const Smart = window.Smart;

let CarouselComponent = class CarouselComponent extends BaseElement {
    constructor(ref) {
        super(ref);
        this.eventHandlers = [];
        /** @description Triggered when the active ( in view ) slide is changed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	previousIndex)
        *   index - The index of the new active slide.
        *   previousIndex - The index of the previous slide that was active.
        */
        this.onChange = new EventEmitter();
        /** @description Triggered when the process of slide changing starts.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	previousIndex)
        *   index - The index of the new active slide.
        *   previousIndex - The index of the previous slide that was active.
        */
        this.onChanging = new EventEmitter();
        /** @description This event is triggered when the user swipes to the left inside the Carousel.
        *  @param event. The custom event. 	*/
        this.onSwipeleft = new EventEmitter();
        /** @description This event is triggered when the user swipes to the right inside the Carousel.
        *  @param event. The custom event. 	*/
        this.onSwiperight = new EventEmitter();
        this.nativeElement = ref.nativeElement;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties = {}) {
        this.nativeElement = document.createElement('smart-carousel');
        for (let propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    }
    /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
    get animation() {
        return this.nativeElement ? this.nativeElement.animation : undefined;
    }
    set animation(value) {
        this.nativeElement ? this.nativeElement.animation = value : undefined;
    }
    /** @description The items switch automatically if set to true or to a custom number(representing the timeout in milliseconds). This property works if slideShow property is enabled. */
    get autoPlay() {
        return this.nativeElement ? this.nativeElement.autoPlay : undefined;
    }
    set autoPlay(value) {
        this.nativeElement ? this.nativeElement.autoPlay = value : undefined;
    }
    /** @description An array of objects. Each object defines an item. The following object properties are available: label - a string representing the label of the item.content - a string representing the content of the itemimage - a string representing a url link to an image.HTMLcontent - a string representing some HTML structure taht will be generated inside the item. */
    get dataSource() {
        return this.nativeElement ? this.nativeElement.dataSource : undefined;
    }
    set dataSource(value) {
        this.nativeElement ? this.nativeElement.dataSource = value : undefined;
    }
    /** @description Specifies the timeout before a slide changes when a navigation button is pressed. Navigation buttons are repeat buttons that will repeat the oepration after the delay is passed. */
    get delay() {
        return this.nativeElement ? this.nativeElement.delay : undefined;
    }
    set delay(value) {
        this.nativeElement ? this.nativeElement.delay = value : undefined;
    }
    /** @description Enables or disables the element. */
    get disabled() {
        return this.nativeElement ? this.nativeElement.disabled : undefined;
    }
    set disabled(value) {
        this.nativeElement ? this.nativeElement.disabled = value : undefined;
    }
    /** @description Disabled the possibility to navigated to an item by clicking on item in displayMode 3d. By default users can navigate to items that are not currently active by clicking on them. */
    get disableItemClick() {
        return this.nativeElement ? this.nativeElement.disableItemClick : undefined;
    }
    set disableItemClick(value) {
        this.nativeElement ? this.nativeElement.disableItemClick = value : undefined;
    }
    /** @description Determines the display mode. */
    get displayMode() {
        return this.nativeElement ? this.nativeElement.displayMode : undefined;
    }
    set displayMode(value) {
        this.nativeElement ? this.nativeElement.displayMode = value : undefined;
    }
    /** @description Hides the navigation buttons. */
    get hideArrows() {
        return this.nativeElement ? this.nativeElement.hideArrows : undefined;
    }
    set hideArrows(value) {
        this.nativeElement ? this.nativeElement.hideArrows = value : undefined;
    }
    /** @description Hides the slide indication panel that shows which item is currently in view (active item). */
    get hideIndicators() {
        return this.nativeElement ? this.nativeElement.hideIndicators : undefined;
    }
    set hideIndicators(value) {
        this.nativeElement ? this.nativeElement.hideIndicators = value : undefined;
    }
    /** @description Can be used to customize the slide indicator panel of the accordion. The property can be a string that represents the id of an HTMLTemplateElement in the DOM or it's direct reference. */
    get indicatorTemplate() {
        return this.nativeElement ? this.nativeElement.indicatorTemplate : undefined;
    }
    set indicatorTemplate(value) {
        this.nativeElement ? this.nativeElement.indicatorTemplate = value : undefined;
    }
    /** @description Determines the interval (in milliseconds) between a slide transitions when slideShow is enabled. */
    get interval() {
        return this.nativeElement ? this.nativeElement.interval : undefined;
    }
    set interval(value) {
        this.nativeElement ? this.nativeElement.interval = value : undefined;
    }
    /** @description Used to completely customize the content of an item. The property can be a string that represents the id of an HTMLTemplateElement in the DOM or it's direct reference. The content of the template can contain property bindings that refer to the dataSource. */
    get itemTemplate() {
        return this.nativeElement ? this.nativeElement.itemTemplate : undefined;
    }
    set itemTemplate(value) {
        this.nativeElement ? this.nativeElement.itemTemplate = value : undefined;
    }
    /** @description Activates/deactivates keyboard navigation. By default, items can not be navigated via keyboard */
    get keyboard() {
        return this.nativeElement ? this.nativeElement.keyboard : undefined;
    }
    set keyboard(value) {
        this.nativeElement ? this.nativeElement.keyboard = value : undefined;
    }
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    get locale() {
        return this.nativeElement ? this.nativeElement.locale : undefined;
    }
    set locale(value) {
        this.nativeElement ? this.nativeElement.locale = value : undefined;
    }
    /** @description Callback used to customize the format of the messages that are returned from the Localization Module. */
    get localizeFormatFunction() {
        return this.nativeElement ? this.nativeElement.localizeFormatFunction : undefined;
    }
    set localizeFormatFunction(value) {
        this.nativeElement ? this.nativeElement.localizeFormatFunction = value : undefined;
    }
    /** @description Determines whether the the items should start over when the first or last item is reached. */
    get loop() {
        return this.nativeElement ? this.nativeElement.loop : undefined;
    }
    set loop(value) {
        this.nativeElement ? this.nativeElement.loop = value : undefined;
    }
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
    get messages() {
        return this.nativeElement ? this.nativeElement.messages : undefined;
    }
    set messages(value) {
        this.nativeElement ? this.nativeElement.messages = value : undefined;
    }
    /** @description If the element is readonly, users cannot interact with it. */
    get readonly() {
        return this.nativeElement ? this.nativeElement.readonly : undefined;
    }
    set readonly(value) {
        this.nativeElement ? this.nativeElement.readonly = value : undefined;
    }
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    get rightToLeft() {
        return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
    }
    set rightToLeft(value) {
        this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
    }
    /** @description When slideShow property is set to true, the carousel changes the active slide automatically with a delay set in interval property. */
    get slideShow() {
        return this.nativeElement ? this.nativeElement.slideShow : undefined;
    }
    set slideShow(value) {
        this.nativeElement ? this.nativeElement.slideShow = value : undefined;
    }
    /** @description Enables or disables switching to the previous/next slide via swiping left/right. By default swiping is disabled. */
    get swipe() {
        return this.nativeElement ? this.nativeElement.swipe : undefined;
    }
    set swipe(value) {
        this.nativeElement ? this.nativeElement.swipe = value : undefined;
    }
    /** @description Determines the theme. Theme defines the look of the element */
    get theme() {
        return this.nativeElement ? this.nativeElement.theme : undefined;
    }
    set theme(value) {
        this.nativeElement ? this.nativeElement.theme = value : undefined;
    }
    /** @description If is set to true, the element cannot be focused. */
    get unfocusable() {
        return this.nativeElement ? this.nativeElement.unfocusable : undefined;
    }
    set unfocusable(value) {
        this.nativeElement ? this.nativeElement.unfocusable = value : undefined;
    }
    /** @description Activates/deactivates slide navigation via mouse wheel. By default it's disabled. */
    get wheel() {
        return this.nativeElement ? this.nativeElement.wheel : undefined;
    }
    set wheel(value) {
        this.nativeElement ? this.nativeElement.wheel = value : undefined;
    }
    /** @description Navigates to the next slide.
    */
    next() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.next();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.next();
            });
        }
    }
    /** @description Pauses the slide show if slideShow is enabled.
    */
    pause() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.pause();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.pause();
            });
        }
    }
    /** @description Starts the slide show if slideShow is enabled.
    */
    play() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.play();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.play();
            });
        }
    }
    /** @description Navigates to the previous slide.
    */
    prev() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.prev();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.prev();
            });
        }
    }
    /** @description Navigates to a specific slide with the given index.
    * @param {number} index. The index of the target slide.
    */
    slideTo(index) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.slideTo(index);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.slideTo(index);
            });
        }
    }
    get isRendered() {
        return this.nativeElement ? this.nativeElement.isRendered : false;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        const that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(() => { that.onReady.emit(that.nativeElement); });
        this.listen();
    }
    ngOnDestroy() {
        this.unlisten();
    }
    ngOnChanges(changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (const propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    }
    /** @description Add event listeners. */
    listen() {
        const that = this;
        that.eventHandlers['changeHandler'] = (event) => { that.onChange.emit(event); };
        that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
        that.eventHandlers['changingHandler'] = (event) => { that.onChanging.emit(event); };
        that.nativeElement.addEventListener('changing', that.eventHandlers['changingHandler']);
        that.eventHandlers['swipeleftHandler'] = (event) => { that.onSwipeleft.emit(event); };
        that.nativeElement.addEventListener('swipeleft', that.eventHandlers['swipeleftHandler']);
        that.eventHandlers['swiperightHandler'] = (event) => { that.onSwiperight.emit(event); };
        that.nativeElement.addEventListener('swiperight', that.eventHandlers['swiperightHandler']);
    }
    /** @description Remove event listeners. */
    unlisten() {
        const that = this;
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
    }
};
CarouselComponent.ctorParameters = () => [
    { type: ElementRef }
];
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

let CarouselModule = class CarouselModule {
};
CarouselModule = __decorate([
    NgModule({
        declarations: [CarouselComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        exports: [CarouselComponent]
    })
], CarouselModule);

/**
 * Generated bundle index. Do not edit.
 */

export { CarouselComponent, CarouselModule, Smart, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-carousel.js.map
