import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MultilineTextBoxComponent } from '@smart-webcomponents-angular/multilinetextbox';
import { RadioButtonComponent } from '@smart-webcomponents-angular/radiobutton';

import { MultilineTextBoxModule } from '@smart-webcomponents-angular/multilinetextbox';

import { RadioButtonModule } from '@smart-webcomponents-angular/radiobutton';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ MultilineTextBoxModule, RadioButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('multilinetextbox', { read: MultilineTextBoxComponent, static: false }) multilinetextbox!: MultilineTextBoxComponent;
	@ViewChild('radiobutton', { read: RadioButtonComponent, static: false }) radiobutton!: RadioButtonComponent;
	@ViewChild('radiobutton2', { read: RadioButtonComponent, static: false }) radiobutton2!: RadioButtonComponent;


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

		that.radiobutton.addEventListener('change', function () {
			that.multilinetextbox.displayMode = 'default';
		});
		that.radiobutton2.addEventListener('change', function () {
			that.multilinetextbox.displayMode = 'escaped';
		});
	}
}