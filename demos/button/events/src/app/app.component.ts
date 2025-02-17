import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from '@smart-webcomponents-angular/button';

import { ButtonModule } from '@smart-webcomponents-angular/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  ButtonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	init(): void {
		// init code.
	    
    
        const button = document.querySelector('smart-button');
        const eventLog = document.querySelector('#log');

        if(!button || !eventLog) return 
        
        button.addEventListener('click', function (event) {
            eventLog.innerHTML = 'Click';
        });
        button.addEventListener('focus', function (event) {
            eventLog.innerHTML = 'Focus';
        });
        button.addEventListener('blur', function (event) {
            eventLog.innerHTML = 'Blur';
        });
        button.addEventListener('mouseenter', function (event) {
            eventLog.innerHTML = 'Mouse Enter';
        });
        button.addEventListener('mouseleave', function (event) {
            eventLog.innerHTML = 'Mouse Leave';
        });
    

	}	
}