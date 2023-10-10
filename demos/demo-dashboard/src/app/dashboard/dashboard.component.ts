import { AfterViewInit, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Locale } from '../interfaces/Locale';
import { LocaleEmitterValue, LocalizationService } from '../services/localization.service';
import { EmployeeService } from '../services/employee.service';

import { ButtonGroupModule } from 'smart-webcomponents-angular/buttongroup';
import { ChartComponent, ChartModule } from 'smart-webcomponents-angular/chart';
import { DateRangeInputComponent, DateRangeInputModule } from 'smart-webcomponents-angular/daterangeinput';
import { TeamsEfficinecy } from '../interfaces/TeamEfficiency';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [RouterModule, ButtonGroupModule, DateRangeInputModule, ChartModule]
})
export class DashboardComponent implements AfterViewInit {
  @ViewChild('daterangeinput', { read: DateRangeInputComponent, static: false }) daterangeinput!: DateRangeInputComponent;
  @ViewChild('chart', { read: ChartComponent, static: false }) chart!: ChartComponent;

  teamEfficiencyString: string = 'Team Members';
  chartModes = [{ label: 'Trend', value: 'trend' }, { label: 'Volume', value: 'volume' }];

  teamsEfficiency: TeamsEfficinecy[];

  monthFormatter = new Intl.DateTimeFormat('en', { month: 'long' })

  dateRangeValue: {
    from: Date,
    to: Date
  };

  chartSettings = {
    seriesGroups: [
      {
        type: 'line',
        series: [
          { dataField: 'airTeam', displayText: 'Air Team' },
          { dataField: 'waterTeam', displayText: 'Water Team' },
          { dataField: 'fireTeam', displayText: 'Fire Team' },
          { dataField: 'spaceTeam', displayText: 'Space Team' }
        ]
      }
    ],
    colorScheme: 'scheme12',
    padding: { left: 10, top: 5, right: 10, bottom: 5 },
    toolTipFormatFunction: (value: any, itemIndex: number, serie: any, group: any, xAxisValue: any) => {
      return `<span style="text-transform: uppercase;">${this.monthFormatter.format(xAxisValue)}<span> ${xAxisValue.getFullYear()} <br/> <b>${value}</b>`;
    },
    valueAxis: {
      gridLines: {
        visible: true,
        color: '#EBEBEB'
      }
    },
    xAxis: {
      dataField: 'date',
      formatFunction: (value: Date) => {
        return this.monthFormatter.format(value) + ' ' + value.getFullYear();
      },
      type: 'date',
      baseUnit: 'month',
      minValue: new Date(),
      maxValue: new Date(),
      valuesOnTicks: true,
      unitInterval: 1,
      gridLines: {
        visible: true,
        color: '#EBEBEB'
      },
      labels: {
        angle: -45,
        rotationPoint: 'topright',
        offset: { x: -25, y: 0 }
      }
    }
  }

  locale: Locale;

  constructor(private localizationService: LocalizationService, private employeeService: EmployeeService) {
    localizationService.localeEmitter
      .subscribe((value: LocaleEmitterValue) => {
        this.monthFormatter = new Intl.DateTimeFormat(value.newLocale, { month: 'long' })
        this.applyLocalization(value.newLocale, value.prevLocale);
      })

    this.locale = this.localizationService.getLocale();
    this.monthFormatter = new Intl.DateTimeFormat(this.locale, { month: 'long' })

    this.applyLocalization(this.locale)

    this.teamsEfficiency = this.employeeService.getTeamsEfficinecy();

    const maxDate = this.teamsEfficiency.reduce((acc: Date, currentEff: TeamsEfficinecy) => {
      if (acc < new Date(currentEff.date)) {
        acc = new Date(currentEff.date)
      }

      return acc
    }, new Date());
    this.chartSettings.xAxis.maxValue = maxDate;

    const minDate = new Date(maxDate);
    minDate.setMonth(minDate.getMonth() - 6)
    this.chartSettings.xAxis.minValue = minDate;

    this.dateRangeValue = {
      from: minDate,
      to: maxDate
    };

  }

  ngAfterViewInit(): void {
    this.chart.toolTipFormatFunction = this.chartSettings.toolTipFormatFunction as any

    setTimeout(() => {
      this.daterangeinput.value = {
        from: this.chart.xAxis.minValue,
        to: this.chart.xAxis.maxValue,
      }
    }, 200)
  }

  handleChartModeChange(event: CustomEvent) {
    const value = event.detail.values[0];

    switch (value) {
      case 'trend':
        this.chart.seriesGroups[0].type = 'line';
        this.chart.xAxis.labels = {
          angle: -45,
          rotationPoint: 'topright',
          offset: { x: -25, y: 0 }
        }
        break;
      case 'volume':
        this.chart.seriesGroups[0].type = 'column';
        this.chart.xAxis.labels = { angle: 0, offset: { x: 0, y: 0 } }
        break;
    }
  }

  handleChartDateRangeChange(event: CustomEvent) {
    const { from, to } = event.detail.value;

    this.chart.xAxis.minValue = from;
    this.chart.xAxis.maxValue = to;
  }

  applyLocalization(newLocale: Locale, prevLocale?: Locale) {
    this.teamEfficiencyString = this.localizationService.getTeamEfficiencyString();
    this.chartModes = [
      { label: this.localizationService.getTrendString(), value: 'trend' },
      { label: this.localizationService.getVolumeString(), value: 'volume' }
    ]

    this.locale = this.localizationService.getLocale();

    window.Smart.Render()
  }
}
