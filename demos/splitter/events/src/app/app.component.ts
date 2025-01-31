import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { SplitterComponent } from '@smart-webcomponents-angular/splitter';

import { SplitterModule } from '@smart-webcomponents-angular/splitter';

import { DropDownListModule } from '@smart-webcomponents-angular/dropdownlist';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ SplitterModule, DropDownListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('splitter', { read: SplitterComponent, static: false }) splitter!: SplitterComponent;
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

        const that = this,
            smartSplitter: SplitterComponent = that.splitter,
            eventLog: HTMLDivElement = that.log.nativeElement;

        function getElement(event: CustomEvent): HTMLElement {
            const element = document.createElement('div');

            element.textContent = 'Type: ' + event.type;

            if (event.detail.x) {
                element.textContent += ', X: ' + event.detail.x + ', Y: ' + event.detail.y;
            }

            return element;
        }

        smartSplitter.addEventListener('resize', function (event: CustomEvent): void {
            if (!event.detail) {
                return;
            }

            eventLog.appendChild(getElement(event));
        } as EventListener);

        smartSplitter.addEventListener('expand', function (event: CustomEvent): void {
            eventLog.appendChild(getElement(event));
        } as EventListener);

        smartSplitter.addEventListener('collapse', function (event: CustomEvent): void {
            eventLog.appendChild(getElement(event));
        } as EventListener);

        smartSplitter.addEventListener('resizeStart', function (event: CustomEvent): void {
            eventLog.appendChild(getElement(event));
        } as EventListener);

        smartSplitter.addEventListener('resizeEnd', function (event: CustomEvent): void {
            eventLog.appendChild(getElement(event));
        } as EventListener);
    }
}