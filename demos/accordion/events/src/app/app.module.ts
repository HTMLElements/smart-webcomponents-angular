import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AccordionModule } from '@smart-webcomponents-angular/accordion';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, AccordionModule ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
