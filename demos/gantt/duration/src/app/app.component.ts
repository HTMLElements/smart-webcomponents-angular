import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { GanttChartComponent, Duration } from '@smart-webcomponents-angular/ganttchart';
import { RadioButtonComponent } from '@smart-webcomponents-angular/radiobutton';

import { GanttChartModule } from '@smart-webcomponents-angular/ganttchart';

import { RadioButtonModule } from '@smart-webcomponents-angular/radiobutton';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  GanttChartModule, RadioButtonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('ganttchart', { read: GanttChartComponent, static: false }) ganttchart!: GanttChartComponent;
    @ViewChild('radiobutton', { read: RadioButtonComponent, static: false }) radiobutton!: RadioButtonComponent;
    @ViewChild('radiobutton2', { read: RadioButtonComponent, static: false }) radiobutton2!: RadioButtonComponent;

    dataSource: Array<object> = [
        {
            type: 'project',
            label: 'Project 1',
            dateStart: '2021-5-10',
            dateEnd: '2021-7-10',
            minDuration: 60
        },
        {
            type: 'task',
            label: 'Task 2',
            dateStart: '2021-6-5',
            dateEnd: '2021-8-10',
            minDuration: 10,
            maxDuration: 60
        }
    ];

    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code.

        const radiobuttonChangeHandler = (event: CustomEvent) => {
            if (event.detail.value) {
                this.ganttchart.durationUnit = (<HTMLElement>event.target).innerHTML as Duration;
            }
        }

        this.radiobutton.addEventListener('change', radiobuttonChangeHandler as EventListener);

        this.radiobutton2.addEventListener('change', radiobuttonChangeHandler as EventListener);
    }
}