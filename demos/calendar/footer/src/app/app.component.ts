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


	ngOnInit(): void {
		// onInit code.
		const template = document.createElement('template');
		template.id="templateWithButtons"
		template.innerHTML = `
			<div id="buttonContainer">
				<smart-button class="flat primary">CANCEL</smart-button>
				<smart-button class="flat primary">OK</smart-button>
			</div>
		`

		document.body.appendChild(template);
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
	}

	init(): void {
		// init code.


	}
}