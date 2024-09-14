import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ColorPickerModule } from '@smart-webcomponents-angular/colorpicker';
import { DropDownListModule } from '@smart-webcomponents-angular/dropdownlist';

import { AppComponent } from './app.component';
import { ButtonModule } from '@smart-webcomponents-angular/button';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, FormsModule, DropDownListModule, ColorPickerModule, ButtonModule],
    bootstrap: [AppComponent]
})

export class AppModule { }
