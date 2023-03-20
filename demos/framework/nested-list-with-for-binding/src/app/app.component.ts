import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import 'smart-webcomponents-angular/element';

import 'smart-webcomponents-angular/source/smart.core.js';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    app = new window.Smart.App({
        data: {
            itemClick: function (event: Event) {
                alert((event.target as any)?.innerHTML);
            },
            items: [
                {
                    label: "Employee 1",
                    details: {
                        firstName: "John",
                        lastName: "Brown",
                        jobPosition: "Support Officer"
                    }
                },
                {
                    label: "Employee 2",
                    details: {
                        firstName: "Michael",
                        lastName: "Roberts",
                        jobPosition: "Support Officer"
                    }
                },
                {
                    label: "Employee 3",
                    details: {
                        firstName: "Nancy",
                        lastName: "Smith",
                        jobPosition: "Sales Representative"
                    }
                }
            ]
        }
    });

    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code.
    }
}