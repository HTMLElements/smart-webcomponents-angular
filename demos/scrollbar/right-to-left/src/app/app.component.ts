import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation, ElementRef } from '@angular/core';
import { ScrollBarComponent, ScrollBar } from '@smart-webcomponents-angular/scrollbar';

import { ScrollBarModule } from '@smart-webcomponents-angular/scrollbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  ScrollBarModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('scrollbar', { read: ScrollBarComponent, static: false }) scrollbar!: ScrollBarComponent;
    @ViewChild('scrollbar2', { read: ScrollBarComponent, static: false }) scrollbar2!: ScrollBarComponent;
    @ViewChild('scrollbar3', { read: ScrollBarComponent, static: false }) scrollbar3!: ScrollBarComponent;
    @ViewChild('scrollbar4', { read: ScrollBarComponent, static: false }) scrollbar4!: ScrollBarComponent;
    @ViewChild('scrollbar5', { read: ScrollBarComponent, static: false }) scrollbar5!: ScrollBarComponent;
    @ViewChild('scrollbar6', { read: ScrollBarComponent, static: false }) scrollbar6!: ScrollBarComponent;
    @ViewChild('scrollbar7', { read: ScrollBarComponent, static: false }) scrollbar7!: ScrollBarComponent;
    @ViewChild('scrollbar8', { read: ScrollBarComponent, static: false }) scrollbar8!: ScrollBarComponent;
    @ViewChild('scrollbar9', { read: ScrollBarComponent, static: false }) scrollbar9!: ScrollBarComponent;
    @ViewChild('scrollbar10', { read: ScrollBarComponent, static: false }) scrollbar10!: ScrollBarComponent;
    @ViewChild('scrollbar11', { read: ScrollBarComponent, static: false }) scrollbar11!: ScrollBarComponent;
    @ViewChild('scrollbar12', { read: ScrollBarComponent, static: false }) scrollbar12!: ScrollBarComponent;
    @ViewChild('scrollbar13', { read: ScrollBarComponent, static: false }) scrollbar13!: ScrollBarComponent;
    @ViewChild('lowBatteryAlert', { read: ElementRef, static: false }) lowBatteryAlert!: ElementRef;
    @ViewChild('powerSaver', { read: ElementRef, static: false }) powerSaver!: ElementRef;


    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code.
        const that = this;

        function setIcon(event: CustomEvent) {
            let below = "", above = "", off = "";
            const slider = <ScrollBar>event.target;
            switch (slider) {
                case that.scrollbar9.nativeElement:
                    below = '<i class="material-icons">&#xE04D;</i>';
                    above = '<i class="material-icons">&#xE050;</i>';
                    off = '<i class="material-icons">&#xE04F;</i>';
                    break;
                case that.scrollbar10.nativeElement:
                    below = above = '<i class="material-icons">&#xE855;</i>';
                    off = '<i class="material-icons">&#xE857;</i>';
                    break;
                case that.scrollbar11.nativeElement:
                    below = '<i class="material-icons">&#xE7F5;</i>';
                    above = '<i class="material-icons">&#xE7F4;</i>';
                    off = '<i class="material-icons">&#xE7F6;</i>';
                    break;
            }

            if (!slider.previousElementSibling) { return }

            if (slider.value === slider.min) {
                slider.previousElementSibling.innerHTML = off;
            }
            else if (slider.value || 0 < (slider.max || 0) / 2) {
                slider.previousElementSibling.innerHTML = below;
            }
            else {
                slider.previousElementSibling.innerHTML = above;
            }
        }
        function setBatteryLevel(event: CustomEvent) {
            const slider = <ScrollBar>event.target;
            if (slider === that.scrollbar12.nativeElement) {
                that.lowBatteryAlert.nativeElement.textContent = (slider.value || 0).toString();
            }
            else {
                that.powerSaver.nativeElement.textContent = (slider.value || 0).toString();
            }
        }
        that.scrollbar9.addEventListener('change', setIcon as EventListener);
        that.scrollbar10.addEventListener('change', setIcon as EventListener);
        that.scrollbar11.addEventListener('change', setIcon as EventListener);
        that.scrollbar12.addEventListener('change', setBatteryLevel as EventListener);
        that.scrollbar13.addEventListener('change', setBatteryLevel as EventListener);
    }
}