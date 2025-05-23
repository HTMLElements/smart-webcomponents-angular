import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { TreeComponent } from '@smart-webcomponents-angular/tree';

import { TreeModule } from '@smart-webcomponents-angular/tree';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ TreeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('tree', { read: TreeComponent, static: false }) tree!: TreeComponent;
	@ViewChild('tree2', { read: TreeComponent, static: false }) tree2!: TreeComponent;
	@ViewChild('tree3', { read: TreeComponent, static: false }) tree3!: TreeComponent;


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

	customSortingFunction(items: any, parentItem: any) {
		if (parentItem.label === 'Numbers') {
			items.sort(function (a: any, b: any) {
				return parseFloat(a.label) - parseFloat(b.label);
			});
		}
		else if (parentItem.label === 'Letters') {
			items.sort(function (a: any, b: any) {
				return parseFloat(b.value) - parseFloat(a.value);
			});
		}
		else {
			// apply default sorting
			items.sort(function (a: any, b: any) {
				return (a.label).localeCompare(b.label);
			});
		}
	}
}