import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RadioButtonModule } from '@smart-webcomponents-angular/radiobutton';
import { TextBoxModule } from '@smart-webcomponents-angular/textbox';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, RadioButtonModule, TextBoxModule ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
