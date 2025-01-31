import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { Smart, GaugeComponent } from '@smart-webcomponents-angular/gauge';

import { GaugeModule } from '@smart-webcomponents-angular/gauge';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  GaugeModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('gauge', { read: GaugeComponent, static: false }) gauge!: GaugeComponent;
	@ViewChild('gauge2', { read: GaugeComponent, static: false }) gauge2!: GaugeComponent;
	@ViewChild('gauge3', { read: GaugeComponent, static: false }) gauge3!: GaugeComponent;

	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
	}

	init(): void {
		// init code.

		this.gauge.min = new Date(2000, 0, 1) as any;
		this.gauge.max = new Date(2020, 0, 1) as any;
		this.gauge.ranges = [{ "startValue": "new Date(2000, 0, 1)", "endValue": "new Date(2003, 0, 1)", "className": "range1" }, { "startValue": "new Date(2003, 0, 1)", "endValue": "new Date(2009, 0, 1)", "className": "range2" }, { "startValue": "new Date(2009, 0, 1)", "endValue": "new Date(2020, 0, 1)", "className": "range3" }] as any

		this.gauge2.min = new Date(2017, 0, 1) as any;
		this.gauge2.max = new Date(2019, 0, 1) as any;
		this.gauge2.customTicks = ["new Date(2017, 0, 1)", "new Date(2018, 0, 1)", "new Date(2018, 4, 17)", "new Date(2019, 0, 1)"] as any
		
		this.gauge3.min = new Smart.Utilities.DateTime(2018, 3, 19, 2, 12, 35, 133, 45) as any;
		this.gauge3.max = new Smart.Utilities.DateTime(2018, 3, 19, 2, 12, 35, 133, 347) as any;
		this.gauge3.value = new Smart.Utilities.DateTime(2018, 3, 19, 2, 12, 35, 133, 300) as any
	}
}