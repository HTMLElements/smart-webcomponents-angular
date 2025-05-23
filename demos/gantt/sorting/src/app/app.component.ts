import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { CheckBoxComponent } from '@smart-webcomponents-angular/checkbox';
import { GanttChartComponent } from '@smart-webcomponents-angular/ganttchart';
import { ButtonComponent } from '@smart-webcomponents-angular/button';

import { CheckBoxModule } from '@smart-webcomponents-angular/checkbox';

import { GanttChartModule } from '@smart-webcomponents-angular/ganttchart';

import { ButtonModule } from '@smart-webcomponents-angular/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  ButtonModule, CheckBoxModule, GanttChartModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('checkBox', { read: CheckBoxComponent, static: false }) checkBox!: CheckBoxComponent;
    @ViewChild('ganttChart', { read: GanttChartComponent, static: false }) ganttChart!: GanttChartComponent;
    @ViewChild('buttonSort', { read: ButtonComponent, static: false }) buttonSort!: ButtonComponent;
    @ViewChild('buttonClearSort', { read: ButtonComponent, static: false }) buttonClearSort!: ButtonComponent;

    sortMode: string = 'one';

    treeSize: string = '30%';

    durationUnit: string = 'hour';

    taskColumns: Array<object> = [
        {
            label: 'Tasks',
            value: 'label',
            sort: 'asc',
            size: '60%'
        },
        {
            label: 'Duration (hours)',
            value: 'duration',
            formatFunction: (date: number) => Math.round(date)
        }
    ];

    resourceColumns: Array<object> = [
        {
            label: 'Tasks',
            value: 'label',
            sort: 'asc',
            size: '60%'
        },
        {
            label: 'Work Time (hours)',
            value: 'workload',
            size: '20%'
        },
        {
            label: 'Progress',
            value: 'progress'
        }
    ];

    dataSource: Array<object> = [
        {
            label: 'Project A',
            dateStart: '2021-01-10',
            dateEnd: '2021-03-10',
            type: 'project',
            expanded: true,
            synchronized: true,
            tasks: [
                {
                    label: 'Task Z',
                    dateStart: '2021-03-01',
                    duration: 1500,
                    progress: 30,
                    connections: [{ target: 2, type: 1 }],
                    resources: [{ id: 'resource1', label: 'Resource 1' }, { id: 'resource2', label: 'Resource 2' }]
                },
                {
                    label: 'Task Y',
                    dateStart: '2021-04-11',
                    duration: 1500
                }
            ]
        },
        {
            label: 'Task C',
            dateStart: '2021-05-17',
            duration: 1000,
            progress: 45,
            connections: [{ target: 4, type: 1 }],
            resources: [{ id: 'resource3', label: 'Resource 3' }, { id: 'resource4', label: 'Resource 4' }]
        },
        {
            label: 'Task D',
            dateStart: '2021-07-02',
            duration: 1000,
            progress: 20,
            connections: [{ target: 5, type: 1 }]
        },
        {
            label: 'Task E',
            dateStart: '2021-08-01',
            dateEnd: '2021-09-10',
            progress: 50,
            resources: [{ id: 'resource5', label: 'Resource 5' }]
        },
        {
            label: 'Project B',
            dateStart: '2021-09-11',
            dateEnd: '2021-10-10',
            type: 'project',
            expanded: true,
            synchronized: true,
            tasks: [
                {
                    label: 'Task A',
                    dateStart: '2021-10-12',
                    dateEnd: '2021-11-11',
                    connections: [{ target: 8, type: 1 }]

                },
                {
                    label: 'Task C',
                    dateStart: '2021-10-17',
                    dateEnd: '2021-11-31',
                    connections: [{ target: 9, type: 1 }]

                },
                {
                    label: 'Task B',
                    dateStart: '2021-11-01',
                    dateEnd: '2021-12-31',
                    progress: 10,
                    resources: [{ id: 'resource6', label: 'Resource 6' }]
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

        const checkBoxChangeHandler = (event: CustomEvent): void => {
            this.ganttChart.sortMode = this.checkBox.checked ? 'many' : 'one';
        }

        this.checkBox.addEventListener('change', checkBoxChangeHandler as EventListener);

        this.buttonSort.addEventListener('click', (): void => {
            this.ganttChart
                .sort(
                    [
                        { value: 'duration', sortOrder: 'asc', type: 'task' },
                        { value: 'progress', sortOrder: 'asc', type: 'resource' }
                    ]);
        });

        this.buttonClearSort.addEventListener('click', (): void => {
            this.ganttChart.clearSort();
        });
    }
}