import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { DateTimePickerComponent } from '@smart-webcomponents-angular/datetimepicker';

import { DateTimePickerModule } from '@smart-webcomponents-angular/datetimepicker';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  DateTimePickerModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('datetimepicker', { read: DateTimePickerComponent, static: false }) datetimepicker!: DateTimePickerComponent;
	@ViewChild('datetimepicker2', { read: DateTimePickerComponent, static: false }) datetimepicker2!: DateTimePickerComponent;
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	init(): void {
		// init code.
	    
    // Your code here.

	}	
}