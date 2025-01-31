import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { FormComponent, Smart } from '@smart-webcomponents-angular/form';

import { FormModule } from '@smart-webcomponents-angular/form';

import { ButtonModule } from '@smart-webcomponents-angular/button';

import { DropDownListModule } from '@smart-webcomponents-angular/dropdownlist';

import { NumericTextBoxModule } from '@smart-webcomponents-angular/numerictextbox';

import { CheckBoxModule } from '@smart-webcomponents-angular/checkbox';

import { RadioButtonModule } from '@smart-webcomponents-angular/radiobutton';

import { DateTimePickerModule } from '@smart-webcomponents-angular/datetimepicker';

import { MaskedTextBoxModule } from '@smart-webcomponents-angular/maskedtextbox';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  ButtonModule, CheckBoxModule, MaskedTextBoxModule, DateTimePickerModule, RadioButtonModule, NumericTextBoxModule, DropDownListModule, FormModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {

	form: FormComponent | null = null;

	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		this.form = new Smart.Form('#profileForm',
			{
				controls: [
					{
						dataField: 'textBoxValue',
						controlType: 'text',
						label: 'Text input',
						required: true
					},
					{
						dataField: 'passwordBoxValue',
						controlType: 'password',
						label: 'Password input',
						required: true
					},
					{
						dataField: 'nubmberBoxValue',
						controlType: 'number',
						label: 'Number input',
						required: true
					},
					{
						dataField: 'dropdownValue',
						label: 'Drop down list',
						required: true,
						controlType: 'dropdownlist',
						controlOptions: {
							dataSource: [
								{ label: 'Option 1', value: 'value1' },
								{ label: 'Option 2', value: 'value2' },
								{ label: 'Option 3', value: 'value3' }
							]
						}
					},
					{
						controlType: 'label',
						label: 'Radio buttons:',
						rowHeight: '40px',
					},
					{
						dataField: 'radiobuttonValue',
						controlType: 'option',
						optionsLayout: 'horizontal',
						options: [
							{ label: 'Option 1', value: 'value1' },
							{ label: 'Option 2', value: 'value2' },
							{ label: 'Option 3', value: 'value3' }
						]
					},
					{
						controlType: 'label',
						label: 'Boolean options / checkboxes:'
					},
					{
						dataField: 'checkboxValue1',
						controlType: 'boolean',
						label: 'Checkbox 1'
					},
					{
						dataField: 'checkboxValue2',
						controlType: 'boolean',
						label: 'Checkbox 2'
					},
					{
						dataField: 'checkboxValue3',
						controlType: 'boolean',
						label: 'Checkbox 3'
					}
				]
			}
		);

		if (!this.form) { return }

		this.form.onValueChanges = function (value: any) {

			const log = document.getElementById('log');

			if (!log) { return }

			log.innerHTML = `<br/><br/>
		  <table>
			<tr><td>textBoxValue</td><td>${value['textBoxValue']}</td></tr>
			<tr><td>passwordBoxValue</td><td>${value['passwordBoxValue']}</td></tr>
			<tr><td>nubmberBoxValue</td><td>${value['nubmberBoxValue']}</td></tr>
			<tr><td>dropdownValue</td><td>${value['dropdownValue']}</td></tr>
			<tr><td>radiobuttonValue</td><td>${value['radiobuttonValue']}</td></tr>
			<tr><td>checkboxValue1</td><td>${value['checkboxValue1']}</td></tr>
			<tr><td>checkboxValue2</td><td>${value['checkboxValue2']}</td></tr>
			<tr><td>checkboxValue3</td><td>${value['checkboxValue3']}</td></tr>
		  </table>`;
		}

		this.form.onStatusChanges = function (value: any) {
			const statusLog = document.getElementById('statusstatusLog');

			if (!statusLog) { return }

			statusLog.innerHTML = `<br/><br/>
		  <table>
			<tr><td>Form Control</td><td>State</td><td>Dirty</td><td>Untouched</td><td>Disabled</td></tr>
			<tr><td>textBoxValue</td><td>${value['textBoxValue']}</td><td>${value.state['textBoxValue'].dirty}</td><td>${value.state['textBoxValue'].untouched}</td><td>${value.state['textBoxValue'].disabled}</td></tr>
			<tr><td>passwordBoxValue</td><td>${value['passwordBoxValue']}</td><td>${value.state['passwordBoxValue'].dirty}</td><td>${value.state['passwordBoxValue'].untouched}</td><td>${value.state['passwordBoxValue'].disabled}</td></tr>
			<tr><td>nubmberBoxValue</td><td>${value['nubmberBoxValue']}</td><td>${value.state['nubmberBoxValue'].dirty}</td><td>${value.state['nubmberBoxValue'].untouched}</td><td>${value.state['nubmberBoxValue'].disabled}</td></tr>
			<tr><td>dropdownValue</td><td>${value['dropdownValue']}</td><td>${value.state['dropdownValue'].dirty}</td><td>${value.state['dropdownValue'].untouched}</td><td>${value.state['dropdownValue'].disabled}</td></tr>
			<tr><td>radiobuttonValue</td><td>${value['radiobuttonValue']}</td><td>${value.state['radiobuttonValue'].dirty}</td><td>${value.state['radiobuttonValue'].untouched}</td><td>${value.state['radiobuttonValue'].disabled}</td></tr>
			<tr><td>checkboxValue1</td><td>${value['checkboxValue1']}</td><td>${value.state['checkboxValue1'].dirty}</td><td>${value.state['checkboxValue1'].untouched}</td><td>${value.state['checkboxValue1'].disabled}</td></tr>
			<tr><td>checkboxValue2</td><td>${value['checkboxValue2']}</td><td>${value.state['checkboxValue2'].dirty}</td><td>${value.state['checkboxValue2'].untouched}</td><td>${value.state['checkboxValue2'].disabled}</td></tr>
			<tr><td>checkboxValue3</td><td>${value['checkboxValue3']}</td><td>${value.state['checkboxValue3'].dirty}</td><td>${value.state['checkboxValue3'].untouched}</td><td>${value.state['checkboxValue3'].disabled}</td></tr>
			</table>`;
		}

		const sampleValue = {
			'textBoxValue': 'text box value',
			'passwordBoxValue': 'password box',
			'nubmberBoxValue': 67.44,
			'dropdownValue': 'value3',
			'radiobuttonValue': 'value2',
			'checkboxValue1': false,
			'checkboxValue2': false,
			'checkboxValue3': true,
		};

		setTimeout(() => {
			if (!this.form) { return }

			this.form.value = sampleValue;
		});
	}
}