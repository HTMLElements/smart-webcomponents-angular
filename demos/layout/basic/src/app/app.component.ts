import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { LayoutComponent } from '@smart-webcomponents-angular/layout';

import { LayoutModule } from '@smart-webcomponents-angular/layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [   LayoutModule],
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