import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from '@smart-webcomponents-angular/button';
import { WindowComponent } from '@smart-webcomponents-angular/window';

import { ButtonModule } from '@smart-webcomponents-angular/button';

import { WindowModule } from '@smart-webcomponents-angular/window';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  ButtonModule, WindowModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
	@ViewChild('window', { read: WindowComponent, static: false }) smartWindow!: WindowComponent;
	@ViewChild('window2', { read: WindowComponent, static: false }) smartWindow2!: WindowComponent;

	onButtonClick(event: any): void {
		const smartWindows = [this.smartWindow, this.smartWindow2];

		for (let w = 0; w < smartWindows.length; w++) {
			smartWindows[w].opened = !smartWindows[w].opened;
		}
	}

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