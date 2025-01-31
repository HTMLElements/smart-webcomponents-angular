import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MaskedTextBoxComponent } from '@smart-webcomponents-angular/maskedtextbox';
import { TextBoxComponent } from '@smart-webcomponents-angular/textbox';

import { MaskedTextBoxModule } from '@smart-webcomponents-angular/maskedtextbox';

import { TextBoxModule } from '@smart-webcomponents-angular/textbox';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ MaskedTextBoxModule, TextBoxModule],
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