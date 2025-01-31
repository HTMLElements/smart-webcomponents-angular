import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { SwitchButtonComponent } from '@smart-webcomponents-angular/switchbutton';

import { SwitchButtonModule } from '@smart-webcomponents-angular/switchbutton';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  SwitchButtonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('switchButton', { read: SwitchButtonComponent, static: false }) switchButton!: SwitchButtonComponent;
	@ViewChild('log', { read: ElementRef, static: false }) log!: ElementRef;

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
			smartSwitchButton = that.switchButton,
			log = that.log.nativeElement;

		log.textContent = "false";

		smartSwitchButton.addEventListener('change', function (event: CustomEvent): void {
			const checkStatus = event.detail.value;

			log.textContent = checkStatus;
		} as EventListener);
	}
}