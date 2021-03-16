import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MaskedTextBoxComponent } from '@smart-webcomponents-angular/maskedtextbox';
import { TextBoxComponent } from '@smart-webcomponents-angular/textbox';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('maskedtextbox', { read: MaskedTextBoxComponent, static: false }) maskedtextbox: MaskedTextBoxComponent;
	@ViewChild('maskedtextbox2', { read: MaskedTextBoxComponent, static: false }) maskedtextbox2: MaskedTextBoxComponent;
	@ViewChild('maskedtextbox3', { read: MaskedTextBoxComponent, static: false }) maskedtextbox3: MaskedTextBoxComponent;
	@ViewChild('maskedtextbox4', { read: MaskedTextBoxComponent, static: false }) maskedtextbox4: MaskedTextBoxComponent;
	@ViewChild('textbox', { read: TextBoxComponent, static: false }) textbox: TextBoxComponent;
	
 
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