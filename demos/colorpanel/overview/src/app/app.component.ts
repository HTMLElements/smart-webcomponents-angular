import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';

import { ColorPanelModule } from '@smart-webcomponents-angular/colorpanel';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  ColorPanelModule ],
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