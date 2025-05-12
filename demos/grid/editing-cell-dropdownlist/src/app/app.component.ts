import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Smart, GridComponent } from '@smart-webcomponents-angular/grid';
import { GetData } from '../assets/data';

import { GridModule } from '@smart-webcomponents-angular/grid';

import { ButtonModule } from '@smart-webcomponents-angular/button';
declare const formulaParser: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ ButtonModule, GridModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;
	
	log = '';
	
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
	}
	
	
	columns = [
		{ label: 'ID', dataField: 'id', dataType: 'number' },
		{ label: 'Name', dataField: 'name', dataType: 'string' },
		{
			label: 'Status',
			dataField: 'status',
			displayField: 'statusLabel',
			template: 'list',
			editor: {
				template: 'dropDownList',
				settings: {
					dataSource: [
						{ label: 'Active', value: 'A' },
						{ label: 'Inactive', value: 'I' },
						{ label: 'Pending', value: 'P' },
						{ label: 'Suspended', value: 'S' },
						{ label: 'Banned', value: 'B' }
					],
					valueMember: 'value',
					displayMember: 'label',
					dropDownWidth: 'auto'
				}
			}
		}
	]

	dataSource = [
		{ id: 1, name: 'John Doe', status: 'A', statusLabel: 'Active' },
		{ id: 2, name: 'Jane Smith', status: 'I', statusLabel: 'Inactive' },
		{ id: 3, name: 'Alice Johnson', status: 'P', statusLabel: 'Pending' },
		{ id: 4, name: 'Bob Brown', status: 'S', statusLabel: 'Suspended' },
		{ id: 5, name: 'Charlie Black', status: 'B', statusLabel: 'Banned' },
		{ id: 6, name: 'Laura White', status: 'A', statusLabel: 'Active' },
		{ id: 7, name: 'Peter Green', status: 'P', statusLabel: 'Pending' },
		{ id: 8, name: 'Sophia Blue', status: 'I', statusLabel: 'Inactive' },
		{ id: 9, name: 'Tom Orange', status: 'S', statusLabel: 'Suspended' },
		{ id: 10, name: 'Mona Purple', status: 'A', statusLabel: 'Active' }
	] 

	selection = {
		enabled: true,
		allowCellSelection: true,
		mode: 'extended',
		allowColumnHeaderSelection: true,
		allowRowHeaderSelection: true
	}

	editing = {
		enabled: true,
		mode: 'cell'
	}

	onEndEdit(event: CustomEvent): void {
	    const args = event.detail;
        const row = args.row.id;
        const column = args.dataField;
        const value = args.value;
        const dataValue = args.data[args.column.dataField];
        this.log = `Row: ${row}, Column: ${column}, Value: ${dataValue}, Label: ${value}`;
	}
	 
}