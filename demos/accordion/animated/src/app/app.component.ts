import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { AccordionComponent } from '@smart-webcomponents-angular/accordion';

import { AccordionModule } from '@smart-webcomponents-angular/accordion';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  AccordionModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('accordion', { read: AccordionComponent, static: false }) accordion!: AccordionComponent;
	
 
	ngAfterViewInit(): void {
		// afterViewInit code.
    }
	
	ngOnInit(): void {
		// onInit code.
		this.init();
	}
	
	init(): void {
		// init code.
	    
    var abc;

	}	
}