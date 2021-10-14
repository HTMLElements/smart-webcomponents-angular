import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GanttModule } from 'gantt-view-angular/gantt';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, GanttModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
