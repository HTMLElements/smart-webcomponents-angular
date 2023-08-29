import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ColorPanelModule } from '@smart-webcomponents-angular/colorpanel';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, ColorPanelModule ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
