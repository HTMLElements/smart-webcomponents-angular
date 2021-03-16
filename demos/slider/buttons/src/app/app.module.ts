import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SliderModule } from '@smart-webcomponents-angular/slider';import { ToggleButtonModule } from '@smart-webcomponents-angular/togglebutton';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, SliderModule, ToggleButtonModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
