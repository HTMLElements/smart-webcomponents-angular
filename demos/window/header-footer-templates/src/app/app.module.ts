import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule } from '@smart-webcomponents-angular/button';
import { GaugeModule } from '@smart-webcomponents-angular/gauge';
import { WindowModule } from '@smart-webcomponents-angular/window';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, GaugeModule, WindowModule, ButtonModule ],
    bootstrap: [ AppComponent ],
	
})

export class AppModule { }
