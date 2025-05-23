import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { KanbanComponent } from '@smart-webcomponents-angular/kanban';
import { GetKanbanData } from '../assets/data';

import { KanbanModule } from '@smart-webcomponents-angular/kanban';

import { NumberInputModule } from '@smart-webcomponents-angular/numberinput';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  KanbanModule, NumberInputModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('kanban', { read: KanbanComponent, static: false }) kanban!: KanbanComponent;

    collapsible = true;
    dataSource = GetKanbanData();
    columns = [
        { color: '#33B679', label: 'To do', dataField: 'toDo', allowHide: false },
        { color: '#8E24AA', label: 'In progress', dataField: 'inProgress' },
        { color: '#039BE5', label: 'Testing', dataField: 'testing' },
        { color: '#DD5347', label: 'Done', dataField: 'done', addNewButton: false }
    ];
    addNewColumn = true;
    allowColumnRemove = true;
    addNewButton = true;
    editable = true;
    columnActions = true;
    columnWidth = 350;
    addNewColumnWidth = 150;
    columnEditMode = 'menu';
    columnFooter = true;
    columnSummary = true;
    columnColors = true;
    columnColorEntireSurface = true;
    allowColumnEdit = true;
    allowColumnReorder = true;
    taskActions = true;
    taskDue = true;
    taskComments = true;
    currentUser = 0;
    taskProgress = true;
    users = [
        { id: 0, name: 'Andrew', image: 'https://htmlelements.com/demos/images/people/andrew.png' },
        { id: 1, name: 'Anne', image: 'https://htmlelements.com/demos/images/people/anne.png' },
        { id: 2, name: 'Janet', image: 'https://htmlelements.com/demos/images/people/janet.png' },
        { id: 3, name: 'John', image: 'https://htmlelements.com/demos/images/people/john.png' },
        { id: 4, name: 'Laura', image: 'https://htmlelements.com/demos/images/people/laura.png' }
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
    }
}