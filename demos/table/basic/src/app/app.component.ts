import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { TableComponent, TableColumn } from '@smart-webcomponents-angular/table';

import { TableModule } from '@smart-webcomponents-angular/table';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  TableModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('table', { read: TableComponent, static: false }) table!: TableComponent;
	
 
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