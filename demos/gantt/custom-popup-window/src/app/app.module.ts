import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule } from '@smart-webcomponents-angular/button';
import { GanttChartModule } from '@smart-webcomponents-angular/ganttchart';
import { MultilineTextBoxModule } from '@smart-webcomponents-angular/multilinetextbox';
import { TextBoxModule } from '@smart-webcomponents-angular/textbox';
import { WindowModule } from '@smart-webcomponents-angular/window';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, ButtonModule, WindowModule, GanttChartModule, MultilineTextBoxModule, TextBoxModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
