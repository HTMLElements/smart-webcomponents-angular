import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { PivotTableColumn, PivotTableComponent } from '@smart-webcomponents-angular/pivottable';
import { GetData } from '../assets/data';

import { PivotTableModule } from '@smart-webcomponents-angular/pivottable';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  PivotTableModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('pivottable', { read: PivotTableComponent, static: false }) pivottable!: PivotTableComponent;

    dataSource = new window.Smart.DataAdapter({
        dataSource: GetData(25),
        dataFields: [
            'firstName: string',
            'lastName: string',
            'productName: string',
            'quantity: number',
            'price: number'
        ]
    });
    designer = true;
    toolbar = true;
    freezeHeader = true;
    keyboardNavigation = true;
    columns = [
        { label: 'First Name', dataField: 'firstName', dataType: 'string', allowRowGroup: true, rowGroup: true },
        { label: 'Last Name', dataField: 'lastName', dataType: 'string', allowPivot: true, allowRowGroup: true, rowGroup: true },
        { label: 'Product Name', dataField: 'productName', dataType: 'string', allowPivot: true, pivot: true },
        { label: 'Quantity', dataField: 'quantity', dataType: 'number' },
        { label: 'Price', dataField: 'price', dataType: 'number', summary: 'sum', summarySettings: { prefix: '$', decimalPlaces: 2 } },
    ] as PivotTableColumn[];

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