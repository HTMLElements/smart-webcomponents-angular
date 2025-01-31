import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { CalendarComponent } from '@smart-webcomponents-angular/calendar';
import { SwitchButtonComponent } from '@smart-webcomponents-angular/switchbutton';

import { CalendarModule } from '@smart-webcomponents-angular/calendar';import { SwitchButtonModule } from '@smart-webcomponents-angular/switchbutton';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  CalendarModule, SwitchButtonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('log') log!: ElementRef;
    @ViewChild('calendar', { read: CalendarComponent, static: false }) calendar!: CalendarComponent;
    @ViewChild('switchbutton', { read: SwitchButtonComponent, static: false }) switchbutton!: SwitchButtonComponent;
    @ViewChild('switchbutton2', { read: SwitchButtonComponent, static: false }) switchbutton2!: SwitchButtonComponent;

    animationSwitch(event: CustomEvent) {
        if (event.detail.value) {
            this.calendar.animation = 'advanced';
        }
        else {
            this.calendar.animation = 'none';
        }

        this.log.nativeElement.innerHTML = 'smartCalendar animations ' + (event.detail.value ? 'On' : 'Off');
    }

    handleAnimationDirectionSwitch(event: CustomEvent) {
        if (event.detail.value) {
            this.calendar.scrollButtonsNavigationMode = 'landscape';
        }
        else {
            this.calendar.scrollButtonsNavigationMode = 'portrait';
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