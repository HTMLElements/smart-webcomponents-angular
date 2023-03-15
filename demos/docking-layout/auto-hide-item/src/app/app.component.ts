import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from '@smart-webcomponents-angular/button';
import { DropDownListComponent } from '@smart-webcomponents-angular/dropdownlist';
import { DockingLayoutComponent } from '@smart-webcomponents-angular/dockinglayout';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
    @ViewChild('button2', { read: ButtonComponent, static: false }) button2!: ButtonComponent;
    @ViewChild('button3', { read: ButtonComponent, static: false }) button3!: ButtonComponent;
    @ViewChild('button4', { read: ButtonComponent, static: false }) button4!: ButtonComponent;
    @ViewChild('dropDownList', { read: DropDownListComponent, static: false }) dropDownList!: DropDownListComponent;
    @ViewChild('dockinglayout', { read: DockingLayoutComponent, static: false }) dockinglayout!: DockingLayoutComponent;

    layout: Array<object> = [
        {
            type: 'LayoutGroup',
            orientation: 'horizontal',
            items: [
                {
                    type: 'LayoutPanel',
                    label: 'Window A',
                    items: [{
                        id: 'itemA',
                        label: '#itemA',
                        content: 'Content of item with id "itemA"',
                        selected: true
                    }]
                },
                {
                    type: 'LayoutGroup',
                    id: 'verticalGroup',
                    orientation: 'vertical',
                    items: [
                        {
                            type: 'LayoutPanel',
                            label: 'Window B',
                            items: [{
                                id: 'itemB',
                                label: '#itemB',
                                content: 'Content of item with id "itemB"',
                            }]
                        },
                        {
                            type: 'LayoutPanel',
                            label: 'Window C',
                            items: [{
                                id: 'itemC',
                                label: '#itemC',
                                content: 'Content of item with id "itemC"'
                            }]
                        },
                    ]
                },
                {
                    type: 'LayoutPanel',
                    label: 'Window D',
                    items: [{
                        id: 'itemD',
                        label: '#itemD',
                        content: 'Content of item with id "itemD"',
                    }]
                }
            ]
        }
    ];

    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code.

        this.button.addEventListener('click', () => {
            this.dockinglayout.autoHideTop(this.dropDownList.selectedValues[0]);
        });
        this.button2.addEventListener('click', () => {
            this.dockinglayout.autoHideBottom(this.dropDownList.selectedValues[0]);
        });
        this.button3.addEventListener('click', () => {
            this.dockinglayout.autoHideLeft(this.dropDownList.selectedValues[0]);
        });
        this.button4.addEventListener('click', () => {
            this.dockinglayout.autoHideRight(this.dropDownList.selectedValues[0]);
        });
    }
}