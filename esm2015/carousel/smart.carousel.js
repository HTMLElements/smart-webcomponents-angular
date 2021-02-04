import * as tslib_1 from "tslib";
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Smart } from './smart.element';
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
tslib_1.__decorate([
    Input()
], CarouselComponent.prototype, "animation", null);
tslib_1.__decorate([
    Input()
], CarouselComponent.prototype, "autoPlay", null);
tslib_1.__decorate([
    Input()
], CarouselComponent.prototype, "dataSource", null);
tslib_1.__decorate([
    Input()
], CarouselComponent.prototype, "delay", null);
tslib_1.__decorate([
    Input()
], CarouselComponent.prototype, "disabled", null);
tslib_1.__decorate([
    Input()
], CarouselComponent.prototype, "disableItemClick", null);
tslib_1.__decorate([
    Input()
], CarouselComponent.prototype, "displayMode", null);
tslib_1.__decorate([
    Input()
], CarouselComponent.prototype, "hideArrows", null);
tslib_1.__decorate([
    Input()
], CarouselComponent.prototype, "hideIndicators", null);
tslib_1.__decorate([
    Input()
], CarouselComponent.prototype, "indicatorTemplate", null);
tslib_1.__decorate([
    Input()
], CarouselComponent.prototype, "interval", null);
tslib_1.__decorate([
    Input()
], CarouselComponent.prototype, "itemTemplate", null);
tslib_1.__decorate([
    Input()
], CarouselComponent.prototype, "keyboard", null);
tslib_1.__decorate([
    Input()
], CarouselComponent.prototype, "locale", null);
tslib_1.__decorate([
    Input()
], CarouselComponent.prototype, "localizeFormatFunction", null);
tslib_1.__decorate([
    Input()
], CarouselComponent.prototype, "loop", null);
tslib_1.__decorate([
    Input()
], CarouselComponent.prototype, "messages", null);
tslib_1.__decorate([
    Input()
], CarouselComponent.prototype, "readonly", null);
tslib_1.__decorate([
    Input()
], CarouselComponent.prototype, "rightToLeft", null);
tslib_1.__decorate([
    Input()
], CarouselComponent.prototype, "slideShow", null);
tslib_1.__decorate([
    Input()
], CarouselComponent.prototype, "swipe", null);
tslib_1.__decorate([
    Input()
], CarouselComponent.prototype, "theme", null);
tslib_1.__decorate([
    Input()
], CarouselComponent.prototype, "unfocusable", null);
tslib_1.__decorate([
    Input()
], CarouselComponent.prototype, "wheel", null);
tslib_1.__decorate([
    Output()
], CarouselComponent.prototype, "onChange", void 0);
tslib_1.__decorate([
    Output()
], CarouselComponent.prototype, "onChanging", void 0);
tslib_1.__decorate([
    Output()
], CarouselComponent.prototype, "onSwipeleft", void 0);
tslib_1.__decorate([
    Output()
], CarouselComponent.prototype, "onSwiperight", void 0);
CarouselComponent = tslib_1.__decorate([
    Directive({
        selector: 'smart-carousel, [smart-carousel]'
    })
], CarouselComponent);
export { CarouselComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQuY2Fyb3VzZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zbWFydC13ZWJjb21wb25lbnRzLWFuZ3VsYXIvY2Fyb3VzZWwvIiwic291cmNlcyI6WyJzbWFydC5jYXJvdXNlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUosT0FBTyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVyRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFReEMsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBa0IsU0FBUSxXQUFXO0lBQ2pELFlBQVksR0FBeUI7UUFDcEMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBSUosa0JBQWEsR0FBVSxFQUFFLENBQUM7UUFxT2xDOzs7O1VBSUU7UUFDUSxhQUFRLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFbkU7Ozs7VUFJRTtRQUNRLGVBQVUsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVyRTs4Q0FDc0M7UUFDNUIsZ0JBQVcsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV0RTs4Q0FDc0M7UUFDNUIsaUJBQVksR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQTVQdEUsSUFBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUMsYUFBeUIsQ0FBQztJQUNwRCxDQUFDO0lBS0Q7O09BRUc7SUFDSSxlQUFlLENBQUMsVUFBVSxHQUFHLEVBQUU7UUFDbEMsSUFBSSxDQUFDLGFBQWEsR0FBYSxRQUFRLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDM0UsS0FBSyxJQUFJLFlBQVksSUFB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QUs7UUFDUixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDbEUsQ0FBQztJQUNELElBQUksS0FBSyxDQUFDLEtBQWM7UUFDdkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDbkUsQ0FBQztJQUVELCtFQUErRTtJQUUvRSxJQUFJLEtBQUs7UUFDUixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDbEUsQ0FBQztJQUNELElBQUksS0FBSyxDQUFDLEtBQWE7UUFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDbkUsQ0FBQztJQUVELHFFQUFxRTtJQUVyRSxJQUFJLFdBQVc7UUFDZCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEUsQ0FBQztJQUNELElBQUksV0FBVyxDQUFDLEtBQWM7UUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDekUsQ0FBQztJQUVELHFHQUFxRztJQUVyRyxJQUFJLEtBQUs7UUFDUixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDbEUsQ0FBQztJQUNELElBQUksS0FB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QUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcm91c2VsIH0gZnJvbSAnLi8uLi9pbmRleCc7XG5pbXBvcnQgeyBBbmltYXRpb24sIENhcm91c2VsRGlzcGxheU1vZGUsIEVsZW1lbnRSZW5kZXJNb2RlfSBmcm9tICcuLy4uL2luZGV4JztcbmltcG9ydCB7IENvbXBvbmVudCwgRGlyZWN0aXZlLCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgU2ltcGxlQ2hhbmdlcywgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VFbGVtZW50LCBTbWFydCB9IGZyb20gJy4vc21hcnQuZWxlbWVudCc7XG5leHBvcnQgeyBBbmltYXRpb24sIENhcm91c2VsRGlzcGxheU1vZGUsIEVsZW1lbnRSZW5kZXJNb2RlfSBmcm9tICcuLy4uL2luZGV4JztcbmV4cG9ydCB7IFNtYXJ0IH0gZnJvbSAnLi9zbWFydC5lbGVtZW50JztcbmV4cG9ydCB7IENhcm91c2VsIH0gZnJvbSAnLi8uLi9pbmRleCc7XG5cblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnc21hcnQtY2Fyb3VzZWwsIFtzbWFydC1jYXJvdXNlbF0nXG59KVxuXG5leHBvcnQgY2xhc3MgQ2Fyb3VzZWxDb21wb25lbnQgZXh0ZW5kcyBCYXNlRWxlbWVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuXHRjb25zdHJ1Y3RvcihyZWY6IEVsZW1lbnRSZWY8Q2Fyb3VzZWw+KSB7XG5cdFx0c3VwZXIocmVmKTtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPSByZWYubmF0aXZlRWxlbWVudCBhcyBDYXJvdXNlbDtcblx0fVxuXG5cdHByaXZhdGUgZXZlbnRIYW5kbGVyczogYW55W10gPSBbXTtcblxuXHRwdWJsaWMgbmF0aXZlRWxlbWVudDogQ2Fyb3VzZWw7XG5cdC8qKiBAZGVzY3JpcHRpb24gQ3JlYXRlcyB0aGUgY29tcG9uZW50IG9uIGRlbWFuZC5cblx0ICogQHBhcmFtIHByb3BlcnRpZXMgQW4gb3B0aW9uYWwgb2JqZWN0IG9mIHByb3BlcnRpZXMsIHdoaWNoIHdpbGwgYmUgYWRkZWQgdG8gdGhlIHRlbXBsYXRlIGJpbmRlZCBvbmVzLlxuXHQgKi9cblx0cHVibGljIGNyZWF0ZUNvbXBvbmVudChwcm9wZXJ0aWVzID0ge30pOiBhbnkge1xuICAgIFx0dGhpcy5uYXRpdmVFbGVtZW50ID0gPENhcm91c2VsPmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NtYXJ0LWNhcm91c2VsJyk7XG5cdFx0Zm9yIChsZXQgcHJvcGVydHlOYW1lIGluIHByb3BlcnRpZXMpIHsgXG4gXHRcdFx0dGhpcy5uYXRpdmVFbGVtZW50W3Byb3BlcnR5TmFtZV0gPSBwcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV07XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQ7XG5cdH1cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIG9yIGdldHMgdGhlIGFuaW1hdGlvbiBtb2RlLiBBbmltYXRpb24gaXMgZGlzYWJsZWQgd2hlbiB0aGUgcHJvcGVydHkgaXMgc2V0IHRvICdub25lJyAqL1xuXHRASW5wdXQoKVxuXHRnZXQgYW5pbWF0aW9uKCk6IEFuaW1hdGlvbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hbmltYXRpb24gOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGFuaW1hdGlvbih2YWx1ZTogQW5pbWF0aW9uKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmFuaW1hdGlvbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBUaGUgaXRlbXMgc3dpdGNoIGF1dG9tYXRpY2FsbHkgaWYgc2V0IHRvIHRydWUgb3IgdG8gYSBjdXN0b20gbnVtYmVyKHJlcHJlc2VudGluZyB0aGUgdGltZW91dCBpbiBtaWxsaXNlY29uZHMpLiBUaGlzIHByb3BlcnR5IHdvcmtzIGlmIHNsaWRlU2hvdyBwcm9wZXJ0eSBpcyBlbmFibGVkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgYXV0b1BsYXkoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5hdXRvUGxheSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgYXV0b1BsYXkodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuYXV0b1BsYXkgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQW4gYXJyYXkgb2Ygb2JqZWN0cy4gRWFjaCBvYmplY3QgZGVmaW5lcyBhbiBpdGVtLiBUaGUgZm9sbG93aW5nIG9iamVjdCBwcm9wZXJ0aWVzIGFyZSBhdmFpbGFibGU6IGxhYmVsIC0gYSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBsYWJlbCBvZiB0aGUgaXRlbS5jb250ZW50IC0gYSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBjb250ZW50IG9mIHRoZSBpdGVtaW1hZ2UgLSBhIHN0cmluZyByZXByZXNlbnRpbmcgYSB1cmwgbGluayB0byBhbiBpbWFnZS5IVE1MY29udGVudCAtIGEgc3RyaW5nIHJlcHJlc2VudGluZyBzb21lIEhUTUwgc3RydWN0dXJlIHRhaHQgd2lsbCBiZSBnZW5lcmF0ZWQgaW5zaWRlIHRoZSBpdGVtLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGF0YVNvdXJjZSgpOiBhbnlbXSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kYXRhU291cmNlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkYXRhU291cmNlKHZhbHVlOiBhbnlbXSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kYXRhU291cmNlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNwZWNpZmllcyB0aGUgdGltZW91dCBiZWZvcmUgYSBzbGlkZSBjaGFuZ2VzIHdoZW4gYSBuYXZpZ2F0aW9uIGJ1dHRvbiBpcyBwcmVzc2VkLiBOYXZpZ2F0aW9uIGJ1dHRvbnMgYXJlIHJlcGVhdCBidXR0b25zIHRoYXQgd2lsbCByZXBlYXQgdGhlIG9lcHJhdGlvbiBhZnRlciB0aGUgZGVsYXkgaXMgcGFzc2VkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGVsYXkoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRlbGF5IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkZWxheSh2YWx1ZTogbnVtYmVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRlbGF5ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEVuYWJsZXMgb3IgZGlzYWJsZXMgdGhlIGVsZW1lbnQuICovXG5cdEBJbnB1dCgpXG5cdGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVkIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlZCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEaXNhYmxlZCB0aGUgcG9zc2liaWxpdHkgdG8gbmF2aWdhdGVkIHRvIGFuIGl0ZW0gYnkgY2xpY2tpbmcgb24gaXRlbSBpbiBkaXNwbGF5TW9kZSAzZC4gQnkgZGVmYXVsdCB1c2VycyBjYW4gbmF2aWdhdGUgdG8gaXRlbXMgdGhhdCBhcmUgbm90IGN1cnJlbnRseSBhY3RpdmUgYnkgY2xpY2tpbmcgb24gdGhlbS4gKi9cblx0QElucHV0KClcblx0Z2V0IGRpc2FibGVJdGVtQ2xpY2soKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNhYmxlSXRlbUNsaWNrIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBkaXNhYmxlSXRlbUNsaWNrKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVJdGVtQ2xpY2sgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgZGlzcGxheSBtb2RlLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZGlzcGxheU1vZGUoKTogQ2Fyb3VzZWxEaXNwbGF5TW9kZSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5kaXNwbGF5TW9kZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGlzcGxheU1vZGUodmFsdWU6IENhcm91c2VsRGlzcGxheU1vZGUpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZGlzcGxheU1vZGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSGlkZXMgdGhlIG5hdmlnYXRpb24gYnV0dG9ucy4gKi9cblx0QElucHV0KClcblx0Z2V0IGhpZGVBcnJvd3MoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oaWRlQXJyb3dzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBoaWRlQXJyb3dzKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmhpZGVBcnJvd3MgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gSGlkZXMgdGhlIHNsaWRlIGluZGljYXRpb24gcGFuZWwgdGhhdCBzaG93cyB3aGljaCBpdGVtIGlzIGN1cnJlbnRseSBpbiB2aWV3IChhY3RpdmUgaXRlbSkuICovXG5cdEBJbnB1dCgpXG5cdGdldCBoaWRlSW5kaWNhdG9ycygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmhpZGVJbmRpY2F0b3JzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBoaWRlSW5kaWNhdG9ycyh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oaWRlSW5kaWNhdG9ycyA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBDYW4gYmUgdXNlZCB0byBjdXN0b21pemUgdGhlIHNsaWRlIGluZGljYXRvciBwYW5lbCBvZiB0aGUgYWNjb3JkaW9uLiBUaGUgcHJvcGVydHkgY2FuIGJlIGEgc3RyaW5nIHRoYXQgcmVwcmVzZW50cyB0aGUgaWQgb2YgYW4gSFRNTFRlbXBsYXRlRWxlbWVudCBpbiB0aGUgRE9NIG9yIGl0J3MgZGlyZWN0IHJlZmVyZW5jZS4gKi9cblx0QElucHV0KClcblx0Z2V0IGluZGljYXRvclRlbXBsYXRlKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5pbmRpY2F0b3JUZW1wbGF0ZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgaW5kaWNhdG9yVGVtcGxhdGUodmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5pbmRpY2F0b3JUZW1wbGF0ZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHRoZSBpbnRlcnZhbCAoaW4gbWlsbGlzZWNvbmRzKSBiZXR3ZWVuIGEgc2xpZGUgdHJhbnNpdGlvbnMgd2hlbiBzbGlkZVNob3cgaXMgZW5hYmxlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IGludGVydmFsKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5pbnRlcnZhbCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgaW50ZXJ2YWwodmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5pbnRlcnZhbCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBVc2VkIHRvIGNvbXBsZXRlbHkgY3VzdG9taXplIHRoZSBjb250ZW50IG9mIGFuIGl0ZW0uIFRoZSBwcm9wZXJ0eSBjYW4gYmUgYSBzdHJpbmcgdGhhdCByZXByZXNlbnRzIHRoZSBpZCBvZiBhbiBIVE1MVGVtcGxhdGVFbGVtZW50IGluIHRoZSBET00gb3IgaXQncyBkaXJlY3QgcmVmZXJlbmNlLiBUaGUgY29udGVudCBvZiB0aGUgdGVtcGxhdGUgY2FuIGNvbnRhaW4gcHJvcGVydHkgYmluZGluZ3MgdGhhdCByZWZlciB0byB0aGUgZGF0YVNvdXJjZS4gKi9cblx0QElucHV0KClcblx0Z2V0IGl0ZW1UZW1wbGF0ZSgpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaXRlbVRlbXBsYXRlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBpdGVtVGVtcGxhdGUodmFsdWU6IGFueSkge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5pdGVtVGVtcGxhdGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gQWN0aXZhdGVzL2RlYWN0aXZhdGVzIGtleWJvYXJkIG5hdmlnYXRpb24uIEJ5IGRlZmF1bHQsIGl0ZW1zIGNhbiBub3QgYmUgbmF2aWdhdGVkIHZpYSBrZXlib2FyZCAqL1xuXHRASW5wdXQoKVxuXHRnZXQga2V5Ym9hcmQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5rZXlib2FyZCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQga2V5Ym9hcmQodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQua2V5Ym9hcmQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSBsYW5ndWFnZS4gVXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZSBwcm9wZXJ0eSBtZXNzYWdlcy4gICovXG5cdEBJbnB1dCgpXG5cdGdldCBsb2NhbGUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxvY2FsZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbG9jYWxlKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubG9jYWxlID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIENhbGxiYWNrIHVzZWQgdG8gY3VzdG9taXplIHRoZSBmb3JtYXQgb2YgdGhlIG1lc3NhZ2VzIHRoYXQgYXJlIHJldHVybmVkIGZyb20gdGhlIExvY2FsaXphdGlvbiBNb2R1bGUuICovXG5cdEBJbnB1dCgpXG5cdGdldCBsb2NhbGl6ZUZvcm1hdEZ1bmN0aW9uKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sb2NhbGl6ZUZvcm1hdEZ1bmN0aW9uIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBsb2NhbGl6ZUZvcm1hdEZ1bmN0aW9uKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubG9jYWxpemVGb3JtYXRGdW5jdGlvbiA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHRoZSBpdGVtcyBzaG91bGQgc3RhcnQgb3ZlciB3aGVuIHRoZSBmaXJzdCBvciBsYXN0IGl0ZW0gaXMgcmVhY2hlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IGxvb3AoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sb29wIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBsb29wKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lmxvb3AgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIGFuIG9iamVjdCBzcGVjaWZ5aW5nIHN0cmluZ3MgdXNlZCBpbiB0aGUgd2lkZ2V0IHRoYXQgY2FuIGJlIGxvY2FsaXplZC4gVXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZSBwcm9wZXJ0eSBsb2NhbGUuICAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbWVzc2FnZXMoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm1lc3NhZ2VzIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBtZXNzYWdlcyh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50Lm1lc3NhZ2VzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIElmIHRoZSBlbGVtZW50IGlzIHJlYWRvbmx5LCB1c2VycyBjYW5ub3QgaW50ZXJhY3Qgd2l0aCBpdC4gKi9cblx0QElucHV0KClcblx0Z2V0IHJlYWRvbmx5KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQucmVhZG9ubHkgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHJlYWRvbmx5KHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlYWRvbmx5ID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgdmFsdWUgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBlbGVtZW50IGlzIGFsaWduZWQgdG8gc3VwcG9ydCBsb2NhbGVzIHVzaW5nIHJpZ2h0LXRvLWxlZnQgZm9udHMuICovXG5cdEBJbnB1dCgpXG5cdGdldCByaWdodFRvTGVmdCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJpZ2h0VG9MZWZ0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCByaWdodFRvTGVmdCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yaWdodFRvTGVmdCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBXaGVuIHNsaWRlU2hvdyBwcm9wZXJ0eSBpcyBzZXQgdG8gdHJ1ZSwgdGhlIGNhcm91c2VsIGNoYW5nZXMgdGhlIGFjdGl2ZSBzbGlkZSBhdXRvbWF0aWNhbGx5IHdpdGggYSBkZWxheSBzZXQgaW4gaW50ZXJ2YWwgcHJvcGVydHkuICovXG5cdEBJbnB1dCgpXG5cdGdldCBzbGlkZVNob3coKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zbGlkZVNob3cgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHNsaWRlU2hvdyh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zbGlkZVNob3cgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRW5hYmxlcyBvciBkaXNhYmxlcyBzd2l0Y2hpbmcgdG8gdGhlIHByZXZpb3VzL25leHQgc2xpZGUgdmlhIHN3aXBpbmcgbGVmdC9yaWdodC4gQnkgZGVmYXVsdCBzd2lwaW5nIGlzIGRpc2FibGVkLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgc3dpcGUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5zd2lwZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgc3dpcGUodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc3dpcGUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyB0aGUgdGhlbWUuIFRoZW1lIGRlZmluZXMgdGhlIGxvb2sgb2YgdGhlIGVsZW1lbnQgKi9cblx0QElucHV0KClcblx0Z2V0IHRoZW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50aGVtZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgdGhlbWUodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC50aGVtZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBJZiBpcyBzZXQgdG8gdHJ1ZSwgdGhlIGVsZW1lbnQgY2Fubm90IGJlIGZvY3VzZWQuICovXG5cdEBJbnB1dCgpXG5cdGdldCB1bmZvY3VzYWJsZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnVuZm9jdXNhYmxlIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB1bmZvY3VzYWJsZSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC51bmZvY3VzYWJsZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBY3RpdmF0ZXMvZGVhY3RpdmF0ZXMgc2xpZGUgbmF2aWdhdGlvbiB2aWEgbW91c2Ugd2hlZWwuIEJ5IGRlZmF1bHQgaXQncyBkaXNhYmxlZC4gKi9cblx0QElucHV0KClcblx0Z2V0IHdoZWVsKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlZWwgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHdoZWVsKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LndoZWVsID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFRyaWdnZXJlZCB3aGVuIHRoZSBhY3RpdmUgKCBpbiB2aWV3ICkgc2xpZGUgaXMgY2hhbmdlZC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRpbmRleCwgXHRwcmV2aW91c0luZGV4KVxuXHQqICAgaW5kZXggLSBUaGUgaW5kZXggb2YgdGhlIG5ldyBhY3RpdmUgc2xpZGUuXG5cdCogICBwcmV2aW91c0luZGV4IC0gVGhlIGluZGV4IG9mIHRoZSBwcmV2aW91cyBzbGlkZSB0aGF0IHdhcyBhY3RpdmUuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkNoYW5nZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRyaWdnZXJlZCB3aGVuIHRoZSBwcm9jZXNzIG9mIHNsaWRlIGNoYW5naW5nIHN0YXJ0cy5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdEN1c3RvbSBldmVudCB3YXMgY3JlYXRlZCB3aXRoOiBldmVudC5kZXRhaWwoXHRpbmRleCwgXHRwcmV2aW91c0luZGV4KVxuXHQqICAgaW5kZXggLSBUaGUgaW5kZXggb2YgdGhlIG5ldyBhY3RpdmUgc2xpZGUuXG5cdCogICBwcmV2aW91c0luZGV4IC0gVGhlIGluZGV4IG9mIHRoZSBwcmV2aW91cyBzbGlkZSB0aGF0IHdhcyBhY3RpdmUuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkNoYW5naW5nOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgdXNlciBzd2lwZXMgdG8gdGhlIGxlZnQgaW5zaWRlIHRoZSBDYXJvdXNlbC5cblx0KiAgQHBhcmFtIGV2ZW50LiBUaGUgY3VzdG9tIGV2ZW50LiBcdCovXG5cdEBPdXRwdXQoKSBvblN3aXBlbGVmdDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHVzZXIgc3dpcGVzIHRvIHRoZSByaWdodCBpbnNpZGUgdGhlIENhcm91c2VsLlxuXHQqICBAcGFyYW0gZXZlbnQuIFRoZSBjdXN0b20gZXZlbnQuIFx0Ki9cblx0QE91dHB1dCgpIG9uU3dpcGVyaWdodDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKiogQGRlc2NyaXB0aW9uIE5hdmlnYXRlcyB0byB0aGUgbmV4dCBzbGlkZS4gXG5cdCovXG4gICAgcHVibGljIG5leHQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50Lm5leHQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5uZXh0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFBhdXNlcyB0aGUgc2xpZGUgc2hvdyBpZiBzbGlkZVNob3cgaXMgZW5hYmxlZC4gXG5cdCovXG4gICAgcHVibGljIHBhdXNlKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5wYXVzZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnBhdXNlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFN0YXJ0cyB0aGUgc2xpZGUgc2hvdyBpZiBzbGlkZVNob3cgaXMgZW5hYmxlZC4gXG5cdCovXG4gICAgcHVibGljIHBsYXkoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnBsYXkoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5wbGF5KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIE5hdmlnYXRlcyB0byB0aGUgcHJldmlvdXMgc2xpZGUuIFxuXHQqL1xuICAgIHB1YmxpYyBwcmV2KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5wcmV2KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQud2hlblJlbmRlcmVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucHJldigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBOYXZpZ2F0ZXMgdG8gYSBzcGVjaWZpYyBzbGlkZSB3aXRoIHRoZSBnaXZlbiBpbmRleC4gXG5cdCogQHBhcmFtIHtudW1iZXJ9IGluZGV4LiBUaGUgaW5kZXggb2YgdGhlIHRhcmdldCBzbGlkZS5cblx0Ki9cbiAgICBwdWJsaWMgc2xpZGVUbyhpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNsaWRlVG8oaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNsaWRlVG8oaW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXHRnZXQgaXNSZW5kZXJlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQgOiBmYWxzZTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHR9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICBjb25zdCB0aGF0ID0gdGhpcztcblxuICAgICAgdGhhdC5vbkNyZWF0ZS5lbWl0KHRoYXQubmF0aXZlRWxlbWVudCk7XG5cblx0XHRTbWFydC5SZW5kZXIoKTtcblxuXHRcdHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4geyB0aGF0Lm9uUmVhZHkuZW1pdCh0aGF0Lm5hdGl2ZUVsZW1lbnQpOyB9KTtcblx0XHR0aGlzLmxpc3RlbigpO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy51bmxpc3RlbigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXHRcdGlmICh0aGlzLm5hdGl2ZUVsZW1lbnQgJiYgdGhpcy5uYXRpdmVFbGVtZW50LmlzUmVuZGVyZWQpIHtcblx0XHRcdGZvciAoY29uc3QgcHJvcE5hbWUgaW4gY2hhbmdlcykge1xuXHRcdFx0XHRpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcblx0XHRcdFx0XHR0aGlzLm5hdGl2ZUVsZW1lbnRbcHJvcE5hbWVdID0gY2hhbmdlc1twcm9wTmFtZV0uY3VycmVudFZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBBZGQgZXZlbnQgbGlzdGVuZXJzLiAqL1xuXHRwcml2YXRlIGxpc3RlbigpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjaGFuZ2VIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25DaGFuZ2UuZW1pdChldmVudCk7IH1cblx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhhdC5ldmVudEhhbmRsZXJzWydjaGFuZ2VIYW5kbGVyJ10pO1xuXG5cdFx0dGhhdC5ldmVudEhhbmRsZXJzWydjaGFuZ2luZ0hhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vbkNoYW5naW5nLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5naW5nJywgdGhhdC5ldmVudEhhbmRsZXJzWydjaGFuZ2luZ0hhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3N3aXBlbGVmdEhhbmRsZXInXSA9IChldmVudDogQ3VzdG9tRXZlbnQpID0+IHsgdGhhdC5vblN3aXBlbGVmdC5lbWl0KGV2ZW50KTsgfVxuXHRcdHRoYXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzd2lwZWxlZnQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3N3aXBlbGVmdEhhbmRsZXInXSk7XG5cblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ3N3aXBlcmlnaHRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25Td2lwZXJpZ2h0LmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N3aXBlcmlnaHQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ3N3aXBlcmlnaHRIYW5kbGVyJ10pO1xuXG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJlbW92ZSBldmVudCBsaXN0ZW5lcnMuICovXG5cdHByaXZhdGUgdW5saXN0ZW4oKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2NoYW5nZUhhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoYXQuZXZlbnRIYW5kbGVyc1snY2hhbmdlSGFuZGxlciddKTtcblx0XHR9XG5cblx0XHRpZiAodGhhdC5ldmVudEhhbmRsZXJzWydjaGFuZ2luZ0hhbmRsZXInXSkge1xuXHRcdFx0dGhhdC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5naW5nJywgdGhhdC5ldmVudEhhbmRsZXJzWydjaGFuZ2luZ0hhbmRsZXInXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoYXQuZXZlbnRIYW5kbGVyc1snc3dpcGVsZWZ0SGFuZGxlciddKSB7XG5cdFx0XHR0aGF0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc3dpcGVsZWZ0JywgdGhhdC5ldmVudEhhbmRsZXJzWydzd2lwZWxlZnRIYW5kbGVyJ10pO1xuXHRcdH1cblxuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ3N3aXBlcmlnaHRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzd2lwZXJpZ2h0JywgdGhhdC5ldmVudEhhbmRsZXJzWydzd2lwZXJpZ2h0SGFuZGxlciddKTtcblx0XHR9XG5cblx0fVxufVxuIl19