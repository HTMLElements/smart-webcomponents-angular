import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Smart, GridComponent } from '@smart-webcomponents-angular/grid';
import { GetData } from '../assets/data';

import { GridModule } from '@smart-webcomponents-angular/grid';

import { ButtonModule } from '@smart-webcomponents-angular/button';
declare const formulaParser: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ ButtonModule,  GridModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

declare const formulaParser: any;

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;

	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
	}
	
	columns = [
    { label: 'Product', dataField: 'product', dataType: 'string' },
    { label: 'Quantity', dataField: 'quantity', dataType: 'number' },
    {
      label: 'Price', dataField: 'price', dataType: 'number', cellsFormat: 'c2'
    },
    {
      label: 'Total', dataField: 'total', dataType: 'number',
      allowEdit: false, formula: '=quantity * price', cellsFormat: 'c2'
    }
  ];
  
  editing=  {
	enabled: true,
	mode: 'cell'
  }
  
   dataSource = [
    { product: 'Apples', quantity: 3, price: 1.20 },
    { product: 'Oranges', quantity: 5, price: 0.80 },
    { product: 'Bananas', quantity: 2, price: 1.50 },
    { product: 'Strawberries', quantity: 1, price: 3.90 },
    { product: 'Grapes', quantity: 4, price: 2.10 },
    { product: 'Pineapple', quantity: 2, price: 3.30 },
    { product: 'Watermelon', quantity: 1, price: 5.50 },
    { product: 'Peaches', quantity: 6, price: 1.10 },
    { product: 'Cherries', quantity: 3, price: 4.20 },
    { product: 'Mango', quantity: 2, price: 2.80 },
    { product: 'Blueberries', quantity: 2, price: 3.60 },
    { product: 'Kiwi', quantity: 4, price: 1.90 },
    { product: 'Pears', quantity: 5, price: 1.70 },
    { product: 'Plums', quantity: 3, price: 2.20 },
    { product: 'Lemons', quantity: 6, price: 0.95 },
    { product: 'Avocados', quantity: 2, price: 2.50 },
    { product: 'Coconut', quantity: 1, price: 4.80 },
    { product: 'Papaya', quantity: 2, price: 3.10 },
    { product: 'Raspberries', quantity: 1, price: 4.50 },
    { product: 'Dragon Fruit', quantity: 1, price: 6.20 }
  ];

 selection = {
	enabled: true,
	allowCellSelection: true,
	mode: 'extended',
	allowColumnHeaderSelection: true,
	allowRowHeaderSelection: true
 }
 

}