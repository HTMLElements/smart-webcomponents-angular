import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { GridComponent, GridColumn, DataAdapter, Smart } from '@smart-webcomponents-angular/grid';
import { GetData } from '../assets/data';

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


    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    dataSource = new Smart.DataAdapter({
        dataSource: GetData(1000),
        dataFields: [
            'id: number',
            'firstName: string',
            'lastName: string',
            'productName: string',
            'available: bool',
            'quantity: number',
            'date: date',
            'price: number',
            'total: number'
        ]
    })

    editing = {
        enabled: true,
        mode: 'cell'
    }

    columns = [
        {
            label: 'Mood', dataField: '', editor: {
                template: '#moodEditorTemplate',
                onInit(index: number, dataField: string, editor: any) {
                    editor.addEventListener('click', function (event: Event) {
                        editor.firstElementChild.value = (event.target as Element)?.innerHTML;
                    });
                }
            }, width: 70, align: 'left', template: '#moodTemplate',
        },
        {
            label: 'First Name', dataField: 'firstName', editor: '<input/>'
        },
        {
            label: 'Last Name', dataField: 'lastName', editor: '<input/>'
        },
        { label: 'Product', width: 200, dataField: 'productName', editor: '#template' },
        {
            label: 'Order Date', width: 200, dataField: 'date', editor: '<input type="date"/>'
        },
        { label: 'Quantity', dataField: 'quantity', editor: '<input type="range"/>' },
        { label: 'Unit Price', dataField: 'price', editor: '<input type="number"/>', cellsFormat: 'c2' }
    ]

    init(): void { }

}