import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DateTimePickerModule } from '@smart-webcomponents-angular/datetimepicker';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, DateTimePickerModule ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
