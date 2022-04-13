import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from '@smart-webcomponents-angular/button';
import { BarcodeComponent } from '@smart-webcomponents-angular/barcode';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('barcode', { read: BarcodeComponent, static: false }) barcode: BarcodeComponent;
	@ViewChild('barcode2', { read: BarcodeComponent, static: false }) barcode2: BarcodeComponent;
	@ViewChild('barcode3', { read: BarcodeComponent, static: false }) barcode3: BarcodeComponent;
	@ViewChild('barcode4', { read: BarcodeComponent, static: false }) barcode4: BarcodeComponent;
	@ViewChild('barcode5', { read: BarcodeComponent, static: false }) barcode5: BarcodeComponent;
	@ViewChild('barcode6', { read: BarcodeComponent, static: false }) barcode6: BarcodeComponent;
	@ViewChild('barcode7', { read: BarcodeComponent, static: false }) barcode7: BarcodeComponent;
	@ViewChild('barcode8', { read: BarcodeComponent, static: false }) barcode8: BarcodeComponent;
	@ViewChild('barcode9', { read: BarcodeComponent, static: false }) barcode9: BarcodeComponent;
	@ViewChild('barcode10', { read: BarcodeComponent, static: false }) barcode10: BarcodeComponent;
	@ViewChild('barcode11', { read: BarcodeComponent, static: false }) barcode11: BarcodeComponent;
	@ViewChild('barcode12', { read: BarcodeComponent, static: false }) barcode12: BarcodeComponent;
	@ViewChild('barcode13', { read: BarcodeComponent, static: false }) barcode13: BarcodeComponent;

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