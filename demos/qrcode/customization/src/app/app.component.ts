import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { QRcodeComponent } from '@smart-webcomponents-angular/qrcode';
import { ColorPickerComponent } from '@smart-webcomponents-angular/colorpicker';
import { NumberInputComponent } from '@smart-webcomponents-angular/numberinput';
import { CheckBoxComponent } from '@smart-webcomponents-angular/checkbox';
import { ButtonComponent } from '@smart-webcomponents-angular/button';

import { QRcodeModule } from '@smart-webcomponents-angular/qrcode';

import { ColorPickerModule } from '@smart-webcomponents-angular/colorpicker';

import { NumberInputModule } from '@smart-webcomponents-angular/numberinput';

import { CheckBoxModule } from '@smart-webcomponents-angular/checkbox';

import { ButtonModule } from '@smart-webcomponents-angular/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  QRcodeModule, ColorPickerModule, NumberInputModule, CheckBoxModule, ButtonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('qrcodeToStyle', { read: QRcodeComponent, static: false }) qrcodeToStyle!: QRcodeComponent;
	@ViewChild('backgroundColorPicker', { read: ColorPickerComponent, static: false }) backgroundColorPicker!: ColorPickerComponent;
	@ViewChild('lineColorPicker', { read: ColorPickerComponent, static: false }) lineColorPicker!: ColorPickerComponent;
	@ViewChild('lineWidthInput', { read: NumberInputComponent, static: false }) lineWidthInput!: NumberInputComponent;
	@ViewChild('labelDisplayCheck', { read: CheckBoxComponent, static: false }) labelDisplayCheck!: CheckBoxComponent;
	@ViewChild('labelColorPicker', { read: ColorPickerComponent, static: false }) labelColorPicker!: ColorPickerComponent;
	@ViewChild('labelFontSizeInput', { read: NumberInputComponent, static: false }) labelFontSizeInput!: NumberInputComponent;
	@ViewChild('applyBtn', { read: ButtonComponent, static: false }) applyBtn!: ButtonComponent;
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
	}
	
	apply() {
		this.qrcodeToStyle.backgroundColor = this.backgroundColorPicker.value;
		this.qrcodeToStyle.lineColor = this.lineColorPicker.value;
		this.qrcodeToStyle.squareWidth = parseInt(this.lineWidthInput.value);
		this.qrcodeToStyle.displayLabel = this.labelDisplayCheck.checked;
		this.qrcodeToStyle.labelColor = this.labelColorPicker.value;
		this.qrcodeToStyle.labelFontSize = parseInt(this.labelFontSizeInput.value);
	}	
}