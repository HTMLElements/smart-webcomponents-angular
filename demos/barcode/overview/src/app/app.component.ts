import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from '@smart-webcomponents-angular/button';
import { BarcodeComponent } from '@smart-webcomponents-angular/barcode';

import { ButtonModule } from '@smart-webcomponents-angular/button';

import { BarcodeModule } from '@smart-webcomponents-angular/barcode';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  ButtonModule, BarcodeModule ],
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