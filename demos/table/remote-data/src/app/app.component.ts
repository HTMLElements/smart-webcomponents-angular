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
        virtualDataSourceLength: 500,
        virtualDataSourceCache: true,
        virtualDataSource: function (resultCallbackFunction: any, details: any) {
            fetch('https://randomuser.me/api/?results=' + (details.last - details.first))
                .then(response => response.json())
                .then(json => {
                    const data = json.results.map((result: any) => {
                        return {
                            title: result.name.title,
                            firstName: result.name.first,
                            lastName: result.name.last,
                            phone: result.phone
                        };
                    });
                    resultCallbackFunction({
                        dataSource: data,
                        virtualDataSourceLength: 500
                    });
                });
        },
        dataFields: [
            'title: string',
            'firstName: string',
            'lastName: string',
            'phone: string'
        ]
    });

    paging: boolean = true;

    pageIndex: number = 0;

    pageSize: number = 10;

    columns: TableColumn[] = [{
        label: 'Title',
        dataField: 'title',
        dataType: 'string'
    },
    {
        label: 'First Name',
        dataField: 'firstName',
        dataType: 'string'
    },
    {
        label: 'Last Name',
        dataField: 'lastName',
        dataType: 'string'
    },
    {
        label: 'Phone',
        dataField: 'phone',
        dataType: 'string'
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