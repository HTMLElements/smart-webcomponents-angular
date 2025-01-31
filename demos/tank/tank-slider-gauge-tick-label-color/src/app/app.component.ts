import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from '@smart-webcomponents-angular/button';
import { GaugeComponent } from '@smart-webcomponents-angular/gauge';
import { SliderComponent } from '@smart-webcomponents-angular/slider';
import { TankComponent } from '@smart-webcomponents-angular/tank';

import { ButtonModule } from '@smart-webcomponents-angular/button';

import { GaugeModule } from '@smart-webcomponents-angular/gauge';

import { SliderModule } from '@smart-webcomponents-angular/slider';

import { TankModule } from '@smart-webcomponents-angular/tank';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ ButtonModule, GaugeModule, SliderModule, TankModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
    @ViewChild('button2', { read: ButtonComponent, static: false }) button2!: ButtonComponent;
    @ViewChild('button3', { read: ButtonComponent, static: false }) button3!: ButtonComponent;
    @ViewChild('button4', { read: ButtonComponent, static: false }) button4!: ButtonComponent;
    @ViewChild('button5', { read: ButtonComponent, static: false }) button5!: ButtonComponent;
    @ViewChild('gauge', { read: GaugeComponent, static: false }) gauge!: GaugeComponent;
    @ViewChild('slider', { read: SliderComponent, static: false }) slider!: SliderComponent;
    @ViewChild('tank', { read: TankComponent, static: false }) tank!: TankComponent;


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

        that.button.addEventListener('click', function () {
            that.slider.nativeElement.style.setProperty('--smart-border', 'red');
            that.tank.nativeElement.style.setProperty('--smart-border', 'red');
            that.gauge.nativeElement.style.setProperty('--smart-border', 'red');
        });
        that.button2.addEventListener('click', function () {
            that.slider.nativeElement.style.setProperty('--smart-border', 'blue');
            that.tank.nativeElement.style.setProperty('--smart-border', 'blue');
            that.gauge.nativeElement.style.setProperty('--smart-border', 'blue');
        });
        that.button3.addEventListener('click', function () {
            that.slider.nativeElement.style.setProperty('--smart-background-color', 'red');
            that.tank.nativeElement.style.setProperty('--smart-background-color', 'red');
            that.gauge.nativeElement.style.setProperty('--smart-background-color', 'red');
        });
        that.button4.addEventListener('click', function () {
            that.slider.nativeElement.style.setProperty('--smart-background-color', 'blue');
            that.tank.nativeElement.style.setProperty('--smart-background-color', 'blue');
            that.gauge.nativeElement.style.setProperty('--smart-background-color', 'blue');
        });
        that.button5.addEventListener('click', function () {
            that.slider.nativeElement.style.width = '500px';
            that.tank.nativeElement.style.height = '100px';
            that.gauge.nativeElement.style.width = '200px';
        });
    }
}