import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ThreeDChartComponent } from '@smart-webcomponents-angular/threedchart';
import { ButtonComponent } from '@smart-webcomponents-angular/button';
import { NumberInputComponent } from '@smart-webcomponents-angular/numberinput';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit, OnInit {
  @ViewChild('chart', { read: ThreeDChartComponent, static: false })
  chart!: ThreeDChartComponent;
  @ViewChild('itemIndex', { read: NumberInputComponent, static: false })
  itemIndex!: NumberInputComponent;
  @ViewChild('showItem', { read: ButtonComponent, static: false })
  showItemBtn!: ButtonComponent;
  @ViewChild('hideItem', { read: ButtonComponent, static: false })
  hideItemBtn!: ButtonComponent;
  @ViewChild('selectItem', { read: ButtonComponent, static: false })
  selectItemBtn!: ButtonComponent;
  @ViewChild('unselectItem', { read: ButtonComponent, static: false })
  unselectItemBtn!: ButtonComponent;

  dataSource = [
    { Type: 'Completed', Count: 22 },
    { Type: 'In Progress', Count: 19 },
    { Type: 'Cancelled', Count: 13 },
    { Type: 'Remaining', Count: 34 },
  ];

  caption = 'Website Project';

  description = 'Progress of the tasks';

  showLegend = true;

  legendLayout = {
    flow: 'vertical',
  };

  colorScheme = 'scheme01';

  cameraPosition = {
    y: 18,
    z: 20,
  };

  seriesGroups = [
    {
      type: 'pie',
      showLabels: true,
      dataSource: this.dataSource,
      series: [
        {
          dataField: 'Count',
          displayText: 'Type',
          initialAngle: 0,
          radius: 15,
          labelRadius: 17,
          centerOffset: 0,
          height: 1.5,
        },
      ],
    },
  ];

  showItem(): void {
    this.chart.showItem(0, 0, parseInt(this.itemIndex.value));
  }

  hideItem(): void {
    this.chart.hideItem(0, 0, parseInt(this.itemIndex.value));
  }

  selectItem(): void {
    this.chart.selectItem(0, 0, parseInt(this.itemIndex.value));
  }

  unselectItem(): void {
    this.chart.unselectItem(0, 0, parseInt(this.itemIndex.value));
    
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
    let events = ['itemClick', 'hide', 'show', 'unselect', 'select'];
    events.forEach((ev) =>
      this.chart.addEventListener(ev, function (e: any) {
        document.getElementById(
          'box'
        )!.innerHTML += `${ev}, itemIndex:${e.detail.itemIndex}<br/>`;
      })
    );

    this.showItemBtn.addEventListener('click', () => {
      this.showItem();
    });
    this.hideItemBtn.addEventListener('click', () => {
      this.hideItem();
    });
    this.selectItemBtn.addEventListener('click', () => {
      this.selectItem();
    });
    this.unselectItemBtn.addEventListener('click', () => {
      this.unselectItem();
    });
  }
}
