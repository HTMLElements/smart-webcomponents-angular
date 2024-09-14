import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';

import 'smart-webcomponents-angular/element';

import 'smart-webcomponents-angular/source/smart.element.js';
import 'smart-webcomponents-angular/source/smart.core.js';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
	app = new window.Smart.App({
		id: 'app',
		data: {
			checkedNames: ['Peter']
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