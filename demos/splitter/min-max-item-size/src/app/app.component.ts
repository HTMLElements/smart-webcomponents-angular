import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { SplitterComponent } from '@smart-webcomponents-angular/splitter';

import { SplitterModule } from '@smart-webcomponents-angular/splitter';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  SplitterModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('splitter', { read: SplitterComponent, static: false }) splitter!: SplitterComponent;
	
 
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