import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { SchedulerComponent, DataAdapter, SchedulerViewType, SchedulerViews } from '@smart-webcomponents-angular/scheduler';

import { SchedulerModule } from '@smart-webcomponents-angular/scheduler';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  SchedulerModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('scheduler', { read: SchedulerComponent, static: false }) scheduler!: SchedulerComponent;
	
    dataSource = new window.Smart.DataAdapter({
        beforeLoadComplete: (data: any) => {
            //Handle Data from the Server before the DataAdapter handles it
            return JSON.parse(data);
        },
        onBindingComplete: (boundSource: any) => {
            //Modify the DataAdapter data before it is handled by the Scheduler
            const today = new Date(), year = today.getFullYear(), month = today.getMonth(), data = boundSource.data;
            for (let i = 0; i < data.length; i++) {
                const dateStart = data[i].dateStart;
                data[i].dateStart = new Date(year, month, dateStart.getDate(), dateStart.getHours(), dateStart.getMinutes());
            }
        },
        dataSource: 'scheduler_data.php',
        dataSourceType: 'json',
        dataFields: [
            { name: 'id', map: 'EmployeeId', dataType: 'number' },
            { name: 'dateStart', map: 'HireDate', dataType: 'date' },
            { name: 'label', map: 'FirstName', dataType: 'string' },
            { name: 'description', map: 'Title', dataType: 'string' }
        ]
    });

    view: SchedulerViewType = 'month';

    views: SchedulerViews = ['day', 'week', 'month'];
 
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