import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { PasswordTextBoxComponent } from '@smart-webcomponents-angular/passwordtextbox';

import { PasswordTextBoxModule } from '@smart-webcomponents-angular/passwordtextbox';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  PasswordTextBoxModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('passwordtextbox', { read: PasswordTextBoxComponent, static: false }) passwordtextbox!: PasswordTextBoxComponent;
	@ViewChild('eventLog', { read: ElementRef, static: false }) eventLog!: ElementRef;


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

		that.passwordtextbox.addEventListener('change', function (event: CustomEvent) {
			that.eventLog.nativeElement.innerHTML = that.passwordtextbox.value;
		} as EventListener);
		
		that.passwordtextbox.addEventListener('keyup', function (event: CustomEvent) {
			that.eventLog.nativeElement.innerHTML = 'Keyup: ' + that.passwordtextbox.value;
		} as EventListener);
	}
}