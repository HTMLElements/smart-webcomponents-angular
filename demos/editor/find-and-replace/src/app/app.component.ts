import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { EditorComponent, EditorContextMenu, ToolbarItem } from '@smart-webcomponents-angular/editor';

import { EditorModule } from '@smart-webcomponents-angular/editor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  EditorModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('editor', { read: EditorComponent, static: false }) editor!: EditorComponent;

    //Properties
    toolbarItems: any = ['findAndReplace'];
    contextMenu: EditorContextMenu = 'browser';

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
}