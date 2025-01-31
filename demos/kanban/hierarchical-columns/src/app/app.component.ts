import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { KanbanColumn, KanbanComponent } from '@smart-webcomponents-angular/kanban';
import { GetKanbanHierarchicalData } from '../assets/data';

import { KanbanModule } from '@smart-webcomponents-angular/kanban';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  KanbanModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('kanban', { read: KanbanComponent, static: false }) kanban!: KanbanComponent;

    collapsible = true;
    dataSource = GetKanbanHierarchicalData();
    columns = [
        { label: 'To do', dataField: 'toDo' },
        { label: 'In progress', dataField: 'inProgress' },
        {
            label: 'Testing', dataField: 'testing', orientation: 'horizontal', columns: [
                {
                    label: 'Manual testing',
                    dataField: 'manualTesting',
                    columns: [
                        { label: 'Desktop devices', dataField: 'desktop' },
                        { label: 'Mobile devices', dataField: 'mobile' }
                    ]
                },
                { label: 'Unit testing', dataField: 'unitTesting' }
            ]
        },
        { label: 'Done', dataField: 'done' }
    ] as KanbanColumn[];

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