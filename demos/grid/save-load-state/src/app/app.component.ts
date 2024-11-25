import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { GridComponent, GridColumn, DataAdapter, Smart } from '@smart-webcomponents-angular/grid';
import { GetData } from '../assets/data'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;


	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
	}
	

    sorting = {
		enabled: true,
		mode: 'one'
	}
	
	selection = {
		enabled: true,
		allowCellSelection: true,
		mode: 'extended'
	}
	
	behavior = {
		allowColumnReorder: true,
		columnResizeMode: 'growAndShrink'
	}
	
	editing = {
		enabled: true,
		mode: 'cell'
	}
	
	filtering = {
		enabled: true
	}
			
	dataSource = new Smart.DataAdapter({
	    dataSource:  [
			  {
                    id: 1,
                    firstName: "John",
                    lastName: "Doe",
                    productName: "Laptop",
                    quantity: 1,
                    price: 1200,
                    total: 1200
                },
                {
                    id: 2,
                    firstName: "Jane",
                    lastName: "Smith",
                    productName: "Smartphone",
                    quantity: 2,
                    price: 800,
                    total: 1600
                },
                {
                    id: 3,
                    firstName: "Michael",
                    lastName: "Brown",
                    productName: "Headphones",
                    quantity: 3,
                    price: 150,
                    total: 450
                },
                {
                    id: 4,
                    firstName: "Emily",
                    lastName: "Clark",
                    productName: "Monitor",
                    quantity: 2,
                    price: 300,
                    total: 600
                },
                {
                    id: 5,
                    firstName: "David",
                    lastName: "Wilson",
                    productName: "Keyboard",
                    quantity: 5,
                    price: 100,
                    total: 500
                }, {
                    id: 6,
                    firstName: "Sophia",
                    lastName: "Garcia",
                    productName: "Tablet",
                    quantity: 1,
                    price: 600,
                    total: 600
                },
                {
                    id: 7,
                    firstName: "James",
                    lastName: "Johnson",
                    productName: "Gaming Chair",
                    quantity: 2,
                    price: 250,
                    total: 500
                },
                {
                    id: 8,
                    firstName: "Olivia",
                    lastName: "Martinez",
                    productName: "Smartwatch",
                    quantity: 4,
                    price: 200,
                    total: 800
                },
                {
                    id: 9,
                    firstName: "William",
                    lastName: "Taylor",
                    productName: "External Hard Drive",
                    quantity: 3,
                    price: 120,
                    total: 360
                },
                {
                    id: 10,
                    firstName: "Mia",
                    lastName: "Anderson",
                    productName: "Bluetooth Speaker",
                    quantity: 6,
                    price: 50,
                    total: 300
                }
		],
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
			label: 'First Name', dataField: 'firstName', width: 100
		},
		{ label: 'Last Name', dataField: 'lastName', width: 100 },
		{ label: 'Product', dataField: 'productName', width: 150 },
		{ label: 'Quantity', dataField: 'quantity', align: 'right', cellsAlign: 'right', width: 150 },
		{ label: 'Unit Price', dataField: 'price', align: 'right', cellsAlign: 'right', cellsFormat: 'c2', width: 150 },
		{ label: 'Total', dataField: 'total', align: 'right', cellsAlign: 'right', cellsFormat: 'c2' }
	]
}