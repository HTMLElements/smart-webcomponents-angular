import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BarcodeModule } from '@smart-webcomponents-angular/barcode';
import { RadioButtonModule } from '@smart-webcomponents-angular/radiobutton';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, BarcodeModule, RadioButtonModule ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
