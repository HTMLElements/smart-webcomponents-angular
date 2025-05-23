import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from '@smart-webcomponents-angular/button';
import { GaugeComponent } from '@smart-webcomponents-angular/gauge';
import { ToggleButtonComponent } from '@smart-webcomponents-angular/button';

import { ButtonModule } from '@smart-webcomponents-angular/button';

import { GaugeModule } from '@smart-webcomponents-angular/gauge';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  ButtonModule, GaugeModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
    @ViewChild('gauge', { read: GaugeComponent, static: false }) gauge!: GaugeComponent;
    @ViewChild('togglebutton', { read: ToggleButtonComponent, static: false }) togglebutton!: ToggleButtonComponent;


    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code.
        const that = this;

        that.togglebutton.addEventListener('change', function (event: CustomEvent) {
            that.gauge.coerce = event.detail.value;
        } as EventListener);
        
        that.button.addEventListener('click', function () {
            that.gauge.interval = 2;
        });
    }
}