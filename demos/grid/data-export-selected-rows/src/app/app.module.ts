import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GridModule } from '@smart-webcomponents-angular/grid';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, FormsModule, GridModule],
    schemas: [],
    providers: [],
    bootstrap: [AppComponent]
=======

import { GridModule } from '@smart-webcomponents-angular/grid';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, GridModule ],
    bootstrap: [ AppComponent ]
>>>>>>> 620199ab98db9fa8cd0583aaf7cb3ee0405decae
})

export class AppModule { }
