import { Validator } from './../index';
import { ValidatorRule } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { BaseElement } from './smart.element';
export { ValidatorRuleType, ValidatorRule, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { Validator } from './../index';
export declare class ValidatorComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<Validator>);
    private eventHandlers;
    nativeElement: Validator;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description  */
    rules: ValidatorRule[];
    /** @description A valid CSS selector of an element on the page to be used as a container for validation error messages. */
    validationSummarySelector: string;
    /** @description Clears the error messages.
    */
    reset(): void;
    /** @description Opens the dropDown.
    * @param {Function} result?. A callback function to call when validating inputs.
    */
    validate(result?: Function): void;
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
