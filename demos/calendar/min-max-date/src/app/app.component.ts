import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { CalendarComponent } from '@smart-webcomponents-angular/calendar';

import { CalendarModule } from '@smart-webcomponents-angular/calendar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  CalendarModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('calendar', { read: CalendarComponent, static: false }) calendar!: CalendarComponent;
	@ViewChild('minInput', { read: ElementRef<HTMLInputElement>, static: false }) minInput!: ElementRef<HTMLInputElement>;
	@ViewChild('maxInput', { read: ElementRef<HTMLInputElement>, static: false }) maxInput!: ElementRef<HTMLInputElement>;

	minYear = (new Date()).getFullYear() - 1;
	min = `${this.minYear}, 7, 1`

	selectedDates = [`${this.minYear}, 7, 2`, '2029-7-17']

	maxYear = (new Date()).getFullYear();
	max = `${this.maxYear}, 7, 31`

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
		} as EventListenerOrEventListenerObject);

		that.maxInput.nativeElement.addEventListener('change', function (event: CustomEvent) {
			that.calendar.max = that.maxInput.nativeElement.value;
		} as EventListenerOrEventListenerObject);
	}
}