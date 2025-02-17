﻿import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { TextBoxComponent } from 'smart-webcomponents-angular/textbox';

import 'smart-webcomponents-angular/source/smart.core.js';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
    @ViewChild('textbox', { read: TextBoxComponent, static: false }) textbox!: TextBoxComponent;

    app = new window.Smart.App({
        data: {
            message: "Hello World"
        }
    });

    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    submit(event: Event) {
        alert("Submitting: " + this.app.data.message);
    }

    init(): void {
        // init code.
    }
}