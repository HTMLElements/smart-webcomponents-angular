import { Component, ViewChild, OnInit, AfterViewInit } from "@angular/core";
import { Smart, GridComponent } from "@smart-webcomponents-angular/grid";
import { GetData } from '../assets/data';

import { GridModule } from '@smart-webcomponents-angular/grid';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  GridModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
  @ViewChild("grid", { read: GridComponent, static: false }) grid!: GridComponent;

  log: string = '';

  ngOnInit(): void {
    // onInit code.
  }

  ngAfterViewInit(): void { }

  onColumnDragStart(event: CustomEvent) {
    this.log =
      "columnDragStart: " +
      event.detail.column.label +
      ", index: " +
      event.detail.index;
  };

  onColumnDragEnd(event: CustomEvent) {
    this.log =
      "columnDragEnd: " +
      event.detail.column.label +
      ", index: " +
      event.detail.index +
      ", new index: " +
      event.detail.newIndex;
  };

  onColumnDragCancel(event: any) {
    this.log = "columnDragCancel: " + event.detail.column.label;
  };

  behavior = { allowColumnReorder: true };

  dataSource = new Smart.DataAdapter({
    dataSource: GetData(100),
    dataFields: [
      "id: number",
      "firstName: string",
      "lastName: string",
      "productName: string",
      "quantity: number",
      "price: number",
      "total: number"
    ]
  });

  columns = [
    {
      label: "First Name",
      width: 150,
      dataField: "firstName"
    },
    { label: "Last Name", width: 150, dataField: "lastName" },
    { label: "Product", width: 200, dataField: "productName" },
    { label: "Quantity", width: 100, dataField: "quantity" },
    { label: "Unit Price", width: 100, dataField: "price", cellsFormat: "c2" },
    { label: "Total", dataField: "total", cellsFormat: "c2" }
  ];

  paging = {
    enabled: true
  };

  pager = {
    visible: true
  };
}
