import { Component, ViewChild, OnInit, AfterViewInit,ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from '@smart-webcomponents-angular/button';
import { GanttChartComponent } from '@smart-webcomponents-angular/ganttchart';

import { ButtonModule } from '@smart-webcomponents-angular/button';

import { GanttChartModule } from '@smart-webcomponents-angular/ganttchart';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ ButtonModule, GanttChartModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('ganttChart', { read: GanttChartComponent, static: false }) ganttChart!: GanttChartComponent;
    @ViewChild('criticalPathButton', { read: ButtonComponent, static: false }) criticalPathButton!: ButtonComponent;
	
	buttonText: string = "Show Critical Path"
	  tasks = [
		{
		  id: 1,
		  label: "Office itinerancy",
		  type: "project",
		  expanded: true,
		  synchronized: true,
		  tasks: [
			{
			  id: 2,
			  label: "Office facing",
			  dateStart: "2025-07-22",
			  duration: 22,
			  connections: [
				{ target: 6, type: 1 }
			  ]
			},
			{
			  id: 3,
			  label: "Furniture installation",
			  dateStart: "2025-07-22",
			  duration: 5,
			  connections: [
				{ target: 4, type: 1 },
				{ target: 5, type: 1 }
			  ]
			},
			{
			  id: 4,
			  label: "The employee relocation",
			  dateStart: "2025-07-29",
			  duration: 15,
			  connections: [
				{ target: 6, type: 1 }
			  ]
			},
			{
			  id: 5,
			  label: "Interior office",
			  dateStart: "2025-07-29",
			  duration: 15,
			  connections: [
				{ target: 6, type: 1 }
			  ]
			},
			{
			  id: 6,
			  label: "Air conditioners installation",
			  dateStart: "2025-08-19",
			  duration: 2,
			  connections: [
				{ target: 7, type: 1 }
			  ]
			},
			{
			  id: 7,
			  label: "Workplaces preparation",
			  dateStart: "2025-08-21",
			  duration: 2,
			  connections: [
				{ target: 9, type: 1 }
			  ]
			},
			{
			  id: 8,
			  label: "Preparing workplaces for us",
			  dateStart: "2025-07-22",
			  duration: 10,
			  connections: [
				{ target: 9, type: 1 }
			  ]
			},
			{
			  id: 9,
			  label: "Workplaces importation",
			  dateStart: "2025-08-23",
			  duration: 1,
			  connections: [
				{ target: 10, type: 1 },
				{ target: 11, type: 1 },
				{ target: 12, type: 1 }
			  ]
			}
		  ]
		},
		{
		  id: 10,
		  label: "Analysis",
		  type: "project",
		  synchronized: true,
		  expanded: true,
		  tasks: [
			{
			  id: 11,
			  label: "Documentation creation",
			  dateStart: "2025-08-26",
			  duration: 14,
			  connections: [
				{ target: 13, type: 1 }
			  ]
			},
			{
			  id: 12,
			  label: "Software design",
			  dateStart: "2025-08-26",
			  duration: 10,
			  connections: [
				{ target: 13, type: 1 }
			  ]
			},
			{
			  id: 13,
			  label: "Interface setup",
			  dateStart: "2025-09-13",
			  duration: 1,
			  connections: [
				{ target: 14, type: 1 },
				{ target: 15, type: 1 }
			  ]
			}
		  ]
		},
		{
		  id: 14,
		  label: "Development",
		  synchronized: true,
		  expanded: true,
		  type: "project",
		  tasks: [
			{
			  id: 15,
			  label: "Develop System",
			  dateStart: "2025-09-16",
			  duration: 5,
			  connections: [
				{ target: 17, type: 1 }
			  ]
			},
			{
			  id: 16,
			  label: "Integrate System",
			  dateStart: "2025-09-16",
			  duration: 15,
			  connections: [
				{ target: 17, type: 1 }
			  ]
			},
			{
			  id: 17,
			  label: "Test",
			  dateStart: "2025-10-07",
			  duration: 1
			}
		  ]
		}
	  ];
	  
    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
		this.ganttChart.view = 'week';
		this.ganttChart.durationUnit = 'day';
		this.ganttChart.dateStart = '2025-07-17';
		this.ganttChart.dataSource = this.tasks;

		this.criticalPathButton.nativeElement.onclick = () => {
		};
    }


  showCriticalPath() {
   	  this.ganttChart.criticalPath = !this.ganttChart.criticalPath;
	  this.buttonText = this.ganttChart.criticalPath ? 'Hide Critical Path' : 'Show Critical Path';
  }
  
    init(): void {
        // init code
    };
}