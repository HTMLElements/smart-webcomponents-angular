import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { RadioButtonComponent } from '@smart-webcomponents-angular/radiobutton';
import { TankComponent } from '@smart-webcomponents-angular/tank';

import { RadioButtonModule } from '@smart-webcomponents-angular/radiobutton';import { TankModule } from '@smart-webcomponents-angular/tank';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  RadioButtonModule, TankModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('radiobutton', { read: RadioButtonComponent, static: false }) radiobutton!: RadioButtonComponent;
    @ViewChild('radiobutton2', { read: RadioButtonComponent, static: false }) radiobutton2!: RadioButtonComponent;
    @ViewChild('radiobutton3', { read: RadioButtonComponent, static: false }) radiobutton3!: RadioButtonComponent;
    @ViewChild('radiobutton4', { read: RadioButtonComponent, static: false }) radiobutton4!: RadioButtonComponent;
    @ViewChild('radiobutton5', { read: RadioButtonComponent, static: false }) radiobutton5!: RadioButtonComponent;
    @ViewChild('radiobutton6', { read: RadioButtonComponent, static: false }) radiobutton6!: RadioButtonComponent;
    @ViewChild('radiobutton7', { read: RadioButtonComponent, static: false }) radiobutton7!: RadioButtonComponent;
    @ViewChild('radiobutton8', { read: RadioButtonComponent, static: false }) radiobutton8!: RadioButtonComponent;
    @ViewChild('radiobutton9', { read: RadioButtonComponent, static: false }) radiobutton9!: RadioButtonComponent;
    @ViewChild('radiobutton10', { read: RadioButtonComponent, static: false }) radiobutton10!: RadioButtonComponent;
    @ViewChild('radiobutton11', { read: RadioButtonComponent, static: false }) radiobutton11!: RadioButtonComponent;
    @ViewChild('radiobutton12', { read: RadioButtonComponent, static: false }) radiobutton12!: RadioButtonComponent;
    @ViewChild('radiobutton13', { read: RadioButtonComponent, static: false }) radiobutton13!: RadioButtonComponent;
    @ViewChild('radiobutton14', { read: RadioButtonComponent, static: false }) radiobutton14!: RadioButtonComponent;
    @ViewChild('tank', { read: TankComponent, static: false }) tank!: TankComponent;
    @ViewChild('scaleWidth', { read: ElementRef, static: false }) scaleWidth!: ElementRef;
    @ViewChild('scaleHeight', { read: ElementRef, static: false }) scaleHeight!: ElementRef;
    @ViewChild('trackWidth', { read: ElementRef, static: false }) trackWidth!: ElementRef;
    @ViewChild('trackHeight', { read: ElementRef, static: false }) trackHeight!: ElementRef;

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

        const setLogAndUpdateSize = function () {
            if (that.tank.scalePosition === 'far') {
                that.scaleWidth.nativeElement.innerHTML = window.getComputedStyle(that.tank.nativeElement.getElementsByClassName('smart-scale')[1]).getPropertyValue('width');
                that.scaleHeight.nativeElement.innerHTML = window.getComputedStyle(that.tank.nativeElement.getElementsByClassName('smart-scale')[1]).getPropertyValue('height');
            }
            else {
                that.scaleWidth.nativeElement.innerHTML = window.getComputedStyle(that.tank.nativeElement.getElementsByClassName('smart-scale')[0]).getPropertyValue('width');
                that.scaleHeight.nativeElement.innerHTML = window.getComputedStyle(that.tank.nativeElement.getElementsByClassName('smart-scale')[0]).getPropertyValue('height');
            }
            that.trackWidth.nativeElement.innerHTML = window.getComputedStyle(that.tank.nativeElement.getElementsByClassName('smart-track')[0]).getPropertyValue('width');
            that.trackHeight.nativeElement.innerHTML = window.getComputedStyle(that.tank.nativeElement.getElementsByClassName('smart-track')[0]).getPropertyValue('height');

            const size = <any>that.tank.getOptimalSize();
            that.tank.nativeElement.style.width = size.width + 'px';
            that.tank.nativeElement.style.height = size.height + 'px';
        };
        that.radiobutton.addEventListener('change', function (event: CustomEvent) {
            if (event.detail.value) {
                that.tank.max = 2000000;
                setLogAndUpdateSize();
            }
        } as EventListener);
        that.radiobutton2.addEventListener('change', function (event: CustomEvent) {
            if (event.detail.value) {
                that.tank.max = 2000;
                setLogAndUpdateSize();
            }
        } as EventListener);
        that.radiobutton3.addEventListener('change', function (event: CustomEvent) {
            const tank = document.getElementById('tank');
            if (event.detail.value) {
                that.tank.max = 20;
                setLogAndUpdateSize();
            }
        } as EventListener);
        that.radiobutton4.addEventListener('change', function (event: CustomEvent) {
            if (event.detail.value) {
                that.tank.min = -2000000;
                setLogAndUpdateSize();
            }
        } as EventListener);
        that.radiobutton5.addEventListener('change', function (event: CustomEvent) {
            if (event.detail.value) {
                that.tank.min = -2000;
                setLogAndUpdateSize();
            }
        } as EventListener);
        that.radiobutton6.addEventListener('change', function (event: CustomEvent) {
            if (event.detail.value) {
                that.tank.min = -20;
                setLogAndUpdateSize();
            }
        } as EventListener);
        that.radiobutton11.addEventListener('change', function (event: CustomEvent) {
            if (event.detail.value) {
                that.tank.orientation = 'horizontal';
                setLogAndUpdateSize();
            }
        } as EventListener);
        that.radiobutton12.addEventListener('change', function (event: CustomEvent) {
            if (event.detail.value) {
                that.tank.orientation = 'vertical';
                setLogAndUpdateSize();
            }
        } as EventListener);
        that.radiobutton7.addEventListener('change', function (event: CustomEvent) {
            if (event.detail.value) {
                that.tank.scalePosition = 'near';
                setLogAndUpdateSize();
            }
        } as EventListener);
        that.radiobutton8.addEventListener('change', function (event: CustomEvent) {
            if (event.detail.value) {
                that.tank.scalePosition = 'far';
                setLogAndUpdateSize();
            }
        } as EventListener);
        that.radiobutton9.addEventListener('change', function (event: CustomEvent) {
            if (event.detail.value) {
                that.tank.scalePosition = 'both';
                setLogAndUpdateSize();
            }
        } as EventListener);
        that.radiobutton10.addEventListener('change', function (event: CustomEvent) {
            if (event.detail.value) {
                that.tank.scalePosition = 'none';
                setLogAndUpdateSize();
            }
        } as EventListener);

        that.radiobutton13.addEventListener('change', function (event: CustomEvent) {
            if (event.detail.value) {
                that.tank.labelsVisibility = 'all';
                setLogAndUpdateSize();
            }
        } as EventListener);
        that.radiobutton14.addEventListener('change', function (event: CustomEvent) {
            if (event.detail.value) {
                that.tank.labelsVisibility = 'none';
                setLogAndUpdateSize();
            }
        } as EventListener);
    }
}