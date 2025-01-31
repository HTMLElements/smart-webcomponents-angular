import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { NumericTextBoxComponent } from '@smart-webcomponents-angular/numerictextbox';

import { NumericTextBoxModule } from '@smart-webcomponents-angular/numerictextbox';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  NumericTextBoxModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('numerictextbox', { read: NumericTextBoxComponent, static: false }) numerictextbox!: NumericTextBoxComponent;
	@ViewChild('numerictextbox2', { read: NumericTextBoxComponent, static: false }) numerictextbox2!: NumericTextBoxComponent;
	@ViewChild('numerictextbox3', { read: NumericTextBoxComponent, static: false }) numerictextbox3!: NumericTextBoxComponent;
	@ViewChild('numerictextbox4', { read: NumericTextBoxComponent, static: false }) numerictextbox4!: NumericTextBoxComponent;
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	init(): void {
		// init code.
	    
    // Your code here

	}	
}