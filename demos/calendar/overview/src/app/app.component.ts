import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from '@smart-webcomponents-angular/button';
import { CalendarComponent } from '@smart-webcomponents-angular/calendar';

import { ButtonModule } from '@smart-webcomponents-angular/button';import { CalendarModule } from '@smart-webcomponents-angular/calendar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  ButtonModule, CalendarModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('calendar', { read: CalendarComponent, static: false }) calendar!: CalendarComponent;
	@ViewChild('calendar2', { read: CalendarComponent, static: false }) calendar2!: CalendarComponent;
	@ViewChild('calendar3', { read: CalendarComponent, static: false }) calendar3!: CalendarComponent;
	@ViewChild('calendar4', { read: CalendarComponent, static: false }) calendar4!: CalendarComponent;


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