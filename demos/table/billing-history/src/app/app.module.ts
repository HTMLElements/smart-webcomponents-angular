import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TableModule } from '@smart-webcomponents-angular/table';
import { ToastModule } from '@smart-webcomponents-angular/toast';
import { TooltipModule } from '@smart-webcomponents-angular/tooltip';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, TableModule, ToastModule, TooltipModule ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
