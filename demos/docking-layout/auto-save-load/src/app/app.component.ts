import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { DockingLayoutComponent } from '@smart-webcomponents-angular/dockinglayout';
import { ButtonComponent } from '@smart-webcomponents-angular/button';
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
    @ViewChild('dockinglayout', { read: DockingLayoutComponent, static: false }) dockinglayout!: DockingLayoutComponent;
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;

    layout: Array<object> = [
        {
            type: "LayoutGroup",
            items: [
                {
                    type: "LayoutGroup",
                    items: [
                        {
                            type: "LayoutGroup",
                            items: [
                                {
                                    type: "LayoutPanel",
                                    label: "Tab 10",
                                    items: [
                                        {
                                            id: 'tabItem10',
                                            type: "LayoutPanelItem",
                                            label: "Tab 10"
                                        }
                                    ],
                                    size: 153
                                },
                                {
                                    type: "LayoutPanel",
                                    label: "Tabs 1",
                                    items: [
                                        {
                                            id: "tabItem1",
                                            type: "LayoutPanelItem",
                                            label: "Tab 1"
                                        }
                                    ],
                                    size: 218
                                }
                            ],
                            orientation: "horizontal",
                            size: 203
                        },
                        {
                            type: "LayoutPanel",
                            label: "Tab 6",
                            tabPosition: "hidden",
                            items: [
                                {
                                    id: "tabItem6",
                                    type: "LayoutPanelItem",
                                    label: "Tab 6"
                                }
                            ],
                            size: 739
                        }
                    ],
                    orientation: "vertical",
                    size: 381
                },
                {
                    type: "LayoutGroup",
                    items: [
                        {
                            type: "LayoutPanel",
                            label: "Tabs 2",
                            items: [
                                {
                                    id: "tabItem2",
                                    type: "LayoutPanelItem",
                                    label: "Tab 2"
                                }
                            ],
                            size: 604
                        },
                        {
                            type: "LayoutPanel",
                            label: "Tabs 3",
                            items: [
                                {
                                    id: "tabItem7",
                                    type: "LayoutPanelItem",
                                    label: "Tab 7"
                                }
                            ],
                            size: 338,
                            resizeMode: 'both'
                        }
                    ],
                    orientation: "vertical",
                    size: 334
                }
            ],
            orientation: "horizontal"
        }
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

    initializeLayout(event: any) {
        const data = [],
            urlString = 'https://picsum.photos/1000/500/?image=',
            gauge1: Gauge = document.createElement('smart-gauge'),
            carousel: Carousel = document.createElement('smart-carousel'),
            multiLineTextBox: MultilineTextBox = document.createElement('smart-multiline-text-box'),
            tank: Tank = document.createElement('smart-tank'),
            progressBar1: ProgressBar = document.createElement('smart-progress-bar');

        for (let i = 0; i < 5; i++) {
            const item = {
                image: urlString + (100 + i)
            };

            data.push(item);
        }

        carousel.dataSource = data;
        carousel.swipe = true;
        carousel.slideShow = true;
        carousel.loop = true;
        carousel.keyboard = true;
        multiLineTextBox.value = 'What is Lorem Ipsum? \n\n' +
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a' + 'galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially' + ' unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker' + 'including versions of Lorem Ipsum.';
        tank.max = 50;
        tank.value = 25;
        progressBar1.showProgressValue = true;

        if (this.dockinglayout.items.length > 0) {
            this.dockinglayout.nativeElement.querySelector('#tabItem10')?.appendChild(progressBar1);
            this.dockinglayout.nativeElement.querySelector('#tabItem7')?.appendChild(gauge1);
            this.dockinglayout.nativeElement.querySelector('#tabItem6')?.appendChild(carousel);
            this.dockinglayout.nativeElement.querySelector('#tabItem2')?.appendChild(multiLineTextBox);
            this.dockinglayout.nativeElement.querySelector('#tabItem1')?.appendChild(tank);

            gauge1.addEventListener('change', function (event: CustomEvent): void {
                progressBar1.value = event.detail.value;
            } as EventListener);
        }

        this.button.disabled = true;
    }

    clearState(event: any): void {
        this.dockinglayout.clearState();
    }
}