import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { CalendarComponent } from '@smart-webcomponents-angular/calendar';
import { RadioButtonComponent } from '@smart-webcomponents-angular/radiobutton';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('calendar', { read: CalendarComponent, static: false }) calendar!: CalendarComponent;
    @ViewChild('radiobutton', { read: RadioButtonComponent, static: false }) radiobutton!: RadioButtonComponent;
    @ViewChild('radiobutton2', { read: RadioButtonComponent, static: false }) radiobutton2!: RadioButtonComponent;
    @ViewChild('radiobutton3', { read: RadioButtonComponent, static: false }) radiobutton3!: RadioButtonComponent;

    handleRadioDisplayModeChange(event: CustomEvent, mode: string) {
        if (event.detail.value) {
            this.calendar.displayMode = mode;
        }
    }

    handleCalendarDisplayModeChange(event: CustomEvent) {
        if (this.calendar.displayMode === 'month') {
            this.radiobutton.checked = true;
        }
        else if (this.calendar.displayMode === 'year') {
            this.radiobutton2.checked = true;
        }
        else {
            this.radiobutton3.checked = true;
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
    }
}