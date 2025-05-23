import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from '@smart-webcomponents-angular/button';
import { TimePickerComponent } from '@smart-webcomponents-angular/timepicker';

import { ButtonModule } from '@smart-webcomponents-angular/button';

import { TimePickerModule } from '@smart-webcomponents-angular/timepicker';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  ButtonModule, TimePickerModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
	@ViewChild('button2', { read: ButtonComponent, static: false }) button2!: ButtonComponent;
	@ViewChild('timepicker', { read: TimePickerComponent, static: false }) timepicker!: TimePickerComponent;
	
 
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