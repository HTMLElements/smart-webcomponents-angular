import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { GaugeComponent } from '@smart-webcomponents-angular/gauge';

import { GaugeModule } from '@smart-webcomponents-angular/gauge';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  GaugeModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('gauge', { read: GaugeComponent, static: false }) gauge!: GaugeComponent;
	@ViewChild('gauge2', { read: GaugeComponent, static: false }) gauge2!: GaugeComponent;
	@ViewChild('gauge3', { read: GaugeComponent, static: false }) gauge3!: GaugeComponent;
	@ViewChild('gauge4', { read: GaugeComponent, static: false }) gauge4!: GaugeComponent;
	@ViewChild('gauge5', { read: GaugeComponent, static: false }) gauge5!: GaugeComponent;
	@ViewChild('gauge6', { read: GaugeComponent, static: false }) gauge6!: GaugeComponent;
	@ViewChild('gauge7', { read: GaugeComponent, static: false }) gauge7!: GaugeComponent;
	@ViewChild('gauge8', { read: GaugeComponent, static: false }) gauge8!: GaugeComponent;
	@ViewChild('gauge9', { read: GaugeComponent, static: false }) gauge9!: GaugeComponent;
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	init(): void {
		// init code.
	    
    
        const silentLabel = document.getElementById('silentLabel')
        const normalLabel = document.getElementById('normalLabel')
        const maxLabel = document.getElementById('maxLabel');

        if(!silentLabel || !normalLabel || !maxLabel) {
            return 
        }

        document.getElementById('mobileGauge')?.addEventListener('change', function (event: CustomEvent) {
            const value = event.detail.value;
            silentLabel.classList.remove('highlighted');
            normalLabel.classList.remove('highlighted');
            maxLabel.classList.remove('highlighted');
            if (value >= 75) {
                maxLabel.classList.add('highlighted');
            }
            else if (value >= 25) {
                normalLabel.classList.add('highlighted');
            }
            else {
                silentLabel.classList.add('highlighted');
            }
        } as EventListener);

	}	
}