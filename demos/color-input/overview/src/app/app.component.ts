import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';

import { ColorInputModule } from '@smart-webcomponents-angular/colorinput';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ ColorInputModule],
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