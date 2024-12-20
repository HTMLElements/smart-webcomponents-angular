﻿import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { KanbanComponent } from '@smart-webcomponents-angular/kanban';
import { GetKanbanData } from '../assets/data';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('kanban', { read: KanbanComponent, static: false }) kanban!: KanbanComponent;

    addNewButton = true;
    addNewColumn = true;
    collapsible = true;
    dataSource = GetKanbanData();
    taskActions = true;
    taskDue = true;
    taskProgress = true;
    users = [
        { id: 0, name: 'Andrew', image: 'https://htmlelements.com/demos/images/people/andrew.png' },
        { id: 1, name: 'Anne', image: 'https://htmlelements.com/demos/images/people/anne.png' },
        { id: 2, name: 'Janet', image: 'https://htmlelements.com/demos/images/people/janet.png' },
        { id: 3, name: 'John', image: 'https://htmlelements.com/demos/images/people/john.png' },
        { id: 4, name: 'Laura', image: 'https://htmlelements.com/demos/images/people/laura.png' }
    ];
    columns = [
        { label: 'To do', dataField: 'toDo' },
        { label: 'In progress', dataField: 'inProgress' },
        { label: 'Testing', dataField: 'testing' },
        { label: 'Done', dataField: 'done', addNewButton: false }
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