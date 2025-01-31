import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';

import { ButtonModule } from '@smart-webcomponents-angular/button';

import { InputModule } from '@smart-webcomponents-angular/input';

import { ToastModule } from '@smart-webcomponents-angular/toast';

import { WindowModule } from '@smart-webcomponents-angular/window';

import { TooltipModule } from '@smart-webcomponents-angular/tooltip';

import { DropDownListModule } from '@smart-webcomponents-angular/dropdownlist';

import { RadioButtonModule } from '@smart-webcomponents-angular/radiobutton';

import { CheckBoxModule } from '@smart-webcomponents-angular/checkbox';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ InputModule, ToastModule, WindowModule, TooltipModule, DropDownListModule, ButtonModule, RadioButtonModule, CheckBoxModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {	
 
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
}