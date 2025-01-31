import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { FileUploadComponent } from '@smart-webcomponents-angular/fileupload';

import { FileUploadModule } from '@smart-webcomponents-angular/fileupload';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  FileUploadModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('fileupload', { read: FileUploadComponent, static: false }) fileupload!: FileUploadComponent;


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