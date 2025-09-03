import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Smart, GridComponent } from '@smart-webcomponents-angular/grid';
import { GetData } from '../assets/data';

import { GridModule } from '@smart-webcomponents-angular/grid';
import { ButtonModule, ButtonComponent } from '@smart-webcomponents-angular/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ ButtonModule, GridModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit {
  @ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;
  @ViewChild('transposeBtn', { read: ButtonComponent, static: false }) transposeBtn!: ButtonComponent;

  data = [
    { id: 1, name: 'Alice', age: 28, country: 'USA', city: 'New York', email: 'alice@example.com', phone: '+1-202-555-0123', job: 'Engineer', department: 'IT', salary: 75000 },
    { id: 2, name: 'Bob', age: 34, country: 'UK', city: 'London', email: 'bob@example.com', phone: '+44-20-555-2345', job: 'Manager', department: 'Sales', salary: 82000 },
    { id: 3, name: 'Charlie', age: 25, country: 'Germany', city: 'Berlin', email: 'charlie@example.com', phone: '+49-30-555-6789', job: 'Designer', department: 'Marketing', salary: 67000 },
    { id: 4, name: 'Diana', age: 32, country: 'France', city: 'Paris', email: 'diana@example.com', phone: '+33-1-555-3456', job: 'Analyst', department: 'Finance', salary: 78000 },
    { id: 5, name: 'Ethan', age: 29, country: 'Canada', city: 'Toronto', email: 'ethan@example.com', phone: '+1-416-555-4567', job: 'Developer', department: 'IT', salary: 73000 },
    { id: 6, name: 'Fiona', age: 31, country: 'Australia', city: 'Sydney', email: 'fiona@example.com', phone: '+61-2-555-7890', job: 'Consultant', department: 'HR', salary: 69000 },
    { id: 7, name: 'George', age: 27, country: 'USA', city: 'Chicago', email: 'george@example.com', phone: '+1-312-555-9876', job: 'Architect', department: 'IT', salary: 85000 },
    { id: 8, name: 'Hannah', age: 26, country: 'Spain', city: 'Madrid', email: 'hannah@example.com', phone: '+34-91-555-1111', job: 'Coordinator', department: 'Marketing', salary: 64000 },
    { id: 9, name: 'Ian', age: 33, country: 'Italy', city: 'Rome', email: 'ian@example.com', phone: '+39-06-555-2222', job: 'Lead', department: 'Sales', salary: 90000 },
    { id: 10, name: 'Julia', age: 30, country: 'Netherlands', city: 'Amsterdam', email: 'julia@example.com', phone: '+31-20-555-3333', job: 'Recruiter', department: 'HR', salary: 68000 }
  ];

  columns = [
    { label: 'ID', dataField: 'id' },
    { label: 'Name', dataField: 'name' },
    { label: 'Age', dataField: 'age' },
    { label: 'Country', dataField: 'country' },
    { label: 'City', dataField: 'city' },
    { label: 'Email', dataField: 'email' },
    { label: 'Phone', dataField: 'phone' },
    { label: 'Job Title', dataField: 'job' },
    { label: 'Department', dataField: 'department' },
    { label: 'Salary', dataField: 'salary' }
  ];
  
  transpose(): void {
   this.grid.transpose('name', 200);
  }
  

  ngAfterViewInit(): void {

  }
}