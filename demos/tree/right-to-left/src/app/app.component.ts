import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { CheckBoxComponent } from '@smart-webcomponents-angular/checkbox';
import { TreeComponent } from '@smart-webcomponents-angular/tree';

import { CheckBoxModule } from '@smart-webcomponents-angular/checkbox';

import { TreeModule } from '@smart-webcomponents-angular/tree';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CheckBoxModule, TreeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('checkbox', { read: CheckBoxComponent, static: false }) checkbox!: CheckBoxComponent;
    @ViewChild('checkbox2', { read: CheckBoxComponent, static: false }) checkbox2!: CheckBoxComponent;
    @ViewChild('tree', { read: TreeComponent, static: false }) tree!: TreeComponent;


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

        that.checkbox.addEventListener('change', function (event: any) {
            const checked = event.detail.value;
            that.tree.showLines = checked;
        });
        that.checkbox2.addEventListener('change', function (event: any) {
            const checked = event.detail.value;
            that.tree.showRootLines = checked;
        });
    }
}