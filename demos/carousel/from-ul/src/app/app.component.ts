import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { CarouselComponent } from '@smart-webcomponents-angular/carousel';

import { CarouselModule } from '@smart-webcomponents-angular/carousel';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  CarouselModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('carousel', { read: CarouselComponent, static: false }) carousel!: CarouselComponent;
	
 
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