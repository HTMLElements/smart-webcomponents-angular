import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Smart, GridComponent } from '@smart-webcomponents-angular/grid';
import { GetData } from '../assets/data';

import { GridModule } from '@smart-webcomponents-angular/grid';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  GridModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;


	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
	}

	dataSource = new Smart.DataAdapter({
		dataSource: GetData(100),
		groupBy: ['firstName', 'lastName'],
		dataFields: [
			'id: number',
			'firstName: string',
			'lastName: string',
			'productName: string',
			'quantity: number',
			'price: number',
			'total: number'
		]
	})

	sorting = {
		enabled: true
	}

	behavior = {
		allowColumnReorder: true
	}

	grouping = {
		enabled: true,
		groupBar: {
			visible: true
		}
	}

	columns = [
		{
			label: '#', width: 200, dataField: 'id'
		},
		{
			label: 'First Name', dataField: 'firstName'
		},
		{ label: 'Last Name', dataField: 'lastName' },
		{ label: 'Product', dataField: 'productName' },
		{ label: 'Quantity', dataField: 'quantity', align: 'right', cellsAlign: 'right', },
		{ label: 'Unit Price', dataField: 'price', align: 'right', cellsAlign: 'right', cellsFormat: 'c2' },
		{
			label: 'Total', dataField: 'total', align: 'right', cellsAlign: 'right', cellsFormat: 'c2'
		}
	]
}