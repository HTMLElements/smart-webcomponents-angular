import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { DropDownButtonComponent } from '@smart-webcomponents-angular/dropdownbutton';
import { RadioButtonComponent, RadioButton } from '@smart-webcomponents-angular/radiobutton';
import { TankComponent } from '@smart-webcomponents-angular/tank';

import { DropDownButtonModule } from '@smart-webcomponents-angular/dropdownbutton';

import { RadioButtonModule } from '@smart-webcomponents-angular/radiobutton';

import { TankModule } from '@smart-webcomponents-angular/tank';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  DropDownButtonModule, RadioButtonModule, TankModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('dropdownbutton', { read: DropDownButtonComponent, static: false }) dropdownbutton!: DropDownButtonComponent;
    @ViewChild('radioButtonLeft', { read: RadioButtonComponent, static: false }) radioButtonLeft!: RadioButtonComponent;
    @ViewChild('radioButtonRight', { read: RadioButtonComponent, static: false }) radioButtonRight!: RadioButtonComponent;
    @ViewChild('radioButtonTop', { read: RadioButtonComponent, static: false }) radioButtonTop!: RadioButtonComponent;
    @ViewChild('radioButtonBottom', { read: RadioButtonComponent, static: false }) radioButtonBottom!: RadioButtonComponent;
    @ViewChild('radioButtonDefault', { read: RadioButtonComponent, static: false }) radioButtonDefault!: RadioButtonComponent;
    @ViewChild('radioButtonDropDownButton', { read: RadioButtonComponent, static: false }) radioButtonDropDownButton!: RadioButtonComponent;
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

        const that = this,
            dropDownButton = that.dropdownbutton;

        that.radioButtonLeft.addEventListener('change', function (): void {
            dropDownButton.dropDownButtonPosition = 'left';
        });

        that.radioButtonRight.addEventListener('change', function (): void {
            dropDownButton.dropDownButtonPosition = 'right';
        });

        that.radioButtonTop.addEventListener('change', function (): void {
            dropDownButton.dropDownButtonPosition = 'top';
        });

        that.radioButtonBottom.addEventListener('change', function (): void {
            dropDownButton.dropDownButtonPosition = 'bottom';
        });

        that.radioButtonDefault.addEventListener('change', function (): void {
            dropDownButton.dropDownOpenMode = 'default';
        });

        that.radioButtonDropDownButton.addEventListener('change', function (): void {
            dropDownButton.dropDownOpenMode = 'dropDownButton';
        });

        dropDownButton.addEventListener('change', function (event: any): void {
            dropDownButton.placeholder = event.detail.value;
        });

        dropDownButton.placeholder = that.tank.value;
    }
}