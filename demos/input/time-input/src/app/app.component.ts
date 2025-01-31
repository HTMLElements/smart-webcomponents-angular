import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { TimeInputComponent } from '@smart-webcomponents-angular/timeinput';

import { TimeInputModule } from '@smart-webcomponents-angular/timeinput';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  TimeInputModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('timeinput', { read: TimeInputComponent, static: false }) timeinput!: TimeInputComponent;
	@ViewChild('timeinput2', { read: TimeInputComponent, static: false }) timeinput2!: TimeInputComponent;
	@ViewChild('timeinput3', { read: TimeInputComponent, static: false }) timeinput3!: TimeInputComponent;
	
 
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