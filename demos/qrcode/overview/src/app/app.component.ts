import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from '@smart-webcomponents-angular/button';
import { QRcodeComponent } from '@smart-webcomponents-angular/qrcode';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('qrcode', { read: QRcodeComponent, static: false }) qrcode: QRcodeComponent;
	@ViewChild('qrcode2', { read: QRcodeComponent, static: false }) qrcode2: QRcodeComponent;
	@ViewChild('qrcode3', { read: QRcodeComponent, static: false }) qrcode3: QRcodeComponent;
	@ViewChild('qrcode4', { read: QRcodeComponent, static: false }) qrcode4: QRcodeComponent;
	@ViewChild('qrcode5', { read: QRcodeComponent, static: false }) qrcode5: QRcodeComponent;
	@ViewChild('qrcode6', { read: QRcodeComponent, static: false }) qrcode6: QRcodeComponent;
	@ViewChild('qrcode7', { read: QRcodeComponent, static: false }) qrcode7: QRcodeComponent;
	@ViewChild('qrcode8', { read: QRcodeComponent, static: false }) qrcode8: QRcodeComponent;
	@ViewChild('qrcode9', { read: QRcodeComponent, static: false }) qrcode9: QRcodeComponent;
	@ViewChild('qrcode10', { read: QRcodeComponent, static: false }) qrcode10: QRcodeComponent;
	@ViewChild('qrcode11', { read: QRcodeComponent, static: false }) qrcode11: QRcodeComponent;
	@ViewChild('qrcode12', { read: QRcodeComponent, static: false }) qrcode12: QRcodeComponent;
	@ViewChild('qrcode13', { read: QRcodeComponent, static: false }) qrcode13: QRcodeComponent;

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