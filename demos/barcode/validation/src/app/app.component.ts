import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { BarcodeComponent } from '@smart-webcomponents-angular/barcode';
import { ButtonComponent } from '@smart-webcomponents-angular/button';

import { BarcodeModule } from '@smart-webcomponents-angular/barcode';

import { ButtonModule } from '@smart-webcomponents-angular/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  BarcodeModule, ButtonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('barcodeToValidate', { read: BarcodeComponent, static: false }) barcodeToValidate!: BarcodeComponent;
	@ViewChild('btn1', { read: ButtonComponent, static: false }) btn1!: ButtonComponent;
	value?: string;
	patternValidity?: string;
	length?: string;
	chars?: string;
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
	}
		
	invalid(event: CustomEvent) {
		const detail = event.detail;
		this.value = detail.value;
		this.patternValidity = detail.patternValidity;
		this.length = detail.lengthValidity;
		this.chars = detail.invalidCharacters.join(', ');
	}
	
	validate(event: CustomEvent) {
		this.barcodeToValidate.value = "ABCDEFFГФЩЪ";
	}
}