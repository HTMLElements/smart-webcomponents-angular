import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { GridComponent, GridColumn, DataAdapter, Smart, GridRow } from '@smart-webcomponents-angular/grid';
import { GetCountriesData } from '../assets/data';

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

    appearance = {
        showRowHeaderNumber: true,
        allowRowDetailToggleAnimation: true
    }

    onRowInit = (index: number, row: GridRow) => {
        if (index === 0) {
            row.showDetail = true;
        }
    }

    onRowDetailInit = (index: number, row: GridRow, detail: any) => {
        const grid = document.createElement('div');
        detail.appendChild(grid);
        const gridInstance = new Smart.Grid(grid, {
            dataSource: new Smart.DataAdapter({
                dataSource: GetCountriesData().filter((data) => data.ID === row.data.ID),
                dataFields: [
                    'ID: number',
                    'Country: string',
                    'Area: number',
                    'Population_Urban: number',
                    'Population_Rural: number',
                    'Population_Total: number',
                    'GDP_Agriculture: number',
                    'GDP_Industry: number',
                    'GDP_Services: number',
                    'GDP_Total: number'
                ]
            }),
            columns: [
                'Population_Urban',
                'Population_Rural',
                'Population_Total',
                'GDP_Total'
            ]
        });
    }

    rowDetail = {
        enabled: true,
        visible: true,
        height: 120
    }

    dataSource = new Smart.DataAdapter({
        dataSource: GetCountriesData(),
        dataFields: [
            'ID: number',
            'Country: string',
            'Area: number',
            'Population_Urban: number',
            'Population_Rural: number',
            'Population_Total: number',
            'GDP_Agriculture: number',
            'GDP_Industry: number',
            'GDP_Services: number',
            'GDP_Total: number'
        ]
    })

    columns = [
        'Country',
        'Area',
        'Population_Rural',
        'Population_Total',
        'GDP_Total'
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