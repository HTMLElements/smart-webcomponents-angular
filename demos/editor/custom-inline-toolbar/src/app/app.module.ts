import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EditorModule } from '@smart-webcomponents-angular/editor';
import { ButtonGroupModule } from '@smart-webcomponents-angular/buttongroup';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, EditorModule, ButtonGroupModule],
    bootstrap: [AppComponent]
})

export class AppModule { }
