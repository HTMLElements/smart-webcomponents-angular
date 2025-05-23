import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { GanttChartComponent } from '@smart-webcomponents-angular/ganttchart';
import { DropDownListComponent } from '@smart-webcomponents-angular/dropdownlist';

import { DropDownListModule } from '@smart-webcomponents-angular/dropdownlist';

import { GanttChartModule } from '@smart-webcomponents-angular/ganttchart';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  GanttChartModule, DropDownListModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('ganttChart', { read: GanttChartComponent, static: false }) ganttChart!: GanttChartComponent;
    @ViewChild('dropDownList', { read: DropDownListComponent, static: false }) dropDownList!: DropDownListComponent;

    dataSource: Array<object> = [
        {
            //Note: dateStart/dateEnd and min/max of syncronized projects are automatically calculated based on the tasks
            label: 'Project 1',
            dateStart: '2020-05-10',
            dateEnd: '2021-06-10',
            type: "project" /* Project */,
            expanded: true,
            tasks: [
                {
                    label: 'Task 1.1',
                    dateStart: '2020-02-10',
                    dateEnd: '2020-04-10',
                    type: "task" /* Task */
                },
                {
                    label: 'Task 1.2',
                    dateStart: '2020-03-27',
                    dateEnd: '2020-06-10',
                    type: "task" /* Task */
                },
                {
                    label: 'Milestone 1',
                    dateStart: '2020-04-21',
                    type: "milestone" /* Milestone */
                },
                {
                    label: 'Project 2',
                    dateStart: '2020-06-11',
                    dateEnd: '2024-12-31T23:59:59',
                    type: "project" /* Project */,
                    expanded: true,
                    tasks: [
                        {
                            label: 'Task 2.1',
                            dateStart: '2020-06-12',
                            dateEnd: '2021-01-1',
                            type: "task" /* Task */
                        },
                        {
                            label: 'Task 2.2',
                            dateStart: '2021-01-02',
                            dateEnd: '2021-06-01',
                            type: "task" /* Task */
                        },
                        {
                            label: 'Milestone 2.1',
                            dateStart: '2020-06-30',
                            type: "milestone" /* Milestone */
                        },
                        {
                            label: 'Task 2.3',
                            dateStart: '2020-09-01',
                            dateEnd: '2024-12-31T23:59:59',
                            type: "task" /* Task */
                        }
                    ]
                }
            ]
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
    }

    dropDownChangeHandler(event: CustomEvent): void {
        this.ganttChart.view = event.detail.label;
    }
}