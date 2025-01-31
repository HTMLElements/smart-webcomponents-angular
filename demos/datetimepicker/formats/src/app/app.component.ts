import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { DateTimePickerComponent } from '@smart-webcomponents-angular/datetimepicker';
import { DropDownListComponent } from '@smart-webcomponents-angular/dropdownlist';

import { DateTimePickerModule } from '@smart-webcomponents-angular/datetimepicker';import { DropDownListModule } from '@smart-webcomponents-angular/dropdownlist';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  DateTimePickerModule, DropDownListModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('datetimepicker', { read: DateTimePickerComponent, static: false }) datetimepicker!: DateTimePickerComponent;
    @ViewChild('dropdownlist', { read: DropDownListComponent, static: false }) dropdownlist!: DropDownListComponent;


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

        that.dropdownlist.addEventListener('change', function (event: any) {
            that.datetimepicker.formatString = event.detail.value;
        });
    }
}