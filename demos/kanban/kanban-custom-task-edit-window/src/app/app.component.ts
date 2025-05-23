import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Dialog } from '@smart-webcomponents-angular';
import { KanbanComponent } from '@smart-webcomponents-angular/kanban';
import { GetKanbanData } from '../assets/data';

import { KanbanModule } from '@smart-webcomponents-angular/kanban';

import { NumberInputModule } from '@smart-webcomponents-angular/numberinput';

import { InputModule } from '@smart-webcomponents-angular/input';

import { DateInputModule } from '@smart-webcomponents-angular/dateinput';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  KanbanModule, NumberInputModule, InputModule, DateInputModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('kanban', { read: KanbanComponent, static: false }) kanban!: KanbanComponent;

    collapsible = true;
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
    taskCustomFields = [
        {
            label: 'My Field', dataField: 'customField'
        },
        {
            label: 'My Date Field', dataField: 'customField2', editor: 'dateInput'
        },
        {
            label: 'My Number Field', dataField: 'customField3'
        }
    ];
    dialogCustomizationFunction = (dialog: any, task: any, editors: any, labels: any) => {
        dialog.label = 'My dialog'

        for (let key in editors) {
            switch (key) {
                case 'tabs':
                case 'status':
                case 'text':
                case 'progress':
                case 'description':
                case 'dueDate':
                case 'startDate':
                case 'priority':
                case 'color':
                case 'userId':
                case 'tags':
                    editors[key].style.display = 'none';

                    if (labels[key]) {
                        labels[key].style.display = 'none';
                    }
                    break;
            }
        }


        if (!editors.customField) {
            // custom field 1
            const input = document.createElement('smart-input');
            input.setAttribute('data-field', 'customField');
            input.value = task.data['customField'] ? task.data['customField'] : '';

            const label = document.createElement('label');
            label.innerHTML = 'Custom field';

            dialog.content.appendChild(label);
            dialog.content.appendChild(input);

            editors.customField = input;

            // custom field 2

            const input2 = document.createElement('smart-date-input');
            input2.setAttribute('data-field', 'customField2');
            input2.value = task.data['customField2'] ? task.data['customField2'] : '';

            const label2 = document.createElement('label');
            label2.innerHTML = 'Custom field 2';
            
            dialog.content.appendChild(label2);
            dialog.content.appendChild(input2);

            editors.customField2 = input2;

            // custom field 3

            const input3 = document.createElement('smart-number-input');
            input3.setAttribute('data-field', 'customField3');
            input3.value = task.data['customField3'] ? task.data['customField3'] : '';

            const label3 = document.createElement('label');
            label3.innerHTML = 'Custom field 3';

            dialog.content.appendChild(label3);
            dialog.content.appendChild(input3);

            editors.customField3 = input3;
        }
        else {
            editors.customField.value = task.data['customField'] ? task.data['customField'] : '';
            editors.customField2.value = task.data['customField2'] ? task.data['customField2'] : '';
            editors.customField3.value = task.data['customField3'] ? task.data['customField3'] : '';
        }
        /* dialog editors
        text 
        description
        tags
        userId
        status
        swimlane
        swimlaneLabel
        startDate
        dueDate
        progress
        priority
        color
        newSubtask
        checklist
        template
        created
        createdDate
        updated
        updatedDate
        tabs
        detailsTab
        commentsTab
        subtasksTab
        historyTab
        fieldsTab
        */
    };
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



    }
}