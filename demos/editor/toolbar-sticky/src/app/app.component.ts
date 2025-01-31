import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { SwitchButtonComponent } from '@smart-webcomponents-angular/switchbutton';
import { EditorComponent } from '@smart-webcomponents-angular/editor';

import { SwitchButtonModule } from '@smart-webcomponents-angular/switchbutton';

import { EditorModule } from '@smart-webcomponents-angular/editor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  SwitchButtonModule, EditorModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('switchbutton', { read: SwitchButtonComponent, static: false }) switchbutton!: SwitchButtonComponent;
    @ViewChild('editor', { read: EditorComponent, static: false }) editor!: EditorComponent;

    toolbarItems: any = ['Bold', 'Italic', 'Underline', 'StrikeThrough',
        'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
        'LowerCase', 'UpperCase', '|',
        'Formats', 'Alignment', 'OrderedList', 'UnorderedList',
        'Outdent', 'Indent', '|',
        'hyperlink', 'Image', '|', 'ClearFormat',
        'SourceCode', 'FullScreen', '|', 'Undo', 'Redo'];

    toolbarSticky: boolean = true;

    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
    }

    handleChange(event: CustomEvent) {
        this.editor.toolbarSticky = event.detail.value;
    }
}