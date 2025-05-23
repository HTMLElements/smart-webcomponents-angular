import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from '@smart-webcomponents-angular/button';
import { ToastComponent } from '@smart-webcomponents-angular/toast';

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
	@ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
	@ViewChild('toast', { read: ToastComponent, static: false }) toast!: ToastComponent;

	buttonClickHandler() {
		this.toast.open();
		window.Smart.Render()
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