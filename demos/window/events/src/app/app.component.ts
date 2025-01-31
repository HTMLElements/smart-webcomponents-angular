import { Component, ViewChild, OnInit, AfterViewInit, ElementRef, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from '@smart-webcomponents-angular/button';
import { WindowComponent } from '@smart-webcomponents-angular/window';

import { ButtonModule } from '@smart-webcomponents-angular/button';

import { WindowModule } from '@smart-webcomponents-angular/window';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  ButtonModule, WindowModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
    @ViewChild('window', { read: WindowComponent, static: false }) smartWindow!: WindowComponent;
    @ViewChild('log', { read: ElementRef, static: false }) log!: ElementRef;

    onButtonClick(event: any): void {
        const smartWindow = this.smartWindow;

        smartWindow.opened ? smartWindow.close() : smartWindow.open();
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

        const smartWindow = this.smartWindow,
            eventLog = this.log.nativeElement;

        function getElement(event: CustomEvent): HTMLDivElement {
            const element = document.createElement('div');

            element.textContent = 'Type: ' + event.type;

            if (event.detail.x) {
                element.textContent += ', X: ' + event.detail.x + ', Y: ' + event.detail.y;
            }
            return element;
        }

        smartWindow.addEventListener('resize', function (event: CustomEvent): void {
            eventLog.appendChild(getElement(event));
        } as EventListener);
        
        smartWindow.addEventListener('drag', function (event: CustomEvent): void {
            eventLog.appendChild(getElement(event));
        } as EventListener);
        
        smartWindow.addEventListener('collapse', function (event: CustomEvent): void {
            eventLog.appendChild(getElement(event));
        } as EventListener);

        smartWindow.addEventListener('expand', function (event: CustomEvent): void {
            eventLog.appendChild(getElement(event));
        } as EventListener);

        smartWindow.addEventListener('maximize', function (event: CustomEvent): void {
            eventLog.appendChild(getElement(event));
        } as EventListener);

        smartWindow.addEventListener('minimize', function (event: CustomEvent): void {
            eventLog.appendChild(getElement(event));
        } as EventListener);

        smartWindow.addEventListener('restore', function (event: CustomEvent): void {
            eventLog.appendChild(getElement(event));
        } as EventListener);

        smartWindow.addEventListener('open', function (event: CustomEvent): void {
            eventLog.appendChild(getElement(event));
        } as EventListener);

        smartWindow.addEventListener('opening', function (event: CustomEvent): void {
            eventLog.appendChild(getElement(event));
        } as EventListener);

        smartWindow.addEventListener('close', function (event: CustomEvent): void {
            eventLog.appendChild(getElement(event));
        } as EventListener);

        smartWindow.addEventListener('closing', function (event: CustomEvent): void {
            eventLog.appendChild(getElement(event));
        } as EventListener);

        smartWindow.addEventListener('dragStart', function (event: CustomEvent): void {
            eventLog.appendChild(getElement(event));
        } as EventListener);

        smartWindow.addEventListener('dragEnd', function (event: CustomEvent): void {
            eventLog.appendChild(getElement(event));
        } as EventListener);

        smartWindow.addEventListener('resizeStart', function (event: CustomEvent): void {
            eventLog.appendChild(getElement(event));
        } as EventListener);

        smartWindow.addEventListener('resizeEnd', function (event: CustomEvent): void {
            eventLog.appendChild(getElement(event));
        } as EventListener);
    }
}