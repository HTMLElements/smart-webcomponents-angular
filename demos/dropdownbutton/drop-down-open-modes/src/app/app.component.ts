import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { ButtonComponent } from '@smart-webcomponents-angular/button';
import { DropDownButtonComponent } from '@smart-webcomponents-angular/dropdownbutton';
import { TabsComponent, TabItem } from '@smart-webcomponents-angular/tabs';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('buttonDefault', { read: ButtonComponent, static: false }) buttonDefault!: ButtonComponent;
    @ViewChild('buttonAuto', { read: ButtonComponent, static: false }) buttonAuto!: ButtonComponent;
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
    @ViewChild('buttonNone', { read: ButtonComponent, static: false }) buttonNone!: ButtonComponent;
    @ViewChild('dropdownbutton', { read: DropDownButtonComponent, static: false }) dropDownButton!: DropDownButtonComponent;
    @ViewChild('tabs', { read: TabsComponent, static: false }) tabs!: TabsComponent;
    @ViewChild('log', { read: ElementRef, static: false }) log!: ElementRef;

    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code.

        const buttons = [this.buttonDefault, this.buttonAuto, this.button, this.buttonNone];

        buttons[0].addEventListener('click', (e: Event): void => {
            this.dropDownButton.dropDownOpenMode = 'default';

            for (let b = 0; b < buttons.length; b++) {
                buttons[b].disabled = buttons[b].nativeElement === e.currentTarget ? true : false;
            }
        });

        buttons[1].addEventListener('click', (e: Event): void => {
            this.dropDownButton.dropDownOpenMode = 'auto';

            for (let b = 0; b < buttons.length; b++) {
                buttons[b].disabled = buttons[b].nativeElement === e.currentTarget ? true : false;
            }
        });

        buttons[2].addEventListener('click', (e: Event): void => {
            this.dropDownButton.dropDownOpenMode = 'dropDownButton';

            for (let b = 0; b < buttons.length; b++) {
                buttons[b].disabled = buttons[b].nativeElement === e.currentTarget ? true : false;
            }
        });

        buttons[3].addEventListener('click', (e: Event): void => {
            this.dropDownButton.dropDownOpenMode = 'none';

            for (let b = 0; b < buttons.length; b++) {
                buttons[b].disabled = buttons[b].nativeElement === e.currentTarget ? true : false;
            }
        });

        this.dropDownButton.addEventListener('click', (event: any): void => {
            const log = this.log.nativeElement as HTMLDivElement;
            const target = event.target;

            if (this.dropDownButton.dropDownOpenMode !== 'dropDownButton') {
                log.innerHTML = 'DropDownButton clicked';
                return;
            }

            if (target.classList.contains('smart-action-button')) {
                log.textContent = 'ActionButton clicked';
            }
            else if (target.classList.contains('smart-drop-down-button')) {
                log.textContent = 'DropDownButton clicked';
            }
        });

        this.tabs.addEventListener('change', (event: any): void => {
            const tabsItems: HTMLCollection = this.tabs.nativeElement.getElementsByTagName('smart-tab-item');
            const tabIndex = event.detail.index;

            this.dropDownButton.placeholder = (<TabItem>tabsItems[tabIndex]).label || '';
        });

    }
}