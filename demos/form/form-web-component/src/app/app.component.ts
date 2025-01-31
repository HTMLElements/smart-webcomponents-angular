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

import { InputModule } from '@smart-webcomponents-angular/input';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  ButtonModule, InputModule, CheckBoxModule, MaskedTextBoxModule, DateTimePickerModule, RadioButtonModule, NumericTextBoxModule, DropDownListModule, FormModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {	 
	@ViewChild('profileForm', { read: FormComponent, static: false }) profileForm!: FormComponent;
	@ViewChild('log', { static: false }) log!: HTMLElement;
	
	formValue = {
		employee: {
			name: {
				firstName: 'Anne',
				lastName: 'Smith',
			},
			details: {
				address: '1st Ave SW',
				company: 'N/A',
				city: 'Austin',
				state: 'Texas',
				zip: '78209'
			}
		}
	}
	
	value = '';
	
	ngOnInit(): void {
		// onInit code.
	}

	handleReady(event: Event) {
		setTimeout(()=> {
			this.profileForm.value = this.formValue;
			this.value = JSON.stringify(this.formValue);

			this.profileForm.nativeElement.onValueChanges = (value: any) => {
				this.value = JSON.stringify(value);
			}
		});
	}

	ngAfterViewInit(): void {
	
    }
}