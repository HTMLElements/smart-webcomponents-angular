import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CheckBoxModule } from '@smart-webcomponents-angular/checkbox';
import { RadioButtonModule } from '@smart-webcomponents-angular/radiobutton';
import { TreeModule } from '@smart-webcomponents-angular/tree';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, CheckBoxModule, RadioButtonModule, TreeModule],
    bootstrap: [AppComponent]
})

export class AppModule { }
