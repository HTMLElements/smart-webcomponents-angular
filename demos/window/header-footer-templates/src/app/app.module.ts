import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GaugeModule } from '@smart-webcomponents-angular/gauge';
import { ButtonModule } from '@smart-webcomponents-angular/button';
import { WindowModule } from '@smart-webcomponents-angular/window';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, GaugeModule, ButtonModule, WindowModule ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
