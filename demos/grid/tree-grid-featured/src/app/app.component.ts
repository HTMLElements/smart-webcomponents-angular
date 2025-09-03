import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Smart, GridComponent } from '@smart-webcomponents-angular/grid';
import { GetData } from '../assets/data';

import { GridModule } from '@smart-webcomponents-angular/grid';

import { ButtonModule } from '@smart-webcomponents-angular/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ ButtonModule,GridModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit {
 @ViewChild('employeeGrid', { read: GridComponent, static: false }) employeeGrid!: GridComponent;


  dataSource = [
    {
      "employee": "Ashley Rivers",
      "title": "CEO",
      "id": 126225,
      "department": "Executive Management",
      "employmentType": "Permanent",
      "location": "France",
      "joinDate": "2010-01-05",
      "salary": 15000,
      "paymentMethod": "Bank Transfer",
      "status": "Paid",
      "contact": { "linkedin": "#", "email": "#" },
      "children": [
        {
          "employee": "Jeffery Moore",
          "title": "Exec. Vice President",
          "id": 383060,
          "department": "Executive Management",
          "employmentType": "Permanent",
          "location": "United Kingdom",
          "joinDate": "2002-07-05",
          "salary": 12000,
          "paymentMethod": "Bank Transfer",
          "status": "Paid",
          "children": [
            {
              "employee": "Deborah Love",
              "title": "CTO",
              "id": 131244,
              "department": "IT",
              "employmentType": "Permanent",
              "location": "Spain",
              "joinDate": "2010-06-08",
              "salary": 11000,
              "paymentMethod": "Bank Transfer",
              "status": "Paid",
              "children": [
                {
                  "employee": "Michael Allen",
                  "title": "Lead Developer",
                  "id": 331148,
                  "department": "IT",
                  "employmentType": "Permanent",
                  "location": "United Kingdom",
                  "joinDate": "2000-04-16",
                  "salary": 9500,
                  "paymentMethod": "Bank Transfer",
                  "status": "Pending",
                  "children": [
                    { "employee": "Lori West", "title": "Developer", "id": 969693, "department": "IT", "employmentType": "Permanent", "location": "Netherlands", "joinDate": "2003-02-13", "salary": 5500, "paymentMethod": "Bank Transfer", "status": "Pending" },
                    { "employee": "Peggy Williams", "title": "Developer", "id": 263032, "department": "IT", "employmentType": "Contract", "location": "Netherlands", "joinDate": "2004-08-01", "salary": 5200, "paymentMethod": "Bank Transfer", "status": "Pending" },
                    { "employee": "Kristy Zuniga", "title": "QA Engineer", "id": 733052, "department": "IT", "employmentType": "Permanent", "location": "Portugal", "joinDate": "2020-08-10", "salary": 6000, "paymentMethod": "Cash", "status": "Paid" },
                    { "employee": "Alan Knight", "title": "Backend Developer", "id": 774321, "department": "IT", "employmentType": "Permanent", "location": "Germany", "joinDate": "2011-03-22", "salary": 7200, "paymentMethod": "Bank Transfer", "status": "Paid" },
                    { "employee": "Tina Brooks", "title": "Frontend Developer", "id": 883210, "department": "IT", "employmentType": "Contract", "location": "France", "joinDate": "2018-05-18", "salary": 6400, "paymentMethod": "Bank Transfer", "status": "Pending" }
                  ]
                },
                {
                  "employee": "Samantha Hall",
                  "title": "DevOps Manager",
                  "id": 882334,
                  "department": "IT",
                  "employmentType": "Permanent",
                  "location": "Italy",
                  "joinDate": "2012-09-17",
                  "salary": 9800,
                  "paymentMethod": "Bank Transfer",
                  "status": "Paid",
                  "children": [
                    { "employee": "Victor Reed", "title": "Cloud Engineer", "id": 992211, "department": "IT", "employmentType": "Permanent", "location": "Netherlands", "joinDate": "2016-07-23", "salary": 7000, "paymentMethod": "Cash", "status": "Paid" },
                    { "employee": "Natalie Kim", "title": "System Admin", "id": 101122, "department": "IT", "employmentType": "Permanent", "location": "Spain", "joinDate": "2017-01-12", "salary": 6800, "paymentMethod": "Bank Transfer", "status": "Pending" }
                  ]
                }
              ]
            },
            {
              "employee": "Evelyn Jones",
              "title": "CFO",
              "id": 205907,
              "department": "Finance",
              "employmentType": "Permanent",
              "location": "Italy",
              "joinDate": "2020-05-03",
              "salary": 10800,
              "paymentMethod": "Cash",
              "status": "Paid",
              "children": [
                { "employee": "Dawn Smith", "title": "Accountant", "id": 319684, "department": "Finance", "employmentType": "Permanent", "location": "Portugal", "joinDate": "2007-09-04", "salary": 6200, "paymentMethod": "Bank Transfer", "status": "Paid" },
                { "employee": "Sophia Turner", "title": "Financial Analyst", "id": 547821, "department": "Finance", "employmentType": "Permanent", "location": "France", "joinDate": "2015-09-21", "salary": 6800, "paymentMethod": "Bank Transfer", "status": "Paid" },
                { "employee": "Martin Lewis", "title": "Junior Accountant", "id": 110233, "department": "Finance", "employmentType": "Permanent", "location": "Germany", "joinDate": "2019-02-11", "salary": 5100, "paymentMethod": "Bank Transfer", "status": "Pending" },
                { "employee": "Clara Young", "title": "Finance Intern", "id": 115567, "department": "Finance", "employmentType": "Contract", "location": "Italy", "joinDate": "2022-06-01", "salary": 3200, "paymentMethod": "Cash", "status": "Pending" }
              ]
            },
            {
              "employee": "William Scott",
              "title": "CMO",
              "id": 103829,
              "department": "Marketing",
              "employmentType": "Contract",
              "location": "United Kingdom",
              "joinDate": "2016-07-09",
              "salary": 10000,
              "paymentMethod": "Bank Transfer",
              "status": "Paid",
              "children": [
                { "employee": "Mia Evans", "title": "Marketing Specialist", "id": 584930, "department": "Marketing", "employmentType": "Permanent", "location": "France", "joinDate": "2012-03-12", "salary": 4800, "paymentMethod": "Cash", "status": "Pending" },
                { "employee": "Jack Cooper", "title": "SEO Analyst", "id": 192837, "department": "Marketing", "employmentType": "Permanent", "location": "Italy", "joinDate": "2010-02-14", "salary": 5200, "paymentMethod": "Bank Transfer", "status": "Pending" },
                { "employee": "Olivia Bennett", "title": "Content Strategist", "id": 118345, "department": "Marketing", "employmentType": "Permanent", "location": "Spain", "joinDate": "2014-11-09", "salary": 5600, "paymentMethod": "Bank Transfer", "status": "Paid" },
                { "employee": "Henry Fisher", "title": "Social Media Manager", "id": 122455, "department": "Marketing", "employmentType": "Permanent", "location": "France", "joinDate": "2018-08-21", "salary": 6000, "paymentMethod": "Cash", "status": "Pending" },
                { "employee": "Isabella Ross", "title": "Graphic Designer", "id": 133244, "department": "Marketing", "employmentType": "Contract", "location": "Netherlands", "joinDate": "2021-04-12", "salary": 4700, "paymentMethod": "Bank Transfer", "status": "Paid" }
              ]
            }
          ]
        }
      ]
    },
    {
      "employee": "Laura Bennett",
      "title": "VP of HR",
      "id": 145678,
      "department": "Human Resources",
      "employmentType": "Permanent",
      "location": "France",
      "joinDate": "2013-04-22",
      "salary": 9500,
      "paymentMethod": "Bank Transfer",
      "status": "Paid",
      "children": [
        {
          "employee": "Kevin Hughes",
          "title": "HR Manager",
          "id": 155789,
          "department": "Human Resources",
          "employmentType": "Permanent",
          "location": "Germany",
          "joinDate": "2015-06-14",
          "salary": 7200,
          "paymentMethod": "Bank Transfer",
          "status": "Paid",
          "children": [
            { "employee": "Sophie Adams", "title": "HR Specialist", "id": 166890, "department": "Human Resources", "employmentType": "Permanent", "location": "Italy", "joinDate": "2017-09-01", "salary": 5100, "paymentMethod": "Bank Transfer", "status": "Pending" },
            { "employee": "Liam Turner", "title": "Recruiter", "id": 177901, "department": "Human Resources", "employmentType": "Contract", "location": "Netherlands", "joinDate": "2018-11-12", "salary": 4700, "paymentMethod": "Cash", "status": "Paid" },
            { "employee": "Emily Carter", "title": "HR Intern", "id": 188012, "department": "Human Resources", "employmentType": "Contract", "location": "France", "joinDate": "2022-03-21", "salary": 3200, "paymentMethod": "Cash", "status": "Pending" }
          ]
        }
      ]
    },
    {
      "employee": "Robert King",
      "title": "VP of Sales",
      "id": 199123,
      "department": "Sales",
      "employmentType": "Permanent",
      "location": "United Kingdom",
      "joinDate": "2011-05-15",
      "salary": 11000,
      "paymentMethod": "Bank Transfer",
      "status": "Paid",
      "children": [
        {
          "employee": "Amanda White",
          "title": "Sales Manager",
          "id": 200234,
          "department": "Sales",
          "employmentType": "Permanent",
          "location": "Spain",
          "joinDate": "2014-02-28",
          "salary": 7800,
          "paymentMethod": "Bank Transfer",
          "status": "Paid",
          "children": [
            { "employee": "Daniel Harris", "title": "Sales Executive", "id": 211345, "department": "Sales", "employmentType": "Permanent", "location": "Italy", "joinDate": "2016-06-12", "salary": 5200, "paymentMethod": "Bank Transfer", "status": "Pending" },
            { "employee": "Grace Wilson", "title": "Sales Executive", "id": 222456, "department": "Sales", "employmentType": "Permanent", "location": "Germany", "joinDate": "2018-09-25", "salary": 5100, "paymentMethod": "Cash", "status": "Paid" },
            { "employee": "Ethan Roberts", "title": "Sales Intern", "id": 233567, "department": "Sales", "employmentType": "Contract", "location": "France", "joinDate": "2023-01-10", "salary": 3000, "paymentMethod": "Cash", "status": "Pending" }
          ]
        }
      ]
    },
    {
      "employee": "Monica Reed",
      "title": "VP of Operations",
      "id": 244678,
      "department": "Operations",
      "employmentType": "Permanent",
      "location": "Italy",
      "joinDate": "2012-07-19",
      "salary": 10800,
      "paymentMethod": "Bank Transfer",
      "status": "Paid",
      "children": [
        {
          "employee": "Patrick Mitchell",
          "title": "Operations Manager",
          "id": 255789,
          "department": "Operations",
          "employmentType": "Permanent",
          "location": "Netherlands",
          "joinDate": "2015-10-02",
          "salary": 7800,
          "paymentMethod": "Bank Transfer",
          "status": "Paid",
          "children": [
            { "employee": "Sarah Bell", "title": "Operations Coordinator", "id": 266890, "department": "Operations", "employmentType": "Permanent", "location": "France", "joinDate": "2017-03-18", "salary": 5200, "paymentMethod": "Bank Transfer", "status": "Pending" },
            { "employee": "Jason Moore", "title": "Logistics Specialist", "id": 277901, "department": "Operations", "employmentType": "Contract", "location": "Germany", "joinDate": "2019-06-14", "salary": 4900, "paymentMethod": "Cash", "status": "Paid" }
          ]
        }
      ]
    },
    {
      "employee": "Diana Foster",
      "title": "Head of Support",
      "id": 288012,
      "department": "Support",
      "employmentType": "Permanent",
      "location": "Spain",
      "joinDate": "2014-09-09",
      "salary": 9000,
      "paymentMethod": "Bank Transfer",
      "status": "Paid",
      "children": [
        {
          "employee": "Brian Scott",
          "title": "Support Manager",
          "id": 299123,
          "department": "Support",
          "employmentType": "Permanent",
          "location": "Italy",
          "joinDate": "2016-05-12",
          "salary": 7200,
          "paymentMethod": "Bank Transfer",
          "status": "Paid",
          "children": [
            { "employee": "Chloe Martinez", "title": "Support Specialist", "id": 300234, "department": "Support", "employmentType": "Permanent", "location": "France", "joinDate": "2018-03-01", "salary": 5000, "paymentMethod": "Cash", "status": "Pending" },
            { "employee": "Nathan Walker", "title": "Support Specialist", "id": 311345, "department": "Support", "employmentType": "Permanent", "location": "Germany", "joinDate": "2019-11-20", "salary": 5200, "paymentMethod": "Bank Transfer", "status": "Paid" },
            { "employee": "Ella Collins", "title": "Support Intern", "id": 322456, "department": "Support", "employmentType": "Contract", "location": "Netherlands", "joinDate": "2023-02-15", "salary": 3100, "paymentMethod": "Cash", "status": "Pending" }
          ]
        }
      ]
    }
  ];

  dataSourceSettings = {
    childrenDataField: 'children',
    id: 'id',
    dataFields: [
	  { name: 'employee', dataType: 'string' },
	  { name: 'title', dataType: 'string' },
	  { name: 'id', dataType: 'number' },
	  { name: 'department', dataType: 'string' },
	  { name: 'employmentType', dataType: 'string' },
	  { name: 'location', dataType: 'string' },
	  { name: 'joinDate', dataType: 'date' },
	  { name: 'salary', dataType: 'number' },
	  { name: 'paymentMethod', dataType: 'string' },
	  { name: 'status', dataType: 'string' }
    ]
  };

  editing = {
    enabled: true,
    mode: 'cell'
  };

  selection = {
    enabled: true,
    allowCellSelection: true,
    mode: 'extended'
  };

  sorting = {
    enabled: true
  };

  filtering = {
    enabled: true
  };

  appearance = {
    showRowHeaderNumber: true,
    showRowHeaderEditIcon: true,
    allowHover: true
  };

  behavior = {
    rowResizeMode: 'growAndShrink',
    columnResizeMode: 'growAndShrink'
  };

  layout = {
    rowHeight: 40
  };

  // Cache for employee images to keep consistent images per row
  private employeeImgSrcMap = new Map<number, string>();

  columns = [
    {
      label: 'Employee',
      width: 400,
      dataField: 'employee',
      align: 'left',
      cellsRenderer: (row: number, column: any, value: string, data: any, cell: HTMLElement) => {
        // Use cached imgSrc or generate new
        let imgSrc = this.employeeImgSrcMap.get(data.id);
        if (!imgSrc) {
          imgSrc = `https://i.pravatar.cc/50?img=${Math.floor(Math.random() * 70)}`;
          this.employeeImgSrcMap.set(data.id, imgSrc);
        }
        return `<div style="align-items: center; gap: 10px; display: flex;">
          <img style="border-radius: 50%;" width="25" src="${imgSrc}"/>
          <div><strong>${value}</strong><br><small>${data.title}</small></div>
        </div>`;
      }
    },
    { label: 'ID', dataField: 'id', align: 'center' },
    {
      label: 'Department',
      width: 200,
      dataField: 'department',
      align: 'center',
      template: 'tags',
      options: [
        { color: '#18BFFF', label: 'Executive Management', value: 'Executive Management' },
        { color: '#F82B60', label: 'IT', value: 'IT' },
        { color: '#6B1CB0', label: 'Finance', value: 'Finance' },
        { color: '#1283DA', label: 'Marketing', value: 'Marketing' },
        { color: '#FCB400', label: 'Human Resources', value: 'Human Resources' },
        { color: '#5F27E1', label: 'Sales', value: 'Sales' },
        { color: '#20C933', label: 'Operations', value: 'Operations' },
        { color: '#00D647', label: 'Support', value: 'Support' }
      ]
    },
    {
      label: 'Employment Type',
      dataField: 'employmentType',
      editor: 'list',
      template: 'list',
      options: ['Permanent', 'Contract'],
      align: 'center'
    },
    {
      label: 'Location',
      width: 150,
      dataField: 'location',
      editor: 'list',
      template: 'list',
      options: ['France', 'Spain', 'United Kingdom', 'Netherlands', 'Portugal', 'Italy', 'Germany'],
      cellsRenderer: (row: number, column: any, value: string, data: any, cell: HTMLElement) => {
        const flags: Record<string, string> = {
          'France': 'fr',
          'Spain': 'es',
          'United Kingdom': 'gb',
          'Netherlands': 'nl',
          'Portugal': 'pt',
          'Italy': 'it',
          'Germany': 'de'
        };
        // Adjusted path to relative assets folder (you may need to adjust this path)
        const flag = `assets/flags/${flags[value]}.svg`;
        return `<img loading="lazy" class="flag" style="margin-left: 10px; width: 15px; height: 10px;" src="${flag}" /> ${value}`;
      }
    },
    { label: 'Join Date', dataField: 'joinDate', align: 'center' },
    {
      label: 'Salary',
      dataField: 'salary',
      align: 'right',
      cellsRenderer: (row: number, column: any, value: number, data: any, cell: HTMLElement) => {
        return `$${value.toLocaleString()}`;
      }
    },
    {
      label: 'Payment Method',
      width: 125,
      dataField: 'paymentMethod',
      template: 'tags',
      options: [
        { label: 'Cash', value: 'Cash', color: '#6B1CB0' },
        { label: 'Bank Transfer', value: 'Bank Transfer', color: '#18BFFF' }
      ],
      align: 'center'
    },
    {
      label: 'Status',
      dataField: 'status',
      align: 'center',
      template: 'tags',
      options: [
        { color: '#00C851', label: 'Paid', value: 'Paid' },
        { color: '#ffbb33', label: 'Pending', value: 'Pending' }
      ]
    },
    {
      label: 'Contact',
      dataField: 'contact',
      align: 'center',
      cellsRenderer: (row: number, column: any, value: any, data: any, cell: HTMLElement) => {
        // Use inline event handlers as in original, but Angular prefers event binding.
        // Since this is a custom renderer returning HTML string, we keep onclick inline.
        return `<div class="contact-icons">
          <img src="https://img.icons8.com/ios-filled/50/00C851/linkedin.png" onclick="window.open('${value.linkedin}','_blank')" />
          <img src="https://img.icons8.com/ios-filled/50/ffbb33/new-post.png" onclick="window.location='mailto:${value.email}'" />
        </div>`;
      }
    }]

  ngAfterViewInit(): void {
    // Expand all rows on load
    this.employeeGrid.expandAllRows();
  }
}