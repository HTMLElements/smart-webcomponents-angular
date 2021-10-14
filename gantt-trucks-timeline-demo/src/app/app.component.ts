import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { GanttComponent, TableColumn } from 'gantt-view-angular/gantt';
import { Observable, Observer } from 'rxjs';
import { generateGanttDataSource } from './../common/data';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('gantt', { read: GanttComponent, static: false }) gantt: GanttComponent;

	dataSource = generateGanttDataSource(50000);

	subscription: any;

	sequence = new Observable(function sequenceSubscriber(observer: Observer<any>) {
		const interval = setInterval(() => {
			observer.next(generateGanttDataSource(50000));
		}, 5 * 1000); //every 5 seconds

		return {
			unsubscribe() {
				observer.complete();
				clearInterval(interval);
			}
		};
	});

	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
	}


}