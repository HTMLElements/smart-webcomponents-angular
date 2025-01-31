import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { CheckBoxComponent } from '@smart-webcomponents-angular/checkbox';
import { MaskedTextBoxComponent } from '@smart-webcomponents-angular/maskedtextbox';

import { CheckBoxModule } from '@smart-webcomponents-angular/checkbox';import { MaskedTextBoxModule } from '@smart-webcomponents-angular/maskedtextbox';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  CheckBoxModule, MaskedTextBoxModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('checkbox', { read: CheckBoxComponent, static: false }) checkbox!: CheckBoxComponent;
	@ViewChild('maskedtextbox', { read: MaskedTextBoxComponent, static: false }) maskedtextbox!: MaskedTextBoxComponent;


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

		that.checkbox.addEventListener('change', function () {
			that.maskedtextbox.isOverwriteMode = that.checkbox.checked;
		});
	}
}