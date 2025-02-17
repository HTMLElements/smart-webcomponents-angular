import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { DropDownListModule } from '@smart-webcomponents-angular/dropdownlist';
import { ButtonModule } from '@smart-webcomponents-angular/button';
import { InputModule } from '@smart-webcomponents-angular/input';
import { SliderModule } from '@smart-webcomponents-angular/slider';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, FormsModule, DropDownListModule, ButtonModule, SliderModule, InputModule],
    bootstrap: [AppComponent]
})

export class AppModule { }
