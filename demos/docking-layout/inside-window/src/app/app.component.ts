import {
    Component,
    ViewChild,
    OnInit,
    AfterViewInit,
    ViewEncapsulation,
} from '@angular/core';
import { DockingLayoutComponent } from '@smart-webcomponents-angular/dockinglayout';
import { WindowComponent } from '@smart-webcomponents-angular/window';
import { TreeComponent } from '@smart-webcomponents-angular/tree';
import { MultilineTextBoxComponent } from '@smart-webcomponents-angular/multilinetextbox';
import { GaugeComponent } from '@smart-webcomponents-angular/gauge';

import { DockingLayoutModule } from '@smart-webcomponents-angular/dockinglayout';

import { WindowModule } from '@smart-webcomponents-angular/window';

import { TreeModule } from '@smart-webcomponents-angular/tree';

import { MultilineTextBoxModule } from '@smart-webcomponents-angular/multilinetextbox';

import { TextBoxModule } from '@smart-webcomponents-angular/textbox';

import { GaugeModule } from '@smart-webcomponents-angular/gauge';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ DockingLayoutModule, WindowModule, TreeModule, MultilineTextBoxModule, TextBoxModule, GaugeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('dockinglayout', { read: DockingLayoutComponent, static: false }) dockinglayout!: DockingLayoutComponent;
    @ViewChild('window', { read: WindowComponent, static: false }) window!: WindowComponent;
    @ViewChild('tree', { read: TreeComponent, static: false }) tree!: TreeComponent;
    @ViewChild('multilineTextBox', { read: MultilineTextBoxComponent, static: false, }) multilineTextBox!: MultilineTextBoxComponent;
    @ViewChild('multilineTextBox2', { read: MultilineTextBoxComponent, static: false, }) multilineTextBox2!: MultilineTextBoxComponent;
    @ViewChild('multilineTextBox3', { read: MultilineTextBoxComponent, static: false }) multilineTextBox3!: MultilineTextBoxComponent;
    @ViewChild('gauge', { read: GaugeComponent, static: false }) gauge!: GaugeComponent;

    tabTree: string = `
              <smart-tree id="tree" [filterable]="true">
              <smart-tree-items-group>
                  <i class="material-icons">folder</i> Attractions
                  <smart-tree-item>Movies</smart-tree-item>
                  <smart-tree-item>Circus</smart-tree-item>
                  <smart-tree-item>Concerts</smart-tree-item>
                  <smart-tree-item>Monuments</smart-tree-item>
              </smart-tree-items-group>
              <smart-tree-items-group>
                  <i class="material-icons">folder</i> Dining
                  <smart-tree-item>Restaurants</smart-tree-item>
                  <smart-tree-item>Caf&eacute;s</smart-tree-item>
                  <smart-tree-item>Bars</smart-tree-item>
              </smart-tree-items-group>
              <smart-tree-items-group>
                  <i class="material-icons">folder</i> Education
                  <smart-tree-item>Schools</smart-tree-item>
                  <smart-tree-item>Colleges</smart-tree-item>
                  <smart-tree-item>Universities</smart-tree-item>
                  <smart-tree-item>Educational courses</smart-tree-item>
              </smart-tree-items-group>
              <smart-tree-items-group>
                  <i class="material-icons">folder</i> Family
                  <smart-tree-item>Babysitting</smart-tree-item>
                  <smart-tree-item>Family trips</smart-tree-item>
                  <smart-tree-item>Theme parks</smart-tree-item>
              </smart-tree-items-group>
              <smart-tree-items-group>
                  <i class="material-icons">folder</i> Health
                  <smart-tree-item>Hospitals</smart-tree-item>
                  <smart-tree-item>Family physicians</smart-tree-item>
                  <smart-tree-item>Optics</smart-tree-item>
              </smart-tree-items-group>
          </smart-tree>
              `;

    layout: Array<object> = [
        {
            id: 'item0',
            label: 'Tabs 0',
            items: [
                {
                    label: 'Tab A',
                    selected: true,
                    content: 'This is the first item of the Tabs 0.',
                },
                {
                    label: 'Tab B',
                    content: 'Some Text Inside the Text Box',
                },
            ],
            autoHide: true,
            autoHidePosition: 'left',
        },
        {
            id: 'item1',
            label: 'Tabs 1',
            items: [
                {
                    label: 'Tab 1',
                    selected: true,
                    content: '',
                },
                {
                    label: 'Tab 2',
                    content: '',
                },
                {
                    label: 'Tab 3',
                    content: '',
                },
            ],
            headerPosition: 'none',
            tabCloseButtons: true,
        },
        {
            id: 'item2',
            label: 'Solution Explorer',
            items: [
                {
                    label: 'Tab 4',
                    content: '',
                },
            ],
            tabPosition: 'hidden',
        },
        {
            id: 'item3',
            label: 'Tabs 3',
            items: [
                {
                    label: 'Tab 4',
                    selected: true,
                    content: '',
                },
                {
                    label: 'Tab 5',
                    content: 'Contents of Tab Item 5.',
                },
            ],
            autoHide: true,
            autoHidePosition: 'top',
        },
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
        this.dockinglayout.update('item0', {
            items: [
                {
                    index: 1,
                    content: this.multilineTextBox3.nativeElement,
                },
            ],
        });

        this.dockinglayout.update('item2', {
            items: [
                {
                    index: 0,
                    content: this.tree.nativeElement,
                },
            ],
        });

        this.dockinglayout.update('item1', {
            items: [
                {
                    index: 0,
                    content: this.tabTree,
                },
                {
                    index: 1,
                    content: this.multilineTextBox.nativeElement,
                },
                {
                    index: 2,
                    content: this.multilineTextBox2.nativeElement,
                },
            ],
        });

        this.dockinglayout.update('item3', {
            items: [
                {
                    index: 0,
                    content: this.gauge.nativeElement,
                },
            ],
        });
    }
}
