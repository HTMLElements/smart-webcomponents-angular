import './polyfills';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
        window['ngRef'].destroy();
    }
    window['ngRef'] = ref;

    // Otherwise, log the boot error
}).catch(err => console.error(err));


const data = formatObject.row.data;

if (!formatObject.template) {
    if (data.attachment_count != null) {
        if (data.attachment_count < 1) {
            formatObject.template = '<div></div>';
        }
        else if (data.attachment_count == 1) {
            formatObject.template = '<div><some fa icon A></div>';
        }
        else if (data.attachment_count > 1) {
            formatObject.template = '<div><some fa icon B></div>';
        }
    }
    else {
        formatObject.template = '<div></div>';
    }
} else {
    if (data.attachment_count != null) {
        if (data.attachment_count < 1) {
            formatObject.template.innerHTML = '';
        }
        else if (data.attachment_count == 1) {
            formatObject.template.innerHTML = '<some fa icon A>';
        }
        else if (data.attachment_count > 1) {
            formatObject.template.innerHTML = '<some fa icon B>';
        }
    }
    else {
        formatObject.template.innerHTML = '';
    }
}


