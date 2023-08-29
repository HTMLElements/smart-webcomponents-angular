import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SchedulerModule } from '@smart-webcomponents-angular/scheduler';
import { DateTimePickerModule } from '@smart-webcomponents-angular/datetimepicker';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, DateTimePickerModule, SchedulerModule ],
    bootstrap: [ AppComponent ],
	
})

export class AppModule { }
