import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RadioButtonModule } from '@smart-webcomponents-angular/radiobutton';
import { DropDownListModule } from '@smart-webcomponents-angular/dropdownlist';
import { GanttChartModule } from '@smart-webcomponents-angular/ganttchart';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, RadioButtonModule, DropDownListModule, GanttChartModule ],
    bootstrap: [ AppComponent ],
	
})

export class AppModule { }
