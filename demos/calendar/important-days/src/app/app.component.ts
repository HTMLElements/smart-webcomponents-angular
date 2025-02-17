import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { CalendarComponent, Calendar } from '@smart-webcomponents-angular/calendar';
import { Tooltip } from '@smart-webcomponents-angular/tooltip';

import { CalendarModule } from '@smart-webcomponents-angular/calendar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  CalendarModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('calendar', { read: CalendarComponent, static: false }) calendar!: CalendarComponent;

    importantDates: string[] = ["2020, 6, 9", "2020, 7, 1", "2020, 7, 30", "2020, 12, 24"];

    handleCalendarOpen(event: CustomEvent) {
        const date = new Date((event as CustomEvent).detail.value);

        if (date.getFullYear() === 2020) {
            const tooltip = (event as CustomEvent).detail.target as Tooltip;

            this.calendar.tooltipPosition = 'top';
            if (date.getMonth() === 5 && date.getDate() === 9) {
                tooltip.innerHTML = 'Ivan\'s Birthday !';
            }
            else if (date.getMonth() === 6) {
                if (date.getDate() === 1) {
                    tooltip.innerHTML = 'Filip\'s Birthday !';
                }
                else {
                    tooltip.innerHTML = 'Anthony\'s Birthday !';
                    this.calendar.tooltipPosition = 'right';
                }
            }
        }
    }

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
    }
}