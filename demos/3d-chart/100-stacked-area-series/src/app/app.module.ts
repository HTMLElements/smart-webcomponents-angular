import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { ThreeDChartModule } from '@smart-webcomponents-angular/threedchart';

import { AppComponent } from './app.component';
import '@angular/compiler';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, ThreeDChartModule ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
