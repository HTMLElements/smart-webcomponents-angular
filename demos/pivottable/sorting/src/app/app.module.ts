import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CheckBoxModule } from '@smart-webcomponents-angular/checkbox';import { PivotTableModule } from '@smart-webcomponents-angular/pivottable';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, CheckBoxModule, PivotTableModule ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
