import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from '@smart-webcomponents-angular/button';
import { TooltipComponent } from '@smart-webcomponents-angular/tooltip';

import { ButtonModule } from '@smart-webcomponents-angular/button';

import { TooltipModule } from '@smart-webcomponents-angular/tooltip';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  ButtonModule, TooltipModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
	@ViewChild('tooltip', { read: TooltipComponent, static: false }) tooltip!: TooltipComponent;
	
 
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