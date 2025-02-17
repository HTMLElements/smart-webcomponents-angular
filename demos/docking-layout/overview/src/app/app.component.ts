import { Component, ViewChild, AfterViewInit, ViewEncapsulation, Inject, ElementRef, ViewContainerRef } from '@angular/core';
import { Smart, DockingLayoutComponent } from '@smart-webcomponents-angular/dockinglayout';
import { SliderComponent } from '@smart-webcomponents-angular/slider';
import { MultilineTextBoxComponent } from '@smart-webcomponents-angular/multilinetextbox';

import { DockingLayoutModule } from '@smart-webcomponents-angular/dockinglayout';

import { TabsModule } from '@smart-webcomponents-angular/tabs';

import { TextBoxModule } from '@smart-webcomponents-angular/textbox';

import { SliderModule } from '@smart-webcomponents-angular/slider';

import { MultilineTextBoxModule } from '@smart-webcomponents-angular/multilinetextbox';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ FormsModule, DockingLayoutModule, TabsModule, TextBoxModule, SliderModule, MultilineTextBoxModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('slider', { read: SliderComponent, static: false }) slider!: SliderComponent;
    @ViewChild('multilinetextbox', { read: MultilineTextBoxComponent, static: false }) multilinetextbox!: MultilineTextBoxComponent;
    @ViewChild('docking', { read: DockingLayoutComponent, static: false }) docking!: DockingLayoutComponent;

    layout = [
        {
            type: 'LayoutGroup',
            orientation: 'horizontal',
            items: [
                {
                    type: 'LayoutGroup',
                    items: [
                        {
                            type: 'LayoutPanel',
                            id: 'tabPanel',
                            label: 'Input',
                            items: [{
                                label: 'TextBox Tab',
                                content: ''
                            },
                            {
                                label: 'Slider Tab',
                                content: ''
                            }],
                            size: '50%'
                        },
                        {
                            type: 'LayoutPanel',
                            label: 'Output',
                            items: [
                                {
                                    id: 'outputTab',
                                    label: 'Output',
                                    headerPosition: 'none',
                                    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                                }
                            ]
                        }
                    ],
                    orientation: 'vertical',
                    size: '50%'
                },
                {
                    id: 'item0',
                    label: 'Tabs 0',
                    items: [{
                        label: 'Tab A',
                        selected: true,
                        content: 'What is Lorem Ipsum?\n' +
                            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of' + 'type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in ' + 'the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n' +
                            'Why do we use it?\n' +
                            'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal ' + 'distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their' + 'default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on ' + 'purpose (injected humour and the like).'
                    }]
                }]
        }];

    handleMultilineTextBoxChange(event: Event) {
        if (document.getElementById('outputTab')) {
            const target = event.target as MultilineTextBoxComponent
            document.getElementById('outputTab')!.innerHTML = target?.value;
        }
    }

    handleSliderChange(event: CustomEvent) {
        if (document.getElementById('outputTab')) {
            document.getElementById('outputTab')!.innerHTML = event.detail.value;
        }
    }

    ngAfterViewInit(): void {
        this.docking.update('tabPanel',
            {
                type: 'LayoutPanel',
                id: 'tabPanel',
                label: 'Input',
                items: [{
                    index: 0,
                    label: 'TextBox Tab',
                    content: this.multilinetextbox.nativeElement
                },
                {
                    index: 1,
                    label: 'Slider Tab',
                    content: this.slider.nativeElement
                }],
                size: '50%'
            }
        );
    }
}
