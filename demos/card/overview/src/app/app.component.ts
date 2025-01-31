import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { CardComponent } from '@smart-webcomponents-angular/card';

import { CardModule } from '@smart-webcomponents-angular/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  CardModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('card', { read: CardComponent, static: false }) card!: CardComponent;
	
 
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