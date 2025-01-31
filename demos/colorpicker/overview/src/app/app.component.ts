import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ColorPickerComponent } from '@smart-webcomponents-angular/colorpicker';

import { ColorPickerModule } from '@smart-webcomponents-angular/colorpicker';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  ColorPickerModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('colorpicker', { read: ColorPickerComponent, static: false }) colorpicker!: ColorPickerComponent;
	
 
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