import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { KanbanModule } from '@smart-webcomponents-angular/kanban';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, KanbanModule],
    bootstrap: [AppComponent]
})

export class AppModule { }
