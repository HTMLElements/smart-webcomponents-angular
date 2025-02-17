import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ListBoxComponent } from '@smart-webcomponents-angular/listbox';

import { ListBoxModule } from '@smart-webcomponents-angular/listbox';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  ListBoxModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('listbox', { read: ListBoxComponent, static: false }) listbox!: ListBoxComponent;


    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code.


        const list = this.listbox,
            data = [
                {
                    label: "Andrew",
                    value: 1,
                    group: "A"
                },
                {
                    label: "Natalia",
                    value: 5,
                    group: "B"
                },
                {
                    label: "Michael",
                    value: 4,
                    group: "B"
                },
                {
                    label: "Angel",
                    value: 2,
                    group: "A"
                },
                {
                    label: "Hristo",
                    value: 6,
                    group: "C"
                },
                {
                    label: "Peter",
                    value: 3,
                    group: "A"
                },
                {
                    label: "Albert",
                    value: 3,
                    group: "A"
                },
                {
                    label: "Boyko",
                    value: 3,
                    group: "A"
                },
                {
                    label: "Dimitar",
                    value: 3,
                    group: "B"
                },
                {
                    label: "George",
                    value: 3,
                    group: "C"
                }
            ];
        list.dataSource = data;
    }
}