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
	value = '';

	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		const form = new Smart.Form('#profileForm', {
			controls: [{
				controlType: 'group',
				columns: 2,
				label: 'Employee',
				dataField: 'employee',
				labelPosition: 'left',
				controls: [
					{
						label: 'Photo',
						template: '<div style=" overflow: hidden;"><img width="125" src="../../../src/images/people/andrew.png"/></div>',
						controlType: 'template'
					},
					{
						label: 'Name',
						dataField: 'name',
						controlType: 'group',
						controls: [
							{
								dataField: 'firstName',
								controlType: 'input',
								label: 'First name',
								required: true,
								info: 'Enter first name',
								placeholder: 'First name',
								cssClass: 'outlined',
								infoPosition: 'right'
							},
							{
								dataField: 'lastName',
								controlType: 'input',
								label: 'Last name',
								placeholder: 'Last name',
								required: true,
								cssClass: 'outlined',
								info: 'Enter last name'
							}
						]
					},
					{
						label: 'Details',
						dataField: 'details',
						controlType: 'group',
						columnSpan: 2,
						controls: [
							{
								dataField: 'company',
								controlType: 'input',
								label: 'Company',
								placeholder: 'Company name',
								cssClass: 'outlined',
								required: false
							},
							{
								dataField: 'address',
								controlType: 'input',
								label: 'Address',
								placeholder: 'Address',
								required: true,
								cssClass: 'outlined'
							},
							{
								dataField: 'city',
								controlType: 'input',
								label: 'City',
								placeholder: 'City',
								cssClass: 'outlined',
								required: true
							},
							{
								dataField: 'state',
								controlType: 'dropdownlist',
								label: 'State',
								required: true,
								cssClass: 'outlined',
								controlOptions: {
									placeholder: 'State',
									dataSource: ['California', 'New York', 'Oregon', 'Illinois', 'Texas']
								}
							},
							{
								dataField: 'zip',
								controlType: 'input',
								placeholder: 'Zip',
								cssClass: 'outlined',
								label: 'Zip code',
								required: true
							}
						]
					}
				]
			},
			{
				controlType: 'group',
				columns: 2,
				controls: [
					{
						controlType: 'button',
						action: 'submit',
						label: 'Sign up',
						cssClass: 'success',
						align: 'right'
					},
					{
						controlType: 'button',
						action: 'reset',
						label: 'Cancel',
						align: 'left'
					}
				]
			}
			]
		}
		);

		form.setValue({
			employee: {
				name: {
					firstName: 'John',
					lastName: 'Scott',
				},
				details: {
					address: '1st Ave SW',
					company: 'N/A',
					city: 'San Antonio',
					state: 'Texas',
					zip: '78209'
				}
			}
		});

		this.value = JSON.stringify(form.value);

		form.onValueChanges = (value: any) => {
			this.value = JSON.stringify(value);
		}
	}
}