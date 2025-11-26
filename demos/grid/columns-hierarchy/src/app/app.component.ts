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
    {
      "City": "New York",
      "Air Quality": "Moderate",
      "Air Quality Metrics": { "PM2.5": 22, "PM10": 40, "NO2": 18, "O3": 30 },
      "Weather": "Cloudy",
      "Date Measured": "2025-11-14",
      "Certified": true,
      "AQI": 72,
      "Main Pollutant": "PM2.5",
      "Temperature": 22
    },
    {
      "City": "Los Angeles",
      "Air Quality": "Unhealthy",
      "Air Quality Metrics": { "PM2.5": 70, "PM10": 90, "NO2": 42, "O3": 65 },
      "Weather": "Sunny",
      "Date Measured": "2025-11-14",
      "Certified": false,
      "AQI": 132,
      "Main Pollutant": "PM10",
      "Temperature": 29
    },
    {
      "City": "Chicago",
      "Air Quality": "Good",
      "Air Quality Metrics": { "PM2.5": 14, "PM10": 22, "NO2": 10, "O3": 20 },
      "Weather": "Windy",
      "Date Measured": "2025-11-14",
      "Certified": true,
      "AQI": 45,
      "Main Pollutant": "PM2.5",
      "Temperature": 16
    },
    {
      "City": "Houston",
      "Air Quality": "Moderate",
      "Air Quality Metrics": { "PM2.5": 28, "PM10": 45, "NO2": 22, "O3": 33 },
      "Weather": "Humid",
      "Date Measured": "2025-11-14",
      "Certified": false,
      "AQI": 78,
      "Main Pollutant": "PM2.5",
      "Temperature": 27
    },
    {
      "City": "Phoenix",
      "Air Quality": "Unhealthy for Sensitive Groups",
      "Air Quality Metrics": { "PM2.5": 48, "PM10": 65, "NO2": 25, "O3": 55 },
      "Weather": "Hot",
      "Date Measured": "2025-11-14",
      "Certified": true,
      "AQI": 102,
      "Main Pollutant": "PM2.5",
      "Temperature": 34
    },
    {
      "City": "Philadelphia",
      "Air Quality": "Moderate",
      "Air Quality Metrics": { "PM2.5": 20, "PM10": 38, "NO2": 19, "O3": 27 },
      "Weather": "Cloudy",
      "Date Measured": "2025-11-14",
      "Certified": true,
      "AQI": 68,
      "Main Pollutant": "PM2.5",
      "Temperature": 20
    },
    {
      "City": "San Antonio",
      "Air Quality": "Good",
      "Air Quality Metrics": { "PM2.5": 11, "PM10": 18, "NO2": 9, "O3": 15 },
      "Weather": "Clear",
      "Date Measured": "2025-11-14",
      "Certified": false,
      "AQI": 40,
      "Main Pollutant": "PM10",
      "Temperature": 26
    },
    {
      "City": "San Diego",
      "Air Quality": "Good",
      "Air Quality Metrics": { "PM2.5": 9, "PM10": 15, "NO2": 8, "O3": 13 },
      "Weather": "Sunny",
      "Date Measured": "2025-11-14",
      "Certified": true,
      "AQI": 35,
      "Main Pollutant": "PM2.5",
      "Temperature": 24
    },
    {
      "City": "Dallas",
      "Air Quality": "Moderate",
      "Air Quality Metrics": { "PM2.5": 26, "PM10": 44, "NO2": 21, "O3": 32 },
      "Weather": "Clear",
      "Date Measured": "2025-11-14",
      "Certified": false,
      "AQI": 74,
      "Main Pollutant": "PM2.5",
      "Temperature": 28
    },
    {
      "City": "San Jose",
      "Air Quality": "Good",
      "Air Quality Metrics": { "PM2.5": 12, "PM10": 20, "NO2": 11, "O3": 19 },
      "Weather": "Partly Cloudy",
      "Date Measured": "2025-11-14",
      "Certified": true,
      "AQI": 42,
      "Main Pollutant": "PM2.5",
      "Temperature": 21
    },
    {
      "City": "Austin",
      "Air Quality": "Moderate",
      "Air Quality Metrics": { "PM2.5": 23, "PM10": 41, "NO2": 16, "O3": 28 },
      "Weather": "Sunny",
      "Date Measured": "2025-11-14",
      "Certified": false,
      "AQI": 70,
      "Main Pollutant": "PM2.5",
      "Temperature": 30
    },
    {
      "City": "Jacksonville",
      "Air Quality": "Good",
      "Air Quality Metrics": { "PM2.5": 10, "PM10": 18, "NO2": 9, "O3": 16 },
      "Weather": "Rainy",
      "Date Measured": "2025-11-14",
      "Certified": true,
      "AQI": 39,
      "Main Pollutant": "PM10",
      "Temperature": 23
    },
    {
      "City": "Fort Worth",
      "Air Quality": "Moderate",
      "Air Quality Metrics": { "PM2.5": 27, "PM10": 42, "NO2": 20, "O3": 30 },
      "Weather": "Clear",
      "Date Measured": "2025-11-14",
      "Certified": true,
      "AQI": 75,
      "Main Pollutant": "PM2.5",
      "Temperature": 26
    },
    {
      "City": "Columbus",
      "Air Quality": "Good",
      "Air Quality Metrics": { "PM2.5": 13, "PM10": 21, "NO2": 12, "O3": 17 },
      "Weather": "Cloudy",
      "Date Measured": "2025-11-14",
      "Certified": false,
      "AQI": 43,
      "Main Pollutant": "PM10",
      "Temperature": 15
    },
    {
      "City": "Charlotte",
      "Air Quality": "Moderate",
      "Air Quality Metrics": { "PM2.5": 24, "PM10": 39, "NO2": 17, "O3": 29 },
      "Weather": "Humid",
      "Date Measured": "2025-11-14",
      "Certified": false,
      "AQI": 72,
      "Main Pollutant": "PM2.5",
      "Temperature": 25
    },
    {
      "City": "San Francisco",
      "Air Quality": "Good",
      "Air Quality Metrics": { "PM2.5": 9, "PM10": 14, "NO2": 10, "O3": 18 },
      "Weather": "Foggy",
      "Date Measured": "2025-11-14",
      "Certified": true,
      "AQI": 34,
      "Main Pollutant": "PM2.5",
      "Temperature": 17
    },
    {
      "City": "Indianapolis",
      "Air Quality": "Moderate",
      "Air Quality Metrics": { "PM2.5": 29, "PM10": 48, "NO2": 23, "O3": 31 },
      "Weather": "Cloudy",
      "Date Measured": "2025-11-14",
      "Certified": true,
      "AQI": 80,
      "Main Pollutant": "PM2.5",
      "Temperature": 18
    },
    {
      "City": "Seattle",
      "Air Quality": "Good",
      "Air Quality Metrics": { "PM2.5": 8, "PM10": 13, "NO2": 6, "O3": 14 },
      "Weather": "Rainy",
      "Date Measured": "2025-11-14",
      "Certified": false,
      "AQI": 30,
      "Main Pollutant": "PM10",
      "Temperature": 12
    },
    {
      "City": "Denver",
      "Air Quality": "Moderate",
      "Air Quality Metrics": { "PM2.5": 25, "PM10": 40, "NO2": 18, "O3": 27 },
      "Weather": "Clear",
      "Date Measured": "2025-11-14",
      "Certified": true,
      "AQI": 72,
      "Main Pollutant": "PM2.5",
      "Temperature": 19
    },
    {
      "City": "Washington",
      "Air Quality": "Moderate",
      "Air Quality Metrics": { "PM2.5": 21, "PM10": 36, "NO2": 20, "O3": 26 },
      "Weather": "Cloudy",
      "Date Measured": "2025-11-14",
      "Certified": false,
      "AQI": 68,
      "Main Pollutant": "PM2.5",
      "Temperature": 18
    },
    {
      "City": "Boston",
      "Air Quality": "Good",
      "Air Quality Metrics": { "PM2.5": 11, "PM10": 19, "NO2": 10, "O3": 14 },
      "Weather": "Cold",
      "Date Measured": "2025-11-14",
      "Certified": true,
      "AQI": 40,
      "Main Pollutant": "PM10",
      "Temperature": 8
    },
    {
      "City": "El Paso",
      "Air Quality": "Moderate",
      "Air Quality Metrics": { "PM2.5": 30, "PM10": 55, "NO2": 19, "O3": 36 },
      "Weather": "Dry",
      "Date Measured": "2025-11-14",
      "Certified": false,
      "AQI": 85,
      "Main Pollutant": "PM10",
      "Temperature": 31
    },
    {
      "City": "Nashville",
      "Air Quality": "Good",
      "Air Quality Metrics": { "PM2.5": 12, "PM10": 20, "NO2": 11, "O3": 17 },
      "Weather": "Humid",
      "Date Measured": "2025-11-14",
      "Certified": true,
      "AQI": 41,
      "Main Pollutant": "PM10",
      "Temperature": 24
    },
    {
      "City": "Detroit",
      "Air Quality": "Moderate",
      "Air Quality Metrics": { "PM2.5": 26, "PM10": 43, "NO2": 22, "O3": 28 },
      "Weather": "Cloudy",
      "Date Measured": "2025-11-14",
      "Certified": false,
      "AQI": 75,
      "Main Pollutant": "PM2.5",
      "Temperature": 14
    },
    {
      "City": "Oklahoma City",
      "Air Quality": "Moderate",
      "Air Quality Metrics": { "PM2.5": 31, "PM10": 46, "NO2": 24, "O3": 34 },
      "Weather": "Clear",
      "Date Measured": "2025-11-14",
      "Certified": false,
      "AQI": 87,
      "Main Pollutant": "PM2.5",
      "Temperature": 28
    },
    {
      "City": "Portland",
      "Air Quality": "Good",
      "Air Quality Metrics": { "PM2.5": 10, "PM10": 17, "NO2": 7, "O3": 13 },
      "Weather": "Rainy",
      "Date Measured": "2025-11-14",
      "Certified": true,
      "AQI": 37,
      "Main Pollutant": "PM10",
      "Temperature": 13
    },
    {
      "City": "Las Vegas",
      "Air Quality": "Unhealthy for Sensitive Groups",
      "Air Quality Metrics": { "PM2.5": 52, "PM10": 70, "NO2": 29, "O3": 50 },
      "Weather": "Hot",
      "Date Measured": "2025-11-14",
      "Certified": true,
      "AQI": 110,
      "Main Pollutant": "PM2.5",
      "Temperature": 37
    },
    {
      "City": "Memphis",
      "Air Quality": "Moderate",
      "Air Quality Metrics": { "PM2.5": 27, "PM10": 42, "NO2": 19, "O3": 33 },
      "Weather": "Humid",
      "Date Measured": "2025-11-14",
      "Certified": false,
      "AQI": 74,
      "Main Pollutant": "PM2.5",
      "Temperature": 27
    },
    {
      "City": "Louisville",
      "Air Quality": "Moderate",
      "Air Quality Metrics": { "PM2.5": 24, "PM10": 37, "NO2": 21, "O3": 25 },
      "Weather": "Cloudy",
      "Date Measured": "2025-11-14",
      "Certified": false,
      "AQI": 71,
      "Main Pollutant": "PM2.5",
      "Temperature": 22
    },
    {
      "City": "Baltimore",
      "Air Quality": "Moderate",
      "Air Quality Metrics": { "PM2.5": 29, "PM10": 41, "NO2": 22, "O3": 30 },
      "Weather": "Cloudy",
      "Date Measured": "2025-11-14",
      "Certified": true,
      "AQI": 79,
      "Main Pollutant": "PM2.5",
      "Temperature": 20
    },
    {
      "City": "Milwaukee",
      "Air Quality": "Good",
      "Air Quality Metrics": { "PM2.5": 9, "PM10": 16, "NO2": 6, "O3": 12 },
      "Weather": "Snow",
      "Date Measured": "2025-11-14",
      "Certified": false,
      "AQI": 33,
      "Main Pollutant": "PM10",
      "Temperature": -2
    },
    {
      "City": "Albuquerque",
      "Air Quality": "Moderate",
      "Air Quality Metrics": { "PM2.5": 34, "PM10": 52, "NO2": 18, "O3": 28 },
      "Weather": "Dry",
      "Date Measured": "2025-11-14",
      "Certified": true,
      "AQI": 95,
      "Main Pollutant": "PM2.5",
      "Temperature": 26
    },
    {
      "City": "Tucson",
      "Air Quality": "Moderate",
      "Air Quality Metrics": { "PM2.5": 33, "PM10": 50, "NO2": 17, "O3": 29 },
      "Weather": "Hot",
      "Date Measured": "2025-11-14",
      "Certified": false,
      "AQI": 92,
      "Main Pollutant": "PM2.5",
      "Temperature": 35
    },
    {
      "City": "Fresno",
      "Air Quality": "Unhealthy",
      "Air Quality Metrics": { "PM2.5": 80, "PM10": 105, "NO2": 45, "O3": 75 },
      "Weather": "Dry",
      "Date Measured": "2025-11-14",
      "Certified": true,
      "AQI": 165,
      "Main Pollutant": "PM2.5",
      "Temperature": 32
    },
    {
      "City": "Sacramento",
      "Air Quality": "Moderate",
      "Air Quality Metrics": { "PM2.5": 28, "PM10": 44, "NO2": 20, "O3": 30 },
      "Weather": "Clear",
      "Date Measured": "2025-11-14",
      "Certified": true,
      "AQI": 77,
      "Main Pollutant": "PM2.5",
      "Temperature": 24
    },
    {
      "City": "Kansas City",
      "Air Quality": "Good",
      "Air Quality Metrics": { "PM2.5": 13, "PM10": 22, "NO2": 10, "O3": 16 },
      "Weather": "Windy",
      "Date Measured": "2025-11-14",
      "Certified": false,
      "AQI": 42,
      "Main Pollutant": "PM10",
      "Temperature": 14
    },
    {
      "City": "Atlanta",
      "Air Quality": "Moderate",
      "Air Quality Metrics": { "PM2.5": 25, "PM10": 41, "NO2": 19, "O3": 27 },
      "Weather": "Humid",
      "Date Measured": "2025-11-14",
      "Certified": true,
      "AQI": 72,
      "Main Pollutant": "PM2.5",
      "Temperature": 27
    },
    {
      "City": "Miami",
      "Air Quality": "Good",
      "Air Quality Metrics": { "PM2.5": 8, "PM10": 12, "NO2": 7, "O3": 11 },
      "Weather": "Sunny",
      "Date Measured": "2025-11-14",
      "Certified": true,
      "AQI": 28,
      "Main Pollutant": "PM10",
      "Temperature": 30
    },
    {
      "City": "Raleigh",
      "Air Quality": "Good",
      "Air Quality Metrics": { "PM2.5": 11, "PM10": 18, "NO2": 9, "O3": 14 },
      "Weather": "Clear",
      "Date Measured": "2025-11-14",
      "Certified": false,
      "AQI": 38,
      "Main Pollutant": "PM10",
      "Temperature": 19
    },
    {
      "City": "Cincinnati",
      "Air Quality": "Moderate",
      "Air Quality Metrics": { "PM2.5": 26, "PM10": 39, "NO2": 22, "O3": 31 },
      "Weather": "Cloudy",
      "Date Measured": "2025-11-14",
      "Certified": false,
      "AQI": 74,
      "Main Pollutant": "PM2.5",
      "Temperature": 17
    },
    {
      "City": "Orlando",
      "Air Quality": "Good",
      "Air Quality Metrics": { "PM2.5": 10, "PM10": 17, "NO2": 8, "O3": 13 },
      "Weather": "Sunny",
      "Date Measured": "2025-11-14",
      "Certified": true,
      "AQI": 36,
      "Main Pollutant": "PM10",
      "Temperature": 29
    },
    {
      "City": "Pittsburgh",
      "Air Quality": "Moderate",
      "Air Quality Metrics": { "PM2.5": 28, "PM10": 43, "NO2": 24, "O3": 29 },
      "Weather": "Cloudy",
      "Date Measured": "2025-11-14",
      "Certified": true,
      "AQI": 76,
      "Main Pollutant": "PM2.5",
      "Temperature": 13
    },
    {
      "City": "Richmond",
      "Air Quality": "Good",
      "Air Quality Metrics": { "PM2.5": 9, "PM10": 14, "NO2": 8, "O3": 13 },
      "Weather": "Partly Cloudy",
      "Date Measured": "2025-11-14",
      "Certified": false,
      "AQI": 31,
      "Main Pollutant": "PM10",
      "Temperature": 18
    },
    {
      "City": "Cleveland",
      "Air Quality": "Moderate",
      "Air Quality Metrics": { "PM2.5": 30, "PM10": 45, "NO2": 23, "O3": 30 },
      "Weather": "Snow",
      "Date Measured": "2025-11-14",
      "Certified": false,
      "AQI": 85,
      "Main Pollutant": "PM2.5",
      "Temperature": -1
    },
    {
      "City": "Minneapolis",
      "Air Quality": "Good",
      "Air Quality Metrics": { "PM2.5": 12, "PM10": 19, "NO2": 10, "O3": 15 },
      "Weather": "Cold",
      "Date Measured": "2025-11-14",
      "Certified": true,
      "AQI": 39,
      "Main Pollutant": "PM10",
      "Temperature": -3
    }
  ];

  dataSourceSettings = {
    mapChar: '>',
    dataFields: [
      { name: 'City', dataType: 'string' },
      { name: 'Air Quality', dataType: 'string' },
      { name: 'Air Quality Metrics.PM2.5', map: 'Air Quality Metrics>PM2.5', dataType: 'number' },
      { name: 'Air Quality Metrics.PM10', map: 'Air Quality Metrics>PM10', dataType: 'number' },
      { name: 'Air Quality Metrics.NO2', map: 'Air Quality Metrics>NO2', dataType: 'number' },
      { name: 'Air Quality Metrics.O3', map: 'Air Quality Metrics>O3', dataType: 'number' },
      { name: 'Weather', dataType: 'string' },
      { name: 'Date Measured', dataType: 'date' },
      { name: 'Certified', dataType: 'boolean' },
      { name: 'AQI', dataType: 'number' },
      { name: 'Main Pollutant', dataType: 'string' },
      { name: 'Temperature', dataType: 'number' }
    ]
  };

  layout = {
    rowHeight: 60
  };

  columnGroups = [
    { label: 'City Information', parentGroup: 'details', name: 'City Info', align: 'center', collapsible: true },
    { label: 'Air Quality Metrics', parentGroup: 'details', name: 'Air Quality Metrics', collapsible: true, align: 'center' },
    { label: 'Measurement Details', name: 'Measurement Details', collapsible: true, align: 'center' },
    { label: 'City Air Quality Details', name: 'details', align: 'center', collapsible: true }
  ];

  columns = [
    {
      label: 'City',
      dataField: 'City',
      columnGroup: 'City Info',
      cellsRenderer: (row: number, column: any, value: string) => {
        const cityMap: Record<string, string> = {
          'New York': '🗽',
          'Los Angeles': '🌴',
          'Chicago': '🌆',
          'Houston': '🚀',
          'Phoenix': '🌵',
          'Philadelphia': '🏛️',
          'San Antonio': '🤠',
          'San Diego': '🏖️',
          'Dallas': '🤠',
          'San Jose': '💻',
          'Austin': '🎸',
          'Jacksonville': '🏖️',
          'Fort Worth': '🤠',
          'Columbus': '🏛️',
          'Charlotte': '🏀',
          'San Francisco': '🌉',
          'Indianapolis': '🏎️',
          'Seattle': '☔',
          'Denver': '🏔️',
          'Washington': '🏛️',
          'Boston': '⚓',
          'El Paso': '🌵',
          'Nashville': '🎸'
        };
        return `${cityMap[value] || ''} ${value}`;
      }
    },
    {
      label: 'AQI',
      dataField: 'AQI',
      width: 120,
      columnGroup: 'City Info',
      cellsRenderer: (row: number, column: any, value: number) => {
        let color = '#2ECC40';

        if (value > 50 && value <= 100) color = '#FFDC00';
        else if (value > 100 && value <= 150) color = '#FF851B';
        else if (value > 150 && value <= 200) color = '#FF4136';
        else if (value > 200) color = '#B10DC9';

        return `<span style="background-color: ${color}; color: white; padding: 5px; display: inline-flex; align-items: center; justify-content: center; border-radius: 15px;">${value}</span>`;
      }
    },
    {
      label: 'Main Pollutant',
      dataField: 'Main Pollutant',
      width: 150,
      columnGroup: 'City Info',
      cellsRenderer: (row: number, column: any, value: string) => {
        const pollutantMap: Record<string, string> = {
          'PM2.5': '🌫️',
          'PM10': '🌫️',
          'NO2': '🏭',
          'O3': '☁️'
        };
        const colors: Record<string, string> = {
          'PM2.5': '#FF5733',
          'PM10': '#33C1FF',
          'NO2': '#33FF57',
          'O3': '#FF33A8'
        };
        return ` ${pollutantMap[value] || ''} <span style="color: ${colors[value] || 'black'}">${value}</span>`;
      }
    },
    {
      label: 'Air Quality',
      dataField: 'Air Quality',
      columnGroup: 'City Info',
      cellsRenderer: (row: number, column: any, value: string) => {
        let color = '#2ECC40';
        if (value === 'Moderate') color = '#FFDC00';
        else if (value === 'Unhealthy for Sensitive Groups') color = '#FF851B';
        else if (value === 'Unhealthy') color = '#FF4136';
        else if (value === 'Very Unhealthy') color = '#B10DC9';

        const iconMap: Record<string, string> = {
          'Good': '😊',
          'Moderate': '😐',
          'Unhealthy for Sensitive Groups': '😷',
          'Unhealthy': '🤒',
          'Very Unhealthy': '🤢'
        };
        return `${iconMap[value] || ''} ${value}`;
      }
    },
    {
      label: 'PM2.5 (µg/m³)',
      dataField: 'Air Quality Metrics.PM2.5',
      columnGroup: 'Air Quality Metrics',
      width: 150,
      template: 'sparklines',
      templateSettings: {
        type: 'bar',
        padding: 10,
        roundedCorners: true,
        min: 0,
        max: 100,
        tooltipFormatFunction: (value: number) => `PM2.5: ${value} µg/m³`,
        colorFunction: (value: number) => {
          if (value <= 12) {
            return '#2ECC40'; // Good - Green
          } else if (value <= 35.4) {
            return '#FFDC00'; // Moderate - Yellow
          } else if (value <= 55.4) {
            return '#FF851B'; // Unhealthy for Sensitive Groups - Orange
          } else if (value <= 150.4) {
            return '#FF4136'; // Unhealthy - Red
          } else if (value <= 250.4) {
            return '#B10DC9'; // Very Unhealthy - Purple
          } else {
            return '#85144b'; // Hazardous - Maroon
          }
        }
      }
    },
    {
      label: 'PM10 (µg/m³)',
      dataField: 'Air Quality Metrics.PM10',
      width: 150,
      columnGroup: 'Air Quality Metrics',
      template: 'sparklines',
      templateSettings: {
        type: 'bar',
        padding: 10,
        roundedCorners: true,
        min: 0,
        max: 100,
        tooltipFormatFunction: (value: number) => `PM10: ${value} µg/m³`,
        colorFunction: (value: number) => {
          if (value <= 12) {
            return '#2ECC40'; // Good - Green
          } else if (value <= 35.4) {
            return '#FFDC00'; // Moderate - Yellow
          } else if (value <= 55.4) {
            return '#FF851B'; // Unhealthy for Sensitive Groups - Orange
          } else if (value <= 150.4) {
            return '#FF4136'; // Unhealthy - Red
          } else if (value <= 250.4) {
            return '#B10DC9'; // Very Unhealthy - Purple
          } else {
            return '#85144b'; // Hazardous - Maroon
          }
        }
      }
    },
    {
      label: 'NO2 (µg/m³)',
      dataField: 'Air Quality Metrics.NO2',
      columnGroup: 'Air Quality Metrics',
      width: 150,
      template: 'sparklines',
      templateSettings: {
        type: 'bar',
        padding: 10,
        roundedCorners: true,
        min: 0,
        max: 100,
        tooltipFormatFunction: (value: number) => `NO2: ${value} µg/m³`,
        colorFunction: (value: number) => {
          if (value <= 12) {
            return '#2ECC40'; // Good - Green
          } else if (value <= 35.4) {
            return '#FFDC00'; // Moderate - Yellow
          } else if (value <= 55.4) {
            return '#FF851B'; // Unhealthy for Sensitive Groups - Orange
          } else if (value <= 150.4) {
            return '#FF4136'; // Unhealthy - Red
          } else if (value <= 250.4) {
            return '#B10DC9'; // Very Unhealthy - Purple
          } else {
            return '#85144b'; // Hazardous - Maroon
          }
        }
      }
    },
    {
      label: 'O3 (µg/m³)',
      dataField: 'Air Quality Metrics.O3',
      columnGroup: 'Air Quality Metrics',
      width: 150,
      template: 'sparklines',
      templateSettings: {
        type: 'bar',
        padding: 10,
        roundedCorners: true,
        min: 0,
        max: 100,
        tooltipFormatFunction: (value: number) => `O3: ${value} µg/m³`,
        colorFunction: (value: number) => {
          if (value <= 12) {
            return '#2ECC40'; // Good - Green
          } else if (value <= 35.4) {
            return '#FFDC00'; // Moderate - Yellow
          } else if (value <= 55.4) {
            return '#FF851B'; // Unhealthy for Sensitive Groups - Orange
          } else if (value <= 150.4) {
            return '#FF4136'; // Unhealthy - Red
          } else if (value <= 250.4) {
            return '#B10DC9'; // Very Unhealthy - Purple
          } else {
            return '#85144b'; // Hazardous - Maroon
          }
        }
      }
    },
    {
      label: 'Weather',
      dataField: 'Weather',
      columnGroup: 'Measurement Details',
      width: 150,
      cellsRenderer: (row: number, column: any, value: string) => {
        const weatherIcons: Record<string, string> = {
          'Sunny': '☀️',
          'Cloudy': '☁️',
          'Rainy': '🌧️',
          'Windy': '🌬️',
          'Humid': '💧',
          'Hot': '🔥',
          'Cold': '❄️',
          'Foggy': '🌫️',
          'Clear': '🌟',
          'Partly Cloudy': '⛅',
          'Snow': '🌨️',
          'Dry': '🏜️'
        };
        const icon = weatherIcons[value] || '🌈';
        return `<span style="font-size: 24px;">${icon}</span> ${value}`;
      }
    },
    {
      label: 'Temperature (°C)',
      dataField: 'Temperature',
      width: 150,
      columnGroup: 'Measurement Details',
      cellsRenderer: (row: number, column: any, value: number) => {
        const temperatureIcons = value >= 30 ? '🔥' : value <= 10 ? '❄️' : '🌤️';
        return `<span style="font-size: 24px;">${temperatureIcons}</span> ${value}°C`;
      }
    },
    {
      label: 'Date Measured',
      dataField: 'Date Measured',
      columnGroup: 'Measurement Details'
    },
    {
      label: 'Certified',
      dataField: 'Certified',
      template: 'checkBox',
      width: 150,
      columnGroup: 'Measurement Details'
    }
  ];

  ngAfterViewInit(): void {
    // No additional initialization needed as all config is done via bindings
  }
}