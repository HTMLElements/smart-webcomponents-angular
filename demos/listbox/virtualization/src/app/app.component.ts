import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from '@smart-webcomponents-angular/button';
import { ListBoxComponent } from '@smart-webcomponents-angular/listbox';

import { ButtonModule } from '@smart-webcomponents-angular/button';

import { ListBoxModule } from '@smart-webcomponents-angular/listbox';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  ButtonModule, ListBoxModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
	@ViewChild('listbox', { read: ListBoxComponent, static: false }) listbox!: ListBoxComponent;

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
		let array: any = [];

		for (let i = 0; i < 1000000; i++) {
			array.push("Item" + i);
		}

		that.button.nativeElement.onclick = function (): void {
			that.listbox.dataSource = array;
		};
	}
}