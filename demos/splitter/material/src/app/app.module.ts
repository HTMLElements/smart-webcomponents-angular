import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule } from '@smart-webcomponents-angular/button';import { CardModule } from '@smart-webcomponents-angular/card';import { CheckBoxModule } from '@smart-webcomponents-angular/checkbox';import { ListBoxModule } from '@smart-webcomponents-angular/listbox';import { SplitterModule } from '@smart-webcomponents-angular/splitter';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, ButtonModule, CardModule, CheckBoxModule, ListBoxModule, SplitterModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
