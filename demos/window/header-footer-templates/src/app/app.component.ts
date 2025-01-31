import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { GaugeComponent } from '@smart-webcomponents-angular/gauge';
import { PowerButtonComponent, PowerButton } from '@smart-webcomponents-angular/button';
import { WindowComponent } from '@smart-webcomponents-angular/window';

import { GaugeModule } from '@smart-webcomponents-angular/gauge';

import { ButtonModule } from '@smart-webcomponents-angular/button';

import { WindowModule } from '@smart-webcomponents-angular/window';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  GaugeModule, ButtonModule, WindowModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('gauge', { read: GaugeComponent, static: false }) gauge!: GaugeComponent;
	@ViewChild('powerbutton', { read: PowerButtonComponent, static: false }) powerbutton!: PowerButtonComponent;
	@ViewChild('window', { read: WindowComponent, static: false }) smartWindow!: WindowComponent;

	onReady(event: any) {
		const that = this;

		this.smartWindow.nativeElement.querySelector('#power')?.addEventListener('click', function (this: PowerButton): void {
			that['gauge'].disabled = !(<PowerButton>this).checked;
		});
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

		const that = this,
			smartWindow = that.smartWindow,
			gauge = that.gauge;

		gauge.addEventListener('change', function (event: CustomEvent): void {
			if (smartWindow.nativeElement.querySelector('#value')) {
				smartWindow.nativeElement.querySelector('#value')!.textContent = event.detail.value;
			}
		} as EventListener);
	}
}