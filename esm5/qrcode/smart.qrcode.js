import * as tslib_1 from "tslib";
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Smart } from './smart.element';
var QRcodeComponent = /** @class */ (function (_super) {
    tslib_1.__extends(QRcodeComponent, _super);
    function QRcodeComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        /** @description This event is triggered when the value of the QR Code is invalid.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	invalidCharacters, 	lengthValidity, 	patternValidity, 	value)
        *   invalidCharacters - An array indicating the invalid characters.
        *   lengthValidity - A boolean indicating the length validity.
        *   patternValidity - A boolean indicating the pattern validity.
        *   value - the invalid value of the QR Code.
        */
        _this.onInvalid = new EventEmitter();
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    QRcodeComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('smart-qrcode');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(QRcodeComponent.prototype, "backgroundColor", {
        /** @description Sets the background color of the QR Code element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.backgroundColor : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.backgroundColor = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QRcodeComponent.prototype, "displayLabel", {
        /** @description Sets whether the QR Code label is visible. */
        get: function () {
            return this.nativeElement ? this.nativeElement.displayLabel : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.displayLabel = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QRcodeComponent.prototype, "embedImage", {
        /** @description Sets an embedded image. */
        get: function () {
            return this.nativeElement ? this.nativeElement.embedImage : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.embedImage = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QRcodeComponent.prototype, "errorLevel", {
        /** @description Sets the error correction level. */
        get: function () {
            return this.nativeElement ? this.nativeElement.errorLevel : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.errorLevel = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QRcodeComponent.prototype, "imageBackgroundColor", {
        /** @description Sets color to the transparent parts of the embedded image. Background remains transparent if set to empty string. */
        get: function () {
            return this.nativeElement ? this.nativeElement.imageBackgroundColor : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.imageBackgroundColor = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QRcodeComponent.prototype, "imageHeight", {
        /** @description Sets the height of the embedded image. */
        get: function () {
            return this.nativeElement ? this.nativeElement.imageHeight : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.imageHeight = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QRcodeComponent.prototype, "imageWidth", {
        /** @description Sets the width of the embedded image. */
        get: function () {
            return this.nativeElement ? this.nativeElement.imageWidth : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.imageWidth = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QRcodeComponent.prototype, "labelColor", {
        /** @description Sets the color of the QR Code label. */
        get: function () {
            return this.nativeElement ? this.nativeElement.labelColor : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.labelColor = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QRcodeComponent.prototype, "labelFont", {
        /** @description Sets the font family of the QR Code label. */
        get: function () {
            return this.nativeElement ? this.nativeElement.labelFont : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.labelFont = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QRcodeComponent.prototype, "labelFontSize", {
        /** @description Sets the font size of the QR Code label. */
        get: function () {
            return this.nativeElement ? this.nativeElement.labelFontSize : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.labelFontSize = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QRcodeComponent.prototype, "labelMarginBottom", {
        /** @description Sets the bottom margin of the QR Code label. */
        get: function () {
            return this.nativeElement ? this.nativeElement.labelMarginBottom : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.labelMarginBottom = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QRcodeComponent.prototype, "labelMarginTop", {
        /** @description Sets the top margin of the QR Code label. */
        get: function () {
            return this.nativeElement ? this.nativeElement.labelMarginTop : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.labelMarginTop = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QRcodeComponent.prototype, "labelPosition", {
        /** @description Sets the position of the QR Code label. */
        get: function () {
            return this.nativeElement ? this.nativeElement.labelPosition : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.labelPosition = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QRcodeComponent.prototype, "lineColor", {
        /** @description Sets the color of the QR Code lines. */
        get: function () {
            return this.nativeElement ? this.nativeElement.lineColor : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.lineColor = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QRcodeComponent.prototype, "squareWidth", {
        /** @description Sets the width of the QR Code square. */
        get: function () {
            return this.nativeElement ? this.nativeElement.squareWidth : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.squareWidth = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QRcodeComponent.prototype, "renderAs", {
        /** @description Sets the rendering mode of the QR Code. */
        get: function () {
            return this.nativeElement ? this.nativeElement.renderAs : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.renderAs = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QRcodeComponent.prototype, "value", {
        /** @description Sets or gets the value of the QR Code. */
        get: function () {
            return this.nativeElement ? this.nativeElement.value : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.value = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QRcodeComponent.prototype, "width", {
        /** @description Sets or gets the width of the QR Code. If the width is set to 0, the width of the QR Code is calculated automatically. */
        get: function () {
            return this.nativeElement ? this.nativeElement.width : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.width = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QRcodeComponent.prototype, "height", {
        /** @description Sets or gets the height of the QR Code. If the height is set to 0, the height of the QR Code is calculated automatically. */
        get: function () {
            return this.nativeElement ? this.nativeElement.height : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.height = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /** @description Exports the QR Code.
    * @param {string} format. The format of the exported file - svg, png, jpg
    * @param {string} fileName?. The name of the exported file
    */
    QRcodeComponent.prototype.export = function (format, fileName) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.export(format, fileName);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.export(format, fileName);
            });
        }
    };
    /** @description Gets the base64 string of the QR Code
    * @param {string} format. The dataURL format of the string - svg, png, jpg
    * @returns {string}
  */
    QRcodeComponent.prototype.getDataURL = function (format) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getDataURL(format);
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
    /** @description Gets the base64 string of the QR Code
    * @param {string} format. The dataURL format of the string - svg, png, jpg
    * @returns {any}
  */
    QRcodeComponent.prototype.getDataURLAsync = function (format) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getDataURLAsync(format);
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
    /** @description Gets the validity of the QR Code
    * @returns {boolean}
  */
    QRcodeComponent.prototype.isValid = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.isValid();
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
    Object.defineProperty(QRcodeComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    QRcodeComponent.prototype.ngOnInit = function () {
    };
    QRcodeComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        this.listen();
    };
    QRcodeComponent.prototype.ngOnDestroy = function () {
        this.unlisten();
    };
    QRcodeComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    /** @description Add event listeners. */
    QRcodeComponent.prototype.listen = function () {
        var that = this;
        that.eventHandlers['invalidHandler'] = function (event) { that.onInvalid.emit(event); };
        that.nativeElement.addEventListener('invalid', that.eventHandlers['invalidHandler']);
    };
    /** @description Remove event listeners. */
    QRcodeComponent.prototype.unlisten = function () {
        var that = this;
        if (that.eventHandlers['invalidHandler']) {
            that.nativeElement.removeEventListener('invalid', that.eventHandlers['invalidHandler']);
        }
    };
    QRcodeComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    tslib_1.__decorate([
        Input()
    ], QRcodeComponent.prototype, "backgroundColor", null);
    tslib_1.__decorate([
        Input()
    ], QRcodeComponent.prototype, "displayLabel", null);
    tslib_1.__decorate([
        Input()
    ], QRcodeComponent.prototype, "embedImage", null);
    tslib_1.__decorate([
        Input()
    ], QRcodeComponent.prototype, "errorLevel", null);
    tslib_1.__decorate([
        Input()
    ], QRcodeComponent.prototype, "imageBackgroundColor", null);
    tslib_1.__decorate([
        Input()
    ], QRcodeComponent.prototype, "imageHeight", null);
    tslib_1.__decorate([
        Input()
    ], QRcodeComponent.prototype, "imageWidth", null);
    tslib_1.__decorate([
        Input()
    ], QRcodeComponent.prototype, "labelColor", null);
    tslib_1.__decorate([
        Input()
    ], QRcodeComponent.prototype, "labelFont", null);
    tslib_1.__decorate([
        Input()
    ], QRcodeComponent.prototype, "labelFontSize", null);
    tslib_1.__decorate([
        Input()
    ], QRcodeComponent.prototype, "labelMarginBottom", null);
    tslib_1.__decorate([
        Input()
    ], QRcodeComponent.prototype, "labelMarginTop", null);
    tslib_1.__decorate([
        Input()
    ], QRcodeComponent.prototype, "labelPosition", null);
    tslib_1.__decorate([
        Input()
    ], QRcodeComponent.prototype, "lineColor", null);
    tslib_1.__decorate([
        Input()
    ], QRcodeComponent.prototype, "squareWidth", null);
    tslib_1.__decorate([
        Input()
    ], QRcodeComponent.prototype, "renderAs", null);
    tslib_1.__decorate([
        Input()
    ], QRcodeComponent.prototype, "value", null);
    tslib_1.__decorate([
        Input()
    ], QRcodeComponent.prototype, "width", null);
    tslib_1.__decorate([
        Input()
    ], QRcodeComponent.prototype, "height", null);
    tslib_1.__decorate([
        Output()
    ], QRcodeComponent.prototype, "onInvalid", void 0);
    QRcodeComponent = tslib_1.__decorate([
        Directive({
            exportAs: 'smart-qrcode', selector: 'smart-qrcode, [smart-qrcode]'
        })
    ], QRcodeComponent);
    return QRcodeComponent;
}(BaseElement));
export { QRcodeComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQucXJjb2RlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc21hcnQtd2ViY29tcG9uZW50cy1hbmd1bGFyL3FyY29kZS8iLCJzb3VyY2VzIjpbInNtYXJ0LnFyY29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUosT0FBTyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVyRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFReEM7SUFBcUMsMkNBQVc7SUFDL0MseUJBQVksR0FBdUI7UUFBbkMsWUFDQyxrQkFBTSxHQUFHLENBQUMsU0FFVjtRQUVPLG1CQUFhLEdBQVUsRUFBRSxDQUFDO1FBd0xsQzs7Ozs7O1VBTUU7UUFDUSxlQUFTLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7UUFsTW5FLEtBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDLGFBQXVCLENBQUM7O0lBQ2xELENBQUM7SUFLRDs7T0FFRztJQUNJLHlDQUFlLEdBQXRCLFVBQXVCLFVBQWU7UUFBZiwyQkFBQSxFQUFBLGVBQWU7UUFDbEMsSUFBSSxDQUFDLGFBQWEsR0FBVyxRQUFRLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3ZFLEtBQUssSUFBSSxZQUFZLElBQUksVUFBVSxFQUFFO1lBQ25DLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEdBQUcsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzdEO1FBQ0QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzNCLENBQUM7SUFHRCxzQkFBSSw0Q0FBZTtRQUZuQixxRUFBcUU7YUFFckU7WUFD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QyxLQUFLLEVBQUU7eURBR1A7SUFPRDtRQURDLEtBQUssRUFBRTt3REFHUDtJQU9EO1FBREMsS0FBSyxFQUFFO29EQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7c0RBR1A7SUFPRDtRQURDLEtBQUssRUFBRTttREFHUDtJQU9EO1FBREMsS0FBSyxFQUFFO2dEQUdQO0lBT0Q7UUFEQyxLQUFLLEVBQUU7Z0RBR1A7SUFPRDtRQURDLEtBQUssRUFBRTtpREFHUDtJQVlTO1FBQVQsTUFBTSxFQUFFO3NEQUEyRDtJQXJNeEQsZUFBZTtRQUozQixTQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSw4QkFBOEI7U0FDbEUsQ0FBQztPQUVXLGVBQWUsQ0ErVDNCO0lBQUQsc0JBQUM7Q0FBQSxBQS9URCxDQUFxQyxXQUFXLEdBK1QvQztTQS9UWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUVJjb2RlIH0gZnJvbSAnLi8uLi9pbmRleCc7XG5pbXBvcnQgeyBRUmNvZGVMYWJlbFBvc2l0aW9uLCBRUmNvZGVSZW5kZXJBcywgRWxlbWVudFJlbmRlck1vZGV9IGZyb20gJy4vLi4vaW5kZXgnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBEaXJlY3RpdmUsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBTaW1wbGVDaGFuZ2VzLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFzZUVsZW1lbnQsIFNtYXJ0IH0gZnJvbSAnLi9zbWFydC5lbGVtZW50JztcbmV4cG9ydCB7IFFSY29kZUxhYmVsUG9zaXRpb24sIFFSY29kZVJlbmRlckFzLCBFbGVtZW50UmVuZGVyTW9kZX0gZnJvbSAnLi8uLi9pbmRleCc7XG5leHBvcnQgeyBTbWFydCB9IGZyb20gJy4vc21hcnQuZWxlbWVudCc7XG5leHBvcnQgeyBRUmNvZGUgfSBmcm9tICcuLy4uL2luZGV4JztcblxuXG5ARGlyZWN0aXZlKHtcblx0ZXhwb3J0QXM6ICdzbWFydC1xcmNvZGUnLFx0c2VsZWN0b3I6ICdzbWFydC1xcmNvZGUsIFtzbWFydC1xcmNvZGVdJ1xufSlcblxuZXhwb3J0IGNsYXNzIFFSY29kZUNvbXBvbmVudCBleHRlbmRzIEJhc2VFbGVtZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG5cdGNvbnN0cnVjdG9yKHJlZjogRWxlbWVudFJlZjxRUmNvZGU+KSB7XG5cdFx0c3VwZXIocmVmKTtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPSByZWYubmF0aXZlRWxlbWVudCBhcyBRUmNvZGU7XG5cdH1cblxuXHRwcml2YXRlIGV2ZW50SGFuZGxlcnM6IGFueVtdID0gW107XG5cblx0cHVibGljIG5hdGl2ZUVsZW1lbnQ6IFFSY29kZTtcblx0LyoqIEBkZXNjcmlwdGlvbiBDcmVhdGVzIHRoZSBjb21wb25lbnQgb24gZGVtYW5kLlxuXHQgKiBAcGFyYW0gcHJvcGVydGllcyBBbiBvcHRpb25hbCBvYmplY3Qgb2YgcHJvcGVydGllcywgd2hpY2ggd2lsbCBiZSBhZGRlZCB0byB0aGUgdGVtcGxhdGUgYmluZGVkIG9uZXMuXG5cdCAqL1xuXHRwdWJsaWMgY3JlYXRlQ29tcG9uZW50KHByb3BlcnRpZXMgPSB7fSk6IGFueSB7XG4gICAgXHR0aGlzLm5hdGl2ZUVsZW1lbnQgPSA8UVJjb2RlPmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NtYXJ0LXFyY29kZScpO1xuXHRcdGZvciAobGV0IHByb3BlcnR5TmFtZSBpbiBwcm9wZXJ0aWVzKSB7IFxuIFx0XHRcdHRoaXMubmF0aXZlRWxlbWVudFtwcm9wZXJ0eU5hbWVdID0gcHJvcGVydGllc1twcm9wZXJ0eU5hbWVdO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50O1xuXHR9XG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyB0aGUgYmFja2dyb3VuZCBjb2xvciBvZiB0aGUgUVIgQ29kZSBlbGVtZW50LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgYmFja2dyb3VuZENvbG9yKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5iYWNrZ3JvdW5kQ29sb3IgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGJhY2tncm91bmRDb2xvcih2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmJhY2tncm91bmRDb2xvciA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHdoZXRoZXIgdGhlIFFSIENvZGUgbGFiZWwgaXMgdmlzaWJsZS4gKi9cblx0QElucHV0KClcblx0Z2V0IGRpc3BsYXlMYWJlbCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc3BsYXlMYWJlbCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZGlzcGxheUxhYmVsKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmRpc3BsYXlMYWJlbCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIGFuIGVtYmVkZGVkIGltYWdlLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgZW1iZWRJbWFnZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuZW1iZWRJbWFnZSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgZW1iZWRJbWFnZSh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmVtYmVkSW1hZ2UgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyB0aGUgZXJyb3IgY29ycmVjdGlvbiBsZXZlbC4gKi9cblx0QElucHV0KClcblx0Z2V0IGVycm9yTGV2ZWwoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmVycm9yTGV2ZWwgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGVycm9yTGV2ZWwodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5lcnJvckxldmVsID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgY29sb3IgdG8gdGhlIHRyYW5zcGFyZW50IHBhcnRzIG9mIHRoZSBlbWJlZGRlZCBpbWFnZS4gQmFja2dyb3VuZCByZW1haW5zIHRyYW5zcGFyZW50IGlmIHNldCB0byBlbXB0eSBzdHJpbmcuICovXG5cdEBJbnB1dCgpXG5cdGdldCBpbWFnZUJhY2tncm91bmRDb2xvcigpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaW1hZ2VCYWNrZ3JvdW5kQ29sb3IgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGltYWdlQmFja2dyb3VuZENvbG9yKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaW1hZ2VCYWNrZ3JvdW5kQ29sb3IgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyB0aGUgaGVpZ2h0IG9mIHRoZSBlbWJlZGRlZCBpbWFnZS4gKi9cblx0QElucHV0KClcblx0Z2V0IGltYWdlSGVpZ2h0KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5pbWFnZUhlaWdodCA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgaW1hZ2VIZWlnaHQodmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5pbWFnZUhlaWdodCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSB3aWR0aCBvZiB0aGUgZW1iZWRkZWQgaW1hZ2UuICovXG5cdEBJbnB1dCgpXG5cdGdldCBpbWFnZVdpZHRoKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5pbWFnZVdpZHRoIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBpbWFnZVdpZHRoKHZhbHVlOiBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaW1hZ2VXaWR0aCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBjb2xvciBvZiB0aGUgUVIgQ29kZSBsYWJlbC4gKi9cblx0QElucHV0KClcblx0Z2V0IGxhYmVsQ29sb3IoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxhYmVsQ29sb3IgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGxhYmVsQ29sb3IodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sYWJlbENvbG9yID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgdGhlIGZvbnQgZmFtaWx5IG9mIHRoZSBRUiBDb2RlIGxhYmVsLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbGFiZWxGb250KCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sYWJlbEZvbnQgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGxhYmVsRm9udCh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxhYmVsRm9udCA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBmb250IHNpemUgb2YgdGhlIFFSIENvZGUgbGFiZWwuICovXG5cdEBJbnB1dCgpXG5cdGdldCBsYWJlbEZvbnRTaXplKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sYWJlbEZvbnRTaXplIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBsYWJlbEZvbnRTaXplKHZhbHVlOiBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubGFiZWxGb250U2l6ZSA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBib3R0b20gbWFyZ2luIG9mIHRoZSBRUiBDb2RlIGxhYmVsLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbGFiZWxNYXJnaW5Cb3R0b20oKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxhYmVsTWFyZ2luQm90dG9tIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBsYWJlbE1hcmdpbkJvdHRvbSh2YWx1ZTogbnVtYmVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxhYmVsTWFyZ2luQm90dG9tID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgdGhlIHRvcCBtYXJnaW4gb2YgdGhlIFFSIENvZGUgbGFiZWwuICovXG5cdEBJbnB1dCgpXG5cdGdldCBsYWJlbE1hcmdpblRvcCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubGFiZWxNYXJnaW5Ub3AgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGxhYmVsTWFyZ2luVG9wKHZhbHVlOiBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubGFiZWxNYXJnaW5Ub3AgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyB0aGUgcG9zaXRpb24gb2YgdGhlIFFSIENvZGUgbGFiZWwuICovXG5cdEBJbnB1dCgpXG5cdGdldCBsYWJlbFBvc2l0aW9uKCk6IFFSY29kZUxhYmVsUG9zaXRpb24gfCBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQubGFiZWxQb3NpdGlvbiA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgbGFiZWxQb3NpdGlvbih2YWx1ZTogUVJjb2RlTGFiZWxQb3NpdGlvbiB8IHN0cmluZykge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5sYWJlbFBvc2l0aW9uID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgdGhlIGNvbG9yIG9mIHRoZSBRUiBDb2RlIGxpbmVzLiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgbGluZUNvbG9yKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5saW5lQ29sb3IgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IGxpbmVDb2xvcih2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LmxpbmVDb2xvciA9IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSB3aWR0aCBvZiB0aGUgUVIgQ29kZSBzcXVhcmUuICovXG5cdEBJbnB1dCgpXG5cdGdldCBzcXVhcmVXaWR0aCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc3F1YXJlV2lkdGggOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHNxdWFyZVdpZHRoKHZhbHVlOiBudW1iZXIpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuc3F1YXJlV2lkdGggPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyB0aGUgcmVuZGVyaW5nIG1vZGUgb2YgdGhlIFFSIENvZGUuICovXG5cdEBJbnB1dCgpXG5cdGdldCByZW5kZXJBcygpOiBRUmNvZGVSZW5kZXJBcyB8IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5yZW5kZXJBcyA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXQgcmVuZGVyQXModmFsdWU6IFFSY29kZVJlbmRlckFzIHwgc3RyaW5nKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LnJlbmRlckFzID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgdmFsdWUgb2YgdGhlIFFSIENvZGUuICovXG5cdEBJbnB1dCgpXG5cdGdldCB2YWx1ZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblx0c2V0IHZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gU2V0cyBvciBnZXRzIHRoZSB3aWR0aCBvZiB0aGUgUVIgQ29kZS4gSWYgdGhlIHdpZHRoIGlzIHNldCB0byAwLCB0aGUgd2lkdGggb2YgdGhlIFFSIENvZGUgaXMgY2FsY3VsYXRlZCBhdXRvbWF0aWNhbGx5LiAqL1xuXHRASW5wdXQoKVxuXHRnZXQgd2lkdGgoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LndpZHRoIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCB3aWR0aCh2YWx1ZTogbnVtYmVyKSB7XG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID8gdGhpcy5uYXRpdmVFbGVtZW50LndpZHRoID0gdmFsdWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFNldHMgb3IgZ2V0cyB0aGUgaGVpZ2h0IG9mIHRoZSBRUiBDb2RlLiBJZiB0aGUgaGVpZ2h0IGlzIHNldCB0byAwLCB0aGUgaGVpZ2h0IG9mIHRoZSBRUiBDb2RlIGlzIGNhbGN1bGF0ZWQgYXV0b21hdGljYWxseS4gKi9cblx0QElucHV0KClcblx0Z2V0IGhlaWdodCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUVsZW1lbnQuaGVpZ2h0IDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldCBoZWlnaHQodmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5oZWlnaHQgPSB2YWx1ZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgdmFsdWUgb2YgdGhlIFFSIENvZGUgaXMgaW52YWxpZC4gXG5cdCogIEBwYXJhbSBldmVudC4gVGhlIGN1c3RvbSBldmVudC4gXHRDdXN0b20gZXZlbnQgd2FzIGNyZWF0ZWQgd2l0aDogZXZlbnQuZGV0YWlsKFx0aW52YWxpZENoYXJhY3RlcnMsIFx0bGVuZ3RoVmFsaWRpdHksIFx0cGF0dGVyblZhbGlkaXR5LCBcdHZhbHVlKVxuXHQqICAgaW52YWxpZENoYXJhY3RlcnMgLSBBbiBhcnJheSBpbmRpY2F0aW5nIHRoZSBpbnZhbGlkIGNoYXJhY3RlcnMuXG5cdCogICBsZW5ndGhWYWxpZGl0eSAtIEEgYm9vbGVhbiBpbmRpY2F0aW5nIHRoZSBsZW5ndGggdmFsaWRpdHkuXG5cdCogICBwYXR0ZXJuVmFsaWRpdHkgLSBBIGJvb2xlYW4gaW5kaWNhdGluZyB0aGUgcGF0dGVybiB2YWxpZGl0eS5cblx0KiAgIHZhbHVlIC0gdGhlIGludmFsaWQgdmFsdWUgb2YgdGhlIFFSIENvZGUuXG5cdCovXG5cdEBPdXRwdXQoKSBvbkludmFsaWQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqIEBkZXNjcmlwdGlvbiBFeHBvcnRzIHRoZSBRUiBDb2RlLiBcblx0KiBAcGFyYW0ge3N0cmluZ30gZm9ybWF0LiBUaGUgZm9ybWF0IG9mIHRoZSBleHBvcnRlZCBmaWxlIC0gc3ZnLCBwbmcsIGpwZ1xuXHQqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTmFtZT8uIFRoZSBuYW1lIG9mIHRoZSBleHBvcnRlZCBmaWxlXG5cdCovXG4gICAgcHVibGljIGV4cG9ydChmb3JtYXQ6IHN0cmluZywgZmlsZU5hbWU/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZXhwb3J0KGZvcm1hdCwgZmlsZU5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmV4cG9ydChmb3JtYXQsIGZpbGVOYW1lKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gR2V0cyB0aGUgYmFzZTY0IHN0cmluZyBvZiB0aGUgUVIgQ29kZSBcblx0KiBAcGFyYW0ge3N0cmluZ30gZm9ybWF0LiBUaGUgZGF0YVVSTCBmb3JtYXQgb2YgdGhlIHN0cmluZyAtIHN2ZywgcG5nLCBqcGdcblx0KiBAcmV0dXJucyB7c3RyaW5nfVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0RGF0YVVSTChmb3JtYXQpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0RGF0YVVSTChmb3JtYXQpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cdC8qKiBAZGVzY3JpcHRpb24gR2V0cyB0aGUgYmFzZTY0IHN0cmluZyBvZiB0aGUgUVIgQ29kZSBcblx0KiBAcGFyYW0ge3N0cmluZ30gZm9ybWF0LiBUaGUgZGF0YVVSTCBmb3JtYXQgb2YgdGhlIHN0cmluZyAtIHN2ZywgcG5nLCBqcGdcblx0KiBAcmV0dXJucyB7YW55fVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0RGF0YVVSTEFzeW5jKGZvcm1hdCk6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgZ2V0UmVzdWx0T25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXREYXRhVVJMQXN5bmMoZm9ybWF0KTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UmVzdWx0T25SZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEdldHMgdGhlIHZhbGlkaXR5IG9mIHRoZSBRUiBDb2RlIFxuXHQqIEByZXR1cm5zIHtib29sZWFufVxuICAqL1xuXHRwdWJsaWMgYXN5bmMgaXNWYWxpZCgpOiBQcm9taXNlPGFueT4ge1xuXHRcdGNvbnN0IGdldFJlc3VsdE9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC53aGVuUmVuZGVyZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuaXNWYWxpZCgpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHRPblJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cblx0Z2V0IGlzUmVuZGVyZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudCA/IHRoaXMubmF0aXZlRWxlbWVudC5pc1JlbmRlcmVkIDogZmFsc2U7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0fVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cbiAgICAgIHRoYXQub25DcmVhdGUuZW1pdCh0aGF0Lm5hdGl2ZUVsZW1lbnQpO1xuXG5cdFx0U21hcnQuUmVuZGVyKCk7XG5cblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc21hcnQtYW5ndWxhcicpO1xuXG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50LndoZW5SZW5kZXJlZCgoKSA9PiB7IHRoYXQub25SZWFkeS5lbWl0KHRoYXQubmF0aXZlRWxlbWVudCk7IH0pO1xuXHRcdHRoaXMubGlzdGVuKCk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLnVubGlzdGVuKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdFx0aWYgKHRoaXMubmF0aXZlRWxlbWVudCAmJiB0aGlzLm5hdGl2ZUVsZW1lbnQuaXNSZW5kZXJlZCkge1xuXHRcdFx0Zm9yIChjb25zdCBwcm9wTmFtZSBpbiBjaGFuZ2VzKSB7XG5cdFx0XHRcdGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuXHRcdFx0XHRcdHRoaXMubmF0aXZlRWxlbWVudFtwcm9wTmFtZV0gPSBjaGFuZ2VzW3Byb3BOYW1lXS5jdXJyZW50VmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIEFkZCBldmVudCBsaXN0ZW5lcnMuICovXG5cdHByaXZhdGUgbGlzdGVuKCk6IHZvaWQge1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcblx0XHR0aGF0LmV2ZW50SGFuZGxlcnNbJ2ludmFsaWRIYW5kbGVyJ10gPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7IHRoYXQub25JbnZhbGlkLmVtaXQoZXZlbnQpOyB9XG5cdFx0dGhhdC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ludmFsaWQnLCB0aGF0LmV2ZW50SGFuZGxlcnNbJ2ludmFsaWRIYW5kbGVyJ10pO1xuXG5cdH1cblxuXHQvKiogQGRlc2NyaXB0aW9uIFJlbW92ZSBldmVudCBsaXN0ZW5lcnMuICovXG5cdHByaXZhdGUgdW5saXN0ZW4oKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXHRcdGlmICh0aGF0LmV2ZW50SGFuZGxlcnNbJ2ludmFsaWRIYW5kbGVyJ10pIHtcblx0XHRcdHRoYXQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdpbnZhbGlkJywgdGhhdC5ldmVudEhhbmRsZXJzWydpbnZhbGlkSGFuZGxlciddKTtcblx0XHR9XG5cblx0fVxufVxuIl19