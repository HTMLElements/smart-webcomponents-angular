import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { GridComponent, GridEditing } from '@smart-webcomponents-angular/grid';

declare global {
	interface Window {
		demoServer: any;
		query: HTMLElement;
		data: any;
		alasql: any;
		lastRequest: any;
	}
}

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


	editing = {
		enabled: true,
		mode: 'row',
		batch: true,
		addNewRow: {
			visible: true,
			position: 'far'
		},
		commandBar: {
			visible: true,
			position: 'far'
		},
		dialog: {
			enabled: true
		},
		addDialog: {
			enabled: true
		},
		deleteDialog: {
			enabled: true
		},
		commandColumn: {
			visible: true,
			width: 100
		}
	} as GridEditing

	sorting = {
		enabled: true
	}

	selection = {
		enabled: true,
		mode: 'extended',
		allowCellSelection: true
	}

	appearance = {
		alternationStart: 0,
		alternationCount: 2,
		showRowHeaderNumber: true
	}

	dataSource = new window.Smart.DataAdapter({
		virtualDataSource: function (resultCallbackFunction: any, details: any) {
			if (details.action === 'dataBind') {
				// inits the demo server.
				window.demoServer = DemoServer();
				const result = window.demoServer.getData(details);
				// logs the data below the component.
				LogData(result.data);
				resultCallbackFunction({
					dataSource: result.data,
					lastId: result.lastId,
					virtualDataSourceLength: result.length
				});
			}
			else {
				const result = window.demoServer.getData(details);
				// logs the data below the component.
				LogData(result.data);
				resultCallbackFunction({
					dataSource: result.data,
					lastId: result.lastId,
					virtualDataSourceLength: result.length
				});
			}
		},
		id: 'CustomerID',
		dataFields: [
			'CustomerID: string',
			'CustomerName: string',
			'ContactName: string',
			'Address: string',
			'PostalCode: string',
			'City: string',
			'Country: string'
		]
	})

	columns = [
		{
			label: 'Id', dataField: 'CustomerID', allowEdit: false
		},
		{ label: 'Customer Name', dataField: 'CustomerName' },
		{ label: 'Contact Name', dataField: 'ContactName' },
		{ label: 'Address', dataField: 'Address' },
		{ label: 'Postal Code', dataField: 'PostalCode' },
		{ label: 'City', dataField: 'City' },
		{ label: 'Country', dataField: 'Country' }
	]

	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
	}
}

function LogData(data: any) {
	const log = document.getElementById('dataLog');
	let content = '<table>';
	for (let i = 0; i < data.length; i++) {
		let row = '<tr>';
		if (i === 0) {
			for (let column in data[i]) {
				row += '<td>' + column + '</td>';
			}
			row += '</tr>';
		}
		content += row;
		row = '<tr>';
		for (let column in data[i]) {
			row += '<td>' + data[i][column] + '</td>';
		}
		row += '</tr>';
		content += row;
	}
	content += '</table>';
	if (log) { log.innerHTML = content; }
}
// In this sample, we use http://alasql.org/ to show how to use SQL queries with Smart.Grid
function DemoServer() {
	window.alasql.options.cache = false;
	createTable();
	return {
		getData: function (request: any) {
			// logs SQL query.
			if (!window.lastRequest) {
				window.lastRequest = new Date();
			}
			const currentTime = new Date() as unknown as number;
			const timeSpan = currentTime - window.lastRequest;
			if (timeSpan > 1000) {
				window.query.innerHTML = '';
			}
			window.lastRequest = new Date();
			const queryResult = executeSql(request);
			return {
				data: queryResult.data,
				lastId: queryResult.lastId,
				length: queryResult.length
			};
		},
	};
	function createTable() {
		executeQuery('CREATE TABLE Customers (CustomerID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,CustomerName NVARCHAR(255),ContactName NVARCHAR(255),Address NVARCHAR(255),City NVARCHAR(255),PostalCode NVARCHAR(255),Country NVARCHAR(255))');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Alfreds Futterkiste","Maria Anders","Obere Str. 57","Berlin","12209","Germany")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Ana Trujillo Emparedados y helados","Ana Trujillo","Avda. de la Constitución 2222","México D.F.","05021","Mexico")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Antonio Moreno Taquería","Antonio Moreno","Mataderos 2312","México D.F.","05023","Mexico")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Around the Horn","Thomas Hardy","120 Hanover Sq.","London","WA1 1DP","UK")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Berglunds snabbköp","Christina Berglund","Berguvsvägen 8","Luleå","S-958 22","Sweden")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Blauer See Delikatessen","Hanna Moos","Forsterstr. 57","Mannheim","68306","Germany")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Blondel père et fils","Frédérique Citeaux","24, place Kléber","Strasbourg","67000","France")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Bólido Comidas preparadas","Martín Sommer","C/ Araquil, 67","Madrid","28023","Spain")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Bon app\'","Laurence Lebihans","12, rue des Bouchers","Marseille","13008","France")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Bottom-Dollar Marketse","Elizabeth Lincoln","23 Tsawassen Blvd.","Tsawassen","T2F 8M4","Canada")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("B\'s Beverages","Victoria Ashworth","Fauntleroy Circus","London","EC2 5NT","UK")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Cactus Comidas para llevar","Patricio Simpson","Cerrito 333","Buenos Aires","1010","Argentina")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Centro comercial Moctezuma","Francisco Chang","Sierras de Granada 9993","México D.F.","05022","Mexico")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Chop-suey Chinese","Yang Wang","Hauptstr. 29","Bern","3012","Switzerland")');
		executeQuery('INSERT INTO Customers (CustomerName,ContactName,Address,City,PostalCode,Country) VALUES ("Comércio Mineiro","Pedro Afonso","Av. dos Lusíadas, 23","São Paulo","05432-043","Brazil")');
	}
	function executeQuery(query: any) {
		return window.alasql(query);
	}
	function executeSql(request: any) {
		let lastId;
		// Deletes a Row.
		if (request.action === 'remove') {
			const sqlDeleteQuery = 'DELETE FROM Customers' + request.query['remove'];
			window.alasql(sqlDeleteQuery);
			// logs SQL query.
			window.query.innerHTML += sqlDeleteQuery + '<br/>';
		}
		// Adds a Row.
		else if (request.action === 'add') {
			const sqlAddQuery = 'INSERT Customers' + request.query['add'];
			window.alasql(sqlAddQuery);
			lastId = window.alasql.tables["Customers"].identities.CustomerID.value;
			// logs SQL query.
			window.query.innerHTML += sqlAddQuery + '<br/>';
		}
		// Updates a Row.
		else if (request.action === 'update') {
			const sqlUpdateQuery = 'UPDATE Customers' + request.query['update'];
			window.alasql(sqlUpdateQuery);
			// logs SQL query.
			window.query.innerHTML += sqlUpdateQuery + '<br/>';
		}
		// SQL Select query.
		const sql = 'SELECT * FROM Customers' + request.query['where'] + request.query['groupBy'] + request.query['orderBy'];
		// SQL Records Count query.
		const sqlCount = request.grouping.length === 0 ? 'SELECT COUNT(*) as length from Customers ' + request.query['where'] : 'SELECT COUNT(DISTINCT ' + request.grouping[0] + ') as length from Customers ' + request.query['where'];
		const result = window.alasql(sql);
		const length = window.alasql(sqlCount)[0].length;
		// logs SQL query.
		window.query.innerHTML += sql + '<br/>';
		return { data: result, lastId: lastId, length: length };
	}
}	