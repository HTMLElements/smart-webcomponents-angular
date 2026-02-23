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


  // Data for the grid
  data: any[] = [
    ["User Authentication", "Andrew", "2026-07-15", "In Dev", "Must-have", "2026-07-10"],
    ["Beta Dashboard", "Michelle", "2026-08-01", "Planned", "Should-have", "2026-07-25"],
    ["Notifications", "Sofia", "2026-03-30", "Planned", "Nice-to-have", "2026-03-25"],
    ["Reporting Module", "Liam", "2026-02-10", "In Dev", "Must-have", "2026-02-05"],
    ["Data Export", "Emma", "2026-08-20", "Released", "Should-have", "2026-08-15"],
    ["Mobile App", "Andrew", "2026-10-05", "Planned", "Must-have", "2026-10-01"],
    ["API Integration", "Michelle", "2026-09-15", "In Dev", "Should-have", "2026-09-10"],
    ["User Profiles", "Sofia", "2026-07-25", "Released", "Nice-to-have", "2026-07-20"],
    ["Search Functionality", "Liam", "2026-08-30", "Planned", "Must-have", "2026-08-25"],
    ["Settings Page", "Emma", "2026-09-05", "In Dev", "Should-have", "2026-09-01"],
    ["Help Center", "Andrew", "2026-01-15", "Planned", "Nice-to-have", "2026-01-10"],
    ["Live Chat Support", "Michelle", "2026-09-25", "In Dev", "Must-have", "2026-09-20"],
    ["Performance Optimization", "Sofia", "2026-11-01", "Planned", "Should-have", "2026-10-25"],
    ["Multi-language Support", "Liam", "2026-10-20", "Released", "Nice-to-have", "2026-10-15"],
    ["Dark Mode", "Emma", "2026-08-10", "In Dev", "Should-have", "2026-08-05"],
    ["Accessibility Features", "Andrew", "2026-11-30", "Planned", "Must-have", "2026-11-25"],
    ["Audit Logs", "Michelle", "2026-02-25", "In Dev", "Nice-to-have", "2026-02-20"],
    ["Two-Factor Authentication", "Sofia", "2026-11-15", "Planned", "Must-have", "2026-11-10"],
    ["File Uploads", "Liam", "2026-08-05", "Released", "Should-have", "2026-08-01"],
    ["Activity Feed", "Emma", "2026-09-12", "In Dev", "Nice-to-have", "2026-09-08"],
    ["Calendar Integration", "Andrew", "2026-10-30", "Planned", "Should-have", "2026-10-25"],
    ["Task Management", "Michelle", "2026-11-20", "In Dev", "Must-have", "2026-11-15"],
    ["Email Templates", "Sofia", "2026-08-18", "Released", "Nice-to-have", "2026-08-15"],
    ["Subscription Plans", "Liam", "2026-09-22", "Planned", "Should-have", "2026-09-18"],
    ["Data Backup", "Emma", "2026-10-12", "In Dev", "Must-have", "2026-10-08"],
    ["Integration with Third-Party Services", "Andrew", "2026-11-30", "Planned", "Nice-to-have", "2026-11-25"],
    ["Custom Dashboards", "Michelle", "2026-08-28", "In Dev", "Should-have", "2026-08-24"],
    ["User Onboarding", "Sofia", "2026-09-18", "Released", "Must-have", "2026-09-12"],
    ["Feedback System", "Liam", "2026-10-08", "Planned", "Nice-to-have", "2026-10-01"],
    ["Bug Tracking", "Emma", "2026-11-10", "In Dev", "Should-have", "2026-11-05"],
    // ... (repeat as in the original data)
    ["File System Uploads", "Emma", "2026-01-05", "Released", "Should-have", "2026-01-01"]
  ];

  columns: any[] = [
    { label: "Feature", dataField: "Feature", filterMenuMode: 'set' },
    {
      label: "Owner", dataField: "Owner", template: "tags", icon: "smart-icon-user", filterMenuMode: 'set',
      options: [
        { color: '#FFB900', label: 'Andrew', value: 'Andrew' },
        { color: '#D83B01', label: 'Michelle', value: 'Michelle' },
        { color: '#107C10', label: 'Sofia', value: 'Sofia' },
        { color: '#008272', label: 'Liam', value: 'Liam' },
        { color: '#5C2D91', label: 'Emma', value: 'Emma' }
      ]
    },
    {
      label: "Target Release", dataField: "Target Release", dataType: "date", filterMenuMode: 'set'
    },
    {
      label: "Status", dataField: "Status", template: "tags", filterMenuMode: 'multi',
      options: [
        { color: '#FFB900', label: 'Planned', value: 'Planned' },
        { color: '#5C2D91', label: 'In Dev', value: 'In Dev' },
        { color: '#28A745', label: 'Released', value: 'Released' }
      ]
    },
    {
      label: "Priority", dataField: "Priority", template: "tags", filterMenuMode: 'multi',
      options: [
        { color: '#DD5347', label: 'Must-have', value: 'Must-have' },
        { color: '#FFC107', label: 'Should-have', value: 'Should-have' },
        { color: '#33B679', label: 'Nice-to-have', value: 'Nice-to-have' }
      ]
    },
    {
      label: "Review Date", dataField: "Review Date", dataType: "date",
      filterEditor: {
        template: 'list',
        dataSource: [
          'Last Week', 'Next Week', 'Next Month', 'Last Month',
          'Next 3 Months', 'Last 3 Months', 'Next Year', 'Last Year'
        ],
        onChange: (event: any, input: any) => {
          const value = event.detail.value;
          const today = new Date();
          let fromDate: Date | undefined, toDate: Date | undefined;
          switch (value) {
            case 'Last Week':
              fromDate = new Date(today);
              fromDate.setDate(today.getDate() - 7);
              toDate = today;
              break;
            case 'Next Week':
              fromDate = today;
              toDate = new Date(today);
              toDate.setDate(today.getDate() + 7);
              break;
            case 'Next Month':
              fromDate = today;
              toDate = new Date(today);
              toDate.setMonth(today.getMonth() + 1);
              break;
            case 'Last Month':
              fromDate = new Date(today);
              fromDate.setMonth(today.getMonth() - 1);
              toDate = today;
              break;
            case 'Next 3 Months':
              fromDate = today;
              toDate = new Date(today);
              toDate.setMonth(today.getMonth() + 3);
              break;
            case 'Last 3 Months':
              fromDate = new Date(today);
              fromDate.setMonth(today.getMonth() - 3);
              toDate = today;
              break;
            case 'Next Year':
              fromDate = today;
              toDate = new Date(today);
              toDate.setFullYear(today.getFullYear() + 1);
              break;
            case 'Last Year':
              fromDate = new Date(today);
              fromDate.setFullYear(today.getFullYear() - 1);
              toDate = today;
              break;
          }

          if (!value || value === '-') {
            this.grid.removeFilter('Review Date');
            return;
          }
          const filterGroup = new Smart.FilterGroup();
          const fromFilter = filterGroup.createFilter('date', fromDate, 'GREATER_THAN_OR_EQUAL');
          const toFilter = filterGroup.createFilter('date', toDate, 'LESS_THAN_OR_EQUAL');

          input.value = value;
          filterGroup.addFilter('and', fromFilter);
          filterGroup.addFilter('and', toFilter);
          this.grid.addFilter('Review Date', filterGroup);
        }
      }
    }
  ];

  sorting: any = {
    enabled: true,
    mode: 'many'
  };

  filtering: any = {
    enabled: true,
    filterRow: {
      visible: true
    }
  };

  appearance: any = {
    showColumnIcon: true
  };

  selection: any = {
    enabled: true,
    mode: 'many',
    checkBoxes: {
      enabled: true
    }
  };

  dataSourceSettings: any = {
    dataFields: [
      { name: "Feature", dataType: "string" },
      { name: "Owner", dataType: "string" },
      { name: "Target Release", dataType: "date" },
      { name: "Status", dataType: "string" },
      { name: "Priority", dataType: "string" },
      { name: "Review Date", dataType: "date" }
    ]
  };

  ngAfterViewInit(): void {
    // No additional initialization required, as all config is bound via properties
  }
}