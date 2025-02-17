import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { TableComponent, TableColumn } from '@smart-webcomponents-angular/table';
import { GetData } from '../assets/data';

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
        dataSource: GetData(10),
        dataFields: [
            'id: number',
            'productName: string',
            'quantity: number',
            'price: number',
            'date: date'
        ]
    });

    editing: boolean = true;

    editMode: string = 'cell';

    columns: TableColumn[] = [{
        label: 'id',
        dataField: 'id',
        dataType: 'number'
    },
    {
        label: 'Product Name',
        dataField: 'productName',
        dataType: 'string',
        validation(value: string) {
            if (value === '') {
                return {
                    message: 'Product name is required!'
                };
            }
            return true;
        }
    },
    {
        label: 'Quantity',
        dataField: 'quantity',
        dataType: 'number',
        validation(value: number) {
            if (isNaN(value) || value <= 5) {
                return {
                    message: 'Quantity has to be larger than 5!'
                };
            }
            return true;
        }
    },
    {
        label: 'Price',
        dataField: 'price',
        dataType: 'number',
        validation(value: number) {
            if (isNaN(value) || value <= 0) {
                return false;
            }
            return true;
        }
    },
    {
        label: 'Date Purchased',
        dataField: 'date',
        dataType: 'date',
        validation(value: Date) {
            if (value.getTime() > new Date().getTime()) {
                return false;
            }
            return true;
        }
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