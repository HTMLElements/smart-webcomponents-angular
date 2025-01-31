import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { BreadcrumbComponent } from '@smart-webcomponents-angular/breadcrumb';

import { BreadcrumbModule } from '@smart-webcomponents-angular/breadcrumb';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  BreadcrumbModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('breadcrumb', { read: BreadcrumbComponent, static: false }) breadcrumb!: BreadcrumbComponent;
	@ViewChild('breadcrumb2', { read: BreadcrumbComponent, static: false }) breadcrumb2!: BreadcrumbComponent;
	@ViewChild('breadcrumb3', { read: BreadcrumbComponent, static: false }) breadcrumb3!: BreadcrumbComponent;
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		
    }
}