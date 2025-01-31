import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonGroupComponent } from '@smart-webcomponents-angular/buttongroup';

import { ButtonGroupModule } from '@smart-webcomponents-angular/buttongroup';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  ButtonGroupModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('buttongroup', { read: ButtonGroupComponent, static: false }) buttongroup!: ButtonGroupComponent;

	dataSource: Array<String> = ["a", "b", "c"];

	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
	}

	init(): void {
		// init code.
		"use strict";

	}
}