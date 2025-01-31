import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { QRcodeComponent } from '@smart-webcomponents-angular/qrcode';
import { RadioButtonComponent } from '@smart-webcomponents-angular/radiobutton';

import { ButtonModule } from '@smart-webcomponents-angular/button';

import { QRcodeModule } from '@smart-webcomponents-angular/qrcode';

import { RadioButtonModule } from '@smart-webcomponents-angular/radiobutton';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  ButtonModule, QRcodeModule, RadioButtonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('qrcode', { read: QRcodeComponent, static: false }) qrcode!: QRcodeComponent;
	@ViewChild('lowOption', { read: RadioButtonComponent, static: false }) lowOption!: RadioButtonComponent;
	@ViewChild('highOption', { read: RadioButtonComponent, static: false }) highOption!: RadioButtonComponent;
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
		init(): void {
			// init code.
			const that = this;
			this.lowOption.addEventListener('click', function() {
				that.qrcode.errorLevel = 'L';
			});
	
			this.highOption.addEventListener('click', function() {
				that.qrcode.errorLevel = 'H';
			});
	
		}	
}