import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MenuComponent } from '@smart-webcomponents-angular/menu';

import { MenuModule } from '@smart-webcomponents-angular/menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  MenuModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('menu', { read: MenuComponent, static: false }) menu!: MenuComponent;
	@ViewChild('menu2', { read: MenuComponent, static: false }) menu2!: MenuComponent;
	@ViewChild('menu3', { read: MenuComponent, static: false }) menu3!: MenuComponent;
	
 
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