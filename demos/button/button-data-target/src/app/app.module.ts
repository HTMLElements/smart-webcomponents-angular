import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule } from '@smart-webcomponents-angular/button';
import { InputModule } from '@smart-webcomponents-angular/input';
import { ToastModule } from '@smart-webcomponents-angular/toast';
import { WindowModule } from '@smart-webcomponents-angular/window';
import { TooltipModule } from '@smart-webcomponents-angular/tooltip';
import { DropDownListModule } from '@smart-webcomponents-angular/dropdownlist';
import { RadioButtonModule } from '@smart-webcomponents-angular/radiobutton';
import { CheckBoxModule } from '@smart-webcomponents-angular/checkbox';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, InputModule, ToastModule, WindowModule, TooltipModule, DropDownListModule, ButtonModule, RadioButtonModule, CheckBoxModule],
    bootstrap: [AppComponent]
})

export class AppModule { }
