import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { SliderComponent } from '@smart-webcomponents-angular/slider';

import { SliderModule } from '@smart-webcomponents-angular/slider';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  SliderModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('slider', { read: SliderComponent, static: false }) slider!: SliderComponent;
	
 
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