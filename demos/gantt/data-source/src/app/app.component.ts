import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { ButtonComponent } from '@smart-webcomponents-angular/button';
import { GanttChartComponent, GanttChartView, Duration, GanttChartTaskColumn, GanttChartDataSource } from '@smart-webcomponents-angular/ganttchart';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('button', { read: ButtonComponent, static: false }) button: ButtonComponent;
    @ViewChild('ganttchart', { read: GanttChartComponent, static: false }) ganttchart: GanttChartComponent;
    @ViewChild('log', { read: ElementRef , static: false }) log: ElementRef;

    view: GanttChartView = 'month';

    treeSize: String = '25%';

    durationUnit: Duration = 'day';

    taskColumns: GanttChartTaskColumn[] = [{
        label: 'Book Plan',
        value: 'label',
        size: '60%'
    },
    {
        label: 'Duration (days)',
        value: 'duration',
        formatFunction: (duration: number) => Math.round(duration)
    }
    ];

    timelineHeaderFormatFunction: Function = function (date: Date, type: String, isHeaderDetails: Boolean, defaultValue: String) {
        const ganttChart = document.querySelector('smart-gantt-chart');

        if (isHeaderDetails) {
            return date.toLocaleDateString(ganttChart.locale, {
                month: 'short',
                year: 'numeric'
            });
        }
        else {
            return '#' + defaultValue;
        }
    };

    dataSource: GanttChartDataSource[] = [{
        label: 'Chapter 1',
        synchronized: true,
        expanded: true,
        type: 'project',
        tasks: [{
            label: 'Section 1.1',
            dateStart: '2021-01-01',
            duration: 30,
            progress: 35,
            type: 'task'
        },
        {
            label: 'Section 1.2',
            dateStart: '2021-02-01',
            progress: 25,
            duration: 30,
            type: 'task'
        },
        {
            label: 'Section 1.3',
            dateStart: '2021-02-01',
            progress: 10,
            duration: 30,
            type: 'task'
        }
        ]
    },
    {
        label: 'End of Chapter 1',
        dateStart: '2021-03-01',
        type: 'milestone'
    },
    {
        label: 'Chapter 2',
        synchronized: true,
        expanded: true,
        type: 'project',
        tasks: [{
            label: 'Section 2.1',
            dateStart: '2021-03-01',
            duration: 30,
            progress: 15,
            type: 'task'
        },
        {
            label: 'Section 2.2',
            dateStart: '2021-04-01',
            progress: 10,
            duration: 30,
            type: 'task'
        },
        {
            label: 'Section 2.3',
            dateStart: '2021-05-01',
            progress: 20,
            duration: 30,
            type: 'task'
        }
        ]
    },
    {
        label: 'End of Chapter 2',
        dateStart: '2021-06-01',
        type: 'milestone'
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
        const ganttChart = this.ganttchart,
            button = this.button,
            log = this.log;

        button.addEventListener('click', function (event) {
            log.nativeElement.innerHTML = JSON.stringify(ganttChart.dataSource, null, 4);
        });


    }
}