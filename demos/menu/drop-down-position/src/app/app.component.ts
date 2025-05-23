import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MenuComponent } from '@smart-webcomponents-angular/menu';
import { RadioButtonComponent } from '@smart-webcomponents-angular/radiobutton';

import { MenuModule } from '@smart-webcomponents-angular/menu';

import { RadioButtonModule } from '@smart-webcomponents-angular/radiobutton';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ MenuModule, RadioButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('menu', { read: MenuComponent, static: false }) menu!: MenuComponent;
    @ViewChild('radiobutton', { read: RadioButtonComponent, static: false }) radiobutton!: RadioButtonComponent;
    @ViewChild('radiobutton2', { read: RadioButtonComponent, static: false }) radiobutton2!: RadioButtonComponent;
    @ViewChild('radiobutton3', { read: RadioButtonComponent, static: false }) radiobutton3!: RadioButtonComponent;
    @ViewChild('radiobutton4', { read: RadioButtonComponent, static: false }) radiobutton4!: RadioButtonComponent;
    @ViewChild('radiobutton5', { read: RadioButtonComponent, static: false }) radiobutton5!: RadioButtonComponent;
    @ViewChild('radiobutton6', { read: RadioButtonComponent, static: false }) radiobutton6!: RadioButtonComponent;
    @ViewChild('radiobutton7', { read: RadioButtonComponent, static: false }) radiobutton7!: RadioButtonComponent;


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

        that.radiobutton.addEventListener('change', function (event) {
            that.menu.dropDownPosition = 'auto';
        });
        that.radiobutton2.addEventListener('change', function (event) {
            that.menu.dropDownPosition = 'bottom-left';
        });
        that.radiobutton3.addEventListener('change', function (event) {
            that.menu.dropDownPosition = 'bottom-right';
        });
        that.radiobutton4.addEventListener('change', function (event) {
            that.menu.dropDownPosition = 'top-left';
        });
        that.radiobutton5.addEventListener('change', function (event) {
            that.menu.dropDownPosition = 'top-right';
        });
        that.radiobutton6.addEventListener('change', function (event) {
            that.menu.dropDownPosition = 'overlay-left';
        });
        that.radiobutton7.addEventListener('change', function (event) {
            that.menu.dropDownPosition = 'overlay-right';
        });
    }
}