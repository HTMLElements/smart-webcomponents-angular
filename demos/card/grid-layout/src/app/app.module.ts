import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CardModule } from '@smart-webcomponents-angular/card';
import { PagerModule } from '@smart-webcomponents-angular/pager';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, CardModule, PagerModule ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
