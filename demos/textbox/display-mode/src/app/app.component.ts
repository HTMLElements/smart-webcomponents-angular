import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { RadioButtonComponent } from '@smart-webcomponents-angular/radiobutton';
import { TextBoxComponent } from '@smart-webcomponents-angular/textbox';

import { RadioButtonModule } from '@smart-webcomponents-angular/radiobutton';

import { TextBoxModule } from '@smart-webcomponents-angular/textbox';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  RadioButtonModule, TextBoxModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('radiobuttondefault', { read: RadioButtonComponent, static: false }) radiobuttondefault!: RadioButtonComponent;
	@ViewChild('radiobuttonescaped', { read: RadioButtonComponent, static: false }) radiobuttonescaped!: RadioButtonComponent;
	@ViewChild('textbox', { read: TextBoxComponent, static: false }) textbox!: TextBoxComponent;


	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
	}

	init(): void {
		// init code.
		const that = this,
			textBox = that.textbox;

		that.radiobuttondefault.addEventListener('change', function () {
			textBox.displayMode = 'default';
		});

		that.radiobuttonescaped.addEventListener('change', function () {
			textBox.displayMode = 'escaped';
		});
	}
}