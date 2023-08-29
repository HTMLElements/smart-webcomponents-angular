import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SchedulerModule } from '@smart-webcomponents-angular/scheduler';
import { WindowModule } from '@smart-webcomponents-angular/window';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, WindowModule, SchedulerModule ],
    bootstrap: [ AppComponent ],
	
})

export class AppModule { }
