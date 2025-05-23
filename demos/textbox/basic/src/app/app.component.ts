import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { TextBoxComponent } from '@smart-webcomponents-angular/textbox';

import { TextBoxModule } from '@smart-webcomponents-angular/textbox';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  TextBoxModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('textbox', { read: TextBoxComponent, static: false }) textbox!: TextBoxComponent;
	
 
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