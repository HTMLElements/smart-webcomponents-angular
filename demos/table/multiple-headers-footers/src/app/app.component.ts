import { Component, ViewChild, OnInit, AfterViewInit, ElementRef, ViewEncapsulation } from '@angular/core';
import { TableComponent, TableColumn } from '@smart-webcomponents-angular/table';
import { DataAdapter } from '@smart-webcomponents-angular/grid';
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

    data = GetData(15);

    dataSource: DataAdapter = new window.Smart.DataAdapter({
        dataSource: this.data,
        dataFields: [
            'id: number',
            'firstName: string',
            'lastName: string',
            'productName: string',
            'quantity: number'
        ]
    });

    freezeFooter: boolean = true;

    freezeHeader: boolean = true;

    footerRow: string = 'customFooterRowTemplate';

    headerRow: string = 'customHeaderRowTemplate';

    columns: TableColumn[] = [{
        label: 'id',
        dataField: 'id',
        dataType: 'number'
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
        label: 'Product Name',
        dataField: 'productName',
        dataType: 'string'
    },
    {
        label: 'Quantity',
        dataField: 'quantity',
        dataType: 'number'
    }
    ];

    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    handleReady(event: CustomEvent) {
        let totalQuantity: number = 0;

        this.data.forEach((dataPoint: any) => totalQuantity += (dataPoint.quantity) as number);

        if (document.getElementById('totalQuantity')) {
            document.getElementById('totalQuantity')!.innerHTML = totalQuantity.toString();
        }
    }

    init(): void {
        // init code.
    }
}