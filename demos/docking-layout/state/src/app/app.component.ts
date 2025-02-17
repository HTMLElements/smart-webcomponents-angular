import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation, ElementRef } from '@angular/core';
import { ButtonComponent } from '@smart-webcomponents-angular/button';
import { DockingLayoutComponent } from '@smart-webcomponents-angular/dockinglayout';
import { GaugeComponent, Gauge } from '@smart-webcomponents-angular/gauge';
import { TankComponent, Tank } from '@smart-webcomponents-angular/tank';
import { MultilineTextBoxComponent, MultilineTextBox } from '@smart-webcomponents-angular/multilinetextbox';
import { ProgressBarComponent, ProgressBar } from '@smart-webcomponents-angular/progressbar';
import { CarouselComponent, Carousel } from '@smart-webcomponents-angular/carousel';

import { ButtonModule } from '@smart-webcomponents-angular/button';

import { DockingLayoutModule } from '@smart-webcomponents-angular/dockinglayout';

import { GaugeModule } from '@smart-webcomponents-angular/gauge';

import { CarouselModule } from '@smart-webcomponents-angular/carousel';

import { MultilineTextBoxModule } from '@smart-webcomponents-angular/multilinetextbox';

import { ProgressBarModule } from '@smart-webcomponents-angular/progressbar';

