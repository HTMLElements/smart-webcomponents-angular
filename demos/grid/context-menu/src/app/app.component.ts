import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { GridComponent, GridColumn, DataAdapter, Smart } from '@smart-webcomponents-angular/grid';
import { MenuComponent } from '@smart-webcomponents-angular/menu';
import { GetData } from '../assets/data';

import { GridModule } from '@smart-webcomponents-angular/grid';import { MenuModule } from '@smart-webcomponents-angular/menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  GridModule, MenuModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;
    @ViewChild('menu', { read: MenuComponent, static: false }) menu!: MenuComponent;

    appearance = {
        showRowHeaderNumber: true
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
            'price: number',
            'total: number'
        ]
    })

    editing = {
        enabled: true,
        action: 'none',
        mode: 'row'
    }

    columns = [
        {
            label: 'First Name', dataField: 'firstName'
        },
        {
            label: 'Last Name', dataField: 'lastName'
        },
        { label: 'Product', dataField: 'productName', editor: 'autoComplete' },
        { label: 'Available', dataField: 'available', template: 'checkBox', editor: 'checkBox' },
        { label: 'Quantity', dataField: 'quantity', editor: 'numberInput' },
        { label: 'Unit Price', dataField: 'price', editor: 'numberInput', cellsFormat: 'c2' }
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

        const that = this;
        let rowId: any = null;

        that.grid.addEventListener('contextmenu', function (event: MouseEvent): boolean {
            event.stopPropagation();
            event.preventDefault();
            that.menu.open(event.pageX, event.pageY);

            return false;
        } as any);

        that.menu.addEventListener('itemClick', function (event: CustomEvent) {
            if (rowId === undefined) {
                return;
            }
            if (event.detail.item.getAttribute('data-id') === 'Edit') {
                that.grid.beginEdit(rowId, undefined);
            }
            else {
                that.grid.deleteRow(rowId);
            }
        } as EventListenerOrEventListenerObject);

        that.grid.addEventListener('rowClick', function (event: CustomEvent) {
            if (event.detail.originalEvent.which === 3) {
                const row = event.detail.row;
                rowId = row.id;
                event.detail.originalEvent.stopPropagation();
            }
        } as EventListenerOrEventListenerObject);


    }
}