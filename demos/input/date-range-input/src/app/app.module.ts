import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CheckBoxModule } from '@smart-webcomponents-angular/checkbox';
import { DateRangeInputModule } from '@smart-webcomponents-angular/daterangeinput';
import { RadioButtonModule } from '@smart-webcomponents-angular/radiobutton';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, CheckBoxModule, DateRangeInputModule, RadioButtonModule ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
