import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { TableComponent, TableColumn } from '@smart-webcomponents-angular/table';
import { GetOrdersData } from '../assets/data';

import { TableModule } from '@smart-webcomponents-angular/table';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  TableModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('table', { read: TableComponent, static: false }) table!: TableComponent;
    
    dataSource = new window.Smart.DataAdapter({
		dataSource: GetOrdersData(50),
		id: 'id',
		keyDataField: 'id',
		parentDataField: 'parentid',
		dataFields: [
			'id: string',
			'name: string',
			'customer: string',
			'price: number',
			'date: date'
		]
	});

	keyboardNavigation: boolean = true;

	paging: boolean = true;

	columns: TableColumn[] = [{
			label: 'Order Name',
			dataField: "name"
		},
		{
			label: 'Customer',
			dataField: "customer"
		},
		{
			label: 'Price',
			dataField: "price",
			dataType: 'number',
			formatFunction(settings) {
				settings.template = '$' + settings.value.toFixed(2);
			}
		},
		{
			label: 'Order Date',
			dataField: "date",
			dataType: 'date'
		}
	];
 
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