import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { CalendarComponent } from '@smart-webcomponents-angular/calendar';
import { DropDownListComponent } from '@smart-webcomponents-angular/dropdownlist';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('calendar', { read: CalendarComponent, static: false }) calendar: CalendarComponent;
	@ViewChild('localePicker', { read: DropDownListComponent, static: false }) localePicker: DropDownListComponent;
	
 
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
		
        that.localePicker.dataSource = ['en', 'tr', 'ar', 'ru', 'de', 'es', 'pt', 'fr', 'zh', 'ja', 'it', 'bg', 'nl'];
        that.localePicker.addEventListener('change', function (event: CustomEvent) {
            that.calendar.locale = event.detail.label;
            document.getElementById('log').innerHTML = 'Current locale is  ' + event.detail.label.toUpperCase();
        });
	}	
}