import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ThreeDChartComponent } from '@smart-webcomponents-angular/threedchart';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
  @ViewChild('chart', { read: ThreeDChartComponent, static: false }) chart!: ThreeDChartComponent;

  dataSource = [
    { Browser: 'Chrome', Share: 48.13, Growth: 2 },
    { Browser: 'Safari', Share: 32.21, Growth: 2.6 },
    { Browser: 'Edge', Share: 7.79, Growth: 2.4 },
    { Browser: 'Samsung Internet', Share: 4.02, Growth: 1.7 },
    { Browser: 'Firefox', Share: 3.74, Growth: 1 },
    { Browser: 'Other', Share: 3.71, Growth: 1.4 }
  ];

  autoRotate = false;

  caption = 'Desktop browsers share'

  description = 'Growth is represtented vertically';

  showLegend = true;

  legendLayout = {
    flow: 'vertical',
    left: 30
  };

  colorScheme = 'scheme31';

  cameraPosition = {
    y: 15,
    z: 20,
  };

  seriesGroups = [
    {
      type: 'pie',
      showLabels: true,
      series: [
        {
          dataField: 'Share',
          displayText: 'Browser',
          variableHeight: true,
          variableHeightField: 'Growth',
          initialAngle: -60,
          radius: 14,
          labelRadius: 16,
          centerOffset: 0,
          height: 1
        },
      ],
      formatFunction: function (value: any) {
        if (isNaN(value)) {
          // Legend labels formatting
          return value;
        }

        return parseFloat(value) + '%';
      },
    },
  ];

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