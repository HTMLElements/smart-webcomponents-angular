
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../../source/modules/smart.scheduler';

import * as pkg from './../../common/rrule.min.js';
window.rrule = { RRule:  pkg.default };
/**
 * Generated bundle index. Do not edit.
 */
export * from './public_api';
export { BaseElement as ɵa } from './smart.element';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtd2ViY29tcG9uZW50cy1hbmd1bGFyLXNjaGVkdWxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NtYXJ0LXdlYmNvbXBvbmVudHMtYW5ndWxhci9zY2hlZHVsZXIvIiwic291cmNlcyI6WyJzbWFydC13ZWJjb21wb25lbnRzLWFuZ3VsYXItc2NoZWR1bGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHO0FBRUgsY0FBYyxjQUFjLENBQUM7QUFFN0IsT0FBTyxFQUFDLFdBQVcsSUFBSSxFQUFFLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogR2VuZXJhdGVkIGJ1bmRsZSBpbmRleC4gRG8gbm90IGVkaXQuXG4gKi9cblxuZXhwb3J0ICogZnJvbSAnLi9wdWJsaWNfYXBpJztcblxuZXhwb3J0IHtCYXNlRWxlbWVudCBhcyDJtWF9IGZyb20gJy4vc21hcnQuZWxlbWVudCc7Il19