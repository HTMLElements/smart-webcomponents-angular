import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MultilineTextBoxComponent } from '@smart-webcomponents-angular/multilinetextbox';
import { TreeComponent } from '@smart-webcomponents-angular/tree';

import { MultilineTextBoxModule } from '@smart-webcomponents-angular/multilinetextbox';

import { TreeModule } from '@smart-webcomponents-angular/tree';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ MultilineTextBoxModule, TreeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('multilinetextbox', { read: MultilineTextBoxComponent, static: false }) multilinetextbox!: MultilineTextBoxComponent;
    @ViewChild('tree', { read: TreeComponent, static: false }) tree!: TreeComponent;
    @ViewChild('tree2', { read: TreeComponent, static: false }) tree2!: TreeComponent;


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

        that.tree.addEventListener('dragStart', function (event: any) {
            if (event.detail.items[0].label === 'Communities') {
                event.preventDefault();
            }
        });
        that.tree.addEventListener('dragEnd', function (event: any) {
            if (event.detail.items[0].label === 'Financial services') {
                event.preventDefault();
                return;
            }
            if (!event.detail.container.closest('smart-tree')) {
                const textBox = event.detail.target.closest('smart-multiline-text-box');
                if (textBox) {
                    textBox.value = event.detail.items[0].label;
                }
            }
        });
    }
}