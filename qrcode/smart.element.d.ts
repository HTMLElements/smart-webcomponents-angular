declare global {
    interface Window {
        Smart: any;
    }
}
import { ElementRef, EventEmitter } from '@angular/core';
export declare class BaseElement {
    constructor(ref: ElementRef);
    onCreate: EventEmitter<any>;
    onReady: EventEmitter<any>;
    onAttach: EventEmitter<any>;
    onDetach: EventEmitter<any>;
    nativeElement: any;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    dispatchEvent(event: Event): boolean;
    blur(): void;
    click(): void;
    focus(options?: FocusOptions): void;
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    locale: string;
    /** @description Callback used to customize the format of the messages that are returned from the Localization Module. */
    localizeFormatFunction: any;
    /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
    messages: any;
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    rightToLeft: boolean;
    /** @description Determines the theme. Theme defines the look of the element */
    theme: string;
}
export declare const Smart: any;
