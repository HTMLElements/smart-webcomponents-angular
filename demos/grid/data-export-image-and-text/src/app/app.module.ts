import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GridModule } from '@smart-webcomponents-angular/grid';
import { ButtonModule } from '@smart-webcomponents-angular/button';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, FormsModule, ButtonModule, GridModule],
    schemas: [],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
