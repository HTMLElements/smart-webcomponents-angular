import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RatingModule } from '@smart-webcomponents-angular/rating';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, RatingModule ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
