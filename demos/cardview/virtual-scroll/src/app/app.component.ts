import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { CardViewColumn, CardViewComponent, Smart } from '@smart-webcomponents-angular/cardview';

import { CardViewModule } from '@smart-webcomponents-angular/cardview';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  CardViewModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('cardview', { read: CardViewComponent, static: false }) cardview!: CardViewComponent;

    dataSource = new Smart.DataAdapter({
        virtualDataSourceLength: 1000,
        virtualDataSourceCache: true,
        virtualDataSource: function (resultCallbackFunction: any, details: any) {
            fetch('https://randomuser.me/api/?results=' + (details.last - details.first + 1), { method: 'GET' })
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    const results = data.results.map((result: any) => {
                        return {
                            picture: result.picture.large,
                            name: result.name.first + ' ' + result.name.last,
                            email: result.email,
                            registered: new Date(result.registered.date)
                        };
                    });
                    resultCallbackFunction({ dataSource: results });
                });
        },
        dataFields: ['picture: string', 'name: string', 'nationality: string', 'phone: string', 'registered: date']
    });
    cellOrientation = 'horizontal';
    coverField = 'picture';
    coverMode = 'fit';
    columns: CardViewColumn[] = [
        { label: 'Name', dataField: 'name' },
        {
            label: 'Nationality', dataField: 'nationality', icon: 'nationality',
            formatFunction: function (settings) {
                if (settings.value !== undefined) {
                    settings.template = `<span class="flag-icon flag-icon-${settings.value.toLowerCase()}"></span>`;
                }
            }
        },
        { label: 'Phone', dataField: 'phone', icon: 'phone' },
        { label: 'Registered', dataField: 'registered', icon: 'registered', formatSettings: { formatString: 'd' } },
        { label: 'Picture', dataField: 'picture', image: true },
    ];
    scrolling = 'virtual';
    titleField = 'name';

    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code.

    }
}