import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Validators, FormBuilder, FormArray } from '@angular/forms';

import { DropDownListModule } from '@smart-webcomponents-angular/dropdownlist';
import { ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from '@smart-webcomponents-angular/button';

import { InputModule } from '@smart-webcomponents-angular/input';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ ReactiveFormsModule, DropDownListModule, ButtonModule, InputModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
	fb;
	profileForm;

	constructor(fb: FormBuilder) {
		this.fb = fb;

		this.profileForm = this.fb.group({
			firstName: ['', Validators.required],
			lastName: [''],
			address: this.fb.group({
				street: [''],
				city: [''],
				state: [''],
				zip: [''],
			}),
			aliases: this.fb.array([this.fb.control('')]),
		});
	}

	get aliases() {
		return this.profileForm.get('aliases') as FormArray;
	}

	updateProfile() {
		this.profileForm.patchValue({
			firstName: 'Nancy',
			address: {
				street: '123 Drew Street',
			},
		});
	}

	addAlias() {
		this.aliases.push(this.fb.control(''));
	}

	onSubmit() {
		// TODO: Use EventEmitter with form value
		console.warn(this.profileForm.value);
	}
}
