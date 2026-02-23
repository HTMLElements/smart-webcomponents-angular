import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Smart } from '@smart-webcomponents-angular/grid';
import { GridComponent } from '@smart-webcomponents-angular/grid';
import { GridModule } from '@smart-webcomponents-angular/grid';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [GridModule],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None 
})
export class AppComponent implements AfterViewInit {
    @ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;


  sorting = {
    enabled: true,
    mode: 'many'
  };

  filtering = {
    enabled: true
  };

  appearance = {
    showColumnIcon: true,
    showFilterColumnBackground: true,
    showSortColumnBackground: true
  };

  columns = [
    {
      label: 'Category',
      dataField: 'Category',
      filterMenuMode: 'set',
      filter: ['Venue', 'Catering', 'Decorations']
    },
    { label: 'Estimated Cost', dataField: 'Estimated Cost', dataType: 'number' },
    { label: 'Actual Cost', dataField: 'Actual Cost', dataType: 'number' },
    { label: 'Paid', dataField: 'Paid', dataType: 'boolean', template: 'checkBox' },
    { label: 'Vendor', dataField: 'Vendor' },
    { label: 'Payment Due', dataField: 'Payment Due', dataType: 'date' }
  ];

  dataSource = [
    { "Category": "Venue", "Estimated Cost": 5000, "Actual Cost": 10, "Paid": false, "Vendor": "Grand Hall", "Payment Due": "2025-08-15" },
    { "Category": "Catering", "Estimated Cost": 2000, "Actual Cost": 20, "Paid": false, "Vendor": "Fine Foods Ltd", "Payment Due": "2025-08-20" },
    { "Category": "Decorations", "Estimated Cost": 800, "Actual Cost": 30, "Paid": true, "Vendor": "Party Décor Co.", "Payment Due": "2025-08-30" },
    { "Category": "AV equipment", "Estimated Cost": 1200, "Actual Cost": 50, "Paid": false, "Vendor": "Sound & Light Inc.", "Payment Due": "2025-08-25" },
    { "Category": "Marketing", "Estimated Cost": 1500, "Actual Cost": 0, "Paid": false, "Vendor": "Ad Agency", "Payment Due": "2025-08-10" },
    { "Category": "Catering", "Estimated Cost": 2500, "Actual Cost": 0, "Paid": false, "Vendor": "Gourmet Catering", "Payment Due": "2025-08-22" },
    { "Category": "Venue", "Estimated Cost": 6000, "Actual Cost": 0, "Paid": false, "Vendor": "City Conference Center", "Payment Due": "2025-08-18" },
    { "Category": "Staffing", "Estimated Cost": 3000, "Actual Cost": 0, "Paid": true, "Vendor": "Event Staffers", "Payment Due": "2025-08-28" },
    { "Category": "Logistics", "Estimated Cost": 1800, "Actual Cost": 10, "Paid": false, "Vendor": "LogiTrans", "Payment Due": "2025-08-27" },
    { "Category": "Entertainment", "Estimated Cost": 2200, "Actual Cost": 10, "Paid": false, "Vendor": "Live Band Co.", "Payment Due": "2025-08-29" },
    { "Category": "Marketing", "Estimated Cost": 1300, "Actual Cost": 20, "Paid": true, "Vendor": "Social Media Experts", "Payment Due": "2025-08-12" },
    { "Category": "Decorations", "Estimated Cost": 900, "Actual Cost": 0, "Paid": false, "Vendor": "Floral Designs", "Payment Due": "2025-08-31" },
    { "Category": "AV equipment", "Estimated Cost": 1100, "Actual Cost": 0, "Paid": true, "Vendor": "Tech Rentals", "Payment Due": "2025-08-26" },
    { "Category": "Staffing", "Estimated Cost": 2800, "Actual Cost": 30, "Paid": false, "Vendor": "Temp Workers Inc.", "Payment Due": "2025-08-29" },
    { "Category": "Logistics", "Estimated Cost": 1600, "Actual Cost": 70, "Paid": true, "Vendor": "Fast Move Logistics", "Payment Due": "2025-08-24" },
    { "Category": "Entertainment", "Estimated Cost": 2400, "Actual Cost": 60, "Paid": false, "Vendor": "DJ Services", "Payment Due": "2025-08-30" },
    { "Category": "Venue", "Estimated Cost": 5500, "Actual Cost": 0, "Paid": false, "Vendor": "Downtown Event Space", "Payment Due": "2025-08-17" },
    { "Category": "Catering", "Estimated Cost": 2300, "Actual Cost": 0, "Paid": true, "Vendor": "Delicious Bites", "Payment Due": "2025-08-21" },
    { "Category": "Marketing", "Estimated Cost": 1400, "Actual Cost": 0, "Paid": false, "Vendor": "Creative Ads", "Payment Due": "2025-08-11" },
    { "Category": "Decorations", "Estimated Cost": 850, "Actual Cost": 0, "Paid": false, "Vendor": "Event Stylists", "Payment Due": "2025-08-29" },
    { "Category": "AV equipment", "Estimated Cost": 1150, "Actual Cost": 0, "Paid": false, "Vendor": "AudioVisual Pros", "Payment Due": "2025-08-23" },
    { "Category": "Staffing", "Estimated Cost": 2900, "Actual Cost": 0, "Paid": false, "Vendor": "Event Helpers", "Payment Due": "2025-08-27" },
    { "Category": "Logistics", "Estimated Cost": 1700, "Actual Cost": 0, "Paid": false, "Vendor": "MoveIt Logistics", "Payment Due": "2025-08-26" },
    { "Category": "Entertainment", "Estimated Cost": 2100, "Actual Cost": 0, "Paid": true, "Vendor": "Fun Times Entertainment", "Payment Due": "2025-08-28" },
    { "Category": "Venue", "Estimated Cost": 5200, "Actual Cost": 0, "Paid": true, "Vendor": "Uptown Banquet Hall", "Payment Due": "2025-08-16" },
    { "Category": "Catering", "Estimated Cost": 2400, "Actual Cost": 0, "Paid": false, "Vendor": "Tasty Treats Catering", "Payment Due": "2025-08-23" },
    { "Category": "Marketing", "Estimated Cost": 1350, "Actual Cost": 0, "Paid": false, "Vendor": "Ad Creators", "Payment Due": "2025-08-13" },
    { "Category": "Decorations", "Estimated Cost": 870, "Actual Cost": 0, "Paid": true, "Vendor": "Party Planners", "Payment Due": "2025-08-30" },
    { "Category": "AV equipment", "Estimated Cost": 1180, "Actual Cost": 0, "Paid": false, "Vendor": "Event Tech Solutions", "Payment Due": "2025-08-24" },
    { "Category": "Staffing", "Estimated Cost": 3100, "Actual Cost": 0, "Paid": false, "Vendor": "Staffing Solutions", "Payment Due": "2025-08-28" },
    { "Category": "Logistics", "Estimated Cost": 1750, "Actual Cost": 0, "Paid": false, "Vendor": "Quick Move Logistics", "Payment Due": "2025-08-25" },
    { "Category": "Entertainment", "Estimated Cost": 2250, "Actual Cost": 0, "Paid": false, "Vendor": "Entertainment Experts", "Payment Due": "2025-08-29" }
  ];

  dataSourceSettings = {
    dataFields: [
      { name: "Category", dataType: "string" },
      { name: "Estimated Cost", dataType: "number" },
      { name: "Actual Cost", dataType: "number" },
      { name: "Paid", dataType: "boolean" },
      { name: "Vendor", dataType: "string" },
      { name: "Payment Due", dataType: "date" }
    ]
  };

  ngAfterViewInit(): void {
    // No additional initialization required as all grid options are bound via Angular bindings.
  }
}