import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { CheckBoxComponent } from '@smart-webcomponents-angular/checkbox';
import { SortableComponent } from '@smart-webcomponents-angular/sortable';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('checkbox', { read: CheckBoxComponent, static: false }) checkbox!: CheckBoxComponent;
    @ViewChild('sortable', { read: SortableComponent, static: false }) sortable!: SortableComponent;


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
        document.getElementById('handle')?.addEventListener('change', function (event: CustomEvent) {
            if (event.detail.value) {
                that.sortable.dragMode = 'handle';
                that.sortable.handleVisibility = 'visible';
            }
            else {
                that.sortable.dragMode = 'item';
            }
        } as EventListener);


    }
}