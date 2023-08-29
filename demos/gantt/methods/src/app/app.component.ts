import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from '@smart-webcomponents-angular/button';
import { GanttChartComponent } from '@smart-webcomponents-angular/ganttchart';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('updateButton', { read: ButtonComponent, static: false })
    updateButton!: ButtonComponent;
    @ViewChild('insertButton', { read: ButtonComponent, static: false })
    insertButton!: ButtonComponent;
    @ViewChild('insertAtButton', { read: ButtonComponent, static: false })
    insertAtButton!: ButtonComponent;
    @ViewChild('insertIntoButton', { read: ButtonComponent, static: false })
    insertIntoButton!: ButtonComponent;
    @ViewChild('insertIntoAtButton', { read: ButtonComponent, static: false })
    insertIntoAtButton!: ButtonComponent;
    @ViewChild('removeButton', { read: ButtonComponent, static: false })
    removeButton!: ButtonComponent;
    @ViewChild('ganttChart', { read: GanttChartComponent, static: false })
    ganttChart!: GanttChartComponent;

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
                    type: 0,
                },
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
                            type: 1,
                        },
                        {
                            target: 4,
                            type: 1,
                        },
                    ],
                },
                {
                    label: 'Task 1.2',
                    dateStart: '2020-10-10',
                    dateEnd: '2021-2-31',
                    type: 'task',
                    connections: [
                        {
                            target: 3,
                            type: 1,
                        },
                    ],
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
                            type: 0,
                        },
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
                                    type: 1,
                                },
                                {
                                    target: 4,
                                    type: 1,
                                },
                            ],
                        },
                        {
                            label: 'Task 1.1.2',
                            dateStart: '2020-10-10',
                            dateEnd: '2021-2-31',
                            type: 'task',
                            connections: [
                                {
                                    target: 3,
                                    type: 1,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            label: 'Task 2',
            dateStart: '2020-03-10T15:30:00',
            dateEnd: '2021-08-10',
            type: 'task',
        },
        {
            label: 'Milestone 1',
            dateEnd: '2021-05-24',
            type: 'milestone',
            connections: [
                {
                    target: 5,
                    type: 1,
                },
            ],
        },
        {
            label: 'Task 3',
            dateStart: '2021-02-05',
            dateEnd: '2021-07-08',
            progress: 50,
            type: 'task',
        },
        {
            label: 'Task 4',
            dateStart: '2020-03-10T15:30:00',
            dateEnd: '2021-08-10',
        },
    ];

    treeSize = '45%';

    taskColumns = [
        {
            label: 'Tasks',
            value: 'label',
            size: '40%',
        },
        {
            label: 'Date Start',
            value: 'dateStart',
            //Custom format function
            formatFunction: (date: Date) =>
                new Date(date).toLocaleDateString('en', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                }),
        },
        {
            label: 'Date End',
            value: 'dateEnd',
            size: '30%',
        },
    ];

    handleUpdateButtonClick(e: Event) {
        const taskDetails = {
            label: 'Task Updated Successfully',
            dateEnd: '2020-1-1',
        };

        const targetTask = this.ganttChart.tasks[0];

        if (!targetTask) {
            return;
        }

        this.ganttChart.updateTask(0, taskDetails);

        const button = e.currentTarget as HTMLButtonElement;
        button.disabled = true;
    }

    handleInsertButtonClick(e: Event) {
        this.ganttChart.insertTask(this.getNewTask('Inserted Task'));

        const button = e.currentTarget as HTMLButtonElement;
        button.disabled = true;

        this.updateButtons();
    }

    handleInsertAtPosition2ButtonClick(e: Event) {
        this.ganttChart.insertTask(
            this.getNewTask('Inserted Task At Position'),
            null,
            2
        );

        const button = e.currentTarget as HTMLButtonElement;
        button.disabled = true;

        this.updateButtons();
    }

    handleInsertIntoProject11ButtonClick(e: Event) {
        this.ganttChart.insertTask(
            this.getNewTask('Inserted Task Into Project'),
            '0.2'
        );

        const button = e.currentTarget as HTMLButtonElement;
        button.disabled = true;

        this.updateButtons();
    }

    handleInsertIntoProject1AtLastPositionButtonClick(e: Event) {
        this.ganttChart.insertTask(
            this.getNewTask('Inserted Task Into Project At position'),
            0,
            3
        );

        const button = e.currentTarget as HTMLButtonElement;
        button.disabled = true;

        this.updateButtons();
    }

    handleRemoveButtonClick() {
        this.ganttChart.removeTask(0);
        this.updateButtons();
    }

    updateButtons() {
        const currentTasks = this.ganttChart.tasks!;

        if (currentTasks.length) {
            this.removeButton.disabled = false;
            this.updateButton.disabled = false;
        } else {
            this.removeButton.disabled = true;
            this.updateButton.disabled = true;
        }
    }

    getNewTask(label: string) {
        return {
            label: `${label} 1`,
            dateStart: '2020-08-10',
            dateEnd: '2020-12-23',
            expanded: true,
            tasks: [
                {
                    label: `${label} 1.1`,
                    dateStart: '2020-09-01',
                    dateEnd: '2020-10-30',
                },
                {
                    label: `${label} 1.2`,
                    dateStart: '2020-11-01',
                    dateEnd: '2020-12-23',
                },
            ],
        };
    }

    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void { }
}
