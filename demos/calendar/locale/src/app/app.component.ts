import { Component, ViewChild, OnInit, AfterViewInit } from "@angular/core";
import { CalendarComponent } from "@smart-webcomponents-angular/calendar";
import { DropDownListComponent } from "@smart-webcomponents-angular/dropdownlist";

import { CalendarModule } from '@smart-webcomponents-angular/calendar';import { DropDownListModule } from '@smart-webcomponents-angular/dropdownlist';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  CalendarModule, DropDownListModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
  @ViewChild("calendar", { read: CalendarComponent, static: false }) calendar!: CalendarComponent;
  @ViewChild("localePicker", { read: DropDownListComponent, static: false }) localePicker!: DropDownListComponent;

  log: string = "";

  dataSource = [
    "en",
    "tr",
    "ar",
    "ru",
    "de",
    "es",
    "pt",
    "fr",
    "zh",
    "ja",
    "it",
    "bg",
    "nl"
  ];

  ngOnInit(): void {
    // onInit code.
  }

  ngAfterViewInit(): void {
    const that = this;
    // afterViewInit code.
  }

  onChange(event: CustomEvent) {
    const that = this;
    
    that.calendar.locale = event.detail.label;
    that.log = "Current locale is  " + event.detail.label;
  }
}
