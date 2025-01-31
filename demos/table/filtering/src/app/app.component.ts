import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { TableComponent, TableColumn } from '@smart-webcomponents-angular/table';
import { GetData } from '../assets/data';
import '@smart-webcomponents-angular/source/modules/smart.element';

import { TableModule } from '@smart-webcomponents-angular/table';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  TableModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit {
	@ViewChild('table', { read: TableComponent, static: false }) table!: TableComponent;

	dataSource = GetData(50);

	dataSourceSettings: any = {
		dataFields: [
			'id: number',
			'firstName: string',
			'lastName: string',
			'productName: string',
			'quantity: number',
			'price: number',
			'total: number'
		]
	};

	filtering: boolean = true;

	tooltip: boolean = true;

	columns: TableColumn[] = [{
		label: 'id',
		dataField: 'id',
		dataType: 'number'
	},
	{
		label: 'First Name',
		dataField: 'firstName',
		dataType: 'string'
	},
	{
		label: 'Last Name',
		dataField: 'lastName',
		dataType: 'string'
	},
	{
		label: 'Product Name',
		dataField: 'productName',
		dataType: 'string'
	},
	{
		label: 'Quantity',
		dataField: 'quantity',
		dataType: 'number'
	},
	{
		label: 'Price',
		dataField: 'price',
		dataType: 'number'
	},
	{
		label: 'Total',
		dataField: 'total',
		dataType: 'number'
	}
	];

	ngAfterViewInit(): void {
		// afterViewInit code.
		const filterGroup = new window.Smart.Utilities.FilterGroup();
		const filterObject = filterGroup.createFilter('numericFilter', '3', 'GREATER_THAN');

		filterGroup.addFilter('and', filterObject);
		this.table.addFilter('quantity', filterGroup);
	}
}