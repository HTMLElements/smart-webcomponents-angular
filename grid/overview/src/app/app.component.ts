import { Component, VERSION } from '@angular/core';
import { ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';

interface IRowGenerateData {
	id: number;
	reportsTo: number | null;
	available: boolean | null;
	firstName: string;
	lastName: string;
	name: string;
	productName: string;
	quantity: string | number;
	total: string | number;
	price: string | number;
	date: Date;
	leaf: boolean;
}

interface IRowGenerateOrdersData {
	id: number | string;
	parentid: number | null;
	customer: string;
	firstName: string;
	lastName: string;
	name: string;
	price: string | number;
	quantity: string | number;
	total: string | number;
	date: Date;
}

interface ITaskGenerateData {
	id: number | string;
	status: string;
	text: string;
	tags?: string;
	priority?: string;
	progress?: number;
	checklist?: { text: string, completed: boolean }[];
	color?: string;
	comments?: { text: string, userId: number | string, time: Date }[];
	userId?: number | string;
	startDate?: Date;
	dueDate?: Date
}

export function GetData(rowscount?: number, last?: number, hasNullValues?: boolean): IRowGenerateData[] {
	const data: IRowGenerateData[] = new Array();

	if (rowscount === undefined) {
		rowscount = 100;
	}

	let startIndex = 0;

	if (last) {
		startIndex = rowscount;
		rowscount = last - rowscount;
	}

	const firstNames =
		[
			'Andrew', 'Nancy', 'Shelley', 'Regina', 'Yoshi', 'Antoni', 'Mayumi', 'Ian', 'Peter', 'Lars', 'Petra', 'Martin', 'Sven', 'Elio', 'Beate', 'Cheryl', 'Michael', 'Guylene'
		];

	const lastNames =
		[
			'Fuller', 'Davolio', 'Burke', 'Murphy', 'Nagase', 'Saavedra', 'Ohno', 'Devling', 'Wilson', 'Peterson', 'Winkler', 'Bein', 'Petersen', 'Rossi', 'Vileid', 'Saylor', 'Bjorn', 'Nodier'
		];

	const productNames =
		[
			'Black Tea', 'Green Tea', 'Caffe Espresso', 'Doubleshot Espresso', 'Caffe Latte', 'White Chocolate Mocha', 'Caramel Latte', 'Caffe Americano', 'Cappuccino', 'Espresso Truffle', 'Espresso con Panna', 'Peppermint Mocha Twist'
		];

	const priceValues =
		[
			'2.25', '1.5', '3.0', '3.3', '4.5', '3.6', '3.8', '2.5', '5.0', '1.75', '3.25', '4.0'
		];

	for (let i = 0; i < rowscount; i++) {
		const row = {} as IRowGenerateData;

		const productindex = Math.floor(Math.random() * productNames.length);
		const price = parseFloat(priceValues[productindex]);
		const quantity = 1 + Math.round(Math.random() * 10);

		row.id = startIndex + i;
		row.reportsTo = Math.floor(Math.random() * firstNames.length);

		if (i % Math.floor(Math.random() * firstNames.length) === 0) {
			row.reportsTo = null;
		}

		row.available = productindex % 2 === 0;

		if (hasNullValues === true) {
			if (productindex % 2 !== 0) {
				const random = Math.floor(Math.random() * rowscount);
				row.available = i % random === 0 ? null : false;
			}
		}

		row.firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
		row.lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
		row.name = row.firstName + ' ' + row.lastName;
		row.productName = productNames[productindex];
		row.price = price;
		row.quantity = quantity;
		row.total = price * quantity;

		const date = new Date();
		date.setFullYear(2016, Math.floor(Math.random() * 11), Math.floor(Math.random() * 27));
		date.setHours(0, 0, 0, 0);
		row.date = date;

		data[i] = row;
	}

	return data;
}


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  	@ViewChild('grid', { read: GridComponent, static: false }) grid: GridComponent;
	
    public appearance = {
        alternationStart: 0,
        alternationCount: 2,
        showRowHeader: true,
        showRowHeaderFocusIcon: true,
        showRowHeaderSelectIcon: true
    };

    public selection = {
        enabled: true,
        mode: 'one',
        allowRowHeaderSelection: true
    };

    public pager = {
        visible: true
    };

    public paging = {
        enabled: true
    };

    public layout = {
        rowHeight: 'auto',
        allowCellsWrap: true
    };

    dataSource = new Smart.DataAdapter({
        dataSource: GetData(1000),
        dataFields: [
            'id: number',
            'firstName: string',
            'lastName: string',
            'productName: string',
            'quantity: number',
            'price: number',
            'total: number'
        ]
    });

    columns: GridColumn[] = [
        { label: 'First Name', dataField: 'firstName' },
        { label: 'Last Name', dataField: 'lastName' },
        { label: 'Product', dataField: 'productName' },
        { label: 'Quantity', dataField: 'quantity', align: 'right', cellsAlign: 'right' },
        { label: 'Unit Price', dataField: 'price', align: 'right', cellsAlign: 'right', cellsFormat: 'c2' },
        { label: 'Total', dataField: 'total', align: 'right', cellsAlign: 'right', cellsFormat: 'c2' }
    ]

}
