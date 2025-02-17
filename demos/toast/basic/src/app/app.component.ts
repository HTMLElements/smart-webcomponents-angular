import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ToastComponent } from '@smart-webcomponents-angular/toast';

import { ToastModule } from '@smart-webcomponents-angular/toast';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  ToastModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('toast', { read: ToastComponent, static: false }) toast!: ToastComponent;
	
 
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