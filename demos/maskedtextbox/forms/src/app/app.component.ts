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
export class User {
	constructor(
		public id: number,
		public name: string,
		public gender: string,
		public phone: string,
		public password: string,
		public address: string
	) { }
}

import { DropDownListModule } from '@smart-webcomponents-angular/dropdownlist';

import { ButtonModule } from '@smart-webcomponents-angular/button';

import { InputModule } from '@smart-webcomponents-angular/input';

import { MaskedTextBoxModule } from '@smart-webcomponents-angular/maskedtextbox';

import { PasswordTextBoxModule } from '@smart-webcomponents-angular/passwordtextbox';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ FormsModule, DropDownListModule, ButtonModule, PasswordTextBoxModule, MaskedTextBoxModule, InputModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
	genderType = ['Female', 'Male'];
	password1: any;
	password2: any;
	model = new User(18, '', this.genderType[0], '', '', '123 Fake Street. Seattle, WA 98112');

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

	newUser() {
		this.model = new User(42, '', '', '', '', '');
	}

	get diagnostic() { return JSON.stringify(this.model); }
}