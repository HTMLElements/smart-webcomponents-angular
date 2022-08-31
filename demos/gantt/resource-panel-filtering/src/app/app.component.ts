import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { RadioButtonComponent, RadioButton } from '@smart-webcomponents-angular/radiobutton';
import { GanttChartComponent, GanttChartResourceTimelineView, GanttChartTaskResource, GanttChart, GanttChartResource, Smart } from '@smart-webcomponents-angular/ganttchart';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('ganttChart', { read: GanttChartComponent, static: false }) ganttChart: GanttChartComponent;

    dataSource: Array<object> = [
        {
            label: 'Company Acqusition',
            synchronized: true,
            expanded: true,
            type: "task" /* Task */,
            disableResources: true,
            connections: [
                {
                    target: 17,
                    type: 1
                }
            ],
            tasks: [
                {
                    label: 'Rebranding',
                    synchronized: true,
                    expanded: true,
                    type: "project" /* Project */,
                    disableResources: true,
                    tasks: [
                        {
                            label: 'Software rebranding',
                            synchronized: true,
                            expanded: true,
                            type: "project" /* Project */,
                            disableResources: true,
                            tasks: [
                                {
                                    label: 'Website refresh',
                                    dateStart: '2020-06-01',
                                    dateEnd: '2020-06-30',
                                    progress: 25,
                                    type: "task" /* Task */,
                                    connections: [
                                        {
                                            target: 4,
                                            type: 0
                                        }
                                    ],
                                    resources: { id: 'lana', label: 'Lana', type: 'worker' }
                                },
                                {
                                    label: 'Services refresh',
                                    dateStart: '2020-06-01',
                                    dateEnd: '2020-07-30',
                                    progress: 15,
                                    type: "task" /* Task */,
                                    resources: { id: 'brian', label: 'Brian', type: 'worker' }
                                }
                            ]
                        },
                        {
                            label: 'Physical rebranding',
                            synchronized: true,
                            expanded: true,
                            type: "project" /* Project */,
                            disableResources: true,
                            tasks: [
                                {
                                    label: 'Building refresh',
                                    dateStart: '2020-06-01',
                                    dateEnd: '2020-09-30',
                                    progress: 5,
                                    type: "task" /* Task */,
                                    connections: [
                                        {
                                            target: 7,
                                            type: 0
                                        }
                                    ],
                                    resources: { id: 'buildCompany', label: 'Building Company', type: 'outsource' }
                                },
                                {
                                    label: 'Company vehicles refresh',
                                    dateStart: '2020-06-01',
                                    dateEnd: '2020-08-31',
                                    progress: 10,
                                    type: "task" /* Task */,
                                    resources: { id: 'carCompany', label: 'Car Company', type: 'outsource' }
                                }
                            ]
                        }
                    ]
                },
                {
                    label: 'Contracting',
                    synchronized: true,
                    expanded: true,
                    type: "project" /* Project */,
                    disableResources: true,
                    tasks: [
                        {
                            label: 'Review Current Staff',
                            dateStart: '2020-06-01',
                            dateEnd: '2020-07-30',
                            progress: 50,
                            type: "task" /* Task */,
                            connections: [
                                {
                                    target: 10,
                                    type: 1
                                }
                            ],
                            resources: { id: 'rachel', label: 'Rachel', type: 'manager' }
                        },
                        {
                            label: 'Find More Clients',
                            dateStart: '2020-08-01',
                            dateEnd: '2020-12-01',
                            type: "task" /* Task */,
                            resources: { id: 'maria', label: 'Maria', type: 'manager' }
                        }
                    ]
                },
                {
                    label: 'Commercialization',
                    synchronized: true,
                    expanded: true,
                    type: "project" /* Project */,
                    disableResources: true,
                    tasks: [
                        {
                            label: 'TV Commercials',
                            dateStart: '2020-06-01',
                            dateEnd: '2020-09-01',
                            progress: 30,
                            type: "task" /* Task */,
                            connections: [
                                {
                                    target: 13,
                                    type: 0
                                }
                            ],
                            resources: [
                                { id: 'nate', label: 'Nate', type: 'commerce' },
                                { id: 'miguel', label: 'Miguel', type: 'commerce' }
                            ]
                        },
                        {
                            label: 'Internet Commercials',
                            dateStart: '2020-06-01',
                            dateEnd: '2020-12-31',
                            progress: 60,
                            type: "task" /* Task */,
                            resources: { id: 'commerceCompany', label: 'Online Commercials', type: 'outsource' }
                        }
                    ]
                },
                {
                    label: 'Investments',
                    synchronized: true,
                    expanded: true,
                    type: "project" /* Project */,
                    disableResources: true,
                    tasks: [
                        {
                            label: 'Bank Loans',
                            dateStart: '2020-05-01',
                            dateEnd: '2020-12-31',
                            progress: 70,
                            type: "task" /* Task */,
                            connections: [
                                {
                                    target: 16,
                                    type: 0
                                }
                            ],
                            resources: { id: 'bank', label: 'Bank', type: 'investor' }
                        },
                        {
                            label: 'Direct Investors',
                            dateStart: '2020-06-01',
                            dateEnd: '2021-01-01',
                            progress: 30,
                            type: "task" /* Task */,
                            resources: { id: 'shareholders', label: 'Shareholders', type: 'investor' }
                        }
                    ]
                }
            ]
        },
        {
            label: 'Phase 1 Completed',
            dateStart: '2021-01-10',
            type: "milestone" /* Milestone */
        }
    ];

    taskColumns: Array<object> = [
        {
            label: 'Tasks',
            value: 'label',
            size: '45%'
        },
        {
            label: 'Start Date',
            value: 'dateStart',
            size: '20%'
        },
        {
            label: 'End Date',
            value: 'dateEnd',
            size: '20%'
        },
        {
            label: 'Assigned',
            value: 'resources',
            formatFunction: function (data: Array<object>, taskIndex: number): string {
                return `<span>${data.length > 0 ? '✓' : '✗'}</span>`;
            }
        }
    ];

    resourceColumns: Array<object> = [
        {
            label: 'Employees',
            value: 'label'
        },
        {
            label: 'Position',
            value: 'type',
            size: '25%'
        }
    ];

    treeSize: string = '30%';

    taskPanelSize: number = 700;

    resourcePanelSize: number = 200;

    resourcePanelHeaderTemplate: string = 'headerTemplate';

    durationUnit: string = 'day';

    view: string = 'month';

    selectedIndexes: Array<number> = [3];

    timelineHeaderFormatFunction: Function = function (date: Date, type: string, isHeaderDetails: boolean): string {
        const weekStartDate = new Date(date);

        if (isHeaderDetails) {
            return weekStartDate.toLocaleDateString(this.locale, { month: this.monthFormat, year: this.yearFormat });
        }
        else {
            return weekStartDate.toLocaleDateString(this.locale, { day: 'numeric', month: this.monthFormat });
        }
    };

    onReady(event: any): void {
        document.querySelector('.custom-resource-panel-header').addEventListener('change', function (event: CustomEvent) {
            const ganttChart = document.querySelector('smart-gantt-chart') as GanttChart,
                target = event.target as HTMLElement;

            if (target instanceof Smart.DropDownList) {
                const filter = event.detail.value,
                    resources = ganttChart.resources;

                //Important Note: Begins a batch update
                ganttChart.beginUpdate();

                if (filter === 'all') {
                    for (let i = 0; i < resources.length; i++) {
                        const resource = resources[i] as GanttChartResource;
                        
                        if (resource.hidden) {
                            ganttChart.updateResource(resource, { hidden: false });
                        }
                    }
                }
                else {
                    for (let i = 0; i < resources.length; i++) {
                        const resource: GanttChartResource = resources[i] as GanttChartResource;

                        if (resource.type !== filter) {
                            ganttChart.updateResource(resource, { hidden: true });
                        }
                        else {
                            ganttChart.updateResource(resource, { hidden: false });
                        }
                    }
                }

                //Important Note: Ends the batch update
                ganttChart.endUpdate();
                return;
            }

            if (target instanceof Smart.RadioButton && event.detail.value) {
                ganttChart.resourceTimelineView = (<RadioButton>target).value as GanttChartResourceTimelineView;
            }
        })
    };

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