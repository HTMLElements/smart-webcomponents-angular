import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SchedulerModule } from '@smart-webcomponents-angular/scheduler';
import { ButtonModule } from '@smart-webcomponents-angular/button';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, ButtonModule, SchedulerModule ],
    bootstrap: [ AppComponent ],
	
})

export class AppModule { }
