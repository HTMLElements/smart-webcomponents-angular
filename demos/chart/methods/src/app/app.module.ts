import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule } from '@smart-webcomponents-angular/button';import { ChartModule } from '@smart-webcomponents-angular/chart';import { NumericTextBoxModule } from '@smart-webcomponents-angular/numerictextbox';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, ButtonModule, ChartModule, NumericTextBoxModule ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
