import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from '@smart-webcomponents-angular/button';
import { QRcodeModule } from '@smart-webcomponents-angular/qrcode';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, ButtonModule, QRcodeModule ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
