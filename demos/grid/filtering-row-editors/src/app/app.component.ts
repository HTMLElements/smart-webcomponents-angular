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
    { id: 1, firstName: "John", lastName: "Doe", age: 28, city: "New York", country: "US", salary: 72000, status: "Active", registered: "2021-05-12", avatar: "https://i.pravatar.cc/40?u=1" },
    { id: 2, firstName: "Anna", lastName: "Smith", age: 34, city: "London", country: "GB", salary: 83000, status: "Pending", registered: "2023-02-18", avatar: "https://i.pravatar.cc/40?u=2" },
    { id: 3, firstName: "Peter", lastName: "Johnson", age: 45, city: "Berlin", country: "DE", salary: 95000, status: "Inactive", registered: "2020-11-29", avatar: "https://i.pravatar.cc/40?u=3" },
    { id: 4, firstName: "Maria", lastName: "Garcia", age: 29, city: "Madrid", country: "ES", salary: 61000, status: "Active", registered: "2022-01-05", avatar: "https://i.pravatar.cc/40?u=4" },
    { id: 5, firstName: "David", lastName: "Wong", age: 38, city: "Hong Kong", country: "HK", salary: 88000, status: "Pending", registered: "2023-08-10", avatar: "https://i.pravatar.cc/40?u=5" },
    { id: 6, firstName: "Linda", lastName: "Brown", age: 31, city: "Toronto", country: "CA", salary: 70000, status: "Active", registered: "2022-10-02", avatar: "https://i.pravatar.cc/40?u=6" },
    { id: 7, firstName: "Tom", lastName: "Baker", age: 52, city: "Chicago", country: "US", salary: 105000, status: "Inactive", registered: "2019-07-20", avatar: "https://i.pravatar.cc/40?u=7" },
    { id: 8, firstName: "Sara", lastName: "Kim", age: 27, city: "Seoul", country: "KR", salary: 67000, status: "Active", registered: "2023-05-15", avatar: "https://i.pravatar.cc/40?u=8" },
    { id: 9, firstName: "Chris", lastName: "Miller", age: 41, city: "Dublin", country: "IE", salary: 82000, status: "Pending", registered: "2021-09-30", avatar: "https://i.pravatar.cc/40?u=9" },
    { id: 10, firstName: "Emma", lastName: "Wilson", age: 36, city: "Sydney", country: "AU", salary: 76000, status: "Active", registered: "2022-03-11", avatar: "https://i.pravatar.cc/40?u=10" },
    { id: 11, firstName: "Liam", lastName: "Davis", age: 30, city: "Melbourne", country: "AU", salary: 68000, status: "Active", registered: "2023-06-22", avatar: "https://i.pravatar.cc/40?u=11" },
    { id: 12, firstName: "Olivia", lastName: "Martinez", age: 33, city: "Barcelona", country: "ES", salary: 79000, status: "Pending", registered: "2021-12-14", avatar: "https://i.pravatar.cc/40?u=12" },
    { id: 13, firstName: "Noah", lastName: "Hernandez", age: 44, city: "Valencia", country: "ES", salary: 91000, status: "Inactive", registered: "2020-08-09", avatar: "https://i.pravatar.cc/40?u=13" },
    { id: 14, firstName: "Ava", lastName: "Lopez", age: 26, city: "Seville", country: "ES", salary: 62000, status: "Active", registered: "2022-11-03", avatar: "https://i.pravatar.cc/40?u=14" },
    { id: 15, firstName: "James", lastName: "Gonzalez", age: 39, city: "Madrid", country: "ES", salary: 87000, status: "Pending", registered: "2023-04-27", avatar: "https://i.pravatar.cc/40?u=15" },
    { id: 16, firstName: "Isabella", lastName: "Wilson", age: 32, city: "Auckland", country: "AU", salary: 73000, status: "Active", registered: "2021-10-19", avatar: "https://i.pravatar.cc/40?u=16" },
    { id: 17, firstName: "Mason", lastName: "Anderson", age: 47, city: "Brisbane", country: "AU", salary: 98000, status: "Inactive", registered: "2019-05-25", avatar: "https://i.pravatar.cc/40?u=17" },
    { id: 18, firstName: "Sophia", lastName: "Thomas", age: 28, city: "Perth", country: "AU", salary: 66000, status: "Active", registered: "2023-07-13", avatar: "https://i.pravatar.cc/40?u=18" },
    { id: 19, firstName: "Ethan", lastName: "Taylor", age: 35, city: "Adelaide", country: "AU", salary: 81000, status: "Pending", registered: "2022-02-08", avatar: "https://i.pravatar.cc/40?u=19" },
    { id: 20, firstName: "Mia", lastName: "Moore", age: 40, city: "Hobart", country: "AU", salary: 90000, status: "Inactive", registered: "2020-09-17", avatar: "https://i.pravatar.cc/40?u=20" },
    { id: 21, firstName: "Logan", lastName: "Jackson", age: 29, city: "Canberra", country: "AU", salary: 64000, status: "Active", registered: "2021-06-30", avatar: "https://i.pravatar.cc/40?u=21" },
    { id: 22, firstName: "Charlotte", lastName: "White", age: 34, city: "Gold Coast", country: "AU", salary: 78000, status: "Pending", registered: "2023-03-16", avatar: "https://i.pravatar.cc/40?u=22" }
  ];

  countryFilterDataSource = [
    { code: 'US', name: 'United States' },
    { code: 'GB', name: 'United Kingdom' },
    { code: 'DE', name: 'Germany' },
    { code: 'ES', name: 'Spain' },
    { code: 'HK', name: 'Hong Kong' },
    { code: 'CA', name: 'Canada' },
    { code: 'KR', name: 'South Korea' },
    { code: 'IE', name: 'Ireland' },
    { code: 'AU', name: 'Australia' }
  ];

  flags: Record<string, string> = {
    'US': 'us',
    'GB': 'gb',
    'DE': 'de',
    'ES': 'es',
    'HK': 'hk',
    'CA': 'ca',
    'KR': 'kr',
    'IE': 'ie',
    'AU': 'au'
  };

  columns = [
    { label: 'First Name', dataField: 'firstName', width: 150, placeholder: '—' },
    { label: 'Last Name', dataField: 'lastName', width: 150, placeholder: '—' },
    {
      label: 'Country',
      dataField: 'country',
      width: 200,
      align: 'center',
      cellsAlign: 'center',
      placeholder: '—',
      filterEditor: {
        template: 'list',
        displayMember: 'name',
        valueMember: 'code',
        dataSource: this.countryFilterDataSource
      },
      cellsRenderer: (row: number, column: any, value: string, data: any, cell: HTMLElement) => {
        const displayValue = this.countryFilterDataSource.find(v => v.code === value)?.name || value;
        const flag = `../../grid/live-update-countries/flags/${this.flags[value]}.svg`;
        cell.innerHTML = `<img loading="lazy" class="flag" style="margin-left: 10px; width: 15px; height: 10px;" src="${flag}" /> ${displayValue}`;
      }
    },
    {
      label: 'City',
      dataField: 'city',
      width: 150,
      filterMenuMode: 'multi',
      placeholder: '—',
      filterEditor: { placeholder: 'Enter City' }
    },
    {
      label: 'Age',
      dataField: 'age',
      width: 70,
      align: 'center',
      cellsAlign: 'center',
      dataType: 'number',
      placeholder: '##'
    },
    {
      label: 'Salary',
      dataField: 'salary',
      align: 'right',
      cellsAlign: 'right',
      dataType: 'number',
      cellsFormat: 'c0',
      placeholder: '##'
    },
    {
      label: 'Status',
      dataField: 'status',
      align: 'center',
      cellsAlign: 'center',
      placeholder: '—',
      filterEditor: {
        template: 'checkList',
        dataSource: ['Active', 'Pending', 'Inactive']
      },
      formatFunction(settings: any) {
        const value = settings.value;

        const colors: Record<string, string> = {
          Active: "#16a34a",
          Pending: "#d97706",
          Inactive: "#dc2626"
        };

        const icons: Record<string, string> = {
          Active: "✔️",
          Pending: "⏳",
          Inactive: "❌"
        };

        const color = colors[value] || "#888";
        const icon = icons[value] || "";

        settings.template = `
          <span style="
            padding: 2px 6px;
            border-radius: 10px;
            background: ${color}22;
            color: ${color};
            height: 25px;
            font-size: 13px;
            display: inline-flex;
            gap: 6px;
            align-items: center;">
            ${icon} ${value}
          </span>
        `;
      }
    },
    {
      label: 'Registered',
      dataField: 'registered',
      dataType: 'date',
      placeholder: 'yyyy-MM-dd',
      cellsFormat: 'yyyy-MM-dd'
    }
  ];

  selection = {
    enabled: true,
    mode: 'extended',
    allowCellSelection: true
  };

  sorting = {
    enabled: true
  };

  filtering = {
    enabled: true,
    filterRow: {
      visible: true
    }
  };

  appearance = {
    showRowLines: true,
    showColumnLines: true,
    alternatingRowColors: true
  };

  ngAfterViewInit(): void {
    // No additional initialization needed since all config is bound via template
  }
}