import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ChartComponent } from '@smart-webcomponents-angular/chart';

import { ChartModule } from '@smart-webcomponents-angular/chart';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  ChartModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('chart', { read: ChartComponent, static: false }) chart!: ChartComponent;

    sampleData = [
        { Day: 'Monday', Running: 30, Swimming: 5, Cycling: 25, Riding: 10 },
        { Day: 'Tuesday', Running: 25, Swimming: 25, Cycling: 0, Riding: 15 },
        { Day: 'Wednesday', Running: 30, Swimming: 5, Cycling: 25, Riding: 25 },
        { Day: 'Thursday', Running: 35, Swimming: 25, Cycling: 45, Riding: 15 },
        { Day: 'Friday', Running: 5, Swimming: 20, Cycling: 25, Riding: 5 },
        { Day: 'Saturday', Running: 30, Swimming: 0, Cycling: 30, Riding: 30 },
        { Day: 'Sunday', Running: 60, Swimming: 45, Cycling: 5, Riding: 20 }
    ];
    caption = 'Fitness & exercise weekly scorecard';
    description = 'Time spent in vigorous exercise by activity';
    showLegend = true;
    padding = { left: 5, top: 5, right: 5, bottom: 5 };
    titlePadding = { left: 90, top: 0, right: 0, bottom: 10 };
    dataSource = this.sampleData;
    colorScheme = 'scheme29';
    xAxis = {
        dataField: 'Day',
        unitInterval: 1,
        tickMarks: {
            visible: true,
            unitInterval: 1,
            color: '#888888'
        },
        gridLines: {
            visible: false,
            unitInterval: 1,
            color: '#888888'
        }
    };
    valueAxis = {
        unitInterval: 10,
        minValue: 0,
        maxValue: 120,
        visible: true,
        title: { text: 'Time in minutes<br>' },
        tickMarks: { color: '#888888' },
        gridLines: { color: '#888888' }
    };
    seriesGroups = [
        {
            type: 'stackedcolumn',
            columnsGapPercent: 50,
            seriesGapPercent: 5,
            series: [
                { dataField: 'Running', displayText: 'Running' },
                { dataField: 'Swimming', displayText: 'Swimming' }
            ]
        },
        {
            type: 'stackedcolumn',
            columnsGapPercent: 50,
            seriesGapPercent: 5,
            series: [
                { dataField: 'Riding', displayText: 'Riding' },
                { dataField: 'Cycling', displayText: 'Cycling' }
            ]
        }
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