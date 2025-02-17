import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GaugeModule } from '@smart-webcomponents-angular/gauge';
import { RadioButtonModule } from '@smart-webcomponents-angular/radiobutton';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, GaugeModule, RadioButtonModule ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
