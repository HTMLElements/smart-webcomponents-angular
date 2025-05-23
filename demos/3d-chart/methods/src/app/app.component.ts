﻿import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ThreeDChartComponent } from '@smart-webcomponents-angular/threedchart';
import { NumberInputComponent } from '@smart-webcomponents-angular/numberinput';
import { ButtonComponent } from '@smart-webcomponents-angular/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit, OnInit {
  @ViewChild('chart', { read: ThreeDChartComponent, static: false })
  chart!: ThreeDChartComponent;
  @ViewChild('seriesGroupIndex', { read: NumberInputComponent, static: false })
  seriesGroupIndex!: NumberInputComponent;
  @ViewChild('seriesIndex', { read: NumberInputComponent, static: false })
  seriesIndex!: NumberInputComponent;
  @ViewChild('itemIndex', { read: NumberInputComponent, static: false })
  itemIndex!: NumberInputComponent;
  @ViewChild('getItem', { read: ButtonComponent, static: false })
  getItemBtn!: ButtonComponent;
  @ViewChild('showItem', { read: ButtonComponent, static: false })
  showItemBtn!: ButtonComponent;
  @ViewChild('hideItem', { read: ButtonComponent, static: false })
  hideItemBtn!: ButtonComponent;
  @ViewChild('getValueAxis', { read: ButtonComponent, static: false })
  getValueAxisBtn!: ButtonComponent;
  @ViewChild('getXAxis', { read: ButtonComponent, static: false })
  getXAxisBtn!: ButtonComponent;
  @ViewChild('getZAxis', { read: ButtonComponent, static: false })
  getZAxisBtn!: ButtonComponent;

  dataSource = [
    {
      Day: 'Monday',
      Keith: {
        Running: 10,
        Swimming: 20,
        Cycling: 30,
      },
      Erica: {
        Running: 13,
        Swimming: 30,
        Cycling: 23,
      },
      George: {
        Running: 15,
        Swimming: 70,
        Cycling: 10,
      },
    },
    {
      Day: 'Tuesday',
      Keith: {
        Running: 15,
        Swimming: 15,
        Cycling: 40,
      },
      Erica: {
        Running: 10,
        Swimming: 15,
        Cycling: 40,
      },
      George: {
        Running: 35,
        Swimming: 15,
        Cycling: 40,
      },
    },
    {
      Day: 'Wednesday',
      Keith: {
        Running: 55,
        Swimming: 15,
        Cycling: 10,
      },
      Erica: {
        Running: 15,
        Swimming: 60,
        Cycling: 5,
      },
      George: {
        Running: 50,
        Swimming: 5,
        Cycling: 10,
      },
    },
    {
      Day: 'Thursday',
      Keith: {
        Running: 15,
        Swimming: 15,
        Cycling: 40,
      },
      Erica: {
        Running: 15,
        Swimming: 15,
        Cycling: 40,
      },
      George: {
        Running: 15,
        Swimming: 15,
        Cycling: 5,
      },
    },
    {
      Day: 'Friday',
      Keith: {
        Running: 15,
        Swimming: 15,
        Cycling: 40,
      },
      Erica: {
        Running: 15,
        Swimming: 15,
        Cycling: 40,
      },
      George: {
        Running: 5,
        Swimming: 5,
        Cycling: 40,
      },
    },
  ];

  caption = 'Fitness & exercise weekly scorecard';

  description = 'Time spent in vigorous exercise by 3 people';

  showLegend = true;

  showLegendTable = true;

  colorScheme = 'scheme29';

  cameraPosition = {
    x: 30,
    y: 30,
    z: 70,
  };

  xAxis = {
    dataField: 'Day',
  };

  valueAxis = {
    minValue: 0,
  };

  seriesGroups = [
    {
      type: 'stackedcolumn',
      dataField: 'Keith',
      displayText: 'Keith',
      series: [
        {
          dataField: 'Running',
          displayText: 'Running',
        },
        {
          dataField: 'Cycling',
          displayText: 'Cycling',
        },
        {
          dataField: 'Swimming',
          displayText: 'Swimming',
        },
      ],
    },
    {
      type: 'stackedcolumn',
      dataField: 'Erica',
      displayText: 'Erica',
      series: [
        {
          dataField: 'Running',
          displayText: 'Running',
        },
        {
          dataField: 'Cycling',
          displayText: 'Cycling',
        },
        {
          dataField: 'Swimming',
          displayText: 'Swimming',
        },
      ],
    },
    {
      type: 'stackedcolumn',
      dataField: 'George',
      displayText: 'George',
      series: [
        {
          dataField: 'Running',
          displayText: 'Running',
        },
        {
          dataField: 'Cycling',
          displayText: 'Cycling',
        },
        {
          dataField: 'Swimming',
          displayText: 'Swimming',
        },
      ],
    },
  ];

  showItem(): void {
    this.chart.showItem(
      parseInt(this.seriesGroupIndex.value),
      parseInt(this.seriesIndex.value),
      parseInt(this.itemIndex.value)
    );
  }

  hideItem(): void {
    this.chart.hideItem(
      parseInt(this.seriesGroupIndex.value),
      parseInt(this.seriesIndex.value),
      parseInt(this.itemIndex.value)
    );
  }

  async getItem() {
    let item = await this.chart.getItemByIndexes(
      parseInt(this.seriesGroupIndex.value),
      parseInt(this.seriesIndex.value),
      parseInt(this.itemIndex.value)
    );
    alert(
      item.serieDisplayText +
        ' ' +
        item.xAxisField +
        ' ' +
        item.groupDisplayText +
        ': ' +
        item.value
    );
  }

  async getValueAxis() {
    let labels = await this.chart.getValueAxisLabels();
    alert(labels);
  }

  async getXAxis() {
    let labels = await this.chart.getXAxisLabels();
    alert(labels);
  }

  async getZAxis() {
    let labels = await this.chart.getZAxisLabels();
    alert(labels);
  }

  ngOnInit(): void {
    // onInit code.
  }

  ngAfterViewInit(): void {
    // afterViewInit code.
    this.init();
  }

  init(): void {
    // init code.
    this.showItemBtn.addEventListener('click', () => {
      this.showItem();
    });
    this.hideItemBtn.addEventListener('click', () => {
      this.hideItem();
    });
    this.getItemBtn.addEventListener('click', () => {
      this.getItem();
    });
    this.getValueAxisBtn.addEventListener('click', () => {
      this.getValueAxis();
    });
    this.getXAxisBtn.addEventListener('click', () => {
      this.getXAxis();
    });
    this.getZAxisBtn.addEventListener('click', () => {
      this.getZAxis();
    });
  }
}
