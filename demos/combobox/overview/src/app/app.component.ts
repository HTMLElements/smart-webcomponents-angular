import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ComboBoxComponent } from '@smart-webcomponents-angular/combobox';

import { ComboBoxModule } from "@smart-webcomponents-angular/combobox";

import { ButtonModule } from "@smart-webcomponents-angular/button";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ ButtonModule, ComboBoxModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('combobox', { read: ComboBoxComponent, static: false }) combobox!: ComboBoxComponent;
	@ViewChild('combobox2', { read: ComboBoxComponent, static: false }) combobox2!: ComboBoxComponent;
	@ViewChild('combobox3', { read: ComboBoxComponent, static: false }) combobox3!: ComboBoxComponent;
	@ViewChild('combobox4', { read: ComboBoxComponent, static: false }) combobox4!: ComboBoxComponent;
	@ViewChild('combobox5', { read: ComboBoxComponent, static: false }) combobox5!: ComboBoxComponent;
	@ViewChild('combobox6', { read: ComboBoxComponent, static: false }) combobox6!: ComboBoxComponent;
	@ViewChild('combobox7', { read: ComboBoxComponent, static: false }) combobox7!: ComboBoxComponent;
	@ViewChild('combobox8', { read: ComboBoxComponent, static: false }) combobox8!: ComboBoxComponent;
	@ViewChild('combobox9', { read: ComboBoxComponent, static: false }) combobox9!: ComboBoxComponent;
	@ViewChild('combobox10', { read: ComboBoxComponent, static: false }) combobox10!: ComboBoxComponent;
	@ViewChild('combobox11', { read: ComboBoxComponent, static: false }) combobox11!: ComboBoxComponent;
	@ViewChild('combobox12', { read: ComboBoxComponent, static: false }) combobox12!: ComboBoxComponent;
	@ViewChild('combobox13', { read: ComboBoxComponent, static: false }) combobox13!: ComboBoxComponent;
	@ViewChild('combobox14', { read: ComboBoxComponent, static: false }) combobox14!: ComboBoxComponent;
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	init(): void {
		// init code.
	    
    // Your code here.

	}	
}