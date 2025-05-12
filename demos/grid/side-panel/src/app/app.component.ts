import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Smart, GridComponent } from '@smart-webcomponents-angular/grid';
import { GetData } from '../assets/data';

import { GridModule } from '@smart-webcomponents-angular/grid';
import { GaugeModule, GaugeComponent } from '@smart-webcomponents-angular/gauge';
import { ChartModule, ChartComponent } from '@smart-webcomponents-angular/chart';

import { ButtonModule } from '@smart-webcomponents-angular/button';
declare const formulaParser: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ ButtonModule, ChartModule, GaugeModule,  GridModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;
	@ViewChild('gauge', { read: GridComponent, static: false }) gauge!: GaugeComponent;
	@ViewChild('chart', { read: GridComponent, static: false }) chart!: ChartComponent;
    @ViewChild('sidePanel', { static: false }) sidePanel: any;

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
	mode: 'one'
 }
  mockHistory() {
    return Array.from({ length: 5 }, (_, i) => ({
      label: `Week ${i + 1}`,
      value: (Math.random() * 5 + 1).toFixed(2)
    }));
  }
  
  onGridChange(event: CustomEvent): void {
	  const rows: any = this.grid.getSelectedRowsData();
	  if (!rows['length']) {
		  return;
	  }
	  
		const row = rows[0];
        this.grid.showSidePanel(this.sidePanel, 400, (panel) => {
		const productName = panel.querySelector('#productName');
		const productQty = panel.querySelector('#productQty');
		const productPrice = panel.querySelector('#productPrice');
		const productTotal = panel.querySelector('#productTotal');
		const gauge = this.gauge;
		const chart = this.chart;

		productName.textContent = row.product;
		productQty.textContent = row.quantity;
		productPrice.textContent = row.price.toFixed(2) + ' €';
		productTotal.textContent = (row.quantity * row.price).toFixed(2) + ' €';
		gauge.value = row.quantity;

		chart.dataSource = this.mockHistory();
		chart.xAxis = {
		dataField: 'label'
		}
		chart.description = '';
		chart.caption = 'History';
		chart.seriesGroups = 
		[
			{
				type: 'column',
				columnsGapPercent: 50,
				seriesGapPercent: 0,
				valueAxis:
				{
					unitInterval: 10,
					minValue: 0,
					maxValue: 10,
					displayValueAxis: true,
					 axisSize: 'auto'
				},
				series: [
					{ dataField: 'value', displayText: 'Value' }
				]
			}
		]
	   });
	}

}