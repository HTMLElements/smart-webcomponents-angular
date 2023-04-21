import { QRcode } from './../index';
import { QRcodeLabelPosition, QRcodeRenderAs } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { QRcodeLabelPosition, QRcodeRenderAs, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { QRcode } from './../index';
export declare class QRcodeComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<QRcode>);
    private eventHandlers;
    nativeElement: QRcode;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description Sets the background color of the QR Code element. */
    backgroundColor: string;
    /** @description Sets whether the QR Code label is visible. */
    displayLabel: boolean;
    /** @description Sets an embedded image. */
    embedImage: string;
    /** @description Sets the error correction level. */
    errorLevel: string;
    /** @description Sets color to the transparent parts of the embedded image. Background remains transparent if set to empty string. */
    imageBackgroundColor: string;
    /** @description Sets the height of the embedded image. */
    imageHeight: number;
    /** @description Sets the width of the embedded image. */
    imageWidth: number;
    /** @description Sets the color of the QR Code label. */
    labelColor: string;
    /** @description Sets the font family of the QR Code label. */
    labelFont: string;
    /** @description Sets the font size of the QR Code label. */
    labelFontSize: number;
    /** @description Sets the bottom margin of the QR Code label. */
    labelMarginBottom: number;
    /** @description Sets the top margin of the QR Code label. */
    labelMarginTop: number;
    /** @description Sets the position of the QR Code label. */
    labelPosition: QRcodeLabelPosition | string;
    /** @description Sets the color of the QR Code lines. */
    lineColor: string;
    /** @description Sets the width of the QR Code square. */
    squareWidth: number;
    /** @description Sets the rendering mode of the QR Code. */
    renderAs: QRcodeRenderAs | string;
    /** @description Sets or gets the value of the QR Code. */
    value: string;
    /** @description Sets or gets the width of the QR Code. If the width is set to 0, the width of the QR Code is calculated automatically. */
    width: number;
    /** @description Sets or gets the height of the QR Code. If the height is set to 0, the height of the QR Code is calculated automatically. */
    height: number;
    /** @description This event is triggered when the value of the QR Code is invalid.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	invalidCharacters, 	lengthValidity, 	patternValidity, 	value)
    *   invalidCharacters - An array indicating the invalid characters.
    *   lengthValidity - A boolean indicating the length validity.
    *   patternValidity - A boolean indicating the pattern validity.
    *   value - the invalid value of the QR Code.
    */
    onInvalid: EventEmitter<CustomEvent>;
    /** @description Exports the QR Code.
    * @param {string} format. The format of the exported file - svg, png, jpg
    * @param {string} fileName?. The name of the exported file
    */
    export(format: string, fileName?: string): void;
    /** @description Gets the base64 string of the QR Code
    * @param {string} format. The dataURL format of the string - svg, png, jpg
    * @returns {string}
  */
    getDataURL(format: any): Promise<any>;
    /** @description Gets the base64 string of the QR Code
    * @param {string} format. The dataURL format of the string - svg, png, jpg
    * @returns {any}
  */
    getDataURLAsync(format: any): Promise<any>;
    /** @description Gets the validity of the QR Code
    * @returns {boolean}
  */
    isValid(): Promise<any>;
    readonly isRendered: boolean;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    /** @description Add event listeners. */
    private listen;
    /** @description Remove event listeners. */
    private unlisten;
}
