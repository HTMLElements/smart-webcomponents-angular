import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { GridComponent } from '@smart-webcomponents-angular/grid';
import { GridModule } from '@smart-webcomponents-angular/grid';

@Component({
  selector: 'app-root',
  imports: [GridModule],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;

  dataSource = [
    { "timestamp": "2025-11-18 00:00:00", "loadDemand": 602, "renewableGeneration": 566, "gridPrice": 24.51, "batteryCharge": 40.0, "evChargingLoad": 184 },
    { "timestamp": "2025-11-18 01:00:00", "loadDemand": 935, "renewableGeneration": 314, "gridPrice": 77.76, "batteryCharge": 4.7, "evChargingLoad": 70 },
    { "timestamp": "2025-11-18 02:00:00", "loadDemand": 1360, "renewableGeneration": 430, "gridPrice": 95.08, "batteryCharge": 97.4, "evChargingLoad": 122 },
    { "timestamp": "2025-11-18 03:00:00", "loadDemand": 770, "renewableGeneration": 558, "gridPrice": 20.06, "batteryCharge": 23.3, "evChargingLoad": 216 },
    { "timestamp": "2025-11-18 04:00:00", "loadDemand": 606, "renewableGeneration": 187, "gridPrice": 99.38, "batteryCharge": 9.1, "evChargingLoad": 67 },
    { "timestamp": "2025-11-18 05:00:00", "loadDemand": 571, "renewableGeneration": 472, "gridPrice": 69.40, "batteryCharge": 61.8, "evChargingLoad": 181 },
    { "timestamp": "2025-11-18 06:00:00", "loadDemand": 1200, "renewableGeneration": 199, "gridPrice": 68.93, "batteryCharge": 38.2, "evChargingLoad": 138 },
    { "timestamp": "2025-11-18 07:00:00", "loadDemand": 520, "renewableGeneration": 763, "gridPrice": 20.57, "batteryCharge": 98.3, "evChargingLoad": 109 },
    { "timestamp": "2025-11-18 08:00:00", "loadDemand": 1114, "renewableGeneration": 230, "gridPrice": 21.84, "batteryCharge": 46.7, "evChargingLoad": 63 },
    { "timestamp": "2025-11-18 09:00:00", "loadDemand": 621, "renewableGeneration": 761, "gridPrice": 61.98, "batteryCharge": 86.0, "evChargingLoad": 291 }
  ];

  dataSourceSettings: any = {
    dataFields: [
      'timestamp: date',
      'loadDemand: number',
      'renewableGeneration: number',
      'gridPrice: number',
      'batteryCharge: number',
      'evChargingLoad: number'
    ]
  };

  sorting = {
    enabled: true
  };

  filtering = {
    enabled: true
  };

  layout = {
    rowHeight: 40
  };

  behavior = {
    columnResizeMode: 'growAndShrink'
  };

  columns = [
    {
      label: 'Timestamp',
      dataField: 'timestamp',
      cellsFormat: 'HH:mm',
      width: '25%',
      tooltip: 'This is a tooltip for the Timestamp header',
      tooltipRenderer: (_id: string, _dataField: string, _value: any, formattedValue: string) =>
        `Timestamp is\xa0<b>${formattedValue}</b>`
    },
    {
      label: 'Load Demand (MW)',
      dataField: 'loadDemand',
      cellsFormat: 'n0',
      width: '15%',
      tooltip: 'This is a tooltip for the Load Demand header',
      tooltipRenderer: (_id: string, _dataField: string, _value: any, formattedValue: string) =>
        `Load Demand is\xa0<b>${formattedValue} MW</b>`
    },
    {
      label: 'Renewable Generation (MW)',
      dataField: 'renewableGeneration',
      cellsFormat: 'n0',
      width: '20%',
      tooltip: 'This is a tooltip for the Renewable Generation header',
      tooltipRenderer: (_id: string, _dataField: string, _value: any, formattedValue: string) =>
        `Renewable Generation is\xa0<b>${formattedValue} MW</b>`
    },
    {
      label: 'Grid Price ($/MWh)',
      dataField: 'gridPrice',
      cellsFormat: 'f2',
      width: '15%',
      tooltip: 'This is a tooltip for the Grid Price header',
      tooltipRenderer: (_id: string, _dataField: string, _value: any, formattedValue: string) =>
        `Grid Price is\xa0<b>$${formattedValue} / MWh</b>`
    },
    {
      label: 'Battery Charge (%)',
      dataField: 'batteryCharge',
      cellsFormat: 'p0',
      width: '15%',
      tooltip: 'This is a tooltip for the Battery Charge header',
      tooltipRenderer: (_id: string, _dataField: string, _value: any, formattedValue: string) =>
        `Battery Charge is\xa0<b>${formattedValue}</b>`
    },
    {
      label: 'EV Charging Load (MW)',
      dataField: 'evChargingLoad',
      cellsFormat: 'n0',
      width: '10%',
      tooltip: 'This is a tooltip for the EV Charging Load header',
      tooltipRenderer: (_id: string, _dataField: string, _value: any, formattedValue: string) =>
        `EV Charging Load is\xa0<b>${formattedValue} MW</b>`
    }
  ];

  ngAfterViewInit(): void {
    // No additional initialization needed since all config is bound in template
  }
}