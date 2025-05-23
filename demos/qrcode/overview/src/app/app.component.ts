import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from '@smart-webcomponents-angular/button';
import { QRcodeComponent } from '@smart-webcomponents-angular/qrcode';

import { ButtonModule } from '@smart-webcomponents-angular/button';

import { QRcodeModule } from '@smart-webcomponents-angular/qrcode';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  ButtonModule, QRcodeModule ],
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