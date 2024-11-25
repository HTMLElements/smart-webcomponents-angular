import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { GridComponent, GridColumn, DataAdapter, Smart } from '@smart-webcomponents-angular/grid';
import { GetData } from '../assets/data'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent  {
	
	ordersData = [
		{ orderId: 1, customer: 'John Doe', date: '2024-11-01' },
		{ orderId: 2, customer: 'Jane Smith', date: '2024-11-03' },
		{ orderId: 3, customer: 'Michael Brown', date: '2024-11-05' },
		{ orderId: 4, customer: 'Nancy Green', date: '2024-11-09' },
		{ orderId: 5, customer: 'Peter Ivanov', date: '2024-11-06' },
		{ orderId: 6, customer: 'George Brown', date: '2024-11-07' },
		{ orderId: 7, customer: 'Michael Davidson', date: '2024-11-08' }
	];

// Order details data
  orderDetailsData = {
		1: [
			{ product: 'Laptop', quantity: 1, price: 1000 },
			{ product: 'Mouse', quantity: 2, price: 50 }
		],
		2: [
			{ product: 'Phone', quantity: 1, price: 800 },
			{ product: 'Charger', quantity: 1, price: 25 }
		],
		3: [
			{ product: 'Monitor', quantity: 2, price: 200 },
			{ product: 'Keyboard', quantity: 1, price: 50 }
		],
		4: [
			{ product: 'Phone', quantity: 2, price: 200 },
			{ product: 'Keyboard', quantity: 1, price: 50 }
		],
		5: [
			{ product: 'Tablet', quantity: 2, price: 200 },
			{ product: 'Phone', quantity: 1, price: 50 }
		],
		6: [
			{ product: 'Laptop', quantity: 2, price: 200 },
			{ product: 'Keyboard', quantity: 1, price: 50 }
		],
		7: [
			{ product: 'Watch', quantity: 2, price: 200 },
			{ product: 'Phone', quantity: 1, price: 50 }
		]
	};

	columns = [ 
		{label: 'Order ID', dataField: 'orderId', width: 100 },
		{ label: 'Customer', dataField: 'customer', width: 200 },
		{ label: 'Date', dataField: 'date', width: 150 }
	]
	
	orderDetailColumns = [
		{ label: 'Product', dataField: 'product', width: 200 },
		{ label: 'Quantity', dataField: 'quantity', width: 100 },
		{ label: 'Price', dataField: 'price', width: 100 }
	]
}