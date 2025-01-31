import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ListBoxComponent } from '@smart-webcomponents-angular/listbox';
import { TabsComponent } from '@smart-webcomponents-angular/tabs';

import { ListBoxModule } from '@smart-webcomponents-angular/listbox';

import { TabsModule } from '@smart-webcomponents-angular/tabs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ ListBoxModule, TabsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('listbox', { read: ListBoxComponent, static: false }) listbox!: ListBoxComponent;
	@ViewChild('listbox2', { read: ListBoxComponent, static: false }) listbox2!: ListBoxComponent;
	@ViewChild('tabs', { read: TabsComponent, static: false }) tabs!: TabsComponent;


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