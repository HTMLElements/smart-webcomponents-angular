import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { KanbanColumn, KanbanComponent, KanbanSwimlane, KanbanUser } from '@smart-webcomponents-angular/kanban';

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

    data = [{
        'ID': 0,
        'dataField': 'done',
        'info': 'Research',
        'tags': 'initial',
        'progress': 100,
        'assignee': 2,
        'start': new Date(2020, 11, 30),
        'due': new Date(2021, 0, 13),
        'feedback': [],
        'category': 'q1'
    }, {
        'ID': 1,
        'dataField': 'toDo',
        'info': 'Displaying data from data source',
        'tags': 'data',
        'priority': 'high',
        'progress': 0,
        'assignee': 3,
        'start': null,
        'due': new Date(2021, 4, 3),
        'feedback': [{
            'text': 'Nulla sodales faucibus accumsan.',
            'assignee': 2,
            'time': new Date(2020, 11, 17, 1, 55)
        }, {
            'text': 'Aenean ultrices maximus ex id scelerisque. Suspendisse cursus maximus nulla, sed ornare lectus aliquet eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
            'assignee': 3,
            'time': '2020-12-18T06:43:33.614Z'
        }, {
            'text': 'Nulla sodales faucibus accumsan.',
            'assignee': 0,
            'time': '2020-12-20T18:43:33.614Z'
        }],
        'category': 'q2'
    }, {
        'ID': 2,
        'dataField': 'testing',
        'info': 'Showing cover and title',
        'tags': 'visual, property',
        'priority': 'high',
        'progress': 78,
        'assignee': 2,
        'start': new Date(2020, 11, 14),
        'due': new Date(2021, 3, 5),
        'feedback': [{
            'text': 'Curabitur at accumsan metus, rhoncus porttitor ligula.',
            'assignee': 0,
            'time': new Date(2020, 11, 23, 3, 13)
        }, {
            'text': 'Donec vitae dapibus mauris, quis cursus nibh.',
            'assignee': 3,
            'time': new Date(2020, 11, 24, 18, 2)
        }],
        'category': 'q2'
    }, {
        'ID': 3,
        'dataField': 'done',
        'info': 'Property validation',
        'tags': 'property',
        'toDoList': [{
            'text': 'addNewButton',
            'completed': true
        }, {
            'text': 'allowDrag',
            'completed': true
        }, {
            'text': 'cardHeight',
            'completed': true
        }, {
            'text': 'cellOrientation',
            'completed': true
        }, {
            'text': 'collapsible',
            'completed': true
        }, {
            'text': 'columns',
            'completed': true
        }],
        'assignee': 1,
        'start': new Date(2020, 0, 1),
        'due': new Date(2021, 0, 1),
        'feedback': [],
        'category': 'q1'
    }, {
        'ID': 4,
        'dataField': 'inProgress',
        'info': 'formatFunction and formatSettings',
        'tags': 'data, property',
        'progress': 17,
        'assignee': 0,
        'start': new Date(2020, 11, 4),
        'due': new Date(2021, 2, 19),
        'feedback': [],
        'category': 'q1'
    }, {
        'ID': 5,
        'dataField': 'testing',
        'info': 'Expand/collapse arrow',
        'tags': 'visual',
        'progress': 90,
        'assignee': 3,
        'start': new Date(2020, 10, 1),
        'due': new Date(2021, 2, 1),
        'feedback': [],
        'category': 'q1'
    }, {
        'ID': 7,
        'dataField': 'testing',
        'info': 'Virtual scrolling',
        'tags': 'scrolling, data',
        'progress': 10,
        'assignee': 3,
        'start': new Date(2020, 10, 1),
        'due': new Date(2021, 5, 1),
        'feedback': [{
            'text': 'Curabitur at accumsan metus, rhoncus porttitor ligula.',
            'assignee': 0,
            'time': new Date(2020, 10, 7, 13, 6)
        }, {
            'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'assignee': 0,
            'time': new Date(2021, 0, 1, 3, 15)
        }],
        'category': 'q2'
    }];

    addNewButton = true;
    collapsible = true;
    currentUser = 1;
    dataSource = this.data;
    dataSourceMap = {
        checklist: 'toDoList',
        comments: 'feedback',
        dueDate: 'due',
        id: 'ID',
        startDate: 'start',
        status: 'dataField',
        swimlane: 'category',
        tags: 'tags',
        text: 'info',
        userId: 'assignee'
    } as any;
    editable = true;
    swimlanes: KanbanSwimlane[] = [
        { label: 'Q1', dataField: 'q1' },
        { label: 'Q2', dataField: 'q2', color: '#C90086' }
    ];
    taskActions = true;
    taskComments = true;
    taskDue = true;
    taskProgress = true;
    users: KanbanUser[] = [
        { id: 0, name: 'Andrew', image: 'https://htmlelements.com/demos/images/people/andrew.png' },
        { id: 1, name: 'Anne', image: 'https://htmlelements.com/demos/images/people/anne.png' },
        { id: 2, name: 'Janet', image: 'https://htmlelements.com/demos/images/people/janet.png' },
        { id: 3, name: 'John', image: 'https://htmlelements.com/demos/images/people/john.png' },
        { id: 4, name: 'Laura', image: 'https://htmlelements.com/demos/images/people/laura.png' }
    ];
    columns: KanbanColumn[] = [
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