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


	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
	}

	app = new window.Smart.App({
		data: {
			number: 10
		}
	});


	init(): void {
		// init code.
		this.app = new window.Smart.App({
			data: {
				number: 10
			}
		});
	}
}