import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { AccordionComponent } from '@smart-webcomponents-angular/accordion';
import { TabsComponent } from '@smart-webcomponents-angular/tabs';

import { AccordionModule } from '@smart-webcomponents-angular/accordion';

import { TabsModule } from '@smart-webcomponents-angular/tabs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  AccordionModule, TabsModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('accordion', { read: AccordionComponent, static: false }) accordion!: AccordionComponent;
	@ViewChild('accordion2', { read: AccordionComponent, static: false }) accordion2!: AccordionComponent;
	@ViewChild('accordion3', { read: AccordionComponent, static: false }) accordion3!: AccordionComponent;
	@ViewChild('tabs', { read: TabsComponent, static: false }) tabs!: TabsComponent;
	
 
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