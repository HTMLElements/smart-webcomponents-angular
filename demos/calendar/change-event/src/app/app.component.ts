import { Component, ViewChild, OnInit, AfterViewInit } from "@angular/core";
import { CalendarComponent } from "@smart-webcomponents-angular/calendar";

import { CalendarModule } from '@smart-webcomponents-angular/calendar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  CalendarModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
  @ViewChild("calendar", { read: CalendarComponent, static: false }) calendar!: CalendarComponent;

  eventLog: string = '';

  ngOnInit(): void {
    // onInit code.
  }

  ngAfterViewInit(): void {
    // afterViewInit code.
  }

  onChange(event: CustomEvent) {
    this.eventLog = event.detail.value.toString();
  }
}
