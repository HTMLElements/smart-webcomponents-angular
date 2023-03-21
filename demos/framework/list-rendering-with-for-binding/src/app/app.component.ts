import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';

import 'smart-webcomponents-angular/element';

import 'smart-webcomponents-angular/source/smart.element.js';
import 'smart-webcomponents-angular/source/smart.core.js';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {

	app = new window.Smart.App({
		data: {
			items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']
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