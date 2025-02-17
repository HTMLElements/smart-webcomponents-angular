import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { DockingLayoutComponent } from '@smart-webcomponents-angular/dockinglayout';
import { RadioButtonComponent } from '@smart-webcomponents-angular/radiobutton';

import { DockingLayoutModule } from '@smart-webcomponents-angular/dockinglayout';

import { RadioButtonModule } from '@smart-webcomponents-angular/radiobutton';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  DockingLayoutModule, RadioButtonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('dockinglayout', { read: DockingLayoutComponent, static: false }) dockinglayout!: DockingLayoutComponent;
    @ViewChild('radioButton', { read: RadioButtonComponent, static: false }) radioButton!: RadioButtonComponent;
    @ViewChild('radioButton2', { read: RadioButtonComponent, static: false }) radioButton2!: RadioButtonComponent;

    layout: Array<object> = [
        {
            id: 'item1',
            label: 'Tabs 1',
            items: [{
                label: 'Tab 1',
                content: 'Content of Tab 1',
                selected: true
            },
            {
                label: 'Tab 2',
                content: 'Content of Tab 2'
            }],
            dropPosition: ['top', 'bottom', 'left', 'layout-left', 'layout-top']
        },
        {
            id: 'item2',
            label: 'Tabs 2',
            items: [{
                label: 'Tab 3',
                content: 'Content of Tab 3'
            }]
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

        const radioButtons = [this.radioButton, this.radioButton2];

        for (let i = 0; i < radioButtons.length; i++) {
            radioButtons[i].addEventListener('click', (e: Event) => {
                this.dockinglayout.snapMode = (<Element>e.currentTarget)?.innerHTML.toLowerCase();
            });
        }


    }
}