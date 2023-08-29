import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RibbonModule} from '@smart-webcomponents-angular/ribbon';
import { ColorPickerModule } from 's@mart-webcomponents-angular/colorpicker';
import { InputModule } from '@smart-webcomponents-angular/input';
import { DropDownListModule } from '@smart-webcomponents-angular/dropdownlist';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, RibbonModule, ColorPickerModule, InputModule, DropDownListModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
