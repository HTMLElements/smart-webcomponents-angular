import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { EditorComponent } from '@smart-webcomponents-angular/editor';

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

    toolbarMode: string = 'singleLineRibbon';
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	init(): void {
		// init code.
        this.editor.expandToolbar();
    };
}