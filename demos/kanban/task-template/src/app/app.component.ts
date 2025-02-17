import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { KanbanComponent } from '@smart-webcomponents-angular/kanban';
import { GetKanbanData } from '../assets/data';

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
    dataSource = GetKanbanData();
    editable = true;
    columns = [
        { label: 'To do', dataField: 'toDo' },
        { label: 'In progress', dataField: 'inProgress' },
        { label: 'Testing', dataField: 'testing' },
        { label: 'Done', dataField: 'done' }
    ];
    createImageThumbs = (settings: { data: any, task: HTMLDivElement, text: string, template: string }) => {

        if (!settings.data.checklist) {
            return settings.text;
        }

        let toInclude = '';
        settings.data.checklist.forEach((subtask: any) => {
            if (subtask.completed) {
                toInclude += `<div class="thumb" style="background-image: url('${subtask.text}');"></div>`;
            }
        });
        if (toInclude) {
            toInclude = `<div class="gallery">${toInclude}</div>`;
        }
        settings.text = `<span>${settings.text}</span>${toInclude}`;

        return
    }
    textTemplate = (settings: { data: any, task: HTMLDivElement, text: string, template: string }) => {
        const data = settings.data;
        const text = settings.text;

        if (data.id === 16) {
            this.createImageThumbs(settings);
            return;
        }
        if (data.priority === 'high' && data.status !== 'done') {
            data.color = 'orangered';
            settings.template = '#kanbanTemplateHighPriority'; // references a template element in the DOM
            return;
        }
        else if (data.color === 'orangered') {
            data.color = null; // restores default color
        }
        if (data.checklist) {
            let toComplete = '';
            data.checklist.forEach((subtask: { completed: boolean, text: string }) => {
                if (!subtask.completed) {
                    toComplete += `<li>${subtask.text}</li>`;
                }
            });
            if (toComplete) {
                toComplete = `<br /><br /><span>Remaining tasks:</span><ul>${toComplete}</ul>`;
            }
            settings.text = `<span>${text}</span>${toComplete}`;
        }
    };

    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code.
        this.dataSource.push({
            id: 16,
            text: 'Improve performance',
            status: 'inProgress',
            checklist: [
                { text: 'https://htmlelements.com/demos/images/card-demo-chart-1.png', completed: true },
                { text: 'https://htmlelements.com/demos/images/card-demo-chart-2.png', completed: false },
                { text: 'https://htmlelements.com/demos/images/card-demo-chart-3.png', completed: true },
                { text: 'https://htmlelements.com/demos/images/card-demo-chart-4.png', completed: true }
            ]
        });
    }
}