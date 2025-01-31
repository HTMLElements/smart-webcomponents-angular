import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { InputComponent } from '@smart-webcomponents-angular/input';

import { InputModule } from '@smart-webcomponents-angular/input';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  InputModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('input', { read: InputComponent, static: false }) input!: InputComponent;
	
 
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