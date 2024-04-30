import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { GridComponent, GridDataSourceSettings, GridColumn, GridSelection, Smart } from '@smart-webcomponents-angular/grid';

function GenerateData() {
    const sampleData = [], firstNames = ['Andrew', 'Nancy', 'Shelley', 'Regina', 'Yoshi', 'Antoni', 'Mayumi', 'Ian', 'Peter', 'Lars', 'Petra', 'Martin', 'Sven', 'Elio', 'Beate', 'Cheryl', 'Michael', 'Guylene'], lastNames = ['Fuller', 'Davolio', 'Burke', 'Murphy', 'Nagase', 'Saavedra', 'Ohno', 'Devling', 'Wilson', 'Peterson', 'Winkler', 'Bein', 'Petersen', 'Rossi', 'Vileid', 'Saylor', 'Bjorn', 'Nodier'], petNames = ['Sam', 'Bob', 'Lucky', 'Tommy', 'Charlie', 'Olliver', 'Mixie', 'Fluffy', 'Acorn', 'Beak'], countries = ['Bulgaria', 'USA', 'UK', 'Singapore', 'Thailand', 'Russia', 'China', 'Belize'], productNames = ['Black Tea', 'Green Tea', 'Caffe Espresso', 'Doubleshot Espresso', 'Caffe Latte', 'White Chocolate Mocha', 'Cramel Latte', 'Caffe Americano', 'Cappuccino', 'Espresso Truffle', 'Espresso con Panna', 'Peppermint Mocha Twist'];
    for (let i = 0; i < 50; i++) {
        const row: any = {};
        row.firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
        row.lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
        row.birthday = new Date(Math.round(Math.random() * (2024 - 1918) + 1918), Math.round(Math.random() * 11), Math.round(Math.random() * (31 - 1) + 1));
        row.petName = petNames[Math.floor(Math.random() * petNames.length)];
        row.country = countries[Math.floor(Math.random() * countries.length)];
        row.productName = productNames[Math.floor(Math.random() * productNames.length)];
        row.price = parseFloat((Math.random() * (100 - 0.5) + 0.5).toFixed(2));
        row.quantity = Math.round(Math.random() * (50 - 1) + 1);
        row.timeOfPurchase = new Date(2024, 0, 1, Math.round(Math.random() * 23), Math.round(Math.random() * (31 - 1) + 1));
        row.expired = Math.random() >= 0.5;
        
        sampleData[i] = row;
    }
    return sampleData;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;

    dataSource: any[] = GenerateData();
	dataSourceSettings: any = {
		dataFields: [
			'firstName: string',
			'lastName: string',
			'birthday: date',
			'petName: string',
			'country: string',
			'productName: string',
			'price: number',
			'quantity: number',
			'timeOfPurchase: date',
			'expired: boolean'
		]
	}
	
	dropDownMode: boolean = true;
	selection: GridSelection = {
		enabled: true,
		mode: 'extended'
	};
	
	columns: GridColumn[] = [
		{ label: 'First Name', dataField: 'firstName', showIcon: true, icon: 'firstName' },
		{ label: 'Last Name', dataField: 'lastName', showIcon: true, icon: 'lastName' },
		{ label: 'Country', dataField: 'country', showIcon: true, icon: 'country' },
		{ label: 'Product Name', dataField: 'productName', showIcon: true, icon: 'productName' },
		{ label: 'Price', dataField: 'price', showIcon: true, icon: 'price', formatSettings: { formatString: 'c2' } },
		{
			label: 'Quantity', dataField: 'quantity', showIcon: true, icon: 'quantity', formatFunction: function (settings: any) {
				const value = settings.value;
				let className;
				if (value < 20) {
					className = 'red';
				}
				else if (value < 35) {
					className = 'yellow';
				}
				else {
					className = 'green';
				}
				settings.template = `<div class="${className}">${value}</div>`;
			}
		},
		{ label: 'Time of Purchase', dataField: 'timeOfPurchase', showIcon: true, icon: 'timeOfPurchase', formatSettings: { formatString: 'hh:mm tt' } },
		{
			label: 'Expired', dataField: 'expired', showIcon: true, icon: 'expired', formatFunction: function (settings: any) {
				settings.template = settings.value ? '☑' : '☐';
			}
		}
	]

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