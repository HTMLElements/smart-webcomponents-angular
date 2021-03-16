import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { DropDownListComponent } from '@smart-webcomponents-angular/dropdownlist';
import { CalendarComponent } from '@smart-webcomponents-angular/calendar';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('dropdownlist', { read: DropDownListComponent, static: false }) dropdownlist: DropDownListComponent;
    @ViewChild('calendar', { read: CalendarComponent, static: false }) calendar: CalendarComponent;
	
 
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

       that.dropdownlist.dataSource = [
            { value: 0, label: "Sunday" },
            { value: 1, label: "Monday" },
            { value: 2, label: "Tuesday" },
            { value: 3, label: "Wednesday" },
            { value: 4, label: "Thursday" },
            { value: 5, label: "Friday" },
            { value: 6, label: "Saturday" }
        ];
        
        that.dropdownlist.addEventListener('change', function (event: CustomEvent) {
            that.calendar.firstDayOfWeek = event.detail.index;
            document.getElementById('log').innerHTML = 'First day of week is ' + event.detail.label;
        });
	}	
}