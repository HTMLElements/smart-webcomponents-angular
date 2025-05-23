import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { KanbanComponent } from '@smart-webcomponents-angular/kanban';
import { WindowComponent } from '@smart-webcomponents-angular/window';
import { GetKanbanData } from '../assets/data';

import { KanbanModule } from '@smart-webcomponents-angular/kanban';

import { WindowModule } from '@smart-webcomponents-angular/window';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  KanbanModule, WindowModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('kanban', { read: KanbanComponent, static: false }) kanban!: KanbanComponent;
    @ViewChild('window', { read: WindowComponent, static: false }) window!: WindowComponent;

    addNewColumn = true;
    allowColumnRemove = true;
    collapsible = true;
    addNewButton = true;
    editable = true;
    columnActions = true;
    columnEditMode = 'menu';
    columnFooter = true;
    columnSummary = true;
    columnColors = true;
    columnColorEntireSurface = true;
    dataSource = GetKanbanData();
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
    columns = [
        { color: '#33B679', label: 'To do', dataField: 'toDo', allowHide: false },
        { color: '#8E24AA', label: 'In progress', dataField: 'inProgress' },
        { color: '#039BE5', label: 'Testing', dataField: 'testing' },
        { color: '#DD5347', label: 'Done', dataField: 'done', addNewButton: false }
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


        this.kanban.addEventListener('taskDoubleClick', ((event: CustomEvent) => {
            const task = event.detail.value;

            this.window.label = task.text;
            const window = document.querySelector('smart-window');
            if (window) {
                window.innerHTML = `Text: ${task.text}<br/><br/>
            Due Date: ${task.dueDate}<br/><br/>
            Tags: ${task.tags}<br/><br/>
            Priority: ${task.priority}<br/><br/>
            <img style="max-width: 100%;" src="https://www.htmlelements.com/demos/images/admin-template.png"/>`
            }

            this.window.open();

            event.preventDefault();
        }) as EventListener)

    }
}