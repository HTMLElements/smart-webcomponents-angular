import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { GridComponent, GridColumn, DataAdapter, Smart } from '@smart-webcomponents-angular/grid';
import { GetEmployees } from '../assets/data';

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

    layout = {
        rowHeight: 50
    }

    dataSource = new Smart.DataAdapter({
        dataSource: GetEmployees(),
        dataFields: [
            'id: number',
            'firstName: string',
            'lastName: string',
            'title: string',
            'notes: string',
            'city: string',
            'country: string',
            'homePhone: string'
        ]
    })

    columns = [
        {
            label: 'Photo', dataField: 'Photo', width: 50, cellsVerticalAlign: 'middle', verticalAlign: 'middle', align: 'center', cellsAlign: 'center', formatFunction(settings: any) {
                settings.template = '<img width="32" src="' + 'https://htmlelements.com/demos/images/phonebook/' + settings.row.data.firstName.toLowerCase() + '.png"/>';
            }
        },
        {
            label: 'First Name', dataField: 'firstName',
        },
        {
            label: 'Last Name', dataField: 'lastName'
        },
        { label: 'Title', dataField: 'title', width: 150 },
        { label: 'Notes', dataField: 'notes', align: 'center', cellsAlign: 'center', width: 70, template: '#notesTemplate' },
        {
            label: 'City', dataField: 'city'
        },
        { label: 'Country', width: 70, cellsAlign: 'center', align: 'center', dataField: 'country' },
        { label: 'Phone', dataField: 'homePhone', template: '<a href="#{{value}}">{{value}}</a>' }
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

    }
}