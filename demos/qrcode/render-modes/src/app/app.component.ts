import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { QRcodeComponent } from '@smart-webcomponents-angular/qrcode';
import { RadioButtonComponent } from '@smart-webcomponents-angular/radiobutton';

import { QRcodeModule } from '@smart-webcomponents-angular/qrcode';

import { RadioButtonModule } from '@smart-webcomponents-angular/radiobutton';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  QRcodeModule, RadioButtonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('qrCode', { read: QRcodeComponent, static: false }) qrCode!: QRcodeComponent;
	@ViewChild('svgOption', { read: RadioButtonComponent, static: false }) svgOption!: RadioButtonComponent;
	@ViewChild('canvasOption', { read: RadioButtonComponent, static: false }) canvasOption!: RadioButtonComponent;

	ngOnInit(): void {
		// onInit code.
	}


	ngAfterViewInit(): void {
		// afterViewInit code.
		if (document.querySelector('#element-html')) {
			document.querySelector('#element-html')!.textContent = this.qrCode.nativeElement.outerHTML;
		}
	}

	svgOptionClick(event: Event) {
		this.qrCode.renderAs = 'svg';
		if (document.querySelector('#element-html')) {
			document.querySelector('#element-html')!.textContent = this.qrCode.nativeElement.outerHTML;
		}
	}

	canvasOptionClick(event: Event) {
		this.qrCode.renderAs = 'canvas';
		if (document.querySelector('#element-html')) {
			document.querySelector('#element-html')!.textContent = this.qrCode.nativeElement.outerHTML;
		}
	}
}