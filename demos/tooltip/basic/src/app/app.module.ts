import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule } from '@smart-webcomponents-angular/button';
import { RadioButtonModule } from '@smart-webcomponents-angular/radiobutton';
import { TooltipModule } from '@smart-webcomponents-angular/tooltip';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, ButtonModule, RadioButtonModule, TooltipModule ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
