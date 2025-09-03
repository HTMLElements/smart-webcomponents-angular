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
    @ViewChild('ganttchart', { read: GanttChartComponent, static: false }) ganttChart!: GanttChartComponent;

   
    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
		const generateGanttChartDataFlat = (count = 50, minDate?: Date, maxDate?: Date | null) => {
			const data = [];
			const getRandom = (coeff = 10) => {
				return Math.round(Math.random() * coeff)
			}

			if (!minDate || isNaN(new Date(minDate).getTime())) {
				minDate = new Date();
			}

			if (!maxDate || isNaN(new Date(maxDate).getTime())) {
				maxDate = new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate() + getRandom(50));
			}

			const dateMin = new Date(minDate),
				dateMax = new Date(maxDate);
			let dateMinYear = dateMin.getFullYear(),
				dateMinMonth = dateMin.getMonth(),
				dateMinDate = dateMin.getDate(),
				dateMaxYear = dateMax.getFullYear(),
				dateMaxMonth = dateMax.getMonth(),
				dateMaxDate = dateMax.getDate(),
				[taskCounter, projectCounter] = [0, 0];

			for (let i = 0; i < count; i += 1) {
				const rand = getRandom(),
					task: any = {
						label: 'Task ' + (taskCounter + 1),
						dateStart: `${dateMinYear}-${dateMinMonth}-${dateMinDate}`,
						dateEnd: `${dateMaxYear}-${dateMaxMonth}-${dateMaxDate}`,
						type: 'task'
					};

				if (i % 4 === 0) {
					task.connections = [{
						target: i + rand % count,
						type: rand % 3
					}];
				}

				dateMinMonth = rand;
				dateMaxMonth = rand + getRandom(20);
				dateMinDate = getRandom();
				dateMaxDate = getRandom(20);
				taskCounter++;

				data.push(task);
			}

			return data
		}
		
        this.ganttChart.dataSource = generateGanttChartDataFlat(10000, new Date(), null);
    }

    init(): void {
        // init code
    };
}