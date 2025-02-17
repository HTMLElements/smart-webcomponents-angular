﻿import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { RatingComponent } from '@smart-webcomponents-angular/rating';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('rating', { read: RatingComponent, static: false }) rating!: RatingComponent;
	
 
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