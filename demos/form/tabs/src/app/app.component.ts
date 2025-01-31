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
	   const form = new Smart.Form('#profileForm', {
				viewMode: 'tabs',
				label: 'Profile Form',
				controls: [
					{
						controlType: 'group',
						label: 'Photo',
						controls: [{
							template: '<div style=" overflow: hidden;"><img width="90" src="../../../src/images/people/john.png"/></div>',
							controlType: 'template'
						}]
					},
					{
					controlType: 'group',
					label: 'Profile',
					dataField: 'profile',
					labelPosition: 'top',
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
					},
					{
						dataField: 'birthDate',
						controlType: 'date',
						label: 'Birth Date',
						placeholder: 'Birth date',
						cssClass: 'outlined'
					},
					{
						dataField: 'company',
						controlType: 'input',
						label: 'Company',
						placeholder: 'Company name',
						cssClass: 'outlined',
						required: false
					}
				]
				},
				{
					label: 'Address',
					dataField: 'address',
					controlType: 'group',
					controls: [
						{
							dataField: 'street',
							controlType: 'input',
							label: 'Street',
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
			]}
		);

		form.value = {
			profile: {
					firstName: 'John',
					lastName: 'Scott',
					birthDate: '1985-05-15',
					company: 'N/A'
			},
			address: {
				street: '1st Ave SW',
				city: 'San Antonio',
				state: 'Texas',
				zip: '78209'
			}
		}
    }
}