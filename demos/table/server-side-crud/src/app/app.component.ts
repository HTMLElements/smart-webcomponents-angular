import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from '@smart-webcomponents-angular/button';
import { TableComponent } from '@smart-webcomponents-angular/table';

declare global {
    interface Window {
        demoServer: any;
        query: HTMLElement;
        data: any;
        alasql: any;
    }
}

import { ButtonModule } from '@smart-webcomponents-angular/button';import { TableModule } from '@smart-webcomponents-angular/table';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  ButtonModule, TableModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
    @ViewChild('table', { read: TableComponent, static: false }) table!: TableComponent;

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
    });
    editing = true;
    editMode = 'row';
    keyboardNavigation = true;
    sortMode = 'one';
    columns = [
        { label: 'Id', dataField: 'CustomerID', width: 40, allowEdit: false },
        { label: 'Customer Name', dataField: 'CustomerName' },
        { label: 'Contact Name', dataField: 'ContactName' },
        { label: 'Address', dataField: 'Address' },
        { label: 'Postal Code', dataField: 'PostalCode' },
        { label: 'City', dataField: 'City' },
        { label: 'Country', dataField: 'Country' },
        {
            label: '', dataField: '', width: 50, allowEdit: false, formatFunction(settings: any) {
                settings.template = `<div class="icon-container"><span class="material-icons delete-icon" row-id="${settings.row}" title="Delete row">delete_forever</span></div>`;
            }
        }
    ];

    handleButtonClick() {
        this.table.nativeElement['rows'].push({});
    }

    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code.
        const table = this.table;

        this.table.addEventListener('click', function (event: Event) {
            const deleteIcon = (<HTMLSpanElement>event.target).closest('.delete-icon');

            if (!deleteIcon) {
                return;
            }

            const rowId = deleteIcon.getAttribute('row-id') || 0,
                tableRowObject = table.nativeElement['rowById'][rowId];

            table.nativeElement['rows'].splice(tableRowObject.data.$.index, 1);
        });
    };
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

    if(log) {
        log.innerHTML = content;
    }
}
// In this sample, we use http://alasql.org/ to show how to use SQL queries with Smart.Grid
function DemoServer() {
    window.alasql.options.cache = false;
    createTable();
    return {
        getData: function (request: any) {
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
    }
    function executeQuery(query: string) {
        return window.alasql(query);
    }
    function executeSql(request: any) {
        let lastId;
        window.query.innerHTML = '';
        // Deletes a Row.
        if (request.action === 'remove') {
            const sqlDeleteQuery = 'DELETE FROM Customers' + request.query['remove'];
            window.alasql(sqlDeleteQuery);
            window.query.innerHTML = sqlDeleteQuery;
        }
        // Adds a Row.
        else if (request.action === 'add') {
            const sqlAddQuery = 'INSERT Customers' + request.query['add'];
            window.alasql(sqlAddQuery);
            lastId = window.alasql.tables["Customers"].identities.CustomerID.value;
            window.query.innerHTML = sqlAddQuery;
        }
        // Updates a Row.
        else if (request.action === 'update') {
            const sqlUpdateQuery = 'UPDATE Customers' + request.query['update'];
            window.alasql(sqlUpdateQuery);
            window.query.innerHTML = sqlUpdateQuery;
        }
        // SQL Select query.
        const sql = 'SELECT * FROM Customers' + request.query['where'] + request.query['groupBy'] + request.query['orderBy'] + request.query['limit'];
        // SQL Records Count query.
        const sqlCount = request.grouping.length === 0 ? 'SELECT COUNT(*) as length from Customers ' + request.query['where'] : 'SELECT COUNT(DISTINCT ' + request.grouping[0] + ') as length from Customers ' + request.query['where'];
        const result = window.alasql(sql);
        const length = window.alasql(sqlCount)[0].length;
        if (window.query.innerHTML === '') {
            window.query.innerHTML = sql;
        }
        return { data: result, lastId: lastId, length: length };
    }
}	