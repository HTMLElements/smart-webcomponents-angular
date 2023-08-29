import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from '@smart-webcomponents-angular/button';

import 'smart-webcomponents-angular/source/smart.core.js';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;

    app = new window.Smart.App({
        data: {
            counter: 0
        }
    });

    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    click(event: Event) {
        this.app.data.counter++;
    }
    init(): void {
        // init code.

    }
}