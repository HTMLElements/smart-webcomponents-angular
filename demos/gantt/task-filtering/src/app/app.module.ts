import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule } from '@smart-webcomponents-angular/button';
import { GanttChartModule } from '@smart-webcomponents-angular/ganttchart';
import { DropDownListModule } from '@smart-webcomponents-angular/dropdownlist';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, ButtonModule, DropDownListModule, GanttChartModule ],
    bootstrap: [ AppComponent ],
	
})

export class AppModule { }
