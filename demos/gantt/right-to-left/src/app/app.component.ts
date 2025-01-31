import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { CheckBoxComponent } from '@smart-webcomponents-angular/checkbox';
import { GanttChartComponent } from '@smart-webcomponents-angular/ganttchart';

import { CheckBoxModule } from '@smart-webcomponents-angular/checkbox';

import { GanttChartModule } from '@smart-webcomponents-angular/ganttchart';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  CheckBoxModule, GanttChartModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('checkbox', { read: CheckBoxComponent, static: false }) checkbox!: CheckBoxComponent;
    @ViewChild('ganttchart', { read: GanttChartComponent, static: false }) ganttchart!: GanttChartComponent;

    dataSource: Array<object> = [
        {
            type: 'project',
            label: 'פרוייקט 1',
            dateStart: '2021-5-2',
            duration: 60 * 24 * 60 * 60 * 1000,
            expanded: true,
            connections: [
                {
                    target: 1,
                    type: 0
                }
            ],
            tasks: [
                {
                    type: 'task',
                    label: 'משימה 1.1',
                    dateStart: '2021-5-5',
                    duration: 10 * 24 * 60 * 60 * 1000,
                    connections: [
                        {
                            target: 2,
                            type: 1
                        }
                    ]
                },
                {
                    type: 'task',
                    label: 'משימה 1.2',
                    dateStart: '2021-5-16',
                    duration: 12 * 24 * 60 * 60 * 1000,
                    connections: [
                        {
                            target: 3,
                            type: 1
                        }
                    ]
                },
                {
                    type: 'milestone',
                    label: 'אבן דרך 1',
                    dateStart: '2021-6-1',
                    connections: [
                        {
                            target: 4,
                            type: 1
                        }
                    ]
                },
                {
                    type: 'task',
                    label: 'משימה 1.3',
                    dateStart: '2021-6-2',
                    duration: 90 * 24 * 60 * 60 * 1000 //90 days in miliseconds
                }
            ]
        },
        {
            type: 'project',
            label: 'פרויקט 2',
            dateStart: '2021-10-1',
            duration: 60 * 24 * 60 * 60 * 1000,
            expanded: true,
            connections: [
                {
                    target: 6,
                    type: 0
                }
            ],
            tasks: [
                {
                    type: 'task',
                    label: 'משימה 2.1',
                    dateStart: '2021-10-2',
                    duration: 15 * 24 * 60 * 60 * 1000,
                    connections: [
                        {
                            target: 7,
                            type: 0
                        }
                    ]
                },
                {
                    type: 'task',
                    label: 'משימה 2.2',
                    dateStart: '2021-10-2',
                    duration: 10 * 24 * 60 * 60 * 1000,
                    connections: [
                        {
                            target: 8,
                            type: 1
                        }
                    ]
                },
                {
                    type: 'task',
                    label: 'משימה 2.3',
                    dateStart: '2021-11-1',
                    duration: 45 * 24 * 60 * 60 * 1000 //45 days in miliseconds
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

        const messages = Object.assign({}, this.ganttchart.messages);

        messages['he'] = {
            'noId': 'smartGanttChart דורש מזהה כדי לשמור / לטעון / לנקות מצב.',
            'ok': 'בסדר',
            'cancel': 'בטל',
            'delete': 'מחק',
            'confirm': '{{componentName}} יימחק לצמיתות, <b> האם אתה בטוח? </b>',
            'columnLabel': 'שם המטלה',
            'label': 'תווית',
            'deleteLink': 'מחק קישור'
        };

        this.ganttchart.messages = messages;

        const checkboxChangeHandler = (event: CustomEvent): void => {
            this.ganttchart.rightToLeft = event.detail.value;
        }
        this.checkbox.addEventListener('change', checkboxChangeHandler as EventListener);


    }
}