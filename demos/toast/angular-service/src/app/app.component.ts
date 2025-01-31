import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ToastComponent } from '@smart-webcomponents-angular/toast';

import { ToastService } from './toast.service';

import { ButtonModule } from '@smart-webcomponents-angular/button';

import { ToastModule } from '@smart-webcomponents-angular/toast';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ ButtonModule, ToastModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('toast', { read: ToastComponent, static: false }) toast!: ToastComponent;

	constructor(private toastService: ToastService) {
	}

	open: Function = (event: CustomEvent): void => {
		this.toastService.openToast(`Toast ${document.body.querySelectorAll('smart-toast-item').length + 1}`);
	}

	closeLast: Function = (event: CustomEvent): void => {
		this.toastService.closeToastLast();
	}

	closeAll: Function = (event: CustomEvent): void => {
		this.toastService.closeToastAll();
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

		const that = this;

		//Sets the ToastComponent for the service
		that.toastService.setToast(that.toast);
	}
}