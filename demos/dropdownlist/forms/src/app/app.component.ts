import { Component, ViewEncapsulation, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { DropDownListComponent } from '@smart-webcomponents-angular/dropdownlist';
import { Hero } from './hero';

import { DropDownListModule } from '@smart-webcomponents-angular/dropdownlist';

import { ButtonModule } from '@smart-webcomponents-angular/button';

import { InputModule } from '@smart-webcomponents-angular/input';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ FormsModule, DropDownListModule, ButtonModule, InputModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('power', { read: DropDownListComponent, static: false }) power!: DropDownListComponent;

	powers = ['Really Smart', 'Super Flexible',
		'Super Hot', 'Weather Changer'];

	model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

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
		this.model = new Hero(42, '', '' , '');
	}

	get diagnostic() { return JSON.stringify(this.model); }
}