import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { TabsComponent } from '@smart-webcomponents-angular/tabs';

import { TabsModule } from '@smart-webcomponents-angular/tabs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  TabsModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('tabs', { read: TabsComponent, static: false }) tabs!: TabsComponent;
 
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