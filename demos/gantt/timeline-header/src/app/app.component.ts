import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Button } from '@smart-webcomponents-angular/button';
import { GanttChartComponent, GanttChartView } from '@smart-webcomponents-angular/ganttchart';

import { ButtonModule } from '@smart-webcomponents-angular/button';

import { GanttChartModule } from '@smart-webcomponents-angular/ganttchart';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  ButtonModule, GanttChartModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('ganttchart', { read: GanttChartComponent, static: false }) ganttChart!: GanttChartComponent;

    dataSource: Array<object> = [
        {
            label: 'Summer Camp',
            dateStart: '2021-06-01',
            dateEnd: '2021-06-20',
            type: "task" /* Task */,
            resources: [{ id: 'jack', label: 'Jack', type: 'conditioner' }]
        },
        {
            label: 'Stadium Maintenance',
            dateStart: '2021-06-01',
            dateEnd: '2021-07-30',
            type: "task" /* Task */,
            resources: [{ id: 'silvio', label: 'Silvio', type: 'director' }],
            connections: [
                {
                    target: 0,
                    type: 0
                }
            ]
        },
        {
            label: 'Managing',
            synchronized: true,
            expanded: true,
            disableResources: true,
            type: "project" /* Project */,
            connections: [
                {
                    target: 4,
                    type: 2
                }
            ],
            tasks: [
                {
                    label: 'Contracts Handling',
                    dateStart: '2021-06-01',
                    dateEnd: '2021-08-01',
                    resources: [{ id: 'yana', label: 'Yana', type: 'manager' }],
                    connections: [
                        {
                            target: 5,
                            type: 0
                        }
                    ]
                },
                {
                    label: 'Fans and Merchandise',
                    dateStart: '2021-07-01',
                    dateEnd: '2021-08-31',
                    resources: [{ id: 'tina', label: 'Tina', type: 'manager' }]
                },
                {
                    label: 'Transfers',
                    dateStart: '2021-06-01',
                    dateEnd: '2021-08-01',
                    type: "task" /* Task */,
                    resources: [
                        { id: 'michael', label: 'Michael', type: 'manager' },
                        { id: 'antony', label: 'Antony', type: 'manager' }
                    ]
                },
            ],
            resources: [{ id: 'silvio', label: 'Silvio', type: 'owner' }]
        },
        {
            label: 'Medical Treatment',
            dateStart: '2021-06-21',
            dateEnd: '2022-05-26',
            type: "task" /* Task */,
            resources: [
                { id: 'oliver', label: 'Oliver', type: 'medic' },
                { id: 'melany', label: 'Melany', type: 'medic' }
            ],
            connections: [
                {
                    target: 7,
                    type: 0
                }
            ]
        },
        {
            label: 'Pre-season Training',
            dateStart: '2021-06-21',
            dateEnd: '2021-07-31',
            type: "task" /* Task */,
            resources: [
                { id: 'michael', label: 'Michael', type: 'coach' },
                { id: 'antony', label: 'Antony', type: 'assistent' }
            ],
            connections: [
                {
                    target: 8,
                    type: 1
                }
            ]
        },
        {
            label: 'Winter Season',
            dateStart: '2021-08-10',
            dateEnd: '2021-12-31',
            type: "task" /* Task */,
            resources: [{ id: 'gigi', label: 'Gianluigi', type: 'defender' }],
            connections: [
                {
                    target: 9,
                    type: 1
                }
            ]
        },
        {
            label: 'Mid-season Vacation',
            dateStart: '2022-01-01',
            dateEnd: '2022-01-20',
            type: "task" /* Task */,
            resources: [{ id: 'gigi', label: 'Gianluigi', type: 'defender' }],
            connections: [
                {
                    target: 10,
                    type: 1
                }
            ]
        },
        {
            label: 'Spring Season',
            dateStart: '2022-01-21',
            dateEnd: '2022-05-24',
            type: "task" /* Task */,
            resources: [{ id: 'gigi', label: 'Gianluigi', type: 'defender' }],
            connections: [
                {
                    target: 11,
                    type: 1
                }
            ]
        },
        {
            label: 'End Of Season',
            dateStart: '2022-05-26',
            disableResources: true,
            type: "milestone" /* Milestone */
        }
    ];

    taskColumns: Array<object> = [
        {
            label: 'Labels',
            value: 'label',
            //Column min size
            size: '30%',
            //Custom format function
            formatFunction: function (label: string) {
                if (label === 'Learn') {
                    return ' <i class="material-icons">&#xE80C;</i>' + label;
                }
                else if (label === 'Work') {
                    return ' <i class="material-icons">&#xE30A;</i>' + label;
                }
                else if (label === 'Travel') {
                    return ' <i class="material-icons">&#xE53D;</i>' + label;
                }
                else if (label === 'Eat') {
                    return ' <i class="material-icons">&#xE56C;</i>' + label;
                }
                else if (label === 'Shop') {
                    return ' <i class="material-icons">&#xE25C;</i>' + label;
                }
                else if (label === 'Train') {
                    return ' <i class="material-icons">&#xE52F;</i>' + label;
                }
                else {
                    return label;
                }
            }
        },
        {
            label: 'Date Start',
            value: 'dateStart',
            //Custom format function
            formatFunction: (date: string) => {

                return new Date(date).toLocaleDateString(this.ganttChart.locale, {});
            },
            size: '25%'
        },
        {
            label: 'Date End',
            value: 'dateEnd',
            size: '25%'
        }
    ];

    dateStart: string = '2021-05-26';

    view: string = 'month';

    treeSize: string = '30%';

    headerTemplate: string = 'headerTemplate';

    hideResourcePanel: boolean = true;

    onReady(event: any): void {

        const views = ["day", "week", "month", "year"];
        let view = this.ganttChart.view;
        let stateId = 0
        const states = { 0: this.ganttChart.getState() };

        const storeState = () => {
            stateId++;
            states[stateId as keyof typeof states] = this.ganttChart.getState();
            (<Button>document.getElementById('undo')).disabled = false;
        }

        this.ganttChart.addEventListener('change', storeState);
        this.ganttChart.addEventListener('dragEnd', storeState);
        this.ganttChart.addEventListener('resizeEnd', storeState);
        this.ganttChart.addEventListener('progressChangeEnd', storeState);
        this.ganttChart.addEventListener('connectionEnd', storeState);

        const headerControlsClick = (event: CustomEvent) => {
            const button = (<HTMLElement>event.target)!.closest('smart-button') as Button;

            if (!button) {
                return;
            }

            switch (button.id) {
                case 'view':
                    if (this.ganttChart.groupByResources) {
                        this.ganttChart.groupByResources = false;
                        button.innerHTML = 'show resource view';
                    }
                    else {
                        this.ganttChart.groupByResources = true;
                        button.innerHTML = 'hide resource view';
                    }
                    break;
                case 'zoomIn':
                case 'zoomOut': {
                    const isZoomIn = button.id === 'zoomIn',
                        maxValue = isZoomIn ? views[views.length - 1] : views[0];

                    this.ganttChart.view = view = (views[views.indexOf(view) + (isZoomIn ? -1 : 1) * 1] || maxValue) as GanttChartView;

                    (<Button>document.getElementById(isZoomIn ? 'zoomOut' : 'zoomIn'))!.disabled = false;

                    if ((isZoomIn && view === 'day') || (!isZoomIn && view === 'year')) {
                        button.disabled = true;
                    }

                    break;
                }
                case 'undo':
                case 'redo':
                    if (button.id === 'undo') {
                        stateId -= 1;

                        if (Boolean(states[stateId as keyof typeof states])) {

                            states[stateId as keyof typeof states]
                                .then(state => this.ganttChart.loadState(state));

                            (<Button>document.getElementById('redo'))!.disabled = false;
                        }

                        if (!states[stateId as keyof typeof states] || !states[(stateId - 1) as keyof typeof states]) {
                            button.disabled = true;
                        }
                    }
                    else {
                        stateId += 1;

                        if (Boolean(states[stateId as keyof typeof states])) {

                            states[stateId as keyof typeof states]
                                .then(state => this.ganttChart.loadState(state));

                            (<Button>document.getElementById('undo'))!.disabled = false;
                        }

                        if (!Boolean(states[stateId as keyof typeof states]) || !states[(stateId + 1) as keyof typeof states]) {
                            button.disabled = true;
                        }
                    }

                    stateId = Math.max(0, Math.min(Object.keys(states).length - 1, stateId));
                    return;
            }

            this.ganttChart.ensureVisible(0);
        }
        document.querySelector('.header-controls')
            ?.addEventListener('click', headerControlsClick as EventListener);
    }

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
}