import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';

import { SortableModule } from '@smart-webcomponents-angular/sortable';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  SortableModule ],
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