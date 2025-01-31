import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { GaugeComponent } from '@smart-webcomponents-angular/gauge';
import { SwitchButtonComponent } from '@smart-webcomponents-angular/switchbutton';
import { TabsComponent } from '@smart-webcomponents-angular/tabs';
import { TankComponent } from '@smart-webcomponents-angular/tank';
import { ListBoxComponent } from '@smart-webcomponents-angular/listbox';

import { GaugeModule } from '@smart-webcomponents-angular/gauge';

import { SwitchButtonModule } from '@smart-webcomponents-angular/switchbutton';

import { TabsModule } from '@smart-webcomponents-angular/tabs';

import { TankModule } from '@smart-webcomponents-angular/tank';

import { ListBoxModule } from '@smart-webcomponents-angular/listbox';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ GaugeModule, SwitchButtonModule, TabsModule, TankModule, ListBoxModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('gauge', { read: GaugeComponent, static: false }) gauge!: GaugeComponent;
	@ViewChild('switchbutton', { read: SwitchButtonComponent, static: false }) switchbutton!: SwitchButtonComponent;
	@ViewChild('tabs', { read: TabsComponent, static: false }) tabs!: TabsComponent;
	@ViewChild('tank', { read: TankComponent, static: false }) tank!: TankComponent;
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


	}
}