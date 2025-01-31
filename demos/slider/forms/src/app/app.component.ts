import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { DropDownListComponent } from '@smart-webcomponents-angular/dropdownlist';
export class Hero {

	constructor(
		public id: number,
		public name: string,
		public power: string,
		public slider: number,
		public alterEgo: string
	) { }

}

import { DropDownListModule } from '@smart-webcomponents-angular/dropdownlist';

import { ButtonModule } from '@smart-webcomponents-angular/button';

import { InputModule } from '@smart-webcomponents-angular/input';

import { SliderModule } from '@smart-webcomponents-angular/slider';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ FormsModule, DropDownListModule, ButtonModule, SliderModule, InputModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('power', { read: DropDownListComponent, static: false }) power!: DropDownListComponent;

	powers = ['Really Smart', 'Super Flexible',
		'Super Hot', 'Weather Changer'];

	model = new Hero(18, 'Dr IQ', this.powers[0], 5, 'Chuck Overstreet');

	submitted = false;

	onSubmit() { this.submitted = true; }

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
		this.model = new Hero(42, '', '', 0, '');
	}

	get diagnostic() { return JSON.stringify(this.model); }
}