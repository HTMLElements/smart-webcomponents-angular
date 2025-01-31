import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ChipComponent } from '@smart-webcomponents-angular/chip';

import { ChipModule } from '@smart-webcomponents-angular/chip';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  ChipModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('chip', { read: ChipComponent, static: false }) chip!: ChipComponent;
	
 
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