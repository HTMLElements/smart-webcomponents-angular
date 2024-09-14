import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SortableModule } from '@smart-webcomponents-angular/sortable';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, SortableModule ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
