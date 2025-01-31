import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { EditorComponent, ToolbarItem } from '@smart-webcomponents-angular/editor';

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
	
    maxCharCount: number = 1000;

    showCharCount: boolean = true;

    toolbarItems: ToolbarItem[] = ['bold', 'italic', 'FontSize', 'fontColor', 'BackgroundColor', 'table', 'hyperlink',
        'removeLink', 'alignment', 'table', 'fontname', 'formats', 'splitmode'
    ] as ToolbarItem[];
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
    }
}