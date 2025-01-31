import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { Smart } from '@smart-webcomponents-angular/form';

import { FormModule } from '@smart-webcomponents-angular/form';

import { ButtonModule } from '@smart-webcomponents-angular/button';

import { DropDownListModule } from '@smart-webcomponents-angular/dropdownlist';

import { NumericTextBoxModule } from '@smart-webcomponents-angular/numerictextbox';

import { CheckBoxModule } from '@smart-webcomponents-angular/checkbox';

import { RadioButtonModule } from '@smart-webcomponents-angular/radiobutton';

import { DateTimePickerModule } from '@smart-webcomponents-angular/datetimepicker';

import { MaskedTextBoxModule } from '@smart-webcomponents-angular/maskedtextbox';

import { InputModule } from '@smart-webcomponents-angular/input';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  ButtonModule, InputModule, CheckBoxModule, MaskedTextBoxModule, DateTimePickerModule, RadioButtonModule, NumericTextBoxModule, DropDownListModule, FormModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// Create a Reactive Form.
		const form = new Smart.Form('#profileForm', {
			firstName: ['', {
				validationRules: [
					{ type: 'required', message: 'First Name is required' },
					{ type: 'stringLength', min: 2, message: 'First Name requires minimum 2 characters' }
				]
			}],
			lastName: ['', {
				validationRules: [{ type: 'required', message: 'Last Name is required' }]
			}
			],
			address: new Smart.FormGroup({
				street: ['', {
					validationRules: [
						{ type: 'required', message: 'Street is required' }
					]
				}
				],
				city: [''],
				state: [''],
				zip: ['']
			})
		});

		// set form's value.
		form.value = {
			firstName: 'Peter',
			lastName: 'Smith',
			address: {
				street: '507 - 20th Ave. E. Apt. 2A',
				city: 'Seattle',
				state: 'WA',
				zip: '98122'
			}
		}



		// handle value changes and log them.
		form.onValueChanges = function (value: any) {
			const log = document.getElementById('log')

			if (!log) { return }

			log.innerHTML = JSON.stringify(value);
		}

		// log Form's value
		const log = document.getElementById('log')

		if (!log) { return }

		log.innerHTML = JSON.stringify(form.value);
	}
}