import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { TableComponent, TableColumn } from '@smart-webcomponents-angular/table';

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
        dataSource: [{
            "EmployeeID": 1,
            "FirstName": "Nancy",
            "LastName": "Davolio",
            "ReportsTo": 2,
            "Country": "USA",
            "Title": "Sales Representative",
            "HireDate": "1992-05-01 00:00:00",
            "BirthDate": "1948-12-08 00:00:00",
            "City": "Seattle",
            "Address": "507 - 20th Ave. E.Apt. 2A"
        },
        {
            "EmployeeID": 2,
            "FirstName": "Andrew",
            "LastName": "Fuller",
            "ReportsTo": null,
            "Country": "USA",
            "Title": "Vice President, Sales",
            "HireDate": "1992-08-14 00:00:00",
            "BirthDate": "1952-02-19 00:00:00",
            "City": "Tacoma",
            "Address": "908 W. Capital Way"
        },
        {
            "EmployeeID": 3,
            "FirstName": "Janet",
            "LastName": "Leverling",
            "ReportsTo": 2,
            "Country": "USA",
            "Title": "Sales Representative",
            "HireDate": "1992-04-01 00:00:00",
            "BirthDate": "1963-08-30 00:00:00",
            "City": "Kirkland",
            "Address": "722 Moss Bay Blvd."
        },
        {
            "EmployeeID": 4,
            "FirstName": "Margaret",
            "LastName": "Peacock",
            "ReportsTo": 2,
            "Country": "USA",
            "Title": "Sales Representative",
            "HireDate": "1993-05-03 00:00:00",
            "BirthDate": "1937-09-19 00:00:00",
            "City": "Redmond",
            "Address": "4110 Old Redmond Rd."
        },
        {
            "EmployeeID": 5,
            "FirstName": "Steven",
            "LastName": "Buchanan",
            "ReportsTo": 2,
            "Country": "UK",
            "Title": "Sales Manager",
            "HireDate": "1993-10-17 00:00:00",
            "BirthDate": "1955-03-04 00:00:00",
            "City": "London",
            "Address": "14 Garrett Hill"
        },
        {
            "EmployeeID": 6,
            "FirstName": "Michael",
            "LastName": "Suyama",
            "ReportsTo": 5,
            "Country": "UK",
            "Title": "Sales Representative",
            "HireDate": "1993-10-17 00:00:00",
            "BirthDate": "1963-07-02 00:00:00",
            "City": "London",
            "Address": "Coventry House Miner Rd."
        },
        {
            "EmployeeID": 7,
            "FirstName": "Robert",
            "LastName": "King",
            "ReportsTo": 5,
            "Country": "UK",
            "Title": "Sales Representative",
            "HireDate": "1994-01-02 00:00:00",
            "BirthDate": "1960-05-29 00:00:00",
            "City": "London",
            "Address": "Edgeham Hollow Winchester Way"
        },
        {
            "EmployeeID": 8,
            "FirstName": "Laura",
            "LastName": "Callahan",
            "ReportsTo": 2,
            "Country": "USA",
            "Title": "Inside Sales Coordinator",
            "HireDate": "1994-03-05 00:00:00",
            "BirthDate": "1958-01-09 00:00:00",
            "City": "Seattle",
            "Address": "4726 - 11th Ave. N.E."
        },
        {
            "EmployeeID": 9,
            "FirstName": "Anne",
            "LastName": "Dodsworth",
            "ReportsTo": 5,
            "Country": "UK",
            "Title": "Sales Representative",
            "HireDate": "1994-11-15 00:00:00",
            "BirthDate": "1966-01-27 00:00:00",
            "City": "London",
            "Address": "7 Houndstooth Rd."
        }
        ],
        keyDataField: 'EmployeeID',
        parentDataField: 'ReportsTo',
        id: 'EmployeeID',
        dataFields: [
            'EmployeeID: number',
            'ReportsTo: number',
            'FirstName: string',
            'LastName: string',
            'Country: string',
            'City: string',
            'Address: string',
            'Title: string',
            'HireDate: date',
            'BirthDate: date'
        ]
    });

    keyboardNavigation: boolean = true;

    handleInit: Function = (event: Event) => {
        this.table.nativeElement['rows'][0].data.expanded = true;
    }

    columns: TableColumn[] = [{
        label: 'First Name',
        dataField: 'FirstName'
    },
    {
        label: 'Last Name',
        dataField: 'LastName'
    },
    {
        label: 'Title',
        dataField: 'Title'
    },
    {
        label: 'Birth Date',
        dataField: 'BirthDate',
        dataType: 'date'
    },
    {
        label: 'Hire Date',
        dataField: 'HireDate',
        dataType: 'date'
    },
    {
        label: 'Address',
        dataField: 'Address'
    },
    {
        label: 'City',
        dataField: 'City'
    },
    {
        label: 'Country',
        dataField: 'Country'
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
        // init code
    }
}