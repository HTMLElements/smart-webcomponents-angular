import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PowerButtonModule } from '@smart-webcomponents-angular/powerbutton';
import { TooltipModule } from '@smart-webcomponents-angular/tooltip';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, PowerButtonModule, TooltipModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
