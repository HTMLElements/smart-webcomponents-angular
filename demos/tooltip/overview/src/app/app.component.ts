import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ToggleButtonComponent, ButtonComponent } from '@smart-webcomponents-angular/button';
import { Tooltip, TooltipComponent } from '@smart-webcomponents-angular/tooltip';

import { ButtonModule } from '@smart-webcomponents-angular/button';

import { TooltipModule } from '@smart-webcomponents-angular/tooltip';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  ButtonModule, TooltipModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
	@ViewChild('button2', { read: ButtonComponent, static: false }) button2!: ButtonComponent;
	@ViewChild('button3', { read: ButtonComponent, static: false }) button3!: ButtonComponent;
	@ViewChild('button4', { read: ButtonComponent, static: false }) button4!: ButtonComponent;
	@ViewChild('button5', { read: ButtonComponent, static: false }) button5!: ButtonComponent;
	@ViewChild('button6', { read: ButtonComponent, static: false }) button6!: ButtonComponent;
	@ViewChild('togglebutton', { read: ToggleButtonComponent, static: false }) togglebutton!: ToggleButtonComponent;
	@ViewChild('togglebutton2', { read: ToggleButtonComponent, static: false }) togglebutton2!: ToggleButtonComponent;
	@ViewChild('togglebutton3', { read: ToggleButtonComponent, static: false }) togglebutton3!: ToggleButtonComponent;
	@ViewChild('togglebutton4', { read: ToggleButtonComponent, static: false }) togglebutton4!: ToggleButtonComponent;
	@ViewChild('togglebutton5', { read: ToggleButtonComponent, static: false }) togglebutton5!: ToggleButtonComponent;
	@ViewChild('togglebutton6', { read: ToggleButtonComponent, static: false }) togglebutton6!: ToggleButtonComponent;
	@ViewChild('togglebutton7', { read: ToggleButtonComponent, static: false }) togglebutton7!: ToggleButtonComponent;
	@ViewChild('togglebutton8', { read: ToggleButtonComponent, static: false }) togglebutton8!: ToggleButtonComponent;
	@ViewChild('togglebutton9', { read: ToggleButtonComponent, static: false }) togglebutton9!: ToggleButtonComponent;
	@ViewChild('tooltip', { read: TooltipComponent, static: false }) tooltip!: TooltipComponent;
	@ViewChild('tooltip2', { read: TooltipComponent, static: false }) tooltip2!: TooltipComponent;
	@ViewChild('tooltip3', { read: TooltipComponent, static: false }) tooltip3!: TooltipComponent;
	@ViewChild('tooltip4', { read: TooltipComponent, static: false }) tooltip4!: TooltipComponent;
	@ViewChild('tooltip5', { read: TooltipComponent, static: false }) tooltip5!: TooltipComponent;
	@ViewChild('tooltip6', { read: TooltipComponent, static: false }) tooltip6!: TooltipComponent;
	@ViewChild('tooltip7', { read: TooltipComponent, static: false }) tooltip7!: TooltipComponent;
	@ViewChild('tooltip8', { read: TooltipComponent, static: false }) tooltip8!: TooltipComponent;
	@ViewChild('tooltip9', { read: TooltipComponent, static: false }) tooltip9!: TooltipComponent;


	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
	}

	init(): void {
		// init code.


		const smallMenu = document.getElementById('smallMenu')
		const smallMenuButtons = smallMenu?.querySelectorAll('smart-toggle-button')
		const smallMenuLabels = ['Bold', 'Italic', 'Underline', 'Color']
		const commonSmallMenuTooltip = document.getElementById('commonSmallMenuTooltip')
		const largeMenu = document.getElementById('largeMenu')
		const largeMenuButtons = largeMenu?.querySelectorAll('smart-toggle-button')
		const largeMenuLabels = ['Font Family', 'Font Size', 'Bold', 'Italic', 'Underline', /* 'Color',*/ 'Align Left', 'Align Center', 'Align Right', 'Align Justify']
		const commonLargeMenuTooltip = document.getElementById('commonLargeMenuTooltip');

		if (!commonLargeMenuTooltip || !commonSmallMenuTooltip || !smallMenuButtons || !largeMenuButtons) { return }
		attachTooltipToGroup(commonSmallMenuTooltip as Tooltip, smallMenuButtons, smallMenuLabels);
		attachTooltipToGroup(commonLargeMenuTooltip as Tooltip, largeMenuButtons, largeMenuLabels);

		function attachTooltipToGroup(tooltip: Tooltip, elements: NodeListOf<Element>, labels: string[]) {
			for (let i = 0; i < elements.length; i++) {
				const btn = elements[i], label = labels[i];
				btn.addEventListener('mouseenter', function () {
					tooltip.selector = btn as any;
					tooltip.value = label;
					tooltip.open();
				});
			}
		}


	}
}