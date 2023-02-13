import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { CalendarComponent } from '@smart-webcomponents-angular/calendar';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('calendar', { read: CalendarComponent, static: false }) calendar: CalendarComponent;
	@ViewChild('minInput', { read: ElementRef<HTMLInputElement>, static: false }) minInput: ElementRef<HTMLInputElement>;
	@ViewChild('maxInput', { read: ElementRef<HTMLInputElement>, static: false }) maxInput: ElementRef<HTMLInputElement>;
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	init(): void {
		// init code.
		const that = this;

		that.minInput.nativeElement.addEventListener('change', function (event: CustomEvent) {
			that.calendar.min = that.minInput.nativeElement.value;
		});

	that.maxInput.nativeElement.addEventListener('change', function (event: CustomEvent) {
				that.calendar.max = that.maxInput.nativeElement.value;
		});
	}	
}