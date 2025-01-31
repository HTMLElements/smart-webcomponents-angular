import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ComboBoxComponent } from '@smart-webcomponents-angular/combobox';
import { RadioButtonComponent } from '@smart-webcomponents-angular/radiobutton';

import { ComboBoxModule } from '@smart-webcomponents-angular/combobox';

import { RadioButtonModule } from '@smart-webcomponents-angular/radiobutton';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  ComboBoxModule, RadioButtonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('combobox', { read: ComboBoxComponent, static: false }) combobox!: ComboBoxComponent;
    @ViewChild('radioButtonNone', { read: RadioButtonComponent, static: false }) radioButtonNone!: RadioButtonComponent;
    @ViewChild('radioButtonHorizontal', { read: RadioButtonComponent, static: false }) radioButtonHorizontal!: RadioButtonComponent;
    @ViewChild('radioButtonBoth', { read: RadioButtonComponent, static: false }) radioButtonBoth!: RadioButtonComponent;
    @ViewChild('radioButtonVertical', { read: RadioButtonComponent, static: false }) radioButtonVertical!: RadioButtonComponent;
    @ViewChild('radioButtonBottom', { read: RadioButtonComponent, static: false }) radioButtonBottom!: RadioButtonComponent;
    @ViewChild('radioButtonTop', { read: RadioButtonComponent, static: false }) radioButtonTop!: RadioButtonComponent;

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
            comboBox = that.combobox;

        that.radioButtonNone.addEventListener('change', function ():void {
            comboBox.resizeMode = 'none';
        });

        that.radioButtonVertical.addEventListener('change', function ():void {
            comboBox.resizeMode = 'vertical';
        });

        that.radioButtonHorizontal.addEventListener('change', function ():void {
            comboBox.resizeMode = 'horizontal';
        });

        that.radioButtonBoth.addEventListener('change', function ():void {
            comboBox.resizeMode = 'both';
        });

        that.radioButtonBottom.addEventListener('change', function ():void {
            comboBox.dropDownPosition = 'bottom';
        });

        that.radioButtonTop.addEventListener('change', function ():void {
            comboBox.dropDownPosition = 'top';
        });
    }
}