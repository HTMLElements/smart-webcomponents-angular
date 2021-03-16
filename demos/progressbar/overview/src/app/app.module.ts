import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ProgressBarModule } from '@smart-webcomponents-angular/progressbar';import { ToggleButtonModule } from '@smart-webcomponents-angular/togglebutton';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, ProgressBarModule, ToggleButtonModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
