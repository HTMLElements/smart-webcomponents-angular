import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { DropDownListComponent } from '@smart-webcomponents-angular/dropdownlist';
import { DateTimePickerComponent } from '@smart-webcomponents-angular/datetimepicker';

export class Hero {

	constructor(
		public id: number,
		public name: string,
		public power: string,
		public age: Date,
		public alterEgo: string
	) { }

}

import { DropDownListModule } from '@smart-webcomponents-angular/dropdownlist';

import { ButtonModule } from '@smart-webcomponents-angular/button';

import { InputModule } from '@smart-webcomponents-angular/input';

import { DateTimePickerModule } from '@smart-webcomponents-angular/datetimepicker';

import { ListBoxModule } from '@smart-webcomponents-angular/listbox';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ FormsModule, DropDownListModule, ButtonModule, ListBoxModule, DateTimePickerModule, InputModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('power', { read: DropDownListComponent, static: false }) power!: DropDownListComponent;
	@ViewChild('age', { read: DateTimePickerComponent, static: false }) age!: DateTimePickerComponent;

	powers = ['Really Smart', 'Super Flexible',
		'Super Hot', 'Weather Changer'];

	model = new Hero(18, 'Dr IQ', this.powers[0], new Date(), 'Chuck Overstreet');

	submitted = false;

	onSubmit() {
		this.submitted = true;
	}

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

	newHero() {
		this.model = new Hero(42, '', '', new Date(), '');
	}

	get diagnostic() {
		const model = {
			id: this.model.id,
			name: this.model.name,
			power: this.model.power,
			age: this.model.age ? this.model.age.toISOString() : '',
			alterEgo: this.model.alterEgo
		}

		return JSON.stringify(model);
	}
}