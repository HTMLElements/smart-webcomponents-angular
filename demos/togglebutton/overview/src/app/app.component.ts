import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ToggleButtonComponent } from '@smart-webcomponents-angular/togglebutton';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('togglebutton', { read: ToggleButtonComponent, static: false }) togglebutton: ToggleButtonComponent;
	@ViewChild('togglebutton2', { read: ToggleButtonComponent, static: false }) togglebutton2: ToggleButtonComponent;
	@ViewChild('togglebutton3', { read: ToggleButtonComponent, static: false }) togglebutton3: ToggleButtonComponent;
	@ViewChild('togglebutton4', { read: ToggleButtonComponent, static: false }) togglebutton4: ToggleButtonComponent;
	@ViewChild('togglebutton5', { read: ToggleButtonComponent, static: false }) togglebutton5: ToggleButtonComponent;
	@ViewChild('togglebutton6', { read: ToggleButtonComponent, static: false }) togglebutton6: ToggleButtonComponent;
	@ViewChild('togglebutton7', { read: ToggleButtonComponent, static: false }) togglebutton7: ToggleButtonComponent;
	@ViewChild('togglebutton8', { read: ToggleButtonComponent, static: false }) togglebutton8: ToggleButtonComponent;
	@ViewChild('togglebutton9', { read: ToggleButtonComponent, static: false }) togglebutton9: ToggleButtonComponent;
	@ViewChild('togglebutton10', { read: ToggleButtonComponent, static: false }) togglebutton10: ToggleButtonComponent;
	@ViewChild('togglebutton11', { read: ToggleButtonComponent, static: false }) togglebutton11: ToggleButtonComponent;
	@ViewChild('togglebutton12', { read: ToggleButtonComponent, static: false }) togglebutton12: ToggleButtonComponent;
	@ViewChild('togglebutton13', { read: ToggleButtonComponent, static: false }) togglebutton13: ToggleButtonComponent;
	@ViewChild('togglebutton14', { read: ToggleButtonComponent, static: false }) togglebutton14: ToggleButtonComponent;
	@ViewChild('togglebutton15', { read: ToggleButtonComponent, static: false }) togglebutton15: ToggleButtonComponent;
	@ViewChild('togglebutton16', { read: ToggleButtonComponent, static: false }) togglebutton16: ToggleButtonComponent;
	@ViewChild('togglebutton17', { read: ToggleButtonComponent, static: false }) togglebutton17: ToggleButtonComponent;
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	init(): void {
		// init code.
	    
    
        const toggleButtons = document.getElementsByClassName('exclusive-selection');
        for (let i = 0; i < toggleButtons.length; i++) {
            toggleButtons[i].addEventListener('change', function (event) {
                if (event.detail.value) {
                    for (let k = 0; k < toggleButtons.length; k++) {
                        if (toggleButtons[k] !== this) {
                            toggleButtons[k].checked = false;
                        }
                    }
                }
            });
        }
    

	}	
}