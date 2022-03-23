import { BarCode } from './../index';
import { BarCodeLabelPosition, BarCodeRenderAs, BarCodeType } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { BarCodeLabelPosition, BarCodeRenderAs, BarCodeType, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { BarCode } from './../index';
export declare class BarCodeComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<BarCode>);
    private eventHandlers;
    nativeElement: BarCode;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description Sets the background color of the barcode element. */
    backgroundColor: string;
    /** @description Sets whether the barcode label is visible. */
    disaplyLabel: boolean;
    /** @description Sets the color of the barcode label. */
    labelCOlor: string;
    /** @description Sets the font family of the barcode label. */
    labelFont: string;
    /** @description Sets the font size of the barcode label. */
    labelFontSize: number;
    /** @description Sets the bottom margin of the barcode label. */
    labelMarginBottom: number;
    /** @description Sets the top margin of the barcode label. */
    labelMarginTop: number;
    /** @description Sets the position of the barcode label. */
    labelPosition: BarCodeLabelPosition;
    /** @description Sets the color of the barcode lines. */
    lineColor: string;
    /** @description Sets the height of the barcode line. */
    lineHeight: number;
    /** @description Sets the width of the barcode line. */
    lineWidth: number;
    /** @description Sets the rendering mode of the barcode. */
    renderAs: BarCodeRenderAs;
    /** @description Sets the barcode type */
    type: BarCodeType;
    /** @description Sets or gets the value of the barcode. */
    value: string;
    /** @description This event is triggered when the value of the barcode is invalid.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	invalidCharacters)
    *   value - the invalid value of the barcode.
    *   invalidCharacters - An array indicating the invalid characters.
    */
    onInvalid: EventEmitter<CustomEvent>;
    /** @description Exports the barcode.
    * @param {string} format. The format of the exported file - svg, png, jpg
    * @param {string} fileName?. The name of the exported file
    */
    export(format: string, fileName?: string): void;
    /** @description Gets the base64 string of the barcode
    * @param {string} format. The dataURL format of the string - svg, png, jpg
    * @returns {string}
  */
    getDataURL(format: any): Promise<any>;
    /** @description Gets the base64 string of the barcode
    * @param {string} format. The dataURL format of the string - svg, png, jpg
    * @returns {any}
  */
    getDataURLAsync(format: any): Promise<any>;
    /** @description Gets the validity of the barcode
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
