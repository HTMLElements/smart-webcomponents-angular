import { Component, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';
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
	
	generateData = (length: number) => {
		const sampleData = [], firstNames = ['Andrew', 'Nancy', 'Shelley', 'Regina', 'Yoshi', 'Antoni', 'Mayumi', 'Ian', 'Peter', 'Lars', 'Petra', 'Martin', 'Sven', 'Elio', 'Beate', 'Cheryl', 'Michael', 'Guylene'], lastNames = ['Fuller', 'Davolio', 'Burke', 'Murphy', 'Nagase', 'Saavedra', 'Ohno', 'Devling', 'Wilson', 'Peterson', 'Winkler', 'Bein', 'Petersen', 'Rossi', 'Vileid', 'Saylor', 'Bjorn', 'Nodier'], petNames = ['Sam', 'Bob', 'Lucky', 'Tommy', 'Charlie', 'Olliver', 'Mixie', 'Fluffy', 'Acorn', 'Beak'], countries = ['Bulgaria', 'USA', 'UK', 'Singapore', 'Thailand', 'Russia', 'China', 'Belize'], productNames = ['Black Tea', 'Green Tea', 'Caffe Espresso', 'Doubleshot Espresso', 'Caffe Latte', 'White Chocolate Mocha', 'Cramel Latte', 'Caffe Americano', 'Cappuccino', 'Espresso Truffle', 'Espresso con Panna', 'Peppermint Mocha Twist'];
		for (let i = 0; i < length; i++) {
			const row: any = {};
			row.firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
			row.lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
			row.birthday = new Date(Math.round(Math.random() * (2018 - 1918) + 1918), Math.round(Math.random() * 11), Math.round(Math.random() * (31 - 1) + 1));
			row.petName = petNames[Math.floor(Math.random() * petNames.length)];
			row.country = countries[Math.floor(Math.random() * countries.length)];
			row.productName = productNames[Math.floor(Math.random() * productNames.length)];
			row.price = parseFloat((Math.random() * (100 - 0.5) + 0.5).toFixed(2));
			row.quantity = Math.round(Math.random() * (50 - 1) + 1);
			row.timeOfPurchase = new Date(2019, 0, 1, Math.round(Math.random() * 23), Math.round(Math.random() * (31 - 1) + 1));
			row.expired = Math.random() >= 0.5;
			row.attachments = [];
			const maxAttachments = Math.floor(Math.random() * Math.floor(3)) + 1;
			for (let i = 0; i < maxAttachments; i++) {
				row.attachments.push(`../assets/travel/${Math.floor(Math.random() * 36) + 1}.jpg`);
			}
			row.attachments = row.attachments.join(',');
			
			 const urls = ['https://www.jqwidgets.com', 'https://www.htmlelements.com', 'https://www.artavolo.com',]
			row.url = urls[Math.floor(Math.random() * urls.length)];
		
			sampleData[i] = row;
		}
		return sampleData;
	}

	sorting = {
		enabled: true
	}
	
	dataSource = new Smart.DataAdapter({
	    dataSource: this.generateData(50),
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
			'expired: boolean',
			'url: string'
		]
	})

    dataExport = {
		cellFormatFunction: (index: number, dataField: string, value: any) => {
			if (dataField === 'url') {
				return `=HYPERLINK("${value}", "${value}")`
			}
			return null;
		},
		style: {
			hyperlinks: {
				color: '#358CCB'
			},
			red: {
				backgroundColor: '#E94F37',
				color: '#FFFFFF'
			},
			yellow: {
				backgroundColor: '#FFEE93'
			},
			green: {
				backgroundColor: '#63C7B2'
			}
		}
	}
	
	selection = {
		enabled: true,
		checkBoxes: {
			enabled: true
		}
	}

    onRowInit = (index: number, row: any) => {
		if (index === 0 || index === 3 || index === 7 || index === 8 || index === 4) {
			row.selected = true;
		}
	}
			
	columns = [
		{ label: 'Country', dataField: 'country', width: 300, showIcon: true, icon: 'country' },
		{ label: 'Product Name', dataField: 'productName', width: 300, showIcon: true, icon: 'productName' },
		{ label: 'URL', cellsClassName: 'hyperlinks', dataField: 'url', width: 300, showIcon: true, editor: 'image', template: 'url' },
		{ label: 'Price', dataField: 'price', width: 300, showIcon: true, icon: 'price', formatSettings: { formatString: 'c2' } },
		{
			label: 'Quantity', dataField: 'quantity', width: 300, showIcon: true, icon: 'quantity', cellsClassName: function (index: number, dataField: string, value: any) {

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
				return className;
			}
		},
		{ label: 'Time of Purchase', dataField: 'timeOfPurchase', width: 300, showIcon: true, icon: 'timeOfPurchase', formatSettings: { formatString: 'hh:mm tt' } },
		{
			label: 'Expired', dataField: 'expired', width: 300, showIcon: true, icon: 'expired', formatFunction: function (settings: any) {
				settings.template = settings.value ? '☑' : '☐';
			}
		}
	]
}