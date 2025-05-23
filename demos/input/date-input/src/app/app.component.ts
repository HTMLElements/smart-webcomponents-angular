import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { DateInputComponent } from '@smart-webcomponents-angular/dateinput';

import { DateInputModule } from '@smart-webcomponents-angular/dateinput';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  DateInputModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('dateinput', { read: DateInputComponent, static: false }) dateinput!: DateInputComponent;
	@ViewChild('dateinput2', { read: DateInputComponent, static: false }) dateinput2!: DateInputComponent;
	@ViewChild('dateinput3', { read: DateInputComponent, static: false }) dateinput3!: DateInputComponent;
	
 
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