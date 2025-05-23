import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { DropDownListComponent } from '@smart-webcomponents-angular/dropdownlist';
import { GanttChartComponent, GanttChartResourceTimelineView } from '@smart-webcomponents-angular/ganttchart';
import { RadioButtonComponent, RadioButton } from '@smart-webcomponents-angular/radiobutton';

import { DropDownListModule } from '@smart-webcomponents-angular/dropdownlist';import { GanttChartModule } from '@smart-webcomponents-angular/ganttchart';import { RadioButtonModule } from '@smart-webcomponents-angular/radiobutton';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  DropDownListModule, GanttChartModule, RadioButtonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('dropdownlist', { read: DropDownListComponent, static: false }) dropdownlist!: DropDownListComponent;
    @ViewChild('ganttchart', { read: GanttChartComponent, static: false }) ganttChart!: GanttChartComponent;
    @ViewChild('radiobutton', { read: RadioButtonComponent, static: false }) radiobutton!: RadioButtonComponent;
    @ViewChild('radiobutton2', { read: RadioButtonComponent, static: false }) radiobutton2!: RadioButtonComponent;

    dataSource = [
        {
            label: 'Company Acqusition',
            synchronized: true,
            expanded: true,
            type: 'project',
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
                    type: 'project',
                    disableResources: true,
                    tasks: [
                        {
                            label: 'Software rebranding',
                            synchronized: true,
                            expanded: true,
                            type: 'project',
                            disableResources: true,
                            tasks: [
                                {
                                    label: 'Website refresh',
                                    dateStart: '2020-06-01',
                                    dateEnd: '2020-06-30',
                                    progress: 25,
                                    type: 'task',
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
                                    type: 'task',
                                    resources: { id: 'brian', label: 'Brian', type: 'worker' }
                                }
                            ]
                        },
                        {
                            label: 'Physical rebranding',
                            synchronized: true,
                            expanded: true,
                            type: 'project',
                            disableResources: true,
                            tasks: [
                                {
                                    label: 'Building refresh',
                                    dateStart: '2020-06-01',
                                    dateEnd: '2020-09-30',
                                    progress: 5,
                                    type: 'task',
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
                                    type: 'task',
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
                    type: 'project',
                    disableResources: true,
                    tasks: [
                        {
                            label: 'Review Current Staff',
                            dateStart: '2020-06-01',
                            dateEnd: '2020-07-30',
                            progress: 50,
                            type: 'task',
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
                            type: 'task',
                            resources: { id: 'maria', label: 'Maria', type: 'manager' }
                        }
                    ]
                },
                {
                    label: 'Commercialization',
                    synchronized: true,
                    expanded: true,
                    type: 'project',
                    disableResources: true,
                    tasks: [
                        {
                            label: 'TV Commercials',
                            dateStart: '2020-06-01',
                            dateEnd: '2020-09-01',
                            progress: 30,
                            type: 'task',
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
                            type: 'task',
                            resources: { id: 'commerceCompany', label: 'Online Commercials', type: 'outsource' }
                        }
                    ]
                },
                {
                    label: 'Investments',
                    synchronized: true,
                    expanded: true,
                    type: 'project',
                    disableResources: true,
                    tasks: [
                        {
                            label: 'Bank Loans',
                            dateStart: '2020-05-01',
                            dateEnd: '2020-12-31',
                            progress: 70,
                            type: 'task',
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
                            type: 'task',
                            resources: { id: 'shareholders', label: 'Shareholders', type: 'investor' }
                        }
                    ]
                }
            ]
        },
        {
            label: 'Phase 1 Completed',
            dateStart: '2021-01-10',
            type: 'milestone'
        }
    ];

    taskColumns = [
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
            formatFunction: function (data: string) {
                return `<span>${data.length > 0 ? '&#10003' : '&#10007'}</span>`;
            }
        }
    ];

    resourceColumns = [
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

    treeSize = '30%';

    resourcePanelSize = '25%';

    resourcePanelHeaderTemplate = 'headerTemplate';

    durationUnit = 'day';

    view = 'month';

    timelineHeaderFormatFunction(date: Date, type: string, isHeaderDetails: boolean) {

        const monthFormat = this.ganttChart.monthFormat as "narrow" | "long" | "short" | "2-digit" | "numeric" | undefined;
        const yearFormat = this.ganttChart.yearFormat as "2-digit" | "numeric" | undefined;
        const weekStartDate = new Date(date);

        if (isHeaderDetails) {
            return weekStartDate.toLocaleDateString(this.ganttChart.locale, { month: monthFormat, year: yearFormat });
        }
        else {
            return weekStartDate.toLocaleDateString(this.ganttChart.locale, { day: 'numeric', month: monthFormat });
        }
    }

    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    onReady() {

        const customResourcePanelHeaderChangeHandler = (event: CustomEvent) => {

            const target = event.target;

            if (target instanceof window.Smart.DropDownList) {
                const filter = event.detail.value, resources = this.ganttChart.resources;

                //Important Note: Begins a batch update
                this.ganttChart.beginUpdate();

                if (filter === 'all') {
                    for (let i = 0; i < resources.length; i++) {
                        const resource = resources[i];

                        if (resource.hidden) {
                            this.ganttChart.updateResource(resource, { hidden: false });
                        }
                    }
                }
                else {
                    for (let i = 0; i < resources.length; i++) {
                        const resource = resources[i];

                        if (resource.type !== filter) {
                            this.ganttChart.updateResource(resource, { hidden: true });
                        }
                        else {
                            this.ganttChart.updateResource(resource, { hidden: false });
                        }
                    }
                }

                //Important Note: Ends the batch update
                this.ganttChart.endUpdate();

                return;
            }
            if (target instanceof window.Smart.RadioButton && event.detail.value) {
                this.ganttChart.resourceTimelineView = (<RadioButton>target).value as GanttChartResourceTimelineView;
            }
        };

        document.querySelector('.custom-resource-panel-header')
            ?.addEventListener('change', customResourcePanelHeaderChangeHandler as EventListener);
    }

    init(): void {
        // init code.

        this.ganttChart.timelineHeaderFormatFunction = this.timelineHeaderFormatFunction.bind(this);

    }
}