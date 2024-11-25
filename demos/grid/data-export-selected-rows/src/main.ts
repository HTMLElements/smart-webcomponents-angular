<<<<<<< HEAD
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
=======
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
>>>>>>> 620199ab98db9fa8cd0583aaf7cb3ee0405decae
