import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DropDownListModule } from '@smart-webcomponents-angular/dropdownlist';
import { GanttChartModule } from '@smart-webcomponents-angular/ganttchart';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, GanttChartModule, DropDownListModule ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
