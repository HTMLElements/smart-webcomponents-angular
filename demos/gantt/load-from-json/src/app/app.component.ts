import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { GanttChartComponent, GanttChartView, Duration, GanttChartTaskColumn } from '@smart-webcomponents-angular/ganttchart';

import { GanttChartModule } from '@smart-webcomponents-angular/ganttchart';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  GanttChartModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('ganttchart', { read: GanttChartComponent, static: false }) ganttchart!: GanttChartComponent;

    view: GanttChartView = 'week';

    treeSize: number = 350;

    durationUnit: Duration = 'day';

    taskColumns: GanttChartTaskColumn[] = [{
        label: 'Employee',
        value: 'label',
        size: '50%',
    },
    {
        label: 'Start Time',
        value: 'dateStart'
    },
    {
        label: 'Duration',
        value: 'duration',
        size: 30
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
        const gantt = this.ganttchart;

        fetch('../assets/data.json', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(function (response) {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        }).then(function (data) {
            //Load the data as new DataSource
            gantt.dataSource = data;
        }).catch(function (error) {
            alert(error.message);
        });
    }
}