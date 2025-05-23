import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { RadioButtonComponent } from '@smart-webcomponents-angular/radiobutton';
import { CalendarComponent } from '@smart-webcomponents-angular/calendar';

import { RadioButtonModule } from '@smart-webcomponents-angular/radiobutton';

import { CalendarModule } from '@smart-webcomponents-angular/calendar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  RadioButtonModule, CalendarModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {	
    @ViewChild('calendar', { read: CalendarComponent, static: false }) calendar!: CalendarComponent;
    @ViewChild('radiobutton', { read: RadioButtonComponent, static: false }) radiobutton!: RadioButtonComponent;
	@ViewChild('radiobutton2', { read: RadioButtonComponent, static: false }) radiobutton2!: RadioButtonComponent;
	@ViewChild('radiobutton3', { read: RadioButtonComponent, static: false }) radiobutton3!: RadioButtonComponent;
	@ViewChild('radiobutton4', { read: RadioButtonComponent, static: false }) radiobutton4!: RadioButtonComponent;
	@ViewChild('radiobutton5', { read: RadioButtonComponent, static: false }) radiobutton5!: RadioButtonComponent;
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	init(): void {
		// init code.
	    const that = this;
    
        that.radiobutton.addEventListener('change', function (event: CustomEvent) {
            if (event.detail.value) {
                that.calendar.scrollButtonsPosition = 'near';
            }
        } as EventListenerOrEventListenerObject);

        that.radiobutton2.addEventListener('change', function (event: CustomEvent) {
            if (event.detail.value) {
                that.calendar.scrollButtonsPosition = 'far';
            }
        } as EventListenerOrEventListenerObject);

        that.radiobutton3.addEventListener('change', function (event: CustomEvent) {
            if (event.detail.value) {
                that.calendar.scrollButtonsPosition = 'both';
            }
        } as EventListenerOrEventListenerObject);

        that.radiobutton4.addEventListener('change', function (event: CustomEvent) {
            if (event.detail.value) {
                that.calendar.scrollButtonsNavigationMode = 'landscape';
            }
        } as EventListenerOrEventListenerObject);
        
        that.radiobutton5.addEventListener('change', function (event: CustomEvent) {
            if (event.detail.value) {
                that.calendar.scrollButtonsNavigationMode = 'portrait';
            }
        } as EventListenerOrEventListenerObject);
	}	
}