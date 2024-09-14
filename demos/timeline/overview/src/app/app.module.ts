import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TimelineModule } from '@smart-webcomponents-angular/timeline';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule,  TimelineModule],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
