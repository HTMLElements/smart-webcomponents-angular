import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation, ElementRef } from '@angular/core';
import { KanbanComponent } from '@smart-webcomponents-angular/kanban';
import { GetKanbanData } from '../assets/data';
import { WindowComponent } from '@smart-webcomponents-angular/window';
import { InputComponent } from '@smart-webcomponents-angular/input';
import { PasswordTextBoxComponent } from '@smart-webcomponents-angular/passwordtextbox';
import { ButtonComponent } from '@smart-webcomponents-angular/button';

import { KanbanModule } from '@smart-webcomponents-angular/kanban';

import { WindowModule } from '@smart-webcomponents-angular/window';

import { InputModule } from '@smart-webcomponents-angular/input';

import { PasswordTextBoxModule } from '@smart-webcomponents-angular/passwordtextbox';

import { ButtonModule } from '@smart-webcomponents-angular/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ KanbanModule, WindowModule, InputModule, PasswordTextBoxModule, ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('kanban', { read: KanbanComponent, static: false }) kanban!: KanbanComponent;
    @ViewChild('window', { read: WindowComponent, static: false }) window!: WindowComponent;
    @ViewChild('input', { read: InputComponent, static: false }) input!: InputComponent;
    @ViewChild('passwordtextbox', { read: PasswordTextBoxComponent, static: false }) passwordtextbox!: PasswordTextBoxComponent;
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
    @ViewChild('loginInfo', { read: ElementRef, static: false }) loginInfo!: ElementRef;
    @ViewChild('loginAgain', { read: ElementRef, static: false }) loginAgain!: ElementRef;
    @ViewChild('pic', { read: ElementRef, static: false }) pic!: ElementRef;

    addNewButton = true;
    collapsible = true;
    currentUser = 6;
    dataSource = GetKanbanData();
    editable = true;
    taskActions = true;
    taskComments = true;
    userList = true;
    users = [
        { id: 0, name: 'Andrew', image: 'https://htmlelements.com/demos/images/people/andrew.png' },
        { id: 1, name: 'Anne', image: 'https://htmlelements.com/demos/images/people/anne.png', allowAdd: true, allowComment: true, allowDrag: true, allowEdit: true, allowRemove: true },
        { id: 2, name: 'Janet', image: 'https://htmlelements.com/demos/images/people/janet.png' },
        { id: 3, name: 'John', image: 'https://htmlelements.com/demos/images/people/john.png' },
        { id: 4, name: 'Laura', image: 'https://htmlelements.com/demos/images/people/laura.png' },
        { id: 5, name: 'Robert', image: 'https://htmlelements.com/demos/images/people/robert.png', allowAdd: true, allowComment: false, allowDrag: true, allowEdit: false, allowRemove: false },
        { id: 6, name: 'Guest', allowAdd: false, allowComment: false, allowDrag: false, allowEdit: false, allowRemove: false }
    ];
    columns = [
        { label: 'To do', dataField: 'toDo' },
        { label: 'In progress', dataField: 'inProgress' },
        { label: 'Testing', dataField: 'testing' },
        { label: 'Done', dataField: 'done' }
    ];

    loginAgainOnClick() {
        const that = this;

        that.window.open();
        that.input.value = '';
        that.passwordtextbox.value = '';
    }

    confirmOnClick() {
        const that = this;

        if (that.input.value === 'Anne' && that.passwordtextbox.value === '123') {
            that.kanban.currentUser = 1;
            that.window.close();
            that.loginInfo.nativeElement.innerHTML = 'Logged in as Anne';
            that.pic.nativeElement.style.backgroundImage = 'url("https://htmlelements.com/demos/images/people/anne.png")';
        }
        else if (that.input.value === 'Robert' && that.passwordtextbox.value === '123') {
            that.kanban.currentUser = 5;
            that.window.close();
            that.loginInfo.nativeElement.innerHTML = 'Logged in as Robert';
            that.pic.nativeElement.style.backgroundImage = 'url("https://htmlelements.com/demos/images/people/robert.png")';
        }
        else {
            const promptFooter = that.window.nativeElement.querySelector('.smart-footer');

            that.input.value = '';
            that.passwordtextbox.value = '';
            promptFooter?.classList.add('blink');
            setTimeout(() => promptFooter?.classList.remove('blink'), 2000);
        }
    }

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