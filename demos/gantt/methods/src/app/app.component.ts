import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from '@smart-webcomponents-angular/button';
import { GanttChartComponent } from '@smart-webcomponents-angular/ganttchart';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('button', { read: ButtonComponent, static: false }) button: ButtonComponent;
    @ViewChild('button2', { read: ButtonComponent, static: false }) button2: ButtonComponent;
    @ViewChild('button3', { read: ButtonComponent, static: false }) button3: ButtonComponent;
    @ViewChild('ganttChart', { read: GanttChartComponent, static: false }) ganttChart: GanttChartComponent;

    dataSource: Array<object> = [
        {
            label: 'Project 1',
            dateStart: '2020-03-10T12:30:00',
            dateEnd: '2021-06-10T3:59:00',
            expanded: true,
            type: 'project',
            connections: [
                {
                    target: 1,
                    type: 0
                }
            ],
            tasks: [
                {
                    label: 'Task 1.1',
                    dateStart: '2020-02-10',
                    dateEnd: '2021-01-10',
                    type: 'task',
                    connections: [
                        {
                            target: 2,
                            type: 1
                        },
                        {
                            target: 4,
                            type: 1
                        }
                    ]
                },
                {
                    label: 'Task 1.2',
                    dateStart: '2020-10-10',
                    dateEnd: '2021-2-31',
                    type: 'task',
                    connections: [
                        {
                            target: 3,
                            type: 1
                        }
                    ]
                },
                {
                    label: 'Project 1.1',
                    dateStart: '2020-03-10T12:30:00',
                    dateEnd: '2021-06-10T3:59:00',
                    expanded: true,
                    type: 'project',
                    connections: [
                        {
                            target: 1,
                            type: 0
                        }
                    ],
                    tasks: [
                        {
                            label: 'Task 1.1.1',
                            dateStart: '2020-02-10',
                            dateEnd: '2021-01-10',
                            type: 'task',
                            connections: [
                                {
                                    target: 2,
                                    type: 1
                                },
                                {
                                    target: 4,
                                    type: 1
                                }
                            ]
                        },
                        {
                            label: 'Task 1.1.2',
                            dateStart: '2020-10-10',
                            dateEnd: '2021-2-31',
                            type: 'task',
                            connections: [
                                {
                                    target: 3,
                                    type: 1
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            label: 'Task 2',
            dateStart: '2020-03-10T15:30:00',
            dateEnd: '2021-08-10',
            type: 'task'
        },
        {
            label: 'Milestone 1',
            dateEnd: '2021-05-24',
            type: 'milestone',
            connections: [
                {
                    target: 5,
                    type: 1
                }
            ]
        },
        {
            label: 'Task 3',
            dateStart: '2021-02-05',
            dateEnd: '2021-07-08',
            progress: 50,
            type: 'task'
        },
        {
            label: 'Task 4',
            dateStart: '2020-03-10T15:30:00',
            dateEnd: '2021-08-10',
        }
    ];

    treeSize = '45%';

    taskColumns = [
        {
            label: 'Tasks',
            value: 'label',
            size: '40%'
        },
        {
            label: 'Date Start',
            value: 'dateStart',
            //Custom format function
            formatFunction: (date: Date) => new Date(date).toLocaleDateString(this.ganttChart.locale, { year: 'numeric', month: 'short', day: 'numeric' })
        },
        {
            label: 'Date End',
            value: 'dateEnd',
            size: '30%'
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

        const that = this,
            ganttChart = that.ganttChart;

        that.button.addEventListener('click', function ():void {
            const taskDetails = {
                label: 'Task Updated Successfully',
                dateEnd: '2020-1-1'
            };

            const targetTask = ganttChart.tasks[0];
            
            if (!targetTask) {
                return;
            }

            ganttChart.updateTask(0, taskDetails);

            this.disabled = true;
        });

        that.button2.addEventListener('click', function ():void {
            const tasks = {
                label: 'Inserted Task 1',
                dateStart: '2021-08-10',
                dateEnd: '2021-12-23',
                tasks: [
                    {
                        label: 'Inserted Sub-Task 1.1',
                        dateStart: '2021-09-01',
                        dateEnd: '2021-10-30',
                    },
                    {
                        label: 'Inserted Sub-Task 1.2',
                        dateStart: '2021-11-01',
                        dateEnd: '2021-12-23',
                    }
                ]
            };

            ganttChart.insertTask(0, tasks);

            this.disabled = true;
        });

        that.button3.addEventListener('click', function ():void {
            ganttChart.removeTask(0);
            this.disabled = true;
        });
    }
}