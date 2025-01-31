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


        const listBox = document.querySelector('smart-list-box');

        if (!listBox) { return }
        
        listBox['remoteFilteringDetails'] = {
            url: '../../../src/common/customers.txt',
            success: function (filterQuery: any, items: any) {
                setTimeout(function () {
                    console.log(items);
                    if (!filterQuery) {
                        listBox.dataSource = [];
                        listBox.displayLoadingIndicator = false;
                        return;
                    }
                    for (let i = 0; i < items.length; i++) {
                        if (items[i].City.toLowerCase().indexOf(filterQuery.toLowerCase()) !== 0) {
                            items[i] = undefined;
                        }
                    }
                    items = items.filter((item: any) => item !== undefined);
                    listBox.displayMember = 'CompanyName';
                    listBox.valueMember = 'CustomerID';
                    listBox.displayLoadingIndicator = false;
                    listBox.dataSource = items;
                }, 500);
            },
            error: function () {
                console.log('Error');
            }
        };


    }
}