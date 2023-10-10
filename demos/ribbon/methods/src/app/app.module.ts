import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RibbonModule} from '@smart-webcomponents-angular/ribbon';
import { ColorPickerModule } from '@smart-webcomponents-angular/colorpicker';
import { InputModule } from '@smart-webcomponents-angular/input';
import { DropDownListModule } from '@smart-webcomponents-angular/dropdownlist';
import { ButtonModule } from '@smart-webcomponents-angular/button';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, RibbonModule, ColorPickerModule, InputModule, DropDownListModule, ButtonModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