import { TankModule } from '@smart-webcomponents-angular/tank';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ DockingLayoutModule, ButtonModule, GaugeModule, CarouselModule, MultilineTextBoxModule, ProgressBarModule, TankModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('log', { read: ElementRef, static: false }) log!: ElementRef;
    @ViewChild('dockingLayout', { read: DockingLayoutComponent, static: false })
    dockingLayout!: DockingLayoutComponent;

    currentState: any;

    initializeLayout(event: any) {
        const that = this,
            dockingLayout = that.dockingLayout,
            data: Array<object> = [],
            urlString = 'https://picsum.photos/1000/500/?image=',
            gauge1: Gauge = document.createElement('smart-gauge'),
            gauge2: Gauge = document.createElement('smart-gauge'),
            carousel: Carousel = document.createElement('smart-carousel'),
            multiLineTextBox: MultilineTextBox = document.createElement(
                'smart-multiline-text-box'
            ),
            tank: Tank = document.createElement('smart-tank'),
            progressBar1: ProgressBar = document.createElement('smart-progress-bar'),
            progressBar2: ProgressBar = document.createElement('smart-progress-bar');

        dockingLayout.layout = [
            {
                type: 'LayoutGroup',
                items: [
                    {
                        type: 'LayoutGroup',
                        items: [
                            {
                                type: 'LayoutGroup',
                                items: [
                                    {
                                        type: 'LayoutPanel',
                                        label: 'Tab 10',
                                        items: [
                                            {
                                                id: 'tabItem10',
                                                type: 'LayoutPanelItem',
                                                label: 'Tab 10',
                                                selected: true,
                                            },
                                        ],
                                        size: 153,
                                    },
                                    {
                                        type: 'LayoutPanel',
                                        label: 'Tabs 1',
                                        items: [
                                            {
                                                id: 'tabItem1',
                                                type: 'LayoutPanelItem',
                                                label: 'Tab 1',
                                                selected: true,
                                            },
                                        ],
                                        size: 218,
                                    },
                                ],
                                orientation: 'horizontal',
                                size: 203,
                            },
                            {
                                type: 'LayoutPanel',
                                label: 'Tab 6',
                                tabPosition: 'hidden',
                                items: [
                                    {
                                        id: 'tabItem6',
                                        type: 'LayoutPanelItem',
                                        label: 'Tab 6',
                                        selected: true,
                                    },
                                ],
                                size: 739,
                            },
                        ],
                        orientation: 'vertical',
                        size: 381,
                    },
                    {
                        type: 'LayoutGroup',
                        items: [
                            {
                                type: 'LayoutPanel',
                                label: 'Tabs 2',
                                items: [
                                    {
                                        id: 'tabItem2',
                                        type: 'LayoutPanelItem',
                                        label: 'Tab 2',
                                        selected: true,
                                    },
                                ],
                                size: 604,
                            },
                            {
                                type: 'LayoutPanel',
                                label: 'Tabs 3',
                                items: [
                                    {
                                        id: 'tabItem7',
                                        type: 'LayoutPanelItem',
                                        label: 'Tab 7',
                                        selected: true,
                                    },
                                    {
                                        id: 'tabItem8',
                                        type: 'LayoutPanelItem',
                                        label: 'Tab 8',
                                    },
                                ],
                                size: 338,
                                resizeMode: 'both',
                            },
                        ],
                        orientation: 'vertical',
                        size: 334,
                    },
                ],
                orientation: 'horizontal',
            },
        ];

        for (let i = 0; i < 5; i++) {
            const item = {
                image: urlString + (100 + i),
            };
            data.push(item);
        }

        gauge2.analogDisplayType = 'fill';
        gauge2.startAngle = 0;
        gauge2.endAngle = 180;
        gauge2.digitalDisplay = true;
        gauge2.digitalDisplayPosition = 'center';
        carousel.dataSource = data;
        carousel.swipe = true;
        carousel.slideShow = true;
        carousel.loop = true;
        carousel['indicators'] = true;
        carousel.keyboard = true;
        multiLineTextBox.value =
            'What is Lorem Ipsum? \n\n' +
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a" +
            'galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially' +
            ' unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker' +
            'including versions of Lorem Ipsum.';
        tank.max = 50;
        tank.value = 25;
        progressBar1.showProgressValue = true;
        progressBar2.showProgressValue = true;

        const gauge1ChangeHandler = (event: CustomEvent) => {
            progressBar1.value = event.detail.value;
        }

        const gauge2ChangeHandler = (event: CustomEvent) => {
            progressBar2.value = event.detail.value;
        }

        gauge1.addEventListener('change', gauge1ChangeHandler as EventListener);

        gauge2.addEventListener('change', gauge2ChangeHandler as EventListener);

        if (dockingLayout.items.length > 0) {
            dockingLayout.nativeElement
                .querySelector('#tabItem10')
                ?.appendChild(progressBar1);
            dockingLayout.nativeElement
                .querySelector('#tabItem10')
                ?.appendChild(progressBar2);
            dockingLayout.nativeElement
                .querySelector('#tabItem7')
                ?.appendChild(gauge1);
            dockingLayout.nativeElement
                .querySelector('#tabItem8')
                ?.appendChild(gauge2);
            dockingLayout.nativeElement
                .querySelector('#tabItem6')
                ?.appendChild(carousel);
            dockingLayout.nativeElement
                .querySelector('#tabItem2')
                ?.appendChild(multiLineTextBox);
            dockingLayout.nativeElement.querySelector('#tabItem1')?.appendChild(tank);

            gauge1.addEventListener('change', gauge1ChangeHandler as EventListener);
        }

        dockingLayout.getJSONStructure().then((state) => {
            that.log.nativeElement.innerHTML = JSON.stringify(state, null, 4);
        });
    }

    clearState(): void {
        this.dockingLayout.clearState();
    }

    saveState() {
        this.dockingLayout.saveState();
    }

    saveCurrentState() {
        this.dockingLayout.getState().then((state) => {
            this.currentState = state;
        });
    }

    loadState() {
        this.dockingLayout.loadState(this.currentState);
    }

    handleStateChange() {
        this.dockingLayout.getJSONStructure().then((state) => {
            this.log.nativeElement.innerHTML = JSON.stringify(state, null, 4);
        });
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
        this.dockingLayout.getJSONStructure().then((state) => {
            this.log.nativeElement.innerHTML = JSON.stringify(state, null, 4);
        });
    }
}
