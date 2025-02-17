import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { KanbanModule } from '@smart-webcomponents-angular/kanban';
import { NumberInputModule } from '@smart-webcomponents-angular/numberinput';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, KanbanModule, NumberInputModule ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
