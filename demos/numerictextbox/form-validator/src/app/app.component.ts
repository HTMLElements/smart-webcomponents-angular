import { Component, ViewChild, OnInit, AfterViewInit, OnChanges } from '@angular/core';
import { Directive, Input } from "@angular/core";
import {
	Validator,
	ValidationErrors,
	FormGroup,
	NG_VALIDATORS,
	NgForm,
	Validators
} from "@angular/forms";


import { DropDownListComponent } from '@smart-webcomponents-angular/dropdownlist';

export class Shipment {
	constructor(
		public productName: string,
		public shippingAddress: string,
		public quantity: string | number
	) { }
}

import { ButtonModule } from '@smart-webcomponents-angular/button';

import { InputModule } from '@smart-webcomponents-angular/input';

import { NumericTextBoxModule } from '@smart-webcomponents-angular/numerictextbox';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ FormsModule, ButtonModule, InputModule, NumericTextBoxModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
	productType = ['Bananas', 'Oranges', 'Coffee', 'Sugar', 'Cocoa', 'Spices', 'Silk'];
	model = new Shipment(this.productType[2], '552  Whitetail Lane, Dallas, TX', '');
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

	newShipment() {
		this.model = new Shipment('', '', '');
	}

	get diagnostic() { return JSON.stringify(this.model); }
}