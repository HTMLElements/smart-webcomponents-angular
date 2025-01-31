import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';

import { AccordionModule } from '@smart-webcomponents-angular/accordion';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  AccordionModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {	
	
 
	ngAfterViewInit(): void {
		// afterViewInit code.
    }
	
	ngOnInit(): void {
		// onInit code.
		this.init();
	}
	
	init(): void {
		// init code.
	    

	}	
}