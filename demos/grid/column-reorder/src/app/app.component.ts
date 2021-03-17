import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { Smart, GridComponent } from '@smart-webcomponents-angular/grid';
import { GetData } from '../assets/data';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('grid', { read: GridComponent, static: false }) grid: GridComponent;
	@ViewChild('log', { read: HTMLElement, static: false }) log: HTMLElement;


	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {

	}

	onColumnDragStart = function (event) {
		this.log.nativeElement.innerHTML = 'columnDragStart: ' + event.detail.column.label + ', index: ' + event.detail.index + '<br/>';
	}

	onColumnDragEnd = function (event) {
		this.log.nativeElement.innerHTML += 'columnDragEnd: ' + event.detail.column.label + ', index: ' + event.detail.index + ', new index: ' + event.detail.newIndex + '<br/>';
	};

	onColumnDragCancel = function (event) {
		this.log.nativeElement.innerHTML += 'columnDragCancel: ' + event.detail.column.label + '<br/>';
	};

	behavior = { allowColumnReorder: true }

	dataSource = new Smart.DataAdapter({
		dataSource: GetData(100),
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

	columns = [
		{
			label: 'First Name', width: 150, dataField: 'firstName'
		},
		{ label: 'Last Name', width: 150, dataField: 'lastName' },
		{ label: 'Product', width: 200, dataField: 'productName' },
		{ label: 'Quantity', width: 100, dataField: 'quantity' },
		{ label: 'Unit Price', width: 100, dataField: 'price', cellsFormat: 'c2' },
		{ label: 'Total', dataField: 'total', cellsFormat: 'c2' }
	]

	paging = {
		enabled: true
	}

	pager = {
		visible: true
	}

}