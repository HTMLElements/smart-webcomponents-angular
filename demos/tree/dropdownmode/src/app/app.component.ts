import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { TreeComponent } from '@smart-webcomponents-angular/tree';

import { TreeModule } from '@smart-webcomponents-angular/tree';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  TreeModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('tree', { read: TreeComponent, static: false }) tree!: TreeComponent;
	
 
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