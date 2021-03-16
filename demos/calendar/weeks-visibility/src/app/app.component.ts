import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { CalendarComponent } from '@smart-webcomponents-angular/calendar';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('calendar', { read: CalendarComponent, static: false }) calendar: CalendarComponent;
    @ViewChild('weeksCountSelector', { read: HTMLInputElement, static: false }) weeksCountSelector: HTMLInputElement;

 
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

          that.weeksCountSelector.addEventListener('change', function (event) {
            if (that.calendar.weeks) {
                that.calendar.weeks = parseInt(that.weeksCountSelector.value);
                that.calendar.nativeElement.style.height = 120 + 32 * (that.calendar.weeks - 1) + 'px';
            }
        });

        if (that.calendar.weeks) {
            that.calendar.nativeElement.style.height = 120 + 32 * (that.calendar.weeks - 1) + 'px';
        }
	}	
}